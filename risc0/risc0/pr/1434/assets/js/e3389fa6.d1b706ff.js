"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9621],{8284:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(5893),o=n(1151);const r={},s="Guest Profiling Guide",a={id:"zkvm/profiling",title:"Guest Profiling Guide",description:"In this guide, we'll explore how to effectively profile guest code within the",source:"@site/api/zkvm/profiling.md",sourceDirName:"zkvm",slug:"/zkvm/profiling",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/profiling",draft:!1,unlisted:!1,editUrl:"https://github.com/risc0/risc0/edit/main/website/api/zkvm/profiling.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Cryptography Acceleration",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/acceleration"},next:{title:"zkVM Technical Specification",permalink:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/zkvm-specification"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Usage",id:"usage",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Running",id:"step-2-running",level:3},{value:"Step 3: Visualization",id:"step-3-visualization",level:3},{value:"Exploring the Example Profile",id:"exploring-the-example-profile",level:2}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"guest-profiling-guide",children:"Guest Profiling Guide"}),"\n",(0,t.jsx)(i.p,{children:"In this guide, we'll explore how to effectively profile guest code within the\nRISC Zero zkVM, offering insights and tools to improve performance."}),"\n",(0,t.jsxs)(i.p,{children:["We'll be using a guest program with three different implementations of the\nFibonacci sequence calculation to provide a base profile to explore. You can\nfind all the code used as example in the ",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/examples/profiling",children:"profiling example"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"background",children:"Background"}),"\n",(0,t.jsxs)(i.p,{children:["Profiling tools, like ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"pprof"})," and ",(0,t.jsx)(i.a,{href:"https://perf.wiki.kernel.org/index.php/Main_Page",children:"perf"}),", allow collecting performance\ninformation over the entire execution of your program, and help create\nvisualizations for the performance of your program. RISC Zero has experimental\nsupport for generating pprof files for cycle counts."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://nikhilism.com/post/2018/sampling-profiler-internals-introduction/",children:"Sampling CPU profilers"}),', as implemented by pprof and perf, provide a\nview of where your program is spending its time. It does so by recording the\ncurrent call stack at a sampling interval. RISC Zero provides a "sampling" ',(0,t.jsx)(i.sup,{children:(0,t.jsx)(i.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\nCPU profiler for guest execution."]}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.h3,{id:"step-1-prerequisites",children:"Step 1: Prerequisites"}),"\n",(0,t.jsxs)(i.p,{children:["First, follow the ",(0,t.jsx)(i.a,{href:"/website-preview/risc0/risc0/pr/1434/api/next/zkvm/install",children:"installation guide"})," if you don't already have the\nRISC Zero tools installed."]}),"\n",(0,t.jsxs)(i.p,{children:["Additionally, you will need to ",(0,t.jsx)(i.a,{href:"https://go.dev/doc/install",children:"install Go"}),", which bundles with\nit the ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"pprof"})," tool."]}),"\n",(0,t.jsx)(i.h3,{id:"step-2-running",children:"Step 2: Running"}),"\n",(0,t.jsx)(i.p,{children:"Run the Fibonacci profiling example with:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"RISC0_PPROF_OUT=./profile.pb cargo run\n"})}),"\n",(0,t.jsxs)(i.p,{children:["The above command will run the Fibonacci computation for 1000 iterations and\nwrite the profiling output to ",(0,t.jsx)(i.code,{children:"profile.pb"}),". Use the environment variable\n",(0,t.jsx)(i.code,{children:"RISC0_PPROF_OUT"})," to set to the desired output path for the profiling data."]}),"\n",(0,t.jsx)(i.h3,{id:"step-3-visualization",children:"Step 3: Visualization"}),"\n",(0,t.jsxs)(i.p,{children:["To visualize the profile using ",(0,t.jsx)(i.code,{children:"pprof"}),", run:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"go tool pprof -http=127.0.0.1:8000 profile.pb\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Then navigate to ",(0,t.jsx)(i.a,{href:"http://localhost:8000",children:"http://localhost:8000"})," in your browser."]}),"\n",(0,t.jsxs)(i.p,{children:["You can find much more information about how to use ",(0,t.jsx)(i.code,{children:"pprof"})," in the ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"official\npprof documentation"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"exploring-the-example-profile",children:"Exploring the Example Profile"}),"\n",(0,t.jsxs)(i.p,{children:["There are three different Fibonacci sequence calculation methods provided in the\n",(0,t.jsx)(i.a,{href:"https://github.com/risc0/risc0/tree/main/examples/profiling",children:"profiling example"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fibonacci_1"}),": A basic iterative method."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fibonacci_2"}),": An optimized iterative method that attempts to batch\ncomputation."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"fibonacci_3"}),": A matrix exponentiation approach, which is a fast method to\ncompute Fibonacci numbers."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The guest code reads the number of iterations from the host, computes the\nFibonacci number using all the above methods, and finally commits the answer\nback to the host."}),"\n",(0,t.jsxs)(i.p,{children:["Below is the example ",(0,t.jsx)(i.a,{href:"https://www.brendangregg.com/FlameGraphs/cpuflamegraphs.html",children:"flamegraph"})," you will see by opening\n",(0,t.jsx)(i.a,{href:"http://localhost:8000/ui/flamegraph",children:"http://localhost:8000/ui/flamegraph"}),",\nafter running the ",(0,t.jsx)(i.a,{href:"#usage",children:"steps above"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"flamegraph of Fibonacci profiling example",src:n(2556).Z+"",width:"1753",height:"546"})}),"\n",(0,t.jsxs)(i.p,{children:["When you visualize the profiling data, you can see the relative performance in\nterms of ",(0,t.jsx)(i.a,{href:"/terminology#clock-cycles",children:"cycle count"})," of the three Fibonacci implementations. This can be\nhelpful in understanding the efficiency of various algorithms and their\nperformance implications."]}),"\n",(0,t.jsx)(i.admonition,{title:"Explore",type:"tip",children:(0,t.jsxs)(i.p,{children:["Use the pprof web interface to compare the performance of the 3 Fibonacci\nimplementations. Refer to the ",(0,t.jsx)(i.a,{href:"https://github.com/google/pprof",children:"pprof docs"})," for more information about the\nweb interface."]})}),"\n",(0,t.jsxs)(i.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(i.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{id:"user-content-fn-1",children:["\n",(0,t.jsx)(i.p,{children:"Here \u201csampling\u201d is in quotes because the profiler actually captures the call stack at every cycle of program execution. Capturing a call stack on every cycle of execution is not done in most programs on physical CPUs for a few reasons:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"It would be cost prohibitive to do so for all but quite short program executions."}),"\n",(0,t.jsx)(i.li,{children:"Introducing such heavy profiling would actually alter the performance characteristics in significant ways."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["In zkVM execution, executions are generally short and all execution is synchronous and is not subject to any deviations in behavior due to measurement overhead. ",(0,t.jsx)(i.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},2556:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/profiling_flamegraph-b52669e0138e517bc2197de95d976a9e.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>s});var t=n(7294);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);