"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3676],{9771:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=s(5893),t=s(1151);const i={},l="Examples",o={id:"zkvm/examples",title:"Examples",description:"- Hello World: a recommended place to start. Prove a number",source:"@site/api_versioned_docs/version-0.20/zkvm/examples.md",sourceDirName:"zkvm",slug:"/zkvm/examples",permalink:"/website-preview/risc0/risc0/pr/1428/api/zkvm/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/examples.md",tags:[],version:"0.20",frontMatter:{},sidebar:"api",previous:{title:"Building zkVM Hello World",permalink:"/website-preview/risc0/risc0/pr/1428/api/zkvm/tutorials/hello-world"}},a={},c=[{value:"Running the examples",id:"running-the-examples",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Check out the correct version of the example",id:"check-out-the-correct-version-of-the-example",level:3},{value:"Run the example",id:"run-the-example",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples/hello-world",children:"Hello World"})}),": a recommended place to start. Prove a number\nis composite, and you know its factors without revealing them"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples/json",children:"JSON"})}),": prove the contents of some entry in a JSON file,\nwhile keeping the rest of the data private"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples/waldo",children:"Where's Waldo"})}),": prove that Waldo appears in a JPG file,\nwhile keeping the rest of the image private, additionally, there is ",(0,r.jsx)(n.a,{href:"https://risczero.com/news/waldo",children:"Where's\nWaldo blog"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples/chess",children:"ZK Checkmate"})}),": prove that you see a mate-in-one, without\nrevealing the winning move"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"https://risczero.com/news/zkpoex",children:"ZK Proof of Exploit"}),"\u2211"]}),": prove that you ",(0,r.jsx)(n.em,{children:"could"})," exploit an Ethereum\naccount, without revealing the exploit"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples/ecdsa",children:"ECDSA signature verification"})}),": prove the validity of an\nECDSA signature"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples/zkevm-demo",children:"zkEVM"})}),": demo of running EVM engine on the Risc Zero zkVM"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"running-the-examples",children:"Running the examples"}),"\n",(0,r.jsxs)(n.p,{children:["The examples listed above and others can be found in RISC Zero's repository\nunder ",(0,r.jsx)(n.a,{href:"https://github.com/risc0/risc0/tree/release-0.20/examples",children:"/examples"}),". Unless otherwise noted in their own READMEs,\nthe examples can be run following the instructions below."]}),"\n",(0,r.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(n.p,{children:["First, ensure that you have all RISC Zero tools installed. See ",(0,r.jsx)(n.a,{href:"/website-preview/risc0/risc0/pr/1428/api/zkvm/install",children:"installation\ninstructions"})," for more information."]}),"\n",(0,r.jsx)(n.h3,{id:"check-out-the-correct-version-of-the-example",children:"Check out the correct version of the example"}),"\n",(0,r.jsx)(n.p,{children:"The compilation of the examples is tied to the version installed, so it is\nimportant to check out the correct version that corresponds to the local one. To\ndo so, first get the available version in your system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo risczero --version\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then check out the corresponding branch of the example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git checkout release-$VERSION # e.g. release-0.19\n"})}),"\n",(0,r.jsx)(n.h3,{id:"run-the-example",children:"Run the example"}),"\n",(0,r.jsx)(n.p,{children:"Finally, run the example with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo run --release\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var r=s(7294);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);