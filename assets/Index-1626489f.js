import{f as z,g as E,s as d,u as F,o as M,r as i,a as c,c as T,b as o,x as p,t as n,d as t,e as g,k as h,n as _,w as y,l as s,y as k,Z as q,aj as J,aa as w,J as v,a2 as L}from"./index-e698aeb1.js";const O={class:"auth"},U={class:"auth-conent"},j={class:"auth-conent-tabs-title"},A={class:"auth-conent-tabs-items"},G={class:"auth-conent-tabs-items-link-icon"},Q={class:"auth-conent-form-title"},Z={class:"wameed-form-grid",style:{"grid-template-columns":"auto"}},H={class:"auth-conent-form-footer"},K={class:"create-account"},P={class:"create-account-text"},W={class:"social-login"},X=o("div",{class:"bg-line"},null,-1),Y={class:"social-text"},x={class:"auth-conent-form-footer-btns"},ae={__name:"Index",setup(ee){const b=z();E(),d(!1);const m=d(!1),{t:$}=F();M(()=>{});const a=d({type:"email",email:null,mobile_no:null}),I=()=>{b.push({name:"sign-up-data",params:{lang:k.global.locale.value},query:a.value.type=="email"?{email:a.value.email}:{mobile_no:a.value.mobile_no}})},V=()=>{var e="";localStorage.getItem("zahwaanVisitorDeviceID")?e=JSON.parse(localStorage.getItem("zahwaanVisitorDeviceID")):(e=q.methods.generateToken(20),localStorage.setItem("zahwaanVisitorDeviceID",JSON.stringify(e))),J().then(l=>{if(l.code){var u={code:l.code,state:"",provider:"google",device_id:e};authStore.signinBySocial(u).then(()=>{b.push({name:"home",params:{lang:k.global.locale.value}}).then(()=>{window.location.reload()})})}else proxy.$notificationMessage({title:$("error_messages.500"),type:"fail"})})},C=()=>{document.getElementById("appleid-signin").click()},S=e=>{console.log(e)},B=e=>{console.log(e)};return(e,l)=>{const u=i("login-email-icon"),D=i("check-icon"),N=i("RouterLink"),R=i("vue-apple-login");return c(),T("main",O,[o("div",U,[o("div",{class:p(["auth-conent-tabs",m.value?"hide-tabs":""])},[o("h1",j,n(e.$t("login.login method")),1),o("ul",A,[o("li",{class:p(["auth-conent-tabs-items-link",a.value.type=="email"?"active":""]),onClick:l[0]||(l[0]=f=>{a.value.type="email",m.value=!0})},[o("span",G,[t(u)]),g(" "+n(e.$t("login.E-mail"))+" ",1),a.value.type=="email"?(c(),h(D,{key:0,class:"auth-conent-tabs-items-link-check"})):_("",!0)],2)])],2),o("div",{class:p(["auth-conent-form",m.value?"show-form":""])},[o("h1",Q,n(e.$t("common.Create a new account")),1),t(s(L),{class:"wameed-form",onOnClick:I},{default:y(({invalid:f})=>[o("div",Z,[o("div",null,[a.value.type=="email"?(c(),h(s(w),{key:0,modelValue:a.value.email,"onUpdate:modelValue":l[1]||(l[1]=r=>a.value.email=r),id:"email",label:e.$t("forms.E-mail"),name:"email","prepen-icon":"login-email-2-icon",labelType:"floating",rules:"email|required",placeholder:""},null,8,["modelValue","label"])):_("",!0),a.value.type=="mobile_no"?(c(),h(s(w),{key:1,modelValue:a.value.mobile_no,"onUpdate:modelValue":l[2]||(l[2]=r=>a.value.mobile_no=r),id:"mobile_no",name:"mobile_no",label:e.$t("forms.Mobile number"),rules:"required","prepen-icon":"login-phone-2-icon",labelType:"floating",placeholder:""},null,8,["modelValue","label"])):_("",!0)])]),t(s(v),{classes:"wameed-form-submit",title:e.$t("common.Confirm"),disabled:f,type:"submit"},null,8,["title","disabled"])]),_:1}),o("div",H,[o("div",K,[o("div",P,[g(n(e.$t("common.I already have an account!!"))+" ",1),t(N,{class:"forgot-password-link",to:{name:"login",params:{lang:e.$i18n.locale}}},{default:y(()=>[g(n(e.$t("navbar.login")),1)]),_:1},8,["to"])])]),o("div",W,[X,o("div",Y,n(e.$t("common.or")),1)]),o("div",x,[t(s(v),{title:e.$t("login.google_account"),appendIcon:"google-icon",onClick:V},null,8,["title"]),t(s(v),{title:e.$t("login.apple_account"),appendIcon:"apple-icon",onClick:C},null,8,["title"]),t(R,{class:"d-none",ref:"appleLoginBtn",color:"black",border:!0,type:"sign in",width:"200",height:"36",onSuccess:S,onFailure:B},null,512)])])],2)])])}}};export{ae as default};
