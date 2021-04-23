(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{146:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(50);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},147:function(t,e,n){"use strict";var r,a,o,c=n(154),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){o=!1}function i(t){if(t){if(t!==r){if(t.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,s()}}else r!==u&&(r=u,s())}function l(){return o||(o=function(){r||i(u);for(var t,e=r.split(""),n=[],a=c.nextValue();e.length>0;)a=c.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||u},characters:function(t){return i(t),r},seed:function(t){c.seed(t),a!==t&&(s(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},151:function(t,e,n){t.exports={phonebook:"PhoneBookView_phonebook__nehx5"}},152:function(t,e,n){"use strict";t.exports=n(153)},153:function(t,e,n){"use strict";var r=n(147),a=n(155),o=n(159),c=n(160)||0;function u(){return a(c)}t.exports=u,t.exports.generate=u,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return c=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},154:function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},155:function(t,e,n){"use strict";var r,a,o=n(156);n(147);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=o(7),e+=o(t),r>0&&(e+=o(r)),e+=o(n)}},156:function(t,e,n){"use strict";var r=n(147),a=n(157),o=n(158);t.exports=function(t){for(var e,n=0,c="";!e;)c+=o(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return c}},157:function(t,e,n){"use strict";var r,a="object"===typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(t){return a.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},158:function(t,e){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),o="";;)for(var c=t(a),u=a;u--;)if((o+=e[c[u]&r]||"").length===+n)return o}},159:function(t,e,n){"use strict";var r=n(147);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},160:function(t,e,n){"use strict";t.exports=0},161:function(t,e,n){t.exports={form:"Form_form__3biEX",label:"Form_label__1KqSV",input:"Form_input__xT_rG",add_btn:"Form_add_btn__2YuCS"}},162:function(t,e,n){t.exports={list:"ContactsList_list__3Bw0z",item:"ContactsList_item__CuA1f",name:"ContactsList_name__1Pvkl",btn:"ContactsList_btn__2KhUN"}},163:function(t,e,n){t.exports={input:"Filter_input__3fT3c",label:"Filter_label__NcPhs"}},164:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return L}));var r=n(0),a=n(14),o=n(51),c=n.n(o),u=n(151),s=n.n(u),i=n(146),l=n(28),f=n.n(l),b=n(11);f.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var h=n(152),p=n.n(h),m=n(161),j=n.n(m),d=n(142),x=n(2),O=function(){var t=Object(r.useState)(""),e=Object(i.a)(t,2),n=e[0],o=e[1],c=Object(r.useState)(""),u=Object(i.a)(c,2),s=u[0],l=u[1],h=Object(a.b)(),m=p.a.generate(),O=p.a.generate(),v=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":o(r);break;case"number":l(r);break;default:console.warn("Field type ".concat(n," is not processed"))}};return Object(x.jsxs)("form",{className:j.a.form,onSubmit:function(t){t.preventDefault(),n&&s?(h(function(t){var e=t.name,n=t.number;return function(t){t(Object(b.b)()),f.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(Object(b.c)(n))})).catch((function(e){return t(Object(b.a)(e.message))}))}}({name:n,number:s})),o(""),l("")):alert("Enter name and phone number!")},children:[Object(x.jsxs)("label",{htmlFor:m,className:j.a.label,children:["Name",Object(x.jsx)("input",{type:"text",name:"name",className:j.a.input,placeholder:"Enter name",value:n,onChange:v,id:m})]}),Object(x.jsxs)("label",{htmlFor:O,className:j.a.label,children:["Number",Object(x.jsx)("input",{type:"tel",name:"number",className:j.a.input,placeholder:"Enter phone number",value:s,onChange:v,id:O})]}),Object(x.jsx)(d.a,{variant:"primary",type:"submit",className:j.a.add_btn,children:"Add contact"})]})},v=n(35),g=function(t){return t.phoneBook.loading},_=function(t){return t.phoneBook.error},w=function(t){return t.phoneBook.filter},y=Object(v.a)([function(t){return t.phoneBook.contacts},w],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),k=n(162),N=n.n(k),C=function(){var t=Object(a.c)(y),e=Object(a.b)(),n=Object(r.useCallback)((function(t){return e(function(t){return function(e){e(Object(b.e)()),f.a.delete("/contacts/".concat(t)).then((function(){return e(Object(b.f)(t))})).catch((function(t){return e(Object(b.d)(t.message))}))}}(t))}),[e]);return Object(x.jsx)("ul",{className:N.a.list,children:t.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(x.jsxs)("li",{className:N.a.item,children:[Object(x.jsxs)("span",{className:N.a.name,children:[r,":"]})," ",Object(x.jsx)("span",{className:N.a.number,children:a}),Object(x.jsx)(d.a,{className:N.a.btn,variant:"outline-secondary",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},F=n(163),S=n.n(F),E=function(){var t=Object(a.c)(w),e=Object(a.b)(),n=Object(r.useCallback)((function(t){return e(Object(b.g)(t.target.value))}),[e]);return Object(x.jsx)("div",{className:S.a.filter,children:Object(x.jsxs)("label",{htmlFor:"",className:S.a.label,children:["Find contacts by name",Object(x.jsx)("input",{type:"text",name:"filter",placeholder:"Search",className:S.a.input,value:t,onChange:n})]})})},L=function(){var t=Object(a.c)(g),e=Object(a.c)(_),n=Object(a.b)();return Object(r.useEffect)((function(){return n((function(t){t(Object(b.i)()),f.a.get("/contacts").then((function(e){var n=e.data;return t(Object(b.j)(n))})).catch((function(e){return t(Object(b.h)(e.message))}))}))}),[n]),Object(x.jsxs)("div",{className:s.a.phonebook,children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(O,{}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(E,{}),t&&Object(x.jsx)(c.a,{type:"ThreeDots",color:"#424141",height:60,width:60,timeout:3e3}),e&&Object(x.jsx)("p",{children:"Oops! Something went wrong..."}),Object(x.jsx)(C,{})]})}}}]);
//# sourceMappingURL=ContactsPage.eaf2927c.chunk.js.map