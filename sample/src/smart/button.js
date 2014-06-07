(function(global){
'use strict';
	/**
	 	var button = Button.create({
	 		xy: [100, 100]
	 	});
	 	this.delegate(button, 'click', function(){
	 		cc.log('button clicked');
	 	});
	 */
	var Button = cc.Sprite.extend({
		ctor: function(texture){
			this._super(texture);
			this._enabled = true;
			
			var _activated = false;
			
			cc.mixin(this, new cc.EventEmitter);
			
			var _locked = false; //防止重复点击 300ms
			var self = this; 	
			
			this.on('touchstart', function(touch){
				if(!self._enabled || _locked){
					touch.preventDefault();
					return;
				}
				if(!_activated){
					var scale = self.getScaleY(); 
					self.setScale(scale * 0.95);
					_activated = true;
					_locked = true;
					setTimeout(function(){
						_locked = false;
					}, 300);
				}
			});

			this.on('touchend', function(){
				if(_activated){
					var scale = self.getScaleY();
					self.setScale(scale / 0.95);
					_activated = false;
				}
			});

			if(cc._canvas && cc._canvas.style){
				this.on('mouseenter', function(){
					if(self._enabled){
						cc._canvas.style.cursor = 'pointer';
					}
				});

				this.on('mouseleave', function(){
					if(self._enabled){
						cc._canvas.style.cursor = '';
					}
				});
			}
		}
	});

	Object.defineProperty(Button.prototype, 'disabled', {
		get: function(){
			return !this._enabled;
		},
		set: function(disabled){
			this._enabled = !disabled;
			if(disabled){
				cc.gray(this);
			}else{
				cc.ungray(this);
			}
		},
		enumerable: true,
		configurable: false,
	});
	
	Button.create = function(texture, style){
		var button = new Button(texture);
		if(style){
			button.attr(style);
		}
		
		return button;
	};

	cc.Button = Button;
})(this);