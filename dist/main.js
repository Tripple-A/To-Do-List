!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var u=c(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:y(p,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,v=0;function y(e,t){var n,r,o;if(t.singleton){var a=v++;n=f||(f=s(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),r=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=d(e,t),s=0;s<n.length;s++){var l=c(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"a{\r\n    color: black\r\n}\r\n\r\n.display{\r\n    display:block;\r\n}\r\n\r\n.no-display{\r\n    display:none;\r\n}\r\n\r\n.btn-primary{\r\n   color: yellow;\r\n}\r\n\r\n.jumbo{\r\n    background-color: blue;\r\n    font-size: 46px;\r\n    color: yellow;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    padding: 20px;\r\n}\r\n\r\n.start{\r\n    font-family: cursive;\r\n    font-size: 26px;\r\n}\r\n\r\n.add-proj{\r\n    width:80%;\r\n    margin:10px;\r\n}\r\n\r\n.projects{\r\n    height: 600px;\r\n    padding:20px;\r\n    background-color:rgb(152, 187, 226);\r\n}\r\n\r\n.to-do{\r\n    background-color: rgb(152, 187, 226);;\r\n    text-align: center;\r\n}\r\n\r\n.col2{\r\n    background-color:rgb(230, 230, 112);\r\n}\r\n\r\n.bolden{\r\n    font-size: 20px;\r\n    color: blue;\r\n    font-weight: bold;\r\n}\r\n\r\n.red{\r\n    color:red;\r\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);n(0);const{todoForm:r}=document.forms,o=(e,t)=>({name:e,list:t}),a=(e,t)=>t.push(e);let i=[];const c=document.getElementById("add-project"),d=document.querySelector(".project-list"),s=document.querySelector(".add-proj"),l=document.querySelector(".create"),u=document.querySelector(".new-project"),p=document.querySelector(".cancel"),m=document.querySelector(".col2"),f=document.querySelector(".col3"),v=document.querySelector(".col4"),y=document.querySelector(".remove-form"),h=document.querySelector(".todo-form"),b=document.querySelector(".check"),{todoForm:L}=document.forms,g=()=>{localStorage.setItem("savedData",JSON.stringify(i))},E=e=>{e.classList.add("btn"),e.classList.add("btn-primary")},C=()=>{document.querySelectorAll(".grids").forEach(e=>e.parentNode.removeChild(e))},S=(e,t)=>{e.addEventListener("click",()=>{document.querySelectorAll(".do-without").forEach(e=>e.parentNode.removeChild(e)),h.classList.remove("no-display"),(e=>{r.title.value=e.title,r.description.value=e.description,r.date.value=e.dueDate,r.date.priority=e.priority})(t);const e=document.createElement("button");e.textContent="SAVE",e.classList.add("do-without"),E(e),h.appendChild(e),e.addEventListener("click",()=>{document.querySelector(".do-without").classList.add("no-display"),(e=>{e.title=r.title.value,e.description=r.description.value,e.dueDate=r.date.value,e.priority=r.priority.value})(t),g(),h.classList.add("no-display"),m.classList.add("no-display")})})},x=e=>{const t=document.createElement("p");t.textContent=e.name,t.classList.add("grids"),t.classList.add("bolden"),v.appendChild(t),e.list.forEach((t,n)=>{const r=document.createElement("a"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div");((e,t)=>{e.addEventListener("click",()=>{t.classList.remove("no-display")})})(r,i),r.href="#",i.classList.add(n),r.classList.add("grids"),o.classList.add("grids"),a.classList.add("grids"),r.classList.add("col-sm-4"),o.classList.add("col-sm-4"),a.classList.add("col-sm-4"),r.textContent=t.title,o.textContent=t.dueDate,a.textContent=t.priority,i.classList.add("grids"),i.classList.add("col-sm-12"),((e,t,n,r)=>{const o=document.createElement("div"),a=document.createElement("button"),i=document.createElement("button");E(a),E(i),S(a,n),a.textContent="EDIT TODO",i.textContent="DELETE TODO",o.innerHTML="Description:",o.innerHTML+=n.description,i.addEventListener("click",()=>{t.list.splice(r,1),g(),m.classList.add("no-display")}),e.appendChild(o),e.appendChild(a),e.appendChild(i)})(i,e,t,n),i.classList.add("no-display"),b.appendChild(r),b.appendChild(o),b.appendChild(a),b.appendChild(i)})},q=()=>{L.title.value="",L.description.value="",L.date.value=""},j=e=>{document.querySelectorAll(".do-without").forEach(e=>e.parentNode.removeChild(e));const t=document.createElement("button");E(t),t.classList.add("do-without"),t.textContent="CREATE TODO",h.appendChild(t),t.addEventListener("click",()=>{if((()=>{const e=L.title.value,t=L.description.value,n=L.date.value,r=L.priority.value;return""!==e&&""!==t&&""!==n&&""!==r||(document.querySelector(".form").classList.remove("no-display"),!1)})()){const c=(t=r.title.value,n=r.description.value,o=r.date.value,i=r.priority.value,{title:t,description:n,dueDate:o,priority:i});a(c,e.list),g(),C(),x(e),q(),document.querySelector(".todo-form").classList.add("no-display"),document.querySelector(".red").classList.add("no-display")}var t,n,o,i})},k=()=>{document.querySelectorAll(".dispensable").forEach(e=>e.parentNode.removeChild(e)),i.forEach((e,t)=>{const n=document.createElement("li"),r=document.createElement("a"),o=((e,t,n)=>{const r=document.createElement("button"),o=document.createElement("button");return e.addEventListener("click",()=>{document.querySelectorAll(".gridder").forEach(e=>e.parentNode.removeChild(e)),document.querySelector(".todo-form").classList.add("no-display"),C(),x(t),m.classList.remove("no-display"),o.textContent="DELETE PROJECT",o.classList.add("gridder"),o.id=n,f.appendChild(o),f.appendChild(r),r.textContent="ADD TODO",r.classList.add("gridder"),E(r),E(o),r.addEventListener("click",()=>{q(),document.querySelector(".todo-form").classList.remove("no-display"),j(t)})}),o})(r,e,t);var a;(a=o).addEventListener("click",()=>{const e=parseInt(a.id,10);i.splice(e,1),g(),m.classList.add("no-display")}),o.onclick=k,r.textContent=e.name,r.href="#",n.classList.add("dispensable"),n.appendChild(r),d.appendChild(n)})};(()=>{if(void 0===localStorage.savedData){const e=o("My first Project",[]);a(e,i),g()}else i=JSON.parse(localStorage.getItem("savedData"))})(),k(),p.addEventListener("click",()=>{u.value="",s.classList.add("no-display")}),l.addEventListener("click",()=>{if(""!==u.value||(document.querySelector(".name").classList.remove("no-display"),0)){const e=o(u.value,[]);a(e,i),g(),s.classList.add("no-display"),u.value="",k(),document.querySelector(".name").classList.add("no-display")}}),c.addEventListener("click",()=>{s.classList.remove("no-display")}),y.addEventListener("click",()=>{document.querySelector(".todo-form").classList.add("no-display")})}]);