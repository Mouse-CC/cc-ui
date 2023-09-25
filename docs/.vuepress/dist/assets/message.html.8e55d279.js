import{V as g}from"./vue.runtime.esm-bundler.0ee1be25.js";import{bA as E,_ as A,r as _,o as f,c as k,a as i,w as F,b as s,d as o}from"./app.745e07d3.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:r,withCtx:n,createVNode:c,Fragment:y,openBlock:u,createElementBlock:p}=g;function a(C,d){const h=r("cc-button");return u(),p(y,null,[c(h,{onClick:C.open},{default:n(()=>[e("Show message")]),_:1},8,["onClick"]),c(h,{onClick:C.openVn},{default:n(()=>[e("VNode")]),_:1},8,["onClick"])],64)}const{h:l}=g,{CcMessage:m}=E;return{render:a,...{setup(){return{open:()=>{m("this is a message.")},openVn:()=>{m({message:l("p",null,[l("span",null,"Message can be "),l("i",{style:"color: teal"},"VNode")])})}}}}}}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:r,withCtx:n,createVNode:c,Fragment:y,openBlock:u,createElementBlock:p}=g;function a(t,C){const d=r("cc-button");return u(),p(y,null,[c(d,{plain:!0,onClick:t.open2},{default:n(()=>[e("success")]),_:1},8,["onClick"]),c(d,{plain:!0,onClick:t.open3},{default:n(()=>[e("warning")]),_:1},8,["onClick"]),c(d,{plain:!0,onClick:t.open1},{default:n(()=>[e("message")]),_:1},8,["onClick"]),c(d,{plain:!0,onClick:t.open4},{default:n(()=>[e("error")]),_:1},8,["onClick"])],64)}const{CcMessage:l}=E;return{render:a,...{setup(){return{open1:()=>{l("this is a message.")},open2:()=>{l({message:"Congrats, this is a success message.",type:"success"})},open3:()=>{l({message:"Warning, this is a warning message.",type:"warning"})},open4:()=>{l({message:"Oops, this is a error message.",type:"error"})}}}}}}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:r,withCtx:n,openBlock:c,createBlock:y}=g;function u(l,m){const t=r("cc-button");return c(),y(t,{onClick:l.openCenter},{default:n(()=>[e("Centered text")]),_:1},8,["onClick"])}const{CcMessage:p}=E;return{render:u,...{setup(){return{openCenter:()=>{p({message:"Centered text",center:!0})}}}}}}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:r,withCtx:n,openBlock:c,createBlock:y}=g;function u(l,m){const t=r("cc-button");return c(),y(t,{onClick:l.openHTML},{default:n(()=>[e("Use HTML String")]),_:1},8,["onClick"])}const{CcMessage:p}=E;return{render:u,...{setup(){return{openHTML:()=>{p({dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})}}}}}}()}},B=s("h3",{id:"message-\u6D88\u606F\u63D0\u793A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#message-\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#"),o(" Message \u6D88\u606F\u63D0\u793A")],-1),M=s("p",null,"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002",-1),D=s("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),o(" \u57FA\u7840\u7528\u6CD5")],-1),x=s("p",null,"\u81EA\u9876\u90E8\u51FA\u73B0\uFF0C3 \u79D2\u540E\u81EA\u52A8\u6D88\u5931\u3002",-1),T=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">Show message</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"openVn"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">VNode</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { h } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { CcMessage } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'this is a message.'"),s("span",{style:{color:"#24292F"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"openVn"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        message: "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'p'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},", [")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'span'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'Message can be '"),s("span",{style:{color:"#24292F"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", { style: "),s("span",{style:{color:"#0A3069"}},"'color: teal'"),s("span",{style:{color:"#24292F"}}," }, "),s("span",{style:{color:"#0A3069"}},"'VNode'"),s("span",{style:{color:"#24292F"}},"),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        ]),")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      open,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      openVn,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),V=s("h3",{id:"\u4E0D\u540C\u72B6\u6001",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0D\u540C\u72B6\u6001","aria-hidden":"true"},"#"),o(" \u4E0D\u540C\u72B6\u6001")],-1),w=s("p",null,[o("\u4F20\u9012 "),s("code",null,"type"),o(" \u5305\u542B\uFF1Asuccess | warning | info | error")],-1),H=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"plain"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"open2"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">success</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"plain"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"open3"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">warning</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"plain"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"open1"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">message</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"plain"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"open4"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">error</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { CcMessage } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open1"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'this is a message.'"),s("span",{style:{color:"#24292F"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        message: "),s("span",{style:{color:"#0A3069"}},"'Congrats, this is a success message.'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type: "),s("span",{style:{color:"#0A3069"}},"'success'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open3"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        message: "),s("span",{style:{color:"#0A3069"}},"'Warning, this is a warning message.'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type: "),s("span",{style:{color:"#0A3069"}},"'warning'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open4"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        message: "),s("span",{style:{color:"#0A3069"}},"'Oops, this is a error message.'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type: "),s("span",{style:{color:"#0A3069"}},"'error'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      open1,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      open2,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      open3,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      open4,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),L=s("h3",{id:"\u6587\u5B57\u5C45\u4E2D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6587\u5B57\u5C45\u4E2D","aria-hidden":"true"},"#"),o(" \u6587\u5B57\u5C45\u4E2D")],-1),v=s("p",null,[o("\u4F7F\u7528 "),s("code",null,"center"),o(" \u5C5E\u6027\u8BA9\u6587\u5B57\u6C34\u5E73\u5C45\u4E2D\u3002")],-1),N=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"openCenter"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">Centered text</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { CcMessage } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"openCenter"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        message: "),s("span",{style:{color:"#0A3069"}},"'Centered text'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        center: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      openCenter,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),S=s("h3",{id:"\u4F7F\u7528-html-\u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4F7F\u7528-html-\u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9","aria-hidden":"true"},"#"),o(" \u4F7F\u7528 HTML \u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9")],-1),U=s("p",null,[s("code",null,"message"),o(" \u8FD8\u652F\u6301\u4F7F\u7528 HTML \u5B57\u7B26\u4E32\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")],-1),$=s("p",null,[o("\u5C06 "),s("code",null,"dangerouslyUseHTMLString"),o(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),s("code",null,"message"),o(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")],-1),O=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},"openHTML"),s("span",{style:{color:"#0A3069"}},'"'),s("span",{style:{color:"#24292F"}},">Use HTML String</"),s("span",{style:{color:"#116329"}},"cc-button"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { CcMessage } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"openHTML"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"CcMessage"),s("span",{style:{color:"#24292F"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        dangerouslyUseHTMLString: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        message: "),s("span",{style:{color:"#0A3069"}},"'<strong>This is <i>HTML</i> string</strong>'"),s("span",{style:{color:"#24292F"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      openHTML,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }"),s("span",{style:{color:"#953800"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),o(`
`),s("span",{class:"line"})])])],-1);function W(e,r,n,c,y,u){const p=_("render-demo-0"),a=_("demo"),l=_("render-demo-1"),m=_("render-demo-2"),t=_("render-demo-3");return f(),k("div",null,[B,M,D,x,i(a,{customClass:"demoblock-custom",sourceCode:`<template>
  <cc-button @click="open">Show message</cc-button>
  <cc-button @click="openVn">VNode</cc-button>
