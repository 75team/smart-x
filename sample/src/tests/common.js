(function(){
	var TestLayer = cc.Layer.extend({
		ctor: function(){
			this._super();
			
			var self = this;
			
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
			
			var code = cc.createSprite('@view source', {
				fontSize: 22
			});
			
			var codeBtn = cc.Button.create(code, {
				xy: [150, 50],
				zOrder: 999
			});
			this.addChild(codeBtn);
			
			this.delegate(codeBtn, 'click', function(){
				open(self.getExtras().source);
			});
			
			return true;
		},
		backClicked: function(){
			cc.director.popScene();
		}
	});
	
	cc.exports = {
		TestLayer: TestLayer
	};
})();