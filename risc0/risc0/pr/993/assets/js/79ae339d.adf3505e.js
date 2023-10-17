"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4416],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="About PLONK and PLOOKUP",c={unversionedId:"reference-docs/about-plonk",id:"version-0.18/reference-docs/about-plonk",title:"About PLONK and PLOOKUP",description:"The PLONK paper introduced an efficient technique for enforcing the validity of memory operations in arguments of computational integrity.",source:"@site/versioned_docs/version-0.18/reference-docs/about-plonk.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-plonk",permalink:"/website-preview/risc0/risc0/pr/993/reference-docs/about-plonk",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/reference-docs/about-plonk.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"About the FRI Protocol",permalink:"/website-preview/risc0/risc0/pr/993/reference-docs/about-fri"},next:{title:"About STARKs",permalink:"/website-preview/risc0/risc0/pr/993/reference-docs/about-starks"}},s={},l=[{value:"Relevance in RISC Zero",id:"relevance-in-risc-zero",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Basic Function",id:"basic-function",level:2},{value:"Suggested Reading and Videos",id:"suggested-reading-and-videos",level:2},{value:"Less Technical",id:"less-technical",level:3},{value:"Moderately Technical",id:"moderately-technical",level:3},{value:"Very Technical",id:"very-technical",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-plonk-and-plookup"},"About PLONK and PLOOKUP"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2019/953"},"PLONK paper")," introduced an efficient technique for enforcing the validity of memory operations in arguments of computational integrity.\nBuilding on top of PLONK, the ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2020/315.pdf"},"PLOOKUP paper")," introduced a method of enforcing the validity of lookup operations."),(0,a.kt)("h2",{id:"relevance-in-risc-zero"},"Relevance in RISC Zero"),(0,a.kt)("p",null,"RISC Zero's zkVM makes use of both PLONK and PLOOKUP in the process of generating a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html"},"receipt"),".\nPLONK is used to generate constraints that authenticate ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=dYuEPvRLwLo&list=PLcPzhUaCxlCiLk_VjLUNbmfb2mB1Y_N9N&index=6"},"re-ordering of RISC-V memory data"),".\nPLOOKUP is used to generate constraints that enforce a bytes-based range-check."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: RISC Zero uses an AIR-based arithmetization and not a PLONK-based arithmetization.")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"Implementation and documentation for RISC Zero's use of PLONK and PLOOKUP are in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/blob/3d00debce414f96353b8295720be21029ca63347/risc0/zkvm/src/prove/plonk.rs"},"plonk.rs")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/blob/3d00debce414f96353b8295720be21029ca63347/risc0/zkp/src/prove/accum.rs"},"accum.rs"),"."),(0,a.kt)("h2",{id:"basic-function"},"Basic Function"),(0,a.kt)("p",null,"PLONK makes uses of ",(0,a.kt)("a",{parentName:"p",href:"https://hackmd.io/@arielg/ByFgSDA7D"},"accumulators")," in order to ensure that one list is a permutation of another.\nPLOOKUP uses PLONK to ensure that one list is contained in another list."),(0,a.kt)("h2",{id:"suggested-reading-and-videos"},"Suggested Reading and Videos"),(0,a.kt)("p",null,"For more on how these ideas fit into RISC Zero's system, we recommend our talk from zk Summit 7: ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=od033ugtlYQ&list=PLcPzhUaCxlCgCvzkkaBWzVuHdBRsTNxj1&index=7"},"Encoding Von-Neumann Architectures in Zero-Knowledge Proof Systems"),".\nFor general references, we recommend the following:"),(0,a.kt)("h3",{id:"less-technical"},"Less Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=n6_nicI4ckM&t=2629s"},"ZK Podcast episode")," with the authors of the PLONK paper"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2019/09/22/plonk.html"},"Vitalik's PLONK intro")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/0xtaetaehoho/status/1618979438913527814"},"@0xtaetaehoho's PLONK Skilltree"))),(0,a.kt)("h3",{id:"moderately-technical"},"Moderately Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NqrVcDuQ8hM"},"ZK Study Club on PLONK")),(0,a.kt)("li",{parentName:"ul"},"ZK Whiteboard sessions on ",(0,a.kt)("a",{parentName:"li",href:"https://zkhack.dev/whiteboard/module-five/"},"PLONK")," and on ",(0,a.kt)("a",{parentName:"li",href:"https://zkhack.dev/whiteboard/module-six/"},"lookup arguments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Vdlc1CmRYRY"},"PLOOKUP presentation at zkSummit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hackmd.io/@arielg/ByFgSDA7D"},"Ariel Gabizon explains grand product arguments"))),(0,a.kt)("h3",{id:"very-technical"},"Very Technical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/953"},"PLONK paper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/315.pdf"},"PLOOKUP paper"))))}d.isMDXComponent=!0}}]);