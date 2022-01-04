/* eslint-disable */
var se=Object.defineProperty,ie=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var I=(e,o,u)=>o in e?se(e,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[o]=u,w=(e,o)=>{for(var u in o||(o={}))me.call(o,u)&&I(e,u,o[u]);if(z)for(var u of z(o))ue.call(o,u)&&I(e,u,o[u]);return e},F=(e,o)=>ie(e,fe(o));(function(e,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o(require("vue"),require("element-plus"),require("vuedraggable")):typeof define=="function"&&define.amd?define(["vue","element-plus","vuedraggable"],o):(e=typeof globalThis!="undefined"?globalThis:e||self,e["ele-easy-table-next"]=o(e.Vue,e["ElementPlus "],e.vuedraggable))})(this,function(e,o,u){"use strict";function T(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var L=T(u);const j={class:"ele-easy-table",style:{overflow:"hidden"}},U={key:0,style:{"text-align":"center"}},A=[e.createElementVNode("g",{"fill-rule":"evenodd"},[e.createElementVNode("path",{d:"M24 21.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828L24 21.91zm-10.586 1.414L24 33.91l10.586-10.586a2 2 0 0 1 2.828 2.828l-12 12a2 2 0 0 1-2.828 0l-12-12a2 2 0 0 1 2.828-2.828z","fill-rule":"nonzero"})],-1)],O={key:1},M={key:0},K={key:1},H=["innerHTML"],q={key:2},J={key:3},G={key:2,style:{float:"right",margin:"20px 0"}},W=e.defineComponent({name:"EleEasyTable"});function Q(l,{emit:h}){const a=l,p=e.ref(!1),g=e.ref(0);e.watch(()=>a.table.list,()=>{if(a.formData.totalCount>0){let s=Math.ceil(a.formData.totalCount/a.formData.pageSize);a.formData.pageIndex>s&&(a.formData.pageIndex=s)}a.formData.pageSize>0&&a.formData.pageIndex>0?g.value=a.formData.pageSize*(a.formData.pageIndex-1)+1:g.value=1},{immediate:!0});const b=e.computed(()=>typeof a.form.foldNum!="number"||a.form.foldNum<=0?!1:a.form.list.filter(m=>!(m.type==="button"||m.fold===!1)).length>a.form.foldNum-1),f=e.computed(()=>{const s={transition:"0.5s","-webkit-transition":"0.5s"},m={transform:"rotate(180deg)","-webkit-transform":"rotate(180deg)"};return p.value?w(w({},s),m):s});function y(){p.value=!p.value,h("handle-expand",p.value)}function k(s,m){return typeof a.form.foldNum!="number"||a.form.foldNum<=0||s.type==="button"||s.fold===!1||p.value?!0:m<=a.form.foldNum-1}function x(s){a.formData[s.startKey]=a.formData[s.key]?a.formData[s.key][0]:"",a.formData[s.endKey]=a.formData[s.key]?a.formData[s.key][1]:""}function E(s){a.formData.pageIndex=1,a.formData.pageSize=s,h("update:formData",a.formData),h("get-list")}async function V(s){a.formData.pageIndex=s,h("update:formData",a.formData),h("get-list")}return(s,m)=>{const N=e.resolveDirective("loading");return e.openBlock(),e.createElementBlock("div",j,[Object.keys(l.form).length>0?(e.openBlock(),e.createBlock(e.unref(o.ElForm),e.mergeProps({key:0,class:l.form.class,inline:!0,model:l.formData,style:w({position:"relative"},l.form.style),size:"small"},l.form.config),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.form.list,(t,i)=>e.withDirectives((e.openBlock(),e.createElementBlock("span",{key:i},[t.type!=="slot"?(e.openBlock(),e.createBlock(e.unref(o.ElFormItem),e.mergeProps({key:0,label:t.label?t.label+"\uFF1A":""},t.formConfig),{default:e.withCtx(()=>[t.type==="datePicker"?(e.openBlock(),e.createBlock(e.unref(o.ElDatePicker),e.mergeProps({key:0,style:t.style||l.form.formItemStyle,onChange:c=>x(t),"end-placeholder":"\u7ED3\u675F\u65E5\u671F",size:"small","start-placeholder":"\u5F00\u59CB\u65E5\u671F",type:"daterange"},t.config,{modelValue:l.formData[t.key],"onUpdate:modelValue":c=>l.formData[t.key]=c,"value-format":"yyyy-MM-dd"}),null,16,["style","onChange","modelValue","onUpdate:modelValue"])):e.createCommentVNode("",!0),t.type==="input"?(e.openBlock(),e.createBlock(e.unref(o.ElInput),e.mergeProps({key:1,placeholder:t.placeholder?t.placeholder:"\u8BF7\u8F93\u5165"+t.label,style:t.style||l.form.formItemStyle,onKeyup:m[0]||(m[0]=e.withKeys(c=>s.$emit("get-list"),["enter","native"])),size:"small"},t.config,{modelValue:l.formData[t.key],"onUpdate:modelValue":c=>l.formData[t.key]=c}),null,16,["placeholder","style","modelValue","onUpdate:modelValue"])):e.createCommentVNode("",!0),t.type==="select"?(e.openBlock(),e.createBlock(e.unref(o.ElSelect),e.mergeProps({key:2,placeholder:t.placeholder?t.placeholder:"\u8BF7\u9009\u62E9"+t.label,style:t.style||l.form.formItemStyle,size:"small"},t.config,{modelValue:l.formData[t.key],"onUpdate:modelValue":c=>l.formData[t.key]=c}),{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.options,c=>(e.openBlock(),e.createBlock(e.unref(o.ElOption),{key:typeof c.value!="undefined"?c.value:c,label:typeof c.label!="undefined"?c.label:c,value:typeof c.value!="undefined"?c.value:c},null,8,["label","value"]))),128))]),_:2},1040,["placeholder","style","modelValue","onUpdate:modelValue"])):e.createCommentVNode("",!0),t.type==="button"?(e.openBlock(),e.createBlock(e.unref(o.ElButton),e.mergeProps({key:3,disabled:t.disabled?t.disabled():!1,style:t.style,onClick:c=>t.handleClick(t,i),size:"small",type:"primary"},t.config),{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(typeof t.text=="function"?t.text():t.text),1)]),_:2},1040,["disabled","style","onClick"])):e.createCommentVNode("",!0)]),_:2},1040,["label"])):e.renderSlot(s.$slots,t.slot,{key:1})],512)),[[e.vShow,k(t,i)]])),128)),e.unref(b)?(e.openBlock(),e.createElementBlock("div",U,[e.createVNode(e.unref(o.ElButton),{onClick:m[1]||(m[1]=t=>y()),type:"text"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(p.value?"\u6536\u8D77":"\u5C55\u5F00")+" ",1),(e.openBlock(),e.createElementBlock("svg",{style:e.normalizeStyle(e.unref(f)),fill:"#409EFF",height:"12px",viewBox:"0 0 48 48",width:"12px"},A,4))]),_:1})])):e.createCommentVNode("",!0)]),_:3},16,["class","model","style"])):e.createCommentVNode("",!0),Object.keys(l.table).length>0?e.withDirectives((e.openBlock(),e.createBlock(e.unref(o.ElTable),e.mergeProps({key:1,data:l.table.list,border:"","element-loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D",stripe:"",style:{overflow:"visible","margin-top":"20px"},"tooltip-effect":"light"},s.$attrs),{default:e.withCtx(()=>[l.table.selection&&l.table.selection.show&&l.table.list.length>0?(e.openBlock(),e.createBlock(e.unref(o.ElTableColumn),e.mergeProps({key:0,align:"center",type:"selection"},l.table.selection.config),null,16)):e.createCommentVNode("",!0),l.table.showIndex!==!1?(e.openBlock(),e.createBlock(e.unref(o.ElTableColumn),{key:1,fixed:l.table.indexFixed||!1,label:l.table.indexLabel||"\u5E8F\u53F7",align:"center",type:"index",index:g.value,width:"55"},null,8,["fixed","label","index"])):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.table.columns,t=>(e.openBlock(),e.createBlock(e.unref(o.ElTableColumn),e.mergeProps({key:t.key+t.label,label:t.label,prop:t.key,align:"center"},t.config),{header:e.withCtx(i=>[t.header?e.renderSlot(s.$slots,t.header,{key:0,row:i.row}):(e.openBlock(),e.createElementBlock("span",O,e.toDisplayString(t.label),1))]),default:e.withCtx(i=>[t.hasOwnProperty("type")?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("span",M,e.toDisplayString(i.row[t.key]),1)),t.type==="format"?(e.openBlock(),e.createElementBlock("span",K,[e.createElementVNode("span",{innerHTML:t.format(i.row,i)},null,8,H)])):e.createCommentVNode("",!0),t.type==="textBtn"?(e.openBlock(),e.createElementBlock("span",q,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.textBtn,(c,S)=>(e.openBlock(),e.createElementBlock("span",{key:S},[c.text||c.funcText(i.row,i)?(e.openBlock(),e.createBlock(e.unref(o.ElButton),e.mergeProps({key:0,onClick:B=>c.handleClick(i.row,i),style:{"margin-right":"10px"},type:"text"},c.config||c.funcConfig?c.funcConfig(i.row,i):{},{innerHTML:c.text||c.funcText(i.row,i)}),null,16,["onClick","innerHTML"])):e.createCommentVNode("",!0)]))),128))])):e.createCommentVNode("",!0),t.type==="slot"?(e.openBlock(),e.createElementBlock("span",J,[e.renderSlot(s.$slots,t.slot,{row:i.row})])):e.createCommentVNode("",!0)]),_:2},1040,["label","prop"]))),128))]),_:3},16,["data"])),[[N,l.table.isLoading]]):e.createCommentVNode("",!0),Object.keys(l.table).length>0&&l.pagination&&Array.isArray(l.table.list)&&l.table.list.length>0?(e.openBlock(),e.createElementBlock("div",G,[e.createVNode(e.unref(o.ElPagination),e.mergeProps({"current-page":l.formData.pageIndex||1,layout:typeof l.pagination=="object"?l.pagination.layout:"total, sizes, prev, pager, next, jumper","page-size":l.formData.pageSize||10,"page-sizes":typeof l.pagination=="object"?l.pagination.pageSizes:[10,20,50,100],total:11,onCurrentChange:V,onSizeChange:E},typeof l.pagination=="object"?l.pagination:{}),null,16,["current-page","layout","page-size","page-sizes"])])):e.createCommentVNode("",!0)])}}const R=e.defineComponent(F(w({},W),{props:{formData:{type:Object,default(){return{}}},form:{type:Object,default(){return{}}},table:{type:Object,default(){return{list:[]}}},pagination:{type:[Boolean,Object],default:!0}},emits:["update:formData","get-list","handle-expand"],setup:Q}));var ke="";const X={class:"custom-column-wrapper"},Y={class:"custom-column-title-wrapper"},Z=e.createElementVNode("div",{class:"custom-column-title"},"\u81EA\u5B9A\u4E49\u5217",-1),P=e.createElementVNode("span",{class:"custom-column-search"},"\u641C\u7D22\u5217\uFF1A",-1),_=e.createTextVNode("\u5168\u9009"),v={class:"text-center",slot:"footer"},ee=e.createTextVNode("\u53D6 \u6D88"),te=e.createTextVNode("\u786E \u5B9A"),le=[e.createElementVNode("p",{class:"text-center custom-column-search"},"\u6682\u65E0\u5217\u6570\u636E",-1)],ae=e.defineComponent({name:"CustomColumn"});function oe(l,{emit:h}){const a=l,p=e.ref(""),g=e.ref(!1),b=e.ref(!0),f=e.ref([]),y=e.ref([]),k=e.ref([]),x=e.ref([]),E=e.ref(!1);e.watch(()=>a.show,d=>{d&&t(),g.value=d},{immediate:!0}),e.watch(g,d=>{h("update:show",d)});function V(d,r){const n=window.JSON.stringify(r);window.localStorage.setItem(d,n)}function s(d){const r=window.localStorage.getItem(d);if(!r)return"";try{return window.JSON.parse(r)}catch{window.localStorage.removeItem(d),window.location.reload()}}function m(d=""){y.value=f.value.filter(r=>r.label.toUpperCase().includes(d.toUpperCase())).map(r=>r.key),B()}async function N(){var r;let d=s(a.localName)||a.defaultColumns||[];if(Array.isArray(d)&&d.length>0){let n=[],D;return d.forEach((C,de)=>{var $;D=($=a.baseColumns)==null?void 0:$.find(ce=>ce.key===C),D&&D.key?n.push(D):d.splice(de,1)}),(r=a.baseColumns)==null||r.forEach(C=>{d.includes(C.key)||f.value.push(C)}),f.value=n.concat(f.value),x.value=f.value.filter(C=>C.disabledCustom).map(C=>C.key),y.value=f.value.map(C=>C.key),await e.nextTick(),h("update:columns",n),V(a.localName,d)}a.baseColumns&&(f.value=a.baseColumns),x.value=f.value.filter(n=>n.disabledCustom).map(n=>n.key),y.value=f.value.map(n=>n.key),h("update:columns",a.baseColumns)}function t(){p.value="",m(p.value),a.columns&&(k.value=a.columns.map(d=>d.key)),B()}function i(){g.value=!1}async function c(){let d=[],r=[];f.value.forEach(n=>{k.value.includes(n.key)&&(d.push(n),r.push(n.key))}),V(a.localName,r),h("update:columns",[]),await e.nextTick(),h("update:columns",d),g.value=!1}function S(d){const r=d?y.value:y.value.filter(n=>!x.value.includes(n));k.value=d?k.value=[...new Set([...k.value,...r])]:k.value.filter(n=>!r.includes(n)),B()}function B(){b.value=y.value.every(d=>k.value.includes(d)),E.value=!b.value&&y.value.some(d=>k.value.includes(d))}return N(),(d,r)=>(e.openBlock(),e.createElementBlock("div",X,[e.createVNode(e.unref(o.ElDialog),{modelValue:g.value,"onUpdate:modelValue":r[6]||(r[6]=n=>g.value=n),"show-close":!1,width:"880px"},{title:e.withCtx(()=>[e.createElementVNode("div",Y,[Z,P,e.createVNode(e.unref(o.ElInput),{onInput:m,placeholder:"\u8BF7\u8F93\u5165\u5217\u540D\u79F0",size:"mini",style:{width:"200px"},modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=n=>p.value=n)},null,8,["modelValue"])])]),default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",null,[e.createVNode(e.unref(o.ElCheckbox),{indeterminate:E.value,onChange:S,modelValue:b.value,"onUpdate:modelValue":r[1]||(r[1]=n=>b.value=n)},{default:e.withCtx(()=>[_]),_:1},8,["indeterminate","modelValue"]),e.createVNode(e.unref(o.ElCheckboxGroup),{onChange:B,modelValue:k.value,"onUpdate:modelValue":r[3]||(r[3]=n=>k.value=n)},{default:e.withCtx(()=>[e.createVNode(e.unref(L.default),{animation:166,group:{name:"customColumn"},class:"el-checkbox-wrapper",ghostClass:"ghost",handle:".el-checkbox__label","item-key":"key",tag:"ul",modelValue:f.value,"onUpdate:modelValue":r[2]||(r[2]=n=>f.value=n)},{item:e.withCtx(({element:n})=>[e.createElementVNode("li",null,[e.withDirectives(e.createVNode(e.unref(o.ElCheckbox),{disabled:n.disabledCustom,key:n.key,label:n.key},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.label),1)]),_:2},1032,["disabled","label"]),[[e.vShow,y.value.includes(n.key)]])])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),e.createElementVNode("div",v,[e.createVNode(e.unref(o.ElButton),{onClick:r[4]||(r[4]=n=>i())},{default:e.withCtx(()=>[ee]),_:1}),e.createVNode(e.unref(o.ElButton),{onClick:r[5]||(r[5]=n=>c()),type:"primary"},{default:e.withCtx(()=>[te]),_:1})])],512),[[e.vShow,y.value.length>0]]),e.withDirectives(e.createElementVNode("div",null,le,512),[[e.vShow,y.value.length===0]])]),_:1},8,["modelValue"])]))}const ne=e.defineComponent(F(w({},ae),{props:{localName:null,show:{type:Boolean,default:!1},baseColumns:null,columns:null,defaultColumns:null},emits:["update:show","update:columns"],setup:oe}));var re={install:l=>{l.component("EleEasyTable",R),l.component("CustomColumn",ne)}};return re});
