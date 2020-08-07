"use strict";var r=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Roles=exports.Del=exports.Put=exports.Post=exports.Get=exports.Class=exports.Ctx=exports.Routes=void 0;var u=r(require("@babel/runtime/helpers/toConsumableArray"));function _createForOfIteratorHelper(r,t){var n,o;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(n=_unsupportedIterableToArray(r))||t&&r&&"number"==typeof r.length){n&&(r=n);var u=0,a=function(){};return{s:a,n:function(){return u>=r.length?{done:!0}:{done:!1,value:r[u++]}},e:(o=function(r){throw r},e.toString=function(){return o.toString()},e),f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r){return o.apply(this,arguments)}var i,s=!0,c=!1;return{s:function(){n=r[Symbol.iterator]()},n:function(){var r=n.next();return s=r.done,r},e:function(t){function e(r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(r){c=!0,i=r}),f:function(){try{s||null==n.return||n.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var a,s=require("fs"),c=require("path"),l=require("../config").Config.jsonSchema,f=require("../config").Config.printRoute,p=[],y=!0;exports.Routes=p;var t=function(i){return function(t){var r=0,n=[];""!==i&&"number"!=typeof i||(i=null),i=null!==i&&void 0!==i?i:t.name.replace(/(\w*)[A-Z]\w*/,"/$1").toLocaleLowerCase();var o,u=_createForOfIteratorHelper(p);try{for(u.s();!(o=u.n()).done;){var a=o.value;if(a.c===t.name?(r=1,a.c=t,a.r=i+a.r,n.push(a)):1===r&&(r=2),2===r)break}}catch(r){u.e(r)}finally{u.f()}f&&(global.ONCE?(y=s.existsSync("./dist/routes/"),global.ONCE=!1):y=!0,y||s.mkdir("./dist/routes/",function(r){return r?console.error(e):void s.writeFile(c.resolve("./dist/routes","./".concat(t.name,".json")),JSON.stringify(n,["r","m","a"],"\t"),"utf8",function(r){r&&console.error(r)})}),y&&"/"!==i&&s.writeFile(c.resolve("./dist/routes","./".concat(t.name,".json")),JSON.stringify(n,["r","m","a"],"\t"),"utf8",function(r){r&&console.error(r)})),n=null}};exports.Class=t;var n=function(){for(var r=arguments.length,i=new Array(r),e=0;e<r;e++)i[e]=arguments[e];return function(r,e,t){for(var n={result:{type:"object"}},o=0,u=[].concat(i);o<u.length;o++){var a=u[o];Object.defineProperty(n,Object.keys(a)[0],{enumerable:!0,configurable:!1,value:{type:l[a[Object.keys(a)[0]]]}})}p[p.length-1].p=n}};exports.Ctx=n;var o=function(n,o){return function(r,e,t){a="string"==typeof n?n:"",p.push({c:r.constructor.name,a:e,m:"get",r:null!=o?o:a,s:"number"==typeof n?l[n]:"object",p:{}})}};exports.Get=o;var i=function(n,o){return function(r,e,t){a="string"==typeof n?n:"",p.push({c:r.constructor.name,a:e,m:"post",r:null!=o?o:a,s:"number"==typeof n?l[n]:"object",p:{}})}};exports.Post=i;var b=function(n,o){return function(r,e,t){a="string"==typeof n?n:"",p.push({c:r.constructor.name,a:e,m:"put",r:null!=o?o:a,s:"number"==typeof n?l[n]:"object",p:{}})}};exports.Put=b;var m=function(n,o){return function(r,e,t){a="string"==typeof n?n:"",p.push({c:r.constructor.name,a:e,m:"delete",r:null!=o?o:a,s:"number"==typeof n?l[n]:"object",p:{}})}};exports.Del=m;var v=function(o){return function(r,e,t){var n=p[p.length-1];n.w?n.w=[].concat((0,u.default)(n.w),(0,u.default)(o)):n.w=(0,u.default)(o),n=null}};exports.Roles=v;