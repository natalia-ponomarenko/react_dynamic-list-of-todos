(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),o=n(1),u=n.n(o),l=n(6),i=n(2),d=n(3),p=n(5),m=n(4),f=(n(16),n(17),n(18),n(9)),h=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",select:""},e.handleInputChange=function(t){var n=t.target,a=n.name,r=n.value,s=e.props,c=s.todos,o=s.saveTodos,u=s.userId,l=e.state.query;e.setState(Object(f.a)({},a,r));var i=c.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())}));switch(r){case"Active":i=i.filter((function(e){return!e.completed}));break;case"Completed":i=i.filter((function(e){return e.completed}));break;case"By userId":if(!u)return;i=i.filter((function(e){return e.userId===u}))}o(i)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.query,n=e.select;return r.a.createElement("form",null,r.a.createElement("input",{className:"form__input form",type:"text",name:"query",placeholder:"find title...",value:t,onChange:this.handleInputChange}),r.a.createElement("select",{onChange:this.handleInputChange,name:"select",value:n},r.a.createElement("option",{value:"All"},"All"),r.a.createElement("option",{value:"Active"},"Active"),r.a.createElement("option",{value:"Completed"},"Completed"),r.a.createElement("option",{value:"By userId"},"This user only(choose a user and try)")))}}]),n}(r.a.Component);h.defaultProps={todos:[]};var v=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={filteredTodos:e.props.todos},e.saveTodos=function(t){e.setState({filteredTodos:t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.selectUser,n=e.todos;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement(h,{todos:n,saveTodos:this.saveTodos,userId:this.props.userId}),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},this.state.filteredTodos.map((function(e){return r.a.createElement("li",{key:e.id,className:"TodoList__item ".concat(!0===e.completed?"TodoList__item--checked":"TodoList__item--unchecked")},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:"".concat(!0===e.completed?"checked":"")}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:"TodoList__user-button button",type:"button",onClick:function(){t(e.userId)}},"User\xa0#",e.userId))})))))}}]),n}(r.a.Component);v.defaultProps={todos:[]};n(19);var y=function(e){return fetch("".concat("https://mate-api.herokuapp.com","/").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},b=function(){return y("users").then((function(e){return e.data}))};function E(){return _.apply(this,arguments)}function _(){return(_=Object(l.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return t=e.sent,e.next=5,k();case 5:return n=e.sent,a=n.filter((function(e){return e.title&&e.userId&&e.userId<=t.length&&0!==e.userId})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){return y("todos").then((function(e){return e.data}))},I=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadUserData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUserData()}},{key:"loadUserData",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=this.props.userId,y("users/".concat(n)).then((function(e){return e.data}));case 2:t=e.sent,this.setState({user:t});case 4:case"end":return e.stop()}var n}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user;return e?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:"," ",e.id)),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",className:"CurrentUser__button",onClick:this.props.resetUser},"Clear")):r.a.createElement("div",null)}}]),n}(r.a.Component),C=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.resetUser=function(){e.setState({selectedUserId:0})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},t.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{todos:t,selectUser:this.selectUser,userId:n}))),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(I,{userId:n,resetUser:this.resetUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d12b39f1.chunk.js.map