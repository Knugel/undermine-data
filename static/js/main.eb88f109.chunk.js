(this["webpackJsonpundermine-data"]=this["webpackJsonpundermine-data"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},359:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),s=n.n(a),i=(n(174),n(175),n(11)),j=n(7),d=(n(176),n(12)),b=r.a.createContext({behaviors:[],entities:[],dataObjects:[]}),l=n(365),o=n(361),u=n(1);var h=function(){var e=Object(j.h)(),t=Object(c.useContext)(b),n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(l.a,{style:{padding:20},children:Object(u.jsx)(l.a.Control,{type:"search",placeholder:"Search...",value:a,onChange:function(e){s(e.currentTarget.value)}})}),Object(u.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Guid"}),Object(u.jsx)("th",{})]})}),Object(u.jsx)("tbody",{children:t.entities.filter((function(e){return e.Name.toLowerCase().includes(a.toLowerCase())})).sort((function(e,t){return e.Name.localeCompare(t.Name)})).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.Name}),Object(u.jsx)("td",{children:t.Guid}),Object(u.jsx)("td",{style:{textAlign:"center"},children:Object(u.jsx)(i.b,{to:"".concat(e.path,"/").concat(t.Guid,"/").concat(t.Name),children:"=>"})})]},t.Guid+t.Name)}))})]})]})},O=n(15),x=n.n(O),f=n(70),v=n(46),p=n(166);function m(e){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch(t,{method:"GET"});case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",Promise.reject(n.statusText));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){var n=null!=t?k(t.NodeData.Offset):{x:0,y:0},c=k(e.NodeData.Offset),r={id:e.ID.toString(),type:e.Children?void 0:"output",position:{x:n.x+c.x,y:n.y+c.y},data:{label:e.Name,task:Object(p.a)({Comment:e.NodeData.Comment},e)}};"BehaviorDesigner.Runtime.Tasks.EntryTask"===e.Type&&(r.type="input");var a=[r];if(e.Children){var s,i=Object(v.a)(e.Children);try{for(i.s();!(s=i.n()).done;){var j=s.value;a=a.concat(g(j,e));var d={id:e.ID+"-"+j.ID,source:e.ID.toString(),target:j.ID.toString(),type:"smoothstep"};a.push(d)}}catch(b){i.e(b)}finally{i.f()}}return a}function k(e){var t=e.replace("(","").replace(")","").split(",");return{x:Number.parseFloat(t[0]),y:Number.parseFloat(t[1])}}var C=["SharedInt","SharedBool","SharedFloat","SharedEntity","SharedVector2","SharedVector3","SharedDataObject","SharedEntityList","SharedString","SharedVariable","Boolean","String","Int32","Int64","Single","EntityList","Entity","Vector2","Vector3","List","DataObject","Double","AbortType"];function S(e){var t=e.indexOf("m_");t>-1&&(e=e.substr(t+2));var n=C.find((function(t){return e.startsWith(t)}));return n&&(e=e.substr(n.length)),e.includes("[]")&&(e=e.substr(e.indexOf("[]")+2)),e=e[0].toUpperCase()+e.substr(1)}var N=function(e){var t=Object(c.useState)({behaviors:[],entities:[],dataObjects:[]}),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(x.a.mark((function e(){var t,n,c,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.entities.length>0)){e.next=2;break}return e.abrupt("return");case 2:return t="/undermine-data",e.next=5,m(t+"/data/Behaviors.json");case 5:return n=e.sent,e.next=8,m(t+"/data/Entities.json");case 8:return c=e.sent,e.next=11,m(t+"/data/DataObjects.json");case 11:s=e.sent,a({behaviors:n,entities:c,dataObjects:s});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(u.jsx)(b.Provider,{value:r,children:e.children})},I=n(369),D=n(362),E=n(366),R=n(368);var w=function(e){var t,n,r,a,s=Object(c.useContext)(b),j=!Number.isInteger(e.$Ref),d=s.entities.some((function(t){return t.Guid===e.$Ref}));return a=d?s.entities.find((function(t){return t.Guid===e.$Ref})):s.dataObjects.find((function(t){return t.Guid===e.$Ref})),j||(a=s.behaviors.find((function(t){return t.ID===e.$Ref}))),Object(u.jsx)(c.Fragment,{children:j?Object(u.jsx)(c.Fragment,{children:d?Object(u.jsx)(i.b,{to:"/entities/".concat(e.$Ref),children:null===(t=a)||void 0===t?void 0:t.Name}):Object(u.jsx)(i.b,{to:"/data-objects/".concat(e.$Ref),children:null===(n=a)||void 0===n?void 0:n.Name})}):Object(u.jsx)(i.b,{to:"/behaviors/".concat(e.$Ref),children:null===(r=a)||void 0===r?void 0:r.Name})})};var F=function e(t){var n,r=function(e){return"object"===typeof e&&null!=e&&"$Ref"in e},a=function(e){if(null==e)return!0;if("object"!==typeof e)return!1;var t=Object.values(e);return 1===t.length&&1===Object.values(t[0]).length||t.every((function(e){return!e}))},s=function e(t){return null===t||void 0===t?null:"boolean"===typeof t?Object(u.jsx)(l.a.Check,{disabled:!0,checked:t,type:"checkbox"}):r(t)?Object(u.jsx)(w,{$Ref:t.$Ref}):"object"===typeof t?e(Object.values(t)[0]):Object(u.jsx)("span",{children:t.toString()})};return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)("tbody",{children:(n=t.Instance,n?Object.keys(n).filter((function(e){return!e.endsWith("Ext")})).map((function(e){return{key:e,value:n[e]}})):[]).map((function(t){return Object(u.jsx)("tr",{children:"object"!==typeof t.value||null==t.value||a(t.value)?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("td",{children:S(t.key)}),Object(u.jsx)("td",{children:s(t.value)})]}):Object(u.jsx)(c.Fragment,{children:r(t.value)?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("td",{children:S(t.key)}),Object(u.jsx)("td",{children:Object(u.jsx)(w,{$Ref:t.value.$Ref})})]}):Object(u.jsx)("td",{colSpan:2,children:Object(u.jsx)(E.a,{children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(E.a.Toggle,{as:R.a.Header,eventKey:t.key,children:S(t.key)}),Object(u.jsx)(E.a.Collapse,{eventKey:t.key,children:Object(u.jsx)(R.a.Body,{children:Object(u.jsx)(e,{Instance:t.value})})})]})})})})},t.key)}))})})})};var G=function(){var e=Object(j.g)(),t=e.guid,n=e.name,r=Object(c.useContext)(b),a=Object(c.useState)(),s=Object(d.a)(a,2),i=s[0],l=s[1];Object(c.useEffect)((function(){var e=r.entities.filter((function(e){return e.Guid===t}));l(n?e.find((function(e){return e.Name===n})):e.find((function(e){return!0})))}),[t,n,r.entities]);var o=function(e,t){return e?e[t][0]:null};return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)(D.a,{eventKey:"root",title:"Entity",children:Object(u.jsx)(F,{Instance:i})}),function(e){return e?Object.keys(e).filter((function(e){return e.endsWith("Ext")})):[]}(i).map((function(e){return Object(u.jsx)(D.a,{eventKey:e,title:e,children:Object(u.jsx)(F,{Instance:o(i,e)})},e)}))]})})},T=n(364),$=n(367),L=n(169),B=n(29),P=n(108),W=n.n(P),A=n(363),J=n(165);var K=function(e){var t=172,n=Object(c.useState)([]),r=Object(d.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(),j=Object(d.a)(i,2),b=j[0],l=j[1];return Object(c.useEffect)((function(){var n=new W.a.graphlib.Graph;n.setDefaultEdgeLabel((function(){return{}}));var c,r=(c=e.Instance.TaskJSON)?JSON.parse(c):null;if(null!=r){var a=g(r.EntryTask);(a=a.concat(g(r.RootTask))).push({id:"0-1",source:"0",target:"1"}),s(function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"TB",r="LR"===c;return n.setGraph({rankdir:c}),e.forEach((function(e){Object(B.d)(e)?n.setNode(e.id,{width:t,height:36}):n.setEdge(e.source,e.target)})),W.a.layout(n),e.map((function(e){if(Object(B.d)(e)){var t=n.node(e.id);e.targetPosition=r?B.b.Left:B.b.Top,e.sourcePosition=r?B.b.Right:B.b.Bottom,e.position={x:t.x-86+Math.random()/1e3,y:t.y-18}}return e}))}(a))}else s([])}),[e.Instance.TaskJSON]),Object(u.jsxs)(A.a,{style:{height:"100%"},children:[Object(u.jsx)(J.a,{children:Object(u.jsx)(B.c,{elements:a,nodesDraggable:!1,onElementClick:function(e,t){if("data"in t){var n=t.data.task;n.Comment||delete n.Comment,delete n.Children,delete n.NodeData,l(n)}},children:Object(u.jsx)(B.a,{})})}),Object(u.jsx)(J.a,{xs:!0,lg:5,style:{overflow:"hidden",overflowY:"auto",height:"100%",wordBreak:"break-all"},children:b?Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(F,{Instance:b})}):null})]})};var V=function(){var e=Object(j.g)().id,t=Object(c.useContext)(b),n=Object(c.useState)(null),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var n=t.behaviors.find((function(t){return t.ID===Number(e)}));n&&s(n)}),[e,t]),Object(u.jsx)(c.Fragment,{children:a?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("div",{style:{height:400},children:Object(u.jsx)(K,{Instance:a})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("td",{children:a.Name})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"ID"}),Object(u.jsx)("td",{children:a.ID})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"AutoStart"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.AutoStart,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Interruptable"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.Interruptable,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"PauseWhenDisabled"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.PauseWhenDisabled,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"PreProcess"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.PreProcess,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"RestartWhenComplete"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.RestartWhenComplete,type:"checkbox"})})]}),a.Objects.length>0?Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:2,children:Object(u.jsx)(F,{Instance:{Objects:a.Objects}})})}):null]})})})]}):null})};var U=function(){var e=Object(j.h)(),t=Object(c.useContext)(b),n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(l.a,{style:{padding:20},children:Object(u.jsx)(l.a.Control,{type:"search",placeholder:"Search...",value:a,onChange:function(e){s(e.currentTarget.value)}})}),Object(u.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Guid"}),Object(u.jsx)("th",{})]})}),Object(u.jsx)("tbody",{children:t.dataObjects.filter((function(e){return e.Name.toLowerCase().includes(a.toLowerCase())})).sort((function(e,t){return e.Name.localeCompare(t.Name)})).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.Name}),Object(u.jsx)("td",{children:t.Guid}),Object(u.jsx)("td",{style:{textAlign:"center"},children:Object(u.jsx)(i.b,{to:"".concat(e.path,"/").concat(t.Guid),children:"=>"})})]},t.Guid+t.Name)}))})]})]})};var H=function(){var e=Object(j.g)().guid,t=Object(c.useContext)(b),n=Object(c.useState)(),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var n=t.dataObjects.find((function(t){return t.Guid===e}));s(n)}),[e,t.dataObjects]),Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(I.a,{children:Object(u.jsx)(D.a,{eventKey:"root",title:"Data Object",children:Object(u.jsx)(F,{Instance:a})})})})};var M=function(){return Object(u.jsx)(N,{children:Object(u.jsxs)(i.a,{basename:"/",children:[Object(u.jsx)(T.a,{children:Object(u.jsxs)($.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(u.jsx)($.a.Brand,{children:"Undermine Data"}),Object(u.jsx)($.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(L.a,{className:"mr-auto",children:[Object(u.jsx)(L.a.Link,{as:i.c,to:"/entities",children:"Entities"}),Object(u.jsx)(L.a.Link,{as:i.c,to:"/data-objects",children:"Data Objects"})]})})]})}),Object(u.jsx)(T.a,{style:{padding:10},children:Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{path:"/entities",exact:!0,children:Object(u.jsx)(h,{})}),Object(u.jsx)(j.b,{path:"/entities/:guid",exact:!0,children:Object(u.jsx)(G,{})}),Object(u.jsx)(j.b,{path:"/entities/:guid/:name",children:Object(u.jsx)(G,{})}),Object(u.jsx)(j.b,{path:"/data-objects",exact:!0,children:Object(u.jsx)(U,{})}),Object(u.jsx)(j.b,{path:"/data-objects/:guid",exact:!0,children:Object(u.jsx)(H,{})}),Object(u.jsx)(j.b,{path:"/behaviors/:id",children:Object(u.jsx)(V,{})}),Object(u.jsx)(j.b,{render:function(){return Object(u.jsx)(j.a,{to:"/entities"})}})]})})]})})};s.a.render(Object(u.jsx)(M,{}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.eb88f109.chunk.js.map