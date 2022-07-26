// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../PointToPointAnimationController ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../../animation/easing".split(" "),function(h,k,l,n,e,d,p,q,m,r,t){Object.defineProperty(k,"__esModule",{value:!0});h=function(g){function a(){var b=null!==g&&g.apply(this,arguments)||this;b.zoomLocation=
d.vec3f64.create();b.tmpCamera=new m.default;b.tmpRayDir=d.vec3f64.create();b.tmpCenter=d.vec3f64.create();b.constraintOptions={selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new m.default,interactionDirection:null,tiltMode:0};return b}l.__extends(a,g);a.prototype.zoomStep=function(b,u){if(this.active){var c=this.view.state,a=this.constraintOptions.interactionStartCamera;this.animation.finished?a.copyFrom(c.camera):this.animation.cameraAt(1,a);this.tmpCamera.copyFrom(c.camera);
c=new r.Intersector(this.view.viewingMode);0<b?(this.intersectionHelper.intersectScreenFreePointFallback(u,this.zoomLocation),this.intersectionHelper.intersectRay(this.tmpCamera.ray,c,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter)):this.intersectionHelper.intersectRay(this.tmpCamera.ray,c,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:e.vec3.copy(this.zoomLocation,this.tmpCamera.center);this.updateCamera(this.tmpCamera,Math.pow(.6,b),this.zoomLocation);this.begin(this.tmpCamera)}};
a.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:t.outExpo}};a.prototype.updateCamera=function(b,a,c){e.vec3.subtract(this.tmpRayDir,c,b.eye);var d=e.vec3.length(this.tmpRayDir),f=d*a;1>=a&&4>f&&(f=4,a=f/d);1E-6>Math.abs(d-f)||(e.vec3.scale(this.tmpRayDir,this.tmpRayDir,a),e.vec3.subtract(b.eye,c,this.tmpRayDir),e.vec3.lerp(b.center,b.center,c,1-a),p.applyAll(this.view,b,this.constraintOptions))};return a=l.__decorate([n.subclass("esri.views.3d.state.controllers.local.ZoomStepController")],
a)}(q.PointToPointAnimationController);k.ZoomStepController=h});