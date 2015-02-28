# 简单瓦片

## 不同于瓦片地图，smart-x还提供了一个非常简单的瓦片坐标机制

```js
      var tileLayer = cc.TiledLayer.create(80, 80);
      var bird = cc.createSprite('bird1.png');
      tileLayer.setTileAt(bird, 1, 1);
      
      var bird2 = cc.createSprite('bird2.png');
      tileLayer.setTileAt(bird2, 2, 2);

      this.addChild(tileLayer);
```

1. tileLayer.setTileAt(node, x, y, offsetX, offsetY)

  设置一个元素到瓦片层，网格坐标为x,y，偏移量为offsetX, offsetY

2. tileLayer.locationToTile(loc)
  
  转换一个坐标到瓦片地图的网格坐标
  
3. tileLayer.tileToLocation(tile)
  
  转换一个瓦片网格坐标到tileLayer的相对坐标
