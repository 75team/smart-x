/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 *
 * @type Object
 */
cc.visibleRect = {
    _topLeft:cc.p(0,0),
    _topRight:cc.p(0,0),
    _top:cc.p(0,0),
    _bottomLeft:cc.p(0,0),
    _bottomRight:cc.p(0,0),
    _bottom:cc.p(0,0),
    _center:cc.p(0,0),
    _left:cc.p(0,0),
    _right:cc.p(0,0),
    _width:0,
    _height:0,
    init:function(size){
        this._width = size.width;
        this._height = size.height;

        var w = this._width;
        var h = this._height;

        //top
        this._topLeft.y = h;
        this._topRight.x = w;
        this._topRight.y = h;
        this._top.x = w/2;
        this._top.y = h;

        //bottom
        this._bottomRight.x = w;
        this._bottom.x = w/2;

        //center
        this._center.x = w/2;
        this._center.y = h/2;

        //left
        this._left.y = h/2;

        //right
        this._right.x = w;
        this._right.y = h/2;
    }
};

/** @expose */
cc.visibleRect.width;
cc.defineGetterSetter(cc.visibleRect, "width", function(){
    return this._width;
});
/** @expose */
cc.visibleRect.height;
cc.defineGetterSetter(cc.visibleRect, "height", function(){
    return this._height;
});
/** @expose */
cc.visibleRect.topLeft;
cc.defineGetterSetter(cc.visibleRect, "topLeft", function(){
    return this._topLeft;
});
/** @expose */
cc.visibleRect.topRight;
cc.defineGetterSetter(cc.visibleRect, "topRight", function(){
    return this._topRight;
});
/** @expose */
cc.visibleRect.top;
cc.defineGetterSetter(cc.visibleRect, "top", function(){
    return this._top;
});
/** @expose */
cc.visibleRect.bottomLeft;
cc.defineGetterSetter(cc.visibleRect, "bottomLeft", function(){
    return this._bottomLeft;
});
/** @expose */
cc.visibleRect.bottomRight;
cc.defineGetterSetter(cc.visibleRect, "bottomRight", function(){
    return this._bottomRight;
});
/** @expose */
cc.visibleRect.bottom;
cc.defineGetterSetter(cc.visibleRect, "bottom", function(){
    return this._bottom;
});
/** @expose */
cc.visibleRect.center;
cc.defineGetterSetter(cc.visibleRect, "center", function(){
    return this._center;
});
/** @expose */
cc.visibleRect.left;
cc.defineGetterSetter(cc.visibleRect, "left", function(){
    return this._left;
});
/** @expose */
cc.visibleRect.right;
cc.defineGetterSetter(cc.visibleRect, "right", function(){
    return this._right;
});