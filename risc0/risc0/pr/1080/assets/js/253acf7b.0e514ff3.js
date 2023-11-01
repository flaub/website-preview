"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return r?i.createElement(d,p(p({ref:t},l),{},{components:r})):i.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<a;c++)p[c]=r[c];return i.createElement.apply(null,p)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const a={},p="Receipts 101",o={unversionedId:"zkvm/developer-guide/receipts",id:"zkvm/developer-guide/receipts",title:"Receipts 101",description:"A brief introduction to the RISC Zero [receipt].",source:"@site/docs/zkvm/developer-guide/receipts.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/receipts",permalink:"/website-preview/risc0/risc0/pr/1080/next/zkvm/developer-guide/receipts",draft:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/docs/zkvm/developer-guide/receipts.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Host Code 101",permalink:"/website-preview/risc0/risc0/pr/1080/next/zkvm/developer-guide/host-code-101"},next:{title:"Guest Optimization Guide",permalink:"/website-preview/risc0/risc0/pr/1080/next/zkvm/developer-guide/optimization"}},s={},c=[{value:"What is a receipt?",id:"what-is-a-receipt",level:2},{value:"How are receipts used?",id:"how-are-receipts-used",level:2},{value:"Extracting the Journal",id:"extracting-the-journal",level:2},{value:"Verifying a Receipt",id:"verifying-a-receipt",level:2},{value:"Serializing and Deserializing Receipts",id:"serializing-and-deserializing-receipts",level:2},{value:"Happy Building!",id:"happy-building",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"receipts-101"},"Receipts 101"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A brief introduction to the RISC Zero ",(0,n.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#receipt"},"receipt"),".")),(0,n.kt)("h2",{id:"what-is-a-receipt"},"What is a receipt?"),(0,n.kt)("p",null,"A receipt gives the results of your program along with proof that they were produced honestly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"From Guest Code to Receipt",src:r(8318).Z,width:"1778",height:"892"})),(0,n.kt)("p",null,"When you execute your ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/zkvm/"},"zkVM application"),", the output of your application is included in a ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#receipt"},"receipt"),".\nThe ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#receipt"},"receipt")," serves as a succinct ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#proof"},"validity proof")," for the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#execution-trace"},"execution")," of your application.\nReceipts can be passed to third parties and ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#verify"},"verified")," in order to cryptographically attest to the validity of your application's output."),(0,n.kt)("p",null,"The receipt consists of a ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#journal"},"journal")," and a ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#seal"},"seal"),".\nThe journal attests to the public outputs of the program, and\nthe seal is the opaque blob that cryptographically attests to the validity of the receipt."),(0,n.kt)("h2",{id:"how-are-receipts-used"},"How are receipts used?"),(0,n.kt)("p",null,"Suppose Alice and Bob have agreed on some computation that needs to get done.\nIn particular, they've agreed on some zkVM ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#guest-program"},"guest program"),", and they each have access to the source code and the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#image-id"},"Image ID")," for that guest program.\n(In practice, Bob may retrieve the Image ID either by constructing it himself or retrieving it from a trusted channel.)"),(0,n.kt)("p",null,"Alice runs the zkVM to generate a receipt, and then Alice sends the receipt to Bob.\nAfter receiving the receipt, Bob can:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"inspect the receipt to extract the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#journal"},"journal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#verify"},"verify")," the receipt to ensure that:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#execution-trace"},"execution")," was valid, and"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#guest-program"},"guest program")," that executed was consistent with the expected ",(0,n.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#image-id"},"image ID"),".")))),(0,n.kt)("h2",{id:"extracting-the-journal"},"Extracting the Journal"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#journal"},"journal")," contains the public outputs of the computation.\nUsers can extract the journal from a receipt using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#structfield.journal"},"receipt.journal"),"."),(0,n.kt)("h2",{id:"verifying-a-receipt"},"Verifying a Receipt"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#verify"},"Verifying")," the receipt provides cryptographic assurance that the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#journal"},"journal")," was created honestly using the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#guest-program"},"guest program")," with the expected ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/terminology#image-id"},"Image ID"),".\nUsers can verify the receipt using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#method.verify"},"receipt.verify()"),"."),(0,n.kt)("h2",{id:"serializing-and-deserializing-receipts"},"Serializing and Deserializing Receipts"),(0,n.kt)("p",null,"For serializing and deserializing, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/serde"},"serde")," which supports many encoding formats.\nThere isn't a one-size-fits-all solution here, but one option is:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"let bytes = bincode::serialize(&receipt);")),(0,n.kt)("h2",{id:"happy-building"},"Happy Building!"),(0,n.kt)("p",null,"Hopefully, these guides and the ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/zkvm/quickstart"},"zkVM Quick Start")," page will be sufficient for you to build your first ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1080/next/zkvm/"},"zkVM application"),"!"),(0,n.kt)("p",null,"If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/website"},"these docs")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"examples"),", and we're happy to answer questions on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"Discord"),"."))}m.isMDXComponent=!0},8318:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"}}]);