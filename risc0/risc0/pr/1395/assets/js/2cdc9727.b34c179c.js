"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3337],{2292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=n(5893),i=n(1151);const s={},o="dev-mode",d={id:"zkvm/dev-mode",title:"dev-mode",description:"We support a development-only mode for standalone risc0 projects in which code",source:"@site/api/zkvm/dev-mode.md",sourceDirName:"zkvm",slug:"/zkvm/dev-mode",permalink:"/website-preview/risc0/risc0/pr/1395/api/next/zkvm/dev-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/dev-mode.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"zkVM Quick Start",permalink:"/website-preview/risc0/risc0/pr/1395/api/next/zkvm/quickstart"},next:{title:"Installation",permalink:"/website-preview/risc0/risc0/pr/1395/api/next/zkvm/install"}},c={},a=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dev-mode",children:"dev-mode"}),"\n",(0,r.jsx)(t.p,{children:"We support a development-only mode for standalone risc0 projects in which code\nis executed but not proven. This adds efficiency to the development cycle during\ndevelopment stages where proving correct execution is not yet critical."}),"\n",(0,r.jsxs)(t.p,{children:["A risc0 project, when run in dev-mode by setting the ",(0,r.jsx)(t.code,{children:"RISC0_DEV_MODE"}),"\nenvironment variable, supports (",(0,r.jsx)(t.a,{href:"https://docs.rs/risc0-zkvm/*/risc0_zkvm/enum.InnerReceipt.html#variant.Fake",children:"fake"}),") receipt creation and pass-through\n'verification' function, so that dev-mode may be switched on and off at runtime\nwithout impacting project workflows. In particular, receipts generated in\ndev-mode still include public outputs written to the ",(0,r.jsx)(t.a,{href:"/terminology#journal",children:"journal"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"However, because the proving process is bypassed, receipts generated when\ndev-mode is enabled will fail a standard receipt verification check. Only when\nthe verifier is also run with dev-mode enabled will it perform pass-through\n'verification' of the fake receipt."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["To keep this mode out of production environments, we recommend building\nproduction-ready projects with the ",(0,r.jsx)(t.code,{children:"disable-dev-mode"})," ",(0,r.jsx)(t.a,{href:"https://github.com/risc0/risc0/#feature-flags",children:"feature flag"}),"; it is\nabsent by default."]})}),"\n",(0,r.jsxs)(t.p,{children:["Only projects built without this flag may run dev-mode. Enabling dev-mode\nrequires also that the environment variable ",(0,r.jsx)(t.code,{children:"RISC0_DEV_MODE"})," be set."]}),"\n",(0,r.jsxs)(t.p,{children:["As additional protection, if the dev-mode environment variable is present\nalongside a project built with the ",(0,r.jsx)(t.code,{children:"disable-dev-mode"})," feature flag, the project\nwill panic."]}),"\n",(0,r.jsx)(t.p,{children:"For further reference, take a look at the table below."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.code,{children:"disable-dev-mode"})," off"]}),(0,r.jsxs)(t.th,{children:[(0,r.jsx)(t.code,{children:"disable-dev-mode"})," on"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"RISC0_DEV_MODE=true"})}),(0,r.jsx)(t.td,{children:"dev-mode activated"}),(0,r.jsx)(t.td,{children:"Prover panic"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"RISC0_DEV_MODE=false"})," or unset"]}),(0,r.jsx)(t.td,{children:"Default project behavior"}),(0,r.jsx)(t.td,{children:"Default project behavior"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);