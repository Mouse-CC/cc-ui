import{V as b}from"./vue.runtime.esm-bundler.0ee1be25.js";import{_ as V,r as v,o as _,c as D,a as C,w as f,a9 as B,b as l,d as s}from"./app.745e07d3.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:d,createVNode:c,createElementVNode:F,Fragment:i,openBlock:m,createElementBlock:k}=b;function h(e,o){const a=d("cc-checkbox");return m(),k(i,null,[F("div",null,[c(a,{modelValue:e.checked1,"onUpdate:modelValue":o[0]||(o[0]=t=>e.checked1=t),label:"Option 1",size:"large"},null,8,["modelValue"]),c(a,{modelValue:e.checked2,"onUpdate:modelValue":o[1]||(o[1]=t=>e.checked2=t),label:"Option 2",size:"large"},null,8,["modelValue"])]),F("div",null,[c(a,{modelValue:e.checked3,"onUpdate:modelValue":o[2]||(o[2]=t=>e.checked3=t),label:"Option 1"},null,8,["modelValue"]),c(a,{modelValue:e.checked4,"onUpdate:modelValue":o[3]||(o[3]=t=>e.checked4=t),label:"Option 2"},null,8,["modelValue"])]),F("div",null,[c(a,{modelValue:e.checked5,"onUpdate:modelValue":o[4]||(o[4]=t=>e.checked5=t),label:"Option 1",size:"small"},null,8,["modelValue"]),c(a,{modelValue:e.checked6,"onUpdate:modelValue":o[5]||(o[5]=t=>e.checked6=t),label:"Option 2",size:"small"},null,8,["modelValue"])]),F("div",null,[c(a,{modelValue:e.checked5,"onUpdate:modelValue":o[6]||(o[6]=t=>e.checked5=t),label:"Option 1",size:"small",disabled:""},null,8,["modelValue"]),c(a,{modelValue:e.checked6,"onUpdate:modelValue":o[7]||(o[7]=t=>e.checked6=t),label:"Option 2",size:"small",disabled:""},null,8,["modelValue"])])],64)}const{ref:y}=b;return{render:h,...{setup(){const e=y(!0),o=y(!1),a=y(!1),t=y(!1),n=y(!1),r=y(!1);return{checked1:e,checked2:o,checked3:a,checked4:t,checked5:n,checked6:r}}}}}(),"render-demo-1":function(){const{createTextVNode:d,resolveComponent:c,withCtx:F,createVNode:i,openBlock:m,createElementBlock:k}=b;function h(e,o){const a=c("cc-checkbox");return m(),k("div",null,[i(a,{modelValue:e.checked1,"onUpdate:modelValue":o[0]||(o[0]=t=>e.checked1=t),disabled:""},{default:F(()=>[d("Disabled")]),_:1},8,["modelValue"]),i(a,{modelValue:e.checked2,"onUpdate:modelValue":o[1]||(o[1]=t=>e.checked2=t)},{default:F(()=>[d("Not disabled")]),_:1},8,["modelValue"])])}const{ref:y}=b;return{render:h,...{setup(){const e=y(!1),o=y(!0);return{checked1:e,checked2:o}}}}}(),"render-demo-2":function(){const{resolveComponent:d,createVNode:c,withCtx:F,openBlock:i,createBlock:m}=b;function k(E,e){const o=d("cc-checkbox"),a=d("cc-checkbox-group");return i(),m(a,{modelValue:E.checkList,"onUpdate:modelValue":e[0]||(e[0]=t=>E.checkList=t)},{default:F(()=>[c(o,{label:"Option A"}),c(o,{label:"Option B"}),c(o,{label:"Option C"}),c(o,{label:"disabled",disabled:""}),c(o,{label:"selected and disabled",disabled:""})]),_:1},8,["modelValue"])}const{ref:h}=b;return{render:k,...{setup(){return{checkList:h(["selected and disabled","Option A"])}}}}}(),"render-demo-3":function(){const{createTextVNode:d,resolveComponent:c,withCtx:F,createVNode:i,renderList:m,Fragment:k,openBlock:h,createElementBlock:y,toDisplayString:E,createBlock:e}=b;function o(n,r){const u=c("cc-checkbox"),A=c("cc-checkbox-group");return h(),y(k,null,[i(u,{modelValue:n.checkAll,"onUpdate:modelValue":r[0]||(r[0]=p=>n.checkAll=p),indeterminate:n.isIndeterminate,onChange:n.handleCheckAllChange},{default:F(()=>[d(" Check all ")]),_:1},8,["modelValue","indeterminate","onChange"]),i(A,{modelValue:n.checkedCities,"onUpdate:modelValue":r[1]||(r[1]=p=>n.checkedCities=p),onChange:n.handleCheckedCitiesChange},{default:F(()=>[(h(!0),y(k,null,m(n.cities,p=>(h(),e(u,{key:p,label:p},{default:F(()=>[d(E(p),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"])],64)}const{ref:a}=b;return{render:o,...{setup(){const n=a(!1),r=a(!0),u=a(["Shanghai","Beijing"]),A=["Shanghai","Beijing","Guangzhou","Shenzhen"];return{checkAll:n,isIndeterminate:r,checkedCities:u,cities:A,handleCheckAllChange:x=>{u.value=x?A:[],r.value=!1},handleCheckedCitiesChange:x=>{const g=x.length;n.value=g===A.length,r.value=g>0&&g<A.length}}}}}}(),"render-demo-4":function(){const{resolveComponent:d,createVNode:c,createElementVNode:F,withCtx:i,Fragment:m,openBlock:k,createElementBlock:h}=b,y={class:"mt-4"},E={class:"mt-4"},e={class:"mt-4"};function o(n,r){const u=d("cc-checkbox"),A=d("cc-checkbox-group");return k(),h(m,null,[F("div",null,[c(u,{modelValue:n.checked1,"onUpdate:modelValue":r[0]||(r[0]=p=>n.checked1=p),label:"Option 1",size:"large",border:""},null,8,["modelValue"]),c(u,{modelValue:n.checked2,"onUpdate:modelValue":r[1]||(r[1]=p=>n.checked2=p),label:"Option 2",size:"large",border:""},null,8,["modelValue"])]),F("div",y,[c(u,{modelValue:n.checked3,"onUpdate:modelValue":r[2]||(r[2]=p=>n.checked3=p),label:"Option 1",border:""},null,8,["modelValue"]),c(u,{modelValue:n.checked4,"onUpdate:modelValue":r[3]||(r[3]=p=>n.checked4=p),label:"Option 2",border:""},null,8,["modelValue"])]),F("div",E,[c(A,{modelValue:n.checkboxGroup1,"onUpdate:modelValue":r[4]||(r[4]=p=>n.checkboxGroup1=p),size:"small"},{default:i(()=>[c(u,{label:"Option 1",border:""}),c(u,{label:"Option 2",border:""})]),_:1},8,["modelValue"])]),F("div",e,[c(A,{modelValue:n.checkboxGroup1,"onUpdate:modelValue":r[5]||(r[5]=p=>n.checkboxGroup1=p),size:"small"},{default:i(()=>[c(u,{label:"Option 1",border:"",disabled:""}),c(u,{label:"Option 2",border:"",disabled:""})]),_:1},8,["modelValue"])])],64)}const{ref:a}=b;return{render:o,...{setup(){const n=a(!0),r=a(!1),u=a(!1),A=a(!0),p=a(["Option 1"]);return{checked1:n,checked2:r,checked3:u,checked4:A,checkboxGroup1:p}}}}}()}},z=B('<h3 id="checkbox-\u591A\u9009\u6846" tabindex="-1"><a class="header-anchor" href="#checkbox-\u591A\u9009\u6846" aria-hidden="true">#</a> Checkbox \u591A\u9009\u6846</h3><p>\u4ECE\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u9009\u62E9\u9700\u8981\u7684\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h3><p>\u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\uFF0C\u5199\u5728\u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u4E3A checkbox \u6309\u94AE\u7684\u4ECB\u7ECD\u3002</p><p><code>checkbox-group</code> \u5143\u7D20\u80FD\u628A\u591A\u4E2A checkbox \u7BA1\u7406\u4E3A\u4E00\u7EC4\uFF0C\u53EA\u9700\u5728 Group \u4E2D\u4F7F\u7528 <code>v-mode</code> \u7ED1\u5B9A <code>Array</code> \u7C7B\u578B\u7684\u53D8\u91CF\u5373\u53EF\u3002\u53EA\u6709\u4E00\u4E2A\u9009\u9879\u65F6\u9ED8\u8BA4\u503C\u7C7B\u578B\u4E3A <code>Boolean</code>\uFF0C\u5F53\u9009\u4E2D\u65F6\u503C\u4E3A <code>true</code>\u3002<code>el-checkbox</code> \u6807\u7B7E\u4E2D\u7684\u5185\u5BB9\u5C06\u6210\u4E3A\u590D\u9009\u6846\u6309\u94AE\u4E4B\u540E\u7684\u63CF\u8FF0\u3002</p>',5),N=l("div",{class:"language-vue"},[l("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked1"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"large"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked2"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"large"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked3"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked4"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked5"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"small"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked6"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"small"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked5"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"small"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked6"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"small"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"export"),l("span",{style:{color:"#953800"}}," "),l("span",{style:{color:"#CF222E"}},"default"),l("span",{style:{color:"#953800"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"  "),l("span",{style:{color:"#8250DF"}},"setup"),l("span",{style:{color:"#953800"}},"() "),l("span",{style:{color:"#24292F"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked1"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"true"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked2"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked3"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked4"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked5"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked6"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"return"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked1,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked2,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked3,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked4,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked5,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked6,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  }"),l("span",{style:{color:"#953800"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),U=l("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#"),s(" \u7981\u7528\u72B6\u6001")],-1),G=l("p",null,[s("\u8BBE\u7F6E "),l("code",null,"disabled"),s(" \u5C5E\u6027\u5373\u53EF\u3002")],-1),I=l("div",{class:"language-vue"},[l("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked1"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}},">Disabled</"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked2"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},">Not disabled</"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"export"),l("span",{style:{color:"#953800"}}," "),l("span",{style:{color:"#CF222E"}},"default"),l("span",{style:{color:"#953800"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"  "),l("span",{style:{color:"#8250DF"}},"setup"),l("span",{style:{color:"#953800"}},"() "),l("span",{style:{color:"#24292F"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked1"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked2"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"true"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"return"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked1,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked2,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  }"),l("span",{style:{color:"#953800"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),L=B('<h3 id="\u591A\u9009\u6846\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u591A\u9009\u6846\u7EC4" aria-hidden="true">#</a> \u591A\u9009\u6846\u7EC4</h3><p>\u9002\u7528\u4E8E\u591A\u4E2A\u52FE\u9009\u6846\u7ED1\u5B9A\u5230\u540C\u4E00\u6570\u7EC4\u7684\u573A\u666F\uFF0C\u901A\u8FC7 label \u63A7\u5236\u7EC4\u4E2D\u9009\u4E2D\u7684\u9879\u3002</p><p>\u5728 <code>cc-checkbox</code> \u5143\u7D20\u4E2D\u5B9A\u4E49 <code>v-model</code> \u7ED1\u5B9A\u53D8\u91CF\uFF0C\u5355\u4E00 checkbox \u9ED8\u8BA4\u7ED1\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B\u662F <code>Boolean</code>\uFF0C\u9009\u4E2D\u503C\u4E3A <code>true</code>\u3002\u5728 <code>cc-checkbox-group</code> \u7EC4\u4EF6\u4E2D\uFF0C<code>label</code> \u662F\u591A\u62E9\u6846\u7684\u503C\u3002\u5982\u679C\u8BE5\u7EC4\u4EF6\u4E0B\u6CA1\u6709\u88AB\u4F20\u5165\u5185\u5BB9\uFF0C\u90A3\u4E48 <code>label</code> \u5C06\u4F1A\u4F5C\u4E3A checkbox \u6309\u94AE\u540E\u7684\u4ECB\u7ECD\u3002 <code>label</code> \u4E0E\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u5BF9\u5E94\uFF0C\u5982\u679C\u503C\u5B58\u5728\u6570\u7EC4\u4E2D\uFF0Ccheckbox \u5904\u4E8E\u9009\u4E2D\u72B6\u6001\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002</p>',3),S=l("div",{class:"language-vue"},[l("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checkList"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option A"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option B"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option C"'),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"disabled"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"selected and disabled"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"export"),l("span",{style:{color:"#953800"}}," "),l("span",{style:{color:"#CF222E"}},"default"),l("span",{style:{color:"#953800"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"  "),l("span",{style:{color:"#8250DF"}},"setup"),l("span",{style:{color:"#953800"}},"() "),l("span",{style:{color:"#24292F"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checkList"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"(["),l("span",{style:{color:"#0A3069"}},"'selected and disabled'"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#0A3069"}},"'Option A'"),l("span",{style:{color:"#24292F"}},"])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"return"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checkList,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  }"),l("span",{style:{color:"#953800"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),w=l("h3",{id:"\u4E2D\u95F4\u72B6\u6001",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u4E2D\u95F4\u72B6\u6001","aria-hidden":"true"},"#"),s(" \u4E2D\u95F4\u72B6\u6001")],-1),j=l("p",null,[l("code",null,"indeterminate"),s(" \u5C5E\u6027\u7528\u4EE5\u8868\u793A checkbox \u7684\u4E0D\u786E\u5B9A\u72B6\u6001\uFF0C\u4E00\u822C\u7528\u4E8E\u5168\u9009\u6548\u679C")],-1),T=l("div",{class:"language-vue"},[l("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"cc-checkbox")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checkAll"),l("span",{style:{color:"#0A3069"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    :"),l("span",{style:{color:"#0550AE"}},"indeterminate"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"isIndeterminate"),l("span",{style:{color:"#0A3069"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    @"),l("span",{style:{color:"#0550AE"}},"change"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"handleCheckAllChange"),l("span",{style:{color:"#0A3069"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    Check all")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"cc-checkbox-group")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checkedCities"),l("span",{style:{color:"#0A3069"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    @"),l("span",{style:{color:"#0550AE"}},"change"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"handleCheckedCitiesChange"),l("span",{style:{color:"#0A3069"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  >")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-for"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"city "),l("span",{style:{color:"#CF222E"}},"in"),l("span",{style:{color:"#24292F"}}," cities"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," :"),l("span",{style:{color:"#0550AE"}},"key"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"city"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," :"),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"city"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      {{ city }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    </"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"export"),l("span",{style:{color:"#953800"}}," "),l("span",{style:{color:"#CF222E"}},"default"),l("span",{style:{color:"#953800"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"  "),l("span",{style:{color:"#8250DF"}},"setup"),l("span",{style:{color:"#953800"}},"() "),l("span",{style:{color:"#24292F"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checkAll"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"isIndeterminate"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"true"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checkedCities"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"(["),l("span",{style:{color:"#0A3069"}},"'Shanghai'"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#0A3069"}},"'Beijing'"),l("span",{style:{color:"#24292F"}},"])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"cities"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," ["),l("span",{style:{color:"#0A3069"}},"'Shanghai'"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#0A3069"}},"'Beijing'"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#0A3069"}},"'Guangzhou'"),l("span",{style:{color:"#24292F"}},", "),l("span",{style:{color:"#0A3069"}},"'Shenzhen'"),l("span",{style:{color:"#24292F"}},"]")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleCheckAllChange"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," ("),l("span",{style:{color:"#953800"}},"val"),l("span",{style:{color:"#CF222E"}},":"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"boolean"),l("span",{style:{color:"#24292F"}},") "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checkedCities.value "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," val "),l("span",{style:{color:"#CF222E"}},"?"),l("span",{style:{color:"#24292F"}}," cities "),l("span",{style:{color:"#CF222E"}},":"),l("span",{style:{color:"#24292F"}}," []")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      isIndeterminate.value "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"false")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"handleCheckedCitiesChange"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," ("),l("span",{style:{color:"#953800"}},"value"),l("span",{style:{color:"#CF222E"}},":"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"string"),l("span",{style:{color:"#24292F"}},"[]) "),l("span",{style:{color:"#CF222E"}},"=>"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checkedCount"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," value."),l("span",{style:{color:"#0550AE"}},"length")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checkAll.value "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," checkedCount "),l("span",{style:{color:"#CF222E"}},"==="),l("span",{style:{color:"#24292F"}}," cities."),l("span",{style:{color:"#0550AE"}},"length")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      isIndeterminate.value "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," checkedCount "),l("span",{style:{color:"#CF222E"}},">"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"0"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"&&"),l("span",{style:{color:"#24292F"}}," checkedCount "),l("span",{style:{color:"#CF222E"}},"<"),l("span",{style:{color:"#24292F"}}," cities."),l("span",{style:{color:"#0550AE"}},"length")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"return"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checkAll,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      isIndeterminate,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checkedCities,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      cities,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      handleCheckAllChange,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      handleCheckedCitiesChange,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  }"),l("span",{style:{color:"#953800"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),$=l("h3",{id:"\u5E26\u6709\u8FB9\u6846",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#\u5E26\u6709\u8FB9\u6846","aria-hidden":"true"},"#"),s(" \u5E26\u6709\u8FB9\u6846")],-1),q=l("p",null,[s("\u8BBE\u7F6E "),l("code",null,"border"),s(" \u5C5E\u6027\u53EF\u4EE5\u6E32\u67D3\u4E3A\u5E26\u6709\u8FB9\u6846\u7684\u591A\u9009\u6846\u3002")],-1),H=l("div",{class:"language-vue"},[l("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked1"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"large"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked2"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"large"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"class"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"mt-4"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked3"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checked4"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"class"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"mt-4"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checkboxGroup1"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"small"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    </"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  <"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"class"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"mt-4"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    <"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"v-model"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}},"checkboxGroup1"),l("span",{style:{color:"#0A3069"}},'"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"size"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"small"'),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 1"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      <"),l("span",{style:{color:"#116329"}},"cc-checkbox"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"label"),l("span",{style:{color:"#24292F"}},"="),l("span",{style:{color:"#0A3069"}},'"Option 2"'),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"border"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"disabled"),l("span",{style:{color:"#24292F"}}," />")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    </"),l("span",{style:{color:"#116329"}},"cc-checkbox-group"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  </"),l("span",{style:{color:"#116329"}},"div"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"template"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"<"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"import"),l("span",{style:{color:"#24292F"}}," { ref } "),l("span",{style:{color:"#CF222E"}},"from"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0A3069"}},"'vue'")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#CF222E"}},"export"),l("span",{style:{color:"#953800"}}," "),l("span",{style:{color:"#CF222E"}},"default"),l("span",{style:{color:"#953800"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"  "),l("span",{style:{color:"#8250DF"}},"setup"),l("span",{style:{color:"#953800"}},"() "),l("span",{style:{color:"#24292F"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked1"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"true"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked2"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked3"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"false"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checked4"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"("),l("span",{style:{color:"#0550AE"}},"true"),l("span",{style:{color:"#24292F"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"const"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#0550AE"}},"checkboxGroup1"),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#CF222E"}},"="),l("span",{style:{color:"#24292F"}}," "),l("span",{style:{color:"#8250DF"}},"ref"),l("span",{style:{color:"#24292F"}},"(["),l("span",{style:{color:"#0A3069"}},"'Option 1'"),l("span",{style:{color:"#24292F"}},"])")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    "),l("span",{style:{color:"#CF222E"}},"return"),l("span",{style:{color:"#24292F"}}," {")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked1,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked2,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked3,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checked4,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"      checkboxGroup1,")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"    }")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"  }"),l("span",{style:{color:"#953800"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#953800"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#24292F"}},"</"),l("span",{style:{color:"#116329"}},"script"),l("span",{style:{color:"#24292F"}},">")]),s(`
`),l("span",{class:"line"})])])],-1);function J(d,c,F,i,m,k){const h=v("render-demo-0"),y=v("demo"),E=v("render-demo-1"),e=v("render-demo-2"),o=v("render-demo-3"),a=v("render-demo-4");return _(),D("div",null,[z,C(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <cc-checkbox v-model="checked1" label="Option 1" size="large" />
    <cc-checkbox v-model="checked2" label="Option 2" size="large" />
  </div>
  <div>
    <cc-checkbox v-model="checked3" label="Option 1" />
    <cc-checkbox v-model="checked4" label="Option 2" />
  </div>
  <div>
    <cc-checkbox v-model="checked5" label="Option 1" size="small" />
    <cc-checkbox v-model="checked6" label="Option 2" size="small" />
  </div>
  <div>
    <cc-checkbox v-model="checked5" label="Option 1" size="small" disabled />
    <cc-checkbox v-model="checked6" label="Option 2" size="small" disabled />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
    }
  },
}
<\/script>
`},{highlight:f(()=>[N]),default:f(()=>[C(h)]),_:1}),U,G,C(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <cc-checkbox v-model="checked1" disabled>Disabled</cc-checkbox>
    <cc-checkbox v-model="checked2">Not disabled</cc-checkbox>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    return {
      checked1,
      checked2,
    }
  },
}
<\/script>
`},{highlight:f(()=>[I]),default:f(()=>[C(E)]),_:1}),L,C(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <cc-checkbox-group v-model="checkList">
    <cc-checkbox label="Option A" />
    <cc-checkbox label="Option B" />
    <cc-checkbox label="Option C" />
    <cc-checkbox label="disabled" disabled />
    <cc-checkbox label="selected and disabled" disabled />
  </cc-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkList = ref(['selected and disabled', 'Option A'])
    return {
      checkList,
    }
  },
}
<\/script>
`},{highlight:f(()=>[S]),default:f(()=>[C(e)]),_:1}),w,j,C(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <cc-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </cc-checkbox>
  <cc-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <cc-checkbox v-for="city in cities" :key="city" :label="city">
      {{ city }}
    </cc-checkbox>
  </cc-checkbox-group>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const checkedCities = ref(['Shanghai', 'Beijing'])
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

    const handleCheckAllChange = (val: boolean) => {
      checkedCities.value = val ? cities : []
      isIndeterminate.value = false
    }

    const handleCheckedCitiesChange = (value: string[]) => {
      const checkedCount = value.length
      checkAll.value = checkedCount === cities.length
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    }

    return {
      checkAll,
      isIndeterminate,
      checkedCities,
      cities,
      handleCheckAllChange,
      handleCheckedCitiesChange,
    }
  },
}
<\/script>
`},{highlight:f(()=>[T]),default:f(()=>[C(o)]),_:1}),$,q,C(y,{customClass:"demoblock-custom",sourceCode:`<template>
  <div>
    <cc-checkbox v-model="checked1" label="Option 1" size="large" border />
    <cc-checkbox v-model="checked2" label="Option 2" size="large" border />
  </div>
  <div class="mt-4">
    <cc-checkbox v-model="checked3" label="Option 1" border />
    <cc-checkbox v-model="checked4" label="Option 2" border />
  </div>
  <div class="mt-4">
    <cc-checkbox-group v-model="checkboxGroup1" size="small">
      <cc-checkbox label="Option 1" border />
      <cc-checkbox label="Option 2" border />
    </cc-checkbox-group>
  </div>
  <div class="mt-4">
    <cc-checkbox-group v-model="checkboxGroup1" size="small">
      <cc-checkbox label="Option 1" border disabled />
      <cc-checkbox label="Option 2" border disabled />
    </cc-checkbox-group>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(true)
    const checkboxGroup1 = ref(['Option 1'])
    return {
      checked1,
      checked2,
      checked3,
      checked4,
      checkboxGroup1,
    }
  },
}
<\/script>
`},{highlight:f(()=>[H]),default:f(()=>[C(a)]),_:1})])}const Q=V(O,[["render",J],["__file","checkbox.html.vue"]]);export{Q as default};
