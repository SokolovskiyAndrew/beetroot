(this.webpackJsonples_39=this.webpackJsonples_39||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),l=a.n(s),c=(a(14),a(6)),i=a(3),u=a(4),r=a(7),d=a(5),m=a(8),p=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).onChangeValue=function(e){a.setState({value:e.target.value})},a.onAddItem=function(){a.setState((function(e){return{todo:[{value:a.state.value,done:!1}].concat(Object(c.a)(e.todo)),value:""}}))},a.onDeleteItem=function(e){a.state.todo.splice(e,1),a.setState({state:a.state.todo}),a.setState({state:a.state.btnVis=!0})},a.onDoneItem=function(e){if(a.state.todo[e].done){var t=a.state.todo.splice(e,1);a.state.todo.unshift(t[0]),t[0].done=!1}else{var n=a.state.todo.splice(e,1);a.state.todo.push(n[0]),n[0].done=!0}console.log(a.state.todo),a.setState({state:a.state.todo}),a.setState({state:a.state.btnVis=!0})},a.onEditItem=function(e){a.setState({state:a.state.btnVis=!1});var t=document.querySelectorAll(".todoWrapper__items--item > p")[e],n=a.state.todo[e].value;t.innerHTML='<input class="edits" type="text" value="'.concat(n+" ",'" autofocus /><button class="don">Done</button>');var o=document.querySelectorAll(".don"),s=document.querySelectorAll(".edits");o.forEach((function(t,n){t.onclick=function(){a.setState({state:a.state.todo[e].value=s[n].value}),a.setState({state:a.state.btnVis=!0})}}))},a.state={value:"",todo:[{value:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044e React",done:!1},{value:"\u0417\u0440\u043e\u0431\u0438\u0442\u0438 \u0434\u043e\u043c\u0430\u0448\u043a\u0443",done:!1},{value:"\u0417\u0430\u043b\u0438\u0442\u0438 \u043d\u0430 Git",done:!1},{value:"\u041f\u043e\u0441\u043f\u0430\u0442\u0438 :)",done:!1},{value:"\u041f\u0440\u0438\u0439\u0442\u0438 \u043d\u0430 \u0437\u0430\u043d\u044f\u0442\u0442\u044f :)",done:!1}],btnVis:!0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todoWrapper"},o.a.createElement("h1",null,"To do:"),o.a.createElement("div",{className:"todoWrapper__items"},this.state.todo.map((function(t,a){return o.a.createElement("div",{key:a,className:"todoWrapper__items--item"},o.a.createElement("p",{className:e.state.todo[a].done?"done":"undone"},e.state.todo[a].value),o.a.createElement("div",{className:"button"},o.a.createElement("span",{className:e.state.btnVis?"edit":"hid edit",onClick:function(){return e.onEditItem(a)}},o.a.createElement("img",{src:"img/edit.png",alt:""})),o.a.createElement("span",{className:"done",onClick:function(){return e.onDoneItem(a)}},o.a.createElement("img",{src:"img/done.png",alt:""})),o.a.createElement("span",{className:"delete",onClick:function(){return e.onDeleteItem(a)}},o.a.createElement("img",{src:"img/delete.png",alt:""}))))}))),o.a.createElement("div",{className:"todoWrapper__input"},o.a.createElement("label",null,"Task"),o.a.createElement("input",{type:"text",value:this.state.value,onChange:this.onChangeValue}),o.a.createElement("button",{type:"button",onClick:this.onAddItem,disabled:!this.state.value},"Save Item")))}}]),t}(o.a.Component));var v=function(){return o.a.createElement(p,null)};l.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fb8d13ab.chunk.js.map