</template>

<script>
import { h } from 'vue'
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const open = () => {
      CcMessage('this is a message.')
    }

    const openVn = () => {
      CcMessage({
        message: h('p', null, [
          h('span', null, 'Message can be '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]),
      })
    }
    return {
      open,
      openVn,
    }
  },
}
<\/script>
`},{highlight:F(()=>[T]),default:F(()=>[i(p)]),_:1}),V,w,i(a,{customClass:"demoblock-custom",sourceCode:`<template>
  <cc-button :plain="true" @click="open2">success</cc-button>
  <cc-button :plain="true" @click="open3">warning</cc-button>
  <cc-button :plain="true" @click="open1">message</cc-button>
  <cc-button :plain="true" @click="open4">error</cc-button>
</template>

<script>
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const open1 = () => {
      CcMessage('this is a message.')
    }
    const open2 = () => {
      CcMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
      })
    }
    const open3 = () => {
      CcMessage({
        message: 'Warning, this is a warning message.',
        type: 'warning',
      })
    }
    const open4 = () => {
      CcMessage({
        message: 'Oops, this is a error message.',
        type: 'error',
      })
    }
    return {
      open1,
      open2,
      open3,
      open4,
    }
  },
}
<\/script>
`},{highlight:F(()=>[H]),default:F(()=>[i(l)]),_:1}),L,v,i(a,{customClass:"demoblock-custom",sourceCode:`<template>
  <cc-button @click="openCenter">Centered text</cc-button>
</template>

<script>
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const openCenter = () => {
      CcMessage({
        message: 'Centered text',
        center: true,
      })
    }
    return {
      openCenter,
    }
  },
}
<\/script>
`},{highlight:F(()=>[N]),default:F(()=>[i(m)]),_:1}),S,U,$,i(a,{customClass:"demoblock-custom",sourceCode:`<template>
  <cc-button @click="openHTML">Use HTML String</cc-button>
</template>

<script>
import { CcMessage } from 'mouse-cc-ui'

export default {
  setup() {
    const openHTML = () => {
      CcMessage({
        dangerouslyUseHTMLString: true,
        message: '<strong>This is <i>HTML</i> string</strong>',
      })
    }
    return {
      openHTML,
    }
  },
}
<\/script>
`},{highlight:F(()=>[O]),default:F(()=>[i(t)]),_:1})])}const z=A(b,[["render",W],["__file","message.html.vue"]]);export{z as default};
