# Button UI

在游戏中，要实现一个简单按钮功能，直接使用cc.Menu还是比较难用的，smart-x提供一个简单的Button

```js
var bird = cc.Button.create("bird1.png", {
	xy: [400, 280],
	scale: 0.5
});
this.delegate(bird, 'click', function(){
	cc.log('button clicked');
});
this.addChild(bird);
```

直接用 cc.Button 创建一个 Button 就可以了，Button 可以通过图片创建，也可以通过任何sprite和labelTTF创建

button.setEnabled(false) 可以禁止 button，并将 button 的图片显示变灰
