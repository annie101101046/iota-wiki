"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4195,9514],{195:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),r=a(9079),l=a(2263),i=a(6010),c=a(2122),o=a(5977),s="header_1hEk",m="headerTitle_2ZSG",d="button_tkZj",u="icon_13V2",g="body_2-wU",h=[{title:"Learn",link:"docs/learn/about-iota/an-introduction-to-iota",description:n.createElement(n.Fragment,null,"Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.")},{title:"Use",link:"docs/use/use-cases/industry-applications",description:n.createElement(n.Fragment,null,"Learn about IOTAs solutions and how they can be applied in the real world.")},{title:"Develop",link:"docs/develop/getting-started/architecture",description:n.createElement(n.Fragment,null,"Follow our tutorials and documentation to build your own projects. IOTA supports Rust, C, Go, Java, and Python.")}];function v(e){var t=e.title,a=e.link,r=e.description,l=(0,n.useState)(!1),c=l[0],h=l[1],v=(0,o.k6)();return n.createElement("div",{className:"col col--4 margin-vert--md"},n.createElement("div",{className:(0,i.Z)("card padding--lg"),onClick:function(e){e.preventDefault(),v.push(a)},onMouseOver:function(){return h(!0)},onMouseOut:function(){return h(!1)}},n.createElement("div",{className:(0,i.Z)(s)},n.createElement("span",{className:(0,i.Z)(m)},t),n.createElement("div",{href:a,className:(0,i.Z)(d)},n.createElement("span",{className:(0,i.Z)("material-icons",u)},"navigate_next"))),n.createElement("div",{className:(0,i.Z)("headline-stick",{"size-m":c,"size-s":!c})}),n.createElement("div",{className:(0,i.Z)(g)},r)))}var b=function(){return n.createElement("div",{className:"container padding--xl"},n.createElement("div",{className:"section-header grey text--center margin-bottom--sm"},"Get started, right away"),n.createElement("div",{className:"row"},h.map((function(e,t){return n.createElement(v,(0,c.Z)({key:t},e))}))))},f=a(5350),k=a(4996),E="heading_3OS9",p="headingImage_4-y5",_="headingTitle_2e_T";var N=function(){var e=(0,l.Z)().siteConfig,t=(0,f.Z)().isDarkTheme;return n.createElement("div",{className:(0,i.Z)(E)},n.createElement("img",{className:(0,i.Z)(p),src:t?(0,k.Z)("/img/globe_dark.svg"):(0,k.Z)("/img/globe_light.svg")}),n.createElement("div",null,n.createElement("h1",{className:(0,i.Z)(_)},e.title),n.createElement("span",{className:(0,i.Z)("grey","section-header")},e.tagline)))},Z="header_2pud";var w=function(){return n.createElement("header",{className:(0,i.Z)("padding-top--xl",Z)},n.createElement(N,null),n.createElement(b,null))};function y(){var e=(0,l.Z)().siteConfig;return n.createElement(r.Z,{title:""+e.title,description:""+e.tagline},n.createElement(w,null))}},3007:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(2122),r=a(9756),l=a(7294),i=a(6010),c=a(6742),o=a(3018),s=a(4996),m=a(8465),d="socialBar_2nY3",u="socialLink_1As6",g="socialImage_2plZ",h="socialTitle_3JEm",v=[{title:"Youtube",imageUrl:"/img/youtube.svg",url:"https://www.youtube.com/c/iotafoundation",backgroundColor:"#18243C"},{title:"GitHub",imageUrl:"/img/github.svg",url:"https://www.github.com/iotaledger/",backgroundColor:"#24314A"},{title:"Discord",imageUrl:"/img/discord.svg",url:"https://discord.iota.org/",backgroundColor:"#303C56"},{title:"Twitter",imageUrl:"/img/twitter.svg",url:"https://www.twitter.com/iota/",backgroundColor:"#3B4862"},{title:"Reddit",imageUrl:"/img/reddit.svg",url:"https://www.reddit.com/r/iota/",backgroundColor:"#47546F"},{title:"Linkedin",imageUrl:"/img/linkedin.svg",url:"https://www.linkedin.com/company/iotafoundation/",backgroundColor:"#52607B"},{title:"Instagram",imageUrl:"/img/instagram.svg",url:"https://www.instagram.com/iotafoundation/",backgroundColor:"#5E6B87"}];function b(e){var t=e.title,a=e.imageUrl,n=e.url,r=e.backgroundColor;return l.createElement("a",{className:(0,i.Z)("padding-horiz--sm padding-vert--md",u),style:{backgroundColor:r},href:n},l.createElement("img",{className:(0,i.Z)(g),src:(0,s.Z)(a)}),l.createElement("div",{className:(0,i.Z)(h)},t))}var f=function(){return l.createElement("div",{className:(0,i.Z)(d)},v.map((function(e,t){return l.createElement(b,(0,n.Z)({key:t},e))})))},k=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,a=e.href,i=e.label,o=e.prependBaseUrlToHref,m=(0,r.Z)(e,k),d=(0,s.Z)(t),u=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,n.Z)({className:"footer__link-item"},a?{href:o?u:a}:{to:d},m),i)}var p=function(e){var t=e.sources,a=e.alt;return l.createElement(m.Z,{className:"footer__logo",alt:a,sources:t})};var _=function(){var e=(0,o.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,m=t.logo,d=void 0===m?{}:m,u={light:(0,s.Z)(d.src),dark:(0,s.Z)(d.srcDark||d.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,i.Z)("footer","padding--none","padding-top--lg",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container padding-horiz--xl"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-top--lg padding-bottom--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(E,e))}))):null)}))),(d||a)&&l.createElement("div",{className:"footer__bottom padding-top--xl padding-bottom--lg"},d&&(d.src||d.srcDark)&&l.createElement("div",null,d.href?l.createElement(c.Z,{href:d.href},l.createElement(p,{alt:d.alt,sources:u})):l.createElement(p,{alt:d.alt,sources:u})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)),l.createElement(f,null))):null}},6565:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(2122),r=a(7294),l=a(6010),i=a(4973),c=a(3507),o=a(3018),s=a(2263),m={toggle:"toggle_3D-N"},d=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.dark),style:a},t)},u=function(e){var t=e.icon,a=e.style;return r.createElement("span",{className:(0,l.Z)(m.toggle,m.light),style:a},t)},g=(0,r.memo)((function(e){var t=e.className,a=e.icons,n=e.checked,i=e.disabled,c=e.onChange,o=(0,r.useState)(n),s=o[0],m=o[1],d=(0,r.useState)(!1),u=d[0],g=d[1],h=(0,r.useRef)(null);return r.createElement("div",{className:(0,l.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":u,"react-toggle--disabled":i}),role:"button",tabIndex:-1,onClick:function(e){var t=h.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},a.checked),r.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),r.createElement("input",{ref:h,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return g(!0)},onBlur:function(){return g(!1)}}))}));function h(e){var t=(0,o.LU)().colorMode.switchConfig,a=t.darkIcon,l=t.darkIconStyle,i=t.lightIcon,c=t.lightIconStyle,m=(0,s.Z)().isClient;return r.createElement(g,(0,n.Z)({disabled:!m,icons:{checked:r.createElement(d,{icon:a,style:l}),unchecked:r.createElement(u,{icon:i,style:c})}},e))}var v=a(5350),b=a(5662),f=a(1839),k=a(3783),E=a(4201),p=a(5537),_=a(4478),N="toggle_2xs0",Z="navbarHideable_1VR7",w="navbarHidden_1FmO",y="right";function C(){return(0,o.LU)().navbar.items}function S(){var e=(0,o.LU)().colorMode.disableSwitch,t=(0,v.Z)(),a=t.isDarkTheme,n=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:a,toggle:(0,r.useCallback)((function(e){return e.target.checked?l():n()}),[n,l]),disabled:e}}function I(e){var t=e.sidebarShown,a=e.toggleSidebar;(0,f.Z)(t);var c=C(),s=S(),m=function(e){var t,a=e.sidebarShown,n=e.toggleSidebar,l=null==(t=(0,o.g8)())?void 0:t({toggleSidebar:n}),i=(0,o.D9)(l),c=(0,r.useState)((function(){return!1})),s=c[0],m=c[1];(0,r.useEffect)((function(){l&&!i&&m(!0)}),[l,i]);var d=!!l;return(0,r.useEffect)((function(){d?a||m(!0):m(!1)}),[a,d]),{shown:s,hide:(0,r.useCallback)((function(){m(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:a});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&t&&r.createElement(h,{checked:s.isDarkTheme,onChange:s.toggle})),r.createElement("div",{className:(0,l.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":m.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},c.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({mobile:!0},e,{onClick:a,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:m.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),m.content)))}var T=function(){var e,t,a,i,s,m,d,u=(0,o.LU)().navbar,g=u.hideOnScroll,v=u.style,f=(t=(0,k.Z)(),a="mobile"===t,i=(0,r.useState)(!1),s=i[0],m=i[1],d=(0,r.useCallback)((function(){m((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&m(!1)}),[t]),{shouldRender:a,toggle:d,shown:s}),T=S(),U=(0,b.Z)(g),x=U.navbarRef,D=U.isNavbarVisible,L=C(),B=L.some((function(e){return"search"===e.type})),F=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:y)}))}}(L),O=F.leftItems,M=F.rightItems;return r.createElement("nav",{ref:x,className:(0,l.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===v,"navbar--primary":"primary"===v,"navbar-sidebar--show":f.shown},e[Z]=g,e[w]=g&&!D,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},(null==L?void 0:L.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},r.createElement(_.Z,null)),r.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),O.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},M.map((function(e,t){return r.createElement(E.Z,(0,n.Z)({},e,{key:t}))})),!B&&r.createElement(c.Z,null),!T.disabled&&r.createElement(h,{className:N,checked:T.isDarkTheme,onChange:T.toggle}))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&r.createElement(I,{sidebarShown:f.shown,toggleSidebar:f.toggle}))}},3507:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(3018),l=a(6010),i="toggle_10iL",c=(0,n.memo)((function(){var e=(0,r.LU)().searchMode.switchConfig,t=e.closeIcon,a=e.closeIconStyle,c=e.searchIcon,o=e.searchIconStyle,s=(0,n.useState)(!1),m=s[0],d=s[1],u=(0,n.useRef)(null),g=function(e){var t=u.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void d(null==t?void 0:t.checked)};return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,l.Z)("wiki-search",{"wiki-search--checked":m}),role:"button",tabIndex:-1,onClick:g},n.createElement("div",{className:"wiki-search-opened"},n.createElement("span",{className:(0,l.Z)(i),style:a},t)),n.createElement("div",{className:"wiki-search-closed"},n.createElement("span",{className:(0,l.Z)(i),style:o},c)),n.createElement("input",{ref:u,checked:m,type:"checkbox",className:"wiki-search-screenreader-only","aria-label":"Open and close search",onChange:g})),n.createElement("div",{className:(0,l.Z)("wiki-search-page",{"wiki-search-page--checked":m})},n.createElement("div",{className:"wiki-search-header"}),n.createElement("div",{className:"wiki-search-main"},n.createElement("div",{className:"wiki-search-bar"},n.createElement("div",{className:"wiki-search-logo"},n.createElement("span",{className:(0,l.Z)(i),style:o},c)),n.createElement("input",{className:"wiki-search-input",type:"text"})))))}))}}]);