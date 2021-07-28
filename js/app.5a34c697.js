(function(t){function e(e){for(var a,n,r=e[0],i=e[1],c=e[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(m.length)m.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],a=!0,r=1;r<s.length;r++){var i=s[r];0!==o[i]&&(a=!1)}a&&(l.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},l=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/to-do-list-app-vue.js/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=i;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0372":function(t,e,s){t.exports=s.p+"img/info.48805e98.svg"},"13c2":function(t,e,s){t.exports=s.p+"img/sun-style-1.4db24c0e.svg"},"1f8c":function(t,e,s){t.exports=s.p+"img/moon-style-1.90acad72.svg"},"3f17":function(t,e,s){t.exports=s.p+"img/right.757e4c2f.svg"},"4c70":function(t,e,s){t.exports=s.p+"img/add.0f125292.svg"},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"top-bar"},[a("div",{staticClass:"container flex"},[a("div",{staticClass:"hamburger",on:{click:t.menuToggle}},[a("span"),a("span"),a("span")]),a("div",{staticClass:"search-bar"},[a("searchTasks")],1),a("div",{staticClass:"controls"},[a("div",{staticClass:"btn_darkmode"},[a("input",{attrs:{type:"checkbox",id:"darkmode"},on:{click:t.DarkMode}}),t._m(0)]),t._m(1)])])]),a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:s("5774")}}),t._v(" Inbox ")])],1),a("li",{on:{click:t.disBtn}},[a("router-link",{attrs:{to:"/Completed"}},[a("img",{attrs:{src:s("67cc")}}),t._v(" Completed ")])],1)])]),a("router-view")],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"darkmode"}},[a("img",{attrs:{src:s("1f8c")}}),a("img",{attrs:{src:s("13c2")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"create-new"},[a("img",{attrs:{src:s("8ff1")}})])}],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-tasks"},[a("div",[a("label",{class:{ac_img:t.isActive,ac_img_hover:t.hoverActive},attrs:{for:"search"}},[a("img",{attrs:{src:s("77aa")}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{id:"search",type:"text",placeholder:"Find for completed and incomplete tasks.."},domProps:{value:t.val},on:{blur:t.sBlur,keyup:t.search,focus:t.sFocus,mouseover:function(e){t.hoverActive=!0},mouseleave:function(e){t.hoverActive=!1},input:function(e){e.target.composing||(t.val=e.target.value)}}})]),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty,expression:"isEmpty"}],staticClass:"list-task-ser"},[a("li",{directives:[{name:"show",rawName:"v-show",value:t.notFoundBoolean,expression:"notFoundBoolean"}]},[t._v(" "+t._s(t.notFound)+" ")]),t._l(t.allTasks,(function(e,o){return a("li",{key:o},[t._v(" "+t._s(""+e.task)+" "),!0===e.isCompleted?a("span",[a("img",{attrs:{src:s("3f17")}})]):t._e(),!1===e.isCompleted?a("span",[a("img",{attrs:{src:s("f62a")}})]):t._e()])}))],2)])},r=[],i={name:"search-tasks",data:function(){return{allTasks:[],val:"",isEmpty:!0,notFound:"Not Found",notFoundBoolean:!1,isActive:!1,hoverActive:!1}},methods:{search(){let t=JSON.parse(localStorage.getItem("tasks")),e=JSON.parse(localStorage.getItem("completedTasks"));
//! fix map of null
if(t&&e){let s=t.map((function(t){return{task:t,isCompleted:!1}})),a=e.map((function(t){return{task:t,isCompleted:!0}})),o=[...s,...a],l=this.val.toLowerCase(),n=o.filter((function(t){return t.task.toLowerCase().indexOf(l)>-1}));this.allTasks=n,this.isEmpty=""!==l,0===this.allTasks.length?this.notFoundBoolean=!0:this.notFoundBoolean=!1}},sBlur(){this.val="",this.isEmpty=!1,this.isActive=!1},sFocus(){this.isActive=!0}},mounted:function(){""===this.val?this.isEmpty=!1:this.isEmpty=!0}},c=i,d=s("2877"),u=Object(d["a"])(c,n,r,!1,null,null,null),m=u.exports,p={name:"App",data:function(){return{menutog:!1}},components:{searchTasks:m},methods:{menuToggle(){let t=document.querySelector("nav"),e=document.querySelector(".inbox"),s=document.querySelector(".completed");this.menutog?(t.style.transform="translateX(0)",e&&(e.style.marginLeft="250px"),s&&(s.style.marginLeft="250px"),this.menutog=!1):(t.style.transform="translateX(-100%)",e&&(e.style.marginLeft="0"),s&&(s.style.marginLeft="0"),this.menutog=!0)},disBtn(){document.querySelector(".create-new").disabled=!1},DarkMode(t){t.target.checked?(document.body.classList.add("ActiveDartkMode"),localStorage.setItem("darkMode",JSON.stringify(!0))):(document.body.classList.remove("ActiveDartkMode"),localStorage.setItem("darkMode",JSON.stringify(!1)))}},mounted(){let t=JSON.parse(localStorage.getItem("darkMode")),e=document.querySelector("#darkmode");t?(document.body.classList.add("ActiveDartkMode"),e.checked=!0):(document.body.classList.remove("ActiveDartkMode"),e.checked=!1)}},g=p,k=(s("5c0b"),Object(d["a"])(g,o,l,!1,null,null,null)),h=k.exports,f=s("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"inbox"},[a("div",{staticClass:"to-do-list"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.toggleAdd,expression:"toggleAdd"}],staticClass:"add-task",on:{click:t.addNewTask}},[a("img",{staticClass:"icon-add",attrs:{src:s("4c70")}}),t._v(" Add task")]),a("div",{staticClass:"controls-input"}),a("div",{staticClass:"controls-task"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.isthereTask,expression:"isthereTask"}],staticClass:"save-task",on:{click:t.saveTheTask}},[t._v("save task")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isthereTask,expression:"isthereTask"}],staticClass:"cancel-task",on:{click:t.cancelTask}},[t._v("cancel")])]),a("div",{staticClass:"info"},[a("h1",[t._v("Tasks "),a("span",{staticClass:"numberOfTasks"},[t._v(" "+t._s(t.numberOftasks)+" ")])]),t.btnDelAll?a("button",{staticClass:"del-all",on:{click:t.delAllTasks}},[t._v("Delete All")]):t._e()]),a("ul",{staticClass:"listOfTasks"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.showTaskImage,expression:"showTaskImage"}],staticClass:"tasks-hero-image",attrs:{src:s("e7cf")}}),t._l(t.tasks,(function(e,o){return a("li",{key:o,staticClass:"task"},[a("div",{staticClass:"col-one-t"},[a("label",{staticClass:"completedTask",attrs:{"data-complete":o},on:{click:t.complete}},[a("input",{attrs:{type:"radio",id:"complete"}}),a("img",{attrs:{"data-complete":o,src:s("9038")}})]),a("span",[t._v(" "+t._s(e.task)+" ")])]),a("div",{staticClass:"col-tow-t"},[a("span",{staticClass:"task-date"},[t._v(" "+t._s(e.taskDate)+" ")]),a("button",{staticClass:"del",attrs:{"data-delete":o},on:{click:t.deleteTask}},[a("img",{attrs:{src:s("6744")}})])])])}))],2)])])},b=[],w={name:"inbox",data:function(){return{isthereTask:!1,toggleAdd:!0,tasks:[],completed:[],showTaskImage:!0,btnDelAll:!1,numberOftasks:0}},methods:{addNewTask(){let t=document.querySelector(".controls-input"),e=document.createElement("input");e.classList.add("inputTask"),e.setAttribute("type","text"),e.setAttribute("placeholder","add text here .."),e.style.cssText="\n              padding: 20px;\n              width: 100%;\n              font-size: 17px;\n              outline: none;\n              border: 1px solid rgb(195 195 195);\n              border-radius: 5px;\n              transition: all 10s ease;\n          ",t&&(t.append(e),e.focus());let s=document.querySelector(".save-task");s&&(s.disabled=!0,e.addEventListener("keyup",(function(t){""===t.target.value?s.disabled=!0:s.disabled=!1,t.target.value.length>=60?(s.disabled=!0,alert("You have exceeded the 60 character limit")):s.disabled=!1,console.log(t.target.value.length)}))),this.isthereTask=!0,this.toggleAdd=!1;let a=document.querySelector(".create-new");a&&(a.disabled=!0)},cancelTask(){document.querySelector(".to-do-list .inputTask").remove(),document.querySelector(".create-new").disabled=!1,this.toggleAdd=!0,this.isthereTask=!1},saveTheTask(){let t=document.querySelector(".inputTask"),e=t.value;t.remove(),this.isthereTask=!1,this.toggleAdd=!0;let s=new Date,a=s.toDateString();this.tasks.push({task:e,taskDate:a}),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.showTaskImage=!1,this.btnDelAll=!0,this.numberOftasks=JSON.parse(localStorage.getItem("tasks")).length,document.querySelector(".create-new").disabled=!1},complete(t){let e=document.querySelectorAll(".listOfTasks li"),s=t.target.getAttribute("data-complete"),a=e[s].querySelector(".col-one-t"),o=e[s].querySelector(".col-tow-t"),l=o.querySelector(".task-date").textContent,n=a.querySelector("span").textContent,r=new Date,i=r.toDateString();this.completed.push({task:n,taskDate:l,taskEndDate:i}),localStorage.setItem("completedTasks",JSON.stringify(this.completed));let c=JSON.parse(localStorage.getItem("tasks"));c.splice(s,1),localStorage.setItem("tasks",JSON.stringify(c)),
//! refresh the page after move the task to completed list 
window.location.reload()},deleteTask(t){let e=t.target.getAttribute("data-delete"),s=confirm("Are you sure ?"),a=JSON.parse(localStorage.getItem("tasks"));!0===s&&(a.splice(e,1),localStorage.setItem("tasks",JSON.stringify(a)),
//! refresh the page after delete task
window.location.reload())},delAllTasks(){let t=confirm("All incomplete tasks will be deleted !");!0===t&&(localStorage.removeItem("tasks"),window.location.reload())}},mounted:function(){
//! global functions
this.tasks=JSON.parse(localStorage.getItem("tasks"))||[],this.completed=JSON.parse(localStorage.getItem("completedTasks"))||[];let t=JSON.parse(localStorage.getItem("tasks"));t&&(t.length>0?(this.showTaskImage=!1,this.btnDelAll=!0):(this.showTaskImage=!0,this.btnDelAll=!1),this.numberOftasks=t.length);let e=document.querySelector(".create-new"),s=this.addNewTask;e.addEventListener("click",(function(){s(),e.disabled=!0;
//! The bug is when clicking on the add task button in top bar, it will create more than one input field.
let t=document.querySelector(".controls-input");if(t){let e=t.children,s=Array.from(e),a=1;while(a<s.length)s[a].remove(),a++}}))}},y=w,T=(s("a64c"),Object(d["a"])(y,v,b,!1,null,null,null)),S=T.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"completed"},[a("div",{staticClass:"completedTasks"},[a("div",{staticClass:"info"},[a("h1",[t._v("Completed Tasks "),a("span",{staticClass:"numberOfTasks"},[t._v(" "+t._s(t.numberOftasksCompleted)+" ")])]),t.btnDelAll?a("button",{staticClass:"del-all",on:{click:t.delAllTasks}},[t._v("Delete All")]):t._e()]),a("ul",{staticClass:"listOfTasks"},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.showTaskImage,expression:"showTaskImage"}],staticClass:"tasks-hero-image",attrs:{src:s("baa7")}}),t._l(t.completedTask,(function(e,o){return a("li",{key:o,staticClass:"taskComplete"},[a("div",{staticClass:"col-one-t"},[a("span",[t._v(" "+t._s(e.task)+" ")])]),a("div",{staticClass:"col-tow-t"},[a("div",{staticClass:"task-date"},[a("div",{staticClass:"t-d"},[a("div",{staticClass:"span-date"},[a("span",{staticClass:"task-d"},[t._v(" Created In: "+t._s(e.taskDate)+" ")]),a("span",{staticClass:"task-end-date"},[t._v(" Completed In: "+t._s(e.taskEndDate)+" ")])]),a("img",{attrs:{src:s("0372")}})])]),a("button",{staticClass:"del",attrs:{"data-delete":o},on:{click:t.deleteTask}},[a("img",{attrs:{src:s("6744")}})])])])}))],2)])])},_=[],x={name:"completed",data:function(){return{completedTask:[],numberOftasksCompleted:0,btnDelAll:!1,showTaskImage:!0}},methods:{deleteTask(t){let e=t.target.getAttribute("data-delete"),s=confirm("Are you sure ?"),a=JSON.parse(localStorage.getItem("completedTasks"));!0===s&&(a.splice(e,1),localStorage.setItem("completedTasks",JSON.stringify(a)),window.location.reload())},delAllTasks(){let t=confirm("All completed tasks will be deleted !");!0===t&&(localStorage.removeItem("completedTasks"),window.location.reload())}},mounted:function(){
//! global functions
this.completedTask=JSON.parse(localStorage.getItem("completedTasks"))||[];let t=JSON.parse(localStorage.getItem("completedTasks"));t&&(t.length>0?(this.showTaskImage=!1,this.btnDelAll=!0):(this.showTaskImage=!0,this.btnDelAll=!1),this.numberOftasksCompleted=t.length)}},O=x,A=(s("6899"),Object(d["a"])(O,C,_,!1,null,null,null)),I=A.exports;a["a"].use(f["a"]);const N=[{path:"/",name:"inbox",component:S},{path:"/completed",name:"completed",component:I}],D=new f["a"]({mode:"hash",routes:N});var J=D;a["a"].config.productionTip=!1,new a["a"]({router:J,render:function(t){return t(h)}}).$mount("#app")},5774:function(t,e,s){t.exports=s.p+"img/tasks.2d8f2f3d.svg"},"5c0b":function(t,e,s){"use strict";s("9c0c")},6744:function(t,e,s){t.exports=s.p+"img/trash.0d10f8f1.svg"},"67cc":function(t,e,s){t.exports=s.p+"img/complete-icon.e884d46d.svg"},6899:function(t,e,s){"use strict";s("b60f")},"73cd":function(t,e,s){},"77aa":function(t,e,s){t.exports=s.p+"img/search.2ea4c436.svg"},"8ff1":function(t,e,s){t.exports=s.p+"img/plus.16380594.svg"},9038:function(t,e,s){t.exports=s.p+"img/check (1).c884f427.svg"},"9c0c":function(t,e,s){},a64c:function(t,e,s){"use strict";s("73cd")},b60f:function(t,e,s){},baa7:function(t,e,s){t.exports=s.p+"img/completed.03bbaa39.jpg"},e7cf:function(t,e,s){t.exports=s.p+"img/tasks.7f604881.jpg"},f62a:function(t,e,s){t.exports=s.p+"img/close.e3380abb.svg"}});
//# sourceMappingURL=app.5a34c697.js.map