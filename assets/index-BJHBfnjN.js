(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Go="179",Qf=0,Sl=1,ep=2,qc=1,tp=2,yi=3,$i=0,Ut=1,wi=2,Vi=0,Hn=1,bl=2,Tl=3,Al=4,ip=5,hn=100,np=101,sp=102,rp=103,ap=104,op=200,lp=201,cp=202,hp=203,Ba=204,Ha=205,dp=206,up=207,fp=208,pp=209,mp=210,gp=211,vp=212,_p=213,xp=214,Va=0,Ga=1,Wa=2,Xn=3,Xa=4,Ya=5,qa=6,$a=7,$c=0,Ep=1,Mp=2,Gi=0,jc=1,yp=2,wp=3,Sp=4,bp=5,Tp=6,Ap=7,Zc=300,Yn=301,qn=302,ja=303,Za=304,Xr=306,Ka=1e3,un=1001,Ja=1002,ii=1003,Cp=1004,Ks=1005,Vt=1006,la=1007,Hi=1008,Ri=1009,Kc=1010,Jc=1011,As=1012,Wo=1013,pn=1014,Si=1015,Os=1016,Xo=1017,Yo=1018,Cs=1020,Qc=35902,eh=1021,th=1022,ti=1023,Rs=1026,Ps=1027,ih=1028,qo=1029,nh=1030,$o=1031,jo=1033,yr=33776,wr=33777,Sr=33778,br=33779,Qa=35840,eo=35841,to=35842,io=35843,no=36196,so=37492,ro=37496,ao=37808,oo=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,vo=37818,_o=37819,xo=37820,Eo=37821,Tr=36492,Mo=36494,yo=36495,sh=36283,wo=36284,So=36285,bo=36286,Rp=3200,Pp=3201,Lp=0,Dp=1,Bi="",$t="srgb",mn="srgb-linear",Lr="linear",Je="srgb",xn=7680,Cl=519,Ip=512,Up=513,Np=514,rh=515,Op=516,Fp=517,kp=518,zp=519,Rl=35044,Pl="300 es",ci=2e3,Dr=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ll=1234567;const hs=Math.PI/180,Ls=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Zo(i,e){return(i%e+e)%e}function Bp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hp(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function Vp(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function Gp(i,e=1){return e-Math.abs(Zo(i,e*2)-e)}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qp(i,e){return i+Math.random()*(e-i)}function $p(i){return i*(.5-Math.random())}function jp(i){i!==void 0&&(Ll=i);let e=Ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zp(i){return i*hs}function Kp(i){return i*Ls}function Jp(i){return(i&i-1)===0&&i!==0}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tm(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*u,c*p,o*l);break;case"YZY":i.set(c*p,o*d,c*u,o*l);break;case"ZXZ":i.set(c*u,c*p,o*d,o*l);break;case"XZX":i.set(o*d,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*d,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:hs,RAD2DEG:Ls,generateUUID:Jn,clamp:Ve,euclideanModulo:Zo,mapLinear:Bp,inverseLerp:Hp,lerp:ds,damp:Vp,pingpong:Gp,smoothstep:Wp,smootherstep:Xp,randInt:Yp,randFloat:qp,randFloatSpread:$p,seededRandom:jp,degToRad:Zp,radToDeg:Kp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:em,setQuaternionFromProperEuler:tm,normalize:Pt,denormalize:On};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ki{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],u=n[s+3];const p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(u!==_||c!==p||l!==m||d!==v){let f=1-o;const h=c*p+l*m+d*v+u*_,b=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const C=Math.sqrt(S),R=Math.atan2(C,h*b);f=Math.sin(f*R)/C,o=Math.sin(o*R)/C}const E=o*b;if(c=c*f+p*E,l=l*f+m*E,d=d*f+v*E,u=u*f+_*E,f===1-o){const C=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=C,l*=C,d*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],u=r[a],p=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+d*u+c*m-l*p,e[t+1]=c*v+d*p+l*u-o*m,e[t+2]=l*v+d*m+o*p-c*u,e[t+3]=d*v-o*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),u=o(r/2),p=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=p*d*u+l*m*v,this._y=l*m*u-p*d*v,this._z=l*d*v+p*m*u,this._w=l*d*u-p*m*v;break;case"YXZ":this._x=p*d*u+l*m*v,this._y=l*m*u-p*d*v,this._z=l*d*v-p*m*u,this._w=l*d*u+p*m*v;break;case"ZXY":this._x=p*d*u-l*m*v,this._y=l*m*u+p*d*v,this._z=l*d*v+p*m*u,this._w=l*d*u-p*m*v;break;case"ZYX":this._x=p*d*u-l*m*v,this._y=l*m*u+p*d*v,this._z=l*d*v-p*m*u,this._w=l*d*u+p*m*v;break;case"YZX":this._x=p*d*u+l*m*v,this._y=l*m*u+p*d*v,this._z=l*d*v-p*m*u,this._w=l*d*u-p*m*v;break;case"XZY":this._x=p*d*u-l*m*v,this._y=l*m*u-p*d*v,this._z=l*d*v+p*m*u,this._w=l*d*u+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(d-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,p=Math.sin(t*d)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=s+c*u+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new N,Dl=new Ki;class Oe{constructor(e,t,n,s,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],p=n[2],m=n[5],v=n[8],_=s[0],f=s[3],h=s[6],b=s[1],S=s[4],E=s[7],C=s[2],R=s[5],P=s[8];return r[0]=a*_+o*b+c*C,r[3]=a*f+o*S+c*R,r[6]=a*h+o*E+c*P,r[1]=l*_+d*b+u*C,r[4]=l*f+d*S+u*R,r[7]=l*h+d*E+u*P,r[2]=p*_+m*b+v*C,r[5]=p*f+m*S+v*R,r[8]=p*h+m*E+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,p=o*c-d*r,m=l*r-a*c,v=t*u+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=u*_,e[1]=(s*l-d*n)*_,e[2]=(o*n-s*a)*_,e[3]=p*_,e[4]=(d*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Oe;function ah(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function im(){const i=Ds("canvas");return i.style.display="block",i}const Il={};function Vn(i){i in Il||(Il[i]=!0,console.warn(i))}function nm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ul=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){const i={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Lr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vn("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vn("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mn]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Ul,fromXYZ:Nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}const We=sm();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let En;class rm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{En===void 0&&(En=Ds("canvas")),En.width=e.width,En.height=e.height;const s=En.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=En}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let am=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(da(s[a].image)):r.push(da(s[a]))}else r=da(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let om=0;const ua=new N;class St extends Kn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=un,s=un,r=Vt,a=Hi,o=ti,c=Ri,l=St.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Jn(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Zc;St.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],u=c[8],p=c[1],m=c[5],v=c[9],_=c[2],f=c[6],h=c[10];if(Math.abs(d-p)<.01&&Math.abs(u-_)<.01&&Math.abs(v-f)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+_)<.1&&Math.abs(v+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,E=(m+1)/2,C=(h+1)/2,R=(d+p)/4,P=(u+_)/4,U=(v+f)/4;return S>E&&S>C?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=P/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=R/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=U/r),this.set(n,s,r,t),this}let b=Math.sqrt((f-v)*(f-v)+(u-_)*(u-_)+(p-d)*(p-d));return Math.abs(b)<.001&&(b=1),this.x=(f-v)/b,this.y=(u-_)/b,this.z=(p-d)/b,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lm extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new St(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ko(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends lm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends St{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ii,this.minFilter=ii,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Qs.subVectors(this.max,is),Mn.subVectors(e.a,is),yn.subVectors(e.b,is),wn.subVectors(e.c,is),Di.subVectors(yn,Mn),Ii.subVectors(wn,yn),tn.subVectors(Mn,wn);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-tn.z,tn.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,tn.z,0,-tn.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-tn.y,tn.x,0];return!fa(t,Mn,yn,wn,Qs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Mn,yn,wn,Qs))?!1:(er.crossVectors(Di,Ii),t=[er.x,er.y,er.z],fa(t,Mn,yn,wn,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new N,new N,new N,new N,new N,new N,new N,new N],Zt=new N,Js=new Qn,Mn=new N,yn=new N,wn=new N,Di=new N,Ii=new N,tn=new N,is=new N,Qs=new N,er=new N,nn=new N;function fa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){nn.fromArray(i,r);const o=s.x*Math.abs(nn.x)+s.y*Math.abs(nn.y)+s.z*Math.abs(nn.z),c=e.dot(nn),l=t.dot(nn),d=n.dot(nn);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const hm=new Qn,ns=new N,pa=new N;class Jo{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(pa)),this.expandByPoint(ns.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vi=new N,ma=new N,tr=new N,Ui=new N,ga=new N,ir=new N,va=new N;class lh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ma.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,a=-this.direction.dot(tr),o=Ui.dot(this.direction),c=-Ui.dot(tr),l=Ui.lengthSq(),d=Math.abs(1-a*a);let u,p,m,v;if(d>0)if(u=a*c-o,p=a*o-c,v=r*d,u>=0)if(p>=-v)if(p<=v){const _=1/d;u*=_,p*=_,m=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p<=-v?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=v?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ma).addScaledVector(tr,p),m}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){ga.subVectors(t,e),ir.subVectors(n,e),va.crossVectors(ga,ir);let a=this.direction.dot(va),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const c=o*this.direction.dot(ir.crossVectors(Ui,ir));if(c<0)return null;const l=o*this.direction.dot(ga.cross(Ui));if(l<0||c+l>a)return null;const d=-o*Ui.dot(va);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,a,o,c,l,d,u,p,m,v,_,f){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,u,p,m,v,_,f)}set(e,t,n,s,r,a,o,c,l,d,u,p,m,v,_,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=d,h[10]=u,h[14]=p,h[3]=m,h[7]=v,h[11]=_,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Sn.setFromMatrixColumn(e,0).length(),r=1/Sn.setFromMatrixColumn(e,1).length(),a=1/Sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=a*d,m=a*u,v=o*d,_=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=m+v*l,t[5]=p-_*l,t[9]=-o*c,t[2]=_-p*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*d,m=c*u,v=l*d,_=l*u;t[0]=p+_*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=m*o-v,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*d,m=c*u,v=l*d,_=l*u;t[0]=p-_*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*d,t[9]=_-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*d,m=a*u,v=o*d,_=o*u;t[0]=c*d,t[4]=v*l-m,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,v=o*c,_=o*l;t[0]=c*d,t[4]=_-p*u,t[8]=v*u+m,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*u+v,t[10]=p-_*u}else if(e.order==="XZY"){const p=a*c,m=a*l,v=o*c,_=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=p*u+_,t[5]=a*d,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*d,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,um)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Ni.crossVectors(n,kt),Ni.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Ni.crossVectors(n,kt)),Ni.normalize(),nr.crossVectors(kt,Ni),s[0]=Ni.x,s[4]=nr.x,s[8]=kt.x,s[1]=Ni.y,s[5]=nr.y,s[9]=kt.y,s[2]=Ni.z,s[6]=nr.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],p=n[9],m=n[13],v=n[2],_=n[6],f=n[10],h=n[14],b=n[3],S=n[7],E=n[11],C=n[15],R=s[0],P=s[4],U=s[8],y=s[12],M=s[1],T=s[5],W=s[9],H=s[13],X=s[2],$=s[6],Y=s[10],j=s[14],z=s[3],ae=s[7],ue=s[11],Se=s[15];return r[0]=a*R+o*M+c*X+l*z,r[4]=a*P+o*T+c*$+l*ae,r[8]=a*U+o*W+c*Y+l*ue,r[12]=a*y+o*H+c*j+l*Se,r[1]=d*R+u*M+p*X+m*z,r[5]=d*P+u*T+p*$+m*ae,r[9]=d*U+u*W+p*Y+m*ue,r[13]=d*y+u*H+p*j+m*Se,r[2]=v*R+_*M+f*X+h*z,r[6]=v*P+_*T+f*$+h*ae,r[10]=v*U+_*W+f*Y+h*ue,r[14]=v*y+_*H+f*j+h*Se,r[3]=b*R+S*M+E*X+C*z,r[7]=b*P+S*T+E*$+C*ae,r[11]=b*U+S*W+E*Y+C*ue,r[15]=b*y+S*H+E*j+C*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],p=e[10],m=e[14],v=e[3],_=e[7],f=e[11],h=e[15];return v*(+r*c*u-s*l*u-r*o*p+n*l*p+s*o*m-n*c*m)+_*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*d-r*c*d)+f*(+t*l*u-t*o*m-r*a*u+n*a*m+r*o*d-n*l*d)+h*(-s*o*d-t*c*u+t*o*p+s*a*u-n*a*p+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],p=e[10],m=e[11],v=e[12],_=e[13],f=e[14],h=e[15],b=u*f*l-_*p*l+_*c*m-o*f*m-u*c*h+o*p*h,S=v*p*l-d*f*l-v*c*m+a*f*m+d*c*h-a*p*h,E=d*_*l-v*u*l+v*o*m-a*_*m-d*o*h+a*u*h,C=v*u*c-d*_*c-v*o*p+a*_*p+d*o*f-a*u*f,R=t*b+n*S+s*E+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=b*P,e[1]=(_*p*r-u*f*r-_*s*m+n*f*m+u*s*h-n*p*h)*P,e[2]=(o*f*r-_*c*r+_*s*l-n*f*l-o*s*h+n*c*h)*P,e[3]=(u*c*r-o*p*r-u*s*l+n*p*l+o*s*m-n*c*m)*P,e[4]=S*P,e[5]=(d*f*r-v*p*r+v*s*m-t*f*m-d*s*h+t*p*h)*P,e[6]=(v*c*r-a*f*r-v*s*l+t*f*l+a*s*h-t*c*h)*P,e[7]=(a*p*r-d*c*r+d*s*l-t*p*l-a*s*m+t*c*m)*P,e[8]=E*P,e[9]=(v*u*r-d*_*r-v*n*m+t*_*m+d*n*h-t*u*h)*P,e[10]=(a*_*r-v*o*r+v*n*l-t*_*l-a*n*h+t*o*h)*P,e[11]=(d*o*r-a*u*r-d*n*l+t*u*l+a*n*m-t*o*m)*P,e[12]=C*P,e[13]=(d*_*s-v*u*s+v*n*p-t*_*p-d*n*f+t*u*f)*P,e[14]=(v*o*s-a*_*s-v*n*c+t*_*c+a*n*f-t*o*f)*P,e[15]=(a*u*s-d*o*s+d*n*c-t*u*c-a*n*p+t*o*p)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,u=o+o,p=r*l,m=r*d,v=r*u,_=a*d,f=a*u,h=o*u,b=c*l,S=c*d,E=c*u,C=n.x,R=n.y,P=n.z;return s[0]=(1-(_+h))*C,s[1]=(m+E)*C,s[2]=(v-S)*C,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(p+h))*R,s[6]=(f+b)*R,s[7]=0,s[8]=(v+S)*P,s[9]=(f-b)*P,s[10]=(1-(p+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Sn.set(s[0],s[1],s[2]).length();const a=Sn.set(s[4],s[5],s[6]).length(),o=Sn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const l=1/r,d=1/a,u=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=d,Kt.elements[5]*=d,Kt.elements[6]*=d,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ci,c=!1){const l=this.elements,d=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let v,_;if(c)v=r/(a-r),_=a*r/(a-r);else if(o===ci)v=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Dr)v=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ci,c=!1){const l=this.elements,d=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,_;if(c)v=1/(a-r),_=a/(a-r);else if(o===ci)v=-2/(a-r),_=-(a+r)/(a-r);else if(o===Dr)v=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Sn=new N,Kt=new tt,dm=new N(0,0,0),um=new N(1,1,1),Ni=new N,nr=new N,kt=new N,Ol=new tt,Fl=new Ki;class fi{constructor(e=0,t=0,n=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fm=0;const kl=new N,bn=new Ki,_i=new tt,sr=new N,ss=new N,pm=new N,mm=new Ki,zl=new N(1,0,0),Bl=new N(0,1,0),Hl=new N(0,0,1),Vl={type:"added"},gm={type:"removed"},Tn={type:"childadded",child:null},_a={type:"childremoved",child:null};class Ct extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new N,t=new fi,n=new Ki,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Oe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(zl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sr.copy(e):sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ss,sr,this.up):_i.lookAt(sr,ss,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),bn.setFromRotationMatrix(_i),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vl),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gm),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vl),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new N(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new N,xi=new N,xa=new N,Ei=new N,An=new N,Cn=new N,Gl=new N,Ea=new N,Ma=new N,ya=new N,wa=new ft,Sa=new ft,ba=new ft;class ei{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),xi.subVectors(n,t),xa.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(xi),c=Jt.dot(xa),l=xi.dot(xi),d=xi.dot(xa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(l*c-o*d)*p,v=(a*d-o*c)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(o,Ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return wa.setScalar(0),Sa.setScalar(0),ba.setScalar(0),wa.fromBufferAttribute(e,t),Sa.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wa,r.x),a.addScaledVector(Sa,r.y),a.addScaledVector(ba,r.z),a}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),xi.subVectors(e,t),Jt.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Jt.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;An.subVectors(s,n),Cn.subVectors(r,n),Ea.subVectors(e,n);const c=An.dot(Ea),l=Cn.dot(Ea);if(c<=0&&l<=0)return t.copy(n);Ma.subVectors(e,s);const d=An.dot(Ma),u=Cn.dot(Ma);if(d>=0&&u<=d)return t.copy(s);const p=c*u-d*l;if(p<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(An,a);ya.subVectors(e,r);const m=An.dot(ya),v=Cn.dot(ya);if(v>=0&&m<=v)return t.copy(r);const _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Cn,o);const f=d*v-m*u;if(f<=0&&u-d>=0&&m-v>=0)return Gl.subVectors(r,s),o=(u-d)/(u-d+(m-v)),t.copy(s).addScaledVector(Gl,o);const h=1/(f+_+p);return a=_*h,o=p*h,t.copy(n).addScaledVector(An,a).addScaledVector(Cn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=Zo(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ta(a,r,e+1/3),this.g=Ta(a,r,e),this.b=Ta(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return We.workingToColorSpace(Tt.copy(this),e),Math.round(Ve(Tt.r*255,0,255))*65536+Math.round(Ve(Tt.g*255,0,255))*256+Math.round(Ve(Tt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=$t){We.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(rr);const n=ds(Oi.h,rr.h,t),s=ds(Oi.s,rr.s,t),r=ds(Oi.l,rr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ze;Ze.NAMES=ch;let vm=0;class Yr extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Hn,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=Ha,this.blendEquation=hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hn&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fs extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new N,ar=new Ye;let _m=0;class di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}}class hh extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ui extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xm=0;const Yt=new tt,Aa=new Ct,Rn=new N,zt=new Qn,rs=new Qn,xt=new N;class Ji extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ah(e)?dh:hh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rn).negate(),this.translate(Rn.x,Rn.y,Rn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(zt.min,rs.min),zt.expandByPoint(xt),xt.addVectors(zt.max,rs.max),zt.expandByPoint(xt)):(zt.expandByPoint(rs.min),zt.expandByPoint(rs.max))}zt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)xt.fromBufferAttribute(o,l),c&&(Rn.fromBufferAttribute(e,l),xt.add(Rn)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new N,c[U]=new N;const l=new N,d=new N,u=new N,p=new Ye,m=new Ye,v=new Ye,_=new N,f=new N;function h(U,y,M){l.fromBufferAttribute(n,U),d.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,M),d.sub(l),u.sub(l),m.sub(p),v.sub(p);const T=1/(m.x*v.y-v.x*m.y);isFinite(T)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(T),f.copy(u).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(T),o[U].add(_),o[y].add(_),o[M].add(_),c[U].add(f),c[y].add(f),c[M].add(f))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,y=b.length;U<y;++U){const M=b[U],T=M.start,W=M.count;for(let H=T,X=T+W;H<X;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new N,E=new N,C=new N,R=new N;function P(U){C.fromBufferAttribute(s,U),R.copy(C);const y=o[U];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),E.crossVectors(R,y);const T=E.dot(c[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,T)}for(let U=0,y=b.length;U<y;++U){const M=b[U],T=M.start,W=M.count;for(let H=T,X=T+W;H<X;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,d=new N,u=new N;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),o.add(d),c.add(d),l.add(d),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,p=new l.constructor(c.length*d);let m=0,v=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*d;for(let h=0;h<d;h++)p[v++]=l[m++]}return new di(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ji,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const p=l[d],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];d.push(m.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let p=0,m=u.length;p<m;p++)d.push(u[p].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new tt,sn=new lh,or=new Jo,Xl=new N,lr=new N,cr=new N,hr=new N,Ca=new N,dr=new N,Yl=new N,ur=new N;class Gt extends Ct{constructor(e=new Ji,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&(Ca.fromBufferAttribute(u,e),a?dr.addScaledVector(Ca,d):dr.addScaledVector(Ca.sub(t),d))}t.add(dr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),sn.copy(e.ray).recast(e.near),!(or.containsPoint(sn.origin)===!1&&(sn.intersectSphere(or,Xl)===null||sn.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(Wl.copy(r).invert(),sn.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&sn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const f=p[v],h=a[f.materialIndex],b=Math.max(f.start,m.start),S=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=b,C=S;E<C;E+=3){const R=o.getX(E),P=o.getX(E+1),U=o.getX(E+2);s=fr(this,h,e,n,l,d,u,R,P,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=v,h=_;f<h;f+=3){const b=o.getX(f),S=o.getX(f+1),E=o.getX(f+2);s=fr(this,a,e,n,l,d,u,b,S,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=p.length;v<_;v++){const f=p[v],h=a[f.materialIndex],b=Math.max(f.start,m.start),S=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=b,C=S;E<C;E+=3){const R=E,P=E+1,U=E+2;s=fr(this,h,e,n,l,d,u,R,P,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=v,h=_;f<h;f+=3){const b=f,S=f+1,E=f+2;s=fr(this,a,e,n,l,d,u,b,S,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Em(i,e,t,n,s,r,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===$i,o),c===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ur);return l<t.near||l>t.far?null:{distance:l,point:ur.clone(),object:i}}function fr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,lr),i.getVertexPosition(c,cr),i.getVertexPosition(l,hr);const d=Em(i,e,t,n,lr,cr,hr,Yl);if(d){const u=new N;ei.getBarycoord(Yl,lr,cr,hr,u),s&&(d.uv=ei.getInterpolatedAttribute(s,o,c,l,u,new Ye)),r&&(d.uv1=ei.getInterpolatedAttribute(r,o,c,l,u,new Ye)),a&&(d.normal=ei.getInterpolatedAttribute(a,o,c,l,u,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new N,materialIndex:0};ei.getNormal(lr,cr,hr,p.normal),d.face=p,d.barycoord=u}return d}class ks extends Ji{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],u=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ui(l,3)),this.setAttribute("normal",new ui(d,3)),this.setAttribute("uv",new ui(u,2));function v(_,f,h,b,S,E,C,R,P,U,y){const M=E/P,T=C/U,W=E/2,H=C/2,X=R/2,$=P+1,Y=U+1;let j=0,z=0;const ae=new N;for(let ue=0;ue<Y;ue++){const Se=ue*T-H;for(let ke=0;ke<$;ke++){const rt=ke*M-W;ae[_]=rt*b,ae[f]=Se*S,ae[h]=X,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[f]=0,ae[h]=R>0?1:-1,d.push(ae.x,ae.y,ae.z),u.push(ke/P),u.push(1-ue/U),j+=1}}for(let ue=0;ue<U;ue++)for(let Se=0;Se<P;Se++){const ke=p+Se+$*ue,rt=p+Se+$*(ue+1),Qe=p+(Se+1)+$*(ue+1),G=p+(Se+1)+$*ue;c.push(ke,rt,G),c.push(rt,Qe,G),z+=6}o.addGroup(m,z,y),m+=z,p+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $n(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=$n(i[t]);for(const s in n)e[s]=n[s]}return e}function Mm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const ym={clone:$n,merge:Lt};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$n(e.uniforms),this.uniformsGroups=Mm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fh extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new N,ql=new Ye,$l=new Ye;class Ht extends fh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,ql,$l),t.subVectors($l,ql)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pn=-90,Ln=1;class bm extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(Pn,Ln,e,t);s.layers=this.layers,this.add(s);const r=new Ht(Pn,Ln,e,t);r.layers=this.layers,this.add(r);const a=new Ht(Pn,Ln,e,t);a.layers=this.layers,this.add(a);const o=new Ht(Pn,Ln,e,t);o.layers=this.layers,this.add(o);const c=new Ht(Pn,Ln,e,t);c.layers=this.layers,this.add(c);const l=new Ht(Pn,Ln,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class ph extends St{constructor(e=[],t=Yn,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tm extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ph(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ks(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:$n(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Vi});r.uniforms.tEquirect.value=t;const a=new Gt(s,r),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Vt),new bm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class fn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),h=this._getHandJoint(l,_);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=d.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&p>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ir extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pa=new N,Cm=new N,Rm=new Oe;class ln{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rm.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rn=new Jo,Pm=new Ye(.5,.5),pr=new N;class el{constructor(e=new ln,t=new ln,n=new ln,s=new ln,r=new ln,a=new ln){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],p=r[6],m=r[7],v=r[8],_=r[9],f=r[10],h=r[11],b=r[12],S=r[13],E=r[14],C=r[15];if(s[0].setComponents(l-a,m-d,h-v,C-b).normalize(),s[1].setComponents(l+a,m+d,h+v,C+b).normalize(),s[2].setComponents(l+o,m+u,h+_,C+S).normalize(),s[3].setComponents(l-o,m-u,h-_,C-S).normalize(),n)s[4].setComponents(c,p,f,E).normalize(),s[5].setComponents(l-c,m-p,h-f,C-E).normalize();else if(s[4].setComponents(l-c,m-p,h-f,C-E).normalize(),t===ci)s[5].setComponents(l+c,m+p,h+f,C+E).normalize();else if(t===Dr)s[5].setComponents(c,p,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rn)}intersectsSprite(e){rn.center.set(0,0,0);const t=Pm.distanceTo(e.center);return rn.radius=.7071067811865476+t,rn.applyMatrix4(e.matrixWorld),this.intersectsSphere(rn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(pr.x=s.normal.x>0?e.max.x:e.min.x,pr.y=s.normal.y>0?e.max.y:e.min.y,pr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lm extends St{constructor(e,t,n,s,r=Vt,a=Vt,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const d=this;function u(){d.needsUpdate=!0,d._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class mh extends St{constructor(e,t,n=pn,s,r,a,o=ii,c=ii,l,d=Rs,u=1){if(d!==Rs&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zs extends Ji{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,u=e/o,p=t/c,m=[],v=[],_=[],f=[];for(let h=0;h<d;h++){const b=h*p-a;for(let S=0;S<l;S++){const E=S*u-r;v.push(E,-b,0),_.push(0,0,1),f.push(S/o),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let b=0;b<o;b++){const S=b+l*h,E=b+l*(h+1),C=b+1+l*(h+1),R=b+1+l*h;m.push(S,E,R),m.push(E,C,R)}this.setIndex(m),this.setAttribute("position",new ui(v,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bs extends Ji{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],u=new N,p=new N,m=[],v=[],_=[],f=[];for(let h=0;h<=n;h++){const b=[],S=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&c===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const R=C/t;u.x=-e*Math.cos(s+R*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+R*r)*Math.sin(a+S*o),v.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),f.push(R+E,1-S),b.push(l++)}d.push(b)}for(let h=0;h<n;h++)for(let b=0;b<t;b++){const S=d[h][b+1],E=d[h][b],C=d[h+1][b],R=d[h+1][b+1];(h!==0||a>0)&&m.push(S,E,R),(h!==n-1||c<Math.PI)&&m.push(E,C,R)}this.setIndex(m),this.setAttribute("position",new ui(v,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dm extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Im extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Um{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,p=l.length;u<p;u+=2){const m=l[u],v=l[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nm=new Um;let tl=class{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};tl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Om extends Error{constructor(e,t){super(e),this.response=t}}class Fm extends tl{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=Mi[e],u=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,v=m!==0;let _=0;const f=new ReadableStream({start(h){b();function b(){u.read().then(({done:S,value:E})=>{if(S)h.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:m});for(let R=0,P=d.length;R<P;R++){const U=d[R];U.onProgress&&U.onProgress(C)}h.enqueue(E),b()}},S=>{h.error(S)})}}});return new Response(f)}else throw new Om(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{Wi.add(`file:${e}`,l);const d=Mi[e];delete Mi[e];for(let u=0,p=d.length;u<p;u++){const m=d[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const d=Mi[e];if(d===void 0)throw this.manager.itemError(e),l;delete Mi[e];for(let u=0,p=d.length;u<p;u++){const m=d[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Dn=new WeakMap;class km extends tl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Dn.get(a);u===void 0&&(u=[],Dn.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Ds("img");function c(){d(),t&&t(this);const u=Dn.get(this)||[];for(let p=0;p<u.length;p++){const m=u[p];m.onLoad&&m.onLoad(this)}Dn.delete(this),r.manager.itemEnd(e)}function l(u){d(),s&&s(u),Wi.remove(`image:${e}`);const p=Dn.get(this)||[];for(let m=0;m<p.length;m++){const v=p[m];v.onError&&v.onError(u)}Dn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class zm extends fh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const jl=new tt;class Hm{constructor(e,t,n=0,s=1/0){this.ray=new lh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(Zl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)To(e[s],this,n,t);return n.sort(Zl),n}}function Zl(i,e){return i.distance-e.distance}function To(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)To(r[a],e,t,!0)}}function Kl(i,e,t,n){const s=Vm(n);switch(t){case eh:return i*e;case ih:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case nh:return i*e*2/s.components*s.byteLength;case $o:return i*e*2/s.components*s.byteLength;case th:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case yr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(e,8)/4;case Qa:case to:return Math.max(i,8)*Math.max(e,8)/2;case no:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tr:case Mo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sh:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case So:case bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vm(i){switch(i){case Ri:case Kc:return{byteLength:1,components:1};case As:case Jc:case Os:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case pn:case Wo:case Si:return{byteLength:4,components:1};case Qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);function gh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gm(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<u.length;m++){const v=u[p],_=u[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,v=u.length;m<v;m++){const _=u[m];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ov=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Wm,alphahash_pars_fragment:Xm,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:$m,alphatest_pars_fragment:jm,aomap_fragment:Zm,aomap_pars_fragment:Km,batching_pars_vertex:Jm,batching_vertex:Qm,begin_vertex:eg,beginnormal_vertex:tg,bsdfs:ig,iridescence_fragment:ng,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:og,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:dg,color_vertex:ug,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:vg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,colorspace_fragment:Eg,colorspace_pars_fragment:Mg,envmap_fragment:yg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Sg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Og,envmap_vertex:Tg,fog_vertex:Ag,fog_pars_vertex:Cg,fog_fragment:Rg,fog_pars_fragment:Pg,gradientmap_pars_fragment:Lg,lightmap_pars_fragment:Dg,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:kg,lights_phong_fragment:zg,lights_phong_pars_fragment:Bg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:jg,map_fragment:Zg,map_pars_fragment:Kg,map_particle_fragment:Jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:ev,metalnessmap_pars_fragment:tv,morphinstance_vertex:iv,morphcolor_vertex:nv,morphnormal_vertex:sv,morphtarget_pars_vertex:rv,morphtarget_vertex:av,normal_fragment_begin:ov,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:hv,normal_vertex:dv,normalmap_pars_fragment:uv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:vv,packing:_v,premultiplied_alpha_fragment:xv,project_vertex:Ev,dithering_fragment:Mv,dithering_pars_fragment:yv,roughnessmap_fragment:wv,roughnessmap_pars_fragment:Sv,shadowmap_pars_fragment:bv,shadowmap_pars_vertex:Tv,shadowmap_vertex:Av,shadowmask_pars_fragment:Cv,skinbase_vertex:Rv,skinning_pars_vertex:Pv,skinning_vertex:Lv,skinnormal_vertex:Dv,specularmap_fragment:Iv,specularmap_pars_fragment:Uv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Ov,transmission_fragment:Fv,transmission_pars_fragment:kv,uv_pars_fragment:zv,uv_pars_vertex:Bv,uv_vertex:Hv,worldpos_vertex:Vv,background_vert:Gv,background_frag:Wv,backgroundCube_vert:Xv,backgroundCube_frag:Yv,cube_vert:qv,cube_frag:$v,depth_vert:jv,depth_frag:Zv,distanceRGBA_vert:Kv,distanceRGBA_frag:Jv,equirect_vert:Qv,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:i_,meshbasic_vert:n_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:d_,meshphong_frag:u_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:v_,points_frag:__,shadow_vert:x_,shadow_frag:E_,sprite_vert:M_,sprite_frag:y_},re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},li={basic:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Lt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Lt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Lt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Lt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Lt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Lt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Lt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Lt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Lt([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Lt([re.lights,re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};li.physical={uniforms:Lt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const mr={r:0,b:0,g:0},an=new fi,w_=new tt;function S_(i,e,t,n,s,r,a){const o=new Ze(0);let c=r===!0?0:1,l,d,u=null,p=0,m=null;function v(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?t:e).get(E)),E}function _(S){let E=!1;const C=v(S);C===null?h(o,c):C&&C.isColor&&(h(C,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(S,E){const C=v(E);C&&(C.isCubeTexture||C.mapping===Xr)?(d===void 0&&(d=new Gt(new ks(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:$n(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),an.copy(E.backgroundRotation),an.x*=-1,an.y*=-1,an.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(an)),d.material.toneMapped=We.getTransfer(C.colorSpace)!==Je,(u!==C||p!==C.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=C,p=C.version,m=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Gt(new zs(2,2),new Pi({name:"BackgroundMaterial",uniforms:$n(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=We.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||p!==C.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=C,p=C.version,m=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function h(S,E){S.getRGB(mr,uh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,E,a)}function b(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),c=E,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,h(o,c)},render:_,addToRenderList:f,dispose:b}}function b_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(M,T,W,H,X){let $=!1;const Y=u(H,W,T);r!==Y&&(r=Y,l(r.object)),$=m(M,H,W,X),$&&v(M,H,W,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(M,T,W,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,T,W){const H=W.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let $=X[T.id];$===void 0&&($={},X[T.id]=$);let Y=$[H];return Y===void 0&&(Y=p(c()),$[H]=Y),Y}function p(M){const T=[],W=[],H=[];for(let X=0;X<t;X++)T[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,T,W,H){const X=r.attributes,$=T.attributes;let Y=0;const j=W.getAttributes();for(const z in j)if(j[z].location>=0){const ue=X[z];let Se=$[z];if(Se===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),ue===void 0||ue.attribute!==Se||Se&&ue.data!==Se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function v(M,T,W,H){const X={},$=T.attributes;let Y=0;const j=W.getAttributes();for(const z in j)if(j[z].location>=0){let ue=$[z];ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Se={};Se.attribute=ue,ue&&ue.data&&(Se.data=ue.data),X[z]=Se,Y++}r.attributes=X,r.attributesNum=Y,r.index=H}function _(){const M=r.newAttributes;for(let T=0,W=M.length;T<W;T++)M[T]=0}function f(M){h(M,0)}function h(M,T){const W=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;W[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),X[M]!==T&&(i.vertexAttribDivisor(M,T),X[M]=T)}function b(){const M=r.newAttributes,T=r.enabledAttributes;for(let W=0,H=T.length;W<H;W++)T[W]!==M[W]&&(i.disableVertexAttribArray(W),T[W]=0)}function S(M,T,W,H,X,$,Y){Y===!0?i.vertexAttribIPointer(M,T,W,X,$):i.vertexAttribPointer(M,T,W,H,X,$)}function E(M,T,W,H){_();const X=H.attributes,$=W.getAttributes(),Y=T.defaultAttributeValues;for(const j in $){const z=$[j];if(z.location>=0){let ae=X[j];if(ae===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const ue=ae.normalized,Se=ae.itemSize,ke=e.get(ae);if(ke===void 0)continue;const rt=ke.buffer,Qe=ke.type,G=ke.bytesPerElement,oe=Qe===i.INT||Qe===i.UNSIGNED_INT||ae.gpuType===Wo;if(ae.isInterleavedBufferAttribute){const ie=ae.data,Ce=ie.stride,Re=ae.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<z.locationSize;Ie++)h(z.location+Ie,ie.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<z.locationSize;Ie++)f(z.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ie=0;Ie<z.locationSize;Ie++)S(z.location+Ie,Se/z.locationSize,Qe,ue,Ce*G,(Re+Se/z.locationSize*Ie)*G,oe)}else{if(ae.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)h(z.location+ie,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ie=0;ie<z.locationSize;ie++)f(z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let ie=0;ie<z.locationSize;ie++)S(z.location+ie,Se/z.locationSize,Qe,ue,Se*G,Se/z.locationSize*ie*G,oe)}}else if(Y!==void 0){const ue=Y[j];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}b()}function C(){U();for(const M in n){const T=n[M];for(const W in T){const H=T[W];for(const X in H)d(H[X].object),delete H[X];delete T[W]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const T=n[M.id];for(const W in T){const H=T[W];for(const X in H)d(H[X].object),delete H[X];delete T[W]}delete n[M.id]}function P(M){for(const T in n){const W=n[T];if(W[M.id]===void 0)continue;const H=W[M.id];for(const X in H)d(H[X].object),delete H[X];delete W[M.id]}}function U(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:f,disableUnusedAttributes:b}}function T_(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=d[v];t.update(m,n,1)}function c(l,d,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,p,0,u);let v=0;for(let _=0;_<u;_++)v+=d[_]*p[_];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function A_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ti&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const U=P===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ri&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Si&&!U)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:C,maxSamples:R}}function C_(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new ln,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=d(u,p,0)},this.setState=function(u,p,m){const v=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,h=i.get(u);if(!s||v===null||v.length===0||r&&!f)r?d(null):l();else{const b=r?0:n,S=b*4;let E=h.clippingState||null;c.value=E,E=d(v,p,S,m);for(let C=0;C!==S;++C)E[C]=t[C];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,p,m,v){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=c.value,v!==!0||f===null){const h=m+_*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<h)&&(f=new Float32Array(h));for(let S=0,E=m;S!==_;++S,E+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(f,E),f[E+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function R_(i){let e=new WeakMap;function t(a,o){return o===ja?a.mapping=Yn:o===Za&&(a.mapping=qn),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ja||o===Za)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Tm(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const zn=4,Jl=[.125,.215,.35,.446,.526,.582],dn=20,La=new zm,Ql=new Ze;let Da=null,Ia=0,Ua=0,Na=!1;const cn=(1+Math.sqrt(5))/2,In=1/cn,ec=[new N(-cn,In,0),new N(cn,In,0),new N(-In,0,cn),new N(In,0,cn),new N(0,cn,-In),new N(0,cn,In),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],P_=new N;class tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=P_}=r;Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,Ia,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yn||e.mapping===qn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Os,format:ti,colorSpace:mn,depthBuffer:!1},s=ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L_(r)),this._blurMaterial=D_(r,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,s,r){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Fs({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),f=new Gt(new ks,_);let h=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,h=!0):(_.color.copy(Ql),h=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[S],r.y,r.z)):E===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[S]));const C=this._cubeSize;gr(s,E*C,S>2?C:0,C,C),u.setRenderTarget(s),h&&u.render(f,c),u.render(e,c)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Yn||e.mapping===qn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;gr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,La)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ec[(s-r-1)%ec.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Gt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*dn-1),_=r/v,f=isFinite(r)?1+Math.floor(d*_):dn;f>dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${dn}`);const h=[];let b=0;for(let P=0;P<dn;++P){const U=P/_,y=Math.exp(-U*U/2);h.push(y),P===0?b+=y:P<f&&(b+=2*y)}for(let P=0;P<h.length;P++)h[P]=h[P]/b;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-n;const E=this._sizeLods[s],C=3*E*(s>S-zn?s-S+zn:0),R=4*(this._cubeSize-E);gr(t,C,R,3*E,2*E),c.setRenderTarget(t),c.render(u,La)}}function L_(i){const e=[],t=[],n=[];let s=i;const r=i-zn+1+Jl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-zn?c=Jl[a-i+zn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,u=1+l,p=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,v=6,_=3,f=2,h=1,b=new Float32Array(_*v*m),S=new Float32Array(f*v*m),E=new Float32Array(h*v*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,U=R>2?0:-1,y=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];b.set(y,_*v*R),S.set(p,f*v*R);const M=[R,R,R,R,R,R];E.set(M,h*v*R)}const C=new Ji;C.setAttribute("position",new di(b,_)),C.setAttribute("uv",new di(S,f)),C.setAttribute("faceIndex",new di(E,h)),e.push(C),s>zn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ic(i,e,t){const n=new ji(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function D_(i,e,t){const n=new Float32Array(dn),s=new N(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function nc(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function sc(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ja||c===Za,d=c===Yn||c===qn;if(l||d){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new tc(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new tc(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function U_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Vn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function N_(i,e,t,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(u){const p=[],m=u.index,v=u.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let S=0,E=b.length;S<E;S+=3){const C=b[S+0],R=b[S+1],P=b[S+2];p.push(C,R,R,P,P,C)}}else if(v!==void 0){const b=v.array;_=v.version;for(let S=0,E=b.length/3-1;S<E;S+=3){const C=S+0,R=S+1,P=S+2;p.push(C,R,R,P,P,C)}}else return;const f=new(ah(p)?dh:hh)(p,1);f.version=_;const h=r.get(u);h&&e.remove(h),r.set(u,f)}function d(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function O_(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),t.update(m,n,1)}function l(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*a,v),t.update(m,n,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let f=0;for(let h=0;h<v;h++)f+=m[h];t.update(f,n,1)}function u(p,m,v,_){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<p.length;h++)l(p[h]/a,m[h],_[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,_,0,v);let h=0;for(let b=0;b<v;b++)h+=m[b]*_[b];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function F_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function k_(i,e,t){const n=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let C=o.attributes.position.count*E,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*R*4*u),U=new oh(P,C,R,u);U.type=Si,U.needsUpdate=!0;const y=E*4;for(let T=0;T<u;T++){const W=h[T],H=b[T],X=S[T],$=C*R*4*T;for(let Y=0;Y<W.count;Y++){const j=Y*y;v===!0&&(s.fromBufferAttribute(W,Y),P[$+j+0]=s.x,P[$+j+1]=s.y,P[$+j+2]=s.z,P[$+j+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),P[$+j+4]=s.x,P[$+j+5]=s.y,P[$+j+6]=s.z,P[$+j+7]=0),f===!0&&(s.fromBufferAttribute(X,Y),P[$+j+8]=s.x,P[$+j+9]=s.y,P[$+j+10]=s.z,P[$+j+11]=X.itemSize===4?s.w:1)}}p={count:u,texture:U,size:new Ye(C,R)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let f=0;f<l.length;f++)v+=l[f];const _=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function z_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const vh=new St,rc=new mh(1,1),_h=new oh,xh=new cm,Eh=new ph,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function B_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function W_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),vt(t,n)}}function X_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),vt(t,n)}}function Y_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,n))return;lc.set(n),i.uniformMatrix4fv(this.addr,!1,lc),vt(t,n)}}function q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}function K_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}function t0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rc.compareFunction=rh,r=rc):r=vh,t.setTexture2D(e||r,s)}function i0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xh,s)}function n0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Eh,s)}function s0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_h,s)}function r0(i){switch(i){case 5126:return B_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return Y_;case 5124:case 35670:return q_;case 35667:case 35671:return $_;case 35668:case 35672:return j_;case 35669:case 35673:return Z_;case 5125:return K_;case 36294:return J_;case 36295:return Q_;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(i,e){i.uniform1fv(this.addr,e)}function o0(i,e){const t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function l0(i,e){const t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){const t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function h0(i,e){const t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){const t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u0(i,e){const t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function f0(i,e){i.uniform1iv(this.addr,e)}function p0(i,e){i.uniform2iv(this.addr,e)}function m0(i,e){i.uniform3iv(this.addr,e)}function g0(i,e){i.uniform4iv(this.addr,e)}function v0(i,e){i.uniform1uiv(this.addr,e)}function _0(i,e){i.uniform2uiv(this.addr,e)}function x0(i,e){i.uniform3uiv(this.addr,e)}function E0(i,e){i.uniform4uiv(this.addr,e)}function M0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||vh,r[a])}function y0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xh,r[a])}function w0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Eh,r[a])}function S0(i,e,t){const n=this.cache,s=e.length,r=qr(t,s);gt(n,r)||(i.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||_h,r[a])}function b0(i){switch(i){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return d0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return _0;case 36295:return x0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return S0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function dc(i,e){i.seq.push(e),i.map[e.id]=e}function R0(i,e,t){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),a=Oa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){dc(t,l===void 0?new T0(o,i,e):new A0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new C0(o),dc(t,u)),t=u}}}class Ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);R0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const P0=37297;let L0=0;function D0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const fc=new Oe;function I0(i){We._getMatrix(fc,We.workingColorSpace,i);const e=`mat3( ${fc.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case Lr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+D0(i.getShaderSource(e),o)}else return r}function U0(i,e){const t=I0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,e){let t;switch(e){case jc:t="Linear";break;case yp:t="Reinhard";break;case wp:t="Cineon";break;case Sp:t="ACESFilmic";break;case Tp:t="AgX";break;case Ap:t="Neutral";break;case bp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vr=new N;function O0(){We.getLuminanceCoefficients(vr);const i=vr.x.toFixed(4),e=vr.y.toFixed(4),t=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function k0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ls(i){return i!==""}function mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(i){return i.replace(B0,V0)}const H0=new Map;function V0(i,e){let t=Fe[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const G0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(G0,W0)}function W0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Y0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yn:case qn:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function q0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qn:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case Ep:e="ENVMAP_BLENDING_MIX";break;case Mp:e="ENVMAP_BLENDING_ADD";break}return e}function j0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Z0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=X0(t),l=Y0(t),d=q0(t),u=$0(t),p=j0(t),m=F0(t),v=k0(r),_=s.createProgram();let f,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ls).join(`
`),h.length>0&&(h+=`
`)):(f=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),h=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Gi?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=Ao(a),a=mc(a,t),a=gc(a,t),o=Ao(o),o=mc(o,t),o=gc(o,t),a=vc(a),o=vc(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=b+f+a,E=b+h+o,C=uc(s,s.VERTEX_SHADER,S),R=uc(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(T){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(R)||"",$=W.trim(),Y=H.trim(),j=X.trim();let z=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,R);else{const ue=pc(s,C,"vertex"),Se=pc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+ue+`
`+Se)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(Y===""||j==="")&&(ae=!1);ae&&(T.diagnostics={runnable:z,programLog:$,vertexShader:{log:Y,prefix:f},fragmentShader:{log:j,prefix:h}})}s.deleteShader(C),s.deleteShader(R),U=new Ar(s,_),y=z0(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,P0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let K0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function ex(i,e,t,n,s,r,a){const o=new Qo,c=new J0,l=new Set,d=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,M,T,W,H){const X=W.fog,$=H.geometry,Y=y.isMeshStandardMaterial?W.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),z=j&&j.mapping===Xr?j.image.height:null,ae=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=ue!==void 0?ue.length:0;let ke=0;$.morphAttributes.position!==void 0&&(ke=1),$.morphAttributes.normal!==void 0&&(ke=2),$.morphAttributes.color!==void 0&&(ke=3);let rt,Qe,G,oe;if(ae){const $e=li[ae];rt=$e.vertexShader,Qe=$e.fragmentShader}else rt=y.vertexShader,Qe=y.fragmentShader,c.update(y),G=c.getVertexShaderID(y),oe=c.getFragmentShaderID(y);const ie=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Re=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,dt=!!y.map,Ge=!!y.matcap,A=!!j,it=!!y.aoMap,Te=!!y.lightMap,qe=!!y.bumpMap,we=!!y.normalMap,at=!!y.displacementMap,ge=!!y.emissiveMap,ze=!!y.metalnessMap,_t=!!y.roughnessMap,ut=y.anisotropy>0,w=y.clearcoat>0,g=y.dispersion>0,O=y.iridescence>0,V=y.sheen>0,Z=y.transmission>0,B=ut&&!!y.anisotropyMap,ye=w&&!!y.clearcoatMap,te=w&&!!y.clearcoatNormalMap,xe=w&&!!y.clearcoatRoughnessMap,Ee=O&&!!y.iridescenceMap,Q=O&&!!y.iridescenceThicknessMap,de=V&&!!y.sheenColorMap,Le=V&&!!y.sheenRoughnessMap,Me=!!y.specularMap,le=!!y.specularColorMap,Ne=!!y.specularIntensityMap,L=Z&&!!y.transmissionMap,ee=Z&&!!y.thicknessMap,ne=!!y.gradientMap,me=!!y.alphaMap,K=y.alphaTest>0,q=!!y.alphaHash,_e=!!y.extensions;let Ue=Gi;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const nt={shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:rt,fragmentShader:Qe,defines:y.defines,customVertexShaderID:G,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:Re,instancingColor:Re&&H.instanceColor!==null,instancingMorph:Re&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:mn,alphaToCoverage:!!y.alphaToCoverage,map:dt,matcap:Ge,envMap:A,envMapMode:A&&j.mapping,envMapCubeUVHeight:z,aoMap:it,lightMap:Te,bumpMap:qe,normalMap:we,displacementMap:p&&at,emissiveMap:ge,normalMapObjectSpace:we&&y.normalMapType===Dp,normalMapTangentSpace:we&&y.normalMapType===Lp,metalnessMap:ze,roughnessMap:_t,anisotropy:ut,anisotropyMap:B,clearcoat:w,clearcoatMap:ye,clearcoatNormalMap:te,clearcoatRoughnessMap:xe,dispersion:g,iridescence:O,iridescenceMap:Ee,iridescenceThicknessMap:Q,sheen:V,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:Me,specularColorMap:le,specularIntensityMap:Ne,transmission:Z,transmissionMap:L,thicknessMap:ee,gradientMap:ne,opaque:y.transparent===!1&&y.blending===Hn&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:K,alphaHash:q,combine:y.combine,mapUv:dt&&_(y.map.channel),aoMapUv:it&&_(y.aoMap.channel),lightMapUv:Te&&_(y.lightMap.channel),bumpMapUv:qe&&_(y.bumpMap.channel),normalMapUv:we&&_(y.normalMap.channel),displacementMapUv:at&&_(y.displacementMap.channel),emissiveMapUv:ge&&_(y.emissiveMap.channel),metalnessMapUv:ze&&_(y.metalnessMap.channel),roughnessMapUv:_t&&_(y.roughnessMap.channel),anisotropyMapUv:B&&_(y.anisotropyMap.channel),clearcoatMapUv:ye&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(y.sheenRoughnessMap.channel),specularMapUv:Me&&_(y.specularMap.channel),specularColorMapUv:le&&_(y.specularColorMap.channel),specularIntensityMapUv:Ne&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:ee&&_(y.thicknessMap.channel),alphaMapUv:me&&_(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(we||ut),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(dt||me),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:dt&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)M.push(T),M.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(b(M,y),S(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const M=v[y.type];let T;if(M){const W=li[M];T=ym.clone(W.uniforms)}else T=y.uniforms;return T}function C(y,M){let T;for(let W=0,H=d.length;W<H;W++){const X=d[W];if(X.cacheKey===M){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Z0(i,M,y,r),d.push(T)),T}function R(y){if(--y.usedTimes===0){const M=d.indexOf(y);d[M]=d[d.length-1],d.pop(),y.destroy()}}function P(y){c.remove(y)}function U(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:E,acquireProgram:C,releaseProgram:R,releaseShaderCache:P,programs:d,dispose:U}}function tx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ec(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,m,v,_,f){let h=i[e];return h===void 0?(h={id:u.id,object:u,geometry:p,material:m,groupOrder:v,renderOrder:u.renderOrder,z:_,group:f},i[e]=h):(h.id=u.id,h.object=u,h.geometry=p,h.material=m,h.groupOrder=v,h.renderOrder=u.renderOrder,h.z=_,h.group=f),e++,h}function o(u,p,m,v,_,f){const h=a(u,p,m,v,_,f);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(u,p,m,v,_,f){const h=a(u,p,m,v,_,f);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(u,p){t.length>1&&t.sort(u||ix),n.length>1&&n.sort(p||xc),s.length>1&&s.sort(p||xc)}function d(){for(let u=e,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function nx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ec,i.set(n,[a])):s>=r.length?(a=new Ec,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ax=0;function ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lx(i){const e=new sx,t=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new tt,a=new tt;function o(l){let d=0,u=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,_=0,f=0,h=0,b=0,S=0,E=0,C=0,R=0,P=0;l.sort(ox);for(let y=0,M=l.length;y<M;y++){const T=l[y],W=T.color,H=T.intensity,X=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=W.r*H,u+=W.g*H,p+=W.b*H;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(T.sh.coefficients[Y],H);P++}else if(T.isDirectionalLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,z=t.get(T);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=T.shadow.matrix,b++}n.directional[m]=Y,m++}else if(T.isSpotLight){const Y=e.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(W).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,n.spot[_]=Y;const j=T.shadow;if(T.map&&(n.spotLightMap[C]=T.map,C++,j.updateMatrices(T),T.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,T.castShadow){const z=t.get(T);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=$,E++}_++}else if(T.isRectAreaLight){const Y=e.get(T);Y.color.copy(W).multiplyScalar(H),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),n.rectArea[f]=Y,f++}else if(T.isPointLight){const Y=e.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const j=T.shadow,z=t.get(T);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[v]=z,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=T.shadow.matrix,S++}n.point[v]=Y,v++}else if(T.isHemisphereLight){const Y=e.get(T);Y.skyColor.copy(T.color).multiplyScalar(H),Y.groundColor.copy(T.groundColor).multiplyScalar(H),n.hemi[h]=Y,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==m||U.pointLength!==v||U.spotLength!==_||U.rectAreaLength!==f||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==E||U.numSpotMaps!==C||U.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,U.directionalLength=m,U.pointLength=v,U.spotLength=_,U.rectAreaLength=f,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=E,U.numSpotMaps=C,U.numLightProbes=P,n.version=ax++)}function c(l,d){let u=0,p=0,m=0,v=0,_=0;const f=d.matrixWorldInverse;for(let h=0,b=l.length;h<b;h++){const S=l[h];if(S.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(S.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:o,setupView:c,state:n}}function Mc(i){const e=new lx(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function cx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Mc(i),e.set(s,[o])):r>=a.length?(o=new Mc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ux(i,e,t){let n=new el;const s=new Ye,r=new Ye,a=new ft,o=new Dm({depthPacking:Pp}),c=new Im,l={},d=t.maxTextureSize,u={[$i]:Ut,[Ut]:$i,[wi]:wi},p=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:hx,fragmentShader:dx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ji;v.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(v,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let h=this.type;this.render=function(R,P,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Vi),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=h!==yi&&this.type===yi,X=h===yi&&this.type!==yi;for(let $=0,Y=R.length;$<Y;$++){const j=R[$],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ae=z.getFrameExtents();if(s.multiply(ae),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,z.mapSize.y=r.y)),z.map===null||H===!0||X===!0){const Se=this.type!==yi?{minFilter:ii,magFilter:ii}:{};z.map!==null&&z.map.dispose(),z.map=new ji(s.x,s.y,Se),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let Se=0;Se<ue;Se++){const ke=z.getViewport(Se);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),W.viewport(a),z.updateMatrices(j,Se),n=z.getFrustum(),E(P,U,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===yi&&b(z,U),z.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(y,M,T)};function b(R,P){const U=e.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ji(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,U,p,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,U,m,_,null)}function S(R,P,U,y){let M=null;const T=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=M.uuid,H=P.uuid;let X=l[W];X===void 0&&(X={},l[W]=X);let $=X[H];$===void 0&&($=M.clone(),X[H]=$,P.addEventListener("dispose",C)),M=$}if(M.visible=P.visible,M.wireframe=P.wireframe,y===yi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=U}return M}function E(R,P,U,y,M){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===yi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const H=e.update(R),X=R.material;if(Array.isArray(X)){const $=H.groups;for(let Y=0,j=$.length;Y<j;Y++){const z=$[Y],ae=X[z.materialIndex];if(ae&&ae.visible){const ue=S(R,ae,y,M);R.onBeforeShadow(i,R,P,U,H,ue,z),i.renderBufferDirect(U,null,H,ue,R,z),R.onAfterShadow(i,R,P,U,H,ue,z)}}}else if(X.visible){const $=S(R,X,y,M);R.onBeforeShadow(i,R,P,U,H,$,null),i.renderBufferDirect(U,null,H,$,R,null),R.onAfterShadow(i,R,P,U,H,$,null)}}const W=R.children;for(let H=0,X=W.length;H<X;H++)E(W[H],P,U,y,M)}function C(R){R.target.removeEventListener("dispose",C);for(const U in l){const y=l[U],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const fx={[Va]:Ga,[Wa]:qa,[Xa]:$a,[Xn]:Ya,[Ga]:Va,[qa]:Wa,[$a]:Xa,[Ya]:Xn};function px(i,e){function t(){let L=!1;const ee=new ft;let ne=null;const me=new ft(0,0,0,0);return{setMask:function(K){ne!==K&&!L&&(i.colorMask(K,K,K,K),ne=K)},setLocked:function(K){L=K},setClear:function(K,q,_e,Ue,nt){nt===!0&&(K*=Ue,q*=Ue,_e*=Ue),ee.set(K,q,_e,Ue),me.equals(ee)===!1&&(i.clearColor(K,q,_e,Ue),me.copy(ee))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,ne=null,me=null,K=null;return{setReversed:function(q){if(ee!==q){const _e=e.get("EXT_clip_control");q?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ee=q;const Ue=K;K=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(q){q?ie(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(q){ne!==q&&!L&&(i.depthMask(q),ne=q)},setFunc:function(q){if(ee&&(q=fx[q]),me!==q){switch(q){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case Xn:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=q}},setLocked:function(q){L=q},setClear:function(q){K!==q&&(ee&&(q=1-q),i.clearDepth(q),K=q)},reset:function(){L=!1,ne=null,me=null,K=null,ee=!1}}}function s(){let L=!1,ee=null,ne=null,me=null,K=null,q=null,_e=null,Ue=null,nt=null;return{setTest:function($e){L||($e?ie(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function($e){ee!==$e&&!L&&(i.stencilMask($e),ee=$e)},setFunc:function($e,mi,si){(ne!==$e||me!==mi||K!==si)&&(i.stencilFunc($e,mi,si),ne=$e,me=mi,K=si)},setOp:function($e,mi,si){(q!==$e||_e!==mi||Ue!==si)&&(i.stencilOp($e,mi,si),q=$e,_e=mi,Ue=si)},setLocked:function($e){L=$e},setClear:function($e){nt!==$e&&(i.clearStencil($e),nt=$e)},reset:function(){L=!1,ee=null,ne=null,me=null,K=null,q=null,_e=null,Ue=null,nt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},u={},p=new WeakMap,m=[],v=null,_=!1,f=null,h=null,b=null,S=null,E=null,C=null,R=null,P=new Ze(0,0,0),U=0,y=!1,M=null,T=null,W=null,H=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=j>=2);let ae=null,ue={};const Se=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),rt=new ft().fromArray(Se),Qe=new ft().fromArray(ke);function G(L,ee,ne,me){const K=new Uint8Array(4),q=i.createTexture();i.bindTexture(L,q),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _e=0;_e<ne;_e++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(ee+_e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return q}const oe={};oe[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Xn),qe(!1),we(Sl),ie(i.CULL_FACE),it(Vi);function ie(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function Ce(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function Re(L,ee){return u[L]!==ee?(i.bindFramebuffer(L,ee),u[L]=ee,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ie(L,ee){let ne=m,me=!1;if(L){ne=p.get(ee),ne===void 0&&(ne=[],p.set(ee,ne));const K=L.textures;if(ne.length!==K.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let q=0,_e=K.length;q<_e;q++)ne[q]=i.COLOR_ATTACHMENT0+q;ne.length=K.length,me=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,me=!0);me&&i.drawBuffers(ne)}function dt(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const Ge={[hn]:i.FUNC_ADD,[np]:i.FUNC_SUBTRACT,[sp]:i.FUNC_REVERSE_SUBTRACT};Ge[rp]=i.MIN,Ge[ap]=i.MAX;const A={[op]:i.ZERO,[lp]:i.ONE,[cp]:i.SRC_COLOR,[Ba]:i.SRC_ALPHA,[mp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[dp]:i.DST_ALPHA,[hp]:i.ONE_MINUS_SRC_COLOR,[Ha]:i.ONE_MINUS_SRC_ALPHA,[pp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[gp]:i.CONSTANT_COLOR,[vp]:i.ONE_MINUS_CONSTANT_COLOR,[_p]:i.CONSTANT_ALPHA,[xp]:i.ONE_MINUS_CONSTANT_ALPHA};function it(L,ee,ne,me,K,q,_e,Ue,nt,$e){if(L===Vi){_===!0&&(Ce(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),L!==ip){if(L!==f||$e!==y){if((h!==hn||E!==hn)&&(i.blendEquation(i.FUNC_ADD),h=hn,E=hn),$e)switch(L){case Hn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,S=null,C=null,R=null,P.set(0,0,0),U=0,f=L,y=$e}return}K=K||ee,q=q||ne,_e=_e||me,(ee!==h||K!==E)&&(i.blendEquationSeparate(Ge[ee],Ge[K]),h=ee,E=K),(ne!==b||me!==S||q!==C||_e!==R)&&(i.blendFuncSeparate(A[ne],A[me],A[q],A[_e]),b=ne,S=me,C=q,R=_e),(Ue.equals(P)===!1||nt!==U)&&(i.blendColor(Ue.r,Ue.g,Ue.b,nt),P.copy(Ue),U=nt),f=L,y=!1}function Te(L,ee){L.side===wi?Ce(i.CULL_FACE):ie(i.CULL_FACE);let ne=L.side===Ut;ee&&(ne=!ne),qe(ne),L.blending===Hn&&L.transparent===!1?it(Vi):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ge(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function we(L){L!==Qf?(ie(i.CULL_FACE),L!==T&&(L===Sl?i.cullFace(i.BACK):L===ep?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),T=L}function at(L){L!==W&&(Y&&i.lineWidth(L),W=L)}function ge(L,ee,ne){L?(ie(i.POLYGON_OFFSET_FILL),(H!==ee||X!==ne)&&(i.polygonOffset(ee,ne),H=ee,X=ne)):Ce(i.POLYGON_OFFSET_FILL)}function ze(L){L?ie(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function _t(L){L===void 0&&(L=i.TEXTURE0+$-1),ae!==L&&(i.activeTexture(L),ae=L)}function ut(L,ee,ne){ne===void 0&&(ae===null?ne=i.TEXTURE0+$-1:ne=ae);let me=ue[ne];me===void 0&&(me={type:void 0,texture:void 0},ue[ne]=me),(me.type!==L||me.texture!==ee)&&(ae!==ne&&(i.activeTexture(ne),ae=ne),i.bindTexture(L,ee||oe[L]),me.type=L,me.texture=ee)}function w(){const L=ue[ae];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){rt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function Le(L){Qe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qe.copy(L))}function Me(L,ee){let ne=l.get(ee);ne===void 0&&(ne=new WeakMap,l.set(ee,ne));let me=ne.get(L);me===void 0&&(me=i.getUniformBlockIndex(ee,L.name),ne.set(L,me))}function le(L,ee){const me=l.get(ee).get(L);c.get(ee)!==me&&(i.uniformBlockBinding(ee,me,L.__bindingPointIndex),c.set(ee,me))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ae=null,ue={},u={},p=new WeakMap,m=[],v=null,_=!1,f=null,h=null,b=null,S=null,E=null,C=null,R=null,P=new Ze(0,0,0),U=0,y=!1,M=null,T=null,W=null,H=null,X=null,rt.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ce,bindFramebuffer:Re,drawBuffers:Ie,useProgram:dt,setBlending:it,setMaterial:Te,setFlipSided:qe,setCullFace:we,setLineWidth:at,setPolygonOffset:ge,setScissorTest:ze,activeTexture:_t,bindTexture:ut,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:Ee,texImage3D:Q,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:te,texStorage3D:xe,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:B,compressedTexSubImage3D:ye,scissor:de,viewport:Le,reset:Ne}}function mx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,d=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,g){return m?new OffscreenCanvas(w,g):Ds("canvas")}function _(w,g,O){let V=1;const Z=ut(w);if((Z.width>O||Z.height>O)&&(V=O/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const B=Math.floor(V*Z.width),ye=Math.floor(V*Z.height);u===void 0&&(u=v(B,ye));const te=g?v(B,ye):u;return te.width=B,te.height=ye,te.getContext("2d").drawImage(w,0,0,B,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+B+"x"+ye+")."),te}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),w;return w}function f(w){return w.generateMipmaps}function h(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,g,O,V,Z=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=g;if(g===i.RED&&(O===i.FLOAT&&(B=i.R32F),O===i.HALF_FLOAT&&(B=i.R16F),O===i.UNSIGNED_BYTE&&(B=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.R8UI),O===i.UNSIGNED_SHORT&&(B=i.R16UI),O===i.UNSIGNED_INT&&(B=i.R32UI),O===i.BYTE&&(B=i.R8I),O===i.SHORT&&(B=i.R16I),O===i.INT&&(B=i.R32I)),g===i.RG&&(O===i.FLOAT&&(B=i.RG32F),O===i.HALF_FLOAT&&(B=i.RG16F),O===i.UNSIGNED_BYTE&&(B=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RG8UI),O===i.UNSIGNED_SHORT&&(B=i.RG16UI),O===i.UNSIGNED_INT&&(B=i.RG32UI),O===i.BYTE&&(B=i.RG8I),O===i.SHORT&&(B=i.RG16I),O===i.INT&&(B=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGB8UI),O===i.UNSIGNED_SHORT&&(B=i.RGB16UI),O===i.UNSIGNED_INT&&(B=i.RGB32UI),O===i.BYTE&&(B=i.RGB8I),O===i.SHORT&&(B=i.RGB16I),O===i.INT&&(B=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),O===i.UNSIGNED_INT&&(B=i.RGBA32UI),O===i.BYTE&&(B=i.RGBA8I),O===i.SHORT&&(B=i.RGBA16I),O===i.INT&&(B=i.RGBA32I)),g===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),g===i.RGBA){const ye=Z?Lr:We.getTransfer(V);O===i.FLOAT&&(B=i.RGBA32F),O===i.HALF_FLOAT&&(B=i.RGBA16F),O===i.UNSIGNED_BYTE&&(B=ye===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function E(w,g){let O;return w?g===null||g===pn||g===Cs?O=i.DEPTH24_STENCIL8:g===Si?O=i.DEPTH32F_STENCIL8:g===As&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===pn||g===Cs?O=i.DEPTH_COMPONENT24:g===Si?O=i.DEPTH_COMPONENT32F:g===As&&(O=i.DEPTH_COMPONENT16),O}function C(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==ii&&w.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),U(g),g.isVideoTexture&&d.delete(g)}function P(w){const g=w.target;g.removeEventListener("dispose",P),M(g)}function U(w){const g=n.get(w);if(g.__webglInit===void 0)return;const O=w.source,V=p.get(O);if(V){const Z=V[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(w),Object.keys(V).length===0&&p.delete(O)}n.remove(w)}function y(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const O=w.source,V=p.get(O);delete V[g.__cacheKey],a.memory.textures--}function M(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Z=0;Z<g.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)i.deleteFramebuffer(g.__webglFramebuffer[V]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=w.textures;for(let V=0,Z=O.length;V<Z;V++){const B=n.get(O[V]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(w)}let T=0;function W(){T=0}function H(){const w=T;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),T+=1,w}function X(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function $(w,g){const O=n.get(w);if(w.isVideoTexture&&ze(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(O,w,g);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function Y(w,g){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){oe(O,w,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function j(w,g){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){oe(O,w,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function z(w,g){const O=n.get(w);if(w.version>0&&O.__version!==w.version){ie(O,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const ae={[Ka]:i.REPEAT,[un]:i.CLAMP_TO_EDGE,[Ja]:i.MIRRORED_REPEAT},ue={[ii]:i.NEAREST,[Cp]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Se={[Ip]:i.NEVER,[zp]:i.ALWAYS,[Up]:i.LESS,[rh]:i.LEQUAL,[Np]:i.EQUAL,[kp]:i.GEQUAL,[Op]:i.GREATER,[Fp]:i.NOTEQUAL};function ke(w,g){if(g.type===Si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===la||g.magFilter===Ks||g.magFilter===Hi||g.minFilter===Vt||g.minFilter===la||g.minFilter===Ks||g.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ae[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ae[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ae[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ue[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ue[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ii||g.minFilter!==Ks&&g.minFilter!==Hi||g.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function rt(w,g){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const V=g.source;let Z=p.get(V);Z===void 0&&(Z={},p.set(V,Z));const B=X(g);if(B!==w.__cacheKey){Z[B]===void 0&&(Z[B]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[B].usedTimes++;const ye=Z[w.__cacheKey];ye!==void 0&&(Z[w.__cacheKey].usedTimes--,ye.usedTimes===0&&y(g)),w.__cacheKey=B,w.__webglTexture=Z[B].texture}return O}function Qe(w,g,O){return Math.floor(Math.floor(w/O)/g)}function G(w,g,O,V){const B=w.updateRanges;if(B.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,V,g.data);else{B.sort((Q,de)=>Q.start-de.start);let ye=0;for(let Q=1;Q<B.length;Q++){const de=B[ye],Le=B[Q],Me=de.start+de.count,le=Qe(Le.start,g.width,4),Ne=Qe(de.start,g.width,4);Le.start<=Me+1&&le===Ne&&Qe(Le.start+Le.count-1,g.width,4)===le?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++ye,B[ye]=Le)}B.length=ye+1;const te=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Q=0,de=B.length;Q<de;Q++){const Le=B[Q],Me=Math.floor(Le.start/4),le=Math.ceil(Le.count/4),Ne=Me%g.width,L=Math.floor(Me/g.width),ee=le,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ne,L,ee,ne,O,V,g.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function oe(w,g,O){let V=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=i.TEXTURE_3D);const Z=rt(w,g),B=g.source;t.bindTexture(V,w.__webglTexture,i.TEXTURE0+O);const ye=n.get(B);if(B.version!==ye.__version||Z===!0){t.activeTexture(i.TEXTURE0+O);const te=We.getPrimaries(We.workingColorSpace),xe=g.colorSpace===Bi?null:We.getPrimaries(g.colorSpace),Ee=g.colorSpace===Bi||te===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Q=_(g.image,!1,s.maxTextureSize);Q=_t(g,Q);const de=r.convert(g.format,g.colorSpace),Le=r.convert(g.type);let Me=S(g.internalFormat,de,Le,g.colorSpace,g.isVideoTexture);ke(V,g);let le;const Ne=g.mipmaps,L=g.isVideoTexture!==!0,ee=ye.__version===void 0||Z===!0,ne=B.dataReady,me=C(g,Q);if(g.isDepthTexture)Me=E(g.format===Ps,g.type),ee&&(L?t.texStorage2D(i.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,de,Le,null));else if(g.isDataTexture)if(Ne.length>0){L&&ee&&t.texStorage2D(i.TEXTURE_2D,me,Me,Ne[0].width,Ne[0].height);for(let K=0,q=Ne.length;K<q;K++)le=Ne[K],L?ne&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,de,Le,le.data):t.texImage2D(i.TEXTURE_2D,K,Me,le.width,le.height,0,de,Le,le.data);g.generateMipmaps=!1}else L?(ee&&t.texStorage2D(i.TEXTURE_2D,me,Me,Q.width,Q.height),ne&&G(g,Q,de,Le)):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,de,Le,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Me,Ne[0].width,Ne[0].height,Q.depth);for(let K=0,q=Ne.length;K<q;K++)if(le=Ne[K],g.format!==ti)if(de!==null)if(L){if(ne)if(g.layerUpdates.size>0){const _e=Kl(le.width,le.height,g.format,g.type);for(const Ue of g.layerUpdates){const nt=le.data.subarray(Ue*_e/le.data.BYTES_PER_ELEMENT,(Ue+1)*_e/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Ue,le.width,le.height,1,de,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Q.depth,de,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Me,le.width,le.height,Q.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,le.width,le.height,Q.depth,de,Le,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Me,le.width,le.height,Q.depth,0,de,Le,le.data)}else{L&&ee&&t.texStorage2D(i.TEXTURE_2D,me,Me,Ne[0].width,Ne[0].height);for(let K=0,q=Ne.length;K<q;K++)le=Ne[K],g.format!==ti?de!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le.width,le.height,de,Le,le.data):t.texImage2D(i.TEXTURE_2D,K,Me,le.width,le.height,0,de,Le,le.data)}else if(g.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,Me,Q.width,Q.height,Q.depth),ne)if(g.layerUpdates.size>0){const K=Kl(Q.width,Q.height,g.format,g.type);for(const q of g.layerUpdates){const _e=Q.data.subarray(q*K/Q.data.BYTES_PER_ELEMENT,(q+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,de,Le,_e)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Le,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,de,Le,Q.data);else if(g.isData3DTexture)L?(ee&&t.texStorage3D(i.TEXTURE_3D,me,Me,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Le,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,de,Le,Q.data);else if(g.isFramebufferTexture){if(ee)if(L)t.texStorage2D(i.TEXTURE_2D,me,Me,Q.width,Q.height);else{let K=Q.width,q=Q.height;for(let _e=0;_e<me;_e++)t.texImage2D(i.TEXTURE_2D,_e,Me,K,q,0,de,Le,null),K>>=1,q>>=1}}else if(Ne.length>0){if(L&&ee){const K=ut(Ne[0]);t.texStorage2D(i.TEXTURE_2D,me,Me,K.width,K.height)}for(let K=0,q=Ne.length;K<q;K++)le=Ne[K],L?ne&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,de,Le,le):t.texImage2D(i.TEXTURE_2D,K,Me,de,Le,le);g.generateMipmaps=!1}else if(L){if(ee){const K=ut(Q);t.texStorage2D(i.TEXTURE_2D,me,Me,K.width,K.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Le,Q)}else t.texImage2D(i.TEXTURE_2D,0,Me,de,Le,Q);f(g)&&h(V),ye.__version=B.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function ie(w,g,O){if(g.image.length!==6)return;const V=rt(w,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const B=n.get(Z);if(Z.version!==B.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const ye=We.getPrimaries(We.workingColorSpace),te=g.colorSpace===Bi?null:We.getPrimaries(g.colorSpace),xe=g.colorSpace===Bi||ye===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ee=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,de=[];for(let q=0;q<6;q++)!Ee&&!Q?de[q]=_(g.image[q],!0,s.maxCubemapSize):de[q]=Q?g.image[q].image:g.image[q],de[q]=_t(g,de[q]);const Le=de[0],Me=r.convert(g.format,g.colorSpace),le=r.convert(g.type),Ne=S(g.internalFormat,Me,le,g.colorSpace),L=g.isVideoTexture!==!0,ee=B.__version===void 0||V===!0,ne=Z.dataReady;let me=C(g,Le);ke(i.TEXTURE_CUBE_MAP,g);let K;if(Ee){L&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ne,Le.width,Le.height);for(let q=0;q<6;q++){K=de[q].mipmaps;for(let _e=0;_e<K.length;_e++){const Ue=K[_e];g.format!==ti?Me!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,0,0,Ue.width,Ue.height,Me,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,Ne,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,0,0,Ue.width,Ue.height,Me,le,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e,Ne,Ue.width,Ue.height,0,Me,le,Ue.data)}}}else{if(K=g.mipmaps,L&&ee){K.length>0&&me++;const q=ut(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ne,q.width,q.height)}for(let q=0;q<6;q++)if(Q){L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,de[q].width,de[q].height,Me,le,de[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,de[q].width,de[q].height,0,Me,le,de[q].data);for(let _e=0;_e<K.length;_e++){const nt=K[_e].image[q].image;L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,0,0,nt.width,nt.height,Me,le,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,Ne,nt.width,nt.height,0,Me,le,nt.data)}}else{L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me,le,de[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,Me,le,de[q]);for(let _e=0;_e<K.length;_e++){const Ue=K[_e];L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,0,0,Me,le,Ue.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e+1,Ne,Me,le,Ue.image[q])}}}f(g)&&h(i.TEXTURE_CUBE_MAP),B.__version=Z.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Ce(w,g,O,V,Z,B){const ye=r.convert(O.format,O.colorSpace),te=r.convert(O.type),xe=S(O.internalFormat,ye,te,O.colorSpace),Ee=n.get(g),Q=n.get(O);if(Q.__renderTarget=g,!Ee.__hasExternalTextures){const de=Math.max(1,g.width>>B),Le=Math.max(1,g.height>>B);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,B,xe,de,Le,g.depth,0,ye,te,null):t.texImage2D(Z,B,xe,de,Le,0,ye,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Q.__webglTexture,0,at(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Q.__webglTexture,B),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(w,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const V=g.depthTexture,Z=V&&V.isDepthTexture?V.type:null,B=E(g.stencilBuffer,Z),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=at(g);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,B,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,B,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,B,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,w)}else{const V=g.textures;for(let Z=0;Z<V.length;Z++){const B=V[Z],ye=r.convert(B.format,B.colorSpace),te=r.convert(B.type),xe=S(B.internalFormat,ye,te,B.colorSpace),Ee=at(g);O&&ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,xe,g.width,g.height):ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,xe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,xe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$(g.depthTexture,0);const Z=V.__webglTexture,B=at(g);if(g.depthTexture.format===Rs)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===Ps)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function dt(w){const g=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const V=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=V}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=w.texture.mipmaps;V&&V.length>0?Ie(g.__webglFramebuffer[0],w):Ie(g.__webglFramebuffer,w)}else if(O){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=i.createRenderbuffer(),Re(g.__webglDepthbuffer[V],w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=g.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,B)}}else{const V=w.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Re(g.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,B)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(w,g,O){const V=n.get(w);g!==void 0&&Ce(V.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&dt(w)}function A(w){const g=w.texture,O=n.get(w),V=n.get(g);w.addEventListener("dispose",P);const Z=w.textures,B=w.isWebGLCubeRenderTarget===!0,ye=Z.length>1;if(ye||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=g.version,a.memory.textures++),B){O.__webglFramebuffer=[];for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[te]=[];for(let xe=0;xe<g.mipmaps.length;xe++)O.__webglFramebuffer[te][xe]=i.createFramebuffer()}else O.__webglFramebuffer[te]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)O.__webglFramebuffer[te]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ye)for(let te=0,xe=Z.length;te<xe;te++){const Ee=n.get(Z[te]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){const xe=Z[te];O.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[te]);const Ee=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),de=S(xe.internalFormat,Ee,Q,xe.colorSpace,w.isXRRenderTarget===!0),Le=at(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,O.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),ke(i.TEXTURE_CUBE_MAP,g);for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Ce(O.__webglFramebuffer[te][xe],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe);else Ce(O.__webglFramebuffer[te],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);f(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let te=0,xe=Z.length;te<xe;te++){const Ee=Z[te],Q=n.get(Ee);let de=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),ke(de,Ee),Ce(O.__webglFramebuffer,w,Ee,i.COLOR_ATTACHMENT0+te,de,0),f(Ee)&&h(de)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,V.__webglTexture),ke(te,g),g.mipmaps&&g.mipmaps.length>0)for(let xe=0;xe<g.mipmaps.length;xe++)Ce(O.__webglFramebuffer[xe],w,g,i.COLOR_ATTACHMENT0,te,xe);else Ce(O.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,te,0);f(g)&&h(te),t.unbindTexture()}w.depthBuffer&&dt(w)}function it(w){const g=w.textures;for(let O=0,V=g.length;O<V;O++){const Z=g[O];if(f(Z)){const B=b(w),ye=n.get(Z).__webglTexture;t.bindTexture(B,ye),h(B),t.unbindTexture()}}}const Te=[],qe=[];function we(w){if(w.samples>0){if(ge(w)===!1){const g=w.textures,O=w.width,V=w.height;let Z=i.COLOR_BUFFER_BIT;const B=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(w),te=g.length>1;if(te)for(let Ee=0;Ee<g.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=w.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ee=0;Ee<g.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const Q=n.get(g[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,Z,i.NEAREST),c===!0&&(Te.length=0,qe.length=0,Te.push(i.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Te.push(B),qe.push(B),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let Ee=0;Ee<g.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);const Q=n.get(g[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function at(w){return Math.min(s.maxSamples,w.samples)}function ge(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ze(w){const g=a.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function _t(w,g){const O=w.colorSpace,V=w.format,Z=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==mn&&O!==Bi&&(We.getTransfer(O)===Je?(V!==ti||Z!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Ge,this.setupRenderTarget=A,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ge}function gx(i,e){function t(n,s=Bi){let r;const a=We.getTransfer(s);if(n===Ri)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===pn)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===th)return i.RGB;if(n===ti)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===nh)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===yr||n===wr||n===Sr||n===br)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===eo||n===to||n===io)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===so)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===po)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===Mo||n===yo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===wo||n===So||n===bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Mh extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pi({vertexShader:vx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends Kn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,p=null,m=null,v=null;const _=new xx,f={},h=t.getContextAttributes();let b=null,S=null;const E=[],C=[],R=new Ye;let P=null;const U=new Ht;U.viewport=new ft;const y=new Ht;y.viewport=new ft;const M=[U,y],T=new Bm;let W=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let oe=E[G];return oe===void 0&&(oe=new Ra,E[G]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(G){let oe=E[G];return oe===void 0&&(oe=new Ra,E[G]=oe),oe.getGripSpace()},this.getHand=function(G){let oe=E[G];return oe===void 0&&(oe=new Ra,E[G]=oe),oe.getHandSpace()};function X(G){const oe=C.indexOf(G.inputSource);if(oe===-1)return;const ie=E[oe];ie!==void 0&&(ie.update(G.inputSource,G.frame,l||a),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Y);for(let G=0;G<E.length;G++){const oe=C[G];oe!==null&&(C[G]=null,E[G].disconnect(oe))}W=null,H=null,_.reset();for(const G in f)delete f[G];e.setRenderTarget(b),m=null,p=null,u=null,s=null,S=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Y),h.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ce=null,Re=null;h.depth&&(Re=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=h.stencil?Ps:Rs,Ce=h.stencil?Cs:pn);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};p=u.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new ji(p.textureWidth,p.textureHeight,{format:ti,type:Ri,depthTexture:new mh(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ie={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ji(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(G){for(let oe=0;oe<G.removed.length;oe++){const ie=G.removed[oe],Ce=C.indexOf(ie);Ce>=0&&(C[Ce]=null,E[Ce].disconnect(ie))}for(let oe=0;oe<G.added.length;oe++){const ie=G.added[oe];let Ce=C.indexOf(ie);if(Ce===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=C.length){C.push(ie),Ce=Ie;break}else if(C[Ie]===null){C[Ie]=ie,Ce=Ie;break}if(Ce===-1)break}const Re=E[Ce];Re&&Re.connect(ie)}}const j=new N,z=new N;function ae(G,oe,ie){j.setFromMatrixPosition(oe.matrixWorld),z.setFromMatrixPosition(ie.matrixWorld);const Ce=j.distanceTo(z),Re=oe.projectionMatrix.elements,Ie=ie.projectionMatrix.elements,dt=Re[14]/(Re[10]-1),Ge=Re[14]/(Re[10]+1),A=(Re[9]+1)/Re[5],it=(Re[9]-1)/Re[5],Te=(Re[8]-1)/Re[0],qe=(Ie[8]+1)/Ie[0],we=dt*Te,at=dt*qe,ge=Ce/(-Te+qe),ze=ge*-Te;if(oe.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ze),G.translateZ(ge),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const _t=dt+ge,ut=Ge+ge,w=we-ze,g=at+(Ce-ze),O=A*Ge/ut*_t,V=it*Ge/ut*_t;G.projectionMatrix.makePerspective(w,g,O,V,_t,ut),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ue(G,oe){oe===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(oe.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let oe=G.near,ie=G.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),T.near=y.near=U.near=oe,T.far=y.far=U.far=ie,(W!==T.near||H!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),W=T.near,H=T.far),T.layers.mask=G.layers.mask|6,U.layers.mask=T.layers.mask&3,y.layers.mask=T.layers.mask&5;const Ce=G.parent,Re=T.cameras;ue(T,Ce);for(let Ie=0;Ie<Re.length;Ie++)ue(Re[Ie],Ce);Re.length===2?ae(T,U,y):T.projectionMatrix.copy(U.projectionMatrix),Se(G,T,Ce)};function Se(G,oe,ie){ie===null?G.matrix.copy(oe.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(oe.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(oe.projectionMatrix),G.projectionMatrixInverse.copy(oe.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ls*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(G){c=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)},this.getCameraTexture=function(G){return f[G]};let ke=null;function rt(G,oe){if(d=oe.getViewerPose(l||a),v=oe,d!==null){const ie=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ce=!1;ie.length!==T.cameras.length&&(T.cameras.length=0,Ce=!0);for(let Ge=0;Ge<ie.length;Ge++){const A=ie[Ge];let it=null;if(m!==null)it=m.getViewport(A);else{const qe=u.getViewSubImage(p,A);it=qe.viewport,Ge===0&&(e.setRenderTargetTextures(S,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(S))}let Te=M[Ge];Te===void 0&&(Te=new Ht,Te.layers.enable(Ge),Te.viewport=new ft,M[Ge]=Te),Te.matrix.fromArray(A.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(A.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(it.x,it.y,it.width,it.height),Ge===0&&(T.matrix.copy(Te.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ce===!0&&T.cameras.push(Te)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ge=u.getDepthInformation(ie[0]);Ge&&Ge.isValid&&Ge.texture&&_.init(Ge,s.renderState)}if(Re&&Re.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Ge=0;Ge<ie.length;Ge++){const A=ie[Ge].camera;if(A){let it=f[A];it||(it=new Mh,f[A]=it);const Te=u.getCameraImage(A);it.sourceTexture=Te}}}for(let ie=0;ie<E.length;ie++){const Ce=C[ie],Re=E[ie];Ce!==null&&Re!==void 0&&Re.update(Ce,oe,l||a)}ke&&ke(G,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Qe=new gh;Qe.setAnimationLoop(rt),this.setAnimationLoop=function(G){ke=G},this.dispose=function(){}}}const on=new fi,Mx=new tt;function yx(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,uh(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,b,S,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),u(f,h)):h.isMeshPhongMaterial?(r(f,h),d(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,E)):h.isMeshMatcapMaterial?(r(f,h),v(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),_(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?c(f,h,b,S):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Ut&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Ut&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const b=e.get(h),S=b.envMap,E=b.envMapRotation;S&&(f.envMap.value=S,on.copy(E),on.x*=-1,on.y*=-1,on.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),f.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(on)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,b,S){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*b,f.scale.value=S*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function u(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,b){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ut&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function _(f,h){const b=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const E=S.program;n.uniformBlockBinding(b,E)}function l(b,S){let E=s[b.id];E===void 0&&(v(b),E=d(b),s[b.id]=E,b.addEventListener("dispose",f));const C=S.program;n.updateUBOMapping(b,C);const R=e.render.frame;r[b.id]!==R&&(p(b),r[b.id]=R)}function d(b){const S=u();b.__bindingPointIndex=S;const E=i.createBuffer(),C=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=s[b.id],E=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,P=E.length;R<P;R++){const U=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,M=U.length;y<M;y++){const T=U[y];if(m(T,R,y,C)===!0){const W=T.__offset,H=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let $=0;$<H.length;$++){const Y=H[$],j=_(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+X,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,S,E,C){const R=b.value,P=S+"_"+E;if(C[P]===void 0)return typeof R=="number"||typeof R=="boolean"?C[P]=R:C[P]=R.clone(),!0;{const U=C[P];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return C[P]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function v(b){const S=b.uniforms;let E=0;const C=16;for(let P=0,U=S.length;P<U;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,T=y.length;M<T;M++){const W=y[M],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,$=H.length;X<$;X++){const Y=H[X],j=_(Y),z=E%C,ae=z%j.boundary,ue=z+ae;E+=ae,ue!==0&&C-ue<j.storage&&(E+=C-ue),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=j.storage}}}const R=E%C;return R>0&&(E+=C-R),b.__size=E,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function f(b){const S=b.target;S.removeEventListener("dispose",f);const E=a.indexOf(S.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function h(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}class Sx{constructor(e={}){const{canvas:t=im(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),_=new Int32Array(4);let f=null,h=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=$t;let R=0,P=0,U=null,y=-1,M=null;const T=new ft,W=new ft;let H=null;const X=new Ze(0);let $=0,Y=t.width,j=t.height,z=1,ae=null,ue=null;const Se=new ft(0,0,Y,j),ke=new ft(0,0,Y,j);let rt=!1;const Qe=new el;let G=!1,oe=!1;const ie=new tt,Ce=new N,Re=new ft,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ge(){return U===null?z:1}let A=n;function it(x,D){return t.getContext(x,D)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",K,!1),A===null){const D="webgl2";if(A=it(D,x),A===null)throw it(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Te,qe,we,at,ge,ze,_t,ut,w,g,O,V,Z,B,ye,te,xe,Ee,Q,de,Le,Me,le,Ne;function L(){Te=new U_(A),Te.init(),Me=new gx(A,Te),qe=new A_(A,Te,e,Me),we=new px(A,Te),qe.reversedDepthBuffer&&p&&we.buffers.depth.setReversed(!0),at=new F_(A),ge=new tx,ze=new mx(A,Te,we,ge,qe,Me,at),_t=new R_(E),ut=new I_(E),w=new Gm(A),le=new b_(A,w),g=new N_(A,w,at,le),O=new z_(A,g,w,at),Q=new k_(A,qe,ze),te=new C_(ge),V=new ex(E,_t,ut,Te,qe,le,te),Z=new yx(E,ge),B=new nx,ye=new cx(Te),Ee=new S_(E,_t,ut,we,O,m,c),xe=new ux(E,O,qe),Ne=new wx(A,at,qe,we),de=new T_(A,Te,at),Le=new O_(A,Te,at),at.programs=V.programs,E.capabilities=qe,E.extensions=Te,E.properties=ge,E.renderLists=B,E.shadowMap=xe,E.state=we,E.info=at}L();const ee=new Ex(E,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const x=Te.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Te.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(x){x!==void 0&&(z=x,this.setSize(Y,j,!1))},this.getSize=function(x){return x.set(Y,j)},this.setSize=function(x,D,F=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,j=D,t.width=Math.floor(x*z),t.height=Math.floor(D*z),F===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Y*z,j*z).floor()},this.setDrawingBufferSize=function(x,D,F){Y=x,j=D,z=F,t.width=Math.floor(x*F),t.height=Math.floor(D*F),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(T)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,D,F,k){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,D,F,k),we.viewport(T.copy(Se).multiplyScalar(z).round())},this.getScissor=function(x){return x.copy(ke)},this.setScissor=function(x,D,F,k){x.isVector4?ke.set(x.x,x.y,x.z,x.w):ke.set(x,D,F,k),we.scissor(W.copy(ke).multiplyScalar(z).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(x){we.setScissorTest(rt=x)},this.setOpaqueSort=function(x){ae=x},this.setTransparentSort=function(x){ue=x},this.getClearColor=function(x){return x.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,F=!0){let k=0;if(x){let I=!1;if(U!==null){const J=U.texture.format;I=J===jo||J===$o||J===qo}if(I){const J=U.texture.type,ce=J===Ri||J===pn||J===As||J===Cs||J===Xo||J===Yo,ve=Ee.getClearColor(),pe=Ee.getClearAlpha(),Pe=ve.r,De=ve.g,be=ve.b;ce?(v[0]=Pe,v[1]=De,v[2]=be,v[3]=pe,A.clearBufferuiv(A.COLOR,0,v)):(_[0]=Pe,_[1]=De,_[2]=be,_[3]=pe,A.clearBufferiv(A.COLOR,0,_))}else k|=A.COLOR_BUFFER_BIT}D&&(k|=A.DEPTH_BUFFER_BIT),F&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",K,!1),Ee.dispose(),B.dispose(),ye.dispose(),ge.dispose(),_t.dispose(),ut.dispose(),O.dispose(),le.dispose(),Ne.dispose(),V.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",si),ee.removeEventListener("sessionend",_l),Qi.stop()};function ne(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const x=at.autoReset,D=xe.enabled,F=xe.autoUpdate,k=xe.needsUpdate,I=xe.type;L(),at.autoReset=x,xe.enabled=D,xe.autoUpdate=F,xe.needsUpdate=k,xe.type=I}function K(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const D=x.target;D.removeEventListener("dispose",q),_e(D)}function _e(x){Ue(x),ge.remove(x)}function Ue(x){const D=ge.get(x).programs;D!==void 0&&(D.forEach(function(F){V.releaseProgram(F)}),x.isShaderMaterial&&V.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,F,k,I,J){D===null&&(D=Ie);const ce=I.isMesh&&I.matrixWorld.determinant()<0,ve=qf(x,D,F,k,I);we.setMaterial(k,ce);let pe=F.index,Pe=1;if(k.wireframe===!0){if(pe=g.getWireframeAttribute(F),pe===void 0)return;Pe=2}const De=F.drawRange,be=F.attributes.position;let He=De.start*Pe,Ke=(De.start+De.count)*Pe;J!==null&&(He=Math.max(He,J.start*Pe),Ke=Math.min(Ke,(J.start+J.count)*Pe)),pe!==null?(He=Math.max(He,0),Ke=Math.min(Ke,pe.count)):be!=null&&(He=Math.max(He,0),Ke=Math.min(Ke,be.count));const ht=Ke-He;if(ht<0||ht===1/0)return;le.setup(I,k,ve,F,pe);let st,et=de;if(pe!==null&&(st=w.get(pe),et=Le,et.setIndex(st)),I.isMesh)k.wireframe===!0?(we.setLineWidth(k.wireframeLinewidth*Ge()),et.setMode(A.LINES)):et.setMode(A.TRIANGLES);else if(I.isLine){let Ae=k.linewidth;Ae===void 0&&(Ae=1),we.setLineWidth(Ae*Ge()),I.isLineSegments?et.setMode(A.LINES):I.isLineLoop?et.setMode(A.LINE_LOOP):et.setMode(A.LINE_STRIP)}else I.isPoints?et.setMode(A.POINTS):I.isSprite&&et.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Vn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))et.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ae=I._multiDrawStarts,lt=I._multiDrawCounts,Xe=I._multiDrawCount,Ot=pe?w.get(pe).bytesPerElement:1,_n=ge.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<Xe;Ft++)_n.setValue(A,"_gl_DrawID",Ft),et.render(Ae[Ft]/Ot,lt[Ft])}else if(I.isInstancedMesh)et.renderInstances(He,ht,I.count);else if(F.isInstancedBufferGeometry){const Ae=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,lt=Math.min(F.instanceCount,Ae);et.renderInstances(He,ht,lt)}else et.render(He,ht)};function nt(x,D,F){x.transparent===!0&&x.side===wi&&x.forceSinglePass===!1?(x.side=Ut,x.needsUpdate=!0,Zs(x,D,F),x.side=$i,x.needsUpdate=!0,Zs(x,D,F),x.side=wi):Zs(x,D,F)}this.compile=function(x,D,F=null){F===null&&(F=x),h=ye.get(F),h.init(D),S.push(h),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const k=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const ve=J[ce];nt(ve,F,I),k.add(ve)}else nt(J,F,I),k.add(J)}),h=S.pop(),k},this.compileAsync=function(x,D,F=null){const k=this.compile(x,D,F);return new Promise(I=>{function J(){if(k.forEach(function(ce){ge.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){I(x);return}setTimeout(J,10)}Te.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let $e=null;function mi(x){$e&&$e(x)}function si(){Qi.stop()}function _l(){Qi.start()}const Qi=new gh;Qi.setAnimationLoop(mi),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(x){$e=x,ee.setAnimationLoop(x),x===null?Qi.stop():Qi.start()},ee.addEventListener("sessionstart",si),ee.addEventListener("sessionend",_l),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(D),D=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,D,U),h=ye.get(x,S.length),h.init(D),S.push(h),ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(ie,ci,D.reversedDepth),oe=this.localClippingEnabled,G=te.init(this.clippingPlanes,oe),f=B.get(x,b.length),f.init(),b.push(f),ee.enabled===!0&&ee.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&aa(J,D,-1/0,E.sortObjects)}aa(x,D,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(ae,ue),dt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,dt&&Ee.addToRenderList(f,x),this.info.render.frame++,G===!0&&te.beginShadows();const F=h.state.shadowsArray;xe.render(F,x,D),G===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=f.opaque,I=f.transmissive;if(h.setupLights(),D.isArrayCamera){const J=D.cameras;if(I.length>0)for(let ce=0,ve=J.length;ce<ve;ce++){const pe=J[ce];El(k,I,x,pe)}dt&&Ee.render(x);for(let ce=0,ve=J.length;ce<ve;ce++){const pe=J[ce];xl(f,x,pe,pe.viewport)}}else I.length>0&&El(k,I,x,D),dt&&Ee.render(x),xl(f,x,D);U!==null&&P===0&&(ze.updateMultisampleRenderTarget(U),ze.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(E,x,D),le.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(h=S[S.length-1],G===!0&&te.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,b.pop(),b.length>0?f=b[b.length-1]:f=null};function aa(x,D,F,k){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Qe.intersectsSprite(x)){k&&Re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ie);const ce=O.update(x),ve=x.material;ve.visible&&f.push(x,ce,ve,F,Re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Qe.intersectsObject(x))){const ce=O.update(x),ve=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Re.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Re.copy(ce.boundingSphere.center)),Re.applyMatrix4(x.matrixWorld).applyMatrix4(ie)),Array.isArray(ve)){const pe=ce.groups;for(let Pe=0,De=pe.length;Pe<De;Pe++){const be=pe[Pe],He=ve[be.materialIndex];He&&He.visible&&f.push(x,ce,He,F,Re.z,be)}}else ve.visible&&f.push(x,ce,ve,F,Re.z,null)}}const J=x.children;for(let ce=0,ve=J.length;ce<ve;ce++)aa(J[ce],D,F,k)}function xl(x,D,F,k){const I=x.opaque,J=x.transmissive,ce=x.transparent;h.setupLightsView(F),G===!0&&te.setGlobalState(E.clippingPlanes,F),k&&we.viewport(T.copy(k)),I.length>0&&js(I,D,F),J.length>0&&js(J,D,F),ce.length>0&&js(ce,D,F),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function El(x,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new ji(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Os:Ri,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const J=h.state.transmissionRenderTarget[k.id],ce=k.viewport||T;J.setSize(ce.z*E.transmissionResolutionScale,ce.w*E.transmissionResolutionScale);const ve=E.getRenderTarget(),pe=E.getActiveCubeFace(),Pe=E.getActiveMipmapLevel();E.setRenderTarget(J),E.getClearColor(X),$=E.getClearAlpha(),$<1&&E.setClearColor(16777215,.5),E.clear(),dt&&Ee.render(F);const De=E.toneMapping;E.toneMapping=Gi;const be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),G===!0&&te.setGlobalState(E.clippingPlanes,k),js(x,F,k),ze.updateMultisampleRenderTarget(J),ze.updateRenderTargetMipmap(J),Te.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ke=0,ht=D.length;Ke<ht;Ke++){const st=D[Ke],et=st.object,Ae=st.geometry,lt=st.material,Xe=st.group;if(lt.side===wi&&et.layers.test(k.layers)){const Ot=lt.side;lt.side=Ut,lt.needsUpdate=!0,Ml(et,F,k,Ae,lt,Xe),lt.side=Ot,lt.needsUpdate=!0,He=!0}}He===!0&&(ze.updateMultisampleRenderTarget(J),ze.updateRenderTargetMipmap(J))}E.setRenderTarget(ve,pe,Pe),E.setClearColor(X,$),be!==void 0&&(k.viewport=be),E.toneMapping=De}function js(x,D,F){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,J=x.length;I<J;I++){const ce=x[I],ve=ce.object,pe=ce.geometry,Pe=ce.group;let De=ce.material;De.allowOverride===!0&&k!==null&&(De=k),ve.layers.test(F.layers)&&Ml(ve,D,F,pe,De,Pe)}}function Ml(x,D,F,k,I,J){x.onBeforeRender(E,D,F,k,I,J),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(E,D,F,k,x,J),I.transparent===!0&&I.side===wi&&I.forceSinglePass===!1?(I.side=Ut,I.needsUpdate=!0,E.renderBufferDirect(F,D,k,I,x,J),I.side=$i,I.needsUpdate=!0,E.renderBufferDirect(F,D,k,I,x,J),I.side=wi):E.renderBufferDirect(F,D,k,I,x,J),x.onAfterRender(E,D,F,k,I,J)}function Zs(x,D,F){D.isScene!==!0&&(D=Ie);const k=ge.get(x),I=h.state.lights,J=h.state.shadowsArray,ce=I.state.version,ve=V.getParameters(x,I.state,J,D,F),pe=V.getProgramCacheKey(ve);let Pe=k.programs;k.environment=x.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(x.isMeshStandardMaterial?ut:_t).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",q),Pe=new Map,k.programs=Pe);let De=Pe.get(pe);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ce)return wl(x,ve),De}else ve.uniforms=V.getUniforms(x),x.onBeforeCompile(ve,E),De=V.acquireProgram(ve,pe),Pe.set(pe,De),k.uniforms=ve.uniforms;const be=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=te.uniform),wl(x,ve),k.needsLights=jf(x),k.lightsStateVersion=ce,k.needsLights&&(be.ambientLightColor.value=I.state.ambient,be.lightProbe.value=I.state.probe,be.directionalLights.value=I.state.directional,be.directionalLightShadows.value=I.state.directionalShadow,be.spotLights.value=I.state.spot,be.spotLightShadows.value=I.state.spotShadow,be.rectAreaLights.value=I.state.rectArea,be.ltc_1.value=I.state.rectAreaLTC1,be.ltc_2.value=I.state.rectAreaLTC2,be.pointLights.value=I.state.point,be.pointLightShadows.value=I.state.pointShadow,be.hemisphereLights.value=I.state.hemi,be.directionalShadowMap.value=I.state.directionalShadowMap,be.directionalShadowMatrix.value=I.state.directionalShadowMatrix,be.spotShadowMap.value=I.state.spotShadowMap,be.spotLightMatrix.value=I.state.spotLightMatrix,be.spotLightMap.value=I.state.spotLightMap,be.pointShadowMap.value=I.state.pointShadowMap,be.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function yl(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Ar.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function wl(x,D){const F=ge.get(x);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function qf(x,D,F,k,I){D.isScene!==!0&&(D=Ie),ze.resetTextureUnits();const J=D.fog,ce=k.isMeshStandardMaterial?D.environment:null,ve=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:mn,pe=(k.isMeshStandardMaterial?ut:_t).get(k.envMap||ce),Pe=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!F.morphAttributes.position,He=!!F.morphAttributes.normal,Ke=!!F.morphAttributes.color;let ht=Gi;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ht=E.toneMapping);const st=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=st!==void 0?st.length:0,Ae=ge.get(k),lt=h.state.lights;if(G===!0&&(oe===!0||x!==M)){const Rt=x===M&&k.id===y;te.setState(k,x,Rt)}let Xe=!1;k.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==ve||I.isBatchedMesh&&Ae.batching===!1||!I.isBatchedMesh&&Ae.batching===!0||I.isBatchedMesh&&Ae.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ae.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ae.instancing===!1||!I.isInstancedMesh&&Ae.instancing===!0||I.isSkinnedMesh&&Ae.skinning===!1||!I.isSkinnedMesh&&Ae.skinning===!0||I.isInstancedMesh&&Ae.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ae.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ae.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ae.instancingMorph===!1&&I.morphTexture!==null||Ae.envMap!==pe||k.fog===!0&&Ae.fog!==J||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Pe||Ae.vertexTangents!==De||Ae.morphTargets!==be||Ae.morphNormals!==He||Ae.morphColors!==Ke||Ae.toneMapping!==ht||Ae.morphTargetsCount!==et)&&(Xe=!0):(Xe=!0,Ae.__version=k.version);let Ot=Ae.currentProgram;Xe===!0&&(Ot=Zs(k,D,I));let _n=!1,Ft=!1,ts=!1;const ct=Ot.getUniforms(),Wt=Ae.uniforms;if(we.useProgram(Ot.program)&&(_n=!0,Ft=!0,ts=!0),k.id!==y&&(y=k.id,Ft=!0),_n||M!==x){we.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ct.setValue(A,"projectionMatrix",x.projectionMatrix),ct.setValue(A,"viewMatrix",x.matrixWorldInverse);const It=ct.map.cameraPosition;It!==void 0&&It.setValue(A,Ce.setFromMatrixPosition(x.matrixWorld)),qe.logarithmicDepthBuffer&&ct.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ft=!0,ts=!0)}if(I.isSkinnedMesh){ct.setOptional(A,I,"bindMatrix"),ct.setOptional(A,I,"bindMatrixInverse");const Rt=I.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ct.setValue(A,"boneTexture",Rt.boneTexture,ze))}I.isBatchedMesh&&(ct.setOptional(A,I,"batchingTexture"),ct.setValue(A,"batchingTexture",I._matricesTexture,ze),ct.setOptional(A,I,"batchingIdTexture"),ct.setValue(A,"batchingIdTexture",I._indirectTexture,ze),ct.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(A,"batchingColorTexture",I._colorsTexture,ze));const Xt=F.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&Q.update(I,F,Ot),(Ft||Ae.receiveShadow!==I.receiveShadow)&&(Ae.receiveShadow=I.receiveShadow,ct.setValue(A,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Wt.envMap.value=pe,Wt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Wt.envMapIntensity.value=D.environmentIntensity),Ft&&(ct.setValue(A,"toneMappingExposure",E.toneMappingExposure),Ae.needsLights&&$f(Wt,ts),J&&k.fog===!0&&Z.refreshFogUniforms(Wt,J),Z.refreshMaterialUniforms(Wt,k,z,j,h.state.transmissionRenderTarget[x.id]),Ar.upload(A,yl(Ae),Wt,ze)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ar.upload(A,yl(Ae),Wt,ze),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(A,"center",I.center),ct.setValue(A,"modelViewMatrix",I.modelViewMatrix),ct.setValue(A,"normalMatrix",I.normalMatrix),ct.setValue(A,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rt=k.uniformsGroups;for(let It=0,oa=Rt.length;It<oa;It++){const en=Rt[It];Ne.update(en,Ot),Ne.bind(en,Ot)}}return Ot}function $f(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function jf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,D,F){const k=ge.get(x);k.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ge.get(x.texture).__webglTexture=D,ge.get(x.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const F=ge.get(x);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const Zf=A.createFramebuffer();this.setRenderTarget=function(x,D=0,F=0){U=x,R=D,P=F;let k=!0,I=null,J=!1,ce=!1;if(x){const pe=ge.get(x);if(pe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(A.FRAMEBUFFER,null),k=!1;else if(pe.__webglFramebuffer===void 0)ze.setupRenderTarget(x);else if(pe.__hasExternalTextures)ze.rebindTextures(x,ge.get(x.texture).__webglTexture,ge.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(pe.__boundDepthTexture!==be){if(be!==null&&ge.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const De=ge.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(De[D])?I=De[D][F]:I=De[D],J=!0):x.samples>0&&ze.useMultisampledRTT(x)===!1?I=ge.get(x).__webglMultisampledFramebuffer:Array.isArray(De)?I=De[F]:I=De,T.copy(x.viewport),W.copy(x.scissor),H=x.scissorTest}else T.copy(Se).multiplyScalar(z).floor(),W.copy(ke).multiplyScalar(z).floor(),H=rt;if(F!==0&&(I=Zf),we.bindFramebuffer(A.FRAMEBUFFER,I)&&k&&we.drawBuffers(x,I),we.viewport(T),we.scissor(W),we.setScissorTest(H),J){const pe=ge.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,F)}else if(ce){const pe=D;for(let Pe=0;Pe<x.textures.length;Pe++){const De=ge.get(x.textures[Pe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Pe,De.__webglTexture,F,pe)}}else if(x!==null&&F!==0){const pe=ge.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,pe.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(x,D,F,k,I,J,ce,ve=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe){we.bindFramebuffer(A.FRAMEBUFFER,pe);try{const Pe=x.textures[ve],De=Pe.format,be=Pe.type;if(!qe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-k&&F>=0&&F<=x.height-I&&(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),A.readPixels(D,F,k,I,Me.convert(De),Me.convert(be),J))}finally{const Pe=U!==null?ge.get(U).__webglFramebuffer:null;we.bindFramebuffer(A.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,D,F,k,I,J,ce,ve=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ge.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(pe=pe[ce]),pe)if(D>=0&&D<=x.width-k&&F>=0&&F<=x.height-I){we.bindFramebuffer(A.FRAMEBUFFER,pe);const Pe=x.textures[ve],De=Pe.format,be=Pe.type;if(!qe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.bufferData(A.PIXEL_PACK_BUFFER,J.byteLength,A.STREAM_READ),x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),A.readPixels(D,F,k,I,Me.convert(De),Me.convert(be),0);const Ke=U!==null?ge.get(U).__webglFramebuffer:null;we.bindFramebuffer(A.FRAMEBUFFER,Ke);const ht=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await nm(A,ht,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,He),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,J),A.deleteBuffer(He),A.deleteSync(ht),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,F=0){const k=Math.pow(2,-F),I=Math.floor(x.image.width*k),J=Math.floor(x.image.height*k),ce=D!==null?D.x:0,ve=D!==null?D.y:0;ze.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,F,0,0,ce,ve,I,J),we.unbindTexture()};const Kf=A.createFramebuffer(),Jf=A.createFramebuffer();this.copyTextureToTexture=function(x,D,F=null,k=null,I=0,J=null){J===null&&(I!==0?(Vn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let ce,ve,pe,Pe,De,be,He,Ke,ht;const st=x.isCompressedTexture?x.mipmaps[J]:x.image;if(F!==null)ce=F.max.x-F.min.x,ve=F.max.y-F.min.y,pe=F.isBox3?F.max.z-F.min.z:1,Pe=F.min.x,De=F.min.y,be=F.isBox3?F.min.z:0;else{const Xt=Math.pow(2,-I);ce=Math.floor(st.width*Xt),ve=Math.floor(st.height*Xt),x.isDataArrayTexture?pe=st.depth:x.isData3DTexture?pe=Math.floor(st.depth*Xt):pe=1,Pe=0,De=0,be=0}k!==null?(He=k.x,Ke=k.y,ht=k.z):(He=0,Ke=0,ht=0);const et=Me.convert(D.format),Ae=Me.convert(D.type);let lt;D.isData3DTexture?(ze.setTexture3D(D,0),lt=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ze.setTexture2DArray(D,0),lt=A.TEXTURE_2D_ARRAY):(ze.setTexture2D(D,0),lt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);const Xe=A.getParameter(A.UNPACK_ROW_LENGTH),Ot=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_n=A.getParameter(A.UNPACK_SKIP_PIXELS),Ft=A.getParameter(A.UNPACK_SKIP_ROWS),ts=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,st.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Pe),A.pixelStorei(A.UNPACK_SKIP_ROWS,De),A.pixelStorei(A.UNPACK_SKIP_IMAGES,be);const ct=x.isDataArrayTexture||x.isData3DTexture,Wt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const Xt=ge.get(x),Rt=ge.get(D),It=ge.get(Xt.__renderTarget),oa=ge.get(Rt.__renderTarget);we.bindFramebuffer(A.READ_FRAMEBUFFER,It.__webglFramebuffer),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let en=0;en<pe;en++)ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(x).__webglTexture,I,be+en),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(D).__webglTexture,J,ht+en)),A.blitFramebuffer(Pe,De,ce,ve,He,Ke,ce,ve,A.DEPTH_BUFFER_BIT,A.NEAREST);we.bindFramebuffer(A.READ_FRAMEBUFFER,null),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(I!==0||x.isRenderTargetTexture||ge.has(x)){const Xt=ge.get(x),Rt=ge.get(D);we.bindFramebuffer(A.READ_FRAMEBUFFER,Kf),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,Jf);for(let It=0;It<pe;It++)ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Xt.__webglTexture,I,be+It):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Xt.__webglTexture,I),Wt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rt.__webglTexture,J,ht+It):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rt.__webglTexture,J),I!==0?A.blitFramebuffer(Pe,De,ce,ve,He,Ke,ce,ve,A.COLOR_BUFFER_BIT,A.NEAREST):Wt?A.copyTexSubImage3D(lt,J,He,Ke,ht+It,Pe,De,ce,ve):A.copyTexSubImage2D(lt,J,He,Ke,Pe,De,ce,ve);we.bindFramebuffer(A.READ_FRAMEBUFFER,null),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Wt?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(lt,J,He,Ke,ht,ce,ve,pe,et,Ae,st.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(lt,J,He,Ke,ht,ce,ve,pe,et,st.data):A.texSubImage3D(lt,J,He,Ke,ht,ce,ve,pe,et,Ae,st):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,He,Ke,ce,ve,et,Ae,st.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,He,Ke,st.width,st.height,et,st.data):A.texSubImage2D(A.TEXTURE_2D,J,He,Ke,ce,ve,et,Ae,st);A.pixelStorei(A.UNPACK_ROW_LENGTH,Xe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_n),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ts),J===0&&D.generateMipmaps&&A.generateMipmap(lt),we.unbindTexture()},this.copyTextureToTexture3D=function(x,D,F=null,k=null,I=0){return Vn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,F,k,I)},this.initRenderTarget=function(x){ge.get(x).__webglFramebuffer===void 0&&ze.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?ze.setTextureCube(x,0):x.isData3DTexture?ze.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?ze.setTexture2DArray(x,0):ze.setTexture2D(x,0),we.unbindTexture()},this.resetState=function(){R=0,P=0,U=null,we.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}var bx=Object.defineProperty,nl=(i,e)=>{for(var t in e)bx(i,t,{get:e[t],enumerable:!0})},bi={};nl(bi,{ACTIONS:()=>Ah,ANIMATION_MIN_DURATION:()=>Co,CAPTURE_EVENTS_CLASS:()=>Hs,CTRLZOOM_TIMEOUT:()=>Th,DBLCLICK_DELAY:()=>wh,EASINGS:()=>Cr,ICONS:()=>ni,IDS:()=>yt,KEY_CODES:()=>Et,LONGTOUCH_DELAY:()=>Sh,MOVE_THRESHOLD:()=>yh,SPHERE_RADIUS:()=>gn,TWOFINGERSOVERLAY_DELAY:()=>bh,VIEWER_DATA:()=>Zi});var Tx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,Ax='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',Cx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,Rx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Px=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,Lx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,Dx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,Ix=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Ux=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,Co=500,yh=4,wh=300,Sh=500,bh=100,Th=2e3,gn=10,Zi="photoSphereViewer",Hs="psv--capture-event",Ah=(i=>(i.ROTATE_UP="ROTATE_UP",i.ROTATE_DOWN="ROTATE_DOWN",i.ROTATE_RIGHT="ROTATE_RIGHT",i.ROTATE_LEFT="ROTATE_LEFT",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i))(Ah||{}),yt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Et={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},ni={arrow:Tx,close:Ax,download:Cx,fullscreenIn:Rx,fullscreenOut:Px,info:Lx,menu:Dx,zoomIn:Ix,zoomOut:Ux},Cr={linear:i=>i,inQuad:i=>i*i,outQuad:i=>i*(2-i),inOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,inCubic:i=>i*i*i,outCubic:i=>--i*i*i+1,inOutCubic:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,inQuart:i=>i*i*i*i,outQuart:i=>1- --i*i*i*i,inOutQuart:i=>i<.5?8*i*i*i*i:1-8*--i*i*i*i,inQuint:i=>i*i*i*i*i,outQuint:i=>1+--i*i*i*i*i,inOutQuint:i=>i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i,inSine:i=>1-Math.cos(i*(Math.PI/2)),outSine:i=>Math.sin(i*(Math.PI/2)),inOutSine:i=>.5-.5*Math.cos(Math.PI*i),inExpo:i=>Math.pow(2,10*(i-1)),outExpo:i=>1-Math.pow(2,-10*i),inOutExpo:i=>(i=i*2-1)<0?.5*Math.pow(2,10*i):1-.5*Math.pow(2,-10*i),inCirc:i=>1-Math.sqrt(1-i*i),outCirc:i=>Math.sqrt(1-(i-1)*(i-1)),inOutCirc:i=>(i*=2)<1?.5-.5*Math.sqrt(1-i*i):.5+.5*Math.sqrt(1-(i-=2)*i)},se={};nl(se,{Animation:()=>kr,Dynamic:()=>cs,MultiDynamic:()=>Zh,PressHandler:()=>Jr,Slider:()=>Jh,SliderDirection:()=>Kh,addClasses:()=>sl,angle:()=>Rh,applyEulerInverse:()=>Io,checkClosedShadowDom:()=>$h,checkStylesheet:()=>qh,checkVersion:()=>hl,cleanCssPosition:()=>Xh,clone:()=>jr,createTexture:()=>Do,cssPositionIsOrdered:()=>cl,dasherize:()=>zx,deepEqual:()=>Vh,deepmerge:()=>Bh,distance:()=>Ch,exitFullscreen:()=>kh,firstNonNull:()=>ki,getAbortError:()=>Po,getAngle:()=>Lh,getClosest:()=>Ih,getConfigParser:()=>Kr,getElement:()=>Dh,getEventTarget:()=>Ur,getMatchingTarget:()=>Uh,getPosition:()=>Nh,getShortestArc:()=>Ph,getStyleProperty:()=>hi,getTouchData:()=>Ro,getXMPValue:()=>Bt,greatArcDistance:()=>Ox,hasParent:()=>kx,invertResolvableBoolean:()=>Zr,isAbortError:()=>Wh,isEmpty:()=>Hh,isExtendedPosition:()=>ll,isFullscreenEnabled:()=>Oh,isNil:()=>Mt,isPlainObject:()=>al,keyPressMatch:()=>rl,logWarn:()=>wt,mergePanoData:()=>jh,parseAngle:()=>oi,parsePoint:()=>Bx,parseSpeed:()=>Yh,removeClasses:()=>Fx,requestFullscreen:()=>Fh,resolveBoolean:()=>ol,speedToDuration:()=>Lo,sum:()=>Nx,throttle:()=>zh,toggleClass:()=>$r,wrap:()=>us});function us(i,e){let t=i%e;return t<0&&(t+=e),t}function Nx(i){return i.reduce((e,t)=>e+t,0)}function Ch(i,e){return Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2))}function Rh(i,e){return Math.atan2(e.y-i.y,e.x-i.x)}function Ph(i,e){return[0,Math.PI*2,-Math.PI*2].reduce((n,s)=>{const r=e-i+s;return Math.abs(r)<Math.abs(n)?r:n},1/0)}function Lh(i,e){return Math.acos(Math.cos(i.pitch)*Math.cos(e.pitch)*Math.cos(i.yaw-e.yaw)+Math.sin(i.pitch)*Math.sin(e.pitch))}function Ox([i,e],[t,n]){i-t>Math.PI?i-=2*Math.PI:i-t<-Math.PI&&(i+=2*Math.PI);const s=(t-i)*Math.cos((e+n)/2),r=n-e;return Math.sqrt(s*s+r*r)}function Dh(i){return typeof i=="string"?i.match(/^[a-z]/i)?document.getElementById(i):document.querySelector(i):i}function $r(i,e,t){t===void 0?i.classList.toggle(e):t?i.classList.add(e):t||i.classList.remove(e)}function sl(i,e){i.classList.add(...e.split(" ").filter(t=>!!t))}function Fx(i,e){i.classList.remove(...e.split(" ").filter(t=>!!t))}function kx(i,e){let t=i;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function Ih(i,e){if(!i?.matches)return null;let t=i;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function Ur(i){return i?.composedPath()[0]||null}function Uh(i,e){return i?i.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function Nh(i){let e=0,t=0,n=i;for(;n;)e+=n.offsetLeft-n.scrollLeft+n.clientLeft,t+=n.offsetTop-n.scrollTop+n.clientTop,n=n.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function hi(i,e){return window.getComputedStyle(i).getPropertyValue(e)}function Ro(i){if(i.touches.length<2)return null;const e={x:i.touches[0].clientX,y:i.touches[0].clientY},t={x:i.touches[1].clientX,y:i.touches[1].clientY};return{distance:Ch(e,t),angle:Rh(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var Nr;function Oh(i,e=!1){return e?i===Nr:document.fullscreenElement===i}function Fh(i,e=!1){e?(Nr=i,i.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):i.requestFullscreen()}function kh(i=!1){i?(Nr.classList.remove("psv-fullscreen-emulation"),Nr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function rl(i,e){let t,n=!1,s=!1,r=!1,a=!1;return e==="+"?t=e:e.split("+").forEach(o=>{switch(o){case"Shift":n=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":a=!0;break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=o;break}}),n===i.shiftKey&&s===i.ctrlKey&&r===i.altKey&&a===i.metaKey&&t===i.key}function zx(i){return i.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function zh(i,e){let t=!1;return function(...n){t||(t=!0,setTimeout(()=>{i.apply(this,n),t=!1},e))}}function al(i){if(typeof i!="object"||i===null||Object.prototype.toString.call(i)!=="[object Object]")return!1;if(Object.getPrototypeOf(i)===null)return!0;let e=i;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(i)===e}function Bh(i,e){const t=e;return(function n(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=n(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!al(r[a])?s[a]=r[a]:r[a]!==t&&(s[a]?n(s[a],r[a]):s[a]=n(null,r[a])))})):s=r,s})(i,e)}function jr(i){return Bh(null,i)}function Hh(i){return!i||Object.keys(i).length===0&&i.constructor===Object}function Mt(i){return i==null}function ki(...i){for(const e of i)if(!Mt(e))return e;return null}function Vh(i,e){if(i===e)return!0;if(yc(i)&&yc(e)){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t of Object.keys(i))if(!Vh(i[t],e[t]))return!1;return!0}else return!1}function yc(i){return typeof i=="object"&&i!==null}var he=class Gh extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,Gh)}};function ol(i,e){al(i)?(e(i.initial,!0),i.promise.then(t=>e(t,!1))):e(i,!0)}function Zr(i){return{initial:!i.initial,promise:i.promise.then(e=>!e)}}function Po(){const i=new Error("Loading was aborted.");return i.name="AbortError",i}function Wh(i){return i?.name==="AbortError"}function wt(i){console.warn(`PhotoSphereViewer: ${i}`)}function ll(i){return!i||Array.isArray(i)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>i[e]!==void 0&&i[t]!==void 0)}function Bt(i,e,t=!0){let n=i.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(n!==null){const s=t?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}if(n=i.match("GPano:"+e+'="(.*?)"'),n!==null){const s=t?parseInt(n[1],10):parseFloat(n[1]);return isNaN(s)?null:s}return null}var wc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Or=["left","center","right"],Fr=["top","center","bottom"],Sc=[...Or,...Fr],qt="center";function Bx(i){if(!i)return{x:.5,y:.5};if(typeof i=="object")return i;let e=i.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(wc[e[0]]?e=[e[0],qt]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>wc[s]||s),t||e.reverse();const n=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return n?{x:parseFloat(n[1])/100,y:parseFloat(n[2])/100}:{x:.5,y:.5}}function Xh(i,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return i?(typeof i=="string"&&(i=i.split(" ")),i.length===1&&(i[0]===qt?i=[qt,qt]:Or.indexOf(i[0])!==-1?i=[qt,i[0]]:Fr.indexOf(i[0])!==-1&&(i=[i[0],qt])),i.length!==2||Sc.indexOf(i[0])===-1||Sc.indexOf(i[1])===-1?(wt(`Unparsable position ${i}`),null):!e&&i[0]===qt&&i[1]===qt?(wt("Invalid position center center"),null):(t&&!cl(i)&&(i=[i[1],i[0]]),i[1]===qt&&Or.indexOf(i[0])!==-1&&(i=[qt,i[0]]),i[0]===qt&&Fr.indexOf(i[1])!==-1&&(i=[i[1],qt]),i)):null}function cl(i){return Fr.indexOf(i[0])!==-1&&Or.indexOf(i[1])!==-1}function Yh(i){let e;if(typeof i=="string"){const t=i.toString().trim();let n=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(n/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Be.degToRad(n);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=n;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=n*Math.PI*2;break;default:throw new he(`Unknown speed unit "${s}"`)}}else e=i;return e}function Lo(i,e){if(typeof i!="number"){const t=Yh(i);return e/Math.abs(t)*1e3}else return Math.abs(i)}function oi(i,e=!1,t=e){let n;if(typeof i=="string"){const s=i.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new he(`Unknown angle "${i}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":n=Be.degToRad(r);break;case"rad":case"rads":n=r;break;default:throw new he(`Unknown angle unit "${a}"`)}else n=r}else if(typeof i=="number"&&!isNaN(i))n=i;else throw new he(`Unknown angle "${i}"`);return n=us(e?n+Math.PI:n,Math.PI*2),e?Be.clamp(n-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):n}function Do(i,e=!1){const t=new St(i);return t.needsUpdate=!0,t.minFilter=e?Hi:Vt,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var bc=new Ki;function Io(i,e){bc.setFromEuler(e).invert(),i.applyQuaternion(bc)}function Kr(i,e){const t=function(n){const s=jr({...i,...n}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:i[a]});else if(!(a in i)){wt(`Unknown option ${a}`);continue}r[a]=o}return r};return t.defaults=i,t.parsers=e||{},t}function qh(i,e){hi(i,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function hl(i,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${i} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function $h(i){do{if(i instanceof ShadowRoot&&i.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}i=i.parentNode}while(i)}function jh(i,e,t,n){const s={isEquirectangular:!0,fullWidth:ki(t?.fullWidth,n?.fullWidth),fullHeight:ki(t?.fullHeight,n?.fullHeight),croppedWidth:i,croppedHeight:e,croppedX:ki(t?.croppedX,n?.croppedX),croppedY:ki(t?.croppedY,n?.croppedY),poseHeading:ki(t?.poseHeading,n?.poseHeading,0),posePitch:ki(t?.posePitch,n?.posePitch,0),poseRoll:ki(t?.poseRoll,n?.poseRoll,0),initialHeading:n?.initialHeading,initialPitch:n?.initialPitch,initialFov:n?.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(i,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-i)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(wt("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(wt("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(wt("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(wt("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(wt("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var kr=class{constructor(i){this.easing=Cr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=i,i?(i.easing&&(this.easing=typeof i.easing=="function"?i.easing:Cr[i.easing]||Cr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},i.delay||0)):this.resolved=!0}__run(i){if(this.cancelled)return;this.start||(this.start=i);const e=(i-this.start)/this.options.duration,t={};if(e<1){for(const[n,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);t[n]=r}this.options.onTick(t,e),this.animationFrame=window.requestAnimationFrame(n=>this.__run(n))}else{for(const[n,s]of Object.entries(this.options.properties))s&&(t[n]=s.end);this.options.onTick(t,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(i){i?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(i)),this.callbacks.length=0}then(i){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(i):new Promise(e=>{this.callbacks.push(e)}).then(i)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},cs=class{constructor(i,e){if(this.fn=i,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new he("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(i){this.__current=i}setSpeed(i){this.speed=i}goto(i,e=1){this.mode=2,this.target=this.wrap?us(i,this.max):Be.clamp(i,this.min,this.max),this.speedMult=e}step(i,e=1){e===0?this.setValue(this.current+i):(this.mode!==2&&(this.target=this.current),this.goto(this.target+i,e))}roll(i=!1,e=1){this.mode=1,this.target=i?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(i){return this.target=this.wrap?us(i,this.max):Be.clamp(i,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(i){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const n=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=n&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+i/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-i/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*i/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*i/1e3)),t!==null&&(t=this.wrap?us(t,this.max):Be.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},Zh=class{constructor(i,e){this.fn=i,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((i,[e,t])=>(i[e]=t.current,i),{})}setSpeed(i){for(const e of Object.values(this.dynamics))e.setSpeed(i)}goto(i,e=1){for(const[t,n]of Object.entries(i))this.dynamics[t].goto(n,e)}step(i,e=1){if(e===0)this.setValue(Object.keys(i).reduce((t,n)=>(t[n]=i[n]+this.dynamics[n].current,t),{}));else for(const[t,n]of Object.entries(i))this.dynamics[t].step(n,e)}roll(i,e=1){for(const[t,n]of Object.entries(i))this.dynamics[t].roll(n,e)}stop(){for(const i of Object.values(this.dynamics))i.stop()}setValue(i){let e=!1;for(const[t,n]of Object.entries(i))e=this.dynamics[t].setValue(n)||e;return e&&this.fn&&this.fn(this.current),e}update(i){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(i)||e;return e&&this.fn&&this.fn(this.current),e}},Jr=class{constructor(i=200){this.delay=i,this.time=0,this.delay=i}get pending(){return this.time!==0}down(i){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=i}up(i){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{i(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(i(this.data),this.time=0,this.data=void 0)}},Kh=(i=>(i.VERTICAL="VERTICAL",i.HORIZONTAL="HORIZONTAL",i))(Kh||{}),Jh=class{constructor(i,e,t){this.container=i,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(i){switch(i.type){case"click":i.stopPropagation();break;case"mousedown":this.__onMouseDown(i);break;case"mouseenter":this.__onMouseEnter(i);break;case"mouseleave":this.__onMouseLeave(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break}}__onMouseDown(i){this.mousedown=!0,this.__update(i.clientX,i.clientY,!0)}__onMouseEnter(i){this.mouseover=!0,this.__update(i.clientX,i.clientY,!0)}__onTouchStart(i){this.mouseover=!0,this.mousedown=!0;const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(i){(this.mousedown||this.mouseover)&&(i.stopPropagation(),this.__update(i.clientX,i.clientY,!0))}__onTouchMove(i){if(this.mousedown||this.mouseover){i.stopPropagation();const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(i){this.mousedown&&(this.mousedown=!1,this.__update(i.clientX,i.clientY,!1))}__onMouseLeave(i){this.mouseover&&(this.mouseover=!1,this.__update(i.clientX,i.clientY,!0))}__onTouchEnd(i){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=i.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(i,e,t){const n=this.container.getBoundingClientRect();let s;this.isVertical?s=Be.clamp((n.bottom-e)/n.height,0,1):s=Be.clamp((i-n.left)/n.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:i,clientY:e}})}},fe={};nl(fe,{BeforeAnimateEvent:()=>dl,BeforeRenderEvent:()=>fs,BeforeRotateEvent:()=>ad,ClickEvent:()=>cd,ConfigChangedEvent:()=>Nt,DoubleClickEvent:()=>pd,FullscreenEvent:()=>ps,HideNotificationEvent:()=>ms,HideOverlayEvent:()=>Md,HidePanelEvent:()=>Xi,HideTooltipEvent:()=>Td,KeypressEvent:()=>Yi,LoadProgressEvent:()=>Ld,ObjectEnterEvent:()=>gu,ObjectEvent:()=>Qr,ObjectHoverEvent:()=>Mu,ObjectLeaveEvent:()=>Uo,PanoramaErrorEvent:()=>zd,PanoramaLoadEvent:()=>Ud,PanoramaLoadedEvent:()=>Wn,PositionUpdatedEvent:()=>gs,ReadyEvent:()=>_s,RenderEvent:()=>Kd,RollUpdatedEvent:()=>vs,ShowNotificationEvent:()=>xs,ShowOverlayEvent:()=>iu,ShowPanelEvent:()=>qi,ShowTooltipEvent:()=>ou,SizeUpdatedEvent:()=>Es,StopAllEvent:()=>Ms,TransitionDoneEvent:()=>Vd,ViewerEvent:()=>je,ZoomUpdatedEvent:()=>Ci});var vn=class extends Event{constructor(i,e=!1){super(i,{cancelable:e})}},Qh=class extends EventTarget{dispatchEvent(i){return super.dispatchEvent(i)}addEventListener(i,e,t){super.addEventListener(i,e,t)}removeEventListener(i,e,t){super.removeEventListener(i,e,t)}},je=class extends vn{},ed=class td extends je{constructor(e,t){super(td.type,!0),this.position=e,this.zoomLevel=t}};ed.type="before-animate";var dl=ed,id=class nd extends je{constructor(e,t){super(nd.type),this.timestamp=e,this.elapsed=t}};id.type="before-render";var fs=id,sd=class rd extends je{constructor(e){super(rd.type,!0),this.position=e}};sd.type="before-rotate";var ad=sd,od=class ld extends je{constructor(e){super(ld.type),this.data=e}};od.type="click";var cd=od,hd=class dd extends je{constructor(e){super(dd.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};hd.type="config-changed";var Nt=hd,ud=class fd extends je{constructor(e){super(fd.type),this.data=e}};ud.type="dblclick";var pd=ud,md=class gd extends je{constructor(e){super(gd.type),this.fullscreenEnabled=e}};md.type="fullscreen";var ps=md,vd=class _d extends je{constructor(e){super(_d.type),this.notificationId=e}};vd.type="hide-notification";var ms=vd,xd=class Ed extends je{constructor(e){super(Ed.type),this.overlayId=e}};xd.type="hide-overlay";var Md=xd,yd=class wd extends je{constructor(e){super(wd.type),this.panelId=e}};yd.type="hide-panel";var Xi=yd,Sd=class bd extends je{constructor(e){super(bd.type),this.tooltipData=e}};Sd.type="hide-tooltip";var Td=Sd,Ad=class Cd extends je{constructor(e,t){super(Cd.type,!0),this.key=e,this.originalEvent=t}matches(e){return rl(this.originalEvent,e)}};Ad.type="key-press";var Yi=Ad,Rd=class Pd extends je{constructor(e){super(Pd.type),this.progress=e}};Rd.type="load-progress";var Ld=Rd,Dd=class Id extends je{constructor(e){super(Id.type),this.panorama=e}};Dd.type="panorama-load";var Ud=Dd,Nd=class Od extends je{constructor(e){super(Od.type),this.data=e}};Nd.type="panorama-loaded";var Wn=Nd,Fd=class kd extends je{constructor(e,t){super(kd.type),this.panorama=e,this.error=t}};Fd.type="panorama-error";var zd=Fd,Bd=class Hd extends je{constructor(e){super(Hd.type),this.completed=e}};Bd.type="transition-done";var Vd=Bd,Gd=class Wd extends je{constructor(e){super(Wd.type),this.position=e}};Gd.type="position-updated";var gs=Gd,Xd=class Yd extends je{constructor(e){super(Yd.type),this.roll=e}};Xd.type="roll-updated";var vs=Xd,qd=class $d extends je{constructor(){super($d.type)}};qd.type="ready";var _s=qd,jd=class Zd extends je{constructor(){super(Zd.type)}};jd.type="render";var Kd=jd,Jd=class Qd extends je{constructor(e){super(Qd.type),this.notificationId=e}};Jd.type="show-notification";var xs=Jd,eu=class tu extends je{constructor(e){super(tu.type),this.overlayId=e}};eu.type="show-overlay";var iu=eu,nu=class su extends je{constructor(e){super(su.type),this.panelId=e}};nu.type="show-panel";var qi=nu,ru=class au extends je{constructor(e,t){super(au.type),this.tooltip=e,this.tooltipData=t}};ru.type="show-tooltip";var ou=ru,lu=class cu extends je{constructor(e){super(cu.type),this.size=e}};lu.type="size-updated";var Es=lu,hu=class du extends je{constructor(){super(du.type)}};hu.type="stop-all";var Ms=hu,uu=class fu extends je{constructor(e){super(fu.type),this.zoomLevel=e}};uu.type="zoom-updated";var Ci=uu,Qr=class extends je{constructor(i,e,t,n,s){super(i),this.originalEvent=e,this.object=t,this.viewerPoint=n,this.userDataKey=s}},pu=class mu extends Qr{constructor(e,t,n,s){super(mu.type,e,t,n,s)}};pu.type="enter-object";var gu=pu,vu=class _u extends Qr{constructor(e,t,n,s){super(_u.type,e,t,n,s)}};vu.type="leave-object";var Uo=vu,xu=class Eu extends Qr{constructor(e,t,n,s){super(Eu.type,e,t,n,s)}};xu.type="hover-object";var Mu=xu,ul=class{constructor(i){this.viewer=i}init(){}destroy(){}supportsTransition(i){return!1}supportsPreload(i){return!1}textureCoordsToSphericalCoords(i,e){throw new he("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(i,e){throw new he("Current adapter does not support texture coordinates.")}};ul.supportsDownload=!1;function Tc(i){if(i){for(const[,e]of[["_",i],...Object.entries(i)])if(e.prototype instanceof ul)return hl(e.id,e.VERSION,"5.14.0"),e}return null}var as=`${Zi}_touchSupport`,Dt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=Gx(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const i=Hx();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!i,this.maxTextureWidth=i?i.getParameter(i.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=Vx(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Dt.isWebGLSupported)throw new he("WebGL 2 is not supported.");if(Dt.maxTextureWidth===0)throw new he("Unable to detect system capabilities")}};function Hx(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function Vx(){let i="ontouchstart"in window||navigator.maxTouchPoints>0;as in localStorage&&(i=localStorage[as]==="true");const e=new Promise(t=>{const n=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{n(),localStorage[as]=!1,t(!1)},r=()=>{n(),localStorage[as]=!0,t(!0)},a=()=>{n(),localStorage[as]=i,t(i)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:i,promise:e}}function Gx(i){let e=i,t=!1;const n=document.createElement("canvas"),s=n.getContext("2d");for(n.width=1,n.height=1;e>1024&&!t;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new he("Unable to detect system capabilities")}var Wx=Kr({resolution:64,useXmpData:!0,blur:!1},{resolution:i=>{if(!i||!Be.isPowerOfTwo(i))throw new he("EquirectangularAdapter resolution must be power of two.");return i}}),ea=class yu extends ul{static withConfig(e){return[yu,e]}constructor(e,t){super(e),this.config=Wx(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(Mt(e.textureX)||Mt(e.textureY))throw new he("Texture position is missing 'textureX' or 'textureY'");const n=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const n=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?n+t.fullWidth/2:n-t.fullWidth/2)-t.croppedX,a=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||a<0||a>t.croppedHeight)&&(r=a=void 0),{textureX:r,textureY:a}}async loadTexture(e,t=!0,n,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new he("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:n}:r={data:n,...e};const a=await this.viewer.textureLoader.loadFile(r.path,t?u=>this.viewer.textureLoader.dispatchProgress(u):null,r.path),o=s?await this.loadXMP(a):null,c=await this.viewer.textureLoader.blobToImage(a);typeof r.data=="function"&&(r.data=r.data(c,o));const l=jh(c.width,c.height,r.data,o),d=this.createEquirectangularTexture(c);return{panorama:e,texture:d,panoData:l,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),n=t.indexOf("<x:xmpmeta");if(n===-1)return null;const s=t.indexOf("</x:xmpmeta>",n);if(s===-1)return null;const r=t.substring(n,s);return r.includes("GPano:")?{fullWidth:Bt(r,"FullPanoWidthPixels"),fullHeight:Bt(r,"FullPanoHeightPixels"),croppedWidth:Bt(r,"CroppedAreaImageWidthPixels"),croppedHeight:Bt(r,"CroppedAreaImageHeightPixels"),croppedX:Bt(r,"CroppedAreaLeftPixels"),croppedY:Bt(r,"CroppedAreaTopPixels"),poseHeading:Bt(r,"PoseHeadingDegrees",!1),posePitch:Bt(r,"PosePitchDegrees",!1),poseRoll:Bt(r,"PoseRollDegrees",!1),initialHeading:Bt(r,"InitialViewHeadingDegrees",!1),initialPitch:Bt(r,"InitialViewPitchDegrees",!1),initialFov:Bt(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,n)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=n,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Dt.maxTextureWidth){const t=Math.min(1,Dt.maxCanvasWidth/e.width),n=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=n.getContext("2d");return this.config.blur&&(s.filter=`blur(${n.width/2048}px)`),s.drawImage(e,0,0,n.width,n.height),Do(n)}return Do(e)}createMesh(e){const t=e.croppedX/e.fullWidth*2*Math.PI,n=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,a=new Bs(gn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,n,s,r).scale(-1,1,1),o=new Fs({depthTest:!1,depthWrite:!1});return new Gt(a,o)}setTexture(e,t){e.material.map=t.texture}setTextureOpacity(e,t){e.material.opacity=t,e.material.transparent=t<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};ea.id="equirectangular";ea.VERSION="5.14.0";ea.supportsDownload=!0;var wu=ea,Su=class bu extends wu{static withConfig(e){return[bu,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const n=await super.loadTexture(e,t,null,!1);return n.panoData=null,n}createMesh(){const e=new Bs(gn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),n=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let a=0;a<3;a++){const o=r*3+a,c=n.getX(o),l=n.getY(o),d=n.getZ(o),u=.947;if(r<t.count/6){const p=c===0&&d===0?1:Math.acos(l)/Math.sqrt(c*c+d*d)*(2/Math.PI);t.setXY(o,c*(u/4)*p+1/4,d*(u/2)*p+1/2)}else{const p=c===0&&d===0?1:Math.acos(-l)/Math.sqrt(c*c+d*d)*(2/Math.PI);t.setXY(o,-c*(u/4)*p+3/4,d*(u/2)*p+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new Fs({depthTest:!1,depthWrite:!1});return new Gt(e,s)}};Su.id="dual-fisheye";Su.VERSION="5.14.0";var Li=class Tu{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Tu?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},Xx=Kr({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),At=class extends Li{constructor(i,e){super(i,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=Xx(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Et.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(i=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),i&&this.viewer.navbar.autoSize())}hide(i=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",i&&this.viewer.navbar.autoSize())}checkSupported(){ol(this.isSupported(),(i,e)=>{this.state&&(this.state.supported=i,e?i||this.hide():this.toggle(i))})}autoSize(){}isSupported(){return!0}toggleActive(i=!this.state.active){i!==this.state.active&&(this.state.active=i,$r(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(i){this.container.innerHTML=i,sl(this.container.querySelector("svg"),"psv-button-svg")}},Yx=class extends At{constructor(i,e){super(i,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},Is=class extends At{constructor(i){super(i,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ni.info}),this.mode=0,this.viewer.addEventListener(ms.type,this),this.viewer.addEventListener(xs.type,this),this.viewer.addEventListener(Xi.type,this),this.viewer.addEventListener(qi.type,this),this.viewer.addEventListener(Nt.type,this)}destroy(){this.viewer.removeEventListener(ms.type,this),this.viewer.removeEventListener(xs.type,this),this.viewer.removeEventListener(Xi.type,this),this.viewer.removeEventListener(qi.type,this),this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(i){if(i instanceof Nt){i.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;i instanceof ms?e=this.mode===1:i instanceof xs?e=this.mode===1&&i.notificationId!==yt.DESCRIPTION:i instanceof Xi?e=this.mode===2:i instanceof qi&&(e=this.mode===2&&i.panelId!==yt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(i){super.hide(i),this.mode&&this.__close()}autoSize(i=!1){if(i){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),n=!!this.viewer.config.description;t||n?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(yt.DESCRIPTION);break;case 2:this.viewer.panel.hide(yt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:yt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:yt.DESCRIPTION,content:this.viewer.config.caption}))}};Is.id="description";var Au=class extends At{constructor(i){super(i,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:ni.download}),this.viewer.addEventListener(Nt.type,this),this.viewer.addEventListener(Wn.type,this)}destroy(){this.viewer.removeEventListener(Nt.type,this),this.viewer.removeEventListener(Wn.type,this),super.destroy()}handleEvent(i){i instanceof Nt?(i.containsOptions("downloadUrl")&&this.checkSupported(),i.containsOptions("downloadUrl","downloadName")&&this.__update()):i instanceof Wn&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const i=this.container;i.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,i.target="_blank",i.href.startsWith("data:")&&!this.viewer.config.downloadName?i.download="panorama."+i.href.substring(0,i.href.indexOf(";")).split("/").pop():i.download=this.viewer.config.downloadName||i.href.split("/").pop()}};Au.id="download";var Cu=class extends At{constructor(i){super(i,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ni.fullscreenIn,iconActive:ni.fullscreenOut}),this.viewer.addEventListener(ps.type,this)}destroy(){this.viewer.removeEventListener(ps.type,this),super.destroy()}handleEvent(i){i instanceof ps&&this.toggleActive(i.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};Cu.id="fullscreen";var qx="psvButton",$x=(i,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${ni.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${i.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Rr=class extends At{constructor(i){super(i,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:ni.menu}),this.viewer.addEventListener(qi.type,this),this.viewer.addEventListener(Xi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(qi.type,this),this.viewer.removeEventListener(Xi.type,this),super.destroy()}handleEvent(i){i instanceof qi?this.toggleActive(i.panelId===yt.MENU):i instanceof Xi&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(i){super.hide(i),this.__hideMenu()}show(i){super.show(i),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:yt.MENU,content:$x(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:i=>{const e=i?Ih(i,".psv-panel-menu-item"):void 0,t=e?e.dataset[qx]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(yt.MENU)}};Rr.id="menu";function jx(i){let e=0;switch(i){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return ni.arrow.replace("rotate(0",`rotate(${e}`)}var Vs=class extends At{constructor(i,e){super(i,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jx(e)}),this.direction=e,this.handler=new Jr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Et.Enter&&this.__onMouseDown();break;case"keyup":i.key===Et.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Zr(Dt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const i={};switch(this.direction){case 0:i.pitch=!1;break;case 1:i.pitch=!0;break;case 3:i.yaw=!1;break;default:i.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(i),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Vs.groupId="move";var Ru=class extends Vs{constructor(i){super(i,1)}};Ru.id="moveDown";var Pu=class extends Vs{constructor(i){super(i,2)}};Pu.id="moveLeft";var Lu=class extends Vs{constructor(i){super(i,3)}};Lu.id="moveRight";var Du=class extends Vs{constructor(i){super(i,0)}};Du.id="moveUp";var fl=class extends At{constructor(i,e,t){super(i,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new Jr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Et.Enter&&this.__onMouseDown();break;case"keyup":i.key===Et.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return Zr(Dt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};fl.groupId="zoom";var Iu=class extends fl{constructor(i){super(i,ni.zoomIn,0)}};Iu.id="zoomIn";var Uu=class extends fl{constructor(i){super(i,ni.zoomOut,1)}};Uu.id="zoomOut";var pl=class extends At{constructor(i){super(i,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Jh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(hi(this.container,"max-width"),10),this.viewer.addEventListener(Ci.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(_s.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Ci.type,this),this.viewer.removeEventListener(_s.type,this),super.destroy()}handleEvent(i){i instanceof Ci?this.__moveZoomValue(i.zoomLevel):i instanceof _s&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return Zr(Dt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(i){this.zoomValue.style.left=i/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(i){i.mousedown&&this.viewer.zoom(i.value*100)}};pl.id="zoomRange";pl.groupId="zoom";var Nu=class extends Qh{constructor(i){super(),this.viewer=i}init(){}destroy(){}},ta=class extends Nu{constructor(i,e){super(i),this.config=this.constructor.configParser(e)}setOption(i,e){this.setOptions({[i]:e})}setOptions(i){const e={...this.config,...i},t=this.constructor,n=t.configParser,s=t.readonlyOptions,r=t.id;for(let[a,o]of Object.entries(i)){if(!(a in n.defaults)){wt(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){wt(`${r}: Option "${a}" cannot be updated`);continue}a in n.parsers&&(o=n.parsers[a](o,{rawConfig:e,defValue:n.defaults[a]})),this.config[a]=o}}};ta.readonlyOptions=[];function No(i){if(i){for(const[,e]of[["_",i],...Object.entries(i)])if(e.prototype instanceof Nu)return hl(e.id,e.VERSION,"5.14.0"),e}return null}var pi={panorama:null,container:null,adapter:[wu,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Et.ArrowUp]:"ROTATE_UP",[Et.ArrowDown]:"ROTATE_DOWN",[Et.ArrowRight]:"ROTATE_RIGHT",[Et.ArrowLeft]:"ROTATE_LEFT",[Et.PageUp]:"ZOOM_IN",[Et.PageDown]:"ZOOM_OUT",[Et.Plus]:"ZOOM_IN",[Et.Minus]:"ZOOM_OUT"}},Ac={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Oo={container:i=>{if(!i)throw new he("No value given for container.");return i},adapter:(i,{defValue:e})=>{if(i?Array.isArray(i)?i=[Tc(i[0]),i[1]]:i=[Tc(i),null]:i=e,!i[0])throw new he("An undefined value was given for adapter.");if(!i[0].id)throw new he("Adapter has no id.");return i},defaultYaw:i=>oi(i),defaultPitch:i=>oi(i,!0),defaultZoomLvl:i=>Be.clamp(i,0,100),minFov:(i,{rawConfig:e})=>(e.maxFov<i&&(wt("maxFov cannot be lower than minFov"),i=e.maxFov),Be.clamp(i,1,179)),maxFov:(i,{rawConfig:e})=>(i<e.minFov&&(i=e.minFov),Be.clamp(i,1,179)),moveInertia:(i,{defValue:e})=>i===!0?e:i===!1?0:i,lang:i=>({...pi.lang,...i}),fisheye:i=>i===!0?1:i===!1?0:i,requestHeaders:i=>i&&typeof i=="object"?()=>i:typeof i=="function"?i:null,withCredentials:i=>typeof i=="boolean"?()=>i:typeof i=="function"?i:()=>!1,defaultTransition:(i,{defValue:e})=>i===null||i.speed===0?null:{...e,...i},rendererParameters:(i,{defValue:e})=>({...i,...e}),plugins:i=>i.map((e,t)=>{if(Array.isArray(e)?e=[No(e[0]),e[1]]:e=[No(e),null],!e[0])throw new he(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new he(`Plugin ${t} has no id.`);return e}),navbar:i=>i===!1?null:i===!0?jr(pi.navbar):typeof i=="string"?i.split(/[ ,]/):i},Zx=Kr(pi,Oo),Bn=class extends At{constructor(i){super(i,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(i){this.show(),this.contentElt.innerHTML=i??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(Is.id,!1)?.autoSize(!0)}};Bn.id="caption";var Fo={},zr={};function ia(i,e){if(!i.id)throw new he("Button id is required");if(Fo[i.id]=i,i.groupId&&(zr[i.groupId]=zr[i.groupId]||[]).push(i),e){const t=pi.navbar;switch(e){case"start":t.unshift(i.id);break;case"end":t.push(i.id);break;default:{const[n,s]=e.split(":"),r=t.indexOf(n);if(!n||!s||r===-1)throw new he(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,i.id)}}}}[Uu,pl,Iu,Is,Bn,Au,Cu,Pu,Lu,Du,Ru].forEach(i=>ia(i));var Kx=class extends Li{constructor(i){super(i,{className:`psv-navbar ${Hs}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(i){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,i.indexOf(Bn.id)!==-1&&i.indexOf(Is.id)===-1&&i.splice(i.indexOf(Bn.id),0,Is.id),i.forEach(e=>{typeof e=="object"?new Yx(this,e):Fo[e]?new Fo[e](this):zr[e]?zr[e].forEach(t=>{new t(this)}):wt(`Unknown button ${e}`)}),new Rr(this),this.children.forEach(e=>{e instanceof At&&e.checkSupported()}),this.autoSize()}setCaption(i){this.children.some(e=>e instanceof Bn?(e.setCaption(i),!0):!1)}getButton(i,e=!0){const t=this.children.find(n=>n instanceof At&&n.id===i);return!t&&e&&wt(`button "${i}" not found in the navbar`),t}focusButton(i){this.isVisible()&&(this.getButton(i,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(n=>{n instanceof At&&n.autoSize()});const i=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(n=>{n.isVisible()&&n instanceof At&&(e+=n.width,n.collapsable&&t.push(n))}),e!==0&&(i<e&&t.length>0?(t.forEach(n=>n.collapse()),this.collapsed=t,this.getButton(Rr.id).show(!1)):i>=e&&this.collapsed.length>0&&(this.collapsed.forEach(n=>n.uncollapse()),this.collapsed=[],this.getButton(Rr.id).hide(!1)),this.getButton(Bn.id,!1)?.autoSize())}};Wi.enabled=!1;var Fn={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){Wi.enabled&&(wt("ThreeJS cache should be disabled"),Wi.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(i,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[i]=t,this.items[e].lastAccess=Date.now())},get(i,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[i]},remove(i,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[i],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,i],[,e])=>e.lastAccess-i.lastAccess).forEach(([i,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[i]})}},Jx=class extends Li{constructor(i){super(i,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=hi(this.loader,"color"),this.color=hi(this.canvas,"color"),this.border=parseInt(hi(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(hi(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Nt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(i){i instanceof Nt&&i.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(i){this.container.classList.remove("psv-loader--undefined");const e=Be.clamp(i,0,99.999)/100*Math.PI*2,t=this.size/2,n=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+t,o=-Math.cos(e)*r+t,c=i>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${n} ${s} A ${r} ${r} 0 ${c} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const i=this.loader.querySelector(".psv-loader-image, .psv-loader-text");i&&this.loader.removeChild(i);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},Qx=class extends Li{constructor(i){super(i,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new he("Notification cannot be toggled")}show(i){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof i=="string"&&(i={content:i}),this.state.contentId=i.id||null,this.content.innerHTML=i.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new xs(this.state.contentId)),i.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),i.timeout))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new ms(e))}}},eE=class extends Li{constructor(i){super(i,{className:`psv-overlay ${Hs}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Yi.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Yi.type,this),super.destroy()}handleEvent(i){i.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),i.stopPropagation()):i instanceof Yi&&this.isVisible()&&this.state.dismissible&&i.matches(Et.Escape)&&(this.hide(),i.preventDefault())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new he("Overlay cannot be toggled")}show(i){typeof i=="string"&&(i={title:i}),this.state.contentId=i.id||null,this.state.dismissible=i.dismissible!==!1,this.image.innerHTML=i.image||"",this.title.innerHTML=i.title||"",this.text.innerHTML=i.text||"",super.show(),this.viewer.dispatchEvent(new iu(this.state.contentId))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Md(e))}}},tE=200,Fa="psv-panel-content--no-interaction",iE=class extends Li{constructor(i){super(i,{className:`psv-panel ${Hs}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=ni.close,t.title=i.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Yi.type,this)}destroy(){this.viewer.removeEventListener(Yi.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break;case Yi.type:this.__onKeyPress(i);break}}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new he("Panel cannot be toggled")}show(i){typeof i=="string"&&(i={content:i});const e=this.isVisible(i.id);this.state.contentId=i.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),i.id&&this.state.width[i.id]?this.container.style.width=this.state.width[i.id]:i.width?this.container.style.width=i.width:this.container.style.width=null,this.content.innerHTML=i.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),$r(this.content,"psv-panel-content--no-margin",i.noMargin===!0),i.clickHandler&&(this.state.clickHandler=t=>{i.clickHandler(Ur(t))},this.state.keyHandler=t=>{t.key===Et.Enter&&i.clickHandler(Ur(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new qi(this.state.contentId))}hide(i){if(this.isVisible(i)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Xi(e))}}__onMouseDown(i){i.stopPropagation(),this.__startResize(i.clientX,i.clientY)}__onTouchStart(i){if(i.stopPropagation(),i.touches.length===1){const e=i.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(i){this.state.mousedown&&(i.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(Fa))}__onTouchEnd(i){this.state.mousedown&&(i.stopPropagation(),i.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(Fa)))}__onMouseMove(i){this.state.mousedown&&(i.stopPropagation(),this.__resize(i.clientX,i.clientY))}__onTouchMove(i){if(this.state.mousedown){const e=i.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(i){this.isVisible()&&i.matches(Et.Escape)&&(this.hide(),i.preventDefault())}__startResize(i,e){this.state.mouseX=i,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(Fa)}__resize(i,e){const t=i,n=e,s=Math.max(tE,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=n}},nE=class extends Li{constructor(i,e){super(i,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(i){i.type==="transitionend"&&this.__onTransitionEnd(i)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new he("Tooltip cannot be toggled")}show(i){if(this.state.state!==0)throw new he("Initialized tooltip cannot be re-initialized");i.className&&sl(this.container,i.className),i.style&&Object.assign(this.container.style,i.style),this.state.state=3,this.update(i.content,i),this.state.data=i.data,this.state.state=1,this.viewer.dispatchEvent(new ou(this,this.state.data)),this.__waitImages()}update(i,e){this.content.innerHTML=i;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(hi(this.arrow,"border-top-width"),10),this.state.border=parseInt(hi(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(i){if(this.state.state!==1&&this.state.state!==3)throw new he("Uninitialized tooltip cannot be moved");i.box=i.box??this.state.config?.box??{width:0,height:0},this.state.config=i;const e=this.container,t=this.arrow,n={posClass:Xh(i.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(n,i);let s=null,r=null;if(n.top<0?s="bottom":n.top+n.height>this.viewer.state.size.height&&(s="top"),n.left<0?r="right":n.left+n.width>this.viewer.state.size.width&&(r="left"),r||s){const o=cl(n.posClass);s&&(n.posClass[o?0:1]=s),r&&(n.posClass[o?1:0]=r),this.__computeTooltipPosition(n,i)}e.style.top=n.top+"px",e.style.left=n.left+"px",t.style.top=n.arrowTop+"px",t.style.left=n.arrowLeft+"px";const a=n.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Td(this.state.data));const i=parseFloat(hi(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},i*2)}__onTransitionEnd(i){if(i.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(i,e){const t=this.state.arrow,n=e.top,s=i.height,r=e.left,a=i.width,o=t+this.state.border,c=e.box.width/2+t*2,l=e.box.height/2+t*2;switch(i.posClass.join("-")){case"top-left":i.top=n-l-s,i.left=r+o-a,i.arrowTop=s,i.arrowLeft=a-o-t;break;case"top-center":i.top=n-l-s,i.left=r-a/2,i.arrowTop=s,i.arrowLeft=a/2-t;break;case"top-right":i.top=n-l-s,i.left=r-o,i.arrowTop=s,i.arrowLeft=t;break;case"bottom-left":i.top=n+l,i.left=r+o-a,i.arrowTop=-t*2,i.arrowLeft=a-o-t;break;case"bottom-center":i.top=n+l,i.left=r-a/2,i.arrowTop=-t*2,i.arrowLeft=a/2-t;break;case"bottom-right":i.top=n+l,i.left=r-o,i.arrowTop=-t*2,i.arrowLeft=t;break;case"left-top":i.top=n+o-s,i.left=r-c-a,i.arrowTop=s-o-t,i.arrowLeft=a;break;case"center-left":i.top=n-s/2,i.left=r-c-a,i.arrowTop=s/2-t,i.arrowLeft=a;break;case"left-bottom":i.top=n-o,i.left=r-c-a,i.arrowTop=t,i.arrowLeft=a;break;case"right-top":i.top=n+o-s,i.left=r+c,i.arrowTop=s-o-t,i.arrowLeft=-t*2;break;case"center-right":i.top=n-s/2,i.left=r+c,i.arrowTop=s/2-t,i.arrowLeft=-t*2;break;case"right-bottom":i.top=n-o,i.left=r+c,i.arrowTop=t,i.arrowLeft=-t*2;break}}__waitImages(){const i=this.content.querySelectorAll("img");if(i.length>0){const e=[];i.forEach(t=>{t.complete||e.push(new Promise(n=>{t.onload=n,t.onerror=n}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},sE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Gs=class{constructor(i){this.viewer=i,this.config=i.config,this.state=i.state}destroy(){}},Qt=new N,_r=new fi(0,0,0,"ZXY"),rE=class extends Gs{constructor(i){super(i)}fovToZoomLevel(i){const e=Math.round((i-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Be.clamp(e-2*(e-50),0,100)}zoomLevelToFov(i){return this.config.maxFov+i/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(i){return Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(i)/2)*this.state.aspect))}hFovToVFov(i){return Be.radToDeg(2*Math.atan(Math.tan(Be.degToRad(i)/2)/this.state.aspect))}getAnimationProperties(i,e,t){const n=!Mt(e),s=!Mt(t),r={};let a=null;if(n){const o=this.viewer.getPosition(),c=Ph(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+c},r.pitch={start:o.pitch,end:e.pitch},a=Lo(i,Lh(o,e))}if(s){const o=this.viewer.getZoomLevel(),c=Math.abs(t-o);r.zoom={start:o,end:t},a===null&&(a=Lo(i,Math.PI/4*c/100))}return a===null?typeof i=="number"?a=i:a=Co:a=Math.max(Co,a),{duration:a,properties:r}}getTransitionOptions(i){let e;const t=this.config.defaultTransition??pi.defaultTransition;return i.transition===!1||i.transition===null?e=null:i.transition===!0?e={...t}:typeof i.transition=="object"?e={...t,...i.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(i){if(!this.state.textureData?.panoData)throw new he("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(i,this.state.textureData.panoData);return!_r.equals(this.viewer.renderer.panoramaPose)||!_r.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Qt),Qt.applyEuler(this.viewer.renderer.panoramaPose),Qt.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Qt)):e}sphericalCoordsToTextureCoords(i){if(!this.state.textureData?.panoData)throw new he("Current adapter does not support texture coordinates or no texture has been loaded");return(!_r.equals(this.viewer.renderer.panoramaPose)||!_r.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(i,Qt),Io(Qt,this.viewer.renderer.sphereCorrection),Io(Qt,this.viewer.renderer.panoramaPose),i=this.vector3ToSphericalCoords(Qt)),this.viewer.adapter.sphericalCoordsToTextureCoords(i,this.state.textureData.panoData)}sphericalCoordsToVector3(i,e,t=gn){return e||(e=new N),e.x=t*-Math.cos(i.pitch)*Math.sin(i.yaw),e.y=t*Math.sin(i.pitch),e.z=t*Math.cos(i.pitch)*Math.cos(i.yaw),e}vector3ToSphericalCoords(i){const e=Math.acos(i.y/Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),t=Math.atan2(i.x,i.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(i){const e=this.viewer.renderer.getIntersections(i).filter(t=>t.object.userData[Zi]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(i){const e=this.viewerCoordsToVector3(i);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(i){const e=i.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(i){return this.sphericalCoordsToVector3(i,Qt),this.vector3ToViewerCoords(Qt)}isPointVisible(i){let e,t;if(i instanceof N)e=i,t=this.vector3ToViewerCoords(i);else if(ll(i))e=this.sphericalCoordsToVector3(i,Qt),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(i){if("yaw"in i||"pitch"in i){if(!("yaw"in i)||!("pitch"in i))throw new he("Position is missing 'yaw' or 'pitch'");return{yaw:oi(i.yaw),pitch:oi(i.pitch,!0)}}else return this.textureCoordsToSphericalCoords(i)}cleanSphereCorrection(i){return{pan:oi(i?.pan||0),tilt:oi(i?.tilt||0,!0),roll:oi(i?.roll||0,!0,!1)}}cleanPanoramaPose(i){return{pan:Be.degToRad(i?.poseHeading||0),tilt:Be.degToRad(i?.posePitch||0),roll:Be.degToRad(i?.poseRoll||0)}}cleanPanoramaOptions(i,e){return e?.isEquirectangular&&(Mt(i.zoom)&&!Mt(e.initialFov)&&(i={...i,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Mt(i.position)&&!Mt(e.initialHeading)&&!Mt(e.initialPitch)&&(i={...i,position:{yaw:oi(e.initialHeading),pitch:oi(e.initialPitch,!0)}})),i}},aE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,oE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,na=class Ou{constructor(){this.$=Ou.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};na.IDLE=0;na.CLICK=1;na.MOVING=2;var mt=na,lE=class extends Gs{constructor(i){super(i),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new mt,this.keyHandler=new Jr,this.resizeObserver=new ResizeObserver(zh(()=>this.viewer.autoSize(),50)),this.moveThreshold=yh*Dt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(fs.type,this),this.viewer.addEventListener(Ms.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(fs.type,this),this.viewer.removeEventListener(Ms.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(i){switch(i.type){case"keydown":this.__onKeyDown(i);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchmove":this.__onTouchMove(i);break;case"touchend":this.__onTouchEnd(i);break;case"fullscreenchange":this.__onFullscreenChange();break;case fs.type:this.__applyMoveDelta();break;case Ms.type:this.__clearMoveDelta();break}if(!Uh(i,"."+Hs))switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"wheel":this.__onMouseWheel(i);break}}__onKeyDown(i){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=i.key===Et.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(yt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Yi(i.key,i))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(rl(i,e)){if(typeof t=="function")t(this.viewer,i);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}i.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(i=>{i==="ZOOM_IN"||i==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(i){this.step.add(mt.CLICK),this.data.startMouseX=i.clientX,this.data.startMouseY=i.clientY,this.config.mousemove&&i.preventDefault()}__onMouseUp(i){this.step.is(mt.CLICK,mt.MOVING)&&this.__stopMove(i.clientX,i.clientY,i,i.button===2)}__onMouseMove(i){this.config.mousemove&&this.step.is(mt.CLICK,mt.MOVING)&&(i.preventDefault(),this.__doMove(i.clientX,i.clientY)),this.__handleObjectsEvents(i)}__onTouchStart(i){i.touches.length===1?(this.step.add(mt.CLICK),this.data.startMouseX=i.touches[0].clientX,this.data.startMouseY=i.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=i.touches[0];this.__stopMove(e.clientX,e.clientY,i,!0),this.data.longtouchTimeout=null},Sh))):i.touches.length===2&&(this.step.set(mt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(i),i.preventDefault()))}__onTouchEnd(i){if(this.__cancelLongTouch(),this.step.is(mt.CLICK,mt.MOVING)){if(i.preventDefault(),this.__cancelTwoFingersOverlay(),i.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(i.touches.length===0){const e=i.changedTouches[0];this.__stopMove(e.clientX,e.clientY,i)}}}__onTouchMove(i){if(this.__cancelLongTouch(),!!this.config.mousemove)if(i.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(mt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:yt.TWO_FINGERS,image:aE,title:this.config.lang.twoFingers})},bh));else if(this.step.is(mt.CLICK,mt.MOVING)){i.preventDefault();const e=i.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(i),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(yt.TWO_FINGERS))}__onMouseWheel(i){if(!this.config.mousewheel||!i.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:yt.CTRL_ZOOM,image:oE,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(yt.CTRL_ZOOM),Th);return}i.preventDefault(),i.stopPropagation();const e=i.deltaY/Math.abs(i.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const i=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(i?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new ps(i))}__resetMove(){this.step.set(mt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(i){this.viewer.stopAll(),this.__resetMove();const e=Ro(i);this.step.set(mt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(i,e,t,n=!1){this.step.is(mt.CLICK)&&!this.__moveThresholdReached(i,e)&&this.__doClick(i,e,t,n),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(i,e,t,n=!1){const s=this.viewer.container.getBoundingClientRect(),r=i-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),c=o.find(l=>l.object.userData[Zi]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),d={rightclick:n,originalEvent:t,target:Ur(t),clientX:i,clientY:e,viewerX:r,viewerY:a,yaw:l.yaw,pitch:l.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[Zi])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new pd(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new cd(d)),this.data.dblclickData=jr(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},wh))}}__handleObjectsEvents(i){if(!Hh(this.state.objectsObservers)&&i.composedPath().includes(this.viewer.container)){const e=Nh(this.viewer.container),t={x:i.clientX-e.x,y:i.clientY-e.y},n=this.viewer.renderer.getIntersections(t),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(i,r,t,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=n.find(c=>c.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,Uo),this.state.objectsObservers[r]=null),a?s(o.object,r,Mu):(this.state.objectsObservers[r]=o.object,s(o.object,r,gu))):a&&(s(a,r,Uo),this.state.objectsObservers[r]=null)}}}__doMove(i,e){if(this.step.is(mt.CLICK)&&this.__moveThresholdReached(i,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(mt.MOVING),this.data.mouseX=i,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(mt.MOVING)){const t=(i-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),n=(e-this.data.mouseY)*Math.cos(this.state.roll)+(i-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*Be.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(n/this.state.size.height)*Be.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=i,this.data.mouseY=e}}__moveThresholdReached(i,e){return Math.abs(i-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(i){if(this.step.is(mt.MOVING)){i.preventDefault();const e=Ro(i);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Dt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};We.enabled=!1;var xr=new Ye,Cc=new tt,Rc=new Qn,cE=class extends Gs{constructor(i){super(i),this.frustumNeedsUpdate=!0,this.renderer=new Sx(this.config.rendererParameters),this.renderer.setPixelRatio(Dt.pixelRatio),this.renderer.outputColorSpace=mn,this.renderer.toneMapping=jc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Ir,this.camera=new Ht(50,16/9,.1,2*gn),this.camera.matrixAutoUpdate=!1;const e=new Gt(new Bs(gn).scale(-1,1,1),new Fs({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Zi]:!0},this.scene.add(e),this.raycaster=new Hm,this.frustum=new el,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(Es.type,this),this.viewer.addEventListener(Ci.type,this),this.viewer.addEventListener(gs.type,this),this.viewer.addEventListener(vs.type,this),this.viewer.addEventListener(Nt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(i=>this.__renderLoop(i))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Es.type,this),this.viewer.removeEventListener(Ci.type,this),this.viewer.removeEventListener(gs.type,this),this.viewer.removeEventListener(vs.type,this),this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(i){switch(i.type){case Es.type:this.__onSizeUpdated();break;case Ci.type:this.__onZoomUpdated();break;case gs.type:this.__onPositionUpdated();break;case vs.type:this.__onPositionUpdated();break;case Nt.type:i.containsOptions("fisheye")&&this.__onPositionUpdated(),i.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(i){i?this.customRenderer=i(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(i){const e=this.timestamp?i-this.timestamp:0;this.timestamp=i,this.viewer.dispatchEvent(new fs(i,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Kd))}setTexture(i){this.meshContainer||(this.meshContainer=new fn,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(i.panoData),this.viewer.adapter.setTexture(this.mesh,i,!1),this.meshContainer.add(this.mesh),this.state.textureData=i,this.viewer.needsUpdate()}setPanoramaPose(i,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(i);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(i,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(i);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(i,e,t){const n=t.effect==="fade"||t.rotation,s=!Mt(e.position),r=!Mt(e.zoom),a=new dl(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new fn,c=this.viewer.adapter.createMesh(i.panoData);if(this.viewer.adapter.setTexture(c,i,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(i.panoData,c),this.setSphereCorrection(e.sphereCorrection,o),s&&!t.rotation){const p=this.viewer.getPosition(),m=new N(0,1,0);o.rotateOnWorldAxis(m,a.position.yaw-p.yaw);const v=new N(0,1,0).cross(this.camera.getWorldDirection(new N)).normalize();o.rotateOnWorldAxis(v,a.position.pitch-p.pitch)}o.add(c),this.scene.add(o),this.renderer.setRenderTarget(new ji),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:l,properties:d}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?a.position:null,n?a.zoomLevel:null),u=new kr({properties:{...d,opacity:{start:0,end:1}},duration:l,easing:"inOutCubic",onTick:p=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?Be.mapLinear(p.opacity,0,.5,1,0):Be.mapLinear(p.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?Be.mapLinear(p.opacity,.5,1,0,1):Be.mapLinear(p.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),r&&!n&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&n&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return u.then(p=>{o.remove(c),this.scene.remove(o),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=i,this.setPanoramaPose(i.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(i),this.viewer.adapter.disposeMesh(c))}),u}getIntersections(i){xr.x=2*i.x/this.state.size.width-1,xr.y=-2*i.y/this.state.size.height+1,this.raycaster.setFromCamera(xr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,xr)),e}isObjectVisible(i){if(!i)return!1;if(this.frustumNeedsUpdate&&(Cc.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Cc),this.frustumNeedsUpdate=!1),i.isVector3)return this.frustum.containsPoint(i);if(i.isMesh&&i.geometry){const e=i;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Rc.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Rc)}else return i.isObject3D?this.frustum.intersectsObject(i):!1}addObject(i){this.scene.add(i)}removeObject(i){this.scene.remove(i)}cleanScene(i){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(n=>{n.value?.dispose?.()}),t.dispose()};i.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>{e(n)}):e(t.material)),t instanceof Ir||t.dispose?.(),t!==i&&this.cleanScene(t)})}},hE=class extends km{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(i,e,t,n){const s=this._abortController.signal,r=super.load(i,c=>{o(),e(c)},t,c=>{if(o(),s.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",n(l)}else n(c)});function a(){r.src=""}function o(){s.removeEventListener("abort",a,!1)}return s.addEventListener("abort",a,!1),r}},dE=class extends Gs{constructor(i){super(i),this.fileLoader=new Fm,this.fileLoader.setResponseType("blob"),this.imageLoader=new hE}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(i,e,t){const n=Fn.get(i,t);if(n){if(n instanceof Blob)return e?.(100),Promise.resolve(n);Fn.remove(i,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(i)),this.fileLoader.setWithCredentials(this.config.withCredentials(i));let s=0;return e?.(s),this.fileLoader.loadAsync(i,r=>{if(r.lengthComputable){const a=r.loaded/r.total*100;a>s&&(s=a,e?.(s))}}).then(r=>(s=100,e?.(s),Fn.add(i,t,r),r))}loadImage(i,e,t){const n=Fn.get(i,t);return n?(e?.(100),n instanceof Blob?this.blobToImage(n):Promise.resolve(n)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(i)),this.imageLoader.loadAsync(i).then(s=>(Fn.add(i,t,s),s))):this.loadFile(i,e,t).then(s=>this.blobToImage(s))}blobToImage(i){return new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{URL.revokeObjectURL(n.src),e(n)},n.onerror=t,n.src=URL.createObjectURL(i)})}preloadPanorama(i){return this.viewer.adapter.supportsPreload(i)?this.viewer.adapter.loadTexture(i,!1):Promise.reject(new he("Current adapter does not support preload"))}dispatchProgress(i){this.viewer.loader.setProgress(i),this.viewer.dispatchEvent(new Ld(Math.round(i)))}},uE=class extends Gs{constructor(i){super(i),this.zoom=new cs(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Ci(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Zh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new gs(e))},{yaw:new cs(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new cs(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new cs(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new vs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Be.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Be.degToRad(this.config.moveSpeed*50))}update(i){this.zoom.update(i),this.position.update(i),this.roll.update(i)}},fE=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new N(0,0,gn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},pE=class extends Qh{constructor(i){if(super(),this.plugins={},this.children=[],this.parent=Dh(i.container),!this.parent)throw new he('"container" element not found.');this.parent[Zi]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),$h(this.parent),qh(this.container,"core"),this.state=new fE,this.config=Zx(i),this.__setSize(this.config.size),this.overlay=new eE(this);try{Dt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}Fn.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new cE(this),this.textureLoader=new dE(this),this.eventsHandler=new lE(this),this.dataHelper=new rE(this),this.dynamics=new uE(this),this.adapter.init?.(),this.loader=new Jx(this),this.navbar=new Kx(this),this.panel=new iE(this),this.notification=new Qx(this),this.autoSize(),this.setCursor(null),ol(Dt.isTouchEnabled,e=>{$r(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[i,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[i];this.children.slice().forEach(i=>i.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[Zi]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new _s)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(i){if(typeof i=="string")return this.plugins[i];{const e=No(i);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Oh(this.parent,Dt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(i){i?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Es(this.getSize())),this.navbar.autoSize())}setPanorama(i,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=i,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const n=r=>{if(Wh(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new zd(i,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Ud(i));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),Po();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!Mt(a.zoom)||!Mt(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Wn(r)),Mt(a.zoom)||this.zoom(a.zoom),Mt(a.position)||this.rotate(a.position)}).then(()=>n(),r=>n(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Wn(r)),this.state.transitionAnimation=this.renderer.transition(r,a,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Vd(r)),!r)throw Po()}).then(()=>n(),r=>n(r)),this.state.loadingPromise}setOptions(i){const e={...this.config,...i};for(let[t,n]of Object.entries(i)){if(!(t in pi)){wt(`Unknown option ${t}`);continue}if(t in Ac){wt(Ac[t]);continue}switch(t in Oo&&(n=Oo[t](n,{rawConfig:e,defValue:pi[t]})),this.config[t]=n,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Ci(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Nt(Object.keys(i)))}setOption(i,e){this.setOptions({[i]:e})}showError(i){this.overlay.show({id:yt.ERROR,image:sE,title:i,dismissible:!1})}hideError(){this.overlay.hide(yt.ERROR)}rotate(i){const e=new ad(this.dataHelper.cleanPosition(i));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(i){this.dynamics.zoom.setValue(i)}zoomIn(i=1){this.dynamics.zoom.step(i)}zoomOut(i=1){this.dynamics.zoom.step(-i)}animate(i){const e=ll(i),t=!Mt(i.zoom),n=new dl(e?this.dataHelper.cleanPosition(i):void 0,i.zoom);if(this.dispatchEvent(n),n.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(i.speed,n.position,n.zoomLevel);return s?(this.state.animation=new kr({properties:r,duration:s,easing:i.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),t&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(n.position),t&&this.zoom(n.zoomLevel),new kr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(i){this.__setSize(i),this.autoSize()}__setSize(i){["width","height"].forEach(e=>{i?.[e]&&(/^[0-9.]+$/.test(i[e])&&(i[e]+="px"),this.parent.style[e]=i[e])})}enterFullscreen(){this.isFullscreenEnabled()||Fh(this.parent,Dt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&kh(Dt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(i){return new nE(this,i)}setCursor(i){this.state.cursorOverride=i,i?this.container.style.cursor=i:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(i){this.state.objectsObservers[i]||(this.state.objectsObservers[i]=null)}unobserveObjects(i){delete this.state.objectsObservers[i]}stopAll(){return this.dispatchEvent(new Ms),this.disableIdleTimer(),this.stopAnimation()}};var mE=Object.defineProperty,gE=(i,e)=>{for(var t in e)mE(i,t,{get:e[t],enumerable:!0})},vE={};gE(vE,{EnterMarkerEvent:()=>qu,GotoMarkerDoneEvent:()=>ko,HideMarkersEvent:()=>ys,LeaveMarkerEvent:()=>Wu,MarkerVisibilityEvent:()=>zu,MarkersPluginEvent:()=>jt,RenderMarkersListEvent:()=>ff,SelectMarkerEvent:()=>Zu,SelectMarkerListEvent:()=>Qu,SetMarkersEvent:()=>lf,ShowMarkersEvent:()=>ws,UnselectMarkerEvent:()=>nf});var jt=class extends vn{},Fu=class ku extends jt{constructor(e,t){super(ku.type),this.marker=e,this.visible=t}};Fu.type="marker-visibility";var zu=Fu,Bu=class Hu extends jt{constructor(e){super(Hu.type),this.marker=e}};Bu.type="goto-marker-done";var ko=Bu,Vu=class Gu extends jt{constructor(e){super(Gu.type),this.marker=e}};Vu.type="leave-marker";var Wu=Vu,Xu=class Yu extends jt{constructor(e){super(Yu.type),this.marker=e}};Xu.type="enter-marker";var qu=Xu,$u=class ju extends jt{constructor(e,t,n){super(ju.type),this.marker=e,this.doubleClick=t,this.rightClick=n}};$u.type="select-marker";var Zu=$u,Ku=class Ju extends jt{constructor(e){super(Ju.type),this.marker=e}};Ku.type="select-marker-list";var Qu=Ku,ef=class tf extends jt{constructor(e){super(tf.type),this.marker=e}};ef.type="unselect-marker";var nf=ef,sf=class rf extends jt{constructor(){super(rf.type)}};sf.type="hide-markers";var ys=sf,af=class of extends jt{constructor(e){super(of.type),this.markers=e}};af.type="set-markers";var lf=af,cf=class hf extends jt{constructor(){super(hf.type)}};cf.type="show-markers";var ws=cf,df=class uf extends jt{constructor(e){super(uf.type),this.markers=e}};df.type="render-markers-list";var ff=df,_E=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Us=class extends At{constructor(i){super(i,{className:"psv-markers-button",icon:_E,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(ws.type,this),this.plugin.addEventListener(ys.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(ws.type,this),this.plugin.removeEventListener(ys.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof ws?this.toggleActive(!0):i instanceof ys&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Us.id="markers";var pf=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Br="http://www.w3.org/2000/svg",ot="psvMarker",xE=se.dasherize(ot),os="marker",kn="markersList",zo={amount:2,duration:100,easing:"linear"},EE=(i,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${pf} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${i.map(t=>`
        <li data-${xE}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,sa=class extends At{constructor(i){super(i,{className:" psv-markers-list-button",icon:pf,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(fe.ShowPanelEvent.type,this),this.viewer.addEventListener(fe.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(fe.ShowPanelEvent.type,this),this.viewer.removeEventListener(fe.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof fe.ShowPanelEvent?this.toggleActive(i.panelId===kn):i instanceof fe.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};sa.id="markersList";var Pc=new N,ME=new Ki,Lc=new N,yE=class extends Ct{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}},ri=new tt,wE=new tt,SE=class{constructor(e={}){const t=this;let n,s,r,a;const o={camera:{style:""},objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const d=document.createElement("div");d.style.transformStyle="preserve-3d",l.appendChild(d),this.getSize=function(){return{width:n,height:s}},this.render=function(f,h){const b=h.projectionMatrix.elements[5]*a;h.view&&h.view.enabled?(l.style.transform=`translate( ${-h.view.offsetX*(n/h.view.width)}px, ${-h.view.offsetY*(s/h.view.height)}px )`,l.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):l.style.transform="",f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let S,E;h.isOrthographicCamera&&(S=-(h.right+h.left)/2,E=(h.top+h.bottom)/2);const C=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,R=h.isOrthographicCamera?`scale( ${C} )scale(`+b+")translate("+u(S)+"px,"+u(E)+"px)"+p(h.matrixWorldInverse):`scale( ${C} )translateZ(`+b+"px)"+p(h.matrixWorldInverse),U=(h.isPerspectiveCamera?"perspective("+b+"px) ":"")+R+"translate("+r+"px,"+a+"px)";o.camera.style!==U&&(d.style.transform=U,o.camera.style=U),_(f,f,h)},this.setSize=function(f,h){n=f,s=h,r=n/2,a=s/2,c.style.width=f+"px",c.style.height=h+"px",l.style.width=f+"px",l.style.height=h+"px",d.style.width=f+"px",d.style.height=h+"px"};function u(f){return Math.abs(f)<1e-10?0:f}function p(f){const h=f.elements;return"matrix3d("+u(h[0])+","+u(-h[1])+","+u(h[2])+","+u(h[3])+","+u(h[4])+","+u(-h[5])+","+u(h[6])+","+u(h[7])+","+u(h[8])+","+u(-h[9])+","+u(h[10])+","+u(h[11])+","+u(h[12])+","+u(-h[13])+","+u(h[14])+","+u(h[15])+")"}function m(f){const h=f.elements;return"translate(-50%,-50%)"+("matrix3d("+u(h[0])+","+u(h[1])+","+u(h[2])+","+u(h[3])+","+u(-h[4])+","+u(-h[5])+","+u(-h[6])+","+u(-h[7])+","+u(h[8])+","+u(h[9])+","+u(h[10])+","+u(h[11])+","+u(h[12])+","+u(h[13])+","+u(h[14])+","+u(h[15])+")")}function v(f){f.isCSS3DObject&&(f.element.style.display="none");for(let h=0,b=f.children.length;h<b;h++)v(f.children[h])}function _(f,h,b,S){if(f.visible===!1){v(f);return}if(f.isCSS3DObject){const E=f.layers.test(b.layers)===!0,C=f.element;if(C.style.display=E===!0?"":"none",E===!0){f.onBeforeRender(t,h,b);let R;f.isCSS3DSprite?(ri.copy(b.matrixWorldInverse),ri.transpose(),f.rotation2D!==0&&ri.multiply(wE.makeRotationZ(f.rotation2D)),f.matrixWorld.decompose(Pc,ME,Lc),ri.setPosition(Pc),ri.scale(Lc),ri.elements[3]=0,ri.elements[7]=0,ri.elements[11]=0,ri.elements[15]=1,R=m(ri)):R=m(f.matrixWorld);const P=o.objects.get(f);if(P===void 0||P.style!==R){C.style.transform=R;const U={style:R};o.objects.set(f,U)}C.parentNode!==d&&d.appendChild(C),f.onAfterRender(t,h,b)}}for(let E=0,C=f.children.length;E<C;E++)_(f.children[E],h,b)}}},bE=class{constructor(i){this.viewer=i,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new SE({element:this.element}),this.scene=new Ir,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const n=t.target[ot];n.config.visible&&(n.viewportIntersection=t.isIntersecting)})},{root:this.element}),i.addEventListener(fe.ReadyEvent.type,this,{once:!0}),i.addEventListener(fe.SizeUpdatedEvent.type,this),i.addEventListener(fe.RenderEvent.type,this)}handleEvent(i){switch(i.type){case fe.ReadyEvent.type:case fe.SizeUpdatedEvent.type:this.updateSize();break;case fe.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(fe.ReadyEvent.type,this),this.viewer.removeEventListener(fe.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(fe.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const i=this.viewer.getSize();this.renderer.setSize(i.width,i.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(i){this.scene.add(i.threeElement),this.intersectionObserver.observe(i.domElement)}removeObject(i){this.scene.remove(i.threeElement),this.intersectionObserver.unobserve(i.domElement)}},Pr=(i=>(i.image="image",i.html="html",i.element="element",i.imageLayer="imageLayer",i.videoLayer="videoLayer",i.elementLayer="elementLayer",i.polygon="polygon",i.polygonPixels="polygonPixels",i.polyline="polyline",i.polylinePixels="polylinePixels",i.square="square",i.rect="rect",i.circle="circle",i.ellipse="ellipse",i.path="path",i))(Pr||{});function Bo(i,e=!1){const t=[];if(Object.keys(Pr).forEach(n=>{i[n]&&t.push(n)}),t.length===0&&!e)throw new he(`missing marker content, either ${Object.keys(Pr).join(", ")}`);if(t.length>1)throw new he(`multiple marker content, either ${Object.keys(Pr).join(", ")}`);return t[0]}var mf=class{constructor(i,e,t){if(this.viewer=i,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new he("missing marker id");this.type=Bo(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(i){const e=Bo(i,!0);if(e!==void 0&&e!==this.type)throw new he(`cannot change marker ${i.id} type`);if(this.config=se.deepmerge(this.config,i),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),se.isNil(this.config.visible)&&(this.config.visible=!0),se.isNil(this.config.zIndex)&&(this.config.zIndex=1),se.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?se.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?se.parseAngle(t.pitch,!0,!1):0,roll:t.roll?se.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:se.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=se.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(i,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const n={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(i||e){const s=se.getPosition(this.viewer.container);n.top=e-s.y+10,n.left=i-s.x,n.box={width:20,height:20}}else n.top=this.state.position2D.y,n.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,a=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,a*=this.config.hoverScale.amount),n.top=s.y-a*this.state.anchor.y+a/2,n.left=s.x-r*this.state.anchor.x+r/2,n.box={width:r,height:a}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,n):this.tooltip.move(n):this.tooltip=this.viewer.createTooltip(n)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},ml=class extends mf{get domElement(){return this.element}constructor(i,e,t){super(i,e,t)}afterCreateElement(){this.element[ot]=this}destroy(){delete this.element[ot],super.destroy()}update(i){super.update(i);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&se.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Hr=class extends ml{constructor(i,e,t){super(i,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:i,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const n=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return n.x-=this.state.size.width*this.state.anchor.x,n.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&n.x+this.state.size.width>=0&&n.x-this.state.size.width<=this.viewer.state.size.width&&n.y+this.state.size.height>=0&&n.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${n.x}px ${n.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:i,mouseover:this===t}),n):null}update(i){if(super.update(i),!se.isExtendedPosition(this.config.position))throw new he(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new he(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||zo:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?Be.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const i=this.domElement,e=!this.state.visible||!this.state.size;if(e&&i.classList.add("psv-marker--transparent"),this.isSvg()){const t=i.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:i.offsetWidth,height:i.offsetHeight};e&&i.classList.remove("psv-marker--transparent"),this.isSvg()&&(i.style.width=this.state.size.width+"px",i.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:i,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let n=1;if(typeof this.config.scale=="function")n=this.config.scale(i,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;n*=s+(r-s)*bi.EASINGS.inQuad(i/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=Be.degToRad(this.viewer.state.hFov)/2,o=Math.abs(se.getShortestArc(this.state.position.yaw,e.yaw));n*=r+(s-r)*bi.EASINGS.outQuad(Math.max(0,(a-o)/a))}}t&&this.config.hoverScale&&(n*=this.config.hoverScale.amount),this.domElement.style.scale=`${n}`}},TE=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,AE=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,CE=class extends Pi{get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}set alpha(i){this.uniforms.alpha.value=i}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(i){this.uniforms.keying.value=i?.enabled===!0,i?.enabled&&(typeof i.color=="object"&&"r"in i.color?this.uniforms.color.value.set(i.color.r/255,i.color.g/255,i.color.b/255):this.uniforms.color.value.set(i.color??65280),this.uniforms.similarity.value=i.similarity??.2,this.uniforms.smoothness.value=i.smoothness??.2)}constructor(i){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:i?.map},repeat:{value:new Ye(1,1)},offset:{value:new Ye(0,0)},alpha:{value:i?.alpha??1},keying:{value:!1},color:{value:new Ze(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:AE,fragmentShader:TE}),this.chromaKey=i?.chromaKey}};function RE({src:i,withCredentials:e,muted:t,autoplay:n}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=n,s.muted=t,s.preload="metadata",i instanceof MediaStream?s.srcObject=i:s.src=i,s}function PE(i,e,t){const[n,s]=i,[r,a]=e,o=se.greatArcDistance(i,e),c=Math.sin((1-t)*o)/Math.sin(o),l=Math.sin(t*o)/Math.sin(o),d=c*Math.cos(s)*Math.cos(n)+l*Math.cos(a)*Math.cos(r),u=c*Math.cos(s)*Math.sin(n)+l*Math.cos(a)*Math.sin(r),p=c*Math.sin(s)+l*Math.sin(a);return[Math.atan2(u,d),Math.atan2(p,Math.sqrt(d*d+u*u))]}function LE(i){const e=[i[0]];let t=0;for(let n=1;n<i.length;n++){const s=i[n-1][0]-i[n][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([i[n][0]+t*2*Math.PI,i[n][1]])}return e}function gf(i){return i.reduce((e,t)=>e.add(t),new N).normalize()}function DE(i){const e=LE(i);let t=0;const n=[];for(let r=0;r<e.length-1;r++){const a=se.greatArcDistance(e[r],e[r+1])*bi.SPHERE_RADIUS;n.push(a),t+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+n[r]>t/2){const a=(t/2-s)/n[r];return PE(e[r],e[r+1],a)}s+=n[r]}return e[Math.round(e.length/2)]}var Er=new N,Dc=new N,ka=new N,Ic=new N,Uc=new N,Nc=new N;function IE(i,e,t){Er.copy(t).normalize(),Dc.crossVectors(i,e).normalize(),ka.crossVectors(Dc,i).normalize(),Ic.copy(i).multiplyScalar(-Er.dot(ka)),Uc.copy(ka).multiplyScalar(Er.dot(i));const n=new N().addVectors(Ic,Uc).normalize();return Nc.crossVectors(n,Er),n.applyAxisAngle(Nc,.01).multiplyScalar(bi.SPHERE_RADIUS)}var UE=class extends mf{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(i,e,t){super(i,e,t)}is3d(){return!0}createElement(){const i=new CE({alpha:0}),e=new zs(1,1),t=new Gt(e,i);t.userData={[ot]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[ot].config.visible},set:function(n){this.userData[ot].config.visible=n}}),this.element=new fn().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[ot],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(i){super.update(i);const e=this.threeMesh,t=e.parent,n=e.material;if(se.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new he(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new he(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const a=new N;return a.fromBufferAttribute(s,r),e.localToWorld(a)})}else{if(this.config.position?.length!==4)throw new he(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(c=>this.viewer.dataHelper.cleanPosition(c))}catch(c){throw new he(`invalid marker ${this.id} position`,c)}const r=s.map(c=>this.viewer.dataHelper.sphericalCoordsToVector3(c)),a=gf(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(a),this.state.positions3D=r;const o=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((c,l)=>{o.setX(l,c.x),o.setY(l,c.y),o.setZ(l,c.z)}),o.needsUpdate=!0,this.__setTextureWrap(n)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){n.map?.dispose();const s=RE({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Lm(s);n.map=r,n.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(n.alpha=this.config.opacity,se.isExtendedPosition(this.config.position)||(e.material.userData[ot]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(n)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else n.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){n.map?.dispose();const s=new St;n.map=s,n.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(se.isExtendedPosition(this.config.position)||(e.material.userData[ot]={width:r.width,height:r.height},this.__setTextureWrap(n)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,n.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else n.alpha=this.config.opacity;break}n.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(i){const e=i.userData[ot];if(!e||!e.height||!e.width){i.repeat.set(1,1),i.offset.set(0,0);return}const t=this.config.position.map(u=>this.viewer.dataHelper.cleanPosition(u)),n=se.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=se.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=se.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),a=se.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),o=(n+s)/(r+a),c=e.width/e.height;let l=0,d=0;o<c?l=c-o:d=1/c-1/o,i.repeat.set(1-l,1-d),i.offset.set(l/2,d/2)}},NE=class extends ml{constructor(i,e,t){super(i,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new yE(this.element),this.object.userData={[ot]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[ot].config.visible},set:function(i){this.userData[ot].config.visible=i}}),this.afterCreateElement()}destroy(){delete this.object.userData[ot],delete this.object,super.destroy()}render({viewerPosition:i,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:i,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(i){if(super.update(i),!se.isExtendedPosition(this.config.position))throw new he(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(n){throw new he(`invalid marker ${this.id} position`,n)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(n=>n.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},OE=class extends Hr{constructor(i,e,t){super(i,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(i){const e=super.render(i);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:i.viewerPosition,zoomLevel:i.zoomLevel,viewerSize:this.viewer.state.size}),e}update(i){super.update(i);const e=this.domElement;if(this.config.image&&!this.config.size)throw new he(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},FE=class extends ml{constructor(i,e,t){super(i,e,t)}createElement(){this.element=document.createElementNS(Br,"path"),this.element[ot]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const i=this.__getAllPolyPositions();if(i[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),n=i.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-t.x},${a.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",n),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(i){super.update(i);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,n])=>{e.setAttributeNS(null,se.dasherize(t),n)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let n=0;n<t.length;n++)t.splice(n,2,[t[n],t[n+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new he("polylines cannot have holes");this.isPixels?this.definition=t.map(n=>n.map(s=>{let r;return se.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(n=>n.map(s=>{let r;return se.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new he(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(n=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:n[0],pitch:n[1]}))),this.isPolygon){const t=gf(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=DE(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(i=>this.__getPolyPositions(i))}__getPolyPositions(i){const e=i.length,t=i.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),n=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(o=>{o.visible&&n.push({visible:o.vector,invisible:s.vector,index:r})})}),n.reverse().forEach(s=>{t.splice(s.index,0,{vector:IE(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},kE=class extends Hr{get svgElement(){return this.domElement.firstElementChild}constructor(i,e,t){super(i,e,t)}isSvg(){return!0}createElement(){const i=this.type==="square"?"rect":this.type,e=document.createElementNS(Br,i);this.element=document.createElementNS(Br,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(i){super.update(i);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,n])=>{e.setAttributeNS(null,t,n)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,n])=>{e.setAttributeNS(null,se.dasherize(t),n)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},zE=se.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(i){return i?(i===!0&&(i=zo),typeof i=="number"&&(i={amount:i}),{...zo,...i}):null}});function BE(i){switch(Bo(i,!1)){case"image":case"html":case"element":return OE;case"imageLayer":case"videoLayer":return UE;case"elementLayer":return NE;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return FE;case"square":case"rect":case"circle":case"ellipse":case"path":return kE;default:throw new he("invalid marker type")}}var Ws=class vf extends ta{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.svgContainer=document.createElementNS(Br,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new bE(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[vf,e]}init(){super.init(),se.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(fe.ClickEvent.type,this),this.viewer.addEventListener(fe.DoubleClickEvent.type,this),this.viewer.addEventListener(fe.RenderEvent.type,this),this.viewer.addEventListener(fe.ConfigChangedEvent.type,this),this.viewer.addEventListener(fe.ObjectEnterEvent.type,this),this.viewer.addEventListener(fe.ObjectHoverEvent.type,this),this.viewer.addEventListener(fe.ObjectLeaveEvent.type,this),this.viewer.addEventListener(fe.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(ot),this.viewer.removeEventListener(fe.ClickEvent.type,this),this.viewer.removeEventListener(fe.DoubleClickEvent.type,this),this.viewer.removeEventListener(fe.RenderEvent.type,this),this.viewer.removeEventListener(fe.ObjectEnterEvent.type,this),this.viewer.removeEventListener(fe.ObjectHoverEvent.type,this),this.viewer.removeEventListener(fe.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(fe.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case fe.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case fe.RenderEvent.type:this.renderMarkers();break;case fe.ClickEvent.type:this.__onClick(e,!1);break;case fe.DoubleClickEvent.type:this.__onClick(e,!0);break;case fe.ObjectEnterEvent.type:case fe.ObjectLeaveEvent.type:case fe.ObjectHoverEvent.type:if(e.userDataKey===ot){const t=e.originalEvent,n=e.object.userData[ot];switch(e.type){case fe.ObjectEnterEvent.type:n.config.style?.cursor?this.viewer.setCursor(n.config.style.cursor):(n.config.tooltip||n.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,n);break;case fe.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(n);break;case fe.ObjectHoverEvent.type:this.__onHoverMarker(t,n);break}}break;case"mouseenter":{const t=this.__getTargetMarker(se.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(se.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(se.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new ws)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new ys)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new he(`marker "${e.id}" already exists`);const n=new(BE(e))(this.viewer,this,e);n.isPoly()?this.svgContainer.appendChild(n.domElement):n.isCss3d()?this.css3DContainer.addObject(n):n.is3d()?this.viewer.renderer.addObject(n.threeElement):this.container.appendChild(n.domElement),this.markers[n.id]=n,this.state.showAllTooltips&&(n.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new he(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const n=this.getMarker(e.id);n.update(e),t&&(this.__afterChangeMarkers(),(n===this.state.hoveringMarker&&n.config.tooltip?.trigger==="hover"||n.state.staticTooltip)&&n.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const n=this.getMarker(e);n.isPoly()?this.svgContainer.removeChild(n.domElement):n.isCss3d()?this.css3DContainer.removeObject(n):n.is3d()?this.viewer.renderer.removeObject(n.threeElement):this.container.removeChild(n.domElement),this.state.hoveringMarker===n&&(this.state.hoveringMarker=null),this.state.currentMarker===n&&(this.state.currentMarker=null),n.destroy(),delete this.markers[n.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(n=>this.removeMarker(n,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(n=>{this.addMarker(n,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const n=this.getMarker(e);return t?this.viewer.animate({...n.state.position,zoom:n.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new ko(n))}):(this.viewer.rotate(n.state.position),se.isNil(n.config.zoomLvl)||this.viewer.zoom(n.config.zoomLvl),this.dispatchEvent(new ko(n)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const n=this.getMarker(e);n.config.visible=se.isNil(t)?!n.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:os,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(os)}toggleMarkersList(){this.viewer.panel.isVisible(kn)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(n=>{n.config.visible&&!n.config.hideList&&e.push(n)});const t=new ff(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:kn,content:EE(e,this.viewer.config.lang[Us.id]),noMargin:!0,clickHandler:n=>{const s=se.getClosest(n,".psv-panel-menu-item"),r=s?s.dataset[ot]:void 0;if(r){const a=this.getMarker(r);this.dispatchEvent(new Qu(a)),this.gotoMarker(a.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(kn)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),n=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,a=!1,o=null;r&&(o=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:n}),r=!!o),a=s.state.visible!==r,s.state.visible=r,s.state.position2D=o,s.domElement&&se.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),a&&(this.dispatchEvent(new zu(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const n=t?se.getClosest(e,".psv-marker"):e;return n?n[ot]:void 0}else return Array.isArray(e)?e.map(n=>n.userData[ot]).filter(n=>!!n).sort((n,s)=>s.config.zIndex-n.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new qu(t)),t instanceof Hr&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new Wu(e)),e instanceof Hr&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const n=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||n;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new nf(this.state.currentMarker)),this.viewer.panel.hide(os),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Zu(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new lf(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(os),this.viewer.panel.hide(kn)):this.viewer.panel.isVisible(kn)?this.showMarkersList():this.viewer.panel.isVisible(os)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(Us.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(sa.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(ot):this.viewer.unobserveObjects(ot)}};Ws.id="markers";Ws.VERSION="5.14.0";Ws.configParser=zE;Ws.readonlyOptions=["markers"];var _f=Ws;pi.lang[Us.id]="Markers";pi.lang[sa.id]="Markers list";ia(Us,"caption:left");ia(sa,"caption:left");var HE=Object.defineProperty,VE=(i,e)=>{for(var t in e)HE(i,t,{get:e[t],enumerable:!0})},GE={};VE(GE,{HideGalleryEvent:()=>bs,ShowGalleryEvent:()=>Ss});var xf=class Ef extends vn{constructor(e){super(Ef.type),this.fullscreen=e}};xf.type="show-gallery";var Ss=xf,Mf=class yf extends vn{constructor(){super(yf.type)}};Mf.type="hide-gallery";var bs=Mf,WE='<svg viewBox="185 115 330 330" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M186.7 326.7V163.3c0-15 8.3-23.3 23.3-23.3h210c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H210c-15 0-23.3-8.3-23.3-23.3zm70 70v-23.4H420c30.2 0 46.7-16.4 46.7-46.6V210H490c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H280c-15 0-23.3-8.3-23.3-23.3zm-23.8-105H397l-40-50.4-26.7 29.7-44.3-54.5zm106.7-76c9.6 0 17.8-7.8 17.8-17.2a18 18 0 0 0-17.8-17.8c-9.4 0-17.2 8.2-17.2 17.8 0 9.4 7.8 17.2 17.2 17.2z"/><!--Created by Wolf Böse from the Noun Project--></svg>',Xs=class extends At{constructor(i){super(i,{className:"psv-gallery-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:WE}),this.plugin=this.viewer.getPlugin("gallery"),this.plugin&&(this.plugin.addEventListener(Ss.type,this),this.plugin.addEventListener(bs.type,this))}destroy(){this.plugin&&(this.plugin.removeEventListener(Ss.type,this),this.plugin.removeEventListener(bs.type,this)),super.destroy()}handleEvent(i){i instanceof Ss?this.toggleActive(!0):i instanceof bs&&this.toggleActive(!1)}isSupported(){return!!this.plugin}onClick(){this.plugin.toggle()}};Xs.id="gallery";var wf="psvGalleryItem",Sf=se.dasherize(wf),Mr="psv-gallery-item--active",XE=(i,e)=>`
${i.map(t=>`
<div class="psv-gallery-item" 
     data-${Sf}="${t.id}"
     style="width:${e.width}px; aspect-ratio:${e.width/e.height};"
     tabindex="0">
    ${t.name?`<div class="psv-gallery-item-title"><span>${t.name}</span></div>`:""}
    <svg class="psv-gallery-item-thumb" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#psvGalleryBlankIcon"></use></svg>
    ${t.thumbnail?`<div class="psv-gallery-item-thumb" data-src="${t.thumbnail}"></div>`:""}
</div>
`).join("")}
`,Oc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 0 50 100"><polygon fill="currentColor" points="24.66 99.31 25.34 100 75.34 50 25.34 0 24.66 0.69 24.66 22.64 52.01 50 24.66 77.36 24.66 99.31"/><!-- Created by Rainbow Designs from the Noun Project --></svg>
`,YE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <symbol id="psvGalleryBlankIcon" viewBox="0 0 200 200">
      <rect x="0" y="0" width="200" height="200" fill="#666"/>
      <g transform="scale(0.25) translate(25 20) " fill="#eee">
        <path d="M376 220.61c-85.84 0-155.39 69.56-155.39 155.39 0 85.84 69.56 155.39 155.39 155.39 85.84 0 155.39-69.56 155.39-155.39 0-85.84-69.56-155.39-155.39-155.39zm0 300.92c-80.41 0-145.53-65.12-145.53-145.53S295.59 230.47 376 230.47 521.53 295.59 521.53 376 456.41 521.53 376 521.53z"/>
        <path d="M467.27 300.03H284.74a18.21 18.21 0 0 0-18.25 18.25v115.43a18.21 18.21 0 0 0 18.25 18.26h182.53a18.21 18.21 0 0 0 18.25-18.26V318.28a18.2 18.2 0 0 0-18.25-18.25zm-190.91 18.25a8.64 8.64 0 0 1 8.39-8.38h182.53a8.64 8.64 0 0 1 8.38 8.38V413l-44.89-35.52c-.49-.5-.99-.5-1.48-.99h-2.46c-.5 0-1 0-1.48.5l-37.5 21.2-43.9-58.7-.5-.5s0-.48-.49-.48c0 0-.49 0-.49-.5-.49 0-.49-.49-.99-.49-.49 0-.49 0-.98-.49H337.53c-.5 0-.5.5-.99.5h-.49l-.5.48s-.48 0-.48.5l-58.7 65.12zM467.27 442.1H284.74a8.64 8.64 0 0 1-8.39-8.38v-15.3l63.15-68.07 42.92 57.22 1.48 1.48h.49c.5.5 1.48.5 1.97.5H388.83l38.47-21.72 46.37 36.5c.5.5 1.49 1 1.98 1v8.88c0 3.95-3.45 7.9-8.38 7.9z"/>
        <path d="M429.77 333.58a13.81 13.81 0 1 1-27.63 0 13.81 13.81 0 0 1 27.63 0"/>
      </g>
    </symbol>
  </defs>
</svg>`;function Fc(i,e){let t;i.addEventListener("mousedown",()=>{e(),clearInterval(t),t=setInterval(()=>{i.style.pointerEvents==="none"?clearInterval(t):e()},500)}),i.addEventListener("mouseup",()=>{clearInterval(t)})}var qE=class extends Li{constructor(i,e){super(e,{className:`psv-gallery ${bi.CAPTURE_EVENTS_CLASS}`}),this.plugin=i,this.state={visible:!0,mousedown:!1,initMouse:null,mouse:null,itemMargin:null,breakpoint:null,scrollLeft:0,scrollTop:0,isAboveBreakpoint:null},this.container.innerHTML=YE,this.container.querySelector("svg").style.display="none";const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=bi.ICONS.close,this.container.appendChild(t),t.addEventListener("click",()=>this.plugin.hide()),this.items=document.createElement("div"),this.items.className="psv-gallery-container",this.container.appendChild(this.items),this.config.navigationArrows&&(this.arrowLeft=document.createElement("div"),this.arrowLeft.className="psv-gallery-arrow",this.arrowLeft.innerHTML=Oc,this.container.appendChild(this.arrowLeft),this.arrowRight=document.createElement("div"),this.arrowRight.className="psv-gallery-arrow",this.arrowRight.innerHTML=Oc,this.container.appendChild(this.arrowRight),Fc(this.arrowLeft,()=>this.__scroll(-1)),Fc(this.arrowRight,()=>this.__scroll(1))),this.state.itemMargin=parseInt(se.getStyleProperty(this.items,"padding-left"),10),this.state.breakpoint=parseInt(se.getStyleProperty(this.container,"--psv-gallery-breakpoint"),10),this.observer=new IntersectionObserver(n=>{n.forEach(s=>{if(s.intersectionRatio>0){const r=s.target;r.style.backgroundImage=`url("${r.dataset.src}")`,delete r.dataset.src,this.observer.unobserve(s.target)}})},{root:this.viewer.container}),this.viewer.addEventListener(fe.SizeUpdatedEvent.type,this),this.container.addEventListener("transitionend",this),this.container.addEventListener("keydown",this),this.items.addEventListener("wheel",this),this.items.addEventListener("scroll",this),this.items.addEventListener("mousedown",this),this.items.addEventListener("mousemove",this),this.items.addEventListener("click",this),window.addEventListener("mouseup",this),this.hide()}get isAboveBreakpoint(){return this.items.offsetWidth>this.state.breakpoint}get config(){return this.plugin.config}destroy(){window.removeEventListener("mouseup",this),this.viewer.removeEventListener(fe.SizeUpdatedEvent.type,this),this.observer.disconnect(),super.destroy()}handleEvent(i){switch(i.type){case"transitionend":this.isVisible()&&i.target===this.container&&this.__focusActiveOrFirst();break;case"keydown":if(this.isVisible())switch(i.key){case bi.KEY_CODES.Escape:this.plugin.hide();break;case bi.KEY_CODES.Enter:this.__click(i);break}break;case"wheel":{const e=i;this.__scroll(e.deltaY>0?1:-1),i.preventDefault();break}case"scroll":case fe.SizeUpdatedEvent.type:this.__updateArrows();break;case"mousedown":this.state.mousedown=!0,this.isAboveBreakpoint?this.state.initMouse=i.clientX:this.state.initMouse=i.clientY,this.state.mouse=this.state.initMouse;break;case"mousemove":if(this.state.mousedown)if(this.isAboveBreakpoint){const e=this.state.mouse-i.clientX;this.items.scrollLeft+=e,this.state.scrollLeft=this.items.scrollLeft,this.state.mouse=i.clientX}else{const e=this.state.mouse-i.clientY;this.items.scrollTop+=e,this.state.scrollTop=this.items.scrollTop,this.state.mouse=i.clientY}break;case"mouseup":this.state.mousedown=!1,this.state.mouse=null,i.preventDefault();break;case"click":{const e=this.isAboveBreakpoint?i.clientX:i.clientY;Math.abs(this.state.initMouse-e)<10&&this.__click(i);break}}}show(){this.container.classList.add("psv-gallery--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-gallery--open"),this.state.visible=!1,se.hasParent(document.activeElement,this.container)&&this.viewer.navbar.focusButton(Xs.id)}setItems(i){this.items.innerHTML=XE(i,this.plugin.config.thumbnailSize),this.observer&&(this.observer.disconnect(),this.items.querySelectorAll("[data-src]").forEach(e=>{this.observer.observe(e)})),this.__updateArrows()}setActive(i){if(this.items.querySelector("."+Mr)?.classList.remove(Mr),i){const t=this.items.querySelector(`[data-${Sf}="${i}"]`);t&&(t.classList.add(Mr),this.items.scrollLeft=t.offsetLeft+t.clientWidth/2-this.items.clientWidth/2)}}__click(i){const e=se.getMatchingTarget(i,".psv-gallery-item");if(!e)return;const t=e.dataset[wf];this.plugin.applyItem(t),this.setActive(t),(this.config.hideOnClick||!this.isAboveBreakpoint)&&this.hide()}__focusActiveOrFirst(){(this.items.querySelector("."+Mr)??this.items.firstElementChild)?.focus()}__scroll(i){if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth,t=this.plugin.config.thumbnailSize.width+(this.state.itemMargin??0);this.state.scrollLeft=Be.clamp(this.state.scrollLeft+i*t,0,e),i===-1&&this.state.scrollLeft<t*.8&&(this.state.scrollLeft=0),i===1&&this.state.scrollLeft>e-t*.8&&(this.state.scrollLeft=e),this.items.scroll({left:this.state.scrollLeft,behavior:"smooth"})}else{const e=this.items.scrollHeight-this.items.offsetHeight,t=this.items.querySelector(":first-child").offsetHeight*2+(this.state.itemMargin??0);this.state.scrollTop=Be.clamp(this.state.scrollTop+i*t,0,e),i===-1&&this.state.scrollTop<t*.8&&(this.state.scrollTop=0),i===1&&this.state.scrollTop>e-t*.8&&(this.state.scrollTop=e),this.items.scroll({top:this.state.scrollTop,behavior:"smooth"})}}__updateArrows(){if(!this.config.navigationArrows)return;this.state.isAboveBreakpoint!==this.isAboveBreakpoint&&(se.toggleClass(this.arrowLeft,"psv-gallery-arrow--left",this.isAboveBreakpoint),se.toggleClass(this.arrowLeft,"psv-gallery-arrow--top",!this.isAboveBreakpoint),se.toggleClass(this.arrowRight,"psv-gallery-arrow--right",this.isAboveBreakpoint),se.toggleClass(this.arrowRight,"psv-gallery-arrow--bottom",!this.isAboveBreakpoint),this.state.isAboveBreakpoint=this.isAboveBreakpoint);const i=(e,t)=>{t?(e.style.opacity="1",e.style.pointerEvents="auto"):(e.style.opacity="0",e.style.pointerEvents="none")};if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth;i(this.arrowLeft,this.items.scrollLeft>50),i(this.arrowRight,this.items.scrollLeft<e-50)}else{const e=this.items.scrollHeight-this.items.offsetHeight;i(this.arrowLeft,this.items.scrollTop>50),i(this.arrowRight,this.items.scrollTop<e-50)}}},$E=se.getConfigParser({items:[],navigationArrows:!0,visibleOnLoad:!1,hideOnClick:!0,thumbnailSize:{width:200,height:100}}),Ys=class bf extends ta{constructor(e,t){super(e,t),this.items=[],this.gallery=new qE(this,this.viewer)}static withConfig(e){return[bf,e]}init(){super.init(),se.checkStylesheet(this.viewer.container,"gallery-plugin"),this.map=this.viewer.getPlugin("map"),this.plan=this.viewer.getPlugin("plan"),this.viewer.addEventListener(fe.PanoramaLoadedEvent.type,this),this.viewer.addEventListener(fe.ShowPanelEvent.type,this),this.config.visibleOnLoad&&this.viewer.addEventListener(fe.ReadyEvent.type,()=>{this.items.length&&this.show()},{once:!0}),this.setItems(this.config.items),delete this.config.items,setTimeout(()=>this.__updateButton())}destroy(){this.viewer.removeEventListener(fe.PanoramaLoadedEvent.type,this),this.viewer.removeEventListener(fe.ShowPanelEvent.type,this),this.gallery.destroy(),super.destroy()}setOptions(e){super.setOptions(e),e.thumbnailSize&&this.gallery.setItems(this.items)}handleEvent(e){if(e instanceof fe.PanoramaLoadedEvent){const t=this.items.find(n=>se.deepEqual(n.panorama,e.data.panorama));this.currentId=t?.id,this.gallery.setActive(this.currentId)}else e instanceof fe.ShowPanelEvent&&this.gallery.isVisible()&&this.hide()}show(){return this.map?.minimize(),this.plan?.minimize(),this.dispatchEvent(new Ss(!this.gallery.isAboveBreakpoint)),this.gallery.show()}hide(){return this.dispatchEvent(new bs),this.gallery.hide()}toggle(){this.gallery.isVisible()?this.hide():this.show()}isVisible(){return this.gallery.isVisible()}setItems(e,t){if(e?e.forEach((n,s)=>{if(!n.id)throw new he(`Item ${s} has no "id".`);if(!n.panorama)throw new he(`Item "${n.id}" has no "panorama".`)}):e=[],this.handler=t,this.items=e.map(n=>({...n,id:`${n.id}`})),this.gallery.setItems(this.items),this.currentId){const n=this.items.find(s=>s.id===this.currentId);this.currentId=n?.id,this.gallery.setActive(this.currentId)}this.items.length||this.gallery.hide(),this.__updateButton()}applyItem(e){if(e!==this.currentId){if(this.handler)this.handler(e);else{const t=this.items.find(n=>n.id===e);this.viewer.setPanorama(t.panorama,{caption:t.name,...t.options})}this.currentId=e}}__updateButton(){this.viewer.navbar.getButton(Xs.id,!1)?.toggle(this.items.length>0)}};Ys.id="gallery";Ys.VERSION="5.14.0";Ys.configParser=$E;Ys.readonlyOptions=["items","navigationArrows","visibleOnLoad"];var Tf=Ys;pi.lang[Xs.id]="Gallery";ia(Xs,"caption:left");var jE=Object.defineProperty,ZE=(i,e)=>{for(var t in e)jE(i,t,{get:e[t],enumerable:!0})},KE={};ZE(KE,{EnterArrowEvent:()=>Df,LeaveArrowEvent:()=>Nf,NodeChangedEvent:()=>Rf});var Af=class Cf extends vn{constructor(e,t){super(Cf.type),this.node=e,this.data=t}};Af.type="node-changed";var Rf=Af,Pf=class Lf extends vn{constructor(e,t){super(Lf.type),this.link=e,this.node=t}};Pf.type="enter-arrow";var Df=Pf,If=class Uf extends vn{constructor(e,t){super(Uf.type),this.link=e,this.node=t}};If.type="leave-arrow";var Nf=If,JE=class extends Ct{constructor(i=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ye(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(i,e){return super.copy(i,e),this.element=i.element.cloneNode(!0),this.center=i.center,this}},Un=new N,kc=new tt,zc=new tt,Bc=new N,Hc=new N,QE=class{constructor(i={}){const e=this;let t,n,s,r;const a={objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.getSize=function(){return{width:t,height:n}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),kc.copy(v.matrixWorldInverse),zc.multiplyMatrices(v.projectionMatrix,kc),l(m,m,v),p(m)},this.setSize=function(m,v){t=m,n=v,s=t/2,r=n/2,o.style.width=m+"px",o.style.height=v+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,_=m.children.length;v<_;v++)c(m.children[v])}function l(m,v,_){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){Un.setFromMatrixPosition(m.matrixWorld),Un.applyMatrix4(zc);const f=Un.z>=-1&&Un.z<=1&&m.layers.test(_.layers)===!0,h=m.element;h.style.display=f===!0?"":"none",f===!0&&(m.onBeforeRender(e,v,_),h.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Un.x*s+s)+"px,"+(-Un.y*r+r)+"px)",h.parentNode!==o&&o.appendChild(h),m.onAfterRender(e,v,_));const b={distanceToCameraSquared:d(_,m)};a.objects.set(m,b)}for(let f=0,h=m.children.length;f<h;f++)l(m.children[f],v,_)}function d(m,v){return Bc.setFromMatrixPosition(m.matrixWorld),Hc.setFromMatrixPosition(v.matrixWorld),Bc.distanceToSquared(Hc)}function u(m){const v=[];return m.traverseVisible(function(_){_.isCSS2DObject&&v.push(_)}),v}function p(m){const v=u(m).sort(function(f,h){if(f.renderOrder!==h.renderOrder)return h.renderOrder-f.renderOrder;const b=a.objects.get(f).distanceToCameraSquared,S=a.objects.get(h).distanceToCameraSquared;return b-S}),_=v.length;for(let f=0,h=v.length;f<h;f++)v[f].element.style.zIndex=_-f}}},Vc=new N,eM=new Ki,Gc=new N,tM=class extends Ct{constructor(i=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(i,e){return super.copy(i,e),this.element=i.element.cloneNode(!0),this}},ai=new tt,iM=new tt,nM=class{constructor(i={}){const e=this;let t,n,s,r;const a={camera:{style:""},objects:new WeakMap},o=i.element!==void 0?i.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",o.appendChild(c);const l=document.createElement("div");l.style.transformStyle="preserve-3d",c.appendChild(l),this.getSize=function(){return{width:t,height:n}},this.render=function(_,f){const h=f.projectionMatrix.elements[5]*r;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(t/f.view.width)}px, ${-f.view.offsetY*(n/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let b,S;f.isOrthographicCamera&&(b=-(f.right+f.left)/2,S=(f.top+f.bottom)/2);const E=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,C=f.isOrthographicCamera?`scale( ${E} )scale(`+h+")translate("+d(b)+"px,"+d(S)+"px)"+u(f.matrixWorldInverse):`scale( ${E} )translateZ(`+h+"px)"+u(f.matrixWorldInverse),P=(f.isPerspectiveCamera?"perspective("+h+"px) ":"")+C+"translate("+s+"px,"+r+"px)";a.camera.style!==P&&(l.style.transform=P,a.camera.style=P),v(_,_,f)},this.setSize=function(_,f){t=_,n=f,s=t/2,r=n/2,o.style.width=_+"px",o.style.height=f+"px",c.style.width=_+"px",c.style.height=f+"px",l.style.width=_+"px",l.style.height=f+"px"};function d(_){return Math.abs(_)<1e-10?0:_}function u(_){const f=_.elements;return"matrix3d("+d(f[0])+","+d(-f[1])+","+d(f[2])+","+d(f[3])+","+d(f[4])+","+d(-f[5])+","+d(f[6])+","+d(f[7])+","+d(f[8])+","+d(-f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(-f[13])+","+d(f[14])+","+d(f[15])+")"}function p(_){const f=_.elements;return"translate(-50%,-50%)"+("matrix3d("+d(f[0])+","+d(f[1])+","+d(f[2])+","+d(f[3])+","+d(-f[4])+","+d(-f[5])+","+d(-f[6])+","+d(-f[7])+","+d(f[8])+","+d(f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(f[13])+","+d(f[14])+","+d(f[15])+")")}function m(_){_.isCSS3DObject&&(_.element.style.display="none");for(let f=0,h=_.children.length;f<h;f++)m(_.children[f])}function v(_,f,h,b){if(_.visible===!1){m(_);return}if(_.isCSS3DObject){const S=_.layers.test(h.layers)===!0,E=_.element;if(E.style.display=S===!0?"":"none",S===!0){_.onBeforeRender(e,f,h);let C;_.isCSS3DSprite?(ai.copy(h.matrixWorldInverse),ai.transpose(),_.rotation2D!==0&&ai.multiply(iM.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(Vc,eM,Gc),ai.setPosition(Vc),ai.scale(Gc),ai.elements[3]=0,ai.elements[7]=0,ai.elements[11]=0,ai.elements[15]=1,C=p(ai)):C=p(_.matrixWorld);const R=a.objects.get(_);if(R===void 0||R.style!==C){E.style.transform=C;const P={style:C};a.objects.set(_,P)}E.parentNode!==l&&l.appendChild(E),_.onAfterRender(e,f,h)}}for(let S=0,E=_.children.length;S<E;S++)v(_.children[S],f,h)}}},sM=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill-rule="even-odd" fill="currentColor" d="
        M50,50 m45,0
        a45,45 0 1,0 -90,0
        a45,45 0 1,0  90,0

        M50,50 m38,0
        a38,38 0 0,1 -76,0
        a38,38 0 0,1  76,0

        M50,50 m30,0
        a30,30 0 1,0 -60,0
        a30,30 0 1,0  60,0
        
        M50,40 m2.5,-2.5
        l17.5,17.5
        a 2.5,2.5 0 0 1 -5,5
        l-15,-15
        l-15,15
        a 2.5,2.5 0 0 1 -5,-5
        l17.5,-17.5
        a 3.5,3.5 0 0 1 5,0
    "/>
</svg>`,Vr="tourLink",Nn="__tour-link__",rM={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},aM={element:()=>{const i=document.createElement("button");return i.className="psv-virtual-tour-arrow",i.innerHTML=sM,i},size:{width:80,height:80}},za="arrow",oM=class extends Li{constructor(i,e){super(i,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new nM({element:this.container}):new QE({element:this.container}),this.camera=this.is3D?new Ht(30,1):null,this.scene=new Ir,this.viewer.addEventListener(fe.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(fe.PositionUpdatedEvent.type,this),this.viewer.addEventListener(fe.SizeUpdatedEvent.type,this),this.viewer.addEventListener(fe.RenderEvent.type,this),this.viewer.addEventListener(fe.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",t=>t.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),this.gallery?.addEventListener("show-gallery",this),this.gallery?.addEventListener("hide-gallery",this))}destroy(){this.viewer.removeEventListener(fe.ReadyEvent.type,this),this.viewer.removeEventListener(fe.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(fe.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(fe.RenderEvent.type,this),this.viewer.removeEventListener(fe.ClickEvent.type,this),this.gallery?.removeEventListener("show-gallery",this),this.gallery?.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(i){switch(i.type){case fe.ReadyEvent.type:case fe.SizeUpdatedEvent.type:case fe.PositionUpdatedEvent.type:this.__updateCamera();break;case fe.RenderEvent.type:this.render();break;case fe.ClickEvent.type:{if(i.data.rightclick)break;const e=this.__getTargetLink(i.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(se.getEventTarget(i));e&&this.plugin.__onEnterArrow(e,i);break}case"mouseleave":{const e=this.__getTargetLink(se.getEventTarget(i));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(se.getEventTarget(i),!0)&&this.plugin.__onHoverArrow(i);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":i.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const i=this.viewer.getSize();if(this.renderer.setSize(i.width,i.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Be.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,i.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(i.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const i=this.viewer.getPosition(),e=[];let t=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(n=>{const s=n.userData[za];if(s.conflict){const r=Math.abs(se.getShortestArc(i.yaw,s.yaw));t=Math.min(t,r),e.push([n,r])}}),e.forEach(([n,s])=>{const r=s!==t;n.element.style.opacity=r?"0.5":null,n.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(i,e){if(e?.image){const t=document.createElement("img");return t.src=e.image,t}else if(e?.element)return typeof e.element=="function"?e.element(i):e.element}addLinkArrow(i,e,t=1){let n=this.__buildArrowElement(i,i.arrowStyle);n||(n=this.__buildArrowElement(i,this.arrowStyle)),n[Vr]=i;const s={...this.arrowStyle,...i.arrowStyle};if(n.classList.add("psv-virtual-tour-link"),s.className&&se.addClasses(n,s.className),s.style&&Object.assign(n.style,s.style),this.is3D){n.style.width=s.size.width*1.5+"px",n.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(o=>{const c=o.userData[za];Math.abs(se.getShortestArc(c.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(c.conflict=!0,r=!0)});const a=new tM(n);a.userData[za]={yaw:e.yaw,conflict:r},a.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},a.position,t*100),this.scene.add(a)}else{n.style.width=s.size.width+"px",n.style.height=s.size.height+"px",n.style.pointerEvents="auto";const r=new JE(n);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(i,e=!1){const t=e?se.getClosest(i,".psv-virtual-tour-link"):i;return t?t[Vr]:void 0}__onToggleGallery(i){i?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},Of=class{constructor(i,e){this.plugin=i,this.viewer=e,this.nodes={}}destroy(){}checkNode(i){if(!i.id)throw new he("No id given for node");if(!i.panorama)throw new he(`No panorama provided for node ${i.id}`);if(this.plugin.isGps&&!(i.gps?.length>=2))throw new he(`No GPS position provided for node ${i.id}`);if(!this.plugin.isGps&&i.markers?.some(e=>e.gps&&!e.position))throw new he("Cannot use GPS positioning for markers in manual mode");i.links||(se.logWarn(`Node ${i.id} has no links`),i.links=[])}checkLink(i,e){if(!e.nodeId)throw new he(`Link of node ${i.id} has no target id`);if(e.nodeId===i.id)throw new he(`Node ${i.id} links to itself`);if(!this.plugin.isGps&&!se.isExtendedPosition(e.position))throw new he(`No position provided for link ${e.nodeId} of node ${i.id}`);if(this.plugin.isGps&&!e.gps)throw new he(`No GPS position provided for link ${e.nodeId} of node ${i.id}`)}},lM=class extends Of{async loadNode(i){if(this.nodes[i])return this.nodes[i];throw new he(`Node ${i} not found`)}setNodes(i){if(!i?.length)throw new he("No nodes provided");const e={},t={};i.forEach(n=>{if(this.checkNode(n),e[n.id])throw new he(`Duplicate node ${n.id}`);e[n.id]=n}),i.forEach(n=>{this.__checkLinks(n,e),n.links.forEach(s=>{t[s.nodeId]=!0})}),i.forEach(n=>{t[n.id]||se.logWarn(`Node ${n.id} is never linked to`)}),this.nodes=e}updateNode(i){if(!i.id)throw new he("No id given for node");const e=this.nodes[i.id];if(!e)throw new he(`Node ${i.id} does not exist`);return Object.assign(e,i),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(i,e){i.links.forEach(t=>{if(!e[t.nodeId])throw new he(`Target node ${t.nodeId} of node ${i.id} does not exists`);t.gps=t.gps||e[t.nodeId].gps,this.checkLink(i,t)})}},cM=class extends Of{constructor(i,e){if(super(i,e),!i.config.getNode)throw new he("Missing getNode() option.");this.nodeResolver=i.config.getNode}async loadNode(i){if(this.nodes[i])return this.nodes[i];{const e=await this.nodeResolver(i);return this.checkNode(e),e.links.forEach(t=>{this.checkLink(e,t)}),this.nodes[i]=e,e}}clearCache(){this.nodes={}}};function Wc(i,e){const t=Xc(i),n=Xc(e),s=i[2]??0,r=e[2]??0;let a=0;return s!==r&&(a=Math.atan((r-s)/hM(t,n))),{yaw:dM(t,n),pitch:a}}function Xc(i){return[Be.degToRad(i[0]),Be.degToRad(i[1])]}function hM(i,e){return se.greatArcDistance(i,e)*6371e3}function dM(i,e){const[t,n]=i,[s,r]=e,a=Math.sin(s-t)*Math.cos(r),o=Math.cos(n)*Math.sin(r)-Math.sin(n)*Math.cos(r)*Math.cos(s-t);return Math.atan2(a,o)}var gl=se.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,arrowStyle:aM,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(i){if(i!=="client"&&i!=="server")throw new he("VirtualTourPlugin: invalid dataMode");return i},positionMode(i){if(i!=="gps"&&i!=="manual")throw new he("VirtualTourPlugin: invalid positionMode");return i},renderMode(i){if(i!=="3d"&&i!=="2d")throw new he("VirtualTourPlugin: invalid renderMode");return i},arrowsPosition(i,{defValue:e}){return{...e,...i}},arrowStyle(i,{defValue:e}){return{...e,...i}},map(i,{rawConfig:e}){if(i){if(e.dataMode==="server")return se.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!i.imageUrl)return se.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null}return i}}),qs=class Ff extends ta{constructor(e,t){super(e,t),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new oM(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}static withConfig(e){return[Ff,e]}init(){super.init(),this.arrowsRenderer.init(),se.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),this.markers?.config.markers&&(se.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&se.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new cM(this,this.viewer):new lM(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),this.plan?.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){this.map?.removeEventListener("select-hotspot",this),this.plan?.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(e){if(e instanceof fe.ClickEvent){const t=e.data.objects.find(n=>n.userData[Vr])?.userData[Vr];t&&this.setCurrentNode(t.nodeId,null,t)}else if(e.type==="select-hotspot"){const t=e.hotspotId;t.startsWith(Nn)&&this.setCurrentNode(t.substring(Nn.length))}}getCurrentNode(){return this.state.currentNode}setNodes(e,t){if(this.isServerSide)throw new he("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(e),t?this.datasource.nodes[t]||(t=e[0].id,se.logWarn(`startNodeId not found is provided nodes, resetted to ${t}`)):t=e[0].id,this.setCurrentNode(t),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(e,t,n){if(e===this.state.currentNode?.id&&!t?.forceUpdate)return Promise.resolve(!0);t?.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=e;const s=this.state.currentNode,r=s&&n?this.__getLinkPosition(s,n):null;return Promise.resolve(this.state.preload[e]).then(()=>{if(this.state.loadingNode!==e)throw se.getAbortError();return this.datasource.loadNode(e)}).then(a=>{if(this.state.loadingNode!==e)throw se.getAbortError();const o={...gl.defaults.transitionOptions,rotateTo:r,zoomTo:r?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(a,s,n):this.config.transitionOptions,...t};return o.effect||(o.effect="none"),this.viewer.panel.hide("description"),this.__hideTooltip(),this.arrowsRenderer.clear(),this.gallery?.config.hideOnClick&&this.gallery.hide(),this.map?.config.minimizeOnHotspotClick&&this.map.minimize(),this.plan?.config.minimizeOnHotspotClick&&this.plan.minimize(),o.rotation&&o.effect==="none"?this.viewer.animate({...o.rotateTo,zoom:o.zoomTo,speed:o.speed}).then(()=>[a,o]):Promise.resolve([a,o])}).then(([a,o])=>{if(this.state.loadingNode!==e)throw se.getAbortError();return this.markers?.clearMarkers(),this.config.linksOnCompass&&this.compass?.clearHotspots(),this.viewer.setPanorama(a.panorama,{caption:a.caption,description:a.description,panoData:a.panoData,sphereCorrection:a.sphereCorrection,showLoader:o.showLoader,position:o.rotateTo,zoom:o.zoomTo,transition:o.effect==="none"?!1:{effect:o.effect,rotation:o.rotation,speed:o.speed}}).then(c=>{if(!c)throw se.getAbortError();return a})}).then(a=>{if(this.state.loadingNode!==e)throw se.getAbortError();return this.state.currentNode=a,this.map&&this.map.setCenter(this.__getNodeMapPosition(a)??this.map.config.center),this.plan?.setCoordinates(a.gps),this.__addNodeMarkers(a),this.__renderLinks(a),this.__preload(a),this.state.loadingNode=null,this.dispatchEvent(new Rf(a,{fromNode:s,fromLink:n,fromLinkPosition:r})),this.viewer.resetIdleTimer(),!0}).catch(a=>{if(se.isAbortError(a))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,a})}async gotoLink(e,t="8rpm"){const n=this.getLinkPosition(e);t?await this.viewer.animate({...n,speed:t}):this.viewer.rotate(n)}getLinkPosition(e){const t=this.state.currentNode?.links.find(n=>n.nodeId===e);if(!t)throw new he(`Cannot find link "${e}"`);return this.__getLinkPosition(this.state.currentNode,t)}updateNode(e){if(this.isServerSide)throw new he("Cannot update node in server side mode");const t=this.datasource.updateNode(e);if((e.name||e.thumbnail||e.panorama)&&this.__setGalleryItems(),(e.name||e.gps||e.map)&&this.__setMapHotspots(),(e.name||e.gps||e.plan)&&this.__setPlanHotspots(),this.state.currentNode?.id===t.id){if(this.__hideTooltip(),e.panorama||e.panoData||e.sphereCorrection){this.setCurrentNode(t.id,{forceUpdate:!0});return}e.caption&&this.viewer.setOption("caption",t.caption),e.description&&this.viewer.setOption("description",t.description),(e.links||e.gps)&&this.__renderLinks(t),e.gps&&this.plan?.setCoordinates(t.gps),(e.map||e.gps)&&this.map?.setCenter(this.__getNodeMapPosition(t)),(e.markers||e.gps)&&this.__addNodeMarkers(t)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).filter(e=>e.showInGallery!==!1).map(e=>({id:e.id,panorama:e.panorama,name:e.name,thumbnail:e.thumbnail})),e=>{this.setCurrentNode(e)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.map!==!1).map(e=>({tooltip:e.name,...e.map||{},...this.__getNodeMapPosition(e),id:Nn+e.id})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).filter(e=>e.plan!==!1).map(e=>({tooltip:e.name,...e.plan||{},coordinates:e.gps,id:Nn+e.id})))}__renderLinks(e){this.arrowsRenderer.clear();const t=[];e.links.forEach(n=>{const s=this.__getLinkPosition(e,n);s.yaw+=n.linkOffset?.yaw??0,s.pitch+=n.linkOffset?.pitch??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),t.push(s),this.arrowsRenderer.addLinkArrow(n,s,n.linkOffset?.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&this.compass?.setHotspots(t)}__getLinkPosition(e,t){return this.isGps?Wc(e.gps,t.gps):this.viewer.dataHelper.cleanPosition(t.position)}async __getTooltipContent(e){const t=await this.datasource.loadNode(e.nodeId),n=[];(t.name||t.thumbnail||t.caption)&&(t.name&&n.push(`<h3>${t.name}</h3>`),t.thumbnail&&n.push(`<img src="${t.thumbnail}">`),t.caption&&n.push(`<p>${t.caption}</p>`));let s=n.join("");return this.config.getLinkTooltip&&(s=this.config.getLinkTooltip(s,e,t)),s}__onEnterArrow(e,t){const n=se.getPosition(this.viewer.container),s={x:t.clientX-n.x,y:t.clientY-n.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...rM,left:s.x,top:s.y,box:{width:20,height:20}}),this.__getTooltipContent(e).then(r=>{r?this.state.currentTooltip.update(r):this.__hideTooltip()})),this.map?.setActiveHotspot(Nn+e.nodeId),this.plan?.setActiveHotspot(Nn+e.nodeId),this.dispatchEvent(new Df(e,this.state.currentNode))}__onHoverArrow(e){const t=se.getPosition(this.viewer.container),n={x:e.clientX-t.x,y:e.clientY-t.y};this.state.currentTooltip?.move({left:n.x,top:n.y})}__onLeaveArrow(e){this.__hideTooltip(),this.map?.setActiveHotspot(null),this.plan?.setActiveHotspot(null),this.dispatchEvent(new Nf(e,this.state.currentNode))}__hideTooltip(){this.state.currentTooltip?.hide(),this.state.currentTooltip=null}__preload(e){this.config.preload&&(this.state.preload[e.id]=!0,this.state.currentNode.links.filter(t=>!this.state.preload[t.nodeId]).filter(t=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,t):!0).forEach(t=>{this.state.preload[t.nodeId]=this.datasource.loadNode(t.nodeId).then(n=>this.viewer.textureLoader.preloadPanorama(n.panorama)).then(()=>{this.state.preload[t.nodeId]=!0}).catch(()=>{delete this.state.preload[t.nodeId]})}))}__addNodeMarkers(e){e.markers&&(this.markers?this.markers.setMarkers(e.markers.map(t=>(t.gps&&this.isGps&&(t.position=Wc(e.gps,t.gps),t.data?.map&&Object.assign(t.data.map,this.__getGpsMapPosition(t.gps)),t.data?.plan&&(t.data.plan.coordinates=t.gps)),t))):se.logWarn(`Node ${e.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(e){const t=this.__getGpsMapPosition(e.gps);return t||(e.map?{x:e.map.x,y:e.map.y}:null)}__getGpsMapPosition(e){const t=this.config.map;return this.isGps&&t&&t.extent&&t.size?{x:Be.mapLinear(e[0],t.extent[0],t.extent[2],0,t.size.width),y:Be.mapLinear(e[1],t.extent[1],t.extent[3],0,t.size.height)}:null}};qs.id="virtual-tour";qs.VERSION="5.14.0";qs.configParser=gl;qs.readonlyOptions=Object.keys(gl.defaults);var kf=qs;const Gr="https://photo-sphere-viewer-data.netlify.app/assets/",uM="./".endsWith("/")?"./":".//",jn=i=>`${uM}${i.replace(/^\//,"")}`,zf=typeof window<"u"?window.matchMedia("(max-width: 768px)"):null,fM={width:180,height:110},pM={width:200,height:100},Bf=()=>zf?.matches??!1,Hf=()=>Bf()?pM:fM,vl=["salavista1.jpg","salavista2.jpg","sala1.jpg","sala2.jpg","sala3.jpg","sala4.jpg","antesala.jpg","banheiroantesala.jpg","corredor1.jpg","corredor2.jpg","corredor3.jpg","quarto1.jpg","quarto1vista.jpg","banheiromeio.jpg","quarto2.jpg","quarto2vista.jpg","quarto3.jpg","quarto3vista.jpg","banheiroquarto3.jpg","cozinha1.jpg","cozinha2.jpg","cozinha3.jpg","banheiroempregada.jpg","empregadaquarto1.jpg","empregadaquarto2.jpg"],mM={"salavista1.jpg":"Sala - Vista 1","salavista2.jpg":"Sala  Vista 2","sala1.jpg":"Sala Ambiente 1","sala2.jpg":"Sala Ambiente 2","sala3.jpg":"Sala Ambiente 3","sala4.jpg":"Sala Ambiente 4","antesala.jpg":"Antesala","banheiroantesala.jpg":"Banheiro da Antesala","corredor1.jpg":"Corredor 1","corredor2.jpg":"Corredor 2","corredor3.jpg":"Corredor 3","quarto1.jpg":"Quarto 1","quarto1vista.jpg":"Quarto 1 - Vista","banheiromeio.jpg":"Banheiro Social","quarto2.jpg":"Quarto 2","quarto2vista.jpg":"Quarto 2 - Vista","quarto3.jpg":"Quarto 3","quarto3vista.jpg":"Quarto 3 - Vista","banheiroquarto3.jpg":"Banheiro da Suíte 3","cozinha1.jpg":"Cozinha 1","cozinha2.jpg":"Cozinha 2","cozinha3.jpg":"Cozinha 3","banheiroempregada.jpg":"Banheiro de Serviço","empregadaquarto1.jpg":"Quarto de Serviço 1","empregadaquarto2.jpg":"Quarto de Serviço 2"},gM=i=>i.replace(/\.(jpg|png)$/i,"").replace(/[-_]/g," ").replace(/([a-z])([0-9])/gi,"$1 $2").replace(/([0-9])([a-z])/gi,"$1 $2").replace(/\b\w/g,t=>t.toUpperCase()),Ns={};vl.forEach(i=>{Ns[i]||(Ns[i]=[])});const Vf=new Set([...vl,"seta.png"]),Ho=[],Gf=i=>{Ho.includes(i)||Ho.push(i)};vl.forEach(Gf);Object.keys(Ns).forEach(Gf);const zi=Ho.map(i=>{const e=Vf.has(i),t=e?jn(i):Gr+i,n=jn(i.replace(/\.jpg$|\.png$/i,".jpg")),s=Gr+i.replace(/\.jpg$|\.png$/i,".jpg"),r=e?n:s,a=mM[i]??gM(i);return{id:i.replace(/\W+/g,"-"),file:i,name:a,panorama:t,thumbnail:r}}),ra=zi.map((i,e)=>{const t=zi[(e-1+zi.length)%zi.length],n=zi[(e+1)%zi.length],s=[];return zi.length>1&&(s.push({nodeId:n.id,position:{yaw:Math.PI,pitch:0},arrowStyle:{className:"tour-arrow-next"}}),e!==0&&s.push({nodeId:t.id,position:{yaw:0,pitch:0},arrowStyle:{className:"tour-arrow-prev"}})),{id:i.id,name:i.name,caption:i.name,panorama:i.panorama,thumbnail:i.thumbnail,markers:Ns[i.file]||[],data:{file:i.file},links:s}}),Wr=new Map(ra.map(i=>[i.id,i])),Ts=ra[0]?.id,vM=Ts?Wr.get(Ts)?.panorama??jn("salavista1.jpg"):jn("salavista1.jpg"),Ti=new pE({container:"viewer",panorama:vM,caption:"Parc national du Mercantour <b>&copy; Damien Sorel</b>",loadingImg:Gr+"loader.gif",touchmoveTwoFingers:!1,defaultZoomLvl:0,mousewheelCtrlKey:!1,navbar:["zoom","gallery","fullscreen"],plugins:[_f,Tf.withConfig({visibleOnLoad:!0,hideOnClick:!1,thumbnailSize:Hf(),items:zi,navigationArrows:!0}),kf.withConfig({transitionOptions:()=>({effect:"fade",rotation:!1,rotateTo:null,zoomTo:null})})]}),Yc=Ti.getPlugin(_f),Wf=Ti.getPlugin(Tf),Zn=Ti.getPlugin(kf),Xf=i=>{if(!i||!Yc||Zn)return;const e=Ns[i]||[];Yc.setMarkers(e)},$s=()=>{Bf()&&Ti.zoom(0)},Yf=()=>{Wf.setOptions({thumbnailSize:Hf()})};zf?.addEventListener("change",()=>{Yf(),$s()});Yf();$s();Zn?.addEventListener("node-changed",()=>{$s()});let Vo=!1;function _M(i){if(i)return Wr.has(i)?Wr.get(i):ra.find(e=>e.panorama===i||e.data?.file===i)}function xM(i){if(!i)return;const e=_M(i);if(Zn&&e){Zn.setCurrentNode(e.id).catch(a=>{console.error("VirtualTour setCurrentNode error:",a)});return}const t=e?.data?.file??i;let n,s;t.startsWith("http")?(n=t,s=t):t.startsWith("/")?(n=t.replace(/^\//,""),s=jn(n)):(n=t,s=Vf.has(n)?jn(n):Gr+n);const r=()=>{Xf(n),$s(),Ti.removeEventListener("panorama-loaded",r)};Ti.addEventListener("panorama-loaded",r),Ti.setPanorama(s,{zoom:0,transition:{duration:1e3,loader:!0}}).catch(a=>{Ti.removeEventListener("panorama-loaded",r),console.error("setPanorama error:",a)})}Wf.addEventListener("select",({item:i})=>{const e=i?.id??i?.panorama;e&&xM(e),setTimeout(()=>{if(Vo)return;const t=document.querySelector(".psv-gallery");t&&(t.classList.add("psv-gallery--open"),t.setAttribute("aria-hidden","false"),t.style.display==="none"&&(t.style.display=""))},0)});document.addEventListener("click",i=>{const e=i.target;if(!e||!e.closest(".psv-gallery-button"))return;const n=document.querySelector(".psv-gallery");n&&(Vo=!0,setTimeout(()=>Vo=!1,200),n.classList.contains("psv-gallery--open")?(n.classList.remove("psv-gallery--open"),n.setAttribute("aria-hidden","true"),n.style.display="none"):(n.classList.add("psv-gallery--open"),n.setAttribute("aria-hidden","false"),n.style.display=""))});Ti.addEventListener("ready",()=>{if(Zn)try{Zn.setNodes(ra,Ts)}catch(i){console.error("VirtualTour setNodes error:",i)}else Ts&&Xf(Wr.get(Ts)?.data?.file);$s()});
