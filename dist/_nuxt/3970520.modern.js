(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{261:function(e,t,r){var content=r(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(33).default)("a72bddfa",content,!0,{sourceMap:!1})},262:function(e,t,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(33).default)("4995977c",content,!0,{sourceMap:!1})},263:function(e,t,r){"use strict";r(261)},264:function(e,t,r){var o=r(32)(!1);o.push([e.i,'*[data-v-4e907258],[data-v-4e907258]:after,[data-v-4e907258]:before{box-sizing:border-box}*[data-v-4e907258]{margin:0}body[data-v-4e907258],html[data-v-4e907258]{height:100%}body[data-v-4e907258]{-webkit-font-smoothing:antialiased;line-height:1.5}canvas[data-v-4e907258],img[data-v-4e907258],picture[data-v-4e907258],svg[data-v-4e907258],video[data-v-4e907258]{display:block;max-width:100%}button[data-v-4e907258],input[data-v-4e907258],select[data-v-4e907258],textarea[data-v-4e907258]{font:inherit}h1[data-v-4e907258],h2[data-v-4e907258],h3[data-v-4e907258],h4[data-v-4e907258],h5[data-v-4e907258],h6[data-v-4e907258],p[data-v-4e907258]{word-wrap:break-word}#__next[data-v-4e907258],#root[data-v-4e907258]{isolation:isolate}.button[data-v-4e907258]{background:#927af6;border:none;border-radius:50vh;color:#fff;cursor:pointer;display:inline-block;font-family:"Quicksand",sans-serif;font-size:1em;font-weight:700;letter-spacing:.02em;line-height:1;margin:.5em 0;outline:0;padding:1em 2em;text-align:center;text-decoration:none;text-transform:uppercase;transition:.3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.button[data-v-4e907258]:active{background:#5742ad;transform:scale(.95)}',""]),e.exports=o},265:function(e,t,r){"use strict";r.r(t);var o={props:{href:{type:String,default:null}},computed:{type(){return this.href?"a":"button"}}},n=(r(263),r(34)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.type,{directives:[{name:"wave",rawName:"v-wave"}],tag:"component",staticClass:"button",attrs:{href:e.href},on:{click:function(t){return e.$emit("btn-click")}}},[e._t("default")],2)}),[],!1,null,"4e907258",null);t.default=component.exports},266:function(e,t,r){"use strict";r(262)},267:function(e,t,r){var o=r(32)(!1);o.push([e.i,"*[data-v-2a750e25],[data-v-2a750e25]:after,[data-v-2a750e25]:before{box-sizing:border-box}*[data-v-2a750e25]{margin:0}body[data-v-2a750e25],html[data-v-2a750e25]{height:100%}body[data-v-2a750e25]{-webkit-font-smoothing:antialiased;line-height:1.5}canvas[data-v-2a750e25],img[data-v-2a750e25],picture[data-v-2a750e25],svg[data-v-2a750e25],video[data-v-2a750e25]{display:block;max-width:100%}button[data-v-2a750e25],input[data-v-2a750e25],select[data-v-2a750e25],textarea[data-v-2a750e25]{font:inherit}h1[data-v-2a750e25],h2[data-v-2a750e25],h3[data-v-2a750e25],h4[data-v-2a750e25],h5[data-v-2a750e25],h6[data-v-2a750e25],p[data-v-2a750e25]{word-wrap:break-word}#__next[data-v-2a750e25],#root[data-v-2a750e25]{isolation:isolate}.card[data-v-2a750e25]{background:#fff;border-radius:20px;box-shadow:0 7px 29px 0 rgba(100,100,111,.2);padding:.5rem 1rem}",""]),e.exports=o},268:function(e,t,r){"use strict";r.r(t);r(266);var o=r(34),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"card"},[e._t("default")],2)}),[],!1,null,"2a750e25",null);t.default=component.exports},283:function(e,t,r){"use strict";r.r(t);r(158);var o=r(268),n=r(265),d={components:{Card:o.default,VButton:n.default},middleware:["test-workers"],computed:{worker(){return this.$store.getters["workers/get"].find((e=>e.id===this.routeID))},routeID(){return this.$route.params.id?parseInt(this.$route.params.id):0},fullName(){return this.$store.getters["worker/getFullName"]}},created(){this.$store.commit("ui/setHideMenu",!0),this.$store.commit("ui/setHideNav",!0)},beforeDestroy(){this.$store.commit("ui/setHideMenu",!1),this.$store.commit("ui/setHideNav",!1)},methods:{changeRoute(){this.$router.back()}}},c=r(34),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("section",{staticClass:"header"}),r("h1",[e._v(e._s(e.fullName))]),r("card",[r("pre",[e._v(e._s(e.worker))])]),r("v-button",{on:{"btn-click":e.changeRoute}},[e._v(e._s(e.$t("goBack")))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);