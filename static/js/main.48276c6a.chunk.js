(this["webpackJsonpundermine-data"]=this["webpackJsonpundermine-data"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},359:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(25),s=n.n(a),i=(n(174),n(175),n(11)),j=n(7),d=(n(176),n(12)),b=r.a.createContext({behaviors:[],entities:[],dataObjects:[]}),l=n(365),o=n(361),u=n(1);var h=function(){var e=Object(j.g)(),t=Object(c.useContext)(b),n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(l.a,{style:{padding:20},children:Object(u.jsx)(l.a.Control,{type:"search",placeholder:"Search...",value:a,onChange:function(e){s(e.currentTarget.value)}})}),Object(u.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Guid"})]})}),Object(u.jsx)("tbody",{children:t.entities.filter((function(e){return e.Name.toLowerCase().includes(a.toLowerCase())})).sort((function(e,t){return e.Name.localeCompare(t.Name)})).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.Name}),Object(u.jsx)("td",{children:t.Guid}),Object(u.jsx)("td",{style:{textAlign:"center"},children:Object(u.jsx)(i.b,{to:"".concat(e.path,"/").concat(t.Guid,"/").concat(t.Name),children:"=>"})})]},t.Guid+t.Name)}))})]})]})},O=n(15),x=n.n(O),f=n(70),p=n(46),v=n(166);function m(e){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch(t,{method:"GET"});case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",Promise.reject(n.statusText));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){var n=null!=t?k(t.NodeData.Offset):{x:0,y:0},c=k(e.NodeData.Offset),r={id:e.ID.toString(),type:e.Children?void 0:"output",position:{x:n.x+c.x,y:n.y+c.y},data:{label:e.Name,task:Object(v.a)({},e)}};"BehaviorDesigner.Runtime.Tasks.EntryTask"===e.Type&&(r.type="input");var a=[r];if(e.Children){var s,i=Object(p.a)(e.Children);try{for(i.s();!(s=i.n()).done;){var j=s.value;a=a.concat(y(j,e));var d={id:e.ID+"-"+j.ID,source:e.ID.toString(),target:j.ID.toString(),type:"smoothstep"};a.push(d)}}catch(b){i.e(b)}finally{i.f()}}return a}function k(e){var t=e.replace("(","").replace(")","").split(",");return{x:Number.parseFloat(t[0]),y:Number.parseFloat(t[1])}}function C(e){var t=e.indexOf("m_");return t>-1&&(e=(e=e.substr(t+2))[0].toUpperCase()+e.substr(1)),e}var N=function(e){var t=Object(c.useState)({behaviors:[],entities:[],dataObjects:[]}),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(x.a.mark((function e(){var t,n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.entities.length>0)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m("/data/Behaviors.json");case 4:return t=e.sent,e.next=7,m("/data/Entities.json");case 7:return n=e.sent,e.next=10,m("/data/DataObjects.json");case 10:c=e.sent,a({behaviors:t,entities:n,dataObjects:c});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(u.jsx)(b.Provider,{value:r,children:e.children})},I=n(369),S=n(362),D=n(366),E=n(368);var w=function(e){var t,n,r=Object(c.useContext)(b),a=!Number.isInteger(e.$Ref),s=r.entities.some((function(t){return t.Guid===e.$Ref})),j=null;return j=s?r.entities.find((function(t){return t.Guid===e.$Ref})):r.dataObjects.find((function(t){return t.Guid===e.$Ref})),Object(u.jsx)(c.Fragment,{children:a?Object(u.jsx)(c.Fragment,{children:s?Object(u.jsx)(i.b,{to:"/entities/".concat(e.$Ref),children:null===(t=j)||void 0===t?void 0:t.Name}):Object(u.jsx)(i.b,{to:"/data-objects/".concat(e.$Ref),children:null===(n=j)||void 0===n?void 0:n.Name})}):Object(u.jsx)(i.b,{to:"/behaviors/".concat(e.$Ref),children:e.$Ref})})};var R=function e(t){var n;return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)("tbody",{children:(n=t.Instance,n?Object.keys(n).filter((function(e){return!e.endsWith("Ext")})).map((function(e){return{key:e,value:n[e]}})):[]).map((function(t){var n,r;return Object(u.jsx)("tr",{children:"object"===typeof t.value&&null!=t.value?Object(u.jsx)(c.Fragment,{children:(r=t.value,"object"===typeof r&&null!=r&&"$Ref"in r?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("td",{children:C(t.key)}),Object(u.jsx)("td",{children:Object(u.jsx)(w,{$Ref:t.value.$Ref})})]}):Object(u.jsx)("td",{colSpan:2,children:Object(u.jsx)(D.a,{children:Object(u.jsxs)(E.a,{children:[Object(u.jsx)(D.a.Toggle,{as:E.a.Header,eventKey:t.key,children:C(t.key)}),Object(u.jsx)(D.a.Collapse,{eventKey:t.key,children:Object(u.jsx)(E.a.Body,{children:Object(u.jsx)(e,{Instance:t.value})})})]})})}))}):Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("td",{children:t.key}),Object(u.jsx)("td",{children:Object(u.jsx)("span",{children:null===(n=t.value)||void 0===n?void 0:n.toString()})})]})},t.key)}))})})})};var G=function(){var e=Object(j.f)(),t=e.guid,n=e.name,r=Object(c.useContext)(b),a=Object(c.useState)(),s=Object(d.a)(a,2),i=s[0],l=s[1];Object(c.useEffect)((function(){var e=r.entities.filter((function(e){return e.Guid===t}));l(n?e.find((function(e){return e.Name===n})):e.find((function(e){return!0})))}),[t,n,r.entities]);var o=function(e,t){return e?e[t][0]:null};return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)(I.a,{children:[Object(u.jsx)(S.a,{eventKey:"root",title:"Entity",children:Object(u.jsx)(R,{Instance:i})}),function(e){return e?Object.keys(e).filter((function(e){return e.endsWith("Ext")})):[]}(i).map((function(e){return Object(u.jsx)(S.a,{eventKey:e,title:e,children:Object(u.jsx)(R,{Instance:o(i,e)})},e)}))]})})},F=n(364),T=n(367),$=n(169),P=n(29),L=n(108),B=n.n(L),W=n(363),J=n(165),K=new B.a.graphlib.Graph;K.setDefaultEdgeLabel((function(){return{}}));var A=function(e){var t=172,n=Object(c.useState)([]),r=Object(d.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(),j=Object(d.a)(i,2),b=j[0],l=j[1],o=Object(c.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"TB",c="LR"===n;return K.setGraph({rankdir:n}),e.forEach((function(e){Object(P.d)(e)?K.setNode(e.id,{width:t,height:36}):K.setEdge(e.source,e.target)})),B.a.layout(K),e.map((function(e){if(Object(P.d)(e)){var t=K.node(e.id);e.targetPosition=c?P.b.Left:P.b.Top,e.sourcePosition=c?P.b.Right:P.b.Bottom,e.position={x:t.x-86+Math.random()/1e3,y:t.y-18}}return e}))}),[]);return Object(c.useEffect)((function(){var t,n=(t=e.Instance.TaskJSON,JSON.parse(t)),c=y(n.EntryTask);(c=c.concat(y(n.RootTask))).push({id:"0-1",source:"0",target:"1"}),s(o(c))}),[e.Instance.TaskJSON,o]),Object(u.jsxs)(W.a,{style:{height:"100%"},children:[Object(u.jsx)(J.a,{children:Object(u.jsx)(P.c,{elements:a,nodesDraggable:!1,onElementClick:function(e,t){if("data"in t){var n=t.data.task;delete n.Children,delete n.NodeData,l(n)}},children:Object(u.jsx)(P.a,{})})}),Object(u.jsx)(J.a,{xs:!0,lg:5,style:{overflow:"hidden",overflowY:"auto",height:"100%",wordBreak:"break-all"},children:b?Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(R,{Instance:b})}):null})]})};var U=function(){var e=Object(j.f)().id,t=Object(c.useContext)(b),n=Object(c.useState)(null),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var n=t.behaviors.find((function(t){return t.ID===Number(e)}));n&&s(n)}),[e,t]),Object(u.jsx)(c.Fragment,{children:a?Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("div",{style:{height:400},children:Object(u.jsx)(A,{Instance:a})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("td",{children:a.Name})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"ID"}),Object(u.jsx)("td",{children:a.ID})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"AutoStart"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.AutoStart,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Interruptable"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.Interruptable,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"PauseWhenDisabled"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.PauseWhenDisabled,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"PreProcess"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.PreProcess,type:"checkbox"})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"RestartWhenComplete"}),Object(u.jsx)("td",{children:Object(u.jsx)(l.a.Check,{disabled:!0,checked:a.RestartWhenComplete,type:"checkbox"})})]}),a.Objects.length>0?Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:2,children:Object(u.jsx)(R,{Instance:{Objects:a.Objects}})})}):null]})})})]}):null})};var H=function(){var e=Object(j.g)(),t=Object(c.useContext)(b),n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)(l.a,{style:{padding:20},children:Object(u.jsx)(l.a.Control,{type:"search",placeholder:"Search...",value:a,onChange:function(e){s(e.currentTarget.value)}})}),Object(u.jsxs)(o.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Guid"})]})}),Object(u.jsx)("tbody",{children:t.dataObjects.filter((function(e){return e.Name.toLowerCase().includes(a.toLowerCase())})).sort((function(e,t){return e.Name.localeCompare(t.Name)})).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.Name}),Object(u.jsx)("td",{children:t.Guid}),Object(u.jsx)("td",{style:{textAlign:"center"},children:Object(u.jsx)(i.b,{to:"".concat(e.path,"/").concat(t.Guid),children:"=>"})})]},t.Guid+t.Name)}))})]})]})};var M=function(){var e=Object(j.f)().guid,t=Object(c.useContext)(b),n=Object(c.useState)(),r=Object(d.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var n=t.dataObjects.find((function(t){return t.Guid===e}));s(n)}),[e,t.dataObjects]),Object(u.jsx)(c.Fragment,{children:Object(u.jsx)(I.a,{children:Object(u.jsx)(S.a,{eventKey:"root",title:"Data Object",children:Object(u.jsx)(R,{Instance:a})})})})};var Y=function(){return Object(u.jsx)(N,{children:Object(u.jsxs)(i.a,{basename:"/undermine-data",children:[Object(u.jsx)(F.a,{children:Object(u.jsxs)(T.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(u.jsx)(T.a.Brand,{children:"Undermine Data"}),Object(u.jsx)(T.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)($.a,{className:"mr-auto",children:[Object(u.jsx)($.a.Link,{as:i.c,to:"/entities",children:"Entities"}),Object(u.jsx)($.a.Link,{as:i.c,to:"/data-objects",children:"Data Objects"})]})})]})}),Object(u.jsx)(F.a,{style:{padding:10},children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/entities",exact:!0,children:Object(u.jsx)(h,{})}),Object(u.jsx)(j.a,{path:"/entities/:guid",exact:!0,children:Object(u.jsx)(G,{})}),Object(u.jsx)(j.a,{path:"/entities/:guid/:name",children:Object(u.jsx)(G,{})}),Object(u.jsx)(j.a,{path:"/data-objects",exact:!0,children:Object(u.jsx)(H,{})}),Object(u.jsx)(j.a,{path:"/data-objects/:guid",exact:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(j.a,{path:"/behaviors/:id",children:Object(u.jsx)(U,{})})]})})]})})};s.a.render(Object(u.jsx)(Y,{}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.48276c6a.chunk.js.map