(function(){
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			for(var i = 0; i < 10; i++){
				var bird = cc.createSprite('bird1.png', {
					xy: [50 + i * 80, 200]
				});
				//auto batching
				this.addChild(bird);
			}

			for(var i = 0; i < 10; i++){
				//manual batching
				var bird = cc.createSprite('bird1.png', {
					xy: [50 + i * 80, 300]
				});
				this.addChildToBatch(bird, 'res/birds.png');

				var bird2 = cc.createSprite('res/bird2.png', {
					xy: [50 + i * 80, 400]
				});
				this.addChild(bird2);
			}			

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

	cc.exports.BatchTestScene = MyScene;
})();