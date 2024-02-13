"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6907],{2670:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=i(5893),n=i(1151);const s={},c="Receipts 101",o={id:"zkvm/receipts",title:"Receipts 101",description:"A brief introduction to the RISC Zero [receipt].",source:"@site/api/zkvm/receipts.md",sourceDirName:"zkvm",slug:"/zkvm/receipts",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/receipts",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/receipts.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Host Code 101",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/host-code-101"},next:{title:"Introduction to Input/Output in the zkVM",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/input-output"}},a={},h=[{value:"What is a receipt?",id:"what-is-a-receipt",level:2},{value:"How are receipts used?",id:"how-are-receipts-used",level:2},{value:"Extracting the Journal",id:"extracting-the-journal",level:2},{value:"Verifying a Receipt",id:"verifying-a-receipt",level:2},{value:"Serializing and Deserializing Receipts",id:"serializing-and-deserializing-receipts",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"receipts-101",children:"Receipts 101"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["A brief introduction to the RISC Zero ",(0,r.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"what-is-a-receipt",children:"What is a receipt?"}),"\n",(0,r.jsx)(t.p,{children:"A receipt gives the results of your program along with proof that they were\nproduced honestly."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"From Guest Code to Receipt",src:i(8318).Z+"",width:"1778",height:"892"})}),"\n",(0,r.jsxs)(t.p,{children:["When you execute your ",(0,r.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/",children:"zkVM application"}),", the output of your application\nis included in a ",(0,r.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"}),". The ",(0,r.jsx)(t.a,{href:"/terminology#receipt",children:"receipt"})," serves as a succinct ",(0,r.jsx)(t.a,{href:"/terminology#validity-proof",children:"validity proof"}),"\nfor the ",(0,r.jsx)(t.a,{href:"/terminology#execution-trace",children:"execution"})," of your application. Receipts can be passed to third parties\nand ",(0,r.jsx)(t.a,{href:"/terminology#verify",children:"verified"})," in order to cryptographically attest to the validity of\nyour application's output."]}),"\n",(0,r.jsxs)(t.p,{children:["The receipt consists of a ",(0,r.jsx)(t.a,{href:"/terminology#journal",children:"journal"})," and a ",(0,r.jsx)(t.a,{href:"/terminology#seal",children:"seal"}),". The journal attests to the\npublic outputs of the program, and the seal is the opaque blob that\ncryptographically attests to the validity of the receipt."]}),"\n",(0,r.jsx)(t.h2,{id:"how-are-receipts-used",children:"How are receipts used?"}),"\n",(0,r.jsxs)(t.p,{children:["Suppose Alice and Bob have agreed on some computation that needs to get done. In\nparticular, they've agreed on some zkVM ",(0,r.jsx)(t.a,{href:"/terminology#guest-program",children:"guest program"}),", and they each have\naccess to the source code and the ",(0,r.jsx)(t.a,{href:"/terminology#image-id",children:"Image ID"})," for that guest program. (In\npractice, Bob may retrieve the Image ID either by constructing it himself or\nretrieving it from a trusted channel.)"]}),"\n",(0,r.jsx)(t.p,{children:"Alice runs the zkVM to generate a receipt, and then Alice sends the receipt to\nBob. After receiving the receipt, Bob can:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["inspect the receipt to extract the ",(0,r.jsx)(t.a,{href:"/terminology#journal",children:"journal"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/terminology#verify",children:"verify"})," the receipt to ensure that:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["the ",(0,r.jsx)(t.a,{href:"/terminology#execution-trace",children:"execution"})," was valid"]}),"\n",(0,r.jsxs)(t.li,{children:["the ",(0,r.jsx)(t.a,{href:"/terminology#guest-program",children:"guest program"})," that executed was consistent with the expected ",(0,r.jsx)(t.a,{href:"/terminology#image-id",children:"image\nID"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"extracting-the-journal",children:"Extracting the Journal"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/terminology#journal",children:"journal"})," contains the public outputs of the computation. Users can extract\nthe journal from a receipt using ",(0,r.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#structfield.journal",children:"receipt.journal"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"verifying-a-receipt",children:"Verifying a Receipt"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/terminology#verify",children:"Verifying"})," the receipt provides cryptographic assurance that the ",(0,r.jsx)(t.a,{href:"/terminology#journal",children:"journal"})," was\ncreated honestly using the ",(0,r.jsx)(t.a,{href:"/terminology#guest-program",children:"guest program"})," with the expected ",(0,r.jsx)(t.a,{href:"/terminology#image-id",children:"Image ID"}),". Users\ncan verify the receipt using ",(0,r.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/struct.Receipt.html#method.verify",children:"receipt.verify()"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"serializing-and-deserializing-receipts",children:"Serializing and Deserializing Receipts"}),"\n",(0,r.jsxs)(t.p,{children:["For serializing and deserializing, you can use ",(0,r.jsx)(t.a,{href:"https://crates.io/crates/serde",children:"serde"})," which supports many\nencoding formats. There isn't a one-size-fits-all solution here, but one option\nis:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"let bytes = bincode::serialize(&receipt);"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8318:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/from-rust-to-receipt-23117368c4f46d78c8cac3b753245a5a.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>c});var r=i(7294);const n={},s=r.createContext(n);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);