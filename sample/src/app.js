var testCases = [
	{
		name: 'Getting start!',
		click: function(){
			var scene = new HelloWorldScene();
			scene.putExtra('source', 'src/tests/hello_world.js');
			cc.director.pushScene(scene);
		}
	},
	{
		name: 'Animation & Actions',
		click: function(){
			var scene = new ActionTestScene();
			scene.putExtra('source', 'src/tests/test_action.js');
			cc.director.pushScene(scene);
		}
	},
	{
		name: 'Touches & Clicks',
		click: function(){
			var scene = new EventTestScene();
			scene.putExtra('source', 'src/tests/test_events.js');
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Sprite batching',
		click: function(){
			var scene = new BatchTestScene();
			scene.putExtra('source', 'src/tests/test_batching.js');
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Button control',
		click: function(){
			var scene = new ButtonsTestScene();
			scene.putExtra('source', 'src/tests/test_buttons.js');
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'BGM & Effects',
		click: function(){
			var scene = new AudioTestScene();
			scene.putExtra('source', 'src/tests/test_audio.js');
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Label & fonts',
		click: function(){
			var scene = new LabelTestScene();
			scene.putExtra('source', 'src/tests/test_label.js');
			cc.director.pushScene(scene);			
		}
	},	
	{
		name: 'Game datas',
		click: function(){
			var scene = new StoreSceneTest();
			scene.putExtra('source', 'src/tests/test_store.js');
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Simple tiles',
		click: function(){
			var scene = new TestTileMapScene();
			scene.putExtra('source', 'src/tests/test_tilemap.js');
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Page view',
		click: function(){
			var scene = new TestPageViewScene();
			scene.putExtra('source', 'src/tests/test_pageview.js');
			cc.director.pushScene(scene);
		}
	},
];

var DemoLayer = cc.Layer.extend({
    ctor:function () {
    	
        this._super();
        
        cc.spriteFrameCache.addSpriteFrames('res/birds.plist', 'res/birds.png');
        
        var size = cc.director.getWinSize();
        
        var closeBtn = new cc.Button.create(res.CloseNormal_png);
        closeBtn.attr({
        	x: size.width - 20,
        	y: 20,
        	anchorX: 0.5,
        	anchorY: 0.5,
        	//disabled: true,
        	zIndex: 200,
        });
        var self = this;
        this.addChild(closeBtn);
        this.delegate(closeBtn, 'click', function(){
        	//var scene = new HelloWorldScene();
        	//cc.director.pushScene(scene);	
        	self.backClicked();
        });
        
        var title = cc.createSprite('@Smart-x Test Cases', {
        	xy: [400, 390],
        	fontSize: 32,
        	fontFamily: ""
        });
        this.addChild(title);
        
        var cases = testCases.map(function(c){
        	var text = cc.createSprite('@'+c.name, {
        		fontSize: 24,
        		textAlign: 'center',
        		vAlign: 'middle'
        	});
        	text.setDimensions(cc.size(600, 40));
        
        	return text;
        });
        
        var Test = cc.Layer.extend({
        	ctor: function(){
        		cc.Layer.prototype.ctor.call(this);
        	},
        	init: function(){
        		cc.log('aaa');
        		this._contentOffset = cc.p(0,0);
        		this._maxInset = cc.p(0, 0);
        		this._minInset = cc.p(0, 0);
        		this._scrollDistance = cc.p(0, 0);
        		this._touchPoint = cc.p(0, 0);
        		this._touches = [];
        		this._viewSize = cc.size(0, 0);
        		this._parentScissorRect = new cc.Rect(0,0,0,0);
        		this._tmpViewRect = new cc.Rect(0,0,0,0);
        	}
        });
        
        var list = cc.ListView.create(cc.size(600, 300), cases);
        list.setBounceable(false);
        list.attr({
        	xy: [100, 50],
        	zOrder: 11
        });
        var layer = list.getContentLayer();

        list.on('itemClicked', function(item, i){
        	//cc.log(i);
        	testCases[i].click && testCases[i].click();
        });
        list.on('mouseenter', function(item, i){
        	testCases[i].click && item.attr('scale', 1.2);
        	if(cc.isHtml5){
        		cc._canvas.style.cursor = 'pointer';
        	}
        });
        list.on('mouseleave', function(item, i){
        	item.attr('scale', 1.0);
        	if(cc.isHtml5){
        		cc._canvas.style.cursor = '';
        	}
        });        
        this.addChild(list);

        /*cc.game.on('hide', function(){
        	//处理游戏进入后台的情况
        	cc.log('oooo');
        });*/
        
        /*var clipper = cc.ClippingNode.create();
        clipper.attr({
        	anchor: [0, 0],
        	size: size,
        	xy: [0, 0],
        	background: 'rgba(192,192,192,192)'
        });
        clipper.setInverted(true);
        //var drawNode = cc.DrawNode.create();
        //drawNode.drawDot(cc.p(100,100),50,cc.color('blue'));
        //this.addChild(drawNode);
        //clipper.setStencil(drawNode);
        var birdNode = cc.createSprite('bird2.png', {
        	xy: [100, 100]
        });
        clipper.setStencil(birdNode);
        clipper.setStencil(bird);
        clipper.setAlphaThreshold(0);
        //this.addChild(birdNode);
        this.addChild(clipper);*/
        
        return true;
    },
    onExit: function(){
    	this._super();
    	if(cc.isHtml5){
    		cc._canvas.style.cursor = '';
    	}
    },
    backClicked: function(){
    	//cc.log('end');
    	cc.director.end();
    }
});

var DemoScene = cc.Scene.extend({
	ctor: function(){
		this.autoReload = false;
    	this._super();
    	var layer = new DemoLayer();
    	this.addChild(layer);
	}
});

