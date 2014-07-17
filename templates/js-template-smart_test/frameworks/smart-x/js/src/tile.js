(function(global){
	'use strict';
	
	var TileLayer = cc.Layer.extend({
		ctor: function(cellWidth, cellHeight){
			this._super();
			this.cellSize = cc.size(cellWidth, cellHeight);
		},
		setTileAt: function(sprite, x, y, ox, oy){
			var tile = cc.p(x, y);
			var offset;
			if(typeof y == 'object'){
				offset = y;
			}else{
				offset = cc.p(ox, oy);
			}
			var loc = this.tileToLocation(tile);
			sprite.attr(cc.pAdd(loc, offset));
			this.addChild(sprite);
		},
		//tileLayer.convertToNodeSpace(location); first
		locationToTile: function(loc) {
			var scaleX = this.getScaleX(), scaleY = this.getScaleY();
			var size = this.cellSize;

			var x = 0 | (loc.x / (size.width * scaleX)),
			y = 0 | (loc.y / (size.height * scaleY));

			return cc.p(x, y);
		},
		tileToLocation: function(tile) {
			var scaleX = this.getScaleX(), scaleY = this.getScaleY();
			var size = this.cellSize;

			var loc = cc.p((0.5 + tile.x) * size.width * scaleX,
					(0.5 + tile.y) * size.height * scaleY);

			return loc;
		}
	});
	
	TileLayer.create = function(w, h){
		return new TileLayer(w, h);
	}
	
	cc.TileLayer = TileLayer;
})(this);