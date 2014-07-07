(function(){
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			cc.fontFamily.add('American Typewriter', 'res/American Typewriter.ttf');
			cc.fontFamily.add('A Damn Mess', 'res/A Damn Mess.ttf')
			
			var hello = cc.createSprite("@Hello", {
				fontFamily: 'American Typewriter',
				fontSize: 32,
				xy: [300, 300]
			});
			
			this.addChild(hello);

			var hello2 = cc.createSprite("@Hello", {
				fontSize: 32,
				xy: [400, 300]
			});

			this.addChild(hello2);
			
			var world = cc.createSprite("@World", {
				fontFamily: 'A Damn Mess',
				fontSize: 32,
				xy: [500, 300]
			});
			this.addChild(world);
			
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

	cc.exports.LabelTestScene = MyScene;
})();