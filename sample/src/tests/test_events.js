(function(){
	'use strict'
	var MyLayer2 = cc.Layer.extend({
		ctor: function(){
			this._super();

			this.setClickAndMove(false);
			
			var greenBrick = cc.createSprite({
				background: 'green',
				xy: [300,200],
				size: [100,100],
				opacity: 192
			});
			this.addChild(greenBrick);	
			
			this.registerDelegator(false);
			
			var self = this;
			
			this.delegate(greenBrick, {
				'click': function(event){
					var target = event.target;
					var color = cc.color(cc.random(255), cc.random(255), cc.random(255));
					target.attr('background', color);
				},
				'touchstart': function(event){
					if(cc._canvas){
						cc._canvas.style.cursor = 'pointer';
					}
					var target = event.target;
					target.attr({
						zIndex:1
					});

					var offset = target.convertToNodeSpace(event.getLocation());
					offset = cc.p(offset.x - target.width/2, offset.y - target.height/2);

					//创建一个新的层来处理touchmove事件，产生capture的效果
					var delegatorLayer = cc.Layer.create();
					delegatorLayer.attr({
						zIndex: 10
					});
					self.addChild(delegatorLayer);

					self.delegate(delegatorLayer, {
						touchend: function(event){
							target.attr({
								zIndex: 0
							});
							self.undelegate(delegatorLayer);
							delegatorLayer.removeFromParent(true);
						},
						touchmove: function(event){
							var loc = self.convertToNodeSpace(event.getLocation());
							target.attr({
								xy: cc.pSub(loc, offset)
							});											
						}
					});
				}
			});
		}
	});
	
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			this.setClickAndMove(false);
			
			var redBrick = cc.createSprite({
				background: 'red',
				xy: [100,200],
				size: [100,100],
				opacity: 192
			});
			this.addChild(redBrick);
			
			var self = this;
			
			var action = {
				'click': function(event){
					var target = event.target;
					var color = cc.color(cc.random(255), cc.random(255), cc.random(255));
					target.attr('background', color);
				},
				'touchstart': function(event){
					if(cc._canvas){
						cc._canvas.style.cursor = 'pointer';
					}
					var target = event.target;
					target.attr({
						zIndex:1
					});
					
					var offset = target.convertToNodeSpace(event.getLocation());
					offset = cc.p(offset.x - target.width/2, offset.y - target.height/2);
					
					//创建一个新的层来处理touchmove事件，产生capture的效果
					var delegatorLayer = cc.Layer.create();
					delegatorLayer.attr({
						zIndex: 10
					});
					self.addChild(delegatorLayer);
					
					self.delegate(delegatorLayer, {
						touchend: function(event){
							target.attr({
								zIndex: 0
							});
							self.undelegate(delegatorLayer);
							delegatorLayer.removeFromParent(true);
						},
						touchmove: function(event){
							var loc = self.convertToNodeSpace(event.getLocation());
							target.attr({
								xy: cc.pSub(loc, offset)
							});											
						}
					});
				}
			}
			this.delegate(redBrick, action);
			
			var blueBrick = cc.createSprite({
				background: 'blue',
				xy: [150,250],
				size: [100,100],
				opacity: 192				
			});
			this.addChild(blueBrick);
			this.delegate(blueBrick, action);
		}
	});
	
	var MyScene = cc.Scene.extend({
		ctor:function () {
			this.autoReload = true;
			this._super();

			var layer = new MyLayer();
			this.addChild(layer);
			
			this.addChild(new MyLayer2());
		}
	});

	cc.exports.EventTestScene = MyScene;	
})();