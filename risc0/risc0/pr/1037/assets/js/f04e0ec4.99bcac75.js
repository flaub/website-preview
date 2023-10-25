"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7252],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4239:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={id:"benchmarks"},i="Performance Benchmarks",c={unversionedId:"zkvm/benchmarks",id:"version-0.18/zkvm/benchmarks",title:"Performance Benchmarks",description:"Pregenerated benchmarks",source:"@site/versioned_docs/version-0.18/zkvm/benchmarks.md",sourceDirName:"zkvm",slug:"/zkvm/benchmarks",permalink:"/website-preview/risc0/risc0/pr/1037/zkvm/benchmarks",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/zkvm/benchmarks.md",tags:[],version:"0.18",frontMatter:{id:"benchmarks"},sidebar:"GettingStartedSidebar",previous:{title:"Cryptography Acceleration",permalink:"/website-preview/risc0/risc0/pr/1037/zkvm/developer-guide/acceleration"},next:{title:"Proof System Overview",permalink:"/website-preview/risc0/risc0/pr/1037/proof-system/"}},s={},l=[{value:"Pregenerated benchmarks",id:"pregenerated-benchmarks",level:2},{value:"Generating your own benchmarks",id:"generating-your-own-benchmarks",level:2}],p={toc:l},m="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance-benchmarks"},"Performance Benchmarks"),(0,a.kt)("h2",{id:"pregenerated-benchmarks"},"Pregenerated benchmarks"),(0,a.kt)("p",null,"We have ",(0,a.kt)("a",{parentName:"p",href:"https://dev.risczero.com/datasheet.pdf"},"a performance datasheet")," with runtime and memory performance information.\nThis information is organized by both program size and hardware target, and includes both CPU and GPU targets.\nThe datasheet also includes the RISC Zero zkVM version used and the size of several example programs to give context for the ",(0,a.kt)("a",{parentName:"p",href:"../terminology#clock-cycles"},"cycle count")," size data."),(0,a.kt)("h2",{id:"generating-your-own-benchmarks"},"Generating your own benchmarks"),(0,a.kt)("p",null,"You can generate benchmarks yourself to get performance data for your exact system, or if you want benchmarks for a different RISC Zero zkVM version than used in the datasheet."),(0,a.kt)("p",null,"To generate benchmarks, first ",(0,a.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/zkvm/install"},"install Rust and the RISC Zero toolchain")," and clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/risc0/risc0"},"risc0 repository")," if you haven't already done so.\nNavigate to the risc0 source code directory and, if necessary, check out the branch or tag you wish to generate benchmarks for.\nThen run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run -r --example loop\n")),(0,a.kt)("p",null,"This will produce the benchmark data shown in the ",(0,a.kt)("a",{parentName:"p",href:"https://dev.risczero.com/datasheet.pdf"},"datasheet")," for your system (using the CPU) on the checked out version of the RISC Zero zkVM."),(0,a.kt)("p",null,"If you want to benchmark a GPU, you will need to build with the ",(0,a.kt)("inlineCode",{parentName:"p"},"cuda")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"metal")," feature enabled (whichever is appropriate for your hardware).\nTo do this, use the following commands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Metal"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo run -r -F metal --example loop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CUDA"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"cargo run -r -F cuda --example loop"))),(0,a.kt)("p",null,"We also have a Fibonacci computation benchmark, which you can run with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo bench --bench fib\n")),(0,a.kt)("p",null,"This will compute the 100th, 1000th, and 10000th Fibonacci numbers modulo 2^64 (ten times for each).\nIt will report both time and throughput (how many numbers were added per second) with separate statisics for ",(0,a.kt)("a",{parentName:"p",href:"../terminology#execute"},"execution")," and ",(0,a.kt)("a",{parentName:"p",href:"../terminology#prover"},"proving"),".\nAs with the loop benchmark, the Fibonacci benchmark will use the CPU by default, and you can benchmark a CUDA or Metal GPU by setting the appropriate feature flag."))}u.isMDXComponent=!0}}]);