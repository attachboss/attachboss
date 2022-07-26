// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ../../../webgl ./enums ./shaders/MaterialPrograms".split(" "),function(t,u,e,m,q,g,n){var p=function(e){return e===g.WGLDrawPhase.HITTEST||e===g.WGLDrawPhase.LABEL_ALPHA},r=function(a,d,c,b){b=b.reduce(function(b,d){var c;return e.__assign(e.__assign({},b),(c={},c[d]=a.driverTestResult[d],c))},{});d=e.__assign(e.__assign(e.__assign(e.__assign({},d.getVariation()),a.rendererInfo.getVariation()),{highlight:a.drawPhase===g.WGLDrawPhase.HIGHLIGHT,id:p(a.drawPhase)}),
b);if(m.isSome(c))for(b=0;b<c.length;b++)d[c[b]]=!0;return d};return function(){function a(d){this._programByKey=new Map;this._programCache=new q.ProgramCache(d)}a.prototype.dispose=function(){this._programCache&&this._programCache.dispose()};a.prototype.getProgram=function(d,c,b,a){void 0===b&&(b=[]);void 0===a&&(a=[]);var f=c.path+b.join(".")+a.join(".");if(this._programByKey.has(f))return this._programByKey.get(f);a=a.reduce(function(b,c){var a;return e.__assign(e.__assign({},b),(a={},a[c]=d.driverTestResult[c],
a))},{});b=e.__assign(e.__assign({},b.reduce(function(b,c){var a;return e.__assign(e.__assign({},b),(a={},a[c]=!0,a))},{})),a);c=this._programCache.getProgram(n.createProgramTemplate(c.path,c.attributes),b);if(!c)throw Error("Unable to get program for key: ${key}");this._programByKey.set(f,c);return c};a.prototype.getMaterialProgram=function(a,c,b,e,f,h){void 0===h&&(h=["ignoresSamplerPrecision"]);var d,l=h;d=a.rendererInfo;var k=a.drawPhase,l=c.getVariationHash()+"-"+l.join(".")+"-",k=(p(k)?1:0)|
(k===g.WGLDrawPhase.HIGHLIGHT?2:0);d=l+k+"-"+d.getVariationHash()+"-"+(m.isSome(f)&&f.join("."));if(this._programByKey.has(d))return this._programByKey.get(d);a=r(a,c,f,h);b=this._programCache.getProgram(n.createProgramTemplate(b,e),a);if(!b)throw Error("Unable to get program for key: ${key}");this._programByKey.set(d,b);return b};return a}()});