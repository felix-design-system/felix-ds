import{j as e}from"./jsx-runtime-4ca860c5.js";import{f as N,a as U}from"./Tooltip-2876fb82.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-2801d3c9.js";function a({size:r=32,fill:M}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:M??"inherit",viewBox:"0 0 256 256",children:e.jsx("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"})})}try{a.displayName="UserIcon",a.__docgenInfo={description:"",displayName:"UserIcon",props:{size:{defaultValue:{value:"32"},description:"",name:"size",required:!1,type:{name:"number"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"string"}}}}}catch{}const B={title:"Inputs/TextInput",component:N},s={args:{placeholder:"Type your name",prefix:"",fullWidth:!1,disabled:!1}},o={args:{prefix:"instagram.com/",placeholder:"your-username"}},t={args:{icon:e.jsx(a,{size:16})}},i={args:{icon:e.jsx(a,{size:16}),prefix:"instagram.com/"}},c={args:{type:"password",placeholder:"Password",helperText:"Minimum of 7 characters"}},n={decorators:[r=>e.jsxs("div",{children:[e.jsx(U,{className:"mb-1",children:"Email"}),e.jsx(r,{})]})],args:{type:"email",value:"wrong.email.com",icon:e.jsx(a,{size:16}),error:!0,placeholder:"Password",helperText:"Type a valid email"}},l={args:{placeholder:"Not allowed",disabled:!0}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your name',
    prefix: '',
    fullWidth: false,
    disabled: false
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    prefix: 'instagram.com/',
    placeholder: 'your-username'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,f,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    icon: <UserIcon size={16} />
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,T,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: <UserIcon size={16} />,
    prefix: 'instagram.com/'
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var W,v,_;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Password',
    helperText: 'Minimum of 7 characters'
  }
}`,...(_=(v=c.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var j,b,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <div>
        <Text className="mb-1">Email</Text>
        <Story />
      </div>],
  args: {
    type: 'email',
    value: 'wrong.email.com',
    icon: <UserIcon size={16} />,
    error: true,
    placeholder: 'Password',
    helperText: 'Type a valid email'
  }
}`,...(S=(b=n.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var P,z,E;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Not allowed',
    disabled: true
  }
}`,...(E=(z=l.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const C=["Default","WithPrefix","WithIcon","WithIconAndPrefix","WithHelperText","WithErrorMessage","Disabled"];export{s as Default,l as Disabled,n as WithErrorMessage,c as WithHelperText,t as WithIcon,i as WithIconAndPrefix,o as WithPrefix,C as __namedExportsOrder,B as default};
