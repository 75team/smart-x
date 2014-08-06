var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._LogInfos = {};
window._p;
_p = window;
_p.DeviceOrientationEvent;
_p.DeviceMotionEvent;
_p = Object.prototype;
_p._super;
_p.ctor;
delete window._p;
cc.newElement = function (x) {
    return document.createElement(x)
};
cc._addEventListener = function (element, type, listener, useCapture) {
    element.addEventListener(type, listener, useCapture)
};
cc.each = function (obj, iterator, context) {
    if (!obj)return;
    if (obj instanceof Array)for (var i = 0, li = obj.length; i < li; i++) {
        if (iterator.call(context, obj[i], i) === false)return
    } else for (var key in obj)if (iterator.call(context, obj[key], key) === false)return
};
cc.isCrossOrigin = function (url) {
    if (!url) {
        cc.log("invalid URL");
        return false
    }
    var startIndex = url.indexOf("://");
    if (startIndex == -1)return false;
    var endIndex = url.indexOf("/", startIndex + 3);
    var urlOrigin = endIndex == -1 ? url : url.substring(0, endIndex);
    return urlOrigin != location.origin
};
cc.async = {_counterFunc: function (err) {
    var counter = this.counter;
    if (counter.err)return;
    var length = counter.length;
    var results = counter.results;
    var option = counter.option;
    var cb = option.cb, cbTarget = option.cbTarget, trigger = option.trigger, triggerTarget = option.triggerTarget;
    if (err) {
        counter.err = err;
        if (cb)return cb.call(cbTarget, err);
        return
    }
    var result = Array.apply(null, arguments).slice(1);
    var l = result.length;
    if (l == 0)result = null; else if (l == 1)result = result[0];
    results[this.index] = result;
    counter.count--;
    if (trigger)trigger.call(triggerTarget,
        result, length - counter.count, length);
    if (counter.count == 0 && cb)cb.apply(cbTarget, [null, results])
}, _emptyFunc: function () {
}, parallel: function (tasks, option, cb) {
    var async = cc.async;
    if (cb !== undefined) {
        if (typeof option == "function")option = {trigger: option};
        option.cb = cb || option.cb
    } else if (option !== undefined) {
        if (typeof option == "function")option = {cb: option}
    } else if (tasks !== undefined)option = {}; else throw"arguments error!";
    var isArr = tasks instanceof Array;
    var li = isArr ? tasks.length : Object.keys(tasks).length;
    if (li ==
        0) {
        if (option.cb)option.cb.call(option.cbTarget, null);
        return
    }
    var results = isArr ? [] : {};
    var counter = {length: li, count: li, option: option, results: results};
    cc.each(tasks, function (task, index) {
        if (counter.err)return false;
        var counterFunc = !option.cb && !option.trigger ? async._emptyFunc : async._counterFunc.bind({counter: counter, index: index});
        task(counterFunc, index)
    })
}, map: function (tasks, option, cb) {
    var self = this;
    var len = arguments.length;
    if (typeof option == "function")option = {iterator: option};
    if (len === 3)option.cb = cb ||
        option.cb; else if (len < 2)throw"arguments error!";
    if (typeof option == "function")option = {iterator: option};
    if (cb !== undefined)option.cb = cb || option.cb; else if (tasks === undefined)throw"arguments error!";
    var isArr = tasks instanceof Array;
    var li = isArr ? tasks.length : Object.keys(tasks).length;
    if (li === 0) {
        if (option.cb)option.cb.call(option.cbTarget, null);
        return
    }
    var results = isArr ? [] : {};
    var counter = {length: li, count: li, option: option, results: results};
    cc.each(tasks, function (task, index) {
        if (counter.err)return false;
        var counterFunc =
            !option.cb ? self._emptyFunc : self._counterFunc.bind({counter: counter, index: index});
        option.iterator.call(option.iteratorTarget, task, index, counterFunc)
    })
}};
cc.path = {join: function () {
    var l = arguments.length;
    var result = "";
    for (var i = 0; i < l; i++)result = (result + (result == "" ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
    return result
}, extname: function (pathStr) {
    var temp = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(pathStr);
    return temp ? temp[1] : null
}, mainFileName: function (fileName) {
    if (fileName) {
        var idx = fileName.lastIndexOf(".");
        if (idx !== -1)return fileName.substring(0, idx)
    }
    return fileName
}, basename: function (pathStr, extname) {
    var index = pathStr.indexOf("?");
    if (index > 0)pathStr = pathStr.substring(0,
        index);
    var reg = /(\/|\\\\)([^(\/|\\\\)]+)$/g;
    var result = reg.exec(pathStr.replace(/(\/|\\\\)$/, ""));
    if (!result)return null;
    var baseName = result[2];
    if (extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() == extname.toLowerCase())return baseName.substring(0, baseName.length - extname.length);
    return baseName
}, dirname: function (pathStr) {
    return pathStr.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
}, changeExtname: function (pathStr, extname) {
    extname = extname || "";
    var index = pathStr.indexOf("?");
    var tempStr =
        "";
    if (index > 0) {
        tempStr = pathStr.substring(index);
        pathStr = pathStr.substring(0, index)
    }
    index = pathStr.lastIndexOf(".");
    if (index < 0)return pathStr + extname + tempStr;
    return pathStr.substring(0, index) + extname + tempStr
}, changeBasename: function (pathStr, basename, isSameExt) {
    if (basename.indexOf(".") == 0)return this.changeExtname(pathStr, basename);
    var index = pathStr.indexOf("?");
    var tempStr = "";
    var ext = isSameExt ? this.extname(pathStr) : "";
    if (index > 0) {
        tempStr = pathStr.substring(index);
        pathStr = pathStr.substring(0, index)
    }
    index =
        pathStr.lastIndexOf("/");
    index = index <= 0 ? 0 : index + 1;
    return pathStr.substring(0, index) + basename + ext + tempStr
}};
cc.loader = {_jsCache: {}, _register: {}, _langPathCache: {}, _aliases: {}, resPath: "", cache: {}, getXMLHttpRequest: function () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
}, _getArgs4Js: function (args) {
    var a0 = args[0], a1 = args[1], a2 = args[2], results = ["", null, null];
    if (args.length === 1)results[1] = a0 instanceof Array ? a0 : [a0]; else if (args.length === 2)if (typeof a1 == "function") {
        results[1] = a0 instanceof Array ? a0 : [a0];
        results[2] = a1
    } else {
        results[0] = a0 || "";
        results[1] =
                a1 instanceof Array ? a1 : [a1]
    } else if (args.length === 3) {
        results[0] = a0 || "";
        results[1] = a1 instanceof Array ? a1 : [a1];
        results[2] = a2
    } else throw"arguments error to load js!";
    return results
}, loadJs: function (baseDir, jsList, cb) {
    var self = this, localJsCache = self._jsCache, args = self._getArgs4Js(arguments);
    if (navigator.userAgent.indexOf("Trident/5") > -1)self._loadJs4Dependency(args[0], args[1], 0, args[2]); else cc.async.map(args[1], function (item, index, cb1) {
        var jsPath = cc.path.join(args[0], item);
        if (localJsCache[jsPath])return cb1(null);
        self._createScript(jsPath, false, cb1)
    }, args[2])
}, loadJsWithImg: function (baseDir, jsList, cb) {
    var self = this, jsLoadingImg = self._loadJsImg(), args = self._getArgs4Js(arguments);
    this.loadJs(args[0], args[1], function (err) {
        if (err)throw err;
        jsLoadingImg.parentNode.removeChild(jsLoadingImg);
        if (args[2])args[2]()
    })
}, _createScript: function (jsPath, isAsync, cb) {
    var d = document, self = this, s = cc.newElement("script");
    s.async = isAsync;
    s.src = jsPath;
    self._jsCache[jsPath] = true;
    cc._addEventListener(s, "load", function () {
        this.removeEventListener("load",
            arguments.callee, false);
        cb()
    }, false);
    cc._addEventListener(s, "error", function () {
        cb("Load " + jsPath + " failed!")
    }, false);
    d.body.appendChild(s)
}, _loadJs4Dependency: function (baseDir, jsList, index, cb) {
    if (index >= jsList.length) {
        if (cb)cb();
        return
    }
    var self = this;
    self._createScript(cc.path.join(baseDir, jsList[index]), false, function (err) {
        if (err)return cb(err);
        self._loadJs4Dependency(baseDir, jsList, index + 1, cb)
    })
}, _loadJsImg: function () {
    var d = document, jsLoadingImg = d.getElementById("cocos2d_loadJsImg");
    if (!jsLoadingImg) {
        jsLoadingImg =
            cc.newElement("img");
        if (cc._loadingImage)jsLoadingImg.src = cc._loadingImage;
        var canvasNode = d.getElementById(cc.game.config["id"]);
        canvasNode.style.backgroundColor = "transparent";
        canvasNode.parentNode.appendChild(jsLoadingImg);
        var canvasStyle = getComputedStyle ? getComputedStyle(canvasNode) : canvasNode.currentStyle;
        if (!canvasStyle)canvasStyle = {width: canvasNode.width, height: canvasNode.height};
        jsLoadingImg.style.left = canvasNode.offsetLeft + (parseFloat(canvasStyle.width) - jsLoadingImg.width) / 2 + "px";
        jsLoadingImg.style.top =
            canvasNode.offsetTop + (parseFloat(canvasStyle.height) - jsLoadingImg.height) / 2 + "px";
        jsLoadingImg.style.position = "absolute"
    }
    return jsLoadingImg
}, loadTxt: function (url, cb) {
    var xhr = this.getXMLHttpRequest(), errInfo = "load " + url + " failed!";
    xhr.open("GET", url, true);
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        xhr.setRequestHeader("Accept-Charset", "utf-8");
        xhr.onreadystatechange = function () {
            xhr.readyState == 4 && xhr.status == 200 ? cb(null, xhr.responseText) : cb(errInfo)
        }
    } else {
        if (xhr.overrideMimeType)xhr.overrideMimeType("text/plain; charset\x3dutf-8");
        xhr.onload = function () {
            xhr.readyState == 4 && xhr.status == 200 ? cb(null, xhr.responseText) : cb(errInfo)
        }
    }
    xhr.send(null)
}, _loadTxtSync: function (url) {
    var xhr = this.getXMLHttpRequest();
    xhr.open("GET", url, false);
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent))xhr.setRequestHeader("Accept-Charset", "utf-8"); else if (xhr.overrideMimeType)xhr.overrideMimeType("text/plain; charset\x3dutf-8");
    xhr.send(null);
    if (!xhr.readyState == 4 || xhr.status != 200)return null;
    return xhr.responseText
}, loadJson: function (url, cb) {
    this.loadTxt(url, function (err, txt) {
        try {
            err ? cb(err) : cb(null, JSON.parse(txt))
        } catch (e) {
            throw"load json [" + url + "] failed : " + e;
        }
    })
}, _checkIsImageURL: function (url) {
    var ext = /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(url);
    return ext != null
}, loadImg: function (url, option, cb) {
    var opt = {isCrossOrigin: true};
    if (cb !== undefined)opt.isCrossOrigin =
            option.isCrossOrigin == null ? opt.isCrossOrigin : option.isCrossOrigin; else if (option !== undefined)cb = option;
    var img = new Image;
    if (opt.isCrossOrigin && location.origin != "file://")img.crossOrigin = "Anonymous";
    cc._addEventListener(img, "load", function () {
        this.removeEventListener("load", arguments.callee, false);
        this.removeEventListener("error", arguments.callee, false);
        if (cb)cb(null, img)
    });
    cc._addEventListener(img, "error", function () {
        this.removeEventListener("error", arguments.callee, false);
        if (cb)cb("load image failed")
    });
    img.src = url;
    return img
}, _loadResIterator: function (item, index, cb) {
    var self = this, url = null;
    var type = item.type;
    if (type) {
        type = "." + type.toLowerCase();
        url = item.src ? item.src : item.name + type
    } else {
        url = item;
        type = cc.path.extname(url)
    }
    var obj = self.cache[url];
    if (obj)return cb(null, obj);
    var loader = self._register[type.toLowerCase()];
    if (!loader) {
        cc.error("loader for [" + type + "] not exists!");
        return cb()
    }
    var basePath = loader.getBasePath ? loader.getBasePath() : self.resPath;
    var realUrl = self.getUrl(basePath, url);
    loader.load(realUrl,
        url, item, function (err, data) {
            if (err) {
                cc.log(err);
                self.cache[url] = null;
                delete self.cache[url];
                cb()
            } else {
                self.cache[url] = data;
                cb(null, data)
            }
        })
}, getUrl: function (basePath, url) {
    var self = this, langPathCache = self._langPathCache, path = cc.path;
    if (basePath !== undefined && url === undefined) {
        url = basePath;
        var type = path.extname(url);
        type = type ? type.toLowerCase() : "";
        var loader = self._register[type];
        if (!loader)basePath = self.resPath; else basePath = loader.getBasePath ? loader.getBasePath() : self.resPath
    }
    url = cc.path.join(basePath ||
        "", url);
    return url
}, load: function (res, option, cb) {
    if (cb !== undefined) {
        if (typeof option == "function")option = {trigger: option}
    } else if (option !== undefined) {
        if (typeof option == "function") {
            cb = option;
            option = {}
        }
    } else if (res !== undefined)option = {}; else throw"arguments error!";
    option.cb = function (err, results) {
        if (err)cc.log(err);
        if (cb)cb(results)
    };
    if (!(res instanceof Array))res = [res];
    option.iterator = this._loadResIterator;
    option.iteratorTarget = this;
    cc.async.map(res, option)
}, _handleAliases: function (fileNames, cb) {
    var self = this, aliases = self._aliases;
    var resList = [];
    for (var key in fileNames) {
        var value = fileNames[key];
        aliases[key] = value;
        resList.push(value)
    }
    this.load(resList, cb)
}, loadAliases: function (url, cb) {
    var self = this, dict = self.getRes(url);
    if (!dict)self.load(url, function (results) {
        self._handleAliases(results[0]["filenames"],
            cb)
    }); else self._handleAliases(dict["filenames"], cb)
}, register: function (extNames, loader) {
    if (!extNames || !loader)return;
    var self = this;
    if (typeof extNames == "string")return this._register[extNames.trim().toLowerCase()] = loader;
    for (var i = 0, li = extNames.length; i < li; i++)self._register["." + extNames[i].trim().toLowerCase()] = loader
}, getRes: function (url) {
    return this.cache[url] || this.cache[this._aliases[url]]
}, release: function (url) {
    var cache = this.cache, aliases = this._aliases;
    delete cache[url];
    delete cache[aliases[url]];
    delete aliases[url]
}, releaseAll: function () {
    var locCache = this.cache, aliases = this._aliases;
    for (var key in locCache)delete locCache[key];
    for (var key in aliases)delete aliases[key]
}};
(function () {
    var win = window, hidden, visibilityChange, _undef = "undefined";
    if (typeof document.hidden !== _undef) {
        hidden = "hidden";
        visibilityChange = "visibilitychange"
    } else if (typeof document.mozHidden !== _undef) {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange"
    } else if (typeof document.msHidden !== _undef) {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange"
    } else if (typeof document.webkitHidden !== _undef) {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange"
    }
    var onHidden = function () {
        if (cc.eventManager &&
            cc.game._eventHide)cc.eventManager.dispatchEvent(cc.game._eventHide)
    };
    var onShow = function () {
        if (cc.eventManager && cc.game._eventShow)cc.eventManager.dispatchEvent(cc.game._eventShow)
    };
    if (hidden)cc._addEventListener(document, visibilityChange, function () {
        if (document[hidden])onHidden(); else onShow()
    }, false); else {
        cc._addEventListener(win, "blur", onHidden, false);
        cc._addEventListener(win, "focus", onShow, false)
    }
    if ("onpageshow"in window && "onpagehide"in window) {
        cc._addEventListener(win, "pagehide", onHidden, false);
        cc._addEventListener(win, "pageshow", onShow, false)
    }
    win = null;
    visibilityChange = null
})();

cc.log = function(){
    return console.log.apply(console, arguments);
};
cc.warn = function(){
    return console.warn.apply(console, arguments);
};
cc.error = function(){
    return console.error.apply(console, arguments);
};
cc.assert = function(){
    return console.assert.apply(console, arguments);
};

cc._initSys = function (config, CONFIG_KEY) {
    var sys = cc.sys = {};
    sys.OS_WINDOWS = "Windows";
    sys.OS_IOS =
        "iOS";
    sys.OS_OSX = "OS X";
    sys.OS_UNIX = "UNIX";
    sys.OS_LINUX = "Linux";
    sys.OS_ANDROID = "Android";
    sys.OS_UNKNOWN = "Unknown";
    sys.BROWSER_TYPE_WECHAT = "wechat";
    sys.BROWSER_TYPE_ANDROID = "androidbrowser";
    sys.BROWSER_TYPE_IE = "ie";
    sys.BROWSER_TYPE_QQ = "qqbrowser";
    sys.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
    sys.BROWSER_TYPE_UC = "ucbrowser";
    sys.BROWSER_TYPE_360 = "360browser";
    sys.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
    sys.BROWSER_TYPE_BAIDU = "baidubrowser";
    sys.BROWSER_TYPE_MAXTHON = "maxthon";
    sys.BROWSER_TYPE_OPERA = "opera";
    sys.BROWSER_TYPE_MIUI =
        "miuibrowser";
    sys.BROWSER_TYPE_FIREFOX = "firefox";
    sys.BROWSER_TYPE_SAFARI = "safari";
    sys.BROWSER_TYPE_CHROME = "chrome";
    sys.BROWSER_TYPE_UNKNOWN = "unknown";
    var win = window, nav = win.navigator, doc = document, docEle = doc.documentElement;
    var ua = nav.userAgent.toLowerCase();
    sys.isMobile = ua.indexOf("mobile") != -1 || ua.indexOf("android") != -1;
    var browserType = sys.BROWSER_TYPE_UNKNOWN;
    var browserTypes = ua.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|opera|miuibrowser|firefox/i) ||
        ua.match(/chrome|safari/i);
    if (browserTypes && browserTypes.length > 0) {
        browserType = browserTypes[0].toLowerCase();
        if (browserType == "micromessenger")browserType = sys.BROWSER_TYPE_WECHAT; else if (browserType === "safari" && ua.match(/android.*applewebkit/))browserType = sys.BROWSER_TYPE_ANDROID; else if (browserType == "trident")browserType = sys.BROWSER_TYPE_IE
    }
    sys.browserType = browserType;
    var tempCanvas = cc.newElement("Canvas");
    cc._supportRender = true;
    sys._canUseCanvasNewBlendModes = function () {
        var canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        var context = canvas.getContext("2d");
        context.fillStyle = "#000";
        context.fillRect(0, 0, 1, 1);
        context.globalCompositeOperation = "multiply";
        context.fillStyle = "#fff";
        context.fillRect(0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data[0] === 0
    };
    sys._supportCanvasNewBlendModes = sys._canUseCanvasNewBlendModes();
    try {
        tempCanvas.getContext("2d")
    } catch (e) {
        cc._supportRender =
            false
    }
    try {
        var localStorage = sys.localStorage = win.localStorage;
        localStorage.setItem("storage", "");
        localStorage.removeItem("storage");
        localStorage = null
    } catch (e) {
        if (e.name === "SECURITY_ERR" || e.name === "QuotaExceededError")cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option");
        sys.localStorage = function () {
        }
    }
    var capabilities =
        sys.capabilities = {"canvas": true};
    if (docEle["ontouchstart"] !== undefined || nav.msPointerEnabled)capabilities["touches"] = true; else if (docEle["onmouseup"] !== undefined)capabilities["mouse"] = true;
    if (docEle["onkeyup"] !== undefined)capabilities["keyboard"] = true;
    if (win.DeviceMotionEvent || win.DeviceOrientationEvent)capabilities["accelerometer"] = true;
    var iOS = ua.match(/(iPad|iPhone|iPod)/i) ? true : false;
    var isAndroid = ua.match(/android/i) || nav.platform.match(/android/i) ?
        true : false;
    var osName = sys.OS_UNKNOWN;
    if (nav.appVersion.indexOf("Win") != -1)osName = sys.OS_WINDOWS; else if (iOS)osName = sys.OS_IOS; else if (nav.appVersion.indexOf("Mac") != -1)osName = sys.OS_OSX; else if (nav.appVersion.indexOf("X11") != -1)osName = sys.OS_UNIX; else if (nav.appVersion.indexOf("Linux") != -1)osName = sys.OS_LINUX; else if (isAndroid)osName = sys.OS_ANDROID;
    sys.os = osName;
};
cc.ORIENTATION_PORTRAIT = 0;
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1;
cc.ORIENTATION_LANDSCAPE_LEFT = 2;
cc.ORIENTATION_LANDSCAPE_RIGHT = 3;
cc._drawingUtil = null;
cc._renderContext = null;
cc._canvas = null;
cc._gameDiv = null;
cc._rendererInitialized = false;
cc._setupCalled = false;
cc._setup = function (el, width, height) {
    if (cc._setupCalled)return; else cc._setupCalled = true;
    var win = window;
    win.requestAnimFrame = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame;
    var element = cc.$(el) || cc.$("#" + el);
    var localCanvas, localContainer, localConStyle;
    if (element.tagName == "CANVAS") {
        width = width || element.width;
        height = height || element.height;
        localContainer = cc.container = cc.newElement("DIV");
        localCanvas = cc._canvas =
            element;
        localCanvas.parentNode.insertBefore(localContainer, localCanvas);
        localCanvas.appendTo(localContainer);
        localContainer.setAttribute("id", "Cocos2dGameContainer")
    } else {
        if (element.tagName != "DIV")cc.log("Warning: target element is not a DIV or CANVAS");
        width = width || element.clientWidth;
        height = height || element.clientHeight;
        localContainer = cc.container = element;
        localCanvas = cc._canvas = cc.$(cc.newElement("CANVAS"));
        element.appendChild(localCanvas)
    }
    localCanvas.addClass("gameCanvas");
    localCanvas.setAttribute("width",
            width || 480);
    localCanvas.setAttribute("height", height || 320);
    localCanvas.setAttribute("tabindex", 99);
    localCanvas.style.outline = "none";
    localConStyle = localContainer.style;
    localConStyle.width = (width || 480) + "px";
    localConStyle.height = (height || 320) + "px";
    localConStyle.margin = "0 auto";
    localConStyle.position = "relative";
    localConStyle.overflow = "hidden";
    localContainer.top = "100%";

    cc._renderContext = localCanvas.getContext("2d");
    cc._mainRenderContextBackup = cc._renderContext;
    cc._renderContext.translate(0, localCanvas.height);
    cc._drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(cc._renderContext) : null

    cc._gameDiv =
        localContainer;

    cc._setContextMenuEnable(false);
    if (cc.sys.isMobile) {
        var fontStyle = cc.newElement("style");
        fontStyle.type = "text/css";
        document.body.appendChild(fontStyle);
        fontStyle.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;" + "-webkit-tap-highlight-color:rgba(0,0,0,0);}"
    }
    cc.view = cc.EGLView._getInstance();
    cc.inputManager.registerSystemEvent(cc._canvas);
    cc.director = cc.Director._getInstance();
    if (cc.director.setOpenGLView)cc.director.setOpenGLView(cc.view);
    cc.winSize = cc.director.getWinSize();
    cc.saxParser = new cc.SAXParser;
    cc.plistParser = new cc.PlistParser
};
cc._isContextMenuEnable = false;
cc._setContextMenuEnable = function (enabled) {
    cc._isContextMenuEnable = enabled;
    cc._canvas.oncontextmenu = function () {
        if (!cc._isContextMenuEnable)return false
    }
};
cc.game = {EVENT_HIDE: "game_on_hide", EVENT_SHOW: "game_on_show", _eventHide: null, _eventShow: null, _onBeforeStartArr: [], CONFIG_KEY: {engineDir: "engineDir", dependencies: "dependencies", showFPS: "showFPS", frameRate: "frameRate", id: "id", jsList: "jsList", classReleaseMode: "classReleaseMode"}, _prepareCalled: false,
    _prepared: false, _paused: true, _intervalId: null, config: null, onStart: null, onStop: null, setFrameRate: function (frameRate) {
        var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
        config[CONFIG_KEY.frameRate] = frameRate;
        if (self._intervalId)clearInterval(self._intervalId);
        self._paused = true;
        self._runMainLoop()
    }, _runMainLoop: function () {
        var self = this, callback, config = self.config, CONFIG_KEY = self.CONFIG_KEY, win = window, frameRate = config[CONFIG_KEY.frameRate], director = cc.director;
        director.setDisplayStats(config[CONFIG_KEY.showFPS]);
        if (win.requestAnimFrame && frameRate == 60) {
            callback = function () {
                if (!self._paused) {
                    director.mainLoop();
                    win.requestAnimFrame(callback)
                }
            };
            win.requestAnimFrame(callback)
        } else {
            callback = function () {
                director.mainLoop()
            };
            self._intervalId = setInterval(callback, 1E3 / frameRate)
        }
        self._paused = false
    }, run: function (id) {
        var self = this;
        var _run = function () {
            if (id)self.config[self.CONFIG_KEY.id] = id;
            if (!self._prepareCalled)self.prepare(function () {
                if (cc._supportRender) {
                    cc._setup(self.config[self.CONFIG_KEY.id]);
                    self._runMainLoop();
                    self._eventHide = self._eventHide || new cc.EventCustom(self.EVENT_HIDE);
                    self._eventHide.setUserData(self);
                    self._eventShow = self._eventShow || new cc.EventCustom(self.EVENT_SHOW);
                    self._eventShow.setUserData(self);
                    self.onStart()
                }
            }); else if (cc._supportRender)self._checkPrepare = setInterval(function () {
                if (self._prepared) {
                    cc._setup(self.config[self.CONFIG_KEY.id]);
                    self._runMainLoop();
                    self._eventHide = self._eventHide || new cc.EventCustom(self.EVENT_HIDE);
                    self._eventHide.setUserData(self);
                    self._eventShow = self._eventShow ||
                        new cc.EventCustom(self.EVENT_SHOW);
                    self._eventShow.setUserData(self);
                    self.onStart();
                    clearInterval(self._checkPrepare)
                }
            }, 10)
        };
        document.body ? _run() : cc._addEventListener(window, "load", function () {
            this.removeEventListener("load", arguments.callee, false);
            _run()
        }, false)
    }, _initConfig: function () {
        var self = this, CONFIG_KEY = self.CONFIG_KEY;
        var _init = function (cfg) {
            cfg[CONFIG_KEY.engineDir] = cfg[CONFIG_KEY.engineDir] || "frameworks/cocos2d-html5";
            cfg[CONFIG_KEY.frameRate] =
                cfg[CONFIG_KEY.frameRate] || 60;
            return cfg
        };
        if (document["ccConfig"])self.config = _init(document["ccConfig"]); else try {
            var cocos_script = document.getElementsByTagName("script");
            for (var i = 0; i < cocos_script.length; i++) {
                var _t = cocos_script[i].getAttribute("cocos");
                if (_t == "" || _t)break
            }
            var _src, txt, _resPath;
            if (i < cocos_script.length) {
                _src = cocos_script[i].src;
                if (_src) {
                    _resPath = /(.*)\//.exec(_src)[0];
                    cc.loader.resPath = _resPath;
                    _src = cc.path.join(_resPath,
                        "project.json")
                }
                txt = cc.loader._loadTxtSync(_src)
            }
            if (!txt)txt = cc.loader._loadTxtSync("project.json");
            var data = JSON.parse(txt);
            self.config = _init(data || {})
        } catch (e) {
            cc.log("Failed to read or parse project.json");
            self.config = _init({})
        }
        cc._initSys(self.config, CONFIG_KEY)
    }, _jsAddedCache: {}, _getJsListOfModule: function (moduleMap, moduleName, dir) {
        var jsAddedCache = this._jsAddedCache;
        if (jsAddedCache[moduleName])return null;
        dir = dir || "";
        var jsList = [];
        var tempList = moduleMap[moduleName];
        if (!tempList)throw"can not find module [" +
            moduleName + "]";
        var ccPath = cc.path;
        for (var i = 0, li = tempList.length; i < li; i++) {
            var item = tempList[i];
            if (jsAddedCache[item])continue;
            var extname = ccPath.extname(item);
            if (!extname) {
                var arr = this._getJsListOfModule(moduleMap, item, dir);
                if (arr)jsList = jsList.concat(arr)
            } else if (extname.toLowerCase() == ".js")jsList.push(ccPath.join(dir, item));
            jsAddedCache[item] = 1
        }
        return jsList
    }, prepare: function (cb) {
        var self = this;
        var config = self.config, CONFIG_KEY = self.CONFIG_KEY, engineDir = config[CONFIG_KEY.engineDir], loader = cc.loader;
        if (!cc._supportRender) {
            cc.error("Can not support render!");
            return
        }
        self._prepareCalled = true;
        var jsList = config[CONFIG_KEY.jsList] || [];
        if (cc.Class)loader.loadJsWithImg("", jsList, function (err) {
            if (err)throw err;
            self._prepared = true;
            if (cb)cb()
        }); else {
            var ccModulesPath = cc.path.join(engineDir, "moduleConfig.json");
            loader.loadJson(ccModulesPath, function (err, modulesJson) {
                if (err)throw err;
                var modules = config["modules"] || [];
                var moduleMap = modulesJson["module"];
                var newJsList = [];
                for (var i = 0, li = modules.length; i < li; i++) {
                    var arr = self._getJsListOfModule(moduleMap, modules[i], engineDir);
                    if (arr)newJsList = newJsList.concat(arr)
                }
                newJsList = newJsList.concat(jsList);
                cc.loader.loadJsWithImg(newJsList, function (err) {
                    if (err)throw err;
                    self._prepared = true;
                    if (cb)cb()
                })
            })
        }
    }};
cc.game._initConfig();
cc.loader.loadBinary = function (url, cb) {
    var self = this;
    var xhr = this.getXMLHttpRequest(), errInfo = "load " + url + " failed!";
    xhr.open("GET", url, true);
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        xhr.setRequestHeader("Accept-Charset", "x-user-defined");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var fileContents = cc._convertResponseBodyToText(xhr["responseBody"]);
                cb(null, self._str2Uint8Array(fileContents))
            } else cb(errInfo)
        }
    } else {
        if (xhr.overrideMimeType)xhr.overrideMimeType("text/plain; charset\x3dx-user-defined");
        xhr.onload = function () {
            xhr.readyState == 4 && xhr.status == 200 ? cb(null, self._str2Uint8Array(xhr.responseText)) : cb(errInfo)
        }
    }
    xhr.send(null)
};
cc.loader._str2Uint8Array = function (strData) {
    if (!strData)return null;
    var arrData = new Uint8Array(strData.length);
    for (var i = 0; i < strData.length; i++)arrData[i] = strData.charCodeAt(i) & 255;
    return arrData
};
cc.loader.loadBinarySync = function (url) {
    var self = this;
    var req = this.getXMLHttpRequest();
    var errInfo = "load " + url + " failed!";
    req.open("GET", url, false);
    var arrayInfo = null;
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        req.setRequestHeader("Accept-Charset", "x-user-defined");
        req.send(null);
        if (req.status != 200) {
            cc.log(errInfo);
            return null
        }
        var fileContents = cc._convertResponseBodyToText(req["responseBody"]);
        if (fileContents)arrayInfo = self._str2Uint8Array(fileContents)
    } else {
        if (req.overrideMimeType)req.overrideMimeType("text/plain; charset\x3dx-user-defined");
        req.send(null);
        if (req.status != 200) {
            cc.log(errInfo);
            return null
        }
        arrayInfo = this._str2Uint8Array(req.responseText)
    }
    return arrayInfo
};
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var IEBinaryToArray_ByteStr_Script = "\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\n" + "Function IEBinaryToArray_ByteStr(Binary)\r\n" + "   IEBinaryToArray_ByteStr \x3d CStr(Binary)\r\n" + "End Function\r\n" + "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" + "   Dim lastIndex\r\n" + "   lastIndex \x3d LenB(Binary)\r\n" + "   if lastIndex mod 2 Then\r\n" + "       IEBinaryToArray_ByteStr_Last \x3d Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" +
        "   Else\r\n" + "       IEBinaryToArray_ByteStr_Last \x3d " + '""' + "\r\n" + "   End If\r\n" + "End Function\r\n";
    var myVBScript = cc.newElement("script");
    myVBScript.type = "text/vbscript";
    myVBScript.textContent = IEBinaryToArray_ByteStr_Script;
    document.body.appendChild(myVBScript);
    cc._convertResponseBodyToText = function (binary) {
        var byteMapping = {};
        for (var i = 0; i < 256; i++)for (var j = 0; j < 256; j++)byteMapping[String.fromCharCode(i + j * 256)] = String.fromCharCode(i) + String.fromCharCode(j);
        var rawBytes = IEBinaryToArray_ByteStr(binary);
        var lastChr = IEBinaryToArray_ByteStr_Last(binary);
        return rawBytes.replace(/[\s\S]/g, function (match) {
            return byteMapping[match]
        }) + lastChr
    }
}
;
var cc = cc || {};
cc._loadingImage = cc._fpsImage = cc._loaderImage = "";
var cc = cc || {};
var ClassManager = {id: 0 | Math.random() * 998, instanceId: 0 | Math.random() * 998, compileSuper: function (func, name, id) {
    var str = func.toString();
    var pstart = str.indexOf("("), pend = str.indexOf(")");
    var params = str.substring(pstart + 1, pend);
    params = params.trim();
    var bstart = str.indexOf("{"), bend = str.lastIndexOf("}");
    var str = str.substring(bstart + 1, bend);
    while (str.indexOf("this._super") != -1) {
        var sp = str.indexOf("this._super");
        var bp = str.indexOf("(", sp);
        var bbp = str.indexOf(")", bp);
        var superParams = str.substring(bp + 1, bbp);
        superParams = superParams.trim();
        var coma = superParams ? "," : "";
        str = str.substring(0, sp) + "ClassManager[" + id + "]." + name + ".call(this" + coma + str.substring(bp + 1)
    }
    return Function(params, str)
}, getNewID: function () {
    return this.id++
}, getNewInstanceId: function () {
    return this.instanceId++
}};
ClassManager.compileSuper.ClassManager = ClassManager;
(function () {
    var fnTest = /\b_super\b/;
    var config = cc.game.config;
    var releaseMode = config[cc.game.CONFIG_KEY.classReleaseMode];
    if (releaseMode)console.log("release Mode");
    cc.Class = function () {
    };
    cc.Class.extend = function (props) {
        var _super = this.prototype;
        var prototype = Object.create(_super);
        var classId = ClassManager.getNewID();
        ClassManager[classId] = _super;
        var desc = {writable: true, enumerable: false, configurable: true};
        prototype.__instanceId = null;
        function Class() {
            this.__instanceId = ClassManager.getNewInstanceId();
            if (this.ctor)this.ctor.apply(this, arguments)
        }

        Class.id = classId;
        desc.value = classId;
        Object.defineProperty(prototype, "__pid", desc);
        Class.prototype = prototype;
        desc.value = Class;
        Object.defineProperty(Class.prototype, "constructor", desc);
        this.__getters__ && (Class.__getters__ = cc.clone(this.__getters__));
        this.__setters__ && (Class.__setters__ = cc.clone(this.__setters__));
        for (var idx = 0, li = arguments.length; idx < li; ++idx) {
            var prop = arguments[idx];
            for (var name in prop) {
                var isFunc = typeof prop[name] === "function";
                var override =
                    typeof _super[name] === "function";
                var hasSuperCall = fnTest.test(prop[name]);
                if (releaseMode && isFunc && override && hasSuperCall) {
                    desc.value = ClassManager.compileSuper(prop[name], name, classId);
                    Object.defineProperty(prototype, name, desc)
                } else if (isFunc && override && hasSuperCall) {
                    desc.value = function (name, fn) {
                        return function () {
                            var tmp = this._super;
                            this._super = _super[name];
                            var ret = fn.apply(this, arguments);
                            this._super = tmp;
                            return ret
                        }
                    }(name, prop[name]);
                    Object.defineProperty(prototype, name, desc)
                } else if (isFunc) {
                    desc.value =
                        prop[name];
                    Object.defineProperty(prototype, name, desc)
                } else prototype[name] = prop[name];
                if (isFunc) {
                    var getter, setter, propertyName;
                    if (this.__getters__ && this.__getters__[name]) {
                        propertyName = this.__getters__[name];
                        for (var i in this.__setters__)if (this.__setters__[i] == propertyName) {
                            setter = i;
                            break
                        }
                        cc.defineGetterSetter(prototype, propertyName, prop[name], prop[setter] ? prop[setter] : prototype[setter], name, setter)
                    }
                    if (this.__setters__ && this.__setters__[name]) {
                        propertyName = this.__setters__[name];
                        for (var i in this.__getters__)if (this.__getters__[i] ==
                            propertyName) {
                            getter = i;
                            break
                        }
                        cc.defineGetterSetter(prototype, propertyName, prop[getter] ? prop[getter] : prototype[getter], prop[name], getter, name)
                    }
                }
            }
        }
        Class.extend = cc.Class.extend;
        Class.implement = function (prop) {
            for (var name in prop)prototype[name] = prop[name]
        };
        return Class
    };
    Function.prototype.bind = Function.prototype.bind || function (bind) {
        var self = this;
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return self.apply(bind || null, args)
        }
    }
})();
cc.defineGetterSetter = function (proto, prop, getter, setter, getterName, setterName) {
    if (proto.__defineGetter__) {
        getter && proto.__defineGetter__(prop, getter);
        setter && proto.__defineSetter__(prop, setter)
    } else if (Object.defineProperty) {
        var desc = {enumerable: false, configurable: true};
        getter && (desc.get = getter);
        setter && (desc.set = setter);
        Object.defineProperty(proto, prop, desc)
    } else throw new Error("browser does not support getters");
    if (!getterName && !setterName) {
        var hasGetter = getter != null, hasSetter = setter != undefined,
            props = Object.getOwnPropertyNames(proto);
        for (var i = 0; i < props.length; i++) {
            var name = props[i];
            if ((proto.__lookupGetter__ ? proto.__lookupGetter__(name) : Object.getOwnPropertyDescriptor(proto, name)) || typeof proto[name] !== "function")continue;
            var func = proto[name];
            if (hasGetter && func === getter) {
                getterName = name;
                if (!hasSetter || setterName)break
            }
            if (hasSetter && func === setter) {
                setterName = name;
                if (!hasGetter || getterName)break
            }
        }
    }
    var ctor = proto.constructor;
    if (getterName) {
        if (!ctor.__getters__)ctor.__getters__ = {};
        ctor.__getters__[getterName] =
            prop
    }
    if (setterName) {
        if (!ctor.__setters__)ctor.__setters__ = {};
        ctor.__setters__[setterName] = prop
    }
};
cc.clone = function (obj) {
    var newObj = obj.constructor ? new obj.constructor : {};
    for (var key in obj) {
        var copy = obj[key];
        if (typeof copy == "object" && copy && !(copy instanceof cc.Node) && !(copy instanceof HTMLElement))newObj[key] = cc.clone(copy); else newObj[key] = copy
    }
    return newObj
};
cc.Point = function (x, y) {
    this.x = x || 0;
    this.y = y || 0
};
cc.p = function (x, y) {
    if (x == undefined)return{x: 0, y: 0};
    if (y == undefined)return{x: x.x, y: x.y};
    return{x: x, y: y}
};
cc.pointEqualToPoint = function (point1, point2) {
    return point1 && point2 && point1.x === point2.x && point1.y === point2.y
};
cc.Size = function (width, height) {
    this.width = width || 0;
    this.height = height || 0
};
cc.size = function (w, h) {
    if (w === undefined)return{width: 0, height: 0};
    if (h === undefined)return{width: w.width, height: w.height};
    return{width: w, height: h}
};
cc.sizeEqualToSize = function (size1, size2) {
    return size1 && size2 && size1.width == size2.width && size1.height == size2.height
};
cc.Rect = function (x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0
};
cc.rect = function (x, y, w, h) {
    if (x === undefined)return{x: 0, y: 0, width: 0, height: 0};
    if (y === undefined)return{x: x.x, y: x.y, width: x.width, height: x.height};
    return{x: x, y: y, width: w, height: h}
};
cc.rectEqualToRect = function (rect1, rect2) {
    return rect1 && rect2 && rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height
};
cc._rectEqualToZero = function (rect) {
    return rect && rect.x === 0 && rect.y === 0 && rect.width === 0 && rect.height === 0
};
cc.rectContainsRect = function (rect1, rect2) {
    if (!rect1 || !rect2)return false;
    return!(rect1.x >= rect2.x || rect1.y >= rect2.y || rect1.x + rect1.width <= rect2.x + rect2.width || rect1.y + rect1.height <= rect2.y + rect2.height)
};
cc.rectGetMaxX = function (rect) {
    return rect.x + rect.width
};
cc.rectGetMidX = function (rect) {
    return rect.x + rect.width / 2
};
cc.rectGetMinX = function (rect) {
    return rect.x
};
cc.rectGetMaxY = function (rect) {
    return rect.y + rect.height
};
cc.rectGetMidY = function (rect) {
    return rect.y + rect.height / 2
};
cc.rectGetMinY = function (rect) {
    return rect.y
};
cc.rectContainsPoint = function (rect, point) {
    return point.x >= cc.rectGetMinX(rect) && point.x <= cc.rectGetMaxX(rect) && point.y >= cc.rectGetMinY(rect) && point.y <= cc.rectGetMaxY(rect)
};
cc.rectIntersectsRect = function (ra, rb) {
    var maxax = ra.x + ra.width, maxay = ra.y + ra.height, maxbx = rb.x + rb.width, maxby = rb.y + rb.height;
    return!(maxax < rb.x || maxbx < ra.x || maxay < rb.y || maxby < ra.y)
};
cc.rectOverlapsRect = function (rectA, rectB) {
    return!(rectA.x + rectA.width < rectB.x || rectB.x + rectB.width < rectA.x || rectA.y + rectA.height < rectB.y || rectB.y + rectB.height < rectA.y)
};
cc.rectUnion = function (rectA, rectB) {
    var rect = cc.rect(0, 0, 0, 0);
    rect.x = Math.min(rectA.x, rectB.x);
    rect.y = Math.min(rectA.y, rectB.y);
    rect.width = Math.max(rectA.x + rectA.width, rectB.x + rectB.width) - rect.x;
    rect.height = Math.max(rectA.y + rectA.height, rectB.y + rectB.height) - rect.y;
    return rect
};
cc.rectIntersection = function (rectA, rectB) {
    var intersection = cc.rect(Math.max(cc.rectGetMinX(rectA), cc.rectGetMinX(rectB)), Math.max(cc.rectGetMinY(rectA), cc.rectGetMinY(rectB)), 0, 0);
    intersection.width = Math.min(cc.rectGetMaxX(rectA), cc.rectGetMaxX(rectB)) - cc.rectGetMinX(intersection);
    intersection.height = Math.min(cc.rectGetMaxY(rectA), cc.rectGetMaxY(rectB)) - cc.rectGetMinY(intersection);
    return intersection
};
cc.visibleRect = {topLeft: cc.p(0, 0), topRight: cc.p(0, 0), top: cc.p(0, 0), bottomLeft: cc.p(0, 0), bottomRight: cc.p(0, 0), bottom: cc.p(0, 0), center: cc.p(0, 0), left: cc.p(0, 0), right: cc.p(0, 0), width: 0, height: 0, init: function (visibleRect) {
    var w = this.width = visibleRect.width;
    var h = this.height = visibleRect.height;
    var l = visibleRect.x, b = visibleRect.y, t = b + h, r = l + w;
    this.topLeft.x = l;
    this.topLeft.y = t;
    this.topRight.x = r;
    this.topRight.y = t;
    this.top.x = l + w / 2;
    this.top.y = t;
    this.bottomLeft.x = l;
    this.bottomLeft.y = b;
    this.bottomRight.x = r;
    this.bottomRight.y =
        b;
    this.bottom.x = l + w / 2;
    this.bottom.y = b;
    this.center.x = l + w / 2;
    this.center.y = b + h / 2;
    this.left.x = l;
    this.left.y = b + h / 2;
    this.right.x = r;
    this.right.y = b + h / 2
}};
cc.SAXParser = cc.Class.extend({_parser: null, _isSupportDOMParser: null, ctor: function () {
    if (window.DOMParser) {
        this._isSupportDOMParser = true;
        this._parser = new DOMParser
    } else this._isSupportDOMParser = false
}, parse: function (xmlTxt) {
    return this._parseXML(xmlTxt)
}, _parseXML: function (textxml) {
    var xmlDoc;
    if (this._isSupportDOMParser)xmlDoc = this._parser.parseFromString(textxml, "text/xml"); else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(textxml)
    }
    return xmlDoc
}});
cc.PlistParser = cc.SAXParser.extend({parse: function (xmlTxt) {
    var xmlDoc = this._parseXML(xmlTxt);
    var plist = xmlDoc.documentElement;
    if (plist.tagName != "plist")throw"Not a plist file!";
    var node = null;
    for (var i = 0, len = plist.childNodes.length; i < len; i++) {
        node = plist.childNodes[i];
        if (node.nodeType == 1)break
    }
    xmlDoc = null;
    return this._parseNode(node)
}, _parseNode: function (node) {
    var data = null, tagName = node.tagName;
    if (tagName == "dict")data = this._parseDict(node); else if (tagName == "array")data = this._parseArray(node); else if (tagName ==
        "string")if (node.childNodes.length == 1)data = node.firstChild.nodeValue; else {
        data = "";
        for (var i = 0; i < node.childNodes.length; i++)data += node.childNodes[i].nodeValue
    } else if (tagName == "false")data = false; else if (tagName == "true")data = true; else if (tagName == "real")data = parseFloat(node.firstChild.nodeValue); else if (tagName == "integer")data = parseInt(node.firstChild.nodeValue, 10);
    return data
}, _parseArray: function (node) {
    var data = [];
    for (var i = 0, len = node.childNodes.length; i < len; i++) {
        var child = node.childNodes[i];
        if (child.nodeType !=
            1)continue;
        data.push(this._parseNode(child))
    }
    return data
}, _parseDict: function (node) {
    var data = {};
    var key = null;
    for (var i = 0, len = node.childNodes.length; i < len; i++) {
        var child = node.childNodes[i];
        if (child.nodeType != 1)continue;
        if (child.tagName == "key")key = child.firstChild.nodeValue; else data[key] = this._parseNode(child)
    }
    return data
}});
cc._txtLoader = {load: function (realUrl, url, res, cb) {
    cc.loader.loadTxt(realUrl, cb)
}};
cc.loader.register(["txt", "xml", "vsh", "fsh", "atlas"], cc._txtLoader);
cc._jsonLoader = {load: function (realUrl, url, res, cb) {
    cc.loader.loadJson(realUrl, cb)
}};
cc.loader.register(["json", "ExportJson"], cc._jsonLoader);
cc._imgLoader = {load: function (realUrl, url, res, cb) {
    cc.loader.cache[url] = cc.loader.loadImg(realUrl, function (err, img) {
        if (err)return cb(err);
        cc.textureCache.handleLoadedTexture(url);
        cb(null, img)
    })
}};
cc.loader.register(["png", "jpg", "bmp", "jpeg", "gif", "ico"], cc._imgLoader);
cc._serverImgLoader = {load: function (realUrl, url, res, cb) {
    cc.loader.cache[url] = cc.loader.loadImg(res.src, function (err, img) {
        if (err)return cb(err);
        cc.textureCache.handleLoadedTexture(url);
        cb(null, img)
    })
}};
cc.loader.register(["serverImg"], cc._serverImgLoader);
cc._plistLoader = {load: function (realUrl, url, res, cb) {
    cc.loader.loadTxt(realUrl, function (err, txt) {
        if (err)return cb(err);
        cb(null, cc.plistParser.parse(txt))
    })
}};
cc.loader.register(["plist"], cc._plistLoader);
cc._fontLoader = {TYPE: {".eot": "embedded-opentype", ".ttf": "truetype", ".woff": "woff", ".svg": "svg"}, _loadFont: function (name, srcs, type) {
    var doc = document, path = cc.path, TYPE = this.TYPE, fontStyle = cc.newElement("style");
    fontStyle.type = "text/css";
    doc.body.appendChild(fontStyle);
    var fontStr = "@font-face { font-family:" + name + "; src:";
    if (srcs instanceof Array)for (var i = 0, li = srcs.length; i < li; i++) {
        var src = srcs[i];
        type = path.extname(src).toLowerCase();
        fontStr += "url('" + srcs[i] + "') format('" + TYPE[type] + "')";
        fontStr += i ==
            li - 1 ? ";" : ","
    } else fontStr += "url('" + srcs + "') format('" + TYPE[type] + "');";
    fontStyle.textContent += fontStr + "};";
    var preloadDiv = cc.newElement("div");
    var _divStyle = preloadDiv.style;
    _divStyle.fontFamily = name;
    preloadDiv.innerHTML = ".";
    _divStyle.position = "absolute";
    _divStyle.left = "-100px";
    _divStyle.top = "-100px";
    doc.body.appendChild(preloadDiv)
}, load: function (realUrl, url, res, cb) {
    var self = this;
    var type = res.type, name = res.name, srcs = res.srcs;
    if (typeof res == "string") {
        type = cc.path.extname(res);
        name = cc.path.basename(res,
            type);
        self._loadFont(name, res, type)
    } else self._loadFont(name, srcs);
    cb(null, true)
}};
cc.loader.register(["font", "eot", "ttf", "woff", "svg"], cc._fontLoader);
cc._binaryLoader = {load: function (realUrl, url, res, cb) {
    cc.loader.loadBinary(realUrl, cb)
}};
window["CocosEngine"] = cc.ENGINE_VERSION = "Cocos2d-html5 v3.0 RC1";
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0;
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0);
cc.DIRECTOR_FPS_INTERVAL = 0.5;
cc.COCOSNODE_RENDER_SUBPIXEL = 1;
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1;
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0;
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0;
cc.TEXTURE_ATLAS_USE_VAO = 0;
cc.TEXTURE_NPOT_SUPPORT = 0;
cc.RETINA_DISPLAY_SUPPORT = 1;
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd";
cc.USE_LA88_LABELS = 1;
cc.IS_RETINA_DISPLAY_SUPPORTED = 1;
cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas";
cc.ENABLE_STACKABLE_ACTIONS = 1;
cc.ENABLE_GL_STATE_CACHE = 1;
cc.$ = function (x) {
    var parent = this == cc ? document : this;
    var el = x instanceof HTMLElement ? x : parent.querySelector(x);
    if (el) {
        el.find = el.find || cc.$;
        el.hasClass = el.hasClass || function (cls) {
            return this.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
        };
        el.addClass = el.addClass || function (cls) {
            if (!this.hasClass(cls)) {
                if (this.className)this.className += " ";
                this.className += cls
            }
            return this
        };
        el.removeClass = el.removeClass || function (cls) {
            if (this.hasClass(cls))this.className = this.className.replace(cls, "");
            return this
        };
        el.remove = el.remove || function () {
            if (this.parentNode)this.parentNode.removeChild(this);
            return this
        };
        el.appendTo = el.appendTo || function (x) {
            x.appendChild(this);
            return this
        };
        el.prependTo = el.prependTo || function (x) {
            x.childNodes[0] ? x.insertBefore(this, x.childNodes[0]) : x.appendChild(this);
            return this
        };
        el.transforms = el.transforms || function () {
            this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew);
            return this
        };
        el.position = el.position || {x: 0, y: 0};
        el.rotation = el.rotation || 0;
        el.scale = el.scale || {x: 1, y: 1};
        el.skew = el.skew || {x: 0, y: 0};
        el.translates = function (x, y) {
            this.position.x = x;
            this.position.y = y;
            this.transforms();
            return this
        };
        el.rotate = function (x) {
            this.rotation = x;
            this.transforms();
            return this
        };
        el.resize = function (x, y) {
            this.scale.x = x;
            this.scale.y = y;
            this.transforms();
            return this
        };
        el.setSkew = function (x, y) {
            this.skew.x = x;
            this.skew.y = y;
            this.transforms();
            return this
        }
    }
    return el
};
switch (cc.sys.browserType) {
    case cc.sys.BROWSER_TYPE_FIREFOX:
        cc.$.pfx = "Moz";
        cc.$.hd = true;
        break;
    case cc.sys.BROWSER_TYPE_CHROME:
    case cc.sys.BROWSER_TYPE_SAFARI:
        cc.$.pfx = "webkit";
        cc.$.hd = true;
        break;
    case cc.sys.BROWSER_TYPE_OPERA:
        cc.$.pfx = "O";
        cc.$.hd = false;
        break;
    case cc.sys.BROWSER_TYPE_IE:
        cc.$.pfx = "ms";
        cc.$.hd = false;
        break;
    default:
        cc.$.pfx = "webkit";
        cc.$.hd = true
}
cc.$.trans = cc.$.pfx + "Transform";
cc.$.translate = cc.$.hd ? function (a) {
    return"translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function (a) {
    return"translate(" + a.x + "px, " + a.y + "px) "
};
cc.$.rotate = cc.$.hd ? function (a) {
    return"rotateZ(" + a + "deg) "
} : function (a) {
    return"rotate(" + a + "deg) "
};
cc.$.scale = function (a) {
    return"scale(" + a.x + ", " + a.y + ") "
};
cc.$.skew = function (a) {
    return"skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};
cc.$new = function (x) {
    return cc.$(document.createElement(x))
};
cc.$.findpos = function (obj) {
    var curleft = 0;
    var curtop = 0;
    do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop
    } while (obj = obj.offsetParent);
    return{x: curleft, y: curtop}
};
cc.INVALID_INDEX = -1;
cc.PI = Math.PI;
cc.FLT_MAX = parseFloat("3.402823466e+38F");
cc.FLT_MIN = parseFloat("1.175494351e-38F");
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.UINT_MAX = 4294967295;
cc.swap = function (x, y, ref) {
    if (typeof ref == "object" && typeof ref.x != "undefined" && typeof ref.y != "undefined") {
        var tmp = ref[x];
        ref[x] = ref[y];
        ref[y] = tmp
    } else cc.log(cc._LogInfos.swap)
};
cc.lerp = function (a, b, r) {
    return a + (b - a) * r
};
cc.rand = function () {
    return Math.random() * 16777215
};
cc.randomMinus1To1 = function () {
    return(Math.random() - 0.5) * 2
};
cc.random0To1 = Math.random;
cc.degreesToRadians = function (angle) {
    return angle * cc.RAD
};
cc.radiansToDegrees = function (angle) {
    return angle * cc.DEG
};
cc.radiansToDegress = function (angle) {
    cc.log(cc._LogInfos.radiansToDegress);
    return angle * cc.DEG
};
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770;
cc.BLEND_DST = 771;
cc.nodeDrawSetup = function (node) {
    if (node._shaderProgram) {
        node._shaderProgram.use();
        node._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4()
    }
};
cc.FLT_EPSILON = 1.192092896E-7;
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ? function () {
    return cc.director.getContentScaleFactor()
} : function () {
    return 1
};
cc.pointPointsToPixels = function (points) {
    var scale = cc.contentScaleFactor();
    return cc.p(points.x * scale, points.y * scale)
};
cc.pointPixelsToPoints = function (pixels) {
    var scale = cc.contentScaleFactor();
    return cc.p(pixels.x / scale, pixels.y / scale)
};
cc._pointPixelsToPointsOut = function (pixels, outPoint) {
    var scale = cc.contentScaleFactor();
    outPoint.x = pixels.x / scale;
    outPoint.y = pixels.y / scale
};
cc.sizePointsToPixels = function (sizeInPoints) {
    var scale = cc.contentScaleFactor();
    return cc.size(sizeInPoints.width * scale, sizeInPoints.height * scale)
};
cc.sizePixelsToPoints = function (sizeInPixels) {
    var scale = cc.contentScaleFactor();
    return cc.size(sizeInPixels.width / scale, sizeInPixels.height / scale)
};
cc._sizePixelsToPointsOut = function (sizeInPixels, outSize) {
    var scale = cc.contentScaleFactor();
    outSize.width = sizeInPixels.width / scale;
    outSize.height = sizeInPixels.height / scale
};
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (pixel) {
    var scale = cc.contentScaleFactor();
    return cc.rect(pixel.x / scale, pixel.y / scale, pixel.width / scale, pixel.height / scale)
} : function (p) {
    return p
};
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (point) {
    var scale = cc.contentScaleFactor();
    return cc.rect(point.x * scale, point.y * scale, point.width * scale, point.height * scale)
} : function (p) {
    return p
};
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 770;
cc.SRC_ALPHA_SATURATE = 776;
cc.SRC_COLOR = 768;
cc.DST_ALPHA = 772;
cc.DST_COLOR = 774;
cc.ONE_MINUS_SRC_ALPHA = 771;
cc.ONE_MINUS_SRC_COLOR = 769;
cc.ONE_MINUS_DST_ALPHA = 773;
cc.ONE_MINUS_DST_COLOR = 775;
cc.ONE_MINUS_CONSTANT_ALPHA = 32772;
cc.ONE_MINUS_CONSTANT_COLOR = 32770;
cc.DEVICE_ORIENTATION_PORTRAIT = 0;
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1;
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2;
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3;
cc.DEVICE_MAX_ORIENTATIONS = 2;
cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1 << 0;
cc.VERTEX_ATTRIB_FLAG_COLOR = 1 << 1;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 1 << 2;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 3;
cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;
cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor";
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest";
cc.SHADER_POSITION_COLOR = "ShaderPositionColor";
cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture";
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor";
cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color";
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor";
cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor";
cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";
cc.ATTRIBUTE_NAME_COLOR = "a_color";
cc.ATTRIBUTE_NAME_POSITION = "a_position";
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord";
cc.ITEM_SIZE = 32;
cc.CURRENT_ITEM = 3233828865;
cc.ZOOM_ACTION_TAG = 3233828866;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;
cc._tmp.PrototypeColor = function () {
    var _p = cc.color;
    _p._getWhite = function () {
        return _p(255, 255, 255)
    };
    _p._getYellow = function () {
        return _p(255, 255, 0)
    };
    _p._getBlue = function () {
        return _p(0, 0, 255)
    };
    _p._getGreen = function () {
        return _p(0, 255, 0)
    };
    _p._getRed = function () {
        return _p(255, 0, 0)
    };
    _p._getMagenta = function () {
        return _p(255, 0, 255)
    };
    _p._getBlack = function () {
        return _p(0, 0, 0)
    };
    _p._getOrange = function () {
        return _p(255, 127, 0)
    };
    _p._getGray = function () {
        return _p(166, 166, 166)
    };
    _p.WHITE;
    cc.defineGetterSetter(_p, "WHITE", _p._getWhite);
    _p.YELLOW;
    cc.defineGetterSetter(_p, "YELLOW", _p._getYellow);
    _p.BLUE;
    cc.defineGetterSetter(_p, "BLUE", _p._getBlue);
    _p.GREEN;
    cc.defineGetterSetter(_p, "GREEN", _p._getGreen);
    _p.RED;
    cc.defineGetterSetter(_p, "RED", _p._getRed);
    _p.MAGENTA;
    cc.defineGetterSetter(_p, "MAGENTA", _p._getMagenta);
    _p.BLACK;
    cc.defineGetterSetter(_p, "BLACK", _p._getBlack);
    _p.ORANGE;
    cc.defineGetterSetter(_p, "ORANGE", _p._getOrange);
    _p.GRAY;
    cc.defineGetterSetter(_p, "GRAY", _p._getGray)
};
cc.Color = function (r, g, b, a) {
    this.r = r || 0;
    this.g = g || 0;
    this.b = b || 0;
    this.a = a || 255
};
cc.color = function (r, g, b, a) {
    if (r === undefined)return{r: 0, g: 0, b: 0, a: 255};
    if (typeof r === "string")return cc.hexToColor(r);
    if (typeof r === "object")return{r: r.r, g: r.g, b: r.b, a: r.a || 255};
    return{r: r, g: g, b: b, a: a || 255}
};
cc.colorEqual = function (color1, color2) {
    return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b
};
cc.Acceleration = function (x, y, z, timestamp) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.timestamp = timestamp || 0
};
cc.Vertex2F = function (x1, y1) {
    this.x = x1 || 0;
    this.y = y1 || 0
};
cc.vertex2 = function (x, y) {
    return new cc.Vertex2F(x, y)
};
cc.Vertex3F = function (x1, y1, z1) {
    this.x = x1 || 0;
    this.y = y1 || 0;
    this.z = z1 || 0
};
cc.vertex3 = function (x, y, z) {
    return new cc.Vertex3F(x, y, z)
};
cc.Tex2F = function (u1, v1) {
    this.u = u1 || 0;
    this.v = v1 || 0
};
cc.tex2 = function (u, v) {
    return new cc.Tex2F(u, v)
};
cc.BlendFunc = function (src1, dst1) {
    this.src = src1;
    this.dst = dst1
};
cc.blendFuncDisable = function () {
    return new cc.BlendFunc(cc.ONE, cc.ZERO)
};
cc.hexToColor = function (hex) {
    hex = hex.replace(/^#?/, "0x");
    var c = parseInt(hex);
    var r = c >> 16;
    var g = (c >> 8) % 256;
    var b = c % 256;
    return cc.color(r, g, b)
};
cc.colorToHex = function (color) {
    var hR = color.r.toString(16), hG = color.g.toString(16), hB = color.b.toString(16);
    return"#" + (color.r < 16 ? "0" + hR : hR) + (color.g < 16 ? "0" + hG : hG) + (color.b < 16 ? "0" + hB : hB)
};
cc.TEXT_ALIGNMENT_LEFT = 0;
cc.TEXT_ALIGNMENT_CENTER = 1;
cc.TEXT_ALIGNMENT_RIGHT = 2;
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0;
cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1;
cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2;
cc._Dictionary = cc.Class.extend({_keyMapTb: null, _valueMapTb: null, __currId: 0, ctor: function () {
    this._keyMapTb = {};
    this._valueMapTb = {};
    this.__currId = 2 << (0 | Math.random() * 10)
}, __getKey: function () {
    this.__currId++;
    return"key_" + this.__currId
}, setObject: function (value, key) {
    if (key == null)return;
    var keyId = this.__getKey();
    this._keyMapTb[keyId] = key;
    this._valueMapTb[keyId] = value
}, objectForKey: function (key) {
    if (key == null)return null;
    var locKeyMapTb = this._keyMapTb;
    for (var keyId in locKeyMapTb)if (locKeyMapTb[keyId] === key)return this._valueMapTb[keyId];
    return null
}, valueForKey: function (key) {
    return this.objectForKey(key)
}, removeObjectForKey: function (key) {
    if (key == null)return;
    var locKeyMapTb = this._keyMapTb;
    for (var keyId in locKeyMapTb)if (locKeyMapTb[keyId] === key) {
        delete this._valueMapTb[keyId];
        delete locKeyMapTb[keyId];
        return
    }
}, removeObjectsForKeys: function (keys) {
    if (keys == null)return;
    for (var i = 0; i < keys.length; i++)this.removeObjectForKey(keys[i])
}, allKeys: function () {
    var keyArr = [], locKeyMapTb = this._keyMapTb;
    for (var key in locKeyMapTb)keyArr.push(locKeyMapTb[key]);
    return keyArr
}, removeAllObjects: function () {
    this._keyMapTb = {};
    this._valueMapTb = {}
}, count: function () {
    return this.allKeys().length
}});
cc.FontDefinition = function () {
    var _t = this;
    _t.fontName = "Arial";
    _t.fontSize = 12;
    _t.textAlign = cc.TEXT_ALIGNMENT_CENTER;
    _t.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
    _t.fillStyle = cc.color(255, 255, 255, 255);
    _t.boundingWidth = 0;
    _t.boundingHeight = 0;
    _t.strokeEnabled = false;
    _t.strokeStyle = cc.color(255, 255, 255, 255);
    _t.lineWidth = 1;
    _t.shadowEnabled = false;
    _t.shadowOffsetX = 0;
    _t.shadowOffsetY = 0;
    _t.shadowBlur = 0;
    _t.shadowOpacity = 1
};
cc.assert(typeof cc._tmp.PrototypeColor === "function", cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js");
cc._tmp.PrototypeColor();
delete cc._tmp.PrototypeColor;
cc.Touches = [];
cc.TouchesIntergerDict = {};
cc.EGLView = cc.Class.extend({_delegate: null, _frameSize: null, _designResolutionSize: null, _originalDesignResolutionSize: null, _viewPortRect: null, _visibleRect: null, _retinaEnabled: false, _autoFullScreen: true, _devicePixelRatio: 1, _viewName: "", _resizeCallback: null, _scaleX: 1, _originalScaleX: 1, _scaleY: 1, _originalScaleY: 1, _indexBitsUsed: 0, _maxTouches: 5, _resolutionPolicy: null, _rpExactFit: null, _rpShowAll: null, _rpNoBorder: null, _rpFixedHeight: null, _rpFixedWidth: null, _initialized: false, _captured: false, _wnd: null, _hDC: null,
    _hRC: null, _supportTouch: false, _contentTranslateLeftTop: null, _frame: null, _frameZoomFactor: 1, __resizeWithBrowserSize: false, _isAdjustViewPort: true, ctor: function () {
        var _t = this, d = document, _strategyer = cc.ContainerStrategy, _strategy = cc.ContentStrategy;
        _t._frame = cc.container.parentNode === d.body ? d.documentElement : cc.container.parentNode;
        _t._frameSize = cc.size(0, 0);
        _t._initFrameSize();
        var w = cc._canvas.width, h = cc._canvas.height;
        _t._designResolutionSize = cc.size(w, h);
        _t._originalDesignResolutionSize = cc.size(w,
            h);
        _t._viewPortRect = cc.rect(0, 0, w, h);
        _t._visibleRect = cc.rect(0, 0, w, h);
        _t._contentTranslateLeftTop = {left: 0, top: 0};
        _t._viewName = "Cocos2dHTML5";
        var sys = cc.sys;
        _t.enableRetina(sys.os == sys.OS_IOS || sys.os == sys.OS_OSX);
        cc.visibleRect && cc.visibleRect.init(_t._visibleRect);
        _t._rpExactFit = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.EXACT_FIT);
        _t._rpShowAll = new cc.ResolutionPolicy(_strategyer.PROPORTION_TO_FRAME, _strategy.SHOW_ALL);
        _t._rpNoBorder = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME,
            _strategy.NO_BORDER);
        _t._rpFixedHeight = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_HEIGHT);
        _t._rpFixedWidth = new cc.ResolutionPolicy(_strategyer.EQUAL_TO_FRAME, _strategy.FIXED_WIDTH);
        _t._hDC = cc._canvas;
        _t._hRC = cc._renderContext
    }, _resizeEvent: function () {
        var width = this._originalDesignResolutionSize.width;
        var height = this._originalDesignResolutionSize.height;
        if (this._resizeCallback) {
            this._initFrameSize();
            this._resizeCallback.call()
        }
        if (width > 0)this.setDesignResolutionSize(width, height,
            this._resolutionPolicy)
    }, resizeWithBrowserSize: function (enabled) {
        var adjustSize, _t = this;
        if (enabled) {
            if (!_t.__resizeWithBrowserSize) {
                _t.__resizeWithBrowserSize = true;
                adjustSize = _t._resizeEvent.bind(_t);
                cc._addEventListener(window, "resize", adjustSize, false)
            }
        } else if (_t.__resizeWithBrowserSize) {
            _t.__resizeWithBrowserSize = true;
            adjustSize = _t._resizeEvent.bind(_t);
            window.removeEventListener("resize", adjustSize, false)
        }
    }, setResizeCallback: function (callback) {
        if (typeof callback == "function" || callback == null)this._resizeCallback =
            callback
    }, _initFrameSize: function () {
        var locFrameSize = this._frameSize;
        locFrameSize.width = this._frame.clientWidth;
        locFrameSize.height = this._frame.clientHeight
    }, _adjustSizeKeepCanvasSize: function () {
        var designWidth = this._originalDesignResolutionSize.width;
        var designHeight = this._originalDesignResolutionSize.height;
        if (designWidth > 0)this.setDesignResolutionSize(designWidth, designHeight, this._resolutionPolicy)
    }, _setViewPortMeta: function (width, height) {
        if (this._isAdjustViewPort) {
            var viewportMetas = {"user-scalable": "no",
                "maximum-scale": "1.0", "initial-scale": "1.0"}, elems = document.getElementsByName("viewport"), vp, content;
            if (elems.length == 0) {
                vp = cc.newElement("meta");
                vp.name = "viewport";
                vp.content = "";
                document.head.appendChild(vp)
            } else vp = elems[0];
            if (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_FIREFOX) {
                vp.content = "initial-scale:1";
                return
            }
            content = vp.content;
            for (var key in viewportMetas) {
                var pattern = new RegExp(key);
                if (!pattern.test(content))content += (content == "" ? "" : ",") + key + "\x3d" + viewportMetas[key]
            }
            vp.content =
                content
        }
    }, _setScaleXYForRenderTexture: function () {
        var scaleFactor = cc.contentScaleFactor();
        this._scaleX = scaleFactor;
        this._scaleY = scaleFactor
    }, _resetScale: function () {
        this._scaleX = this._originalScaleX;
        this._scaleY = this._originalScaleY
    }, _adjustSizeToBrowser: function () {
    }, initialize: function () {
        this._initialized = true
    }, adjustViewPort: function (enabled) {
        this._isAdjustViewPort = enabled
    }, enableRetina: function (enabled) {
        this._retinaEnabled = enabled ? true : false
    }, isRetinaEnabled: function () {
        return this._retinaEnabled
    },
    enableAutoFullScreen: function (enabled) {
        this._autoFullScreen = enabled ? true : false
    }, isAutoFullScreenEnabled: function () {
        return this._autoFullScreen
    }, end: function () {
    }, isOpenGLReady: function () {
        return this._hDC != null && this._hRC != null
    }, setFrameZoomFactor: function (zoomFactor) {
        this._frameZoomFactor = zoomFactor;
        this.centerWindow();
        cc.director.setProjection(cc.director.getProjection())
    }, swapBuffers: function () {
    }, setIMEKeyboardState: function (isOpen) {
    }, setContentTranslateLeftTop: function (offsetLeft, offsetTop) {
        this._contentTranslateLeftTop =
        {left: offsetLeft, top: offsetTop}
    }, getContentTranslateLeftTop: function () {
        return this._contentTranslateLeftTop
    }, getFrameSize: function () {
        return cc.size(this._frameSize.width, this._frameSize.height)
    }, setFrameSize: function (width, height) {
        this._frameSize.width = width;
        this._frameSize.height = height;
        this._frame.style.width = width + "px";
        this._frame.style.height = height + "px";
        this._resizeEvent();
        cc.director.setProjection(cc.director.getProjection())
    }, centerWindow: function () {
    }, getVisibleSize: function () {
        return cc.size(this._visibleRect.width,
            this._visibleRect.height)
    }, getVisibleOrigin: function () {
        return cc.p(this._visibleRect.x, this._visibleRect.y)
    }, canSetContentScaleFactor: function () {
        return true
    }, getResolutionPolicy: function () {
        return this._resolutionPolicy
    }, setResolutionPolicy: function (resolutionPolicy) {
        var _t = this;
        if (resolutionPolicy instanceof cc.ResolutionPolicy)_t._resolutionPolicy = resolutionPolicy; else {
            var _locPolicy = cc.ResolutionPolicy;
            if (resolutionPolicy === _locPolicy.EXACT_FIT)_t._resolutionPolicy = _t._rpExactFit;
            if (resolutionPolicy ===
                _locPolicy.SHOW_ALL)_t._resolutionPolicy = _t._rpShowAll;
            if (resolutionPolicy === _locPolicy.NO_BORDER)_t._resolutionPolicy = _t._rpNoBorder;
            if (resolutionPolicy === _locPolicy.FIXED_HEIGHT)_t._resolutionPolicy = _t._rpFixedHeight;
            if (resolutionPolicy === _locPolicy.FIXED_WIDTH)_t._resolutionPolicy = _t._rpFixedWidth
        }
    }, setDesignResolutionSize: function (width, height, resolutionPolicy) {
        if (isNaN(width) || width == 0 || isNaN(height) || height == 0) {
            cc.log(cc._LogInfos.EGLView_setDesignResolutionSize);
            return
        }
        var _t = this;
        _t.setResolutionPolicy(resolutionPolicy);
        var policy = _t._resolutionPolicy;
        if (policy)policy.preApply(_t); else {
            cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2);
            return
        }
        var frameW = _t._frameSize.width, frameH = _t._frameSize.height;
        if (cc.sys.isMobile)_t._setViewPortMeta(_t._frameSize.width, _t._frameSize.height);
        _t._initFrameSize();
        if (resolutionPolicy == _t._resolutionPolicy && width == _t._originalDesignResolutionSize.width && height == _t._originalDesignResolutionSize.height && frameW == _t._frameSize.width && frameH == _t._frameSize.height)return;
        _t._designResolutionSize =
            cc.size(width, height);
        _t._originalDesignResolutionSize = cc.size(width, height);
        var result = policy.apply(_t, _t._designResolutionSize);
        if (result.scale && result.scale.length == 2) {
            _t._scaleX = result.scale[0];
            _t._scaleY = result.scale[1]
        }
        if (result.viewport) {
            var vp = _t._viewPortRect = result.viewport, visible = _t._visibleRect;
            visible.width = cc._canvas.width / _t._scaleX;
            visible.height = cc._canvas.height / _t._scaleY;
            visible.x = -vp.x / _t._scaleX;
            visible.y = -vp.y / _t._scaleY
        }
        var director = cc.director;
        cc.winSize.width = director._winSizeInPoints.width =
            _t._visibleRect.width;
        cc.winSize.height = director._winSizeInPoints.height = _t._visibleRect.height;
        policy.postApply(_t);
        _t._originalScaleX = _t._scaleX;
        _t._originalScaleY = _t._scaleY;
        if (cc.DOM)cc.DOM._resetEGLViewDiv();
        cc.visibleRect && cc.visibleRect.init(_t._visibleRect)
    }, getDesignResolutionSize: function () {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height)
    }, setViewPortInPoints: function (x, y, w, h) {
        var locFrameZoomFactor = this._frameZoomFactor, locScaleX = this._scaleX, locScaleY = this._scaleY;
        cc._renderContext.viewport(x * locScaleX * locFrameZoomFactor + this._viewPortRect.x * locFrameZoomFactor, y * locScaleY * locFrameZoomFactor + this._viewPortRect.y * locFrameZoomFactor, w * locScaleX * locFrameZoomFactor, h * locScaleY * locFrameZoomFactor)
    }, setScissorInPoints: function (x, y, w, h) {
        var locFrameZoomFactor = this._frameZoomFactor, locScaleX = this._scaleX, locScaleY = this._scaleY;
        cc._renderContext.scissor(x * locScaleX * locFrameZoomFactor +
            this._viewPortRect.x * locFrameZoomFactor, y * locScaleY * locFrameZoomFactor + this._viewPortRect.y * locFrameZoomFactor, w * locScaleX * locFrameZoomFactor, h * locScaleY * locFrameZoomFactor)
    }, isScissorEnabled: function () {
        var gl = cc._renderContext;
        return gl.isEnabled(gl.SCISSOR_TEST)
    }, getScissorRect: function () {
        var gl = cc._renderContext, scaleX = this._scaleX, scaleY = this._scaleY;
        var boxArr = gl.getParameter(gl.SCISSOR_BOX);
        return cc.rect((boxArr[0] - this._viewPortRect.x) / scaleX, (boxArr[1] - this._viewPortRect.y) / scaleY, boxArr[2] /
            scaleX, boxArr[3] / scaleY)
    }, setViewName: function (viewName) {
        if (viewName != null && viewName.length > 0)this._viewName = viewName
    }, getViewName: function () {
        return this._viewName
    }, getViewPortRect: function () {
        return this._viewPortRect
    }, getScaleX: function () {
        return this._scaleX
    }, getScaleY: function () {
        return this._scaleY
    }, getDevicePixelRatio: function () {
        return this._devicePixelRatio
    }, convertToLocationInView: function (tx, ty, relatedPos) {
        return{x: this._devicePixelRatio * (tx - relatedPos.left), y: this._devicePixelRatio * (relatedPos.top +
            relatedPos.height - ty)}
    }, _convertMouseToLocationInView: function (point, relatedPos) {
        var locViewPortRect = this._viewPortRect, _t = this;
        point.x = (_t._devicePixelRatio * (point.x - relatedPos.left) - locViewPortRect.x) / _t._scaleX;
        point.y = (_t._devicePixelRatio * (relatedPos.top + relatedPos.height - point.y) - locViewPortRect.y) / _t._scaleY
    }, _convertTouchesWithScale: function (touches) {
        var locViewPortRect = this._viewPortRect, locScaleX = this._scaleX, locScaleY = this._scaleY, selTouch, selPoint, selPrePoint;
        for (var i = 0; i < touches.length; i++) {
            selTouch =
                touches[i];
            selPoint = selTouch._point;
            selPrePoint = selTouch._prevPoint;
            selTouch._setPoint((selPoint.x - locViewPortRect.x) / locScaleX, (selPoint.y - locViewPortRect.y) / locScaleY);
            selTouch._setPrevPoint((selPrePoint.x - locViewPortRect.x) / locScaleX, (selPrePoint.y - locViewPortRect.y) / locScaleY)
        }
    }});
cc.EGLView._getInstance = function () {
    if (!this._instance) {
        this._instance = this._instance || new cc.EGLView;
        this._instance.initialize()
    }
    return this._instance
};
cc.ContainerStrategy = cc.Class.extend({preApply: function (view) {
}, apply: function (view, designedResolution) {
}, postApply: function (view) {
}, _setupContainer: function (view, w, h) {
    var frame = view._frame;
    if (cc.view._autoFullScreen && cc.sys.isMobile && frame == document.documentElement)cc.screen.autoFullScreen(frame);
    var locCanvasElement = cc._canvas, locContainer = cc.container;
    locContainer.style.width = locCanvasElement.style.width = w + "px";
    locContainer.style.height = locCanvasElement.style.height = h + "px";
    var devicePixelRatio =
        view._devicePixelRatio = 1;
    if (view.isRetinaEnabled())devicePixelRatio = view._devicePixelRatio = window.devicePixelRatio || 1;
    locCanvasElement.width = w * devicePixelRatio;
    locCanvasElement.height = h * devicePixelRatio;
    var body = document.body, style;
    if (body && (style = body.style)) {
        style.paddingTop = style.paddingTop || "0px";
        style.paddingRight = style.paddingRight || "0px";
        style.paddingBottom = style.paddingBottom || "0px";
        style.paddingLeft = style.paddingLeft || "0px";
        style.borderTop = style.borderTop || "0px";
        style.borderRight = style.borderRight ||
            "0px";
        style.borderBottom = style.borderBottom || "0px";
        style.borderLeft = style.borderLeft || "0px";
        style.marginTop = style.marginTop || "0px";
        style.marginRight = style.marginRight || "0px";
        style.marginBottom = style.marginBottom || "0px";
        style.marginLeft = style.marginLeft || "0px"
    }
}, _fixContainer: function () {
    document.body.insertBefore(cc.container, document.body.firstChild);
    var bs = document.body.style;
    bs.width = window.innerWidth + "px";
    bs.height = window.innerHeight + "px";
    bs.overflow = "hidden";
    var contStyle = cc.container.style;
    contStyle.position =
        "fixed";
    contStyle.left = contStyle.top = "0px";
    document.body.scrollTop = 0
}});
cc.ContentStrategy = cc.Class.extend({_result: {scale: [1, 1], viewport: null}, _buildResult: function (containerW, containerH, contentW, contentH, scaleX, scaleY) {
    Math.abs(containerW - contentW) < 2 && (contentW = containerW);
    Math.abs(containerH - contentH) < 2 && (contentH = containerH);
    var viewport = cc.rect(Math.round((containerW - contentW) / 2), Math.round((containerH - contentH) / 2), contentW, contentH);
    cc._renderContext.translate(viewport.x, viewport.y + contentH);
    this._result.scale = [scaleX, scaleY];
    this._result.viewport = viewport;
    return this._result
}, preApply: function (view) {
}, apply: function (view, designedResolution) {
    return{"scale": [1, 1]}
}, postApply: function (view) {
}});
(function () {
    var EqualToFrame = cc.ContainerStrategy.extend({apply: function (view) {
        this._setupContainer(view, view._frameSize.width, view._frameSize.height)
    }});
    var ProportionalToFrame = cc.ContainerStrategy.extend({apply: function (view, designedResolution) {
        var frameW = view._frameSize.width, frameH = view._frameSize.height, containerStyle = cc.container.style, designW = designedResolution.width, designH = designedResolution.height, scaleX = frameW / designW, scaleY = frameH / designH, containerW, containerH;
        scaleX < scaleY ? (containerW =
            frameW, containerH = designH * scaleX) : (containerW = designW * scaleY, containerH = frameH);
        var offx = Math.round((frameW - containerW) / 2);
        var offy = Math.round((frameH - containerH) / 2);
        containerW = frameW - 2 * offx;
        containerH = frameH - 2 * offy;
        this._setupContainer(view, containerW, containerH);
        containerStyle.marginLeft = offx + "px";
        containerStyle.marginRight = offx + "px";
        containerStyle.marginTop = offy + "px";
        containerStyle.marginBottom = offy + "px"
    }});
    var EqualToWindow = EqualToFrame.extend({preApply: function (view) {
        this._super(view);
        view._frame =
            document.documentElement
    }, apply: function (view) {
        this._super(view);
        this._fixContainer()
    }});
    var ProportionalToWindow = ProportionalToFrame.extend({preApply: function (view) {
        this._super(view);
        view._frame = document.documentElement
    }, apply: function (view, designedResolution) {
        this._super(view, designedResolution);
        this._fixContainer()
    }});
    var OriginalContainer = cc.ContainerStrategy.extend({apply: function (view) {
        this._setupContainer(view, cc._canvas.width, cc._canvas.height)
    }});
    cc.ContainerStrategy.EQUAL_TO_FRAME = new EqualToFrame;
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new ProportionalToFrame;
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new OriginalContainer;
    var ExactFit = cc.ContentStrategy.extend({apply: function (view, designedResolution) {
        var containerW = cc._canvas.width, containerH = cc._canvas.height, scaleX = containerW / designedResolution.width, scaleY = containerH / designedResolution.height;
        return this._buildResult(containerW, containerH, containerW, containerH, scaleX, scaleY)
    }});
    var ShowAll = cc.ContentStrategy.extend({apply: function (view, designedResolution) {
        var containerW = cc._canvas.width, containerH = cc._canvas.height, designW = designedResolution.width, designH = designedResolution.height, scaleX = containerW / designW, scaleY = containerH / designH, scale = 0, contentW, contentH;
        scaleX < scaleY ? (scale = scaleX, contentW = containerW, contentH = designH * scale) : (scale = scaleY, contentW = designW * scale, contentH = containerH);
        return this._buildResult(containerW, containerH, contentW, contentH, scale, scale)
    }});
    var NoBorder = cc.ContentStrategy.extend({apply: function (view, designedResolution) {
        var containerW =
            cc._canvas.width, containerH = cc._canvas.height, designW = designedResolution.width, designH = designedResolution.height, scaleX = containerW / designW, scaleY = containerH / designH, scale, contentW, contentH;
        scaleX < scaleY ? (scale = scaleY, contentW = designW * scale, contentH = containerH) : (scale = scaleX, contentW = containerW, contentH = designH * scale);
        return this._buildResult(containerW, containerH, contentW, contentH, scale, scale)
    }});
    var FixedHeight = cc.ContentStrategy.extend({apply: function (view, designedResolution) {
        var containerW = cc._canvas.width,
            containerH = cc._canvas.height, designH = designedResolution.height, scale = containerH / designH, contentW = containerW, contentH = containerH;
        return this._buildResult(containerW, containerH, contentW, contentH, scale, scale)
    }, postApply: function (view) {
        cc.director._winSizeInPoints = view.getVisibleSize()
    }});
    var FixedWidth = cc.ContentStrategy.extend({apply: function (view, designedResolution) {
        var containerW = cc._canvas.width, containerH = cc._canvas.height, designW = designedResolution.width, scale = containerW / designW, contentW = containerW,
            contentH = containerH;
        return this._buildResult(containerW, containerH, contentW, contentH, scale, scale)
    }, postApply: function (view) {
        cc.director._winSizeInPoints = view.getVisibleSize()
    }});
    cc.ContentStrategy.EXACT_FIT = new ExactFit;
    cc.ContentStrategy.SHOW_ALL = new ShowAll;
    cc.ContentStrategy.NO_BORDER = new NoBorder;
    cc.ContentStrategy.FIXED_HEIGHT = new FixedHeight;
    cc.ContentStrategy.FIXED_WIDTH = new FixedWidth
})();
cc.ResolutionPolicy = cc.Class.extend({_containerStrategy: null, _contentStrategy: null, ctor: function (containerStg, contentStg) {
    this.setContainerStrategy(containerStg);
    this.setContentStrategy(contentStg)
}, preApply: function (view) {
    this._containerStrategy.preApply(view);
    this._contentStrategy.preApply(view)
}, apply: function (view, designedResolution) {
    this._containerStrategy.apply(view, designedResolution);
    return this._contentStrategy.apply(view, designedResolution)
}, postApply: function (view) {
    this._containerStrategy.postApply(view);
    this._contentStrategy.postApply(view)
}, setContainerStrategy: function (containerStg) {
    if (containerStg instanceof cc.ContainerStrategy)this._containerStrategy = containerStg
}, setContentStrategy: function (contentStg) {
    if (contentStg instanceof cc.ContentStrategy)this._contentStrategy = contentStg
}});
cc.ResolutionPolicy.EXACT_FIT = 0;
cc.ResolutionPolicy.NO_BORDER = 1;
cc.ResolutionPolicy.SHOW_ALL = 2;
cc.ResolutionPolicy.FIXED_HEIGHT = 3;
cc.ResolutionPolicy.FIXED_WIDTH = 4;
cc.ResolutionPolicy.UNKNOWN = 5;
cc.UIInterfaceOrientationLandscapeLeft = -90;
cc.UIInterfaceOrientationLandscapeRight = 90;
cc.UIInterfaceOrientationPortraitUpsideDown = 180;
cc.UIInterfaceOrientationPortrait = 0;
cc.inputManager = {_mousePressed: false, _isRegisterEvent: false, _preTouchPoint: cc.p(0, 0), _prevMousePoint: cc.p(0, 0), _preTouchPool: [], _preTouchPoolPointer: 0, _touches: [], _touchesIntegerDict: {}, _indexBitsUsed: 0, _maxTouches: 5, _accelEnabled: false, _accelInterval: 1 / 30, _accelMinus: 1, _accelCurTime: 0, _acceleration: null, _accelDeviceEvent: null, _getUnUsedIndex: function () {
    var temp = this._indexBitsUsed;
    for (var i = 0; i < this._maxTouches; i++) {
        if (!(temp & 1)) {
            this._indexBitsUsed |= 1 << i;
            return i
        }
        temp >>= 1
    }
    return-1
}, _removeUsedIndexBit: function (index) {
    if (index <
        0 || index >= this._maxTouches)return;
    var temp = 1 << index;
    temp = ~temp;
    this._indexBitsUsed &= temp
}, _glView: null, handleTouchesBegin: function (touches) {
    var selTouch, index, curTouch, touchID, handleTouches = [], locTouchIntDict = this._touchesIntegerDict;
    for (var i = 0, len = touches.length; i < len; i++) {
        selTouch = touches[i];
        touchID = selTouch.getID();
        index = locTouchIntDict[touchID];
        if (index == null) {
            var unusedIndex = this._getUnUsedIndex();
            if (unusedIndex == -1) {
                cc.log(cc._LogInfos.inputManager_handleTouchesBegin, unusedIndex);
                continue
            }
            curTouch =
                this._touches[unusedIndex] = selTouch;
            locTouchIntDict[touchID] = unusedIndex;
            handleTouches.push(curTouch)
        }
    }
    if (handleTouches.length > 0) {
        this._glView._convertTouchesWithScale(handleTouches);
        var touchEvent = new cc.EventTouch(handleTouches);
        touchEvent._eventCode = cc.EventTouch.EventCode.BEGAN;
        cc.eventManager.dispatchEvent(touchEvent)
    }
}, handleTouchesMove: function (touches) {
    var selTouch, index, touchID, handleTouches = [], locTouches = this._touches;
    for (var i = 0, len = touches.length; i < len; i++) {
        selTouch = touches[i];
        touchID =
            selTouch.getID();
        index = this._touchesIntegerDict[touchID];
        if (index == null)continue;
        if (locTouches[index]) {
            locTouches[index]._setPoint(selTouch._point);
            locTouches[index]._setPrevPoint(selTouch._prevPoint);
            handleTouches.push(locTouches[index])
        }
    }
    if (handleTouches.length > 0) {
        this._glView._convertTouchesWithScale(handleTouches);
        var touchEvent = new cc.EventTouch(handleTouches);
        touchEvent._eventCode = cc.EventTouch.EventCode.MOVED;
        cc.eventManager.dispatchEvent(touchEvent)
    }
}, handleTouchesEnd: function (touches) {
    var handleTouches =
        this.getSetOfTouchesEndOrCancel(touches);
    if (handleTouches.length > 0) {
        this._glView._convertTouchesWithScale(handleTouches);
        var touchEvent = new cc.EventTouch(handleTouches);
        touchEvent._eventCode = cc.EventTouch.EventCode.ENDED;
        cc.eventManager.dispatchEvent(touchEvent)
    }
}, handleTouchesCancel: function (touches) {
    var handleTouches = this.getSetOfTouchesEndOrCancel(touches);
    if (handleTouches.length > 0) {
        this._glView._convertTouchesWithScale(handleTouches);
        var touchEvent = new cc.EventTouch(handleTouches);
        touchEvent._eventCode =
            cc.EventTouch.EventCode.CANCELLED;
        cc.eventManager.dispatchEvent(touchEvent)
    }
}, getSetOfTouchesEndOrCancel: function (touches) {
    var selTouch, index, touchID, handleTouches = [], locTouches = this._touches, locTouchesIntDict = this._touchesIntegerDict;
    for (var i = 0, len = touches.length; i < len; i++) {
        selTouch = touches[i];
        touchID = selTouch.getID();
        index = locTouchesIntDict[touchID];
        if (index == null)continue;
        if (locTouches[index]) {
            locTouches[index]._setPoint(selTouch._point);
            locTouches[index]._setPrevPoint(selTouch._prevPoint);
            handleTouches.push(locTouches[index]);
            this._removeUsedIndexBit(index);
            delete locTouchesIntDict[touchID]
        }
    }
    return handleTouches
}, getHTMLElementPosition: function (element) {
    var docElem = document.documentElement;
    var win = window;
    var box = null;
    if (typeof element.getBoundingClientRect === "function")box = element.getBoundingClientRect(); else if (element instanceof HTMLCanvasElement)box = {left: 0, top: 0, width: element.width, height: element.height}; else box = {left: 0, top: 0, width: parseInt(element.style.width), height: parseInt(element.style.height)};
    return{left: box.left +
        win.pageXOffset - docElem.clientLeft, top: box.top + win.pageYOffset - docElem.clientTop, width: box.width, height: box.height}
}, getPreTouch: function (touch) {
    var preTouch = null;
    var locPreTouchPool = this._preTouchPool;
    var id = touch.getId();
    for (var i = locPreTouchPool.length - 1; i >= 0; i--)if (locPreTouchPool[i].getId() == id) {
        preTouch = locPreTouchPool[i];
        break
    }
    if (!preTouch)preTouch = touch;
    return preTouch
}, setPreTouch: function (touch) {
    var find = false;
    var locPreTouchPool = this._preTouchPool;
    var id = touch.getId();
    for (var i = locPreTouchPool.length -
        1; i >= 0; i--)if (locPreTouchPool[i].getId() == id) {
        locPreTouchPool[i] = touch;
        find = true;
        break
    }
    if (!find)if (locPreTouchPool.length <= 50)locPreTouchPool.push(touch); else {
        locPreTouchPool[this._preTouchPoolPointer] = touch;
        this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50
    }
}, getTouchByXY: function (tx, ty, pos) {
    var locPreTouch = this._preTouchPoint;
    var location = this._glView.convertToLocationInView(tx, ty, pos);
    var touch = new cc.Touch(location.x, location.y);
    touch._setPrevPoint(locPreTouch.x, locPreTouch.y);
    locPreTouch.x =
        location.x;
    locPreTouch.y = location.y;
    return touch
}, getMouseEvent: function (location, pos, eventType) {
    var locPreMouse = this._prevMousePoint;
    this._glView._convertMouseToLocationInView(location, pos);
    var mouseEvent = new cc.EventMouse(eventType);
    mouseEvent.setLocation(location.x, location.y);
    mouseEvent._setPrevCursor(locPreMouse.x, locPreMouse.y);
    locPreMouse.x = location.x;
    locPreMouse.y = location.y;
    return mouseEvent
}, getPointByEvent: function (event, pos) {
    if (event.pageX != null)return{x: event.pageX, y: event.pageY};
    pos.left -=
        document.body.scrollLeft;
    pos.top -= document.body.scrollTop;
    return{x: event.clientX, y: event.clientY}
}, getTouchesByEvent: function (event, pos) {
    var touchArr = [], locView = this._glView;
    var touch_event, touch, preLocation;
    var locPreTouch = this._preTouchPoint;
    var length = event.changedTouches.length;
    for (var i = 0; i < length; i++) {
        touch_event = event.changedTouches[i];
        if (touch_event) {
            var location;
            if (cc.sys.BROWSER_TYPE_FIREFOX === cc.sys.browserType)location = locView.convertToLocationInView(touch_event.pageX, touch_event.pageY,
                pos); else location = locView.convertToLocationInView(touch_event.clientX, touch_event.clientY, pos);
            if (touch_event.identifier != null) {
                touch = new cc.Touch(location.x, location.y, touch_event.identifier);
                preLocation = this.getPreTouch(touch).getLocation();
                touch._setPrevPoint(preLocation.x, preLocation.y);
                this.setPreTouch(touch)
            } else {
                touch = new cc.Touch(location.x, location.y);
                touch._setPrevPoint(locPreTouch.x, locPreTouch.y)
            }
            locPreTouch.x = location.x;
            locPreTouch.y = location.y;
            touchArr.push(touch)
        }
    }
    return touchArr
},registerSystemEvent: function (element) {
    if (this._isRegisterEvent)return;
    var locView = this._glView = cc.view;
    var selfPointer = this;
    var supportMouse = "mouse"in cc.sys.capabilities, supportTouches = "touches"in cc.sys.capabilities;
    if (supportMouse) {
        cc._addEventListener(window, "mousedown", function () {
            selfPointer._mousePressed = true
        }, false);
        cc._addEventListener(window, "mouseup", function (event) {
            var savePressed = selfPointer._mousePressed;
            selfPointer._mousePressed = false;
            if (!savePressed)return;
            var pos = selfPointer.getHTMLElementPosition(element);
            var location = selfPointer.getPointByEvent(event, pos);
            if (!cc.rectContainsPoint(new cc.Rect(pos.left, pos.top, pos.width, pos.height), location)) {
                if (!supportTouches)selfPointer.handleTouchesEnd([selfPointer.getTouchByXY(location.x, location.y, pos)]);
                var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.UP);
                mouseEvent.setButton(event.button);
                cc.eventManager.dispatchEvent(mouseEvent)
            }
        }, false);
        cc._addEventListener(element, "mousedown", function (event) {
            selfPointer._mousePressed = true;
            var pos = selfPointer.getHTMLElementPosition(element);
            var location = selfPointer.getPointByEvent(event, pos);
            if (!supportTouches)selfPointer.handleTouchesBegin([selfPointer.getTouchByXY(location.x, location.y, pos)]);
            var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.DOWN);
            mouseEvent.setButton(event.button);
            cc.eventManager.dispatchEvent(mouseEvent);
            event.stopPropagation();
            event.preventDefault();
            element.focus()
        }, false);
        cc._addEventListener(element, "mouseup", function (event) {
            selfPointer._mousePressed = false;
            var pos = selfPointer.getHTMLElementPosition(element);
            var location = selfPointer.getPointByEvent(event, pos);
            if (!supportTouches)selfPointer.handleTouchesEnd([selfPointer.getTouchByXY(location.x, location.y, pos)]);
            var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.UP);
            mouseEvent.setButton(event.button);
            cc.eventManager.dispatchEvent(mouseEvent);
            event.stopPropagation();
            event.preventDefault()
        }, false);
        cc._addEventListener(element, "mousemove", function (event) {
            var pos = selfPointer.getHTMLElementPosition(element);
            var location = selfPointer.getPointByEvent(event,
                pos);
            if (!supportTouches)selfPointer.handleTouchesMove([selfPointer.getTouchByXY(location.x, location.y, pos)]);
            var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.MOVE);
            if (selfPointer._mousePressed)mouseEvent.setButton(event.button); else mouseEvent.setButton(null);
            cc.eventManager.dispatchEvent(mouseEvent);
            event.stopPropagation();
            event.preventDefault()
        }, false);
        cc._addEventListener(element, "mousewheel", function (event) {
            var pos = selfPointer.getHTMLElementPosition(element);
            var location = selfPointer.getPointByEvent(event,
                pos);
            var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.SCROLL);
            mouseEvent.setButton(event.button);
            mouseEvent.setScrollData(0, event.wheelDelta);
            cc.eventManager.dispatchEvent(mouseEvent);
            event.stopPropagation();
            event.preventDefault()
        }, false);
        cc._addEventListener(element, "DOMMouseScroll", function (event) {
            var pos = selfPointer.getHTMLElementPosition(element);
            var location = selfPointer.getPointByEvent(event, pos);
            var mouseEvent = selfPointer.getMouseEvent(location, pos, cc.EventMouse.SCROLL);
            mouseEvent.setButton(event.button);
            mouseEvent.setScrollData(0, event.detail * -120);
            cc.eventManager.dispatchEvent(mouseEvent);
            event.stopPropagation();
            event.preventDefault()
        }, false)
    }
    if (window.navigator.msPointerEnabled) {
        var _pointerEventsMap = {"MSPointerDown": selfPointer.handleTouchesBegin, "MSPointerMove": selfPointer.handleTouchesMove, "MSPointerUp": selfPointer.handleTouchesEnd, "MSPointerCancel": selfPointer.handleTouchesCancel};
        for (var eventName in _pointerEventsMap)(function (_pointerEvent, _touchEvent) {
            cc._addEventListener(element, _pointerEvent,
                function (event) {
                    var pos = selfPointer.getHTMLElementPosition(element);
                    pos.left -= document.documentElement.scrollLeft;
                    pos.top -= document.documentElement.scrollTop;
                    _touchEvent.call(selfPointer, [selfPointer.getTouchByXY(event.clientX, event.clientY, pos)]);
                    event.stopPropagation()
                }, false)
        })(eventName, _pointerEventsMap[eventName])
    }
    if (supportTouches) {
        cc._addEventListener(element, "touchstart", function (event) {
            if (!event.changedTouches)return;
            var pos = selfPointer.getHTMLElementPosition(element);
            pos.left -= document.body.scrollLeft;
            pos.top -= document.body.scrollTop;
            selfPointer.handleTouchesBegin(selfPointer.getTouchesByEvent(event, pos));
            event.stopPropagation();
            event.preventDefault();
            element.focus()
        }, false);
        cc._addEventListener(element, "touchmove", function (event) {
                if (!event.changedTouches)return;
                var pos = selfPointer.getHTMLElementPosition(element);
                pos.left -= document.body.scrollLeft;
                pos.top -= document.body.scrollTop;
                selfPointer.handleTouchesMove(selfPointer.getTouchesByEvent(event, pos));
                event.stopPropagation();
                event.preventDefault()
            },
            false);
        cc._addEventListener(element, "touchend", function (event) {
            if (!event.changedTouches)return;
            var pos = selfPointer.getHTMLElementPosition(element);
            pos.left -= document.body.scrollLeft;
            pos.top -= document.body.scrollTop;
            selfPointer.handleTouchesEnd(selfPointer.getTouchesByEvent(event, pos));
            event.stopPropagation();
            event.preventDefault()
        }, false);
        cc._addEventListener(element, "touchcancel", function (event) {
            if (!event.changedTouches)return;
            var pos = selfPointer.getHTMLElementPosition(element);
            pos.left -= document.body.scrollLeft;
            pos.top -= document.body.scrollTop;
            locView.handleTouchesCancel(selfPointer.getTouchesByEvent(event, pos));
            event.stopPropagation();
            event.preventDefault()
        }, false)
    }
    this._registerKeyboardEvent();
    this._registerAccelerometerEvent();
    this._isRegisterEvent = true
}, _registerKeyboardEvent: function () {
}, _registerAccelerometerEvent: function () {
}, update: function (dt) {
    if (this._accelCurTime > this._accelInterval) {
        this._accelCurTime -= this._accelInterval;
        cc.eventManager.dispatchEvent(new cc.EventAcceleration(this._acceleration))
    }
    this._accelCurTime +=
        dt
}};
cc.AffineTransform = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty
};
cc.affineTransformMake = function (a, b, c, d, tx, ty) {
    return{a: a, b: b, c: c, d: d, tx: tx, ty: ty}
};
cc.pointApplyAffineTransform = function (point, t) {
    return{x: t.a * point.x + t.c * point.y + t.tx, y: t.b * point.x + t.d * point.y + t.ty}
};
cc._pointApplyAffineTransform = function (x, y, t) {
    return{x: t.a * x + t.c * y + t.tx, y: t.b * x + t.d * y + t.ty}
};
cc.sizeApplyAffineTransform = function (size, t) {
    return{width: t.a * size.width + t.c * size.height, height: t.b * size.width + t.d * size.height}
};
cc.affineTransformMakeIdentity = function () {
    return{a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}
};
cc.affineTransformIdentity = function () {
    return{a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}
};
cc.rectApplyAffineTransform = function (rect, anAffineTransform) {
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);
    var topLeft = cc._pointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc._pointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc._pointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc._pointApplyAffineTransform(right, bottom, anAffineTransform);
    var minX = Math.min(topLeft.x,
        topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    return cc.rect(minX, minY, maxX - minX, maxY - minY)
};
cc._rectApplyAffineTransformIn = function (rect, anAffineTransform) {
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);
    var topLeft = cc._pointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc._pointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc._pointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc._pointApplyAffineTransform(right, bottom, anAffineTransform);
    var minX = Math.min(topLeft.x,
        topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    rect.x = minX;
    rect.y = minY;
    rect.width = maxX - minX;
    rect.height = maxY - minY;
    return rect
};
cc.affineTransformTranslate = function (t, tx, ty) {
    return{a: t.a, b: t.b, c: t.c, d: t.d, tx: t.tx + t.a * tx + t.c * ty, ty: t.ty + t.b * tx + t.d * ty}
};
cc.affineTransformScale = function (t, sx, sy) {
    return{a: t.a * sx, b: t.b * sx, c: t.c * sy, d: t.d * sy, tx: t.tx, ty: t.ty}
};
cc.affineTransformRotate = function (aTransform, anAngle) {
    var fSin = Math.sin(anAngle);
    var fCos = Math.cos(anAngle);
    return{a: aTransform.a * fCos + aTransform.c * fSin, b: aTransform.b * fCos + aTransform.d * fSin, c: aTransform.c * fCos - aTransform.a * fSin, d: aTransform.d * fCos - aTransform.b * fSin, tx: aTransform.tx, ty: aTransform.ty}
};
cc.affineTransformConcat = function (t1, t2) {
    return{a: t1.a * t2.a + t1.b * t2.c, b: t1.a * t2.b + t1.b * t2.d, c: t1.c * t2.a + t1.d * t2.c, d: t1.c * t2.b + t1.d * t2.d, tx: t1.tx * t2.a + t1.ty * t2.c + t2.tx, ty: t1.tx * t2.b + t1.ty * t2.d + t2.ty}
};
cc.affineTransformEqualToTransform = function (t1, t2) {
    return t1.a === t2.a && t1.b === t2.b && t1.c === t2.c && t1.d === t2.d && t1.tx === t2.tx && t1.ty === t2.ty
};
cc.affineTransformInvert = function (t) {
    var determinant = 1 / (t.a * t.d - t.b * t.c);
    return{a: determinant * t.d, b: -determinant * t.b, c: -determinant * t.c, d: determinant * t.a, tx: determinant * (t.c * t.ty - t.d * t.tx), ty: determinant * (t.b * t.tx - t.a * t.ty)}
};
cc.POINT_EPSILON = parseFloat("1.192092896e-07F");
cc.pNeg = function (point) {
    return cc.p(-point.x, -point.y)
};
cc.pAdd = function (v1, v2) {
    return cc.p(v1.x + v2.x, v1.y + v2.y)
};
cc.pSub = function (v1, v2) {
    return cc.p(v1.x - v2.x, v1.y - v2.y)
};
cc.pMult = function (point, floatVar) {
    return cc.p(point.x * floatVar, point.y * floatVar)
};
cc.pMidpoint = function (v1, v2) {
    return cc.pMult(cc.pAdd(v1, v2), 0.5)
};
cc.pDot = function (v1, v2) {
    return v1.x * v2.x + v1.y * v2.y
};
cc.pCross = function (v1, v2) {
    return v1.x * v2.y - v1.y * v2.x
};
cc.pPerp = function (point) {
    return cc.p(-point.y, point.x)
};
cc.pRPerp = function (point) {
    return cc.p(point.y, -point.x)
};
cc.pProject = function (v1, v2) {
    return cc.pMult(v2, cc.pDot(v1, v2) / cc.pDot(v2, v2))
};
cc.pRotate = function (v1, v2) {
    return cc.p(v1.x * v2.x - v1.y * v2.y, v1.x * v2.y + v1.y * v2.x)
};
cc.pUnrotate = function (v1, v2) {
    return cc.p(v1.x * v2.x + v1.y * v2.y, v1.y * v2.x - v1.x * v2.y)
};
cc.pLengthSQ = function (v) {
    return cc.pDot(v, v)
};
cc.pDistanceSQ = function (point1, point2) {
    return cc.pLengthSQ(cc.pSub(point1, point2))
};
cc.pLength = function (v) {
    return Math.sqrt(cc.pLengthSQ(v))
};
cc.pDistance = function (v1, v2) {
    return cc.pLength(cc.pSub(v1, v2))
};
cc.pNormalize = function (v) {
    return cc.pMult(v, 1 / cc.pLength(v))
};
cc.pForAngle = function (a) {
    return cc.p(Math.cos(a), Math.sin(a))
};
cc.pToAngle = function (v) {
    return Math.atan2(v.y, v.x)
};
cc.clampf = function (value, min_inclusive, max_inclusive) {
    if (min_inclusive > max_inclusive) {
        var temp = min_inclusive;
        min_inclusive = max_inclusive;
        max_inclusive = temp
    }
    return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive
};
cc.pClamp = function (p, min_inclusive, max_inclusive) {
    return cc.p(cc.clampf(p.x, min_inclusive.x, max_inclusive.x), cc.clampf(p.y, min_inclusive.y, max_inclusive.y))
};
cc.pFromSize = function (s) {
    return cc.p(s.width, s.height)
};
cc.pCompOp = function (p, opFunc) {
    return cc.p(opFunc(p.x), opFunc(p.y))
};
cc.pLerp = function (a, b, alpha) {
    return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha))
};
cc.pFuzzyEqual = function (a, b, variance) {
    if (a.x - variance <= b.x && b.x <= a.x + variance)if (a.y - variance <= b.y && b.y <= a.y + variance)return true;
    return false
};
cc.pCompMult = function (a, b) {
    return cc.p(a.x * b.x, a.y * b.y)
};
cc.pAngleSigned = function (a, b) {
    var a2 = cc.pNormalize(a);
    var b2 = cc.pNormalize(b);
    var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
    if (Math.abs(angle) < cc.POINT_EPSILON)return 0;
    return angle
};
cc.pAngle = function (a, b) {
    var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    if (Math.abs(angle) < cc.POINT_EPSILON)return 0;
    return angle
};
cc.pRotateByAngle = function (v, pivot, angle) {
    var r = cc.pSub(v, pivot);
    var cosa = Math.cos(angle), sina = Math.sin(angle);
    var t = r.x;
    r.x = t * cosa - r.y * sina + pivot.x;
    r.y = t * sina + r.y * cosa + pivot.y;
    return r
};
cc.pLineIntersect = function (A, B, C, D, retP) {
    if (A.x == B.x && A.y == B.y || C.x == D.x && C.y == D.y)return false;
    var BAx = B.x - A.x;
    var BAy = B.y - A.y;
    var DCx = D.x - C.x;
    var DCy = D.y - C.y;
    var ACx = A.x - C.x;
    var ACy = A.y - C.y;
    var denom = DCy * BAx - DCx * BAy;
    retP.x = DCx * ACy - DCy * ACx;
    retP.y = BAx * ACy - BAy * ACx;
    if (denom == 0) {
        if (retP.x == 0 || retP.y == 0)return true;
        return false
    }
    retP.x = retP.x / denom;
    retP.y = retP.y / denom;
    return true
};
cc.pSegmentIntersect = function (A, B, C, D) {
    var retP = cc.p(0, 0);
    if (cc.pLineIntersect(A, B, C, D, retP))if (retP.x >= 0 && retP.x <= 1 && retP.y >= 0 && retP.y <= 1)return true;
    return false
};
cc.pIntersectPoint = function (A, B, C, D) {
    var retP = cc.p(0, 0);
    if (cc.pLineIntersect(A, B, C, D, retP)) {
        var P = cc.p(0, 0);
        P.x = A.x + retP.x * (B.x - A.x);
        P.y = A.y + retP.x * (B.y - A.y);
        return P
    }
    return cc.p(0, 0)
};
cc.pSameAs = function (A, B) {
    if (A != null && B != null)return A.x == B.x && A.y == B.y;
    return false
};
cc.pZeroIn = function (v) {
    v.x = 0;
    v.y = 0
};
cc.pIn = function (v1, v2) {
    v1.x = v2.x;
    v1.y = v2.y
};
cc.pMultIn = function (point, floatVar) {
    point.x *= floatVar;
    point.y *= floatVar
};
cc.pSubIn = function (v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y
};
cc.pAddIn = function (v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y
};
cc.pNormalizeIn = function (v) {
    cc.pMultIn(v, 1 / Math.sqrt(v.x * v.x + v.y * v.y))
};
cc.Touch = cc.Class.extend({_point: null, _prevPoint: null, _id: 0, _startPointCaptured: false, _startPoint: null, ctor: function (x, y, id) {
    this._point = cc.p(x || 0, y || 0);
    this._id = id || 0
}, getLocation: function () {
    return{x: this._point.x, y: this._point.y}
}, getLocationX: function () {
    return this._point.x
}, getLocationY: function () {
    return this._point.y
}, getPreviousLocation: function () {
    return{x: this._prevPoint.x, y: this._prevPoint.y}
}, getStartLocation: function () {
    return{x: this._startPoint.x, y: this._startPoint.y}
}, getDelta: function () {
    return cc.pSub(this._point,
        this._prevPoint)
}, getLocationInView: function () {
    return{x: this._point.x, y: this._point.y}
}, getPreviousLocationInView: function () {
    return{x: this._prevPoint.x, y: this._prevPoint.y}
}, getStartLocationInView: function () {
    return{x: this._startPoint.x, y: this._startPoint.y}
}, getID: function () {
    return this._id
}, getId: function () {
    return this._id
}, setTouchInfo: function (id, x, y) {
    this._prevPoint = this._point;
    this._point = cc.p(x || 0, y || 0);
    this._id = id;
    if (!this._startPointCaptured) {
        this._startPoint = cc.p(this._point);
        this._startPointCaptured =
            true
    }
}, _setPoint: function (x, y) {
    if (y === undefined) {
        this._point.x = x.x;
        this._point.y = x.y
    } else {
        this._point.x = x;
        this._point.y = y
    }
}, _setPrevPoint: function (x, y) {
    if (y === undefined)this._prevPoint = cc.p(x.x, x.y); else this._prevPoint = cc.p(x || 0, y || 0)
}});
cc.Event = cc.Class.extend({_type: 0, _isStopped: false, _currentTarget: null, _setCurrentTarget: function (target) {
    this._currentTarget = target
}, ctor: function (type) {
    this._type = type
}, getType: function () {
    return this._type
}, stopPropagation: function () {
    this._isStopped = true
}, isStopped: function () {
    return this._isStopped
}, getCurrentTarget: function () {
    return this._currentTarget
}});
cc.Event.TOUCH = 0;
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.CUSTOM = 4;
cc.EventCustom = cc.Event.extend({_eventName: null, _userData: null, ctor: function (eventName) {
    cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM);
    this._eventName = eventName
}, setUserData: function (data) {
    this._userData = data
}, getUserData: function () {
    return this._userData
}, getEventName: function () {
    return this._eventName
}});
cc.EventMouse = cc.Event.extend({_eventType: 0, _button: 0, _x: 0, _y: 0, _prevX: 0, _prevY: 0, _scrollX: 0, _scrollY: 0, ctor: function (eventType) {
    cc.Event.prototype.ctor.call(this, cc.Event.MOUSE);
    this._eventType = eventType
}, setScrollData: function (scrollX, scrollY) {
    this._scrollX = scrollX;
    this._scrollY = scrollY
}, getScrollX: function () {
    return this._scrollX
}, getScrollY: function () {
    return this._scrollY
}, setLocation: function (x, y) {
    this._x = x;
    this._y = y
}, getLocation: function () {
    return{x: this._x, y: this._y}
}, getLocationInView: function () {
    return{x: this._x,
        y: cc.view._designResolutionSize.height - this._y}
}, _setPrevCursor: function (x, y) {
    this._prevX = x;
    this._prevY = y
}, getDelta: function () {
    return{x: this._x - this._prevX, y: this._y - this._prevY}
}, getDeltaX: function () {
    return this._x - this._prevX
}, getDeltaY: function () {
    return this._y - this._prevY
}, setButton: function (button) {
    this._button = button
}, getButton: function () {
    return this._button
}, getLocationX: function () {
    return this._x
}, getLocationY: function () {
    return this._y
}});
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch = cc.Event.extend({_eventCode: 0, _touches: null, ctor: function (arr) {
    cc.Event.prototype.ctor.call(this, cc.Event.TOUCH);
    this._touches = arr || []
}, getEventCode: function () {
    return this._eventCode
}, getTouches: function () {
    return this._touches
}, _setEventCode: function (eventCode) {
    this._eventCode = eventCode
}, _setTouches: function (touches) {
    this._touches = touches
}});
cc.EventTouch.MAX_TOUCHES = 5;
cc.EventTouch.EventCode = {BEGAN: 0, MOVED: 1, ENDED: 2, CANCELLED: 3};
cc.EventListener = cc.Class.extend({_onEvent: null, _type: 0, _listenerID: null, _registered: false, _fixedPriority: 0, _node: null, _paused: false, _isEnabled: true, ctor: function (type, listenerID, callback) {
    this._onEvent = callback;
    this._type = type || 0;
    this._listenerID = listenerID || ""
}, _setPaused: function (paused) {
    this._paused = paused
}, _isPaused: function () {
    return this._paused
}, _setRegistered: function (registered) {
    this._registered = registered
}, _isRegistered: function () {
    return this._registered
}, _getType: function () {
    return this._type
},
    _getListenerID: function () {
        return this._listenerID
    }, _setFixedPriority: function (fixedPriority) {
        this._fixedPriority = fixedPriority
    }, _getFixedPriority: function () {
        return this._fixedPriority
    }, _setSceneGraphPriority: function (node) {
        this._node = node
    }, _getSceneGraphPriority: function () {
        return this._node
    }, checkAvailable: function () {
        return this._onEvent != null
    }, clone: function () {
        return null
    }, setEnabled: function (enabled) {
        this._isEnabled = enabled
    }, isEnabled: function () {
        return this._isEnabled
    }, retain: function () {
    }, release: function () {
    }});
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 5;
cc.EventListener.CUSTOM = 6;
cc._EventListenerCustom = cc.EventListener.extend({_onCustomEvent: null, ctor: function (listenerId, callback) {
    this._onCustomEvent = callback;
    var selfPointer = this;
    var listener = function (event) {
        if (selfPointer._onCustomEvent != null)selfPointer._onCustomEvent(event)
    };
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, listenerId, listener)
}, checkAvailable: function () {
    return cc.EventListener.prototype.checkAvailable.call(this) && this._onCustomEvent != null
}, clone: function () {
    return new cc._EventListenerCustom(this._listenerID,
        this._onCustomEvent)
}});
cc._EventListenerCustom.create = function (eventName, callback) {
    return new cc._EventListenerCustom(eventName, callback)
};
cc._EventListenerMouse = cc.EventListener.extend({onMouseDown: null, onMouseUp: null, onMouseMove: null, onMouseScroll: null, ctor: function () {
    var selfPointer = this;
    var listener = function (event) {
        var eventType = cc.EventMouse;
        switch (event._eventType) {
            case eventType.DOWN:
                if (selfPointer.onMouseDown)selfPointer.onMouseDown(event);
                break;
            case eventType.UP:
                if (selfPointer.onMouseUp)selfPointer.onMouseUp(event);
                break;
            case eventType.MOVE:
                if (selfPointer.onMouseMove)selfPointer.onMouseMove(event);
                break;
            case eventType.SCROLL:
                if (selfPointer.onMouseScroll)selfPointer.onMouseScroll(event);
                break;
            default:
                break
        }
    };
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.MOUSE, cc._EventListenerMouse.LISTENER_ID, listener)
}, clone: function () {
    var eventListener = new cc._EventListenerMouse;
    eventListener.onMouseDown = this.onMouseDown;
    eventListener.onMouseUp = this.onMouseUp;
    eventListener.onMouseMove = this.onMouseMove;
    eventListener.onMouseScroll = this.onMouseScroll;
    return eventListener
}, checkAvailable: function () {
    return true
}});
cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
cc._EventListenerMouse.create = function () {
    return new cc._EventListenerMouse
};
cc._EventListenerTouchOneByOne = cc.EventListener.extend({_claimedTouches: null, swallowTouches: false, onTouchBegan: null, onTouchMoved: null, onTouchEnded: null, onTouchCancelled: null, ctor: function () {
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null);
    this._claimedTouches = []
}, setSwallowTouches: function (needSwallow) {
    this.swallowTouches = needSwallow
}, clone: function () {
    var eventListener = new cc._EventListenerTouchOneByOne;
    eventListener.onTouchBegan =
        this.onTouchBegan;
    eventListener.onTouchMoved = this.onTouchMoved;
    eventListener.onTouchEnded = this.onTouchEnded;
    eventListener.onTouchCancelled = this.onTouchCancelled;
    eventListener.swallowTouches = this.swallowTouches;
    return eventListener
}, checkAvailable: function () {
    if (!this.onTouchBegan) {
        cc.log(cc._LogInfos._EventListenerTouchOneByOne_checkAvailable);
        return false
    }
    return true
}});
cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
cc._EventListenerTouchOneByOne.create = function () {
    return new cc._EventListenerTouchOneByOne
};
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({onTouchesBegan: null, onTouchesMoved: null, onTouchesEnded: null, onTouchesCancelled: null, ctor: function () {
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, cc._EventListenerTouchAllAtOnce.LISTENER_ID, null)
}, clone: function () {
    var eventListener = new cc._EventListenerTouchAllAtOnce;
    eventListener.onTouchesBegan = this.onTouchesBegan;
    eventListener.onTouchesMoved = this.onTouchesMoved;
    eventListener.onTouchesEnded = this.onTouchesEnded;
    eventListener.onTouchesCancelled = this.onTouchesCancelled;
    return eventListener
}, checkAvailable: function () {
    if (this.onTouchesBegan == null && this.onTouchesMoved == null && this.onTouchesEnded == null && this.onTouchesCancelled == null) {
        cc.log(cc._LogInfos._EventListenerTouchAllAtOnce_checkAvailable);
        return false
    }
    return true
}});
cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
cc._EventListenerTouchAllAtOnce.create = function () {
    return new cc._EventListenerTouchAllAtOnce
};
cc.EventListener.create = function (argObj) {
    cc.assert(argObj && argObj.event, cc._LogInfos.EventListener_create);
    var listenerType = argObj.event;
    delete argObj.event;
    var listener = null;
    if (listenerType === cc.EventListener.TOUCH_ONE_BY_ONE)listener = new cc._EventListenerTouchOneByOne; else if (listenerType === cc.EventListener.TOUCH_ALL_AT_ONCE)listener = new cc._EventListenerTouchAllAtOnce; else if (listenerType === cc.EventListener.MOUSE)listener = new cc._EventListenerMouse; else if (listenerType === cc.EventListener.CUSTOM) {
        listener =
            new cc._EventListenerCustom(argObj.eventName, argObj.callback);
        delete argObj.eventName;
        delete argObj.callback
    } else if (listenerType === cc.EventListener.KEYBOARD)listener = new cc._EventListenerKeyboard; else if (listenerType === cc.EventListener.ACCELERATION) {
        listener = new cc._EventListenerAcceleration(argObj.callback);
        delete argObj.callback
    }
    for (var key in argObj)listener[key] = argObj[key];
    return listener
};
cc.copyArray = function (arr) {
    var i, len = arr.length, arr_clone = new Array(len);
    for (i = 0; i < len; i += 1)arr_clone[i] = arr[i];
    return arr_clone
};
cc._EventListenerVector = cc.Class.extend({_fixedListeners: null, _sceneGraphListeners: null, gt0Index: 0, ctor: function () {
    this._fixedListeners = [];
    this._sceneGraphListeners = []
}, size: function () {
    return this._fixedListeners.length + this._sceneGraphListeners.length
}, empty: function () {
    return this._fixedListeners.length === 0 && this._sceneGraphListeners.length === 0
}, push: function (listener) {
    if (listener._getFixedPriority() == 0)this._sceneGraphListeners.push(listener); else this._fixedListeners.push(listener)
}, clearSceneGraphListeners: function () {
    this._sceneGraphListeners.length =
        0
}, clearFixedListeners: function () {
    this._fixedListeners.length = 0
}, clear: function () {
    this._sceneGraphListeners.length = 0;
    this._fixedListeners.length = 0
}, getFixedPriorityListeners: function () {
    return this._fixedListeners
}, getSceneGraphPriorityListeners: function () {
    return this._sceneGraphListeners
}});
cc.__getListenerID = function (event) {
    var eventType = cc.Event, getType = event.getType();
    if (getType === eventType.ACCELERATION)return cc._EventListenerAcceleration.LISTENER_ID;
    if (getType === eventType.CUSTOM)return event.getEventName();
    if (getType === eventType.KEYBOARD)return cc._EventListenerKeyboard.LISTENER_ID;
    if (getType === eventType.MOUSE)return cc._EventListenerMouse.LISTENER_ID;
    if (getType === eventType.TOUCH)cc.log(cc._LogInfos.__getListenerID);
    return""
};
cc.eventManager = {DIRTY_NONE: 0, DIRTY_FIXED_PRIORITY: 1 << 0, DIRTY_SCENE_GRAPH_PRIORITY: 1 << 1, DIRTY_ALL: 3, _listenersMap: {}, _priorityDirtyFlagMap: {}, _nodeListenersMap: {}, _nodePriorityMap: {}, _globalZOrderNodeMap: {}, _toAddedListeners: [], _dirtyNodes: [], _inDispatch: 0, _isEnabled: false, _nodePriorityIndex: 0, _internalCustomListenerIDs: [cc.game.EVENT_HIDE, cc.game.EVENT_SHOW], _setDirtyForNode: function (node) {
    if (this._nodeListenersMap[node.__instanceId] != null)this._dirtyNodes.push(node);
    var _children = node.getChildren();
    for (var i = 0, len = _children.length; i < len; i++)this._setDirtyForNode(_children[i])
}, pauseTarget: function (node, recursive) {
    var listeners = this._nodeListenersMap[node.__instanceId], i, len;
    if (listeners)for (i = 0, len = listeners.length; i < len; i++)listeners[i]._setPaused(true);
    if (recursive === true) {
        var locChildren = node.getChildren();
        for (i = 0, len = locChildren.length; i < len; i++)this.pauseTarget(locChildren[i], true)
    }
}, resumeTarget: function (node, recursive) {
    var listeners = this._nodeListenersMap[node.__instanceId], i, len;
    if (listeners)for (i =
                           0, len = listeners.length; i < len; i++)listeners[i]._setPaused(false);
    this._setDirtyForNode(node);
    if (recursive === true) {
        var locChildren = node.getChildren();
        for (i = 0, len = locChildren.length; i < len; i++)this.resumeTarget(locChildren[i], true)
    }
}, _addListener: function (listener) {
    if (this._inDispatch === 0)this._forceAddEventListener(listener); else this._toAddedListeners.push(listener)
}, _forceAddEventListener: function (listener) {
    var listenerID = listener._getListenerID();
    var listeners = this._listenersMap[listenerID];
    if (!listeners) {
        listeners =
            new cc._EventListenerVector;
        this._listenersMap[listenerID] = listeners
    }
    listeners.push(listener);
    if (listener._getFixedPriority() == 0) {
        this._setDirty(listenerID, this.DIRTY_SCENE_GRAPH_PRIORITY);
        var node = listener._getSceneGraphPriority();
        if (node == null)cc.log(cc._LogInfos.eventManager__forceAddEventListener);
        this._associateNodeAndEventListener(node, listener);
        if (node.isRunning())this.resumeTarget(node)
    } else this._setDirty(listenerID, this.DIRTY_FIXED_PRIORITY)
}, _getListeners: function (listenerID) {
    return this._listenersMap[listenerID]
}, _updateDirtyFlagForSceneGraph: function () {
    if (this._dirtyNodes.length == 0)return;
    var locDirtyNodes = this._dirtyNodes, selListeners, selListener, locNodeListenersMap = this._nodeListenersMap;
    for (var i = 0, len = locDirtyNodes.length; i < len; i++) {
        selListeners = locNodeListenersMap[locDirtyNodes[i].__instanceId];
        if (selListeners)for (var j = 0, listenersLen = selListeners.length; j < listenersLen; j++) {
            selListener = selListeners[j];
            if (selListener)this._setDirty(selListener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY)
        }
    }
    this._dirtyNodes.length =
        0
}, _removeAllListenersInVector: function (listenerVector) {
    if (!listenerVector)return;
    var selListener;
    for (var i = 0; i < listenerVector.length;) {
        selListener = listenerVector[i];
        selListener._setRegistered(false);
        if (selListener._getSceneGraphPriority() != null) {
            this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
            selListener._setSceneGraphPriority(null)
        }
        if (this._inDispatch === 0)cc.arrayRemoveObject(listenerVector, selListener); else++i
    }
}, _removeListenersForListenerID: function (listenerID) {
    var listeners =
        this._listenersMap[listenerID], i;
    if (listeners) {
        var fixedPriorityListeners = listeners.getFixedPriorityListeners();
        var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        this._removeAllListenersInVector(sceneGraphPriorityListeners);
        this._removeAllListenersInVector(fixedPriorityListeners);
        delete this._priorityDirtyFlagMap[listenerID];
        if (!this._inDispatch) {
            listeners.clear();
            delete this._listenersMap[listenerID]
        }
    }
    var locToAddedListeners = this._toAddedListeners, listener;
    for (i = 0; i < locToAddedListeners.length;) {
        listener =
            locToAddedListeners[i];
        if (listener && listener._getListenerID() == listenerID)cc.arrayRemoveObject(locToAddedListeners, listener); else++i
    }
}, _sortEventListeners: function (listenerID) {
    var dirtyFlag = this.DIRTY_NONE, locFlagMap = this._priorityDirtyFlagMap;
    if (locFlagMap[listenerID])dirtyFlag = locFlagMap[listenerID];
    if (dirtyFlag != this.DIRTY_NONE) {
        locFlagMap[listenerID] = this.DIRTY_NONE;
        if (dirtyFlag & this.DIRTY_FIXED_PRIORITY)this._sortListenersOfFixedPriority(listenerID);
        if (dirtyFlag & this.DIRTY_SCENE_GRAPH_PRIORITY) {
            var rootNode =
                cc.director.getRunningScene();
            if (rootNode)this._sortListenersOfSceneGraphPriority(listenerID, rootNode); else locFlagMap[listenerID] = this.DIRTY_SCENE_GRAPH_PRIORITY
        }
    }
}, _sortListenersOfSceneGraphPriority: function (listenerID, rootNode) {
    var listeners = this._getListeners(listenerID);
    if (!listeners)return;
    var sceneGraphListener = listeners.getSceneGraphPriorityListeners();
    if (!sceneGraphListener || sceneGraphListener.length === 0)return;
    this._nodePriorityIndex = 0;
    this._nodePriorityMap = {};
    this._visitTarget(rootNode,
        true);
    listeners.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes)
}, _sortEventListenersOfSceneGraphPriorityDes: function (l1, l2) {
    var locNodePriorityMap = cc.eventManager._nodePriorityMap;
    return locNodePriorityMap[l2._getSceneGraphPriority().__instanceId] - locNodePriorityMap[l1._getSceneGraphPriority().__instanceId]
}, _sortListenersOfFixedPriority: function (listenerID) {
    var listeners = this._listenersMap[listenerID];
    if (!listeners)return;
    var fixedListeners = listeners.getFixedPriorityListeners();
    if (!fixedListeners || fixedListeners.length === 0)return;
    fixedListeners.sort(this._sortListenersOfFixedPriorityAsc);
    var index = 0;
    for (var len = fixedListeners.length; index < len;) {
        if (fixedListeners[index]._getFixedPriority() >= 0)break;
        ++index
    }
    listeners.gt0Index = index
}, _sortListenersOfFixedPriorityAsc: function (l1, l2) {
    return l1._getFixedPriority() - l2._getFixedPriority()
}, _onUpdateListeners: function (listenerID) {
    var listeners = this._listenersMap[listenerID];
    if (!listeners)return;
    var fixedPriorityListeners = listeners.getFixedPriorityListeners();
    var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
    var i, selListener;
    if (sceneGraphPriorityListeners)for (i = 0; i < sceneGraphPriorityListeners.length;) {
        selListener = sceneGraphPriorityListeners[i];
        if (!selListener._isRegistered())cc.arrayRemoveObject(sceneGraphPriorityListeners, selListener); else++i
    }
    if (fixedPriorityListeners)for (i = 0; i < fixedPriorityListeners.length;) {
        selListener = fixedPriorityListeners[i];
        if (!selListener._isRegistered())cc.arrayRemoveObject(fixedPriorityListeners, selListener);
        else++i
    }
    if (sceneGraphPriorityListeners && sceneGraphPriorityListeners.length === 0)listeners.clearSceneGraphListeners();
    if (fixedPriorityListeners && fixedPriorityListeners.length === 0)listeners.clearFixedListeners()
}, _updateListeners: function (event) {
    var locInDispatch = this._inDispatch;
    cc.assert(locInDispatch > 0, cc._LogInfos.EventManager__updateListeners);
    if (event.getType() == cc.Event.TOUCH) {
        this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID)
    } else this._onUpdateListeners(cc.__getListenerID(event));
    if (locInDispatch > 1)return;
    cc.assert(locInDispatch == 1, cc._LogInfos.EventManager__updateListeners_2);
    var locListenersMap = this._listenersMap, locPriorityDirtyFlagMap = this._priorityDirtyFlagMap;
    for (var selKey in locListenersMap)if (locListenersMap[selKey].empty()) {
        delete locPriorityDirtyFlagMap[selKey];
        delete locListenersMap[selKey]
    }
    var locToAddedListeners = this._toAddedListeners;
    if (locToAddedListeners.length !== 0) {
        for (var i = 0, len = locToAddedListeners.length; i < len; i++)this._forceAddEventListener(locToAddedListeners[i]);
        this._toAddedListeners.length = 0
    }
}, _onTouchEventCallback: function (listener, argsObj) {
    if (!listener._isRegistered)return false;
    var event = argsObj.event, selTouch = argsObj.selTouch;
    event._setCurrentTarget(listener._node);
    var isClaimed = false, removedIdx;
    var getCode = event.getEventCode(), eventCode = cc.EventTouch.EventCode;
    if (getCode == eventCode.BEGAN) {
        if (listener.onTouchBegan) {
            isClaimed = listener.onTouchBegan(selTouch, event);
            if (isClaimed && listener._registered)listener._claimedTouches.push(selTouch)
        }
    } else if (listener._claimedTouches.length >
        0 && (removedIdx = listener._claimedTouches.indexOf(selTouch)) != -1) {
        isClaimed = true;
        if (getCode === eventCode.MOVED && listener.onTouchMoved)listener.onTouchMoved(selTouch, event); else if (getCode === eventCode.ENDED) {
            if (listener.onTouchEnded)listener.onTouchEnded(selTouch, event);
            if (listener._registered)listener._claimedTouches.splice(removedIdx, 1)
        } else if (getCode === eventCode.CANCELLED) {
            if (listener.onTouchCancelled)listener.onTouchCancelled(selTouch, event);
            if (listener._registered)listener._claimedTouches.splice(removedIdx,
                1)
        }
    }
    if (event.isStopped()) {
        cc.eventManager._updateListeners(event);
        return true
    }
    if (isClaimed && listener._registered && listener.swallowTouches) {
        if (argsObj.needsMutableSet)argsObj.touches.splice(selTouch, 1);
        return true
    }
    return false
}, _dispatchTouchEvent: function (event) {
    this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
    this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
    var oneByOneListeners = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
    var allAtOnceListeners =
        this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
    if (null == oneByOneListeners && null == allAtOnceListeners)return;
    var originalTouches = event.getTouches(), mutableTouches = cc.copyArray(originalTouches);
    var oneByOneArgsObj = {event: event, needsMutableSet: oneByOneListeners && allAtOnceListeners, touches: mutableTouches, selTouch: null};
    if (oneByOneListeners)for (var i = 0; i < originalTouches.length; i++) {
        oneByOneArgsObj.selTouch = originalTouches[i];
        this._dispatchEventToListeners(oneByOneListeners, this._onTouchEventCallback,
            oneByOneArgsObj);
        if (event.isStopped())return
    }
    if (allAtOnceListeners && mutableTouches.length > 0) {
        this._dispatchEventToListeners(allAtOnceListeners, this._onTouchesEventCallback, {event: event, touches: mutableTouches});
        if (event.isStopped())return
    }
    this._updateListeners(event)
}, _onTouchesEventCallback: function (listener, callbackParams) {
    if (!listener._registered)return false;
    var eventCode = cc.EventTouch.EventCode, event = callbackParams.event, touches = callbackParams.touches, getCode = event.getEventCode();
    event._setCurrentTarget(listener._node);
    if (getCode == eventCode.BEGAN && listener.onTouchesBegan)listener.onTouchesBegan(touches, event); else if (getCode == eventCode.MOVED && listener.onTouchesMoved)listener.onTouchesMoved(touches, event); else if (getCode == eventCode.ENDED && listener.onTouchesEnded)listener.onTouchesEnded(touches, event); else if (getCode == eventCode.CANCELLED && listener.onTouchesCancelled)listener.onTouchesCancelled(touches, event);
    if (event.isStopped()) {
        cc.eventManager._updateListeners(event);
        return true
    }
    return false
}, _associateNodeAndEventListener: function (node, listener) {
    var listeners = this._nodeListenersMap[node.__instanceId];
    if (!listeners) {
        listeners = [];
        this._nodeListenersMap[node.__instanceId] = listeners
    }
    listeners.push(listener)
}, _dissociateNodeAndEventListener: function (node, listener) {
    var listeners = this._nodeListenersMap[node.__instanceId];
    if (listeners) {
        cc.arrayRemoveObject(listeners, listener);
        if (listeners.length === 0)delete this._nodeListenersMap[node.__instanceId]
    }
}, _dispatchEventToListeners: function (listeners, onEvent, eventOrArgs) {
    var shouldStopPropagation =
        false;
    var fixedPriorityListeners = listeners.getFixedPriorityListeners();
    var sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
    var i = 0, j, selListener;
    if (fixedPriorityListeners)if (fixedPriorityListeners.length !== 0)for (; i < listeners.gt0Index; ++i) {
        selListener = fixedPriorityListeners[i];
        if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
            shouldStopPropagation = true;
            break
        }
    }
    if (sceneGraphPriorityListeners && !shouldStopPropagation)for (j =
                                                                       0; j < sceneGraphPriorityListeners.length; j++) {
        selListener = sceneGraphPriorityListeners[j];
        if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
            shouldStopPropagation = true;
            break
        }
    }
    if (fixedPriorityListeners && !shouldStopPropagation)for (; i < fixedPriorityListeners.length; ++i) {
        selListener = fixedPriorityListeners[i];
        if (selListener.isEnabled() && !selListener._isPaused() && selListener._isRegistered() && onEvent(selListener, eventOrArgs)) {
            shouldStopPropagation =
                true;
            break
        }
    }
}, _setDirty: function (listenerID, flag) {
    var locDirtyFlagMap = this._priorityDirtyFlagMap;
    if (locDirtyFlagMap[listenerID] == null)locDirtyFlagMap[listenerID] = flag; else locDirtyFlagMap[listenerID] = flag | locDirtyFlagMap[listenerID]
}, _visitTarget: function (node, isRootNode) {
    var children = node.getChildren(), i = 0;
    var childrenCount = children.length, locGlobalZOrderNodeMap = this._globalZOrderNodeMap, locNodeListenersMap = this._nodeListenersMap;
    if (childrenCount > 0) {
        var child;
        for (; i < childrenCount; i++) {
            child = children[i];
            if (child && child.getLocalZOrder() < 0)this._visitTarget(child, false); else break
        }
        if (locNodeListenersMap[node.__instanceId] != null) {
            if (!locGlobalZOrderNodeMap[node.getGlobalZOrder()])locGlobalZOrderNodeMap[node.getGlobalZOrder()] = [];
            locGlobalZOrderNodeMap[node.getGlobalZOrder()].push(node.__instanceId)
        }
        for (; i < childrenCount; i++) {
            child = children[i];
            if (child)this._visitTarget(child, false)
        }
    } else if (locNodeListenersMap[node.__instanceId] != null) {
        if (!locGlobalZOrderNodeMap[node.getGlobalZOrder()])locGlobalZOrderNodeMap[node.getGlobalZOrder()] =
            [];
        locGlobalZOrderNodeMap[node.getGlobalZOrder()].push(node.__instanceId)
    }
    if (isRootNode) {
        var globalZOrders = [];
        for (var selKey in locGlobalZOrderNodeMap)globalZOrders.push(selKey);
        globalZOrders.sort(this._sortNumberAsc);
        var zOrdersLen = globalZOrders.length, selZOrders, j, locNodePriorityMap = this._nodePriorityMap;
        for (i = 0; i < zOrdersLen; i++) {
            selZOrders = locGlobalZOrderNodeMap[globalZOrders[i]];
            for (j = 0; j < selZOrders.length; j++)locNodePriorityMap[selZOrders[j]] = ++this._nodePriorityIndex
        }
        this._globalZOrderNodeMap =
        {}
    }
}, _sortNumberAsc: function (a, b) {
    return a - b
}, addListener: function (listener, nodeOrPriority) {
    cc.assert(listener && nodeOrPriority, cc._LogInfos.eventManager_addListener_2);
    if (!(listener instanceof cc.EventListener)) {
        cc.assert(typeof nodeOrPriority !== "number", cc._LogInfos.eventManager_addListener_3);
        listener = cc.EventListener.create(listener)
    } else if (listener._isRegistered()) {
        cc.log(cc._LogInfos.eventManager_addListener_4);
        return
    }
    if (!listener.checkAvailable())return;
    if (typeof nodeOrPriority == "number") {
        if (nodeOrPriority ==
            0) {
            cc.log(cc._LogInfos.eventManager_addListener);
            return
        }
        listener._setSceneGraphPriority(null);
        listener._setFixedPriority(nodeOrPriority);
        listener._setRegistered(true);
        listener._setPaused(false);
        this._addListener(listener)
    } else {
        listener._setSceneGraphPriority(nodeOrPriority);
        listener._setFixedPriority(0);
        listener._setRegistered(true);
        this._addListener(listener)
    }
}, addCustomListener: function (eventName, callback) {
    var listener = cc._EventListenerCustom.create(eventName, callback);
    this.addListener(listener,
        1);
    return listener
}, removeListener: function (listener) {
    if (listener == null)return;
    var isFound, locListener = this._listenersMap;
    for (var selKey in locListener) {
        var listeners = locListener[selKey];
        var fixedPriorityListeners = listeners.getFixedPriorityListeners(), sceneGraphPriorityListeners = listeners.getSceneGraphPriorityListeners();
        isFound = this._removeListenerInVector(sceneGraphPriorityListeners, listener);
        if (isFound)this._setDirty(listener._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY); else {
            isFound = this._removeListenerInVector(fixedPriorityListeners,
                listener);
            if (isFound)this._setDirty(listener._getListenerID(), this.DIRTY_FIXED_PRIORITY)
        }
        if (listeners.empty()) {
            delete this._priorityDirtyFlagMap[listener._getListenerID()];
            delete locListener[selKey]
        }
        if (isFound)break
    }
    if (!isFound) {
        var locToAddedListeners = this._toAddedListeners;
        for (var i = 0, len = locToAddedListeners.length; i < len; i++) {
            var selListener = locToAddedListeners[i];
            if (selListener == listener) {
                cc.arrayRemoveObject(locToAddedListeners, selListener);
                break
            }
        }
    }
}, _removeListenerInVector: function (listeners, listener) {
    if (listeners == null)return false;
    for (var i = 0, len = listeners.length; i < len; i++) {
        var selListener = listeners[i];
        if (selListener == listener) {
            selListener._setRegistered(false);
            if (selListener._getSceneGraphPriority() != null) {
                this._dissociateNodeAndEventListener(selListener._getSceneGraphPriority(), selListener);
                selListener._setSceneGraphPriority(null)
            }
            if (this._inDispatch == 0)cc.arrayRemoveObject(listeners, selListener);
            return true
        }
    }
    return false
}, removeListeners: function (listenerType, recursive) {
    var _t = this;
    if (listenerType instanceof cc.Node) {
        delete _t._nodePriorityMap[listenerType.__instanceId];
        cc.arrayRemoveObject(_t._dirtyNodes, listenerType);
        var listeners = _t._nodeListenersMap[listenerType.__instanceId];
        if (!listeners)return;
        var listenersCopy = cc.copyArray(listeners), i;
        for (i = 0; i < listenersCopy.length; i++)_t.removeListener(listenersCopy[i]);
        listenersCopy.length = 0;
        var locToAddedListeners = _t._toAddedListeners;
        for (i = 0; i < locToAddedListeners.length;) {
            var listener = locToAddedListeners[i];
            if (listener._getSceneGraphPriority() ==
                listenerType) {
                listener._setSceneGraphPriority(null);
                listener._setRegistered(false);
                locToAddedListeners.splice(i, 1)
            } else++i
        }
        if (recursive === true) {
            var locChildren = listenerType.getChildren(), len;
            for (i = 0, len = locChildren.length; i < len; i++)_t.removeListeners(locChildren[i], true)
        }
    } else if (listenerType == cc.EventListener.TOUCH_ONE_BY_ONE)_t._removeListenersForListenerID(cc._EventListenerTouchOneByOne.LISTENER_ID); else if (listenerType == cc.EventListener.TOUCH_ALL_AT_ONCE)_t._removeListenersForListenerID(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
    else if (listenerType == cc.EventListener.MOUSE)_t._removeListenersForListenerID(cc._EventListenerMouse.LISTENER_ID); else if (listenerType == cc.EventListener.ACCELERATION)_t._removeListenersForListenerID(cc._EventListenerAcceleration.LISTENER_ID); else if (listenerType == cc.EventListener.KEYBOARD)_t._removeListenersForListenerID(cc._EventListenerKeyboard.LISTENER_ID); else cc.log(cc._LogInfos.eventManager_removeListeners)
}, removeCustomListeners: function (customEventName) {
    this._removeListenersForListenerID(customEventName)
},
removeAllListeners: function () {
    var locListeners = this._listenersMap, locInternalCustomEventIDs = this._internalCustomListenerIDs;
    for (var selKey in locListeners)if (locInternalCustomEventIDs.indexOf(selKey) === -1)this._removeListenersForListenerID(selKey)
}, setPriority: function (listener, fixedPriority) {
    if (listener == null)return;
    var locListeners = this._listenersMap;
    for (var selKey in locListeners) {
        var selListeners = locListeners[selKey];
        var fixedPriorityListeners = selListeners.getFixedPriorityListeners();
        if (fixedPriorityListeners) {
            var found =
                fixedPriorityListeners.indexOf(listener);
            if (found != -1) {
                if (listener._getSceneGraphPriority() != null)cc.log(cc._LogInfos.eventManager_setPriority);
                if (listener._getFixedPriority() !== fixedPriority) {
                    listener._setFixedPriority(fixedPriority);
                    this._setDirty(listener._getListenerID(), this.DIRTY_FIXED_PRIORITY)
                }
                return
            }
        }
    }
}, setEnabled: function (enabled) {
    this._isEnabled = enabled
}, isEnabled: function () {
    return this._isEnabled
}, dispatchEvent: function (event) {
    if (!this._isEnabled)return;
    this._updateDirtyFlagForSceneGraph();
    this._inDispatch++;
    if (!event || !event.getType)throw"event is undefined";
    if (event.getType() == cc.Event.TOUCH) {
        this._dispatchTouchEvent(event);
        this._inDispatch--;
        return
    }
    var listenerID = cc.__getListenerID(event);
    this._sortEventListeners(listenerID);
    var selListeners = this._listenersMap[listenerID];
    if (selListeners != null)this._dispatchEventToListeners(selListeners, this._onListenerCallback, event);
    this._updateListeners(event);
    this._inDispatch--
}, _onListenerCallback: function (listener, event) {
    event._setCurrentTarget(listener._getSceneGraphPriority());
    listener._onEvent(event);
    return event.isStopped()
}, dispatchCustomEvent: function (eventName, optionalUserData) {
    var ev = new cc.EventCustom(eventName);
    ev.setUserData(optionalUserData);
    this.dispatchEvent(ev)
}};
cc._tmp.PrototypeCCNode = function () {
    var _p = cc.Node.prototype;
    cc.defineGetterSetter(_p, "x", _p.getPositionX, _p.setPositionX);
    cc.defineGetterSetter(_p, "y", _p.getPositionY, _p.setPositionY);
    _p.width;
    cc.defineGetterSetter(_p, "width", _p._getWidth, _p._setWidth);
    _p.height;
    cc.defineGetterSetter(_p, "height", _p._getHeight, _p._setHeight);
    _p.anchorX;
    cc.defineGetterSetter(_p, "anchorX", _p._getAnchorX, _p._setAnchorX);
    _p.anchorY;
    cc.defineGetterSetter(_p, "anchorY", _p._getAnchorY, _p._setAnchorY);
    _p.skewX;
    cc.defineGetterSetter(_p,
        "skewX", _p.getSkewX, _p.setSkewX);
    _p.skewY;
    cc.defineGetterSetter(_p, "skewY", _p.getSkewY, _p.setSkewY);
    _p.zIndex;
    cc.defineGetterSetter(_p, "zIndex", _p.getLocalZOrder, _p.setLocalZOrder);
    _p.vertexZ;
    cc.defineGetterSetter(_p, "vertexZ", _p.getVertexZ, _p.setVertexZ);
    _p.rotation;
    cc.defineGetterSetter(_p, "rotation", _p.getRotation, _p.setRotation);
    _p.rotationX;
    cc.defineGetterSetter(_p, "rotationX", _p.getRotationX, _p.setRotationX);
    _p.rotationY;
    cc.defineGetterSetter(_p, "rotationY", _p.getRotationY, _p.setRotationY);
    _p.scale;
    cc.defineGetterSetter(_p, "scale", _p.getScale, _p.setScale);
    _p.scaleX;
    cc.defineGetterSetter(_p, "scaleX", _p.getScaleX, _p.setScaleX);
    _p.scaleY;
    cc.defineGetterSetter(_p, "scaleY", _p.getScaleY, _p.setScaleY);
    _p.children;
    cc.defineGetterSetter(_p, "children", _p.getChildren);
    _p.childrenCount;
    cc.defineGetterSetter(_p, "childrenCount", _p.getChildrenCount);
    _p.parent;
    cc.defineGetterSetter(_p, "parent", _p.getParent, _p.setParent);
    _p.visible;
    cc.defineGetterSetter(_p, "visible", _p.isVisible, _p.setVisible);
    _p.running;
    cc.defineGetterSetter(_p, "running", _p.isRunning);
    _p.ignoreAnchor;
    cc.defineGetterSetter(_p, "ignoreAnchor", _p.isIgnoreAnchorPointForPosition, _p.ignoreAnchorPointForPosition);
    _p.tag;
    _p.userData;
    _p.userObject;
    _p.arrivalOrder;
    _p.actionManager;
    cc.defineGetterSetter(_p, "actionManager", _p.getActionManager, _p.setActionManager);
    _p.scheduler;
    cc.defineGetterSetter(_p, "scheduler", _p.getScheduler, _p.setScheduler);
    _p.shaderProgram;
    cc.defineGetterSetter(_p, "shaderProgram", _p.getShaderProgram, _p.setShaderProgram);
    _p.glServerState;
    cc.defineGetterSetter(_p, "glServerState", _p.getGLServerState, _p.setGLServerState);
    _p.opacity;
    cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
    _p.opacityModifyRGB;
    cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB, _p.setOpacityModifyRGB);
    _p.cascadeOpacity;
    cc.defineGetterSetter(_p, "cascadeOpacity", _p.isCascadeOpacityEnabled, _p.setCascadeOpacityEnabled);
    _p.color;
    cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
    _p.cascadeColor;
    cc.defineGetterSetter(_p,
        "cascadeColor", _p.isCascadeColorEnabled, _p.setCascadeColorEnabled)
};
cc.NODE_TAG_INVALID = -1;
cc.s_globalOrderOfArrival = 1;
cc.Node = cc.Class.extend({_localZOrder: 0, _globalZOrder: 0, _vertexZ: 0, _rotationX: 0, _rotationY: 0, _scaleX: 1, _scaleY: 1, _position: null, _skewX: 0, _skewY: 0, _children: null, _visible: true, _anchorPoint: null, _anchorPointInPoints: null, _contentSize: null, _running: false, _parent: null, _ignoreAnchorPointForPosition: false, tag: cc.NODE_TAG_INVALID, userData: null, userObject: null, _transformDirty: true, _inverseDirty: true, _cacheDirty: true, _cachedParent: null, _transformGLDirty: null, _transform: null, _inverse: null, _reorderChildDirty: false,
    _shaderProgram: null, arrivalOrder: 0, _actionManager: null, _scheduler: null, _eventDispatcher: null, _initializedNode: false, _additionalTransformDirty: false, _additionalTransform: null, _componentContainer: null, _isTransitionFinished: false, _rotationRadiansX: 0, _rotationRadiansY: 0, _className: "Node", _showNode: false, _name: "", _displayedOpacity: 255, _realOpacity: 255, _displayedColor: null, _realColor: null, _cascadeColorEnabled: false, _cascadeOpacityEnabled: false, _usingNormalizedPosition: false, _hashOfName: 0, _initNode: function () {
        var _t =
            this;
        _t._anchorPoint = cc.p(0, 0);
        _t._anchorPointInPoints = cc.p(0, 0);
        _t._contentSize = cc.size(0, 0);
        _t._position = cc.p(0, 0);
        _t._children = [];
        _t._transform = {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0};
        var director = cc.director;
        _t._actionManager = director.getActionManager();
        _t._scheduler = director.getScheduler();
        _t._initializedNode = true;
        _t._additionalTransform = cc.affineTransformMakeIdentity();
        if (cc.ComponentContainer)_t._componentContainer = new cc.ComponentContainer(_t);
        this._displayedOpacity = 255;
        this._realOpacity = 255;
        this._displayedColor =
            cc.color(255, 255, 255, 255);
        this._realColor = cc.color(255, 255, 255, 255);
        this._cascadeColorEnabled = false;
        this._cascadeOpacityEnabled = false
    }, init: function () {
        if (this._initializedNode === false)this._initNode();
        return true
    }, _arrayMakeObjectsPerformSelector: function (array, callbackType) {
        if (!array || array.length === 0)return;
        var i, len = array.length, node;
        var nodeCallbackType = cc.Node.StateCallbackType;
        switch (callbackType) {
            case nodeCallbackType.onEnter:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)node.onEnter()
                }
                break;
            case nodeCallbackType.onExit:
                for (i =
                         0; i < len; i++) {
                    node = array[i];
                    if (node)node.onExit()
                }
                break;
            case nodeCallbackType.onEnterTransitionDidFinish:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)node.onEnterTransitionDidFinish()
                }
                break;
            case nodeCallbackType.cleanup:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)node.cleanup()
                }
                break;
            case nodeCallbackType.updateTransform:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)node.updateTransform()
                }
                break;
            case nodeCallbackType.onExitTransitionDidStart:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)node.onExitTransitionDidStart()
                }
                break;
            case nodeCallbackType.sortAllChildren:
                for (i = 0; i < len; i++) {
                    node = array[i];
                    if (node)node.sortAllChildren()
                }
                break;
            default:
                cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector);
                break
        }
    }, setNodeDirty: null, attr: function (attrs) {
        for (var key in attrs)this[key] = attrs[key]
    }, getSkewX: function () {
        return this._skewX
    }, setSkewX: function (newSkewX) {
        this._skewX = newSkewX;
        this.setNodeDirty()
    }, getSkewY: function () {
        return this._skewY
    }, setSkewY: function (newSkewY) {
        this._skewY = newSkewY;
        this.setNodeDirty()
    }, setLocalZOrder: function (localZOrder) {
        this._localZOrder =
            localZOrder;
        if (this._parent)this._parent.reorderChild(this, localZOrder);
        cc.eventManager._setDirtyForNode(this)
    }, _setLocalZOrder: function (localZOrder) {
        this._localZOrder = localZOrder
    }, getLocalZOrder: function () {
        return this._localZOrder
    }, getZOrder: function () {
        cc.log(cc._LogInfos.Node_getZOrder);
        return this.getLocalZOrder()
    }, setZOrder: function (z) {
        cc.log(cc._LogInfos.Node_setZOrder);
        this.setLocalZOrder(z)
    }, setGlobalZOrder: function (globalZOrder) {
        if (this._globalZOrder != globalZOrder) {
            this._globalZOrder = globalZOrder;
            cc.eventManager._setDirtyForNode(this)
        }
    }, getGlobalZOrder: function () {
        return this._globalZOrder
    }, getVertexZ: function () {
        return this._vertexZ
    }, setVertexZ: function (Var) {
        this._vertexZ = Var
    }, getRotation: function () {
        if (this._rotationX !== this._rotationY)cc.log(cc._LogInfos.Node_getRotation);
        return this._rotationX
    }, setRotation: function (newRotation) {
        this._rotationX = this._rotationY = newRotation;
        this._rotationRadiansX = this._rotationX * 0.017453292519943295;
        this._rotationRadiansY = this._rotationY * 0.017453292519943295;
        this.setNodeDirty()
    }, getRotationX: function () {
        return this._rotationX
    }, setRotationX: function (rotationX) {
        this._rotationX = rotationX;
        this._rotationRadiansX = this._rotationX * 0.017453292519943295;
        this.setNodeDirty()
    }, getRotationY: function () {
        return this._rotationY
    }, setRotationY: function (rotationY) {
        this._rotationY = rotationY;
        this._rotationRadiansY = this._rotationY * 0.017453292519943295;
        this.setNodeDirty()
    }, getScale: function () {
        if (this._scaleX !== this._scaleY)cc.log(cc._LogInfos.Node_getScale);
        return this._scaleX
    },
    setScale: function (scale, scaleY) {
        this._scaleX = scale;
        this._scaleY = scaleY || scaleY === 0 ? scaleY : scale;
        this.setNodeDirty()
    }, getScaleX: function () {
        return this._scaleX
    }, setScaleX: function (newScaleX) {
        this._scaleX = newScaleX;
        this.setNodeDirty()
    }, getScaleY: function () {
        return this._scaleY
    }, setScaleY: function (newScaleY) {
        this._scaleY = newScaleY;
        this.setNodeDirty()
    }, setPosition: function (newPosOrxValue, yValue) {
        var locPosition = this._position;
        if (yValue === undefined) {
            locPosition.x = newPosOrxValue.x;
            locPosition.y = newPosOrxValue.y
        } else {
            locPosition.x =
                newPosOrxValue;
            locPosition.y = yValue
        }
        this.setNodeDirty()
    }, getPosition: function () {
        return cc.p(this._position)
    }, getPositionX: function () {
        return this._position.x
    }, setPositionX: function (x) {
        this._position.x = x;
        this.setNodeDirty()
    }, getPositionY: function () {
        return this._position.y
    }, setPositionY: function (y) {
        this._position.y = y;
        this.setNodeDirty()
    }, getChildrenCount: function () {
        return this._children.length
    }, getChildren: function () {
        return this._children
    }, isVisible: function () {
        return this._visible
    }, setVisible: function (Var) {
        this._visible =
            Var;
        this.setNodeDirty()
    }, getAnchorPoint: function () {
        return cc.p(this._anchorPoint)
    }, setAnchorPoint: function (point, y) {
        var locAnchorPoint = this._anchorPoint;
        if (y === undefined) {
            if (point.x === locAnchorPoint.x && point.y === locAnchorPoint.y)return;
            locAnchorPoint.x = point.x;
            locAnchorPoint.y = point.y
        } else {
            if (point === locAnchorPoint.x && y === locAnchorPoint.y)return;
            locAnchorPoint.x = point;
            locAnchorPoint.y = y
        }
        var locAPP = this._anchorPointInPoints, locSize = this._contentSize;
        locAPP.x = locSize.width * locAnchorPoint.x;
        locAPP.y =
            locSize.height * locAnchorPoint.y;
        this.setNodeDirty()
    }, _getAnchor: function () {
        return this._anchorPoint
    }, _setAnchor: function (p) {
        var x = p.x, y = p.y;
        if (this._anchorPoint.x !== x) {
            this._anchorPoint.x = x;
            this._anchorPointInPoints.x = this._contentSize.width * x
        }
        if (this._anchorPoint.y !== y) {
            this._anchorPoint.y = y;
            this._anchorPointInPoints.y = this._contentSize.height * y
        }
        this.setNodeDirty()
    }, _getAnchorX: function () {
        return this._anchorPoint.x
    }, _setAnchorX: function (x) {
        if (this._anchorPoint.x === x)return;
        this._anchorPoint.x = x;
        this._anchorPointInPoints.x = this._contentSize.width * x;
        this.setNodeDirty()
    }, _getAnchorY: function () {
        return this._anchorPoint.y
    }, _setAnchorY: function (y) {
        if (this._anchorPoint.y === y)return;
        this._anchorPoint.y = y;
        this._anchorPointInPoints.y = this._contentSize.height * y;
        this.setNodeDirty()
    }, getAnchorPointInPoints: function () {
        return cc.p(this._anchorPointInPoints)
    }, _getWidth: function () {
        return this._contentSize.width
    }, _setWidth: function (width) {
        this._contentSize.width = width;
        this._anchorPointInPoints.x = width * this._anchorPoint.x;
        this.setNodeDirty()
    }, _getHeight: function () {
        return this._contentSize.height
    }, _setHeight: function (height) {
        this._contentSize.height = height;
        this._anchorPointInPoints.y = height * this._anchorPoint.y;
        this.setNodeDirty()
    }, getContentSize: function () {
        return cc.size(this._contentSize)
    }, setContentSize: function (size, height) {
        var locContentSize = this._contentSize;
        if (height === undefined) {
            if (size.width === locContentSize.width && size.height === locContentSize.height)return;
            locContentSize.width = size.width;
            locContentSize.height =
                size.height
        } else {
            if (size === locContentSize.width && height === locContentSize.height)return;
            locContentSize.width = size;
            locContentSize.height = height
        }
        var locAPP = this._anchorPointInPoints, locAnchorPoint = this._anchorPoint;
        locAPP.x = locContentSize.width * locAnchorPoint.x;
        locAPP.y = locContentSize.height * locAnchorPoint.y;
        this.setNodeDirty()
    }, isRunning: function () {
        return this._running
    }, getParent: function () {
        return this._parent
    }, setParent: function (Var) {
        this._parent = Var
    }, isIgnoreAnchorPointForPosition: function () {
        return this._ignoreAnchorPointForPosition
    },
    ignoreAnchorPointForPosition: function (newValue) {
        if (newValue != this._ignoreAnchorPointForPosition) {
            this._ignoreAnchorPointForPosition = newValue;
            this.setNodeDirty()
        }
    }, getTag: function () {
        return this.tag
    }, setTag: function (Var) {
        this.tag = Var
    }, setName: function (name) {
        this._name
    }, getName: function () {
        return this._name
    }, getUserData: function () {
        return this.userData
    }, setUserData: function (Var) {
        this.userData = Var
    }, getUserObject: function () {
        return this.userObject
    }, setUserObject: function (newValue) {
        if (this.userObject != newValue)this.userObject =
            newValue
    }, getOrderOfArrival: function () {
        return this.arrivalOrder
    }, setOrderOfArrival: function (Var) {
        this.arrivalOrder = Var
    }, getActionManager: function () {
        if (!this._actionManager)this._actionManager = cc.director.getActionManager();
        return this._actionManager
    }, setActionManager: function (actionManager) {
        if (this._actionManager != actionManager) {
            this.stopAllActions();
            this._actionManager = actionManager
        }
    }, getScheduler: function () {
        if (!this._scheduler)this._scheduler = cc.director.getScheduler();
        return this._scheduler
    }, setScheduler: function (scheduler) {
        if (this._scheduler !=
            scheduler) {
            this.unscheduleAllCallbacks();
            this._scheduler = scheduler
        }
    }, getBoundingBox: function () {
        var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        return cc._rectApplyAffineTransformIn(rect, this.nodeToParentTransform())
    }, cleanup: function () {
        this.stopAllActions();
        this.unscheduleAllCallbacks();
        cc.eventManager.removeListeners(this);
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup)
    }, getChildByTag: function (aTag) {
        var __children = this._children;
        if (__children !=
            null)for (var i = 0; i < __children.length; i++) {
            var node = __children[i];
            if (node && node.tag == aTag)return node
        }
        return null
    }, getChildByName: function (name) {
        if (!name) {
            cc.log("Invalid name");
            return null
        }
        var locChildren = this._children;
        for (var i = 0, len = locChildren.length; i < len; i++)if (locChildren[i]._name == name)return locChildren[i];
        return null
    }, addChild: function (child, localZOrder, tag) {
        var child = child;
        var localZOrder = localZOrder === undefined ? child._localZOrder : localZOrder;
        var tag, name, setTag = false;
        switch (typeof tag) {
            case "undefined":
                tag =
                    undefined;
                name = child._name;
                break;
            case "string":
                name = tag;
                tag = undefined;
                break;
            case "number":
                setTag = true;
                name = "";
                break
        }
        cc.assert(child, cc._LogInfos.Node_addChild_3);
        cc.assert(child._parent === null, "child already added. It can't be added again");
        this.addChildHelper(child, localZOrder, tag, name, setTag)
    }, addChildHelper: function (child, localZOrder, tag, name, setTag) {
        if (!this._children)this._children = [];
        this._insertChild(child, localZOrder);
        if (setTag)child.setTag(tag); else child.setName(name);
        child.setParent(this);
        child.setOrderOfArrival(this.s_globalOrderOfArrival++);
        if (this._running) {
            child.onEnter();
            if (this._isTransitionFinished)child.onEnterTransitionDidFinish()
        }
        if (this._cascadeColorEnabled)this._enableCascadeColor();
        if (this._cascadeOpacityEnabled)this._enableCascadeOpacity()
    }, getName: function () {
        return this._name
    }, setName: function (name) {
        this._name = name
    }, removeFromParent: function (cleanup) {
        if (this._parent) {
            if (cleanup == null)cleanup = true;
            this._parent.removeChild(this, cleanup)
        }
    }, removeFromParentAndCleanup: function (cleanup) {
        cc.log(cc._LogInfos.Node_removeFromParentAndCleanup);
        this.removeFromParent(cleanup)
    }, removeChild: function (child, cleanup) {
        if (this._children.length === 0)return;
        if (cleanup == null)cleanup = true;
        if (this._children.indexOf(child) > -1)this._detachChild(child, cleanup);
        this.setNodeDirty()
    }, removeChildByTag: function (tag, cleanup) {
        if (tag === cc.NODE_TAG_INVALID)cc.log(cc._LogInfos.Node_removeChildByTag);
        var child = this.getChildByTag(tag);
        if (child == null)cc.log(cc._LogInfos.Node_removeChildByTag_2, tag); else this.removeChild(child, cleanup)
    }, removeAllChildrenWithCleanup: function (cleanup) {
        cc.log(cc._LogInfos.Node_removeAllChildrenWithCleanup);
        this.removeAllChildren(cleanup)
    }, removeAllChildren: function (cleanup) {
        var __children = this._children;
        if (__children != null) {
            if (cleanup == null)cleanup = true;
            for (var i = 0; i < __children.length; i++) {
                var node = __children[i];
                if (node) {
                    if (this._running) {
                        node.onExitTransitionDidStart();
                        node.onExit()
                    }
                    if (cleanup)node.cleanup();
                    node.parent = null
                }
            }
            this._children.length = 0
        }
    }, _detachChild: function (child, doCleanup) {
        if (this._running) {
            child.onExitTransitionDidStart();
            child.onExit()
        }
        if (doCleanup)child.cleanup();
        child.parent = null;
        cc.arrayRemoveObject(this._children, child)
    }, _insertChild: function (child, z) {
        this._reorderChildDirty = true;
        this._children.push(child);
        child._setLocalZOrder(z)
    }, reorderChild: function (child, zOrder) {
        cc.assert(child, cc._LogInfos.Node_reorderChild);
        this._reorderChildDirty = true;
        child.arrivalOrder = cc.s_globalOrderOfArrival;
        cc.s_globalOrderOfArrival++;
        child._setLocalZOrder(zOrder);
        this.setNodeDirty()
    }, sortAllChildren: function () {
        if (this._reorderChildDirty) {
            var _children = this._children;
            var len = _children.length,
                i, j, tmp;
            for (i = 1; i < len; i++) {
                tmp = _children[i];
                j = i - 1;
                while (j >= 0) {
                    if (tmp._localZOrder < _children[j]._localZOrder)_children[j + 1] = _children[j]; else if (tmp._localZOrder === _children[j]._localZOrder && tmp.arrivalOrder < _children[j].arrivalOrder)_children[j + 1] = _children[j]; else break;
                    j--
                }
                _children[j + 1] = tmp
            }
            this._reorderChildDirty = false
        }
    }, draw: function (ctx) {
    }, transformAncestors: function () {
        if (this._parent != null) {
            this._parent.transformAncestors();
            this._parent.transform()
        }
    }, onEnter: function () {
        this._isTransitionFinished =
            false;
        this._running = true;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter);
        this.resume()
    }, onEnterTransitionDidFinish: function () {
        this._isTransitionFinished = true;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnterTransitionDidFinish)
    }, onExitTransitionDidStart: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart)
    }, onExit: function () {
        this._running = false;
        this.pause();
        this._arrayMakeObjectsPerformSelector(this._children,
            cc.Node.StateCallbackType.onExit);
        if (this._componentContainer)this._componentContainer.removeAll()
    }, runAction: function (action) {
        cc.assert(action, cc._LogInfos.Node_runAction);
        this.actionManager.addAction(action, this, !this._running);
        return action
    }, stopAllActions: function () {
        this.actionManager && this.actionManager.removeAllActionsFromTarget(this)
    }, stopAction: function (action) {
        this.actionManager.removeAction(action)
    }, stopActionByTag: function (tag) {
        if (tag === cc.ACTION_TAG_INVALID) {
            cc.log(cc._LogInfos.Node_stopActionByTag);
            return
        }
        this.actionManager.removeActionByTag(tag, this)
    }, getActionByTag: function (tag) {
        if (tag === cc.ACTION_TAG_INVALID) {
            cc.log(cc._LogInfos.Node_getActionByTag);
            return null
        }
        return this.actionManager.getActionByTag(tag, this)
    }, getNumberOfRunningActions: function () {
        return this.actionManager.numberOfRunningActionsInTarget(this)
    }, scheduleUpdate: function () {
        this.scheduleUpdateWithPriority(0)
    }, scheduleUpdateWithPriority: function (priority) {
        this.scheduler.scheduleUpdateForTarget(this, priority, !this._running)
    }, unscheduleUpdate: function () {
        this.scheduler.unscheduleUpdateForTarget(this)
    },
    schedule: function (callback_fn, interval, repeat, delay) {
        interval = interval || 0;
        cc.assert(callback_fn, cc._LogInfos.Node_schedule);
        cc.assert(interval >= 0, cc._LogInfos.Node_schedule_2);
        repeat = repeat == null ? cc.REPEAT_FOREVER : repeat;
        delay = delay || 0;
        this.scheduler.scheduleCallbackForTarget(this, callback_fn, interval, repeat, delay, !this._running)
    }, scheduleOnce: function (callback_fn, delay) {
        this.schedule(callback_fn, 0, 0, delay)
    }, unschedule: function (callback_fn) {
        if (!callback_fn)return;
        this.scheduler.unscheduleCallbackForTarget(this,
            callback_fn)
    }, unscheduleAllCallbacks: function () {
        this.scheduler.unscheduleAllCallbacksForTarget(this)
    }, resumeSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_resumeSchedulerAndActions);
        this.resume()
    }, resume: function () {
        this.scheduler.resumeTarget(this);
        this.actionManager && this.actionManager.resumeTarget(this);
        cc.eventManager.resumeTarget(this)
    }, pauseSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_pauseSchedulerAndActions);
        this.pause()
    }, pause: function () {
        this.scheduler.pauseTarget(this);
        this.actionManager && this.actionManager.pauseTarget(this);
        cc.eventManager.pauseTarget(this)
    }, setAdditionalTransform: function (additionalTransform) {
        this._additionalTransform = additionalTransform;
        this._transformDirty = true;
        this._additionalTransformDirty = true
    }, parentToNodeTransform: function () {
        if (this._inverseDirty) {
            this._inverse = cc.affineTransformInvert(this.nodeToParentTransform());
            this._inverseDirty = false
        }
        return this._inverse
    }, nodeToWorldTransform: function () {
        var t = this.nodeToParentTransform();
        for (var p =
            this._parent; p != null; p = p.parent)t = cc.affineTransformConcat(t, p.nodeToParentTransform());
        return t
    }, worldToNodeTransform: function () {
        return cc.affineTransformInvert(this.nodeToWorldTransform())
    }, convertToNodeSpace: function (worldPoint) {
        return cc.pointApplyAffineTransform(worldPoint, this.worldToNodeTransform())
    }, convertToWorldSpace: function (nodePoint) {
        nodePoint = nodePoint || cc.p(0, 0);
        return cc.pointApplyAffineTransform(nodePoint, this.nodeToWorldTransform())
    }, convertToNodeSpaceAR: function (worldPoint) {
        return cc.pSub(this.convertToNodeSpace(worldPoint),
            this._anchorPointInPoints)
    }, convertToWorldSpaceAR: function (nodePoint) {
        nodePoint = nodePoint || cc.p(0, 0);
        var pt = cc.pAdd(nodePoint, this._anchorPointInPoints);
        return this.convertToWorldSpace(pt)
    }, _convertToWindowSpace: function (nodePoint) {
        var worldPoint = this.convertToWorldSpace(nodePoint);
        return cc.director.convertToUI(worldPoint)
    }, convertTouchToNodeSpace: function (touch) {
        var point = touch.getLocation();
        return this.convertToNodeSpace(point)
    }, convertTouchToNodeSpaceAR: function (touch) {
        var point = touch.getLocation();
        point = cc.director.convertToGL(point);
        return this.convertToNodeSpaceAR(point)
    }, update: function (dt) {
        if (this._componentContainer && !this._componentContainer.isEmpty())this._componentContainer.visit(dt)
    }, updateTransform: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
    }, retain: function () {
    }, release: function () {
    }, getComponent: function (name) {
        return this._componentContainer.getComponent(name)
    }, addComponent: function (component) {
        this._componentContainer.add(component)
    },
    removeComponent: function (name) {
        return this._componentContainer.remove(name)
    }, removeAllComponents: function () {
        this._componentContainer.removeAll()
    }, grid: null, ctor: null, visit: null, transform: null, nodeToParentTransform: null, _setNodeDirtyForCache: function () {
        if (this._cacheDirty === false) {
            this._cacheDirty = true;
            var cachedP = this._cachedParent;
            cachedP && cachedP != this && cachedP._setNodeDirtyForCache()
        }
    }, _setCachedParent: function (cachedParent) {
        if (this._cachedParent == cachedParent)return;
        this._cachedParent = cachedParent;
        var children = this._children;
        for (var i = 0, len = children.length; i < len; i++)children[i]._setCachedParent(cachedParent)
    }, getCamera: function () {
        if (!this._camera)this._camera = new cc.Camera;
        return this._camera
    }, getGrid: function () {
        return this.grid
    }, setGrid: function (grid) {
        this.grid = grid
    }, getShaderProgram: function () {
        return this._shaderProgram
    }, setShaderProgram: function (newShaderProgram) {
        this._shaderProgram = newShaderProgram
    }, getGLServerState: function () {
        return this._glServerState
    }, setGLServerState: function (state) {
        this._glServerState =
            state
    }, getBoundingBoxToWorld: function () {
        var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        var trans = this.nodeToWorldTransform();
        rect = cc.rectApplyAffineTransform(rect, this.nodeToWorldTransform());
        if (!this._children)return rect;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
            var child = locChildren[i];
            if (child && child._visible) {
                var childRect = child._getBoundingBoxToCurrentNode(trans);
                if (childRect)rect = cc.rectUnion(rect, childRect)
            }
        }
        return rect
    }, _getBoundingBoxToCurrentNode: function (parentTransform) {
        var rect =
            cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        var trans = parentTransform == null ? this.nodeToParentTransform() : cc.affineTransformConcat(this.nodeToParentTransform(), parentTransform);
        rect = cc.rectApplyAffineTransform(rect, trans);
        if (!this._children)return rect;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
            var child = locChildren[i];
            if (child && child._visible) {
                var childRect = child._getBoundingBoxToCurrentNode(trans);
                if (childRect)rect = cc.rectUnion(rect, childRect)
            }
        }
        return rect
    },
    _updateColor: function () {

    }, getOpacity: function () {
        return this._realOpacity
    }, getDisplayedOpacity: function () {
        return this._displayedOpacity
    }, setOpacity: function (opacity) {
        this._displayedOpacity = this._realOpacity = opacity;
        var parentOpacity = 255, locParent = this._parent;
        if (locParent && locParent.cascadeOpacity)parentOpacity = locParent.getDisplayedOpacity();
        this.updateDisplayedOpacity(parentOpacity);
        this._displayedColor.a =
            this._realColor.a = opacity
    }, updateDisplayedOpacity: function (parentOpacity) {
        this._displayedOpacity = this._realOpacity * parentOpacity / 255;
        if (this._cascadeOpacityEnabled) {
            var selChildren = this._children;
            for (var i = 0; i < selChildren.length; i++) {
                var item = selChildren[i];
                if (item)item.updateDisplayedOpacity(this._displayedOpacity)
            }
        }
    }, isCascadeOpacityEnabled: function () {
        return this._cascadeOpacityEnabled
    }, setCascadeOpacityEnabled: function (cascadeOpacityEnabled) {
        if (this._cascadeOpacityEnabled === cascadeOpacityEnabled)return;
        this._cascadeOpacityEnabled = cascadeOpacityEnabled;
        if (cascadeOpacityEnabled)this._enableCascadeOpacity(); else this._disableCascadeOpacity()
    }, _enableCascadeOpacity: function () {
        var parentOpacity = 255, locParent = this._parent;
        if (locParent && locParent.cascadeOpacity)parentOpacity = locParent.getDisplayedOpacity();
        this.updateDisplayedOpacity(parentOpacity)
    }, _disableCascadeOpacity: function () {
        this._displayedOpacity = this._realOpacity;
        var selChildren = this._children;
        for (var i = 0; i < selChildren.length; i++) {
            var item = selChildren[i];
            if (item)item.updateDisplayedOpacity(255)
        }
    }, getColor: function () {
        var locRealColor = this._realColor;
        return cc.color(locRealColor.r, locRealColor.g, locRealColor.b, locRealColor.a)
    }, getDisplayedColor: function () {
        var tmpColor = this._displayedColor;
        return cc.color(tmpColor.r, tmpColor.g, tmpColor.b, tmpColor.a)
    }, setColor: function (color) {
        var locDisplayedColor = this._displayedColor, locRealColor = this._realColor;
        locDisplayedColor.r = locRealColor.r = color.r;
        locDisplayedColor.g = locRealColor.g = color.g;
        locDisplayedColor.b =
            locRealColor.b = color.b;
        var parentColor, locParent = this._parent;
        if (locParent && locParent.cascadeColor)parentColor = locParent.getDisplayedColor(); else parentColor = cc.color.WHITE;
        this.updateDisplayedColor(parentColor);
        if (color.a !== undefined && !color.a_undefined)this.setOpacity(color.a)
    }, updateDisplayedColor: function (parentColor) {
        var locDispColor = this._displayedColor, locRealColor = this._realColor;
        locDispColor.r = 0 | locRealColor.r * parentColor.r / 255;
        locDispColor.g = 0 | locRealColor.g * parentColor.g / 255;
        locDispColor.b =
            0 | locRealColor.b * parentColor.b / 255;
        if (this._cascadeColorEnabled) {
            var selChildren = this._children;
            for (var i = 0; i < selChildren.length; i++) {
                var item = selChildren[i];
                if (item)item.updateDisplayedColor(locDispColor)
            }
        }
    }, isCascadeColorEnabled: function () {
        return this._cascadeColorEnabled
    }, setCascadeColorEnabled: function (cascadeColorEnabled) {
        if (this._cascadeColorEnabled === cascadeColorEnabled)return;
        this._cascadeColorEnabled = cascadeColorEnabled;
        if (this._cascadeColorEnabled)this._enableCascadeColor(); else this._disableCascadeColor()
    },
    _enableCascadeColor: function () {
        var parentColor, locParent = this._parent;
        if (locParent && locParent.cascadeColor)parentColor = locParent.getDisplayedColor(); else parentColor = cc.color.WHITE;
        this.updateDisplayedColor(parentColor)
    }, _disableCascadeColor: function () {
        var locDisplayedColor = this._displayedColor, locRealColor = this._realColor;
        locDisplayedColor.r = locRealColor.r;
        locDisplayedColor.g = locRealColor.g;
        locDisplayedColor.b = locRealColor.b;
        var selChildren = this._children, whiteColor = cc.color.WHITE;
        for (var i = 0; i <
            selChildren.length; i++) {
            var item = selChildren[i];
            if (item)item.updateDisplayedColor(whiteColor)
        }
    }, setOpacityModifyRGB: function (opacityValue) {
    }, isOpacityModifyRGB: function () {
        return false
    }});
cc.Node.create = function () {
    return new cc.Node
};
cc.Node.StateCallbackType = {onEnter: 1, onExit: 2, cleanup: 3, onEnterTransitionDidFinish: 4, updateTransform: 5, onExitTransitionDidStart: 6, sortAllChildren: 7};

var _p = cc.Node.prototype;
_p.ctor = function () {
    this._initNode()
};
_p.setNodeDirty = function () {
    var _t = this;
    _t._setNodeDirtyForCache();
    _t._transformDirty === false && (_t._transformDirty = _t._inverseDirty = true)
};
_p.visit = function (ctx) {
    var _t = this;
    if (!_t._visible)return;
    var context = ctx || cc._renderContext, i;
    var children = _t._children, child;
    context.save();
    _t.transform(context);
    var len = children.length;
    if (len > 0) {
        _t.sortAllChildren();
        for (i = 0; i < len; i++) {
            child = children[i];
            if (child._localZOrder <
                0)child.visit(context); else break
        }
        _t.draw(context);
        for (; i < len; i++)children[i].visit(context)
    } else _t.draw(context);
    this._cacheDirty = false;
    _t.arrivalOrder = 0;
    context.restore()
};
_p.transform = function (ctx) {
    var context = ctx || cc._renderContext, eglViewer = cc.view;
    var t = this.nodeToParentTransform();
    context.transform(t.a, t.c, t.b, t.d, t.tx * eglViewer.getScaleX(), -t.ty * eglViewer.getScaleY())
};
_p.nodeToParentTransform = function () {
    var _t = this;
    if (_t._transformDirty) {
        var t = _t._transform;
        t.tx = _t._position.x;
        t.ty = _t._position.y;
        var Cos = 1, Sin = 0;
        if (_t._rotationX) {
            Cos = Math.cos(_t._rotationRadiansX);
            Sin = Math.sin(_t._rotationRadiansX)
        }
        t.a = t.d = Cos;
        t.b = -Sin;
        t.c = Sin;
        var lScaleX = _t._scaleX, lScaleY = _t._scaleY;
        var appX = _t._anchorPointInPoints.x, appY = _t._anchorPointInPoints.y;
        var sx = lScaleX < 1E-6 && lScaleX > -1E-6 ? 1E-6 : lScaleX, sy = lScaleY < 1E-6 && lScaleY > -1E-6 ? 1E-6 : lScaleY;
        if (_t._skewX || _t._skewY) {
            var skx = Math.tan(-_t._skewX * Math.PI / 180);
            var sky = Math.tan(-_t._skewY * Math.PI / 180);
            if (skx === Infinity)skx = 99999999;
            if (sky === Infinity)sky = 99999999;
            var xx = appY * skx * sx;
            var yy = appX * sky * sy;
            t.a = Cos + -Sin * sky;
            t.b = Cos * skx + -Sin;
            t.c = Sin + Cos * sky;
            t.d = Sin * skx + Cos;
            t.tx += Cos * xx + -Sin * yy;
            t.ty += Sin * xx + Cos * yy
        }
        if (lScaleX !== 1 || lScaleY !== 1) {
            t.a *= sx;
            t.c *= sx;
            t.b *= sy;
            t.d *= sy
        }
        t.tx += Cos * -appX * sx + -Sin * appY * sy;
        t.ty -= Sin * -appX * sx + Cos * appY * sy;
        if (_t._ignoreAnchorPointForPosition) {
            t.tx += appX;
            t.ty += appY
        }
        if (_t._additionalTransformDirty) {
            _t._transform = cc.AffineTransformConcat(t, _t._additionalTransform);
            _t._additionalTransformDirty = false
        }
        _t._transformDirty = false
    }
    return _t._transform
};
_p = null

cc.assert(typeof cc._tmp.PrototypeCCNode === "function", cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNode();
delete cc._tmp.PrototypeCCNode;
cc.Node.ON_ENTER = 0;
cc.Node.ON_EXIT = 1;
cc.Node.ON_ENTER_TRANSITION_DID_FINISH = 2;
cc.Node.ON_EXIT_TRANSITOIN_DID_START = 3;
cc.Node.ON_CLEAN_UP = 4;
cc._tmp.PrototypeTexture2D = function () {
    var _c = cc.Texture2D;
    _c.PVRImagesHavePremultipliedAlpha = function (haveAlphaPremultiplied) {
        cc.PVRHaveAlphaPremultiplied_ = haveAlphaPremultiplied
    };
    _c.PIXEL_FORMAT_RGBA8888 = 2;
    _c.PIXEL_FORMAT_RGB888 = 3;
    _c.PIXEL_FORMAT_RGB565 = 4;
    _c.PIXEL_FORMAT_A8 = 5;
    _c.PIXEL_FORMAT_I8 = 6;
    _c.PIXEL_FORMAT_AI88 = 7;
    _c.PIXEL_FORMAT_RGBA4444 = 8;
    _c.PIXEL_FORMAT_RGB5A1 = 7;
    _c.PIXEL_FORMAT_PVRTC4 = 9;
    _c.PIXEL_FORMAT_PVRTC2 = 10;
    _c.PIXEL_FORMAT_DEFAULT = _c.PIXEL_FORMAT_RGBA8888;
    var _M = cc.Texture2D._M = {};
    _M[_c.PIXEL_FORMAT_RGBA8888] =
        "RGBA8888";
    _M[_c.PIXEL_FORMAT_RGB888] = "RGB888";
    _M[_c.PIXEL_FORMAT_RGB565] = "RGB565";
    _M[_c.PIXEL_FORMAT_A8] = "A8";
    _M[_c.PIXEL_FORMAT_I8] = "I8";
    _M[_c.PIXEL_FORMAT_AI88] = "AI88";
    _M[_c.PIXEL_FORMAT_RGBA4444] = "RGBA4444";
    _M[_c.PIXEL_FORMAT_RGB5A1] = "RGB5A1";
    _M[_c.PIXEL_FORMAT_PVRTC4] = "PVRTC4";
    _M[_c.PIXEL_FORMAT_PVRTC2] = "PVRTC2";
    var _B = cc.Texture2D._B = {};
    _B[_c.PIXEL_FORMAT_RGBA8888] = 32;
    _B[_c.PIXEL_FORMAT_RGB888] = 24;
    _B[_c.PIXEL_FORMAT_RGB565] = 16;
    _B[_c.PIXEL_FORMAT_A8] = 8;
    _B[_c.PIXEL_FORMAT_I8] = 8;
    _B[_c.PIXEL_FORMAT_AI88] =
        16;
    _B[_c.PIXEL_FORMAT_RGBA4444] = 16;
    _B[_c.PIXEL_FORMAT_RGB5A1] = 16;
    _B[_c.PIXEL_FORMAT_PVRTC4] = 4;
    _B[_c.PIXEL_FORMAT_PVRTC2] = 3;
    var _p = cc.Texture2D.prototype;
    _p.name;
    cc.defineGetterSetter(_p, "name", _p.getName);
    _p.pixelFormat;
    cc.defineGetterSetter(_p, "pixelFormat", _p.getPixelFormat);
    _p.pixelsWidth;
    cc.defineGetterSetter(_p, "pixelsWidth", _p.getPixelsWide);
    _p.pixelsHeight;
    cc.defineGetterSetter(_p, "pixelsHeight", _p.getPixelsHigh);
    _p.width;
    cc.defineGetterSetter(_p, "width", _p._getWidth);
    _p.height;
    cc.defineGetterSetter(_p,
        "height", _p._getHeight);
    _c.defaultPixelFormat = _c.PIXEL_FORMAT_DEFAULT
};
cc._tmp.PrototypeTextureAtlas = function () {
    var _p = cc.TextureAtlas.prototype;
    _p.totalQuads;
    cc.defineGetterSetter(_p, "totalQuads", _p.getTotalQuads);
    _p.capacity;
    cc.defineGetterSetter(_p, "capacity", _p.getCapacity);
    _p.quads;
    cc.defineGetterSetter(_p, "quads", _p.getQuads, _p.setQuads)
};
cc.ALIGN_CENTER = 51;
cc.ALIGN_TOP = 19;
cc.ALIGN_TOP_RIGHT = 18;
cc.ALIGN_RIGHT = 50;
cc.ALIGN_BOTTOM_RIGHT = 34;
cc.ALIGN_BOTTOM = 35;
cc.ALIGN_BOTTOM_LEFT = 33;
cc.ALIGN_LEFT = 49;
cc.ALIGN_TOP_LEFT = 17;
cc.PVRHaveAlphaPremultiplied_ = false;

cc.Texture2D = cc.Class.extend({_contentSize: null, _isLoaded: false, _htmlElementObj: null, _loadedEventListeners: null, url: null, ctor: function () {
    this._contentSize = cc.size(0, 0);
    this._isLoaded = false;
    this._htmlElementObj = null
}, getPixelsWide: function () {
    return this._contentSize.width
}, getPixelsHigh: function () {
    return this._contentSize.height
}, getContentSize: function () {
    var locScaleFactor = cc.contentScaleFactor();
    return cc.size(this._contentSize.width / locScaleFactor, this._contentSize.height /
        locScaleFactor)
}, _getWidth: function () {
    return this._contentSize.width / cc.contentScaleFactor()
}, _getHeight: function () {
    return this._contentSize.height / cc.contentScaleFactor()
}, getContentSizeInPixels: function () {
    return this._contentSize
}, initWithElement: function (element) {
    if (!element)return;
    this._htmlElementObj = element
}, getHtmlElementObj: function () {
    return this._htmlElementObj
}, isLoaded: function () {
    return this._isLoaded
}, handleLoadedTexture: function () {
    var self = this;
    if (self._isLoaded)return;
    if (!self._htmlElementObj) {
        var img =
            cc.loader.getRes(self.url);
        if (!img)return;
        self.initWithElement(img)
    }
    self._isLoaded = true;
    var locElement = self._htmlElementObj;
    self._contentSize.width = locElement.width;
    self._contentSize.height = locElement.height;
    self._callLoadedEventCallbacks()
}, description: function () {
    return"\x3ccc.Texture2D | width \x3d " + this._contentSize.width + " height " + this._contentSize.height + "\x3e"
}, initWithData: function (data, pixelFormat, pixelsWide, pixelsHigh, contentSize) {
    return false
}, initWithImage: function (uiImage) {
    return false
},
initWithString: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
    return false
}, releaseTexture: function () {
}, getName: function () {
    return null
}, getMaxS: function () {
    return 1
}, setMaxS: function (maxS) {
}, getMaxT: function () {
    return 1
}, setMaxT: function (maxT) {
}, getPixelFormat: function () {
    return null
}, getShaderProgram: function () {
    return null
}, setShaderProgram: function (shaderProgram) {
}, hasPremultipliedAlpha: function () {
    return false
}, hasMipmaps: function () {
    return false
}, releaseData: function (data) {
    data =
        null
}, keepData: function (data, length) {
    return data
}, drawAtPoint: function (point) {
}, drawInRect: function (rect) {
}, initWithETCFile: function (file) {
    cc.log(cc._LogInfos.Texture2D_initWithETCFile);
    return false
}, initWithPVRFile: function (file) {
    cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
    return false
}, initWithPVRTCData: function (data, level, bpp, hasAlpha, length, pixelFormat) {
    cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
    return false
}, setTexParameters: function (texParams) {
}, setAntiAliasTexParameters: function () {
},
setAliasTexParameters: function () {
}, generateMipmap: function () {
}, stringForFormat: function () {
    return""
}, bitsPerPixelForFormat: function (format) {
    return-1
}, addLoadedEventListener: function (callback, target) {
    if (!this._loadedEventListeners)this._loadedEventListeners = [];
    this._loadedEventListeners.push({eventCallback: callback, eventTarget: target})
}, removeLoadedEventListener: function (target) {
    if (!this._loadedEventListeners)return;
    var locListeners = this._loadedEventListeners;
    for (var i = 0; i < locListeners.length; i++) {
        var selCallback =
            locListeners[i];
        if (selCallback.eventTarget == target)locListeners.splice(i, 1)
    }
}, _callLoadedEventCallbacks: function () {
    if (!this._loadedEventListeners)return;
    var locListeners = this._loadedEventListeners;
    for (var i = 0, len = locListeners.length; i < len; i++) {
        var selCallback = locListeners[i];
        selCallback.eventCallback.call(selCallback.eventTarget, this)
    }
    locListeners.length = 0
}}); 

cc.assert(typeof cc._tmp.PrototypeTexture2D === "function", cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
cc._tmp.PrototypeTexture2D();
delete cc._tmp.PrototypeTexture2D;
cc.textureCache = {_textures: {}, _textureColorsCache: {}, _textureKeySeq: 0 | Math.random() * 1E3, _loadedTexturesBefore: {}, _initializingRenderer: function () {
    var selPath;
    var locLoadedTexturesBefore = this._loadedTexturesBefore, locTextures = this._textures;
    for (selPath in locLoadedTexturesBefore) {
        var tex2d = locLoadedTexturesBefore[selPath];
        tex2d.handleLoadedTexture();
        locTextures[selPath] = tex2d
    }
    this._loadedTexturesBefore = {}
}, addPVRTCImage: function (filename) {
    cc.log(cc._LogInfos.textureCache_addPVRTCImage)
}, addETCImage: function (filename) {
    cc.log(cc._LogInfos.textureCache_addETCImage)
}, description: function () {
    return"\x3cTextureCache | Number of textures \x3d " + this._textures.length + "\x3e"
}, textureForKey: function (textureKeyName) {
    return this._textures[textureKeyName] || this._textures[cc.loader._aliases[textureKeyName]]
}, getKeyByTexture: function (texture) {
    for (var key in this._textures)if (this._textures[key] == texture)return key;
    return null
}, _generalTextureKey: function () {
    this._textureKeySeq++;
    return"_textureKey_" + this._textureKeySeq
}, getTextureColors: function (texture) {
    var key = this.getKeyByTexture(texture);
    if (!key)if (texture instanceof HTMLImageElement)key = texture.src; else key = this._generalTextureKey();
    if (!this._textureColorsCache[key])this._textureColorsCache[key] = cc.generateTextureCacheForColor(texture);
    return this._textureColorsCache[key]
}, addPVRImage: function (path) {
    cc.log(cc._LogInfos.textureCache_addPVRImage)
}, removeAllTextures: function () {
    var locTextures = this._textures;
    for (var selKey in locTextures)if (locTextures[selKey])locTextures[selKey].releaseTexture();
    this._textures = {}
}, removeTexture: function (texture) {
    if (!texture)return;
    var locTextures = this._textures;
    for (var selKey in locTextures)if (locTextures[selKey] == texture) {
        locTextures[selKey].releaseTexture();
        delete locTextures[selKey]
    }
}, removeTextureForKey: function (textureKeyName) {
    if (textureKeyName == null)return;
    if (this._textures[textureKeyName])delete this._textures[textureKeyName]
}, cacheImage: function (path, texture) {
    if (texture instanceof cc.Texture2D) {
        this._textures[path] = texture;
        return
    }
    var texture2d = new cc.Texture2D;
    texture2d.initWithElement(texture);
    texture2d.handleLoadedTexture();
    this._textures[path] = texture2d
}, addUIImage: function (image, key) {
    cc.assert(image, cc._LogInfos.textureCache_addUIImage_2);
    if (key)if (this._textures[key])return this._textures[key];
    var texture = new cc.Texture2D;
    texture.initWithImage(image);
    if (key != null && texture != null)this._textures[key] = texture; else cc.log(cc._LogInfos.textureCache_addUIImage);
    return texture
}, _clear: function () {
    this._textures = {};
    this._textureColorsCache = {};
    this._textureKeySeq = 0 | Math.random() * 1E3;
    this._loadedTexturesBefore = {}
}};

var _p = cc.textureCache;
_p.handleLoadedTexture = function (url) {
    var locTexs = this._textures;
    var tex = locTexs[url];
    if (!tex) {
        tex = locTexs[url] = new cc.Texture2D;
        tex.url = url
    }
    tex.handleLoadedTexture()
};
_p.addImage = function (url, cb, target) {
    cc.assert(url, cc._LogInfos.Texture2D_addImage);
    var locTexs = this._textures;
    var tex = locTexs[url] || locTexs[cc.loader._aliases[url]];
    if (tex) {
        cb && cb.call(target);
        return tex
    }
    tex = locTexs[url] = new cc.Texture2D;
    tex.url = url;
    if (!cc.loader.getRes(url))if (cc.loader._checkIsImageURL(url))cc.loader.load(url,
        function (err) {
            cb && cb.call(target)
        }); else cc.loader.cache[url] = cc.loader.loadImg(url, function (err, img) {
        if (err)return cb ? cb(err) : err;
        cc.textureCache.handleLoadedTexture(url);
        cb && cb(null, img)
    }); else tex.handleLoadedTexture();
    return tex
};
_p = null;

cc.Scene = cc.Node.extend({_className: "Scene", ctor: function () {
    cc.Node.prototype.ctor.call(this);
    this._ignoreAnchorPointForPosition = true;
    this.setAnchorPoint(0.5, 0.5);
    this.setContentSize(cc.director.getWinSize())
}});
cc.Scene.create = function () {
    return new cc.Scene
};
cc.LoaderScene = cc.Scene.extend({_interval: null, _length: 0, _count: 0, _label: null, _className: "LoaderScene", init: function () {
    var self = this;
    var logoWidth = 160;
    var logoHeight = 200;
    var bgLayer = self._bgLayer = cc.LayerColor.create(cc.color(255, 255, 255, 1));
    bgLayer.setPosition(cc.visibleRect.bottomLeft);
    self.addChild(bgLayer, 0);
    var fontSize = 24, lblHeight = -logoHeight / 2 + 100;
    if (cc._loaderImage) {
        cc.loader.loadImg(cc._loaderImage, {isCrossOrigin: false}, function (err, img) {
            logoWidth = img.width;
            logoHeight = img.height;
            self._initStage(img,
                cc.visibleRect.center)
        });
        fontSize = 14;
        lblHeight = -logoHeight / 2 - 10
    }
    var label = self._label = cc.LabelTTF.create("Loading... 0%", "Arial", fontSize);
    label.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(0, lblHeight)));
    label.setColor(cc.color(180, 180, 180));
    bgLayer.addChild(this._label, 10);
    return true
}, _initStage: function (img, centerPos) {
    var self = this;
    var texture2d = self._texture2d = new cc.Texture2D;
    texture2d.initWithElement(img);
    texture2d.handleLoadedTexture();
    var logo = self._logo = cc.Sprite.create(texture2d);
    logo.setScale(cc.contentScaleFactor());
    logo.x = centerPos.x;
    logo.y = centerPos.y;
    self._bgLayer.addChild(logo, 10)
}, onEnter: function () {
    var self = this;
    cc.Node.prototype.onEnter.call(self);
    self.schedule(self._startLoading, 0.3)
}, onExit: function () {
    cc.Node.prototype.onExit.call(this);
    var tmpStr = "Loading... 0%";
    this._label.setString(tmpStr)
}, initWithResources: function (resources, cb) {
    if (typeof resources == "string")resources = [resources];
    this.resources = resources || [];
    this.cb = cb
}, _startLoading: function () {
    var self = this;
    self.unschedule(self._startLoading);
    var res = self.resources;
    self._length = res.length;
    self._count = 0;
    cc.loader.load(res, function (result, count) {
        self._count = count
    }, function () {
        if (self.cb)self.cb()
    });
    self.schedule(self._updatePercent)
}, _updatePercent: function () {
    var self = this;
    var count = self._count;
    var length = self._length;
    var percent = count / length * 100 | 0;
    percent = Math.min(percent, 100);
    self._label.setString("Loading... " + percent + "%");
    if (count >= length)self.unschedule(self._updatePercent)
}});
cc.LoaderScene.preload = function (resources, cb) {
    var _cc = cc;
    if (!_cc.loaderScene) {
        _cc.loaderScene = new cc.LoaderScene;
        _cc.loaderScene.init()
    }
    _cc.loaderScene.initWithResources(resources, cb);
    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene
};
cc._tmp.PrototypeLayerColor = function () {
    var _p = cc.LayerColor.prototype;
    cc.defineGetterSetter(_p, "width", _p._getWidth, _p._setWidth);
    cc.defineGetterSetter(_p, "height", _p._getHeight, _p._setHeight)
};
cc._tmp.PrototypeLayerGradient = function () {
    var _p = cc.LayerGradient.prototype;
    _p.startColor;
    cc.defineGetterSetter(_p, "startColor", _p.getStartColor, _p.setStartColor);
    _p.endColor;
    cc.defineGetterSetter(_p, "endColor", _p.getEndColor, _p.setEndColor);
    _p.startOpacity;
    cc.defineGetterSetter(_p, "startOpacity", _p.getStartOpacity, _p.setStartOpacity);
    _p.endOpacity;
    cc.defineGetterSetter(_p, "endOpacity", _p.getEndOpacity, _p.setEndOpacity);
    _p.vector;
    cc.defineGetterSetter(_p, "vector", _p.getVector, _p.setVector)
};
cc.Layer = cc.Node.extend({_isBaked: false, _bakeSprite: null, _className: "Layer", ctor: function () {
    var nodep = cc.Node.prototype;
    nodep.ctor.call(this);
    this._ignoreAnchorPointForPosition = true;
    nodep.setAnchorPoint.call(this, 0.5, 0.5);
    nodep.setContentSize.call(this, cc.winSize)
}, init: function () {
    var _t = this;
    _t._ignoreAnchorPointForPosition = true;
    _t.setAnchorPoint(0.5, 0.5);
    _t.setContentSize(cc.winSize);
    _t.cascadeOpacity = false;
    _t.cascadeColor = false;
    return true
}, bake: null, unbake: null, isBaked: function () {
    return this._isBaked
},
    visit: null});
cc.Layer.create = function () {
    return new cc.Layer
};

var p = cc.Layer.prototype;
p.bake = function () {
    if (!this._isBaked) {
        this._isBaked = this._cacheDirty = true;
        this._cachedParent = this;
        var children = this._children;
        for (var i = 0, len = children.length; i < len; i++)children[i]._setCachedParent(this);
        if (!this._bakeSprite)this._bakeSprite = new cc.BakeSprite
    }
};
p.unbake = function () {
    if (this._isBaked) {
        this._isBaked = false;
        this._cacheDirty = true;
        this._cachedParent = null;
        var children = this._children;
        for (var i = 0, len = children.length; i < len; i++)children[i]._setCachedParent(null)
    }
};
p.visit = function (ctx) {
    if (!this._isBaked) {
        cc.Node.prototype.visit.call(this, ctx);
        return
    }
    var context = ctx || cc._renderContext, i;
    var _t = this;
    var children = _t._children;
    var len = children.length;
    if (!_t._visible || len === 0)return;
    var locBakeSprite = this._bakeSprite;
    context.save();
    _t.transform(context);
    if (this._cacheDirty) {
        var boundingBox = this._getBoundingBoxForBake();
        boundingBox.width = 0 | boundingBox.width;
        boundingBox.height = 0 | boundingBox.height;
        var bakeContext = locBakeSprite.getCacheContext();
        locBakeSprite.resetCanvasSize(boundingBox.width,
            boundingBox.height);
        bakeContext.translate(0 - boundingBox.x, boundingBox.height + boundingBox.y);
        var anchor = locBakeSprite.getAnchorPointInPoints();
        locBakeSprite.setPosition(anchor.x + boundingBox.x, anchor.y + boundingBox.y);
        _t.sortAllChildren();
        cc.view._setScaleXYForRenderTexture();
        for (i = 0; i < len; i++)children[i].visit(bakeContext);
        cc.view._resetScale();
        this._cacheDirty = false
    }
    locBakeSprite.visit(context);
    _t.arrivalOrder = 0;
    context.restore()
};
p._getBoundingBoxForBake = function () {
    var rect = null;
    if (!this._children ||
        this._children.length === 0)return cc.rect(0, 0, 10, 10);
    var locChildren = this._children;
    for (var i = 0; i < locChildren.length; i++) {
        var child = locChildren[i];
        if (child && child._visible)if (rect) {
            var childRect = child._getBoundingBoxToCurrentNode();
            if (childRect)rect = cc.rectUnion(rect, childRect)
        } else rect = child._getBoundingBoxToCurrentNode()
    }
    return rect
};
p = null

cc.LayerColor = cc.Layer.extend({_blendFunc: null, _className: "LayerColor", getBlendFunc: function () {
    return this._blendFunc
}, changeWidthAndHeight: function (w, h) {
    this.width = w;
    this.height = h
}, changeWidth: function (w) {
    this.width = w
}, changeHeight: function (h) {
    this.height = h
}, setOpacityModifyRGB: function (value) {
}, isOpacityModifyRGB: function () {
    return false
}, setColor: function (color) {
    cc.Layer.prototype.setColor.call(this, color);
    this._updateColor()
}, setOpacity: function (opacity) {
    cc.Layer.prototype.setOpacity.call(this,
        opacity);
    this._updateColor()
}, _isLighterMode: false, ctor: null, init: function (color, width, height) {
    var winSize = cc.director.getWinSize();
    color = color || cc.color(0, 0, 0, 255);
    width = width === undefined ? winSize.width : width;
    height = height === undefined ? winSize.height : height;
    var locDisplayedColor = this._displayedColor;
    locDisplayedColor.r = color.r;
    locDisplayedColor.g = color.g;
    locDisplayedColor.b = color.b;
    var locRealColor = this._realColor;
    locRealColor.r = color.r;
    locRealColor.g = color.g;
    locRealColor.b = color.b;
    this._displayedOpacity = color.a;
    this._realOpacity = color.a;
    var proto = cc.LayerColor.prototype;
    proto.setContentSize.call(this, width, height);
    proto._updateColor.call(this);
    return true
}, setBlendFunc: function (src, dst) {
    var _t = this;
    if (dst === undefined)_t._blendFunc = src; else _t._blendFunc = {src: src, dst: dst};
    _t._isLighterMode = _t._blendFunc && _t._blendFunc.src == 1 && _t._blendFunc.dst ==
        771
}, _setWidth: null, _setHeight: null, _updateColor: null, updateDisplayedColor: function (parentColor) {
    cc.Layer.prototype.updateDisplayedColor.call(this, parentColor);
    this._updateColor()
}, updateDisplayedOpacity: function (parentOpacity) {
    cc.Layer.prototype.updateDisplayedOpacity.call(this, parentOpacity);
    this._updateColor()
}, draw: null});
cc.LayerColor.create = function (color, width, height) {
    return new cc.LayerColor(color, width, height)
};

var _p = cc.LayerColor.prototype;
_p.ctor = function (color, width, height) {
    cc.Layer.prototype.ctor.call(this);
    this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
    cc.LayerColor.prototype.init.call(this, color, width, height)
};
_p._setWidth = cc.Layer.prototype._setWidth;
_p._setHeight = cc.Layer.prototype._setHeight;
_p._updateColor = function () {
};
_p.draw = function (ctx) {
    var context = ctx || cc._renderContext, _t = this;
    var locEGLViewer = cc.view, locDisplayedColor = _t._displayedColor;
    context.fillStyle = "rgba(" + (0 | locDisplayedColor.r) + "," + (0 | locDisplayedColor.g) + "," + (0 | locDisplayedColor.b) + "," + _t._displayedOpacity / 255 + ")";
    context.fillRect(0, 0, _t.width * locEGLViewer.getScaleX(), -_t.height * locEGLViewer.getScaleY());
    cc.g_NumberOfDraws++
};
_p.visit = function (ctx) {
    if (!this._isBaked) {
        cc.Node.prototype.visit.call(this, ctx);
        return
    }
    var context = ctx || cc._renderContext, i;
    var _t = this;
    var children = _t._children;
    var len = children.length;
    if (!_t._visible)return;
    var locBakeSprite = this._bakeSprite;
    context.save();
    _t.transform(context);
    if (this._cacheDirty) {
        var boundingBox = this._getBoundingBoxForBake();
        boundingBox.width = 0 | boundingBox.width;
        boundingBox.height = 0 | boundingBox.height;
        var bakeContext = locBakeSprite.getCacheContext();
        locBakeSprite.resetCanvasSize(boundingBox.width, boundingBox.height);
        var anchor = locBakeSprite.getAnchorPointInPoints(), locPos = this._position;
        if (this._ignoreAnchorPointForPosition) {
            bakeContext.translate(0 - boundingBox.x + locPos.x, boundingBox.height + boundingBox.y - locPos.y);
            locBakeSprite.setPosition(anchor.x +
                boundingBox.x - locPos.x, anchor.y + boundingBox.y - locPos.y)
        } else {
            var selfAnchor = this.getAnchorPointInPoints();
            var selfPos = {x: locPos.x - selfAnchor.x, y: locPos.y - selfAnchor.y};
            bakeContext.translate(0 - boundingBox.x + selfPos.x, boundingBox.height + boundingBox.y - selfPos.y);
            locBakeSprite.setPosition(anchor.x + boundingBox.x - selfPos.x, anchor.y + boundingBox.y - selfPos.y)
        }
        var child;
        cc.view._setScaleXYForRenderTexture();
        if (len > 0) {
            _t.sortAllChildren();
            for (i = 0; i < len; i++) {
                child = children[i];
                if (child._localZOrder < 0)child.visit(bakeContext);
                else break
            }
            _t.draw(bakeContext);
            for (; i < len; i++)children[i].visit(bakeContext)
        } else _t.draw(bakeContext);
        cc.view._resetScale();
        this._cacheDirty = false
    }
    locBakeSprite.visit(context);
    _t.arrivalOrder = 0;
    context.restore()
};
_p._getBoundingBoxForBake = function () {
    var rect = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
    var trans = this.nodeToWorldTransform();
    rect = cc.rectApplyAffineTransform(rect, this.nodeToWorldTransform());
    if (!this._children || this._children.length === 0)return rect;
    var locChildren =
        this._children;
    for (var i = 0; i < locChildren.length; i++) {
        var child = locChildren[i];
        if (child && child._visible) {
            var childRect = child._getBoundingBoxToCurrentNode(trans);
            rect = cc.rectUnion(rect, childRect)
        }
    }
    return rect
};
_p = null

cc.assert(typeof cc._tmp.PrototypeLayerColor === "function", cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerColor();
delete cc._tmp.PrototypeLayerColor;
cc.LayerGradient = cc.LayerColor.extend({_startColor: null, _endColor: null, _startOpacity: 255, _endOpacity: 255, _alongVector: null, _compressedInterpolation: false, _gradientStartPoint: null, _gradientEndPoint: null, _className: "LayerGradient", ctor: function (start, end, v) {
    var _t = this;
    cc.LayerColor.prototype.ctor.call(_t);
    _t._startColor = cc.color(0, 0, 0, 255);
    _t._endColor = cc.color(0, 0, 0, 255);
    _t._alongVector = cc.p(0, -1);
    _t._startOpacity = 255;
    _t._endOpacity = 255;
    _t._gradientStartPoint = cc.p(0, 0);
    _t._gradientEndPoint = cc.p(0,
        0);
    cc.LayerGradient.prototype.init.call(_t, start, end, v)
}, init: function (start, end, v) {
    start = start || cc.color(0, 0, 0, 255);
    end = end || cc.color(0, 0, 0, 255);
    v = v || cc.p(0, -1);
    var _t = this;
    var locStartColor = _t._startColor, locEndColor = _t._endColor;
    locStartColor.r = start.r;
    locStartColor.g = start.g;
    locStartColor.b = start.b;
    _t._startOpacity = start.a;
    locEndColor.r = end.r;
    locEndColor.g = end.g;
    locEndColor.b = end.b;
    _t._endOpacity = end.a;
    _t._alongVector = v;
    _t._compressedInterpolation = true;
    _t._gradientStartPoint = cc.p(0, 0);
    _t._gradientEndPoint =
        cc.p(0, 0);
    cc.LayerColor.prototype.init.call(_t, cc.color(start.r, start.g, start.b, 255));
    cc.LayerGradient.prototype._updateColor.call(_t);
    return true
}, setContentSize: function (size, height) {
    cc.LayerColor.prototype.setContentSize.call(this, size, height);
    this._updateColor()
}, _setWidth: function (width) {
    cc.LayerColor.prototype._setWidth.call(this, width);
    this._updateColor()
}, _setHeight: function (height) {
    cc.LayerColor.prototype._setHeight.call(this, height);
    this._updateColor()
}, getStartColor: function () {
    return this._realColor
}, setStartColor: function (color) {
    this.color = color
}, setEndColor: function (color) {
    this._endColor = color;
    this._updateColor()
}, getEndColor: function () {
    return this._endColor
}, setStartOpacity: function (o) {
    this._startOpacity = o;
    this._updateColor()
}, getStartOpacity: function () {
    return this._startOpacity
}, setEndOpacity: function (o) {
    this._endOpacity = o;
    this._updateColor()
}, getEndOpacity: function () {
    return this._endOpacity
}, setVector: function (Var) {
    this._alongVector.x = Var.x;
    this._alongVector.y = Var.y;
    this._updateColor()
},
getVector: function () {
    return cc.p(this._alongVector.x, this._alongVector.y)
}, isCompressedInterpolation: function () {
    return this._compressedInterpolation
}, setCompressedInterpolation: function (compress) {
    this._compressedInterpolation = compress;
    this._updateColor()
}, _draw: null, _updateColor: null});

cc.LayerGradient.create = function (start, end, v) {
    return new cc.LayerGradient(start, end, v)
};

var _p = cc.LayerGradient.prototype;
_p.draw = function (ctx) {
    var context = ctx || cc._renderContext, _t = this;
    if (_t._isLighterMode)context.globalCompositeOperation = "lighter";
    context.save();
    var opacityf = _t._displayedOpacity / 255;
    var scaleX = cc.view.getScaleX(), scaleY = cc.view.getScaleY();
    var tWidth = _t.width * scaleX, tHeight = _t.height * scaleY;
    var tGradient = context.createLinearGradient(_t._gradientStartPoint.x * scaleX, _t._gradientStartPoint.y * scaleY, _t._gradientEndPoint.x * scaleX,
            _t._gradientEndPoint.y * scaleY);
    var locDisplayedColor = _t._displayedColor, locEndColor = _t._endColor;
    tGradient.addColorStop(0, "rgba(" + Math.round(locDisplayedColor.r) + "," + Math.round(locDisplayedColor.g) + "," + Math.round(locDisplayedColor.b) + "," + (opacityf * (_t._startOpacity / 255)).toFixed(4) + ")");
    tGradient.addColorStop(1, "rgba(" + Math.round(locEndColor.r) + "," + Math.round(locEndColor.g) + "," + Math.round(locEndColor.b) + "," + (opacityf * (_t._endOpacity / 255)).toFixed(4) + ")");
    context.fillStyle = tGradient;
    context.fillRect(0,
        0, tWidth, -tHeight);
    if (_t._rotation != 0)context.rotate(_t._rotationRadians);
    context.restore();
    cc.g_NumberOfDraws++
};
_p._updateColor = function () {
    var _t = this;
    var locAlongVector = _t._alongVector, tWidth = _t.width * 0.5, tHeight = _t.height * 0.5;
    _t._gradientStartPoint.x = tWidth * -locAlongVector.x + tWidth;
    _t._gradientStartPoint.y = tHeight * locAlongVector.y - tHeight;
    _t._gradientEndPoint.x = tWidth * locAlongVector.x + tWidth;
    _t._gradientEndPoint.y = tHeight * -locAlongVector.y - tHeight
};
_p = null

cc.assert(typeof cc._tmp.PrototypeLayerGradient === "function", cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerGradient();
delete cc._tmp.PrototypeLayerGradient;
cc.LayerMultiplex = cc.Layer.extend({_enabledLayer: 0, _layers: null, _className: "LayerMultiplex", ctor: function (layers) {
    cc.Layer.prototype.ctor.call(this);
    if (layers instanceof Array)cc.LayerMultiplex.prototype.initWithLayers.call(this, layers); else cc.LayerMultiplex.prototype.initWithLayers.call(this, Array.prototype.slice.call(arguments))
}, initWithLayers: function (layers) {
    if (layers.length > 0 && layers[layers.length - 1] == null)cc.log(cc._LogInfos.LayerMultiplex_initWithLayers);
    this._layers = layers;
    this._enabledLayer =
        0;
    this.addChild(this._layers[this._enabledLayer]);
    return true
}, switchTo: function (n) {
    if (n >= this._layers.length) {
        cc.log(cc._LogInfos.LayerMultiplex_switchTo);
        return
    }
    this.removeChild(this._layers[this._enabledLayer], true);
    this._enabledLayer = n;
    this.addChild(this._layers[n])
}, switchToAndReleaseMe: function (n) {
    if (n >= this._layers.length) {
        cc.log(cc._LogInfos.LayerMultiplex_switchToAndReleaseMe);
        return
    }
    this.removeChild(this._layers[this._enabledLayer], true);
    this._layers[this._enabledLayer] = null;
    this._enabledLayer =
        n;
    this.addChild(this._layers[n])
}, addLayer: function (layer) {
    if (!layer) {
        cc.log(cc._LogInfos.LayerMultiplex_addLayer);
        return
    }
    this._layers.push(layer)
}});
cc.LayerMultiplex.create = function () {
    return new cc.LayerMultiplex(Array.prototype.slice.call(arguments))
};
cc._tmp.PrototypeSprite = function () {
    var _p = cc.Sprite.prototype;
    cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB, _p.setOpacityModifyRGB);
    cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
    cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
    _p.dirty;
    _p.flippedX;
    cc.defineGetterSetter(_p, "flippedX", _p.isFlippedX, _p.setFlippedX);
    _p.flippedY;
    cc.defineGetterSetter(_p, "flippedY", _p.isFlippedY, _p.setFlippedY);
    _p.offsetX;
    cc.defineGetterSetter(_p, "offsetX", _p._getOffsetX);
    _p.offsetY;
    cc.defineGetterSetter(_p, "offsetY", _p._getOffsetY);
    _p.atlasIndex;
    _p.texture;
    cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
    _p.textureRectRotated;
    cc.defineGetterSetter(_p, "textureRectRotated", _p.isTextureRectRotated);
    _p.textureAtlas;
    _p.batchNode;
    cc.defineGetterSetter(_p, "batchNode", _p.getBatchNode, _p.setBatchNode);
    _p.quad;
    cc.defineGetterSetter(_p, "quad", _p.getQuad)
};
cc.generateTintImageWithMultiply = function (image, color, rect, renderCanvas) {
    renderCanvas = renderCanvas || cc.newElement("canvas");
    rect = rect || cc.rect(0, 0, image.width, image.height);
    var context = renderCanvas.getContext("2d");
    if (renderCanvas.width != rect.width || renderCanvas.height != rect.height) {
        renderCanvas.width = rect.width;
        renderCanvas.height = rect.height
    } else context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    context.fillRect(0, 0, rect.width, rect.height);
    context.globalCompositeOperation = "multiply";
    context.drawImage(image, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
    context.globalCompositeOperation = "destination-atop";
    context.drawImage(image, rect.x, rect.y, rect.width, rect.height, 0, 0, rect.width, rect.height);
    return renderCanvas
};
cc.generateTintImage = function (texture, tintedImgCache, color, rect, renderCanvas) {
    if (!rect)rect = cc.rect(0, 0, texture.width, texture.height);
    var r = color.r / 255;
    var g = color.g / 255;
    var b = color.b / 255;
    var w = Math.min(rect.width, tintedImgCache[0].width);
    var h = Math.min(rect.height, tintedImgCache[0].height);
    var buff = renderCanvas;
    var ctx;
    if (!buff) {
        buff = cc.newElement("canvas");
        buff.width = w;
        buff.height = h;
        ctx = buff.getContext("2d")
    } else {
        ctx = buff.getContext("2d");
        ctx.clearRect(0, 0, w, h)
    }
    ctx.save();
    ctx.globalCompositeOperation =
        "lighter";
    var a = ctx.globalAlpha;
    if (r > 0) {
        ctx.globalAlpha = r * a;
        ctx.drawImage(tintedImgCache[0], rect.x, rect.y, w, h, 0, 0, w, h)
    }
    if (g > 0) {
        ctx.globalAlpha = g * a;
        ctx.drawImage(tintedImgCache[1], rect.x, rect.y, w, h, 0, 0, w, h)
    }
    if (b > 0) {
        ctx.globalAlpha = b * a;
        ctx.drawImage(tintedImgCache[2], rect.x, rect.y, w, h, 0, 0, w, h)
    }
    if (r + g + b < 1) {
        ctx.globalAlpha = a;
        ctx.drawImage(tintedImgCache[3], rect.x, rect.y, w, h, 0, 0, w, h)
    }
    ctx.restore();
    return buff
};
cc.generateTextureCacheForColor = function (texture) {
    if (texture.channelCache)return texture.channelCache;
    var textureCache = [cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas")];

    function renderToCache() {
        var ref = cc.generateTextureCacheForColor;
        var w = texture.width;
        var h = texture.height;
        textureCache[0].width = w;
        textureCache[0].height = h;
        textureCache[1].width = w;
        textureCache[1].height = h;
        textureCache[2].width = w;
        textureCache[2].height = h;
        textureCache[3].width = w;
        textureCache[3].height =
            h;
        ref.canvas.width = w;
        ref.canvas.height = h;
        var ctx = ref.canvas.getContext("2d");
        ctx.drawImage(texture, 0, 0);
        ref.tempCanvas.width = w;
        ref.tempCanvas.height = h;
        var pixels = ctx.getImageData(0, 0, w, h).data;
        for (var rgbI = 0; rgbI < 4; rgbI++) {
            var cacheCtx = textureCache[rgbI].getContext("2d");
            cacheCtx.getImageData(0, 0, w, h).data;
            ref.tempCtx.drawImage(texture, 0, 0);
            var to = ref.tempCtx.getImageData(0, 0, w, h);
            var toData = to.data;
            for (var i = 0; i < pixels.length; i += 4) {
                toData[i] = rgbI === 0 ? pixels[i] : 0;
                toData[i + 1] = rgbI === 1 ? pixels[i + 1] :
                    0;
                toData[i + 2] = rgbI === 2 ? pixels[i + 2] : 0;
                toData[i + 3] = pixels[i + 3]
            }
            cacheCtx.putImageData(to, 0, 0)
        }
        texture.onload = null
    }

    try {
        renderToCache()
    } catch (e) {
        texture.onload = renderToCache
    }
    texture.channelCache = textureCache;
    return textureCache
};
cc.generateTextureCacheForColor.canvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCanvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d");
cc.cutRotateImageToCanvas = function (texture, rect) {
    if (!texture)return null;
    if (!rect)return texture;
    var nCanvas = cc.newElement("canvas");
    nCanvas.width = rect.width;
    nCanvas.height = rect.height;
    var ctx = nCanvas.getContext("2d");
    ctx.translate(nCanvas.width / 2, nCanvas.height / 2);
    ctx.rotate(-1.5707963267948966);
    ctx.drawImage(texture, rect.x, rect.y, rect.height, rect.width, -rect.height / 2, -rect.width / 2, rect.height, rect.width);
    return nCanvas
};
cc.Sprite = cc.Node.extend({dirty: false, atlasIndex: 0, textureAtlas: null, _batchNode: null, _recursiveDirty: null, _hasChildren: null, _shouldBeHidden: false, _transformToBatch: null, _blendFunc: null, _texture: null, _rect: null, _rectRotated: false, _offsetPosition: null, _unflippedOffsetPositionFromCenter: null, _opacityModifyRGB: false, _flippedX: false, _flippedY: false, _textureLoaded: false, _loadedEventListeners: null, _newTextureWhenChangeColor: null, _className: "Sprite", textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (callback, target) {
    if (!this._loadedEventListeners)this._loadedEventListeners = [];
    this._loadedEventListeners.push({eventCallback: callback, eventTarget: target})
}, _callLoadedEventCallbacks: function () {
    if (!this._loadedEventListeners)return;
    var locListeners = this._loadedEventListeners;
    for (var i = 0, len = locListeners.length; i < len; i++) {
        var selCallback = locListeners[i];
        selCallback.eventCallback.call(selCallback.eventTarget, this)
    }
    locListeners.length = 0
}, isDirty: function () {
    return this.dirty
}, setDirty: function (bDirty) {
    this.dirty =
        bDirty
}, isTextureRectRotated: function () {
    return this._rectRotated
}, getAtlasIndex: function () {
    return this.atlasIndex
}, setAtlasIndex: function (atlasIndex) {
    this.atlasIndex = atlasIndex
}, getTextureRect: function () {
    return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height)
}, getTextureAtlas: function () {
    return this.textureAtlas
}, setTextureAtlas: function (textureAtlas) {
    this.textureAtlas = textureAtlas
}, getOffsetPosition: function () {
    return cc.p(this._offsetPosition)
}, _getOffsetX: function () {
    return this._offsetPosition.x
}, _getOffsetY: function () {
    return this._offsetPosition.y
}, getBlendFunc: function () {
    return this._blendFunc
}, initWithSpriteFrame: function (spriteFrame) {
    cc.assert(spriteFrame, cc._LogInfos.Sprite_initWithSpriteFrame);
    if (!spriteFrame.textureLoaded()) {
        this._textureLoaded = false;
        spriteFrame.addLoadedEventListener(this._spriteFrameLoadedCallback, this)
    }
    var rotated = false;
    var ret = this.initWithTexture(spriteFrame.getTexture(), spriteFrame.getRect(), rotated);
    this.setSpriteFrame(spriteFrame);
    return ret
}, _spriteFrameLoadedCallback: null, initWithSpriteFrameName: function (spriteFrameName) {
    cc.assert(spriteFrameName, cc._LogInfos.Sprite_initWithSpriteFrameName);
    var frame = cc.spriteFrameCache.getSpriteFrame(spriteFrameName);
    cc.assert(frame, spriteFrameName + cc._LogInfos.Sprite_initWithSpriteFrameName1);
    return this.initWithSpriteFrame(frame)
}, useBatchNode: function (batchNode) {
    this.textureAtlas = batchNode.textureAtlas;
    this._batchNode = batchNode
}, setVertexRect: function (rect) {
    this._rect.x =
        rect.x;
    this._rect.y = rect.y;
    this._rect.width = rect.width;
    this._rect.height = rect.height
}, sortAllChildren: function () {
    if (this._reorderChildDirty) {
        var _children = this._children;
        var len = _children.length, i, j, tmp;
        for (i = 1; i < len; i++) {
            tmp = _children[i];
            j = i - 1;
            while (j >= 0) {
                if (tmp._localZOrder < _children[j]._localZOrder)_children[j + 1] = _children[j]; else if (tmp._localZOrder === _children[j]._localZOrder && tmp.arrivalOrder < _children[j].arrivalOrder)_children[j + 1] = _children[j]; else break;
                j--
            }
            _children[j + 1] = tmp
        }
        if (this._batchNode)this._arrayMakeObjectsPerformSelector(_children,
            cc.Node.StateCallbackType.sortAllChildren);
        this._reorderChildDirty = false
    }
}, reorderChild: function (child, zOrder) {
    cc.assert(child, cc._LogInfos.Sprite_reorderChild_2);
    if (this._children.indexOf(child) === -1) {
        cc.log(cc._LogInfos.Sprite_reorderChild);
        return
    }
    if (zOrder === child.zIndex)return;
    if (this._batchNode && !this._reorderChildDirty) {
        this._setReorderChildDirtyRecursively();
        this._batchNode.reorderBatch(true)
    }
    cc.Node.prototype.reorderChild.call(this, child, zOrder)
}, removeChild: function (child, cleanup) {
    if (this._batchNode)this._batchNode.removeSpriteFromAtlas(child);
    cc.Node.prototype.removeChild.call(this, child, cleanup)
}, removeAllChildren: function (cleanup) {
    var locChildren = this._children, locBatchNode = this._batchNode;
    if (locBatchNode && locChildren != null)for (var i = 0, len = locChildren.length; i < len; i++)locBatchNode.removeSpriteFromAtlas(locChildren[i]);
    cc.Node.prototype.removeAllChildren.call(this, cleanup);
    this._hasChildren = false
}, setDirtyRecursively: function (value) {
    this._recursiveDirty = value;
    this.dirty = value;
    var locChildren = this._children, child, l = locChildren ? locChildren.length :
        0;
    for (var i = 0; i < l; i++) {
        child = locChildren[i];
        child instanceof cc.Sprite && child.setDirtyRecursively(true)
    }
}, setNodeDirty: function (norecursive) {
    cc.Node.prototype.setNodeDirty.call(this);
    if (!norecursive && this._batchNode && !this._recursiveDirty)if (this._hasChildren)this.setDirtyRecursively(true); else {
        this._recursiveDirty = true;
        this.dirty = true
    }
}, ignoreAnchorPointForPosition: function (relative) {
    if (this._batchNode) {
        cc.log(cc._LogInfos.Sprite_ignoreAnchorPointForPosition);
        return
    }
    cc.Node.prototype.ignoreAnchorPointForPosition.call(this,
        relative)
}, setFlippedX: function (flippedX) {
    if (this._flippedX != flippedX) {
        this._flippedX = flippedX;
        this.setTextureRect(this._rect, this._rectRotated, this._contentSize);
        this.setNodeDirty(true)
    }
}, setFlippedY: function (flippedY) {
    if (this._flippedY != flippedY) {
        this._flippedY = flippedY;
        this.setTextureRect(this._rect, this._rectRotated, this._contentSize);
        this.setNodeDirty(true)
    }
}, isFlippedX: function () {
    return this._flippedX
}, isFlippedY: function () {
    return this._flippedY
}, setOpacityModifyRGB: null, isOpacityModifyRGB: function () {
    return this._opacityModifyRGB
},
updateDisplayedOpacity: null, setDisplayFrameWithAnimationName: function (animationName, frameIndex) {
    cc.assert(animationName, cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3);
    var cache = cc.animationCache.getAnimation(animationName);
    if (!cache) {
        cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName);
        return
    }
    var animFrame = cache.getFrames()[frameIndex];
    if (!animFrame) {
        cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2);
        return
    }
    this.setSpriteFrame(animFrame.getSpriteFrame())
}, getBatchNode: function () {
    return this._batchNode
},
_setReorderChildDirtyRecursively: function () {
    if (!this._reorderChildDirty) {
        this._reorderChildDirty = true;
        var pNode = this._parent;
        while (pNode && pNode != this._batchNode) {
            pNode._setReorderChildDirtyRecursively();
            pNode = pNode.parent
        }
    }
}, getTexture: function () {
    return this._texture
}, _quad: null, _quadWebBuffer: null, _quadDirty: false, _colorized: false, _isLighterMode: false, _originalTexture: null, _textureRect_Canvas: null, _drawSize_Canvas: null, ctor: null, _softInit: function (fileName, rect, rotated) {
    if (fileName === undefined)cc.Sprite.prototype.init.call(this);
    else if (typeof fileName === "string")if (fileName[0] === "#") {
        var frameName = fileName.substr(1, fileName.length - 1);
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
        this.initWithSpriteFrame(spriteFrame)
    } else cc.Sprite.prototype.init.call(this, fileName, rect); else if (typeof fileName === "object")if (fileName instanceof cc.Texture2D)this.initWithTexture(fileName, rect, rotated); else if (fileName instanceof cc.SpriteFrame)this.initWithSpriteFrame(fileName); else if (fileName instanceof HTMLImageElement ||
        fileName instanceof HTMLCanvasElement) {
        var texture2d = new cc.Texture2D;
        texture2d.initWithElement(fileName);
        texture2d.handleLoadedTexture();
        this.initWithTexture(texture2d)
    }
}, getQuad: function () {
    return this._quad
}, setBlendFunc: null, init: null, initWithFile: function (filename, rect) {
    cc.assert(filename, cc._LogInfos.Sprite_initWithFile);
    var tex = cc.textureCache.textureForKey(filename);
    if (!tex) {
        tex = cc.textureCache.addImage(filename);
        return this.initWithTexture(tex, rect || cc.rect(0, 0, tex._contentSize.width, tex._contentSize.height))
    } else {
        if (!rect) {
            var size =
                tex.getContentSize();
            rect = cc.rect(0, 0, size.width, size.height)
        }
        return this.initWithTexture(tex, rect)
    }
}, initWithTexture: null, _textureLoadedCallback: null, setTextureRect: null, updateTransform: null, addChild: null, updateColor: function () {
    var locDisplayedColor = this._displayedColor, locDisplayedOpacity = this._displayedOpacity;
    var color4 = {r: locDisplayedColor.r, g: locDisplayedColor.g, b: locDisplayedColor.b, a: locDisplayedOpacity};
    if (this._opacityModifyRGB) {
        color4.r *= locDisplayedOpacity / 255;
        color4.g *= locDisplayedOpacity /
            255;
        color4.b *= locDisplayedOpacity / 255
    }
    var locQuad = this._quad;
    locQuad.bl.colors = color4;
    locQuad.br.colors = color4;
    locQuad.tl.colors = color4;
    locQuad.tr.colors = color4;
    if (this._batchNode)if (this.atlasIndex != cc.Sprite.INDEX_NOT_INITIALIZED)this.textureAtlas.updateQuad(locQuad, this.atlasIndex); else this.dirty = true;
    this._quadDirty = true
}, setOpacity: null, setColor: null, updateDisplayedColor: null, setSpriteFrame: null, setDisplayFrame: function (newFrame) {
    cc.log(cc._LogInfos.Sprite_setDisplayFrame);
    this.setSpriteFrame(newFrame)
},
isFrameDisplayed: null, displayFrame: function () {
    return cc.SpriteFrame.create(this._texture, cc.rectPointsToPixels(this._rect), this._rectRotated, cc.pointPointsToPixels(this._unflippedOffsetPositionFromCenter), cc.sizePointsToPixels(this._contentSize))
}, setBatchNode: null, setTexture: null, _updateBlendFunc: function () {
    if (this._batchNode) {
        cc.log(cc._LogInfos.Sprite__updateBlendFunc);
        return
    }
    if (!this._texture || !this._texture.hasPremultipliedAlpha()) {
        this._blendFunc.src = cc.SRC_ALPHA;
        this._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA;
        this.opacityModifyRGB = false
    } else {
        this._blendFunc.src = cc.BLEND_SRC;
        this._blendFunc.dst = cc.BLEND_DST;
        this.opacityModifyRGB = true
    }
}, _changeTextureColor: function () {
    var locElement, locTexture = this._texture, locRect = this._textureRect_Canvas;
    if (locTexture && locRect.validRect && this._originalTexture) {
        locElement = locTexture.getHtmlElementObj();
        if (!locElement)return;
        this._colorized = true;
        if (locElement instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor)cc.generateTintImageWithMultiply(this._originalTexture._htmlElementObj,
            this._displayedColor, locRect, locElement); else {
            locElement = cc.generateTintImageWithMultiply(this._originalTexture._htmlElementObj, this._displayedColor, locRect);
            locTexture = new cc.Texture2D;
            locTexture.initWithElement(locElement);
            locTexture.handleLoadedTexture();
            this.texture = locTexture
        }
    }
}, _setTextureCoords: function (rect) {
    rect = cc.rectPointsToPixels(rect);
    var tex = this._batchNode ? this.textureAtlas.texture : this._texture;
    if (!tex)return;
    var atlasWidth = tex.pixelsWidth;
    var atlasHeight = tex.pixelsHeight;
    var left,
        right, top, bottom, tempSwap, locQuad = this._quad;
    if (this._rectRotated) {
        if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
            left = (2 * rect.x + 1) / (2 * atlasWidth);
            right = left + (rect.height * 2 - 2) / (2 * atlasWidth);
            top = (2 * rect.y + 1) / (2 * atlasHeight);
            bottom = top + (rect.width * 2 - 2) / (2 * atlasHeight)
        } else {
            left = rect.x / atlasWidth;
            right = (rect.x + rect.height) / atlasWidth;
            top = rect.y / atlasHeight;
            bottom = (rect.y + rect.width) / atlasHeight
        }
        if (this._flippedX) {
            tempSwap = top;
            top = bottom;
            bottom = tempSwap
        }
        if (this._flippedY) {
            tempSwap = left;
            left = right;
            right = tempSwap
        }
        locQuad.bl.texCoords.u =
            left;
        locQuad.bl.texCoords.v = top;
        locQuad.br.texCoords.u = left;
        locQuad.br.texCoords.v = bottom;
        locQuad.tl.texCoords.u = right;
        locQuad.tl.texCoords.v = top;
        locQuad.tr.texCoords.u = right;
        locQuad.tr.texCoords.v = bottom
    } else {
        if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
            left = (2 * rect.x + 1) / (2 * atlasWidth);
            right = left + (rect.width * 2 - 2) / (2 * atlasWidth);
            top = (2 * rect.y + 1) / (2 * atlasHeight);
            bottom = top + (rect.height * 2 - 2) / (2 * atlasHeight)
        } else {
            left = rect.x / atlasWidth;
            right = (rect.x + rect.width) / atlasWidth;
            top = rect.y / atlasHeight;
            bottom = (rect.y +
                rect.height) / atlasHeight
        }
        if (this._flippedX) {
            tempSwap = left;
            left = right;
            right = tempSwap
        }
        if (this._flippedY) {
            tempSwap = top;
            top = bottom;
            bottom = tempSwap
        }
        locQuad.bl.texCoords.u = left;
        locQuad.bl.texCoords.v = bottom;
        locQuad.br.texCoords.u = right;
        locQuad.br.texCoords.v = bottom;
        locQuad.tl.texCoords.u = left;
        locQuad.tl.texCoords.v = top;
        locQuad.tr.texCoords.u = right;
        locQuad.tr.texCoords.v = top
    }
    this._quadDirty = true
}, draw: null});
cc.Sprite.create = function (fileName, rect, rotated) {
    return new cc.Sprite(fileName, rect, rotated)
};
cc.Sprite.INDEX_NOT_INITIALIZED = -1;

var _p = cc.Sprite.prototype;
_p._spriteFrameLoadedCallback = function (spriteFrame) {
    var _t = this;
    _t.setNodeDirty(true);
    _t.setTextureRect(spriteFrame.getRect(), spriteFrame.isRotated(), spriteFrame.getOriginalSize());
    var curColor = _t.color;
    if (curColor.r !== 255 || curColor.g !== 255 || curColor.b !== 255)_t._changeTextureColor();
    _t._callLoadedEventCallbacks()
};
_p.setOpacityModifyRGB = function (modify) {
    if (this._opacityModifyRGB !== modify) {
        this._opacityModifyRGB = modify;
        this.setNodeDirty(true)
    }
};
_p.updateDisplayedOpacity = function (parentOpacity) {
    cc.Node.prototype.updateDisplayedOpacity.call(this, parentOpacity);
    this._setNodeDirtyForCache()
};
_p.ctor = function (fileName, rect, rotated) {
    var self = this;
    cc.Node.prototype.ctor.call(self);
    self._shouldBeHidden = false;
    self._offsetPosition = cc.p(0, 0);
    self._unflippedOffsetPositionFromCenter = cc.p(0, 0);
    self._blendFunc = {src: cc.BLEND_SRC, dst: cc.BLEND_DST};
    self._rect = cc.rect(0, 0, 0, 0);
    self._newTextureWhenChangeColor = false;
    self._textureLoaded = true;
    self._textureRect_Canvas =
    {x: 0, y: 0, width: 0, height: 0, validRect: false};
    self._drawSize_Canvas = cc.size(0, 0);
    self._softInit(fileName, rect, rotated)
};
_p.setBlendFunc = function (src, dst) {
    var locBlendFunc = this._blendFunc;
    if (dst === undefined) {
        locBlendFunc.src = src.src;
        locBlendFunc.dst = src.dst
    } else {
        locBlendFunc.src = src;
        locBlendFunc.dst = dst
    }
    this._isLighterMode = locBlendFunc && (locBlendFunc.src == cc.SRC_ALPHA && locBlendFunc.dst == cc.ONE || locBlendFunc.src == cc.ONE && locBlendFunc.dst == cc.ONE)
};
_p.init = function () {
    var _t = this;
    if (arguments.length > 0)return _t.initWithFile(arguments[0],
        arguments[1]);
    cc.Node.prototype.init.call(_t);
    _t.dirty = _t._recursiveDirty = false;
    _t._opacityModifyRGB = true;
    _t._blendFunc.src = cc.BLEND_SRC;
    _t._blendFunc.dst = cc.BLEND_DST;
    _t.texture = null;
    _t._textureLoaded = true;
    _t._flippedX = _t._flippedY = false;
    _t.anchorX = 0.5;
    _t.anchorY = 0.5;
    _t._offsetPosition.x = 0;
    _t._offsetPosition.y = 0;
    _t._hasChildren = false;
    _t.setTextureRect(cc.rect(0, 0, 0, 0), false, cc.size(0, 0));
    return true
};
_p.initWithTexture = function (texture, rect, rotated) {
    var _t = this;
    cc.assert(arguments.length != 0, cc._LogInfos.CCSpriteBatchNode_initWithTexture);
    rotated = rotated || false;
    if (rotated && texture.isLoaded()) {
        var tempElement = texture.getHtmlElementObj();
        tempElement = cc.cutRotateImageToCanvas(tempElement, rect);
        var tempTexture = new cc.Texture2D;
        tempTexture.initWithElement(tempElement);
        tempTexture.handleLoadedTexture();
        texture = tempTexture;
        _t._rect = cc.rect(0, 0, rect.width, rect.height)
    }
    if (!cc.Node.prototype.init.call(_t))return false;
    _t._batchNode = null;
    _t._recursiveDirty = false;
    _t.dirty = false;
    _t._opacityModifyRGB = true;
    _t._blendFunc.src = cc.BLEND_SRC;
    _t._blendFunc.dst =
        cc.BLEND_DST;
    _t._flippedX = _t._flippedY = false;
    _t.anchorX = 0.5;
    _t.anchorY = 0.5;
    _t._offsetPosition.x = 0;
    _t._offsetPosition.y = 0;
    _t._hasChildren = false;
    var locTextureLoaded = texture.isLoaded();
    _t._textureLoaded = locTextureLoaded;
    if (!locTextureLoaded) {
        _t._rectRotated = rotated;
        if (rect) {
            _t._rect.x = rect.x;
            _t._rect.y = rect.y;
            _t._rect.width = rect.width;
            _t._rect.height = rect.height
        }
        texture.addLoadedEventListener(_t._textureLoadedCallback, _t);
        return true
    }
    if (!rect)rect = cc.rect(0, 0, texture.width, texture.height);
    if (texture &&
        texture.url) {
        var _x = rect.x + rect.width, _y = rect.y + rect.height;
        if (_x > texture.width)cc.error(cc._LogInfos.RectWidth, texture.url);
        if (_y > texture.height)cc.error(cc._LogInfos.RectHeight, texture.url)
    }
    _t._originalTexture = texture;
    _t.texture = texture;
    _t.setTextureRect(rect, rotated);
    _t.batchNode = null;
    return true
};
_p._textureLoadedCallback = function (sender) {
    var _t = this;
    if (_t._textureLoaded)return;
    _t._textureLoaded = true;
    var locRect = _t._rect;
    if (!locRect)locRect = cc.rect(0, 0, sender.width, sender.height); else if (cc._rectEqualToZero(locRect)) {
        locRect.width =
            sender.width;
        locRect.height = sender.height
    }
    _t._originalTexture = sender;
    _t.texture = sender;
    _t.setTextureRect(locRect, _t._rectRotated);
    _t.batchNode = _t._batchNode;
    _t._callLoadedEventCallbacks()
};
_p.setTextureRect = function (rect, rotated, untrimmedSize) {
    var _t = this;
    _t._rectRotated = rotated || false;
    _t.setContentSize(untrimmedSize || rect);
    _t.setVertexRect(rect);
    var locTextureRect = _t._textureRect_Canvas, scaleFactor = cc.contentScaleFactor();
    locTextureRect.x = 0 | rect.x * scaleFactor;
    locTextureRect.y = 0 | rect.y * scaleFactor;
    locTextureRect.width = 0 | rect.width * scaleFactor;
    locTextureRect.height = 0 | rect.height * scaleFactor;
    locTextureRect.validRect = !(locTextureRect.width === 0 || locTextureRect.height === 0 || locTextureRect.x < 0 || locTextureRect.y < 0);
    var relativeOffset = _t._unflippedOffsetPositionFromCenter;
    if (_t._flippedX)relativeOffset.x = -relativeOffset.x;
    if (_t._flippedY)relativeOffset.y = -relativeOffset.y;
    _t._offsetPosition.x = relativeOffset.x + (_t._contentSize.width - _t._rect.width) / 2;
    _t._offsetPosition.y = relativeOffset.y + (_t._contentSize.height -
        _t._rect.height) / 2;
    if (_t._batchNode)_t.dirty = true
};
_p.updateTransform = function () {
    var _t = this;
    if (_t.dirty) {
        var locParent = _t._parent;
        if (!_t._visible || locParent && locParent != _t._batchNode && locParent._shouldBeHidden)_t._shouldBeHidden = true; else {
            _t._shouldBeHidden = false;
            if (!locParent || locParent == _t._batchNode)_t._transformToBatch = _t.nodeToParentTransform(); else _t._transformToBatch = cc.affineTransformConcat(_t.nodeToParentTransform(), locParent._transformToBatch)
        }
        _t._recursiveDirty = false;
        _t.dirty = false
    }
    if (_t._hasChildren)_t._arrayMakeObjectsPerformSelector(_t._children,
        cc.Node.StateCallbackType.updateTransform)
};
_p.addChild = function (child, localZOrder, tag) {
    cc.assert(child, cc._LogInfos.CCSpriteBatchNode_addChild_2);
    if (localZOrder == null)localZOrder = child._localZOrder;
    if (tag == null)tag = child.tag;
    cc.Node.prototype.addChild.call(this, child, localZOrder, tag);
    this._hasChildren = true
};
_p.setOpacity = function (opacity) {
    cc.Node.prototype.setOpacity.call(this, opacity);
    this._setNodeDirtyForCache()
};
_p.setColor = function (color3) {
    var _t = this;
    var curColor = _t.color;
    if (curColor.r === color3.r &&
        curColor.g === color3.g && curColor.b === color3.b)return;
    cc.Node.prototype.setColor.call(_t, color3)
};
_p.updateDisplayedColor = function (parentColor) {
    var _t = this;
    cc.Node.prototype.updateDisplayedColor.call(_t, parentColor);
    _t._changeTextureColor();
    _t._setNodeDirtyForCache()
};
_p.setSpriteFrame = function (newFrame) {
    var _t = this;
    if (typeof newFrame == "string") {
        newFrame = cc.spriteFrameCache.getSpriteFrame(newFrame);
        cc.assert(newFrame, cc._LogInfos.CCSpriteBatchNode_setSpriteFrame)
    }
    _t.setNodeDirty(true);
    var frameOffset =
        newFrame.getOffset();
    _t._unflippedOffsetPositionFromCenter.x = frameOffset.x;
    _t._unflippedOffsetPositionFromCenter.y = frameOffset.y;
    _t._rectRotated = newFrame.isRotated();
    var pNewTexture = newFrame.getTexture();
    var locTextureLoaded = newFrame.textureLoaded();
    if (!locTextureLoaded) {
        _t._textureLoaded = false;
        newFrame.addLoadedEventListener(function (sender) {
            _t._textureLoaded = true;
            var locNewTexture = sender.getTexture();
            if (locNewTexture != _t._texture)_t.texture = locNewTexture;
            _t.setTextureRect(sender.getRect(), sender.isRotated(),
                sender.getOriginalSize());
            _t._callLoadedEventCallbacks()
        }, _t)
    }
    if (pNewTexture != _t._texture)_t.texture = pNewTexture;
    if (_t._rectRotated)_t._originalTexture = pNewTexture;
    _t.setTextureRect(newFrame.getRect(), _t._rectRotated, newFrame.getOriginalSize());
    _t._colorized = false;
    if (locTextureLoaded) {
        var curColor = _t.color;
        if (curColor.r !== 255 || curColor.g !== 255 || curColor.b !== 255)_t._changeTextureColor()
    }
};
_p.isFrameDisplayed = function (frame) {
    if (frame.getTexture() != this._texture)return false;
    return cc.rectEqualToRect(frame.getRect(),
        this._rect)
};
_p.setBatchNode = function (spriteBatchNode) {
    var _t = this;
    _t._batchNode = spriteBatchNode;
    if (!_t._batchNode) {
        _t.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED;
        _t.textureAtlas = null;
        _t._recursiveDirty = false;
        _t.dirty = false
    } else {
        _t._transformToBatch = cc.affineTransformIdentity();
        _t.textureAtlas = _t._batchNode.textureAtlas
    }
};
_p.setTexture = function (texture) {
    var _t = this;
    if (texture && typeof texture === "string") {
        texture = cc.textureCache.addImage(texture);
        _t.setTexture(texture);
        var size = texture.getContentSize();
        _t.setTextureRect(cc.rect(0, 0, size.width, size.height));
        return
    }
    cc.assert(!texture || texture instanceof cc.Texture2D, cc._LogInfos.CCSpriteBatchNode_setTexture);
    if (_t._texture != texture) {
        if (texture && texture.getHtmlElementObj()instanceof HTMLImageElement)_t._originalTexture = texture;
        _t._texture = texture
    }
};
_p.draw = function (ctx) {
    var _t = this;
    if (!_t._textureLoaded)return;
    var context = ctx || cc._renderContext;
    if (_t._isLighterMode)context.globalCompositeOperation = "lighter";
    var locEGL_ScaleX = cc.view.getScaleX(), locEGL_ScaleY =
        cc.view.getScaleY();
    context.globalAlpha = _t._displayedOpacity / 255;
    var locRect = _t._rect, locContentSize = _t._contentSize, locOffsetPosition = _t._offsetPosition, locDrawSizeCanvas = _t._drawSize_Canvas;
    var flipXOffset = 0 | locOffsetPosition.x, flipYOffset = -locOffsetPosition.y - locRect.height, locTextureCoord = _t._textureRect_Canvas;
    locDrawSizeCanvas.width = locRect.width * locEGL_ScaleX;
    locDrawSizeCanvas.height = locRect.height * locEGL_ScaleY;
    if (_t._flippedX || _t._flippedY) {
        context.save();
        if (_t._flippedX) {
            flipXOffset = -locOffsetPosition.x -
                locRect.width;
            context.scale(-1, 1)
        }
        if (_t._flippedY) {
            flipYOffset = locOffsetPosition.y;
            context.scale(1, -1)
        }
    }
    flipXOffset *= locEGL_ScaleX;
    flipYOffset *= locEGL_ScaleY;
    if (_t._texture && locTextureCoord.validRect) {
        var image = _t._texture.getHtmlElementObj();
        if (_t._colorized)context.drawImage(image, 0, 0, locTextureCoord.width, locTextureCoord.height, flipXOffset, flipYOffset, locDrawSizeCanvas.width, locDrawSizeCanvas.height); else context.drawImage(image, locTextureCoord.x, locTextureCoord.y, locTextureCoord.width, locTextureCoord.height,
            flipXOffset, flipYOffset, locDrawSizeCanvas.width, locDrawSizeCanvas.height)
    } else if (!_t._texture && locTextureCoord.validRect) {
        var curColor = _t.color;
        context.fillStyle = "rgba(" + curColor.r + "," + curColor.g + "," + curColor.b + ",1)";
        context.fillRect(flipXOffset, flipYOffset, locContentSize.width * locEGL_ScaleX, locContentSize.height * locEGL_ScaleY)
    }
    if (_t._flippedX || _t._flippedY)context.restore();
    cc.g_NumberOfDraws++
};
if (!cc.sys._supportCanvasNewBlendModes)_p._changeTextureColor = function () {
    var locElement, locTexture = this._texture, locRect = this._textureRect_Canvas;
    if (locTexture && locRect.validRect && this._originalTexture) {
        locElement = locTexture.getHtmlElementObj();
        if (!locElement)return;
        var cacheTextureForColor = cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj());
        if (cacheTextureForColor) {
            this._colorized = true;
            if (locElement instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor)cc.generateTintImage(locElement, cacheTextureForColor, this._displayedColor, locRect, locElement); else {
                locElement = cc.generateTintImage(locElement, cacheTextureForColor, this._displayedColor, locRect);
                locTexture = new cc.Texture2D;
                locTexture.initWithElement(locElement);
                locTexture.handleLoadedTexture();
                this.texture = locTexture
            }
        }
    }
};
delete _p

cc.assert(typeof cc._tmp.PrototypeSprite === "function", cc._LogInfos.MissingFile, "SpritesPropertyDefine.js");
cc._tmp.PrototypeSprite();
delete cc._tmp.PrototypeSprite;
cc.AnimationFrame = cc.Class.extend({_spriteFrame: null, _delayPerUnit: 0, _userInfo: null, ctor: function (spriteFrame, delayUnits, userInfo) {
    this._spriteFrame = spriteFrame || null;
    this._delayPerUnit = delayUnits || 0;
    this._userInfo = userInfo || null
}, clone: function () {
    var frame = new cc.AnimationFrame;
    frame.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
    return frame
}, copyWithZone: function (pZone) {
    return cc.clone(this)
}, copy: function (pZone) {
    var newFrame = new cc.AnimationFrame;
    newFrame.initWithSpriteFrame(this._spriteFrame.clone(),
        this._delayPerUnit, this._userInfo);
    return newFrame
}, initWithSpriteFrame: function (spriteFrame, delayUnits, userInfo) {
    this._spriteFrame = spriteFrame;
    this._delayPerUnit = delayUnits;
    this._userInfo = userInfo;
    return true
}, getSpriteFrame: function () {
    return this._spriteFrame
}, setSpriteFrame: function (spriteFrame) {
    this._spriteFrame = spriteFrame
}, getDelayUnits: function () {
    return this._delayPerUnit
}, setDelayUnits: function (delayUnits) {
    this._delayPerUnit = delayUnits
}, getUserInfo: function () {
    return this._userInfo
}, setUserInfo: function (userInfo) {
    this._userInfo =
        userInfo
}});
cc.AnimationFrame.create = function (spriteFrame, delayUnits, userInfo) {
    return new cc.AnimationFrame(spriteFrame, delayUnits, userInfo)
};
cc.Animation = cc.Class.extend({_frames: null, _loops: 0, _restoreOriginalFrame: false, _duration: 0, _delayPerUnit: 0, _totalDelayUnits: 0, ctor: function (frames, delay, loops) {
    this._frames = [];
    if (frames === undefined)this.initWithSpriteFrames(null, 0); else {
        var frame0 = frames[0];
        if (frame0)if (frame0 instanceof cc.SpriteFrame)this.initWithSpriteFrames(frames, delay, loops); else if (frame0 instanceof cc.AnimationFrame)this.initWithAnimationFrames(frames, delay, loops)
    }
}, getFrames: function () {
    return this._frames
}, setFrames: function (frames) {
    this._frames =
        frames
}, addSpriteFrame: function (frame) {
    var animFrame = new cc.AnimationFrame;
    animFrame.initWithSpriteFrame(frame, 1, null);
    this._frames.push(animFrame);
    this._totalDelayUnits++
}, addSpriteFrameWithFile: function (fileName) {
    var texture = cc.textureCache.addImage(fileName);
    var rect = cc.rect(0, 0, 0, 0);
    rect.width = texture.width;
    rect.height = texture.height;
    var frame = cc.SpriteFrame.create(texture, rect);
    this.addSpriteFrame(frame)
}, addSpriteFrameWithTexture: function (texture, rect) {
    var pFrame = cc.SpriteFrame.create(texture,
        rect);
    this.addSpriteFrame(pFrame)
}, initWithAnimationFrames: function (arrayOfAnimationFrames, delayPerUnit, loops) {
    cc.arrayVerifyType(arrayOfAnimationFrames, cc.AnimationFrame);
    this._delayPerUnit = delayPerUnit;
    this._loops = loops === undefined ? 1 : loops;
    this._totalDelayUnits = 0;
    var locFrames = this._frames;
    locFrames.length = 0;
    for (var i = 0; i < arrayOfAnimationFrames.length; i++) {
        var animFrame = arrayOfAnimationFrames[i];
        locFrames.push(animFrame);
        this._totalDelayUnits += animFrame.getDelayUnits()
    }
    return true
}, clone: function () {
    var animation =
        new cc.Animation;
    animation.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
    animation.setRestoreOriginalFrame(this._restoreOriginalFrame);
    return animation
}, copyWithZone: function (pZone) {
    var pCopy = new cc.Animation;
    pCopy.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
    pCopy.setRestoreOriginalFrame(this._restoreOriginalFrame);
    return pCopy
}, _copyFrames: function () {
    var copyFrames = [];
    for (var i = 0; i < this._frames.length; i++)copyFrames.push(this._frames[i].clone());
    return copyFrames
}, copy: function (pZone) {
    return this.copyWithZone(null)
}, getLoops: function () {
    return this._loops
}, setLoops: function (value) {
    this._loops = value
}, setRestoreOriginalFrame: function (restOrigFrame) {
    this._restoreOriginalFrame = restOrigFrame
}, getRestoreOriginalFrame: function () {
    return this._restoreOriginalFrame
}, getDuration: function () {
    return this._totalDelayUnits * this._delayPerUnit
}, getDelayPerUnit: function () {
    return this._delayPerUnit
}, setDelayPerUnit: function (delayPerUnit) {
    this._delayPerUnit = delayPerUnit
}, getTotalDelayUnits: function () {
    return this._totalDelayUnits
}, initWithSpriteFrames: function (frames, delay, loops) {
    cc.arrayVerifyType(frames, cc.SpriteFrame);
    this._loops = loops === undefined ? 1 : loops;
    this._delayPerUnit = delay || 0;
    this._totalDelayUnits = 0;
    var locFrames = this._frames;
    locFrames.length = 0;
    if (frames) {
        for (var i = 0; i < frames.length; i++) {
            var frame = frames[i];
            var animFrame = new cc.AnimationFrame;
            animFrame.initWithSpriteFrame(frame, 1, null);
            locFrames.push(animFrame)
        }
        this._totalDelayUnits += frames.length
    }
    return true
},
retain: function () {
}, release: function () {
}});
cc.Animation.create = function (frames, delay, loops) {
    return new cc.Animation(frames, delay, loops)
};
cc.animationCache = {_animations: {}, addAnimation: function (animation, name) {
    this._animations[name] = animation
}, removeAnimation: function (name) {
    if (!name)return;
    if (this._animations[name])delete this._animations[name]
}, getAnimation: function (name) {
    if (this._animations[name])return this._animations[name];
    return null
}, _addAnimationsWithDictionary: function (dictionary, plist) {
    var animations = dictionary["animations"];
    if (!animations) {
        cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary);
        return
    }
    var version = 1;
    var properties = dictionary["properties"];
    if (properties) {
        version = properties["format"] != null ? parseInt(properties["format"]) : version;
        var spritesheets = properties["spritesheets"];
        var spriteFrameCache = cc.spriteFrameCache;
        var path = cc.path;
        for (var i = 0; i < spritesheets.length; i++)spriteFrameCache.addSpriteFrames(path.changeBasename(plist, spritesheets[i]))
    }
    switch (version) {
        case 1:
            this._parseVersion1(animations);
            break;
        case 2:
            this._parseVersion2(animations);
            break;
        default:
            cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary_2);
            break
    }
}, addAnimations: function (plist) {
    cc.assert(plist, cc._LogInfos.animationCache_addAnimations_2);
    var dict = cc.loader.getRes(plist);
    if (!dict) {
        cc.log(cc._LogInfos.animationCache_addAnimations);
        return
    }
    this._addAnimationsWithDictionary(dict, plist)
}, _parseVersion1: function (animations) {
    var frameCache = cc.spriteFrameCache;
    for (var key in animations) {
        var animationDict = animations[key];
        var frameNames = animationDict["frames"];
        var delay = parseFloat(animationDict["delay"]) || 0;
        var animation = null;
        if (!frameNames) {
            cc.log(cc._LogInfos.animationCache__parseVersion1,
                key);
            continue
        }
        var frames = [];
        for (var i = 0; i < frameNames.length; i++) {
            var spriteFrame = frameCache.getSpriteFrame(frameNames[i]);
            if (!spriteFrame) {
                cc.log(cc._LogInfos.animationCache__parseVersion1_2, key, frameNames[i]);
                continue
            }
            var animFrame = new cc.AnimationFrame;
            animFrame.initWithSpriteFrame(spriteFrame, 1, null);
            frames.push(animFrame)
        }
        if (frames.length === 0) {
            cc.log(cc._LogInfos.animationCache__parseVersion1_3, key);
            continue
        } else if (frames.length != frameNames.length)cc.log(cc._LogInfos.animationCache__parseVersion1_4,
            key);
        animation = cc.Animation.create(frames, delay, 1);
        cc.animationCache.addAnimation(animation, key)
    }
}, _parseVersion2: function (animations) {
    var frameCache = cc.spriteFrameCache;
    for (var key in animations) {
        var animationDict = animations[key];
        var isLoop = animationDict["loop"];
        var loopsTemp = parseInt(animationDict["loops"]);
        var loops = isLoop ? cc.REPEAT_FOREVER : isNaN(loopsTemp) ? 1 : loopsTemp;
        var restoreOriginalFrame = animationDict["restoreOriginalFrame"] && animationDict["restoreOriginalFrame"] == true ? true : false;
        var frameArray =
            animationDict["frames"];
        if (!frameArray) {
            cc.log(cc._LogInfos.animationCache__parseVersion2, key);
            continue
        }
        var arr = [];
        for (var i = 0; i < frameArray.length; i++) {
            var entry = frameArray[i];
            var spriteFrameName = entry["spriteframe"];
            var spriteFrame = frameCache.getSpriteFrame(spriteFrameName);
            if (!spriteFrame) {
                cc.log(cc._LogInfos.animationCache__parseVersion2_2, key, spriteFrameName);
                continue
            }
            var delayUnits = parseFloat(entry["delayUnits"]) || 0;
            var userInfo = entry["notification"];
            var animFrame = new cc.AnimationFrame;
            animFrame.initWithSpriteFrame(spriteFrame,
                delayUnits, userInfo);
            arr.push(animFrame)
        }
        var delayPerUnit = parseFloat(animationDict["delayPerUnit"]) || 0;
        var animation = new cc.Animation;
        animation.initWithAnimationFrames(arr, delayPerUnit, loops);
        animation.setRestoreOriginalFrame(restoreOriginalFrame);
        cc.animationCache.addAnimation(animation, key)
    }
}, _clear: function () {
    this._animations = {}
}};
cc.SpriteFrame = cc.Class.extend({_offset: null, _originalSize: null, _rectInPixels: null, _rotated: false, _rect: null, _offsetInPixels: null, _originalSizeInPixels: null, _texture: null, _textureFilename: "", _textureLoaded: false, _eventListeners: null, ctor: function (filename, rect, rotated, offset, originalSize) {
    this._offset = cc.p(0, 0);
    this._offsetInPixels = cc.p(0, 0);
    this._originalSize = cc.size(0, 0);
    this._rotated = false;
    this._originalSizeInPixels = cc.size(0, 0);
    this._textureFilename = "";
    this._texture = null;
    this._textureLoaded = false;
    if (filename !== undefined && rect !== undefined)if (rotated === undefined || offset === undefined || originalSize === undefined)this.initWithTexture(filename, rect); else this.initWithTexture(filename, rect, rotated, offset, originalSize)
}, textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (callback, target) {
    if (this._eventListeners == null)this._eventListeners = [];
    this._eventListeners.push({eventCallback: callback, eventTarget: target})
}, _callLoadedEventCallbacks: function () {
    var locListeners = this._eventListeners;
    if (!locListeners)return;
    for (var i = 0, len = locListeners.length; i < len; i++) {
        var selCallback = locListeners[i];
        selCallback.eventCallback.call(selCallback.eventTarget, this)
    }
    locListeners.length = 0
}, getRectInPixels: function () {
    var locRectInPixels = this._rectInPixels;
    return cc.rect(locRectInPixels.x, locRectInPixels.y, locRectInPixels.width, locRectInPixels.height)
}, setRectInPixels: function (rectInPixels) {
    if (!this._rectInPixels)this._rectInPixels = cc.rect(0, 0, 0, 0);
    this._rectInPixels.x = rectInPixels.x;
    this._rectInPixels.y =
        rectInPixels.y;
    this._rectInPixels.width = rectInPixels.width;
    this._rectInPixels.height = rectInPixels.height;
    this._rect = cc.rectPixelsToPoints(rectInPixels)
}, isRotated: function () {
    return this._rotated
}, setRotated: function (bRotated) {
    this._rotated = bRotated
}, getRect: function () {
    var locRect = this._rect;
    return cc.rect(locRect.x, locRect.y, locRect.width, locRect.height)
}, setRect: function (rect) {
    if (!this._rect)this._rect = cc.rect(0, 0, 0, 0);
    this._rect.x = rect.x;
    this._rect.y = rect.y;
    this._rect.width = rect.width;
    this._rect.height =
        rect.height;
    this._rectInPixels = cc.rectPointsToPixels(this._rect)
}, getOffsetInPixels: function () {
    return cc.p(this._offsetInPixels)
}, setOffsetInPixels: function (offsetInPixels) {
    this._offsetInPixels.x = offsetInPixels.x;
    this._offsetInPixels.y = offsetInPixels.y;
    cc._pointPixelsToPointsOut(this._offsetInPixels, this._offset)
}, getOriginalSizeInPixels: function () {
    return cc.size(this._originalSizeInPixels)
}, setOriginalSizeInPixels: function (sizeInPixels) {
    this._originalSizeInPixels.width = sizeInPixels.width;
    this._originalSizeInPixels.height =
        sizeInPixels.height
}, getOriginalSize: function () {
    return cc.size(this._originalSize)
}, setOriginalSize: function (sizeInPixels) {
    this._originalSize.width = sizeInPixels.width;
    this._originalSize.height = sizeInPixels.height
}, getTexture: function () {
    if (this._texture)return this._texture;
    if (this._textureFilename !== "") {
        var locTexture = cc.textureCache.addImage(this._textureFilename);
        if (locTexture)this._textureLoaded = locTexture.isLoaded();
        return locTexture
    }
    return null
}, setTexture: function (texture) {
    if (this._texture !=
        texture) {
        var locLoaded = texture.isLoaded();
        this._textureLoaded = locLoaded;
        this._texture = texture;
        if (!locLoaded)texture.addLoadedEventListener(function (sender) {
            this._textureLoaded = true;
            if (this._rotated) {
                var tempElement = sender.getHtmlElementObj();
                tempElement = cc.cutRotateImageToCanvas(tempElement, this.getRect());
                var tempTexture = new cc.Texture2D;
                tempTexture.initWithElement(tempElement);
                tempTexture.handleLoadedTexture();
                this.setTexture(tempTexture);
                var rect = this.getRect();
                this.setRect(cc.rect(0, 0, rect.width, rect.height))
            }
            var locRect = this._rect;
            if (locRect.width === 0 && locRect.height === 0) {
                var w = sender.width, h = sender.height;
                this._rect.width = w;
                this._rect.height = h;
                this._rectInPixels = cc.rectPointsToPixels(this._rect);
                this._originalSizeInPixels.width = this._rectInPixels.width;
                this._originalSizeInPixels.height = this._rectInPixels.height;
                this._originalSize.width = w;
                this._originalSize.height = h
            }
            this._callLoadedEventCallbacks()
        }, this)
    }
}, getOffset: function () {
    return cc.p(this._offset)
}, setOffset: function (offsets) {
    this._offset.x = offsets.x;
    this._offset.y = offsets.y
}, clone: function () {
    var frame = new cc.SpriteFrame;
    frame.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
    frame.setTexture(this._texture);
    return frame
}, copyWithZone: function () {
    var copy = new cc.SpriteFrame;
    copy.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
    copy.setTexture(this._texture);
    return copy
}, copy: function () {
    return this.copyWithZone()
}, initWithTexture: function (texture, rect, rotated, offset, originalSize) {
    if (arguments.length === 2)rect = cc.rectPointsToPixels(rect);
    offset = offset || cc.p(0, 0);
    originalSize = originalSize || rect;
    rotated = rotated || false;
    if (typeof texture == "string") {
        this._texture = null;
        this._textureFilename = texture
    } else if (texture instanceof cc.Texture2D)this.setTexture(texture);
    texture = this.getTexture();
    if (texture && texture.url) {
        var _x, _y;
        if (rotated) {
            _x = rect.x + rect.height;
            _y =
                rect.y + rect.width
        } else {
            _x = rect.x + rect.width;
            _y = rect.y + rect.height
        }
        if (_x > texture.width)cc.error(cc._LogInfos.RectWidth, texture.url);
        if (_y > texture.height)cc.error(cc._LogInfos.RectHeight, texture.url)
    }
    this._rectInPixels = rect;
    this._rect = cc.rectPixelsToPoints(rect);
    this._offsetInPixels.x = offset.x;
    this._offsetInPixels.y = offset.y;
    cc._pointPixelsToPointsOut(offset, this._offset);
    this._originalSizeInPixels.width = originalSize.width;
    this._originalSizeInPixels.height = originalSize.height;
    cc._sizePixelsToPointsOut(originalSize,
        this._originalSize);
    this._rotated = rotated;
    return true
}});
cc.SpriteFrame.create = function (filename, rect, rotated, offset, originalSize) {
    return new cc.SpriteFrame(filename, rect, rotated, offset, originalSize)
};
cc.SpriteFrame._frameWithTextureForCanvas = function (texture, rect, rotated, offset, originalSize) {
    var spriteFrame = new cc.SpriteFrame;
    spriteFrame._texture = texture;
    spriteFrame._rectInPixels = rect;
    spriteFrame._rect = cc.rectPixelsToPoints(rect);
    spriteFrame._offsetInPixels.x = offset.x;
    spriteFrame._offsetInPixels.y = offset.y;
    cc._pointPixelsToPointsOut(spriteFrame._offsetInPixels, spriteFrame._offset);
    spriteFrame._originalSizeInPixels.width = originalSize.width;
    spriteFrame._originalSizeInPixels.height = originalSize.height;
    cc._sizePixelsToPointsOut(spriteFrame._originalSizeInPixels, spriteFrame._originalSize);
    spriteFrame._rotated = rotated;
    return spriteFrame
};
cc.spriteFrameCache = {_CCNS_REG1: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/, _CCNS_REG2: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/, _spriteFrames: {}, _spriteFramesAliases: {}, _frameConfigCache: {}, _rectFromString: function (content) {
    var result = this._CCNS_REG2.exec(content);
    if (!result)return cc.rect(0, 0, 0, 0);
    return cc.rect(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3]), parseFloat(result[4]))
}, _pointFromString: function (content) {
    var result = this._CCNS_REG1.exec(content);
    if (!result)return cc.p(0, 0);
    return cc.p(parseFloat(result[1]), parseFloat(result[2]))
}, _sizeFromString: function (content) {
    var result = this._CCNS_REG1.exec(content);
    if (!result)return cc.size(0, 0);
    return cc.size(parseFloat(result[1]), parseFloat(result[2]))
}, _getFrameConfig: function (url) {
    var dict = cc.loader.getRes(url);
    cc.assert(dict, cc._LogInfos.spriteFrameCache__getFrameConfig_2, url);
    cc.loader.release(url);
    if (dict._inited) {
        this._frameConfigCache[url] =
            dict;
        return dict
    }
    var tempFrames = dict["frames"], tempMeta = dict["metadata"] || dict["meta"];
    var frames = {}, meta = {};
    var format = 0;
    if (tempMeta) {
        var tmpFormat = tempMeta["format"];
        format = tmpFormat.length <= 1 ? parseInt(tmpFormat) : tmpFormat;
        meta.image = tempMeta["textureFileName"] || tempMeta["textureFileName"] || tempMeta["image"]
    }
    for (var key in tempFrames) {
        var frameDict = tempFrames[key];
        if (!frameDict)continue;
        var tempFrame = {};
        if (format == 0) {
            tempFrame.rect = cc.rect(frameDict["x"], frameDict["y"], frameDict["width"], frameDict["height"]);
            tempFrame.rotated = false;
            tempFrame.offset = cc.p(frameDict["offsetX"], frameDict["offsetY"]);
            var ow = frameDict["originalWidth"];
            var oh = frameDict["originalHeight"];
            if (!ow || !oh)cc.log(cc._LogInfos.spriteFrameCache__getFrameConfig);
            ow = Math.abs(ow);
            oh = Math.abs(oh);
            tempFrame.size = cc.size(ow, oh)
        } else if (format == 1 || format == 2) {
            tempFrame.rect = this._rectFromString(frameDict["frame"]);
            tempFrame.rotated = frameDict["rotated"] || false;
            tempFrame.offset = this._pointFromString(frameDict["offset"]);
            tempFrame.size = this._sizeFromString(frameDict["sourceSize"])
        } else if (format ==
            3) {
            var spriteSize = this._sizeFromString(frameDict["spriteSize"]);
            var textureRect = this._rectFromString(frameDict["textureRect"]);
            if (spriteSize)textureRect = cc.rect(textureRect.x, textureRect.y, spriteSize.width, spriteSize.height);
            tempFrame.rect = textureRect;
            tempFrame.rotated = frameDict["textureRotated"] || false;
            tempFrame.offset = this._pointFromString(frameDict["spriteOffset"]);
            tempFrame.size = this._sizeFromString(frameDict["spriteSourceSize"]);
            tempFrame.aliases = frameDict["aliases"]
        } else {
            var tmpFrame = frameDict["frame"],
                tmpSourceSize = frameDict["sourceSize"];
            key = frameDict["filename"] || key;
            tempFrame.rect = cc.rect(tmpFrame["x"], tmpFrame["y"], tmpFrame["w"], tmpFrame["h"]);
            tempFrame.rotated = frameDict["rotated"] || false;
            tempFrame.offset = cc.p(0, 0);
            tempFrame.size = cc.size(tmpSourceSize["w"], tmpSourceSize["h"])
        }
        frames[key] = tempFrame
    }
    var cfg = this._frameConfigCache[url] = {_inited: true, frames: frames, meta: meta};
    return cfg
}, addSpriteFrames: function (url, texture) {
    cc.assert(url, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
    var dict =
        this._frameConfigCache[url] || cc.loader.getRes(url);
    if (!dict || !dict["frames"])return;
    var self = this;
    var frameConfig = self._frameConfigCache[url] || self._getFrameConfig(url);
    var frames = frameConfig.frames, meta = frameConfig.meta;
    if (!texture) {
        var texturePath = cc.path.changeBasename(url, meta.image || ".png");
        texture = cc.textureCache.addImage(texturePath)
    } else if (texture instanceof cc.Texture2D); else if (typeof texture == "string")texture = cc.textureCache.addImage(texture); else cc.assert(0, cc._LogInfos.spriteFrameCache_addSpriteFrames_3);
    var spAliases = self._spriteFramesAliases, spriteFrames = self._spriteFrames;
    for (var key in frames) {
        var frame = frames[key];
        var spriteFrame = spriteFrames[key];
        if (!spriteFrame) {
            spriteFrame = cc.SpriteFrame.create(texture, frame.rect, frame.rotated, frame.offset, frame.size);
            var aliases = frame.aliases;
            if (aliases)for (var i = 0, li = aliases.length; i < li; i++) {
                var alias = aliases[i];
                if (spAliases[alias])cc.log(cc._LogInfos.spriteFrameCache_addSpriteFrames, alias);
                spAliases[alias] = key
            }
            if (spriteFrame.isRotated()) {
                var locTexture = spriteFrame.getTexture();
                if (locTexture.isLoaded()) {
                    var tempElement = spriteFrame.getTexture().getHtmlElementObj();
                    tempElement = cc.cutRotateImageToCanvas(tempElement, spriteFrame.getRectInPixels());
                    var tempTexture = new cc.Texture2D;
                    tempTexture.initWithElement(tempElement);
                    tempTexture.handleLoadedTexture();
                    spriteFrame.setTexture(tempTexture);
                    var rect = spriteFrame._rect;
                    spriteFrame.setRect(cc.rect(0, 0, rect.width, rect.height))
                }
            }
            spriteFrames[key] = spriteFrame
        }
    }
}, _checkConflict: function (dictionary) {
    var framesDict =
        dictionary["frames"];
    for (var key in framesDict)if (this._spriteFrames[key])cc.log(cc._LogInfos.spriteFrameCache__checkConflict, key)
}, addSpriteFrame: function (frame, frameName) {
    this._spriteFrames[frameName] = frame
}, removeSpriteFrames: function () {
    this._spriteFrames = {};
    this._spriteFramesAliases = {}
}, removeSpriteFrameByName: function (name) {
    if (!name)return;
    if (this._spriteFramesAliases[name])delete this._spriteFramesAliases[name];
    if (this._spriteFrames[name])delete this._spriteFrames[name]
}, removeSpriteFramesFromFile: function (url) {
    var self =
        this, spriteFrames = self._spriteFrames, aliases = self._spriteFramesAliases, cfg = self._frameConfigCache[url];
    if (!cfg)return;
    var frames = cfg.frames;
    for (var key in frames)if (spriteFrames[key]) {
        delete spriteFrames[key];
        for (var alias in aliases)if (aliases[alias] == key)delete aliases[alias]
    }
}, removeSpriteFramesFromTexture: function (texture) {
    var self = this, spriteFrames = self._spriteFrames, aliases = self._spriteFramesAliases;
    for (var key in spriteFrames) {
        var frame = spriteFrames[key];
        if (frame && frame.getTexture() == texture) {
            delete spriteFrames[key];
            for (var alias in aliases)if (aliases[alias] == key)delete aliases[alias]
        }
    }
}, getSpriteFrame: function (name) {
    var self = this, frame = self._spriteFrames[name];
    if (!frame) {
        var key = self._spriteFramesAliases[name];
        if (key) {
            frame = self._spriteFrames[key.toString()];
            if (!frame)delete self._spriteFramesAliases[name]
        }
    }
    return frame
}, _clear: function () {
    this._spriteFrames = {};
    this._spriteFramesAliases = {};
    this._frameConfigCache = {}
}};
cc.g_NumberOfDraws = 0;
cc.Director = cc.Class.extend({_landscape: false, _nextDeltaTimeZero: false, _paused: false, _purgeDirectorInNextLoop: false, _sendCleanupToScene: false, _animationInterval: 0, _oldAnimationInterval: 0, _projection: 0, _accumDt: 0, _contentScaleFactor: 1, _displayStats: false, _deltaTime: 0, _frameRate: 0, _FPSLabel: null, _SPFLabel: null, _drawsLabel: null, _winSizeInPoints: null, _lastUpdate: null, _nextScene: null, _notificationNode: null, _openGLView: null, _scenesStack: null, _projectionDelegate: null, _runningScene: null, _frames: 0, _totalFrames: 0,
    _secondsPerFrame: 0, _dirtyRegion: null, _scheduler: null, _actionManager: null, _eventProjectionChanged: null, _eventAfterDraw: null, _eventAfterVisit: null, _eventAfterUpdate: null, ctor: function () {
        var self = this;
        self._lastUpdate = Date.now();
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            self._lastUpdate = Date.now()
        })
    }, init: function () {
        this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS;
        this._scenesStack = [];
        this._projection = cc.Director.PROJECTION_DEFAULT;
        this._projectionDelegate = null;
        this._accumDt = 0;
        this._frameRate = 0;
        this._displayStats = false;
        this._totalFrames = this._frames = 0;
        this._lastUpdate = Date.now();
        this._paused = false;
        this._purgeDirectorInNextLoop = false;
        this._winSizeInPoints = cc.size(0, 0);
        this._openGLView = null;
        this._contentScaleFactor = 1;
        this._scheduler = new cc.Scheduler;
        this._actionManager = cc.ActionManager ? new cc.ActionManager : null;
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, false);
        this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW);
        this._eventAfterDraw.setUserData(this);
        this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT);
        this._eventAfterVisit.setUserData(this);
        this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE);
        this._eventAfterUpdate.setUserData(this);
        this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED);
        this._eventProjectionChanged.setUserData(this);
        return true
    }, calculateDeltaTime: function () {
        var now = Date.now();
        if (this._nextDeltaTimeZero) {
            this._deltaTime =
                0;
            this._nextDeltaTimeZero = false
        } else this._deltaTime = (now - this._lastUpdate) / 1E3;
        this._lastUpdate = now
    }, drawScene: function () {
        this.calculateDeltaTime();
        if (!this._paused) {
            this._scheduler.update(this._deltaTime);
            cc.eventManager.dispatchEvent(this._eventAfterUpdate)
        }
        this._clear();
        if (this._nextScene)this.setNextScene();
        if (this._beforeVisitScene)this._beforeVisitScene();
        if (this._runningScene) {
            this._runningScene.visit();
            cc.eventManager.dispatchEvent(this._eventAfterVisit)
        }
        if (this._notificationNode)this._notificationNode.visit();
        if (this._displayStats)this._showStats();
        if (this._afterVisitScene)this._afterVisitScene();
        cc.eventManager.dispatchEvent(this._eventAfterDraw);
        this._totalFrames++;
        if (this._displayStats)this._calculateMPF()
    }, _beforeVisitScene: null, _afterVisitScene: null, end: function () {
        this._purgeDirectorInNextLoop = true
    }, getContentScaleFactor: function () {
        return this._contentScaleFactor
    }, getNotificationNode: function () {
        return this._notificationNode
    },
    getWinSize: function () {
        return cc.size(this._winSizeInPoints)
    }, getWinSizeInPixels: function () {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor)
    }, pause: function () {
        if (this._paused)return;
        this._oldAnimationInterval = this._animationInterval;
        this.setAnimationInterval(1 / 4);
        this._paused = true
    }, popScene: function () {
        cc.assert(this._runningScene, cc._LogInfos.Director_popScene);
        this._scenesStack.pop();
        var c = this._scenesStack.length;
        if (c == 0)this.end();
        else {
            this._sendCleanupToScene = true;
            this._nextScene = this._scenesStack[c - 1]
        }
    }, purgeCachedData: function () {
        cc.animationCache._clear();
        cc.spriteFrameCache._clear();
        cc.textureCache._clear()
    }, purgeDirector: function () {
        this.getScheduler().unscheduleAllCallbacks();
        if (cc.eventManager)cc.eventManager.setEnabled(false);
        if (this._runningScene) {
            this._runningScene.onExitTransitionDidStart();
            this._runningScene.onExit();
            this._runningScene.cleanup()
        }
        this._runningScene = null;
        this._nextScene = null;
        this._scenesStack.length =
            0;
        this.stopAnimation();
        this.purgeCachedData();
    }, pushScene: function (scene) {
        cc.assert(scene, cc._LogInfos.Director_pushScene);
        this._sendCleanupToScene = false;
        this._scenesStack.push(scene);
        this._nextScene = scene
    }, runScene: function (scene) {
        cc.assert(scene, cc._LogInfos.Director_pushScene);
        if (!this._runningScene) {
            this.pushScene(scene);
            this.startAnimation()
        } else {
            var i = this._scenesStack.length;
            if (i === 0) {
                this._sendCleanupToScene = true;
                this._scenesStack[i] = scene;
                this._nextScene = scene
            } else {
                this._sendCleanupToScene =
                    true;
                this._scenesStack[i - 1] = scene;
                this._nextScene = scene
            }
        }
    }, resume: function () {
        if (!this._paused)return;
        this.setAnimationInterval(this._oldAnimationInterval);
        this._lastUpdate = Date.now();
        if (!this._lastUpdate)cc.log(cc._LogInfos.Director_resume);
        this._paused = false;
        this._deltaTime = 0
    }, setContentScaleFactor: function (scaleFactor) {
        if (scaleFactor != this._contentScaleFactor) {
            this._contentScaleFactor = scaleFactor;
            this._createStatsLabel()
        }
    }, setDefaultValues: function () {
    }, setNextDeltaTimeZero: function (nextDeltaTimeZero) {
        this._nextDeltaTimeZero =
            nextDeltaTimeZero
    }, setNextScene: function () {
        var runningIsTransition = false, newIsTransition = false;
        if (cc.TransitionScene) {
            runningIsTransition = this._runningScene ? this._runningScene instanceof cc.TransitionScene : false;
            newIsTransition = this._nextScene ? this._nextScene instanceof cc.TransitionScene : false
        }
        if (!newIsTransition) {
            var locRunningScene = this._runningScene;
            if (locRunningScene) {
                locRunningScene.onExitTransitionDidStart();
                locRunningScene.onExit()
            }
            if (this._sendCleanupToScene && locRunningScene)locRunningScene.cleanup()
        }
        this._runningScene =
            this._nextScene;
        this._nextScene = null;
        if (!runningIsTransition && this._runningScene != null) {
            this._runningScene.onEnter();
            this._runningScene.onEnterTransitionDidFinish()
        }
    }, setNotificationNode: function (node) {
        this._notificationNode = node
    }, getDelegate: function () {
        return this._projectionDelegate
    }, setDelegate: function (delegate) {
        this._projectionDelegate = delegate
    }, _showStats: function () {
        this._frames++;
        this._accumDt += this._deltaTime;
        if (this._FPSLabel && this._SPFLabel && this._drawsLabel) {
            if (this._accumDt > cc.DIRECTOR_FPS_INTERVAL) {
                this._SPFLabel.string =
                    this._secondsPerFrame.toFixed(3);
                this._frameRate = this._frames / this._accumDt;
                this._frames = 0;
                this._accumDt = 0;
                this._FPSLabel.string = this._frameRate.toFixed(1);
                this._drawsLabel.string = (0 | cc.g_NumberOfDraws).toString()
            }
            this._FPSLabel.visit();
            this._SPFLabel.visit();
            this._drawsLabel.visit()
        } else this._createStatsLabel();
        cc.g_NumberOfDraws = 0
    }, isSendCleanupToScene: function () {
        return this._sendCleanupToScene
    }, getRunningScene: function () {
        return this._runningScene
    }, getAnimationInterval: function () {
        return this._animationInterval
    },
    isDisplayStats: function () {
        return this._displayStats
    }, setDisplayStats: function (displayStats) {
        this._displayStats = displayStats
    }, getSecondsPerFrame: function () {
        return this._secondsPerFrame
    }, isNextDeltaTimeZero: function () {
        return this._nextDeltaTimeZero
    }, isPaused: function () {
        return this._paused
    }, getTotalFrames: function () {
        return this._totalFrames
    }, popToRootScene: function () {
        this.popToSceneStackLevel(1)
    }, popToSceneStackLevel: function (level) {
        cc.assert(this._runningScene, cc._LogInfos.Director_popToSceneStackLevel_2);
        var locScenesStack = this._scenesStack;
        var c = locScenesStack.length;
        if (c == 0) {
            this.end();
            return
        }
        if (level > c)return;
        while (c > level) {
            var current = locScenesStack.pop();
            if (current.running) {
                current.onExitTransitionDidStart();
                current.onExit()
            }
            current.cleanup();
            c--
        }
        this._nextScene = locScenesStack[locScenesStack.length - 1];
        this._sendCleanupToScene = false
    }, getScheduler: function () {
        return this._scheduler
    }, setScheduler: function (scheduler) {
        if (this._scheduler != scheduler)this._scheduler = scheduler
    }, getActionManager: function () {
        return this._actionManager
    },
    setActionManager: function (actionManager) {
        if (this._actionManager != actionManager)this._actionManager = actionManager
    }, getDeltaTime: function () {
        return this._deltaTime
    }, _createStatsLabel: null, _calculateMPF: function () {
        var now = Date.now();
        this._secondsPerFrame = (now - this._lastUpdate) / 1E3
    }});
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
cc.DisplayLinkDirector = cc.Director.extend({invalid: false, startAnimation: function () {
    this._nextDeltaTimeZero = true;
    this.invalid = false
}, mainLoop: function () {
    if (this._purgeDirectorInNextLoop) {
        this._purgeDirectorInNextLoop = false;
        this.purgeDirector()
    } else if (!this.invalid)this.drawScene()
}, stopAnimation: function () {
    this.invalid = true
}, setAnimationInterval: function (value) {
    this._animationInterval = value;
    if (!this.invalid) {
        this.stopAnimation();
        this.startAnimation()
    }
}});
cc.Director.sharedDirector = null;
cc.Director.firstUseDirector = true;
cc.Director._getInstance = function () {
    if (cc.Director.firstUseDirector) {
        cc.Director.firstUseDirector = false;
        cc.Director.sharedDirector = new cc.DisplayLinkDirector;
        cc.Director.sharedDirector.init()
    }
    return cc.Director.sharedDirector
};
cc.defaultFPS = 60;
cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D;

var _p = cc.Director.prototype;
_p.setProjection = function (projection) {
    this._projection = projection;
    cc.eventManager.dispatchEvent(this._eventProjectionChanged)
};
_p.setDepthTest = function () {
};
_p.setOpenGLView = function (openGLView) {
    this._winSizeInPoints.width = cc._canvas.width;
    this._winSizeInPoints.height = cc._canvas.height;
    this._openGLView = openGLView || cc.view;
    if (cc.eventManager)cc.eventManager.setEnabled(true)
};
_p._clear = function () {
    var viewport = this._openGLView.getViewPortRect();
    cc._renderContext.clearRect(-viewport.x, viewport.y, viewport.width, -viewport.height)
};
_p._createStatsLabel = function () {
    var _t = this;
    var fontSize = 0;
    if (_t._winSizeInPoints.width > _t._winSizeInPoints.height)fontSize = 0 | _t._winSizeInPoints.height / 320 * 24; else fontSize = 0 | _t._winSizeInPoints.width / 320 * 24;
    _t._FPSLabel = cc.LabelTTF.create("000.0", "Arial", fontSize);
    _t._SPFLabel = cc.LabelTTF.create("0.000", "Arial", fontSize);
    _t._drawsLabel = cc.LabelTTF.create("0000", "Arial", fontSize);
    var locStatsPosition = cc.DIRECTOR_STATS_POSITION;
    _t._drawsLabel.setPosition(_t._drawsLabel.width / 2 + locStatsPosition.x, _t._drawsLabel.height * 5 / 2 + locStatsPosition.y);
    _t._SPFLabel.setPosition(_t._SPFLabel.width / 2 + locStatsPosition.x, _t._SPFLabel.height * 3 / 2 + locStatsPosition.y);
    _t._FPSLabel.setPosition(_t._FPSLabel.width / 2 + locStatsPosition.x, _t._FPSLabel.height / 2 + locStatsPosition.y)
};
_p.getVisibleSize = function () {
    return this.getWinSize()
};
_p.getVisibleOrigin = function () {
    return cc.p(0, 0)
}

cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;
cc.arrayVerifyType = function (arr, type) {
    if (arr && arr.length > 0)for (var i = 0; i < arr.length; i++)if (!(arr[i]instanceof type)) {
        cc.log(cc._LogInfos.arrayVerifyType);
        return false
    }
    return true
};
cc.arrayRemoveObject = function (arr, delObj) {
    for (var i = 0, l = arr.length; i < l; i++)if (arr[i] == delObj) {
        arr.splice(i, 1);
        break
    }
};
cc.arrayRemoveArray = function (arr, minusArr) {
    for (var i = 0, l = minusArr.length; i < l; i++)cc.arrayRemoveObject(arr, minusArr[i])
};
cc.arrayAppendObjectsToIndex = function (arr, addObjs, index) {
    arr.splice.apply(arr, [index, 0].concat(addObjs));
    return arr
};
cc.ListEntry = function (prev, next, target, priority, paused, markedForDeletion) {
    this.prev = prev;
    this.next = next;
    this.target = target;
    this.priority = priority;
    this.paused = paused;
    this.markedForDeletion = markedForDeletion
};
cc.HashUpdateEntry = function (list, entry, target, hh) {
    this.list = list;
    this.entry = entry;
    this.target = target;
    this.hh = hh
};
cc.HashTimerEntry = function (timers, target, timerIndex, currentTimer, currentTimerSalvaged, paused, hh) {
    var _t = this;
    _t.timers = timers;
    _t.target = target;
    _t.timerIndex = timerIndex;
    _t.currentTimer = currentTimer;
    _t.currentTimerSalvaged = currentTimerSalvaged;
    _t.paused = paused;
    _t.hh = hh
};
cc.Timer = cc.Class.extend({_interval: 0, _callback: null, _target: null, _elapsed: 0, _runForever: false, _useDelay: false, _timesExecuted: 0, _repeat: 0, _delay: 0, getInterval: function () {
    return this._interval
}, setInterval: function (interval) {
    this._interval = interval
}, getCallback: function () {
    return this._callback
}, ctor: function (target, callback, interval, repeat, delay) {
    var self = this;
    self._target = target;
    self._callback = callback;
    self._elapsed = -1;
    self._interval = interval || 0;
    self._delay = delay || 0;
    self._useDelay = self._delay > 0;
    self._repeat =
            repeat == null ? cc.REPEAT_FOREVER : repeat;
    self._runForever = self._repeat == cc.REPEAT_FOREVER
}, _doCallback: function () {
    var self = this;
    if (typeof self._callback == "string")self._target[self._callback](self._elapsed); else self._callback.call(self._target, self._elapsed)
}, update: function (dt) {
    var self = this;
    if (self._elapsed == -1) {
        self._elapsed = 0;
        self._timesExecuted = 0
    } else {
        var locTarget = self._target, locCallback = self._callback;
        self._elapsed += dt;
        if (self._runForever && !self._useDelay) {
            if (self._elapsed >= self._interval) {
                if (locTarget &&
                    locCallback)self._doCallback();
                self._elapsed = 0
            }
        } else {
            if (self._useDelay) {
                if (self._elapsed >= self._delay) {
                    if (locTarget && locCallback)self._doCallback();
                    self._elapsed = self._elapsed - self._delay;
                    self._timesExecuted += 1;
                    self._useDelay = false
                }
            } else if (self._elapsed >= self._interval) {
                if (locTarget && locCallback)self._doCallback();
                self._elapsed = 0;
                self._timesExecuted += 1
            }
            if (self._timesExecuted > self._repeat)cc.director.getScheduler().unscheduleCallbackForTarget(locTarget, locCallback)
        }
    }
}});
cc.Scheduler = cc.Class.extend({_timeScale: 1, _updates: null, _hashForUpdates: null, _arrayForUpdates: null, _hashForTimers: null, _arrayForTimes: null, _currentTarget: null, _currentTargetSalvaged: false, _updateHashLocked: false, ctor: function () {
    var self = this;
    self._timeScale = 1;
    self._updates = [
        [],
        [],
        []
    ];
    self._hashForUpdates = {};
    self._arrayForUpdates = [];
    self._hashForTimers = {};
    self._arrayForTimers = [];
    self._currentTarget = null;
    self._currentTargetSalvaged = false;
    self._updateHashLocked = false
}, _removeHashElement: function (element) {
    delete this._hashForTimers[element.target.__instanceId];
    cc.arrayRemoveObject(this._arrayForTimers, element);
    element.Timer = null;
    element.target = null;
    element = null
}, _removeUpdateFromHash: function (entry) {
    var self = this, element = self._hashForUpdates[entry.target.__instanceId];
    if (element) {
        cc.arrayRemoveObject(element.list, element.entry);
        delete self._hashForUpdates[element.target.__instanceId];
        cc.arrayRemoveObject(self._arrayForUpdates, element);
        element.entry = null;
        element.target = null
    }
}, _priorityIn: function (ppList, target, priority, paused) {
    var self = this, listElement =
        new cc.ListEntry(null, null, target, priority, paused, false);
    if (!ppList) {
        ppList = [];
        ppList.push(listElement)
    } else {
        var index2Insert = ppList.length - 1;
        for (var i = 0; i <= index2Insert; i++)if (priority < ppList[i].priority) {
            index2Insert = i;
            break
        }
        ppList.splice(i, 0, listElement)
    }
    var hashElement = new cc.HashUpdateEntry(ppList, listElement, target, null);
    self._arrayForUpdates.push(hashElement);
    self._hashForUpdates[target.__instanceId] = hashElement;
    return ppList
}, _appendIn: function (ppList, target, paused) {
    var self = this, listElement =
        new cc.ListEntry(null, null, target, 0, paused, false);
    ppList.push(listElement);
    var hashElement = new cc.HashUpdateEntry(ppList, listElement, target, null);
    self._arrayForUpdates.push(hashElement);
    self._hashForUpdates[target.__instanceId] = hashElement
}, setTimeScale: function (timeScale) {
    this._timeScale = timeScale
}, getTimeScale: function () {
    return this._timeScale
}, update: function (dt) {
    var self = this;
    var locUpdates = self._updates, locArrayForTimers = self._arrayForTimers;
    var tmpEntry, elt, i, li;
    self._updateHashLocked = true;
    if (this._timeScale != 1)dt *= this._timeScale;
    for (i = 0, li = locUpdates.length; i < li && i >= 0; i++) {
        var update = self._updates[i];
        for (var j = 0, lj = update.length; j < lj; j++) {
            tmpEntry = update[j];
            if (!tmpEntry.paused && !tmpEntry.markedForDeletion)tmpEntry.target.update(dt)
        }
    }
    for (i = 0, li = locArrayForTimers.length; i < li; i++) {
        elt = locArrayForTimers[i];
        if (!elt)break;
        self._currentTarget = elt;
        self._currentTargetSalvaged = false;
        if (!elt.paused)for (elt.timerIndex = 0; elt.timerIndex < elt.timers.length; elt.timerIndex++) {
            elt.currentTimer = elt.timers[elt.timerIndex];
            elt.currentTimerSalvaged = false;
            elt.currentTimer.update(dt);
            elt.currentTimer = null
        }
        if (self._currentTargetSalvaged && elt.timers.length == 0) {
            self._removeHashElement(elt);
            i--
        }
    }
    for (i = 0, li = locUpdates.length; i < li; i++) {
        var update = self._updates[i];
        for (var j = 0, lj = update.length; j < lj;) {
            tmpEntry = update[j];
            if (!tmpEntry)break;
            if (tmpEntry.markedForDeletion)self._removeUpdateFromHash(tmpEntry); else j++
        }
    }
    self._updateHashLocked = false;
    self._currentTarget = null
}, scheduleCallbackForTarget: function (target, callback_fn, interval, repeat, delay, paused) {
    cc.assert(callback_fn, cc._LogInfos.Scheduler_scheduleCallbackForTarget_2);
    cc.assert(target, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
    interval = interval || 0;
    repeat = repeat == null ? cc.REPEAT_FOREVER : repeat;
    delay = delay || 0;
    paused = paused || false;
    var self = this, timer;
    var element = self._hashForTimers[target.__instanceId];
    if (!element) {
        element = new cc.HashTimerEntry(null, target, 0, null, null, paused, null);
        self._arrayForTimers.push(element);
        self._hashForTimers[target.__instanceId] = element
    }
    if (element.timers ==
        null)element.timers = []; else for (var i = 0; i < element.timers.length; i++) {
        timer = element.timers[i];
        if (callback_fn == timer._callback) {
            cc.log(cc._LogInfos.Scheduler_scheduleCallbackForTarget, timer.getInterval().toFixed(4), interval.toFixed(4));
            timer._interval = interval;
            return
        }
    }
    timer = new cc.Timer(target, callback_fn, interval, repeat, delay);
    element.timers.push(timer)
}, scheduleUpdateForTarget: function (target, priority, paused) {
    if (target === null)return;
    var self = this, locUpdates = self._updates;
    var hashElement = self._hashForUpdates[target.__instanceId];
    if (hashElement) {
        hashElement.entry.markedForDeletion = false;
        return
    }
    if (priority == 0)self._appendIn(locUpdates[1], target, paused); else if (priority < 0)locUpdates[0] = self._priorityIn(locUpdates[0], target, priority, paused); else locUpdates[2] = self._priorityIn(locUpdates[2], target, priority, paused)
}, unscheduleCallbackForTarget: function (target, callback_fn) {
    if (target == null || callback_fn == null)return;
    var self = this, element = self._hashForTimers[target.__instanceId];
    if (element) {
        var timers = element.timers;
        for (var i = 0, li =
            timers.length; i < li; i++) {
            var timer = timers[i];
            if (callback_fn == timer._callback) {
                if (timer == element.currentTimer && !element.currentTimerSalvaged)element.currentTimerSalvaged = true;
                timers.splice(i, 1);
                if (element.timerIndex >= i)element.timerIndex--;
                if (timers.length == 0)if (self._currentTarget == element)self._currentTargetSalvaged = true; else self._removeHashElement(element);
                return
            }
        }
    }
}, unscheduleUpdateForTarget: function (target) {
    if (target == null)return;
    var self = this, element = self._hashForUpdates[target.__instanceId];
    if (element != null)if (self._updateHashLocked)element.entry.markedForDeletion = true; else self._removeUpdateFromHash(element.entry)
}, unscheduleAllCallbacksForTarget: function (target) {
    if (target == null)return;
    var self = this, element = self._hashForTimers[target.__instanceId];
    if (element) {
        var timers = element.timers;
        if (!element.currentTimerSalvaged && timers.indexOf(element.currentTimer) >= 0)element.currentTimerSalvaged = true;
        timers.length = 0;
        if (self._currentTarget == element)self._currentTargetSalvaged = true; else self._removeHashElement(element)
    }
    self.unscheduleUpdateForTarget(target)
}, unscheduleAllCallbacks: function () {
    this.unscheduleAllCallbacksWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
}, unscheduleAllCallbacksWithMinPriority: function (minPriority) {
    var self = this, locArrayForTimers = self._arrayForTimers, locUpdates = self._updates;
    for (var i = 0, li = locArrayForTimers.length; i < li; i++)self.unscheduleAllCallbacksForTarget(locArrayForTimers[i].target);
    for (var i = 2; i >= 0; i--) {
        if (i == 1 && minPriority > 0 || i == 0 && minPriority >= 0)continue;
        var updates = locUpdates[i];
        for (var j = 0, lj = updates.length; j < lj; j++)self.unscheduleUpdateForTarget(updates[j].target)
    }
},
pauseAllTargets: function () {
    return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
}, pauseAllTargetsWithMinPriority: function (minPriority) {
    var idsWithSelectors = [];
    var self = this, element, locArrayForTimers = self._arrayForTimers, locUpdates = self._updates;
    for (var i = 0, li = locArrayForTimers.length; i < li; i++) {
        element = locArrayForTimers[i];
        if (element) {
            element.paused = true;
            idsWithSelectors.push(element.target)
        }
    }
    for (var i = 0, li = locUpdates.length; i < li; i++) {
        var updates = locUpdates[i];
        for (var j = 0, lj = updates.length; j <
            lj; j++) {
            element = updates[j];
            if (element) {
                element.paused = true;
                idsWithSelectors.push(element.target)
            }
        }
    }
    return idsWithSelectors
}, resumeTargets: function (targetsToResume) {
    if (!targetsToResume)return;
    for (var i = 0; i < targetsToResume.length; i++)this.resumeTarget(targetsToResume[i])
}, pauseTarget: function (target) {
    cc.assert(target, cc._LogInfos.Scheduler_pauseTarget);
    var self = this, element = self._hashForTimers[target.__instanceId];
    if (element)element.paused = true;
    var elementUpdate = self._hashForUpdates[target.__instanceId];
    if (elementUpdate)elementUpdate.entry.paused = true
}, resumeTarget: function (target) {
    cc.assert(target, cc._LogInfos.Scheduler_resumeTarget);
    var self = this, element = self._hashForTimers[target.__instanceId];
    if (element)element.paused = false;
    var elementUpdate = self._hashForUpdates[target.__instanceId];
    if (elementUpdate)elementUpdate.entry.paused = false
}, isTargetPaused: function (target) {
    cc.assert(target, cc._LogInfos.Scheduler_isTargetPaused);
    var element = this._hashForTimers[target.__instanceId];
    if (element)return element.paused;
    return false
}});
cc.Scheduler.PRIORITY_SYSTEM = -2147483647 - 1;
cc._tmp.PrototypeLabelTTF = function () {
    var _p = cc.LabelTTF.prototype;
    cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
    cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
    _p.string;
    cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
    _p.textAlign;
    cc.defineGetterSetter(_p, "textAlign", _p.getHorizontalAlignment, _p.setHorizontalAlignment);
    _p.verticalAlign;
    cc.defineGetterSetter(_p, "verticalAlign", _p.getVerticalAlignment, _p.setVerticalAlignment);
    _p.fontSize;
    cc.defineGetterSetter(_p,
        "fontSize", _p.getFontSize, _p.setFontSize);
    _p.fontName;
    cc.defineGetterSetter(_p, "fontName", _p.getFontName, _p.setFontName);
    _p.font;
    cc.defineGetterSetter(_p, "font", _p._getFont, _p._setFont);
    _p.boundingSize;
    _p.boundingWidth;
    cc.defineGetterSetter(_p, "boundingWidth", _p._getBoundingWidth, _p._setBoundingWidth);
    _p.boundingHeight;
    cc.defineGetterSetter(_p, "boundingHeight", _p._getBoundingHeight, _p._setBoundingHeight);
    _p.fillStyle;
    cc.defineGetterSetter(_p, "fillStyle", _p._getFillStyle, _p.setFontFillColor);
    _p.strokeStyle;
    cc.defineGetterSetter(_p, "strokeStyle", _p._getStrokeStyle, _p._setStrokeStyle);
    _p.lineWidth;
    cc.defineGetterSetter(_p, "lineWidth", _p._getLineWidth, _p._setLineWidth);
    _p.shadowOffset;
    _p.shadowOffsetX;
    cc.defineGetterSetter(_p, "shadowOffsetX", _p._getShadowOffsetX, _p._setShadowOffsetX);
    _p.shadowOffsetY;
    cc.defineGetterSetter(_p, "shadowOffsetY", _p._getShadowOffsetY, _p._setShadowOffsetY);
    _p.shadowOpacity;
    cc.defineGetterSetter(_p, "shadowOpacity", _p._getShadowOpacity, _p._setShadowOpacity);
    _p.shadowBlur;
    cc.defineGetterSetter(_p,
        "shadowBlur", _p._getShadowBlur, _p._setShadowBlur)
};
cc.LabelTTF = cc.Sprite.extend({_dimensions: null, _hAlignment: cc.TEXT_ALIGNMENT_CENTER, _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP, _fontName: null, _fontSize: 0, _string: "", _originalText: null, _isMultiLine: false, _fontStyleStr: null, _shadowEnabled: false, _shadowOffset: null, _shadowOpacity: 0, _shadowBlur: 0, _shadowColorStr: null, _strokeEnabled: false, _strokeColor: null, _strokeSize: 0, _strokeColorStr: null, _textFillColor: null, _fillColorStr: null, _strokeShadowOffsetX: 0, _strokeShadowOffsetY: 0, _needUpdateTexture: false, _labelCanvas: null,
    _labelContext: null, _lineWidths: null, _className: "LabelTTF", ctor: function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
        cc.Sprite.prototype.ctor.call(this);
        this._dimensions = cc.size(0, 0);
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT;
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = false;
        this._fontStyleStr = "";
        this._fontName = "Arial";
        this._isMultiLine = false;
        this._shadowEnabled = false;
        this._shadowOffset = cc.p(0, 0);
        this._shadowOpacity = 0;
        this._shadowBlur = 0;
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)";
        this._strokeEnabled = false;
        this._strokeColor = cc.color(255, 255, 255, 255);
        this._strokeSize = 0;
        this._strokeColorStr = "";
        this._textFillColor = cc.color(255, 255, 255, 255);
        this._fillColorStr = "rgba(255,255,255,1)";
        this._strokeShadowOffsetX = 0;
        this._strokeShadowOffsetY = 0;
        this._needUpdateTexture = false;
        this._lineWidths = [];
        this._setColorsString();
        if (fontName && fontName instanceof cc.FontDefinition)this.initWithStringAndTextDefinition(text, fontName); else cc.LabelTTF.prototype.initWithString.call(this, text, fontName, fontSize,
            dimensions, hAlignment, vAlignment)
    }, init: function () {
        return this.initWithString(" ", this._fontName, this._fontSize)
    }, _measureConfig: function () {
        this._getLabelContext().font = this._fontStyleStr
    }, _measure: function (text) {
        return this._getLabelContext().measureText(text).width
    }, _checkNextline: function (text, width) {
        var tWidth = this._measure(text);
        var baseNb = Math.floor(text.length * width / tWidth);
        var nextlinebreak = text.indexOf("\n");
        if (baseNb * 0.8 >= nextlinebreak && nextlinebreak > 0)return nextlinebreak + 1;
        if (tWidth < width)return text.length;
        var found = false, l = width + 1, idfound = -1, index = baseNb, result, re = cc.LabelTTF._checkRegEx, reversre = cc.LabelTTF._reverseCheckRegEx, enre = cc.LabelTTF._checkEnRegEx, substr = text.substr(baseNb);
        while (result = re.exec(substr)) {
            index += result[0].length;
            var tem = text.substr(0, index);
            l = this._measure(tem);
            if (result[2] == "\n" && l < width) {
                found = true;
                idfound = index;
                break
            }
            if (l > width) {
                if (idfound != -1)found = true;
                break
            }
            idfound = index;
            substr = text.substr(index)
        }
        if (found)return idfound;
        substr = text.substr(0, baseNb);
        idfound = baseNb;
        while (result =
            reversre.exec(substr)) {
            idfound = result[1].length;
            substr = result[1];
            l = this._measure(substr);
            if (l < width) {
                if (enre.test(result[2]))idfound++;
                break
            }
        }
        return idfound || 1
    }, description: function () {
        return"\x3ccc.LabelTTF | FontName \x3d" + this._fontName + " FontSize \x3d " + this._fontSize.toFixed(1) + "\x3e"
    }, setColor: null, _setColorsString: null, updateDisplayedColor: null, setOpacity: null, updateDisplayedOpacity: null, updateDisplayedOpacityForCanvas: function (parentOpacity) {
        cc.Node.prototype.updateDisplayedOpacity.call(this,
            parentOpacity);
        this._setColorsString()
    }, getString: function () {
        return this._string
    }, getHorizontalAlignment: function () {
        return this._hAlignment
    }, getVerticalAlignment: function () {
        return this._vAlignment
    }, getDimensions: function () {
        return cc.size(this._dimensions)
    }, getFontSize: function () {
        return this._fontSize
    }, getFontName: function () {
        return this._fontName
    }, initWithString: function (label, fontName, fontSize, dimensions, hAlignment, vAlignment) {
        var strInfo;
        if (label)strInfo = label + ""; else strInfo = "";
        fontSize = fontSize ||
            16;
        dimensions = dimensions || cc.size(0, fontSize);
        hAlignment = hAlignment || cc.TEXT_ALIGNMENT_LEFT;
        vAlignment = vAlignment || cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = false;
        this._dimensions = cc.size(dimensions.width, dimensions.height);
        this._fontName = fontName || "Arial";
        this._hAlignment = hAlignment;
        this._vAlignment = vAlignment;
        this._fontSize = fontSize;
        this._fontStyleStr = this._fontSize + "px '" + fontName + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(fontName, this._fontSize);
        this.string = strInfo;
        this._setColorsString();
        this._updateTexture();
        this._needUpdateTexture = false;
        return true
    }, initWithStringAndTextDefinition: null, setTextDefinition: function (theDefinition) {
        if (theDefinition)this._updateWithTextDefinition(theDefinition, true)
    }, getTextDefinition: function () {
        return this._prepareTextDefinition(false)
    }, enableShadow: function (shadowOffsetX, shadowOffsetY, shadowOpacity, shadowBlur) {
        shadowOpacity = shadowOpacity || 0.5;
        if (false === this._shadowEnabled)this._shadowEnabled = true;
        var locShadowOffset = this._shadowOffset;
        if (locShadowOffset && locShadowOffset.x != shadowOffsetX || locShadowOffset._y != shadowOffsetY) {
            locShadowOffset.x = shadowOffsetX;
            locShadowOffset.y = shadowOffsetY
        }
        if (this._shadowOpacity != shadowOpacity)this._shadowOpacity = shadowOpacity;
        this._setColorsString();
        if (this._shadowBlur != shadowBlur)this._shadowBlur = shadowBlur;
        this._needUpdateTexture = true
    }, _getShadowOffsetX: function () {
        return this._shadowOffset.x
    }, _setShadowOffsetX: function (x) {
        if (false === this._shadowEnabled)this._shadowEnabled = true;
        if (this._shadowOffset.x !=
            x) {
            this._shadowOffset.x = x;
            this._needUpdateTexture = true
        }
    }, _getShadowOffsetY: function () {
        return this._shadowOffset._y
    }, _setShadowOffsetY: function (y) {
        if (false === this._shadowEnabled)this._shadowEnabled = true;
        if (this._shadowOffset._y != y) {
            this._shadowOffset._y = y;
            this._needUpdateTexture = true
        }
    }, _getShadowOffset: function () {
        return cc.p(this._shadowOffset.x, this._shadowOffset.y)
    }, _setShadowOffset: function (offset) {
        if (false === this._shadowEnabled)this._shadowEnabled = true;
        if (this._shadowOffset.x != offset.x || this._shadowOffset.y !=
            offset.y) {
            this._shadowOffset.x = offset.x;
            this._shadowOffset.y = offset.y;
            this._needUpdateTexture = true
        }
    }, _getShadowOpacity: function () {
        return this._shadowOpacity
    }, _setShadowOpacity: function (shadowOpacity) {
        if (false === this._shadowEnabled)this._shadowEnabled = true;
        if (this._shadowOpacity != shadowOpacity) {
            this._shadowOpacity = shadowOpacity;
            this._setColorsString();
            this._needUpdateTexture = true
        }
    }, _getShadowBlur: function () {
        return this._shadowBlur
    }, _setShadowBlur: function (shadowBlur) {
        if (false === this._shadowEnabled)this._shadowEnabled =
            true;
        if (this._shadowBlur != shadowBlur) {
            this._shadowBlur = shadowBlur;
            this._needUpdateTexture = true
        }
    }, disableShadow: function () {
        if (this._shadowEnabled) {
            this._shadowEnabled = false;
            this._needUpdateTexture = true
        }
    }, enableStroke: function (strokeColor, strokeSize) {
        if (this._strokeEnabled === false)this._strokeEnabled = true;
        var locStrokeColor = this._strokeColor;
        if (locStrokeColor.r !== strokeColor.r || locStrokeColor.g !== strokeColor.g || locStrokeColor.b !== strokeColor.b) {
            locStrokeColor.r = strokeColor.r;
            locStrokeColor.g = strokeColor.g;
            locStrokeColor.b = strokeColor.b;
            this._setColorsString()
        }
        if (this._strokeSize !== strokeSize)this._strokeSize = strokeSize || 0;
        this._needUpdateTexture = true
    }, _getStrokeStyle: function () {
        return this._strokeColor
    }, _setStrokeStyle: function (strokeStyle) {
        if (this._strokeEnabled === false)this._strokeEnabled = true;
        var locStrokeColor = this._strokeColor;
        if (locStrokeColor.r !== strokeStyle.r || locStrokeColor.g !== strokeStyle.g || locStrokeColor.b !== strokeStyle.b) {
            locStrokeColor.r = strokeStyle.r;
            locStrokeColor.g = strokeStyle.g;
            locStrokeColor.b =
                strokeStyle.b;
            this._setColorsString();
            this._needUpdateTexture = true
        }
    }, _getLineWidth: function () {
        return this._strokeSize
    }, _setLineWidth: function (lineWidth) {
        if (this._strokeEnabled === false)this._strokeEnabled = true;
        if (this._strokeSize !== lineWidth) {
            this._strokeSize = lineWidth || 0;
            this._needUpdateTexture = true
        }
    }, disableStroke: function () {
        if (this._strokeEnabled) {
            this._strokeEnabled = false;
            this._needUpdateTexture = true
        }
    }, setFontFillColor: null, _getFillStyle: function () {
        return this._textFillColor
    }, _updateWithTextDefinition: function (textDefinition, mustUpdateTexture) {
        if (textDefinition.fontDimensions) {
            this._dimensions.width = textDefinition.boundingWidth;
            this._dimensions.height = textDefinition.boundingHeight
        } else {
            this._dimensions.width = 0;
            this._dimensions.height = 0
        }
        this._hAlignment = textDefinition.textAlign;
        this._vAlignment = textDefinition.verticalAlign;
        this._fontName = textDefinition.fontName;
        this._fontSize = textDefinition.fontSize || 12;
        this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName,
            this._fontSize);
        if (textDefinition.shadowEnabled)this.enableShadow(textDefinition.shadowOffsetX, textDefinition.shadowOffsetY, textDefinition.shadowOpacity, textDefinition.shadowBlur);
        if (textDefinition.strokeEnabled)this.enableStroke(textDefinition.strokeStyle, textDefinition.lineWidth);
        this.setFontFillColor(textDefinition.fillStyle);
        if (mustUpdateTexture)this._updateTexture()
    }, _prepareTextDefinition: function (adjustForResolution) {
        var texDef = new cc.FontDefinition;
        if (adjustForResolution) {
            texDef.fontSize =
                this._fontSize;
            texDef.boundingWidth = cc.contentScaleFactor() * this._dimensions.width;
            texDef.boundingHeight = cc.contentScaleFactor() * this._dimensions.height
        } else {
            texDef.fontSize = this._fontSize;
            texDef.boundingWidth = this._dimensions.width;
            texDef.boundingHeight = this._dimensions.height
        }
        texDef.fontName = this._fontName;
        texDef.textAlign = this._hAlignment;
        texDef.verticalAlign = this._vAlignment;
        if (this._strokeEnabled) {
            texDef.strokeEnabled = true;
            var locStrokeColor = this._strokeColor;
            texDef.strokeStyle = cc.color(locStrokeColor.r,
                locStrokeColor.g, locStrokeColor.b);
            texDef.lineWidth = this._strokeSize
        } else texDef.strokeEnabled = false;
        if (this._shadowEnabled) {
            texDef.shadowEnabled = true;
            texDef.shadowBlur = this._shadowBlur;
            texDef.shadowOpacity = this._shadowOpacity;
            texDef.shadowOffsetX = (adjustForResolution ? cc.contentScaleFactor() : 1) * this._shadowOffset.x;
            texDef.shadowOffsetY = (adjustForResolution ? cc.contentScaleFactor() : 1) * this._shadowOffset.y
        } else texDef._shadowEnabled = false;
        var locTextFillColor = this._textFillColor;
        texDef.fillStyle = cc.color(locTextFillColor.r,
            locTextFillColor.g, locTextFillColor.b);
        return texDef
    }, _fontClientHeight: 18, setString: function (text) {
        text = String(text);
        if (this._originalText != text) {
            this._originalText = text + "";
            this._updateString();
            this._needUpdateTexture = true
        }
    }, _updateString: function () {
        this._string = this._originalText
    }, setHorizontalAlignment: function (alignment) {
        if (alignment !== this._hAlignment) {
            this._hAlignment = alignment;
            this._needUpdateTexture = true
        }
    }, setVerticalAlignment: function (verticalAlignment) {
        if (verticalAlignment != this._vAlignment) {
            this._vAlignment =
                verticalAlignment;
            this._needUpdateTexture = true
        }
    }, setDimensions: function (dim, height) {
        var width;
        if (height === undefined) {
            width = dim.width;
            height = dim.height
        } else width = dim;
        if (width != this._dimensions.width || height != this._dimensions.height) {
            this._dimensions.width = width;
            this._dimensions.height = height;
            this._updateString();
            this._needUpdateTexture = true
        }
    }, _getBoundingWidth: function () {
        return this._dimensions.width
    }, _setBoundingWidth: function (width) {
        if (width != this._dimensions.width) {
            this._dimensions.width = width;
            this._updateString();
            this._needUpdateTexture = true
        }
    }, _getBoundingHeight: function () {
        return this._dimensions.height
    }, _setBoundingHeight: function (height) {
        if (height != this._dimensions.height) {
            this._dimensions.height = height;
            this._updateString();
            this._needUpdateTexture = true
        }
    }, setFontSize: function (fontSize) {
        if (this._fontSize !== fontSize) {
            this._fontSize = fontSize;
            this._fontStyleStr = fontSize + "px '" + this._fontName + "'";
            this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, fontSize);
            this._needUpdateTexture =
                true
        }
    }, setFontName: function (fontName) {
        if (this._fontName && this._fontName != fontName) {
            this._fontName = fontName;
            this._fontStyleStr = this._fontSize + "px '" + fontName + "'";
            this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(fontName, this._fontSize);
            this._needUpdateTexture = true
        }
    }, _getFont: function () {
        return this._fontStyleStr
    }, _setFont: function (fontStyle) {
        var res = cc.LabelTTF._fontStyleRE.exec(fontStyle);
        if (res) {
            this._fontSize = parseInt(res[1]);
            this._fontName = res[2];
            this._fontStyleStr = fontStyle;
            this._fontClientHeight =
                cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize);
            this._needUpdateTexture = true
        }
    }, _drawTTFInCanvas: function (context) {
        if (!context)return;
        var locStrokeShadowOffsetX = this._strokeShadowOffsetX, locStrokeShadowOffsetY = this._strokeShadowOffsetY;
        var locContentSizeHeight = this._contentSize.height - locStrokeShadowOffsetY, locVAlignment = this._vAlignment, locHAlignment = this._hAlignment, locFontHeight = this._fontClientHeight, locStrokeSize = this._strokeSize;
        context.setTransform(1, 0, 0, 1, 0 + locStrokeShadowOffsetX *
            0.5, locContentSizeHeight + locStrokeShadowOffsetY * 0.5);
        if (context.font != this._fontStyleStr)context.font = this._fontStyleStr;
        context.fillStyle = this._fillColorStr;
        var xOffset = 0, yOffset = 0;
        var locStrokeEnabled = this._strokeEnabled;
        if (locStrokeEnabled) {
            context.lineWidth = locStrokeSize * 2;
            context.strokeStyle = this._strokeColorStr
        }
        if (this._shadowEnabled) {
            var locShadowOffset = this._shadowOffset;
            context.shadowColor = this._shadowColorStr;
            context.shadowOffsetX = locShadowOffset.x;
            context.shadowOffsetY = -locShadowOffset.y;
            context.shadowBlur = this._shadowBlur
        }
        context.textBaseline = cc.LabelTTF._textBaseline[locVAlignment];
        context.textAlign = cc.LabelTTF._textAlign[locHAlignment];
        var locContentWidth = this._contentSize.width - locStrokeShadowOffsetX;
        if (locHAlignment === cc.TEXT_ALIGNMENT_RIGHT)xOffset += locContentWidth; else if (locHAlignment === cc.TEXT_ALIGNMENT_CENTER)xOffset += locContentWidth / 2; else xOffset += 0;
        if (this._isMultiLine) {
            var locStrLen = this._strings.length;
            if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM)yOffset = locFontHeight +
                locContentSizeHeight - locFontHeight * locStrLen; else if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_CENTER)yOffset = locFontHeight / 2 + (locContentSizeHeight - locFontHeight * locStrLen) / 2;
            for (var i = 0; i < locStrLen; i++) {
                var line = this._strings[i];
                var tmpOffsetY = -locContentSizeHeight + locFontHeight * i + yOffset;
                if (locStrokeEnabled)context.strokeText(line, xOffset, tmpOffsetY);
                context.fillText(line, xOffset, tmpOffsetY)
            }
        } else if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM) {
            if (locStrokeEnabled)context.strokeText(this._string,
                xOffset, yOffset);
            context.fillText(this._string, xOffset, yOffset)
        } else if (locVAlignment === cc.VERTICAL_TEXT_ALIGNMENT_TOP) {
            yOffset -= locContentSizeHeight;
            if (locStrokeEnabled)context.strokeText(this._string, xOffset, yOffset);
            context.fillText(this._string, xOffset, yOffset)
        } else {
            yOffset -= locContentSizeHeight * 0.5;
            if (locStrokeEnabled)context.strokeText(this._string, xOffset, yOffset);
            context.fillText(this._string, xOffset, yOffset)
        }
    }, _getLabelContext: function () {
        if (this._labelContext)return this._labelContext;
        if (!this._labelCanvas) {
            var locCanvas =
                cc.newElement("canvas");
            var labelTexture = new cc.Texture2D;
            labelTexture.initWithElement(locCanvas);
            this.texture = labelTexture;
            this._labelCanvas = locCanvas
        }
        this._labelContext = this._labelCanvas.getContext("2d");
        return this._labelContext
    }, _updateTTF: function () {
        var locDimensionsWidth = this._dimensions.width, i, strLength;
        var locLineWidth = this._lineWidths;
        locLineWidth.length = 0;
        this._isMultiLine = false;
        this._measureConfig();
        if (locDimensionsWidth !== 0) {
            var text = this._string;
            this._strings = [];
            for (i = 0, strLength = this._string.length; i <
                strLength;) {
                var next = this._checkNextline(text.substr(i), locDimensionsWidth);
                var append = text.substr(i, next);
                this._strings.push(append);
                i += next
            }
        } else {
            this._strings = this._string.split("\n");
            for (i = 0, strLength = this._strings.length; i < strLength; i++)locLineWidth.push(this._measure(this._strings[i]))
        }
        if (this._strings.length > 0)this._isMultiLine = true;
        var locSize, locStrokeShadowOffsetX = 0, locStrokeShadowOffsetY = 0;
        if (this._strokeEnabled)locStrokeShadowOffsetX = locStrokeShadowOffsetY = this._strokeSize * 2;
        if (this._shadowEnabled) {
            var locOffsetSize =
                this._shadowOffset;
            locStrokeShadowOffsetX += Math.abs(locOffsetSize.x) * 2;
            locStrokeShadowOffsetY += Math.abs(locOffsetSize.y) * 2
        }
        if (locDimensionsWidth === 0)if (this._isMultiLine)locSize = cc.size(0 | Math.max.apply(Math, locLineWidth) + locStrokeShadowOffsetX, 0 | this._fontClientHeight * this._strings.length + locStrokeShadowOffsetY); else locSize = cc.size(0 | this._measure(this._string) + locStrokeShadowOffsetX, 0 | this._fontClientHeight + locStrokeShadowOffsetY); else if (this._dimensions.height === 0)if (this._isMultiLine)locSize =
            cc.size(0 | locDimensionsWidth + locStrokeShadowOffsetX, 0 | this._fontClientHeight * this._strings.length + locStrokeShadowOffsetY); else locSize = cc.size(0 | locDimensionsWidth + locStrokeShadowOffsetX, 0 | this._fontClientHeight + locStrokeShadowOffsetY); else locSize = cc.size(0 | locDimensionsWidth + locStrokeShadowOffsetX, 0 | this._dimensions.height + locStrokeShadowOffsetY);
        this.setContentSize(locSize);
        this._strokeShadowOffsetX = locStrokeShadowOffsetX;
        this._strokeShadowOffsetY = locStrokeShadowOffsetY;
        var locAP = this._anchorPoint;
        this._anchorPointInPoints.x = locStrokeShadowOffsetX * 0.5 + (locSize.width - locStrokeShadowOffsetX) * locAP.x;
        this._anchorPointInPoints.y = locStrokeShadowOffsetY * 0.5 + (locSize.height - locStrokeShadowOffsetY) * locAP.y
    }, getContentSize: function () {
        if (this._needUpdateTexture)this._updateTTF();
        return cc.Sprite.prototype.getContentSize.call(this)
    }, _getWidth: function () {
        if (this._needUpdateTexture)this._updateTTF();
        return cc.Sprite.prototype._getWidth.call(this)
    }, _getHeight: function () {
        if (this._needUpdateTexture)this._updateTTF();
        return cc.Sprite.prototype._getHeight.call(this)
    }, _updateTexture: function () {
        var locContext = this._getLabelContext(), locLabelCanvas = this._labelCanvas;
        var locContentSize = this._contentSize;
        if (this._string.length === 0) {
            locLabelCanvas.width = 1;
            locLabelCanvas.height = locContentSize.height;
            this.setTextureRect(cc.rect(0, 0, 1, locContentSize.height));
            return true
        }
        locContext.font = this._fontStyleStr;
        this._updateTTF();
        var width = locContentSize.width, height = locContentSize.height;
        var flag = locLabelCanvas.width == width &&
            locLabelCanvas.height == height;
        locLabelCanvas.width = width;
        locLabelCanvas.height = height;
        if (flag)locContext.clearRect(0, 0, width, height);
        this._drawTTFInCanvas(locContext);
        this._texture && this._texture.handleLoadedTexture();
        this.setTextureRect(cc.rect(0, 0, width, height));
        return true
    }, visit: function (ctx) {
        if (!this._string || this._string == "")return;
        if (this._needUpdateTexture) {
            this._needUpdateTexture = false;
            this._updateTexture()
        }
        var context = ctx || cc._renderContext;
        cc.Sprite.prototype.visit.call(this, context)
    },
    draw: null, _setTextureCoords: function (rect) {
        var tex = this._batchNode ? this.textureAtlas.texture : this._texture;
        if (!tex)return;
        var atlasWidth = tex.pixelsWidth;
        var atlasHeight = tex.pixelsHeight;
        var left, right, top, bottom, tempSwap, locQuad = this._quad;
        if (this._rectRotated) {
            if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
                left = (2 * rect.x + 1) / (2 * atlasWidth);
                right = left + (rect.height * 2 - 2) / (2 * atlasWidth);
                top = (2 * rect.y + 1) / (2 * atlasHeight);
                bottom = top + (rect.width * 2 - 2) / (2 * atlasHeight)
            } else {
                left = rect.x / atlasWidth;
                right = (rect.x + rect.height) /
                    atlasWidth;
                top = rect.y / atlasHeight;
                bottom = (rect.y + rect.width) / atlasHeight
            }
            if (this._flippedX) {
                tempSwap = top;
                top = bottom;
                bottom = tempSwap
            }
            if (this._flippedY) {
                tempSwap = left;
                left = right;
                right = tempSwap
            }
            locQuad.bl.texCoords.u = left;
            locQuad.bl.texCoords.v = top;
            locQuad.br.texCoords.u = left;
            locQuad.br.texCoords.v = bottom;
            locQuad.tl.texCoords.u = right;
            locQuad.tl.texCoords.v = top;
            locQuad.tr.texCoords.u = right;
            locQuad.tr.texCoords.v = bottom
        } else {
            if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
                left = (2 * rect.x + 1) / (2 * atlasWidth);
                right =
                    left + (rect.width * 2 - 2) / (2 * atlasWidth);
                top = (2 * rect.y + 1) / (2 * atlasHeight);
                bottom = top + (rect.height * 2 - 2) / (2 * atlasHeight)
            } else {
                left = rect.x / atlasWidth;
                right = (rect.x + rect.width) / atlasWidth;
                top = rect.y / atlasHeight;
                bottom = (rect.y + rect.height) / atlasHeight
            }
            if (this._flippedX) {
                tempSwap = left;
                left = right;
                right = tempSwap
            }
            if (this._flippedY) {
                tempSwap = top;
                top = bottom;
                bottom = tempSwap
            }
            locQuad.bl.texCoords.u = left;
            locQuad.bl.texCoords.v = bottom;
            locQuad.br.texCoords.u = right;
            locQuad.br.texCoords.v = bottom;
            locQuad.tl.texCoords.u =
                left;
            locQuad.tl.texCoords.v = top;
            locQuad.tr.texCoords.u = right;
            locQuad.tr.texCoords.v = top
        }
        this._quadDirty = true
    }});

var _p = cc.LabelTTF.prototype;
_p.setColor = function (color3) {
    cc.Node.prototype.setColor.call(this, color3);
    this._setColorsString()
};
_p._setColorsString = function () {
    this._needUpdateTexture = true;
    var locDisplayColor = this._displayedColor, locDisplayedOpacity = this._displayedOpacity;
    var locStrokeColor = this._strokeColor, locFontFillColor = this._textFillColor;
    this._shadowColorStr = "rgba(" + (0 | locDisplayColor.r * 0.5) + "," + (0 | locDisplayColor.g * 0.5) + "," + (0 | locDisplayColor.b * 0.5) +
        "," + this._shadowOpacity + ")";
    this._fillColorStr = "rgba(" + (0 | locDisplayColor.r / 255 * locFontFillColor.r) + "," + (0 | locDisplayColor.g / 255 * locFontFillColor.g) + "," + (0 | locDisplayColor.b / 255 * locFontFillColor.b) + ", " + locDisplayedOpacity / 255 + ")";
    this._strokeColorStr = "rgba(" + (0 | locDisplayColor.r / 255 * locStrokeColor.r) + "," + (0 | locDisplayColor.g / 255 * locStrokeColor.g) + "," + (0 | locDisplayColor.b / 255 * locStrokeColor.b) + ", " + locDisplayedOpacity / 255 + ")"
};
_p.updateDisplayedColor = function (parentColor) {
    cc.Node.prototype.updateDisplayedColor.call(this,
        parentColor);
    this._setColorsString()
};
_p.setOpacity = function (opacity) {
    if (this._opacity === opacity)return;
    cc.Sprite.prototype.setOpacity.call(this, opacity);
    this._setColorsString();
    this._needUpdateTexture = true
};
_p.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity;
_p.initWithStringAndTextDefinition = function (text, textDefinition) {
    this._updateWithTextDefinition(textDefinition, false);
    this.string = text;
    return true
};
_p.setFontFillColor = function (tintColor) {
    var locTextFillColor = this._textFillColor;
    if (locTextFillColor.r != tintColor.r || locTextFillColor.g != tintColor.g || locTextFillColor.b != tintColor.b) {
        locTextFillColor.r = tintColor.r;
        locTextFillColor.g = tintColor.g;
        locTextFillColor.b = tintColor.b;
        this._setColorsString();
        this._needUpdateTexture = true
    }
};
_p.draw = cc.Sprite.prototype.draw;
_p.setTextureRect = function (rect, rotated, untrimmedSize) {
    this._rectRotated = rotated || false;
    untrimmedSize = untrimmedSize || rect;
    this.setContentSize(untrimmedSize);
    this.setVertexRect(rect);
    var locTextureCoordRect = this._textureRect_Canvas;
    locTextureCoordRect.x = rect.x;
    locTextureCoordRect.y = rect.y;
    locTextureCoordRect.width = rect.width;
    locTextureCoordRect.height = rect.height;
    locTextureCoordRect.validRect = !(locTextureCoordRect.width === 0 || locTextureCoordRect.height === 0 || locTextureCoordRect.x < 0 || locTextureCoordRect.y < 0);
    var relativeOffset = this._unflippedOffsetPositionFromCenter;
    if (this._flippedX)relativeOffset.x = -relativeOffset.x;
    if (this._flippedY)relativeOffset.y = -relativeOffset.y;
    this._offsetPosition.x = relativeOffset.x + (this._contentSize.width -
        this._rect.width) / 2;
    this._offsetPosition.y = relativeOffset.y + (this._contentSize.height - this._rect.height) / 2;
    if (this._batchNode)this.dirty = true
};
_p = null

cc.assert(typeof cc._tmp.PrototypeLabelTTF === "function", cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js");
cc._tmp.PrototypeLabelTTF();
delete cc._tmp.PrototypeLabelTTF;
cc.LabelTTF._textAlign = ["left", "center", "right"];
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"];
cc.LabelTTF._checkRegEx = /(.+?)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
cc.LabelTTF._reverseCheckRegEx = /(.*)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
cc.LabelTTF._checkEnRegEx = /[\s\-\/\\\:]/;
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
cc.LabelTTF.create = function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
    return new cc.LabelTTF(text, fontName, fontSize, dimensions, hAlignment, vAlignment)
};
if (cc.USE_LA88_LABELS)cc.LabelTTF._SHADER_PROGRAM = cc.SHADER_POSITION_TEXTURECOLOR; else cc.LabelTTF._SHADER_PROGRAM = cc.SHADER_POSITION_TEXTUREA8COLOR;
cc.LabelTTF.__labelHeightDiv = cc.newElement("div");
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial";
cc.LabelTTF.__labelHeightDiv.style.position = "absolute";
cc.LabelTTF.__labelHeightDiv.style.left = "-100px";
cc.LabelTTF.__labelHeightDiv.style.top = "-100px";
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal";
document.body ? document.body.appendChild(cc.LabelTTF.__labelHeightDiv) : cc._addEventListener(window, "load", function () {
    this.removeEventListener("load", arguments.callee, false);
    document.body.appendChild(cc.LabelTTF.__labelHeightDiv)
}, false);
cc.LabelTTF.__getFontHeightByDiv = function (fontName, fontSize) {
    var clientHeight = cc.LabelTTF.__fontHeightCache[fontName + "." + fontSize];
    if (clientHeight > 0)return clientHeight;
    var labelDiv = cc.LabelTTF.__labelHeightDiv;
    labelDiv.innerHTML = "ajghl~!";
    labelDiv.style.fontFamily = fontName;
    labelDiv.style.fontSize = fontSize + "px";
    clientHeight = labelDiv.clientHeight;
    cc.LabelTTF.__fontHeightCache[fontName + "." + fontSize] = clientHeight;
    labelDiv.innerHTML = "";
    return clientHeight
};
cc.LabelTTF.__fontHeightCache = {};cc.HashElement = cc.Class.extend({actions: null, target: null, actionIndex: 0, currentAction: null, currentActionSalvaged: false, paused: false, hh: null, ctor: function () {
    this.actions = [];
    this.target = null;
    this.actionIndex = 0;
    this.currentAction = null;
    this.currentActionSalvaged = false;
    this.paused = false;
    this.hh = null
}});
cc.ActionManager = cc.Class.extend({_hashTargets: null, _arrayTargets: null, _currentTarget: null, _currentTargetSalvaged: false, _searchElementByTarget: function (arr, target) {
    for (var k = 0; k < arr.length; k++)if (target == arr[k].target)return arr[k];
    return null
}, ctor: function () {
    this._hashTargets = {};
    this._arrayTargets = [];
    this._currentTarget = null;
    this._currentTargetSalvaged = false
}, addAction: function (action, target, paused) {
    if (!action)throw"cc.ActionManager.addAction(): action must be non-null";
    if (!target)throw"cc.ActionManager.addAction(): action must be non-null";
    var element = this._hashTargets[target.__instanceId];
    if (!element) {
        element = new cc.HashElement;
        element.paused = paused;
        element.target = target;
        this._hashTargets[target.__instanceId] = element;
        this._arrayTargets.push(element)
    }
    this._actionAllocWithHashElement(element);
    element.actions.push(action);
    action.startWithTarget(target)
}, removeAllActions: function () {
    var locTargets = this._arrayTargets;
    for (var i = 0; i < locTargets.length; i++) {
        var element = locTargets[i];
        if (element)this.removeAllActionsFromTarget(element.target,
            true)
    }
}, removeAllActionsFromTarget: function (target, forceDelete) {
    if (target == null)return;
    var element = this._hashTargets[target.__instanceId];
    if (element) {
        if (element.actions.indexOf(element.currentAction) !== -1 && !element.currentActionSalvaged)element.currentActionSalvaged = true;
        element.actions.length = 0;
        if (this._currentTarget == element && !forceDelete)this._currentTargetSalvaged = true; else this._deleteHashElement(element)
    }
}, removeAction: function (action) {
    if (action == null)return;
    var target = action.getOriginalTarget();
    var element = this._hashTargets[target.__instanceId];
    if (element)for (var i = 0; i < element.actions.length; i++) {
        if (element.actions[i] == action) {
            element.actions.splice(i, 1);
            break
        }
    } else cc.log(cc._LogInfos.ActionManager_removeAction)
}, removeActionByTag: function (tag, target) {
    if (tag == cc.ACTION_TAG_INVALID)cc.log(cc._LogInfos.ActionManager_addAction);
    cc.assert(target, cc._LogInfos.ActionManager_addAction);
    var element = this._hashTargets[target.__instanceId];
    if (element) {
        var limit = element.actions.length;
        for (var i = 0; i <
            limit; ++i) {
            var action = element.actions[i];
            if (action && action.getTag() === tag && action.getOriginalTarget() == target) {
                this._removeActionAtIndex(i, element);
                break
            }
        }
    }
}, getActionByTag: function (tag, target) {
    if (tag == cc.ACTION_TAG_INVALID)cc.log(cc._LogInfos.ActionManager_getActionByTag);
    var element = this._hashTargets[target.__instanceId];
    if (element) {
        if (element.actions != null)for (var i = 0; i < element.actions.length; ++i) {
            var action = element.actions[i];
            if (action && action.getTag() === tag)return action
        }
        cc.log(cc._LogInfos.ActionManager_getActionByTag_2,
            tag)
    }
    return null
}, numberOfRunningActionsInTarget: function (target) {
    var element = this._hashTargets[target.__instanceId];
    if (element)return element.actions ? element.actions.length : 0;
    return 0
}, pauseTarget: function (target) {
    var element = this._hashTargets[target.__instanceId];
    if (element)element.paused = true
}, resumeTarget: function (target) {
    var element = this._hashTargets[target.__instanceId];
    if (element)element.paused = false
}, pauseAllRunningActions: function () {
    var idsWithActions = [];
    var locTargets = this._arrayTargets;
    for (var i = 0; i < locTargets.length; i++) {
        var element = locTargets[i];
        if (element && !element.paused) {
            element.paused = true;
            idsWithActions.push(element.target)
        }
    }
    return idsWithActions
}, resumeTargets: function (targetsToResume) {
    if (!targetsToResume)return;
    for (var i = 0; i < targetsToResume.length; i++)if (targetsToResume[i])this.resumeTarget(targetsToResume[i])
}, purgeSharedManager: function () {
    cc.director.getScheduler().unscheduleUpdateForTarget(this)
}, _removeActionAtIndex: function (index, element) {
    var action = element.actions[index];
    if (action == element.currentAction && !element.currentActionSalvaged)element.currentActionSalvaged = true;
    element.actions.splice(index, 1);
    if (element.actionIndex >= index)element.actionIndex--;
    if (element.actions.length == 0)if (this._currentTarget == element)this._currentTargetSalvaged = true; else this._deleteHashElement(element)
}, _deleteHashElement: function (element) {
    if (element) {
        delete this._hashTargets[element.target.__instanceId];
        cc.arrayRemoveObject(this._arrayTargets, element);
        element.actions = null;
        element.target =
            null
    }
}, _actionAllocWithHashElement: function (element) {
    if (element.actions == null)element.actions = []
}, update: function (dt) {
    var locTargets = this._arrayTargets, locCurrTarget;
    for (var elt = 0; elt < locTargets.length; elt++) {
        this._currentTarget = locTargets[elt];
        locCurrTarget = this._currentTarget;
        if (!locCurrTarget.paused)for (locCurrTarget.actionIndex = 0; locCurrTarget.actionIndex < locCurrTarget.actions.length; locCurrTarget.actionIndex++) {
            locCurrTarget.currentAction = locCurrTarget.actions[locCurrTarget.actionIndex];
            if (!locCurrTarget.currentAction)continue;
            locCurrTarget.currentActionSalvaged = false;
            locCurrTarget.currentAction.step(dt * (locCurrTarget.currentAction._speedMethod ? locCurrTarget.currentAction._speed : 1));
            if (locCurrTarget.currentActionSalvaged)locCurrTarget.currentAction = null; else if (locCurrTarget.currentAction.isDone()) {
                locCurrTarget.currentAction.stop();
                var action = locCurrTarget.currentAction;
                locCurrTarget.currentAction = null;
                this.removeAction(action)
            }
            locCurrTarget.currentAction = null
        }
        if (this._currentTargetSalvaged && locCurrTarget.actions.length ===
            0)this._deleteHashElement(locCurrTarget)
    }
}});
cc.ACTION_TAG_INVALID = -1;
cc.Action = cc.Class.extend({originalTarget: null, target: null, tag: cc.ACTION_TAG_INVALID, ctor: function () {
    this.originalTarget = null;
    this.target = null;
    this.tag = cc.ACTION_TAG_INVALID
}, copy: function () {
    cc.log("copy is deprecated. Please use clone instead.");
    return this.clone()
}, clone: function () {
    var action = new cc.Action;
    action.originalTarget = null;
    action.target = null;
    action.tag = this.tag;
    return action
}, isDone: function () {
    return true
}, startWithTarget: function (target) {
    this.originalTarget = target;
    this.target = target
},
    stop: function () {
        this.target = null
    }, step: function (dt) {
        cc.log("[Action step]. override me")
    }, update: function (time) {
        cc.log("[Action update]. override me")
    }, getTarget: function () {
        return this.target
    }, setTarget: function (target) {
        this.target = target
    }, getOriginalTarget: function () {
        return this.originalTarget
    }, setOriginalTarget: function (originalTarget) {
        this.originalTarget = originalTarget
    }, getTag: function () {
        return this.tag
    }, setTag: function (tag) {
        this.tag = tag
    }, retain: function () {
    }, release: function () {
    }});
cc.Action.create = function () {
    return new cc.Action
};
cc.FiniteTimeAction = cc.Action.extend({_duration: 0, ctor: function () {
    cc.Action.prototype.ctor.call(this);
    this._duration = 0
}, getDuration: function () {
    return this._duration * (this._times || 1)
}, setDuration: function (duration) {
    this._duration = duration
}, reverse: function () {
    cc.log("cocos2d: FiniteTimeAction#reverse: Implement me");
    return null
}, clone: function () {
    return new cc.FiniteTimeAction
}});
cc.Speed = cc.Action.extend({_speed: 0, _innerAction: null, ctor: function (action, speed) {
    cc.Action.prototype.ctor.call(this);
    this._speed = 0;
    this._innerAction = null;
    action && this.initWithAction(action, speed)
}, getSpeed: function () {
    return this._speed
}, setSpeed: function (speed) {
    this._speed = speed
}, initWithAction: function (action, speed) {
    if (!action)throw"cc.Speed.initWithAction(): action must be non nil";
    this._innerAction = action;
    this._speed = speed;
    return true
}, clone: function () {
    var action = new cc.Speed;
    action.initWithAction(this._innerAction.clone(),
        this._speed);
    return action
}, startWithTarget: function (target) {
    cc.Action.prototype.startWithTarget.call(this, target);
    this._innerAction.startWithTarget(target)
}, stop: function () {
    this._innerAction.stop();
    cc.Action.prototype.stop.call(this)
}, step: function (dt) {
    this._innerAction.step(dt * this._speed)
}, isDone: function () {
    return this._innerAction.isDone()
}, reverse: function () {
    return cc.Speed.create(this._innerAction.reverse(), this._speed)
}, setInnerAction: function (action) {
    if (this._innerAction != action)this._innerAction =
        action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.Speed.create = function (action, speed) {
    return new cc.Speed(action, speed)
};
cc.Follow = cc.Action.extend({_followedNode: null, _boundarySet: false, _boundaryFullyCovered: false, _halfScreenSize: null, _fullScreenSize: null, leftBoundary: 0, rightBoundary: 0, topBoundary: 0, bottomBoundary: 0, _worldRect: null, ctor: function (followedNode, rect) {
    cc.Action.prototype.ctor.call(this);
    this._followedNode = null;
    this._boundarySet = false;
    this._boundaryFullyCovered = false;
    this._halfScreenSize = null;
    this._fullScreenSize = null;
    this.leftBoundary = 0;
    this.rightBoundary = 0;
    this.topBoundary = 0;
    this.bottomBoundary = 0;
    this._worldRect =
        cc.rect(0, 0, 0, 0);
    if (followedNode)rect ? this.initWithTarget(followedNode, rect) : this.initWithTarget(followedNode)
}, clone: function () {
    var action = new cc.Follow;
    var locRect = this._worldRect;
    var rect = new cc.Rect(locRect.x, locRect.y, locRect.width, locRect.height);
    action.initWithTarget(this._followedNode, rect);
    return action
}, isBoundarySet: function () {
    return this._boundarySet
}, setBoudarySet: function (value) {
    this._boundarySet = value
}, initWithTarget: function (followedNode, rect) {
    if (!followedNode)throw"cc.Follow.initWithAction(): followedNode must be non nil";
    var _this = this;
    rect = rect || cc.rect(0, 0, 0, 0);
    _this._followedNode = followedNode;
    _this._worldRect = rect;
    _this._boundarySet = !cc._rectEqualToZero(rect);
    _this._boundaryFullyCovered = false;
    var winSize = cc.director.getWinSize();
    _this._fullScreenSize = cc.p(winSize.width, winSize.height);
    _this._halfScreenSize = cc.pMult(_this._fullScreenSize, 0.5);
    if (_this._boundarySet) {
        _this.leftBoundary = -(rect.x + rect.width - _this._fullScreenSize.x);
        _this.rightBoundary = -rect.x;
        _this.topBoundary = -rect.y;
        _this.bottomBoundary = -(rect.y +
            rect.height - _this._fullScreenSize.y);
        if (_this.rightBoundary < _this.leftBoundary)_this.rightBoundary = _this.leftBoundary = (_this.leftBoundary + _this.rightBoundary) / 2;
        if (_this.topBoundary < _this.bottomBoundary)_this.topBoundary = _this.bottomBoundary = (_this.topBoundary + _this.bottomBoundary) / 2;
        if (_this.topBoundary == _this.bottomBoundary && _this.leftBoundary == _this.rightBoundary)_this._boundaryFullyCovered = true
    }
    return true
}, step: function (dt) {
    var tempPosX = this._followedNode.x;
    var tempPosY = this._followedNode.y;
    tempPosX = this._halfScreenSize.x - tempPosX;
    tempPosY = this._halfScreenSize.y - tempPosY;
    if (this._boundarySet) {
        if (this._boundaryFullyCovered)return;
        this.target.setPosition(cc.clampf(tempPosX, this.leftBoundary, this.rightBoundary), cc.clampf(tempPosY, this.bottomBoundary, this.topBoundary))
    } else this.target.setPosition(tempPosX, tempPosY)
}, isDone: function () {
    return!this._followedNode.running
}, stop: function () {
    this.target = null;
    cc.Action.prototype.stop.call(this)
}});
cc.Follow.create = function (followedNode, rect) {
    return new cc.Follow(followedNode, rect)
};
cc.ActionInterval = cc.FiniteTimeAction.extend({_elapsed: 0, _firstTick: false, _easeList: null, _times: 1, _repeatForever: false, _repeatMethod: false, _speed: 1, _speedMethod: false, ctor: function (d) {
    this._speed = 1;
    this._times = 1;
    this._repeatForever = false;
    this.MAX_VALUE = 2;
    this._repeatMethod = false;
    this._speedMethod = false;
    cc.FiniteTimeAction.prototype.ctor.call(this);
    d !== undefined && this.initWithDuration(d)
}, getElapsed: function () {
    return this._elapsed
}, initWithDuration: function (d) {
    this._duration = d === 0 ? cc.FLT_EPSILON : d;
    this._elapsed = 0;
    this._firstTick = true;
    return true
}, isDone: function () {
    return this._elapsed >= this._duration
}, _cloneDecoration: function (action) {
    action._repeatForever = this._repeatForever;
    action._speed = this._speed;
    action._times = this._times;
    action._easeList = this._easeList;
    action._speedMethod = this._speedMethod;
    action._repeatMethod = this._repeatMethod
}, _reverseEaseList: function (action) {
    if (this._easeList) {
        action._easeList = [];
        for (var i = 0; i < this._easeList.length; i++)action._easeList.push(this._easeList[i].reverse())
    }
}, clone: function () {
    var action = new cc.ActionInterval(this._duration);
    this._cloneDecoration(action);
    return action
}, easing: function (easeObj) {
    if (this._easeList)this._easeList.length = 0; else this._easeList = [];
    for (var i = 0; i < arguments.length; i++)this._easeList.push(arguments[i]);
    return this
}, _computeEaseTime: function (dt) {
    var locList = this._easeList;
    if (!locList || locList.length === 0)return dt;
    for (var i = 0, n = locList.length; i < n; i++)dt = locList[i].easing(dt);
    return dt
}, step: function (dt) {
    if (this._firstTick) {
        this._firstTick =
            false;
        this._elapsed = 0
    } else this._elapsed += dt;
    var t = this._elapsed / (this._duration > 1.192092896E-7 ? this._duration : 1.192092896E-7);
    t = 1 > t ? t : 1;
    this.update(t > 0 ? t : 0);
    if (this._repeatMethod && this._times > 1 && this.isDone()) {
        if (!this._repeatForever)this._times--;
        this.startWithTarget(this.target);
        this.step(this._elapsed - this._duration)
    }
}, startWithTarget: function (target) {
    cc.Action.prototype.startWithTarget.call(this, target);
    this._elapsed = 0;
    this._firstTick = true
}, reverse: function () {
    cc.log("cc.IntervalAction: reverse not implemented.");
    return null
}, setAmplitudeRate: function (amp) {
    cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
}, getAmplitudeRate: function () {
    cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.");
    return 0
}, speed: function (speed) {
    if (speed <= 0) {
        cc.log("The speed parameter error");
        return this
    }
    this._speedMethod = true;
    this._speed *= speed;
    return this
}, getSpeed: function () {
    return this._speed
}, setSpeed: function (speed) {
    this._speed = speed;
    return this
}, repeat: function (times) {
    times =
        Math.round(times);
    if (isNaN(times) || times < 1) {
        cc.log("The repeat parameter error");
        return this
    }
    this._repeatMethod = true;
    this._times *= times;
    return this
}, repeatForever: function () {
    this._repeatMethod = true;
    this._times = this.MAX_VALUE;
    this._repeatForever = true;
    return this
}});
cc.ActionInterval.create = function (d) {
    return new cc.ActionInterval(d)
};
cc.Sequence = cc.ActionInterval.extend({_actions: null, _split: null, _last: 0, ctor: function (tempArray) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._actions = [];
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null)cc.log("parameters should not be ending with null in Javascript");
    if (last >= 0) {
        var prev = paramArray[0], action1;
        for (var i = 1; i < last; i++)if (paramArray[i]) {
            action1 = prev;
            prev = cc.Sequence._actionOneTwo(action1, paramArray[i])
        }
        this.initWithTwoActions(prev,
            paramArray[last])
    }
}, initWithTwoActions: function (actionOne, actionTwo) {
    if (!actionOne || !actionTwo)throw"cc.Sequence.initWithTwoActions(): arguments must all be non nil";
    var d = actionOne._duration + actionTwo._duration;
    this.initWithDuration(d);
    this._actions[0] = actionOne;
    this._actions[1] = actionTwo;
    return true
}, clone: function () {
    var action = new cc.Sequence;
    this._cloneDecoration(action);
    action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._split = this._actions[0]._duration / this._duration;
    this._last = -1
}, stop: function () {
    if (this._last !== -1)this._actions[this._last].stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    var new_t, found = 0;
    var locSplit = this._split, locActions = this._actions, locLast = this._last;
    if (time < locSplit) {
        new_t = locSplit !== 0 ? time / locSplit : 1;
        if (found === 0 && locLast === 1) {
            locActions[1].update(0);
            locActions[1].stop()
        }
    } else {
        found = 1;
        new_t = locSplit === 1 ? 1 : (time - locSplit) / (1 -
            locSplit);
        if (locLast === -1) {
            locActions[0].startWithTarget(this.target);
            locActions[0].update(1);
            locActions[0].stop()
        }
        if (!locLast) {
            locActions[0].update(1);
            locActions[0].stop()
        }
    }
    if (locLast === found && locActions[found].isDone())return;
    if (locLast !== found)locActions[found].startWithTarget(this.target);
    locActions[found].update(new_t);
    this._last = found
}, reverse: function () {
    var action = cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Sequence.create = function (tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null)cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++)if (paramArray[i])prev = cc.Sequence._actionOneTwo(prev, paramArray[i]);
    return prev
};
cc.Sequence._actionOneTwo = function (actionOne, actionTwo) {
    var sequence = new cc.Sequence;
    sequence.initWithTwoActions(actionOne, actionTwo);
    return sequence
};
cc.Repeat = cc.ActionInterval.extend({_times: 0, _total: 0, _nextDt: 0, _actionInstant: false, _innerAction: null, ctor: function (action, times) {
    cc.ActionInterval.prototype.ctor.call(this);
    times !== undefined && this.initWithAction(action, times)
}, initWithAction: function (action, times) {
    var duration = action._duration * times;
    if (this.initWithDuration(duration)) {
        this._times = times;
        this._innerAction = action;
        if (action instanceof cc.ActionInstant) {
            this._actionInstant = true;
            this._times -= 1
        }
        this._total = 0;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Repeat;
    this._cloneDecoration(action);
    action.initWithAction(this._innerAction.clone(), this._times);
    return action
}, startWithTarget: function (target) {
    this._total = 0;
    this._nextDt = this._innerAction._duration / this._duration;
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._innerAction.startWithTarget(target)
}, stop: function () {
    this._innerAction.stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    var locInnerAction =
        this._innerAction;
    var locDuration = this._duration;
    var locTimes = this._times;
    var locNextDt = this._nextDt;
    if (time >= locNextDt) {
        while (time > locNextDt && this._total < locTimes) {
            locInnerAction.update(1);
            this._total++;
            locInnerAction.stop();
            locInnerAction.startWithTarget(this.target);
            locNextDt += locInnerAction._duration / locDuration;
            this._nextDt = locNextDt
        }
        if (time >= 1 && this._total < locTimes)this._total++;
        if (!this._actionInstant)if (this._total === locTimes) {
            locInnerAction.update(1);
            locInnerAction.stop()
        } else locInnerAction.update(time -
            (locNextDt - locInnerAction._duration / locDuration))
    } else locInnerAction.update(time * locTimes % 1)
}, isDone: function () {
    return this._total == this._times
}, reverse: function () {
    var action = cc.Repeat.create(this._innerAction.reverse(), this._times);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, setInnerAction: function (action) {
    if (this._innerAction != action)this._innerAction = action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.Repeat.create = function (action, times) {
    return new cc.Repeat(action, times)
};
cc.RepeatForever = cc.ActionInterval.extend({_innerAction: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._innerAction = null;
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.RepeatForever.initWithAction(): action must be non null";
    this._innerAction = action;
    return true
}, clone: function () {
    var action = new cc.RepeatForever;
    this._cloneDecoration(action);
    action.initWithAction(this._innerAction.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._innerAction.startWithTarget(target)
}, step: function (dt) {
    var locInnerAction = this._innerAction;
    locInnerAction.step(dt);
    if (locInnerAction.isDone()) {
        locInnerAction.startWithTarget(this.target);
        locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration)
    }
}, isDone: function () {
    return false
}, reverse: function () {
    var action = cc.RepeatForever.create(this._innerAction.reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, setInnerAction: function (action) {
    if (this._innerAction !=
        action)this._innerAction = action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.RepeatForever.create = function (action) {
    return new cc.RepeatForever(action)
};
cc.Spawn = cc.ActionInterval.extend({_one: null, _two: null, ctor: function (tempArray) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._one = null;
    this._two = null;
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null)cc.log("parameters should not be ending with null in Javascript");
    if (last >= 0) {
        var prev = paramArray[0], action1;
        for (var i = 1; i < last; i++)if (paramArray[i]) {
            action1 = prev;
            prev = cc.Spawn._actionOneTwo(action1, paramArray[i])
        }
        this.initWithTwoActions(prev,
            paramArray[last])
    }
}, initWithTwoActions: function (action1, action2) {
    if (!action1 || !action2)throw"cc.Spawn.initWithTwoActions(): arguments must all be non null";
    var ret = false;
    var d1 = action1._duration;
    var d2 = action2._duration;
    if (this.initWithDuration(Math.max(d1, d2))) {
        this._one = action1;
        this._two = action2;
        if (d1 > d2)this._two = cc.Sequence._actionOneTwo(action2, cc.DelayTime.create(d1 - d2)); else if (d1 < d2)this._one = cc.Sequence._actionOneTwo(action1, cc.DelayTime.create(d2 - d1));
        ret = true
    }
    return ret
}, clone: function () {
    var action =
        new cc.Spawn;
    this._cloneDecoration(action);
    action.initWithTwoActions(this._one.clone(), this._two.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._one.startWithTarget(target);
    this._two.startWithTarget(target)
}, stop: function () {
    this._one.stop();
    this._two.stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this._one)this._one.update(time);
    if (this._two)this._two.update(time)
}, reverse: function () {
    var action =
        cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Spawn.create = function (tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null)cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++)if (paramArray[i] != null)prev = cc.Spawn._actionOneTwo(prev, paramArray[i]);
    return prev
};
cc.Spawn._actionOneTwo = function (action1, action2) {
    var pSpawn = new cc.Spawn;
    pSpawn.initWithTwoActions(action1, action2);
    return pSpawn
};
cc.RotateTo = cc.ActionInterval.extend({_dstAngleX: 0, _startAngleX: 0, _diffAngleX: 0, _dstAngleY: 0, _startAngleY: 0, _diffAngleY: 0, ctor: function (duration, deltaAngleX, deltaAngleY) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY)
}, initWithDuration: function (duration, deltaAngleX, deltaAngleY) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._dstAngleX = deltaAngleX || 0;
        this._dstAngleY = deltaAngleY || this._dstAngleX;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.RotateTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locStartAngleX = target.rotationX % 360;
    var locDiffAngleX = this._dstAngleX - locStartAngleX;
    if (locDiffAngleX > 180)locDiffAngleX -= 360;
    if (locDiffAngleX < -180)locDiffAngleX += 360;
    this._startAngleX = locStartAngleX;
    this._diffAngleX =
        locDiffAngleX;
    this._startAngleY = target.rotationY % 360;
    var locDiffAngleY = this._dstAngleY - this._startAngleY;
    if (locDiffAngleY > 180)locDiffAngleY -= 360;
    if (locDiffAngleY < -180)locDiffAngleY += 360;
    this._diffAngleY = locDiffAngleY
}, reverse: function () {
    cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.rotationX = this._startAngleX + this._diffAngleX * time;
        this.target.rotationY = this._startAngleY + this._diffAngleY * time
    }
}});
cc.RotateTo.create = function (duration, deltaAngleX, deltaAngleY) {
    return new cc.RotateTo(duration, deltaAngleX, deltaAngleY)
};
cc.RotateBy = cc.ActionInterval.extend({_angleX: 0, _startAngleX: 0, _angleY: 0, _startAngleY: 0, ctor: function (duration, deltaAngleX, deltaAngleY) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY)
}, initWithDuration: function (duration, deltaAngleX, deltaAngleY) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._angleX = deltaAngleX || 0;
        this._angleY = deltaAngleY || this._angleX;
        return true
    }
    return false
}, clone: function () {
    var action =
        new cc.RotateBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._angleX, this._angleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startAngleX = target.rotationX;
    this._startAngleY = target.rotationY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.rotationX = this._startAngleX + this._angleX * time;
        this.target.rotationY = this._startAngleY + this._angleY * time
    }
}, reverse: function () {
    var action =
        cc.RotateBy.create(this._duration, -this._angleX, -this._angleY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.RotateBy.create = function (duration, deltaAngleX, deltaAngleY) {
    return new cc.RotateBy(duration, deltaAngleX, deltaAngleY)
};
cc.MoveBy = cc.ActionInterval.extend({_positionDelta: null, _startPosition: null, _previousPosition: null, ctor: function (duration, deltaPos, deltaY) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._positionDelta = cc.p(0, 0);
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    deltaPos !== undefined && this.initWithDuration(duration, deltaPos, deltaY)
}, initWithDuration: function (duration, position, y) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        if (position.x !== undefined) {
            y = position.y;
            position = position.x
        }
        this._positionDelta.x = position;
        this._positionDelta.y = y;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.MoveBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._positionDelta);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x = locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var x = this._positionDelta.x * time;
        var y = this._positionDelta.y * time;
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x + targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var action = cc.MoveBy.create(this._duration, cc.p(-this._positionDelta.x, -this._positionDelta.y));
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.MoveBy.create = function (duration, deltaPos, deltaY) {
    return new cc.MoveBy(duration, deltaPos, deltaY)
};
cc.MoveTo = cc.MoveBy.extend({_endPosition: null, ctor: function (duration, position, y) {
    cc.MoveBy.prototype.ctor.call(this);
    this._endPosition = cc.p(0, 0);
    position !== undefined && this.initWithDuration(duration, position, y)
}, initWithDuration: function (duration, position, y) {
    if (cc.MoveBy.prototype.initWithDuration.call(this, duration, position, y)) {
        if (position.x !== undefined) {
            y = position.y;
            position = position.x
        }
        this._endPosition.x = position;
        this._endPosition.y = y;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.MoveTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._endPosition);
    return action
}, startWithTarget: function (target) {
    cc.MoveBy.prototype.startWithTarget.call(this, target);
    this._positionDelta.x = this._endPosition.x - target.getPositionX();
    this._positionDelta.y = this._endPosition.y - target.getPositionY()
}});
cc.MoveTo.create = function (duration, position, y) {
    return new cc.MoveTo(duration, position, y)
};
cc.SkewTo = cc.ActionInterval.extend({_skewX: 0, _skewY: 0, _startSkewX: 0, _startSkewY: 0, _endSkewX: 0, _endSkewY: 0, _deltaX: 0, _deltaY: 0, ctor: function (t, sx, sy) {
    cc.ActionInterval.prototype.ctor.call(this);
    sy !== undefined && this.initWithDuration(t, sx, sy)
}, initWithDuration: function (t, sx, sy) {
    var ret = false;
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._endSkewX = sx;
        this._endSkewY = sy;
        ret = true
    }
    return ret
}, clone: function () {
    var action = new cc.SkewTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration,
        this._endSkewX, this._endSkewY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startSkewX = target.skewX % 180;
    this._deltaX = this._endSkewX - this._startSkewX;
    if (this._deltaX > 180)this._deltaX -= 360;
    if (this._deltaX < -180)this._deltaX += 360;
    this._startSkewY = target.skewY % 360;
    this._deltaY = this._endSkewY - this._startSkewY;
    if (this._deltaY > 180)this._deltaY -= 360;
    if (this._deltaY < -180)this._deltaY += 360
}, update: function (t) {
    t = this._computeEaseTime(t);
    this.target.skewX =
        this._startSkewX + this._deltaX * t;
    this.target.skewY = this._startSkewY + this._deltaY * t
}});
cc.SkewTo.create = function (t, sx, sy) {
    return new cc.SkewTo(t, sx, sy)
};
cc.SkewBy = cc.SkewTo.extend({ctor: function (t, sx, sy) {
    cc.SkewTo.prototype.ctor.call(this);
    sy !== undefined && this.initWithDuration(t, sx, sy)
}, initWithDuration: function (t, deltaSkewX, deltaSkewY) {
    var ret = false;
    if (cc.SkewTo.prototype.initWithDuration.call(this, t, deltaSkewX, deltaSkewY)) {
        this._skewX = deltaSkewX;
        this._skewY = deltaSkewY;
        ret = true
    }
    return ret
}, clone: function () {
    var action = new cc.SkewBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._skewX, this._skewY);
    return action
}, startWithTarget: function (target) {
    cc.SkewTo.prototype.startWithTarget.call(this,
        target);
    this._deltaX = this._skewX;
    this._deltaY = this._skewY;
    this._endSkewX = this._startSkewX + this._deltaX;
    this._endSkewY = this._startSkewY + this._deltaY
}, reverse: function () {
    var action = cc.SkewBy.create(this._duration, -this._skewX, -this._skewY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.SkewBy.create = function (t, sx, sy) {
    return new cc.SkewBy(t, sx, sy)
};
cc.JumpBy = cc.ActionInterval.extend({_startPosition: null, _delta: null, _height: 0, _jumps: 0, _previousPosition: null, ctor: function (duration, position, y, height, jumps) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    this._delta = cc.p(0, 0);
    height !== undefined && this.initWithDuration(duration, position, y, height, jumps)
}, initWithDuration: function (duration, position, y, height, jumps) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        if (jumps ===
            undefined) {
            jumps = height;
            height = y;
            y = position.y;
            position = position.x
        }
        this._delta.x = position;
        this._delta.y = y;
        this._height = height;
        this._jumps = jumps;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.JumpBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._delta, this._height, this._jumps);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x =
        locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var frac = time * this._jumps % 1;
        var y = this._height * 4 * frac * (1 - frac);
        y += this._delta.y * time;
        var x = this._delta.x * time;
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x +
                targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var action = cc.JumpBy.create(this._duration, cc.p(-this._delta.x, -this._delta.y), this._height, this._jumps);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.JumpBy.create = function (duration, position, y, height, jumps) {
    return new cc.JumpBy(duration, position, y, height, jumps)
};
cc.JumpTo = cc.JumpBy.extend({_endPosition: null, ctor: function (duration, position, y, height, jumps) {
    cc.JumpBy.prototype.ctor.call(this);
    this._endPosition = cc.p(0, 0);
    height !== undefined && this.initWithDuration(duration, position, y, height, jumps)
}, initWithDuration: function (duration, position, y, height, jumps) {
    if (cc.JumpBy.prototype.initWithDuration.call(this, duration, position, y, height, jumps)) {
        if (jumps === undefined) {
            y = position.y;
            position = position.x
        }
        this._endPosition.x = position;
        this._endPosition.y = y;
        return true
    }
    return false
},
    startWithTarget: function (target) {
        cc.JumpBy.prototype.startWithTarget.call(this, target);
        this._delta.x = this._endPosition.x - this._startPosition.x;
        this._delta.y = this._endPosition.y - this._startPosition.y
    }, clone: function () {
        var action = new cc.JumpTo;
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endPosition, this._height, this._jumps);
        return action
    }});
cc.JumpTo.create = function (duration, position, y, height, jumps) {
    return new cc.JumpTo(duration, position, y, height, jumps)
};
cc.bezierAt = function (a, b, c, d, t) {
    return Math.pow(1 - t, 3) * a + 3 * t * Math.pow(1 - t, 2) * b + 3 * Math.pow(t, 2) * (1 - t) * c + Math.pow(t, 3) * d
};
cc.BezierBy = cc.ActionInterval.extend({_config: null, _startPosition: null, _previousPosition: null, ctor: function (t, c) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._config = [];
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    c && this.initWithDuration(t, c)
}, initWithDuration: function (t, c) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._config = c;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.BezierBy;
    this._cloneDecoration(action);
    var newConfigs = [];
    for (var i =
        0; i < this._config.length; i++) {
        var selConf = this._config[i];
        newConfigs.push(cc.p(selConf.x, selConf.y))
    }
    action.initWithDuration(this._duration, newConfigs);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x = locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var locConfig = this._config;
        var xa = 0;
        var xb = locConfig[0].x;
        var xc = locConfig[1].x;
        var xd = locConfig[2].x;
        var ya = 0;
        var yb = locConfig[0].y;
        var yc = locConfig[1].y;
        var yd = locConfig[2].y;
        var x = cc.bezierAt(xa, xb, xc, xd, time);
        var y = cc.bezierAt(ya, yb, yc, yd, time);
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x +
                targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var locConfig = this._config;
    var r = [cc.pAdd(locConfig[1], cc.pNeg(locConfig[2])), cc.pAdd(locConfig[0], cc.pNeg(locConfig[2])), cc.pNeg(locConfig[2])];
    var action = cc.BezierBy.create(this._duration,
        r);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.BezierBy.create = function (t, c) {
    return new cc.BezierBy(t, c)
};
cc.BezierTo = cc.BezierBy.extend({_toConfig: null, ctor: function (t, c) {
    cc.BezierBy.prototype.ctor.call(this);
    this._toConfig = [];
    c && this.initWithDuration(t, c)
}, initWithDuration: function (t, c) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._toConfig = c;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.BezierTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toConfig);
    return action
}, startWithTarget: function (target) {
    cc.BezierBy.prototype.startWithTarget.call(this,
        target);
    var locStartPos = this._startPosition;
    var locToConfig = this._toConfig;
    var locConfig = this._config;
    locConfig[0] = cc.pSub(locToConfig[0], locStartPos);
    locConfig[1] = cc.pSub(locToConfig[1], locStartPos);
    locConfig[2] = cc.pSub(locToConfig[2], locStartPos)
}});
cc.BezierTo.create = function (t, c) {
    return new cc.BezierTo(t, c)
};
cc.ScaleTo = cc.ActionInterval.extend({_scaleX: 1, _scaleY: 1, _startScaleX: 1, _startScaleY: 1, _endScaleX: 0, _endScaleY: 0, _deltaX: 0, _deltaY: 0, ctor: function (duration, sx, sy) {
    cc.ActionInterval.prototype.ctor.call(this);
    sx !== undefined && this.initWithDuration(duration, sx, sy)
}, initWithDuration: function (duration, sx, sy) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._endScaleX = sx;
        this._endScaleY = sy != null ? sy : sx;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ScaleTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._endScaleX, this._endScaleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startScaleX = target.scaleX;
    this._startScaleY = target.scaleY;
    this._deltaX = this._endScaleX - this._startScaleX;
    this._deltaY = this._endScaleY - this._startScaleY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.scaleX = this._startScaleX + this._deltaX * time;
        this.target.scaleY = this._startScaleY +
            this._deltaY * time
    }
}});
cc.ScaleTo.create = function (duration, sx, sy) {
    return new cc.ScaleTo(duration, sx, sy)
};
cc.ScaleBy = cc.ScaleTo.extend({startWithTarget: function (target) {
    cc.ScaleTo.prototype.startWithTarget.call(this, target);
    this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX;
    this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY
}, reverse: function () {
    var action = cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.ScaleBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration,
        this._endScaleX, this._endScaleY);
    return action
}});
cc.ScaleBy.create = function (duration, sx, sy) {
    return new cc.ScaleBy(duration, sx, sy)
};
cc.Blink = cc.ActionInterval.extend({_times: 0, _originalState: false, ctor: function (duration, blinks) {
    cc.ActionInterval.prototype.ctor.call(this);
    blinks !== undefined && this.initWithDuration(duration, blinks)
}, initWithDuration: function (duration, blinks) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._times = blinks;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Blink;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._times);
    return action
}, update: function (time) {
    time =
        this._computeEaseTime(time);
    if (this.target && !this.isDone()) {
        var slice = 1 / this._times;
        var m = time % slice;
        this.target.visible = m > slice / 2
    }
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._originalState = target.visible
}, stop: function () {
    this.target.visible = this._originalState;
    cc.ActionInterval.prototype.stop.call(this)
}, reverse: function () {
    var action = cc.Blink.create(this._duration, this._times);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Blink.create = function (duration, blinks) {
    return new cc.Blink(duration, blinks)
};
cc.FadeTo = cc.ActionInterval.extend({_toOpacity: 0, _fromOpacity: 0, ctor: function (duration, opacity) {
    cc.ActionInterval.prototype.ctor.call(this);
    opacity !== undefined && this.initWithDuration(duration, opacity)
}, initWithDuration: function (duration, opacity) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._toOpacity = opacity;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.FadeTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
},
    update: function (time) {
        time = this._computeEaseTime(time);
        var fromOpacity = this._fromOpacity !== undefined ? this._fromOpacity : 255;
        this.target.opacity = fromOpacity + (this._toOpacity - fromOpacity) * time
    }, startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._fromOpacity = target.opacity
    }});
cc.FadeTo.create = function (duration, opacity) {
    return new cc.FadeTo(duration, opacity)
};
cc.FadeIn = cc.FadeTo.extend({_reverseAction: null, ctor: function (duration) {
    cc.FadeTo.prototype.ctor.call(this);
    duration && this.initWithDuration(duration, 255)
}, reverse: function () {
    var action = new cc.FadeOut;
    action.initWithDuration(this._duration, 0);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.FadeIn;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
}, startWithTarget: function (target) {
    if (this._reverseAction)this._toOpacity =
        this._reverseAction._fromOpacity;
    cc.FadeTo.prototype.startWithTarget.call(this, target)
}});
cc.FadeIn.create = function (duration) {
    return new cc.FadeIn(duration)
};
cc.FadeOut = cc.FadeTo.extend({ctor: function (duration) {
    cc.FadeTo.prototype.ctor.call(this);
    duration && this.initWithDuration(duration, 0)
}, reverse: function () {
    var action = new cc.FadeIn;
    action._reverseAction = this;
    action.initWithDuration(this._duration, 255);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.FadeOut;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
}});
cc.FadeOut.create = function (d) {
    return new cc.FadeOut(d)
};
cc.TintTo = cc.ActionInterval.extend({_to: null, _from: null, ctor: function (duration, red, green, blue) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._to = cc.color(0, 0, 0);
    this._from = cc.color(0, 0, 0);
    blue !== undefined && this.initWithDuration(duration, red, green, blue)
}, initWithDuration: function (duration, red, green, blue) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._to = cc.color(red, green, blue);
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TintTo;
    this._cloneDecoration(action);
    var locTo = this._to;
    action.initWithDuration(this._duration, locTo.r, locTo.g, locTo.b);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._from = this.target.color
}, update: function (time) {
    time = this._computeEaseTime(time);
    var locFrom = this._from, locTo = this._to;
    if (locFrom)this.target.color = cc.color(locFrom.r + (locTo.r - locFrom.r) * time, locFrom.g + (locTo.g - locFrom.g) * time, locFrom.b + (locTo.b - locFrom.b) * time)
}});
cc.TintTo.create = function (duration, red, green, blue) {
    return new cc.TintTo(duration, red, green, blue)
};
cc.TintBy = cc.ActionInterval.extend({_deltaR: 0, _deltaG: 0, _deltaB: 0, _fromR: 0, _fromG: 0, _fromB: 0, ctor: function (duration, deltaRed, deltaGreen, deltaBlue) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaBlue !== undefined && this.initWithDuration(duration, deltaRed, deltaGreen, deltaBlue)
}, initWithDuration: function (duration, deltaRed, deltaGreen, deltaBlue) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._deltaR = deltaRed;
        this._deltaG = deltaGreen;
        this._deltaB = deltaBlue;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TintBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var color = target.color;
    this._fromR = color.r;
    this._fromG = color.g;
    this._fromB = color.b
}, update: function (time) {
    time = this._computeEaseTime(time);
    this.target.color = cc.color(this._fromR + this._deltaR * time, this._fromG + this._deltaG * time, this._fromB + this._deltaB *
        time)
}, reverse: function () {
    var action = cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.TintBy.create = function (duration, deltaRed, deltaGreen, deltaBlue) {
    return new cc.TintBy(duration, deltaRed, deltaGreen, deltaBlue)
};
cc.DelayTime = cc.ActionInterval.extend({update: function (time) {
}, reverse: function () {
    var action = cc.DelayTime.create(this._duration);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.DelayTime;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration);
    return action
}});
cc.DelayTime.create = function (d) {
    return new cc.DelayTime(d)
};
cc.ReverseTime = cc.ActionInterval.extend({_other: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._other = null;
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.ReverseTime.initWithAction(): action must be non null";
    if (action == this._other)throw"cc.ReverseTime.initWithAction(): the action was already passed in.";
    if (cc.ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
        this._other = action;
        return true
    }
    return false
}, clone: function () {
    var action =
        new cc.ReverseTime;
    this._cloneDecoration(action);
    action.initWithAction(this._other.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._other.startWithTarget(target)
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this._other)this._other.update(1 - time)
}, reverse: function () {
    return this._other.clone()
}, stop: function () {
    this._other.stop();
    cc.Action.prototype.stop.call(this)
}});
cc.ReverseTime.create = function (action) {
    return new cc.ReverseTime(action)
};
cc.Animate = cc.ActionInterval.extend({_animation: null, _nextFrame: 0, _origFrame: null, _executedLoops: 0, _splitTimes: null, ctor: function (animation) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._splitTimes = [];
    animation && this.initWithAnimation(animation)
}, getAnimation: function () {
    return this._animation
}, setAnimation: function (animation) {
    this._animation = animation
}, initWithAnimation: function (animation) {
    if (!animation)throw"cc.Animate.initWithAnimation(): animation must be non-NULL";
    var singleDuration = animation.getDuration();
    if (this.initWithDuration(singleDuration * animation.getLoops())) {
        this._nextFrame = 0;
        this.setAnimation(animation);
        this._origFrame = null;
        this._executedLoops = 0;
        var locTimes = this._splitTimes;
        locTimes.length = 0;
        var accumUnitsOfTime = 0;
        var newUnitOfTimeValue = singleDuration / animation.getTotalDelayUnits();
        var frames = animation.getFrames();
        cc.arrayVerifyType(frames, cc.AnimationFrame);
        for (var i = 0; i < frames.length; i++) {
            var frame = frames[i];
            var value = accumUnitsOfTime * newUnitOfTimeValue / singleDuration;
            accumUnitsOfTime +=
                frame.getDelayUnits();
            locTimes.push(value)
        }
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Animate;
    this._cloneDecoration(action);
    action.initWithAnimation(this._animation.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    if (this._animation.getRestoreOriginalFrame())this._origFrame = target.displayFrame();
    this._nextFrame = 0;
    this._executedLoops = 0
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (time < 1) {
        time *= this._animation.getLoops();
        var loopNumber = 0 | time;
        if (loopNumber > this._executedLoops) {
            this._nextFrame = 0;
            this._executedLoops++
        }
        time = time % 1
    }
    var frames = this._animation.getFrames();
    var numberOfFrames = frames.length, locSplitTimes = this._splitTimes;
    for (var i = this._nextFrame; i < numberOfFrames; i++)if (locSplitTimes[i] <= time) {
        this.target.setSpriteFrame(frames[i].getSpriteFrame());
        this._nextFrame = i + 1
    } else break
}, reverse: function () {
    var locAnimation = this._animation;
    var oldArray = locAnimation.getFrames();
    var newArray = [];
    cc.arrayVerifyType(oldArray,
        cc.AnimationFrame);
    if (oldArray.length > 0)for (var i = oldArray.length - 1; i >= 0; i--) {
        var element = oldArray[i];
        if (!element)break;
        newArray.push(element.clone())
    }
    var newAnim = cc.Animation.create(newArray, locAnimation.getDelayPerUnit(), locAnimation.getLoops());
    newAnim.setRestoreOriginalFrame(locAnimation.getRestoreOriginalFrame());
    var action = cc.Animate.create(newAnim);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, stop: function () {
    if (this._animation.getRestoreOriginalFrame() && this.target)this.target.setSpriteFrame(this._origFrame);
    cc.Action.prototype.stop.call(this)
}});
cc.Animate.create = function (animation) {
    return new cc.Animate(animation)
};
cc.TargetedAction = cc.ActionInterval.extend({_action: null, _forcedTarget: null, ctor: function (target, action) {
    cc.ActionInterval.prototype.ctor.call(this);
    action && this.initWithTarget(target, action)
}, initWithTarget: function (target, action) {
    if (this.initWithDuration(action._duration)) {
        this._forcedTarget = target;
        this._action = action;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TargetedAction;
    this._cloneDecoration(action);
    action.initWithTarget(this._forcedTarget, this._action.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._action.startWithTarget(this._forcedTarget)
}, stop: function () {
    this._action.stop()
}, update: function (time) {
    time = this._computeEaseTime(time);
    this._action.update(time)
}, getForcedTarget: function () {
    return this._forcedTarget
}, setForcedTarget: function (forcedTarget) {
    if (this._forcedTarget != forcedTarget)this._forcedTarget = forcedTarget
}});
cc.TargetedAction.create = function (target, action) {
    return new cc.TargetedAction(target, action)
};
cc.ActionInstant = cc.FiniteTimeAction.extend({isDone: function () {
    return true
}, step: function (dt) {
    this.update(1)
}, update: function (time) {
}, reverse: function () {
    return this.clone()
}, clone: function () {
    return new cc.ActionInstant
}});
cc.CallFunc = cc.ActionInstant.extend({_selectorTarget: null, _callFunc: null, _function: null, _data: null, ctor: function (selector, selectorTarget, data) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    if (selector !== undefined)if (selectorTarget === undefined)this.initWithFunction(selector); else this.initWithFunction(selector, selectorTarget, data)
}, initWithFunction: function (selector, selectorTarget, data) {
    if (selectorTarget) {
        this._data = data;
        this._callFunc = selector;
        this._selectorTarget = selectorTarget
    } else if (selector)this._function =
        selector;
    return true
}, execute: function () {
    if (this._callFunc != null)this._callFunc.call(this._selectorTarget, this.target, this._data); else if (this._function)this._function.call(null, this.target)
}, update: function (time) {
    this.execute()
}, getTargetCallback: function () {
    return this._selectorTarget
}, setTargetCallback: function (sel) {
    if (sel != this._selectorTarget) {
        if (this._selectorTarget)this._selectorTarget = null;
        this._selectorTarget = sel
    }
}, clone: function () {
    var action = new cc.CallFunc;
    if (this._selectorTarget)action.initWithFunction(this._callFunc,
        this._selectorTarget, this._data); else if (this._function)action.initWithFunction(this._function);
    return action
}});
cc.CallFunc.create = function (selector, selectorTarget, data) {
    return new cc.CallFunc(selector, selectorTarget, data)
};
cc.ActionCamera = cc.ActionInterval.extend({_centerXOrig: 0, _centerYOrig: 0, _centerZOrig: 0, _eyeXOrig: 0, _eyeYOrig: 0, _eyeZOrig: 0, _upXOrig: 0, _upYOrig: 0, _upZOrig: 0, ctor: function () {
    var _t = this;
    cc.ActionInterval.prototype.ctor.call(_t);
    _t._centerXOrig = 0;
    _t._centerYOrig = 0;
    _t._centerZOrig = 0;
    _t._eyeXOrig = 0;
    _t._eyeYOrig = 0;
    _t._eyeZOrig = 0;
    _t._upXOrig = 0;
    _t._upYOrig = 0;
    _t._upZOrig = 0
}, startWithTarget: function (target) {
    var _t = this;
    cc.ActionInterval.prototype.startWithTarget.call(_t, target);
    var camera = target.getCamera();
    var centerXYZ = camera.getCenter();
    _t._centerXOrig = centerXYZ.x;
    _t._centerYOrig = centerXYZ.y;
    _t._centerZOrig = centerXYZ.z;
    var eyeXYZ = camera.getEye();
    _t._eyeXOrig = eyeXYZ.x;
    _t._eyeYOrig = eyeXYZ.y;
    _t._eyeZOrig = eyeXYZ.z;
    var upXYZ = camera.getUp();
    _t._upXOrig = upXYZ.x;
    _t._upYOrig = upXYZ.y;
    _t._upZOrig = upXYZ.z
}, clone: function () {
    return new cc.ActionCamera
}, reverse: function () {
    return cc.ReverseTime.create(this)
}});
cc.OrbitCamera = cc.ActionCamera.extend({_radius: 0, _deltaRadius: 0, _angleZ: 0, _deltaAngleZ: 0, _angleX: 0, _deltaAngleX: 0, _radZ: 0, _radDeltaZ: 0, _radX: 0, _radDeltaX: 0, ctor: function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    cc.ActionCamera.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
}, initWithDuration: function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        t)) {
        var _t = this;
        _t._radius = radius;
        _t._deltaRadius = deltaRadius;
        _t._angleZ = angleZ;
        _t._deltaAngleZ = deltaAngleZ;
        _t._angleX = angleX;
        _t._deltaAngleX = deltaAngleX;
        _t._radDeltaZ = cc.degreesToRadians(deltaAngleZ);
        _t._radDeltaX = cc.degreesToRadians(deltaAngleX);
        return true
    }
    return false
}, sphericalRadius: function () {
    var newRadius, zenith, azimuth;
    var camera = this.target.getCamera();
    var eyeXYZ = camera.getEye();
    var centerXYZ = camera.getCenter();
    var x = eyeXYZ.x - centerXYZ.x, y = eyeXYZ.y - centerXYZ.y, z = eyeXYZ.z - centerXYZ.z;
    var r =
        Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    var s = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (s === 0)s = cc.FLT_EPSILON;
    if (r === 0)r = cc.FLT_EPSILON;
    zenith = Math.acos(z / r);
    if (x < 0)azimuth = Math.PI - Math.asin(y / s); else azimuth = Math.asin(y / s);
    newRadius = r / cc.Camera.getZEye();
    return{newRadius: newRadius, zenith: zenith, azimuth: azimuth}
}, startWithTarget: function (target) {
    var _t = this;
    cc.ActionInterval.prototype.startWithTarget.call(_t, target);
    var retValue = _t.sphericalRadius();
    if (isNaN(_t._radius))_t._radius = retValue.newRadius;
    if (isNaN(_t._angleZ))_t._angleZ = cc.radiansToDegrees(retValue.zenith);
    if (isNaN(_t._angleX))_t._angleX = cc.radiansToDegrees(retValue.azimuth);
    _t._radZ = cc.degreesToRadians(_t._angleZ);
    _t._radX = cc.degreesToRadians(_t._angleX)
}, clone: function () {
    var a = new cc.OrbitCamera, _t = this;
    a.initWithDuration(_t._duration, _t._radius, _t._deltaRadius, _t._angleZ, _t._deltaAngleZ, _t._angleX, _t._deltaAngleX);
    return a
}, update: function (dt) {
    dt = this._computeEaseTime(dt);
    var r = (this._radius + this._deltaRadius * dt) * cc.Camera.getZEye();
    var za = this._radZ + this._radDeltaZ * dt;
    var xa = this._radX + this._radDeltaX * dt;
    var i = Math.sin(za) * Math.cos(xa) * r + this._centerXOrig;
    var j = Math.sin(za) * Math.sin(xa) * r + this._centerYOrig;
    var k = Math.cos(za) * r + this._centerZOrig;
    this.target.getCamera().setEye(i, j, k)
}});
cc.OrbitCamera.create = function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    return new cc.OrbitCamera(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
};
cc.ActionEase = cc.ActionInterval.extend({_inner: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.ActionEase.initWithAction(): action must be non nil";
    if (this.initWithDuration(action.getDuration())) {
        this._inner = action;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ActionEase;
    action.initWithAction(this._inner.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._inner.startWithTarget(this.target)
}, stop: function () {
    this._inner.stop();
    cc.ActionInterval.prototype.stop.call(this)
}, update: function (time1) {
    this._inner.update(time1)
}, reverse: function () {
    return cc.ActionEase.create(this._inner.reverse())
}, getInnerAction: function () {
    return this._inner
}});
cc.ActionEase.create = function (action) {
    return new cc.ActionEase(action)
};
cc.EaseRateAction = cc.ActionEase.extend({_rate: 0, ctor: function (action, rate) {
    cc.ActionEase.prototype.ctor.call(this);
    rate !== undefined && this.initWithAction(action, rate)
}, setRate: function (rate) {
    this._rate = rate
}, getRate: function () {
    return this._rate
}, initWithAction: function (action, rate) {
    if (cc.ActionEase.prototype.initWithAction.call(this, action)) {
        this._rate = rate;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.EaseRateAction;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
},
    reverse: function () {
        return cc.EaseRateAction.create(this._inner.reverse(), 1 / this._rate)
    }});
cc.EaseRateAction.create = function (action, rate) {
    return new cc.EaseRateAction(action, rate)
};
cc.EaseIn = cc.EaseRateAction.extend({update: function (time1) {
    this._inner.update(Math.pow(time1, this._rate))
}, reverse: function () {
    return cc.EaseIn.create(this._inner.reverse(), 1 / this._rate)
}, clone: function () {
    var action = new cc.EaseIn;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}});
cc.EaseIn.create = function (action, rate) {
    return new cc.EaseIn(action, rate)
};
cc.easeIn = function (rate) {
    return{_rate: rate, easing: function (dt) {
        return Math.pow(dt, this._rate)
    }, reverse: function () {
        return cc.easeIn(1 / this._rate)
    }}
};
cc.EaseOut = cc.EaseRateAction.extend({update: function (time1) {
    this._inner.update(Math.pow(time1, 1 / this._rate))
}, reverse: function () {
    return cc.EaseOut.create(this._inner.reverse(), 1 / this._rate)
}, clone: function () {
    var action = new cc.EaseOut;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}});
cc.EaseOut.create = function (action, rate) {
    return new cc.EaseOut(action, rate)
};
cc.easeOut = function (rate) {
    return{_rate: rate, easing: function (dt) {
        return Math.pow(dt, 1 / this._rate)
    }, reverse: function () {
        return cc.easeOut(1 / this._rate)
    }}
};
cc.EaseInOut = cc.EaseRateAction.extend({update: function (time1) {
    time1 *= 2;
    if (time1 < 1)this._inner.update(0.5 * Math.pow(time1, this._rate)); else this._inner.update(1 - 0.5 * Math.pow(2 - time1, this._rate))
}, clone: function () {
    var action = new cc.EaseInOut;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}, reverse: function () {
    return cc.EaseInOut.create(this._inner.reverse(), this._rate)
}});
cc.EaseInOut.create = function (action, rate) {
    return new cc.EaseInOut(action, rate)
};
cc.easeInOut = function (rate) {
    return{_rate: rate, easing: function (dt) {
        dt *= 2;
        if (dt < 1)return 0.5 * Math.pow(dt, this._rate); else return 1 - 0.5 * Math.pow(2 - dt, this._rate)
    }, reverse: function () {
        return cc.easeInOut(this._rate)
    }}
};
cc.EaseExponentialIn = cc.ActionEase.extend({update: function (time1) {
    this._inner.update(time1 === 0 ? 0 : Math.pow(2, 10 * (time1 - 1)))
}, reverse: function () {
    return cc.EaseExponentialOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialIn.create = function (action) {
    return new cc.EaseExponentialIn(action)
};
cc._easeExponentialInObj = {easing: function (dt) {
    return dt === 0 ? 0 : Math.pow(2, 10 * (dt - 1))
}, reverse: function () {
    return cc._easeExponentialOutObj
}};
cc.easeExponentialIn = function () {
    return cc._easeExponentialInObj
};
cc.EaseExponentialOut = cc.ActionEase.extend({update: function (time1) {
    this._inner.update(time1 == 1 ? 1 : -Math.pow(2, -10 * time1) + 1)
}, reverse: function () {
    return cc.EaseExponentialIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialOut.create = function (action) {
    return new cc.EaseExponentialOut(action)
};
cc._easeExponentialOutObj = {easing: function (dt) {
    return dt == 1 ? 1 : -Math.pow(2, -10 * dt) + 1
}, reverse: function () {
    return cc._easeExponentialInObj
}};
cc.easeExponentialOut = function () {
    return cc._easeExponentialOutObj
};
cc.EaseExponentialInOut = cc.ActionEase.extend({update: function (time) {
    if (time != 1 && time !== 0) {
        time *= 2;
        if (time < 1)time = 0.5 * Math.pow(2, 10 * (time - 1)); else time = 0.5 * (-Math.pow(2, -10 * (time - 1)) + 2)
    }
    this._inner.update(time)
}, reverse: function () {
    return cc.EaseExponentialInOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialInOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialInOut.create = function (action) {
    return new cc.EaseExponentialInOut(action)
};
cc._easeExponentialInOutObj = {easing: function (dt) {
    if (dt !== 1 && dt !== 0) {
        dt *= 2;
        if (dt < 1)return 0.5 * Math.pow(2, 10 * (dt - 1)); else return 0.5 * (-Math.pow(2, -10 * (dt - 1)) + 2)
    }
    return dt
}, reverse: function () {
    return cc._easeExponentialInOutObj
}};
cc.easeExponentialInOut = function () {
    return cc._easeExponentialInOutObj
};
cc.EaseSineIn = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : -1 * Math.cos(time1 * Math.PI / 2) + 1;
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseSineOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseSineIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseSineIn.create = function (action) {
    return new cc.EaseSineIn(action)
};
cc._easeSineInObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : -1 * Math.cos(dt * Math.PI / 2) + 1
}, reverse: function () {
    return cc._easeSineOutObj
}};
cc.easeSineIn = function () {
    return cc._easeSineInObj
};
cc.EaseSineOut = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : Math.sin(time1 * Math.PI / 2);
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseSineIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseSineOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseSineOut.create = function (action) {
    return new cc.EaseSineOut(action)
};
cc._easeSineOutObj = {easing: function (dt) {
    return dt === 0 || dt == 1 ? dt : Math.sin(dt * Math.PI / 2)
}, reverse: function () {
    return cc._easeSineInObj
}};
cc.easeSineOut = function () {
    return cc._easeSineOutObj
};
cc.EaseSineInOut = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : -0.5 * (Math.cos(Math.PI * time1) - 1);
    this._inner.update(time1)
}, clone: function () {
    var action = new cc.EaseSineInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseSineInOut.create(this._inner.reverse())
}});
cc.EaseSineInOut.create = function (action) {
    return new cc.EaseSineInOut(action)
};
cc._easeSineInOutObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : -0.5 * (Math.cos(Math.PI * dt) - 1)
}, reverse: function () {
    return cc._easeSineInOutObj
}};
cc.easeSineInOut = function () {
    return cc._easeSineInOutObj
};
cc.EaseElastic = cc.ActionEase.extend({_period: 0.3, ctor: function (action, period) {
    cc.ActionEase.prototype.ctor.call(this);
    action && this.initWithAction(action, period)
}, getPeriod: function () {
    return this._period
}, setPeriod: function (period) {
    this._period = period
}, initWithAction: function (action, period) {
    cc.ActionEase.prototype.initWithAction.call(this, action);
    this._period = period == null ? 0.3 : period;
    return true
}, reverse: function () {
    cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
    return null
},
    clone: function () {
        var action = new cc.EaseElastic;
        action.initWithAction(this._inner.clone(), this._period);
        return action
    }});
cc.EaseElastic.create = function (action, period) {
    return new cc.EaseElastic(action, period)
};
cc.EaseElasticIn = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    if (time1 === 0 || time1 === 1)newT = time1; else {
        var s = this._period / 4;
        time1 = time1 - 1;
        newT = -Math.pow(2, 10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / this._period)
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticOut.create(this._inner.reverse(), this._period)
}, clone: function () {
    var action = new cc.EaseElasticIn;
    action.initWithAction(this._inner.clone(), this._period);
    return action
}});
cc.EaseElasticIn.create = function (action, period) {
    return new cc.EaseElasticIn(action, period)
};
cc._easeElasticInObj = {easing: function (dt) {
    if (dt === 0 || dt === 1)return dt;
    dt = dt - 1;
    return-Math.pow(2, 10 * dt) * Math.sin((dt - 0.3 / 4) * Math.PI * 2 / 0.3)
}, reverse: function () {
    return cc._easeElasticOutObj
}};
cc.easeElasticIn = function (period) {
    if (period && period !== 0.3)return{_period: period, easing: function (dt) {
        if (dt === 0 || dt === 1)return dt;
        dt = dt - 1;
        return-Math.pow(2, 10 * dt) * Math.sin((dt - this._period / 4) * Math.PI * 2 / this._period)
    }, reverse: function () {
        return cc.easeElasticOut(this._period)
    }};
    return cc._easeElasticInObj
};
cc.EaseElasticOut = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    if (time1 === 0 || time1 == 1)newT = time1; else {
        var s = this._period / 4;
        newT = Math.pow(2, -10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / this._period) + 1
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticIn.create(this._inner.reverse(), this._period)
}, clone: function () {
    var action = new cc.EaseElasticOut;
    action.initWithAction(this._inner.clone(), this._period);
    return action
}});
cc.EaseElasticOut.create = function (action, period) {
    return new cc.EaseElasticOut(action, period)
};
cc._easeElasticOutObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - 0.3 / 4) * Math.PI * 2 / 0.3) + 1
}, reverse: function () {
    return cc._easeElasticInObj
}};
cc.easeElasticOut = function (period) {
    if (period && period !== 0.3)return{_period: period, easing: function (dt) {
        return dt === 0 || dt === 1 ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - this._period / 4) * Math.PI * 2 / this._period) + 1
    }, reverse: function () {
        return cc.easeElasticIn(this._period)
    }};
    return cc._easeElasticOutObj
};
cc.EaseElasticInOut = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    var locPeriod = this._period;
    if (time1 === 0 || time1 == 1)newT = time1; else {
        time1 = time1 * 2;
        if (!locPeriod)locPeriod = this._period = 0.3 * 1.5;
        var s = locPeriod / 4;
        time1 = time1 - 1;
        if (time1 < 0)newT = -0.5 * Math.pow(2, 10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / locPeriod); else newT = Math.pow(2, -10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / locPeriod) * 0.5 + 1
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticInOut.create(this._inner.reverse(), this._period)
},
    clone: function () {
        var action = new cc.EaseElasticInOut;
        action.initWithAction(this._inner.clone(), this._period);
        return action
    }});
cc.EaseElasticInOut.create = function (action, period) {
    return new cc.EaseElasticInOut(action, period)
};
cc.easeElasticInOut = function (period) {
    period = period || 0.3;
    return{_period: period, easing: function (dt) {
        var newT = 0;
        var locPeriod = this._period;
        if (dt === 0 || dt === 1)newT = dt; else {
            dt = dt * 2;
            if (!locPeriod)locPeriod = this._period = 0.3 * 1.5;
            var s = locPeriod / 4;
            dt = dt - 1;
            if (dt < 0)newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod); else newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1
        }
        return newT
    }, reverse: function () {
        return cc.easeElasticInOut(this._period)
    }}
};
cc.EaseBounce = cc.ActionEase.extend({bounceTime: function (time1) {
    if (time1 < 1 / 2.75)return 7.5625 * time1 * time1; else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375
}, clone: function () {
    var action = new cc.EaseBounce;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBounce.create(this._inner.reverse())
}});
cc.EaseBounce.create = function (action) {
    return new cc.EaseBounce(action)
};
cc.EaseBounceIn = cc.EaseBounce.extend({update: function (time1) {
    var newT = 1 - this.bounceTime(1 - time1);
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseBounceOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBounceIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBounceIn.create = function (action) {
    return new cc.EaseBounceIn(action)
};
cc._bounceTime = function (time1) {
    if (time1 < 1 / 2.75)return 7.5625 * time1 * time1; else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375
};
cc._easeBounceInObj = {easing: function (dt) {
    return 1 - cc._bounceTime(1 - dt)
}, reverse: function () {
    return cc._easeBounceOutObj
}};
cc.easeBounceIn = function () {
    return cc._easeBounceInObj
};
cc.EaseBounceOut = cc.EaseBounce.extend({update: function (time1) {
    var newT = this.bounceTime(time1);
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseBounceIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBounceOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBounceOut.create = function (action) {
    return new cc.EaseBounceOut(action)
};
cc._easeBounceOutObj = {easing: function (dt) {
    return cc._bounceTime(dt)
}, reverse: function () {
    return cc._easeBounceInObj
}};
cc.easeBounceOut = function () {
    return cc._easeBounceOutObj
};
cc.EaseBounceInOut = cc.EaseBounce.extend({update: function (time1) {
    var newT = 0;
    if (time1 < 0.5) {
        time1 = time1 * 2;
        newT = (1 - this.bounceTime(1 - time1)) * 0.5
    } else newT = this.bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    this._inner.update(newT)
}, clone: function () {
    var action = new cc.EaseBounceInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBounceInOut.create(this._inner.reverse())
}});
cc.EaseBounceInOut.create = function (action) {
    return new cc.EaseBounceInOut(action)
};
cc._easeBounceInOutObj = {easing: function (time1) {
    var newT;
    if (time1 < 0.5) {
        time1 = time1 * 2;
        newT = (1 - cc._bounceTime(1 - time1)) * 0.5
    } else newT = cc._bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    return newT
}, reverse: function () {
    return cc._easeBounceInOutObj
}};
cc.easeBounceInOut = function () {
    return cc._easeBounceInOutObj
};
cc.EaseBackIn = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 === 0 || time1 == 1 ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot);
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseBackOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBackIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBackIn.create = function (action) {
    return new cc.EaseBackIn(action)
};
cc._easeBackInObj = {easing: function (time1) {
    var overshoot = 1.70158;
    return time1 === 0 || time1 === 1 ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot)
}, reverse: function () {
    return cc._easeBackOutObj
}};
cc.easeBackIn = function () {
    return cc._easeBackInObj
};
cc.EaseBackOut = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 - 1;
    this._inner.update(time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1)
}, reverse: function () {
    return cc.EaseBackIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBackOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBackOut.create = function (action) {
    return new cc.EaseBackOut(action)
};
cc._easeBackOutObj = {easing: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 - 1;
    return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1
}, reverse: function () {
    return cc._easeBackInObj
}};
cc.easeBackOut = function () {
    return cc._easeBackOutObj
};
cc.EaseBackInOut = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158 * 1.525;
    time1 = time1 * 2;
    if (time1 < 1)this._inner.update(time1 * time1 * ((overshoot + 1) * time1 - overshoot) / 2); else {
        time1 = time1 - 2;
        this._inner.update(time1 * time1 * ((overshoot + 1) * time1 + overshoot) / 2 + 1)
    }
}, clone: function () {
    var action = new cc.EaseBackInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBackInOut.create(this._inner.reverse())
}});
cc.EaseBackInOut.create = function (action) {
    return new cc.EaseBackInOut(action)
};
cc._easeBackInOutObj = {easing: function (time1) {
    var overshoot = 1.70158 * 1.525;
    time1 = time1 * 2;
    if (time1 < 1)return time1 * time1 * ((overshoot + 1) * time1 - overshoot) / 2; else {
        time1 = time1 - 2;
        return time1 * time1 * ((overshoot + 1) * time1 + overshoot) / 2 + 1
    }
}, reverse: function () {
    return cc._easeBackInOutObj
}};
cc.easeBackInOut = function () {
    return cc._easeBackInOutObj
};
cc.EaseBezierAction = cc.ActionEase.extend({_p0: null, _p1: null, _p2: null, _p3: null, ctor: function (action) {
    cc.ActionEase.prototype.ctor.call(this, action)
}, _updateTime: function (a, b, c, d, t) {
    return Math.pow(1 - t, 3) * a + 3 * t * Math.pow(1 - t, 2) * b + 3 * Math.pow(t, 2) * (1 - t) * c + Math.pow(t, 3) * d
}, update: function (time) {
    var t = this._updateTime(this._p0, this._p1, this._p2, this._p3, time);
    this._inner.update(t)
}, clone: function () {
    var action = new cc.EaseBezierAction;
    action.initWithAction(this._inner.clone());
    action.setBezierParamer(this._p0,
        this._p1, this._p2, this._p3);
    return action
}, reverse: function () {
    var action = cc.EaseBezierAction.create(this._inner.reverse());
    action.setBezierParamer(this._p3, this._p2, this._p1, this._p0);
    return action
}, setBezierParamer: function (p0, p1, p2, p3) {
    this._p0 = p0 || 0;
    this._p1 = p1 || 0;
    this._p2 = p2 || 0;
    this._p3 = p3 || 0
}});
cc.EaseBezierAction.create = function (action) {
    return new cc.EaseBezierAction(action)
};
cc.easeBezierAction = function (p0, p1, p2, p3) {
    return{easing: function (time) {
        return cc.EaseBezierAction.prototype._updateTime(p0, p1, p2, p3, time)
    }, reverse: function () {
        return cc.easeBezierAction(p3, p2, p1, p0)
    }}
};
cc.EaseQuadraticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return Math.pow(time, 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionIn.create(this._inner.reverse())
}});
cc.EaseQuadraticActionIn.create = function (action) {
    return new cc.EaseQuadraticActionIn(action)
};
cc._easeQuadraticActionIn = {easing: cc.EaseQuadraticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionIn
}};
cc.easeQuadraticActionIn = function () {
    return cc._easeQuadraticActionIn
};
cc.EaseQuadraticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    return-time * (time - 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionOut;
    action.initWithAction();
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionOut.create(this._inner.reverse())
}});
cc.EaseQuadraticActionOut.create = function (action) {
    return new cc.EaseQuadraticActionOut(action)
};
cc._easeQuadraticActionOut = {easing: cc.EaseQuadraticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionOut
}};
cc.easeQuadraticActionOut = function () {
    return cc._easeQuadraticActionOut
};
cc.EaseQuadraticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    var resultTime = time;
    time *= 2;
    if (time < 1)resultTime = time * time * 0.5; else {
        --time;
        resultTime = -0.5 * (time * (time - 2) - 1)
    }
    return resultTime
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuadraticActionInOut.create = function (action) {
    return new cc.EaseQuadraticActionInOut(action)
};
cc._easeQuadraticActionInOut = {easing: cc.EaseQuadraticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionInOut
}};
cc.easeQuadraticActionInOut = function () {
    return cc._easeQuadraticActionInOut
};
cc.EaseQuarticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionIn.create(this._inner.reverse())
}});
cc.EaseQuarticActionIn.create = function (action) {
    return new cc.EaseQuarticActionIn(action)
};
cc._easeQuarticActionIn = {easing: cc.EaseQuarticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionIn
}};
cc.easeQuarticActionIn = function () {
    return cc._easeQuarticActionIn
};
cc.EaseQuarticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return-(time * time * time * time - 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionOut.create(this._inner.reverse())
}});
cc.EaseQuarticActionOut.create = function (action) {
    return new cc.EaseQuarticActionOut(action)
};
cc._easeQuarticActionOut = {easing: cc.EaseQuarticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionOut
}};
cc.easeQuarticActionOut = function () {
    return cc._easeQuarticActionOut
};
cc.EaseQuarticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time * time;
    time -= 2;
    return-0.5 * (time * time * time * time - 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuarticActionInOut.create = function (action) {
    return new cc.EaseQuarticActionInOut(action)
};
cc._easeQuarticActionInOut = {easing: cc.EaseQuarticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionInOut
}};
cc.easeQuarticActionInOut = function () {
    return cc._easeQuarticActionInOut
};
cc.EaseQuinticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionIn.create(this._inner.reverse())
}});
cc.EaseQuinticActionIn.create = function (action) {
    return new cc.EaseQuinticActionIn(action)
};
cc._easeQuinticActionIn = {easing: cc.EaseQuinticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionIn
}};
cc.easeQuinticActionIn = function () {
    return cc._easeQuinticActionIn
};
cc.EaseQuinticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return time * time * time * time * time + 1
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionOut.create(this._inner.reverse())
}});
cc.EaseQuinticActionOut.create = function (action) {
    return new cc.EaseQuinticActionOut(action)
};
cc._easeQuinticActionOut = {easing: cc.EaseQuinticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionOut
}};
cc.easeQuinticActionOut = function () {
    return cc._easeQuinticActionOut
};
cc.EaseQuinticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time * time * time;
    time -= 2;
    return 0.5 * (time * time * time * time * time + 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuinticActionInOut.create = function (action) {
    return new cc.EaseQuinticActionInOut(action)
};
cc._easeQuinticActionInOut = {easing: cc.EaseQuinticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionInOut
}};
cc.easeQuinticActionInOut = function () {
    return cc._easeQuinticActionInOut
};
cc.EaseCircleActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return-1 * (Math.sqrt(1 - time * time) - 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionIn.create(this._inner.reverse())
}});
cc.EaseCircleActionIn.create = function (action) {
    return new cc.EaseCircleActionIn(action)
};
cc._easeCircleActionIn = {easing: cc.EaseCircleActionIn.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionIn
}};
cc.easeCircleActionIn = function () {
    return cc._easeCircleActionIn
};
cc.EaseCircleActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time - 1;
    return Math.sqrt(1 - time * time)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionOut.create(this._inner.reverse())
}});
cc.EaseCircleActionOut.create = function (action) {
    return new cc.EaseCircleActionOut(action)
};
cc._easeCircleActionOut = {easing: cc.EaseCircleActionOut.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionOut
}};
cc.easeCircleActionOut = function () {
    return cc._easeCircleActionOut
};
cc.EaseCircleActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return-0.5 * (Math.sqrt(1 - time * time) - 1);
    time -= 2;
    return 0.5 * (Math.sqrt(1 - time * time) + 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionInOut.create(this._inner.reverse())
}});
cc.EaseCircleActionInOut.create = function (action) {
    return new cc.EaseCircleActionInOut(action)
};
cc._easeCircleActionInOut = {easing: cc.EaseCircleActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionInOut
}};
cc.easeCircleActionInOut = function () {
    return cc._easeCircleActionInOut
};
cc.EaseCubicActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionIn.create(this._inner.reverse())
}});
cc.EaseCubicActionIn.create = function (action) {
    return new cc.EaseCubicActionIn(action)
};
cc._easeCubicActionIn = {easing: cc.EaseCubicActionIn.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionIn
}};
cc.easeCubicActionIn = function () {
    return cc._easeCubicActionIn
};
cc.EaseCubicActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return time * time * time + 1
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionOut.create(this._inner.reverse())
}});
cc.EaseCubicActionOut.create = function (action) {
    return new cc.EaseCubicActionOut(action)
};
cc._easeCubicActionOut = {easing: cc.EaseCubicActionOut.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionOut
}};
cc.easeCubicActionOut = function () {
    return cc._easeCubicActionOut
};
cc.EaseCubicActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time;
    time -= 2;
    return 0.5 * (time * time * time + 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionInOut.create(this._inner.reverse())
}});
cc.EaseCubicActionInOut.create = function (action) {
    return new cc.EaseCubicActionInOut(action)
};
cc._easeCubicActionInOut = {easing: cc.EaseCubicActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionInOut
}};
cc.easeCubicActionInOut = function () {
    return cc._easeCubicActionInOut
};
cc.cardinalSplineAt = function (p0, p1, p2, p3, tension, t) {
    var t2 = t * t;
    var t3 = t2 * t;
    var s = (1 - tension) / 2;
    var b1 = s * (-t3 + 2 * t2 - t);
    var b2 = s * (-t3 + t2) + (2 * t3 - 3 * t2 + 1);
    var b3 = s * (t3 - 2 * t2 + t) + (-2 * t3 + 3 * t2);
    var b4 = s * (t3 - t2);
    var x = p0.x * b1 + p1.x * b2 + p2.x * b3 + p3.x * b4;
    var y = p0.y * b1 + p1.y * b2 + p2.y * b3 + p3.y * b4;
    return cc.p(x, y)
};
cc.reverseControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = controlPoints.length - 1; i >= 0; i--)newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray
};
cc.copyControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = 0; i < controlPoints.length; i++)newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray
};
cc.getControlPointAt = function (controlPoints, pos) {
    var p = Math.min(controlPoints.length - 1, Math.max(pos, 0));
    return controlPoints[p]
};
cc.reverseControlPointsInline = function (controlPoints) {
    var len = controlPoints.length;
    var mid = 0 | len / 2;
    for (var i = 0; i < mid; ++i) {
        var temp = controlPoints[i];
        controlPoints[i] = controlPoints[len - i - 1];
        controlPoints[len - i - 1] = temp
    }
};
cc.CardinalSplineTo = cc.ActionInterval.extend({_points: null, _deltaT: 0, _tension: 0, _previousPosition: null, _accumulatedDiff: null, ctor: function (duration, points, tension) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._points = [];
    tension !== undefined && this.initWithDuration(duration, points, tension)
}, initWithDuration: function (duration, points, tension) {
    if (!points || points.length == 0)throw"Invalid configuration. It must at least have one control point";
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        duration)) {
        this.setPoints(points);
        this._tension = tension;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.CardinalSplineTo;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._deltaT = 1 / (this._points.length - 1);
    this._previousPosition = cc.p(this.target.getPositionX(), this.target.getPositionY());
    this._accumulatedDiff = cc.p(0, 0)
}, update: function (time) {
    time =
        this._computeEaseTime(time);
    var p, lt;
    var ps = this._points;
    if (time == 1) {
        p = ps.length - 1;
        lt = 1
    } else {
        var locDT = this._deltaT;
        p = 0 | time / locDT;
        lt = (time - locDT * p) / locDT
    }
    var newPos = cc.cardinalSplineAt(cc.getControlPointAt(ps, p - 1), cc.getControlPointAt(ps, p - 0), cc.getControlPointAt(ps, p + 1), cc.getControlPointAt(ps, p + 2), this._tension, lt);
    if (cc.ENABLE_STACKABLE_ACTIONS) {
        var tempX, tempY;
        tempX = this.target.getPositionX() - this._previousPosition.x;
        tempY = this.target.getPositionY() - this._previousPosition.y;
        if (tempX != 0 || tempY !=
            0) {
            var locAccDiff = this._accumulatedDiff;
            tempX = locAccDiff.x + tempX;
            tempY = locAccDiff.y + tempY;
            locAccDiff.x = tempX;
            locAccDiff.y = tempY;
            newPos.x += tempX;
            newPos.y += tempY
        }
    }
    this.updatePosition(newPos)
}, reverse: function () {
    var reversePoints = cc.reverseControlPoints(this._points);
    return cc.CardinalSplineTo.create(this._duration, reversePoints, this._tension)
}, updatePosition: function (newPos) {
    this.target.setPosition(newPos);
    this._previousPosition = newPos
}, getPoints: function () {
    return this._points
}, setPoints: function (points) {
    this._points =
        points
}});
cc.CardinalSplineTo.create = function (duration, points, tension) {
    return new cc.CardinalSplineTo(duration, points, tension)
};
cc.CardinalSplineBy = cc.CardinalSplineTo.extend({_startPosition: null, ctor: function (duration, points, tension) {
    cc.CardinalSplineTo.prototype.ctor.call(this);
    this._startPosition = cc.p(0, 0);
    tension !== undefined && this.initWithDuration(duration, points, tension)
}, startWithTarget: function (target) {
    cc.CardinalSplineTo.prototype.startWithTarget.call(this, target);
    this._startPosition.x = target.getPositionX();
    this._startPosition.y = target.getPositionY()
}, reverse: function () {
    var copyConfig = this._points.slice();
    var current;
    var p = copyConfig[0];
    for (var i = 1; i < copyConfig.length; ++i) {
        current = copyConfig[i];
        copyConfig[i] = cc.pSub(current, p);
        p = current
    }
    var reverseArray = cc.reverseControlPoints(copyConfig);
    p = reverseArray[reverseArray.length - 1];
    reverseArray.pop();
    p.x = -p.x;
    p.y = -p.y;
    reverseArray.unshift(p);
    for (var i = 1; i < reverseArray.length; ++i) {
        current = reverseArray[i];
        current.x = -current.x;
        current.y = -current.y;
        current.x += p.x;
        current.y += p.y;
        reverseArray[i] = current;
        p = current
    }
    return cc.CardinalSplineBy.create(this._duration, reverseArray,
        this._tension)
}, updatePosition: function (newPos) {
    var pos = this._startPosition;
    var posX = newPos.x + pos.x;
    var posY = newPos.y + pos.y;
    this._previousPosition.x = posX;
    this._previousPosition.y = posY;
    this.target.setPosition(posX, posY)
}, clone: function () {
    var a = new cc.CardinalSplineBy;
    a.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
    return a
}});
cc.CardinalSplineBy.create = function (duration, points, tension) {
    return new cc.CardinalSplineBy(duration, points, tension)
};
cc.CatmullRomTo = cc.CardinalSplineTo.extend({ctor: function (dt, points) {
    points && this.initWithDuration(dt, points)
}, initWithDuration: function (dt, points) {
    return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5)
}, clone: function () {
    var action = new cc.CatmullRomTo;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
    return action
}});
cc.CatmullRomTo.create = function (dt, points) {
    return new cc.CatmullRomTo(dt, points)
};
cc.CatmullRomBy = cc.CardinalSplineBy.extend({ctor: function (dt, points) {
    cc.CardinalSplineBy.prototype.ctor.call(this);
    points && this.initWithDuration(dt, points)
}, initWithDuration: function (dt, points) {
    return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5)
}, clone: function () {
    var action = new cc.CatmullRomBy;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
    return action
}});
cc.CatmullRomBy.create = function (dt, points) {
    return new cc.CatmullRomBy(dt, points)
};
cc.ActionTweenDelegate = cc.Class.extend({updateTweenAction: function (value, key) {
}});
cc.ActionTween = cc.ActionInterval.extend({key: "", from: 0, to: 0, delta: 0, ctor: function (duration, key, from, to) {
    cc.ActionInterval.prototype.ctor.call(this);
    this.key = "";
    to !== undefined && this.initWithDuration(duration, key, from, to)
}, initWithDuration: function (duration, key, from, to) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this.key = key;
        this.to = to;
        this.from = from;
        return true
    }
    return false
}, startWithTarget: function (target) {
    if (!target || !target.updateTweenAction)throw"cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this.delta = this.to - this.from
}, update: function (dt) {
    this.target.updateTweenAction(this.to - this.delta * (1 - dt), this.key)
}, reverse: function () {
    return cc.ActionTween.create(this.duration, this.key, this.to, this.from)
}, clone: function () {
    var action = new cc.ActionTween;
    action.initWithDuration(this._duration, this.key, this.from, this.to);
    return action
}});
cc.ActionTween.create = function (duration, key, from, to) {
    var ret = new cc.ActionTween;
    if (ret.initWithDuration(duration, key, from, to))return ret;
    return null
};
