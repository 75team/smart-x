var testCases = [
	{
		name: 'Getting start!',
		click: function(){
			var scene = new HelloWorldScene();
			cc.director.pushScene(scene);
		}
	},
	{
		name: 'Animation & Actions',
		click: function(){
			var scene = new ActionTestScene();
			cc.director.pushScene(scene);
		}
	},
	{
		name: 'Touches & Clicks',
		click: function(){
			var scene = new EventTestScene();
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Sprite batching',
		click: function(){
			var scene = new BatchTestScene();
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Button control',
		click: function(){
			var scene = new ButtonsTestScene();
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'BGM & Effects',
		click: function(){
			var scene = new AudioTestScene();
			cc.director.pushScene(scene);			
		}
	},
	{
		name: 'Promise',
		scene: null
	},
	{
		name: 'Native calls',
		scene: null
	},
	{
		name: 'Loaders',
		scene: null
	},
	{
		name: 'Label & fonts',
		scene: null
	},	
	{
		name: 'Game data',
		scene: null
	},
	{
		name: 'Simple tiles',
		scene: null
	},
	{
		name: 'Page view',
		click: function(){
			var scene = new TestPageViewScene();
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
        
        
        /*cc.fontFamily.add('Arial', 'res/American Typewriter.ttf');
        cc.spriteFrameCache.addSpriteFrames('res/birds.plist', 'res/birds.png');
        
        var bird = cc.createSprite('bird1.png',{
        	anchorX: 0,
            x: 100,
        	y: 200,
            fontSize: 44,
            fontFamily: 'Arial',
            //texture1: 'bird3.png rect(0,0,10,10)'
            //color: '#ff0000',
        });
        
        //bird.attr('size', [250, 200]);
        //bird.attr('background', '#ff0');
        
        //cc.log(bird.getContentSize());
        //bird.attr('texture', 'bird2.png');
        
        this.addChild(bird, 10);*/
        
        /*var animation = cc.actionCache.add('birdAction')
        	//.moveBy(0.5, cc.p(50,50)).reverse()
        	.animate(1.5, 'bird%d.png', 1, 3)
        	.delay(1.0)
        	.then(function(){
        		cc.log('ok')
        	})
        	.repeat();
        bird.runAction(animation.getAction());*/
        
        /*var birdFly = cc.AnimationFragement.create()
        				.animate(1.5, 'bird%d.png', 1, 3)
        				.spawn()
        				.moveBy(0.5, cc.p(50,50), cc.EaseOut, 2).reverse();
        
        bird.play(birdFly).repeat().act();*/
        
        /*bird.animate(1.5, 'bird%d.png', 1, 3)
        .delay(1.0)
        .then(function(){
        	//cc.log('ok')
        })
        .repeat()
        .spawn();
        
        bird.moveBy(0.5, cc.p(50,50), cc.EaseOut, 2).reverse().delay(1.0).repeat().act();*/
        
        //this.sprite.runAction(cc.actionCache.get('birdAction').getAction().clone());
        //cc.showMessage(this, 'abc!!');

        /*cc.game.on('hide', function(){
        	//处理游戏进入后台的情况
        	cc.log('oooo');
        });*/

        /*cc.eventManager.addListener({
        	event: cc.EventListener.TOUCH_ALL_AT_ONCE,
        	onTouchesMoved: function (touches, event) {
        		var touch = touches[0];
        		var delta = touch.getDelta();

        		cc.log(delta);
        	}
        }, this);*/
        
        //cc.log(cc.KEY.back);
        /*cc.eventManager.addListener({
        	event: cc.EventListener.KEYBOARD,
        	onKeyReleased: function(keyCode, event){
        		cc.log("keyCode："+keyCode);
        		if(keyCode == cc.KEY.back)
        		{
        			//......
        		}
        	}
        }, this);*/

        /*cc.eventManager.addListener({
        	event: cc.EventListener.MOUSE,
        	onMouseDown: function(){
        		cc.log(arguments);
        	}
        }, this);*/
        
        /*cc.log([bird.getGlobalZOrder(), bird.getLocalZOrder()])
        
        this.getContext().then(function(context){
        	cc.log(context);
        });*/
        //this.attr('size', [800, 480]);
        
        //this.attr('xy', [100, 100]);
        //this.attr('background', '#f00');
        
        //cc.log(this.getBoundingBox().height)
        
        /*this.delegate(bird, {
        	click: function(event, target, layer){
        		//cc.log(event);
        		//layer.pauseEvent();
                var scene = new TestPageViewScene();
                cc.director.pushScene(scene);
        	},
        	'mouseenter, mouseleave': function(event, target, layer){
        		cc.log(event.type);
        	},
        });      
        //this.undelegate(bird, 'mouseenter');
        //cc.log(this.sprite.setGLProgram);
        cc.gray(this.sprite);
        cc.ungray(this.sprite);
        //cc.gray(closeBtn);
        //cc.log(closeBtn.getPosition().y)
        //cc.log(cc.ScrollView);*/
        
        //cc.Audio.playEffect('res/ready.mp3');
        //cc.Audio.playMusic('res/game_music.mp3');
        
        /*cc.native.call('getDeviceInfo').then(function(res){
        	cc.log(JSON.stringify(res));
        })['catch'](function(err){
        	cc.log(err);
        });*/
        
        //cc.log(cc.loader.load);
        
        //cc.log(cc.LoaderScene._instance.initWith);
        
        /*for(var i = 0; i < 10; i++){
        	var bird = cc.createSprite('bird3.png',{
        		anchorX: 0,
        		x: 100 + i*20,
        		y: 200,
        		fontSize: 44,
        		fontFamily: 'Arial',
        		//texture1: 'bird3.png rect(0,0,10,10)'
        		//color: '#ff0000',
        	});    
        	this.addChildToBatch(bird, 'res/birds.png');
        	
        	var bird = cc.createSprite('res/bird2.png',{
        		anchorX: 0,
        		x: 100 + i*20,
        		y: 200 + 50,
        		fontSize: 44,
        		fontFamily: 'Arial',
        		//texture1: 'bird3.png rect(0,0,10,10)'
        		//color: '#ff0000',
        	});
        	//this.addChild(bird);
        	this.addChildToBatch(bird, 'res/bird2.png');
        }*/
        
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

