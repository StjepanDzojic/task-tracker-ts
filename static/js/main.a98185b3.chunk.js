(this["webpackJsonptask-tracker-ts"]=this["webpackJsonptask-tracker-ts"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(13),n(8)),i=n(5),d=n(2),j=n(0),l=function(e){var t=e.onAdd,n=Object(c.useState)(void 0),r=Object(d.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(void 0),i=Object(d.a)(s,2),l=i[0],b=i[1],u=Object(c.useState)(!1),O=Object(d.a)(u,2),h=O[0],x=O[1],m=Object(c.useState)(void 0),f=Object(d.a)(m,2),v=f[0],k=f[1],p=Object(c.useState)(void 0),g=Object(d.a)(p,2),S=g[0],y=g[1],T=Object(c.useState)(void 0),D=Object(d.a)(T,2),N=D[0],w=D[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(k(void 0),l?(y(void 0),a.length<10?w("Task must contain 10 characters!"):(w(void 0),t({text:a,day:l,reminder:h}),o(""),b(""),x(!1))):y("Day can't be empty!")):k("Task can't be empty!")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Task"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("small",{children:v}),Object(j.jsx)("small",{children:N})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Day"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Day",value:l,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("small",{children:S})]}),Object(j.jsxs)("div",{className:"form-control form-control-check",children:[Object(j.jsx)("label",{children:"Set Reminder"}),Object(j.jsx)("input",{type:"checkbox",checked:h,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},b=function(e){var t=e.text,n=e.onShow;return Object(j.jsx)("button",{className:"btn",onClick:n,children:t})},u=function(e){var t=e.title,n=e.onShow,c=e.showAdd;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)(b,{text:c?"Hide":"Show",onShow:n})]})},O=function(e){var t=e.task,n=e.onDelete;return Object(j.jsx)("button",{className:"btn-delete",onClick:function(){return n(t.id)},children:"Delete"})},h=function(e){var t=e.task,n=e.onToggle;return Object(j.jsx)("button",{className:"btn-reminder",onClick:function(){return n(t.id)},children:"Set Reminder"})},x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(j.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),children:[Object(j.jsx)("h3",{children:t.text}),Object(j.jsx)("p",{children:t.day}),Object(j.jsx)(O,{task:t,onDelete:n}),Object(j.jsx)(h,{task:t,onToggle:c})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"Feb 5th",reminder:!0},{id:3,text:"Shopping",day:"May 7th",reminder:!1},{id:2,text:"Meeting",day:"July 6th",reminder:!0}]),o=Object(d.a)(a,2),b=o[0],O=o[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u,{title:"Task tracker",onShow:function(){return r(!n)},showAdd:n}),n&&Object(j.jsx)(l,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);O([].concat(Object(s.a)(b),[n]))}}),Object(j.jsx)(m,{tasks:b,onDelete:function(e){O(b.filter((function(t){return t.id!==e})))},onToggle:function(e){O(b.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}})]})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a98185b3.chunk.js.map