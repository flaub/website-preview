"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4607],{7471:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=r(5893),n=r(1151);const o={},t="REST API",a={id:"bonsai/rest-api",title:"REST API",description:"In its current form, Bonsai is available as REST API which parallelizes proving for individual proofs across a number of GPU workers to maximize performance.",source:"@site/api_versioned_docs/version-0.19/bonsai/rest-api.md",sourceDirName:"bonsai",slug:"/bonsai/rest-api",permalink:"/website-preview/risc0/risc0/pr/1361/api/bonsai/rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/rest-api.md",tags:[],version:"0.19",frontMatter:{},sidebar:"docs",previous:{title:"Ethereum Examples",permalink:"/website-preview/risc0/risc0/pr/1361/api/bonsai/eth-examples"},next:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1361/api/zkvm/"}},c={},l=[{value:"Key Features",id:"key-features",level:2},{value:"STARK To SNARK",id:"stark-to-snark",level:3},{value:"API Limits",id:"api-limits",level:2},{value:"Checking your limits",id:"checking-your-limits",level:3},{value:"Understanding cycle counts",id:"understanding-cycle-counts",level:3}];function u(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"rest-api",children:"REST API"}),"\n",(0,s.jsx)(i.p,{children:"In its current form, Bonsai is available as REST API which parallelizes proving for individual proofs across a number of GPU workers to maximize performance."}),"\n",(0,s.jsxs)(i.p,{children:["To request an API key, complete the application form at ",(0,s.jsx)(i.a,{href:"https://bonsai.xyz/apply",children:"bonsai.xyz/apply"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsx)(i.h3,{id:"stark-to-snark",children:"STARK To SNARK"}),"\n",(0,s.jsxs)(i.p,{children:["While STARK proofs, like the ones that are generated by the zkVM, offer a number of advantages over SNARKs, they're notoriosly big and computationally intensive to verify on-chain. Bonsai offers the best of both worlds by wrapping zkVM STARKs in circom Groth16 SNARKs for easy and gas-efficient on-chain verification. Check out how do this with the ",(0,s.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/release-0.19/bonsai/sdk#stark-to-snark",children:"Bonsai Rust SDK"})," or directly ",(0,s.jsx)(i.a,{href:"https://api.bonsai.xyz/swagger-ui/#/snark/route_snark_create",children:"via the API"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"api-limits",children:"API Limits"}),"\n",(0,s.jsxs)(i.p,{children:["Bonsai enforces a number of API limits. These limits are configurable on a per API key basis. If your limits are too low to support your use case or you run out cycles, email us at ",(0,s.jsx)(i.a,{href:"mailto:devrel@risczero.com",children:"devrel@risczero.com"})," to request more."]}),"\n",(0,s.jsx)(i.p,{children:"These limits are:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Concurrent proofs"}),": The max number of proofs you can generate simultaneously."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Cycle budget"}),": The max number of ",(0,s.jsx)(i.a,{href:"/terminology#clock-cycles",children:"cycles"})," you can prove on Bonsai."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Cycle usage"}),": The historical count of cycles used by your API key."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Executor cycle limit"}),": The max number of cycles your API key can prove for an individual proof."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Max parallelism"}),": The maximum number of workers an individual proof can be parallelized across (this limit is currently inactive)."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"checking-your-limits",children:"Checking your limits"}),"\n",(0,s.jsxs)(i.p,{children:["You can request your individual limits using the ",(0,s.jsx)(i.a,{href:"https://api.bonsai.xyz/swagger-ui/#/user/route_user_quota",children:"user/quotas"})," API route."]}),"\n",(0,s.jsx)(i.h3,{id:"understanding-cycle-counts",children:"Understanding cycle counts"}),"\n",(0,s.jsxs)(i.p,{children:["You can log the cycle count and other performance info for your zkVM Guest program by following the instructions ",(0,s.jsx)(i.a,{href:"/api/zkvm/quickstart#executor-statistics",children:"here"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>a,a:()=>t});var s=r(7294);const n={},o=s.createContext(n);function t(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);