"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},i="A Blockchain Developer's Guide to the zkVM",s={unversionedId:"bonsai/blockchain-zkvm-guide",id:"version-0.18/bonsai/blockchain-zkvm-guide",title:"A Blockchain Developer's Guide to the zkVM",description:"(To start building on [Bonsai], check out the [Bonsai Quick Start] page.)",source:"@site/versioned_docs/version-0.18/bonsai/blockchain-zkvm-guide.md",sourceDirName:"bonsai",slug:"/bonsai/blockchain-zkvm-guide",permalink:"/website-preview/risc0/risc0/pr/1037/bonsai/blockchain-zkvm-guide",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/bonsai/blockchain-zkvm-guide.md",tags:[],version:"0.18",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"Bonsai on Ethereum",permalink:"/website-preview/risc0/risc0/pr/1037/bonsai/bonsai-on-eth"},next:{title:"zkVM Overview",permalink:"/website-preview/risc0/risc0/pr/1037/zkvm/"}},l={},u=[{value:"The role of the zkVM in Bonsai",id:"the-role-of-the-zkvm-in-bonsai",level:2},{value:"Writing Rust code",id:"writing-rust-code",level:2},{value:"Retrieving and handling zkVM receipts",id:"retrieving-and-handling-zkvm-receipts",level:2},{value:"I/O between the EVM blockchain and the zkVM",id:"io-between-the-evm-blockchain-and-the-zkvm",level:2},{value:"Why am I seeing errors?",id:"why-am-i-seeing-errors",level:2},{value:"Diving deeper",id:"diving-deeper",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"a-blockchain-developers-guide-to-the-zkvm"},"A Blockchain Developer's Guide to the zkVM"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(To start building on ",(0,n.kt)("a",{parentName:"em",href:"../bonsai/"},"Bonsai"),", check out the ",(0,n.kt)("a",{parentName:"em",href:"/website-preview/risc0/risc0/pr/1037/bonsai/quickstart"},"Bonsai Quick Start")," page.)")),(0,n.kt)("p",null,"In order to prove code using Bonsai, you need to write the code you want proven. That is, you'll need to write a ",(0,n.kt)("a",{parentName:"p",href:"../terminology#guest-program"},"guest program")," for the ",(0,n.kt)("a",{parentName:"p",href:"../terminology#zero-knowledge-virtual-machine-zkvm"},"zkVM"),". This guide will focus on the core techniques a blockchain developer will need to write zkVM code to prove in Bonsai. We have ",(0,n.kt)("a",{parentName:"p",href:"../zkvm"},"a number of guides")," for developing for the zkVM more generally if you want to dive deeper!"),(0,n.kt)("h2",{id:"the-role-of-the-zkvm-in-bonsai"},"The role of the zkVM in Bonsai"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bonsai ETH Relay overview",src:r(651).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,"The zkVM is used as an internal component of Bonsai. It is what runs your program off-chain using inputs from your smart contract call, and it is what ",(0,n.kt)("a",{parentName:"p",href:"../terminology#validity-proof"},"proves")," your code was ",(0,n.kt)("a",{parentName:"p",href:"../terminology#execute"},"executed")," in a way anyone can ",(0,n.kt)("a",{parentName:"p",href:"../terminology#verify"},"verify"),". Bonsai runs most of the zkVM for you: all you need to provide is the code you want proven, which we call the zkVM ",(0,n.kt)("a",{parentName:"p",href:"../terminology#guest-program"},"guest program"),"."),(0,n.kt)("h2",{id:"writing-rust-code"},"Writing Rust code"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../terminology#guest-program"},"Guest programs")," are written in ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),". If you're new to ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust"),", we recommend their ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn"},"official learning resources"),"."),(0,n.kt)("p",null,"When creating your ",(0,n.kt)("a",{parentName:"p",href:"../terminology#guest-program"},"guest program"),", you can write ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," code in the usual way, including importing packages others have written. We do provide some additional zkVM-specific functionality, most notably ",(0,n.kt)("inlineCode",{parentName:"p"},"env::read_slice")," for reading the input data sent from your smart contract and ",(0,n.kt)("inlineCode",{parentName:"p"},"env::commit_slice")," for ",(0,n.kt)("a",{parentName:"p",href:"../terminology#commit"},"committing")," public results to the ",(0,n.kt)("a",{parentName:"p",href:"../terminology#journal"},"journal")," (see below)."),(0,n.kt)("p",null,"This is, in principle, everything you need to know to use the zkVM with Bonsai: write ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," code that does whatever it is you want proven, and use the ",(0,n.kt)("inlineCode",{parentName:"p"},"env")," functions to read inputs from, and commit results to, your smart contract. But if you continue reading we'll provide further orientation to the role of the zkVM and some useful tips and tricks for writing zkVM code."),(0,n.kt)("h2",{id:"retrieving-and-handling-zkvm-receipts"},"Retrieving and handling zkVM receipts"),(0,n.kt)("p",null,"Once Bonsai proves your code, it will give you access to this proof with a ",(0,n.kt)("a",{parentName:"p",href:"../terminology#receipt"},"receipt"),". Much like a paper receipt, the zkVM ",(0,n.kt)("a",{parentName:"p",href:"../terminology#receipt"},"receipt")," can be handed to someone else to demonstrate that a program was executed with integrity. The ",(0,n.kt)("a",{parentName:"p",href:"../terminology#receipt"},"receipt")," also contains any computational results we've chosen to share in its ",(0,n.kt)("a",{parentName:"p",href:"../terminology#journal"},"journal"),", so we know our results came from the faithfully executed program."),(0,n.kt)("h2",{id:"io-between-the-evm-blockchain-and-the-zkvm"},"I/O between the EVM blockchain and the zkVM"),(0,n.kt)("p",null,"The zkVM doesn't natively speak EVM bytecode, so you'll want to decode and encode your smart contract inputs and outputs inside of your provable zkVM guest program. This will allow you to store off-chain program inputs in regular Rust variables and use them during computation. Because your shared outputs will be encoded back into EVM bytecode, you'll be able to read results back into app contracts."),(0,n.kt)("p",null,"Because the zkVM supports general-purpose instructions, you can use standard Rust libraries including ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rust-ethereum/ethabi"},"ethabi"),", a Rust library for decoding and encoding EVM bytecode."),(0,n.kt)("h2",{id:"why-am-i-seeing-errors"},"Why am I seeing errors?"),(0,n.kt)("p",null,"We have an ",(0,n.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/1037/tech_faq"},"FAQ")," that discusses some frequently encountered problems. You can also ask us questions on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"Discord"),"."),(0,n.kt)("h2",{id:"diving-deeper"},"Diving deeper"),(0,n.kt)("p",null,"We have ",(0,n.kt)("a",{parentName:"p",href:"../zkvm"},"extensive resources")," on writing zkVM code. Many of these resources assume you are developing without the aid of Bonsai. Here are some differences you might encounter when reading these docs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"zkVM docs frequently refer to the ",(0,n.kt)("a",{parentName:"li",href:"../terminology#guest"},"guest")," and ",(0,n.kt)("a",{parentName:"li",href:"../terminology#host"},"host"),". With Bonsai, you only write code for the ",(0,n.kt)("a",{parentName:"li",href:"../terminology#guest"},"guest"),"; Bonsai itself runs the ",(0,n.kt)("a",{parentName:"li",href:"../terminology#host"},"host"),". A partial exception is providing inputs and receiving the ",(0,n.kt)("a",{parentName:"li",href:"../terminology#receipt"},"receipt"),", which is handled by the ",(0,n.kt)("a",{parentName:"li",href:"../terminology#host"},"host")," without Bonsai, whereas with the Bonsai ETH Relay your smart contract must handle these duties."),(0,n.kt)("li",{parentName:"ul"},"You might see our zkVM documentation refer to executors, sessions, and segments. These code-level concepts are related to ",(0,n.kt)("a",{parentName:"li",href:"https://www.risczero.com/news/continuations"},"continuations"),", a feature that lets us design our zkVM program proof work to be parallelizable and not limited by the size of the program to be proven. Bonsai takes advantage of this feature to parallelize proofs about off-chain computation. If you're reading about these in zkVM documentation, you're almost certainly looking at host-side details that you don't need in order to write provable code.")))}h.isMDXComponent=!0},651:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/eth-relay-diagram-0e77d68bed2dc3f0b161de7cf3e2908d.jpg"}}]);