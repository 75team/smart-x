(function(){
	'use strict';
	var MyLayer = TestLayer.extend({
		ctor:function () {
			this._super();	
			
			var size = cc.director.getWinSize();
			this.helloLabel = cc.createSprite("@Hello World", {
				fontSize: "38",
				xy: [size.width / 2, 0]
			});
			this.addChild(this.helloLabel, 5);

			var lazyLayer = cc.Layer.create();
			this.addChild(lazyLayer);

			this.sprite = cc.Sprite.create(res.HelloWorld_png);
	        this.sprite.attr({
	            x: size.width / 2,
	            y: size.height / 2,
	            scale: 0.5,
	            rotation: 180
	        });
	        lazyLayer.addChild(this.sprite);	

	        this.sprite.rotateTo(2, 0).scaleTo(2, 1, 1).act();
	        this.helloLabel.moveBy(2.5, cc.p(0, size.height - 40)).spawn();
	        this.helloLabel.tintTo(2.5,255,125,0).act();
		}
	});

	var HelloWorldScene = cc.Scene.extend({
		ctor: function(){
			this.autoReload = true;
			this._super();
		},
		onEnter:function () {
			this._super();
			var layer = new MyLayer();
			this.addChild(layer);
		}
	});
	
	cc.exports = {
		HelloWorldScene: HelloWorldScene
	};
})();