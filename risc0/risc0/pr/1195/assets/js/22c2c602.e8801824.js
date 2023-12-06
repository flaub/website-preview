"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5473],{523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=n(5893),i=n(1151);const s={},a="Ethereum Examples",o={id:"bonsai/eth-examples",title:"Ethereum Examples",description:"While all of the zkVM examples can be run on Bonsai by configuring Bonsai as your remote prover, those examples do not interact with or are intended to interact with Ethereum or any other blockchain. The references below are examples of how Bonsai and the zkVM can be integrated with Ethereum.",source:"@site/api/bonsai/eth-examples.md",sourceDirName:"bonsai",slug:"/bonsai/eth-examples",permalink:"/website-preview/risc0/risc0/pr/1195/api/next/bonsai/eth-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/eth-examples.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"A Blockchain Developer's Guide to the zkVM",permalink:"/website-preview/risc0/risc0/pr/1195/api/next/bonsai/blockchain-zkvm-guide"},next:{title:"REST API",permalink:"/website-preview/risc0/risc0/pr/1195/api/next/bonsai/rest-api"}},c={},h=[{value:"Zeth",id:"zeth",level:3},{value:"DAO Governance Example",id:"dao-governance-example",level:3},{value:"BonsaiStarter.sol",id:"bonsaistartersol",level:3}];function l(e){const t={a:"a",h1:"h1",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ethereum-examples",children:"Ethereum Examples"}),"\n",(0,r.jsxs)(t.p,{children:["While all of the ",(0,r.jsx)(t.a,{href:"/api/zkvm/examples",children:"zkVM examples"})," can be run on Bonsai by ",(0,r.jsx)(t.a,{href:"/api/zkvm/quickstart#remote-proving",children:"configuring Bonsai"})," as your remote prover, those examples do not interact with or are intended to interact with Ethereum or any other blockchain. The references below are examples of how Bonsai and the zkVM can be integrated with Ethereum."]}),"\n",(0,r.jsx)(t.h3,{id:"zeth",children:"Zeth"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/risc0/zeth",children:"Zeth"})," produces ZK validity proofs for Ethereum Virtual Machine blocks (EVM). This is accomplished by running ",(0,r.jsx)(t.a,{href:"https://crates.io/crates/revm",children:"revm"}),", a Rust implementation of the EVM in the zkVM. The end result is an open-source zkEVM with high code reuse and minute, not hour, proving times on Bonsai. For more info check out ",(0,r.jsx)(t.a,{href:"https://www.risczero.com/news/zeth-release",children:"Announcing Zeth: The first Type Zero zkEVM"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"dao-governance-example",children:"DAO Governance Example"}),"\n",(0,r.jsxs)(t.p,{children:["This ",(0,r.jsx)(t.a,{href:"https://github.com/risc0/risc0/tree/main/bonsai/examples/governance",children:"example app"})," uses Bonsai as an Ethereum coprocessor. The protocol, based on the OpenZeppelin ",(0,r.jsx)(t.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/governance",children:"Governor smart contract standard"}),", batches signature verifications off-chain for a DAO governance vote. The end result is that in ",(0,r.jsx)(t.a,{href:"https://github.com/risc0/risc0/blob/main/bonsai/examples/governance/methods/guest/src/bin/finalize_votes.rs",children:"~160 lines of Rust"}),", a gas savings of 66% is achieved with significant room for optimizations."]}),"\n",(0,r.jsx)(t.h3,{id:"bonsaistartersol",children:"BonsaiStarter.sol"}),"\n",(0,r.jsxs)(t.p,{children:["This ",(0,r.jsx)(t.a,{href:"https://github.com/risc0/bonsai-foundry-template/blob/main/contracts/BonsaiStarter.sol",children:"test contract"})," in the ",(0,r.jsx)(t.a,{href:"https://github.com/risc0/bonsai-foundry-template",children:"Bonsai Foundry Template"})," provides an example of two different ways Bonsai can be integrated with Ethereum smart contracts using the ",(0,r.jsx)(t.a,{href:"https://github.com/risc0/risc0/tree/main/bonsai/ethereum-relay",children:"Bonsai Ethereum Relay"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);