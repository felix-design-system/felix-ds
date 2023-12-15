import{M as m,U as p,b as a}from"./chunk-HLWAVYOI-e39d2bdf.js";import{T as n,a as o}from"./Tooltip-2876fb82.js";import{T as u,S as l}from"./Title-019f2956.js";import{j as e}from"./jsx-runtime-4ca860c5.js";import{u as c}from"./index-e744116c.js";import"./iframe-2bc0027f.js";import"../sb-preview/runtime.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-0f8fd3cb.js";import"./index-2801d3c9.js";import"./chunk-ZGA76URP-2b404cd8.js";import"./index-11d98b33.js";import"./extends-98964cd2.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function d(r){const t=Object.assign({pre:"pre",code:"code"},c(),r.components);return n||s("Tabs",!1),n.Content||s("Tabs.Content",!0),n.List||s("Tabs.List",!0),n.Root||s("Tabs.Root",!0),n.Trigger||s("Tabs.Trigger",!0),e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Getting started/Installation"}),`
`,e.jsx(p,{children:e.jsxs("div",{className:"dark","data-mode":"dark",children:[e.jsx(u,{children:"Installation"}),e.jsx(o,{size:"lg",children:"Learn how to install and use Felix DS in your app."}),e.jsx(l,{children:"Install package"}),e.jsx(o,{children:"To install Felix DS, run one of the following commands:"}),e.jsxs(n.Root,{defaultValue:"npm","data-mode":"dark",className:"border border-neutral-700",children:[e.jsxs(n.List,{children:[e.jsx(n.Trigger,{value:"npm",children:"npm"}),e.jsx(n.Trigger,{value:"yarn",children:"yarn"}),e.jsx(n.Trigger,{value:"pnpm",children:"pnpm"})]}),e.jsx(n.Content,{value:"npm",children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @felix-ds/react@latest
`})})}),e.jsx(n.Content,{value:"yarn",asChild:!0,children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`yarn add @felix-ds/react@latest
`})})}),e.jsx(n.Content,{value:"pnpm",asChild:!0,children:e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`pnpm add @felix-ds/react@latest
`})})})]}),e.jsx(l,{children:"Import global style"}),e.jsxs(o,{children:["You need to add ",e.jsx(t.code,{children:"global.css"}),` style into your application. If you are using
webpack and CSS, CSS Modules or Saas, import global.css file into your CSS
file:`]}),e.jsx(a,{language:"css",dark:!0,code:`
@import "@felix-ds/react/dist/global.css";
`}),e.jsx(o,{children:`If you are using Vite or Next.js framework, just import CSS directly into
your main JSX/TSX file:`}),e.jsx(a,{language:"tsx",dark:!0,code:'import "@felix-ds/react/dist/global.css"'}),e.jsx(o,{children:"For other frameworks, see the documentation about how to import CSS."}),e.jsx(l,{children:"Use TailwindCSS"}),e.jsx(o,{children:`It's no required to use TailwindCSS in your application, but if you want
to use it, you need to extend the default theme configuration of Felix DS into
your Tailwind configuration file.`}),e.jsxs(o,{children:["To do this, change ",e.jsx(t.code,{children:"tailwindcss.config.ts"})," with the follow content:"]}),e.jsx(a,{language:"ts",dark:!0,type:"code",code:`import { tailwindConfig } from '@felix-ds/react'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: tailwindConfig.theme,
  },
}
`}),e.jsx(o,{children:"To override all default configuration (recommended):"}),e.jsx(a,{language:"ts",dark:!0,type:"code",code:`import { tailwindConfig } from '@felix-ds/react'

export default {
  content: ['./src/**/*.tsx'],
  theme: tailwindConfig.theme,
}
`})]})})]})}function x(r={}){const{wrapper:t}=Object.assign({},c(),r.components);return t?e.jsx(t,{...r,children:e.jsx(d,{...r})}):d(r)}function s(r,t){throw new Error("Expected "+(t?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}const g=()=>{throw new Error("Docs-only story")};g.parameters={docsOnly:!0};const i={title:"Getting started/Installation",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:x};const E=["__page"];export{E as __namedExportsOrder,g as __page,i as default};
