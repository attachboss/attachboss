// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./util/serializationUtils"],function(g,f,l,m,n){function h(b){for(var a=[[],[],[],[],[]],c=0;c<b.length;c++)for(var d=0,k=b[c].displayRecords;d<k.length;d++){var e=k[d];a[e.geometryType].push(e)}return a}Object.defineProperty(f,"__esModule",{value:!0});f.groupRecordsByGeometryType=h;g=function(){function b(){}Object.defineProperty(b.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=
new Map;for(var a=0,c=this.displayObjects;a<c.length;a++){var d=c[a];this._displayObjectRegistry.set(d.id,d)}}return this._displayObjectRegistry},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"displayList",{get:function(){return this._displayList},enumerable:!0,configurable:!0});b.prototype.computeDisplayList=function(a){this._displayList=new l(a);if(a){a=0;for(var c=this.displayObjects;a<c.length;a++)for(var d=0,b=c[a].displayRecords;d<b.length;d++)this._displayList.addToList(b[d])}else for(a=
h(this.displayObjects),c=a.length,d=0;d<c;++d)this._displayList.addToList(a[d])};b.prototype.clone=function(){var a=new b;this.displayObjects&&(a.displayObjects=this.displayObjects.map(function(a){return a.clone()}));return a};b.prototype.serialize=function(a){n.serializeList(a,this.displayObjects);return a};b.prototype._deserializeObjects=function(a){for(var c=a.readInt32(),c=Array(c),d=new Map,b=0;b<c.length;++b){var e=m.deserialize(a);c[b]=e;d.set(e.id,e)}this.displayObjects=c;this._displayList=
null;this._displayObjectRegistry=d};b.deserialize=function(a){var c=new b;c._deserializeObjects(a);return c};return b}();f.default=g});