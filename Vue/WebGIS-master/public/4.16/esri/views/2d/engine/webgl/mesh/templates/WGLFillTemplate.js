// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/mathUtils ../../../../../../core/screenUtils ../../color ../../definitions ../../GeometryUtils ../../number ../../materialKey/MaterialKey ./WGLBaseFillTemplate ./WGLMeshTemplate".split(" "),function(l,v,z,q,r,w,A,B,d,x,C,D){Object.defineProperty(v,"__esModule",{value:!0});l=function(l){function p(d,a,f,k,m,b,g,c,h,n){var e=l.call(this)||this;e.effects=n;d=x.FillMaterialKey.load(x.createMaterialKey(e.geometryType,d,!1));a&&(d.sdf=a.sdf,d.pattern=
!0,d.textureBinding=a.textureBinding);e.fillColor=f;e.tl=k;e.br=m;e.aux1=b;e.aux2=g;e.aux3=c;e.isBFS=h;e._materialKey=d.data;return e}z.__extends(p,l);p.fromCIMFill=function(y,a,f,k){void 0===k&&(k=!1);var m=a.color,m=m&&w.premultiplyAlphaRGBA(m)||0;if(!f)return f=d.i8888to32(0,0,0,a.colorLocked?1:0),new p(y,null,m,0,0,0,0,f,k,a.effects);var b=f.rect,g=f.width,c=f.height,h=b.x+1,n=b.y+1,e=h+g,l=n+c,b=q.nextHighestPowerOfTwo(r.pt2px(a.height||0));255<b?b=255:0>=b&&(b=q.nextHighestPowerOfTwo(l-n));
c=q.nextHighestPowerOfTwo(r.pt2px(a.height/c*g||0));255<c?c=255:0>=c&&(c=q.nextHighestPowerOfTwo(e-h));var t=r.pt2px(a.offsetX||0)+128;255<t&&(t=255);var u=r.pt2px(-a.offsetY||0)+128;255<u&&(u=255);g=a.scaleX||1;h=d.i1616to32(h,n);e=d.i1616to32(e,l);b=d.i8888to32(c,b,t,u);l=d.i1616to32(128*g,128);g=d.i8888to32(0,0,B.degToByte(a.angle),a.colorLocked?1:0);return new p(y,f,m,h,e,b,l,g,k,a.effects)};p.fromSimpleFill=function(l,a,f,k){void 0===k&&(k=!1);var m=a.color;a=m&&"none"!==a.style&&w.premultiplyAlphaRGBA(m)||
0;m=d.i8888to32(0,0,0,k?255:0);if(!f)return new p(l,null,a,0,0,0,0,m,k,null);var b=f.rect,g=b.x+1,c=b.y+1,h=b.x+1+f.width,n=b.y+1+f.height,b=d.i1616to32(g,c),e=d.i1616to32(h,n),g=d.i8888to32(q.nextHighestPowerOfTwo(h-g),q.nextHighestPowerOfTwo(n-c),0,0),c=d.i1616to32(128,128);return new p(l,f,a,b,e,g,c,m,k,null)};p.fromPictureFill=function(l,a,f,k){void 0===k&&(k=!1);var m=A.PICTURE_FILL_COLOR,b=f.rect,g=b.x+1,c=b.y+1,b=g+f.width,h=c+f.height,g=d.i1616to32(g,c),b=d.i1616to32(b,h),h=q.nextHighestPowerOfTwo(r.pt2px(a.width));
255<h&&(h=255);c=q.nextHighestPowerOfTwo(r.pt2px(a.height));255<c&&(c=255);var n=r.pt2px(a.xoffset)+128;255<n&&(n=255);var e=r.pt2px(-a.yoffset)+128;255<e&&(e=255);h=d.i8888to32(h,c,n,e);a=d.i1616to32(128*a.xscale,128*a.yscale);c=d.i8888to32(0,0,0,k?255:0);return new p(l,f,m,g,b,h,a,c,k,null)};return p}(C.default(D.default));v.default=l});