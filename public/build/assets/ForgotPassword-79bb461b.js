import{T as u,o as r,c as d,w as i,a as t,u as s,Z as c,f,t as p,g as _,b as a,d as w,n as g,e as y}from"./app-afc0a090.js";import{_ as b}from"./GuestLayout-a285033b.js";import{_ as x,a as k,b as h}from"./TextInput-5e48160f.js";import{P as V}from"./PrimaryButton-fa993a75.js";import"./ApplicationLogo-a4c752f3.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},N=["onSubmit"],P={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(S,l)=>(r(),d(b,null,{default:i(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(r(),f("div",B,p(o.status),1)):_("",!0),a("form",{onSubmit:y(m,["prevent"])},[a("div",null,[t(x,{for:"email",value:"Email"}),t(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",P,[t(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,N)]),_:1}))}};export{q as default};
