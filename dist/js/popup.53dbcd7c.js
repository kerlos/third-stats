(function(e){function t(t){for(var r,o,s=t[0],c=t[1],i=t[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={popup:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("5399")},"025e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("b85c"),a=function(e){var t=[];function n(e){if(e){var a,u=Object(r["a"])(e);try{for(u.s();!(a=u.n()).done;){var o=a.value;t.push(o),n(o.subFolders)}}catch(s){u.e(s)}finally{u.f()}}}return n(e.folders),t}},5399:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"popup"}},[n("div",{staticClass:"container"},[e.waiting?n("div",{staticClass:"loading"}):e._e(),n("h3",[e._v(e._s(e.accounts.length)+" Accounts")]),n("div",{staticClass:"accounts"},e._l(e.accounts,(function(t){return n("div",{key:t.id,on:{click:function(t){return t.preventDefault(),e.openTab(t)}}},[n("div",[e._v(e._s(t.name))]),n("div",{staticClass:"text-small text-secondary"},[e._v(e._s(t.messageCount)+" messages in "+e._s(t.folderCount)+" folders")])])})),0)])])},u=[],o=(n("4de4"),n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),s=n("025e"),c={name:"Popup",data:function(){return{accounts:[],waiting:!0}},created:function(){this.getAccounts()},methods:{getAccounts:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,browser.accounts.list();case 2:t=e.sent,t=t.filter((function(e){return"none"!=e.type})),n=this,Promise.all(t.map(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object(s["a"])(t),t.folderCount=r.length,t.messageCount=0,e.next=5,Promise.all(r.map(function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.countMessages(r);case 2:a=e.sent,t.messageCount+=a;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(){r.waiting=!1})),this.accounts=t;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),countMessages:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,browser.messages.list(t);case 2:n=e.sent,r=n.messages.length;case 4:if(!n.id){e.next=11;break}return e.next=7,browser.messages.continueList(n.id);case 7:n=e.sent,r+=n.messages.length,e.next=4;break;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),openTab:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,browser.tabs.create({active:!0,url:"stats.html"});case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},i=c,l=(n("87b9"),n("2877")),f=Object(l["a"])(i,a,u,!1,null,null,null),p=f.exports;r["a"].config.productionTip=!1,r["a"].config.devtools=!1,new r["a"]({render:function(e){return e(p)}}).$mount("#popup")},"717a":function(e,t,n){},"87b9":function(e,t,n){"use strict";var r=n("717a"),a=n.n(r);a.a}});
//# sourceMappingURL=popup.53dbcd7c.js.map