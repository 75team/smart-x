(function(global){
	var _ScrollView = cc.ScrollView;
	
	var BaseScrollView = _ScrollView.extend({
		ctor: function(viewport, contentSize){
			contentSize = contentSize || viewport;
			this._super();
			
			var scrollLayer = cc.Layer.create();
			scrollLayer.setContentSize(contentSize);
			
			scrollLayer.setClickAndMove(false);

			this.initWithViewSize(viewport, scrollLayer);

			this.getContentLayer = function(){
				return scrollLayer;
			}    			
		}
	});
	
	var ScrollView = BaseScrollView.extend({
		ctor: function(viewport, contentSize){
			this._super(viewport, contentSize);
			
			var scrollLayer = this.getContentLayer();
			
			var self = this;
			var startTime, startOffset, originOffset;
			
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ONE_BY_ONE,
				swallowTouches: false,
				onTouchBegan: function (touch, event) {
					scrollLayer.stopAllActions();
					originOffset = self.getContentOffset();
					return true;
				},
				onTouchMoved: function (touch, event) {
					var now = Date.now();
					if(!startTime || now - startTime > 500){
						startOffset = self.getContentOffset();
						startTime = Date.now();
					}
					return true;
				},
				onTouchEnded: function (touch, event) {
					if(startOffset){
						var offset = self.getContentOffset();
						var dur = Date.now() - startTime;
						var speed = cc.p(0.5*(offset.x - startOffset.x)/dur, 0.5*(offset.y - startOffset.y)/dur);             
						var t = 500;
						var minOffset = self.minContainerOffset();
						var maxOffset = self.maxContainerOffset();
						var s = cc.p(0.5 * speed.x * t, 0.5 * speed.y * t);

						s = cc.pAdd(offset, s);

						if(s.x < minOffset.x || s.y < minOffset.y){
							return;
						}
						if(s.x > maxOffset.x || s.y > maxOffset.x){
							return;
						}

						scrollLayer.moveTo(t/1000,s , cc.EaseOut, 2).act();
					}		
					return true;
				}
			}, this);
		}
	});
	
	var ListView = ScrollView.extend({
		ctor: function(viewport, items){
			this._super(viewport);
			cc.mixin(this, new cc.EventEmitter);
			this._items = items || [];
			this._initItems();
			this.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);
			this.setContentOffset(this.minContainerOffset());
			this.getContentLayer().setClickAndMove(false);
		},
		_initItems: function(){
			var scrollLayer = this.getContentLayer();
			var curSize = scrollLayer.getContentSize();
			//scrollLayer.removeAllChildren();
			var height = 0;
			var self = this;
			
			for(var i = this._items.length - 1; i >= 0; i--){
				var sprite = this._items[i];
				if(!(sprite instanceof cc.Node)){
					sprite = cc.createSprite('@'+sprite);
					this._items[i] = sprite;
				}
				var parent = sprite.getParent();
				if(!parent){
					scrollLayer.addChild(sprite);
					(function(i, item){
						scrollLayer.delegate(item,{
							'click': function(){
								self.emit('itemClicked', item, i);
							},
							'mouseenter, mouseleave': function(event){
								self.emit(event.type, item, i);
							}
						}, false);
					})(i, sprite);
				}
				sprite.attr({
					anchor: [0.5, 0],
					xy: [curSize.width / 2, height]
				});
				height += sprite.getContentSize().height;
			}			
			scrollLayer.attr('height', height);
		},
		pushItem: function(itemSprite){
			
		},
		popItem: function(itemSprite){
			
		},
		insertItem: function(itemSprite, idx){
			idx = idx || this._items.length;
			this._items.splice(idx, 0, itemSprite);
			this._initItems();
			var offset = this.getContentOffset();
			var _fixedSize = this._items[idx].getContentSize();
			this.setContentOffset(cc.p(offset.x, offset.y - _fixedSize.height));
		},
		removeItem: function(itemSprite, idx){
			
		}
	});
	
	var PageView = BaseScrollView.extend({
		ctor: function(viewport, pagewidth, pages){
			if(arguments.length <= 2){
				pages = pagewidth;
				pagewidth = viewport.width;
			}	
			var offsetX = 0.5 * (viewport.width - pagewidth);
			this._offsetX = offsetX;
			
			var contentSize = cc.size(pagewidth * pages + 2 * offsetX, viewport.height);
			this._super(viewport, contentSize);			
		
			cc.mixin(this, new cc.EventEmitter);
			
			this.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
			
			this._pagewidth = pagewidth;
			
			var scrollLayer = this.getContentLayer();
			
			for(var i = 0; i < pages; i++){
				var pageLayer = cc.Layer.create();

				pageLayer.attr({
					xy: [offsetX + pagewidth * i, 0],
					tag: i,
					size: [pagewidth, viewport.height],
					//backgroundColor: 'rgb('+i*50+',88,87)'
				});

				pageLayer.setClickAndMove(false);

				scrollLayer.addChild(pageLayer);
			}
			
			var self = this;
			var startTime, startOffset, originOffset, currentPage;	
			
			cc.eventManager.addListener({
				event: cc.EventListener.TOUCH_ONE_BY_ONE,
				swallowTouches: false,
				onTouchBegan: function (touch, event) {
					scrollLayer.stopAllActions();
					currentPage = self.getPage();
					originOffset = self.getContentOffset();
					return true;
				},
				onTouchMoved: function (touch, event) {
					var now = Date.now();
					if(!startTime || now - startTime > 500){
						startOffset = self.getContentOffset();
						startTime = Date.now();
					}
					return true;
				},
				onTouchEnded: function (touch, event) {
					if(startOffset){
						var offset = self.getContentOffset();
						var dur = Date.now() - startTime;
						var minOffset = self.minContainerOffset();
						var maxOffset = self.maxContainerOffset();

						if(offset.x < minOffset.x){
							self.setPage(self.getMaxPage(), -1);
							return;
						}
						if(offset.x > maxOffset.x){
							self.setPage(0, -1);
							return;
						}

						var speed = cc.p((offset.x - startOffset.x)/dur, (offset.y - startOffset.y)/dur);

						if(Math.max(offset.x - originOffset.x, offset.y - originOffset.y) < 15){
							speed = 0;
						}

						//cc.log(offset, speed.x );
						if(Math.abs(speed.x) > 0.3){
							var t = 500;
							if(speed.x > 0){
								//move left
								var page = Math.max(0, currentPage - 1);
								self.setPage(page, 0.2);

							}else{
								//move right
								var page = Math.min(self.getMaxPage(), currentPage + 1);
								self.setPage(page, 0.2);
							}
						}else{
							self.setPage(self.getPage(), 0.2);
						}
					}else{
						self.setPage(self.getPage(), 0.2);
					}		
					return true;
				}
			}, this);
			
			this._page = null;
		},
		setPage: function(page, dur){
			var oldPage = this._page;

			if(oldPage !== page){
				this.emit('change', page, oldPage);
			}

			dur = dur || 0;

			if(dur >= 0){
				var self = this;
				var offset = cc.p(-this._pagewidth * page, 0);

				var scrollLayer = this.getContentLayer();
				scrollLayer.stopAllActions();
				scrollLayer.moveTo(dur, offset).then(function(){
					scrollLayer.moveTo(dur, offset).act();
				}).act();
			}

			this._page = page;
		},
		getPage: function(){
			var offsetX = this.getContentOffset().x;
			return Math.min(Math.round(-offsetX / this._pagewidth), this.getMaxPage());
		},
		getPageLayer: function(page){
			return this.getContentLayer().getChildByTag(page);
		},
		getMaxPage: function(){
			var offsetX = this.minContainerOffset().x;
			return Math.round(-offsetX / this._pagewidth);        
		}		
	});
	
	ScrollView.create = function(viewport, contentSize){
		return new ScrollView(viewport, contentSize);
	};
	
	ListView.create = function(viewport, items){
		return new ListView(viewport, items);
	};
	
	PageView.create = function(viewport, pagewidth, pages){
		return new PageView(viewport, pagewidth, pages);
	};
	
	cc.ScrollView = ScrollView;
	cc.ListView = ListView;
	cc.PageView = PageView;
	
})(this);