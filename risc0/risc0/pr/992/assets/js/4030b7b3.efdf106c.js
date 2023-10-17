"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={},o="Contributor's Guide",s={unversionedId:"contributors-guide",id:"contributors-guide",title:"Contributor's Guide",description:"This page describes guidelines for community contributions to this website; you may also be interested in contributing to the main project codebase.",source:"@site/docs/contributors-guide.md",sourceDirName:".",slug:"/contributors-guide",permalink:"/website-preview/risc0/risc0/pr/992/next/contributors-guide",draft:!1,editUrl:"https://github.com/risc0/website/edit/main/docs/contributors-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"GettingStartedSidebar",previous:{title:"About Reed Solomon Codes",permalink:"/website-preview/risc0/risc0/pr/992/next/reference-docs/about-rs-codes"}},l={},u=[{value:"How To Contribute",id:"how-to-contribute",level:2},{value:"Style Guidelines",id:"style-guidelines",level:2},{value:"Terminology Conventions",id:"terminology-conventions",level:2},{value:"Navbar and Sidebars",id:"navbar-and-sidebars",level:2},{value:"Reference Docs",id:"reference-docs",level:3},{value:"Explainer Docs",id:"explainer-docs",level:3},{value:"Thank you!",id:"thank-you",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributors-guide"},"Contributor's Guide"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This page describes guidelines for community contributions to this ",(0,r.kt)("a",{parentName:"em",href:"https://www.github.com/risc0/website"},"website"),"; you may also be interested in contributing to the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/risc0/risc0"},"main project codebase"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"RISC Zero welcomes community participation!")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Make suggestions or report bugs via ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/risc0/website/issues"},"GitHub issues")),(0,r.kt)("li",{parentName:"ul"},"Contribute website content or give feedback on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/risc0/website/pulls"},"open pull requests")),(0,r.kt)("li",{parentName:"ul"},"Contribute to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0"},"main zkVM project")),(0,r.kt)("li",{parentName:"ul"},"Contribute to our tutorials and how-to guides for our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/tree/main/templates"},"templates")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/risc0/risc0/tree/v0.18.0/examples"},"Rust examples")),(0,r.kt)("li",{parentName:"ul"},"Ask questions on ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/risczero"},"Discord")))),(0,r.kt)("h2",{id:"how-to-contribute"},"How To Contribute"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All changes to this website are managed through GitHub pull requests, so you'll need a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub Account")," to contribute."),(0,r.kt)("li",{parentName:"ul"},"You can suggest an edit directly via the ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit this Page")," button at the bottom of each page."),(0,r.kt)("li",{parentName:"ul"},"To create a new page, you can use the ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/risc0/website"},"GitHub browser interface"),"; the content is in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/pages")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"docs"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Please read about ",(0,r.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/next/contributors-guide#navbar-and-sidebars"},"the navbar and sidebars")," and ",(0,r.kt)("a",{parentName:"li",href:"/website-preview/risc0/risc0/pr/992/next/contributors-guide#categories-of-documentation"},"categories of documentation")," before creating a new page."))),(0,r.kt)("li",{parentName:"ul"},"If you want to clone the repository and work locally, you may want to check out the ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation"},"Docusaurus documentation"),".\nWe like to use ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn start")," to run a local build, especially when we're working with changes that involve links or sidebars.")),(0,r.kt)("h2",{id:"style-guidelines"},"Style Guidelines"),(0,r.kt)("p",null,"Our objective in organizing and creating website content is that anyone who finds their way to any RISC Zero content is able to rapidly find their way to the material suits their needs."),(0,r.kt)("p",null,"In order to achieve this objective, we rely on:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Clear Purpose"),": We aim for single-purpose docs, and we head each document with a succinct statement of purpose and pointers to related content.\nWe use roadmaps, signposting, headings, and text formatting to guide the reader's attention toward the purpose of the doc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Keep it Simple"),": We write short sentences with minimal superfluous language.\nWe keep content digestible by splitting long docs into smaller chunks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Progressive Disclosure"),": Our landing pages are simple and clear.\nBoth at the level of site-organization and individual doc-organization, we present a bird's eye view first with opt-in paths toward higher levels of detail and technicality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Lots of Pointers"),": We keep materials succinct through extensive use of pointers on modular, single-purpose components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Consistent and Accessible Terminology"),": We are diligent about using our official terminology as defined and using precise language as much as possible.\nAt the same time, we minimize our use of technical jargon, taking care to provide reference pages to pre-requisite knowledge as appropriate."))),(0,r.kt)("h2",{id:"terminology-conventions"},"Terminology Conventions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/website-preview/risc0/risc0/pr/992/next/terminology"},(0,r.kt)("inlineCode",{parentName:"a"},"RISC Zero Official Terminology"))),(0,r.kt)("p",null,"Our terminology and naming conventions are subject to ongoing evaluation, and we encourage conversation and questions on these topics.\nPlease let us know via a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/risc0/website/issues"},(0,r.kt)("inlineCode",{parentName:"a"},"GitHub issue"))," when you encounter terms that don't seem quite right."),(0,r.kt)("h2",{id:"navbar-and-sidebars"},"Navbar and Sidebars"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The navbar is defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"docusaurus.config.js"),". Any changes require manual configuration.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/docusaurus-config"},"How to edit the navbar")))),(0,r.kt)("li",{parentName:"ul"},"The sidebars are defined in ",(0,r.kt)("inlineCode",{parentName:"li"},"sidebars.js"),". Any new docs require manual configuration.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/sidebar"},"How to edit the sidebar")),(0,r.kt)("li",{parentName:"ul"},"The default configuration (and our current configuration) is that ",(0,r.kt)("inlineCode",{parentName:"li"},"pages")," do not have sidebars and ",(0,r.kt)("inlineCode",{parentName:"li"},"docs")," do.")))),(0,r.kt)("h3",{id:"reference-docs"},"Reference Docs"),(0,r.kt)("p",null,"We typically organize reference docs according to the following sections; we use ",(0,r.kt)("inlineCode",{parentName:"p"},"About NTTs")," as a template."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Topic")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Topic is used to ","[concise explanation of relevance to RISC Zero]")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Basic Function"),(0,r.kt)("li",{parentName:"ul"},"Content 1"),(0,r.kt)("li",{parentName:"ul"},"Content 2"),(0,r.kt)("li",{parentName:"ul"},"Content 3"),(0,r.kt)("li",{parentName:"ul"},"Suggested Reading"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Changes to this organization can be proposed for discussion via a ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/risc0/website/issues"},"GitHub issue")," or proposed for action via a PR on this page.")),(0,r.kt)("h3",{id:"explainer-docs"},"Explainer Docs"),(0,r.kt)("p",null,"Our explainer docs are currently split into ",(0,r.kt)("inlineCode",{parentName:"p"},"zkVM Explainers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZKP Explainers"),".\nExplainers contain clearly articulated goals in the header, as well as pointers to related content."),(0,r.kt)("h2",{id:"thank-you"},"Thank you!"),(0,r.kt)("p",null,"We're excited about the engagement we've seen so far, and we're looking forward to building a vibrant community together."),(0,r.kt)("h2",{id:"questions"},"Questions?"),(0,r.kt)("p",null,"Find us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/risczero"},"Discord"),"."))}d.isMDXComponent=!0}}]);