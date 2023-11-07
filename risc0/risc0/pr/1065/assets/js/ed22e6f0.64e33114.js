"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2512],{445:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>h});var o=n(5893),r=n(1151);const s={slug:"./"},a="Bonsai Overview",t={id:"bonsai/bonsai-overview",title:"Bonsai Overview",description:"Bonsai enables boundless computation on any blockchain.",source:"@site/api_versioned_docs/version-0.19/bonsai/bonsai-overview.md",sourceDirName:"bonsai",slug:"/bonsai/",permalink:"/website-preview/risc0/risc0/pr/1065/api/bonsai/",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/bonsai-overview.md",tags:[],version:"0.19",frontMatter:{slug:"./"},sidebar:"docs",previous:{title:"Introduction",permalink:"/website-preview/risc0/risc0/pr/1065/api/"},next:{title:"Bonsai Quick Start",permalink:"/website-preview/risc0/risc0/pr/1065/api/bonsai/quickstart"}},c={},h=[{value:"How do I interact with Bonsai directly?",id:"how-do-i-interact-with-bonsai-directly",level:2},{value:"How do I interact with Bonsai from Ethereum?",id:"how-do-i-interact-with-bonsai-from-ethereum",level:2},{value:"How do I interact with Bonsai from other chains?",id:"how-do-i-interact-with-bonsai-from-other-chains",level:2},{value:"Bonsai Building Blocks",id:"bonsai-building-blocks",level:2},{value:"1. The RISC Zero zkVM: the proof engine behind Bonsai",id:"1-the-risc-zero-zkvm-the-proof-engine-behind-bonsai",level:3},{value:"2. The Bonsai proving service, powered by the zkVM",id:"2-the-bonsai-proving-service-powered-by-the-zkvm",level:3},{value:"3. Bonsai Relayer and Relay Contract: Connecting off-chain proofs and on-chain applications",id:"3-bonsai-relayer-and-relay-contract-connecting-off-chain-proofs-and-on-chain-applications",level:3},{value:"Where we&#39;re headed",id:"where-were-headed",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"bonsai-overview",children:"Bonsai Overview"}),"\n",(0,o.jsx)(i.p,{children:"Bonsai enables boundless computation on any blockchain.\nWith Bonsai, instead of generating proofs on your own hardware, you can upload the program you need proven and request that Bonsai generates proofs for you as needed."}),"\n",(0,o.jsxs)(i.p,{children:["Bonsai is highly parallelized, highly performant and can horizontally scale. To get a taste of what you can do with Bonsai, check out ",(0,o.jsx)(i.a,{href:"https://www.risczero.com/news/zeth-release",children:"Zeth"}),", our ",(0,o.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/bonsai/examples/governance#readme",children:"Governance Showcase"}),", the ",(0,o.jsx)(i.a,{href:"https://twitter.com/RiscZero/status/1673692915401629698",children:"Bonfire Wallet"})," demo from the Hash Cloak team, and our twitter thread about using ",(0,o.jsx)(i.a,{href:"https://twitter.com/RiscZero/status/1677316664772132864",children:"Bonsai as a zk coprocessor"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Whether you're looking to take heavy computations off-chain or need to generate proofs for your trustless, verifiable software, Bonsai can help.\nCheck out our ",(0,o.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1065/api/bonsai/quickstart",children:"Bonsai Quick Start"})," page, and start building!"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.strong,{children:["Please note that Bonsai is still in early development. ",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(i.a,{href:"https://bonsai.xyz/apply",children:"Request access here"}),", and do not use Bonsai in production."]})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Bonsai overview",src:n(6388).Z+"",width:"3076",height:"1452"})}),"\n",(0,o.jsxs)(i.p,{children:["The diagram above shows a simplified overview of Bonsai.\nAs a developer using Bonsai you'll write your ",(0,o.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," that can be used as part of:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"A trustless, verifiable software"}),"\n",(0,o.jsx)(i.li,{children:"Some business logic of a smart contract"}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["As a result, you'll get back a ",(0,o.jsx)(i.a,{href:"/terminology#receipt",children:"receipt"})," proving the execution of your ",(0,o.jsx)(i.a,{href:"/terminology#guest-program",children:"guest program"})," as well as its public result in a ",(0,o.jsx)(i.a,{href:"/terminology#journal",children:"journal"}),"."]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.em,{children:["Note that there are various ways to interact with Bonsai, outlined on the ",(0,o.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1065/api/bonsai/quickstart",children:"Bonsai Quick Start"})," page."]})}),"\n",(0,o.jsx)(i.h2,{id:"how-do-i-interact-with-bonsai-directly",children:"How do I interact with Bonsai directly?"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Bonsai Ethereum",src:n(736).Z+"",width:"3556",height:"1812"})}),"\n",(0,o.jsxs)(i.p,{children:["If you build a project with the ",(0,o.jsx)(i.a,{href:"https://crates.io/crates/cargo-risczero",children:(0,o.jsx)(i.code,{children:"cargo risczero"})})," tool, you can set environment variables to enable remote proving using Bonsai. Namely, when running your project, set ",(0,o.jsx)(i.code,{children:"BONSAI_API_KEY=<YOUR_API_KEY>"})," and ",(0,o.jsx)(i.code,{children:"BONSAI_API_URL=<BONSAI_URL>"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Alternatively, you can use the ",(0,o.jsx)(i.a,{href:"https://crates.io/crates/bonsai-sdk",children:"Bonsai SDK"})," or the ",(0,o.jsx)(i.a,{href:"https://api.bonsai.xyz/swagger-ui/",children:"Bonsai REST API"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"how-do-i-interact-with-bonsai-from-ethereum",children:"How do I interact with Bonsai from Ethereum?"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Bonsai Ethereum",src:n(6915).Z+"",width:"4156",height:"2492"})}),"\n",(0,o.jsx)(i.p,{children:"The picture above shows a simplified overview of how users can integrate Bonsai into their Ethereum smart contracts:"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["You can send proof requests to Bonsai via an ",(0,o.jsx)(i.em,{children:"off-chain"})," REST API interface or ",(0,o.jsx)(i.em,{children:"on-chain"})," via a smart contract."]}),"\n",(0,o.jsxs)(i.li,{children:["The ",(0,o.jsx)(i.code,{children:"Bonsai Relayer"})," will forward your proof request to the Bonsai proving service."]}),"\n",(0,o.jsxs)(i.li,{children:["Bonsai will use the RISC Zero zkVM to generate a proof, and send the proof back to your contract via the ",(0,o.jsx)(i.code,{children:"Bonsai Relay Contract"}),"."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"how-do-i-interact-with-bonsai-from-other-chains",children:"How do I interact with Bonsai from other chains?"}),"\n",(0,o.jsx)(i.p,{children:"Stay tuned!"}),"\n",(0,o.jsx)(i.h2,{id:"bonsai-building-blocks",children:"Bonsai Building Blocks"}),"\n",(0,o.jsx)(i.h3,{id:"1-the-risc-zero-zkvm-the-proof-engine-behind-bonsai",children:"1. The RISC Zero zkVM: the proof engine behind Bonsai"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.em,{children:["Status: ",(0,o.jsx)(i.a,{href:"https://github.com/risc0/risc0",children:"Available and open source"})]})}),"\n",(0,o.jsx)(i.p,{children:"Under the hood, Bonsai uses the RISC Zero zkVM to prove your programs. With the zkVM, you have access to recursive proofs, proofs composition, a general-purpose circuit (with a bespoke circuit compiler), state continuations, and continuous improvements to the proving algorithm."}),"\n",(0,o.jsx)(i.h3,{id:"2-the-bonsai-proving-service-powered-by-the-zkvm",children:"2. The Bonsai proving service, powered by the zkVM"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.em,{children:"Status: Pre-Alpha"})}),"\n",(0,o.jsxs)(i.p,{children:["The Bonsai proving service can be used standalone or directly integrated with smart contracts and blockchains. If you're interested in Bonsai, learn more in our ",(0,o.jsx)(i.a,{href:"/litepaper",children:"litepaper"})," and ",(0,o.jsx)(i.a,{href:"https://youtu.be/nVAs2i-_Iyo?t=3044",children:"talks"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"3-bonsai-relayer-and-relay-contract-connecting-off-chain-proofs-and-on-chain-applications",children:"3. Bonsai Relayer and Relay Contract: Connecting off-chain proofs and on-chain applications"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsxs)(i.em,{children:["Status: Pre-Alpha, ",(0,o.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1065/api/bonsai/bonsai-on-eth",children:"documentation"})," and ",(0,o.jsx)(i.a,{href:"https://github.com/risc0/bonsai-foundry-template",children:"Bonsai Foundry template"})," available"]})}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"Bonsai Relayer"})," and the ",(0,o.jsx)(i.code,{children:"Bonsay Relay Contract"})," let your Ethereum dApps connect to Bonsai. Smart contract developers can call our proving service off-chain via a REST API or through an on-chain relay contract connected to the Bonsai proving service."]}),"\n",(0,o.jsx)(i.h2,{id:"where-were-headed",children:"Where we're headed"}),"\n",(0,o.jsxs)(i.p,{children:["We're building technology that allows anyone to generate highly performant zero-knowledge proofs for a variety of applications. We want to make zero-knowledge proof integration into Ethereum, L1 blockchains, Cosmos app chains, L2 rollups, and dApps possible with minimal development effort. To learn more, read our ",(0,o.jsx)(i.a,{href:"/litepaper",children:"litepaper"}),"."]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6388:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/bonsai_architecture-7ee678f1601dd3bbc8b2e0f01c0908f9.png"},6915:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/bonsai_ethereum-76e1795a2f79cbc67ff530d289aa1856.png"},736:(e,i,n)=>{n.d(i,{Z:()=>o});const o=n.p+"assets/images/bonsai_zkvm-3ca39e3a79dfb8f42d6bd200416a91d8.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>a});var o=n(7294);const r={},s=o.createContext(r);function a(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);