(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"03dd":function(t,e,r){var n=r("eac5"),o=r("57a5"),a=Object.prototype,i=a.hasOwnProperty;function s(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}t.exports=s},"07c7":function(t,e){function r(){return!1}t.exports=r},"0d24":function(t,e,r){(function(t){var n=r("2b3e"),o=r("07c7"),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=i&&i.exports===a,c=s?n.Buffer:void 0,u=c?c.isBuffer:void 0,l=u||o;t.exports=l}).call(this,r("62e4")(t))},1304:function(t,e,r){var n=r("cd9d");function o(t){return"function"==typeof t?t:n}t.exports=o},"242e":function(t,e,r){var n=r("72af"),o=r("ec69");function a(t,e){return t&&n(t,e,o)}t.exports=a},"253c":function(t,e,r){var n=r("3729"),o=r("1310"),a="[object Arguments]";function i(t){return o(t)&&n(t)==a}t.exports=i},"3b73":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-field",{staticClass:"file"},[r("b-upload",{attrs:{accept:t.accept},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[r("a",{staticClass:"button is-primary"},[r("b-icon",{attrs:{icon:"upload","custom-size":"default"}}),r("span",[t._v(t._s(t.buttonLabel))])],1)]),t.file?r("span",{staticClass:"file-name"},[t._v(t._s(t.file.name))]):t._e()],1)},o=[],a={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},i=a,s=r("2877"),c=Object(s["a"])(i,n,o,!1,null,null,null);e["a"]=c.exports},"48a0":function(t,e,r){var n=r("242e"),o=r("950a"),a=o(n);t.exports=a},"50d8":function(t,e){function r(t,e){var r=-1,n=Array(t);while(++r<t)n[r]=e(r);return n}t.exports=r},"57a5":function(t,e,r){var n=r("91e9"),o=n(Object.keys,Object);t.exports=o},6747:function(t,e){var r=Array.isArray;t.exports=r},"6cd4":function(t,e,r){var n=r("8057"),o=r("48a0"),a=r("1304"),i=r("6747");function s(t,e){var r=i(t)?n:o;return r(t,a(e))}t.exports=s},"6fcd":function(t,e,r){var n=r("50d8"),o=r("d370"),a=r("6747"),i=r("0d24"),s=r("c098"),c=r("73ac"),u=Object.prototype,l=u.hasOwnProperty;function f(t,e){var r=a(t),u=!r&&o(t),f=!r&&!u&&i(t),p=!r&&!u&&!f&&c(t),d=r||u||f||p,m=d?n(t.length,String):[],b=m.length;for(var v in t)!e&&!l.call(t,v)||d&&("length"==v||f&&("offset"==v||"parent"==v)||p&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,b))||m.push(v);return m}t.exports=f},"72af":function(t,e,r){var n=r("99cd"),o=n();t.exports=o},"73ac":function(t,e,r){var n=r("743f"),o=r("b047"),a=r("99d3"),i=a&&a.isTypedArray,s=i?o(i):n;t.exports=s},"743f":function(t,e,r){var n=r("3729"),o=r("b218"),a=r("1310"),i="[object Arguments]",s="[object Array]",c="[object Boolean]",u="[object Date]",l="[object Error]",f="[object Function]",p="[object Map]",d="[object Number]",m="[object Object]",b="[object RegExp]",v="[object Set]",h="[object String]",y="[object WeakMap]",w="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",O="[object Float64Array]",x="[object Int8Array]",P="[object Int16Array]",k="[object Int32Array]",_="[object Uint8Array]",C="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",q={};function D(t){return a(t)&&o(t.length)&&!!q[n(t)]}q[g]=q[O]=q[x]=q[P]=q[k]=q[_]=q[C]=q[A]=q[E]=!0,q[i]=q[s]=q[w]=q[c]=q[j]=q[u]=q[l]=q[f]=q[p]=q[d]=q[m]=q[b]=q[v]=q[h]=q[y]=!1,t.exports=D},8057:function(t,e){function r(t,e){var r=-1,n=null==t?0:t.length;while(++r<n)if(!1===e(t[r],r,t))break;return t}t.exports=r},"91e9":function(t,e){function r(t,e){return function(r){return t(e(r))}}t.exports=r},"950a":function(t,e,r){var n=r("30c9");function o(t,e){return function(r,o){if(null==r)return r;if(!n(r))return t(r,o);var a=r.length,i=e?a:-1,s=Object(r);while(e?i--:++i<a)if(!1===o(s[i],i,s))break;return r}}t.exports=o},"99cd":function(t,e){function r(t){return function(e,r,n){var o=-1,a=Object(e),i=n(e),s=i.length;while(s--){var c=i[t?s:++o];if(!1===r(a[c],c,a))break}return e}}t.exports=r},"99d3":function(t,e,r){(function(t){var n=r("585a"),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o,s=i&&n.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(e){}}();t.exports=c}).call(this,r("62e4")(t))},b047:function(t,e){function r(t){return function(e){return t(e)}}t.exports=r},c641:function(t,e,r){t.exports=r("6cd4")},c66d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("title-bar",{attrs:{"title-stack":t.titleStack}}),r("hero-bar",[t._v("\n    Profile\n    "),r("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v("\n      Dashboard\n    ")])],1),r("section",{staticClass:"section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("profile-update-form")],1),r("div",{staticClass:"column is-two-fifths"},[r("card-component",{attrs:{title:"Profile",icon:"account"}},[r("div",{staticClass:"image is-user-avatar"},[r("img",{staticClass:"is-rounded",attrs:{src:t.userAvatar,alt:t.userName}})]),r("hr"),r("b-field",{attrs:{label:"Name"}},[r("b-input",{attrs:{value:t.userName,"custom-class":"is-static",readonly:""}})],1),r("hr"),r("b-field",{attrs:{label:"E-mail"}},[r("b-input",{attrs:{value:t.userEmail,"custom-class":"is-static",readonly:""}})],1)],1)],1)]),r("hr"),r("password-update-form")],1)],1)},o=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62"),s=r("6df7"),c=r("1e1d"),u=r("503b"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card-component",{attrs:{title:"Edit Profile",icon:"account-circle"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",{attrs:{horizontal:"",label:"Avatar"}},[r("file-picker")],1),r("hr"),r("b-field",{attrs:{horizontal:"",label:"Name",message:"Required. Your name"}},[r("b-input",{attrs:{name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-field",{attrs:{horizontal:"",label:"E-mail",message:"Required. Your e-mail"}},[r("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("hr"),r("b-field",{attrs:{horizontal:""}},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n          Submit\n        ")])])])],1)])},f=[],p=(r("c641"),r("3b73"));function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={name:"ProfileUpdateForm",components:{CardComponent:s["a"],FilePicker:p["a"]},data:function(){return{isFileUploaded:!1,isLoading:!1,form:{name:null,email:null}}},computed:m({},Object(i["b"])(["userName","userEmail"])),mounted:function(){this.form.name=this.userName,this.form.email=this.userEmail},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1,t.$store.commit("user",t.form),t.$snackbar.open({message:"Updated",queue:!1})},500)}},watch:{userName:function(t){this.form.name=t},userEmail:function(t){this.form.email=t}}},v=b,h=r("2877"),y=Object(h["a"])(v,l,f,!1,null,null,null),w=y.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card-component",{attrs:{title:"Change Password",icon:"lock"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",{attrs:{horizontal:"",label:"Current password",message:"Required. Your current password"}},[r("b-input",{attrs:{name:"password_current",type:"password",required:"",autcomplete:"current-password"},model:{value:t.form.password_current,callback:function(e){t.$set(t.form,"password_current",e)},expression:"form.password_current"}})],1),r("hr"),r("b-field",{attrs:{horizontal:"",label:"New password",message:"Required. New password"}},[r("b-input",{attrs:{name:"password",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-field",{attrs:{horizontal:"",label:"Confirm password",message:"Required. New password one more time"}},[r("b-input",{attrs:{name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1),r("hr"),r("b-field",{attrs:{horizontal:""}},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary",class:{"is-loading":t.isLoading},attrs:{type:"submit"}},[t._v("\n          Submit\n        ")])])])],1)])},g=[],O={name:"PasswordUpdateForm",components:{CardComponent:s["a"]},data:function(){return{isLoading:!1,form:{password_current:null,password:null,password_confirmation:null}}},methods:{submit:function(){var t=this;this.isLoading=!0,setTimeout(function(){t.isLoading=!1,t.$snackbar.open({message:"Updated",queue:!1},500)})}}},x=O,P=Object(h["a"])(x,j,g,!1,null,null,null),k=P.exports;function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var A={name:"Profile",components:{PasswordUpdateForm:k,ProfileUpdateForm:w,HeroBar:u["a"],TitleBar:c["a"],CardComponent:s["a"]},computed:C({titleStack:function(){return["Admin","Profile"]}},Object(i["b"])(["userName","userEmail","userAvatar"]))},E=A,q=Object(h["a"])(E,n,o,!1,null,null,null);e["default"]=q.exports},cd9d:function(t,e){function r(t){return t}t.exports=r},d370:function(t,e,r){var n=r("253c"),o=r("1310"),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!s.call(t,"callee")};t.exports=c},eac5:function(t,e){var r=Object.prototype;function n(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||r;return t===n}t.exports=n},ec69:function(t,e,r){var n=r("6fcd"),o=r("03dd"),a=r("30c9");function i(t){return a(t)?n(t):o(t)}t.exports=i}}]);
//# sourceMappingURL=profile.590ffece.js.map