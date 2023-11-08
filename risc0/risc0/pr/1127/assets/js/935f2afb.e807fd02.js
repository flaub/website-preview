"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Study Club","href":"/website-preview/risc0/risc0/pr/1127/studyclub","docId":"studyclub","unlisted":false},{"type":"link","label":"YouTube","href":"https://youtube.com/@risczero"},{"type":"link","label":"Education Database","href":"https://risczero.notion.site/5a335a1d29b44cb48c44b36ae66f366f?v=95cda72e39d3403fbfb59884afb0045d&pvs=4"},{"type":"category","label":"Proof System","collapsed":false,"items":[{"type":"link","label":"STARK by hand","href":"/website-preview/risc0/risc0/pr/1127/proof-system/stark-by-hand","docId":"proof-system/stark-by-hand","unlisted":false},{"type":"link","label":"Sequence Diagram","href":"/website-preview/risc0/risc0/pr/1127/proof-system/proof-system-sequence-diagram","docId":"proof-system/proof-system-sequence-diagram","unlisted":false},{"type":"link","label":"Proof System Rust Crate","href":"https://docs.rs/risc0-zkp/*/risc0_zkp/"},{"type":"link","label":"ZKP Whitepaper","href":"https://www.risczero.com/proof-system-in-detail.pdf"}],"collapsible":true,"href":"/website-preview/risc0/risc0/pr/1127/proof-system/"},{"type":"category","label":"Background Reading","items":[{"type":"link","label":"Arithmetic Circuits","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-arithmetic-circuits","docId":"reference-docs/about-arithmetic-circuits","unlisted":false},{"type":"link","label":"Finite Fields","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-finite-fields","docId":"reference-docs/about-finite-fields","unlisted":false},{"type":"link","label":"FRI Protocol","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-fri","docId":"reference-docs/about-fri","unlisted":false},{"type":"link","label":"PLONK","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-plonk","docId":"reference-docs/about-plonk","unlisted":false},{"type":"link","label":"STARKs","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-starks","docId":"reference-docs/about-starks","unlisted":false},{"type":"link","label":"Number Theoretic Transforms","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-ntts-and-fourier","docId":"reference-docs/about-ntts-and-fourier","unlisted":false},{"type":"link","label":"RISC-V","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-risc-v","docId":"reference-docs/about-risc-v","unlisted":false},{"type":"link","label":"Reed Solomon Codes","href":"/website-preview/risc0/risc0/pr/1127/reference-docs/about-rs-codes","docId":"reference-docs/about-rs-codes","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Contribute to RISC Zero","items":[{"type":"link","label":"Contributor guide","href":"/website-preview/risc0/risc0/pr/1127/contributors-guide","docId":"contributors-guide","unlisted":false},{"type":"link","label":"Risc Zero Github","href":"https://github.com/risc0/risc0"}],"collapsed":true,"collapsible":true}]},"docs":{"contributors-guide":{"id":"contributors-guide","title":"Contributor\'s Guide","description":"This page describes guidelines for community contributions to this website; you may also be interested in contributing to the main project codebase.","sidebar":"docs"},"faq":{"id":"faq","title":"FAQ","description":"---"},"proof-system/proof-system":{"id":"proof-system/proof-system","title":"Proof System Overview","description":"When the RISC Zero [zkVM] executes, it produces a [Receipt] that serves as a proof of validity of a given [Session].","sidebar":"docs"},"proof-system/proof-system-sequence-diagram":{"id":"proof-system/proof-system-sequence-diagram","title":"Proof System Sequence Diagram and Spec","description":"_The implementation in code for the RISC Zero prover can be seen here.","sidebar":"docs"},"proof-system/stark-by-hand":{"id":"proof-system/stark-by-hand","title":"STARK by Hand","description":"When the RISC Zero zkVM executes, it generates a receipt that allows third-parties to authenticate the validity of the execution.","sidebar":"docs"},"proof-system/what_is_a_trace":{"id":"proof-system/what_is_a_trace","title":"What is an Execution Trace?","description":"When a piece of code runs on a machine, the execution trace is a complete"},"reference-docs/about-arithmetic-circuits":{"id":"reference-docs/about-arithmetic-circuits","title":"About Arithmetic Circuits","description":"Arithmetic circuits consist of a collection of wires and gates, where the wires hold elements of a finite field and each gate computes either finite field addition or finite field multiplication.","sidebar":"docs"},"reference-docs/about-finite-fields":{"id":"reference-docs/about-finite-fields","title":"About Finite Fields","description":"_RISC Zero\'s computational receipts are built by converting an assertion of computational integrity into an assertion about polynomials over finite fields.","sidebar":"docs"},"reference-docs/about-finite-fields-exercises":{"id":"reference-docs/about-finite-fields-exercises","title":"About Finite Fields","description":"This page contains a few practice problems to test your understanding of finite fields."},"reference-docs/about-fri":{"id":"reference-docs/about-fri","title":"About the FRI Protocol","description":"The FRI (Fast, Reed-Solomon Interactive Oracle Proof of Proximity) protocol is the final component of RISC Zero\'s argument of computational integrity.","sidebar":"docs"},"reference-docs/about-ntts-and-fourier":{"id":"reference-docs/about-ntts-and-fourier","title":"About Number Theoretic Transforms","description":"Number theoretic transforms (NTTs) and inverse number theoretic transforms (iNTTs) are a mechanism for converting between a coefficient representation and an evaluation representation of a given polynomial.","sidebar":"docs"},"reference-docs/about-plonk":{"id":"reference-docs/about-plonk","title":"About PLONK and PLOOKUP","description":"The PLONK paper introduced an efficient technique for enforcing the validity of memory operations in arguments of computational integrity.","sidebar":"docs"},"reference-docs/about-risc-v":{"id":"reference-docs/about-risc-v","title":"About RISC-V","description":"RISC-V is a minimal, modular Von Neumann architecture.","sidebar":"docs"},"reference-docs/about-rs-codes":{"id":"reference-docs/about-rs-codes","title":"About Reed Solomon Codes","description":"Reed Solomon codes (RS codes) are a family of error correcting codes based on polynomials over finite fields.","sidebar":"docs"},"reference-docs/about-starks":{"id":"reference-docs/about-starks","title":"About STARKs","description":"The seal on a RISC Zero receipt is generated using a zk-STARK: a zero knowledge, scalable, transparent argument of knowledge.","sidebar":"docs"},"studyclub":{"id":"studyclub","title":"Study Club","description":"RISC Zero\'s Study Club sessions aim to introduce the pre-requisite concepts necessary to understand our technology.","sidebar":"docs"},"terminology":{"id":"terminology","title":"Key Terminology","description":"Circuit"}}}')}}]);