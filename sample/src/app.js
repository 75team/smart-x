
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask director the window size
        var size = cc.director.getWinSize();
        
        var closeBtn = new cc.Button.create(res.CloseNormal_png);
        closeBtn.attr({
        	x: size.width - 20,
        	y: 20,
        	anchorX: 0.5,
        	anchorY: 0.5,
        	disabled: true,
        	zIndex: 200,
        });
        this.addChild(closeBtn);
        this.delegate(closeBtn, 'click', function(){
        	cc.log('button clicked');
        });
        
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        this.helloLabel = cc.LabelTTF.create("Hello World", "Arial", 38);
        // position the label on the center of the screen
        this.helloLabel.x = size.width / 2;
        this.helloLabel.y = 0;
        // add the label as a child to this layer
        this.addChild(this.helloLabel, 5);

        var lazyLayer = cc.Layer.create();
        this.addChild(lazyLayer);

        // add "HelloWorld" splash screen"
        this.sprite = cc.Sprite.create(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5,
            rotation: 180,
            zIndex: 9999
        });
        lazyLayer.addChild(this.sprite, 0);
        //this.addChild(this.sprite); 
        
        var rotateToA = cc.RotateTo.create(2, 0);
        var scaleToA = cc.ScaleTo.create(2, 1, 1);

        this.sprite.runAction(cc.Sequence.create(rotateToA, scaleToA));
        this.helloLabel.runAction(cc.Spawn.create(cc.MoveBy.create(2.5, cc.p(0, size.height - 40)),cc.TintTo.create(2.5,255,125,0)));
        
        //cc.log(cc.Sprite.prototype.setTextureRect);
        /*var bird = cc.Sprite.create('res/bird1.png');
        bird.attr({
        	x:100,
        	y:200
        });*/
        
        cc.fontFamily.add('Arial', 'res/American Typewriter.ttf');
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
        bird.attr('background', '#ff0');
        
        //cc.log(bird.getContentSize());
        //bird.attr('texture', 'bird2.png');
        
        this.addChild(bird, 10);
        
        /*var animation = cc.animationCache.add('birdAction')
        	//.moveBy(0.5, cc.p(50,50)).reverse()
        	.animate(1.5, 'bird%d.png', 1, 3)
        	.delay(1.0)
        	.then(function(){
        		cc.log('ok')
        	})
        	.repeat();
        bird.runAction(animation.getAction());*/
        
        bird.animate(1.5, 'bird%d.png', 1, 3)
        .delay(1.0)
        .then(function(){
        	//cc.log('ok')
        })
        .repeat()
        .spawn();
        
        bird.moveBy(0.5, cc.p(50,50)).reverse().delay(1.0).repeat().act();
        //this.sprite.runAction(cc.animationCache.get('birdAction').getAction().clone());
        //cc.showMessage(this, 'abc!!');

        cc.game.on('hide', function(){
        	//处理游戏进入后台的情况
        	cc.log('oooo');
        });

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
        this.attr('background', '#f00');
        
        //cc.log(this.getBoundingBox().height)
        
        this.delegate(bird, {
        	click: function(event, target, layer){
        		cc.log(event);
        		//layer.pauseEvent();
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
        //cc.log(cc.ScrollView);
        cc.Audio.playEffect('res/ready.mp3');
        cc.Audio.playMusic('res/game_music.mp3');
        
        cc.native.call('getDeviceInfo').then(function(res){
        	cc.log(JSON.stringify(res));
        })['catch'](function(err){
        	cc.log(err);
        });
        
        return true;
    },
    backClicked: function(){
    	//cc.log('end');
    	cc.director.end();
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

