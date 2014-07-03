(function(){
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			var bird = cc.createSprite('bird1.png');
			bird.attr({
				x:300,
				y:250,
				scale: 0.5
			});
			
			this.addChild(bird);

			var birdFlying = cc.AnimationFragement.create()
						.animate(0.5, 'bird%d.png', 1, 3);
			
			bird.play(birdFlying).repeat().act();
			
			var flapping = false;
			var birdFlapping = cc.AnimationFragement.create()
						.moveBy(0.5, cc.p(0, 30), cc.EaseOut, 2)
						.reverse()
						.spawn()
						.rotateBy(0.5, -30)
						.reverse();
			
			//Action必须要retain，不然的话异步得不到
			this.retainTarget(birdFlapping.getAction());
			
			var self = this;
			
			this.delegate(this,'click',function(){	
				if(!flapping){
					flapping = true;
					bird.play(birdFlapping).then(function(){
						flapping = false;
					}).act();
				}
			});
			
			this.attr('background', '#f00');
			
			return true;
		}
	});
	
	
	var MyScene = cc.Scene.extend({
		ctor:function () {
			this.autoReload = true;
			this._super();

			var layer = new MyLayer();
			this.addChild(layer);
		}
	});
	
	cc.exports.ActionTestScene = MyScene;
})();
