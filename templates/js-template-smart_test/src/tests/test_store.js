(function(){
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			cc.userData.set("abc中国", "hello中国");
			
			var text = cc.createSprite('@'+cc.userData.get("abc中国"), {
				xy: [400, 300],
				fontSize: 26
			});
			
			this.addChild(text);
			
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

	cc.exports.StoreSceneTest = MyScene;
})();