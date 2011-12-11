var RSence;RSence={clientConf:function(_X5){HThemeManager.themePath=_X5+'/themes';return HThemeManager._96();},serverConf:function(_X5,_2d){COMM.ClientPrefix=_X5;COMM.Transporter.HelloUrl=_2d;RSence.clientConf(_X5);COMM.AutoSyncStarter.start();return null;},guiTrees:{},killGuiTree:function(_W7){var _X7,_W5;_W5=RSence.guiTrees;_X7=_W5[_W7];if(_X7!=null){_X7.die();_W5[_W7]=null;return delete _W5[_W7];}}};var
HLocale={components:{},dateTime:{strings:{monthsLong:['January','February','March','April','May','June','July','August','September','October','November','December'],monthsShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],weekDaysLong:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],weekDaysShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],weekLong:'Week',weekShort:'WK',dateDelimitter:'.',timeDelimitter:':',timeMsDelimitter:'.',rangeDelimitter:' ... '},settings:{zeroPadTime:true,AMPM:false},defaultOptions:{longWeekDay:false,shortWeekDay:false,shortYear:false,fullYear:true,seconds:false,milliSeconds:false},options:function(_U5){var
_0=HLocale.dateTime,_W1=_0.defaultOptions,_3={},_6;for(_6 in _W1){_3[_6]=_W1[_6];}
if(!_U5){_U5={};}
for(_6 in _U5){_3[_6]=_U5[_6];}
return _3;},zeroPadTime:function(_S3){if(HLocale.dateTime.settings.zeroPadTime&&_S3<10){return'0'+_S3;}
return _S3.toString();},formatShortWeekDay:function(_O1){var
_0=HLocale.dateTime,_4=new Date(_O1*1000),_f1=_0.strings,_n1=_4.getUTCDay();return _f1.weekDaysShort[_n1];},formatLongWeekDay:function(_O1){var
_0=HLocale.dateTime,_4=new Date(_O1*1000),_f1=_0.strings,_n1=_4.getUTCDay();return _f1.weekDaysLong[_n1];},formatDate:function(_O1,_3){var
_0=HLocale.dateTime,_4=new Date(_O1*1000),_f1=_0.strings,_n1=_4.getUTCDay(),_d4=_4.getUTCDate()+_f1.dateDelimitter+(_4.getUTCMonth()+1)+_f1.dateDelimitter;_3=_0.options(_3);if(_3.fullYear){_d4+=_4.getUTCFullYear();}
else if(_3.shortYear){_d4+=date.getUTCYear();}
if(_3.longWeekDay){return _f1.weekDaysLong[_n1]+' '+_d4;}
else if(_3.shortWeekDay){return _f1.weekDaysShort[_n1]+' '+_d4;}
return _d4;},formatTime:function(_O1,_3){var
_0=HLocale.dateTime,_4=new Date(_O1*1000),_f1=_0.strings,_p8=_0.zeroPadTime(_4.getUTCHours())+_f1.timeDelimitter+_0.zeroPadTime(_4.getUTCMinutes());_3=_0.options(_3);if(_3.seconds){_p8+=_f1.timeDelimitter+_0.zeroPadTime(_4.getUTCSeconds());if(_3.milliSeconds){_p8+=_f1.timeMsDelimitter+_4.getUTCMilliseconds();}}
return _p8;},formatDateTime:function(_O1,_3){var _0=HLocale.dateTime;return _0.formatDate(_O1,_3)+' '+_0.formatTime(_O1,_3);}}};var
HClass=function(){if(arguments.length){if(this===window){HClass.prototype.extend.call(arguments[0],arguments.callee.prototype);}
else{this.extend(arguments[0]);}}};HClass.prototype={extend:function(_N1,_2){var _n2=HClass.prototype.extend,_x6,_P1,_ca,i,_l,_L1,_k8;if(arguments.length===2){_x6=this[_N1];if((_x6 instanceof Function)&&(_2 instanceof Function)&&_x6.valueOf()!==_2.valueOf()&&(/\bbase\b/).test(_2)){_P1=_2;_2=function(){var _Hc=this.base;this.base=_x6;_ca=_P1.apply(this,arguments);this.base=_Hc;return _ca;};_2.valueOf=function(){return _P1;};_2.toString=function(){return String(_P1);};}
return this[_N1]=_2;}else if(_N1){_L1={toSource:null};_k8=["toString","valueOf"];if(HClass._v8){_k8.push("constructor");}
for(i=0;(_l=_k8[i]);i++){if(_N1[_l]!==_L1[_l]){_n2.call(this,_l,_N1[_l]);}}
for(_l in _N1){if(!_L1[_l]){_n2.call(this,_l,_N1[_l]);}}}
this.nu=function(){return new(this.extend({constructor:function(args){this.base.apply(this,args);}}))(arguments);};this['new']=this.nu;return this;},base:function(){}};HClass.extend=function(_t0,_w8){var _n2=HClass.prototype.extend,_L1,_f4,_A2,_p6;if(!_t0){_t0={};}
HClass._v8=true;_L1=new this;_n2.call(_L1,_t0);_f4=_L1.constructor;_L1.constructor=this;delete HClass._v8;_A2=function(){if(!HClass._v8){_f4.apply(this,arguments);}
this.constructor=_A2;};_A2.prototype=_L1;_A2.extend=this.extend;_A2.implement=this.implement;_A2.toString=function(){return String(_f4);};_n2.call(_A2,_w8);_p6=(_f4!==null)?_A2:_L1;if(_p6.init instanceof Function){_p6.init();}
return _p6;};HClass.implement=function(_g4){if(_g4 instanceof Function){_g4=_g4.prototype;}
this.prototype.extend(_g4);};if([]['indexOf']===undefined){Array.prototype.indexOf=function(_ge){var i=0,l=this.length;for(;i<l;i++){if(this[i]===_ge){return i;}}
return-1;};}
try{if(window['console']===undefined){window.console={log:function(){}};}}catch(e){}
var BROWSER_TYPE,ELEM,ElementManager,LOAD;BROWSER_TYPE={mac:false,win:false,ie:false,ie6:false,ie7:false,ie8:false,ie9:false,ie10:false,opera:false,safari:false,symbian:false,chrome:false,firefox:false,firefox2:false,firefox3:false,firefox4:false};ELEM=HClass.extend({constructor:null,ELEMTickerInterval:33,reset:function(){this._78=[];this._88=null;this._o6=false;this._98=0;this._pb=0;this._k6=500;this._j6=null;this._23=this.ELEMTickerInterval;this._g6=false;this._f6=false;this._ob=1;this._G={};this._jb=0;this._Q7=[];this._04={};this._v1={};this._x0={};this._C0={};this._f3=[];this._h3={};this._Ue=",ADDRESS,BLOCKQUOTE,CENTER,DIR,DIV,DL,FIELDSET,FORM,H1,H2,H3,H4,H5,H6,HR,ISINDEX,MENU,NOFRAMES,NOSCRIPT,OL,P,PRE,TABLE,UL,";return null;},_J5:function(_5){var _id;if(this._Q7.length!==0){_id=this._Q7.shift();}else{_id=this._jb;this._jb++;}
this._G[_id]=_5;return _id;},_d6:function(_id){this._v1[_id]=[];this._04[_id]={};this._x0[_id]=[];this._C0[_id]={};this._h3[_id]=false;return null;},bindId:function(_bd){var _5,_id;_5=document.getElementById(_bd);_id=this._J5(_5);this._d6(_id);return _id;},bind:function(_5){var _id;_id=this._J5(_5);this._d6(_id);return _id;},get:function(_id){return this._G[_id];},setHTML:function(_id,_j1){if(this._G[_id].innerHTML!==_j1){this._G[_id].innerHTML=_j1;}
return null;},getHTML:function(_id){return this._G[_id].innerHTML;},del:function(_id){var i,_5;_5=this._G[_id];i=this._f3.indexOf(_id);if(i!==-1)this._f3.splice(i,1);delete this._x0[_id];delete this._04[_id];delete this._C0[_id];delete this._h3[_id];delete this._G[_id];this._Q7.push(_id);_5.parentNode.removeChild(_5);return null;},append:function(_9d,_5d){return this._G[_5d].appendChild(this._G[_9d]);},setCSS:function(_id,_te){this._G[_id].style.cssText=_te;return null;},getCSS:function(_id){return this._G[_id].style.cssText;},getVisibleSize:function(_id){var h,w,_N3,_5,_m4,_d,_wa,_b6,_w,_63,_H8,_ra;_5=this._G[_id];_w=['body','visible','overflow'],_N3=_w[0],_ra=_w[1],_m4=_w[2];_63=[_5.offsetWidth,_5.offsetHeight],w=_63[0],h=_63[1];_d=_5.parentNode;while(_d&&_d.nodeName.toLowerCase()!==_N3){if(_ra===this._n4(_d,_m4)){_H8=[_d.clientWidth,_d.clientHeight],_b6=_H8[0],_wa=_H8[1];if(w>_b6)w=_b6-_5.offsetLeft;if(h>_wa)h=_b6-_5.offsetTop;}
_5=_5.parentNode;if(!_d.parentNode)break;_d=_d.parentNode;}
return[w,h];},getSize:function(_id){var _5;_5=this._G[_id];return[_5.offsetWidth,_5.offsetHeight];},getPosition:function(_id){var _5;_5=this._G[_id];return[_5.offsetLeft,_5.offsetTop];},getScrollPosition:function(_id){var _5;_5=this._G[_id];return[_5.scrollLeft,_5.scrollTop];},getScrollSize:function(_id){var _5;_5=this._G[_id];return[_5.scrollWidth,_5.scrollHeight];},_o4:function(_id){var x,_5;_5=this._G[_id];x=0;while(_5!==document){x+=_5.offsetLeft-_5.scrollLeft;_5=_5.parentNode;}
return x;},_p4:function(_id){var y,_5;_5=this._G[_id];y=0;while(_5!==document){y+=_5.offsetTop-_5.scrollTop;_5=_5.parentNode;}
return y;},getVisiblePosition:function(_id){return[this._o4(_id),this._p4(_id)];},getOpacity:function(_id){var _5,_32;_5=this._G[_id];_32=this._n4(_5,'opacity');return parseFloat(_32);},_9e:function(_id,_32){var _68;_68=this.getStyle(_id,'filter',true);if(_32===1){this._G[_id].style.setAttribute('filter',_68.replace(/alpha([^)]*)/gi,''));}else{this._G[_id].style.setAttribute('filter',_68.replace(/alpha([^)]*)/gi,'')+'alpha(opacity='+(_32*100)+')');}
return null;},setOpacity:function(_id,_32){this._G[_id].style.setProperty('opacity',_32,'');if(BROWSER_TYPE.ie6||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8){this._9e(_id,_32);}
return null;},getIntStyle:function(_id,_6){return parseInt(this.getStyle(_id,_6),10);},setBoxCoords:function(_id,_k1){var h,w,x,y;x=_k1[0],y=_k1[1],w=_k1[2],h=_k1[3];this.setStyle(_id,'left',x+'px');this.setStyle(_id,'top',y+'px');this.setStyle(_id,'width',w+'px');this.setStyle(_id,'height',h+'px');return null;},getBoxCoords:function(_id){var h,w,x,y,_w,_63;_w=this.getPosition(_id),x=_w[0],y=_w[1];_63=this.getSize(_id),w=_63[0],h=_63[1];return[x,y,w,h];},_G2:function(_id,_da){return this.getIntStyle(_id,'padding-'+_da)+this.getIntStyle(_id,'border-'+_da+'-width');},_ff:function(_id){return this._G2(_id,'left');},_Ye:function(_id){return this._G2(_id,'right');},_4f:function(_id){return this._G2(_id,'top');},_0f:function(_id){return this._G2(_id,'bottom');},getExtraWidth:function(_id){return this._G2(_id,'left')+this._G2(_id,'right');},getExtraHeight:function(_id){return this._G2(_id,'top')+this._G2(_id,'bottom');},setFPS:function(_l2){this._23=1000/_l2;if(this._23<this.ELEMTickerInterval){this._23=this.ELEMTickerInterval;}
return null;},setSlowness:function(_Lc){this._ob=_Lc;return null;},setIdleDelay:function(_k6){this._k6=_k6;return null;},_a6:false,_Vb:function(){iefix._A6();this._a6=false;return null;},_u4:function(_L0,_n8){if(!_n8)_n8=_L0;this._j6=setTimeout(function(){return ELEM.flushLoop(_L0);},_n8);return null;},_Qd:function(){var _L0;_L0=Math.round(this._ob*(this._98/this._pb));if(_L0<this._23||!_L0)_L0=this._23;return _L0;},flushLoop:function(_L0){if(BROWSER_TYPE.ie6&&this._a6)this._Vb();clearTimeout(this._j6);if(this._g6){_L0*=2;this._u4(_L0);}else{if(!this._f6){if(BROWSER_TYPE.ie6&&this._a6)this._Vb();this._u4(_L0,this._k6);return;}
_L0=this._Qd();this._g6=true;this._u4(_L0);}
this._Od();this._g6=false;return null;},_Od:function(){var i,_u2,_Ub,_id,_M0;_Ub=new Date().getTime();this._98-=_Ub;_M0=this._f3.length;if(_M0>0){_u2=this._f3.splice(0,_M0);for(i=1;1<=_M0?i<=_M0:i>=_M0;1<=_M0?i++:i--){this._5f++;_id=_u2.shift();if(_id===null){console.log('no id:',_id);continue;}
this._h3[_id]=false;this._Jd(_id);this._Id(_id);}}
this._pb++;this._98+=new Date().getTime();this._f6=this._f3.length!==0;return null;},_Id:function(_id){var i,_C0,_x0,_u2,_5,_6,_M0,_Y2;_x0=this._x0[_id];if(_x0.length===0)return null;_C0=this._C0[_id];_5=this._G[_id];_M0=_x0.length;_u2=_x0.splice(0,_M0);for(i=1;1<=_M0?i<=_M0:i>=_M0;1<=_M0?i++:i--){_6=_u2.shift();_Y2=_C0[_6];_5.setAttribute(_6,_Y2);}
return null;},_Gd:function(_id,_6){var _5;_5=this._G[_id];return _5.getAttribute(_6);},getAttr:function(_id,_6,_D1){var _Y2;if(_D1){_Y2=this._Gd(_id,_6);}else{_Y2=this._C0[_id][_6];}
this._C0[_id][_6]=_Y2;return _Y2;},setAttr:function(_id,_6,_2,_D1){var _C0,_x0,_Tb;_x0=this._x0[_id];_C0=this._C0[_id];if(_D1)this._G[_id].setAttribute(_6,_2);_Tb=_2!==this.getAttr(_id,_6);if(_Tb||_D1){_C0[_6]=_2;if(!_D1){if(_x0.indexOf(_6)===-1)_x0.push(_6);if(!this._h3[_id]){this._f3.push(_id);this._h3[_id]=true;this._o8();}}}
return null;},delAttr:function(_id,_6){var _C0,_x0,_s8;_x0=this._Ne[_id];_C0=this._C0[_id];delete _C0[_6];this._G[_id].removeAttribute(_6);_s8=_x0.indexOf(_6);if(_s8!==-1)_x0.splice(_s8,1);this._o8();return null;},hasClassName:function(_id,_00){var _F1;_F1=this._G[_id].className.split(' ');return _F1.indexOf(_00)!==-1;},addClassName:function(_id,_00){var _F1,_5;if(!this.hasClassName(_id,_00)){_5=this._G[_id];if(_5.className.trim()===''){_5.className=_00;}else{_F1=_5.className.trim().split(' ');_F1.push(_00);_5.className=_F1.join(' ');}}
return null;},removeClassName:function(_id,_00){var _F1,_5;if(this.hasClassName(_id,_00)){_5=this._G[_id];_F1=_5.className.split(' ');_F1.splice(_F1.indexOf(_00),1);_5.className=_F1.join(' ');}
return null;},_o8:function(){if(!this._f6){this._f6=true;if(!this._g6){clearTimeout(this._j6);this._u4(this._23);}}
return null;},_66:function(_5,_6,_2){_5.style.setProperty(_6,_2,'');return null;},_Rb:function(_f){return _f.replace(/((-)([a-z])(\w))/g,function($0,$1,$2,$3,$4){return $3.toUpperCase()+$4;});},_Pb:function(_f){return _f.replace(/(([A-Z])(\w))/g,function($0,$1,$2,$3){return'-'+$2.toLowerCase()+$3;});},_ed:function(_5,_6,_2){_5.style[this._Rb(_6)]=_2;if(BROWSER_TYPE.ie6){if(iefix._uc.indexOf(_6)!==-1){this._a6=true;}}
return null;},setStyle:function(_id,_6,_2,_D1){var _i0,_5,_v1;if(_id===void 0){console.log('ERROR; undefined id in ELEM#setStyle(',_id,_6,_2,_D1,')');}
if(BROWSER_TYPE.ie9)_D1=true;try{_i0=this._04[_id];}catch(e){console.error(e,this);}
_5=this._G[_id];if(_i0===void 0){this._d6(_id);_i0=this._04[_id];}
_6=this._Pb(_6);if(_2!==_i0[_6]){_i0[_6]=_2;if(_D1){if(_6==='opacity'){this.setOpacity(_id,_2);}else{this._66(_5,_6,_2);}}else{_v1=this._v1[_id];if(_v1.indexOf(_6)===-1)_v1.push(_6);if(!this._h3[_id]){this._f3.push(_id);this._h3[_id]=true;this._o8();}}}
return null;},make:function(_z8,_B4,_3){var _D8,_5,_R,_id,_j,_w;if(_z8===void 0)_z8=0;if(_B4===void 0){_B4='DIV';}else{_B4=_B4.toUpperCase();}
_5=document.createElement(_B4);_id=this._J5(_5);this._d6(_id);if(_3!==void 0){if(_3.attrs){_w=_3.attrs;for(_R=0,_j=_w.length;_R<_j;_R++){_D8=_w[_R];this.setAttr(_id,_D8[0],_D8[1],true);}}}
this._G[_z8].appendChild(_5);return _id;},windowSize:function(){var _I8,_H0;_H0=[window.innerWidth,window.innerHeight];if(!(_H0[0]||_H0[1])){_I8=document.documentElement;_H0=[_I8.clientWidth,_I8.clientHeigh];}
return _H0;},_n4:function(_5,_6){return document.defaultView.getComputedStyle(_5,null).getPropertyValue(_6);},_ue:function(_5,_6){if(_6==='width')return _5.clientWidth;if(_6==='height')return _5.clientHeight;return _5.currentStyle[this._Rb(_6)];},getStyle:function(_id,_6,_D1){var _i0,_2;_i0=this._04[_id];_6=this._Pb(_6);if(_i0[_6]===void 0||_D1){if(_6==='opacity'){_2=this.getOpacity(_id);}else{_2=this._n4(this._G[_id],_6);if(_6==='z-index'&&_2==='auto')_2=-1;}
_i0[_6]=_2;}else{_2=_i0[_6];}
return _2;},_Jd:function(_id){var i,_i0,_u2,_5,_6,_X2,_v1;_5=this._G[_id];if(!_5)return;_v1=this._v1[_id];_i0=this._04[_id];_X2=_v1.length;if(_X2===0)return null;_u2=_v1.splice(0,_X2);for(i=1;1<=_X2?i<=_X2:i>=_X2;1<=_X2?i++:i--){_6=_u2.shift();if(_6==='opacity'){this.setOpacity(_id,_i0[_6]);}else{if(!_6)console.log('invalid style key:',_5,_6,_i0);this._66(_5,_6,_i0[_6]);}}
return null;},_D4:function(){var TestClass;if(typeof RSenceInit!=="undefined"&&RSenceInit!==null)RSenceInit();if(BROWSER_TYPE.ie){this._n4=this._ue;this._66=this._ed;}
if(!this._j6)this.bind(document.body);if(BROWSER_TYPE.symbian){TestClass=HClass.extend({test:true,constructor:null});if(!TestClass.test){if(confirm('Your Web Browser fails. Please restart the S60 Web Browser or install a better browser.\nDo you want to download and install Opera Mobile now?')){location.href='http://www.opera.com/download/get.pl?sub=++++&id=32792&location=270&nothanks=yes';}
return;}}
while(!this._Gb){this._qe();}
this._u4(this._23);return null;},_Eb:function(_I3){var _X;_X=typeof _I3;if(_X==='function'){_I3.call();}else if(_X==='string'){console.log("Evaluation of LOAD strings no longer supported. Please convert to anonymous function: "+_I3);}
return null;},_qe:function(){if(this._78.length===0){this._Gb=true;return;}else{this._Eb(this._78.shift());}
return null;},_ie:function(){var _d0,_P8,_B0;_B0=navigator.userAgent;_d0=BROWSER_TYPE;_d0.opera=_B0.indexOf('Opera')!==-1;_d0.safari=_B0.indexOf('KHTML')!==-1;_d0.symbian=_B0.indexOf('SymbianOS')!==-1;_d0.chrome=_B0.indexOf('Chrome')!==-1;_P8=document.all&&!_d0.opera;if(_P8){_d0.ie=_P8;_d0.ie6=_B0.indexOf('MSIE 6')!==-1;_d0.ie7=_B0.indexOf('MSIE 7')!==-1;_d0.ie8=_B0.indexOf('MSIE 8')!==-1;_d0.ie9=_B0.indexOf('MSIE 9')!==-1;_d0.ie10=_B0.indexOf('MSIE 10')!==-1;_d0.ie9=_d0.ie10;}
_d0.mac=_B0.indexOf('Macintosh')!==-1;_d0.win=_B0.indexOf('Windows')!==-1;_d0.firefox=_B0.indexOf('Firefox')!==-1;_d0.firefox2=_B0.indexOf('Firefox/2.')!==-1;_d0.firefox3=_B0.indexOf('Firefox/3.')!==-1;_d0.firefox4=_B0.indexOf('Firefox/4.')!==-1;this._Ab();return null;},_ae:function(_I3){if(ELEM._Gb){ELEM._Eb(_I3);}else{ELEM._78.push(_I3);}
return null;},_Ab:function(){var _R8;var _0=this;if(BROWSER_TYPE.ie6||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8){if(location.protocol='https:'){_R8='src=//0';}else{_R8='javascript:void(0)';}
document.write('<scr'+'ipt id=_5e defer src='+_R8(+'></scr'+'ipt>'));document.getElementById('_5e').onreadystatechange(function(){if(ELEM.readyState==='complete'){clearTimeout(ELEM._88);ELEM._o6=true;return ELEM._D4();}});return;}else if(BROWSER_TYPE.safari&&document.readyState==='complete'){ELEM._o6=true;}else if(document.body){ELEM._o6=true;}
if(ELEM._o6){clearTimeout(this._88);if(BROWSER_TYPE.symbian){BROWSER_TYPE.symbian=document.body.innerHTML==='fastinnerhtml!';}
this._D4();}else{ELEM._88=setTimeout(function(){return ELEM._Ab();},10);}
return null;}});ELEM.reset();ElementManager=ELEM;LOAD=ELEM._ae;ELEM._ie();var
Event={element:function(e){return e.target||e.srcElement;},pointerX:function(e){return e.pageX||e.clientX+document.documentElement.scrollLeft;},pointerY:function(e){return e.pageY||e.clientY+document.documentElement.scrollTop;},stop:function(e){if(e.preventDefault){e.preventDefault();e.stopPropagation();}
else{e.returnValue=false;e.cancelBubble=true;}},isLeftClick:function(e){if(BROWSER_TYPE.ie&&!BROWSER_TYPE.ie9){return(e.button===1||e.button===3||e.button===5);}
else{return(e.button===0);}},observers:false,_4e:function(_5,_l,_I,_o1){if(!Event.observers){Event.observers=[];}
if(_5.addEventListener){this.observers.push([_5,_l,_I,_o1]);_5.addEventListener(_l,_I,_o1);}
else if(_5.attachEvent){this.observers.push([_5,_l,_I,_o1]);_5.attachEvent("on"+_l,_I);}},unloadCache:function(){if(!Event.observers){return;}
var i,l=Event.observers.length;for(i=0;i<l;i++){try{Event.stopObserving.apply(this,Event.observers[0]);}
catch(e){}}
Event.observers=false;},observe:function(_5,_l,_I,_o1){_o1=_o1||false;Event._4e(_5,_l,_I,_o1);},stopObserving:function(_5,_l,_I,_o1){if(_5===undefined){console.log('Warning Event.stopObserving of event name: "'+_l+'" called with an undefined elem!');return;}
_o1=_o1||false;if(_5['removeEventListener']){_5.removeEventListener(_l,_I,_o1);}
else if(detachEvent){_5.detachEvent("on"+_l,_I);}
var i=0;while(i<Event.observers.length){var eo=Event.observers[i];if(eo&&eo[0]===_5&&eo[1]===_l&&eo[2]===_I&&eo[3]===_o1){Event.observers[i]=null;Event.observers.splice(i,1);}
else{i++;}}},KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34};if(BROWSER_TYPE.ie&&!BROWSER_TYPE.ie9){Event.observe(window,"unload",Event.unloadCache,false);}
var
SHA=HClass.extend({constructor:function(_j0){_j0&&this.setChrsz(_j0);},_T8:0,hexCase:function(){return this._T8;},setHexCase:function(_vb){this._T8=_vb;},_N7:"=",base64Pad:function(){return this._N7;},setBase64Pad:function(_tb){this._N7=_tb;},_j0:8,chrsz:function(){return this._j0;},setChrsz:function(_sb){this._j0=_sb;},hexSHA1:function(_A1){var _0=this;return _0._rb(_0._J3(_0._M3(_A1),_A1.length*_0._j0));},b64SHA1:function(_A1){var _0=this;return _0._O7(_0._J3(_0._M3(_A1),_A1.length*_0._j0));},strSHA1:function(_A1){var _0=this;return _0._qb(_0._J3(_0._M3(_A1),_A1.length*_0._j0));},hexHmacSHA1:function(_6,_y){var _0=this;return _0._rb(_0._P7(_6,_y));},b64HmacSHA1:function(_6,_y){var _0=this;return _0._O7(_0._P7(_6,_y));},strHmacSHA1:function(_6,_y){var _0=this;return _0._qb(_0._P7(_6,_y));},str2Base64:function(_f){var _0=this;return _0._O7(_0._M3(_f));},test:function(){return this.hexSHA1("abc")==="a9993e364706816aba3e25717850c26c9cd0d89d";},_J3:function(_r,_j){_r[_j>>5]|=0x80<<(24-_j%32);_r[((_j+64>>9)<<4)+15]=_j;var _0=this,_03=new Array(80),_43=1732584193,_Q0=-271733879,_W0=-1732584194,_01=271733878,_54=-1009589776,i,_lb,_gb,_fb,_db,_bb,j,_Q1;for(i=0;i<_r.length;i+=16){_lb=_43;_gb=_Q0;_fb=_W0;_db=_01;_bb=_54;for(j=0;j<80;j++){if(j<16){_03[j]=_r[i+j];}
else{_03[j]=_0._R7(_03[j-3]^_03[j-8]^_03[j-14]^_03[j-16],1);}
_Q1=_0._m2(_0._m2(_0._R7(_43,5),_0._Ec(j,_Q0,_W0,_01)),_0._m2(_0._m2(_54,_03[j]),_0._Dc(j)));_54=_01;_01=_W0;_W0=_0._R7(_Q0,30);_Q0=_43;_43=_Q1;}
_43=_0._m2(_43,_lb);_Q0=_0._m2(_Q0,_gb);_W0=_0._m2(_W0,_fb);_01=_0._m2(_01,_db);_54=_0._m2(_54,_bb);}
return[_43,_Q0,_W0,_01,_54];},_Ec:function(_Q1,_Q0,_W0,_01){if(_Q1<20){return(_Q0&_W0)|((~_Q0)&_01);}
if(_Q1<40){return _Q0^_W0^_01;}
if(_Q1<60){return(_Q0&_W0)|(_Q0&_01)|(_W0&_01);}
return _Q0^_W0^_01;},_Dc:function(_Q1){return(_Q1<20)?1518500249:(_Q1<40)?1859775393:(_Q1<60)?-1894007588:-899497514;},_P7:function(_6,_y){var _0=this,_K4=_0._M3(_6),_ab=new Array(16),_8b=new Array(16),i,_U1;if(_K4.length>16){_K4=_0._J3(_K4,_6.length*_0._j0);}
for(i=0;i<16;i++){_ab[i]=_K4[i]^0x36363636;_8b[i]=_K4[i]^0x5C5C5C5C;}
_U1=_0._J3(_ab.concat(_0._M3(_y)),512+_y.length*_0._j0);return _0._J3(_8b.concat(_U1),512+160);},_m2:function(_r,_K){var _7b=(_r&0xFFFF)+(_K&0xFFFF),_yc=(_r>>16)+(_K>>16)+(_7b>>16);return(_yc<<16)|(_7b&0xFFFF);},_R7:function(_S3,_6b){return(_S3<<_6b)|(_S3>>>(32-_6b));},_M3:function(_f){var _0=this,_N4=[],_S7=(1<<_0._j0)-1,_0d=_f.length*_0._j0,i;for(i=0;i<_0d;i+=_0._j0){_N4[i>>5]|=(_f.charCodeAt(i/_0._j0)&_S7)<<(32-_0._j0-i%32);}
return _N4;},_qb:function(_N4){var _0=this,_f="",_S7=(1<<_0._j0)-1,i,_U7=_N4.length*32,_Zc=32-_0._j0;for(i=0;i<_U7;i+=_0._j0){_f+=String.fromCharCode((_N4[i>>5]>>>(_Zc-i%32))&_S7);}
return _f;},_rb:function(_o2){var _0=this,_5b=_0._T8?"0123456789ABCDEF":"0123456789abcdef",_f="",i,_V7=_o2.length*4;for(i=0;i<_V7;i++){_f+=_5b.charAt((_o2[i>>2]>>((3-i%4)*8+4))&0xF)+
_5b.charAt((_o2[i>>2]>>((3-i%4)*8))&0xF);}
return _f;},_O7:function(_o2){var _0=this,_r1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_f="",i,_V7=_o2.length*4,_4b,_3b,_Oe,_2b,j,_U7=_o2.length*32;for(i=0;i<_V7;i+=3){_4b=(((_o2[i>>2]>>8*(3-i%4))&0xFF)<<16);_3b=(((_o2[i+1>>2]>>8*(3-(i+1)%4))&0xFF)<<8);_Kd=((_o2[i+2>>2]>>8*(3-(i+2)%4))&0xFF);_2b=(_4b|_3b|_Kd);for(j=0;j<4;j++){if(i*8+j*6>_U7){_f+=_0._N7;}
else{_f+=_r1.charAt((_2b>>6*(3-j))&0x3F);}}}
return _f;}});var
HSystem={windowFocusMode:1,apps:[],appPriorities:[],busyApps:[],freeAppIds:[],defaultInterval:10,defaultPriority:20,viewsZOrder:[],ticks:0,maxAppRunTime:5000,scheduler:function(){var
_u=0,_s0;for(;_u<this.apps.length;_u++){if(this.apps[_u]){if(!this.busyApps[_u]){_s0=this.appPriorities[_u];if(_s0<0){continue;}
if(this.ticks%_s0===0){if(HSystem.apps[_u]){HSystem.apps[_u]._1b();}}}}}
if(this._S1.length!==0){this._Hd();}},_Za:function(){var
_c,i=0;for(;i<this.views.length;i++){_c=this.views[i];if(_c&&(_c.flexRight||_c.flexBottom)){_c.rect._Y7();}}},ticker:function(){this.ticks++;this.scheduler();this._Qe=setTimeout(function(){HSystem.ticker();},this.defaultInterval);},addApp:function(_e2,_s0){var _u;if(this.freeAppIds.length!==0){_u=this.freeAppIds.shift();this.apps[_u]=_e2;}
else{this.apps.push(_e2);_u=this.apps.length-1;}
_e2.parent=this;_e2.parents=[this];_e2.appId=_u;this.startApp(_u,_s0);return _u;},startApp:function(_u,_s0){if(_s0===undefined){_s0=this.defaultInterval;}
this.appPriorities[_u]=_s0;this.busyApps[_u]=false;},stopApp:function(_u){this.busyApps[_u]=true;},reniceApp:function(_u,_s0){this.appPriorities[_u]=_s0;},killApp:function(_u,_Ya){this.reniceApp(_u,-1);if(_Ya||(this.busyApps[_u]===false)){this._18(_u);}
else{var
_Cd=new Date().getTime(),_0=this,_28=setInterval(function(){if(_0.busyApps[_u]===true){if(new Date().getTime()>_Cd+_0.maxAppRunTime){clearTimeout(_28);_0._18(_u);}
else{clearTimeout(_28);_0._18(_u);}}},10);}},_18:function(_u){this.busyApps[_u]=true;this.apps[_u].destroyAllViews();this.apps[_u]=null;this.freeAppIds.push(_u);},views:[],_38:[],addView:function(_c){var _56;if(this._38.length===0){_56=this.views.length;this.views.push(_c);}
else{_56=this._38.pop();this.views[_56]=_c;}
return _56;},delView:function(_e){this.views[_e]=null;this._38.push(_e);},activeWindowId:0,windowFocus:function(_c){if(!_c){this.activeWindowId=0;return;}
var _48=this.activeWindowId,_z0=this.views,_e=_c.viewId;if(_z0[_48]){if(_z0[_48]["windowBlur"]){_z0[_48].windowBlur();}}
this.activeWindowId=_e;_c.bringToFront();_c.windowFocus();},_S1:[],updateZIndexOfChildren:function(_e){if(this._S1.indexOf(_e)===-1){this._S1.push(_e);}
if((_e!==undefined&&_e!==null)&&(this.views[_e].app===this.views[_e].parent)){(this._S1.indexOf(null)===-1)&&this._S1.push(null);}},_Hd:function(){var
j=0,_0=HSystem,_Xa=_0._S1,_xd=_Xa.length;for(;j<_xd;j++){var
_e=_Xa.shift(),_z0=((_e===null)?(_0.viewsZOrder):(_0.views[_e].viewsZOrder)),_wd=_z0.length,_58=_0.views,_Ua,_c,_sd='elemId',_od='z-index',i=0,_9;for(;i<_wd;i++){_Ua=_z0[i];_c=_58[_Ua];_9=_c[_sd];if(_9===undefined){continue;}
ELEM.setStyle(_9,_od,i);}}}};LOAD(function(){HSystem.ticker();});var
HValueResponder=HClass.extend({setValueObj:function(_12){this.valueObj=_12;this.setValue(_12.value);return this;},valueDiffers:function(_2){return(COMM.Values.encode(_2)!==COMM.Values.encode(this.value));},setValue:function(_2){if(_2!==undefined&&this['valueObj']&&this.valueDiffers(_2)){var _e3=COMM.Values;this.value=_2;if(_e3._Qa.indexOf(_e3.type(_2))===-1){this.valueObj.set(_e3.clone(_2));}
else{this.valueObj.set(_2);}
(this['refresh']!==undefined)&&(typeof this.refresh==='function')&&this.refresh();}
return this;}});var
HApplication=HClass.extend({elemId:0,constructor:function(_s0,_h){this.viewId=null;this.views=[];this.markupElemIds=[];this.viewsZOrder=HSystem.viewsZOrder;HSystem.addApp(this,_s0);if(_h){this.label=_h;}
else{this.label='ProcessID='+this.appId;}},buildParents:function(_e){var _c=HSystem.views[_e],i=0;_c.parent=this;_c.parents=[];for(;i<this.parents.length;i++){_c.parents.push(this.parents[i]);}
_c.parents.push(this);},addView:function(_c){var _e=HSystem.addView(_c);this.views.push(_e);this.buildParents(_e);this.viewsZOrder.push(_e);return _e;},removeView:function(_e){if(typeof _e==='object'){console.log('warning, viewId not a number:',_e,', trying to call its remove method directly..');_e.remove();return this;}
var
_c=HSystem.views[_e];if(_c){if(_c['remove']){HSystem.views[_e].remove();}
else{console.log('view does not have method "remove":',_c);}}
else{console.log('tried to remove non-existent viewId:'+_e);}},destroyView:function(_e){HSystem.views[_e].die();},die:function(){HSystem.killApp(this.appId,false);},destroyAllViews:function(){for(var i=0;i<this.views.length;i++){try{HSystem.views[this.views[i]].die();}
catch(e){console.log('unable to destroy:',this.views[i]);}}},_nd:function(){var i,_e,_c;for(i=0;i<this.views.length;i++){_e=this.views[i];_c=HSystem.views[_e];if((_c!==null)&&(_c['onIdle']!==undefined)){_c.onIdle();}}},_1b:function(){var _0=this;HSystem.busyApps[_0.appId]=true;this._We=setTimeout(function(){_0.onIdle();_0._nd();HSystem.busyApps[_0.appId]=false;},10);},onIdle:function(){}});HApplication.implement(HValueResponder.nu());var
COMM={_Re:function(){alert("'ERROR: This web browser doesn't support XMLHttpRequest. Please upgrade; unable to continue.");},_Ka:function(_0){if(_0.X.readyState===4){var _46=_0.X.status,_Ja='on'+_46,_dd=((_46>=200&&_46<300)||(_46===0));_0[_Ja]?_0[_Ja](_0):_dd?_0.onSuccess(_0):_0.onFailure(_0);}},_d8:function(_Y4){var i=0,_h0=_Y4.length,_g8='';for(;i<_h0;i++){_g8+=encodeURIComponent(_Y4[i]);_g8+=(i===_h0-1)?'':(i%2===0)?'=':'&';}
return _g8;},request:function(_g,_3){var _26=COMM,_0=_3?_3:{},_P1=_3.method?_3.method.toUpperCase():'GET',_d3=(_3.async===undefined)?true:_3.async,_Y4=_3.params?_3.params:[],_h8=_3.headers?_3.headers:{},_b2=_3.contentType?_3.contentType:'application/x-www-form-urlencoded',_3d=_3.charset?_3.charset:'UTF-8',_1d=_3.username?_3.username:null,_xe=_3.username?_3.password:null;if(!_3.onFailure){_0.onFailure=function(resp){console.log('No failure handler specified, response: ',resp);};}
if(!_3.onSuccess){_0.onSuccess=function(resp){console.log('No success handler specified, response: ',resp);};}
if(!_3.on302){_0.on503=function(_0){var
_ve=parseInt(_0.X.getResponseHeader('Retry-After'),10)*1000,_28=setTimeout(function(){COMM.request(_0.url,_0.options);},_ve);};}
_0.url=_g;_0.options=_3;_0.X=_26._r8();if(_P1==='GET'&&_Y4.length!==0){_g+=((_g.indexOf('?')!==-1)?'&':'?')+_26._d8(_Y4);}
if(!_d3){console.log("WARNING: Synchronous "+_P1+" request to "+_g+", these will fail on the Symbian web browser.");}
_0.X.open(_P1,_g,_d3,_1d,_xe);_0.X.onreadystatechange=function(){_26._Ka(_0);};if(_P1==='POST'){_h8['Content-Type']=_b2+'; charset='+_3d;var _N3=_3.body?_3.body:'';for(var _ya in _h8){_0.X.setRequestHeader(_ya,_h8[_ya]);}
_0.X.send(_N3);}
else if(_P1==='GET'){_0.X.send(null);}
if(!_d3){_26._Ka(_0);}
return _0;}};if(window['XMLHttpRequest']!==undefined){COMM._r8=function(){return new XMLHttpRequest();};}
else if(window.ActiveXObject){COMM._r8=function(){return new ActiveXObject("Microsoft.XMLHTTP");};}
else{COMM._r8=function(){console.log("No XMLHttpRequest object types known. Can't Communicate.");return new COMM._Te();};}
COMM.Queue=HApplication.extend({constructor:function(){this.commandQueue=[];this.paused=false;this.base(10);},onIdle:function(){!this.paused&&this.commandQueue.length!==0&&this.flush();},pause:function(){this.paused=true;},resume:function(){this.paused=false;this.flush();},STRINGS:{ERR:'COMM.Queue Error: ',JS_EXEC_FAIL:'Failed to execute the Javascript function: ',REASON:' Reason:'},flush:function(){var i=0,_q,_I,_X0,_j=this.commandQueue.length;for(;i<_j;i++){if(this.paused){break;}
_q=this.commandQueue.shift();try{if(typeof _q==='function'){_q.call();}
else{_I=_q[0];_X0=_q[1];_I.apply(this,_X0);}}
catch(e){var _t8=this.STRINGS;console.log([_t8.ERR_PREFIX,_t8.JS_EXEC_FAIL,_q,_t8.REASON,e].join(''));}}},unshift:function(_I,_X0){if(_X0!==undefined){this.commandQueue.unshift([_I,_X0]);}
else{this.commandQueue.unshift(_I);}},push:function(_I,_X0){if(_X0!==undefined){this.commandQueue.push([_I,_X0]);}
else{this.commandQueue.push(_I);}},unshiftEval:function(_y8,_X0){var _I;eval('_I = function(){'+_y8+'}');this.unshift(_I);},pushEval:function(_y8){var _I;eval('_I = function(){'+_y8+'}');this.push(_I);}}).nu();COMM.Session=HClass.extend({constructor:function(){var _0=this;_0.sha=SHA.nu(8);_0.sha_key=_0.sha.hexSHA1(((new Date().getTime())*Math.random()*1000).toString());_0.ses_key='0:.o.:'+_0.sha_key;_0.req_num=0;},newKey:function(_L3){var _0=this,_va=_0.sha.hexSHA1(_L3+_0.sha_key);_0.req_num++;_0.ses_key=_0.req_num+':.o.:'+_va;_0.sha_key=_va;}}).nu();COMM.Transporter=HApplication.extend({constructor:function(){var _0=this;_0._C8();_0.serverLostMessage='Server Connection Lost: Reconnecting...';_0.label='Transporter';_0.url=false;_0.busy=false;_0.stop=true;_0._44=false;_0._K8=false;_0._6f=false;_0.base(1);},_C8:function(){if(window['JSON']){var
_85=window.JSON,_95='function';if((typeof _85['parse']===_95)&&(typeof _85['stringify']===_95)){this.parseResponseArray=this._ee;}}},onIdle:function(){this.sync();},poll:function(_be){HSystem.reniceApp(this.appId,_be);},getClientEvalError:function(){var _0=COMM.Transporter;return _0._K8?'&err_msg='+
COMM.Values._W8(_0._K8):'';},parseResponseArray:function(_Y8){var _C=eval(_Y8);return _C;},_ee:function(_Y8){var _C=JSON.parse(_Y8);return _C;},setValues:function(_Z){if(!_Z instanceof Object){console.log("Invalid values block: ",_Z);return;}
var
i=0,_e3=COMM.Values,_2f,_64,_Z5;if(_Z['new']instanceof Array){for(i=0;i<_Z['new'].length;i++){_64=_Z['new'][i][0];_Z5=_Z['new'][i][1];_e3.create(_64,_Z5);}}
if(_Z['set']instanceof Array){for(i=0;i<_Z['set'].length;i++){_64=_Z['set'][i][0];_Z5=_Z['set'][i][1];_e3.s(_64,_Z5);}}
if(_Z['del']instanceof Array){for(i=0;i<_Z['del'].length;i++){_64=_Z['del'][i];_e3.del(_64);}}},success:function(resp){var _0=COMM.Transporter;if(!resp.X.responseText){_0.failure(resp);return;}
var _Z3=_0.parseResponseArray(resp.X.responseText),i=2,_0e=_Z3.length,_L3=_Z3[0],_Z=_Z3[1],_3e=COMM.Session,_Q2=COMM.Queue;if(_L3===''){console.log('Invalid session, error message should follow...');}
else{_3e.newKey(_L3);}
_0.setValues(_Z);for(;i<_0e;i++){try{_Q2.pushEval(_Z3[i]);}
catch(e){console.log('clientError:'+e+" - "+e.description+' - '+_Z3[i]);_0._K8=e+" - "+e.description+' - '+_Z3[i];}}
if(_0._44){_0._44.die();_0._44=false;}
_Q2.push(function(){COMM.Transporter.flushBusy();});_Q2.flush();},flushBusy:function(){var _0=COMM.Transporter;_0.busy=false;COMM.Values.tosync.length!==0&&_0.sync();},failMessage:function(_S0,_G1){var _0=COMM.Transporter,_Q2=COMM.Queue;console.log('failMessage title:',_S0,', message:',_G1);_0.stop=true;_Q2.push(function(){jsLoader.load('default_theme');});_Q2.push(function(){jsLoader.load('controls');});_Q2.push(function(){jsLoader.load('servermessage');});_Q2.push(function(){ReloadApp.nu(_S0,_G1);});},failure:function(_m1){var _0=COMM.Transporter;if(_m1.X.status===0){console.log(_0.serverLostMessage);if(!_0._44){_0._44=HView.extend({_ba:function(_m1){if(_m1!==undefined){this._8a=_m1;}
this._M8++;return this;},_fe:function(){this._4a++;var _m1=this._8a;COMM.request(_m1.url,_m1.options);},onIdle:function(){var _2a=new Date().getTime();this.bringToFront();if(this._M8>0&&(this._4a!==this._M8)&&(this._1a+2000<_2a)&&this._8a){this._1a=_2a;this._fe();}
this.base();},_M8:0,_4a:0,_1a:new Date().getTime(),die:function(){var _e2=this.app;HSystem.reniceApp(_e2.appId,this._ke);this.base();_e2.sync();},drawSubviews:function(){var _U=[['padding-left','8px'],['background-color','#600'],['text-align','center'],['color','#fff'],['font-size','16px'],['opacity',0.85]],i=0;for(;i<_U.length;i++){this.setStyle(_U[i][0],_U[i][1]);}
this.setHTML(this.app.serverLostMessage);this._ke=HSystem.appPriorities[this.appId];if(HSystem.appPriorities[this.appId]<10){HSystem.reniceApp(this.appId,10);}
this._x8=HView.extend({_V9:0,_x8:function(){var _u8,_width=ELEM.getSize(this.parent.elemId)[0];this._V9++;if(this._V9%2===0){_u8=HRect.nu(0,0,80,20);}
else{_u8=HRect.nu(_width-80,0,_width,20);}
this.animateTo(_u8,2000);},onAnimationEnd:function(){if(this.drawn){this._x8();}}}).nu([0,0,80,20],this).setStyle('background-color','#fff').setStyle('opacity',0.8)._x8();}}).nu([0,0,200,20,0,null],_0)._ba(_m1);}
else{_0._44._ba();}}
else{_0.failMessage('Transporter Error','Transporter was unable to complete the synchronization request.');}},sync:function(){if(this.stop){return;}
if(this.busy){return;}
this.busy=true;if(window['sesWatcher']&&window.sesWatcher['sesTimeoutValue']){sesWatcher.sesTimeoutValue.set(new Date().getTime());}
var _0=this,_Z=COMM.Values.sync(),_L3='ses_key='+COMM.Session.ses_key,_oe=_0.getClientEvalError(),_N3=[_L3,_oe,_Z?'&values='+_Z:''].join('');COMM.request(_0.url,{_0:_0,onSuccess:COMM.Transporter.success,onFailure:COMM.Transporter.failure,method:'POST',async:true,body:_N3});}}).nu();COMM.SessionWatcher=HApplication.extend({constructor:function(_T9,_se){this.sesTimeoutValue=COMM.Values.values[_se];this.timeoutSecs=_T9;this.base(10,'SesWatcher');},onIdle:function(){var now=new Date().getTime();if((now-this.sesTimeoutValue.value)>this.timeoutSecs){this.sesTimeoutValue.set(now);}}});COMM.URLResponder=HApplication.extend({constructor:function(){this.urlMatchers=[];this.urlCallBacks=[];this.defaultCallBacks=[];this.prevCallBacks=[];this.prevMatchStrs=[];this.base(1,'URLResponder');this.value=0;},setDefaultResponder:function(_11){this.defaultCallBacks=[_11];this.refresh();},addDefaultResponder:function(_11){this.defaultCallBacks.push(_11);this.refresh();},delDefaultResponder:function(_11){this.defaultCallBacks.splice(this.defaultCallbacks.indexOf(_11),1);this.refresh();},delResponder:function(_i3,_11){_11.hide();if(this.prevCallBacks.indexOf(_11)!==-1){this.prevCallBacks.splice(this.prevCallBacks.indexOf(_11),1);this.prevMatchStrs.splice(this.prevMatchStrs.indexOf(_i3),1);}
var i=0,_i5,_q8;for(;i<this.urlMatchers.length;i++){_i5=this.urlMatchers[i].test(_i3);if(_i5){this.urlMatchers.splice(i,1);this.urlCallBacks.splice(i,1);return 1;}}
this.refresh();return 0;},addResponder:function(_we,_11,_S9){this.urlMatchers.push(new RegExp(_we));this.urlCallBacks.push(_11);this.checkMatch(this.value);if(_S9!==undefined){window.location.href=_S9;}
this.refresh();},checkMatch:function(_i3){if(this.prevMatchStrs.indexOf(_i3)!==-1){return 0;}
var i=0,_i5,_X3=[],_q8;for(;i<this.urlMatchers.length;i++){_i5=this.urlMatchers[i].test(_i3);if(_i5){_X3.push(this.urlCallBacks[i]);}}
if(_X3.length!==0){for(i=0;i<_X3.length;i++){_q8=_X3[i];_q8.show();if(this.prevMatchStrs.indexOf(_i3)!==-1){this.prevMatchStrs.push(_i3);}}
var _M9;for(i=0;i<this.prevCallBacks.length;i++){_M9=this.prevCallBacks[i];if(_X3.indexOf(_M9)===-1){this.prevCallBacks[i].hide();}}
this.prevCallBacks=_X3;return 1;}
if(this.defaultCallBacks.length!==0){if(this.prevCallBacks.length!==0){for(i=0;i<this.prevCallBacks.length;i++){this.prevCallBacks[i].hide();}}
this.prevCallBacks=[];for(i=0;i<this.defaultCallBacks.length;i++){this.defaultCallBacks[i].show();this.prevCallBacks.push(this.defaultCallBacks[i]);}}
return-1;},refresh:function(){var _2=this.value;if(_2.length===0){return;}
if(window.location.href!==_2){window.location.href=_2;}
this.checkMatch(_2);},onIdle:function(){if(!this['valueObj']){return;}
var _L9=window.location.href;if(_L9!==this.value){this.setValue(_L9);}}});COMM.AutoSyncStarter={start:function(){COMM.urlResponder=COMM.URLResponder.nu();COMM.Transporter.url=COMM.Transporter.HelloUrl;COMM.Transporter.stop=false;COMM.Transporter.sync();}};COMM.Values=HClass.extend({constructor:null,values:{},tosync:[],create:function(_id,_y){HValue.nu(_id,_y);},add:function(_id,_2){this.values[_id]=_2;},set:function(_id,_y){this.values[_id].set(_y);},s:function(_id,_y){var _0=this;_y=_0.decode(_y);_0.values[_id].s(_y);},del:function(_id){var _0=this,_Z=_0.values,_2=_Z[_id],_z0=_2.views,_c8=_z0.lengt,i=0,_c;for(;i<_c8;i++){_c=_z0[i];_c.valueObj=HDummyValue.nu(0,_2.value);}
_2.views=[];delete _Z[_id];},changed:function(_2){var _0=this;if(_0.tosync.indexOf(_2.id)===-1){_0.tosync.push(_2.id);var _J9=COMM.Transporter;if(!_J9.busy){_J9.sync();}}},_Qa:['b','n','s'],type:function(_a){if(_a===null){return'~';}
else if(_a===undefined){return'-';}
var _X=(typeof _a).slice(0,1);if(this._Qa.indexOf(_X)!==-1){return _X;}
else if(_X==='o'){if(_a.constructor===Array){return'a';}
else if(_a.constructor===Object){return'h';}
else if(_a.constructor===Date){return'd';}
return false;}
return false;},_td:function(_C){var _f='[',_i1=[],_j=_C.length,_0=this,_q,i=0;for(;i<_j;i++){_q=_0.encode(_C[i]);_i1.push(_q);}
_f+=_i1.join(',')+']';return _f;},_Md:function(_C){var _i1=[],_j=_C.length,_0=this,_q,i=0;for(;i<_j;i++){_q=_0.decode(_C[i]);_i1.push(_q);}
return _i1;},_Nd:function(_U1){var _f='{',_i1=[],_0=this,_6,_2;for(_6 in _U1){_2=_U1[_6];_i1.push(_0.encode(_6)+':'+_0.encode(_2));}
_f+=_i1.join(',')+'}';return _f;},_Pd:function(_U1){var _i1={},_0=this,_6,_2;for(_6 in _U1){_2=_U1[_6];_i1[_0.decode(_6)]=_0.decode(_2);}
return _i1;},_Rd:[[(/\\/g),'\\\\'],[(/\t/g),'\\t'],[(/\n/g),'\\n'],[(/\f/g),'\\f'],[(/\r/g),'\\r'],[(/"/g),'\\"']],_F9:function(_f){var _0=this,_D9=_0._Rd,i=0,_j=_D9.length,_q1,_74,_o5,_i1='';for(;i<_j;i++){_q1=_D9[i];_74=_q1[0];_o5=_q1[1];_f=_f.replace(_74,_o5);}
return'"'+_f+'"';},_W8:function(_f){console.log('WARNING: encodeString called with string: ',_f);var _33;try{_33=unescape(encodeURIComponent(_f));}
catch(e){_33=_f;}
return _33;},_C9:function(_f){var _33;try{_33=decodeURIComponent(escape(_f));}
catch(e){_33=_f;}
return _33;},encode:function(_a){var _f,_X,_0=this;if(_a===null){return'null';}
else if(_a!==undefined){_X=_0.type(_a);if(!_X){return'null';}
switch(_X){case'b':_f=String(_a);break;case'n':_f=String(_a);break;case's':_f=_0._F9(_a);break;case'd':_f='"@'+String(_a.getTime()/1000)+'"';break;case'a':_f=_0._td(_a);break;case'h':_f=_0._Nd(_a);break;default:_f='null';break;}}
else{return'null';}
return _f;},_2e:function(_a){try{return JSON.stringify(_a);}
catch(e){console.log('invalid json:',_a);return"{}"}},decode:function(_f0){var _a,_X,_0=this;if(_f0!==null&&_f0!==undefined){_X=_0.type(_f0);if(!_X){return null;}
switch(_X){case'b':_a=_f0;break;case'n':_a=_f0;break;case's':_a=_0._C9(_f0);break;case'd':_a=_f0;break;case'a':_a=_0._Md(_f0);break;case'h':_a=_0._Pd(_f0);break;default:_a=null;break;}}
else{return null;}
return _a;},_7e:function(_f0){var _a,_X,_0=this;if(_f0!==null&&_f0!==undefined){_X=_0.type(_f0);if(!_X){return null;}
switch(_X){case'b':_a=_f0;break;case'n':_a=_f0;break;case's':_a=_0._C9(_f0);break;case'd':_a=_f0;break;case'a':_a=JSON.parse(_f0);break;case'h':_a=JSON.parse(_f0);break;default:_a=null;break;}}
else{return null;}
return _a;},clone:function(_a,_A9){if(_a===null){return null;}
else if(_a===undefined){console.log('Undefined object, supplementing with null.');return null;}
var _q,_S2;if(_a instanceof Array){_S2=[];for(_q=0;_q<_a.length;_q++){if(_A9){_S2[_q]=_a[_q];}
else{_S2[_q]=this.clone(_a[_q]);}}
return _S2;}
else if(_a instanceof Object){_S2={};for(_q in _a){if(_A9){_S2[_q]=_a[_q];}
else{_S2[_q]=this.clone(_a[_q]);}}
return _S2;}
else{return _a;}},_he:function(_a){if(_a===null){return null;}
else if(_a===undefined){console.log('Undefined object, supplementing with null.');return null;}
if((_a instanceof Array)||(_a instanceof Object)){return JSON.parse(JSON.stringify(_a));}
else{return _a;}},sync:function(){if(this.tosync.length===0){return false;}
var _x9={},_0=this,_Z=_0.values,_v9=_0.tosync,_j=_v9.length,i=0,_id,_2;for(;i<_j;i++){_id=_v9.shift();_2=_Z[_id].value;_x9[_id]=_2;}
return encodeURIComponent(_0.encode(_x9));},_C8:function(){if(window['JSON']){var
_85=window.JSON,_95='function';if((typeof _85['parse']===_95)&&(typeof _85['stringify']===_95)){this.clone=this._he;this.encode=this._2e;}}}});COMM.Values._C8();HVM=COMM.Values;var
HValue=HClass.extend({constructor:function(_id,_2){this.id=_id;this.value=_2;this.views=[];if(_id){COMM.Values.add(_id,this);}},die:function(){for(var _Z0=0;_Z0<this.views.length;_Z0++){var _F8=this.views[_Z0];_F8.setValueObj(HDummyValue.nu());this.views.splice(_Z0,1);}
if(this.id){COMM.Values.del(this.id);}},set:function(_2){if(this.differs(_2)){this.value=_2;if(this.id){COMM.Values.changed(this);}
this.refresh();}},differs:function(_2){return(COMM.Values.encode(_2)!==COMM.Values.encode(this.value));},s:function(_2){this.value=_2;this.refresh();},get:function(){return this.value;},bind:function(_A0){if(_A0===undefined){throw("HValueBindError: responder is undefined!");}
if(this.views.indexOf(_A0)===-1){this.views.push(_A0);_A0.setValueObj(this);}},unbind:function(_A0){for(var _Z0=0;_Z0<this.views.length;_Z0++){var _F8=this.views[_Z0];if(_F8===_A0){this.views.splice(_Z0,1);return;}}},release:function(_A0){return this.unbind(_A0);},refresh:function(){for(var _Z0=0;_Z0<this.views.length;_Z0++){var _A0=this.views[_Z0];if(_A0.value!==this.value){if(!_A0._u9){_A0._u9=true;_A0.setValue(this.value);_A0._u9=false;}}}}});COMM.JSLoader=HClass.extend({constructor:function(_7d){var _0=this;_0._B8=[];_0.uri=_7d;_0._1f=false;},_xc:function(_0,_m1){console.log("failed to load js: "+_m1.url);},_r9:function(_r2){var
_0=this,_q9=_r2.slice(0,7)==='http://'||_r2.slice(0,8)==='https://',_g=_q9?_r2:_0.uri+_r2+'.js';return _g;},loaded:function(_r2){var _g=this._r9(_r2);this._B8.push(_g);},load:function(_r2){var
_0=this,_g=_0._r9(_r2);if((_0._B8.indexOf(_g)!==-1)){return;}
COMM.Queue.pause();_0._B8.push(_g);if(BROWSER_TYPE.symbian&&_q9){alert('Sorry, this browser does not support loading external scripts!');return;}
else if(BROWSER_TYPE.symbian){_0._Wd=COMM.request(_g,{onSuccess:function(_m1){_0._Wd=null;COMM.Queue.unshiftEval(_m1.X.responseText);COMM.Queue.resume();},onFailure:_0._xc,method:'GET',async:true});return;}
var _N2=document.createElement('script');if(BROWSER_TYPE.ie){_N2.onreadystatechange=function(){if(this.readyState==='loaded'||this.readyState==='complete'){COMM.Queue.resume();_N2.onload=_N2.readystatechange=null;}};}
else{_N2.onload=function(){COMM.Queue.resume();};}
_N2.src=_g;_N2.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(_N2);}});LOAD(function(){COMM.jsLoader=COMM.JSLoader.nu(COMM.ClientPrefix+'/js/');jsLoader=COMM.jsLoader;});COMM.JSONRenderer=HClass.extend({version:0.9,constructor:function(_y,_d){if((_y['type']==='GUITree')&&(this.version>=_y['version'])){this.data=_y;this.parent=_d;this.render();}
else{throw("JSONRenderer: Only GUITree version "+this.version+" or older data can be handled.");}},render:function(){this.scopes=[window];this.scopeDepth=0;this.view=this.renderNode(this.data,this.parent);},die:function(){this.view.die();},defineInScope:function(_R1){var
_le=(_R1 instanceof Array),_kd=(_R1 instanceof Object);if(_le||!_kd){console.log("JSONRenderer; definition must be an Object, got: '"+(typeof _R1)+"'. Definition: ",_R1);return;}
var
_73={},_Q3=['class','extend','implement'],_00=_R1[_Q3[0]],_n9=_R1[_Q3[1]],_m9=_R1[_Q3[2]],_n2=_n9?this.findInScope(_n9):false,_j9=_m9?this.findInScope(_m9):false,_O3=this.scopes[this.scopeDepth],_6,_2;if(_00===undefined){console.log("JSONRenderer; class name missing in definition scope.");return;}
if(!_n2){_n2=HClass;}
for(_6 in _R1){if(_Q3.indexOf(_6)===-1){_2=_R1[_6];if(typeof _2==='string'){_2=this.extEval(_2);}
_73[_6]=_2;}}
_O3[_00]=_n2.extend(_73);if(_j9){_O3[_00].implement(_j9);}},undefineInScope:function(){},findInScope:function(_00){if(_00===undefined){return false;}
if(_00.indexOf('.')!==-1){var
_O8=_00.split('.'),j=1,_N8=_O8[0],_t5=this.findInScope(_N8);if(!_t5){return false;}
for(;j<_O8.length;j++){_N8=_O8[j];_t5=_t5[_N8];if(!_t5){return false;}}
return _t5;}
var _I0=false,_i9=this.scopes,i=_i9.length-1,_O3;for(;i>-1;i--){_O3=_i9[i];if(_O3[_00]!==undefined){return _O3[_00];}}
return _I0;},extEval:function(_t1){if(_t1.indexOf("function(")===0){eval('_t1 = '+_t1);}
return _t1;},initStraight:function(_I0,_b){if(_b instanceof Array){return HClass.extend().nu.apply(_I0,_b);}
else{return(new _I0(_b));}},renderNode:function(_V,_d){var
_Q3=['type','args','version','class','rect','bind','extend','options','subviews','define'],_00,_I0,_40,_h9=false,_1,_14,_13,_L5,_t2,_3,_V3,_73,_93,_p1,_W3,_R1,_t0,i,_pd=null;if(!_V['class']){for(i in _V){if(_Q3.indexOf(i)===-1){_00=i;_40=_V;_V=_V[i];break;}}
_h9=(!(_V instanceof Object)||(_V instanceof Array));}
else{_00=_V['class'];}
_I0=this.findInScope(_00);if(_h9){return this.initStraight(_I0,_V);}
else if(_V['args']!==undefined){return this.initStraight(_I0,_V['args']);}
else if(_40&&_40['args']!==undefined){return this.initStraight(_I0,_40['args']);}
_1=_V['rect'];_14=(_1!==undefined)&&(_1 instanceof Array||typeof _1==='string');if(!_14&&_40){_14=_40['rect']!==undefined;_1=_14?_40['rect']:null;}
_13=_V['subviews']!==undefined;_L5=_13?_V['subviews']:null;if(!_13&&_40){_13=_40['subviews']!==undefined;_L5=_13?_40['subviews']:null;}
_t2=_V['options']!==undefined;_3=_t2?_V['options']:null;if(!_t2&&_40){_t2=_40['options']!==undefined;_3=_t2?_40['options']:null;}
_V3=_V['extend']!==undefined;_73=_V3?_V['extend']:null;if(!_V3&&_40){_V3=_40['extend']!==undefined;_73=_V3?_40['extend']:null;}
_93=_V['bind']!==undefined;_p1=_93?_V['bind']:null;if(!_93&&_40){_93=_40['bind']!==undefined;_p1=_93?_40['bind']:null;}
_W3=_V['define']!==undefined;_u5=_W3?_V['define']:null;if(!_W3&&_40){_W3=_40['define']!==undefined;_u5=_W3?_40['define']:null;}
_t0=_d;this.scopeDepth++;this.scopes.push({});try{if(_W3){if(_u5 instanceof Array){for(i=0;i<_u5.length;i++){this.defineInScope(_u5[i]);}}
else{console.log('renderNode definitions not Array, definitions:',_u5);}}
if(_I0){if(_V3){var _f9={},_l,_t1;for(_l in _73){_t1=_73[_l];if(typeof _t1==='string'){try{_t1=this.extEval(_t1);}
catch(e){console.log('renderNode ext eval error:',e,', name:',_l,', block:',_t1);}}
_f9[_l]=_t1;}
_I0=_I0.extend(_f9);}
if(_t2){if(_93){if(_p1 instanceof HValue){_3.valueObj=_p1;}
else if(COMM.Values.values[_p1]!==undefined){_3.valueObj=COMM.Values.values[_p1];}
else{console.log('renderNode warning; No such valueId:'+_p1);}}
else{if(_3['valueObjId']!==undefined){_3.valueObj=COMM.Values.values[_3['valueObjId']];}}}
if(!_14&&_t2){_t0=_I0.nu(_3);}
else if(_14){_t0=_I0.nu(_1,_d,_3);}
if(!_t2){if(_93){if(_p1 instanceof HValue){_p1.bind(_t0);}
else if(COMM.Values.values[_p1]!==undefined){COMM.Values.values[_p1].bind(_t0);}
else{console.log('renderNode warning; No such valueId:'+_p1);}}}}
else if(!(!_I0&&_13)){console.log('renderNode warning; No such class: '+_00+', node: ',_V);}}
catch(e){console.log('renderNode error:',e.toString()+', rect:',_1,', class:',_V['class'],', options:',_3,', e:',e);}
if(_13){for(i=0;i<_L5.length;i++){_pd=this.renderNode(_L5[i],_t0);}}
this.scopes.pop();this.scopeDepth--;return _t0;}});var
JSONRenderer=COMM.JSONRenderer;var
HValueMatrixInterface={constructor:function(_1,_d,_3){this.base(_1,_d,_3);this.setValueMatrix();},setValueMatrix:function(){if(this.parent['valueMatrix']===undefined){this.parent.valueMatrix=HValueMatrix.nu();}
this.valueMatrixIndex=this.parent.valueMatrix.addControl(this);},click:function(){if(this.parent.valueMatrix instanceof HValueMatrix){this.parent.valueMatrix.setValue(this.valueMatrixIndex);}},die:function(){if(this['parent']){if(this.parent['valueMatrix']){this.parent.valueMatrix.release(this);}}
this.base();}};var
HValueMatrix=HClass.extend({constructor:function(){this.ctrls=[];this.value=-1;this.valueObj=new HDummyValue();},setValueObj:function(_12){this.valueObj=_12;this.setValue(_12.value);},setValue:function(_z){if(_z!==this.value){if(this.value!==-1){if(this.ctrls[this.value]){this.ctrls[this.value].setValue(false);}}
this.value=_z;if(_z!==-1){if(_z<this.ctrls.length){this.ctrls[_z].setValue(true);}}
this.valueObj.set(_z);}},addControl:function(_7){this.ctrls.push(_7);var _e9=this.ctrls.length-1;if(_7.value){this.setValue(_e9);}
return _e9;},release:function(_7){var _z=this.ctrls.indexOf(_7);if(_z!==-1){this.ctrls.splice(_z,1);if(_z===this.value){this.setValue(-1);}}}});var
HPoint=HClass.extend({constructor:function(){this.type='[HPoint]';var _b=arguments;if(_b.length===0){this._x5();}
else if(_b.length===2){this._d9(_b[0],_b[1]);}
else if(_b.length===1){this._y5(_b[0]);}
else{throw"Invalid number of arguments.";}},_x5:function(){this.x=null;this.y=null;},_d9:function(x,y){this.x=x;this.y=y;},_y5:function(_o){this.x=_o.x;this.y=_o.y;},set:function(){var _b=arguments;if(_b.length===0){this._x5();}
else if(_b.length===2){this._d9(_b[0],_b[1]);}
else if(_b.length===1){this._y5(_b[0]);}
else{throw"Invalid number of arguments.";}},constrainTo:function(_1){if(this.x<_1.left){this.x=_1.left;}
if(this.y<_1.top){this.y=_1.top;}
if(this.x>_1.right){this.x=_1.right;}
if(this.y>_1.bottom){this.y=_1.bottom;}},add:function(_o){_b=arguments;if((_b.length===1)&&(_b[0].type===this.type)){_o=_b[0];return new HPoint((this.x+_o.x),(this.y+_o.y));}
else if(_b.length===2){return new HPoint((this.x+_b[0]),(this.y+_b[1]));}else{return new HPoint(0,0);}},subtract:function(){_b=arguments;if((_b.length===1)&&(_b[0].type===this.type)){_o=_b[0];return new HPoint(this.x-_o.x,this.y-_o.y);}
else if(_b.length===2){return new HPoint(this.x-_b[0],this.y-_b[1]);}else{return new HPoint(0,0);}},equals:function(_o){return(this.x===_o.x&&this.y===_o.y);}});var
HRect=HClass.extend({constructor:function(){this.viewIds=[];var _b=arguments;if(_b.length===0){this._x5();}else if(_b.length===4){this._e8(_b[0],_b[1],_b[2],_b[3]);}
else if(_b.length===2){this._y5(_b[0],_b[1]);}
else if(_b.length===1){if(_b[0]instanceof Array){this._e8(_b[0][0],_b[0][1],_b[0][2],_b[0][3]);}
else{this._c9(_b[0]);}}
else{throw"Invalid number of arguments.";}
this.updateSecondaryValues();},_x5:function(){this.top=0;this.left=0;this.bottom=-1;this.right=-1;},_e8:function(_t,_N,_70,_20){this.top=_N;this.left=_t;this.bottom=_20;this.right=_70;},_y5:function(_b9,_99){this.top=_b9.y;this.left=_b9.x;this.bottom=_99.y;this.right=_99.x;},_c9:function(_1){this.top=_1.top;this.left=_1.left;this.bottom=_1.bottom;this.right=_1.right;},_Y7:function(){var
_0=this,_89=_0.viewIds,_V0,_s2,_94,_R3,_e,_c,i=0;for(;i<_89.length;i++){_e=_89[i];_c=HSystem.views[_e];if(_c.flexRight||_c.flexBottom){ELEM.flushLoop();if(!_c.parent){_0.updateSecondaryValues();return;}
_V0=_c.parent.elemId;_s2=_c.parentSize();_94=_s2[0];if(_c.flexRight){_0.right=_94-_c.flexRightOffset;}
if(!_c.flexLeft){_0.left=_0.right-_0.width;}
_R3=_s2[1];if(_c.flexBottom){_0.bottom=_R3-_c.flexBottomOffset-_0.top;}
if(!_c.flexTop){_0.top=_0.bottom-_0.height;}
if(_0.bottom-_0.top<0){_0.bottom=_0.top;}
if(_0.right-_0.left<0){_0.right=_0.left;}
_0.updateSecondaryValues();}}},updateSecondaryValues:function(){this.isValid=(this.right>=this.left&&this.bottom>=this.top);this.leftTop=new HPoint(this.left,this.top);this.leftBottom=new HPoint(this.left,this.bottom);this.rightTop=new HPoint(this.right,this.top);this.rightBottom=new HPoint(this.right,this.bottom);this.width=(this.right-this.left);this.height=(this.bottom-this.top);},set:function(){var _b=arguments;if(_b.length===0){this._x5();}else if(_b.length===4){this._e8(_b[0],_b[1],_b[2],_b[3]);}
else if(_b.length===2){this._y5(_b[0],_b[1]);}
else if(_b.length===1){this._c9(_b[0]);}
else{throw"Invalid number of arguments.";}
this.updateSecondaryValues();},setLeft:function(_t){this.left=_t;this.updateSecondaryValues();},setRight:function(_70){this.right=_70;this.updateSecondaryValues();},setTop:function(_N){this.top=_N;this.updateSecondaryValues();},setBottom:function(_20){this.bottom=_20;this.updateSecondaryValues();},setLeftTop:function(_o){this.left=_o.x;this.top=_o.y;this.updateSecondaryValues();},setLeftBottom:function(_o){this.left=_o.x;this.bottom=_o.y;this.updateSecondaryValues();},setRightTop:function(_o){this.right=_o.x;this.top=_o.y;this.updateSecondaryValues();},setRightBottom:function(_o){this.right=_o.x;this.bottom=_o.y;this.updateSecondaryValues();},setWidth:function(_width){this.right=this.left+_width;this.updateSecondaryValues();},setHeight:function(_height){this.bottom=this.top+_height;this.updateSecondaryValues();},setSize:function(){var _b=arguments;if(_b.length===2){_width=_b[0];_height=_b[1];}
else if(_b.length===1){_width=_b.x;_height=_b.y;}
this.right=this.left+_width;this.bottom=this.top+_height;this.updateSecondaryValues();},intersects:function(_1,_U3,_g3){if(_U3!==undefined){_1=HRect.nu(_1);if(_g3===undefined){_g3=_U3;}
_1.insetBy(_U3,_g3);}
return(((_1.left>=this.left&&_1.left<=this.right)||(_1.right>=this.left&&_1.right<=this.right))&&((_1.top>=this.top&&_1.top<=this.bottom)||(_1.bottom>=this.top&&_1.bottom<=this.bottom)));},overlaps:function(_1,_Vd,_g3){return this.intersects(_1,_Vd,_g3);},contains:function(_a){if(_a instanceof HPoint){return this._1e(_a);}
else if(_a instanceof HRect){return this._de(_a);}
else{throw"Wrong argument type.";}},_1e:function(_o){return(_o.x>=this.left&&_o.x<=this.right&&_o.y>=this.top&&_o.y<=this.bottom);},_de:function(_1){return(_1.left>=this.left&&_1.right<=this.right&&_1.top>=this.top&&_1.bottom<=this.bottom);},insetBy:function(){var _b=arguments;if(_b.length===1){this._gd(_b[0]);}else if(_b.length===2){this._69(_b[0],_b[1]);}else{throw"Invalid number of arguments.";}
this.updateSecondaryValues();},_gd:function(_o){this._69(_o.x,_o.y);},_69:function(x,y){this.left+=x;this.top+=y;this.right-=x;this.bottom-=y;},offsetBy:function(){var _b=arguments;if(_b.length===1){this._zc(_b[0]);}else if(_b.length===2){this._59(_b[0],_b[1]);}else{throw"Invalid number of arguments.";}
this.updateSecondaryValues();},_zc:function(_o){this._59(_o.x,_o.y);},_59:function(x,y){this.left+=x;this.top+=y;this.right+=x;this.bottom+=y;},offsetTo:function(){var _b=arguments;if(_b.length===1){this._hd(_b[0]);}else if(_b.length===2){this._49(_b[0],_b[1]);}else{throw"Invalid number of arguments.";}
this.updateSecondaryValues();},_hd:function(_o){this._49(_o.x,_o.y);},_49:function(x,y){this.right+=x-this.left;this.left=x;this.bottom+=y-this.top;this.top=y;},equals:function(_1){return(this.left===_1.left&&this.top===_1.top&&this.right===_1.right&&this.bottom===_1.bottom);},intersection:function(_1){return new HRect(Math.max(this.left,_1.left),Math.max(this.top,_1.top),Math.min(this.right,_1.right),Math.min(this.bottom,_1.bottom));},union:function(_1){return new HRect(Math.min(this.left,_1.left),Math.min(this.top,_1.top),Math.max(this.right,_1.right),Math.max(this.bottom,_1.bottom));},valueObj:null,bind:function(_c){if(this.viewIds.indexOf(_c.viewId)===-1){this.viewIds.push(_c.viewId);}
this._Y7();},release:function(_c){var _39=this.viewIds.indexOf(_c.viewId);if(_39!==-1){this.viewIds.splice(_39,1);}},setValueObj:function(_12){this.valueObj=_12;},setValue:function(_2,_jd){if(this.valueObj){this.valueObj.set(_2);}
this.set(_2[0],_2[1],_2[2],_2[3]);var i=0,_e;for(;i<this.viewIds.length;i++){_e=this.viewIds[i];HSystem.views[_e].drawRect();}},toString:function(){return('[object Rect left='+this.left+' top='+this.top+' width='+this.width+' height='+this.height+' right='+this.right+' bottom='+this.bottom+']');}});var
HDefaultThemePath='/H/themes';var
HDefaultThemeName='default';var
HNoComponentCSS=[];var
HNoCommonCSS=[];var
HThemeHasIE6GifsInsteadOfPng=['default'];var
HThemeManager=HClass.extend({constructor:null,init:function(){this.themePath=HDefaultThemePath;this._u6={};this._v6={};this.currentTheme=HDefaultThemeName;},setThemePath:function(_M1){this.themePath=_M1;},_je:function(_g){console.log("ERROR: Template Not Found: '"+_g+"' ");},_Sd:function(_g){console.log("ERROR: Template Failure: '"+_g+"' ");},_Wc:function(_g){console.log("ERROR: Template Exception: '"+_g+"' ");},fetch:function(_g,_b2,_11,_d3){var _S8;if(!_b2){_b2='text/html; charset=UTF-8';}
if(_d3){_S8=function(resp){_11(resp.X.responseText);};}
else{var _qc;_S8=function(resp){_qc=resp.X.responseText;};}
COMM.request(_g,{onSuccess:_S8,on404:function(resp){HThemeManager._je(resp.url);},onFailure:function(resp){HThemeManager._Sd(resp.url);},onException:function(resp){HThemeManager._Wc(resp.url);},method:'GET',async:_d3});if(!_d3){return _qc;}},getThemeGfxPath:function(){var _m=this._O5[0],_O=this._O5[1],_30=this._O5[2],_P2=this._P2(_m,_O,_30);return this._J1(_P2,'gfx');},getCssFilePath:function(_h1){var _m=this._O5[0];if((HThemeHasIE6GifsInsteadOfPng.indexOf(_m)!==-1)&&(BROWSER_TYPE.ie6||BROWSER_TYPE.symbian)){return"url('"+this._J1(this.getThemeGfxPath(),_h1.replace('.png','-ie6.gif'))+"')";}
else{return"url('"+this._J1(this.getThemeGfxPath(),_h1)+"')";}},loadCSS:function(_g){var _b2='text/css',_8d=function(_k2){if(!_k2||_k2===""){return;}
HThemeManager.useCSS(_k2);};this.fetch(_g,_b2,_8d,true);},useCSS:function(_k2){var _b2='text/css';_k2=this._8e(_k2);var _U,_Ud,_nc;if(BROWSER_TYPE.ie){_U=document.createStyleSheet();_U.cssText=_k2;}
else{_U=document.createElement("style");_U.type=_b2;_U.media="all";_nc=document.getElementsByTagName('head')[0];_nc.appendChild(_U);if(BROWSER_TYPE.safari){var _Vc=document.createTextNode(_k2);_U.appendChild(_Vc);}
else{_U.innerHTML=_k2;}}},_Tc:function(_f){if(_f[_f.length-1]!=='/'){_f+='/';}
return _f;},_J1:function(_Pc,_Mc){return this._Tc(_Pc)+_Mc;},_P2:function(_m,_O,_30){var _M1=_30;if(_30===null){_M1=this.themePath;}
_M1=this._J1(_M1,_m);return _M1;},_36:function(_m,_O,_30){this._O5=[_m,_O,_30];var _Kc=this._P2(_m,_O,_30),_Ic=this._J1('css',_O+'.css'),_36=this._J1(_Kc,_Ic);return _36;},_E8:function(_m,_O,_30){var _Cc=this._P2(_m,_O,_30),_Bc=this._J1('html',_O+'.html'),_Ac=this._J1(_Cc,_Bc);return _Ac;},loadMarkup:function(_m,_O,_30){if(!this._u6[_m]){this._u6[_m]={};}
var _i0=this._u6[_m][_O];if(null===_i0||undefined===_i0){var _E8=this._E8(_m,_O,_30),_50=this.fetch(_E8,null,null,false);return this.setMarkup(_m,_O,_50);}
return _i0;},setMarkup:function(_m,_O,_50){if(null===_50||undefined===_50){_50="";}
this._u6[_m][_O]=_50;return _50;},getMarkup:function(_m,_O,_30){if(!this._v6[_m]){this._v6[_m]={};if(HNoCommonCSS.indexOf(_m)===-1){var _Ed=this._36(_m,'common',_30,null);this.loadCSS(_Ed);}}
if(HNoComponentCSS.indexOf(_m)===-1){if(!this._v6[_m][_O]){var _md=this._36(_m,_O,_30);this._v6[_m][_O]=true;this.loadCSS(_md);}}
return this.loadMarkup(_m,_O,_30);},_Z7:function(_m,_O,_30){var _P2=this._P2(_m,_O,_30),_g=this._J1(_P2,'gfx');return _g;},_re:function(_m,_O,_30,_h1){if((HThemeHasIE6GifsInsteadOfPng.indexOf(_m)!==-1)&&BROWSER_TYPE.ie6){return this._J1(this._Z7(_m,_O,_30),_h1.replace('.png','-ie6.gif'));}
return this._J1(this._Z7(_m,_O,_30),_h1);},getThemeGfxFile:function(_h1){return this.getThemeGfxPath()+_h1;},setTheme:function(_gc){this.currentTheme=_gc;},restoreDefaultTheme:function(){this.setTheme(HDefaultThemeName);},_c3:new RegExp(/#\{([^\}]*)\}/),_8e:function(_H5){while(this._c3.test(_H5)){_H5=_H5.replace(this._c3,eval(RegExp.$1));}
return _H5;},_i6:[],_fc:false,_9f:function(_dc){if(this._fc){_dc();}
else{this._i6.push(_dc);}},_96:function(){var
_0=this,i=0;_0._fc=true;for(;i<_0._i6.length;i++){_0._i6[i]();}
_0._i6=[];}});var
HMarkupView=HClass.extend({bindMarkupVariables:function(){var _50=this.markup;while(HMarkupView._cc.test(_50)){_50=_50.replace(HMarkupView._cc,this.evalMarkupVariable(RegExp.$1,true));}
while(HMarkupView._c3.test(_50)){_50=_50.replace(HMarkupView._c3,this.evalMarkupVariable(RegExp.$1));}
this.markup=_50;return this;},evalMarkupVariable:function(_a8,_n6){try{var _ID=this.elemId.toString(),_WIDTH=this.rect.width,_HEIGHT=this.rect.height,_ac=eval(_a8);if(_n6){return'';}
if(_ac===undefined){return'';}
else{return _ac;}}
catch(e){console.log("Warning, the markup string '"+_a8+"' failed evaluation. Reason:"+e+' '+e.description);return'';}},toggleCSSClass:function(_a2,_q6,_9c){if(_a2){if(_9c){ELEM.addClassName(_a2,_q6);}
else{ELEM.removeClassName(_a2,_q6);}}
return this;}},{_c3:new RegExp(/#\{([^\}]*)\}/),_cc:new RegExp(/\$\{([^\}]*)\}/)});var
HMorphAnimation=HClass.extend({animateTo:function(_a,_k0,_l2){if(!this.drawn){return this;}
if(_a instanceof HPoint){var _1=new HRect(_a,_a);_1.setSize(this.rect.width,this.rect.height);this._c6(_1,_k0);}
else if(_a instanceof HRect){this._c6(_a,_k0);}
else{this._c6(_a,_k0);}
return this;},stopAnimation:function(_h6){if(this._l6){window.clearInterval(this._l6);this._l6=null;var _t=parseInt(this.style('left'),10),_N=parseInt(this.style('top'),10),_width=parseInt(this.style('width'),10),_height=parseInt(this.style('height'),10);this.rect.set(_t,_N,_t+_width,_N+_height);this.drawRect();if(this._3c){this.onAnimationEnd();}
else{this.onAnimationCancel();}}
return this;},_Nc:function(_A,_h6,_W,_k0){return function(){if(!_A){return;}
var _1=_h6;_A._Qc({startTime:_W,duration:_k0,transition:function(t,b,c,d){return c*t/d+b;},props:[{prop:'left',from:_A.rect.left,to:_1.left,unit:'px'},{prop:'top',from:_A.rect.top,to:_1.top,unit:'px'},{prop:'width',from:_A.rect.width,to:_1.width,unit:'px'},{prop:'height',from:_A.rect.height,to:_1.height,unit:'px'}]});};},_c6:function(_h6,_k0,_l2){if(null===_k0||undefined===_k0){_k0=500;}
if(null===_l2||undefined===_l2||_l2<1){_l2=50;}
if(!this._l6){this._3c=false;this.onAnimationStart();var _W=new Date().getTime();this._l6=window.setInterval(this._Nc(this,_h6,_W,_k0),Math.round(1000/_l2));}
return this;},_Qc:function(_a){var
_E0=new Date().getTime(),i;if(_E0<_a.startTime+_a.duration){var _Sc=_E0-_a.startTime;for(i=0;i<_a.props.length;i++){var
_74=_a.props[i].from,_o5=_a.props[i].to;if(_74!==_o5){var
_6=_a.props[i].prop,_4c=_a.transition(_Sc,_74,(_o5-_74),_a.duration),_5c=_a.props[i].unit;if(_5c){_4c+=_5c;}
ELEM.setStyle(this.elemId,_6,_4c);}}}
else{for(i=0;i<_a.props.length;i++){ELEM.setStyle(this.elemId,_a.props[i].prop,_a.props[i].to+_a.props[i].unit);}
this._3c=true;this.stopAnimation();}
return this;},onAnimationStart:function(){},onAnimationEnd:function(){},onAnimationCancel:function(){}});var
HViewDefaults=HClass.extend({label:"",visible:true});var
HView=HClass.extend({themePath:null,isAbsolute:true,displayMode:'block',label:null,refreshOnLabelChange:true,escapeLabelHTML:false,flexRight:false,flexLeft:true,flexTop:true,flexBottom:false,flexRightOffset:0,flexBottomOffset:0,drawn:false,theme:null,preserveTheme:false,optimizeWidthOnRefresh:true,parent:null,parents:null,viewId:null,appId:null,app:null,views:null,viewsZOrder:null,isHidden:false,rect:null,options:null,viewDefaults:HViewDefaults,constructor:function(_1,_d,_3){if(!_3){_3={};}
if(!this.isinherited){_3=(this.viewDefaults.extend(_3)).nu(this);}
this.options=_3;this.label=_3.label;if(_3.theme){this.theme=_3.theme;this.preserveTheme=true;}
else if(!this.theme){this.theme=HThemeManager.currentTheme;this.preserveTheme=false;}
else{this.preserveTheme=true;}
if(_3.visible===false){this.isHidden=true;}
this.parent=_d;this.viewId=this.parent.addView(this);this.appId=this.parent.appId;this.app=HSystem.apps[this.appId];this.views=[];this.viewsZOrder=[];this._6c();this.setRect(_1);this._7c=_1.left;this._8c=_1.top;this._Z2=[];if(!this.isinherited){this.draw();}},setFlexRight:function(_8,_B){if(_8===undefined){_8=true;}
this.flexRight=_8;if(_B===undefined){_B=0;}
this.flexRightOffset=_B;return this;},setFlexLeft:function(_8,_B){if(_8===undefined){_8=true;}
this.flexLeft=_8;if((_B||_B===0)&&this.rect){this.rect.setLeft(_B);}
return this;},setFlexTop:function(_8,_B){if(_8===undefined){_8=true;}
this.flexTop=_8;if((_B||_B===0)&&this.rect){this.rect.setTop(_B);}
return this;},setFlexBottom:function(_8,_B){if(_8===undefined){_8=true;}
this.flexBottom=_8;if(_B===undefined){_B=0;}
this.flexBottomOffset=_B;return this;},setAbsolute:function(_8){if(_8===undefined){_8=true;}
this.isAbsolute=_8;return this;},setRelative:function(_8){if(_8===undefined){_8=true;}
this.isAbsolute=(!_8);return this;},getThemeGfxPath:function(){var _m;if(this.preserveTheme){_m=this.theme;}else{_m=HThemeManager.currentTheme;}
return HThemeManager._Z7(_m,this.componentName,this.themePath);},getThemeGfxFile:function(_h1){if(this.preserveTheme){_m=this.theme;}else{_m=HThemeManager.currentTheme;}
return HThemeManager._re(_m,this.componentName,this.themePath,_h1);},_B6:function(_V0){this.elemId=ELEM.make(_V0,'div');},_bc:function(_6e){var _m6='overflow:hidden;visibility:hidden;';if(this.isAbsolute){_m6+='position:absolute;';}else{_m6+='position:relative;';}
_m6+=_6e;ELEM.setCSS(this.elemId,_m6);},_I5:function(){var _d=this.parent;return((_d.elemId===undefined)?0:((_d._ec===undefined)?0:_d._ec()));},_ec:function(){if(this.markupElemIds&&this.markupElemIds.subview!==undefined){return this.markupElemIds.subview;}
else if(this.elemId!==undefined){return this.elemId;}
return 0;},_6c:function(){if(!this.elemId){this._B6(this._I5());this._bc('');if(this.preserveTheme){ELEM.addClassName(this.elemId,this.theme);}
else{ELEM.addClassName(this.elemId,HThemeManager.currentTheme);}}},drawRect:function(){if(!this.rect.isValid){console.log('invalid rect:',this.rect);}
if(!this.parent){console.log('no parent:',ELEM.get(this.elemId));}
if(this.parent&&this.rect.isValid){var
i=0,_0=this,_9=_0.elemId,_1=_0.rect,_83='auto',_t=_0.flexLeft?_1.left:_83,_N=_0.flexTop?_1.top:_83,_70=_0.flexRight?_0.flexRightOffset:_83,_20=_0.flexBottom?_0.flexBottomOffset:_83,_width=(_0.flexLeft&&_0.flexRight)?_83:_1.width,_height=(_0.flexTop&&_0.flexBottom)?_83:_1.height,_H=[['left',_t],['top',_N],['right',_70],['bottom',_20],['width',_width],['height',_height],['display',_0.displayMode]],_6,_2;if(!_0.isHidden){_H.push(['visibility','inherit']);}
for(;i<_H.length;i++){_6=_H[i][0];_2=_H[i][1];if(i<6&&_2!==_83){_2+='px';}
ELEM.setStyle(_9,_6,_2,true);}
(this.drawn===false)&&_0._19();if(_0._7c!==_1.left||_0._8c!==_1.top){_0.invalidatePositionCache();_0._7c=_1.left;_0._8c=_1.top;}
_0.drawn=true;}
return this;},_19:function(){HSystem.updateZIndexOfChildren(this.viewId);},_53:function(){HSystem.updateZIndexOfChildren(this.parent.viewId);},draw:function(){var _e6=this.drawn;this.drawRect();if(!_e6){this.firstDraw();if(this['componentName']!==undefined){this.drawMarkup();}
this.drawSubviews();if(this.options.style){this.setStyles(this.options.style);}
if(this.options.html){this.setHTML(this.options.html);}
if(!this.isHidden){this.show();}}
this.refresh();return this;},firstDraw:function(){},drawSubviews:function(){},_lc:function(){var _m,_50;if(this.preserveTheme){_m=this.theme;}
else{_m=HThemeManager.currentTheme;}
_50=HThemeManager.getMarkup(_m,this.componentName,this.themePath);if(_50===false){console.log('Warning: Markup template for "'+this.componentName+'" using theme "'+_m+'" not loaded.');}
this.markup=_50;return(_50!==false);},markupElemNames:['bg','label','state','control','value','subview'],drawMarkup:function(){var _af=this._lc();this.bindMarkupVariables();ELEM.setHTML(this.elemId,this.markup);this.markupElemIds={};for(var i=0;i<this.markupElemNames.length;i++){var _60=this.markupElemNames[i],_hc=_60+this.elemId,_cd=' id="'+_hc+'"';if(this.markup.indexOf(_cd)!==-1){this.markupElemIds[_60]=this.bindDomElement(_hc);}}
return this;},setHTML:function(_j1){ELEM.setHTML(this.elemId,_j1);return this;},setText:function(_ic){return this.setHTML(this.escapeHTML(_ic));},escapeHTML:function(_j1){if(typeof _j1!=='string'){return _j1.toString();}
for(var i=0,_jc,_kc,_T7=this._ld;i<_T7.length;i++){_jc=_T7[i][0];_kc=_T7[i][1];_j1=_j1.replace(_jc,_kc);}
return _j1;},_ld:[[new RegExp(/&/gmi),'&amp;'],[new RegExp(/>/gmi),'&gt;'],[new RegExp(/</gmi),'&lt;'],[new RegExp(/\n/gmi),'<br>']],refresh:function(){if(this.drawn){this.drawRect();}
if(this.optimizeWidthOnRefresh){this.optimizeWidth();}
if(this.refreshOnLabelChange){this.refreshLabel();}
return this;},parentSize:function(){if(!this.parent){return[0,0];}
if(this.parent.elemId===0){var
_q0=ELEM.windowSize(),_G8=ELEM.getScrollSize(0);if(_G8[0]>_q0[0]||_G8[1]>_q0[1]){_G8=_q0;}
return[_q0[0],_q0[1]];}
else{var
_1=this.parent.rect,_width,_height,_V0=(this.parent.markupElemIds&&this.parent.markupElemIds.subview)?this.parent.markupElemIds.subview:this.parent.elemId;if(this.parent.flexLeft&&this.parent.flexRight){_width=parseInt(ELEM.getStyle(_V0,'width',true),10);}
else{_width=_1.width;}
if(this.parent.flexBottom&&this.parent.flexTop){_height=parseInt(ELEM.getStyle(_V0,'height',true),10);}
else{_height=_1.height;}
return[_width,_height];}},maxRect:function(){var _s2=this.parentSize();return[0,0,_s2[0],_s2[1]];},minWidth:0,setMinWidth:function(_qd){this.minWidth=_qd;ELEM.setStyle(this.elemId,'min-width',this.minWidth+'px',true);},minHeight:0,setMinHeight:function(_vd){this.minHeight=_vd;ELEM.setStyle(this.elemId,'min-height',this.minHeight+'px',true);},setRect:function(_1){if(this.rect){this.rect.release(this);}
if(typeof _1==='string'){_1=this[_1]();}
if(_1 instanceof Array){var _G5=_1.length,_U8='HView.setRect: If the HRect instance is replaced by an array, ';if((_G5===4)||(_G5===6)){var
_s1=_1[0],_J0=_1[1],_width=_1[2],_height=_1[3],_86=((_G5===6)?_1[4]:null),_76=((_G5===6)?_1[5]:null),_24=(typeof _s1==='number'),_K3=(typeof _J0==='number'),_a3=(typeof _86==='number'),_b3=(typeof _76==='number'),_16=(typeof _width==='number'),_06=(typeof _height==='number'),_70,_20;if(_G5===6){var
_s2=this.parentSize(),_94=_s2[0],_R3=_s2[1];}
if((!_24&&!_a3)||(!_K3&&!_b3)){console.log(_U8+'(left or top) and (top or bottom) must be specified.');}
else if((!_16&&!(_24&&_a3))||(!_06&&!(_K3&&_b3))){console.log(_U8+'the (height or width) must be specified unless both (left and top) or (top and bottom) are specified.');}
this.setFlexLeft(_24,_s1);this.setFlexTop(_K3,_J0);this.setFlexRight(_a3,_86);this.setFlexBottom(_b3,_76);if(_24&&_16&&!_a3){_70=_s1+_width;}
else if(!_24&&_16&&_a3){_70=_94-_a3;_s1=_70-_width;}
else if(_24&&_a3){_70=_94-_86;_16&&this.setMinWidth(_width);_70=_94-_86;}
if(_K3&&_06&&!_b3){_20=_J0+_height;}
else if(!_K3&&_06&&_b3){_20=_R3-_b3;_J0=_20-_height;}
else if(_K3&&_b3){_20=_R3-_76;_06&&this.setMinHeight(_height);_20=_R3-_76;}
if(_s1>_70){_70=_s1;}
if(_J0>_20){_20=_J0;}
this.rect=HRect.nu(_s1,_J0,_70,_20);if(!this.rect.isValid){console.log('---------------------------------------------');console.log('invalid rect:',this.rect.left,',',this.rect.top,',',this.rect.width,',',this.rect.height,',',this.rect.right,',',this.rect.bottom);console.log(' parent size:',this.parentSize());console.log('  rect array:',_1);console.log('---------------------------------------------');}}
else{console.log(_U8+'the length has to be either 4 or 6.');}}
else{this.rect=_1;}
this.rect.bind(this);this.refresh();return this;},setStyle:function(_l,_2,_T1){if(this.elemId){ELEM.setStyle(this.elemId,_l,_2,_T1);}
return this;},setStyles:function(_H){var _mc=COMM.Values.type(_H);if(_mc==='a'){this.setStylesArray(_H);}
else if(_mc==='h'){this.setStylesHash(_H);}
else{console.log('HView#setStyles: Invalid data, expected array or hash; type: '+h+', data:',_H);}
return this;},setStylesArray:function(_H){var
_l8,_T3,_F5,i=0;for(;i<_H.length;i++){_l8=_H[i];_T3=_l8[0];_F5=_l8[1];this.setStyle(_T3,_F5);}
return this;},setStylesHash:function(_H){var
_T3,_F5;for(_T3 in _H){_F5=_H[_T3];this.setStyle(_T3,_F5);}
return this;},style:function(_l){if(this.elemId){return ELEM.getStyle(this.elemId,_l);}
return'';},setStyleOfPart:function(_60,_l,_2,_T1){if(!this['markupElemIds']){console.log('Warning, setStyleOfPart: no markupElemIds');}
else if(this.markupElemIds[_60]===undefined){console.log('Warning, setStyleOfPart: partName "'+_60+'" does not exist for viewId '+this.viewId+'.');}
else{ELEM.setStyle(this.markupElemIds[_60],_l,_2,_T1);}
return this;},styleOfPart:function(_60,_l){if(this.markupElemIds[_60]===undefined){console.log('Warning, styleOfPart: partName "'+_60+'" does not exist for viewId '+this.viewId+'.');return'';}
return ELEM.getStyle(this.markupElemIds[_60],_l);},setMarkupOfPart:function(_60,_2){if(this.markupElemIds[_60]===undefined){console.log('Warning, setMarkupOfPart: partName "'+_60+'" does not exist for viewId '+this.viewId+'.');}
else{ELEM.setHTML(this.markupElemIds[_60],_2);}
return this;},markupOfPart:function(_60){if(this.markupElemIds[_60]===undefined){console.log('Warning, markupOfPart: partName "'+_60+'" does not exist for viewId '+this.viewId+'.');return'';}
return ELEM.getHTML(this.markupElemIds[_60]);},hide:function(){ELEM.setStyle(this.elemId,'visibility','hidden',true);this.isHidden=true;return this;},show:function(){ELEM.setStyle(this.elemId,'display',this.displayMode,true);ELEM.setStyle(this.elemId,'visibility','inherit',true);this.isHidden=false;return this;},toggle:function(){if(this.isHidden){this.show();}else{this.hide();}
return this;},remove:function(){if(this.parent){var _i8=this.parent.viewsZOrder.indexOf(this.viewId),_f8=this.parent.views.indexOf(this.viewId);this.parent.views.splice(_f8,1);HSystem.delView(this.viewId);this.parent.viewsZOrder.splice(_i8,1);var _E5=HSystem._S1.indexOf(this.viewId);if(_E5!==-1){HSystem._S1.splice(_E5,1);}
this._53();this.parent=null;this.parents=[];}
return this;},die:function(){this.hide();this.drawn=false;this.stopAnimation();var _oc,i;if(!this.views){console.log('HView#die: no subviews for component name: ',this.componentName,', self:',this);}
while(this.views.length!==0){_oc=this.views[0];this.destroyView(_oc);}
this.remove();if(this._Z2){for(i=0;i<this._Z2.length;i++){ELEM.del(this._Z2.pop());}}
ELEM.del(this.elemId);this.rect=null;var _0=this;for(i in _0){_0[i]=null;delete _0[i];}},onIdle:function(){for(var i=0;i<this.views.length;i++){HSystem.views[this.views[i]].onIdle();}},buildParents:function(_e){var _c=HSystem.views[_e];_c.parent=this;_c.parents=[];for(var _b8=0;_b8<this.parents.length;_b8++){_c.parents.push(this.parents[_b8]);}
_c.parents.push(this);},addView:function(_c){var _e=HSystem.addView(_c);this.views.push(_e);this.buildParents(_e);this.viewsZOrder.push(_e);return _e;},removeView:function(_e){this.app.removeView(_e);return this;},destroyView:function(_e){HSystem.views[_e].die();return this;},bounds:function(){var _pc=new HRect(this.rect);_pc.offsetTo(0,0);return _pc;},resizeBy:function(_X8,_D5){var _1=this.rect;_1.right+=_X8;_1.bottom+=_D5;_1.updateSecondaryValues();this.drawRect();return this;},resizeTo:function(_width,_height){var _1=this.rect;_1.right=_1.left+_width;_1.bottom=_1.top+_height;_1.updateSecondaryValues();this.drawRect();return this;},offsetTo:function(){this.rect.offsetTo.apply(this.rect,arguments);this.drawRect();return this;},moveTo:function(){this.offsetTo.apply(this,arguments);return this;},offsetBy:function(_X8,_D5){this.rect.offsetBy(_X8,_D5);this.drawRect();return this;},moveBy:function(){this.offsetBy.apply(this,arguments);return this;},bringToFront:function(){if(this.parent){var _z=this.zIndex();this.parent.viewsZOrder.splice(_z,1);this.parent.viewsZOrder.push(this.viewId);this._53();}
return this;},bringToFrontOf:function(_c){if(this.parent.viewId===_c.parent.viewId){this.parent.viewsZOrder.splice(this.zIndex(),1);this.parent.viewsZOrder.splice(_c.zIndex()+1,0,this.viewId);this._53();}
return this;},sendToBackOf:function(_c){if(this.parent.viewId===_c.parent.viewId){this.parent.viewsZOrder.splice(this.zIndex(),1);this.parent.viewsZOrder.splice(_c.zIndex(),0,this.viewId);this._53();}
return this;},sendBackward:function(){var _z=this.zIndex();if(_z!==0){this.parent.viewsZOrder.splice(_z,1);this.parent.viewsZOrder.splice(_z-1,0,this.viewId);this._53();}
return this;},bringForward:function(){var _z=this.zIndex();if(_z!==this.parent.viewsZOrder.length-1){this.parent.viewsZOrder.splice(_z,1);this.parent.viewsZOrder.splice(_z+1,0,this.viewId);this._53();}
return this;},sendToBack:function(){if(this.parent){var _z=this.zIndex();this.parent.viewsZOrder.splice(_z,1);this.parent.viewsZOrder.splice(0,0,this.viewId);this._53();}
return this;},zIndex:function(){if(!this.parent){return-1;}
return this.parent.viewsZOrder.indexOf(this.viewId);},stringSize:function(_K2,_h0,_9,_rc,_g2){if(_h0||_h0===0){_K2=_K2.substring(0,_h0);}
if(!_9&&_9!==0){_9=0;}
if(!_g2){_g2='';}
if(!_rc){_g2+='white-space:nowrap;';}
var _K5=ELEM.make(_9,'span');ELEM.setCSS(_K5,"visibility:hidden;"+_g2);ELEM.setHTML(_K5,_K2);var _C5=ELEM.getSize(_K5);ELEM.del(_K5);return[_C5[0]+_C5[0]%2,_C5[1]+_C5[1]%2];},stringWidth:function(_K2,_h0,_9,_g2){return this.stringSize(_K2,_h0,_9,false,_g2)[0];},stringHeight:function(_K2,_h0,_9,_g2){return this.stringSize(_K2,_h0,_9,true,_g2)[1];},pageX:function(){return ELEM._o4(this.elemId);},pageY:function(){return ELEM._p4(this.elemId);},setLabel:function(_h){if(this.escapeLabelHTML){_h=this.escapeHTML(_h);}
var _0=this,_ce=(_h!==_0.label);if(_ce){_0.label=_h;_0.options.label=_h;_0.refresh();}
return this;},refreshLabel:function(){if(this.markupElemIds){if(this.markupElemIds['label']){ELEM.setHTML(this.markupElemIds.label,this.label);}}
return this;},pageLocation:function(){return new HPoint(this.pageX(),this.pageY());},optimizeWidth:function(){},invalidatePositionCache:function(){for(var i=0;i<this.views.length;i++){HSystem.views[this.views[i]]['invalidatePositionCache']&&HSystem.views[this.views[i]].invalidatePositionCache();}
return this;},bindDomElement:function(_sc){var _J8=ELEM.bindId(_sc);if(_J8){this._Z2.push(_J8);}
return _J8;},unbindDomElement:function(_a2){var _tc=this._Z2.indexOf(_a2);if(_tc>-1){ELEM.del(_a2);this._Z2.splice(_tc,1);}},getLocaleString:function(_y6,_g1,_W1){if(_W1===undefined){_W1='';}
var
_V1=HLocale.components[_y6],_6;if(_V1===undefined&&(typeof _y6==='string')){_V1=HLocale.components;_g1=_y6;_W1=_g1;}
if(typeof _g1==='string'){if(_g1.indexOf('.')>0){_g1=_g1.split('.');}
else{_g1=[_g1];}}
if(_V1[_g1[0]]===undefined){_V1=HLocale;}
if(_V1[_g1[0]]===undefined){return _W1;}
for(_6 in _g1){if(typeof _V1[_6]==='object'){_V1=_V1[_6];}
else if(typeof _V1[_6]==='string'){return _V1[_6];}
else{return _W1;}}
return _W1;}});HView.implement(HMarkupView);HView.implement(HMorphAnimation);var
HEventResponder=HClass.extend({defaultEvents:{},setEvents:function(_c4){if(!this.events){this.events=HClass.extend({mouseMove:false,mouseDown:false,mouseUp:false,draggable:false,droppable:false,keyDown:false,keyUp:false,mouseWheel:false,textEnter:false,click:false,resize:false,doubleClick:false,contextMenu:false}).extend(this.defaultEvents).extend(_c4?_c4:{}).nu();}
this.events.ctrl=this;EVENT.reg(this,this.events);return this;},setEnabled:function(_8){var
_0=this,_9=this.elemId,_58=HSystem.views,i=0,_z0=_0.views,_c,_c8=_z0.length;for(;i<_c8;i++){_c=_58[_z0[i]];_c['setEnabled']&&_c.setEnabled(_8);}
if(_0.enabled===_8){return this;}
_0.enabled=_8;if(_8){EVENT.reg(_0,_0.events);}
else{EVENT.unreg(_0);}
_0.toggleCSSClass(_9,HControl.CSS_ENABLED,_8);_0.toggleCSSClass(_9,HControl.CSS_DISABLED,!_8);return this;},setMouseMove:function(_8){this.events.mouseMove=_8;this.setEvents();return this;},setClickable:function(_8){this.events.click=_8;this.setEvents();return this;},setMouseDown:function(_8){this.events.mouseDown=_8;this.setEvents();return this;},setDoubleClickable:function(_8){this.events.doubleClick=_8;this.setEvents();return this;},setContextMenu:function(_8){this.events.contextMenu=_8;this.setEvents();return this;},setMouseUp:function(_8){this.events.mouseUp=_8;this.setEvents();return this;},setMouseWheel:function(_8){this.events.mouseWheel=_8;this.setEvents();return this;},setDraggable:function(_8){this.events.draggable=_8;this.setEvents();return this;},setDroppable:function(_8){this.events.droppable=_8;this.setEvents();return this;},setKeyDown:function(_8){this.events.keyDown=_8;this.setEvents();return this;},setKeyUp:function(_8){this.events.keyUp=_8;this.setEvents();return this;},setTextEnter:function(_8){this.events.textEnter=_8;this.setEvents();return this;},setClick:function(_8){return this.setClickable(_8);},setDoubleClick:function(_8){return this.setDoubleClickable(_8);},focus:function(){},blur:function(){},gainedActiveStatus:function(_L8){var
_V8=this.parents,_B5=_V8.length-1;if((HSystem.windowFocusMode===1)&&(_B5>1)){for(;_B5>0;_B5--){if(_V8[_B5]['windowFocus']!==undefined){_V8[_B5].gainedActiveStatus();}}}},_r6:function(_L8){if(this.enabled){this.toggleCSSClass(this.elemId,HControl.CSS_ACTIVE,true);}
this.gainedActiveStatus(_L8);},lostActiveStatus:function(_Y0){},_s6:function(_Y0){if(this.enabled){this.toggleCSSClass(this.elemId,HControl.CSS_ACTIVE,false);}
this.lostActiveStatus(_Y0);},mouseMove:function(x,y){},click:function(x,y,_S){},doubleClick:function(x,y,_S){},contextMenu:function(x,y,_S){},mouseDown:function(x,y,_S){},mouseUp:function(x,y,_S){},mouseWheel:function(_90){},startDrag:function(x,y){},drag:function(x,y){this.doDrag(x,y);},doDrag:function(x,y){},endDrag:function(x,y){this.invalidatePositionCache();},drop:function(obj){this.onDrop(obj);},onDrop:function(obj){},startHover:function(obj){this.onHoverStart(obj);},onHoverStart:function(obj){},endHover:function(obj){this.onHoverEnd(obj);},onHoverEnd:function(obj){},keyDown:function(_10){},keyUp:function(_10){},textEnter:function(){},_Y3:function(e){if(!Event.element){return;}
var _A=Event.element(e);while(_A&&_A.ctrl===undefined){_A=_A.parentNode;}
if(!_A){return;}
var _0=_A.ctrl;EVENT.focus(_0);Event.stop(e);},_A5:function(e){if(!Event.element){return;}
var _A=Event.element(e);while(_A&&_A.ctrl===undefined){_A=_A.parentNode;}
if(!_A){return;}
var _0=_A.owner;EVENT.blur(_0);Event.stop(e);},invalidatePositionCache:function(){this.base();EVENT.coordCacheFlush(this.elemId);return this;}});var
HDummyValue=HClass.extend({constructor:function(_id,_2){this.id=_id;this.value=_2;},set:function(_2){this.value=_2;},get:function(){return this.value;},bind:function(_Gc){},unbind:function(_Gc){}});var
EVENT={_79:{mouseMove:false,mouseDown:false,click:false,mouseUp:false,draggable:false,droppable:false,keyDown:false,keyUp:false,mouseWheel:false,resize:false,textEnter:false,doubleClick:false,contextMenu:false},status:[false,false,-1,-1,[],false,false,false,false,false],button1:0,button2:1,crsrX:2,crsrY:3,keysDown:4,altKeyDown:5,ctrlKeyDown:6,shiftKeyDown:7,metaKeyDown:8,cmdKeyDown:9,enableDroppableChecks:true,startDroppable:function(){var _0=EVENT;_0.hovered=[];_0.hoverInterval=200;_0.hoverTimer=new Date().getTime();},start:function(){var _l1=(BROWSER_TYPE.ie&&!BROWSER_TYPE.ie9)?document:window,_0=EVENT;Event.observe(_l1,'mousemove',_0.mouseMove);Event.observe(_l1,'mouseup',_0.mouseUp);Event.observe(_l1,'mousedown',_0.mouseDown);Event.observe(_l1,'click',_0.click);Event.observe(_l1,'keyup',_0.keyUp);Event.observe(_l1,'keydown',_0.keyDown);if(!BROWSER_TYPE.safari&&!BROWSER_TYPE.ie){Event.observe(_l1,'keypress',_0.keyPress);}
Event.observe(_l1,'contextmenu',_0.contextMenu);Event.observe(_l1,'resize',_0.resize);Event.observe(_l1,'mousewheel',_0.mouseWheel);Event.observe(_l1,'dblclick',_0.doubleClick);if(window.addEventListener){window.addEventListener('DOMMouseScroll',EVENT.mouseWheel,false);window.addEventListener('resize',EVENT.resize,false);}
_0.listeners=[];_0.focused=[];_0.resizeListeners=[];_0.coordListeners=[];_0.focusOptions={};_0.dragItems=[];if(_0.enableDroppableChecks){_0.startDroppable();}
_0.topmostDroppable=null;_0.textEnterCtrls=[];_0._34=[];_0._Ld=true;_0._a9=null;_0.activeControl=null;_0._z5=null;},coordCacheFlush:function(_9){if(_9){EVENT._34[_9]=null;}
else{EVENT._34=[];}},reg:function(_7,_i2){var
_9=_7.elemId,_5=ELEM.get(_9),_0=EVENT,_t6,_D4=(_0.listeners[_9]===undefined||_0.listeners[_9]===false);if(BROWSER_TYPE.ie&&!BROWSER_TYPE.ie9){_5.setAttribute('ctrl',_7);}
else{_5.ctrl=_7;}
if(_D4){_0.listeners[_9]=true;_0.focused[_9]=false;}
for(_t6 in _0._79){if(_i2[_t6]===undefined){_i2[_t6]=_79[_t6];}}
_0.focusOptions[_9]=_i2;var _P3=_0.coordListeners.indexOf(_9);if(_i2.mouseMove){if(_P3===-1){_0.coordListeners.push(_9);}}
else if(_P3!==-1){_0.coordListeners.splice(_P3,1);}
if(_i2.textEnter){if(_0.textEnterCtrls.indexOf(_7.viewId)===-1){_0.textEnterCtrls.push(_7.viewId);}}
else{var _w5=_0.textEnterCtrls.indexOf(_7.viewId);if(_w5!==-1){_0.textEnterCtrls.splice(_w5,1);}}
if(_i2.resize){if(_0.resizeListeners.indexOf(_7.viewId)===-1){_0.resizeListeners.push(_7.viewId);}}
else{var _v5=_0.resizeListeners.indexOf(_7.viewId);if(_v5!==-1){_0.resizeListeners.splice(_v5,1);}}
if(_D4){Event.observe(_5,'mouseover',_0._Y3);}
if(_7.drawn){_0._A8();(_0.hovered.length!==0)&&(_0.hovered.indexOf(_7.elemId)===_0.hovered.length-1)&&_0.focus(_7);}},unreg:function(_7){var
_0=EVENT,_9,_5;if(_7===this.activeControl){_0.changeActiveControl(null);}
_9=_7.elemId;if(_0.focused[_9]){_0.blur(_7);}
_5=ELEM.get(_9);_0._34[_9]=null;_0.listeners[_9]=false;_0.focused[_9]=false;_0.focusOptions[_9]={ctrl:_7};var _P3=_0.coordListeners.indexOf(_9);if(_P3!==-1){_0.coordListeners.splice(_P3,1);}
var _w5=_0.textEnterCtrls.indexOf(_7.viewId);if(_w5!==-1){_0.textEnterCtrls.splice(_w5,1);}
var _v5=_0.resizeListeners.indexOf(_7.viewId);if(_v5!==-1){_0.resizeListeners.splice(_v5,1);}
if(_5!==undefined){Event.stopObserving(_5,'mouseover',_0._Y3);Event.stopObserving(_5,'mouseout',_0._A5);}},resize:function(e){var
i=0,_0=EVENT,_g9,_7;HSystem._Za();for(;i<_0.resizeListeners.length;i++){_g9=_0.resizeListeners[i];_7=HSystem.views[_g9];if(_7['resize']){_7.resize();}
if(_7['onResize']){_7.onResize();}}
HSystem._Za();},_Y3:function(e){if(!Event.element){return;}
var _A=Event.element(e);while(_A&&_A.ctrl===undefined){_A=_A.parentNode;}
if(!_A){return;}
var _0=_A.ctrl;EVENT.focus(_0);Event.stop(e);},_A5:function(e){if(!Event.element){return;}
var _A=Event.element(e);while(_A&&_A.ctrl===undefined){_A=_A.parentNode;}
if(!_A){return;}
var _0=_A.ctrl;EVENT.blur(_0);Event.stop(e);},focus:function(_7){var _0=EVENT,_9=_7.elemId,_5=ELEM.get(_9);if(_0.focused[_9]===false){Event.stopObserving(_5,'mouseover',_0._Y3);Event.observe(_5,'mouseout',_0._A5);_0.focused[_9]=true;if(_7['focus']){_7.focus();}}},blur:function(_7){var _0=EVENT,_9=_7.elemId,_5=ELEM.get(_9);if(_0.focused[_9]===true){Event.stopObserving(_5,'mouseout',_0._A5);Event.observe(_5,'mouseover',_0._Y3);_0.focused[_9]=false;if(_7['blur']){_7.blur();}}},mouseMove:function(e){var _0=EVENT,x=Event.pointerX(e),y=Event.pointerY(e),_w6=_0.flushMouseMove(x,y);_0.status[_0.crsrX]=x;_0.status[_0.crsrY]=y;_0._p2(e);if(_w6){Event.stop(e);}},flushMouseMove:function(x,y){var _0=EVENT,_w6=false,i=0,j,_9,_7;clearTimeout(_0._a9);for(;i!==_0.dragItems.length;i++){_9=_0.dragItems[i];_0.focusOptions[_9].ctrl.drag(x,y);_0.coordCacheFlush(_9);_w6=true;}
if(_0.enableDroppableChecks){if(new Date().getTime()>_0.hoverTimer+_0.hoverInterval){for(i=0;i!==_0.coordListeners.length;i++){_9=_0.coordListeners[i];_7=_0.focusOptions[_9].ctrl;_7.mouseMove(x,y);}
if(_0.enableDroppableChecks){_0._A8();}
var _M5;for(i=0;i!==_0.dragItems.length;i++){_M5=_0.topmostDroppable;_0.topmostDroppable=null;_9=_0.dragItems[i];_7=_0.focusOptions[_9].ctrl;var _N5,_s5;for(j=0;j!==_0.hovered.length;j++){_N5=_0.hovered[j];if(_N5!==_9&&_0.focusOptions[_N5].ctrl){_s5=_0.focusOptions[_N5].ctrl;if(!_0.topmostDroppable||_s5.zIndex()>_0.topmostDroppable.zIndex()||_s5.parent===_0.topmostDroppable){if(_0.focusOptions[_s5.elemId].droppable){_0.topmostDroppable=_s5;}}}}
if(_M5!==_0.topmostDroppable){if(_M5){_M5.endHover(_7);}
if(_0.topmostDroppable){_0.topmostDroppable.startHover(_7);}}}
_0.hoverTimer=new Date().getTime();}
else{_0._a9=setTimeout(function(){EVENT.flushMouseMove(x,y);},_0.hoverInterval);}}
return _w6;},_A8:function(){var _0=EVENT,x=_0.status[_0.crsrX],y=_0.status[_0.crsrY],i=0,_7,_5,_1,_V2,_H0,_k1,_k9=[];for(;i!==_0.listeners.length;i++){if(!_0.listeners[i]||!_0.focusOptions[i].ctrl){continue;}
_7=_0.focusOptions[i].ctrl;if(_7.drawn){if(ELEM.getStyle(i,'visibility',true)==='hidden'){continue;}
_5=ELEM.get(i);if(!_0._Ld||!_0._34[i]){_1=_7.rect;_V2=[_7.pageX(),_7.pageY()];_H0=[_1.width,_1.height];_0._34[i]=[_V2[0],_V2[1],_H0[0],_H0[1]];}
_k1=_0._34[i];if(x>=_k1[0]&&x<=_k1[0]+_k1[2]&&y>=_k1[1]&&y<=_k1[1]+_k1[3]){_k9.push(i);}}}
_0.hovered=_k9;},startDragging:function(_7,_S){var _0=EVENT;_0.dragItems=[_7.elemId];_0.focus(_7);_0.changeActiveControl(_7);_7.startDrag(_0.status[_0.crsrX],_0.status[_0.crsrY],_S);},mouseDown:function(e,_S){var
_0=EVENT,_l9=false,x=_0.status[_0.crsrX],y=_0.status[_0.crsrY],i=0,_Y0=null,_P5=[],_r5=[];_0._p2(e);if(_S===undefined){_S=Event.isLeftClick(e);}
if(_S){_0.status[_0.button1]=true;}
else{_0.status[_0.button2]=true;}
for(;i!==_0.focused.length;i++){if(_0.focused[i]===true){if(_0.focusOptions[i].ctrl.enabled){_Y0=_0.focusOptions[i].ctrl;}
if((_0.focusOptions[i].draggable===true)&&_0.dragItems.indexOf(i)===-1){_P5.push(i);}
if(_0.focusOptions[i].mouseDown===true){_r5.push(i);}}}
if(_Y0){_0.changeActiveControl(_Y0);}
for(i=0;i!==_P5.length;i++){_0.dragItems.push(_P5[i]);_0.focusOptions[_P5[i]].ctrl.startDrag(x,y,_S);_l9=true;}
var _D0=_r5.length;for(i=0;i!==_r5.length;i++){if(_0.focusOptions[_r5[i]].ctrl.mouseDown(x,y,_S)){_D0--;}}
if(_l9){document.body.focus();_0._4d=document.onselectstart;document.onselectstart=function(){return false;};Event.stop(e);}
if(_0.enableDroppableChecks){if((_r5.length!==0)&&(_D0===0)&&(_0.hovered.length!==0)&&_Y0){Event.stop(e);}}
return true;},click:function(e,_S){var _0=EVENT,x=_0.status[_0.crsrX],y=_0.status[_0.crsrY],i=0,_Y0=null,_Q5=[];_0._p2(e);if(_S===undefined){_S=Event.isLeftClick(e);}
if(BROWSER_TYPE.ie&&!BROWSER_TYPE.ie9){_S=true;}
if(!_S){return true;}
for(;i!==_0.focused.length;i++){if(_0.focused[i]===true){if(_0.focusOptions[i].ctrl.enabled){_Y0=_0.focusOptions[i].ctrl;}
if(_0.focusOptions[i].click===true){_Q5.push(i);}}}
if(_Y0){_0.changeActiveControl(_Y0);}
var _D0=_Q5.length;for(i=0;i!==_Q5.length;i++){if(_0.focusOptions[_Q5[i]].ctrl.click(x,y,_S)){_D0--;}}
if(_D0===0){Event.stop(e);}
return true;},focusTrace:false,prevActiveCtrl:null,changeActiveControl:function(_7){var
_0=EVENT,_K1=_0.activeControl;if(_7&&(_7!==_K1)&&(_7._r6||(_K1&&_K1._s6))){if(_K1&&_K1._s6){if(_K1){_K1.active=false;_K1._s6(_7);if(_0.focusTrace){_K1.setStyle('border','2px solid green');_0.prevActiveCtrl&&_0.prevActiveCtrl.setStyle('border','2px solid blue');}}
_0.prevActiveCtrl=_K1;}
if(_7&&_7._r6){_7.active=true;_0.activeControl=_7;_7._r6(_K1);if(_0.focusTrace){_7.setStyle('border','2px solid red');}}
else{_0.activeControl=null;}}},mouseUp:function(e){var
_0=EVENT,_o9=false,_S=Event.isLeftClick(e),x=_0.status[_0.crsrX],y=_0.status[_0.crsrY],_9,_7,i=0;_0._p2(e);for(;i!==_0.dragItems.length;i++){_9=_0.dragItems[i];_7=_0.focusOptions[_9].ctrl;_7.endDrag(x,y,_S);_o9=true;if(_0.enableDroppableChecks){_0._A8();if(_0.hovered.indexOf(_9)===-1){_0.blur(_7);}}
if(_0.topmostDroppable){_0.topmostDroppable.endHover(_7);_0.topmostDroppable.drop(_7);_0.topmostDroppable=null;}}
_0.dragItems=[];if(_o9){document.onselectstart=_0._4d;}
for(i=0;i<_0.focused.length;i++){if(_0.focused[i]===true){_7=_0.focusOptions[i].ctrl;if(_0.focusOptions[i].mouseUp===true){if(_7.mouseUp(x,y,_S)){}}}}
if(_S){_0.status[_0.button1]=false;}
else{_0.status[_0.button2]=false;}
return true;},doubleClick:function(e){var _0=EVENT,x=_0.status[_0.crsrX],y=_0.status[_0.crsrY],_9,_7,i=0;_0._p2(e);for(i=0;i!==_0.focused.length;i++){if(_0.focused[i]===true){if(_0.focusOptions[i].doubleClick===true){_0.focusOptions[i].ctrl.doubleClick(x,y,true);}}}
return true;},mouseWheel:function(e){var _0=EVENT,_90=0,i=0;if(!e){e=window.event;}
if(e.wheelDelta){_90=0-(e.wheelDelta/120);}
else if(e.detail){_90=0-(e.detail/3);}
if(BROWSER_TYPE.opera||BROWSER_TYPE.safari||BROWSER_TYPE.ie){_90=0-_90;}
for(;i!==_0.focused.length;i++){if(_0.focused[i]===true){if(_0.focusOptions[i].mouseWheel===true){Event.stop(e);_0.focusOptions[i].ctrl.mouseWheel(_90);}}}},contextMenu:function(e){var _0=EVENT,x=_0.status[_0.crsrX],y=_0.status[_0.crsrY],_p9=true,_9,_7,i=0;_0._p2(e);for(i=0;i!==_0.focused.length;i++){if(_0.focused[i]===true){if(_0.focusOptions[i].contextMenu===true){if(_0.focusOptions[i].ctrl.contextMenu()){_p9=false;}}}}
if(_p9){Event.stop(e);}
return true;},keyDown:function(e){var
_0=EVENT,_v=_0.translateKeyCodes(e.keyCode),_q5=_0.activeControl?(_0.focusOptions[_0.activeControl.elemId]?_0.focusOptions[_0.activeControl.elemId].keyDown:false):false,_j8=(_q5==='repeat'),_D0=false;_0._p2(e);_0._Jc=new Date().getTime();if(!_0.status[_0.cmdKeyDown]&&_0._s9(_v)){_0.status[_0.cmdKeyDown]=true;}
if(_0.activeControl&&_q5){if((_0._z5!==_v)||_j8){if(_0.activeControl.keyDown(_v)){_D0=true;}}}
if(_0.status[_0.keysDown].indexOf(_v)===-1){_0.status[_0.keysDown].push(_v);}
if(!_0.status[_0.cmdKeyDown]&&_D0){Event.stop(e);}
_0._z5=_v;},keyUp:function(e){var
_0=EVENT,_v=_0.translateKeyCodes(e.keyCode),_m8,i=0,_D0=false,_p5,_7;_0._p2(e);_0._z5=null;if(_0.activeControl&&_0.activeControl.elemId&&_0.focusOptions[_0.activeControl.elemId].keyUp===true){if(_0.activeControl.keyUp(_v)){_D0=true;}}
for(;i<_0.textEnterCtrls.length;i++){_p5=_0.textEnterCtrls[i];_7=HSystem.views[_p5];if(_7.textEnter){if(_7.textEnter()){_D0=true;}}}
if(!_0.status[_0.cmdKeyDown]&&_D0){Event.stop(e);}
if(_0.status[_0.cmdKeyDown]&&_0._s9(_v)){_0.status[_0.cmdKeyDown]=false;}
_m8=_0.status[_0.keysDown].indexOf(_v);if(_m8!==-1){_0.status[_0.keysDown].splice(_m8,1);}},keyPress:function(e){var
_0=EVENT,_yd=new Date().getTime();_0._p2(e);if(_0._Jc>(_yd-100)){return;}
if(_0._z5!==null){var
_v=_0.translateKeyCodes(_0._z5),_q5=_0.activeControl?(_0.focusOptions[_0.activeControl.elemId]?_0.focusOptions[_0.activeControl.elemId].keyDown:false):false,_j8=(_q5==='repeat'),_D0=false;if(_0.activeControl&&_q5&&_j8){if(_0.activeControl.keyDown(_v)){_D0=true;}}
if(_D0){Event.stop(e);}}},_ud:{59:186,61:187,44:188,45:189,46:190,47:191,96:192,91:219,92:220,93:221,39:222,219:91,220:92},_rd:{59:186,61:187,109:189,224:91},translateKeyCodes:function(_v){var
_0=EVENT,_84;if(BROWSER_TYPE.safari||BROWSER_TYPE.ie){return _v;}
else if(BROWSER_TYPE.opera){_84=_0._ud[_v];}
else{_84=_0._rd[_v];}
if(_84===undefined||_84===null){return _v;}
return _84;},_ad:[17,91,92,93],_s9:function(_v){if(BROWSER_TYPE.opera){return(EVENT._ad.indexOf(_v)!==-1);}
else if(BROWSER_TYPE.mac){return((_v===91)||(_v===93));}
else{return(_v===17);}},_p2:function(e){var _0=EVENT;_0.status[_0.altKeyDown]=e.altKey;_0.status[_0.ctrlKeyDown]=e.ctrlKey;_0.status[_0.shiftKeyDown]=e.shiftKey;_0.status[_0.metaKeyDown]=e.metaKey;}};var
EventManager=EVENT;LOAD(function(){EVENT.start();});var
HControlDefaults=HClass.extend({label:"",visible:true,events:null,constructor:function(){if(!this.events){this.events={};}},value:0,enabled:true,active:false,minValue:-2147483648,maxValue:2147483648});var
HControl=HView.extend({refreshOnValueChange:true,events:null,enabled:null,value:null,valueObj:null,minValue:null,maxValue:null,active:null,controlDefaults:HControlDefaults,constructor:function(_1,_d,_3){if(!_3){_3={};}
var _0=this;_3=(_0.controlDefaults.extend(_3)).nu(this);if(_0.isinherited){_0.base(_1,_d,_3);}
else{_0.isinherited=true;_0.base(_1,_d,_3);_0.isinherited=false;}
var _t9=(_3.minValue||_3.maxValue),_c4=_3.events;if(_t9){_0.minValue=_3.minValue;_0.maxValue=_3.maxValue;}
_0.setEvents(_c4);_0.setEnabled(_3.enabled);if(_3.valueObj){_3.valueObj.bind(_0);}
else if(!_0.valueObj){_0.valueObj=HDummyValue.nu();}
if((_0.value===null)&&(_3.value!==undefined)){_0.setValue(_3.value);}
if(_t9){_0.setValueRange(this.value,_3.minValue,_3.maxValue);}
if(!_0.isinherited){_0.draw();}},die:function(){var _0=this;if(_0.valueObj){_0.valueObj.unbind(_0);_0.valueObj=null;}
EVENT.unreg(_0);_0.base();},setValueRange:function(_2,_R5,_S5){this.minValue=_R5;this.maxValue=_S5;if(typeof _2==='number'){_2=(_2<_R5)?_R5:_2;_2=(_2>_S5)?_S5:_2;this.setValue(_2);}
return this;},refreshValue:function(){if(this.markupElemIds){if(this.markupElemIds['value']){ELEM.setHTML(this.markupElemIds.value,this.value);}}
return this;},refresh:function(){this.base();if(this.drawn){if(this.refreshOnValueChange){this.refreshValue();}}
return this;}},{CSS_DISABLED:"disabled",CSS_ENABLED:"enabled",CSS_ACTIVE:"active"});HControl.implement(HValueResponder);HControl.implement(HEventResponder);var
HValueAction=HClass.extend({constructor:function(_1,_d,_3){this.parent=_d;this.options=_3;if(_3.value){this.value=_3.value;}
if(_3.valueObj){_3.valueObj.bind(this);}
if(this.parent.addView instanceof Function){this.viewId=this.parent.addView(this);}
this.refresh();},remove:function(){if(this.parent){var _i8=this.parent.viewsZOrder.indexOf(this.viewId),_f8=this.parent.views.indexOf(this.viewId);this.parent.views.splice(_f8,1);HSystem.delView(this.viewId);this.parent.viewsZOrder.splice(_i8,1);var _E5=HSystem._S1.indexOf(this.viewId);if(_E5!==-1){HSystem._S1.splice(_E5,1);}
this.parent=null;this.parents=[];}
return this;},die:function(){this.parent.removeView(this.viewId);if(this.valueObj){this.valueObj.release(this);}
this.value=null;this.viewId=null;},refresh:function(){if(this.options.refreshAction||this.options.action){var
_T5=this.options.refreshAction?this.options.refreshAction:this.options.action;if(this.parent){if(this.parent[_T5]){if((this.parent[_T5]instanceof Function)){this.parent[_T5](this.value);}
else{this.parent[_T5]=this.value;}}}}},onIdle:function(){}});HValueAction.implement(HValueResponder);var
HDynControl=HControl.extend({preserveTheme:true,defaultEvents:{draggable:true},controlDefaults:(HControlDefaults.extend({constructor:function(_7){var _q0=ELEM.windowSize(),_c2=_q0[0],_d2=_q0[1];if(!this.minSize){this.minSize=[24,54];}
if(!this.maxSize){this.maxSize=_q0;}
if(!this.maxX){this.maxX=_c2-this.minSize[0];}
if(!this.maxY){this.maxY=_d2-this.minSize[1];}
if(!this.resizeNW){this.resizeNW=[1,1];}
if(!this.resizeNE){this.resizeNE=[1,1];}
if(!this.resizeSW){this.resizeSW=[1,1];}
if(!this.resizeSE){this.resizeSE=[1,1];}},minX:0,minY:0,maxX:null,maxY:null,minSize:null,maxSize:null,resizeW:1,resizeE:1,resizeN:1,resizeS:1,resizeNW:null,resizeNE:null,resizeSW:null,resizeSE:null,noResize:false})),draw:function(){this.base();this._6d();this._w9();},_f2:function(_y9,_z9){var _0=this,_1=_0.rect,_3=_0.options,_V5,_Y5;if(_1.width<_3.minSize[0]){_V5=0-(_3.minSize[0]-_1.width);_1.setWidth(_3.minSize[0]);if(_y9){_1.offsetBy(_V5,0);}}
else if(_1.width>_3.maxSize[0]){_V5=0-(_3.maxSize[0]-_1.width);_1.setWidth(_3.maxSize[0]);if(_y9){_1.offsetBy(_V5,0);}}
if(_1.height<_3.minSize[1]){_Y5=0-(_3.minSize[1]-_1.height);_1.setHeight(_3.minSize[1]);if(_z9){_1.offsetBy(0,_Y5);}}
else if(_1.height>_3.maxSize[1]){_Y5=0-(_3.maxSize[1]-_1.height);_1.setHeight(_3.maxSize[1]);if(_z9){_1.offsetBy(0,_Y5);}}
if(_1.left<_3.minX){_1.offsetTo(_3.minX,_1.top);}
else if(_1.left>_3.maxX){_1.offsetTo(_3.maxX,_1.top);}
if(_1.top<_3.minY){_1.offsetTo(_1.left,_3.minY);}
else if(_1.top>_3.maxY){_1.offsetTo(_1.left,_3.maxY);}
_0.drawRect();},_q2:function(x,y){return this._B9.subtract(x,y);},dynResizeNW:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setLeftTop(_0._j2.leftTop.subtract(_w0));_0._f2(1,1);},dynResizeNE:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setRightTop(_0._j2.rightTop.subtract(_w0));_0._f2(0,1);},dynResizeSW:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setLeftBottom(_0._j2.leftBottom.subtract(_w0));_0._f2(1,0);},dynResizeSE:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setRightBottom(_0._j2.rightBottom.subtract(_w0));_0._f2(0,0);},dynResizeW:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setLeft(_0._j2.left-_w0.x);_0._f2(1,0);},dynResizeE:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setRight(_0._j2.right-_w0.x);_0._f2(0,0);},dynResizeN:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setTop(_0._j2.top-_w0.y);_0._f2(0,1);},dynResizeS:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.setBottom(_0._j2.bottom-_w0.y);_0._f2(0,0);},dynDrag:function(_0,x,y){var _w0=_0._q2(x,y);_0.rect.offsetTo(_0._j2.leftTop.subtract(_w0));_0._f2(1,1);},_6d:function(){this._K0=[];this._E9=['nw-resize','ne-resize','sw-resize','se-resize','w-resize','e-resize','n-resize','s-resize','move'];var i,_0=this,_Zd=0,_Yd=1,_Xd=2,_Td=3,_Yc=4,_Uc=5,_Oc=6,_Fc=7,_wc=8,_K0=this._K0;_K0[_Zd]=_0.dynResizeNW;_K0[_Yd]=_0.dynResizeNE;_K0[_Xd]=_0.dynResizeSW;_K0[_Td]=_0.dynResizeSE;_K0[_Yc]=_0.dynResizeW;_K0[_Uc]=_0.dynResizeE;_K0[_Oc]=_0.dynResizeN;_K0[_Fc]=_0.dynResizeS;_K0[_wc]=_0.dynDrag;},makeRectRules:function(){var _x=this.options,_1=this.rect;return[[0,0,_x.resizeNW[0],_x.resizeNW[1]],[_1.width-_x.resizeNE[0],0,_1.width,_x.resizeNE[1]],[0,_1.height-_x.resizeSW[1],_x.resizeSW[0],_1.height],[_1.width-_x.resizeSE[0],_1.height-_x.resizeSE[1],_1.width,_1.height],[0,_x.resizeN,_x.resizeW,_1.height-_x.resizeS],[_1.width-_x.resizeE,_x.resizeN,_1.width,_1.height-_x.resizeS],[_x.resizeW,0,_1.width-_x.resizeE,_x.resizeN],[_x.resizeW,_1.height-_x.resizeS,_1.width-_x.resizeE,_1.height],[_x.resizeW,_x.resizeN,_1.width-_x.resizeE,_1.height-_x.resizeS]];},_w9:function(){this._h2=-1;this._n5=[];var i=0,_m5,_b4=this.makeRectRules();for(;i<9;i++){_m5=_b4[i];this._n5.push(HRect.nu(_m5[0],_m5[1],_m5[2],_m5[3]));}},_Fd:function(){var i,_G9=this._B9.subtract(this.rect.left,this.rect.top),_n5=this._n5;if(this.options.noResize){if(_n5[8].contains(_G9)){this._h2=8;this.setStyle('cursor',this._E9[8]);return;}
else{this._h2=-1;}}
else{for(i=0;i!==9;i++){if(_n5[i].contains(_G9)){this._h2=i;this.setStyle('cursor',this._E9[i]);return;}}}},startDrag:function(x,y,_08){var _d=this.parent;if(_d.markupElemIds&&_d.markupElemIds.subview){x-=ELEM._o4(_d.markupElemIds.subview);y-=ELEM._p4(_d.markupElemIds.subview);}
else if(_d.elemId){x-=_d.pageX();y-=_d.pageY();}
this._B9=new HPoint(x,y);this._j2=new HRect(this.rect);this._Fd();if(this._h2!==-1){this._K0[this._h2](this,x,y);}
return true;},drag:function(x,y){var _d=this.parent;if(_d.markupElemIds&&_d.markupElemIds.subview){x-=ELEM._o4(_d.markupElemIds.subview);y-=ELEM._p4(_d.markupElemIds.subview);}
else if(_d.elemId){x-=_d.pageX();y-=_d.pageY();}
if(this._h2!==-1){this._K0[this._h2](this,x,y);}
return true;},endDrag:function(x,y,_08){this.base();var _d=this.parent;if(_d.markupElemIds&&_d.markupElemIds.subview){x-=ELEM._o4(_d.markupElemIds.subview);y-=ELEM._p4(_d.markupElemIds.subview);}
else if(_d.elemId){x-=_d.pageX();y-=_d.pageY();}
if(this._h2!==-1){this._K0[this._h2](this,x,y);}
this.setStyle('cursor','default');this._w9();EVENT.resize();return true;}});var
HCenterView=HControl.extend({defaultEvents:{resize:true},controlDefaults:HControlDefaults.extend({centerX:true,centerY:false}),drawRect:function(_Dd){this.base();if(!_Dd){this.resize();}},minLeft:false,minTop:false,resize:function(){if(this.minLeft===false){this.minLeft=this.rect.left;}
if(this.minTop===false){this.minTop=this.rect.top;}
var
_1=this.rect,_q0=ELEM.windowSize(),_c2=_q0[0],_d2=_q0[1],_Bd=_1.width,_Ad=Math.floor(_Bd/2),_zd=Math.floor(_c2/2),_t=_zd-_Ad,_a4=_1.height,_id=Math.floor(_a4/2),_fd=Math.floor(_d2/2),_N=_fd-_id;if(!this.options.centerX){_t=_1.left;}
else if(_t<this.minLeft){_t=this.minLeft;}
if(!this.options.centerY){_N=_1.top;}
else if(_N<this.minTop){_N=this.minTop;}
_1.offsetTo(_t,_N);this.drawRect(true);}});var
HMiddleView=HCenterView.extend({controlDefaults:HControlDefaults.extend({centerX:false,centerY:true})});var
HScrollView=HControl.extend({controlDefaults:HControlDefaults.extend({scrollX:true,scrollY:true}),drawSubviews:function(){if(this.options.scrollX==='auto'||this.options.scrollY==='auto'){this.setStyle('overflow','auto');}
else if(this.options.scrollX||this.options.scrollY){this.setStyle('overflow','scroll');}
if(!this.options.scrollX){this.setStyle('overflow-x','hidden');}
else if(this.options.scrollX==='auto'){this.setStyle('overflow-x','auto');}
else{this.setStyle('overflow-x','scroll');}
if(!this.options.scrollY){this.setStyle('overflow-y','hidden');}
else if(this.options.scrollY==='auto'){this.setStyle('overflow-y','auto');}
else{this.setStyle('overflow-y','scroll');}}});var
HInlineView=HView.extend({isAbsolute:false,isRelative:true,displayMode:'inline'});HThemeManager._u6["default"]={"button":"<div class=\"button_control\" id=\"control#{_ID}\">\n<div class=\"button_edge_left\"></div>\n<div class=\"button_center\"></div>\n<div class=\"button_edge_right\"></div>\n<div class=\"button_label\" id=\"label#{_ID}\">#{this.label}</div>\n<div class=\"button_antiselect\"></div>\n</div>\n","checkbox":"<div class=\"checkbox_control#{this.value?' checked':' unchecked'}\" id=\"control#{_ID}\">\n<div class=\"checkbox_state\" id=\"state#{_ID}\"></div>\n<div class=\"checkbox_label\" id=\"label#{_ID}\">#{this.label}</div>\n<div class=\"checkbox_antiselect\"></div>\n</div>","sheet":"<div class=\"sheet_dimmer\"></div>\n<div class=\"sheet_center\">\n<div class=\"sheet_content\" id=\"state#{_ID}\">\n<div class=\"sheet_bg\"></div>\n<div class=\"sheet_body\">\n<div class=\"sheet_body_edge_left\"></div>\n<div class=\"sheet_body_edge_right\"></div>\n<div class=\"sheet_body_edge_bottom\"></div>\n<div class=\"sheet_body_corner_left\"></div>\n<div class=\"sheet_body_corner_right\"></div>\n</div>\n<div class=\"sheet_subview\" id=\"subview#{_ID}\"></div>\n</div>\n</div>","passwordcontrol":"<div class=\"textcontrol_bg\"></div>\n<div class=\"textcontrol_n\"></div>\n<div class=\"textcontrol_s\"></div>\n<div class=\"textcontrol_w\"></div>\n<div class=\"textcontrol_e\"></div>\n<div class=\"textcontrol_nw\"></div>\n<div class=\"textcontrol_ne\"></div>\n<div class=\"textcontrol_se\"></div>\n<div class=\"textcontrol_sw\"></div>\n<div id=\"label#{_ID}\" title=\"#{this.label}\" class=\"textcontrol_input_parent\">\n<input type=\"password\" class=\"textcontrol_input\" #{this.enabled?'':'disabled'}\nonfocus=\"HSystem.views[#{this.viewId}].textFocus();\" onblur=\"HSystem.views[#{this.viewId}].textBlur();\" id=\"value#{_ID}\" value=\"#{this.value}\" />\n</div>\n","progressbar":"<div class=\"progressbar\"\n><div class=\"progress\" id=\"value#{ _ID }\"></div></div>\n","radiobutton":"<div class=\"radiobutton_control#{this.value?' checked':' unchecked'}\" id=\"control#{_ID}\">\n<div class=\"radiobutton_state\" id=\"state#{_ID}\"></div>\n<div class=\"radiobutton_label\" id=\"label#{_ID}\">#{this.label}</div>\n<div class=\"radiobutton_antiselect\"></div>\n</div>","searchfield":"<div class=\"searchfield_w\"></div>\n<div class=\"searchfield_c\"></div>\n<div class=\"searchfield_e\"></div>\n<div id=\"label#{_ID}\" title=\"#{this.label}\" class=\"searchfield_input_parent\">\n<input type=\"text\" class=\"searchfield_input\" #{this.enabled?'':'disabled'}\nonfocus=\"HSystem.views[#{this.viewId}].textFocus();\" onblur=\"HSystem.views[#{this.viewId}].textBlur();\" id=\"value#{_ID}\" value=\"#{this.value}\" />\n</div>\n<div class=\"searchfield_fade\"></div>\n","slider":"<div class=\"hslider_track_left\"></div>\n<div class=\"hslider_track_right\"></div>\n<div class=\"hslider_track\"></div>\n<div class=\"hslider_thumb\" id=\"control#{_ID}\"></div>\n${this.thumbSize=21;}","vslider":"<div class=\"vslider_track_top\"></div>\n<div class=\"vslider_track_bottom\"></div>\n<div class=\"vslider_track\"></div>\n<div class=\"vslider_thumb\" id=\"control#{_ID}\"></div>\n${this.thumbSize=21;}","stepper":"<div class=\"stepper_state\" id=\"state#{_ID}\"></div>\n${this.bgStateUp='0px -23px';this.bgStateDown='0px -46px';}\n","stringview":"<div class=\"stringview\" id=\"value#{_ID}\" title=\"#{this.label}\"></div>\n","tab":"<div class=\"tab_bg\" id=\"bg#{_ID}\">\n<div class=\"tab_fg\"></div>\n</div>\n<div class=\"tab_label\" id=\"label#{_ID}\"></div>\n<div class=\"tab_label_fill_bg\" id=\"state#{_ID}\"></div>\n${this.tabLabelLeftEdge=12;this.tabLabelRightEdge=9;this.tabLabelHeight=24;this.fontStyle='font-family:Arial,sans-serif;font-size:12px;font-weight:bold;';this.tabLabelFillBg=true;}\n","textarea":"<div class=\"textcontrol_bg\"></div>\n<div class=\"textcontrol_n\"></div>\n<div class=\"textcontrol_s\"></div>\n<div class=\"textcontrol_w\"></div>\n<div class=\"textcontrol_e\"></div>\n<div class=\"textcontrol_nw\"></div>\n<div class=\"textcontrol_ne\"></div>\n<div class=\"textcontrol_se\"></div>\n<div class=\"textcontrol_sw\"></div>\n<div id=\"label#{_ID}\" title=\"#{this.label}\" class=\"textarea_input_parent\">\n<textarea class=\"textarea_input\" style=\"resize:none;\" #{this.enabled?'':'disabled'}\nonfocus=\"HSystem.views[#{this.viewId}].textFocus();\" onblur=\"HSystem.views[#{this.viewId}].textBlur();\" id=\"value#{_ID}\">#{this.value}</textarea>\n</div>\n","textcontrol":"<div class=\"textcontrol_bg\" id=\"bg#{_ID}\"></div>\n<div class=\"textcontrol_n\"></div>\n<div class=\"textcontrol_s\"></div>\n<div class=\"textcontrol_w\"></div>\n<div class=\"textcontrol_e\"></div>\n<div class=\"textcontrol_nw\"></div>\n<div class=\"textcontrol_ne\"></div>\n<div class=\"textcontrol_se\"></div>\n<div class=\"textcontrol_sw\"></div>\n<div id=\"label#{_ID}\" title=\"#{this.label}\" class=\"textcontrol_input_parent\">\n<input type=\"text\" class=\"textcontrol_input\" #{this.enabled?'':'disabled'}\nonfocus=\"HSystem.views[#{this.viewId}].textFocus();\" onblur=\"HSystem.views[#{this.viewId}].textBlur();\" id=\"value#{_ID}\" value=\"#{this.value}\" />\n</div>\n","uploader":"<div class=\"uploader\">\n<iframe id=\"iframe#{this.elemId}\" name=\"upload_target_#{this.elemId}\" src=\"/U/iframe_html\" class=\"uploader_iframe\"></iframe>\n<div class=\"upload_progress\" id=\"upload_progress#{this.elemId}\">\n<div id=\"progress_label#{this.elemId}\" class=\"progress_message\">#{this.label}</div>\n<div id=\"progress_indicator#{this.elemId}\" class=\"progress_indicator\"></div>\n</div>\n<div class=\"button_control\" id=\"button#{this.elemId}\">\n<div class=\"button_edge_left\"></div>\n<div class=\"button_center\"></div>\n<div class=\"button_edge_right\"></div>\n<div class=\"button_label\" id=\"button_label#{_ID}\">#{this.label}</div>\n<div class=\"button_antiselect\"></div>\n</div>\n<div class=\"button_control ack_button\" id=\"ack_button#{this.elemId}\">\n<div class=\"button_edge_left\"></div>\n<div class=\"button_center\"></div>\n<div class=\"button_edge_right\"></div>\n<div class=\"button_label\">#{this.getLocaleString('HUploader.strings.ok')}</div>\n<div class=\"button_antiselect\"></div>\n</div>\n<form id=\"form#{this.elemId}\" name=\"upload_form_#{this.elemId}\" enctype=\"multipart/form-data\" method=\"POST\" action=\"/U/NoUploadKey\" target=\"upload_target_#{this.elemId}\" class=\"uploader_form\">\n<div class=\"uploader_file_wrap\">\n<input align=\"right\" id=\"file#{this.elemId}\" name=\"file_data\" type=\"file\" onchange=\"HSystem.views[#{this.viewId}].upload();\" class=\"uploader_file\" size=\"1\" />\n</div>\n<input id=\"value#{this.elemId}\" name=\"value_id\" type=\"hidden\" value=\"NoUploadValue\" />\n</form>\n</div>\n","validatorview":"","window":"${this.setStyle('overflow','visible')}\n<div class=\"window_shadow\"></div>\n<div class=\"window_titlebar\">\n<div class=\"window_titlebar_edge_left\"></div>\n<div class=\"window_titlebar_center\"></div>\n<div class=\"window_titlebar_edge_right\"></div>\n</div>\n<div class=\"window_bg\"></div>\n<div class=\"window_body\">\n<div class=\"window_body_edge_left\"></div>\n<div class=\"window_body_edge_right\"></div>\n<div class=\"window_body_edge_bottom\"></div>\n<div class=\"window_body_corner_left\"></div>\n<div class=\"window_body_corner_right\"></div>\n</div>\n<div class=\"window_label\" id=\"label#{_ID}\">#{this.label}</div>\n<div class=\"window_controls\" id=\"control#{_ID}\">#{this.options.closeButton?'<div class=\"window_controls_close\" onclick=\"HSystem.views['+this.viewId+'].windowClose();\"></div>':''}#{this.options.collapseButton?'<div class=\"window_controls_collapse\" onclick=\"HSystem.views['+this.viewId+'].windowCollapse();\"></div>':''}#{this.options.zoomButton?'<div class=\"window_controls_zoom\" onclick=\"HSystem.views['+this.viewId+'].windowZoom();\"></div>':''}</div>\n<div class=\"window_subview\" id=\"subview#{_ID}\"></div>\n#{this.options.noResize?'':'<div class=\"window_resize_se\"></div>'}\n","calendar":"<div class=\"calendar_bg\">\n<div class=\"calendar_nw\"></div>\n<div class=\"calendar_n\"></div>\n<div class=\"calendar_ne\"></div>\n<div class=\"calendar_w\"></div>\n<div class=\"calendar_c\"></div>\n<div class=\"calendar_e\"></div>\n<div class=\"calendar_sw\"></div>\n<div class=\"calendar_s\"></div>\n<div class=\"calendar_se\"></div>\n</div>\n<div class=\"calendar_control\" id=\"control#{_ID}\">\n<div class=\"calendar_head\">\n<div class=\"calendar_head_prev_month\" onclick=\"HSystem.views[#{this.viewId}].prevMonth();\"></div>\n<div class=\"calender_head_month_year\" id=\"state#{_ID}\"></div>\n<div class=\"calendar_head_next_month\" onclick=\"HSystem.views[#{this.viewId}].nextMonth();\"></div>\n</div>\n<div class=\"calendar_weekdays\" id=\"label#{_ID}\"></div>\n<div class=\"calendar_weeks\" id=\"value#{_ID}\"></div>\n</div>","timesheet":"<div id=\"label#{_ID}\" class=\"timesheet_label\"></div>\n<div id=\"timeline#{_ID}\" class=\"timesheet_timeline\"></div>\n<div id=\"value#{_ID}\" class=\"timesheet_items\"></div>\n${this.themeSettings(30, 20, 0, 10, -6);}","timesheet_item":"<div class=\"timesheet_item\" id=\"bg#{_ID}\">\n<div class=\"timesheet_item_time\" id=\"state#{_ID}\"></div>\n<div class=\"timesheet_item_middle\">\n<div class=\"timesheet_item_label\" id=\"label#{_ID}\">#{this.label}</div>\n</div>\n<div class=\"timesheet_item_icons\" id=\"icons#{_ID}\"></div>\n<div class=\"timesheet_item_resize_top\"></div>\n<div class=\"timesheet_item_resize_bottom\"></div>\n<div class=\"timesheet_item_move\" id=\"subview#{_ID}\"></div>\n</div>\n","dyncontrol":"","menuitem":"<div class=\"menuitem_control#{this.value?' checked':' unchecked'}\" id=\"control#{_ID}\">\n<div class=\"menuitem_state\" id=\"state#{_ID}\"></div>\n<div class=\"menuitem_label\" id=\"label#{_ID}\">#{this.label}</div>\n</div>\n","minimenu":"<div class=\"minimenu_control\" id=\"control#{_ID}\">\n<div class=\"minimenu_edge_left\"></div>\n<div class=\"minimenu_center\"></div>\n<div class=\"minimenu_edge_right\"></div>\n<div class=\"minimenu_label\" id=\"label#{_ID}\">#{this.label}</div>\n<div class=\"minimenu_antiselect\"></div>\n</div>\n","minimenuitem":"<div class=\"minimenuitem_control#{this.value?' checked':' unchecked'}\" id=\"control#{_ID}\">\n<div class=\"minimenuitem_state\" id=\"state#{_ID}\"></div>\n<div class=\"minimenuitem_label\" id=\"label#{_ID}\">#{this.label}</div>\n</div>\n","popupmenu":"<div class=\"popupmenu_control\" id=\"control#{_ID}\">\n<div class=\"popupmenu_edge_left\"></div>\n<div class=\"popupmenu_center\"></div>\n<div class=\"popupmenu_edge_right\"></div>\n<div class=\"popupmenu_label\" id=\"label#{_ID}\">#{this.label}</div>\n<div class=\"popupmenu_antiselect\"></div>\n</div>\n","table":"<div id=\"bg#{_ID}\" class=\"table_bg\">\n<div class=\"table_nw\"></div>\n<div class=\"table_n\"></div>\n<div class=\"table_ne\"></div>\n<div class=\"table_w\"></div>\n<div class=\"table_c\"></div>\n<div class=\"table_e\"></div>\n<div class=\"table_sw\"></div>\n<div class=\"table_s\"></div>\n<div class=\"table_se\"></div>\n</div>\n<div id=\"header#{_ID}\" class=\"table_header\">\n<div class=\"table_header_left\"></div>\n<div class=\"table_header_middle\"></div>\n<div class=\"table_header_right\"></div>\n<div id=\"header_columns#{_ID}\" class=\"table_columns\"></div>\n</div>\n<div id=\"content#{_ID}\" class=\"table_content\"></div>\n</div>\n"};HNoComponentCSS.push("default");HNoCommonCSS.push("default");HThemeManager._9f(function(){var _0=HThemeManager;_0._36("default","default_theme",_0.themePath,null);_0.useCSS(".button_control,.button_edge_left,.button_center,.button_edge_right,.button_label,.button_antiselect{position:absolute;top:0;height:24px;}.button_control{left:0;right:0;cursor:pointer;}.disabled .button_control{cursor:default;}.button_edge_left,.button_center,.button_edge_right{background-repeat:repeat-x;background-image:#{this.getCssFilePath('button_parts1.png');};}.button_edge_left{left:0;width:6px;background-position:0 0;}.disabled>.button_control>.button_edge_left{background-position:0 -144px;}.enabled>.button_control:hover>.button_edge_left{background-position:0 -48px;}.enabled>.button_control:active>.button_edge_left{background-position:0 -96px;}.button_edge_right{right:0;width:6px;background-position:-42px 0;}.disabled>.button_control>.button_edge_right{background-position:-42px -144px;}.enabled>.button_control:hover>.button_edge_right{background-position:-42px -48px;}.enabled>.button_control:active>.button_edge_right{background-position:-42px -96px;}.button_center{left:6px;right:6px;background-position:0 -24px;}.disabled>.button_control>.button_center{background-position:0 -168px;}.enabled>.button_control:hover>.button_center{background-position:0 -72px;}.enabled>.button_control:active>.button_center{background-position:0 -120px;}.button_label{left:6px;right:6px;top:2px;height:20px;line-height:20px;text-align:center;vertical-align:middle;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:#333;}.disabled>.button_control>.button_label{color:#999;}.enabled>.button_control:hover>.button_label{color:#000;}.enabled>.button_control:active>.button_label{color:#000;}.button_antiselect{left:0;right:0;}\n.checkbox_control,.checkbox_state,.checkbox_label,.checkbox_antiselect{position:absolute;height:24px;}.checkbox_control{left:0;top:0;right:0;cursor:pointer;}#{BROWSER_TYPE.ie6?'.disabled .checkbox_control':'.disabled>.checkbox_control';}{cursor:default;}.checkbox_state{left:0;top:0;width:24px;background-repeat:no-repeat;background-position:-24px 0;background-image:#{this.getCssFilePath('checkbox_parts1.png');};}#{BROWSER_TYPE.ie6?'.enabled .unchecked .checkbox_state':'.enabled>.unchecked>.checkbox_state';}{background-position:-24px 0;}#{BROWSER_TYPE.ie6?'.enabled .unchecked:hover .checkbox_state':'.enabled>.unchecked:hover>.checkbox_state';}{background-position:-24px -24px;}#{BROWSER_TYPE.ie6?'.enabled .unchecked:active .checkbox_state':'.enabled>.unchecked:active>.checkbox_state';}{background-position:-24px -48px;}#{BROWSER_TYPE.ie6?'.enabled .checked .checkbox_state':'.enabled>.checked>.checkbox_state';}{background-position:0 0;}#{BROWSER_TYPE.ie6?'.enabled .checked:hover .checkbox_state':'.enabled>.checked:hover>.checkbox_state';}{background-position:0 -24px;}#{BROWSER_TYPE.ie6?'.enabled .checked:active .checkbox_state':'.enabled>.checked:active>.checkbox_state';}{background-position:0 -48px;}#{BROWSER_TYPE.ie6?'.disabled .unchecked .checkbox_state':'.disabled>.unchecked>.checkbox_state';}{background-position:-24px -72px;}#{BROWSER_TYPE.ie6?'.disabled .checked .checkbox_state':'.disabled>.checked>.checkbox_state';}{background-position:0 -72px;}.checkbox_label{left:24px;right:0;top:2px;height:20px;line-height:20px;text-align:left;vertical-align:middle;font-family:Arial,sans-serif;font-size:12px;color:#333;}#{BROWSER_TYPE.ie6?'.disabled .checkbox_control .checkbox_label':'.disabled>.checkbox_control>.checkbox_label';}{color:#999;}#{BROWSER_TYPE.ie6?'.enabled .checkbox_control:hover .checkbox_label':'.enabled>.checkbox_control:hover>.checkbox_label';}{color:#000;}#{BROWSER_TYPE.ie6?'.enabled .checkbox_control:active .checkbox_label':'.enabled>.checkbox_control:active>.checkbox_label';}{color:#000;}.checkbox_antiselect{left:0;top:0;right:0;}\n.sheet_bg,.sheet_body,.sheet_dimmer,.sheet_center,.sheet_content,.sheet_body_edge_left,.sheet_body_edge_right,.sheet_body_corner_left,.sheet_body_corner_right,.sheet_body_edge_bottom,.sheet_subview{position:absolute;display:block;overflow:hidden;cursor:inherit;background-repeat:no-repeat;}.sheet_dimmer{top:0;left:0;right:0;bottom:0;background-repeat:repeat;background-image:#{this.getCssFilePath('sheet_dim.png');};}.sheet_center{top:0;left:50%;overflow:visible;width:0;height:0;}.sheet_bg{left:24px;top:0;right:24px;bottom:24px;background-repeat:repeat;background-image:#{this.getCssFilePath('sheet_bg.png');};}.sheet_body{left:0;top:0;right:0;bottom:0;}.sheet_body *{background-image:#{this.getCssFilePath('sheet_parts1.png');};}.sheet_body_edge_left{left:0;top:0;bottom:24px;width:24px;background-repeat:repeat-y;background-position:-48px 0;}.sheet_body_edge_right{right:0;top:0;bottom:24px;width:24px;background-repeat:repeat-y;background-position:-72px 0;}.sheet_body_corner_left{left:0;bottom:0;height:24px;width:24px;background-position:0 0;}.sheet_body_corner_right{right:0;bottom:0;height:24px;width:24px;background-position:-24px 0;}.sheet_body_edge_bottom{left:24px;bottom:0;right:24px;height:24px;background-repeat:repeat-x;background-position:0 0;background-image:#{this.getCssFilePath('sheet_parts2.png');};}.sheet_subview{left:2px;top:0;right:2px;bottom:2px;}\n\n.progressbar{cursor:wait;position:absolute;left:0;top:0;right:0;bottom:1px;border:1px solid #999;background-color:#ccc;}.progressbar .progress{position:absolute;left:0;top:0;width:50px;bottom:0;background-color:#333;}.disabled .progressbar{opacity:.75;}\n.radiobutton_control,.radiobutton_state,.radiobutton_label,.radiobutton_antiselect{position:absolute;height:24px;}.radiobutton_control{left:0;top:0;right:0;cursor:pointer;}.disabled>.radiobutton_control{cursor:default;}.radiobutton_state{left:0;top:0;width:24px;background-repeat:no-repeat;background-position:-24px 0;background-image:#{this.getCssFilePath('radiobutton_parts1.png');};}#{BROWSER_TYPE.ie6?'.enabled .unchecked .radiobutton_state':'.enabled>.unchecked>.radiobutton_state';}{background-position:-24px 0;}#{BROWSER_TYPE.ie6?'.enabled .unchecked:hover .radiobutton_state':'.enabled>.unchecked:hover>.radiobutton_state';}{background-position:-24px -24px;}#{BROWSER_TYPE.ie6?'.enabled .unchecked:active .radiobutton_state':'.enabled>.unchecked:active>.radiobutton_state';}{background-position:-24px -48px;}#{BROWSER_TYPE.ie6?'.enabled .checked .radiobutton_state':'.enabled>.checked>.radiobutton_state';}{background-position:0 0;}#{BROWSER_TYPE.ie6?'.enabled .checked:hover .radiobutton_state':'.enabled>.checked:hover>.radiobutton_state';}{background-position:0 -24px;}#{BROWSER_TYPE.ie6?'.enabled .checked:active .radiobutton_state':'.enabled>.checked:active>.radiobutton_state';}{background-position:0 -48px;}#{BROWSER_TYPE.ie6?'.disabled .unchecked .radiobutton_state':'.disabled>.unchecked>.radiobutton_state';}{background-position:-24px -72px;}#{BROWSER_TYPE.ie6?'.disabled .checked .radiobutton_state':'.disabled>.checked>.radiobutton_state';}{background-position:0 -72px;}.radiobutton_label{left:24px;right:0;top:0;height:20px;line-height:24px;text-align:left;vertical-align:middle;font-family:Arial,sans-serif;font-size:12px;color:#333;}#{BROWSER_TYPE.ie6?'.disabled .radiobutton_control .radiobutton_label':'.disabled>.radiobutton_control>.radiobutton_label';}{color:#999;}#{BROWSER_TYPE.ie6?'.enabled .radiobutton_control:hover .radiobutton_label':'.enabled>.radiobutton_control:hover>.radiobutton_label';}{color:#000;}#{BROWSER_TYPE.ie6?'.enabled .radiobutton_control:active .radiobutton_label':'.enabled>.radiobutton_control:active>.radiobutton_label';}{color:#000;}.radiobutton_antiselect{left:0;top:0;right:0;}\n.default .searchfield_input{position:absolute;display:block;font-family:Arial,sans-serif;font-size:13px;color:#000;background-color:transparent;vertical-align:middle;border:0;left:18px;top:4px;line-height:18px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;#{(BROWSER_TYPE.firefox||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8||BROWSER_TYPE.opera)?'padding-left:2px;width:100%!important;height:90%!important;':BROWSER_TYPE.ie6?'right:3px;height:16px;':'padding:2px;padding-top:4px;right:3px;height:16px;width:auto;';}}.default .searchfield_input:focus{outline-color:transparent;outline-style:none;}.default .disabled .searchfield_input{color:#ccc;}.default .searchfield_input_parent{position:absolute;#{(BROWSER_TYPE.firefox||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8||BROWSER_TYPE.ie9||BROWSER_TYPE.opera)?'left:0;padding-left:1px;top:0;right:4px;bottom:0;':BROWSER_TYPE.ie6?'left:2px;top:1px;right:1px;height:20px;':'left:-2px;top:-2px;right:-2px;height:20px;';}}.default .searchfield_fade,.default .searchfield_e,.default .searchfield_w,.default .searchfield_c{position:absolute;height:24px;background-repeat:no-repeat;background-image:#{this.getCssFilePath('searchfield_parts1.png');};#{BROWSER_TYPE.ie6?'font-size:0;line-height:0;':'';}}.default .searchfield_fade{right:0;top:0;width:10px;background-position:-48px 0;}.default .searchfield_e{right:0;top:0;width:24px;background-position:-24px 0;}.default .searchfield_c{left:24px;right:24px;top:0;background-repeat:repeat-x;background-position:0 -24px;}.default .searchfield_w{left:0;top:0;width:24px;background-position:0 0;}.default .disabled>.searchfield_fade{background-position:-48px -96px;}.default .disabled>.searchfield_e{background-position:-24px -96px;}.default .disabled>.searchfield_c{background-position:0 -120px;}.default .disabled>.searchfield_w{background-position:0 -96px;}.default .active>.searchfield_fade{background-position:-48px -48px;}.default .active>.searchfield_e{background-position:-24px -48px;}.default .active>.searchfield_c{background-position:0 -72px;}.default .active>.searchfield_w{background-position:0 -48px;}\n.hslider_track_left,.hslider_track_right,.hslider_track{position:absolute;height:7px;top:7px;font-size:0;background-image:#{this.getCssFilePath('hslider_tracks.png');};}.hslider_track_left{left:10px;width:4px;background-position:0 0;}.hslider_track_right{right:10px;width:4px;background-position:-4px 0;}.hslider_track{left:14px;right:14px;background-position:0 -14px;}.disabled .hslider_track_left{background-position:0 -7px;}.disabled .hslider_track_right{background-position:-4px -7px;}.disabled .hslider_track{background-position:0 -21px;}.hslider_thumb{position:absolute;top:0;height:21px;width:21px;font-size:0;background-position:0 0;background-image:#{this.getCssFilePath('slider_thumbs.png');};}.hslider_thumb:active{background-position:0 -22px;}.disabled .hslider_thumb{background-position:0 -44px;}.hslider_thumb_n,.hslider_thumb_s,.hslider_thumb_e,.hslider_thumb_w{position:absolute;top:0;height:21px;width:21px;background-image:#{this.getCssFilePath('slider_thumbs.png');};}.hslider_thumb_e,.hslider_thumb_w{left:0;}.hslider_thumb_n{background-position:-22px 0;}.hslider_thumb_n:active{background-position:-22px -22px;}.disabled .hslider_thumb_n{background-position:-22px -44px;}.hslider_thumb_s{background-position:-44px 0;}.hslider_thumb_s:active{background-position:-44px -22px;}.disabled .hslider_thumb_s{background-position:-44px -44px;}.hslider_thumb_w{background-position:-66px 0;}.hslider_thumb_w:active{background-position:-66px -22px;}.disabled .hslider_thumb_w{background-position:-66px -44px;}.hslider_thumb_e{background-position:-88px 0;}.hslider_thumb_e:active{background-position:-88px -22px;}.disabled .hslider_thumb_e{background-position:-88px -44px;}\n.vslider_track_top,.vslider_track_bottom,.vslider_track{position:absolute;width:7px;left:7px;font-size:0;background-image:#{this.getCssFilePath('vslider_tracks.png');};}.vslider_track_top{top:10px;height:4px;background-position:0 0;}.vslider_track_bottom{bottom:10px;height:4px;background-position:0 -4px;}.vslider_track{top:14px;bottom:14px;background-position:-14px 0;}.disabled .vslider_track_top{background-position:-7px 0;}.disabled .vslider_track_bottom{background-position:-7px -4px;}.disabled .vslider_track{background-position:-21px 0;}.vslider_thumb{position:absolute;font-size:0;left:0;width:21px;height:21px;background-position:0 0;background-image:#{this.getCssFilePath('slider_thumbs.png');};}.vslider_thumb:active{background-position:0 -22px;}.disabled .vslider_thumb{background-position:0 -44px;}\n.stepper_state{position:absolute;left:0;top:0;width:15px;height:23px;background-position:0 0;background-repeat:no-repeat;background-image:#{this.getCssFilePath('stepper.png');};}.disabled .stepper_state{background-position:0 -69px;}\n.stringview{color:#333;padding:1px;font-size:12px;font-family:Arial,sans-serif;overflow-y:visible;}\n.tab_label{position:absolute;top:0;left:0 right:0;height:24px;cursor:pointer;}.tab_label .item-fg,.tab_label .item-bg{position:absolute;top:0;height:24px;background-repeat:repeat-x;}.tab_label,.tab_label .edge-left,.tab_label .edge-right,.tab_label .tablabel,.tab_label_fill_bg{background-repeat:no-repeat;background-image:#{this.getCssFilePath('tab_parts1.png');};}.tab_label_fill_bg{position:absolute;top:0;left:0;right:0;height:24px;background-position:0 -96px;background-repeat:repeat-x;}.tab_label .edge-left{position:absolute;top:0;left:0;width:12px;height:24px;background-position:0 0;}.tab_label .item-bg .edge-left{background-position:-24px 0;}.tab_label .edge-right{position:absolute;top:0;right:0;width:9px;height:24px;background-position:-12px 0;}.tab_label .item-bg .edge-right{background-position:-36px 0;}.tab_label .tablabel{position:absolute;top:0;left:12px;right:9px;height:24px;background-position:0 -24px;background-repeat:repeat-x;vertical-align:middle;text-align:center;color:#000;line-height:26px;overflow:hidden;text-align:center;vertical-align:middle;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;color:#333;}.tab_label .item-bg .tablabel{background-position:0 -48px;color:#666;}.tab_bg{position:absolute;top:24px;left:0;right:0;bottom:0;background-image:#{this.getCssFilePath('tab_border_pattern.png');};}.tab_fg{position:absolute;top:0;left:1px;right:1px;bottom:1px;background-image:#{this.getCssFilePath('tab_bg_color.png');};}\n.default .textarea_input{position:absolute;display:block;font-family:Arial,sans-serif;font-size:13px;color:#000;background-color:transparent;vertical-align:middle;border:0;left:0;top:0;#{(BROWSER_TYPE.firefox||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8||BROWSER_TYPE.ie9||BROWSER_TYPE.opera)?'padding:0;padding-left:2px;width:100%!important;height:100%!important;':BROWSER_TYPE.ie6?'right:2px;bottom:2px;':'padding:2px;right:0;bottom:0;width:auto;height:auto;';}}.default .disabled .textarea_input{#{(BROWSER_TYPE.safari||BROWSER_TYPE.chrome)?'color:#ccc;':'color:#999';}}.default .textarea_input:focus{outline-color:transparent;outline-style:none;}.default .textarea_input_parent{position:absolute;#{(BROWSER_TYPE.firefox||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8||BROWSER_TYPE.ie9||BROWSER_TYPE.opera)?'left:0;padding-left:1px;top:1px;right:3px;bottom:1px;':BROWSER_TYPE.ie?'left:2px;top:1px;right:1px;bottom:1px;':'left:-2px;top:-2px;right:-2px;bottom:-2px;';}}\n.default .textcontrol_input{position:absolute;display:block;font-family:Arial,sans-serif;font-size:13px;color:#000;background-color:transparent;vertical-align:middle;border:0;left:0;top:0;#{(BROWSER_TYPE.firefox||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8||BROWSER_TYPE.opera)?'padding-left:2px;width:100%!important;height:90%!important;':BROWSER_TYPE.ie6?'right:4px;bottom:2px;':'padding:2px;right:0;bottom:0;width:auto;height:auto;';}}.default .textcontrol_input:focus{outline-color:transparent;outline-style:none;}.default .disabled .textcontrol_input{color:#ccc;}.default .textcontrol_input_parent{position:absolute;#{(BROWSER_TYPE.firefox||BROWSER_TYPE.ie7||BROWSER_TYPE.ie8||BROWSER_TYPE.ie9||BROWSER_TYPE.opera)?'left:0;padding-left:1px;top:0;right:4px;bottom:0;':BROWSER_TYPE.ie6?'left:2px;top:1px;right:1px;bottom:1px;':'left:-2px;top:-2px;right:-2px;bottom:-2px;';}}.default .textcontrol_bg{position:absolute;left:2px;top:2px;right:2px;bottom:2px;background-color:#fff;#{BROWSER_TYPE.ie6?'font-size:0;line-height:0;':'';}}.default .active>.textcontrol_bg{left:0;top:0;right:0;bottom:0;-moz-box-shadow:0 0 3px #333;-webkit-box-shadow:0 0 3px #333;box-shadow:0 0 3px #333;}.default .disabled .textcontrol_bg{background-color:#eee;}.default .textcontrol_ne,.default .textcontrol_nw,.default .textcontrol_se,.default .textcontrol_sw{position:absolute;width:7px;height:7px;background-repeat:no-repeat;background-image:#{this.getCssFilePath('textcontrol_parts1.png');};#{BROWSER_TYPE.ie6?'font-size:0;line-height:0;':'';}}.default .textcontrol_nw{left:0;top:0;background-position:0 0;}.default .textcontrol_ne{right:0;top:0;background-position:-7px 0;}.default .textcontrol_sw{left:0;bottom:0;background-position:0 -7px;}.default .textcontrol_se{right:0;bottom:0;background-position:-7px -7px;}.default .textcontrol_w,.default .textcontrol_e{position:absolute;width:7px;top:7px;bottom:7px;background-repeat:repeat-y;background-image:#{this.getCssFilePath('textcontrol_parts3.png');};#{BROWSER_TYPE.ie6?'font-size:0;line-height:0;':'';}}.default .textcontrol_w{left:0;background-position:0 0;}.default .textcontrol_e{right:0;background-position:-7px 0;}.default .textcontrol_n,.default .textcontrol_s{position:absolute;height:7px;left:7px;right:7px;background-repeat:repeat-x;background-image:#{this.getCssFilePath('textcontrol_parts2.png');};#{BROWSER_TYPE.ie6?'font-size:0;line-height:0;':'';}}.default .textcontrol_n{top:0;background-position:0 0;}.default .textcontrol_s{bottom:0;background-position:0 -7px;}\n.uploader_iframe{visibility:hidden;width:0;height:0;border-width:0;}.uploader_form{visibility:hidden;position:absolute;display:block;left:0;top:0;right:0;bottom:0;cursor:pointer;}.uploader_file_wrap{position:absolute;left:-350px;top:0;bottom:0;right:0;line-height:200px;font-size:200px;}.uploader_file{position:absolute;right:0;top:0;display:block;line-height:200px;font-size:200px;width:1000px;height:200px;-moz-opacity:0;filter:alpha(opacity:0);opacity:.0;text-align:right;cursor:pointer;z-index:100;}.uploader_file:hover{background-color:#ff0;}.ack_button{visibility:hidden;left:auto;right:0;width:48px;}.upload_progress{visibility:hidden;position:absolute;left:0;top:0;right:0;height:24px;font-family:Arial,sans-serif;line-height:24px;vertical-align:middle;font-size:12px;color:#333;}.upload_progress .progress_label{position:absolute;left:8px;top:0;height:24px;right:8px;line-height:24px;vertical-align:middle;}.upload_progress .progress_indicator{position:absolute;right:0;top:4px;width:16px;height:16px;background-image:#{this.getCssFilePath('upload_progress.gif');};}.disabled>.uploader>.button_control>.button_edge_left{background-position:0 -144px;}.enabled>.uploader:hover>.button_control>.button_edge_left{background-position:0 -48px;}.enabled>.uploader:active>.button_control>.button_edge_left{background-position:0 -96px;}.disabled>.uploader>.button_control>.button_edge_right{background-position:-24px -144px;}.enabled>.uploader:hover>.button_control>.button_edge_right{background-position:-24px -48px;}.enabled>.uploader:active>.button_control>.button_edge_right{background-position:-24px -96px;}.disabled>.uploader>.button_control>.button_center{background-position:0 -168px;}.enabled>.uploader:hover>.button_control>.button_center{background-position:0 -72px;}.enabled>.uploader:active>.button_control>.button_center{background-position:0 -120px;}.disabled>.uploader>.button_control>.button_label{color:#999;}.enabled>.uploader:hover>.button_control>.button_label{color:#000;}.enabled>.uploader:active>.button_control>.button_label{color:#000;}\n\n.window_shadow,.window_titlebar,.window_titlebar_edge_left,.window_titlebar_center,.window_titlebar_edge_right,.window_bg,.window_body,.window_body_edge_left,.window_body_edge_right,.window_body_corner_left,.window_body_corner_right,.window_body_edge_bottom,.window_label,.window_controls,.window_subview,.window_controls_close,.window_controls_collapse,.window_controls_zoom{position:absolute;display:block;overflow:hidden;cursor:inherit;background-repeat:no-repeat;}.window_bg,.window_body{opacity:.95;}.window_titlebar{opacity:.97;}.inactive .window_titlebar{opacity:.95;}.window_shadow{left:4px;right:4px;top:4px;bottom:4px;overflow:visible;-moz-box-shadow:3px 3px 20px #333,3px 3px 10px #000;-webkit-box-shadow:3px 3px 20px #333,3px 3px 10px #000;box-shadow:3px 3px 20px #333,3px 3px 10px #000;}.inactive .window_shadow{-moz-box-shadow:3px 3px 13px #333;-webkit-box-shadow:3px 3px 13px #333;box-shadow:3px 3px 13px #333;}.window_controls *{cursor:pointer;}.window_titlebar{left:0;top:0;height:24px;min-width:96px;right:0;}.window_titlebar *{background-image:#{this.getCssFilePath('window_parts1.png');};}.window_titlebar_edge_left{left:0;top:0;width:24px;height:24px;background-position:0 0;}.inactive .window_titlebar_edge_left{background-position:0 -48px;}.window_titlebar_edge_right{right:0;top:0;width:24px;height:24px;background-position:-24px 0;}.inactive .window_titlebar_edge_right{right:0;top:0;width:24px;height:24px;background-position:-24px -48px;}.window_titlebar_center{left:24px;top:0;right:24px;height:24px;background-position:0 0;background-repeat:repeat-x;background-image:#{this.getCssFilePath('window_parts2.png');};}.inactive .window_titlebar_center{background-position:0 -48px;}.window_bg{left:24px;top:24px;right:24px;bottom:24px;background-repeat:repeat;background-image:#{this.getCssFilePath('window_bg_active.png');};}.inactive .window_bg{background-image:#{this.getCssFilePath('window_bg_inactive.png');};}.window_body{left:0;top:24px;right:0;bottom:0;}.window_body *{background-image:#{this.getCssFilePath('window_parts1.png');};}.window_body_edge_left{left:0;top:0;bottom:24px;width:24px;background-repeat:repeat-y;background-position:-72px 0;}.inactive .window_body_edge_left{background-position:-120px 0;}.window_body_edge_right{right:0;top:0;bottom:24px;width:24px;background-repeat:repeat-y;background-position:-96px 0;}.inactive .window_body_edge_right{background-position:-144px 0;}.window_body_corner_left{left:0;bottom:0;height:24px;width:24px;background-position:0 -24px;}.inactive .window_body_corner_left{background-position:0 -72px;}.window_body_corner_right{right:0;bottom:0;height:24px;width:24px;background-position:-24px -24px;}.inactive .window_body_corner_right{background-position:-24px -72px;}.window_body_edge_bottom{left:24px;bottom:0;right:24px;height:24px;background-repeat:repeat-x;background-position:0 -24px;background-image:#{this.getCssFilePath('window_parts2.png');};}.inactive .window_body_edge_bottom{background-position:0 -72px;}.window_label{left:0;top:0;right:0;height:24px;line-height:26px;text-align:center;vertical-align:middle;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;color:#000;}.inactive .window_label{color:#666;}.window_controls{left:0;top:0;right:0;bottom:0;}.window_subview{left:2px;top:26px;right:2px;bottom:2px;}.window_resize_se{position:absolute;right:0;bottom:0;width:13px;height:13px;cursor:se-resize;z-index:10000;background-position:-59px -35px;font-size:0;background-image:#{this.getCssFilePath('window_parts1.png');};}.inactive .window_resize_se{background-position:-59px -83px;}.window_controls_close,.window_controls_collapse,.window_controls_zoom{top:6px;width:15px;height:15px;background-image:#{this.getCssFilePath('window_buttons.png');};}.window_controls_close{#{BROWSER_TYPE.mac?'left':'right';}:8px;background-position:0 0;}.window_controls:hover .window_controls_close{background-position:0 -15px;}.window_controls:hover .window_controls_close:active{background-position:0 -30px;}.window_controls_collapse{#{BROWSER_TYPE.mac?'left:27px':'right:46px';};background-position:-30px 0;}.window_controls:hover .window_controls_collapse{background-position:-30px -15px;}.window_controls:hover .window_controls_collapse:active{background-position:-30px -30px;}.window_controls_zoom{#{BROWSER_TYPE.mac?'left:46px':'right:27px';};background-position:-15px 0;}.window_controls:hover .window_controls_zoom{background-position:-15px -15px;}.window_controls:hover .window_controls_zoom:active{background-position:-15px -30px;}\n.calendar_control{position:absolute;left:0;top:0;right:0;bottom:0;}.calendar_head{position:absolute;left:0;top:0;right:0;height:20px;}.calendar_head_prev_month,.calendar_head_next_month{position:absolute;top:2px;width:16px;height:16px;font-size:0;line-height:0;cursor:pointer;background-image:#{this.getCssFilePath('calendar_arrows.png');};}.calendar_head_prev_month{background-position:0 0;left:2px;}.calendar_head_next_month{background-position:-16px 0;right:2px;}.calendar_head_prev_month:hover{background-position:0 -16px;}.calendar_head_next_month:hover{background-position:-16px -16px;}.calendar_head_prev_month:active,.calendar_head_next_month:active{background-color:#fff;}.calender_head_month_year{position:absolute;top:0;left:20px;right:20px;height:20px;color:#000;font-family:Arial,sans-serif;font-weight:bold;font-size:13px;line-height:20px;vertical-align:middle;text-align:center;}.calendar_weekdays{position:absolute;top:20px;left:0;right:0;height:15px;}.calendar_weekdays div{position:absolute;top:0;height:15px;width:25px;color:#000;font-family:Arial,sans-serif;font-size:11px;line-height:16px;vertical-align:middle;text-align:center;}.calendar_weeks{position:absolute;top:34px;left:0;right:2px;bottom:2px;}.calendar_weeks_week_row{position:absolute;left:0;right:0;}.calendar_weeks_week_col_no,.calendar_weeks_week_col_sel,.calendar_weeks_week_col_wk,.calendar_weeks_week_col_yes{position:absolute;text-decoration:none;top:0;font-family:Arial,sans-serif;font-size:15px;vertical-align:middle;text-align:center;cursor:pointer;}.calendar_weeks_week_col_wk{color:#000;cursor:default;}.calendar_weeks_week_col_no{color:#666;}.calendar_weeks_week_col_no:hover{color:#000;}.calendar_weeks_week_col_yes,.calendar_weeks_week_col_sel{color:#000;background-color:#ddd;font-weight:bold;border:1px solid #666;}.calendar_weeks_week_col_sel,.calendar_weeks_week_col_yes:hover{background-color:#fff;}.calendar_bg{position:absolute;left:-1px;right:-1px;top:-1px;bottom:-2px;}.calendar_bg *{position:absolute;font-size:0;line-height:0;}.disabled>.calendar_bg{opacity:.9;}.calendar_bg .calendar_nw,.calendar_bg .calendar_n,.calendar_bg .calendar_ne,.calendar_bg .calendar_sw,.calendar_bg .calendar_s,.calendar_bg .calendar_se{height:12px;background-image:#{this.getCssFilePath('calendar_parts1.png');};}.calendar_bg .calendar_c{left:12px;right:12px;top:12px;bottom:12px;background-color:#fbfafb;}.calendar_bg .calendar_w,.calendar_bg .calendar_e{top:12px;bottom:12px;width:12px;background-image:#{this.getCssFilePath('calendar_parts2.png');};}.calendar_bg .calendar_n,.calendar_bg .calendar_s{left:12px;right:12px;}.calendar_bg .calendar_nw,.calendar_bg .calendar_ne,.calendar_bg .calendar_sw,.calendar_bg .calendar_se{width:12px;}.calendar_bg .calendar_nw,.calendar_bg .calendar_n,.calendar_bg .calendar_ne{top:0;}.calendar_bg .calendar_sw,.calendar_bg .calendar_s,.calendar_bg .calendar_se{bottom:0;}.calendar_bg .calendar_nw,.calendar_bg .calendar_w,.calendar_bg .calendar_sw{left:0;}.calendar_bg .calendar_ne,.calendar_bg .calendar_e,.calendar_bg .calendar_se{right:0;}.calendar_bg .calendar_nw{background-position:0 0;}.calendar_bg .calendar_n{background-position:0 -24px;}.calendar_bg .calendar_ne{background-position:-12px 0;}.calendar_bg .calendar_sw{background-position:0 -12px;}.calendar_bg .calendar_s{background-position:0 -36px;}.calendar_bg .calendar_se{background-position:-12px -12px;}.calendar_bg .calendar_w{background-position:0 0;}.calendar_bg .calendar_e{background-position:-12px 0;}\n.timesheet_label,.timesheet_items,.timesheet_timeline,.timesheet_timeline_hour,.timesheet_timeline_line,.timesheet_timeline_notch{position:absolute;}.timesheet_label,.timesheet_items,.timesheet_timeline{font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#000;vertical-align:middle;text-align:left;}.timesheet_label{left:33px;top:0;right:0;height:16px;font-size:15px;}.timesheet_timeline{left:0;top:0;right:0;bottom:0;cursor:move;}.timesheet_timeline_hour{left:0;width:26px;text-align:right;height:14px;}.timesheet_timeline_line{left:31px;right:3px;height:1px;background-color:#bbb;}.timesheet_timeline_notch{left:31px;right:3px;height:1px;background-color:#ddd;}.timesheet_items{left:29px;top:19px;right:1px;bottom:11px;border:1px solid #ccc;border-radius:3px;}.nohours .timesheet_timeline_notch,.nohours .timesheet_timeline_line{left:2px;}.nohours .timesheet_timeline_hour{display:none;}.nohours .timesheet_label{left:4px;}.nohours .timesheet_items{left:0;}\n.timesheet_item,.timesheet_item_middle,.timesheet_item_label,.timesheet_item_resize_top,.timesheet_item_move,.timesheet_item_time,.timesheet_item_icons,.timesheet_item_resize_bottom{position:absolute;left:0;right:0;}.timesheet_item{top:0;bottom:0;border:1px solid #ccc;border-radius:7px;opacity:.75;}.timesheet_item_time,.timesheet_item_label{font-size:12px;color:#333;font-family:Helvetica,Arial,sans-serif;}.timesheet_item_time{top:0;height:12px;line-height:12px;text-indent:4px;padding-top:2px;font-weight:bold;}.active>.timesheet_item .timesheet_item_time{border-radius:7px 7px 0 0;border-bottom:1px solid #000;}.active>.timesheet_item{border-color:#000;opacity:1;}.timesheet_item_middle{top:50%;height:0;overflow:visible;}.timesheet_item_label{text-align:center;opacity:1;top:-6px;height:12px;}.timesheet_item_resize_top{top:0;height:6px;cursor:n-resize;}.timesheet_item_move{top:6px;bottom:6px;cursor:move;}.timesheet_item_resize_bottom{bottom:0;height:6px;cursor:s-resize;}.timesheet_item_icons{top:0;height:16px;}.timesheet_item_icon{position:absolute;top:0;width:16px;height:16px;background-position:0 0;background-image:url(#{this.getThemeGfxFile('/timesheet_item_icons.png');});}.locked .timesheet_item_move,.locked .timesheet_item_resize_bottom,.locked .timesheet_item_resize_top{cursor:pointer;}\n\n.menuitem_control,.menuitem_label,.menuitem_state{position:absolute;top:0;height:24px;}.menuitem_control{left:0;right:0;cursor:pointer;}.menuitem_control:hover{background-color:#fff;}.menuitem_state{left:4px;top:7px;height:12px;width:12px;background-image:#{this.getCssFilePath('minimenuitem_checkmark.png');};}.checked .menuitem_state{visibility:inherit;}.unchecked .menuitem_state{visibility:hidden;}.menuitem_label{left:20px;right:11px;top:0;height:24px;line-height:24px;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;font-family:Arial,sans-serif;font-size:12px;color:#333;}.menuitem_label:hover{color:#000;}.disabled .menuitem_control{opacity:.8;}\n.minimenu_control,.minimenu_edge_left,.minimenu_center,.minimenu_edge_right,.minimenu_label,.minimenu_antiselect{position:absolute;top:0;height:15px;}.minimenu_control{left:0;right:0;cursor:pointer;}.disabled .minimenu_control{cursor:default;}.minimenu_edge_left,.minimenu_center,.minimenu_edge_right{background-image:#{this.getCssFilePath('minimenu.png');};}.minimenu_edge_left{left:0;width:7px;background-position:0 0;}.minimenu_edge_right{right:0;width:13px;background-position:-7px 0;}.minimenu_center{left:7px;right:13px;background-position:0 -15px;background-repeat:repeat-x;}.minimenu_label{left:6px;right:11px;top:0;height:15px;line-height:15px;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;font-family:Arial,sans-serif;font-size:11px;color:#333;}.minimenu_control:hover>.minimenu_label{color:#000;}.disabled .minimenu_control{opacity:.8;}.minimenu_antiselect{left:0;right:0;}\n.minimenuitem_control,.minimenuitem_label,.minimenuitem_state{position:absolute;top:0;height:16px;}.minimenuitem_control{left:0;right:0;cursor:pointer;}.minimenuitem_control:hover{background-color:#fff;}.minimenuitem_state{left:0;top:1px;height:12px;width:12px;background-image:#{this.getCssFilePath('minimenuitem_checkmark.png');};}.checked .minimenuitem_state{visibility:inherit;}.unchecked .minimenuitem_state{visibility:hidden;}.minimenuitem_label{left:14px;right:11px;top:0;height:15px;line-height:14px;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;font-family:Arial,sans-serif;font-size:11px;color:#333;}.minimenuitem_label:hover{color:#000;}.disabled .minimenuitem_control{opacity:.8;}\n.popupmenu_control,.popupmenu_edge_left,.popupmenu_center,.popupmenu_edge_right,.popupmenu_label,.popupmenu_antiselect{position:absolute;top:0;height:23px;}.popupmenu_control{left:0;right:0;cursor:pointer;}.disabled .popupmenu_control{cursor:default;}.popupmenu_edge_left,.popupmenu_center,.popupmenu_edge_right{background-image:#{this.getCssFilePath('popupmenu.png');};}.popupmenu_edge_left{left:0;width:9px;background-position:0 0;background-repeat:no-repeat;}.popupmenu_edge_right{right:0;width:17px;background-position:-9px 0;background-repeat:no-repeat;}.popupmenu_center{left:9px;right:17px;background-position:0 -23px;background-repeat:repeat-x;}.popupmenu_label{left:13px;right:11px;top:0;height:22px;line-height:#{(BROWSER_TYPE.ie7||BROWSER_TYPE.ie6)?'20':'22';}px;text-align:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;vertical-align:middle;font-family:Arial,sans-serif;font-size:12px;color:#333;}.popupmenu_control:hover>.popupmenu_label{color:#000;}.disabled .popupmenu_control{opacity:.6;}.popupmenu_antiselect{left:0;right:0;}\n");});var
HButton=HControl.extend({componentName:'button',setStyle:function(_l,_2){ELEM.setStyle(this.markupElemIds.label,_l,_2);return this;}});var
HClickButton=HButton.extend({defaultEvents:{click:true},controlDefaults:HControlDefaults.extend({clickOnValue:1,clickOffValue:0}),refreshValue:function(){if(this.options.inverseValue){this.setEnabled(this.value===this.options.clickOnValue);}
else{this.setEnabled(this.value===this.options.clickOffValue);}},click:function(){if(this.enabled){if(this.options.inverseValue){this.setValue(this.options.clickOffValue);}
else{this.setValue(this.options.clickOnValue);}}}});var
HClickValueButton=HClickButton;var
HCheckbox=HButton.extend({componentName:'checkbox',defaultEvents:{click:true},click:function(){this.setValue(!this.value);},setStyle:function(_l,_2,_H9){this.setStyleOfPart('label',_l,_2,_H9);},refreshValue:function(){if(this.markupElemIds.control){if(this.value){this.toggleCSSClass(this.markupElemIds.control,'checked',true);this.toggleCSSClass(this.markupElemIds.control,'unchecked',false);}
else{this.toggleCSSClass(this.markupElemIds.control,'checked',false);this.toggleCSSClass(this.markupElemIds.control,'unchecked',true);}}}});var
HCheckBox=HCheckbox;var
HRadioButton=HCheckbox.extend(HValueMatrixInterface);HRadioButton.prototype.componentName='radiobutton';var
HRadiobutton=HRadioButton;var
HStringView=HControl.extend({componentName:"stringview",defaultEvents:{contextMenu:true},contextMenu:function(){return true;},setStyle:function(_l,_2,_T1){if(!this['markupElemIds']||!this.markupElemIds['value']){return this;}
ELEM.setStyle(this.markupElemIds.value,_l,_2,_T1);return this;},refreshLabel:function(){if(this.markupElemIds){if(this.markupElemIds.value){ELEM.setAttr(this.markupElemIds.value,'title',this.label);}}}});var
HTextControl=HControl.extend({componentName:"textcontrol",defaultEvents:{textEnter:true,contextMenu:true},controlDefaults:(HControlDefaults.extend({refreshOnBlur:true,refreshOnInput:true,focusOnCreate:false})),drawSubviews:function(){ELEM.setStyle(this.elemId,'overflow','visible');this.base();if(this.options.focusOnCreate){this.getInputElement().focus();if(typeof this.value==='string'){this.setSelectionRange(this.value.length,this.value.length);}}},contextMenu:function(){return true;},refreshLabel:function(){if(this['markupElemIds']!==undefined){if(this.markupElemIds['label']!==undefined){ELEM.setAttr(this.markupElemIds.label,'title',this.label);}}},lostActiveStatus:function(){if(this['markupElemIds']!==undefined){ELEM.get(this.markupElemIds.value).blur();this.textBlur();}},setStyle:function(_l,_2,_T1){if(!this['markupElemIds']||!this.markupElemIds['value']){return;}
this.setStyleOfPart('value',_l,_2,_T1);},setEnabled:function(_8){this.base(_8);if(this['markupElemIds']&&this.markupElemIds.value){ELEM.get(this.markupElemIds.value).disabled=!this.enabled;}},hasTextFocus:false,_I9:function(){var _0=this;return function(e){if(_0._U2){clearTimeout(this._U2);}
_0._U2=setTimeout(function(){_0.clipboardEvent();},200);return true;};},_l5:function(){this.setValue(this.validateText(this.getTextFieldValue()));},_U2:null,clipboardEvent:function(){this._l5();clearTimeout(this._U2);this._U2=null;},_81:null,_k5:function(){if(this._81){Event.stopObserving(ELEM.get(this.markupElemIds.value),'paste',this._81);Event.stopObserving(ELEM.get(this.markupElemIds.value),'cut',this._81);this._81=null;}},_K9:function(){if(this._81){this._k5();}
this._81=this._I9();Event.observe(ELEM.get(this.markupElemIds.value),'paste',this._81);Event.observe(ELEM.get(this.markupElemIds.value),'cut',this._81);},textFocus:function(){EVENT.changeActiveControl(this);this.hasTextFocus=true;this._K9();return true;},textBlur:function(){this.hasTextFocus=false;this._k5();this._l5();if(this.options.refreshOnBlur){this.refreshValue();}
return true;},onIdle:function(){this.hasTextFocus&&this._l5();try{this.base();}
catch(e){console.error('HTextControl::onIdle error -> ',e);debugger;this.base();}},refreshValue:function(){this.setTextFieldValue(this.value);},validateText:function(_2){return _2;},getInputElement:function(){if(this.markupElemIds&&this.markupElemIds.value){return ELEM.get(this.markupElemIds.value);}
return null;},getTextFieldValue:function(){var _M=this.getInputElement();if(_M===null){return'';}
return _M.value;},setTextFieldValue:function(_2){var _M=this.getInputElement(),_C6=this.getSelectionRange();if(_M===null){return;}
if(_M.value!==String(_2)){_M.value=_2;}
this.setSelectionRange(_C6[0],_C6[1]);},_D6:function(){return'---'+Math.round((1+Math.random())*10000)+'---';},die:function(){if(this.hasTextFocus){this.getInputElement().blur();}
this._k5();this.base();},getSelectionRange:function(){var _M=this.getInputElement();if(_M===null||this.hasTextFocus===false){return[0,0];}
if(document.selection){var
_c1=document.selection.createRange(),_E6=_c1.text,_O9=_E6.length,_P9=_M.value.replace(/\r\n/g,"\n"),_F6,_R9,_j5,_T2=this._D6();while(_P9.indexOf(_T2)!==-1){_T2=this._D6();}
_R9=_T2.length;_c1.text=_T2;_F6=_M.value.replace(/\r\n/g,"\n");_c1.text=_E6;_j5=_F6.indexOf(_T2);return[_j5,_j5+_O9];}
else if(_M.selectionStart){return[_M.selectionStart,_M.selectionEnd];}
else{return[0,0];}},setSelectionRange:function(_U0,_y1){if(_U0 instanceof Array){_y1=_U0[1];_U0=_U0[0];}
if(_y1===undefined){_y1=_U0;}
var _M=this.getInputElement();if(_M===null||this.hasTextFocus===false){return;}
if(_M.createTextRange){var _c1=_M.createTextRange();_c1.move('character',_U0,_y1);_c1.select();}
else if(_M.selectionStart){_M.setSelectionRange(_U0,_y1);}},textEnter:function(){this.setValue(this.validateText(this.getTextFieldValue()));if(this.options.refreshOnInput){this.refreshValue();}
return false;}});var
HNumericTextControl=HTextControl.extend({defaultEvents:{mouseWheel:true,textEnter:true,contextMenu:true},mouseWheel:function(_90){var _2=this.value;_2=_2-((_90<0)?1:-1);this.setValue(Math.round(this.validateText(_2)));},validateText:function(_2){if(this.options.decimalNumber){_2=parseFloat(_2);}
else{_2=parseInt(_2,10);}
if(isNaN(_2)){_2=this.value;}
if(_2>this.options.maxValue){_2=this.options.maxValue;}
else if(_2<this.options.minValue){_2=this.options.minValue;}
return _2;}});var
HPasswordControl=HTextControl.extend({componentName:'passwordcontrol'});var
HTextArea=HTextControl.extend({componentName:"textarea"});var HSearchField;HSearchField=HTextControl.extend({componentName:'searchfield'});HLocale.components.HUploader={strings:{stateLabels:{'0':"Select file...",'1':"Uploading...",'2':"Processing data...",'3':"Upload Complete",'4':"Preparing upload",'-1':"Error: Invalid request",'-2':"Error: Invalid upload key",'-3':"Error: Invalid data format",'-4':"Error: File too big",'-6':"Error: Post-processing failed"}}};var
HUploader=HControl.extend({componentName:'uploader',uploadState:false,uploadKey:false,markupElemNames:['form','file','iframe','upload_progress','progress_label','progress_indicator','button','button_label','value','ack_button'],setUploadState:function(_s,_R2){if(_s!==this.uploadState){this.uploadState=_s;var
_h5=_s.toString(),_G6=HLocale.components.HUploader.strings.stateLabels,_h;if(_G6[_h5]!==undefined){ELEM.get(this.markupElemIds.value).value=this.valueObj.id;_h=_G6[_h5];if(_s===0){ELEM.setStyle(this.markupElemIds.upload_progress,'visibility','hidden');ELEM.setStyle(this.markupElemIds.progress_indicator,'visibility','hidden');ELEM.setStyle(this.markupElemIds.ack_button,'visibility','hidden');ELEM.setHTML(this.markupElemIds.button_label,_h);ELEM.setStyle(this.markupElemIds.button,'visibility','inherit');ELEM.setStyle(this.markupElemIds.form,'visibility','inherit');ELEM.setAttr(this.markupElemIds.form,'action','/U/'+_R2,true);ELEM.get(this.markupElemIds.file).value='';this.uploadKey=_R2;}
else if(_s===1||_s===2||_s===3||_s===4){ELEM.setStyle(this.markupElemIds.upload_progress,'visibility','inherit');if(_s===1||_s===2||_s===4){ELEM.setStyle(this.markupElemIds.progress_indicator,'visibility','inherit');ELEM.setStyle(this.markupElemIds.ack_button,'visibility','hidden');}
else{ELEM.setStyle(this.markupElemIds.progress_indicator,'visibility','hidden');ELEM.setStyle(this.markupElemIds.ack_button,'visibility','inherit');}
ELEM.setHTML(this.markupElemIds.progress_label,_h);ELEM.setStyle(this.markupElemIds.button,'visibility','hidden');ELEM.setStyle(this.markupElemIds.form,'visibility','hidden');if(_s===1){ELEM.get(this.markupElemIds.form).submit();}}
else if(_s<0){ELEM.setStyle(this.markupElemIds.progress_indicator,'visibility','hidden');ELEM.setStyle(this.markupElemIds.ack_button,'visibility','inherit');ELEM.setHTML(this.markupElemIds.progress_label,'<span style="color:red;">'+_h+'</span>');ELEM.setStyle(this.markupElemIds.button,'visibility','hidden');ELEM.setStyle(this.markupElemIds.form,'visibility','hidden');}}}},refreshValue:function(){if(typeof this.value!=='string'){return;}
if(this.value.indexOf(':::')<1){return;}
var _g5=this.value.split(':::');if(_g5.length!==2){return;}
var _s=parseInt(_g5[0],10),_R2=_g5[1];this.setUploadState(_s,_R2);},upload:function(){this.setValue('1:::'+this.uploadKey);},getNewUploadKey:function(){this.setValue('4:::'+this.uploadKey);},click:function(){if((this.uploadState===3)||(this.uploadState<0)){this.getNewUploadKey();}}});var
HSlider=HControl.extend({componentName:"slider",defaultEvents:{draggable:true,keyDown:'repeat',keyUp:true,mouseWheel:true},controlDefaults:(HControlDefaults.extend({minValue:0,maxValue:1,roundValue:false,inverseAxis:false})),refreshOnValueChange:false,_n0:false,setValue:function(_2){if(_2<this.minValue){_2=this.minValue;}
if(_2>this.maxValue){_2=this.maxValue;}
if(this.options.roundValue){this.base(Math.round(_2));}
else{this.base(_2);}
if(this._H6){this.drawThumbPos();}
return this;},draw:function(){if(!this.drawn){this.drawRect();this.drawMarkup();this._W9();}
this.refresh();},startDrag:function(_r,_K){var _I6=ELEM.getVisiblePosition(this.elemId,true);this._Y9=_I6[0];this._f5=_I6[1];this.drag(_r,_K);},endDrag:function(_r,_K){this.drag(_r,_K);},drag:function(_r,_K){_r-=this._Y9;_K-=this._f5;var _Z9=this._n0?_K:_r,_2=this._0a(_Z9);this.setValue(_2);},keyDown:function(_10){if((_10===Event.KEY_LEFT&&!this._n0)||(_10===Event.KEY_DOWN&&this._n0)){this._z3(-0.05);}
else if((_10===Event.KEY_RIGHT&&!this._n0)||(_10===Event.KEY_UP&&this._n0)){this._z3(0.05);}
else if(_10===Event.KEY_HOME){this.setValue(this.minValue);}
else if(_10===Event.KEY_END){this.setValue(this.maxValue);}
else if(_10===Event.KEY_PAGEDOWN){this._z3(-0.25);}
else if(_10===Event.KEY_PAGEUP){this._z3(0.25);}
return true;},keyUp:function(_10){return true;},mouseWheel:function(_90){var _C1;if(_90>0){_C1=0.05;}
else{_C1=-0.05;}
if(this.options.inverseAxis){_C1=0-_C1;}
var _2=(this.maxValue-this.minValue)*_C1;this.setValue(this.value+_2);},_z3:function(_C1,_He){if(this.active){var _2=(this.maxValue-this.minValue)*_C1;this.setValue(this.value+_2);}},thumbSize:21,_W9:function(){this._H6=this.markupElemIds.control;this.drawThumbPos();},_3a:function(){var _y0;if(this._n0){_y0=this.rect.height-this.thumbSize;}else{_y0=this.rect.width-this.thumbSize;}
var _e5=_y0*((this.value-this.minValue)/(this.maxValue-this.minValue));if(this._n0){_e5=_y0-_e5;}
_5a=parseInt(_e5,10)+'px';return _5a;},_0a:function(_E1){var _y0;if(this._n0){_y0=this.rect.height-this.thumbSize;}else{_y0=this.rect.width-this.thumbSize;}
_E1-=(this.thumbSize/2);if(_E1<0){_E1=0;}
if(_E1>_y0){_E1=_y0;}
if(this._n0){return this.maxValue-((_E1/_y0)*(this.maxValue-this.minValue));}else{return this.minValue+((_E1/_y0)*(this.maxValue-this.minValue));}},drawThumbPos:function(){var _6a=this._n0?'top':'left',_7a=this._3a();ELEM.setStyle(this._H6,_6a,_7a);this.setOrientation(this.options['orientation']||this.prevOrientation);},prevOrientation:'c',cssClassPrefix:'h',setOrientation:function(_T0){if(!_T0){_T0='c';}
_T0=_T0.toLowerCase();if(_T0===this.prevOrientation){return;}
if(this['markupElemIds']===undefined){return;}
if(this.markupElemIds['control']===undefined){return;}
var _9a=this.toggleCSSClass,_p5=this.markupElemIds.control,_aa=['n','s','w','e','c'],_d5='',_J6='',_K6=this.cssClassPrefix,_ea=this._n0?'v':'',_L6=false,i=0;for(;i<5;i++){_d5=_aa[i];_L6=(_T0===_d5);_J6=(_T0==='c')?_K6+_ea+'slider_thumb':_K6+'slider_thumb_'+_d5;_9a(_p5,_J6,_L6);}
this.prevOrientation=_T0;}});var
HVSlider=HSlider.extend({componentName:"vslider",_n0:true});var
HProgressBar=HControl.extend({componentName:"progressbar",themeWidthInset:2,refreshValue:function(){if(this.drawn&&this.markupElemIds.value){var _fa=this.rect.width-this.themeWidthInset,_c5=Math.round(_fa*this.value);if(_c5<0){_c5=0;}
this.setStyleOfPart('value','width',_c5+'px');}},onIdle:function(){this.base();this.refreshValue();}});var
HProgressIndicator=HView.extend({_Z1:null,_b5:0,drawSubviews:function(){var _0=this,_1=_0.rect,_height=_1.height,_width=_1.width;_width-=2;_0.setStyle('border','1px solid #999');_0.setStyle('background-color','#ccc');_0['_1'+0]=HRect.nu(0,0,_height,_height);_0['_1'+1]=HRect.nu(_width-_height,0,_width,_height);_0._Z1=HView.nu(HRect.nu(_0['_1'+0]),_0);_0._Z1.setStyle('background-color','#333');_0._Z1.onAnimationEnd=function(){this.parent._M6();};_0._M6();},_M6:function(){this._b5=this._b5===1?0:1;var _ga=HRect.nu(this['_1'+this._b5]);this._Z1.animateTo(_ga);}});var
HImageView=HControl.extend({getImgSrc:function(){var _2=(this.value!==null)?this.value:(this.options.valueObj?this.options.valueObj.value:this.options.value);if(!_2){_2=this.getThemeGfxPath()+"/blank.gif";}
return _2;},controlDefaults:(HControlDefaults.extend({scaleToFit:true,value:null})),_N6:function(_n){this.elemId=ELEM.make(_n,'img',{attrs:[['src',this.getImgSrc()],['alt',this.label],['title',this.label]]});},_O6:function(_n){this.elemId=ELEM.make(_n,'div');ELEM.setStyle(this.elemId,'background-image','url('+this.getImgSrc()+')');ELEM.setStyle(this.elemId,'background-position','0px 0px');ELEM.setStyle(this.elemId,'background-repeat','no-repeat');ELEM.setAttr(this.elemId,'title',this.label);},_B6:function(_n){if(this.options.scaleToFit){this._N6(_n);}
else{this._O6(_n);}},refreshValue:function(){var _a5=this.getImgSrc();if(this.options.scaleToFit){if(ELEM.getAttr(this.elemId,'src')!==_a5){ELEM.setAttr(this.elemId,'src',_a5);}}
else{var _g='url('+this.getImgSrc()+')';if(ELEM.getStyle(this.elemId,'background-image')!=_g){ELEM.setStyle(this.elemId,'background-image',_g);}}},refreshLabel:function(){if(this.options.scaleToFit){ELEM.setAttr(this.elemId,'alt',this.label);}
ELEM.setAttr(this.elemId,'title',this.label);},scaleToFit:function(){if(!this.options.scaleToFit){ELEM.del(this.elemId);this._N6(this._I5());this.options.scaleToFit=true;}},scaleToOriginal:function(){if(this.options.scaleToFit){ELEM.del(this.elemId);this._O6(this._I5());this.options.scaleToFit=false;}}});var
HStepper=HControl.extend({componentName:"stepper",defaultEvents:{mouseDown:true,click:true,keyDown:true,mouseWheel:true},controlDefaults:(HControlDefaults.extend({minValue:0,maxValue:100,stepSize:1,repeatInterval:200,wrapAround:false})),setWrapAround:function(_ja){this.options.wrapAround=_ja;},_P6:function(_2){var _0=this,_3=_0.options,_Q6=_3.minValue,_R6=_3.maxValue,_S6=_2<_Q6,_na=_2>_R6,_m4=(_S6||_na);if(!_m4){return _2;}
if(_3.wrapAround){if(_S6){return _R6;}
else{return _Q6;}}
else{return _0.value;}},stepUp:function(){this.setValue(this._P6(this.value+this.options.stepSize));},stepDown:function(){this.setValue(this._P6(this.value-this.options.stepSize));},bgStateUp:'0px -23px',bgStateDown:'0px -46px',_oa:function(_62){ELEM.setStyle(this.markupElemIds.state,'background-position',_62?this.bgStateUp:this.bgStateDown);},_pa:function(){ELEM.setStyle(this.markupElemIds.state,'background-position','');},_O2:function(_62){var _0=this,_3=_0.options;_0._75&&clearInterval(_0._75);_0._oa(_62);_62?_0.stepUp():_0.stepDown();_0._75=setInterval(_62?function(){_0.stepUp();}:function(){_0.stepDown();},_3.repeatInterval);},_65:function(){this._pa();clearInterval(this._75);},mouseDown:function(x,y){this.setMouseUp(true);this._O2((y-ELEM.getVisiblePosition(this.elemId)[1])<=11);return true;},mouseUp:function(){this._65();return true;},click:function(){this.mouseUp();return true;},blur:function(){this._65();},keyDown:function(_v){this.setKeyUp(true);var _qa=(_v===Event.KEY_DOWN),_T6=(_v===Event.KEY_UP),_sa=(_v===Event.KEY_LEFT),_U6=(_v===Event.KEY_RIGHT),_ta=(_qa||_T6||_sa||_U6);if(_ta){this._O2((_T6||_U6));}
else if(_v===Event.KEY_HOME){this.setValue(this.options.minValue);}
else if(_v===Event.KEY_END){this.setValue(this.options.maxValue);}
else if(_v===Event.KEY_PAGEUP){this._O2(1);}
else if(_v===Event.KEY_PAGEDOWN){this._O2(0);}
return true;},keyUp:function(){this._65();return true;},mouseWheel:function(_90){(_90>0)?this.stepUp():this.stepDown();return true;}});var
HValidatorView=HControl.extend({controlDefaults:(HControlDefaults.extend({value:false,valueField:false})),setRect:function(_1){var _3=this.options;if(_3){if(_3.valueField){_1.offsetTo(_3.valueField.rect.right,_3.valueField.rect.top);}}
this.base(_1);},setValue:function(_8){if(!_8&&_8!==false){_8=false;}
this.base(_8);},refreshValue:function(){var _0=this,_2=_0.value,_V6=_2===true,_r=_V6?-21:0,_K=_0.enabled?0:-21,_S0=_V6?'':_2,_9=_0.elemId;ELEM.setStyle(_9,'background-image',"url("+_0.getThemeGfxFile('validator.png')+")");ELEM.setStyle(_9,'background-repeat','no-repeat');ELEM.setStyle(_9,'background-position',_r+'px '+_K+'px');}});var
HWindow=HDynControl.extend({componentName:'window',controlDefaults:(HDynControl.prototype.controlDefaults.extend({constructor:function(_7){var _q0=ELEM.windowSize(),_c2=_q0[0],_d2=_q0[1];if(!this.minSize){this.minSize=[96,54];}
if(!this.maxSize){this.maxSize=_q0;}
if(!this.maxX){this.maxX=_c2-this.minSize[0];}
if(!this.maxY){this.maxY=_d2-this.minSize[1];}
if(!this.events){this.events={draggable:true};}
if(!this.resizeNW){this.resizeNW=[6,6];}
if(!this.resizeNE){this.resizeNE=[6,6];}
if(!this.resizeSW){this.resizeSW=[6,6];}
if(!this.resizeSE){this.resizeSE=[16,16];}},maxX:'auto',maxY:'auto',maxSize:'auto',resizeW:4,resizeE:4,resizeN:4,resizeS:4,fullWindowMove:false,closeButton:false,collapseButton:false,zoomButton:false})),draw:function(){var _ua=this.drawn;this.base();if(!_ua){HSystem.windowFocus(this);}},makeRectRules:function(){var _0=this,_b4=_0.base(),_1=_0.rect,_x=_0.options,_82=_x.resizeW;if(!_x.fullWindowMove){if(_x.zoomButton){_82=61;}
else if(_x.collapseButton){_82=46;}
else if(_x.closeButton){_82=27;}
_b4[8]=[_82,_x.resizeN,_1.width-_x.resizeE,25];}
return _b4;},maxRect:function(){var _1=this.base();if(_1[2]<this.options.minSize[0]){_1[2]=this.options.minSize[0];}
else if(_1[2]>this.options.maxSize[0]){_1[2]=this.options.maxSize[0];}
if(_1[3]<this.options.minSize[1]){_1[3]=this.options.minSize[1];}
else if(_1[3]>this.options.maxSize[1]){_1[3]=this.options.maxSize[1];}
return _1;},hasWindowFocus:false,gainedActiveStatus:function(){HSystem.windowFocus(this);},windowFocus:function(){this.hasWindowFocus=true;this.toggleCSSClass(this.elemId,'inactive',false);},windowBlur:function(){this.hasWindowFocus=false;this.toggleCSSClass(this.elemId,'inactive',true);this.setStyle('cursor','default');},windowClose:function(){this.die();},windowCollapse:function(){if(this.options.collapseUsing){this.options.collapseUsing(this);}
else{var _55=HRect.nu(this.rect.leftTop,this.rect.leftTop.subtract(0-this.options.minSize[0],0-this.options.minSize[1]));if(!this.rect.equals(_55)){this.prevRect=HRect.nu(_55);this.animateTo(_55);}}},windowZoom:function(){var _22=this.options.maxSize==='auto'?this.parentSize():this.options.maxSize,_m3=HRect.nu(this.options.minX,this.options.minY,_22[0],_22[1]),_T=HRect.nu(this.rect),i=0,_z0=this.views,_c,_H0,_70,_20;for(;i<_z0.length;i++){_c=HSystem.views[_z0[i]];_H0=ELEM.getSize(_c.elemId);_V2=ELEM.getVisiblePosition(_c.elemId);_70=_H0[0]+_V2[0]-this.pageX();_20=_H0[1]+_V2[1]-this.pageY();if(_70>_T.width){_T.setWidth(_70);}
if(_20>_T.height){_T.setHeight(_20);}}
if(_T.width>_22[0]){_T.setWidth(_22[0]);}
else if(_T.width<this.options.minSize[0]){_T.setWidth(this.options.minSize[0]);}
if(_T.height>_22[1]){_T.setHeight(_22[1]);}
else if(_T.height<this.options.minSize[1]){_T.setHeight(this.options.minSize[1]);}
if(!_T.equals(_m3)&&(EVENT.status[EVENT.button2]||EVENT.status[EVENT.altKeyDown])){this.animateTo(_m3);this.prevRect=HRect.nu(this.rect);this.animateTo(_m3);}
else if(this.rect.equals(_T)){if(this.prevRect!==undefined&&!this.prevRect.equals(_T)){this.animateTo(HRect.nu(this.prevRect));}
else{this.prevRect=HRect.nu(this.rect);this.animateTo(_m3);}}
else{this.prevRect=HRect.nu(_T);this.animateTo(_T);}}});var
HTabView=HView.extend({draw:function(){var _e6=this.drawn;this.base();if(!_e6){var i=0,_H=[['overflow','auto']];for(i;i<_H.length;i++){this.setStyle(_H[i][0],_H[i][1]);}
this.hide();}}});var
HTab=HControl.extend({componentName:"tab",refreshOnValueChange:true,refreshOnLabelChange:false,controlDefaults:(HControlDefaults.extend({constructor:function(_7){this.tabInit(_7);},tabInit:function(_7){_7.tabs=[];_7.tabLabels=[];_7.tabLabelBounds=[];_7.tabLabelStrings=[];}})),rightmostPx:0,selectIdx:-1,tabLabelHeight:20,tabLabelLeftEdge:4,tabLabelRightEdge:4,fontStyle:'font-family:Arial,sans-serif;font-size:13px;',tabLabelHTMLPrefix1:'<div class="edge-left"></div><div class="tablabel" style="width:',tabLabelHTMLPrefix2:'px">',tabLabelHTMLSuffix:'</div><div class="edge-right"></div>',tabLabelParentElem:'label',tabLabelElementTagName:'div',tabLabelAlign:'left',tabLabelFillBg:false,tabTriggerLink:true,tabLabelNoHTMLPrefix:false,refreshValue:function(){var _2=this.value;if(typeof _2==='number'){var _z=parseInt(_2,10);if(_z<this.tabs.length){if(_z!==this.selectIdx){this.selectTab(_z);}}}},setLabel:function(_h){this.label=_h;},selectTab:function(_p){if(_p instanceof HTabView){_p=_p.tabIndex;}
if(this.selectIdx!==-1){var _W6=this.tabLabels[this.selectIdx],_xa=this.tabs[this.selectIdx];ELEM.removeClassName(_W6,'item-fg');ELEM.addClassName(_W6,'item-bg');HSystem.views[_xa].hide();}
if(_p!==-1){var _m0=this.tabLabels[_p],_45=this.tabs[_p];ELEM.removeClassName(_m0,'item-bg');ELEM.addClassName(_m0,'item-fg');HSystem.views[_45].show();}
this.selectIdx=_p;this.setValue(_p);},addTab:function(_M2,_X6,_Y6,_Aa){var
_p=this.tabs.length,_35='',_Z6=this.stringWidth(_M2,null,0,this.fontStyle),_25=_Z6+this.tabLabelLeftEdge+this.tabLabelRightEdge,_m0=ELEM.make(this.markupElemIds[this.tabLabelParentElem],this.tabLabelElementTagName),_r1;if(_Y6===undefined){_r1=HTabView.nu([0,this.tabLabelHeight,null,null,0,0],this);}
else{_r1=_Y6.nu([0,this.tabLabelHeight,null,null,0,0],this,_Aa);}
_p=this.tabs.length;if(this.tabLabelNoHTMLPrefix){_35=_M2;}
else{_35=this.tabLabelHTMLPrefix1+_Z6+this.tabLabelHTMLPrefix2+_M2+this.tabLabelHTMLSuffix;}
_r1.hide();ELEM.addClassName(_m0,'item-bg');ELEM.setStyle(_m0,'width',_25+'px');ELEM.setStyle(_m0,this.tabLabelAlign,this.rightmostPx+'px');ELEM.setHTML(_m0,_35);this.tabLabelStrings.push(_M2);if(this.tabTriggerLink&&this.tabLabelElementTagName==='a'){ELEM.setAttr(_m0,'href','javascript:HSystem.views['+this.viewId+'].selectTab('+_p+');');}
else if(this.tabTriggerLink&&!(BROWSER_TYPE.ie7||BROWSER_TYPE.ie6)){ELEM.setAttr(_m0,'onclick','HSystem.views['+this.viewId+'].selectTab('+_p+');');}
else{this.tabTriggerLink=false;this.setClick(true);this.tabLabelBounds.push([this.rightmostPx,this.rightmostPx+_25]);}
this.rightmostPx+=_25;if(this.tabLabelAlign==='right'){ELEM.setStyle(this.markupElemIds[this.tabLabelParentElem],'width',this.rightmostPx+'px');}
else if(this.tabLabelFillBg){ELEM.setStyle(this.markupElemIds.state,'left',this.rightmostPx+'px');}
this.tabs.push(_r1.viewId);this.tabLabels.push(_m0);_r1.tabIndex=_p;if(_X6||(this.value===_p)){this.selectTab(_p);}
return _r1;},click:function(_r,_K){if(this.tabTriggerLink){this.setClickable(false);return;}
_r-=this.pageX();_K-=this.pageY();if(_K<=this.tabLabelHeight){if(this.tabLabelAlign==='right'){_r=this.rect.width-_r;}
if(_r<=this.rightmostPx){var i=0,_15;for(i;i<this.tabLabelBounds.length;i++){_15=this.tabLabelBounds[i];if(_r<_15[1]&&_r>=_15[0]){this.selectTab(i);return;}}}}},removeTab:function(_p){var _07=this.selectIdx,_45=this.tabs[_p],_m0=this.tabViews[_p];this.tabs.splice(_p,1);this.tabLabels.splice(_p,1);this.tabLabelBounds.splice(_p,1);this.tabLabelStrings.splice(_p,1);if(_p===_07){this.selectIdx=-1;if(_p===0&&this.tabs.length===0){this.selectTab(-1);}
else if(_p===(this.tabs.length-1)){this.selectTab(_p-1);}
else{this.selectTab(_p);}}
else if(_p<_07){this.selectIdx--;}
ELEM.del(_m0);HSystem.views[_45].die();}});var
HTabItem={nu:function(_1,_d,_3){return _d.addTab(_3.label,_3.select);}};var
GUITreeTabView=HControl.extend({controlDefaults:HControlDefaults.extend({visible:false,autoCreate:false,autoDestroy:true}),jsonRenderer:false,createJSONRenderer:function(){var
_0=this,_2=_0.value,_05=HView.nu([4,0,150,34,0,null],_0),_Ae=HStringView.nu([34,12,100,20,4,null],_05,{value:'Rendering'});_0.destroyJSONRenderer();if(_2.type===undefined||_2.version===undefined){_2={'type':'GUITree','version':0.9,'class':'HView','rect':[0,0,null,null,0,0],'options':{'style':{'overflow':'auto'}},'subviews':_2};}
setTimeout(function(){_0.jsonRenderer=JSONRenderer.nu(_2,_0);_05.die();},10);},destroyJSONRenderer:function(){if(this.jsonRenderer){this.jsonRenderer.die();this.jsonRenderer=false;}},drawSubviews:function(){if(this.options.autoCreate){this.createJSONRenderer();}},show:function(){this.base();if(!this.jsonRenderer){this.createJSONRenderer();}},hide:function(){this.base();if(this.options.autoDestroy){this.destroyJSONRenderer();}},die:function(){this.destroyJSONRenderer();this.base();}});var
GUITreeTabItem={nu:function(_1,_d,_3){return _d.addTab(_3.label,_3.select,GUITreeTabView,_3);}};var
HSheet=HControl.extend({componentName:'sheet',refreshValue:function(){if(this.value===0){this.show();}
else{this.hide();}},drawRect:function(){if(this.parent&&this.rect.isValid){var
_0=this,_9=_0.elemId,_1=_0.rect,_width=_1.width,_N=_1.top,_t=0-Math.floor(_1.width/2)+_1.left,_height=_1.height,_H=['left','0px','top','0px','right','0px','bottom','0px','width','auto','height','auto','min-width',_width+'px','min-height',_height+'px'],i=0,_j;;for(_j=_H.length;i<_j;i+=2){ELEM.setStyle(_9,_H[i],_H[i+1]);}
if(_0['markupElemIds']){var _Ca=_0.markupElemIds['state'];_H=['left',_t+'px','top',_N+'px','width',_width+'px','height',_height+'px'];i=0;for(_j=_H.length;i<_j;i+=2){ELEM.setStyle(_Ca,_H[i],_H[i+1]);}}
if(undefined===_0.isHidden||_0.isHidden===false){ELEM.setStyle(_9,'visibility','inherit');}
ELEM.setStyle(_9,'display','block');_0._19();_0.drawn=true;}
return this;}});var
HAlertSheet=HSheet.extend({refreshLabel:function(){this.base();if(this['alertText']){this.alertText.setValue(this.label);}},drawSubviews:function(){this.icon=HImageView.nu([16,16,48,48],this,{value:this.getThemeGfxFile('sheet_warning.png')});this.alertText=HStringView.nu([80,16,null,null,8,48],this,{value:this.label});this.alertButtons();},alertButtons:function(){this.okButton=HClickButton.nu([null,null,60,23,8,8],this,{label:'OK',valueObj:this.valueObj,events:{click:true}});},setValueObj:function(valueObj){this.base(valueObj);if(this['okButton']){valueObj.bind(this.okButton);}}});var
HConfirmSheet=HAlertSheet.extend({alertButtons:function(){this.cancelButton=HClickButton.extend({click:function(){this.setValue(-1);}}).nu([null,null,60,23,76,8],this,{label:'Cancel',valueObj:this.valueObj,events:{click:true}});this.base();},setValueObj:function(valueObj){this.base(valueObj);if(this['cancelButton']){valueObj.bind(this.cancelButton);}}});var
HListItems=HValueResponder.extend({constructor:function(_1,_d,_3){this.parent=_d;if(this.parent.setListItemResponder){this.parent.setListItemResponder(this);}
else{console.log('Warning; parent does not respond to setListItemResponder');}
if(_3 instanceof Object){if(_3['valueObj']!==undefined){_3.valueObj.bind(this);}
else if(_3['value']!==undefined){this.value=_3.value;this.refresh();}}},die:function(){var _0=this;if(_0.valueObj){_0.valueObj.unbind(_0);_0.valueObj=null;}
_0.value=null;},_D7:function(_ma){console.log("Warning; HListItems: "+_ma);},refresh:function(){if(this.value instanceof Array){var _D=[],_F,_52,_h,_2,i=0;for(;i<this.value.length;i++){_F=this.value[i];_52=COMM.Values.type(_F);if(_52==='h'){_h=_F['label'];_2=_F['value'];if(_h===undefined||_2===undefined){this._D7("The value or label of row "+_F+" is undefined (ignored)");}
_D.push([_2,_h]);}
else if(_52=='a'){_D.push(_F);}
else if(['s','n'].indexOf(_52)!==-1){_h=_F.toString();_2=_F;_D.push([_2,_h]);}
else{this._D7("The row "+_F+" is has unsupported row type: '"+_52+"' (ignored)");}}
this.parent.setListItems(_D);}}});var
HCheckboxList=HControl.extend({drawSubviews:function(){this.setStyle('border','1px solid #999');this.setStyle('overflow','auto');},listItems:[],listItemViews:[],ListCheckbox:HCheckbox.extend({refreshValue:function(){this.base();if(this.value===true){this.parent.addItem(this.options.listValue);}
else{this.parent.delItem(this.options.listValue);}}}),setEnabled:function(_s){this.base(_s);if(!this['listItemViews']){return;}
for(var i=0;i<this.listItems.length;i++){this.listItemViews[i].setEnabled(_s)}},addItem:function(_51){if(this.value.indexOf(_51)===-1){var _02=[],i=0;for(;i<this.value.length;i++){_02.push(this.value[i]);}
_02.push(_51);this.setValue(_02);}},delItem:function(_51){var _za=this.value.indexOf(_51);if(_za!==-1){var _02=[],i=0;for(;i<this.value.length;i++){if(this.value[i]!==_51){_02.push(this.value[i]);}}
this.setValue(_02);}},setListItems:function(_D){var _z1,_2,_h,_E7,_F7,i=0;for(;i<this.listItemViews.length;i++){try{this.listItemViews[i].die();}
catch(e){console.log('HCheckboxList, setListItems item destruction error: ',e);}}
this.listItems=_D;this.listItemViews=[];for(i=0;i<_D.length;i++){_z1=_D[i];_2=_z1[0];_h=_z1[1];_E7=(this.value.indexOf(_2)!==-1);_F7=this.ListCheckbox.nu([4,(i*23)+4,null,23,4,null],this,{label:_h,value:_E7,listValue:_2,enabled:this.enabled});this.listItemViews[i]=_F7;}
this.refreshValue();},_b0:null,setListItemResponder:function(_b0){this._b0=_b0;},die:function(){if(this._b0){this._b0.die();this._b0=null;}
this.listItems=null;this.listItemViews=null;this.base();},refreshValue:function(){if(this.listItemViews.length===0){return this;}
var _2=this.value,_D=this.listItems,_l4,_Fa=[],i=0,_k4;for(;i<_D.length;i++){_l4=_D[i][0];_k4=(_2.indexOf(_l4)!==-1);this.listItemViews[i].setValue(_k4);if(_k4){_Fa.push(_l4);}}
return this;}});var
HRadioButtonList=HControl.extend({drawSubviews:function(){this.setStyle('border','1px solid #999');this.setStyle('overflow-y','auto');},listItems:[],listItemViews:[],setListItems:function(_D){var _z1,_2,_h,_Ce,i=0;for(;i<this.listItemViews.length;i++){try{this.listItemViews[i].die();}
catch(e){console.log('HRadiobuttonList, setListItems item destruction error: ',e);}}
this.listItems=_D;this.listItemViews=[];for(i=0;i<_D.length;i++){_z1=_D[i];_2=_z1[0];_h=_z1[1];_Ha=this.createComponent(i,_h);this.listItemViews[i]=_Ha;}
this.refreshValue();},createComponent:function(i,_h){return HRadiobutton.nu([4,(i*23)+4,null,23,4,null],this,{label:_h,enabled:this.enabled});},_b0:null,setListItemResponder:function(_b0){this._b0=_b0;},die:function(){if(this._b0){this._b0.die();this._b0=null;}
this.radioButtonIndexValue&&this.radioButtonIndexValue.die();this.listItems=null;if(this.listItemViews){for(var i=0;i<this.listItemViews.length;i++){this.listItemViews[i].die();}}
this.listItemViews=null;this.radioButtonIndexValue&&this.radioButtonIndexValue.die();this.base();},radioButtonIndexValue:false,radioButtonResponder:false,setEnabled:function(_s){this.base(_s);if(!this['listItemViews']){return;}
for(var i=0;i<this.listItems.length;i++){this.listItemViews[i].setEnabled(_s)}},RadioButtonIndexResponder:HValueResponder.extend({constructor:function(_d,_12){this.parent=_d;},refresh:function(){var
_D=this.parent.listItems,_2;if(_D===undefined||_D===null){return;}
if(_D[this.value]!==undefined){_2=_D[this.value];this.parent.setValue(_2[0]);}}}),refreshValue:function(){var _2=this.value;if(this.listItems&&this.listItems.length!==0&&this['valueMatrix']!==undefined){if(this.radioButtonResponder===false){this.radioButtonIndexValue=HValue.nu(false,0);this.radioButtonIndexValue.bind(this.valueMatrix);this.radioButtonResponder=this.RadioButtonIndexResponder.nu(this);this.radioButtonIndexValue.bind(this.radioButtonResponder);}
for(var i=0;i<this.listItems.length;i++){if(this.listItems[i][0]===_2){this.radioButtonResponder.setValue(-1);this.radioButtonResponder.setValue(i);break;}}}}});var
HRadiobuttonList=HRadioButtonList;var
HPropertyList=HControl.extend({defaultEvents:{click:true},controlDefaults:HControlDefaults.extend({keyColumnWidth:100,hideTypeColumn:false,useEditor:false,rowHeight:15,keyIndent:8}),click:function(x,y){if(this.options.useEditor){var
clickY=y-this.contentView.pageY(),itemNum=Math.floor(clickY/this.options.rowHeight);if((clickY<0)||(itemNum>this.valueTokens.length-1)){this.editor.hide();return;}
this.editItem(itemNum);}},keyColumnRight:function(){return this.options.keyColumnWidth;},typeColumnLeft:function(){return this.keyColumnRight();},typeColumnRight:function(){return this.options.keyColumnWidth+60;},valueColumnLeft:function(){if(this.options.hideTypeColumn){return this.keyColumnRight();}
else{return this.typeColumnRight();}},drawSubviews:function(){var borderAndBg=ELEM.make(this.elemId);ELEM.setCSS(borderAndBg,'position:absolute;left:0;top:0;right:0;bottom:0;background-color:#e6e6e6;border:1px solid #999;');this.markupElemIds={bg:borderAndBg};this.contentView=HScrollView.extend({click:function(x,y){this.parent.click(x,y);return true;}}).nu([1,25,null,null,1,1],this,{scrollY:'auto',scrollX:false,events:{click:true}});var separatorParentElemId=ELEM.make(this.contentView.elemId);ELEM.setCSS(separatorParentElemId,'position:absolute;left:0;top:0;right:0;');this.separatortParentElemId=separatorParentElemId;this.propertyItems=[];if(this.options.useEditor){this.editorValue=HValue.nu(false,{top:0,left:0,type:'h',name:'--',value:{}});this.editor=HPropertyListEditor.nu([0,0,null,this.options.rowHeight+2,0,null],this.contentView,{propertyItems:this.propertyItems,visible:false,valueObj:this.editorValue});}
var rowHeightStyle='height:'+this.options.rowHeight+'px;';this.keyRowStyle+=rowHeightStyle;this.typeRowStyle+=rowHeightStyle;this.valueRowStyle+=rowHeightStyle;this.rowSeparatorStyle+=rowHeightStyle;this.contentView.setStyle('font-size','11px');this.keyColumn=HView.nu([0,0,this.keyColumnRight(),24],this.contentView,{style:[['border-right','1px solid #999']]});if(!this.options.hideTypeColumn){this.typeColumn=HView.nu([this.typeColumnLeft(),0,60,24],this.contentView,{style:[['border-right','1px solid #999']]});}
this.valueColumn=HView.nu([this.valueColumnLeft(),0,0,24,0,null],this.contentView);this.header=HView.extend({drawSubviews:function(){var
keyColumnWidth=this.parent.options.keyColumnWidth;this.keyLabel=HView.nu([0,0,this.parent.keyColumnRight(),24],this,{html:'<b>Key</b>',style:[['text-align','middle'],['text-indent','16px'],['line-height','24px'],['font-size','13px'],['border-right','3px double #999']]});if(!this.parent.options.hideTypeColumn){this.typeLabel=HView.nu([this.parent.typeColumnLeft(),0,60,24],this,{html:'<b>Type</b>',style:[['text-align','middle'],['text-indent','8px'],['line-height','24px'],['font-size','13px'],['padding-right','1px'],['border-right','1px solid #999']]});}
this.valueLabel=HView.nu([this.parent.valueColumnLeft(),0,80,24,0,null],this,{html:'<b>Value</b>',style:[['text-align','middle'],['text-indent','8px'],['line-height','24px'],['font-size','13px']]});}}).nu([0,0,null,24,0,null],this,{style:[['border-bottom','1px solid #999']]});this.resizeColumns=HControl.extend({drag:function(x,y){var
parent=this.parent,options=parent.options,keyColumnWidth=x-parent.pageX(),parentWidth=parent.rect.width;if(keyColumnWidth<80){keyColumnWidth=80;}
else if(keyColumnWidth>parentWidth-140){keyColumnWidth=parentWidth-140;}
this.rect.offsetTo(keyColumnWidth-1,0);this.drawRect();options.keyColumnWidth=keyColumnWidth;var
keyColumn=parent.keyColumn,keyLabel=parent.header.keyLabel,keyRight=parent.keyColumnRight();keyColumn.rect.setRight(keyRight);keyLabel.rect.setRight(keyRight);var
valueColumn=parent.valueColumn,valueLabel=parent.header.valueLabel,valueLeft=parent.valueColumnLeft();valueColumn.rect.setLeft(valueLeft);valueLabel.rect.setLeft(valueLeft);keyColumn.drawRect();keyLabel.drawRect();valueColumn.drawRect();valueLabel.drawRect();if(!options.hideTypeColumn){var
typeColumn=parent.typeColumn,typeLabel=parent.header.typeLabel,typeLeft=parent.typeColumnLeft(),typeRight=parent.typeColumnRight();typeColumn.rect.setLeft(typeLeft);typeColumn.rect.setRight(typeRight);typeLabel.rect.setLeft(typeLeft,0);typeLabel.rect.setRight(typeRight,0);typeColumn.drawRect();typeLabel.drawRect();}
if(options.useEditor){parent.editor.resizeKeyColumn();}}}).nu([this.keyColumnRight(),0,5,25],this,{events:{draggable:true},style:[['cursor','ew-resize']]});},arrayTokens:function(arr,name){this.addToken('a',name,'('+arr.length+' items)');this.nodeProperties.left+=this.options.keyIndent;var i=0,val,type;for(;i<arr.length;i++){val=arr[i];type=this.itemType(val);if(type=='h'){this.hashTokens(val,i);}
else if(type=='a'){this.arrayTokens(val,i);}
else{this.addToken(type,i,val);}}
this.nodeProperties.left-=this.options.keyIndent;},hashLen:function(hash){var count=0;for(var item in hash){count+=1;}
return count;},hashSortedKeys:function(hash){var
keys=[],key;for(key in hash){keys.push(key);}
return keys.sort();},hashTokens:function(hash,name){this.addToken('h',name,'('+this.hashLen(hash)+' items)');this.nodeProperties.left+=this.options.keyIndent;var key,val,type,i=0,keys=this.hashSortedKeys(hash);for(;i<keys.length;i++){key=keys[i];val=hash[key];type=this.itemType(val);if(type=='h'){this.hashTokens(val,key);}
else if(type=='a'){this.arrayTokens(val,key);}
else{this.addToken(type,key,val);}}
this.nodeProperties.left-=this.options.keyIndent;},addToken:function(type,name,value){this.valueTokens.push({top:this.nodeProperties.top,left:this.nodeProperties.left,type:type,name:name,value:value});this.nodeProperties.top+=this.options.rowHeight;},itemType:function(item){return COMM.Values.type(item);},typeNames:{h:'Hash',a:'Array',s:'String',n:'Number',b:'Boolean','~':'Null','-':'Undefined'},keyRowStyle:"position:absolute;padding-top:2px;right:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",addKeyColumnControl:function(token,i){var elemId;if(i>=this.propertyItems.length){elemId=ELEM.make(this.keyColumn.elemId);this.propertyItems.push(elemId);ELEM.setCSS(elemId,'top:'+token.top+'px;'+this.keyRowStyle);}
else{elemId=this.propertyItems[i];}
ELEM.setStyle(elemId,'left',(token.left+10)+'px');if(token.type==='h'||token.type==='a'){ELEM.setStyle(elemId,'font-weight','bold');}
else{ELEM.setStyle(elemId,'font-weight','inherit');}
ELEM.setHTML(elemId,token.name);},typeRowStyle:"position:absolute;padding-top:2px;left:8px;width:72px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",addTypeColumnControl:function(token,i){var elemId;if(i>=this.propertyItems.length){elemId=ELEM.make(this.typeColumn.elemId);this.propertyItems.push(elemId);ELEM.setCSS(elemId,'top:'+token.top+'px;'+this.typeRowStyle);}
else{elemId=this.propertyItems[i];}
ELEM.setHTML(elemId,this.typeNames[token.type]);},valueRowStyle:"position:absolute;padding-top:2px;left:8px;right:0px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",addValueColumnControl:function(token,i){var elemId,value;if(i>=this.propertyItems.length){elemId=ELEM.make(this.valueColumn.elemId);this.propertyItems.push(elemId);ELEM.setCSS(elemId,'top:'+token.top+'px;'+this.valueRowStyle);}
else{elemId=this.propertyItems[i];}
if(token.type==='h'||token.type==='a'){ELEM.setStyle(elemId,'font-style','italic');}
else{ELEM.setStyle(elemId,'font-style','inherit');}
value=token.value;if(value===true){value='true';}
else if(value===false){value='false';}
else if(value===undefined){value='undefined';}
else if(value===null){value='null';}
ELEM.setHTML(elemId,value);},rowSeparatorStyle:"position:absolute;left:1px;right:1px;font-size:0px;height:1px;overflow:hidden;border-bottom:1px solid #999;",addRowSeparator:function(token,i,even){if(i>=this.propertyItems.length){var elemId=ELEM.make(this.separatortParentElemId);this.propertyItems.push(elemId);ELEM.setCSS(elemId,'top:'+token.top+'px;'+this.rowSeparatorStyle+'background-color:'+(even?'#f6f6f6':'#e6e6e6')+';');}},die:function(){var
i=0,propLen=this.propertyItems.length,elemId;for(;i<propLen;i++){elemId=this.propertyItems.pop();ELEM.del(elemId);}
this.base();},selectedItem:0,editNextItem:function(){this.editItem(this.selectedItem+1);},editPrevItem:function(){this.editItem(this.selectedItem-1);},editItem:function(itemNum){if(itemNum>this.valueTokens.length-1){itemNum=this.valueTokens.length-1;}
else if(itemNum<0){itemNum=0;}
var
targetY=(itemNum*this.options.rowHeight)-1,elem=ELEM.get(this.contentView.elemId),scrollTop=elem.scrollTop,contentHeight=this.contentView.rect.height;if(targetY>(scrollTop+contentHeight-45)){elem.scrollTop=scrollTop+45;}
else if(targetY<scrollTop+45){elem.scrollTop=scrollTop-45;}
this.selectedItem=itemNum;this.editorValue.set(COMM.Values.clone(this.valueTokens[itemNum]));this.editor.show();EVENT.changeActiveControl(this.editor);this.editor.offsetTo(0,targetY);this.editor.bringToFront();},refreshValue:function(){if(this['propertyItems']===undefined){return;}
this.valueTokens=[];this.nodeProperties={top:0,left:8};var rootType=this.itemType(this.value);if(rootType=='h'){this.hashTokens(this.value,'Root');}
else if(rootType=='a'){this.arrayTokens(this.value,'Root');}
else{this.addToken(rootType,'Root',this.value);}
var i,token;if(this['propertyItems']===undefined){this.propertyItems=[];}
var colHeight=0,colId=0;for(i=0;i<this.valueTokens.length;i++){token=this.valueTokens[i];this.addRowSeparator(token,colId,(i%2===0));colId++;this.addKeyColumnControl(token,colId);colId++;if(!this.options.hideTypeColumn){this.addTypeColumnControl(token,colId);colId++;}
this.addValueColumnControl(token,colId);colId++;colHeight=token.top+this.options.rowHeight;}
var propItemsLen=this.propertyItems.length,elemId;for(i=colId;i<propItemsLen;i++){elemId=this.propertyItems.pop();ELEM.del(elemId);}
this.keyColumn.bringToFront();if(!this.options.hideTypeColumn){this.typeColumn.bringToFront();}
this.valueColumn.bringToFront();this.resizeColumns.bringToFront();this.keyColumn.rect.setHeight(colHeight);this.keyColumn.drawRect();if(!this.options.hideTypeColumn){this.typeColumn.rect.setHeight(colHeight);this.typeColumn.drawRect();}
this.valueColumn.rect.setHeight(colHeight);this.valueColumn.drawRect();ELEM.setStyle(this.separatortParentElemId,'height',(colHeight+25)+'px');}});var
HPropertyListEditor=HControl.extend({defaultEvents:{keyDown:'repeat'},keyDown:function(chr){if(chr===38){this.parent.parent.editPrevItem();return true;}
else if(chr===40){this.parent.parent.editNextItem();return true;}
return false;},refreshValue:function(){this.base();this.nameEditor.setValue(this.value.name);this.typeEditor&&this.typeEditor.setValue(this.value.type);if(this.value.type==='s'){this.stringEditor.show();this.stringEditor.setValue(this.value.value);}
else{this.stringEditor.hide();}
if(this.value.type==='n'){this.numberEditor.show();this.numberEditor.setValue(this.value.value);}
else{this.numberEditor.hide();}
if(this.value.type==='b'){this.boolEditor.show();this.boolEditor.setValue(this.value.value);}
else{this.boolEditor.hide();}
this.resizeKeyColumn();},lostActiveStatus:function(newActive){this.base();if(newActive&&((newActive===this)||(newActive.parents.indexOf(this)!==-1))){return;}
this.hide();},resizeKeyColumn:function(){var
parent=this.parent.parent,nameEditor=this.nameEditor;nameEditor.rect.setLeft(this.value.left+6);nameEditor.rect.setRight(parent.keyColumnRight()-3);nameEditor.refresh();var
stringEditor=this.stringEditor,numberEditor=this.numberEditor,boolEditor=this.boolEditor;stringEditor.rect.setLeft(parent.valueColumnLeft()+5);numberEditor.rect.setLeft(parent.valueColumnLeft()+4);boolEditor.rect.setLeft(parent.valueColumnLeft()+4);if(this['typeEditor']){var
typeEditor=this.typeEditor;typeEditor.rect.setLeft(parent.typeColumnLeft()+2);typeEditor.rect.setRight(parent.typeColumnRight()-1);typeEditor.drawRect();}
stringEditor.drawRect();numberEditor.drawRect();boolEditor.drawRect();},nameEditor:null,typeEditor:null,valueEditor:null,drawSubviews:function(){this.setStyle('border-top','1px solid #999');this.setStyle('border-bottom','1px solid #999');var
_j4=ELEM.make(this.elemId);this.markupElemIds={state:_j4};ELEM.setCSS(_j4,'position:absolute;left:0;top:0;right:0;bottom:0;background-color:#fff;');ELEM.setStyle(_j4,'opacity',0.8);var
parent=this.parent.parent,opts=parent.options;this.nameEditor=HTextControl.extend({boldTypes:['a','h'],lostActiveStatus:function(newActive){this.base();this.parent.lostActiveStatus(newActive);},refreshValue:function(){if(this.drawn){if(this.boldTypes.indexOf(this.parent.value.type)!==-1){this.setStyle('font-weight','bold',true);}
else{this.setStyle('font-weight','normal',true);}}
this.base();}}).nu([0,-1,1,opts.rowHeight+4],this,{style:[['font-size','11px'],['text-indent','1px']]});var
height=this.nameEditor.rect.height;if(!opts.hideTypeColumn){this.typeEditor=HMiniMenu.extend({lostActiveStatus:function(newActive){this.parent.lostActiveStatus(newActive);this.base();}}).nu([0,1,1,height],this,{value:'a',menuItemGeom:{width:75,left:-15}});var _G7=[];for(var i in parent.typeNames){_G7.push([i,parent.typeNames[i]]);}
this.typeEditor.setListItems(_G7);}
this.stringEditor=HTextArea.extend({lostActiveStatus:function(newActive){this.parent.lostActiveStatus(newActive);this.base();}}).nu([0,-1,null,height,4,null],this,{style:[['font-size','11px'],['text-indent','1px'],['padding-top','3px']]});this.numberEditor=HNumericTextControl.extend({lostActiveStatus:function(newActive){this.parent.lostActiveStatus(newActive);this.base();}}).nu([0,-1,null,height,4,null],this,{style:[['font-size','11px'],['text-indent','1px']]});this.boolEditor=HCheckbox.extend({lostActiveStatus:function(newActive){this.parent.lostActiveStatus(newActive);this.base();}}).nu([0,-3,null,24,4,null],this,{style:[['font-size','11px'],['text-indent','1px']],label:"Enabled"});this.resizeKeyColumn();}});var
HMiniMenu=HRadioButtonList.extend({componentName:'minimenu',defaultEvents:{draggable:true,click:true,resize:true},subComponentHeight:15,resize:function(){this.repositionMenuItems();},repositionMenuItems:function(){var
x=this.pageX(),y=this.pageY(),w=this.rect.width,h=this.listItems.length*this.subComponentHeight,i=0,listItem=null;for(;i<this.listItems.length&&listItem===null;i++){if(this.listItems[i][0]===this.value){listItem=this.listItems[i];}}
y-=(i-1)*this.subComponentHeight;if(y<0){y=this.subComponentHeight%y;}
if(this.options['menuItemGeom']){if(this.options.menuItemGeom.width){w+=this.options.menuItemGeom.width;}
if(this.options.menuItemGeom.width){x+=this.options.menuItemGeom.left;}}
this.menuItemView.rect.set(x,y,x+w,y+h);this.menuItemView.refresh();},click:function(){this.menuShow();},refreshValue:function(){this.base();if(this.listItems&&this.listItems.length!==0&&this['valueMatrix']!==undefined){for(var i=0;i<this.listItems.length;i++){if(this.listItems[i][0]===this.value){this.setLabel(this.listItems[i][1]);return;}}}},menuShow:function(){this.repositionMenuItems();this.menuItemView.bringToFront();this.menuItemView.show();return true;},menuHide:function(){this.menuItemView.sendToBack();this.menuItemView.hide();},startDrag:function(x,y){this.dragStart=[x,y];this.menuShow();},lostActiveStatus:function(newActive){this.menuHide();},endDrag:function(x,y){if((Math.round(this.dragStart[0]*0.2)===Math.round(x*0.2))&&(Math.round(this.dragStart[1]*0.2)===Math.round(y*0.2))){this.menuShow();}
else{this.menuHide();}},die:function(){this.valueMatrix=null;var _H7=this.menuItemView;this.base();_H7&&_H7.die();},drawSubviews:function(){var
itemStyle={'background-color':'#f6f6f6','border':'1px solid #999','overflow':'auto','overflow-x':'hidden'};if(!BROWSER_TYPE.ie){itemStyle.opacity=0.9;}
this.menuItemView=HView.nu([this.rect.left,this.rect.top,this.rect.width,10],this.app,{visible:false,style:itemStyle});},setListItems:function(listItems){this.base(listItems);this.valueMatrix=this.menuItemView.valueMatrix;this.refreshValue();if(this.options.initialVisibility){EVENT.changeActiveControl(this);this.menuShow();}},createComponent:function(i,_h){return HMiniMenuItem.nu([0,(i*this.subComponentHeight),null,this.subComponentHeight,0,null],this.menuItemView,{label:_h});}});var
HMiniMenuItem=HRadioButton.extend({componentName:'minimenuitem',defaultEvents:{click:true,mouseUp:true,mouseDown:true},_Va:function(){var _Wa=this.parent.parent;EVENT.changeActiveControl(_Wa);},_I7:0,click:function(){var _J7=new Date().getTime();if(_J7-this._I7>200){this.base();this._I7=_J7;this._Va();}
return true;},mouseDown:function(){this.base();this.click();return true;},mouseUp:function(){this.base();this.click();return true;}});var
HPopupMenu=HMiniMenu.extend({componentName:'popupmenu',subComponentHeight:24,createComponent:function(i,_h){return HMenuItem.nu([0,(i*24),null,24,0,null],this.menuItemView,{label:_h});}});var HPopUpMenu=HPopupMenu;var
HMenuItem=HMiniMenuItem.extend({componentName:'menuitem'});var
HDateTime=HClass.extend({msWeek:604800000,msDay:86400000,msHour:3600000,msMinute:60000,monthName:function(_4){_4=(_4 instanceof Date)?_4:this.date();return HLocale.dateTime.strings.monthsLong[_4.getUTCMonth()];},week:function(_4){_4=(_4 instanceof Date)?_4:this.date();var _87=this.firstDateOfYear(_4),_J2=this.firstDateOfWeek(_87);if(_J2.getUTCDate()<=28){_J2=new Date(_J2.getTime()+this.msWeek-this.tzMs(_J2));}
var _W4=Math.ceil((((_4.getTime()-_J2-this.tzMs(_4))/this.msDay)+_87.getUTCDay()+1)/7);if((_W4===53)&&(this.firstDateOfWeek(this.lastDateOfYear(_4)).getUTCDate()>28)){_W4=1;}
return _W4;},mday:function(_4){_4=(_4 instanceof Date)?_4:this.date();return _4.getUTCDate();},setMday:function(_Oa){var
_4=this.date();_4.setUTCDate(_Oa);return Math.round(_4.getTime()/1000);},month:function(_4){_4=(_4 instanceof Date)?_4:this.date();return _4.getUTCMonth();},setMonth:function(_Pa){var
_4=this.date();_4.setUTCMonth(_Pa);return Math.round(_4.getTime()/1000);},year:function(_4){_4=(_4 instanceof Date)?_4:this.date();return _4.getUTCFullYear();},setYear:function(_I2){var
_4=this.date();_4.setUTCFullYear(_I2);return Math.round(_4.getTime()/1000);},tzMs:function(_4){return _4.getTimezoneOffset()*this.msMinute;},date:function(epoch_seconds){epoch_seconds=(typeof epoch_seconds==='number')?epoch_seconds:this.value;var _4=new Date(epoch_seconds*1000);return _4;},firstDateOfYear:function(_4){_4=(_4 instanceof Date)?_4:this.date();var _g0=new Date(_4.getUTCFullYear(),0,1),_R0=new Date(_g0.getTime()-this.tzMs(_g0));return _R0;},lastDateOfYear:function(_4){_4=(_4 instanceof Date)?_4:this.date();var _g0=new Date(new Date(_4.getUTCFullYear()+1,0,1)-1),_R0=new Date(_g0.getTime()-this.tzMs(_g0));return _R0;},firstDateOfMonth:function(_4){_4=(_4 instanceof Date)?_4:this.date();var _g0=new Date(_4.getUTCFullYear(),_4.getUTCMonth(),1),_R0=new Date(_g0.getTime()-this.tzMs(_g0));return _R0;},lastDateOfMonth:function(_4){_4=(_4 instanceof Date)?_4:this.date();var _g0=new Date(new Date(_4.getUTCFullYear(),_4.getUTCMonth()+1,1)-1),_R0=new Date(_g0.getTime()-this.tzMs(_g0));return _R0;},firstDateOfWeek:function(_4){_4=(_4 instanceof Date)?_4:this.date();var _n1=_4.getUTCDay();if(_n1===0){_n1=7;}
var _w1=((_n1-1)*this.msDay),_g0=new Date(_4.getTime()-_w1),_R0=new Date(_g0.getTime());return _R0;},lastDateOfWeek:function(_4){var _Ra=this.firstDateOfWeek(_4),_Sa=new Date(_Ra.getTime()+this.msWeek-this.msDay-1);return _Sa;}});var HCalendar;HCalendar=HControl.extend({componentName:'calendar',defaultEvents:{mouseWheel:true,click:true},mouseWheel:function(_90){if(_90<0){return this.nextMonth();}else{return this.prevMonth();}},click:function(){return false;},localizedDays:function(){var _C,_f;_f=HLocale.dateTime.strings;_C=HVM.clone(_f.weekDaysShort);_C.push(_C.shift());_C.unshift(_f.weekShort);return _C;},_97:function(){var _9,_R,_j,_w;if(this._j3!=null){_w=this._j3;for(_R=0,_j=_w.length;_R<_j;_R++){_9=_w[_R];ELEM.del(_9);}
return this._j3=null;}},refreshWeekDays:function(){var i,_v0,_l3,_a7,_b7,_V4,_U4,_t,_s1,_j,_u1;this._97();_V4=this.localizedDays();_v0=this.rect.width-2;_U4=Math.floor(_v0/8);_s1=(_v0%8)-1;_u1=this.markupElemIds.label;_a7=[];for(i=0,_j=_V4.length;i<_j;i++){_b7=_V4[i];_l3=ELEM.make(_u1);ELEM.setHTML(_l3,_b7);ELEM.setStyle(_l3,'width',_U4+'px');_t=i*_U4+_s1;ELEM.setStyle(_l3,'left',_t+'px');}
return this._j3=_a7;},refreshLabel:function(){if((this.markupElemIds!=null)&&!(this._j3!=null)){return this.refreshWeekDays();}},calendarDateRange:function(_4){var _T4,_S4,_31,_42,_21,_H2,_n3;_31=this.firstDateOfMonth(_4);_42=this.lastDateOfMonth(_4);_21=this.firstDateOfWeek(_31);_H2=this.lastDateOfWeek(_42);_T4=this.week(_21);_S4=this.week(_H2);_n3=_T4-_S4;if(_n3===5){if(_21.getDate()===1){_21=new Date(_21.getTime()-this.msWeek);}else{_H2=new Date(_H2.getTime()+this.msWeek);}}else if(_n3===4){_21=new Date(_21.getTime()-this.msWeek);}
return{week:{firstDate:_21,lastDate:_H2,firstNum:_T4,lastNum:_S4,count:_n3},month:{firstDate:_31,lastDate:_42}};},refreshValue:function(){return this.drawCalendar(this.date());},nextMonth:function(){var _w1,_R4;_R4=new Date(this.viewMonth[0],this.viewMonth[1]+1,1);_w1=_R4.getTime()-this.tzMs(_R4);return this.drawCalendar(new Date(_w1));},prevMonth:function(){var _w1,_Q4;_Q4=new Date(this.viewMonth[0],this.viewMonth[1]-1,1);_w1=_Q4.getTime()-this.tzMs(_Q4);return this.drawCalendar(new Date(_w1));},viewMonth:[1970,0],monthMenu:function(){var i,_E,_j,_c7,_P4,_1,_w;if(typeof HMiniMenu==="undefined"||HMiniMenu===null)return;_E=this;_P4=[];_w=HLocale.dateTime.strings.monthsLong;for(i=0,_j=_w.length;i<_j;i++){_c7=_w[i];_P4.push([i,_c7]);}
_1=ELEM.getBoxCoords(this._p3);_1[0]+=20;if(_1[2]<80)_1[2]=80;return HMiniMenu.extend({_r3:false,menuHide:function(){var _I1;this.base();_I1=this;_I1._r3=true;COMM.Queue.push(function(){if(_I1._r3)return _I1.refreshValue();});return true;},refreshValue:function(){var _I1;this.base();if(this._r3){this._r3=false;_E.setValue(_E.setMonth(this.value));if(_E.month()!==this.value){_E.setValue(_E.setMday(30));_E.setValue(_E.setMonth(this.value));}
if(_E.month()!==this.value){_E.setValue(_E.setMday(29));_E.setValue(_E.setMonth(this.value));}
if(_E.month()!==this.value){_E.setValue(_E.setMday(28));_E.setValue(_E.setMonth(this.value));}
_I1=this;return COMM.Queue.push(function(){return _I1.die();});}}})["new"](_1,this,{value:this.month(),initialVisibility:true}).setListItems(_P4);},yearMenu:function(){var _E,_1;_E=this;_1=ELEM.getBoxCoords(this._s3);_1[0]+=20;if(_1[2]<40)_1[2]=40;_1[3]=20;return HNumericTextControl.extend({refreshValue:function(){this.base();return _E.setValue(_E.setYear(this.value));},textBlur:function(){var _I2;this.base();_I2=this;return COMM.Queue.push(function(){if(_I2.markupElemIds!=null)return _I2.die();});},textEnter:function(){var _d7,_e7;this.base();_e7=EVENT.status[EVENT.keysDown].indexOf(13)!==-1;_d7=EVENT.status[EVENT.keysDown].length===0;if(_e7||_d7){return ELEM.get(this.markupElemIds.value).blur();}}})["new"](_1,this,{value:this.year(),minValue:-38399,maxValue:38400,focusOnCreate:true,refreshOnInput:false});},_f7:function(){var _9,_R,_j,_w;if(this._O4!=null){_w=this._O4;for(_R=0,_j=_w.length;_R<_j;_R++){_9=_w[_R];ELEM.del(_9);}
return this._O4=null;}},die:function(){this._97();this._f7();return this.base();},drawCalendar:function(_4){var _t3,_v0,_F2,_u0,_91,_L,_u3,_M4,_a1,_b1,_L4,_9b,_t,_g7,_31,_42,_u1,_F,_Y1,_J4,_w3,_N,_h7,_e1;this._f7();if(!(_4 instanceof Date))_4=this.date();_F2=this.calendarDateRange(_4);_31=_F2.month.firstDate;_42=_F2.month.lastDate;_L4=_F2.week.firstDate;_9b=_F2.week.lastDate;_v0=this.rect.width-2;_t3=this.rect.height-36;_g7=(_v0%8)-2;_h7=_t3%6;_a1=Math.floor(_v0/8);_Y1=Math.floor(_t3/6);_u1=this.markupElemIds.value;ELEM.setStyle(_u1,'visibility','hidden',true);_b1=[];for(_F=0;_F<=5;_F++){_e1=ELEM.make(_u1);_b1.push(_e1);ELEM.addClassName(_e1,'calendar_weeks_week_row');ELEM.setStyle(_e1,'width',_v0+'px');ELEM.setStyle(_e1,'height',_t3+'px');_N=(_F*_Y1)+_h7;ELEM.setStyle(_e1,'top',_N+'px');for(_u0=0;_u0<=7;_u0++){if(_u0===0){_91=new Date(_L4.getTime()+(_F*this.msWeek)+(_u0*this.msDay));_u3=_91.getTime();_L=ELEM.make(_e1);_b1.push(_L);ELEM.addClassName(_L,'calendar_weeks_week_col_wk');ELEM.setStyle(_L,'left','0px');ELEM.setStyle(_L,'width',_a1+'px');ELEM.setStyle(_L,'height',_Y1+'px');ELEM.setStyle(_L,'line-height',_Y1+'px');ELEM.setHTML(_L,this.week(_91));}else{_91=new Date(_L4.getTime()+(_F*this.msWeek)+((_u0-1)*this.msDay));_u3=_91.getTime();_M4=Math.round(_u3/1000);_L=ELEM.make(_e1,'a');_b1.push(_L);if(this.value>=_M4&&this.value<_M4+86400){ELEM.addClassName(_L,'calendar_weeks_week_col_sel');}else if(_91<_31||_91>_42){ELEM.addClassName(_L,'calendar_weeks_week_col_no');}else{ELEM.addClassName(_L,'calendar_weeks_week_col_yes');}
ELEM.setAttr(_L,'href',"javascript:HSystem.views["+this.viewId+"].setValue("+_u3+")");_t=_u0*_a1+_g7;ELEM.setStyle(_L,'left',_t+'px');ELEM.setStyle(_L,'width',(_a1-1)+'px');ELEM.setStyle(_L,'height',(_Y1-1)+'px');ELEM.setStyle(_L,'line-height',_Y1+'px');ELEM.setHTML(_L,this.mday(_91));}}}
ELEM.setStyle(_u1,'visibility','inherit');_w3=this.markupElemIds.state;this._p3=ELEM.make(_w3,'a');_b1.push(this._p3);ELEM.setAttr(this._p3,'href',"javascript:HSystem.views["+this.viewId+"].monthMenu()");ELEM.setHTML(this._p3,this.monthName(_4));_J4=ELEM.make(_w3,'span');_b1.push(_J4);ELEM.setHTML(_J4,'&nbsp;');this._s3=ELEM.make(_w3,'a');_b1.push(this._s3);ELEM.setAttr(this._s3,'href',"javascript:HSystem.views["+this.viewId+"].yearMenu()");ELEM.setHTML(this._s3,this.year(_4));this.viewMonth=[_31.getUTCFullYear(),_31.getUTCMonth()];return this._O4=_b1;}});HCalendar.implement(HDateTime);var
HDateTimePicker=HControl.extend({setLocked:function(_cb){var
_D2=!_cb;this.yyyy.setEnabled(_D2);this.mm.setEnabled(_D2);this.dd.setEnabled(_D2);this.h.setEnabled(_D2);this.m.setEnabled(_D2);},refreshValue:function(_eb){if(!this.drawn){return;}
if(!this.m){return;}
this.setLocked(HVM.values[this.options.lockedId].value);var
date=new Date(this.value*1000),yyyy=date.getUTCFullYear(),mm=date.getUTCMonth()+1,dd=date.getUTCDate(),h=date.getUTCHours(),m=date.getUTCMinutes();if(_eb){var
nuDate=new Date(this.value*1000),doSet=false;if(this.yyyyValue.value!==yyyy){nuDate.setUTCFullYear(this.yyyyValue.value);doSet=true;}
if(this.mmValue.value!==mm){nuDate.setUTCMonth(this.mmValue.value-1);doSet=true;}
if(this.ddValue.value!==dd){nuDate.setUTCDate(this.ddValue.value);doSet=true;}
if(this.hValue.value!==h){nuDate.setUTCHours(this.hValue.value);doSet=true;}
if(this.mValue.value!==m){nuDate.setUTCMinutes(this.mValue.value);doSet=true;}
if(doSet){this.setValue(nuDate.getTime()/1000);this.setMonthMax(nuDate);}}
else{this.yyyyValue.set(yyyy);this.mmValue.set(mm);this.ddValue.set(dd);this.hValue.set(h);this.mValue.set(m);}},setMonthMax:function(nuDate){nuDate.setUTCSeconds(0);nuDate.setUTCMinutes(0);nuDate.setUTCHours(0);nuDate.setUTCDate(1);var
mm=nuDate.getUTCMonth();if(mm===11){nuDate.setUTCMonth(0);nuDate.setUTCFullYear(nuDate.getUTCFullYear()+1);}
else{nuDate.setUTCMonth(mm+1);}
var
ms=nuDate.getTime()-1000,maxDaysDate=new Date(ms),maxDays=maxDaysDate.getUTCDate();if(maxDays!==this.dd.numField.options.maxValue){this.dd.numField.options.maxValue=maxDays;(this.dd.numField.options.maxValue<this.dd.numField.value)&&this.ddValue.set(maxDays);this.dd.stepper.options.maxValue=maxDays;}},die:function(){this.yyyyValue.die();this.yyyy.die();this.mmValue.die();this.mm.die();this.ddValue.die();this.dd.die();this.hValue.die();this.h.die();this.mValue.die();this.m.die();this.base();},drawSubviews:function(){ELEM.setStyle(this.elemId,'overflow','visible');var
_C2=HView.extend({setEnabled:function(_s){this.numField.setEnabled(_s);this.stepper.setEnabled(_s);if(_s){this.stepper.show();}
else{this.stepper.hide();}},drawSubviews:function(){ELEM.setStyle(this.elemId,'overflow','visible');this.numField=HNumericTextControl.extend({refreshValue:function(){this.base();this.parent.parent.refreshValue(true);},textBlur:function(){this.setValue(this.validateText(this.getTextFieldValue()));}}).nu([0,0,this.rect.width-10,21],this,{events:{textEnter:false},minValue:this.options.minValue,maxValue:this.options.maxValue,valueObj:this.options.valueObj});this.stepper=HStepper.nu([this.rect.width-15,0,15,21],this,{minValue:this.options.minValue,maxValue:this.options.maxValue,valueObj:this.options.valueObj});}}),_a0=HRect.nu(0,0,50,21);this.yyyyValue=HValue.nu(false,2010);this.yyyy=_C2.nu(HRect.nu(_a0),this,{minValue:2010,maxValue:2020,valueObj:this.yyyyValue});_a0.setWidth(35);_a0.offsetBy(55,0);this.mmValue=HValue.nu(false,12);this.mm=_C2.nu(HRect.nu(_a0),this,{minValue:1,maxValue:12,valueObj:this.mmValue});_a0.offsetBy(40,0);this.ddValue=HValue.nu(false,24);this.dd=_C2.nu(HRect.nu(_a0),this,{minValue:1,maxValue:31,valueObj:this.ddValue});_a0.offsetBy(50,0);this.hValue=HValue.nu(false,22);this.h=_C2.nu(HRect.nu(_a0),this,{minValue:0,maxValue:23,valueObj:this.hValue});_a0.offsetBy(40,0);this.mValue=HValue.nu(false,45);this.m=_C2.nu(HRect.nu(_a0),this,{minValue:0,maxValue:59,valueObj:this.mValue});_a0.offsetBy(37,2);_a0.setWidth(60);HStringView.nu(HRect.nu(_a0),this,{valueObj:HVM.values[this.options.tzValueId]});this.refreshValue();}});HLocale.components.HTimeSheet={strings:{newItemLabel:'New item'}};var
HTimeSheet=HControl.extend({debug:false,localeStrings:HLocale.components.HTimeSheet.strings,componentName:'timesheet',markupElemNames:['label','value','timeline'],defaultEvents:{draggable:true,click:true,doubleClick:true,resize:true},controlDefaults:HControlDefaults.extend({timeStart:0,timeEnd:86399,tzOffset:0,itemMinHeight:16,hideHours:false,autoLabel:false,autoLabelFn:'formatDate',autoLabelFnOptions:{longWeekDay:true},notchesPerHour:4,itemOffsetLeft:64,itemOffsetRight:0,itemOffsetTop:20,itemOffsetBottom:0,itemDisplayTime:true,allowClickCreate:false,allowDoubleClickCreate:true,minDragSize:5,hourOffsetTop:-4,constructor:function(_7){if(this.defaultLabel===undefined){this.defaultLabel=_7.localeStrings.newItemLabel;}}}),themeSettings:function(_i7,_j7,_k7,_l7,_m7){if(this.options.hideHours){ELEM.addClassName(this.elemId,'nohours');this.options.itemOffsetLeft=0;}
else if(_i7!==undefined){this.options.itemOffsetLeft=_i7;}
if(_j7!==undefined){this.options.itemOffsetTop=_j7;}
if(_k7!==undefined){this.options.itemOffsetRight=_k7;}
if(_l7!==undefined){this.options.itemOffsetBottom=_l7;}
if(_m7!==undefined){this.options.hourOffsetTop=_m7;}},autoLabel:function(){var
_B2=HLocale.dateTime,_h=_B2[this.options.autoLabelFn](this.options.timeStart,this.options.autoLabelFnOptions);if(this.label!==_h){this.label=_h;this.refreshLabel();}},clearHours:function(){for(var i=0;i<this.hourItems.length;i++){ELEM.del(this.hourItems[i]);}},drawHours:function(){var
_V0=this.markupElemIds.timeline,_mb=new Date(this.options.timeStart*1000),_nb=new Date(this.options.timeEnd*1000),_I4=_mb.getUTCHours(),_n7=_nb.getUTCHours(),_o7=(_n7-_I4)+1,_a4=ELEM.getSize(_V0)[1],_J0=this.options.itemOffsetTop,_height=_a4-_J0-this.options.itemOffsetBottom,_H4=_height/_o7,_y3=this.options.notchesPerHour,_ye=_H4/_y3,_z2=_I4,_p7=_a4-_height-_J0-2,_y2,_A3,_q7,_B3,i,_r7=_H4/_y3,_D3,_s7;ELEM.setStyle(_V0,'visibility','hidden',true);ELEM.setStyle(this.markupElemIds.value,'bottom',_p7+'px');if(this['hourItems']!==undefined){this.clearHours();}
this.itemOptions={notchHeight:_r7,notches:(_o7*_y3),offsetTop:_J0,offsetBottom:_p7,height:_height};this.hourItems=[];for(;_z2<(_n7+1);_z2++){_y2=ELEM.make(this.markupElemIds.timeline,'div');_B3=Math.round(_J0+(_z2*_H4));if(_z2!==_I4){_q7=_B3+this.options.hourOffsetTop;ELEM.setStyle(_y2,'top',_q7+'px');ELEM.addClassName(_y2,'timesheet_timeline_hour');ELEM.setHTML(_y2,_z2+':00');this.hourItems.push(_y2);_A3=ELEM.make(_V0,'div');ELEM.addClassName(_A3,'timesheet_timeline_line');ELEM.setStyle(_A3,'top',_B3+'px');this.hourItems.push(_A3);}
for(i=1;i<_y3;i++){_D3=ELEM.make(_V0,'div');ELEM.addClassName(_D3,'timesheet_timeline_notch');_s7=Math.round(_B3+(_r7*i));ELEM.setStyle(_D3,'top',_s7+'px');this.hourItems.push(_D3);}}
ELEM.setStyle(this.markupElemIds.timeline,'visibility','inherit');},refresh:function(){if(this.drawn){if(this.options.autoLabel){this.autoLabel();}
this.drawHours();}
this.base();},setTzOffset:function(_wb){this.options.tzOffset=_wb;this.refresh();},setTimeStart:function(_P){this.options.timeStart=_P;this.refresh();},setTimeEnd:function(_p0){this.options.timeEnd=_p0;this.refresh();},setTimeRange:function(_c0){if((_c0 instanceof Array)&&(_c0.length===2)){this.setTimeStart(_c0[0]);this.setTimeEnd(_c0[1]);}
else if((_c0 instanceof Object)&&(_c0['timeStart']!==undefined)&&(_c0['timeEnd']!==undefined)){this.setTimeStart(_c0.timeStart);this.setTimeEnd(_c0.timeEnd);}},setDate:function(_4){var
_c1=(this.options.timeEnd-this.options.timeStart),_xb=[_4,_4+_c1];this.setTimeRange(_xb);this.refresh();},drawSubviews:function(){this.drawHours();var
_3=this.options,_G4=Math.round(3600/_3.notchesPerHour),_yb={label:'',start:0,duration:_G4,color:'#cc0000'};this.dragPreviewRect=this.rectFromValue({start:_3.timeStart,duration:_G4});this.minDuration=_G4;this.dragPreview=HTimeSheetItem.nu(this.dragPreviewRect,this,{value:_yb,visible:false,displayTime:this.options.itemDisplayTime});this.dragPreview.setStyleOfPart('state','color','#fff');},click:function(x,y,b){var
prevClickTime=false,notCreated=!this.clickCreated&&!this.doubleClickCreated&&!this.dragCreated;if(!this.startDragTime&&this.prevClickTime){prevClickTime=this.prevClickTime;}
else if(this.startDragTime){prevClickTime=this.startDragTime;}
if(notCreated&&this.options.allowClickCreate){this.clickCreate(x,y);this.clickCreated=true;this.doubleClickCreated=false;this.prevClickTime=false;}
else if(notCreated&&this.options.allowDoubleClickCreate){var
currTime=new Date().getTime(),timeDiff=prevClickTime?(currTime-prevClickTime):-1;if(timeDiff>150&&timeDiff<500&&!this.doubleClickCreated){this.clickCreate(x,y);this.clickCreated=false;this.doubleClickCreated=true;this.doubleClickSimCreated=true;}
else{this.doubleClickCreated=false;}
this.prevClickTime=currTime;}
else{this.clickCreated=false;this.doubleClickCreated=false;this.prevClickTime=false;}},clickCreate:function(x,y){var
_W=this.pxToTime(y-this.pageY()),_F0=_W+this.minDuration;this.refreshDragPreview(_W,_F0);this.dragPreview.bringToFront();this.dragPreview.show();if(this.activateEditor(this.dragPreview)){this.editor.createItem(HVM.clone(this.dragPreview.value));}
else{this.dragPreview.hide();}},doubleClick:function(x,y){this.prevClickTime=false;this.doubleClickCreated=false;var notCreated=!this.clickCreated&&!this.doubleClickCreated&&!this.doubleClickSimCreated&&!this.dragCreated;if(!this.options.allowDoubleClickCreate&&this.options.allowClickCreate&&notCreated){this.click(x,y);}
else if(this.options.allowDoubleClickCreate&&!this.options.allowClickCreate&&notCreated){this.clickCreate(x,y);this.clickCreated=false;this.doubleClickCreated=true;}
else{this.clickCreated=false;}
this.doubleClickSimCreated=false;},refreshDragPreview:function(_W,_F0){this.dragPreviewRect.setTop(this.timeToPx(_W,true));this.dragPreviewRect.setBottom(this.timeToPx(_F0,true));if(this.dragPreviewRect.height<this.options.itemMinHeight){this.dragPreviewRect.setHeight(this.options.itemMinHeight);}
this.dragPreview.drawRect();this.dragPreview.value.start=_W;this.dragPreview.value.duration=_F0-_W;this.dragPreview.refreshValue();},startDrag:function(x,y,b){this._zb=y;this.startDragTime=this.pxToTime(y-this.pageY());this.refreshDragPreview(this.startDragTime,this.startDragTime+this.minDuration);this.dragPreview.bringToFront();this.dragPreview.show();return true;},drag:function(x,y,b){var
_x2=this.pxToTime(y-this.pageY()),_W,_F0;if(_x2<this.startDragTime){_W=_x2;_F0=this.startDragTime;}
else{_F0=_x2;_W=this.startDragTime;}
this.refreshDragPreview(_W,_F0);return true;},endDrag:function(x,y,b){var
_x2=this.pxToTime(y-this.pageY()),_t7=Math.abs(this._zb-y)>=this.options.minDragSize;this.dragPreview.hide();if(_x2!==this.startDragTime){if(_t7){if(this.activateEditor(this.dragPreview)){this.dragCreated=true;this.editor.createItem(HVM.clone(this.dragPreview.value));return true;}}
this.dragCreated=false;}
else{this.dragCreated=false;this.clickCreated=false;this.startDragTime=false;this.click(x,y,b);return true;}
return false;},resize:function(){this.base();this.refresh();},snapTime:function(_J){var
_3=this.options,_u7=new Date(Math.round(_J)*1000),_F4=Math.round(3600/_3.notchesPerHour),_Cb=_F4*0.5,_Db=(_u7.getUTCMinutes()*60)+_u7.getUTCSeconds(),_E4=_Db%_F4;if(_E4>_Cb){_J+=_F4-_E4;}
else{_J-=_E4;}
return _J;},snapPx:function(_B){var
_J=this.pxToTime(_B);_J=this.snapTime(_J);return this.timeToPx(_J);},activateEditor:function(_q){if(this['editor']){var _72=this.editor;_72.setTimeSheetItem(_q);_q.bringToFront();_72.bringToFront();_72.show();return true;}
return false;},setEditor:function(_72){this.editor=_72;},die:function(){this.editor&&this.editor.die();this.editor=null;this.base();},pxToTime:function(_B,_Fb){var
_3=this.options,_P=_3.timeStart,_p0=_3.timeEnd,_c0=_p0-_P,_71=this.itemOptions,_N=_71.offsetTop+1,_height=_71.height,_C4=_height/_c0,_J;_B-=_N;_J=_P+(_B/_C4);if(!_Fb){_J=this.snapTime(_J);}
if(_J>_3.timeEnd){_J=_3.timeEnd;}
else if(_J<_3.timeStart){_J=_3.timeStart;}
return Math.round(_J);},timeToPx:function(_E0,_Hb){if(_Hb){_E0=this.snapTime(_E0);}
var
_3=this.options,_P=_3.timeStart,_p0=_3.timeEnd;if(_E0<_P){_E0=_P;}
if(_E0>_p0){_E0=_p0;}
var
_c0=_p0-_P,_71=this.itemOptions,_N=_71.offsetTop,_height=_71.height,_C4=_height/_c0,_J=_E0-_P,_B=_N+(_J*_C4);return Math.round(_B);},rectFromValue:function(_2){var
_Y=this.timeToPx(_2.start),_o0=this.timeToPx(_2.start+_2.duration),_82=this.options.itemOffsetLeft,_Ib=this.rect.width-this.options.itemOffsetRight-2,_1;if(_Y==='underflow'){_Y=_71.offsetTop;}
else if(_Y==='overflow'){return false;}
if(_o0==='underflow'){return false;}
else if(_o0==='overflow'){_o0=_71.offsetTop+_71.height;}
_1=HRect.nu(_82,_Y,_Ib,_o0);if(_1.height<this.options.itemMinHeight){_1.setHeight(this.options.itemMinHeight);}
return _1;},createTimeSheetItem:function(_2){var
_1=this.rectFromValue(_2),_q;if(_1===false){return false;}
_q=HTimeSheetItem.nu(_1,this,{value:_2,displayTime:this.options.itemDisplayTime,events:{draggable:true,doubleClick:true}});return _q;},drawTimeSheetItems:function(){var
_y=this.value,i=0,_2,_q,_Q=this.timeSheetItems;if((_y instanceof Array)&&(_y.length>0)){for(;i<_y.length;i++){_2=_y[i];_q=this.createTimeSheetItem(_2);if(_q){_Q.push(_q);}}}},_Jb:function(){if(this.timeSheetItems===undefined){this.timeSheetItems=[];}
else if(this.timeSheetItems.length>0){for(var i=0;i<this.timeSheetItems.length;i++){this.timeSheetItems[i].die();}
this.timeSheetItems=[];}},_v7:function(i,j,_O0,_k3,_Q){if(_k3===undefined){_k3=this.timeSheetItems[i].rect;}
if(_Q===undefined){_Q=this.timeSheetItems;}
var
_Kb=(i!==j),_Lb=(_O0.indexOf(i)===-1),_Mb=(_O0.indexOf(j)===-1),_w7=_Q[j].rect;if(!_Kb){return false;}
if(!_Lb){return false;}
if(_Mb){if(_w7.intersects(_k3,1,1)||_k3.intersects(_w7,1,1)){return true;}}
return false;},_Ob:function(_C){var
i=1,_z=0,_h0=1,_A4=1,_x7=0;for(;i<_C.length;i++){if((_C[i]-_C[i-1]===1)&&(_z===i-_h0)){_h0+=1;}
else{_z=i;_h0=1;}
if(_h0>_A4){_x7=_z;_A4=_h0;}}
return[_x7,_A4];},_Qb:function(){var
_r0,_Q=this._y7(),_O0=[],_z4=0,i=0,j;for(;i<_Q.length;i++){_r0=0;for(j=0;j<_Q.length;j++){if(this._v7(i,j,_O0,_Q[i].rect,_Q)){_r0++;_O0.push(j);}}
if(_r0!==0){_O0.push(i);if(_r0>_z4){_z4=_r0;}}}
return _z4;},_y7:function(_y4){if(_y4===undefined){_y4=function(a,b){return(b.rect.height-a.rect.height);};}
var
i=0,_C=[],_Q=this.timeSheetItems;for(;i<_Q.length;i++){_C.push(_Q[i]);}
_C=_C.sort(_y4);return _C;},_Sb:function(){var
i,j,k,l,_3=this.options,_1=this.rect,_r0=this._Qb(),_v0=(_1.width-_3.itemOffsetRight-_3.itemOffsetLeft),_t=_3.itemOffsetLeft,_width=Math.floor(_v0/(_r0+1)),_Q=this._y7(),_x4=_Q.length,_N0,_E3,_80,_w4,_C3=0,_B1,_v4=[],_q3,_x1,_t4,_u0,_a1,_O0;if(_r0===0){return false;}
_80=_t+(_width*(_r0+1));for(i=0;i<_x4;i++){_N0=_Q[i].rect;_N0.setLeft(_80);_N0.setRight(_80+_width);}
for(l=0;l<3;l++){for(i=0;i<_x4;i++){_N0=_Q[i].rect;if(l===1){_80=_t+(_v4[i]*_width);_N0.setLeft(_80);_N0.setRight(_80+_width);continue;}
_E3=HRect.nu(_N0);_q3=[];_x1=[];for(k=0;k<_r0+1;k++){_80=_t+(k*_width);_E3.setLeft(_80);_E3.setRight(_80+_width);_O0=[];for(j=0;j<_x4;j++){if(this._v7(i,j,_O0,_E3,_Q)){if(_q3.indexOf(k)===-1){_q3.push(k);}}}
if(_x1.indexOf(k)===-1&&_q3.indexOf(k)===-1){_x1.push(k);}}
if(l===0){_B1=_x1[0];_v4.push(_B1);_80=_t+(_B1*_width);_w4=_80+_width;if(_C3<_B1){_C3=_B1;}}
else{if(_x1.length>0){_t4=this._Ob(_x1);_u0=_x1[_t4[0]];_a1=_t4[1];}
else{_B1=_v4[i];_u0=_B1;_a1=1;}
_80=_t+(_u0*_width);_w4=_80+(_a1*_width);}
_N0.setLeft(_80);_N0.setRight(_w4);}
if(l===0){_r0=_C3;_width=Math.floor(_v0/(_C3+1));}}
return true;},drawTimeline:function(){this._Jb();this.drawTimeSheetItems();this._Sb();for(var i=0;i<this.timeSheetItems.length;i++){this.timeSheetItems[i].drawRect();}},_Wb:SHA.nu(8),refreshValue:function(){if(!this.itemOptions){return;}
var
_Xb=COMM.Values.encode(this.value),_Yb=this.rect.toString(),_Zb=this.options.timeStart+':'+this.options.timeEnd,_z7=this._Wb.strSHA1(_Xb+_Yb+_Zb);if(this._0c!==_z7){this.dragPreview.hide();this._0c=_z7;this.drawTimeline();}}});var
HTimeSheetItem=HControl.extend({componentName:'timesheet_item',markupElemNames:['bg','label','state','icons','value','subview'],controlDefaults:HControlDefaults.extend({displayTime:true}),drawIcon:function(_A7,_1c){var
_G3=ELEM.make(this.markupElemIds.icons,'div');ELEM.addClassName(_G3,'timesheet_item_icon');ELEM.setStyle(_G3,'right',((_A7*16)+_A7)+'px');ELEM.setStyle(_G3,'background-position','0px '+(_1c*-16)+'px');return _G3;},clearAllIcons:function(){if(this.icons instanceof Array){for(var i=0;i<this.icons.length;i++){ELEM.del(this.icons[i]);}}
this.icons=[];},die:function(){this.clearAllIcons();this.icons=null;this.base();},refreshState:function(_96,_k0){if(!this.options.displayTime){return;}
var
_W=_96||this.value.start,_F0=_W+(_k0||this.value.duration),_B2=HLocale.dateTime,_2c=_B2.formatTime(_W)+_B2.strings.rangeDelimitter+_B2.formatTime(_F0);ELEM.setHTML(this.markupElemIds.state,_2c);},refreshValue:function(){if(!(this.value instanceof Object)){return;}
this.drawRect();if(this.value.color){this.setStyleOfPart('bg','background-color',this.value.color);}
else{this.setStyleOfPart('bg','background-color','#999');}
if(this.value.label){this.setLabel(this.value.label);}
if(this.value.locked){ELEM.addClassName(this.elemId,'locked');}
else{ELEM.removeClassName(this.elemId,'locked');}
this.refreshState();this.clearAllIcons();if(this.value.icons instanceof Array){for(var i=0;i<this.value.icons.length;i++){this.icons.push(this.drawIcon(i,this.value.icons[i]));}}},click:function(){this.bringToFront();},doubleClick:function(x,y){this.bringToFront();var _E0=this.parent.pxToTime(y-this.parent.pageY());this.parent.activateEditor(this);},dragMode:0,_s4:function(){return(this.value instanceof Object)&&(!this.value.locked);},startDrag:function(x,y){this.bringToFront();if(this._s4()){var
_F3=y-this.pageY(),_r4=this.rect.height-_F3,_N9=(_F3>=0&&_F3<=6),_09=(_r4>=0&&_r4<=6),_Q9=(_F3>6&&_r4>6);if(_N9){this.dragMode=2;}
else if(_09){this.dragMode=3;}
else if(_Q9){this.dragMode=1;}
else{this.dragMode=0;}
if(this.dragMode===0){this.originY=false;}
else{var
_f5=y-this.parent.pageY(),_U9=this.parent.pageY(),_v3=this.value.start,_B7=_v3+this.value.duration;this.originY=_f5;this.originTopPx=this.rect.top;this.originBottomPx=this.rect.bottom;this.originTimeStart=_v3;this.originTimeEnd=_B7;this.originDuration=_B7-_v3;this.dragTimeStart=_v3;this.dragDuration=this.originDuration;}}},drag:function(x,y){if(this._s4()&&(this.dragMode!==0)){y-=this.parent.pageY();var
_C7=y-this.originY,_Y=this.parent.snapPx(this.originTopPx+_C7),_U9=this.parent.pageY(),_o0,_q4,_Be,_X1,_P,_p0,_k0;if(this.dragMode===1){_X1=this.parent.timeToPx(this.parent.options.timeEnd)-this.rect.height;if(_Y>_X1){_Y=_X1;}
_P=this.parent.pxToTime(_Y);_k0=this.originDuration;this.rect.offsetTo(this.rect.left,_Y);this.drawRect();this.dragTimeStart=_P;this.dragDuration=_k0;}
else if(this.dragMode===2){_X1=this.parent.timeToPx(this.originTimeEnd-this.parent.minDuration);if(_Y>_X1){_Y=_X1;}
_P=this.parent.pxToTime(_Y);_p0=this.originTimeEnd;if((this.rect.bottom-_Y)<this.parent.options.itemMinHeight){_Y=this.rect.bottom-this.parent.options.itemMinHeight;}
this.rect.setTop(_Y);this.drawRect();this.dragTimeStart=_P;this.dragDuration=_p0-_P;}
else if(this.dragMode===3){_q4=this.parent.timeToPx(this.originTimeStart+this.parent.minDuration);_o0=this.parent.snapPx(this.originBottomPx+_C7);if(_o0<_q4){_o0=_q4;}
_P=this.originTimeStart;_p0=this.parent.pxToTime(_o0);if(_o0-this.rect.top<this.parent.options.itemMinHeight){_o0=this.rect.top+this.parent.options.itemMinHeight;}
this.rect.setBottom(_o0);this.drawRect();this.dragTimeStart=_P;this.dragDuration=_p0-_P;}
this.refreshState(this.dragTimeStart,this.dragDuration);}},endDrag:function(x,y){if(this._s4()&&(this.dragMode!==0)){var
_ha=(this.dragTimeStart!==this.originTimeStart)&&(this.dragTimeStart!==this.value.start),_ia=(this.dragDuration!==this.originDuration)&&(this.dragDuration!==this.value.duration);if(_ha||_ia){if(this.parent['editor']){var _ka={id:this.value.id,start:this.dragTimeStart,duration:this.dragDuration,label:this.value.label};this.parent.editor.modifyItem(_ka);}}}}});var HTable;HTable=HControl.extend({componentName:'table',markupElemNames:['bg','header','content','header-columns'],_Je:function(){var _R,_id,_j,_w;if(this._K7){_w=this._K7;for(_R=0,_j=_w.length;_R<_j;_R++){_id=_w[_R];ELEM.del(_id);}}
this._K7=[];this._Ke=[];return this._Ee=[];},_hb:function(_F,i){return console.log('row:',_F,', i:',i);},_ib:function(){var i,_j,_i4,_F,_2;_2=this.value;_i4=[];for(i=0,_j=_2.length;i<_j;i++){_F=_2[i];_i4.push(this._hb(_F,i));}
return _i4;},refreshValue:function(){if(this.drawn&&(this.value.constructor===Array)){return this._ib();}}});var
SVGControl=HControl.extend({isSVGContainer:true,_h4:'http://www.w3.org/2000/svg',_kb:['position:absolute','top:0px','left:0px','right:0px','bottom:0px'].join(';'),getPictElem:function(){return ELEM.get(this.pictId);},getPictElemById:function(_41){return this._l0[_41];},_l0:null,_o3:null,_ub:function(){var
_0=this,_k=(_0._o3.length===0)?_0._l0.length:_0._o3.shift();return _k;},_61:function(_n,_X){_n=_n?_n:0;var
_0=this,_k=_0._ub(),_E2=document.createElementNS(_0._h4,_X),_G0=_0._l0[_n];if(_G0===undefined||_G0===null){_G0=_0._l0[0];}
_0._l0[_k]=_E2;_G0.appendChild(_E2);return _k;},_De:function(_k){var
_0=this,_E2=_0._l0[_k],_G0=_E2.parentNode;_G0.removeChild(_E2);_0._l0[_k]=null;_0._o3.push(_k);},makeGroupElem:function(_1,_n,_3){var
_0=this,_k=_0._61(_n,'g');_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{},_3.style));return _k;},makeRectElem:function(_1,_n,_3){var
_0=this,_k=_0._61(_n,'rect');_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{x:_1[0],y:_1[1],width:_1[2],height:_1[3]},_3.style));return _k;},makeCircleElem:function(_e4,_n,_3){var
_0=this,_k=_0._61(_n,'circle');_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{cx:_e4[0],cy:_e4[1],r:_e4[2]},_3.style));return _k;},makeEllipseElem:function(_w2,_n,_3){var
_0=this,_k=_0._61(_n,'ellipse');_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{cx:_w2[0],cy:_w2[1],rx:_w2[2],ry:_w2[3]},_3.style));return _k;},makeLineElem:function(_q1,_n,_3){var
_0=this,_k=_0._61(_n,'line');_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{x1:_q1[0],y1:_q1[1],x2:_q1[2],y2:_q1[3]},_3.style));return _k;},makePolylineElem:function(_P0,_n,_3){var
_0=this,_k=_0._61(_n,'polyline'),_v2=[],i=0;for(;i<_P0.length;i++){_v2.push(_P0[i].join(','));}
_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{points:_v2.join(' ')},_3.style));return _k;},makePolyLineElem:function(_P0,_n,_3){return this.makePolylineElem(_P0,_n,_3);},makePolygonElem:function(_P0,_n,_3){var
_0=this,_k=_0._61(_n,'polygon'),_v2=[],i=0;for(;i<_P0.length;i++){_v2.push(_P0[i].join(','));}
_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{points:_v2.join(' ')},_3.style));return _k;},makePathElem:function(_M1,_n,_3){var
_0=this,_k=_0._61(_n,'path');_0.setAttrsOfPictElem(_k,_0._d1(_3.attr,{d:_M1},_3.style));return _k;},_X9:function(_U,_92){if(!_U){_U={};}
if(!_92){_92={};}
var _L7=[],i;for(i in _92){if(_92[i]!==null&&_92[i]!==undefined){_U[i]=_92[i];}}
for(i in _U){if(_U[i]!==null&&_U[i]!==undefined){_L7.push([i,_U[i]].join(':'));}}
return _L7.join(';');},_d1:function(_e0,_M7,_Na){if(!_e0){_e0={};}
for(var i in _M7){if(_e0[i]===null||_e0[i]===undefined){_e0[i]=_M7[i];}}
_e0.style=this._X9(_e0.style,_Na);return _e0;},setAttrsOfPictElem:function(_41,_e0){for(i in _e0){if(_e0[i]!==null&&_e0[i]!==undefined){this.setAttrOfPictElem(_41,i,_e0[i]);}}},setAttrOfPictElem:function(_41,_Ta,_0b){this._l0[_41].setAttributeNS(null,_Ta,_0b);},drawRect:function(){if(!this.drawn){this.makeSvgElem();}
this.base();},makeSvgElem:function(){var _0=this,_H1=document.createElementNS(_0._h4,'svg'),_41=ELEM._J5(_H1);_0._l0=[];_0._o3=[];_0.pictId=_41;_0._l0[0]=_H1;ELEM.append(_41,_0.elemId);_H1.setAttribute('xmlns',_0._h4);if(this.options['viewBox']!==undefined){this.viewBox=this.options.viewBox.join(' ');}
else{this.viewBox='0 0 '+this.rect.width+' '+this.rect.height;}
if(this.options['preserveAspectRatio']!==undefined){this.preserveAspectRatio=this.options.preserveAspectRatio;}
else{this.preserveAspectRatio='xMidYMid slice';}
_H1.setAttribute('viewBox',this.viewBox);_H1.setAttribute('preserveAspectRatio',this.preserveAspectRatio);_H1.setAttribute('version','1.1');_H1.style.cssText=_0._kb;_0.setAttrsOfPictElem(0,{});}}),HPict=SVGControl;var
SVGItemBase=HClass.extend({constructor:function(_x3,_d,_3){this.shape=_x3;this.parent=_d;this.options=_3;this.parents=[];var i=0;for(;i<this.parent.parents.length;i++){this.parents.push(this.parent.parents[i]);}
this.parents.push(this.parent);for(i=this.parents.length-1;i>-1;i--){if(this.parents[i].isSVGContainer){this.pict=this.parents[i];break;}}
this.pictId=this.makeItem(_x3,_d.pictId,_3);this.extAction();},pictItemType:'',makeItem:function(_x3,_n,_3){return this.pict['make'+this.pictItemType+'Elem'](_x3,_n,_3);},extAction:function(){}},{factory:function(_la){var _z6={};_z6['pictItemType']=_la;return SVGItemBase.extend(_z6);}}),HPictItem=SVGItemBase;var
SVGRect=SVGItemBase.factory('Rect'),HPictRect=SVGRect;var
SVGCircle=SVGItemBase.factory('Circle'),HPictCircle=SVGCircle;var
SVGEllipse=SVGItemBase.factory('Ellipse'),HPictEllipse=SVGEllipse;var
SVGOval=HPictEllipse,HPictOval=SVGOval;var
SVGLine=SVGItemBase.factory('Line'),HPictLine=SVGLine;var
SVGPolyLine=SVGItemBase.factory('Polyline'),HPictPolyLine=SVGPolyLine,SVGPolyline=SVGPolyLine,HPictPolyline=SVGPolyLine;var
SVGPolygon=SVGItemBase.factory('Polygon'),HPictPolygon=SVGPolygon;var
SVGGroup=SVGItemBase.factory('Group'),HPictGroup=SVGGroup;var
SVGPath=SVGItemBase.factory('Path'),HPictPath=SVGPath;var
ReloadApp=HApplication.extend({reload:function(){var _g=this._g;if((!_g)||(_g==='/')){window.location.reload(true);}
else{window.location.href=_g;}},reset_session:function(){COMM.request(COMM.Transporter.HelloUrl+'/goodbye',{method:'POST',body:('ses_key='+COMM.Session.ses_key),async:true,onSuccess:function(){window.location.reload(true);},onFailure:function(){window.location.reload(true);}});},constructor:function(_S0,_G1,_g){var _0=this;_0.base();_0._S0=_S0;_0._G1=_G1;_0._g=_g;var _c2=ELEM.windowSize()[0],_d2=ELEM.windowSize()[1],_Da=parseInt(_c2/2,10),_Ea=parseInt(_d2/2,10),_Z4=400,_X4=270,_27=_Da-200,_37=_Ea-150;if(_27<10){_27=10;}
if(_37<10){_37=10;}
_0._47=HSheet.extend({drawSubviews:function(){var _0=this,_9=_0.markupElemIds['subview'],_Ga=ELEM.make(_9),_57=ELEM.make(_9),_67=ELEM.make(_9),_Ia=_0.getThemeGfxFile('reloadapp_warning.png');_0.setStyle('font-family','Arial, sans-serif');_0.setStyle('color','#000');_0.setStyle('font-size','13px');ELEM.setCSS(_Ga,'position:absolute;left:8px;top:8px;width:48px;height:48px;background-image:url('+_Ia+');');ELEM.setCSS(_57,'position:absolute;left:64px;top:8px;width:300px;height:24px;line-height:24px;vertical-align:middle;text-align:center;font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;');ELEM.setHTML(_57,_0.app._S0);ELEM.setCSS(_67,'position:absolute;left:64px;top:42px;width:332px;height:186px;border-bottom:1px dotted #999;line-height:18px;vertical-align:middle;overflow:auto;');ELEM.setHTML(_67,_0.app._G1);HButton.extend({click:this.app.reload}).nu(HRect.nu(280,234,380,258),_0,{label:'Reload',events:{click:true}});HButton.extend({click:this.app.reset_session}).nu(HRect.nu(20,234,170,258),_0,{label:'Reset session',events:{click:true}});}}).nu(HRect.nu(0,0,_Z4,_X4),_0,{label:_S0,value:0});COMM.Transporter.stop=true;},onIdle:function(){if(this['_47']){this._47.bringToFront();}}});