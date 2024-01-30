"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1334],{8585:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var i=t(5893),s=t(1151);const n={},o="Host Code 101",c={id:"zkvm/developer-guide/host-code-101",title:"Host Code 101",description:"In a [zkVM application], the [host] is the machine that is running the zkVM.",source:"@site/api_versioned_docs/version-0.18/zkvm/developer-guide/host-code-101.md",sourceDirName:"zkvm/developer-guide",slug:"/zkvm/developer-guide/host-code-101",permalink:"/website-preview/risc0/risc0/pr/1395/api/0.18/zkvm/developer-guide/host-code-101",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/developer-guide/host-code-101.md",tags:[],version:"0.18",frontMatter:{},sidebar:"docs",previous:{title:"Guest Code 101",permalink:"/website-preview/risc0/risc0/pr/1395/api/0.18/zkvm/developer-guide/guest-code-101"},next:{title:"Receipts 101",permalink:"/website-preview/risc0/risc0/pr/1395/api/0.18/zkvm/developer-guide/receipts"}},l={},h=[{value:"The Executor &amp; the Prover",id:"the-executor--the-prover",level:2},{value:"A Very Simple Host",id:"a-very-simple-host",level:2},{value:"Verifying Receipts",id:"verifying-receipts",level:2},{value:"Happy Building!",id:"happy-building",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"host-code-101",children:"Host Code 101"}),"\n",(0,i.jsxs)(r.p,{children:["In a ",(0,i.jsx)(r.a,{href:"../",children:"zkVM application"}),", the ",(0,i.jsx)(r.a,{href:"/terminology#host",children:"host"})," is the machine that is running the zkVM.\nThe host is an untrusted agent that sets up the zkVM environment and handles inputs/outputs during execution."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Note:"})," ",(0,i.jsxs)(r.em,{children:["If you're building for ",(0,i.jsx)(r.a,{href:"../../bonsai/",children:"Bonsai"}),", you don't need to write host code."]})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["This page serves as an introduction to writing RISC Zero host code, to help you get started building applications for the ",(0,i.jsx)(r.a,{href:"../",children:"zkVM"}),"."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["For a simple example, check out the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/examples/hello-world",children:"Hello World demo"}),", where the ",(0,i.jsx)(r.a,{href:"/terminology#guest",children:"guest"})," receives two inputs from the ",(0,i.jsx)(r.a,{href:"/terminology#host",children:"host"})," and commits their product to the ",(0,i.jsx)(r.a,{href:"/terminology#journal",children:"journal"}),". For a slightly more complex example, see the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/blob/release-0.18/examples/json/src/main.rs",children:"JSON demo"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["For a step-by-step tutorial for writing your own host code, check out our ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/blob/release-0.18/examples/hello-world/tutorial.md",children:"Hello World Tutorial"}),"."]}),"\n",(0,i.jsxs)(r.li,{children:["All of the host functionality is described in the ",(0,i.jsxs)(r.a,{href:"https://docs.rs/risc0-zkvm",children:[(0,i.jsx)(r.code,{children:"risc0-zkvm"})," Rust crate"]}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"the-executor--the-prover",children:"The Executor & the Prover"}),"\n",(0,i.jsxs)(r.p,{children:["In a zkVM application, the host is responsible for constructing and running the ",(0,i.jsx)(r.a,{href:"/terminology#executor",children:"Executor"})," and the ",(0,i.jsx)(r.a,{href:"/terminology#prover",children:"Prover"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"From Guest Code to Receipt",src:t(8318).Z+"",width:"1778",height:"892"})}),"\n",(0,i.jsx)(r.p,{children:"In more detail, the host will:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Construct an ",(0,i.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/latest/risc0_zkvm/struct.ExecutorEnv.html",children:"execution environment"})," where it will run the ",(0,i.jsx)(r.a,{href:"/terminology#executor",children:"Executor"})," for a ",(0,i.jsx)(r.a,{href:"/terminology#guest-program",children:"guest program"}),".","\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["This environment is where the host will provide settings and communicate with the ",(0,i.jsx)(r.a,{href:"/terminology#guest",children:"guest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["Run the ",(0,i.jsx)(r.a,{href:"/terminology#prover",children:"Prover"})," to ",(0,i.jsx)(r.a,{href:"/terminology#execute",children:"execute"})," and ",(0,i.jsx)(r.a,{href:"/terminology#prove",children:"prove"})," the ",(0,i.jsx)(r.a,{href:"/terminology#guest-program",children:"guest program"})," and generate a ",(0,i.jsx)(r.a,{href:"/terminology#receipt",children:"receipt"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.a,{href:"/terminology#receipt",children:"receipt"})," can now be passed to a third-party for verification."]}),"\n",(0,i.jsx)(r.h2,{id:"a-very-simple-host",children:"A Very Simple Host"}),"\n",(0,i.jsxs)(r.p,{children:["The code shown below is the ",(0,i.jsx)(r.code,{children:"main()"})," function for a very simple host program.\nAside from the absence of any I/O during execution, the host performs exactly the actions described above."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-rust",children:"use risc0_zkvm::{default_prover, ExecutorEnv};\n\nlet env = ExecutorEnv::builder().build().unwrap();\nlet prover = default_prover();\nlet receipt = prover.prove_elf(env, METHOD_NAME_ELF).unwrap();\n"})}),"\n",(0,i.jsxs)(r.p,{children:["To see more complex examples, check out our ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/examples/",children:"examples"})," folder on GitHub."]}),"\n",(0,i.jsx)(r.h2,{id:"verifying-receipts",children:"Verifying Receipts"}),"\n",(0,i.jsxs)(r.p,{children:["The functionality for ",(0,i.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.18.0/risc0_zkvm/struct.Receipt.html#method.verify",children:"verifying receipts"})," is also included in the ",(0,i.jsxs)(r.a,{href:"https://docs.rs/risc0-zkvm",children:[(0,i.jsx)(r.code,{children:"risc0-zkvm"})," Rust crate"]}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The standard workflow is for one party to generate a receipt and pass it to another party for verification, along these lines:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-rust",children:"receipt.verify(METHOD_NAME_ID).unwrap();\n"})}),"\n",(0,i.jsxs)(r.p,{children:["For more information on passing and verifying receipts, check out our page on ",(0,i.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/0.18/zkvm/developer-guide/receipts",children:"Receipts"}),".\nFor practical demos, check out the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/examples/",children:"examples"})," on GitHub."]}),"\n",(0,i.jsx)(r.h2,{id:"happy-building",children:"Happy Building!"}),"\n",(0,i.jsxs)(r.p,{children:["Hopefully, this guide and the ",(0,i.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/0.18/zkvm/quickstart",children:"zkVM Quick Start"})," page will be sufficient for you to build your first ",(0,i.jsx)(r.a,{href:"../",children:"zkVM application"}),"!"]}),"\n",(0,i.jsxs)(r.p,{children:["If you run into problems, don't be a stranger!\nYou can file an issue on ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/website",children:"these docs"})," or the ",(0,i.jsx)(r.a,{href:"https://github.com/risc0/risc0/tree/release-0.18/examples/",children:"examples"}),", and we're happy to answer questions on ",(0,i.jsx)(r.a,{href:"https://discord.gg/risczero",children:"Discord"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8318:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"},1151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>o});var i=t(7294);const s={},n=i.createContext(s);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);