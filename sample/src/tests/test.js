(function(){
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			return true;
		}
	});
	
	var MyScene = cc.Scene.extend({
		ctor:function () {
			this.autoReload = true;
			this._super();

			var layer = new MyLayer();
			this.addChild(layer);
		},
		onEnter: function(){
			this._super();
			cc.director.setDisplayStats(true);
		},
		onExit: function(){
			cc.director.setDisplayStats(cc.game.config.showFPS);
			this._super();
		}
	});	
	
	cc.exports.Test = MyScene;
})();