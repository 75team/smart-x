(function(global){
	if(!cc.isHtml5){
		var LoaderLayer = cc.Layer.extend({
			ctor: function(_resources, selector, target){
				this._super();
				var loaderImage;
				var size = cc.director.getWinSize();
				
				if(cc._loaderImage){
					loaderImage = cc.createSprite(cc._loaderImage, {
						xy: [size.width/2, size.height/2]
					});
				}else{
					loaderImage = cc.createSprite({
						xy: [size.width/2, size.height/2]
					});
				}
				this.addChild(loaderImage);
				
				var per = cc.createSprite('@Loading...0%', {
					xy: [size.width/2, 100],
					fontSize: 24
				});
				this.addChild(per);
				
				cc.loader.load(_resources, 
					function(result, count){ 
						var percent = Math.round(100 * count / _resources.length);
						per.setString('Loading...' + percent + '%');
					},
					function(){
						per.setString('Loading...' + '100%');
						if(selector){
							selector.call(target);
						}
					});
				
				return true;
			}
		});
		
		cc.LoaderScene = cc.Scene.extend({
			initWith:function (_resources, selector, target) {
				var layer = new LoaderLayer(_resources, selector, target);
				this.addChild(layer);
			}			
		});
		
		cc.LoaderScene.preload = function (resources, selector, target) {
			if (!this._instance) {
				this._instance = new cc.LoaderScene();
			}
			this._instance.initWith(resources, selector, target);
			return this._instance;
		}
	}
	
})(this);