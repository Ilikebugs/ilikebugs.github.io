(function(t){function e(e){for(var a,r,o=e[0],A=e[1],c=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in A)Object.prototype.hasOwnProperty.call(A,a)&&(t[a]=A[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var A=n[o];0!==i[A]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/website/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],A=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=A;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("8a23"),i=n.n(a);i.a},"14d3":function(t,e){t.exports="data:image/png;base64,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"},"1c13":function(t,e,n){t.exports=n.p+"img/bash.0e01cc2b.png"},"1c94":function(t,e,n){t.exports=n.p+"img/pacmanagers.386998f2.png"},"3a19":function(t,e,n){t.exports=n.p+"img/profile.1f896652.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("ac1f"),n("5319"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back"},[n("v-app",{attrs:{id:"app"}},[n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[n("v-tabs",{attrs:{"fixed-tabs":""}},[n("v-tab",{attrs:{to:"/home"}},[t._v("Home")]),n("v-tab",{attrs:{to:"/skills"}},[t._v("Skills")]),n("v-tab",{attrs:{to:"/experience"}},[t._v("Experience")])],1),n("v-spacer"),n("router-view")],1)],1)],1)},s=[],r={name:"App",components:{},data:function(){return{}}},o=r,A=(n("034f"),n("2877")),c=n("6544"),l=n.n(c),p=n("7496"),f=n("a523"),d=n("2fa4"),m=n("71a3"),u=n("fe57"),g=Object(A["a"])(o,i,s,!1,null,null,null),P=g.exports;l()(g,{VApp:p["a"],VContainer:f["a"],VSpacer:d["a"],VTab:m["a"],VTabs:u["a"]});var v=n("f309");a["a"].use(v["a"]);var B=new v["a"]({}),h=n("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{staticStyle:{height:"150px"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-1"},[t._v("Rayton Lin")]),a("v-list-item-subtitle",[t._v("University of Waterloo, Computer Science")]),a("div",{staticClass:"overline mb-4"},[t._v("2020 - 2025")])],1),a("v-list-item-avatar",{staticClass:"profile",attrs:{tile:"",size:"80",color:"grey"}},[a("v-img",{attrs:{src:n("3a19")}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",href:"https://www.linkedin.com/in/raytonlin2002/",target:"_blank"}},[t._v("LinkedIn")]),a("v-btn",{attrs:{text:"",href:"https://github.com/raytonlin1",target:"_blank"}},[t._v("GitHub")]),a("v-btn",{attrs:{text:"",href:"mailto:raytonlin@gmail.com",target:"_blank"}},[t._v("Email")])],1)],1)],1)],1)],1)],1)],1)},b=[],D={name:"Home",data:function(){return{}}},C=D,y=n("8336"),I=n("b0af"),x=n("99d9"),j=n("62ad"),k=n("adda"),V=n("da13"),M=n("8270"),O=n("5d23"),S=n("0fd9"),L=Object(A["a"])(C,w,b,!1,null,null,null),Q=L.exports;l()(L,{VBtn:y["a"],VCard:I["a"],VCardActions:x["a"],VCol:j["a"],VContainer:f["a"],VImg:k["a"],VListItem:V["a"],VListItemAvatar:M["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VRow:S["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticStyle:{height:"20px"}}),t._l(this.skills,(function(e,a){return n("div",{key:a},[n("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"800"}},[n("div",{staticClass:"text-center"},[n("h3",{staticClass:"title"},[t._v(t._s(a))])]),n("v-slide-group",{staticClass:"pa-4",attrs:{"show-arrows":!0,"center-active":!1}},t._l(e,(function(e,a){return n("v-slide-item",{key:a},[n("v-card",{staticClass:"ma-4",attrs:{color:"#e1f4f3",height:"200",width:"200"}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-img",{attrs:{src:e.img,contain:"",width:"80",height:"80"}}),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.name))]),n("v-list-item-subtitle",[t._v(t._s(e.des))])],1)],1)],1)],1)})),1)],1),n("v-row",{staticStyle:{height:"20px"}})],1)}))],2)},E=[],U={name:"Skills",data:function(){return{skills:{Languages:[{name:"Python",des:"Backend design, Frontend design, Scripting, Machine learning, Data science",img:n("76fe")},{name:"JavaScript",des:"Backend design, Frontend design",img:n("f2da")},{name:"C++",des:"Embedded systems",img:n("8d62")},{name:"SQL",des:"Relational databases",img:n("b96d")},{name:"NoSQL",des:"Non-relational databases",img:n("9973")}],"Frameworks/Libraries":[{name:"React.js",des:"Frontend development",img:n("f2da")},{name:"Node.js",des:"Backend development",img:n("f2da")},{name:"Django",des:"Backend developemnt",img:n("76fe")},{name:"PyTorch",des:"Machine learning",img:n("76fe")}],"Commandline tools":[{name:"Git",des:"Version control",img:n("14d3")},{name:"Bash",des:"Shell scripts",img:n("1c13")},{name:"Vim",des:"Code editor/IDE",img:n("bb7b")},{name:"PowerShell",des:"CLIShell",img:n("7673")},{name:"Package Managers",des:"npm, yarn, pip, anaconda",img:n("1c94")}],"Operating Systems":[{name:"Windows",des:"Microsoft® Office suite, programming",img:n("9579")},{name:"Ubuntu",des:"Linux",img:n("f6a2")}]}}}},z=U,F=n("8dd9"),G=n("7efd"),R=n("9dbe"),_=Object(A["a"])(z,H,E,!1,null,null,null),J=_.exports;l()(_,{VCard:I["a"],VImg:k["a"],VListItem:V["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VRow:S["a"],VSheet:F["a"],VSlideGroup:G["b"],VSlideItem:R["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"expeience"}},[n("v-row",{staticStyle:{height:"20px"}}),t._l(this.jobs,(function(e,a){return n("v-card",{key:a,staticClass:"ma-4",attrs:{color:"#e1f4f3"}},[n("v-list-item",[n("v-list-item-content",[n("v-img",{attrs:{src:e.img,contain:"",width:"80",height:"80"}}),n("v-list-item-title",{staticClass:"headline mb-1"},[t._v(t._s(e.position))]),n("v-list-item-subtitle",[t._v(t._s(e.time))])],1)],1),t._l(e.responsibilities,(function(e,a){return n("v-list-item",{key:a},[t._v(" "+t._s(e)+" ")])}))],2)}))],2)},X=[],W={name:"Experience (since University)",data:function(){return{jobs:[{company:"GoBolt",position:"GoBolt (Software Developer)",time:"May 2022 - August 2022",img:n("f2da"),responsibilities:["Worked with Docker, Ruby on Rails, Nest.js, Fastify, Node.js, Typescript and React on a shipping, storage and delivery app for companies to integrate with online stores and deliver orders to their customers..","Created data adapters and integrated Shopify's API for use in the company's apps, and added order information to the UI for clients.","In the Integrations team, improved the legacy multi-layered architecture core monolith RESTful API.","Contributed to the development of a new integrations API to transfer data to the internal core API, with a","microservices architecture backend written in Ruby on Rails.","Added new endpoints to the warehouse REST API to update the stock of item variants.","Created schemas and added CRUD actions for Rutter and BoxKnight products to be introduced to the core API.","Created a front-end modal that added new online stores to a user’s GoBolt account.","Submitted over 20 Pull Requests totaling over 1000 lines of code"]},{company:"Microsoft",position:"Microsoft/University of Waterloo (Software Developer)",time:"May 2021 - August 2021",img:n("f2da"),responsibilities:["Led the creation of a file-sharing service with MongoDB, Express, Node.js, Typescript, Recoil and React for the WE Accelerate program.","Developed an activity logger, user registration and React frontend for CRUD actions on a REST API","Integrated the Passport and Bcrypt libraries for user authentication, protected routes, and password hashing.","Implemented a backend using Node.js, and deployed using MongoDB, AWS, pipelines with Jenkins, and Docker."]}]}}},N=W,K=Object(A["a"])(N,T,X,!1,null,null,null),Y=K.exports;l()(K,{VCard:I["a"],VImg:k["a"],VListItem:V["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VRow:S["a"]}),a["a"].config.productionTip=!1,a["a"].use(h["a"]);var q=[{path:"/home",name:"home",component:Q},{path:"/skills",name:"skills",component:J},{path:"/experience",name:"experience",component:Y}],Z=new h["a"]({routes:q});new a["a"]({vuetify:B,router:Z,mounted:function(){Z.replace({name:"home"})},render:function(t){return t(P)}}).$mount("#app")},7673:function(t,e,n){t.exports=n.p+"img/ps.a75fb857.png"},"76fe":function(t,e,n){t.exports=n.p+"img/py.b9bbb1d7.png"},"8a23":function(t,e,n){},"8d62":function(t,e,n){t.exports=n.p+"img/cpp.8f42e018.png"},9579:function(t,e,n){t.exports=n.p+"img/windows.a6367740.png"},9973:function(t,e,n){t.exports=n.p+"img/mongodb.517f9e6c.png"},b96d:function(t,e,n){t.exports=n.p+"img/sql.76c2eb43.png"},bb7b:function(t,e,n){t.exports=n.p+"img/vim.c1f1e472.png"},f2da:function(t,e,n){t.exports=n.p+"img/js.0cded3a3.png"},f6a2:function(t,e,n){t.exports=n.p+"img/ubuntu.495b0c4a.png"}});
//# sourceMappingURL=app.5c0ca359.js.map