// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Graphic ../../../PopupTemplate ../../../core/Collection ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../renderers/SimpleRenderer ../../../renderers/support/jsonUtils ../../../tasks/support/FeatureSet ./LayerView2D ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(y,z,l,n,p,q,m,g,r,h,t,u,v,w,x){return function(k){function d(){var a=null!==k&&k.apply(this,arguments)||this;a._graphicsViewMap=
{};a._popupTemplates=new Map;a.graphicsViews=[];return a}l.__extends(d,k);d.prototype.hitTest=function(a,b){var c=this;if(this.suspended||!this.graphicsViews.length)return m.resolve();var d=this.graphicsViews.reverse().map(function(c){return c.hitTest(a,b)});return m.all(d).then(function(a){return a.filter(function(a,b){a&&(a.popupTemplate=c._popupTemplates.get(c.graphicsViews[b]),a.layer=c.layer,a.sourceLayer=c.layer);return!!a})[0]||null})};d.prototype.update=function(a){if(this.graphicsViews)for(var b=
0,c=this.graphicsViews;b<c.length;b++)c[b].processUpdate(a)};d.prototype.attach=function(){var a=this;this.layer.featureCollections.forEach(function(b){var c=u.fromJSON(b.featureSet),d=new (q.ofType(n))(c.features),e;if(a._graphicsViewMap[c.geometryType])e=a._graphicsViewMap[c.geometryType],e.graphics.addMany(d);else{e=b.layerDefinition.drawingInfo;b=b.popupInfo?p.fromJSON(b.popupInfo):null;var f=t.fromJSON(e.renderer);e=new w.default({requestUpdateCallback:function(){return a.requestUpdate()},view:a.view,
graphics:d,renderer:f});a._graphicsViewMap[c.geometryType]=e;a._popupTemplates.set(e,b);"polygon"!==c.geometryType||a.layer.polygonSymbol?"polyline"!==c.geometryType||a.layer.lineSymbol?"point"!==c.geometryType||a.layer.pointSymbol||(a.layer.pointSymbol=f.symbol):a.layer.lineSymbol=f.symbol:a.layer.polygonSymbol=f.symbol;a.graphicsViews.push(e);a.container.addChild(e.container)}});this.handles.add([g.init(this.layer,"polygonSymbol",function(b){a._graphicsViewMap.polygon.renderer=new h({symbol:b})}),
g.init(this.layer,"lineSymbol",function(b){a._graphicsViewMap.polyline.renderer=new h({symbol:b})}),g.init(this.layer,"pointSymbol",function(b){a._graphicsViewMap.point.renderer=new h({symbol:b})})])};d.prototype.detach=function(){this.container.removeAllChildren();for(var a=0,b=this.graphicsViews;a<b.length;a++){var c=b[a];c.destroy();c.view=null;c.renderer=null}this.graphicsViews.length=0};d.prototype.moveStart=function(){};d.prototype.moveEnd=function(){};d.prototype.viewChange=function(){for(var a=
0,b=this.graphicsViews;a<b.length;a++)b[a].viewChange()};return d=l.__decorate([r.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],d)}(v.LayerView2DMixin(x))});