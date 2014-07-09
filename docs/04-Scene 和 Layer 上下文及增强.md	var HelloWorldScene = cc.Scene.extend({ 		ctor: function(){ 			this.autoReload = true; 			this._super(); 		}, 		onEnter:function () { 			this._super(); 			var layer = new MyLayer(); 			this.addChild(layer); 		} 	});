# Scene 和 Layer 上下文及增强

## Scene 的增强

1. 提供 autoRelease 属性，默认为 false
  
  如果在popScene回到当前场景的时候，希望自动刷新场景，可以将这个属性置为 true
  
```js
	var HelloWorldScene = cc.Scene.extend({
		ctor: function(){
			this.autoReload = true;
			this._super();
		},
		onEnter:function () {
			this._super();
			var layer = new MyLayer();
			this.addChild(layer);
		}
	});
```

2. 
