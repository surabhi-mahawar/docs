(window.webpackJsonp=window.webpackJsonp||[]).push([[10,62],{198:function(e,t,a){"use strict";a.r(t);a(27),a(19),a(20),a(52),a(231);var n=a(0),r=a.n(n),l=a(201),i=a(202),o=a(66),c=a(205),s=a(1),u=a(204),m=a.n(u),d=a(219),f=a(220),b=a(203),p=a(207),v=a(143),h=a.n(v);function k(e){var t=e.item,a=e.onItemClick,l=e.collapsible,i=t.items,o=t.href,c=t.label,u=t.type,d=Object(n.useState)(t.collapsed),f=d[0],v=d[1],h=Object(n.useState)(null),E=h[0],g=h[1];t.collapsed!==E&&(g(t.collapsed),v(t.collapsed));var _=Object(n.useCallback)((function(e){e.preventDefault(),v((function(e){return!e}))}));switch(u){case"category":return i.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":f}),key:c},r.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&!t.collapsed}),href:"#!",onClick:l?_:void 0},c),r.a.createElement("ul",{className:"menu__list"},i.map((function(e){return r.a.createElement(k,{key:e.label,item:e,onItemClick:a,collapsible:l})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(b.a,Object(s.a)({className:"menu__link",to:o},Object(p.a)(o)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),c))}}var E=function(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],o=Object(i.a)(),c=o.siteConfig,u=(c=void 0===c?{}:c).themeConfig.navbar,p=(u=void 0===u?{}:u).title,v=u.hideOnScroll,E=void 0!==v&&v,g=o.isClient,_=Object(f.a)(),w=_.logoLink,y=_.logoLinkProps,C=_.logoImageUrl,N=_.logoAlt,O=e.docsSidebars,j=e.path,M=e.sidebar,S=e.sidebarCollapsible;if(Object(d.a)(a),!M)return null;var x=O[M];if(!x)throw new Error('Cannot find the sidebar "'+M+'" in the sidebar config!');return S&&x.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,j)})),r.a.createElement("div",{className:h.a.sidebar},E&&r.a.createElement(b.a,Object(s.a)({className:h.a.sidebarLogo,to:w},y),null!=C&&r.a.createElement("img",{key:g,src:C,alt:N}),null!=p&&r.a.createElement("strong",null,p)),r.a.createElement("div",{className:m()("menu","menu--responsive",h.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!a)}},a?r.a.createElement("span",{className:m()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},x.map((function(e){return r.a.createElement(k,{key:e.label,item:e,onItemClick:function(){l(!1)},collapsible:S})})))))},g=a(209),_=a(213),w=a(218),y=a(148),C=a.n(y);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(w.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,d=a.version,f=u[s.path],b=Object(i.a)(),p=b.siteConfig,v=(p=void 0===p?{}:p).themeConfig,h=void 0===v?{}:v,k=b.isClient,y=h.sidebarCollapsible,N=void 0===y||y;return 0===Object.keys(s).length?r.a.createElement(_.default,e):r.a.createElement(c.a,{version:d,key:k},r.a.createElement("div",{className:C.a.docPage},f&&r.a.createElement("div",{className:C.a.docSidebarContainer},r.a.createElement(E,{docsSidebars:m,path:s.path,sidebar:f,sidebarCollapsible:N})),r.a.createElement("main",{className:C.a.docMainContainer},r.a.createElement(l.a,{components:g.a},Object(o.a)(t.routes)))))}},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(205);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},231:function(e,t,a){"use strict";var n=a(12),r=a(232)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(77)("find")},232:function(e,t,a){var n=a(26),r=a(59),l=a(28),i=a(24),o=a(233);e.exports=function(e,t){var a=1==e,c=2==e,s=3==e,u=4==e,m=6==e,d=5==e||m,f=t||o;return function(t,o,b){for(var p,v,h=l(t),k=r(h),E=n(o,b,3),g=i(k.length),_=0,w=a?f(t,g):c?f(t,0):void 0;g>_;_++)if((d||_ in k)&&(v=E(p=k[_],_,h),e))if(a)w[_]=v;else if(v)switch(e){case 3:return!0;case 5:return p;case 6:return _;case 2:w.push(p)}else if(u)return!1;return m?-1:s||u?u:w}}},233:function(e,t,a){var n=a(234);e.exports=function(e,t){return new(n(e))(t)}},234:function(e,t,a){var n=a(13),r=a(235),l=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},235:function(e,t,a){var n=a(21);e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);