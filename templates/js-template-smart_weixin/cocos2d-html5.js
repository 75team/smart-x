var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._tmp.WebGLColor = function () {
    cc.color = function (a, c, b, d, e, f) {
        return void 0 === a ? new cc.Color(0, 0, 0, 255, e, f) : "string" === typeof a ? (a = cc.hexToColor(a), new cc.Color(a.r, a.g, a.b, a.a)) : "object" === typeof a ? new cc.Color(a.r, a.g, a.b, a.a, a.arrayBuffer, a.offset) : new cc.Color(a, c, b, d, e, f)
    };
    cc.Color = function (a, c, b, d, e, f) {
        this._arrayBuffer = e || new ArrayBuffer(cc.Color.BYTES_PER_ELEMENT);
        this._offset = f || 0;
        e = this._arrayBuffer;
        f = this._offset;
        var k = Uint8Array.BYTES_PER_ELEMENT;
        this._rU8 = new Uint8Array(e, f, 1);
        this._gU8 =
            new Uint8Array(e, f + k, 1);
        this._bU8 = new Uint8Array(e, f + 2 * k, 1);
        this._aU8 = new Uint8Array(e, f + 3 * k, 1);
        this._rU8[0] = a || 0;
        this._gU8[0] = c || 0;
        this._bU8[0] = b || 0;
        this._aU8[0] = d || 255;
        void 0 === d && (this.a_undefined = !0)
    };
    cc.Color.BYTES_PER_ELEMENT = 4;
    var b = cc.Color.prototype;
    b._getR = function () {
        return this._rU8[0]
    };
    b._setR = function (a) {
        this._rU8[0] = 0 > a ? 0 : a
    };
    b._getG = function () {
        return this._gU8[0]
    };
    b._setG = function (a) {
        this._gU8[0] = 0 > a ? 0 : a
    };
    b._getB = function () {
        return this._bU8[0]
    };
    b._setB = function (a) {
        this._bU8[0] = 0 > a ? 0 :
            a
    };
    b._getA = function () {
        return this._aU8[0]
    };
    b._setA = function (a) {
        this._aU8[0] = 0 > a ? 0 : a
    };
    cc.defineGetterSetter(b, "r", b._getR, b._setR);
    cc.defineGetterSetter(b, "g", b._getG, b._setG);
    cc.defineGetterSetter(b, "b", b._getB, b._setB);
    cc.defineGetterSetter(b, "a", b._getA, b._setA);
    cc.Vertex2F = function (a, c, b, d) {
        this._arrayBuffer = b || new ArrayBuffer(cc.Vertex2F.BYTES_PER_ELEMENT);
        this._offset = d || 0;
        this._xF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
        this._yF32 = new Float32Array(this._arrayBuffer, this._offset +
            4, 1);
        this._xF32[0] = a || 0;
        this._yF32[0] = c || 0
    };
    cc.Vertex2F.BYTES_PER_ELEMENT = 8;
    Object.defineProperties(cc.Vertex2F.prototype, {x: {get: function () {
        return this._xF32[0]
    }, set: function (a) {
        this._xF32[0] = a
    }, enumerable: !0}, y: {get: function () {
        return this._yF32[0]
    }, set: function (a) {
        this._yF32[0] = a
    }, enumerable: !0}});
    cc.Vertex3F = function (a, c, b, d, e) {
        this._arrayBuffer = d || new ArrayBuffer(cc.Vertex3F.BYTES_PER_ELEMENT);
        this._offset = e || 0;
        d = this._arrayBuffer;
        e = this._offset;
        this._xF32 = new Float32Array(d, e, 1);
        this._xF32[0] =
            a || 0;
        this._yF32 = new Float32Array(d, e + Float32Array.BYTES_PER_ELEMENT, 1);
        this._yF32[0] = c || 0;
        this._zF32 = new Float32Array(d, e + 2 * Float32Array.BYTES_PER_ELEMENT, 1);
        this._zF32[0] = b || 0
    };
    cc.Vertex3F.BYTES_PER_ELEMENT = 12;
    Object.defineProperties(cc.Vertex3F.prototype, {x: {get: function () {
        return this._xF32[0]
    }, set: function (a) {
        this._xF32[0] = a
    }, enumerable: !0}, y: {get: function () {
        return this._yF32[0]
    }, set: function (a) {
        this._yF32[0] = a
    }, enumerable: !0}, z: {get: function () {
        return this._zF32[0]
    }, set: function (a) {
        this._zF32[0] =
            a
    }, enumerable: !0}});
    cc.Tex2F = function (a, c, b, d) {
        this._arrayBuffer = b || new ArrayBuffer(cc.Tex2F.BYTES_PER_ELEMENT);
        this._offset = d || 0;
        this._uF32 = new Float32Array(this._arrayBuffer, this._offset, 1);
        this._vF32 = new Float32Array(this._arrayBuffer, this._offset + 4, 1);
        this._uF32[0] = a || 0;
        this._vF32[0] = c || 0
    };
    cc.Tex2F.BYTES_PER_ELEMENT = 8;
    Object.defineProperties(cc.Tex2F.prototype, {u: {get: function () {
        return this._uF32[0]
    }, set: function (a) {
        this._uF32[0] = a
    }, enumerable: !0}, v: {get: function () {
        return this._vF32[0]
    }, set: function (a) {
        this._vF32[0] =
            a
    }, enumerable: !0}});
    cc.Quad2 = function (a, c, b, d, e, f) {
        this._arrayBuffer = e || new ArrayBuffer(cc.Quad2.BYTES_PER_ELEMENT);
        this._offset = f || 0;
        e = this._arrayBuffer;
        f = cc.Vertex2F.BYTES_PER_ELEMENT;
        this._tl = a ? new cc.Vertex2F(a.x, a.y, e, 0) : new cc.Vertex2F(0, 0, e, 0);
        this._tr = c ? new cc.Vertex2F(c.x, c.y, e, f) : new cc.Vertex2F(0, 0, e, f);
        this._bl = b ? new cc.Vertex2F(b.x, b.y, e, 2 * f) : new cc.Vertex2F(0, 0, e, 2 * f);
        this._br = d ? new cc.Vertex2F(d.x, d.y, e, 3 * f) : new cc.Vertex2F(0, 0, e, 3 * f)
    };
    cc.Quad2.BYTES_PER_ELEMENT = 32;
    cc.Quad3 = function (a, c, b, d) {
        this.bl = a || new cc.Vertex3F(0, 0, 0);
        this.br = c || new cc.Vertex3F(0, 0, 0);
        this.tl = b || new cc.Vertex3F(0, 0, 0);
        this.tr = d || new cc.Vertex3F(0, 0, 0)
    };
    Object.defineProperties(cc.Quad2.prototype, {tl: {get: function () {
        return this._tl
    }, set: function (a) {
        this._tl.x = a.x;
        this._tl.y = a.y
    }, enumerable: !0}, tr: {get: function () {
        return this._tr
    }, set: function (a) {
        this._tr.x = a.x;
        this._tr.y = a.y
    }, enumerable: !0}, bl: {get: function () {
        return this._bl
    }, set: function (a) {
        this._bl.x = a.x;
        this._bl.y = a.y
    }, enumerable: !0}, br: {get: function () {
        return this._br
    },
        set: function (a) {
            this._br.x = a.x;
            this._br.y = a.y
        }, enumerable: !0}});
    cc.V3F_C4B_T2F = function (a, c, b, d, e) {
        this._arrayBuffer = d || new ArrayBuffer(cc.V3F_C4B_T2F.BYTES_PER_ELEMENT);
        this._offset = e || 0;
        d = this._arrayBuffer;
        e = this._offset;
        var f = cc.Vertex3F.BYTES_PER_ELEMENT;
        this._vertices = a ? new cc.Vertex3F(a.x, a.y, a.z, d, e) : new cc.Vertex3F(0, 0, 0, d, e);
        this._colors = c ? cc.color(c.r, c.g, c.b, c.a, d, e + f) : cc.color(0, 0, 0, 0, d, e + f);
        this._texCoords = b ? new cc.Tex2F(b.u, b.v, d, e + f + cc.Color.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, d, e +
            f + cc.Color.BYTES_PER_ELEMENT)
    };
    cc.V3F_C4B_T2F.BYTES_PER_ELEMENT = 24;
    Object.defineProperties(cc.V3F_C4B_T2F.prototype, {vertices: {get: function () {
        return this._vertices
    }, set: function (a) {
        var c = this._vertices;
        c.x = a.x;
        c.y = a.y;
        c.z = a.z
    }, enumerable: !0}, colors: {get: function () {
        return this._colors
    }, set: function (a) {
        var c = this._colors;
        c.r = a.r;
        c.g = a.g;
        c.b = a.b;
        c.a = a.a
    }, enumerable: !0}, texCoords: {get: function () {
        return this._texCoords
    }, set: function (a) {
        this._texCoords.u = a.u;
        this._texCoords.v = a.v
    }, enumerable: !0}});
    cc.V3F_C4B_T2F_Quad =
        function (a, c, b, d, e, f) {
            this._arrayBuffer = e || new ArrayBuffer(cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT);
            this._offset = f || 0;
            e = this._arrayBuffer;
            f = this._offset;
            var k = cc.V3F_C4B_T2F.BYTES_PER_ELEMENT;
            this._tl = a ? new cc.V3F_C4B_T2F(a.vertices, a.colors, a.texCoords, e, f) : new cc.V3F_C4B_T2F(null, null, null, e, f);
            this._bl = c ? new cc.V3F_C4B_T2F(c.vertices, c.colors, c.texCoords, e, f + k) : new cc.V3F_C4B_T2F(null, null, null, e, f + k);
            this._tr = b ? new cc.V3F_C4B_T2F(b.vertices, b.colors, b.texCoords, e, f + 2 * k) : new cc.V3F_C4B_T2F(null,
                null, null, e, f + 2 * k);
            this._br = d ? new cc.V3F_C4B_T2F(d.vertices, d.colors, d.texCoords, e, f + 3 * k) : new cc.V3F_C4B_T2F(null, null, null, e, f + 3 * k)
        };
    cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT = 96;
    Object.defineProperties(cc.V3F_C4B_T2F_Quad.prototype, {tl: {get: function () {
        return this._tl
    }, set: function (a) {
        var c = this._tl;
        c.vertices = a.vertices;
        c.colors = a.colors;
        c.texCoords = a.texCoords
    }, enumerable: !0}, bl: {get: function () {
        return this._bl
    }, set: function (a) {
        var c = this._bl;
        c.vertices = a.vertices;
        c.colors = a.colors;
        c.texCoords = a.texCoords
    },
        enumerable: !0}, tr: {get: function () {
        return this._tr
    }, set: function (a) {
        var c = this._tr;
        c.vertices = a.vertices;
        c.colors = a.colors;
        c.texCoords = a.texCoords
    }, enumerable: !0}, br: {get: function () {
        return this._br
    }, set: function (a) {
        var c = this._br;
        c.vertices = a.vertices;
        c.colors = a.colors;
        c.texCoords = a.texCoords
    }, enumerable: !0}, arrayBuffer: {get: function () {
        return this._arrayBuffer
    }, enumerable: !0}});
    cc.V3F_C4B_T2F_QuadZero = function () {
        return new cc.V3F_C4B_T2F_Quad
    };
    cc.V3F_C4B_T2F_QuadCopy = function (a) {
        if (!a)return cc.V3F_C4B_T2F_QuadZero();
        var c = a.tl, b = a.bl, d = a.tr;
        a = a.br;
        return{tl: {vertices: {x: c.vertices.x, y: c.vertices.y, z: c.vertices.z}, colors: {r: c.colors.r, g: c.colors.g, b: c.colors.b, a: c.colors.a}, texCoords: {u: c.texCoords.u, v: c.texCoords.v}}, bl: {vertices: {x: b.vertices.x, y: b.vertices.y, z: b.vertices.z}, colors: {r: b.colors.r, g: b.colors.g, b: b.colors.b, a: b.colors.a}, texCoords: {u: b.texCoords.u, v: b.texCoords.v}}, tr: {vertices: {x: d.vertices.x, y: d.vertices.y, z: d.vertices.z}, colors: {r: d.colors.r, g: d.colors.g, b: d.colors.b, a: d.colors.a}, texCoords: {u: d.texCoords.u,
            v: d.texCoords.v}}, br: {vertices: {x: a.vertices.x, y: a.vertices.y, z: a.vertices.z}, colors: {r: a.colors.r, g: a.colors.g, b: a.colors.b, a: a.colors.a}, texCoords: {u: a.texCoords.u, v: a.texCoords.v}}}
    };
    cc.V3F_C4B_T2F_QuadsCopy = function (a) {
        if (!a)return[];
        for (var c = [], b = 0; b < a.length; b++)c.push(cc.V3F_C4B_T2F_QuadCopy(a[b]));
        return c
    };
    cc.V2F_C4B_T2F = function (a, c, b, d, e) {
        this._arrayBuffer = d || new ArrayBuffer(cc.V2F_C4B_T2F.BYTES_PER_ELEMENT);
        this._offset = e || 0;
        d = this._arrayBuffer;
        e = this._offset;
        var f = cc.Vertex2F.BYTES_PER_ELEMENT;
        this._vertices = a ? new cc.Vertex2F(a.x, a.y, d, e) : new cc.Vertex2F(0, 0, d, e);
        this._colors = c ? cc.color(c.r, c.g, c.b, c.a, d, e + f) : cc.color(0, 0, 0, 0, d, e + f);
        this._texCoords = b ? new cc.Tex2F(b.u, b.v, d, e + f + cc.Color.BYTES_PER_ELEMENT) : new cc.Tex2F(0, 0, d, e + f + cc.Color.BYTES_PER_ELEMENT)
    };
    cc.V2F_C4B_T2F.BYTES_PER_ELEMENT = 20;
    Object.defineProperties(cc.V2F_C4B_T2F.prototype, {vertices: {get: function () {
        return this._vertices
    }, set: function (a) {
        this._vertices.x = a.x;
        this._vertices.y = a.y
    }, enumerable: !0}, colors: {get: function () {
        return this._colors
    },
        set: function (a) {
            var c = this._colors;
            c.r = a.r;
            c.g = a.g;
            c.b = a.b;
            c.a = a.a
        }, enumerable: !0}, texCoords: {get: function () {
        return this._texCoords
    }, set: function (a) {
        this._texCoords.u = a.u;
        this._texCoords.v = a.v
    }, enumerable: !0}});
    cc.V2F_C4B_T2F_Triangle = function (a, c, b, d, e) {
        this._arrayBuffer = d || new ArrayBuffer(cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT);
        this._offset = e || 0;
        d = this._arrayBuffer;
        e = this._offset;
        var f = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
        this._a = a ? new cc.V2F_C4B_T2F(a.vertices, a.colors, a.texCoords, d, e) : new cc.V2F_C4B_T2F(null,
            null, null, d, e);
        this._b = c ? new cc.V2F_C4B_T2F(c.vertices, c.colors, c.texCoords, d, e + f) : new cc.V2F_C4B_T2F(null, null, null, d, e + f);
        this._c = b ? new cc.V2F_C4B_T2F(b.vertices, b.colors, b.texCoords, d, e + 2 * f) : new cc.V2F_C4B_T2F(null, null, null, d, e + 2 * f)
    };
    cc.V2F_C4B_T2F_Triangle.BYTES_PER_ELEMENT = 60;
    Object.defineProperties(cc.V2F_C4B_T2F_Triangle.prototype, {a: {get: function () {
        return this._a
    }, set: function (a) {
        var c = this._a;
        c.vertices = a.vertices;
        c.colors = a.colors;
        c.texCoords = a.texCoords
    }, enumerable: !0}, b: {get: function () {
        return this._b
    },
        set: function (a) {
            var c = this._b;
            c.vertices = a.vertices;
            c.colors = a.colors;
            c.texCoords = a.texCoords
        }, enumerable: !0}, c: {get: function () {
        return this._c
    }, set: function (a) {
        var c = this._c;
        c.vertices = a.vertices;
        c.colors = a.colors;
        c.texCoords = a.texCoords
    }, enumerable: !0}})
};
cc._tmp.WebGLCCNode = function () {
    var b = cc.Node.prototype;
    b._transform4x4 = null;
    b._stackMatrix = null;
    b._glServerState = null;
    b._camera = null;
    b.ctor = function () {
        this._initNode();
        var a = new cc.kmMat4;
        a.mat[2] = a.mat[3] = a.mat[6] = a.mat[7] = a.mat[8] = a.mat[9] = a.mat[11] = a.mat[14] = 0;
        a.mat[10] = a.mat[15] = 1;
        this._transform4x4 = a;
        this._glServerState = 0;
        this._stackMatrix = new cc.kmMat4
    };
    b.setNodeDirty = function () {
        !1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
    };
    b.visit = function () {
        if (this._visible) {
            var a =
                cc._renderContext, c, b = cc.current_stack;
            b.stack.push(b.top);
            cc.kmMat4Assign(this._stackMatrix, b.top);
            b.top = this._stackMatrix;
            var d = this.grid;
            d && d._active && d.beforeDraw();
            this.transform();
            var e = this._children;
            if (e && 0 < e.length) {
                var f = e.length;
                this.sortAllChildren();
                for (c = 0; c < f; c++)if (e[c] && 0 > e[c]._localZOrder)e[c].visit(); else break;
                for (this.draw(a); c < f; c++)e[c] && e[c].visit()
            } else this.draw(a);
            this.arrivalOrder = 0;
            d && d._active && d.afterDraw(this);
            b.top = b.stack.pop()
        }
    };
    b.transform = function () {
        var a = this._transform4x4,
            c = cc.current_stack.top, b = this.nodeToParentTransform(), d = a.mat;
        d[0] = b.a;
        d[4] = b.c;
        d[12] = b.tx;
        d[1] = b.b;
        d[5] = b.d;
        d[13] = b.ty;
        d[14] = this._vertexZ;
        cc.kmMat4Multiply(c, c, a);
        null != this._camera && !(null != this.grid && this.grid.isActive()) && (a = this._anchorPointInPoints.x, c = this._anchorPointInPoints.y, 0 !== a || 0 !== c ? (cc.SPRITEBATCHNODE_RENDER_SUBPIXEL || (a |= 0, c |= 0), cc.kmGLTranslatef(a, c, 0), this._camera.locate(), cc.kmGLTranslatef(-a, -c, 0)) : this._camera.locate())
    };
    b.nodeToParentTransform = b._nodeToParentTransformForWebGL
};
cc._tmp.WebGLTexture2D = function () {
    cc.Texture2D = cc.Class.extend({_pVRHaveAlphaPremultiplied: !0, _pixelFormat: null, _pixelsWide: 0, _pixelsHigh: 0, _name: "", _contentSize: null, maxS: 0, maxT: 0, _hasPremultipliedAlpha: !1, _hasMipmaps: !1, shaderProgram: null, _isLoaded: !1, _htmlElementObj: null, _webTextureObj: null, url: null, _loadedEventListeners: null, ctor: function () {
        this._contentSize = cc.size(0, 0);
        this._pixelFormat = cc.Texture2D.defaultPixelFormat
    }, releaseTexture: function () {
        this._webTextureObj && cc._renderContext.deleteTexture(this._webTextureObj);
        cc.loader.release(this.url)
    }, getPixelFormat: function () {
        return this._pixelFormat
    }, getPixelsWide: function () {
        return this._pixelsWide
    }, getPixelsHigh: function () {
        return this._pixelsHigh
    }, getName: function () {
        return this._webTextureObj
    }, getContentSize: function () {
        return cc.size(this._contentSize.width / cc.contentScaleFactor(), this._contentSize.height / cc.contentScaleFactor())
    }, _getWidth: function () {
        return this._contentSize.width / cc.contentScaleFactor()
    }, _getHeight: function () {
        return this._contentSize.height / cc.contentScaleFactor()
    },
        getContentSizeInPixels: function () {
            return this._contentSize
        }, getMaxS: function () {
            return this.maxS
        }, setMaxS: function (b) {
            this.maxS = b
        }, getMaxT: function () {
            return this.maxT
        }, setMaxT: function (b) {
            this.maxT = b
        }, getShaderProgram: function () {
            return this.shaderProgram
        }, setShaderProgram: function (b) {
            this.shaderProgram = b
        }, hasPremultipliedAlpha: function () {
            return this._hasPremultipliedAlpha
        }, hasMipmaps: function () {
            return this._hasMipmaps
        }, description: function () {
            return"\x3ccc.Texture2D | Name \x3d " + this._name + " | Dimensions \x3d " +
                this._pixelsWide + " x " + this._pixelsHigh + " | Coordinates \x3d (" + this.maxS + ", " + this.maxT + ")\x3e"
        }, releaseData: function (b) {
        }, keepData: function (b, a) {
            return b
        }, initWithData: function (b, a, c, g, d) {
            var e = cc.Texture2D, f = cc._renderContext, k = f.RGBA, l = f.UNSIGNED_BYTE, h = c * cc.Texture2D._B[a] / 8;
            0 === h % 8 ? f.pixelStorei(f.UNPACK_ALIGNMENT, 8) : 0 === h % 4 ? f.pixelStorei(f.UNPACK_ALIGNMENT, 4) : 0 === h % 2 ? f.pixelStorei(f.UNPACK_ALIGNMENT, 2) : f.pixelStorei(f.UNPACK_ALIGNMENT, 1);
            this._webTextureObj = f.createTexture();
            cc.glBindTexture2D(this);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.LINEAR);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.LINEAR);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE);
            switch (a) {
                case e.PIXEL_FORMAT_RGBA8888:
                    k = f.RGBA;
                    break;
                case e.PIXEL_FORMAT_RGB888:
                    k = f.RGB;
                    break;
                case e.PIXEL_FORMAT_RGBA4444:
                    l = f.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case e.PIXEL_FORMAT_RGB5A1:
                    l = f.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case e.PIXEL_FORMAT_RGB565:
                    l = f.UNSIGNED_SHORT_5_6_5;
                    break;
                case e.PIXEL_FORMAT_AI88:
                    k = f.LUMINANCE_ALPHA;
                    break;
                case e.PIXEL_FORMAT_A8:
                    k = f.ALPHA;
                    break;
                case e.PIXEL_FORMAT_I8:
                    k = f.LUMINANCE;
                    break;
                default:
                    cc.assert(0, cc._LogInfos.Texture2D_initWithData)
            }
            f.texImage2D(f.TEXTURE_2D, 0, k, c, g, 0, k, l, b);
            this._contentSize.width = d.width;
            this._contentSize.height = d.height;
            this._pixelsWide = c;
            this._pixelsHigh = g;
            this._pixelFormat = a;
            this.maxS = d.width / c;
            this.maxT = d.height / g;
            this._hasMipmaps = this._hasPremultipliedAlpha = !1;
            this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE);
            return this._isLoaded = !0
        }, drawAtPoint: function (b) {
            var a = [0, this.maxT, this.maxS, this.maxT, 0, 0, this.maxS, 0], c = this._pixelsWide * this.maxS, g = this._pixelsHigh * this.maxT;
            b = [b.x, b.y, 0, c + b.x, b.y, 0, b.x, g + b.y, 0, c + b.x, g + b.y, 0];
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS);
            this._shaderProgram.use();
            this._shaderProgram.setUniformsForBuiltins();
            cc.glBindTexture2D(this);
            c = cc._renderContext;
            c.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, c.FLOAT, !1, 0, b);
            c.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS,
                2, c.FLOAT, !1, 0, a);
            c.drawArrays(c.TRIANGLE_STRIP, 0, 4)
        }, drawInRect: function (b) {
            var a = [0, this.maxT, this.maxS, this.maxT, 0, 0, this.maxS, 0];
            b = [b.x, b.y, b.x + b.width, b.y, b.x, b.y + b.height, b.x + b.width, b.y + b.height];
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS);
            this._shaderProgram.use();
            this._shaderProgram.setUniformsForBuiltins();
            cc.glBindTexture2D(this);
            var c = cc._renderContext;
            c.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, c.FLOAT, !1, 0, b);
            c.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS,
                2, c.FLOAT, !1, 0, a);
            c.drawArrays(c.TRIANGLE_STRIP, 0, 4)
        }, initWithImage: function (b) {
            if (null == b)return cc.log(cc._LogInfos.Texture2D_initWithImage), !1;
            var a = b.getWidth(), c = b.getHeight(), g = cc.configuration.getMaxTextureSize();
            if (a > g || c > g)return cc.log(cc._LogInfos.Texture2D_initWithImage_2, a, c, g, g), !1;
            this._isLoaded = !0;
            return this._initPremultipliedATextureWithImage(b, a, c)
        }, initWithElement: function (b) {
            b && (this._webTextureObj = cc._renderContext.createTexture(), this._htmlElementObj = b)
        }, getHtmlElementObj: function () {
            return this._htmlElementObj
        },
        isLoaded: function () {
            return this._isLoaded
        }, handleLoadedTexture: function () {
            if (cc._rendererInitialized) {
                if (!this._htmlElementObj) {
                    var b = cc.loader.getRes(this.url);
                    if (!b)return;
                    this.initWithElement(b)
                }
                this._htmlElementObj.width && this._htmlElementObj.height && (this._isLoaded = !0, b = cc._renderContext, cc.glBindTexture2D(this), b.pixelStorei(b.UNPACK_ALIGNMENT, 4), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, this._htmlElementObj), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D,
                    b.TEXTURE_MAG_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE), cc.glBindTexture2D(null), b = this._htmlElementObj.height, this._pixelsWide = this._contentSize.width = this._htmlElementObj.width, this._pixelsHigh = this._contentSize.height = b, this._pixelFormat = cc.Texture2D.PIXEL_FORMAT_RGBA8888, this.maxT = this.maxS = 1, this._hasMipmaps = this._hasPremultipliedAlpha = !1, this._callLoadedEventCallbacks())
            }
        }, initWithString: function (b, a, c, g, d, e) {
            cc.log(cc._LogInfos.Texture2D_initWithString);
            return null
        }, initWithETCFile: function (b) {
            cc.log(cc._LogInfos.Texture2D_initWithETCFile_2);
            return!1
        }, initWithPVRFile: function (b) {
            cc.log(cc._LogInfos.Texture2D_initWithPVRFile_2);
            return!1
        }, initWithPVRTCData: function (b, a, c, g, d, e) {
            cc.log(cc._LogInfos.Texture2D_initWithPVRTCData_2);
            return!1
        }, setTexParameters: function (b) {
            var a = cc._renderContext;
            cc.assert(this._pixelsWide == cc.NextPOT(this._pixelsWide) &&
                this._pixelsHigh == cc.NextPOT(this._pixelsHigh) || b.wrapS == a.CLAMP_TO_EDGE && b.wrapT == a.CLAMP_TO_EDGE, "WebGLRenderingContext.CLAMP_TO_EDGE should be used in NPOT textures");
            cc.glBindTexture2D(this);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, b.minFilter);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, b.magFilter);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, b.wrapS);
            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, b.wrapT)
        }, setAntiAliasTexParameters: function () {
            var b = cc._renderContext;
            cc.glBindTexture2D(this);
            this._hasMipmaps ? b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_NEAREST) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST)
        }, setAliasTexParameters: function () {
            var b = cc._renderContext;
            cc.glBindTexture2D(this);
            this._hasMipmaps ? b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST_MIPMAP_NEAREST) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST)
        },
        generateMipmap: function () {
            cc.assert(this._pixelsWide == cc.NextPOT(this._pixelsWide) && this._pixelsHigh == cc.NextPOT(this._pixelsHigh), "Mimpap texture only works in POT textures");
            cc.glBindTexture2D(this);
            cc._renderContext.generateMipmap(cc._renderContext.TEXTURE_2D);
            this._hasMipmaps = !0
        }, stringForFormat: function () {
            return cc.Texture2D._M[this._pixelFormat]
        }, bitsPerPixelForFormat: function (b) {
            b = b || this._pixelFormat;
            var a = cc.Texture2D._B[b];
            if (null != a)return a;
            cc.log(cc._LogInfos.Texture2D_bitsPerPixelForFormat,
                b);
            return-1
        }, _initPremultipliedATextureWithImage: function (b, a, c) {
            var g = cc.Texture2D, d = b.getData(), e = null, e = null, f = b.hasAlpha(), k = cc.size(b.getWidth(), b.getHeight()), l = g.defaultPixelFormat, h = b.getBitsPerComponent();
            f || (8 <= h ? l = g.PIXEL_FORMAT_RGB888 : (cc.log(cc._LogInfos.Texture2D__initPremultipliedATextureWithImage), l = g.PIXEL_FORMAT_RGB565));
            var m = a * c;
            if (l == g.PIXEL_FORMAT_RGB565)if (f) {
                d = new Uint16Array(a * c);
                e = b.getData();
                for (h = 0; h < m; ++h)d[h] = (e[h] >> 0 & 255) >> 3 << 11 | (e[h] >> 8 & 255) >> 2 << 5 | (e[h] >> 16 & 255) >> 3 <<
                    0
            } else {
                d = new Uint16Array(a * c);
                e = b.getData();
                for (h = 0; h < m; ++h)d[h] = (e[h] & 255) >> 3 << 11 | (e[h] & 255) >> 2 << 5 | (e[h] & 255) >> 3 << 0
            } else if (l == g.PIXEL_FORMAT_RGBA4444) {
                d = new Uint16Array(a * c);
                e = b.getData();
                for (h = 0; h < m; ++h)d[h] = (e[h] >> 0 & 255) >> 4 << 12 | (e[h] >> 8 & 255) >> 4 << 8 | (e[h] >> 16 & 255) >> 4 << 4 | (e[h] >> 24 & 255) >> 4 << 0
            } else if (l == g.PIXEL_FORMAT_RGB5A1) {
                d = new Uint16Array(a * c);
                e = b.getData();
                for (h = 0; h < m; ++h)d[h] = (e[h] >> 0 & 255) >> 3 << 11 | (e[h] >> 8 & 255) >> 3 << 6 | (e[h] >> 16 & 255) >> 3 << 1 | (e[h] >> 24 & 255) >> 7 << 0
            } else if (l == g.PIXEL_FORMAT_A8) {
                d =
                    new Uint8Array(a * c);
                e = b.getData();
                for (h = 0; h < m; ++h)d[h] = e >> 24 & 255
            }
            if (f && l == g.PIXEL_FORMAT_RGB888) {
                e = b.getData();
                d = new Uint8Array(3 * a * c);
                for (h = 0; h < m; ++h)d[3 * h] = e >> 0 & 255, d[3 * h + 1] = e >> 8 & 255, d[3 * h + 2] = e >> 16 & 255
            }
            this.initWithData(d, l, a, c, k);
            b.getData();
            this._hasPremultipliedAlpha = b.isPremultipliedAlpha();
            return!0
        }, addLoadedEventListener: function (b, a) {
            this._loadedEventListeners || (this._loadedEventListeners = []);
            this._loadedEventListeners.push({eventCallback: b, eventTarget: a})
        }, removeLoadedEventListener: function (b) {
            if (this._loadedEventListeners)for (var a =
                this._loadedEventListeners, c = 0; c < a.length; c++)a[c].eventTarget == b && a.splice(c, 1)
        }, _callLoadedEventCallbacks: function () {
            if (this._loadedEventListeners) {
                for (var b = this._loadedEventListeners, a = 0, c = b.length; a < c; a++) {
                    var g = b[a];
                    g.eventCallback.call(g.eventTarget, this)
                }
                b.length = 0
            }
        }})
};
cc._tmp.WebGLTextureAtlas = function () {
    var b = cc.TextureAtlas.prototype;
    b._setupVBO = function () {
        var a = cc._renderContext;
        this._buffersVBO[0] = a.createBuffer();
        this._buffersVBO[1] = a.createBuffer();
        this._quadsWebBuffer = a.createBuffer();
        this._mapBuffers()
    };
    b._mapBuffers = function () {
        var a = cc._renderContext;
        a.bindBuffer(a.ARRAY_BUFFER, this._quadsWebBuffer);
        a.bufferData(a.ARRAY_BUFFER, this._quadsArrayBuffer, a.DYNAMIC_DRAW);
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]);
        a.bufferData(a.ELEMENT_ARRAY_BUFFER,
            this._indices, a.STATIC_DRAW)
    };
    b.drawNumberOfQuads = function (a, c) {
        c = c || 0;
        if (!(0 === a || !this.texture || !this.texture.isLoaded())) {
            var b = cc._renderContext;
            cc.glBindTexture2D(this.texture);
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
            b.bindBuffer(b.ARRAY_BUFFER, this._quadsWebBuffer);
            this.dirty && b.bufferData(b.ARRAY_BUFFER, this._quadsArrayBuffer, b.DYNAMIC_DRAW);
            b.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, b.FLOAT, !1, 24, 0);
            b.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, b.UNSIGNED_BYTE,
                !0, 24, 12);
            b.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, b.FLOAT, !1, 24, 16);
            this.dirty && (this.dirty = !1);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]);
            cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP ? b.drawElements(b.TRIANGLE_STRIP, 6 * a, b.UNSIGNED_SHORT, 6 * c * this._indices.BYTES_PER_ELEMENT) : b.drawElements(b.TRIANGLES, 6 * a, b.UNSIGNED_SHORT, 6 * c * this._indices.BYTES_PER_ELEMENT);
            cc.g_NumberOfDraws++
        }
    }
};
cc._tmp.WebGLTextureCache = function () {
    var b = cc.textureCache;
    b.handleLoadedTexture = function (a) {
        var c = this._textures;
        cc._rendererInitialized || (c = this._loadedTexturesBefore);
        var b = c[a];
        b || (b = c[a] = new cc.Texture2D, b.url = a);
        b.handleLoadedTexture()
    };
    b.addImage = function (a, c, b) {
        cc.assert(a, cc._LogInfos.Texture2D_addImage_2);
        var d = this._textures;
        cc._rendererInitialized || (d = this._loadedTexturesBefore);
        var e = d[a] || d[cc.loader._aliases[a]];
        if (e)return c && c.call(b), e;
        cc.loader.getRes(a) || (cc.loader._checkIsImageURL(a) ?
            cc.loader.load(a, function (a) {
                c && c.call(b)
            }) : cc.loader.cache[a] = cc.loader.loadImg(a, function (b, d) {
            if (b)return c ? c(b) : b;
            cc.textureCache.handleLoadedTexture(a);
            c && c(null, d)
        }));
        e = d[a] = new cc.Texture2D;
        e.url = a;
        return e
    };
    delete b
};
cc._tmp.LayerDefineForWebGL = function () {
    var b = cc.Layer.prototype;
    b.bake = function () {
    };
    b.unbake = function () {
    };
    b.visit = cc.Node.prototype.visit
};
cc._tmp.WebGLLayerColor = function () {
    var b = cc.LayerColor.prototype;
    b._squareVertices = null;
    b._squareColors = null;
    b._verticesFloat32Buffer = null;
    b._colorsUint8Buffer = null;
    b._squareVerticesAB = null;
    b._squareColorsAB = null;
    b.ctor = function (a, c, b) {
        this._squareVerticesAB = new ArrayBuffer(32);
        this._squareColorsAB = new ArrayBuffer(16);
        var d = this._squareVerticesAB, e = this._squareColorsAB, f = cc.Vertex2F.BYTES_PER_ELEMENT, k = cc.Color.BYTES_PER_ELEMENT;
        this._squareVertices = [new cc.Vertex2F(0, 0, d, 0), new cc.Vertex2F(0, 0, d,
            f), new cc.Vertex2F(0, 0, d, 2 * f), new cc.Vertex2F(0, 0, d, 3 * f)];
        this._squareColors = [cc.color(0, 0, 0, 255, e, 0), cc.color(0, 0, 0, 255, e, k), cc.color(0, 0, 0, 255, e, 2 * k), cc.color(0, 0, 0, 255, e, 3 * k)];
        this._verticesFloat32Buffer = cc._renderContext.createBuffer();
        this._colorsUint8Buffer = cc._renderContext.createBuffer();
        cc.LayerRGBA.prototype.ctor.call(this);
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        cc.LayerColor.prototype.init.call(this, a, c, b)
    };
    b.setContentSize = function (a, c) {
        var b = this._squareVertices;
        void 0 === c ? (b[1].x = a.width, b[2].y = a.height, b[3].x = a.width, b[3].y = a.height) : (b[1].x = a, b[2].y = c, b[3].x = a, b[3].y = c);
        this._bindLayerVerticesBufferData();
        cc.Layer.prototype.setContentSize.call(this, a, c)
    };
    b._setWidth = function (a) {
        var c = this._squareVertices;
        c[1].x = a;
        c[3].x = a;
        this._bindLayerVerticesBufferData();
        cc.Layer.prototype._setWidth.call(this, a)
    };
    b._setHeight = function (a) {
        var c = this._squareVertices;
        c[2].y = a;
        c[3].y = a;
        this._bindLayerVerticesBufferData();
        cc.Layer.prototype._setHeight.call(this, a)
    };
    b._updateColor =
        function () {
            for (var a = this._displayedColor, c = this._displayedOpacity, b = this._squareColors, d = 0; 4 > d; d++)b[d].r = a.r, b[d].g = a.g, b[d].b = a.b, b[d].a = c;
            this._bindLayerColorsBufferData()
        };
    b.draw = function (a) {
        a = a || cc._renderContext;
        cc.nodeDrawSetup(this);
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR);
        a.bindBuffer(a.ARRAY_BUFFER, this._verticesFloat32Buffer);
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, !1, 0, 0);
        a.bindBuffer(a.ARRAY_BUFFER, this._colorsUint8Buffer);
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, a.UNSIGNED_BYTE, !0, 0, 0);
        cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst);
        a.drawArrays(a.TRIANGLE_STRIP, 0, 4)
    };
    b._bindLayerVerticesBufferData = function () {
        var a = cc._renderContext;
        a.bindBuffer(a.ARRAY_BUFFER, this._verticesFloat32Buffer);
        a.bufferData(a.ARRAY_BUFFER, this._squareVerticesAB, a.STATIC_DRAW)
    };
    b._bindLayerColorsBufferData = function () {
        var a = cc._renderContext;
        a.bindBuffer(a.ARRAY_BUFFER, this._colorsUint8Buffer);
        a.bufferData(a.ARRAY_BUFFER, this._squareColorsAB,
            a.STATIC_DRAW)
    }
};
cc._tmp.WebGLLayerGradient = function () {
    var b = cc.LayerGradient.prototype;
    b.draw = cc.LayerColor.prototype.draw;
    b._updateColor = function () {
        var a = this._alongVector, c = cc.pLength(a);
        if (0 !== c) {
            var b = Math.sqrt(2), a = cc.p(a.x / c, a.y / c);
            this._compressedInterpolation && (c = 1 / (Math.abs(a.x) + Math.abs(a.y)), a = cc.pMult(a, c * b));
            var d = this._displayedOpacity / 255, c = this._displayedColor, e = this._endColor, c = {r: c.r, g: c.g, b: c.b, a: this._startOpacity * d}, d = {r: e.r, g: e.g, b: e.b, a: this._endOpacity * d}, f = this._squareColors, e = f[0], k = f[1],
                l = f[2], f = f[3];
            e.r = d.r + (c.r - d.r) * ((b + a.x + a.y) / (2 * b));
            e.g = d.g + (c.g - d.g) * ((b + a.x + a.y) / (2 * b));
            e.b = d.b + (c.b - d.b) * ((b + a.x + a.y) / (2 * b));
            e.a = d.a + (c.a - d.a) * ((b + a.x + a.y) / (2 * b));
            k.r = d.r + (c.r - d.r) * ((b - a.x + a.y) / (2 * b));
            k.g = d.g + (c.g - d.g) * ((b - a.x + a.y) / (2 * b));
            k.b = d.b + (c.b - d.b) * ((b - a.x + a.y) / (2 * b));
            k.a = d.a + (c.a - d.a) * ((b - a.x + a.y) / (2 * b));
            l.r = d.r + (c.r - d.r) * ((b + a.x - a.y) / (2 * b));
            l.g = d.g + (c.g - d.g) * ((b + a.x - a.y) / (2 * b));
            l.b = d.b + (c.b - d.b) * ((b + a.x - a.y) / (2 * b));
            l.a = d.a + (c.a - d.a) * ((b + a.x - a.y) / (2 * b));
            f.r = d.r + (c.r - d.r) * ((b - a.x - a.y) /
                (2 * b));
            f.g = d.g + (c.g - d.g) * ((b - a.x - a.y) / (2 * b));
            f.b = d.b + (c.b - d.b) * ((b - a.x - a.y) / (2 * b));
            f.a = d.a + (c.a - d.a) * ((b - a.x - a.y) / (2 * b));
            this._bindLayerColorsBufferData()
        }
    }
};
cc._tmp.WebGLSprite = function () {
    var b = cc.Sprite.prototype;
    b._spriteFrameLoadedCallback = function (a) {
        this.setNodeDirty(!0);
        this.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
        this._callLoadedEventCallbacks()
    };
    b.setOpacityModifyRGB = function (a) {
        this._opacityModifyRGB !== a && (this._opacityModifyRGB = a, this.updateColor())
    };
    b.updateDisplayedOpacity = function (a) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, a);
        this.updateColor()
    };
    b.ctor = function (a, b, g) {
        cc.NodeRGBA.prototype.ctor.call(this);
        this._shouldBeHidden = !1;
        this._offsetPosition = cc.p(0, 0);
        this._unflippedOffsetPositionFromCenter = cc.p(0, 0);
        this._blendFunc = {src: cc.BLEND_SRC, dst: cc.BLEND_DST};
        this._rect = cc.rect(0, 0, 0, 0);
        this._quad = new cc.V3F_C4B_T2F_Quad;
        this._quadWebBuffer = cc._renderContext.createBuffer();
        this._textureLoaded = this._quadDirty = !0;
        this._softInit(a, b, g)
    };
    b.setBlendFunc = function (a, b) {
        var g = this._blendFunc;
        void 0 === b ? (g.src = a.src, g.dst = a.dst) : (g.src = a, g.dst = b)
    };
    b.init = function () {
        if (0 < arguments.length)return this.initWithFile(arguments[0],
            arguments[1]);
        cc.NodeRGBA.prototype.init.call(this);
        this.dirty = this._recursiveDirty = !1;
        this._opacityModifyRGB = !0;
        this._blendFunc.src = cc.BLEND_SRC;
        this._blendFunc.dst = cc.BLEND_DST;
        this.texture = null;
        this._textureLoaded = !0;
        this._flippedX = this._flippedY = !1;
        this.anchorY = this.anchorX = 0.5;
        this._offsetPosition.x = 0;
        this._offsetPosition.y = 0;
        this._hasChildren = !1;
        var a = {r: 255, g: 255, b: 255, a: 255};
        this._quad.bl.colors = a;
        this._quad.br.colors = a;
        this._quad.tl.colors = a;
        this._quad.tr.colors = a;
        this._quadDirty = !0;
        this.setTextureRect(cc.rect(0,
            0, 0, 0), !1, cc.size(0, 0));
        return!0
    };
    b.initWithTexture = function (a, b, g) {
        cc.assert(0 != arguments.length, cc._LogInfos.Sprite_initWithTexture);
        g = g || !1;
        if (!cc.NodeRGBA.prototype.init.call(this))return!1;
        this._batchNode = null;
        this.dirty = this._recursiveDirty = !1;
        this._opacityModifyRGB = !0;
        this._blendFunc.src = cc.BLEND_SRC;
        this._blendFunc.dst = cc.BLEND_DST;
        this._flippedX = this._flippedY = !1;
        this.anchorY = this.anchorX = 0.5;
        this._offsetPosition.x = 0;
        this._offsetPosition.y = 0;
        this._hasChildren = !1;
        var d = cc.color(255, 255, 255,
            255), e = this._quad;
        e.bl.colors = d;
        e.br.colors = d;
        e.tl.colors = d;
        e.tr.colors = d;
        this._textureLoaded = d = a.isLoaded();
        if (!d)return this._rectRotated = g || !1, b && (d = this._rect, d.x = b.x, d.y = b.y, d.width = b.width, d.height = b.height), a.addLoadedEventListener(this._textureLoadedCallback, this), !0;
        b || (b = cc.rect(0, 0, a.width, a.height));
        a && (g ? (d = b.x + b.height, e = b.y + b.width) : (d = b.x + b.width, e = b.y + b.height), d > a.width && cc.error(cc._LogInfos.RectWidth, a.url), e > a.height && cc.error(cc._LogInfos.RectHeight, a.url));
        this.texture = a;
        this.setTextureRect(b,
            g);
        this.batchNode = null;
        return this._quadDirty = !0
    };
    b._textureLoadedCallback = function (a) {
        if (!this._textureLoaded) {
            this._textureLoaded = !0;
            var b = this._rect;
            b ? cc._rectEqualToZero(b) && (b.width = a.width, b.height = a.height) : b = cc.rect(0, 0, a.width, a.height);
            this.texture = a;
            this.setTextureRect(b, this._rectRotated);
            this.batchNode = this._batchNode;
            this._quadDirty = !0;
            this._callLoadedEventCallbacks()
        }
    };
    b.setTextureRect = function (a, b, g) {
        this._rectRotated = b || !1;
        this.setContentSize(g || a);
        this.setVertexRect(a);
        this._setTextureCoords(a);
        a = this._unflippedOffsetPositionFromCenter;
        this._flippedX && (a.x = -a.x);
        this._flippedY && (a.y = -a.y);
        var d = this._rect;
        this._offsetPosition.x = a.x + (this._contentSize.width - d.width) / 2;
        this._offsetPosition.y = a.y + (this._contentSize.height - d.height) / 2;
        if (this._batchNode)this.dirty = !0; else {
            a = 0 + this._offsetPosition.x;
            b = 0 + this._offsetPosition.y;
            g = a + d.width;
            var d = b + d.height, e = this._quad;
            e.bl.vertices = {x: a, y: b, z: 0};
            e.br.vertices = {x: g, y: b, z: 0};
            e.tl.vertices = {x: a, y: d, z: 0};
            e.tr.vertices = {x: g, y: d, z: 0};
            this._quadDirty = !0
        }
    };
    b.updateTransform = function () {
        if (this.dirty) {
            var a = this._quad, b = this._parent;
            if (!this._visible || b && b != this._batchNode && b._shouldBeHidden)a.br.vertices = {x: 0, y: 0, z: 0}, a.tl.vertices = {x: 0, y: 0, z: 0}, a.tr.vertices = {x: 0, y: 0, z: 0}, a.bl.vertices = {x: 0, y: 0, z: 0}, this._shouldBeHidden = !0; else {
                this._shouldBeHidden = !1;
                var g = this._transformToBatch = !b || b == this._batchNode ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), b._transformToBatch), d = this._rect, b = this._offsetPosition.x, e =
                    this._offsetPosition.y, f = b + d.width, k = e + d.height, l = g.tx, h = g.ty, m = g.a, n = g.b, p = g.d, q = -g.c, g = b * m - e * q + l, d = b * n + e * p + h, r = f * m - e * q + l, e = f * n + e * p + h, s = f * m - k * q + l, f = f * n + k * p + h, l = b * m - k * q + l, b = b * n + k * p + h, k = this._vertexZ;
                cc.SPRITEBATCHNODE_RENDER_SUBPIXEL || (g |= 0, d |= 0, r |= 0, e |= 0, s |= 0, f |= 0, l |= 0, b |= 0);
                a.bl.vertices = {x: g, y: d, z: k};
                a.br.vertices = {x: r, y: e, z: k};
                a.tl.vertices = {x: l, y: b, z: k};
                a.tr.vertices = {x: s, y: f, z: k}
            }
            this.textureAtlas.updateQuad(a, this.atlasIndex);
            this.dirty = this._recursiveDirty = !1
        }
        this._hasChildren && this._arrayMakeObjectsPerformSelector(this._children,
            cc.Node.StateCallbackType.updateTransform);
        cc.SPRITE_DEBUG_DRAW && (a = [cc.p(this._quad.bl.vertices.x, this._quad.bl.vertices.y), cc.p(this._quad.br.vertices.x, this._quad.br.vertices.y), cc.p(this._quad.tr.vertices.x, this._quad.tr.vertices.y), cc.p(this._quad.tl.vertices.x, this._quad.tl.vertices.y)], cc._drawingUtil.drawPoly(a, 4, !0))
    };
    b.addChild = function (a, b, g) {
        cc.assert(a, cc._LogInfos.Sprite_addChild_3);
        null == b && (b = a._localZOrder);
        null == g && (g = a.tag);
        if (this._batchNode) {
            if (!(a instanceof cc.Sprite)) {
                cc.log(cc._LogInfos.Sprite_addChild);
                return
            }
            a.texture._webTextureObj !== this.textureAtlas.texture._webTextureObj && cc.log(cc._LogInfos.Sprite_addChild_2);
            this._batchNode.appendChild(a);
            this._reorderChildDirty || this._setReorderChildDirtyRecursively()
        }
        cc.NodeRGBA.prototype.addChild.call(this, a, b, g);
        this._hasChildren = !0
    };
    b.setOpacity = function (a) {
        cc.NodeRGBA.prototype.setOpacity.call(this, a);
        this.updateColor()
    };
    b.setColor = function (a) {
        cc.NodeRGBA.prototype.setColor.call(this, a);
        this.updateColor()
    };
    b.updateDisplayedColor = function (a) {
        cc.NodeRGBA.prototype.updateDisplayedColor.call(this,
            a);
        this.updateColor()
    };
    b.setSpriteFrame = function (a) {
        var b = this;
        "string" == typeof a && (a = cc.spriteFrameCache.getSpriteFrame(a), cc.assert(a, cc._LogInfos.Sprite_setSpriteFrame));
        b.setNodeDirty(!0);
        var g = a.getOffset();
        b._unflippedOffsetPositionFromCenter.x = g.x;
        b._unflippedOffsetPositionFromCenter.y = g.y;
        g = a.getTexture();
        a.textureLoaded() || (b._textureLoaded = !1, a.addLoadedEventListener(function (a) {
            b._textureLoaded = !0;
            var e = a.getTexture();
            e != b._texture && (b.texture = e);
            b.setTextureRect(a.getRect(), a.isRotated(),
                a.getOriginalSize());
            b._callLoadedEventCallbacks()
        }, b));
        g != b._texture && (b.texture = g);
        b._rectRotated = a.isRotated();
        b.setTextureRect(a.getRect(), b._rectRotated, a.getOriginalSize())
    };
    b.isFrameDisplayed = function (a) {
        return cc.rectEqualToRect(a.getRect(), this._rect) && a.getTexture().getName() == this._texture.getName() && cc.pointEqualToPoint(a.getOffset(), this._unflippedOffsetPositionFromCenter)
    };
    b.setBatchNode = function (a) {
        if (this._batchNode = a)this._transformToBatch = cc.AffineTransformIdentity(), this.textureAtlas =
            this._batchNode.textureAtlas; else {
            this.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED;
            this.textureAtlas = null;
            this.dirty = this._recursiveDirty = !1;
            a = this._offsetPosition.x;
            var b = this._offsetPosition.y, g = a + this._rect.width, d = b + this._rect.height, e = this._quad;
            e.bl.vertices = {x: a, y: b, z: 0};
            e.br.vertices = {x: g, y: b, z: 0};
            e.tl.vertices = {x: a, y: d, z: 0};
            e.tr.vertices = {x: g, y: d, z: 0};
            this._quadDirty = !0
        }
    };
    b.setTexture = function (a) {
        a && "string" === typeof a ? (a = cc.textureCache.addImage(a), this.setTexture(a), a = a.getContentSize(),
            this.setTextureRect(cc.rect(0, 0, a.width, a.height))) : (cc.assert(!a || a instanceof cc.Texture2D, cc._LogInfos.Sprite_setTexture_2), this._batchNode && this._batchNode.texture != a ? cc.log(cc._LogInfos.Sprite_setTexture) : (this.shaderProgram = a ? cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR) : cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR), !this._batchNode && this._texture != a && (this._texture = a, this._updateBlendFunc())))
    };
    b.draw = function () {
        if (this._textureLoaded) {
            var a = cc._renderContext, b = this._texture;
            b ? b._isLoaded && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2DN(0, b), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX), a.bindBuffer(a.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (a.bufferData(a.ARRAY_BUFFER, this._quad.arrayBuffer, a.DYNAMIC_DRAW), this._quadDirty = !1), a.vertexAttribPointer(0, 3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(1, 4, a.UNSIGNED_BYTE, !0, 24,
                12), a.vertexAttribPointer(2, 2, a.FLOAT, !1, 24, 16), a.drawArrays(a.TRIANGLE_STRIP, 0, 4)) : (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2D(null), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR), a.bindBuffer(a.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (cc._renderContext.bufferData(cc._renderContext.ARRAY_BUFFER, this._quad.arrayBuffer, cc._renderContext.STATIC_DRAW),
                this._quadDirty = !1), a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, a.UNSIGNED_BYTE, !0, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 4));
            cc.g_NumberOfDraws++;
            if (0 !== cc.SPRITE_DEBUG_DRAW || this._showNode)1 === cc.SPRITE_DEBUG_DRAW || this._showNode ? (a = this._quad, a = [cc.p(a.tl.vertices.x, a.tl.vertices.y), cc.p(a.bl.vertices.x, a.bl.vertices.y), cc.p(a.br.vertices.x, a.br.vertices.y), cc.p(a.tr.vertices.x, a.tr.vertices.y)], cc._drawingUtil.drawPoly(a, 4,
                !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (a = this.getTextureRect(), b = this.getOffsetPosition(), a = [cc.p(b.x, b.y), cc.p(b.x + a.width, b.y), cc.p(b.x + a.width, b.y + a.height), cc.p(b.x, b.y + a.height)], cc._drawingUtil.drawPoly(a, 4, !0))
        }
    };
    delete b
};
cc._tmp.WebGLLabelTTF = function () {
    var b = cc.LabelTTF.prototype;
    b.setColor = cc.Sprite.prototype.setColor;
    b._setColorsString = function () {
        this._needUpdateTexture = !0;
        var a = this._strokeColor, b = this._textFillColor;
        this._shadowColorStr = "rgba(128,128,128," + this._shadowOpacity + ")";
        this._fillColorStr = "rgba(" + (0 | b.r) + "," + (0 | b.g) + "," + (0 | b.b) + ", 1)";
        this._strokeColorStr = "rgba(" + (0 | a.r) + "," + (0 | a.g) + "," + (0 | a.b) + ", 1)"
    };
    b.updateDisplayedColor = cc.Sprite.prototype.updateDisplayedColor;
    b.setOpacity = cc.Sprite.prototype.setOpacity;
    b.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity;
    b.initWithStringAndTextDefinition = function (a, b) {
        if (!cc.Sprite.prototype.init.call(this))return!1;
        this.shaderProgram = cc.shaderCache.programForKey(cc.LabelTTF._SHADER_PROGRAM);
        this._updateWithTextDefinition(b, !1);
        this.string = a;
        return!0
    };
    b.setFontFillColor = function (a) {
        var b = this._textFillColor;
        if (b.r != a.r || b.g != a.g || b.b != a.b)b.r = a.r, b.g = a.g, b.b = a.b, this._setColorsString(), this._needUpdateTexture = !0
    };
    b.draw = function (a) {
        if (this._string &&
            "" != this._string) {
            a = a || cc._renderContext;
            var b = this._texture;
            b && b._isLoaded && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), cc.glBindTexture2D(b), cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX), a.bindBuffer(a.ARRAY_BUFFER, this._quadWebBuffer), this._quadDirty && (a.bufferData(a.ARRAY_BUFFER, this._quad.arrayBuffer, a.STATIC_DRAW), this._quadDirty = !1), a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION,
                3, a.FLOAT, !1, 24, 0), a.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, a.FLOAT, !1, 24, 16), a.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, a.UNSIGNED_BYTE, !0, 24, 12), a.drawArrays(a.TRIANGLE_STRIP, 0, 4));
            if (1 === cc.SPRITE_DEBUG_DRAW)a = this._quad, a = [cc.p(a.tl.vertices.x, a.tl.vertices.y), cc.p(a.bl.vertices.x, a.bl.vertices.y), cc.p(a.br.vertices.x, a.br.vertices.y), cc.p(a.tr.vertices.x, a.tr.vertices.y)], cc._drawingUtil.drawPoly(a, 4, !0); else if (2 === cc.SPRITE_DEBUG_DRAW) {
                a = this.getTextureRect()._size;
                var b = this.offsetX,
                    g = this.offsetY;
                a = [cc.p(b, g), cc.p(b + a.width, g), cc.p(b + a.width, g + a.height), cc.p(b, g + a.height)];
                cc._drawingUtil.drawPoly(a, 4, !0)
            }
            cc.g_NumberOfDraws++
        }
    };
    b.setTextureRect = cc.Sprite.prototype.setTextureRect
};
cc._tmp.DirectorWebGL = function () {
    cc.DirectorDelegate = cc.Class.extend({updateProjection: function () {
    }});
    var b = cc.Director.prototype;
    b.setProjection = function (a) {
        var b = this._winSizeInPoints;
        this.setViewport();
        switch (a) {
            case cc.Director.PROJECTION_2D:
                cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
                cc.kmGLLoadIdentity();
                var g = new cc.kmMat4;
                cc.kmMat4OrthographicProjection(g, 0, b.width, 0, b.height, -1024, 1024);
                cc.kmGLMultMatrix(g);
                cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
                cc.kmGLLoadIdentity();
                break;
            case cc.Director.PROJECTION_3D:
                var d =
                    this.getZEye(), e = new cc.kmMat4, g = new cc.kmMat4;
                cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
                cc.kmGLLoadIdentity();
                cc.kmMat4PerspectiveProjection(e, 60, b.width / b.height, 0.1, 2 * d);
                cc.kmGLMultMatrix(e);
                cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
                cc.kmGLLoadIdentity();
                d = cc.kmVec3Fill(null, b.width / 2, b.height / 2, d);
                b = cc.kmVec3Fill(null, b.width / 2, b.height / 2, 0);
                e = cc.kmVec3Fill(null, 0, 1, 0);
                cc.kmMat4LookAt(g, d, b, e);
                cc.kmGLMultMatrix(g);
                break;
            case cc.Director.PROJECTION_CUSTOM:
                this._projectionDelegate && this._projectionDelegate.updateProjection();
                break;
            default:
                cc.log(cc._LogInfos.Director_setProjection)
        }
        this._projection = a;
        cc.eventManager.dispatchEvent(this._eventProjectionChanged);
        cc.setProjectionMatrixDirty()
    };
    b.setDepthTest = function (a) {
        var b = cc._renderContext;
        a ? (b.clearDepth(1), b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL)) : b.disable(b.DEPTH_TEST)
    };
    b.setOpenGLView = function (a) {
        this._winSizeInPoints.width = cc._canvas.width;
        this._winSizeInPoints.height = cc._canvas.height;
        this._openGLView = a || cc.view;
        a = cc.configuration;
        a.gatherGPUInfo();
        a.dumpInfo();
        this._createStatsLabel();
        this.setGLDefaultValues();
        cc.eventManager && cc.eventManager.setEnabled(!0)
    };
    b._clear = function () {
        var a = cc._renderContext;
        a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
    };
    b._beforeVisitScene = function () {
        cc.kmGLPushMatrix()
    };
    b._afterVisitScene = function () {
        cc.kmGLPopMatrix()
    };
    b._createStatsLabel = function () {
        if (cc.LabelAtlas) {
            if (!(null == cc.Director._fpsImageLoaded || !1 == cc.Director._fpsImageLoaded)) {
                var a = new cc.Texture2D;
                a.initWithElement(cc.Director._fpsImage);
                a.handleLoadedTexture();
                var b = cc.view.getDesignResolutionSize().height / 320;
                0 === b && (b = this._winSizeInPoints.height / 320);
                var g = new cc.LabelAtlas;
                g._setIgnoreContentScaleFactor(!0);
                g.initWithString("00.0", a, 12, 32, ".");
                g.scale = b;
                this._FPSLabel = g;
                g = new cc.LabelAtlas;
                g._setIgnoreContentScaleFactor(!0);
                g.initWithString("0.000", a, 12, 32, ".");
                g.scale = b;
                this._SPFLabel = g;
                g = new cc.LabelAtlas;
                g._setIgnoreContentScaleFactor(!0);
                g.initWithString("000", a, 12, 32, ".");
                g.scale = b;
                this._drawsLabel = g;
                a = cc.DIRECTOR_STATS_POSITION;
                this._drawsLabel.setPosition(a.x,
                        34 * b + a.y);
                this._SPFLabel.setPosition(a.x, 17 * b + a.y);
                this._FPSLabel.setPosition(a)
            }
        } else this._createStatsLabelForCanvas()
    };
    b._createStatsLabelForCanvas = function () {
        var a = 0, a = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | 24 * (this._winSizeInPoints.height / 320) : 0 | 24 * (this._winSizeInPoints.width / 320);
        this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", a);
        this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", a);
        this._drawsLabel = cc.LabelTTF.create("0000", "Arial", a);
        a = cc.DIRECTOR_STATS_POSITION;
        this._drawsLabel.setPosition(this._drawsLabel.width /
            2 + a.x, 5 * this._drawsLabel.height / 2 + a.y);
        this._SPFLabel.setPosition(this._SPFLabel.width / 2 + a.x, 3 * this._SPFLabel.height / 2 + a.y);
        this._FPSLabel.setPosition(this._FPSLabel.width / 2 + a.x, this._FPSLabel.height / 2 + a.y)
    };
    b.convertToGL = function (a) {
        var b = new cc.kmMat4;
        cc.GLToClipTransform(b);
        var g = new cc.kmMat4;
        cc.kmMat4Inverse(g, b);
        var b = b.mat[14] / b.mat[15], d = this._openGLView.getDesignResolutionSize();
        a = new cc.kmVec3(2 * a.x / d.width - 1, 1 - 2 * a.y / d.height, b);
        b = new cc.kmVec3;
        cc.kmVec3TransformCoord(b, a, g);
        return cc.p(b.x,
            b.y)
    };
    b.convertToUI = function (a) {
        var b = new cc.kmMat4;
        cc.GLToClipTransform(b);
        var g = new cc.kmVec3;
        a = new cc.kmVec3(a.x, a.y, 0);
        cc.kmVec3TransformCoord(g, a, b);
        b = this._openGLView.getDesignResolutionSize();
        return cc.p(b.width * (0.5 * g.x + 0.5), b.height * (0.5 * -g.y + 0.5))
    };
    b.getVisibleSize = function () {
        return this._openGLView.getVisibleSize()
    };
    b.getVisibleOrigin = function () {
        return this._openGLView.getVisibleOrigin()
    };
    b.getZEye = function () {
        return this._winSizeInPoints.height / 1.1566
    };
    b.setViewport = function () {
        if (this._openGLView) {
            var a =
                this._winSizeInPoints;
            this._openGLView.setViewPortInPoints(0, 0, a.width, a.height)
        }
    };
    b.getOpenGLView = function () {
        return this._openGLView
    };
    b.getProjection = function () {
        return this._projection
    };
    b.setAlphaBlending = function (a) {
        a ? cc.glBlendFunc(cc.BLEND_SRC, cc.BLEND_DST) : cc.glBlendFunc(cc._renderContext.ONE, cc._renderContext.ZERO)
    };
    b.setGLDefaultValues = function () {
        this.setAlphaBlending(!0);
        this.setDepthTest(!1);
        this.setProjection(this._projection);
        cc._renderContext.clearColor(0, 0, 0, 1)
    }
};var cc = cc || {};
cc._tmp = cc._tmp || {};
cc._LogInfos = {};
_p = window;
_p = Object.prototype;
delete window._p;
cc.newElement = function (a) {
    return document.createElement(a)
};
cc._addEventListener = function (a, b, c, d) {
    a.addEventListener(b, c, d)
};
cc._isNodeJs = "undefined" !== typeof require && require("fs");
cc.each = function (a, b, c) {
    if (a)if (a instanceof Array)for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d); d++); else for (d in a)if (!1 === b.call(c, a[d], d))break
};
cc.isCrossOrigin = function (a) {
    if (!a)return cc.log("invalid URL"), !1;
    var b = a.indexOf("://");
    if (-1 == b)return!1;
    b = a.indexOf("/", b + 3);
    return(-1 == b ? a : a.substring(0, b)) != location.origin
};
cc.async = {_counterFunc: function (a) {
    var b = this.counter;
    if (!b.err) {
        var c = b.length, d = b.results, e = b.option, f = e.cb, g = e.cbTarget, h = e.trigger, e = e.triggerTarget;
        if (a) {
            if (b.err = a, f)return f.call(g, a)
        } else {
            var k = Array.apply(null, arguments).slice(1), l = k.length;
            0 == l ? k = null : 1 == l && (k = k[0]);
            d[this.index] = k;
            b.count--;
            h && h.call(e, k, c - b.count, c);
            0 == b.count && f && f.apply(g, [null, d])
        }
    }
}, _emptyFunc: function () {
}, parallel: function (a, b, c) {
    var d = cc.async;
    if (void 0 !== c)"function" == typeof b && (b = {trigger: b}), b.cb = c || b.cb; else if (void 0 !==
        b)"function" == typeof b && (b = {cb: b}); else if (void 0 !== a)b = {}; else throw"arguments error!";
    var e = (c = a instanceof Array) ? a.length : Object.keys(a).length;
    if (0 == e)b.cb && b.cb.call(b.cbTarget, null); else {
        var f = {length: e, count: e, option: b, results: c ? [] : {}};
        cc.each(a, function (a, c) {
            if (f.err)return!1;
            var e = !b.cb && !b.trigger ? d._emptyFunc : d._counterFunc.bind({counter: f, index: c});
            a(e, c)
        })
    }
}, map: function (a, b, c) {
    var d = this, e = arguments.length;
    "function" == typeof b && (b = {iterator: b});
    if (3 === e)b.cb = c || b.cb; else if (2 > e)throw"arguments error!";
    "function" == typeof b && (b = {iterator: b});
    if (void 0 !== c)b.cb = c || b.cb; else if (void 0 === a)throw"arguments error!";
    var f = (e = a instanceof Array) ? a.length : Object.keys(a).length;
    if (0 === f)b.cb && b.cb.call(b.cbTarget, null); else {
        var g = {length: f, count: f, option: b, results: e ? [] : {}};
        cc.each(a, function (a, c) {
            if (g.err)return!1;
            var e = !b.cb ? d._emptyFunc : d._counterFunc.bind({counter: g, index: c});
            b.iterator.call(b.iteratorTarget, a, c, e)
        })
    }
}};
cc.path = {join: function () {
    for (var a = arguments.length, b = "", c = 0; c < a; c++)b = (b + ("" == b ? "" : "/") + arguments[c]).replace(/(\/|\\\\)$/, "");
    return b
}, extname: function (a) {
    return(a = /(\.[^\.\/\?\\]*)(\?.*)?$/.exec(a)) ? a[1] : null
}, mainFileName: function (a) {
    if (a) {
        var b = a.lastIndexOf(".");
        if (-1 !== b)return a.substring(0, b)
    }
    return a
}, basename: function (a, b) {
    var c = a.indexOf("?");
    0 < c && (a = a.substring(0, c));
    c = /(\/|\\\\)([^(\/|\\\\)]+)$/g.exec(a.replace(/(\/|\\\\)$/, ""));
    if (!c)return null;
    c = c[2];
    return b && a.substring(a.length -
        b.length).toLowerCase() == b.toLowerCase() ? c.substring(0, c.length - b.length) : c
}, dirname: function (a) {
    return a.replace(/((.*)(\/|\\|\\\\))?(.*?\..*$)?/, "$2")
}, changeExtname: function (a, b) {
    b = b || "";
    var c = a.indexOf("?"), d = "";
    0 < c && (d = a.substring(c), a = a.substring(0, c));
    c = a.lastIndexOf(".");
    return 0 > c ? a + b + d : a.substring(0, c) + b + d
}, changeBasename: function (a, b, c) {
    if (0 == b.indexOf("."))return this.changeExtname(a, b);
    var d = a.indexOf("?"), e = "";
    c = c ? this.extname(a) : "";
    0 < d && (e = a.substring(d), a = a.substring(0, d));
    d = a.lastIndexOf("/");
    return a.substring(0, 0 >= d ? 0 : d + 1) + b + c + e
}};
cc.loader = {_jsCache: {}, _register: {}, _langPathCache: {}, _aliases: {}, resPath: "", audioPath: "", cache: {}, getXMLHttpRequest: function () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
}, _getArgs4Js: function (a) {
    var b = a[0], c = a[1], d = a[2], e = ["", null, null];
    if (1 === a.length)e[1] = b instanceof Array ? b : [b]; else if (2 === a.length)"function" == typeof c ? (e[1] = b instanceof Array ? b : [b], e[2] = c) : (e[0] = b || "", e[1] = c instanceof Array ? c : [c]); else if (3 === a.length)e[0] = b || "", e[1] = c instanceof
        Array ? c : [c], e[2] = d; else throw"arguments error to load js!";
    return e
}, loadJs: function (a, b, c) {
    var d = this, e = d._jsCache, f = d._getArgs4Js(arguments);
    -1 < navigator.userAgent.indexOf("Trident/5") ? d._loadJs4Dependency(f[0], f[1], 0, f[2]) : cc.async.map(f[1], function (a, b, c) {
        a = cc.path.join(f[0], a);
        if (e[a])return c(null);
        d._createScript(a, !1, c)
    }, f[2])
}, loadJsWithImg: function (a, b, c) {
    var d = this._loadJsImg(), e = this._getArgs4Js(arguments);
    this.loadJs(e[0], e[1], function (a) {
        if (a)throw a;
        d.parentNode.removeChild(d);
        if (e[2])e[2]()
    })
},
    _createScript: function (a, b, c) {
        var d = document, e = cc.newElement("script");
        e.async = b;
        e.src = a;
        this._jsCache[a] = !0;
        cc._addEventListener(e, "load", function () {
            this.removeEventListener("load", arguments.callee, !1);
            c()
        }, !1);
        cc._addEventListener(e, "error", function () {
            c("Load " + a + " failed!")
        }, !1);
        d.body.appendChild(e)
    }, _loadJs4Dependency: function (a, b, c, d) {
        if (c >= b.length)d && d(); else {
            var e = this;
            e._createScript(cc.path.join(a, b[c]), !1, function (f) {
                if (f)return d(f);
                e._loadJs4Dependency(a, b, c + 1, d)
            })
        }
    }, _loadJsImg: function () {
        var a =
            document, b = a.getElementById("cocos2d_loadJsImg");
        if (!b) {
            b = cc.newElement("img");
            cc._loadingImage && (b.src = cc._loadingImage);
            a = a.getElementById(cc.game.config.id);
            a.style.backgroundColor = "white";
            a.parentNode.appendChild(b);
            var c = getComputedStyle ? getComputedStyle(a) : a.currentStyle;
            c || (c = {width: a.width, height: a.height});
            b.style.left = a.offsetLeft + (parseFloat(c.width) - b.width) / 2 + "px";
            b.style.top = a.offsetTop + (parseFloat(c.height) - b.height) / 2 + "px";
            b.style.position = "absolute"
        }
        return b
    }, loadTxt: function (a, b) {
        if (cc._isNodeJs)require("fs").readFile(a,
            function (a, c) {
                a ? b(a) : b(null, c.toString())
            }); else {
            var c = this.getXMLHttpRequest(), d = "load " + a + " failed!";
            c.open("GET", a, !0);
            /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (c.setRequestHeader("Accept-Charset", "utf-8"), c.onreadystatechange = function () {
                4 == c.readyState && 200 == c.status ? b(null, c.responseText) : b(d)
            }) : (c.overrideMimeType && c.overrideMimeType("text/plain; charset\x3dutf-8"), c.onload = function () {
                4 == c.readyState && 200 == c.status ? b(null, c.responseText) : b(d)
            });
            c.send(null)
        }
    }, _loadTxtSync: function (a) {
        if (cc._isNodeJs)return require("fs").readFileSync(a).toString();
        var b = this.getXMLHttpRequest();
        b.open("GET", a, !1);
        /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? b.setRequestHeader("Accept-Charset", "utf-8") : b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dutf-8");
        b.send(null);
        return 4 == !b.readyState || 200 != b.status ? null : b.responseText
    }, loadJson: function (a, b) {
        this.loadTxt(a, function (c, d) {
            try {
                c ? b(c) : b(null, JSON.parse(d))
            } catch (e) {
                throw"load json [" + a + "] failed : " + e;
            }
        })
    }, _checkIsImageURL: function (a) {
        return null != /(\.png)|(\.jpg)|(\.bmp)|(\.jpeg)|(\.gif)/.exec(a)
    },
    loadImg: function (a, b, c) {
        var d = !0;
        void 0 !== c ? d = null == b.isCrossOrigin ? d : b.isCrossOrigin : void 0 !== b && (c = b);
        var e = new Image;
        d && "file://" != location.origin && (e.crossOrigin = "Anonymous");
        cc._addEventListener(e, "load", function () {
            this.removeEventListener("load", arguments.callee, !1);
            this.removeEventListener("error", arguments.callee, !1);
            c && c(null, e)
        });
        cc._addEventListener(e, "error", function () {
            this.removeEventListener("error", arguments.callee, !1);
            c && c("load image failed")
        });
        e.src = a;
        return e
    }, _loadResIterator: function (a, b, c) {
        var d = this, e = null, f = a.type;
        f ? (f = "." + f.toLowerCase(), e = a.src ? a.src : a.name + f) : (e = a, f = cc.path.extname(e));
        if (b = d.cache[e])return c(null, b);
        b = d._register[f.toLowerCase()];
        if (!b)return cc.error("loader for [" + f + "] not exists!"), c();
        f = b.getBasePath ? b.getBasePath() : d.resPath;
        f = d.getUrl(f, e);
        b.load(f, e, a, function (a, b) {
            a ? (cc.log(a), d.cache[e] = null, delete d.cache[e], c()) : (d.cache[e] = b, c(null, b))
        })
    }, getUrl: function (a, b) {
        var c = this._langPathCache, d = cc.path;
        if (void 0 !== a && void 0 === b) {
            b = a;
            var e = d.extname(b),
                e = e ? e.toLowerCase() : "";
            a = (e = this._register[e]) ? e.getBasePath ? e.getBasePath() : this.resPath : this.resPath
        }
        b = cc.path.join(a || "", b);
        if (b.match(/[\/(\\\\)]lang[\/(\\\\)]/i)) {
            if (c[b])return c[b];
            d = d.extname(b) || "";
            b = c[b] = b.substring(0, b.length - d.length) + "_" + cc.sys.language + d
        }
        return b
    }, load: function (a, b, c) {
        if (void 0 !== c)"function" == typeof b && (b = {trigger: b}); else if (void 0 !== b)"function" == typeof b && (c = b, b = {}); else if (void 0 !== a)b = {}; else throw"arguments error!";
        b.cb = function (a, b) {
            a && cc.log(a);
            c && c(b)
        };
        a instanceof
        Array || (a = [a]);
        b.iterator = this._loadResIterator;
        b.iteratorTarget = this;
        cc.async.map(a, b)
    }, _handleAliases: function (a, b) {
        var c = this._aliases, d = [], e;
        for (e in a) {
            var f = a[e];
            c[e] = f;
            d.push(f)
        }
        this.load(d, b)
    }, loadAliases: function (a, b) {
        var c = this, d = c.getRes(a);
        d ? c._handleAliases(d.filenames, b) : c.load(a, function (a) {
            c._handleAliases(a[0].filenames, b)
        })
    }, register: function (a, b) {
        if (a && b) {
            if ("string" == typeof a)return this._register[a.trim().toLowerCase()] = b;
            for (var c = 0, d = a.length; c < d; c++)this._register["." + a[c].trim().toLowerCase()] =
                b
        }
    }, getRes: function (a) {
        return this.cache[a] || this.cache[this._aliases[a]]
    }, release: function (a) {
        var b = this.cache, c = this._aliases;
        delete b[a];
        delete b[c[a]];
        delete c[a]
    }, releaseAll: function () {
        var a = this.cache, b = this._aliases, c;
        for (c in a)delete a[c];
        for (c in b)delete b[c]
    }};
(function () {
    var a = window, b, c;
    "undefined" !== typeof document.hidden ? (b = "hidden", c = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (b = "mozHidden", c = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (b = "msHidden", c = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (b = "webkitHidden", c = "webkitvisibilitychange");
    var d = function () {
        cc.eventManager && cc.game._eventHide && cc.eventManager.dispatchEvent(cc.game._eventHide)
    }, e = function () {
        cc.eventManager && cc.game._eventShow &&
        cc.eventManager.dispatchEvent(cc.game._eventShow)
    };
    b ? cc._addEventListener(document, c, function () {
        document[b] ? d() : e()
    }, !1) : (cc._addEventListener(a, "blur", d, !1), cc._addEventListener(a, "focus", e, !1));
    "onpageshow"in window && "onpagehide"in window && (cc._addEventListener(a, "pagehide", d, !1), cc._addEventListener(a, "pageshow", e, !1));
    c = a = null
})();
cc.log = cc.warn = cc.error = cc.assert = function () {
};
cc.create3DContext = function (a, b) {
    for (var c = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], d = null, e = 0; e < c.length; ++e) {
        try {
            d = a.getContext(c[e], b)
        } catch (f) {
        }
        if (d)break
    }
    return d
};
cc._initSys = function (a, b) {
    cc._RENDER_TYPE_CANVAS = 0;
    cc._RENDER_TYPE_WEBGL = 1;
    var c = cc.sys = {};
    c.LANGUAGE_ENGLISH = "en";
    c.LANGUAGE_CHINESE = "zh";
    c.LANGUAGE_FRENCH = "fr";
    c.LANGUAGE_ITALIAN = "it";
    c.LANGUAGE_GERMAN = "de";
    c.LANGUAGE_SPANISH = "es";
    c.LANGUAGE_RUSSIAN = "ru";
    c.LANGUAGE_KOREAN = "ko";
    c.LANGUAGE_JAPANESE = "ja";
    c.LANGUAGE_HUNGARIAN = "hu";
    c.LANGUAGE_PORTUGUESE = "pt";
    c.LANGUAGE_ARABIC = "ar";
    c.LANGUAGE_NORWEGIAN = "no";
    c.LANGUAGE_POLISH = "pl";
    c.OS_WINDOWS = "Windows";
    c.OS_IOS = "iOS";
    c.OS_OSX = "OS X";
    c.OS_UNIX = "UNIX";
    c.OS_LINUX = "Linux";
    c.OS_ANDROID = "Android";
    c.OS_UNKNOWN = "Unknown";
    c.BROWSER_TYPE_WECHAT = "wechat";
    c.BROWSER_TYPE_ANDROID = "androidbrowser";
    c.BROWSER_TYPE_IE = "ie";
    c.BROWSER_TYPE_QQ = "qqbrowser";
    c.BROWSER_TYPE_MOBILE_QQ = "mqqbrowser";
    c.BROWSER_TYPE_UC = "ucbrowser";
    c.BROWSER_TYPE_360 = "360browser";
    c.BROWSER_TYPE_BAIDU_APP = "baiduboxapp";
    c.BROWSER_TYPE_BAIDU = "baidubrowser";
    c.BROWSER_TYPE_MAXTHON = "maxthon";
    c.BROWSER_TYPE_OPERA = "opera";
    c.BROWSER_TYPE_MIUI = "miuibrowser";
    c.BROWSER_TYPE_FIREFOX = "firefox";
    c.BROWSER_TYPE_SAFARI =
        "safari";
    c.BROWSER_TYPE_CHROME = "chrome";
    c.BROWSER_TYPE_UNKNOWN = "unknown";
    c.isNative = !1;
    var d = [c.BROWSER_TYPE_BAIDU, c.BROWSER_TYPE_OPERA, c.BROWSER_TYPE_FIREFOX, c.BROWSER_TYPE_CHROME, c.BROWSER_TYPE_SAFARI], e = [c.BROWSER_TYPE_BAIDU, c.BROWSER_TYPE_OPERA, c.BROWSER_TYPE_FIREFOX, c.BROWSER_TYPE_CHROME, c.BROWSER_TYPE_SAFARI, c.BROWSER_TYPE_UC, c.BROWSER_TYPE_QQ, c.BROWSER_TYPE_MOBILE_QQ, c.BROWSER_TYPE_IE], f = window, g = f.navigator, h = document.documentElement, k = g.userAgent.toLowerCase();
    c.isMobile = -1 != k.indexOf("mobile") ||
        -1 != k.indexOf("android");
    var l = g.language, l = (l = l ? l : g.browserLanguage) ? l.split("-")[0] : c.LANGUAGE_ENGLISH;
    c.language = l;
    var l = c.BROWSER_TYPE_UNKNOWN, m = k.match(/micromessenger|qqbrowser|mqqbrowser|ucbrowser|360browser|baiduboxapp|baidubrowser|maxthon|trident|opera|miuibrowser|firefox/i) || k.match(/chrome|safari/i);
    m && 0 < m.length && (l = m[0].toLowerCase(), "micromessenger" == l ? l = c.BROWSER_TYPE_WECHAT : "safari" === l && k.match(/android.*applewebkit/) ? l = c.BROWSER_TYPE_ANDROID : "trident" == l && (l = c.BROWSER_TYPE_IE));
    c.browserType = l;
    c._supportMultipleAudio = -1 < e.indexOf(c.browserType);
    e = parseInt(a[b.renderMode]);
    l = cc._RENDER_TYPE_WEBGL;
    m = cc.newElement("Canvas");
    cc._supportRender = !0;
    d = -1 == d.indexOf(c.browserType);
    if (1 === e || 0 === e && (c.isMobile || d))l = cc._RENDER_TYPE_CANVAS;
    if (l == cc._RENDER_TYPE_WEBGL && (!f.WebGLRenderingContext || !cc.create3DContext(m, {stencil: !0, preserveDrawingBuffer: !0})))0 == e ? l = cc._RENDER_TYPE_CANVAS : cc._supportRender = !1;
    if (l == cc._RENDER_TYPE_CANVAS)try {
        m.getContext("2d")
    } catch (n) {
        cc._supportRender = !1
    }
    cc._renderType = l;
    try {
        c._supportWebAudio = !!new (f.AudioContext || f.webkitAudioContext || f.mozAudioContext)
    } catch (q) {
        c._supportWebAudio = !1
    }
    try {
        var r = c.localStorage = f.localStorage;
        r.setItem("storage", "");
        r.removeItem("storage");
        r = null
    } catch (t) {
        ("SECURITY_ERR" === t.name || "QuotaExceededError" === t.name) && cc.warn("Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option"), c.localStorage = function () {
        }
    }
    r = c.capabilities = {canvas: !0};
    cc._renderType == cc._RENDER_TYPE_WEBGL && (r.opengl = !0);
    void 0 !== h.ontouchstart || g.msPointerEnabled ? r.touches = !0 : void 0 !== h.onmouseup && (r.mouse = !0);
    void 0 !== h.onkeyup && (r.keyboard = !0);
    if (f.DeviceMotionEvent || f.DeviceOrientationEvent)r.accelerometer = !0;
    f = k.match(/(iPad|iPhone|iPod)/i) ? !0 : !1;
    k = k.match(/android/i) || g.platform.match(/android/i) ? !0 : !1;
    h = c.OS_UNKNOWN;
    -1 != g.appVersion.indexOf("Win") ? h = c.OS_WINDOWS : f ? h = c.OS_IOS : -1 != g.appVersion.indexOf("Mac") ? h = c.OS_OSX : -1 != g.appVersion.indexOf("X11") ? h = c.OS_UNIX : -1 != g.appVersion.indexOf("Linux") ? h = c.OS_LINUX :
        k && (h = c.OS_ANDROID);
    c.os = h;
    c.garbageCollect = function () {
    };
    c.dumpRoot = function () {
    };
    c.restartVM = function () {
    };
    c.dump = function () {
        var a;
        a = "" + ("isMobile : " + this.isMobile + "\r\n");
        a += "language : " + this.language + "\r\n";
        a += "browserType : " + this.browserType + "\r\n";
        a += "capabilities : " + JSON.stringify(this.capabilities) + "\r\n";
        a += "os : " + this.os + "\r\n";
        cc.log(a)
    }
};
cc.ORIENTATION_PORTRAIT = 0;
cc.ORIENTATION_PORTRAIT_UPSIDE_DOWN = 1;
cc.ORIENTATION_LANDSCAPE_LEFT = 2;
cc.ORIENTATION_LANDSCAPE_RIGHT = 3;
cc._drawingUtil = null;
cc._renderContext = null;
cc._canvas = null;
cc._gameDiv = null;
cc._rendererInitialized = !1;
cc._setupCalled = !1;
cc._setup = function (a, b, c) {
    if (!cc._setupCalled) {
        cc._setupCalled = !0;
        var d = window;
        d.requestAnimFrame = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame;
        var e = cc.$(a) || cc.$("#" + a), f;
        "CANVAS" == e.tagName ? (b = b || e.width, c = c || e.height, f = cc.container = cc.newElement("DIV"), a = cc._canvas = e, a.parentNode.insertBefore(f, a), a.appendTo(f), f.setAttribute("id", "Cocos2dGameContainer")) : ("DIV" != e.tagName && cc.log("Warning: target element is not a DIV or CANVAS"),
            b = b || e.clientWidth, c = c || e.clientHeight, f = cc.container = e, a = cc._canvas = cc.$(cc.newElement("CANVAS")), e.appendChild(a));
        a.addClass("gameCanvas");
        a.setAttribute("width", b || 480);
        a.setAttribute("height", c || 320);
        a.setAttribute("tabindex", 99);
        a.style.outline = "none";
        e = f.style;
        e.width = (b || 480) + "px";
        e.height = (c || 320) + "px";
        e.margin = "0 auto";
        e.position = "relative";
        e.overflow = "hidden";
        f.top = "100%";
        cc._renderType == cc._RENDER_TYPE_WEBGL && (cc._renderContext = cc.webglContext = cc.create3DContext(a, {stencil: !0, preserveDrawingBuffer: !0,
            antialias: !cc.sys.isMobile, alpha: !1}));
        cc._renderContext ? (d.gl = cc._renderContext, cc._drawingUtil = new cc.DrawingPrimitiveWebGL(cc._renderContext), cc._rendererInitialized = !0, cc.textureCache._initializingRenderer(), cc.shaderCache._init()) : (cc._renderContext = a.getContext("2d"), cc._mainRenderContextBackup = cc._renderContext, cc._renderContext.translate(0, a.height), cc._drawingUtil = cc.DrawingPrimitiveCanvas ? new cc.DrawingPrimitiveCanvas(cc._renderContext) : null);
        cc._gameDiv = f;
        cc.log(cc.ENGINE_VERSION);
        cc._setContextMenuEnable(!1);
        cc.sys.isMobile && (b = cc.newElement("style"), b.type = "text/css", document.body.appendChild(b), b.textContent = "body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}");
        cc.view = cc.EGLView._getInstance();
        cc.inputManager.registerSystemEvent(cc._canvas);
        cc.director = cc.Director._getInstance();
        cc.director.setOpenGLView && cc.director.setOpenGLView(cc.view);
        cc.winSize = cc.director.getWinSize();
        cc.saxParser = new cc.SAXParser;
        cc.plistParser = new cc.PlistParser
    }
};
cc._checkWebGLRenderMode = function () {
    if (cc._renderType !== cc._RENDER_TYPE_WEBGL)throw"This feature supports WebGL render mode only.";
};
cc._isContextMenuEnable = !1;
cc._setContextMenuEnable = function (a) {
    cc._isContextMenuEnable = a;
    cc._canvas.oncontextmenu = function () {
        if (!cc._isContextMenuEnable)return!1
    }
};
cc.game = {DEBUG_MODE_NONE: 0, DEBUG_MODE_INFO: 1, DEBUG_MODE_WARN: 2, DEBUG_MODE_ERROR: 3, DEBUG_MODE_INFO_FOR_WEB_PAGE: 4, DEBUG_MODE_WARN_FOR_WEB_PAGE: 5, DEBUG_MODE_ERROR_FOR_WEB_PAGE: 6, EVENT_HIDE: "game_on_hide", EVENT_SHOW: "game_on_show", _eventHide: null, _eventShow: null, _onBeforeStartArr: [], CONFIG_KEY: {engineDir: "engineDir", dependencies: "dependencies", debugMode: "debugMode", showFPS: "showFPS", frameRate: "frameRate", id: "id", renderMode: "renderMode", jsList: "jsList", classReleaseMode: "classReleaseMode"}, _prepareCalled: !1,
    _prepared: !1, _paused: !0, _intervalId: null, config: null, onStart: null, onStop: null, setFrameRate: function (a) {
        this.config[this.CONFIG_KEY.frameRate] = a;
        this._intervalId && clearInterval(this._intervalId);
        this._paused = !0;
        this._runMainLoop()
    }, _runMainLoop: function () {
        var a = this, b, c = a.config, d = a.CONFIG_KEY, e = window, f = c[d.frameRate], g = cc.director;
        g.setDisplayStats(c[d.showFPS]);
        e.requestAnimFrame && 60 == f ? (b = function () {
            a._paused || (g.mainLoop(), e.requestAnimFrame(b))
        }, e.requestAnimFrame(b)) : (b = function () {
            g.mainLoop()
        },
            a._intervalId = setInterval(b, 1E3 / f));
        a._paused = !1
    }, run: function (a) {
        var b = this, c = function () {
            a && (b.config[b.CONFIG_KEY.id] = a);
            b._prepareCalled ? cc._supportRender && (b._checkPrepare = setInterval(function () {
                b._prepared && (cc._setup(b.config[b.CONFIG_KEY.id]), b._runMainLoop(), b._eventHide = b._eventHide || new cc.EventCustom(b.EVENT_HIDE), b._eventHide.setUserData(b), b._eventShow = b._eventShow || new cc.EventCustom(b.EVENT_SHOW), b._eventShow.setUserData(b), b.onStart(), clearInterval(b._checkPrepare))
            }, 10)) : b.prepare(function () {
                cc._supportRender &&
                (cc._setup(b.config[b.CONFIG_KEY.id]), b._runMainLoop(), b._eventHide = b._eventHide || new cc.EventCustom(b.EVENT_HIDE), b._eventHide.setUserData(b), b._eventShow = b._eventShow || new cc.EventCustom(b.EVENT_SHOW), b._eventShow.setUserData(b), b.onStart())
            })
        };
        document.body ? c() : cc._addEventListener(window, "load", function () {
            this.removeEventListener("load", arguments.callee, !1);
            c()
        }, !1)
    }, _initConfig: function () {
        var a = this.CONFIG_KEY, b = function (b) {
            b[a.engineDir] = b[a.engineDir] || "frameworks/cocos2d-html5";
            null == b[a.debugMode] &&
            (b[a.debugMode] = 0);
            b[a.frameRate] = b[a.frameRate] || 60;
            null == b[a.renderMode] && (b[a.renderMode] = 1);
            return b
        };
        if (document.ccConfig)this.config = b(document.ccConfig); else try {
            for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                var e = c[d].getAttribute("cocos");
                if ("" == e || e)break
            }
            var f, g, h;
            if (d < c.length) {
                if (f = c[d].src)h = /(.*)\//.exec(f)[0], cc.loader.resPath = h, f = cc.path.join(h, "project.json");
                g = cc.loader._loadTxtSync(f)
            }
            g || (g = cc.loader._loadTxtSync("project.json"));
            var k = JSON.parse(g);
            this.config =
                b(k || {})
        } catch (l) {
            cc.log("Failed to read or parse project.json"), this.config = b({})
        }
        cc._initSys(this.config, a)
    }, _jsAddedCache: {}, _getJsListOfModule: function (a, b, c) {
        var d = this._jsAddedCache;
        if (d[b])return null;
        c = c || "";
        var e = [], f = a[b];
        if (!f)throw"can not find module [" + b + "]";
        b = cc.path;
        for (var g = 0, h = f.length; g < h; g++) {
            var k = f[g];
            if (!d[k]) {
                var l = b.extname(k);
                l ? ".js" == l.toLowerCase() && e.push(b.join(c, k)) : (l = this._getJsListOfModule(a, k, c)) && (e = e.concat(l));
                d[k] = 1
            }
        }
        return e
    }, prepare: function (a) {
        var b = this,
            c = b.config, d = b.CONFIG_KEY, e = c[d.engineDir], f = cc.loader;
        if (cc._supportRender) {
            b._prepareCalled = !0;
            var g = c[d.jsList] || [];
            cc.Class ? f.loadJsWithImg("", g, function (c) {
                if (c)throw c;
                b._prepared = !0;
                a && a()
            }) : (d = cc.path.join(e, "moduleConfig.json"), f.loadJson(d, function (d, f) {
                if (d)throw d;
                var l = c.modules || [], m = f.module, n = [];
                cc._renderType == cc._RENDER_TYPE_WEBGL ? l.splice(0, 0, "shaders") : 0 > l.indexOf("core") && l.splice(0, 0, "core");
                for (var q = 0, r = l.length; q < r; q++) {
                    var t = b._getJsListOfModule(m, l[q], e);
                    t && (n = n.concat(t))
                }
                n =
                    n.concat(g);
                cc.loader.loadJsWithImg(n, function (c) {
                    if (c)throw c;
                    b._prepared = !0;
                    a && a()
                })
            }))
        } else cc.error("Can not support render!")
    }};
cc.game._initConfig();
cc.loader.loadBinary = function (a, b) {
    var c = this, d = this.getXMLHttpRequest(), e = "load " + a + " failed!";
    d.open("GET", a, !0);
    /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) ? (d.setRequestHeader("Accept-Charset", "x-user-defined"), d.onreadystatechange = function () {
        if (4 == d.readyState && 200 == d.status) {
            var a = cc._convertResponseBodyToText(d.responseBody);
            b(null, c._str2Uint8Array(a))
        } else b(e)
    }) : (d.overrideMimeType && d.overrideMimeType("text/plain; charset\x3dx-user-defined"), d.onload = function () {
        4 ==
        d.readyState && 200 == d.status ? b(null, c._str2Uint8Array(d.responseText)) : b(e)
    });
    d.send(null)
};
cc.loader._str2Uint8Array = function (a) {
    if (!a)return null;
    for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++)b[c] = a.charCodeAt(c) & 255;
    return b
};
cc.loader.loadBinarySync = function (a) {
    var b = this.getXMLHttpRequest(), c = "load " + a + " failed!";
    b.open("GET", a, !1);
    a = null;
    if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
        b.setRequestHeader("Accept-Charset", "x-user-defined");
        b.send(null);
        if (200 != b.status)return cc.log(c), null;
        (b = cc._convertResponseBodyToText(b.responseBody)) && (a = this._str2Uint8Array(b))
    } else {
        b.overrideMimeType && b.overrideMimeType("text/plain; charset\x3dx-user-defined");
        b.send(null);
        if (200 != b.status)return cc.log(c),
            null;
        a = this._str2Uint8Array(b.responseText)
    }
    return a
};
var Uint8Array = Uint8Array || Array;
if (/msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
    var IEBinaryToArray_ByteStr_Script = '\x3c!-- IEBinaryToArray_ByteStr --\x3e\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr \x3d CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex \x3d LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last \x3d Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last \x3d ""\r\n   End If\r\nEnd Function\r\n', myVBScript =
        cc.newElement("script");
    myVBScript.type = "text/vbscript";
    myVBScript.textContent = IEBinaryToArray_ByteStr_Script;
    document.body.appendChild(myVBScript);
    cc._convertResponseBodyToText = function (a) {
        for (var b = {}, c = 0; 256 > c; c++)for (var d = 0; 256 > d; d++)b[String.fromCharCode(c + 256 * d)] = String.fromCharCode(c) + String.fromCharCode(d);
        c = IEBinaryToArray_ByteStr(a);
        a = IEBinaryToArray_ByteStr_Last(a);
        return c.replace(/[\s\S]/g, function (a) {
            return b[a]
        }) + a
    }
}
;
cc = cc || {};
cc._loadingImage = "data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAANACwAAAAAEAAQAAAEO5DJSau9OOvNex0IMnDIsiCkiW6g6BmKYlBFkhSUEgQKlQCARG6nEBwOgl+QApMdCIRD7YZ5RjlGpCUCACH5BAUAAA0ALAAAAgAOAA4AAAQ6kLGB0JA4M7QW0hrngRllkYyhKAYqKUGguAws0ypLS8JxCLQDgXAIDg+FRKIA6v0SAECCBpXSkstMBAAh+QQFAAANACwAAAAACgAQAAAEOJDJORAac6K1kDSKYmydpASBUl0mqmRfaGTCcQgwcxDEke+9XO2WkxQSiUIuAQAkls0n7JgsWq8RACH5BAUAAA0ALAAAAAAOAA4AAAQ6kMlplDIzTxWC0oxwHALnDQgySAdBHNWFLAvCukc215JIZihVIZEogDIJACBxnCSXTcmwGK1ar1hrBAAh+QQFAAANACwAAAAAEAAKAAAEN5DJKc4RM+tDyNFTkSQF5xmKYmQJACTVpQSBwrpJNteZSGYoFWjIGCAQA2IGsVgglBOmEyoxIiMAIfkEBQAADQAsAgAAAA4ADgAABDmQSVZSKjPPBEDSGucJxyGA1XUQxAFma/tOpDlnhqIYN6MEAUXvF+zldrMBAjHoIRYLhBMqvSmZkggAIfkEBQAADQAsBgAAAAoAEAAABDeQyUmrnSWlYhMASfeFVbZdjHAcgnUQxOHCcqWylKEohqUEAYVkgEAMfkEJYrFA6HhKJsJCNFoiACH5BAUAAA0ALAIAAgAOAA4AAAQ3kMlJq704611SKloCAEk4lln3DQgyUMJxCBKyLAh1EMRR3wiDQmHY9SQslyIQUMRmlmVTIyRaIgA7";
cc._fpsImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfcAgcQLxxUBNp/AAAQZ0lEQVR42u2be3QVVZbGv1N17829eRLyIKAEOiISEtPhJTJAYuyBDmhWjAEx4iAGBhxA4wABbVAMWUAeykMCM+HRTcBRWkNH2l5moS0LCCrQTkYeQWBQSCAIgYRXEpKbW/XNH5zS4noR7faPEeu31l0h4dSpvc+t/Z199jkFWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhY/H9D/MR9qfKnLj/00U71aqfJn9+HCkCR/Wk36ddsgyJ/1wF4fkDfqqm9/gPsUeTnVr6a2xlQfnxdI7zs0W7irzD17Ytb2WT7EeNv/r4ox1O3Quf2QP2pgt9utwfout4FQE8AVBSlnaRmfvAURQkg2RlAbwB9AThlW5L0GaiKojhJhgOIBqDa7XaPrusdPtr5kQwF0BVAAoBIABRCKDd5aFUhRDAAw57eAOwAhKIoupft3zoqhB1AqLwuHIBut9uFt02qqvqRDJR2dAEQJj/BAOjn56dqmma+xiaECAEQAWAggLsB6A6HQ2iaZggBhBAqgEAAnQB0kzaEmT4hAITT6VQ8Ho/HJAKKECJQtr8LwD1y/A1/vcdfEUIEyfZ9AcQbYvZ942Px88L2UwlJR0dH0EMPPbRj5syZPUeNGrXR7Xb/641xIwJ1XY9NSUlZm52dfW+XLl1w8uRJzJ8//+OGhoYJqqqe1TSt1Wsm9NN1PSIqKmr12rVrR5WUlHy1bdu2AQCumWc3IYRD1/UwVVXnFRQUTIuNjUVzczN2797dWFJSkq8oymZd15sAGAEnFEUJ1nX9nzIzM1dnZmZGh4SE4OTJk5g5c+Zf29vbp9pstrMej6fVOyhIhgAYU1hY+B+hoaGoqKg4XVlZea+XTULTNFdCQsLGiRMnPuR2u3UhBOV9eeDAAWXTpk095DUe6WsoyRE5OTlr0tLSAux2O/bs2cO5c+e+pijKUpIXSHaQVAGkvPLKK++6XK4OksJLCFlXV2cvKSlJBFAjhU+x2WwhHo9nUHp6+urMzMy7wsLCUF9fjxdffPHjxsbGiTab7WuPx9NiEutOuq4PyMjI+M+srKyYqKgoHD58GDNmzNjq8XhyVFU9b/q+LH7hBAEYu3PnTlZVVRFAGgCX6f/tAHoOHDjwa0p27txp/JO9e/f+QM7cipw9nfL3kQBKt2zZQpJ87rnn6mQmoHilw2EACs+cOUOSrK+vZ1NTE0nyo48+IoBpxswoBcMJ4Ndjx471kOTFixe5d+9ekqTH42H//v13A4jyzpAURfEH0H/OnDnthu1z5sw558MmFUCPWbNmnaMP3nrrLZoyDmP8Hl68eDFJ8siRI9/Yc+zYMQKYKdtAztrTrl27xptRXV1NAKMAOAyBBBA/Y8aMdpLs6Ojgxx9//E37+++//29yvFXppwvAwMcee8xjtDHsuXLlCqOjo//ia3wsfpkoALqFhoZuIckJEyackimm3dQmEMDUmpoakmRISMhhAHOHDx/eQJIbN24kgKEyMAHAFRMTs2XXrl1saWkhSZ0kp0+ffhrAr3wEW/S8efOukORLL72kA1gKYMPWrVtJkk899dRJAHeYrgsEsIQkjx8/TgDvAPjd448/3kaSb7zxBmUa7vC6z53BwcFbSHL9+vU6Sc6aNes8gF5ewWAH0PfVV18lSQL4DMBGIcQ6AKtcLleBFC2jXtFt8ODBe0iyoqKCAJYByC8qKmJDQwOzsrK+MAmqo1OnTveHhoa+GRkZ+XZkZOSWiIiIvzgcjk9mzpypkWRmZuZpmbYbGV4AgPnNzc1sa2sjgN0A5iQmJtaSZHl5OQHcb/K3s81mW0uSTU1NBFAFYFbfvn1Pk+Tbb79NAA8IIVzW42/hByA+Pz/fLR/2ZXIda05NI/z9/TeR5J49ewhgqlxTrtI0jY2NjQQw3zTLuWJiYjaUlJToS5Ys6fjkk080kwDEeAmADcA9GzZsIElGRUW9CyAWwLApU6Y0kOSKFSsog9QICGdERMTGsrIyZmVlEcC9AB4IDw/fTpLbtm0jgN94CUAnAJmVlZVcs2aNZ/LkyRdJcvbs2b4EwAkgZfPmzTxw4AABFAN4BkC6vFeUSewcAO5duXIlSTIhIaEawGMAxgKYAmAGgCS73e5vrKVk/yGythANYEhCQsIhkly+fDkBpKqqGmL6DgIALDKN/3yZpVWQZGVlJQE8aPI3KiMjo5okV61aRQAjAPQBMPfIkSN0u90EUCBtsPiFEwpgbn19PdetW2fM5N4zQ9ekpKQqkty0aRMBpMjiWM6JEydIkoqirJUFJ6iq6pAPVy8A6cZMehMBUACEuVyuFwG8HBwcPEIWx367ZMkSjSQXLVrUJouTRorrkAHdA8BdQogsAOsKCwtJkmPGjDkvMw2bDDo/ADEjRoz4XylyFbm5uY0mAbjLyyZ/AOOrq6tZVlbWsWDBgo69e/eyoqKCgwcPPg4gSQaoIRbp27dvN7KF+tLSUr28vJwFBQXtMpvpYRIM7+wrAkDeqVOnePbsWQIoNKfzpiXPg8uXLydJJicnNwF4f+nSpW6STEtLq5fjYwhk1wkTJtSQ5Ouvv04AqTKj+N2xY8dIkgEBAW/Ie1v8wncRegwZMmQvSfbr12+3Ua33WqPfOWbMmP0kWVpaSgCDZAqcfejQIWNZsEGKgvnh9gfQb9myZd8nAEJVVZtMkUNk8CcNHTq0liR1XWdYWNhmH1mJIme80OnTp18x1rp5eXkEsNJms92Fb7e/IgEsvHz5Mp999tkmAI/l5uZeMC0B7vEqqAYAyL106RJJsra2lpWVld+sucePH38ZQG+5NncBeOrgwYMkqbe3t/Po0aOsra011wAWyl0H7x0JJ4DE+fPnu0kyPT29DsDdUrBuyNKEEAkAdpw/f/6GeoEM8GUmfwEgPCIiopwkGxsbabPZPgOw6L777vvm4p49e26VGYjFLxUhhD+ApLKyMp44ccIoVnXybgbgzkcfffRzklyzZg0BDJYCMMmoCwQFBXkLgLGWvvcWAgBToSsKwNPTp09vMR7UuLi4rwH0lgU8c/Db5ezbeeTIkRWzZ8++aMxu+fn5BPCADBwHgP4LFy701NXVEUAJgAnPP/98kyxMNgHo53A4zH77BQQETMvPz7+Um5vbBuAlAFMSExPPmdbVL0qh8Acw8fDhw5SCchVAEYAVb775JknyhRdeaJYztHfxMwLAaqNwCGC2FArv8x0hAHKNLGPKlCme5OTk/Zs3bzb7O0wKiiG8KXl5ed8IxenTp0mSR48e1UmyW7duWywBuD2xyQcgFECgoih+8H1gyJgZV5Lkyy+/3CbTRIePtl2HDBmyw1QBHyGDdXZdXR1JUghRKkXBjOMHCoBdpr0L3nvvPZLkF198wejo6O0A4lVVDTb74HQ6AwD8Wq7Jh8rgGgDgQ13XjVR8qaxJuADMbmlpYXl5uV5UVNRWUFDgfv/993Vj/ZydnU1c37eHXML4S3viAcQqitJD2l104cIFY8lTKsXSBWBMVVWVcd9yed2A1NTUQ6Zl00CvLMMOoHdubm6zFIlWOf5+PsY/Kj09vdrU11QAwwGsv3jxIk21m2DZr10I0RXAuAcffPBgaWkpV69eTYfDcdiwUxY0w6xw+flX8L1xApjevXv3lREREaW6rofB93aPDUDQpEmTMgHgtddeqwBwEd/utZvpqK6uPgEAcXFxkA94NwB9unfvjrNnz4LklwDcf08iIqv66Zs2bXrl4YcfxooVKxAbG7uqrq5uAYA2TdOEqqpGYIi2tjbl6aeffu/YsWPv5uTk7JaC1wHg4Pnz542MwoVvTx+21dbWYvjw4WLixIl+2dnZ9lGjRgmSTE1NRUpKCkwFTGiaxtTU1OXTpk3707Bhw/6g67pDipnT4biuj7qut+Lbk3Vf1tTUXI9qu91Pjq1QFEUBgJaWFgBo8yGOQ8eNGxcAAOvXr/8QwBUfYygAKL169eoCABcuXACAWtn2hOGv0+kMNO1KiPDw8F4A4rZv3/7R1KlTR0+bNu1ht9u9r1+/fqitrQXJgwDarRC6/QjPzs4+QJIffPCB9/aQmSAA43ft2mW0e1QGoi8CAPyLsZccExNTC2BlRkbGRdOyYJCP2csBIN6UAZzCd7cBbQCijYp/dXU1ExMTz6SmptaMHj36f9LS0vYlJCRsl6mxIWSdu3fv/g5J7t+/nwC2AShMTk6+SJKff/45AWRLYbD7+fndAeDf5BJnLoCCyZMnt5JkdnZ2C4B/F0KEm1Pu+Pj4rST55ZdfEsBWAK+mpaVdMo3raDn7KwDuSEpK+m+S3LBhAwG8DuCtHTt2UBbpjgC408vvcFVV15HkuXPnjMp+p5uMf0RcXNyHJNnQ0EBVVfcCWBQXF3fG+Jv0yxABPwB5LS0tRmFxN4BlTzzxxGWSXLx4sS5F3GGFy+1Hp5SUlJq6ujoWFxdTpsZ2H+0iIyMj/0iSWVlZX5mr5jfJFroPGzasxlhTnjp1iiTZ3NxMl8tlrCd9pfa9SkpKSJI5OTmnZOageLUZZqxvfVFWVkZcPwdgNwnSCKPqb17jkmR8fPzfZMDZ5CRsFBmNI7h95s2b1yhT7/MAYmStwCx4vy0uLqa3v5qmEcCfvSr1QQAeXb16NY3Cm3HQ55133iGAp+SxZTNhKSkpfzUddkrFjYevzAQCeGjp0qXfsYckY2NjTwD4leGDLCL2HTdunNtoY+zWSHFcIHdsFCtcfuZ1vO9Eqs3m7/F47sb1k2qX/f3997W2tl7BjWfpBYDOzzzzzIVJkyZh0KBBCwEsB3AJvl9AETabLcDj8dwRFRW1ctasWb8JCgpSzp07d62wsPC/Wltb8xRFadR1/ZqPXYbgAQMGbI2Pjw/+6quv9ldVVT0r01ezuPRJSUn5Y9euXXVd11WzDaqq6kePHm3+7LPPRgO4KlNuxWazhXo8nuTk5OSXMjIyEl0uFxoaGtqKior+dPXq1VdUVT0jj7r68ieoT58+vx8yZMjdx48fP1JVVTVF9m20VW02WyfZf97YsWPjXS4X6urqWvPy8jYCWCyEuEDS8FdVFKWzruv//OSTTy5OTk7uqWkaPv3007qysrJ8RVH+LI8ym8/rB3Tu3HnRI488knLo0KG2ffv2ZQI4C98vP6mqqoZqmpaclpa2cOTIkX39/f3R0NDQUVxc/G5TU9PLqqrWa5rWLH1QVFUN0TStX1JSUvH48eP7BwYG4uDBg1cKCgpeBbBe2u+2Qug2EwD5N5sMPuNtMe8XP4TT6Qxoa2sbIGeXvUKIK7d4IISiKC5d1wPljOfA9bPwzYqiXNV13dd6Uqiq6qdpml2mpe02m63d4/G4vcTF5fF47LJf71nJA6BZVVW3pmntuPHlmAD5wk6Q9NnbHp9vHaqq6tA0zU/64PZhk1FfCZB9G/23ALiqKEqzD39tpvbGUqoFwFUhRLP3yzpCCDtJpxyXDulfG27+pqRR3DXsUWVd4Yq0x/taVQjhIhksC8L+ABpM9ljBf5sKwI8pIBr75L5E4vvu+UNeG/a+hv+AL7yFH8qPtOfHjtOP6V/Bja8D6z/B2Nys/1u9Xv33tLf4GfF/LC4GCJwByWIAAAAASUVORK5CYII\x3d";
cc._loaderImage = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAlAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM4MDBEMDY2QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM4MDBEMDY1QTU1MjExRTFBQTAzQjEzMUNFNzMxRkQwIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2RTk0OEM4OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2RTk0OEM5OERCNDExRTE5NEUyRkE3M0M3QkE1NTlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQADQkJCQoJDQoKDRMMCwwTFhENDREWGhUVFhUVGhkUFhUVFhQZGR0fIB8dGScnKionJzk4ODg5QEBAQEBAQEBAQAEODAwOEA4RDw8RFA4RDhQVERISERUfFRUXFRUfKB0ZGRkZHSgjJiAgICYjLCwoKCwsNzc1NzdAQEBAQEBAQEBA/8AAEQgAyACgAwEiAAIRAQMRAf/EALAAAAEFAQEAAAAAAAAAAAAAAAQAAgMFBgcBAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgUQAAIBAgIEBwoLBgQGAwAAAAECAwAEEQUhMRIGQVFxsTITFGGBwdEiQlKSMzWRoeFicqKyI1NzFYJjJDQWB9KjVCbxwkNkJWXik3QRAAIBAgMFBQcDBQEAAAAAAAABAhEDIRIEMUFRcTJhwVIUBZGhsSJyEzOB0ULhYpIjUxX/2gAMAwEAAhEDEQA/AMJSpUqAVKlXuFAeUq9wpUB5XuFe4V6ooDzZHDox0CnGMinzwl7Z8NajaHeoO3vmTBZBtp9YUIqTEV5ROxHKnWRnaU8VRMhFBUjpV7hSoSeUq9pUB5Sr2lhQHlKvcK8oBV7hSFSRrtaKAZs07YNPM1pG2xJIAw1jSeandry/8X4m8VCKkWwaWwam7Xl/4v1W8VLtmX/i/VbxUoKkWwakSM407tmX/i/VbxUmzGwjQsjdY41IARie/U0IbZO0kNtCXnOCkEBeFu4KI3Bs7DNb27ya+jDx3kJeEnpJJEcQVbWDsk17u5urd591ucZkWhym2Vnd9RkCDEpFxDRpbw0bunu5mlp2De2FMLYXOD2wB2xbOeraUcYGJ72mlSUiqzzdzMd3Z3mixltA2yzcK/NlHM1DQyRXce1HocdNOEfJXZ88y9ZojOqhiBszIRiHQ8Y4cK5TvHuzLljHNMqxNoDjLFraHHnjPxcNCGVbxEUzYNTx5jZSxhpW6qTzlwJ+DCvO2Zf+L9VvFSgqyHYNLYNTdssPxfibxUu15f8Ai/VPiqCakOwa82DU/a8v/F+JvFTDdWPBL8R8VKCvYRYV5UzoMAy6QdIIqI0B4KJtxiRQwou16QoGUkntH5Tz0RbZbmF2hktraSVBo2lUkY8tDye0flPPXTslVUyiyVRsjqUOA4yMT8dW2ram2m6UVTNq9S7EIyUVJydMTn/6DnP+im9Wl+g5z/opvVrpteEhQWY4AaSTwAVf5WPiZh/9S5/zj7zltzlmYWkfWXNvJDGTgGcYDHirR7i7mSbwXParsFMrgb7w6jKw/wCmnc9I14kF3vpvCljbMyWMOJL4aEiB8qU/ObUK7HYWVrl1pFZWiCOCBQqKOLjPGTrNZZqKbUXVHq2nNwTuJRk1VpbgXN8s7Rk5ym0UQQzhIG2NAjhxHWbI+gCBVjBBFbwxwQqEiiUJGg1BVGAFe7dV28WYLYZFmF2Th1UD7JGjymGyn1iK5OyzIBGB1HgrLZhamzumQAGJwSqnSCh1q3GOCodxt4cxurdcpzuN4cyhiWaF5Bg09udUmnWw1H/jV9nFuJ7Quo+8h8peThFA+047vduyMtk7fYqTl07YFdfUufMPzT5p71UdtlmYXaGS2t3mQHAsgxANdadYJopLe4QS2867EsZ4QfCNYrCFbjdDPmgkYyWFxgVf04ifJf6ScNdRUW1XBb6FU5TjF5EpSSrGu/s5lN+g5z/opvVpfoOc/wCim9WtdHnatvObJXDW7xLGhB8nrPaY9/HCr+tEdPCVaSeDoYLnqF63lzW4/PFSW3ecxbI84VSzWUwUaSdg0DXXK5nvAipnd6qgKvWnQO7pri9ZUEmm3Vl2j1kr8pRlFRyquBNZjGxQ/S56Y1S2fu9OVueon11Szahoou06QoQUXadIVCD2FJJ7R+U89dMydv8Axdn+TH9muZye0flPPXQstlK5Tbka1gUjlC1q0vVLkeb6r+O3Tx9xcY1nt8c0NrZCyiOE1108NYjGv1joo7Js1jzKyScYLIvkzL6LDwHXVJksH9Sb49dKNq0tj1jA6uriOCL+02FWX7iVtZX1/AzaHTyeoauKn2MX9W79zebiZCuR5MjSrhfXuEtwTrUeZH+yNfdrRNcxI6IzhXlJEak6WIGJ2Rw4ChWnChndtlVBLMdQA0k1gbXNMzzDfDLs6mjaPKppJbWwJ1bOwwxw43OnHh71YT3DpfWUJmFlb5jHHDdeXBHIsrRea5TSqvxqG04cNN62vetoCS4tre5mgnkGE9q+3DKOkuI2WX6LDQRRHWDh1UCtwj7QRg2wdl8Djgw1qe7XvW0BQ3kfZ7mSLgU+T9E6RVbnuVrnWVSWqj+Lt8ZbRuHEdKPkYVcZ2MJY5fSGyeVar45+rkWQHAqccalPE5km1htWK5nK4Wnt5FuUBUwOMG4nGkA/BXUrW4S6torlOjMgcd/xVn7rLo7zKs0uEjCNeSvdwoBhgsZxX1l2j36k3Lu+uyprdj5Vs5A+i/lD48a0aaVJOPi7jB6lbzWozpjB48pf1NDXNN4vfl7+Z4BXS65pvF78vfzPAK71XTHmZ/S/yT+jvJ7L3fHytz1E+upbL+Qj5W56jfXWRnsIYKLtekKEFGWvSFQgyjk9o/Keet3YthlMP/5x9msJJ7R+U89biyb/AMXEv7gD6tadL1T+kwepRrC39ZkLDMbiwMvUHRPG0bjlGg8ore/23sxBldxfMPLupNhT8yL/AORNZbdzJ484scytxgLqJY5LZj6Q2sV5G1Vud1mjjyG0ij0NEGSZToKyhjtqw4waztuiXA3qKTbSxltfGhbZlE95ZtZqxVbgiOZhrER9ph3Svk9+pJILZ4Y4DGBFCUMKjRsGPobPFhUfW0NJmljE2xJcIrcI2vFUEln1lRXd6lrazXT9GCNpD+yNqoI7mOVduNw6nzlOIoPOUa6yye1XXcbMR5GdQ3xY0BSbj31/FcTQZirJ+q431q7anbHCTZ72Bw7lbPrKBMcBWNNgbMBBh+bsjBdni0VJ1lARZs6yWiupxCuMDy6KpS2IwOo6DTr3Mre3e5tZZVUM4ZBjqOOJoWO4jkXajcOOMHGgDISvWIrdAkKR80+TzVl908bPPL3LzxOuHdifxVfiTAg92qI/w+/8gGgSyN/mR7XPVlp0lF/3L3mbVKtu5Hjbk/8AHE2Fc03i9+Xv5ngFdKNc13i9+Xv5ngFaNV0x5nn+l/kn9HeEWXu+PlbnqJ9dS2Xu9OVueon11kZ7CGCjLXpCgxRlr0hUIPYUcntH5Tz1s8vb+Bt1/dqPirGSe0flPPWusG/g4Py15q06XqlyMWvVYQ+ruI9xJOqzO9hOto/sP8tbGOFIrmWeM7IuMDMnAXXQJOUjQeOsJk0nY96ip0CYunrjaHx1t+srPJUbXBm2LrFPikwTOb+T+VhbZxGMrDXp83x1QSy2tucJpUjPETp+Cn5/ftaRvKvtp3Kx48HG3erHMzOxZiWZtLMdJNQSbbL71Vk6yynViOkqnEEfOWtPbXi3EQkGg6mXiNckjeSJxJGxR10qw0GtxuxmvbImD4CZMFlA4fRfv0BqesqqzTMZNMEDbIHtHH2QeCiZJSqMQdOGiue53mz3czQwsRbIcNHnkec3c4qAMuriz68gTIToxwOOnlp0MjxMJYW741Gs3RVldtbygE/dMcHX/moDaxTiWNZB53B3arb8/wC+4SOF4sf/AKxU9kcBsfOGHfoUHtG/RbzY5Die5HHhXdvavqiZ9Q8Jdlq4/gbKua7xe/L38zwCuhpf2Uk/Zo50kmwJKIdogDjw1VzzeL35e/meAVp1LTgqY4nn+mRauzqmqwrjzCLL3fHytz1E+upLL+Qj5W56jfXWRnroYKLtekKEFF2vSFQg9hSSe0flPPWosm/hIfoLzVl5PaPynnrRWb/w0X0F5q06XqlyM2sVYx5gmbFre/t71NY2T+0h8VbSO5SWNJUOKSAMp7jDGspmMPaLRlXS6eWve1/FRO7WYdbZm1Y/eW/R7qHxHRXGojlm3ulid6aVbaW+OALvgCLq2Hm9WxHKWqjhj6xsK1e8dm15l4niG1LZkswGsxtrPeOmsvayBJA1VItlWjptLuTdPMo7LtjRDq9naK4+WF9IrUW7BaHOljGqVHB7w2hzVoZt87d8vaNYSLl02CcRsDEbJbj71Uu7UBkvJ7/D7q2QoDxySaAO8MTXdxRVMpRp5XZOWdF/ms7R5XdyKfKWJsO/5PhrG5XlNxmEywW6bTnTxAAcJNbGSMXkM1pjgbiNo1PziPJ+Os7u7m/6ReM00ZOgxSpqYYHT3wRXMKN4ll9zUG4bQfNshu8sZVuEA2hirA4qe/VOwwrVbzbww5mI44UKRRYkbWG0S3JWctbd7u5WFfOOLHiUdJqmaipfLsIsObhWe001lMkMVvJNjhghIALMcBxCs7fxXQmkupx1bXDswGPlaTidVaEyKNXkoo4eBV+Sq7L7Vs9zcBgeyQ4GQ/MB1crmoim2orezqcowTuSeEY48jQ7oZX2PLzdyLhNd6RjrEY6I7+uspvH78vfzPAK6UAAAFGAGgAcArmu8Xvy9/M8ArTfio24RW5nnaG67uou3H/KPuqT2X8hHytz1G+upLL3enK3PUb66ys9RDBRdr0hQgou06QqEGUkntH5Tz1e238vF9BeaqKT2j8p56vbb+Xi+gvNWjTdUuRn1XTHmTh8KrJTJlt8t1CPIY44cGnpJVjTJYkmjaN9Ib4u7V923njTethRauZJV3PaW1rfLIiXEDYg6R4VYc9CXW7thfOZbKdbGZtLW8uPVY/u3GrkNUkM9zlcxUjbhfWOA90cRq4gv4LhdqN+VToNYWmnRm9NNVWNTyHc6VWBv8wt4YeHqm6xyPmroq1Z7WGFLSxTq7WLSuPSdjrkfumq5yHXDUeA92oO2SKpVumNAaoJLMXH3myp0rpJ4uKhc3tbDM5BMri1zAj79j7KTiY8TcdBpcsith0286o+sPCagEX9Pzg4zXUCp6QYse8oouCG3tk6m1BYv05W6T+IdyolxbHDAAa2OgDlNCz3ryN2WxBd5PJMg1t81eId2ukqnLlTBbfcuY+9uJLiRcvtPvHdsHK+cfRHcHDWsyawjyy0WBcDI3lTP6TeIcFV+S5OmXx9bJg1048o8Cj0V8Jq2DVu09nL80up7OxHi+oal3P8AXB/IsZS8T/YOV65zvCcc7vfzPAK3ivWCz445zeH954BXOr6I8yfSfyz+jvCLP3fHytz1G+upLP3fHytz1E+usbPaQ0UXadIUIKLtekKhB7Ckk9o/Keer22/l4/oLzVRSe0flPPV7b/y8X0F5q0abqlyM+q6Y8yQsBTDMor1o8aiaE1pbluMqS3sbLLHIhSRQyngqukhaJ9uBjo+H5aOa3ao2t34qouRlLajTalGP8v0IY8ylXQ+PKPFU/bYXOLPge6CKia0LaxTOxHu1Q7cuBd9yPEJ7TbjXKO8CajbMIF6CNIeNvJHjqIWJ7tSpYkalqVblwIdyG+RGXur0hXYJFxal+Dhq5y3slkv3Y2pD0pTr+QUClpJRUdo9XW4OLrTHtM16cZLLWkeC7y4jvlNEpcRtw1Ux27Ci448NZrTFy3nn3IQWxlgGrDZ3pza7/M8ArZo+ArF5171uvp+CqdV0R5l/psUrs2vB3hdl7vTlbnqJ9dS2Xu+PlbnqJ9dY2eshooq16QoQUXa9IVCD2FLJ7RuU89WNtmUSQqkgYMgw0accKrpPaPynnrZWG4Vi+VWmY5tnMWXG+XrIYnA0rhj0mdcTgdNdwnKDqjmduM1SRR/qlr8/4KX6pa8T/BVzDuLZXudRZblmbxXcPUNPc3KqCIwrbOzgrHEnHjoyD+3eSXkht7DeKG4umDGOJVUklfouThXfmbnZ7Cvy1vt9pmv1W1+d8FL9VteJvgq5yrcOGfLmzHN80iyyETPbptAEFo2ZG8pmUa1OFNn3Ky6W/sbDKM5hv5bx2WTZA+7RF2y52WOPJTzE+z2Dy1vt9pT/AKpacTerS/U7Tib1a04/t7kDXPY03jhN0W6sQ7K7W3q2dnrMccaDy/8At80kuZfqWYxWNtlcvUPPhiGYhWDeUy7IwYU8xPs9g8tb7faUn6pacTerTxm9oOBvVq3v9z927aynuId44LiWKNnjhAXF2UYhRg516qpsryjLr21665zFLSTaK9U2GOA87SwqY37knRU+BzOzags0s1Oyr+BKM6sxwP6tSDPLMen6vy0rvdm3Sxlu7K/S7WDDrFUDUTxgnTU826eXW7KlxmqQuwDBXUKcD+1Xee/wXuKX5XDGWLapSVcOyhEM/seJ/V+WnjeGx4pPV+Wkm6kKZlFay3Jlt7iFpYZY8ASVK6DjtDDA0f8A0Tl340/1f8Ndx8xJVWXB0KbktFFpNzdVXAC/qOwA0CQni2flrO3Vwbm5lnI2TKxbDirX/wBE5d+NcfV/wVR7xZPa5U9utvI8nWhmbbw0YEAYYAVxfhfy5rlKR4Fulu6X7mW1mzT8S4Yis/5CPlbnqJ9dSWfu9OVueon11mZvQ2i7XpChKKtekKhBlNJ7R+U89bDfGTb3a3ZX0Lcj6kdY+T2j8p560288m1kWQr6MJ+ylSAr+2cnV5renjs3H1loX+3j9XvbbtxLN9lqW4UnV5jdnjtXHxihtyZNjeSBu5J9k1BJe7xy7W5CJ/wCzuD/mTVTf2+fq97LJuLrPsNRueS7W6aJ/38x+vLVXuY+xvHaNxbf2GoCezf8A36j/APsSf8w1sLnqczTefJluYoLm5uo5F61sBshItP1cNFYe1f8A3ir/APfE/wCZUe9bB94r5jwuPsrQFhmG4l/Z2M17HdW90tuu3IkTHaCjWdIw0VVZdks9/C06yJFEp2dp+E1bbqybGTZ8vpQD7L1XRv8A7blT96Oda7tpNuuNE37Cq9KSisjyuUoxrStKllHbLlWTXsMs8chuSuwEPDqwoLe5y+YRE/gLzmqRekvKKtd4327yM/ulHxmrHJStySWVRyrjxKI2XC/CTlnlPPKTpTdFbP0L1bgrf5Lp0G3dPhQHwV0S1lzBsns3sESR8Crh9WAJGjSOKuU3E+zdZQ3oJh8IArdZXFDmOTpHa3i2+YrI2KtKy4ricBsBuHHgFXSo440+Wa2qqxjvM9uMoy+WvzWpLCWWWE28HxL6e43ojgkeSCBY1Ri5BGIUDT51cl3vm276BBqSEH4WbxV0tlkyXJcxTMb+OW6uY9mGHrCzDQwwAbTp2uKuTZ9N1uYsfRRR8WPhrm419mSSjRyiqxVK7y23B/ftuTm2oSdJyzNVw3BFn7vTlbnqF9dS2fu9OVueon11lZuQ2iLdsGFD05H2dNQGV0ntG5Tz1dWm9N1b2kVq8EVwsI2UaQaQOKhmitZGLOmk68DhSFvY+gfWNSAg7z3Qvo7yKCKIohiaNR5LKxx8qpxvjcqS0VpbxvwOAcRQPZ7D0G9Y0uz2HoH1jUCpLY7zXlpbm3eKO5QuzjrBqZji3x17PvNcyT288VvDBJbMWUovS2hslW7mFQ9nsPQPrGl2ew9A+saCod/WNxtbYsrfb17WBxx5ddD2281xC88klvDcSXEnWuzrqOGGC9zRUPZ7D0G9Y0uzWHoH1jQVCLreq6ntZbaO3it1mGy7RjTs1X2mYy20ZiCq8ZOODcdEdmsPQb1jS7PYegfWNdJuLqnQiSUlRqpFLmryxtH1Ma7Qw2gNNPOdSt0oI27p007s9h6B9Y0uz2HoH1jXX3Z+I4+1b8IJdX89xLHKQFMXQUahpxoiPN5P+onfU+A0/s9h6DesaXZ7D0D6xpG7OLbUtu0StW5JJx2bBsmbtiSiEk+cxoCWWSaVpZOk2vDVo0VYdnsPQb1jSNvZcCH1jSd2c+p1XAmFqEOmOPEfaH+BQd1ueo211IzrgFUYKNAAqI1WztCpUqVCRUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoBUqVKgFSpUqAVKlSoD/9k\x3d";
var cc = cc || {}, ClassManager = {id: 0 | 998 * Math.random(), instanceId: 0 | 998 * Math.random(), compileSuper: function (a, b, c) {
    a = a.toString();
    var d = a.indexOf("("), e = a.indexOf(")"), d = a.substring(d + 1, e), d = d.trim(), e = a.indexOf("{"), f = a.lastIndexOf("}");
    for (a = a.substring(e + 1, f); -1 != a.indexOf("this._super");) {
        var e = a.indexOf("this._super"), f = a.indexOf("(", e), g = a.indexOf(")", f), g = a.substring(f + 1, g), g = (g = g.trim()) ? "," : "";
        a = a.substring(0, e) + "ClassManager[" + c + "]." + b + ".call(this" + g + a.substring(f + 1)
    }
    return Function(d, a)
}, getNewID: function () {
    return this.id++
},
    getNewInstanceId: function () {
        return this.instanceId++
    }};
ClassManager.compileSuper.ClassManager = ClassManager;
(function () {
    var a = /\b_super\b/, b = cc.game.config[cc.game.CONFIG_KEY.classReleaseMode];
    b && console.log("release Mode");
    cc.Class = function () {
    };
    cc.Class.extend = function (c) {
        function d() {
            this.__instanceId = ClassManager.getNewInstanceId();
            this.ctor && this.ctor.apply(this, arguments)
        }

        var e = this.prototype, f = Object.create(e), g = ClassManager.getNewID();
        ClassManager[g] = e;
        var h = {writable: !0, enumerable: !1, configurable: !0};
        f.__instanceId = null;
        d.id = g;
        h.value = g;
        Object.defineProperty(f, "__pid", h);
        d.prototype = f;
        h.value = d;
        Object.defineProperty(d.prototype, "constructor", h);
        this.__getters__ && (d.__getters__ = cc.clone(this.__getters__));
        this.__setters__ && (d.__setters__ = cc.clone(this.__setters__));
        for (var k = 0, l = arguments.length; k < l; ++k) {
            var m = arguments[k], n;
            for (n in m) {
                var q = "function" === typeof m[n], r = "function" === typeof e[n], t = a.test(m[n]);
                b && q && r && t ? (h.value = ClassManager.compileSuper(m[n], n, g), Object.defineProperty(f, n, h)) : q && r && t ? (h.value = function (a, b) {
                    return function () {
                        var c = this._super;
                        this._super = e[a];
                        var d = b.apply(this,
                            arguments);
                        this._super = c;
                        return d
                    }
                }(n, m[n]), Object.defineProperty(f, n, h)) : q ? (h.value = m[n], Object.defineProperty(f, n, h)) : f[n] = m[n];
                if (q) {
                    var s, v;
                    if (this.__getters__ && this.__getters__[n]) {
                        var q = this.__getters__[n], u;
                        for (u in this.__setters__)if (this.__setters__[u] == q) {
                            v = u;
                            break
                        }
                        cc.defineGetterSetter(f, q, m[n], m[v] ? m[v] : f[v], n, v)
                    }
                    if (this.__setters__ && this.__setters__[n]) {
                        q = this.__setters__[n];
                        for (u in this.__getters__)if (this.__getters__[u] == q) {
                            s = u;
                            break
                        }
                        cc.defineGetterSetter(f, q, m[s] ? m[s] : f[s], m[n],
                            s, n)
                    }
                }
            }
        }
        d.extend = cc.Class.extend;
        d.implement = function (a) {
            for (var b in a)f[b] = a[b]
        };
        return d
    };
    Function.prototype.bind = Function.prototype.bind || function (a) {
        var b = this;
        return function () {
            var e = Array.prototype.slice.call(arguments);
            return b.apply(a || null, e)
        }
    }
})();
cc.defineGetterSetter = function (a, b, c, d, e, f) {
    if (a.__defineGetter__)c && a.__defineGetter__(b, c), d && a.__defineSetter__(b, d); else if (Object.defineProperty) {
        var g = {enumerable: !1, configurable: !0};
        c && (g.get = c);
        d && (g.set = d);
        Object.defineProperty(a, b, g)
    } else throw Error("browser does not support getters");
    if (!e && !f)for (var g = null != c, h = void 0 != d, k = Object.getOwnPropertyNames(a), l = 0; l < k.length; l++) {
        var m = k[l];
        if (!((a.__lookupGetter__ ? a.__lookupGetter__(m) : Object.getOwnPropertyDescriptor(a, m)) || "function" !== typeof a[m])) {
            var n =
                a[m];
            if (g && n === c && (e = m, !h || f))break;
            if (h && n === d && (f = m, !g || e))break
        }
    }
    a = a.constructor;
    e && (a.__getters__ || (a.__getters__ = {}), a.__getters__[e] = b);
    f && (a.__setters__ || (a.__setters__ = {}), a.__setters__[f] = b)
};
cc.clone = function (a) {
    var b = a.constructor ? new a.constructor : {}, c;
    for (c in a) {
        var d = a[c];
        b[c] = "object" == typeof d && d && !(d instanceof cc.Node) && !(d instanceof HTMLElement) ? cc.clone(d) : d
    }
    return b
};
cc.Point = function (a, b) {
    this.x = a || 0;
    this.y = b || 0
};
cc.p = function (a, b) {
    return void 0 == a ? {x: 0, y: 0} : void 0 == b ? {x: a.x, y: a.y} : {x: a, y: b}
};
cc.pointEqualToPoint = function (a, b) {
    return a && b && a.x === b.x && a.y === b.y
};
cc.Size = function (a, b) {
    this.width = a || 0;
    this.height = b || 0
};
cc.size = function (a, b) {
    return void 0 === a ? {width: 0, height: 0} : void 0 === b ? {width: a.width, height: a.height} : {width: a, height: b}
};
cc.sizeEqualToSize = function (a, b) {
    return a && b && a.width == b.width && a.height == b.height
};
cc.Rect = function (a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.width = c || 0;
    this.height = d || 0
};
cc.rect = function (a, b, c, d) {
    return void 0 === a ? {x: 0, y: 0, width: 0, height: 0} : void 0 === b ? {x: a.x, y: a.y, width: a.width, height: a.height} : {x: a, y: b, width: c, height: d}
};
cc.rectEqualToRect = function (a, b) {
    return a && b && a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
};
cc._rectEqualToZero = function (a) {
    return a && 0 === a.x && 0 === a.y && 0 === a.width && 0 === a.height
};
cc.rectContainsRect = function (a, b) {
    return!a || !b ? !1 : !(a.x >= b.x || a.y >= b.y || a.x + a.width <= b.x + b.width || a.y + a.height <= b.y + b.height)
};
cc.rectGetMaxX = function (a) {
    return a.x + a.width
};
cc.rectGetMidX = function (a) {
    return a.x + a.width / 2
};
cc.rectGetMinX = function (a) {
    return a.x
};
cc.rectGetMaxY = function (a) {
    return a.y + a.height
};
cc.rectGetMidY = function (a) {
    return a.y + a.height / 2
};
cc.rectGetMinY = function (a) {
    return a.y
};
cc.rectContainsPoint = function (a, b) {
    return b.x >= cc.rectGetMinX(a) && b.x <= cc.rectGetMaxX(a) && b.y >= cc.rectGetMinY(a) && b.y <= cc.rectGetMaxY(a)
};
cc.rectIntersectsRect = function (a, b) {
    var c = a.y + a.height, d = b.x + b.width, e = b.y + b.height;
    return!(a.x + a.width < b.x || d < a.x || c < b.y || e < a.y)
};
cc.rectOverlapsRect = function (a, b) {
    return!(a.x + a.width < b.x || b.x + b.width < a.x || a.y + a.height < b.y || b.y + b.height < a.y)
};
cc.rectUnion = function (a, b) {
    var c = cc.rect(0, 0, 0, 0);
    c.x = Math.min(a.x, b.x);
    c.y = Math.min(a.y, b.y);
    c.width = Math.max(a.x + a.width, b.x + b.width) - c.x;
    c.height = Math.max(a.y + a.height, b.y + b.height) - c.y;
    return c
};
cc.rectIntersection = function (a, b) {
    var c = cc.rect(Math.max(cc.rectGetMinX(a), cc.rectGetMinX(b)), Math.max(cc.rectGetMinY(a), cc.rectGetMinY(b)), 0, 0);
    c.width = Math.min(cc.rectGetMaxX(a), cc.rectGetMaxX(b)) - cc.rectGetMinX(c);
    c.height = Math.min(cc.rectGetMaxY(a), cc.rectGetMaxY(b)) - cc.rectGetMinY(c);
    return c
};
cc.visibleRect = {topLeft: cc.p(0, 0), topRight: cc.p(0, 0), top: cc.p(0, 0), bottomLeft: cc.p(0, 0), bottomRight: cc.p(0, 0), bottom: cc.p(0, 0), center: cc.p(0, 0), left: cc.p(0, 0), right: cc.p(0, 0), width: 0, height: 0, init: function (a) {
    var b = this.width = a.width, c = this.height = a.height, d = a.x;
    a = a.y;
    var e = a + c, f = d + b;
    this.topLeft.x = d;
    this.topLeft.y = e;
    this.topRight.x = f;
    this.topRight.y = e;
    this.top.x = d + b / 2;
    this.top.y = e;
    this.bottomLeft.x = d;
    this.bottomLeft.y = a;
    this.bottomRight.x = f;
    this.bottomRight.y = a;
    this.bottom.x = d + b / 2;
    this.bottom.y =
        a;
    this.center.x = d + b / 2;
    this.center.y = a + c / 2;
    this.left.x = d;
    this.left.y = a + c / 2;
    this.right.x = f;
    this.right.y = a + c / 2
}};
cc.SAXParser = cc.Class.extend({_parser: null, _isSupportDOMParser: null, ctor: function () {
    window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
}, parse: function (a) {
    return this._parseXML(a)
}, _parseXML: function (a) {
    var b;
    this._isSupportDOMParser ? b = this._parser.parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a));
    return b
}});
cc.PlistParser = cc.SAXParser.extend({parse: function (a) {
    a = this._parseXML(a).documentElement;
    if ("plist" != a.tagName)throw"Not a plist file!";
    for (var b = null, c = 0, d = a.childNodes.length; c < d && !(b = a.childNodes[c], 1 == b.nodeType); c++);
    return this._parseNode(b)
}, _parseNode: function (a) {
    var b = null, c = a.tagName;
    if ("dict" == c)b = this._parseDict(a); else if ("array" == c)b = this._parseArray(a); else if ("string" == c)if (1 == a.childNodes.length)b = a.firstChild.nodeValue; else {
        b = "";
        for (c = 0; c < a.childNodes.length; c++)b += a.childNodes[c].nodeValue
    } else"false" ==
    c ? b = !1 : "true" == c ? b = !0 : "real" == c ? b = parseFloat(a.firstChild.nodeValue) : "integer" == c && (b = parseInt(a.firstChild.nodeValue, 10));
    return b
}, _parseArray: function (a) {
    for (var b = [], c = 0, d = a.childNodes.length; c < d; c++) {
        var e = a.childNodes[c];
        1 == e.nodeType && b.push(this._parseNode(e))
    }
    return b
}, _parseDict: function (a) {
    for (var b = {}, c = null, d = 0, e = a.childNodes.length; d < e; d++) {
        var f = a.childNodes[d];
        1 == f.nodeType && ("key" == f.tagName ? c = f.firstChild.nodeValue : b[c] = this._parseNode(f))
    }
    return b
}});
cc._txtLoader = {load: function (a, b, c, d) {
    cc.loader.loadTxt(a, d)
}};
cc.loader.register(["txt", "xml", "vsh", "fsh", "atlas"], cc._txtLoader);
cc._jsonLoader = {load: function (a, b, c, d) {
    cc.loader.loadJson(a, d)
}};
cc.loader.register(["json", "ExportJson"], cc._jsonLoader);
cc._imgLoader = {load: function (a, b, c, d) {
    cc.loader.cache[b] = cc.loader.loadImg(a, function (a, c) {
        if (a)return d(a);
        cc.textureCache.handleLoadedTexture(b);
        d(null, c)
    })
}};
cc.loader.register("png jpg bmp jpeg gif ico".split(" "), cc._imgLoader);
cc._serverImgLoader = {load: function (a, b, c, d) {
    cc.loader.cache[b] = cc.loader.loadImg(c.src, function (a, c) {
        if (a)return d(a);
        cc.textureCache.handleLoadedTexture(b);
        d(null, c)
    })
}};
cc.loader.register(["serverImg"], cc._serverImgLoader);
cc._plistLoader = {load: function (a, b, c, d) {
    cc.loader.loadTxt(a, function (a, b) {
        if (a)return d(a);
        d(null, cc.plistParser.parse(b))
    })
}};
cc.loader.register(["plist"], cc._plistLoader);
cc._fontLoader = {TYPE: {".eot": "embedded-opentype", ".ttf": "truetype", ".woff": "woff", ".svg": "svg"}, _loadFont: function (a, b, c) {
    var d = document, e = cc.path, f = this.TYPE, g = cc.newElement("style");
    g.type = "text/css";
    d.body.appendChild(g);
    var h = "@font-face { font-family:" + a + "; src:";
    if (b instanceof Array)for (var k = 0, l = b.length; k < l; k++)c = e.extname(b[k]).toLowerCase(), h += "url('" + b[k] + "') format('" + f[c] + "')", h += k == l - 1 ? ";" : ","; else h += "url('" + b + "') format('" + f[c] + "');";
    g.textContent += h + "};";
    b = cc.newElement("div");
    c =
        b.style;
    c.fontFamily = a;
    b.innerHTML = ".";
    c.position = "absolute";
    c.left = "-100px";
    c.top = "-100px";
    d.body.appendChild(b)
}, load: function (a, b, c, d) {
    b = c.type;
    a = c.name;
    b = c.srcs;
    "string" == typeof c ? (b = cc.path.extname(c), a = cc.path.basename(c, b), this._loadFont(a, c, b)) : this._loadFont(a, b);
    d(null, !0)
}};
cc.loader.register(["font", "eot", "ttf", "woff", "svg"], cc._fontLoader);
cc._binaryLoader = {load: function (a, b, c, d) {
    cc.loader.loadBinary(a, d)
}};
window.CocosEngine = cc.ENGINE_VERSION = "Cocos2d-html5 v3.0 RC0";
cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0;
cc.DIRECTOR_STATS_POSITION = cc.p(0, 0);
cc.DIRECTOR_FPS_INTERVAL = 0.5;
cc.COCOSNODE_RENDER_SUBPIXEL = 1;
cc.SPRITEBATCHNODE_RENDER_SUBPIXEL = 1;
cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0;
cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0;
cc.TEXTURE_ATLAS_USE_VAO = 0;
cc.TEXTURE_NPOT_SUPPORT = 0;
cc.RETINA_DISPLAY_SUPPORT = 1;
cc.RETINA_DISPLAY_FILENAME_SUFFIX = "-hd";
cc.USE_LA88_LABELS = 1;
cc.SPRITE_DEBUG_DRAW = 0;
cc.SPRITEBATCHNODE_DEBUG_DRAW = 0;
cc.LABELBMFONT_DEBUG_DRAW = 0;
cc.LABELATLAS_DEBUG_DRAW = 0;
cc.IS_RETINA_DISPLAY_SUPPORTED = 1;
cc.DEFAULT_ENGINE = cc.ENGINE_VERSION + "-canvas";
cc.ENABLE_STACKABLE_ACTIONS = 1;
cc.ENABLE_GL_STATE_CACHE = 1;
cc.$ = function (a) {
    var b = this == cc ? document : this;
    if (a = a instanceof HTMLElement ? a : b.querySelector(a))a.find = a.find || cc.$, a.hasClass = a.hasClass || function (a) {
        return this.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
    }, a.addClass = a.addClass || function (a) {
        this.hasClass(a) || (this.className && (this.className += " "), this.className += a);
        return this
    }, a.removeClass = a.removeClass || function (a) {
        this.hasClass(a) && (this.className = this.className.replace(a, ""));
        return this
    }, a.remove = a.remove || function () {
        this.parentNode &&
        this.parentNode.removeChild(this);
        return this
    }, a.appendTo = a.appendTo || function (a) {
        a.appendChild(this);
        return this
    }, a.prependTo = a.prependTo || function (a) {
        a.childNodes[0] ? a.insertBefore(this, a.childNodes[0]) : a.appendChild(this);
        return this
    }, a.transforms = a.transforms || function () {
        this.style[cc.$.trans] = cc.$.translate(this.position) + cc.$.rotate(this.rotation) + cc.$.scale(this.scale) + cc.$.skew(this.skew);
        return this
    }, a.position = a.position || {x: 0, y: 0}, a.rotation = a.rotation || 0, a.scale = a.scale || {x: 1, y: 1}, a.skew =
        a.skew || {x: 0, y: 0}, a.translates = function (a, b) {
        this.position.x = a;
        this.position.y = b;
        this.transforms();
        return this
    }, a.rotate = function (a) {
        this.rotation = a;
        this.transforms();
        return this
    }, a.resize = function (a, b) {
        this.scale.x = a;
        this.scale.y = b;
        this.transforms();
        return this
    }, a.setSkew = function (a, b) {
        this.skew.x = a;
        this.skew.y = b;
        this.transforms();
        return this
    };
    return a
};
switch (cc.sys.browserType) {
    case cc.sys.BROWSER_TYPE_FIREFOX:
        cc.$.pfx = "Moz";
        cc.$.hd = !0;
        break;
    case cc.sys.BROWSER_TYPE_CHROME:
    case cc.sys.BROWSER_TYPE_SAFARI:
        cc.$.pfx = "webkit";
        cc.$.hd = !0;
        break;
    case cc.sys.BROWSER_TYPE_OPERA:
        cc.$.pfx = "O";
        cc.$.hd = !1;
        break;
    case cc.sys.BROWSER_TYPE_IE:
        cc.$.pfx = "ms";
        cc.$.hd = !1;
        break;
    default:
        cc.$.pfx = "webkit", cc.$.hd = !0
}
cc.$.trans = cc.$.pfx + "Transform";
cc.$.translate = cc.$.hd ? function (a) {
    return"translate3d(" + a.x + "px, " + a.y + "px, 0) "
} : function (a) {
    return"translate(" + a.x + "px, " + a.y + "px) "
};
cc.$.rotate = cc.$.hd ? function (a) {
    return"rotateZ(" + a + "deg) "
} : function (a) {
    return"rotate(" + a + "deg) "
};
cc.$.scale = function (a) {
    return"scale(" + a.x + ", " + a.y + ") "
};
cc.$.skew = function (a) {
    return"skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
};
cc.$new = function (a) {
    return cc.$(document.createElement(a))
};
cc.$.findpos = function (a) {
    var b = 0, c = 0;
    do b += a.offsetLeft, c += a.offsetTop; while (a = a.offsetParent);
    return{x: b, y: c}
};
cc.INVALID_INDEX = -1;
cc.PI = Math.PI;
cc.FLT_MAX = parseFloat("3.402823466e+38F");
cc.FLT_MIN = parseFloat("1.175494351e-38F");
cc.RAD = cc.PI / 180;
cc.DEG = 180 / cc.PI;
cc.UINT_MAX = 4294967295;
cc.swap = function (a, b, c) {
    if ("object" == typeof c && "undefined" != typeof c.x && "undefined" != typeof c.y) {
        var d = c[a];
        c[a] = c[b];
        c[b] = d
    } else cc.log(cc._LogInfos.swap)
};
cc.lerp = function (a, b, c) {
    return a + (b - a) * c
};
cc.rand = function () {
    return 16777215 * Math.random()
};
cc.randomMinus1To1 = function () {
    return 2 * (Math.random() - 0.5)
};
cc.random0To1 = Math.random;
cc.degreesToRadians = function (a) {
    return a * cc.RAD
};
cc.radiansToDegrees = function (a) {
    return a * cc.DEG
};
cc.radiansToDegress = function (a) {
    cc.log(cc._LogInfos.radiansToDegress);
    return a * cc.DEG
};
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 770;
cc.BLEND_DST = 771;
cc.nodeDrawSetup = function (a) {
    a._shaderProgram && (a._shaderProgram.use(), a._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4())
};
cc.enableDefaultGLStates = function () {
};
cc.disableDefaultGLStates = function () {
};
cc.incrementGLDraws = function (a) {
    cc.g_NumberOfDraws += a
};
cc.FLT_EPSILON = 1.192092896E-7;
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ? function () {
    return cc.director.getContentScaleFactor()
} : function () {
    return 1
};
cc.pointPointsToPixels = function (a) {
    var b = cc.contentScaleFactor();
    return cc.p(a.x * b, a.y * b)
};
cc.pointPixelsToPoints = function (a) {
    var b = cc.contentScaleFactor();
    return cc.p(a.x / b, a.y / b)
};
cc._pointPixelsToPointsOut = function (a, b) {
    var c = cc.contentScaleFactor();
    b.x = a.x / c;
    b.y = a.y / c
};
cc.sizePointsToPixels = function (a) {
    var b = cc.contentScaleFactor();
    return cc.size(a.width * b, a.height * b)
};
cc.sizePixelsToPoints = function (a) {
    var b = cc.contentScaleFactor();
    return cc.size(a.width / b, a.height / b)
};
cc._sizePixelsToPointsOut = function (a, b) {
    var c = cc.contentScaleFactor();
    b.width = a.width / c;
    b.height = a.height / c
};
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (a) {
    var b = cc.contentScaleFactor();
    return cc.rect(a.x / b, a.y / b, a.width / b, a.height / b)
} : function (a) {
    return a
};
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (a) {
    var b = cc.contentScaleFactor();
    return cc.rect(a.x * b, a.y * b, a.width * b, a.height * b)
} : function (a) {
    return a
};
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 770;
cc.SRC_ALPHA_SATURATE = 776;
cc.SRC_COLOR = 768;
cc.DST_ALPHA = 772;
cc.DST_COLOR = 774;
cc.ONE_MINUS_SRC_ALPHA = 771;
cc.ONE_MINUS_SRC_COLOR = 769;
cc.ONE_MINUS_DST_ALPHA = 773;
cc.ONE_MINUS_DST_COLOR = 775;
cc.ONE_MINUS_CONSTANT_ALPHA = 32772;
cc.ONE_MINUS_CONSTANT_COLOR = 32770;
cc.checkGLErrorDebug = function () {
    if (cc.renderMode == cc._RENDER_TYPE_WEBGL) {
        var a = cc._renderContext.getError();
        a && cc.log(CC._localZOrder.checkGLErrorDebug, a)
    }
};
cc.DEVICE_ORIENTATION_PORTRAIT = 0;
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1;
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2;
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3;
cc.DEVICE_MAX_ORIENTATIONS = 2;
cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1;
cc.VERTEX_ATTRIB_FLAG_COLOR = 2;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 4;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
cc.GL_ALL = 0;
cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 3;
cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;
cc.SHADER_POSITION_TEXTURECOLOR = "ShaderPositionTextureColor";
cc.SHADER_POSITION_TEXTURECOLORALPHATEST = "ShaderPositionTextureColorAlphaTest";
cc.SHADER_POSITION_COLOR = "ShaderPositionColor";
cc.SHADER_POSITION_TEXTURE = "ShaderPositionTexture";
cc.SHADER_POSITION_TEXTURE_UCOLOR = "ShaderPositionTexture_uColor";
cc.SHADER_POSITION_TEXTUREA8COLOR = "ShaderPositionTextureA8Color";
cc.SHADER_POSITION_UCOLOR = "ShaderPosition_uColor";
cc.SHADER_POSITION_LENGTHTEXTURECOLOR = "ShaderPositionLengthTextureColor";
cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";
cc.ATTRIBUTE_NAME_COLOR = "a_color";
cc.ATTRIBUTE_NAME_POSITION = "a_position";
cc.ATTRIBUTE_NAME_TEX_COORD = "a_texCoord";
cc.ITEM_SIZE = 32;
cc.CURRENT_ITEM = 3233828865;
cc.ZOOM_ACTION_TAG = 3233828866;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;
cc._tmp.PrototypeColor = function () {
    var a = cc.color;
    a._getWhite = function () {
        return a(255, 255, 255)
    };
    a._getYellow = function () {
        return a(255, 255, 0)
    };
    a._getBlue = function () {
        return a(0, 0, 255)
    };
    a._getGreen = function () {
        return a(0, 255, 0)
    };
    a._getRed = function () {
        return a(255, 0, 0)
    };
    a._getMagenta = function () {
        return a(255, 0, 255)
    };
    a._getBlack = function () {
        return a(0, 0, 0)
    };
    a._getOrange = function () {
        return a(255, 127, 0)
    };
    a._getGray = function () {
        return a(166, 166, 166)
    };
    cc.defineGetterSetter(a, "WHITE", a._getWhite);
    cc.defineGetterSetter(a,
        "YELLOW", a._getYellow);
    cc.defineGetterSetter(a, "BLUE", a._getBlue);
    cc.defineGetterSetter(a, "GREEN", a._getGreen);
    cc.defineGetterSetter(a, "RED", a._getRed);
    cc.defineGetterSetter(a, "MAGENTA", a._getMagenta);
    cc.defineGetterSetter(a, "BLACK", a._getBlack);
    cc.defineGetterSetter(a, "ORANGE", a._getOrange);
    cc.defineGetterSetter(a, "GRAY", a._getGray)
};
cc.Color = function (a, b, c, d) {
    this.r = a || 0;
    this.g = b || 0;
    this.b = c || 0;
    this.a = d || 255
};
cc.color = function (a, b, c, d) {
    return void 0 === a ? {r: 0, g: 0, b: 0, a: 255} : "string" === typeof a ? cc.hexToColor(a) : "object" === typeof a ? {r: a.r, g: a.g, b: a.b, a: a.a || 255} : {r: a, g: b, b: c, a: d || 255}
};
cc.colorEqual = function (a, b) {
    return a.r === b.r && a.g === b.g && a.b === b.b
};
cc.Acceleration = function (a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.timestamp = d || 0
};
cc.Vertex2F = function (a, b) {
    this.x = a || 0;
    this.y = b || 0
};
cc.vertex2 = function (a, b) {
    return new cc.Vertex2F(a, b)
};
cc.Vertex3F = function (a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
};
cc.vertex3 = function (a, b, c) {
    return new cc.Vertex3F(a, b, c)
};
cc.Tex2F = function (a, b) {
    this.u = a || 0;
    this.v = b || 0
};
cc.tex2 = function (a, b) {
    return new cc.Tex2F(a, b)
};
cc.BlendFunc = function (a, b) {
    this.src = a;
    this.dst = b
};
cc.blendFuncDisable = function () {
    return new cc.BlendFunc(cc.ONE, cc.ZERO)
};
cc.hexToColor = function (a) {
    a = a.replace(/^#?/, "0x");
    a = parseInt(a);
    return cc.color(a >> 16, (a >> 8) % 256, a % 256)
};
cc.colorToHex = function (a) {
    var b = a.r.toString(16), c = a.g.toString(16), d = a.b.toString(16);
    return"#" + (16 > a.r ? "0" + b : b) + (16 > a.g ? "0" + c : c) + (16 > a.b ? "0" + d : d)
};
cc.TEXT_ALIGNMENT_LEFT = 0;
cc.TEXT_ALIGNMENT_CENTER = 1;
cc.TEXT_ALIGNMENT_RIGHT = 2;
cc.VERTICAL_TEXT_ALIGNMENT_TOP = 0;
cc.VERTICAL_TEXT_ALIGNMENT_CENTER = 1;
cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM = 2;
cc._Dictionary = cc.Class.extend({_keyMapTb: null, _valueMapTb: null, __currId: 0, ctor: function () {
    this._keyMapTb = {};
    this._valueMapTb = {};
    this.__currId = 2 << (0 | 10 * Math.random())
}, __getKey: function () {
    this.__currId++;
    return"key_" + this.__currId
}, setObject: function (a, b) {
    if (null != b) {
        var c = this.__getKey();
        this._keyMapTb[c] = b;
        this._valueMapTb[c] = a
    }
}, objectForKey: function (a) {
    if (null == a)return null;
    var b = this._keyMapTb, c;
    for (c in b)if (b[c] === a)return this._valueMapTb[c];
    return null
}, valueForKey: function (a) {
    return this.objectForKey(a)
},
    removeObjectForKey: function (a) {
        if (null != a) {
            var b = this._keyMapTb, c;
            for (c in b)if (b[c] === a) {
                delete this._valueMapTb[c];
                delete b[c];
                break
            }
        }
    }, removeObjectsForKeys: function (a) {
        if (null != a)for (var b = 0; b < a.length; b++)this.removeObjectForKey(a[b])
    }, allKeys: function () {
        var a = [], b = this._keyMapTb, c;
        for (c in b)a.push(b[c]);
        return a
    }, removeAllObjects: function () {
        this._keyMapTb = {};
        this._valueMapTb = {}
    }, count: function () {
        return this.allKeys().length
    }});
cc.FontDefinition = function () {
    this.fontName = "Arial";
    this.fontSize = 12;
    this.textAlign = cc.TEXT_ALIGNMENT_CENTER;
    this.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
    this.fillStyle = cc.color(255, 255, 255, 255);
    this.boundingHeight = this.boundingWidth = 0;
    this.strokeEnabled = !1;
    this.strokeStyle = cc.color(255, 255, 255, 255);
    this.lineWidth = 1;
    this.shadowEnabled = !1;
    this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
    this.shadowOpacity = 1
};
cc._renderType === cc._RENDER_TYPE_WEBGL && (cc.assert("function" === typeof cc._tmp.WebGLColor, cc._LogInfos.MissingFile, "CCTypesWebGL.js"), cc._tmp.WebGLColor(), delete cc._tmp.WebGLColor);
cc.assert("function" === typeof cc._tmp.PrototypeColor, cc._LogInfos.MissingFile, "CCTypesPropertyDefine.js");
cc._tmp.PrototypeColor();
delete cc._tmp.PrototypeColor;
cc.Touches = [];
cc.TouchesIntergerDict = {};
cc.EGLView = cc.Class.extend({_delegate: null, _frameSize: null, _designResolutionSize: null, _originalDesignResolutionSize: null, _viewPortRect: null, _visibleRect: null, _retinaEnabled: !1, _autoFullScreen: !0, _devicePixelRatio: 1, _viewName: "", _resizeCallback: null, _scaleX: 1, _originalScaleX: 1, _scaleY: 1, _originalScaleY: 1, _indexBitsUsed: 0, _maxTouches: 5, _resolutionPolicy: null, _rpExactFit: null, _rpShowAll: null, _rpNoBorder: null, _rpFixedHeight: null, _rpFixedWidth: null, _initialized: !1, _captured: !1, _wnd: null, _hDC: null, _hRC: null,
    _supportTouch: !1, _contentTranslateLeftTop: null, _frame: null, _frameZoomFactor: 1, __resizeWithBrowserSize: !1, _isAdjustViewPort: !0, ctor: function () {
        var a = document, b = cc.ContainerStrategy, c = cc.ContentStrategy;
        this._frame = cc.container.parentNode === a.body ? a.documentElement : cc.container.parentNode;
        this._frameSize = cc.size(0, 0);
        this._initFrameSize();
        var a = cc._canvas.width, d = cc._canvas.height;
        this._designResolutionSize = cc.size(a, d);
        this._originalDesignResolutionSize = cc.size(a, d);
        this._viewPortRect = cc.rect(0, 0,
            a, d);
        this._visibleRect = cc.rect(0, 0, a, d);
        this._contentTranslateLeftTop = {left: 0, top: 0};
        this._viewName = "Cocos2dHTML5";
        a = cc.sys;
        this.enableRetina(a.os == a.OS_IOS || a.os == a.OS_OSX);
        cc.visibleRect && cc.visibleRect.init(this._visibleRect);
        this._rpExactFit = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.EXACT_FIT);
        this._rpShowAll = new cc.ResolutionPolicy(b.PROPORTION_TO_FRAME, c.SHOW_ALL);
        this._rpNoBorder = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.NO_BORDER);
        this._rpFixedHeight = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME,
            c.FIXED_HEIGHT);
        this._rpFixedWidth = new cc.ResolutionPolicy(b.EQUAL_TO_FRAME, c.FIXED_WIDTH);
        this._hDC = cc._canvas;
        this._hRC = cc._renderContext
    }, _resizeEvent: function () {
        var a = this._originalDesignResolutionSize.width, b = this._originalDesignResolutionSize.height;
        this._resizeCallback && (this._initFrameSize(), this._resizeCallback.call());
        0 < a && this.setDesignResolutionSize(a, b, this._resolutionPolicy)
    }, resizeWithBrowserSize: function (a) {
        a ? this.__resizeWithBrowserSize || (this.__resizeWithBrowserSize = !0, a = this._resizeEvent.bind(this),
            cc._addEventListener(window, "resize", a, !1)) : this.__resizeWithBrowserSize && (this.__resizeWithBrowserSize = !0, a = this._resizeEvent.bind(this), window.removeEventListener("resize", a, !1))
    }, setResizeCallback: function (a) {
        if ("function" == typeof a || null == a)this._resizeCallback = a
    }, _initFrameSize: function () {
        var a = this._frameSize;
        a.width = this._frame.clientWidth;
        a.height = this._frame.clientHeight
    }, _adjustSizeKeepCanvasSize: function () {
        var a = this._originalDesignResolutionSize.width, b = this._originalDesignResolutionSize.height;
        0 < a && this.setDesignResolutionSize(a, b, this._resolutionPolicy)
    }, _setViewPortMeta: function (a, b) {
        if (this._isAdjustViewPort) {
            var c = {"user-scalable": "no", "maximum-scale": "1.0", "initial-scale": "1.0"}, d = document.getElementsByName("viewport"), e;
            0 == d.length ? (d = cc.newElement("meta"), d.name = "viewport", d.content = "", document.head.appendChild(d)) : d = d[0];
            if (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_FIREFOX)d.content = "initial-scale:1"; else {
                e = d.content;
                for (var f in c)RegExp(f).test(e) || (e += ("" == e ? "" :
                    ",") + f + "\x3d" + c[f]);
                d.content = e
            }
        }
    }, _setScaleXYForRenderTexture: function () {
        var a = cc.contentScaleFactor();
        this._scaleY = this._scaleX = a
    }, _resetScale: function () {
        this._scaleX = this._originalScaleX;
        this._scaleY = this._originalScaleY
    }, _adjustSizeToBrowser: function () {
    }, initialize: function () {
        this._initialized = !0
    }, adjustViewPort: function (a) {
        this._isAdjustViewPort = a
    }, enableRetina: function (a) {
        this._retinaEnabled = a ? !0 : !1
    }, isRetinaEnabled: function () {
        return this._retinaEnabled
    }, enableAutoFullScreen: function (a) {
        this._autoFullScreen =
            a ? !0 : !1
    }, isAutoFullScreenEnabled: function () {
        return this._autoFullScreen
    }, end: function () {
    }, isOpenGLReady: function () {
        return null != this._hDC && null != this._hRC
    }, setFrameZoomFactor: function (a) {
        this._frameZoomFactor = a;
        this.centerWindow();
        cc.director.setProjection(cc.director.getProjection())
    }, swapBuffers: function () {
    }, setIMEKeyboardState: function (a) {
    }, setContentTranslateLeftTop: function (a, b) {
        this._contentTranslateLeftTop = {left: a, top: b}
    }, getContentTranslateLeftTop: function () {
        return this._contentTranslateLeftTop
    },
    getFrameSize: function () {
        return cc.size(this._frameSize.width, this._frameSize.height)
    }, setFrameSize: function (a, b) {
        this._frameSize.width = a;
        this._frameSize.height = b;
        this._frame.style.width = a + "px";
        this._frame.style.height = b + "px";
        this._resizeEvent();
        cc.director.setProjection(cc.director.getProjection())
    }, centerWindow: function () {
    }, getVisibleSize: function () {
        return cc.size(this._visibleRect.width, this._visibleRect.height)
    }, getVisibleOrigin: function () {
        return cc.p(this._visibleRect.x, this._visibleRect.y)
    },
    canSetContentScaleFactor: function () {
        return!0
    }, getResolutionPolicy: function () {
        return this._resolutionPolicy
    }, setResolutionPolicy: function (a) {
        if (a instanceof cc.ResolutionPolicy)this._resolutionPolicy = a; else {
            var b = cc.ResolutionPolicy;
            a === b.EXACT_FIT && (this._resolutionPolicy = this._rpExactFit);
            a === b.SHOW_ALL && (this._resolutionPolicy = this._rpShowAll);
            a === b.NO_BORDER && (this._resolutionPolicy = this._rpNoBorder);
            a === b.FIXED_HEIGHT && (this._resolutionPolicy = this._rpFixedHeight);
            a === b.FIXED_WIDTH && (this._resolutionPolicy =
                this._rpFixedWidth)
        }
    }, setDesignResolutionSize: function (a, b, c) {
        if (isNaN(a) || 0 == a || isNaN(b) || 0 == b)cc.log(cc._LogInfos.EGLView_setDesignResolutionSize); else {
            this.setResolutionPolicy(c);
            var d = this._resolutionPolicy;
            if (d) {
                d.preApply(this);
                var e = this._frameSize.width, f = this._frameSize.height;
                cc.sys.isMobile && this._setViewPortMeta(this._frameSize.width, this._frameSize.height);
                this._initFrameSize();
                c == this._resolutionPolicy && a == this._originalDesignResolutionSize.width && b == this._originalDesignResolutionSize.height &&
                    e == this._frameSize.width && f == this._frameSize.height || (this._designResolutionSize = cc.size(a, b), this._originalDesignResolutionSize = cc.size(a, b), a = d.apply(this, this._designResolutionSize), a.scale && 2 == a.scale.length && (this._scaleX = a.scale[0], this._scaleY = a.scale[1]), a.viewport && (a = this._viewPortRect = a.viewport, b = this._visibleRect, b.width = cc._canvas.width / this._scaleX, b.height = cc._canvas.height / this._scaleY, b.x = -a.x / this._scaleX, b.y = -a.y / this._scaleY), a = cc.director, cc.winSize.width = a._winSizeInPoints.width =
                    this._visibleRect.width, cc.winSize.height = a._winSizeInPoints.height = this._visibleRect.height, d.postApply(this), cc._renderType == cc._RENDER_TYPE_WEBGL && (a._createStatsLabel(), a.setGLDefaultValues()), this._originalScaleX = this._scaleX, this._originalScaleY = this._scaleY, cc.DOM && cc.DOM._resetEGLViewDiv(), cc.visibleRect && cc.visibleRect.init(this._visibleRect))
            } else cc.log(cc._LogInfos.EGLView_setDesignResolutionSize_2)
        }
    }, getDesignResolutionSize: function () {
        return cc.size(this._designResolutionSize.width, this._designResolutionSize.height)
    },
    setViewPortInPoints: function (a, b, c, d) {
        var e = this._frameZoomFactor, f = this._scaleX, g = this._scaleY;
        cc._renderContext.viewport(a * f * e + this._viewPortRect.x * e, b * g * e + this._viewPortRect.y * e, c * f * e, d * g * e)
    }, setScissorInPoints: function (a, b, c, d) {
        var e = this._frameZoomFactor, f = this._scaleX, g = this._scaleY;
        cc._renderContext.scissor(a * f * e + this._viewPortRect.x * e, b * g * e + this._viewPortRect.y * e, c * f * e, d * g * e)
    }, isScissorEnabled: function () {
        var a = cc._renderContext;
        return a.isEnabled(a.SCISSOR_TEST)
    }, getScissorRect: function () {
        var a =
            cc._renderContext, b = this._scaleX, c = this._scaleY, a = a.getParameter(a.SCISSOR_BOX);
        return cc.rect((a[0] - this._viewPortRect.x) / b, (a[1] - this._viewPortRect.y) / c, a[2] / b, a[3] / c)
    }, setViewName: function (a) {
        null != a && 0 < a.length && (this._viewName = a)
    }, getViewName: function () {
        return this._viewName
    }, getViewPortRect: function () {
        return this._viewPortRect
    }, getScaleX: function () {
        return this._scaleX
    }, getScaleY: function () {
        return this._scaleY
    }, getDevicePixelRatio: function () {
        return this._devicePixelRatio
    }, convertToLocationInView: function (a, b, c) {
        return{x: this._devicePixelRatio * (a - c.left), y: this._devicePixelRatio * (c.top + c.height - b)}
    }, _convertMouseToLocationInView: function (a, b) {
        var c = this._viewPortRect;
        a.x = (this._devicePixelRatio * (a.x - b.left) - c.x) / this._scaleX;
        a.y = (this._devicePixelRatio * (b.top + b.height - a.y) - c.y) / this._scaleY
    }, _convertTouchesWithScale: function (a) {
        for (var b = this._viewPortRect, c = this._scaleX, d = this._scaleY, e, f, g, h = 0; h < a.length; h++)e = a[h], f = e._point, g = e._prevPoint, e._setPoint((f.x - b.x) / c, (f.y - b.y) / d), e._setPrevPoint((g.x -
            b.x) / c, (g.y - b.y) / d)
    }});
cc.EGLView._getInstance = function () {
    this._instance || (this._instance = this._instance || new cc.EGLView, this._instance.initialize());
    return this._instance
};
cc.ContainerStrategy = cc.Class.extend({preApply: function (a) {
}, apply: function (a, b) {
}, postApply: function (a) {
}, _setupContainer: function (a, b, c) {
    var d = a._frame;
    cc.view._autoFullScreen && (cc.sys.isMobile && d == document.documentElement) && cc.screen.autoFullScreen(d);
    var d = cc._canvas, e = cc.container;
    e.style.width = d.style.width = b + "px";
    e.style.height = d.style.height = c + "px";
    e = a._devicePixelRatio = 1;
    a.isRetinaEnabled() && (e = a._devicePixelRatio = window.devicePixelRatio || 1);
    d.width = b * e;
    d.height = c * e;
    a = document.body;
    var f;
    if (a && (f = a.style))f.paddingTop = f.paddingTop || "0px", f.paddingRight = f.paddingRight || "0px", f.paddingBottom = f.paddingBottom || "0px", f.paddingLeft = f.paddingLeft || "0px", f.borderTop = f.borderTop || "0px", f.borderRight = f.borderRight || "0px", f.borderBottom = f.borderBottom || "0px", f.borderLeft = f.borderLeft || "0px", f.marginTop = f.marginTop || "0px", f.marginRight = f.marginRight || "0px", f.marginBottom = f.marginBottom || "0px", f.marginLeft = f.marginLeft || "0px"
}, _fixContainer: function () {
    document.body.insertBefore(cc.container, document.body.firstChild);
    var a = document.body.style;
    a.width = window.innerWidth + "px";
    a.height = window.innerHeight + "px";
    a.overflow = "hidden";
    a = cc.container.style;
    a.position = "fixed";
    a.left = a.top = "0px";
    document.body.scrollTop = 0
}});
cc.ContentStrategy = cc.Class.extend({_result: {scale: [1, 1], viewport: null}, _buildResult: function (a, b, c, d, e, f) {
    2 > Math.abs(a - c) && (c = a);
    2 > Math.abs(b - d) && (d = b);
    a = cc.rect(Math.round((a - c) / 2), Math.round((b - d) / 2), c, d);
    cc._renderType == cc._RENDER_TYPE_CANVAS && cc._renderContext.translate(a.x, a.y + d);
    this._result.scale = [e, f];
    this._result.viewport = a;
    return this._result
}, preApply: function (a) {
}, apply: function (a, b) {
    return{scale: [1, 1]}
}, postApply: function (a) {
}});
(function () {
    var a = cc.ContainerStrategy.extend({apply: function (a) {
        this._setupContainer(a, a._frameSize.width, a._frameSize.height)
    }}), b = cc.ContainerStrategy.extend({apply: function (a, b) {
        var c = a._frameSize.width, d = a._frameSize.height, e = cc.container.style, m = b.width, n = b.height, q = c / m, r = d / n, t, s;
        q < r ? (t = c, s = n * q) : (t = m * r, s = d);
        m = Math.round((c - t) / 2);
        s = Math.round((d - s) / 2);
        this._setupContainer(a, c - 2 * m, d - 2 * s);
        e.marginLeft = m + "px";
        e.marginRight = m + "px";
        e.marginTop = s + "px";
        e.marginBottom = s + "px"
    }});
    a.extend({preApply: function (a) {
        this._super(a);
        a._frame = document.documentElement
    }, apply: function (a) {
        this._super(a);
        this._fixContainer()
    }});
    b.extend({preApply: function (a) {
        this._super(a);
        a._frame = document.documentElement
    }, apply: function (a, b) {
        this._super(a, b);
        this._fixContainer()
    }});
    var c = cc.ContainerStrategy.extend({apply: function (a) {
        this._setupContainer(a, cc._canvas.width, cc._canvas.height)
    }});
    cc.ContainerStrategy.EQUAL_TO_FRAME = new a;
    cc.ContainerStrategy.PROPORTION_TO_FRAME = new b;
    cc.ContainerStrategy.ORIGINAL_CONTAINER = new c;
    var a = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height;
        return this._buildResult(c, d, c, d, c / b.width, d / b.height)
    }}), b = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = b.width, m = b.height, n = c / e, q = d / m, r = 0, t, s;
        n < q ? (r = n, t = c, s = m * r) : (r = q, t = e * r, s = d);
        return this._buildResult(c, d, t, s, r, r)
    }}), c = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = b.width, m = b.height, n = c / e, q = d / m, r, t, s;
        n < q ? (r = q, t = e * r, s = d) : (r = n, t = c, s = m * r);
        return this._buildResult(c,
            d, t, s, r, r)
    }}), d = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = d / b.height;
        return this._buildResult(c, d, c, d, e, e)
    }, postApply: function (a) {
        cc.director._winSizeInPoints = a.getVisibleSize()
    }}), e = cc.ContentStrategy.extend({apply: function (a, b) {
        var c = cc._canvas.width, d = cc._canvas.height, e = c / b.width;
        return this._buildResult(c, d, c, d, e, e)
    }, postApply: function (a) {
        cc.director._winSizeInPoints = a.getVisibleSize()
    }});
    cc.ContentStrategy.EXACT_FIT = new a;
    cc.ContentStrategy.SHOW_ALL =
        new b;
    cc.ContentStrategy.NO_BORDER = new c;
    cc.ContentStrategy.FIXED_HEIGHT = new d;
    cc.ContentStrategy.FIXED_WIDTH = new e
})();
cc.ResolutionPolicy = cc.Class.extend({_containerStrategy: null, _contentStrategy: null, ctor: function (a, b) {
    this.setContainerStrategy(a);
    this.setContentStrategy(b)
}, preApply: function (a) {
    this._containerStrategy.preApply(a);
    this._contentStrategy.preApply(a)
}, apply: function (a, b) {
    this._containerStrategy.apply(a, b);
    return this._contentStrategy.apply(a, b)
}, postApply: function (a) {
    this._containerStrategy.postApply(a);
    this._contentStrategy.postApply(a)
}, setContainerStrategy: function (a) {
    a instanceof cc.ContainerStrategy &&
    (this._containerStrategy = a)
}, setContentStrategy: function (a) {
    a instanceof cc.ContentStrategy && (this._contentStrategy = a)
}});
cc.ResolutionPolicy.EXACT_FIT = 0;
cc.ResolutionPolicy.NO_BORDER = 1;
cc.ResolutionPolicy.SHOW_ALL = 2;
cc.ResolutionPolicy.FIXED_HEIGHT = 3;
cc.ResolutionPolicy.FIXED_WIDTH = 4;
cc.ResolutionPolicy.UNKNOWN = 5;
cc.UIInterfaceOrientationLandscapeLeft = -90;
cc.UIInterfaceOrientationLandscapeRight = 90;
cc.UIInterfaceOrientationPortraitUpsideDown = 180;
cc.UIInterfaceOrientationPortrait = 0;
cc.inputManager = {_mousePressed: !1, _isRegisterEvent: !1, _preTouchPoint: cc.p(0, 0), _prevMousePoint: cc.p(0, 0), _preTouchPool: [], _preTouchPoolPointer: 0, _touches: [], _touchesIntegerDict: {}, _indexBitsUsed: 0, _maxTouches: 5, _accelEnabled: !1, _accelInterval: 1 / 30, _accelMinus: 1, _accelCurTime: 0, _acceleration: null, _accelDeviceEvent: null, _getUnUsedIndex: function () {
    for (var a = this._indexBitsUsed, b = 0; b < this._maxTouches; b++) {
        if (!(a & 1))return this._indexBitsUsed |= 1 << b, b;
        a >>= 1
    }
    return-1
}, _removeUsedIndexBit: function (a) {
    0 > a ||
        a >= this._maxTouches || (a = ~(1 << a), this._indexBitsUsed &= a)
}, _glView: null, handleTouchesBegin: function (a) {
    for (var b, c, d, e = [], f = this._touchesIntegerDict, g = 0, h = a.length; g < h; g++)b = a[g], d = b.getID(), c = f[d], null == c && (c = this._getUnUsedIndex(), -1 == c ? cc.log(cc._LogInfos.inputManager_handleTouchesBegin, c) : (b = this._touches[c] = b, f[d] = c, e.push(b)));
    0 < e.length && (this._glView._convertTouchesWithScale(e), a = new cc.EventTouch(e), a._eventCode = cc.EventTouch.EventCode.BEGAN, cc.eventManager.dispatchEvent(a))
}, handleTouchesMove: function (a) {
    for (var b,
             c, d = [], e = this._touches, f = 0, g = a.length; f < g; f++)b = a[f], c = b.getID(), c = this._touchesIntegerDict[c], null != c && e[c] && (e[c]._setPoint(b._point), e[c]._setPrevPoint(b._prevPoint), d.push(e[c]));
    0 < d.length && (this._glView._convertTouchesWithScale(d), a = new cc.EventTouch(d), a._eventCode = cc.EventTouch.EventCode.MOVED, cc.eventManager.dispatchEvent(a))
}, handleTouchesEnd: function (a) {
    a = this.getSetOfTouchesEndOrCancel(a);
    0 < a.length && (this._glView._convertTouchesWithScale(a), a = new cc.EventTouch(a), a._eventCode = cc.EventTouch.EventCode.ENDED,
        cc.eventManager.dispatchEvent(a))
}, handleTouchesCancel: function (a) {
    a = this.getSetOfTouchesEndOrCancel(a);
    0 < a.length && (this._glView._convertTouchesWithScale(a), a = new cc.EventTouch(a), a._eventCode = cc.EventTouch.EventCode.CANCELLED, cc.eventManager.dispatchEvent(a))
}, getSetOfTouchesEndOrCancel: function (a) {
    for (var b, c, d, e = [], f = this._touches, g = this._touchesIntegerDict, h = 0, k = a.length; h < k; h++)b = a[h], d = b.getID(), c = g[d], null != c && f[c] && (f[c]._setPoint(b._point), f[c]._setPrevPoint(b._prevPoint), e.push(f[c]), this._removeUsedIndexBit(c),
        delete g[d]);
    return e
}, getHTMLElementPosition: function (a) {
    var b = document.documentElement, c = window, d = null, d = "function" === typeof a.getBoundingClientRect ? a.getBoundingClientRect() : a instanceof HTMLCanvasElement ? {left: 0, top: 0, width: a.width, height: a.height} : {left: 0, top: 0, width: parseInt(a.style.width), height: parseInt(a.style.height)};
    return{left: d.left + c.pageXOffset - b.clientLeft, top: d.top + c.pageYOffset - b.clientTop, width: d.width, height: d.height}
}, getPreTouch: function (a) {
    for (var b = null, c = this._preTouchPool,
             d = a.getId(), e = c.length - 1; 0 <= e; e--)if (c[e].getId() == d) {
        b = c[e];
        break
    }
    b || (b = a);
    return b
}, setPreTouch: function (a) {
    for (var b = !1, c = this._preTouchPool, d = a.getId(), e = c.length - 1; 0 <= e; e--)if (c[e].getId() == d) {
        c[e] = a;
        b = !0;
        break
    }
    b || (50 >= c.length ? c.push(a) : (c[this._preTouchPoolPointer] = a, this._preTouchPoolPointer = (this._preTouchPoolPointer + 1) % 50))
}, getTouchByXY: function (a, b, c) {
    var d = this._preTouchPoint;
    a = this._glView.convertToLocationInView(a, b, c);
    b = new cc.Touch(a.x, a.y);
    b._setPrevPoint(d.x, d.y);
    d.x = a.x;
    d.y = a.y;
    return b
}, getMouseEvent: function (a, b, c) {
    var d = this._prevMousePoint;
    this._glView._convertMouseToLocationInView(a, b);
    b = new cc.EventMouse(c);
    b.setLocation(a.x, a.y);
    b._setPrevCursor(d.x, d.y);
    d.x = a.x;
    d.y = a.y;
    return b
}, getPointByEvent: function (a, b) {
    if (null != a.pageX)return{x: a.pageX, y: a.pageY};
    b.left -= document.body.scrollLeft;
    b.top -= document.body.scrollTop;
    return{x: a.clientX, y: a.clientY}
}, getTouchesByEvent: function (a, b) {
    for (var c = [], d = this._glView, e, f, g = this._preTouchPoint, h = a.changedTouches.length, k = 0; k <
        h; k++)if (e = a.changedTouches[k]) {
        var l;
        l = cc.sys.BROWSER_TYPE_FIREFOX === cc.sys.browserType ? d.convertToLocationInView(e.pageX, e.pageY, b) : d.convertToLocationInView(e.clientX, e.clientY, b);
        null != e.identifier ? (e = new cc.Touch(l.x, l.y, e.identifier), f = this.getPreTouch(e).getLocation(), e._setPrevPoint(f.x, f.y), this.setPreTouch(e)) : (e = new cc.Touch(l.x, l.y), e._setPrevPoint(g.x, g.y));
        g.x = l.x;
        g.y = l.y;
        c.push(e)
    }
    return c
}, registerSystemEvent: function (a) {
    if (!this._isRegisterEvent) {
        var b = this._glView = cc.view, c = this,
            d = "touches"in cc.sys.capabilities;
        "mouse"in cc.sys.capabilities && (cc._addEventListener(window, "mousedown", function () {
            c._mousePressed = !0
        }, !1), cc._addEventListener(window, "mouseup", function (b) {
                var e = c._mousePressed;
                c._mousePressed = !1;
                if (e) {
                    var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
                    cc.rectContainsPoint(new cc.Rect(e.left, e.top, e.width, e.height), f) || (d || c.handleTouchesEnd([c.getTouchByXY(f.x, f.y, e)]), e = c.getMouseEvent(f, e, cc.EventMouse.UP), e.setButton(b.button), cc.eventManager.dispatchEvent(e))
                }
            },
            !1), cc._addEventListener(a, "mousedown", function (b) {
            c._mousePressed = !0;
            var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
            d || c.handleTouchesBegin([c.getTouchByXY(f.x, f.y, e)]);
            e = c.getMouseEvent(f, e, cc.EventMouse.DOWN);
            e.setButton(b.button);
            cc.eventManager.dispatchEvent(e);
            b.stopPropagation();
            b.preventDefault();
            a.focus()
        }, !1), cc._addEventListener(a, "mouseup", function (b) {
            c._mousePressed = !1;
            var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
            d || c.handleTouchesEnd([c.getTouchByXY(f.x, f.y,
                e)]);
            e = c.getMouseEvent(f, e, cc.EventMouse.UP);
            e.setButton(b.button);
            cc.eventManager.dispatchEvent(e);
            b.stopPropagation();
            b.preventDefault()
        }, !1), cc._addEventListener(a, "mousemove", function (b) {
            var e = c.getHTMLElementPosition(a), f = c.getPointByEvent(b, e);
            d || c.handleTouchesMove([c.getTouchByXY(f.x, f.y, e)]);
            e = c.getMouseEvent(f, e, cc.EventMouse.MOVE);
            c._mousePressed ? e.setButton(b.button) : e.setButton(null);
            cc.eventManager.dispatchEvent(e);
            b.stopPropagation();
            b.preventDefault()
        }, !1), cc._addEventListener(a, "mousewheel",
            function (b) {
                var d = c.getHTMLElementPosition(a), e = c.getPointByEvent(b, d), d = c.getMouseEvent(e, d, cc.EventMouse.SCROLL);
                d.setButton(b.button);
                d.setScrollData(0, b.wheelDelta);
                cc.eventManager.dispatchEvent(d);
                b.stopPropagation();
                b.preventDefault()
            }, !1), cc._addEventListener(a, "DOMMouseScroll", function (b) {
            var d = c.getHTMLElementPosition(a), e = c.getPointByEvent(b, d), d = c.getMouseEvent(e, d, cc.EventMouse.SCROLL);
            d.setButton(b.button);
            d.setScrollData(0, -120 * b.detail);
            cc.eventManager.dispatchEvent(d);
            b.stopPropagation();
            b.preventDefault()
        }, !1));
        if (window.navigator.msPointerEnabled) {
            var e = {MSPointerDown: c.handleTouchesBegin, MSPointerMove: c.handleTouchesMove, MSPointerUp: c.handleTouchesEnd, MSPointerCancel: c.handleTouchesCancel}, f;
            for (f in e)(function (b, d) {
                cc._addEventListener(a, b, function (b) {
                    var e = c.getHTMLElementPosition(a);
                    e.left -= document.documentElement.scrollLeft;
                    e.top -= document.documentElement.scrollTop;
                    d.call(c, [c.getTouchByXY(b.clientX, b.clientY, e)]);
                    b.stopPropagation()
                }, !1)
            })(f, e[f])
        }
        d && (cc._addEventListener(a,
            "touchstart", function (b) {
                if (b.changedTouches) {
                    var d = c.getHTMLElementPosition(a);
                    d.left -= document.body.scrollLeft;
                    d.top -= document.body.scrollTop;
                    c.handleTouchesBegin(c.getTouchesByEvent(b, d));
                    b.stopPropagation();
                    b.preventDefault();
                    a.focus()
                }
            }, !1), cc._addEventListener(a, "touchmove", function (b) {
            if (b.changedTouches) {
                var d = c.getHTMLElementPosition(a);
                d.left -= document.body.scrollLeft;
                d.top -= document.body.scrollTop;
                c.handleTouchesMove(c.getTouchesByEvent(b, d));
                b.stopPropagation();
                b.preventDefault()
            }
        }, !1),
            cc._addEventListener(a, "touchend", function (b) {
                if (b.changedTouches) {
                    var d = c.getHTMLElementPosition(a);
                    d.left -= document.body.scrollLeft;
                    d.top -= document.body.scrollTop;
                    c.handleTouchesEnd(c.getTouchesByEvent(b, d));
                    b.stopPropagation();
                    b.preventDefault()
                }
            }, !1), cc._addEventListener(a, "touchcancel", function (d) {
                if (d.changedTouches) {
                    var e = c.getHTMLElementPosition(a);
                    e.left -= document.body.scrollLeft;
                    e.top -= document.body.scrollTop;
                    b.handleTouchesCancel(c.getTouchesByEvent(d, e));
                    d.stopPropagation();
                    d.preventDefault()
                }
            },
            !1));
        this._registerKeyboardEvent();
        this._registerAccelerometerEvent();
        this._isRegisterEvent = !0
    }
}, _registerKeyboardEvent: function () {
}, _registerAccelerometerEvent: function () {
}, update: function (a) {
    this._accelCurTime > this._accelInterval && (this._accelCurTime -= this._accelInterval, cc.eventManager.dispatchEvent(new cc.EventAcceleration(this._acceleration)));
    this._accelCurTime += a
}};
cc.AffineTransform = function (a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = e;
    this.ty = f
};
cc.AffineTransformMake = function (a, b, c, d, e, f) {
    return{a: a, b: b, c: c, d: d, tx: e, ty: f}
};
cc.PointApplyAffineTransform = function (a, b) {
    return{x: b.a * a.x + b.c * a.y + b.tx, y: b.b * a.x + b.d * a.y + b.ty}
};
cc._PointApplyAffineTransform = function (a, b, c) {
    return{x: c.a * a + c.c * b + c.tx, y: c.b * a + c.d * b + c.ty}
};
cc.SizeApplyAffineTransform = function (a, b) {
    return{width: b.a * a.width + b.c * a.height, height: b.b * a.width + b.d * a.height}
};
cc.AffineTransformMakeIdentity = function () {
    return{a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}
};
cc.AffineTransformIdentity = function () {
    return{a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0}
};
cc.RectApplyAffineTransform = function (a, b) {
    var c = cc.rectGetMinY(a), d = cc.rectGetMinX(a), e = cc.rectGetMaxX(a), f = cc.rectGetMaxY(a), g = cc._PointApplyAffineTransform(d, c, b), c = cc._PointApplyAffineTransform(e, c, b), d = cc._PointApplyAffineTransform(d, f, b), h = cc._PointApplyAffineTransform(e, f, b), e = Math.min(g.x, c.x, d.x, h.x), f = Math.max(g.x, c.x, d.x, h.x), k = Math.min(g.y, c.y, d.y, h.y), g = Math.max(g.y, c.y, d.y, h.y);
    return cc.rect(e, k, f - e, g - k)
};
cc._RectApplyAffineTransformIn = function (a, b) {
    var c = cc.rectGetMinY(a), d = cc.rectGetMinX(a), e = cc.rectGetMaxX(a), f = cc.rectGetMaxY(a), g = cc._PointApplyAffineTransform(d, c, b), c = cc._PointApplyAffineTransform(e, c, b), d = cc._PointApplyAffineTransform(d, f, b), h = cc._PointApplyAffineTransform(e, f, b), e = Math.min(g.x, c.x, d.x, h.x), f = Math.max(g.x, c.x, d.x, h.x), k = Math.min(g.y, c.y, d.y, h.y), g = Math.max(g.y, c.y, d.y, h.y);
    a.x = e;
    a.y = k;
    a.width = f - e;
    a.height = g - k;
    return a
};
cc.AffineTransformTranslate = function (a, b, c) {
    return{a: a.a, b: a.b, c: a.c, d: a.d, tx: a.tx + a.a * b + a.c * c, ty: a.ty + a.b * b + a.d * c}
};
cc.AffineTransformScale = function (a, b, c) {
    return{a: a.a * b, b: a.b * b, c: a.c * c, d: a.d * c, tx: a.tx, ty: a.ty}
};
cc.AffineTransformRotate = function (a, b) {
    var c = Math.sin(b), d = Math.cos(b);
    return{a: a.a * d + a.c * c, b: a.b * d + a.d * c, c: a.c * d - a.a * c, d: a.d * d - a.b * c, tx: a.tx, ty: a.ty}
};
cc.AffineTransformConcat = function (a, b) {
    return{a: a.a * b.a + a.b * b.c, b: a.a * b.b + a.b * b.d, c: a.c * b.a + a.d * b.c, d: a.c * b.b + a.d * b.d, tx: a.tx * b.a + a.ty * b.c + b.tx, ty: a.tx * b.b + a.ty * b.d + b.ty}
};
cc.AffineTransformEqualToTransform = function (a, b) {
    return a.a === b.a && a.b === b.b && a.c === b.c && a.d === b.d && a.tx === b.tx && a.ty === b.ty
};
cc.AffineTransformInvert = function (a) {
    var b = 1 / (a.a * a.d - a.b * a.c);
    return{a: b * a.d, b: -b * a.b, c: -b * a.c, d: b * a.a, tx: b * (a.c * a.ty - a.d * a.tx), ty: b * (a.b * a.tx - a.a * a.ty)}
};
cc.POINT_EPSILON = parseFloat("1.192092896e-07F");
cc.pNeg = function (a) {
    return cc.p(-a.x, -a.y)
};
cc.pAdd = function (a, b) {
    return cc.p(a.x + b.x, a.y + b.y)
};
cc.pSub = function (a, b) {
    return cc.p(a.x - b.x, a.y - b.y)
};
cc.pMult = function (a, b) {
    return cc.p(a.x * b, a.y * b)
};
cc.pMidpoint = function (a, b) {
    return cc.pMult(cc.pAdd(a, b), 0.5)
};
cc.pDot = function (a, b) {
    return a.x * b.x + a.y * b.y
};
cc.pCross = function (a, b) {
    return a.x * b.y - a.y * b.x
};
cc.pPerp = function (a) {
    return cc.p(-a.y, a.x)
};
cc.pRPerp = function (a) {
    return cc.p(a.y, -a.x)
};
cc.pProject = function (a, b) {
    return cc.pMult(b, cc.pDot(a, b) / cc.pDot(b, b))
};
cc.pRotate = function (a, b) {
    return cc.p(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x)
};
cc.pUnrotate = function (a, b) {
    return cc.p(a.x * b.x + a.y * b.y, a.y * b.x - a.x * b.y)
};
cc.pLengthSQ = function (a) {
    return cc.pDot(a, a)
};
cc.pDistanceSQ = function (a, b) {
    return cc.pLengthSQ(cc.pSub(a, b))
};
cc.pLength = function (a) {
    return Math.sqrt(cc.pLengthSQ(a))
};
cc.pDistance = function (a, b) {
    return cc.pLength(cc.pSub(a, b))
};
cc.pNormalize = function (a) {
    return cc.pMult(a, 1 / cc.pLength(a))
};
cc.pForAngle = function (a) {
    return cc.p(Math.cos(a), Math.sin(a))
};
cc.pToAngle = function (a) {
    return Math.atan2(a.y, a.x)
};
cc.clampf = function (a, b, c) {
    if (b > c) {
        var d = b;
        b = c;
        c = d
    }
    return a < b ? b : a < c ? a : c
};
cc.pClamp = function (a, b, c) {
    return cc.p(cc.clampf(a.x, b.x, c.x), cc.clampf(a.y, b.y, c.y))
};
cc.pFromSize = function (a) {
    return cc.p(a.width, a.height)
};
cc.pCompOp = function (a, b) {
    return cc.p(b(a.x), b(a.y))
};
cc.pLerp = function (a, b, c) {
    return cc.pAdd(cc.pMult(a, 1 - c), cc.pMult(b, c))
};
cc.pFuzzyEqual = function (a, b, c) {
    return a.x - c <= b.x && b.x <= a.x + c && a.y - c <= b.y && b.y <= a.y + c ? !0 : !1
};
cc.pCompMult = function (a, b) {
    return cc.p(a.x * b.x, a.y * b.y)
};
cc.pAngleSigned = function (a, b) {
    var c = cc.pNormalize(a), d = cc.pNormalize(b), c = Math.atan2(c.x * d.y - c.y * d.x, cc.pDot(c, d));
    return Math.abs(c) < cc.POINT_EPSILON ? 0 : c
};
cc.pAngle = function (a, b) {
    var c = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    return Math.abs(c) < cc.POINT_EPSILON ? 0 : c
};
cc.pRotateByAngle = function (a, b, c) {
    a = cc.pSub(a, b);
    var d = Math.cos(c);
    c = Math.sin(c);
    var e = a.x;
    a.x = e * d - a.y * c + b.x;
    a.y = e * c + a.y * d + b.y;
    return a
};
cc.pLineIntersect = function (a, b, c, d, e) {
    if (a.x == b.x && a.y == b.y || c.x == d.x && c.y == d.y)return!1;
    var f = b.x - a.x;
    b = b.y - a.y;
    var g = d.x - c.x;
    d = d.y - c.y;
    var h = a.x - c.x;
    a = a.y - c.y;
    c = d * f - g * b;
    e.x = g * a - d * h;
    e.y = f * a - b * h;
    if (0 == c)return 0 == e.x || 0 == e.y ? !0 : !1;
    e.x /= c;
    e.y /= c;
    return!0
};
cc.pSegmentIntersect = function (a, b, c, d) {
    var e = cc.p(0, 0);
    return cc.pLineIntersect(a, b, c, d, e) && 0 <= e.x && 1 >= e.x && 0 <= e.y && 1 >= e.y ? !0 : !1
};
cc.pIntersectPoint = function (a, b, c, d) {
    var e = cc.p(0, 0);
    return cc.pLineIntersect(a, b, c, d, e) ? (c = cc.p(0, 0), c.x = a.x + e.x * (b.x - a.x), c.y = a.y + e.x * (b.y - a.y), c) : cc.p(0, 0)
};
cc.pSameAs = function (a, b) {
    return null != a && null != b ? a.x == b.x && a.y == b.y : !1
};
cc.pZeroIn = function (a) {
    a.x = 0;
    a.y = 0
};
cc.pIn = function (a, b) {
    a.x = b.x;
    a.y = b.y
};
cc.pMultIn = function (a, b) {
    a.x *= b;
    a.y *= b
};
cc.pSubIn = function (a, b) {
    a.x -= b.x;
    a.y -= b.y
};
cc.pAddIn = function (a, b) {
    a.x += b.x;
    a.y += b.y
};
cc.pNormalizeIn = function (a) {
    cc.pMultIn(a, 1 / Math.sqrt(a.x * a.x + a.y * a.y))
};
cc.Touch = cc.Class.extend({_point: null, _prevPoint: null, _id: 0, _startPointCaptured: !1, _startPoint: null, ctor: function (a, b, c) {
    this._point = cc.p(a || 0, b || 0);
    this._id = c || 0
}, getLocation: function () {
    return{x: this._point.x, y: this._point.y}
}, getLocationX: function () {
    return this._point.x
}, getLocationY: function () {
    return this._point.y
}, getPreviousLocation: function () {
    return{x: this._prevPoint.x, y: this._prevPoint.y}
}, getStartLocation: function () {
    return{x: this._startPoint.x, y: this._startPoint.y}
}, getDelta: function () {
    return cc.pSub(this._point,
        this._prevPoint)
}, getLocationInView: function () {
    return{x: this._point.x, y: this._point.y}
}, getPreviousLocationInView: function () {
    return{x: this._prevPoint.x, y: this._prevPoint.y}
}, getStartLocationInView: function () {
    return{x: this._startPoint.x, y: this._startPoint.y}
}, getID: function () {
    return this._id
}, getId: function () {
    return this._id
}, setTouchInfo: function (a, b, c) {
    this._prevPoint = this._point;
    this._point = cc.p(b || 0, c || 0);
    this._id = a;
    this._startPointCaptured || (this._startPoint = cc.p(this._point), this._startPointCaptured = !0)
}, _setPoint: function (a, b) {
    void 0 === b ? (this._point.x = a.x, this._point.y = a.y) : (this._point.x = a, this._point.y = b)
}, _setPrevPoint: function (a, b) {
    this._prevPoint = void 0 === b ? cc.p(a.x, a.y) : cc.p(a || 0, b || 0)
}});
cc.Event = cc.Class.extend({_type: 0, _isStopped: !1, _currentTarget: null, _setCurrentTarget: function (a) {
    this._currentTarget = a
}, ctor: function (a) {
    this._type = a
}, getType: function () {
    return this._type
}, stopPropagation: function () {
    this._isStopped = !0
}, isStopped: function () {
    return this._isStopped
}, getCurrentTarget: function () {
    return this._currentTarget
}});
cc.Event.TOUCH = 0;
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.CUSTOM = 4;
cc.EventCustom = cc.Event.extend({_eventName: null, _userData: null, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.CUSTOM);
    this._eventName = a
}, setUserData: function (a) {
    this._userData = a
}, getUserData: function () {
    return this._userData
}, getEventName: function () {
    return this._eventName
}});
cc.EventMouse = cc.Event.extend({_eventType: 0, _button: 0, _x: 0, _y: 0, _prevX: 0, _prevY: 0, _scrollX: 0, _scrollY: 0, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.MOUSE);
    this._eventType = a
}, setScrollData: function (a, b) {
    this._scrollX = a;
    this._scrollY = b
}, getScrollX: function () {
    return this._scrollX
}, getScrollY: function () {
    return this._scrollY
}, setLocation: function (a, b) {
    this._x = a;
    this._y = b
}, getLocation: function () {
    return{x: this._x, y: this._y}
}, getLocationInView: function () {
    return{x: this._x, y: cc.view._designResolutionSize.height -
        this._y}
}, _setPrevCursor: function (a, b) {
    this._prevX = a;
    this._prevY = b
}, getDelta: function () {
    return{x: this._x - this._prevX, y: this._y - this._prevY}
}, getDeltaX: function () {
    return this._x - this._prevX
}, getDeltaY: function () {
    return this._y - this._prevY
}, setButton: function (a) {
    this._button = a
}, getButton: function () {
    return this._button
}, getLocationX: function () {
    return this._x
}, getLocationY: function () {
    return this._y
}});
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch = cc.Event.extend({_eventCode: 0, _touches: null, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.TOUCH);
    this._touches = a || []
}, getEventCode: function () {
    return this._eventCode
}, getTouches: function () {
    return this._touches
}, _setEventCode: function (a) {
    this._eventCode = a
}, _setTouches: function (a) {
    this._touches = a
}});
cc.EventTouch.MAX_TOUCHES = 5;
cc.EventTouch.EventCode = {BEGAN: 0, MOVED: 1, ENDED: 2, CANCELLED: 3};
cc.EventListener = cc.Class.extend({_onEvent: null, _type: 0, _listenerID: null, _registered: !1, _fixedPriority: 0, _node: null, _paused: !1, _isEnabled: !0, ctor: function (a, b, c) {
    this._onEvent = c;
    this._type = a || 0;
    this._listenerID = b || ""
}, _setPaused: function (a) {
    this._paused = a
}, _isPaused: function () {
    return this._paused
}, _setRegistered: function (a) {
    this._registered = a
}, _isRegistered: function () {
    return this._registered
}, _getType: function () {
    return this._type
}, _getListenerID: function () {
    return this._listenerID
}, _setFixedPriority: function (a) {
    this._fixedPriority =
        a
}, _getFixedPriority: function () {
    return this._fixedPriority
}, _setSceneGraphPriority: function (a) {
    this._node = a
}, _getSceneGraphPriority: function () {
    return this._node
}, checkAvailable: function () {
    return null != this._onEvent
}, clone: function () {
    return null
}, setEnabled: function (a) {
    this._isEnabled = a
}, isEnabled: function () {
    return this._isEnabled
}, retain: function () {
}, release: function () {
}});
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 5;
cc.EventListener.CUSTOM = 6;
cc._EventListenerCustom = cc.EventListener.extend({_onCustomEvent: null, ctor: function (a, b) {
    this._onCustomEvent = b;
    var c = this;
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.CUSTOM, a, function (a) {
        null != c._onCustomEvent && c._onCustomEvent(a)
    })
}, checkAvailable: function () {
    return cc.EventListener.prototype.checkAvailable.call(this) && null != this._onCustomEvent
}, clone: function () {
    return new cc._EventListenerCustom(this._listenerID, this._onCustomEvent)
}});
cc._EventListenerCustom.create = function (a, b) {
    return new cc._EventListenerCustom(a, b)
};
cc._EventListenerMouse = cc.EventListener.extend({onMouseDown: null, onMouseUp: null, onMouseMove: null, onMouseScroll: null, ctor: function () {
    var a = this;
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.MOUSE, cc._EventListenerMouse.LISTENER_ID, function (b) {
        var c = cc.EventMouse;
        switch (b._eventType) {
            case c.DOWN:
                if (a.onMouseDown)a.onMouseDown(b);
                break;
            case c.UP:
                if (a.onMouseUp)a.onMouseUp(b);
                break;
            case c.MOVE:
                if (a.onMouseMove)a.onMouseMove(b);
                break;
            case c.SCROLL:
                if (a.onMouseScroll)a.onMouseScroll(b)
        }
    })
},
    clone: function () {
        var a = new cc._EventListenerMouse;
        a.onMouseDown = this.onMouseDown;
        a.onMouseUp = this.onMouseUp;
        a.onMouseMove = this.onMouseMove;
        a.onMouseScroll = this.onMouseScroll;
        return a
    }, checkAvailable: function () {
        return!0
    }});
cc._EventListenerMouse.LISTENER_ID = "__cc_mouse";
cc._EventListenerMouse.create = function () {
    return new cc._EventListenerMouse
};
cc._EventListenerTouchOneByOne = cc.EventListener.extend({_claimedTouches: null, swallowTouches: !1, onTouchBegan: null, onTouchMoved: null, onTouchEnded: null, onTouchCancelled: null, ctor: function () {
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ONE_BY_ONE, cc._EventListenerTouchOneByOne.LISTENER_ID, null);
    this._claimedTouches = []
}, setSwallowTouches: function (a) {
    this.swallowTouches = a
}, clone: function () {
    var a = new cc._EventListenerTouchOneByOne;
    a.onTouchBegan = this.onTouchBegan;
    a.onTouchMoved = this.onTouchMoved;
    a.onTouchEnded = this.onTouchEnded;
    a.onTouchCancelled = this.onTouchCancelled;
    a.swallowTouches = this.swallowTouches;
    return a
}, checkAvailable: function () {
    return!this.onTouchBegan ? (cc.log(cc._LogInfos._EventListenerTouchOneByOne_checkAvailable), !1) : !0
}});
cc._EventListenerTouchOneByOne.LISTENER_ID = "__cc_touch_one_by_one";
cc._EventListenerTouchOneByOne.create = function () {
    return new cc._EventListenerTouchOneByOne
};
cc._EventListenerTouchAllAtOnce = cc.EventListener.extend({onTouchesBegan: null, onTouchesMoved: null, onTouchesEnded: null, onTouchesCancelled: null, ctor: function () {
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.TOUCH_ALL_AT_ONCE, cc._EventListenerTouchAllAtOnce.LISTENER_ID, null)
}, clone: function () {
    var a = new cc._EventListenerTouchAllAtOnce;
    a.onTouchesBegan = this.onTouchesBegan;
    a.onTouchesMoved = this.onTouchesMoved;
    a.onTouchesEnded = this.onTouchesEnded;
    a.onTouchesCancelled = this.onTouchesCancelled;
    return a
},
    checkAvailable: function () {
        return null == this.onTouchesBegan && null == this.onTouchesMoved && null == this.onTouchesEnded && null == this.onTouchesCancelled ? (cc.log(cc._LogInfos._EventListenerTouchAllAtOnce_checkAvailable), !1) : !0
    }});
cc._EventListenerTouchAllAtOnce.LISTENER_ID = "__cc_touch_all_at_once";
cc._EventListenerTouchAllAtOnce.create = function () {
    return new cc._EventListenerTouchAllAtOnce
};
cc.EventListener.create = function (a) {
    cc.assert(a && a.event, cc._LogInfos.EventListener_create);
    var b = a.event;
    delete a.event;
    var c = null;
    b === cc.EventListener.TOUCH_ONE_BY_ONE ? c = new cc._EventListenerTouchOneByOne : b === cc.EventListener.TOUCH_ALL_AT_ONCE ? c = new cc._EventListenerTouchAllAtOnce : b === cc.EventListener.MOUSE ? c = new cc._EventListenerMouse : b === cc.EventListener.CUSTOM ? (c = new cc._EventListenerCustom(a.eventName, a.callback), delete a.eventName, delete a.callback) : b === cc.EventListener.KEYBOARD ? c = new cc._EventListenerKeyboard :
        b === cc.EventListener.ACCELERATION && (c = new cc._EventListenerAcceleration(a.callback), delete a.callback);
    for (var d in a)c[d] = a[d];
    return c
};
cc.copyArray = function (a) {
    var b, c = a.length, d = Array(c);
    for (b = 0; b < c; b += 1)d[b] = a[b];
    return d
};
cc._EventListenerVector = cc.Class.extend({_fixedListeners: null, _sceneGraphListeners: null, gt0Index: 0, ctor: function () {
    this._fixedListeners = [];
    this._sceneGraphListeners = []
}, size: function () {
    return this._fixedListeners.length + this._sceneGraphListeners.length
}, empty: function () {
    return 0 === this._fixedListeners.length && 0 === this._sceneGraphListeners.length
}, push: function (a) {
    0 == a._getFixedPriority() ? this._sceneGraphListeners.push(a) : this._fixedListeners.push(a)
}, clearSceneGraphListeners: function () {
    this._sceneGraphListeners.length =
        0
}, clearFixedListeners: function () {
    this._fixedListeners.length = 0
}, clear: function () {
    this._sceneGraphListeners.length = 0;
    this._fixedListeners.length = 0
}, getFixedPriorityListeners: function () {
    return this._fixedListeners
}, getSceneGraphPriorityListeners: function () {
    return this._sceneGraphListeners
}});
cc.__getListenerID = function (a) {
    var b = cc.Event, c = a.getType();
    if (c === b.ACCELERATION)return cc._EventListenerAcceleration.LISTENER_ID;
    if (c === b.CUSTOM)return a.getEventName();
    if (c === b.KEYBOARD)return cc._EventListenerKeyboard.LISTENER_ID;
    if (c === b.MOUSE)return cc._EventListenerMouse.LISTENER_ID;
    c === b.TOUCH && cc.log(cc._LogInfos.__getListenerID);
    return""
};
cc.eventManager = {DIRTY_NONE: 0, DIRTY_FIXED_PRIORITY: 1, DIRTY_SCENE_GRAPH_PRIORITY: 2, DIRTY_ALL: 3, _listenersMap: {}, _priorityDirtyFlagMap: {}, _nodeListenersMap: {}, _nodePriorityMap: {}, _globalZOrderNodeMap: {}, _toAddedListeners: [], _dirtyNodes: [], _inDispatch: 0, _isEnabled: !1, _nodePriorityIndex: 0, _internalCustomListenerIDs: [cc.game.EVENT_HIDE, cc.game.EVENT_SHOW], _setDirtyForNode: function (a) {
    null != this._nodeListenersMap[a.__instanceId] && this._dirtyNodes.push(a);
    a = a.getChildren();
    for (var b = 0, c = a.length; b < c; b++)this._setDirtyForNode(a[b])
},
    pauseTarget: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId], d, e;
        if (c) {
            d = 0;
            for (e = c.length; d < e; d++)c[d]._setPaused(!0)
        }
        if (!0 === b) {
            c = a.getChildren();
            d = 0;
            for (e = c.length; d < e; d++)this.pauseTarget(c[d], !0)
        }
    }, resumeTarget: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId], d, e;
        if (c) {
            d = 0;
            for (e = c.length; d < e; d++)c[d]._setPaused(!1)
        }
        this._setDirtyForNode(a);
        if (!0 === b) {
            c = a.getChildren();
            d = 0;
            for (e = c.length; d < e; d++)this.resumeTarget(c[d], !0)
        }
    }, _addListener: function (a) {
        0 === this._inDispatch ? this._forceAddEventListener(a) :
            this._toAddedListeners.push(a)
    }, _forceAddEventListener: function (a) {
        var b = a._getListenerID(), c = this._listenersMap[b];
        c || (c = new cc._EventListenerVector, this._listenersMap[b] = c);
        c.push(a);
        0 == a._getFixedPriority() ? (this._setDirty(b, this.DIRTY_SCENE_GRAPH_PRIORITY), b = a._getSceneGraphPriority(), null == b && cc.log(cc._LogInfos.eventManager__forceAddEventListener), this._associateNodeAndEventListener(b, a), b.isRunning() && this.resumeTarget(b)) : this._setDirty(b, this.DIRTY_FIXED_PRIORITY)
    }, _getListeners: function (a) {
        return this._listenersMap[a]
    },
    _updateDirtyFlagForSceneGraph: function () {
        if (0 != this._dirtyNodes.length) {
            for (var a = this._dirtyNodes, b, c, d = this._nodeListenersMap, e = 0, f = a.length; e < f; e++)if (b = d[a[e].__instanceId])for (var g = 0, h = b.length; g < h; g++)(c = b[g]) && this._setDirty(c._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY);
            this._dirtyNodes.length = 0
        }
    }, _removeAllListenersInVector: function (a) {
        if (a)for (var b, c = 0; c < a.length;)b = a[c], b._setRegistered(!1), null != b._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(b._getSceneGraphPriority(),
            b), b._setSceneGraphPriority(null)), 0 === this._inDispatch ? cc.arrayRemoveObject(a, b) : ++c
    }, _removeListenersForListenerID: function (a) {
        var b = this._listenersMap[a];
        if (b) {
            var c = b.getFixedPriorityListeners(), d = b.getSceneGraphPriorityListeners();
            this._removeAllListenersInVector(d);
            this._removeAllListenersInVector(c);
            delete this._priorityDirtyFlagMap[a];
            this._inDispatch || (b.clear(), delete this._listenersMap[a])
        }
        c = this._toAddedListeners;
        for (b = 0; b < c.length;)(d = c[b]) && d._getListenerID() == a ? cc.arrayRemoveObject(c,
            d) : ++b
    }, _sortEventListeners: function (a) {
        var b = this.DIRTY_NONE, c = this._priorityDirtyFlagMap;
        c[a] && (b = c[a]);
        b != this.DIRTY_NONE && (c[a] = this.DIRTY_NONE, b & this.DIRTY_FIXED_PRIORITY && this._sortListenersOfFixedPriority(a), b & this.DIRTY_SCENE_GRAPH_PRIORITY && ((b = cc.director.getRunningScene()) ? this._sortListenersOfSceneGraphPriority(a, b) : c[a] = this.DIRTY_SCENE_GRAPH_PRIORITY))
    }, _sortListenersOfSceneGraphPriority: function (a, b) {
        var c = this._getListeners(a);
        if (c) {
            var d = c.getSceneGraphPriorityListeners();
            d && 0 !==
                d.length && (this._nodePriorityIndex = 0, this._nodePriorityMap = {}, this._visitTarget(b, !0), c.getSceneGraphPriorityListeners().sort(this._sortEventListenersOfSceneGraphPriorityDes))
        }
    }, _sortEventListenersOfSceneGraphPriorityDes: function (a, b) {
        var c = cc.eventManager._nodePriorityMap;
        return c[b._getSceneGraphPriority().__instanceId] - c[a._getSceneGraphPriority().__instanceId]
    }, _sortListenersOfFixedPriority: function (a) {
        if (a = this._listenersMap[a]) {
            var b = a.getFixedPriorityListeners();
            if (b && 0 !== b.length) {
                b.sort(this._sortListenersOfFixedPriorityAsc);
                for (var c = 0, d = b.length; c < d && !(0 <= b[c]._getFixedPriority());)++c;
                a.gt0Index = c
            }
        }
    }, _sortListenersOfFixedPriorityAsc: function (a, b) {
        return a._getFixedPriority() - b._getFixedPriority()
    }, _onUpdateListeners: function (a) {
        if (a = this._listenersMap[a]) {
            var b = a.getFixedPriorityListeners(), c = a.getSceneGraphPriorityListeners(), d, e;
            if (c)for (d = 0; d < c.length;)e = c[d], e._isRegistered() ? ++d : cc.arrayRemoveObject(c, e);
            if (b)for (d = 0; d < b.length;)e = b[d], e._isRegistered() ? ++d : cc.arrayRemoveObject(b, e);
            c && 0 === c.length && a.clearSceneGraphListeners();
            b && 0 === b.length && a.clearFixedListeners()
        }
    }, _updateListeners: function (a) {
        var b = this._inDispatch;
        cc.assert(0 < b, cc._LogInfos.EventManager__updateListeners);
        a.getType() == cc.Event.TOUCH ? (this._onUpdateListeners(cc._EventListenerTouchOneByOne.LISTENER_ID), this._onUpdateListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID)) : this._onUpdateListeners(cc.__getListenerID(a));
        if (!(1 < b)) {
            cc.assert(1 == b, cc._LogInfos.EventManager__updateListeners_2);
            a = this._listenersMap;
            var b = this._priorityDirtyFlagMap, c;
            for (c in a)a[c].empty() &&
            (delete b[c], delete a[c]);
            c = this._toAddedListeners;
            if (0 !== c.length) {
                a = 0;
                for (b = c.length; a < b; a++)this._forceAddEventListener(c[a]);
                this._toAddedListeners.length = 0
            }
        }
    }, _onTouchEventCallback: function (a, b) {
        if (!a._isRegistered)return!1;
        var c = b.event, d = b.selTouch;
        c._setCurrentTarget(a._node);
        var e = !1, f, g = c.getEventCode(), h = cc.EventTouch.EventCode;
        if (g == h.BEGAN)a.onTouchBegan && (e = a.onTouchBegan(d, c)) && a._registered && a._claimedTouches.push(d); else if (0 < a._claimedTouches.length && -1 != (f = a._claimedTouches.indexOf(d)))if (e = !0, g === h.MOVED && a.onTouchMoved)a.onTouchMoved(d, c); else if (g === h.ENDED) {
            if (a.onTouchEnded)a.onTouchEnded(d, c);
            a._registered && a._claimedTouches.splice(f, 1)
        } else if (g === h.CANCELLED) {
            if (a.onTouchCancelled)a.onTouchCancelled(d, c);
            a._registered && a._claimedTouches.splice(f, 1)
        }
        return c.isStopped() ? (cc.eventManager._updateListeners(c), !0) : e && a._registered && a.swallowTouches ? (b.needsMutableSet && b.touches.splice(d, 1), !0) : !1
    }, _dispatchTouchEvent: function (a) {
        this._sortEventListeners(cc._EventListenerTouchOneByOne.LISTENER_ID);
        this._sortEventListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        var b = this._getListeners(cc._EventListenerTouchOneByOne.LISTENER_ID), c = this._getListeners(cc._EventListenerTouchAllAtOnce.LISTENER_ID);
        if (!(null == b && null == c)) {
            var d = a.getTouches(), e = cc.copyArray(d), f = {event: a, needsMutableSet: b && c, touches: e, selTouch: null};
            if (b)for (var g = 0; g < d.length; g++)if (f.selTouch = d[g], this._dispatchEventToListeners(b, this._onTouchEventCallback, f), a.isStopped())return;
            if (c && 0 < e.length && (this._dispatchEventToListeners(c,
                this._onTouchesEventCallback, {event: a, touches: e}), a.isStopped()))return;
            this._updateListeners(a)
        }
    }, _onTouchesEventCallback: function (a, b) {
        if (!a._registered)return!1;
        var c = cc.EventTouch.EventCode, d = b.event, e = b.touches, f = d.getEventCode();
        d._setCurrentTarget(a._node);
        if (f == c.BEGAN && a.onTouchesBegan)a.onTouchesBegan(e, d); else if (f == c.MOVED && a.onTouchesMoved)a.onTouchesMoved(e, d); else if (f == c.ENDED && a.onTouchesEnded)a.onTouchesEnded(e, d); else if (f == c.CANCELLED && a.onTouchesCancelled)a.onTouchesCancelled(e,
            d);
        return d.isStopped() ? (cc.eventManager._updateListeners(d), !0) : !1
    }, _associateNodeAndEventListener: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId];
        c || (c = [], this._nodeListenersMap[a.__instanceId] = c);
        c.push(b)
    }, _dissociateNodeAndEventListener: function (a, b) {
        var c = this._nodeListenersMap[a.__instanceId];
        c && (cc.arrayRemoveObject(c, b), 0 === c.length && delete this._nodeListenersMap[a.__instanceId])
    }, _dispatchEventToListeners: function (a, b, c) {
        var d = !1, e = a.getFixedPriorityListeners(), f = a.getSceneGraphPriorityListeners(),
            g = 0, h;
        if (e && 0 !== e.length)for (; g < a.gt0Index; ++g)if (h = e[g], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)) {
            d = !0;
            break
        }
        if (f && !d)for (a = 0; a < f.length; a++)if (h = f[a], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)) {
            d = !0;
            break
        }
        if (e && !d)for (; g < e.length && !(h = e[g], h.isEnabled() && !h._isPaused() && h._isRegistered() && b(h, c)); ++g);
    }, _setDirty: function (a, b) {
        var c = this._priorityDirtyFlagMap;
        c[a] = null == c[a] ? b : b | c[a]
    }, _visitTarget: function (a, b) {
        var c = a.getChildren(), d = 0, e = c.length, f = this._globalZOrderNodeMap,
            g = this._nodeListenersMap;
        if (0 < e) {
            for (var h; d < e; d++)if ((h = c[d]) && 0 > h.getLocalZOrder())this._visitTarget(h, !1); else break;
            null != g[a.__instanceId] && (f[a.getGlobalZOrder()] || (f[a.getGlobalZOrder()] = []), f[a.getGlobalZOrder()].push(a.__instanceId));
            for (; d < e; d++)(h = c[d]) && this._visitTarget(h, !1)
        } else null != g[a.__instanceId] && (f[a.getGlobalZOrder()] || (f[a.getGlobalZOrder()] = []), f[a.getGlobalZOrder()].push(a.__instanceId));
        if (b) {
            var c = [], k;
            for (k in f)c.push(k);
            c.sort(this._sortNumberAsc);
            k = c.length;
            h = this._nodePriorityMap;
            for (d = 0; d < k; d++) {
                e = f[c[d]];
                for (g = 0; g < e.length; g++)h[e[g]] = ++this._nodePriorityIndex
            }
            this._globalZOrderNodeMap = {}
        }
    }, _sortNumberAsc: function (a, b) {
        return a - b
    }, addListener: function (a, b) {
        cc.assert(a && b, cc._LogInfos.eventManager_addListener_2);
        if (a instanceof cc.EventListener) {
            if (a._isRegistered()) {
                cc.log(cc._LogInfos.eventManager_addListener_4);
                return
            }
        } else cc.assert("number" !== typeof b, cc._LogInfos.eventManager_addListener_3), a = cc.EventListener.create(a);
        a.checkAvailable() && ("number" == typeof b ? 0 == b ? cc.log(cc._LogInfos.eventManager_addListener) :
            (a._setSceneGraphPriority(null), a._setFixedPriority(b), a._setRegistered(!0), a._setPaused(!1), this._addListener(a)) : (a._setSceneGraphPriority(b), a._setFixedPriority(0), a._setRegistered(!0), this._addListener(a)))
    }, addCustomListener: function (a, b) {
        var c = cc._EventListenerCustom.create(a, b);
        this.addListener(c, 1);
        return c
    }, removeListener: function (a) {
        if (null != a) {
            var b, c = this._listenersMap, d;
            for (d in c) {
                var e = c[d], f = e.getFixedPriorityListeners();
                b = e.getSceneGraphPriorityListeners();
                (b = this._removeListenerInVector(b,
                    a)) ? this._setDirty(a._getListenerID(), this.DIRTY_SCENE_GRAPH_PRIORITY) : (b = this._removeListenerInVector(f, a)) && this._setDirty(a._getListenerID(), this.DIRTY_FIXED_PRIORITY);
                e.empty() && (delete this._priorityDirtyFlagMap[a._getListenerID()], delete c[d]);
                if (b)break
            }
            if (!b) {
                c = this._toAddedListeners;
                d = 0;
                for (e = c.length; d < e; d++)if (f = c[d], f == a) {
                    cc.arrayRemoveObject(c, f);
                    break
                }
            }
        }
    }, _removeListenerInVector: function (a, b) {
        if (null == a)return!1;
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c];
            if (e == b)return e._setRegistered(!1),
                null != e._getSceneGraphPriority() && (this._dissociateNodeAndEventListener(e._getSceneGraphPriority(), e), e._setSceneGraphPriority(null)), 0 == this._inDispatch && cc.arrayRemoveObject(a, e), !0
        }
        return!1
    }, removeListeners: function (a, b) {
        if (a instanceof cc.Node) {
            delete this._nodePriorityMap[a.__instanceId];
            cc.arrayRemoveObject(this._dirtyNodes, a);
            var c = this._nodeListenersMap[a.__instanceId];
            if (c) {
                for (var d = cc.copyArray(c), c = 0; c < d.length; c++)this.removeListener(d[c]);
                d.length = 0;
                d = this._toAddedListeners;
                for (c = 0; c <
                    d.length;) {
                    var e = d[c];
                    e._getSceneGraphPriority() == a ? (e._setSceneGraphPriority(null), e._setRegistered(!1), d.splice(c, 1)) : ++c
                }
                if (!0 === b) {
                    d = a.getChildren();
                    c = 0;
                    for (e = d.length; c < e; c++)this.removeListeners(d[c], !0)
                }
            }
        } else a == cc.EventListener.TOUCH_ONE_BY_ONE ? this._removeListenersForListenerID(cc._EventListenerTouchOneByOne.LISTENER_ID) : a == cc.EventListener.TOUCH_ALL_AT_ONCE ? this._removeListenersForListenerID(cc._EventListenerTouchAllAtOnce.LISTENER_ID) : a == cc.EventListener.MOUSE ? this._removeListenersForListenerID(cc._EventListenerMouse.LISTENER_ID) :
                a == cc.EventListener.ACCELERATION ? this._removeListenersForListenerID(cc._EventListenerAcceleration.LISTENER_ID) : a == cc.EventListener.KEYBOARD ? this._removeListenersForListenerID(cc._EventListenerKeyboard.LISTENER_ID) : cc.log(cc._LogInfos.eventManager_removeListeners)
    }, removeCustomListeners: function (a) {
        this._removeListenersForListenerID(a)
    }, removeAllListeners: function () {
        var a = this._listenersMap, b = this._internalCustomListenerIDs, c;
        for (c in a)-1 === b.indexOf(c) && this._removeListenersForListenerID(c)
    }, setPriority: function (a, b) {
        if (null != a) {
            var c = this._listenersMap, d;
            for (d in c) {
                var e = c[d].getFixedPriorityListeners();
                if (e && -1 != e.indexOf(a)) {
                    null != a._getSceneGraphPriority() && cc.log(cc._LogInfos.eventManager_setPriority);
                    a._getFixedPriority() !== b && (a._setFixedPriority(b), this._setDirty(a._getListenerID(), this.DIRTY_FIXED_PRIORITY));
                    break
                }
            }
        }
    }, setEnabled: function (a) {
        this._isEnabled = a
    }, isEnabled: function () {
        return this._isEnabled
    }, dispatchEvent: function (a) {
        if (this._isEnabled) {
            this._updateDirtyFlagForSceneGraph();
            this._inDispatch++;
            if (!a || !a.getType)throw"event is undefined";
            if (a.getType() == cc.Event.TOUCH)this._dispatchTouchEvent(a); else {
                var b = cc.__getListenerID(a);
                this._sortEventListeners(b);
                b = this._listenersMap[b];
                null != b && this._dispatchEventToListeners(b, this._onListenerCallback, a);
                this._updateListeners(a)
            }
            this._inDispatch--
        }
    }, _onListenerCallback: function (a, b) {
        b._setCurrentTarget(a._getSceneGraphPriority());
        a._onEvent(b);
        return b.isStopped()
    }, dispatchCustomEvent: function (a, b) {
        var c = new cc.EventCustom(a);
        c.setUserData(b);
        this.dispatchEvent(c)
    }};
cc._tmp.PrototypeCCNode = function () {
    var a = cc.Node.prototype;
    cc.defineGetterSetter(a, "x", a.getPositionX, a.setPositionX);
    cc.defineGetterSetter(a, "y", a.getPositionY, a.setPositionY);
    cc.defineGetterSetter(a, "width", a._getWidth, a._setWidth);
    cc.defineGetterSetter(a, "height", a._getHeight, a._setHeight);
    cc.defineGetterSetter(a, "anchorX", a._getAnchorX, a._setAnchorX);
    cc.defineGetterSetter(a, "anchorY", a._getAnchorY, a._setAnchorY);
    cc.defineGetterSetter(a, "skewX", a.getSkewX, a.setSkewX);
    cc.defineGetterSetter(a, "skewY",
        a.getSkewY, a.setSkewY);
    cc.defineGetterSetter(a, "zIndex", a.getLocalZOrder, a.setLocalZOrder);
    cc.defineGetterSetter(a, "vertexZ", a.getVertexZ, a.setVertexZ);
    cc.defineGetterSetter(a, "rotation", a.getRotation, a.setRotation);
    cc.defineGetterSetter(a, "rotationX", a.getRotationX, a.setRotationX);
    cc.defineGetterSetter(a, "rotationY", a.getRotationY, a.setRotationY);
    cc.defineGetterSetter(a, "scale", a.getScale, a.setScale);
    cc.defineGetterSetter(a, "scaleX", a.getScaleX, a.setScaleX);
    cc.defineGetterSetter(a, "scaleY", a.getScaleY,
        a.setScaleY);
    cc.defineGetterSetter(a, "children", a.getChildren);
    cc.defineGetterSetter(a, "childrenCount", a.getChildrenCount);
    cc.defineGetterSetter(a, "parent", a.getParent, a.setParent);
    cc.defineGetterSetter(a, "visible", a.isVisible, a.setVisible);
    cc.defineGetterSetter(a, "running", a.isRunning);
    cc.defineGetterSetter(a, "ignoreAnchor", a.isIgnoreAnchorPointForPosition, a.ignoreAnchorPointForPosition);
    cc.defineGetterSetter(a, "actionManager", a.getActionManager, a.setActionManager);
    cc.defineGetterSetter(a, "scheduler",
        a.getScheduler, a.setScheduler);
    cc.defineGetterSetter(a, "shaderProgram", a.getShaderProgram, a.setShaderProgram);
    cc.defineGetterSetter(a, "glServerState", a.getGLServerState, a.setGLServerState)
};
cc._tmp.PrototypeCCNodeRGBA = function () {
    var a = cc.NodeRGBA.prototype;
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
    cc.defineGetterSetter(a, "cascadeOpacity", a.isCascadeOpacityEnabled, a.setCascadeOpacityEnabled);
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "cascadeColor", a.isCascadeColorEnabled, a.setCascadeColorEnabled)
};
cc.NODE_TAG_INVALID = -1;
cc.s_globalOrderOfArrival = 1;
cc.Node = cc.Class.extend({_localZOrder: 0, _globalZOrder: 0, _vertexZ: 0, _rotationX: 0, _rotationY: 0, _scaleX: 1, _scaleY: 1, _position: null, _skewX: 0, _skewY: 0, _children: null, _visible: !0, _anchorPoint: null, _anchorPointInPoints: null, _contentSize: null, _running: !1, _parent: null, _ignoreAnchorPointForPosition: !1, tag: cc.NODE_TAG_INVALID, userData: null, userObject: null, _transformDirty: !0, _inverseDirty: !0, _cacheDirty: !0, _cachedParent: null, _transformGLDirty: null, _transform: null, _inverse: null, _reorderChildDirty: !1, _shaderProgram: null,
    arrivalOrder: 0, _actionManager: null, _scheduler: null, _eventDispatcher: null, _initializedNode: !1, _additionalTransformDirty: !1, _additionalTransform: null, _componentContainer: null, _isTransitionFinished: !1, _rotationRadiansX: 0, _rotationRadiansY: 0, _className: "Node", _showNode: !1, _name: "", _initNode: function () {
        this._anchorPoint = cc.p(0, 0);
        this._anchorPointInPoints = cc.p(0, 0);
        this._contentSize = cc.size(0, 0);
        this._position = cc.p(0, 0);
        this._children = [];
        this._transform = {a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0};
        var a = cc.director;
        this._actionManager =
            a.getActionManager();
        this._scheduler = a.getScheduler();
        this._initializedNode = !0;
        this._additionalTransform = cc.AffineTransformMakeIdentity();
        cc.ComponentContainer && (this._componentContainer = new cc.ComponentContainer(this))
    }, init: function () {
        !1 === this._initializedNode && this._initNode();
        return!0
    }, _arrayMakeObjectsPerformSelector: function (a, b) {
        if (a && 0 !== a.length) {
            var c, d = a.length, e;
            c = cc.Node.StateCallbackType;
            switch (b) {
                case c.onEnter:
                    for (c = 0; c < d; c++)if (e = a[c])e.onEnter();
                    break;
                case c.onExit:
                    for (c = 0; c < d; c++)if (e =
                        a[c])e.onExit();
                    break;
                case c.onEnterTransitionDidFinish:
                    for (c = 0; c < d; c++)if (e = a[c])e.onEnterTransitionDidFinish();
                    break;
                case c.cleanup:
                    for (c = 0; c < d; c++)(e = a[c]) && e.cleanup();
                    break;
                case c.updateTransform:
                    for (c = 0; c < d; c++)(e = a[c]) && e.updateTransform();
                    break;
                case c.onExitTransitionDidStart:
                    for (c = 0; c < d; c++)if (e = a[c])e.onExitTransitionDidStart();
                    break;
                case c.sortAllChildren:
                    for (c = 0; c < d; c++)(e = a[c]) && e.sortAllChildren();
                    break;
                default:
                    cc.assert(0, cc._LogInfos.Node__arrayMakeObjectsPerformSelector)
            }
        }
    }, setNodeDirty: null,
    attr: function (a) {
        for (var b in a)this[b] = a[b]
    }, getSkewX: function () {
        return this._skewX
    }, setSkewX: function (a) {
        this._skewX = a;
        this.setNodeDirty()
    }, getSkewY: function () {
        return this._skewY
    }, setSkewY: function (a) {
        this._skewY = a;
        this.setNodeDirty()
    }, setLocalZOrder: function (a) {
        this._localZOrder = a;
        this._parent && this._parent.reorderChild(this, a);
        cc.eventManager._setDirtyForNode(this)
    }, _setLocalZOrder: function (a) {
        this._localZOrder = a
    }, getLocalZOrder: function () {
        return this._localZOrder
    }, getZOrder: function () {
        cc.log(cc._LogInfos.Node_getZOrder);
        return this.getLocalZOrder()
    }, setZOrder: function (a) {
        cc.log(cc._LogInfos.Node_setZOrder);
        this.setLocalZOrder(a)
    }, setGlobalZOrder: function (a) {
        this._globalZOrder != a && (this._globalZOrder = a, cc.eventManager._setDirtyForNode(this))
    }, getGlobalZOrder: function () {
        return this._globalZOrder
    }, getVertexZ: function () {
        return this._vertexZ
    }, setVertexZ: function (a) {
        this._vertexZ = a
    }, getRotation: function () {
        this._rotationX !== this._rotationY && cc.log(cc._LogInfos.Node_getRotation);
        return this._rotationX
    }, setRotation: function (a) {
        this._rotationX =
            this._rotationY = a;
        this._rotationRadiansX = 0.017453292519943295 * this._rotationX;
        this._rotationRadiansY = 0.017453292519943295 * this._rotationY;
        this.setNodeDirty()
    }, getRotationX: function () {
        return this._rotationX
    }, setRotationX: function (a) {
        this._rotationX = a;
        this._rotationRadiansX = 0.017453292519943295 * this._rotationX;
        this.setNodeDirty()
    }, getRotationY: function () {
        return this._rotationY
    }, setRotationY: function (a) {
        this._rotationY = a;
        this._rotationRadiansY = 0.017453292519943295 * this._rotationY;
        this.setNodeDirty()
    },
    getScale: function () {
        this._scaleX !== this._scaleY && cc.log(cc._LogInfos.Node_getScale);
        return this._scaleX
    }, setScale: function (a, b) {
        this._scaleX = a;
        this._scaleY = b || 0 === b ? b : a;
        this.setNodeDirty()
    }, getScaleX: function () {
        return this._scaleX
    }, setScaleX: function (a) {
        this._scaleX = a;
        this.setNodeDirty()
    }, getScaleY: function () {
        return this._scaleY
    }, setScaleY: function (a) {
        this._scaleY = a;
        this.setNodeDirty()
    }, setPosition: function (a, b) {
        var c = this._position;
        void 0 === b ? (c.x = a.x, c.y = a.y) : (c.x = a, c.y = b);
        this.setNodeDirty()
    },
    getPosition: function () {
        return cc.p(this._position)
    }, getPositionX: function () {
        return this._position.x
    }, setPositionX: function (a) {
        this._position.x = a;
        this.setNodeDirty()
    }, getPositionY: function () {
        return this._position.y
    }, setPositionY: function (a) {
        this._position.y = a;
        this.setNodeDirty()
    }, getChildrenCount: function () {
        return this._children.length
    }, getChildren: function () {
        return this._children
    }, isVisible: function () {
        return this._visible
    }, setVisible: function (a) {
        this._visible = a;
        this.setNodeDirty()
    }, getAnchorPoint: function () {
        return this._anchorPoint
    },
    setAnchorPoint: function (a, b) {
        var c = this._anchorPoint;
        if (void 0 === b) {
            if (a.x === c.x && a.y === c.y)return;
            c.x = a.x;
            c.y = a.y
        } else {
            if (a === c.x && b === c.y)return;
            c.x = a;
            c.y = b
        }
        var d = this._anchorPointInPoints, e = this._contentSize;
        d.x = e.width * c.x;
        d.y = e.height * c.y;
        this.setNodeDirty()
    }, _getAnchor: function () {
        return this._anchorPoint
    }, _setAnchor: function (a) {
        var b = a.x;
        a = a.y;
        this._anchorPoint.x !== b && (this._anchorPoint.x = b, this._anchorPointInPoints.x = this._contentSize.width * b);
        this._anchorPoint.y !== a && (this._anchorPoint.y =
            a, this._anchorPointInPoints.y = this._contentSize.height * a);
        this.setNodeDirty()
    }, _getAnchorX: function () {
        return this._anchorPoint.x
    }, _setAnchorX: function (a) {
        this._anchorPoint.x !== a && (this._anchorPoint.x = a, this._anchorPointInPoints.x = this._contentSize.width * a, this.setNodeDirty())
    }, _getAnchorY: function () {
        return this._anchorPoint.y
    }, _setAnchorY: function (a) {
        this._anchorPoint.y !== a && (this._anchorPoint.y = a, this._anchorPointInPoints.y = this._contentSize.height * a, this.setNodeDirty())
    }, getAnchorPointInPoints: function () {
        return this._anchorPointInPoints
    },
    _getWidth: function () {
        return this._contentSize.width
    }, _setWidth: function (a) {
        this._contentSize.width = a;
        this._anchorPointInPoints.x = a * this._anchorPoint.x;
        this.setNodeDirty()
    }, _getHeight: function () {
        return this._contentSize.height
    }, _setHeight: function (a) {
        this._contentSize.height = a;
        this._anchorPointInPoints.y = a * this._anchorPoint.y;
        this.setNodeDirty()
    }, getContentSize: function () {
        return this._contentSize
    }, setContentSize: function (a, b) {
        var c = this._contentSize;
        if (void 0 === b) {
            if (a.width === c.width && a.height ===
                c.height)return;
            c.width = a.width;
            c.height = a.height
        } else {
            if (a === c.width && b === c.height)return;
            c.width = a;
            c.height = b
        }
        var d = this._anchorPointInPoints, e = this._anchorPoint;
        d.x = c.width * e.x;
        d.y = c.height * e.y;
        this.setNodeDirty()
    }, isRunning: function () {
        return this._running
    }, getParent: function () {
        return this._parent
    }, setParent: function (a) {
        this._parent = a
    }, isIgnoreAnchorPointForPosition: function () {
        return this._ignoreAnchorPointForPosition
    }, ignoreAnchorPointForPosition: function (a) {
        a != this._ignoreAnchorPointForPosition &&
        (this._ignoreAnchorPointForPosition = a, this.setNodeDirty())
    }, getTag: function () {
        return this.tag
    }, setTag: function (a) {
        this.tag = a
    }, setName: function (a) {
        this._name
    }, getName: function () {
        return this._name
    }, getUserData: function () {
        return this.userData
    }, setUserData: function (a) {
        this.userData = a
    }, getUserObject: function () {
        return this.userObject
    }, setUserObject: function (a) {
        this.userObject != a && (this.userObject = a)
    }, getOrderOfArrival: function () {
        return this.arrivalOrder
    }, setOrderOfArrival: function (a) {
        this.arrivalOrder =
            a
    }, getActionManager: function () {
        this._actionManager || (this._actionManager = cc.director.getActionManager());
        return this._actionManager
    }, setActionManager: function (a) {
        this._actionManager != a && (this.stopAllActions(), this._actionManager = a)
    }, getScheduler: function () {
        this._scheduler || (this._scheduler = cc.director.getScheduler());
        return this._scheduler
    }, setScheduler: function (a) {
        this._scheduler != a && (this.unscheduleAllCallbacks(), this._scheduler = a)
    }, getBoundingBox: function () {
        var a = cc.rect(0, 0, this._contentSize.width,
            this._contentSize.height);
        return cc._RectApplyAffineTransformIn(a, this.nodeToParentTransform())
    }, cleanup: function () {
        this.stopAllActions();
        this.unscheduleAllCallbacks();
        cc.eventManager.removeListeners(this);
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.cleanup)
    }, getChildByTag: function (a) {
        var b = this._children;
        if (null != b)for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if (d && d.tag == a)return d
        }
        return null
    }, getChildByName: function (a) {
        if (!a)return cc.log("Invalid name"), null;
        for (var b =
            this._children, c = 0, d = b.length; c < d; c++)if (b[c]._name == a)return b[c];
        return null
    }, addChild: function (a, b, c) {
        cc.assert(a, cc._LogInfos.Node_addChild_3);
        if (a === this)cc.log(cc._LogInfos.Node_addChild); else if (null !== a._parent)cc.log(cc._LogInfos.Node_addChild_2); else if (b = null != b ? b : a._localZOrder, a.tag = null != c ? c : a.tag, this._insertChild(a, b), a._parent = this, this._cachedParent && (a._cachedParent = this._cachedParent), this._running && (a.onEnter(), this._isTransitionFinished))a.onEnterTransitionDidFinish()
    }, removeFromParent: function (a) {
        this._parent &&
        (null == a && (a = !0), this._parent.removeChild(this, a))
    }, removeFromParentAndCleanup: function (a) {
        cc.log(cc._LogInfos.Node_removeFromParentAndCleanup);
        this.removeFromParent(a)
    }, removeChild: function (a, b) {
        0 !== this._children.length && (null == b && (b = !0), -1 < this._children.indexOf(a) && this._detachChild(a, b), this.setNodeDirty())
    }, removeChildByTag: function (a, b) {
        a === cc.NODE_TAG_INVALID && cc.log(cc._LogInfos.Node_removeChildByTag);
        var c = this.getChildByTag(a);
        null == c ? cc.log(cc._LogInfos.Node_removeChildByTag_2, a) : this.removeChild(c,
            b)
    }, removeAllChildrenWithCleanup: function (a) {
        cc.log(cc._LogInfos.Node_removeAllChildrenWithCleanup);
        this.removeAllChildren(a)
    }, removeAllChildren: function (a) {
        var b = this._children;
        if (null != b) {
            null == a && (a = !0);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d && (this._running && (d.onExitTransitionDidStart(), d.onExit()), a && d.cleanup(), d.parent = null)
            }
            this._children.length = 0
        }
    }, _detachChild: function (a, b) {
        this._running && (a.onExitTransitionDidStart(), a.onExit());
        b && a.cleanup();
        a.parent = null;
        cc.arrayRemoveObject(this._children,
            a)
    }, _insertChild: function (a, b) {
        this._reorderChildDirty = !0;
        this._children.push(a);
        a._setLocalZOrder(b)
    }, reorderChild: function (a, b) {
        cc.assert(a, cc._LogInfos.Node_reorderChild);
        this._reorderChildDirty = !0;
        a.arrivalOrder = cc.s_globalOrderOfArrival;
        cc.s_globalOrderOfArrival++;
        a._setLocalZOrder(b);
        this.setNodeDirty()
    }, sortAllChildren: function () {
        if (this._reorderChildDirty) {
            var a = this._children, b = a.length, c, d, e;
            for (c = 1; c < b; c++) {
                e = a[c];
                for (d = c - 1; 0 <= d;) {
                    if (e._localZOrder < a[d]._localZOrder)a[d + 1] = a[d]; else if (e._localZOrder ===
                        a[d]._localZOrder && e.arrivalOrder < a[d].arrivalOrder)a[d + 1] = a[d]; else break;
                    d--
                }
                a[d + 1] = e
            }
            this._reorderChildDirty = !1
        }
    }, draw: function (a) {
    }, transformAncestors: function () {
        null != this._parent && (this._parent.transformAncestors(), this._parent.transform())
    }, onEnter: function () {
        this._isTransitionFinished = !1;
        this._running = !0;
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onEnter);
        this.resume()
    }, onEnterTransitionDidFinish: function () {
        this._isTransitionFinished = !0;
        this._arrayMakeObjectsPerformSelector(this._children,
            cc.Node.StateCallbackType.onEnterTransitionDidFinish)
    }, onExitTransitionDidStart: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExitTransitionDidStart)
    }, onExit: function () {
        this._running = !1;
        this.pause();
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.onExit);
        this._componentContainer && this._componentContainer.removeAll()
    }, runAction: function (a) {
        cc.assert(a, cc._LogInfos.Node_runAction);
        this.actionManager.addAction(a, this, !this._running);
        return a
    }, stopAllActions: function () {
        this.actionManager && this.actionManager.removeAllActionsFromTarget(this)
    }, stopAction: function (a) {
        this.actionManager.removeAction(a)
    }, stopActionByTag: function (a) {
        a === cc.ACTION_TAG_INVALID ? cc.log(cc._LogInfos.Node_stopActionByTag) : this.actionManager.removeActionByTag(a, this)
    }, getActionByTag: function (a) {
        return a === cc.ACTION_TAG_INVALID ? (cc.log(cc._LogInfos.Node_getActionByTag), null) : this.actionManager.getActionByTag(a, this)
    }, getNumberOfRunningActions: function () {
        return this.actionManager.numberOfRunningActionsInTarget(this)
    },
    scheduleUpdate: function () {
        this.scheduleUpdateWithPriority(0)
    }, scheduleUpdateWithPriority: function (a) {
        this.scheduler.scheduleUpdateForTarget(this, a, !this._running)
    }, unscheduleUpdate: function () {
        this.scheduler.unscheduleUpdateForTarget(this)
    }, schedule: function (a, b, c, d) {
        b = b || 0;
        cc.assert(a, cc._LogInfos.Node_schedule);
        cc.assert(0 <= b, cc._LogInfos.Node_schedule_2);
        c = null == c ? cc.REPEAT_FOREVER : c;
        this.scheduler.scheduleCallbackForTarget(this, a, b, c, d || 0, !this._running)
    }, scheduleOnce: function (a, b) {
        this.schedule(a,
            0, 0, b)
    }, unschedule: function (a) {
        a && this.scheduler.unscheduleCallbackForTarget(this, a)
    }, unscheduleAllCallbacks: function () {
        this.scheduler.unscheduleAllCallbacksForTarget(this)
    }, resumeSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_resumeSchedulerAndActions);
        this.resume()
    }, resume: function () {
        this.scheduler.resumeTarget(this);
        this.actionManager && this.actionManager.resumeTarget(this);
        cc.eventManager.resumeTarget(this)
    }, pauseSchedulerAndActions: function () {
        cc.log(cc._LogInfos.Node_pauseSchedulerAndActions);
        this.pause()
    }, pause: function () {
        this.scheduler.pauseTarget(this);
        this.actionManager && this.actionManager.pauseTarget(this);
        cc.eventManager.pauseTarget(this)
    }, setAdditionalTransform: function (a) {
        this._additionalTransform = a;
        this._additionalTransformDirty = this._transformDirty = !0
    }, parentToNodeTransform: function () {
        this._inverseDirty && (this._inverse = cc.AffineTransformInvert(this.nodeToParentTransform()), this._inverseDirty = !1);
        return this._inverse
    }, nodeToWorldTransform: function () {
        for (var a = this.nodeToParentTransform(),
                 b = this._parent; null != b; b = b.parent)a = cc.AffineTransformConcat(a, b.nodeToParentTransform());
        return a
    }, worldToNodeTransform: function () {
        return cc.AffineTransformInvert(this.nodeToWorldTransform())
    }, convertToNodeSpace: function (a) {
        return cc.PointApplyAffineTransform(a, this.worldToNodeTransform())
    }, convertToWorldSpace: function (a) {
        a = a || cc.p(0, 0);
        return cc.PointApplyAffineTransform(a, this.nodeToWorldTransform())
    }, convertToNodeSpaceAR: function (a) {
        return cc.pSub(this.convertToNodeSpace(a), this._anchorPointInPoints)
    },
    convertToWorldSpaceAR: function (a) {
        a = a || cc.p(0, 0);
        a = cc.pAdd(a, this._anchorPointInPoints);
        return this.convertToWorldSpace(a)
    }, _convertToWindowSpace: function (a) {
        a = this.convertToWorldSpace(a);
        return cc.director.convertToUI(a)
    }, convertTouchToNodeSpace: function (a) {
        a = a.getLocation();
        return this.convertToNodeSpace(a)
    }, convertTouchToNodeSpaceAR: function (a) {
        a = a.getLocation();
        a = cc.director.convertToGL(a);
        return this.convertToNodeSpaceAR(a)
    }, update: function (a) {
        this._componentContainer && !this._componentContainer.isEmpty() &&
        this._componentContainer.visit(a)
    }, updateTransform: function () {
        this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
    }, retain: function () {
    }, release: function () {
    }, getComponent: function (a) {
        return this._componentContainer.getComponent(a)
    }, addComponent: function (a) {
        this._componentContainer.add(a)
    }, removeComponent: function (a) {
        return this._componentContainer.remove(a)
    }, removeAllComponents: function () {
        this._componentContainer.removeAll()
    }, grid: null, ctor: null, visit: null,
    transform: null, nodeToParentTransform: null, _setNodeDirtyForCache: function () {
        if (!1 === this._cacheDirty) {
            this._cacheDirty = !0;
            var a = this._cachedParent;
            a && a != this && a._setNodeDirtyForCache()
        }
    }, _setCachedParent: function (a) {
        if (this._cachedParent != a) {
            this._cachedParent = a;
            for (var b = this._children, c = 0, d = b.length; c < d; c++)b[c]._setCachedParent(a)
        }
    }, getCamera: function () {
        this._camera || (this._camera = new cc.Camera);
        return this._camera
    }, getGrid: function () {
        return this.grid
    }, setGrid: function (a) {
        this.grid = a
    }, getShaderProgram: function () {
        return this._shaderProgram
    },
    setShaderProgram: function (a) {
        this._shaderProgram = a
    }, getGLServerState: function () {
        return this._glServerState
    }, setGLServerState: function (a) {
        this._glServerState = a
    }, getBoundingBoxToWorld: function () {
        var a = cc.rect(0, 0, this._contentSize.width, this._contentSize.height), b = this.nodeToWorldTransform(), a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform());
        if (!this._children)return a;
        for (var c = this._children, d = 0; d < c.length; d++) {
            var e = c[d];
            e && e._visible && (e = e._getBoundingBoxToCurrentNode(b)) && (a = cc.rectUnion(a,
                e))
        }
        return a
    }, _getBoundingBoxToCurrentNode: function (a) {
        var b = cc.rect(0, 0, this._contentSize.width, this._contentSize.height);
        a = null == a ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), a);
        b = cc.RectApplyAffineTransform(b, a);
        if (!this._children)return b;
        for (var c = this._children, d = 0; d < c.length; d++) {
            var e = c[d];
            e && e._visible && (e = e._getBoundingBoxToCurrentNode(a)) && (b = cc.rectUnion(b, e))
        }
        return b
    }, _nodeToParentTransformForWebGL: function () {
        if (this._transformDirty) {
            var a = this._position.x,
                b = this._position.y, c = this._anchorPointInPoints.x, d = -c, e = this._anchorPointInPoints.y, f = -e, g = this._scaleX, h = this._scaleY;
            this._ignoreAnchorPointForPosition && (a += c, b += e);
            var k = 1, l = 0, m = 1, n = 0;
            if (0 !== this._rotationX || 0 !== this._rotationY)k = Math.cos(-this._rotationRadiansX), l = Math.sin(-this._rotationRadiansX), m = Math.cos(-this._rotationRadiansY), n = Math.sin(-this._rotationRadiansY);
            var q = this._skewX || this._skewY;
            if (!q && (0 !== c || 0 !== e))a += m * d * g + -l * f * h, b += n * d * g + k * f * h;
            var r = this._transform;
            r.a = m * g;
            r.b = n * g;
            r.c =
                -l * h;
            r.d = k * h;
            r.tx = a;
            r.ty = b;
            if (q && (r = cc.AffineTransformConcat({a: 1, b: Math.tan(cc.degreesToRadians(this._skewY)), c: Math.tan(cc.degreesToRadians(this._skewX)), d: 1, tx: 0, ty: 0}, r), 0 !== c || 0 !== e))r = cc.AffineTransformTranslate(r, d, f);
            this._additionalTransformDirty && (r = cc.AffineTransformConcat(r, this._additionalTransform), this._additionalTransformDirty = !1);
            this._transform = r;
            this._transformDirty = !1
        }
        return this._transform
    }});
cc.Node.create = function () {
    return new cc.Node
};
cc.Node.StateCallbackType = {onEnter: 1, onExit: 2, cleanup: 3, onEnterTransitionDidFinish: 4, updateTransform: 5, onExitTransitionDidStart: 6, sortAllChildren: 7};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
    var _p = cc.Node.prototype;
    _p.ctor = function () {
        this._initNode()
    };
    _p.setNodeDirty = function () {
        this._setNodeDirtyForCache();
        !1 === this._transformDirty && (this._transformDirty = this._inverseDirty = !0)
    };
    _p.visit = function (a) {
        if (this._visible) {
            a = a || cc._renderContext;
            var b, c = this._children, d;
            a.save();
            this.transform(a);
            var e = c.length;
            if (0 < e) {
                this.sortAllChildren();
                for (b = 0; b < e; b++)if (d = c[b], 0 > d._localZOrder)d.visit(a); else break;
                for (this.draw(a); b < e; b++)c[b].visit(a)
            } else this.draw(a);
            this._cacheDirty = !1;
            this.arrivalOrder = 0;
            a.restore()
        }
    };
    _p.transform = function (a) {
        a = a || cc._renderContext;
        var b = cc.view, c = this.nodeToParentTransform();
        a.transform(c.a, c.c, c.b, c.d, c.tx * b.getScaleX(), -c.ty * b.getScaleY())
    };
    _p.nodeToParentTransform = function () {
        if (this._transformDirty) {
            var a = this._transform;
            a.tx = this._position.x;
            a.ty = this._position.y;
            var b = 1, c = 0;
            this._rotationX && (b = Math.cos(this._rotationRadiansX), c = Math.sin(this._rotationRadiansX));
            a.a = a.d = b;
            a.b = -c;
            a.c = c;
            var d = this._scaleX, e = this._scaleY,
                f = this._anchorPointInPoints.x, g = this._anchorPointInPoints.y, h = 1E-6 > d && -1E-6 < d ? 1E-6 : d, k = 1E-6 > e && -1E-6 < e ? 1E-6 : e;
            if (this._skewX || this._skewY) {
                var l = Math.tan(-this._skewX * Math.PI / 180), m = Math.tan(-this._skewY * Math.PI / 180);
                Infinity === l && (l = 99999999);
                Infinity === m && (m = 99999999);
                var n = g * l * h, q = f * m * k;
                a.a = b + -c * m;
                a.b = b * l + -c;
                a.c = c + b * m;
                a.d = c * l + b;
                a.tx += b * n + -c * q;
                a.ty += c * n + b * q
            }
            if (1 !== d || 1 !== e)a.a *= h, a.c *= h, a.b *= k, a.d *= k;
            a.tx += b * -f * h + -c * g * k;
            a.ty -= c * -f * h + b * g * k;
            this._ignoreAnchorPointForPosition && (a.tx += f, a.ty += g);
            this._additionalTransformDirty &&
            (this._transform = cc.AffineTransformConcat(a, this._additionalTransform), this._additionalTransformDirty = !1);
            this._transformDirty = !1
        }
        return this._transform
    };
    _p = null
} else cc.assert("function" === typeof cc._tmp.WebGLCCNode, cc._LogInfos.MissingFile, "BaseNodesWebGL.js"), cc._tmp.WebGLCCNode(), delete cc._tmp.WebGLCCNode;
cc.assert("function" === typeof cc._tmp.PrototypeCCNode, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNode();
delete cc._tmp.PrototypeCCNode;
cc.NodeRGBA = cc.Node.extend({RGBAProtocol: !0, _displayedOpacity: 255, _realOpacity: 255, _displayedColor: null, _realColor: null, _cascadeColorEnabled: !1, _cascadeOpacityEnabled: !1, ctor: function () {
    cc.Node.prototype.ctor.call(this);
    this._realOpacity = this._displayedOpacity = 255;
    this._displayedColor = cc.color(255, 255, 255, 255);
    this._realColor = cc.color(255, 255, 255, 255);
    this._cascadeOpacityEnabled = this._cascadeColorEnabled = !1
}, _updateColor: function () {
}, getOpacity: function () {
    return this._realOpacity
}, getDisplayedOpacity: function () {
    return this._displayedOpacity
},
    setOpacity: function (a) {
        this._displayedOpacity = this._realOpacity = a;
        var b = 255, c = this._parent;
        c && (c.RGBAProtocol && c.cascadeOpacity) && (b = c.getDisplayedOpacity());
        this.updateDisplayedOpacity(b);
        this._displayedColor.a = this._realColor.a = a
    }, updateDisplayedOpacity: function (a) {
        this._displayedOpacity = this._realOpacity * a / 255;
        if (this._cascadeOpacityEnabled) {
            a = this._children;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                c && c.RGBAProtocol && c.updateDisplayedOpacity(this._displayedOpacity)
            }
        }
    }, isCascadeOpacityEnabled: function () {
        return this._cascadeOpacityEnabled
    },
    setCascadeOpacityEnabled: function (a) {
        this._cascadeOpacityEnabled !== a && ((this._cascadeOpacityEnabled = a) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
    }, _enableCascadeOpacity: function () {
        var a = 255, b = this._parent;
        b && (b.RGBAProtocol && b.cascadeOpacity) && (a = b.getDisplayedOpacity());
        this.updateDisplayedOpacity(a)
    }, _disableCascadeOpacity: function () {
        this._displayedOpacity = this._realOpacity;
        for (var a = this._children, b = 0; b < a.length; b++) {
            var c = a[b];
            c && c.RGBAProtocol && c.updateDisplayedOpacity(255)
        }
    },
    getColor: function () {
        var a = this._realColor;
        return cc.color(a.r, a.g, a.b, a.a)
    }, getDisplayedColor: function () {
        var a = this._displayedColor;
        return cc.color(a.r, a.g, a.b, a.a)
    }, setColor: function (a) {
        var b = this._displayedColor, c = this._realColor;
        b.r = c.r = a.r;
        b.g = c.g = a.g;
        b.b = c.b = a.b;
        b = (b = this._parent) && b.RGBAProtocol && b.cascadeColor ? b.getDisplayedColor() : cc.color.WHITE;
        this.updateDisplayedColor(b);
        void 0 !== a.a && !a.a_undefined && this.setOpacity(a.a)
    }, updateDisplayedColor: function (a) {
        var b = this._displayedColor, c = this._realColor;
        b.r = 0 | c.r * a.r / 255;
        b.g = 0 | c.g * a.g / 255;
        b.b = 0 | c.b * a.b / 255;
        if (this._cascadeColorEnabled) {
            a = this._children;
            for (c = 0; c < a.length; c++) {
                var d = a[c];
                d && d.RGBAProtocol && d.updateDisplayedColor(b)
            }
        }
    }, isCascadeColorEnabled: function () {
        return this._cascadeColorEnabled
    }, setCascadeColorEnabled: function (a) {
        this._cascadeColorEnabled !== a && ((this._cascadeColorEnabled = a) ? this._enableCascadeColor() : this._disableCascadeColor())
    }, _enableCascadeColor: function () {
        var a;
        a = (a = this._parent) && a.RGBAProtocol && a.cascadeColor ? a.getDisplayedColor() :
            cc.color.WHITE;
        this.updateDisplayedColor(a)
    }, _disableCascadeColor: function () {
        var a = this._displayedColor, b = this._realColor;
        a.r = b.r;
        a.g = b.g;
        a.b = b.b;
        for (var a = this._children, b = cc.color.WHITE, c = 0; c < a.length; c++) {
            var d = a[c];
            d && d.RGBAProtocol && d.updateDisplayedColor(b)
        }
    }, addChild: function (a, b, c) {
        cc.Node.prototype.addChild.call(this, a, b, c);
        this._cascadeColorEnabled && this._enableCascadeColor();
        this._cascadeOpacityEnabled && this._enableCascadeOpacity()
    }, setOpacityModifyRGB: function (a) {
    }, isOpacityModifyRGB: function () {
        return!1
    }});
cc.NodeRGBA.create = function () {
    var a = new cc.NodeRGBA;
    a.init();
    return a
};
cc.assert("function" === typeof cc._tmp.PrototypeCCNodeRGBA, cc._LogInfos.MissingFile, "BaseNodesPropertyDefine.js");
cc._tmp.PrototypeCCNodeRGBA();
delete cc._tmp.PrototypeCCNodeRGBA;
cc.Node.ON_ENTER = 0;
cc.Node.ON_EXIT = 1;
cc.Node.ON_ENTER_TRANSITION_DID_FINISH = 2;
cc.Node.ON_EXIT_TRANSITOIN_DID_START = 3;
cc.Node.ON_CLEAN_UP = 4;
cc._tmp.PrototypeTexture2D = function () {
    var a = cc.Texture2D;
    a.PVRImagesHavePremultipliedAlpha = function (a) {
        cc.PVRHaveAlphaPremultiplied_ = a
    };
    a.PIXEL_FORMAT_RGBA8888 = 2;
    a.PIXEL_FORMAT_RGB888 = 3;
    a.PIXEL_FORMAT_RGB565 = 4;
    a.PIXEL_FORMAT_A8 = 5;
    a.PIXEL_FORMAT_I8 = 6;
    a.PIXEL_FORMAT_AI88 = 7;
    a.PIXEL_FORMAT_RGBA4444 = 8;
    a.PIXEL_FORMAT_RGB5A1 = 7;
    a.PIXEL_FORMAT_PVRTC4 = 9;
    a.PIXEL_FORMAT_PVRTC2 = 10;
    a.PIXEL_FORMAT_DEFAULT = a.PIXEL_FORMAT_RGBA8888;
    var b = cc.Texture2D._M = {};
    b[a.PIXEL_FORMAT_RGBA8888] = "RGBA8888";
    b[a.PIXEL_FORMAT_RGB888] =
        "RGB888";
    b[a.PIXEL_FORMAT_RGB565] = "RGB565";
    b[a.PIXEL_FORMAT_A8] = "A8";
    b[a.PIXEL_FORMAT_I8] = "I8";
    b[a.PIXEL_FORMAT_AI88] = "AI88";
    b[a.PIXEL_FORMAT_RGBA4444] = "RGBA4444";
    b[a.PIXEL_FORMAT_RGB5A1] = "RGB5A1";
    b[a.PIXEL_FORMAT_PVRTC4] = "PVRTC4";
    b[a.PIXEL_FORMAT_PVRTC2] = "PVRTC2";
    b = cc.Texture2D._B = {};
    b[a.PIXEL_FORMAT_RGBA8888] = 32;
    b[a.PIXEL_FORMAT_RGB888] = 24;
    b[a.PIXEL_FORMAT_RGB565] = 16;
    b[a.PIXEL_FORMAT_A8] = 8;
    b[a.PIXEL_FORMAT_I8] = 8;
    b[a.PIXEL_FORMAT_AI88] = 16;
    b[a.PIXEL_FORMAT_RGBA4444] = 16;
    b[a.PIXEL_FORMAT_RGB5A1] = 16;
    b[a.PIXEL_FORMAT_PVRTC4] = 4;
    b[a.PIXEL_FORMAT_PVRTC2] = 3;
    b = cc.Texture2D.prototype;
    cc.defineGetterSetter(b, "name", b.getName);
    cc.defineGetterSetter(b, "pixelFormat", b.getPixelFormat);
    cc.defineGetterSetter(b, "pixelsWidth", b.getPixelsWide);
    cc.defineGetterSetter(b, "pixelsHeight", b.getPixelsHigh);
    cc.defineGetterSetter(b, "width", b._getWidth);
    cc.defineGetterSetter(b, "height", b._getHeight);
    a.defaultPixelFormat = a.PIXEL_FORMAT_DEFAULT
};
cc._tmp.PrototypeTextureAtlas = function () {
    var a = cc.TextureAtlas.prototype;
    cc.defineGetterSetter(a, "totalQuads", a.getTotalQuads);
    cc.defineGetterSetter(a, "capacity", a.getCapacity);
    cc.defineGetterSetter(a, "quads", a.getQuads, a.setQuads)
};
cc.ALIGN_CENTER = 51;
cc.ALIGN_TOP = 19;
cc.ALIGN_TOP_RIGHT = 18;
cc.ALIGN_RIGHT = 50;
cc.ALIGN_BOTTOM_RIGHT = 34;
cc.ALIGN_BOTTOM = 35;
cc.ALIGN_BOTTOM_LEFT = 33;
cc.ALIGN_LEFT = 49;
cc.ALIGN_TOP_LEFT = 17;
cc.PVRHaveAlphaPremultiplied_ = !1;
cc._renderType === cc._RENDER_TYPE_CANVAS ? cc.Texture2D = cc.Class.extend({_contentSize: null, _isLoaded: !1, _htmlElementObj: null, _loadedEventListeners: null, url: null, ctor: function () {
    this._contentSize = cc.size(0, 0);
    this._isLoaded = !1;
    this._htmlElementObj = null
}, getPixelsWide: function () {
    return this._contentSize.width
}, getPixelsHigh: function () {
    return this._contentSize.height
}, getContentSize: function () {
    var a = cc.contentScaleFactor();
    return cc.size(this._contentSize.width / a, this._contentSize.height / a)
}, _getWidth: function () {
    return this._contentSize.width /
        cc.contentScaleFactor()
}, _getHeight: function () {
    return this._contentSize.height / cc.contentScaleFactor()
}, getContentSizeInPixels: function () {
    return this._contentSize
}, initWithElement: function (a) {
    a && (this._htmlElementObj = a)
}, getHtmlElementObj: function () {
    return this._htmlElementObj
}, isLoaded: function () {
    return this._isLoaded
}, handleLoadedTexture: function () {
    if (!this._isLoaded) {
        if (!this._htmlElementObj) {
            var a = cc.loader.getRes(this.url);
            if (!a)return;
            this.initWithElement(a)
        }
        this._isLoaded = !0;
        a = this._htmlElementObj;
        this._contentSize.width = a.width;
        this._contentSize.height = a.height;
        this._callLoadedEventCallbacks()
    }
}, description: function () {
    return"\x3ccc.Texture2D | width \x3d " + this._contentSize.width + " height " + this._contentSize.height + "\x3e"
}, initWithData: function (a, b, c, d, e) {
    return!1
}, initWithImage: function (a) {
    return!1
}, initWithString: function (a, b, c, d, e, f) {
    return!1
}, releaseTexture: function () {
}, getName: function () {
    return null
}, getMaxS: function () {
    return 1
}, setMaxS: function (a) {
}, getMaxT: function () {
    return 1
}, setMaxT: function (a) {
},
    getPixelFormat: function () {
        return null
    }, getShaderProgram: function () {
        return null
    }, setShaderProgram: function (a) {
    }, hasPremultipliedAlpha: function () {
        return!1
    }, hasMipmaps: function () {
        return!1
    }, releaseData: function (a) {
    }, keepData: function (a, b) {
        return a
    }, drawAtPoint: function (a) {
    }, drawInRect: function (a) {
    }, initWithETCFile: function (a) {
        cc.log(cc._LogInfos.Texture2D_initWithETCFile);
        return!1
    }, initWithPVRFile: function (a) {
        cc.log(cc._LogInfos.Texture2D_initWithPVRFile);
        return!1
    }, initWithPVRTCData: function (a, b, c, d, e, f) {
        cc.log(cc._LogInfos.Texture2D_initWithPVRTCData);
        return!1
    }, setTexParameters: function (a) {
    }, setAntiAliasTexParameters: function () {
    }, setAliasTexParameters: function () {
    }, generateMipmap: function () {
    }, stringForFormat: function () {
        return""
    }, bitsPerPixelForFormat: function (a) {
        return-1
    }, addLoadedEventListener: function (a, b) {
        this._loadedEventListeners || (this._loadedEventListeners = []);
        this._loadedEventListeners.push({eventCallback: a, eventTarget: b})
    }, removeLoadedEventListener: function (a) {
        if (this._loadedEventListeners)for (var b =
            this._loadedEventListeners, c = 0; c < b.length; c++)b[c].eventTarget == a && b.splice(c, 1)
    }, _callLoadedEventCallbacks: function () {
        if (this._loadedEventListeners) {
            for (var a = this._loadedEventListeners, b = 0, c = a.length; b < c; b++) {
                var d = a[b];
                d.eventCallback.call(d.eventTarget, this)
            }
            a.length = 0
        }
    }}) : (cc.assert("function" === typeof cc._tmp.WebGLTexture2D, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTexture2D(), delete cc._tmp.WebGLTexture2D);
cc.assert("function" === typeof cc._tmp.PrototypeTexture2D, cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
cc._tmp.PrototypeTexture2D();
delete cc._tmp.PrototypeTexture2D;
cc.textureCache = {_textures: {}, _textureColorsCache: {}, _textureKeySeq: 0 | 1E3 * Math.random(), _loadedTexturesBefore: {}, _initializingRenderer: function () {
    var a, b = this._loadedTexturesBefore, c = this._textures;
    for (a in b) {
        var d = b[a];
        d.handleLoadedTexture();
        c[a] = d
    }
    this._loadedTexturesBefore = {}
}, addPVRTCImage: function (a) {
    cc.log(cc._LogInfos.textureCache_addPVRTCImage)
}, addETCImage: function (a) {
    cc.log(cc._LogInfos.textureCache_addETCImage)
}, description: function () {
    return"\x3cTextureCache | Number of textures \x3d " +
        this._textures.length + "\x3e"
}, textureForKey: function (a) {
    return this._textures[a] || this._textures[cc.loader._aliases[a]]
}, getKeyByTexture: function (a) {
    for (var b in this._textures)if (this._textures[b] == a)return b;
    return null
}, _generalTextureKey: function () {
    this._textureKeySeq++;
    return"_textureKey_" + this._textureKeySeq
}, getTextureColors: function (a) {
    var b = this.getKeyByTexture(a);
    b || (b = a instanceof HTMLImageElement ? a.src : this._generalTextureKey());
    this._textureColorsCache[b] || (this._textureColorsCache[b] =
        cc.generateTextureCacheForColor(a));
    return this._textureColorsCache[b]
}, addPVRImage: function (a) {
    cc.log(cc._LogInfos.textureCache_addPVRImage)
}, removeAllTextures: function () {
    var a = this._textures, b;
    for (b in a)a[b] && a[b].releaseTexture();
    this._textures = {}
}, removeTexture: function (a) {
    if (a) {
        var b = this._textures, c;
        for (c in b)b[c] == a && (b[c].releaseTexture(), delete b[c])
    }
}, removeTextureForKey: function (a) {
    null != a && this._textures[a] && delete this._textures[a]
}, cacheImage: function (a, b) {
    if (b instanceof cc.Texture2D)this._textures[a] =
        b; else {
        var c = new cc.Texture2D;
        c.initWithElement(b);
        c.handleLoadedTexture();
        this._textures[a] = c
    }
}, addUIImage: function (a, b) {
    cc.assert(a, cc._LogInfos.textureCache_addUIImage_2);
    if (b && this._textures[b])return this._textures[b];
    var c = new cc.Texture2D;
    c.initWithImage(a);
    null != b && null != c ? this._textures[b] = c : cc.log(cc._LogInfos.textureCache_addUIImage);
    return c
}, dumpCachedTextureInfo: function () {
    var a = 0, b = 0, c = this._textures, d;
    for (d in c) {
        var e = c[d];
        a++;
        e.getHtmlElementObj()instanceof HTMLImageElement ? cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo,
            d, e.getHtmlElementObj().src, e.pixelsWidth, e.pixelsHeight) : cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, d, e.pixelsWidth, e.pixelsHeight);
        b += 4 * e.pixelsWidth * e.pixelsHeight
    }
    c = this._textureColorsCache;
    for (d in c) {
        var e = c[d], f;
        for (f in e) {
            var g = e[f];
            a++;
            cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_2, d, g.width, g.height);
            b += 4 * g.width * g.height
        }
    }
    cc.log(cc._LogInfos.textureCache_dumpCachedTextureInfo_3, a, b / 1024, (b / 1048576).toFixed(2))
}, _clear: function () {
    this._textures = {};
    this._textureColorsCache =
    {};
    this._textureKeySeq = 0 | 1E3 * Math.random();
    this._loadedTexturesBefore = {}
}};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.textureCache, _p.handleLoadedTexture = function (a) {
    var b = this._textures, c = b[a];
    c || (c = b[a] = new cc.Texture2D, c.url = a);
    c.handleLoadedTexture()
}, _p.addImage = function (a, b, c) {
    cc.assert(a, cc._LogInfos.Texture2D_addImage);
    var d = this._textures, e = d[a] || d[cc.loader._aliases[a]];
    if (e)return b && b.call(c), e;
    e = d[a] = new cc.Texture2D;
    e.url = a;
    cc.loader.getRes(a) ? e.handleLoadedTexture() : cc.loader._checkIsImageURL(a) ? cc.loader.load(a, function (a) {
        b && b.call(c)
    }) : cc.loader.cache[a] =
        cc.loader.loadImg(a, function (c, d) {
            if (c)return b ? b(c) : c;
            cc.textureCache.handleLoadedTexture(a);
            b && b(null, d)
        });
    return e
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLTextureCache, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTextureCache(), delete cc._tmp.WebGLTextureCache);
cc.Scene = cc.Node.extend({_className: "Scene", ctor: function () {
    cc.Node.prototype.ctor.call(this);
    this._ignoreAnchorPointForPosition = !0;
    this.setAnchorPoint(0.5, 0.5);
    this.setContentSize(cc.director.getWinSize())
}});
cc.Scene.create = function () {
    return new cc.Scene
};
cc.LoaderScene = cc.Scene.extend({_interval: null, _length: 0, _count: 0, _label: null, _className: "LoaderScene", init: function () {
    var a = this, b = 200, c = a._bgLayer = cc.LayerColor.create(cc.color(255, 255, 255, 255));
    c.setPosition(cc.visibleRect.bottomLeft);
    a.addChild(c, 0);
    var d = 24, e = -b / 2 + 100;
    cc._loaderImage && (cc.loader.loadImg(cc._loaderImage, {isCrossOrigin: !1}, function (c, d) {
        b = d.height;
        a._initStage(d, cc.visibleRect.center)
    }), d = 14, e = -b / 2 - 10);
    d = a._label = cc.LabelTTF.create("Loading... 0%", "Arial", d);
    d.setPosition(cc.pAdd(cc.visibleRect.center,
        cc.p(0, e)));
    d.setColor(cc.color(180, 180, 180));
    c.addChild(this._label, 10);
    return!0
}, _initStage: function (a, b) {
    var c = this._texture2d = new cc.Texture2D;
    c.initWithElement(a);
    c.handleLoadedTexture();
    c = this._logo = cc.Sprite.create(c);
    c.setScale(cc.contentScaleFactor());
    c.x = b.x;
    c.y = b.y;
    this._bgLayer.addChild(c, 10)
}, onEnter: function () {
    cc.Node.prototype.onEnter.call(this);
    this.schedule(this._startLoading, 0.3)
}, onExit: function () {
    cc.Node.prototype.onExit.call(this);
    this._label.setString("Loading... 0%")
}, initWithResources: function (a, b) {
    "string" == typeof a && (a = [a]);
    this.resources = a || [];
    this.cb = b
}, _startLoading: function () {
    var a = this;
    a.unschedule(a._startLoading);
    var b = a.resources;
    a._length = b.length;
    a._count = 0;
    cc.loader.load(b, function (b, d) {
        a._count = d
    }, function () {
        a.cb && a.cb()
    });
    a.schedule(a._updatePercent)
}, _updatePercent: function () {
    var a = this._count, b = this._length, c;
    c = Math.min(100 * (a / b) | 0, 100);
    this._label.setString("Loading... " + c + "%");
    a >= b && this.unschedule(this._updatePercent)
}});
cc.LoaderScene.preload = function (a, b) {
    var c = cc;
    c.loaderScene || (c.loaderScene = new cc.LoaderScene, c.loaderScene.init());
    c.loaderScene.initWithResources(a, b);
    cc.director.runScene(c.loaderScene);
    return c.loaderScene
};
cc._tmp.PrototypeLayerRGBA = function () {
    var a = cc.LayerRGBA.prototype;
    cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "cascadeOpacity", a.isCascadeOpacityEnabled, a.setCascadeOpacityEnabled);
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "cascadeColor", a.isCascadeColorEnabled, a.setCascadeColorEnabled)
};
cc._tmp.PrototypeLayerColor = function () {
    var a = cc.LayerColor.prototype;
    cc.defineGetterSetter(a, "width", a._getWidth, a._setWidth);
    cc.defineGetterSetter(a, "height", a._getHeight, a._setHeight)
};
cc._tmp.PrototypeLayerGradient = function () {
    var a = cc.LayerGradient.prototype;
    cc.defineGetterSetter(a, "startColor", a.getStartColor, a.setStartColor);
    cc.defineGetterSetter(a, "endColor", a.getEndColor, a.setEndColor);
    cc.defineGetterSetter(a, "startOpacity", a.getStartOpacity, a.setStartOpacity);
    cc.defineGetterSetter(a, "endOpacity", a.getEndOpacity, a.setEndOpacity);
    cc.defineGetterSetter(a, "vector", a.getVector, a.setVector)
};
cc.Layer = cc.Node.extend({_isBaked: !1, _bakeSprite: null, _className: "Layer", ctor: function () {
    var a = cc.Node.prototype;
    a.ctor.call(this);
    this._ignoreAnchorPointForPosition = !0;
    a.setAnchorPoint.call(this, 0.5, 0.5);
    a.setContentSize.call(this, cc.winSize)
}, bake: null, unbake: null, isBaked: function () {
    return this._isBaked
}, visit: null});
cc.Layer.create = function () {
    return new cc.Layer
};
if (cc._renderType === cc._RENDER_TYPE_CANVAS) {
    var p = cc.Layer.prototype;
    p.bake = function () {
        if (!this._isBaked) {
            this._isBaked = this._cacheDirty = !0;
            this._cachedParent = this;
            for (var a = this._children, b = 0, c = a.length; b < c; b++)a[b]._setCachedParent(this);
            this._bakeSprite || (this._bakeSprite = new cc.BakeSprite)
        }
    };
    p.unbake = function () {
        if (this._isBaked) {
            this._isBaked = !1;
            this._cacheDirty = !0;
            this._cachedParent = null;
            for (var a = this._children, b = 0, c = a.length; b < c; b++)a[b]._setCachedParent(null)
        }
    };
    p.visit = function (a) {
        if (this._isBaked) {
            a =
                a || cc._renderContext;
            var b, c = this._children, d = c.length;
            if (this._visible && 0 !== d) {
                var e = this._bakeSprite;
                a.save();
                this.transform(a);
                if (this._cacheDirty) {
                    b = this._getBoundingBoxForBake();
                    b.width |= 0;
                    b.height |= 0;
                    var f = e.getCacheContext();
                    e.resetCanvasSize(b.width, b.height);
                    f.translate(0 - b.x, b.height + b.y);
                    var g = e.getAnchorPointInPoints();
                    e.setPosition(g.x + b.x, g.y + b.y);
                    this.sortAllChildren();
                    for (b = 0; b < d; b++)c[b].visit(f);
                    this._cacheDirty = !1
                }
                e.visit(a);
                this.arrivalOrder = 0;
                a.restore()
            }
        } else cc.Node.prototype.visit.call(this,
            a)
    };
    p._getBoundingBoxForBake = function () {
        var a = null;
        if (!this._children || 0 === this._children.length)return cc.rect(0, 0, 10, 10);
        for (var b = this._children, c = 0; c < b.length; c++) {
            var d = b[c];
            d && d._visible && (a ? (d = d._getBoundingBoxToCurrentNode()) && (a = cc.rectUnion(a, d)) : a = d._getBoundingBoxToCurrentNode())
        }
        return a
    };
    p = null
} else cc.assert("function" === typeof cc._tmp.LayerDefineForWebGL, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.LayerDefineForWebGL(), delete cc._tmp.LayerDefineForWebGL;
cc.LayerRGBA = cc.Layer.extend({RGBAProtocol: !0, _displayedOpacity: 255, _realOpacity: 255, _displayedColor: null, _realColor: null, _cascadeOpacityEnabled: !1, _cascadeColorEnabled: !1, _className: "LayerRGBA", ctor: function () {
    cc.Layer.prototype.ctor.call(this);
    this._displayedColor = cc.color(255, 255, 255, 255);
    this._realColor = cc.color(255, 255, 255, 255)
}, init: function () {
    var a = cc.Layer.prototype;
    this._ignoreAnchorPointForPosition = !0;
    a.setAnchorPoint.call(this, 0.5, 0.5);
    a.setContentSize.call(this, cc.winSize);
    this.cascadeColor =
        this.cascadeOpacity = !1;
    return!0
}, getOpacity: function () {
    return this._realOpacity
}, getDisplayedOpacity: function () {
    return this._displayedOpacity
}, setOpacity: function (a) {
    this._displayedOpacity = this._realOpacity = a;
    var b = 255, c = this._parent;
    c && (c.RGBAProtocol && c.cascadeOpacity) && (b = c.getDisplayedOpacity());
    this.updateDisplayedOpacity(b);
    this._displayedColor.a = this._realColor.a = a
}, updateDisplayedOpacity: function (a) {
    this._displayedOpacity = 0 | this._realOpacity * a / 255;
    if (this._cascadeOpacityEnabled) {
        a = this._children;
        for (var b, c = 0; c < a.length; c++)(b = a[c]) && b.RGBAProtocol && b.updateDisplayedOpacity(this._displayedOpacity)
    }
}, isCascadeOpacityEnabled: function () {
    return this._cascadeOpacityEnabled
}, setCascadeOpacityEnabled: function (a) {
    this._cascadeOpacityEnabled !== a && ((this._cascadeOpacityEnabled = a) ? this._enableCascadeOpacity() : this._disableCascadeOpacity())
}, _enableCascadeOpacity: function () {
    var a = 255, b = this._parent;
    b && (b.RGBAProtocol && b.cascadeOpacity) && (a = b.getDisplayedOpacity());
    this.updateDisplayedOpacity(a)
}, _disableCascadeOpacity: function () {
    this._displayedOpacity =
        this._realOpacity;
    for (var a = this._children, b, c = 0; c < a.length; c++)(b = a[c]) && b.RGBAProtocol && b.updateDisplayedOpacity(255)
}, getColor: function () {
    var a = this._realColor;
    return cc.color(a.r, a.g, a.b, a.a)
}, getDisplayedColor: function () {
    var a = this._displayedColor;
    return cc.color(a.r, a.g, a.b)
}, setColor: function (a) {
    var b = this._displayedColor, c = this._realColor;
    b.r = c.r = a.r;
    b.g = c.g = a.g;
    b.b = c.b = a.b;
    b = (b = this._parent) && b.RGBAProtocol && b.cascadeColor ? b.getDisplayedColor() : cc.color.WHITE;
    this.updateDisplayedColor(b);
    void 0 !== a.a && !a.a_undefined && this.setOpacity(a.a)
}, updateDisplayedColor: function (a) {
    var b = this._displayedColor, c = this._realColor;
    b.r = 0 | c.r * a.r / 255;
    b.g = 0 | c.g * a.g / 255;
    b.b = 0 | c.b * a.b / 255;
    if (this._cascadeColorEnabled) {
        a = this._children;
        for (var d = 0; d < a.length; d++)(c = a[d]) && c.RGBAProtocol && c.updateDisplayedColor(b)
    }
}, isCascadeColorEnabled: function () {
    return this._cascadeColorEnabled
}, setCascadeColorEnabled: function (a) {
    this._cascadeColorEnabled !== a && ((this._cascadeColorEnabled = a) ? this._enableCascadeColor() :
        this._disableCascadeColor())
}, _enableCascadeColor: function () {
    var a;
    a = (a = this._parent) && a.RGBAProtocol && a.cascadeColor ? a.getDisplayedColor() : cc.color.WHITE;
    this.updateDisplayedColor(a)
}, _disableCascadeColor: function () {
    var a = this._displayedColor, b = this._realColor;
    a.r = b.r;
    a.g = b.g;
    a.b = b.b;
    var a = this._children, b = cc.color.WHITE, c, d;
    for (d = 0; d < a.length; d++)(c = a[d]) && c.RGBAProtocol && c.updateDisplayedColor(b)
}, addChild: function (a, b, c) {
    cc.Node.prototype.addChild.call(this, a, b, c);
    this._cascadeColorEnabled && this._enableCascadeColor();
    this._cascadeOpacityEnabled && this._enableCascadeOpacity()
}, setOpacityModifyRGB: function (a) {
}, isOpacityModifyRGB: function () {
    return!1
}});
cc.assert("function" === typeof cc._tmp.PrototypeLayerRGBA, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerRGBA();
delete cc._tmp.PrototypeLayerRGBA;
cc.LayerColor = cc.LayerRGBA.extend({_blendFunc: null, _className: "LayerColor", getBlendFunc: function () {
    return this._blendFunc
}, changeWidthAndHeight: function (a, b) {
    this.width = a;
    this.height = b
}, changeWidth: function (a) {
    this.width = a
}, changeHeight: function (a) {
    this.height = a
}, setOpacityModifyRGB: function (a) {
}, isOpacityModifyRGB: function () {
    return!1
}, setColor: function (a) {
    cc.LayerRGBA.prototype.setColor.call(this, a);
    this._updateColor()
}, setOpacity: function (a) {
    cc.LayerRGBA.prototype.setOpacity.call(this, a);
    this._updateColor()
},
    _isLighterMode: !1, ctor: null, init: function (a, b, c) {
        cc._renderType !== cc._RENDER_TYPE_CANVAS && (this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_COLOR));
        var d = cc.director.getWinSize();
        a = a || cc.color(0, 0, 0, 255);
        b = void 0 === b ? d.width : b;
        c = void 0 === c ? d.height : c;
        d = this._displayedColor;
        d.r = a.r;
        d.g = a.g;
        d.b = a.b;
        d = this._realColor;
        d.r = a.r;
        d.g = a.g;
        d.b = a.b;
        this._realOpacity = this._displayedOpacity = a.a;
        a = cc.LayerColor.prototype;
        a.setContentSize.call(this, b, c);
        a._updateColor.call(this);
        return!0
    }, setBlendFunc: function (a, b) {
        this._blendFunc = void 0 === b ? a : {src: a, dst: b};
        cc._renderType === cc._RENDER_TYPE_CANVAS && (this._isLighterMode = this._blendFunc && 1 == this._blendFunc.src && 771 == this._blendFunc.dst)
    }, _setWidth: null, _setHeight: null, _updateColor: null, updateDisplayedColor: function (a) {
        cc.LayerRGBA.prototype.updateDisplayedColor.call(this, a);
        this._updateColor()
    }, updateDisplayedOpacity: function (a) {
        cc.LayerRGBA.prototype.updateDisplayedOpacity.call(this, a);
        this._updateColor()
    }, draw: null});
cc.LayerColor.create = function (a, b, c) {
    return new cc.LayerColor(a, b, c)
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerColor.prototype, _p.ctor = function (a, b, c) {
    cc.LayerRGBA.prototype.ctor.call(this);
    this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
    cc.LayerColor.prototype.init.call(this, a, b, c)
}, _p._setWidth = cc.LayerRGBA.prototype._setWidth, _p._setHeight = cc.LayerRGBA.prototype._setHeight, _p._updateColor = function () {
}, _p.draw = function (a) {
    a = a || cc._renderContext;
    var b = cc.view, c = this._displayedColor;
    a.fillStyle = "rgba(" + (0 | c.r) + "," + (0 | c.g) + "," + (0 | c.b) + "," + this._displayedOpacity /
        255 + ")";
    a.fillRect(0, 0, this.width * b.getScaleX(), -this.height * b.getScaleY());
    cc.g_NumberOfDraws++
}, _p.visit = function (a) {
    if (this._isBaked) {
        a = a || cc._renderContext;
        var b, c = this._children, d = c.length;
        if (this._visible) {
            var e = this._bakeSprite;
            a.save();
            this.transform(a);
            if (this._cacheDirty) {
                b = this._getBoundingBoxForBake();
                b.width |= 0;
                b.height |= 0;
                var f = e.getCacheContext();
                e.resetCanvasSize(b.width, b.height);
                var g = e.getAnchorPointInPoints(), h = this._position;
                if (this._ignoreAnchorPointForPosition)f.translate(0 -
                    b.x + h.x, b.height + b.y - h.y), e.setPosition(g.x + b.x - h.x, g.y + b.y - h.y); else {
                    var k = this.getAnchorPointInPoints(), l = h.x - k.x, h = h.y - k.y;
                    f.translate(0 - b.x + l, b.height + b.y - h);
                    e.setPosition(g.x + b.x - l, g.y + b.y - h)
                }
                if (0 < d) {
                    this.sortAllChildren();
                    for (b = 0; b < d; b++)if (g = c[b], 0 > g._localZOrder)g.visit(f); else break;
                    for (this.draw(f); b < d; b++)c[b].visit(f)
                } else this.draw(f);
                this._cacheDirty = !1
            }
            e.visit(a);
            this.arrivalOrder = 0;
            a.restore()
        }
    } else cc.Node.prototype.visit.call(this, a)
}, _p._getBoundingBoxForBake = function () {
    var a = cc.rect(0,
        0, this._contentSize.width, this._contentSize.height), b = this.nodeToWorldTransform(), a = cc.RectApplyAffineTransform(a, this.nodeToWorldTransform());
    if (!this._children || 0 === this._children.length)return a;
    for (var c = this._children, d = 0; d < c.length; d++) {
        var e = c[d];
        e && e._visible && (e = e._getBoundingBoxToCurrentNode(b), a = cc.rectUnion(a, e))
    }
    return a
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLayerColor, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerColor(), delete cc._tmp.WebGLLayerColor);
cc.assert("function" === typeof cc._tmp.PrototypeLayerColor, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerColor();
delete cc._tmp.PrototypeLayerColor;
cc.LayerGradient = cc.LayerColor.extend({_startColor: null, _endColor: null, _startOpacity: 255, _endOpacity: 255, _alongVector: null, _compressedInterpolation: !1, _gradientStartPoint: null, _gradientEndPoint: null, _className: "LayerGradient", ctor: function (a, b, c) {
    cc.LayerColor.prototype.ctor.call(this);
    this._startColor = cc.color(0, 0, 0, 255);
    this._endColor = cc.color(0, 0, 0, 255);
    this._alongVector = cc.p(0, -1);
    this._endOpacity = this._startOpacity = 255;
    this._gradientStartPoint = cc.p(0, 0);
    this._gradientEndPoint = cc.p(0, 0);
    cc.LayerGradient.prototype.init.call(this,
        a, b, c)
}, init: function (a, b, c) {
    a = a || cc.color(0, 0, 0, 255);
    b = b || cc.color(0, 0, 0, 255);
    c = c || cc.p(0, -1);
    var d = this._startColor, e = this._endColor;
    d.r = a.r;
    d.g = a.g;
    d.b = a.b;
    this._startOpacity = a.a;
    e.r = b.r;
    e.g = b.g;
    e.b = b.b;
    this._endOpacity = b.a;
    this._alongVector = c;
    this._compressedInterpolation = !0;
    this._gradientStartPoint = cc.p(0, 0);
    this._gradientEndPoint = cc.p(0, 0);
    cc.LayerColor.prototype.init.call(this, cc.color(a.r, a.g, a.b, 255));
    cc.LayerGradient.prototype._updateColor.call(this);
    return!0
}, setContentSize: function (a, b) {
    cc.LayerColor.prototype.setContentSize.call(this, a, b);
    this._updateColor()
}, _setWidth: function (a) {
    cc.LayerColor.prototype._setWidth.call(this, a);
    this._updateColor()
}, _setHeight: function (a) {
    cc.LayerColor.prototype._setHeight.call(this, a);
    this._updateColor()
}, getStartColor: function () {
    return this._realColor
}, setStartColor: function (a) {
    this.color = a
}, setEndColor: function (a) {
    this._endColor = a;
    this._updateColor()
}, getEndColor: function () {
    return this._endColor
}, setStartOpacity: function (a) {
    this._startOpacity =
        a;
    this._updateColor()
}, getStartOpacity: function () {
    return this._startOpacity
}, setEndOpacity: function (a) {
    this._endOpacity = a;
    this._updateColor()
}, getEndOpacity: function () {
    return this._endOpacity
}, setVector: function (a) {
    this._alongVector.x = a.x;
    this._alongVector.y = a.y;
    this._updateColor()
}, getVector: function () {
    return cc.p(this._alongVector.x, this._alongVector.y)
}, isCompressedInterpolation: function () {
    return this._compressedInterpolation
}, setCompressedInterpolation: function (a) {
    this._compressedInterpolation =
        a;
    this._updateColor()
}, _draw: null, _updateColor: null});
cc.LayerGradient.create = function (a, b, c) {
    return new cc.LayerGradient(a, b, c)
};
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LayerGradient.prototype, _p.draw = function (a) {
    a = a || cc._renderContext;
    this._isLighterMode && (a.globalCompositeOperation = "lighter");
    a.save();
    var b = cc.view, c = this._displayedOpacity / 255, d = this.width * b.getScaleX(), b = this.height * b.getScaleY(), e = a.createLinearGradient(this._gradientStartPoint.x, this._gradientStartPoint.y, this._gradientEndPoint.x, this._gradientEndPoint.y), f = this._displayedColor, g = this._endColor;
    e.addColorStop(0, "rgba(" + Math.round(f.r) + "," + Math.round(f.g) +
        "," + Math.round(f.b) + "," + (c * (this._startOpacity / 255)).toFixed(4) + ")");
    e.addColorStop(1, "rgba(" + Math.round(g.r) + "," + Math.round(g.g) + "," + Math.round(g.b) + "," + (c * (this._endOpacity / 255)).toFixed(4) + ")");
    a.fillStyle = e;
    a.fillRect(0, 0, d, -b);
    0 != this._rotation && a.rotate(this._rotationRadians);
    a.restore()
}, _p._updateColor = function () {
    var a = this._alongVector, b = 0.5 * this.width, c = 0.5 * this.height;
    this._gradientStartPoint.x = b * -a.x + b;
    this._gradientStartPoint.y = c * a.y - c;
    this._gradientEndPoint.x = b * a.x + b;
    this._gradientEndPoint.y =
        c * -a.y - c
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLayerGradient, cc._LogInfos.MissingFile, "CCLayerWebGL.js"), cc._tmp.WebGLLayerGradient(), delete cc._tmp.WebGLLayerGradient);
cc.assert("function" === typeof cc._tmp.PrototypeLayerGradient, cc._LogInfos.MissingFile, "CCLayerPropertyDefine.js");
cc._tmp.PrototypeLayerGradient();
delete cc._tmp.PrototypeLayerGradient;
cc.LayerMultiplex = cc.Layer.extend({_enabledLayer: 0, _layers: null, _className: "LayerMultiplex", ctor: function (a) {
    cc.Layer.prototype.ctor.call(this);
    a && cc.LayerMultiplex.prototype.initWithLayers.call(this, a)
}, initWithLayers: function (a) {
    0 < a.length && null == a[a.length - 1] && cc.log(cc._LogInfos.LayerMultiplex_initWithLayers);
    this._layers = a;
    this._enabledLayer = 0;
    this.addChild(this._layers[this._enabledLayer]);
    return!0
}, switchTo: function (a) {
    a >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchTo) : (this.removeChild(this._layers[this._enabledLayer],
        !0), this._enabledLayer = a, this.addChild(this._layers[a]))
}, switchToAndReleaseMe: function (a) {
    a >= this._layers.length ? cc.log(cc._LogInfos.LayerMultiplex_switchToAndReleaseMe) : (this.removeChild(this._layers[this._enabledLayer], !0), this._layers[this._enabledLayer] = null, this._enabledLayer = a, this.addChild(this._layers[a]))
}, addLayer: function (a) {
    a ? this._layers.push(a) : cc.log(cc._LogInfos.LayerMultiplex_addLayer)
}});
cc.LayerMultiplex.create = function () {
    return new cc.LayerMultiplex(arguments)
};
cc._tmp.PrototypeSprite = function () {
    var a = cc.Sprite.prototype;
    cc.defineGetterSetter(a, "opacityModifyRGB", a.isOpacityModifyRGB, a.setOpacityModifyRGB);
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "flippedX", a.isFlippedX, a.setFlippedX);
    cc.defineGetterSetter(a, "flippedY", a.isFlippedY, a.setFlippedY);
    cc.defineGetterSetter(a, "offsetX", a._getOffsetX);
    cc.defineGetterSetter(a, "offsetY", a._getOffsetY);
    cc.defineGetterSetter(a,
        "texture", a.getTexture, a.setTexture);
    cc.defineGetterSetter(a, "textureRectRotated", a.isTextureRectRotated);
    cc.defineGetterSetter(a, "batchNode", a.getBatchNode, a.setBatchNode);
    cc.defineGetterSetter(a, "quad", a.getQuad)
};
cc.generateTextureCacheForColor = function (a) {
    function b() {
        var b = cc.generateTextureCacheForColor, d = a.width, g = a.height;
        c[0].width = d;
        c[0].height = g;
        c[1].width = d;
        c[1].height = g;
        c[2].width = d;
        c[2].height = g;
        c[3].width = d;
        c[3].height = g;
        b.canvas.width = d;
        b.canvas.height = g;
        var h = b.canvas.getContext("2d");
        h.drawImage(a, 0, 0);
        b.tempCanvas.width = d;
        b.tempCanvas.height = g;
        for (var h = h.getImageData(0, 0, d, g).data, k = 0; 4 > k; k++) {
            var l = c[k].getContext("2d");
            l.getImageData(0, 0, d, g).data;
            b.tempCtx.drawImage(a, 0, 0);
            for (var m = b.tempCtx.getImageData(0,
                0, d, g), n = m.data, q = 0; q < h.length; q += 4)n[q] = 0 === k ? h[q] : 0, n[q + 1] = 1 === k ? h[q + 1] : 0, n[q + 2] = 2 === k ? h[q + 2] : 0, n[q + 3] = h[q + 3];
            l.putImageData(m, 0, 0)
        }
        a.onload = null
    }

    if (a.channelCache)return a.channelCache;
    var c = [cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas"), cc.newElement("canvas")];
    try {
        b()
    } catch (d) {
        a.onload = b
    }
    return a.channelCache = c
};
cc.generateTextureCacheForColor.canvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCanvas = cc.newElement("canvas");
cc.generateTextureCacheForColor.tempCtx = cc.generateTextureCacheForColor.tempCanvas.getContext("2d");
cc.generateTintImage2 = function (a, b, c) {
    c || (c = cc.rect(0, 0, a.width, a.height), c = cc.rectPixelsToPoints(c));
    var d = cc.newElement("canvas"), e = d.getContext("2d");
    d.width != c.width && (d.width = c.width);
    d.height != c.height && (d.height = c.height);
    e.save();
    e.drawImage(a, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height);
    e.globalCompositeOperation = "source-in";
    e.globalAlpha = b.a / 255;
    e.fillStyle = "rgb(" + b.r + "," + b.g + "," + b.b + ")";
    e.fillRect(0, 0, c.width, c.height);
    e.restore();
    return d
};
cc.generateTintImage = function (a, b, c, d, e) {
    d || (d = cc.rect(0, 0, a.width, a.height));
    a = c.r / 255;
    var f = c.g / 255;
    c = c.b / 255;
    var g = Math.min(d.width, b[0].width), h = Math.min(d.height, b[0].height), k;
    e ? (k = e.getContext("2d"), k.clearRect(0, 0, g, h)) : (e = cc.newElement("canvas"), e.width = g, e.height = h, k = e.getContext("2d"));
    k.save();
    k.globalCompositeOperation = "lighter";
    var l = k.globalAlpha;
    0 < a && (k.globalAlpha = a * l, k.drawImage(b[0], d.x, d.y, g, h, 0, 0, g, h));
    0 < f && (k.globalAlpha = f * l, k.drawImage(b[1], d.x, d.y, g, h, 0, 0, g, h));
    0 < c && (k.globalAlpha =
        c * l, k.drawImage(b[2], d.x, d.y, g, h, 0, 0, g, h));
    1 > a + f + c && (k.globalAlpha = l, k.drawImage(b[3], d.x, d.y, g, h, 0, 0, g, h));
    k.restore();
    return e
};
cc.cutRotateImageToCanvas = function (a, b) {
    if (!a)return null;
    if (!b)return a;
    var c = cc.newElement("canvas");
    c.width = b.width;
    c.height = b.height;
    var d = c.getContext("2d");
    d.translate(c.width / 2, c.height / 2);
    d.rotate(-1.5707963267948966);
    d.drawImage(a, b.x, b.y, b.height, b.width, -b.height / 2, -b.width / 2, b.height, b.width);
    return c
};
cc.Sprite = cc.NodeRGBA.extend({RGBAProtocol: !0, dirty: !1, atlasIndex: 0, textureAtlas: null, _batchNode: null, _recursiveDirty: null, _hasChildren: null, _shouldBeHidden: !1, _transformToBatch: null, _blendFunc: null, _texture: null, _rect: null, _rectRotated: !1, _offsetPosition: null, _unflippedOffsetPositionFromCenter: null, _opacityModifyRGB: !1, _flippedX: !1, _flippedY: !1, _textureLoaded: !1, _loadedEventListeners: null, _newTextureWhenChangeColor: null, _className: "Sprite", textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (a, b) {
    this._loadedEventListeners || (this._loadedEventListeners = []);
    this._loadedEventListeners.push({eventCallback: a, eventTarget: b})
}, _callLoadedEventCallbacks: function () {
    if (this._loadedEventListeners) {
        for (var a = this._loadedEventListeners, b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            d.eventCallback.call(d.eventTarget, this)
        }
        a.length = 0
    }
}, isDirty: function () {
    return this.dirty
}, setDirty: function (a) {
    this.dirty = a
}, isTextureRectRotated: function () {
    return this._rectRotated
}, getAtlasIndex: function () {
    return this.atlasIndex
},
    setAtlasIndex: function (a) {
        this.atlasIndex = a
    }, getTextureRect: function () {
        return cc.rect(this._rect.x, this._rect.y, this._rect.width, this._rect.height)
    }, getTextureAtlas: function () {
        return this.textureAtlas
    }, setTextureAtlas: function (a) {
        this.textureAtlas = a
    }, getOffsetPosition: function () {
        return this._offsetPosition
    }, _getOffsetX: function () {
        return this._offsetPosition.x
    }, _getOffsetY: function () {
        return this._offsetPosition.y
    }, getBlendFunc: function () {
        return this._blendFunc
    }, initWithSpriteFrame: function (a) {
        cc.assert(a,
            cc._LogInfos.Sprite_initWithSpriteFrame);
        a.textureLoaded() || (this._textureLoaded = !1, a.addLoadedEventListener(this._spriteFrameLoadedCallback, this));
        var b = cc._renderType === cc._RENDER_TYPE_CANVAS ? !1 : a._rotated, b = this.initWithTexture(a.getTexture(), a.getRect(), b);
        this.setSpriteFrame(a);
        return b
    }, _spriteFrameLoadedCallback: null, initWithSpriteFrameName: function (a) {
        cc.assert(a, cc._LogInfos.Sprite_initWithSpriteFrameName);
        var b = cc.spriteFrameCache.getSpriteFrame(a);
        cc.assert(b, a + cc._LogInfos.Sprite_initWithSpriteFrameName1);
        return this.initWithSpriteFrame(b)
    }, useBatchNode: function (a) {
        this.textureAtlas = a.textureAtlas;
        this._batchNode = a
    }, setVertexRect: function (a) {
        this._rect.x = a.x;
        this._rect.y = a.y;
        this._rect.width = a.width;
        this._rect.height = a.height
    }, sortAllChildren: function () {
        if (this._reorderChildDirty) {
            var a = this._children, b = a.length, c, d, e;
            for (c = 1; c < b; c++) {
                e = a[c];
                for (d = c - 1; 0 <= d;) {
                    if (e._localZOrder < a[d]._localZOrder)a[d + 1] = a[d]; else if (e._localZOrder === a[d]._localZOrder && e.arrivalOrder < a[d].arrivalOrder)a[d + 1] = a[d]; else break;
                    d--
                }
                a[d + 1] = e
            }
            this._batchNode && this._arrayMakeObjectsPerformSelector(a, cc.Node.StateCallbackType.sortAllChildren);
            this._reorderChildDirty = !1
        }
    }, reorderChild: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_reorderChild_2);
        -1 === this._children.indexOf(a) ? cc.log(cc._LogInfos.Sprite_reorderChild) : b !== a.zIndex && (this._batchNode && !this._reorderChildDirty && (this._setReorderChildDirtyRecursively(), this._batchNode.reorderBatch(!0)), cc.Node.prototype.reorderChild.call(this, a, b))
    }, removeChild: function (a, b) {
        this._batchNode &&
        this._batchNode.removeSpriteFromAtlas(a);
        cc.Node.prototype.removeChild.call(this, a, b)
    }, removeAllChildren: function (a) {
        var b = this._children, c = this._batchNode;
        if (c && null != b)for (var d = 0, e = b.length; d < e; d++)c.removeSpriteFromAtlas(b[d]);
        cc.Node.prototype.removeAllChildren.call(this, a);
        this._hasChildren = !1
    }, setDirtyRecursively: function (a) {
        this.dirty = this._recursiveDirty = a;
        a = this._children;
        for (var b, c = a ? a.length : 0, d = 0; d < c; d++)b = a[d], b instanceof cc.Sprite && b.setDirtyRecursively(!0)
    }, setNodeDirty: function (a) {
        cc.Node.prototype.setNodeDirty.call(this);
        !a && (this._batchNode && !this._recursiveDirty) && (this._hasChildren ? this.setDirtyRecursively(!0) : this.dirty = this._recursiveDirty = !0)
    }, ignoreAnchorPointForPosition: function (a) {
        this._batchNode ? cc.log(cc._LogInfos.Sprite_ignoreAnchorPointForPosition) : cc.Node.prototype.ignoreAnchorPointForPosition.call(this, a)
    }, setFlippedX: function (a) {
        this._flippedX != a && (this._flippedX = a, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
    }, setFlippedY: function (a) {
        this._flippedY != a &&
        (this._flippedY = a, this.setTextureRect(this._rect, this._rectRotated, this._contentSize), this.setNodeDirty(!0))
    }, isFlippedX: function () {
        return this._flippedX
    }, isFlippedY: function () {
        return this._flippedY
    }, setOpacityModifyRGB: null, isOpacityModifyRGB: function () {
        return this._opacityModifyRGB
    }, updateDisplayedOpacity: null, setDisplayFrameWithAnimationName: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_3);
        var c = cc.animationCache.getAnimation(a);
        c ? (c = c.getFrames()[b]) ? this.setSpriteFrame(c.getSpriteFrame()) :
            cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName_2) : cc.log(cc._LogInfos.Sprite_setDisplayFrameWithAnimationName)
    }, getBatchNode: function () {
        return this._batchNode
    }, _setReorderChildDirtyRecursively: function () {
        if (!this._reorderChildDirty) {
            this._reorderChildDirty = !0;
            for (var a = this._parent; a && a != this._batchNode;)a._setReorderChildDirtyRecursively(), a = a.parent
        }
    }, getTexture: function () {
        return this._texture
    }, _quad: null, _quadWebBuffer: null, _quadDirty: !1, _colorized: !1, _isLighterMode: !1, _originalTexture: null,
    _textureRect_Canvas: null, _drawSize_Canvas: null, ctor: null, _softInit: function (a, b, c) {
        if (void 0 === a)cc.Sprite.prototype.init.call(this); else if ("string" === typeof a)"#" === a[0] ? (a = a.substr(1, a.length - 1), a = cc.spriteFrameCache.getSpriteFrame(a), this.initWithSpriteFrame(a)) : cc.Sprite.prototype.init.call(this, a, b); else if ("object" === typeof a)if (a instanceof cc.Texture2D)this.initWithTexture(a, b, c); else if (a instanceof cc.SpriteFrame)this.initWithSpriteFrame(a); else if (a instanceof HTMLImageElement || a instanceof
            HTMLCanvasElement)b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.initWithTexture(b)
    }, getQuad: function () {
        return this._quad
    }, setBlendFunc: null, init: null, initWithFile: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_initWithFile);
        var c = cc.textureCache.textureForKey(a);
        if (c) {
            if (!b) {
                var d = c.getContentSize();
                b = cc.rect(0, 0, d.width, d.height)
            }
            return this.initWithTexture(c, b)
        }
        c = cc.textureCache.addImage(a);
        return this.initWithTexture(c, b || cc.rect(0, 0, c._contentSize.width, c._contentSize.height))
    },
    initWithTexture: null, _textureLoadedCallback: null, setTextureRect: null, updateTransform: null, addChild: null, updateColor: function () {
        var a = this._displayedColor, b = this._displayedOpacity, a = {r: a.r, g: a.g, b: a.b, a: b};
        this._opacityModifyRGB && (a.r *= b / 255, a.g *= b / 255, a.b *= b / 255);
        b = this._quad;
        b.bl.colors = a;
        b.br.colors = a;
        b.tl.colors = a;
        b.tr.colors = a;
        this._batchNode && (this.atlasIndex != cc.Sprite.INDEX_NOT_INITIALIZED ? this.textureAtlas.updateQuad(b, this.atlasIndex) : this.dirty = !0);
        this._quadDirty = !0
    }, setOpacity: null, setColor: null,
    updateDisplayedColor: null, setSpriteFrame: null, setDisplayFrame: function (a) {
        cc.log(cc._LogInfos.Sprite_setDisplayFrame);
        this.setSpriteFrame(a)
    }, isFrameDisplayed: null, displayFrame: function () {
        return cc.SpriteFrame.create(this._texture, cc.rectPointsToPixels(this._rect), this._rectRotated, cc.pointPointsToPixels(this._unflippedOffsetPositionFromCenter), cc.sizePointsToPixels(this._contentSize))
    }, setBatchNode: null, setTexture: null, _updateBlendFunc: function () {
        this._batchNode ? cc.log(cc._LogInfos.Sprite__updateBlendFunc) :
                !this._texture || !this._texture.hasPremultipliedAlpha() ? (this._blendFunc.src = cc.SRC_ALPHA, this._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA, this.opacityModifyRGB = !1) : (this._blendFunc.src = cc.BLEND_SRC, this._blendFunc.dst = cc.BLEND_DST, this.opacityModifyRGB = !0)
    }, _changeTextureColor: function () {
        var a, b = this._texture, c = this._textureRect_Canvas;
        if (b && (c.validRect && this._originalTexture) && (a = b.getHtmlElementObj()))if (b = cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj()))this._colorized = !0,
                a instanceof HTMLCanvasElement && !this._rectRotated && !this._newTextureWhenChangeColor ? cc.generateTintImage(a, b, this._displayedColor, c, a) : (a = cc.generateTintImage(a, b, this._displayedColor, c), b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.texture = b)
    }, _setTextureCoords: function (a) {
        a = cc.rectPointsToPixels(a);
        var b = this._batchNode ? this.textureAtlas.texture : this._texture;
        if (b) {
            var c = b.pixelsWidth, d = b.pixelsHeight, e, f = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ?
                (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.height - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.width - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.height) / c, e = a.y / d, a = (a.y + a.width) / d), this._flippedX && (d = e, e = a, a = d), this._flippedY && (d = b, b = c, c = d), f.bl.texCoords.u = b, f.bl.texCoords.v = e, f.br.texCoords.u = b, f.br.texCoords.v = a, f.tl.texCoords.u = c, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.width - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.height - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.width) /
                c, e = a.y / d, a = (a.y + a.height) / d), this._flippedX && (d = b, b = c, c = d), this._flippedY && (d = e, e = a, a = d), f.bl.texCoords.u = b, f.bl.texCoords.v = a, f.br.texCoords.u = c, f.br.texCoords.v = a, f.tl.texCoords.u = b, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = e);
            this._quadDirty = !0
        }
    }, draw: null});
cc.Sprite.create = function (a, b, c) {
    return new cc.Sprite(a, b, c)
};
cc.Sprite.INDEX_NOT_INITIALIZED = -1;
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Sprite.prototype, _p._spriteFrameLoadedCallback = function (a) {
    this.setNodeDirty(!0);
    this.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
    a = this.color;
    (255 !== a.r || 255 !== a.g || 255 !== a.b) && this._changeTextureColor();
    this._callLoadedEventCallbacks()
}, _p.setOpacityModifyRGB = function (a) {
    this._opacityModifyRGB !== a && (this._opacityModifyRGB = a, this.setNodeDirty(!0))
}, _p.updateDisplayedOpacity = function (a) {
    cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this,
        a);
    this._setNodeDirtyForCache()
}, _p.ctor = function (a, b, c) {
    cc.NodeRGBA.prototype.ctor.call(this);
    this._shouldBeHidden = !1;
    this._offsetPosition = cc.p(0, 0);
    this._unflippedOffsetPositionFromCenter = cc.p(0, 0);
    this._blendFunc = {src: cc.BLEND_SRC, dst: cc.BLEND_DST};
    this._rect = cc.rect(0, 0, 0, 0);
    this._newTextureWhenChangeColor = !1;
    this._textureLoaded = !0;
    this._textureRect_Canvas = {x: 0, y: 0, width: 0, height: 0, validRect: !1};
    this._drawSize_Canvas = cc.size(0, 0);
    this._softInit(a, b, c)
}, _p.setBlendFunc = function (a, b) {
    var c = this._blendFunc;
    void 0 === b ? (c.src = a.src, c.dst = a.dst) : (c.src = a, c.dst = b);
    this._isLighterMode = c && (c.src == cc.SRC_ALPHA && c.dst == cc.ONE || c.src == cc.ONE && c.dst == cc.ONE)
}, _p.init = function () {
    if (0 < arguments.length)return this.initWithFile(arguments[0], arguments[1]);
    cc.NodeRGBA.prototype.init.call(this);
    this.dirty = this._recursiveDirty = !1;
    this._opacityModifyRGB = !0;
    this._blendFunc.src = cc.BLEND_SRC;
    this._blendFunc.dst = cc.BLEND_DST;
    this.texture = null;
    this._textureLoaded = !0;
    this._flippedX = this._flippedY = !1;
    this.anchorY = this.anchorX =
        0.5;
    this._offsetPosition.x = 0;
    this._offsetPosition.y = 0;
    this._hasChildren = !1;
    this.setTextureRect(cc.rect(0, 0, 0, 0), !1, cc.size(0, 0));
    return!0
}, _p.initWithTexture = function (a, b, c) {
    cc.assert(0 != arguments.length, cc._LogInfos.CCSpriteBatchNode_initWithTexture);
    if ((c = c || !1) && a.isLoaded()) {
        var d = a.getHtmlElementObj(), d = cc.cutRotateImageToCanvas(d, b), e = new cc.Texture2D;
        e.initWithElement(d);
        e.handleLoadedTexture();
        a = e;
        this._rect = cc.rect(0, 0, b.width, b.height)
    }
    if (!cc.NodeRGBA.prototype.init.call(this))return!1;
    this._batchNode = null;
    this.dirty = this._recursiveDirty = !1;
    this._opacityModifyRGB = !0;
    this._blendFunc.src = cc.BLEND_SRC;
    this._blendFunc.dst = cc.BLEND_DST;
    this._flippedX = this._flippedY = !1;
    this.anchorY = this.anchorX = 0.5;
    this._offsetPosition.x = 0;
    this._offsetPosition.y = 0;
    this._hasChildren = !1;
    this._textureLoaded = d = a.isLoaded();
    if (!d)return this._rectRotated = c, b && (this._rect.x = b.x, this._rect.y = b.y, this._rect.width = b.width, this._rect.height = b.height), a.addLoadedEventListener(this._textureLoadedCallback, this), !0;
    b || (b = cc.rect(0, 0, a.width, a.height));
    a && (d = b.y + b.height, b.x + b.width > a.width && cc.error(cc._LogInfos.RectWidth, a.url), d > a.height && cc.error(cc._LogInfos.RectHeight, a.url));
    this.texture = this._originalTexture = a;
    this.setTextureRect(b, c);
    this.batchNode = null;
    return!0
}, _p._textureLoadedCallback = function (a) {
    if (!this._textureLoaded) {
        this._textureLoaded = !0;
        var b = this._rect;
        b ? cc._rectEqualToZero(b) && (b.width = a.width, b.height = a.height) : b = cc.rect(0, 0, a.width, a.height);
        this.texture = this._originalTexture = a;
        this.setTextureRect(b,
            this._rectRotated);
        this.batchNode = this._batchNode;
        this._callLoadedEventCallbacks()
    }
}, _p.setTextureRect = function (a, b, c) {
    this._rectRotated = b || !1;
    this.setContentSize(c || a);
    this.setVertexRect(a);
    b = this._textureRect_Canvas;
    c = cc.contentScaleFactor();
    b.x = 0 | a.x * c;
    b.y = 0 | a.y * c;
    b.width = 0 | a.width * c;
    b.height = 0 | a.height * c;
    b.validRect = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
    a = this._unflippedOffsetPositionFromCenter;
    this._flippedX && (a.x = -a.x);
    this._flippedY && (a.y = -a.y);
    this._offsetPosition.x = a.x + (this._contentSize.width -
        this._rect.width) / 2;
    this._offsetPosition.y = a.y + (this._contentSize.height - this._rect.height) / 2;
    this._batchNode && (this.dirty = !0)
}, _p.updateTransform = function () {
    if (this.dirty) {
        var a = this._parent;
        !this._visible || a && a != this._batchNode && a._shouldBeHidden ? this._shouldBeHidden = !0 : (this._shouldBeHidden = !1, this._transformToBatch = !a || a == this._batchNode ? this.nodeToParentTransform() : cc.AffineTransformConcat(this.nodeToParentTransform(), a._transformToBatch));
        this.dirty = this._recursiveDirty = !1
    }
    this._hasChildren &&
    this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform)
}, _p.addChild = function (a, b, c) {
    cc.assert(a, cc._LogInfos.CCSpriteBatchNode_addChild_2);
    null == b && (b = a._localZOrder);
    null == c && (c = a.tag);
    cc.NodeRGBA.prototype.addChild.call(this, a, b, c);
    this._hasChildren = !0
}, _p.setOpacity = function (a) {
    cc.NodeRGBA.prototype.setOpacity.call(this, a);
    this._setNodeDirtyForCache()
}, _p.setColor = function (a) {
    var b = this.color;
    b.r === a.r && b.g === a.g && b.b === a.b || (cc.NodeRGBA.prototype.setColor.call(this,
        a), this._changeTextureColor(), this._setNodeDirtyForCache())
}, _p.updateDisplayedColor = function (a) {
    var b = this.color;
    cc.NodeRGBA.prototype.updateDisplayedColor.call(this, a);
    a = this._displayedColor;
    b.r === a.r && b.g === a.g && b.b === a.b || (this._changeTextureColor(), this._setNodeDirtyForCache())
}, _p.setSpriteFrame = function (a) {
    var b = this;
    "string" == typeof a && (a = cc.spriteFrameCache.getSpriteFrame(a), cc.assert(a, cc._LogInfos.CCSpriteBatchNode_setSpriteFrame));
    b.setNodeDirty(!0);
    var c = a.getOffset();
    b._unflippedOffsetPositionFromCenter.x =
        c.x;
    b._unflippedOffsetPositionFromCenter.y = c.y;
    b._rectRotated = a.isRotated();
    var c = a.getTexture(), d = a.textureLoaded();
    d || (b._textureLoaded = !1, a.addLoadedEventListener(function (a) {
        b._textureLoaded = !0;
        var c = a.getTexture();
        c != b._texture && (b.texture = c);
        b.setTextureRect(a.getRect(), a.isRotated(), a.getOriginalSize());
        b._callLoadedEventCallbacks()
    }, b));
    c != b._texture && (b.texture = c);
    b._rectRotated && (b._originalTexture = c);
    b.setTextureRect(a.getRect(), b._rectRotated, a.getOriginalSize());
    b._colorized = !1;
    d && (a =
        b.color, (255 !== a.r || 255 !== a.g || 255 !== a.b) && b._changeTextureColor())
}, _p.isFrameDisplayed = function (a) {
    return a.getTexture() != this._texture ? !1 : cc.rectEqualToRect(a.getRect(), this._rect)
}, _p.setBatchNode = function (a) {
    (this._batchNode = a) ? (this._transformToBatch = cc.AffineTransformIdentity(), this.textureAtlas = this._batchNode.textureAtlas) : (this.atlasIndex = cc.Sprite.INDEX_NOT_INITIALIZED, this.textureAtlas = null, this.dirty = this._recursiveDirty = !1)
}, _p.setTexture = function (a) {
    a && "string" === typeof a ? (a = cc.textureCache.addImage(a),
        this.setTexture(a), a = a.getContentSize(), this.setTextureRect(cc.rect(0, 0, a.width, a.height))) : (cc.assert(!a || a instanceof cc.Texture2D, cc._LogInfos.CCSpriteBatchNode_setTexture), this._texture != a && (a && a.getHtmlElementObj()instanceof HTMLImageElement && (this._originalTexture = a), this._texture = a))
}, _p.draw = function (a) {
    if (this._textureLoaded) {
        a = a || cc._renderContext;
        this._isLighterMode && (a.globalCompositeOperation = "lighter");
        var b = cc.view.getScaleX(), c = cc.view.getScaleY();
        a.globalAlpha = this._displayedOpacity /
            255;
        var d = this._rect, e = this._contentSize, f = this._offsetPosition, g = this._drawSize_Canvas, h = 0 | f.x, k = -f.y - d.height, l = this._textureRect_Canvas;
        g.width = d.width * b;
        g.height = d.height * c;
        if (this._flippedX || this._flippedY)a.save(), this._flippedX && (h = -f.x - d.width, a.scale(-1, 1)), this._flippedY && (k = f.y, a.scale(1, -1));
        h *= b;
        k *= c;
        this._texture && l.validRect ? (e = this._texture.getHtmlElementObj(), this._colorized ? a.drawImage(e, 0, 0, l.width, l.height, h, k, g.width, g.height) : a.drawImage(e, l.x, l.y, l.width, l.height, h, k, g.width,
            g.height)) : !this._texture && l.validRect && (g = this.color, a.fillStyle = "rgba(" + g.r + "," + g.g + "," + g.b + ",1)", a.fillRect(h, k, e.width * b, e.height * c));
        1 === cc.SPRITE_DEBUG_DRAW || this._showNode ? (a.strokeStyle = "rgba(0,255,0,1)", h /= b, k = -(k / c), h = [cc.p(h, k), cc.p(h + d.width, k), cc.p(h + d.width, k - d.height), cc.p(h, k - d.height)], cc._drawingUtil.drawPoly(h, 4, !0)) : 2 === cc.SPRITE_DEBUG_DRAW && (a.strokeStyle = "rgba(0,255,0,1)", b = this._rect, k = -k, h = [cc.p(h, k), cc.p(h + b.width, k), cc.p(h + b.width, k - b.height), cc.p(h, k - b.height)], cc._drawingUtil.drawPoly(h,
            4, !0));
        (this._flippedX || this._flippedY) && a.restore();
        cc.g_NumberOfDraws++
    }
}, delete _p) : (cc.assert("function" === typeof cc._tmp.WebGLSprite, cc._LogInfos.MissingFile, "SpritesWebGL.js"), cc._tmp.WebGLSprite(), delete cc._tmp.WebGLSprite);
cc.assert("function" === typeof cc._tmp.PrototypeSprite, cc._LogInfos.MissingFile, "SpritesPropertyDefine.js");
cc._tmp.PrototypeSprite();
delete cc._tmp.PrototypeSprite;
cc.AnimationFrame = cc.Class.extend({_spriteFrame: null, _delayPerUnit: 0, _userInfo: null, ctor: function (a, b, c) {
    this._spriteFrame = a || null;
    this._delayPerUnit = b || 0;
    this._userInfo = c || null
}, clone: function () {
    var a = new cc.AnimationFrame;
    a.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
    return a
}, copyWithZone: function (a) {
    return cc.clone(this)
}, copy: function (a) {
    a = new cc.AnimationFrame;
    a.initWithSpriteFrame(this._spriteFrame.clone(), this._delayPerUnit, this._userInfo);
    return a
}, initWithSpriteFrame: function (a, b, c) {
    this._spriteFrame = a;
    this._delayPerUnit = b;
    this._userInfo = c;
    return!0
}, getSpriteFrame: function () {
    return this._spriteFrame
}, setSpriteFrame: function (a) {
    this._spriteFrame = a
}, getDelayUnits: function () {
    return this._delayPerUnit
}, setDelayUnits: function (a) {
    this._delayPerUnit = a
}, getUserInfo: function () {
    return this._userInfo
}, setUserInfo: function (a) {
    this._userInfo = a
}});
cc.AnimationFrame.create = function (a, b, c) {
    return new cc.AnimationFrame(a, b, c)
};
cc.Animation = cc.Class.extend({_frames: null, _loops: 0, _restoreOriginalFrame: !1, _duration: 0, _delayPerUnit: 0, _totalDelayUnits: 0, ctor: function (a, b, c) {
    this._frames = [];
    if (void 0 === a)this.initWithSpriteFrames(null, 0); else {
        var d = a[0];
        d && (d instanceof cc.SpriteFrame ? this.initWithSpriteFrames(a, b, c) : d instanceof cc.AnimationFrame && this.initWithAnimationFrames(a, b, c))
    }
}, getFrames: function () {
    return this._frames
}, setFrames: function (a) {
    this._frames = a
}, addSpriteFrame: function (a) {
    var b = new cc.AnimationFrame;
    b.initWithSpriteFrame(a,
        1, null);
    this._frames.push(b);
    this._totalDelayUnits++
}, addSpriteFrameWithFile: function (a) {
    a = cc.textureCache.addImage(a);
    var b = cc.rect(0, 0, 0, 0);
    b.width = a.width;
    b.height = a.height;
    a = cc.SpriteFrame.create(a, b);
    this.addSpriteFrame(a)
}, addSpriteFrameWithTexture: function (a, b) {
    var c = cc.SpriteFrame.create(a, b);
    this.addSpriteFrame(c)
}, initWithAnimationFrames: function (a, b, c) {
    cc.arrayVerifyType(a, cc.AnimationFrame);
    this._delayPerUnit = b;
    this._loops = void 0 === c ? 1 : c;
    this._totalDelayUnits = 0;
    b = this._frames;
    for (c = b.length =
        0; c < a.length; c++) {
        var d = a[c];
        b.push(d);
        this._totalDelayUnits += d.getDelayUnits()
    }
    return!0
}, clone: function () {
    var a = new cc.Animation;
    a.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
    a.setRestoreOriginalFrame(this._restoreOriginalFrame);
    return a
}, copyWithZone: function (a) {
    a = new cc.Animation;
    a.initWithAnimationFrames(this._copyFrames(), this._delayPerUnit, this._loops);
    a.setRestoreOriginalFrame(this._restoreOriginalFrame);
    return a
}, _copyFrames: function () {
    for (var a = [], b = 0; b < this._frames.length; b++)a.push(this._frames[b].clone());
    return a
}, copy: function (a) {
    return this.copyWithZone(null)
}, getLoops: function () {
    return this._loops
}, setLoops: function (a) {
    this._loops = a
}, setRestoreOriginalFrame: function (a) {
    this._restoreOriginalFrame = a
}, getRestoreOriginalFrame: function () {
    return this._restoreOriginalFrame
}, getDuration: function () {
    return this._totalDelayUnits * this._delayPerUnit
}, getDelayPerUnit: function () {
    return this._delayPerUnit
}, setDelayPerUnit: function (a) {
    this._delayPerUnit = a
}, getTotalDelayUnits: function () {
    return this._totalDelayUnits
},
    initWithSpriteFrames: function (a, b, c) {
        cc.arrayVerifyType(a, cc.SpriteFrame);
        this._loops = void 0 === c ? 1 : c;
        this._delayPerUnit = b || 0;
        this._totalDelayUnits = 0;
        b = this._frames;
        b.length = 0;
        if (a) {
            for (c = 0; c < a.length; c++) {
                var d = a[c], e = new cc.AnimationFrame;
                e.initWithSpriteFrame(d, 1, null);
                b.push(e)
            }
            this._totalDelayUnits += a.length
        }
        return!0
    }, retain: function () {
    }, release: function () {
    }});
cc.Animation.create = function (a, b, c) {
    return new cc.Animation(a, b, c)
};
cc.animationCache = {_animations: {}, addAnimation: function (a, b) {
    this._animations[b] = a
}, removeAnimation: function (a) {
    a && this._animations[a] && delete this._animations[a]
}, getAnimation: function (a) {
    return this._animations[a] ? this._animations[a] : null
}, _addAnimationsWithDictionary: function (a, b) {
    var c = a.animations;
    if (c) {
        var d = 1, e = a.properties;
        if (e)for (var d = null != e.format ? parseInt(e.format) : d, e = e.spritesheets, f = cc.spriteFrameCache, g = cc.path, h = 0; h < e.length; h++)f.addSpriteFrames(g.changeBasename(b, e[h]));
        switch (d) {
            case 1:
                this._parseVersion1(c);
                break;
            case 2:
                this._parseVersion2(c);
                break;
            default:
                cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary_2)
        }
    } else cc.log(cc._LogInfos.animationCache__addAnimationsWithDictionary)
}, addAnimations: function (a) {
    cc.assert(a, cc._LogInfos.animationCache_addAnimations_2);
    var b = cc.loader.getRes(a);
    b ? this._addAnimationsWithDictionary(b, a) : cc.log(cc._LogInfos.animationCache_addAnimations)
}, _parseVersion1: function (a) {
    var b = cc.spriteFrameCache, c;
    for (c in a) {
        var d = a[c], e = d.frames, d = parseFloat(d.delay) ||
            0, f = null;
        if (e) {
            for (var f = [], g = 0; g < e.length; g++) {
                var h = b.getSpriteFrame(e[g]);
                if (h) {
                    var k = new cc.AnimationFrame;
                    k.initWithSpriteFrame(h, 1, null);
                    f.push(k)
                } else cc.log(cc._LogInfos.animationCache__parseVersion1_2, c, e[g])
            }
            0 === f.length ? cc.log(cc._LogInfos.animationCache__parseVersion1_3, c) : (f.length != e.length && cc.log(cc._LogInfos.animationCache__parseVersion1_4, c), f = cc.Animation.create(f, d, 1), cc.animationCache.addAnimation(f, c))
        } else cc.log(cc._LogInfos.animationCache__parseVersion1, c)
    }
}, _parseVersion2: function (a) {
    var b =
        cc.spriteFrameCache, c;
    for (c in a) {
        var d = a[c], e = d.loop, f = parseInt(d.loops), e = e ? cc.REPEAT_FOREVER : isNaN(f) ? 1 : f, f = d.restoreOriginalFrame && !0 == d.restoreOriginalFrame ? !0 : !1, g = d.frames;
        if (g) {
            for (var h = [], k = 0; k < g.length; k++) {
                var l = g[k], m = l.spriteframe, n = b.getSpriteFrame(m);
                if (n) {
                    var m = parseFloat(l.delayUnits) || 0, l = l.notification, q = new cc.AnimationFrame;
                    q.initWithSpriteFrame(n, m, l);
                    h.push(q)
                } else cc.log(cc._LogInfos.animationCache__parseVersion2_2, c, m)
            }
            d = parseFloat(d.delayPerUnit) || 0;
            g = new cc.Animation;
            g.initWithAnimationFrames(h,
                d, e);
            g.setRestoreOriginalFrame(f);
            cc.animationCache.addAnimation(g, c)
        } else cc.log(cc._LogInfos.animationCache__parseVersion2, c)
    }
}, _clear: function () {
    this._animations = {}
}};
cc.SpriteFrame = cc.Class.extend({_offset: null, _originalSize: null, _rectInPixels: null, _rotated: !1, _rect: null, _offsetInPixels: null, _originalSizeInPixels: null, _texture: null, _textureFilename: "", _textureLoaded: !1, _eventListeners: null, ctor: function (a, b, c, d, e) {
    this._offset = cc.p(0, 0);
    this._offsetInPixels = cc.p(0, 0);
    this._originalSize = cc.size(0, 0);
    this._rotated = !1;
    this._originalSizeInPixels = cc.size(0, 0);
    this._textureFilename = "";
    this._texture = null;
    this._textureLoaded = !1;
    void 0 !== a && void 0 !== b && (void 0 === c || void 0 ===
        d || void 0 === e ? this.initWithTexture(a, b) : this.initWithTexture(a, b, c, d, e))
}, textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (a, b) {
    null == this._eventListeners && (this._eventListeners = []);
    this._eventListeners.push({eventCallback: a, eventTarget: b})
}, _callLoadedEventCallbacks: function () {
    var a = this._eventListeners;
    if (a) {
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            d.eventCallback.call(d.eventTarget, this)
        }
        a.length = 0
    }
}, getRectInPixels: function () {
    var a = this._rectInPixels;
    return cc.rect(a.x,
        a.y, a.width, a.height)
}, setRectInPixels: function (a) {
    this._rectInPixels || (this._rectInPixels = cc.rect(0, 0, 0, 0));
    this._rectInPixels.x = a.x;
    this._rectInPixels.y = a.y;
    this._rectInPixels.width = a.width;
    this._rectInPixels.height = a.height;
    this._rect = cc.rectPixelsToPoints(a)
}, isRotated: function () {
    return this._rotated
}, setRotated: function (a) {
    this._rotated = a
}, getRect: function () {
    var a = this._rect;
    return cc.rect(a.x, a.y, a.width, a.height)
}, setRect: function (a) {
    this._rect || (this._rect = cc.rect(0, 0, 0, 0));
    this._rect.x = a.x;
    this._rect.y = a.y;
    this._rect.width = a.width;
    this._rect.height = a.height;
    this._rectInPixels = cc.rectPointsToPixels(this._rect)
}, getOffsetInPixels: function () {
    return this._offsetInPixels
}, setOffsetInPixels: function (a) {
    this._offsetInPixels.x = a.x;
    this._offsetInPixels.y = a.y;
    cc._pointPixelsToPointsOut(this._offsetInPixels, this._offset)
}, getOriginalSizeInPixels: function () {
    return this._originalSizeInPixels
}, setOriginalSizeInPixels: function (a) {
    this._originalSizeInPixels.width = a.width;
    this._originalSizeInPixels.height =
        a.height
}, getOriginalSize: function () {
    return this._originalSize
}, setOriginalSize: function (a) {
    this._originalSize.width = a.width;
    this._originalSize.height = a.height
}, getTexture: function () {
    if (this._texture)return this._texture;
    if ("" !== this._textureFilename) {
        var a = cc.textureCache.addImage(this._textureFilename);
        a && (this._textureLoaded = a.isLoaded());
        return a
    }
    return null
}, setTexture: function (a) {
    if (this._texture != a) {
        var b = a.isLoaded();
        this._textureLoaded = b;
        this._texture = a;
        b || a.addLoadedEventListener(function (a) {
            this._textureLoaded = !0;
            if (this._rotated && cc._renderType === cc._RENDER_TYPE_CANVAS) {
                var b = a.getHtmlElementObj(), b = cc.cutRotateImageToCanvas(b, this.getRect()), e = new cc.Texture2D;
                e.initWithElement(b);
                e.handleLoadedTexture();
                this.setTexture(e);
                b = this.getRect();
                this.setRect(cc.rect(0, 0, b.width, b.height))
            }
            b = this._rect;
            0 === b.width && 0 === b.height && (b = a.width, a = a.height, this._rect.width = b, this._rect.height = a, this._rectInPixels = cc.rectPointsToPixels(this._rect), this._originalSizeInPixels.width = this._rectInPixels.width, this._originalSizeInPixels.height =
                this._rectInPixels.height, this._originalSize.width = b, this._originalSize.height = a);
            this._callLoadedEventCallbacks()
        }, this)
    }
}, getOffset: function () {
    return this._offset
}, setOffset: function (a) {
    this._offset.x = a.x;
    this._offset.y = a.y
}, clone: function () {
    var a = new cc.SpriteFrame;
    a.initWithTexture(this._textureFilename, this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
    a.setTexture(this._texture);
    return a
}, copyWithZone: function () {
    var a = new cc.SpriteFrame;
    a.initWithTexture(this._textureFilename,
        this._rectInPixels, this._rotated, this._offsetInPixels, this._originalSizeInPixels);
    a.setTexture(this._texture);
    return a
}, copy: function () {
    return this.copyWithZone()
}, initWithTexture: function (a, b, c, d, e) {
    2 === arguments.length && (b = cc.rectPointsToPixels(b));
    d = d || cc.p(0, 0);
    e = e || b;
    c = c || !1;
    "string" == typeof a ? (this._texture = null, this._textureFilename = a) : a instanceof cc.Texture2D && this.setTexture(a);
    if (a = this.getTexture()) {
        var f, g;
        c ? (f = b.x + b.height, g = b.y + b.width) : (f = b.x + b.width, g = b.y + b.height);
        f > a.width && cc.error(cc._LogInfos.RectWidth,
            a.url);
        g > a.height && cc.error(cc._LogInfos.RectHeight, a.url)
    }
    this._rectInPixels = b;
    this._rect = cc.rectPixelsToPoints(b);
    this._offsetInPixels.x = d.x;
    this._offsetInPixels.y = d.y;
    cc._pointPixelsToPointsOut(d, this._offset);
    this._originalSizeInPixels.width = e.width;
    this._originalSizeInPixels.height = e.height;
    cc._sizePixelsToPointsOut(e, this._originalSize);
    this._rotated = c;
    return!0
}});
cc.SpriteFrame.create = function (a, b, c, d, e) {
    return new cc.SpriteFrame(a, b, c, d, e)
};
cc.SpriteFrame._frameWithTextureForCanvas = function (a, b, c, d, e) {
    var f = new cc.SpriteFrame;
    f._texture = a;
    f._rectInPixels = b;
    f._rect = cc.rectPixelsToPoints(b);
    f._offsetInPixels.x = d.x;
    f._offsetInPixels.y = d.y;
    cc._pointPixelsToPointsOut(f._offsetInPixels, f._offset);
    f._originalSizeInPixels.width = e.width;
    f._originalSizeInPixels.height = e.height;
    cc._sizePixelsToPointsOut(f._originalSizeInPixels, f._originalSize);
    f._rotated = c;
    return f
};
cc.spriteFrameCache = {_CCNS_REG1: /^\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*$/, _CCNS_REG2: /^\s*\{\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*,\s*\{\s*([\-]?\d+[.]?\d*)\s*,\s*([\-]?\d+[.]?\d*)\s*\}\s*\}\s*$/, _spriteFrames: {}, _spriteFramesAliases: {}, _frameConfigCache: {}, _rectFromString: function (a) {
    a = this._CCNS_REG2.exec(a);
    return!a ? cc.rect(0, 0, 0, 0) : cc.rect(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), parseFloat(a[4]))
}, _pointFromString: function (a) {
    a = this._CCNS_REG1.exec(a);
    return!a ? cc.p(0, 0) : cc.p(parseFloat(a[1]), parseFloat(a[2]))
}, _sizeFromString: function (a) {
    a = this._CCNS_REG1.exec(a);
    return!a ? cc.size(0, 0) : cc.size(parseFloat(a[1]), parseFloat(a[2]))
}, _getFrameConfig: function (a) {
    var b = cc.loader.getRes(a);
    cc.assert(b, cc._LogInfos.spriteFrameCache__getFrameConfig_2, a);
    cc.loader.release(a);
    if (b._inited)return this._frameConfigCache[a] = b;
    var c = b.frames, d = b.metadata || b.meta, b = {}, e = {}, f = 0;
    d && (f = d.format, f = 1 >= f.length ? parseInt(f) : f, e.image = d.textureFileName || d.textureFileName ||
        d.image);
    for (var g in c) {
        var h = c[g];
        if (h) {
            d = {};
            if (0 == f) {
                d.rect = cc.rect(h.x, h.y, h.width, h.height);
                d.rotated = !1;
                d.offset = cc.p(h.offsetX, h.offsetY);
                var k = h.originalWidth, h = h.originalHeight;
                (!k || !h) && cc.log(cc._LogInfos.spriteFrameCache__getFrameConfig);
                k = Math.abs(k);
                h = Math.abs(h);
                d.size = cc.size(k, h)
            } else if (1 == f || 2 == f)d.rect = this._rectFromString(h.frame), d.rotated = h.rotated || !1, d.offset = this._pointFromString(h.offset), d.size = this._sizeFromString(h.sourceSize); else if (3 == f) {
                var k = this._sizeFromString(h.spriteSize),
                    l = this._rectFromString(h.textureRect);
                k && (l = cc.rect(l.x, l.y, k.width, k.height));
                d.rect = l;
                d.rotated = h.textureRotated || !1;
                d.offset = this._pointFromString(h.spriteOffset);
                d.size = this._sizeFromString(h.spriteSourceSize);
                d.aliases = h.aliases
            } else k = h.frame, l = h.sourceSize, g = h.filename || g, d.rect = cc.rect(k.x, k.y, k.w, k.h), d.rotated = h.rotated || !1, d.offset = cc.p(0, 0), d.size = cc.size(l.w, l.h);
            b[g] = d
        }
    }
    return this._frameConfigCache[a] = {_inited: !0, frames: b, meta: e}
}, addSpriteFrames: function (a, b) {
    cc.assert(a, cc._LogInfos.spriteFrameCache_addSpriteFrames_2);
    var c = this._frameConfigCache[a] || cc.loader.getRes(a);
    if (c && c.frames) {
        var d = this._frameConfigCache[a] || this._getFrameConfig(a), c = d.frames, d = d.meta;
        b ? b instanceof cc.Texture2D || ("string" == typeof b ? b = cc.textureCache.addImage(b) : cc.assert(0, cc._LogInfos.spriteFrameCache_addSpriteFrames_3)) : (d = cc.path.changeBasename(a, d.image || ".png"), b = cc.textureCache.addImage(d));
        var d = this._spriteFramesAliases, e = this._spriteFrames, f;
        for (f in c) {
            var g = c[f], h = e[f];
            if (!h) {
                h = cc.SpriteFrame.create(b, g.rect, g.rotated, g.offset,
                    g.size);
                if (g = g.aliases)for (var k = 0, l = g.length; k < l; k++) {
                    var m = g[k];
                    d[m] && cc.log(cc._LogInfos.spriteFrameCache_addSpriteFrames, m);
                    d[m] = f
                }
                cc._renderType === cc._RENDER_TYPE_CANVAS && h.isRotated() && h.getTexture().isLoaded() && (g = h.getTexture().getHtmlElementObj(), g = cc.cutRotateImageToCanvas(g, h.getRectInPixels()), k = new cc.Texture2D, k.initWithElement(g), k.handleLoadedTexture(), h.setTexture(k), g = h._rect, h.setRect(cc.rect(0, 0, g.width, g.height)));
                e[f] = h
            }
        }
    }
}, _checkConflict: function (a) {
    a = a.frames;
    for (var b in a)this._spriteFrames[b] &&
    cc.log(cc._LogInfos.spriteFrameCache__checkConflict, b)
}, addSpriteFrame: function (a, b) {
    this._spriteFrames[b] = a
}, removeSpriteFrames: function () {
    this._spriteFrames = {};
    this._spriteFramesAliases = {}
}, removeSpriteFrameByName: function (a) {
    a && (this._spriteFramesAliases[a] && delete this._spriteFramesAliases[a], this._spriteFrames[a] && delete this._spriteFrames[a])
}, removeSpriteFramesFromFile: function (a) {
    var b = this._spriteFrames, c = this._spriteFramesAliases;
    if (a = this._frameConfigCache[a]) {
        a = a.frames;
        for (var d in a)if (b[d]) {
            delete b[d];
            for (var e in c)c[e] == d && delete c[e]
        }
    }
}, removeSpriteFramesFromTexture: function (a) {
    var b = this._spriteFrames, c = this._spriteFramesAliases, d;
    for (d in b) {
        var e = b[d];
        if (e && e.getTexture() == a) {
            delete b[d];
            for (var f in c)c[f] == d && delete c[f]
        }
    }
}, getSpriteFrame: function (a) {
    var b = this._spriteFrames[a];
    if (!b) {
        var c = this._spriteFramesAliases[a];
        c && ((b = this._spriteFrames[c.toString()]) || delete this._spriteFramesAliases[a])
    }
    b || cc.log(cc._LogInfos.spriteFrameCache_getSpriteFrame, a);
    return b
}, _clear: function () {
    this._spriteFrames =
    {};
    this._spriteFramesAliases = {};
    this._frameConfigCache = {}
}};
cc.g_NumberOfDraws = 0;
cc.GLToClipTransform = function (a) {
    var b = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, b);
    var c = new cc.kmMat4;
    cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW, c);
    cc.kmMat4Multiply(a, b, c)
};
cc.Director = cc.Class.extend({_landscape: !1, _nextDeltaTimeZero: !1, _paused: !1, _purgeDirectorInNextLoop: !1, _sendCleanupToScene: !1, _animationInterval: 0, _oldAnimationInterval: 0, _projection: 0, _accumDt: 0, _contentScaleFactor: 1, _displayStats: !1, _deltaTime: 0, _frameRate: 0, _FPSLabel: null, _SPFLabel: null, _drawsLabel: null, _winSizeInPoints: null, _lastUpdate: null, _nextScene: null, _notificationNode: null, _openGLView: null, _scenesStack: null, _projectionDelegate: null, _runningScene: null, _frames: 0, _totalFrames: 0, _secondsPerFrame: 0,
    _dirtyRegion: null, _scheduler: null, _actionManager: null, _eventProjectionChanged: null, _eventAfterDraw: null, _eventAfterVisit: null, _eventAfterUpdate: null, ctor: function () {
        var a = this;
        a._lastUpdate = Date.now();
        cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
            a._lastUpdate = Date.now()
        })
    }, init: function () {
        this._oldAnimationInterval = this._animationInterval = 1 / cc.defaultFPS;
        this._scenesStack = [];
        this._projection = cc.Director.PROJECTION_DEFAULT;
        this._projectionDelegate = null;
        this._frameRate = this._accumDt =
            0;
        this._displayStats = !1;
        this._totalFrames = this._frames = 0;
        this._lastUpdate = Date.now();
        this._purgeDirectorInNextLoop = this._paused = !1;
        this._winSizeInPoints = cc.size(0, 0);
        this._openGLView = null;
        this._contentScaleFactor = 1;
        this._scheduler = new cc.Scheduler;
        this._actionManager = cc.ActionManager ? new cc.ActionManager : null;
        this._scheduler.scheduleUpdateForTarget(this._actionManager, cc.Scheduler.PRIORITY_SYSTEM, !1);
        this._eventAfterDraw = new cc.EventCustom(cc.Director.EVENT_AFTER_DRAW);
        this._eventAfterDraw.setUserData(this);
        this._eventAfterVisit = new cc.EventCustom(cc.Director.EVENT_AFTER_VISIT);
        this._eventAfterVisit.setUserData(this);
        this._eventAfterUpdate = new cc.EventCustom(cc.Director.EVENT_AFTER_UPDATE);
        this._eventAfterUpdate.setUserData(this);
        this._eventProjectionChanged = new cc.EventCustom(cc.Director.EVENT_PROJECTION_CHANGED);
        this._eventProjectionChanged.setUserData(this);
        return!0
    }, calculateDeltaTime: function () {
        var a = Date.now();
        this._nextDeltaTimeZero ? (this._deltaTime = 0, this._nextDeltaTimeZero = !1) : this._deltaTime =
            (a - this._lastUpdate) / 1E3;
        0 < cc.game.config[cc.game.CONFIG_KEY.debugMode] && 0.2 < this._deltaTime && (this._deltaTime = 1 / 60);
        this._lastUpdate = a
    }, drawScene: function () {
        this.calculateDeltaTime();
        this._paused || (this._scheduler.update(this._deltaTime), cc.eventManager.dispatchEvent(this._eventAfterUpdate));
        this._clear();
        this._nextScene && this.setNextScene();
        this._beforeVisitScene && this._beforeVisitScene();
        this._runningScene && (this._runningScene.visit(), cc.eventManager.dispatchEvent(this._eventAfterVisit));
        this._notificationNode &&
        this._notificationNode.visit();
        this._displayStats && this._showStats();
        this._afterVisitScene && this._afterVisitScene();
        cc.eventManager.dispatchEvent(this._eventAfterDraw);
        this._totalFrames++;
        this._displayStats && this._calculateMPF()
    }, _beforeVisitScene: null, _afterVisitScene: null, end: function () {
        this._purgeDirectorInNextLoop = !0
    }, getContentScaleFactor: function () {
        return this._contentScaleFactor
    }, getNotificationNode: function () {
        return this._notificationNode
    }, getWinSize: function () {
        return this._winSizeInPoints
    },
    getWinSizeInPixels: function () {
        return cc.size(this._winSizeInPoints.width * this._contentScaleFactor, this._winSizeInPoints.height * this._contentScaleFactor)
    }, pause: function () {
        this._paused || (this._oldAnimationInterval = this._animationInterval, this.setAnimationInterval(0.25), this._paused = !0)
    }, popScene: function () {
        cc.assert(this._runningScene, cc._LogInfos.Director_popScene);
        this._scenesStack.pop();
        var a = this._scenesStack.length;
        0 == a ? this.end() : (this._sendCleanupToScene = !0, this._nextScene = this._scenesStack[a -
            1])
    }, purgeCachedData: function () {
        cc.animationCache._clear();
        cc.spriteFrameCache._clear();
        cc.textureCache._clear()
    }, purgeDirector: function () {
        this.getScheduler().unscheduleAllCallbacks();
        cc.eventManager && cc.eventManager.setEnabled(!1);
        this._runningScene && (this._runningScene.onExitTransitionDidStart(), this._runningScene.onExit(), this._runningScene.cleanup());
        this._nextScene = this._runningScene = null;
        this._scenesStack.length = 0;
        this.stopAnimation();
        this.purgeCachedData();
        cc.checkGLErrorDebug()
    }, pushScene: function (a) {
        cc.assert(a,
            cc._LogInfos.Director_pushScene);
        this._sendCleanupToScene = !1;
        this._scenesStack.push(a);
        this._nextScene = a
    }, runScene: function (a) {
        cc.assert(a, cc._LogInfos.Director_pushScene);
        if (this._runningScene) {
            var b = this._scenesStack.length;
            0 === b ? (this._sendCleanupToScene = !0, this._scenesStack[b] = a) : (this._sendCleanupToScene = !0, this._scenesStack[b - 1] = a);
            this._nextScene = a
        } else this.pushScene(a), this.startAnimation()
    }, resume: function () {
        this._paused && (this.setAnimationInterval(this._oldAnimationInterval), (this._lastUpdate =
            Date.now()) || cc.log(cc._LogInfos.Director_resume), this._paused = !1, this._deltaTime = 0)
    }, setContentScaleFactor: function (a) {
        a != this._contentScaleFactor && (this._contentScaleFactor = a, this._createStatsLabel())
    }, setDefaultValues: function () {
    }, setNextDeltaTimeZero: function (a) {
        this._nextDeltaTimeZero = a
    }, setNextScene: function () {
        var a = !1, b = !1;
        cc.TransitionScene && (a = this._runningScene ? this._runningScene instanceof cc.TransitionScene : !1, b = this._nextScene ? this._nextScene instanceof cc.TransitionScene : !1);
        if (!b) {
            if (b =
                this._runningScene)b.onExitTransitionDidStart(), b.onExit();
            this._sendCleanupToScene && b && b.cleanup()
        }
        this._runningScene = this._nextScene;
        this._nextScene = null;
        !a && null != this._runningScene && (this._runningScene.onEnter(), this._runningScene.onEnterTransitionDidFinish())
    }, setNotificationNode: function (a) {
        this._notificationNode = a
    }, getDelegate: function () {
        return this._projectionDelegate
    }, setDelegate: function (a) {
        this._projectionDelegate = a
    }, _showStats: function () {
        this._frames++;
        this._accumDt += this._deltaTime;
        this._FPSLabel &&
        this._SPFLabel && this._drawsLabel ? (this._accumDt > cc.DIRECTOR_FPS_INTERVAL && (this._SPFLabel.string = this._secondsPerFrame.toFixed(3), this._frameRate = this._frames / this._accumDt, this._accumDt = this._frames = 0, this._FPSLabel.string = this._frameRate.toFixed(1), this._drawsLabel.string = (0 | cc.g_NumberOfDraws).toString()), this._FPSLabel.visit(), this._SPFLabel.visit(), this._drawsLabel.visit()) : this._createStatsLabel();
        cc.g_NumberOfDraws = 0
    }, isSendCleanupToScene: function () {
        return this._sendCleanupToScene
    }, getRunningScene: function () {
        return this._runningScene
    },
    getAnimationInterval: function () {
        return this._animationInterval
    }, isDisplayStats: function () {
        return this._displayStats
    }, setDisplayStats: function (a) {
        this._displayStats = a
    }, getSecondsPerFrame: function () {
        return this._secondsPerFrame
    }, isNextDeltaTimeZero: function () {
        return this._nextDeltaTimeZero
    }, isPaused: function () {
        return this._paused
    }, getTotalFrames: function () {
        return this._totalFrames
    }, popToRootScene: function () {
        this.popToSceneStackLevel(1)
    }, popToSceneStackLevel: function (a) {
        cc.assert(this._runningScene,
            cc._LogInfos.Director_popToSceneStackLevel_2);
        var b = this._scenesStack, c = b.length;
        if (0 == c)this.end(); else if (!(a > c)) {
            for (; c > a;) {
                var d = b.pop();
                d.running && (d.onExitTransitionDidStart(), d.onExit());
                d.cleanup();
                c--
            }
            this._nextScene = b[b.length - 1];
            this._sendCleanupToScene = !1
        }
    }, getScheduler: function () {
        return this._scheduler
    }, setScheduler: function (a) {
        this._scheduler != a && (this._scheduler = a)
    }, getActionManager: function () {
        return this._actionManager
    }, setActionManager: function (a) {
        this._actionManager != a && (this._actionManager =
            a)
    }, getDeltaTime: function () {
        return this._deltaTime
    }, _createStatsLabel: null, _calculateMPF: function () {
        this._secondsPerFrame = (Date.now() - this._lastUpdate) / 1E3
    }});
cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";
cc.DisplayLinkDirector = cc.Director.extend({invalid: !1, startAnimation: function () {
    this._nextDeltaTimeZero = !0;
    this.invalid = !1
}, mainLoop: function () {
    this._purgeDirectorInNextLoop ? (this._purgeDirectorInNextLoop = !1, this.purgeDirector()) : this.invalid || this.drawScene()
}, stopAnimation: function () {
    this.invalid = !0
}, setAnimationInterval: function (a) {
    this._animationInterval = a;
    this.invalid || (this.stopAnimation(), this.startAnimation())
}});
cc.Director.sharedDirector = null;
cc.Director.firstUseDirector = !0;
cc.Director._getInstance = function () {
    cc.Director.firstUseDirector && (cc.Director.firstUseDirector = !1, cc.Director.sharedDirector = new cc.DisplayLinkDirector, cc.Director.sharedDirector.init());
    return cc.Director.sharedDirector
};
cc.defaultFPS = 60;
cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D;
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.Director.prototype, _p.setProjection = function (a) {
    this._projection = a;
    cc.eventManager.dispatchEvent(this._eventProjectionChanged)
}, _p.setDepthTest = function () {
}, _p.setOpenGLView = function (a) {
    this._winSizeInPoints.width = cc._canvas.width;
    this._winSizeInPoints.height = cc._canvas.height;
    this._openGLView = a || cc.view;
    cc.eventManager && cc.eventManager.setEnabled(!0)
}, _p._clear = function () {
    var a = this._openGLView.getViewPortRect();
    cc._renderContext.clearRect(-a.x, a.y,
        a.width, -a.height)
}, _p._createStatsLabel = function () {
    var a = 0, a = this._winSizeInPoints.width > this._winSizeInPoints.height ? 0 | 24 * (this._winSizeInPoints.height / 320) : 0 | 24 * (this._winSizeInPoints.width / 320);
    this._FPSLabel = cc.LabelTTF.create("000.0", "Arial", a);
    this._SPFLabel = cc.LabelTTF.create("0.000", "Arial", a);
    this._drawsLabel = cc.LabelTTF.create("0000", "Arial", a);
    a = cc.DIRECTOR_STATS_POSITION;
    this._drawsLabel.setPosition(this._drawsLabel.width / 2 + a.x, 5 * this._drawsLabel.height / 2 + a.y);
    this._SPFLabel.setPosition(this._SPFLabel.width /
        2 + a.x, 3 * this._SPFLabel.height / 2 + a.y);
    this._FPSLabel.setPosition(this._FPSLabel.width / 2 + a.x, this._FPSLabel.height / 2 + a.y)
}, _p.getVisibleSize = function () {
    return this.getWinSize()
}, _p.getVisibleOrigin = function () {
    return cc.p(0, 0)
}) : (cc.Director._fpsImage = new Image, cc._addEventListener(cc.Director._fpsImage, "load", function () {
    cc.Director._fpsImageLoaded = !0
}), cc._fpsImage && (cc.Director._fpsImage.src = cc._fpsImage), cc.assert("function" === typeof cc._tmp.DirectorWebGL, cc._LogInfos.MissingFile, "CCDirectorWebGL.js"),
    cc._tmp.DirectorWebGL(), delete cc._tmp.DirectorWebGL);
cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;
cc.arrayVerifyType = function (a, b) {
    if (a && 0 < a.length)for (var c = 0; c < a.length; c++)if (!(a[c]instanceof b))return cc.log(cc._LogInfos.arrayVerifyType), !1;
    return!0
};
cc.arrayRemoveObject = function (a, b) {
    for (var c = 0, d = a.length; c < d; c++)if (a[c] == b) {
        a.splice(c, 1);
        break
    }
};
cc.arrayRemoveArray = function (a, b) {
    for (var c = 0, d = b.length; c < d; c++)cc.arrayRemoveObject(a, b[c])
};
cc.arrayAppendObjectsToIndex = function (a, b, c) {
    a.splice.apply(a, [c, 0].concat(b));
    return a
};
cc.ListEntry = function (a, b, c, d, e, f) {
    this.prev = a;
    this.next = b;
    this.target = c;
    this.priority = d;
    this.paused = e;
    this.markedForDeletion = f
};
cc.HashUpdateEntry = function (a, b, c, d) {
    this.list = a;
    this.entry = b;
    this.target = c;
    this.hh = d
};
cc.HashTimerEntry = function (a, b, c, d, e, f, g) {
    this.timers = a;
    this.target = b;
    this.timerIndex = c;
    this.currentTimer = d;
    this.currentTimerSalvaged = e;
    this.paused = f;
    this.hh = g
};
cc.Timer = cc.Class.extend({_interval: 0, _callback: null, _target: null, _elapsed: 0, _runForever: !1, _useDelay: !1, _timesExecuted: 0, _repeat: 0, _delay: 0, getInterval: function () {
    return this._interval
}, setInterval: function (a) {
    this._interval = a
}, getCallback: function () {
    return this._callback
}, ctor: function (a, b, c, d, e) {
    this._target = a;
    this._callback = b;
    this._elapsed = -1;
    this._interval = c || 0;
    this._delay = e || 0;
    this._useDelay = 0 < this._delay;
    this._repeat = null == d ? cc.REPEAT_FOREVER : d;
    this._runForever = this._repeat == cc.REPEAT_FOREVER
},
    _doCallback: function () {
        if ("string" == typeof this._callback)this._target[this._callback](this._elapsed); else this._callback.call(this._target, this._elapsed)
    }, update: function (a) {
        if (-1 == this._elapsed)this._timesExecuted = this._elapsed = 0; else {
            var b = this._target, c = this._callback;
            this._elapsed += a;
            this._runForever && !this._useDelay ? this._elapsed >= this._interval && (b && c && this._doCallback(), this._elapsed = 0) : (this._useDelay ? this._elapsed >= this._delay && (b && c && this._doCallback(), this._elapsed -= this._delay, this._timesExecuted +=
                1, this._useDelay = !1) : this._elapsed >= this._interval && (b && c && this._doCallback(), this._elapsed = 0, this._timesExecuted += 1), this._timesExecuted > this._repeat && cc.director.getScheduler().unscheduleCallbackForTarget(b, c))
        }
    }});
cc.Scheduler = cc.Class.extend({_timeScale: 1, _updates: null, _hashForUpdates: null, _arrayForUpdates: null, _hashForTimers: null, _arrayForTimes: null, _currentTarget: null, _currentTargetSalvaged: !1, _updateHashLocked: !1, ctor: function () {
    this._timeScale = 1;
    this._updates = [
        [],
        [],
        []
    ];
    this._hashForUpdates = {};
    this._arrayForUpdates = [];
    this._hashForTimers = {};
    this._arrayForTimers = [];
    this._currentTarget = null;
    this._updateHashLocked = this._currentTargetSalvaged = !1
}, _removeHashElement: function (a) {
    delete this._hashForTimers[a.target.__instanceId];
    cc.arrayRemoveObject(this._arrayForTimers, a);
    a.Timer = null;
    a.target = null
}, _removeUpdateFromHash: function (a) {
    if (a = this._hashForUpdates[a.target.__instanceId])cc.arrayRemoveObject(a.list, a.entry), delete this._hashForUpdates[a.target.__instanceId], cc.arrayRemoveObject(this._arrayForUpdates, a), a.entry = null, a.target = null
}, _priorityIn: function (a, b, c, d) {
    d = new cc.ListEntry(null, null, b, c, d, !1);
    if (a) {
        for (var e = a.length - 1, f = 0; f <= e && !(c < a[f].priority); f++);
        a.splice(f, 0, d)
    } else a = [], a.push(d);
    c = new cc.HashUpdateEntry(a,
        d, b, null);
    this._arrayForUpdates.push(c);
    this._hashForUpdates[b.__instanceId] = c;
    return a
}, _appendIn: function (a, b, c) {
    c = new cc.ListEntry(null, null, b, 0, c, !1);
    a.push(c);
    a = new cc.HashUpdateEntry(a, c, b, null);
    this._arrayForUpdates.push(a);
    this._hashForUpdates[b.__instanceId] = a
}, setTimeScale: function (a) {
    this._timeScale = a
}, getTimeScale: function () {
    return this._timeScale
}, update: function (a) {
    var b = this._updates, c = this._arrayForTimers, d, e, f;
    this._updateHashLocked = !0;
    1 != this._timeScale && (a *= this._timeScale);
    e = 0;
    for (f = b.length; e < f && 0 <= e; e++)for (var g = this._updates[e], h = 0, k = g.length; h < k; h++)d = g[h], !d.paused && !d.markedForDeletion && d.target.update(a);
    e = 0;
    for (f = c.length; e < f; e++) {
        d = c[e];
        if (!d)break;
        this._currentTarget = d;
        this._currentTargetSalvaged = !1;
        if (!d.paused)for (d.timerIndex = 0; d.timerIndex < d.timers.length; d.timerIndex++)d.currentTimer = d.timers[d.timerIndex], d.currentTimerSalvaged = !1, d.currentTimer.update(a), d.currentTimer = null;
        this._currentTargetSalvaged && 0 == d.timers.length && (this._removeHashElement(d), e--)
    }
    e =
        0;
    for (f = b.length; e < f; e++) {
        g = this._updates[e];
        h = 0;
        for (k = g.length; h < k;) {
            d = g[h];
            if (!d)break;
            d.markedForDeletion ? this._removeUpdateFromHash(d) : h++
        }
    }
    this._updateHashLocked = !1;
    this._currentTarget = null
}, scheduleCallbackForTarget: function (a, b, c, d, e, f) {
    cc.assert(b, cc._LogInfos.Scheduler_scheduleCallbackForTarget_2);
    cc.assert(a, cc._LogInfos.Scheduler_scheduleCallbackForTarget_3);
    c = c || 0;
    d = null == d ? cc.REPEAT_FOREVER : d;
    e = e || 0;
    f = f || !1;
    var g = this._hashForTimers[a.__instanceId];
    g || (g = new cc.HashTimerEntry(null, a,
        0, null, null, f, null), this._arrayForTimers.push(g), this._hashForTimers[a.__instanceId] = g);
    if (null == g.timers)g.timers = []; else for (var h = 0; h < g.timers.length; h++)if (f = g.timers[h], b == f._callback) {
        cc.log(cc._LogInfos.Scheduler_scheduleCallbackForTarget, f.getInterval().toFixed(4), c.toFixed(4));
        f._interval = c;
        return
    }
    f = new cc.Timer(a, b, c, d, e);
    g.timers.push(f)
}, scheduleUpdateForTarget: function (a, b, c) {
    if (null !== a) {
        var d = this._updates, e = this._hashForUpdates[a.__instanceId];
        e ? e.entry.markedForDeletion = !1 : 0 == b ? this._appendIn(d[1],
            a, c) : 0 > b ? d[0] = this._priorityIn(d[0], a, b, c) : d[2] = this._priorityIn(d[2], a, b, c)
    }
}, unscheduleCallbackForTarget: function (a, b) {
    if (!(null == a || null == b)) {
        var c = this._hashForTimers[a.__instanceId];
        if (c)for (var d = c.timers, e = 0, f = d.length; e < f; e++) {
            var g = d[e];
            if (b == g._callback) {
                g == c.currentTimer && !c.currentTimerSalvaged && (c.currentTimerSalvaged = !0);
                d.splice(e, 1);
                c.timerIndex >= e && c.timerIndex--;
                0 == d.length && (this._currentTarget == c ? this._currentTargetSalvaged = !0 : this._removeHashElement(c));
                break
            }
        }
    }
}, unscheduleUpdateForTarget: function (a) {
    null !=
    a && (a = this._hashForUpdates[a.__instanceId], null != a && (this._updateHashLocked ? a.entry.markedForDeletion = !0 : this._removeUpdateFromHash(a.entry)))
}, unscheduleAllCallbacksForTarget: function (a) {
    if (null != a) {
        var b = this._hashForTimers[a.__instanceId];
        if (b) {
            var c = b.timers;
            !b.currentTimerSalvaged && 0 <= c.indexOf(b.currentTimer) && (b.currentTimerSalvaged = !0);
            c.length = 0;
            this._currentTarget == b ? this._currentTargetSalvaged = !0 : this._removeHashElement(b)
        }
        this.unscheduleUpdateForTarget(a)
    }
}, unscheduleAllCallbacks: function () {
    this.unscheduleAllCallbacksWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
},
    unscheduleAllCallbacksWithMinPriority: function (a) {
        for (var b = this._arrayForTimers, c = this._updates, d = 0, e = b.length; d < e; d++)this.unscheduleAllCallbacksForTarget(b[d].target);
        for (d = 2; 0 <= d; d--)if (!(1 == d && 0 < a || 0 == d && 0 <= a))for (var b = c[d], e = 0, f = b.length; e < f; e++)this.unscheduleUpdateForTarget(b[e].target)
    }, pauseAllTargets: function () {
        return this.pauseAllTargetsWithMinPriority(cc.Scheduler.PRIORITY_SYSTEM)
    }, pauseAllTargetsWithMinPriority: function (a) {
        a = [];
        for (var b, c = this._arrayForTimers, d = this._updates, e = 0, f =
            c.length; e < f; e++)if (b = c[e])b.paused = !0, a.push(b.target);
        e = 0;
        for (f = d.length; e < f; e++)for (var c = d[e], g = 0, h = c.length; g < h; g++)if (b = c[g])b.paused = !0, a.push(b.target);
        return a
    }, resumeTargets: function (a) {
        if (a)for (var b = 0; b < a.length; b++)this.resumeTarget(a[b])
    }, pauseTarget: function (a) {
        cc.assert(a, cc._LogInfos.Scheduler_pauseTarget);
        var b = this._hashForTimers[a.__instanceId];
        b && (b.paused = !0);
        if (a = this._hashForUpdates[a.__instanceId])a.entry.paused = !0
    }, resumeTarget: function (a) {
        cc.assert(a, cc._LogInfos.Scheduler_resumeTarget);
        var b = this._hashForTimers[a.__instanceId];
        b && (b.paused = !1);
        if (a = this._hashForUpdates[a.__instanceId])a.entry.paused = !1
    }, isTargetPaused: function (a) {
        cc.assert(a, cc._LogInfos.Scheduler_isTargetPaused);
        return(a = this._hashForTimers[a.__instanceId]) ? a.paused : !1
    }});
cc.Scheduler.PRIORITY_SYSTEM = -2147483648;
cc._tmp.PrototypeLabelTTF = function () {
    var a = cc.LabelTTF.prototype;
    cc.defineGetterSetter(a, "color", a.getColor, a.setColor);
    cc.defineGetterSetter(a, "opacity", a.getOpacity, a.setOpacity);
    cc.defineGetterSetter(a, "string", a.getString, a.setString);
    cc.defineGetterSetter(a, "textAlign", a.getHorizontalAlignment, a.setHorizontalAlignment);
    cc.defineGetterSetter(a, "verticalAlign", a.getVerticalAlignment, a.setVerticalAlignment);
    cc.defineGetterSetter(a, "fontSize", a.getFontSize, a.setFontSize);
    cc.defineGetterSetter(a,
        "fontName", a.getFontName, a.setFontName);
    cc.defineGetterSetter(a, "font", a._getFont, a._setFont);
    cc.defineGetterSetter(a, "boundingWidth", a._getBoundingWidth, a._setBoundingWidth);
    cc.defineGetterSetter(a, "boundingHeight", a._getBoundingHeight, a._setBoundingHeight);
    cc.defineGetterSetter(a, "fillStyle", a._getFillStyle, a.setFontFillColor);
    cc.defineGetterSetter(a, "strokeStyle", a._getStrokeStyle, a._setStrokeStyle);
    cc.defineGetterSetter(a, "lineWidth", a._getLineWidth, a._setLineWidth);
    cc.defineGetterSetter(a, "shadowOffsetX",
        a._getShadowOffsetX, a._setShadowOffsetX);
    cc.defineGetterSetter(a, "shadowOffsetY", a._getShadowOffsetY, a._setShadowOffsetY);
    cc.defineGetterSetter(a, "shadowOpacity", a._getShadowOpacity, a._setShadowOpacity);
    cc.defineGetterSetter(a, "shadowBlur", a._getShadowBlur, a._setShadowBlur)
};
cc.LabelTTF = cc.Sprite.extend({_dimensions: null, _hAlignment: cc.TEXT_ALIGNMENT_CENTER, _vAlignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP, _fontName: null, _fontSize: 0, _string: "", _originalText: null, _isMultiLine: !1, _fontStyleStr: null, _shadowEnabled: !1, _shadowOffset: null, _shadowOpacity: 0, _shadowBlur: 0, _shadowColorStr: null, _strokeEnabled: !1, _strokeColor: null, _strokeSize: 0, _strokeColorStr: null, _textFillColor: null, _fillColorStr: null, _strokeShadowOffsetX: 0, _strokeShadowOffsetY: 0, _needUpdateTexture: !1, _labelCanvas: null,
    _labelContext: null, _lineWidths: null, _className: "LabelTTF", ctor: function (a, b, c, d, e, f) {
        cc.Sprite.prototype.ctor.call(this);
        this._dimensions = cc.size(0, 0);
        this._hAlignment = cc.TEXT_ALIGNMENT_LEFT;
        this._vAlignment = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = !1;
        this._fontStyleStr = "";
        this._fontName = "Arial";
        this._shadowEnabled = this._isMultiLine = !1;
        this._shadowOffset = cc.p(0, 0);
        this._shadowBlur = this._shadowOpacity = 0;
        this._shadowColorStr = "rgba(128, 128, 128, 0.5)";
        this._strokeEnabled = !1;
        this._strokeColor =
            cc.color(255, 255, 255, 255);
        this._strokeSize = 0;
        this._strokeColorStr = "";
        this._textFillColor = cc.color(255, 255, 255, 255);
        this._fillColorStr = "rgba(255,255,255,1)";
        this._strokeShadowOffsetY = this._strokeShadowOffsetX = 0;
        this._needUpdateTexture = !1;
        this._lineWidths = [];
        this._setColorsString();
        b && b instanceof cc.FontDefinition ? this.initWithStringAndTextDefinition(a, b) : cc.LabelTTF.prototype.initWithString.call(this, a, b, c, d, e, f)
    }, init: function () {
        return this.initWithString(" ", this._fontName, this._fontSize)
    }, _measureConfig: function () {
        this._getLabelContext().font =
            this._fontStyleStr
    }, _measure: function (a) {
        return this._getLabelContext().measureText(a).width
    }, _checkNextline: function (a, b) {
        var c = this._measure(a), d = Math.floor(a.length * b / c), e = a.indexOf("\n");
        if (0.8 * d >= e && 0 < e)return e + 1;
        if (c < b)return a.length;
        for (var c = !1, f = b + 1, e = -1, g = d, h, k = cc.LabelTTF._checkRegEx, l = cc.LabelTTF._reverseCheckRegEx, m = cc.LabelTTF._checkEnRegEx, n = a.substr(d); h = k.exec(n);) {
            g += h[0].length;
            f = a.substr(0, g);
            f = this._measure(f);
            if ("\n" == h[2] && f < b) {
                c = !0;
                e = g;
                break
            }
            if (f > b) {
                -1 != e && (c = !0);
                break
            }
            e =
                g;
            n = a.substr(g)
        }
        if (c)return e;
        n = a.substr(0, d);
        for (e = d; h = l.exec(n);)if (e = h[1].length, n = h[1], f = this._measure(n), f < b) {
            m.test(h[2]) && e++;
            break
        }
        return e || 1
    }, description: function () {
        return"\x3ccc.LabelTTF | FontName \x3d" + this._fontName + " FontSize \x3d " + this._fontSize.toFixed(1) + "\x3e"
    }, setColor: null, _setColorsString: null, updateDisplayedColor: null, setOpacity: null, updateDisplayedOpacity: null, updateDisplayedOpacityForCanvas: function (a) {
        cc.NodeRGBA.prototype.updateDisplayedOpacity.call(this, a);
        this._setColorsString()
    },
    getString: function () {
        return this._string
    }, getHorizontalAlignment: function () {
        return this._hAlignment
    }, getVerticalAlignment: function () {
        return this._vAlignment
    }, getDimensions: function () {
        return cc.size(this._dimensions.width, this._dimensions.height)
    }, getFontSize: function () {
        return this._fontSize
    }, getFontName: function () {
        return this._fontName
    }, initWithString: function (a, b, c, d, e, f) {
        a = a ? a + "" : "";
        c = c || 16;
        d = d || cc.size(0, c);
        e = e || cc.TEXT_ALIGNMENT_LEFT;
        f = f || cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this._opacityModifyRGB = !1;
        this._dimensions = cc.size(d.width, d.height);
        this._fontName = b || "Arial";
        this._hAlignment = e;
        this._vAlignment = f;
        this._fontSize = c;
        this._fontStyleStr = this._fontSize + "px '" + b + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(b, this._fontSize);
        this.string = a;
        this._setColorsString();
        this._updateTexture();
        this._needUpdateTexture = !1;
        return!0
    }, initWithStringAndTextDefinition: null, setTextDefinition: function (a) {
        a && this._updateWithTextDefinition(a, !0)
    }, getTextDefinition: function () {
        return this._prepareTextDefinition(!1)
    },
    enableShadow: function (a, b, c, d) {
        c = c || 0.5;
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        var e = this._shadowOffset;
        if (e && e.x != a || e._y != b)e.x = a, e.y = b;
        this._shadowOpacity != c && (this._shadowOpacity = c);
        this._setColorsString();
        this._shadowBlur != d && (this._shadowBlur = d);
        this._needUpdateTexture = !0
    }, _getShadowOffsetX: function () {
        return this._shadowOffset.x
    }, _setShadowOffsetX: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowOffset.x != a && (this._shadowOffset.x = a, this._needUpdateTexture = !0)
    }, _getShadowOffsetY: function () {
        return this._shadowOffset._y
    }, _setShadowOffsetY: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowOffset._y != a && (this._shadowOffset._y = a, this._needUpdateTexture = !0)
    }, _getShadowOffset: function () {
        return cc.p(this._shadowOffset.x, this._shadowOffset.y)
    }, _setShadowOffset: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        if (this._shadowOffset.x != a.x || this._shadowOffset.y != a.y)this._shadowOffset.x = a.x, this._shadowOffset.y = a.y, this._needUpdateTexture = !0
    }, _getShadowOpacity: function () {
        return this._shadowOpacity
    }, _setShadowOpacity: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowOpacity != a && (this._shadowOpacity = a, this._setColorsString(), this._needUpdateTexture = !0)
    }, _getShadowBlur: function () {
        return this._shadowBlur
    }, _setShadowBlur: function (a) {
        !1 === this._shadowEnabled && (this._shadowEnabled = !0);
        this._shadowBlur != a && (this._shadowBlur = a, this._needUpdateTexture = !0)
    }, disableShadow: function () {
        this._shadowEnabled && (this._shadowEnabled = !1, this._needUpdateTexture = !0)
    }, enableStroke: function (a, b) {
        !1 === this._strokeEnabled && (this._strokeEnabled = !0);
        var c = this._strokeColor;
        if (c.r !== a.r || c.g !== a.g || c.b !== a.b)c.r = a.r, c.g = a.g, c.b = a.b, this._setColorsString();
        this._strokeSize !== b && (this._strokeSize = b || 0);
        this._needUpdateTexture = !0
    }, _getStrokeStyle: function () {
        return this._strokeColor
    }, _setStrokeStyle: function (a) {
        !1 === this._strokeEnabled && (this._strokeEnabled = !0);
        var b = this._strokeColor;
        if (b.r !== a.r || b.g !== a.g || b.b !== a.b)b.r = a.r, b.g = a.g, b.b =
            a.b, this._setColorsString(), this._needUpdateTexture = !0
    }, _getLineWidth: function () {
        return this._strokeSize
    }, _setLineWidth: function (a) {
        !1 === this._strokeEnabled && (this._strokeEnabled = !0);
        this._strokeSize !== a && (this._strokeSize = a || 0, this._needUpdateTexture = !0)
    }, disableStroke: function () {
        this._strokeEnabled && (this._strokeEnabled = !1, this._needUpdateTexture = !0)
    }, setFontFillColor: null, _getFillStyle: function () {
        return this._textFillColor
    }, _updateWithTextDefinition: function (a, b) {
        a.fontDimensions ? (this._dimensions.width =
            a.boundingWidth, this._dimensions.height = a.boundingHeight) : (this._dimensions.width = 0, this._dimensions.height = 0);
        this._hAlignment = a.textAlign;
        this._vAlignment = a.verticalAlign;
        this._fontName = a.fontName;
        this._fontSize = a.fontSize || 12;
        this._fontStyleStr = this._fontSize + "px '" + this._fontName + "'";
        this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize);
        a.shadowEnabled && this.enableShadow(a.shadowOffsetX, a.shadowOffsetY, a.shadowOpacity, a.shadowBlur);
        a.strokeEnabled && this.enableStroke(a.strokeStyle,
            a.lineWidth);
        this.setFontFillColor(a.fillStyle);
        b && this._updateTexture()
    }, _prepareTextDefinition: function (a) {
        var b = new cc.FontDefinition;
        a ? (b.fontSize = this._fontSize, b.boundingWidth = cc.contentScaleFactor() * this._dimensions.width, b.boundingHeight = cc.contentScaleFactor() * this._dimensions.height) : (b.fontSize = this._fontSize, b.boundingWidth = this._dimensions.width, b.boundingHeight = this._dimensions.height);
        b.fontName = this._fontName;
        b.textAlign = this._hAlignment;
        b.verticalAlign = this._vAlignment;
        if (this._strokeEnabled) {
            b.strokeEnabled = !0;
            var c = this._strokeColor;
            b.strokeStyle = cc.color(c.r, c.g, c.b);
            b.lineWidth = this._strokeSize
        } else b.strokeEnabled = !1;
        this._shadowEnabled ? (b.shadowEnabled = !0, b.shadowBlur = this._shadowBlur, b.shadowOpacity = this._shadowOpacity, b.shadowOffsetX = (a ? cc.contentScaleFactor() : 1) * this._shadowOffset.x, b.shadowOffsetY = (a ? cc.contentScaleFactor() : 1) * this._shadowOffset.y) : b._shadowEnabled = !1;
        a = this._textFillColor;
        b.fillStyle = cc.color(a.r, a.g, a.b);
        return b
    }, _fontClientHeight: 18, setString: function (a) {
        a = String(a);
        this._originalText !=
        a && (this._originalText = a + "", this._updateString(), this._needUpdateTexture = !0)
    }, _updateString: function () {
        this._string = this._originalText
    }, setHorizontalAlignment: function (a) {
        a !== this._hAlignment && (this._hAlignment = a, this._needUpdateTexture = !0)
    }, setVerticalAlignment: function (a) {
        a != this._vAlignment && (this._vAlignment = a, this._needUpdateTexture = !0)
    }, setDimensions: function (a) {
        if (a.width != this._dimensions.width || a.height != this._dimensions.height)this._dimensions = a, this._updateString(), this._needUpdateTexture = !0
    }, _getBoundingWidth: function () {
        return this._dimensions.width
    }, _setBoundingWidth: function (a) {
        a != this._dimensions.width && (this._dimensions.width = a, this._updateString(), this._needUpdateTexture = !0)
    }, _getBoundingHeight: function () {
        return this._dimensions.height
    }, _setBoundingHeight: function (a) {
        a != this._dimensions.height && (this._dimensions.height = a, this._updateString(), this._needUpdateTexture = !0)
    }, setFontSize: function (a) {
        this._fontSize !== a && (this._fontSize = a, this._fontStyleStr = a + "px '" + this._fontName + "'",
            this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, a), this._needUpdateTexture = !0)
    }, setFontName: function (a) {
        this._fontName && this._fontName != a && (this._fontName = a, this._fontStyleStr = this._fontSize + "px '" + a + "'", this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(a, this._fontSize), this._needUpdateTexture = !0)
    }, _getFont: function () {
        return this._fontStyleStr
    }, _setFont: function (a) {
        var b = cc.LabelTTF._fontStyleRE.exec(a);
        b && (this._fontSize = parseInt(b[1]), this._fontName = b[2], this._fontStyleStr =
            a, this._fontClientHeight = cc.LabelTTF.__getFontHeightByDiv(this._fontName, this._fontSize), this._needUpdateTexture = !0)
    }, _drawTTFInCanvas: function (a) {
        if (a) {
            var b = this._strokeShadowOffsetX, c = this._strokeShadowOffsetY, d = this._contentSize.height - c, e = this._vAlignment, f = this._hAlignment, g = this._fontClientHeight, h = this._strokeSize;
            a.setTransform(1, 0, 0, 1, 0 + 0.5 * b, d + 0.5 * c);
            a.font != this._fontStyleStr && (a.font = this._fontStyleStr);
            a.fillStyle = this._fillColorStr;
            var k = c = 0, l = this._strokeEnabled;
            l && (a.lineWidth = 2 *
                h, a.strokeStyle = this._strokeColorStr);
            this._shadowEnabled && (h = this._shadowOffset, a.shadowColor = this._shadowColorStr, a.shadowOffsetX = h.x, a.shadowOffsetY = -h.y, a.shadowBlur = this._shadowBlur);
            a.textBaseline = cc.LabelTTF._textBaseline[e];
            a.textAlign = cc.LabelTTF._textAlign[f];
            b = this._contentSize.width - b;
            c = f === cc.TEXT_ALIGNMENT_RIGHT ? c + b : f === cc.TEXT_ALIGNMENT_CENTER ? c + b / 2 : c + 0;
            if (this._isMultiLine) {
                f = this._strings.length;
                e === cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM ? k = g + d - g * f : e === cc.VERTICAL_TEXT_ALIGNMENT_CENTER &&
                    (k = g / 2 + (d - g * f) / 2);
                for (e = 0; e < f; e++)b = this._strings[e], h = -d + g * e + k, l && a.strokeText(b, c, h), a.fillText(b, c, h)
            } else e !== cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM && (k = e === cc.VERTICAL_TEXT_ALIGNMENT_TOP ? k - d : k - 0.5 * d), l && a.strokeText(this._string, c, k), a.fillText(this._string, c, k)
        }
    }, _getLabelContext: function () {
        if (this._labelContext)return this._labelContext;
        if (!this._labelCanvas) {
            var a = cc.newElement("canvas"), b = new cc.Texture2D;
            b.initWithElement(a);
            this.texture = b;
            this._labelCanvas = a
        }
        return this._labelContext = this._labelCanvas.getContext("2d")
    },
    _updateTTF: function () {
        var a = this._dimensions.width, b, c, d = this._lineWidths;
        d.length = 0;
        this._isMultiLine = !1;
        this._measureConfig();
        if (0 !== a) {
            var e = this._string;
            this._strings = [];
            b = 0;
            for (c = this._string.length; b < c;) {
                var f = this._checkNextline(e.substr(b), a), g = e.substr(b, f);
                this._strings.push(g);
                b += f
            }
        } else {
            this._strings = this._string.split("\n");
            b = 0;
            for (c = this._strings.length; b < c; b++)d.push(this._measure(this._strings[b]))
        }
        0 < this._strings.length && (this._isMultiLine = !0);
        c = b = 0;
        this._strokeEnabled && (b = c = 2 * this._strokeSize);
        this._shadowEnabled && (e = this._shadowOffset, b += 2 * Math.abs(e.x), c += 2 * Math.abs(e.y));
        a = 0 === a ? this._isMultiLine ? cc.size(0 | Math.max.apply(Math, d) + b, 0 | this._fontClientHeight * this._strings.length + c) : cc.size(0 | this._measure(this._string) + b, 0 | this._fontClientHeight + c) : 0 === this._dimensions.height ? this._isMultiLine ? cc.size(0 | a + b, 0 | this._fontClientHeight * this._strings.length + c) : cc.size(0 | a + b, 0 | this._fontClientHeight + c) : cc.size(0 | a + b, 0 | this._dimensions.height + c);
        this.setContentSize(a);
        this._strokeShadowOffsetX =
            b;
        this._strokeShadowOffsetY = c;
        d = this._anchorPoint;
        this._anchorPointInPoints.x = 0.5 * b + (a.width - b) * d.x;
        this._anchorPointInPoints.y = 0.5 * c + (a.height - c) * d.y
    }, getContentSize: function () {
        this._needUpdateTexture && this._updateTTF();
        return cc.Sprite.prototype.getContentSize.call(this)
    }, _getWidth: function () {
        this._needUpdateTexture && this._updateTTF();
        return cc.Sprite.prototype._getWidth.call(this)
    }, _getHeight: function () {
        this._needUpdateTexture && this._updateTTF();
        return cc.Sprite.prototype._getHeight.call(this)
    },
    _updateTexture: function () {
        var a = this._getLabelContext(), b = this._labelCanvas, c = this._contentSize;
        if (0 === this._string.length)return b.width = 1, b.height = c.height, this.setTextureRect(cc.rect(0, 0, 1, c.height)), !0;
        a.font = this._fontStyleStr;
        this._updateTTF();
        var d = c.width, c = c.height, e = b.width == d && b.height == c;
        b.width = d;
        b.height = c;
        e && a.clearRect(0, 0, d, c);
        this._drawTTFInCanvas(a);
        this._texture && this._texture.handleLoadedTexture();
        this.setTextureRect(cc.rect(0, 0, d, c));
        return!0
    }, visit: function (a) {
        this._string &&
            "" != this._string && (this._needUpdateTexture && (this._needUpdateTexture = !1, this._updateTexture()), cc.Sprite.prototype.visit.call(this, a || cc._renderContext))
    }, draw: null, _setTextureCoords: function (a) {
        var b = this._batchNode ? this.textureAtlas.texture : this._texture;
        if (b) {
            var c = b.pixelsWidth, d = b.pixelsHeight, e, f = this._quad;
            this._rectRotated ? (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.height - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.width - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.height) / c, e = a.y / d, a = (a.y + a.width) /
                d), this._flippedX && (d = e, e = a, a = d), this._flippedY && (d = b, b = c, c = d), f.bl.texCoords.u = b, f.bl.texCoords.v = e, f.br.texCoords.u = b, f.br.texCoords.v = a, f.tl.texCoords.u = c, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = a) : (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL ? (b = (2 * a.x + 1) / (2 * c), c = b + (2 * a.width - 2) / (2 * c), e = (2 * a.y + 1) / (2 * d), a = e + (2 * a.height - 2) / (2 * d)) : (b = a.x / c, c = (a.x + a.width) / c, e = a.y / d, a = (a.y + a.height) / d), this._flippedX && (d = b, b = c, c = d), this._flippedY && (d = e, e = a, a = d), f.bl.texCoords.u = b, f.bl.texCoords.v = a, f.br.texCoords.u =
                c, f.br.texCoords.v = a, f.tl.texCoords.u = b, f.tl.texCoords.v = e, f.tr.texCoords.u = c, f.tr.texCoords.v = e);
            this._quadDirty = !0
        }
    }});
cc._renderType === cc._RENDER_TYPE_CANVAS ? (_p = cc.LabelTTF.prototype, _p.setColor = function (a) {
    cc.NodeRGBA.prototype.setColor.call(this, a);
    this._setColorsString()
}, _p._setColorsString = function () {
    this._needUpdateTexture = !0;
    var a = this._displayedColor, b = this._displayedOpacity, c = this._strokeColor, d = this._textFillColor;
    this._shadowColorStr = "rgba(" + (0 | 0.5 * a.r) + "," + (0 | 0.5 * a.g) + "," + (0 | 0.5 * a.b) + "," + this._shadowOpacity + ")";
    this._fillColorStr = "rgba(" + (0 | a.r / 255 * d.r) + "," + (0 | a.g / 255 * d.g) + "," + (0 | a.b / 255 * d.b) + ", " + b /
        255 + ")";
    this._strokeColorStr = "rgba(" + (0 | a.r / 255 * c.r) + "," + (0 | a.g / 255 * c.g) + "," + (0 | a.b / 255 * c.b) + ", " + b / 255 + ")"
}, _p.updateDisplayedColor = function (a) {
    cc.NodeRGBA.prototype.updateDisplayedColor.call(this, a);
    this._setColorsString()
}, _p.setOpacity = function (a) {
    this._opacity !== a && (cc.Sprite.prototype.setOpacity.call(this, a), this._setColorsString(), this._needUpdateTexture = !0)
}, _p.updateDisplayedOpacity = cc.Sprite.prototype.updateDisplayedOpacity, _p.initWithStringAndTextDefinition = function (a, b) {
    this._updateWithTextDefinition(b,
        !1);
    this.string = a;
    return!0
}, _p.setFontFillColor = function (a) {
    var b = this._textFillColor;
    if (b.r != a.r || b.g != a.g || b.b != a.b)b.r = a.r, b.g = a.g, b.b = a.b, this._setColorsString(), this._needUpdateTexture = !0
}, _p.draw = cc.Sprite.prototype.draw, _p.setTextureRect = function (a, b, c) {
    this._rectRotated = b || !1;
    this.setContentSize(c || a);
    this.setVertexRect(a);
    b = this._textureRect_Canvas;
    b.x = a.x;
    b.y = a.y;
    b.width = a.width;
    b.height = a.height;
    b.validRect = !(0 === b.width || 0 === b.height || 0 > b.x || 0 > b.y);
    a = this._unflippedOffsetPositionFromCenter;
    this._flippedX && (a.x = -a.x);
    this._flippedY && (a.y = -a.y);
    this._offsetPosition.x = a.x + (this._contentSize.width - this._rect.width) / 2;
    this._offsetPosition.y = a.y + (this._contentSize.height - this._rect.height) / 2;
    this._batchNode && (this.dirty = !0)
}, _p = null) : (cc.assert("function" === typeof cc._tmp.WebGLLabelTTF, cc._LogInfos.MissingFile, "LabelTTFWebGL.js"), cc._tmp.WebGLLabelTTF(), delete cc._tmp.WebGLLabelTTF);
cc.assert("function" === typeof cc._tmp.PrototypeLabelTTF, cc._LogInfos.MissingFile, "LabelTTFPropertyDefine.js");
cc._tmp.PrototypeLabelTTF();
delete cc._tmp.PrototypeLabelTTF;
cc.LabelTTF._textAlign = ["left", "center", "right"];
cc.LabelTTF._textBaseline = ["top", "middle", "bottom"];
cc.LabelTTF._checkRegEx = /(.+?)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
cc.LabelTTF._reverseCheckRegEx = /(.*)([\s\n\r\-\/\\\:]|[\u4E00-\u9FA5]|[\uFE30-\uFFA0])/;
cc.LabelTTF._checkEnRegEx = /[\s\-\/\\\:]/;
cc.LabelTTF._fontStyleRE = /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/;
cc.LabelTTF.create = function (a, b, c, d, e, f) {
    return new cc.LabelTTF(a, b, c, d, e, f)
};
cc.LabelTTF._SHADER_PROGRAM = cc.USE_LA88_LABELS ? cc.SHADER_POSITION_TEXTURECOLOR : cc.SHADER_POSITION_TEXTUREA8COLOR;
cc.LabelTTF.__labelHeightDiv = cc.newElement("div");
cc.LabelTTF.__labelHeightDiv.style.fontFamily = "Arial";
cc.LabelTTF.__labelHeightDiv.style.position = "absolute";
cc.LabelTTF.__labelHeightDiv.style.left = "-100px";
cc.LabelTTF.__labelHeightDiv.style.top = "-100px";
cc.LabelTTF.__labelHeightDiv.style.lineHeight = "normal";
document.body ? document.body.appendChild(cc.LabelTTF.__labelHeightDiv) : cc._addEventListener(window, "load", function () {
    this.removeEventListener("load", arguments.callee, !1);
    document.body.appendChild(cc.LabelTTF.__labelHeightDiv)
}, !1);
cc.LabelTTF.__getFontHeightByDiv = function (a, b) {
    var c = cc.LabelTTF.__fontHeightCache[a + "." + b];
    if (0 < c)return c;
    var d = cc.LabelTTF.__labelHeightDiv;
    d.innerHTML = "ajghl~!";
    d.style.fontFamily = a;
    d.style.fontSize = b + "px";
    c = d.clientHeight;
    cc.LabelTTF.__fontHeightCache[a + "." + b] = c;
    d.innerHTML = "";
    return c
};
cc.LabelTTF.__fontHeightCache = {};var cc = cc || {};
cc._tmp = cc._tmp || {};
cc.associateWithNative = function (a, b) {
};
cc.KEY = {backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, pause: 19, capslock: 20, escape: 27, pageup: 33, pagedown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40, insert: 45, Delete: 46, "0": 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, a: 65, b: 66, c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, r: 82, s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90, num0: 96, num1: 97, num2: 98, num3: 99, num4: 100, num5: 101, num6: 102, num7: 103, num8: 104, num9: 105, "*": 106, "+": 107, "-": 109, numdel: 110, "/": 111, f1: 112, f2: 113,
    f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123, numlock: 144, scrolllock: 145, semicolon: 186, ",": 186, equal: 187, "\x3d": 187, ";": 188, comma: 188, dash: 189, ".": 190, period: 190, forwardslash: 191, grave: 192, "[": 219, openbracket: 219, "]": 221, closebracket: 221, backslash: 220, quote: 222, space: 32};
cc.FMT_JPG = 0;
cc.FMT_PNG = 1;
cc.FMT_TIFF = 2;
cc.FMT_RAWDATA = 3;
cc.FMT_WEBP = 4;
cc.FMT_UNKNOWN = 5;
cc.getImageFormatByData = function (a) {
    return 8 < a.length && 137 == a[0] && 80 == a[1] && 78 == a[2] && 71 == a[3] && 13 == a[4] && 10 == a[5] && 26 == a[6] && 10 == a[7] ? cc.FMT_PNG : 2 < a.length && (73 == a[0] && 73 == a[1] || 77 == a[0] && 77 == a[1] || 255 == a[0] && 216 == a[1]) ? cc.FMT_TIFF : cc.FMT_UNKNOWN
};
cc.inherits = function (a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
cc.base = function (a, b, c) {
    var d = arguments.callee.caller;
    if (d.superClass_)return ret = d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
    for (var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor; g; g = g.superClass_ && g.superClass_.constructor)if (g.prototype[b] === d)f = !0; else if (f)return g.prototype[b].apply(a, e);
    if (a[b] === d)return a.constructor.prototype[b].apply(a, e);
    throw Error("cc.base called from a method of one name to a method of a different name");
};
cc.screen = {_supportsFullScreen: !1, _preOnFullScreenChange: null, _touchEvent: "", _fn: null, _fnMap: [
    ["requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenEnabled", "fullscreenElement"],
    ["requestFullScreen", "exitFullScreen", "fullScreenchange", "fullScreenEnabled", "fullScreenElement"],
    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitIsFullScreen", "webkitCurrentFullScreenElement"],
    ["mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen",
        "mozFullScreenElement"],
    ["msRequestFullscreen", "msExitFullscreen", "MSFullscreenChange", "msFullscreenEnabled", "msFullscreenElement"]
], init: function () {
    this._fn = {};
    var a, b, c = this._fnMap, d;
    a = 0;
    for (l = c.length; a < l; a++)if ((b = c[a]) && b[1]in document) {
        a = 0;
        for (d = b.length; a < d; a++)this._fn[c[0][a]] = b[a];
        break
    }
    this._supportsFullScreen = void 0 != this._fn.requestFullscreen;
    this._touchEvent = "ontouchstart"in window ? "touchstart" : "mousedown"
}, fullScreen: function () {
    return this._supportsFullScreen && document[this._fn.fullscreenEnabled]
},
    requestFullScreen: function (a, b) {
        if (this._supportsFullScreen) {
            a = a || document.documentElement;
            a[this._fn.requestFullscreen]();
            if (b) {
                var c = this._fn.fullscreenchange;
                this._preOnFullScreenChange && document.removeEventListener(c, this._preOnFullScreenChange);
                this._preOnFullScreenChange = b;
                cc._addEventListener(document, c, b, !1)
            }
            return a[this._fn.requestFullscreen]()
        }
    }, exitFullScreen: function () {
        return this._supportsFullScreen ? document[this._fn.exitFullscreen]() : !0
    }, autoFullScreen: function (a, b) {
        function c() {
            e.requestFullScreen(a,
                b);
            d.removeEventListener(e._touchEvent, c)
        }

        a = a || document.body;
        var d = cc._canvas || a, e = this;
        this.requestFullScreen(a, b);
        cc._addEventListener(d, this._touchEvent, c)
    }};
cc.screen.init();
var _p = cc.inputManager;
_p.setAccelerometerEnabled = function (a) {
    this._accelEnabled !== a && (this._accelEnabled = a, a = cc.director.getScheduler(), this._accelEnabled ? (this._accelCurTime = 0, a.scheduleUpdateForTarget(this)) : (this._accelCurTime = 0, a.unscheduleUpdateForTarget(this)))
};
_p.setAccelerometerInterval = function (a) {
    this._accelInterval !== a && (this._accelInterval = a)
};
_p._registerKeyboardEvent = function () {
    cc._addEventListener(cc._canvas, "keydown", function (a) {
        cc.eventManager.dispatchEvent(new cc.EventKeyboard(a.keyCode, !0));
        a.stopPropagation();
        a.preventDefault()
    }, !1);
    cc._addEventListener(cc._canvas, "keyup", function (a) {
        cc.eventManager.dispatchEvent(new cc.EventKeyboard(a.keyCode, !1));
        a.stopPropagation();
        a.preventDefault()
    }, !1)
};
_p._registerAccelerometerEvent = function () {
    var a = window;
    this._acceleration = new cc.Acceleration;
    this._accelDeviceEvent = a.DeviceMotionEvent || a.DeviceOrientationEvent;
    cc.sys.browserType == cc.sys.BROWSER_TYPE_MOBILE_QQ && (this._accelDeviceEvent = window.DeviceOrientationEvent);
    var b = this._accelDeviceEvent == a.DeviceMotionEvent ? "devicemotion" : "deviceorientation", c = navigator.userAgent;
    if (/Android/.test(c) || /Adr/.test(c) && cc.sys.browserType == cc.BROWSER_TYPE_UC)this._minus = -1;
    cc._addEventListener(a, b, this.didAccelerate.bind(this),
        !1)
};
_p.didAccelerate = function (a) {
    var b = window;
    if (this._accelEnabled) {
        var c = this._acceleration;
        if (this._accelDeviceEvent == window.DeviceMotionEvent) {
            var d = a.accelerationIncludingGravity;
            c.x = 0.1 * this._accelMinus * d.x;
            c.y = 0.1 * this._accelMinus * d.y;
            c.z = 0.1 * d.z
        } else c.x = 0.981 * (a.gamma / 90), c.y = 0.981 * -(a.beta / 90), c.z = 0.981 * (a.alpha / 90);
        c.timestamp = a.timeStamp || Date.now();
        a = c.x;
        b.orientation === cc.UIInterfaceOrientationLandscapeRight ? (c.x = -c.y, c.y = a) : b.orientation === cc.UIInterfaceOrientationLandscapeLeft ? (c.x = c.y,
            c.y = -a) : b.orientation === cc.UIInterfaceOrientationPortraitUpsideDown && (c.x = -c.x, c.y = -c.y)
    }
};
delete _p;
cc.vertexLineToPolygon = function (a, b, c, d, e) {
    e += d;
    if (!(1 >= e)) {
        b *= 0.5;
        for (var f, g = e - 1, h = d; h < e; h++) {
            f = 2 * h;
            var k = cc.p(a[2 * h], a[2 * h + 1]), m;
            if (0 === h)m = cc.pPerp(cc.pNormalize(cc.pSub(k, cc.p(a[2 * (h + 1)], a[2 * (h + 1) + 1])))); else if (h === g)m = cc.pPerp(cc.pNormalize(cc.pSub(cc.p(a[2 * (h - 1)], a[2 * (h - 1) + 1]), k))); else {
                m = cc.p(a[2 * (h - 1)], a[2 * (h - 1) + 1]);
                var q = cc.p(a[2 * (h + 1)], a[2 * (h + 1) + 1]), n = cc.pNormalize(cc.pSub(q, k)), p = cc.pNormalize(cc.pSub(m, k)), r = Math.acos(cc.pDot(n, p));
                m = r < cc.degreesToRadians(70) ? cc.pPerp(cc.pNormalize(cc.pMidpoint(n,
                    p))) : r < cc.degreesToRadians(170) ? cc.pNormalize(cc.pMidpoint(n, p)) : cc.pPerp(cc.pNormalize(cc.pSub(q, m)))
            }
            m = cc.pMult(m, b);
            c[2 * f] = k.x + m.x;
            c[2 * f + 1] = k.y + m.y;
            c[2 * (f + 1)] = k.x - m.x;
            c[2 * (f + 1) + 1] = k.y - m.y
        }
        for (h = 0 == d ? 0 : d - 1; h < g; h++) {
            f = 2 * h;
            a = f + 2;
            b = cc.vertex2(c[2 * f], c[2 * f + 1]);
            e = cc.vertex2(c[2 * (f + 1)], c[2 * (f + 1) + 1]);
            f = cc.vertex2(c[2 * a], c[2 * a]);
            d = cc.vertex2(c[2 * (a + 1)], c[2 * (a + 1) + 1]);
            b = !cc.vertexLineIntersect(b.x, b.y, d.x, d.y, e.x, e.y, f.x, f.y);
            if (!b.isSuccess && (0 > b.value || 1 < b.value))b.isSuccess = !0;
            b.isSuccess && (c[2 * a] = d.x,
                c[2 * a + 1] = d.y, c[2 * (a + 1)] = f.x, c[2 * (a + 1) + 1] = f.y)
        }
    }
};
cc.vertexLineIntersect = function (a, b, c, d, e, f, g, h) {
    if (a == c && b == d || e == g && f == h)return{isSuccess: !1, value: 0};
    c -= a;
    d -= b;
    e -= a;
    f -= b;
    g -= a;
    h -= b;
    a = Math.sqrt(c * c + d * d);
    c /= a;
    d /= a;
    b = e * c + f * d;
    f = f * c - e * d;
    e = b;
    b = g * c + h * d;
    h = h * c - g * d;
    g = b;
    return f == h ? {isSuccess: !1, value: 0} : {isSuccess: !0, value: (g + (e - g) * h / (h - f)) / a}
};
cc.vertexListIsClockwise = function (a) {
    for (var b = 0, c = a.length; b < c; b++) {
        var d = a[(b + 1) % c], e = a[(b + 2) % c];
        if (0 < cc.pCross(cc.pSub(d, a[b]), cc.pSub(e, d)))return!1
    }
    return!0
};
cc.CGAffineToGL = function (a, b) {
    b[2] = b[3] = b[6] = b[7] = b[8] = b[9] = b[11] = b[14] = 0;
    b[10] = b[15] = 1;
    b[0] = a.a;
    b[4] = a.c;
    b[12] = a.tx;
    b[1] = a.b;
    b[5] = a.d;
    b[13] = a.ty
};
cc.GLToCGAffine = function (a, b) {
    b.a = a[0];
    b.c = a[4];
    b.tx = a[12];
    b.b = a[1];
    b.d = a[5];
    b.ty = a[13]
};
cc.EventAcceleration = cc.Event.extend({_acc: null, ctor: function (a) {
    cc.Event.prototype.ctor.call(this, cc.Event.ACCELERATION);
    this._acc = a
}});
cc.EventKeyboard = cc.Event.extend({_keyCode: 0, _isPressed: !1, ctor: function (a, b) {
    cc.Event.prototype.ctor.call(this, cc.Event.KEYBOARD);
    this._keyCode = a;
    this._isPressed = b
}});
cc._EventListenerAcceleration = cc.EventListener.extend({_onAccelerationEvent: null, ctor: function (a) {
    this._onAccelerationEvent = a;
    var b = this;
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.ACCELERATION, cc._EventListenerAcceleration.LISTENER_ID, function (a) {
        b._onAccelerationEvent(a._acc, a)
    })
}, checkAvailable: function () {
    cc.assert(this._onAccelerationEvent, cc._LogInfos._EventListenerAcceleration_checkAvailable);
    return!0
}, clone: function () {
    return new cc._EventListenerAcceleration(this._onAccelerationEvent)
}});
cc._EventListenerAcceleration.LISTENER_ID = "__cc_acceleration";
cc._EventListenerAcceleration.create = function (a) {
    return new cc._EventListenerAcceleration(a)
};
cc._EventListenerKeyboard = cc.EventListener.extend({onKeyPressed: null, onKeyReleased: null, ctor: function () {
    var a = this;
    cc.EventListener.prototype.ctor.call(this, cc.EventListener.KEYBOARD, cc._EventListenerKeyboard.LISTENER_ID, function (b) {
        if (b._isPressed) {
            if (a.onKeyPressed)a.onKeyPressed(b._keyCode, b)
        } else if (a.onKeyReleased)a.onKeyReleased(b._keyCode, b)
    })
}, clone: function () {
    var a = new cc._EventListenerKeyboard;
    a.onKeyPressed = this.onKeyPressed;
    a.onKeyReleased = this.onKeyReleased;
    return a
}, checkAvailable: function () {
    return null ==
        this.onKeyPressed && null == this.onKeyReleased ? (cc.log(cc._LogInfos._EventListenerKeyboard_checkAvailable), !1) : !0
}});
cc._EventListenerKeyboard.LISTENER_ID = "__cc_keyboard";
cc._EventListenerKeyboard.create = function () {
    return new cc._EventListenerKeyboard
};
cc.AtlasNode = cc.NodeRGBA.extend({textureAtlas: null, quadsToDraw: 0, RGBAProtocol: !0, _itemsPerRow: 0, _itemsPerColumn: 0, _itemWidth: 0, _itemHeight: 0, _colorUnmodified: null, _opacityModifyRGB: !1, _blendFunc: null, _ignoreContentScaleFactor: !1, _className: "AtlasNode", ctor: function (a, b, c, d) {
    cc.NodeRGBA.prototype.ctor.call(this);
    this._colorUnmodified = cc.color.WHITE;
    this._blendFunc = {src: cc.BLEND_SRC, dst: cc.BLEND_DST};
    this._ignoreContentScaleFactor = !1;
    void 0 !== d && this.initWithTileFile(a, b, c, d)
}, updateAtlasValues: function () {
    cc.log(cc._LogInfos.AtlasNode_updateAtlasValues)
},
    getColor: function () {
        return this._opacityModifyRGB ? this._colorUnmodified : cc.NodeRGBA.prototype.getColor.call(this)
    }, setOpacityModifyRGB: function (a) {
        var b = this.color;
        this._opacityModifyRGB = a;
        this.color = b
    }, isOpacityModifyRGB: function () {
        return this._opacityModifyRGB
    }, getBlendFunc: function () {
        return this._blendFunc
    }, setBlendFunc: function (a, b) {
        this._blendFunc = void 0 === b ? a : {src: a, dst: b}
    }, setTextureAtlas: function (a) {
        this.textureAtlas = a
    }, getTextureAtlas: function () {
        return this.textureAtlas
    }, getQuadsToDraw: function () {
        return this.quadsToDraw
    },
    setQuadsToDraw: function (a) {
        this.quadsToDraw = a
    }, _textureForCanvas: null, _originalTexture: null, _uniformColor: null, _colorF32Array: null, initWithTileFile: function (a, b, c, d) {
        if (!a)throw"cc.AtlasNode.initWithTileFile(): title should not be null";
        a = cc.textureCache.addImage(a);
        return this.initWithTexture(a, b, c, d)
    }, initWithTexture: null, _initWithTextureForCanvas: function (a, b, c, d) {
        this._itemWidth = b;
        this._itemHeight = c;
        this._opacityModifyRGB = !0;
        this._originalTexture = a;
        if (!this._originalTexture)return cc.log(cc._LogInfos.AtlasNode__initWithTexture),
            !1;
        this._textureForCanvas = this._originalTexture;
        this._calculateMaxItems();
        this.quadsToDraw = d;
        return!0
    }, _initWithTextureForWebGL: function (a, b, c, d) {
        this._itemWidth = b;
        this._itemHeight = c;
        this._colorUnmodified = cc.color.WHITE;
        this._opacityModifyRGB = !0;
        this._blendFunc.src = cc.BLEND_SRC;
        this._blendFunc.dst = cc.BLEND_DST;
        b = this._realColor;
        this._colorF32Array = new Float32Array([b.r / 255, b.g / 255, b.b / 255, this._realOpacity / 255]);
        this.textureAtlas = new cc.TextureAtlas;
        this.textureAtlas.initWithTexture(a, d);
        if (!this.textureAtlas)return cc.log(cc._LogInfos.AtlasNode__initWithTexture),
            !1;
        this._updateBlendFunc();
        this._updateOpacityModifyRGB();
        this._calculateMaxItems();
        this.quadsToDraw = d;
        this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR);
        this._uniformColor = cc._renderContext.getUniformLocation(this.shaderProgram.getProgram(), "u_color");
        return!0
    }, draw: null, _drawForWebGL: function (a) {
        a = a || cc._renderContext;
        cc.nodeDrawSetup(this);
        cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst);
        this._uniformColor && this._colorF32Array && (a.uniform4fv(this._uniformColor,
            this._colorF32Array), this.textureAtlas.drawNumberOfQuads(this.quadsToDraw, 0))
    }, setColor: null, _setColorForCanvas: function (a) {
        var b = this._realColor;
        if (!(b.r == a.r && b.g == a.g && b.b == a.b)) {
            b = cc.color(a.r, a.g, a.b);
            this._colorUnmodified = a;
            if (this._opacityModifyRGB) {
                var c = this._displayedOpacity;
                b.r = b.r * c / 255;
                b.g = b.g * c / 255;
                b.b = b.b * c / 255
            }
            cc.NodeRGBA.prototype.setColor.call(this, a);
            if (this.texture && (a = this._originalTexture.getHtmlElementObj()))if (b = cc.textureCache.getTextureColors(a))c = cc.rect(0, 0, a.width, a.height),
                a = cc.generateTintImage(a, b, this._realColor, c), b = new cc.Texture2D, b.initWithElement(a), b.handleLoadedTexture(), this.texture = b
        }
    }, _setColorForWebGL: function (a) {
        var b = cc.color(a.r, a.g, a.b);
        this._colorUnmodified = a;
        var c = this._displayedOpacity;
        this._opacityModifyRGB && (b.r = b.r * c / 255, b.g = b.g * c / 255, b.b = b.b * c / 255);
        cc.NodeRGBA.prototype.setColor.call(this, a);
        a = this._displayedColor;
        this._colorF32Array = new Float32Array([a.r / 255, a.g / 255, a.b / 255, c / 255])
    }, setOpacity: function (a) {
    }, _setOpacityForCanvas: function (a) {
        cc.NodeRGBA.prototype.setOpacity.call(this,
            a);
        this._opacityModifyRGB && (this.color = this._colorUnmodified)
    }, _setOpacityForWebGL: function (a) {
        cc.NodeRGBA.prototype.setOpacity.call(this, a);
        this._opacityModifyRGB ? this.color = this._colorUnmodified : (a = this._displayedColor, this._colorF32Array = new Float32Array([a.r / 255, a.g / 255, a.b / 255, this._displayedOpacity / 255]))
    }, getTexture: null, _getTextureForCanvas: function () {
        return this._textureForCanvas
    }, _getTextureForWebGL: function () {
        return this.textureAtlas.texture
    }, setTexture: null, _setTextureForCanvas: function (a) {
        this._textureForCanvas =
            a
    }, _setTextureForWebGL: function (a) {
        this.textureAtlas.texture = a;
        this._updateBlendFunc();
        this._updateOpacityModifyRGB()
    }, _calculateMaxItems: null, _calculateMaxItemsForCanvas: function () {
        var a = this.texture.getContentSize();
        this._itemsPerColumn = 0 | a.height / this._itemHeight;
        this._itemsPerRow = 0 | a.width / this._itemWidth
    }, _calculateMaxItemsForWebGL: function () {
        var a = this.texture, b = a.getContentSize();
        this._ignoreContentScaleFactor && (b = a.getContentSizeInPixels());
        this._itemsPerColumn = 0 | b.height / this._itemHeight;
        this._itemsPerRow = 0 | b.width / this._itemWidth
    }, _updateBlendFunc: function () {
        this.textureAtlas.texture.hasPremultipliedAlpha() || (this._blendFunc.src = cc.SRC_ALPHA, this._blendFunc.dst = cc.ONE_MINUS_SRC_ALPHA)
    }, _updateOpacityModifyRGB: function () {
        this._opacityModifyRGB = this.textureAtlas.texture.hasPremultipliedAlpha()
    }, _setIgnoreContentScaleFactor: function (a) {
        this._ignoreContentScaleFactor = a
    }});
_p = cc.AtlasNode.prototype;
cc._renderType === cc._RENDER_TYPE_WEBGL ? (_p.initWithTexture = _p._initWithTextureForWebGL, _p.draw = _p._drawForWebGL, _p.setColor = _p._setColorForWebGL, _p.setOpacity = _p._setOpacityForWebGL, _p.getTexture = _p._getTextureForWebGL, _p.setTexture = _p._setTextureForWebGL, _p._calculateMaxItems = _p._calculateMaxItemsForWebGL) : (_p.initWithTexture = _p._initWithTextureForCanvas, _p.draw = cc.Node.prototype.draw, _p.setColor = _p._setColorForCanvas, _p.setOpacity = _p._setOpacityForCanvas, _p.getTexture = _p._getTextureForCanvas, _p.setTexture =
    _p._setTextureForCanvas, _p._calculateMaxItems = _p._calculateMaxItemsForCanvas);
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
cc.AtlasNode.create = function (a, b, c, d) {
    return new cc.AtlasNode(a, b, c, d)
};
cc.TextureAtlas = cc.Class.extend({dirty: !1, texture: null, _indices: null, _buffersVBO: null, _capacity: 0, _quads: null, _quadsArrayBuffer: null, _quadsWebBuffer: null, _quadsReader: null, ctor: function (a, b) {
    this._buffersVBO = [];
    "string" == typeof a ? this.initWithFile(a, b) : a instanceof cc.Texture2D && this.initWithTexture(a, b)
}, getTotalQuads: function () {
    return this._totalQuads
}, getCapacity: function () {
    return this._capacity
}, getTexture: function () {
    return this.texture
}, setTexture: function (a) {
    this.texture = a
}, setDirty: function (a) {
    this.dirty =
        a
}, isDirty: function () {
    return this.dirty
}, getQuads: function () {
    return this._quads
}, setQuads: function (a) {
    this._quads = a
}, _copyQuadsToTextureAtlas: function (a, b) {
    if (a)for (var c = 0; c < a.length; c++)this._setQuadToArray(a[c], b + c)
}, _setQuadToArray: function (a, b) {
    var c = this._quads;
    c[b] ? (c[b].bl = a.bl, c[b].br = a.br, c[b].tl = a.tl, c[b].tr = a.tr) : c[b] = new cc.V3F_C4B_T2F_Quad(a.tl, a.bl, a.tr, a.br, this._quadsArrayBuffer, b * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT)
}, description: function () {
    return"\x3ccc.TextureAtlas | totalQuads \x3d" +
        this._totalQuads + "\x3e"
}, _setupIndices: function () {
    if (0 !== this._capacity)for (var a = this._indices, b = this._capacity, c = 0; c < b; c++)cc.TEXTURE_ATLAS_USE_TRIANGLE_STRIP ? (a[6 * c + 0] = 4 * c + 0, a[6 * c + 1] = 4 * c + 0, a[6 * c + 2] = 4 * c + 2, a[6 * c + 3] = 4 * c + 1, a[6 * c + 4] = 4 * c + 3, a[6 * c + 5] = 4 * c + 3) : (a[6 * c + 0] = 4 * c + 0, a[6 * c + 1] = 4 * c + 1, a[6 * c + 2] = 4 * c + 2, a[6 * c + 3] = 4 * c + 3, a[6 * c + 4] = 4 * c + 2, a[6 * c + 5] = 4 * c + 1)
}, _setupVBO: function () {
    var a = cc._renderContext;
    this._buffersVBO[0] = a.createBuffer();
    this._buffersVBO[1] = a.createBuffer();
    this._quadsWebBuffer = a.createBuffer();
    this._mapBuffers()
}, _mapBuffers: function () {
    var a = cc._renderContext;
    a.bindBuffer(a.ARRAY_BUFFER, this._quadsWebBuffer);
    a.bufferData(a.ARRAY_BUFFER, this._quadsArrayBuffer, a.DYNAMIC_DRAW);
    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this._buffersVBO[1]);
    a.bufferData(a.ELEMENT_ARRAY_BUFFER, this._indices, a.STATIC_DRAW)
}, initWithFile: function (a, b) {
    var c = cc.textureCache.addImage(a);
    if (c)return this.initWithTexture(c, b);
    cc.log(cc._LogInfos.TextureAtlas_initWithFile, a);
    return!1
}, initWithTexture: function (a, b) {
    cc.assert(a,
        cc._LogInfos.TextureAtlas_initWithTexture);
    this._capacity = b |= 0;
    this._totalQuads = 0;
    this.texture = a;
    this._quads = [];
    this._indices = new Uint16Array(6 * b);
    var c = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
    this._quadsArrayBuffer = new ArrayBuffer(c * b);
    this._quadsReader = new Uint8Array(this._quadsArrayBuffer);
    if ((!this._quads || !this._indices) && 0 < b)return!1;
    for (var d = this._quads, e = 0; e < b; e++)d[e] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, e * c);
    this._setupIndices();
    this._setupVBO();
    return this.dirty = !0
}, updateQuad: function (a, b) {
    cc.assert(a, cc._LogInfos.TextureAtlas_updateQuad);
    cc.assert(0 <= b && b < this._capacity, cc._LogInfos.TextureAtlas_updateQuad_2);
    this._totalQuads = Math.max(b + 1, this._totalQuads);
    this._setQuadToArray(a, b);
    this.dirty = !0
}, insertQuad: function (a, b) {
    cc.assert(b < this._capacity, cc._LogInfos.TextureAtlas_insertQuad_2);
    this._totalQuads++;
    if (this._totalQuads > this._capacity)cc.log(cc._LogInfos.TextureAtlas_insertQuad); else {
        var c = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, d = b * c, e = (this._totalQuads -
            1 - b) * c;
        this._quads[this._totalQuads - 1] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * c);
        this._quadsReader.set(this._quadsReader.subarray(d, d + e), d + c);
        this._setQuadToArray(a, b);
        this.dirty = !0
    }
}, insertQuads: function (a, b, c) {
    c = c || a.length;
    cc.assert(b + c <= this._capacity, cc._LogInfos.TextureAtlas_insertQuads);
    var d = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
    this._totalQuads += c;
    if (this._totalQuads > this._capacity)cc.log(cc._LogInfos.TextureAtlas_insertQuad); else {
        var e = b *
            d, f = (this._totalQuads - 1 - b - c) * d, g = this._totalQuads - 1 - c, h;
        for (h = 0; h < c; h++)this._quads[g + h] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, (this._totalQuads - 1) * d);
        this._quadsReader.set(this._quadsReader.subarray(e, e + f), e + d * c);
        for (h = 0; h < c; h++)this._setQuadToArray(a[h], b + h);
        this.dirty = !0
    }
}, insertQuadFromIndex: function (a, b) {
    if (a !== b) {
        cc.assert(0 <= b || b < this._totalQuads, cc._LogInfos.TextureAtlas_insertQuadFromIndex);
        cc.assert(0 <= a || a < this._totalQuads, cc._LogInfos.TextureAtlas_insertQuadFromIndex_2);
        var c = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, d = this._quadsReader, e = d.subarray(a * c, c), f;
        a > b ? (f = b * c, d.set(d.subarray(f, f + (a - b) * c), f + c), d.set(e, f)) : (f = (a + 1) * c, d.set(d.subarray(f, f + (b - a) * c), f - c), d.set(e, b * c));
        this.dirty = !0
    }
}, removeQuadAtIndex: function (a) {
    cc.assert(a < this._totalQuads, cc._LogInfos.TextureAtlas_removeQuadAtIndex);
    var b = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT;
    this._totalQuads--;
    this._quads.length = this._totalQuads;
    if (a !== this._totalQuads) {
        var c = (a + 1) * b;
        this._quadsReader.set(this._quadsReader.subarray(c,
                c + (this._totalQuads - a) * b), c - b)
    }
    this.dirty = !0
}, removeQuadsAtIndex: function (a, b) {
    cc.assert(a + b <= this._totalQuads, cc._LogInfos.TextureAtlas_removeQuadsAtIndex);
    this._totalQuads -= b;
    if (a !== this._totalQuads) {
        var c = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, d = (a + b) * c;
        this._quadsReader.set(this._quadsReader.subarray(d, d + (this._totalQuads - a) * c), a * c)
    }
    this.dirty = !0
}, removeAllQuads: function () {
    this._totalQuads = this._quads.length = 0
}, _setDirty: function (a) {
    this.dirty = a
}, resizeCapacity: function (a) {
    if (a == this._capacity)return!0;
    var b = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, c = this._capacity;
    this._totalQuads = Math.min(this._totalQuads, a);
    var d = this._capacity = 0 | a, e = this._totalQuads;
    if (null == this._quads) {
        this._quads = [];
        this._quadsArrayBuffer = new ArrayBuffer(b * d);
        this._quadsReader = new Uint8Array(this._quadsArrayBuffer);
        for (a = 0; a < d; a++)this._quads = new cc.V3F_C4B_T2F_Quad(null, null, null, null, this._quadsArrayBuffer, a * b)
    } else {
        var f, g, h = this._quads;
        if (d > c) {
            f = [];
            g = new ArrayBuffer(b * d);
            for (a = 0; a < e; a++)f[a] = new cc.V3F_C4B_T2F_Quad(h[a].tl,
                h[a].bl, h[a].tr, h[a].br, g, a * b);
            for (; a < d; a++)f[a] = new cc.V3F_C4B_T2F_Quad(null, null, null, null, g, a * b)
        } else {
            e = Math.max(e, d);
            f = [];
            g = new ArrayBuffer(b * d);
            for (a = 0; a < e; a++)f[a] = new cc.V3F_C4B_T2F_Quad(h[a].tl, h[a].bl, h[a].tr, h[a].br, g, a * b)
        }
        this._quadsReader = new Uint8Array(g);
        this._quads = f;
        this._quadsArrayBuffer = g
    }
    null == this._indices ? this._indices = new Uint16Array(6 * d) : d > c ? (b = new Uint16Array(6 * d), b.set(this._indices, 0), this._indices = b) : this._indices = this._indices.subarray(0, 6 * d);
    this._setupIndices();
    this._mapBuffers();
    return this.dirty = !0
}, increaseTotalQuadsWith: function (a) {
    this._totalQuads += a
}, moveQuadsFromIndex: function (a, b, c) {
    if (void 0 === c) {
        if (c = b, b = this._totalQuads - a, cc.assert(c + (this._totalQuads - a) <= this._capacity, cc._LogInfos.TextureAtlas_moveQuadsFromIndex), 0 === b)return
    } else if (cc.assert(c + b <= this._totalQuads, cc._LogInfos.TextureAtlas_moveQuadsFromIndex_2), cc.assert(a < this._totalQuads, cc._LogInfos.TextureAtlas_moveQuadsFromIndex_3), a == c)return;
    var d = cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, e = a * d, f = b * d, g = this._quadsReader,
        h = g.subarray(e, e + f), k = c * d;
    c < a ? (b = c * d, g.set(g.subarray(b, b + (a - c) * d), b + f)) : (b = (a + b) * d, g.set(g.subarray(b, b + (c - a) * d), e));
    g.set(h, k);
    this.dirty = !0
}, fillWithEmptyQuadsFromIndex: function (a, b) {
    for (var c = b * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, d = new Uint8Array(this._quadsArrayBuffer, a * cc.V3F_C4B_T2F_Quad.BYTES_PER_ELEMENT, c), e = 0; e < c; e++)d[e] = 0
}, drawQuads: function () {
    this.drawNumberOfQuads(this._totalQuads, 0)
}, _releaseBuffer: function () {
    var a = cc._renderContext;
    this._buffersVBO && (this._buffersVBO[0] && a.deleteBuffer(this._buffersVBO[0]),
        this._buffersVBO[1] && a.deleteBuffer(this._buffersVBO[1]));
    this._quadsWebBuffer && a.deleteBuffer(this._quadsWebBuffer)
}});
_p = cc.TextureAtlas.prototype;
cc.defineGetterSetter(_p, "totalQuads", _p.getTotalQuads);
cc.defineGetterSetter(_p, "capacity", _p.getCapacity);
cc.defineGetterSetter(_p, "quads", _p.getQuads, _p.setQuads);
cc.TextureAtlas.create = function (a, b) {
    return new cc.TextureAtlas(a, b)
};
cc._renderType === cc._RENDER_TYPE_WEBGL && (cc.assert("function" === typeof cc._tmp.WebGLTextureAtlas, cc._LogInfos.MissingFile, "TexturesWebGL.js"), cc._tmp.WebGLTextureAtlas(), delete cc._tmp.WebGLTextureAtlas);
cc.assert("function" === typeof cc._tmp.PrototypeTextureAtlas, cc._LogInfos.MissingFile, "TexturesPropertyDefine.js");
cc._tmp.PrototypeTextureAtlas();
delete cc._tmp.PrototypeTextureAtlas;
cc.DEFAULT_SPRITE_BATCH_CAPACITY = 29;
cc.SpriteBatchNode = cc.Node.extend({textureAtlas: null, _blendFunc: null, _descendants: null, _className: "SpriteBatchNode", addSpriteWithoutQuad: function (a, b, c) {
    cc.assert(a, cc._LogInfos.SpriteBatchNode_addSpriteWithoutQuad_2);
    if (!(a instanceof cc.Sprite))return cc.log(cc._LogInfos.SpriteBatchNode_addSpriteWithoutQuad), null;
    a.atlasIndex = b;
    var d = 0, e = this._descendants;
    if (e && 0 < e.length)for (var f = 0; f < e.length; f++) {
        var g = e[f];
        g && g.atlasIndex >= b && ++d
    }
    e.splice(d, 0, a);
    cc.Node.prototype.addChild.call(this, a, b, c);
    this.reorderBatch(!1);
    return this
}, getTextureAtlas: function () {
    return this.textureAtlas
}, setTextureAtlas: function (a) {
    a != this.textureAtlas && (this.textureAtlas = a)
}, getDescendants: function () {
    return this._descendants
}, initWithFile: function (a, b) {
    var c = cc.textureCache.textureForKey(a);
    c || (c = cc.textureCache.addImage(a));
    return this.initWithTexture(c, b)
}, _setNodeDirtyForCache: function () {
    this._cacheDirty = !0
}, init: function (a, b) {
    var c = cc.textureCache.textureForKey(a);
    c || (c = cc.textureCache.addImage(a));
    return this.initWithTexture(c,
        b)
}, increaseAtlasCapacity: function () {
    var a = this.textureAtlas.capacity, b = Math.floor(4 * (a + 1) / 3);
    cc.log(cc._LogInfos.SpriteBatchNode_increaseAtlasCapacity, a, b);
    this.textureAtlas.resizeCapacity(b) || cc.log(cc._LogInfos.SpriteBatchNode_increaseAtlasCapacity_2)
}, removeChildAtIndex: function (a, b) {
    this.removeChild(this._children[a], b)
}, rebuildIndexInOrder: function (a, b) {
    var c = a.children;
    if (c && 0 < c.length)for (var d = 0; d < c.length; d++) {
        var e = c[d];
        e && 0 > e.zIndex && (b = this.rebuildIndexInOrder(e, b))
    }
    !a == this && (a.atlasIndex =
        b, b++);
    if (c && 0 < c.length)for (d = 0; d < c.length; d++)(e = c[d]) && 0 <= e.zIndex && (b = this.rebuildIndexInOrder(e, b));
    return b
}, highestAtlasIndexInChild: function (a) {
    var b = a.children;
    return!b || 0 == b.length ? a.atlasIndex : this.highestAtlasIndexInChild(b[b.length - 1])
}, lowestAtlasIndexInChild: function (a) {
    var b = a.children;
    return!b || 0 == b.length ? a.atlasIndex : this.lowestAtlasIndexInChild(b[b.length - 1])
}, atlasIndexForChild: function (a, b) {
    var c = a.parent, d = c.children, e = d.indexOf(a), f = null;
    0 < e && e < cc.UINT_MAX && (f = d[e - 1]);
    return c ==
        this ? 0 == e ? 0 : this.highestAtlasIndexInChild(f) + 1 : 0 == e ? 0 > b ? c.atlasIndex : c.atlasIndex + 1 : 0 > f.zIndex && 0 > b || 0 <= f.zIndex && 0 <= b ? this.highestAtlasIndexInChild(f) + 1 : c.atlasIndex + 1
}, reorderBatch: function (a) {
    this._reorderChildDirty = a
}, setBlendFunc: function (a, b) {
    this._blendFunc = void 0 === b ? a : {src: a, dst: b}
}, getBlendFunc: function () {
    return this._blendFunc
}, reorderChild: function (a, b) {
    cc.assert(a, cc._LogInfos.SpriteBatchNode_reorderChild_2);
    -1 === this._children.indexOf(a) ? cc.log(cc._LogInfos.SpriteBatchNode_reorderChild) :
        b !== a.zIndex && (cc.Node.prototype.reorderChild.call(this, a, b), this.setNodeDirty())
}, removeChild: function (a, b) {
    null != a && (-1 === this._children.indexOf(a) ? cc.log(cc._LogInfos.SpriteBatchNode_removeChild) : (this.removeSpriteFromAtlas(a), cc.Node.prototype.removeChild.call(this, a, b)))
}, _mvpMatrix: null, _textureForCanvas: null, _useCache: !1, _originalTexture: null, ctor: null, _ctorForCanvas: function (a, b) {
    cc.Node.prototype.ctor.call(this);
    var c;
    b = b || cc.DEFAULT_SPRITE_BATCH_CAPACITY;
    "string" == typeof a ? (c = cc.textureCache.textureForKey(a)) ||
        (c = cc.textureCache.addImage(a)) : a instanceof cc.Texture2D && (c = a);
    c && this.initWithTexture(c, b)
}, _ctorForWebGL: function (a, b) {
    cc.Node.prototype.ctor.call(this);
    this._mvpMatrix = new cc.kmMat4;
    var c;
    b = b || cc.DEFAULT_SPRITE_BATCH_CAPACITY;
    "string" == typeof a ? (c = cc.textureCache.textureForKey(a)) || (c = cc.textureCache.addImage(a)) : a instanceof cc.Texture2D && (c = a);
    c && this.initWithTexture(c, b)
}, updateQuadFromSprite: null, _updateQuadFromSpriteForCanvas: function (a, b) {
    cc.assert(a, cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite_2);
    a instanceof cc.Sprite ? (a.batchNode = this, a.atlasIndex = b, a.dirty = !0, a.updateTransform()) : cc.log(cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite)
}, _updateQuadFromSpriteForWebGL: function (a, b) {
    cc.assert(a, cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite);
    if (a instanceof cc.Sprite) {
        for (var c = this.textureAtlas.capacity; b >= c || c == this.textureAtlas.totalQuads;)this.increaseAtlasCapacity();
        a.batchNode = this;
        a.atlasIndex = b;
        a.dirty = !0;
        a.updateTransform()
    } else cc.log(cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite)
},
    _swap: function (a, b) {
        var c = this._descendants, d = this.textureAtlas, e = d.quads, f = c[a], g = cc.V3F_C4B_T2F_QuadCopy(e[a]);
        c[b].atlasIndex = a;
        c[a] = c[b];
        d.updateQuad(e[b], a);
        c[b] = f;
        d.updateQuad(g, b)
    }, insertQuadFromSprite: null, _insertQuadFromSpriteForCanvas: function (a, b) {
        cc.assert(a, cc._LogInfos.CCSpriteBatchNode_insertQuadFromSprite_2);
        a instanceof cc.Sprite ? (a.batchNode = this, a.atlasIndex = b, a.dirty = !0, a.updateTransform(), this._children.splice(b, 0, a)) : cc.log(cc._LogInfos.CCSpriteBatchNode_insertQuadFromSprite)
    },
    _insertQuadFromSpriteForWebGL: function (a, b) {
        cc.assert(a, cc._LogInfos.Sprite_insertQuadFromSprite_2);
        if (a instanceof cc.Sprite) {
            for (var c = this.textureAtlas; b >= c.capacity || c.capacity === c.totalQuads;)this.increaseAtlasCapacity();
            a.batchNode = this;
            a.atlasIndex = b;
            c.insertQuad(a.quad, b);
            a.dirty = !0;
            a.updateTransform()
        } else cc.log(cc._LogInfos.Sprite_insertQuadFromSprite)
    }, _updateAtlasIndex: function (a, b) {
        var c = 0, d = a.children;
        d && (c = d.length);
        var e = 0;
        if (0 === c)e = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, e !=
            b && this._swap(e, b), b++; else {
            e = !0;
            0 <= d[0].zIndex && (e = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, e != b && this._swap(e, b), b++, e = !1);
            for (c = 0; c < d.length; c++) {
                var f = d[c];
                e && 0 <= f.zIndex && (e = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, e != b && this._swap(e, b), b++, e = !1);
                b = this._updateAtlasIndex(f, b)
            }
            e && (e = a.atlasIndex, a.atlasIndex = b, a.arrivalOrder = 0, e != b && this._swap(e, b), b++)
        }
        return b
    }, _updateBlendFunc: function () {
        this.textureAtlas.texture.hasPremultipliedAlpha() || (this._blendFunc.src = cc.SRC_ALPHA, this._blendFunc.dst =
            cc.ONE_MINUS_SRC_ALPHA)
    }, initWithTexture: null, _initWithTextureForCanvas: function (a, b) {
        this._children = [];
        this._descendants = [];
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        this._textureForCanvas = this._originalTexture = a;
        return!0
    }, _initWithTextureForWebGL: function (a, b) {
        this._children = [];
        this._descendants = [];
        this._blendFunc = new cc.BlendFunc(cc.BLEND_SRC, cc.BLEND_DST);
        b = b || cc.DEFAULT_SPRITE_BATCH_CAPACITY;
        this.textureAtlas = new cc.TextureAtlas;
        this.textureAtlas.initWithTexture(a, b);
        this._updateBlendFunc();
        this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
        return!0
    }, insertChild: function (a, b) {
        a.batchNode = this;
        a.atlasIndex = b;
        a.dirty = !0;
        var c = this.textureAtlas;
        c.totalQuads >= c.capacity && this.increaseAtlasCapacity();
        c.insertQuad(a.quad, b);
        this._descendants.splice(b, 0, a);
        var c = b + 1, d = this._descendants;
        if (d && 0 < d.length)for (; c < d.length; c++)d[c].atlasIndex++;
        var d = a.children, e;
        if (d) {
            c = 0;
            for (l = d.length || 0; c < l; c++)if (e = d[c]) {
                var f = this.atlasIndexForChild(e, e.zIndex);
                this.insertChild(e,
                    f)
            }
        }
    }, appendChild: null, _appendChildForCanvas: function (a) {
        this._reorderChildDirty = !0;
        a.batchNode = this;
        a.dirty = !0;
        this._descendants.push(a);
        a.atlasIndex = this._descendants.length - 1;
        a = a.children;
        for (var b = 0, c = a.length || 0; b < c; b++)this.appendChild(a[b])
    }, _appendChildForWebGL: function (a) {
        this._reorderChildDirty = !0;
        a.batchNode = this;
        a.dirty = !0;
        this._descendants.push(a);
        var b = this._descendants.length - 1;
        a.atlasIndex = b;
        var c = this.textureAtlas;
        c.totalQuads == c.capacity && this.increaseAtlasCapacity();
        c.insertQuad(a.quad,
            b);
        a = a.children;
        b = 0;
        for (c = a.length || 0; b < c; b++)this.appendChild(a[b])
    }, removeSpriteFromAtlas: null, _removeSpriteFromAtlasForCanvas: function (a) {
        a.batchNode = null;
        var b = this._descendants, c = b.indexOf(a);
        if (-1 != c) {
            b.splice(c, 1);
            for (var d = b.length; c < d; ++c)b[c].atlasIndex--
        }
        if (a = a.children) {
            b = 0;
            for (c = a.length || 0; b < c; b++)a[b] && this.removeSpriteFromAtlas(a[b])
        }
    }, _removeSpriteFromAtlasForWebGL: function (a) {
        this.textureAtlas.removeQuadAtIndex(a.atlasIndex);
        a.batchNode = null;
        var b = this._descendants, c = b.indexOf(a);
        if (-1 != c) {
            b.splice(c, 1);
            for (var d = b.length; c < d; ++c)b[c].atlasIndex--
        }
        if (a = a.children) {
            b = 0;
            for (c = a.length || 0; b < c; b++)a[b] && this.removeSpriteFromAtlas(a[b])
        }
    }, getTexture: null, _getTextureForCanvas: function () {
        return this._textureForCanvas
    }, _getTextureForWebGL: function () {
        return this.textureAtlas.texture
    }, setTexture: null, _setTextureForCanvas: function (a) {
        this._textureForCanvas = a;
        for (var b = this._children, c = 0; c < b.length; c++)b[c].texture = a
    }, _setTextureForWebGL: function (a) {
        this.textureAtlas.texture = a;
        this._updateBlendFunc()
    },
    visit: null, _visitForCanvas: function (a) {
        var b = a || cc._renderContext;
        if (this._visible) {
            b.save();
            this.transform(a);
            var c = this._children;
            if (c) {
                this.sortAllChildren();
                for (a = 0; a < c.length; a++)c[a] && c[a].visit(b)
            }
            b.restore()
        }
    }, _visitForWebGL: function (a) {
        a = a || cc._renderContext;
        if (this._visible) {
            cc.kmGLPushMatrix();
            var b = this.grid;
            b && b.isActive() && (b.beforeDraw(), this.transformAncestors());
            this.sortAllChildren();
            this.transform(a);
            this.draw(a);
            b && b.isActive() && b.afterDraw(this);
            cc.kmGLPopMatrix();
            this.arrivalOrder =
                0
        }
    }, addChild: null, _addChildForCanvas: function (a, b, c) {
        cc.assert(null != a, cc._LogInfos.CCSpriteBatchNode_addChild_3);
        a instanceof cc.Sprite ? (b = null == b ? a.zIndex : b, c = null == c ? a.tag : c, cc.Node.prototype.addChild.call(this, a, b, c), this.appendChild(a), this.setNodeDirty()) : cc.log(cc._LogInfos.CCSpriteBatchNode_addChild)
    }, _addChildForWebGL: function (a, b, c) {
        cc.assert(null != a, cc._LogInfos.Sprite_addChild_6);
        a instanceof cc.Sprite ? a.texture != this.textureAtlas.texture ? cc.log(cc._LogInfos.Sprite_addChild_5) : (b = null ==
            b ? a.zIndex : b, c = null == c ? a.tag : c, cc.Node.prototype.addChild.call(this, a, b, c), this.appendChild(a), this.setNodeDirty()) : cc.log(cc._LogInfos.Sprite_addChild_4)
    }, removeAllChildren: null, _removeAllChildrenForCanvas: function (a) {
        var b = this._descendants;
        if (b && 0 < b.length)for (var c = 0, d = b.length; c < d; c++)b[c] && (b[c].batchNode = null);
        cc.Node.prototype.removeAllChildren.call(this, a);
        this._descendants.length = 0
    }, _removeAllChildrenForWebGL: function (a) {
        var b = this._descendants;
        if (b && 0 < b.length)for (var c = 0, d = b.length; c <
            d; c++)b[c] && (b[c].batchNode = null);
        cc.Node.prototype.removeAllChildren.call(this, a);
        this._descendants.length = 0;
        this.textureAtlas.removeAllQuads()
    }, sortAllChildren: null, _sortAllChildrenForCanvas: function () {
        if (this._reorderChildDirty) {
            var a, b = 0, c = this._children, d = c.length, e;
            for (a = 1; a < d; a++) {
                var f = c[a], b = a - 1;
                for (e = c[b]; 0 <= b && (f._localZOrder < e._localZOrder || f._localZOrder == e._localZOrder && f.arrivalOrder < e.arrivalOrder);)c[b + 1] = e, b -= 1, e = c[b];
                c[b + 1] = f
            }
            0 < c.length && this._arrayMakeObjectsPerformSelector(c,
                cc.Node.StateCallbackType.sortAllChildren);
            this._reorderChildDirty = !1
        }
    }, _sortAllChildrenForWebGL: function () {
        if (this._reorderChildDirty) {
            var a = this._children, b, c = 0, d = a.length, e;
            for (b = 1; b < d; b++) {
                var f = a[b], c = b - 1;
                for (e = a[c]; 0 <= c && (f._localZOrder < e._localZOrder || f._localZOrder == e._localZOrder && f.arrivalOrder < e.arrivalOrder);)a[c + 1] = e, c -= 1, e = a[c];
                a[c + 1] = f
            }
            if (0 < a.length) {
                this._arrayMakeObjectsPerformSelector(a, cc.Node.StateCallbackType.sortAllChildren);
                for (b = c = 0; b < a.length; b++)c = this._updateAtlasIndex(a[b],
                    c)
            }
            this._reorderChildDirty = !1
        }
    }, draw: null, _drawForWebGL: function () {
        0 !== this.textureAtlas.totalQuads && (this._shaderProgram.use(), this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(), this._arrayMakeObjectsPerformSelector(this._children, cc.Node.StateCallbackType.updateTransform), cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst), this.textureAtlas.drawQuads())
    }});
_p = cc.SpriteBatchNode.prototype;
cc._renderType === cc._RENDER_TYPE_WEBGL ? (_p.ctor = _p._ctorForWebGL, _p.updateQuadFromSprite = _p._updateQuadFromSpriteForWebGL, _p.insertQuadFromSprite = _p._insertQuadFromSpriteForWebGL, _p.initWithTexture = _p._initWithTextureForWebGL, _p.appendChild = _p._appendChildForWebGL, _p.removeSpriteFromAtlas = _p._removeSpriteFromAtlasForWebGL, _p.getTexture = _p._getTextureForWebGL, _p.setTexture = _p._setTextureForWebGL, _p.visit = _p._visitForWebGL, _p.addChild = _p._addChildForWebGL, _p.removeAllChildren = _p._removeAllChildrenForWebGL,
    _p.sortAllChildren = _p._sortAllChildrenForWebGL, _p.draw = _p._drawForWebGL) : (_p.ctor = _p._ctorForCanvas, _p.updateQuadFromSprite = _p._updateQuadFromSpriteForCanvas, _p.insertQuadFromSprite = _p._insertQuadFromSpriteForCanvas, _p.initWithTexture = _p._initWithTextureForCanvas, _p.appendChild = _p._appendChildForCanvas, _p.removeSpriteFromAtlas = _p._removeSpriteFromAtlasForCanvas, _p.getTexture = _p._getTextureForCanvas, _p.setTexture = _p._setTextureForCanvas, _p.visit = _p._visitForCanvas, _p.removeAllChildren = _p._removeAllChildrenForCanvas,
    _p.addChild = _p._addChildForCanvas, _p.sortAllChildren = _p._sortAllChildrenForCanvas, _p.draw = cc.Node.prototype.draw);
cc.defineGetterSetter(_p, "texture", _p.getTexture, _p.setTexture);
cc.defineGetterSetter(_p, "descendants", _p.getDescendants);
cc.SpriteBatchNode.create = function (a, b) {
    return new cc.SpriteBatchNode(a, b)
};
cc.configuration = {ERROR: 0, STRING: 1, INT: 2, DOUBLE: 3, BOOLEAN: 4, _maxTextureSize: 0, _maxModelviewStackDepth: 0, _supportsPVRTC: !1, _supportsNPOT: !1, _supportsBGRA8888: !1, _supportsDiscardFramebuffer: !1, _supportsShareableVAO: !1, _maxSamplesAllowed: 0, _maxTextureUnits: 0, _GlExtensions: "", _valueDict: {}, _inited: !1, _init: function () {
    var a = this._valueDict;
    a["cocos2d.x.version"] = cc.ENGINE_VERSION;
    a["cocos2d.x.compiled_with_profiler"] = !1;
    a["cocos2d.x.compiled_with_gl_state_cache"] = cc.ENABLE_GL_STATE_CACHE;
    this._inited = !0
}, getMaxTextureSize: function () {
    return this._maxTextureSize
}, getMaxModelviewStackDepth: function () {
    return this._maxModelviewStackDepth
}, getMaxTextureUnits: function () {
    return this._maxTextureUnits
}, supportsNPOT: function () {
    return this._supportsNPOT
}, supportsPVRTC: function () {
    return this._supportsPVRTC
}, supportsETC: function () {
    return!1
}, supportsS3TC: function () {
    return!1
}, supportsATITC: function () {
    return!1
}, supportsBGRA8888: function () {
    return this._supportsBGRA8888
}, supportsDiscardFramebuffer: function () {
    return this._supportsDiscardFramebuffer
},
    supportsShareableVAO: function () {
        return this._supportsShareableVAO
    }, checkForGLExtension: function (a) {
        return-1 < this._GlExtensions.indexOf(a)
    }, getValue: function (a, b) {
        this._inited || this._init();
        var c = this._valueDict;
        return c[a] ? c[a] : b
    }, setValue: function (a, b) {
        this._valueDict[a] = b
    }, dumpInfo: function () {
        0 === cc.ENABLE_GL_STATE_CACHE && (cc.log(""), cc.log(cc._LogInfos.configuration_dumpInfo), cc.log(""))
    }, gatherGPUInfo: function () {
        if (cc._renderType !== cc._RENDER_TYPE_CANVAS) {
            this._inited || this._init();
            var a = cc._renderContext,
                b = this._valueDict;
            b["gl.vendor"] = a.getParameter(a.VENDOR);
            b["gl.renderer"] = a.getParameter(a.RENDERER);
            b["gl.version"] = a.getParameter(a.VERSION);
            this._GlExtensions = "";
            for (var c = a.getSupportedExtensions(), d = 0; d < c.length; d++)this._GlExtensions += c[d] + " ";
            this._maxTextureSize = a.getParameter(a.MAX_TEXTURE_SIZE);
            b["gl.max_texture_size"] = this._maxTextureSize;
            this._maxTextureUnits = a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            b["gl.max_texture_units"] = this._maxTextureUnits;
            this._supportsPVRTC = this.checkForGLExtension("GL_IMG_texture_compression_pvrtc");
            b["gl.supports_PVRTC"] = this._supportsPVRTC;
            this._supportsNPOT = !1;
            b["gl.supports_NPOT"] = this._supportsNPOT;
            this._supportsBGRA8888 = this.checkForGLExtension("GL_IMG_texture_format_BGRA888");
            b["gl.supports_BGRA8888"] = this._supportsBGRA8888;
            this._supportsDiscardFramebuffer = this.checkForGLExtension("GL_EXT_discard_framebuffer");
            b["gl.supports_discard_framebuffer"] = this._supportsDiscardFramebuffer;
            this._supportsShareableVAO = this.checkForGLExtension("vertex_array_object");
            b["gl.supports_vertex_array_object"] =
                this._supportsShareableVAO;
            cc.checkGLErrorDebug()
        }
    }, loadConfigFile: function (a) {
        this._inited || this._init();
        var b = cc.loader.getRes(a);
        if (!b)throw"Please load the resource first : " + a;
        cc.assert(b, cc._LogInfos.configuration_loadConfigFile_2, a);
        if (b = b.data)for (var c in b)this._valueDict[c] = b[c]; else cc.log(cc._LogInfos.configuration_loadConfigFile, a)
    }};
cc.Camera = cc.Class.extend({_eyeX: null, _eyeY: null, _eyeZ: null, _centerX: null, _centerY: null, _centerZ: null, _upX: null, _upY: null, _upZ: null, _dirty: null, _lookupMatrix: null, ctor: function () {
    this._lookupMatrix = new cc.kmMat4;
    this.restore()
}, description: function () {
    return"\x3cCCCamera | center \x3d(" + this._centerX + "," + this._centerY + "," + this._centerZ + ")\x3e"
}, setDirty: function (a) {
    this._dirty = a
}, isDirty: function () {
    return this._dirty
}, restore: function () {
    this._eyeX = this._eyeY = 0;
    this._eyeZ = cc.Camera.getZEye();
    this._upX =
        this._centerX = this._centerY = this._centerZ = 0;
    this._upY = 1;
    this._upZ = 0;
    cc.kmMat4Identity(this._lookupMatrix);
    this._dirty = !1
}, locate: function () {
    if (this._dirty) {
        var a = new cc.kmVec3, b = new cc.kmVec3, c = new cc.kmVec3;
        cc.kmVec3Fill(a, this._eyeX, this._eyeY, this._eyeZ);
        cc.kmVec3Fill(b, this._centerX, this._centerY, this._centerZ);
        cc.kmVec3Fill(c, this._upX, this._upY, this._upZ);
        cc.kmMat4LookAt(this._lookupMatrix, a, b, c);
        this._dirty = !1
    }
    cc.kmGLMultMatrix(this._lookupMatrix)
}, setEyeXYZ: function (a, b, c) {
    this.setEye(a, b,
        c)
}, setEye: function (a, b, c) {
    this._eyeX = a;
    this._eyeY = b;
    this._eyeZ = c;
    this._dirty = !0
}, setCenterXYZ: function (a, b, c) {
    this.setCenter(a, b, c)
}, setCenter: function (a, b, c) {
    this._centerX = a;
    this._centerY = b;
    this._centerZ = c;
    this._dirty = !0
}, setUpXYZ: function (a, b, c) {
    this.setUp(a, b, c)
}, setUp: function (a, b, c) {
    this._upX = a;
    this._upY = b;
    this._upZ = c;
    this._dirty = !0
}, getEyeXYZ: function (a, b, c) {
    return{x: this._eyeX, y: this._eyeY, z: this._eyeZ}
}, getEye: function () {
    return{x: this._eyeX, y: this._eyeY, z: this._eyeZ}
}, getCenterXYZ: function (a, b, c) {
    return{x: this._centerX, y: this._centerY, z: this._centerZ}
}, getCenter: function () {
    return{x: this._centerX, y: this._centerY, z: this._centerZ}
}, getUpXYZ: function (a, b, c) {
    return{x: this._upX, y: this._upY, z: this._upZ}
}, getUp: function () {
    return{x: this._upX, y: this._upY, z: this._upZ}
}, _DISALLOW_COPY_AND_ASSIGN: function (a) {
}});
cc.Camera.getZEye = function () {
    return cc.FLT_EPSILON
};
cc.PI2 = 2 * Math.PI;
cc.DrawingPrimitiveCanvas = cc.Class.extend({_cacheArray: [], _renderContext: null, ctor: function (a) {
    this._renderContext = a
}, drawPoint: function (a, b) {
    b || (b = 1);
    var c = cc.view.getScaleX(), d = cc.view.getScaleY(), d = cc.p(a.x * c, a.y * d);
    this._renderContext.beginPath();
    this._renderContext.arc(d.x, -d.y, b * c, 0, 2 * Math.PI, !1);
    this._renderContext.closePath();
    this._renderContext.fill()
}, drawPoints: function (a, b, c) {
    if (null != a) {
        c || (c = 1);
        b = this._renderContext;
        var d = cc.view.getScaleX(), e = cc.view.getScaleY();
        b.beginPath();
        for (var f =
            0, g = a.length; f < g; f++)b.arc(a[f].x * d, -a[f].y * e, c * d, 0, 2 * Math.PI, !1);
        b.closePath();
        b.fill()
    }
}, drawLine: function (a, b) {
    var c = this._renderContext, d = cc.view.getScaleX(), e = cc.view.getScaleY();
    c.beginPath();
    c.moveTo(a.x * d, -a.y * e);
    c.lineTo(b.x * d, -b.y * e);
    c.closePath();
    c.stroke()
}, drawRect: function (a, b) {
    this.drawLine(cc.p(a.x, a.y), cc.p(b.x, a.y));
    this.drawLine(cc.p(b.x, a.y), cc.p(b.x, b.y));
    this.drawLine(cc.p(b.x, b.y), cc.p(a.x, b.y));
    this.drawLine(cc.p(a.x, b.y), cc.p(a.x, a.y))
}, drawSolidRect: function (a, b, c) {
    a = [a,
        cc.p(b.x, a.y), b, cc.p(a.x, b.y)];
    this.drawSolidPoly(a, 4, c)
}, drawPoly: function (a, b, c, d) {
    d = d || !1;
    if (null != a) {
        if (3 > a.length)throw Error("Polygon's point must greater than 2");
        var e = a[0];
        b = this._renderContext;
        var f = cc.view.getScaleX(), g = cc.view.getScaleY();
        b.beginPath();
        b.moveTo(e.x * f, -e.y * g);
        for (var e = 1, h = a.length; e < h; e++)b.lineTo(a[e].x * f, -a[e].y * g);
        c && b.closePath();
        d ? b.fill() : b.stroke()
    }
}, drawSolidPoly: function (a, b, c) {
    this.setDrawColor(c.r, c.g, c.b, c.a);
    this.drawPoly(a, b, !0, !0)
}, drawCircle: function (a, b, c, d, e) {
    e = e || !1;
    d = this._renderContext;
    var f = cc.view.getScaleX(), g = cc.view.getScaleY();
    d.beginPath();
    d.arc(0 | a.x * f, 0 | -(a.y * g), b * f, -c, -(c - 2 * Math.PI), !1);
    e && d.lineTo(0 | a.x * f, 0 | -(a.y * g));
    d.stroke()
}, drawQuadBezier: function (a, b, c, d) {
    for (var e = this._cacheArray, f = e.length = 0, g = 0; g < d; g++) {
        var h = Math.pow(1 - f, 2) * a.x + 2 * (1 - f) * f * b.x + f * f * c.x, k = Math.pow(1 - f, 2) * a.y + 2 * (1 - f) * f * b.y + f * f * c.y;
        e.push(cc.p(h, k));
        f += 1 / d
    }
    e.push(cc.p(c.x, c.y));
    this.drawPoly(e, d + 1, !1, !1)
}, drawCubicBezier: function (a, b, c, d, e) {
    for (var f = this._cacheArray,
             g = f.length = 0, h = 0; h < e; h++) {
        var k = Math.pow(1 - g, 3) * a.x + 3 * Math.pow(1 - g, 2) * g * b.x + 3 * (1 - g) * g * g * c.x + g * g * g * d.x, m = Math.pow(1 - g, 3) * a.y + 3 * Math.pow(1 - g, 2) * g * b.y + 3 * (1 - g) * g * g * c.y + g * g * g * d.y;
        f.push(cc.p(k, m));
        g += 1 / e
    }
    f.push(cc.p(d.x, d.y));
    this.drawPoly(f, e + 1, !1, !1)
}, drawCatmullRom: function (a, b) {
    this.drawCardinalSpline(a, 0.5, b)
}, drawCardinalSpline: function (a, b, c) {
    cc._renderContext.strokeStyle = "rgba(255,255,255,1)";
    var d = this._cacheArray;
    d.length = 0;
    for (var e, f, g = 1 / a.length, h = 0; h < c + 1; h++)f = h / c, 1 == f ? (e = a.length - 1, f = 1) :
        (e = 0 | f / g, f = (f - g * e) / g), e = cc.CardinalSplineAt(cc.getControlPointAt(a, e - 1), cc.getControlPointAt(a, e - 0), cc.getControlPointAt(a, e + 1), cc.getControlPointAt(a, e + 2), b, f), d.push(e);
    this.drawPoly(d, c + 1, !1, !1)
}, drawImage: function (a, b, c, d, e) {
    switch (arguments.length) {
        case 2:
            this._renderContext.drawImage(a, b.x, -(b.y + a.height));
            break;
        case 3:
            this._renderContext.drawImage(a, b.x, -(b.y + c.height), c.width, c.height);
            break;
        case 5:
            this._renderContext.drawImage(a, b.x, b.y, c.width, c.height, d.x, -(d.y + e.height), e.width, e.height);
            break;
        default:
            throw Error("Argument must be non-nil");
    }
}, drawStar: function (a, b, c) {
    a = a || this._renderContext;
    b *= cc.view.getScaleX();
    c = "rgba(" + (0 | c.r) + "," + (0 | c.g) + "," + (0 | c.b);
    a.fillStyle = c + ",1)";
    var d = b / 10;
    a.beginPath();
    a.moveTo(-b, b);
    a.lineTo(0, d);
    a.lineTo(b, b);
    a.lineTo(d, 0);
    a.lineTo(b, -b);
    a.lineTo(0, -d);
    a.lineTo(-b, -b);
    a.lineTo(-d, 0);
    a.lineTo(-b, b);
    a.closePath();
    a.fill();
    var e = a.createRadialGradient(0, 0, d, 0, 0, b);
    e.addColorStop(0, c + ", 1)");
    e.addColorStop(0.3, c + ", 0.8)");
    e.addColorStop(1, c + ", 0.0)");
    a.fillStyle = e;
    a.beginPath();
    a.arc(0, 0, b - d, 0, cc.PI2, !1);
    a.closePath();
    a.fill()
}, drawColorBall: function (a, b, c) {
    a = a || this._renderContext;
    b *= cc.view.getScaleX();
    c = "rgba(" + (0 | c.r) + "," + (0 | c.g) + "," + (0 | c.b);
    var d = a.createRadialGradient(0, 0, b / 10, 0, 0, b);
    d.addColorStop(0, c + ", 1)");
    d.addColorStop(0.3, c + ", 0.8)");
    d.addColorStop(0.6, c + ", 0.4)");
    d.addColorStop(1, c + ", 0.0)");
    a.fillStyle = d;
    a.beginPath();
    a.arc(0, 0, b, 0, cc.PI2, !1);
    a.closePath();
    a.fill()
}, fillText: function (a, b, c) {
    this._renderContext.fillText(a, b, -c)
},
    setDrawColor: function (a, b, c, d) {
        this._renderContext.fillStyle = "rgba(" + a + "," + b + "," + c + "," + d / 255 + ")";
        this._renderContext.strokeStyle = "rgba(" + a + "," + b + "," + c + "," + d / 255 + ")"
    }, setPointSize: function (a) {
    }, setLineWidth: function (a) {
        this._renderContext.lineWidth = a * cc.view.getScaleX()
    }});
cc.DrawingPrimitiveWebGL = cc.Class.extend({_renderContext: null, _initialized: !1, _shader: null, _colorLocation: -1, _colorArray: null, _pointSizeLocation: -1, _pointSize: -1, ctor: function (a) {
    null == a && (a = cc._renderContext);
    if (!a instanceof WebGLRenderingContext)throw"Can't initialise DrawingPrimitiveWebGL. context need is WebGLRenderingContext";
    this._renderContext = a;
    this._colorArray = new Float32Array([1, 1, 1, 1])
}, lazy_init: function () {
    this._initialized || (this._shader = cc.shaderCache.programForKey(cc.SHADER_POSITION_UCOLOR),
        this._colorLocation = this._renderContext.getUniformLocation(this._shader.getProgram(), "u_color"), this._pointSizeLocation = this._renderContext.getUniformLocation(this._shader.getProgram(), "u_pointSize"), this._initialized = !0)
}, drawInit: function () {
    this._initialized = !1
}, drawPoint: function (a) {
    this.lazy_init();
    var b = this._renderContext;
    this._shader.use();
    this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
    b.uniform4fv(this._colorLocation,
        this._colorArray);
    this._shader.setUniformLocationWith1f(this._pointSizeLocation, this._pointSize);
    var c = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, c);
    b.bufferData(b.ARRAY_BUFFER, new Float32Array([a.x, a.y]), b.STATIC_DRAW);
    b.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, b.FLOAT, !1, 0, 0);
    b.drawArrays(b.POINTS, 0, 1);
    b.deleteBuffer(c);
    cc.incrementGLDraws(1)
}, drawPoints: function (a, b) {
    if (a && 0 != a.length) {
        this.lazy_init();
        var c = this._renderContext;
        this._shader.use();
        this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
        c.uniform4fv(this._colorLocation, this._colorArray);
        this._shader.setUniformLocationWith1f(this._pointSizeLocation, this._pointSize);
        var d = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, d);
        c.bufferData(c.ARRAY_BUFFER, this._pointsToTypeArray(a), c.STATIC_DRAW);
        c.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, c.FLOAT, !1, 0, 0);
        c.drawArrays(c.POINTS, 0, a.length);
        c.deleteBuffer(d);
        cc.incrementGLDraws(1)
    }
}, _pointsToTypeArray: function (a) {
    for (var b = new Float32Array(2 *
        a.length), c = 0; c < a.length; c++)b[2 * c] = a[c].x, b[2 * c + 1] = a[c].y;
    return b
}, drawLine: function (a, b) {
    this.lazy_init();
    var c = this._renderContext;
    this._shader.use();
    this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
    c.uniform4fv(this._colorLocation, this._colorArray);
    var d = c.createBuffer();
    c.bindBuffer(c.ARRAY_BUFFER, d);
    c.bufferData(c.ARRAY_BUFFER, this._pointsToTypeArray([a, b]), c.STATIC_DRAW);
    c.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION,
        2, c.FLOAT, !1, 0, 0);
    c.drawArrays(c.LINES, 0, 2);
    c.deleteBuffer(d);
    cc.incrementGLDraws(1)
}, drawRect: function (a, b) {
    this.drawLine(cc.p(a.x, a.y), cc.p(b.x, a.y));
    this.drawLine(cc.p(b.x, a.y), cc.p(b.x, b.y));
    this.drawLine(cc.p(b.x, b.y), cc.p(a.x, b.y));
    this.drawLine(cc.p(a.x, b.y), cc.p(a.x, a.y))
}, drawSolidRect: function (a, b, c) {
    a = [a, cc.p(b.x, a.y), b, cc.p(a.x, b.y)];
    this.drawSolidPoly(a, 4, c)
}, drawPoly: function (a, b, c) {
    this.lazy_init();
    b = this._renderContext;
    this._shader.use();
    this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
    b.uniform4fv(this._colorLocation, this._colorArray);
    var d = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, d);
    b.bufferData(b.ARRAY_BUFFER, this._pointsToTypeArray(a), b.STATIC_DRAW);
    b.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, b.FLOAT, !1, 0, 0);
    c ? b.drawArrays(b.LINE_LOOP, 0, a.length) : b.drawArrays(b.LINE_STRIP, 0, a.length);
    b.deleteBuffer(d);
    cc.incrementGLDraws(1)
}, drawSolidPoly: function (a, b, c) {
    this.lazy_init();
    c && this.setDrawColor(c.r, c.g, c.b, c.a);
    b = this._renderContext;
    this._shader.use();
    this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
    b.uniform4fv(this._colorLocation, this._colorArray);
    c = b.createBuffer();
    b.bindBuffer(b.ARRAY_BUFFER, c);
    b.bufferData(b.ARRAY_BUFFER, this._pointsToTypeArray(a), b.STATIC_DRAW);
    b.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, b.FLOAT, !1, 0, 0);
    b.drawArrays(b.TRIANGLE_FAN, 0, a.length);
    b.deleteBuffer(c);
    cc.incrementGLDraws(1)
}, drawCircle: function (a, b, c, d, e) {
    this.lazy_init();
    var f = 1;
    e && f++;
    var g = 2 * Math.PI / d;
    if (e = new Float32Array(2 * (d + 2))) {
        for (var h = 0; h <= d; h++) {
            var k = h * g, m = b * Math.cos(k + c) + a.x, k = b * Math.sin(k + c) + a.y;
            e[2 * h] = m;
            e[2 * h + 1] = k
        }
        e[2 * (d + 1)] = a.x;
        e[2 * (d + 1) + 1] = a.y;
        a = this._renderContext;
        this._shader.use();
        this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
        a.uniform4fv(this._colorLocation, this._colorArray);
        b = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, b);
        a.bufferData(a.ARRAY_BUFFER,
            e, a.STATIC_DRAW);
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.LINE_STRIP, 0, d + f);
        a.deleteBuffer(b);
        cc.incrementGLDraws(1)
    }
}, drawQuadBezier: function (a, b, c, d) {
    this.lazy_init();
    for (var e = new Float32Array(2 * (d + 1)), f = 0, g = 0; g < d; g++)e[2 * g] = Math.pow(1 - f, 2) * a.x + 2 * (1 - f) * f * b.x + f * f * c.x, e[2 * g + 1] = Math.pow(1 - f, 2) * a.y + 2 * (1 - f) * f * b.y + f * f * c.y, f += 1 / d;
    e[2 * d] = c.x;
    e[2 * d + 1] = c.y;
    a = this._renderContext;
    this._shader.use();
    this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
    a.uniform4fv(this._colorLocation, this._colorArray);
    b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
    a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, !1, 0, 0);
    a.drawArrays(a.LINE_STRIP, 0, d + 1);
    a.deleteBuffer(b);
    cc.incrementGLDraws(1)
}, drawCubicBezier: function (a, b, c, d, e) {
    this.lazy_init();
    for (var f = new Float32Array(2 * (e + 1)), g = 0, h = 0; h < e; h++)f[2 * h] = Math.pow(1 - g, 3) * a.x + 3 * Math.pow(1 - g, 2) * g * b.x + 3 * (1 - g) * g * g * c.x + g * g * g * d.x, f[2 * h + 1] = Math.pow(1 - g, 3) * a.y + 3 * Math.pow(1 -
        g, 2) * g * b.y + 3 * (1 - g) * g * g * c.y + g * g * g * d.y, g += 1 / e;
    f[2 * e] = d.x;
    f[2 * e + 1] = d.y;
    a = this._renderContext;
    this._shader.use();
    this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
    a.uniform4fv(this._colorLocation, this._colorArray);
    b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, f, a.STATIC_DRAW);
    a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, !1, 0, 0);
    a.drawArrays(a.LINE_STRIP, 0, e + 1);
    a.deleteBuffer(b);
    cc.incrementGLDraws(1)
},
    drawCatmullRom: function (a, b) {
        this.drawCardinalSpline(a, 0.5, b)
    }, drawCardinalSpline: function (a, b, c) {
        this.lazy_init();
        for (var d = new Float32Array(2 * (c + 1)), e, f, g = 1 / a.length, h = 0; h < c + 1; h++)f = h / c, 1 == f ? (e = a.length - 1, f = 1) : (e = 0 | f / g, f = (f - g * e) / g), e = cc.CardinalSplineAt(cc.getControlPointAt(a, e - 1), cc.getControlPointAt(a, e), cc.getControlPointAt(a, e + 1), cc.getControlPointAt(a, e + 2), b, f), d[2 * h] = e.x, d[2 * h + 1] = e.y;
        a = this._renderContext;
        this._shader.use();
        this._shader.setUniformForModelViewAndProjectionMatrixWithMat4();
        cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION);
        a.uniform4fv(this._colorLocation, this._colorArray);
        b = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, b);
        a.bufferData(a.ARRAY_BUFFER, d, a.STATIC_DRAW);
        a.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.LINE_STRIP, 0, c + 1);
        a.deleteBuffer(b);
        cc.incrementGLDraws(1)
    }, setDrawColor: function (a, b, c, d) {
        this._colorArray[0] = a / 255;
        this._colorArray[1] = b / 255;
        this._colorArray[2] = c / 255;
        this._colorArray[3] = d / 255
    }, setPointSize: function (a) {
        this._pointSize =
            a * cc.contentScaleFactor()
    }, setLineWidth: function (a) {
        this._renderContext.lineWidth && this._renderContext.lineWidth(a)
    }});
cc.HashElement = cc.Class.extend({actions: null, target: null, actionIndex: 0, currentAction: null, currentActionSalvaged: !1, paused: !1, hh: null, ctor: function () {
    this.actions = [];
    this.target = null;
    this.actionIndex = 0;
    this.currentAction = null;
    this.paused = this.currentActionSalvaged = !1;
    this.hh = null
}});
cc.ActionManager = cc.Class.extend({_hashTargets: null, _arrayTargets: null, _currentTarget: null, _currentTargetSalvaged: !1, _searchElementByTarget: function (a, b) {
    for (var c = 0; c < a.length; c++)if (b == a[c].target)return a[c];
    return null
}, ctor: function () {
    this._hashTargets = {};
    this._arrayTargets = [];
    this._currentTarget = null;
    this._currentTargetSalvaged = !1
}, addAction: function (a, b, c) {
    if (!a)throw"cc.ActionManager.addAction(): action must be non-null";
    if (!b)throw"cc.ActionManager.addAction(): action must be non-null";
    var d =
        this._hashTargets[b.__instanceId];
    d || (d = new cc.HashElement, d.paused = c, d.target = b, this._hashTargets[b.__instanceId] = d, this._arrayTargets.push(d));
    this._actionAllocWithHashElement(d);
    d.actions.push(a);
    a.startWithTarget(b)
}, removeAllActions: function () {
    for (var a = this._arrayTargets, b = 0; b < a.length; b++) {
        var c = a[b];
        c && this.removeAllActionsFromTarget(c.target, !0)
    }
}, removeAllActionsFromTarget: function (a, b) {
    if (null != a) {
        var c = this._hashTargets[a.__instanceId];
        c && (-1 !== c.actions.indexOf(c.currentAction) && !c.currentActionSalvaged &&
            (c.currentActionSalvaged = !0), c.actions.length = 0, this._currentTarget == c && !b ? this._currentTargetSalvaged = !0 : this._deleteHashElement(c))
    }
}, removeAction: function (a) {
    if (null != a) {
        var b = a.getOriginalTarget();
        if (b = this._hashTargets[b.__instanceId])for (var c = 0; c < b.actions.length; c++) {
            if (b.actions[c] == a) {
                b.actions.splice(c, 1);
                break
            }
        } else cc.log(cc._LogInfos.ActionManager_removeAction)
    }
}, removeActionByTag: function (a, b) {
    a == cc.ACTION_TAG_INVALID && cc.log(cc._LogInfos.ActionManager_addAction);
    cc.assert(b, cc._LogInfos.ActionManager_addAction);
    var c = this._hashTargets[b.__instanceId];
    if (c)for (var d = c.actions.length, e = 0; e < d; ++e) {
        var f = c.actions[e];
        if (f && f.getTag() === a && f.getOriginalTarget() == b) {
            this._removeActionAtIndex(e, c);
            break
        }
    }
}, getActionByTag: function (a, b) {
    a == cc.ACTION_TAG_INVALID && cc.log(cc._LogInfos.ActionManager_getActionByTag);
    var c = this._hashTargets[b.__instanceId];
    if (c) {
        if (null != c.actions)for (var d = 0; d < c.actions.length; ++d) {
            var e = c.actions[d];
            if (e && e.getTag() === a)return e
        }
        cc.log(cc._LogInfos.ActionManager_getActionByTag_2, a)
    }
    return null
},
    numberOfRunningActionsInTarget: function (a) {
        return(a = this._hashTargets[a.__instanceId]) ? a.actions ? a.actions.length : 0 : 0
    }, pauseTarget: function (a) {
        if (a = this._hashTargets[a.__instanceId])a.paused = !0
    }, resumeTarget: function (a) {
        if (a = this._hashTargets[a.__instanceId])a.paused = !1
    }, pauseAllRunningActions: function () {
        for (var a = [], b = this._arrayTargets, c = 0; c < b.length; c++) {
            var d = b[c];
            d && !d.paused && (d.paused = !0, a.push(d.target))
        }
        return a
    }, resumeTargets: function (a) {
        if (a)for (var b = 0; b < a.length; b++)a[b] && this.resumeTarget(a[b])
    },
    purgeSharedManager: function () {
        cc.director.getScheduler().unscheduleUpdateForTarget(this)
    }, _removeActionAtIndex: function (a, b) {
        b.actions[a] == b.currentAction && !b.currentActionSalvaged && (b.currentActionSalvaged = !0);
        b.actions.splice(a, 1);
        b.actionIndex >= a && b.actionIndex--;
        0 == b.actions.length && (this._currentTarget == b ? this._currentTargetSalvaged = !0 : this._deleteHashElement(b))
    }, _deleteHashElement: function (a) {
        a && (delete this._hashTargets[a.target.__instanceId], cc.arrayRemoveObject(this._arrayTargets, a), a.actions =
            null, a.target = null)
    }, _actionAllocWithHashElement: function (a) {
        null == a.actions && (a.actions = [])
    }, update: function (a) {
        for (var b = this._arrayTargets, c, d = 0; d < b.length; d++) {
            c = this._currentTarget = b[d];
            if (!c.paused)for (c.actionIndex = 0; c.actionIndex < c.actions.length; c.actionIndex++)if (c.currentAction = c.actions[c.actionIndex], c.currentAction) {
                c.currentActionSalvaged = !1;
                c.currentAction.step(a * (c.currentAction._speedMethod ? c.currentAction._speed : 1));
                if (c.currentActionSalvaged)c.currentAction = null; else if (c.currentAction.isDone()) {
                    c.currentAction.stop();
                    var e = c.currentAction;
                    c.currentAction = null;
                    this.removeAction(e)
                }
                c.currentAction = null
            }
            this._currentTargetSalvaged && 0 === c.actions.length && this._deleteHashElement(c)
        }
    }});cc._LogInfos = {ActionManager_addAction: "cc.ActionManager.addAction(): action must be non-null", ActionManager_removeAction: "cocos2d: removeAction: Target not found", ActionManager_removeActionByTag: "cc.ActionManager.removeActionByTag(): an invalid tag", ActionManager_removeActionByTag_2: "cc.ActionManager.removeActionByTag(): target must be non-null", ActionManager_getActionByTag: "cc.ActionManager.getActionByTag(): an invalid tag", ActionManager_getActionByTag_2: "cocos2d : getActionByTag(tag \x3d %s): Action not found",
    configuration_dumpInfo: "cocos2d: **** WARNING **** CC_ENABLE_PROFILERS is defined. Disable it when you finish profiling (from ccConfig.js)", configuration_loadConfigFile: "Expected 'data' dict, but not found. Config file: %s", configuration_loadConfigFile_2: "Please load the resource first : %s", Director_resume: "cocos2d: Director: Error in gettimeofday", Director_setProjection: "cocos2d: Director: unrecognized projection", Director_popToSceneStackLevel: "cocos2d: Director: unrecognized projection", Director_popToSceneStackLevel_2: "cocos2d: Director: Error in gettimeofday",
    Director_popScene: "running scene should not null", Director_pushScene: "the scene should not null", arrayVerifyType: "element type is wrong!", Scheduler_scheduleCallbackForTarget: "CCSheduler#scheduleCallback. Callback already scheduled. Updating interval from:%s to %s", Scheduler_scheduleCallbackForTarget_2: "cc.scheduler.scheduleCallbackForTarget(): callback_fn should be non-null.", Scheduler_scheduleCallbackForTarget_3: "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.", Scheduler_pauseTarget: "cc.Scheduler.pauseTarget():target should be non-null",
    Scheduler_resumeTarget: "cc.Scheduler.resumeTarget():target should be non-null", Scheduler_isTargetPaused: "cc.Scheduler.isTargetPaused():target should be non-null", Node_getZOrder: "getZOrder is deprecated. Please use getLocalZOrder instead.", Node_setZOrder: "setZOrder is deprecated. Please use setLocalZOrder instead.", Node_getRotation: "RotationX !\x3d RotationY. Don't know which one to return", Node_getScale: "ScaleX !\x3d ScaleY. Don't know which one to return", Node_addChild: "An Node can't be added as a child of itself.",
    Node_addChild_2: "child already added. It can't be added again", Node_addChild_3: "child must be non-null", Node_removeFromParentAndCleanup: "removeFromParentAndCleanup is deprecated. Use removeFromParent instead", Node_removeChildByTag: "argument tag is an invalid tag", Node_removeChildByTag_2: "cocos2d: removeChildByTag(tag \x3d %s): child not found!", Node_removeAllChildrenWithCleanup: "removeAllChildrenWithCleanup is deprecated. Use removeAllChildren instead", Node_stopActionByTag: "cc.Node.stopActionBy(): argument tag an invalid tag",
    Node_getActionByTag: "cc.Node.getActionByTag(): argument tag is an invalid tag", Node_resumeSchedulerAndActions: "resumeSchedulerAndActions is deprecated, please use resume instead.", Node_pauseSchedulerAndActions: "pauseSchedulerAndActions is deprecated, please use pause instead.", Node__arrayMakeObjectsPerformSelector: "Unknown callback function", Node_reorderChild: "child must be non-null", Node_runAction: "cc.Node.runAction(): action must be non-null", Node_schedule: "callback function must be non-null", Node_schedule_2: "interval must be positive",
    Node_initWithTexture: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.", AtlasNode_updateAtlasValues: "cc.AtlasNode.updateAtlasValues(): Shall be overridden in subclasses", AtlasNode_initWithTileFile: "", AtlasNode__initWithTexture: "cocos2d: Could not initialize cc.AtlasNode. Invalid Texture.", _EventListenerKeyboard_checkAvailable: "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!", _EventListenerTouchOneByOne_checkAvailable: "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
    _EventListenerTouchAllAtOnce_checkAvailable: "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!", _EventListenerAcceleration_checkAvailable: "cc._EventListenerAcceleration.checkAvailable(): _onAccelerationEvent must be non-nil", EventListener_create: "Invalid parameter.", __getListenerID: "Don't call this method if the event is for touch.", eventManager__forceAddEventListener: "Invalid scene graph priority!", eventManager_addListener: "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
    eventManager_removeListeners: "Invalid listener type!", eventManager_setPriority: "Can't set fixed priority with scene graph based listener.", eventManager_addListener_2: "Invalid parameters.", eventManager_addListener_3: "listener must be a cc.EventListener object when adding a fixed priority listener", eventManager_addListener_4: "The listener has been registered, please don't register it again.", LayerMultiplex_initWithLayers: "parameters should not be ending with null in Javascript", LayerMultiplex_switchTo: "Invalid index in MultiplexLayer switchTo message",
    LayerMultiplex_switchToAndReleaseMe: "Invalid index in MultiplexLayer switchTo message", LayerMultiplex_addLayer: "cc.Layer.addLayer(): layer should be non-null", EGLView_setDesignResolutionSize: "Resolution not valid", EGLView_setDesignResolutionSize_2: "should set resolutionPolicy", inputManager_handleTouchesBegin: "The touches is more than MAX_TOUCHES, nUnusedIndex \x3d %s", swap: "cc.swap is being modified from original macro, please check usage", checkGLErrorDebug: "WebGL error %s", animationCache__addAnimationsWithDictionary: "cocos2d: cc.AnimationCache: No animations were found in provided dictionary.",
    animationCache__addAnimationsWithDictionary_2: "cc.AnimationCache. Invalid animation format", animationCache_addAnimations: "cc.AnimationCache.addAnimations(): File could not be found", animationCache__parseVersion1: "cocos2d: cc.AnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.", animationCache__parseVersion1_2: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.",
    animationCache__parseVersion1_3: "cocos2d: cc.AnimationCache: None of the frames for animation '%s' were found in the cc.SpriteFrameCache. Animation is not being added to the Animation Cache.", animationCache__parseVersion1_4: "cocos2d: cc.AnimationCache: An animation in your dictionary refers to a frame which is not in the cc.SpriteFrameCache. Some or all of the frames for the animation '%s' may be missing.", animationCache__parseVersion2: "cocos2d: CCAnimationCache: Animation '%s' found in dictionary without any frames - cannot add to animation cache.",
    animationCache__parseVersion2_2: "cocos2d: cc.AnimationCache: Animation '%s' refers to frame '%s' which is not currently in the cc.SpriteFrameCache. This frame will not be added to the animation.", animationCache_addAnimations_2: "cc.AnimationCache.addAnimations(): Invalid texture file name", Sprite_reorderChild: "cc.Sprite.reorderChild(): this child is not in children list", Sprite_ignoreAnchorPointForPosition: "cc.Sprite.ignoreAnchorPointForPosition(): it is invalid in cc.Sprite when using SpriteBatchNode",
    Sprite_setDisplayFrameWithAnimationName: "cc.Sprite.setDisplayFrameWithAnimationName(): Frame not found", Sprite_setDisplayFrameWithAnimationName_2: "cc.Sprite.setDisplayFrameWithAnimationName(): Invalid frame index", Sprite_setDisplayFrame: "setDisplayFrame is deprecated, please use setSpriteFrame instead.", Sprite__updateBlendFunc: "cc.Sprite._updateBlendFunc(): _updateBlendFunc doesn't work when the sprite is rendered using a cc.CCSpriteBatchNode", Sprite_initWithSpriteFrame: "cc.Sprite.initWithSpriteFrame(): spriteFrame should be non-null",
    Sprite_initWithSpriteFrameName: "cc.Sprite.initWithSpriteFrameName(): spriteFrameName should be non-null", Sprite_initWithSpriteFrameName1: " is null, please check.", Sprite_initWithFile: "cc.Sprite.initWithFile(): filename should be non-null", Sprite_setDisplayFrameWithAnimationName_3: "cc.Sprite.setDisplayFrameWithAnimationName(): animationName must be non-null", Sprite_reorderChild_2: "cc.Sprite.reorderChild(): child should be non-null", Sprite_addChild: "cc.Sprite.addChild(): cc.Sprite only supports cc.Sprites as children when using cc.SpriteBatchNode",
    Sprite_addChild_2: "cc.Sprite.addChild(): cc.Sprite only supports a sprite using same texture as children when using cc.SpriteBatchNode", Sprite_addChild_3: "cc.Sprite.addChild(): child should be non-null", Sprite_setTexture: "cc.Sprite.texture setter: Batched sprites should use the same texture as the batchnode", Sprite_updateQuadFromSprite: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children", Sprite_insertQuadFromSprite: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children",
    Sprite_addChild_4: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children", Sprite_addChild_5: "cc.SpriteBatchNode.addChild(): cc.Sprite is not using the same texture", Sprite_initWithTexture: "Sprite.initWithTexture(): Argument must be non-nil ", Sprite_setSpriteFrame: "Invalid spriteFrameName", Sprite_setTexture_2: "Invalid argument: cc.Sprite.texture setter expects a CCTexture2D.", Sprite_updateQuadFromSprite_2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null",
    Sprite_insertQuadFromSprite_2: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null", Sprite_addChild_6: "cc.SpriteBatchNode.addChild(): child should be non-null", SpriteBatchNode_addSpriteWithoutQuad: "cc.SpriteBatchNode.addQuadFromSprite(): SpriteBatchNode only supports cc.Sprites as children", SpriteBatchNode_increaseAtlasCapacity: "cocos2d: CCSpriteBatchNode: resizing TextureAtlas capacity from %s to %s.", SpriteBatchNode_increaseAtlasCapacity_2: "cocos2d: WARNING: Not enough memory to resize the atlas",
    SpriteBatchNode_reorderChild: "cc.SpriteBatchNode.addChild(): Child doesn't belong to Sprite", SpriteBatchNode_removeChild: "cc.SpriteBatchNode.addChild(): sprite batch node should contain the child", SpriteBatchNode_addSpriteWithoutQuad_2: "cc.SpriteBatchNode.addQuadFromSprite(): child should be non-null", SpriteBatchNode_reorderChild_2: "cc.SpriteBatchNode.addChild():child should be non-null", spriteFrameCache__getFrameConfig: "cocos2d: WARNING: originalWidth/Height not found on the cc.SpriteFrame. AnchorPoint won't work as expected. Regenrate the .plist",
    spriteFrameCache_addSpriteFrames: "cocos2d: WARNING: an alias with name %s already exists", spriteFrameCache__checkConflict: "cocos2d: WARNING: Sprite frame: %s has already been added by another source, please fix name conflit", spriteFrameCache_getSpriteFrame: "cocos2d: cc.SpriteFrameCahce: Frame %s not found", spriteFrameCache__getFrameConfig_2: "Please load the resource first : %s", spriteFrameCache_addSpriteFrames_2: "cc.SpriteFrameCache.addSpriteFrames(): plist should be non-null", spriteFrameCache_addSpriteFrames_3: "Argument must be non-nil",
    CCSpriteBatchNode_updateQuadFromSprite: "cc.SpriteBatchNode.updateQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children", CCSpriteBatchNode_insertQuadFromSprite: "cc.SpriteBatchNode.insertQuadFromSprite(): cc.SpriteBatchNode only supports cc.Sprites as children", CCSpriteBatchNode_addChild: "cc.SpriteBatchNode.addChild(): cc.SpriteBatchNode only supports cc.Sprites as children", CCSpriteBatchNode_initWithTexture: "Sprite.initWithTexture(): Argument must be non-nil ", CCSpriteBatchNode_addChild_2: "cc.Sprite.addChild(): child should be non-null",
    CCSpriteBatchNode_setSpriteFrame: "Invalid spriteFrameName", CCSpriteBatchNode_setTexture: "Invalid argument: cc.Sprite texture setter expects a CCTexture2D.", CCSpriteBatchNode_updateQuadFromSprite_2: "cc.SpriteBatchNode.updateQuadFromSprite(): sprite should be non-null", CCSpriteBatchNode_insertQuadFromSprite_2: "cc.SpriteBatchNode.insertQuadFromSprite(): sprite should be non-null", CCSpriteBatchNode_addChild_3: "cc.SpriteBatchNode.addChild(): child should be non-null", TextureAtlas_initWithFile: "cocos2d: Could not open file: %s",
    TextureAtlas_insertQuad: "cc.TextureAtlas.insertQuad(): invalid totalQuads", TextureAtlas_initWithTexture: "cc.TextureAtlas.initWithTexture():texture should be non-null", TextureAtlas_updateQuad: "cc.TextureAtlas.updateQuad(): quad should be non-null", TextureAtlas_updateQuad_2: "cc.TextureAtlas.updateQuad(): Invalid index", TextureAtlas_insertQuad_2: "cc.TextureAtlas.insertQuad(): Invalid index", TextureAtlas_insertQuads: "cc.TextureAtlas.insertQuad(): Invalid index + amount", TextureAtlas_insertQuadFromIndex: "cc.TextureAtlas.insertQuadFromIndex(): Invalid newIndex",
    TextureAtlas_insertQuadFromIndex_2: "cc.TextureAtlas.insertQuadFromIndex(): Invalid fromIndex", TextureAtlas_removeQuadAtIndex: "cc.TextureAtlas.removeQuadAtIndex(): Invalid index", TextureAtlas_removeQuadsAtIndex: "cc.TextureAtlas.removeQuadsAtIndex(): index + amount out of bounds", TextureAtlas_moveQuadsFromIndex: "cc.TextureAtlas.moveQuadsFromIndex(): move is out of bounds", TextureAtlas_moveQuadsFromIndex_2: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid newIndex", TextureAtlas_moveQuadsFromIndex_3: "cc.TextureAtlas.moveQuadsFromIndex(): Invalid oldIndex",
    textureCache_addPVRTCImage: "TextureCache:addPVRTCImage does not support on HTML5", textureCache_addETCImage: "TextureCache:addPVRTCImage does not support on HTML5", textureCache_addPVRImage: "addPVRImage does not support on HTML5", textureCache_addUIImage: "cocos2d: Couldn't add UIImage in TextureCache", textureCache_dumpCachedTextureInfo: "cocos2d: '%s' id\x3d%s %s x %s", textureCache_dumpCachedTextureInfo_2: "cocos2d: '%s' id\x3d HTMLCanvasElement %s x %s", textureCache_dumpCachedTextureInfo_3: "cocos2d: TextureCache dumpDebugInfo: %s textures, HTMLCanvasElement for %s KB (%s MB)",
    textureCache_addUIImage_2: "cc.Texture.addUIImage(): image should be non-null", Texture2D_initWithETCFile: "initWithETCFile does not support on HTML5", Texture2D_initWithPVRFile: "initWithPVRFile does not support on HTML5", Texture2D_initWithPVRTCData: "initWithPVRTCData does not support on HTML5", Texture2D_addImage: "cc.Texture.addImage(): path should be non-null", Texture2D_initWithImage: "cocos2d: cc.Texture2D. Can't create Texture. UIImage is nil", Texture2D_initWithImage_2: "cocos2d: WARNING: Image (%s x %s) is bigger than the supported %s x %s",
    Texture2D_initWithString: "initWithString isn't supported on cocos2d-html5", Texture2D_initWithETCFile_2: "initWithETCFile does not support on HTML5", Texture2D_initWithPVRFile_2: "initWithPVRFile does not support on HTML5", Texture2D_initWithPVRTCData_2: "initWithPVRTCData does not support on HTML5", Texture2D_bitsPerPixelForFormat: "bitsPerPixelForFormat: %s, cannot give useful result, it's a illegal pixel format", Texture2D__initPremultipliedATextureWithImage: "cocos2d: cc.Texture2D: Using RGB565 texture since image has no alpha",
    Texture2D_addImage_2: "cc.Texture.addImage(): path should be non-null", Texture2D_initWithData: "NSInternalInconsistencyException", MissingFile: "Missing file: %s", radiansToDegress: "cc.radiansToDegress() should be called cc.radiansToDegrees()", RectWidth: "Rect width exceeds maximum margin: %s", RectHeight: "Rect height exceeds maximum margin: %s", EventManager__updateListeners: "If program goes here, there should be event in dispatch.", EventManager__updateListeners_2: "_inDispatch should be 1 here."};
cc._logToWebPage = function (msg) {
    if (!cc._canvas)return;
    var logList = cc._logList;
    var doc = document;
    if (!logList) {
        var logDiv = doc.createElement("Div");
        var logDivStyle = logDiv.style;
        logDiv.setAttribute("id", "logInfoDiv");
        cc._canvas.parentNode.appendChild(logDiv);
        logDiv.setAttribute("width", "200");
        logDiv.setAttribute("height", cc._canvas.height);
        logDivStyle.zIndex = "99999";
        logDivStyle.position = "absolute";
        logDivStyle.top = "0";
        logDivStyle.left = "0";
        logList = cc._logList = doc.createElement("textarea");
        var logListStyle =
            logList.style;
        logList.setAttribute("rows", "20");
        logList.setAttribute("cols", "30");
        logList.setAttribute("disabled", true);
        logDiv.appendChild(logList);
        logListStyle.backgroundColor = "transparent";
        logListStyle.borderBottom = "1px solid #cccccc";
        logListStyle.borderRightWidth = "0px";
        logListStyle.borderLeftWidth = "0px";
        logListStyle.borderTopWidth = "0px";
        logListStyle.borderTopStyle = "none";
        logListStyle.borderRightStyle = "none";
        logListStyle.borderLeftStyle = "none";
        logListStyle.padding = "0px";
        logListStyle.margin = 0
    }
    msg =
            typeof msg == "string" ? msg : JSON.stringify(msg);
    logList.value = logList.value + msg + "\r\n";
    logList.scrollTop = logList.scrollHeight
};
cc._formatString = function (arg) {
    if (typeof arg === "object")try {
        return JSON.stringify(arg)
    } catch (err) {
        return""
    } else return arg
};
if (console.log) {
    cc.log = function (msg) {
        for (var i = 1; i < arguments.length; i++)msg = msg.replace(/(%s)|(%d)/, cc._formatString(arguments[i]));
        console.log(msg)
    };
    cc.warn = console.warn ? function (msg) {
        for (var i = 1; i < arguments.length; i++)msg = msg.replace(/(%s)|(%d)/, cc._formatString(arguments[i]));
        console.warn(msg)
    } : cc.log;
    cc.error = console.error ? function (msg) {
        for (var i = 1; i < arguments.length; i++)msg = msg.replace(/(%s)|(%d)/, cc._formatString(arguments[i]));
        console.error(msg)
    } : cc.log;
    cc.assert = function (cond, msg) {
        if (!cond &&
            msg) {
            for (var i = 2; i < arguments.length; i++)msg = msg.replace(/(%s)|(%d)/, cc._formatString(arguments[i]));
            throw msg;
        }
    }
}
var mode = cc.game.config[cc.game.CONFIG_KEY.debugMode];
var ccGame = cc.game;
if (console.log && mode === ccGame.DEBUG_MODE_INFO); else if (mode == ccGame.DEBUG_MODE_INFO_FOR_WEB_PAGE)cc.log = cc._logToWebPage.bind(cc); else cc.log = function () {
};
if (!mode || mode == ccGame.DEBUG_MODE_NONE || mode == ccGame.DEBUG_MODE_ERROR || mode == ccGame.DEBUG_MODE_ERROR_FOR_WEB_PAGE)cc.warn = function () {
};
if (mode == ccGame.DEBUG_MODE_INFO_FOR_WEB_PAGE || mode == ccGame.DEBUG_MODE_WARN_FOR_WEB_PAGE || !console.warn)cc.warn = cc._logToWebPage.bind(cc);
if (!mode || mode == ccGame.DEBUG_MODE_NONE) {
    cc.error = function () {
    };
    cc.assert = function () {
    }
} else if (mode == ccGame.DEBUG_MODE_INFO_FOR_WEB_PAGE || mode == ccGame.DEBUG_MODE_WARN_FOR_WEB_PAGE || mode == ccGame.DEBUG_MODE_ERROR_FOR_WEB_PAGE || !console.error) {
    cc.error = cc._logToWebPage.bind(cc);
    cc.assert = function (cond, msg) {
        if (!cond && msg) {
            for (var i = 2; i < arguments.length; i++)msg = msg.replace("%s", arguments[i]);
            cc._logToWebPage(msg)
        }
    }
}
;cc.ACTION_TAG_INVALID = -1;
cc.Action = cc.Class.extend({originalTarget: null, target: null, tag: cc.ACTION_TAG_INVALID, ctor: function () {
    this.originalTarget = null;
    this.target = null;
    this.tag = cc.ACTION_TAG_INVALID
}, copy: function () {
    cc.log("copy is deprecated. Please use clone instead.");
    return this.clone()
}, clone: function () {
    var action = new cc.Action;
    action.originalTarget = null;
    action.target = null;
    action.tag = this.tag;
    return action
}, isDone: function () {
    return true
}, startWithTarget: function (target) {
    this.originalTarget = target;
    this.target = target
},
    stop: function () {
        this.target = null
    }, step: function (dt) {
        cc.log("[Action step]. override me")
    }, update: function (time) {
        cc.log("[Action update]. override me")
    }, getTarget: function () {
        return this.target
    }, setTarget: function (target) {
        this.target = target
    }, getOriginalTarget: function () {
        return this.originalTarget
    }, setOriginalTarget: function (originalTarget) {
        this.originalTarget = originalTarget
    }, getTag: function () {
        return this.tag
    }, setTag: function (tag) {
        this.tag = tag
    }, retain: function () {
    }, release: function () {
    }});
cc.Action.create = function () {
    return new cc.Action
};
cc.FiniteTimeAction = cc.Action.extend({_duration: 0, ctor: function () {
    cc.Action.prototype.ctor.call(this);
    this._duration = 0
}, getDuration: function () {
    return this._duration * (this._times || 1)
}, setDuration: function (duration) {
    this._duration = duration
}, reverse: function () {
    cc.log("cocos2d: FiniteTimeAction#reverse: Implement me");
    return null
}, clone: function () {
    return new cc.FiniteTimeAction
}});
cc.Speed = cc.Action.extend({_speed: 0, _innerAction: null, ctor: function (action, speed) {
    cc.Action.prototype.ctor.call(this);
    this._speed = 0;
    this._innerAction = null;
    action && this.initWithAction(action, speed)
}, getSpeed: function () {
    return this._speed
}, setSpeed: function (speed) {
    this._speed = speed
}, initWithAction: function (action, speed) {
    if (!action)throw"cc.Speed.initWithAction(): action must be non nil";
    this._innerAction = action;
    this._speed = speed;
    return true
}, clone: function () {
    var action = new cc.Speed;
    action.initWithAction(this._innerAction.clone(),
        this._speed);
    return action
}, startWithTarget: function (target) {
    cc.Action.prototype.startWithTarget.call(this, target);
    this._innerAction.startWithTarget(target)
}, stop: function () {
    this._innerAction.stop();
    cc.Action.prototype.stop.call(this)
}, step: function (dt) {
    this._innerAction.step(dt * this._speed)
}, isDone: function () {
    return this._innerAction.isDone()
}, reverse: function () {
    return cc.Speed.create(this._innerAction.reverse(), this._speed)
}, setInnerAction: function (action) {
    if (this._innerAction != action)this._innerAction =
        action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.Speed.create = function (action, speed) {
    return new cc.Speed(action, speed)
};
cc.Follow = cc.Action.extend({_followedNode: null, _boundarySet: false, _boundaryFullyCovered: false, _halfScreenSize: null, _fullScreenSize: null, leftBoundary: 0, rightBoundary: 0, topBoundary: 0, bottomBoundary: 0, _worldRect: null, ctor: function (followedNode, rect) {
    cc.Action.prototype.ctor.call(this);
    this._followedNode = null;
    this._boundarySet = false;
    this._boundaryFullyCovered = false;
    this._halfScreenSize = null;
    this._fullScreenSize = null;
    this.leftBoundary = 0;
    this.rightBoundary = 0;
    this.topBoundary = 0;
    this.bottomBoundary = 0;
    this._worldRect =
        cc.rect(0, 0, 0, 0);
    if (followedNode)rect ? this.initWithTarget(followedNode, rect) : this.initWithTarget(followedNode)
}, clone: function () {
    var action = new cc.Follow;
    var locRect = this._worldRect;
    var rect = new cc.Rect(locRect.x, locRect.y, locRect.width, locRect.height);
    action.initWithTarget(this._followedNode, rect);
    return action
}, isBoundarySet: function () {
    return this._boundarySet
}, setBoudarySet: function (value) {
    this._boundarySet = value
}, initWithTarget: function (followedNode, rect) {
    if (!followedNode)throw"cc.Follow.initWithAction(): followedNode must be non nil";
    var _this = this;
    rect = rect || cc.rect(0, 0, 0, 0);
    _this._followedNode = followedNode;
    _this._worldRect = rect;
    _this._boundarySet = !cc._rectEqualToZero(rect);
    _this._boundaryFullyCovered = false;
    var winSize = cc.director.getWinSize();
    _this._fullScreenSize = cc.p(winSize.width, winSize.height);
    _this._halfScreenSize = cc.pMult(_this._fullScreenSize, 0.5);
    if (_this._boundarySet) {
        _this.leftBoundary = -(rect.x + rect.width - _this._fullScreenSize.x);
        _this.rightBoundary = -rect.x;
        _this.topBoundary = -rect.y;
        _this.bottomBoundary = -(rect.y +
            rect.height - _this._fullScreenSize.y);
        if (_this.rightBoundary < _this.leftBoundary)_this.rightBoundary = _this.leftBoundary = (_this.leftBoundary + _this.rightBoundary) / 2;
        if (_this.topBoundary < _this.bottomBoundary)_this.topBoundary = _this.bottomBoundary = (_this.topBoundary + _this.bottomBoundary) / 2;
        if (_this.topBoundary == _this.bottomBoundary && _this.leftBoundary == _this.rightBoundary)_this._boundaryFullyCovered = true
    }
    return true
}, step: function (dt) {
    var tempPosX = this._followedNode.x;
    var tempPosY = this._followedNode.y;
    tempPosX = this._halfScreenSize.x - tempPosX;
    tempPosY = this._halfScreenSize.y - tempPosY;
    if (this._boundarySet) {
        if (this._boundaryFullyCovered)return;
        this.target.setPosition(cc.clampf(tempPosX, this.leftBoundary, this.rightBoundary), cc.clampf(tempPosY, this.bottomBoundary, this.topBoundary))
    } else this.target.setPosition(tempPosX, tempPosY)
}, isDone: function () {
    return!this._followedNode.running
}, stop: function () {
    this.target = null;
    cc.Action.prototype.stop.call(this)
}});
cc.Follow.create = function (followedNode, rect) {
    return new cc.Follow(followedNode, rect)
};
cc.ActionInterval = cc.FiniteTimeAction.extend({_elapsed: 0, _firstTick: false, _easeList: null, _times: 1, _repeatForever: false, _repeatMethod: false, _speed: 1, _speedMethod: false, ctor: function (d) {
    this._speed = 1;
    this._times = 1;
    this._repeatForever = false;
    this.MAX_VALUE = 2;
    this._repeatMethod = false;
    this._speedMethod = false;
    cc.FiniteTimeAction.prototype.ctor.call(this);
    d !== undefined && this.initWithDuration(d)
}, getElapsed: function () {
    return this._elapsed
}, initWithDuration: function (d) {
    this._duration = d === 0 ? cc.FLT_EPSILON : d;
    this._elapsed = 0;
    this._firstTick = true;
    return true
}, isDone: function () {
    return this._elapsed >= this._duration
}, _cloneDecoration: function (action) {
    action._repeatForever = this._repeatForever;
    action._speed = this._speed;
    action._times = this._times;
    action._easeList = this._easeList;
    action._speedMethod = this._speedMethod;
    action._repeatMethod = this._repeatMethod
}, _reverseEaseList: function (action) {
    if (this._easeList) {
        action._easeList = [];
        for (var i = 0; i < this._easeList.length; i++)action._easeList.push(this._easeList[i].reverse())
    }
},
    clone: function () {
        var action = new cc.ActionInterval(this._duration);
        this._cloneDecoration(action);
        return action
    }, easing: function (easeObj) {
        if (this._easeList)this._easeList.length = 0; else this._easeList = [];
        for (var i = 0; i < arguments.length; i++)this._easeList.push(arguments[i]);
        return this
    }, _computeEaseTime: function (dt) {
        var locList = this._easeList;
        if (!locList || locList.length === 0)return dt;
        for (var i = 0, n = locList.length; i < n; i++)dt = locList[i].easing(dt);
        return dt
    }, step: function (dt) {
        if (this._firstTick) {
            this._firstTick =
                false;
            this._elapsed = 0
        } else this._elapsed += dt;
        var t = this._elapsed / (this._duration > 1.192092896E-7 ? this._duration : 1.192092896E-7);
        t = 1 > t ? t : 1;
        this.update(t > 0 ? t : 0);
        if (this._repeatMethod && this._times > 1 && this.isDone()) {
            if (!this._repeatForever)this._times--;
            this.startWithTarget(this.target);
            this.step(this._elapsed - this._duration)
        }
    }, startWithTarget: function (target) {
        cc.Action.prototype.startWithTarget.call(this, target);
        this._elapsed = 0;
        this._firstTick = true
    }, reverse: function () {
        cc.log("cc.IntervalAction: reverse not implemented.");
        return null
    }, setAmplitudeRate: function (amp) {
        cc.log("cc.ActionInterval.setAmplitudeRate(): it should be overridden in subclass.")
    }, getAmplitudeRate: function () {
        cc.log("cc.ActionInterval.getAmplitudeRate(): it should be overridden in subclass.");
        return 0
    }, speed: function (speed) {
        if (speed <= 0) {
            cc.log("The speed parameter error");
            return this
        }
        this._speedMethod = true;
        this._speed *= speed;
        return this
    }, getSpeed: function () {
        return this._speed
    }, setSpeed: function (speed) {
        this._speed = speed;
        return this
    }, repeat: function (times) {
        times =
            Math.round(times);
        if (isNaN(times) || times < 1) {
            cc.log("The repeat parameter error");
            return this
        }
        this._repeatMethod = true;
        this._times *= times;
        return this
    }, repeatForever: function () {
        this._repeatMethod = true;
        this._times = this.MAX_VALUE;
        this._repeatForever = true;
        return this
    }});
cc.ActionInterval.create = function (d) {
    return new cc.ActionInterval(d)
};
cc.Sequence = cc.ActionInterval.extend({_actions: null, _split: null, _last: 0, ctor: function (tempArray) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._actions = [];
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null)cc.log("parameters should not be ending with null in Javascript");
    if (last >= 0) {
        var prev = paramArray[0], action1;
        for (var i = 1; i < last; i++)if (paramArray[i]) {
            action1 = prev;
            prev = cc.Sequence._actionOneTwo(action1, paramArray[i])
        }
        this.initWithTwoActions(prev,
            paramArray[last])
    }
}, initWithTwoActions: function (actionOne, actionTwo) {
    if (!actionOne || !actionTwo)throw"cc.Sequence.initWithTwoActions(): arguments must all be non nil";
    var d = actionOne._duration + actionTwo._duration;
    this.initWithDuration(d);
    this._actions[0] = actionOne;
    this._actions[1] = actionTwo;
    return true
}, clone: function () {
    var action = new cc.Sequence;
    this._cloneDecoration(action);
    action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._split = this._actions[0]._duration / this._duration;
    this._last = -1
}, stop: function () {
    if (this._last !== -1)this._actions[this._last].stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    var new_t, found = 0;
    var locSplit = this._split, locActions = this._actions, locLast = this._last;
    if (time < locSplit) {
        new_t = locSplit !== 0 ? time / locSplit : 1;
        if (found === 0 && locLast === 1) {
            locActions[1].update(0);
            locActions[1].stop()
        }
    } else {
        found = 1;
        new_t = locSplit === 1 ? 1 : (time - locSplit) / (1 -
            locSplit);
        if (locLast === -1) {
            locActions[0].startWithTarget(this.target);
            locActions[0].update(1);
            locActions[0].stop()
        }
        if (!locLast) {
            locActions[0].update(1);
            locActions[0].stop()
        }
    }
    if (locLast === found && locActions[found].isDone())return;
    if (locLast !== found)locActions[found].startWithTarget(this.target);
    locActions[found].update(new_t);
    this._last = found
}, reverse: function () {
    var action = cc.Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Sequence.create = function (tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null)cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++)if (paramArray[i])prev = cc.Sequence._actionOneTwo(prev, paramArray[i]);
    return prev
};
cc.Sequence._actionOneTwo = function (actionOne, actionTwo) {
    var sequence = new cc.Sequence;
    sequence.initWithTwoActions(actionOne, actionTwo);
    return sequence
};
cc.Repeat = cc.ActionInterval.extend({_times: 0, _total: 0, _nextDt: 0, _actionInstant: false, _innerAction: null, ctor: function (action, times) {
    cc.ActionInterval.prototype.ctor.call(this);
    times !== undefined && this.initWithAction(action, times)
}, initWithAction: function (action, times) {
    var duration = action._duration * times;
    if (this.initWithDuration(duration)) {
        this._times = times;
        this._innerAction = action;
        if (action instanceof cc.ActionInstant) {
            this._actionInstant = true;
            this._times -= 1
        }
        this._total = 0;
        return true
    }
    return false
},
    clone: function () {
        var action = new cc.Repeat;
        this._cloneDecoration(action);
        action.initWithAction(this._innerAction.clone(), this._times);
        return action
    }, startWithTarget: function (target) {
        this._total = 0;
        this._nextDt = this._innerAction._duration / this._duration;
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._innerAction.startWithTarget(target)
    }, stop: function () {
        this._innerAction.stop();
        cc.Action.prototype.stop.call(this)
    }, update: function (time) {
        time = this._computeEaseTime(time);
        var locInnerAction =
            this._innerAction;
        var locDuration = this._duration;
        var locTimes = this._times;
        var locNextDt = this._nextDt;
        if (time >= locNextDt) {
            while (time > locNextDt && this._total < locTimes) {
                locInnerAction.update(1);
                this._total++;
                locInnerAction.stop();
                locInnerAction.startWithTarget(this.target);
                locNextDt += locInnerAction._duration / locDuration;
                this._nextDt = locNextDt
            }
            if (time >= 1 && this._total < locTimes)this._total++;
            if (!this._actionInstant)if (this._total === locTimes) {
                locInnerAction.update(1);
                locInnerAction.stop()
            } else locInnerAction.update(time -
                (locNextDt - locInnerAction._duration / locDuration))
        } else locInnerAction.update(time * locTimes % 1)
    }, isDone: function () {
        return this._total == this._times
    }, reverse: function () {
        var action = cc.Repeat.create(this._innerAction.reverse(), this._times);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action
    }, setInnerAction: function (action) {
        if (this._innerAction != action)this._innerAction = action
    }, getInnerAction: function () {
        return this._innerAction
    }});
cc.Repeat.create = function (action, times) {
    return new cc.Repeat(action, times)
};
cc.RepeatForever = cc.ActionInterval.extend({_innerAction: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._innerAction = null;
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.RepeatForever.initWithAction(): action must be non null";
    this._innerAction = action;
    return true
}, clone: function () {
    var action = new cc.RepeatForever;
    this._cloneDecoration(action);
    action.initWithAction(this._innerAction.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._innerAction.startWithTarget(target)
}, step: function (dt) {
    var locInnerAction = this._innerAction;
    locInnerAction.step(dt);
    if (locInnerAction.isDone()) {
        locInnerAction.startWithTarget(this.target);
        locInnerAction.step(locInnerAction.getElapsed() - locInnerAction._duration)
    }
}, isDone: function () {
    return false
}, reverse: function () {
    var action = cc.RepeatForever.create(this._innerAction.reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, setInnerAction: function (action) {
    if (this._innerAction !=
        action)this._innerAction = action
}, getInnerAction: function () {
    return this._innerAction
}});
cc.RepeatForever.create = function (action) {
    return new cc.RepeatForever(action)
};
cc.Spawn = cc.ActionInterval.extend({_one: null, _two: null, ctor: function (tempArray) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._one = null;
    this._two = null;
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    var last = paramArray.length - 1;
    if (last >= 0 && paramArray[last] == null)cc.log("parameters should not be ending with null in Javascript");
    if (last >= 0) {
        var prev = paramArray[0], action1;
        for (var i = 1; i < last; i++)if (paramArray[i]) {
            action1 = prev;
            prev = cc.Spawn._actionOneTwo(action1, paramArray[i])
        }
        this.initWithTwoActions(prev,
            paramArray[last])
    }
}, initWithTwoActions: function (action1, action2) {
    if (!action1 || !action2)throw"cc.Spawn.initWithTwoActions(): arguments must all be non null";
    var ret = false;
    var d1 = action1._duration;
    var d2 = action2._duration;
    if (this.initWithDuration(Math.max(d1, d2))) {
        this._one = action1;
        this._two = action2;
        if (d1 > d2)this._two = cc.Sequence._actionOneTwo(action2, cc.DelayTime.create(d1 - d2)); else if (d1 < d2)this._one = cc.Sequence._actionOneTwo(action1, cc.DelayTime.create(d2 - d1));
        ret = true
    }
    return ret
}, clone: function () {
    var action =
        new cc.Spawn;
    this._cloneDecoration(action);
    action.initWithTwoActions(this._one.clone(), this._two.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._one.startWithTarget(target);
    this._two.startWithTarget(target)
}, stop: function () {
    this._one.stop();
    this._two.stop();
    cc.Action.prototype.stop.call(this)
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this._one)this._one.update(time);
    if (this._two)this._two.update(time)
}, reverse: function () {
    var action =
        cc.Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Spawn.create = function (tempArray) {
    var paramArray = tempArray instanceof Array ? tempArray : arguments;
    if (paramArray.length > 0 && paramArray[paramArray.length - 1] == null)cc.log("parameters should not be ending with null in Javascript");
    var prev = paramArray[0];
    for (var i = 1; i < paramArray.length; i++)if (paramArray[i] != null)prev = cc.Spawn._actionOneTwo(prev, paramArray[i]);
    return prev
};
cc.Spawn._actionOneTwo = function (action1, action2) {
    var pSpawn = new cc.Spawn;
    pSpawn.initWithTwoActions(action1, action2);
    return pSpawn
};
cc.RotateTo = cc.ActionInterval.extend({_dstAngleX: 0, _startAngleX: 0, _diffAngleX: 0, _dstAngleY: 0, _startAngleY: 0, _diffAngleY: 0, ctor: function (duration, deltaAngleX, deltaAngleY) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY)
}, initWithDuration: function (duration, deltaAngleX, deltaAngleY) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._dstAngleX = deltaAngleX || 0;
        this._dstAngleY = deltaAngleY || this._dstAngleX;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.RotateTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._dstAngleX, this._dstAngleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locStartAngleX = target.rotationX % 360;
    var locDiffAngleX = this._dstAngleX - locStartAngleX;
    if (locDiffAngleX > 180)locDiffAngleX -= 360;
    if (locDiffAngleX < -180)locDiffAngleX += 360;
    this._startAngleX = locStartAngleX;
    this._diffAngleX =
        locDiffAngleX;
    this._startAngleY = target.rotationY % 360;
    var locDiffAngleY = this._dstAngleY - this._startAngleY;
    if (locDiffAngleY > 180)locDiffAngleY -= 360;
    if (locDiffAngleY < -180)locDiffAngleY += 360;
    this._diffAngleY = locDiffAngleY
}, reverse: function () {
    cc.log("cc.RotateTo.reverse(): it should be overridden in subclass.")
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.rotationX = this._startAngleX + this._diffAngleX * time;
        this.target.rotationY = this._startAngleY + this._diffAngleY * time
    }
}});
cc.RotateTo.create = function (duration, deltaAngleX, deltaAngleY) {
    return new cc.RotateTo(duration, deltaAngleX, deltaAngleY)
};
cc.RotateBy = cc.ActionInterval.extend({_angleX: 0, _startAngleX: 0, _angleY: 0, _startAngleY: 0, ctor: function (duration, deltaAngleX, deltaAngleY) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(duration, deltaAngleX, deltaAngleY)
}, initWithDuration: function (duration, deltaAngleX, deltaAngleY) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._angleX = deltaAngleX || 0;
        this._angleY = deltaAngleY || this._angleX;
        return true
    }
    return false
}, clone: function () {
    var action =
        new cc.RotateBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._angleX, this._angleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startAngleX = target.rotationX;
    this._startAngleY = target.rotationY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.rotationX = this._startAngleX + this._angleX * time;
        this.target.rotationY = this._startAngleY + this._angleY * time
    }
}, reverse: function () {
    var action =
        cc.RotateBy.create(this._duration, -this._angleX, -this._angleY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.RotateBy.create = function (duration, deltaAngleX, deltaAngleY) {
    var rotateBy = new cc.RotateBy;
    rotateBy.initWithDuration(duration, deltaAngleX, deltaAngleY);
    return rotateBy
};
cc.MoveBy = cc.ActionInterval.extend({_positionDelta: null, _startPosition: null, _previousPosition: null, ctor: function (duration, deltaPos, deltaY) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._positionDelta = cc.p(0, 0);
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    deltaPos !== undefined && this.initWithDuration(duration, deltaPos, deltaY)
}, initWithDuration: function (duration, position, y) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        if (position.x !== undefined) {
            y = position.y;
            position = position.x
        }
        this._positionDelta.x = position;
        this._positionDelta.y = y;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.MoveBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._positionDelta);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x = locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var x = this._positionDelta.x * time;
        var y = this._positionDelta.y * time;
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x + targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var action = cc.MoveBy.create(this._duration, cc.p(-this._positionDelta.x, -this._positionDelta.y));
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.MoveBy.create = function (duration, deltaPos, deltaY) {
    return new cc.MoveBy(duration, deltaPos, deltaY)
};
cc.MoveTo = cc.MoveBy.extend({_endPosition: null, ctor: function (duration, position, y) {
    cc.MoveBy.prototype.ctor.call(this);
    this._endPosition = cc.p(0, 0);
    position !== undefined && this.initWithDuration(duration, position, y)
}, initWithDuration: function (duration, position, y) {
    if (cc.MoveBy.prototype.initWithDuration.call(this, duration, position, y)) {
        if (position.x !== undefined) {
            y = position.y;
            position = position.x
        }
        this._endPosition.x = position;
        this._endPosition.y = y;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.MoveTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._endPosition);
    return action
}, startWithTarget: function (target) {
    cc.MoveBy.prototype.startWithTarget.call(this, target);
    this._positionDelta.x = this._endPosition.x - target.getPositionX();
    this._positionDelta.y = this._endPosition.y - target.getPositionY()
}});
cc.MoveTo.create = function (duration, position, y) {
    return new cc.MoveTo(duration, position, y)
};
cc.SkewTo = cc.ActionInterval.extend({_skewX: 0, _skewY: 0, _startSkewX: 0, _startSkewY: 0, _endSkewX: 0, _endSkewY: 0, _deltaX: 0, _deltaY: 0, ctor: function (t, sx, sy) {
    cc.ActionInterval.prototype.ctor.call(this);
    sy !== undefined && this.initWithDuration(t, sx, sy)
}, initWithDuration: function (t, sx, sy) {
    var ret = false;
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._endSkewX = sx;
        this._endSkewY = sy;
        ret = true
    }
    return ret
}, clone: function () {
    var action = new cc.SkewTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration,
        this._endSkewX, this._endSkewY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startSkewX = target.skewX % 180;
    this._deltaX = this._endSkewX - this._startSkewX;
    if (this._deltaX > 180)this._deltaX -= 360;
    if (this._deltaX < -180)this._deltaX += 360;
    this._startSkewY = target.skewY % 360;
    this._deltaY = this._endSkewY - this._startSkewY;
    if (this._deltaY > 180)this._deltaY -= 360;
    if (this._deltaY < -180)this._deltaY += 360
}, update: function (t) {
    t = this._computeEaseTime(t);
    this.target.skewX =
        this._startSkewX + this._deltaX * t;
    this.target.skewY = this._startSkewY + this._deltaY * t
}});
cc.SkewTo.create = function (t, sx, sy) {
    return new cc.SkewTo(t, sx, sy)
};
cc.SkewBy = cc.SkewTo.extend({ctor: function (t, sx, sy) {
    cc.SkewTo.prototype.ctor.call(this);
    sy !== undefined && this.initWithDuration(t, sx, sy)
}, initWithDuration: function (t, deltaSkewX, deltaSkewY) {
    var ret = false;
    if (cc.SkewTo.prototype.initWithDuration.call(this, t, deltaSkewX, deltaSkewY)) {
        this._skewX = deltaSkewX;
        this._skewY = deltaSkewY;
        ret = true
    }
    return ret
}, clone: function () {
    var action = new cc.SkewBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._skewX, this._skewY);
    return action
}, startWithTarget: function (target) {
    cc.SkewTo.prototype.startWithTarget.call(this,
        target);
    this._deltaX = this._skewX;
    this._deltaY = this._skewY;
    this._endSkewX = this._startSkewX + this._deltaX;
    this._endSkewY = this._startSkewY + this._deltaY
}, reverse: function () {
    var action = cc.SkewBy.create(this._duration, -this._skewX, -this._skewY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.SkewBy.create = function (t, sx, sy) {
    var skewBy = new cc.SkewBy;
    if (skewBy)skewBy.initWithDuration(t, sx, sy);
    return skewBy
};
cc.JumpBy = cc.ActionInterval.extend({_startPosition: null, _delta: null, _height: 0, _jumps: 0, _previousPosition: null, ctor: function (duration, position, y, height, jumps) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    this._delta = cc.p(0, 0);
    height !== undefined && this.initWithDuration(duration, position, y, height, jumps)
}, initWithDuration: function (duration, position, y, height, jumps) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        if (jumps ===
            undefined) {
            jumps = height;
            height = y;
            y = position.y;
            position = position.x
        }
        this._delta.x = position;
        this._delta.y = y;
        this._height = height;
        this._jumps = jumps;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.JumpBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._delta, this._height, this._jumps);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x =
        locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var frac = time * this._jumps % 1;
        var y = this._height * 4 * frac * (1 - frac);
        y += this._delta.y * time;
        var x = this._delta.x * time;
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x +
                targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var action = cc.JumpBy.create(this._duration, cc.p(-this._delta.x, -this._delta.y), this._height, this._jumps);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.JumpBy.create = function (duration, position, y, height, jumps) {
    return new cc.JumpBy(duration, position, y, height, jumps)
};
cc.JumpTo = cc.JumpBy.extend({_endPosition: null, ctor: function (duration, position, y, height, jumps) {
    cc.JumpBy.prototype.ctor.call(this);
    this._endPosition = cc.p(0, 0);
    height !== undefined && this.initWithDuration(duration, position, y, height, jumps)
}, initWithDuration: function (duration, position, y, height, jumps) {
    if (cc.JumpBy.prototype.initWithDuration.call(this, duration, position, y, height, jumps)) {
        if (jumps === undefined) {
            y = position.y;
            position = position.x
        }
        this._endPosition.x = position;
        this._endPosition.y = y;
        return true
    }
    return false
},
    startWithTarget: function (target) {
        cc.JumpBy.prototype.startWithTarget.call(this, target);
        this._delta.x = this._endPosition.x - this._startPosition.x;
        this._delta.y = this._endPosition.y - this._startPosition.y
    }, clone: function () {
        var action = new cc.JumpTo;
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._endPosition, this._height, this._jumps);
        return action
    }});
cc.JumpTo.create = function (duration, position, y, height, jumps) {
    return new cc.JumpTo(duration, position, y, height, jumps)
};
cc.bezierAt = function (a, b, c, d, t) {
    return Math.pow(1 - t, 3) * a + 3 * t * Math.pow(1 - t, 2) * b + 3 * Math.pow(t, 2) * (1 - t) * c + Math.pow(t, 3) * d
};
cc.BezierBy = cc.ActionInterval.extend({_config: null, _startPosition: null, _previousPosition: null, ctor: function (t, c) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._config = [];
    this._startPosition = cc.p(0, 0);
    this._previousPosition = cc.p(0, 0);
    c && this.initWithDuration(t, c)
}, initWithDuration: function (t, c) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._config = c;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.BezierBy;
    this._cloneDecoration(action);
    var newConfigs = [];
    for (var i =
        0; i < this._config.length; i++) {
        var selConf = this._config[i];
        newConfigs.push(cc.p(selConf.x, selConf.y))
    }
    action.initWithDuration(this._duration, newConfigs);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    var locPosX = target.getPositionX();
    var locPosY = target.getPositionY();
    this._previousPosition.x = locPosX;
    this._previousPosition.y = locPosY;
    this._startPosition.x = locPosX;
    this._startPosition.y = locPosY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        var locConfig = this._config;
        var xa = 0;
        var xb = locConfig[0].x;
        var xc = locConfig[1].x;
        var xd = locConfig[2].x;
        var ya = 0;
        var yb = locConfig[0].y;
        var yc = locConfig[1].y;
        var yd = locConfig[2].y;
        var x = cc.bezierAt(xa, xb, xc, xd, time);
        var y = cc.bezierAt(ya, yb, yc, yd, time);
        var locStartPosition = this._startPosition;
        if (cc.ENABLE_STACKABLE_ACTIONS) {
            var targetX = this.target.getPositionX();
            var targetY = this.target.getPositionY();
            var locPreviousPosition = this._previousPosition;
            locStartPosition.x = locStartPosition.x +
                targetX - locPreviousPosition.x;
            locStartPosition.y = locStartPosition.y + targetY - locPreviousPosition.y;
            x = x + locStartPosition.x;
            y = y + locStartPosition.y;
            locPreviousPosition.x = x;
            locPreviousPosition.y = y;
            this.target.setPosition(x, y)
        } else this.target.setPosition(locStartPosition.x + x, locStartPosition.y + y)
    }
}, reverse: function () {
    var locConfig = this._config;
    var r = [cc.pAdd(locConfig[1], cc.pNeg(locConfig[2])), cc.pAdd(locConfig[0], cc.pNeg(locConfig[2])), cc.pNeg(locConfig[2])];
    var action = cc.BezierBy.create(this._duration,
        r);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.BezierBy.create = function (t, c) {
    return new cc.BezierBy(t, c)
};
cc.BezierTo = cc.BezierBy.extend({_toConfig: null, ctor: function (t, c) {
    cc.BezierBy.prototype.ctor.call(this);
    this._toConfig = [];
    c && this.initWithDuration(t, c)
}, initWithDuration: function (t, c) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, t)) {
        this._toConfig = c;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.BezierTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toConfig);
    return action
}, startWithTarget: function (target) {
    cc.BezierBy.prototype.startWithTarget.call(this,
        target);
    var locStartPos = this._startPosition;
    var locToConfig = this._toConfig;
    var locConfig = this._config;
    locConfig[0] = cc.pSub(locToConfig[0], locStartPos);
    locConfig[1] = cc.pSub(locToConfig[1], locStartPos);
    locConfig[2] = cc.pSub(locToConfig[2], locStartPos)
}});
cc.BezierTo.create = function (t, c) {
    return new cc.BezierTo(t, c)
};
cc.ScaleTo = cc.ActionInterval.extend({_scaleX: 1, _scaleY: 1, _startScaleX: 1, _startScaleY: 1, _endScaleX: 0, _endScaleY: 0, _deltaX: 0, _deltaY: 0, ctor: function (duration, sx, sy) {
    cc.ActionInterval.prototype.ctor.call(this);
    sx !== undefined && this.initWithDuration(duration, sx, sy)
}, initWithDuration: function (duration, sx, sy) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._endScaleX = sx;
        this._endScaleY = sy != null ? sy : sx;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ScaleTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._endScaleX, this._endScaleY);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._startScaleX = target.scaleX;
    this._startScaleY = target.scaleY;
    this._deltaX = this._endScaleX - this._startScaleX;
    this._deltaY = this._endScaleY - this._startScaleY
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this.target) {
        this.target.scaleX = this._startScaleX + this._deltaX * time;
        this.target.scaleY = this._startScaleY +
            this._deltaY * time
    }
}});
cc.ScaleTo.create = function (duration, sx, sy) {
    var scaleTo = new cc.ScaleTo;
    scaleTo.initWithDuration(duration, sx, sy);
    return scaleTo
};
cc.ScaleBy = cc.ScaleTo.extend({startWithTarget: function (target) {
    cc.ScaleTo.prototype.startWithTarget.call(this, target);
    this._deltaX = this._startScaleX * this._endScaleX - this._startScaleX;
    this._deltaY = this._startScaleY * this._endScaleY - this._startScaleY
}, reverse: function () {
    var action = cc.ScaleBy.create(this._duration, 1 / this._endScaleX, 1 / this._endScaleY);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.ScaleBy;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration,
        this._endScaleX, this._endScaleY);
    return action
}});
cc.ScaleBy.create = function (duration, sx, sy) {
    return new cc.ScaleBy(duration, sx, sy)
};
cc.Blink = cc.ActionInterval.extend({_times: 0, _originalState: false, ctor: function (duration, blinks) {
    cc.ActionInterval.prototype.ctor.call(this);
    blinks !== undefined && this.initWithDuration(duration, blinks)
}, initWithDuration: function (duration, blinks) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._times = blinks;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Blink;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._times);
    return action
}, update: function (time) {
    time =
        this._computeEaseTime(time);
    if (this.target && !this.isDone()) {
        var slice = 1 / this._times;
        var m = time % slice;
        this.target.visible = m > slice / 2
    }
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._originalState = target.visible
}, stop: function () {
    this.target.visible = this._originalState;
    cc.ActionInterval.prototype.stop.call(this)
}, reverse: function () {
    var action = cc.Blink.create(this._duration, this._times);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}});
cc.Blink.create = function (duration, blinks) {
    var blink = new cc.Blink;
    blink.initWithDuration(duration, blinks);
    return blink
};
cc.FadeTo = cc.ActionInterval.extend({_toOpacity: 0, _fromOpacity: 0, ctor: function (duration, opacity) {
    cc.ActionInterval.prototype.ctor.call(this);
    opacity !== undefined && this.initWithDuration(duration, opacity)
}, initWithDuration: function (duration, opacity) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._toOpacity = opacity;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.FadeTo;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
},
    update: function (time) {
        time = this._computeEaseTime(time);
        if (this.target.RGBAProtocol) {
            var fromOpacity = this._fromOpacity !== undefined ? this._fromOpacity : 255;
            this.target.opacity = fromOpacity + (this._toOpacity - fromOpacity) * time
        }
    }, startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        if (this.target.RGBAProtocol)this._fromOpacity = target.opacity
    }});
cc.FadeTo.create = function (duration, opacity) {
    return new cc.FadeTo(duration, opacity)
};
cc.FadeIn = cc.FadeTo.extend({_reverseAction: null, reverse: function () {
    var action = new cc.FadeOut;
    action.initWithDuration(this._duration, 0);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.FadeIn;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
}, startWithTarget: function (target) {
    if (this._reverseAction)this._toOpacity = this._reverseAction._fromOpacity;
    cc.FadeTo.prototype.startWithTarget.call(this,
        target)
}});
cc.FadeIn.create = function (duration) {
    return new cc.FadeIn(duration, 255)
};
cc.FadeOut = cc.FadeTo.extend({reverse: function () {
    var action = new cc.FadeIn;
    action._reverseAction = this;
    action.initWithDuration(this._duration, 255);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.FadeOut;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration, this._toOpacity);
    return action
}});
cc.FadeOut.create = function (d) {
    var action = new cc.FadeOut;
    action.initWithDuration(d, 0);
    return action
};
cc.TintTo = cc.ActionInterval.extend({_to: null, _from: null, ctor: function (duration, red, green, blue) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._to = cc.color(0, 0, 0);
    this._from = cc.color(0, 0, 0);
    blue !== undefined && this.initWithDuration(duration, red, green, blue)
}, initWithDuration: function (duration, red, green, blue) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._to = cc.color(red, green, blue);
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TintTo;
    this._cloneDecoration(action);
    var locTo = this._to;
    action.initWithDuration(this._duration, locTo.r, locTo.g, locTo.b);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    if (this.target.RGBAProtocol)this._from = this.target.color
}, update: function (time) {
    time = this._computeEaseTime(time);
    var locFrom = this._from, locTo = this._to;
    if (locFrom && this.target.RGBAProtocol)this.target.color = cc.color(locFrom.r + (locTo.r - locFrom.r) * time, locFrom.g + (locTo.g - locFrom.g) * time, locFrom.b + (locTo.b - locFrom.b) *
        time)
}});
cc.TintTo.create = function (duration, red, green, blue) {
    return new cc.TintTo(duration, red, green, blue)
};
cc.TintBy = cc.ActionInterval.extend({_deltaR: 0, _deltaG: 0, _deltaB: 0, _fromR: 0, _fromG: 0, _fromB: 0, ctor: function (duration, deltaRed, deltaGreen, deltaBlue) {
    cc.ActionInterval.prototype.ctor.call(this);
    deltaBlue !== undefined && this.initWithDuration(duration, deltaRed, deltaGreen, deltaBlue)
}, initWithDuration: function (duration, deltaRed, deltaGreen, deltaBlue) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._deltaR = deltaRed;
        this._deltaG = deltaGreen;
        this._deltaB = deltaBlue;
        return true
    }
    return false
},
    clone: function () {
        var action = new cc.TintBy;
        this._cloneDecoration(action);
        action.initWithDuration(this._duration, this._deltaR, this._deltaG, this._deltaB);
        return action
    }, startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        if (target.RGBAProtocol) {
            var color = target.color;
            this._fromR = color.r;
            this._fromG = color.g;
            this._fromB = color.b
        }
    }, update: function (time) {
        time = this._computeEaseTime(time);
        if (this.target.RGBAProtocol)this.target.color = cc.color(this._fromR + this._deltaR *
            time, this._fromG + this._deltaG * time, this._fromB + this._deltaB * time)
    }, reverse: function () {
        var action = cc.TintBy.create(this._duration, -this._deltaR, -this._deltaG, -this._deltaB);
        this._cloneDecoration(action);
        this._reverseEaseList(action);
        return action
    }});
cc.TintBy.create = function (duration, deltaRed, deltaGreen, deltaBlue) {
    return new cc.TintBy(duration, deltaRed, deltaGreen, deltaBlue)
};
cc.DelayTime = cc.ActionInterval.extend({update: function (time) {
}, reverse: function () {
    var action = cc.DelayTime.create(this._duration);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, clone: function () {
    var action = new cc.DelayTime;
    this._cloneDecoration(action);
    action.initWithDuration(this._duration);
    return action
}});
cc.DelayTime.create = function (d) {
    return new cc.DelayTime(d)
};
cc.ReverseTime = cc.ActionInterval.extend({_other: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._other = null;
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.ReverseTime.initWithAction(): action must be non null";
    if (action == this._other)throw"cc.ReverseTime.initWithAction(): the action was already passed in.";
    if (cc.ActionInterval.prototype.initWithDuration.call(this, action._duration)) {
        this._other = action;
        return true
    }
    return false
}, clone: function () {
    var action =
        new cc.ReverseTime;
    this._cloneDecoration(action);
    action.initWithAction(this._other.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._other.startWithTarget(target)
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (this._other)this._other.update(1 - time)
}, reverse: function () {
    return this._other.clone()
}, stop: function () {
    this._other.stop();
    cc.Action.prototype.stop.call(this)
}});
cc.ReverseTime.create = function (action) {
    return new cc.ReverseTime(action)
};
cc.Animate = cc.ActionInterval.extend({_animation: null, _nextFrame: 0, _origFrame: null, _executedLoops: 0, _splitTimes: null, ctor: function (animation) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._splitTimes = [];
    animation && this.initWithAnimation(animation)
}, getAnimation: function () {
    return this._animation
}, setAnimation: function (animation) {
    this._animation = animation
}, initWithAnimation: function (animation) {
    if (!animation)throw"cc.Animate.initWithAnimation(): animation must be non-NULL";
    var singleDuration = animation.getDuration();
    if (this.initWithDuration(singleDuration * animation.getLoops())) {
        this._nextFrame = 0;
        this.setAnimation(animation);
        this._origFrame = null;
        this._executedLoops = 0;
        var locTimes = this._splitTimes;
        locTimes.length = 0;
        var accumUnitsOfTime = 0;
        var newUnitOfTimeValue = singleDuration / animation.getTotalDelayUnits();
        var frames = animation.getFrames();
        cc.arrayVerifyType(frames, cc.AnimationFrame);
        for (var i = 0; i < frames.length; i++) {
            var frame = frames[i];
            var value = accumUnitsOfTime * newUnitOfTimeValue / singleDuration;
            accumUnitsOfTime +=
                frame.getDelayUnits();
            locTimes.push(value)
        }
        return true
    }
    return false
}, clone: function () {
    var action = new cc.Animate;
    this._cloneDecoration(action);
    action.initWithAnimation(this._animation.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    if (this._animation.getRestoreOriginalFrame())this._origFrame = target.displayFrame();
    this._nextFrame = 0;
    this._executedLoops = 0
}, update: function (time) {
    time = this._computeEaseTime(time);
    if (time < 1) {
        time *= this._animation.getLoops();
        var loopNumber = 0 | time;
        if (loopNumber > this._executedLoops) {
            this._nextFrame = 0;
            this._executedLoops++
        }
        time = time % 1
    }
    var frames = this._animation.getFrames();
    var numberOfFrames = frames.length, locSplitTimes = this._splitTimes;
    for (var i = this._nextFrame; i < numberOfFrames; i++)if (locSplitTimes[i] <= time) {
        this.target.setSpriteFrame(frames[i].getSpriteFrame());
        this._nextFrame = i + 1
    } else break
}, reverse: function () {
    var locAnimation = this._animation;
    var oldArray = locAnimation.getFrames();
    var newArray = [];
    cc.arrayVerifyType(oldArray,
        cc.AnimationFrame);
    if (oldArray.length > 0)for (var i = oldArray.length - 1; i >= 0; i--) {
        var element = oldArray[i];
        if (!element)break;
        newArray.push(element.clone())
    }
    var newAnim = cc.Animation.create(newArray, locAnimation.getDelayPerUnit(), locAnimation.getLoops());
    newAnim.setRestoreOriginalFrame(locAnimation.getRestoreOriginalFrame());
    var action = cc.Animate.create(newAnim);
    this._cloneDecoration(action);
    this._reverseEaseList(action);
    return action
}, stop: function () {
    if (this._animation.getRestoreOriginalFrame() && this.target)this.target.setSpriteFrame(this._origFrame);
    cc.Action.prototype.stop.call(this)
}});
cc.Animate.create = function (animation) {
    return new cc.Animate(animation)
};
cc.TargetedAction = cc.ActionInterval.extend({_action: null, _forcedTarget: null, ctor: function (target, action) {
    cc.ActionInterval.prototype.ctor.call(this);
    action && this.initWithTarget(target, action)
}, initWithTarget: function (target, action) {
    if (this.initWithDuration(action._duration)) {
        this._forcedTarget = target;
        this._action = action;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.TargetedAction;
    this._cloneDecoration(action);
    action.initWithTarget(this._forcedTarget, this._action.clone());
    return action
},
    startWithTarget: function (target) {
        cc.ActionInterval.prototype.startWithTarget.call(this, target);
        this._action.startWithTarget(this._forcedTarget)
    }, stop: function () {
        this._action.stop()
    }, update: function (time) {
        time = this._computeEaseTime(time);
        this._action.update(time)
    }, getForcedTarget: function () {
        return this._forcedTarget
    }, setForcedTarget: function (forcedTarget) {
        if (this._forcedTarget != forcedTarget)this._forcedTarget = forcedTarget
    }});
cc.TargetedAction.create = function (target, action) {
    return new cc.TargetedAction(target, action)
};
cc.ActionInstant = cc.FiniteTimeAction.extend({isDone: function () {
    return true
}, step: function (dt) {
    this.update(1)
}, update: function (time) {
}, reverse: function () {
    return this.clone()
}, clone: function () {
    return new cc.ActionInstant
}});
cc.Show = cc.ActionInstant.extend({update: function (time) {
    this.target.visible = true
}, reverse: function () {
    return cc.Hide.create()
}, clone: function () {
    return new cc.Show
}});
cc.Show.create = function () {
    return new cc.Show
};
cc.Hide = cc.ActionInstant.extend({update: function (time) {
    this.target.visible = false
}, reverse: function () {
    return cc.Show.create()
}, clone: function () {
    return new cc.Hide
}});
cc.Hide.create = function () {
    return new cc.Hide
};
cc.ToggleVisibility = cc.ActionInstant.extend({update: function (time) {
    this.target.visible = !this.target.visible
}, reverse: function () {
    return new cc.ToggleVisibility
}, clone: function () {
    return new cc.ToggleVisibility
}});
cc.ToggleVisibility.create = function () {
    return new cc.ToggleVisibility
};
cc.RemoveSelf = cc.ActionInstant.extend({_isNeedCleanUp: true, ctor: function (isNeedCleanUp) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    isNeedCleanUp !== undefined && this.init(isNeedCleanUp)
}, update: function (time) {
    this.target.removeFromParent(this._isNeedCleanUp)
}, init: function (isNeedCleanUp) {
    this._isNeedCleanUp = isNeedCleanUp;
    return true
}, reverse: function () {
    return new cc.RemoveSelf(this._isNeedCleanUp)
}, clone: function () {
    return new cc.RemoveSelf(this._isNeedCleanUp)
}});
cc.RemoveSelf.create = function (isNeedCleanUp) {
    return new cc.RemoveSelf(isNeedCleanUp)
};
cc.FlipX = cc.ActionInstant.extend({_flippedX: false, ctor: function (flip) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    this._flippedX = false;
    flip !== undefined && this.initWithFlipX(flip)
}, initWithFlipX: function (flip) {
    this._flippedX = flip;
    return true
}, update: function (time) {
    this.target.flippedX = this._flippedX
}, reverse: function () {
    return cc.FlipX.create(!this._flippedX)
}, clone: function () {
    var action = new cc.FlipX;
    action.initWithFlipX(this._flippedX);
    return action
}});
cc.FlipX.create = function (flip) {
    return new cc.FlipX(flip)
};
cc.FlipY = cc.ActionInstant.extend({_flippedY: false, ctor: function (flip) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    this._flippedY = false;
    flip !== undefined && this.initWithFlipY(flip)
}, initWithFlipY: function (flip) {
    this._flippedY = flip;
    return true
}, update: function (time) {
    this.target.flippedY = this._flippedY
}, reverse: function () {
    return cc.FlipY.create(!this._flippedY)
}, clone: function () {
    var action = new cc.FlipY;
    action.initWithFlipY(this._flippedY);
    return action
}});
cc.FlipY.create = function (flip) {
    return new cc.FlipY(flip)
};
cc.Place = cc.ActionInstant.extend({_x: 0, _y: 0, ctor: function (pos, y) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    this._x = 0;
    this._y = 0;
    if (pos !== undefined) {
        if (pos.x !== undefined) {
            y = pos.y;
            pos = pos.x
        }
        this.initWithPosition(pos, y)
    }
}, initWithPosition: function (x, y) {
    this._x = x;
    this._y = y;
    return true
}, update: function (time) {
    this.target.setPosition(this._x, this._y)
}, clone: function () {
    var action = new cc.Place;
    action.initWithPosition(this._x, this._y);
    return action
}});
cc.Place.create = function (pos, y) {
    return new cc.Place(pos, y)
};
cc.CallFunc = cc.ActionInstant.extend({_selectorTarget: null, _callFunc: null, _function: null, _data: null, ctor: function (selector, selectorTarget, data) {
    cc.FiniteTimeAction.prototype.ctor.call(this);
    if (selector !== undefined)if (selectorTarget === undefined)this.initWithFunction(selector); else this.initWithFunction(selector, selectorTarget, data)
}, initWithFunction: function (selector, selectorTarget, data) {
    if (selectorTarget) {
        this._data = data;
        this._callFunc = selector;
        this._selectorTarget = selectorTarget
    } else if (selector)this._function =
        selector;
    return true
}, execute: function () {
    if (this._callFunc != null)this._callFunc.call(this._selectorTarget, this.target, this._data); else if (this._function)this._function.call(null, this.target)
}, update: function (time) {
    this.execute()
}, getTargetCallback: function () {
    return this._selectorTarget
}, setTargetCallback: function (sel) {
    if (sel != this._selectorTarget) {
        if (this._selectorTarget)this._selectorTarget = null;
        this._selectorTarget = sel
    }
}, clone: function () {
    var action = new cc.CallFunc;
    if (this._selectorTarget)action.initWithFunction(this._callFunc,
        this._selectorTarget, this._data); else if (this._function)action.initWithFunction(this._function);
    return action
}});
cc.CallFunc.create = function (selector, selectorTarget, data) {
    return new cc.CallFunc(selector, selectorTarget, data)
};
cc.ActionCamera = cc.ActionInterval.extend({_centerXOrig: 0, _centerYOrig: 0, _centerZOrig: 0, _eyeXOrig: 0, _eyeYOrig: 0, _eyeZOrig: 0, _upXOrig: 0, _upYOrig: 0, _upZOrig: 0, ctor: function () {
    var _t = this;
    cc.ActionInterval.prototype.ctor.call(_t);
    _t._centerXOrig = 0;
    _t._centerYOrig = 0;
    _t._centerZOrig = 0;
    _t._eyeXOrig = 0;
    _t._eyeYOrig = 0;
    _t._eyeZOrig = 0;
    _t._upXOrig = 0;
    _t._upYOrig = 0;
    _t._upZOrig = 0
}, startWithTarget: function (target) {
    var _t = this;
    cc.ActionInterval.prototype.startWithTarget.call(_t, target);
    var camera = target.getCamera();
    var centerXYZ = camera.getCenter();
    _t._centerXOrig = centerXYZ.x;
    _t._centerYOrig = centerXYZ.y;
    _t._centerZOrig = centerXYZ.z;
    var eyeXYZ = camera.getEye();
    _t._eyeXOrig = eyeXYZ.x;
    _t._eyeYOrig = eyeXYZ.y;
    _t._eyeZOrig = eyeXYZ.z;
    var upXYZ = camera.getUp();
    _t._upXOrig = upXYZ.x;
    _t._upYOrig = upXYZ.y;
    _t._upZOrig = upXYZ.z
}, clone: function () {
    return new cc.ActionCamera
}, reverse: function () {
    return cc.ReverseTime.create(this)
}});
cc.OrbitCamera = cc.ActionCamera.extend({_radius: 0, _deltaRadius: 0, _angleZ: 0, _deltaAngleZ: 0, _angleX: 0, _deltaAngleX: 0, _radZ: 0, _radDeltaZ: 0, _radX: 0, _radDeltaX: 0, ctor: function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    cc.ActionCamera.prototype.ctor.call(this);
    deltaAngleX !== undefined && this.initWithDuration(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
}, initWithDuration: function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        t)) {
        var _t = this;
        _t._radius = radius;
        _t._deltaRadius = deltaRadius;
        _t._angleZ = angleZ;
        _t._deltaAngleZ = deltaAngleZ;
        _t._angleX = angleX;
        _t._deltaAngleX = deltaAngleX;
        _t._radDeltaZ = cc.degreesToRadians(deltaAngleZ);
        _t._radDeltaX = cc.degreesToRadians(deltaAngleX);
        return true
    }
    return false
}, sphericalRadius: function () {
    var newRadius, zenith, azimuth;
    var camera = this.target.getCamera();
    var eyeXYZ = camera.getEye();
    var centerXYZ = camera.getCenter();
    var x = eyeXYZ.x - centerXYZ.x, y = eyeXYZ.y - centerXYZ.y, z = eyeXYZ.z - centerXYZ.z;
    var r =
        Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    var s = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (s === 0)s = cc.FLT_EPSILON;
    if (r === 0)r = cc.FLT_EPSILON;
    zenith = Math.acos(z / r);
    if (x < 0)azimuth = Math.PI - Math.asin(y / s); else azimuth = Math.asin(y / s);
    newRadius = r / cc.Camera.getZEye();
    return{newRadius: newRadius, zenith: zenith, azimuth: azimuth}
}, startWithTarget: function (target) {
    var _t = this;
    cc.ActionInterval.prototype.startWithTarget.call(_t, target);
    var retValue = _t.sphericalRadius();
    if (isNaN(_t._radius))_t._radius = retValue.newRadius;
    if (isNaN(_t._angleZ))_t._angleZ = cc.radiansToDegrees(retValue.zenith);
    if (isNaN(_t._angleX))_t._angleX = cc.radiansToDegrees(retValue.azimuth);
    _t._radZ = cc.degreesToRadians(_t._angleZ);
    _t._radX = cc.degreesToRadians(_t._angleX)
}, clone: function () {
    var a = new cc.OrbitCamera, _t = this;
    a.initWithDuration(_t._duration, _t._radius, _t._deltaRadius, _t._angleZ, _t._deltaAngleZ, _t._angleX, _t._deltaAngleX);
    return a
}, update: function (dt) {
    dt = this._computeEaseTime(dt);
    var r = (this._radius + this._deltaRadius * dt) * cc.Camera.getZEye();
    var za = this._radZ + this._radDeltaZ * dt;
    var xa = this._radX + this._radDeltaX * dt;
    var i = Math.sin(za) * Math.cos(xa) * r + this._centerXOrig;
    var j = Math.sin(za) * Math.sin(xa) * r + this._centerYOrig;
    var k = Math.cos(za) * r + this._centerZOrig;
    this.target.getCamera().setEye(i, j, k)
}});
cc.OrbitCamera.create = function (t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX) {
    return new cc.OrbitCamera(t, radius, deltaRadius, angleZ, deltaAngleZ, angleX, deltaAngleX)
};
cc.ActionEase = cc.ActionInterval.extend({_inner: null, ctor: function (action) {
    cc.ActionInterval.prototype.ctor.call(this);
    action && this.initWithAction(action)
}, initWithAction: function (action) {
    if (!action)throw"cc.ActionEase.initWithAction(): action must be non nil";
    if (this.initWithDuration(action.getDuration())) {
        this._inner = action;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ActionEase;
    action.initWithAction(this._inner.clone());
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    this._inner.startWithTarget(this.target)
}, stop: function () {
    this._inner.stop();
    cc.ActionInterval.prototype.stop.call(this)
}, update: function (time1) {
    this._inner.update(time1)
}, reverse: function () {
    return cc.ActionEase.create(this._inner.reverse())
}, getInnerAction: function () {
    return this._inner
}});
cc.ActionEase.create = function (action) {
    return new cc.ActionEase(action)
};
cc.EaseRateAction = cc.ActionEase.extend({_rate: 0, ctor: function (action, rate) {
    cc.ActionEase.prototype.ctor.call(this);
    rate !== undefined && this.initWithAction(action, rate)
}, setRate: function (rate) {
    this._rate = rate
}, getRate: function () {
    return this._rate
}, initWithAction: function (action, rate) {
    if (cc.ActionEase.prototype.initWithAction.call(this, action)) {
        this._rate = rate;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.EaseRateAction;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
},
    reverse: function () {
        return cc.EaseRateAction.create(this._inner.reverse(), 1 / this._rate)
    }});
cc.EaseRateAction.create = function (action, rate) {
    return new cc.EaseRateAction(action, rate)
};
cc.EaseIn = cc.EaseRateAction.extend({update: function (time1) {
    this._inner.update(Math.pow(time1, this._rate))
}, reverse: function () {
    return cc.EaseIn.create(this._inner.reverse(), 1 / this._rate)
}, clone: function () {
    var action = new cc.EaseIn;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}});
cc.EaseIn.create = function (action, rate) {
    return new cc.EaseIn(action, rate)
};
cc.easeIn = function (rate) {
    return{_rate: rate, easing: function (dt) {
        return Math.pow(dt, this._rate)
    }, reverse: function () {
        return cc.easeIn(1 / this._rate)
    }}
};
cc.EaseOut = cc.EaseRateAction.extend({update: function (time1) {
    this._inner.update(Math.pow(time1, 1 / this._rate))
}, reverse: function () {
    return cc.EaseOut.create(this._inner.reverse(), 1 / this._rate)
}, clone: function () {
    var action = new cc.EaseOut;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}});
cc.EaseOut.create = function (action, rate) {
    return new cc.EaseOut(action, rate)
};
cc.easeOut = function (rate) {
    return{_rate: rate, easing: function (dt) {
        return Math.pow(dt, 1 / this._rate)
    }, reverse: function () {
        return cc.easeOut(1 / this._rate)
    }}
};
cc.EaseInOut = cc.EaseRateAction.extend({update: function (time1) {
    time1 *= 2;
    if (time1 < 1)this._inner.update(0.5 * Math.pow(time1, this._rate)); else this._inner.update(1 - 0.5 * Math.pow(2 - time1, this._rate))
}, clone: function () {
    var action = new cc.EaseInOut;
    action.initWithAction(this._inner.clone(), this._rate);
    return action
}, reverse: function () {
    return cc.EaseInOut.create(this._inner.reverse(), this._rate)
}});
cc.EaseInOut.create = function (action, rate) {
    return new cc.EaseInOut(action, rate)
};
cc.easeInOut = function (rate) {
    return{_rate: rate, easing: function (dt) {
        dt *= 2;
        if (dt < 1)return 0.5 * Math.pow(dt, this._rate); else return 1 - 0.5 * Math.pow(2 - dt, this._rate)
    }, reverse: function () {
        return cc.easeInOut(this._rate)
    }}
};
cc.EaseExponentialIn = cc.ActionEase.extend({update: function (time1) {
    this._inner.update(time1 === 0 ? 0 : Math.pow(2, 10 * (time1 - 1)))
}, reverse: function () {
    return cc.EaseExponentialOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialIn.create = function (action) {
    return new cc.EaseExponentialIn(action)
};
cc._easeExponentialInObj = {easing: function (dt) {
    return dt === 0 ? 0 : Math.pow(2, 10 * (dt - 1))
}, reverse: function () {
    return cc._easeExponentialOutObj
}};
cc.easeExponentialIn = function () {
    return cc._easeExponentialInObj
};
cc.EaseExponentialOut = cc.ActionEase.extend({update: function (time1) {
    this._inner.update(time1 == 1 ? 1 : -Math.pow(2, -10 * time1) + 1)
}, reverse: function () {
    return cc.EaseExponentialIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialOut.create = function (action) {
    return new cc.EaseExponentialOut(action)
};
cc._easeExponentialOutObj = {easing: function (dt) {
    return dt == 1 ? 1 : -Math.pow(2, -10 * dt) + 1
}, reverse: function () {
    return cc._easeExponentialInObj
}};
cc.easeExponentialOut = function () {
    return cc._easeExponentialOutObj
};
cc.EaseExponentialInOut = cc.ActionEase.extend({update: function (time) {
    if (time != 1 && time !== 0) {
        time *= 2;
        if (time < 1)time = 0.5 * Math.pow(2, 10 * (time - 1)); else time = 0.5 * (-Math.pow(2, -10 * (time - 1)) + 2)
    }
    this._inner.update(time)
}, reverse: function () {
    return cc.EaseExponentialInOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseExponentialInOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseExponentialInOut.create = function (action) {
    return new cc.EaseExponentialInOut(action)
};
cc._easeExponentialInOutObj = {easing: function (dt) {
    if (dt !== 1 && dt !== 0) {
        dt *= 2;
        if (dt < 1)return 0.5 * Math.pow(2, 10 * (dt - 1)); else return 0.5 * (-Math.pow(2, -10 * (dt - 1)) + 2)
    }
    return dt
}, reverse: function () {
    return cc._easeExponentialInOutObj
}};
cc.easeExponentialInOut = function () {
    return cc._easeExponentialInOutObj
};
cc.EaseSineIn = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : -1 * Math.cos(time1 * Math.PI / 2) + 1;
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseSineOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseSineIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseSineIn.create = function (action) {
    return new cc.EaseSineIn(action)
};
cc._easeSineInObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : -1 * Math.cos(dt * Math.PI / 2) + 1
}, reverse: function () {
    return cc._easeSineOutObj
}};
cc.easeSineIn = function () {
    return cc._easeSineInObj
};
cc.EaseSineOut = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : Math.sin(time1 * Math.PI / 2);
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseSineIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseSineOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseSineOut.create = function (action) {
    return new cc.EaseSineOut(action)
};
cc._easeSineOutObj = {easing: function (dt) {
    return dt === 0 || dt == 1 ? dt : Math.sin(dt * Math.PI / 2)
}, reverse: function () {
    return cc._easeSineInObj
}};
cc.easeSineOut = function () {
    return cc._easeSineOutObj
};
cc.EaseSineInOut = cc.ActionEase.extend({update: function (time1) {
    time1 = time1 === 0 || time1 === 1 ? time1 : -0.5 * (Math.cos(Math.PI * time1) - 1);
    this._inner.update(time1)
}, clone: function () {
    var action = new cc.EaseSineInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseSineInOut.create(this._inner.reverse())
}});
cc.EaseSineInOut.create = function (action) {
    return new cc.EaseSineInOut(action)
};
cc._easeSineInOutObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : -0.5 * (Math.cos(Math.PI * dt) - 1)
}, reverse: function () {
    return cc._easeSineInOutObj
}};
cc.easeSineInOut = function () {
    return cc._easeSineInOutObj
};
cc.EaseElastic = cc.ActionEase.extend({_period: 0.3, ctor: function (action, period) {
    cc.ActionEase.prototype.ctor.call(this);
    action && this.initWithAction(action, period)
}, getPeriod: function () {
    return this._period
}, setPeriod: function (period) {
    this._period = period
}, initWithAction: function (action, period) {
    cc.ActionEase.prototype.initWithAction.call(this, action);
    this._period = period == null ? 0.3 : period;
    return true
}, reverse: function () {
    cc.log("cc.EaseElastic.reverse(): it should be overridden in subclass.");
    return null
},
    clone: function () {
        var action = new cc.EaseElastic;
        action.initWithAction(this._inner.clone(), this._period);
        return action
    }});
cc.EaseElastic.create = function (action, period) {
    return new cc.EaseElastic(action, period)
};
cc.EaseElasticIn = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    if (time1 === 0 || time1 === 1)newT = time1; else {
        var s = this._period / 4;
        time1 = time1 - 1;
        newT = -Math.pow(2, 10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / this._period)
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticOut.create(this._inner.reverse(), this._period)
}, clone: function () {
    var action = new cc.EaseElasticIn;
    action.initWithAction(this._inner.clone(), this._period);
    return action
}});
cc.EaseElasticIn.create = function (action, period) {
    return new cc.EaseElasticIn(action, period)
};
cc._easeElasticInObj = {easing: function (dt) {
    if (dt === 0 || dt === 1)return dt;
    dt = dt - 1;
    return-Math.pow(2, 10 * dt) * Math.sin((dt - 0.3 / 4) * Math.PI * 2 / 0.3)
}, reverse: function () {
    return cc._easeElasticOutObj
}};
cc.easeElasticIn = function (period) {
    if (period && period !== 0.3)return{_period: period, easing: function (dt) {
        if (dt === 0 || dt === 1)return dt;
        dt = dt - 1;
        return-Math.pow(2, 10 * dt) * Math.sin((dt - this._period / 4) * Math.PI * 2 / this._period)
    }, reverse: function () {
        return cc.easeElasticOut(this._period)
    }};
    return cc._easeElasticInObj
};
cc.EaseElasticOut = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    if (time1 === 0 || time1 == 1)newT = time1; else {
        var s = this._period / 4;
        newT = Math.pow(2, -10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / this._period) + 1
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticIn.create(this._inner.reverse(), this._period)
}, clone: function () {
    var action = new cc.EaseElasticOut;
    action.initWithAction(this._inner.clone(), this._period);
    return action
}});
cc.EaseElasticOut.create = function (action, period) {
    return new cc.EaseElasticOut(action, period)
};
cc._easeElasticOutObj = {easing: function (dt) {
    return dt === 0 || dt === 1 ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - 0.3 / 4) * Math.PI * 2 / 0.3) + 1
}, reverse: function () {
    return cc._easeElasticInObj
}};
cc.easeElasticOut = function (period) {
    if (period && period !== 0.3)return{_period: period, easing: function (dt) {
        return dt === 0 || dt === 1 ? dt : Math.pow(2, -10 * dt) * Math.sin((dt - this._period / 4) * Math.PI * 2 / this._period) + 1
    }, reverse: function () {
        return cc.easeElasticIn(this._period)
    }};
    return cc._easeElasticOutObj
};
cc.EaseElasticInOut = cc.EaseElastic.extend({update: function (time1) {
    var newT = 0;
    var locPeriod = this._period;
    if (time1 === 0 || time1 == 1)newT = time1; else {
        time1 = time1 * 2;
        if (!locPeriod)locPeriod = this._period = 0.3 * 1.5;
        var s = locPeriod / 4;
        time1 = time1 - 1;
        if (time1 < 0)newT = -0.5 * Math.pow(2, 10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / locPeriod); else newT = Math.pow(2, -10 * time1) * Math.sin((time1 - s) * Math.PI * 2 / locPeriod) * 0.5 + 1
    }
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseElasticInOut.create(this._inner.reverse(), this._period)
},
    clone: function () {
        var action = new cc.EaseElasticInOut;
        action.initWithAction(this._inner.clone(), this._period);
        return action
    }});
cc.EaseElasticInOut.create = function (action, period) {
    return new cc.EaseElasticInOut(action, period)
};
cc.easeElasticInOut = function (period) {
    period = period || 0.3;
    return{_period: period, easing: function (dt) {
        var newT = 0;
        var locPeriod = this._period;
        if (dt === 0 || dt === 1)newT = dt; else {
            dt = dt * 2;
            if (!locPeriod)locPeriod = this._period = 0.3 * 1.5;
            var s = locPeriod / 4;
            dt = dt - 1;
            if (dt < 0)newT = -0.5 * Math.pow(2, 10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod); else newT = Math.pow(2, -10 * dt) * Math.sin((dt - s) * Math.PI * 2 / locPeriod) * 0.5 + 1
        }
        return newT
    }, reverse: function () {
        return cc.easeElasticInOut(this._period)
    }}
};
cc.EaseBounce = cc.ActionEase.extend({bounceTime: function (time1) {
    if (time1 < 1 / 2.75)return 7.5625 * time1 * time1; else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375
}, clone: function () {
    var action = new cc.EaseBounce;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBounce.create(this._inner.reverse())
}});
cc.EaseBounce.create = function (action) {
    return new cc.EaseBounce(action)
};
cc.EaseBounceIn = cc.EaseBounce.extend({update: function (time1) {
    var newT = 1 - this.bounceTime(1 - time1);
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseBounceOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBounceIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBounceIn.create = function (action) {
    return new cc.EaseBounceIn(action)
};
cc._bounceTime = function (time1) {
    if (time1 < 1 / 2.75)return 7.5625 * time1 * time1; else if (time1 < 2 / 2.75) {
        time1 -= 1.5 / 2.75;
        return 7.5625 * time1 * time1 + 0.75
    } else if (time1 < 2.5 / 2.75) {
        time1 -= 2.25 / 2.75;
        return 7.5625 * time1 * time1 + 0.9375
    }
    time1 -= 2.625 / 2.75;
    return 7.5625 * time1 * time1 + 0.984375
};
cc._easeBounceInObj = {easing: function (dt) {
    return 1 - cc._bounceTime(1 - dt)
}, reverse: function () {
    return cc._easeBounceOutObj
}};
cc.easeBounceIn = function () {
    return cc._easeBounceInObj
};
cc.EaseBounceOut = cc.EaseBounce.extend({update: function (time1) {
    var newT = this.bounceTime(time1);
    this._inner.update(newT)
}, reverse: function () {
    return cc.EaseBounceIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBounceOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBounceOut.create = function (action) {
    return new cc.EaseBounceOut(action)
};
cc._easeBounceOutObj = {easing: function (dt) {
    return cc._bounceTime(dt)
}, reverse: function () {
    return cc._easeBounceInObj
}};
cc.easeBounceOut = function () {
    return cc._easeBounceOutObj
};
cc.EaseBounceInOut = cc.EaseBounce.extend({update: function (time1) {
    var newT = 0;
    if (time1 < 0.5) {
        time1 = time1 * 2;
        newT = (1 - this.bounceTime(1 - time1)) * 0.5
    } else newT = this.bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    this._inner.update(newT)
}, clone: function () {
    var action = new cc.EaseBounceInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBounceInOut.create(this._inner.reverse())
}});
cc.EaseBounceInOut.create = function (action) {
    return new cc.EaseBounceInOut(action)
};
cc._easeBounceInOutObj = {easing: function (time1) {
    var newT;
    if (time1 < 0.5) {
        time1 = time1 * 2;
        newT = (1 - cc._bounceTime(1 - time1)) * 0.5
    } else newT = cc._bounceTime(time1 * 2 - 1) * 0.5 + 0.5;
    return newT
}, reverse: function () {
    return cc._easeBounceInOutObj
}};
cc.easeBounceInOut = function () {
    return cc._easeBounceInOutObj
};
cc.EaseBackIn = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 === 0 || time1 == 1 ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot);
    this._inner.update(time1)
}, reverse: function () {
    return cc.EaseBackOut.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBackIn;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBackIn.create = function (action) {
    return new cc.EaseBackIn(action)
};
cc._easeBackInObj = {easing: function (time1) {
    var overshoot = 1.70158;
    return time1 === 0 || time1 === 1 ? time1 : time1 * time1 * ((overshoot + 1) * time1 - overshoot)
}, reverse: function () {
    return cc._easeBackOutObj
}};
cc.easeBackIn = function () {
    return cc._easeBackInObj
};
cc.EaseBackOut = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 - 1;
    this._inner.update(time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1)
}, reverse: function () {
    return cc.EaseBackIn.create(this._inner.reverse())
}, clone: function () {
    var action = new cc.EaseBackOut;
    action.initWithAction(this._inner.clone());
    return action
}});
cc.EaseBackOut.create = function (action) {
    return new cc.EaseBackOut(action)
};
cc._easeBackOutObj = {easing: function (time1) {
    var overshoot = 1.70158;
    time1 = time1 - 1;
    return time1 * time1 * ((overshoot + 1) * time1 + overshoot) + 1
}, reverse: function () {
    return cc._easeBackInObj
}};
cc.easeBackOut = function () {
    return cc._easeBackOutObj
};
cc.EaseBackInOut = cc.ActionEase.extend({update: function (time1) {
    var overshoot = 1.70158 * 1.525;
    time1 = time1 * 2;
    if (time1 < 1)this._inner.update(time1 * time1 * ((overshoot + 1) * time1 - overshoot) / 2); else {
        time1 = time1 - 2;
        this._inner.update(time1 * time1 * ((overshoot + 1) * time1 + overshoot) / 2 + 1)
    }
}, clone: function () {
    var action = new cc.EaseBackInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseBackInOut.create(this._inner.reverse())
}});
cc.EaseBackInOut.create = function (action) {
    return new cc.EaseBackInOut(action)
};
cc._easeBackInOutObj = {easing: function (time1) {
    var overshoot = 1.70158 * 1.525;
    time1 = time1 * 2;
    if (time1 < 1)return time1 * time1 * ((overshoot + 1) * time1 - overshoot) / 2; else {
        time1 = time1 - 2;
        return time1 * time1 * ((overshoot + 1) * time1 + overshoot) / 2 + 1
    }
}, reverse: function () {
    return cc._easeBackInOutObj
}};
cc.easeBackInOut = function () {
    return cc._easeBackInOutObj
};
cc.EaseBezierAction = cc.ActionEase.extend({_p0: null, _p1: null, _p2: null, _p3: null, ctor: function (action) {
    cc.ActionEase.prototype.ctor.call(this, action)
}, _updateTime: function (a, b, c, d, t) {
    return Math.pow(1 - t, 3) * a + 3 * t * Math.pow(1 - t, 2) * b + 3 * Math.pow(t, 2) * (1 - t) * c + Math.pow(t, 3) * d
}, update: function (time) {
    var t = this._updateTime(this._p0, this._p1, this._p2, this._p3, time);
    this._inner.update(t)
}, clone: function () {
    var action = new cc.EaseBezierAction;
    action.initWithAction(this._inner.clone());
    action.setBezierParamer(this._p0,
        this._p1, this._p2, this._p3);
    return action
}, reverse: function () {
    var action = cc.EaseBezierAction.create(this._inner.reverse());
    action.setBezierParamer(this._p3, this._p2, this._p1, this._p0);
    return action
}, setBezierParamer: function (p0, p1, p2, p3) {
    this._p0 = p0 || 0;
    this._p1 = p1 || 0;
    this._p2 = p2 || 0;
    this._p3 = p3 || 0
}});
cc.EaseBezierAction.create = function (action) {
    return new cc.EaseBezierAction(action)
};
cc.easeBezierAction = function (p0, p1, p2, p3) {
    return{easing: function (time) {
        return cc.EaseBezierAction.prototype._updateTime(p0, p1, p2, p3, time)
    }, reverse: function () {
        return cc.easeBezierAction(p3, p2, p1, p0)
    }}
};
cc.EaseQuadraticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return Math.pow(time, 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionIn.create(this._inner.reverse())
}});
cc.EaseQuadraticActionIn.create = function (action) {
    return new cc.EaseQuadraticActionIn(action)
};
cc._easeQuadraticActionIn = {easing: cc.EaseQuadraticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionIn
}};
cc.easeQuadraticActionIn = function () {
    return cc._easeQuadraticActionIn
};
cc.EaseQuadraticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    return-time * (time - 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionOut;
    action.initWithAction();
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionOut.create(this._inner.reverse())
}});
cc.EaseQuadraticActionOut.create = function (action) {
    return new cc.EaseQuadraticActionOut(action)
};
cc._easeQuadraticActionOut = {easing: cc.EaseQuadraticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionOut
}};
cc.easeQuadraticActionOut = function () {
    return cc._easeQuadraticActionOut
};
cc.EaseQuadraticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    var resultTime = time;
    time *= 2;
    if (time < 1)resultTime = time * time * 0.5; else {
        --time;
        resultTime = -0.5 * (time * (time - 2) - 1)
    }
    return resultTime
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuadraticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuadraticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuadraticActionInOut.create = function (action) {
    return new cc.EaseQuadraticActionInOut(action)
};
cc._easeQuadraticActionInOut = {easing: cc.EaseQuadraticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuadraticActionInOut
}};
cc.easeQuadraticActionInOut = function () {
    return cc._easeQuadraticActionInOut
};
cc.EaseQuarticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionIn.create(this._inner.reverse())
}});
cc.EaseQuarticActionIn.create = function (action) {
    return new cc.EaseQuarticActionIn(action)
};
cc._easeQuarticActionIn = {easing: cc.EaseQuarticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionIn
}};
cc.easeQuarticActionIn = function () {
    return cc._easeQuarticActionIn
};
cc.EaseQuarticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return-(time * time * time * time - 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionOut.create(this._inner.reverse())
}});
cc.EaseQuarticActionOut.create = function (action) {
    return new cc.EaseQuarticActionOut(action)
};
cc._easeQuarticActionOut = {easing: cc.EaseQuarticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionOut
}};
cc.easeQuarticActionOut = function () {
    return cc._easeQuarticActionOut
};
cc.EaseQuarticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time * time;
    time -= 2;
    return-0.5 * (time * time * time * time - 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuarticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuarticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuarticActionInOut.create = function (action) {
    return new cc.EaseQuarticActionInOut(action)
};
cc._easeQuarticActionInOut = {easing: cc.EaseQuarticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuarticActionInOut
}};
cc.easeQuarticActionInOut = function () {
    return cc._easeQuarticActionInOut
};
cc.EaseQuinticActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionIn.create(this._inner.reverse())
}});
cc.EaseQuinticActionIn.create = function (action) {
    return new cc.EaseQuinticActionIn(action)
};
cc._easeQuinticActionIn = {easing: cc.EaseQuinticActionIn.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionIn
}};
cc.easeQuinticActionIn = function () {
    return cc._easeQuinticActionIn
};
cc.EaseQuinticActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return time * time * time * time * time + 1
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionOut.create(this._inner.reverse())
}});
cc.EaseQuinticActionOut.create = function (action) {
    return new cc.EaseQuinticActionOut(action)
};
cc._easeQuinticActionOut = {easing: cc.EaseQuinticActionOut.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionOut
}};
cc.easeQuinticActionOut = function () {
    return cc._easeQuinticActionOut
};
cc.EaseQuinticActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time * time * time;
    time -= 2;
    return 0.5 * (time * time * time * time * time + 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseQuinticActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseQuinticActionInOut.create(this._inner.reverse())
}});
cc.EaseQuinticActionInOut.create = function (action) {
    return new cc.EaseQuinticActionInOut(action)
};
cc._easeQuinticActionInOut = {easing: cc.EaseQuinticActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeQuinticActionInOut
}};
cc.easeQuinticActionInOut = function () {
    return cc._easeQuinticActionInOut
};
cc.EaseCircleActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return-1 * (Math.sqrt(1 - time * time) - 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionIn.create(this._inner.reverse())
}});
cc.EaseCircleActionIn.create = function (action) {
    return new cc.EaseCircleActionIn(action)
};
cc._easeCircleActionIn = {easing: cc.EaseCircleActionIn.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionIn
}};
cc.easeCircleActionIn = function () {
    return cc._easeCircleActionIn
};
cc.EaseCircleActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time - 1;
    return Math.sqrt(1 - time * time)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionOut.create(this._inner.reverse())
}});
cc.EaseCircleActionOut.create = function (action) {
    return new cc.EaseCircleActionOut(action)
};
cc._easeCircleActionOut = {easing: cc.EaseCircleActionOut.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionOut
}};
cc.easeCircleActionOut = function () {
    return cc._easeCircleActionOut
};
cc.EaseCircleActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return-0.5 * (Math.sqrt(1 - time * time) - 1);
    time -= 2;
    return 0.5 * (Math.sqrt(1 - time * time) + 1)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCircleActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCircleActionInOut.create(this._inner.reverse())
}});
cc.EaseCircleActionInOut.create = function (action) {
    return new cc.EaseCircleActionInOut(action)
};
cc._easeCircleActionInOut = {easing: cc.EaseCircleActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeCircleActionInOut
}};
cc.easeCircleActionInOut = function () {
    return cc._easeCircleActionInOut
};
cc.EaseCubicActionIn = cc.ActionEase.extend({_updateTime: function (time) {
    return time * time * time
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionIn;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionIn.create(this._inner.reverse())
}});
cc.EaseCubicActionIn.create = function (action) {
    return new cc.EaseCubicActionIn(action)
};
cc._easeCubicActionIn = {easing: cc.EaseCubicActionIn.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionIn
}};
cc.easeCubicActionIn = function () {
    return cc._easeCubicActionIn
};
cc.EaseCubicActionOut = cc.ActionEase.extend({_updateTime: function (time) {
    time -= 1;
    return time * time * time + 1
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionOut.create(this._inner.reverse())
}});
cc.EaseCubicActionOut.create = function (action) {
    return new cc.EaseCubicActionOut(action)
};
cc._easeCubicActionOut = {easing: cc.EaseCubicActionOut.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionOut
}};
cc.easeCubicActionOut = function () {
    return cc._easeCubicActionOut
};
cc.EaseCubicActionInOut = cc.ActionEase.extend({_updateTime: function (time) {
    time = time * 2;
    if (time < 1)return 0.5 * time * time * time;
    time -= 2;
    return 0.5 * (time * time * time + 2)
}, update: function (time) {
    this._inner.update(this._updateTime(time))
}, clone: function () {
    var action = new cc.EaseCubicActionInOut;
    action.initWithAction(this._inner.clone());
    return action
}, reverse: function () {
    return cc.EaseCubicActionInOut.create(this._inner.reverse())
}});
cc.EaseCubicActionInOut.create = function (action) {
    return new cc.EaseCubicActionInOut(action)
};
cc._easeCubicActionInOut = {easing: cc.EaseCubicActionInOut.prototype._updateTime, reverse: function () {
    return cc._easeCubicActionInOut
}};
cc.easeCubicActionInOut = function () {
    return cc._easeCubicActionInOut
};
cc.cardinalSplineAt = function (p0, p1, p2, p3, tension, t) {
    var t2 = t * t;
    var t3 = t2 * t;
    var s = (1 - tension) / 2;
    var b1 = s * (-t3 + 2 * t2 - t);
    var b2 = s * (-t3 + t2) + (2 * t3 - 3 * t2 + 1);
    var b3 = s * (t3 - 2 * t2 + t) + (-2 * t3 + 3 * t2);
    var b4 = s * (t3 - t2);
    var x = p0.x * b1 + p1.x * b2 + p2.x * b3 + p3.x * b4;
    var y = p0.y * b1 + p1.y * b2 + p2.y * b3 + p3.y * b4;
    return cc.p(x, y)
};
cc.reverseControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = controlPoints.length - 1; i >= 0; i--)newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray
};
cc.copyControlPoints = function (controlPoints) {
    var newArray = [];
    for (var i = 0; i < controlPoints.length; i++)newArray.push(cc.p(controlPoints[i].x, controlPoints[i].y));
    return newArray
};
cc.getControlPointAt = function (controlPoints, pos) {
    var p = Math.min(controlPoints.length - 1, Math.max(pos, 0));
    return controlPoints[p]
};
cc.reverseControlPointsInline = function (controlPoints) {
    var len = controlPoints.length;
    var mid = 0 | len / 2;
    for (var i = 0; i < mid; ++i) {
        var temp = controlPoints[i];
        controlPoints[i] = controlPoints[len - i - 1];
        controlPoints[len - i - 1] = temp
    }
};
cc.CardinalSplineTo = cc.ActionInterval.extend({_points: null, _deltaT: 0, _tension: 0, _previousPosition: null, _accumulatedDiff: null, ctor: function (duration, points, tension) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._points = [];
    tension !== undefined && this.initWithDuration(duration, points, tension)
}, initWithDuration: function (duration, points, tension) {
    if (!points || points.length == 0)throw"Invalid configuration. It must at least have one control point";
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        duration)) {
        this.setPoints(points);
        this._tension = tension;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.CardinalSplineTo;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._deltaT = 1 / (this._points.length - 1);
    this._previousPosition = cc.p(this.target.getPositionX(), this.target.getPositionY());
    this._accumulatedDiff = cc.p(0, 0)
}, update: function (time) {
    time =
        this._computeEaseTime(time);
    var p, lt;
    var ps = this._points;
    if (time == 1) {
        p = ps.length - 1;
        lt = 1
    } else {
        var locDT = this._deltaT;
        p = 0 | time / locDT;
        lt = (time - locDT * p) / locDT
    }
    var newPos = cc.cardinalSplineAt(cc.getControlPointAt(ps, p - 1), cc.getControlPointAt(ps, p - 0), cc.getControlPointAt(ps, p + 1), cc.getControlPointAt(ps, p + 2), this._tension, lt);
    if (cc.ENABLE_STACKABLE_ACTIONS) {
        var tempX, tempY;
        tempX = this.target.getPositionX() - this._previousPosition.x;
        tempY = this.target.getPositionY() - this._previousPosition.y;
        if (tempX != 0 || tempY !=
            0) {
            var locAccDiff = this._accumulatedDiff;
            tempX = locAccDiff.x + tempX;
            tempY = locAccDiff.y + tempY;
            locAccDiff.x = tempX;
            locAccDiff.y = tempY;
            newPos.x += tempX;
            newPos.y += tempY
        }
    }
    this.updatePosition(newPos)
}, reverse: function () {
    var reversePoints = cc.reverseControlPoints(this._points);
    return cc.CardinalSplineTo.create(this._duration, reversePoints, this._tension)
}, updatePosition: function (newPos) {
    this.target.setPosition(newPos);
    this._previousPosition = newPos
}, getPoints: function () {
    return this._points
}, setPoints: function (points) {
    this._points =
        points
}});
cc.CardinalSplineTo.create = function (duration, points, tension) {
    return new cc.CardinalSplineTo(duration, points, tension)
};
cc.CardinalSplineBy = cc.CardinalSplineTo.extend({_startPosition: null, ctor: function (duration, points, tension) {
    cc.CardinalSplineTo.prototype.ctor.call(this);
    this._startPosition = cc.p(0, 0);
    tension !== undefined && this.initWithDuration(duration, points, tension)
}, startWithTarget: function (target) {
    cc.CardinalSplineTo.prototype.startWithTarget.call(this, target);
    this._startPosition.x = target.getPositionX();
    this._startPosition.y = target.getPositionY()
}, reverse: function () {
    var copyConfig = this._points.slice();
    var current;
    var p = copyConfig[0];
    for (var i = 1; i < copyConfig.length; ++i) {
        current = copyConfig[i];
        copyConfig[i] = cc.pSub(current, p);
        p = current
    }
    var reverseArray = cc.reverseControlPoints(copyConfig);
    p = reverseArray[reverseArray.length - 1];
    reverseArray.pop();
    p.x = -p.x;
    p.y = -p.y;
    reverseArray.unshift(p);
    for (var i = 1; i < reverseArray.length; ++i) {
        current = reverseArray[i];
        current.x = -current.x;
        current.y = -current.y;
        current.x += p.x;
        current.y += p.y;
        reverseArray[i] = current;
        p = current
    }
    return cc.CardinalSplineBy.create(this._duration, reverseArray,
        this._tension)
}, updatePosition: function (newPos) {
    var pos = this._startPosition;
    var posX = newPos.x + pos.x;
    var posY = newPos.y + pos.y;
    this._previousPosition.x = posX;
    this._previousPosition.y = posY;
    this.target.setPosition(posX, posY)
}, clone: function () {
    var a = new cc.CardinalSplineBy;
    a.initWithDuration(this._duration, cc.copyControlPoints(this._points), this._tension);
    return a
}});
cc.CardinalSplineBy.create = function (duration, points, tension) {
    return new cc.CardinalSplineBy(duration, points, tension)
};
cc.CatmullRomTo = cc.CardinalSplineTo.extend({ctor: function (dt, points) {
    points && this.initWithDuration(dt, points)
}, initWithDuration: function (dt, points) {
    return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5)
}, clone: function () {
    var action = new cc.CatmullRomTo;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
    return action
}});
cc.CatmullRomTo.create = function (dt, points) {
    return new cc.CatmullRomTo(dt, points)
};
cc.CatmullRomBy = cc.CardinalSplineBy.extend({ctor: function (dt, points) {
    cc.CardinalSplineBy.prototype.ctor.call(this);
    points && this.initWithDuration(dt, points)
}, initWithDuration: function (dt, points) {
    return cc.CardinalSplineTo.prototype.initWithDuration.call(this, dt, points, 0.5)
}, clone: function () {
    var action = new cc.CatmullRomBy;
    action.initWithDuration(this._duration, cc.copyControlPoints(this._points));
    return action
}});
cc.CatmullRomBy.create = function (dt, points) {
    return new cc.CatmullRomBy(dt, points)
};
cc.ActionTweenDelegate = cc.Class.extend({updateTweenAction: function (value, key) {
}});
cc.ActionTween = cc.ActionInterval.extend({key: "", from: 0, to: 0, delta: 0, ctor: function (duration, key, from, to) {
    cc.ActionInterval.prototype.ctor.call(this);
    this.key = "";
    to !== undefined && this.initWithDuration(duration, key, from, to)
}, initWithDuration: function (duration, key, from, to) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this.key = key;
        this.to = to;
        this.from = from;
        return true
    }
    return false
}, startWithTarget: function (target) {
    if (!target || !target.updateTweenAction)throw"cc.ActionTween.startWithTarget(): target must be non-null, and target must implement updateTweenAction function";
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this.delta = this.to - this.from
}, update: function (dt) {
    this.target.updateTweenAction(this.to - this.delta * (1 - dt), this.key)
}, reverse: function () {
    return cc.ActionTween.create(this.duration, this.key, this.to, this.from)
}, clone: function () {
    var action = new cc.ActionTween;
    action.initWithDuration(this._duration, this.key, this.from, this.to);
    return action
}});
cc.ActionTween.create = function (duration, key, from, to) {
    var ret = new cc.ActionTween;
    if (ret.initWithDuration(duration, key, from, to))return ret;
    return null
};
cc.action = cc.Action.create;
cc.speed = cc.Speed.create;
cc.follow = cc.Follow.create;
cc.orbitCamera = cc.OrbitCamera.create;
cc.cardinalSplineTo = cc.CardinalSplineTo.create;
cc.cardinalSplineBy = cc.CardinalSplineBy.create;
cc.catmullRomTo = cc.CatmullRomTo.create;
cc.catmullRomBy = cc.CatmullRomBy.create;
cc.show = cc.Show.create;
cc.hide = cc.Hide.create;
cc.toggleVisibility = cc.ToggleVisibility.create;
cc.removeSelf = cc.RemoveSelf.create;
cc.flipX = cc.FlipX.create;
cc.flipY = cc.FlipY.create;
cc.place = cc.Place.create;
cc.callFunc = cc.CallFunc.create;
cc.actionInterval = cc.ActionInterval.create;
cc.sequence = cc.Sequence.create;
cc.repeat = cc.Repeat.create;
cc.repeatForever = cc.RepeatForever.create;
cc.spawn = cc.Spawn.create;
cc.rotateTo = cc.RotateTo.create;
cc.rotateBy = cc.RotateBy.create;
cc.moveBy = cc.MoveBy.create;
cc.moveTo = cc.MoveTo.create;
cc.skewTo = cc.SkewTo.create;
cc.skewBy = cc.SkewBy.create;
cc.jumpBy = cc.JumpBy.create;
cc.jumpTo = cc.JumpTo.create;
cc.bezierBy = cc.BezierBy.create;
cc.bezierTo = cc.BezierTo.create;
cc.scaleTo = cc.ScaleTo.create;
cc.scaleBy = cc.ScaleBy.create;
cc.blink = cc.Blink.create;
cc.fadeTo = cc.FadeTo.create;
cc.fadeIn = cc.FadeIn.create;
cc.fadeOut = cc.FadeOut.create;
cc.tintTo = cc.TintTo.create;
cc.tintBy = cc.TintBy.create;
cc.delayTime = cc.DelayTime.create;
cc.reverseTime = cc.ReverseTime.create;
cc.animate = cc.Animate.create;
cc.targetedAction = cc.TargetedAction.create;
cc.actionTween = cc.ActionTween.create;if (cc.sys._supportWebAudio) {
    var _ctx = cc.webAudioContext = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext);
    cc.WebAudio = cc.Class.extend({_events: null, _buffer: null, _sourceNode: null, _volumeNode: null, src: null, preload: null, autoplay: null, controls: null, mediagroup: null, currentTime: 0, startTime: 0, duration: 0, _loop: null, _volume: 1, _pauseTime: 0, _paused: false, _stopped: true, _loadState: -1, ctor: function (src) {
        var self = this;
        self._events = {};
        self.src = src;
        if (_ctx["createGain"])self._volumeNode =
            _ctx["createGain"](); else self._volumeNode = _ctx["createGainNode"]();
        self._onSuccess1 = self._onSuccess.bind(this);
        self._onError1 = self._onError.bind(this)
    }, _play: function (offset) {
        var self = this;
        var sourceNode = self._sourceNode = _ctx["createBufferSource"]();
        var volumeNode = self._volumeNode;
        offset = offset || 0;
        sourceNode.buffer = self._buffer;
        volumeNode["gain"].value = self._volume;
        sourceNode["connect"](volumeNode);
        volumeNode["connect"](_ctx["destination"]);
        sourceNode.loop = self._loop;
        self._paused = false;
        self._stopped =
            false;
        if (sourceNode.start)sourceNode.start(0, offset); else if (sourceNode["noteGrainOn"]) {
            var duration = sourceNode.buffer.duration;
            if (self.loop)sourceNode["noteGrainOn"](0, offset, duration); else sourceNode["noteGrainOn"](0, offset, duration - offset)
        } else sourceNode["noteOn"](0);
        self._pauseTime = 0
    }, _stop: function () {
        var self = this, sourceNode = self._sourceNode;
        if (self._stopped)return;
        if (sourceNode.stop)sourceNode.stop(0); else sourceNode.noteOff(0);
        self._stopped = true
    }, play: function () {
        var self = this;
        if (self._loadState == -1) {
            self._loadState = 0;
            return
        } else if (self._loadState != 1)return;
        var sourceNode = self._sourceNode;
        if (!self._stopped && sourceNode && sourceNode["playbackState"] == 2)return;
        self.startTime = _ctx.currentTime;
        this._play(0)
    }, pause: function () {
        this._pauseTime = _ctx.currentTime;
        this._paused = true;
        this._stop()
    }, resume: function () {
        var self = this;
        if (self._paused) {
            var offset = self._buffer ? (self._pauseTime - self.startTime) % self._buffer.duration : 0;
            this._play(offset)
        }
    }, stop: function () {
        this._pauseTime = 0;
        this._paused = false;
        this._stop()
    },
        load: function () {
            var self = this;
            if (self._loadState == 1)return;
            self._loadState = -1;
            self.played = false;
            self.ended = true;
            var request = new XMLHttpRequest;
            request.open("GET", self.src, true);
            request.responseType = "arraybuffer";
            request.onload = function () {
                _ctx["decodeAudioData"](request.response, self._onSuccess1, self._onError1)
            };
            request.send()
        }, addEventListener: function (eventName, event) {
            this._events[eventName] = event.bind(this)
        }, removeEventListener: function (eventName) {
            delete this._events[eventName]
        }, canplay: function () {
            return cc.sys._supportWebAudio
        },
        _onSuccess: function (buffer) {
            var self = this;
            self._buffer = buffer;
            var success = self._events["success"], canplaythrough = self._events["canplaythrough"];
            if (success)success();
            if (canplaythrough)canplaythrough();
            if (self._loadState == 0 || self.autoplay == "autoplay" || self.autoplay == true)self._play();
            self._loadState = 1
        }, _onError: function () {
            var error = this._events["error"];
            if (error)error();
            this._loadState = -2
        }, cloneNode: function () {
            var self = this, obj = new cc.WebAudio(self.src);
            obj.volume = self.volume;
            obj._loadState = self._loadState;
            obj._buffer = self._buffer;
            if (obj._loadState == 0 || obj._loadState == -1)obj.load();
            return obj
        }});
    var _p = cc.WebAudio.prototype;
    _p.loop;
    cc.defineGetterSetter(_p, "loop", function () {
        return this._loop
    }, function (loop) {
        this._loop = loop;
        if (this._sourceNode)this._sourceNode.loop = loop
    });
    _p.volume;
    cc.defineGetterSetter(_p, "volume", function () {
        return this._volume
    }, function (volume) {
        this._volume = volume;
        this._volumeNode["gain"].value = volume
    });
    _p.paused;
    cc.defineGetterSetter(_p, "paused", function () {
        return this._paused
    });
    _p.ended;
    cc.defineGetterSetter(_p, "ended", function () {
        var sourceNode = this._sourceNode;
        return!this._paused && (this._stopped || !sourceNode || sourceNode["playbackState"] == 3)
    });
    _p.played;
    cc.defineGetterSetter(_p, "played", function () {
        var sourceNode = this._sourceNode;
        return sourceNode && sourceNode["playbackState"] == 2
    })
}
cc.AudioEngine = cc.Class.extend({_soundSupported: false, _currMusic: null, _currMusicPath: null, _musicPlayState: 0, _audioID: 0, _effects: {}, _audioPool: {}, _effectsVolume: 1, _maxAudioInstance: 5, _effectPauseCb: null, _playings: [], ctor: function () {
    var self = this;
    self._soundSupported = cc._audioLoader._supportedAudioTypes.length > 0;
    if (self._effectPauseCb)self._effectPauseCb = self._effectPauseCb.bind(self)
}, willPlayMusic: function () {
    return false
}, getEffectsVolume: function () {
    return this._effectsVolume
}, playMusic: function (url, loop) {
    var self = this;
    if (!self._soundSupported)return;
    var audio = self._currMusic;
    if (audio)this._stopAudio(audio);
    if (url != self._currMusicPath) {
        audio = self._getAudioByUrl(url);
        self._currMusic = audio;
        self._currMusicPath = url
    }
    if (!audio)return;
    audio.loop = loop || false;
    self._playMusic(audio)
}, _getAudioByUrl: function (url) {
    var locLoader = cc.loader, audio = locLoader.getRes(url);
    if (!audio) {
        locLoader.load(url);
        audio = locLoader.getRes(url)
    }
    return audio
}, _playMusic: function (audio) {
    if (!audio.ended)if (audio.stop)audio.stop();
    else {
        audio.pause();
        audio.currentTime = 0
    }
    this._musicPlayState = 2;
    audio.play()
}, stopMusic: function (releaseData) {
    if (this._musicPlayState > 0) {
        var audio = this._currMusic;
        if (!audio)return;
        if (!this._stopAudio(audio))return;
        if (releaseData)cc.loader.release(this._currMusicPath);
        this._currMusic = null;
        this._currMusicPath = null;
        this._musicPlayState = 0
    }
}, _stopAudio: function (audio) {
    if (audio && !audio.ended) {
        if (audio.stop)audio.stop(); else if (audio.duration && audio.duration != Infinity)audio.currentTime = audio.duration; else audio.pause();
        return true
    }
    return false
}, pauseMusic: function () {
    if (this._musicPlayState == 2) {
        this._currMusic.pause();
        this._musicPlayState = 1
    }
}, resumeMusic: function () {
    if (this._musicPlayState == 1) {
        var audio = this._currMusic;
        this._resumeAudio(audio);
        this._musicPlayState = 2
    }
}, _resumeAudio: function (audio) {
    if (audio && !audio.ended)if (audio.resume)audio.resume(); else audio.play()
}, rewindMusic: function () {
    if (this._currMusic)this._playMusic(this._currMusic)
}, getMusicVolume: function () {
    return this._musicPlayState == 0 ? 0 : this._currMusic.volume
},
    setMusicVolume: function (volume) {
        if (this._musicPlayState > 0)this._currMusic.volume = Math.min(Math.max(volume, 0), 1)
    }, isMusicPlaying: function () {
        return this._musicPlayState == 2 && this._currMusic && !this._currMusic.ended
    }, _getEffectList: function (url) {
        var list = this._audioPool[url];
        if (!list)list = this._audioPool[url] = [];
        return list
    }, _getEffect: function (url) {
        var self = this, audio;
        if (!self._soundSupported)return null;
        var effList = this._getEffectList(url);
        for (var i = 0, li = effList.length; i < li; i++) {
            var eff = effList[i];
            if (eff.ended) {
                audio =
                    eff;
                audio.currentTime = 0;
                if (window.chrome)audio.load();
                break
            }
        }
        if (!audio) {
            if (effList.length >= this._maxAudioInstance) {
                cc.log("Error: " + url + " greater than " + this._maxAudioInstance);
                return null
            }
            audio = self._getAudioByUrl(url);
            if (!audio)return null;
            audio = audio.cloneNode(true);
            if (self._effectPauseCb)cc._addEventListener(audio, "pause", self._effectPauseCb);
            audio.volume = this._effectsVolume;
            effList.push(audio)
        }
        return audio
    }, playEffect: function (url, loop) {
        var audio = this._getEffect(url);
        if (!audio)return null;
        audio.loop =
            loop || false;
        audio.play();
        var audioId = this._audioID++;
        this._effects[audioId] = audio;
        return audioId
    }, setEffectsVolume: function (volume) {
        volume = this._effectsVolume = Math.min(Math.max(volume, 0), 1);
        var effects = this._effects;
        for (var key in effects)effects[key].volume = volume
    }, pauseEffect: function (audioID) {
        var audio = this._effects[audioID];
        if (audio && !audio.ended)audio.pause()
    }, pauseAllEffects: function () {
        var effects = this._effects;
        for (var key in effects) {
            var eff = effects[key];
            if (!eff.ended)eff.pause()
        }
    }, resumeEffect: function (effectId) {
        this._resumeAudio(this._effects[effectId])
    },
    resumeAllEffects: function () {
        var effects = this._effects;
        for (var key in effects)this._resumeAudio(effects[key])
    }, stopEffect: function (effectId) {
        this._stopAudio(this._effects[effectId]);
        delete this._effects[effectId]
    }, stopAllEffects: function () {
        var effects = this._effects;
        for (var key in effects) {
            this._stopAudio(effects[key]);
            delete effects[key]
        }
    }, unloadEffect: function (url) {
        var locLoader = cc.loader, locEffects = this._effects, effectList = this._getEffectList(url);
        locLoader.release(url);
        if (effectList.length == 0)return;
        var realUrl = effectList[0].src;
        delete this._audioPool[url];
        for (var key in locEffects)if (locEffects[key].src == realUrl) {
            this._stopAudio(locEffects[key]);
            delete locEffects[key]
        }
    }, end: function () {
        this.stopMusic();
        this.stopAllEffects()
    }, _pausePlaying: function () {
        var self = this, effects = self._effects, eff;
        for (var key in effects) {
            eff = effects[key];
            if (eff && !eff.ended && !eff.paused) {
                self._playings.push(eff);
                eff.pause()
            }
        }
        if (self.isMusicPlaying()) {
            self._playings.push(self._currMusic);
            self._currMusic.pause()
        }
    }, _resumePlaying: function () {
        var self =
            this, playings = this._playings;
        for (var i = 0, li = playings.length; i < li; i++)self._resumeAudio(playings[i]);
        playings.length = 0
    }});
if (!cc.sys._supportWebAudio && cc.sys._supportMultipleAudio < 0)cc.AudioEngineForSingle = cc.AudioEngine.extend({_waitingEffIds: [], _pausedEffIds: [], _currEffect: null, _maxAudioInstance: 2, _effectCache4Single: {}, _needToResumeMusic: false, _expendTime4Music: 0, _isHiddenMode: false, _playMusic: function (audio) {
    this._stopAllEffects();
    this._super(audio)
}, resumeMusic: function () {
    var self = this;
    if (self._musicPlayState == 1) {
        self._stopAllEffects();
        self._needToResumeMusic = false;
        self._expendTime4Music = 0;
        self._super()
    }
}, playEffect: function (url, loop) {
    var self = this, currEffect = self._currEffect;
    var audio = loop ? self._getEffect(url) : self._getSingleEffect(url);
    if (!audio)return null;
    audio.loop = loop || false;
    var audioId = self._audioID++;
    self._effects[audioId] = audio;
    if (self.isMusicPlaying()) {
        self.pauseMusic();
        self._needToResumeMusic = true
    }
    if (currEffect) {
        if (currEffect != audio)self._waitingEffIds.push(self._currEffectId);
        self._waitingEffIds.push(audioId);
        currEffect.pause()
    } else {
        self._currEffect = audio;
        self._currEffectId = audioId;
        audio.play()
    }
    return audioId
},
    pauseEffect: function (effectId) {
        cc.log("pauseEffect not supported in single audio mode!")
    }, pauseAllEffects: function () {
        var self = this, waitings = self._waitingEffIds, pauseds = self._pausedEffIds, currEffect = self._currEffect;
        if (!currEffect)return;
        for (var i = 0, li = waitings.length; i < li; i++)pauseds.push(waitings[i]);
        waitings.length = 0;
        pauseds.push(self._currEffectId);
        currEffect.pause()
    }, resumeEffect: function (effectId) {
        cc.log("resumeEffect not supported in single audio mode!")
    }, resumeAllEffects: function () {
        var self =
            this, waitings = self._waitingEffIds, pauseds = self._pausedEffIds;
        if (self.isMusicPlaying()) {
            self.pauseMusic();
            self._needToResumeMusic = true
        }
        for (var i = 0, li = pauseds.length; i < li; i++)waitings.push(pauseds[i]);
        pauseds.length = 0;
        if (!self._currEffect && waitings.length >= 0) {
            var effId = waitings.pop();
            var eff = self._effects[effId];
            if (eff) {
                self._currEffectId = effId;
                self._currEffect = eff;
                self._resumeAudio(eff)
            }
        }
    }, stopEffect: function (effectId) {
        var self = this, currEffect = self._currEffect, waitings = self._waitingEffIds, pauseds =
            self._pausedEffIds;
        if (currEffect && this._currEffectId == effectId)this._stopAudio(currEffect); else {
            var index = waitings.indexOf(effectId);
            if (index >= 0)waitings.splice(index, 1); else {
                index = pauseds.indexOf(effectId);
                if (index >= 0)pauseds.splice(index, 1)
            }
        }
    }, stopAllEffects: function () {
        var self = this;
        self._stopAllEffects();
        if (!self._currEffect && self._needToResumeMusic) {
            self._resumeAudio(self._currMusic);
            self._musicPlayState = 2;
            self._needToResumeMusic = false;
            self._expendTime4Music = 0
        }
    }, unloadEffect: function (url) {
        var self =
            this, locLoader = cc.loader, locEffects = self._effects, effCache = self._effectCache4Single, effectList = self._getEffectList(url), currEffect = self._currEffect;
        locLoader.release(url);
        if (effectList.length == 0 && !effCache[url])return;
        var realUrl = effectList.length > 0 ? effectList[0].src : effCache[url].src;
        delete self._audioPool[url];
        delete effCache[url];
        for (var key in locEffects)if (locEffects[key].src == realUrl)delete locEffects[key];
        if (currEffect && currEffect.src == realUrl)self._stopAudio(currEffect)
    }, _getSingleEffect: function (url) {
        var self =
            this, audio = self._effectCache4Single[url], locLoader = cc.loader, waitings = self._waitingEffIds, pauseds = self._pausedEffIds, effects = self._effects;
        if (audio)audio.currentTime = 0; else {
            audio = self._getAudioByUrl(url);
            if (!audio)return null;
            audio = audio.cloneNode(true);
            if (self._effectPauseCb)cc._addEventListener(audio, "pause", self._effectPauseCb);
            audio.volume = self._effectsVolume;
            self._effectCache4Single[url] = audio
        }
        for (var i = 0, li = waitings.length; i < li;)if (effects[waitings[i]] == audio)waitings.splice(i, 1); else i++;
        for (var i =
            0, li = pauseds.length; i < li;)if (effects[pauseds[i]] == audio)pauseds.splice(i, 1); else i++;
        audio._isToPlay = true;
        return audio
    }, _stopAllEffects: function () {
        var self = this, currEffect = self._currEffect, audioPool = self._audioPool, sglCache = self._effectCache4Single, waitings = self._waitingEffIds, pauseds = self._pausedEffIds;
        if (!currEffect && waitings.length == 0 && pauseds.length == 0)return;
        for (var key in sglCache) {
            var eff = sglCache[key];
            if (eff.duration && eff.duration != Infinity)eff.currentTime = eff.duration
        }
        waitings.length = 0;
        pauseds.length =
            0;
        for (var key in audioPool) {
            var list = audioPool[key];
            for (var i = 0, li = list.length; i < li; i++) {
                var eff = list[i];
                eff.loop = false;
                if (eff.duration && eff.duration != Infinity)eff.currentTime = eff.duration
            }
        }
        if (currEffect)self._stopAudio(currEffect)
    }, _effectPauseCb: function () {
        var self = this;
        if (self._isHiddenMode)return;
        var currEffect = self._getWaitingEffToPlay();
        if (currEffect)if (currEffect._isToPlay) {
            delete currEffect._isToPlay;
            currEffect.play()
        } else self._resumeAudio(currEffect); else if (self._needToResumeMusic) {
            var currMusic =
                self._currMusic;
            if (currMusic.duration && currMusic.duration != Infinity) {
                var temp = currMusic.currentTime + self._expendTime4Music;
                temp = temp - currMusic.duration * (temp / currMusic.duration | 0);
                currMusic.currentTime = temp
            }
            self._expendTime4Music = 0;
            self._resumeAudio(currMusic);
            self._musicPlayState = 2;
            self._needToResumeMusic = false
        }
    }, _getWaitingEffToPlay: function () {
        var self = this, waitings = self._waitingEffIds, effects = self._effects, currEffect = self._currEffect;
        var expendTime = currEffect ? currEffect.currentTime - (currEffect.startTime ||
            0) : 0;
        self._expendTime4Music += expendTime;
        while (true) {
            if (waitings.length == 0)break;
            var effId = waitings.pop();
            var eff = effects[effId];
            if (!eff)continue;
            if (eff._isToPlay || eff.loop || eff.duration && eff.currentTime + expendTime < eff.duration) {
                self._currEffectId = effId;
                self._currEffect = eff;
                if (!eff._isToPlay && eff.duration && eff.duration != Infinity) {
                    var temp = eff.currentTime + expendTime;
                    temp = temp - eff.duration * (temp / eff.duration | 0);
                    eff.currentTime = temp
                }
                eff._isToPlay = false;
                return eff
            } else if (eff.duration && eff.duration != Infinity)eff.currentTime =
                eff.duration
        }
        self._currEffectId = null;
        self._currEffect = null;
        return null
    }, _pausePlaying: function () {
        var self = this, currEffect = self._currEffect;
        self._isHiddenMode = true;
        var audio = self._musicPlayState == 2 ? self._currMusic : currEffect;
        if (audio) {
            self._playings.push(audio);
            audio.pause()
        }
    }, _resumePlaying: function () {
        var self = this, playings = self._playings;
        self._isHiddenMode = false;
        if (playings.length > 0) {
            self._resumeAudio(playings[0]);
            playings.length = 0
        }
    }});
cc._audioLoader = {_supportedAudioTypes: null, getBasePath: function () {
    return cc.loader.audioPath
}, _load: function (realUrl, url, res, count, tryArr, audio, cb) {
    var self = this, locLoader = cc.loader, path = cc.path;
    var types = this._supportedAudioTypes;
    var extname = "";
    if (types.length == 0)return cb("can not support audio!");
    if (count == -1) {
        extname = (path.extname(realUrl) || "").toLowerCase();
        if (!self.audioTypeSupported(extname)) {
            extname = types[0];
            count = 0
        }
    } else if (count < types.length)extname = types[count]; else return cb("can not found the resource of audio! Last match url is : " +
        realUrl);
    if (tryArr.indexOf(extname) >= 0)return self._load(realUrl, url, res, count + 1, tryArr, audio, cb);
    realUrl = path.changeExtname(realUrl, extname);
    tryArr.push(extname);
    var delFlag = count == types.length - 1;
    audio = self._loadAudio(realUrl, audio, function (err) {
        if (err)return self._load(realUrl, url, res, count + 1, tryArr, audio, cb);
        cb(null, audio)
    }, delFlag);
    locLoader.cache[url] = audio
}, audioTypeSupported: function (type) {
    if (!type)return false;
    return this._supportedAudioTypes.indexOf(type.toLowerCase()) >= 0
}, _loadAudio: function (url, audio, cb, delFlag) {
    var _Audio = location.origin == "file://" ? Audio : cc.WebAudio || Audio;
    if (arguments.length == 2) {
        cb = audio;
        audio = new _Audio
    } else if (arguments.length > 3 && !audio)audio = new _Audio;
    audio.src = url;
    audio.preload = "auto";
    var ua = navigator.userAgent;
    if (/Mobile/.test(ua) && (/iPhone OS/.test(ua) || /iPad/.test(ua) || /Firefox/.test(ua)) || /MSIE/.test(ua)) {
        audio.load();
        cb(null, audio)
    } else {
        var canplaythrough = "canplaythrough", error = "error";
        cc._addEventListener(audio, canplaythrough, function () {
            cb(null, audio);
            this.removeEventListener(canplaythrough,
                arguments.callee, false);
            this.removeEventListener(error, arguments.callee, false)
        }, false);
        cc._addEventListener(audio, error, function () {
            cb("load " + url + " failed");
            if (delFlag) {
                this.removeEventListener(canplaythrough, arguments.callee, false);
                this.removeEventListener(error, arguments.callee, false)
            }
        }, false);
        audio.load()
    }
    return audio
}, load: function (realUrl, url, res, cb) {
    var tryArr = [];
    this._load(realUrl, url, res, -1, tryArr, null, cb)
}};
cc._audioLoader._supportedAudioTypes = function () {
    var au = cc.newElement("audio"), arr = [];
    if (au.canPlayType) {
        var _check = function (typeStr) {
            var result = au.canPlayType(typeStr);
            return result != "no" && result != ""
        };
        if (_check('audio/ogg; codecs\x3d"vorbis"'))arr.push(".ogg");
        if (_check("audio/mpeg"))arr.push(".mp3");
        if (_check('audio/wav; codecs\x3d"1"'))arr.push(".wav");
        if (_check("audio/mp4"))arr.push(".mp4");
        if (_check("audio/x-m4a") || _check("audio/aac"))arr.push(".m4a")
    }
    return arr
}();
cc.loader.register(["mp3", "ogg", "wav", "mp4", "m4a"], cc._audioLoader);
cc.audioEngine = cc.AudioEngineForSingle ? new cc.AudioEngineForSingle : new cc.AudioEngine;
cc.eventManager.addCustomListener(cc.game.EVENT_HIDE, function () {
    cc.audioEngine._pausePlaying()
});
cc.eventManager.addCustomListener(cc.game.EVENT_SHOW, function () {
    cc.audioEngine._resumePlaying()
});cc.kmScalar = Number;
cc.kmBool = Number;
cc.kmEnum = Number;
cc.KM_FALSE = 0;
cc.KM_TRUE = 1;
cc.kmPI = 3.141592;
cc.kmPIOver180 = 0.017453;
cc.kmPIUnder180 = 57.295779;
cc.kmEpsilon = 1 / 64;
cc.kmSQR = function (s) {
    return s * s
};
cc.kmDegreesToRadians = function (degrees) {
    return degrees * cc.kmPIOver180
};
cc.kmRadiansToDegrees = function (radians) {
    return radians * cc.kmPIUnder180
};
cc.kmMin = function (lhs, rhs) {
    return lhs < rhs ? lhs : rhs
};
cc.kmMax = function (lhs, rhs) {
    return lhs > rhs ? lhs : rhs
};
cc.kmAlmostEqual = function (lhs, rhs) {
    return lhs + cc.kmEpsilon > rhs && lhs - cc.kmEpsilon < rhs
};
cc.kmVec2 = function (x, y) {
    this.x = x || 0;
    this.y = y || 0
};
cc.kmVec2Fill = function (pOut, x, y) {
    pOut.x = x;
    pOut.y = y;
    return pOut
};
cc.kmVec2Length = function (pIn) {
    return Math.sqrt(cc.kmSQR(pIn.x) + cc.kmSQR(pIn.y))
};
cc.kmVec2LengthSq = function (pIn) {
    return cc.kmSQR(pIn.x) + cc.kmSQR(pIn.y)
};
cc.kmVec2Normalize = function (pOut, pIn) {
    var l = 1 / cc.kmVec2Length(pIn);
    var v = new cc.kmVec2;
    v.x = pIn.x * l;
    v.y = pIn.y * l;
    pOut.x = v.x;
    pOut.y = v.y;
    return pOut
};
cc.kmVec2Add = function (pOut, pV1, pV2) {
    pOut.x = pV1.x + pV2.x;
    pOut.y = pV1.y + pV2.y;
    return pOut
};
cc.kmVec2Dot = function (pV1, pV2) {
    return pV1.x * pV2.x + pV1.y * pV2.y
};
cc.kmVec2Subtract = function (pOut, pV1, pV2) {
    pOut.x = pV1.x - pV2.x;
    pOut.y = pV1.y - pV2.y;
    return pOut
};
cc.kmVec2Transform = function (pOut, pV, pM) {
    var v = new cc.kmVec2;
    v.x = pV.x * pM.mat[0] + pV.y * pM.mat[3] + pM.mat[6];
    v.y = pV.x * pM.mat[1] + pV.y * pM.mat[4] + pM.mat[7];
    pOut.x = v.x;
    pOut.y = v.y;
    return pOut
};
cc.kmVec2TransformCoord = function (pOut, pV, pM) {
    return null
};
cc.kmVec2Scale = function (pOut, pIn, s) {
    pOut.x = pIn.x * s;
    pOut.y = pIn.y * s;
    return pOut
};
cc.kmVec2AreEqual = function (p1, p2) {
    return p1.x < p2.x + cc.kmEpsilon && p1.x > p2.x - cc.kmEpsilon && p1.y < p2.y + cc.kmEpsilon && p1.y > p2.y - cc.kmEpsilon
};
cc.kmVec3 = function (x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0
};
cc.kmVec3Fill = function (pOut, x, y, z) {
    if (!pOut)return new cc.kmVec3(x, y, z);
    pOut.x = x;
    pOut.y = y;
    pOut.z = z;
    return pOut
};
cc.kmVec3Length = function (pIn) {
    return Math.sqrt(cc.kmSQR(pIn.x) + cc.kmSQR(pIn.y) + cc.kmSQR(pIn.z))
};
cc.kmVec3LengthSq = function (pIn) {
    return cc.kmSQR(pIn.x) + cc.kmSQR(pIn.y) + cc.kmSQR(pIn.z)
};
cc.kmVec3Normalize = function (pOut, pIn) {
    var l = 1 / cc.kmVec3Length(pIn);
    pOut.x = pIn.x * l;
    pOut.y = pIn.y * l;
    pOut.z = pIn.z * l;
    return pOut
};
cc.kmVec3Cross = function (pOut, pV1, pV2) {
    pOut.x = pV1.y * pV2.z - pV1.z * pV2.y;
    pOut.y = pV1.z * pV2.x - pV1.x * pV2.z;
    pOut.z = pV1.x * pV2.y - pV1.y * pV2.x;
    return pOut
};
cc.kmVec3Dot = function (pV1, pV2) {
    return pV1.x * pV2.x + pV1.y * pV2.y + pV1.z * pV2.z
};
cc.kmVec3Add = function (pOut, pV1, pV2) {
    pOut.x = pV1.x + pV2.x;
    pOut.y = pV1.y + pV2.y;
    pOut.z = pV1.z + pV2.z;
    return pOut
};
cc.kmVec3Subtract = function (pOut, pV1, pV2) {
    pOut.x = pV1.x - pV2.x;
    pOut.y = pV1.y - pV2.y;
    pOut.z = pV1.z - pV2.z;
    return pOut
};
cc.kmVec3Transform = function (pOut, pV, pM) {
    pOut.x = pV.x * pM.mat[0] + pV.y * pM.mat[4] + pV.z * pM.mat[8] + pM.mat[12];
    pOut.y = pV.x * pM.mat[1] + pV.y * pM.mat[5] + pV.z * pM.mat[9] + pM.mat[13];
    pOut.z = pV.x * pM.mat[2] + pV.y * pM.mat[6] + pV.z * pM.mat[10] + pM.mat[14];
    return pOut
};
cc.kmVec3TransformNormal = function (pOut, pV, pM) {
    pOut.x = pV.x * pM.mat[0] + pV.y * pM.mat[4] + pV.z * pM.mat[8];
    pOut.y = pV.x * pM.mat[1] + pV.y * pM.mat[5] + pV.z * pM.mat[9];
    pOut.z = pV.x * pM.mat[2] + pV.y * pM.mat[6] + pV.z * pM.mat[10];
    return pOut
};
cc.kmVec3TransformCoord = function (pOut, pV, pM) {
    var v = new cc.kmVec4;
    var inV = new cc.kmVec4;
    cc.kmVec4Fill(inV, pV.x, pV.y, pV.z, 1);
    cc.kmVec4Transform(v, inV, pM);
    pOut.x = v.x / v.w;
    pOut.y = v.y / v.w;
    pOut.z = v.z / v.w;
    return pOut
};
cc.kmVec3Scale = function (pOut, pIn, s) {
    pOut.x = pIn.x * s;
    pOut.y = pIn.y * s;
    pOut.z = pIn.z * s;
    return pOut
};
cc.kmVec3AreEqual = function (p1, p2) {
    if (p1.x < p2.x + cc.kmEpsilon && p1.x > p2.x - cc.kmEpsilon && p1.y < p2.y + cc.kmEpsilon && p1.y > p2.y - cc.kmEpsilon && p1.z < p2.z + cc.kmEpsilon && p1.z > p2.z - cc.kmEpsilon)return 1;
    return 0
};
cc.kmVec3InverseTransform = function (pOut, pVect, pM) {
    var v1 = new cc.kmVec3(pVect.x - pM.mat[12], pVect.y - pM.mat[13], pVect.z - pM.mat[14]);
    pOut.x = v1.x * pM.mat[0] + v1.y * pM.mat[1] + v1.z * pM.mat[2];
    pOut.y = v1.x * pM.mat[4] + v1.y * pM.mat[5] + v1.z * pM.mat[6];
    pOut.z = v1.x * pM.mat[8] + v1.y * pM.mat[9] + v1.z * pM.mat[10];
    return pOut
};
cc.kmVec3InverseTransformNormal = function (pOut, pVect, pM) {
    pOut.x = pVect.x * pM.mat[0] + pVect.y * pM.mat[1] + pVect.z * pM.mat[2];
    pOut.y = pVect.x * pM.mat[4] + pVect.y * pM.mat[5] + pVect.z * pM.mat[6];
    pOut.z = pVect.x * pM.mat[8] + pVect.y * pM.mat[9] + pVect.z * pM.mat[10];
    return pOut
};
cc.kmVec3Assign = function (pOut, pIn) {
    if (pOut == pIn)return pOut;
    pOut.x = pIn.x;
    pOut.y = pIn.y;
    pOut.z = pIn.z;
    return pOut
};
cc.kmVec3Zero = function (pOut) {
    pOut.x = 0;
    pOut.y = 0;
    pOut.z = 0;
    return pOut
};
cc.kmVec3ToTypeArray = function (vecValue) {
    if (!vecValue)return null;
    var tyArr = new Float32Array(3);
    tyArr[0] = vecValue.x;
    tyArr[1] = vecValue.y;
    tyArr[2] = vecValue.z;
    return tyArr
};
cc.kmVec4 = function (x, y, z, w) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = w || 0
};
cc.kmVec4Fill = function (outVec, x, y, z, w) {
    outVec.x = x;
    outVec.y = y;
    outVec.z = z;
    outVec.w = w;
    return outVec
};
cc.kmVec4Add = function (outVec, pV1, pV2) {
    outVec.x = pV1.x + pV2.x;
    outVec.y = pV1.y + pV2.y;
    outVec.z = pV1.z + pV2.z;
    outVec.w = pV1.w + pV2.w;
    return outVec
};
cc.kmVec4Dot = function (vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z + vec1.w * vec2.w
};
cc.kmVec4Length = function (inVec) {
    return Math.sqrt(cc.kmSQR(inVec.x) + cc.kmSQR(inVec.y) + cc.kmSQR(inVec.z) + cc.kmSQR(inVec.w))
};
cc.kmVec4LengthSq = function (inVec) {
    return cc.kmSQR(inVec.x) + cc.kmSQR(inVec.y) + cc.kmSQR(inVec.z) + cc.kmSQR(inVec.w)
};
cc.kmVec4Lerp = function (outVec, pV1, pV2, t) {
    return outVec
};
cc.kmVec4Normalize = function (outVec, inVec) {
    var l = 1 / cc.kmVec4Length(inVec);
    outVec.x *= l;
    outVec.y *= l;
    outVec.z *= l;
    outVec.w *= l;
    return outVec
};
cc.kmVec4Scale = function (outVec, inVec, scale) {
    cc.kmVec4Normalize(outVec, inVec);
    outVec.x *= scale;
    outVec.y *= scale;
    outVec.z *= scale;
    outVec.w *= scale;
    return outVec
};
cc.kmVec4Subtract = function (outVec, vec1, vec2) {
    outVec.x = vec1.x - vec2.x;
    outVec.y = vec1.y - vec2.y;
    outVec.z = vec1.z - vec2.z;
    outVec.w = vec1.w - vec2.w;
    return outVec
};
cc.kmVec4Transform = function (outVec, vec, mat4Obj) {
    outVec.x = vec.x * mat4Obj.mat[0] + vec.y * mat4Obj.mat[4] + vec.z * mat4Obj.mat[8] + vec.w * mat4Obj.mat[12];
    outVec.y = vec.x * mat4Obj.mat[1] + vec.y * mat4Obj.mat[5] + vec.z * mat4Obj.mat[9] + vec.w * mat4Obj.mat[13];
    outVec.z = vec.x * mat4Obj.mat[2] + vec.y * mat4Obj.mat[6] + vec.z * mat4Obj.mat[10] + vec.w * mat4Obj.mat[14];
    outVec.w = vec.x * mat4Obj.mat[3] + vec.y * mat4Obj.mat[7] + vec.z * mat4Obj.mat[11] + vec.w * mat4Obj.mat[15];
    return outVec
};
cc.kmVec4TransformArray = function (outVec, outStride, vecObj, stride, mat4Obj, count) {
    var i = 0;
    while (i < count) {
        var currIn = vecObj + i * stride;
        var out = outVec + i * outStride;
        cc.kmVec4Transform(out, currIn, mat4Obj);
        ++i
    }
    return outVec
};
cc.kmVec4AreEqual = function (vec1, vec2) {
    return vec1.x < vec2.x + cc.kmEpsilon && vec1.x > vec2.x - cc.kmEpsilon && vec1.y < vec2.y + cc.kmEpsilon && vec1.y > vec2.y - cc.kmEpsilon && vec1.z < vec2.z + cc.kmEpsilon && vec1.z > vec2.z - cc.kmEpsilon && vec1.w < vec2.w + cc.kmEpsilon && vec1.w > vec2.w - cc.kmEpsilon
};
cc.kmVec4Assign = function (destVec, srcVec) {
    if (destVec == srcVec) {
        cc.log("destVec and srcVec are same object");
        return destVec
    }
    destVec.x = srcVec.x;
    destVec.y = srcVec.y;
    destVec.z = srcVec.z;
    destVec.w = srcVec.w;
    return destVec
};
cc.kmVec4ToTypeArray = function (vecValue) {
    if (!vecValue)return null;
    var tyArr = new Float32Array(4);
    tyArr[0] = vecValue.x;
    tyArr[1] = vecValue.y;
    tyArr[2] = vecValue.z;
    tyArr[3] = vecValue.w;
    return tyArr
};
cc.kmRay2 = function (start, dir) {
    this.start = start || new cc.kmVec2;
    this.start = start || new cc.kmVec2
};
cc.kmRay2Fill = function (ray, px, py, vx, vy) {
    ray.start.x = px;
    ray.start.y = py;
    ray.dir.x = vx;
    ray.dir.y = vy
};
cc.kmRay2IntersectLineSegment = function (ray, p1, p2, intersection) {
    var x1 = ray.start.x;
    var y1 = ray.start.y;
    var x2 = ray.start.x + ray.dir.x;
    var y2 = ray.start.y + ray.dir.y;
    var x3 = p1.x;
    var y3 = p1.y;
    var x4 = p2.x;
    var y4 = p2.y;
    var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    var ua, x, y;
    if (denom > -cc.kmEpsilon && denom < cc.kmEpsilon)return cc.KM_FALSE;
    ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    x = x1 + ua * (x2 - x1);
    y = y1 + ua * (y2 - y1);
    if (x < cc.kmMin(p1.x, p2.x) - cc.kmEpsilon || x > cc.kmMax(p1.x, p2.x) + cc.kmEpsilon || y < cc.kmMin(p1.y, p2.y) - cc.kmEpsilon ||
        y > cc.kmMax(p1.y, p2.y) + cc.kmEpsilon)return cc.KM_FALSE;
    if (x < cc.kmMin(x1, x2) - cc.kmEpsilon || x > cc.kmMax(x1, x2) + cc.kmEpsilon || y < cc.kmMin(y1, y2) - cc.kmEpsilon || y > cc.kmMax(y1, y2) + cc.kmEpsilon)return cc.KM_FALSE;
    intersection.x = x;
    intersection.y = y;
    return cc.KM_TRUE
};
cc.calculate_line_normal = function (p1, p2, normal_out) {
    var tmp = new cc.kmVec2;
    cc.kmVec2Subtract(tmp, p2, p1);
    normal_out.x = -tmp.y;
    normal_out.y = tmp.x;
    cc.kmVec2Normalize(normal_out, normal_out)
};
cc.kmRay2IntersectTriangle = function (ray, p1, p2, p3, intersection, normal_out) {
    var intersect = new cc.kmVec2;
    var final_intersect = new cc.kmVec2;
    var normal = new cc.kmVec2;
    var distance = 1E4;
    var intersected = cc.KM_FALSE;
    var tmp, this_distance;
    if (cc.kmRay2IntersectLineSegment(ray, p1, p2, intersect)) {
        tmp = new cc.kmVec2;
        intersected = cc.KM_TRUE;
        this_distance = cc.kmVec2Length(cc.kmVec2Subtract(tmp, intersect, ray.start));
        if (this_distance < distance) {
            final_intersect.x = intersect.x;
            final_intersect.y = intersect.y;
            distance = this_distance;
            cc.calculate_line_normal(p1, p2, normal)
        }
    }
    if (cc.kmRay2IntersectLineSegment(ray, p2, p3, intersect)) {
        tmp = new cc.kmVec2;
        intersected = cc.KM_TRUE;
        this_distance = cc.kmVec2Length(cc.kmVec2Subtract(tmp, intersect, ray.start));
        if (this_distance < distance) {
            final_intersect.x = intersect.x;
            final_intersect.y = intersect.y;
            distance = this_distance;
            cc.calculate_line_normal(p2, p3, normal)
        }
    }
    if (cc.kmRay2IntersectLineSegment(ray, p3, p1, intersect)) {
        tmp = new cc.kmVec2;
        intersected = cc.KM_TRUE;
        this_distance = cc.kmVec2Length(cc.kmVec2Subtract(tmp,
            intersect, ray.start));
        if (this_distance < distance) {
            final_intersect.x = intersect.x;
            final_intersect.y = intersect.y;
            distance = this_distance;
            cc.calculate_line_normal(p3, p1, normal)
        }
    }
    if (intersected) {
        intersection.x = final_intersect.x;
        intersection.y = final_intersect.y;
        if (normal_out) {
            normal_out.x = normal.x;
            normal_out.y = normal.y
        }
    }
    return intersected
};
cc.kmRay2IntersectCircle = function (ray, centre, radius, intersection) {
    cc.log("cc.kmRay2IntersectCircle() has not been implemented.")
};
var Float32Array = Float32Array || Array;
cc.kmMat3 = function () {
    this.mat = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0])
};
cc.kmMat3Fill = function (pOut, pMat) {
    for (var i = 0; i < 9; i++)pOut.mat[i] = pMat;
    return pOut
};
cc.kmMat3Adjugate = function (pOut, pIn) {
    pOut.mat[0] = pIn.mat[4] * pIn.mat[8] - pIn.mat[5] * pIn.mat[7];
    pOut.mat[1] = pIn.mat[2] * pIn.mat[7] - pIn.mat[1] * pIn.mat[8];
    pOut.mat[2] = pIn.mat[1] * pIn.mat[5] - pIn.mat[2] * pIn.mat[4];
    pOut.mat[3] = pIn.mat[5] * pIn.mat[6] - pIn.mat[3] * pIn.mat[8];
    pOut.mat[4] = pIn.mat[0] * pIn.mat[8] - pIn.mat[2] * pIn.mat[6];
    pOut.mat[5] = pIn.mat[2] * pIn.mat[3] - pIn.mat[0] * pIn.mat[5];
    pOut.mat[6] = pIn.mat[3] * pIn.mat[7] - pIn.mat[4] * pIn.mat[6];
    pOut.mat[8] = pIn.mat[0] * pIn.mat[4] - pIn.mat[1] * pIn.mat[3];
    return pOut
};
cc.kmMat3Identity = function (pOut) {
    pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[5] = pOut.mat[6] = pOut.mat[7] = 0;
    pOut.mat[0] = pOut.mat[4] = pOut.mat[8] = 1;
    return pOut
};
cc.kmMat3Inverse = function (pOut, pDeterminate, pM) {
    var detInv;
    var adjugate = new cc.kmMat3;
    if (pDeterminate === 0)return null;
    detInv = 1 / pDeterminate;
    cc.kmMat3Adjugate(adjugate, pM);
    cc.kmMat3ScalarMultiply(pOut, adjugate, detInv);
    return pOut
};
cc.kmMat3._identity = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
cc.kmMat3IsIdentity = function (pIn) {
    for (var i = 0; i < 9; i++)if (cc.kmMat3._identity[i] !== pIn.mat[i])return false;
    return true
};
cc.kmMat3Transpose = function (pOut, pIn) {
    var z, x;
    for (z = 0; z < 3; ++z)for (x = 0; x < 3; ++x)pOut.mat[z * 3 + x] = pIn.mat[x * 3 + z];
    return pOut
};
cc.kmMat3Determinant = function (pIn) {
    var output;
    output = pIn.mat[0] * pIn.mat[4] * pIn.mat[8] + pIn.mat[1] * pIn.mat[5] * pIn.mat[6] + pIn.mat[2] * pIn.mat[3] * pIn.mat[7];
    output -= pIn.mat[2] * pIn.mat[4] * pIn.mat[6] + pIn.mat[0] * pIn.mat[5] * pIn.mat[7] + pIn.mat[1] * pIn.mat[3] * pIn.mat[8];
    return output
};
cc.kmMat3Multiply = function (pOut, pM1, pM2) {
    var m1 = pM1.mat, m2 = pM2.mat;
    pOut.mat[0] = m1[0] * m2[0] + m1[3] * m2[1] + m1[6] * m2[2];
    pOut.mat[1] = m1[1] * m2[0] + m1[4] * m2[1] + m1[7] * m2[2];
    pOut.mat[2] = m1[2] * m2[0] + m1[5] * m2[1] + m1[8] * m2[2];
    pOut.mat[3] = m1[0] * m2[3] + m1[3] * m2[4] + m1[6] * m2[5];
    pOut.mat[4] = m1[1] * m2[3] + m1[4] * m2[4] + m1[7] * m2[5];
    pOut.mat[5] = m1[2] * m2[3] + m1[5] * m2[4] + m1[8] * m2[5];
    pOut.mat[6] = m1[0] * m2[6] + m1[3] * m2[7] + m1[6] * m2[8];
    pOut.mat[7] = m1[1] * m2[6] + m1[4] * m2[7] + m1[7] * m2[8];
    pOut.mat[8] = m1[2] * m2[6] + m1[5] * m2[7] + m1[8] * m2[8];
    return pOut
};
cc.kmMat3ScalarMultiply = function (pOut, pM, pFactor) {
    for (var i = 0; i < 9; i++)pOut.mat[i] = pM.mat[i] * pFactor;
    return pOut
};
cc.kmMat3RotationAxisAngle = function (pOut, axis, radians) {
    var rcos = Math.cos(radians);
    var rsin = Math.sin(radians);
    pOut.mat[0] = rcos + axis.x * axis.x * (1 - rcos);
    pOut.mat[1] = axis.z * rsin + axis.y * axis.x * (1 - rcos);
    pOut.mat[2] = -axis.y * rsin + axis.z * axis.x * (1 - rcos);
    pOut.mat[3] = -axis.z * rsin + axis.x * axis.y * (1 - rcos);
    pOut.mat[4] = rcos + axis.y * axis.y * (1 - rcos);
    pOut.mat[5] = axis.x * rsin + axis.z * axis.y * (1 - rcos);
    pOut.mat[6] = axis.y * rsin + axis.x * axis.z * (1 - rcos);
    pOut.mat[7] = -axis.x * rsin + axis.y * axis.z * (1 - rcos);
    pOut.mat[8] = rcos + axis.z * axis.z *
        (1 - rcos);
    return pOut
};
cc.kmMat3Assign = function (pOut, pIn) {
    if (pOut == pIn) {
        cc.log("cc.kmMat3Assign(): pOut equals pIn");
        return pOut
    }
    for (var i = 0; i < 9; i++)pOut.mat[i] = pIn.mat[i];
    return pOut
};
cc.kmMat3AreEqual = function (pMat1, pMat2) {
    if (pMat1 == pMat2)return true;
    for (var i = 0; i < 9; ++i)if (!(pMat1.mat[i] + cc.kmEpsilon > pMat2.mat[i] && pMat1.mat[i] - cc.kmEpsilon < pMat2.mat[i]))return false;
    return true
};
cc.kmMat3RotationX = function (pOut, radians) {
    pOut.mat[0] = 1;
    pOut.mat[1] = 0;
    pOut.mat[2] = 0;
    pOut.mat[3] = 0;
    pOut.mat[4] = Math.cos(radians);
    pOut.mat[5] = Math.sin(radians);
    pOut.mat[6] = 0;
    pOut.mat[7] = -Math.sin(radians);
    pOut.mat[8] = Math.cos(radians);
    return pOut
};
cc.kmMat3RotationY = function (pOut, radians) {
    pOut.mat[0] = Math.cos(radians);
    pOut.mat[1] = 0;
    pOut.mat[2] = -Math.sin(radians);
    pOut.mat[3] = 0;
    pOut.mat[4] = 1;
    pOut.mat[5] = 0;
    pOut.mat[6] = Math.sin(radians);
    pOut.mat[7] = 0;
    pOut.mat[8] = Math.cos(radians);
    return pOut
};
cc.kmMat3RotationZ = function (pOut, radians) {
    pOut.mat[0] = Math.cos(radians);
    pOut.mat[1] = -Math.sin(radians);
    pOut.mat[2] = 0;
    pOut.mat[3] = Math.sin(radians);
    pOut.mat[4] = Math.cos(radians);
    pOut.mat[5] = 0;
    pOut.mat[6] = 0;
    pOut.mat[7] = 0;
    pOut.mat[8] = 1;
    return pOut
};
cc.kmMat3Rotation = function (pOut, radians) {
    pOut.mat[0] = Math.cos(radians);
    pOut.mat[1] = Math.sin(radians);
    pOut.mat[2] = 0;
    pOut.mat[3] = -Math.sin(radians);
    pOut.mat[4] = Math.cos(radians);
    pOut.mat[5] = 0;
    pOut.mat[6] = 0;
    pOut.mat[7] = 0;
    pOut.mat[8] = 1;
    return pOut
};
cc.kmMat3Scaling = function (pOut, x, y) {
    cc.kmMat3Identity(pOut);
    pOut.mat[0] = x;
    pOut.mat[4] = y;
    return pOut
};
cc.kmMat3Translation = function (pOut, x, y) {
    cc.kmMat3Identity(pOut);
    pOut.mat[6] = x;
    pOut.mat[7] = y;
    return pOut
};
cc.kmMat3RotationQuaternion = function (pOut, pIn) {
    if (!pIn || !pOut)return null;
    pOut.mat[0] = 1 - 2 * (pIn.y * pIn.y + pIn.z * pIn.z);
    pOut.mat[1] = 2 * (pIn.x * pIn.y - pIn.w * pIn.z);
    pOut.mat[2] = 2 * (pIn.x * pIn.z + pIn.w * pIn.y);
    pOut.mat[3] = 2 * (pIn.x * pIn.y + pIn.w * pIn.z);
    pOut.mat[4] = 1 - 2 * (pIn.x * pIn.x + pIn.z * pIn.z);
    pOut.mat[5] = 2 * (pIn.y * pIn.z - pIn.w * pIn.x);
    pOut.mat[6] = 2 * (pIn.x * pIn.z - pIn.w * pIn.y);
    pOut.mat[7] = 2 * (pIn.y * pIn.z + pIn.w * pIn.x);
    pOut.mat[8] = 1 - 2 * (pIn.x * pIn.x + pIn.y * pIn.y);
    return pOut
};
cc.kmMat3RotationToAxisAngle = function (pAxis, radians, pIn) {
    var temp;
    cc.kmQuaternionRotationMatrix(temp, pIn);
    cc.kmQuaternionToAxisAngle(temp, pAxis, radians);
    return pAxis
};
cc.kmMat4 = function () {
    this.mat = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
};
cc.kmMat4Fill = function (pOut, pMat) {
    pOut.mat[0] = pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[5] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[10] = pOut.mat[11] = pOut.mat[12] = pOut.mat[13] = pOut.mat[14] = pOut.mat[15] = pMat
};
cc.kmMat4Identity = function (pOut) {
    pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[11] = pOut.mat[12] = pOut.mat[13] = pOut.mat[14] = 0;
    pOut.mat[0] = pOut.mat[5] = pOut.mat[10] = pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4._get = function (pIn, row, col) {
    return pIn.mat[row + 4 * col]
};
cc.kmMat4._set = function (pIn, row, col, value) {
    pIn.mat[row + 4 * col] = value
};
cc.kmMat4._swap = function (pIn, r1, c1, r2, c2) {
    var tmp = cc.kmMat4._get(pIn, r1, c1);
    cc.kmMat4._set(pIn, r1, c1, cc.kmMat4._get(pIn, r2, c2));
    cc.kmMat4._set(pIn, r2, c2, tmp)
};
cc.kmMat4._gaussj = function (a, b) {
    var i, icol = 0, irow = 0, j, k, l, ll, n = 4, m = 4;
    var big, dum, pivinv;
    var indxc = [0, 0, 0, 0];
    var indxr = [0, 0, 0, 0];
    var ipiv = [0, 0, 0, 0];
    for (i = 0; i < n; i++) {
        big = 0;
        for (j = 0; j < n; j++)if (ipiv[j] != 1)for (k = 0; k < n; k++)if (ipiv[k] == 0)if (Math.abs(cc.kmMat4._get(a, j, k)) >= big) {
            big = Math.abs(cc.kmMat4._get(a, j, k));
            irow = j;
            icol = k
        }
        ++ipiv[icol];
        if (irow != icol) {
            for (l = 0; l < n; l++)cc.kmMat4._swap(a, irow, l, icol, l);
            for (l = 0; l < m; l++)cc.kmMat4._swap(b, irow, l, icol, l)
        }
        indxr[i] = irow;
        indxc[i] = icol;
        if (cc.kmMat4._get(a, icol, icol) ==
            0)return cc.KM_FALSE;
        pivinv = 1 / cc.kmMat4._get(a, icol, icol);
        cc.kmMat4._set(a, icol, icol, 1);
        for (l = 0; l < n; l++)cc.kmMat4._set(a, icol, l, cc.kmMat4._get(a, icol, l) * pivinv);
        for (l = 0; l < m; l++)cc.kmMat4._set(b, icol, l, cc.kmMat4._get(b, icol, l) * pivinv);
        for (ll = 0; ll < n; ll++)if (ll != icol) {
            dum = cc.kmMat4._get(a, ll, icol);
            cc.kmMat4._set(a, ll, icol, 0);
            for (l = 0; l < n; l++)cc.kmMat4._set(a, ll, l, cc.kmMat4._get(a, ll, l) - cc.kmMat4._get(a, icol, l) * dum);
            for (l = 0; l < m; l++)cc.kmMat4._set(b, ll, l, cc.kmMat4._get(a, ll, l) - cc.kmMat4._get(b, icol, l) *
                dum)
        }
    }
    for (l = n - 1; l >= 0; l--)if (indxr[l] != indxc[l])for (k = 0; k < n; k++)cc.kmMat4._swap(a, k, indxr[l], k, indxc[l]);
    return cc.KM_TRUE
};
cc.kmMat4._identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
cc.kmMat4Inverse = function (pOut, pM) {
    var inv = new cc.kmMat4;
    var tmp = new cc.kmMat4;
    cc.kmMat4Assign(inv, pM);
    cc.kmMat4Identity(tmp);
    if (cc.kmMat4._gaussj(inv, tmp) == cc.KM_FALSE)return null;
    cc.kmMat4Assign(pOut, inv);
    return pOut
};
cc.kmMat4IsIdentity = function (pIn) {
    for (var i = 0; i < 16; i++)if (cc.kmMat4._identity[i] != pIn.mat[i])return false;
    return true
};
cc.kmMat4Transpose = function (pOut, pIn) {
    var x, z, outArr = pOut.mat, inArr = pIn.mat;
    for (z = 0; z < 4; ++z)for (x = 0; x < 4; ++x)outArr[z * 4 + x] = inArr[x * 4 + z];
    return pOut
};
cc.kmMat4Multiply = function (pOut, pM1, pM2) {
    var outArray = pOut.mat;
    var a00 = pM1.mat[0], a01 = pM1.mat[1], a02 = pM1.mat[2], a03 = pM1.mat[3];
    var a10 = pM1.mat[4], a11 = pM1.mat[5], a12 = pM1.mat[6], a13 = pM1.mat[7];
    var a20 = pM1.mat[8], a21 = pM1.mat[9], a22 = pM1.mat[10], a23 = pM1.mat[11];
    var a30 = pM1.mat[12], a31 = pM1.mat[13], a32 = pM1.mat[14], a33 = pM1.mat[15];
    var b00 = pM2.mat[0], b01 = pM2.mat[1], b02 = pM2.mat[2], b03 = pM2.mat[3];
    var b10 = pM2.mat[4], b11 = pM2.mat[5], b12 = pM2.mat[6], b13 = pM2.mat[7];
    var b20 = pM2.mat[8], b21 = pM2.mat[9], b22 = pM2.mat[10],
        b23 = pM2.mat[11];
    var b30 = pM2.mat[12], b31 = pM2.mat[13], b32 = pM2.mat[14], b33 = pM2.mat[15];
    outArray[0] = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    outArray[1] = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    outArray[2] = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    outArray[3] = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;
    outArray[4] = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    outArray[5] = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    outArray[6] = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    outArray[7] = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;
    outArray[8] = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    outArray[9] = b20 * a01 + b21 *
        a11 + b22 * a21 + b23 * a31;
    outArray[10] = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    outArray[11] = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;
    outArray[12] = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    outArray[13] = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    outArray[14] = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    outArray[15] = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;
    return pOut
};
cc.getMat4MultiplyValue = function (pM1, pM2) {
    var m1 = pM1.mat, m2 = pM2.mat;
    var mat = new Float32Array(16);
    mat[0] = m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2] + m1[12] * m2[3];
    mat[1] = m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2] + m1[13] * m2[3];
    mat[2] = m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2] + m1[14] * m2[3];
    mat[3] = m1[3] * m2[0] + m1[7] * m2[1] + m1[11] * m2[2] + m1[15] * m2[3];
    mat[4] = m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6] + m1[12] * m2[7];
    mat[5] = m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6] + m1[13] * m2[7];
    mat[6] = m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6] + m1[14] * m2[7];
    mat[7] = m1[3] *
        m2[4] + m1[7] * m2[5] + m1[11] * m2[6] + m1[15] * m2[7];
    mat[8] = m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10] + m1[12] * m2[11];
    mat[9] = m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10] + m1[13] * m2[11];
    mat[10] = m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10] + m1[14] * m2[11];
    mat[11] = m1[3] * m2[8] + m1[7] * m2[9] + m1[11] * m2[10] + m1[15] * m2[11];
    mat[12] = m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12] * m2[15];
    mat[13] = m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13] * m2[15];
    mat[14] = m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14] * m2[15];
    mat[15] = m1[3] * m2[12] + m1[7] * m2[13] + m1[11] *
        m2[14] + m1[15] * m2[15];
    return mat
};
cc.getMat4MultiplyWithMat4 = function (pM1, pM2, swapMat) {
    var m1 = pM1.mat, m2 = pM2.mat;
    var mat = swapMat.mat;
    mat[0] = m1[0] * m2[0] + m1[4] * m2[1] + m1[8] * m2[2] + m1[12] * m2[3];
    mat[1] = m1[1] * m2[0] + m1[5] * m2[1] + m1[9] * m2[2] + m1[13] * m2[3];
    mat[2] = m1[2] * m2[0] + m1[6] * m2[1] + m1[10] * m2[2] + m1[14] * m2[3];
    mat[3] = m1[3] * m2[0] + m1[7] * m2[1] + m1[11] * m2[2] + m1[15] * m2[3];
    mat[4] = m1[0] * m2[4] + m1[4] * m2[5] + m1[8] * m2[6] + m1[12] * m2[7];
    mat[5] = m1[1] * m2[4] + m1[5] * m2[5] + m1[9] * m2[6] + m1[13] * m2[7];
    mat[6] = m1[2] * m2[4] + m1[6] * m2[5] + m1[10] * m2[6] + m1[14] * m2[7];
    mat[7] =
        m1[3] * m2[4] + m1[7] * m2[5] + m1[11] * m2[6] + m1[15] * m2[7];
    mat[8] = m1[0] * m2[8] + m1[4] * m2[9] + m1[8] * m2[10] + m1[12] * m2[11];
    mat[9] = m1[1] * m2[8] + m1[5] * m2[9] + m1[9] * m2[10] + m1[13] * m2[11];
    mat[10] = m1[2] * m2[8] + m1[6] * m2[9] + m1[10] * m2[10] + m1[14] * m2[11];
    mat[11] = m1[3] * m2[8] + m1[7] * m2[9] + m1[11] * m2[10] + m1[15] * m2[11];
    mat[12] = m1[0] * m2[12] + m1[4] * m2[13] + m1[8] * m2[14] + m1[12] * m2[15];
    mat[13] = m1[1] * m2[12] + m1[5] * m2[13] + m1[9] * m2[14] + m1[13] * m2[15];
    mat[14] = m1[2] * m2[12] + m1[6] * m2[13] + m1[10] * m2[14] + m1[14] * m2[15];
    mat[15] = m1[3] * m2[12] + m1[7] * m2[13] +
        m1[11] * m2[14] + m1[15] * m2[15];
    return swapMat.mat
};
cc.kmMat4Assign = function (pOut, pIn) {
    if (pOut == pIn) {
        cc.log("cc.kmMat4Assign(): pOut equals pIn");
        return pOut
    }
    var outArr = pOut.mat;
    var inArr = pIn.mat;
    outArr[0] = inArr[0];
    outArr[1] = inArr[1];
    outArr[2] = inArr[2];
    outArr[3] = inArr[3];
    outArr[4] = inArr[4];
    outArr[5] = inArr[5];
    outArr[6] = inArr[6];
    outArr[7] = inArr[7];
    outArr[8] = inArr[8];
    outArr[9] = inArr[9];
    outArr[10] = inArr[10];
    outArr[11] = inArr[11];
    outArr[12] = inArr[12];
    outArr[13] = inArr[13];
    outArr[14] = inArr[14];
    outArr[15] = inArr[15];
    return pOut
};
cc.kmMat4AreEqual = function (pMat1, pMat2) {
    if (pMat1 == pMat2) {
        cc.log("cc.kmMat4AreEqual(): pMat1 and pMat2 are same object.");
        return true
    }
    for (var i = 0; i < 16; i++)if (!(pMat1.mat[i] + cc.kmEpsilon > pMat2.mat[i] && pMat1.mat[i] - cc.kmEpsilon < pMat2.mat[i]))return false;
    return true
};
cc.kmMat4RotationX = function (pOut, radians) {
    pOut.mat[0] = 1;
    pOut.mat[1] = 0;
    pOut.mat[2] = 0;
    pOut.mat[3] = 0;
    pOut.mat[4] = 0;
    pOut.mat[5] = Math.cos(radians);
    pOut.mat[6] = Math.sin(radians);
    pOut.mat[7] = 0;
    pOut.mat[8] = 0;
    pOut.mat[9] = -Math.sin(radians);
    pOut.mat[10] = Math.cos(radians);
    pOut.mat[11] = 0;
    pOut.mat[12] = 0;
    pOut.mat[13] = 0;
    pOut.mat[14] = 0;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4RotationY = function (pOut, radians) {
    pOut.mat[0] = Math.cos(radians);
    pOut.mat[1] = 0;
    pOut.mat[2] = -Math.sin(radians);
    pOut.mat[3] = 0;
    pOut.mat[4] = 0;
    pOut.mat[5] = 1;
    pOut.mat[6] = 0;
    pOut.mat[7] = 0;
    pOut.mat[8] = Math.sin(radians);
    pOut.mat[9] = 0;
    pOut.mat[10] = Math.cos(radians);
    pOut.mat[11] = 0;
    pOut.mat[12] = 0;
    pOut.mat[13] = 0;
    pOut.mat[14] = 0;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4RotationZ = function (pOut, radians) {
    pOut.mat[0] = Math.cos(radians);
    pOut.mat[1] = Math.sin(radians);
    pOut.mat[2] = 0;
    pOut.mat[3] = 0;
    pOut.mat[4] = -Math.sin(radians);
    pOut.mat[5] = Math.cos(radians);
    pOut.mat[6] = 0;
    pOut.mat[7] = 0;
    pOut.mat[8] = 0;
    pOut.mat[9] = 0;
    pOut.mat[10] = 1;
    pOut.mat[11] = 0;
    pOut.mat[12] = 0;
    pOut.mat[13] = 0;
    pOut.mat[14] = 0;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4RotationPitchYawRoll = function (pOut, pitch, yaw, roll) {
    var cr = Math.cos(pitch);
    var sr = Math.sin(pitch);
    var cp = Math.cos(yaw);
    var sp = Math.sin(yaw);
    var cy = Math.cos(roll);
    var sy = Math.sin(roll);
    var srsp = sr * sp;
    var crsp = cr * sp;
    pOut.mat[0] = cp * cy;
    pOut.mat[4] = cp * sy;
    pOut.mat[8] = -sp;
    pOut.mat[1] = srsp * cy - cr * sy;
    pOut.mat[5] = srsp * sy + cr * cy;
    pOut.mat[9] = sr * cp;
    pOut.mat[2] = crsp * cy + sr * sy;
    pOut.mat[6] = crsp * sy - sr * cy;
    pOut.mat[10] = cr * cp;
    pOut.mat[3] = pOut.mat[7] = pOut.mat[11] = 0;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4RotationQuaternion = function (pOut, pQ) {
    pOut.mat[0] = 1 - 2 * (pQ.y * pQ.y + pQ.z * pQ.z);
    pOut.mat[1] = 2 * (pQ.x * pQ.y + pQ.z * pQ.w);
    pOut.mat[2] = 2 * (pQ.x * pQ.z - pQ.y * pQ.w);
    pOut.mat[3] = 0;
    pOut.mat[4] = 2 * (pQ.x * pQ.y - pQ.z * pQ.w);
    pOut.mat[5] = 1 - 2 * (pQ.x * pQ.x + pQ.z * pQ.z);
    pOut.mat[6] = 2 * (pQ.z * pQ.y + pQ.x * pQ.w);
    pOut.mat[7] = 0;
    pOut.mat[8] = 2 * (pQ.x * pQ.z + pQ.y * pQ.w);
    pOut.mat[9] = 2 * (pQ.y * pQ.z - pQ.x * pQ.w);
    pOut.mat[10] = 1 - 2 * (pQ.x * pQ.x + pQ.y * pQ.y);
    pOut.mat[11] = 0;
    pOut.mat[12] = 0;
    pOut.mat[13] = 0;
    pOut.mat[14] = 0;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4RotationTranslation = function (pOut, rotation, translation) {
    pOut.mat[0] = rotation.mat[0];
    pOut.mat[1] = rotation.mat[1];
    pOut.mat[2] = rotation.mat[2];
    pOut.mat[3] = 0;
    pOut.mat[4] = rotation.mat[3];
    pOut.mat[5] = rotation.mat[4];
    pOut.mat[6] = rotation.mat[5];
    pOut.mat[7] = 0;
    pOut.mat[8] = rotation.mat[6];
    pOut.mat[9] = rotation.mat[7];
    pOut.mat[10] = rotation.mat[8];
    pOut.mat[11] = 0;
    pOut.mat[12] = translation.x;
    pOut.mat[13] = translation.y;
    pOut.mat[14] = translation.z;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4Scaling = function (pOut, x, y, z) {
    pOut.mat[0] = x;
    pOut.mat[5] = y;
    pOut.mat[10] = z;
    pOut.mat[15] = 1;
    pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[11] = pOut.mat[12] = pOut.mat[13] = pOut.mat[14] = 0;
    return pOut
};
cc.kmMat4Translation = function (pOut, x, y, z) {
    pOut.mat[0] = pOut.mat[5] = pOut.mat[10] = pOut.mat[15] = 1;
    pOut.mat[1] = pOut.mat[2] = pOut.mat[3] = pOut.mat[4] = pOut.mat[6] = pOut.mat[7] = pOut.mat[8] = pOut.mat[9] = pOut.mat[11] = 0;
    pOut.mat[12] = x;
    pOut.mat[13] = y;
    pOut.mat[14] = z;
    return pOut
};
cc.kmMat4GetUpVec3 = function (pOut, pIn) {
    pOut.x = pIn.mat[4];
    pOut.y = pIn.mat[5];
    pOut.z = pIn.mat[6];
    cc.kmVec3Normalize(pOut, pOut);
    return pOut
};
cc.kmMat4GetRightVec3 = function (pOut, pIn) {
    pOut.x = pIn.mat[0];
    pOut.y = pIn.mat[1];
    pOut.z = pIn.mat[2];
    cc.kmVec3Normalize(pOut, pOut);
    return pOut
};
cc.kmMat4GetForwardVec3 = function (pOut, pIn) {
    pOut.x = pIn.mat[8];
    pOut.y = pIn.mat[9];
    pOut.z = pIn.mat[10];
    cc.kmVec3Normalize(pOut, pOut);
    return pOut
};
cc.kmMat4PerspectiveProjection = function (pOut, fovY, aspect, zNear, zFar) {
    var r = cc.kmDegreesToRadians(fovY / 2);
    var deltaZ = zFar - zNear;
    var s = Math.sin(r);
    if (deltaZ == 0 || s == 0 || aspect == 0)return null;
    var cotangent = Math.cos(r) / s;
    cc.kmMat4Identity(pOut);
    pOut.mat[0] = cotangent / aspect;
    pOut.mat[5] = cotangent;
    pOut.mat[10] = -(zFar + zNear) / deltaZ;
    pOut.mat[11] = -1;
    pOut.mat[14] = -2 * zNear * zFar / deltaZ;
    pOut.mat[15] = 0;
    return pOut
};
cc.kmMat4OrthographicProjection = function (pOut, left, right, bottom, top, nearVal, farVal) {
    cc.kmMat4Identity(pOut);
    pOut.mat[0] = 2 / (right - left);
    pOut.mat[5] = 2 / (top - bottom);
    pOut.mat[10] = -2 / (farVal - nearVal);
    pOut.mat[12] = -((right + left) / (right - left));
    pOut.mat[13] = -((top + bottom) / (top - bottom));
    pOut.mat[14] = -((farVal + nearVal) / (farVal - nearVal));
    return pOut
};
cc.kmMat4LookAt = function (pOut, pEye, pCenter, pUp) {
    var f = new cc.kmVec3, up = new cc.kmVec3, s = new cc.kmVec3, u = new cc.kmVec3;
    var translate = new cc.kmMat4;
    cc.kmVec3Subtract(f, pCenter, pEye);
    cc.kmVec3Normalize(f, f);
    cc.kmVec3Assign(up, pUp);
    cc.kmVec3Normalize(up, up);
    cc.kmVec3Cross(s, f, up);
    cc.kmVec3Normalize(s, s);
    cc.kmVec3Cross(u, s, f);
    cc.kmVec3Normalize(s, s);
    cc.kmMat4Identity(pOut);
    pOut.mat[0] = s.x;
    pOut.mat[4] = s.y;
    pOut.mat[8] = s.z;
    pOut.mat[1] = u.x;
    pOut.mat[5] = u.y;
    pOut.mat[9] = u.z;
    pOut.mat[2] = -f.x;
    pOut.mat[6] = -f.y;
    pOut.mat[10] = -f.z;
    cc.kmMat4Translation(translate, -pEye.x, -pEye.y, -pEye.z);
    cc.kmMat4Multiply(pOut, pOut, translate);
    return pOut
};
cc.kmMat4RotationAxisAngle = function (pOut, axis, radians) {
    var rcos = Math.cos(radians);
    var rsin = Math.sin(radians);
    var normalizedAxis = new cc.kmVec3;
    cc.kmVec3Normalize(normalizedAxis, axis);
    pOut.mat[0] = rcos + normalizedAxis.x * normalizedAxis.x * (1 - rcos);
    pOut.mat[1] = normalizedAxis.z * rsin + normalizedAxis.y * normalizedAxis.x * (1 - rcos);
    pOut.mat[2] = -normalizedAxis.y * rsin + normalizedAxis.z * normalizedAxis.x * (1 - rcos);
    pOut.mat[3] = 0;
    pOut.mat[4] = -normalizedAxis.z * rsin + normalizedAxis.x * normalizedAxis.y * (1 - rcos);
    pOut.mat[5] =
        rcos + normalizedAxis.y * normalizedAxis.y * (1 - rcos);
    pOut.mat[6] = normalizedAxis.x * rsin + normalizedAxis.z * normalizedAxis.y * (1 - rcos);
    pOut.mat[7] = 0;
    pOut.mat[8] = normalizedAxis.y * rsin + normalizedAxis.x * normalizedAxis.z * (1 - rcos);
    pOut.mat[9] = -normalizedAxis.x * rsin + normalizedAxis.y * normalizedAxis.z * (1 - rcos);
    pOut.mat[10] = rcos + normalizedAxis.z * normalizedAxis.z * (1 - rcos);
    pOut.mat[11] = 0;
    pOut.mat[12] = 0;
    pOut.mat[13] = 0;
    pOut.mat[14] = 0;
    pOut.mat[15] = 1;
    return pOut
};
cc.kmMat4ExtractRotation = function (pOut, pIn) {
    pOut.mat[0] = pIn.mat[0];
    pOut.mat[1] = pIn.mat[1];
    pOut.mat[2] = pIn.mat[2];
    pOut.mat[3] = pIn.mat[4];
    pOut.mat[4] = pIn.mat[5];
    pOut.mat[5] = pIn.mat[6];
    pOut.mat[6] = pIn.mat[8];
    pOut.mat[7] = pIn.mat[9];
    pOut.mat[8] = pIn.mat[10];
    return pOut
};
cc.kmMat4ExtractPlane = function (pOut, pIn, plane) {
    switch (plane) {
        case cc.KM_PLANE_RIGHT:
            pOut.a = pIn.mat[3] - pIn.mat[0];
            pOut.b = pIn.mat[7] - pIn.mat[4];
            pOut.c = pIn.mat[11] - pIn.mat[8];
            pOut.d = pIn.mat[15] - pIn.mat[12];
            break;
        case cc.KM_PLANE_LEFT:
            pOut.a = pIn.mat[3] + pIn.mat[0];
            pOut.b = pIn.mat[7] + pIn.mat[4];
            pOut.c = pIn.mat[11] + pIn.mat[8];
            pOut.d = pIn.mat[15] + pIn.mat[12];
            break;
        case cc.KM_PLANE_BOTTOM:
            pOut.a = pIn.mat[3] + pIn.mat[1];
            pOut.b = pIn.mat[7] + pIn.mat[5];
            pOut.c = pIn.mat[11] + pIn.mat[9];
            pOut.d = pIn.mat[15] + pIn.mat[13];
            break;
        case cc.KM_PLANE_TOP:
            pOut.a = pIn.mat[3] - pIn.mat[1];
            pOut.b = pIn.mat[7] - pIn.mat[5];
            pOut.c = pIn.mat[11] - pIn.mat[9];
            pOut.d = pIn.mat[15] - pIn.mat[13];
            break;
        case cc.KM_PLANE_FAR:
            pOut.a = pIn.mat[3] - pIn.mat[2];
            pOut.b = pIn.mat[7] - pIn.mat[6];
            pOut.c = pIn.mat[11] - pIn.mat[10];
            pOut.d = pIn.mat[15] - pIn.mat[14];
            break;
        case cc.KM_PLANE_NEAR:
            pOut.a = pIn.mat[3] + pIn.mat[2];
            pOut.b = pIn.mat[7] + pIn.mat[6];
            pOut.c = pIn.mat[11] + pIn.mat[10];
            pOut.d = pIn.mat[15] + pIn.mat[14];
            break;
        default:
            cc.log("cc.kmMat4ExtractPlane(): Invalid plane index");
            break
    }
    var t = Math.sqrt(pOut.a * pOut.a + pOut.b * pOut.b + pOut.c * pOut.c);
    pOut.a /= t;
    pOut.b /= t;
    pOut.c /= t;
    pOut.d /= t;
    return pOut
};
cc.kmMat4RotationToAxisAngle = function (pAxis, radians, pIn) {
    var temp = new cc.kmQuaternion;
    var rotation = new cc.kmMat3;
    cc.kmMat4ExtractRotation(rotation, pIn);
    cc.kmQuaternionRotationMatrix(temp, rotation);
    cc.kmQuaternionToAxisAngle(temp, pAxis, radians);
    return pAxis
};
cc.KM_PLANE_LEFT = 0;
cc.KM_PLANE_RIGHT = 1;
cc.KM_PLANE_BOTTOM = 2;
cc.KM_PLANE_TOP = 3;
cc.KM_PLANE_NEAR = 4;
cc.KM_PLANE_FAR = 5;
cc.kmPlane = function (a, b, c, d) {
    this.a = a || 0;
    this.b = b || 0;
    this.c = c || 0;
    this.d = d || 0
};
cc.POINT_INFRONT_OF_PLANE = 0;
cc.POINT_BEHIND_PLANE = 1;
cc.POINT_ON_PLANE = 2;
cc.kmPlaneDot = function (pP, pV) {
    return pP.a * pV.x + pP.b * pV.y + pP.c * pV.z + pP.d * pV.w
};
cc.kmPlaneDotCoord = function (pP, pV) {
    return pP.a * pV.x + pP.b * pV.y + pP.c * pV.z + pP.d
};
cc.kmPlaneDotNormal = function (pP, pV) {
    return pP.a * pV.x + pP.b * pV.y + pP.c * pV.z
};
cc.kmPlaneFromPointNormal = function (pOut, pPoint, pNormal) {
    pOut.a = pNormal.x;
    pOut.b = pNormal.y;
    pOut.c = pNormal.z;
    pOut.d = -cc.kmVec3Dot(pNormal, pPoint);
    return pOut
};
cc.kmPlaneFromPoints = function (pOut, p1, p2, p3) {
    var n = new cc.kmVec3, v1 = new cc.kmVec3, v2 = new cc.kmVec3;
    cc.kmVec3Subtract(v1, p2, p1);
    cc.kmVec3Subtract(v2, p3, p1);
    cc.kmVec3Cross(n, v1, v2);
    cc.kmVec3Normalize(n, n);
    pOut.a = n.x;
    pOut.b = n.y;
    pOut.c = n.z;
    pOut.d = cc.kmVec3Dot(cc.kmVec3Scale(n, n, -1), p1);
    return pOut
};
cc.kmPlaneIntersectLine = function (pOut, pP, pV1, pV2) {
    throw"cc.kmPlaneIntersectLine() hasn't been implemented.";
};
cc.kmPlaneNormalize = function (pOut, pP) {
    var n = new cc.kmVec3;
    n.x = pP.a;
    n.y = pP.b;
    n.z = pP.c;
    var l = 1 / cc.kmVec3Length(n);
    cc.kmVec3Normalize(n, n);
    pOut.a = n.x;
    pOut.b = n.y;
    pOut.c = n.z;
    pOut.d = pP.d * l;
    return pOut
};
cc.kmPlaneScale = function (pOut, pP, s) {
    cc.log("cc.kmPlaneScale() has not been implemented.")
};
cc.kmPlaneClassifyPoint = function (pIn, pP) {
    var distance = pIn.a * pP.x + pIn.b * pP.y + pIn.c * pP.z + pIn.d;
    if (distance > 0.001)return cc.POINT_INFRONT_OF_PLANE;
    if (distance < -0.001)return cc.POINT_BEHIND_PLANE;
    return cc.POINT_ON_PLANE
};
cc.kmQuaternion = function (x, y, z, w) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = w || 0
};
cc.kmQuaternionConjugate = function (pOut, pIn) {
    pOut.x = -pIn.x;
    pOut.y = -pIn.y;
    pOut.z = -pIn.z;
    pOut.w = pIn.w;
    return pOut
};
cc.kmQuaternionDot = function (q1, q2) {
    return q1.w * q2.w + q1.x * q2.x + q1.y * q2.y + q1.z * q2.z
};
cc.kmQuaternionExp = function (pOut, pIn) {
    return pOut
};
cc.kmQuaternionIdentity = function (pOut) {
    pOut.x = 0;
    pOut.y = 0;
    pOut.z = 0;
    pOut.w = 1;
    return pOut
};
cc.kmQuaternionInverse = function (pOut, pIn) {
    var l = cc.kmQuaternionLength(pIn);
    var tmp = new cc.kmQuaternion;
    if (Math.abs(l) > cc.kmEpsilon) {
        pOut.x = 0;
        pOut.y = 0;
        pOut.z = 0;
        pOut.w = 0;
        return pOut
    }
    cc.kmQuaternionScale(pOut, cc.kmQuaternionConjugate(tmp, pIn), 1 / l);
    return pOut
};
cc.kmQuaternionIsIdentity = function (pIn) {
    return pIn.x == 0 && pIn.y == 0 && pIn.z == 0 && pIn.w == 1
};
cc.kmQuaternionLength = function (pIn) {
    return Math.sqrt(cc.kmQuaternionLengthSq(pIn))
};
cc.kmQuaternionLengthSq = function (pIn) {
    return pIn.x * pIn.x + pIn.y * pIn.y + pIn.z * pIn.z + pIn.w * pIn.w
};
cc.kmQuaternionLn = function (pOut, pIn) {
    return pOut
};
cc.kmQuaternionMultiply = function (pOut, q1, q2) {
    pOut.w = q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z;
    pOut.x = q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y;
    pOut.y = q1.w * q2.y + q1.y * q2.w + q1.z * q2.x - q1.x * q2.z;
    pOut.z = q1.w * q2.z + q1.z * q2.w + q1.x * q2.y - q1.y * q2.x;
    return pOut
};
cc.kmQuaternionNormalize = function (pOut, pIn) {
    var length = cc.kmQuaternionLength(pIn);
    if (Math.abs(length) <= cc.kmEpsilon)throw"cc.kmQuaternionNormalize(): pIn is an invalid value";
    cc.kmQuaternionScale(pOut, pIn, 1 / length);
    return pOut
};
cc.kmQuaternionRotationAxis = function (pOut, pV, angle) {
    var rad = angle * 0.5;
    var scale = Math.sin(rad);
    pOut.w = Math.cos(rad);
    pOut.x = pV.x * scale;
    pOut.y = pV.y * scale;
    pOut.z = pV.z * scale;
    return pOut
};
cc.kmQuaternionRotationMatrix = function (pOut, pIn) {
    var x, y, z, w;
    var m4x4 = [];
    var scale = 0;
    var diagonal = 0;
    if (!pIn)return null;
    m4x4[0] = pIn.mat[0];
    m4x4[1] = pIn.mat[3];
    m4x4[2] = pIn.mat[6];
    m4x4[4] = pIn.mat[1];
    m4x4[5] = pIn.mat[4];
    m4x4[6] = pIn.mat[7];
    m4x4[8] = pIn.mat[2];
    m4x4[9] = pIn.mat[5];
    m4x4[10] = pIn.mat[8];
    m4x4[15] = 1;
    var pMatrix = m4x4[0];
    diagonal = pMatrix[0] + pMatrix[5] + pMatrix[10] + 1;
    if (diagonal > cc.kmEpsilon) {
        scale = Math.sqrt(diagonal) * 2;
        x = (pMatrix[9] - pMatrix[6]) / scale;
        y = (pMatrix[2] - pMatrix[8]) / scale;
        z = (pMatrix[4] - pMatrix[1]) /
            scale;
        w = 0.25 * scale
    } else if (pMatrix[0] > pMatrix[5] && pMatrix[0] > pMatrix[10]) {
        scale = Math.sqrt(1 + pMatrix[0] - pMatrix[5] - pMatrix[10]) * 2;
        x = 0.25 * scale;
        y = (pMatrix[4] + pMatrix[1]) / scale;
        z = (pMatrix[2] + pMatrix[8]) / scale;
        w = (pMatrix[9] - pMatrix[6]) / scale
    } else if (pMatrix[5] > pMatrix[10]) {
        scale = Math.sqrt(1 + pMatrix[5] - pMatrix[0] - pMatrix[10]) * 2;
        x = (pMatrix[4] + pMatrix[1]) / scale;
        y = 0.25 * scale;
        z = (pMatrix[9] + pMatrix[6]) / scale;
        w = (pMatrix[2] - pMatrix[8]) / scale
    } else {
        scale = Math.sqrt(1 + pMatrix[10] - pMatrix[0] - pMatrix[5]) * 2;
        x = (pMatrix[2] +
            pMatrix[8]) / scale;
        y = (pMatrix[9] + pMatrix[6]) / scale;
        z = 0.25 * scale;
        w = (pMatrix[4] - pMatrix[1]) / scale
    }
    pOut.x = x;
    pOut.y = y;
    pOut.z = z;
    pOut.w = w;
    return pOut
};
cc.kmQuaternionRotationYawPitchRoll = function (pOut, yaw, pitch, roll) {
    var ex, ey, ez;
    var cr, cp, cy, sr, sp, sy, cpcy, spsy;
    ex = cc.kmDegreesToRadians(pitch) / 2;
    ey = cc.kmDegreesToRadians(yaw) / 2;
    ez = cc.kmDegreesToRadians(roll) / 2;
    cr = Math.cos(ex);
    cp = Math.cos(ey);
    cy = Math.cos(ez);
    sr = Math.sin(ex);
    sp = Math.sin(ey);
    sy = Math.sin(ez);
    cpcy = cp * cy;
    spsy = sp * sy;
    pOut.w = cr * cpcy + sr * spsy;
    pOut.x = sr * cpcy - cr * spsy;
    pOut.y = cr * sp * cy + sr * cp * sy;
    pOut.z = cr * cp * sy - sr * sp * cy;
    cc.kmQuaternionNormalize(pOut, pOut);
    return pOut
};
cc.kmQuaternionSlerp = function (pOut, q1, q2, t) {
    if (q1.x == q2.x && q1.y == q2.y && q1.z == q2.z && q1.w == q2.w) {
        pOut.x = q1.x;
        pOut.y = q1.y;
        pOut.z = q1.z;
        pOut.w = q1.w;
        return pOut
    }
    var ct = cc.kmQuaternionDot(q1, q2);
    var theta = Math.acos(ct);
    var st = Math.sqrt(1 - cc.kmSQR(ct));
    var stt = Math.sin(t * theta) / st;
    var somt = Math.sin((1 - t) * theta) / st;
    var temp = new cc.kmQuaternion, temp2 = new cc.kmQuaternion;
    cc.kmQuaternionScale(temp, q1, somt);
    cc.kmQuaternionScale(temp2, q2, stt);
    cc.kmQuaternionAdd(pOut, temp, temp2);
    return pOut
};
cc.kmQuaternionToAxisAngle = function (pIn, pAxis, pAngle) {
    var tempAngle;
    var scale;
    tempAngle = Math.acos(pIn.w);
    scale = Math.sqrt(cc.kmSQR(pIn.x) + cc.kmSQR(pIn.y) + cc.kmSQR(pIn.z));
    if (scale > -cc.kmEpsilon && scale < cc.kmEpsilon || scale < 2 * cc.kmPI + cc.kmEpsilon && scale > 2 * cc.kmPI - cc.kmEpsilon) {
        pAngle = 0;
        pAxis.x = 0;
        pAxis.y = 0;
        pAxis.z = 1
    } else {
        pAngle = tempAngle * 2;
        pAxis.x = pIn.x / scale;
        pAxis.y = pIn.y / scale;
        pAxis.z = pIn.z / scale;
        cc.kmVec3Normalize(pAxis, pAxis)
    }
};
cc.kmQuaternionScale = function (pOut, pIn, s) {
    pOut.x = pIn.x * s;
    pOut.y = pIn.y * s;
    pOut.z = pIn.z * s;
    pOut.w = pIn.w * s;
    return pOut
};
cc.kmQuaternionAssign = function (pOut, pIn) {
    pOut.x = pIn.x;
    pOut.y = pIn.y;
    pOut.z = pIn.z;
    pOut.w = pIn.w;
    return pOut
};
cc.kmQuaternionAdd = function (pOut, pQ1, pQ2) {
    pOut.x = pQ1.x + pQ2.x;
    pOut.y = pQ1.y + pQ2.y;
    pOut.z = pQ1.z + pQ2.z;
    pOut.w = pQ1.w + pQ2.w;
    return pOut
};
cc.kmQuaternionRotationBetweenVec3 = function (pOut, vec1, vec2, fallback) {
    var v1 = new cc.kmVec3, v2 = new cc.kmVec3;
    var a;
    cc.kmVec3Assign(v1, vec1);
    cc.kmVec3Assign(v2, vec2);
    cc.kmVec3Normalize(v1, v1);
    cc.kmVec3Normalize(v2, v2);
    a = cc.kmVec3Dot(v1, v2);
    if (a >= 1) {
        cc.kmQuaternionIdentity(pOut);
        return pOut
    }
    if (a < 1E-6 - 1)if (Math.abs(cc.kmVec3LengthSq(fallback)) < cc.kmEpsilon)cc.kmQuaternionRotationAxis(pOut, fallback, cc.kmPI); else {
        var axis = new cc.kmVec3;
        var X = new cc.kmVec3;
        X.x = 1;
        X.y = 0;
        X.z = 0;
        cc.kmVec3Cross(axis, X, vec1);
        if (Math.abs(cc.kmVec3LengthSq(axis)) <
            cc.kmEpsilon) {
            var Y = new cc.kmVec3;
            Y.x = 0;
            Y.y = 1;
            Y.z = 0;
            cc.kmVec3Cross(axis, Y, vec1)
        }
        cc.kmVec3Normalize(axis, axis);
        cc.kmQuaternionRotationAxis(pOut, axis, cc.kmPI)
    } else {
        var s = Math.sqrt((1 + a) * 2);
        var invs = 1 / s;
        var c = new cc.kmVec3;
        cc.kmVec3Cross(c, v1, v2);
        pOut.x = c.x * invs;
        pOut.y = c.y * invs;
        pOut.z = c.z * invs;
        pOut.w = s * 0.5;
        cc.kmQuaternionNormalize(pOut, pOut)
    }
    return pOut
};
cc.kmQuaternionMultiplyVec3 = function (pOut, q, v) {
    var uv = new cc.kmVec3, uuv = new cc.kmVec3, qvec = new cc.kmVec3;
    qvec.x = q.x;
    qvec.y = q.y;
    qvec.z = q.z;
    cc.kmVec3Cross(uv, qvec, v);
    cc.kmVec3Cross(uuv, qvec, uv);
    cc.kmVec3Scale(uv, uv, 2 * q.w);
    cc.kmVec3Scale(uuv, uuv, 2);
    cc.kmVec3Add(pOut, v, uv);
    cc.kmVec3Add(pOut, pOut, uuv);
    return pOut
};
cc.kmAABB = function (min, max) {
    this.min = min || new cc.kmVec3;
    this.max = max || new cc.kmVec3
};
cc.kmAABBContainsPoint = function (pPoint, pBox) {
    if (pPoint.x >= pBox.min.x && pPoint.x <= pBox.max.x && pPoint.y >= pBox.min.y && pPoint.y <= pBox.max.y && pPoint.z >= pBox.min.z && pPoint.z <= pBox.max.z)return cc.KM_TRUE;
    return cc.KM_FALSE
};
cc.kmAABBAssign = function (pOut, pIn) {
    cc.kmVec3Assign(pOut.min, pIn.min);
    cc.kmVec3Assign(pOut.max, pIn.max);
    return pOut
};
cc.kmAABBScale = function (pOut, pIn, s) {
    cc.log("cc.kmAABBScale hasn't been supported.")
};
cc.km_mat4_stack = function (capacity, item_count, top, stack) {
    this.top = top;
    this.stack = stack
};
cc.km_mat4_stack.INITIAL_SIZE = 30;
cc.km_mat4_stack_initialize = function (stack) {
    stack.stack = [];
    stack.top = null
};
cc.km_mat4_stack_push = function (stack, item) {
    stack.stack.push(stack.top);
    stack.top = new cc.kmMat4;
    cc.kmMat4Assign(stack.top, item)
};
cc.km_mat4_stack_pop = function (stack, pOut) {
    stack.top = stack.stack.pop()
};
cc.km_mat4_stack_release = function (stack) {
    stack.stack = null;
    stack.top = null;
    stack = null
};
cc.KM_GL_MODELVIEW = 5888;
cc.KM_GL_PROJECTION = 5889;
cc.KM_GL_TEXTURE = 5890;
cc.modelview_matrix_stack = new cc.km_mat4_stack;
cc.projection_matrix_stack = new cc.km_mat4_stack;
cc.texture_matrix_stack = new cc.km_mat4_stack;
cc.current_stack = null;
cc.initialized = false;
cc.lazyInitialize = function () {
    if (!cc.initialized) {
        var identity = new cc.kmMat4;
        cc.km_mat4_stack_initialize(cc.modelview_matrix_stack);
        cc.km_mat4_stack_initialize(cc.projection_matrix_stack);
        cc.km_mat4_stack_initialize(cc.texture_matrix_stack);
        cc.current_stack = cc.modelview_matrix_stack;
        cc.initialized = true;
        cc.kmMat4Identity(identity);
        cc.km_mat4_stack_push(cc.modelview_matrix_stack, identity);
        cc.km_mat4_stack_push(cc.projection_matrix_stack, identity);
        cc.km_mat4_stack_push(cc.texture_matrix_stack, identity)
    }
};
cc.lazyInitialize();
cc.kmGLFreeAll = function () {
    cc.km_mat4_stack_release(cc.modelview_matrix_stack);
    cc.km_mat4_stack_release(cc.projection_matrix_stack);
    cc.km_mat4_stack_release(cc.texture_matrix_stack);
    cc.initialized = false;
    cc.current_stack = null
};
cc.kmGLPushMatrix = function () {
    cc.km_mat4_stack_push(cc.current_stack, cc.current_stack.top)
};
cc.kmGLPushMatrixWitMat4 = function (saveMat) {
    cc.current_stack.stack.push(cc.current_stack.top);
    cc.kmMat4Assign(saveMat, cc.current_stack.top);
    cc.current_stack.top = saveMat
};
cc.kmGLPopMatrix = function () {
    cc.current_stack.top = cc.current_stack.stack.pop()
};
cc.kmGLMatrixMode = function (mode) {
    switch (mode) {
        case cc.KM_GL_MODELVIEW:
            cc.current_stack = cc.modelview_matrix_stack;
            break;
        case cc.KM_GL_PROJECTION:
            cc.current_stack = cc.projection_matrix_stack;
            break;
        case cc.KM_GL_TEXTURE:
            cc.current_stack = cc.texture_matrix_stack;
            break;
        default:
            throw"Invalid matrix mode specified";
            break
    }
};
cc.kmGLLoadIdentity = function () {
    cc.kmMat4Identity(cc.current_stack.top)
};
cc.kmGLLoadMatrix = function (pIn) {
    cc.kmMat4Assign(cc.current_stack.top, pIn)
};
cc.kmGLMultMatrix = function (pIn) {
    cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, pIn)
};
cc.kmGLTranslatef = function (x, y, z) {
    var translation = new cc.kmMat4;
    cc.kmMat4Translation(translation, x, y, z);
    cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, translation)
};
cc.kmGLRotatef = function (angle, x, y, z) {
    var axis = new cc.kmVec3(x, y, z);
    var rotation = new cc.kmMat4;
    cc.kmMat4RotationAxisAngle(rotation, axis, cc.kmDegreesToRadians(angle));
    cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, rotation)
};
cc.kmGLScalef = function (x, y, z) {
    var scaling = new cc.kmMat4;
    cc.kmMat4Scaling(scaling, x, y, z);
    cc.kmMat4Multiply(cc.current_stack.top, cc.current_stack.top, scaling)
};
cc.kmGLGetMatrix = function (mode, pOut) {
    switch (mode) {
        case cc.KM_GL_MODELVIEW:
            cc.kmMat4Assign(pOut, cc.modelview_matrix_stack.top);
            break;
        case cc.KM_GL_PROJECTION:
            cc.kmMat4Assign(pOut, cc.projection_matrix_stack.top);
            break;
        case cc.KM_GL_TEXTURE:
            cc.kmMat4Assign(pOut, cc.texture_matrix_stack.top);
            break;
        default:
            throw"Invalid matrix mode specified";
            break
    }
};cc.SHADER_POSITION_UCOLOR_FRAG = "precision lowp float;\n" + "varying vec4 v_fragmentColor;\n" + "void main()                              \n" + "{ \n" + "    gl_FragColor \x3d v_fragmentColor;      \n" + "}\n";
cc.SHADER_POSITION_UCOLOR_VERT = "attribute vec4 a_position;\n" + "uniform    vec4 u_color;\n" + "uniform float u_pointSize;\n" + "varying lowp vec4 v_fragmentColor; \n" + "void main(void)   \n" + "{\n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "    gl_PointSize \x3d u_pointSize;          \n" + "    v_fragmentColor \x3d u_color;           \n" + "}";
cc.SHADER_POSITION_COLOR_FRAG = "precision lowp float; \n" + "varying vec4 v_fragmentColor; \n" + "void main() \n" + "{ \n" + "     gl_FragColor \x3d v_fragmentColor; \n" + "} ";
cc.SHADER_POSITION_COLOR_VERT = "attribute vec4 a_position;\n" + "attribute vec4 a_color;\n" + "varying lowp vec4 v_fragmentColor;\n" + "void main()\n" + "{\n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "    v_fragmentColor \x3d a_color;             \n" + "}";
cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG = "// #extension GL_OES_standard_derivatives : enable\n" + "varying mediump vec4 v_color;\n" + "varying mediump vec2 v_texcoord;\n" + "void main()\t\n" + "{ \n" + "// #if defined GL_OES_standard_derivatives\t\n" + "// gl_FragColor \x3d v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord)); \n" + "// #else\t\n" + "gl_FragColor \x3d v_color * step(0.0, 1.0 - length(v_texcoord)); \n" + "// #endif \n" + "}";
cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT = "attribute mediump vec4 a_position; \n" + "attribute mediump vec2 a_texcoord; \n" + "attribute mediump vec4 a_color;\t\n" + "varying mediump vec4 v_color; \n" + "varying mediump vec2 v_texcoord;\t\n" + "void main() \n" + "{ \n" + "     v_color \x3d a_color;//vec4(a_color.rgb * a_color.a, a_color.a); \n" + "     v_texcoord \x3d a_texcoord; \n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "}";
cc.SHADER_POSITION_TEXTURE_FRAG = "precision lowp float;   \n" + "varying vec2 v_texCoord;  \n" + "uniform sampler2D CC_Texture0; \n" + "void main() \n" + "{  \n" + "    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord);   \n" + "}";
cc.SHADER_POSITION_TEXTURE_VERT = "attribute vec4 a_position; \n" + "attribute vec2 a_texCoord; \n" + "varying mediump vec2 v_texCoord; \n" + "void main() \n" + "{ \n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "    v_texCoord \x3d a_texCoord;               \n" + "}";
cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG = "precision lowp float;  \n" + "uniform vec4 u_color; \n" + "varying vec2 v_texCoord; \n" + "uniform sampler2D CC_Texture0;  \n" + "void main() \n" + "{  \n" + "    gl_FragColor \x3d  texture2D(CC_Texture0, v_texCoord) * u_color;    \n" + "}";
cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT = "attribute vec4 a_position;\n" + "attribute vec2 a_texCoord; \n" + "varying mediump vec2 v_texCoord; \n" + "void main() \n" + "{ \n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "    v_texCoord \x3d a_texCoord;                 \n" + "}";
cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG = "precision lowp float;  \n" + "varying vec4 v_fragmentColor; \n" + "varying vec2 v_texCoord; \n" + "uniform sampler2D CC_Texture0; \n" + "void main() \n" + "{ \n" + "    gl_FragColor \x3d vec4( v_fragmentColor.rgb,         \n" + "        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n" + "    ); \n" + "}";
cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT = "attribute vec4 a_position; \n" + "attribute vec2 a_texCoord; \n" + "attribute vec4 a_color;  \n" + "varying lowp vec4 v_fragmentColor; \n" + "varying mediump vec2 v_texCoord; \n" + "void main() \n" + "{ \n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "    v_fragmentColor \x3d a_color; \n" + "    v_texCoord \x3d a_texCoord; \n" + "}";
cc.SHADER_POSITION_TEXTURE_COLOR_FRAG = "precision lowp float;\n" + "varying vec4 v_fragmentColor; \n" + "varying vec2 v_texCoord; \n" + "uniform sampler2D CC_Texture0; \n" + "void main() \n" + "{ \n" + "    gl_FragColor \x3d v_fragmentColor * texture2D(CC_Texture0, v_texCoord); \n" + "}";
cc.SHADER_POSITION_TEXTURE_COLOR_VERT = "attribute vec4 a_position; \n" + "attribute vec2 a_texCoord; \n" + "attribute vec4 a_color;  \n" + "varying lowp vec4 v_fragmentColor; \n" + "varying mediump vec2 v_texCoord; \n" + "void main() \n" + "{ \n" + "    gl_Position \x3d (CC_PMatrix * CC_MVMatrix) * a_position;  \n" + "    v_fragmentColor \x3d a_color; \n" + "    v_texCoord \x3d a_texCoord; \n" + "}";
cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG = "precision lowp float;   \n" + "varying vec4 v_fragmentColor; \n" + "varying vec2 v_texCoord;   \n" + "uniform sampler2D CC_Texture0; \n" + "uniform float CC_alpha_value; \n" + "void main() \n" + "{  \n" + "    vec4 texColor \x3d texture2D(CC_Texture0, v_texCoord);  \n" + "    // mimic: glAlphaFunc(GL_GREATER)           \n" + "    //pass if ( incoming_pixel \x3e\x3d CC_alpha_value ) \x3d\x3e fail if incoming_pixel \x3c CC_alpha_value   \n" + "    if ( texColor.a \x3c\x3d CC_alpha_value )          \n" +
    "        discard; \n" + "    gl_FragColor \x3d texColor * v_fragmentColor;  \n" + "}";
cc.SHADEREX_SWITCHMASK_FRAG = "precision lowp float; \n" + "varying vec4 v_fragmentColor; \n" + "varying vec2 v_texCoord; \n" + "uniform sampler2D u_texture;  \n" + "uniform sampler2D   u_mask;   \n" + "void main()  \n" + "{  \n" + "    vec4 texColor   \x3d texture2D(u_texture, v_texCoord);  \n" + "    vec4 maskColor  \x3d texture2D(u_mask, v_texCoord); \n" + "    vec4 finalColor \x3d vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n" + "    gl_FragColor    \x3d v_fragmentColor * finalColor; \n" +
    "}";
cc.shaderCache = {TYPE_POSITION_TEXTURECOLOR: 0, TYPE_POSITION_TEXTURECOLOR_ALPHATEST: 1, TYPE_POSITION_COLOR: 2, TYPE_POSITION_TEXTURE: 3, TYPE_POSITION_TEXTURE_UCOLOR: 4, TYPE_POSITION_TEXTURE_A8COLOR: 5, TYPE_POSITION_UCOLOR: 6, TYPE_POSITION_LENGTH_TEXTURECOLOR: 7, TYPE_MAX: 8, _programs: {}, _init: function () {
    this.loadDefaultShaders();
    return true
}, _loadDefaultShader: function (program, type) {
    switch (type) {
        case this.TYPE_POSITION_TEXTURECOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
        case this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT, cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR,
                cc.VERTEX_ATTRIB_COLOR);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
        case this.TYPE_POSITION_COLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_VERT, cc.SHADER_POSITION_COLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            break;
        case this.TYPE_POSITION_TEXTURE:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_VERT, cc.SHADER_POSITION_TEXTURE_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
        case this.TYPE_POSITION_TEXTURE_UCOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT, cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
        case this.TYPE_POSITION_TEXTURE_A8COLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT,
                cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            break;
        case this.TYPE_POSITION_UCOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_UCOLOR_VERT, cc.SHADER_POSITION_UCOLOR_FRAG);
            program.addAttribute("aVertex", cc.VERTEX_ATTRIB_POSITION);
            break;
        case this.TYPE_POSITION_LENGTH_TEXTURECOLOR:
            program.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT,
                cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG);
            program.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            program.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            program.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);
            break;
        default:
            cc.log("cocos2d: cc.shaderCache._loadDefaultShader, error shader type");
            return
    }
    program.link();
    program.updateUniforms()
}, loadDefaultShaders: function () {
    var program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURECOLOR);
    this._programs[cc.SHADER_POSITION_TEXTURECOLOR] = program;
    this._programs["ShaderPositionTextureColor"] = program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST);
    this._programs[cc.SHADER_POSITION_TEXTURECOLORALPHATEST] = program;
    this._programs["ShaderPositionTextureColorAlphaTest"] = program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_COLOR);
    this._programs[cc.SHADER_POSITION_COLOR] = program;
    this._programs["ShaderPositionColor"] =
        program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE);
    this._programs[cc.SHADER_POSITION_TEXTURE] = program;
    this._programs["ShaderPositionTexture"] = program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE_UCOLOR);
    this._programs[cc.SHADER_POSITION_TEXTURE_UCOLOR] = program;
    this._programs["ShaderPositionTextureUColor"] = program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE_A8COLOR);
    this._programs[cc.SHADER_POSITION_TEXTUREA8COLOR] =
        program;
    this._programs["ShaderPositionTextureA8Color"] = program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_UCOLOR);
    this._programs[cc.SHADER_POSITION_UCOLOR] = program;
    this._programs["ShaderPositionUColor"] = program;
    program = new cc.GLProgram;
    this._loadDefaultShader(program, this.TYPE_POSITION_LENGTH_TEXTURECOLOR);
    this._programs[cc.SHADER_POSITION_LENGTHTEXTURECOLOR] = program;
    this._programs["ShaderPositionLengthTextureColor"] = program
}, reloadDefaultShaders: function () {
    var program =
        this.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
    program.reset();
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURECOLOR);
    program = this.programForKey(cc.SHADER_POSITION_TEXTURECOLORALPHATEST);
    program.reset();
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST);
    program = this.programForKey(cc.SHADER_POSITION_COLOR);
    program.reset();
    this._loadDefaultShader(program, this.TYPE_POSITION_COLOR);
    program = this.programForKey(cc.SHADER_POSITION_TEXTURE);
    program.reset();
    this._loadDefaultShader(program,
        this.TYPE_POSITION_TEXTURE);
    program = this.programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR);
    program.reset();
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE_UCOLOR);
    program = this.programForKey(cc.SHADER_POSITION_TEXTUREA8COLOR);
    program.reset();
    this._loadDefaultShader(program, this.TYPE_POSITION_TEXTURE_A8COLOR);
    program = this.programForKey(cc.SHADER_POSITION_UCOLOR);
    program.reset();
    this._loadDefaultShader(program, this.TYPE_POSITION_UCOLOR)
}, programForKey: function (key) {
    return this._programs[key]
},
    getProgram: function (shaderName) {
        return this._programs[shaderName]
    }, addProgram: function (program, key) {
        this._programs[key] = program
    }};
cc.HashUniformEntry = function (value, location, hh) {
    this.value = value;
    this.location = location;
    this.hh = hh || {}
};
cc.GLProgram = cc.Class.extend({_glContext: null, _programObj: null, _vertShader: null, _fragShader: null, _uniforms: null, _hashForUniforms: null, _usesTime: false, _updateUniformLocation: function (location, data, bytes) {
    if (location == null)return false;
    var updated = true;
    var element = null;
    for (var i = 0; i < this._hashForUniforms.length; i++)if (this._hashForUniforms[i].location == location)element = this._hashForUniforms[i];
    if (!element) {
        element = new cc.HashUniformEntry;
        element.location = location;
        element.value = data;
        this._hashForUniforms.push(element)
    } else if (element.value ==
        data)updated = false; else element.value = data;
    return updated
}, _description: function () {
    return"\x3cCCGLProgram \x3d " + this.toString() + " | Program \x3d " + this._programObj.toString() + ", VertexShader \x3d " + this._vertShader.toString() + ", FragmentShader \x3d " + this._fragShader.toString() + "\x3e"
}, _compileShader: function (shader, type, source) {
    if (!source || !shader)return false;
    source = "precision highp float;        \n" + "uniform mat4 CC_PMatrix;         \n" + "uniform mat4 CC_MVMatrix;        \n" + "uniform mat4 CC_MVPMatrix;       \n" +
        "uniform vec4 CC_Time;            \n" + "uniform vec4 CC_SinTime;         \n" + "uniform vec4 CC_CosTime;         \n" + "uniform vec4 CC_Random01;        \n" + "//CC INCLUDES END                \n" + source;
    this._glContext.shaderSource(shader, source);
    this._glContext.compileShader(shader);
    var status = this._glContext.getShaderParameter(shader, this._glContext.COMPILE_STATUS);
    if (!status) {
        cc.log("cocos2d: ERROR: Failed to compile shader:\n" + this._glContext.getShaderSource(shader));
        if (type == this._glContext.VERTEX_SHADER)cc.log("cocos2d: \n" +
            this.vertexShaderLog()); else cc.log("cocos2d: \n" + this.fragmentShaderLog())
    }
    return status == 1
}, ctor: function (vShaderFileName, fShaderFileName, glContext) {
    this._uniforms = [];
    this._hashForUniforms = [];
    this._glContext = glContext || cc._renderContext;
    vShaderFileName && fShaderFileName && this.init(vShaderFileName, fShaderFileName)
}, destroyProgram: function () {
    this._vertShader = null;
    this._fragShader = null;
    this._uniforms = null;
    this._hashForUniforms = null;
    this._glContext.deleteProgram(this._programObj)
}, initWithVertexShaderByteArray: function (vertShaderStr, fragShaderStr) {
    var locGL = this._glContext;
    this._programObj = locGL.createProgram();
    this._vertShader = null;
    this._fragShader = null;
    if (vertShaderStr) {
        this._vertShader = locGL.createShader(locGL.VERTEX_SHADER);
        if (!this._compileShader(this._vertShader, locGL.VERTEX_SHADER, vertShaderStr))cc.log("cocos2d: ERROR: Failed to compile vertex shader")
    }
    if (fragShaderStr) {
        this._fragShader = locGL.createShader(locGL.FRAGMENT_SHADER);
        if (!this._compileShader(this._fragShader, locGL.FRAGMENT_SHADER, fragShaderStr))cc.log("cocos2d: ERROR: Failed to compile fragment shader")
    }
    if (this._vertShader)locGL.attachShader(this._programObj,
        this._vertShader);
    cc.checkGLErrorDebug();
    if (this._fragShader)locGL.attachShader(this._programObj, this._fragShader);
    this._hashForUniforms.length = 0;
    cc.checkGLErrorDebug();
    return true
}, initWithString: function (vertShaderStr, fragShaderStr) {
    return this.initWithVertexShaderByteArray(vertShaderStr, fragShaderStr)
}, initWithVertexShaderFilename: function (vShaderFilename, fShaderFileName) {
    var vertexSource = cc.loader.getRes(vShaderFilename);
    if (!vertexSource)throw"Please load the resource firset : " + vShaderFilename;
    var fragmentSource = cc.loader.getRes(fShaderFileName);
    if (!fragmentSource)throw"Please load the resource firset : " + fShaderFileName;
    return this.initWithVertexShaderByteArray(vertexSource, fragmentSource)
}, init: function (vShaderFilename, fShaderFileName) {
    return this.initWithVertexShaderFilename(vShaderFilename, fShaderFileName)
}, addAttribute: function (attributeName, index) {
    this._glContext.bindAttribLocation(this._programObj, index, attributeName)
}, link: function () {
    if (!this._programObj) {
        cc.log("cc.GLProgram.link(): Cannot link invalid program");
        return false
    }
    this._glContext.linkProgram(this._programObj);
    if (this._vertShader)this._glContext.deleteShader(this._vertShader);
    if (this._fragShader)this._glContext.deleteShader(this._fragShader);
    this._vertShader = null;
    this._fragShader = null;
    if (cc.game.config[cc.game.CONFIG_KEY.debugMode]) {
        var status = this._glContext.getProgramParameter(this._programObj, this._glContext.LINK_STATUS);
        if (!status) {
            cc.log("cocos2d: ERROR: Failed to link program: " + this._glContext.getProgramInfoLog(this._programObj));
            cc.glDeleteProgram(this._programObj);
            this._programObj = null;
            return false
        }
    }
    return true
}, use: function () {
    cc.glUseProgram(this._programObj)
}, updateUniforms: function () {
    this._uniforms[cc.UNIFORM_PMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_PMATRIX_S);
    this._uniforms[cc.UNIFORM_MVMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_MVMATRIX_S);
    this._uniforms[cc.UNIFORM_MVPMATRIX] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_MVPMATRIX_S);
    this._uniforms[cc.UNIFORM_TIME] = this._glContext.getUniformLocation(this._programObj,
        cc.UNIFORM_TIME_S);
    this._uniforms[cc.UNIFORM_SINTIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_SINTIME_S);
    this._uniforms[cc.UNIFORM_COSTIME] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_COSTIME_S);
    this._usesTime = this._uniforms[cc.UNIFORM_TIME] != null || this._uniforms[cc.UNIFORM_SINTIME] != null || this._uniforms[cc.UNIFORM_COSTIME] != null;
    this._uniforms[cc.UNIFORM_RANDOM01] = this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_RANDOM01_S);
    this._uniforms[cc.UNIFORM_SAMPLER] =
        this._glContext.getUniformLocation(this._programObj, cc.UNIFORM_SAMPLER_S);
    this.use();
    this.setUniformLocationWith1i(this._uniforms[cc.UNIFORM_SAMPLER], 0)
}, getUniformLocationForName: function (name) {
    if (!name)throw"cc.GLProgram.getUniformLocationForName(): uniform name should be non-null";
    if (!this._programObj)throw"cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized";
    return this._glContext.getUniformLocation(this._programObj, name)
}, getUniformMVPMatrix: function () {
    return this._uniforms[cc.UNIFORM_MVPMATRIX]
},
    getUniformSampler: function () {
        return this._uniforms[cc.UNIFORM_SAMPLER]
    }, setUniformLocationWith1i: function (location, i1) {
        var updated = this._updateUniformLocation(location, i1);
        if (updated)this._glContext.uniform1i(location, i1)
    }, setUniformLocationWith2i: function (location, i1, i2) {
        var intArray = [i1, i2];
        var updated = this._updateUniformLocation(location, intArray);
        if (updated)this._glContext.uniform2i(location, i1, i2)
    }, setUniformLocationWith3i: function (location, i1, i2, i3) {
        var intArray = [i1, i2, i3];
        var updated = this._updateUniformLocation(location,
            intArray);
        if (updated)this._glContext.uniform3i(location, i1, i2, i3)
    }, setUniformLocationWith4i: function (location, i1, i2, i3, i4) {
        var intArray = [i1, i2, i3, i4];
        var updated = this._updateUniformLocation(location, intArray);
        if (updated)this._glContext.uniform4i(location, i1, i2, i3, i4)
    }, setUniformLocationWith2iv: function (location, intArray, numberOfArrays) {
        var updated = this._updateUniformLocation(location, intArray);
        if (updated)this._glContext.uniform2iv(location, intArray)
    }, setUniformLocationWith3iv: function (location, intArray, numberOfArrays) {
        var updated = this._updateUniformLocation(location, intArray);
        if (updated)this._glContext.uniform3iv(location, intArray)
    }, setUniformLocationWith4iv: function (location, intArray, numberOfArrays) {
        var updated = this._updateUniformLocation(location, intArray);
        if (updated)this._glContext.uniform4iv(location, intArray)
    }, setUniformLocationI32: function (location, i1) {
        this.setUniformLocationWith1i(arguments[0], arguments[1])
    }, setUniformLocationWith1f: function (location, f1) {
        var updated = this._updateUniformLocation(location,
            f1);
        if (updated)this._glContext.uniform1f(location, f1)
    }, setUniformLocationWith2f: function (location, f1, f2) {
        var floats = [f1, f2];
        var updated = this._updateUniformLocation(location, floats);
        if (updated)this._glContext.uniform2f(location, f1, f2)
    }, setUniformLocationWith3f: function (location, f1, f2, f3) {
        var floats = [f1, f2, f3];
        var updated = this._updateUniformLocation(location, floats);
        if (updated)this._glContext.uniform3f(location, f1, f2, f3)
    }, setUniformLocationWith4f: function (location, f1, f2, f3, f4) {
        var floats = [f1, f2, f3,
            f4];
        var updated = this._updateUniformLocation(location, floats);
        if (updated)this._glContext.uniform4f(location, f1, f2, f3, f4)
    }, setUniformLocationWith2fv: function (location, floatArray, numberOfArrays) {
        var updated = this._updateUniformLocation(location, floatArray);
        if (updated)this._glContext.uniform2fv(location, floatArray)
    }, setUniformLocationWith3fv: function (location, floatArray, numberOfArrays) {
        var updated = this._updateUniformLocation(location, floatArray);
        if (updated)this._glContext.uniform3fv(location, floatArray)
    },
    setUniformLocationWith4fv: function (location, floatArray, numberOfArrays) {
        var updated = this._updateUniformLocation(location, floatArray);
        if (updated)this._glContext.uniform4fv(location, floatArray)
    }, setUniformLocationWithMatrix4fv: function (location, matrixArray, numberOfMatrices) {
        var updated = this._updateUniformLocation(location, matrixArray);
        if (updated)this._glContext.uniformMatrix4fv(location, false, matrixArray)
    }, setUniformLocationF32: function () {
        if (arguments.length < 2)return;
        switch (arguments.length) {
            case 2:
                this.setUniformLocationWith1f(arguments[0],
                    arguments[1]);
                break;
            case 3:
                this.setUniformLocationWith2f(arguments[0], arguments[1], arguments[2]);
                break;
            case 4:
                this.setUniformLocationWith3f(arguments[0], arguments[1], arguments[2], arguments[3]);
                break;
            case 5:
                this.setUniformLocationWith4f(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                break
        }
    }, setUniformsForBuiltins: function () {
        var matrixP = new cc.kmMat4;
        var matrixMV = new cc.kmMat4;
        var matrixMVP = new cc.kmMat4;
        cc.kmGLGetMatrix(cc.KM_GL_PROJECTION, matrixP);
        cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW,
            matrixMV);
        cc.kmMat4Multiply(matrixMVP, matrixP, matrixMV);
        this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX], matrixP.mat, 1);
        this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX], matrixMV.mat, 1);
        this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX], matrixMVP.mat, 1);
        if (this._usesTime) {
            var director = cc.director;
            var time = director.getTotalFrames() * director.getAnimationInterval();
            this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_TIME], time /
                10, time, time * 2, time * 4);
            this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_SINTIME], time / 8, time / 4, time / 2, Math.sin(time));
            this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_COSTIME], time / 8, time / 4, time / 2, Math.cos(time))
        }
        if (this._uniforms[cc.UNIFORM_RANDOM01] != -1)this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_RANDOM01], Math.random(), Math.random(), Math.random(), Math.random())
    }, setUniformForModelViewProjectionMatrix: function () {
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX],
            false, cc.getMat4MultiplyValue(cc.projection_matrix_stack.top, cc.modelview_matrix_stack.top))
    }, setUniformForModelViewProjectionMatrixWithMat4: function (swapMat4) {
        cc.kmMat4Multiply(swapMat4, cc.projection_matrix_stack.top, cc.modelview_matrix_stack.top);
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX], false, swapMat4.mat)
    }, setUniformForModelViewAndProjectionMatrixWithMat4: function () {
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX], false, cc.modelview_matrix_stack.top.mat);
        this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX], false, cc.projection_matrix_stack.top.mat)
    }, vertexShaderLog: function () {
        return this._glContext.getShaderInfoLog(this._vertShader)
    }, getVertexShaderLog: function () {
        return this._glContext.getShaderInfoLog(this._vertShader)
    }, getFragmentShaderLog: function () {
        return this._glContext.getShaderInfoLog(this._vertShader)
    }, fragmentShaderLog: function () {
        return this._glContext.getShaderInfoLog(this._fragShader)
    }, programLog: function () {
        return this._glContext.getProgramInfoLog(this._programObj)
    },
    getProgramLog: function () {
        return this._glContext.getProgramInfoLog(this._programObj)
    }, reset: function () {
        this._vertShader = null;
        this._fragShader = null;
        this._uniforms.length = 0;
        this._glContext.deleteProgram(this._programObj);
        this._programObj = null;
        for (var i = 0; i < this._hashForUniforms.length; i++) {
            this._hashForUniforms[i].value = null;
            this._hashForUniforms[i] = null
        }
        this._hashForUniforms.length = 0
    }, getProgram: function () {
        return this._programObj
    }, retain: function () {
    }, release: function () {
    }});
cc.GLProgram.create = function (vShaderFileName, fShaderFileName) {
    return new cc.GLProgram(vShaderFileName, fShaderFileName)
};
cc._currentProjectionMatrix = -1;
cc._vertexAttribPosition = false;
cc._vertexAttribColor = false;
cc._vertexAttribTexCoords = false;
if (cc.ENABLE_GL_STATE_CACHE) {
    cc.MAX_ACTIVETEXTURE = 16;
    cc._currentShaderProgram = -1;
    cc._currentBoundTexture = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    cc._blendingSource = -1;
    cc._blendingDest = -1;
    cc._GLServerState = 0;
    if (cc.TEXTURE_ATLAS_USE_VAO)cc._uVAO = 0
}
cc.glInvalidateStateCache = function () {
    cc.kmGLFreeAll();
    cc._currentProjectionMatrix = -1;
    cc._vertexAttribPosition = false;
    cc._vertexAttribColor = false;
    cc._vertexAttribTexCoords = false;
    if (cc.ENABLE_GL_STATE_CACHE) {
        cc._currentShaderProgram = -1;
        for (var i = 0; i < cc.MAX_ACTIVETEXTURE; i++)cc._currentBoundTexture[i] = -1;
        cc._blendingSource = -1;
        cc._blendingDest = -1;
        cc._GLServerState = 0
    }
};
cc.glUseProgram = function (program) {
    if (program !== cc._currentShaderProgram) {
        cc._currentShaderProgram = program;
        cc._renderContext.useProgram(program)
    }
};
if (!cc.ENABLE_GL_STATE_CACHE)cc.glUseProgram = function (program) {
    cc._renderContext.useProgram(program)
};
cc.glDeleteProgram = function (program) {
    if (cc.ENABLE_GL_STATE_CACHE)if (program === cc._currentShaderProgram)cc._currentShaderProgram = -1;
    gl.deleteProgram(program)
};
cc.glBlendFunc = function (sfactor, dfactor) {
    if (sfactor !== cc._blendingSource || dfactor !== cc._blendingDest) {
        cc._blendingSource = sfactor;
        cc._blendingDest = dfactor;
        cc.setBlending(sfactor, dfactor)
    }
};
cc.setBlending = function (sfactor, dfactor) {
    var ctx = cc._renderContext;
    if (sfactor === ctx.ONE && dfactor === ctx.ZERO)ctx.disable(ctx.BLEND); else {
        ctx.enable(ctx.BLEND);
        cc._renderContext.blendFunc(sfactor, dfactor)
    }
};
cc.glBlendFuncForParticle = function (sfactor, dfactor) {
    if (sfactor !== cc._blendingSource || dfactor !== cc._blendingDest) {
        cc._blendingSource = sfactor;
        cc._blendingDest = dfactor;
        var ctx = cc._renderContext;
        if (sfactor === ctx.ONE && dfactor === ctx.ZERO)ctx.disable(ctx.BLEND); else {
            ctx.enable(ctx.BLEND);
            ctx.blendFuncSeparate(ctx.SRC_ALPHA, dfactor, sfactor, dfactor)
        }
    }
};
if (!cc.ENABLE_GL_STATE_CACHE)cc.glBlendFunc = cc.setBlending;
cc.glBlendResetToCache = function () {
    var ctx = cc._renderContext;
    ctx.blendEquation(ctx.FUNC_ADD);
    if (cc.ENABLE_GL_STATE_CACHE)cc.setBlending(cc._blendingSource, cc._blendingDest); else cc.setBlending(ctx.BLEND_SRC, ctx.BLEND_DST)
};
cc.setProjectionMatrixDirty = function () {
    cc._currentProjectionMatrix = -1
};
cc.glEnableVertexAttribs = function (flags) {
    var ctx = cc._renderContext;
    var enablePosition = flags & cc.VERTEX_ATTRIB_FLAG_POSITION;
    if (enablePosition !== cc._vertexAttribPosition) {
        if (enablePosition)ctx.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION); else ctx.disableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION);
        cc._vertexAttribPosition = enablePosition
    }
    var enableColor = flags & cc.VERTEX_ATTRIB_FLAG_COLOR;
    if (enableColor !== cc._vertexAttribColor) {
        if (enableColor)ctx.enableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR); else ctx.disableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR);
        cc._vertexAttribColor = enableColor
    }
    var enableTexCoords = flags & cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;
    if (enableTexCoords !== cc._vertexAttribTexCoords) {
        if (enableTexCoords)ctx.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS); else ctx.disableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS);
        cc._vertexAttribTexCoords = enableTexCoords
    }
};
cc.glBindTexture2D = function (textureId) {
    cc.glBindTexture2DN(0, textureId)
};
cc.glBindTexture2DN = function (textureUnit, textureId) {
    if (cc._currentBoundTexture[textureUnit] == textureId)return;
    cc._currentBoundTexture[textureUnit] = textureId;
    var ctx = cc._renderContext;
    ctx.activeTexture(ctx.TEXTURE0 + textureUnit);
    if (textureId)ctx.bindTexture(ctx.TEXTURE_2D, textureId._webTextureObj); else ctx.bindTexture(ctx.TEXTURE_2D, null)
};
if (!cc.ENABLE_GL_STATE_CACHE)cc.glBindTexture2DN = function (textureUnit, textureId) {
    var ctx = cc._renderContext;
    ctx.activeTexture(ctx.TEXTURE0 + textureUnit);
    if (textureId)ctx.bindTexture(ctx.TEXTURE_2D, textureId._webTextureObj); else ctx.bindTexture(ctx.TEXTURE_2D, null)
};
cc.glDeleteTexture = function (textureId) {
    cc.glDeleteTextureN(0, textureId)
};
cc.glDeleteTextureN = function (textureUnit, textureId) {
    if (cc.ENABLE_GL_STATE_CACHE)if (textureId == cc._currentBoundTexture[textureUnit])cc._currentBoundTexture[textureUnit] = -1;
    cc._renderContext.deleteTexture(textureId)
};
cc.glBindVAO = function (vaoId) {
    if (!cc.TEXTURE_ATLAS_USE_VAO)return;
    if (cc.ENABLE_GL_STATE_CACHE) {
        if (cc._uVAO != vaoId)cc._uVAO = vaoId
    } else;
};
cc.glEnable = function (flags) {
    if (cc.ENABLE_GL_STATE_CACHE); else;
};cc.IMAGE_FORMAT_JPEG = 0;
cc.IMAGE_FORMAT_PNG = 1;
cc.IMAGE_FORMAT_RAWDATA = 2;
cc.NextPOT = function (x) {
    x = x - 1;
    x = x | x >> 1;
    x = x | x >> 2;
    x = x | x >> 4;
    x = x | x >> 8;
    x = x | x >> 16;
    return x + 1
};
cc.RenderTexture = cc.Node.extend({sprite: null, clearFlags: 0, clearDepthVal: 0, autoDraw: false, _cacheCanvas: null, _cacheContext: null, _fBO: 0, _depthRenderBuffer: 0, _oldFBO: 0, _texture: null, _textureCopy: null, _uITextureImage: null, _pixelFormat: cc.Texture2D.PIXEL_FORMAT_RGBA8888, _clearColor: null, clearStencilVal: 0, _clearColorStr: null, _className: "RenderTexture", ctor: null, _ctorForCanvas: function (width, height, format, depthStencilFormat) {
    cc.Node.prototype.ctor.call(this);
    this._clearColor = cc.color(255, 255, 255, 255);
    this._clearColorStr =
        "rgba(255,255,255,1)";
    this._cacheCanvas = cc.newElement("canvas");
    this._cacheContext = this._cacheCanvas.getContext("2d");
    this.anchorX = 0;
    this.anchorY = 0;
    if (width !== undefined && height !== undefined) {
        format = format || cc.Texture2D.PIXEL_FORMAT_RGBA8888;
        depthStencilFormat = depthStencilFormat || 0;
        this.initWithWidthAndHeight(width, height, format, depthStencilFormat)
    }
}, _ctorForWebGL: function (width, height, format, depthStencilFormat) {
    cc.Node.prototype.ctor.call(this);
    this._clearColor = cc.color(0, 0, 0, 0);
    if (width !== undefined &&
        height !== undefined) {
        format = format || cc.Texture2D.PIXEL_FORMAT_RGBA8888;
        depthStencilFormat = depthStencilFormat || 0;
        this.initWithWidthAndHeight(width, height, format, depthStencilFormat)
    }
}, cleanup: null, _cleanupForCanvas: function () {
    cc.Node.prototype.onExit.call(this);
    this._cacheContext = null;
    this._cacheCanvas = null
}, _cleanupForWebGL: function () {
    cc.Node.prototype.onExit.call(this);
    this._textureCopy = null;
    var gl = cc._renderContext;
    gl.deleteFramebuffer(this._fBO);
    if (this._depthRenderBuffer)gl.deleteRenderbuffer(this._depthRenderBuffer);
    this._uITextureImage = null
}, getSprite: function () {
    return this.sprite
}, setSprite: function (sprite) {
    this.sprite = sprite
}, initWithWidthAndHeight: null, _initWithWidthAndHeightForCanvas: function (width, height, format, depthStencilFormat) {
    var locCacheCanvas = this._cacheCanvas, locScaleFactor = cc.contentScaleFactor();
    locCacheCanvas.width = 0 | width * locScaleFactor;
    locCacheCanvas.height = 0 | height * locScaleFactor;
    this._cacheContext.translate(0, locCacheCanvas.height);
    var texture = new cc.Texture2D;
    texture.initWithElement(locCacheCanvas);
    texture.handleLoadedTexture();
    this.sprite = cc.Sprite.create(texture);
    return true
}, _initWithWidthAndHeightForWebGL: function (width, height, format, depthStencilFormat) {
    if (format == cc.Texture2D.PIXEL_FORMAT_A8)cc.log("cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;");
    var gl = cc._renderContext, locScaleFactor = cc.contentScaleFactor();
    width = 0 | width * locScaleFactor;
    height = 0 | height * locScaleFactor;
    this._oldFBO = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    var powW,
        powH;
    if (cc.configuration.supportsNPOT()) {
        powW = width;
        powH = height
    } else {
        powW = cc.NextPOT(width);
        powH = cc.NextPOT(height)
    }
    var dataLen = powW * powH * 4;
    var data = new Uint8Array(dataLen);
    for (var i = 0; i < powW * powH * 4; i++)data[i] = 0;
    this._pixelFormat = format;
    this._texture = new cc.Texture2D;
    if (!this._texture)return false;
    var locTexture = this._texture;
    locTexture.initWithData(data, this._pixelFormat, powW, powH, cc.size(width, height));
    var oldRBO = gl.getParameter(gl.RENDERBUFFER_BINDING);
    if (cc.configuration.checkForGLExtension("GL_QCOM")) {
        this._textureCopy =
            new cc.Texture2D;
        if (!this._textureCopy)return false;
        this._textureCopy.initWithData(data, this._pixelFormat, powW, powH, cc.size(width, height))
    }
    this._fBO = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fBO);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, locTexture._webTextureObj, 0);
    if (depthStencilFormat != 0) {
        this._depthRenderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, depthStencilFormat,
            powW, powH);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthRenderBuffer)
    }
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE)cc.log("Could not attach texture to the framebuffer");
    locTexture.setAliasTexParameters();
    this.sprite = cc.Sprite.create(locTexture);
    var locSprite = this.sprite;
    locSprite.scaleY = -1;
    locSprite.setBlendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.bindRenderbuffer(gl.RENDERBUFFER, oldRBO);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._oldFBO);
    this.autoDraw = false;
    this.addChild(locSprite);
    return true
}, begin: null, _beginForCanvas: function () {
    cc._renderContext = this._cacheContext;
    cc.view._setScaleXYForRenderTexture()
}, _beginForWebGL: function () {
    cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
    cc.kmGLPushMatrix();
    cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
    cc.kmGLPushMatrix();
    var director = cc.director;
    director.setProjection(director.getProjection());
    var texSize = this._texture.getContentSizeInPixels();
    var size = cc.director.getWinSizeInPixels();
    var widthRatio = size.width /
        texSize.width;
    var heightRatio = size.height / texSize.height;
    var gl = cc._renderContext;
    gl.viewport(0, 0, texSize.width, texSize.height);
    var orthoMatrix = new cc.kmMat4;
    cc.kmMat4OrthographicProjection(orthoMatrix, -1 / widthRatio, 1 / widthRatio, -1 / heightRatio, 1 / heightRatio, -1, 1);
    cc.kmGLMultMatrix(orthoMatrix);
    this._oldFBO = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._fBO);
    if (cc.configuration.checkForGLExtension("GL_QCOM")) {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D, this._textureCopy._webTextureObj, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture._webTextureObj, 0)
    }
}, beginWithClear: function (r, g, b, a, depthValue, stencilValue) {
    var gl = cc._renderContext;
    depthValue = depthValue || gl.COLOR_BUFFER_BIT;
    stencilValue = stencilValue || gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
    this._beginWithClear(r, g, b, a, depthValue, stencilValue, gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT)
},
    _beginWithClear: null, _beginWithClearForCanvas: function (r, g, b, a, depthValue, stencilValue, flags) {
        this.begin();
        r = r || 0;
        g = g || 0;
        b = b || 0;
        a = isNaN(a) ? 1 : a;
        var context = this._cacheContext;
        var locCanvas = this._cacheCanvas;
        context.save();
        context.fillStyle = "rgba(" + (0 | r) + "," + (0 | g) + "," + (0 | b) + "," + a / 255 + ")";
        context.clearRect(0, 0, locCanvas.width, -locCanvas.height);
        context.fillRect(0, 0, locCanvas.width, -locCanvas.height);
        context.restore()
    }, _beginWithClearForWebGL: function (r, g, b, a, depthValue, stencilValue, flags) {
        this.begin();
        var gl = cc._renderContext;
        var clearColor = [0, 0, 0, 0];
        var depthClearValue = 0;
        var stencilClearValue = 0;
        if (flags & gl.COLOR_BUFFER_BIT) {
            clearColor = gl.getParameter(gl.COLOR_CLEAR_VALUE);
            gl.clearColor(r, g, b, a)
        }
        if (flags & gl.DEPTH_BUFFER_BIT) {
            depthClearValue = gl.getParameter(gl.DEPTH_CLEAR_VALUE);
            gl.clearDepth(depthValue)
        }
        if (flags & gl.STENCIL_BUFFER_BIT) {
            stencilClearValue = gl.getParameter(gl.STENCIL_CLEAR_VALUE);
            gl.clearStencil(stencilValue)
        }
        gl.clear(flags);
        if (flags & gl.COLOR_BUFFER_BIT)gl.clearColor(clearColor[0],
            clearColor[1], clearColor[2], clearColor[3]);
        if (flags & gl.DEPTH_BUFFER_BIT)gl.clearDepth(depthClearValue);
        if (flags & gl.STENCIL_BUFFER_BIT)gl.clearStencil(stencilClearValue)
    }, end: null, _endForCanvas: function () {
        cc._renderContext = cc._mainRenderContextBackup;
        cc.view._resetScale()
    }, _endForWebGL: function () {
        var gl = cc._renderContext;
        var director = cc.director;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._oldFBO);
        director.setViewport();
        cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
        cc.kmGLPopMatrix();
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
        cc.kmGLPopMatrix()
    }, clear: function (r, g, b, a) {
        this.beginWithClear(r, g, b, a);
        this.end()
    }, clearRect: null, _clearRectForCanvas: function (x, y, width, height) {
        this._cacheContext.clearRect(x, y, width, -height)
    }, _clearRectForWebGL: function (x, y, width, height) {
    }, clearDepth: null, _clearDepthForCanvas: function (depthValue) {
        cc.log("clearDepth isn't supported on Cocos2d-Html5")
    }, _clearDepthForWebGL: function (depthValue) {
        this.begin();
        var gl = cc._renderContext;
        var depthClearValue = gl.getParameter(gl.DEPTH_CLEAR_VALUE);
        gl.clearDepth(depthValue);
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.clearDepth(depthClearValue);
        this.end()
    }, clearStencil: null, _clearStencilForCanvas: function (stencilValue) {
        cc.log("clearDepth isn't supported on Cocos2d-Html5")
    }, _clearStencilForWebGL: function (stencilValue) {
        var gl = cc._renderContext;
        var stencilClearValue = gl.getParameter(gl.STENCIL_CLEAR_VALUE);
        gl.clearStencil(stencilValue);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.clearStencil(stencilClearValue)
    }, visit: null, _visitForCanvas: function (ctx) {
        if (!this._visible)return;
        ctx = ctx || cc._renderContext;
        ctx.save();
        this.draw(ctx);
        this.transform(ctx);
        this.sprite.visit();
        ctx.restore();
        this.arrivalOrder = 0
    }, _visitForWebGL: function (ctx) {
        if (!this._visible)return;
        cc.kmGLPushMatrix();
        var locGrid = this.grid;
        if (locGrid && locGrid.isActive()) {
            locGrid.beforeDraw();
            this.transformAncestors()
        }
        this.transform(ctx);
        this.sprite.visit();
        this.draw(ctx);
        if (locGrid && locGrid.isActive())locGrid.afterDraw(this);
        cc.kmGLPopMatrix();
        this.arrivalOrder = 0
    }, draw: null, _drawForCanvas: function (ctx) {
        ctx = ctx || cc._renderContext;
        if (this.autoDraw) {
            this.begin();
            if (this.clearFlags) {
                var locCanvas = this._cacheCanvas;
                ctx.save();
                ctx.fillStyle = this._clearColorStr;
                ctx.clearRect(0, 0, locCanvas.width, -locCanvas.height);
                ctx.fillRect(0, 0, locCanvas.width, -locCanvas.height);
                ctx.restore()
            }
            this.sortAllChildren();
            var locChildren = this._children;
            var childrenLen = locChildren.length;
            var selfSprite = this.sprite;
            for (var i = 0; i < childrenLen; i++) {
                var getChild = locChildren[i];
                if (getChild != selfSprite)getChild.visit()
            }
            this.end()
        }
    }, _drawForWebGL: function (ctx) {
        var gl = cc._renderContext;
        if (this.autoDraw) {
            this.begin();
            var locClearFlags = this.clearFlags;
            if (locClearFlags) {
                var oldClearColor = [0, 0, 0, 0];
                var oldDepthClearValue = 0;
                var oldStencilClearValue = 0;
                if (locClearFlags & gl.COLOR_BUFFER_BIT) {
                    oldClearColor = gl.getParameter(gl.COLOR_CLEAR_VALUE);
                    gl.clearColor(this._clearColor.r / 255, this._clearColor.g / 255, this._clearColor.b / 255, this._clearColor.a / 255)
                }
                if (locClearFlags & gl.DEPTH_BUFFER_BIT) {
                    oldDepthClearValue = gl.getParameter(gl.DEPTH_CLEAR_VALUE);
                    gl.clearDepth(this.clearDepthVal)
                }
                if (locClearFlags & gl.STENCIL_BUFFER_BIT) {
                    oldStencilClearValue =
                        gl.getParameter(gl.STENCIL_CLEAR_VALUE);
                    gl.clearStencil(this.clearStencilVal)
                }
                gl.clear(locClearFlags);
                if (locClearFlags & gl.COLOR_BUFFER_BIT)gl.clearColor(oldClearColor[0], oldClearColor[1], oldClearColor[2], oldClearColor[3]);
                if (locClearFlags & gl.DEPTH_BUFFER_BIT)gl.clearDepth(oldDepthClearValue);
                if (locClearFlags & gl.STENCIL_BUFFER_BIT)gl.clearStencil(oldStencilClearValue)
            }
            this.sortAllChildren();
            var locChildren = this._children;
            for (var i = 0; i < locChildren.length; i++) {
                var getChild = locChildren[i];
                if (getChild !=
                    this.sprite)getChild.visit()
            }
            this.end()
        }
    }, newCCImage: function (flipImage) {
        cc.log("saveToFile isn't supported on cocos2d-html5");
        return null
    }, _memcpy: function (destArr, destIndex, srcArr, srcIndex, size) {
        for (var i = 0; i < size; i++)destArr[destIndex + i] = srcArr[srcIndex + i]
    }, saveToFile: function (filePath, format) {
        cc.log("saveToFile isn't supported on Cocos2d-Html5")
    }, listenToBackground: function (obj) {
        cc.log("listenToBackground isn't supported on Cocos2d-Html5")
    }, listenToForeground: function (obj) {
        cc.log("listenToForeground isn't supported on Cocos2d-Html5")
    },
    getClearFlags: function () {
        return this.clearFlags
    }, setClearFlags: function (clearFlags) {
        this.clearFlags = clearFlags
    }, getClearColor: function () {
        return this._clearColor
    }, setClearColor: null, _setClearColorForCanvas: function (clearColor) {
        var locClearColor = this._clearColor;
        locClearColor.r = clearColor.r;
        locClearColor.g = clearColor.g;
        locClearColor.b = clearColor.b;
        locClearColor.a = clearColor.a;
        this._clearColorStr = "rgba(" + (0 | clearColor.r) + "," + (0 | clearColor.g) + "," + (0 | clearColor.b) + "," + clearColor.a / 255 + ")"
    }, _setClearColorForWebGL: function (clearColor) {
        var locClearColor =
            this._clearColor;
        locClearColor.r = clearColor.r;
        locClearColor.g = clearColor.g;
        locClearColor.b = clearColor.b;
        locClearColor.a = clearColor.a
    }, getClearDepth: function () {
        return this.clearDepthVal
    }, setClearDepth: function (clearDepth) {
        this.clearDepthVal = clearDepth
    }, getClearStencil: function () {
        return this.clearStencilVal
    }, setClearStencil: function (clearStencil) {
        this.clearStencilVal = clearStencil
    }, isAutoDraw: function () {
        return this.autoDraw
    }, setAutoDraw: function (autoDraw) {
        this.autoDraw = autoDraw
    }});
var _p = cc.RenderTexture.prototype;
if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
    _p.ctor = _p._ctorForWebGL;
    _p.cleanup = _p._cleanupForWebGL;
    _p.initWithWidthAndHeight = _p._initWithWidthAndHeightForWebGL;
    _p.begin = _p._beginForWebGL;
    _p._beginWithClear = _p._beginWithClearForWebGL;
    _p.end = _p._endForWebGL;
    _p.clearRect = _p._clearRectForWebGL;
    _p.clearDepth = _p._clearDepthForWebGL;
    _p.clearStencil = _p._clearStencilForWebGL;
    _p.visit = _p._visitForWebGL;
    _p.draw = _p._drawForWebGL;
    _p.setClearColor = _p._setClearColorForWebGL
} else {
    _p.ctor = _p._ctorForCanvas;
    _p.cleanup =
        _p._cleanupForCanvas;
    _p.initWithWidthAndHeight = _p._initWithWidthAndHeightForCanvas;
    _p.begin = _p._beginForCanvas;
    _p._beginWithClear = _p._beginWithClearForCanvas;
    _p.end = _p._endForCanvas;
    _p.clearRect = _p._clearRectForCanvas;
    _p.clearDepth = _p._clearDepthForCanvas;
    _p.clearStencil = _p._clearStencilForCanvas;
    _p.visit = _p._visitForCanvas;
    _p.draw = _p._drawForCanvas;
    _p.setClearColor = _p._setClearColorForCanvas
}
_p.clearColorVal;
cc.defineGetterSetter(_p, "clearColorVal", _p.getClearColor, _p.setClearColor);
cc.RenderTexture.create = function (width, height, format, depthStencilFormat) {
    return new cc.RenderTexture(width, height, format, depthStencilFormat)
};cc.LabelAtlas = cc.AtlasNode.extend({_string: null, _mapStartChar: null, _textureLoaded: false, _loadedEventListeners: null, _className: "LabelAtlas", ctor: function (strText, charMapFile, itemWidth, itemHeight, startCharMap) {
    cc.AtlasNode.prototype.ctor.call(this);
    charMapFile && cc.LabelAtlas.prototype.initWithString.call(this, strText, charMapFile, itemWidth, itemHeight, startCharMap)
}, textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (callback, target) {
    if (!this._loadedEventListeners)this._loadedEventListeners =
        [];
    this._loadedEventListeners.push({eventCallback: callback, eventTarget: target})
}, _callLoadedEventCallbacks: function () {
    if (!this._loadedEventListeners)return;
    this._textureLoaded = true;
    var locListeners = this._loadedEventListeners;
    for (var i = 0, len = locListeners.length; i < len; i++) {
        var selCallback = locListeners[i];
        selCallback.eventCallback.call(selCallback.eventTarget, this)
    }
    locListeners.length = 0
}, initWithString: function (strText, charMapFile, itemWidth, itemHeight, startCharMap) {
    var label = strText + "", textureFilename,
        width, height, startChar;
    if (itemWidth === undefined) {
        var dict = cc.loader.getRes(charMapFile);
        if (parseInt(dict["version"], 10) !== 1) {
            cc.log("cc.LabelAtlas.initWithString(): Unsupported version. Upgrade cocos2d version");
            return false
        }
        textureFilename = cc.path.changeBasename(charMapFile, dict["textureFilename"]);
        var locScaleFactor = cc.contentScaleFactor();
        width = parseInt(dict["itemWidth"], 10) / locScaleFactor;
        height = parseInt(dict["itemHeight"], 10) / locScaleFactor;
        startChar = String.fromCharCode(parseInt(dict["firstChar"],
            10))
    } else {
        textureFilename = charMapFile;
        width = itemWidth || 0;
        height = itemHeight || 0;
        startChar = startCharMap || " "
    }
    var texture = null;
    if (textureFilename instanceof cc.Texture2D)texture = textureFilename; else texture = cc.textureCache.addImage(textureFilename);
    var locLoaded = texture.isLoaded();
    this._textureLoaded = locLoaded;
    if (!locLoaded)texture.addLoadedEventListener(function (sender) {
        this.initWithTexture(texture, width, height, label.length);
        this.string = label;
        this._callLoadedEventCallbacks()
    }, this);
    if (this.initWithTexture(texture,
        width, height, label.length)) {
        this._mapStartChar = startChar;
        this.string = label;
        return true
    }
    return false
}, setColor: function (color3) {
    cc.AtlasNode.prototype.setColor.call(this, color3);
    this.updateAtlasValues()
}, getString: function () {
    return this._string
}, draw: function (ctx) {
    cc.AtlasNode.prototype.draw.call(this, ctx);
    if (cc.LABELATLAS_DEBUG_DRAW) {
        var s = this.size;
        var vertices = [cc.p(0, 0), cc.p(s.width, 0), cc.p(s.width, s.height), cc.p(0, s.height)];
        cc._drawingUtil.drawPoly(vertices, 4, true)
    }
}, _addChildForCanvas: function (child, zOrder, tag) {
    child._lateChild = true;
    cc.NodeRGBA.prototype.addChild.call(this, child, zOrder, tag)
}, updateAtlasValues: null, _updateAtlasValuesForCanvas: function () {
    var locString = this._string || "";
    var n = locString.length;
    var texture = this.texture;
    var locItemWidth = this._itemWidth, locItemHeight = this._itemHeight;
    for (var i = 0; i < n; i++) {
        var a = locString.charCodeAt(i) - this._mapStartChar.charCodeAt(0);
        var row = parseInt(a % this._itemsPerRow, 10);
        var col = parseInt(a / this._itemsPerRow, 10);
        var rect = cc.rect(row * locItemWidth, col *
            locItemHeight, locItemWidth, locItemHeight);
        var c = locString.charCodeAt(i);
        var fontChar = this.getChildByTag(i);
        if (!fontChar) {
            fontChar = new cc.Sprite;
            if (c == 32) {
                fontChar.init();
                fontChar.setTextureRect(cc.rect(0, 0, 10, 10), false, cc.size(0, 0))
            } else fontChar.initWithTexture(texture, rect);
            cc.NodeRGBA.prototype.addChild.call(this, fontChar, 0, i)
        } else if (c == 32) {
            fontChar.init();
            fontChar.setTextureRect(cc.rect(0, 0, 10, 10), false, cc.size(0, 0))
        } else {
            fontChar.initWithTexture(texture, rect);
            fontChar.visible = true;
            fontChar.opacity =
                this._displayedOpacity
        }
        fontChar.setPosition(i * locItemWidth + locItemWidth / 2, locItemHeight / 2)
    }
}, _updateAtlasValuesForWebGL: function () {
    var locString = this._string;
    var n = locString.length;
    var locTextureAtlas = this.textureAtlas;
    var texture = locTextureAtlas.texture;
    var textureWide = texture.pixelsWidth;
    var textureHigh = texture.pixelsHeight;
    var itemWidthInPixels = this._itemWidth;
    var itemHeightInPixels = this._itemHeight;
    if (!this._ignoreContentScaleFactor) {
        itemWidthInPixels = this._itemWidth * cc.contentScaleFactor();
        itemHeightInPixels =
            this._itemHeight * cc.contentScaleFactor()
    }
    if (n > locTextureAtlas.getCapacity())cc.log("cc.LabelAtlas._updateAtlasValues(): Invalid String length");
    var quads = locTextureAtlas.quads;
    var locDisplayedColor = this._displayedColor;
    var curColor = {r: locDisplayedColor.r, g: locDisplayedColor.g, b: locDisplayedColor.b, a: this._displayedOpacity};
    var locItemWidth = this._itemWidth;
    for (var i = 0; i < n; i++) {
        var a = locString.charCodeAt(i) - this._mapStartChar.charCodeAt(0);
        var row = a % this._itemsPerRow;
        var col = 0 | a / this._itemsPerRow;
        var left,
            right, top, bottom;
        if (cc.FIX_ARTIFACTS_BY_STRECHING_TEXEL) {
            left = (2 * row * itemWidthInPixels + 1) / (2 * textureWide);
            right = left + (itemWidthInPixels * 2 - 2) / (2 * textureWide);
            top = (2 * col * itemHeightInPixels + 1) / (2 * textureHigh);
            bottom = top + (itemHeightInPixels * 2 - 2) / (2 * textureHigh)
        } else {
            left = row * itemWidthInPixels / textureWide;
            right = left + itemWidthInPixels / textureWide;
            top = col * itemHeightInPixels / textureHigh;
            bottom = top + itemHeightInPixels / textureHigh
        }
        var quad = quads[i];
        var locQuadTL = quad.tl, locQuadTR = quad.tr, locQuadBL = quad.bl, locQuadBR =
            quad.br;
        locQuadTL.texCoords.u = left;
        locQuadTL.texCoords.v = top;
        locQuadTR.texCoords.u = right;
        locQuadTR.texCoords.v = top;
        locQuadBL.texCoords.u = left;
        locQuadBL.texCoords.v = bottom;
        locQuadBR.texCoords.u = right;
        locQuadBR.texCoords.v = bottom;
        locQuadBL.vertices.x = i * locItemWidth;
        locQuadBL.vertices.y = 0;
        locQuadBL.vertices.z = 0;
        locQuadBR.vertices.x = i * locItemWidth + locItemWidth;
        locQuadBR.vertices.y = 0;
        locQuadBR.vertices.z = 0;
        locQuadTL.vertices.x = i * locItemWidth;
        locQuadTL.vertices.y = this._itemHeight;
        locQuadTL.vertices.z = 0;
        locQuadTR.vertices.x = i * locItemWidth + locItemWidth;
        locQuadTR.vertices.y = this._itemHeight;
        locQuadTR.vertices.z = 0;
        locQuadTL.colors = curColor;
        locQuadTR.colors = curColor;
        locQuadBL.colors = curColor;
        locQuadBR.colors = curColor
    }
    if (n > 0) {
        locTextureAtlas.dirty = true;
        var totalQuads = locTextureAtlas.totalQuads;
        if (n > totalQuads)locTextureAtlas.increaseTotalQuadsWith(n - totalQuads)
    }
}, setString: null, _setStringForCanvas: function (label) {
    label = String(label);
    var len = label.length;
    this._string = label;
    this.width = len * this._itemWidth;
    this.height = this._itemHeight;
    if (this._children) {
        var locChildren = this._children;
        len = locChildren.length;
        for (var i = 0; i < len; i++) {
            var node = locChildren[i];
            if (node && !node._lateChild)node.visible = false
        }
    }
    this.updateAtlasValues();
    this.quadsToDraw = len
}, _setStringForWebGL: function (label) {
    label = String(label);
    var len = label.length;
    if (len > this.textureAtlas.totalQuads)this.textureAtlas.resizeCapacity(len);
    this._string = label;
    this.width = len * this._itemWidth;
    this.height = this._itemHeight;
    this.updateAtlasValues();
    this.quadsToDraw =
        len
}, setOpacity: null, _setOpacityForCanvas: function (opacity) {
    if (this._displayedOpacity !== opacity) {
        cc.AtlasNode.prototype.setOpacity.call(this, opacity);
        var locChildren = this._children;
        for (var i = 0, len = locChildren.length; i < len; i++)if (locChildren[i])locChildren[i].opacity = opacity
    }
}, _setOpacityForWebGL: function (opacity) {
    if (this._opacity !== opacity)cc.AtlasNode.prototype.setOpacity.call(this, opacity)
}});
var _p = cc.LabelAtlas.prototype;
if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
    _p.updateAtlasValues = _p._updateAtlasValuesForWebGL;
    _p.setString = _p._setStringForWebGL;
    _p.setOpacity = _p._setOpacityForWebGL
} else {
    _p.updateAtlasValues = _p._updateAtlasValuesForCanvas;
    _p.setString = _p._setStringForCanvas;
    _p.setOpacity = _p._setOpacityForCanvas;
    _p.addChild = _p._addChildForCanvas
}
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
_p.string;
cc.defineGetterSetter(_p, "string", _p.getString, _p.setString);
cc.LabelAtlas.create = function (strText, charMapFile, itemWidth, itemHeight, startCharMap) {
    return new cc.LabelAtlas(strText, charMapFile, itemWidth, itemHeight, startCharMap)
};
cc.LABEL_AUTOMATIC_WIDTH = -1;
cc.LabelBMFont = cc.SpriteBatchNode.extend({RGBAProtocol: true, _opacityModifyRGB: false, _string: "", _config: null, _fntFile: "", _initialString: "", _alignment: cc.TEXT_ALIGNMENT_CENTER, _width: -1, _lineBreakWithoutSpaces: false, _imageOffset: null, _reusedChar: null, _displayedOpacity: 255, _realOpacity: 255, _displayedColor: null, _realColor: null, _cascadeColorEnabled: true, _cascadeOpacityEnabled: true, _textureLoaded: false, _loadedEventListeners: null, _className: "LabelBMFont", _setString: function (newString, needUpdateLabel) {
    if (!needUpdateLabel)this._string =
        newString; else this._initialString = newString;
    var locChildren = this._children;
    if (locChildren)for (var i = 0; i < locChildren.length; i++) {
        var selNode = locChildren[i];
        if (selNode)selNode.setVisible(false)
    }
    if (this._textureLoaded) {
        this.createFontChars();
        if (needUpdateLabel)this.updateLabel()
    }
}, ctor: function (str, fntFile, width, alignment, imageOffset) {
    var self = this;
    cc.SpriteBatchNode.prototype.ctor.call(self);
    self._imageOffset = cc.p(0, 0);
    self._displayedColor = cc.color(255, 255, 255, 255);
    self._realColor = cc.color(255, 255,
        255, 255);
    self._reusedChar = [];
    this.initWithString(str, fntFile, width, alignment, imageOffset)
}, textureLoaded: function () {
    return this._textureLoaded
}, addLoadedEventListener: function (callback, target) {
    if (!this._loadedEventListeners)this._loadedEventListeners = [];
    this._loadedEventListeners.push({eventCallback: callback, eventTarget: target})
}, _callLoadedEventCallbacks: function () {
    if (!this._loadedEventListeners)return;
    var locListeners = this._loadedEventListeners;
    for (var i = 0, len = locListeners.length; i < len; i++) {
        var selCallback =
            locListeners[i];
        selCallback.eventCallback.call(selCallback.eventTarget, this)
    }
    locListeners.length = 0
}, draw: function (ctx) {
    cc.SpriteBatchNode.prototype.draw.call(this, ctx);
    if (cc.LABELBMFONT_DEBUG_DRAW) {
        var size = this.getContentSize();
        var pos = cc.p(0 | -this._anchorPointInPoints.x, 0 | -this._anchorPointInPoints.y);
        var vertices = [cc.p(pos.x, pos.y), cc.p(pos.x + size.width, pos.y), cc.p(pos.x + size.width, pos.y + size.height), cc.p(pos.x, pos.y + size.height)];
        cc._drawingUtil.setDrawColor(0, 255, 0, 255);
        cc._drawingUtil.drawPoly(vertices,
            4, true)
    }
}, setColor: function (color) {
    var locDisplayed = this._displayedColor, locRealColor = this._realColor;
    if (locRealColor.r == color.r && locRealColor.g == color.g && locRealColor.b == color.b && locRealColor.a == color.a)return;
    locDisplayed.r = locRealColor.r = color.r;
    locDisplayed.g = locRealColor.g = color.g;
    locDisplayed.b = locRealColor.b = color.b;
    if (this._textureLoaded)if (this._cascadeColorEnabled) {
        var parentColor = cc.color.WHITE;
        var locParent = this._parent;
        if (locParent && locParent.RGBAProtocol && locParent.cascadeColor)parentColor =
            locParent.getDisplayedColor();
        this.updateDisplayedColor(parentColor)
    }
    if (color.a !== undefined && !color.a_undefined)this.setOpacity(color.a)
}, isOpacityModifyRGB: function () {
    return this._opacityModifyRGB
}, setOpacityModifyRGB: function (opacityModifyRGB) {
    this._opacityModifyRGB = opacityModifyRGB;
    var locChildren = this._children;
    if (locChildren)for (var i = 0; i < locChildren.length; i++) {
        var node = locChildren[i];
        if (node && node.RGBAProtocol)node.opacityModifyRGB = this._opacityModifyRGB
    }
}, getOpacity: function () {
    return this._realOpacity
},
    getDisplayedOpacity: function () {
        return this._displayedOpacity
    }, setOpacity: function (opacity) {
        this._displayedOpacity = this._realOpacity = opacity;
        if (this._cascadeOpacityEnabled) {
            var parentOpacity = 255;
            var locParent = this._parent;
            if (locParent && locParent.RGBAProtocol && locParent.cascadeOpacity)parentOpacity = locParent.getDisplayedOpacity();
            this.updateDisplayedOpacity(parentOpacity)
        }
        this._displayedColor.a = this._realColor.a = opacity
    }, updateDisplayedOpacity: function (parentOpacity) {
        this._displayedOpacity = this._realOpacity *
            parentOpacity / 255;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
            var locChild = locChildren[i];
            if (cc._renderType == cc._RENDER_TYPE_WEBGL)locChild.updateDisplayedOpacity(this._displayedOpacity); else {
                cc.NodeRGBA.prototype.updateDisplayedOpacity.call(locChild, this._displayedOpacity);
                locChild.setNodeDirty()
            }
        }
        this._changeTextureColor()
    }, isCascadeOpacityEnabled: function () {
        return false
    }, setCascadeOpacityEnabled: function (cascadeOpacityEnabled) {
        this._cascadeOpacityEnabled = cascadeOpacityEnabled
    },
    getColor: function () {
        var locRealColor = this._realColor;
        return cc.color(locRealColor.r, locRealColor.g, locRealColor.b, locRealColor.a)
    }, getDisplayedColor: function () {
        return this._displayedColor
    }, updateDisplayedColor: function (parentColor) {
        var locDispColor = this._displayedColor;
        var locRealColor = this._realColor;
        locDispColor.r = locRealColor.r * parentColor.r / 255;
        locDispColor.g = locRealColor.g * parentColor.g / 255;
        locDispColor.b = locRealColor.b * parentColor.b / 255;
        var locChildren = this._children;
        for (var i = 0; i < locChildren.length; i++) {
            var locChild =
                locChildren[i];
            if (cc._renderType == cc._RENDER_TYPE_WEBGL)locChild.updateDisplayedColor(this._displayedColor); else {
                cc.NodeRGBA.prototype.updateDisplayedColor.call(locChild, this._displayedColor);
                locChild.setNodeDirty()
            }
        }
        this._changeTextureColor()
    }, _changeTextureColor: function () {
        if (cc._renderType == cc._RENDER_TYPE_WEBGL)return;
        var locElement, locTexture = this.texture;
        if (locTexture && locTexture.width > 0) {
            locElement = locTexture.getHtmlElementObj();
            if (!locElement)return;
            var cacheTextureForColor = cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj());
            if (cacheTextureForColor)if (locElement instanceof HTMLCanvasElement && !this._rectRotated)cc.generateTintImage(locElement, cacheTextureForColor, this._displayedColor, null, locElement); else {
                locElement = cc.generateTintImage(locElement, cacheTextureForColor, this._displayedColor);
                locTexture = new cc.Texture2D;
                locTexture.initWithElement(locElement);
                locTexture.handleLoadedTexture();
                this.texture = locTexture
            }
        }
    }, isCascadeColorEnabled: function () {
        return false
    }, setCascadeColorEnabled: function (cascadeColorEnabled) {
        this._cascadeColorEnabled =
            cascadeColorEnabled
    }, init: function () {
        return this.initWithString(null, null, null, null, null)
    }, initWithString: function (str, fntFile, width, alignment, imageOffset) {
        var self = this, theString = str || "";
        if (self._config)cc.log("cc.LabelBMFont.initWithString(): re-init is no longer supported");
        var texture;
        if (fntFile) {
            var newConf = cc.loader.getRes(fntFile);
            if (!newConf) {
                cc.log("cc.LabelBMFont.initWithString(): Impossible to create font. Please check file");
                return false
            }
            self._config = newConf;
            self._fntFile = fntFile;
            texture =
                cc.textureCache.addImage(newConf.atlasName);
            var locIsLoaded = texture.isLoaded();
            self._textureLoaded = locIsLoaded;
            if (!locIsLoaded)texture.addLoadedEventListener(function (sender) {
                var self1 = this;
                self1._textureLoaded = true;
                self1.initWithTexture(sender, self1._initialString.length);
                self1.setString(self1._initialString, true);
                self1._callLoadedEventCallbacks()
            }, self)
        } else {
            texture = new cc.Texture2D;
            var image = new Image;
            texture.initWithElement(image);
            self._textureLoaded = false
        }
        if (self.initWithTexture(texture, theString.length)) {
            self._alignment =
                alignment || cc.TEXT_ALIGNMENT_LEFT;
            self._imageOffset = imageOffset || cc.p(0, 0);
            self._width = width == null ? -1 : width;
            self._displayedOpacity = self._realOpacity = 255;
            self._displayedColor = cc.color(255, 255, 255, 255);
            self._realColor = cc.color(255, 255, 255, 255);
            self._cascadeOpacityEnabled = true;
            self._cascadeColorEnabled = true;
            self._contentSize.width = 0;
            self._contentSize.height = 0;
            self.setAnchorPoint(0.5, 0.5);
            if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
                var locTexture = self.textureAtlas.texture;
                self._opacityModifyRGB = locTexture.hasPremultipliedAlpha();
                var reusedChar = self._reusedChar = new cc.Sprite;
                reusedChar.initWithTexture(locTexture, cc.rect(0, 0, 0, 0), false);
                reusedChar.batchNode = self
            }
            self.setString(theString, true);
            return true
        }
        return false
    }, createFontChars: function () {
        var self = this;
        var locContextType = cc._renderType;
        var locTexture = locContextType === cc._RENDER_TYPE_CANVAS ? self.texture : self.textureAtlas.texture;
        var nextFontPositionX = 0;
        var tmpSize = cc.size(0, 0);
        var longestLine = 0;
        var quantityOfLines = 1;
        var locStr = self._string;
        var stringLen = locStr ? locStr.length :
            0;
        if (stringLen === 0)return;
        var i, locCfg = self._config, locKerningDict = locCfg.kerningDict, locCommonH = locCfg.commonHeight, locFontDict = locCfg.fontDefDictionary;
        for (i = 0; i < stringLen - 1; i++)if (locStr.charCodeAt(i) == 10)quantityOfLines++;
        var totalHeight = locCommonH * quantityOfLines;
        var nextFontPositionY = -(locCommonH - locCommonH * quantityOfLines);
        var prev = -1;
        for (i = 0; i < stringLen; i++) {
            var key = locStr.charCodeAt(i);
            if (key == 0)continue;
            if (key === 10) {
                nextFontPositionX = 0;
                nextFontPositionY -= locCfg.commonHeight;
                continue
            }
            var kerningAmount =
                locKerningDict[prev << 16 | key & 65535] || 0;
            var fontDef = locFontDict[key];
            if (!fontDef) {
                cc.log("cocos2d: LabelBMFont: character not found " + locStr[i]);
                continue
            }
            var rect = cc.rect(fontDef.rect.x, fontDef.rect.y, fontDef.rect.width, fontDef.rect.height);
            rect = cc.rectPixelsToPoints(rect);
            rect.x += self._imageOffset.x;
            rect.y += self._imageOffset.y;
            var fontChar = self.getChildByTag(i);
            if (!fontChar) {
                fontChar = new cc.Sprite;
                if (key === 32 && locContextType === cc._RENDER_TYPE_CANVAS)rect = cc.rect(0, 0, 0, 0);
                fontChar.initWithTexture(locTexture,
                    rect, false);
                fontChar._newTextureWhenChangeColor = true;
                self.addChild(fontChar, 0, i)
            } else if (key === 32 && locContextType === cc._RENDER_TYPE_CANVAS)fontChar.setTextureRect(rect, false, cc.size(0, 0)); else {
                fontChar.setTextureRect(rect, false);
                fontChar.visible = true
            }
            fontChar.opacityModifyRGB = self._opacityModifyRGB;
            if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
                fontChar.updateDisplayedColor(self._displayedColor);
                fontChar.updateDisplayedOpacity(self._displayedOpacity)
            } else {
                cc.NodeRGBA.prototype.updateDisplayedColor.call(fontChar,
                    self._displayedColor);
                cc.NodeRGBA.prototype.updateDisplayedOpacity.call(fontChar, self._displayedOpacity);
                fontChar.setNodeDirty()
            }
            var yOffset = locCfg.commonHeight - fontDef.yOffset;
            var fontPos = cc.p(nextFontPositionX + fontDef.xOffset + fontDef.rect.width * 0.5 + kerningAmount, nextFontPositionY + yOffset - rect.height * 0.5 * cc.contentScaleFactor());
            fontChar.setPosition(cc.pointPixelsToPoints(fontPos));
            nextFontPositionX += fontDef.xAdvance + kerningAmount;
            prev = key;
            if (longestLine < nextFontPositionX)longestLine = nextFontPositionX
        }
        tmpSize.width =
            longestLine;
        tmpSize.height = totalHeight;
        self.setContentSize(cc.sizePixelsToPoints(tmpSize))
    }, updateString: function (fromUpdate) {
        var self = this;
        var locChildren = self._children;
        if (locChildren)for (var i = 0, li = locChildren.length; i < li; i++) {
            var node = locChildren[i];
            if (node)node.visible = false
        }
        if (self._config)self.createFontChars();
        if (!fromUpdate)self.updateLabel()
    }, getString: function () {
        return this._initialString
    }, setString: function (newString, needUpdateLabel) {
        newString = String(newString);
        if (needUpdateLabel == null)needUpdateLabel =
            true;
        if (newString == null || typeof newString != "string")newString = newString + "";
        this._initialString = newString;
        this._setString(newString, needUpdateLabel)
    }, _setStringForSetter: function (newString) {
        this.setString(newString, false)
    }, setCString: function (label) {
        this.setString(label, true)
    }, updateLabel: function () {
        var self = this;
        self.string = self._initialString;
        if (self._width > 0) {
            var stringLength = self._string.length;
            var multiline_string = [];
            var last_word = [];
            var line = 1, i = 0, start_line = false, start_word = false, startOfLine =
                -1, startOfWord = -1, skip = 0;
            var characterSprite;
            for (var j = 0, lj = self._children.length; j < lj; j++) {
                var justSkipped = 0;
                while (!(characterSprite = self.getChildByTag(j + skip + justSkipped)))justSkipped++;
                skip += justSkipped;
                if (i >= stringLength)break;
                var character = self._string[i];
                if (!start_word) {
                    startOfWord = self._getLetterPosXLeft(characterSprite);
                    start_word = true
                }
                if (!start_line) {
                    startOfLine = startOfWord;
                    start_line = true
                }
                if (character.charCodeAt(0) == 10) {
                    last_word.push("\n");
                    multiline_string = multiline_string.concat(last_word);
                    last_word.length = 0;
                    start_word = false;
                    start_line = false;
                    startOfWord = -1;
                    startOfLine = -1;
                    j--;
                    skip -= justSkipped;
                    line++;
                    if (i >= stringLength)break;
                    character = self._string[i];
                    if (!startOfWord) {
                        startOfWord = self._getLetterPosXLeft(characterSprite);
                        start_word = true
                    }
                    if (!startOfLine) {
                        startOfLine = startOfWord;
                        start_line = true
                    }
                    i++;
                    continue
                }
                if (cc.isspace_unicode(character)) {
                    last_word.push(character);
                    multiline_string = multiline_string.concat(last_word);
                    last_word.length = 0;
                    start_word = false;
                    startOfWord = -1;
                    i++;
                    continue
                }
                if (self._getLetterPosXRight(characterSprite) -
                    startOfLine > self._width)if (!self._lineBreakWithoutSpaces) {
                    last_word.push(character);
                    var found = multiline_string.lastIndexOf(" ");
                    if (found != -1)cc.utf8_trim_ws(multiline_string); else multiline_string = [];
                    if (multiline_string.length > 0)multiline_string.push("\n");
                    line++;
                    start_line = false;
                    startOfLine = -1;
                    i++
                } else {
                    cc.utf8_trim_ws(last_word);
                    last_word.push("\n");
                    multiline_string = multiline_string.concat(last_word);
                    last_word.length = 0;
                    start_word = false;
                    start_line = false;
                    startOfWord = -1;
                    startOfLine = -1;
                    line++;
                    if (i >=
                        stringLength)break;
                    if (!startOfWord) {
                        startOfWord = self._getLetterPosXLeft(characterSprite);
                        start_word = true
                    }
                    if (!startOfLine) {
                        startOfLine = startOfWord;
                        start_line = true
                    }
                    j--
                } else {
                    last_word.push(character);
                    i++
                }
            }
            multiline_string = multiline_string.concat(last_word);
            var len = multiline_string.length;
            var str_new = "";
            for (i = 0; i < len; ++i)str_new += multiline_string[i];
            str_new = str_new + String.fromCharCode(0);
            self._setString(str_new, false)
        }
        if (self._alignment != cc.TEXT_ALIGNMENT_LEFT) {
            i = 0;
            var lineNumber = 0;
            var strlen = self._string.length;
            var last_line = [];
            for (var ctr = 0; ctr < strlen; ctr++) {
                if (self._string[ctr].charCodeAt(0) == 10 || self._string[ctr].charCodeAt(0) == 0) {
                    var lineWidth = 0;
                    var line_length = last_line.length;
                    if (line_length == 0) {
                        lineNumber++;
                        continue
                    }
                    var index = i + line_length - 1 + lineNumber;
                    if (index < 0)continue;
                    var lastChar = self.getChildByTag(index);
                    if (lastChar == null)continue;
                    lineWidth = lastChar.getPositionX() + lastChar._getWidth() / 2;
                    var shift = 0;
                    switch (self._alignment) {
                        case cc.TEXT_ALIGNMENT_CENTER:
                            shift = self.width / 2 - lineWidth / 2;
                            break;
                        case cc.TEXT_ALIGNMENT_RIGHT:
                            shift =
                                self.width - lineWidth;
                            break;
                        default:
                            break
                    }
                    if (shift != 0)for (j = 0; j < line_length; j++) {
                        index = i + j + lineNumber;
                        if (index < 0)continue;
                        characterSprite = self.getChildByTag(index);
                        if (characterSprite)characterSprite.x += shift
                    }
                    i += line_length;
                    lineNumber++;
                    last_line.length = 0;
                    continue
                }
                last_line.push(self._string[i])
            }
        }
    }, setAlignment: function (alignment) {
        this._alignment = alignment;
        this.updateLabel()
    }, _getAlignment: function () {
        return this._alignment
    }, setBoundingWidth: function (width) {
        this._width = width;
        this.updateLabel()
    }, _getBoundingWidth: function () {
        return this._width
    },
    setLineBreakWithoutSpace: function (breakWithoutSpace) {
        this._lineBreakWithoutSpaces = breakWithoutSpace;
        this.updateLabel()
    }, setScale: function (scale, scaleY) {
        cc.Node.prototype.setScale.call(this, scale, scaleY);
        this.updateLabel()
    }, setScaleX: function (scaleX) {
        cc.Node.prototype.setScaleX.call(this, scaleX);
        this.updateLabel()
    }, setScaleY: function (scaleY) {
        cc.Node.prototype.setScaleY.call(this, scaleY);
        this.updateLabel()
    }, setFntFile: function (fntFile) {
        var self = this;
        if (fntFile != null && fntFile != self._fntFile) {
            var newConf =
                cc.loader.getRes(fntFile);
            if (!newConf) {
                cc.log("cc.LabelBMFont.setFntFile() : Impossible to create font. Please check file");
                return
            }
            self._fntFile = fntFile;
            self._config = newConf;
            var texture = cc.textureCache.addImage(newConf.atlasName);
            var locIsLoaded = texture.isLoaded();
            self._textureLoaded = locIsLoaded;
            self.texture = texture;
            if (cc._renderType === cc._RENDER_TYPE_CANVAS)self._originalTexture = self.texture;
            if (!locIsLoaded)texture.addLoadedEventListener(function (sender) {
                var self1 = this;
                self1._textureLoaded = true;
                self1.texture = sender;
                self1.createFontChars();
                self1._changeTextureColor();
                self1.updateLabel();
                self1._callLoadedEventCallbacks()
            }, self); else self.createFontChars()
        }
    }, getFntFile: function () {
        return this._fntFile
    }, setAnchorPoint: function (point, y) {
        cc.Node.prototype.setAnchorPoint.call(this, point, y);
        this.updateLabel()
    }, _setAnchor: function (p) {
        cc.Node.prototype._setAnchor.call(this, p);
        this.updateLabel()
    }, _setAnchorX: function (x) {
        cc.Node.prototype._setAnchorX.call(this, x);
        this.updateLabel()
    }, _setAnchorY: function (y) {
        cc.Node.prototype._setAnchorY.call(this,
            y);
        this.updateLabel()
    }, _atlasNameFromFntFile: function (fntFile) {
    }, _kerningAmountForFirst: function (first, second) {
        var ret = 0;
        var key = first << 16 | second & 65535;
        if (this._configuration.kerningDictionary) {
            var element = this._configuration.kerningDictionary[key.toString()];
            if (element)ret = element.amount
        }
        return ret
    }, _getLetterPosXLeft: function (sp) {
        return sp.getPositionX() * this._scaleX - sp._getWidth() * this._scaleX * sp._getAnchorX()
    }, _getLetterPosXRight: function (sp) {
        return sp.getPositionX() * this._scaleX + sp._getWidth() *
            this._scaleX * sp._getAnchorX()
    }});
var _p = cc.LabelBMFont.prototype;
_p.opacityModifyRGB;
cc.defineGetterSetter(_p, "opacityModifyRGB", _p.isOpacityModifyRGB, _p.setOpacityModifyRGB);
_p.opacity;
cc.defineGetterSetter(_p, "opacity", _p.getOpacity, _p.setOpacity);
_p.cascadeOpacity;
cc.defineGetterSetter(_p, "cascadeOpacity", _p.isCascadeOpacityEnabled, _p.setCascadeOpacityEnabled);
_p.color;
cc.defineGetterSetter(_p, "color", _p.getColor, _p.setColor);
_p.cascadeColor;
cc.defineGetterSetter(_p, "cascadeColor", _p.isCascadeColorEnabled, _p.setCascadeColorEnabled);
_p.string;
cc.defineGetterSetter(_p, "string", _p.getString, _p._setStringForSetter);
_p.boundingWidth;
cc.defineGetterSetter(_p, "boundingWidth", _p._getBoundingWidth, _p.setBoundingWidth);
_p.textAlign;
cc.defineGetterSetter(_p, "textAlign", _p._getAlignment, _p.setAlignment);
cc.LabelBMFont.create = function (str, fntFile, width, alignment, imageOffset) {
    return new cc.LabelBMFont(str, fntFile, width, alignment, imageOffset)
};
cc.isspace_unicode = function (ch) {
    ch = ch.charCodeAt(0);
    return ch >= 9 && ch <= 13 || ch == 32 || ch == 133 || ch == 160 || ch == 5760 || ch >= 8192 && ch <= 8202 || ch == 8232 || ch == 8233 || ch == 8239 || ch == 8287 || ch == 12288
};
cc.utf8_trim_ws = function (str) {
    var len = str.length;
    if (len <= 0)return;
    var last_index = len - 1;
    if (cc.isspace_unicode(str[last_index])) {
        for (var i = last_index - 1; i >= 0; --i)if (cc.isspace_unicode(str[i]))last_index = i; else break;
        cc.utf8_trim_from(str, last_index)
    }
};
cc.utf8_trim_from = function (str, index) {
    var len = str.length;
    if (index >= len || index < 0)return;
    str.splice(index, len)
};
cc._fntLoader = {INFO_EXP: /info [^\n]*(\n|$)/gi, COMMON_EXP: /common [^\n]*(\n|$)/gi, PAGE_EXP: /page [^\n]*(\n|$)/gi, CHAR_EXP: /char [^\n]*(\n|$)/gi, KERNING_EXP: /kerning [^\n]*(\n|$)/gi, ITEM_EXP: /\w+=[^ \r\n]+/gi, INT_EXP: /^[\-]?\d+$/, _parseStrToObj: function (str) {
    var arr = str.match(this.ITEM_EXP);
    var obj = {};
    if (arr)for (var i = 0, li = arr.length; i < li; i++) {
        var tempStr = arr[i];
        var index = tempStr.indexOf("\x3d");
        var key = tempStr.substring(0, index);
        var value = tempStr.substring(index + 1);
        if (value.match(this.INT_EXP))value =
            parseInt(value); else if (value[0] == '"')value = value.substring(1, value.length - 1);
        obj[key] = value
    }
    return obj
}, parseFnt: function (fntStr, url) {
    var self = this, fnt = {};
    var infoObj = self._parseStrToObj(fntStr.match(self.INFO_EXP)[0]);
    var paddingArr = infoObj["padding"].split(",");
    var padding = {left: parseInt(paddingArr[0]), top: parseInt(paddingArr[1]), right: parseInt(paddingArr[2]), bottom: parseInt(paddingArr[3])};
    var commonObj = self._parseStrToObj(fntStr.match(self.COMMON_EXP)[0]);
    fnt.commonHeight = commonObj["lineHeight"];
    if (cc._renderType === cc._RENDER_TYPE_WEBGL) {
        var texSize = cc.configuration.getMaxTextureSize();
        if (commonObj["scaleW"] > texSize.width || commonObj["scaleH"] > texSize.height)cc.log("cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported")
    }
    if (commonObj["pages"] !== 1)cc.log("cc.LabelBMFont._parseCommonArguments(): only supports 1 page");
    var pageObj = self._parseStrToObj(fntStr.match(self.PAGE_EXP)[0]);
    if (pageObj["id"] !== 0)cc.log("cc.LabelBMFont._parseImageFileName() : file could not be found");
    fnt.atlasName = cc.path.changeBasename(url, pageObj["file"]);
    var charLines = fntStr.match(self.CHAR_EXP);
    var fontDefDictionary = fnt.fontDefDictionary = {};
    for (var i = 0, li = charLines.length; i < li; i++) {
        var charObj = self._parseStrToObj(charLines[i]);
        var charId = charObj["id"];
        fontDefDictionary[charId] = {rect: {x: charObj["x"], y: charObj["y"], width: charObj["width"], height: charObj["height"]}, xOffset: charObj["xoffset"], yOffset: charObj["yoffset"], xAdvance: charObj["xadvance"]}
    }
    var kerningDict = fnt.kerningDict = {};
    var kerningLines =
        fntStr.match(self.KERNING_EXP);
    if (kerningLines)for (var i = 0, li = kerningLines.length; i < li; i++) {
        var kerningObj = self._parseStrToObj(kerningLines[i]);
        kerningDict[kerningObj["first"] << 16 | kerningObj["second"] & 65535] = kerningObj["amount"]
    }
    return fnt
}, load: function (realUrl, url, res, cb) {
    var self = this;
    cc.loader.loadTxt(realUrl, function (err, txt) {
        if (err)return cb(err);
        cb(null, self.parseFnt(txt, url))
    })
}};
cc.loader.register(["fnt"], cc._fntLoader);cc.MotionStreak = cc.NodeRGBA.extend({texture: null, fastMode: false, startingPositionInitialized: false, _blendFunc: null, _stroke: 0, _fadeDelta: 0, _minSeg: 0, _maxPoints: 0, _nuPoints: 0, _previousNuPoints: 0, _pointVertexes: null, _pointState: null, _vertices: null, _colorPointer: null, _texCoords: null, _verticesBuffer: null, _colorPointerBuffer: null, _texCoordsBuffer: null, _className: "MotionStreak", ctor: function (fade, minSeg, stroke, color, texture) {
    cc.NodeRGBA.prototype.ctor.call(this);
    this._positionR = cc.p(0, 0);
    this._blendFunc =
        new cc.BlendFunc(cc.SRC_ALPHA, cc.ONE_MINUS_SRC_ALPHA);
    this._vertexWebGLBuffer = cc._renderContext.createBuffer();
    this.fastMode = false;
    this.startingPositionInitialized = false;
    this.texture = null;
    this._stroke = 0;
    this._fadeDelta = 0;
    this._minSeg = 0;
    this._maxPoints = 0;
    this._nuPoints = 0;
    this._previousNuPoints = 0;
    this._pointVertexes = null;
    this._pointState = null;
    this._vertices = null;
    this._colorPointer = null;
    this._texCoords = null;
    this._verticesBuffer = null;
    this._colorPointerBuffer = null;
    this._texCoordsBuffer = null;
    if (texture !==
        undefined)this.initWithFade(fade, minSeg, stroke, color, texture)
}, getTexture: function () {
    return this.texture
}, setTexture: function (texture) {
    if (this.texture != texture)this.texture = texture
}, getBlendFunc: function () {
    return this._blendFunc
}, setBlendFunc: function (src, dst) {
    if (dst === undefined)this._blendFunc = src; else {
        this._blendFunc.src = src;
        this._blendFunc.dst = dst
    }
}, getOpacity: function () {
    cc.log("cc.MotionStreak.getOpacity has not been supported.");
    return 0
}, setOpacity: function (opacity) {
    cc.log("cc.MotionStreak.setOpacity has not been supported.")
},
    setOpacityModifyRGB: function (value) {
    }, isOpacityModifyRGB: function () {
        return false
    }, onExit: function () {
        cc.Node.prototype.onExit.call(this);
        if (this._verticesBuffer)cc._renderContext.deleteBuffer(this._verticesBuffer);
        if (this._texCoordsBuffer)cc._renderContext.deleteBuffer(this._texCoordsBuffer);
        if (this._colorPointerBuffer)cc._renderContext.deleteBuffer(this._colorPointerBuffer)
    }, isFastMode: function () {
        return this.fastMode
    }, setFastMode: function (fastMode) {
        this.fastMode = fastMode
    }, isStartingPositionInitialized: function () {
        return this.startingPositionInitialized
    },
    setStartingPositionInitialized: function (startingPositionInitialized) {
        this.startingPositionInitialized = startingPositionInitialized
    }, initWithFade: function (fade, minSeg, stroke, color, texture) {
        if (!texture)throw"cc.MotionStreak.initWithFade(): Invalid filename or texture";
        if (typeof texture === "string")texture = cc.textureCache.addImage(texture);
        cc.Node.prototype.setPosition.call(this, cc.p(0, 0));
        this.anchorX = 0;
        this.anchorY = 0;
        this.ignoreAnchor = true;
        this.startingPositionInitialized = false;
        this.fastMode = true;
        this._minSeg =
                minSeg == -1 ? stroke / 5 : minSeg;
        this._minSeg *= this._minSeg;
        this._stroke = stroke;
        this._fadeDelta = 1 / fade;
        var locMaxPoints = (0 | fade * 60) + 2;
        this._nuPoints = 0;
        this._pointState = new Float32Array(locMaxPoints);
        this._pointVertexes = new Float32Array(locMaxPoints * 2);
        this._vertices = new Float32Array(locMaxPoints * 4);
        this._texCoords = new Float32Array(locMaxPoints * 4);
        this._colorPointer = new Uint8Array(locMaxPoints * 8);
        this._maxPoints = locMaxPoints;
        var gl = cc._renderContext;
        this._verticesBuffer = gl.createBuffer();
        this._texCoordsBuffer =
            gl.createBuffer();
        this._colorPointerBuffer = gl.createBuffer();
        this._blendFunc.src = gl.SRC_ALPHA;
        this._blendFunc.dst = gl.ONE_MINUS_SRC_ALPHA;
        this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
        this.texture = texture;
        this.color = color;
        this.scheduleUpdate();
        gl.bindBuffer(gl.ARRAY_BUFFER, this._verticesBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._texCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this._texCoords, gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._colorPointerBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this._colorPointer, gl.DYNAMIC_DRAW);
        return true
    }, tintWithColor: function (color) {
        this.color = color;
        var locColorPointer = this._colorPointer;
        for (var i = 0, len = this._nuPoints * 2; i < len; i++) {
            locColorPointer[i * 4] = color.r;
            locColorPointer[i * 4 + 1] = color.g;
            locColorPointer[i * 4 + 2] = color.b
        }
    }, reset: function () {
        this._nuPoints = 0
    }, setPosition: function (position, yValue) {
        this.startingPositionInitialized = true;
        if (yValue === undefined) {
            this._positionR.x =
                position.x;
            this._positionR.y = position.y
        } else {
            this._positionR.x = position;
            this._positionR.y = yValue
        }
    }, getPositionX: function () {
        return this._positionR.x
    }, setPositionX: function (x) {
        this._positionR.x = x;
        if (!this.startingPositionInitialized)this.startingPositionInitialized = true
    }, getPositionY: function () {
        return this._positionR.y
    }, setPositionY: function (y) {
        this._positionR.y = y;
        if (!this.startingPositionInitialized)this.startingPositionInitialized = true
    }, draw: function (ctx) {
        if (this._nuPoints <= 1)return;
        if (this.texture &&
            this.texture.isLoaded()) {
            ctx = ctx || cc._renderContext;
            cc.nodeDrawSetup(this);
            cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
            cc.glBlendFunc(this._blendFunc.src, this._blendFunc.dst);
            cc.glBindTexture2D(this.texture);
            ctx.bindBuffer(ctx.ARRAY_BUFFER, this._verticesBuffer);
            ctx.bufferData(ctx.ARRAY_BUFFER, this._vertices, ctx.DYNAMIC_DRAW);
            ctx.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, ctx.FLOAT, false, 0, 0);
            ctx.bindBuffer(ctx.ARRAY_BUFFER, this._texCoordsBuffer);
            ctx.bufferData(ctx.ARRAY_BUFFER,
                this._texCoords, ctx.DYNAMIC_DRAW);
            ctx.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, ctx.FLOAT, false, 0, 0);
            ctx.bindBuffer(ctx.ARRAY_BUFFER, this._colorPointerBuffer);
            ctx.bufferData(ctx.ARRAY_BUFFER, this._colorPointer, ctx.DYNAMIC_DRAW);
            ctx.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, ctx.UNSIGNED_BYTE, true, 0, 0);
            ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, this._nuPoints * 2);
            cc.g_NumberOfDraws++
        }
    }, update: function (delta) {
        if (!this.startingPositionInitialized)return;
        delta *= this._fadeDelta;
        var newIdx, newIdx2, i,
            i2;
        var mov = 0;
        var locNuPoints = this._nuPoints;
        var locPointState = this._pointState, locPointVertexes = this._pointVertexes, locVertices = this._vertices;
        var locColorPointer = this._colorPointer;
        for (i = 0; i < locNuPoints; i++) {
            locPointState[i] -= delta;
            if (locPointState[i] <= 0)mov++; else {
                newIdx = i - mov;
                if (mov > 0) {
                    locPointState[newIdx] = locPointState[i];
                    locPointVertexes[newIdx * 2] = locPointVertexes[i * 2];
                    locPointVertexes[newIdx * 2 + 1] = locPointVertexes[i * 2 + 1];
                    i2 = i * 2;
                    newIdx2 = newIdx * 2;
                    locVertices[newIdx2 * 2] = locVertices[i2 * 2];
                    locVertices[newIdx2 *
                        2 + 1] = locVertices[i2 * 2 + 1];
                    locVertices[(newIdx2 + 1) * 2] = locVertices[(i2 + 1) * 2];
                    locVertices[(newIdx2 + 1) * 2 + 1] = locVertices[(i2 + 1) * 2 + 1];
                    i2 *= 4;
                    newIdx2 *= 4;
                    locColorPointer[newIdx2 + 0] = locColorPointer[i2 + 0];
                    locColorPointer[newIdx2 + 1] = locColorPointer[i2 + 1];
                    locColorPointer[newIdx2 + 2] = locColorPointer[i2 + 2];
                    locColorPointer[newIdx2 + 4] = locColorPointer[i2 + 4];
                    locColorPointer[newIdx2 + 5] = locColorPointer[i2 + 5];
                    locColorPointer[newIdx2 + 6] = locColorPointer[i2 + 6]
                } else newIdx2 = newIdx * 8;
                var op = locPointState[newIdx] * 255;
                locColorPointer[newIdx2 +
                    3] = op;
                locColorPointer[newIdx2 + 7] = op
            }
        }
        locNuPoints -= mov;
        var appendNewPoint = true;
        if (locNuPoints >= this._maxPoints)appendNewPoint = false; else if (locNuPoints > 0) {
            var a1 = cc.pDistanceSQ(cc.p(locPointVertexes[(locNuPoints - 1) * 2], locPointVertexes[(locNuPoints - 1) * 2 + 1]), this._positionR) < this._minSeg;
            var a2 = locNuPoints == 1 ? false : cc.pDistanceSQ(cc.p(locPointVertexes[(locNuPoints - 2) * 2], locPointVertexes[(locNuPoints - 2) * 2 + 1]), this._positionR) < this._minSeg * 2;
            if (a1 || a2)appendNewPoint = false
        }
        if (appendNewPoint) {
            locPointVertexes[locNuPoints *
                2] = this._positionR.x;
            locPointVertexes[locNuPoints * 2 + 1] = this._positionR.y;
            locPointState[locNuPoints] = 1;
            var offset = locNuPoints * 8;
            var locDisplayedColor = this._displayedColor;
            locColorPointer[offset] = locDisplayedColor.r;
            locColorPointer[offset + 1] = locDisplayedColor.g;
            locColorPointer[offset + 2] = locDisplayedColor.b;
            locColorPointer[offset + 4] = locDisplayedColor.r;
            locColorPointer[offset + 5] = locDisplayedColor.g;
            locColorPointer[offset + 6] = locDisplayedColor.b;
            locColorPointer[offset + 3] = 255;
            locColorPointer[offset + 7] = 255;
            if (locNuPoints > 0 && this.fastMode)if (locNuPoints > 1)cc.vertexLineToPolygon(locPointVertexes, this._stroke, this._vertices, locNuPoints, 1); else cc.vertexLineToPolygon(locPointVertexes, this._stroke, this._vertices, 0, 2);
            locNuPoints++
        }
        if (!this.fastMode)cc.vertexLineToPolygon(locPointVertexes, this._stroke, this._vertices, 0, locNuPoints);
        if (locNuPoints && this._previousNuPoints != locNuPoints) {
            var texDelta = 1 / locNuPoints;
            var locTexCoords = this._texCoords;
            for (i = 0; i < locNuPoints; i++) {
                locTexCoords[i * 4] = 0;
                locTexCoords[i * 4 +
                    1] = texDelta * i;
                locTexCoords[(i * 2 + 1) * 2] = 1;
                locTexCoords[(i * 2 + 1) * 2 + 1] = texDelta * i
            }
            this._previousNuPoints = locNuPoints
        }
        this._nuPoints = locNuPoints
    }});
cc.MotionStreak.create = function (fade, minSeg, stroke, color, texture) {
    return new cc.MotionStreak(fade, minSeg, stroke, color, texture)
};cc.NodeGrid = cc.Node.extend({grid: null, _target: null, getGrid: function () {
    return this.grid
}, setGrid: function (grid) {
    this.grid = grid
}, setTarget: function (target) {
    this._target = target
}, addChild: function (child, zOrder, tag) {
    cc.Node.prototype.addChild.call(this, child, zOrder, tag);
    if (child && !this._target)this._target = child
}, visit: function () {
    var self = this;
    if (!self._visible)return;
    var isWebGL = cc._renderType == cc._RENDER_TYPE_WEBGL;
    var locGrid = self.grid;
    if (isWebGL && locGrid && locGrid._active)locGrid.beforeDraw();
    self.transform();
    var locChildren = this._children;
    if (locChildren && locChildren.length > 0) {
        var childLen = locChildren.length;
        this.sortAllChildren();
        for (i = 0; i < childLen; i++) {
            var child = locChildren[i];
            child && child.visit()
        }
    }
    if (isWebGL && locGrid && locGrid._active)locGrid.afterDraw(self._target)
}, _transformForWebGL: function () {
    var t4x4 = this._transform4x4, topMat4 = cc.current_stack.top;
    var trans = this.nodeToParentTransform();
    var t4x4Mat = t4x4.mat;
    t4x4Mat[0] = trans.a;
    t4x4Mat[4] = trans.c;
    t4x4Mat[12] = trans.tx;
    t4x4Mat[1] = trans.b;
    t4x4Mat[5] =
        trans.d;
    t4x4Mat[13] = trans.ty;
    t4x4Mat[14] = this._vertexZ;
    cc.kmMat4Multiply(topMat4, topMat4, t4x4);
    if (this._camera != null && !(this.grid && this.grid.isActive())) {
        var apx = this._anchorPointInPoints.x, apy = this._anchorPointInPoints.y;
        var translate = apx !== 0 || apy !== 0;
        if (translate) {
            if (!cc.SPRITEBATCHNODE_RENDER_SUBPIXEL) {
                apx = 0 | apx;
                apy = 0 | apy
            }
            cc.kmGLTranslatef(apx, apy, 0);
            this._camera.locate();
            cc.kmGLTranslatef(-apx, -apy, 0)
        } else this._camera.locate()
    }
}});
var _p = cc.NodeGrid.prototype;
if (cc._renderType === cc._RENDER_TYPE_WEBGL)_p.transform = _p._transformForWebGL;
_p.grid;
_p.target;
cc.defineGetterSetter(_p, "target", null, _p.setTarget);
cc.NodeGrid.create = function () {
    return new cc.NodeGrid
};cc.GridBase = cc.Class.extend({_active: false, _reuseGrid: 0, _gridSize: null, _texture: null, _step: null, _grabber: null, _isTextureFlipped: false, _shaderProgram: null, _directorProjection: 0, _dirty: false, ctor: function (gridSize, texture, flipped) {
    cc._checkWebGLRenderMode();
    this._active = false;
    this._reuseGrid = 0;
    this._gridSize = null;
    this._texture = null;
    this._step = cc.p(0, 0);
    this._grabber = null;
    this._isTextureFlipped = false;
    this._shaderProgram = null;
    this._directorProjection = 0;
    this._dirty = false;
    if (gridSize !== undefined)this.initWithSize(gridSize,
        texture, flipped)
}, isActive: function () {
    return this._active
}, setActive: function (active) {
    this._active = active;
    if (!active) {
        var director = cc.director;
        var proj = director.getProjection();
        director.setProjection(proj)
    }
}, getReuseGrid: function () {
    return this._reuseGrid
}, setReuseGrid: function (reuseGrid) {
    this._reuseGrid = reuseGrid
}, getGridSize: function () {
    return cc.size(this._gridSize.width, this._gridSize.height)
}, setGridSize: function (gridSize) {
    this._gridSize.width = parseInt(gridSize.width);
    this._gridSize.height = parseInt(gridSize.height)
},
    getStep: function () {
        return cc.p(this._step.x, this._step.y)
    }, setStep: function (step) {
        this._step.x = step.x;
        this._step.y = step.y
    }, isTextureFlipped: function () {
        return this._isTextureFlipped
    }, setTextureFlipped: function (flipped) {
        if (this._isTextureFlipped != flipped) {
            this._isTextureFlipped = flipped;
            this.calculateVertexPoints()
        }
    }, initWithSize: function (gridSize, texture, flipped) {
        if (!texture) {
            var director = cc.director;
            var winSize = director.getWinSizeInPixels();
            var POTWide = cc.NextPOT(winSize.width);
            var POTHigh = cc.NextPOT(winSize.height);
            var data = new Uint8Array(POTWide * POTHigh * 4);
            if (!data) {
                cc.log("cocos2d: CCGrid: not enough memory.");
                return false
            }
            texture = new cc.Texture2D;
            texture.initWithData(data, cc.Texture2D.PIXEL_FORMAT_RGBA8888, POTWide, POTHigh, winSize);
            if (!texture) {
                cc.log("cocos2d: CCGrid: error creating texture");
                return false
            }
        }
        flipped = flipped || false;
        this._active = false;
        this._reuseGrid = 0;
        this._gridSize = gridSize;
        this._texture = texture;
        this._isTextureFlipped = flipped;
        this._step.x = this._texture.width / gridSize.width;
        this._step.y = this._texture.height /
            gridSize.height;
        this._grabber = new cc.Grabber;
        if (!this._grabber)return false;
        this._grabber.grab(this._texture);
        this._shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURE);
        this.calculateVertexPoints();
        return true
    }, beforeDraw: function () {
        this._directorProjection = cc.director.getProjection();
        this.set2DProjection();
        this._grabber.beforeRender(this._texture)
    }, afterDraw: function (target) {
        this._grabber.afterRender(this._texture);
        cc.director.setProjection(this._directorProjection);
        if (target.getCamera().isDirty()) {
            var offset =
                target.getAnchorPointInPoints();
            cc.kmGLTranslatef(offset.x, offset.y, 0);
            target.getCamera().locate();
            cc.kmGLTranslatef(-offset.x, -offset.y, 0)
        }
        cc.glBindTexture2D(this._texture);
        this.blit()
    }, blit: function () {
        cc.log("cc.GridBase.blit(): Shall be overridden in subclass.")
    }, reuse: function () {
        cc.log("cc.GridBase.reuse(): Shall be overridden in subclass.")
    }, calculateVertexPoints: function () {
        cc.log("cc.GridBase.calculateVertexPoints(): Shall be overridden in subclass.")
    }, set2DProjection: function () {
        var winSize =
            cc.director.getWinSizeInPixels();
        var gl = cc._renderContext;
        gl.viewport(0, 0, winSize.width, winSize.height);
        cc.kmGLMatrixMode(cc.KM_GL_PROJECTION);
        cc.kmGLLoadIdentity();
        var orthoMatrix = new cc.kmMat4;
        cc.kmMat4OrthographicProjection(orthoMatrix, 0, winSize.width, 0, winSize.height, -1, 1);
        cc.kmGLMultMatrix(orthoMatrix);
        cc.kmGLMatrixMode(cc.KM_GL_MODELVIEW);
        cc.kmGLLoadIdentity();
        cc.setProjectionMatrixDirty()
    }});
cc.GridBase.create = function (gridSize, texture, flipped) {
    return new cc.GridBase(gridSize, texture, flipped)
};
cc.Grid3D = cc.GridBase.extend({_texCoordinates: null, _vertices: null, _originalVertices: null, _indices: null, _texCoordinateBuffer: null, _verticesBuffer: null, _indicesBuffer: null, ctor: function (gridSize, texture, flipped) {
    cc.GridBase.prototype.ctor.call(this);
    this._texCoordinates = null;
    this._vertices = null;
    this._originalVertices = null;
    this._indices = null;
    this._texCoordinateBuffer = null;
    this._verticesBuffer = null;
    this._indicesBuffer = null;
    if (gridSize !== undefined)this.initWithSize(gridSize, texture, flipped)
}, vertex: function (pos) {
    if (pos.x !==
        (0 | pos.x) || pos.y !== (0 | pos.y))cc.log("cc.Grid3D.vertex() : Numbers must be integers");
    var index = 0 | (pos.x * (this._gridSize.height + 1) + pos.y) * 3;
    var locVertices = this._vertices;
    return new cc.Vertex3F(locVertices[index], locVertices[index + 1], locVertices[index + 2])
}, originalVertex: function (pos) {
    if (pos.x !== (0 | pos.x) || pos.y !== (0 | pos.y))cc.log("cc.Grid3D.originalVertex() : Numbers must be integers");
    var index = 0 | (pos.x * (this._gridSize.height + 1) + pos.y) * 3;
    var locOriginalVertices = this._originalVertices;
    return new cc.Vertex3F(locOriginalVertices[index],
        locOriginalVertices[index + 1], locOriginalVertices[index + 2])
}, setVertex: function (pos, vertex) {
    if (pos.x !== (0 | pos.x) || pos.y !== (0 | pos.y))cc.log("cc.Grid3D.setVertex() : Numbers must be integers");
    var index = 0 | (pos.x * (this._gridSize.height + 1) + pos.y) * 3;
    var vertArray = this._vertices;
    vertArray[index] = vertex.x;
    vertArray[index + 1] = vertex.y;
    vertArray[index + 2] = vertex.z;
    this._dirty = true
}, blit: function () {
    var n = this._gridSize.width * this._gridSize.height;
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS);
    this._shaderProgram.use();
    this._shaderProgram.setUniformsForBuiltins();
    var gl = cc._renderContext, locDirty = this._dirty;
    gl.bindBuffer(gl.ARRAY_BUFFER, this._verticesBuffer);
    if (locDirty)gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._texCoordinateBuffer);
    if (locDirty)gl.bufferData(gl.ARRAY_BUFFER, this._texCoordinates, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS,
        2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indicesBuffer);
    if (locDirty)gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indices, gl.STATIC_DRAW);
    gl.drawElements(gl.TRIANGLES, n * 6, gl.UNSIGNED_SHORT, 0);
    if (locDirty)this._dirty = false;
    cc.incrementGLDraws(1)
}, reuse: function () {
    if (this._reuseGrid > 0) {
        var locOriginalVertices = this._originalVertices, locVertices = this._vertices;
        for (var i = 0, len = this._vertices.length; i < len; i++)locOriginalVertices[i] = locVertices[i];
        --this._reuseGrid
    }
}, calculateVertexPoints: function () {
    var gl =
        cc._renderContext;
    var width = this._texture.pixelsWidth;
    var height = this._texture.pixelsHeight;
    var imageH = this._texture.getContentSizeInPixels().height;
    var locGridSize = this._gridSize;
    var numOfPoints = (locGridSize.width + 1) * (locGridSize.height + 1);
    this._vertices = new Float32Array(numOfPoints * 3);
    this._texCoordinates = new Float32Array(numOfPoints * 2);
    this._indices = new Uint16Array(locGridSize.width * locGridSize.height * 6);
    if (this._verticesBuffer)gl.deleteBuffer(this._verticesBuffer);
    this._verticesBuffer = gl.createBuffer();
    if (this._texCoordinateBuffer)gl.deleteBuffer(this._texCoordinateBuffer);
    this._texCoordinateBuffer = gl.createBuffer();
    if (this._indicesBuffer)gl.deleteBuffer(this._indicesBuffer);
    this._indicesBuffer = gl.createBuffer();
    var x, y, i, locIndices = this._indices, locTexCoordinates = this._texCoordinates;
    var locIsTextureFlipped = this._isTextureFlipped, locVertices = this._vertices;
    for (x = 0; x < locGridSize.width; ++x)for (y = 0; y < locGridSize.height; ++y) {
        var idx = y * locGridSize.width + x;
        var x1 = x * this._step.x;
        var x2 = x1 + this._step.x;
        var y1 = y * this._step.y;
        var y2 = y1 + this._step.y;
        var a = x * (locGridSize.height + 1) + y;
        var b = (x + 1) * (locGridSize.height + 1) + y;
        var c = (x + 1) * (locGridSize.height + 1) + (y + 1);
        var d = x * (locGridSize.height + 1) + (y + 1);
        locIndices[idx * 6] = a;
        locIndices[idx * 6 + 1] = b;
        locIndices[idx * 6 + 2] = d;
        locIndices[idx * 6 + 3] = b;
        locIndices[idx * 6 + 4] = c;
        locIndices[idx * 6 + 5] = d;
        var l1 = [a * 3, b * 3, c * 3, d * 3];
        var e = {x: x1, y: y1, z: 0};
        var f = {x: x2, y: y1, z: 0};
        var g = {x: x2, y: y2, z: 0};
        var h = {x: x1, y: y2, z: 0};
        var l2 = [e, f, g, h];
        var tex1 = [a * 2, b * 2, c * 2, d * 2];
        var tex2 = [cc.p(x1, y1),
            cc.p(x2, y1), cc.p(x2, y2), cc.p(x1, y2)];
        for (i = 0; i < 4; ++i) {
            locVertices[l1[i]] = l2[i].x;
            locVertices[l1[i] + 1] = l2[i].y;
            locVertices[l1[i] + 2] = l2[i].z;
            locTexCoordinates[tex1[i]] = tex2[i].x / width;
            if (locIsTextureFlipped)locTexCoordinates[tex1[i] + 1] = (imageH - tex2[i].y) / height; else locTexCoordinates[tex1[i] + 1] = tex2[i].y / height
        }
    }
    this._originalVertices = new Float32Array(this._vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._verticesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER,
        this._texCoordinateBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._texCoordinates, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indicesBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indices, gl.STATIC_DRAW);
    this._dirty = true
}});
cc.Grid3D.create = function (gridSize, texture, flipped) {
    return new cc.Grid3D(gridSize, texture, flipped)
};
cc.TiledGrid3D = cc.GridBase.extend({_texCoordinates: null, _vertices: null, _originalVertices: null, _indices: null, _texCoordinateBuffer: null, _verticesBuffer: null, _indicesBuffer: null, ctor: function (gridSize, texture, flipped) {
    cc.GridBase.prototype.ctor.call(this);
    this._texCoordinates = null;
    this._vertices = null;
    this._originalVertices = null;
    this._indices = null;
    this._texCoordinateBuffer = null;
    this._verticesBuffer = null;
    this._indicesBuffer = null;
    if (gridSize !== undefined)this.initWithSize(gridSize, texture, flipped)
}, tile: function (pos) {
    if (pos.x !==
        (0 | pos.x) || pos.y !== (0 | pos.y))cc.log("cc.TiledGrid3D.tile() : Numbers must be integers");
    var idx = (this._gridSize.height * pos.x + pos.y) * 4 * 3;
    var locVertices = this._vertices;
    return new cc.Quad3(new cc.Vertex3F(locVertices[idx], locVertices[idx + 1], locVertices[idx + 2]), new cc.Vertex3F(locVertices[idx + 3], locVertices[idx + 4], locVertices[idx + 5]), new cc.Vertex3F(locVertices[idx + 6], locVertices[idx + 7], locVertices[idx + 8]), new cc.Vertex3F(locVertices[idx + 9], locVertices[idx + 10], locVertices[idx + 11]))
}, originalTile: function (pos) {
    if (pos.x !==
        (0 | pos.x) || pos.y !== (0 | pos.y))cc.log("cc.TiledGrid3D.originalTile() : Numbers must be integers");
    var idx = (this._gridSize.height * pos.x + pos.y) * 4 * 3;
    var locOriginalVertices = this._originalVertices;
    return new cc.Quad3(new cc.Vertex3F(locOriginalVertices[idx], locOriginalVertices[idx + 1], locOriginalVertices[idx + 2]), new cc.Vertex3F(locOriginalVertices[idx + 3], locOriginalVertices[idx + 4], locOriginalVertices[idx + 5]), new cc.Vertex3F(locOriginalVertices[idx + 6], locOriginalVertices[idx + 7], locOriginalVertices[idx + 8]),
        new cc.Vertex3F(locOriginalVertices[idx + 9], locOriginalVertices[idx + 10], locOriginalVertices[idx + 11]))
}, setTile: function (pos, coords) {
    if (pos.x !== (0 | pos.x) || pos.y !== (0 | pos.y))cc.log("cc.TiledGrid3D.setTile() : Numbers must be integers");
    var idx = (this._gridSize.height * pos.x + pos.y) * 12;
    var locVertices = this._vertices;
    locVertices[idx] = coords.bl.x;
    locVertices[idx + 1] = coords.bl.y;
    locVertices[idx + 2] = coords.bl.z;
    locVertices[idx + 3] = coords.br.x;
    locVertices[idx + 4] = coords.br.y;
    locVertices[idx + 5] = coords.br.z;
    locVertices[idx +
        6] = coords.tl.x;
    locVertices[idx + 7] = coords.tl.y;
    locVertices[idx + 8] = coords.tl.z;
    locVertices[idx + 9] = coords.tr.x;
    locVertices[idx + 10] = coords.tr.y;
    locVertices[idx + 11] = coords.tr.z;
    this._dirty = true
}, blit: function () {
    var n = this._gridSize.width * this._gridSize.height;
    this._shaderProgram.use();
    this._shaderProgram.setUniformsForBuiltins();
    var gl = cc._renderContext, locDirty = this._dirty;
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._verticesBuffer);
    if (locDirty)gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 3, gl.FLOAT, false, 0, this._vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._texCoordinateBuffer);
    if (locDirty)gl.bufferData(gl.ARRAY_BUFFER, this._texCoordinates, gl.DYNAMIC_DRAW);
    gl.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS, 2, gl.FLOAT, false, 0, this._texCoordinates);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indicesBuffer);
    if (locDirty)gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indices,
        gl.STATIC_DRAW);
    gl.drawElements(gl.TRIANGLES, n * 6, gl.UNSIGNED_SHORT, 0);
    if (locDirty)this._dirty = false;
    cc.incrementGLDraws(1)
}, reuse: function () {
    if (this._reuseGrid > 0) {
        var locVertices = this._vertices, locOriginalVertices = this._originalVertices;
        for (var i = 0; i < locVertices.length; i++)locOriginalVertices[i] = locVertices[i];
        --this._reuseGrid
    }
}, calculateVertexPoints: function () {
    var width = this._texture.pixelsWidth;
    var height = this._texture.pixelsHeight;
    var imageH = this._texture.getContentSizeInPixels().height;
    var locGridSize =
        this._gridSize;
    var numQuads = locGridSize.width * locGridSize.height;
    this._vertices = new Float32Array(numQuads * 12);
    this._texCoordinates = new Float32Array(numQuads * 8);
    this._indices = new Uint16Array(numQuads * 6);
    var gl = cc._renderContext;
    if (this._verticesBuffer)gl.deleteBuffer(this._verticesBuffer);
    this._verticesBuffer = gl.createBuffer();
    if (this._texCoordinateBuffer)gl.deleteBuffer(this._texCoordinateBuffer);
    this._texCoordinateBuffer = gl.createBuffer();
    if (this._indicesBuffer)gl.deleteBuffer(this._indicesBuffer);
    this._indicesBuffer = gl.createBuffer();
    var x, y, i = 0;
    var locStep = this._step, locVertices = this._vertices, locTexCoords = this._texCoordinates, locIsTextureFlipped = this._isTextureFlipped;
    for (x = 0; x < locGridSize.width; x++)for (y = 0; y < locGridSize.height; y++) {
        var x1 = x * locStep.x;
        var x2 = x1 + locStep.x;
        var y1 = y * locStep.y;
        var y2 = y1 + locStep.y;
        locVertices[i * 12] = x1;
        locVertices[i * 12 + 1] = y1;
        locVertices[i * 12 + 2] = 0;
        locVertices[i * 12 + 3] = x2;
        locVertices[i * 12 + 4] = y1;
        locVertices[i * 12 + 5] = 0;
        locVertices[i * 12 + 6] = x1;
        locVertices[i * 12 + 7] = y2;
        locVertices[i * 12 + 8] = 0;
        locVertices[i * 12 + 9] = x2;
        locVertices[i * 12 + 10] = y2;
        locVertices[i * 12 + 11] = 0;
        var newY1 = y1;
        var newY2 = y2;
        if (locIsTextureFlipped) {
            newY1 = imageH - y1;
            newY2 = imageH - y2
        }
        locTexCoords[i * 8] = x1 / width;
        locTexCoords[i * 8 + 1] = newY1 / height;
        locTexCoords[i * 8 + 2] = x2 / width;
        locTexCoords[i * 8 + 3] = newY1 / height;
        locTexCoords[i * 8 + 4] = x1 / width;
        locTexCoords[i * 8 + 5] = newY2 / height;
        locTexCoords[i * 8 + 6] = x2 / width;
        locTexCoords[i * 8 + 7] = newY2 / height;
        i++
    }
    var locIndices = this._indices;
    for (x = 0; x < numQuads; x++) {
        locIndices[x * 6 + 0] = x * 4 + 0;
        locIndices[x * 6 + 1] = x * 4 + 1;
        locIndices[x * 6 + 2] = x * 4 + 2;
        locIndices[x * 6 + 3] = x * 4 + 1;
        locIndices[x * 6 + 4] = x * 4 + 2;
        locIndices[x * 6 + 5] = x * 4 + 3
    }
    this._originalVertices = new Float32Array(this._vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._verticesBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._vertices, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this._texCoordinateBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this._texCoordinates, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indicesBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
        this._indices, gl.DYNAMIC_DRAW);
    this._dirty = true
}});
cc.TiledGrid3D.create = function (gridSize, texture, flipped) {
    return new cc.TiledGrid3D(gridSize, texture, flipped)
};
cc.Grabber = cc.Class.extend({_FBO: null, _oldFBO: null, _oldClearColor: null, _gl: null, ctor: function () {
    cc._checkWebGLRenderMode();
    this._gl = cc._renderContext;
    this._oldClearColor = [0, 0, 0, 0];
    this._oldFBO = null;
    this._FBO = this._gl.createFramebuffer()
}, grab: function (texture) {
    var locGL = this._gl;
    this._oldFBO = locGL.getParameter(locGL.FRAMEBUFFER_BINDING);
    locGL.bindFramebuffer(locGL.FRAMEBUFFER, this._FBO);
    locGL.framebufferTexture2D(locGL.FRAMEBUFFER, locGL.COLOR_ATTACHMENT0, locGL.TEXTURE_2D, texture._webTextureObj, 0);
    var status = locGL.checkFramebufferStatus(locGL.FRAMEBUFFER);
    if (status != locGL.FRAMEBUFFER_COMPLETE)cc.log("Frame Grabber: could not attach texture to frmaebuffer");
    locGL.bindFramebuffer(locGL.FRAMEBUFFER, this._oldFBO)
}, beforeRender: function (texture) {
    var locGL = this._gl;
    this._oldFBO = locGL.getParameter(locGL.FRAMEBUFFER_BINDING);
    locGL.bindFramebuffer(locGL.FRAMEBUFFER, this._FBO);
    this._oldClearColor = locGL.getParameter(locGL.COLOR_CLEAR_VALUE);
    locGL.clearColor(0, 0, 0, 0);
    locGL.clear(locGL.COLOR_BUFFER_BIT |
        locGL.DEPTH_BUFFER_BIT)
}, afterRender: function (texture) {
    var locGL = this._gl;
    locGL.bindFramebuffer(locGL.FRAMEBUFFER, this._oldFBO);
    locGL.colorMask(true, true, true, true)
}, destroy: function () {
    this._gl.deleteFramebuffer(this._FBO)
}});cc.GridAction = cc.ActionInterval.extend({_gridSize: null, ctor: function (duration, gridSize) {
    cc._checkWebGLRenderMode();
    cc.ActionInterval.prototype.ctor.call(this);
    this._gridSize = cc.size(0, 0);
    gridSize && this.initWithDuration(duration, gridSize)
}, clone: function () {
    var action = new cc.GridAction;
    var locGridSize = this._gridSize;
    action.initWithDuration(this._duration, cc.size(locGridSize.width, locGridSize.height));
    return action
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this,
        target);
    var newGrid = this.getGrid();
    var t = this.target;
    var targetGrid = t.grid;
    if (targetGrid && targetGrid.getReuseGrid() > 0) {
        var locGridSize = targetGrid.getGridSize();
        if (targetGrid.isActive() && locGridSize.width == this._gridSize.width && locGridSize.height == this._gridSize.height)targetGrid.reuse()
    } else {
        if (targetGrid && targetGrid.isActive())targetGrid.setActive(false);
        t.grid = newGrid;
        t.grid.setActive(true)
    }
}, reverse: function () {
    return cc.ReverseTime.create(this)
}, initWithDuration: function (duration, gridSize) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this,
        duration)) {
        this._gridSize.width = gridSize.width;
        this._gridSize.height = gridSize.height;
        return true
    }
    return false
}, getGrid: function () {
    cc.log("cc.GridAction.getGrid(): it should be overridden in subclass.")
}});
cc.GridAction.create = function (duration, gridSize) {
    return new cc.GridAction(duration, gridSize)
};
cc.Grid3DAction = cc.GridAction.extend({getGrid: function () {
    return cc.Grid3D.create(this._gridSize)
}, vertex: function (position) {
    return this.target.grid.vertex(position)
}, originalVertex: function (position) {
    return this.target.grid.originalVertex(position)
}, setVertex: function (position, vertex) {
    this.target.grid.setVertex(position, vertex)
}});
cc.Grid3DAction.create = function (duration, gridSize) {
    return new cc.Grid3DAction(duration, gridSize)
};
cc.TiledGrid3DAction = cc.GridAction.extend({tile: function (position) {
    return this.target.grid.tile(position)
}, originalTile: function (position) {
    return this.target.grid.originalTile(position)
}, setTile: function (position, coords) {
    this.target.grid.setTile(position, coords)
}, getGrid: function () {
    return cc.TiledGrid3D.create(this._gridSize)
}});
cc.TiledGrid3DAction.create = function (duration, gridSize) {
    return new cc.TiledGrid3DAction(duration, gridSize)
};
cc.StopGrid = cc.ActionInstant.extend({startWithTarget: function (target) {
    cc.ActionInstant.prototype.startWithTarget.call(this, target);
    var grid = this.target.grid;
    if (grid && grid.isActive())grid.setActive(false)
}});
cc.StopGrid.create = function () {
    return new cc.StopGrid
};
cc.ReuseGrid = cc.ActionInstant.extend({_times: null, ctor: function (times) {
    cc.ActionInstant.prototype.ctor.call(this);
    times !== undefined && this.initWithTimes(times)
}, initWithTimes: function (times) {
    this._times = times;
    return true
}, startWithTarget: function (target) {
    cc.ActionInstant.prototype.startWithTarget.call(this, target);
    if (this.target.grid && this.target.grid.isActive())this.target.grid.setReuseGrid(this.target.grid.getReuseGrid() + this._times)
}});
cc.ReuseGrid.create = function (times) {
    return new cc.ReuseGrid(times)
};
cc.Waves3D = cc.Grid3DAction.extend({_waves: 0, _amplitude: 0, _amplitudeRate: 0, ctor: function (duration, gridSize, waves, amplitude) {
    cc.GridAction.prototype.ctor.call(this);
    amplitude !== undefined && this.initWithDuration(duration, gridSize, waves, amplitude)
}, getAmplitude: function () {
    return this._amplitude
}, setAmplitude: function (amplitude) {
    this._amplitude = amplitude
}, getAmplitudeRate: function () {
    return this._amplitudeRate
}, setAmplitudeRate: function (amplitudeRate) {
    this._amplitudeRate = amplitudeRate
}, initWithDuration: function (duration, gridSize, waves, amplitude) {
    if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._waves = waves;
        this._amplitude = amplitude;
        this._amplitudeRate = 1;
        return true
    }
    return false
}, update: function (time) {
    var locGridSize = this._gridSize;
    var locAmplitude = this._amplitude, locPos = cc.p(0, 0);
    var locAmplitudeRate = this._amplitudeRate, locWaves = this._waves;
    for (var i = 0; i < locGridSize.width + 1; ++i)for (var j = 0; j < locGridSize.height + 1; ++j) {
        locPos.x = i;
        locPos.y = j;
        var v = this.originalVertex(locPos);
        v.z += Math.sin(Math.PI *
            time * locWaves * 2 + (v.y + v.x) * 0.01) * locAmplitude * locAmplitudeRate;
        this.setVertex(locPos, v)
    }
}});
cc.Waves3D.create = function (duration, gridSize, waves, amplitude) {
    return new cc.Waves3D(duration, gridSize, waves, amplitude)
};
cc.FlipX3D = cc.Grid3DAction.extend({ctor: function (duration) {
    if (duration !== undefined)cc.GridAction.prototype.ctor.call(this, duration, cc.size(1, 1)); else cc.GridAction.prototype.ctor.call(this)
}, initWithDuration: function (duration) {
    return cc.Grid3DAction.prototype.initWithDuration.call(this, duration, cc.size(1, 1))
}, initWithSize: function (gridSize, duration) {
    if (gridSize.width != 1 || gridSize.height != 1) {
        cc.log("Grid size must be (1,1)");
        return false
    }
    return cc.Grid3DAction.prototype.initWithDuration.call(this,
        duration, gridSize)
}, update: function (time) {
    var angle = Math.PI * time;
    var mz = Math.sin(angle);
    angle = angle / 2;
    var mx = Math.cos(angle);
    var diff = new cc.Vertex3F;
    var tempVer = cc.p(0, 0);
    tempVer.x = tempVer.y = 1;
    var v0 = this.originalVertex(tempVer);
    tempVer.x = tempVer.y = 0;
    var v1 = this.originalVertex(tempVer);
    var x0 = v0.x;
    var x1 = v1.x;
    var x;
    var a, b, c, d;
    if (x0 > x1) {
        a = cc.p(0, 0);
        b = cc.p(0, 1);
        c = cc.p(1, 0);
        d = cc.p(1, 1);
        x = x0
    } else {
        c = cc.p(0, 0);
        d = cc.p(0, 1);
        a = cc.p(1, 0);
        b = cc.p(1, 1);
        x = x1
    }
    diff.x = x - x * mx;
    diff.z = Math.abs(parseFloat(x * mz / 4));
    var v = this.originalVertex(a);
    v.x = diff.x;
    v.z += diff.z;
    this.setVertex(a, v);
    v = this.originalVertex(b);
    v.x = diff.x;
    v.z += diff.z;
    this.setVertex(b, v);
    v = this.originalVertex(c);
    v.x -= diff.x;
    v.z -= diff.z;
    this.setVertex(c, v);
    v = this.originalVertex(d);
    v.x -= diff.x;
    v.z -= diff.z;
    this.setVertex(d, v)
}});
cc.FlipX3D.create = function (duration) {
    return new cc.FlipX3D(duration)
};
cc.FlipY3D = cc.FlipX3D.extend({ctor: function (duration) {
    if (duration !== undefined)cc.GridAction.prototype.ctor.call(this, duration, cc.size(1, 1)); else cc.GridAction.prototype.ctor.call(this)
}, update: function (time) {
    var angle = Math.PI * time;
    var mz = Math.sin(angle);
    angle = angle / 2;
    var my = Math.cos(angle);
    var diff = new cc.Vertex3F;
    var tempP = cc.p(0, 0);
    tempP.x = tempP.y = 1;
    var v0 = this.originalVertex(tempP);
    tempP.x = tempP.y = 0;
    var v1 = this.originalVertex(tempP);
    var y0 = v0.y;
    var y1 = v1.y;
    var y;
    var a, b, c, d;
    if (y0 > y1) {
        a = cc.p(0,
            0);
        b = cc.p(0, 1);
        c = cc.p(1, 0);
        d = cc.p(1, 1);
        y = y0
    } else {
        b = cc.p(0, 0);
        a = cc.p(0, 1);
        d = cc.p(1, 0);
        c = cc.p(1, 1);
        y = y1
    }
    diff.y = y - y * my;
    diff.z = Math.abs(parseFloat(y * mz) / 4);
    var v = this.originalVertex(a);
    v.y = diff.y;
    v.z += diff.z;
    this.setVertex(a, v);
    v = this.originalVertex(b);
    v.y -= diff.y;
    v.z -= diff.z;
    this.setVertex(b, v);
    v = this.originalVertex(c);
    v.y = diff.y;
    v.z += diff.z;
    this.setVertex(c, v);
    v = this.originalVertex(d);
    v.y -= diff.y;
    v.z -= diff.z;
    this.setVertex(d, v)
}});
cc.FlipY3D.create = function (duration) {
    return new cc.FlipY3D(duration)
};
cc.Lens3D = cc.Grid3DAction.extend({_position: null, _radius: 0, _lensEffect: 0, _concave: false, _dirty: false, ctor: function (duration, gridSize, position, radius) {
    cc.GridAction.prototype.ctor.call(this);
    this._position = cc.p(0, 0);
    radius !== undefined && this.initWithDuration(duration, gridSize, position, radius)
}, getLensEffect: function () {
    return this._lensEffect
}, setLensEffect: function (lensEffect) {
    this._lensEffect = lensEffect
}, setConcave: function (concave) {
    this._concave = concave
}, getPosition: function () {
    return this._position
},
    setPosition: function (position) {
        if (!cc.pointEqualToPoint(position, this._position)) {
            this._position.x = position.x;
            this._position.y = position.y;
            this._dirty = true
        }
    }, initWithDuration: function (duration, gridSize, position, radius) {
        if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
            this.setPosition(position);
            this._radius = radius;
            this._lensEffect = 0.7;
            this._dirty = true;
            return true
        }
        return false
    }, update: function (time) {
        if (this._dirty) {
            var locGridSizeWidth = this._gridSize.width, locGridSizeHeight =
                this._gridSize.height;
            var locRadius = this._radius, locLensEffect = this._lensEffect;
            var locPos = cc.p(0, 0);
            var vect = cc.p(0, 0);
            var v, r, l, new_r, pre_log;
            for (var i = 0; i < locGridSizeWidth + 1; ++i)for (var j = 0; j < locGridSizeHeight + 1; ++j) {
                locPos.x = i;
                locPos.y = j;
                v = this.originalVertex(locPos);
                vect.x = this._position.x - v.x;
                vect.y = this._position.y - v.y;
                r = cc.pLength(vect);
                if (r < locRadius) {
                    r = locRadius - r;
                    pre_log = r / locRadius;
                    if (pre_log == 0)pre_log = 0.001;
                    l = Math.log(pre_log) * locLensEffect;
                    new_r = Math.exp(l) * locRadius;
                    r = cc.pLength(vect);
                    if (r > 0) {
                        vect.x = vect.x / r;
                        vect.y = vect.y / r;
                        vect.x = vect.x * new_r;
                        vect.y = vect.y * new_r;
                        v.z += cc.pLength(vect) * locLensEffect
                    }
                }
                this.setVertex(locPos, v)
            }
            this._dirty = false
        }
    }});
cc.Lens3D.create = function (duration, gridSize, position, radius) {
    return new cc.Lens3D(duration, gridSize, position, radius)
};
cc.Ripple3D = cc.Grid3DAction.extend({_position: null, _radius: 0, _waves: 0, _amplitude: 0, _amplitudeRate: 0, ctor: function (duration, gridSize, position, radius, waves, amplitude) {
    cc.GridAction.prototype.ctor.call(this);
    this._position = cc.p(0, 0);
    amplitude !== undefined && this.initWithDuration(duration, gridSize, position, radius, waves, amplitude)
}, getPosition: function () {
    return this._position
}, setPosition: function (position) {
    this._position.x = position.x;
    this._position.y = position.y
}, getAmplitude: function () {
    return this._amplitude
},
    setAmplitude: function (amplitude) {
        this._amplitude = amplitude
    }, getAmplitudeRate: function () {
        return this._amplitudeRate
    }, setAmplitudeRate: function (amplitudeRate) {
        this._amplitudeRate = amplitudeRate
    }, initWithDuration: function (duration, gridSize, position, radius, waves, amplitude) {
        if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
            this.setPosition(position);
            this._radius = radius;
            this._waves = waves;
            this._amplitude = amplitude;
            this._amplitudeRate = 1;
            return true
        }
        return false
    }, update: function (time) {
        var locGridSizeWidth =
            this._gridSize.width, locGridSizeHeight = this._gridSize.height;
        var locPos = cc.p(0, 0), locRadius = this._radius;
        var locWaves = this._waves, locAmplitude = this._amplitude, locAmplitudeRate = this._amplitudeRate;
        var v, r, tempPos = cc.p(0, 0);
        for (var i = 0; i < locGridSizeWidth + 1; ++i)for (var j = 0; j < locGridSizeHeight + 1; ++j) {
            locPos.x = i;
            locPos.y = j;
            v = this.originalVertex(locPos);
            tempPos.x = this._position.x - v.x;
            tempPos.y = this._position.y - v.y;
            r = cc.pLength(tempPos);
            if (r < locRadius) {
                r = locRadius - r;
                var rate = Math.pow(r / locRadius, 2);
                v.z +=
                    Math.sin(time * Math.PI * locWaves * 2 + r * 0.1) * locAmplitude * locAmplitudeRate * rate
            }
            this.setVertex(locPos, v)
        }
    }});
cc.Ripple3D.create = function (duration, gridSize, position, radius, waves, amplitude) {
    return new cc.Ripple3D(duration, gridSize, position, radius, waves, amplitude)
};
cc.Shaky3D = cc.Grid3DAction.extend({_randRange: 0, _shakeZ: false, ctor: function (duration, gridSize, range, shakeZ) {
    cc.GridAction.prototype.ctor.call(this);
    shakeZ !== undefined && this.initWithDuration(duration, gridSize, range, shakeZ)
}, initWithDuration: function (duration, gridSize, range, shakeZ) {
    if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._randRange = range;
        this._shakeZ = shakeZ;
        return true
    }
    return false
}, update: function (time) {
    var locGridSizeWidth = this._gridSize.width, locGridSizeHeight =
        this._gridSize.height;
    var locRandRange = this._randRange, locShakeZ = this._shakeZ, locP = cc.p(0, 0);
    var v;
    for (var i = 0; i < locGridSizeWidth + 1; ++i)for (var j = 0; j < locGridSizeHeight + 1; ++j) {
        locP.x = i;
        locP.y = j;
        v = this.originalVertex(locP);
        v.x += cc.rand() % (locRandRange * 2) - locRandRange;
        v.y += cc.rand() % (locRandRange * 2) - locRandRange;
        if (locShakeZ)v.z += cc.rand() % (locRandRange * 2) - locRandRange;
        this.setVertex(locP, v)
    }
}});
cc.Shaky3D.create = function (duration, gridSize, range, shakeZ) {
    return new cc.Shaky3D(duration, gridSize, range, shakeZ)
};
cc.Liquid = cc.Grid3DAction.extend({_waves: 0, _amplitude: 0, _amplitudeRate: 0, ctor: function (duration, gridSize, waves, amplitude) {
    cc.GridAction.prototype.ctor.call(this);
    amplitude !== undefined && this.initWithDuration(duration, gridSize, waves, amplitude)
}, getAmplitude: function () {
    return this._amplitude
}, setAmplitude: function (amplitude) {
    this._amplitude = amplitude
}, getAmplitudeRate: function () {
    return this._amplitudeRate
}, setAmplitudeRate: function (amplitudeRate) {
    this._amplitudeRate = amplitudeRate
}, initWithDuration: function (duration, gridSize, waves, amplitude) {
    if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._waves = waves;
        this._amplitude = amplitude;
        this._amplitudeRate = 1;
        return true
    }
    return false
}, update: function (time) {
    var locSizeWidth = this._gridSize.width, locSizeHeight = this._gridSize.height, locPos = cc.p(0, 0);
    var locWaves = this._waves, locAmplitude = this._amplitude, locAmplitudeRate = this._amplitudeRate;
    var v;
    for (var i = 1; i < locSizeWidth; ++i)for (var j = 1; j < locSizeHeight; ++j) {
        locPos.x = i;
        locPos.y = j;
        v = this.originalVertex(locPos);
        v.x = v.x + Math.sin(time * Math.PI * locWaves * 2 + v.x * 0.01) * locAmplitude * locAmplitudeRate;
        v.y = v.y + Math.sin(time * Math.PI * locWaves * 2 + v.y * 0.01) * locAmplitude * locAmplitudeRate;
        this.setVertex(locPos, v)
    }
}});
cc.Liquid.create = function (duration, gridSize, waves, amplitude) {
    return new cc.Liquid(duration, gridSize, waves, amplitude)
};
cc.Waves = cc.Grid3DAction.extend({_waves: 0, _amplitude: 0, _amplitudeRate: 0, _vertical: false, _horizontal: false, ctor: function (duration, gridSize, waves, amplitude, horizontal, vertical) {
    cc.GridAction.prototype.ctor.call(this);
    vertical !== undefined && this.initWithDuration(duration, gridSize, waves, amplitude, horizontal, vertical)
}, getAmplitude: function () {
    return this._amplitude
}, setAmplitude: function (amplitude) {
    this._amplitude = amplitude
}, getAmplitudeRate: function () {
    return this._amplitudeRate
}, setAmplitudeRate: function (amplitudeRate) {
    this._amplitudeRate =
        amplitudeRate
}, initWithDuration: function (duration, gridSize, waves, amplitude, horizontal, vertical) {
    if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._waves = waves;
        this._amplitude = amplitude;
        this._amplitudeRate = 1;
        this._horizontal = horizontal;
        this._vertical = vertical;
        return true
    }
    return false
}, update: function (time) {
    var locSizeWidth = this._gridSize.width, locSizeHeight = this._gridSize.height, locPos = cc.p(0, 0);
    var locVertical = this._vertical, locHorizontal = this._horizontal;
    var locWaves =
        this._waves, locAmplitude = this._amplitude, locAmplitudeRate = this._amplitudeRate;
    var v;
    for (var i = 0; i < locSizeWidth + 1; ++i)for (var j = 0; j < locSizeHeight + 1; ++j) {
        locPos.x = i;
        locPos.y = j;
        v = this.originalVertex(locPos);
        if (locVertical)v.x = v.x + Math.sin(time * Math.PI * locWaves * 2 + v.y * 0.01) * locAmplitude * locAmplitudeRate;
        if (locHorizontal)v.y = v.y + Math.sin(time * Math.PI * locWaves * 2 + v.x * 0.01) * locAmplitude * locAmplitudeRate;
        this.setVertex(locPos, v)
    }
}});
cc.Waves.create = function (duration, gridSize, waves, amplitude, horizontal, vertical) {
    return new cc.Waves(duration, gridSize, waves, amplitude, horizontal, vertical)
};
cc.Twirl = cc.Grid3DAction.extend({_position: null, _twirls: 0, _amplitude: 0, _amplitudeRate: 0, ctor: function (duration, gridSize, position, twirls, amplitude) {
    cc.GridAction.prototype.ctor.call(this);
    this._position = cc.p(0, 0);
    amplitude !== undefined && this.initWithDuration(duration, gridSize, position, twirls, amplitude)
}, getPosition: function () {
    return this._position
}, setPosition: function (position) {
    this._position.x = position.x;
    this._position.y = position.y
}, getAmplitude: function () {
    return this._amplitude
}, setAmplitude: function (amplitude) {
    this._amplitude =
        amplitude
}, getAmplitudeRate: function () {
    return this._amplitudeRate
}, setAmplitudeRate: function (amplitudeRate) {
    this._amplitudeRate = amplitudeRate
}, initWithDuration: function (duration, gridSize, position, twirls, amplitude) {
    if (cc.Grid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this.setPosition(position);
        this._twirls = twirls;
        this._amplitude = amplitude;
        this._amplitudeRate = 1;
        return true
    }
    return false
}, update: function (time) {
    var c = this._position;
    var locSizeWidth = this._gridSize.width, locSizeHeight =
        this._gridSize.height, locPos = cc.p(0, 0);
    var amp = 0.1 * this._amplitude * this._amplitudeRate;
    var locTwirls = this._twirls;
    var v, a, dX, dY, avg = cc.p(0, 0);
    for (var i = 0; i < locSizeWidth + 1; ++i)for (var j = 0; j < locSizeHeight + 1; ++j) {
        locPos.x = i;
        locPos.y = j;
        v = this.originalVertex(locPos);
        avg.x = i - locSizeWidth / 2;
        avg.y = j - locSizeHeight / 2;
        a = cc.pLength(avg) * Math.cos(Math.PI / 2 + time * Math.PI * locTwirls * 2) * amp;
        dX = Math.sin(a) * (v.y - c.y) + Math.cos(a) * (v.x - c.x);
        dY = Math.cos(a) * (v.y - c.y) - Math.sin(a) * (v.x - c.x);
        v.x = c.x + dX;
        v.y = c.y + dY;
        this.setVertex(locPos,
            v)
    }
}});
cc.Twirl.create = function (duration, gridSize, position, twirls, amplitude) {
    return new cc.Twirl(duration, gridSize, position, twirls, amplitude)
};
cc.ShakyTiles3D = cc.TiledGrid3DAction.extend({_randRange: 0, _shakeZ: false, ctor: function (duration, gridSize, range, shakeZ) {
    cc.GridAction.prototype.ctor.call(this);
    shakeZ !== undefined && this.initWithDuration(duration, gridSize, range, shakeZ)
}, initWithDuration: function (duration, gridSize, range, shakeZ) {
    if (cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._randRange = range;
        this._shakeZ = shakeZ;
        return true
    }
    return false
}, update: function (time) {
    var locGridSize = this._gridSize, locRandRange =
        this._randRange;
    var locPos = cc.p(0, 0);
    for (var i = 0; i < locGridSize.width; ++i)for (var j = 0; j < locGridSize.height; ++j) {
        locPos.x = i;
        locPos.y = j;
        var coords = this.originalTile(locPos);
        coords.bl.x += cc.rand() % (locRandRange * 2) - locRandRange;
        coords.br.x += cc.rand() % (locRandRange * 2) - locRandRange;
        coords.tl.x += cc.rand() % (locRandRange * 2) - locRandRange;
        coords.tr.x += cc.rand() % (locRandRange * 2) - locRandRange;
        coords.bl.y += cc.rand() % (locRandRange * 2) - locRandRange;
        coords.br.y += cc.rand() % (locRandRange * 2) - locRandRange;
        coords.tl.y +=
            cc.rand() % (locRandRange * 2) - locRandRange;
        coords.tr.y += cc.rand() % (locRandRange * 2) - locRandRange;
        if (this._shakeZ) {
            coords.bl.z += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.br.z += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.tl.z += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.tr.z += cc.rand() % (locRandRange * 2) - locRandRange
        }
        this.setTile(locPos, coords)
    }
}});
cc.ShakyTiles3D.create = function (duration, gridSize, range, shakeZ) {
    return new cc.ShakyTiles3D(duration, gridSize, range, shakeZ)
};
cc.ShatteredTiles3D = cc.TiledGrid3DAction.extend({_randRange: 0, _once: false, _shatterZ: false, ctor: function (duration, gridSize, range, shatterZ) {
    cc.GridAction.prototype.ctor.call(this);
    shatterZ !== undefined && this.initWithDuration(duration, gridSize, range, shatterZ)
}, initWithDuration: function (duration, gridSize, range, shatterZ) {
    if (cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._once = false;
        this._randRange = range;
        this._shatterZ = shatterZ;
        return true
    }
    return false
}, update: function (time) {
    if (this._once ===
        false) {
        var locGridSize = this._gridSize, locRandRange = this._randRange;
        var coords, locPos = cc.p(0, 0);
        for (var i = 0; i < locGridSize.width; ++i)for (var j = 0; j < locGridSize.height; ++j) {
            locPos.x = i;
            locPos.y = j;
            coords = this.originalTile(locPos);
            coords.bl.x += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.br.x += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.tl.x += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.tr.x += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.bl.y += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.br.y +=
                cc.rand() % (locRandRange * 2) - locRandRange;
            coords.tl.y += cc.rand() % (locRandRange * 2) - locRandRange;
            coords.tr.y += cc.rand() % (locRandRange * 2) - locRandRange;
            if (this._shatterZ) {
                coords.bl.z += cc.rand() % (locRandRange * 2) - locRandRange;
                coords.br.z += cc.rand() % (locRandRange * 2) - locRandRange;
                coords.tl.z += cc.rand() % (locRandRange * 2) - locRandRange;
                coords.tr.z += cc.rand() % (locRandRange * 2) - locRandRange
            }
            this.setTile(locPos, coords)
        }
        this._once = true
    }
}});
cc.ShatteredTiles3D.create = function (duration, gridSize, range, shatterZ) {
    return new cc.ShatteredTiles3D(duration, gridSize, range, shatterZ)
};
cc.Tile = function (position, startPosition, delta) {
    this.position = position || cc.p(0, 0);
    this.startPosition = startPosition || cc.p(0, 0);
    this.delta = delta || cc.p(0, 0)
};
cc.ShuffleTiles = cc.TiledGrid3DAction.extend({_seed: 0, _tilesCount: 0, _tilesOrder: null, _tiles: null, ctor: function (duration, gridSize, seed) {
    cc.GridAction.prototype.ctor.call(this);
    this._tilesOrder = [];
    this._tiles = [];
    seed !== undefined && this.initWithDuration(duration, gridSize, seed)
}, initWithDuration: function (duration, gridSize, seed) {
    if (cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._seed = seed;
        this._tilesOrder.length = 0;
        this._tiles.length = 0;
        return true
    }
    return false
}, shuffle: function (array, len) {
    for (var i = len - 1; i >= 0; i--) {
        var j = 0 | cc.rand() % (i + 1);
        var v = array[i];
        array[i] = array[j];
        array[j] = v
    }
}, getDelta: function (pos) {
    var locGridSize = this._gridSize;
    var idx = pos.width * locGridSize.height + pos.height;
    return cc.size(this._tilesOrder[idx] / locGridSize.height - pos.width, this._tilesOrder[idx] % locGridSize.height - pos.height)
}, placeTile: function (pos, tile) {
    var coords = this.originalTile(pos);
    var step = this.target.grid.getStep();
    var locPosition = tile.position;
    coords.bl.x += locPosition.x * step.x;
    coords.bl.y += locPosition.y *
        step.y;
    coords.br.x += locPosition.x * step.x;
    coords.br.y += locPosition.y * step.y;
    coords.tl.x += locPosition.x * step.x;
    coords.tl.y += locPosition.y * step.y;
    coords.tr.x += locPosition.x * step.x;
    coords.tr.y += locPosition.y * step.y;
    this.setTile(pos, coords)
}, startWithTarget: function (target) {
    cc.TiledGrid3DAction.prototype.startWithTarget.call(this, target);
    var locGridSize = this._gridSize;
    this._tilesCount = locGridSize.width * locGridSize.height;
    var locTilesOrder = this._tilesOrder;
    locTilesOrder.length = 0;
    for (var k = 0; k < this._tilesCount; ++k)locTilesOrder[k] =
        k;
    this.shuffle(locTilesOrder, this._tilesCount);
    var locTiles = this._tiles;
    locTiles.length = 0;
    var tileIndex = 0, tempSize = cc.size(0, 0);
    for (var i = 0; i < locGridSize.width; ++i)for (var j = 0; j < locGridSize.height; ++j) {
        locTiles[tileIndex] = new cc.Tile;
        locTiles[tileIndex].position = cc.p(i, j);
        locTiles[tileIndex].startPosition = cc.p(i, j);
        tempSize.width = i;
        tempSize.height = j;
        locTiles[tileIndex].delta = this.getDelta(tempSize);
        ++tileIndex
    }
}, update: function (time) {
    var tileIndex = 0, locGridSize = this._gridSize, locTiles = this._tiles;
    var selTile, locPos = cc.p(0, 0);
    for (var i = 0; i < locGridSize.width; ++i)for (var j = 0; j < locGridSize.height; ++j) {
        locPos.x = i;
        locPos.y = j;
        selTile = locTiles[tileIndex];
        selTile.position.x = selTile.delta.width * time;
        selTile.position.y = selTile.delta.height * time;
        this.placeTile(locPos, selTile);
        ++tileIndex
    }
}});
cc.ShuffleTiles.create = function (duration, gridSize, seed) {
    return new cc.ShuffleTiles(duration, gridSize, seed)
};
cc.FadeOutTRTiles = cc.TiledGrid3DAction.extend({testFunc: function (pos, time) {
    var locX = this._gridSize.width * time;
    var locY = this._gridSize.height * time;
    if (locX + locY == 0)return 1;
    return Math.pow((pos.width + pos.height) / (locX + locY), 6)
}, turnOnTile: function (pos) {
    this.setTile(pos, this.originalTile(pos))
}, turnOffTile: function (pos) {
    this.setTile(pos, new cc.Quad3)
}, transformTile: function (pos, distance) {
    var coords = this.originalTile(pos);
    var step = this.target.grid.getStep();
    coords.bl.x += step.x / 2 * (1 - distance);
    coords.bl.y +=
        step.y / 2 * (1 - distance);
    coords.br.x -= step.x / 2 * (1 - distance);
    coords.br.y += step.y / 2 * (1 - distance);
    coords.tl.x += step.x / 2 * (1 - distance);
    coords.tl.y -= step.y / 2 * (1 - distance);
    coords.tr.x -= step.x / 2 * (1 - distance);
    coords.tr.y -= step.y / 2 * (1 - distance);
    this.setTile(pos, coords)
}, update: function (time) {
    var locGridSize = this._gridSize;
    var locPos = cc.p(0, 0), locSize = cc.size(0, 0), distance;
    for (var i = 0; i < locGridSize.width; ++i)for (var j = 0; j < locGridSize.height; ++j) {
        locPos.x = i;
        locPos.y = j;
        locSize.width = i;
        locSize.height = j;
        distance = this.testFunc(locSize,
            time);
        if (distance == 0)this.turnOffTile(locPos); else if (distance < 1)this.transformTile(locPos, distance); else this.turnOnTile(locPos)
    }
}});
cc.FadeOutTRTiles.create = function (duration, gridSize) {
    return new cc.FadeOutTRTiles(duration, gridSize)
};
cc.FadeOutBLTiles = cc.FadeOutTRTiles.extend({testFunc: function (pos, time) {
    var locX = this._gridSize.width * (1 - time);
    var locY = this._gridSize.height * (1 - time);
    if (pos.width + pos.height == 0)return 1;
    return Math.pow((locX + locY) / (pos.width + pos.height), 6)
}});
cc.FadeOutBLTiles.create = function (duration, gridSize) {
    return new cc.FadeOutBLTiles(duration, gridSize)
};
cc.FadeOutUpTiles = cc.FadeOutTRTiles.extend({testFunc: function (pos, time) {
    var locY = this._gridSize.height * time;
    if (locY == 0)return 1;
    return Math.pow(pos.height / locY, 6)
}, transformTile: function (pos, distance) {
    var coords = this.originalTile(pos);
    var step = this.target.grid.getStep();
    coords.bl.y += step.y / 2 * (1 - distance);
    coords.br.y += step.y / 2 * (1 - distance);
    coords.tl.y -= step.y / 2 * (1 - distance);
    coords.tr.y -= step.y / 2 * (1 - distance);
    this.setTile(pos, coords)
}});
cc.FadeOutUpTiles.create = function (duration, gridSize) {
    return new cc.FadeOutUpTiles(duration, gridSize)
};
cc.FadeOutDownTiles = cc.FadeOutUpTiles.extend({testFunc: function (pos, time) {
    var locY = this._gridSize.height * (1 - time);
    if (pos.height == 0)return 1;
    return Math.pow(locY / pos.height, 6)
}});
cc.FadeOutDownTiles.create = function (duration, gridSize) {
    return new cc.FadeOutDownTiles(duration, gridSize)
};
cc.TurnOffTiles = cc.TiledGrid3DAction.extend({_seed: null, _tilesCount: 0, _tilesOrder: null, ctor: function (duration, gridSize, seed) {
    cc.GridAction.prototype.ctor.call(this);
    this._tilesOrder = [];
    gridSize !== undefined && this.initWithDuration(duration, gridSize, seed)
}, initWithDuration: function (duration, gridSize, seed) {
    if (cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._seed = seed || 0;
        this._tilesOrder.length = 0;
        return true
    }
    return false
}, shuffle: function (array, len) {
    for (var i = len - 1; i >=
        0; i--) {
        var j = 0 | cc.rand() % (i + 1);
        var v = array[i];
        array[i] = array[j];
        array[j] = v
    }
}, turnOnTile: function (pos) {
    this.setTile(pos, this.originalTile(pos))
}, turnOffTile: function (pos) {
    this.setTile(pos, new cc.Quad3)
}, startWithTarget: function (target) {
    cc.TiledGrid3DAction.prototype.startWithTarget.call(this, target);
    this._tilesCount = this._gridSize.width * this._gridSize.height;
    var locTilesOrder = this._tilesOrder;
    locTilesOrder.length = 0;
    for (var i = 0; i < this._tilesCount; ++i)locTilesOrder[i] = i;
    this.shuffle(locTilesOrder, this._tilesCount)
},
    update: function (time) {
        var l = 0 | time * this._tilesCount, locGridSize = this._gridSize;
        var t, tilePos = cc.p(0, 0), locTilesOrder = this._tilesOrder;
        for (var i = 0; i < this._tilesCount; i++) {
            t = locTilesOrder[i];
            tilePos.x = 0 | t / locGridSize.height;
            tilePos.y = t % (0 | locGridSize.height);
            if (i < l)this.turnOffTile(tilePos); else this.turnOnTile(tilePos)
        }
    }});
cc.TurnOffTiles.create = function (duration, gridSize, seed) {
    return new cc.TurnOffTiles(duration, gridSize, seed)
};
cc.WavesTiles3D = cc.TiledGrid3DAction.extend({_waves: 0, _amplitude: 0, _amplitudeRate: 0, ctor: function (duration, gridSize, waves, amplitude) {
    cc.GridAction.prototype.ctor.call(this);
    amplitude !== undefined && this.initWithDuration(duration, gridSize, waves, amplitude)
}, getAmplitude: function () {
    return this._amplitude
}, setAmplitude: function (amplitude) {
    this._amplitude = amplitude
}, getAmplitudeRate: function () {
    return this._amplitudeRate
}, setAmplitudeRate: function (amplitudeRate) {
    this._amplitudeRate = amplitudeRate
}, initWithDuration: function (duration, gridSize, waves, amplitude) {
    if (cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
        this._waves = waves;
        this._amplitude = amplitude;
        this._amplitudeRate = 1;
        return true
    }
    return false
}, update: function (time) {
    var locGridSize = this._gridSize, locWaves = this._waves, locAmplitude = this._amplitude, locAmplitudeRate = this._amplitudeRate;
    var locPos = cc.p(0, 0), coords;
    for (var i = 0; i < locGridSize.width; i++)for (var j = 0; j < locGridSize.height; j++) {
        locPos.x = i;
        locPos.y = j;
        coords = this.originalTile(locPos);
        coords.bl.z =
            Math.sin(time * Math.PI * locWaves * 2 + (coords.bl.y + coords.bl.x) * 0.01) * locAmplitude * locAmplitudeRate;
        coords.br.z = coords.bl.z;
        coords.tl.z = coords.bl.z;
        coords.tr.z = coords.bl.z;
        this.setTile(locPos, coords)
    }
}});
cc.WavesTiles3D.create = function (duration, gridSize, waves, amplitude) {
    return new cc.WavesTiles3D(duration, gridSize, waves, amplitude)
};
cc.JumpTiles3D = cc.TiledGrid3DAction.extend({_jumps: 0, _amplitude: 0, _amplitudeRate: 0, ctor: function (duration, gridSize, numberOfJumps, amplitude) {
    cc.GridAction.prototype.ctor.call(this);
    amplitude !== undefined && this.initWithDuration(duration, gridSize, numberOfJumps, amplitude)
}, getAmplitude: function () {
    return this._amplitude
}, setAmplitude: function (amplitude) {
    this._amplitude = amplitude
}, getAmplitudeRate: function () {
    return this._amplitudeRate
}, setAmplitudeRate: function (amplitudeRate) {
    this._amplitudeRate = amplitudeRate
},
    initWithDuration: function (duration, gridSize, numberOfJumps, amplitude) {
        if (cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, gridSize)) {
            this._jumps = numberOfJumps;
            this._amplitude = amplitude;
            this._amplitudeRate = 1;
            return true
        }
        return false
    }, update: function (time) {
        var sinz = Math.sin(Math.PI * time * this._jumps * 2) * this._amplitude * this._amplitudeRate;
        var sinz2 = Math.sin(Math.PI * (time * this._jumps * 2 + 1)) * this._amplitude * this._amplitudeRate;
        var locGridSize = this._gridSize;
        var locGrid = this.target.grid;
        var coords, locPos = cc.p(0, 0);
        for (var i = 0; i < locGridSize.width; i++)for (var j = 0; j < locGridSize.height; j++) {
            locPos.x = i;
            locPos.y = j;
            coords = locGrid.originalTile(locPos);
            if ((i + j) % 2 == 0) {
                coords.bl.z += sinz;
                coords.br.z += sinz;
                coords.tl.z += sinz;
                coords.tr.z += sinz
            } else {
                coords.bl.z += sinz2;
                coords.br.z += sinz2;
                coords.tl.z += sinz2;
                coords.tr.z += sinz2
            }
            locGrid.setTile(locPos, coords)
        }
    }});
cc.JumpTiles3D.create = function (duration, gridSize, numberOfJumps, amplitude) {
    return new cc.JumpTiles3D(duration, gridSize, numberOfJumps, amplitude)
};
cc.SplitRows = cc.TiledGrid3DAction.extend({_rows: 0, _winSize: null, ctor: function (duration, rows) {
    cc.GridAction.prototype.ctor.call(this);
    rows !== undefined && this.initWithDuration(duration, rows)
}, initWithDuration: function (duration, rows) {
    this._rows = rows;
    return cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, cc.size(1, rows))
}, update: function (time) {
    var locGridSize = this._gridSize, locWinSizeWidth = this._winSize.width;
    var coords, direction, locPos = cc.p(0, 0);
    for (var j = 0; j < locGridSize.height; ++j) {
        locPos.y =
            j;
        coords = this.originalTile(locPos);
        direction = 1;
        if (j % 2 == 0)direction = -1;
        coords.bl.x += direction * locWinSizeWidth * time;
        coords.br.x += direction * locWinSizeWidth * time;
        coords.tl.x += direction * locWinSizeWidth * time;
        coords.tr.x += direction * locWinSizeWidth * time;
        this.setTile(locPos, coords)
    }
}, startWithTarget: function (target) {
    cc.TiledGrid3DAction.prototype.startWithTarget.call(this, target);
    this._winSize = cc.director.getWinSizeInPixels()
}});
cc.SplitRows.create = function (duration, rows) {
    return new cc.SplitRows(duration, rows)
};
cc.SplitCols = cc.TiledGrid3DAction.extend({_cols: 0, _winSize: null, ctor: function (duration, cols) {
    cc.GridAction.prototype.ctor.call(this);
    cols !== undefined && this.initWithDuration(duration, cols)
}, initWithDuration: function (duration, cols) {
    this._cols = cols;
    return cc.TiledGrid3DAction.prototype.initWithDuration.call(this, duration, cc.size(cols, 1))
}, update: function (time) {
    var locGridSizeWidth = this._gridSize.width, locWinSizeHeight = this._winSize.height;
    var coords, direction, locPos = cc.p(0, 0);
    for (var i = 0; i < locGridSizeWidth; ++i) {
        locPos.x =
            i;
        coords = this.originalTile(locPos);
        direction = 1;
        if (i % 2 == 0)direction = -1;
        coords.bl.y += direction * locWinSizeHeight * time;
        coords.br.y += direction * locWinSizeHeight * time;
        coords.tl.y += direction * locWinSizeHeight * time;
        coords.tr.y += direction * locWinSizeHeight * time;
        this.setTile(locPos, coords)
    }
}, startWithTarget: function (target) {
    cc.TiledGrid3DAction.prototype.startWithTarget.call(this, target);
    this._winSize = cc.director.getWinSizeInPixels()
}});
cc.SplitCols.create = function (duration, cols) {
    return new cc.SplitCols(duration, cols)
};
cc.PageTurn3D = cc.Grid3DAction.extend({update: function (time) {
    var tt = Math.max(0, time - 0.25);
    var deltaAy = tt * tt * 500;
    var ay = -100 - deltaAy;
    var deltaTheta = -Math.PI / 2 * Math.sqrt(time);
    var theta = +Math.PI / 2 + deltaTheta;
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    var locGridSize = this._gridSize;
    var locVer = cc.p(0, 0);
    for (var i = 0; i <= locGridSize.width; ++i)for (var j = 0; j <= locGridSize.height; ++j) {
        locVer.x = i;
        locVer.y = j;
        var p = this.originalVertex(locVer);
        var R = Math.sqrt(p.x * p.x + (p.y - ay) * (p.y - ay));
        var r = R * sinTheta;
        var alpha = Math.asin(p.x / R);
        var beta = alpha / sinTheta;
        var cosBeta = Math.cos(beta);
        if (beta <= Math.PI)p.x = r * Math.sin(beta); else p.x = 0;
        p.y = R + ay - r * (1 - cosBeta) * sinTheta;
        p.z = r * (1 - cosBeta) * cosTheta / 7;
        if (p.z < 0.5)p.z = 0.5;
        this.setVertex(locVer, p)
    }
}});
cc.PageTurn3D.create = function (duration, gridSize) {
    return new cc.PageTurn3D(duration, gridSize)
};cc.ProgressTimer = cc.NodeRGBA.extend({_type: null, _percentage: 0, _sprite: null, _midPoint: null, _barChangeRate: null, _reverseDirection: false, _className: "ProgressTimer", getMidpoint: function () {
    return cc.p(this._midPoint.x, this._midPoint.y)
}, setMidpoint: function (mpoint) {
    this._midPoint = cc.pClamp(mpoint, cc.p(0, 0), cc.p(1, 1))
}, getBarChangeRate: function () {
    return cc.p(this._barChangeRate.x, this._barChangeRate.y)
}, setBarChangeRate: function (barChangeRate) {
    this._barChangeRate = cc.pClamp(barChangeRate, cc.p(0, 0), cc.p(1,
        1))
}, getType: function () {
    return this._type
}, getPercentage: function () {
    return this._percentage
}, getSprite: function () {
    return this._sprite
}, setPercentage: function (percentage) {
    if (this._percentage != percentage) {
        this._percentage = cc.clampf(percentage, 0, 100);
        this._updateProgress()
    }
}, setOpacityModifyRGB: function (bValue) {
}, isOpacityModifyRGB: function () {
    return false
}, isReverseDirection: function () {
    return this._reverseDirection
}, _boundaryTexCoord: function (index) {
    if (index < cc.ProgressTimer.TEXTURE_COORDS_COUNT) {
        var locProTextCoords =
            cc.ProgressTimer.TEXTURE_COORDS;
        if (this._reverseDirection)return cc.p(locProTextCoords >> 7 - (index << 1) & 1, locProTextCoords >> 7 - ((index << 1) + 1) & 1); else return cc.p(locProTextCoords >> (index << 1) + 1 & 1, locProTextCoords >> (index << 1) & 1)
    }
    return cc.p(0, 0)
}, _origin: null, _startAngle: 270, _endAngle: 270, _radius: 0, _counterClockWise: false, _barRect: null, _vertexDataCount: 0, _vertexData: null, _vertexArrayBuffer: null, _vertexWebGLBuffer: null, _vertexDataDirty: false, ctor: null, _ctorForCanvas: function () {
    cc.NodeRGBA.prototype.ctor.call(this);
    this._type = cc.ProgressTimer.TYPE_RADIAL;
    this._percentage = 0;
    this._midPoint = cc.p(0, 0);
    this._barChangeRate = cc.p(0, 0);
    this._reverseDirection = false;
    this._sprite = null;
    this._origin = cc.p(0, 0);
    this._startAngle = 270;
    this._endAngle = 270;
    this._radius = 0;
    this._counterClockWise = false;
    this._barRect = cc.rect(0, 0, 0, 0)
}, _ctorForWebGL: function () {
    cc.NodeRGBA.prototype.ctor.call(this);
    this._type = cc.ProgressTimer.TYPE_RADIAL;
    this._percentage = 0;
    this._midPoint = cc.p(0, 0);
    this._barChangeRate = cc.p(0, 0);
    this._reverseDirection = false;
    this._sprite = null;
    this._vertexWebGLBuffer = cc._renderContext.createBuffer();
    this._vertexDataCount = 0;
    this._vertexData = null;
    this._vertexArrayBuffer = null;
    this._vertexDataDirty = false
}, setColor: function (color) {
    this._sprite.color = color;
    this._updateColor()
}, setOpacity: function (opacity) {
    this._sprite.opacity = opacity;
    this._updateColor()
}, getColor: function () {
    return this._sprite.color
}, getOpacity: function () {
    return this._sprite.opacity
}, setReverseProgress: null, _setReverseProgressForCanvas: function (reverse) {
    if (this._reverseDirection !==
        reverse)this._reverseDirection = reverse
}, _setReverseProgressForWebGL: function (reverse) {
    if (this._reverseDirection !== reverse) {
        this._reverseDirection = reverse;
        this._vertexData = null;
        this._vertexArrayBuffer = null;
        this._vertexDataCount = 0
    }
}, setSprite: null, _setSpriteForCanvas: function (sprite) {
    if (this._sprite != sprite) {
        this._sprite = sprite;
        this.width = this._sprite.width;
        this.height = this._sprite.height
    }
}, _setSpriteForWebGL: function (sprite) {
    if (sprite && this._sprite != sprite) {
        this._sprite = sprite;
        this.width = sprite.width;
        this.height = sprite.height;
        if (this._vertexData) {
            this._vertexData = null;
            this._vertexArrayBuffer = null;
            this._vertexDataCount = 0
        }
    }
}, setType: null, _setTypeForCanvas: function (type) {
    if (type !== this._type)this._type = type
}, _setTypeForWebGL: function (type) {
    if (type !== this._type) {
        if (this._vertexData) {
            this._vertexData = null;
            this._vertexArrayBuffer = null;
            this._vertexDataCount = 0
        }
        this._type = type
    }
}, setReverseDirection: null, _setReverseDirectionForCanvas: function (reverse) {
    if (this._reverseDirection !== reverse)this._reverseDirection =
        reverse
}, _setReverseDirectionForWebGL: function (reverse) {
    if (this._reverseDirection !== reverse) {
        this._reverseDirection = reverse;
        this._vertexData = null;
        this._vertexArrayBuffer = null;
        this._vertexDataCount = 0
    }
}, _textureCoordFromAlphaPoint: function (alpha) {
    var locSprite = this._sprite;
    if (!locSprite)return{u: 0, v: 0};
    var quad = locSprite.quad;
    var min = cc.p(quad.bl.texCoords.u, quad.bl.texCoords.v);
    var max = cc.p(quad.tr.texCoords.u, quad.tr.texCoords.v);
    if (locSprite.textureRectRotated) {
        var temp = alpha.x;
        alpha.x = alpha.y;
        alpha.y =
            temp
    }
    return{u: min.x * (1 - alpha.x) + max.x * alpha.x, v: min.y * (1 - alpha.y) + max.y * alpha.y}
}, _vertexFromAlphaPoint: function (alpha) {
    if (!this._sprite)return{x: 0, y: 0};
    var quad = this._sprite.quad;
    var min = cc.p(quad.bl.vertices.x, quad.bl.vertices.y);
    var max = cc.p(quad.tr.vertices.x, quad.tr.vertices.y);
    return{x: min.x * (1 - alpha.x) + max.x * alpha.x, y: min.y * (1 - alpha.y) + max.y * alpha.y}
}, initWithSprite: null, _initWithSpriteForCanvas: function (sprite) {
    this.percentage = 0;
    this.anchorX = 0.5;
    this.anchorY = 0.5;
    this._type = cc.ProgressTimer.TYPE_RADIAL;
    this._reverseDirection = false;
    this.midPoint = cc.p(0.5, 0.5);
    this.barChangeRate = cc.p(1, 1);
    this.sprite = sprite;
    return true
}, _initWithSpriteForWebGL: function (sprite) {
    this.percentage = 0;
    this._vertexData = null;
    this._vertexArrayBuffer = null;
    this._vertexDataCount = 0;
    this.anchorX = 0.5;
    this.anchorY = 0.5;
    this._type = cc.ProgressTimer.TYPE_RADIAL;
    this._reverseDirection = false;
    this.midPoint = cc.p(0.5, 0.5);
    this.barChangeRate = cc.p(1, 1);
    this.sprite = sprite;
    this.shaderProgram = cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);
    return true
}, draw: null, _drawForCanvas: function (ctx) {
    var context = ctx || cc._renderContext;
    var locSprite = this._sprite;
    if (locSprite._isLighterMode)context.globalCompositeOperation = "lighter";
    var locEGL_ScaleX = cc.view.getScaleX(), locEGL_ScaleY = cc.view.getScaleY();
    context.globalAlpha = locSprite._displayedOpacity / 255;
    var locRect = locSprite._rect, locContentSize = locSprite._contentSize, locOffsetPosition = locSprite._offsetPosition, locDrawSizeCanvas = locSprite._drawSize_Canvas;
    var flipXOffset = 0 | locOffsetPosition.x,
        flipYOffset = -locOffsetPosition.y - locRect.height, locTextureCoord = locSprite._textureRect_Canvas;
    locDrawSizeCanvas.width = locRect.width * locEGL_ScaleX;
    locDrawSizeCanvas.height = locRect.height * locEGL_ScaleY;
    context.save();
    if (locSprite._flippedX) {
        flipXOffset = -locOffsetPosition.x - locRect.width;
        context.scale(-1, 1)
    }
    if (locSprite._flippedY) {
        flipYOffset = locOffsetPosition.y;
        context.scale(1, -1)
    }
    flipXOffset *= locEGL_ScaleX;
    flipYOffset *= locEGL_ScaleY;
    if (this._type == cc.ProgressTimer.TYPE_BAR) {
        var locBarRect = this._barRect;
        context.beginPath();
        context.rect(locBarRect.x * locEGL_ScaleX, locBarRect.y * locEGL_ScaleY, locBarRect.width * locEGL_ScaleX, locBarRect.height * locEGL_ScaleY);
        context.clip();
        context.closePath()
    } else if (this._type == cc.ProgressTimer.TYPE_RADIAL) {
        var locOriginX = this._origin.x * locEGL_ScaleX;
        var locOriginY = this._origin.y * locEGL_ScaleY;
        context.beginPath();
        context.arc(locOriginX, locOriginY, this._radius * locEGL_ScaleY, Math.PI / 180 * this._startAngle, Math.PI / 180 * this._endAngle, this._counterClockWise);
        context.lineTo(locOriginX,
            locOriginY);
        context.clip();
        context.closePath()
    }
    if (locSprite._texture && locTextureCoord.validRect) {
        var image = locSprite._texture.getHtmlElementObj();
        if (this._colorized)context.drawImage(image, 0, 0, locTextureCoord.width, locTextureCoord.height, flipXOffset, flipYOffset, locDrawSizeCanvas.width, locDrawSizeCanvas.height); else context.drawImage(image, locTextureCoord.x, locTextureCoord.y, locTextureCoord.width, locTextureCoord.height, flipXOffset, flipYOffset, locDrawSizeCanvas.width, locDrawSizeCanvas.height)
    } else if (locContentSize.width !==
        0) {
        var curColor = this.color;
        context.fillStyle = "rgba(" + curColor.r + "," + curColor.g + "," + curColor.b + ",1)";
        context.fillRect(flipXOffset, flipYOffset, locContentSize.width * locEGL_ScaleX, locContentSize.height * locEGL_ScaleY)
    }
    context.restore();
    cc.incrementGLDraws(1)
}, _drawForWebGL: function (ctx) {
    var context = ctx || cc._renderContext;
    if (!this._vertexData || !this._sprite)return;
    cc.nodeDrawSetup(this);
    var blendFunc = this._sprite.getBlendFunc();
    cc.glBlendFunc(blendFunc.src, blendFunc.dst);
    cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX);
    cc.glBindTexture2D(this._sprite.texture);
    context.bindBuffer(context.ARRAY_BUFFER, this._vertexWebGLBuffer);
    if (this._vertexDataDirty) {
        context.bufferData(context.ARRAY_BUFFER, this._vertexArrayBuffer, context.DYNAMIC_DRAW);
        this._vertexDataDirty = false
    }
    var locVertexDataLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
    context.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION, 2, context.FLOAT, false, locVertexDataLen, 0);
    context.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR, 4, context.UNSIGNED_BYTE, true, locVertexDataLen, 8);
    context.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS,
        2, context.FLOAT, false, locVertexDataLen, 12);
    if (this._type === cc.ProgressTimer.TYPE_RADIAL)context.drawArrays(context.TRIANGLE_FAN, 0, this._vertexDataCount); else if (this._type == cc.ProgressTimer.TYPE_BAR)if (!this._reverseDirection)context.drawArrays(context.TRIANGLE_STRIP, 0, this._vertexDataCount); else {
        context.drawArrays(context.TRIANGLE_STRIP, 0, this._vertexDataCount / 2);
        context.drawArrays(context.TRIANGLE_STRIP, 4, this._vertexDataCount / 2);
        cc.g_NumberOfDraws++
    }
    cc.g_NumberOfDraws++
}, _updateRadial: function () {
    if (!this._sprite)return;
    var i, locMidPoint = this._midPoint;
    var alpha = this._percentage / 100;
    var angle = 2 * cc.PI * (this._reverseDirection ? alpha : 1 - alpha);
    var topMid = cc.p(locMidPoint.x, 1);
    var percentagePt = cc.pRotateByAngle(topMid, locMidPoint, angle);
    var index = 0;
    var hit;
    if (alpha == 0) {
        hit = topMid;
        index = 0
    } else if (alpha == 1) {
        hit = topMid;
        index = 4
    } else {
        var min_t = cc.FLT_MAX;
        var locProTextCoordsCount = cc.ProgressTimer.TEXTURE_COORDS_COUNT;
        for (i = 0; i <= locProTextCoordsCount; ++i) {
            var pIndex = (i + (locProTextCoordsCount - 1)) % locProTextCoordsCount;
            var edgePtA =
                this._boundaryTexCoord(i % locProTextCoordsCount);
            var edgePtB = this._boundaryTexCoord(pIndex);
            if (i == 0)edgePtB = cc.pLerp(edgePtA, edgePtB, 1 - locMidPoint.x); else if (i == 4)edgePtA = cc.pLerp(edgePtA, edgePtB, 1 - locMidPoint.x);
            var retPoint = cc.p(0, 0);
            if (cc.pLineIntersect(edgePtA, edgePtB, locMidPoint, percentagePt, retPoint)) {
                if (i == 0 || i == 4)if (!(0 <= retPoint.x && retPoint.x <= 1))continue;
                if (retPoint.y >= 0)if (retPoint.y < min_t) {
                    min_t = retPoint.y;
                    index = i
                }
            }
        }
        hit = cc.pAdd(locMidPoint, cc.pMult(cc.pSub(percentagePt, locMidPoint), min_t))
    }
    var sameIndexCount =
        true;
    if (this._vertexDataCount != index + 3) {
        sameIndexCount = false;
        this._vertexData = null;
        this._vertexArrayBuffer = null;
        this._vertexDataCount = 0
    }
    if (!this._vertexData) {
        this._vertexDataCount = index + 3;
        var locCount = this._vertexDataCount, vertexDataLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;
        this._vertexArrayBuffer = new ArrayBuffer(locCount * vertexDataLen);
        var locData = [];
        for (i = 0; i < locCount; i++)locData[i] = new cc.V2F_C4B_T2F(null, null, null, this._vertexArrayBuffer, i * vertexDataLen);
        this._vertexData = locData;
        if (!this._vertexData) {
            cc.log("cc.ProgressTimer._updateRadial() : Not enough memory");
            return
        }
    }
    this._updateColor();
    var locVertexData = this._vertexData;
    if (!sameIndexCount) {
        locVertexData[0].texCoords = this._textureCoordFromAlphaPoint(locMidPoint);
        locVertexData[0].vertices = this._vertexFromAlphaPoint(locMidPoint);
        locVertexData[1].texCoords = this._textureCoordFromAlphaPoint(topMid);
        locVertexData[1].vertices = this._vertexFromAlphaPoint(topMid);
        for (i = 0; i < index; i++) {
            var alphaPoint = this._boundaryTexCoord(i);
            locVertexData[i + 2].texCoords = this._textureCoordFromAlphaPoint(alphaPoint);
            locVertexData[i +
                2].vertices = this._vertexFromAlphaPoint(alphaPoint)
        }
    }
    locVertexData[this._vertexDataCount - 1].texCoords = this._textureCoordFromAlphaPoint(hit);
    locVertexData[this._vertexDataCount - 1].vertices = this._vertexFromAlphaPoint(hit)
}, _updateBar: function () {
    if (!this._sprite)return;
    var i;
    var alpha = this._percentage / 100;
    var locBarChangeRate = this._barChangeRate;
    var alphaOffset = cc.pMult(cc.p(1 - locBarChangeRate.x + alpha * locBarChangeRate.x, 1 - locBarChangeRate.y + alpha * locBarChangeRate.y), 0.5);
    var min = cc.pSub(this._midPoint,
        alphaOffset);
    var max = cc.pAdd(this._midPoint, alphaOffset);
    if (min.x < 0) {
        max.x += -min.x;
        min.x = 0
    }
    if (max.x > 1) {
        min.x -= max.x - 1;
        max.x = 1
    }
    if (min.y < 0) {
        max.y += -min.y;
        min.y = 0
    }
    if (max.y > 1) {
        min.y -= max.y - 1;
        max.y = 1
    }
    var locVertexData;
    if (!this._reverseDirection) {
        if (!this._vertexData) {
            this._vertexDataCount = 4;
            var vertexDataLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT, locCount = 4;
            this._vertexArrayBuffer = new ArrayBuffer(locCount * vertexDataLen);
            this._vertexData = [];
            for (i = 0; i < locCount; i++)this._vertexData[i] = new cc.V2F_C4B_T2F(null, null,
                null, this._vertexArrayBuffer, i * vertexDataLen)
        }
        locVertexData = this._vertexData;
        locVertexData[0].texCoords = this._textureCoordFromAlphaPoint(cc.p(min.x, max.y));
        locVertexData[0].vertices = this._vertexFromAlphaPoint(cc.p(min.x, max.y));
        locVertexData[1].texCoords = this._textureCoordFromAlphaPoint(cc.p(min.x, min.y));
        locVertexData[1].vertices = this._vertexFromAlphaPoint(cc.p(min.x, min.y));
        locVertexData[2].texCoords = this._textureCoordFromAlphaPoint(cc.p(max.x, max.y));
        locVertexData[2].vertices = this._vertexFromAlphaPoint(cc.p(max.x,
            max.y));
        locVertexData[3].texCoords = this._textureCoordFromAlphaPoint(cc.p(max.x, min.y));
        locVertexData[3].vertices = this._vertexFromAlphaPoint(cc.p(max.x, min.y))
    } else {
        if (!this._vertexData) {
            this._vertexDataCount = 8;
            var rVertexDataLen = cc.V2F_C4B_T2F.BYTES_PER_ELEMENT, rLocCount = 8;
            this._vertexArrayBuffer = new ArrayBuffer(rLocCount * rVertexDataLen);
            var rTempData = [];
            for (i = 0; i < rLocCount; i++)rTempData[i] = new cc.V2F_C4B_T2F(null, null, null, this._vertexArrayBuffer, i * rVertexDataLen);
            rTempData[0].texCoords = this._textureCoordFromAlphaPoint(cc.p(0,
                1));
            rTempData[0].vertices = this._vertexFromAlphaPoint(cc.p(0, 1));
            rTempData[1].texCoords = this._textureCoordFromAlphaPoint(cc.p(0, 0));
            rTempData[1].vertices = this._vertexFromAlphaPoint(cc.p(0, 0));
            rTempData[6].texCoords = this._textureCoordFromAlphaPoint(cc.p(1, 1));
            rTempData[6].vertices = this._vertexFromAlphaPoint(cc.p(1, 1));
            rTempData[7].texCoords = this._textureCoordFromAlphaPoint(cc.p(1, 0));
            rTempData[7].vertices = this._vertexFromAlphaPoint(cc.p(1, 0));
            this._vertexData = rTempData
        }
        locVertexData = this._vertexData;
        locVertexData[2].texCoords = this._textureCoordFromAlphaPoint(cc.p(min.x, max.y));
        locVertexData[2].vertices = this._vertexFromAlphaPoint(cc.p(min.x, max.y));
        locVertexData[3].texCoords = this._textureCoordFromAlphaPoint(cc.p(min.x, min.y));
        locVertexData[3].vertices = this._vertexFromAlphaPoint(cc.p(min.x, min.y));
        locVertexData[4].texCoords = this._textureCoordFromAlphaPoint(cc.p(max.x, max.y));
        locVertexData[4].vertices = this._vertexFromAlphaPoint(cc.p(max.x, max.y));
        locVertexData[5].texCoords = this._textureCoordFromAlphaPoint(cc.p(max.x,
            min.y));
        locVertexData[5].vertices = this._vertexFromAlphaPoint(cc.p(max.x, min.y))
    }
    this._updateColor()
}, _updateColor: function () {
    if (!this._sprite || !this._vertexData)return;
    var sc = this._sprite.quad.tl.colors;
    var locVertexData = this._vertexData;
    for (var i = 0, len = this._vertexDataCount; i < len; ++i)locVertexData[i].colors = sc;
    this._vertexDataDirty = true
}, _updateProgress: null, _updateProgressForCanvas: function () {
    var locSprite = this._sprite;
    var sw = locSprite.width, sh = locSprite.height;
    var locMidPoint = this._midPoint;
    if (this._type ==
        cc.ProgressTimer.TYPE_RADIAL) {
        this._radius = Math.round(Math.sqrt(sw * sw + sh * sh));
        var locStartAngle, locEndAngle, locCounterClockWise = false, locOrigin = this._origin;
        locOrigin.x = sw * locMidPoint.x;
        locOrigin.y = -sh * locMidPoint.y;
        if (this._reverseDirection) {
            locEndAngle = 270;
            locStartAngle = 270 - 3.6 * this._percentage
        } else {
            locStartAngle = -90;
            locEndAngle = -90 + 3.6 * this._percentage
        }
        if (locSprite._flippedX) {
            locOrigin.x -= sw * this._midPoint.x * 2;
            locStartAngle = -locStartAngle;
            locEndAngle = -locEndAngle;
            locStartAngle -= 180;
            locEndAngle -=
                180;
            locCounterClockWise = !locCounterClockWise
        }
        if (locSprite._flippedY) {
            locOrigin.y += sh * this._midPoint.y * 2;
            locCounterClockWise = !locCounterClockWise;
            locStartAngle = -locStartAngle;
            locEndAngle = -locEndAngle
        }
        this._startAngle = locStartAngle;
        this._endAngle = locEndAngle;
        this._counterClockWise = locCounterClockWise
    } else {
        var locBarChangeRate = this._barChangeRate;
        var percentageF = this._percentage / 100;
        var locBarRect = this._barRect;
        var drawedSize = cc.size(sw * (1 - locBarChangeRate.x), sh * (1 - locBarChangeRate.y));
        var drawingSize =
            cc.size((sw - drawedSize.width) * percentageF, (sh - drawedSize.height) * percentageF);
        var currentDrawSize = cc.size(drawedSize.width + drawingSize.width, drawedSize.height + drawingSize.height);
        var startPoint = cc.p(sw * locMidPoint.x, sh * locMidPoint.y);
        var needToLeft = startPoint.x - currentDrawSize.width / 2;
        if (locMidPoint.x > 0.5)if (currentDrawSize.width / 2 >= sw - startPoint.x)needToLeft = sw - currentDrawSize.width;
        var needToTop = startPoint.y - currentDrawSize.height / 2;
        if (locMidPoint.y > 0.5)if (currentDrawSize.height / 2 >= sh - startPoint.y)needToTop =
            sh - currentDrawSize.height;
        locBarRect.x = 0;
        var flipXNeed = 1;
        if (locSprite._flippedX) {
            locBarRect.x -= currentDrawSize.width;
            flipXNeed = -1
        }
        if (needToLeft > 0)locBarRect.x += needToLeft * flipXNeed;
        locBarRect.y = 0;
        var flipYNeed = 1;
        if (locSprite._flippedY) {
            locBarRect.y += currentDrawSize.height;
            flipYNeed = -1
        }
        if (needToTop > 0)locBarRect.y -= needToTop * flipYNeed;
        locBarRect.width = currentDrawSize.width;
        locBarRect.height = -currentDrawSize.height
    }
}, _updateProgressForWebGL: function () {
    var locType = this._type;
    if (locType === cc.ProgressTimer.TYPE_RADIAL)this._updateRadial();
    else if (locType === cc.ProgressTimer.TYPE_BAR)this._updateBar();
    this._vertexDataDirty = true
}});
var _p = cc.ProgressTimer.prototype;
if (cc._renderType == cc._RENDER_TYPE_WEBGL) {
    _p.ctor = _p._ctorForWebGL;
    _p.setReverseProgress = _p._setReverseProgressForWebGL;
    _p.setSprite = _p._setSpriteForWebGL;
    _p.setType = _p._setTypeForWebGL;
    _p.setReverseDirection = _p._setReverseDirectionForWebGL;
    _p.initWithSprite = _p._initWithSpriteForWebGL;
    _p.draw = _p._drawForWebGL;
    _p._updateProgress = _p._updateProgressForWebGL
} else {
    _p.ctor = _p._ctorForCanvas;
    _p.setReverseProgress = _p._setReverseProgressForCanvas;
    _p.setSprite = _p._setSpriteForCanvas;
    _p.setType = _p._setTypeForCanvas;
    _p.setReverseDirection = _p._setReverseDirectionForCanvas;
    _p.initWithSprite = _p._initWithSpriteForCanvas;
    _p.draw = _p._drawForCanvas;
    _p._updateProgress = cc.ProgressTimer.prototype._updateProgressForCanvas
}
_p.midPoint;
cc.defineGetterSetter(_p, "midPoint", _p.getMidpoint, _p.setMidpoint);
_p.barChangeRate;
cc.defineGetterSetter(_p, "barChangeRate", _p.getBarChangeRate, _p.setBarChangeRate);
_p.type;
cc.defineGetterSetter(_p, "type", _p.getType, _p.setType);
_p.percentage;
cc.defineGetterSetter(_p, "percentage", _p.getPercentage, _p.setPercentage);
_p.sprite;
cc.defineGetterSetter(_p, "sprite", _p.getSprite, _p.setSprite);
_p.reverseDir;
cc.defineGetterSetter(_p, "reverseDir", _p.isReverseDirection, _p.setReverseDirection);
cc.ProgressTimer.create = function (sprite) {
    var progressTimer = new cc.ProgressTimer;
    if (progressTimer.initWithSprite(sprite))return progressTimer;
    return null
};
cc.ProgressTimer.TEXTURE_COORDS_COUNT = 4;
cc.ProgressTimer.TEXTURE_COORDS = 75;
cc.ProgressTimer.TYPE_RADIAL = 0;
cc.ProgressTimer.TYPE_BAR = 1;
cc.ProgressTo = cc.ActionInterval.extend({_to: 0, _from: 0, ctor: function (duration, percent) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._to = 0;
    this._from = 0;
    percent !== undefined && this.initWithDuration(duration, percent)
}, initWithDuration: function (duration, percent) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._to = percent;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ProgressTo;
    action.initWithDuration(this._duration, this._to);
    return action
}, reverse: function () {
    cc.log("cc.ProgressTo.reverse(): reverse hasn't been supported.");
    return null
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target);
    this._from = target.percentage;
    if (this._from == 100)this._from = 0
}, update: function (time) {
    if (this.target instanceof cc.ProgressTimer)this.target.percentage = this._from + (this._to - this._from) * time
}});
cc.ProgressTo.create = function (duration, percent) {
    return new cc.ProgressTo(duration, percent)
};
cc.ProgressFromTo = cc.ActionInterval.extend({_to: 0, _from: 0, ctor: function (duration, fromPercentage, toPercentage) {
    cc.ActionInterval.prototype.ctor.call(this);
    this._to = 0;
    this._from = 0;
    toPercentage !== undefined && this.initWithDuration(duration, fromPercentage, toPercentage)
}, initWithDuration: function (duration, fromPercentage, toPercentage) {
    if (cc.ActionInterval.prototype.initWithDuration.call(this, duration)) {
        this._to = toPercentage;
        this._from = fromPercentage;
        return true
    }
    return false
}, clone: function () {
    var action = new cc.ProgressFromTo;
    action.initWithDuration(this._duration, this._from, this._to);
    return action
}, reverse: function () {
    return cc.ProgressFromTo.create(this._duration, this._to, this._from)
}, startWithTarget: function (target) {
    cc.ActionInterval.prototype.startWithTarget.call(this, target)
}, update: function (time) {
    if (this.target instanceof cc.ProgressTimer)this.target.percentage = this._from + (this._to - this._from) * time
}});
cc.ProgressFromTo.create = function (duration, fromPercentage, toPercentage) {
    return new cc.ProgressFromTo(duration, fromPercentage, toPercentage)
};cc.SCENE_FADE = 4208917214;
cc.TransitionEaseScene = cc.Class.extend({easeActionWithAction: function () {
}});
cc.TRANSITION_ORIENTATION_LEFT_OVER = 0;
cc.TRANSITION_ORIENTATION_RIGHT_OVER = 1;
cc.TRANSITION_ORIENTATION_UP_OVER = 0;
cc.TRANSITION_ORIENTATION_DOWN_OVER = 1;
cc.TransitionScene = cc.Scene.extend({_inScene: null, _outScene: null, _duration: null, _isInSceneOnTop: false, _isSendCleanupToScene: false, _className: "TransitionScene", ctor: function (t, scene) {
    cc.Scene.prototype.ctor.call(this);
    if (t !== undefined && scene !== undefined)this.initWithDuration(t, scene)
}, _setNewScene: function (dt) {
    this.unschedule(this._setNewScene);
    var director = cc.director;
    this._isSendCleanupToScene = director.isSendCleanupToScene();
    director.runScene(this._inScene);
    cc.eventManager.setEnabled(true);
    this._outScene.visible =
        true
}, _sceneOrder: function () {
    this._isInSceneOnTop = true
}, draw: function () {
    if (this._isInSceneOnTop) {
        this._outScene.visit();
        this._inScene.visit()
    } else {
        this._inScene.visit();
        this._outScene.visit()
    }
}, onEnter: function () {
    cc.Node.prototype.onEnter.call(this);
    cc.eventManager.setEnabled(false);
    this._outScene.onExitTransitionDidStart();
    this._inScene.onEnter()
}, onExit: function () {
    cc.Node.prototype.onExit.call(this);
    cc.eventManager.setEnabled(true);
    this._outScene.onExit();
    this._inScene.onEnterTransitionDidFinish()
},
    cleanup: function () {
        cc.Node.prototype.cleanup.call(this);
        if (this._isSendCleanupToScene)this._outScene.cleanup()
    }, initWithDuration: function (t, scene) {
        if (!scene)throw"cc.TransitionScene.initWithDuration(): Argument scene must be non-nil";
        if (this.init()) {
            this._duration = t;
            this.attr({x: 0, y: 0, anchorX: 0, anchorY: 0});
            this._inScene = scene;
            this._outScene = cc.director.getRunningScene();
            if (!this._outScene) {
                this._outScene = cc.Scene.create();
                this._outScene.init()
            }
            if (this._inScene == this._outScene)throw"cc.TransitionScene.initWithDuration(): Incoming scene must be different from the outgoing scene";
            this._sceneOrder();
            return true
        } else return false
    }, finish: function () {
        this._inScene.attr({visible: true, x: 0, y: 0, scale: 1, rotation: 0});
        if (cc._renderType === cc._RENDER_TYPE_WEBGL)this._inScene.getCamera().restore();
        this._outScene.attr({visible: false, x: 0, y: 0, scale: 1, rotation: 0});
        if (cc._renderType === cc._RENDER_TYPE_WEBGL)this._outScene.getCamera().restore();
        this.schedule(this._setNewScene, 0)
    }, hideOutShowIn: function () {
        this._inScene.visible = true;
        this._outScene.visible = false
    }});
cc.TransitionScene.create = function (t, scene) {
    return new cc.TransitionScene(t, scene)
};
cc.TransitionSceneOriented = cc.TransitionScene.extend({_orientation: 0, initWithDuration: function (t, scene, orientation) {
    if (cc.TransitionScene.prototype.initWithDuration.call(this, t, scene))this._orientation = orientation;
    return true
}});
cc.TransitionSceneOriented.create = function (t, scene, orientation) {
    var tempScene = new cc.TransitionSceneOriented;
    tempScene.initWithDuration(t, scene, orientation);
    return tempScene
};
cc.TransitionRotoZoom = cc.TransitionScene.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    this._inScene.attr({scale: 0.001, anchorX: 0.5, anchorY: 0.5});
    this._outScene.attr({scale: 1, anchorX: 0.5, anchorY: 0.5});
    var rotoZoom = cc.Sequence.create(cc.Spawn.create(cc.ScaleBy.create(this._duration / 2, 0.001), cc.RotateBy.create(this._duration / 2, 360 * 2)), cc.DelayTime.create(this._duration / 2));
    this._outScene.runAction(rotoZoom);
    this._inScene.runAction(cc.Sequence.create(rotoZoom.reverse(), cc.CallFunc.create(this.finish,
        this)))
}});
cc.TransitionRotoZoom.create = function (t, scene) {
    var tempScene = new cc.TransitionRotoZoom;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionJumpZoom = cc.TransitionScene.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var winSize = cc.director.getWinSize();
    this._inScene.attr({scale: 0.5, x: winSize.width, y: 0, anchorX: 0.5, anchorY: 0.5});
    this._outScene.anchorX = 0.5;
    this._outScene.anchorY = 0.5;
    var jump = cc.JumpBy.create(this._duration / 4, cc.p(-winSize.width, 0), winSize.width / 4, 2);
    var scaleIn = cc.ScaleTo.create(this._duration / 4, 1);
    var scaleOut = cc.ScaleTo.create(this._duration / 4, 0.5);
    var jumpZoomOut = cc.Sequence.create(scaleOut,
        jump);
    var jumpZoomIn = cc.Sequence.create(jump, scaleIn);
    var delay = cc.DelayTime.create(this._duration / 2);
    this._outScene.runAction(jumpZoomOut);
    this._inScene.runAction(cc.Sequence.create(delay, jumpZoomIn, cc.CallFunc.create(this.finish, this)))
}});
cc.TransitionJumpZoom.create = function (t, scene) {
    var tempScene = new cc.TransitionJumpZoom;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionMoveInL = cc.TransitionScene.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    this.initScenes();
    var action = this.action();
    this._inScene.runAction(cc.Sequence.create(this.easeActionWithAction(action), cc.CallFunc.create(this.finish, this)))
}, initScenes: function () {
    this._inScene.setPosition(-cc.director.getWinSize().width, 0)
}, action: function () {
    return cc.MoveTo.create(this._duration, cc.p(0, 0))
}, easeActionWithAction: function (action) {
    return cc.EaseOut.create(action, 2)
}});
cc.TransitionMoveInL.create = function (t, scene) {
    var tempScene = new cc.TransitionMoveInL;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionMoveInR = cc.TransitionMoveInL.extend({initScenes: function () {
    this._inScene.setPosition(cc.director.getWinSize().width, 0)
}});
cc.TransitionMoveInR.create = function (t, scene) {
    var tempScene = new cc.TransitionMoveInR;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionMoveInT = cc.TransitionMoveInL.extend({initScenes: function () {
    this._inScene.setPosition(0, cc.director.getWinSize().height)
}});
cc.TransitionMoveInT.create = function (t, scene) {
    var tempScene = new cc.TransitionMoveInT;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionMoveInB = cc.TransitionMoveInL.extend({initScenes: function () {
    this._inScene.setPosition(0, -cc.director.getWinSize().height)
}});
cc.TransitionMoveInB.create = function (t, scene) {
    var tempScene = new cc.TransitionMoveInB;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.ADJUST_FACTOR = 0.5;
cc.TransitionSlideInL = cc.TransitionScene.extend({_sceneOrder: function () {
    this._isInSceneOnTop = false
}, onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    this.initScenes();
    var inA = this.action();
    var outA = this.action();
    var inAction = this.easeActionWithAction(inA);
    var outAction = cc.Sequence.create(this.easeActionWithAction(outA), cc.CallFunc.create(this.finish, this));
    this._inScene.runAction(inAction);
    this._outScene.runAction(outAction)
}, initScenes: function () {
    this._inScene.setPosition(-cc.director.getWinSize().width +
        cc.ADJUST_FACTOR, 0)
}, action: function () {
    return cc.MoveBy.create(this._duration, cc.p(cc.director.getWinSize().width - cc.ADJUST_FACTOR, 0))
}, easeActionWithAction: function (action) {
    return cc.EaseOut.create(action, 2)
}});
cc.TransitionSlideInL.create = function (t, scene) {
    var tempScene = new cc.TransitionSlideInL;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionSlideInR = cc.TransitionSlideInL.extend({_sceneOrder: function () {
    this._isInSceneOnTop = true
}, initScenes: function () {
    this._inScene.setPosition(cc.director.getWinSize().width - cc.ADJUST_FACTOR, 0)
}, action: function () {
    return cc.MoveBy.create(this._duration, cc.p(-(cc.director.getWinSize().width - cc.ADJUST_FACTOR), 0))
}});
cc.TransitionSlideInR.create = function (t, scene) {
    var tempScene = new cc.TransitionSlideInR;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionSlideInB = cc.TransitionSlideInL.extend({_sceneOrder: function () {
    this._isInSceneOnTop = false
}, initScenes: function () {
    this._inScene.setPosition(0, cc.director.getWinSize().height - cc.ADJUST_FACTOR)
}, action: function () {
    return cc.MoveBy.create(this._duration, cc.p(0, -(cc.director.getWinSize().height - cc.ADJUST_FACTOR)))
}});
cc.TransitionSlideInB.create = function (t, scene) {
    var tempScene = new cc.TransitionSlideInB;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionSlideInT = cc.TransitionSlideInL.extend({_sceneOrder: function () {
    this._isInSceneOnTop = true
}, initScenes: function () {
    this._inScene.setPosition(0, -(cc.director.getWinSize().height - cc.ADJUST_FACTOR))
}, action: function () {
    return cc.MoveBy.create(this._duration, cc.p(0, cc.director.getWinSize().height - cc.ADJUST_FACTOR))
}});
cc.TransitionSlideInT.create = function (t, scene) {
    var tempScene = new cc.TransitionSlideInT;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionShrinkGrow = cc.TransitionScene.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    this._inScene.attr({scale: 0.001, anchorX: 2 / 3, anchorY: 0.5});
    this._outScene.attr({scale: 1, anchorX: 1 / 3, anchorY: 0.5});
    var scaleOut = cc.ScaleTo.create(this._duration, 0.01);
    var scaleIn = cc.ScaleTo.create(this._duration, 1);
    this._inScene.runAction(this.easeActionWithAction(scaleIn));
    this._outScene.runAction(cc.Sequence.create(this.easeActionWithAction(scaleOut), cc.CallFunc.create(this.finish,
        this)))
}, easeActionWithAction: function (action) {
    return cc.EaseOut.create(action, 2)
}});
cc.TransitionShrinkGrow.create = function (t, scene) {
    var tempScene = new cc.TransitionShrinkGrow;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionFlipX = cc.TransitionSceneOriented.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var inA, outA;
    this._inScene.visible = false;
    var inDeltaZ, inAngleZ, outDeltaZ, outAngleZ;
    if (this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER) {
        inDeltaZ = 90;
        inAngleZ = 270;
        outDeltaZ = 90;
        outAngleZ = 0
    } else {
        inDeltaZ = -90;
        inAngleZ = 90;
        outDeltaZ = -90;
        outAngleZ = 0
    }
    inA = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, inAngleZ,
        inDeltaZ, 0, 0), cc.CallFunc.create(this.finish, this));
    outA = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, outAngleZ, outDeltaZ, 0, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2));
    this._inScene.runAction(inA);
    this._outScene.runAction(outA)
}});
cc.TransitionFlipX.create = function (t, scene, o) {
    if (o == null)o = cc.TRANSITION_ORIENTATION_RIGHT_OVER;
    var tempScene = new cc.TransitionFlipX;
    tempScene.initWithDuration(t, scene, o);
    return tempScene
};
cc.TransitionFlipY = cc.TransitionSceneOriented.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var inA, outA;
    this._inScene.visible = false;
    var inDeltaZ, inAngleZ, outDeltaZ, outAngleZ;
    if (this._orientation == cc.TRANSITION_ORIENTATION_UP_OVER) {
        inDeltaZ = 90;
        inAngleZ = 270;
        outDeltaZ = 90;
        outAngleZ = 0
    } else {
        inDeltaZ = -90;
        inAngleZ = 90;
        outDeltaZ = -90;
        outAngleZ = 0
    }
    inA = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, inAngleZ, inDeltaZ,
        90, 0), cc.CallFunc.create(this.finish, this));
    outA = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, outAngleZ, outDeltaZ, 90, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2));
    this._inScene.runAction(inA);
    this._outScene.runAction(outA)
}});
cc.TransitionFlipY.create = function (t, scene, o) {
    if (o == null)o = cc.TRANSITION_ORIENTATION_UP_OVER;
    var tempScene = new cc.TransitionFlipY;
    tempScene.initWithDuration(t, scene, o);
    return tempScene
};
cc.TransitionFlipAngular = cc.TransitionSceneOriented.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var inA, outA;
    this._inScene.visible = false;
    var inDeltaZ, inAngleZ, outDeltaZ, outAngleZ;
    if (this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER) {
        inDeltaZ = 90;
        inAngleZ = 270;
        outDeltaZ = 90;
        outAngleZ = 0
    } else {
        inDeltaZ = -90;
        inAngleZ = 90;
        outDeltaZ = -90;
        outAngleZ = 0
    }
    inA = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Show.create(), cc.OrbitCamera.create(this._duration / 2, 1, 0, inAngleZ,
        inDeltaZ, -45, 0), cc.CallFunc.create(this.finish, this));
    outA = cc.Sequence.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, outAngleZ, outDeltaZ, 45, 0), cc.Hide.create(), cc.DelayTime.create(this._duration / 2));
    this._inScene.runAction(inA);
    this._outScene.runAction(outA)
}});
cc.TransitionFlipAngular.create = function (t, scene, o) {
    if (o == null)o = cc.TRANSITION_ORIENTATION_RIGHT_OVER;
    var tempScene = new cc.TransitionFlipAngular;
    tempScene.initWithDuration(t, scene, o);
    return tempScene
};
cc.TransitionZoomFlipX = cc.TransitionSceneOriented.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var inA, outA;
    this._inScene.visible = false;
    var inDeltaZ, inAngleZ, outDeltaZ, outAngleZ;
    if (this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER) {
        inDeltaZ = 90;
        inAngleZ = 270;
        outDeltaZ = 90;
        outAngleZ = 0
    } else {
        inDeltaZ = -90;
        inAngleZ = 90;
        outDeltaZ = -90;
        outAngleZ = 0
    }
    inA = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, inAngleZ,
        inDeltaZ, 0, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.CallFunc.create(this.finish, this));
    outA = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, outAngleZ, outDeltaZ, 0, 0), cc.ScaleTo.create(this._duration / 2, 0.5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2));
    this._inScene.scale = 0.5;
    this._inScene.runAction(inA);
    this._outScene.runAction(outA)
}});
cc.TransitionZoomFlipX.create = function (t, scene, o) {
    if (o == null)o = cc.TRANSITION_ORIENTATION_RIGHT_OVER;
    var tempScene = new cc.TransitionZoomFlipX;
    tempScene.initWithDuration(t, scene, o);
    return tempScene
};
cc.TransitionZoomFlipY = cc.TransitionSceneOriented.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var inA, outA;
    this._inScene.visible = false;
    var inDeltaZ, inAngleZ, outDeltaZ, outAngleZ;
    if (this._orientation === cc.TRANSITION_ORIENTATION_UP_OVER) {
        inDeltaZ = 90;
        inAngleZ = 270;
        outDeltaZ = 90;
        outAngleZ = 0
    } else {
        inDeltaZ = -90;
        inAngleZ = 90;
        outDeltaZ = -90;
        outAngleZ = 0
    }
    inA = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, inAngleZ,
        inDeltaZ, 90, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.CallFunc.create(this.finish, this));
    outA = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, outAngleZ, outDeltaZ, 90, 0), cc.ScaleTo.create(this._duration / 2, 0.5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2));
    this._inScene.scale = 0.5;
    this._inScene.runAction(inA);
    this._outScene.runAction(outA)
}});
cc.TransitionZoomFlipY.create = function (t, scene, o) {
    if (o == null)o = cc.TRANSITION_ORIENTATION_UP_OVER;
    var tempScene = new cc.TransitionZoomFlipY;
    tempScene.initWithDuration(t, scene, o);
    return tempScene
};
cc.TransitionZoomFlipAngular = cc.TransitionSceneOriented.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var inA, outA;
    this._inScene.visible = false;
    var inDeltaZ, inAngleZ, outDeltaZ, outAngleZ;
    if (this._orientation === cc.TRANSITION_ORIENTATION_RIGHT_OVER) {
        inDeltaZ = 90;
        inAngleZ = 270;
        outDeltaZ = 90;
        outAngleZ = 0
    } else {
        inDeltaZ = -90;
        inAngleZ = 90;
        outDeltaZ = -90;
        outAngleZ = 0
    }
    inA = cc.Sequence.create(cc.DelayTime.create(this._duration / 2), cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0,
        inAngleZ, inDeltaZ, -45, 0), cc.ScaleTo.create(this._duration / 2, 1), cc.Show.create()), cc.Show.create(), cc.CallFunc.create(this.finish, this));
    outA = cc.Sequence.create(cc.Spawn.create(cc.OrbitCamera.create(this._duration / 2, 1, 0, outAngleZ, outDeltaZ, 45, 0), cc.ScaleTo.create(this._duration / 2, 0.5)), cc.Hide.create(), cc.DelayTime.create(this._duration / 2));
    this._inScene.scale = 0.5;
    this._inScene.runAction(inA);
    this._outScene.runAction(outA)
}});
cc.TransitionZoomFlipAngular.create = function (t, scene, o) {
    if (o == null)o = cc.TRANSITION_ORIENTATION_RIGHT_OVER;
    var tempScene = new cc.TransitionZoomFlipAngular;
    tempScene.initWithDuration(t, scene, o);
    return tempScene
};
cc.TransitionFade = cc.TransitionScene.extend({_color: null, ctor: function () {
    cc.TransitionScene.prototype.ctor.call(this);
    this._color = cc.color()
}, onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var l = cc.LayerColor.create(this._color);
    this._inScene.visible = false;
    this.addChild(l, 2, cc.SCENE_FADE);
    var f = this.getChildByTag(cc.SCENE_FADE);
    var a = cc.Sequence.create(cc.FadeIn.create(this._duration / 2), cc.CallFunc.create(this.hideOutShowIn, this), cc.FadeOut.create(this._duration / 2), cc.CallFunc.create(this.finish,
        this));
    f.runAction(a)
}, onExit: function () {
    cc.TransitionScene.prototype.onExit.call(this);
    this.removeChildByTag(cc.SCENE_FADE, false)
}, initWithDuration: function (t, scene, color) {
    color = color || cc.color.BLACK;
    if (cc.TransitionScene.prototype.initWithDuration.call(this, t, scene)) {
        this._color.r = color.r;
        this._color.g = color.g;
        this._color.b = color.b;
        this._color.a = 0
    }
    return true
}});
cc.TransitionFade.create = function (t, scene, color) {
    var transition = new cc.TransitionFade;
    transition.initWithDuration(t, scene, color);
    return transition
};
cc.TransitionCrossFade = cc.TransitionScene.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var color = cc.color(0, 0, 0, 0);
    var winSize = cc.director.getWinSize();
    var layer = cc.LayerColor.create(color);
    var inTexture = cc.RenderTexture.create(winSize.width, winSize.height);
    if (null == inTexture)return;
    inTexture.sprite.anchorX = 0.5;
    inTexture.sprite.anchorY = 0.5;
    inTexture.attr({x: winSize.width / 2, y: winSize.height / 2, anchorX: 0.5, anchorY: 0.5});
    inTexture.begin();
    this._inScene.visit();
    inTexture.end();
    var outTexture = cc.RenderTexture.create(winSize.width, winSize.height);
    outTexture.setPosition(winSize.width / 2, winSize.height / 2);
    outTexture.sprite.anchorX = outTexture.anchorX = 0.5;
    outTexture.sprite.anchorY = outTexture.anchorY = 0.5;
    outTexture.begin();
    this._outScene.visit();
    outTexture.end();
    inTexture.sprite.setBlendFunc(cc.ONE, cc.ONE);
    outTexture.sprite.setBlendFunc(cc.SRC_ALPHA, cc.ONE_MINUS_SRC_ALPHA);
    layer.addChild(inTexture);
    layer.addChild(outTexture);
    inTexture.sprite.opacity = 255;
    outTexture.sprite.opacity =
        255;
    var layerAction = cc.Sequence.create(cc.FadeTo.create(this._duration, 0), cc.CallFunc.create(this.hideOutShowIn, this), cc.CallFunc.create(this.finish, this));
    outTexture.sprite.runAction(layerAction);
    this.addChild(layer, 2, cc.SCENE_FADE)
}, onExit: function () {
    this.removeChildByTag(cc.SCENE_FADE, false);
    cc.TransitionScene.prototype.onExit.call(this)
}, draw: function () {
}});
cc.TransitionCrossFade.create = function (t, scene) {
    var Transition = new cc.TransitionCrossFade;
    Transition.initWithDuration(t, scene);
    return Transition
};
cc.TransitionTurnOffTiles = cc.TransitionScene.extend({_sceneOrder: function () {
    this._isInSceneOnTop = false
}, onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var winSize = cc.director.getWinSize();
    var aspect = winSize.width / winSize.height;
    var x = 0 | 12 * aspect;
    var y = 12;
    var toff = cc.TurnOffTiles.create(this._duration, cc.size(x, y));
    var action = this.easeActionWithAction(toff);
    this._outScene.runAction(cc.Sequence.create(action, cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
}, easeActionWithAction: function (action) {
    return action
}});
cc.TransitionTurnOffTiles.create = function (t, scene) {
    var tempScene = new cc.TransitionTurnOffTiles;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionSplitCols = cc.TransitionScene.extend({onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    this._inScene.visible = false;
    var split = this.action();
    var seq = cc.Sequence.create(split, cc.CallFunc.create(this.hideOutShowIn, this), split.reverse());
    this.runAction(cc.Sequence.create(this.easeActionWithAction(seq), cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
}, easeActionWithAction: function (action) {
    return cc.EaseInOut.create(action, 3)
}, action: function () {
    return cc.SplitCols.create(this._duration /
        2, 3)
}});
cc.TransitionSplitCols.create = function (t, scene) {
    var tempScene = new cc.TransitionSplitCols;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionSplitRows = cc.TransitionSplitCols.extend({action: function () {
    return cc.SplitRows.create(this._duration / 2, 3)
}});
cc.TransitionSplitRows.create = function (t, scene) {
    var tempScene = new cc.TransitionSplitRows;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionFadeTR = cc.TransitionScene.extend({_sceneOrder: function () {
    this._isInSceneOnTop = false
}, onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var winSize = cc.director.getWinSize();
    var aspect = winSize.width / winSize.height;
    var x = 0 | 12 * aspect;
    var y = 12;
    var action = this.actionWithSize(cc.size(x, y));
    this._outScene.runAction(cc.Sequence.create(this.easeActionWithAction(action), cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
}, easeActionWithAction: function (action) {
    return action
},
    actionWithSize: function (size) {
        return cc.FadeOutTRTiles.create(this._duration, size)
    }});
cc.TransitionFadeTR.create = function (t, scene) {
    var tempScene = new cc.TransitionFadeTR;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionFadeBL = cc.TransitionFadeTR.extend({actionWithSize: function (size) {
    return cc.FadeOutBLTiles.create(this._duration, size)
}});
cc.TransitionFadeBL.create = function (t, scene) {
    var tempScene = new cc.TransitionFadeBL;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionFadeUp = cc.TransitionFadeTR.extend({actionWithSize: function (size) {
    return cc.FadeOutUpTiles.create(this._duration, size)
}});
cc.TransitionFadeUp.create = function (t, scene) {
    var tempScene = new cc.TransitionFadeUp;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionFadeDown = cc.TransitionFadeTR.extend({actionWithSize: function (size) {
    return cc.FadeOutDownTiles.create(this._duration, size)
}});
cc.TransitionFadeDown.create = function (t, scene) {
    var tempScene = new cc.TransitionFadeDown;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.SCENE_RADIAL = 49153;
cc.TransitionProgress = cc.TransitionScene.extend({_to: 0, _from: 0, _sceneToBeModified: null, _className: "TransitionProgress", _setAttrs: function (node, x, y) {
    node.attr({x: x, y: y, anchorX: 0.5, anchorY: 0.5})
}, onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    this._setupTransition();
    var winSize = cc.director.getWinSize();
    var texture = cc.RenderTexture.create(winSize.width, winSize.height);
    texture.sprite.anchorX = 0.5;
    texture.sprite.anchorY = 0.5;
    this._setAttrs(texture, winSize.width / 2, winSize.height / 2);
    texture.clear(0,
        0, 0, 1);
    texture.begin();
    this._sceneToBeModified.visit();
    texture.end();
    if (this._sceneToBeModified == this._outScene)this.hideOutShowIn();
    var pNode = this._progressTimerNodeWithRenderTexture(texture);
    var layerAction = cc.Sequence.create(cc.ProgressFromTo.create(this._duration, this._from, this._to), cc.CallFunc.create(this.finish, this));
    pNode.runAction(layerAction);
    this.addChild(pNode, 2, cc.SCENE_RADIAL)
}, onExit: function () {
    this.removeChildByTag(cc.SCENE_RADIAL, true);
    cc.TransitionScene.prototype.onExit.call(this)
},
    _setupTransition: function () {
        this._sceneToBeModified = this._outScene;
        this._from = 100;
        this._to = 0
    }, _progressTimerNodeWithRenderTexture: function (texture) {
        cc.log("cc.TransitionProgress._progressTimerNodeWithRenderTexture(): should be overridden in subclass");
        return null
    }, _sceneOrder: function () {
        this._isInSceneOnTop = false
    }});
cc.TransitionProgress.create = function (t, scene) {
    var tempScene = new cc.TransitionProgress;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionProgressRadialCCW = cc.TransitionProgress.extend({_progressTimerNodeWithRenderTexture: function (texture) {
    var size = cc.director.getWinSize();
    var pNode = cc.ProgressTimer.create(texture.sprite);
    if (cc._renderType === cc._RENDER_TYPE_WEBGL)pNode.sprite.flippedY = true;
    pNode.type = cc.ProgressTimer.TYPE_RADIAL;
    pNode.reverseDir = false;
    pNode.percentage = 100;
    this._setAttrs(pNode, size.width / 2, size.height / 2);
    return pNode
}});
cc.TransitionProgressRadialCCW.create = function (t, scene) {
    var tempScene = new cc.TransitionProgressRadialCCW;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionProgressRadialCW = cc.TransitionProgress.extend({_progressTimerNodeWithRenderTexture: function (texture) {
    var size = cc.director.getWinSize();
    var pNode = cc.ProgressTimer.create(texture.sprite);
    if (cc._renderType === cc._RENDER_TYPE_WEBGL)pNode.sprite.flippedY = true;
    pNode.type = cc.ProgressTimer.TYPE_RADIAL;
    pNode.reverseDir = true;
    pNode.percentage = 100;
    this._setAttrs(pNode, size.width / 2, size.height / 2);
    return pNode
}});
cc.TransitionProgressRadialCW.create = function (t, scene) {
    var tempScene = new cc.TransitionProgressRadialCW;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionProgressHorizontal = cc.TransitionProgress.extend({_progressTimerNodeWithRenderTexture: function (texture) {
    var size = cc.director.getWinSize();
    var pNode = cc.ProgressTimer.create(texture.sprite);
    if (cc._renderType === cc._RENDER_TYPE_WEBGL)pNode.sprite.flippedY = true;
    pNode.type = cc.ProgressTimer.TYPE_BAR;
    pNode.midPoint = cc.p(1, 0);
    pNode.barChangeRate = cc.p(1, 0);
    pNode.percentage = 100;
    this._setAttrs(pNode, size.width / 2, size.height / 2);
    return pNode
}});
cc.TransitionProgressHorizontal.create = function (t, scene) {
    var tempScene = new cc.TransitionProgressHorizontal;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionProgressVertical = cc.TransitionProgress.extend({_progressTimerNodeWithRenderTexture: function (texture) {
    var size = cc.director.getWinSize();
    var pNode = cc.ProgressTimer.create(texture.sprite);
    if (cc._renderType === cc._RENDER_TYPE_WEBGL)pNode.sprite.flippedY = true;
    pNode.type = cc.ProgressTimer.TYPE_BAR;
    pNode.midPoint = cc.p(0, 0);
    pNode.barChangeRate = cc.p(0, 1);
    pNode.percentage = 100;
    this._setAttrs(pNode, size.width / 2, size.height / 2);
    return pNode
}});
cc.TransitionProgressVertical.create = function (t, scene) {
    var tempScene = new cc.TransitionProgressVertical;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionProgressInOut = cc.TransitionProgress.extend({_progressTimerNodeWithRenderTexture: function (texture) {
    var size = cc.director.getWinSize();
    var pNode = cc.ProgressTimer.create(texture.sprite);
    if (cc._renderType === cc._RENDER_TYPE_WEBGL)pNode.sprite.flippedY = true;
    pNode.type = cc.ProgressTimer.TYPE_BAR;
    pNode.midPoint = cc.p(0.5, 0.5);
    pNode.barChangeRate = cc.p(1, 1);
    pNode.percentage = 0;
    this._setAttrs(pNode, size.width / 2, size.height / 2);
    return pNode
}, _sceneOrder: function () {
    this._isInSceneOnTop = false
}, _setupTransition: function () {
    this._sceneToBeModified =
        this._inScene;
    this._from = 0;
    this._to = 100
}});
cc.TransitionProgressInOut.create = function (t, scene) {
    var tempScene = new cc.TransitionProgressInOut;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionProgressOutIn = cc.TransitionProgress.extend({_progressTimerNodeWithRenderTexture: function (texture) {
    var size = cc.director.getWinSize();
    var pNode = cc.ProgressTimer.create(texture.sprite);
    if (cc._renderType === cc._RENDER_TYPE_WEBGL)pNode.sprite.flippedY = true;
    pNode.type = cc.ProgressTimer.TYPE_BAR;
    pNode.midPoint = cc.p(0.5, 0.5);
    pNode.barChangeRate = cc.p(1, 1);
    pNode.percentage = 100;
    this._setAttrs(pNode, size.width / 2, size.height / 2);
    return pNode
}});
cc.TransitionProgressOutIn.create = function (t, scene) {
    var tempScene = new cc.TransitionProgressOutIn;
    if (tempScene != null && tempScene.initWithDuration(t, scene))return tempScene;
    return null
};
cc.TransitionPageTurn = cc.TransitionScene.extend({_back: true, _className: "TransitionPageTurn", initWithDuration: function (t, scene, backwards) {
    this._back = backwards;
    if (cc.TransitionScene.prototype.initWithDuration.call(this, t, scene));
    return true
}, actionWithSize: function (vector) {
    if (this._back)return cc.ReverseTime.create(cc.PageTurn3D.create(this._duration, vector)); else return cc.PageTurn3D.create(this._duration, vector)
}, onEnter: function () {
    cc.TransitionScene.prototype.onEnter.call(this);
    var winSize = cc.director.getWinSize();
    var x, y;
    if (winSize.width > winSize.height) {
        x = 16;
        y = 12
    } else {
        x = 12;
        y = 16
    }
    var action = this.actionWithSize(cc.size(x, y));
    if (!this._back)this._outScene.runAction(cc.Sequence.create(action, cc.CallFunc.create(this.finish, this), cc.StopGrid.create())); else {
        this._inScene.visible = false;
        this._inScene.runAction(cc.Sequence.create(cc.Show.create(), action, cc.CallFunc.create(this.finish, this), cc.StopGrid.create()))
    }
}, _sceneOrder: function () {
    this._isInSceneOnTop = this._back
}});
cc.TransitionPageTurn.create = function (t, scene, backwards) {
    var transition = new cc.TransitionPageTurn;
    transition.initWithDuration(t, scene, backwards);
    return transition
};