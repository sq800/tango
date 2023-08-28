"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3430],{1917:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(2784);const a={},o={};a&&a.children&&a.children.forEach((e=>{e.children.forEach((e=>{e.name&&(o[e.name]=e)}))}));const i=function(e){let n;switch(void 0===e&&(e={}),e.type){case"union":n="union";break;case"array":n=`${i(e.elementType)}[]`;break;default:n=e.name}return n};function l(e){let{html:n}=e;return r.createElement("div",{dangerouslySetInnerHTML:{__html:n}})}const s=[{dataIndex:"name",title:"\u5c5e\u6027\u540d"},{dataIndex:"type",title:"\u7c7b\u578b",render:(e,n)=>"Method"===n.kindString?"function":i(n.type||{})},{dataIndex:"flags.isOptional",title:"\u662f\u5426\u5fc5\u9009",render:(e,n)=>n.flags.isOptional?null:"\u5fc5\u586b"},{dataIndex:"comment",title:"\u8bf4\u660e",width:"40%",render:e=>e?r.createElement("div",null,r.createElement(l,{html:e.summary?e.summary.map((e=>"text"===e.kind?e.text.replaceAll("\n","<br />"):"")).join("<br />"):void 0})):null}];function c(e){const{name:n}=e,t=o[n];if(!t)return r.createElement("div",{style:{border:"1px solid red",color:"red"}},"can not find ",n);let a=[];return a="reflection"===t.type?.type?t.type.declaration.children:t.children,r.createElement(d,{title:n,dataSource:a,columns:s,rowKey:"id"})}function d(e){let{title:n,dataSource:t,columns:a,rowKey:o}=e;return r.createElement("table",{className:"SimpleTable",style:{width:"100%"}},n&&r.createElement("caption",null,n),function(e){void 0===e&&(e=[]);return r.createElement("thead",null,r.createElement("tr",null,e.map((e=>r.createElement("th",{key:e.dataIndex,style:{width:e.width}},e.title)))))}(a),function(e,n,t){return r.createElement("tbody",null,e.map((e=>e?r.createElement("tr",{key:e[t]},n.map(((n,t)=>r.createElement("td",{key:n.dataIndex},function(e,n,t){let{dataIndex:r,render:a}=e;const o=function(e,n){if(!n)return;return n.split(".").reduce(((e,n)=>e[n]),e)}(n,r);if("function"==typeof a)return a(o,n,t);return o}(n,e,t))))):null)))}(t,a,o))}},1835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7896),a=(t(2784),t(876)),o=t(1917);const i={},l="Designer \u8bbe\u8ba1\u5668\u5bb9\u5668",s={unversionedId:"designer/modules/designer",id:"designer/modules/designer",title:"Designer \u8bbe\u8ba1\u5668\u5bb9\u5668",description:"\u8bbe\u8ba1\u5668\u6839\u8282\u70b9\uff0c\u6ce8\u5165\u5168\u5c40\u72b6\u6001\u3002",source:"@site/docs/designer/modules/designer.mdx",sourceDirName:"designer/modules",slug:"/designer/modules/designer",permalink:"/tango/docs/designer/modules/designer",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/designer/modules/designer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"designer",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/tango/docs/designer/quick-start"},next:{title:"DesignerPanel \u8bbe\u8ba1\u5668\u5e03\u5c40\u5bb9\u5668",permalink:"/tango/docs/designer/modules/designer-panel"}},c={},d=[{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",level:2},{value:"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316",id:"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316",level:2},{value:"engine",id:"engine",level:2},{value:"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f",id:"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u5185\u7f6e\u7684 workspace \u5b9e",id:"\u4f7f\u7528\u5185\u7f6e\u7684-workspace-\u5b9e",level:3},{value:"\u81ea\u5b9a\u4e49 workspace \u7684\u521d\u59cb\u5316\u65b9\u5f0f",id:"\u81ea\u5b9a\u4e49-workspace-\u7684\u521d\u59cb\u5316\u65b9\u5f0f",level:3},{value:"sandboxQuery",id:"sandboxquery",level:2},{value:"remoteServices",id:"remoteservices",level:2}],u={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"designer-\u8bbe\u8ba1\u5668\u5bb9\u5668"},"Designer \u8bbe\u8ba1\u5668\u5bb9\u5668"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u5668\u6839\u8282\u70b9\uff0c\u6ce8\u5165\u5168\u5c40\u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027\u5217\u8868"},"\u5c5e\u6027\u5217\u8868"),(0,a.kt)(o.Z,{name:"DesignerProps",mdxType:"TypeTable"}),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316"},"\u8bbe\u8ba1\u5668\u521d\u59cb\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Designer\n  engine={engine}\n  sandboxQuery={sandboxQuery}\n  remoteServices={remoteServices}></Designer>\n")),(0,a.kt)("h2",{id:"engine"},"engine"),(0,a.kt)("p",null,"\u8bbe\u8ba1\u5668\u5f15\u64ce\u5b9e\u4f8b\uff0c\u7528\u4e8e\u7ba1\u7406\u8bbe\u8ba1\u5668\u7684\u6838\u5fc3\u72b6\u6001\u3002"),(0,a.kt)("h3",{id:"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f"},"\u57fa\u672c\u7684\u521d\u59cb\u5316\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const engine = createEngine({\n  entry: '/src/index.js',\n  files: sampleFiles,\n  componentPrototypes: prototypes as any,\n});\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5185\u7f6e\u7684-workspace-\u5b9e"},"\u4f7f\u7528\u5185\u7f6e\u7684 workspace \u5b9e"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u53ea\u9002\u7528\u4e8e\u914d\u5408 LegacySandbox \u4f7f\u7528\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f15\u64ce\u521d\u59cb\u5316\nconst engine = createEngine({\n  entry: '/src/index.js',\n  // files: sampleFilesForLegacy,\n  componentPrototypes: prototypes as any,\n  useBuiltinWorkspace: true,\n});\n")),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49-workspace-\u7684\u521d\u59cb\u5316\u65b9\u5f0f"},"\u81ea\u5b9a\u4e49 workspace \u7684\u521d\u59cb\u5316\u65b9\u5f0f"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f15\u64ce\u91c7\u7528\u7684\u662f\u6e90\u7801\u89e3\u6790\u6a21\u5f0f\uff0c\u5373\u5c06\u6e90\u7801\u89e3\u6790\u4e3a ast \u6811\uff0c\u540e\u7eed\u7684\u642d\u5efa\u903b\u8f91\u8f6c\u4e3a\u5bf9 ast \u6811\u7684\u64cd\u4f5c\u3002\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49\u642d\u5efa\u903b\u8f91\uff0c\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 workspace \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u5f15\u64ce\u5728 2.0 \u672c\u672c\u4e2d\u63d0\u4f9b\u4e86\u65b0\u7684 JsonWorkspace \u6765\u652f\u6301\u81ea\u5b9a\u4e49\u642d\u5efa\u903b\u8f91\uff0cJsonWorkspace \u91c7\u7528\u7684\u662f json \u683c\u5f0f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49 json \u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u642d\u5efa\u903b\u8f91\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const engine = createEngine({\n  workspace: new JsonWorkspace({\n    prototypes: prototypes as any,\n    files: schemaFiles,\n  }),\n});\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6309\u7167\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684 Workspace \u5b9e\u73b0\u3002\u5177\u4f53\u53ef\u4ee5\u53c2\u8003 Workspace \u7684\u5b9e\u73b0\u6807\u51c6\u3002")),(0,a.kt)("h2",{id:"sandboxquery"},"sandboxQuery"),(0,a.kt)("p",null,"\u6c99\u7bb1\u7684\u67e5\u8be2\u5b9e\u4f8b\uff0c\u7528\u4e8e\u5411\u6c99\u7bb1\u6ce8\u518c dom \u67e5\u8be2\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"remoteservices"},"remoteServices"),(0,a.kt)("p",null,"\u8fdc\u7a0b\u670d\u52a1\u5b9e\u4f8b\uff0c\u7528\u4e8e\u6ce8\u518c\u5168\u5c40\u5171\u4eab\u7684\u6570\u636e\u670d\u52a1\u5b9e\u4f8b\u3002"))}m.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(y,i(i({ref:n},d),{},{components:t})):r.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);