(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=(n(22),n(10)),l=n(11),c=n(14),u=n(12),m=n(15),h=n(13),d=n.n(h),p=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).clickHandler=function(){n.loadUser().catch(function(e){alert("\u30a8\u30e9\u30fc\u767a\u751f")})},n.state={isLogin:!1,departmentList:[],user:[],word:"",member:[],currentPage:"1",totalPage:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.httpClient=d.a.create({baseURL:"https://kadou.i.nijibox.net/api",withCredentials:!0}),this.loadAuth().then(function(){return e.state.isLogin?e.loadDepartments():Promise.resolve()}).catch(function(e){alert("API\u304c\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3057\u305f\n\n"+e)})}},{key:"loadAuth",value:function(){var e=this;return this.httpClient.get("/auth",{params:{callback:"http://localhost:3000"}}).then(this.commonResponseHandling).then(function(t){t.is_login?e.setState({isLogin:!0}):t.auth_url&&(window.location.href=t.auth_url)})}},{key:"loadDepartments",value:function(){var e=this;return this.httpClient.get("/who/departments").then(this.commonResponseHandling).then(function(t){e.setState({departmentList:t})})}},{key:"commonResponseHandling",value:function(e){return console.debug(e),"200"!==e.data.code?(console.error(e.data.data),Promise.reject("API Error:"+e.data.data.message)):Promise.resolve(e.data.data)}},{key:"loadUser",value:function(e){var t=this;return this.httpClient.get("/who/search",{params:{department_id:e.target.value,page:this.state.currentPage}}).then(this.commonResponseHandling).then(function(e){t.setState({user:e.item_list,totalPage:e.summary.total_pages,page:e.summary.current_page}),console.log(e.summary.total_pages),console.log(e.summary.current_page)})}},{key:"handleChange",value:function(e){this.setState({word:e})}},{key:"searchUser",value:function(e){var t=this;return e=this.state.word,console.log(e),this.httpClient.get("/who/search",{params:{query:e}}).then(this.commonResponseHandling).then(function(e){console.log(e),t.setState({member:e.item_list})})}},{key:"nextPage",value:function(){var e=Number(this.state.currentPage);e+1<=Number(this.state.totalPage)&&(e+=1),this.setState({currentPage:e})}},{key:"prevPage",value:function(){var e=Number(this.state.currentPage);e+1>=Number(this.state.totalPage)&&(e-=1),this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return a.createElement("div",null,a.createElement("form",null,a.createElement("label",null,"\u90e8\u7f72\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044",a.createElement("select",{onChange:function(t){return e.loadUser(t)}},a.createElement("option",{value:"0"},"\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"),a.createElement("option",{value:"2"},"MP\u4e8b\u696d\u90e8"),a.createElement("option",{value:"3"},"OS\u4e8b\u696d\u90e8"),a.createElement("option",{value:"8"},"UI/UX\u5236\u4f5c\u5ba4"),a.createElement("option",{value:"4"},"\u958b\u767a\u5ba4"),a.createElement("option",{value:"5"},"\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u5ba4"),a.createElement("option",{value:"6"},"QA\u30b0\u30eb\u30fc\u30d7"),a.createElement("option",{value:"7"},"\u7d4c\u55b6\u4f01\u753b\u5ba4"),a.createElement("option",{value:"1"},"\u30cb\u30b8\u30dc\u30c3\u30af\u30b9")))),a.createElement("input",{type:"text",value:this.state.word,onChange:function(t){return e.handleChange(t.target.value)}}),a.createElement("button",{onClick:function(t){return e.searchUser(t)}},"\u691c\u7d22"),a.createElement("div",{className:"pager"},a.createElement("div",{onClick:function(t){return e.prevPage(t)},className:"prev"},"\u524d\u3078"),a.createElement("div",{onClick:function(t){return e.nextPage(t)},className:"next"},"\u6b21\u3078")),a.createElement("div",{className:"members"},this.state.member.map(function(e,t){return a.createElement("div",{className:"members_card",key:t},a.createElement("p",{className:"members_name"},"\u6c0f\u540d:",e.user_name),a.createElement("img",{src:e.photo_url,alt:""}))})),a.createElement("div",{className:"members"},this.state.user.map(function(e,t){return a.createElement("div",{className:"members_card",key:t},a.createElement("p",{className:"members_name"},"\u6c0f\u540d:",e.user_name),a.createElement("img",{src:e.photo_url,alt:""}))})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.793ed9f4.chunk.js.map