"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,h=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="Examples",s={unversionedId:"zkvm/examples",id:"zkvm/examples",title:"Examples",description:"- [Hello World]: a recommended place to start. Prove a number is composite, and you know its factors without revealing them",source:"@site/docs/zkvm/examples.md",sourceDirName:"zkvm",slug:"/zkvm/examples",permalink:"/website-preview/risc0/risc0/pr/1067/next/zkvm/examples",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/zkvm/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Performance Benchmarks",permalink:"/website-preview/risc0/risc0/pr/1067/next/zkvm/benchmarks"},next:{title:"Proof System Overview",permalink:"/website-preview/risc0/risc0/pr/1067/next/proof-system/"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/main/examples/hello-world"},"Hello World")),": a recommended place to start. Prove a number is composite, and you know its factors without revealing them"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/main/examples/json"},"JSON")),": prove the contents of some entry in a JSON file, while keeping the rest of the data private"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/main/examples/waldo"},"Where's Waldo")),": prove that Waldo appears in a JPG file, while keeping the rest of the image private, additionally, there is ",(0,a.kt)("a",{parentName:"li",href:"https://risczero.com/news/waldo"},"Where's Waldo blog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/main/examples/chess"},"ZK Checkmate")),": prove that you see a mate-in-one, without revealing the winning move"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://risczero.com/news/zkpoex"},"ZK Proof of Exploit")),": prove that you ",(0,a.kt)("em",{parentName:"li"},"could")," exploit an Ethereum account, without revealing the exploit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/main/examples/ecdsa"},"ECDSA signature verification")),": prove the validity of an ECDSA signature"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/risc0/risc0/tree/main/examples/zkevm-demo"},"zkEVM")),": demo of running EVM engine on the Risc Zero zkVM")))}u.isMDXComponent=!0}}]);