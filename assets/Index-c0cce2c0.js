import{ah as V,s as v,f as w,g as $,u as C,o as B,r as h,a as t,c as E,b as a,x as u,t as m,d,e as N,k as c,n as r,w as T,l as s,y as F,aa as b,J as M,a2 as R}from"./index-e698aeb1.js";const S={class:"auth"},D={class:"auth-conent"},I={class:"auth-conent-tabs-title"},P={class:"auth-conent-tabs-items"},U={class:"auth-conent-tabs-items-link-icon"},q={class:"auth-conent-form-title"},z={class:"wameed-form-grid",style:{"grid-template-columns":"auto"}},O={__name:"Index",setup(A){const _=V(),n=v(!1),f=w();$(),C(),B(()=>{});const e=v({id_type:"email",id_value:null}),g=()=>{_.forgetPassword(e.value).then(l=>{f.push({name:"confirmation-code",params:{lang:F.global.locale.value,token:_.getForgetPasswordToken},query:{email:e.value.id_value}})})};return(l,o)=>{const k=h("login-email-icon"),y=h("check-icon");return t(),E("main",S,[a("div",D,[a("div",{class:u(["auth-conent-tabs",n.value?"hide-tabs":""])},[a("h1",I,m(l.$t("login.login method")),1),a("ul",P,[a("li",{class:u(["auth-conent-tabs-items-link",e.value.id_type=="email"?"active":""]),onClick:o[0]||(o[0]=p=>{e.value.id_type="email",n.value=!0})},[a("span",U,[d(k)]),N(" "+m(l.$t("login.E-mail"))+" ",1),e.value.id_type=="email"?(t(),c(y,{key:0,class:"auth-conent-tabs-items-link-check"})):r("",!0)],2)])],2),a("div",{class:u(["auth-conent-form",n.value?"show-form":""])},[a("h1",q,m(e.value.id_type=="email"?l.$t("common.E-mail address"):l.$t("forms.Mobile number")),1),d(s(R),{class:"wameed-form",onOnClick:g},{default:T(({invalid:p})=>[a("div",z,[a("div",null,[e.value.id_type=="email"?(t(),c(s(b),{key:0,modelValue:e.value.id_value,"onUpdate:modelValue":o[1]||(o[1]=i=>e.value.id_value=i),id:"email",label:l.$t("forms.E-mail"),name:"email","prepen-icon":"login-email-2-icon",labelType:"floating",rules:"email",placeholder:""},null,8,["modelValue","label"])):r("",!0),e.value.id_type=="mobile_no"?(t(),c(s(b),{key:1,modelValue:e.value.id_value,"onUpdate:modelValue":o[2]||(o[2]=i=>e.value.id_value=i),id:"mobile_no",label:l.$t("forms.Mobile number"),name:"mobile_no","prepen-icon":"login-phone-2-icon",labelType:"floating",placeholder:""},null,8,["modelValue","label"])):r("",!0)])]),d(s(M),{classes:"wameed-form-submit",title:l.$t("common.Confirm"),disabled:p||!e.value.id_value,type:"submit"},null,8,["title","disabled"])]),_:1})],2)])])}}};export{O as default};
