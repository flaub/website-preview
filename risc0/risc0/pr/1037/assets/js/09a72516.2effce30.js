"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const a={},i="About Reed Solomon Codes",s={unversionedId:"reference-docs/about-rs-codes",id:"version-0.18/reference-docs/about-rs-codes",title:"About Reed Solomon Codes",description:"Reed Solomon codes (RS codes) are a family of error correcting codes based on polynomials over finite fields.",source:"@site/versioned_docs/version-0.18/reference-docs/about-rs-codes.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-rs-codes",permalink:"/website-preview/risc0/risc0/pr/1037/reference-docs/about-rs-codes",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/reference-docs/about-rs-codes.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"About RISC-V",permalink:"/website-preview/risc0/risc0/pr/1037/reference-docs/about-risc-v"},next:{title:"Contributor's Guide",permalink:"/website-preview/risc0/risc0/pr/1037/contributors-guide"}},c={},d=[{value:"Documentation",id:"documentation",level:2},{value:"Basic Function",id:"basic-function",level:2},{value:"Background",id:"background",level:2},{value:"Suggested Reading and Videos",id:"suggested-reading-and-videos",level:2}],l={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-reed-solomon-codes"},"About Reed Solomon Codes"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed Solomon codes")," (RS codes) are a family of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Error_correction_code"},"error correcting codes")," based on polynomials over ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/reference-docs/about-finite-fields"},"finite fields"),"."),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"Implementation and documentation for Reed-Solomon encoding is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"risc0-zkp-core")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0#rust-crates"},"Rust crate"),"."),(0,n.kt)("h2",{id:"basic-function"},"Basic Function"),(0,n.kt)("p",null,"A RISC Zero ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/struct.Receipt.html"},"receipt")," demonstrates the validity of the associated ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/proof-system/what_is_a_trace"},"execution trace")," by encoding the execution instructions and the trace data into polynomials and then making various assertions about those polynomials.\nWe refer to this process as ",(0,n.kt)("em",{parentName:"p"},"arithmetization of the trace"),", and RISC Zero's arithmetization is based on Reed Solomon encoding."),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Adding a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Parity_bit"},"parity bit")," to a binary string offers a form of error detection.\nError correcting codes extend this line of thinking: when sending data that may get corrupted, we can allow the recipient to detect and correct errors by adding some error correcting bits.\nReed-Solomon codes are an industry standard for error correction; they're used in many signal processing applications, including cell communication, QR codes, and ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/reference-docs/about-starks"},"STARKs"),"."),(0,n.kt)("p",null,"In the context of RISC Zero's receipts, the relevance of Reed-Solomon codes is quite a bit more nuanced than the standard error correction use cases.\nThe error amplification of Reed-Solomon encoding provides cryptographic soundness to RISC Zero's computational receipts.\nDuring the process of generating a receipt, any errors in the trace are ",(0,n.kt)("em",{parentName:"p"},"amplified")," by the process of arithmetization.\nThis error amplification means that even a single error in the execution trace can be easily identified."),(0,n.kt)("h2",{id:"suggested-reading-and-videos"},"Suggested Reading and Videos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1p0AZ3E4kLIDmFslW_c47YGb-EgeXc_YZ/view"},"Slides"),", ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/Yu9DHhdSqQo"},"recording"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1JtzBGxz1c-PDVIIRmWa85_A22NS9dlL-/view?usp=share_link"},"practice problems")," from RISC Zero Study Club"),(0,n.kt)("li",{parentName:"ul"},"3blue1brown has two videos that offer a great introduction to error correcting codes: ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=X8jsijhllIA"},"Part 1")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=b3NxrZOu_CE&t=0s"},"Part 2"),"."),(0,n.kt)("li",{parentName:"ul"},"Mary Wootters has a fantastic course on Algebraic Coding Theory. The ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLkvhuSoxwjI_UudECvFYArvG0cLbFlzSr"},"YouTube")," and the ",(0,n.kt)("a",{parentName:"li",href:"https://web.stanford.edu/class/cs250/"},"course website")," are both great resources.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yQkEnde2lNg&list=PLkvhuSoxwjI_UudECvFYArvG0cLbFlzSr&index=16"},"Reed-Solomon Lesson")))),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://epubs.siam.org/doi/10.1137/0108018"},"Reed-Solomon paper")," is quite clear and only a few pages long."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/654.pdf"},"Proximity Gaps for Reed-Solomon Codes")," paper is central to the soundness of the RISC Zero proof system.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See also ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=v0ZHUPzKotY"},"Dan Carmon's talk")," at the IEEE Symposium on the Foundations of Computer Science")))))}u.isMDXComponent=!0}}]);