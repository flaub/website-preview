"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3883],{5391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(5893),o=r(1151);const i={},s="Building zkVM Hello World",a={id:"zkvm/tutorials/hello-world",title:"Building zkVM Hello World",description:"This tutorial will walk you through building your first zkVM application.",source:"@site/api/zkvm/tutorials/hello-world.md",sourceDirName:"zkvm/tutorials",slug:"/zkvm/tutorials/hello-world",permalink:"/website-preview/risc0/risc0/pr/1101/api/next/zkvm/tutorials/hello-world",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/tutorials/hello-world.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Tutorials",permalink:"/website-preview/risc0/risc0/pr/1101/api/next/zkvm/tutorials/overview"},next:{title:"Examples",permalink:"/website-preview/risc0/risc0/pr/1101/api/next/zkvm/examples"}},l={},c=[{value:"Step 1: Create a new project",id:"step-1-create-a-new-project",level:2},{value:"Step 2 (Host): Share private data as input with the guest",id:"step-2-host-share-private-data-as-input-with-the-guest",level:2},{value:"Step 3 (Guest): Read input and commit output",id:"step-3-guest-read-input-and-commit-output",level:2},{value:"Step 4 (Host): Generate a receipt and read its journal contents",id:"step-4-host-generate-a-receipt-and-read-its-journal-contents",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"building-zkvm-hello-world",children:"Building zkVM Hello World"}),"\n",(0,n.jsx)(t.p,{children:"This tutorial will walk you through building your first zkVM application.\nBy following the steps in this guide, you will learn how:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["to use the ",(0,n.jsx)(t.a,{href:"https://docs.rs/cargo-risczero",children:"cargo risczero"})," tool to create a new project"]}),"\n",(0,n.jsx)(t.li,{children:"to send private data to the guest program"}),"\n",(0,n.jsx)(t.li,{children:"the zkVM executes and generates a proof of a guest program"}),"\n",(0,n.jsx)(t.li,{children:"the guest writes public output"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-create-a-new-project",children:"Step 1: Create a new project"}),"\n",(0,n.jsxs)(t.p,{children:["Firstly, visit the ",(0,n.jsx)(t.a,{href:"../install",children:"installation"})," page for how to install all the necessary software.\nSecondly, using the ",(0,n.jsx)(t.code,{children:"cargo-risczero"})," tool create a ",(0,n.jsx)(t.code,{children:"hello-world"})," project from the command line. The ",(0,n.jsx)(t.code,{children:"cargo-risczero"})," tool allows for a ",(0,n.jsx)(t.code,{children:"--guest-name"})," parameter, a guest program you want to run on zkVM to generate a proof of its execution:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"## Create a project from our starter template\ncargo risczero new hello-world --guest-name hello_guest\ncd hello-world\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In the project folder, ",(0,n.jsx)(t.code,{children:"hello-world"}),", build and run the project using ",(0,n.jsx)(t.code,{children:"cargo run --release"}),".\nUse this command any time you'd like to check your progress."]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-host-share-private-data-as-input-with-the-guest",children:"Step 2 (Host): Share private data as input with the guest"}),"\n",(0,n.jsxs)(t.p,{children:["zkVM or a ",(0,n.jsx)(t.a,{href:"/terminology#prover",children:"prover"})," runs on the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/terminology#host-program",children:"host"})}),". The host code is in ",(0,n.jsx)(t.code,{children:"hello-world/host/src/main.rs"}),".\nThe host creates an executor environment ",(0,n.jsx)(t.code,{children:"ExecutorEnv"})," before constructing a prover.\nThe host makes the value ",(0,n.jsx)(t.code,{children:"input"})," available to the guest before execution. It does it by adding ",(0,n.jsx)(t.code,{children:"input"})," to the executor environment, which is responsible for managing guest-readable memory. When the prover executes the program, it can access input:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"use risc0_zkvm::{default_prover, ExecutorEnv};\n\nfn main() {\n    let input: u32 = 7;\n    let env = ExecutorEnv::builder().write(&input).unwrap().build().unwrap();\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-guest-read-input-and-commit-output",children:"Step 3 (Guest): Read input and commit output"}),"\n",(0,n.jsxs)(t.p,{children:["Now, let's look at the guest code located in ",(0,n.jsx)(t.code,{children:"methods/guest/src/main.rs"}),".\nThis is the portion of the code that will be proven.\nIn the code snippet below, the guest reads the ",(0,n.jsx)(t.code,{children:"input"})," value from the host and then commits it to the ",(0,n.jsx)(t.a,{href:"/terminology#journal",children:"journal"})," portion of the ",(0,n.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:"use risc0_zkvm::guest::env;\n\npub fn main() {\n    // read the input\n    let input: u32 = env::read();\n\n    // do something with the input\n    // write public output to the journal\n    env::commit(&input);\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"env::commit"})," function commits public results to the ",(0,n.jsx)(t.a,{href:"/terminology#journal",children:"journal"}),". Once committed to the journal, anyone with the ",(0,n.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"})," can read this value."]}),"\n",(0,n.jsx)(t.p,{children:"Notice, by committing any private information to the journal, we make this private data public. We want to avoid committing sensitive data to public journal."}),"\n",(0,n.jsx)(t.h2,{id:"step-4-host-generate-a-receipt-and-read-its-journal-contents",children:"Step 4 (Host): Generate a receipt and read its journal contents"}),"\n",(0,n.jsxs)(t.p,{children:["Let's look at how the host generates a receipt and extracts the ",(0,n.jsx)(t.a,{href:"/terminology#journal",children:"journal"}),"'s contents.\nWe get a receipt, extract a journal from the receipt, and verify it.\nIn a real-world scenario, we'd want to hand the ",(0,n.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"})," to someone else for verification, and the ",(0,n.jsx)(t.code,{children:"prove"})," function does internal verification of the receipt.\nAfter we extract journal from the receipt, let's print ",(0,n.jsx)(t.code,{children:"Hello world"})," with the public output by adding this line to the host: ",(0,n.jsx)(t.code,{children:'println!("Hello, world! I generated a proof of guest execution! {} is a public output from journal", _output);'})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",metastring:"ignore",children:'use methods::{HELLO_GUEST_ELF, HELLO_GUEST_ID};\nuse risc0_zkvm::{default_prover, ExecutorEnv};\n\nfn main() {\n    let input: u32 = 15 * u32::pow(2, 27) + 1;\n    let env = ExecutorEnv::builder().write(&input).unwrap().build().unwrap();\n    // Obtain the default prover.\n    let prover = default_prover();\n    // Produce a receipt by proving the specified ELF binary.\n    let receipt = prover.prove_elf(env, HELLO_GUEST_ELF).unwrap();\n\n    // Extract journal of receipt\n    let _output: u32 = receipt.journal.decode().unwrap();\n\n    // Print, notice, after committing to a journal, the private input became public\n    println!("Hello, world! I generated a proof of guest execution! {} is a public output from journal ", _output);\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["You should now be able to see your proof with ",(0,n.jsx)(t.code,{children:"cargo run --release"}),'.\nIf your program printed the "Hello, world!" assertion and ',(0,n.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"})," verification was a success, congratulations!\nIf not, we hope that troubleshooting will get you familiar with the system, and we'd love to chat with you on ",(0,n.jsx)(t.a,{href:"https://discord.gg/risczero",children:"Discord"}),".\nOr, if you believe you've found a bug or other problem in our code, please open an ",(0,n.jsx)(t.a,{href:"https://github.com/risc0/risc0/issues",children:"issue"})," describing the problem."]}),"\n",(0,n.jsxs)(t.p,{children:["If you're ready to start building more complex projects, we recommend taking a look at the other examples in our ",(0,n.jsx)(t.a,{href:"https://github.com/risc0/risc0/tree/main/examples",children:"examples directory"})," for more project ideas that use zero-knowledge proofs."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(7294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);