(function(){
	var MyLayer = TestLayer.extend({
		ctor: function(){
			this._super();
			
			var text = cc.createSprite("@normal text button", {
				fontSize: '22'
			});
			
			var btnNormal = cc.Button.create(text, {
				xy: [400, 400]
			});
			
			this.delegate(btnNormal, 'click', function(){
				cc.log('button clicked');
				bird.attr('disabled', !bird.attr('disabled'));
			});
			this.addChild(btnNormal);

			var text2 = cc.createSprite("@disabled text button", {
				fontSize: '22'
			});			
			
			var btnDisabled = cc.Button.create(text2, {
				xy: [400, 350],
				disabled: true
			});
			
			this.delegate(btnDisabled, 'click', function(){
				cc.log('button clicked');
			});
			this.addChild(btnDisabled);
			
			var bird = cc.Button.create("bird1.png", {
				xy: [400, 280],
				scale: 0.5
			});
			this.delegate(bird, 'click', function(){
				cc.log('button clicked');
			});
			this.addChild(bird);
			
			//toggle
			var toggleId = 0;
			var bird2 = cc.Button.create("bird2.png", {
				xy: [400, 200],
				scale: 0.5
			});
			this.delegate(bird2, 'click', function(){
				cc.log('button clicked');
				(toggleId++ % 2) ? cc.ungray(bird2) : cc.gray(bird2);
			});
			this.addChild(bird2);
			
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

	cc.exports.ButtonsTestScene = MyScene;
})();