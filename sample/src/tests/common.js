(function(){
	var TestLayer = cc.Layer.extend({
		ctor: function(){
			this._super();
			
			var back = cc.createSprite("@back", {
				fontSize: 22
			});
			
			var backBtn = cc.Button.create(back, {
				xy: [650, 50],
				zOrder: 999
			});

			this.addChild(backBtn);
			
			this.delegate(backBtn, 'click', function(){
				cc.director.popScene();
			});
		},
		backClicked: function(){
			cc.director.popScene();
		}
	});
	
	cc.exports = {
		TestLayer: TestLayer
	};
})();