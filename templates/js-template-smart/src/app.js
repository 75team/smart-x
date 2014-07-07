var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();  

        var size = cc.director.getWinSize();
        var self = this;

        var closeBtn = new cc.Button.create(res.CloseNormal_png);
        closeBtn.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5,
            //disabled: true,
            zIndex: 200,
        });
        
        this.addChild(closeBtn);
        this.delegate(closeBtn, 'click', function(){
            self.backClicked();
        });

        this.helloLabel = cc.createSprite("@Hello World", {
            fontSize: "38",
            xy: [size.width / 2, 0]
        });
        this.addChild(this.helloLabel, 5);

        var lazyLayer = cc.Layer.create();
        this.addChild(lazyLayer);

        this.sprite = cc.Sprite.create(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.5,
            rotation: 180
        });
        lazyLayer.addChild(this.sprite);    

        this.sprite.rotateTo(2, 0).scaleTo(2, 1, 1).act();
        this.helloLabel.moveBy(2.5, cc.p(0, size.height - 40)).spawn();
        this.helloLabel.tintTo(2.5,255,125,0).act();

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

