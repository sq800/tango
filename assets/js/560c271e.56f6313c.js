"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9255],{7427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7896),o=(t(2784),t(876));const a={},i="\u6784\u5efa\u914d\u7f6e",l={unversionedId:"boot/config",id:"boot/config",title:"\u6784\u5efa\u914d\u7f6e",description:"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Easy \u8fdb\u884c Tango \u524d\u7aef\u9879\u76ee\u7684\u79bb\u7ebf\u6784\u5efa\u3002",source:"@site/docs/boot/config.mdx",sourceDirName:"boot",slug:"/boot/config",permalink:"/tango/docs/boot/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/boot/config.mdx",tags:[],version:"current",frontMatter:{},sidebar:"boot",previous:{title:"appJson.json",permalink:"/tango/docs/boot/app-json"},next:{title:"\u5e94\u7528\u5165\u53e3",permalink:"/tango/docs/boot/app"}},p={},s=[{value:"\u5f00\u53d1\u8c03\u8bd5",id:"\u5f00\u53d1\u8c03\u8bd5",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:2},{value:"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e\uff08\u8001\uff09",id:"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e\u8001",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6784\u5efa\u914d\u7f6e"},"\u6784\u5efa\u914d\u7f6e"),(0,o.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 Easy \u8fdb\u884c Tango \u524d\u7aef\u9879\u76ee\u7684\u79bb\u7ebf\u6784\u5efa\u3002"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u8c03\u8bd5"},"\u5f00\u53d1\u8c03\u8bd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u811a\u672c\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "analyze": "cross-env ANALYZE=true webpack",\n    "build": "cross-env NODE_ENV=production ASSET_PATH=g/lc-online-test easy build",\n    "start": "easy dev"\n  }\n}\n')),(0,o.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"easy.config.js")," \u914d\u7f6e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { defineConfig } from '@music/easy-app-boot';\nimport usePlugin from '@music/easy-tango-plugin';\n\nexport default defineConfig({\n  plugins: [usePlugin()],\n});\n")),(0,o.kt)("p",null,"\u5bf9\u5e94\u7684\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@music/easy-app-boot": "0.1.12-rc.17",\n    "@music/easy-tango-plugin": "^1.x",\n    "@modern-js/plugin-less": "^1.3.0"\n  }\n}\n')),(0,o.kt)("h2",{id:"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e\u8001"},"\u5de5\u7a0b\u6784\u5efa\u914d\u7f6e\uff08\u8001\uff09"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"easy.config.js")," \u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  framework: ['@music/easy-tango-framework', {}],\n  output: {\n    path: 'public',\n  },\n};\n")),(0,o.kt)("p",null,"\u5bf9\u5e94\u7684\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@music/easy-app-boot": "^0.1.7",\n    "@music/easy-tango-framework": "^0.2.3"\n  }\n}\n')))}m.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);