"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9920],{4286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(5893),o=n(1151);const r={sidebar_position:2},c="What is an Execution Trace?",s={id:"proof-system/what_is_a_trace",title:"What is an Execution Trace?",description:"When a piece of code runs on a machine, the execution trace is a complete",source:"@site/docs/proof-system/what_is_a_trace.md",sourceDirName:"proof-system",slug:"/proof-system/what_is_a_trace",permalink:"/website-preview/risc0/risc0/pr/1188/proof-system/what_is_a_trace",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},i={},h=[];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"what-is-an-execution-trace",children:"What is an Execution Trace?"}),"\n",(0,a.jsxs)(t.p,{children:["When a piece of code runs on a machine, the ",(0,a.jsx)(t.strong,{children:"execution trace"})," is a complete\nrecord of the computation: a snapshot of the full state of the machine at each\nclock cycle of the computation."]}),"\n",(0,a.jsx)(t.p,{children:"It's typical to write an execution trace as a rectangular array, where each row\nshows the complete state of the machine at a given moment in time, and each\ncolumn shows a temporal record of some particular aspect of the computation\n(say, the value stored in a particular RISC-V register) at each clock cycle. A\nline-by-line analysis of the trace allows for a computational audit with respect\nto the program instructions and the underlying computer architecture."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"RISC Zero's computational receipts use cutting-edge technology to audit an execution trace while preserving computational privacy."})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.em,{children:["The core of a RISC Zero receipt is a\n",(0,a.jsx)(t.a,{href:"/website-preview/risc0/risc0/pr/1188/reference-docs/about-starks",children:"zk-STARK"}),"; for a more technical description\nof how we turn an execution trace into a zk-STARK, see the ",(0,a.jsx)(t.a,{href:"./proof-system-sequence-diagram",children:"proof system\nsequence diagram"})," and our ",(0,a.jsx)(t.a,{href:"./stark-by-hand",children:"STARK by\nHand"})," explainer."]})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var a=n(7294);const o={},r=a.createContext(o);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);