cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    cc.director.setDisplayStats(cc.game.config.showFPS);

    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new DemoScene());
    }, this);
};
cc.game.run();