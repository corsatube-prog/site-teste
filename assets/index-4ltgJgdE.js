(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Lo="179",Ef=0,ul=1,Mf=2,Tc=1,yf=2,yn=3,Yn=0,It=1,Sn=2,zn=0,Oi=1,fl=2,pl=3,ml=4,Sf=5,oi=100,wf=101,bf=102,Tf=103,Af=104,Cf=200,Rf=201,Pf=202,Lf=203,Aa=204,Ca=205,Df=206,If=207,Uf=208,Nf=209,Of=210,Ff=211,kf=212,Bf=213,zf=214,Ra=0,Pa=1,La=2,zi=3,Da=4,Ia=5,Ua=6,Na=7,Ac=0,Hf=1,Vf=2,Hn=0,Cc=1,Gf=2,Wf=3,Xf=4,Yf=5,qf=6,jf=7,Rc=300,Hi=301,Vi=302,Oa=303,Fa=304,Ir=306,ka=1e3,ci=1001,Ba=1002,nn=1003,$f=1004,Vs=1005,Ht=1006,Zr=1007,kn=1008,Cn=1009,Pc=1010,Lc=1011,xs=1012,Do=1013,di=1014,wn=1015,Rs=1016,Io=1017,Uo=1018,Es=1020,Dc=35902,Ic=1021,Uc=1022,tn=1023,Ms=1026,ys=1027,Nc=1028,No=1029,Oc=1030,Oo=1031,Fo=1033,fr=33776,pr=33777,mr=33778,gr=33779,za=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,Ya=37496,qa=37808,ja=37809,$a=37810,Za=37811,Ka=37812,Ja=37813,Qa=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,vr=36492,oo=36494,lo=36495,Fc=36283,co=36284,ho=36285,uo=36286,Zf=3200,Kf=3201,Jf=0,Qf=1,Fn="",qt="srgb",ui="srgb-linear",yr="linear",Je="srgb",gi=7680,gl=519,ep=512,tp=513,np=514,kc=515,ip=516,sp=517,rp=518,ap=519,vl=35044,_l="300 es",cn=2e3,Sr=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const is=Math.PI/180,Ss=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function He(n,e,t){return Math.max(e,Math.min(t,n))}function ko(n,e){return(n%e+e)%e}function op(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function lp(n,e,t){return n!==e?(t-n)/(e-n):0}function ss(n,e,t){return(1-t)*n+t*e}function cp(n,e,t,i){return ss(n,e,1-Math.exp(-t*i))}function hp(n,e=1){return e-Math.abs(ko(n,e*2)-e)}function dp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function up(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function fp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function pp(n,e){return n+Math.random()*(e-n)}function mp(n){return n*(.5-Math.random())}function gp(n){n!==void 0&&(xl=n);let e=xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vp(n){return n*is}function _p(n){return n*Ss}function xp(n){return(n&n-1)===0&&n!==0}function Ep(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Mp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yp(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),p=a((e-i)/2),m=r((i-e)/2),x=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*p,o*l);break;case"YZY":n.set(c*p,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*p,o*h,o*l);break;case"XZX":n.set(o*h,c*x,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*x,o*l);break;case"ZYZ":n.set(c*x,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const We={DEG2RAD:is,RAD2DEG:Ss,generateUUID:Xi,clamp:He,euclideanModulo:ko,mapLinear:op,inverseLerp:lp,lerp:ss,damp:cp,pingpong:hp,smoothstep:dp,smootherstep:up,randInt:fp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:vp,radToDeg:_p,isPowerOfTwo:xp,ceilPowerOfTwo:Ep,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:yp,normalize:Rt,denormalize:Li};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const p=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==p||l!==m||h!==x){let f=1-o;const d=c*p+l*m+h*x+u*_,A=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const C=Math.sqrt(w),P=Math.atan2(C,d*A);f=Math.sin(f*P)/C,o=Math.sin(o*P)/C}const E=o*A;if(c=c*f+p*E,l=l*f+m*E,h=h*f+x*E,u=u*f+_*E,f===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],p=r[a+1],m=r[a+2],x=r[a+3];return e[t]=o*x+h*u+c*m-l*p,e[t+1]=c*x+h*p+l*u-o*m,e[t+2]=l*x+h*m+o*p-c*u,e[t+3]=h*x-o*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),p=c(i/2),m=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=p*h*u+l*m*x,this._y=l*m*u-p*h*x,this._z=l*h*x+p*m*u,this._w=l*h*u-p*m*x;break;case"YXZ":this._x=p*h*u+l*m*x,this._y=l*m*u-p*h*x,this._z=l*h*x-p*m*u,this._w=l*h*u+p*m*x;break;case"ZXY":this._x=p*h*u-l*m*x,this._y=l*m*u+p*h*x,this._z=l*h*x+p*m*u,this._w=l*h*u-p*m*x;break;case"ZYX":this._x=p*h*u-l*m*x,this._y=l*m*u+p*h*x,this._z=l*h*x-p*m*u,this._w=l*h*u+p*m*x;break;case"YZX":this._x=p*h*u+l*m*x,this._y=l*m*u+p*h*x,this._z=l*h*x-p*m*u,this._w=l*h*u-p*m*x;break;case"XZY":this._x=p*h*u-l*m*x,this._y=l*m*u-p*h*x,this._z=l*h*x+p*m*u,this._w=l*h*u+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=i+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new U,El=new pi;class Oe{constructor(e,t,i,s,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],p=i[2],m=i[5],x=i[8],_=s[0],f=s[3],d=s[6],A=s[1],w=s[4],E=s[7],C=s[2],P=s[5],R=s[8];return r[0]=a*_+o*A+c*C,r[3]=a*f+o*w+c*P,r[6]=a*d+o*E+c*R,r[1]=l*_+h*A+u*C,r[4]=l*f+h*w+u*P,r[7]=l*d+h*E+u*R,r[2]=p*_+m*A+x*C,r[5]=p*f+m*w+x*P,r[8]=p*d+m*E+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,p=o*c-h*r,m=l*r-a*c,x=t*u+i*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Oe;function Bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sp(){const n=ws("canvas");return n.style.display="block",n}const Ml={};function Fi(n){n in Ml||(Ml[n]=!0,console.warn(n))}function wp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const yl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bp(){const n={enabled:!0,workingColorSpace:ui,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?yr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ui]:{primaries:e,whitePoint:i,transfer:yr,toXYZ:yl,fromXYZ:Sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:yl,fromXYZ:Sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const Ge=bp();function Tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vi;class Tp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vi===void 0&&(vi=ws("canvas")),vi.width=e.width,vi.height=e.height;const s=vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ap=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qr(s[a].image)):r.push(Qr(s[a]))}else r=Qr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Tp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cp=0;const ea=new U;class wt extends Wi{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=ci,s=ci,r=Ht,a=kn,o=tn,c=Cn,l=wt.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Xi(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Rc;wt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],x=c[9],_=c[2],f=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(x+f)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(m+1)/2,C=(d+1)/2,P=(h+p)/4,R=(u+_)/4,N=(x+f)/4;return w>E&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=P/i,r=R/i):E>C?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=P/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=N/r),this.set(i,s,r,t),this}let A=Math.sqrt((f-x)*(f-x)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(A)<.001&&(A=1),this.x=(f-x)/A,this.y=(u-_)/A,this.z=(p-h)/A,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends Wi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new wt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Rp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zc extends wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pp extends wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Ws.subVectors(this.max,$i),_i.subVectors(e.a,$i),xi.subVectors(e.b,$i),Ei.subVectors(e.c,$i),Pn.subVectors(xi,_i),Ln.subVectors(Ei,xi),Qn.subVectors(_i,Ei);let t=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Qn.z,Qn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Qn.z,0,-Qn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Qn.y,Qn.x,0];return!ta(t,_i,xi,Ei,Ws)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,_i,xi,Ei,Ws))?!1:(Xs.crossVectors(Pn,Ln),t=[Xs.x,Xs.y,Xs.z],ta(t,_i,xi,Ei,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gn=[new U,new U,new U,new U,new U,new U,new U,new U],Zt=new U,Gs=new Yi,_i=new U,xi=new U,Ei=new U,Pn=new U,Ln=new U,Qn=new U,$i=new U,Ws=new U,Xs=new U,ei=new U;function ta(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ei.fromArray(n,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),h=i.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Lp=new Yi,Zi=new U,na=new U;class zo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(na)),this.expandByPoint(Zi.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vn=new U,ia=new U,Ys=new U,Dn=new U,sa=new U,qs=new U,ra=new U;class Hc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ia.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Dn.dot(this.direction),c=-Dn.dot(Ys),l=Dn.lengthSq(),h=Math.abs(1-a*a);let u,p,m,x;if(h>0)if(u=a*c-o,p=a*o-c,x=r*h,u>=0)if(p>=-x)if(p<=x){const _=1/h;u*=_,p*=_,m=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p<=-x?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=x?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(Ys,p),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),s=vn.dot(vn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,s,r){sa.subVectors(t,e),qs.subVectors(i,e),ra.crossVectors(sa,qs);let a=this.direction.dot(ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(qs.crossVectors(Dn,qs));if(c<0)return null;const l=o*this.direction.dot(sa.cross(Dn));if(l<0||c+l>a)return null;const h=-o*Dn.dot(ra);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,a,o,c,l,h,u,p,m,x,_,f){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,p,m,x,_,f)}set(e,t,i,s,r,a,o,c,l,h,u,p,m,x,_,f){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=p,d[3]=m,d[7]=x,d[11]=_,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=a*h,m=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+x*l,t[5]=p-_*l,t[9]=-o*c,t[2]=_-p*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*u,x=l*h,_=l*u;t[0]=p+_*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-x,t[6]=_+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*u,x=l*h,_=l*u;t[0]=p-_*o,t[4]=-a*u,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*h,t[9]=_-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*u,x=o*h,_=o*u;t[0]=c*h,t[4]=x*l-m,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=_-p*u,t[8]=x*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+x,t[10]=p-_*u}else if(e.order==="XZY"){const p=a*c,m=a*l,x=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=a*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=o*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,Ip)}lookAt(e,t,i){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),In.crossVectors(i,kt),In.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),In.crossVectors(i,kt)),In.normalize(),js.crossVectors(kt,In),s[0]=In.x,s[4]=js.x,s[8]=kt.x,s[1]=In.y,s[5]=js.y,s[9]=kt.y,s[2]=In.z,s[6]=js.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],p=i[9],m=i[13],x=i[2],_=i[6],f=i[10],d=i[14],A=i[3],w=i[7],E=i[11],C=i[15],P=s[0],R=s[4],N=s[8],y=s[12],M=s[1],b=s[5],W=s[9],H=s[13],X=s[2],j=s[6],Y=s[10],$=s[14],B=s[3],re=s[7],he=s[11],Me=s[15];return r[0]=a*P+o*M+c*X+l*B,r[4]=a*R+o*b+c*j+l*re,r[8]=a*N+o*W+c*Y+l*he,r[12]=a*y+o*H+c*$+l*Me,r[1]=h*P+u*M+p*X+m*B,r[5]=h*R+u*b+p*j+m*re,r[9]=h*N+u*W+p*Y+m*he,r[13]=h*y+u*H+p*$+m*Me,r[2]=x*P+_*M+f*X+d*B,r[6]=x*R+_*b+f*j+d*re,r[10]=x*N+_*W+f*Y+d*he,r[14]=x*y+_*H+f*$+d*Me,r[3]=A*P+w*M+E*X+C*B,r[7]=A*R+w*b+E*j+C*re,r[11]=A*N+w*W+E*Y+C*he,r[15]=A*y+w*H+E*$+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],m=e[14],x=e[3],_=e[7],f=e[11],d=e[15];return x*(+r*c*u-s*l*u-r*o*p+i*l*p+s*o*m-i*c*m)+_*(+t*c*m-t*l*p+r*a*p-s*a*m+s*l*h-r*c*h)+f*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+d*(-s*o*h-t*c*u+t*o*p+s*a*u-i*a*p+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],m=e[11],x=e[12],_=e[13],f=e[14],d=e[15],A=u*f*l-_*p*l+_*c*m-o*f*m-u*c*d+o*p*d,w=x*p*l-h*f*l-x*c*m+a*f*m+h*c*d-a*p*d,E=h*_*l-x*u*l+x*o*m-a*_*m-h*o*d+a*u*d,C=x*u*c-h*_*c-x*o*p+a*_*p+h*o*f-a*u*f,P=t*A+i*w+s*E+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(_*p*r-u*f*r-_*s*m+i*f*m+u*s*d-i*p*d)*R,e[2]=(o*f*r-_*c*r+_*s*l-i*f*l-o*s*d+i*c*d)*R,e[3]=(u*c*r-o*p*r-u*s*l+i*p*l+o*s*m-i*c*m)*R,e[4]=w*R,e[5]=(h*f*r-x*p*r+x*s*m-t*f*m-h*s*d+t*p*d)*R,e[6]=(x*c*r-a*f*r-x*s*l+t*f*l+a*s*d-t*c*d)*R,e[7]=(a*p*r-h*c*r+h*s*l-t*p*l-a*s*m+t*c*m)*R,e[8]=E*R,e[9]=(x*u*r-h*_*r-x*i*m+t*_*m+h*i*d-t*u*d)*R,e[10]=(a*_*r-x*o*r+x*i*l-t*_*l-a*i*d+t*o*d)*R,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*R,e[12]=C*R,e[13]=(h*_*s-x*u*s+x*i*p-t*_*p-h*i*f+t*u*f)*R,e[14]=(x*o*s-a*_*s-x*i*c+t*_*c+a*i*f-t*o*f)*R,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*p+t*o*p)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,p=r*l,m=r*h,x=r*u,_=a*h,f=a*u,d=o*u,A=c*l,w=c*h,E=c*u,C=i.x,P=i.y,R=i.z;return s[0]=(1-(_+d))*C,s[1]=(m+E)*C,s[2]=(x-w)*C,s[3]=0,s[4]=(m-E)*P,s[5]=(1-(p+d))*P,s[6]=(f+A)*P,s[7]=0,s[8]=(x+w)*R,s[9]=(f-A)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const l=1/r,h=1/a,u=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=h,Kt.elements[5]*=h,Kt.elements[6]*=h,Kt.elements[8]*=u,Kt.elements[9]*=u,Kt.elements[10]*=u,t.setFromRotationMatrix(Kt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=cn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s);let x,_;if(c)x=r/(a-r),_=a*r/(a-r);else if(o===cn)x=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Sr)x=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=cn,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-s),p=-(t+e)/(t-e),m=-(i+s)/(i-s);let x,_;if(c)x=1/(a-r),_=a/(a-r);else if(o===cn)x=-2/(a-r),_=-(a+r)/(a-r);else if(o===Sr)x=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mi=new U,Kt=new ct,Dp=new U(0,0,0),Ip=new U(1,1,1),In=new U,js=new U,kt=new U,wl=new ct,bl=new pi;class fn{constructor(e=0,t=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Up=0;const Tl=new U,yi=new pi,_n=new ct,$s=new U,Ki=new U,Np=new U,Op=new pi,Al=new U(1,0,0),Cl=new U(0,1,0),Rl=new U(0,0,1),Pl={type:"added"},Fp={type:"removed"},Si={type:"childadded",child:null},aa={type:"childremoved",child:null};class Ut extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new U,t=new fn,i=new pi,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Oe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ki,$s,this.up):_n.lookAt($s,Ki,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(_n),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new U(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new U,xn=new U,oa=new U,En=new U,wi=new U,bi=new U,Ll=new U,la=new U,ca=new U,ha=new U,da=new ft,ua=new ft,fa=new ft;class en{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Jt.subVectors(s,t),xn.subVectors(i,t),oa.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(xn),c=Jt.dot(oa),l=xn.dot(xn),h=xn.dot(oa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(l*c-o*h)*p,x=(a*h-o*c)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return da.setScalar(0),ua.setScalar(0),fa.setScalar(0),da.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,i),fa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(da,r.x),a.addScaledVector(ua,r.y),a.addScaledVector(fa,r.z),a}static isFrontFacing(e,t,i,s){return Jt.subVectors(i,t),xn.subVectors(e,t),Jt.cross(xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,i),bi.subVectors(r,i),la.subVectors(e,i);const c=wi.dot(la),l=bi.dot(la);if(c<=0&&l<=0)return t.copy(i);ca.subVectors(e,s);const h=wi.dot(ca),u=bi.dot(ca);if(h>=0&&u<=h)return t.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(wi,a);ha.subVectors(e,r);const m=wi.dot(ha),x=bi.dot(ha);if(x>=0&&m<=x)return t.copy(r);const _=m*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(bi,o);const f=h*x-m*u;if(f<=0&&u-h>=0&&m-x>=0)return Ll.subVectors(r,s),o=(u-h)/(u-h+(m-x)),t.copy(s).addScaledVector(Ll,o);const d=1/(f+_+p);return a=_*d,o=p*d,t.copy(i).addScaledVector(wi,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ge.workingColorSpace){if(e=ko(e,1),t=He(t,0,1),i=He(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=pa(a,r,e+1/3),this.g=pa(a,r,e),this.b=pa(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=Vc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ge.workingToColorSpace(Tt.copy(this),e),Math.round(He(Tt.r*255,0,255))*65536+Math.round(He(Tt.g*255,0,255))*256+Math.round(He(Tt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Tt.copy(this),t);const i=Tt.r,s=Tt.g,r=Tt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=qt){Ge.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,i=Tt.g,s=Tt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Zs);const i=ss(Un.h,Zs.h,t),s=ss(Un.s,Zs.s,t),r=ss(Un.l,Zs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ze;Ze.NAMES=Vc;let kp=0;class Ur extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Oi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ca,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ca&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ps extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new U,Ks=new qe;let Bp=0;class dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class Gc extends dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wc extends dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let zp=0;const Xt=new ct,ma=new Ut,Ti=new U,Bt=new Yi,Ji=new Yi,xt=new U;class $n extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Wc:Gc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Bt.min,Ji.min),Bt.expandByPoint(xt),xt.addVectors(Bt.max,Ji.max),Bt.expandByPoint(xt)):(Bt.expandByPoint(Ji.min),Bt.expandByPoint(Ji.max))}Bt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xt.fromBufferAttribute(o,l),c&&(Ti.fromBufferAttribute(e,l),xt.add(Ti)),s=Math.max(s,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new U,c[N]=new U;const l=new U,h=new U,u=new U,p=new qe,m=new qe,x=new qe,_=new U,f=new U;function d(N,y,M){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,y),x.fromBufferAttribute(r,M),h.sub(l),u.sub(l),m.sub(p),x.sub(p);const b=1/(m.x*x.y-x.x*m.y);isFinite(b)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(b),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(b),o[N].add(_),o[y].add(_),o[M].add(_),c[N].add(f),c[y].add(f),c[M].add(f))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,y=A.length;N<y;++N){const M=A[N],b=M.start,W=M.count;for(let H=b,X=b+W;H<X;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new U,E=new U,C=new U,P=new U;function R(N){C.fromBufferAttribute(s,N),P.copy(C);const y=o[N];w.copy(y),w.sub(C.multiplyScalar(C.dot(y))).normalize(),E.crossVectors(P,y);const b=E.dot(c[N])<0?-1:1;a.setXYZW(N,w.x,w.y,w.z,b)}for(let N=0,y=A.length;N<y;++N){const M=A[N],b=M.start,W=M.count;for(let H=b,X=b+W;H<X;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let p=0,m=e.count;p<m;p+=3){const x=e.getX(p+0),_=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,f),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h);let m=0,x=0;for(let _=0,f=c.length;_<f;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let d=0;d<h;d++)p[x++]=l[m++]}return new dn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=e(p,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new ct,ti=new Hc,Js=new zo,Il=new U,Qs=new U,er=new U,tr=new U,ga=new U,nr=new U,Ul=new U,ir=new U;class Vt extends Ut{constructor(e=new $n,t=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ga.fromBufferAttribute(u,e),a?nr.addScaledVector(ga,h):nr.addScaledVector(ga.sub(t),h))}t.add(nr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),ti.copy(e.ray).recast(e.near),!(Js.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Js,Il)===null||ti.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),ti.copy(e.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){const f=p[x],d=a[f.materialIndex],A=Math.max(f.start,m.start),w=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=A,C=w;E<C;E+=3){const P=o.getX(E),R=o.getX(E+1),N=o.getX(E+2);s=sr(this,d,e,i,l,h,u,P,R,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let f=x,d=_;f<d;f+=3){const A=o.getX(f),w=o.getX(f+1),E=o.getX(f+2);s=sr(this,a,e,i,l,h,u,A,w,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,_=p.length;x<_;x++){const f=p[x],d=a[f.materialIndex],A=Math.max(f.start,m.start),w=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=A,C=w;E<C;E+=3){const P=E,R=E+1,N=E+2;s=sr(this,d,e,i,l,h,u,P,R,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=x,d=_;f<d;f+=3){const A=f,w=f+1,E=f+2;s=sr(this,a,e,i,l,h,u,A,w,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Hp(n,e,t,i,s,r,a,o){let c;if(e.side===It?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Yn,o),c===null)return null;ir.copy(o),ir.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:n}}function sr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Qs),n.getVertexPosition(c,er),n.getVertexPosition(l,tr);const h=Hp(n,e,t,i,Qs,er,tr,Ul);if(h){const u=new U;en.getBarycoord(Ul,Qs,er,tr,u),s&&(h.uv=en.getInterpolatedAttribute(s,o,c,l,u,new qe)),r&&(h.uv1=en.getInterpolatedAttribute(r,o,c,l,u,new qe)),a&&(h.normal=en.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new U,materialIndex:0};en.getNormal(Qs,er,tr,p.normal),h.face=p,h.barycoord=u}return h}class Ls extends $n{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let p=0,m=0;x("z","y","x",-1,-1,i,t,e,a,r,0),x("z","y","x",1,-1,i,t,-e,a,r,1),x("x","z","y",1,1,e,i,t,s,a,2),x("x","z","y",1,-1,e,i,-t,s,a,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(u,2));function x(_,f,d,A,w,E,C,P,R,N,y){const M=E/R,b=C/N,W=E/2,H=C/2,X=P/2,j=R+1,Y=N+1;let $=0,B=0;const re=new U;for(let he=0;he<Y;he++){const Me=he*b-H;for(let ke=0;ke<j;ke++){const st=ke*M-W;re[_]=st*A,re[f]=Me*w,re[d]=X,l.push(re.x,re.y,re.z),re[_]=0,re[f]=0,re[d]=P>0?1:-1,h.push(re.x,re.y,re.z),u.push(ke/R),u.push(1-he/N),$+=1}}for(let he=0;he<N;he++)for(let Me=0;Me<R;Me++){const ke=p+Me+j*he,st=p+Me+j*(he+1),Qe=p+(Me+1)+j*(he+1),G=p+(Me+1)+j*he;c.push(ke,st,G),c.push(st,Qe,G),B+=6}o.addGroup(m,B,y),m+=B,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=Gi(n[t]);for(const s in i)e[s]=i[s]}return e}function Vp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Gp={clone:Gi,merge:Pt};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yc extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new U,Nl=new qe,Ol=new qe;class jt extends Yc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ol),t.subVectors(Ol,Nl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,Ci=1;class Yp extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(Ai,Ci,e,t);s.layers=this.layers,this.add(s);const r=new jt(Ai,Ci,e,t);r.layers=this.layers,this.add(r);const a=new jt(Ai,Ci,e,t);a.layers=this.layers,this.add(a);const o=new jt(Ai,Ci,e,t);o.layers=this.layers,this.add(o);const c=new jt(Ai,Ci,e,t);c.layers=this.layers,this.add(c);const l=new jt(Ai,Ci,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class qc extends wt{constructor(e=[],t=Hi,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qp extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ls(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:zn});r.uniforms.tEquirect.value=t;const a=new Vt(s,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=Ht),new Yp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class hi extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jp={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,i),d=this._getHandJoint(l,_);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&p>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fo extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _a=new U,$p=new U,Zp=new Oe;class ri{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=_a.subVectors(i,t).cross($p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(_a),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zp.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new zo,Kp=new qe(.5,.5),rr=new U;class Vo{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,a=new ri){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=cn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],p=r[6],m=r[7],x=r[8],_=r[9],f=r[10],d=r[11],A=r[12],w=r[13],E=r[14],C=r[15];if(s[0].setComponents(l-a,m-h,d-x,C-A).normalize(),s[1].setComponents(l+a,m+h,d+x,C+A).normalize(),s[2].setComponents(l+o,m+u,d+_,C+w).normalize(),s[3].setComponents(l-o,m-u,d-_,C-w).normalize(),i)s[4].setComponents(c,p,f,E).normalize(),s[5].setComponents(l-c,m-p,d-f,C-E).normalize();else if(s[4].setComponents(l-c,m-p,d-f,C-E).normalize(),t===cn)s[5].setComponents(l+c,m+p,d+f,C+E).normalize();else if(t===Sr)s[5].setComponents(c,p,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Kp.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jp extends wt{constructor(e,t,i,s,r=Ht,a=Ht,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class jc extends wt{constructor(e,t,i=di,s,r,a,o=nn,c=nn,l,h=Ms,u=1){if(h!==Ms&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ds extends $n{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,p=t/c,m=[],x=[],_=[],f=[];for(let d=0;d<h;d++){const A=d*p-a;for(let w=0;w<l;w++){const E=w*u-r;x.push(E,-A,0),_.push(0,0,1),f.push(w/o),f.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<o;A++){const w=A+l*d,E=A+l*(d+1),C=A+1+l*(d+1),P=A+1+l*d;m.push(w,E,P),m.push(E,C,P)}this.setIndex(m),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class Is extends $n{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new U,p=new U,m=[],x=[],_=[],f=[];for(let d=0;d<=i;d++){const A=[],w=d/i;let E=0;d===0&&a===0?E=.5/t:d===i&&c===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const P=C/t;u.x=-e*Math.cos(s+P*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(s+P*r)*Math.sin(a+w*o),x.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),f.push(P+E,1-w),A.push(l++)}h.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){const w=h[d][A+1],E=h[d][A],C=h[d+1][A],P=h[d+1][A+1];(d!==0||a>0)&&m.push(w,E,P),(d!==i-1||c<Math.PI)&&m.push(E,C,P)}this.setIndex(m),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qp extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class em extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tm{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const nm=new tm;let Go=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mn={};class im extends Error{constructor(e,t){super(e),this.response=t}}class sm extends Go{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:i,onError:s});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Mn[e],u=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,x=m!==0;let _=0;const f=new ReadableStream({start(d){A();function A(){u.read().then(({done:w,value:E})=>{if(w)d.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let P=0,R=h.length;P<R;P++){const N=h[P];N.onProgress&&N.onProgress(C)}d.enqueue(E),A()}},w=>{d.error(w)})}}});return new Response(f)}else throw new im(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{Vn.add(`file:${e}`,l);const h=Mn[e];delete Mn[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Mn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Mn[e];for(let u=0,p=h.length;u<p;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ri=new WeakMap;class rm extends Go{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ri.get(a);u===void 0&&(u=[],Ri.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=ws("img");function c(){h(),t&&t(this);const u=Ri.get(this)||[];for(let p=0;p<u.length;p++){const m=u[p];m.onLoad&&m.onLoad(this)}Ri.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Vn.remove(`image:${e}`);const p=Ri.get(this)||[];for(let m=0;m<p.length;m++){const x=p[m];x.onError&&x.onError(u)}Ri.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class am extends Yc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class om extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fl=new ct;class lm{constructor(e,t,i=0,s=1/0){this.ray=new Hc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fl),this}intersectObject(e,t=!0,i=[]){return po(e,this,i,t),i.sort(kl),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)po(e[s],this,i,t);return i.sort(kl),i}}function kl(n,e){return n.distance-e.distance}function po(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)po(r[a],e,t,!0)}}function Bl(n,e,t,i){const s=cm(i);switch(t){case Ic:return n*e;case Nc:return n*e/s.components*s.byteLength;case No:return n*e/s.components*s.byteLength;case Oc:return n*e*2/s.components*s.byteLength;case Oo:return n*e*2/s.components*s.byteLength;case Uc:return n*e*3/s.components*s.byteLength;case tn:return n*e*4/s.components*s.byteLength;case Fo:return n*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Ga:return Math.max(n,16)*Math.max(e,8)/4;case za:case Va:return Math.max(n,8)*Math.max(e,8)/2;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vr:case oo:case lo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fc:case co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ho:case uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cm(n){switch(n){case Cn:case Pc:return{byteLength:1,components:1};case xs:case Lc:case Rs:return{byteLength:2,components:1};case Io:case Uo:return{byteLength:2,components:4};case di:case Do:case wn:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);function $c(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hm(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<u.length;m++){const x=u[p],_=u[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++p,u[p]=_)}u.length=p+1;for(let m=0,x=u.length;m<x;m++){const _=u[m];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,_m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Om=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`struct PhysicalMaterial {
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
}`,hg=`
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,_v=`#define DISTANCE
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
}`,xv=`#define DISTANCE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,bv=`uniform vec3 diffuse;
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
}`,Tv=`#define LAMBERT
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
}`,Av=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Rv=`#define MATCAP
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
}`,Pv=`#define NORMAL
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
}`,Lv=`#define NORMAL
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
}`,Dv=`#define PHONG
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
}`,Iv=`#define PHONG
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
}`,Uv=`#define STANDARD
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
}`,Nv=`#define STANDARD
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
}`,Ov=`#define TOON
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
}`,Fv=`#define TOON
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
}`,kv=`uniform float size;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Hv=`uniform vec3 color;
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
}`,Vv=`uniform float rotation;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:dm,alphahash_pars_fragment:um,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:vm,aomap_pars_fragment:_m,batching_pars_vertex:xm,batching_vertex:Em,begin_vertex:Mm,beginnormal_vertex:ym,bsdfs:Sm,iridescence_fragment:wm,bumpmap_pars_fragment:bm,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Rm,color_fragment:Pm,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Im,common:Um,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Om,displacementmap_pars_vertex:Fm,displacementmap_vertex:km,emissivemap_fragment:Bm,emissivemap_pars_fragment:zm,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:Ym,envmap_physical_pars_fragment:ig,envmap_vertex:qm,fog_vertex:jm,fog_pars_vertex:$m,fog_fragment:Zm,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:dg,lights_fragment_end:ug,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:vg,map_pars_fragment:_g,map_particle_fragment:xg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Sg,morphcolor_vertex:wg,morphnormal_vertex:bg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Cg,normal_fragment_maps:Rg,normal_pars_fragment:Pg,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Fg,opaque_fragment:kg,packing:Bg,premultiplied_alpha_fragment:zg,project_vertex:Hg,dithering_fragment:Vg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:qg,shadowmap_vertex:jg,shadowmask_pars_fragment:$g,skinbase_vertex:Zg,skinning_pars_vertex:Kg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:sv,transmission_pars_fragment:rv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:cv,background_vert:hv,background_frag:dv,backgroundCube_vert:uv,backgroundCube_frag:fv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:vv,distanceRGBA_vert:_v,distanceRGBA_frag:xv,equirect_vert:Ev,equirect_frag:Mv,linedashed_vert:yv,linedashed_frag:Sv,meshbasic_vert:wv,meshbasic_frag:bv,meshlambert_vert:Tv,meshlambert_frag:Av,meshmatcap_vert:Cv,meshmatcap_frag:Rv,meshnormal_vert:Pv,meshnormal_frag:Lv,meshphong_vert:Dv,meshphong_frag:Iv,meshphysical_vert:Uv,meshphysical_frag:Nv,meshtoon_vert:Ov,meshtoon_frag:Fv,points_vert:kv,points_frag:Bv,shadow_vert:zv,shadow_frag:Hv,sprite_vert:Vv,sprite_frag:Gv},se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ln={basic:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Pt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Pt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Pt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Pt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Pt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Pt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Pt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Pt([se.lights,se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ln.physical={uniforms:Pt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ar={r:0,b:0,g:0},ii=new fn,Wv=new ct;function Xv(n,e,t,i,s,r,a){const o=new Ze(0);let c=r===!0?0:1,l,h,u=null,p=0,m=null;function x(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function _(w){let E=!1;const C=x(w);C===null?d(o,c):C&&C.isColor&&(d(C,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(w,E){const C=x(E);C&&(C.isCubeTexture||C.mapping===Ir)?(h===void 0&&(h=new Vt(new Ls(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Gi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(E.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(ii)),h.material.toneMapped=Ge.getTransfer(C.colorSpace)!==Je,(u!==C||p!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=C,p=C.version,m=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Vt(new Ds(2,2),new Rn({name:"BackgroundMaterial",uniforms:Gi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||p!==C.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=C,p=C.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,E){w.getRGB(ar,Xc(n)),i.buffers.color.setClear(ar.r,ar.g,ar.b,E,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(o,c)},render:_,addToRenderList:f,dispose:A}}function Yv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,a=!1;function o(M,b,W,H,X){let j=!1;const Y=u(H,W,b);r!==Y&&(r=Y,l(r.object)),j=m(M,H,W,X),j&&x(M,H,W,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,E(M,b,W,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,b,W){const H=W.wireframe===!0;let X=i[M.id];X===void 0&&(X={},i[M.id]=X);let j=X[b.id];j===void 0&&(j={},X[b.id]=j);let Y=j[H];return Y===void 0&&(Y=p(c()),j[H]=Y),Y}function p(M){const b=[],W=[],H=[];for(let X=0;X<t;X++)b[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,b,W,H){const X=r.attributes,j=b.attributes;let Y=0;const $=W.getAttributes();for(const B in $)if($[B].location>=0){const he=X[B];let Me=j[B];if(Me===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function x(M,b,W,H){const X={},j=b.attributes;let Y=0;const $=W.getAttributes();for(const B in $)if($[B].location>=0){let he=j[B];he===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),X[B]=Me,Y++}r.attributes=X,r.attributesNum=Y,r.index=H}function _(){const M=r.newAttributes;for(let b=0,W=M.length;b<W;b++)M[b]=0}function f(M){d(M,0)}function d(M,b){const W=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;W[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),X[M]!==b&&(n.vertexAttribDivisor(M,b),X[M]=b)}function A(){const M=r.newAttributes,b=r.enabledAttributes;for(let W=0,H=b.length;W<H;W++)b[W]!==M[W]&&(n.disableVertexAttribArray(W),b[W]=0)}function w(M,b,W,H,X,j,Y){Y===!0?n.vertexAttribIPointer(M,b,W,X,j):n.vertexAttribPointer(M,b,W,H,X,j)}function E(M,b,W,H){_();const X=H.attributes,j=W.getAttributes(),Y=b.defaultAttributeValues;for(const $ in j){const B=j[$];if(B.location>=0){let re=X[$];if(re===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){const he=re.normalized,Me=re.itemSize,ke=e.get(re);if(ke===void 0)continue;const st=ke.buffer,Qe=ke.type,G=ke.bytesPerElement,ae=Qe===n.INT||Qe===n.UNSIGNED_INT||re.gpuType===Do;if(re.isInterleavedBufferAttribute){const ne=re.data,Ce=ne.stride,Re=re.offset;if(ne.isInstancedInterleavedBuffer){for(let Ie=0;Ie<B.locationSize;Ie++)d(B.location+Ie,ne.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ie=0;Ie<B.locationSize;Ie++)f(B.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Ie=0;Ie<B.locationSize;Ie++)w(B.location+Ie,Me/B.locationSize,Qe,he,Ce*G,(Re+Me/B.locationSize*Ie)*G,ae)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)d(B.location+ne,re.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<B.locationSize;ne++)f(B.location+ne);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ne=0;ne<B.locationSize;ne++)w(B.location+ne,Me/B.locationSize,Qe,he,Me*G,Me/B.locationSize*ne*G,ae)}}else if(Y!==void 0){const he=Y[$];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(B.location,he);break;case 3:n.vertexAttrib3fv(B.location,he);break;case 4:n.vertexAttrib4fv(B.location,he);break;default:n.vertexAttrib1fv(B.location,he)}}}}A()}function C(){N();for(const M in i){const b=i[M];for(const W in b){const H=b[W];for(const X in H)h(H[X].object),delete H[X];delete b[W]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const b=i[M.id];for(const W in b){const H=b[W];for(const X in H)h(H[X].object),delete H[X];delete b[W]}delete i[M.id]}function R(M){for(const b in i){const W=i[b];if(W[M.id]===void 0)continue;const H=W[M.id];for(const X in H)h(H[X].object),delete H[X];delete W[M.id]}}function N(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:f,disableUnusedAttributes:A}}function qv(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];t.update(m,i,1)}function c(l,h,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)a(l[x],h[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*p[_];t.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==tn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:C,maxSamples:P}}function $v(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new ri,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){const x=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,d=n.get(u);if(!s||x===null||x.length===0||r&&!f)r?h(null):l();else{const A=r?0:i,w=A*4;let E=d.clippingState||null;c.value=E,E=h(x,p,w,m);for(let C=0;C!==w;++C)E[C]=t[C];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,m,x){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=c.value,x!==!0||f===null){const d=m+_*4,A=p.matrixWorldInverse;o.getNormalMatrix(A),(f===null||f.length<d)&&(f=new Float32Array(d));for(let w=0,E=m;w!==_;++w,E+=4)a.copy(u[w]).applyMatrix4(A,o),a.normal.toArray(f,E),f[E+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function Zv(n){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=Hi:o===Fa&&(a.mapping=Vi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===Fa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qp(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ui=4,zl=[.125,.215,.35,.446,.526,.582],li=20,xa=new am,Hl=new Ze;let Ea=null,Ma=0,ya=0,Sa=!1;const ai=(1+Math.sqrt(5))/2,Pi=1/ai,Vl=[new U(-ai,Pi,0),new U(ai,Pi,0),new U(-Pi,0,ai),new U(Pi,0,ai),new U(0,ai,-Pi),new U(0,ai,Pi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Kv=new U;class Gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Kv}=r;Ea=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ma,ya),this._renderer.xr.enabled=Sa,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Rs,format:tn,colorSpace:ui,depthBuffer:!1},s=Wl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(r)),this._blurMaterial=Qv(r,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,s,r){const c=new jt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Hl),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Ps({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),f=new Vt(new Ls,_);let d=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,d=!0):(_.color.copy(Hl),d=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const C=this._cubeSize;or(s,E*C,w>2?C:0,C,C),u.setRenderTarget(s),d&&u.render(f,c),u.render(e,c)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Hi||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Vt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;or(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,xa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Vl[(s-r-1)%Vl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),_=r/x,f=isFinite(r)?1+Math.floor(h*_):li;f>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${li}`);const d=[];let A=0;for(let R=0;R<li;++R){const N=R/_,y=Math.exp(-N*N/2);d.push(y),R===0?A+=y:R<f&&(A+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/A;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:w}=this;p.dTheta.value=x,p.mipInt.value=w-i;const E=this._sizeLods[s],C=3*E*(s>w-Ui?s-w+Ui:0),P=4*(this._cubeSize-E);or(t,C,P,3*E,2*E),c.setRenderTarget(t),c.render(u,xa)}}function Jv(n){const e=[],t=[],i=[];let s=n;const r=n-Ui+1+zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Ui?c=zl[a-n+Ui-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,_=3,f=2,d=1,A=new Float32Array(_*x*m),w=new Float32Array(f*x*m),E=new Float32Array(d*x*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,N=P>2?0:-1,y=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];A.set(y,_*x*P),w.set(p,f*x*P);const M=[P,P,P,P,P,P];E.set(M,d*x*P)}const C=new $n;C.setAttribute("position",new dn(A,_)),C.setAttribute("uv",new dn(w,f)),C.setAttribute("faceIndex",new dn(E,d)),e.push(C),s>Ui&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wl(n,e,t){const i=new qn(n,e,t);return i.texture.mapping=Ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qv(n,e,t){const i=new Float32Array(li),s=new U(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Xl(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Yl(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function e_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Oa||c===Fa,h=c===Hi||c===Vi;if(l||h){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Gl(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Gl(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function t_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function n_(n,e,t,i){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const m in p)e.update(p[m],n.ARRAY_BUFFER)}function l(u){const p=[],m=u.index,x=u.attributes.position;let _=0;if(m!==null){const A=m.array;_=m.version;for(let w=0,E=A.length;w<E;w+=3){const C=A[w+0],P=A[w+1],R=A[w+2];p.push(C,P,P,R,R,C)}}else if(x!==void 0){const A=x.array;_=x.version;for(let w=0,E=A.length/3-1;w<E;w+=3){const C=w+0,P=w+1,R=w+2;p.push(C,P,P,R,R,C)}}else return;const f=new(Bc(p)?Wc:Gc)(p,1);f.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,f)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function i_(n,e,t){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){n.drawElements(i,m,r,p*a),t.update(m,i,1)}function l(p,m,x){x!==0&&(n.drawElementsInstanced(i,m,r,p*a,x),t.update(m,i,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,x);let f=0;for(let d=0;d<x;d++)f+=m[d];t.update(f,i,1)}function u(p,m,x,_){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<p.length;d++)l(p[d]/a,m[d],_[d]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,_,0,x);let d=0;for(let A=0;A<x;A++)d+=m[A]*_[A];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r_(n,e,t){const i=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==u){let M=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var m=M;p!==void 0&&p.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),_===!0&&(E=2),f===!0&&(E=3);let C=o.attributes.position.count*E,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*P*4*u),N=new zc(R,C,P,u);N.type=wn,N.needsUpdate=!0;const y=E*4;for(let b=0;b<u;b++){const W=d[b],H=A[b],X=w[b],j=C*P*4*b;for(let Y=0;Y<W.count;Y++){const $=Y*y;x===!0&&(s.fromBufferAttribute(W,Y),R[j+$+0]=s.x,R[j+$+1]=s.y,R[j+$+2]=s.z,R[j+$+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),R[j+$+4]=s.x,R[j+$+5]=s.y,R[j+$+6]=s.z,R[j+$+7]=0),f===!0&&(s.fromBufferAttribute(X,Y),R[j+$+8]=s.x,R[j+$+9]=s.y,R[j+$+10]=s.z,R[j+$+11]=X.itemSize===4?s.w:1)}}p={count:u,texture:N,size:new qe(C,P)},i.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let f=0;f<l.length;f++)x+=l[f];const _=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:r}}function a_(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Zc=new wt,ql=new jc(1,1),Kc=new zc,Jc=new Pp,Qc=new qc,jl=[],$l=[],Zl=new Float32Array(16),Kl=new Float32Array(9),Jl=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nr(n,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Jl.set(i),n.uniformMatrix2fv(this.addr,!1,Jl),vt(t,i)}}function u_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),vt(t,i)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Zl.set(i),n.uniformMatrix4fv(this.addr,!1,Zl),vt(t,i)}}function p_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function y_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ql.compareFunction=kc,r=ql):r=Zc,t.setTexture2D(e||r,s)}function S_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jc,s)}function w_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Qc,s)}function b_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Kc,s)}function T_(n){switch(n){case 5126:return o_;case 35664:return l_;case 35665:return c_;case 35666:return h_;case 35674:return d_;case 35675:return u_;case 35676:return f_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return __;case 36294:return x_;case 36295:return E_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return b_}}function A_(n,e){n.uniform1fv(this.addr,e)}function C_(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function R_(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function P_(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function L_(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D_(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I_(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U_(n,e){n.uniform1iv(this.addr,e)}function N_(n,e){n.uniform2iv(this.addr,e)}function O_(n,e){n.uniform3iv(this.addr,e)}function F_(n,e){n.uniform4iv(this.addr,e)}function k_(n,e){n.uniform1uiv(this.addr,e)}function B_(n,e){n.uniform2uiv(this.addr,e)}function z_(n,e){n.uniform3uiv(this.addr,e)}function H_(n,e){n.uniform4uiv(this.addr,e)}function V_(n,e,t){const i=this.cache,s=e.length,r=Nr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Zc,r[a])}function G_(n,e,t){const i=this.cache,s=e.length,r=Nr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jc,r[a])}function W_(n,e,t){const i=this.cache,s=e.length,r=Nr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qc,r[a])}function X_(n,e,t){const i=this.cache,s=e.length,r=Nr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kc,r[a])}function Y_(n){switch(n){case 5126:return A_;case 35664:return C_;case 35665:return R_;case 35666:return P_;case 35674:return L_;case 35675:return D_;case 35676:return I_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return k_;case 36294:return B_;case 36295:return z_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}class q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T_(t.type)}}class j_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Ql(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){const i=n.name,s=i.length;for(wa.lastIndex=0;;){const r=wa.exec(i),a=wa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ql(t,l===void 0?new q_(o,n,e):new j_(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new $_(o),Ql(t,u)),t=u}}}class _r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Z_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ec(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const K_=37297;let J_=0;function Q_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const tc=new Oe;function e0(n){Ge._getMatrix(tc,Ge.workingColorSpace,n);const e=`mat3( ${tc.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(n)){case yr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Q_(n.getShaderSource(e),o)}else return r}function t0(n,e){const t=e0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n0(n,e){let t;switch(e){case Cc:t="Linear";break;case Gf:t="Reinhard";break;case Wf:t="Cineon";break;case Xf:t="ACESFilmic";break;case qf:t="AgX";break;case jf:t="Neutral";break;case Yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new U;function i0(){Ge.getLuminanceCoefficients(lr);const n=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function r0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ts(n){return n!==""}function ic(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(n){return n.replace(o0,c0)}const l0=new Map;function c0(n,e){let t=Fe[e];if(t===void 0){const i=l0.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mo(t)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(n){return n.replace(h0,d0)}function d0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ac(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function f0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case Vi:e="ENVMAP_TYPE_CUBE";break;case Ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function m0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Hf:e="ENVMAP_BLENDING_MIX";break;case Vf:e="ENVMAP_BLENDING_ADD";break}return e}function g0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function v0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=u0(t),l=f0(t),h=p0(t),u=m0(t),p=g0(t),m=s0(t),x=r0(r),_=s.createProgram();let f,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ts).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ts).join(`
`),d.length>0&&(d+=`
`)):(f=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),d=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?n0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,t0("linearToOutputTexel",t.outputColorSpace),i0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),a=mo(a),a=ic(a,t),a=sc(a,t),o=mo(o),o=ic(o,t),o=sc(o,t),a=rc(a),o=rc(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=A+f+a,E=A+d+o,C=ec(s,s.VERTEX_SHADER,w),P=ec(s,s.FRAGMENT_SHADER,E);s.attachShader(_,C),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(b){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(P)||"",j=W.trim(),Y=H.trim(),$=X.trim();let B=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,P);else{const he=nc(s,C,"vertex"),Me=nc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+j+`
`+he+`
`+Me)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||$==="")&&(re=!1);re&&(b.diagnostics={runnable:B,programLog:j,vertexShader:{log:Y,prefix:f},fragmentShader:{log:$,prefix:d}})}s.deleteShader(C),s.deleteShader(P),N=new _r(s,_),y=a0(s,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,K_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let _0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new E0(e),t.set(e,i)),i}}class E0{constructor(e){this.id=_0++,this.code=e,this.usedTimes=0}}function M0(n,e,t,i,s,r,a){const o=new Ho,c=new x0,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function f(y,M,b,W,H){const X=W.fog,j=H.geometry,Y=y.isMeshStandardMaterial?W.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),B=$&&$.mapping===Ir?$.image.height:null,re=x[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Me=he!==void 0?he.length:0;let ke=0;j.morphAttributes.position!==void 0&&(ke=1),j.morphAttributes.normal!==void 0&&(ke=2),j.morphAttributes.color!==void 0&&(ke=3);let st,Qe,G,ae;if(re){const je=ln[re];st=je.vertexShader,Qe=je.fragmentShader}else st=y.vertexShader,Qe=y.fragmentShader,c.update(y),G=c.getVertexShaderID(y),ae=c.getFragmentShaderID(y);const ne=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Re=H.isInstancedMesh===!0,Ie=H.isBatchedMesh===!0,dt=!!y.map,Ve=!!y.matcap,T=!!$,tt=!!y.aoMap,Se=!!y.lightMap,Ye=!!y.bumpMap,Ee=!!y.normalMap,rt=!!y.displacementMap,fe=!!y.emissiveMap,Be=!!y.metalnessMap,_t=!!y.roughnessMap,ut=y.anisotropy>0,S=y.clearcoat>0,g=y.dispersion>0,O=y.iridescence>0,V=y.sheen>0,Z=y.transmission>0,z=ut&&!!y.anisotropyMap,xe=S&&!!y.clearcoatMap,te=S&&!!y.clearcoatNormalMap,ge=S&&!!y.clearcoatRoughnessMap,ve=O&&!!y.iridescenceMap,Q=O&&!!y.iridescenceThicknessMap,ce=V&&!!y.sheenColorMap,Le=V&&!!y.sheenRoughnessMap,_e=!!y.specularMap,oe=!!y.specularColorMap,Ne=!!y.specularIntensityMap,L=Z&&!!y.transmissionMap,ee=Z&&!!y.thicknessMap,ie=!!y.gradientMap,ue=!!y.alphaMap,K=y.alphaTest>0,q=!!y.alphaHash,me=!!y.extensions;let Ue=Hn;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const nt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:Qe,defines:y.defines,customVertexShaderID:G,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&H._colorsTexture!==null,instancing:Re,instancingColor:Re&&H.instanceColor!==null,instancingMorph:Re&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ui,alphaToCoverage:!!y.alphaToCoverage,map:dt,matcap:Ve,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:B,aoMap:tt,lightMap:Se,bumpMap:Ye,normalMap:Ee,displacementMap:p&&rt,emissiveMap:fe,normalMapObjectSpace:Ee&&y.normalMapType===Qf,normalMapTangentSpace:Ee&&y.normalMapType===Jf,metalnessMap:Be,roughnessMap:_t,anisotropy:ut,anisotropyMap:z,clearcoat:S,clearcoatMap:xe,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:g,iridescence:O,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:V,sheenColorMap:ce,sheenRoughnessMap:Le,specularMap:_e,specularColorMap:oe,specularIntensityMap:Ne,transmission:Z,transmissionMap:L,thicknessMap:ee,gradientMap:ie,opaque:y.transparent===!1&&y.blending===Oi&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:K,alphaHash:q,combine:y.combine,mapUv:dt&&_(y.map.channel),aoMapUv:tt&&_(y.aoMap.channel),lightMapUv:Se&&_(y.lightMap.channel),bumpMapUv:Ye&&_(y.bumpMap.channel),normalMapUv:Ee&&_(y.normalMap.channel),displacementMapUv:rt&&_(y.displacementMap.channel),emissiveMapUv:fe&&_(y.emissiveMap.channel),metalnessMapUv:Be&&_(y.metalnessMap.channel),roughnessMapUv:_t&&_(y.roughnessMap.channel),anisotropyMapUv:z&&_(y.anisotropyMap.channel),clearcoatMapUv:xe&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(y.sheenRoughnessMap.channel),specularMapUv:_e&&_(y.specularMap.channel),specularColorMapUv:oe&&_(y.specularColorMap.channel),specularIntensityMapUv:Ne&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:ee&&_(y.thicknessMap.channel),alphaMapUv:ue&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ee||ut),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(dt||ue),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:dt&&y.map.isVideoTexture===!0&&Ge.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:fe&&y.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)M.push(b),M.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(A(M,y),w(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function w(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function E(y){const M=x[y.type];let b;if(M){const W=ln[M];b=Gp.clone(W.uniforms)}else b=y.uniforms;return b}function C(y,M){let b;for(let W=0,H=h.length;W<H;W++){const X=h[W];if(X.cacheKey===M){b=X,++b.usedTimes;break}}return b===void 0&&(b=new v0(n,M,y,r),h.push(b)),b}function P(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function N(){c.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:E,acquireProgram:C,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:N}}function y0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function S0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function oc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function lc(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,p,m,x,_,f){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:x,renderOrder:u.renderOrder,z:_,group:f},n[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=f),e++,d}function o(u,p,m,x,_,f){const d=a(u,p,m,x,_,f);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,p,m,x,_,f){const d=a(u,p,m,x,_,f);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||S0),i.length>1&&i.sort(p||oc),s.length>1&&s.sort(p||oc)}function h(){for(let u=e,p=n.length;u<p;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function w0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new lc,n.set(i,[a])):s>=r.length?(a=new lc,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function b0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ze};break;case"SpotLight":t={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function T0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A0=0;function C0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R0(n){const e=new b0,t=T0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new ct,a=new ct;function o(l){let h=0,u=0,p=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,x=0,_=0,f=0,d=0,A=0,w=0,E=0,C=0,P=0,R=0;l.sort(C0);for(let y=0,M=l.length;y<M;y++){const b=l[y],W=b.color,H=b.intensity,X=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=W.r*H,u+=W.g*H,p+=W.b*H;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(b.sh.coefficients[Y],H);R++}else if(b.isDirectionalLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const $=b.shadow,B=t.get(b);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=b.shadow.matrix,A++}i.directional[m]=Y,m++}else if(b.isSpotLight){const Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(W).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,i.spot[_]=Y;const $=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,$.updateMatrices(b),b.castShadow&&P++),i.spotLightMatrix[_]=$.matrix,b.castShadow){const B=t.get(b);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=j,E++}_++}else if(b.isRectAreaLight){const Y=e.get(b);Y.color.copy(W).multiplyScalar(H),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),i.rectArea[f]=Y,f++}else if(b.isPointLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const $=b.shadow,B=t.get(b);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,i.pointShadow[x]=B,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=b.shadow.matrix,w++}i.point[x]=Y,x++}else if(b.isHemisphereLight){const Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(H),Y.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[d]=Y,d++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=p;const N=i.hash;(N.directionalLength!==m||N.pointLength!==x||N.spotLength!==_||N.rectAreaLength!==f||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==E||N.numSpotMaps!==C||N.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=f,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=m,N.pointLength=x,N.spotLength=_,N.rectAreaLength=f,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=E,N.numSpotMaps=C,N.numLightProbes=R,i.version=A0++)}function c(l,h){let u=0,p=0,m=0,x=0,_=0;const f=h.matrixWorldInverse;for(let d=0,A=l.length;d<A;d++){const w=l[d];if(w.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(w.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),m++}else if(w.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),a.identity(),r.copy(w.matrixWorld),r.premultiply(f),a.extractRotation(r),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(f),_++}}}return{setup:o,setupView:c,state:i}}function cc(n){const e=new R0(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function P0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new cc(n),e.set(s,[o])):r>=a.length?(o=new cc(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function I0(n,e,t){let i=new Vo;const s=new qe,r=new qe,a=new ft,o=new Qp({depthPacking:Kf}),c=new em,l={},h=t.maxTextureSize,u={[Yn]:It,[It]:Yn,[Sn]:Sn},p=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const x=new $n;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(x,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let d=this.type;this.render=function(P,R,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),W=n.state;W.setBlending(zn),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=d!==yn&&this.type===yn,X=d===yn&&this.type!==yn;for(let j=0,Y=P.length;j<Y;j++){const $=P[j],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const re=B.getFrameExtents();if(s.multiply(re),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,B.mapSize.y=r.y)),B.map===null||H===!0||X===!0){const Me=this.type!==yn?{minFilter:nn,magFilter:nn}:{};B.map!==null&&B.map.dispose(),B.map=new qn(s.x,s.y,Me),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const he=B.getViewportCount();for(let Me=0;Me<he;Me++){const ke=B.getViewport(Me);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),W.viewport(a),B.updateMatrices($,Me),i=B.getFrustum(),E(R,N,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===yn&&A(B,N),B.needsUpdate=!1}d=this.type,f.needsUpdate=!1,n.setRenderTarget(y,M,b)};function A(P,R){const N=e.update(_);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new qn(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,N,p,_,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,N,m,_,null)}function w(P,R,N,y){let M=null;const b=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)M=b;else if(M=N.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const W=M.uuid,H=R.uuid;let X=l[W];X===void 0&&(X={},l[W]=X);let j=X[H];j===void 0&&(j=M.clone(),X[H]=j,R.addEventListener("dispose",C)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,y===yn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=N}return M}function E(P,R,N,y,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===yn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const H=e.update(P),X=P.material;if(Array.isArray(X)){const j=H.groups;for(let Y=0,$=j.length;Y<$;Y++){const B=j[Y],re=X[B.materialIndex];if(re&&re.visible){const he=w(P,re,y,M);P.onBeforeShadow(n,P,R,N,H,he,B),n.renderBufferDirect(N,null,H,he,P,B),P.onAfterShadow(n,P,R,N,H,he,B)}}}else if(X.visible){const j=w(P,X,y,M);P.onBeforeShadow(n,P,R,N,H,j,null),n.renderBufferDirect(N,null,H,j,P,null),P.onAfterShadow(n,P,R,N,H,j,null)}}const W=P.children;for(let H=0,X=W.length;H<X;H++)E(W[H],R,N,y,M)}function C(P){P.target.removeEventListener("dispose",C);for(const N in l){const y=l[N],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const U0={[Ra]:Pa,[La]:Ua,[Da]:Na,[zi]:Ia,[Pa]:Ra,[Ua]:La,[Na]:Da,[Ia]:zi};function N0(n,e){function t(){let L=!1;const ee=new ft;let ie=null;const ue=new ft(0,0,0,0);return{setMask:function(K){ie!==K&&!L&&(n.colorMask(K,K,K,K),ie=K)},setLocked:function(K){L=K},setClear:function(K,q,me,Ue,nt){nt===!0&&(K*=Ue,q*=Ue,me*=Ue),ee.set(K,q,me,Ue),ue.equals(ee)===!1&&(n.clearColor(K,q,me,Ue),ue.copy(ee))},reset:function(){L=!1,ie=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,ee=!1,ie=null,ue=null,K=null;return{setReversed:function(q){if(ee!==q){const me=e.get("EXT_clip_control");q?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=q;const Ue=K;K=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(q){q?ne(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(q){ie!==q&&!L&&(n.depthMask(q),ie=q)},setFunc:function(q){if(ee&&(q=U0[q]),ue!==q){switch(q){case Ra:n.depthFunc(n.NEVER);break;case Pa:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case zi:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Ua:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=q}},setLocked:function(q){L=q},setClear:function(q){K!==q&&(ee&&(q=1-q),n.clearDepth(q),K=q)},reset:function(){L=!1,ie=null,ue=null,K=null,ee=!1}}}function s(){let L=!1,ee=null,ie=null,ue=null,K=null,q=null,me=null,Ue=null,nt=null;return{setTest:function(je){L||(je?ne(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(je){ee!==je&&!L&&(n.stencilMask(je),ee=je)},setFunc:function(je,mn,rn){(ie!==je||ue!==mn||K!==rn)&&(n.stencilFunc(je,mn,rn),ie=je,ue=mn,K=rn)},setOp:function(je,mn,rn){(q!==je||me!==mn||Ue!==rn)&&(n.stencilOp(je,mn,rn),q=je,me=mn,Ue=rn)},setLocked:function(je){L=je},setClear:function(je){nt!==je&&(n.clearStencil(je),nt=je)},reset:function(){L=!1,ee=null,ie=null,ue=null,K=null,q=null,me=null,Ue=null,nt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,m=[],x=null,_=!1,f=null,d=null,A=null,w=null,E=null,C=null,P=null,R=new Ze(0,0,0),N=0,y=!1,M=null,b=null,W=null,H=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),Y=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Y=$>=2);let re=null,he={};const Me=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),st=new ft().fromArray(Me),Qe=new ft().fromArray(ke);function G(L,ee,ie,ue){const K=new Uint8Array(4),q=n.createTexture();n.bindTexture(L,q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<ie;me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(ee+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return q}const ae={};ae[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(zi),Ye(!1),Ee(ul),ne(n.CULL_FACE),tt(zn);function ne(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Ce(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Re(L,ee){return u[L]!==ee?(n.bindFramebuffer(L,ee),u[L]=ee,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ee),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ie(L,ee){let ie=m,ue=!1;if(L){ie=p.get(ee),ie===void 0&&(ie=[],p.set(ee,ie));const K=L.textures;if(ie.length!==K.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let q=0,me=K.length;q<me;q++)ie[q]=n.COLOR_ATTACHMENT0+q;ie.length=K.length,ue=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ie)}function dt(L){return x!==L?(n.useProgram(L),x=L,!0):!1}const Ve={[oi]:n.FUNC_ADD,[wf]:n.FUNC_SUBTRACT,[bf]:n.FUNC_REVERSE_SUBTRACT};Ve[Tf]=n.MIN,Ve[Af]=n.MAX;const T={[Cf]:n.ZERO,[Rf]:n.ONE,[Pf]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[Of]:n.SRC_ALPHA_SATURATE,[Uf]:n.DST_COLOR,[Df]:n.DST_ALPHA,[Lf]:n.ONE_MINUS_SRC_COLOR,[Ca]:n.ONE_MINUS_SRC_ALPHA,[Nf]:n.ONE_MINUS_DST_COLOR,[If]:n.ONE_MINUS_DST_ALPHA,[Ff]:n.CONSTANT_COLOR,[kf]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[zf]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(L,ee,ie,ue,K,q,me,Ue,nt,je){if(L===zn){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(ne(n.BLEND),_=!0),L!==Sf){if(L!==f||je!==y){if((d!==oi||E!==oi)&&(n.blendEquation(n.FUNC_ADD),d=oi,E=oi),je)switch(L){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.ONE,n.ONE);break;case pl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ml:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case pl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ml:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,w=null,C=null,P=null,R.set(0,0,0),N=0,f=L,y=je}return}K=K||ee,q=q||ie,me=me||ue,(ee!==d||K!==E)&&(n.blendEquationSeparate(Ve[ee],Ve[K]),d=ee,E=K),(ie!==A||ue!==w||q!==C||me!==P)&&(n.blendFuncSeparate(T[ie],T[ue],T[q],T[me]),A=ie,w=ue,C=q,P=me),(Ue.equals(R)===!1||nt!==N)&&(n.blendColor(Ue.r,Ue.g,Ue.b,nt),R.copy(Ue),N=nt),f=L,y=!1}function Se(L,ee){L.side===Sn?Ce(n.CULL_FACE):ne(n.CULL_FACE);let ie=L.side===It;ee&&(ie=!ie),Ye(ie),L.blending===Oi&&L.transparent===!1?tt(zn):tt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function Ee(L){L!==Ef?(ne(n.CULL_FACE),L!==b&&(L===ul?n.cullFace(n.BACK):L===Mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),b=L}function rt(L){L!==W&&(Y&&n.lineWidth(L),W=L)}function fe(L,ee,ie){L?(ne(n.POLYGON_OFFSET_FILL),(H!==ee||X!==ie)&&(n.polygonOffset(ee,ie),H=ee,X=ie)):Ce(n.POLYGON_OFFSET_FILL)}function Be(L){L?ne(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function _t(L){L===void 0&&(L=n.TEXTURE0+j-1),re!==L&&(n.activeTexture(L),re=L)}function ut(L,ee,ie){ie===void 0&&(re===null?ie=n.TEXTURE0+j-1:ie=re);let ue=he[ie];ue===void 0&&(ue={type:void 0,texture:void 0},he[ie]=ue),(ue.type!==L||ue.texture!==ee)&&(re!==ie&&(n.activeTexture(ie),re=ie),n.bindTexture(L,ee||ae[L]),ue.type=L,ue.texture=ee)}function S(){const L=he[re];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){st.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function Le(L){Qe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Qe.copy(L))}function _e(L,ee){let ie=l.get(ee);ie===void 0&&(ie=new WeakMap,l.set(ee,ie));let ue=ie.get(L);ue===void 0&&(ue=n.getUniformBlockIndex(ee,L.name),ie.set(L,ue))}function oe(L,ee){const ue=l.get(ee).get(L);c.get(ee)!==ue&&(n.uniformBlockBinding(ee,ue,L.__bindingPointIndex),c.set(ee,ue))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,he={},u={},p=new WeakMap,m=[],x=null,_=!1,f=null,d=null,A=null,w=null,E=null,C=null,P=null,R=new Ze(0,0,0),N=0,y=!1,M=null,b=null,W=null,H=null,X=null,st.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Ce,bindFramebuffer:Re,drawBuffers:Ie,useProgram:dt,setBlending:tt,setMaterial:Se,setFlipSided:Ye,setCullFace:Ee,setLineWidth:rt,setPolygonOffset:fe,setScissorTest:Be,activeTexture:_t,bindTexture:ut,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:ve,texImage3D:Q,updateUBOMapping:_e,uniformBlockBinding:oe,texStorage2D:te,texStorage3D:ge,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:xe,scissor:ce,viewport:Le,reset:Ne}}function O0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,g){return m?new OffscreenCanvas(S,g):ws("canvas")}function _(S,g,O){let V=1;const Z=ut(S);if((Z.width>O||Z.height>O)&&(V=O/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const z=Math.floor(V*Z.width),xe=Math.floor(V*Z.height);u===void 0&&(u=x(z,xe));const te=g?x(z,xe):u;return te.width=z,te.height=xe,te.getContext("2d").drawImage(S,0,0,z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+xe+")."),te}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function f(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,g,O,V,Z=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let z=g;if(g===n.RED&&(O===n.FLOAT&&(z=n.R32F),O===n.HALF_FLOAT&&(z=n.R16F),O===n.UNSIGNED_BYTE&&(z=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.R8UI),O===n.UNSIGNED_SHORT&&(z=n.R16UI),O===n.UNSIGNED_INT&&(z=n.R32UI),O===n.BYTE&&(z=n.R8I),O===n.SHORT&&(z=n.R16I),O===n.INT&&(z=n.R32I)),g===n.RG&&(O===n.FLOAT&&(z=n.RG32F),O===n.HALF_FLOAT&&(z=n.RG16F),O===n.UNSIGNED_BYTE&&(z=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.RG8UI),O===n.UNSIGNED_SHORT&&(z=n.RG16UI),O===n.UNSIGNED_INT&&(z=n.RG32UI),O===n.BYTE&&(z=n.RG8I),O===n.SHORT&&(z=n.RG16I),O===n.INT&&(z=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.RGB8UI),O===n.UNSIGNED_SHORT&&(z=n.RGB16UI),O===n.UNSIGNED_INT&&(z=n.RGB32UI),O===n.BYTE&&(z=n.RGB8I),O===n.SHORT&&(z=n.RGB16I),O===n.INT&&(z=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),O===n.UNSIGNED_INT&&(z=n.RGBA32UI),O===n.BYTE&&(z=n.RGBA8I),O===n.SHORT&&(z=n.RGBA16I),O===n.INT&&(z=n.RGBA32I)),g===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),g===n.RGBA){const xe=Z?yr:Ge.getTransfer(V);O===n.FLOAT&&(z=n.RGBA32F),O===n.HALF_FLOAT&&(z=n.RGBA16F),O===n.UNSIGNED_BYTE&&(z=xe===Je?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function E(S,g){let O;return S?g===null||g===di||g===Es?O=n.DEPTH24_STENCIL8:g===wn?O=n.DEPTH32F_STENCIL8:g===xs&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===di||g===Es?O=n.DEPTH_COMPONENT24:g===wn?O=n.DEPTH_COMPONENT32F:g===xs&&(O=n.DEPTH_COMPONENT16),O}function C(S,g){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==nn&&S.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function P(S){const g=S.target;g.removeEventListener("dispose",P),N(g),g.isVideoTexture&&h.delete(g)}function R(S){const g=S.target;g.removeEventListener("dispose",R),M(g)}function N(S){const g=i.get(S);if(g.__webglInit===void 0)return;const O=S.source,V=p.get(O);if(V){const Z=V[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(S),Object.keys(V).length===0&&p.delete(O)}i.remove(S)}function y(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const O=S.source,V=p.get(O);delete V[g.__cacheKey],a.memory.textures--}function M(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Z=0;Z<g.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=S.textures;for(let V=0,Z=O.length;V<Z;V++){const z=i.get(O[V]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(O[V])}i.remove(S)}let b=0;function W(){b=0}function H(){const S=b;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),b+=1,S}function X(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function j(S,g){const O=i.get(S);if(S.isVideoTexture&&Be(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,S,g);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function Y(S,g){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){ae(O,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function $(S,g){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){ae(O,S,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function B(S,g){const O=i.get(S);if(S.version>0&&O.__version!==S.version){ne(O,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const re={[ka]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},he={[nn]:n.NEAREST,[$f]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Zr]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},Me={[ep]:n.NEVER,[ap]:n.ALWAYS,[tp]:n.LESS,[kc]:n.LEQUAL,[np]:n.EQUAL,[rp]:n.GEQUAL,[ip]:n.GREATER,[sp]:n.NOTEQUAL};function ke(S,g){if(g.type===wn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ht||g.magFilter===Zr||g.magFilter===Vs||g.magFilter===kn||g.minFilter===Ht||g.minFilter===Zr||g.minFilter===Vs||g.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,re[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,re[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,re[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,he[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===nn||g.minFilter!==Vs&&g.minFilter!==kn||g.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function st(S,g){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",P));const V=g.source;let Z=p.get(V);Z===void 0&&(Z={},p.set(V,Z));const z=X(g);if(z!==S.__cacheKey){Z[z]===void 0&&(Z[z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[z].usedTimes++;const xe=Z[S.__cacheKey];xe!==void 0&&(Z[S.__cacheKey].usedTimes--,xe.usedTimes===0&&y(g)),S.__cacheKey=z,S.__webglTexture=Z[z].texture}return O}function Qe(S,g,O){return Math.floor(Math.floor(S/O)/g)}function G(S,g,O,V){const z=S.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,V,g.data);else{z.sort((Q,ce)=>Q.start-ce.start);let xe=0;for(let Q=1;Q<z.length;Q++){const ce=z[xe],Le=z[Q],_e=ce.start+ce.count,oe=Qe(Le.start,g.width,4),Ne=Qe(ce.start,g.width,4);Le.start<=_e+1&&oe===Ne&&Qe(Le.start+Le.count-1,g.width,4)===oe?ce.count=Math.max(ce.count,Le.start+Le.count-ce.start):(++xe,z[xe]=Le)}z.length=xe+1;const te=n.getParameter(n.UNPACK_ROW_LENGTH),ge=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Q=0,ce=z.length;Q<ce;Q++){const Le=z[Q],_e=Math.floor(Le.start/4),oe=Math.ceil(Le.count/4),Ne=_e%g.width,L=Math.floor(_e/g.width),ee=oe,ie=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ne),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ne,L,ee,ie,O,V,g.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function ae(S,g,O){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const Z=st(S,g),z=g.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+O);const xe=i.get(z);if(z.version!==xe.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const te=Ge.getPrimaries(Ge.workingColorSpace),ge=g.colorSpace===Fn?null:Ge.getPrimaries(g.colorSpace),ve=g.colorSpace===Fn||te===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=_(g.image,!1,s.maxTextureSize);Q=_t(g,Q);const ce=r.convert(g.format,g.colorSpace),Le=r.convert(g.type);let _e=w(g.internalFormat,ce,Le,g.colorSpace,g.isVideoTexture);ke(V,g);let oe;const Ne=g.mipmaps,L=g.isVideoTexture!==!0,ee=xe.__version===void 0||Z===!0,ie=z.dataReady,ue=C(g,Q);if(g.isDepthTexture)_e=E(g.format===ys,g.type),ee&&(L?t.texStorage2D(n.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,_e,Q.width,Q.height,0,ce,Le,null));else if(g.isDataTexture)if(Ne.length>0){L&&ee&&t.texStorage2D(n.TEXTURE_2D,ue,_e,Ne[0].width,Ne[0].height);for(let K=0,q=Ne.length;K<q;K++)oe=Ne[K],L?ie&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,ce,Le,oe.data):t.texImage2D(n.TEXTURE_2D,K,_e,oe.width,oe.height,0,ce,Le,oe.data);g.generateMipmaps=!1}else L?(ee&&t.texStorage2D(n.TEXTURE_2D,ue,_e,Q.width,Q.height),ie&&G(g,Q,ce,Le)):t.texImage2D(n.TEXTURE_2D,0,_e,Q.width,Q.height,0,ce,Le,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,_e,Ne[0].width,Ne[0].height,Q.depth);for(let K=0,q=Ne.length;K<q;K++)if(oe=Ne[K],g.format!==tn)if(ce!==null)if(L){if(ie)if(g.layerUpdates.size>0){const me=Bl(oe.width,oe.height,g.format,g.type);for(const Ue of g.layerUpdates){const nt=oe.data.subarray(Ue*me/oe.data.BYTES_PER_ELEMENT,(Ue+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Ue,oe.width,oe.height,1,ce,nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Q.depth,ce,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,_e,oe.width,oe.height,Q.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Q.depth,ce,Le,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,_e,oe.width,oe.height,Q.depth,0,ce,Le,oe.data)}else{L&&ee&&t.texStorage2D(n.TEXTURE_2D,ue,_e,Ne[0].width,Ne[0].height);for(let K=0,q=Ne.length;K<q;K++)oe=Ne[K],g.format!==tn?ce!==null?L?ie&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,_e,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,oe.width,oe.height,ce,Le,oe.data):t.texImage2D(n.TEXTURE_2D,K,_e,oe.width,oe.height,0,ce,Le,oe.data)}else if(g.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,_e,Q.width,Q.height,Q.depth),ie)if(g.layerUpdates.size>0){const K=Bl(Q.width,Q.height,g.format,g.type);for(const q of g.layerUpdates){const me=Q.data.subarray(q*K/Q.data.BYTES_PER_ELEMENT,(q+1)*K/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,ce,Le,me)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Le,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,ce,Le,Q.data);else if(g.isData3DTexture)L?(ee&&t.texStorage3D(n.TEXTURE_3D,ue,_e,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Le,Q.data)):t.texImage3D(n.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,ce,Le,Q.data);else if(g.isFramebufferTexture){if(ee)if(L)t.texStorage2D(n.TEXTURE_2D,ue,_e,Q.width,Q.height);else{let K=Q.width,q=Q.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,_e,K,q,0,ce,Le,null),K>>=1,q>>=1}}else if(Ne.length>0){if(L&&ee){const K=ut(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ue,_e,K.width,K.height)}for(let K=0,q=Ne.length;K<q;K++)oe=Ne[K],L?ie&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce,Le,oe):t.texImage2D(n.TEXTURE_2D,K,_e,ce,Le,oe);g.generateMipmaps=!1}else if(L){if(ee){const K=ut(Q);t.texStorage2D(n.TEXTURE_2D,ue,_e,K.width,K.height)}ie&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Le,Q)}else t.texImage2D(n.TEXTURE_2D,0,_e,ce,Le,Q);f(g)&&d(V),xe.__version=z.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ne(S,g,O){if(g.image.length!==6)return;const V=st(S,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);const z=i.get(Z);if(Z.version!==z.__version||V===!0){t.activeTexture(n.TEXTURE0+O);const xe=Ge.getPrimaries(Ge.workingColorSpace),te=g.colorSpace===Fn?null:Ge.getPrimaries(g.colorSpace),ge=g.colorSpace===Fn||xe===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!ve&&!Q?ce[q]=_(g.image[q],!0,s.maxCubemapSize):ce[q]=Q?g.image[q].image:g.image[q],ce[q]=_t(g,ce[q]);const Le=ce[0],_e=r.convert(g.format,g.colorSpace),oe=r.convert(g.type),Ne=w(g.internalFormat,_e,oe,g.colorSpace),L=g.isVideoTexture!==!0,ee=z.__version===void 0||V===!0,ie=Z.dataReady;let ue=C(g,Le);ke(n.TEXTURE_CUBE_MAP,g);let K;if(ve){L&&ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ne,Le.width,Le.height);for(let q=0;q<6;q++){K=ce[q].mipmaps;for(let me=0;me<K.length;me++){const Ue=K[me];g.format!==tn?_e!==null?L?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,Ue.width,Ue.height,_e,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,Ne,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,0,0,Ue.width,Ue.height,_e,oe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me,Ne,Ue.width,Ue.height,0,_e,oe,Ue.data)}}}else{if(K=g.mipmaps,L&&ee){K.length>0&&ue++;const q=ut(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ne,q.width,q.height)}for(let q=0;q<6;q++)if(Q){L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ce[q].width,ce[q].height,_e,oe,ce[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,ce[q].width,ce[q].height,0,_e,oe,ce[q].data);for(let me=0;me<K.length;me++){const nt=K[me].image[q].image;L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,nt.width,nt.height,_e,oe,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,Ne,nt.width,nt.height,0,_e,oe,nt.data)}}else{L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,_e,oe,ce[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Ne,_e,oe,ce[q]);for(let me=0;me<K.length;me++){const Ue=K[me];L?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,0,0,_e,oe,Ue.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,me+1,Ne,_e,oe,Ue.image[q])}}}f(g)&&d(n.TEXTURE_CUBE_MAP),z.__version=Z.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ce(S,g,O,V,Z,z){const xe=r.convert(O.format,O.colorSpace),te=r.convert(O.type),ge=w(O.internalFormat,xe,te,O.colorSpace),ve=i.get(g),Q=i.get(O);if(Q.__renderTarget=g,!ve.__hasExternalTextures){const ce=Math.max(1,g.width>>z),Le=Math.max(1,g.height>>z);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,ge,ce,Le,g.depth,0,xe,te,null):t.texImage2D(Z,z,ge,ce,Le,0,xe,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),fe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,Q.__webglTexture,0,rt(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,Q.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(S,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const V=g.depthTexture,Z=V&&V.isDepthTexture?V.type:null,z=E(g.stencilBuffer,Z),xe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=rt(g);fe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,z,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,S)}else{const V=g.textures;for(let Z=0;Z<V.length;Z++){const z=V[Z],xe=r.convert(z.format,z.colorSpace),te=r.convert(z.type),ge=w(z.internalFormat,xe,te,z.colorSpace),ve=rt(g);O&&fe(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,g.width,g.height):fe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ge,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ge,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const Z=V.__webglTexture,z=rt(g);if(g.depthTexture.format===Ms)fe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(g.depthTexture.format===ys)fe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function dt(S){const g=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=V}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=S.texture.mipmaps;V&&V.length>0?Ie(g.__webglFramebuffer[0],S):Ie(g.__webglFramebuffer,S)}else if(O){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),Re(g.__webglDepthbuffer[V],S,!1);else{const Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}else{const V=S.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Re(g.__webglDepthbuffer,S,!1);else{const Z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(S,g,O){const V=i.get(S);g!==void 0&&Ce(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&dt(S)}function T(S){const g=S.texture,O=i.get(S),V=i.get(g);S.addEventListener("dispose",R);const Z=S.textures,z=S.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,a.memory.textures++),z){O.__webglFramebuffer=[];for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[te]=[];for(let ge=0;ge<g.mipmaps.length;ge++)O.__webglFramebuffer[te][ge]=n.createFramebuffer()}else O.__webglFramebuffer[te]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)O.__webglFramebuffer[te]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xe)for(let te=0,ge=Z.length;te<ge;te++){const ve=i.get(Z[te]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&fe(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){const ge=Z[te];O.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[te]);const ve=r.convert(ge.format,ge.colorSpace),Q=r.convert(ge.type),ce=w(ge.internalFormat,ve,Q,ge.colorSpace,S.isXRRenderTarget===!0),Le=rt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ce,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,O.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ke(n.TEXTURE_CUBE_MAP,g);for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Ce(O.__webglFramebuffer[te][ge],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge);else Ce(O.__webglFramebuffer[te],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);f(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let te=0,ge=Z.length;te<ge;te++){const ve=Z[te],Q=i.get(ve);let ce=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ce=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Q.__webglTexture),ke(ce,ve),Ce(O.__webglFramebuffer,S,ve,n.COLOR_ATTACHMENT0+te,ce,0),f(ve)&&d(ce)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(te=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,V.__webglTexture),ke(te,g),g.mipmaps&&g.mipmaps.length>0)for(let ge=0;ge<g.mipmaps.length;ge++)Ce(O.__webglFramebuffer[ge],S,g,n.COLOR_ATTACHMENT0,te,ge);else Ce(O.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,te,0);f(g)&&d(te),t.unbindTexture()}S.depthBuffer&&dt(S)}function tt(S){const g=S.textures;for(let O=0,V=g.length;O<V;O++){const Z=g[O];if(f(Z)){const z=A(S),xe=i.get(Z).__webglTexture;t.bindTexture(z,xe),d(z),t.unbindTexture()}}}const Se=[],Ye=[];function Ee(S){if(S.samples>0){if(fe(S)===!1){const g=S.textures,O=S.width,V=S.height;let Z=n.COLOR_BUFFER_BIT;const z=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(S),te=g.length>1;if(te)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ge=S.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Q=i.get(g[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,O,V,0,0,O,V,Z,n.NEAREST),c===!0&&(Se.length=0,Ye.length=0,Se.push(n.COLOR_ATTACHMENT0+ve),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Se.push(z),Ye.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ye)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,xe.__webglColorRenderbuffer[ve]);const Q=i.get(g[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function rt(S){return Math.min(s.maxSamples,S.samples)}function fe(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Be(S){const g=a.render.frame;h.get(S)!==g&&(h.set(S,g),S.update())}function _t(S,g){const O=S.colorSpace,V=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==ui&&O!==Fn&&(Ge.getTransfer(O)===Je?(V!==tn||Z!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function ut(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Ve,this.setupRenderTarget=T,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=fe}function F0(n,e){function t(i,s=Fn){let r;const a=Ge.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Io)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.BYTE;if(i===Lc)return n.SHORT;if(i===xs)return n.UNSIGNED_SHORT;if(i===Do)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Rs)return n.HALF_FLOAT;if(i===Ic)return n.ALPHA;if(i===Uc)return n.RGB;if(i===tn)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===ys)return n.DEPTH_STENCIL;if(i===Nc)return n.RED;if(i===No)return n.RED_INTEGER;if(i===Oc)return n.RG;if(i===Oo)return n.RG_INTEGER;if(i===Fo)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===Ha||i===Va||i===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===Xa||i===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wa||i===Xa)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qa||i===ja||i===$a||i===Za||i===Ka||i===Ja||i===Qa||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===no)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===io)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===so)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ro)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ao)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vr||i===oo||i===lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vr)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fc||i===co||i===ho||i===uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Es?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class eh extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
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

}`;class z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rn({vertexShader:k0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Ds(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends Wi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,x=null;const _=new z0,f={},d=t.getContextAttributes();let A=null,w=null;const E=[],C=[],P=new qe;let R=null;const N=new jt;N.viewport=new ft;const y=new jt;y.viewport=new ft;const M=[N,y],b=new om;let W=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ae=E[G];return ae===void 0&&(ae=new va,E[G]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(G){let ae=E[G];return ae===void 0&&(ae=new va,E[G]=ae),ae.getGripSpace()},this.getHand=function(G){let ae=E[G];return ae===void 0&&(ae=new va,E[G]=ae),ae.getHandSpace()};function X(G){const ae=C.indexOf(G.inputSource);if(ae===-1)return;const ne=E[ae];ne!==void 0&&(ne.update(G.inputSource,G.frame,l||a),ne.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Y);for(let G=0;G<E.length;G++){const ae=C[G];ae!==null&&(C[G]=null,E[G].disconnect(ae))}W=null,H=null,_.reset();for(const G in f)delete f[G];e.setRenderTarget(A),m=null,p=null,u=null,s=null,w=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Ce=null,Re=null;d.depth&&(Re=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=d.stencil?ys:Ms,Ce=d.stencil?Es:di);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};p=u.createProjectionLayer(Ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new qn(p.textureWidth,p.textureHeight,{format:tn,type:Cn,depthTexture:new jc(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ne={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new qn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(G){for(let ae=0;ae<G.removed.length;ae++){const ne=G.removed[ae],Ce=C.indexOf(ne);Ce>=0&&(C[Ce]=null,E[Ce].disconnect(ne))}for(let ae=0;ae<G.added.length;ae++){const ne=G.added[ae];let Ce=C.indexOf(ne);if(Ce===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=C.length){C.push(ne),Ce=Ie;break}else if(C[Ie]===null){C[Ie]=ne,Ce=Ie;break}if(Ce===-1)break}const Re=E[Ce];Re&&Re.connect(ne)}}const $=new U,B=new U;function re(G,ae,ne){$.setFromMatrixPosition(ae.matrixWorld),B.setFromMatrixPosition(ne.matrixWorld);const Ce=$.distanceTo(B),Re=ae.projectionMatrix.elements,Ie=ne.projectionMatrix.elements,dt=Re[14]/(Re[10]-1),Ve=Re[14]/(Re[10]+1),T=(Re[9]+1)/Re[5],tt=(Re[9]-1)/Re[5],Se=(Re[8]-1)/Re[0],Ye=(Ie[8]+1)/Ie[0],Ee=dt*Se,rt=dt*Ye,fe=Ce/(-Se+Ye),Be=fe*-Se;if(ae.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Be),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy(ae.projectionMatrix),G.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const _t=dt+fe,ut=Ve+fe,S=Ee-Be,g=rt+(Ce-Be),O=T*Ve/ut*_t,V=tt*Ve/ut*_t;G.projectionMatrix.makePerspective(S,g,O,V,_t,ut),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function he(G,ae){ae===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ae.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let ae=G.near,ne=G.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),b.near=y.near=N.near=ae,b.far=y.far=N.far=ne,(W!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),W=b.near,H=b.far),b.layers.mask=G.layers.mask|6,N.layers.mask=b.layers.mask&3,y.layers.mask=b.layers.mask&5;const Ce=G.parent,Re=b.cameras;he(b,Ce);for(let Ie=0;Ie<Re.length;Ie++)he(Re[Ie],Ce);Re.length===2?re(b,N,y):b.projectionMatrix.copy(N.projectionMatrix),Me(G,b,Ce)};function Me(G,ae,ne){ne===null?G.matrix.copy(ae.matrixWorld):(G.matrix.copy(ne.matrixWorld),G.matrix.invert(),G.matrix.multiply(ae.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ae.projectionMatrix),G.projectionMatrixInverse.copy(ae.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ss*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(G){c=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)},this.getCameraTexture=function(G){return f[G]};let ke=null;function st(G,ae){if(h=ae.getViewerPose(l||a),x=ae,h!==null){const ne=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Ce=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,Ce=!0);for(let Ve=0;Ve<ne.length;Ve++){const T=ne[Ve];let tt=null;if(m!==null)tt=m.getViewport(T);else{const Ye=u.getViewSubImage(p,T);tt=Ye.viewport,Ve===0&&(e.setRenderTargetTextures(w,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(w))}let Se=M[Ve];Se===void 0&&(Se=new jt,Se.layers.enable(Ve),Se.viewport=new ft,M[Ve]=Se),Se.matrix.fromArray(T.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(T.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(tt.x,tt.y,tt.width,tt.height),Ve===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ce===!0&&b.cameras.push(Se)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ve=u.getDepthInformation(ne[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(Ve,s.renderState)}if(Re&&Re.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Ve=0;Ve<ne.length;Ve++){const T=ne[Ve].camera;if(T){let tt=f[T];tt||(tt=new eh,f[T]=tt);const Se=u.getCameraImage(T);tt.sourceTexture=Se}}}for(let ne=0;ne<E.length;ne++){const Ce=C[ne],Re=E[ne];Ce!==null&&Re!==void 0&&Re.update(Ce,ae,l||a)}ke&&ke(G,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Qe=new $c;Qe.setAnimationLoop(st),this.setAnimationLoop=function(G){ke=G},this.dispose=function(){}}}const si=new fn,V0=new ct;function G0(n,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function i(f,d){d.color.getRGB(f.fogColor.value,Xc(n)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,A,w,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),u(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&m(f,d,E)):d.isMeshMatcapMaterial?(r(f,d),x(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?c(f,d,A,w):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===It&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===It&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const A=e.get(d),w=A.envMap,E=A.envMapRotation;w&&(f.envMap.value=w,si.copy(E),si.x*=-1,si.y*=-1,si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),f.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(si)),f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function c(f,d,A,w){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*A,f.scale.value=w*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,A){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===It&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=A.texture,f.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){const A=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(A.matrixWorld),f.nearDistance.value=A.shadow.camera.near,f.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,w){const E=w.program;i.uniformBlockBinding(A,E)}function l(A,w){let E=s[A.id];E===void 0&&(x(A),E=h(A),s[A.id]=E,A.addEventListener("dispose",f));const C=w.program;i.updateUBOMapping(A,C);const P=e.render.frame;r[A.id]!==P&&(p(A),r[A.id]=P)}function h(A){const w=u();A.__bindingPointIndex=w;const E=n.createBuffer(),C=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,E),E}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const w=s[A.id],E=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let P=0,R=E.length;P<R;P++){const N=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,M=N.length;y<M;y++){const b=N[y];if(m(b,P,y,C)===!0){const W=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let j=0;j<H.length;j++){const Y=H[j],$=_(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,W+X,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,w,E,C){const P=A.value,R=w+"_"+E;if(C[R]===void 0)return typeof P=="number"||typeof P=="boolean"?C[R]=P:C[R]=P.clone(),!0;{const N=C[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function x(A){const w=A.uniforms;let E=0;const C=16;for(let R=0,N=w.length;R<N;R++){const y=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,b=y.length;M<b;M++){const W=y[M],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,j=H.length;X<j;X++){const Y=H[X],$=_(Y),B=E%C,re=B%$.boundary,he=B+re;E+=re,he!==0&&C-he<$.storage&&(E+=C-he),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=$.storage}}}const P=E%C;return P>0&&(E+=C-P),A.__size=E,A.__cache={},this}function _(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function f(A){const w=A.target;w.removeEventListener("dispose",f);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class X0{constructor(e={}){const{canvas:t=Sp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const A=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let C=!1;this._outputColorSpace=qt;let P=0,R=0,N=null,y=-1,M=null;const b=new ft,W=new ft;let H=null;const X=new Ze(0);let j=0,Y=t.width,$=t.height,B=1,re=null,he=null;const Me=new ft(0,0,Y,$),ke=new ft(0,0,Y,$);let st=!1;const Qe=new Vo;let G=!1,ae=!1;const ne=new ct,Ce=new U,Re=new ft,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Ve(){return N===null?B:1}let T=i;function tt(v,D){return t.getContext(v,D)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",K,!1),T===null){const D="webgl2";if(T=tt(D,v),T===null)throw tt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Se,Ye,Ee,rt,fe,Be,_t,ut,S,g,O,V,Z,z,xe,te,ge,ve,Q,ce,Le,_e,oe,Ne;function L(){Se=new t_(T),Se.init(),_e=new F0(T,Se),Ye=new jv(T,Se,e,_e),Ee=new N0(T,Se),Ye.reversedDepthBuffer&&p&&Ee.buffers.depth.setReversed(!0),rt=new s_(T),fe=new y0,Be=new O0(T,Se,Ee,fe,Ye,_e,rt),_t=new Zv(E),ut=new e_(E),S=new hm(T),oe=new Yv(T,S),g=new n_(T,S,rt,oe),O=new a_(T,g,S,rt),Q=new r_(T,Ye,Be),te=new $v(fe),V=new M0(E,_t,ut,Se,Ye,oe,te),Z=new G0(E,fe),z=new w0,xe=new P0(Se),ve=new Xv(E,_t,ut,Ee,O,m,c),ge=new I0(E,O,Ye),Ne=new W0(T,rt,Ye,Ee),ce=new qv(T,Se,rt),Le=new i_(T,Se,rt),rt.programs=V.programs,E.capabilities=Ye,E.extensions=Se,E.properties=fe,E.renderLists=z,E.shadowMap=ge,E.state=Ee,E.info=rt}L();const ee=new H0(E,T);this.xr=ee,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const v=Se.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Se.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(v){v!==void 0&&(B=v,this.setSize(Y,$,!1))},this.getSize=function(v){return v.set(Y,$)},this.setSize=function(v,D,F=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=v,$=D,t.width=Math.floor(v*B),t.height=Math.floor(D*B),F===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Y*B,$*B).floor()},this.setDrawingBufferSize=function(v,D,F){Y=v,$=D,B=F,t.width=Math.floor(v*F),t.height=Math.floor(D*F),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(b)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,D,F,k){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,D,F,k),Ee.viewport(b.copy(Me).multiplyScalar(B).round())},this.getScissor=function(v){return v.copy(ke)},this.setScissor=function(v,D,F,k){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,D,F,k),Ee.scissor(W.copy(ke).multiplyScalar(B).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){Ee.setScissorTest(st=v)},this.setOpaqueSort=function(v){re=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,F=!0){let k=0;if(v){let I=!1;if(N!==null){const J=N.texture.format;I=J===Fo||J===Oo||J===No}if(I){const J=N.texture.type,le=J===Cn||J===di||J===xs||J===Es||J===Io||J===Uo,pe=ve.getClearColor(),de=ve.getClearAlpha(),Pe=pe.r,De=pe.g,ye=pe.b;le?(x[0]=Pe,x[1]=De,x[2]=ye,x[3]=de,T.clearBufferuiv(T.COLOR,0,x)):(_[0]=Pe,_[1]=De,_[2]=ye,_[3]=de,T.clearBufferiv(T.COLOR,0,_))}else k|=T.COLOR_BUFFER_BIT}D&&(k|=T.DEPTH_BUFFER_BIT),F&&(k|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",K,!1),ve.dispose(),z.dispose(),xe.dispose(),fe.dispose(),_t.dispose(),ut.dispose(),O.dispose(),oe.dispose(),Ne.dispose(),V.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",rn),ee.removeEventListener("sessionend",al),Kn.stop()};function ie(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=rt.autoReset,D=ge.enabled,F=ge.autoUpdate,k=ge.needsUpdate,I=ge.type;L(),rt.autoReset=v,ge.enabled=D,ge.autoUpdate=F,ge.needsUpdate=k,ge.type=I}function K(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function q(v){const D=v.target;D.removeEventListener("dispose",q),me(D)}function me(v){Ue(v),fe.remove(v)}function Ue(v){const D=fe.get(v).programs;D!==void 0&&(D.forEach(function(F){V.releaseProgram(F)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,F,k,I,J){D===null&&(D=Ie);const le=I.isMesh&&I.matrixWorld.determinant()<0,pe=pf(v,D,F,k,I);Ee.setMaterial(k,le);let de=F.index,Pe=1;if(k.wireframe===!0){if(de=g.getWireframeAttribute(F),de===void 0)return;Pe=2}const De=F.drawRange,ye=F.attributes.position;let ze=De.start*Pe,Ke=(De.start+De.count)*Pe;J!==null&&(ze=Math.max(ze,J.start*Pe),Ke=Math.min(Ke,(J.start+J.count)*Pe)),de!==null?(ze=Math.max(ze,0),Ke=Math.min(Ke,de.count)):ye!=null&&(ze=Math.max(ze,0),Ke=Math.min(Ke,ye.count));const ht=Ke-ze;if(ht<0||ht===1/0)return;oe.setup(I,k,pe,F,de);let it,et=ce;if(de!==null&&(it=S.get(de),et=Le,et.setIndex(it)),I.isMesh)k.wireframe===!0?(Ee.setLineWidth(k.wireframeLinewidth*Ve()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(I.isLine){let we=k.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*Ve()),I.isLineSegments?et.setMode(T.LINES):I.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else I.isPoints?et.setMode(T.POINTS):I.isSprite&&et.setMode(T.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))et.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,ot=I._multiDrawCounts,Xe=I._multiDrawCount,Ot=de?S.get(de).bytesPerElement:1,mi=fe.get(k).currentProgram.getUniforms();for(let Ft=0;Ft<Xe;Ft++)mi.setValue(T,"_gl_DrawID",Ft),et.render(we[Ft]/Ot,ot[Ft])}else if(I.isInstancedMesh)et.renderInstances(ze,ht,I.count);else if(F.isInstancedBufferGeometry){const we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ot=Math.min(F.instanceCount,we);et.renderInstances(ze,ht,ot)}else et.render(ze,ht)};function nt(v,D,F){v.transparent===!0&&v.side===Sn&&v.forceSinglePass===!1?(v.side=It,v.needsUpdate=!0,Hs(v,D,F),v.side=Yn,v.needsUpdate=!0,Hs(v,D,F),v.side=Sn):Hs(v,D,F)}this.compile=function(v,D,F=null){F===null&&(F=v),d=xe.get(F),d.init(D),w.push(d),F.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),v!==F&&v.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();const k=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let le=0;le<J.length;le++){const pe=J[le];nt(pe,F,I),k.add(pe)}else nt(J,F,I),k.add(J)}),d=w.pop(),k},this.compileAsync=function(v,D,F=null){const k=this.compile(v,D,F);return new Promise(I=>{function J(){if(k.forEach(function(le){fe.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){I(v);return}setTimeout(J,10)}Se.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let je=null;function mn(v){je&&je(v)}function rn(){Kn.stop()}function al(){Kn.start()}const Kn=new $c;Kn.setAnimationLoop(mn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(v){je=v,ee.setAnimationLoop(v),v===null?Kn.stop():Kn.start()},ee.addEventListener("sessionstart",rn),ee.addEventListener("sessionend",al),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(D),D=ee.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,D,N),d=xe.get(v,w.length),d.init(D),w.push(d),ne.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(ne,cn,D.reversedDepth),ae=this.localClippingEnabled,G=te.init(this.clippingPlanes,ae),f=z.get(v,A.length),f.init(),A.push(f),ee.enabled===!0&&ee.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&jr(J,D,-1/0,E.sortObjects)}jr(v,D,0,E.sortObjects),f.finish(),E.sortObjects===!0&&f.sort(re,he),dt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,dt&&ve.addToRenderList(f,v),this.info.render.frame++,G===!0&&te.beginShadows();const F=d.state.shadowsArray;ge.render(F,v,D),G===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=f.opaque,I=f.transmissive;if(d.setupLights(),D.isArrayCamera){const J=D.cameras;if(I.length>0)for(let le=0,pe=J.length;le<pe;le++){const de=J[le];ll(k,I,v,de)}dt&&ve.render(v);for(let le=0,pe=J.length;le<pe;le++){const de=J[le];ol(f,v,de,de.viewport)}}else I.length>0&&ll(k,I,v,D),dt&&ve.render(v),ol(f,v,D);N!==null&&R===0&&(Be.updateMultisampleRenderTarget(N),Be.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,D),oe.resetDefaultState(),y=-1,M=null,w.pop(),w.length>0?(d=w[w.length-1],G===!0&&te.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?f=A[A.length-1]:f=null};function jr(v,D,F,k){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){k&&Re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ne);const le=O.update(v),pe=v.material;pe.visible&&f.push(v,le,pe,F,Re.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){const le=O.update(v),pe=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Re.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Re.copy(le.boundingSphere.center)),Re.applyMatrix4(v.matrixWorld).applyMatrix4(ne)),Array.isArray(pe)){const de=le.groups;for(let Pe=0,De=de.length;Pe<De;Pe++){const ye=de[Pe],ze=pe[ye.materialIndex];ze&&ze.visible&&f.push(v,le,ze,F,Re.z,ye)}}else pe.visible&&f.push(v,le,pe,F,Re.z,null)}}const J=v.children;for(let le=0,pe=J.length;le<pe;le++)jr(J[le],D,F,k)}function ol(v,D,F,k){const I=v.opaque,J=v.transmissive,le=v.transparent;d.setupLightsView(F),G===!0&&te.setGlobalState(E.clippingPlanes,F),k&&Ee.viewport(b.copy(k)),I.length>0&&zs(I,D,F),J.length>0&&zs(J,D,F),le.length>0&&zs(le,D,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ll(v,D,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new qn(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Rs:Cn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const J=d.state.transmissionRenderTarget[k.id],le=k.viewport||b;J.setSize(le.z*E.transmissionResolutionScale,le.w*E.transmissionResolutionScale);const pe=E.getRenderTarget(),de=E.getActiveCubeFace(),Pe=E.getActiveMipmapLevel();E.setRenderTarget(J),E.getClearColor(X),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),E.clear(),dt&&ve.render(F);const De=E.toneMapping;E.toneMapping=Hn;const ye=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),G===!0&&te.setGlobalState(E.clippingPlanes,k),zs(v,F,k),Be.updateMultisampleRenderTarget(J),Be.updateRenderTargetMipmap(J),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ke=0,ht=D.length;Ke<ht;Ke++){const it=D[Ke],et=it.object,we=it.geometry,ot=it.material,Xe=it.group;if(ot.side===Sn&&et.layers.test(k.layers)){const Ot=ot.side;ot.side=It,ot.needsUpdate=!0,cl(et,F,k,we,ot,Xe),ot.side=Ot,ot.needsUpdate=!0,ze=!0}}ze===!0&&(Be.updateMultisampleRenderTarget(J),Be.updateRenderTargetMipmap(J))}E.setRenderTarget(pe,de,Pe),E.setClearColor(X,j),ye!==void 0&&(k.viewport=ye),E.toneMapping=De}function zs(v,D,F){const k=D.isScene===!0?D.overrideMaterial:null;for(let I=0,J=v.length;I<J;I++){const le=v[I],pe=le.object,de=le.geometry,Pe=le.group;let De=le.material;De.allowOverride===!0&&k!==null&&(De=k),pe.layers.test(F.layers)&&cl(pe,D,F,de,De,Pe)}}function cl(v,D,F,k,I,J){v.onBeforeRender(E,D,F,k,I,J),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(E,D,F,k,v,J),I.transparent===!0&&I.side===Sn&&I.forceSinglePass===!1?(I.side=It,I.needsUpdate=!0,E.renderBufferDirect(F,D,k,I,v,J),I.side=Yn,I.needsUpdate=!0,E.renderBufferDirect(F,D,k,I,v,J),I.side=Sn):E.renderBufferDirect(F,D,k,I,v,J),v.onAfterRender(E,D,F,k,I,J)}function Hs(v,D,F){D.isScene!==!0&&(D=Ie);const k=fe.get(v),I=d.state.lights,J=d.state.shadowsArray,le=I.state.version,pe=V.getParameters(v,I.state,J,D,F),de=V.getProgramCacheKey(pe);let Pe=k.programs;k.environment=v.isMeshStandardMaterial?D.environment:null,k.fog=D.fog,k.envMap=(v.isMeshStandardMaterial?ut:_t).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",q),Pe=new Map,k.programs=Pe);let De=Pe.get(de);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===le)return dl(v,pe),De}else pe.uniforms=V.getUniforms(v),v.onBeforeCompile(pe,E),De=V.acquireProgram(pe,de),Pe.set(de,De),k.uniforms=pe.uniforms;const ye=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=te.uniform),dl(v,pe),k.needsLights=gf(v),k.lightsStateVersion=le,k.needsLights&&(ye.ambientLightColor.value=I.state.ambient,ye.lightProbe.value=I.state.probe,ye.directionalLights.value=I.state.directional,ye.directionalLightShadows.value=I.state.directionalShadow,ye.spotLights.value=I.state.spot,ye.spotLightShadows.value=I.state.spotShadow,ye.rectAreaLights.value=I.state.rectArea,ye.ltc_1.value=I.state.rectAreaLTC1,ye.ltc_2.value=I.state.rectAreaLTC2,ye.pointLights.value=I.state.point,ye.pointLightShadows.value=I.state.pointShadow,ye.hemisphereLights.value=I.state.hemi,ye.directionalShadowMap.value=I.state.directionalShadowMap,ye.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ye.spotShadowMap.value=I.state.spotShadowMap,ye.spotLightMatrix.value=I.state.spotLightMatrix,ye.spotLightMap.value=I.state.spotLightMap,ye.pointShadowMap.value=I.state.pointShadowMap,ye.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function hl(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=_r.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function dl(v,D){const F=fe.get(v);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function pf(v,D,F,k,I){D.isScene!==!0&&(D=Ie),Be.resetTextureUnits();const J=D.fog,le=k.isMeshStandardMaterial?D.environment:null,pe=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ui,de=(k.isMeshStandardMaterial?ut:_t).get(k.envMap||le),Pe=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!F.morphAttributes.position,ze=!!F.morphAttributes.normal,Ke=!!F.morphAttributes.color;let ht=Hn;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ht=E.toneMapping);const it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,et=it!==void 0?it.length:0,we=fe.get(k),ot=d.state.lights;if(G===!0&&(ae===!0||v!==M)){const Ct=v===M&&k.id===y;te.setState(k,v,Ct)}let Xe=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ot.state.version||we.outputColorSpace!==pe||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==de||k.fog===!0&&we.fog!==J||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==te.numPlanes||we.numIntersection!==te.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==De||we.morphTargets!==ye||we.morphNormals!==ze||we.morphColors!==Ke||we.toneMapping!==ht||we.morphTargetsCount!==et)&&(Xe=!0):(Xe=!0,we.__version=k.version);let Ot=we.currentProgram;Xe===!0&&(Ot=Hs(k,D,I));let mi=!1,Ft=!1,ji=!1;const lt=Ot.getUniforms(),Gt=we.uniforms;if(Ee.useProgram(Ot.program)&&(mi=!0,Ft=!0,ji=!0),k.id!==y&&(y=k.id,Ft=!0),mi||M!==v){Ee.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(T,"projectionMatrix",v.projectionMatrix),lt.setValue(T,"viewMatrix",v.matrixWorldInverse);const Dt=lt.map.cameraPosition;Dt!==void 0&&Dt.setValue(T,Ce.setFromMatrixPosition(v.matrixWorld)),Ye.logarithmicDepthBuffer&&lt.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Ft=!0,ji=!0)}if(I.isSkinnedMesh){lt.setOptional(T,I,"bindMatrix"),lt.setOptional(T,I,"bindMatrixInverse");const Ct=I.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),lt.setValue(T,"boneTexture",Ct.boneTexture,Be))}I.isBatchedMesh&&(lt.setOptional(T,I,"batchingTexture"),lt.setValue(T,"batchingTexture",I._matricesTexture,Be),lt.setOptional(T,I,"batchingIdTexture"),lt.setValue(T,"batchingIdTexture",I._indirectTexture,Be),lt.setOptional(T,I,"batchingColorTexture"),I._colorsTexture!==null&&lt.setValue(T,"batchingColorTexture",I._colorsTexture,Be));const Wt=F.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Q.update(I,F,Ot),(Ft||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,lt.setValue(T,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gt.envMap.value=de,Gt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&D.environment!==null&&(Gt.envMapIntensity.value=D.environmentIntensity),Ft&&(lt.setValue(T,"toneMappingExposure",E.toneMappingExposure),we.needsLights&&mf(Gt,ji),J&&k.fog===!0&&Z.refreshFogUniforms(Gt,J),Z.refreshMaterialUniforms(Gt,k,B,$,d.state.transmissionRenderTarget[v.id]),_r.upload(T,hl(we),Gt,Be)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(_r.upload(T,hl(we),Gt,Be),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(T,"center",I.center),lt.setValue(T,"modelViewMatrix",I.modelViewMatrix),lt.setValue(T,"normalMatrix",I.normalMatrix),lt.setValue(T,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ct=k.uniformsGroups;for(let Dt=0,$r=Ct.length;Dt<$r;Dt++){const Jn=Ct[Dt];Ne.update(Jn,Ot),Ne.bind(Jn,Ot)}}return Ot}function mf(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function gf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,D,F){const k=fe.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),fe.get(v.texture).__webglTexture=D,fe.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:F,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const F=fe.get(v);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};const vf=T.createFramebuffer();this.setRenderTarget=function(v,D=0,F=0){N=v,P=D,R=F;let k=!0,I=null,J=!1,le=!1;if(v){const de=fe.get(v);if(de.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(T.FRAMEBUFFER,null),k=!1;else if(de.__webglFramebuffer===void 0)Be.setupRenderTarget(v);else if(de.__hasExternalTextures)Be.rebindTextures(v,fe.get(v.texture).__webglTexture,fe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(de.__boundDepthTexture!==ye){if(ye!==null&&fe.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const De=fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(De[D])?I=De[D][F]:I=De[D],J=!0):v.samples>0&&Be.useMultisampledRTT(v)===!1?I=fe.get(v).__webglMultisampledFramebuffer:Array.isArray(De)?I=De[F]:I=De,b.copy(v.viewport),W.copy(v.scissor),H=v.scissorTest}else b.copy(Me).multiplyScalar(B).floor(),W.copy(ke).multiplyScalar(B).floor(),H=st;if(F!==0&&(I=vf),Ee.bindFramebuffer(T.FRAMEBUFFER,I)&&k&&Ee.drawBuffers(v,I),Ee.viewport(b),Ee.scissor(W),Ee.setScissorTest(H),J){const de=fe.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,F)}else if(le){const de=D;for(let Pe=0;Pe<v.textures.length;Pe++){const De=fe.get(v.textures[Pe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Pe,De.__webglTexture,F,de)}}else if(v!==null&&F!==0){const de=fe.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,de.__webglTexture,F)}y=-1},this.readRenderTargetPixels=function(v,D,F,k,I,J,le,pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){Ee.bindFramebuffer(T.FRAMEBUFFER,de);try{const Pe=v.textures[pe],De=Pe.format,ye=Pe.type;if(!Ye.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-k&&F>=0&&F<=v.height-I&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+pe),T.readPixels(D,F,k,I,_e.convert(De),_e.convert(ye),J))}finally{const Pe=N!==null?fe.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(T.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,D,F,k,I,J,le,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(D>=0&&D<=v.width-k&&F>=0&&F<=v.height-I){Ee.bindFramebuffer(T.FRAMEBUFFER,de);const Pe=v.textures[pe],De=Pe.format,ye=Pe.type;if(!Ye.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.bufferData(T.PIXEL_PACK_BUFFER,J.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+pe),T.readPixels(D,F,k,I,_e.convert(De),_e.convert(ye),0);const Ke=N!==null?fe.get(N).__webglFramebuffer:null;Ee.bindFramebuffer(T.FRAMEBUFFER,Ke);const ht=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await wp(T,ht,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ze),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,J),T.deleteBuffer(ze),T.deleteSync(ht),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,F=0){const k=Math.pow(2,-F),I=Math.floor(v.image.width*k),J=Math.floor(v.image.height*k),le=D!==null?D.x:0,pe=D!==null?D.y:0;Be.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,le,pe,I,J),Ee.unbindTexture()};const _f=T.createFramebuffer(),xf=T.createFramebuffer();this.copyTextureToTexture=function(v,D,F=null,k=null,I=0,J=null){J===null&&(I!==0?(Fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let le,pe,de,Pe,De,ye,ze,Ke,ht;const it=v.isCompressedTexture?v.mipmaps[J]:v.image;if(F!==null)le=F.max.x-F.min.x,pe=F.max.y-F.min.y,de=F.isBox3?F.max.z-F.min.z:1,Pe=F.min.x,De=F.min.y,ye=F.isBox3?F.min.z:0;else{const Wt=Math.pow(2,-I);le=Math.floor(it.width*Wt),pe=Math.floor(it.height*Wt),v.isDataArrayTexture?de=it.depth:v.isData3DTexture?de=Math.floor(it.depth*Wt):de=1,Pe=0,De=0,ye=0}k!==null?(ze=k.x,Ke=k.y,ht=k.z):(ze=0,Ke=0,ht=0);const et=_e.convert(D.format),we=_e.convert(D.type);let ot;D.isData3DTexture?(Be.setTexture3D(D,0),ot=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Be.setTexture2DArray(D,0),ot=T.TEXTURE_2D_ARRAY):(Be.setTexture2D(D,0),ot=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);const Xe=T.getParameter(T.UNPACK_ROW_LENGTH),Ot=T.getParameter(T.UNPACK_IMAGE_HEIGHT),mi=T.getParameter(T.UNPACK_SKIP_PIXELS),Ft=T.getParameter(T.UNPACK_SKIP_ROWS),ji=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,it.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,it.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,De),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ye);const lt=v.isDataArrayTexture||v.isData3DTexture,Gt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Wt=fe.get(v),Ct=fe.get(D),Dt=fe.get(Wt.__renderTarget),$r=fe.get(Ct.__renderTarget);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let Jn=0;Jn<de;Jn++)lt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,fe.get(v).__webglTexture,I,ye+Jn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,fe.get(D).__webglTexture,J,ht+Jn)),T.blitFramebuffer(Pe,De,le,pe,ze,Ke,le,pe,T.DEPTH_BUFFER_BIT,T.NEAREST);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||fe.has(v)){const Wt=fe.get(v),Ct=fe.get(D);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,_f),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,xf);for(let Dt=0;Dt<de;Dt++)lt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Wt.__webglTexture,I,ye+Dt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Wt.__webglTexture,I),Gt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ct.__webglTexture,J,ht+Dt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ct.__webglTexture,J),I!==0?T.blitFramebuffer(Pe,De,le,pe,ze,Ke,le,pe,T.COLOR_BUFFER_BIT,T.NEAREST):Gt?T.copyTexSubImage3D(ot,J,ze,Ke,ht+Dt,Pe,De,le,pe):T.copyTexSubImage2D(ot,J,ze,Ke,Pe,De,le,pe);Ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Gt?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(ot,J,ze,Ke,ht,le,pe,de,et,we,it.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(ot,J,ze,Ke,ht,le,pe,de,et,it.data):T.texSubImage3D(ot,J,ze,Ke,ht,le,pe,de,et,we,it):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,J,ze,Ke,le,pe,et,we,it.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,J,ze,Ke,it.width,it.height,et,it.data):T.texSubImage2D(T.TEXTURE_2D,J,ze,Ke,le,pe,et,we,it);T.pixelStorei(T.UNPACK_ROW_LENGTH,Xe),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ot),T.pixelStorei(T.UNPACK_SKIP_PIXELS,mi),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ft),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ji),J===0&&D.generateMipmaps&&T.generateMipmap(ot),Ee.unbindTexture()},this.copyTextureToTexture3D=function(v,D,F=null,k=null,I=0){return Fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,D,F,k,I)},this.initRenderTarget=function(v){fe.get(v).__webglFramebuffer===void 0&&Be.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Be.setTextureCube(v,0):v.isData3DTexture?Be.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Be.setTexture2DArray(v,0):Be.setTexture2D(v,0),Ee.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,Ee.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}var Y0=Object.defineProperty,Xo=(n,e)=>{for(var t in e)Y0(n,t,{get:e[t],enumerable:!0})},bn={};Xo(bn,{ACTIONS:()=>ah,ANIMATION_MIN_DURATION:()=>go,CAPTURE_EVENTS_CLASS:()=>Us,CTRLZOOM_TIMEOUT:()=>rh,DBLCLICK_DELAY:()=>nh,EASINGS:()=>xr,ICONS:()=>sn,IDS:()=>yt,KEY_CODES:()=>Et,LONGTOUCH_DELAY:()=>ih,MOVE_THRESHOLD:()=>th,SPHERE_RADIUS:()=>fi,TWOFINGERSOVERLAY_DELAY:()=>sh,VIEWER_DATA:()=>jn});var q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,j0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',$0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,Z0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,K0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,J0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,Q0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,ex=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,tx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,go=500,th=4,nh=300,ih=500,sh=100,rh=2e3,fi=10,jn="photoSphereViewer",Us="psv--capture-event",ah=(n=>(n.ROTATE_UP="ROTATE_UP",n.ROTATE_DOWN="ROTATE_DOWN",n.ROTATE_RIGHT="ROTATE_RIGHT",n.ROTATE_LEFT="ROTATE_LEFT",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n))(ah||{}),yt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Et={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},sn={arrow:q0,close:j0,download:$0,fullscreenIn:Z0,fullscreenOut:K0,info:J0,menu:Q0,zoomIn:ex,zoomOut:tx},xr={linear:n=>n,inQuad:n=>n*n,outQuad:n=>n*(2-n),inOutQuad:n=>n<.5?2*n*n:-1+(4-2*n)*n,inCubic:n=>n*n*n,outCubic:n=>--n*n*n+1,inOutCubic:n=>n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1,inQuart:n=>n*n*n*n,outQuart:n=>1- --n*n*n*n,inOutQuart:n=>n<.5?8*n*n*n*n:1-8*--n*n*n*n,inQuint:n=>n*n*n*n*n,outQuint:n=>1+--n*n*n*n*n,inOutQuint:n=>n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n,inSine:n=>1-Math.cos(n*(Math.PI/2)),outSine:n=>Math.sin(n*(Math.PI/2)),inOutSine:n=>.5-.5*Math.cos(Math.PI*n),inExpo:n=>Math.pow(2,10*(n-1)),outExpo:n=>1-Math.pow(2,-10*n),inOutExpo:n=>(n=n*2-1)<0?.5*Math.pow(2,10*n):1-.5*Math.pow(2,-10*n),inCirc:n=>1-Math.sqrt(1-n*n),outCirc:n=>Math.sqrt(1-(n-1)*(n-1)),inOutCirc:n=>(n*=2)<1?.5-.5*Math.sqrt(1-n*n):.5+.5*Math.sqrt(1-(n-=2)*n)},Te={};Xo(Te,{Animation:()=>Cr,Dynamic:()=>ns,MultiDynamic:()=>Rh,PressHandler:()=>zr,Slider:()=>Lh,SliderDirection:()=>Ph,addClasses:()=>Yo,angle:()=>lh,applyEulerInverse:()=>Mo,checkClosedShadowDom:()=>Ah,checkStylesheet:()=>Th,checkVersion:()=>Jo,cleanCssPosition:()=>wh,clone:()=>Fr,createTexture:()=>Eo,cssPositionIsOrdered:()=>Ko,dasherize:()=>ax,deepEqual:()=>Mh,deepmerge:()=>xh,distance:()=>oh,exitFullscreen:()=>vh,firstNonNull:()=>On,getAbortError:()=>_o,getAngle:()=>hh,getClosest:()=>uh,getConfigParser:()=>Br,getElement:()=>dh,getEventTarget:()=>wr,getMatchingTarget:()=>fh,getPosition:()=>ph,getShortestArc:()=>ch,getStyleProperty:()=>hn,getTouchData:()=>vo,getXMPValue:()=>zt,greatArcDistance:()=>ix,hasParent:()=>rx,invertResolvableBoolean:()=>kr,isAbortError:()=>Sh,isEmpty:()=>Eh,isExtendedPosition:()=>Zo,isFullscreenEnabled:()=>mh,isNil:()=>Mt,isPlainObject:()=>jo,keyPressMatch:()=>qo,logWarn:()=>St,mergePanoData:()=>Ch,parseAngle:()=>on,parsePoint:()=>ox,parseSpeed:()=>bh,removeClasses:()=>sx,requestFullscreen:()=>gh,resolveBoolean:()=>$o,speedToDuration:()=>xo,sum:()=>nx,throttle:()=>_h,toggleClass:()=>Or,wrap:()=>rs});function rs(n,e){let t=n%e;return t<0&&(t+=e),t}function nx(n){return n.reduce((e,t)=>e+t,0)}function oh(n,e){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function lh(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function ch(n,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-n+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function hh(n,e){return Math.acos(Math.cos(n.pitch)*Math.cos(e.pitch)*Math.cos(n.yaw-e.yaw)+Math.sin(n.pitch)*Math.sin(e.pitch))}function ix([n,e],[t,i]){n-t>Math.PI?n-=2*Math.PI:n-t<-Math.PI&&(n+=2*Math.PI);const s=(t-n)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function dh(n){return typeof n=="string"?n.match(/^[a-z]/i)?document.getElementById(n):document.querySelector(n):n}function Or(n,e,t){t===void 0?n.classList.toggle(e):t?n.classList.add(e):t||n.classList.remove(e)}function Yo(n,e){n.classList.add(...e.split(" ").filter(t=>!!t))}function sx(n,e){n.classList.remove(...e.split(" ").filter(t=>!!t))}function rx(n,e){let t=n;do{if(t===e)return!0;t=t.parentElement}while(t);return!1}function uh(n,e){if(!n?.matches)return null;let t=n;do{if(t.matches(e))return t;t=t.parentElement}while(t);return null}function wr(n){return n?.composedPath()[0]||null}function fh(n,e){return n?n.composedPath().find(t=>!(t instanceof HTMLElement)&&!(t instanceof SVGElement)?!1:t.matches(e)):null}function ph(n){let e=0,t=0,i=n;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,t+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,t-=window.scrollY,{x:e,y:t}}function hn(n,e){return window.getComputedStyle(n).getPropertyValue(e)}function vo(n){if(n.touches.length<2)return null;const e={x:n.touches[0].clientX,y:n.touches[0].clientY},t={x:n.touches[1].clientX,y:n.touches[1].clientY};return{distance:oh(e,t),angle:lh(e,t),center:{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}}var br;function mh(n,e=!1){return e?n===br:document.fullscreenElement===n}function gh(n,e=!1){e?(br=n,n.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):n.requestFullscreen()}function vh(n=!1){n?(br.classList.remove("psv-fullscreen-emulation"),br=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function qo(n,e){let t,i=!1,s=!1,r=!1,a=!1;return e==="+"?t=e:e.split("+").forEach(o=>{switch(o){case"Shift":i=!0;break;case"Ctrl":s=!0;break;case"Alt":r=!0;break;case"Meta":a=!0;break;case"Plus":t="+";break;case"Minus":t="-";break;default:t=o;break}}),i===n.shiftKey&&s===n.ctrlKey&&r===n.altKey&&a===n.metaKey&&t===n.key}function ax(n){return n.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,t)=>(t>0?"-":"")+e.toLowerCase())}function _h(n,e){let t=!1;return function(...i){t||(t=!0,setTimeout(()=>{n.apply(this,i),t=!1},e))}}function jo(n){if(typeof n!="object"||n===null||Object.prototype.toString.call(n)!=="[object Object]")return!1;if(Object.getPrototypeOf(n)===null)return!0;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e}function xh(n,e){const t=e;return(function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((a,o)=>{s[o]=i(null,a)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(a=>{a!=="__proto__"&&(typeof r[a]!="object"||!r[a]||!jo(r[a])?s[a]=r[a]:r[a]!==t&&(s[a]?i(s[a],r[a]):s[a]=i(null,r[a])))})):s=r,s})(n,e)}function Fr(n){return xh(null,n)}function Eh(n){return!n||Object.keys(n).length===0&&n.constructor===Object}function Mt(n){return n==null}function On(...n){for(const e of n)if(!Mt(e))return e;return null}function Mh(n,e){if(n===e)return!0;if(hc(n)&&hc(e)){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t of Object.keys(n))if(!Mh(n[t],e[t]))return!1;return!0}else return!1}function hc(n){return typeof n=="object"&&n!==null}var Ae=class yh extends Error{constructor(e,t){super(t&&t instanceof Error?`${e}: ${t.message}`:e),this.name="PSVError",Error.captureStackTrace?.(this,yh)}};function $o(n,e){jo(n)?(e(n.initial,!0),n.promise.then(t=>e(t,!1))):e(n,!0)}function kr(n){return{initial:!n.initial,promise:n.promise.then(e=>!e)}}function _o(){const n=new Error("Loading was aborted.");return n.name="AbortError",n}function Sh(n){return n?.name==="AbortError"}function St(n){console.warn(`PhotoSphereViewer: ${n}`)}function Zo(n){return!n||Array.isArray(n)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,t])=>n[e]!==void 0&&n[t]!==void 0)}function zt(n,e,t=!0){let i=n.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=n.match("GPano:"+e+'="(.*?)"'),i!==null){const s=t?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var dc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tr=["left","center","right"],Ar=["top","center","bottom"],uc=[...Tr,...Ar],Yt="center";function ox(n){if(!n)return{x:.5,y:.5};if(typeof n=="object")return n;let e=n.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(dc[e[0]]?e=[e[0],Yt]:e=[e[0],e[0]]);const t=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>dc[s]||s),t||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function wh(n,{allowCenter:e,cssOrder:t}={allowCenter:!0,cssOrder:!0}){return n?(typeof n=="string"&&(n=n.split(" ")),n.length===1&&(n[0]===Yt?n=[Yt,Yt]:Tr.indexOf(n[0])!==-1?n=[Yt,n[0]]:Ar.indexOf(n[0])!==-1&&(n=[n[0],Yt])),n.length!==2||uc.indexOf(n[0])===-1||uc.indexOf(n[1])===-1?(St(`Unparsable position ${n}`),null):!e&&n[0]===Yt&&n[1]===Yt?(St("Invalid position center center"),null):(t&&!Ko(n)&&(n=[n[1],n[0]]),n[1]===Yt&&Tr.indexOf(n[0])!==-1&&(n=[Yt,n[0]]),n[0]===Yt&&Ar.indexOf(n[1])!==-1&&(n=[n[1],Yt]),n)):null}function Ko(n){return Ar.indexOf(n[0])!==-1&&Tr.indexOf(n[1])!==-1}function bh(n){let e;if(typeof n=="string"){const t=n.toString().trim();let i=parseFloat(t.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=t.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=We.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Ae(`Unknown speed unit "${s}"`)}}else e=n;return e}function xo(n,e){if(typeof n!="number"){const t=bh(n);return e/Math.abs(t)*1e3}else return Math.abs(n)}function on(n,e=!1,t=e){let i;if(typeof n=="string"){const s=n.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Ae(`Unknown angle "${n}"`);const r=parseFloat(s[1]),a=s[2];if(a)switch(a){case"deg":case"degs":i=We.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new Ae(`Unknown angle unit "${a}"`)}else i=r}else if(typeof n=="number"&&!isNaN(n))i=n;else throw new Ae(`Unknown angle "${n}"`);return i=rs(e?i+Math.PI:i,Math.PI*2),e?We.clamp(i-Math.PI,-Math.PI/(t?2:1),Math.PI/(t?2:1)):i}function Eo(n,e=!1){const t=new wt(n);return t.needsUpdate=!0,t.minFilter=e?kn:Ht,t.generateMipmaps=e,t.anisotropy=e?2:1,t}var fc=new pi;function Mo(n,e){fc.setFromEuler(e).invert(),n.applyQuaternion(fc)}function Br(n,e){const t=function(i){const s=Fr({...n,...i}),r={};for(let[a,o]of Object.entries(s)){if(e&&a in e)o=e[a](o,{rawConfig:s,defValue:n[a]});else if(!(a in n)){St(`Unknown option ${a}`);continue}r[a]=o}return r};return t.defaults=n,t.parsers=e||{},t}function Th(n,e){hn(n,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Jo(n,e,t){e&&e!==t&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${n} is in version ${e} but @photo-sphere-viewer/core is in version ${t}`)}function Ah(n){do{if(n instanceof ShadowRoot&&n.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}n=n.parentNode}while(n)}function Ch(n,e,t,i){const s={isEquirectangular:!0,fullWidth:On(t?.fullWidth,i?.fullWidth),fullHeight:On(t?.fullHeight,i?.fullHeight),croppedWidth:n,croppedHeight:e,croppedX:On(t?.croppedX,i?.croppedX),croppedY:On(t?.croppedY,i?.croppedY),poseHeading:On(t?.poseHeading,i?.poseHeading,0),posePitch:On(t?.posePitch,i?.posePitch,0),poseRoll:On(t?.poseRoll,i?.poseRoll,0),initialHeading:i?.initialHeading,initialPitch:i?.initialPitch,initialFov:i?.initialFov};return!s.fullWidth&&!s.fullHeight&&(s.fullWidth=Math.max(n,e*2),s.fullHeight=Math.round(s.fullWidth/2)),s.fullWidth||(s.fullWidth=s.fullHeight*2),s.fullHeight||(s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX===null&&(s.croppedX=Math.round((s.fullWidth-n)/2)),s.croppedY===null&&(s.croppedY=Math.round((s.fullHeight-e)/2)),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(St("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(St("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(St("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(St("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(St("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var Cr=class{constructor(n){this.easing=xr.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=n,n?(n.easing&&(this.easing=typeof n.easing=="function"?n.easing:xr[n.easing]||xr.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},n.delay||0)):this.resolved=!0}__run(n){if(this.cancelled)return;this.start||(this.start=n);const e=(n-this.start)/this.options.duration,t={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);t[i]=r}this.options.onTick(t,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(t[i]=s.end);this.options.onTick(t,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(n){n?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(n)),this.callbacks.length=0}then(n){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(n):new Promise(e=>{this.callbacks.push(e)}).then(n)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},ns=class{constructor(n,e){if(this.fn=n,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Ae("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(n){this.__current=n}setSpeed(n){this.speed=n}goto(n,e=1){this.mode=2,this.target=this.wrap?rs(n,this.max):We.clamp(n,this.min,this.max),this.speedMult=e}step(n,e=1){e===0?this.setValue(this.current+n):(this.mode!==2&&(this.target=this.current),this.goto(this.target+n,e))}roll(n=!1,e=1){this.mode=1,this.target=n?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(n){return this.target=this.wrap?rs(n,this.max):We.clamp(n,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(n){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+n/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-n/1e3*this.speed*this.speedMult*2));let t=null;return this.current>this.target&&this.currentSpeed?t=Math.max(this.target,this.current+this.currentSpeed*n/1e3):this.current<this.target&&this.currentSpeed&&(t=Math.min(this.target,this.current+this.currentSpeed*n/1e3)),t!==null&&(t=this.wrap?rs(t,this.max):We.clamp(t,this.min,this.max),t!==this.current)?(this.current=t,this.fn&&this.fn(this.current),!0):!1}},Rh=class{constructor(n,e){this.fn=n,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((n,[e,t])=>(n[e]=t.current,n),{})}setSpeed(n){for(const e of Object.values(this.dynamics))e.setSpeed(n)}goto(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].goto(i,e)}step(n,e=1){if(e===0)this.setValue(Object.keys(n).reduce((t,i)=>(t[i]=n[i]+this.dynamics[i].current,t),{}));else for(const[t,i]of Object.entries(n))this.dynamics[t].step(i,e)}roll(n,e=1){for(const[t,i]of Object.entries(n))this.dynamics[t].roll(i,e)}stop(){for(const n of Object.values(this.dynamics))n.stop()}setValue(n){let e=!1;for(const[t,i]of Object.entries(n))e=this.dynamics[t].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(n){let e=!1;for(const t of Object.values(this.dynamics))e=t.update(n)||e;return e&&this.fn&&this.fn(this.current),e}},zr=class{constructor(n=200){this.delay=n,this.time=0,this.delay=n}get pending(){return this.time!==0}down(n){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=n}up(n){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{n(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(n(this.data),this.time=0,this.data=void 0)}},Ph=(n=>(n.VERTICAL="VERTICAL",n.HORIZONTAL="HORIZONTAL",n))(Ph||{}),Lh=class{constructor(n,e,t){this.container=n,this.direction=e,this.listener=t,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(n){switch(n.type){case"click":n.stopPropagation();break;case"mousedown":this.__onMouseDown(n);break;case"mouseenter":this.__onMouseEnter(n);break;case"mouseleave":this.__onMouseLeave(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break}}__onMouseDown(n){this.mousedown=!0,this.__update(n.clientX,n.clientY,!0)}__onMouseEnter(n){this.mouseover=!0,this.__update(n.clientX,n.clientY,!0)}__onTouchStart(n){this.mouseover=!0,this.mousedown=!0;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(n){(this.mousedown||this.mouseover)&&(n.stopPropagation(),this.__update(n.clientX,n.clientY,!0))}__onTouchMove(n){if(this.mousedown||this.mouseover){n.stopPropagation();const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(n){this.mousedown&&(this.mousedown=!1,this.__update(n.clientX,n.clientY,!1))}__onMouseLeave(n){this.mouseover&&(this.mouseover=!1,this.__update(n.clientX,n.clientY,!0))}__onTouchEnd(n){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=n.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(n,e,t){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=We.clamp((i.bottom-e)/i.height,0,1):s=We.clamp((n-i.left)/i.width,0,1),this.listener({value:s,click:!t,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:n,clientY:e}})}},be={};Xo(be,{BeforeAnimateEvent:()=>Qo,BeforeRenderEvent:()=>as,BeforeRotateEvent:()=>Bh,ClickEvent:()=>Vh,ConfigChangedEvent:()=>Nt,DoubleClickEvent:()=>qh,FullscreenEvent:()=>os,HideNotificationEvent:()=>ls,HideOverlayEvent:()=>ed,HidePanelEvent:()=>Gn,HideTooltipEvent:()=>rd,KeypressEvent:()=>Wn,LoadProgressEvent:()=>hd,ObjectEnterEvent:()=>$d,ObjectEvent:()=>Vr,ObjectHoverEvent:()=>eu,ObjectLeaveEvent:()=>yo,PanoramaErrorEvent:()=>_d,PanoramaLoadEvent:()=>fd,PanoramaLoadedEvent:()=>Bi,PositionUpdatedEvent:()=>cs,ReadyEvent:()=>ds,RenderEvent:()=>Pd,RollUpdatedEvent:()=>hs,ShowNotificationEvent:()=>us,ShowOverlayEvent:()=>Nd,ShowPanelEvent:()=>Xn,ShowTooltipEvent:()=>zd,SizeUpdatedEvent:()=>fs,StopAllEvent:()=>ps,TransitionDoneEvent:()=>Md,ViewerEvent:()=>$e,ZoomUpdatedEvent:()=>An});var Hr=class extends Event{constructor(n,e=!1){super(n,{cancelable:e})}},Dh=class extends EventTarget{dispatchEvent(n){return super.dispatchEvent(n)}addEventListener(n,e,t){super.addEventListener(n,e,t)}removeEventListener(n,e,t){super.removeEventListener(n,e,t)}},$e=class extends Hr{},Ih=class Uh extends $e{constructor(e,t){super(Uh.type,!0),this.position=e,this.zoomLevel=t}};Ih.type="before-animate";var Qo=Ih,Nh=class Oh extends $e{constructor(e,t){super(Oh.type),this.timestamp=e,this.elapsed=t}};Nh.type="before-render";var as=Nh,Fh=class kh extends $e{constructor(e){super(kh.type,!0),this.position=e}};Fh.type="before-rotate";var Bh=Fh,zh=class Hh extends $e{constructor(e){super(Hh.type),this.data=e}};zh.type="click";var Vh=zh,Gh=class Wh extends $e{constructor(e){super(Wh.type),this.options=e}containsOptions(...e){return e.some(t=>this.options.includes(t))}};Gh.type="config-changed";var Nt=Gh,Xh=class Yh extends $e{constructor(e){super(Yh.type),this.data=e}};Xh.type="dblclick";var qh=Xh,jh=class $h extends $e{constructor(e){super($h.type),this.fullscreenEnabled=e}};jh.type="fullscreen";var os=jh,Zh=class Kh extends $e{constructor(e){super(Kh.type),this.notificationId=e}};Zh.type="hide-notification";var ls=Zh,Jh=class Qh extends $e{constructor(e){super(Qh.type),this.overlayId=e}};Jh.type="hide-overlay";var ed=Jh,td=class nd extends $e{constructor(e){super(nd.type),this.panelId=e}};td.type="hide-panel";var Gn=td,id=class sd extends $e{constructor(e){super(sd.type),this.tooltipData=e}};id.type="hide-tooltip";var rd=id,ad=class od extends $e{constructor(e,t){super(od.type,!0),this.key=e,this.originalEvent=t}matches(e){return qo(this.originalEvent,e)}};ad.type="key-press";var Wn=ad,ld=class cd extends $e{constructor(e){super(cd.type),this.progress=e}};ld.type="load-progress";var hd=ld,dd=class ud extends $e{constructor(e){super(ud.type),this.panorama=e}};dd.type="panorama-load";var fd=dd,pd=class md extends $e{constructor(e){super(md.type),this.data=e}};pd.type="panorama-loaded";var Bi=pd,gd=class vd extends $e{constructor(e,t){super(vd.type),this.panorama=e,this.error=t}};gd.type="panorama-error";var _d=gd,xd=class Ed extends $e{constructor(e){super(Ed.type),this.completed=e}};xd.type="transition-done";var Md=xd,yd=class Sd extends $e{constructor(e){super(Sd.type),this.position=e}};yd.type="position-updated";var cs=yd,wd=class bd extends $e{constructor(e){super(bd.type),this.roll=e}};wd.type="roll-updated";var hs=wd,Td=class Ad extends $e{constructor(){super(Ad.type)}};Td.type="ready";var ds=Td,Cd=class Rd extends $e{constructor(){super(Rd.type)}};Cd.type="render";var Pd=Cd,Ld=class Dd extends $e{constructor(e){super(Dd.type),this.notificationId=e}};Ld.type="show-notification";var us=Ld,Id=class Ud extends $e{constructor(e){super(Ud.type),this.overlayId=e}};Id.type="show-overlay";var Nd=Id,Od=class Fd extends $e{constructor(e){super(Fd.type),this.panelId=e}};Od.type="show-panel";var Xn=Od,kd=class Bd extends $e{constructor(e,t){super(Bd.type),this.tooltip=e,this.tooltipData=t}};kd.type="show-tooltip";var zd=kd,Hd=class Vd extends $e{constructor(e){super(Vd.type),this.size=e}};Hd.type="size-updated";var fs=Hd,Gd=class Wd extends $e{constructor(){super(Wd.type)}};Gd.type="stop-all";var ps=Gd,Xd=class Yd extends $e{constructor(e){super(Yd.type),this.zoomLevel=e}};Xd.type="zoom-updated";var An=Xd,Vr=class extends $e{constructor(n,e,t,i,s){super(n),this.originalEvent=e,this.object=t,this.viewerPoint=i,this.userDataKey=s}},qd=class jd extends Vr{constructor(e,t,i,s){super(jd.type,e,t,i,s)}};qd.type="enter-object";var $d=qd,Zd=class Kd extends Vr{constructor(e,t,i,s){super(Kd.type,e,t,i,s)}};Zd.type="leave-object";var yo=Zd,Jd=class Qd extends Vr{constructor(e,t,i,s){super(Qd.type,e,t,i,s)}};Jd.type="hover-object";var eu=Jd,el=class{constructor(n){this.viewer=n}init(){}destroy(){}supportsTransition(n){return!1}supportsPreload(n){return!1}textureCoordsToSphericalCoords(n,e){throw new Ae("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(n,e){throw new Ae("Current adapter does not support texture coordinates.")}};el.supportsDownload=!1;function pc(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof el)return Jo(e.id,e.VERSION,"5.14.0"),e}return null}var Qi=`${jn}_touchSupport`,Lt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=hx(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const n=lx();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!n,this.maxTextureWidth=n?n.getParameter(n.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=cx(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!Lt.isWebGLSupported)throw new Ae("WebGL 2 is not supported.");if(Lt.maxTextureWidth===0)throw new Ae("Unable to detect system capabilities")}};function lx(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function cx(){let n="ontouchstart"in window||navigator.maxTouchPoints>0;Qi in localStorage&&(n=localStorage[Qi]==="true");const e=new Promise(t=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(o)},s=()=>{i(),localStorage[Qi]=!1,t(!1)},r=()=>{i(),localStorage[Qi]=!0,t(!0)},a=()=>{i(),localStorage[Qi]=n,t(n)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const o=setTimeout(a,1e4)});return{initial:n,promise:e}}function hx(n){let e=n,t=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!t;){const r=document.createElement("canvas"),a=r.getContext("2d");r.width=e,r.height=e/2;try{a.fillStyle="white",a.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(t=!0)}catch{}r.width=0,r.height=0,t||(e/=2)}if(t)return e;throw new Ae("Unable to detect system capabilities")}var dx=Br({resolution:64,useXmpData:!0,blur:!1},{resolution:n=>{if(!n||!We.isPowerOfTwo(n))throw new Ae("EquirectangularAdapter resolution must be power of two.");return n}}),Gr=class tu extends el{static withConfig(e){return[tu,e]}constructor(e,t){super(e),this.config=dx(t),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(e,t){if(Mt(e.textureX)||Mt(e.textureY))throw new Ae("Texture position is missing 'textureX' or 'textureY'");const i=(e.textureX+t.croppedX)/t.fullWidth*Math.PI*2,s=(e.textureY+t.croppedY)/t.fullHeight*Math.PI;return{yaw:i>=Math.PI?i-Math.PI:i+Math.PI,pitch:Math.PI/2-s}}sphericalCoordsToTextureCoords(e,t){const i=e.yaw/Math.PI/2*t.fullWidth,s=e.pitch/Math.PI*t.fullHeight;let r=Math.round(e.yaw<Math.PI?i+t.fullWidth/2:i-t.fullWidth/2)-t.croppedX,a=Math.round(t.fullHeight/2-s)-t.croppedY;return(r<0||r>t.croppedWidth||a<0||a>t.croppedHeight)&&(r=a=void 0),{textureX:r,textureY:a}}async loadTexture(e,t=!0,i,s=this.config.useXmpData){if(typeof e!="string"&&(typeof e!="object"||!e.path))return Promise.reject(new Ae("Invalid panorama url, are you using the right adapter?"));let r;typeof e=="string"?r={path:e,data:i}:r={data:i,...e};const a=await this.viewer.textureLoader.loadFile(r.path,t?u=>this.viewer.textureLoader.dispatchProgress(u):null,r.path),o=s?await this.loadXMP(a):null,c=await this.viewer.textureLoader.blobToImage(a);typeof r.data=="function"&&(r.data=r.data(c,o));const l=Ch(c.width,c.height,r.data,o),h=this.createEquirectangularTexture(c);return{panorama:e,texture:h,panoData:l,cacheKey:r.path}}async loadXMP(e){const t=await this.loadBlobAsString(e),i=t.indexOf("<x:xmpmeta");if(i===-1)return null;const s=t.indexOf("</x:xmpmeta>",i);if(s===-1)return null;const r=t.substring(i,s);return r.includes("GPano:")?{fullWidth:zt(r,"FullPanoWidthPixels"),fullHeight:zt(r,"FullPanoHeightPixels"),croppedWidth:zt(r,"CroppedAreaImageWidthPixels"),croppedHeight:zt(r,"CroppedAreaImageHeightPixels"),croppedX:zt(r,"CroppedAreaLeftPixels"),croppedY:zt(r,"CroppedAreaTopPixels"),poseHeading:zt(r,"PoseHeadingDegrees",!1),posePitch:zt(r,"PosePitchDegrees",!1),poseRoll:zt(r,"PoseRollDegrees",!1),initialHeading:zt(r,"InitialViewHeadingDegrees",!1),initialPitch:zt(r,"InitialViewPitchDegrees",!1),initialFov:zt(r,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(e){return new Promise((t,i)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=i,s.readAsText(e)})}createEquirectangularTexture(e){if(this.config.blur||e.width>Lt.maxTextureWidth){const t=Math.min(1,Lt.maxCanvasWidth/e.width),i=new OffscreenCanvas(Math.floor(e.width*t),Math.floor(e.height*t)),s=i.getContext("2d");return this.config.blur&&(s.filter=`blur(${i.width/2048}px)`),s.drawImage(e,0,0,i.width,i.height),Eo(i)}return Eo(e)}createMesh(e){const t=e.croppedX/e.fullWidth*2*Math.PI,i=e.croppedWidth/e.fullWidth*2*Math.PI,s=e.croppedY/e.fullHeight*Math.PI,r=e.croppedHeight/e.fullHeight*Math.PI,a=new Is(fi,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*i),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*r),-Math.PI/2+t,i,s,r).scale(-1,1,1),o=new Ps({depthTest:!1,depthWrite:!1});return new Vt(a,o)}setTexture(e,t){e.material.map=t.texture}setTextureOpacity(e,t){e.material.opacity=t,e.material.transparent=t<1}disposeTexture({texture:e}){e.dispose()}disposeMesh(e){e.geometry.dispose(),e.material.dispose()}};Gr.id="equirectangular";Gr.VERSION="5.14.0";Gr.supportsDownload=!0;var nu=Gr,iu=class su extends nu{static withConfig(e){return[su,e]}constructor(e,t){super(e,{resolution:t?.resolution??64,useXmpData:!1})}async loadTexture(e,t){const i=await super.loadTexture(e,t,null,!1);return i.panoData=null,i}createMesh(){const e=new Is(fi,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),t=e.getAttribute("uv"),i=e.getAttribute("normal");for(let r=0;r<t.count;r++)for(let a=0;a<3;a++){const o=r*3+a,c=i.getX(o),l=i.getY(o),h=i.getZ(o),u=.947;if(r<t.count/6){const p=c===0&&h===0?1:Math.acos(l)/Math.sqrt(c*c+h*h)*(2/Math.PI);t.setXY(o,c*(u/4)*p+1/4,h*(u/2)*p+1/2)}else{const p=c===0&&h===0?1:Math.acos(-l)/Math.sqrt(c*c+h*h)*(2/Math.PI);t.setXY(o,-c*(u/4)*p+3/4,h*(u/2)*p+1/2)}}e.rotateX(-Math.PI/2),e.rotateY(Math.PI);const s=new Ps({depthTest:!1,depthWrite:!1});return new Vt(e,s)}};iu.id="dual-fisheye";iu.VERSION="5.14.0";var Zn=class ru{constructor(e,t){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof ru?e.viewer:e,this.container=document.createElement(t.tagName??"div"),this.container.className=t.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(t=>t.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},ux=Br({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),At=class extends Zn{constructor(n,e){super(n,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=ux(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",t=>{this.state.enabled&&this.onClick(),t.stopPropagation()}),this.container.addEventListener("keydown",t=>{t.key===Et.Enter&&this.state.enabled&&(this.onClick(),t.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(n=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),n&&this.viewer.navbar.autoSize())}hide(n=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",n&&this.viewer.navbar.autoSize())}checkSupported(){$o(this.isSupported(),(n,e)=>{this.state&&(this.state.supported=n,e?n||this.hide():this.toggle(n))})}autoSize(){}isSupported(){return!0}toggleActive(n=!this.state.active){n!==this.state.active&&(this.state.active=n,Or(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(n){this.container.innerHTML=n,Yo(this.container.querySelector("svg"),"psv-button-svg")}},fx=class extends At{constructor(n,e){super(n,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",e.content.attachViewer?.(this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){this.customOnClick?.(this.viewer)}},bs=class extends At{constructor(n){super(n,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:sn.info}),this.mode=0,this.viewer.addEventListener(ls.type,this),this.viewer.addEventListener(us.type,this),this.viewer.addEventListener(Gn.type,this),this.viewer.addEventListener(Xn.type,this),this.viewer.addEventListener(Nt.type,this)}destroy(){this.viewer.removeEventListener(ls.type,this),this.viewer.removeEventListener(us.type,this),this.viewer.removeEventListener(Gn.type,this),this.viewer.removeEventListener(Xn.type,this),this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(n){if(n instanceof Nt){n.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;n instanceof ls?e=this.mode===1:n instanceof us?e=this.mode===1&&n.notificationId!==yt.DESCRIPTION:n instanceof Gn?e=this.mode===2:n instanceof Xn&&(e=this.mode===2&&n.panelId!==yt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(n){super.hide(n),this.mode&&this.__close()}autoSize(n=!1){if(n){const e=this.viewer.navbar.getButton("caption",!1),t=e&&!e.isVisible(),i=!!this.viewer.config.description;t||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(yt.DESCRIPTION);break;case 2:this.viewer.panel.hide(yt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:yt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:yt.DESCRIPTION,content:this.viewer.config.caption}))}};bs.id="description";var au=class extends At{constructor(n){super(n,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:sn.download}),this.viewer.addEventListener(Nt.type,this),this.viewer.addEventListener(Bi.type,this)}destroy(){this.viewer.removeEventListener(Nt.type,this),this.viewer.removeEventListener(Bi.type,this),super.destroy()}handleEvent(n){n instanceof Nt?(n.containsOptions("downloadUrl")&&this.checkSupported(),n.containsOptions("downloadUrl","downloadName")&&this.__update()):n instanceof Bi&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const n=this.container;n.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,n.target="_blank",n.href.startsWith("data:")&&!this.viewer.config.downloadName?n.download="panorama."+n.href.substring(0,n.href.indexOf(";")).split("/").pop():n.download=this.viewer.config.downloadName||n.href.split("/").pop()}};au.id="download";var ou=class extends At{constructor(n){super(n,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:sn.fullscreenIn,iconActive:sn.fullscreenOut}),this.viewer.addEventListener(os.type,this)}destroy(){this.viewer.removeEventListener(os.type,this),super.destroy()}handleEvent(n){n instanceof os&&this.toggleActive(n.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};ou.id="fullscreen";var px="psvButton",mx=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${sn.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${n.map(t=>`
    <li data-psv-button="${t.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${t.content}</span>
      <span class="psv-panel-menu-item-label">${t.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,Er=class extends At{constructor(n){super(n,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:sn.menu}),this.viewer.addEventListener(Xn.type,this),this.viewer.addEventListener(Gn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Xn.type,this),this.viewer.removeEventListener(Gn.type,this),super.destroy()}handleEvent(n){n instanceof Xn?this.toggleActive(n.panelId===yt.MENU):n instanceof Gn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(n){super.hide(n),this.__hideMenu()}show(n){super.show(n),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:yt.MENU,content:mx(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:n=>{const e=n?uh(n,".psv-panel-menu-item"):void 0,t=e?e.dataset[px]:void 0;t&&(this.viewer.navbar.getButton(t).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(yt.MENU)}};Er.id="menu";function gx(n){let e=0;switch(n){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return sn.arrow.replace("rotate(0",`rotate(${e}`)}var Ns=class extends At{constructor(n,e){super(n,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:gx(e)}),this.direction=e,this.handler=new zr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Et.Enter&&this.__onMouseDown();break;case"keyup":n.key===Et.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return kr(Lt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const n={};switch(this.direction){case 0:n.pitch=!1;break;case 1:n.pitch=!0;break;case 3:n.yaw=!1;break;default:n.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(n),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Ns.groupId="move";var lu=class extends Ns{constructor(n){super(n,1)}};lu.id="moveDown";var cu=class extends Ns{constructor(n){super(n,2)}};cu.id="moveLeft";var hu=class extends Ns{constructor(n){super(n,3)}};hu.id="moveRight";var du=class extends Ns{constructor(n){super(n,0)}};du.id="moveUp";var tl=class extends At{constructor(n,e,t){super(n,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=t,this.handler=new zr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":n.key===Et.Enter&&this.__onMouseDown();break;case"keyup":n.key===Et.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return kr(Lt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};tl.groupId="zoom";var uu=class extends tl{constructor(n){super(n,sn.zoomIn,0)}};uu.id="zoomIn";var fu=class extends tl{constructor(n){super(n,sn.zoomOut,1)}};fu.id="zoomOut";var nl=class extends At{constructor(n){super(n,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Lh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(hn(this.container,"max-width"),10),this.viewer.addEventListener(An.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ds.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(An.type,this),this.viewer.removeEventListener(ds.type,this),super.destroy()}handleEvent(n){n instanceof An?this.__moveZoomValue(n.zoomLevel):n instanceof ds&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return kr(Lt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(n){this.zoomValue.style.left=n/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(n){n.mousedown&&this.viewer.zoom(n.value*100)}};nl.id="zoomRange";nl.groupId="zoom";var pu=class extends Dh{constructor(n){super(),this.viewer=n}init(){}destroy(){}},il=class extends pu{constructor(n,e){super(n),this.config=this.constructor.configParser(e)}setOption(n,e){this.setOptions({[n]:e})}setOptions(n){const e={...this.config,...n},t=this.constructor,i=t.configParser,s=t.readonlyOptions,r=t.id;for(let[a,o]of Object.entries(n)){if(!(a in i.defaults)){St(`${r}: Unknown option "${a}"`);continue}if(s.includes(a)){St(`${r}: Option "${a}" cannot be updated`);continue}a in i.parsers&&(o=i.parsers[a](o,{rawConfig:e,defValue:i.defaults[a]})),this.config[a]=o}}};il.readonlyOptions=[];function So(n){if(n){for(const[,e]of[["_",n],...Object.entries(n)])if(e.prototype instanceof pu)return Jo(e.id,e.VERSION,"5.14.0"),e}return null}var pn={panorama:null,container:null,adapter:[nu,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Et.ArrowUp]:"ROTATE_UP",[Et.ArrowDown]:"ROTATE_DOWN",[Et.ArrowRight]:"ROTATE_RIGHT",[Et.ArrowLeft]:"ROTATE_LEFT",[Et.PageUp]:"ZOOM_IN",[Et.PageDown]:"ZOOM_OUT",[Et.Plus]:"ZOOM_IN",[Et.Minus]:"ZOOM_OUT"}},mc={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},wo={container:n=>{if(!n)throw new Ae("No value given for container.");return n},adapter:(n,{defValue:e})=>{if(n?Array.isArray(n)?n=[pc(n[0]),n[1]]:n=[pc(n),null]:n=e,!n[0])throw new Ae("An undefined value was given for adapter.");if(!n[0].id)throw new Ae("Adapter has no id.");return n},defaultYaw:n=>on(n),defaultPitch:n=>on(n,!0),defaultZoomLvl:n=>We.clamp(n,0,100),minFov:(n,{rawConfig:e})=>(e.maxFov<n&&(St("maxFov cannot be lower than minFov"),n=e.maxFov),We.clamp(n,1,179)),maxFov:(n,{rawConfig:e})=>(n<e.minFov&&(n=e.minFov),We.clamp(n,1,179)),moveInertia:(n,{defValue:e})=>n===!0?e:n===!1?0:n,lang:n=>({...pn.lang,...n}),fisheye:n=>n===!0?1:n===!1?0:n,requestHeaders:n=>n&&typeof n=="object"?()=>n:typeof n=="function"?n:null,withCredentials:n=>typeof n=="boolean"?()=>n:typeof n=="function"?n:()=>!1,defaultTransition:(n,{defValue:e})=>n===null||n.speed===0?null:{...e,...n},rendererParameters:(n,{defValue:e})=>({...n,...e}),plugins:n=>n.map((e,t)=>{if(Array.isArray(e)?e=[So(e[0]),e[1]]:e=[So(e),null],!e[0])throw new Ae(`An undefined value was given for plugin ${t}.`);if(!e[0].id)throw new Ae(`Plugin ${t} has no id.`);return e}),navbar:n=>n===!1?null:n===!0?Fr(pn.navbar):typeof n=="string"?n.split(/[ ,]/):n},vx=Br(pn,wo),Ni=class extends At{constructor(n){super(n,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(n){this.show(),this.contentElt.innerHTML=n??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){this.viewer.navbar.getButton(bs.id,!1)?.autoSize(!0)}};Ni.id="caption";var bo={},Rr={};function Wr(n,e){if(!n.id)throw new Ae("Button id is required");if(bo[n.id]=n,n.groupId&&(Rr[n.groupId]=Rr[n.groupId]||[]).push(n),e){const t=pn.navbar;switch(e){case"start":t.unshift(n.id);break;case"end":t.push(n.id);break;default:{const[i,s]=e.split(":"),r=t.indexOf(i);if(!i||!s||r===-1)throw new Ae(`Invalid defaultPosition ${e}`);t.splice(r+(s==="right"?1:0),0,n.id)}}}}[fu,nl,uu,bs,Ni,au,ou,cu,hu,du,lu].forEach(n=>Wr(n));var _x=class extends Zn{constructor(n){super(n,{className:`psv-navbar ${Us}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(n){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,n.indexOf(Ni.id)!==-1&&n.indexOf(bs.id)===-1&&n.splice(n.indexOf(Ni.id),0,bs.id),n.forEach(e=>{typeof e=="object"?new fx(this,e):bo[e]?new bo[e](this):Rr[e]?Rr[e].forEach(t=>{new t(this)}):St(`Unknown button ${e}`)}),new Er(this),this.children.forEach(e=>{e instanceof At&&e.checkSupported()}),this.autoSize()}setCaption(n){this.children.some(e=>e instanceof Ni?(e.setCaption(n),!0):!1)}getButton(n,e=!0){const t=this.children.find(i=>i instanceof At&&i.id===n);return!t&&e&&St(`button "${n}" not found in the navbar`),t}focusButton(n){this.isVisible()&&(this.getButton(n,!1)?.container||this.container.firstElementChild)?.focus()}autoSize(){this.children.forEach(i=>{i instanceof At&&i.autoSize()});const n=this.container.offsetWidth;let e=0;const t=[];this.children.forEach(i=>{i.isVisible()&&i instanceof At&&(e+=i.width,i.collapsable&&t.push(i))}),e!==0&&(n<e&&t.length>0?(t.forEach(i=>i.collapse()),this.collapsed=t,this.getButton(Er.id).show(!1)):n>=e&&this.collapsed.length>0&&(this.collapsed.forEach(i=>i.uncollapse()),this.collapsed=[],this.getButton(Er.id).hide(!1)),this.getButton(Ni.id,!1)?.autoSize())}};Vn.enabled=!1;var Di={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){Vn.enabled&&(St("ThreeJS cache should be disabled"),Vn.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(n,e,t){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[n]=t,this.items[e].lastAccess=Date.now())},get(n,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[n]},remove(n,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[n],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,n],[,e])=>e.lastAccess-n.lastAccess).forEach(([n,{lastAccess:e}],t)=>{t>0&&(Date.now()-e>=this.ttl*1e3||t>=this.maxItems)&&delete this.items[n]})}},xx=class extends Zn{constructor(n){super(n,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=hn(this.loader,"color"),this.color=hn(this.canvas,"color"),this.border=parseInt(hn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(hn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Nt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(n){n instanceof Nt&&n.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(n){this.container.classList.remove("psv-loader--undefined");const e=We.clamp(n,0,99.999)/100*Math.PI*2,t=this.size/2,i=t,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,a=Math.sin(e)*r+t,o=-Math.cos(e)*r+t,c=n>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${c} 1 ${a} ${o}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const n=this.loader.querySelector(".psv-loader-image, .psv-loader-text");n&&this.loader.removeChild(n);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const t=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=t+"px",e.style.maxHeight=t+"px",this.loader.appendChild(e)}}},Ex=class extends Zn{constructor(n){super(n,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Ae("Notification cannot be toggled")}show(n){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof n=="string"&&(n={content:n}),this.state.contentId=n.id||null,this.content.innerHTML=n.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new us(this.state.contentId)),n.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),n.timeout))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new ls(e))}}},Mx=class extends Zn{constructor(n){super(n,{className:`psv-overlay ${Us}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Wn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Wn.type,this),super.destroy()}handleEvent(n){n.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),n.stopPropagation()):n instanceof Wn&&this.isVisible()&&this.state.dismissible&&n.matches(Et.Escape)&&(this.hide(),n.preventDefault())}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Ae("Overlay cannot be toggled")}show(n){typeof n=="string"&&(n={title:n}),this.state.contentId=n.id||null,this.state.dismissible=n.dismissible!==!1,this.image.innerHTML=n.image||"",this.title.innerHTML=n.title||"",this.text.innerHTML=n.text||"",super.show(),this.viewer.dispatchEvent(new Nd(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new ed(e))}}},yx=200,ba="psv-panel-content--no-interaction",Sx=class extends Zn{constructor(n){super(n,{className:`psv-panel ${Us}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=sn.close,t.title=n.config.lang.close,this.container.appendChild(t),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),t.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Wn.type,this)}destroy(){this.viewer.removeEventListener(Wn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(n){switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"mousemove":this.__onMouseMove(n);break;case"touchmove":this.__onTouchMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchend":this.__onTouchEnd(n);break;case Wn.type:this.__onKeyPress(n);break}}isVisible(n){return this.state.visible&&(!n||!this.state.contentId||this.state.contentId===n)}toggle(){throw new Ae("Panel cannot be toggled")}show(n){typeof n=="string"&&(n={content:n});const e=this.isVisible(n.id);this.state.contentId=n.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),n.id&&this.state.width[n.id]?this.container.style.width=this.state.width[n.id]:n.width?this.container.style.width=n.width:this.container.style.width=null,this.content.innerHTML=n.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),Or(this.content,"psv-panel-content--no-margin",n.noMargin===!0),n.clickHandler&&(this.state.clickHandler=t=>{n.clickHandler(wr(t))},this.state.keyHandler=t=>{t.key===Et.Enter&&n.clickHandler(wr(t))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{this.content.querySelector("a,button,[tabindex]")?.focus()},300)),this.viewer.dispatchEvent(new Xn(this.state.contentId))}hide(n){if(this.isVisible(n)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Gn(e))}}__onMouseDown(n){n.stopPropagation(),this.__startResize(n.clientX,n.clientY)}__onTouchStart(n){if(n.stopPropagation(),n.touches.length===1){const e=n.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(n){this.state.mousedown&&(n.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(ba))}__onTouchEnd(n){this.state.mousedown&&(n.stopPropagation(),n.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(ba)))}__onMouseMove(n){this.state.mousedown&&(n.stopPropagation(),this.__resize(n.clientX,n.clientY))}__onTouchMove(n){if(this.state.mousedown){const e=n.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(n){this.isVisible()&&n.matches(Et.Escape)&&(this.hide(),n.preventDefault())}__startResize(n,e){this.state.mouseX=n,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(ba)}__resize(n,e){const t=n,i=e,s=Math.max(yx,this.container.offsetWidth-(t-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=t,this.state.mouseY=i}},wx=class extends Zn{constructor(n,e){super(n,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",t=>t.stopPropagation()),this.container.addEventListener("mousedown",t=>t.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(n){n.type==="transitionend"&&this.__onTransitionEnd(n)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Ae("Tooltip cannot be toggled")}show(n){if(this.state.state!==0)throw new Ae("Initialized tooltip cannot be re-initialized");n.className&&Yo(this.container,n.className),n.style&&Object.assign(this.container.style,n.style),this.state.state=3,this.update(n.content,n),this.state.data=n.data,this.state.state=1,this.viewer.dispatchEvent(new zd(this,this.state.data)),this.__waitImages()}update(n,e){this.content.innerHTML=n;const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.state.arrow=parseInt(hn(this.arrow,"border-top-width"),10),this.state.border=parseInt(hn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(n){if(this.state.state!==1&&this.state.state!==3)throw new Ae("Uninitialized tooltip cannot be moved");n.box=n.box??this.state.config?.box??{width:0,height:0},this.state.config=n;const e=this.container,t=this.arrow,i={posClass:wh(n.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,n);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const o=Ko(i.posClass);s&&(i.posClass[o?0:1]=s),r&&(i.posClass[o?1:0]=r),this.__computeTooltipPosition(i,n)}e.style.top=i.top+"px",e.style.left=i.left+"px",t.style.top=i.arrowTop+"px",t.style.left=i.arrowLeft+"px";const a=i.posClass.join("-");a!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=a,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new rd(this.state.data));const n=parseFloat(hn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},n*2)}__onTransitionEnd(n){if(n.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(n,e){const t=this.state.arrow,i=e.top,s=n.height,r=e.left,a=n.width,o=t+this.state.border,c=e.box.width/2+t*2,l=e.box.height/2+t*2;switch(n.posClass.join("-")){case"top-left":n.top=i-l-s,n.left=r+o-a,n.arrowTop=s,n.arrowLeft=a-o-t;break;case"top-center":n.top=i-l-s,n.left=r-a/2,n.arrowTop=s,n.arrowLeft=a/2-t;break;case"top-right":n.top=i-l-s,n.left=r-o,n.arrowTop=s,n.arrowLeft=t;break;case"bottom-left":n.top=i+l,n.left=r+o-a,n.arrowTop=-t*2,n.arrowLeft=a-o-t;break;case"bottom-center":n.top=i+l,n.left=r-a/2,n.arrowTop=-t*2,n.arrowLeft=a/2-t;break;case"bottom-right":n.top=i+l,n.left=r-o,n.arrowTop=-t*2,n.arrowLeft=t;break;case"left-top":n.top=i+o-s,n.left=r-c-a,n.arrowTop=s-o-t,n.arrowLeft=a;break;case"center-left":n.top=i-s/2,n.left=r-c-a,n.arrowTop=s/2-t,n.arrowLeft=a;break;case"left-bottom":n.top=i-o,n.left=r-c-a,n.arrowTop=t,n.arrowLeft=a;break;case"right-top":n.top=i+o-s,n.left=r+c,n.arrowTop=s-o-t,n.arrowLeft=-t*2;break;case"center-right":n.top=i-s/2,n.left=r+c,n.arrowTop=s/2-t,n.arrowLeft=-t*2;break;case"right-bottom":n.top=i-o,n.left=r+c,n.arrowTop=t,n.arrowLeft=-t*2;break}}__waitImages(){const n=this.content.querySelectorAll("img");if(n.length>0){const e=[];n.forEach(t=>{t.complete||e.push(new Promise(i=>{t.onload=i,t.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const t=this.container.getBoundingClientRect();this.state.width=t.right-t.left,this.state.height=t.bottom-t.top,this.move(this.state.config)}})}}},bx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,Os=class{constructor(n){this.viewer=n,this.config=n.config,this.state=n.state}destroy(){}},Qt=new U,cr=new fn(0,0,0,"ZXY"),Tx=class extends Os{constructor(n){super(n)}fovToZoomLevel(n){const e=Math.round((n-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return We.clamp(e-2*(e-50),0,100)}zoomLevelToFov(n){return this.config.maxFov+n/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(n){return We.radToDeg(2*Math.atan(Math.tan(We.degToRad(n)/2)*this.state.aspect))}hFovToVFov(n){return We.radToDeg(2*Math.atan(Math.tan(We.degToRad(n)/2)/this.state.aspect))}getAnimationProperties(n,e,t){const i=!Mt(e),s=!Mt(t),r={};let a=null;if(i){const o=this.viewer.getPosition(),c=ch(o.yaw,e.yaw);r.yaw={start:o.yaw,end:o.yaw+c},r.pitch={start:o.pitch,end:e.pitch},a=xo(n,hh(o,e))}if(s){const o=this.viewer.getZoomLevel(),c=Math.abs(t-o);r.zoom={start:o,end:t},a===null&&(a=xo(n,Math.PI/4*c/100))}return a===null?typeof n=="number"?a=n:a=go:a=Math.max(go,a),{duration:a,properties:r}}getTransitionOptions(n){let e;const t=this.config.defaultTransition??pn.defaultTransition;return n.transition===!1||n.transition===null?e=null:n.transition===!0?e={...t}:typeof n.transition=="object"?e={...t,...n.transition}:e=this.config.defaultTransition,e}textureCoordsToSphericalCoords(n){if(!this.state.textureData?.panoData)throw new Ae("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(n,this.state.textureData.panoData);return!cr.equals(this.viewer.renderer.panoramaPose)||!cr.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,Qt),Qt.applyEuler(this.viewer.renderer.panoramaPose),Qt.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Qt)):e}sphericalCoordsToTextureCoords(n){if(!this.state.textureData?.panoData)throw new Ae("Current adapter does not support texture coordinates or no texture has been loaded");return(!cr.equals(this.viewer.renderer.panoramaPose)||!cr.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(n,Qt),Mo(Qt,this.viewer.renderer.sphereCorrection),Mo(Qt,this.viewer.renderer.panoramaPose),n=this.vector3ToSphericalCoords(Qt)),this.viewer.adapter.sphericalCoordsToTextureCoords(n,this.state.textureData.panoData)}sphericalCoordsToVector3(n,e,t=fi){return e||(e=new U),e.x=t*-Math.cos(n.pitch)*Math.sin(n.yaw),e.y=t*Math.sin(n.pitch),e.z=t*Math.cos(n.pitch)*Math.cos(n.yaw),e}vector3ToSphericalCoords(n){const e=Math.acos(n.y/Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z)),t=Math.atan2(n.x,n.z);return{yaw:t<0?-t:Math.PI*2-t,pitch:Math.PI/2-e}}viewerCoordsToVector3(n){const e=this.viewer.renderer.getIntersections(n).filter(t=>t.object.userData[jn]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(n){const e=this.viewerCoordsToVector3(n);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(n){const e=n.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(n){return this.sphericalCoordsToVector3(n,Qt),this.vector3ToViewerCoords(Qt)}isPointVisible(n){let e,t;if(n instanceof U)e=n,t=this.vector3ToViewerCoords(n);else if(Zo(n))e=this.sphericalCoordsToVector3(n,Qt),t=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&t.x>=0&&t.x<=this.viewer.state.size.width&&t.y>=0&&t.y<=this.viewer.state.size.height}cleanPosition(n){if("yaw"in n||"pitch"in n){if(!("yaw"in n)||!("pitch"in n))throw new Ae("Position is missing 'yaw' or 'pitch'");return{yaw:on(n.yaw),pitch:on(n.pitch,!0)}}else return this.textureCoordsToSphericalCoords(n)}cleanSphereCorrection(n){return{pan:on(n?.pan||0),tilt:on(n?.tilt||0,!0),roll:on(n?.roll||0,!0,!1)}}cleanPanoramaPose(n){return{pan:We.degToRad(n?.poseHeading||0),tilt:We.degToRad(n?.posePitch||0),roll:We.degToRad(n?.poseRoll||0)}}cleanPanoramaOptions(n,e){return e?.isEquirectangular&&(Mt(n.zoom)&&!Mt(e.initialFov)&&(n={...n,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),Mt(n.position)&&!Mt(e.initialHeading)&&!Mt(e.initialPitch)&&(n={...n,position:{yaw:on(e.initialHeading),pitch:on(e.initialPitch,!0)}})),n}},Ax=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,Cx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Xr=class mu{constructor(){this.$=mu.IDLE}is(...e){return e.some(t=>this.$&t)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Xr.IDLE=0;Xr.CLICK=1;Xr.MOVING=2;var mt=Xr,Rx=class extends Os{constructor(n){super(n),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new mt,this.keyHandler=new zr,this.resizeObserver=new ResizeObserver(_h(()=>this.viewer.autoSize(),50)),this.moveThreshold=th*Lt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(as.type,this),this.viewer.addEventListener(ps.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(as.type,this),this.viewer.removeEventListener(ps.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(n){switch(n.type){case"keydown":this.__onKeyDown(n);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(n);break;case"mouseup":this.__onMouseUp(n);break;case"touchmove":this.__onTouchMove(n);break;case"touchend":this.__onTouchEnd(n);break;case"fullscreenchange":this.__onFullscreenChange();break;case as.type:this.__applyMoveDelta();break;case ps.type:this.__clearMoveDelta();break}if(!fh(n,"."+Us))switch(n.type){case"mousedown":this.__onMouseDown(n);break;case"touchstart":this.__onTouchStart(n);break;case"wheel":this.__onMouseWheel(n);break}}__onKeyDown(n){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=n.key===Et.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(yt.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Wn(n.key,n))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[e,t]of Object.entries(this.config.keyboardActions))if(qo(n,e)){if(typeof t=="function")t(this.viewer,n);else{switch(t!=="ZOOM_IN"&&t!=="ZOOM_OUT"&&this.viewer.stopAll(),t){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(t)}n.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(n=>{n==="ZOOM_IN"||n==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(n){this.step.add(mt.CLICK),this.data.startMouseX=n.clientX,this.data.startMouseY=n.clientY,this.config.mousemove&&n.preventDefault()}__onMouseUp(n){this.step.is(mt.CLICK,mt.MOVING)&&this.__stopMove(n.clientX,n.clientY,n,n.button===2)}__onMouseMove(n){this.config.mousemove&&this.step.is(mt.CLICK,mt.MOVING)&&(n.preventDefault(),this.__doMove(n.clientX,n.clientY)),this.__handleObjectsEvents(n)}__onTouchStart(n){n.touches.length===1?(this.step.add(mt.CLICK),this.data.startMouseX=n.touches[0].clientX,this.data.startMouseY=n.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=n.touches[0];this.__stopMove(e.clientX,e.clientY,n,!0),this.data.longtouchTimeout=null},ih))):n.touches.length===2&&(this.step.set(mt.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(n),n.preventDefault()))}__onTouchEnd(n){if(this.__cancelLongTouch(),this.step.is(mt.CLICK,mt.MOVING)){if(n.preventDefault(),this.__cancelTwoFingersOverlay(),n.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(n.touches.length===0){const e=n.changedTouches[0];this.__stopMove(e.clientX,e.clientY,n)}}}__onTouchMove(n){if(this.__cancelLongTouch(),!!this.config.mousemove)if(n.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(mt.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:yt.TWO_FINGERS,image:Ax,title:this.config.lang.twoFingers})},sh));else if(this.step.is(mt.CLICK,mt.MOVING)){n.preventDefault();const e=n.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(n),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(yt.TWO_FINGERS))}__onMouseWheel(n){if(!this.config.mousewheel||!n.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:yt.CTRL_ZOOM,image:Cx,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(yt.CTRL_ZOOM),rh);return}n.preventDefault(),n.stopPropagation();const e=n.deltaY/Math.abs(n.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const n=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(n?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new os(n))}__resetMove(){this.step.set(mt.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(n){this.viewer.stopAll(),this.__resetMove();const e=vo(n);this.step.set(mt.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(n,e,t,i=!1){this.step.is(mt.CLICK)&&!this.__moveThresholdReached(n,e)&&this.__doClick(n,e,t,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(n,e,t,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=n-s.left,a=e-s.top,o=this.viewer.renderer.getIntersections({x:r,y:a}),c=o.find(l=>l.object.userData[jn]);if(c){const l=this.viewer.dataHelper.vector3ToSphericalCoords(c.point),h={rightclick:i,originalEvent:t,target:wr(t),clientX:n,clientY:e,viewerX:r,viewerY:a,yaw:l.yaw,pitch:l.pitch,objects:o.map(u=>u.object).filter(u=>!u.userData[jn])};try{const u=this.viewer.dataHelper.sphericalCoordsToTextureCoords(h);Object.assign(h,u)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-h.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-h.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new qh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Vh(h)),this.data.dblclickData=Fr(h),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},nh))}}__handleObjectsEvents(n){if(!Eh(this.state.objectsObservers)&&n.composedPath().includes(this.viewer.container)){const e=ph(this.viewer.container),t={x:n.clientX-e.x,y:n.clientY-e.y},i=this.viewer.renderer.getIntersections(t),s=(r,a,o)=>{this.viewer.dispatchEvent(new o(n,r,t,a))};for(const[r,a]of Object.entries(this.state.objectsObservers)){const o=i.find(c=>c.object.userData[r]);o?(a&&o.object!==a&&(s(a,r,yo),this.state.objectsObservers[r]=null),a?s(o.object,r,eu):(this.state.objectsObservers[r]=o.object,s(o.object,r,$d))):a&&(s(a,r,yo),this.state.objectsObservers[r]=null)}}}__doMove(n,e){if(this.step.is(mt.CLICK)&&this.__moveThresholdReached(n,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(mt.MOVING),this.data.mouseX=n,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(mt.MOVING)){const t=(n-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(n-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(t/this.state.size.width)*We.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*We.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=n,this.data.mouseY=e}}__moveThresholdReached(n,e){return Math.abs(n-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(n){if(this.step.is(mt.MOVING)){n.preventDefault();const e=vo(n);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/Lt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Ge.enabled=!1;var hr=new qe,gc=new ct,vc=new Yi,Px=class extends Os{constructor(n){super(n),this.frustumNeedsUpdate=!0,this.renderer=new X0(this.config.rendererParameters),this.renderer.setPixelRatio(Lt.pixelRatio),this.renderer.outputColorSpace=ui,this.renderer.toneMapping=Cc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new fo,this.camera=new jt(50,16/9,.1,2*fi),this.camera.matrixAutoUpdate=!1;const e=new Vt(new Is(fi).scale(-1,1,1),new Ps({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[jn]:!0},this.scene.add(e),this.raycaster=new lm,this.frustum=new Vo,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",t=>t.preventDefault()),this.viewer.addEventListener(fs.type,this),this.viewer.addEventListener(An.type,this),this.viewer.addEventListener(cs.type,this),this.viewer.addEventListener(hs.type,this),this.viewer.addEventListener(Nt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(n=>this.__renderLoop(n))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(fs.type,this),this.viewer.removeEventListener(An.type,this),this.viewer.removeEventListener(cs.type,this),this.viewer.removeEventListener(hs.type,this),this.viewer.removeEventListener(Nt.type,this),super.destroy()}handleEvent(n){switch(n.type){case fs.type:this.__onSizeUpdated();break;case An.type:this.__onZoomUpdated();break;case cs.type:this.__onPositionUpdated();break;case hs.type:this.__onPositionUpdated();break;case Nt.type:n.containsOptions("fisheye")&&this.__onPositionUpdated(),n.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(n){n?this.customRenderer=n(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(n){const e=this.timestamp?n-this.timestamp:0;this.timestamp=n,this.viewer.dispatchEvent(new as(n,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Pd))}setTexture(n){this.meshContainer||(this.meshContainer=new hi,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(n.panoData),this.viewer.adapter.setTexture(this.mesh,n,!1),this.meshContainer.add(this.mesh),this.state.textureData=n,this.viewer.needsUpdate()}setPanoramaPose(n,e=this.mesh){const t=this.viewer.dataHelper.cleanPanoramaPose(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}setSphereCorrection(n,e=this.meshContainer){const t=this.viewer.dataHelper.cleanSphereCorrection(n);e.rotation.set(t.tilt,t.pan,t.roll,"YXZ")}transition(n,e,t){const i=t.effect==="fade"||t.rotation,s=!Mt(e.position),r=!Mt(e.zoom),a=new Qo(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(a);const o=new hi,c=this.viewer.adapter.createMesh(n.panoData);if(this.viewer.adapter.setTexture(c,n,!0),this.viewer.adapter.setTextureOpacity(c,0),this.setPanoramaPose(n.panoData,c),this.setSphereCorrection(e.sphereCorrection,o),s&&!t.rotation){const p=this.viewer.getPosition(),m=new U(0,1,0);o.rotateOnWorldAxis(m,a.position.yaw-p.yaw);const x=new U(0,1,0).cross(this.camera.getWorldDirection(new U)).normalize();o.rotateOnWorldAxis(x,a.position.pitch-p.pitch)}o.add(c),this.scene.add(o),this.renderer.setRenderTarget(new qn),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:l,properties:h}=this.viewer.dataHelper.getAnimationProperties(t.speed,t.rotation?a.position:null,i?a.zoomLevel:null),u=new Cr({properties:{...h,opacity:{start:0,end:1}},duration:l,easing:"inOutCubic",onTick:p=>{switch(t.effect){case"fade":this.viewer.adapter.setTextureOpacity(c,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=t.effect==="black"?We.mapLinear(p.opacity,0,.5,1,0):We.mapLinear(p.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=t.effect==="black"?We.mapLinear(p.opacity,.5,1,0,1):We.mapLinear(p.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(c,1),r&&!i&&this.viewer.dynamics.zoom.setValue(a.zoomLevel));break}s&&t.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return u.then(p=>{o.remove(c),this.scene.remove(o),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=c,this.meshContainer.add(c),this.state.textureData=n,this.setPanoramaPose(n.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!t.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(n),this.viewer.adapter.disposeMesh(c))}),u}getIntersections(n){hr.x=2*n.x/this.state.size.width-1,hr.y=-2*n.y/this.state.size.height+1,this.raycaster.setFromCamera(hr,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(t=>t.object.visible).filter(t=>t.object.isMesh&&!!t.object.userData);return this.customRenderer?.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,hr)),e}isObjectVisible(n){if(!n)return!1;if(this.frustumNeedsUpdate&&(gc.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(gc),this.frustumNeedsUpdate=!1),n.isVector3)return this.frustum.containsPoint(n);if(n.isMesh&&n.geometry){const e=n;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),vc.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(vc)}else return n.isObject3D?this.frustum.intersectsObject(n):!1}addObject(n){this.scene.add(n)}removeObject(n){this.scene.remove(n)}cleanScene(n){const e=t=>{t.map?.dispose(),t.uniforms&&Object.values(t.uniforms).forEach(i=>{i.value?.dispose?.()}),t.dispose()};n.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>{e(i)}):e(t.material)),t instanceof fo||t.dispose?.(),t!==n&&this.cleanScene(t)})}},Lx=class extends rm{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(n,e,t,i){const s=this._abortController.signal,r=super.load(n,c=>{o(),e(c)},t,c=>{if(o(),s.aborted){const l=new Error;l.name="AbortError",l.message="The operation was aborted.",i(l)}else i(c)});function a(){r.src=""}function o(){s.removeEventListener("abort",a,!1)}return s.addEventListener("abort",a,!1),r}},Dx=class extends Os{constructor(n){super(n),this.fileLoader=new sm,this.fileLoader.setResponseType("blob"),this.imageLoader=new Lx}destroy(){this.abortLoading(),super.destroy()}abortLoading(){this.fileLoader.abort?.(),this.imageLoader.abort()}loadFile(n,e,t){const i=Di.get(n,t);if(i){if(i instanceof Blob)return e?.(100),Promise.resolve(i);Di.remove(n,t)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(n)),this.fileLoader.setWithCredentials(this.config.withCredentials(n));let s=0;return e?.(s),this.fileLoader.loadAsync(n,r=>{if(r.lengthComputable){const a=r.loaded/r.total*100;a>s&&(s=a,e?.(s))}}).then(r=>(s=100,e?.(s),Di.add(n,t,r),r))}loadImage(n,e,t){const i=Di.get(n,t);return i?(e?.(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(n)),this.imageLoader.loadAsync(n).then(s=>(Di.add(n,t,s),s))):this.loadFile(n,e,t).then(s=>this.blobToImage(s))}blobToImage(n){return new Promise((e,t)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=t,i.src=URL.createObjectURL(n)})}preloadPanorama(n){return this.viewer.adapter.supportsPreload(n)?this.viewer.adapter.loadTexture(n,!1):Promise.reject(new Ae("Current adapter does not support preload"))}dispatchProgress(n){this.viewer.loader.setProgress(n),this.viewer.dispatchEvent(new hd(Math.round(n)))}},Ix=class extends Os{constructor(n){super(n),this.zoom=new ns(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new An(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Rh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new cs(e))},{yaw:new ns(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new ns(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new ns(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new hs(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(We.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(We.degToRad(this.config.moveSpeed*50))}update(n){this.zoom.update(n),this.position.update(n),this.roll.update(n)}},Ux=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new U(0,0,fi),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},Nx=class extends Dh{constructor(n){if(super(),this.plugins={},this.children=[],this.parent=dh(n.container),!this.parent)throw new Ae('"container" element not found.');this.parent[jn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Ah(this.parent),Th(this.container,"core"),this.state=new Ux,this.config=vx(n),this.__setSize(this.config.size),this.overlay=new Mx(this);try{Lt.load()}catch(e){console.error(e),this.showError(this.config.lang.webglError);return}Di.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new Px(this),this.textureLoader=new Dx(this),this.eventsHandler=new Rx(this),this.dataHelper=new Tx(this),this.dynamics=new Ix(this),this.adapter.init?.(),this.loader=new xx(this),this.navbar=new _x(this),this.panel=new Sx(this),this.notification=new Ex(this),this.autoSize(),this.setCursor(null),$o(Lt.isTouchEnabled,e=>{Or(this.container,"psv--is-touch",e)}),this.config.plugins.forEach(([e,t])=>{this.plugins[e.id]=new e(this,t)});for(const e of Object.values(this.plugins))e.init?.();this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[n,e]of Object.entries(this.plugins))e.destroy(),delete this.plugins[n];this.children.slice().forEach(n=>n.destroy()),this.children.length=0,this.eventsHandler?.destroy(),this.renderer?.destroy(),this.textureLoader?.destroy(),this.dataHelper?.destroy(),this.adapter?.destroy(),this.dynamics?.destroy(),this.parent.removeChild(this.container),delete this.parent[jn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ds)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(n){if(typeof n=="string")return this.plugins[n];{const e=So(n);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return mh(this.parent,Lt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(n){n?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new fs(this.getSize())),this.navbar.autoSize())}setPanorama(n,e={}){this.textureLoader.abortLoading(),this.state.transitionAnimation?.cancel();const t=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=n,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection,(typeof this.config.panoData!="function"||typeof e.panoData=="function")&&(this.config.panoData=e.panoData);const i=r=>{if(Sh(r))return!1;if(this.loader.hide(),this.state.loadingPromise=null,r)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(r),this.dispatchEvent(new _d(n,r)),r;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new fd(n));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(r=>{if(r.panorama!==this.config.panorama)throw this.adapter.disposeTexture(r),_o();const a=this.dataHelper.cleanPanoramaOptions(e,r.panoData);return(!Mt(a.zoom)||!Mt(a.position))&&this.stopAll(),{textureData:r,cleanOptions:a}});return!t||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(r),this.renderer.setPanoramaPose(r.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Bi(r)),Mt(a.zoom)||this.zoom(a.zoom),Mt(a.position)||this.rotate(a.position)}).then(()=>i(),r=>i(r)):this.state.loadingPromise=s.then(({textureData:r,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Bi(r)),this.state.transitionAnimation=this.renderer.transition(r,a,t),this.state.transitionAnimation)).then(r=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Md(r)),!r)throw _o()}).then(()=>i(),r=>i(r)),this.state.loadingPromise}setOptions(n){const e={...this.config,...n};for(let[t,i]of Object.entries(n)){if(!(t in pn)){St(`Unknown option ${t}`);continue}if(t in mc){St(mc[t]);continue}switch(t in wo&&(i=wo[t](i,{rawConfig:e,defValue:pn[t]})),this.config[t]=i,t){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new An(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Nt(Object.keys(n)))}setOption(n,e){this.setOptions({[n]:e})}showError(n){this.overlay.show({id:yt.ERROR,image:bx,title:n,dismissible:!1})}hideError(){this.overlay.hide(yt.ERROR)}rotate(n){const e=new Bh(this.dataHelper.cleanPosition(n));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(n){this.dynamics.zoom.setValue(n)}zoomIn(n=1){this.dynamics.zoom.step(n)}zoomOut(n=1){this.dynamics.zoom.step(-n)}animate(n){const e=Zo(n),t=!Mt(n.zoom),i=new Qo(e?this.dataHelper.cleanPosition(n):void 0,n.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(n.speed,i.position,i.zoomLevel);return s?(this.state.animation=new Cr({properties:r,duration:s,easing:n.easing||"inOutSine",onTick:a=>{e&&this.dynamics.position.setValue({yaw:a.yaw,pitch:a.pitch}),t&&this.dynamics.zoom.setValue(a.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),t&&this.zoom(i.zoomLevel),new Cr(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(n){this.__setSize(n),this.autoSize()}__setSize(n){["width","height"].forEach(e=>{n?.[e]&&(/^[0-9.]+$/.test(n[e])&&(n[e]+="px"),this.parent.style[e]=n[e])})}enterFullscreen(){this.isFullscreenEnabled()||gh(this.parent,Lt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&vh(Lt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(n){return new wx(this,n)}setCursor(n){this.state.cursorOverride=n,n?this.container.style.cursor=n:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(n){this.state.objectsObservers[n]||(this.state.objectsObservers[n]=null)}unobserveObjects(n){delete this.state.objectsObservers[n]}stopAll(){return this.dispatchEvent(new ps),this.disableIdleTimer(),this.stopAnimation()}};var Ox=Object.defineProperty,Fx=(n,e)=>{for(var t in e)Ox(n,t,{get:e[t],enumerable:!0})},kx={};Fx(kx,{EnterMarkerEvent:()=>Tu,GotoMarkerDoneEvent:()=>To,HideMarkersEvent:()=>ms,LeaveMarkerEvent:()=>Su,MarkerVisibilityEvent:()=>_u,MarkersPluginEvent:()=>$t,RenderMarkersListEvent:()=>Xu,SelectMarkerEvent:()=>Ru,SelectMarkerListEvent:()=>Du,SetMarkersEvent:()=>zu,ShowMarkersEvent:()=>gs,UnselectMarkerEvent:()=>Nu});var $t=class extends Hr{},gu=class vu extends $t{constructor(e,t){super(vu.type),this.marker=e,this.visible=t}};gu.type="marker-visibility";var _u=gu,xu=class Eu extends $t{constructor(e){super(Eu.type),this.marker=e}};xu.type="goto-marker-done";var To=xu,Mu=class yu extends $t{constructor(e){super(yu.type),this.marker=e}};Mu.type="leave-marker";var Su=Mu,wu=class bu extends $t{constructor(e){super(bu.type),this.marker=e}};wu.type="enter-marker";var Tu=wu,Au=class Cu extends $t{constructor(e,t,i){super(Cu.type),this.marker=e,this.doubleClick=t,this.rightClick=i}};Au.type="select-marker";var Ru=Au,Pu=class Lu extends $t{constructor(e){super(Lu.type),this.marker=e}};Pu.type="select-marker-list";var Du=Pu,Iu=class Uu extends $t{constructor(e){super(Uu.type),this.marker=e}};Iu.type="unselect-marker";var Nu=Iu,Ou=class Fu extends $t{constructor(){super(Fu.type)}};Ou.type="hide-markers";var ms=Ou,ku=class Bu extends $t{constructor(e){super(Bu.type),this.markers=e}};ku.type="set-markers";var zu=ku,Hu=class Vu extends $t{constructor(){super(Vu.type)}};Hu.type="show-markers";var gs=Hu,Gu=class Wu extends $t{constructor(e){super(Wu.type),this.markers=e}};Gu.type="render-markers-list";var Xu=Gu,Bx=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Ts=class extends At{constructor(n){super(n,{className:"psv-markers-button",icon:Bx,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(gs.type,this),this.plugin.addEventListener(ms.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(gs.type,this),this.plugin.removeEventListener(ms.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof gs?this.toggleActive(!0):n instanceof ms&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Ts.id="markers";var Yu=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Pr="http://www.w3.org/2000/svg",at="psvMarker",zx=Te.dasherize(at),es="marker",Ii="markersList",Ao={amount:2,duration:100,easing:"linear"},Hx=(n,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Yu} ${e}</h1>
    <ul class="psv-panel-menu-list">
    ${n.map(t=>`
        <li data-${zx}="${t.id}" class="psv-panel-menu-item" tabindex="0">
          ${t.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${t.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${t.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,Yr=class extends At{constructor(n){super(n,{className:" psv-markers-list-button",icon:Yu,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(be.ShowPanelEvent.type,this),this.viewer.addEventListener(be.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(be.ShowPanelEvent.type,this),this.viewer.removeEventListener(be.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(n){n instanceof be.ShowPanelEvent?this.toggleActive(n.panelId===Ii):n instanceof be.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Yr.id="markersList";var _c=new U,Vx=new pi,xc=new U,Gx=class extends Ut{constructor(n=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=n,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(n,e){return super.copy(n,e),this.element=n.element.cloneNode(!0),this}},an=new ct,Wx=new ct,Xx=class{constructor(n={}){const e=this;let t,i,s,r;const a={camera:{style:""},objects:new WeakMap},o=n.element!==void 0?n.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",o.appendChild(c);const l=document.createElement("div");l.style.transformStyle="preserve-3d",c.appendChild(l),this.getSize=function(){return{width:t,height:i}},this.render=function(_,f){const d=f.projectionMatrix.elements[5]*r;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(t/f.view.width)}px, ${-f.view.offsetY*(i/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let A,w;f.isOrthographicCamera&&(A=-(f.right+f.left)/2,w=(f.top+f.bottom)/2);const E=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,C=f.isOrthographicCamera?`scale( ${E} )scale(`+d+")translate("+h(A)+"px,"+h(w)+"px)"+u(f.matrixWorldInverse):`scale( ${E} )translateZ(`+d+"px)"+u(f.matrixWorldInverse),R=(f.isPerspectiveCamera?"perspective("+d+"px) ":"")+C+"translate("+s+"px,"+r+"px)";a.camera.style!==R&&(l.style.transform=R,a.camera.style=R),x(_,_,f)},this.setSize=function(_,f){t=_,i=f,s=t/2,r=i/2,o.style.width=_+"px",o.style.height=f+"px",c.style.width=_+"px",c.style.height=f+"px",l.style.width=_+"px",l.style.height=f+"px"};function h(_){return Math.abs(_)<1e-10?0:_}function u(_){const f=_.elements;return"matrix3d("+h(f[0])+","+h(-f[1])+","+h(f[2])+","+h(f[3])+","+h(f[4])+","+h(-f[5])+","+h(f[6])+","+h(f[7])+","+h(f[8])+","+h(-f[9])+","+h(f[10])+","+h(f[11])+","+h(f[12])+","+h(-f[13])+","+h(f[14])+","+h(f[15])+")"}function p(_){const f=_.elements;return"translate(-50%,-50%)"+("matrix3d("+h(f[0])+","+h(f[1])+","+h(f[2])+","+h(f[3])+","+h(-f[4])+","+h(-f[5])+","+h(-f[6])+","+h(-f[7])+","+h(f[8])+","+h(f[9])+","+h(f[10])+","+h(f[11])+","+h(f[12])+","+h(f[13])+","+h(f[14])+","+h(f[15])+")")}function m(_){_.isCSS3DObject&&(_.element.style.display="none");for(let f=0,d=_.children.length;f<d;f++)m(_.children[f])}function x(_,f,d,A){if(_.visible===!1){m(_);return}if(_.isCSS3DObject){const w=_.layers.test(d.layers)===!0,E=_.element;if(E.style.display=w===!0?"":"none",w===!0){_.onBeforeRender(e,f,d);let C;_.isCSS3DSprite?(an.copy(d.matrixWorldInverse),an.transpose(),_.rotation2D!==0&&an.multiply(Wx.makeRotationZ(_.rotation2D)),_.matrixWorld.decompose(_c,Vx,xc),an.setPosition(_c),an.scale(xc),an.elements[3]=0,an.elements[7]=0,an.elements[11]=0,an.elements[15]=1,C=p(an)):C=p(_.matrixWorld);const P=a.objects.get(_);if(P===void 0||P.style!==C){E.style.transform=C;const R={style:C};a.objects.set(_,R)}E.parentNode!==l&&l.appendChild(E),_.onAfterRender(e,f,d)}}for(let w=0,E=_.children.length;w<E;w++)x(_.children[w],f,d)}}},Yx=class{constructor(n){this.viewer=n,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new Xx({element:this.element}),this.scene=new fo,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{const i=t.target[at];i.config.visible&&(i.viewportIntersection=t.isIntersecting)})},{root:this.element}),n.addEventListener(be.ReadyEvent.type,this,{once:!0}),n.addEventListener(be.SizeUpdatedEvent.type,this),n.addEventListener(be.RenderEvent.type,this)}handleEvent(n){switch(n.type){case be.ReadyEvent.type:case be.SizeUpdatedEvent.type:this.updateSize();break;case be.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(be.ReadyEvent.type,this),this.viewer.removeEventListener(be.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(be.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const n=this.viewer.getSize();this.renderer.setSize(n.width,n.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(n){this.scene.add(n.threeElement),this.intersectionObserver.observe(n.domElement)}removeObject(n){this.scene.remove(n.threeElement),this.intersectionObserver.unobserve(n.domElement)}},Mr=(n=>(n.image="image",n.html="html",n.element="element",n.imageLayer="imageLayer",n.videoLayer="videoLayer",n.elementLayer="elementLayer",n.polygon="polygon",n.polygonPixels="polygonPixels",n.polyline="polyline",n.polylinePixels="polylinePixels",n.square="square",n.rect="rect",n.circle="circle",n.ellipse="ellipse",n.path="path",n))(Mr||{});function Co(n,e=!1){const t=[];if(Object.keys(Mr).forEach(i=>{n[i]&&t.push(i)}),t.length===0&&!e)throw new Ae(`missing marker content, either ${Object.keys(Mr).join(", ")}`);if(t.length>1)throw new Ae(`multiple marker content, either ${Object.keys(Mr).join(", ")}`);return t[0]}var qu=class{constructor(n,e,t){if(this.viewer=n,this.plugin=e,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!t.id)throw new Ae("missing marker id");this.type=Co(t),this.createElement(),this.update(t)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(n){const e=Co(n,!0);if(e!==void 0&&e!==this.type)throw new Ae(`cannot change marker ${n.id} type`);if(this.config=Te.deepmerge(this.config,n),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),Te.isNil(this.config.visible)&&(this.config.visible=!0),Te.isNil(this.config.zIndex)&&(this.config.zIndex=1),Te.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const t=this.config.rotation;typeof t=="object"?this.config.rotation={yaw:t.yaw?Te.parseAngle(t.yaw,!0,!1):0,pitch:t.pitch?Te.parseAngle(t.pitch,!0,!1):0,roll:t.roll?Te.parseAngle(t.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:Te.parseAngle(t,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=Te.parsePoint(this.config.anchor)}getListContent(){return this.config.listContent?this.config.listContent:this.config.tooltip?.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(n,e,t=!1){if(this.state.visible&&this.config.tooltip?.content&&this.state.position2D){const i={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(n||e){const s=Te.getPosition(this.viewer.container);i.top=e-s.y+10,i.left=n-s.x,i.box={width:20,height:20}}else i.top=this.state.position2D.y,i.left=this.state.position2D.x;else{const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let r=this.state.size.width,a=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(r*=this.config.hoverScale.amount,a*=this.config.hoverScale.amount),i.top=s.y-a*this.state.anchor.y+a/2,i.left=s.x-r*this.state.anchor.x+r/2,i.box={width:r,height:a}}this.tooltip?t?this.tooltip.update(this.config.tooltip.content,i):this.tooltip.move(i):this.tooltip=this.viewer.createTooltip(i)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},sl=class extends qu{get domElement(){return this.element}constructor(n,e,t){super(n,e,t)}afterCreateElement(){this.element[at]=this}destroy(){delete this.element[at],super.destroy()}update(n){super.update(n);const e=this.domElement;e.id=`psv-marker-${this.config.id}`,e.setAttribute("class","psv-marker"),this.state.visible&&e.classList.add("psv-marker--visible"),this.config.tooltip&&e.classList.add("psv-marker--has-tooltip"),this.config.content&&e.classList.add("psv-marker--has-content"),this.config.className&&Te.addClasses(e,this.config.className),e.style.opacity=`${this.config.opacity}`,e.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(e.style,this.config.style)}},Lr=class extends sl{constructor(n,e,t){super(n,e,t)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:n,zoomLevel:e,hoveringMarker:t}){this.__updateSize();const i=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return i.x-=this.state.size.width*this.state.anchor.x,i.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&i.x+this.state.size.width>=0&&i.x-this.state.size.width<=this.viewer.state.size.width&&i.y+this.state.size.height>=0&&i.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${i.x}px ${i.y}px 0px`,this.applyScale({zoomLevel:e,viewerPosition:n,mouseover:this===t}),i):null}update(n){if(super.update(n),!Te.isExtendedPosition(this.config.position))throw new Ae(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(t){throw new Ae(`invalid marker ${this.id} position`,t)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.domElement;e.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Ao:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),e.style.rotate=this.config.rotation.roll!==0?We.radToDeg(this.config.rotation.roll)+"deg":null,e.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const n=this.domElement,e=!this.state.visible||!this.state.size;if(e&&n.classList.add("psv-marker--transparent"),this.isSvg()){const t=n.firstElementChild.getBoundingClientRect();this.state.size={width:t.width,height:t.height}}else this.state.size={width:n.offsetWidth,height:n.offsetHeight};e&&n.classList.remove("psv-marker--transparent"),this.isSvg()&&(n.style.width=this.state.size.width+"px",n.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:n,viewerPosition:e,mouseover:t}){t!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let i=1;if(typeof this.config.scale=="function")i=this.config.scale(n,e);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[s,r]=this.config.scale.zoom;i*=s+(r-s)*bn.EASINGS.inQuad(n/100)}if(Array.isArray(this.config.scale.yaw)){const[s,r]=this.config.scale.yaw,a=We.degToRad(this.viewer.state.hFov)/2,o=Math.abs(Te.getShortestArc(this.state.position.yaw,e.yaw));i*=r+(s-r)*bn.EASINGS.outQuad(Math.max(0,(a-o)/a))}}t&&this.config.hoverScale&&(i*=this.config.hoverScale.amount),this.domElement.style.scale=`${i}`}},qx=`// https://www.8thwall.com/playground/chromakey-threejs

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
`,jx=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,$x=class extends Rn{get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}set alpha(n){this.uniforms.alpha.value=n}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(n){this.uniforms.keying.value=n?.enabled===!0,n?.enabled&&(typeof n.color=="object"&&"r"in n.color?this.uniforms.color.value.set(n.color.r/255,n.color.g/255,n.color.b/255):this.uniforms.color.value.set(n.color??65280),this.uniforms.similarity.value=n.similarity??.2,this.uniforms.smoothness.value=n.smoothness??.2)}constructor(n){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:n?.map},repeat:{value:new qe(1,1)},offset:{value:new qe(0,0)},alpha:{value:n?.alpha??1},keying:{value:!1},color:{value:new Ze(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:jx,fragmentShader:qx}),this.chromaKey=n?.chromaKey}};function Zx({src:n,withCredentials:e,muted:t,autoplay:i}){const s=document.createElement("video");return s.crossOrigin=e?"use-credentials":"anonymous",s.loop=!0,s.playsInline=!0,s.autoplay=i,s.muted=t,s.preload="metadata",n instanceof MediaStream?s.srcObject=n:s.src=n,s}function Kx(n,e,t){const[i,s]=n,[r,a]=e,o=Te.greatArcDistance(n,e),c=Math.sin((1-t)*o)/Math.sin(o),l=Math.sin(t*o)/Math.sin(o),h=c*Math.cos(s)*Math.cos(i)+l*Math.cos(a)*Math.cos(r),u=c*Math.cos(s)*Math.sin(i)+l*Math.cos(a)*Math.sin(r),p=c*Math.sin(s)+l*Math.sin(a);return[Math.atan2(u,h),Math.atan2(p,Math.sqrt(h*h+u*u))]}function Jx(n){const e=[n[0]];let t=0;for(let i=1;i<n.length;i++){const s=n[i-1][0]-n[i][0];s>Math.PI?t+=1:s<-Math.PI&&(t-=1),e.push([n[i][0]+t*2*Math.PI,n[i][1]])}return e}function ju(n){return n.reduce((e,t)=>e.add(t),new U).normalize()}function Qx(n){const e=Jx(n);let t=0;const i=[];for(let r=0;r<e.length-1;r++){const a=Te.greatArcDistance(e[r],e[r+1])*bn.SPHERE_RADIUS;i.push(a),t+=a}let s=0;for(let r=0;r<e.length-1;r++){if(s+i[r]>t/2){const a=(t/2-s)/i[r];return Kx(e[r],e[r+1],a)}s+=i[r]}return e[Math.round(e.length/2)]}var dr=new U,Ec=new U,Ta=new U,Mc=new U,yc=new U,Sc=new U;function eE(n,e,t){dr.copy(t).normalize(),Ec.crossVectors(n,e).normalize(),Ta.crossVectors(Ec,n).normalize(),Mc.copy(n).multiplyScalar(-dr.dot(Ta)),yc.copy(Ta).multiplyScalar(dr.dot(n));const i=new U().addVectors(Mc,yc).normalize();return Sc.crossVectors(i,dr),i.applyAxisAngle(Sc,.01).multiplyScalar(bn.SPHERE_RADIUS)}var tE=class extends qu{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(n,e,t){super(n,e,t)}is3d(){return!0}createElement(){const n=new $x({alpha:0}),e=new Ds(1,1),t=new Vt(e,n);t.userData={[at]:this},Object.defineProperty(t,"visible",{enumerable:!0,get:function(){return this.userData[at].config.visible},set:function(i){this.userData[at].config.visible=i}}),this.element=new hi().add(t),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[at],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(n){super.update(n);const e=this.threeMesh,t=e.parent,i=e.material;if(Te.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(r){throw new Ae(`invalid marker ${this.id} position`,r)}if(!this.config.size)throw new Ae(`missing marker ${this.id} size`);this.state.size=this.config.size,e.scale.set(this.config.size.width/100,this.config.size.height/100,1),e.position.set(e.scale.x*(.5-this.state.anchor.x),e.scale.y*(this.state.anchor.y-.5),0),e.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,t.position),t.lookAt(0,t.position.y,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll);const s=e.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(r=>{const a=new U;return a.fromBufferAttribute(s,r),e.localToWorld(a)})}else{if(this.config.position?.length!==4)throw new Ae(`missing marker ${this.id} position`);let s;try{s=this.config.position.map(c=>this.viewer.dataHelper.cleanPosition(c))}catch(c){throw new Ae(`invalid marker ${this.id} position`,c)}const r=s.map(c=>this.viewer.dataHelper.sphericalCoordsToVector3(c)),a=ju(r);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(a),this.state.positions3D=r;const o=e.geometry.getAttribute("position");[r[0],r[1],r[3],r[2]].forEach((c,l)=>{o.setX(l,c.x),o.setY(l,c.y),o.setZ(l,c.z)}),o.needsUpdate=!0,this.__setTextureWrap(i)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){i.map?.dispose();const s=Zx({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),r=new Jp(s);i.map=r,i.alpha=0,s.addEventListener("loadedmetadata",()=>{this.viewer&&(i.alpha=this.config.opacity,Te.isExtendedPosition(this.config.position)||(e.material.userData[at]={width:s.videoWidth,height:s.videoHeight},this.__setTextureWrap(i)))},{once:!0}),s.autoplay&&s.play(),this.definition=this.config.videoLayer}else i.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){i.map?.dispose();const s=new wt;i.map=s,i.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(r=>{this.viewer&&(Te.isExtendedPosition(this.config.position)||(e.material.userData[at]={width:r.width,height:r.height},this.__setTextureWrap(i)),s.image=r,s.anisotropy=4,s.needsUpdate=!0,i.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else i.alpha=this.config.opacity;break}i.chromaKey=this.config.chromaKey,e.renderOrder=1e3+this.config.zIndex,e.geometry.boundingBox=null}__setTextureWrap(n){const e=n.userData[at];if(!e||!e.height||!e.width){n.repeat.set(1,1),n.offset.set(0,0);return}const t=this.config.position.map(u=>this.viewer.dataHelper.cleanPosition(u)),i=Te.greatArcDistance([t[0].yaw,t[0].pitch],[t[1].yaw,t[1].pitch]),s=Te.greatArcDistance([t[3].yaw,t[3].pitch],[t[2].yaw,t[2].pitch]),r=Te.greatArcDistance([t[1].yaw,t[1].pitch],[t[2].yaw,t[2].pitch]),a=Te.greatArcDistance([t[0].yaw,t[0].pitch],[t[3].yaw,t[3].pitch]),o=(i+s)/(r+a),c=e.width/e.height;let l=0,h=0;o<c?l=c-o:h=1/c-1/o,n.repeat.set(1-l,1-h),n.offset.set(l/2,h/2)}},nE=class extends sl{constructor(n,e,t){super(n,e,t),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new Gx(this.element),this.object.userData={[at]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[at].config.visible},set:function(n){this.userData[at].config.visible=n}}),this.afterCreateElement()}destroy(){delete this.object.userData[at],delete this.object,super.destroy()}render({viewerPosition:n,zoomLevel:e}){const t=this.domElement;if(this.state.size={width:t.offsetWidth,height:t.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const s=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return this.config.elementLayer.updateMarker?.({marker:this,position:s,viewerPosition:n,zoomLevel:e,viewerSize:this.viewer.state.size}),s}else return null}update(n){if(super.update(n),!Te.isExtendedPosition(this.config.position))throw new Ae(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(i){throw new Ae(`invalid marker ${this.id} position`,i)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const e=this.threeElement,t=this.domElement;t.classList.add("psv-marker--css3d"),t.childNodes.forEach(i=>i.remove()),t.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",e.position.copy(this.state.positions3D[0]).multiplyScalar(100),e.lookAt(0,this.state.positions3D[0].y*100,0),e.rotateY(-this.config.rotation.yaw),e.rotateX(-this.config.rotation.pitch),e.rotateZ(-this.config.rotation.roll)}},iE=class extends Lr{constructor(n,e,t){super(n,e,t)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(n){const e=super.render(n);return e&&this.type==="element"&&this.config.element.updateMarker?.({marker:this,position:e,viewerPosition:n.viewerPosition,zoomLevel:n.zoomLevel,viewerSize:this.viewer.state.size}),e}update(n){super.update(n);const e=this.domElement;if(this.config.image&&!this.config.size)throw new Ae(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,e.style.width=this.config.size.width+"px",e.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,e.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,e.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,e.childNodes.forEach(t=>t.remove()),e.appendChild(this.config.element),this.config.element.style.display="block");break}}},sE=class extends sl{constructor(n,e,t){super(n,e,t)}createElement(){this.element=document.createElementNS(Pr,"path"),this.element[at]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const n=this.__getAllPolyPositions();if(n[0].length>(this.isPolygon?2:1)){const t=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),i=n.filter(s=>s.length>0).map(s=>{let r="M";return r+=s.map(a=>`${a.x-t.x},${a.y-t.y}`).join("L"),this.isPolygon&&(r+="Z"),r}).join(" ");return this.domElement.setAttributeNS(null,"d",i),this.domElement.setAttributeNS(null,"transform",`translate(${t.x} ${t.y})`),t}else return null}update(n){super.update(n);const e=this.domElement;e.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,Te.dasherize(t),i)}),this.isPolyline&&!this.config.svgStyle.fill&&e.setAttributeNS(null,"fill","none")):this.isPolygon?e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let t=this.config[this.type];if(!Array.isArray(t[0])&&typeof t[0]!="object")for(let i=0;i<t.length;i++)t.splice(i,2,[t[i],t[i+1]]);if(!Array.isArray(t[0][0])&&typeof t[0][0]!="object"&&(t=[t]),this.isPolyline&&t.length>1)throw new Ae("polylines cannot have holes");this.isPixels?this.definition=t.map(i=>i.map(s=>{let r;return Te.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:s[0],textureY:s[1]}),[r.yaw,r.pitch]})):this.definition=t.map(i=>i.map(s=>{let r;return Te.isExtendedPosition(s)?r=this.viewer.dataHelper.cleanPosition(s):r=this.viewer.dataHelper.cleanPosition({yaw:s[0],pitch:s[1]}),[r.yaw,r.pitch]}))}catch(t){throw new Ae(`invalid marker ${this.id} position`,t)}if(this.positions3D=this.coords.map(t=>t.map(i=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:i[0],pitch:i[1]}))),this.isPolygon){const t=ju(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(t)}else{const t=Qx(this.coords[0]);this.state.position={yaw:t[0],pitch:t[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(n=>this.__getPolyPositions(n))}__getPolyPositions(n){const e=n.length,t=n.map(s=>({vector:s,visible:s.dot(this.viewer.state.direction)>0})),i=[];return t.forEach((s,r)=>{s.visible||[r===0?t[e-1]:t[r-1],r===e-1?t[0]:t[r+1]].forEach(o=>{o.visible&&i.push({visible:o.vector,invisible:s.vector,index:r})})}),i.reverse().forEach(s=>{t.splice(s.index,0,{vector:eE(s.visible,s.invisible,this.viewer.state.direction),visible:!0})}),t.filter(s=>s.visible).map(s=>this.viewer.dataHelper.vector3ToViewerCoords(s.vector))}},rE=class extends Lr{get svgElement(){return this.domElement.firstElementChild}constructor(n,e,t){super(n,e,t)}isSvg(){return!0}createElement(){const n=this.type==="square"?"rect":this.type,e=document.createElementNS(Pr,n);this.element=document.createElementNS(Pr,"svg"),this.element.appendChild(e),this.afterCreateElement()}update(n){super.update(n);const e=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([t,i])=>{e.setAttributeNS(null,t,i)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([t,i])=>{e.setAttributeNS(null,Te.dasherize(t),i)}):e.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},aE=Te.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(n){return n?(n===!0&&(n=Ao),typeof n=="number"&&(n={amount:n}),{...Ao,...n}):null}});function oE(n){switch(Co(n,!1)){case"image":case"html":case"element":return iE;case"imageLayer":case"videoLayer":return tE;case"elementLayer":return nE;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return sE;case"square":case"rect":case"circle":case"ellipse":case"path":return rE;default:throw new Ae("invalid marker type")}}var Fs=class $u extends il{constructor(e,t){super(e,t),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",i=>i.preventDefault()),this.svgContainer=document.createElementNS(Pr,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new Yx(e),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(e){return[$u,e]}init(){super.init(),Te.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(be.ClickEvent.type,this),this.viewer.addEventListener(be.DoubleClickEvent.type,this),this.viewer.addEventListener(be.RenderEvent.type,this),this.viewer.addEventListener(be.ConfigChangedEvent.type,this),this.viewer.addEventListener(be.ObjectEnterEvent.type,this),this.viewer.addEventListener(be.ObjectHoverEvent.type,this),this.viewer.addEventListener(be.ObjectLeaveEvent.type,this),this.viewer.addEventListener(be.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(at),this.viewer.removeEventListener(be.ClickEvent.type,this),this.viewer.removeEventListener(be.DoubleClickEvent.type,this),this.viewer.removeEventListener(be.RenderEvent.type,this),this.viewer.removeEventListener(be.ObjectEnterEvent.type,this),this.viewer.removeEventListener(be.ObjectHoverEvent.type,this),this.viewer.removeEventListener(be.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(be.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(e){switch(e.type){case be.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case be.RenderEvent.type:this.renderMarkers();break;case be.ClickEvent.type:this.__onClick(e,!1);break;case be.DoubleClickEvent.type:this.__onClick(e,!0);break;case be.ObjectEnterEvent.type:case be.ObjectLeaveEvent.type:case be.ObjectHoverEvent.type:if(e.userDataKey===at){const t=e.originalEvent,i=e.object.userData[at];switch(e.type){case be.ObjectEnterEvent.type:i.config.style?.cursor?this.viewer.setCursor(i.config.style.cursor):(i.config.tooltip||i.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(t,i);break;case be.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(i);break;case be.ObjectHoverEvent.type:this.__onHoverMarker(t,i);break}}break;case"mouseenter":{const t=this.__getTargetMarker(Te.getEventTarget(e));this.__onEnterMarker(e,t);break}case"mouseleave":{const t=this.__getTargetMarker(Te.getEventTarget(e));this.__onLeaveMarker(t);break}case"mousemove":{const t=this.__getTargetMarker(Te.getEventTarget(e),!0);this.__onHoverMarker(e,t);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(e=>{e.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new gs)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(e=>{e.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new ms)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!0,e.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(e=>{e.state.staticTooltip=!1,e.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(e,t=!0){if(this.markers[e.id])throw new Ae(`marker "${e.id}" already exists`);const i=new(oE(e))(this.viewer,this,e);i.isPoly()?this.svgContainer.appendChild(i.domElement):i.isCss3d()?this.css3DContainer.addObject(i):i.is3d()?this.viewer.renderer.addObject(i.threeElement):this.container.appendChild(i.domElement),this.markers[i.id]=i,this.state.showAllTooltips&&(i.state.staticTooltip=!0),t&&this.__afterChangeMarkers()}getMarker(e){const t=typeof e=="object"?e.id:e;if(!this.markers[t])throw new Ae(`cannot find marker "${t}"`);return this.markers[t]}getCurrentMarker(){return this.state.currentMarker}updateMarker(e,t=!0){const i=this.getMarker(e.id);i.update(e),t&&(this.__afterChangeMarkers(),(i===this.state.hoveringMarker&&i.config.tooltip?.trigger==="hover"||i.state.staticTooltip)&&i.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(e,t=!0){const i=this.getMarker(e);i.isPoly()?this.svgContainer.removeChild(i.domElement):i.isCss3d()?this.css3DContainer.removeObject(i):i.is3d()?this.viewer.renderer.removeObject(i.threeElement):this.container.removeChild(i.domElement),this.state.hoveringMarker===i&&(this.state.hoveringMarker=null),this.state.currentMarker===i&&(this.state.currentMarker=null),i.destroy(),delete this.markers[i.id],t&&this.__afterChangeMarkers()}removeMarkers(e,t=!0){e.forEach(i=>this.removeMarker(i,!1)),t&&this.__afterChangeMarkers()}setMarkers(e,t=!0){this.clearMarkers(!1),e?.forEach(i=>{this.addMarker(i,!1)}),t&&this.__afterChangeMarkers()}clearMarkers(e=!0){Object.keys(this.markers).forEach(t=>{this.removeMarker(t,!1)}),e&&this.__afterChangeMarkers()}gotoMarker(e,t=this.config.gotoMarkerSpeed){const i=this.getMarker(e);return t?this.viewer.animate({...i.state.position,zoom:i.config.zoomLvl,speed:t}).then(()=>{this.dispatchEvent(new To(i))}):(this.viewer.rotate(i.state.position),Te.isNil(i.config.zoomLvl)||this.viewer.zoom(i.config.zoomLvl),this.dispatchEvent(new To(i)),Promise.resolve())}hideMarker(e){this.toggleMarker(e,!1)}showMarker(e){this.toggleMarker(e,!0)}showMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!0,t.showTooltip()}hideMarkerTooltip(e){const t=this.getMarker(e);t.state.staticTooltip=!1,t.hideTooltip()}toggleMarker(e,t){const i=this.getMarker(e);i.config.visible=Te.isNil(t)?!i.config.visible:t,this.renderMarkers()}showMarkerPanel(e){const t=this.getMarker(e);t.config.content?this.viewer.panel.show({id:es,content:t.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(es)}toggleMarkersList(){this.viewer.panel.isVisible(Ii)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let e=[];Object.values(this.markers).forEach(i=>{i.config.visible&&!i.config.hideList&&e.push(i)});const t=new Xu(e);this.dispatchEvent(t),e=t.markers,this.viewer.panel.show({id:Ii,content:Hx(e,this.viewer.config.lang[Ts.id]),noMargin:!0,clickHandler:i=>{const s=Te.getClosest(i,".psv-panel-menu-item"),r=s?s.dataset[at]:void 0;if(r){const a=this.getMarker(r);this.dispatchEvent(new Du(a)),this.gotoMarker(a.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Ii)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const e=this.viewer.getZoomLevel(),t=this.viewer.getPosition(),i=this.state.hoveringMarker;Object.values(this.markers).forEach(s=>{let r=s.config.visible,a=!1,o=null;r&&(o=s.render({viewerPosition:t,zoomLevel:e,hoveringMarker:i}),r=!!o),a=s.state.visible!==r,s.state.visible=r,s.state.position2D=o,s.domElement&&Te.toggleClass(s.domElement,"psv-marker--visible",r),r?s.state.staticTooltip?s.showTooltip():s!==this.state.hoveringMarker&&s.hideTooltip():s.hideTooltip(),a&&(this.dispatchEvent(new _u(s,r)),(s.is3d()||s.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(e,t=!1){if(e instanceof Node){const i=t?Te.getClosest(e,".psv-marker"):e;return i?i[at]:void 0}else return Array.isArray(e)?e.map(i=>i.userData[at]).filter(i=>!!i).sort((i,s)=>s.config.zIndex-i.config.zIndex)[0]:null}__onEnterMarker(e,t){t&&(this.state.hoveringMarker=t,this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,this.dispatchEvent(new Tu(t)),t instanceof Lr&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!t.state.staticTooltip&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onLeaveMarker(e){e&&(this.dispatchEvent(new Su(e)),e instanceof Lr&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!e.state.staticTooltip&&e.config.tooltip?.trigger==="hover"?e.hideTooltip():e.state.staticTooltip&&e.showTooltip())}__onHoverMarker(e,t){t&&(this.state.lastClientX=e.clientX,this.state.lastClientY=e.clientY,(t.isPoly()||t.is3d()||t.isCss3d())&&t.config.tooltip?.trigger==="hover"&&t.showTooltip(e.clientX,e.clientY))}__onClick(e,t){const i=this.__getTargetMarker(e.data.objects),r=this.__getTargetMarker(e.data.target,!0)||i;this.state.currentMarker&&this.state.currentMarker!==r&&(this.dispatchEvent(new Nu(this.state.currentMarker)),this.viewer.panel.hide(es),!this.state.showAllTooltips&&this.state.currentMarker.config.tooltip?.trigger==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),r&&(this.state.currentMarker=r,this.dispatchEvent(new Ru(r,t,e.data.rightclick)),this.config.clickEventOnMarker?e.data.marker=r:e.stopImmediatePropagation(),this.markers[r.id]&&!e.data.rightclick&&(r.config.tooltip?.trigger==="click"?r.tooltip?this.hideMarkerTooltip(r.id):this.showMarkerTooltip(r.id):this.showMarkerPanel(r.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new zu(this.getMarkers()))}__refreshUi(){const e=Object.values(this.markers).filter(t=>!t.config.hideList).length;e===0?(this.viewer.panel.hide(es),this.viewer.panel.hide(Ii)):this.viewer.panel.isVisible(Ii)?this.showMarkersList():this.viewer.panel.isVisible(es)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),this.viewer.navbar.getButton(Ts.id,!1)?.toggle(e>0),this.viewer.navbar.getButton(Yr.id,!1)?.toggle(e>0)}__checkObjectsObserver(){Object.values(this.markers).some(t=>t.is3d())?this.viewer.observeObjects(at):this.viewer.unobserveObjects(at)}};Fs.id="markers";Fs.VERSION="5.14.0";Fs.configParser=aE;Fs.readonlyOptions=["markers"];var Zu=Fs;pn.lang[Ts.id]="Markers";pn.lang[Yr.id]="Markers list";Wr(Ts,"caption:left");Wr(Yr,"caption:left");var lE=Object.defineProperty,cE=(n,e)=>{for(var t in e)lE(n,t,{get:e[t],enumerable:!0})},hE={};cE(hE,{HideGalleryEvent:()=>_s,ShowGalleryEvent:()=>vs});var Ku=class Ju extends Hr{constructor(e){super(Ju.type),this.fullscreen=e}};Ku.type="show-gallery";var vs=Ku,Qu=class ef extends Hr{constructor(){super(ef.type)}};Qu.type="hide-gallery";var _s=Qu,dE='<svg viewBox="185 115 330 330" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M186.7 326.7V163.3c0-15 8.3-23.3 23.3-23.3h210c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H210c-15 0-23.3-8.3-23.3-23.3zm70 70v-23.4H420c30.2 0 46.7-16.4 46.7-46.6V210H490c15 0 23.3 8.3 23.3 23.3v163.4c0 15-8.3 23.3-23.3 23.3H280c-15 0-23.3-8.3-23.3-23.3zm-23.8-105H397l-40-50.4-26.7 29.7-44.3-54.5zm106.7-76c9.6 0 17.8-7.8 17.8-17.2a18 18 0 0 0-17.8-17.8c-9.4 0-17.2 8.2-17.2 17.8 0 9.4 7.8 17.2 17.2 17.2z"/><!--Created by Wolf Böse from the Noun Project--></svg>',ks=class extends At{constructor(n){super(n,{className:"psv-gallery-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:dE}),this.plugin=this.viewer.getPlugin("gallery"),this.plugin&&(this.plugin.addEventListener(vs.type,this),this.plugin.addEventListener(_s.type,this))}destroy(){this.plugin&&(this.plugin.removeEventListener(vs.type,this),this.plugin.removeEventListener(_s.type,this)),super.destroy()}handleEvent(n){n instanceof vs?this.toggleActive(!0):n instanceof _s&&this.toggleActive(!1)}isSupported(){return!!this.plugin}onClick(){this.plugin.toggle()}};ks.id="gallery";var tf="psvGalleryItem",nf=Te.dasherize(tf),ur="psv-gallery-item--active",uE=(n,e)=>`
${n.map(t=>`
<div class="psv-gallery-item" 
     data-${nf}="${t.id}"
     style="width:${e.width}px; aspect-ratio:${e.width/e.height};"
     tabindex="0">
    ${t.name?`<div class="psv-gallery-item-title"><span>${t.name}</span></div>`:""}
    <svg class="psv-gallery-item-thumb" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><use href="#psvGalleryBlankIcon"></use></svg>
    ${t.thumbnail?`<div class="psv-gallery-item-thumb" data-src="${t.thumbnail}"></div>`:""}
</div>
`).join("")}
`,wc=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 0 50 100"><polygon fill="currentColor" points="24.66 99.31 25.34 100 75.34 50 25.34 0 24.66 0.69 24.66 22.64 52.01 50 24.66 77.36 24.66 99.31"/><!-- Created by Rainbow Designs from the Noun Project --></svg>
`,fE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
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
</svg>`;function bc(n,e){let t;n.addEventListener("mousedown",()=>{e(),clearInterval(t),t=setInterval(()=>{n.style.pointerEvents==="none"?clearInterval(t):e()},500)}),n.addEventListener("mouseup",()=>{clearInterval(t)})}var pE=class extends Zn{constructor(n,e){super(e,{className:`psv-gallery ${bn.CAPTURE_EVENTS_CLASS}`}),this.plugin=n,this.state={visible:!0,mousedown:!1,initMouse:null,mouse:null,itemMargin:null,breakpoint:null,scrollLeft:0,scrollTop:0,isAboveBreakpoint:null},this.container.innerHTML=fE,this.container.querySelector("svg").style.display="none";const t=document.createElement("div");t.className="psv-panel-close-button",t.innerHTML=bn.ICONS.close,this.container.appendChild(t),t.addEventListener("click",()=>this.plugin.hide()),this.items=document.createElement("div"),this.items.className="psv-gallery-container",this.container.appendChild(this.items),this.config.navigationArrows&&(this.arrowLeft=document.createElement("div"),this.arrowLeft.className="psv-gallery-arrow",this.arrowLeft.innerHTML=wc,this.container.appendChild(this.arrowLeft),this.arrowRight=document.createElement("div"),this.arrowRight.className="psv-gallery-arrow",this.arrowRight.innerHTML=wc,this.container.appendChild(this.arrowRight),bc(this.arrowLeft,()=>this.__scroll(-1)),bc(this.arrowRight,()=>this.__scroll(1))),this.state.itemMargin=parseInt(Te.getStyleProperty(this.items,"padding-left"),10),this.state.breakpoint=parseInt(Te.getStyleProperty(this.container,"--psv-gallery-breakpoint"),10),this.observer=new IntersectionObserver(i=>{i.forEach(s=>{if(s.intersectionRatio>0){const r=s.target;r.style.backgroundImage=`url("${r.dataset.src}")`,delete r.dataset.src,this.observer.unobserve(s.target)}})},{root:this.viewer.container}),this.viewer.addEventListener(be.SizeUpdatedEvent.type,this),this.container.addEventListener("transitionend",this),this.container.addEventListener("keydown",this),this.items.addEventListener("wheel",this),this.items.addEventListener("scroll",this),this.items.addEventListener("mousedown",this),this.items.addEventListener("mousemove",this),this.items.addEventListener("click",this),window.addEventListener("mouseup",this),this.hide()}get isAboveBreakpoint(){return this.items.offsetWidth>this.state.breakpoint}get config(){return this.plugin.config}destroy(){window.removeEventListener("mouseup",this),this.viewer.removeEventListener(be.SizeUpdatedEvent.type,this),this.observer.disconnect(),super.destroy()}handleEvent(n){switch(n.type){case"transitionend":this.isVisible()&&n.target===this.container&&this.__focusActiveOrFirst();break;case"keydown":if(this.isVisible())switch(n.key){case bn.KEY_CODES.Escape:this.plugin.hide();break;case bn.KEY_CODES.Enter:this.__click(n);break}break;case"wheel":{const e=n;this.__scroll(e.deltaY>0?1:-1),n.preventDefault();break}case"scroll":case be.SizeUpdatedEvent.type:this.__updateArrows();break;case"mousedown":this.state.mousedown=!0,this.isAboveBreakpoint?this.state.initMouse=n.clientX:this.state.initMouse=n.clientY,this.state.mouse=this.state.initMouse;break;case"mousemove":if(this.state.mousedown)if(this.isAboveBreakpoint){const e=this.state.mouse-n.clientX;this.items.scrollLeft+=e,this.state.scrollLeft=this.items.scrollLeft,this.state.mouse=n.clientX}else{const e=this.state.mouse-n.clientY;this.items.scrollTop+=e,this.state.scrollTop=this.items.scrollTop,this.state.mouse=n.clientY}break;case"mouseup":this.state.mousedown=!1,this.state.mouse=null,n.preventDefault();break;case"click":{const e=this.isAboveBreakpoint?n.clientX:n.clientY;Math.abs(this.state.initMouse-e)<10&&this.__click(n);break}}}show(){this.container.classList.add("psv-gallery--open"),this.state.visible=!0}hide(){this.container.classList.remove("psv-gallery--open"),this.state.visible=!1,Te.hasParent(document.activeElement,this.container)&&this.viewer.navbar.focusButton(ks.id)}setItems(n){this.items.innerHTML=uE(n,this.plugin.config.thumbnailSize),this.observer&&(this.observer.disconnect(),this.items.querySelectorAll("[data-src]").forEach(e=>{this.observer.observe(e)})),this.__updateArrows()}setActive(n){if(this.items.querySelector("."+ur)?.classList.remove(ur),n){const t=this.items.querySelector(`[data-${nf}="${n}"]`);t&&(t.classList.add(ur),this.items.scrollLeft=t.offsetLeft+t.clientWidth/2-this.items.clientWidth/2)}}__click(n){const e=Te.getMatchingTarget(n,".psv-gallery-item");if(!e)return;const t=e.dataset[tf];this.plugin.applyItem(t),this.setActive(t),(this.config.hideOnClick||!this.isAboveBreakpoint)&&this.hide()}__focusActiveOrFirst(){(this.items.querySelector("."+ur)??this.items.firstElementChild)?.focus()}__scroll(n){if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth,t=this.plugin.config.thumbnailSize.width+(this.state.itemMargin??0);this.state.scrollLeft=We.clamp(this.state.scrollLeft+n*t,0,e),n===-1&&this.state.scrollLeft<t*.8&&(this.state.scrollLeft=0),n===1&&this.state.scrollLeft>e-t*.8&&(this.state.scrollLeft=e),this.items.scroll({left:this.state.scrollLeft,behavior:"smooth"})}else{const e=this.items.scrollHeight-this.items.offsetHeight,t=this.items.querySelector(":first-child").offsetHeight*2+(this.state.itemMargin??0);this.state.scrollTop=We.clamp(this.state.scrollTop+n*t,0,e),n===-1&&this.state.scrollTop<t*.8&&(this.state.scrollTop=0),n===1&&this.state.scrollTop>e-t*.8&&(this.state.scrollTop=e),this.items.scroll({top:this.state.scrollTop,behavior:"smooth"})}}__updateArrows(){if(!this.config.navigationArrows)return;this.state.isAboveBreakpoint!==this.isAboveBreakpoint&&(Te.toggleClass(this.arrowLeft,"psv-gallery-arrow--left",this.isAboveBreakpoint),Te.toggleClass(this.arrowLeft,"psv-gallery-arrow--top",!this.isAboveBreakpoint),Te.toggleClass(this.arrowRight,"psv-gallery-arrow--right",this.isAboveBreakpoint),Te.toggleClass(this.arrowRight,"psv-gallery-arrow--bottom",!this.isAboveBreakpoint),this.state.isAboveBreakpoint=this.isAboveBreakpoint);const n=(e,t)=>{t?(e.style.opacity="1",e.style.pointerEvents="auto"):(e.style.opacity="0",e.style.pointerEvents="none")};if(this.isAboveBreakpoint){const e=this.items.scrollWidth-this.items.offsetWidth;n(this.arrowLeft,this.items.scrollLeft>50),n(this.arrowRight,this.items.scrollLeft<e-50)}else{const e=this.items.scrollHeight-this.items.offsetHeight;n(this.arrowLeft,this.items.scrollTop>50),n(this.arrowRight,this.items.scrollTop<e-50)}}},mE=Te.getConfigParser({items:[],navigationArrows:!0,visibleOnLoad:!1,hideOnClick:!0,thumbnailSize:{width:200,height:100}}),Bs=class sf extends il{constructor(e,t){super(e,t),this.items=[],this.gallery=new pE(this,this.viewer)}static withConfig(e){return[sf,e]}init(){super.init(),Te.checkStylesheet(this.viewer.container,"gallery-plugin"),this.map=this.viewer.getPlugin("map"),this.plan=this.viewer.getPlugin("plan"),this.viewer.addEventListener(be.PanoramaLoadedEvent.type,this),this.viewer.addEventListener(be.ShowPanelEvent.type,this),this.config.visibleOnLoad&&this.viewer.addEventListener(be.ReadyEvent.type,()=>{this.items.length&&this.show()},{once:!0}),this.setItems(this.config.items),delete this.config.items,setTimeout(()=>this.__updateButton())}destroy(){this.viewer.removeEventListener(be.PanoramaLoadedEvent.type,this),this.viewer.removeEventListener(be.ShowPanelEvent.type,this),this.gallery.destroy(),super.destroy()}setOptions(e){super.setOptions(e),e.thumbnailSize&&this.gallery.setItems(this.items)}handleEvent(e){if(e instanceof be.PanoramaLoadedEvent){const t=this.items.find(i=>Te.deepEqual(i.panorama,e.data.panorama));this.currentId=t?.id,this.gallery.setActive(this.currentId)}else e instanceof be.ShowPanelEvent&&this.gallery.isVisible()&&this.hide()}show(){return this.map?.minimize(),this.plan?.minimize(),this.dispatchEvent(new vs(!this.gallery.isAboveBreakpoint)),this.gallery.show()}hide(){return this.dispatchEvent(new _s),this.gallery.hide()}toggle(){this.gallery.isVisible()?this.hide():this.show()}isVisible(){return this.gallery.isVisible()}setItems(e,t){if(e?e.forEach((i,s)=>{if(!i.id)throw new Ae(`Item ${s} has no "id".`);if(!i.panorama)throw new Ae(`Item "${i.id}" has no "panorama".`)}):e=[],this.handler=t,this.items=e.map(i=>({...i,id:`${i.id}`})),this.gallery.setItems(this.items),this.currentId){const i=this.items.find(s=>s.id===this.currentId);this.currentId=i?.id,this.gallery.setActive(this.currentId)}this.items.length||this.gallery.hide(),this.__updateButton()}applyItem(e){if(e!==this.currentId){if(this.handler)this.handler(e);else{const t=this.items.find(i=>i.id===e);this.viewer.setPanorama(t.panorama,{caption:t.name,...t.options})}this.currentId=e}}__updateButton(){this.viewer.navbar.getButton(ks.id,!1)?.toggle(this.items.length>0)}};Bs.id="gallery";Bs.VERSION="5.14.0";Bs.configParser=mE;Bs.readonlyOptions=["items","navigationArrows","visibleOnLoad"];var rf=Bs;pn.lang[ks.id]="Gallery";Wr(ks,"caption:left");const Dr="https://photo-sphere-viewer-data.netlify.app/assets/",gE="./".endsWith("/")?"./":".//",As=n=>`${gE}${n.replace(/^\//,"")}`,af=typeof window<"u"?window.matchMedia("(max-width: 768px)"):null,vE={width:350,height:200},_E={width:200,height:100},of=()=>af?.matches??!1,lf=()=>of()?_E:vE,rl=["salavista1.jpg","salavista2.jpg","sala1.jpg","sala2.jpg","sala3.jpg","sala4.jpg","antesala.jpg","banheiroantesala.jpg","corredor1.jpg","corredor2.jpg","corredor3.jpg","quarto1.jpg","quarto1vista.jpg","banheiromeio.jpg","quarto2.jpg","quarto2vista.jpg","quarto3.jpg","quarto3vista.jpg","banheiroquarto3.jpg","cozinha1.jpg","cozinha2.jpg","cozinha3.jpg","banheiroempregada.jpg","empregadaquarto1.jpg","empregadaquarto2.jpg"],xE={"salavista1.jpg":"Sala - Vista 1","salavista2.jpg":"Sala  Vista 2","sala1.jpg":"Sala Ambiente 1","sala2.jpg":"Sala Ambiente 2","sala3.jpg":"Sala Ambiente 3","sala4.jpg":"Sala Ambiente 4","antesala.jpg":"Antesala","banheiroantesala.jpg":"Banheiro da Antesala","corredor1.jpg":"Corredor 1","corredor2.jpg":"Corredor 2","corredor3.jpg":"Corredor 3","quarto1.jpg":"Quarto 1","quarto1vista.jpg":"Quarto 1 - Vista","banheiromeio.jpg":"Banheiro Social","quarto2.jpg":"Quarto 2","quarto2vista.jpg":"Quarto 2 - Vista","quarto3.jpg":"Quarto 3","quarto3vista.jpg":"Quarto 3 - Vista","banheiroquarto3.jpg":"Banheiro da Suíte 3","cozinha1.jpg":"Cozinha 1","cozinha2.jpg":"Cozinha 2","cozinha3.jpg":"Cozinha 3","banheiroempregada.jpg":"Banheiro de Serviço","empregadaquarto1.jpg":"Quarto de Serviço 1","empregadaquarto2.jpg":"Quarto de Serviço 2"},EE=n=>n.replace(/\.(jpg|png)$/i,"").replace(/[-_]/g," ").replace(/([a-z])([0-9])/gi,"$1 $2").replace(/([0-9])([a-z])/gi,"$1 $2").replace(/\b\w/g,t=>t.toUpperCase()),Cs={};rl.forEach(n=>{Cs[n]||(Cs[n]=[])});const cf=new Set([...rl,"seta.png"]),Ro=[],hf=n=>{Ro.includes(n)||Ro.push(n)};rl.forEach(hf);Object.keys(Cs).forEach(hf);const ME=Ro.map(n=>{const e=cf.has(n),t=e?As(n):Dr+n,i=As(n.replace(/\.jpg$|\.png$/i,".jpg")),s=Dr+n.replace(/\.jpg$|\.png$/i,".jpg"),r=e?i:s,a=xE[n]??EE(n);return{id:n.replace(/\W+/g,"-"),name:a,panorama:t,thumbnail:r}}),Bn=new Nx({container:"viewer",panorama:As("salavista1.jpg"),caption:"Parc national du Mercantour <b>&copy; Damien Sorel</b>",loadingImg:Dr+"loader.gif",touchmoveTwoFingers:!1,defaultZoomLvl:0,mousewheelCtrlKey:!1,navbar:["zoom","gallery","fullscreen"],plugins:[Zu,rf.withConfig({visibleOnLoad:!0,hideOnClick:!1,thumbnailSize:lf(),items:ME,navigationArrows:!0})]}),df=Bn.getPlugin(Zu),uf=Bn.getPlugin(rf),qr=()=>{of()&&Bn.zoom(0)},ff=()=>{uf.setOptions({thumbnailSize:lf()})};af?.addEventListener("change",()=>{ff(),qr()});ff();qr();let Po=!1;function yE(n){let e,t;n.startsWith("http")?(e=n,t=n):n.startsWith("/")?(e=n.replace(/^\//,""),t=As(e)):(e=n,t=cf.has(e)?As(e):Dr+e);const i=()=>{const s=Cs[e]||[];df.setMarkers(s),qr(),Bn.removeEventListener("panorama-loaded",i)};Bn.addEventListener("panorama-loaded",i),Bn.setPanorama(t,{zoom:0,transition:{duration:1e3,loader:!0}}).catch(s=>{Bn.removeEventListener("panorama-loaded",i),console.error("setPanorama error:",s)})}uf.addEventListener("select",({item:n})=>{yE(n.panorama),setTimeout(()=>{if(Po)return;const e=document.querySelector(".psv-gallery");e&&(e.classList.add("psv-gallery--open"),e.setAttribute("aria-hidden","false"),e.style.display==="none"&&(e.style.display=""))},0)});document.addEventListener("click",n=>{const e=n.target;if(!e||!e.closest(".psv-gallery-button"))return;const i=document.querySelector(".psv-gallery");i&&(Po=!0,setTimeout(()=>Po=!1,200),i.classList.contains("psv-gallery--open")?(i.classList.remove("psv-gallery--open"),i.setAttribute("aria-hidden","true"),i.style.display="none"):(i.classList.add("psv-gallery--open"),i.setAttribute("aria-hidden","false"),i.style.display=""))});Bn.addEventListener("ready",()=>{df.setMarkers(Cs["sphere.jpg"]),qr()});
