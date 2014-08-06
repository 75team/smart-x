(function(global){
	var _onEnter = cc.Layer.prototype.onEnter;
	var _onExit = cc.Layer.prototype.onExit;
	var isHtml5 = cc.isHtml5;
	
	var timers = [null];
	function setTimer(target, callback, interval, repeat, delay, paused) {
		if(isHtml5){
			setTimeout(function(){
				cc.director.getScheduler().scheduleCallbackForTarget(target, callback, interval / 1000, repeat, delay, paused);
			}, 0);
		}else{
			cc.director.getScheduler().unscheduleCallbackForTarget(target, callback);
			cc.director.getScheduler().scheduleCallbackForTarget(target, callback, interval / 1000, repeat, delay, paused);
		}
		timers.push(callback);
		return timers.length - 1
	}
	function clearTimer(target, id) {
		var callback = timers[id];
		if (callback != null) {
			cc.director.getScheduler().unscheduleCallbackForTarget(target, callback);
			timers[id] = null;
		}
	}
	function clearAllTimers(target){
		cc.director.getScheduler().unscheduleAllCallbacksForTarget(target);
	}
	
	cc.Layer.prototype.setTimeout = function (callback, interval) {
		return setTimer(this||global, callback, interval||0, 0, 0, false);
	};
	cc.Layer.prototype.setInterval = function (callback, interval) {
		return setTimer(this||global, callback, interval||0, cc.REPEAT_FOREVER, 0, false);
	};
	cc.Layer.prototype.clearAllTimers = function(){
		return clearAllTimers(this||global);
	};
	cc.Layer.prototype.clearInterval = cc.Layer.prototype.clearTimeout = function (id) {
		return clearTimer(this||global, id);
	};

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
		if(!this.__initedKeyback && this.backClicked && cc._EventListenerKeyboard){
			this.__initedKeyback = true;
			cc.eventManager.addListener({
				event: cc.EventListener.KEYBOARD,
				onKeyReleased: function(keyCode, event){
					//cc.log("keyCode："+keyCode);
					if(keyCode == cc.KEY.back)
					{
						self.setTimeout(function(){
							self.backClicked();
						}, 300);
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
		
		if(this.__retainedTargets){
			for(var i = 0; i < this.__retainedTargets.length; i++){
				this.__retainedTargets[i].release();
			}
		}
		
		this.clearAllTimers();
		return _onExit.apply(this, arguments);
	};
	
	cc.Layer.prototype.retainTarget = function(node){
		this.__retainedTargets = this.__retainedTargets || [];
		this.__retainedTargets.push(node);
		node.retain();
	}
	
	cc.Layer.prototype.addChildToBatch = function(node, batchName){
		//var batchName = node.getTexture().getName();
		var parent;
		this.__batchNodes = this.__batchNodes || {};
		if(this.__batchNodes[batchName]){
			parent = this.__batchNodes[batchName];
		}else{
			parent = cc.SpriteBatchNode.create(batchName);
			this.__batchNodes[batchName] = parent;
			
			parent.setLocalZOrder(node.getLocalZOrder());
			parent.setGlobalZOrder(node.getGlobalZOrder());
			
			this.addChild(parent);
		}
		parent.addChild(node);
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
			var size = this.attr('size');
			var sprite = cc.createSprite(colorOrImg, {
				xy: [size.width/2, size.height/2],
				zIndex: -1
			});
			this.addChild(sprite);			
		}
	};
	
	function dispatchEvent(event, touch, target, layer){
		touch.type = event;
		touch.target = target;
		target.emit(event, touch);
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

			if (node === layer || cc.rectContainsPoint(rect, local)) {
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
		if(!this.__touchTargets){
			this.registerDelegator(true);
		}
		
        if(this.__touchTargets.indexOf(target) < 0){
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
        		var eventTypes = event.split(',');
        		eventTypes.forEach(function(type){
        			target.on(type.trim(), func);
        		});
        	}else{
        		for(var typeStr in event){
        			if(cc.isFunction(event[typeStr])){
	        			var eventTypes = typeStr.split(',');
	        			var func = event[typeStr];
	        			eventTypes.forEach(function(type){
	        				target.on(type.trim(), func);
	        			});
        			}else{
        				target[typeStr] = event[typeStr];
        			}
        		}
        	}
        }		
	};

	cc.Layer.prototype.undelegate = function(target, event){
		if(this.__touchTargets){
			var idx = this.__touchTargets.indexOf(target);
			if(idx >= 0){
				if(!event){
					this.__touchTargets.splice(idx, 1);
					target.removeAllListeners();
				}else{
					target.removeAllListeners(event);
				}
			}
		}
	};
	
	cc.Layer.prototype.registerDelegator = function(swallowTouches){
		cc.assert(!this.__touchTargets, "The delegator has already registered!")
		
		this.__touchTargets = []
		var self = this;
		
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: swallowTouches,
			onTouchBegan: function (touch, event) {
				var size = self.attr('size'); 
				self.__beginTouchPoint = touch.getLocation();
				
				var locationInNode = self.convertToNodeSpace(self.__beginTouchPoint);
				if(!cc.rectContainsPoint(cc.rect(0, 0, size.width, size.height)
						, locationInNode)){
					return false;
				}						
				
				return delegateEvent(self, touch, 'touchstart');
			},
			onTouchMoved: function (touch, event) {
				var size = self.attr('size'); 
				var location = touch.getLocation();
				var delta = cc.p(location.x - self.__beginTouchPoint.x,
						location.y - self.__beginTouchPoint.y);
				
				if(!self.__clickAndMove && (Math.abs(delta.x) >= Math.min(15, size.width / 30)
						|| Math.abs(delta.y) >= Math.min(15, size.height / 30))){
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