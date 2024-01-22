"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3304],{5234:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=n(5893),t=n(1151);const s={id:"benchmarks"},i="Performance Benchmarks",o={id:"zkvm/benchmarks",title:"Performance Benchmarks",description:"Pregenerated benchmarks",source:"@site/api_versioned_docs/version-0.19/zkvm/benchmarks.md",sourceDirName:"zkvm",slug:"/zkvm/benchmarks",permalink:"/website-preview/risc0/risc0/pr/1361/api/zkvm/benchmarks",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/benchmarks.md",tags:[],version:"0.19",frontMatter:{id:"benchmarks"},sidebar:"docs",previous:{title:"zkVM Technical Specification",permalink:"/website-preview/risc0/risc0/pr/1361/api/zkvm/developer-guide/zkvm-specification"},next:{title:"Tutorials",permalink:"/website-preview/risc0/risc0/pr/1361/api/zkvm/tutorials/overview"}},c={},h=[{value:"Pregenerated benchmarks",id:"pregenerated-benchmarks",level:2},{value:"Generating your own benchmarks",id:"generating-your-own-benchmarks",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"performance-benchmarks",children:"Performance Benchmarks"}),"\n",(0,a.jsx)(r.h2,{id:"pregenerated-benchmarks",children:"Pregenerated benchmarks"}),"\n",(0,a.jsxs)(r.p,{children:["We have ",(0,a.jsx)(r.a,{href:"https://dev.risczero.com/datasheet.pdf",children:"a performance datasheet"})," with runtime and memory performance information.\nThis information is organized by both program size and hardware target, and includes both CPU and GPU targets.\nThe datasheet also includes the RISC Zero zkVM version used and the size of several example programs to give context for the ",(0,a.jsx)(r.a,{href:"/terminology#clock-cycles",children:"cycle count"})," size data."]}),"\n",(0,a.jsx)(r.h2,{id:"generating-your-own-benchmarks",children:"Generating your own benchmarks"}),"\n",(0,a.jsx)(r.p,{children:"You can generate benchmarks yourself to get performance data for your exact system, or if you want benchmarks for a different RISC Zero zkVM version than used in the datasheet."}),"\n",(0,a.jsxs)(r.p,{children:["To generate benchmarks, first ",(0,a.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1361/api/zkvm/install",children:"install Rust and the RISC Zero toolchain"})," and clone the ",(0,a.jsx)(r.a,{href:"https://github.com/risc0/risc0",children:"risc0 repository"})," if you haven't already done so.\nNavigate to the risc0 source code directory and, if necessary, check out the branch or tag you wish to generate benchmarks for.\nThen run"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cargo run --release --example loop\n"})}),"\n",(0,a.jsxs)(r.p,{children:["This will produce the benchmark data shown in the ",(0,a.jsx)(r.a,{href:"https://dev.risczero.com/datasheet.pdf",children:"datasheet"})," for your system (using the CPU) on the checked out version of the RISC Zero zkVM."]}),"\n",(0,a.jsxs)(r.p,{children:["If you want to benchmark a GPU, you will need to build with the ",(0,a.jsx)(r.code,{children:"cuda"})," or ",(0,a.jsx)(r.code,{children:"metal"})," feature enabled (whichever is appropriate for your hardware).\nTo do this, use the following commands:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.strong,{children:"Metal"})}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cargo run --release -F metal --example loop\n"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.strong,{children:"CUDA"})}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cargo run --release -F cuda --example loop\n"})}),"\n",(0,a.jsx)(r.p,{children:"We also have a Fibonacci computation benchmark, which you can run with"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"cargo bench --bench fib\n"})}),"\n",(0,a.jsxs)(r.p,{children:["This will compute the 100th, 1000th, and 10000th Fibonacci numbers modulo 2^64 (ten times for each).\nIt will report both time and throughput (how many numbers were added per second) with separate statistics for ",(0,a.jsx)(r.a,{href:"/terminology#execute",children:"execution"})," and ",(0,a.jsx)(r.a,{href:"/terminology#prover",children:"proving"}),".\nAs with the loop benchmark, the Fibonacci benchmark will use the CPU by default, and you can benchmark a CUDA or Metal GPU by setting the appropriate feature flag."]})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>i});var a=n(7294);const t={},s=a.createContext(t);function i(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);