/*
mod_deflate + mod_expires
*/
/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: 2676
*/
if(typeof YUI!="undefined"){var _YUI=YUI;}var YUI=function(){var c=0,e=this,b=arguments,a=b.length,d=(typeof YUI_config!=="undefined")&&YUI_config;if(!(e instanceof YUI)){e=new YUI();}else{e._init();if(d){e.applyConfig(d);}if(!a){e._setup();}}if(a){for(;c<a;c++){e.applyConfig(b[c]);}e._setup();}return e;};(function(){var n,b,o="3.2.0",l="http://yui.yahooapis.com/",r="yui3-js-enabled",j=function(){},g=Array.prototype.slice,p={"io.xdrReady":1,"io.xdrResponse":1,"SWF.eventHandler":1},f=(typeof window!="undefined"),e=(f)?window:null,t=(f)?e.document:null,d=t&&t.documentElement,a=d&&d.className,c={},h=new Date().getTime(),k=function(x,w,v,u){if(x&&x.addEventListener){x.addEventListener(w,v,u);}else{if(x&&x.attachEvent){x.attachEvent("on"+w,v);}}},s=function(y,x,w,u){if(y&&y.removeEventListener){try{y.removeEventListener(x,w,u);}catch(v){}}else{if(y&&y.detachEvent){y.detachEvent("on"+x,w);}}},q=function(){YUI.Env.windowLoaded=true;YUI.Env.DOMReady=true;if(f){s(window,"load",q);}},i=function(w,v){var u=w.Env._loader;if(u){u.ignoreRegistered=false;u.onEnd=null;u.data=null;u.required=[];u.loadType=null;}else{u=new w.Loader(w.config);w.Env._loader=u;}return u;},m=function(w,v){for(var u in v){if(v.hasOwnProperty(u)){w[u]=v[u];}}};if(d&&a.indexOf(r)==-1){if(a){a+=" ";}a+=r;d.className=a;}if(o.indexOf("@")>-1){o="3.2.0pr1";}n={applyConfig:function(B){B=B||j;var w,y,x=this.config,z=x.modules,v=x.groups,A=x.rls,u=this.Env._loader;for(y in B){if(B.hasOwnProperty(y)){w=B[y];if(z&&y=="modules"){m(z,w);}else{if(v&&y=="groups"){m(v,w);}else{if(A&&y=="rls"){m(A,w);}else{if(y=="win"){x[y]=w.contentWindow||w;x.doc=x[y].document;}else{if(y=="_yuid"){}else{x[y]=w;}}}}}}}if(u){u._config(B);}},_config:function(u){this.applyConfig(u);},_init:function(){var x,y=this,u=YUI.Env,v=y.Env,z,w;y.version=o;if(!v){y.Env={mods:{},versions:{},base:l,cdn:l+o+"/build/",_idx:0,_used:{},_attached:{},_yidx:0,_uidx:0,_guidp:"y",_loaded:{},getBase:u&&u.getBase||function(F,E){var A,B,D,G,C;B=(t&&t.getElementsByTagName("script"))||[];for(D=0;D<B.length;D=D+1){G=B[D].src;if(G){C=G.match(F);A=C&&C[1];if(A){x=C[2];if(x){C=x.indexOf("js");if(C>-1){x=x.substr(0,C);}}C=G.match(E);if(C&&C[3]){A=C[1]+C[3];}break;}}}return A||v.cdn;}};v=y.Env;v._loaded[o]={};if(u&&y!==YUI){v._yidx=++u._yidx;v._guidp=("yui_"+o+"_"+v._yidx+"_"+h).replace(/\./g,"_");}else{if(typeof _YUI!="undefined"){u=_YUI.Env;v._yidx+=u._yidx;v._uidx+=u._uidx;for(z in u){if(!(z in v)){v[z]=u[z];}}}}y.id=y.stamp(y);c[y.id]=y;}y.constructor=YUI;y.config=y.config||{win:e,doc:t,debug:true,useBrowserConsole:true,throwFail:true,bootstrap:true,fetchCSS:true};w=y.config;w.base=YUI.config.base||y.Env.getBase(/^(.*)yui\/yui([\.\-].*)js(\?.*)?$/,/^(.*\?)(.*\&)(.*)yui\/yui[\.\-].*js(\?.*)?$/);w.loaderPath=YUI.config.loaderPath||"loader/loader"+(x||"-min.")+"js";},_setup:function(z){var v,y=this,u=[],x=YUI.Env.mods,w=y.config.core||["get","rls","intl-base","loader","yui-log","yui-later","yui-throttle"];for(v=0;v<w.length;v++){if(x[w[v]]){u.push(w[v]);}}y._attach(["yui-base"]);y._attach(u);},applyTo:function(A,z,w){if(!(z in p)){this.log(z+": applyTo not allowed","warn","yui");return null;}var v=c[A],y,u,x;if(v){y=z.split(".");u=v;for(x=0;x<y.length;x=x+1){u=u[y[x]];if(!u){this.log("applyTo not found: "+z,"warn","yui");}}return u.apply(v,w);}return null;},add:function(w,B,v,z){z=z||{};var A=YUI.Env,y={name:w,fn:B,version:v,details:z},u,x;A.mods[w]=y;A.versions[v]=A.versions[v]||{};A.versions[v][w]=y;for(x in c){if(c.hasOwnProperty(x)){u=c[x].Env._loader;if(u){if(!u.moduleInfo[w]){u.addModule(z,w);}}}}return this;},_attach:function(u,z){var B,x,F,v,E,w,G=YUI.Env.mods,y=this,A=y.Env._attached,C=u.length;for(B=0;B<C;B++){x=u[B];F=G[x];if(!A[x]&&F){A[x]=true;v=F.details;E=v.requires;w=v.use;if(E&&E.length){if(!y._attach(E)){return false;}}if(F.fn){try{F.fn(y,x);}catch(D){y.error("Attach error: "+x,D,x);return false;}}if(w&&w.length){if(!y._attach(w)){return false;}}}}return true;},use:function(){if(!this.Array){this._attach(["yui-base"]);}var K,D,L,v=this,M=YUI.Env,w=g.call(arguments,0),x=M.mods,u=v.Env,A=u._used,I=M._loaderQueue,Q=w[0],y=w[w.length-1],C=v.Array,O=v.config,B=O.bootstrap,J=[],G=[],N,P=true,z=O.fetchCSS,H=function(S,R){if(!S.length){return;}C.each(S,function(V){if(!R){G.push(V);}if(A[V]){return;}var T=x[V],W,U;if(T){A[V]=true;W=T.details.requires;U=T.details.use;}else{if(!M._loaded[o][V]){J.push(V);}else{A[V]=true;}}if(W&&W.length){H(W);}if(U&&U.length){H(U,1);}});},F=function(R){if(y){try{y(v,R);}catch(S){v.error("use callback error",S,w);}}},E=function(W){var T=W||{success:true,msg:"not dynamic"},V,S,R,U=true,X=T.data;v._loading=false;if(X){R=J.concat();J=[];G=[];H(X);S=J.length;if(S){if(J.sort().join()==R.sort().join()){S=false;}}}if(S&&X){V=w.concat();V.push(function(){if(v._attach(X)){F(T);}});v._loading=false;v.use.apply(v,V);}else{if(X){U=v._attach(X);}if(U){F(T);}}if(v._useQueue&&v._useQueue.size()&&!v._loading){v.use.apply(v,v._useQueue.next());}};if(v._loading){v._useQueue=v._useQueue||new v.Queue();v._useQueue.add(w);return v;}if(typeof y==="function"){w.pop();}else{y=null;}if(Q==="*"){N=true;w=v.Object.keys(x);}if(B&&!N&&v.Loader&&w.length){D=i(v);D.require(w);D.ignoreRegistered=true;D.calculate(null,(z)?null:"js");w=D.sorted;}H(w);K=J.length;if(K){J=v.Object.keys(C.hash(J));K=J.length;}if(B&&K&&v.Loader){v._loading=true;D=i(v);D.onEnd=E;D.context=v;D.data=w;D.require((z)?J:w);D.insert(null,(z)?null:"js");}else{if(K&&v.config.use_rls){v.Get.script(v._rls(w),{onEnd:function(R){E(R);},data:w});}else{if(B&&K&&v.Get&&!u.bootstrapped){v._loading=true;w=C(arguments,0,true);L=function(){v._loading=false;I.running=false;u.bootstrapped=true;if(v._attach(["loader"])){v.use.apply(v,w);}};if(M._bootstrapping){I.add(L);}else{M._bootstrapping=true;v.Get.script(O.base+O.loaderPath,{onEnd:L});}}else{if(K){v.message("Requirement NOT loaded: "+J,"warn","yui");}P=v._attach(w);if(P){E();}}}}return v;},namespace:function(){var u=arguments,y=null,w,v,x;for(w=0;w<u.length;w=w+1){x=(""+u[w]).split(".");
y=this;for(v=(x[0]=="YAHOO")?1:0;v<x.length;v=v+1){y[x[v]]=y[x[v]]||{};y=y[x[v]];}}return y;},log:j,message:j,error:function(x,v){var w=this,u;if(w.config.errorFn){u=w.config.errorFn.apply(w,arguments);}if(w.config.throwFail&&!u){throw (v||new Error(x));}else{w.message(x,"error");}return w;},guid:function(u){var v=this.Env._guidp+(++this.Env._uidx);return(u)?(u+v):v;},stamp:function(w,x){var u;if(!w){return w;}if(w.uniqueID&&w.nodeType&&w.nodeType!==9){u=w.uniqueID;}else{u=(typeof w==="string")?w:w._yuid;}if(!u){u=this.guid();if(!x){try{w._yuid=u;}catch(v){u=null;}}}return u;}};YUI.prototype=n;for(b in n){if(n.hasOwnProperty(b)){YUI[b]=n[b];}}YUI._init();if(f){k(window,"load",q);}else{q();}YUI.Env.add=k;YUI.Env.remove=s;if(typeof exports=="object"){exports.YUI=YUI;}})();YUI.add("yui-base",function(b){b.Lang=b.Lang||{};var g=b.Lang,q="array",j="boolean",d="date",e="error",f="function",l="number",p="null",i="object",n="regexp",k="string",h=Object.prototype.toString,s="undefined",a={"undefined":s,"number":l,"boolean":j,"string":k,"[object Function]":f,"[object RegExp]":n,"[object Array]":q,"[object Date]":d,"[object Error]":e},m=/^\s+|\s+$/g,o="",c=/\{\s*([^\|\}]+?)\s*(?:\|([^\}]*))?\s*\}/g;g.isArray=function(t){return g.type(t)===q;};g.isBoolean=function(t){return typeof t===j;};g.isFunction=function(t){return g.type(t)===f;};g.isDate=function(t){return g.type(t)===d&&t.toString()!=="Invalid Date"&&!isNaN(t);};g.isNull=function(t){return t===null;};g.isNumber=function(t){return typeof t===l&&isFinite(t);};g.isObject=function(w,v){var u=typeof w;return(w&&(u===i||(!v&&(u===f||g.isFunction(w)))))||false;};g.isString=function(t){return typeof t===k;};g.isUndefined=function(t){return typeof t===s;};g.trim=function(t){try{return t.replace(m,o);}catch(u){return t;}};g.isValue=function(v){var u=g.type(v);switch(u){case l:return isFinite(v);case p:case s:return false;default:return !!(u);}};g.type=function(t){return a[typeof t]||a[h.call(t)]||(t?i:p);};g.sub=function(t,u){return((t.replace)?t.replace(c,function(v,w){return(!g.isUndefined(u[w]))?u[w]:v;}):t);};(function(){var t=b.Lang,u=Array.prototype,v="length",w=function(D,B,z){var A=(z)?2:w.test(D),y,x,E=B||0;if(A){try{return u.slice.call(D,E);}catch(C){x=[];y=D.length;for(;E<y;E++){x.push(D[E]);}return x;}}else{return[D];}};b.Array=w;w.test=function(z){var x=0;if(t.isObject(z)){if(t.isArray(z)){x=1;}else{try{if((v in z)&&!z.tagName&&!z.alert&&!z.apply){x=2;}}catch(y){}}}return x;};w.each=(u.forEach)?function(x,y,z){u.forEach.call(x||[],y,z||b);return b;}:function(y,A,B){var x=(y&&y.length)||0,z;for(z=0;z<x;z=z+1){A.call(B||b,y[z],z,y);}return b;};w.hash=function(z,y){var C={},x=z.length,B=y&&y.length,A;for(A=0;A<x;A=A+1){C[z[A]]=(B&&B>A)?y[A]:true;}return C;};w.indexOf=(u.indexOf)?function(x,y){return u.indexOf.call(x,y);}:function(x,z){for(var y=0;y<x.length;y=y+1){if(x[y]===z){return y;}}return -1;};w.numericSort=function(y,x){return(y-x);};w.some=(u.some)?function(x,y,z){return u.some.call(x,y,z);}:function(y,A,B){var x=y.length,z;for(z=0;z<x;z=z+1){if(A.call(B,y[z],z,y)){return true;}}return false;};})();function r(){this._init();this.add.apply(this,arguments);}r.prototype={_init:function(){this._q=[];},next:function(){return this._q.shift();},last:function(){return this._q.pop();},add:function(){b.Array.each(b.Array(arguments,0,true),function(t){this._q.push(t);},this);return this;},size:function(){return this._q.length;}};b.Queue=r;YUI.Env._loaderQueue=YUI.Env._loaderQueue||new r();(function(){var u=b.Lang,t="__",v=function(y,x){var w=x.toString;if(u.isFunction(w)&&w!=Object.prototype.toString){y.toString=w;}};b.merge=function(){var x=arguments,z={},y,w=x.length;for(y=0;y<w;y=y+1){b.mix(z,x[y],true);}return z;};b.mix=function(w,F,y,E,B,D){if(!F||!w){return w||b;}if(B){switch(B){case 1:return b.mix(w.prototype,F.prototype,y,E,0,D);case 2:b.mix(w.prototype,F.prototype,y,E,0,D);break;case 3:return b.mix(w,F.prototype,y,E,0,D);case 4:return b.mix(w.prototype,F,y,E,0,D);default:}}var A,z,x,C;if(E&&E.length){for(A=0,z=E.length;A<z;++A){x=E[A];C=u.type(w[x]);if(F.hasOwnProperty(x)){if(D&&C=="object"){b.mix(w[x],F[x]);}else{if(y||!(x in w)){w[x]=F[x];}}}}}else{for(A in F){if(F.hasOwnProperty(A)){if(D&&u.isObject(w[A],true)){b.mix(w[A],F[A],y,E,0,true);}else{if(y||!(A in w)){w[A]=F[A];}}}}if(b.UA.ie){v(w,F);}}return w;};b.cached=function(y,w,x){w=w||{};return function(A){var z=(arguments.length>1)?Array.prototype.join.call(arguments,t):A;if(!(z in w)||(x&&w[z]==x)){w[z]=y.apply(y,arguments);}return w[z];};};})();(function(){b.Object=function(y){var x=function(){};x.prototype=y;return new x();};var v=b.Object,w=function(y,x){return y&&y.hasOwnProperty&&y.hasOwnProperty(x);},u,t=function(B,A){var z=(A===2),x=(z)?0:[],y;for(y in B){if(w(B,y)){if(z){x++;}else{x.push((A)?B[y]:y);}}}return x;};v.keys=function(x){return t(x);};v.values=function(x){return t(x,1);};v.size=function(x){return t(x,2);};v.hasKey=w;v.hasValue=function(y,x){return(b.Array.indexOf(v.values(y),x)>-1);};v.owns=w;v.each=function(B,A,C,z){var y=C||b,x;for(x in B){if(z||w(B,x)){A.call(y,B[x],x,B);}}return b;};v.some=function(B,A,C,z){var y=C||b,x;for(x in B){if(z||w(B,x)){if(A.call(y,B[x],x,B)){return true;}}}return false;};v.getValue=function(B,A){if(!b.Lang.isObject(B)){return u;}var y,z=b.Array(A),x=z.length;for(y=0;B!==u&&y<x;y++){B=B[z[y]];}return B;};v.setValue=function(D,B,C){var x,A=b.Array(B),z=A.length-1,y=D;if(z>=0){for(x=0;y!==u&&x<z;x++){y=y[A[x]];}if(y!==u){y[A[x]]=C;}else{return u;}}return D;};v.isEmpty=function(y){for(var x in y){if(w(y,x)){return false;}}return true;};})();b.UA=YUI.Env.UA||function(){var w=function(B){var C=0;return parseFloat(B.replace(/\./g,function(){return(C++==1)?"":".";}));},x=b.config.win,A=x&&x.navigator,z={ie:0,opera:0,gecko:0,webkit:0,chrome:0,mobile:null,air:0,ipad:0,iphone:0,ipod:0,ios:null,android:0,caja:A&&A.cajaVersion,secure:false,os:null},v=A&&A.userAgent,y=x&&x.location,u=y&&y.href,t;z.secure=u&&(u.toLowerCase().indexOf("https")===0);
if(v){if((/windows|win32/i).test(v)){z.os="windows";}else{if((/macintosh/i).test(v)){z.os="macintosh";}else{if((/rhino/i).test(v)){z.os="rhino";}}}if((/KHTML/).test(v)){z.webkit=1;}t=v.match(/AppleWebKit\/([^\s]*)/);if(t&&t[1]){z.webkit=w(t[1]);if(/ Mobile\//.test(v)){z.mobile="Apple";t=v.match(/OS ([^\s]*)/);if(t&&t[1]){t=w(t[1].replace("_","."));}z.ipad=(navigator.platform=="iPad")?t:0;z.ipod=(navigator.platform=="iPod")?t:0;z.iphone=(navigator.platform=="iPhone")?t:0;z.ios=z.ipad||z.iphone||z.ipod;}else{t=v.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);if(t){z.mobile=t[0];}if(/ Android/.test(v)){z.mobile="Android";t=v.match(/Android ([^\s]*);/);if(t&&t[1]){z.android=w(t[1]);}}}t=v.match(/Chrome\/([^\s]*)/);if(t&&t[1]){z.chrome=w(t[1]);}else{t=v.match(/AdobeAIR\/([^\s]*)/);if(t){z.air=t[0];}}}if(!z.webkit){t=v.match(/Opera[\s\/]([^\s]*)/);if(t&&t[1]){z.opera=w(t[1]);t=v.match(/Opera Mini[^;]*/);if(t){z.mobile=t[0];}}else{t=v.match(/MSIE\s([^;]*)/);if(t&&t[1]){z.ie=w(t[1]);}else{t=v.match(/Gecko\/([^\s]*)/);if(t){z.gecko=1;t=v.match(/rv:([^\s\)]*)/);if(t&&t[1]){z.gecko=w(t[1]);}}}}}}YUI.Env.UA=z;return z;}();},"3.2.0");YUI.add("get",function(a){(function(){var c=a.UA,b=a.Lang,e="text/javascript",f="text/css",d="stylesheet";a.Get=function(){var m,n,j,l={},k=0,u,w=function(A,x,B){var y=B||a.config.win,C=y.document,D=C.createElement(A),z;for(z in x){if(x[z]&&x.hasOwnProperty(z)){D.setAttribute(z,x[z]);}}return D;},t=function(y,z,x){var A={id:a.guid(),type:f,rel:d,href:y};if(x){a.mix(A,x);}return w("link",A,z);},s=function(y,z,x){var A={id:a.guid(),type:e};if(x){a.mix(A,x);}A.src=y;return w("script",A,z);},p=function(y,z,x){return{tId:y.tId,win:y.win,data:y.data,nodes:y.nodes,msg:z,statusText:x,purge:function(){n(this.tId);}};},o=function(B,A,x){var y=l[B],z;if(y&&y.onEnd){z=y.context||y;y.onEnd.call(z,p(y,A,x));}},v=function(A,z){var x=l[A],y;if(x.timer){clearTimeout(x.timer);}if(x.onFailure){y=x.context||x;x.onFailure.call(y,p(x,z));}o(A,z,"failure");},i=function(A){var x=l[A],z,y;if(x.timer){clearTimeout(x.timer);}x.finished=true;if(x.aborted){z="transaction "+A+" was aborted";v(A,z);return;}if(x.onSuccess){y=x.context||x;x.onSuccess.call(y,p(x));}o(A,z,"OK");},q=function(z){var x=l[z],y;if(x.onTimeout){y=x.context||x;x.onTimeout.call(y,p(x));}o(z,"timeout","timeout");},h=function(z,C){var y=l[z],B,G,F,D,A,x,H,E;if(y.timer){clearTimeout(y.timer);}if(y.aborted){B="transaction "+z+" was aborted";v(z,B);return;}if(C){y.url.shift();if(y.varName){y.varName.shift();}}else{y.url=(b.isString(y.url))?[y.url]:y.url;if(y.varName){y.varName=(b.isString(y.varName))?[y.varName]:y.varName;}}G=y.win;F=G.document;D=F.getElementsByTagName("head")[0];if(y.url.length===0){i(z);return;}x=y.url[0];if(!x){y.url.shift();return h(z);}if(y.timeout){y.timer=setTimeout(function(){q(z);},y.timeout);}if(y.type==="script"){A=s(x,G,y.attributes);}else{A=t(x,G,y.attributes);}j(y.type,A,z,x,G,y.url.length);y.nodes.push(A);E=y.insertBefore||F.getElementsByTagName("base")[0];if(E){H=m(E,z);if(H){H.parentNode.insertBefore(A,H);}}else{D.appendChild(A);}if((c.webkit||c.gecko)&&y.type==="css"){h(z,x);}},g=function(){if(u){return;}u=true;var x,y;for(x in l){if(l.hasOwnProperty(x)){y=l[x];if(y.autopurge&&y.finished){n(y.tId);delete l[x];}}}u=false;},r=function(y,x,z){z=z||{};var C="q"+(k++),A,B=z.purgethreshold||a.Get.PURGE_THRESH;if(k%B===0){g();}l[C]=a.merge(z,{tId:C,type:y,url:x,finished:false,nodes:[]});A=l[C];A.win=A.win||a.config.win;A.context=A.context||A;A.autopurge=("autopurge" in A)?A.autopurge:(y==="script")?true:false;A.attributes=A.attributes||{};A.attributes.charset=z.charset||A.attributes.charset||"utf-8";h(C);return{tId:C};};j=function(z,E,D,y,C,B,x){var A=x||h;if(c.ie){E.onreadystatechange=function(){var F=this.readyState;if("loaded"===F||"complete"===F){E.onreadystatechange=null;A(D,y);}};}else{if(c.webkit){if(z==="script"){E.addEventListener("load",function(){A(D,y);});}}else{E.onload=function(){A(D,y);};E.onerror=function(F){v(D,F+": "+y);};}}};m=function(x,A){var y=l[A],z=(b.isString(x))?y.win.document.getElementById(x):x;if(!z){v(A,"target node not found: "+x);}return z;};n=function(C){var y,A,G,D,H,B,z,F,E,x=l[C];if(x){y=x.nodes;A=y.length;G=x.win.document;D=G.getElementsByTagName("head")[0];E=x.insertBefore||G.getElementsByTagName("base")[0];if(E){H=m(E,C);if(H){D=H.parentNode;}}for(B=0;B<A;B=B+1){z=y[B];if(z.clearAttributes){z.clearAttributes();}else{for(F in z){if(z.hasOwnProperty(F)){delete z[F];}}}D.removeChild(z);}}x.nodes=[];};return{PURGE_THRESH:20,_finalize:function(x){setTimeout(function(){i(x);},0);},abort:function(y){var z=(b.isString(y))?y:y.tId,x=l[z];if(x){x.aborted=true;}},script:function(x,y){return r("script",x,y);},css:function(x,y){return r("css",x,y);}};}();})();},"3.2.0");YUI.add("features",function(c){var a={};c.mix(c.namespace("Features"),{tests:a,add:function(d,e,f){a[d]=a[d]||{};a[d][e]=f;},all:function(e,f){var g=a[e],d="";if(g){c.Object.each(g,function(i,h){d+=h+":"+(c.Features.test(e,h,f)?1:0)+";";});}return d;},test:function(e,g,f){var d,i,k,j=a[e],h=j&&j[g];if(!h){}else{d=h.result;if(c.Lang.isUndefined(d)){i=h.ua;if(i){d=(c.UA[i]);}k=h.test;if(k&&((!i)||d)){d=k.apply(c,f);}h.result=d;}}return d;}});var b=c.Features.add;b("load","0",{"trigger":"dom-style","ua":"ie"});b("load","1",{"test":function(e){var d=e.config.doc.documentMode;return e.UA.ie&&(!("onhashchange" in e.config.win)||!d||d<8);},"trigger":"history-hash"});b("load","2",{"test":function(d){return(d.config.win&&("ontouchstart" in d.config.win&&!d.UA.chrome));},"trigger":"dd-drag"});},"3.2.0",{requires:["yui-base"]});YUI.add("rls",function(a){a._rls=function(g){var d=a.config,f=d.rls||{m:1,v:a.version,gv:d.gallery,env:1,lang:d.lang,"2in3v":d["2in3"],"2v":d.yui2,filt:d.filter,filts:d.filters,tests:1},b=d.rls_base||"load?",e=d.rls_tmpl||function(){var h="",i;for(i in f){if(i in f&&f[i]){h+=i+"={"+i+"}&";}}return h;}(),c;f.m=g;f.env=a.Object.keys(YUI.Env.mods);f.tests=a.Features.all("load",[a]);c=a.Lang.sub(b+e,f);
d.rls=f;d.rls_tmpl=e;return c;};},"3.2.0",{requires:["yui-base","get","features"]});YUI.add("intl-base",function(b){var a=/[, ]/;b.mix(b.namespace("Intl"),{lookupBestLang:function(g,h){var f,j,c,e;function d(l){var k;for(k=0;k<h.length;k+=1){if(l.toLowerCase()===h[k].toLowerCase()){return h[k];}}}if(b.Lang.isString(g)){g=g.split(a);}for(f=0;f<g.length;f+=1){j=g[f];if(!j||j==="*"){continue;}while(j.length>0){c=d(j);if(c){return c;}else{e=j.lastIndexOf("-");if(e>=0){j=j.substring(0,e);if(e>=2&&j.charAt(e-2)==="-"){j=j.substring(0,e-2);}}else{break;}}}}return"";}});},"3.2.0",{requires:["yui-base"]});YUI.add("yui-log",function(a){(function(){var d=a,e="yui:log",b="undefined",c={debug:1,info:1,warn:1,error:1};d.log=function(j,s,g,q){var l,p,n,k,o,i=d,r=i.config,h=(i.fire)?i:YUI.Env.globalEvents;if(r.debug){if(g){p=r.logExclude;n=r.logInclude;if(n&&!(g in n)){l=1;}else{if(p&&(g in p)){l=1;}}}if(!l){if(r.useBrowserConsole){k=(g)?g+": "+j:j;if(i.Lang.isFunction(r.logFn)){r.logFn.call(i,j,s,g);}else{if(typeof console!=b&&console.log){o=(s&&console[s]&&(s in c))?s:"log";console[o](k);}else{if(typeof opera!=b){opera.postError(k);}}}}if(h&&!q){if(h==i&&(!h.getEvent(e))){h.publish(e,{broadcast:2});}h.fire(e,{msg:j,cat:s,src:g});}}}return i;};d.message=function(){return d.log.apply(d,arguments);};})();},"3.2.0",{requires:["yui-base"]});YUI.add("yui-later",function(a){(function(){var b=a.Lang,c=function(e,k,g,j,i){e=e||0;var d=g,h,l;if(k&&b.isString(g)){d=k[g];}h=!b.isUndefined(j)?function(){d.apply(k,a.Array(j));}:function(){d.call(k);};l=(i)?setInterval(h,e):setTimeout(h,e);return{id:l,interval:i,cancel:function(){if(this.interval){clearInterval(l);}else{clearTimeout(l);}}};};a.later=c;b.later=c;})();},"3.2.0",{requires:["yui-base"]});YUI.add("yui-throttle",function(b){
/*! Based on work by Simon Willison: http://gist.github.com/292562 */
var a=function(d,c){c=(c)?c:(b.config.throttleTime||150);if(c===-1){return(function(){d.apply(null,arguments);});}var e=(new Date()).getTime();return(function(){var f=(new Date()).getTime();if(f-e>c){e=f;d.apply(null,arguments);}});};b.throttle=a;},"3.2.0",{requires:["yui-base"]});YUI.add("yui",function(a){},"3.2.0",{use:["yui-base","get","features","rls","intl-base","yui-log","yui-later","yui-throttle"]});


YUI_Config = {
    injected: true,
    fetchCSS: false
};

YUI(YUI_Config).use("node", "event", function (Y) {
    Y.log("YUI block1 - " + document.readyState);
    Y.Event.onAvailable("#t1", function () {
        Y.log("t1 onAvailable - 1 " + document.readyState)
    });
    Y.Event.onAvailable("#t2", function () {Y.log("t2 onAvailable - 1 " + document.readyState)});
    Y.Event.onAvailable("#t3", function () {Y.log("t3 onAvailable - 1 " + document.readyState)});
    Y.Event.onAvailable("#t4", function () {Y.log("t4 onAvailable - 1 " + document.readyState)});
    Y.Event.onAvailable("#t5", function () {Y.log("t5 onAvailable - 1 " + document.readyState)});
    Y.Event.onContentReady("#t1", function () {Y.log("t1 onContentReady - 1 " + document.readyState)});
    Y.Event.onContentReady("#t2", function () {Y.log("t2 onContentReady - 1 " + document.readyState)});
    Y.Event.onContentReady("#t3", function () {Y.log("t3 onContentReady - 1 " + document.readyState)});
    Y.Event.onContentReady("#t4", function () {Y.log("t4 onContentReady - 1 " + document.readyState)});
    Y.Event.onContentReady("#t5", function () {Y.log("t5 onContentReady - 1 " + document.readyState)});
    Y.on("available", function () {Y.log("tx onAvailable - 1.5 " + document.readyState)}, "#t1, #t2, #t3, #t4, #t5");
    window.Y = Y;
});

YUI(YUI_Config).use("node", "event", function (Y) {
    Y.log("YUI block2 - " + document.readyState);
    Y.Event.onAvailable("#t1", function () {Y.log("t1 onAvailable - 2 " + document.readyState)});
    Y.Event.onAvailable("#t2", function () {Y.log("t2 onAvailable - 2 " + document.readyState)});
    Y.Event.onAvailable("#t3", function () {Y.log("t3 onAvailable - 2 " + document.readyState)});
    Y.Event.onAvailable("#t4", function () {Y.log("t4 onAvailable - 2 " + document.readyState)});
    Y.Event.onAvailable("#t5", function () {Y.log("t5 onAvailable - 2 " + document.readyState)});
    Y.Event.onContentReady("#t1", function () {Y.log("t1 onContentReady - 2 " + document.readyState)});
    Y.Event.onContentReady("#t2", function () {Y.log("t2 onContentReady - 2 " + document.readyState)});
    Y.Event.onContentReady("#t3", function () {Y.log("t3 onContentReady - 2 " + document.readyState)});
    Y.Event.onContentReady("#t4", function () {Y.log("t4 onContentReady - 2 " + document.readyState)});
    Y.Event.onContentReady("#t5", function () {Y.log("t5 onContentReady - 2 " + document.readyState)});
    Y.on("available", function () {Y.log("t1 onAvailable - 2.5 " + document.readyState)}, "#t1");
});
