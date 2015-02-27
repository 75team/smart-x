# 改进的动画 api

## smart-x 提供了方便的链式动画 api

  ```js
  sprite.moveTo(0.5, cc.p(100, 200)).easing('easeIn', 2).rotateBy(0.5, 90).reverse().repeat().act();
  //链式中的动画被依次调用， act() 方法来执行
  ```

  ```js
  sprite.moveBy(0.5, cc.p(100, 100)).reverse().spawn();
  sprite.tintBy(0.5, 100, 100, 100).reverse().act();
  //moveby 和 tintBy 动画同时进行，spwan()可以在描述一段连续动画，重新开始描述一段同时播放的动画
  ```
  
  ```js
  sprite.animate(1.5, 'bird1.png', 'bird2.png', 'bird3.png').act();
  //animate可以播放桢动画
  sprite.animate(1.5, 'bird%d.png').act();
  //可以用%d来定义连续播放的桢动画，会分别播放 bird0.png、bird1.png... 直到找不到下一帧
  ```
  
  ```js
  sprite.moveBy(0.5, cc.p(100,100)).then(function(){
    cc.log('moved');
  });
  //then可以用来在一段动画完成后执行某个动作
  ```
  
  ```js
  var birdFlying = cc.AnimationFragement.create().animate(0.5, 'bird%d.png', 1, 3);
			
  bird.play(birdFlying).repeat().act();
  
  //cc.AnimationFragement 对象可以保存一段动画，sprite.play 可以播放保存的动画
  ```
  
  ```js
  var flapping = false;
  var birdFlapping = cc.AnimationFragement.create()
						.moveBy(0.5, cc.p(0, 30))
						.easing('easeOut', 2)
						.reverse()
						.spawn()
						.rotateBy(0.5, -30)
						.reverse();
			
  //Action必须要retain，不然的话异步得不到
  this.retainTarget(birdFlapping.getAction());
			
  var self = this;
			
  this.delegate(this,'click',function(){	
    if(!flapping){
      flapping = true;
      bird.play(birdFlapping).then(function(){
        flapping = false;
      }).act();
    }
  });
  ```
