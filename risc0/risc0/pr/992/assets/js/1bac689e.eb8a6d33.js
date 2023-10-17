"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=i.createContext({}),l=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||n;return r?i.createElement(d,a(a({ref:t},c),{},{components:r})):i.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(7462),o=(r(7294),r(3905));const n={},a="Host Code 101",s={unversionedId:"zkvm/developer-guide/host-code-101",id:"version-0.18/zkvm/developer-guide/host-code-101",title:"Host Code 101",description:"In a [zkVM application], the [host] is the machine that is running the zkVM.",source:"@site/versioned_docs/version-0.18/zkvm/developer-guide/host-code-101.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/host-code-101",permalink:"/website-preview/risc0/risc0/pr/992/zkvm/developer-guide/host-code-101",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/developer-guide/host-code-101.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Guest Code 101",permalink:"/website-preview/risc0/risc0/pr/992/zkvm/developer-guide/guest-code-101"},next:{title:"Receipts 101",permalink:"/website-preview/risc0/risc0/pr/992/zkvm/developer-guide/receipts"}},p={},l=[{value:"The Executor &amp; the Prover",id:"the-executor--the-prover",level:2},{value:"A Very Simple Host",id:"a-very-simple-host",level:2},{value:"Verifying Receipts",id:"verifying-receipts",level:2},{value:"Happy Building!",id:"happy-building",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-code-101"},"Host Code 101"),(0,o.kt)("p",null,"In a ",(0,o.kt)("a",{parentName:"p",href:"../"},"zkVM application"),", the ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/terminology#host"},"host")," is the machine that is running the zkVM.\nThe host is an untrusted agent that sets up the zkVM environment and handles inputs/outputs during execution."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"If you're building for ",(0,o.kt)("a",{parentName:"em",href:"../../bonsai/"},"Bonsai"),", you don't need to write host code."))),(0,o.kt)("p",null,"This page serves as an introduction to writing RISC Zero host code, to help you get started building applications for the ",(0,o.kt)("a",{parentName:"p",href:"../"},"zkVM"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For a simple example, check out the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/hello-world"},"Hello World demo"),", where the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#guest"},"guest")," receives two inputs from the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#host"},"host")," and commits their product to the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#journal"},"journal"),". For a slightly more complex example, see the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/blob/main/examples/json/src/main.rs"},"JSON demo"),"."),(0,o.kt)("li",{parentName:"ul"},"For a step-by-step tutorial for writing your own host code, check out our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/blob/v0.18.0/examples/hello-world/tutorial.md"},"Hello World Tutorial"),"."),(0,o.kt)("li",{parentName:"ul"},"All of the host functionality is described in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm"},(0,o.kt)("inlineCode",{parentName:"a"},"risc0-zkvm")," Rust crate"),".")),(0,o.kt)("h2",{id:"the-executor--the-prover"},"The Executor & the Prover"),(0,o.kt)("p",null,"In a zkVM application, the host is responsible for constructing and running the ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/terminology#executor"},"Executor")," and the ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/terminology#prover"},"Prover"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"From Guest Code to Receipt",src:r(8318).Z,width:"1778",height:"892"})),(0,o.kt)("p",null,"In more detail, the host will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Construct an ",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/risc0-zkvm/latest/risc0_zkvm/struct.ExecutorEnv.html"},"execution environment")," where it will run the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#executor"},"Executor")," for a ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#guest-program"},"guest program"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This environment is where the host will provide settings and communicate with the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#guest"},"guest"),"."))),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#prover"},"Prover")," to ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#execute"},"execute")," and ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#prove"},"prove")," the ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#guest-program"},"guest program")," and generate a ",(0,o.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/terminology#receipt"},"receipt"),".")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/terminology#receipt"},"receipt")," can now be passed to a third-party for verification."),(0,o.kt)("h2",{id:"a-very-simple-host"},"A Very Simple Host"),(0,o.kt)("p",null,"The code shown below is the ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," function for a very simple host program.\nAside from the absence of any I/O during execution, the host performs exactly the actions described above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use risc0_zkvm::{default_prover, ExecutorEnv};\n\nlet env = ExecutorEnv::builder().build().unwrap();\nlet prover = default_prover();\nlet receipt = prover.prove_elf(env, METHOD_NAME_ELF).unwrap();\n")),(0,o.kt)("p",null,"To see more complex examples, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/"},"examples")," folder on GitHub."),(0,o.kt)("h2",{id:"verifying-receipts"},"Verifying Receipts"),(0,o.kt)("p",null,"The functionality for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/struct.Receipt.html#method.verify"},"verifying receipts")," is also included in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm"},(0,o.kt)("inlineCode",{parentName:"a"},"risc0-zkvm")," Rust crate"),"."),(0,o.kt)("p",null,"The standard workflow is for one party to generate a receipt and pass it to another party for verification, along these lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"receipt.verify(METHOD_NAME_ID).unwrap();\n")),(0,o.kt)("p",null,"For more information on passing and verifying receipts, check out our page on ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/zkvm/developer-guide/receipts"},"Receipts"),".\nFor practical demos, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/"},"examples")," on GitHub."),(0,o.kt)("h2",{id:"happy-building"},"Happy Building!"),(0,o.kt)("p",null,"Hopefully, this guide and the ",(0,o.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/zkvm/quickstart"},"zkVM Quick Start")," page will be sufficient for you to build your first ",(0,o.kt)("a",{parentName:"p",href:"../"},"zkVM application"),"!"),(0,o.kt)("p",null,"If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/risc0/website"},"these docs")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples/"},"examples"),", and we're happy to answer questions on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"Discord"),"."))}m.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"}}]);