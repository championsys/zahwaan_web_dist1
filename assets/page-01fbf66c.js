import{A as e}from"./index-e698aeb1.js";const r=e({id:"pages",state:()=>({page:null,pageData:null}),getters:{getPage:a=>a.page,getPageData:a=>a.pageData},actions:{async loadPage(a){return await this.$http.post("/snd_ecommerce.page.get_page",a).then(t=>{if(t.status===200)return this.page=t.data.data.content,!0}).catch(t=>{throw t})},async loadPageData(a){return await this.$http.post("/snd_ecommerce.page.get_page_data",a).then(t=>{if(t.status===200)return this.pageData=t.data.data.content,!0}).catch(t=>{throw t})}}});export{r as u};
