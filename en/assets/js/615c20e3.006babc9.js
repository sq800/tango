"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8979],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1433:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2784);const a={},l={};a&&a.children&&a.children.forEach((e=>{e.children.forEach((e=>{e.name&&(l[e.name]=e)}))}));const i=function(e){let t;switch(void 0===e&&(e={}),e.type){case"union":t="union";break;case"array":t=`${i(e.elementType)}[]`;break;default:t=e.name}return t};function o(e){let{html:t}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}const c=[{dataIndex:"name",title:"\u5c5e\u6027\u540d"},{dataIndex:"type",title:"\u7c7b\u578b",render:(e,t)=>"Method"===t.kindString?"function":i(t.type||{})},{dataIndex:"flags.isOptional",title:"\u662f\u5426\u5fc5\u9009",render:(e,t)=>t.flags.isOptional?null:"\u5fc5\u586b"},{dataIndex:"comment",title:"\u8bf4\u660e",width:"40%",render:e=>e?r.createElement("div",null,r.createElement(o,{html:e.summary?e.summary.map((e=>"text"===e.kind?e.text.replaceAll("\n","<br />"):"")).join("<br />"):void 0})):null}];function d(e){const{name:t}=e,n=l[t];if(!n)return r.createElement("div",{style:{border:"1px solid red",color:"red"}},"can not find ",t);let a=[];return a="reflection"===n.type?.type?n.type.declaration.children:n.children,r.createElement(u,{title:t,dataSource:a,columns:c,rowKey:"id"})}function u(e){let{title:t,dataSource:n,columns:a,rowKey:l}=e;return r.createElement("table",{className:"SimpleTable",style:{width:"100%"}},t&&r.createElement("caption",null,t),function(e){void 0===e&&(e=[]);return r.createElement("thead",null,r.createElement("tr",null,e.map((e=>r.createElement("th",{key:e.dataIndex,style:{width:e.width}},e.title)))))}(a),function(e,t,n){return r.createElement("tbody",null,e.map((e=>e?r.createElement("tr",{key:e[n]},t.map(((t,n)=>r.createElement("td",{key:t.dataIndex},function(e,t,n){let{dataIndex:r,render:a}=e;const l=function(e,t){if(!t)return;return t.split(".").reduce(((e,t)=>e[t]),e)}(t,r);if("function"==typeof a)return a(l,t,n);return l}(t,e,n))))):null)))}(n,a,l))}},1913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7896),a=(n(2784),n(876)),l=n(1433);const i={},o="SidebarPanel \u4fa7\u8fb9\u680f\u9762\u677f",c={unversionedId:"designer/modules/sidebar-panel",id:"designer/modules/sidebar-panel",title:"SidebarPanel \u4fa7\u8fb9\u680f\u9762\u677f",description:"\u4fa7\u8fb9\u680f\u9762\u677f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684\u4e3b\u64cd\u4f5c\u9762\u677f\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e9b\u9ad8\u9891\u64cd\u4f5c\u548c\u6838\u5fc3\u90e8\u4ef6\u653e\u7f6e\u5230\u4fa7\u8fb9\u680f\u9762\u677f\u4e2d\uff0c\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u64cd\u4f5c\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/designer/modules/sidebar-panel.mdx",sourceDirName:"designer/modules",slug:"/designer/modules/sidebar-panel",permalink:"/tango/en/docs/designer/modules/sidebar-panel",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/designer/modules/sidebar-panel.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",level:2},{value:"\u521b\u5efa\u6d6e\u52a8\u9762\u677f",id:"\u521b\u5efa\u6d6e\u52a8\u9762\u677f",level:2},{value:"\u5fbd\u6807\u63d0\u793a",id:"\u5fbd\u6807\u63d0\u793a",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sidebarpanel-\u4fa7\u8fb9\u680f\u9762\u677f"},"SidebarPanel \u4fa7\u8fb9\u680f\u9762\u677f"),(0,a.kt)("p",null,"\u4fa7\u8fb9\u680f\u9762\u677f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u6613\u7528\u7684\u4e3b\u64cd\u4f5c\u9762\u677f\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e9b\u9ad8\u9891\u64cd\u4f5c\u548c\u6838\u5fc3\u90e8\u4ef6\u653e\u7f6e\u5230\u4fa7\u8fb9\u680f\u9762\u677f\u4e2d\uff0c\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,a.kt)(l.Z,{name:"SidebarPanelProps",mdxType:"TypesTable"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u6d6e\u52a8\u9762\u677f"},"\u521b\u5efa\u6d6e\u52a8\u9762\u677f"),(0,a.kt)("p",null,"\u501f\u52a9 ",(0,a.kt)("inlineCode",{parentName:"p"},"isFloat")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," \u5c5e\u6027\u53ef\u4ee5\u521b\u5efa\u6d6e\u52a8\u81ea\u5b9a\u4e49\u5bbd\u5ea6\u9762\u677f\uff0c\u8131\u79bb\u6846\u67b6\u5bf9\u4fa7\u8fb9\u680f\u7684\u5bbd\u5ea6\u9650\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<SidebarPanel.Item key="history" isFloat width="40vw" />\n')),(0,a.kt)("h2",{id:"\u5fbd\u6807\u63d0\u793a"},"\u5fbd\u6807\u63d0\u793a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"showBadge")," \u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e\u5de5\u5177\u680f\u662f\u5426\u663e\u793a\u5fbd\u6807\u63d0\u793a\uff0c\u7528\u4e8e\u67d0\u4e9b\u9762\u677f\u9700\u8981\u5bf9\u5916\u5c55\u73b0\u9700\u8981\u88ab\u7528\u6237\u6ce8\u610f\u7684\u65f6\u673a\u3002"),(0,a.kt)("img",{alt:"img",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/18224398190/2847/b86d/df55/c817e86a0b1b3a6b08f7cc98362caec5.png",width:"300px"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<SidebarPanel.Item\n  key="info"\n  label="\u6d88\u606f"\n  title="\u6d88\u606f\u5217\u8868"\n  icon={<NotificationOutlined />}\n  showBadge={{ count: 2 }}>\n  <Box>info panel</Box>\n</SidebarPanel.Item>\n')))}m.isMDXComponent=!0}}]);