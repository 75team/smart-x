# 增强的 Node、 Sprite 创建和属性设置

1. cc.createSprite(sprite, attrs)

  创建一个精灵并设置属性

  ```js
  cc.createSprite('bird1.png', {
    xy: [200, 200]
  });
  
  //框架会先去spriteFrameCache中找bird1.png,找不到会去textureCache中找，如果还是找不到会直接找图片创建精灵
  
  cc.createSprite('@Hello World', {
    fontSize: 22,
    xy: [100, 150]
  });
  
  //创建一个LabelTTF，文字内容为 Hello World
  
  ```

1. cc.gray(sprite)

  将一个精灵图片或文字灰度化
  
1. 增强的 cc.color

  ```js
  cc.color('#ff0');
  //支持短颜色值 '#ff0' -> '#ffff00
  cc.color('red');
  //支持颜色常量
  cc.color('rgb(255,255,255));
  //支持rgb颜色
  cc.color('rgba(255,0,0,255));
  //支持rgba颜色
  ```

1. 增强的 node.attr

  增加了 xy、zOrder（同zIndex）、anchor、size、texture、color、background、fontFamily、textAlign、vAlign 属性

