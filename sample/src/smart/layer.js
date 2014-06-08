(function(global){
	var _onEnter = cc.Layer.prototype.onEnter;
	var _onExit = cc.Layer.prototype.onExit;
	
	cc.Layer.prototype.getContext = function(){
		if(!this.__contextDefer){
			this.__contextDefer = cc.Defer.create();
		}
		return this.__contextDefer.promise;
	};
	
	cc.Layer.prototype.onEnter = function(){
		if(!this.__contextDefer){
			this.__contextDefer = cc.Defer.create();
		}
		
		var self = this;
		if(!this.__initedKeyback && this.backClicked){
			this.__initedKeyback = true;
			cc.eventManager.addListener({
				event: cc.EventListener.KEYBOARD,
				onKeyReleased: function(keyCode, event){
					//cc.log("keyCode："+keyCode);
					if(keyCode == cc.KEY.back)
					{
						self.backClicked();
					}
				}
			}, this);			
		}
		
		if(this.backClicked && typeof(history) !== 'undefined'){
			history.pushState({}, '');
			var backClicked = function(state){
				self.backClicked();
			} 
			this.__pushState = backClicked;               
			window.addEventListener('popstate', backClicked);
		}
		
		this.__contextDefer.resolve(cc.director.getRunningScene());
		return _onEnter.apply(this, arguments);
	};
	
	cc.Layer.prototype.onExit = function(){
		if(this.backClicked && typeof(history) !== 'undefined'){
			if(this.__pushState){
				window.removeEventListener('popstate', this.__pushState);
				this.__pushState = null;
			}
		}
		this.clearAllTimers();
		return _onExit.apply(this, arguments);
	};

	cc.Layer.prototype.publish = function(){
		var args = [].slice.apply(arguments);
		this.getContext().then(function(context){
			if(!context.__pubsubEmitter){
				context.__pubsubEmitter = new cc.EventEmitter();
			}
			context.setTimeout(function(){
				context.__pubsubEmitter.emit.apply(context, args);
			}, 0); 
		});
	};
	
	cc.Layer.prototype.subscribe = function(){
		var args = [].slice.apply(arguments);
		this.getContext().then(function(context){
			if(!context.__pubsubEmitter){
				context.__pubsubEmitter = new cc.EventEmitter();
			}
			context.__pubsubEmitter.on.apply(context, args);
		});        
	};
	
	cc.Layer.prototype.unsubscribe = function(){
		var args = [].slice.apply(arguments);
		this.getContext().then(function(context){
			if(!context.__pubsubEmitter){
				context.__pubsubEmitter = new cc.EventEmitter();
			}
			context.__pubsubEmitter.removeListener.apply(context, args);
		});          
	};
	
	cc.Layer.prototype.setBackground = function(colorOrImg){
		if(cc.isColorString(colorOrImg)){
			var colorLayer = cc.LayerColor.create(cc.color(colorOrImg));
			this.addChild(colorLayer, -1);			
		}else{
			var winSize = cc.director.getWinSize();
			var sprite = cc.createSprite(colorOrImg, {
				xy: [winSize.width/2, winSize.height/2],
				zIndex: -1
			});
			this.addChild(sprite);			
		}
	};
	
	function dispatchEvent(event, touch, target, layer){
		touch.type = event;
		target.emit(event, touch, target, layer);
	}
	
	function delegateEvent(layer, touch, event){
		var touchLocation = touch.getLocation();
		var targets = layer.__touchTargets;
		touch.returnValue = true;

		for(var i = 0; i < targets.length; i++){
			var node = targets[i];
			var local = node.convertToNodeSpace(touchLocation);
			var size = node.getContentSize();
			var rect = cc.rect(0, 0, size.width, size.height);

			if (cc.rectContainsPoint(rect, local)) {
				touch.returnValue = true;
				touch.preventDefault = function(){
					touch.returnValue = false;
				}

				if(event === 'touchstart'){
					layer.__touchedTarget = node;
					layer.__currentTarget = node;
				}

				if(event === 'mousemove'){
					if(layer.__mouseoverTarget !== node){
						if(layer.__mouseoverTarget){
							dispatchEvent('mouseleave', touch, layer.__mouseoverTarget, layer);
						}
						dispatchEvent('mouseenter', touch, node, layer);
					}
					layer.__mouseoverTarget = node;
					dispatchEvent('mousemove', touch, node, layer);
				}

				if(event === 'touchmove' && node !== layer.__currentTarget){
					if(layer.__currentTarget){
						dispatchEvent('touchleave', touch, layer.__currentTarget, layer);
					}
					dispatchEvent('touchenter', touch, node, layer);
					layer.__currentTarget = node;
				}

				if(layer.__touchedTarget &&
						event === 'touchmove' && node !== layer.__touchedTarget){
					dispatchEvent('touchend', touch, layer.__touchedTarget, layer);
					layer.__moved = true;
					delete layer.__touchedTarget;
				}

				//touch.returnValue = dispatchEvent(event, touch, node, layer) && touch.returnValue;
				dispatchEvent(event, touch, node, layer);
				return touch.returnValue;
			} 
		}

		if(layer.__touchedTarget &&
				(event === 'touchmove' || event === 'touchend')){
			dispatchEvent('touchend', touch, layer.__touchedTarget, layer);
			if(layer.__currentTarget){
				dispatchEvent('touchleave', touch, layer.__currentTarget, layer);
				delete layer.__currentTarget;
			}
			layer.__moved = true;
			delete layer.__touchedTarget;
		} 

		if(layer.__mouseoverTarget){
			dispatchEvent('mouseleave', touch, layer.__mouseoverTarget, layer);
			delete layer.__mouseoverTarget;
		}

		return false;        
	}
	
	cc.mixin(cc.Layer.prototype, {
		//if this property was set to false, touch move will cancel click event
		__clickAndMove : true,
		setClickAndMove: function(clickAndMove){
			this.__clickAndMove = clickAndMove;
		}
	});
	
	cc.Layer.prototype.delegate = function(target, event, func){
		if(!this.__touchTargets) {this.__touchTargets = []};
        if(this.__touchTargets.indexOf(target) < 0){
        	this.registerDelegator();
            if(!target.on){
                cc.mixin(target, new cc.EventEmitter);
            }
            this.__touchTargets.unshift(target);

            this.__touchTargets.sort(function(a, b){
                return b.getGlobalZOrder() - a.getGlobalZOrder() || 
                			b.getLocalZOrder() - a.getLocalZOrder();
            });
        }
        if(event){
        	if(cc.isString(event)){
        		target.on(event, func);
        	}else{
        		for(var typeStr in event){
        			var eventTypes = typeStr.split(',');
        			var func = event[typeStr];
        			eventTypes.forEach(function(type){
        				target.on(type.trim(), func);
        			});
        		}
        	}
        }		
	};

	cc.Layer.prototype.undelegate = function(target, event){
		if(!this.__touchTargets) {this.__touchTargets = []};
		var idx = this.__touchTargets.indexOf(target);
		if(idx >= 0){
			if(!event){
				this.__touchTargets.splice(idx, 1);
				target.removeAllListeners();
			}else{
				target.removeAllListeners(event);
			}
		}
	};
	
	cc.Layer.prototype.registerDelegator = function(){
		if(!this.__delegatorInited){
			var self = this;
			
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ONE_BY_ONE,
				swallowTouches: true,
				onTouchBegan: function (touch, event) {
					var size = self.attr('size'); 
					var locationInNode = self.convertToNodeSpace(touch.getLocation());
					if(size.width > 0 || size.height > 0){
						if(!cc.rectContainsPoint(cc.rect(0, 0, size.width, size.height)
								, locationInNode)){
							return false;
						}						
					}
					self.__beginTouchPoint = locationInNode;
					return delegateEvent(self, touch, 'touchstart');
				},
				onTouchMoved: function (touch, event) {
					var size = self.attr('size'); 
					if(size.width == 0 && size.height == 0){
						size = cc.director.getWinSize();
					}
					var locationInNode = self.convertToNodeSpace(touch.getLocation());
					var delta = cc.p(locationInNode.x - self.__beginTouchPoint.x,
							locationInNode.y - self.__beginTouchPoint.y);
					
					if(!self.__clickAndMove && (Math.abs(delta.x) >= size.width / 30
							|| Math.abs(delta.y) >= size.height / 30)){
						self.__moved = true;
					}            
					return delegateEvent(self, touch, 'touchmove');					
				},
				onTouchEnded: function (touch, event) {
					var ret = delegateEvent(self, touch, 'touchend');

					if(!self.__moved){
						delegateEvent(self, touch, 'click');
					}
					self.__moved = false;
					
					return ret;
				}
			}, this);
			
			cc.eventManager.addListener({
				event: cc.EventListener.MOUSE,
				onMouseMove: function(event){
					return delegateEvent(self, event, 'mousemove');
				}				
			}, this);
			
			this.__delegatorInited = true;
			
			return true;
		}
		return false;
	};
	
	cc.Layer.prototype.pauseEvent = function(){
		cc.eventManager.pauseTarget(this);
	};
	
	cc.Layer.prototype.resumeEvent = function(){
		cc.eventManager.resumeTarget(this);
	};
	
	cc.Layer.prototype.getExtras = function(){
		return cc.director.getRunningScene().__extraData;
	};
	
})(this);