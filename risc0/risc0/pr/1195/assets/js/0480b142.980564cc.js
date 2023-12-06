"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[836],{8976:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var t=s(5893),r=s(1151);const n={},o="FAQ",a={id:"faq",title:"FAQ",description:"---",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/website-preview/risc0/risc0/pr/1195/faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},h=[{value:"Contents",id:"contents",level:2},{value:"ZK Basics",id:"zk-basics",level:2},{value:"Building on the zkVM",id:"building-on-the-zkvm",level:2},{value:"Code Troubleshooting",id:"code-troubleshooting",level:3},{value:"zkVM Application Design",id:"zkvm-application-design",level:3},{value:"Features, Performance, and Limitations",id:"features-performance-and-limitations",level:3},{value:"The RISC Zero Circuits",id:"the-risc-zero-circuits",level:2},{value:"Security",id:"security",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"contents",children:"Contents"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#faq",children:"FAQ"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#contents",children:"Contents"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#zk-basics",children:"ZK Basics"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#building-on-the-zkvm",children:"Building on the zkVM"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#code-troubleshooting",children:"Code Troubleshooting"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#zkvm-application-design",children:"zkVM Application Design"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#features-performance-and-limitations",children:"Features, Performance, and Limitations"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#the-risc-zero-circuits",children:"The RISC Zero Circuits"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#security",children:"Security"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"zk-basics",children:"ZK Basics"}),"\n",(0,t.jsx)("a",{class:"anchor",id:"zkp"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: What is a zero-knowledge proof?"})}),(0,t.jsxs)(i.p,{children:["A zero-knowledge proof (or ZKP) is ",(0,t.jsx)("a",{href:"https://en.wikipedia.org/wiki/Zero-knowledge_proof",children:'"a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true [without] conveying any additional information"'}),".\nRISC Zero's zkVM makes it easy to produce ZKPs to prove the correct execution of arbitrary code. ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.p,{children:["When Alice executes code inside the zkVM, Alice gets back a ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#receipt",children:"receipt"}),".\nAlice can pass the receipt to Bob, who can then ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#verify",children:"verify"})," the receipt."]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.p,{children:"By verifying the receipt, Bob can confirm that the expected code executed and produced the asserted results.\nAny inputs Alice passes to the program during execution will be private unless Alice chooses to share them."})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.h2,{id:"building-on-the-zkvm",children:"Building on the zkVM"}),"\n",(0,t.jsx)(i.h3,{id:"code-troubleshooting",children:"Code Troubleshooting"}),"\n",(0,t.jsx)("a",{class:"anchor",id:"build-errors"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: I'm running into build errors. Where should I look for help?"})}),(0,t.jsxs)(i.p,{children:["A: Some known issues and workarounds are tracked on GitHub under the ",(0,t.jsx)("a",{href:"https://github.com/risc0/risc0/issues?q=is%3Aissue+is%3Aopen+label%3A%22rust+guest+workarounds%22",children:'"rust guest workarounds"'})," tag.\nIf you can't find your problem here you can open a ",(0,t.jsx)("a",{href:"https://github.com/risc0/risc0/issues",children:"new issue"})," or reach out to us on ",(0,t.jsx)("a",{href:"https://discord.gg/risczero",children:"Discord"}),"."]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.h3,{id:"zkvm-application-design",children:"zkVM Application Design"}),"\n",(0,t.jsx)("a",{class:"anchor",id:"using-receipts"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:\nWhat do I do with the receipt once I\u2019ve created it?"})}),(0,t.jsxs)(i.p,{children:["A:\nAfter Alice creates a ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#receipt",children:"receipt"}),", she'll typically pass it to Bob who will want to ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#verify",children:"verify"})," its authenticity.\nAt a minimum, Bob will need access to the ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#image-id",children:"ImageID"})," of the expected program.\nFor most cases, Bob will want to know what code was run, and will therefore also want the ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#elf-binary",children:"ELF file"})," or the source code that generated it.\nBob can verify the receipt was created by this code by constructing the ",(0,t.jsx)("a",{href:"https://dev.risczero.com/terminology#image-id",children:"ImageID"})," from the given ELF file and using it for verification. ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.p,{children:["In our ",(0,t.jsx)("a",{href:"https://github.com/risc0/risc0/tree/v0.18.0/examples",children:"examples"}),", the receipt is generated and verified within the same program, but typically the receipt will be passed to a third party for verification."]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"io-buffer-overflows"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:  When can information be shared with the guest zkVM? How do you prevent buffer overflows?"})}),(0,t.jsx)(i.p,{children:"A:\nData can be sent during program execution from the host to the guest via a memory map.\nThe host-writeable memory is write-once, meaning that adjacent memory regions cannot be overwritten and executed."})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"what-should-guest-do"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:\nHow do I know which computations should be performed in the guest zkVM, and which can be offloaded to the host?"})}),(0,t.jsxs)(i.p,{children:["A: If you don't need to perform a computation securely, if others don't rely on it, and if it doesn't produce outputs that others rely on, it can probably be performed outside of the zkVM. ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsx)(i.p,{children:"However, consider that code run in the RISC Zero zkVM can be shown to behave as expected even on a host that is entirely untrusted.\nTo get the most value out of this guarantee, we recommend dividing the computational labor with an untrusted host in mind.\nThat is, other parties should not need to trust the host's output or operations in order to benefit from the work done in the zkVM."})]}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("a",{class:"anchor",id:"image-id"}),(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:\nWhat exactly is the ImageID of a zkVM application?"})}),(0,t.jsx)(i.p,{children:"A: The ImageID is a unique identifier given to a zkVM application. It cryptographically relates the application binary (ELF) to its produced receipts. This bound is a critical security property that ensures applications run unaltered."}),(0,t.jsx)(i.p,{children:"Specifically, the ImageID is a Merklization of the initial zkVM memory state, or MemoryImage, produced when the zkVM loads the application binary. The memory state is hashed to produce a single deterministic value via a pure function resembling:"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",metastring:"ignore",children:"fn compute_image_id(used_elf_pages, page_size, page_table_addr, pc) -> ImageID\n"})}),(0,t.jsxs)(i.p,{children:["Note: Only the loaded parts of the application binary, ",(0,t.jsx)(i.code,{children:"used_elf_pages,"})," are utilized to calculate the ImageID. Consequently, the hashing does not include elements of a compiled binary that do not affect program meaning, e.g., debug information and timestamps."]}),(0,t.jsxs)(i.p,{children:["As a consequence, ",(0,t.jsx)(i.em,{children:"functionally equivilant"})," binaries, from the zkVM perspective, will result in identical ImageIDs. However, the compiled binaries (ELFs) may be bitwise different if hashed directly from disk. ",(0,t.jsx)(i.em,{children:"This does not affect the zkVM security model."})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.h3,{id:"features-performance-and-limitations",children:"Features, Performance, and Limitations"}),"\n",(0,t.jsx)("a",{class:"anchor",id:"benchmarks"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: Are performance benchmarks available?"})}),(0,t.jsxs)(i.p,{children:["A: Yes. We have a ",(0,t.jsx)("a",{href:"https://dev.risczero.com/datasheet.pdf",children:"datasheet"})," with performance benchmarks, and you can also generate your own benchmarks. More details are available on the ",(0,t.jsx)("a",{href:"https://dev.risczero.com/zkvm/benchmarks",children:"benchmarks page"}),"."]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"language-support"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: What languages can I use to develop zkVM applications?"})}),(0,t.jsxs)(i.p,{children:["A: We recommend Rust for writing zkVM applications.\nAlthough technically the zkVM can execute any RISC-V code, we only have documentation and API support for Rust development.\nDevelopment in C++ is also possible, but proceed at your own risk.\nYou can reference the ",(0,t.jsx)("a",{href:"https://github.com/risc0/risc0/tree/v0.11.0/examples/cpp",children:"examples in C++"})," that were included in the 0.11 release, although we've made substantial changes since that release, and we're available to answer questions on ",(0,t.jsx)("a",{href:"https://discord.gg/risczero",children:" Discord"})," as needed."]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"max-length"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: What is the maximum execution length for a program running on the zkVM?"})}),(0,t.jsxs)(i.p,{children:["A: Since we added support for ",(0,t.jsx)("a",{href:"https://www.risczero.com/news/continuations",children:" continuations"}),", the execution length can be very large.\nSo far, we've made proofs for executions that exceed 4 billion cycles, and there's plenty of room to expand that further."]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"rust-crate"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: I have a specific Rust crate I'd like to use. Will it work inside the zkVM?"})}),(0,t.jsxs)(i.p,{children:["A: Each night, we check the top 1000 Rust crates for zkVM compatibility.\nYou can see the results ",(0,t.jsx)("a",{href:"https://risc0.github.io/ghpages/dev/crate-validation/index.html",children:" here"}),".\nAs of this writing, 71% of the top 1000 Rust crates work inside the zkVM. ",(0,t.jsx)("br",{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.p,{children:["If the crate you'd like to use isn't working, there may be a workaround ",(0,t.jsx)("a",{href:"https://github.com/risc0/risc0/issues?q=is%3Aissue+is%3Aopen+label%3A%22rust+guest+workarounds%22",children:"here"}),".\nIf there's not already a workaround, please ",(0,t.jsx)("a",{href:"https://github.com/risc0/risc0/issues/new",children:"open an issue"})," or reach out on ",(0,t.jsx)("a",{href:"https://discord.gg/risczero",children:"Discord."})]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"large-data"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:\nIf I want the guest to process large volumes of data during execution, I might be constrained by space limitations. What are my options?"})}),(0,t.jsx)(i.p,{children:"A:\nIf data is loaded from the host to restrict guest program size, the most significant limitation on zkVM data processing is a constraint on instruction cycles.\nLoading data into the guest costs instruction cycles, as does data processing."}),(0,t.jsx)(i.p,{children:"There are workarounds for data limitations if the data is only included to ensure that its integrity becomes part of the proof of computation.\nIf the data can be processed externally and simply needs to be verifiably unchanged, consider processing data externally and sending the guest a Merkle proof or (if no processing is needed) generating a SHA of a large dataset."}),(0,t.jsx)(i.p,{children:"In the future, we plan to lift these processing limitations using continuations and recursion."})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"acceleration"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:\nI\u2019d like to speed up the processing done inside the zkVM. What are my options?"})}),(0,t.jsx)(i.p,{children:"A:\nFor cryptographic operations, it is possible to build \u2018accelerator\u2019 circuits such as our implementation of SHA256.\nFast cryptography is sufficient to support many \u2018DeFi\u2019 applications.\nFor many other applications, it is possible to perform most computation on the host (outside the zkVM) and then verify the results in the zkVM."})]}),"\n",(0,t.jsx)(i.h2,{id:"the-risc-zero-circuits",children:"The RISC Zero Circuits"}),"\n",(0,t.jsx)("a",{class:"anchor",id:"dont-write-circuits"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: Do I need to write a ZK circuit to build on RISC Zero?"})}),(0,t.jsxs)(i.p,{children:["A: No!\nWe take care of the circuit building so that you can focus on building applications.\nEverything you'll need to build is outlined in the ",(0,t.jsx)("a",{href:"https://dev.risczero.com/zkvm",children:"zkVM docs"})," and the ",(0,t.jsx)("a",{href:"https://dev.risczero.com/bonsai",children:"Bonsai docs"}),"."]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"circuits"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: What do RISC Zero's circuits do?"})}),(0,t.jsx)(i.p,{children:"RISC Zero has three circuits: one that executes RISC-V code, one that's used for recursion, and one that is used for a STARK-to-SNARK conversion."}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The RISC-V circuit receives an ELF binary file as a public input and private inputs from the host; the output of the RISC-V circuit is a receipt."}),"\n",(0,t.jsx)(i.li,{children:"The recursion circuit is specialized to prove the verification of RISC Zero receipts; this circuit is used in order to compress many RISC Zero receipts into a single receipt."}),"\n",(0,t.jsx)(i.li,{children:"The STARK-to-SNARK circuit is used to translate a STARK proof into a SNARK proof, which enables on-chain verification."}),"\n"]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"building-our-circuit"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: How did you make your RISC-V circuit?"})}),(0,t.jsx)(i.p,{children:"A: The RISC-V circuit is found in step.cpp.inc and is generated by the make-circuit program. It consists of:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Code to emulate RISC-V, including decoding RISC-V instructions and constructing the execution trace."}),"\n",(0,t.jsx)(i.li,{children:"Code to evaluate the constraint polynomials that check the execution trace."}),"\n",(0,t.jsx)(i.li,{children:"Auxiliary data to support structures such as \u2018taps\u2019."}),"\n"]}),(0,t.jsx)(i.p,{children:"Because the data structures supporting all three of these need to match very carefully, we created a \u2018circuit compiler\u2019 program that generates code for all three of these systems."})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(i.h2,{id:"security",children:"Security"}),"\n",(0,t.jsx)("a",{class:"anchor",id:"image-id-security"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q:\nHow can we use the ImageID to determine if an application is altered before execution?"})}),(0,t.jsxs)(i.p,{children:["A: The ImageID is determined from an application's compiled binary (ELF),  explained in detail ",(0,t.jsx)("a",{href:"https://dev.risczero.com/faq#image-id",children:"above."})]}),(0,t.jsx)(i.p,{children:"Someone wishing to confirm that a receipt corresponds to specific Rust source code can locally reproduce a binary targeting the RISC Zero zkVM using our reproducible build tool and verify that the resulting ImageID matches the ImageID in the receipt."}),(0,t.jsxs)(i.p,{children:["For example, building our ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/risc0/zkvm/methods/guest",children:"builtin zkVM test functions"}),":"]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"cargo risczero build --manifest-path risc0/zkvm/methods/guest/Cargo.toml\n"})}),(0,t.jsx)(i.p,{children:"will produce similar output to:"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'ELFs ready at:\nImageID: 417778745b43c82a20db33a55c2b1d6e0805e0fa7eec80c9654e7321121e97af - "target/riscv-guest/riscv32im-risc0-zkvm-elf/docker/risc0_zkvm_methods_guest/multi_test"\nImageID: c7c399c25ecf26b79e987ed060efce1f0836a594ad1059b138b6ed2f123dad38 - "target/riscv-guest/riscv32im-risc0-zkvm-elf/docker/risc0_zkvm_methods_guest/hello_commit"\nImageID: a51a4b747f18b7e5f36a016bdd6f885e8293dbfca2759d6667a6df8edd5f2489 - "target/riscv-guest/riscv32im-risc0-zkvm-elf/docker/risc0_zkvm_methods_guest/slice_io"\n'})}),(0,t.jsxs)(i.p,{children:["These ImageIDs will stay consistent across all builds due to a containerized process working together with Cargo working norms. You can find more about our reproducible builds and how we test them in this ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/pull/799",children:"pull request."})]})]}),"\n",(0,t.jsx)("a",{class:"anchor",id:"tampering-with-code"}),"\n",(0,t.jsxs)(s,{closed:!0,children:[(0,t.jsx)("summary",{children:(0,t.jsx)(i.p,{children:"Q: If the guest zkVM lives on the host machine, can\u2019t the host still tamper with the application?"})}),(0,t.jsx)(i.p,{children:"A: Like other zk-STARKs, RISC Zero\u2019s implementation makes it cryptographically infeasible to generate an invalid receipt:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"If the binary is modified, then the receipt\u2019s seal will not match the ImageID of the expected binary."}),"\n",(0,t.jsx)(i.li,{children:"If the execution is modified, then the execution trace will be invalid."}),"\n",(0,t.jsx)(i.li,{children:"If the output is modified, then the journal\u2019s hash will not match the hash recorded in the receipt."}),"\n"]})]})]})}function l(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>o});var t=s(7294);const r={},n=t.createContext(r);function o(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);