(this["webpackJsonpreact-redux-saga"]=this["webpackJsonpreact-redux-saga"]||[]).push([[0],{37:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(12),s=n(9),i=n(7),o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},u=n(18),l=n(23),j=n(14),b=n(5),O=n(19),d=n(20),p=n(24),h=n(22),f="POST/CREATE_POST",x="POST/FETCHED_POST",m="APP/SHOW_LOADER",v="APP/HIDE_POST",g="APP/SHOW_ALERT",y="APP/HIDE_ALERT",P="POST/REQUEST_POSTS";function S(){return{type:v}}function w(t){return function(e){e({type:g,payload:t}),setTimeout((function(){e({type:y})}),2e3)}}var E=n(3),T=function(t){var e=t.text;return Object(E.jsx)("div",{className:"alert alert-warning",role:"alert",children:e})},_=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(t){var c;return Object(O.a)(this,n),(c=e.call(this,t)).submitHandler=function(t){t.preventDefault();var e=c.state.title;if(!e.trim())return c.props.showAlert("The post name can't be the empty string");var n={title:e,id:Date.now().toString()};c.props.createPost(n),c.reset()},c.reset=function(){c.setState({title:""})},c.handleInputChange=function(t){c.setState((function(e){return Object(b.a)(Object(b.a)({},e),Object(j.a)({},t.target.name,t.target.value))}))},c.state={title:""},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(E.jsxs)("form",{onSubmit:this.submitHandler,children:[this.props.text&&Object(E.jsx)(T,{text:this.props.text}),Object(E.jsxs)("div",{className:"form-group",children:[Object(E.jsx)("label",{htmlFor:"title",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430"}),Object(E.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleInputChange,className:"form-control",id:"title"})]}),Object(E.jsx)("button",{className:"btn btn-success",type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})}}]),n}(r.a.Component),N={createPost:function(t){return{type:f,payload:t}},showAlert:w},D=Object(i.b)((function(t){return{text:t.app.alert}}),N)(_),A=function(t){var e=t.post;return Object(E.jsx)("div",{className:"card",children:Object(E.jsx)("div",{className:"card-body",children:Object(E.jsxs)("h5",{className:"card-title",children:[" ",e.title]})})})},C=Object(i.b)((function(t){return{myPosts:t.posts.posts}}),null)((function(t){var e=t.myPosts;return e.length?e.map((function(t){return Object(E.jsx)(A,{post:t},t.id)})):Object(E.jsx)("h4",{children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u0435\u0449\u0435 \u043d\u0435\u0442"})})),k=function(){var t=Object(i.c)(),e=Object(i.d)((function(t){return t.posts.fetchedPosts})),n=Object(i.d)((function(t){return t.app.loading})),c=e.length;return console.log(n),n?Object(E.jsx)("h1",{children:"Loading..."}):c?e.map((function(t){return Object(E.jsx)(A,{post:t},t.id)})):Object(E.jsx)("button",{className:"btn btn-primary",onClick:function(){return t({type:P})},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})};var I=function(){return Object(E.jsxs)("div",{className:"containern pt-3",children:[Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"col",children:Object(E.jsx)(D,{})})}),Object(E.jsx)("div",{className:"row",children:Object(E.jsxs)("div",{className:"col",children:[Object(E.jsx)("h2",{children:"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),Object(E.jsx)(C,{})]})}),Object(E.jsxs)("div",{className:"col",children:[Object(E.jsx)("h2",{children:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),Object(E.jsx)(k,{})]})]})},L={loading:!1,alert:null},H={posts:[],fetchedPosts:[]},R=Object(s.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(b.a)(Object(b.a)({},t),{},{posts:t.posts.concat(e.payload)});case x:return Object(b.a)(Object(b.a)({},t),{},{fetchedPosts:e.payload});default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(b.a)(Object(b.a)({},t),{},{loading:!0});case v:return Object(b.a)(Object(b.a)({},t),{},{loading:!1});case g:return Object(b.a)(Object(b.a)({},t),{},{alert:e.payload});case y:return Object(b.a)(Object(b.a)({},t),{},{alert:null});default:return t}}}),F=n(21),X=n(11),U=n.n(X),B=n(10),J=U.a.mark(W),V=U.a.mark(q);function W(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(B.b)({type:m});case 3:return e.next=5,Object(B.a)(M);case 5:return t=e.sent,e.next=8,Object(B.b)({type:x,payload:t});case 8:return e.next=10,Object(B.b)(S());case 10:e.next=18;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,Object(B.b)(w(e.t0.message));case 16:return e.next=18,Object(B.b)(S());case 18:case"end":return e.stop()}}),J,null,[[0,12]])}function M(){return Q.apply(this,arguments)}function Q(){return(Q=Object(F.a)(U.a.mark((function t(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(B.c)(P,W);case 2:case"end":return t.stop()}}),V)}var z=Object(l.a)(),G=Object(s.d)(R,Object(s.c)(Object(s.a)(u.a,z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));z.run(q),Object(a.render)(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(i.a,{store:G,children:Object(E.jsx)(I,{})})}),document.getElementById("root")),o()}},[[37,1,2]]]);
//# sourceMappingURL=main.76694dff.chunk.js.map