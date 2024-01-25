"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[866],{9427:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>n,toc:()=>a});var t=s(5893),i=s(1151);const c={sidebar_position:1,slug:"./"},o="Proof System Overview",n={id:"proof-system/proof-system",title:"Proof System Overview",description:"A diagram of a receipt as the output of a zkVM program",source:"@site/docs/proof-system/proof-system.md",sourceDirName:"proof-system",slug:"/proof-system/",permalink:"/website-preview/risc0/risc0/pr/1377/proof-system/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"./"},sidebar:"docs",previous:{title:"Study Club",permalink:"/website-preview/risc0/risc0/pr/1377/studyclub"},next:{title:"STARK by Hand",permalink:"/website-preview/risc0/risc0/pr/1377/proof-system/stark-by-hand"}},h={},a=[{value:"Types of Receipts",id:"types-of-receipts",level:3},{value:"Open-Source Proving",id:"open-source-proving",level:3},{value:"Learn More",id:"learn-more",level:2}];function l(e){const r={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"proof-system-overview",children:"Proof System Overview"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{alt:"A diagram of a receipt as the output of a zkVM program",src:s(2559).Z+"",width:"1360",height:"510"}),"\nWhen the RISC Zero ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm",children:"zkVM"})," executes, it produces a ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"Receipt"})," that serves as a proof of validity of a given ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#session",children:"Session"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["To confirm that a ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"Receipt"})," was honestly generated, use ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#method.verify",children:"Receipt::verify()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"Receipt"})," includes a ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#structfield.journal",children:"journal"}),", which contains the public outputs of the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#session",children:"Session"}),".\nThe contents of the ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#structfield.journal",children:"journal"})," are specified by calling ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.commit.html",children:"env::commit()"})," and ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest/env/fn.commit_slice.html",children:"env::commit_slice()"})," in the ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/guest",children:"guest"})," code."]}),"\n",(0,t.jsxs)(r.p,{children:["In addition to the journal, a receipt makes a number of claims about the program execution.\nThese claims are summarized in the ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.ReceiptClaim.html",children:"ReceiptClaim"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"types-of-receipts",children:"Types of Receipts"}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"Receipt"})," can take four main forms."]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.19.1/risc0_zkvm/struct.FlatReceipt.html",children:"flat receipt"})})," is a vector of ",(0,t.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1377/reference-docs/about-starks",children:"ZK-STARK"}),"s, one for each ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#segment",children:"segment"}),". Segments & segment proofs are constructed using the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#risc-v-circuit",children:"RISC-V Circuit"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.19.1/risc0_zkvm/struct.SuccinctReceipt.html",children:"succinct receipt"})})," is a single ",(0,t.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1377/reference-docs/about-starks",children:"ZK-STARK"})," proving an entire ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#session",children:"Session"}),". A succinct receipt is formed by aggregating the proofs from a flat receipt. This is accomplished using the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#recursion-circuit",children:"Recursion Circuit"}),". Users can also aggregate multiple succinct receipts into a single succinct receipt using ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#composition",children:"proof composition"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#groth16-receipt",children:"Groth16 receipt"})})," is a single ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#groth16",children:"Groth16"})," proof for an entire ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#session",children:"Session"}),". A Groth16Receipt is formed by verifying a succinct receipt using RISC Zero's ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#groth16-circuit",children:"Groth16 circuit"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["A ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://dev.risczero.com/api/zkvm/dev-mode",children:"fake receipt"})})," doesn't contain any proof at all. This feature is offered to enable rapid prototyping. See ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/zkvm/dev-mode",children:"Dev Mode"})," for more information."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"The layers of the RISC Zero proving system",src:s(9537).Z+"",width:"1920",height:"1080"})}),"\n",(0,t.jsxs)(r.p,{children:["The diagram above shows RISC Zero's full proving stack, including the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#risc-v-circuit",children:"RISC-V Circuit"}),", the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#recursion-circuit",children:"Recursion Circuit"}),", and the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#groth16-circuit",children:"Groth16 Circuit"}),". In this diagram, the ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.19.1/risc0_zkvm/struct.FlatReceipt.html",children:"flat receipt"})," is the collection of 6 stacked receipts, the ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm/0.19.1/risc0_zkvm/struct.SuccinctReceipt.html",children:"succinct receipt"})," is the single receipt after the last use of FRI, and the ",(0,t.jsx)(r.a,{href:"https://dev.risczero.com/terminology#groth16-receipt",children:"Groth16 Receipt"})," is the tiny receipt that comes from the Groth16 Circuit.\nFor a video explanation of this architecture and the associated terminology, check out our ",(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=wkIBN2CGJdc",children:"talk from zkSummit 10"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The details of the RISC Zero ZK-STARK protocol are described in our ",(0,t.jsx)(r.a,{href:"https://www.risczero.com/proof-system-in-detail.pdf",children:"ZKP Whitepaper"})," and in this ",(0,t.jsx)(r.a,{href:"/website-preview/risc0/risc0/pr/1377/proof-system/proof-system-sequence-diagram",children:"Sequence Diagram"}),".\nDocumentation for our Groth16 circuit is available in the ",(0,t.jsx)(r.a,{href:"https://docs.rs/risc0-zkvm",children:"zkVM"})," docs."]}),"\n",(0,t.jsx)(r.h3,{id:"open-source-proving",children:"Open-Source Proving"}),"\n",(0,t.jsxs)(r.p,{children:["All three of these circuits are open-source and permissionless; anyone may generate proofs on their own hardware using the implementations available at our ",(0,t.jsx)(r.a,{href:"https://github.com/risc0/risc0",children:"GitHub"}),".\nUsers may also choose to delegate the work of proof generation to ",(0,t.jsx)(r.a,{href:"https://bonsai.xyz",children:"Bonsai"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Read more about our philosophy on open-source software ",(0,t.jsx)(r.a,{href:"https://risczero.com/news/open-source",children:"here"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,t.jsx)(r.p,{children:"In addition to the links in the sidebar, we recommend the following resources:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/api/zkvm",children:"About the zkVM & Bonsai"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://risczero.com/news",children:"RISC Zero News"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/api/zkvm/quickstart",children:"Start Building"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://dev.risczero.com/studyclub",children:"Study Club"})}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9537:(e,r,s)=>{s.d(r,{Z:()=>t});const t=s.p+"assets/images/proof-system-layers-f17e0e6171d12f5dd1fd56f67e03ca6b.png"},2559:(e,r,s)=>{s.d(r,{Z:()=>t});const t=s.p+"assets/images/receipt-f24f19ae61fadf1d375fcb18563b0f8e.png"},1151:(e,r,s)=>{s.d(r,{Z:()=>n,a:()=>o});var t=s(7294);const i={},c=t.createContext(i);function o(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);