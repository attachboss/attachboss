// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./get ./utils ./extensions/serializableProperty".split(" "),function(D,e,q,v,C,t){function r(w,a,f){void 0===f&&(f=z);if(a&&"object"===typeof a){for(var g=C.getProperties(w),p=g.metadatas,e={},d=0,h=Object.getOwnPropertyNames(a);d<h.length;d++){var m=e,k=p,c=h[d],n=a,q=f,b=t.originSpecificReadPropertyDefinition(k[c],q);b&&(!b.read||!1!==b.read.enabled&&!b.read.source)&&(m[c]=!0);for(var x=0,r=Object.getOwnPropertyNames(k);x<r.length;x++){var A=r[x],b=t.originSpecificReadPropertyDefinition(k[A],
q),l;a:{l=c;var B=n;if(b&&b.read&&!1!==b.read.enabled&&b.read.source)if(b=b.read.source,"string"===typeof b){if(b===l||-1<b.indexOf(".")&&0===b.indexOf(l)&&v.exists(b,B)){l=!0;break a}}else for(var y=0;y<b.length;y++){var u=b[y];if(u===l||-1<u.indexOf(".")&&0===u.indexOf(l)&&v.exists(u,B)){l=!0;break a}}l=!1}l&&(m[A]=!0)}}g.setDefaultOrigin(f.origin);h=0;for(m=Object.getOwnPropertyNames(e);h<m.length;h++)d=m[h],c=(k=t.originSpecificReadPropertyDefinition(p[d],f).read)&&k.source,n=void 0,n=c&&"string"===
typeof c?v.valueOf(a,c):a[d],k&&k.reader&&(n=k.reader.call(w,n,a,f)),void 0!==n&&g.set(d,n);if(!f||!f.ignoreDefaults)for(a=0,p=Object.getOwnPropertyNames(p);a<p.length;a++)d=p[a],e[d]||(h=w,m=g,k=f,c=(c=t.originSpecificPropertyDefinition(m.metadatas[d],"any",k))&&c.default,void 0!==c&&(h="function"===typeof c?c.call(h,d,k):c,void 0!==h&&m.set(d,h)));g.setDefaultOrigin("user")}}Object.defineProperty(e,"__esModule",{value:!0});var z={origin:"service"};e.read=r;e.readLoadable=function(e,a,f,g){void 0===
g&&(g=z);a=q.__assign(q.__assign({},g),{messages:[]});f(a);a.messages.forEach(function(a){"warning"!==a.type||e.loaded?g&&g.messages.push(a):e.loadWarnings.push(a)})};e.default=r});