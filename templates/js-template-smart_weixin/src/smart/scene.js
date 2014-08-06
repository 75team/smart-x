(function(global){
	'use strict';
	
	cc.Scene.prototype.reload = function(){
		var myScene = new this.constructor();
		cc.director.runScene(myScene);		
	}

	var _onEnter = cc.Scene.prototype.onEnter;
	var _onExit = cc.Scene.prototype.onExit;
	
	cc.Scene.prototype.onEnter = function(){
		if(this.autoReload){
			if(this.__entered){
				this.reload();
			}else{
				this.__entered = true;
			}
		}
		return _onEnter.apply(this, arguments);
	}
	
	cc.Scene.prototype.onExit = function(){
		return _onExit.apply(this, arguments);
	}
	
	cc.Scene.prototype.putExtra = function(key, value){
		this.__extraData = this.__extraData || {};
		if(arguments.length > 1){
			this.__extraData[key] = value;
		}else{
			cc.mixin(this.__extraData, key);
		}
	}
})(this);