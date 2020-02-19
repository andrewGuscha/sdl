(this.webpackJsonpsdl=this.webpackJsonpsdl||[]).push([[0],{18:function(e,t,n){e.exports={container:"SearchInput_container__3uWdW",inputContainer:"SearchInput_inputContainer__1ycf_",spinner:"SearchInput_spinner__24ocO",input:"SearchInput_input__2wCi4",button:"SearchInput_button__rkUK9"}},19:function(e,t,n){e.exports={container:"PopupList_container__2wds7",noResults:"PopupList_noResults__2FwMk",item:"PopupList_item__qGwqZ"}},38:function(e,t,n){e.exports={spinner:"Spinner_spinner__1Neu5"}},39:function(e,t,n){e.exports={container:"SearchBox_container__BKYRx"}},40:function(e,t,n){e.exports={app:"App_app__1kX79"}},42:function(e,t,n){e.exports=n(71)},52:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),o=n.n(c),i=n(41),s=n(14),u=n(11),l=(n(52),n(8)),p=n(9),d=n(12),h=n(10),f=n(13),m=n(37),v=n.n(m),E=n(38),C=n.n(E),b=function(e){var t=e.className;return r.a.createElement("div",{className:v()(C.a.spinner,t)})},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"COUNTRIES_REQUEST",search:e}},S=n(23),_={loading:!1,loaded:!1,list:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COUNTRIES_REQUEST":return Object(S.a)({},e,{list:[],loading:!0,loaded:!1});case"COUNTRIES_REQUEST_SUCCESS":return Object(S.a)({},e,{list:t.list,loading:!1,loaded:!0});case"COUNTRIES_REQUEST_CANCEL":case"COUNTRIES_REQUEST_CANCELED":return Object(S.a)({},e,{list:[],loading:!1,loaded:!1});default:return e}},R=n(16),g=n.n(R),k=n(17),y=n(22),w=n.n(y).a.create({baseURL:"https://swapi.co/api/"}),N=g.a.mark(T),U=g.a.mark(I),x=g.a.mark(L);function T(){var e,t,n,a,r,c=arguments;return g.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:{},t=e.search,n=y.CancelToken.source(),o.prev=2,a={search:t},o.next=6,w.get("planets/",{params:a,cancelToken:n.token});case 6:return r=o.sent,o.next=9,Object(k.c)({type:"COUNTRIES_REQUEST_SUCCESS",list:r.data.results});case 9:return o.prev=9,o.next=12,Object(k.b)();case 12:if(!o.sent){o.next=16;break}return n.cancel("Cancelled"),o.next=16,Object(k.c)({type:"COUNTRIES_REQUEST_CANCELED"});case 16:return o.finish(9);case 17:case"end":return o.stop()}}),N,null,[[2,,9,17]])}function I(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(k.e)("COUNTRIES_REQUEST",T);case 3:return e=t.sent,t.next=6,Object(k.d)("COUNTRIES_REQUEST_CANCEL");case 6:return t.next=8,Object(k.a)(e);case 8:t.next=0;break;case 10:case"end":return t.stop()}}),U)}function L(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),x)}var D=n(18),Q=n.n(D),K=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var n=t.target.value;e.props.onChange(n)},e.inputRef=Object(a.createRef)(),e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.value;e.value&&!t&&this.inputRef.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.loading,a=e.onClear;return r.a.createElement("div",{className:Q.a.container},r.a.createElement("div",{className:Q.a.inputContainer},n&&r.a.createElement(b,{className:Q.a.spinner}),r.a.createElement("input",{ref:this.inputRef,type:"text",value:t,onChange:this.handleChange,className:Q.a.input,tabIndex:"1"})),!!t&&r.a.createElement("button",{onClick:a,className:Q.a.button,tabIndex:"2"},"Clear"))}}]),t}(a.Component),A={getCountries:O},W=Object(u.b)(null,A)(K),q=n(19),B=n.n(q),M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleSelect=function(){var e=n.props,t=e.country;(0,e.onSelect)(t.name)},n.handleKeyDown=function(e){13===e.keyCode&&n.handleSelect()},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.country,n=e.order,a=e.higlight,c=t.name.split(new RegExp("(".concat(a,")"),"gi")),o=a.toLowerCase();return r.a.createElement("div",{className:B.a.item,tabIndex:10+n,onClick:this.handleSelect,onKeyDown:this.handleKeyDown},c.map((function(e,t){return e.toLowerCase()===o?r.a.createElement("b",{key:t},e):r.a.createElement("span",{key:t},e)})))}}]),t}(a.Component),P=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).handleClickOutside=function(t){e.state.open&&e.popupRef.current&&!e.popupRef.current.contains(t.target)&&e.setState({open:!1})},e.handleKeyDown=function(t){27===t.keyCode&&e.setState({open:!1})},e.onSelect=function(t){var n=e.props.onSelect;e.setState({open:!1}),n(t)},e.popupRef=Object(a.createRef)(),e.state={open:!1},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(e){!e.loaded&&this.props.loaded&&this.setState({open:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state.open,n=this.props,a=n.list,c=n.value,o=n.loaded;return t?r.a.createElement("div",{className:B.a.container,ref:this.popupRef},o&&!a.length&&r.a.createElement("div",{className:B.a.noResults},"No results"),a.map((function(t,n){return r.a.createElement(M,{country:t,key:n,order:n,higlight:c,onSelect:e.onSelect})}))):null}}]),t}(a.Component),J=Object(u.b)((function(e){return e}))(P),F=n(39),G=n.n(F),X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){var n=e.props.getCountries;if(""!==t)return e.setState({search:t}),n(t);e.onClear()},e.onSelect=function(t){e.setState({search:t})},e.onClear=function(){return e.setState({search:""}),e.props.cancelCountriesRequest()},e.state={search:""},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.search,t=this.props,n=t.loading,a=t.loaded,c=t.list;return r.a.createElement("div",{className:G.a.container},r.a.createElement(W,{value:e,loading:n,onChange:this.handleChange,onClear:this.onClear}),r.a.createElement(J,{list:c,value:e,loaded:a,onSelect:this.onSelect}))}}]),t}(a.Component),Y={getCountries:O,cancelCountriesRequest:function(){return{type:"COUNTRIES_REQUEST_CANCEL"}}},Z=Object(u.b)((function(e){return e}),Y)(X),$=n(40),z=n.n($);var H=function(){return r.a.createElement("div",{className:z.a.app},r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=Object(i.a)(),ee=Object(s.d)(j,Object(s.c)(Object(s.a)(V)));V.run(L),o.a.render(r.a.createElement(u.a,{store:ee},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.311b076d.chunk.js.map