import{S as e,i as t,s as n,D as s,q as i,h as o,k as r,a,n as l,t as c,o as d,C as p,p as u,A as m,X as f,V as v,w as h,W as x,e as w,b as g,f as A,j as b,u as y,x as k,z as I,c as j,B as L,g as D,m as $,d as _,r as H,Y as R,l as E}from"./main-4f9507e9.js";import{I as C}from"./ItemHelper-705e630f.js";function M(e){s(e,"svelte-4djjpi",".token.svelte-4djjpi.svelte-4djjpi:hover{border:1px solid #000!important}.bla .token:hover{border:1px solid #fff!important}.token_selected.svelte-4djjpi.svelte-4djjpi{background-color:#64bb63;color:#fff}.bla .token_highlight_heading{color:#000!important}.hotspot-token-preview.svelte-4djjpi br.svelte-4djjpi{clear:both}")}function S(e,t,n){const s=e.slice();return s[25]=t[n],s[27]=n,s}function N(e){let t,n,s,i,r,l,p,u;s=new C({props:{handleReviewClick:e[5],reviewMode:e[0].isReview}}),s.$on("setReview",e[2]),s.$on("unsetReview",e[3]);let m=e[0].itemLayout&&V(e);return{c(){t=w("div"),n=w("center"),j(s.$$.fragment),i=g(),r=w("div"),r.textContent=""+L.token_highlight,l=g(),p=w("div"),m&&m.c(),A(r,"class","token_highlight_heading font17 p-2 text-left"),D(r,"max-width","600px"),D(r,"border-top","2px solid #96bbf6"),D(r,"background-color","#d9e7fd"),A(p,"class","p-2"),D(p,"max-width","600px"),D(p,"border","2px solid #d9e7fd"),D(p,"display","flow-root"),D(p,"text-align","left"),D(p,"justify-content","left"),A(t,"class","hotspot-token-preview svelte-4djjpi"),A(t,"tabindex","0")},m(e,a){o(e,t,a),b(t,n),$(s,n,null),b(n,i),b(n,r),b(n,l),b(n,p),m&&m.m(p,null),u=!0},p(e,t){const n={};1&t&&(n.reviewMode=e[0].isReview),s.$set(n),e[0].itemLayout?m?m.p(e,t):(m=V(e),m.c(),m.m(p,null)):m&&(m.d(1),m=null)},i(e){u||(c(s.$$.fragment,e),u=!0)},o(e){a(s.$$.fragment,e),u=!1},d(e){e&&d(t),_(s),m&&m.d()}}}function O(e){let t;return{c(){t=w("div"),t.innerHTML="<span>Oops Something went wrong please check your ParseXML Function</span>",A(t,"class","alert alert-danger font-weight-bold")},m(e,n){o(e,t,n)},p:H,i:H,o:H,d(e){e&&d(t)}}}function V(e){let t,n=e[0].itemLayout,s=[];for(let t=0;t<n.length;t+=1)s[t]=U(S(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=i()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);o(e,t,n)},p(e,i){if(17&i){let o;for(n=e[0].itemLayout,o=0;o<n.length;o+=1){const r=S(e,n,o);s[o]?s[o].p(r,i):(s[o]=U(r),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){I(s,e),e&&d(t)}}}function T(e){let t,n=(e[25].value=e[25].value.replace(/##pt/g,"."))+"";return{c(){t=y(n)},m(e,n){o(e,t,n)},p(e,s){1&s&&n!==(n=(e[25].value=e[25].value.replace(/##pt/g,"."))+"")&&k(t,n)},d(e){e&&d(t)}}}function X(e){let t,n=(e[25].value=e[25].value.replace(/#cm/g,","))+"";return{c(){t=y(n)},m(e,n){o(e,t,n)},p(e,s){1&s&&n!==(n=(e[25].value=e[25].value.replace(/#cm/g,","))+"")&&k(t,n)},d(e){e&&d(t)}}}function P(e){let t,n,s,i,r,a,l,c,p,u,f,v,h,x,y,k,I,j=e[25].value+"";return{c(){t=w("div"),n=w("span"),c=g(),p=w("span"),u=w("span"),x=g(),A(n,"data-id",s="ID"+e[27]),A(n,"data-correct",i=m.findInArray("ID"+e[27],e[0].correctAns)),A(n,"data-selected",r=e[25].selected),A(n,"tabindex",a="auto"==e[0].pointerEvents?"0":"1"),A(n,"class",l="pointer float-left text-left font14 token "+(e[25].selected?"token_selected":"")+" svelte-4djjpi"),D(n,"margin","2px"),D(n,"user-select","none"),D(n,"border","1px solid transparent"),D(n,"padding","1px 3px"),D(n,"border-radius","3px"),D(n,"pointer-events",e[0].pointerEvents+"\r\n                                "),A(u,"class",f="position-relative "+(m.findInArray("ID"+e[27],e[0].correctAns)?"icomoon-new-24px-checkmark-circle-1":"icomoon-new-24px-cancel-circle-1")),D(u,"color",m.findInArray("ID"+e[27],e[0].correctAns)?"green":"red"),D(u,"bottom","3px"),D(u,"left","0"),A(u,"aria-label",v=m.findInArray("ID"+e[27],e[0].correctAns)?"marked as correct":"marked as incorrect"),A(p,"class",h=R(e[0].iconVisible)+" svelte-4djjpi"),D(p,"position","absolute"),D(p,"width","17px"),D(p,"height","17px"),D(p,"right","-8px"),D(p,"top","-9px"),D(p,"background","white"),D(p,"border-radius","15px 12px 12px"),D(p,"font-size","18px"),D(p,"z-index","1"),D(p,"display",(""==e[0].iconVisible&&e[25].selected?"block":"none")+"\r\n                                "),A(t,"key",y=e[27]),A(t,"class","tokenHeader position-relative float-left d-inline")},m(s,i){o(s,t,i),b(t,n),n.innerHTML=j,b(t,c),b(t,p),b(p,u),b(t,x),k||(I=E(n,"click",e[4].bind(this,e[27])),k=!0)},p(t,s){e=t,1&s&&j!==(j=e[25].value+"")&&(n.innerHTML=j),1&s&&i!==(i=m.findInArray("ID"+e[27],e[0].correctAns))&&A(n,"data-correct",i),1&s&&r!==(r=e[25].selected)&&A(n,"data-selected",r),1&s&&a!==(a="auto"==e[0].pointerEvents?"0":"1")&&A(n,"tabindex",a),1&s&&l!==(l="pointer float-left text-left font14 token "+(e[25].selected?"token_selected":"")+" svelte-4djjpi")&&A(n,"class",l),1&s&&D(n,"pointer-events",e[0].pointerEvents+"\r\n                                "),1&s&&f!==(f="position-relative "+(m.findInArray("ID"+e[27],e[0].correctAns)?"icomoon-new-24px-checkmark-circle-1":"icomoon-new-24px-cancel-circle-1"))&&A(u,"class",f),1&s&&D(u,"color",m.findInArray("ID"+e[27],e[0].correctAns)?"green":"red"),1&s&&v!==(v=m.findInArray("ID"+e[27],e[0].correctAns)?"marked as correct":"marked as incorrect")&&A(u,"aria-label",v),1&s&&h!==(h=R(e[0].iconVisible)+" svelte-4djjpi")&&A(p,"class",h),1&s&&D(p,"display",(""==e[0].iconVisible&&e[25].selected?"block":"none")+"\r\n                                ")},d(e){e&&d(t),k=!1,I()}}}function z(e){let t;return{c(){t=w("br"),A(t,"class","svelte-4djjpi")},m(e,n){o(e,t,n)},p:H,d(e){e&&d(t)}}}function F(e){let t,n,s,i,r=e[25].value+"";return{c(){t=w("div"),n=w("span"),s=y(r),i=g(),A(n,"class","float-left position-absolute"),D(n,"left","-2.5px"),D(n,"top","2px"),A(t,"class","float-left position-relative d-inline"),D(t,"width","1.5px"),D(t,"height","1px")},m(e,r){o(e,t,r),b(t,n),b(n,s),b(t,i)},p(e,t){1&t&&r!==(r=e[25].value+"")&&k(s,r)},d(e){e&&d(t)}}}function U(e){let t,n,s,r,a=e[25].value.indexOf("##pt")>-1,l=e[25].value.indexOf("#cm")>-1,c=a&&T(e),p=l&&X(e);function u(e,t){return","==e[25].value||"."==e[25].value?F:"#newline#"==e[25].value?z:P}let m=u(e),f=m(e);return{c(){t=w("div"),c&&c.c(),n=g(),p&&p.c(),s=g(),f.c(),r=i(),A(t,"class","h")},m(e,i){o(e,t,i),c&&c.m(t,null),b(t,n),p&&p.m(t,null),o(e,s,i),f.m(e,i),o(e,r,i)},p(e,s){1&s&&(a=e[25].value.indexOf("##pt")>-1),a?c?c.p(e,s):(c=T(e),c.c(),c.m(t,n)):c&&(c.d(1),c=null),1&s&&(l=e[25].value.indexOf("#cm")>-1),l?p?p.p(e,s):(p=X(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null),m===(m=u(e))&&f?f.p(e,s):(f.d(1),f=m(e),f&&(f.c(),f.m(r.parentNode,r)))},d(e){e&&d(t),c&&c.d(),p&&p.d(),e&&d(s),f.d(e),e&&d(r)}}}function q(e){let t,n,s,p;const u=[O,N],m=[];function f(e,t){return""!=e[1]?0:1}return t=f(e),n=m[t]=u[t](e),{c(){n.c(),s=i()},m(e,n){m[t].m(e,n),o(e,s,n),p=!0},p(e,[i]){let o=t;t=f(e),t===o?m[t].p(e,i):(r(),a(m[o],1,1,(()=>{m[o]=null})),l(),n=m[t],n?n.p(e,i):(n=m[t]=u[t](e),n.c()),c(n,1),n.m(s.parentNode,s))},i(e){p||(c(n),p=!0)},o(e){a(n),p=!1},d(e){m[t].d(e),e&&d(s)}}}function B(e,t,n){let{xml:s}=t,{editorState:i}=t,{isReview:o}=t,{showAns:r}=t,{uxml:a}=t,l=0,c={},d=h({xml:"",itemType:"",cdata:"",correctAns:"",userAns:[],itemLayout:[],smController:"h",pointerEvents:"auto",iconVisible:"h",isReview:!1}),w="";d.subscribe((e=>{n(0,c=e)}));function g(){n(0,c.isReview=!0,c),n(0,c.smController="",c),n(0,c.pointerEvents="none",c),y("yans","showIcon"),m.select(".tokenHeader","attr",{tabIndex:"0"})}function A(){n(0,c.isReview=!1,c),n(0,c.smController="h",c),n(0,c.pointerEvents="auto",c),y("yans","hideIcon"),m.select(".tokenHeader","removeAttr","tabindex")}function b(){ISSPECIALMODULEUSERXMLCHANGE=1;let e=0;const t=c.correctAns.length;c.correctAns.map(((t,n)=>{c.userAns.map(((n,s)=>{t==n&&(e+=1)}))}));let n=t==e&&e==c.userAns.length;x({ans:n,uXml:a}),r&&r(n?"Correct":"Incorrect")}function y(e,t){n(0,c.iconVisible="showIcon"==t?"":"h",c);let s=[];"cans"==e?s=c.correctAns:"yans"==e&&(s=c.userAns),c.itemLayout.map(((e,t)=>{e.selected=!!m.findInArray(e.id,s)}))}return p((()=>{s!=c.xml&&(n(0,c.xml=s,c),n(0,c.correctAns=[],c),n(0,c.userAns=[],c),async function(e){try{switch(n(0,c.correctAns=e.smxml.div._correctAns.split(","),c),n(0,c.itemType=e.smxml.div._type,c),n(0,c.cdata=e.smxml.div.__cdata,c),await v(),e.smxml.div._type){case"w":!function(e){let t=(e=e.replace(/\n/g," #newline# ")).split(" ").map((e=>e.trim())).filter((e=>""!=e)),s=[],i=[];t.map(((e,t)=>{let n=e.match(/[.,]/g);if(n){let t=e.split(n[0]);i.push(t[0]),i.push(n[0]),t[1].trim()&&i.push(t[1])}else i.push(e)})),i.map(((e,t)=>{s.push({id:"ID"+t,value:e,selected:!1})})),n(0,c.itemLayout=s,c)}(c.cdata);break;case"s":!function(e){let t=e.split(".").map((e=>e.trim())).filter((e=>""!=e)),s=[];t.map(((e,t)=>{s.push({id:"ID"+t,value:e+".",selected:!1})})),n(0,c.itemLayout=s,c)}(c.cdata);break;case"p":!function(e){let t=e.split("\n").map((e=>e.trim())).filter((e=>""!=e)),s=[];t.map(((e,t)=>{s.push({id:"ID"+t,value:e,selected:!1})})),n(0,c.itemLayout=s,c)}(c.cdata);break;default:console.warn("No type found to parse")}a&&function(e){let t=f(e);t.smans&&t.smans.div&&t.smans.div._userAns&&(n(0,c.userAns=t.smans.div._userAns.split(","),c),c.itemLayout.map(((e,t)=>{e.selected=!!m.findInArray(e.id,c.userAns)})))}(a)}catch(e){n(1,w=e),console.warn({error:e.message,"function name":"parseXMLPreview","File name":"HotspotTokenPreview.js"})}}(f(s)))})),u((()=>{m.listen("body","keydown",".token",((e,t)=>{13===t.which&&e.click()})),window.inNative&&window.getHeight&&window.getHeight()})),e.$$set=e=>{"xml"in e&&n(7,s=e.xml),"editorState"in e&&n(8,i=e.editorState),"isReview"in e&&n(9,o=e.isReview),"showAns"in e&&n(10,r=e.showAns),"uxml"in e&&n(6,a=e.uxml)},e.$$.update=()=>{2816&e.$$.dirty&&(o?(g(),i&&0==l&&(n(11,l=1),b())):(n(11,l=0),i&&A()))},[c,w,g,A,function(e){n(0,c.itemLayout[e].selected=!c.itemLayout[e].selected,c),function(e,t){let s=c.userAns;if(1==t)s.push("ID"+e),n(0,c.userAns=s,c);else if(0==t){let t=s.indexOf("ID"+e);t>-1&&s.splice(t,1),n(0,c.userAns=s,c)}window.inNative&&window.getHeight&&window.getHeight();n(6,a="<smans><div userAns='"+c.userAns.join()+"'></div></smans>"),b()}(e,c.itemLayout[e].selected)},function(e,t){"c"==e?y("cans","hideIcon"):y("yans","showIcon")},a,s,i,o,r,l]}export default class extends e{constructor(e){super(),t(this,e,B,q,n,{xml:7,editorState:8,isReview:9,showAns:10,uxml:6},M)}}
//# sourceMappingURL=HotspotTokenPreview-ec6a891c.js.map