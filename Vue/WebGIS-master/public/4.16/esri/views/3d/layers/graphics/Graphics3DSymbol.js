// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DGraphic ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayerFactory ./Loadable ./symbolComplexity".split(" "),function(z,A,l,t,f,p,u,v,w,x,y){var n={renderPriority:0,renderPriorityStep:1,ignoreDrivers:!1};return function(q){function e(a,c,d){var b=q.call(this)||this;b._symbol=a;b._context=c;b._backgroundLayers=d;b._destroyed=!1;b.symbolLayers=[];b.referenced=0;return b}l.__extends(e,
q);Object.defineProperty(e.prototype,"symbol",{get:function(){return this._symbol},set:function(a){this._symbol=a;if(this.symbolLayers)for(var c=0;c<a.symbolLayers.length;c++){var d=this.symbolLayers[c];f.isNone(d)||(d.symbol=a,d.symbolLayer=a.symbolLayers.items[c])}},enumerable:!0,configurable:!0});e.prototype.doLoad=function(a){return l.__awaiter(this,void 0,void 0,function(){var c,d,b,g,e,m=this;return l.__generator(this,function(h){switch(h.label){case 0:c=this._symbol.symbolLayers;this._backgroundLayers&&
(c=this._backgroundLayers.concat(c));for(d=c.length;this.symbolLayers.length<c.length;)this.symbolLayers.push(null);this.symbolLayers.length=c.length;b=function(b){var e=c.getItemAt(b);if(!1===e.enabled)return"continue";n.renderPriority=1-(1+b)/d;n.renderPriorityStep=1/d;n.ignoreDrivers=e._ignoreDrivers;var r=w.make(g.symbol,e,g._context,n);p.onAbortOrThrow(a,function(){m.symbolLayers[b]=null;r.destroy()});g.symbolLayers[b]=r};g=this;for(e=0;e<d;e++)b(e);return[4,t.forEach(this.symbolLayers,function(a,
c){return l.__awaiter(m,void 0,void 0,function(){return l.__generator(this,function(b){switch(b.label){case 0:if(!f.isSome(a))return[3,4];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,a.load()];case 2:return b.sent(),[3,4];case 3:return b.sent(),this.symbolLayers[c]=null,[3,4];case 4:return[2]}})})})];case 1:h.sent();p.throwIfAborted(a);if(this.symbolLayers.length&&!this.symbolLayers.some(function(a){return!!a}))throw Error();return[2]}})})};e.prototype.getSymbolLayerSize=function(a){a=this.symbolLayers[a];
return f.isSome(a)?a.getCachedSize():null};e.prototype.createGraphics3DGraphic=function(a,c){for(var d=a.graphic,b=Array(this.symbolLayers.length),e=0;e<this.symbolLayers.length;e++){var k=this.symbolLayers[e];b[e]=f.isSome(k)?k.createGraphics3DGraphic(a):null}return new u(d,c||this,b,a.layer,this._context.arcade||this._context.featureExpressionInfoContext&&this._context.featureExpressionInfoContext.arcade&&this._context.featureExpressionInfoContext.arcade.modules||null)};Object.defineProperty(e.prototype,
"complexity",{get:function(){return y.totalSymbolComplexities(this.symbolLayers.map(function(a){return f.isSome(a)&&a.complexity}))},enumerable:!0,configurable:!0});e.prototype.globalPropertyChanged=function(a,c){for(var d=this.symbolLayers.length,b=function(b){var d=e.symbolLayers[b],g=function(a){a=a._graphics[b];return a instanceof v?a:null};if(f.isSome(d)&&!d.globalPropertyChanged(a,c,g))return{value:!1}},e=this,k=0;k<d;k++){var m=b(k);if("object"===typeof m)return m.value}return!0};e.prototype.applyRendererDiff=
function(a,c){return 1!==this.loadStatus?!1:this.symbolLayers.reduce(function(d,b){return d&&(f.isNone(b)||b.applyRendererDiff(a,c))},!0)};e.prototype.prepareSymbolPatch=function(a){if(2!==this.loadStatus&&"partial"===a.diff.type){var c=a.diff.diff;if(c.symbolLayers&&"partial"===c.symbolLayers.type){var d=c.symbolLayers.diff;this.symbolLayers.forEach(function(b,c){var e;if(!f.isNone(b)){var g=d[c];if(g){var h={diff:g,graphics3DGraphicPatches:[],symbolLayerStatePatches:[]};b.prepareSymbolLayerPatch(h);
(e=a.symbolStatePatches).push.apply(e,h.symbolLayerStatePatches);h.graphics3DGraphicPatches.length&&a.graphics3DGraphicPatches.push(function(a,b){var d=a._graphics[c];f.isSome(d)&&h.graphics3DGraphicPatches.forEach(function(a){return a(d,b)})})}}})}}};e.prototype.updateGeometry=function(a,c){for(var d=0;d<this.symbolLayers.length;d++){var b=this.symbolLayers[d];if(!f.isNone(b)){var e=a._graphics[d];if(f.isSome(e)&&!b.updateGeometry(e,c))return!1}}return!0};e.prototype.onRemoveGraphic=function(a){for(var c=
0;c<this.symbolLayers.length;c++){var d=this.symbolLayers[c];if(!f.isNone(d)){var b=a._graphics[c];if(f.isSome(b))d.onRemoveGraphic(b)}}};e.prototype.getFastUpdateStatus=function(){var a=0,c=0,d=0;this.symbolLayers.forEach(function(b){f.isNone(b)||(0===b.loadStatus?a++:b.isFastUpdatesEnabled()?d++:c++)});return{loading:a,slow:c,fast:d}};e.prototype.destroy=function(){if(this.destroyed)console.error("Graphics3DSymbol.destroy called when already destroyed!");else{this.abortLoad();for(var a=0,c=this.symbolLayers;a<
c.length;a++){var d=c[a];f.isSome(d)&&d.destroy()}this.symbolLayers.length=0;this._destroyed=!0}};Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!0,configurable:!0});return e}(x.Loadable)});