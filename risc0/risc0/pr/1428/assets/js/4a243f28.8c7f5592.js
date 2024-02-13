"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9065],{9714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(5893),o=r(1151);const i={},s="zkVM Quick Start",a={id:"zkvm/quickstart",title:"zkVM Quick Start",description:"Welcome to the zkVM Quick Start page! Here are the steps to create your first proof:",source:"@site/api/zkvm/quickstart.md",sourceDirName:"zkvm",slug:"/zkvm/quickstart",permalink:"/website-preview/risc0/risc0/pr/1428/api/next/zkvm/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1428/api/next/zkvm/"},next:{title:"dev-mode",permalink:"/website-preview/risc0/risc0/pr/1428/api/next/zkvm/dev-mode"}},c={},l=[{value:"Concept break",id:"concept-break",level:2},{value:"1. Install the RISC Zero Toolchain",id:"1-install-the-risc-zero-toolchain",level:2},{value:"2. Create a New Project",id:"2-create-a-new-project",level:2},{value:"3. Project structure",id:"3-project-structure",level:2},{value:"4. Quick Development: Leveraging dev-mode",id:"4-quick-development-leveraging-dev-mode",level:2},{value:"5. Real Proof Generation",id:"5-real-proof-generation",level:2},{value:"Executor Statistics",id:"executor-statistics",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"zkvm-quick-start",children:"zkVM Quick Start"}),"\n",(0,n.jsx)(t.p,{children:"Welcome to the zkVM Quick Start page! Here are the steps to create your first proof:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Install the ",(0,n.jsx)(t.code,{children:"cargo-risczero"})," toolchain."]}),"\n",(0,n.jsxs)(t.li,{children:["Create a new project using the ",(0,n.jsx)(t.code,{children:"cargo-risczero"})," tool."]}),"\n",(0,n.jsx)(t.li,{children:"Familiarize yourself with the project's structure."}),"\n",(0,n.jsx)(t.li,{children:"Run your project in dev-mode."}),"\n",(0,n.jsx)(t.li,{children:"Run your project locally to generate a zk-proof."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"concept-break",children:"Concept break"}),"\n",(0,n.jsxs)(t.p,{children:["The zkVM provides a zero-knowledge proof of the correct execution of Rust-based\nprogram. The ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#host-program",children:"host"})})," is responsible for launching the zkVM (or a\n",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#prover",children:"prover"})}),"), and then the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#guest-program",children:"guest"})})," is the program that runs inside the\nzkVM. A proof of execution is a ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"})}),"; it contains a public part - a\n",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#journal",children:"journal"})})," and an encryption part - a ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#seal",children:"seal"})}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"1-install-the-risc-zero-toolchain",children:"1. Install the RISC Zero Toolchain"}),"\n",(0,n.jsxs)(t.p,{children:["First, make sure you ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:"install Rust"}),", then install the RISC Zero toolchain by\nrunning the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cargo install cargo-binstall\ncargo binstall cargo-risczero\ncargo risczero install\n"})}),"\n",(0,n.jsx)(t.h2,{id:"2-create-a-new-project",children:"2. Create a New Project"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"cargo-risczero"})," tool takes ",(0,n.jsx)(t.code,{children:"--guest-name"})," parameter, a ",(0,n.jsx)(t.a,{href:"/terminology#guest-program",children:"guest"})," program that\nthe zkVM runs, to generate a proof of its execution:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cargo risczero new my_project --guest-name guest_code_for_zk_proof\n"})}),"\n",(0,n.jsxs)(t.p,{children:["There is a list of options in the ",(0,n.jsx)(t.a,{href:"https://github.com/risc0/risc0#feature-flags",children:"feature flags"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"3-project-structure",children:"3. Project structure"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1428/api/next/zkvm/tutorials/hello-world",children:"Hello World tutorial"})," contains step-by-step instructions on\nhow to:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"tutorials/hello-world#step-2-host-share-private-data-as-input-with-the-guest",children:"Share private data"})," between the host & guest."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"tutorials/hello-world#step-3-guest-read-input-and-commit-output",children:"Share the guest's results"})," with the host publicly."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"tutorials/hello-world#step-4-host-generate-a-receipt-and-read-its-journal-contents",children:"Generate a receipt"})," and read its journal contents."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"4-quick-development-leveraging-dev-mode",children:"4. Quick Development: Leveraging dev-mode"}),"\n",(0,n.jsxs)(t.p,{children:["During the development of your project, running your code can take a long time\ndue to the proof generation process. To address this issue and allow for faster\niterations of your code, we suggest utilizing ",(0,n.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1428/api/next/zkvm/dev-mode",children:"dev-mode"}),". This mode bypasses the\ntime-consuming proof generation process. To activate dev-mode, set the\nenvironment variable ",(0,n.jsx)(t.code,{children:"RISC0_DEV_MODE=1"})," when executing your project:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"RISC0_DEV_MODE=1 cargo run --release\n"})}),"\n",(0,n.jsx)(t.h2,{id:"5-real-proof-generation",children:"5. Real Proof Generation"}),"\n",(0,n.jsxs)(t.p,{children:["Once you've reached a point where you're ready to generate real proofs, you can\ndo so by setting ",(0,n.jsx)(t.code,{children:"RISC0_DEV_MODE=0"}),". Generating proofs locally would be achieved\nby running the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"RISC0_DEV_MODE=0 cargo run --release\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that since proofs are now being generated, the execution time will be\nsignificantly longer than when running in dev-mode. To create a proof with the\nzkVM on your own machine, we recommend at least 16\xa0GB of RAM. To avoid these\nhardware requirements, consider using ",(0,n.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1428/api/next/bonsai/quickstart",children:"Bonsai"})," to generate proofs remotely, as\nit will be significantly faster than running proofs locally. You can [request\naccess] to Bonsai to set additional flags."]}),"\n",(0,n.jsx)(t.h3,{id:"executor-statistics",children:"Executor Statistics"}),"\n",(0,n.jsxs)(t.p,{children:["To gain insights into your application's performance, you can obtain executor\nstatistics by setting the ",(0,n.jsx)(t.code,{children:"RUST_LOG"})," environment variable to\n",(0,n.jsx)(t.code,{children:'"[executor]=info"'}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Setting this filter will print statistics about the execution before proof\ngeneration, so you can understand how computationally expensive your application\nis. Since the statistics concern only the executor phase, it is recommended to\nrun your application in dev-mode to avoid the overhead of proof generation:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'RISC0_DEV_MODE=1 RUST_LOG="[executor]=info" cargo run --release\n'})}),"\n",(0,n.jsx)(t.p,{children:"The statistics include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Total Cycles"}),"\n",(0,n.jsx)(t.li,{children:"Session Cycle"}),"\n",(0,n.jsx)(t.li,{children:"Segments Count"}),"\n",(0,n.jsx)(t.li,{children:"Execution time"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Knowing these statistics is useful for estimating the cost of your application\nbefore submitting real workloads to Bonsai, as the cost of proof generation is\nproportional to the number of cycles and segments used."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Congratulations!"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"That's all it takes to build and run a minimal RISC Zero application."})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(7294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);