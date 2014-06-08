(function(global){
	
	var MyLayer = cc.Layer.extend({
		ctor: function(){
			this._super();
			var size = cc.director.getWinSize();

			var pageView = new cc.PageView(cc.size(size.width, size.height/2),
					size.width/2, 5);

			this.addChild(pageView);

			var drawNode = cc.DrawNode.create();
			this.addChild(drawNode);

			for(var i = 0; i <= pageView.getMaxPage(); i++){
				var pageLayer = pageView.getPageLayer(i);

				var text = cc.createSprite('@page' + (i+1), {
					anchor: [0.5, 0.5],
					xy: [size.width/4, size.height/4],
					fontSize: 36
				});

				pageLayer.addChild(text);
				pageLayer.attr('background', cc.color(cc.random(255), cc.random(255), cc.random(255)));

				drawNode.drawDot(cc.p(size.width/2+(i-2)*50, 120),10,cc.color(0.3*255,0.3*255,0.3*255,255));
			}

			pageView.attr({
				'anchor': [0.5, 0.5],
				'xy': [0, size.height/4],
			});

			pageView.on('change', function(newPage, oldPage){
				//cc.log(newPage);
				drawNode.clear();
				for(var i = 0; i <= pageView.getMaxPage(); i++){
					if(i === newPage){
						drawNode.drawDot(cc.p(size.width/2+(i-2)*50, 120),10,cc.color(0.6 * 255,0.3 * 255,0.6 * 255,255));
					}else{
						drawNode.drawDot(cc.p(size.width/2+(i-2)*50, 120),10,cc.color(0.3 * 255,0.3 * 255,0.3 * 255,255));
					}
				}
			});

			pageView.setPage(2);			
			return true;
		}
	});
	
	var MyScene = cc.Scene.extend({
		ctor:function () {
			this._super();

			var layer = new MyLayer();
			this.addChild(layer);
		}
	});
	
	global.TestPageViewScene = MyScene;
})(this);