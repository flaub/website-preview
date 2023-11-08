"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2250],{1704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=t(5893),s=t(1151);const i={},o="Ethereum Examples",a={id:"bonsai/eth-examples",title:"Ethereum Examples",description:"While all of the [zkVM examples] can be run on Bonsai by [configuring Bonsai] as your remote prover, those examples do not interact with or are intended to interact with Ethereum or any other blockchain. The references below are examples of how Bonsai and the zkVM can be integrated with Ethereum.",source:"@site/api_versioned_docs/version-0.18/bonsai/eth-examples.md",sourceDirName:"bonsai",slug:"/bonsai/eth-examples",permalink:"/website-preview/risc0/risc0/pr/1127/api/0.18/bonsai/eth-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/bonsai/eth-examples.md",tags:[],version:"0.18",frontMatter:{},sidebar:"docs",previous:{title:"A Blockchain Developer's Guide to the zkVM",permalink:"/website-preview/risc0/risc0/pr/1127/api/0.18/bonsai/blockchain-zkvm-guide"},next:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1127/api/0.18/zkvm/"}},c={},h=[{value:"Zeth",id:"zeth",level:3},{value:"DAO Governance Example",id:"dao-governance-example",level:3},{value:"BonsaiStarter.sol",id:"bonsaistartersol",level:3}];function l(e){const n={a:"a",h1:"h1",h3:"h3",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"ethereum-examples",children:"Ethereum Examples"}),"\n",(0,r.jsxs)(n.p,{children:["While all of the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/api/zkvm/examples",children:"zkVM examples"})})," can be run on Bonsai by ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/api/zkvm/quickstart#remote-proving",children:"configuring Bonsai"})})," as your remote prover, those examples do not interact with or are intended to interact with Ethereum or any other blockchain. The references below are examples of how Bonsai and the zkVM can be integrated with Ethereum."]}),"\n",(0,r.jsx)(n.h3,{id:"zeth",children:"Zeth"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/zeth",children:"Zeth"})})," produces ZK validity proofs for Ethereum Virtual Machine blocks (EVM). This is accomplished by running ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://crates.io/crates/revm",children:"revm"})}),", a Rust implementation of the EVM in the zkVM. The end result is an open-source zkEVM with high code reuse and minute, not hour, proving times on Bonsai. For more info check out ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://www.risczero.com/news/zeth-release",children:"Announcing Zeth: The first Type Zero zkEVM"})}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"dao-governance-example",children:"DAO Governance Example"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/main/bonsai/examples/governance",children:"example app"})})," uses Bonsai as an Ethereum coprocessor. The protocol, based on the OpenZeppelin ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/governance",children:"Governor smart contract standard"})}),", batches signature verifications off-chain for a DAO governance vote. The end result is that in ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/main/bonsai/examples/governance/methods/guest/src/bin/finalize_votes.rs",children:"~160 lines of Rust"})}),", a gas savings of 66% is achieved with significant room for optimizations."]}),"\n",(0,r.jsx)(n.h3,{id:"bonsaistartersol",children:"BonsaiStarter.sol"}),"\n",(0,r.jsxs)(n.p,{children:["This ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/bonsai-foundry-template/blob/main/contracts/BonsaiStarter.sol",children:"test contract"})})," in the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/bonsai-foundry-template",children:"Bonsai Foundry Template"})})," provides an example of two different ways Bonsai can be integrated with Ethereum smart contracts using the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/main/bonsai/ethereum-relay",children:"Bonsai Ethereum Relay"})}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);