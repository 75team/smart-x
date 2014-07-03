cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(800, 480, cc.ResolutionPolicy.SHOW_ALL);
	cc.view.resizeWithBrowserSize(true);
	
	/*cc.loader.loadJs("src/tests", ["test.js"], function(){
		alert('done');
	});*/
	//cc.log(cc.sys.language);
	//cc.log(cc.game.config);
	cc.director.setDisplayStats(cc.game.config.showFPS);
    //load resources
	//cc._loaderImage = "res/bird1.png";
    cc.LoaderScene.preload(g_resources, function () {
    	cc.director.runScene(new DemoScene());
    	//cc.log('done');
    }, this);
    
    if(cc._canvas){
    	cc._canvas.focus();
    }
};
cc.game.run();