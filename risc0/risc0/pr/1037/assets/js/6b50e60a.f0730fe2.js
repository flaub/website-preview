"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4268],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,k=m["".concat(s,".").concat(u)]||m[u]||h[u]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5,slug:"/terminology",displayed_sidebar:"GettingStartedSidebar"},i="Key Terminology",p={unversionedId:"terminology",id:"terminology",title:"Key Terminology",description:"Circuit",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/website-preview/risc0/risc0/pr/1037/next/terminology",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/terminology.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/terminology",displayed_sidebar:"GettingStartedSidebar"},sidebar:"GettingStartedSidebar"},s={},l=[{value:"Circuit",id:"circuit",level:3},{value:"Clock cycles",id:"clock-cycles",level:3},{value:"Commit",id:"commit",level:3},{value:"Continuations",id:"continuations",level:3},{value:"ELF Binary",id:"elf-binary",level:3},{value:"Execute",id:"execute",level:3},{value:"Executor",id:"executor",level:3},{value:"Execution Trace",id:"execution-trace",level:3},{value:"Guest",id:"guest",level:3},{value:"Guest Program",id:"guest-program",level:3},{value:"Host",id:"host",level:3},{value:"Host program",id:"host-program",level:3},{value:"Image ID",id:"image-id",level:3},{value:"Journal",id:"journal",level:3},{value:"Method",id:"method",level:3},{value:"Prove",id:"prove",level:3},{value:"Prover",id:"prover",level:3},{value:"Receipt",id:"receipt",level:3},{value:"RISC-V",id:"risc-v",level:3},{value:"Seal",id:"seal",level:3},{value:"Segment",id:"segment",level:3},{value:"Session",id:"session",level:3},{value:"STARK",id:"stark",level:3},{value:"Validity Proof",id:"validity-proof",level:3},{value:"Verifier",id:"verifier",level:3},{value:"Verify",id:"verify",level:3},{value:"Zero-Knowledge Virtual Machine (zkVM)",id:"zero-knowledge-virtual-machine-zkvm",level:3}],c={toc:l},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"key-terminology"},"Key Terminology"),(0,n.kt)("h3",{id:"circuit"},"Circuit"),(0,n.kt)("p",null,'A mathematical construct that acts as the "CPU" of the ',(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," in a manner that enables creating ",(0,n.kt)("a",{parentName:"p",href:"#validity-proof"},"proofs"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/next/reference-docs/about-arithmetic-circuits"},"Arithmetic Circuits")),(0,n.kt)("h3",{id:"clock-cycles"},"Clock cycles"),(0,n.kt)("p",null,"The smallest unit of compute in the zkVM ",(0,n.kt)("a",{parentName:"p",href:"#circuit"},"circuit"),", analogous to a clock cycle on a physical CPU. The complexity of a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),"'s ",(0,n.kt)("a",{parentName:"p",href:"#execute"},"execution")," is measured in clock cycles as they directly affect the memory, proof size, and time performance of the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM"),"."),(0,n.kt)("p",null,"Generally, a single cycle corresponds to a single ",(0,n.kt)("a",{parentName:"p",href:"#risc-v"},"RISC-V")," operation. However, some operations require two cycles."),(0,n.kt)("h3",{id:"commit"},"Commit"),(0,n.kt)("p",null,"Append data to the ",(0,n.kt)("a",{parentName:"p",href:"#journal"},"journal"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.commit.html"},"env::commit()")),(0,n.kt)("h3",{id:"continuations"},"Continuations"),(0,n.kt)("p",null,"As of our 0.15 release, the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," uses continuations to enable proof generation for very large programs without blowing up memory requirements.\nLarge proof generation is made possible by splitting the execution trace for a single ",(0,n.kt)("a",{parentName:"p",href:"#session"},"session")," into a number of ",(0,n.kt)("a",{parentName:"p",href:"#segment"},"segments"),", and proving those segments independently. ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=v4HIwaqmIxk&list=PLcPzhUaCxlCirUkJY0ltpjdtzWcz5U_6y&index=1"},"Continuations study club"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.risczero.com/news/continuations"},"Continuations blog")),(0,n.kt)("h3",{id:"elf-binary"},"ELF Binary"),(0,n.kt)("p",null,"The executable format for the ",(0,n.kt)("a",{parentName:"p",href:"#risc-v"},"RISC-V")," instruction set.\nEach ",(0,n.kt)("a",{parentName:"p",href:"#method"},"method")," in a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program")," is written in Rust and compiled into an ELF binary before execution begins. Then, the ELF binary is ",(0,n.kt)("a",{parentName:"p",href:"#executor"},"executed")," and ",(0,n.kt)("a",{parentName:"p",href:"#prover"},"proven"),"."),(0,n.kt)("h3",{id:"execute"},"Execute"),(0,n.kt)("p",null,"Run a ",(0,n.kt)("a",{parentName:"p",href:"#method"},"method")," inside the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," and produce an ",(0,n.kt)("a",{parentName:"p",href:"#execution-trace"},"execution trace")," which can be used by the ",(0,n.kt)("a",{parentName:"p",href:"#prover"},"prover")," to create a ",(0,n.kt)("a",{parentName:"p",href:"#validity-proof"},"proof")," of correct execution."),(0,n.kt)("h3",{id:"executor"},"Executor"),(0,n.kt)("p",null,"The portion of the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," responsible for generating the ",(0,n.kt)("a",{parentName:"p",href:"#execution-trace"},"execution trace"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Executor.html"},"Executor documentation"),", ",(0,n.kt)("a",{parentName:"p",href:"#prover"},"Prover")),(0,n.kt)("h3",{id:"execution-trace"},"Execution Trace"),(0,n.kt)("p",null,"A complete record of a computation.\nThe execution trace is organized as a rectangular array, where each row describes a complete snapshot of the state of the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," at a given moment in time.\nThe width of the execution trace relates to the number of registers/components in the machine, and the length of the execution trace relates to the number of ",(0,n.kt)("a",{parentName:"p",href:"#clock-cycles"},"clock cycles")," of the program's execution."),(0,n.kt)("p",null,"The execution trace is generated by the ",(0,n.kt)("a",{parentName:"p",href:"#executor"},"executor")," and checked for validity by the ",(0,n.kt)("a",{parentName:"p",href:"#prover"},"prover"),".\nA valid trace means that the ",(0,n.kt)("a",{parentName:"p",href:"#elf-binary"},"ELF binary")," was faithfully executed according to the rules of the ",(0,n.kt)("a",{parentName:"p",href:"#risc-v"},"RISC-V")," instruction set architecture."),(0,n.kt)("h3",{id:"guest"},"Guest"),(0,n.kt)("p",null,"The system running inside the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest"},"Rust crate for zkVM guest")),(0,n.kt)("h3",{id:"guest-program"},"Guest Program"),(0,n.kt)("p",null,"The portion of a ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," application that gets proven.\nThe guest program receives inputs from an (untrusted) ",(0,n.kt)("a",{parentName:"p",href:"#host"},"host"),".\nDepending on the application, the guest program can ",(0,n.kt)("a",{parentName:"p",href:"#commit"},"commit")," results to the ",(0,n.kt)("a",{parentName:"p",href:"#journal"},"journal")," and/or send them to the host. ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest"},"Rust crate for zkVM guest")),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("p",null,"The system the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," runs on."),(0,n.kt)("h3",{id:"host-program"},"Host program"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#host"},"host"),"-native, untrusted portion of a ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," application.\nThe host program loads the ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program")," and provides inputs to the guest program as necessary."),(0,n.kt)("h3",{id:"image-id"},"Image ID"),(0,n.kt)("p",null,"A small cryptographic identifier that indicates the ",(0,n.kt)("a",{parentName:"p",href:"#method"},"method")," or boot image for zkVM ",(0,n.kt)("a",{parentName:"p",href:"#execute"},"execution"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.SystemState.html"},"ImageID documentation"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QwzrBHHkzFE&list=PLcPzhUaCxlCirUkJY0ltpjdtzWcz5U_6y&index=4"},"ImageID excerpt from Study Club"),", ",(0,n.kt)("a",{parentName:"p",href:"#segment"},"segment")),(0,n.kt)("h3",{id:"journal"},"Journal"),(0,n.kt)("p",null,"The portion of the ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt")," that contains the public outputs of a ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," application. ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"#commit"},"commit")),(0,n.kt)("h3",{id:"method"},"Method"),(0,n.kt)("p",null,"A single 'main' entry point for code that runs inside the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM"),"."),(0,n.kt)("h3",{id:"prove"},"Prove"),(0,n.kt)("p",null,"Generate a ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt")," that serves as ",(0,n.kt)("a",{parentName:"p",href:"#validity-proof"},"proof")," of correct execution of a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),"."),(0,n.kt)("h3",{id:"prover"},"Prover"),(0,n.kt)("p",null,"The portion of the ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," that ",(0,n.kt)("a",{parentName:"p",href:"#execute"},"executes")," and ",(0,n.kt)("a",{parentName:"p",href:"#prove"},"proves")," a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),", thereby constructing a ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/risc0-zkvm/0.18/risc0_zkvm/trait.Prover.html"},"Prover documentation"),", ",(0,n.kt)("a",{parentName:"p",href:"#executor"},"Executor")),(0,n.kt)("h3",{id:"receipt"},"Receipt"),(0,n.kt)("p",null,"A receipt attests to valid ",(0,n.kt)("a",{parentName:"p",href:"#execute"},"execution")," of a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),". ",(0,n.kt)("a",{parentName:"p",href:"#verify"},"Verifying")," the receipt provides cryptographic assurance that the ",(0,n.kt)("a",{parentName:"p",href:"#journal"},"journal")," was indeed constructed using the expected ",(0,n.kt)("a",{parentName:"p",href:"#circuit"},"circuit")," and the expected ",(0,n.kt)("a",{parentName:"p",href:"#image-id"},"imageID"),".\nThe receipt consists of a ",(0,n.kt)("a",{parentName:"p",href:"#journal"},"journal")," and a ",(0,n.kt)("a",{parentName:"p",href:"#seal"},"seal"),".\nThe journal attests to the public outputs of the program, and\nthe seal is the opaque blob that cryptographically attests to the validity of the receipt."),(0,n.kt)("h3",{id:"risc-v"},"RISC-V"),(0,n.kt)("p",null,"The 5th edition of UC Berkeley's reduced instruction set computer architecture.\nRISC Zero uses RISC-V, specifically the ",(0,n.kt)("a",{parentName:"p",href:"https://riscv.org/wp-content/uploads/2019/12/riscv-spec-20191213.pdf"},"rv32im instruction set"),", as the basis for the RISC Zero zkVM."),(0,n.kt)("h3",{id:"seal"},"Seal"),(0,n.kt)("p",null,"The portion of the ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt")," that cryptographically attests to the correct execution of the ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),". Concretely, the seal is a ",(0,n.kt)("a",{parentName:"p",href:"#stark"},"zk-STARK")," and is generated by the ",(0,n.kt)("a",{parentName:"p",href:"#prover"},"prover"),". ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"#validity-proof"},"Validity Proof")),(0,n.kt)("h3",{id:"segment"},"Segment"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#execution-trace"},"execution trace")," of a portion of a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),".\nThe execution of a segment begins at some initial memory image (identified by the ",(0,n.kt)("a",{parentName:"p",href:"#image-id"},"ImageID"),") and proceeds until terminated by the system or user.\nThis represents a chunk of execution work that will be proven in a single call to the ZKP system. ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"#session"},"Session")),(0,n.kt)("h3",{id:"session"},"Session"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"#execution-trace"},"execution trace")," of a ",(0,n.kt)("a",{parentName:"p",href:"#guest-program"},"guest program"),".\nThe session's execution starts from an initial memory image (which includes the starting program counter) and proceeds until either a sys_halt or a sys_pause syscall is encountered.\nThis record is stored as a vector of ",(0,n.kt)("a",{parentName:"p",href:"#segment"},"Segments"),"."),(0,n.kt)("h3",{id:"stark"},"STARK"),(0,n.kt)("p",null,"A STARK (scalable, transparent argument of knowledge) serves as proof of validity for a ",(0,n.kt)("a",{parentName:"p",href:"#zero-knowledge-virtual-machine-zkvm"},"zkVM")," program. ",(0,n.kt)("br",null),"\nSee also: ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/next/reference-docs/about-starks"},"About STARKs"),", ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/next/proof-system/proof-system-sequence-diagram"},"Sequence Diagram for RISC Zero's STARK"),", ",(0,n.kt)("a",{parentName:"p",href:"https://risczero.com/proof-system-in-detail.pdf"},"RISC Zero's ZKP Whitepaper")),(0,n.kt)("h3",{id:"validity-proof"},"Validity Proof"),(0,n.kt)("p",null,"A validity proof is a cryptographic argument that attests to the validity of an ",(0,n.kt)("a",{parentName:"p",href:"#execution-trace"},"execution trace"),".\nThe ",(0,n.kt)("a",{parentName:"p",href:"#seal"},"seal")," on the ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt")," serves as a validity proof for the RISC-V instruction set."),(0,n.kt)("h3",{id:"verifier"},"Verifier"),(0,n.kt)("p",null,"A program on the ",(0,n.kt)("a",{parentName:"p",href:"#host"},"host")," that ",(0,n.kt)("a",{parentName:"p",href:"#verify"},"verifies")," a ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt"),"."),(0,n.kt)("h3",{id:"verify"},"Verify"),(0,n.kt)("p",null,"Check that the ",(0,n.kt)("a",{parentName:"p",href:"#receipt"},"receipt")," is valid.\nVerifying ",(0,n.kt)("a",{parentName:"p",href:"#segment"},"segment")," receipts requires checking that the ",(0,n.kt)("a",{parentName:"p",href:"#seal"},"seal")," is valid and was generated by the expected ",(0,n.kt)("a",{parentName:"p",href:"#image-id"},"ImageID"),".\nVerifying ",(0,n.kt)("a",{parentName:"p",href:"#session"},"session")," receipts requires checking the validity of each ",(0,n.kt)("a",{parentName:"p",href:"#segment"},"segment")," and checking that the initial/final memory snapshots for each segment align appropriately."),(0,n.kt)("h3",{id:"zero-knowledge-virtual-machine-zkvm"},"Zero-Knowledge Virtual Machine (zkVM)"),(0,n.kt)("p",null,"A virtual machine that runs trusted code and generates proofs.\nRISC Zero's zkVM implements the RISC-V instruction set architecture and uses a ",(0,n.kt)("a",{parentName:"p",href:"#stark"},"STARK"),"-based proof system."))}h.isMDXComponent=!0}}]);