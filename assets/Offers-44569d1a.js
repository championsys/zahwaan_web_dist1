import{p as x,u as y,f as v,g as P,s as r,o as h,a as d,c as p,F as D,j as k,k as S,v as q}from"./index-43934fea.js";import{u as F}from"./page-5c056b94.js";const B={class:"offers"},R={__name:"Offers",setup(C){const u=x(),s=F();y(),v();const a=P(),t=r({page_name:"Offer Page",filters:{item_group:null}}),_=r([{idx:1,design_type:"ads_com_1"},{idx:2,design_type:"ads_com_2"},{idx:3,design_type:"ads_com_3"},{idx:4,design_type:"ads_com_4"},{idx:5,design_type:"product_com_1"},{idx:6,design_type:"product_com_2"},{idx:7,design_type:"section_com_1"},{idx:8,design_type:"section_com_2"},{idx:9,design_type:"section_com_3"},{idx:10,design_type:"section_com_4"}]),o=r([]),g=(c,l)=>{const{[c]:e,...i}=l;return i},m=()=>{u.shimmerLoadingStart(),a.query&&(a.query.item_group&&(t.value.filters.item_group=a.query.item_group),t.value.filters.filters={...t.value.filters.filters,...g("item_group",a.query)}),s.loadPage(t.value).then(()=>{_.value=s.getPage,f()})},f=()=>{s.loadPageData(t.value).then(()=>{o.value=s.getPageData,setTimeout(()=>{u.shimmerLoadingFinish()},2e3)})};return h(()=>{m()}),(c,l)=>(d(),p("main",B,[(d(!0),p(D,null,k(_.value,(e,i)=>(d(),S(q(e.design_type),{key:i,"section-title":e.title,idx:e.idx,data:o.value.filter(n=>n.idx==e.idx)[0]?o.value.filter(n=>n.idx==e.idx)[0].items:null},null,8,["section-title","idx","data"]))),128))]))}};export{R as default};
