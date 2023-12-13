"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4268],{7468:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var t=i(5893),n=i(1151);const s={sidebar_position:5,slug:"/terminology"},a="Key Terminology",o={id:"terminology",title:"Key Terminology",description:"Circuit",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/website-preview/risc0/risc0/pr/1228/terminology",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/terminology"}},c={},h=[{value:"Circuit",id:"circuit",level:3},{value:"Clock cycles",id:"clock-cycles",level:3},{value:"Commit",id:"commit",level:3},{value:"Continuations",id:"continuations",level:3},{value:"ELF Binary",id:"elf-binary",level:3},{value:"Execute",id:"execute",level:3},{value:"Executor",id:"executor",level:3},{value:"Execution Trace",id:"execution-trace",level:3},{value:"Guest",id:"guest",level:3},{value:"Guest Program",id:"guest-program",level:3},{value:"Host",id:"host",level:3},{value:"Host program",id:"host-program",level:3},{value:"Image ID",id:"image-id",level:3},{value:"Journal",id:"journal",level:3},{value:"Method",id:"method",level:3},{value:"Prove",id:"prove",level:3},{value:"Prover",id:"prover",level:3},{value:"Receipt",id:"receipt",level:3},{value:"RISC-V",id:"risc-v",level:3},{value:"Seal",id:"seal",level:3},{value:"Segment",id:"segment",level:3},{value:"Session",id:"session",level:3},{value:"STARK",id:"stark",level:3},{value:"Validity Proof",id:"validity-proof",level:3},{value:"Verifier",id:"verifier",level:3},{value:"Verify",id:"verify",level:3},{value:"Zero-Knowledge Virtual Machine (zkVM)",id:"zero-knowledge-virtual-machine-zkvm",level:3}];function l(e){const r={a:"a",h1:"h1",h3:"h3",p:"p",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"key-terminology",children:"Key Terminology"}),"\n",(0,t.jsx)(r.h3,{id:"circuit",children:"Circuit"}),"\n",(0,t.jsxs)(r.p,{children:['A mathematical construct that acts as the "CPU" of the ',(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," in a manner that enables creating ",(0,t.jsx)(r.a,{href:"#validity-proof",children:"proofs"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"/reference-docs/about-arithmetic-circuits",children:"Arithmetic Circuits"})]}),"\n",(0,t.jsx)(r.h3,{id:"clock-cycles",children:"Clock cycles"}),"\n",(0,t.jsxs)(r.p,{children:["The smallest unit of compute in the zkVM ",(0,t.jsx)(r.a,{href:"#circuit",children:"circuit"}),", analogous to a clock cycle on a physical CPU.\nThe complexity of a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),"'s ",(0,t.jsx)(r.a,{href:"#execute",children:"execution"})," is measured in clock cycles as they directly affect the memory, proof size, and time performance of the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Generally, a single cycle corresponds to a single ",(0,t.jsx)(r.a,{href:"#risc-v",children:"RISC-V"})," operation. However, some operations require two cycles."]}),"\n",(0,t.jsx)(r.h3,{id:"commit",children:"Commit"}),"\n",(0,t.jsxs)(r.p,{children:["Append data to the ",(0,t.jsx)(r.a,{href:"#journal",children:"journal"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.commit.html",children:"env::commit()"})]}),"\n",(0,t.jsx)(r.h3,{id:"continuations",children:"Continuations"}),"\n",(0,t.jsxs)(r.p,{children:["As of our 0.15 release, the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," uses continuations to enable proof generation for very large programs without blowing up memory requirements.\nLarge proof generation is made possible by splitting the execution trace for a single ",(0,t.jsx)(r.a,{href:"#session",children:"session"})," into a number of ",(0,t.jsx)(r.a,{href:"#segment",children:"segments"}),", and proving those segments independently. ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=v4HIwaqmIxk&list=PLcPzhUaCxlCirUkJY0ltpjdtzWcz5U_6y&index=1",children:"Continuations study club"}),", ",(0,t.jsx)(r.a,{href:"https://www.risczero.com/news/continuations",children:"Continuations blog"})]}),"\n",(0,t.jsx)(r.h3,{id:"elf-binary",children:"ELF Binary"}),"\n",(0,t.jsxs)(r.p,{children:["The executable format for the ",(0,t.jsx)(r.a,{href:"#risc-v",children:"RISC-V"})," instruction set.\nEach ",(0,t.jsx)(r.a,{href:"#method",children:"method"})," in a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"})," is written in Rust and compiled into an ELF binary before execution begins. Then, the ELF binary is ",(0,t.jsx)(r.a,{href:"#executor",children:"executed"})," and ",(0,t.jsx)(r.a,{href:"#prover",children:"proven"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"execute",children:"Execute"}),"\n",(0,t.jsxs)(r.p,{children:["Run a ",(0,t.jsx)(r.a,{href:"#method",children:"method"})," inside the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," and produce an ",(0,t.jsx)(r.a,{href:"#execution-trace",children:"execution trace"})," which can be used by the ",(0,t.jsx)(r.a,{href:"#prover",children:"prover"})," to create a ",(0,t.jsx)(r.a,{href:"#validity-proof",children:"proof"})," of correct execution."]}),"\n",(0,t.jsx)(r.h3,{id:"executor",children:"Executor"}),"\n",(0,t.jsxs)(r.p,{children:["The portion of the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," responsible for generating the ",(0,t.jsx)(r.a,{href:"#execution-trace",children:"execution trace"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Executor.html",children:"Executor documentation"}),", ",(0,t.jsx)(r.a,{href:"#prover",children:"Prover"})]}),"\n",(0,t.jsx)(r.h3,{id:"execution-trace",children:"Execution Trace"}),"\n",(0,t.jsxs)(r.p,{children:["A complete record of a computation.\nThe execution trace is organized as a rectangular array, where each row describes a complete snapshot of the state of the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," at a given moment in time.\nThe width of the execution trace relates to the number of registers/components in the machine, and the length of the execution trace relates to the number of ",(0,t.jsx)(r.a,{href:"#clock-cycles",children:"clock cycles"})," of the program's execution."]}),"\n",(0,t.jsxs)(r.p,{children:["The execution trace is generated by the ",(0,t.jsx)(r.a,{href:"#executor",children:"executor"})," and checked for validity by the ",(0,t.jsx)(r.a,{href:"#prover",children:"prover"}),".\nA valid trace means that the ",(0,t.jsx)(r.a,{href:"#elf-binary",children:"ELF binary"})," was faithfully executed according to the rules of the ",(0,t.jsx)(r.a,{href:"#risc-v",children:"RISC-V"})," instruction set architecture."]}),"\n",(0,t.jsx)(r.h3,{id:"guest",children:"Guest"}),"\n",(0,t.jsxs)(r.p,{children:["The system running inside the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest",children:"Rust crate for zkVM guest"})]}),"\n",(0,t.jsx)(r.h3,{id:"guest-program",children:"Guest Program"}),"\n",(0,t.jsxs)(r.p,{children:["The portion of a ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," application that gets proven.\nThe guest program receives inputs from an (untrusted) ",(0,t.jsx)(r.a,{href:"#host",children:"host"}),".\nDepending on the application, the guest program can ",(0,t.jsx)(r.a,{href:"#commit",children:"commit"})," results to the ",(0,t.jsx)(r.a,{href:"#journal",children:"journal"})," and/or send them to the host. ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest",children:"Rust crate for zkVM guest"})]}),"\n",(0,t.jsx)(r.h3,{id:"host",children:"Host"}),"\n",(0,t.jsxs)(r.p,{children:["The system the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," runs on."]}),"\n",(0,t.jsx)(r.h3,{id:"host-program",children:"Host program"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"#host",children:"host"}),"-native, untrusted portion of a ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," application.\nThe host program loads the ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"})," and provides inputs to the guest program as necessary."]}),"\n",(0,t.jsx)(r.h3,{id:"image-id",children:"Image ID"}),"\n",(0,t.jsxs)(r.p,{children:["A small cryptographic identifier that indicates the ",(0,t.jsx)(r.a,{href:"#method",children:"method"})," or boot image for zkVM ",(0,t.jsx)(r.a,{href:"#execute",children:"execution"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.SystemState.html",children:"ImageID documentation"}),", ",(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=QwzrBHHkzFE&list=PLcPzhUaCxlCirUkJY0ltpjdtzWcz5U_6y&index=4",children:"ImageID excerpt from Study Club"}),", ",(0,t.jsx)(r.a,{href:"#segment",children:"segment"})]}),"\n",(0,t.jsx)(r.h3,{id:"journal",children:"Journal"}),"\n",(0,t.jsxs)(r.p,{children:["The portion of the ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"})," that contains the public outputs of a ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," application. ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"#commit",children:"commit"})]}),"\n",(0,t.jsx)(r.h3,{id:"method",children:"Method"}),"\n",(0,t.jsxs)(r.p,{children:["A single 'main' entry point for code that runs inside the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"prove",children:"Prove"}),"\n",(0,t.jsxs)(r.p,{children:["Generate a ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"})," that serves as ",(0,t.jsx)(r.a,{href:"#validity-proof",children:"proof"})," of correct execution of a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"prover",children:"Prover"}),"\n",(0,t.jsxs)(r.p,{children:["The portion of the ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," that ",(0,t.jsx)(r.a,{href:"#execute",children:"executes"})," and ",(0,t.jsx)(r.a,{href:"#prove",children:"proves"})," a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),", thereby constructing a ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/trait.Prover.html",children:"Prover documentation"}),", ",(0,t.jsx)(r.a,{href:"#executor",children:"Executor"})]}),"\n",(0,t.jsx)(r.h3,{id:"receipt",children:"Receipt"}),"\n",(0,t.jsxs)(r.p,{children:["A receipt attests to valid ",(0,t.jsx)(r.a,{href:"#execute",children:"execution"})," of a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),". ",(0,t.jsx)(r.a,{href:"#verify",children:"Verifying"})," the receipt provides cryptographic assurance that the ",(0,t.jsx)(r.a,{href:"#journal",children:"journal"})," was indeed constructed using the expected ",(0,t.jsx)(r.a,{href:"#circuit",children:"circuit"})," and the expected ",(0,t.jsx)(r.a,{href:"#image-id",children:"imageID"}),".\nThe receipt consists of a ",(0,t.jsx)(r.a,{href:"#journal",children:"journal"})," and a ",(0,t.jsx)(r.a,{href:"#seal",children:"seal"}),".\nThe journal attests to the public outputs of the program, and\nthe seal is the opaque blob that cryptographically attests to the validity of the receipt."]}),"\n",(0,t.jsx)(r.h3,{id:"risc-v",children:"RISC-V"}),"\n",(0,t.jsxs)(r.p,{children:["The 5th edition of UC Berkeley's reduced instruction set computer architecture.\nRISC Zero uses RISC-V, specifically the ",(0,t.jsx)(r.a,{href:"https://riscv.org/wp-content/uploads/2019/12/riscv-spec-20191213.pdf",children:"rv32im instruction set"}),", as the basis for the RISC Zero zkVM."]}),"\n",(0,t.jsx)(r.h3,{id:"seal",children:"Seal"}),"\n",(0,t.jsxs)(r.p,{children:["The portion of the ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"})," that cryptographically attests to the correct execution of the ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),". Concretely, the seal is a ",(0,t.jsx)(r.a,{href:"#stark",children:"zk-STARK"})," and is generated by the ",(0,t.jsx)(r.a,{href:"#prover",children:"prover"}),". ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"#validity-proof",children:"Validity Proof"})]}),"\n",(0,t.jsx)(r.h3,{id:"segment",children:"Segment"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"#execution-trace",children:"execution trace"})," of a portion of a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),".\nThe execution of a segment begins at some initial memory image (identified by the ",(0,t.jsx)(r.a,{href:"#image-id",children:"ImageID"}),") and proceeds until terminated by the system or user.\nThis represents a chunk of execution work that will be proven in a single call to the ZKP system. ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"#session",children:"Session"})]}),"\n",(0,t.jsx)(r.h3,{id:"session",children:"Session"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"#execution-trace",children:"execution trace"})," of a ",(0,t.jsx)(r.a,{href:"#guest-program",children:"guest program"}),".\nThe session's execution starts from an initial memory image (which includes the starting program counter) and proceeds until either a sys_halt or a sys_pause syscall is encountered.\nThis record is stored as a vector of ",(0,t.jsx)(r.a,{href:"#segment",children:"Segments"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"stark",children:"STARK"}),"\n",(0,t.jsxs)(r.p,{children:["A STARK (scalable, transparent argument of knowledge) serves as proof of validity for a ",(0,t.jsx)(r.a,{href:"#zero-knowledge-virtual-machine-zkvm",children:"zkVM"})," program. ",(0,t.jsx)("br",{}),"\nSee also: ",(0,t.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1228/reference-docs/about-starks",children:"About STARKs"}),", ",(0,t.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1228/proof-system/proof-system-sequence-diagram",children:"Sequence Diagram for RISC Zero's STARK"}),", ",(0,t.jsx)(r.a,{href:"https://risczero.com/proof-system-in-detail.pdf",children:"RISC Zero's ZKP Whitepaper"})]}),"\n",(0,t.jsx)(r.h3,{id:"validity-proof",children:"Validity Proof"}),"\n",(0,t.jsxs)(r.p,{children:["A validity proof is a cryptographic argument that attests to the validity of an ",(0,t.jsx)(r.a,{href:"#execution-trace",children:"execution trace"}),".\nThe ",(0,t.jsx)(r.a,{href:"#seal",children:"seal"})," on the ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"})," serves as a validity proof for the RISC-V instruction set."]}),"\n",(0,t.jsx)(r.h3,{id:"verifier",children:"Verifier"}),"\n",(0,t.jsxs)(r.p,{children:["A program on the ",(0,t.jsx)(r.a,{href:"#host",children:"host"})," that ",(0,t.jsx)(r.a,{href:"#verify",children:"verifies"})," a ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"verify",children:"Verify"}),"\n",(0,t.jsxs)(r.p,{children:["Check that the ",(0,t.jsx)(r.a,{href:"#receipt",children:"receipt"})," is valid.\nVerifying ",(0,t.jsx)(r.a,{href:"#segment",children:"segment"})," receipts requires checking that the ",(0,t.jsx)(r.a,{href:"#seal",children:"seal"})," is valid and was generated by the expected ",(0,t.jsx)(r.a,{href:"#image-id",children:"ImageID"}),".\nVerifying ",(0,t.jsx)(r.a,{href:"#session",children:"session"})," receipts requires checking the validity of each ",(0,t.jsx)(r.a,{href:"#segment",children:"segment"})," and checking that the initial/final memory snapshots for each segment align appropriately."]}),"\n",(0,t.jsx)(r.h3,{id:"zero-knowledge-virtual-machine-zkvm",children:"Zero-Knowledge Virtual Machine (zkVM)"}),"\n",(0,t.jsxs)(r.p,{children:["A virtual machine that runs trusted code and generates proofs.\nRISC Zero's zkVM implements the RISC-V instruction set architecture and uses a ",(0,t.jsx)(r.a,{href:"#stark",children:"STARK"}),"-based proof system."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>a});var t=i(7294);const n={},s=t.createContext(n);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);