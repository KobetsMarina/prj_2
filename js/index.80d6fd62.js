!function(){var e,t={9299:function(e,t,n){"use strict";n(1038),n(8783),n(4747);var r=document.getElementById("slider"),o=Array.from(r.querySelectorAll(".box-content")),l=r.querySelectorAll(".box-content .button-prev"),i=r.querySelectorAll(".box-content .button-next"),c=0,a=0,u=4e3;o[0].style.display="flex",o[0].querySelector("figure").classList.add("animate__fadeIn"),o[0].querySelector(".slider-wrapper").classList.add("animate__fadeIn");var s=function(){o.forEach((function(e){e.style.display="none",e.querySelector("figure").classList.remove("animate__fadeIn"),e.querySelector(".slider-wrapper").classList.remove("animate__fadeIn")}))},f=function(e){o.forEach((function(t,n){n===e&&(t.style.display="flex",t.querySelector("figure").classList.add("animate__fadeIn"),t.querySelector(".slider-wrapper").classList.add("animate__fadeIn"))}))};l.forEach((function(e){e.onclick=function(){var e=0===c?o.length:c;clearInterval(a),s(),f(c=e-1),d(u)}})),i.forEach((function(e){e.onclick=function(){var e=c===o.length-1?-1:c;clearInterval(a),s(),f(c=e+1),d(u)}}));var d=function(e){a=setInterval((function(){s(),c===o.length-1?c=0:c+=1,f(c)}),e)};d(u),n(9826);var p=document.getElementById("loginBtn"),g=document.getElementById("email1"),v=document.getElementById("password1"),h=document.getElementById("loginForm"),y=function(e){localStorage.setItem("login",JSON.stringify(e))};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}p.onclick=function(){var e=JSON.parse(localStorage.getItem("students"))||[],t=JSON.parse(localStorage.getItem("teacher"))||{},n=t.password,r=t.email;if(n!==v.value||r!==g.value){var o=e.find((function(e){return e.password===v.value&&e.email===g.value}));o?(y(o),window.location.href="student.html"):h.reset()}else y(t),window.location.href="teacher.html"},n(4916),n(3123),n(2526),n(1817),n(1539),n(2165),n(6992),n(3948),n(7042),n(8309);var x=document.querySelector("#loginBlock"),S=document.querySelector("#step1Block"),E=document.querySelector("#regBlock"),I=document.querySelector("#regBtn"),b=document.querySelector("#toLoginSvg"),w=document.querySelector("#toStep2Btn"),_=document.querySelector("#from3to2Svg"),O=document.querySelector("#createAccount"),R=document.querySelector("#name"),q=document.querySelector("#email"),k=document.querySelector("#password"),A=document.querySelector("#password_next"),L=(document.querySelector(".form-login"),{});I.addEventListener("click",(function(e){x.style.display="none",S.style.display="flex"})),b.addEventListener("click",(function(e){x.style.display="flex",S.style.display="none"})),_.addEventListener("click",(function(e){E.style.display="none",S.style.display="flex"})),w.addEventListener("click",(function(e){S.style.display="none",E.style.display="flex","user_student"===document.querySelector("form input:checked").id?L.type="student":L.type="teacher"})),O.addEventListener("click",(function(e){var t,n,r=(t=R.value.split(" "),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return l}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],l=r[1];if(!o||o.length<2||!l||l.length<2)return R.classList.add("error"),void console.error("введіть правильне імя та прізвище");if(k.value!==A.value)return k.classList.add("error"),A.classList.add("error"),void console.error("паролі мають бути однаковими");if(L.name=R.value,L.email=q.value,L.password=k.value,localStorage.setItem("login",JSON.stringify(L)),"student"===L.type){var i="student";if(localStorage.getItem(i)){var c=localStorage.getItem(i),a=JSON.parse(c);a.push(L),localStorage.setItem(i,JSON.stringify(a))}else localStorage.setItem(i,JSON.stringify([L]));window.location.href="student.html"}else localStorage.setItem("teacher",JSON.stringify(L)),window.location.href="teacher.html";querySelector(".form-login").reset()})),console.log("wizard")},1530:function(e,t,n){"use strict";var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},8533:function(e,t,n){"use strict";var r=n(2092).forEach,o=n(9341)("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},9341:function(e,t,n){"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},7007:function(e,t,n){"use strict";n(4916);var r=n(1320),o=n(7293),l=n(5112),i=n(8880),c=l("species"),a=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u="$0"==="a".replace(/./,"$0"),s=l("replace"),f=!!/./[s]&&""===/./[s]("a","$0"),d=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,s){var p=l(e),g=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),v=g&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!g||!v||"replace"===e&&(!a||!u||f)||"split"===e&&!d){var h=/./[p],y=n(p,""[e],(function(e,t,n,r,o){return t.exec===RegExp.prototype.exec?g&&!o?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=y[0],x=y[1];r(String.prototype,e,m),r(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}s&&i(RegExp.prototype[p],"sham",!0)}},7850:function(e,t,n){var r=n(111),o=n(4326),l=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==o(e))}},7651:function(e,t,n){var r=n(4326),o=n(2261);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var l=n.call(e,t);if("object"!=typeof l)throw TypeError("RegExp exec method returned something other than an Object or null");return l}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},2261:function(e,t,n){"use strict";var r,o,l=n(7066),i=n(2999),c=n(2309),a=RegExp.prototype.exec,u=c("native-string-replace",String.prototype.replace),s=a,f=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),d=i.UNSUPPORTED_Y||i.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||d)&&(s=function(e){var t,n,r,o,i=this,c=d&&i.sticky,s=l.call(i),g=i.source,v=0,h=e;return c&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),h=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",s)),p&&(n=new RegExp("^"+g+"$(?!\\s)",s)),f&&(t=i.lastIndex),r=a.call(c?n:i,h),c?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:f&&r&&(i.lastIndex=i.global?r.index+r[0].length:t),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=s},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){"use strict";var r=n(7293);function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},6707:function(e,t,n){var r=n(9670),o=n(3099),l=n(5112)("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||null==(n=r(i)[l])?t:o(n)}},9826:function(e,t,n){"use strict";var r=n(2109),o=n(2092).find,l=n(1223),i="find",c=!0;i in[]&&Array(1).find((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(i)},4916:function(e,t,n){"use strict";var r=n(2109),o=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},3123:function(e,t,n){"use strict";var r=n(7007),o=n(7850),l=n(9670),i=n(4488),c=n(6707),a=n(1530),u=n(7466),s=n(7651),f=n(2261),d=n(2999).UNSUPPORTED_Y,p=[].push,g=Math.min,v=4294967295;r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),l=void 0===n?v:n>>>0;if(0===l)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,l);for(var c,a,u,s=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,d+"g");(c=f.call(h,r))&&!((a=h.lastIndex)>g&&(s.push(r.slice(g,c.index)),c.length>1&&c.index<r.length&&p.apply(s,c.slice(1)),u=c[0].length,g=a,s.length>=l));)h.lastIndex===c.index&&h.lastIndex++;return g===r.length?!u&&h.test("")||s.push(""):s.push(r.slice(g)),s.length>l?s.slice(0,l):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=i(this),l=null==t?void 0:t[e];return void 0!==l?l.call(t,o,n):r.call(String(o),t,n)},function(e,o){var i=n(r,e,this,o,r!==t);if(i.done)return i.value;var f=l(e),p=String(this),h=c(f,RegExp),y=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(d?"g":"y"),x=new h(d?"^(?:"+f.source+")":f,m),S=void 0===o?v:o>>>0;if(0===S)return[];if(0===p.length)return null===s(x,p)?[p]:[];for(var E=0,I=0,b=[];I<p.length;){x.lastIndex=d?0:I;var w,_=s(x,d?p.slice(I):p);if(null===_||(w=g(u(x.lastIndex+(d?I:0)),p.length))===E)I=a(p,I,y);else{if(b.push(p.slice(E,I)),b.length===S)return b;for(var O=1;O<=_.length-1;O++)if(b.push(_[O]),b.length===S)return b;I=E=w}}return b.push(p.slice(E)),b}]}),d)},4747:function(e,t,n){var r=n(7854),o=n(8324),l=n(8533),i=n(8880);for(var c in o){var a=r[c],u=a&&a.prototype;if(u&&u.forEach!==l)try{i(u,"forEach",l)}catch(e){u.forEach=l}}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,o,l){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],l=e[u][2];for(var c=!0,a=0;a<n.length;a++)(!1&l||i>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(c=!1,l<i&&(i=l));c&&(e.splice(u--,1),t=o())}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,o,l]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,709:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,i=n[0],c=n[1],a=n[2],u=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var s=a(r);for(t&&t(n);u<i.length;u++)l=i[u],r.o(e,l)&&e[l]&&e[l][0](),e[i[u]]=0;return r.O(s)},n=self.webpackChunkjs_personal_projects=self.webpackChunkjs_personal_projects||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[272,212,709],(function(){return r(9299)}));o=r.O(o)}();
//# sourceMappingURL=index.80d6fd62.js.map