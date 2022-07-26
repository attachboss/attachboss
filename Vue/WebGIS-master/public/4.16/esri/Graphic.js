// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./geometry ./PopupTemplate ./symbols ./core/JSONSupport ./core/lang ./core/maybe ./core/accessorSupport/decorators ./geometry/support/jsonUtils ./symbols/support/jsonUtils".split(" "),function(f,u,d,l,m,n,p,h,k,e,q,r){f=function(f){function b(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a=f.apply(this,a)||this;a.layer=null;a.popupTemplate=null;a.sourceLayer=null;Object.defineProperty(a,"uid",{value:g.generateUID()});return a}d.__extends(b,f);g=b;b.prototype.normalizeCtorArgs=
function(a,c,b,d){return a&&!a.declaredClass?a:{geometry:a,symbol:c,attributes:b,popupTemplate:d}};Object.defineProperty(b.prototype,"attributes",{set:function(a){var c=this._get("attributes");c!==a&&(this._set("attributes",a),this._notifyLayer("attributes",c,a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"geometry",{set:function(a){var c=this._get("geometry");c!==a&&(this._set("geometry",a),this._notifyLayer("geometry",c,a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"symbol",{set:function(a){var c=this._get("symbol");c!==a&&(this._set("symbol",a),this._notifyLayer("symbol",c,a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{set:function(a){var c=this._get("visible");c!==a&&(this._set("visible",a),this._notifyLayer("visible",c,a))},enumerable:!0,configurable:!0});b.prototype.getEffectivePopupTemplate=function(a){void 0===a&&(a=!1);return this.popupTemplate?this.popupTemplate:this.sourceLayer?this.sourceLayer.popupTemplate?this.sourceLayer.popupTemplate:
a&&k.isSome(this.sourceLayer.defaultPopupTemplate)?this.sourceLayer.defaultPopupTemplate:null:null};b.prototype.getAttribute=function(a){return this.attributes&&this.attributes[a]};b.prototype.setAttribute=function(a,c){var b;this.attributes?(b=this.getAttribute(a),this.attributes[a]=c,this._notifyLayer("attributes",b,c,a)):(this.attributes=(b={},b[a]=c,b),this._notifyLayer("attributes",void 0,c,a))};b.prototype.getObjectId=function(){return this.sourceLayer?this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):
null:null};b.prototype.toJSON=function(){return{geometry:k.isSome(this.geometry)?this.geometry.toJSON():null,symbol:k.isSome(this.symbol)?this.symbol.toJSON():null,attributes:d.__assign({},this.attributes),popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}};b.prototype.clone=function(){return new g(this.cloneProperties())};b.prototype.cloneProperties=function(){return{attributes:h.clone(this.attributes),geometry:h.clone(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&
this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:h.clone(this.symbol),visible:this.visible}};b.prototype._notifyLayer=function(a,b,d,e){this.layer&&this.layer.graphicChanged&&(b={graphic:this,property:a,oldValue:b,newValue:d},"attributes"===a&&(b.attributeName=e),this.layer.graphicChanged(b))};var g;d.__decorate([e.property({value:null})],b.prototype,"attributes",null);d.__decorate([e.property({value:null,types:l.geometryTypes,json:{read:q.fromJSON}})],b.prototype,"geometry",null);d.__decorate([e.property()],
b.prototype,"layer",void 0);d.__decorate([e.property({type:m})],b.prototype,"popupTemplate",void 0);d.__decorate([e.property()],b.prototype,"sourceLayer",void 0);d.__decorate([e.property({value:null,types:n.symbolTypes,json:{read:r.read}})],b.prototype,"symbol",null);d.__decorate([e.property({type:Boolean,value:!0})],b.prototype,"visible",null);return b=g=d.__decorate([e.subclass("esri.Graphic")],b)}(p.JSONSupport);var t=0;(function(d){d.generateUID=function(){return t++}})(f||(f={}));return f});