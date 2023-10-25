"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var s=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=s.createContext({}),p=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,k=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return r?s.createElement(k,n(n({ref:t},l),{},{components:r})):s.createElement(k,n({ref:t},l))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,n[1]=o;for(var p=2;p<i;p++)n[p]=r[p];return s.createElement.apply(null,n)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,slug:"./"},n="Proof System Overview",o={unversionedId:"proof-system/proof-system",id:"version-0.18/proof-system/proof-system",title:"Proof System Overview",description:"When the RISC Zero [zkVM] executes, it produces a [Receipt] that serves as a proof of validity of a given [Session].",source:"@site/versioned_docs/version-0.18/proof-system/proof-system.md",sourceDirName:"proof-system",slug:"/proof-system/",permalink:"/website-preview/risc0/risc0/pr/1037/proof-system/",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/proof-system/proof-system.md",tags:[],version:"0.18",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"./"},sidebar:"GettingStartedSidebar",previous:{title:"Performance Benchmarks",permalink:"/website-preview/risc0/risc0/pr/1037/zkvm/benchmarks"},next:{title:"STARK by Hand",permalink:"/website-preview/risc0/risc0/pr/1037/proof-system/stark-by-hand"}},c={},p=[{value:"Learn More",id:"learn-more",level:2},{value:"About the zkVM",id:"about-the-zkvm",level:3},{value:"About STARKs",id:"about-starks",level:3},{value:"About RISC Zero",id:"about-risc-zero",level:3}],l={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,s.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proof-system-overview"},"Proof System Overview"),(0,a.kt)("p",null,"When the RISC Zero ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm"},"zkVM")," executes, it produces a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html"},"Receipt")," that serves as a proof of validity of a given ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Session.html"},"Session"),"."),(0,a.kt)("p",null,"To confirm that a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html"},"Receipt")," was honestly generated, use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html#method.verify"},"Receipt::verify")," and supply the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.SystemState.html"},"ImageID")," of the code that should have been executed as a parameter."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html"},"Receipt")," includes a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html#structfield.journal"},"journal"),", which contains the public outputs of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Session.html"},"Session"),".\nThe contents of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html#structfield.journal"},"journal")," are specified by calling ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/guest/env/fn.commit.html"},"env::commit()")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/guest/env/fn.commit_slice.html"},"env::commit_slice()")," in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/guest"},"guest")," code."),(0,a.kt)("p",null,"In addition to the journal, a receipt makes a number of claims about the program execution.\nThese claims are summarized in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.ReceiptMetadata.html"},"ReceiptMetadata"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html"},"Receipt")," can take two main forms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It can be represented by a collection of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.SegmentReceipts.html"},"SegmentReceipts"),", each of which proves a single ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Segment.html"},"Segment"),".\nCollectively, the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.SegmentReceipts.html"},"SegmentReceipts")," prove the validity of the full ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Session.html"},"Session"),"."),(0,a.kt)("li",{parentName:"ul"},"It can also be represented by a single ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/recursion/struct.SuccinctReceipt.html"},"SuccinctReceipt"),", proving the validity of the entire session.\nUsing recursive proving, any number of ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.SegmentReceipts.html"},"SegmentReceipts")," can be compressed into a single ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/recursion/struct.SuccinctReceipt.html"},"SuccinctReceipt"),".")),(0,a.kt)("p",null,"Cryptographically each ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.SegmentReceipt.html"},"SegmentReceipt")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/recursion/struct.SuccinctReceipt.html"},"SuccinctReceipt")," is a ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/reference-docs/about-starks"},"ZK-STARK"),".\nThe details of the RISC Zero ZK-STARK are described in our ",(0,a.kt)("a",{parentName:"p",href:"https://www.risczero.com/proof-system-in-detail.pdf"},"ZKP Whitepaper")," and in this ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/proof-system/proof-system-sequence-diagram"},"Sequence Diagram"),"."),(0,a.kt)("h2",{id:"learn-more"},"Learn More"),(0,a.kt)("h3",{id:"about-the-zkvm"},"About the zkVM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=8hwY88xJoyM&list=PLcPzhUaCxlCgig7ofeARMPwQ8vbuD6hC5&index=8"},"Video Explainer from zkHack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1037/zkvm/"},"Written Explainer"))),(0,a.kt)("h3",{id:"about-starks"},"About STARKs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1037/reference-docs/about-starks"},"STARKs reference doc")),(0,a.kt)("li",{parentName:"ul"},"STARK by Hand Tutorial",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1037/proof-system/stark-by-hand"},"Website version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1Onr41OozD62y-B0jIL7bHAH5kf771-o4xvmnHUFpOyo/edit?usp=sharing"},"Google Sheet version")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:r(6564).Z},"Printable Version"))))),(0,a.kt)("h3",{id:"about-risc-zero"},"About RISC Zero"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All our public talks and podcasts are available on our ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/@risczero"},"YouTube channel"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.risczero.com/studyclub"},"RISC Zero Study Club")," is intended to help make the technology underpinning RISC Zero more accessible. Past sessions include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=11DIflEwx50&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=5"},"What is RISC-V and how does it relate to RISC Zero?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=11DIflEwx50&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=2"},"Intro to Finite Fields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=11DIflEwx50&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=3"},"Intro to Reed-Solomon Codes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=11DIflEwx50&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=4"},"Intro to Number Theoretic Transforms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=11DIflEwx50&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=1"},"Intro to the FRI Protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=hUl8ZB6hpUM&list=PLcPzhUaCxlCjdhONxEYZ1dgKjZh3ZvPtl&index=6"},"Finite Field Implementation Options: Barrett & Montgomery Multiplication"))))))}u.isMDXComponent=!0},6564:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/files/fibonacci-stark-52bf8c792850625a5d1e706e635f52e7.pdf"}}]);