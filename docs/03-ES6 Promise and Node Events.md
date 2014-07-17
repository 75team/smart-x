# ES5 Promis 和 Node events

## ES5 Promise

smart-x 提供 ECMAScript 6 标准的 [Promise](https://github.com/jakearchibald/es6-promise) 机制

标准风格：

```js
var promise = new cc.Promise(function(resolve, reject){
	...
});

promise.then(function(res){
  ...
}).catch(function(err){
  ...
});
```

when.js 风格的 api：

```js
function p(){
     var deferred = cc.Defer.create();

    dosth async...
    
    return deferred.promise;
}
p().then(function(res){
    ....
});
```

## Node Events

支持标准的 node.js 的 [events](http://nodejs.org/api/events.html)

```js
var emitter = cc.EventEmitter.create();
emitter.emit('my_event', args);
emitter.on('my_event', function(args){
    ......
});
```

## 一些基础方法

* cc.mixin(des, src, mixer)

将src对象上的属性copy到des对象上，默认不覆盖des对象原有属性，mixer为function可以选择属性的覆盖方式

```js
cc.mixin(MyClass.prototype, new cc.EventEmitter);
```
* cc.random()

产生随机性的辅助函数

```js
cc.random(); //同Math.random()
cc.random(1,8); //产生[1、8)之间的整随机数
cc.random([1,3,5]); //随机产生1、3或5
cc.random([1,2,3,4,5], 3); //随机产生1-5中的任意3个数
```

* cc.arrayShuffle(arr)

数组洗牌

* cc.fontFamily.add(fontName, fontPath);

添加字体

* cc.getSpriteFrame(name)

得到一帧图片（SpriteFrame），如果存在于SpriteFrameCache中，会从Cache中取，否则从TextureCatch中找，找不到返回null

* cc.createSprite(sprite, attrs)

详见： 增强的Node、Sprite创建和属性设置

