import{V as g}from"./vue.runtime.esm-bundler.a6c02fd8.js";import{br as m,_ as C,r as d,o as w,c as f,a as c,w as y,b as s,d as o}from"./app.802f69d0.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:p,withCtx:n,createVNode:r,Fragment:k,openBlock:h,createElementBlock:i}=g;function a(v,x){const _=p("cc-button");return h(),i(k,null,[r(_,{onClick:v.open},{default:n(()=>[t("Show message")]),_:1},8,["onClick"]),r(_,{onClick:v.openVn},{default:n(()=>[t("VNode")]),_:1},8,["onClick"])],64)}const{h:e}=g,{CcMessage:u}=m;return{render:a,...{setup(){return{open:()=>{u("this is a message.")},openVn:()=>{u({message:e("p",null,[e("span",null,"Message can be "),e("i",{style:"color: teal"},"VNode")])})}}}}}}(),"render-demo-1":function(){const{createTextVNode:t,resolveComponent:p,withCtx:n,createVNode:r,Fragment:k,openBlock:h,createElementBlock:i}=g;function a(l,v){const x=p("cc-button");return h(),i(k,null,[r(x,{plain:!0,onClick:l.open2},{default:n(()=>[t("success")]),_:1},8,["onClick"]),r(x,{plain:!0,onClick:l.open3},{default:n(()=>[t("warning")]),_:1},8,["onClick"]),r(x,{plain:!0,onClick:l.open1},{default:n(()=>[t("message")]),_:1},8,["onClick"]),r(x,{plain:!0,onClick:l.open4},{default:n(()=>[t("error")]),_:1},8,["onClick"])],64)}const{CcMessage:e}=m;return{render:a,...{setup(){return{open1:()=>{e("this is a message.")},open2:()=>{e({message:"Congrats, this is a success message.",type:"success"})},open3:()=>{e({message:"Warning, this is a warning message.",type:"warning"})},open4:()=>{e({message:"Oops, this is a error message.",type:"error"})}}}}}}(),"render-demo-2":function(){const{createTextVNode:t,resolveComponent:p,withCtx:n,openBlock:r,createBlock:k}=g;function h(e,u){const l=p("cc-button");return r(),k(l,{onClick:e.openCenter},{default:n(()=>[t("Centered text")]),_:1},8,["onClick"])}const{CcMessage:i}=m;return{render:h,...{setup(){return{openCenter:()=>{i({message:"Centered text",center:!0})}}}}}}(),"render-demo-3":function(){const{createTextVNode:t,resolveComponent:p,withCtx:n,openBlock:r,createBlock:k}=g;function h(e,u){const l=p("cc-button");return r(),k(l,{onClick:e.openHTML},{default:n(()=>[t("Use HTML String")]),_:1},8,["onClick"])}const{CcMessage:i}=m;return{render:h,...{setup(){return{openHTML:()=>{i({dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})}}}}}}()}},F=s("h3",{id:"message-\u6D88\u606F\u63D0\u793A",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#message-\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#"),o(" Message \u6D88\u606F\u63D0\u793A")],-1),b=s("p",null,"\u5E38\u7528\u4E8E\u4E3B\u52A8\u64CD\u4F5C\u540E\u7684\u53CD\u9988\u63D0\u793A\u3002",-1),M=s("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),o(" \u57FA\u7840\u7528\u6CD5")],-1),E=s("p",null,"\u81EA\u9876\u90E8\u51FA\u73B0\uFF0C3 \u79D2\u540E\u81EA\u52A8\u6D88\u5931\u3002",-1),T=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"open"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">Show message</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"openVn"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">VNode</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-color-text)"}}," { h } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-color-text)"}}," { CcMessage } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  "),s("span",{style:{color:"var(--shiki-token-function)"}},"setup"),s("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"open"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'this is a message.'"),s("span",{style:{color:"var(--shiki-color-text)"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"openVn"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        message"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"h"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'p'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"null"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-color-text)"}}," [")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"          "),s("span",{style:{color:"var(--shiki-token-function)"}},"h"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'span'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"null"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Message can be '"),s("span",{style:{color:"var(--shiki-color-text)"}},")"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"          "),s("span",{style:{color:"var(--shiki-token-function)"}},"h"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'i'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-color-text)"}}," { style"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'color: teal'"),s("span",{style:{color:"var(--shiki-color-text)"}}," }"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},","),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'VNode'"),s("span",{style:{color:"var(--shiki-color-text)"}},")"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        ])"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      open"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      openVn"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  }"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),V=s("h3",{id:"\u4E0D\u540C\u72B6\u6001",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0D\u540C\u72B6\u6001","aria-hidden":"true"},"#"),o(" \u4E0D\u540C\u72B6\u6001")],-1),D=s("p",null,[o("\u4F20\u9012 "),s("code",null,"type"),o(" \u5305\u542B\uFF1Asuccess | warning | info | error")],-1),L=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-function)"}},"plain"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-token-constant)"}},"true"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"open2"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">success</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-function)"}},"plain"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-token-constant)"}},"true"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"open3"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">warning</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-function)"}},"plain"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-token-constant)"}},"true"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"open1"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">message</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-token-function)"}},"plain"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-token-constant)"}},"true"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"open4"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">error</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-color-text)"}}," { CcMessage } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  "),s("span",{style:{color:"var(--shiki-token-function)"}},"setup"),s("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"open1"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'this is a message.'"),s("span",{style:{color:"var(--shiki-color-text)"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"open2"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        message"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Congrats, this is a success message.'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        type"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'success'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"open3"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        message"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Warning, this is a warning message.'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        type"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'warning'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"open4"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        message"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Oops, this is a error message.'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        type"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'error'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      open1"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      open2"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      open3"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      open4"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  }"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),A=s("h3",{id:"\u6587\u5B57\u5C45\u4E2D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6587\u5B57\u5C45\u4E2D","aria-hidden":"true"},"#"),o(" \u6587\u5B57\u5C45\u4E2D")],-1),H=s("p",null,[o("\u4F7F\u7528 "),s("code",null,"center"),o(" \u5C5E\u6027\u8BA9\u6587\u5B57\u6C34\u5E73\u5C45\u4E2D\u3002")],-1),N=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"openCenter"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">Centered text</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-color-text)"}}," { CcMessage } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  "),s("span",{style:{color:"var(--shiki-token-function)"}},"setup"),s("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"openCenter"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        message"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Centered text'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        center"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"true"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      openCenter"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  }"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),S=s("h3",{id:"\u4F7F\u7528-html-\u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4F7F\u7528-html-\u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9","aria-hidden":"true"},"#"),o(" \u4F7F\u7528 HTML \u7247\u6BB5\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9")],-1),U=s("p",null,[s("code",null,"message"),o(" \u8FD8\u652F\u6301\u4F7F\u7528 HTML \u5B57\u7B26\u4E32\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")],-1),W=s("p",null,[o("\u5C06 "),s("code",null,"dangerouslyUseHTMLString"),o(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),s("code",null,"message"),o(" \u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")],-1),$=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"openHTML"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">Use HTML String</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"cc-button"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-color-text)"}}," { CcMessage } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'mouse-cc-ui'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-token-keyword)"}},"export"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"default"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  "),s("span",{style:{color:"var(--shiki-token-function)"}},"setup"),s("span",{style:{color:"var(--shiki-color-text)"}},"() {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"openHTML"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}}," () "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      "),s("span",{style:{color:"var(--shiki-token-function)"}},"CcMessage"),s("span",{style:{color:"var(--shiki-color-text)"}},"({")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        dangerouslyUseHTMLString"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"true"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"        message"),s("span",{style:{color:"var(--shiki-token-keyword)"}},":"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'<strong>This is <i>HTML</i> string</strong>'"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      })")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"return"),s("span",{style:{color:"var(--shiki-color-text)"}}," {")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"      openHTML"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"    }")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  }"),s("span",{style:{color:"var(--shiki-token-punctuation)"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),o(`
`),s("span",{class:"line"})])])],-1),I={class:"custom-container warning"},O=s("p",{class:"custom-container-title"},"WARNING",-1),G=s("code",null,"message",-1),R={href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"},X=s("code",null,"dangerouslyUseHTMLString",-1),j=s("code",null,"message",-1);function q(t,p,n,r,k,h){const i=d("render-demo-0"),a=d("demo"),e=d("render-demo-1"),u=d("render-demo-2"),l=d("render-demo-3"),v=d("ExternalLinkIcon");return w(),f("div",null,[F,b,M,E,c(a,{customClass:"",sourceCode:`<template>
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
`},{highlight:y(()=>[T]),default:y(()=>[c(i)]),_:1}),V,D,c(a,{customClass:"",sourceCode:`<template>
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
`},{highlight:y(()=>[L]),default:y(()=>[c(e)]),_:1}),A,H,c(a,{customClass:"",sourceCode:`<template>
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
`},{highlight:y(()=>[N]),default:y(()=>[c(u)]),_:1}),S,U,W,c(a,{customClass:"",sourceCode:`<template>
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
`},{highlight:y(()=>[$]),default:y(()=>[c(l)]),_:1}),s("div",I,[O,s("p",null,[G,o(" \u5C5E\u6027\u867D\u7136\u652F\u6301\u4F20\u5165 HTML \u7247\u6BB5\uFF0C\u4F46\u662F\u5728\u7F51\u7AD9\u4E0A\u52A8\u6001\u6E32\u67D3\u4EFB\u610F HTML \u662F\u975E\u5E38\u5371\u9669\u7684\uFF0C\u56E0\u4E3A\u5BB9\u6613\u5BFC\u81F4 "),s("a",R,[o("XSS"),c(v)]),o(" \u653B\u51FB\u3002 \u56E0\u6B64\u5728 "),X,o(" \u6253\u5F00\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u786E\u4FDD "),j,o(" \u7684\u5185\u5BB9\u662F\u53EF\u4FE1\u7684\u3002")])])])}const K=C(B,[["render",q],["__file","message.html.vue"]]);export{K as default};
