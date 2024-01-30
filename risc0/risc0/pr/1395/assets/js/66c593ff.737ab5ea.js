"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4324],{7300:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=i(5893),t=i(1151);const n={},o="Host Code 101",c={id:"zkvm/host-code-101",title:"Host Code 101",description:"In a zkVM application, the [host] is the machine that is running the",source:"@site/api_versioned_docs/version-0.20/zkvm/host-code-101.md",sourceDirName:"zkvm",slug:"/zkvm/host-code-101",permalink:"/website-preview/risc0/risc0/pr/1395/api/zkvm/host-code-101",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/host-code-101.md",tags:[],version:"0.20",frontMatter:{},sidebar:"api",previous:{title:"Guest Code 101",permalink:"/website-preview/risc0/risc0/pr/1395/api/zkvm/guest-code-101"},next:{title:"Receipts 101",permalink:"/website-preview/risc0/risc0/pr/1395/api/zkvm/receipts"}},h={},a=[{value:"The Executor &amp; the Prover",id:"the-executor--the-prover",level:2},{value:"A Very Simple Host",id:"a-very-simple-host",level:2},{value:"Verifying Receipts",id:"verifying-receipts",level:2},{value:"Happy Building!",id:"happy-building",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"host-code-101",children:"Host Code 101"}),"\n",(0,s.jsxs)(r.p,{children:["In a ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/",children:"zkVM application"}),", the ",(0,s.jsx)(r.a,{href:"/terminology#host",children:"host"})," is the machine that is running the\nzkVM. The host is an untrusted agent that sets up the zkVM environment and\nhandles inputs/outputs during execution."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note:"})," ",(0,s.jsxs)(r.em,{children:["If you're building for ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/bonsai/",children:"Bonsai"}),", you don't need to write host\ncode."]})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["This page serves as an introduction to writing RISC Zero host code, to help you\nget started building applications for the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/",children:"zkVM"}),"."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["For a step-by-step tutorial for writing your own host code, check out our\n",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/tutorials/hello-world",children:"Hello World Tutorial"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["All of the host functionality is described in the ",(0,s.jsxs)(r.a,{href:"https://docs.rs/risc0-zkvm",children:[(0,s.jsx)(r.code,{children:"risc0-zkvm"})," Rust\ncrate"]}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"the-executor--the-prover",children:"The Executor & the Prover"}),"\n",(0,s.jsxs)(r.p,{children:["In a zkVM application, the host is responsible for constructing and running the\n",(0,s.jsx)(r.a,{href:"/terminology#executor",children:"Executor"})," and the ",(0,s.jsx)(r.a,{href:"/terminology#prover",children:"Prover"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"/diagrams/from-rust-to-receipt.png",alt:"From Guest Code to Receipt"})}),"\n",(0,s.jsx)(r.p,{children:"In more detail, the host will:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Construct an ",(0,s.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.20/risc0_zkvm/struct.ExecutorEnv.html",children:"execution environment"})," where it will run the\n",(0,s.jsx)(r.a,{href:"/terminology#executor",children:"Executor"})," for a ",(0,s.jsx)(r.a,{href:"/terminology#guest-program",children:"guest program"}),".","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["This environment is where the host will provide settings and communicate\nwith the ",(0,s.jsx)(r.a,{href:"/terminology#guest",children:"guest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["Run the ",(0,s.jsx)(r.a,{href:"/terminology#prover",children:"Prover"})," to ",(0,s.jsx)(r.a,{href:"/terminology#execute",children:"execute"})," and ",(0,s.jsx)(r.a,{href:"/terminology#prove",children:"prove"})," the ",(0,s.jsx)(r.a,{href:"/terminology#guest-program",children:"guest program"})," and generate a\n",(0,s.jsx)(r.a,{href:"/terminology#receipt",children:"receipt"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/terminology#receipt",children:"receipt"})," can now be passed to a third-party for verification."]}),"\n",(0,s.jsx)(r.h2,{id:"a-very-simple-host",children:"A Very Simple Host"}),"\n",(0,s.jsxs)(r.p,{children:["The code shown below is the ",(0,s.jsx)(r.code,{children:"main()"})," function for a very simple host program.\nAside from the absence of any I/O during execution, the host performs exactly\nthe actions described above."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"use risc0_zkvm::{default_prover, ExecutorEnv};\n\nlet env = ExecutorEnv::builder().build().unwrap();\nlet prover = default_prover();\nlet receipt = prover.prove(env, METHOD_NAME_ELF).unwrap();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["To see more complex examples, check out the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/examples",children:"examples"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"verifying-receipts",children:"Verifying Receipts"}),"\n",(0,s.jsxs)(r.p,{children:["The functionality for ",(0,s.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.20/risc0_zkvm/struct.Receipt.html#method.verify",children:"verifying receipts"})," is also included in\nthe ",(0,s.jsxs)(r.a,{href:"https://docs.rs/risc0-zkvm",children:[(0,s.jsx)(r.code,{children:"risc0-zkvm"})," Rust crate"]}),"."]}),"\n",(0,s.jsx)(r.p,{children:"The standard workflow is for one party to generate a receipt and pass it to\nanother party for verification, along these lines:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-rust",children:"receipt.verify(METHOD_NAME_ID).unwrap();\n"})}),"\n",(0,s.jsxs)(r.p,{children:["For more information on passing and verifying receipts, check out our page on\n",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/receipts",children:"Receipts"}),". For practical demos, check out the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/examples",children:"examples"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"happy-building",children:"Happy Building!"}),"\n",(0,s.jsxs)(r.p,{children:["Hopefully, this guide and the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/quickstart",children:"zkVM Quick Start"})," page will be\nsufficient for you to build your first ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/",children:"zkVM application"}),"!"]}),"\n",(0,s.jsxs)(r.p,{children:["If you run into problems, don't be a stranger! You can file an issue on [these\ndocs] or the ",(0,s.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1395/api/zkvm/examples",children:"examples"}),", and we're happy to answer questions on ",(0,s.jsx)(r.a,{href:"https://discord.gg/risczero",children:"Discord"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>c,a:()=>o});var s=i(7294);const t={},n=s.createContext(t);function o(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);