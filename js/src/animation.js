(function(global){
	'use strict';
	
	var _actionCache = {
			
	};
	
	function Animation(){
		
	}
	
	var getAnimFrames = function(name, startIndex, endIndex) {
		var frames = [],
		i = 0,
		startIndex = startIndex || 0;
		var reversed = false, cached = false;

		if(endIndex == null){
			//没有限定范围只能从cache中取
			endIndex = 99999;
			cached = true;
		}

		if(startIndex > endIndex){
			var tmp = endIndex;
			endIndex = startIndex;
			startIndex = tmp;
			reversed = true;
		}
		var length = (endIndex - startIndex) + 1;

		do {
			var frameName = name.replace('%d', startIndex + i),
			frame = cc.getSpriteFrame(frameName, cached);

			if(frame) {
				frames.push(frame);
			}else {
				break;
			}

		} while (++i < length);

		if(reversed){ 
			frames.reverse();
		}

		return frames; 
	};
	
	cc.mixin(Animation.prototype, {
		getActionList: function(){
			this.__actions = this.__actions || [];
			return this.__actions;
		},
		getAction: function(){
			this.__spawn = this.__spawn || [];
			if(this.getActionList().length > 0){
				this.spawn();
			}
			if(this.__spawn.length > 1){
				return cc.Spawn.create.apply(cc.Spawn, this.__spawn);
			}else if(this.__spawn.length == 1){
				return this.__spawn[0];
			}
		},
		addAction: function(actionCls, args, easing, rate){
			var actions;
			
			if(cc.isString(actionCls)){
				actionCls = _actionCache[actionCls];
				cc.assert(actionCls, 'the animation fragement did not exists');
			}
			if(actionCls instanceof Animation){
				actionCls = actionCls.getAction();
			}
			
			if(actionCls instanceof cc.Action){
				rate = easing;
				easing = args;
				actions = [actionCls];
			}else{
				for(var i = args.length - 1; i >= 0; i--){
					if(args[i] !== undefined){
						break;
					}
				}
				args.length = i + 1;
				actions = [actionCls.create.apply(actionCls, args)];
			}
			if(easing){
				//rate = rate || 2;
				var easingArgs = [].slice.call(arguments, 3);
				for(var i = easingArgs.length - 1; i >= 0; i--){
					if(easingArgs[i] !== undefined){
						//easingArgs.length = i + 1;
						break;
					}
				}
				easingArgs.length = i + 1;
				//cc.log(i, easingArgs);
				actions[0] = easing.create.apply(easing, [actions[0]].concat(easingArgs));
			}
			var actionSeq = this.getActionList();
			actionSeq.push.apply(actionSeq, actions);
			return this;
		},	
		delay: function(time){
			return this.addAction(cc.DelayTime, [time]);
		},
		/**
		 *  times - repeat time
		 *  fromWhere - default 0, repeat all sequences before
		 */
		repeat: function(times, fromWhere){
			times = times || 9999999;
			fromWhere = fromWhere || 0;
			var actionSeq = this.getActionList();
			if(actionSeq.length > 0){
				var action = cc.Sequence.create.apply(cc.Sequence, actionSeq.slice(-fromWhere));
				action = cc.Repeat.create(action, times);
				if(fromWhere == 0) actionSeq.length = 0;
				else actionSeq.length = actionSeq.length - fromWhere;
				actionSeq.push(action);
			}
			return this;        
		},
		reverse: function(){
			var actionSeq = this.getActionList();
			if(actionSeq.length > 0){
				var action = actionSeq[actionSeq.length - 1];
				actionSeq.push(action.reverse());
			}
			return this;
		},
		reverseAll: function(){
			var actionSeq = this.getActionList();
			if(actionSeq.length > 0){
				var action = cc.Sequence.create.apply(cc.Sequence, actionSeq);
				actionSeq.push(action.reverse());
			}
			return this;
		},
		then: function(callback){
			callback = cc.CallFunc.create(callback, this);
			this.getActionList().push(callback);            
			return this;
		},
		bezierBy: function(dur, conf, easing, rate){
			return this.addAction(cc.BezierBy, [dur, conf], easing, rate);
		},
		bezierTo: function(dur, conf, easing, rate){
			return this.addAction(cc.BezierTo, [dur, conf], easing, rate);
		},
		blink: function(dur, blinks, easing, rate){
			return this.addAction(cc.Blink, [dur, blinks], easing, rate);
		},
		fadeIn: function(dur, easing, rate){
			return this.addAction(cc.FadeIn, [dur], easing, rate);
		},
		fadeOut: function(dur, easing, rate){
			return this.addAction(cc.FadeOut, [dur], easing, rate);
		},
		fadeTo: function(dur, opacity, easing, rate){
			return this.addAction(cc.FadeTo, [dur, opacity], easing, rate);
		},
		jumpBy: function(dur, pos, height, times, easing, rate){
			return this.addAction(cc.JumpBy, [dur, pos, height, times || 1], easing, rate);        
		},
		jumpTo: function(dur, pos, height, times, easing, rate){
			return this.addAction(cc.JumpTo, [dur, pos, height, times || 1], easing, rate);
		},
		moveBy: function(dur, pos, easing, rate){
			return this.addAction(cc.MoveBy, [dur, pos], easing, rate);
		},
		moveTo: function(dur, pos, easing, rate){
			return this.addAction(cc.MoveTo, [dur, pos], easing, rate);
		},
		rotateBy: function(dur, deltaX, deltaY, easing, rate){
			return this.addAction(cc.RotateBy, [dur, deltaX, deltaY], easing, rate);
		},
		rotateTo: function(dur, deltaX, deltaY, easing, rate){
			return this.addAction(cc.RotateTo, [dur, deltaX, deltaY], easing, rate);
		},
		scaleBy: function(dur, sx, sy, easing, rate){
			return this.addAction(cc.ScaleBy, [dur, sx, sy], easing, rate);
		},
		scaleTo: function(dur, sx, sy, easing, rate){
			return this.addAction(cc.ScaleTo, [dur, sx, sy], easing, rate);
		},
		skewBy: function(dur, sx, sy, easing, rate){
			return this.addAction(cc.SkewBy, [dur, sx, sy], easing, rate);
		},
		skewTo: function(dur, sx, sy, easing, rate){
			return this.addAction(cc.SkewTo, [dur, sx, sy], easing, rate);
		},
		tintBy: function(dur, deltaR, deltaG, deltaB, easing, rate){
			return this.addAction(cc.TintBy, [dur, deltaR, deltaG, deltaB], easing, rate);
		},
		tintTo: function(dur, deltaR, deltaG, deltaB, easing, rate){
			return this.addAction(cc.TintTo, [dur, deltaR, deltaG, deltaB], easing, rate);        
		},
		/**
	        sprite.animate(0.2, 'a.png', 'b.png', 'c.png');
	        sprite.animate(0.2, 'abc_%d.png');
	        sprite.animate(0.2, 'abc_%d.png', startIndex, endIndex);
		 */
		animate: function(dur /* frames */){
			var frames = [].slice.call(arguments, 1);

			if(/%d/.test(frames[0])){
				frames = getAnimFrames.apply(null, frames);
			}else{
				frames = frames.map(function(frameName){
					return cc.getSpriteFrame(frameName);
				});
			}

			var animation = cc.Animation.create(frames, dur/frames.length);
			this.getActionList().push(cc.Animate.create(animation));
			return this;			
		},
		spawn: function(){
			this.__spawn = this.__spawn || [];
			var actionSeq = this.getActionList();
			if(actionSeq.length > 0){
				var action = actionSeq[0];
				if(actionSeq.length > 1){
					action = cc.Sequence.create.apply(cc.Sequence, actionSeq);
				}
				this.__spawn.push(action);
				actionSeq.length = 0;
			}
			return this;
		}
	});
	
	Animation.prototype.play = Animation.prototype.addAction;
	
	cc.actionCache = {
		add: function(key, action){
			cc.assert(!(key in _actionCache), "animation " + key + " already exists!");
			if(action instanceof Animation){
				_actionCache[key] = action;
			}else if(action instanceof cc.Action){
				_actionCache[key] = (new Animation()).play(action);
			}else{
				_actionCache[key] = new Animation;
			}
			return _actionCache[key];
		},
		get: function(key){
			return _actionCache[key];
		}
	};
	
	cc.mixin(cc.Node.prototype, new Animation);
	
	cc.AnimationFragement = Animation;
	cc.AnimationFragement.create = function(){
		return new cc.AnimationFragement();
	}
	
	cc.Node.prototype.act = function(){
		var action = this.getAction();
		if(action){
			this.runAction(action);
			this.getActionList().length = 0;
			this.__spawn.length = 0;
		}
	}
	
})(this);