"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1530],{9035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(5893),i=t(1151);const s={},o="About PLONK and PLOOKUP",c={id:"reference-docs/about-plonk",title:"About PLONK and PLOOKUP",description:"The PLONK paper introduced an efficient technique for enforcing the validity of memory operations in arguments of computational integrity.",source:"@site/docs/reference-docs/about-plonk.md",sourceDirName:"reference-docs",slug:"/reference-docs/about-plonk",permalink:"/website-preview/risc0/risc0/pr/1119/reference-docs/about-plonk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"About the FRI Protocol",permalink:"/website-preview/risc0/risc0/pr/1119/reference-docs/about-fri"},next:{title:"About STARKs",permalink:"/website-preview/risc0/risc0/pr/1119/reference-docs/about-starks"}},a={},l=[{value:"Relevance in RISC Zero",id:"relevance-in-risc-zero",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Basic Function",id:"basic-function",level:2},{value:"Suggested Reading and Videos",id:"suggested-reading-and-videos",level:2},{value:"Less Technical",id:"less-technical",level:3},{value:"Moderately Technical",id:"moderately-technical",level:3},{value:"Very Technical",id:"very-technical",level:3}];function d(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"about-plonk-and-plookup",children:"About PLONK and PLOOKUP"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://eprint.iacr.org/2019/953",children:"PLONK paper"})," introduced an efficient technique for enforcing the validity of memory operations in arguments of computational integrity.\nBuilding on top of PLONK, the ",(0,r.jsx)(n.a,{href:"https://eprint.iacr.org/2020/315.pdf",children:"PLOOKUP paper"})," introduced a method of enforcing the validity of lookup operations."]}),"\n",(0,r.jsx)(n.h2,{id:"relevance-in-risc-zero",children:"Relevance in RISC Zero"}),"\n",(0,r.jsxs)(n.p,{children:["RISC Zero's zkVM makes use of both PLONK and PLOOKUP in the process of generating a ",(0,r.jsx)(n.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html",children:"receipt"}),".\nPLONK is used to generate constraints that authenticate ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=dYuEPvRLwLo&list=PLcPzhUaCxlCiLk_VjLUNbmfb2mB1Y_N9N&index=6",children:"re-ordering of RISC-V memory data"}),".\nPLOOKUP is used to generate constraints that enforce a bytes-based range-check."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Note: RISC Zero uses an AIR-based arithmetization and not a PLONK-based arithmetization."})}),"\n",(0,r.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,r.jsxs)(n.p,{children:["Implementation and documentation for RISC Zero's use of PLONK and PLOOKUP are in ",(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/3d00debce414f96353b8295720be21029ca63347/risc0/zkvm/src/prove/plonk.rs",children:"plonk.rs"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/blob/3d00debce414f96353b8295720be21029ca63347/risc0/zkp/src/prove/accum.rs",children:"accum.rs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-function",children:"Basic Function"}),"\n",(0,r.jsxs)(n.p,{children:["PLONK makes uses of ",(0,r.jsx)(n.a,{href:"https://hackmd.io/@arielg/ByFgSDA7D",children:"accumulators"})," in order to ensure that one list is a permutation of another.\nPLOOKUP uses PLONK to ensure that one list is contained in another list."]}),"\n",(0,r.jsx)(n.h2,{id:"suggested-reading-and-videos",children:"Suggested Reading and Videos"}),"\n",(0,r.jsxs)(n.p,{children:["For more on how these ideas fit into RISC Zero's system, we recommend our talk from zk Summit 7: ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=od033ugtlYQ&list=PLcPzhUaCxlCgCvzkkaBWzVuHdBRsTNxj1&index=7",children:"Encoding Von-Neumann Architectures in Zero-Knowledge Proof Systems"}),".\nFor general references, we recommend the following:"]}),"\n",(0,r.jsx)(n.h3,{id:"less-technical",children:"Less Technical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=n6_nicI4ckM&t=2629s",children:"ZK Podcast episode"})," with the authors of the PLONK paper"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vitalik.ca/general/2019/09/22/plonk.html",children:"Vitalik's PLONK intro"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://twitter.com/0xtaetaehoho/status/1618979438913527814",children:"@0xtaetaehoho's PLONK Skilltree"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"moderately-technical",children:"Moderately Technical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=NqrVcDuQ8hM",children:"ZK Study Club on PLONK"})}),"\n",(0,r.jsxs)(n.li,{children:["ZK Whiteboard sessions on ",(0,r.jsx)(n.a,{href:"https://zkhack.dev/whiteboard/module-five/",children:"PLONK"})," and on ",(0,r.jsx)(n.a,{href:"https://zkhack.dev/whiteboard/module-six/",children:"lookup arguments"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Vdlc1CmRYRY",children:"PLOOKUP presentation at zkSummit"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hackmd.io/@arielg/ByFgSDA7D",children:"Ariel Gabizon explains grand product arguments"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"very-technical",children:"Very Technical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://eprint.iacr.org/2019/953",children:"PLONK paper"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://eprint.iacr.org/2020/315.pdf",children:"PLOOKUP paper"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);