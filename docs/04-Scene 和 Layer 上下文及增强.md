# Scene 和 Layer 上下文及增强

## Scene 的增强

1. 提供 autoReload 属性，默认为 false
  
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

2. 提供 putExtra 属性，建议 Scene 的构造不带参数，需要提供给上下文使用的参数通过 putExtra 提供

  参见 Layer 的 getExtras
  
## Layer 的增强
1. layer.setTimeout、layer.setInterval

  上下文相关的 timer，会随着layer的退出（onExit）而自动停止

1. layer.registerDelegator、 layer.delegate
   
  事件机制，参见[改进的事件处理机制](http://smart-x.akira-cn.gitpress.org/~docs/07-improved%20event%20model.md)

1. layer.getExtras
  
  得到 Scene 上下文中的额外参数，要求在 Layer 的 onEnter 事件之后才能使用

1. layer.setBackground(imageOrColor)

  设置 layer 的背景，可以是图片url或者是颜色

1. layer.retainTarget(node)

  retain一个元素，直到这个Layer退出（onExit）时被自动释放

1. layer.addToBatch(node, batchName)

  将一个元素添加到batchNode中去
 
1. layer.publish(message, args...)

  跨层发布一个消息

1. layer.subscribe(message, handler)

  跨层接收一个消息

1. layer.unsubscribe(message<, handler>)
