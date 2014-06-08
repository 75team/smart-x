(function(global){
	'use strict';

	if(!global.console){
		global.console = {
				log: cc.log,
				error: cc.log,
				trace: cc.log,
				warn: cc.log
		};
	}
	
	if(typeof navigator == 'undefined'){
		if(cc.navigator){
			global.navigator = cc.navigator;
		}else{
			global.navigator = {};
			navigator.userAgent = "Cocos2dx Mac OSX";
		}
	}
	
	var isOSX = navigator.userAgent.indexOf('Mac OSX') >= 0;
	var isHtml5 = navigator.userAgent.indexOf('Cocos2dx') < 0;
	var isAndroid = navigator.userAgent.indexOf('Android') >= 0;
	var isIOS = navigator.userAgent.indexOf('iOS') >= 0;	
	
	cc.isOSX = isOSX;
	cc.isHtml5 = isHtml5;
	cc.isAndroid = isAndroid;
	cc.isIOS = isIOS;
	cc.isOpenGL = cc.sys.capabilities.opengl;	
	
	if(!cc.isOpenGL){
		cc.TransitionCrossFade = cc.TransitionFadeBL = cc.TransitionFadeTR = cc.TransitionFade;
	}

	var timers = [null];
	function setTimer(target, callback, interval, repeat, delay, paused) {
		if(isHtml5){
			setTimeout(function(){
				cc.director.getScheduler().scheduleCallbackForTarget(target, callback, interval / 1000, repeat, delay, paused);
			}, 0);
		}else{
			cc.director.getScheduler().unscheduleCallbackForTarget(target, callback);
			cc.director.getScheduler().scheduleCallbackForTarget(target, callback, interval / 1000, repeat, delay, paused);
		}
		timers.push(callback);
		return timers.length - 1
	}
	function clearTimer(target, id) {
		var callback = timers[id];
		if (callback != null) {
			cc.director.getScheduler().unscheduleCallbackForTarget(target, callback);
			timers[id] = null;
		}
	}
	function clearAllTimers(target){
		cc.director.getScheduler().unscheduleAllCallbacksForTarget(target);
	}
	
	cc.Node.prototype.setTimeout = function (callback, interval) {
		return setTimer(this||global, callback, interval||0, 0, 0, false);
	};
	cc.Node.prototype.setInterval = function (callback, interval) {
		return setTimer(this||global, callback, interval||0, cc.REPEAT_FOREVER, 0, false);
	};
	cc.Node.prototype.clearAllTimers = function(){
		return clearAllTimers(this||global);
	};
	cc.Node.prototype.clearInterval = cc.Node.prototype.clearTimeout = function (id) {
		return clearTimer(this||global, id);
	};
	
	cc.mixin = function(des, src, mixer) {
		mixer = mixer || function(d, s){
			if(typeof d === 'undefined'){
				return s;
			}
		}

		if(mixer == true){
			mixer = function(d, s){return s};
		} 		

		for (var i in src) {
			var v = mixer(des[i], src[i], i, des, src);
			if(typeof v !== 'undefined'){
				des[i] = v;
			}
		}

		return des;
	};	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
		return Array.isArray(ar);
	}
	cc.isArray = isArray;

	function isBoolean(arg) {
		return typeof arg === 'boolean';
	}
	cc.isBoolean = isBoolean;

	function isNull(arg) {
		return arg === null;
	}
	cc.isNull = isNull;

	function isNullOrUndefined(arg) {
		return arg == null;
	}
	cc.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
		return typeof arg === 'number';
	}
	cc.isNumber = isNumber;

	function isString(arg) {
		return typeof arg === 'string';
	}
	cc.isString = isString;

	function isSymbol(arg) {
		return typeof arg === 'symbol';
	}
	cc.isSymbol = isSymbol;

	function isUndefined(arg) {
		return arg === void 0;
	}
	cc.isUndefined = isUndefined;

	function isRegExp(re) {
		return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	cc.isRegExp = isRegExp;

	function isObject(arg) {
		return typeof arg === 'object' && arg !== null;
	}
	cc.isObject = isObject;

	function isDate(d) {
		return isObject(d) && objectToString(d) === '[object Date]';
	}
	cc.isDate = isDate;

	function isError(e) {
		return isObject(e) &&
		(objectToString(e) === '[object Error]' || e instanceof Error);
	}
	cc.isError = isError;

	function isFunction(arg) {
		return typeof arg === 'function';
	}
	cc.isFunction = isFunction;	

	cc.random = function(n, m){
		if(typeof n === 'number'){
			m = m || 0;
			return 0 | (n + Math.random() * (m - n));
		}
		else if(n instanceof Array){
			var len = n.length;
			if(m == null){
				return n[0 | Math.random() * (len)];
			}else{
				var ret = cc.arrayShuffle(n.slice(0));
				return ret.slice(0, m);
			}   
		}
		else{
			return Math.random();
		}
	}

	cc.tmpl = function(str, data, format){      
		str = str.replace(/\{([^\{\}]*)\}/g, function(sub, expr){
			if(!expr) return '';
			try{
				var r = (new Function("data", "with(data){return (" + expr + ");}"))(data);
				return format? format(r, expr) : r;
			}catch(ex){
				return sub;
			}
		}
		);

		return str;
	};

	cc.arrayShuffle = function(arr){
		for (var i = arr.length - 1; i > 0; i--) {
			var j = 0|(Math.random() * (i + 1));
			var tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
		}  
		return arr;
	}
	
	if(!cc.StringToArray){
		cc.StringToArray = function(value){
			return value.trim().split(/\s*,\s*/).map(function(o){return parseInt(o)});
		}
	}
	
	var namedMap = {
		aqua: '#00FFFF',
		black: '#000000',
		blue: '#0000FF',
		fuchsia: '#00ff00',
		grey: '#808080',
		gray: '#808080',
		green: '#008000',
		lime: '#00FF00',
		maroon: '#800000',
		navy: '#000080',
		olive: '#808000',
		purple: '#800080',
		red: '#FF0000',
		silver: '#C0C0C0',
		teal: '#008080',
		white: '#FFFFFF',
		yellow: '#FFFF00',
	};
	
	var colorPattern = /^aqua$|^black$|^blue$|^fuchsia$|^grey|^gray$|^green$|^lime$|^maroon$|^navy$|^olive$|^purple$|^red$|^silver$|^teal$|^white$|^yellow$|^rgb\(.*?\)$|^rgba\(.*?\)$|^#[0-9a-fA-F]{3}$|^#[0-9a-fA-F]{6}$/;
	cc.isColorString = function(colorStr){
		colorStr = colorStr.trim();
		return colorPattern.test(colorStr);
	};
	
	if(!isHtml5){
		var _color = cc.color;
		cc.color = function(){
			var color = _color.apply(cc, arguments);
			if(color.a == null) color.a = 255;
			return color;
		}
	}
	var _hexToColor = cc.hexToColor;
	cc.hexToColor = function(str){
		str = str.trim();
		if(str[0] === '#'){
			if(str.length === 4){
				str = str.replace(/([^#])/g, '$1$1');
			}
		}else if(str == 'transparent'){
			return cc.color(0, 0, 0, 0);
		}else if(/^rgba?\(/.test(str)){
			str = str.replace(/^rgba?\(/, '');
			var values = cc.StringToArray(str);
			if(values.length < 4){
				values[3] = 255;
			}
			return cc.color.apply(null, values);
		}else{
			str = namedMap[str];
		}
		var ret = _hexToColor(str);
		if(null == ret.a){
			ret.a = 255;
		}
		return ret;
	}
	
	cc.fontFamily = {
		_fonts: {},
		add: function(fontName, fontFile){
			this._fonts[fontName] = fontFile;
		}
	}
	
	if(!cc.textureCache.getTextureForKey){
		cc.textureCache.getTextureForKey = cc.textureCache.textureForKey;
	}
	
	cc.getSpriteFrame = function(key, cached){
		var frame = cc.spriteFrameCache.getSpriteFrame(key);

		if(!cached && !frame){
			var texture = cc.textureCache.getTextureForKey(key);
			if(!texture){
				texture = cc.textureCache.addImage(key);
			}
			if(texture && (!isHtml5 || texture._isLoaded)){
				var size = texture.getContentSize();
				var frame = cc.SpriteFrame.create(texture, cc.rect(0, 0, size.width, size.height));
			}
		}

		return frame;
	}
	
	cc.createSprite = function(sprite, style){
		if(typeof sprite === 'object' && !(sprite instanceof cc.Sprite)
				&& style == null){
			//json
			style = sprite;
			if(sprite.texture){
				sprite = sprite.texture;
				delete style.texture;
			}else{
				sprite = cc.Sprite.create();
			}
		} 
		
		style = style || {};
		
		if(typeof sprite === 'string'){
			if(sprite[0] === '@'){
				sprite = cc.LabelTTF.create(sprite.slice(1));
			}else if(/\.plist$/.test(sprite)){
				sprite = cc.ParticleSystem.create(sprite);
			}else{
				var frame = cc.getSpriteFrame(sprite);
				sprite = cc.Sprite.create();
				if(frame){
					sprite.initWithSpriteFrame(frame);
				} 
				//sprite.setCascadeColorEnabled && sprite.setCascadeColorEnabled(true);
			}
		}
		
		sprite.setCascadeOpacityEnabled && sprite.setCascadeOpacityEnabled(true);
		
		sprite.attr(style);
		
		return sprite;
	}
	
	cc.makePoint2D = function(pointOrArray){
		if(isArray(pointOrArray)){
			return cc.p(pointOrArray[0], pointOrArray[1]);
		}else{
			return cc.p(pointOrArray.x, pointOrArray.y);
		}
	}
	
	cc.makeSize2D = function(sizeOrArray){
		if(isArray(sizeOrArray)){
			return cc.size(sizeOrArray[0], sizeOrArray[1]);
		}else{
			return cc.size(sizeOrArray.width, sizeOrArray.height);
		}
	}
	
	if(!isHtml5){
		cc.LabelTTF.prototype.setColor = function(color){
			this.getChildren()[0].setColor(color);
		}
		cc.LabelTTF.prototype.getColor = function(){
			return this.getChildren()[0].getColor();
		}
	}
	
	cc.Node.prototype._attr = cc.Node.prototype.attr;
	var attrMap = {
		xy: {
			get: function(node){
				return cc.p(node.x, node.y);
			},
			set: function(node, value){
				value = cc.makePoint2D(value);
				node.attr({
					x: value.x,
					y: value.y
				});
			}
		},
		anchor: {
			get: function(node){
				return cc.p(node.anchorX, node.anchorY);
			},
			set: function(node, value){
				value = cc.makePoint2D(value);
				node.attr({
					anchorX: value.x,
					anchorY: value.y
				});
			}
		},
		size: {
			get: function(node){
				return cc.size(node.width, node.height);
			},
			set: function(node, value){
				value = cc.makeSize2D(value);
				node.attr({
					width: value.width,
					height: value.height
				});
				if(node.setDimensions){
					node.setDimensions(value);
				}
			}			
		},
		//texture: 'abc.png rect(10,10,100,100)'
		texture: {
			get: function(node){
				return node.texture;
			},
			set: function(node, value){
				value = value.trim();
				var matches = value.match(/(.*)\s*(?:rect\((.*)\))/);
				var rect = null;
				if(matches){
					value = matches[1].trim();
					rect = cc.StringToArray(matches[2]);
					rect = cc.rect.apply(null, rect);
				}
				node.initWithSpriteFrame(cc.getSpriteFrame(value));
				if(rect && node.setTextureRect){
					node.setTextureRect(rect);
				}
			}
		},
		color: {
			get: function(node){
				return node.getColor();
			},
			set: function(node, value){
				node.setColor(cc.color(value));
			}
		},
		background: {
			get: function(node){
				return node.__backgroundElement;
			},
			set: function(node, value){
				var oldBg = node.__backgroundElement;
				if(oldBg){
					oldBg.removeFromParent(true);
				}
				var size = node.attr('size');

				if(node instanceof cc.Layer && size.width == 0 && size.height == 0){
					size = cc.director.getWinSize();
				}
				if(!isString(value) || cc.isColorString(value)){
					value = cc.color(value);
					var colorLayer = cc.LayerColor.create(value);
					colorLayer.setTag(-1);
					colorLayer.setLocalZOrder(-1);
					
					colorLayer.attr({
						size: size
					});
					
					node.addChild(colorLayer);
				}else{
					var sprite = cc.createSprite(value, {
						xy: [size.width/2, size.height/2],
						zIndex: -1
					});
					
					node.addChild(sprite);						
				}
			}
		},
		fontFamily: {
			get: function(node){
				return node.__fontFamilyName || node.fontName;
			},
			set: function(node, value){
				if(value in cc.fontFamily._fonts){
					node.fontName = cc.fontFamily._fonts[value];
					node.__fontFamilyName = value;
				}else{
					node.fontName = value;
				}
			}
		}
	}
	
	function camelize(s) {
		return s.replace(/\-(\w)/ig, function(a, b) {
			return b.toUpperCase();
		});
	}
	
	cc.Node.prototype.attr = function(attrs, value){
		if(isString(attrs)){
			if(arguments.length <= 1){ //getter
				if(attrs in attrMap){
					return attrMap[attrs].get(this);
				}else{
					return this[attrs];
				}
			}else{
				var _key = attrs;
				attrs = {};
				attrs[_key] = value;
			}
		}
		
		for(var key in attrs){
			key = camelize(key);
			if(key in attrMap){
				attrMap[key].set(this, attrs[key]);
			}else{
				this[key] = attrs[key];
			}
		}
	}
	
	cc.showMessage = function(container, msg, width, height){
		width = width || 250;
		height = height || 80;
		var mask = cc.LayerColor.create(cc.color('rgba(0,0,0,192)'));
		var winSize = cc.director.getWinSize();

		mask.setContentSize(width, height);
		mask.setPosition(winSize.width / 2 - width / 2, winSize.height / 2 - height / 2);
		container.addChild(mask, 9999);

		var loadingText = cc.createSprite('@' + msg, {
			xy: [width / 2, height / 2],
			fontSize: 26
		});
		mask.addChild(loadingText);
		return mask;
	}
	
	cc.KEY.back = 6;
	cc.mixin(cc.game, new cc.EventEmitter);
	cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function(){
		cc.game.emit('hide');
	});	
	cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function(){
		cc.game.emit('show');
	});	

	if(cc.Sprite.prototype.setShaderProgram && !cc.Sprite.prototype.setGLProgram){
		cc.Sprite.prototype.setGLProgram = cc.Sprite.prototype.setShaderProgram;
	}
	
	if(cc.isOpenGL && !cc.gray){
		if(!cc.GLProgram.createWithByteArrays){
			cc.GLProgram.createWithByteArrays = function(vert, frag){
				var shader = cc.GLProgram.create();  
				shader.initWithVertexShaderByteArray(vert, frag); 
				shader.link();  
				shader.updateUniforms();
				setTimeout(function(){
					shader.link();  
					shader.updateUniforms();				
				}, 0);
				return shader;
			}
		}
		
		var SHADER_POSITION_GRAY_FRAG = 
			"varying vec4 v_fragmentColor;\n"+  
			"varying vec2 v_texCoord;\n"+    
			(isHtml5? "uniform sampler2D CC_Texture0;\n":"")+
			"void main()\n"+         
			"{\n"+
			"	vec4 v_orColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);\n"+
			"	float gray = dot(v_orColor.rgb, vec3(0.299, 0.587, 0.114));\n"+
			"	gl_FragColor = vec4(gray, gray, gray, v_orColor.a);\n"+
			"}\n";
		
		var SHADER_POSITION_GRAY_VERT = 
			"attribute vec4 a_position;\n"+
			"attribute vec2 a_texCoord;\n"+
			"attribute vec4 a_color;\n"+
			"\n"+
			"varying vec4 v_fragmentColor;\n"+
			"varying vec2 v_texCoord;\n"+
			"\n"+                               
			"void main()\n"+
			"{\n"+                           
			"gl_Position = "+ (isHtml5?"(CC_PMatrix * CC_MVMatrix)":"CC_PMatrix") + " * a_position;\n"+
			"v_fragmentColor = a_color;\n"+
			"v_texCoord = a_texCoord;\n"+
			"}";
		
		cc.gray = function(sprite){ 
			var shader = cc.GLProgram.createWithByteArrays(SHADER_POSITION_GRAY_VERT, SHADER_POSITION_GRAY_FRAG);
	        shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);  
	        shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);  
	        shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);            	
	        sprite.setGLProgram(shader);      		
		}

		cc.ungray = function(sprite){
			var shader = cc.GLProgram.createWithByteArrays(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_FRAG);
			shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);  
			shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);  
			shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);            	
			sprite.setGLProgram(shader);  			
		}
	}else{
		cc.gray = function(){
			cc.log('Do not support shader in this display mode.');
		};
		cc.ungray = function(){
			cc.log('Do not support shader in this display mode.');
		};
	}
})(this);