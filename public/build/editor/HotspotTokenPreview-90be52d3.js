import{S as e,i as t,s as n,F as s,q as i,h as o,k as r,a,n as l,t as c,o as d,E as p,p as u,A as m,X as f,R as v,w as h,T as x,e as w,b as g,f as b,j as A,u as y,x as k,D as I,c as j,C as L,g as D,m as $,d as _,r as R,U as E,l as H}from"./main-cddbb274.js";import{I as C}from"./ItemHelper-3bd8492b.js";function S(e){s(e,"svelte-4djjpi",".token.svelte-4djjpi.svelte-4djjpi:hover{border:1px solid #000!important}.bla .token:hover{border:1px solid #fff!important}.token_selected.svelte-4djjpi.svelte-4djjpi{background-color:#64bb63;color:#fff}.bla .token_highlight_heading{color:#000!important}.hotspot-token-preview.svelte-4djjpi br.svelte-4djjpi{clear:both}")}function M(e,t,n){const s=e.slice();return s[25]=t[n],s[27]=n,s}function N(e){let t,n,s,i,r,l,p,u;s=new C({props:{handleReviewClick:e[5],reviewMode:e[0].isReview}}),s.$on("setReview",e[2]),s.$on("unsetReview",e[3]);let m=e[0].itemLayout&&V(e);return{c(){t=w("div"),n=w("center"),j(s.$$.fragment),i=g(),r=w("div"),r.textContent=""+L.token_highlight,l=g(),p=w("div"),m&&m.c(),b(r,"class","token_highlight_heading font17 p-2 text-left"),D(r,"max-width","600px"),D(r,"border-top","2px solid #96bbf6"),D(r,"background-color","#d9e7fd"),b(p,"class","p-2"),D(p,"max-width","600px"),D(p,"border","2px solid #d9e7fd"),D(p,"display","flow-root"),D(p,"text-align","left"),D(p,"justify-content","left"),b(t,"class","hotspot-token-preview svelte-4djjpi"),b(t,"tabindex","0")},m(e,a){o(e,t,a),A(t,n),$(s,n,null),A(n,i),A(n,r),A(n,l),A(n,p),m&&m.m(p,null),u=!0},p(e,t){const n={};1&t&&(n.reviewMode=e[0].isReview),s.$set(n),e[0].itemLayout?m?m.p(e,t):(m=V(e),m.c(),m.m(p,null)):m&&(m.d(1),m=null)},i(e){u||(c(s.$$.fragment,e),u=!0)},o(e){a(s.$$.fragment,e),u=!1},d(e){e&&d(t),_(s),m&&m.d()}}}function O(e){let t;return{c(){t=w("div"),t.innerHTML="<span>Oops Something went wrong please check your ParseXML Function</span>",b(t,"class","alert alert-danger font-weight-bold")},m(e,n){o(e,t,n)},p:R,i:R,o:R,d(e){e&&d(t)}}}function V(e){let t,n=e[0].itemLayout,s=[];for(let t=0;t<n.length;t+=1)s[t]=z(M(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=i()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);o(e,t,n)},p(e,i){if(17&i){let o;for(n=e[0].itemLayout,o=0;o<n.length;o+=1){const r=M(e,n,o);s[o]?s[o].p(r,i):(s[o]=z(r),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){I(s,e),e&&d(t)}}}function T(e){let t,n=(e[25].value=e[25].value.replace(/##pt/g,"."))+"";return{c(){t=y(n)},m(e,n){o(e,t,n)},p(e,s){1&s&&n!==(n=(e[25].value=e[25].value.replace(/##pt/g,"."))+"")&&k(t,n)},d(e){e&&d(t)}}}function X(e){let t,n=(e[25].value=e[25].value.replace(/#cm/g,","))+"";return{c(){t=y(n)},m(e,n){o(e,t,n)},p(e,s){1&s&&n!==(n=(e[25].value=e[25].value.replace(/#cm/g,","))+"")&&k(t,n)},d(e){e&&d(t)}}}function P(e){let t,n,s,i,r,a,l,c,p,u,f,v,h,x,I,j,L,$,_=e[25].value+"";return{c(){t=w("div"),n=w("span"),s=y(_),p=g(),u=w("span"),f=w("span"),I=g(),b(n,"data-id",i="ID"+e[27]),b(n,"data-correct",r=m.findInArray("ID"+e[27],e[0].correctAns)),b(n,"data-selected",a=e[25].selected),b(n,"tabindex",l="auto"==e[0].pointerEvents?"0":"1"),b(n,"class",c="pointer float-left text-left font14 token "+(e[25].selected?"token_selected":"")+" svelte-4djjpi"),D(n,"margin","2px"),D(n,"user-select","none"),D(n,"border","1px solid transparent"),D(n,"padding","1px 3px"),D(n,"border-radius","3px"),D(n,"pointer-events",e[0].pointerEvents+"\r\n                                "),b(f,"class",v="position-relative "+(m.findInArray("ID"+e[27],e[0].correctAns)?"icomoon-new-24px-checkmark-circle-1":"icomoon-new-24px-cancel-circle-1")),D(f,"color",m.findInArray("ID"+e[27],e[0].correctAns)?"green":"red"),D(f,"bottom","3px"),D(f,"left","0"),b(f,"aria-label",h=m.findInArray("ID"+e[27],e[0].correctAns)?"marked as correct":"marked as incorrect"),b(u,"class",x=E(e[0].iconVisible)+" svelte-4djjpi"),D(u,"position","absolute"),D(u,"width","17px"),D(u,"height","17px"),D(u,"right","-8px"),D(u,"top","-9px"),D(u,"background","white"),D(u,"border-radius","15px 12px 12px"),D(u,"font-size","18px"),D(u,"z-index","1"),D(u,"display",(""==e[0].iconVisible&&e[25].selected?"block":"none")+"\r\n                                "),b(t,"key",j=e[27]),b(t,"class","tokenHeader position-relative float-left d-inline")},m(i,r){o(i,t,r),A(t,n),A(n,s),A(t,p),A(t,u),A(u,f),A(t,I),L||($=H(n,"click",e[4].bind(this,e[27])),L=!0)},p(t,i){e=t,1&i&&_!==(_=e[25].value+"")&&k(s,_),1&i&&r!==(r=m.findInArray("ID"+e[27],e[0].correctAns))&&b(n,"data-correct",r),1&i&&a!==(a=e[25].selected)&&b(n,"data-selected",a),1&i&&l!==(l="auto"==e[0].pointerEvents?"0":"1")&&b(n,"tabindex",l),1&i&&c!==(c="pointer float-left text-left font14 token "+(e[25].selected?"token_selected":"")+" svelte-4djjpi")&&b(n,"class",c),1&i&&D(n,"pointer-events",e[0].pointerEvents+"\r\n                                "),1&i&&v!==(v="position-relative "+(m.findInArray("ID"+e[27],e[0].correctAns)?"icomoon-new-24px-checkmark-circle-1":"icomoon-new-24px-cancel-circle-1"))&&b(f,"class",v),1&i&&D(f,"color",m.findInArray("ID"+e[27],e[0].correctAns)?"green":"red"),1&i&&h!==(h=m.findInArray("ID"+e[27],e[0].correctAns)?"marked as correct":"marked as incorrect")&&b(f,"aria-label",h),1&i&&x!==(x=E(e[0].iconVisible)+" svelte-4djjpi")&&b(u,"class",x),1&i&&D(u,"display",(""==e[0].iconVisible&&e[25].selected?"block":"none")+"\r\n                                ")},d(e){e&&d(t),L=!1,$()}}}function F(e){let t;return{c(){t=w("br"),b(t,"class","svelte-4djjpi")},m(e,n){o(e,t,n)},p:R,d(e){e&&d(t)}}}function U(e){let t,n,s,i,r=e[25].value+"";return{c(){t=w("div"),n=w("span"),s=y(r),i=g(),b(n,"class","float-left position-absolute"),D(n,"left","-2.5px"),b(t,"class","float-left position-relative d-inline"),D(t,"width","1.5px"),D(t,"height","1px")},m(e,r){o(e,t,r),A(t,n),A(n,s),A(t,i)},p(e,t){1&t&&r!==(r=e[25].value+"")&&k(s,r)},d(e){e&&d(t)}}}function z(e){let t,n,s,r,a=e[25].value.indexOf("##pt")>-1,l=e[25].value.indexOf("#cm")>-1,c=a&&T(e),p=l&&X(e);function u(e,t){return","==e[25].value||"."==e[25].value?U:"#newline#"==e[25].value?F:P}let m=u(e),f=m(e);return{c(){t=w("div"),c&&c.c(),n=g(),p&&p.c(),s=g(),f.c(),r=i(),b(t,"class","h")},m(e,i){o(e,t,i),c&&c.m(t,null),A(t,n),p&&p.m(t,null),o(e,s,i),f.m(e,i),o(e,r,i)},p(e,s){1&s&&(a=e[25].value.indexOf("##pt")>-1),a?c?c.p(e,s):(c=T(e),c.c(),c.m(t,n)):c&&(c.d(1),c=null),1&s&&(l=e[25].value.indexOf("#cm")>-1),l?p?p.p(e,s):(p=X(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null),m===(m=u(e))&&f?f.p(e,s):(f.d(1),f=m(e),f&&(f.c(),f.m(r.parentNode,r)))},d(e){e&&d(t),c&&c.d(),p&&p.d(),e&&d(s),f.d(e),e&&d(r)}}}function q(e){let t,n,s,p;const u=[O,N],m=[];function f(e,t){return""!=e[1]?0:1}return t=f(e),n=m[t]=u[t](e),{c(){n.c(),s=i()},m(e,n){m[t].m(e,n),o(e,s,n),p=!0},p(e,[i]){let o=t;t=f(e),t===o?m[t].p(e,i):(r(),a(m[o],1,1,(()=>{m[o]=null})),l(),n=m[t],n?n.p(e,i):(n=m[t]=u[t](e),n.c()),c(n,1),n.m(s.parentNode,s))},i(e){p||(c(n),p=!0)},o(e){a(n),p=!1},d(e){m[t].d(e),e&&d(s)}}}function G(e,t,n){let{xml:s}=t,{editorState:i}=t,{isReview:o}=t,{showAns:r}=t,{uxml:a}=t,l=0,c={},d=h({xml:"",itemType:"",cdata:"",correctAns:"",userAns:[],itemLayout:[],smController:"h",pointerEvents:"auto",iconVisible:"h",isReview:!1}),w="";d.subscribe((e=>{n(0,c=e)}));function g(){n(0,c.isReview=!0,c),n(0,c.smController="",c),n(0,c.pointerEvents="none",c),y("yans","showIcon"),m.select(".tokenHeader","attr",{tabIndex:"0"})}function b(){n(0,c.isReview=!1,c),n(0,c.smController="h",c),n(0,c.pointerEvents="auto",c),y("yans","hideIcon"),m.select(".tokenHeader","removeAttr","tabindex")}function A(){ISSPECIALMODULEUSERXMLCHANGE=1;let e=0;const t=c.correctAns.length;c.correctAns.map(((t,n)=>{c.userAns.map(((n,s)=>{t==n&&(e+=1)}))}));let n=t==e&&e==c.userAns.length;x({ans:n,uXml:a}),r&&r(n?"Correct":"Incorrect")}function y(e,t){n(0,c.iconVisible="showIcon"==t?"":"h",c);let s=[];"cans"==e?s=c.correctAns:"yans"==e&&(s=c.userAns),c.itemLayout.map(((e,t)=>{e.selected=!!m.findInArray(e.id,s)}))}return p((()=>{s!=c.xml&&(n(0,c.xml=s,c),n(0,c.correctAns=[],c),n(0,c.userAns=[],c),async function(e){try{switch(n(0,c.correctAns=e.smxml.div._correctAns.split(","),c),n(0,c.itemType=e.smxml.div._type,c),n(0,c.cdata=e.smxml.div.__cdata,c),await v(),e.smxml.div._type){case"w":!function(e){let t=(e=e.replace(/\n/g," #newline# ")).split(" ").map((e=>e.trim())).filter((e=>""!=e)),s=[],i=[];t.map(((e,t)=>{let n=e.match(/[.,]/g);if(n){let t=e.split(n[0]);i.push(t[0]),i.push(n[0]),t[1].trim()&&i.push(t[1])}else i.push(e)})),i.map(((e,t)=>{s.push({id:"ID"+t,value:e,selected:!1})})),n(0,c.itemLayout=s,c)}(c.cdata);break;case"s":!function(e){let t=e.split(".").map((e=>e.trim())).filter((e=>""!=e)),s=[];t.map(((e,t)=>{s.push({id:"ID"+t,value:e+".",selected:!1})})),n(0,c.itemLayout=s,c)}(c.cdata);break;case"p":!function(e){let t=e.split("\n").map((e=>e.trim())).filter((e=>""!=e)),s=[];t.map(((e,t)=>{s.push({id:"ID"+t,value:e,selected:!1})})),n(0,c.itemLayout=s,c)}(c.cdata);break;default:console.warn("No type found to parse")}a&&function(e){let t=f(e);t.smans&&t.smans.div&&t.smans.div._userAns&&(n(0,c.userAns=t.smans.div._userAns.split(","),c),c.itemLayout.map(((e,t)=>{e.selected=!!m.findInArray(e.id,c.userAns)})))}(a)}catch(e){n(1,w=e),console.warn({error:e.message,"function name":"parseXMLPreview","File name":"HotspotTokenPreview.js"})}}(f(s)))})),u((()=>{m.listen("body","keydown",".token",((e,t)=>{13===t.which&&e.click()})),window.inNative&&window.getHeight&&window.getHeight()})),e.$$set=e=>{"xml"in e&&n(7,s=e.xml),"editorState"in e&&n(8,i=e.editorState),"isReview"in e&&n(9,o=e.isReview),"showAns"in e&&n(10,r=e.showAns),"uxml"in e&&n(6,a=e.uxml)},e.$$.update=()=>{2816&e.$$.dirty&&(o?(g(),i&&0==l&&(n(11,l=1),A())):(n(11,l=0),i&&b()))},[c,w,g,b,function(e){n(0,c.itemLayout[e].selected=!c.itemLayout[e].selected,c),function(e,t){let s=c.userAns;if(1==t)s.push("ID"+e),n(0,c.userAns=s,c);else if(0==t){let t=s.indexOf("ID"+e);t>-1&&s.splice(t,1),n(0,c.userAns=s,c)}window.inNative&&window.getHeight&&window.getHeight();n(6,a="<smans><div userAns='"+c.userAns.join()+"'></div></smans>"),A()}(e,c.itemLayout[e].selected)},function(e,t){"c"==e?y("cans","hideIcon"):y("yans","showIcon")},a,s,i,o,r,l]}export default class extends e{constructor(e){super(),t(this,e,G,q,n,{xml:7,editorState:8,isReview:9,showAns:10,uxml:6},S)}}
//# sourceMappingURL=HotspotTokenPreview-90be52d3.js.map
