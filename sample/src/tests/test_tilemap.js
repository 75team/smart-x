(function(global){

    var MyLayer = cc.Layer.extend({
        ctor: function(){
            this._super();
            var size = cc.director.getWinSize();
            var text = cc.createSprite('@abc', {
                xy: [size.width / 2, size.height / 2]
            });
            this.addChild(text);
            //var map = cc.TMXTiledMap.create("res/test.json");
            var map = cc.TMXTiledMap.create("res/test.tmx");
            this.addChild(map);
            var layer = map.getLayer('Layer1');
            var tile = layer.getTileAt(cc.p(0, 0));
            //cc.log(tile);
            
            var tileLayer = cc.TileLayer.create(80, 80);
            var bird = cc.createSprite('bird1.png');
            tileLayer.setTileAt(bird, 1, 1);
            
            var bird2 = cc.createSprite('bird2.png');
            tileLayer.setTileAt(bird2, 2, 2);

            this.addChild(tileLayer);
            
            var scrollView = new cc.ScrollView(cc.size(400, 200), cc.size(1600, 200));
            var scrollLayer = scrollView.getContentLayer();
            var bird3 = cc.createSprite('bird3.png', {
            	xy: [300, 100]
            });
            scrollLayer.addChild(bird3);
            scrollView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
            this.addChild(scrollView);
            return true;
        },
        backClicked: function(){
            cc.director.popScene();
        }
    });

    var TestTileMapScene = cc.Scene.extend({
    	ctor: function(){
    		this._super();
    	},
        onEnter:function () {
            this._super();
            var layer = new MyLayer();
            this.addChild(layer);
        }
    });

    global.TestTileMapScene = TestTileMapScene;

})(this);


