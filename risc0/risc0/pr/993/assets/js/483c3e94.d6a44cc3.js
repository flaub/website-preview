"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5838],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="About STARKs",s={unversionedId:"reference-docs/about-starks",id:"reference-docs/about-starks",title:"About STARKs",description:"The seal on a RISC Zero receipt is generated using a zk-STARK: a zero knowledge, scalable, transparent argument of knowledge.",source:"@site/docs/reference-docs/about-starks.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-starks",permalink:"/website-preview/risc0/risc0/pr/993/next/reference-docs/about-starks",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/reference-docs/about-starks.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"About PLONK and PLOOKUP",permalink:"/website-preview/risc0/risc0/pr/993/next/reference-docs/about-plonk"},next:{title:"About Number Theoretic Transforms",permalink:"/website-preview/risc0/risc0/pr/993/next/reference-docs/about-ntts-and-fourier"}},c={},l=[{value:"Documentation",id:"documentation",level:2},{value:"References",id:"references",level:2},{value:"Less Technical",id:"less-technical",level:3},{value:"More Technical",id:"more-technical",level:3},{value:"Most Technical",id:"most-technical",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-starks"},"About STARKs"),(0,a.kt)("p",null,"The seal on a RISC Zero receipt is generated using a ",(0,a.kt)("strong",{parentName:"p"},"zk-STARK"),": a ",(0,a.kt)("em",{parentName:"p"},"zero knowledge, scalable, transparent argument of knowledge.")),(0,a.kt)("p",null,"STARKs are a highly technical process - an innovation in the world of zero-knowledge cryptography introduced by Eli Ben-Sasson et. al in 2018.\nIn order to prove the integrity of a computation with a STARK, the prover arithmetizes the entire question.\nBy encoding the ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/993/next/proof-system/what_is_a_trace"},"execution trace")," into ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/993/next/reference-docs/about-finite-fields"},"polynomials"),", the statement of computational integrity is reduced to a statement about polynomial division."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"In the context of the RISC Zero zkVM, the term ",(0,a.kt)("strong",{parentName:"p"},"seal")," refers to the zk-STARK that attests to the integrity of the trace.\nThe following documentation describes the RISC Zero zk-STARK in more detail:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/993/next/proof-system/"},"Proof system sequence diagram")," ",(0,a.kt)("br",null)," This document includes a sequence diagram and step-by-step specification of the RISC Zero zk-STARK."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/993/next/proof-system/stark-by-hand"},"STARK by Hand")," ",(0,a.kt)("br",null)," This document shows a simplified, concrete example of the construction of a RISC Zero seal.")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,"We recommend the following external references on STARKs:"),(0,a.kt)("h3",{id:"less-technical"},"Less Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@eli_1210/extreme-integrity-in-decentralized-world-a56da4c730ea"},"Extreme Integrity in Decentralized World")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/starkware/the-cambrian-explosion-of-crypto-proofs-7ac080ac9aed"},"Cambrian Explosion of Crypto Proofs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://consensys.net/blog/blockchain-explained/zero-knowledge-proofs-starks-vs-snarks/"},"STARKs vs. SNARKS (Consensys, 2021)"))),(0,a.kt)("h3",{id:"more-technical"},"More Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aszepieniec.github.io/stark-anatomy/"},"Anatomy of a Stark")," (developer focused)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/tag/stark-math"},"The Starkmath series")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://starkware.co/stark-101/"},"STARK 101")," (developer focused)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2017/11/09/starks_part_1.html"},"Vitalik's STARK series"))),(0,a.kt)("h3",{id:"most-technical"},"Most Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2018/046.pdf"},"The STARK paper (Ben-Sasson et al, 2018)"))))}m.isMDXComponent=!0}}]);