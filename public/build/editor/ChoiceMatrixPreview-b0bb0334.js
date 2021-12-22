import{S as e,i as t,s as l,D as c,e as o,j as r,q as a,h as s,u as m,f as n,W as i,x as h,o as d,z as u,b as _,g,l as f,c as p,m as b,t as x,a as A,d as E,C as F,a3 as v,p as y,X as D,A as C,w,V as k}from"./main-df37ef64.js";import{I as B}from"./ItemHelper-645a72a7.js";import{l as q}from"./parseCSV-929be628.js";const{document:N}=c;function S(e,t,l){const c=e.slice();return c[30]=t[l],c[32]=l,c}function $(e,t,l){const c=e.slice();return c[33]=t[l],c[35]=l,c}function M(e,t,l){const c=e.slice();return c[30]=t[l],c[32]=l,c}function R(e){let t,l=e[2].cdata.option,c=[];for(let t=0;t<l.length;t+=1)c[t]=j(M(e,l,t));return{c(){for(let e=0;e<c.length;e+=1)c[e].c();t=a()},m(e,l){for(let t=0;t<c.length;t+=1)c[t].m(e,l);s(e,t,l)},p(e,o){if(36&o[0]){let r;for(l=e[2].cdata.option,r=0;r<l.length;r+=1){const a=M(e,l,r);c[r]?c[r].p(a,o):(c[r]=j(a),c[r].c(),c[r].m(t.parentNode,t))}for(;r<c.length;r+=1)c[r].d(1);c.length=l.length}},d(e){u(c,e),e&&d(t)}}}function j(e){let t,l,c,a,u,_=e[30].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"";return{c(){t=o("th"),l=m(_),n(t,"key",c=e[32]),n(t,"class",a=i(("#5B9BD5"==e[5][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[5][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[5][e[2].theme]?"theme_color_theme3":"#70AD47"==e[5][e[2].theme]?"theme_color_theme4":"#745998"==e[5][e[2].theme]?"theme_color_theme5":"")+" preview_header adjust_width "+("theme3"!==e[2].theme?e[30].id+"text-center text-white":e[30].id+"text-center"))+" svelte-1tugc6q"),n(t,"tabindex",u=0)},m(e,c){s(e,t,c),r(t,l)},p(e,c){4&c[0]&&_!==(_=e[30].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&h(l,_),4&c[0]&&a!==(a=i(("#5B9BD5"==e[5][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[5][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[5][e[2].theme]?"theme_color_theme3":"#70AD47"==e[5][e[2].theme]?"theme_color_theme4":"#745998"==e[5][e[2].theme]?"theme_color_theme5":"")+" preview_header adjust_width "+("theme3"!==e[2].theme?e[30].id+"text-center text-white":e[30].id+"text-center"))+" svelte-1tugc6q")&&n(t,"class",a)},d(e){e&&d(t)}}}function J(e){let t,l=e[1].cdata.term,c=[];for(let t=0;t<l.length;t+=1)c[t]=z(S(e,l,t));return{c(){for(let e=0;e<c.length;e+=1)c[e].c();t=a()},m(e,l){for(let t=0;t<c.length;t+=1)c[t].m(e,l);s(e,t,l)},p(e,o){if(598&o[0]){let r;for(l=e[1].cdata.term,r=0;r<l.length;r+=1){const a=S(e,l,r);c[r]?c[r].p(a,o):(c[r]=z(a),c[r].c(),c[r].m(t.parentNode,t))}for(;r<c.length;r+=1)c[r].d(1);c.length=l.length}},d(e){u(c,e),e&&d(t)}}}function O(e){let t,l,c,a,m,h,u,g,p,b,x,A,E,F,v,y,D,C,w,k,B,q,N,S,$;return{c(){t=o("td"),l=o("i"),a=_(),m=o("i"),u=_(),g=o("input"),y=_(),D=o("label"),n(l,"class","fa fa-check svelte-1tugc6q"),n(l,"aria-hidden","true"),n(l,"style",c=H(e[4])),n(m,"class","fa fa-close"),n(m,"aria-hidden","true"),n(m,"style",h=H(e[4])),n(g,"type","radio"),n(g,"class","test_radio CMRad"),n(g,"style",p="vertical-align:middle;"),g.value=b=e[33].id,n(g,"name",x="tm"+(e[32]+1)),n(g,"id",A="t"+e[32]+e[35]),n(g,"data-termid",E=e[30].id),n(g,"data-correct",F=e[30].correct),n(g,"data-userans",""),n(g,"data-role","none"),n(g,"tabindex",v=-1),n(D,"tabindex",C=0),n(D,"class",w="label_choice customRadCM "+(e[35]%2==0?"tureitemColorCM":"falseitemColorCM")),n(D,"for",k="t"+e[32]+e[35]),n(t,"key",B=e[35]),n(t,"id",q="tb"+e[32]+e[35]),n(t,"class",N=i((e[32]%2==0?"#DEEAF6"==e[6][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[6][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[6][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[6][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[6][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" text-center test_area"+(e[33].id==e[30].correct?" dbg-success":" dbg-danger")+" position-relative")+" svelte-1tugc6q")},m(c,o){s(c,t,o),r(t,l),r(t,a),r(t,m),r(t,u),r(t,g),r(t,y),r(t,D),S||($=f(g,"click",e[9]),S=!0)},p(e,l){2&l[0]&&b!==(b=e[33].id)&&(g.value=b),2&l[0]&&E!==(E=e[30].id)&&n(g,"data-termid",E),2&l[0]&&F!==(F=e[30].correct)&&n(g,"data-correct",F),6&l[0]&&N!==(N=i((e[32]%2==0?"#DEEAF6"==e[6][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[6][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[6][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[6][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[6][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" text-center test_area"+(e[33].id==e[30].correct?" dbg-success":" dbg-danger")+" position-relative")+" svelte-1tugc6q")&&n(t,"class",N)},d(e){e&&d(t),S=!1,$()}}}function z(e){let t,l,c,a,m,h,f,p=e[30].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"",b=e[1].cdata.option,x=[];for(let t=0;t<b.length;t+=1)x[t]=O($(e,b,t));return{c(){t=o("tr"),l=o("td"),m=_();for(let e=0;e<x.length;e+=1)x[e].c();h=_(),n(l,"class",c=i((e[32]%2==0?"#DEEAF6"==e[6][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[6][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[6][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[6][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[6][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" "+e[30].id+" position-relative")+" svelte-1tugc6q"),n(l,"tabindex",a=0),g(l,"font-size","14pt"),g(l,"vertical-align","middle"),g(l,"font-family",e[2].font),n(t,"key",f=e[32])},m(e,c){s(e,t,c),r(t,l),l.innerHTML=p,r(t,m);for(let e=0;e<x.length;e+=1)x[e].m(t,null);r(t,h)},p(e,o){if(2&o[0]&&p!==(p=e[30].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&(l.innerHTML=p),6&o[0]&&c!==(c=i((e[32]%2==0?"#DEEAF6"==e[6][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[6][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[6][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[6][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[6][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" "+e[30].id+" position-relative")+" svelte-1tugc6q")&&n(l,"class",c),4&o[0]&&g(l,"font-family",e[2].font),598&o[0]){let l;for(b=e[1].cdata.option,l=0;l<b.length;l+=1){const c=$(e,b,l);x[l]?x[l].p(c,o):(x[l]=O(c),x[l].c(),x[l].m(t,h))}for(;l<x.length;l+=1)x[l].d(1);x.length=b.length}},d(e){e&&d(t),u(x,e)}}}function I(e){let t,l,c,a,u,g,f,F,v,y,D,C,w,k,q,N,S,$,M=e[2].stem.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"";l=new B({props:{handleReviewClick:e[10],reviewMode:e[0],customReviewMode:e[3]}}),l.$on("setReview",e[7]),l.$on("unsetReview",e[8]);let j=e[2].cdata&&R(e),O=e[1].cdata&&J(e);return{c(){t=o("div"),p(l.$$.fragment),c=_(),a=o("center"),u=o("table"),g=o("thead"),f=o("tr"),F=o("th"),v=m(M),C=_(),j&&j.c(),w=_(),k=o("tbody"),O&&O.c(),n(F,"class",y=i(("#5B9BD5"==e[5][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[5][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[5][e[2].theme]?"theme_color_theme3":"#70AD47"==e[5][e[2].theme]?"theme_color_theme4":"#745998"==e[5][e[2].theme]?"theme_color_theme5":"")+" preview_header "+("theme3"!==e[2].theme?"text-center text-white":" text-center"))+" svelte-1tugc6q"),n(F,"tabindex",D=0),n(f,"class","table-head"),n(u,"class",q="table testmode_table "),n(u,"id","test_table"),n(u,"style",N="position:relative; margin-top:20px;width:"+e[2].maxWidth+"px;font-family: Georgia;"),n(t,"class","mainAdaArea"),n(t,"id","choicemain"),n(t,"style",S="margin-bottom:20px")},m(e,o){s(e,t,o),b(l,t,null),r(t,c),r(t,a),r(a,u),r(u,g),r(g,f),r(f,F),r(F,v),r(f,C),j&&j.m(f,null),r(u,w),r(u,k),O&&O.m(k,null),$=!0},p(e,t){const c={};1&t[0]&&(c.reviewMode=e[0]),l.$set(c),(!$||4&t[0])&&M!==(M=e[2].stem.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&h(v,M),(!$||4&t[0]&&y!==(y=i(("#5B9BD5"==e[5][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[5][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[5][e[2].theme]?"theme_color_theme3":"#70AD47"==e[5][e[2].theme]?"theme_color_theme4":"#745998"==e[5][e[2].theme]?"theme_color_theme5":"")+" preview_header "+("theme3"!==e[2].theme?"text-center text-white":" text-center"))+" svelte-1tugc6q"))&&n(F,"class",y),e[2].cdata?j?j.p(e,t):(j=R(e),j.c(),j.m(f,null)):j&&(j.d(1),j=null),e[1].cdata?O?O.p(e,t):(O=J(e),O.c(),O.m(k,null)):O&&(O.d(1),O=null),(!$||4&t[0]&&N!==(N="position:relative; margin-top:20px;width:"+e[2].maxWidth+"px;font-family: Georgia;"))&&n(u,"style",N)},i(e){$||(x(l.$$.fragment,e),$=!0)},o(e){A(l.$$.fragment,e),$=!1},d(e){e&&d(t),E(l),j&&j.d(),O&&O.d()}}}function W(){let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].getAttribute("id")==e[t].getAttribute("data-userans")?e[t].checked=!0:e[t].checked=!1}function L(){!function(){let e=document.querySelectorAll(" .test_radio");for(let t=0;t<e.length;t++)e[t].getAttribute("value")==e[t].getAttribute("data-correct")?e[t].checked=!0:e[t].checked=!1}(),T()}function T(){let e=document.getElementsByClassName("fa-check"),t=document.getElementsByClassName("fa-close");for(let l=0;l<e.length;l++)e[l].style.display="none",t[l].style.display="none"}function H(e){return 1==e?{paddingLeft:"14px",display:"inline-flex",position:"absolute"}:{paddingLeft:"15px",display:"none",position:"absolute"}}function V(e,t,l){let c,{showAns:o}=t,{editorState:r}=t,{xml:a}=t,{uxml:s}=t,{isReview:m}=t,{CM:n}=t,i=m,h=m,d={cdata:""},u={},_=0;w({cdata:"",stem:"",xml:"",theme:"",font:"",maxWidth:"",totalcorrectans:""}).subscribe((e=>{l(2,u=e)}));function g(){let e=function(){let e=0,t=0,l=document.getElementsByClassName("test_radio");for(let t=0;t<l.length;t++)if(l[t].getAttribute("value")==l[t].getAttribute("data-correct")){if(1!=l[t].checked)return e=0,l[t].setAttribute("as",0),!1;l[t].setAttribute("as",1),e=1}for(let e=0;e<l.length;e++)l[e].getAttribute("value")==l[e].getAttribute("data-correct")&&1==l[e].checked&&t++,"undefined"!=typeof calculatePoint&&calculatePoint(u.totalcorrectans,t);return e}();e=1==e,s?C.select("#answer").checked=e:r&&o(e?"Correct":"Incorrect"),k({uXml:c,ans:e})}function f(){W(),A()}function p(){l(0,m=!0),x(m),f()}function b(){l(0,m=!1);let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].disabled=!1;T()}function x(e){if(e){let e="#main-"+n,t=C.selectAll(e+" .test_radio");for(let e=0;e<t.length;e++)t[e].disabled=!0}}function A(){C.select(".dbg-success input","checked").forEach((e=>{C.siblings(e,".fa-check").forEach((e=>{e.style.display="inline-flex"}))})),C.select(".dbg-danger input","checked").forEach((e=>{C.siblings(e,".fa-close").forEach((e=>{e.style.display="inline-flex"}))})),C.selectAll(".dbg-success input, .dbg-danger input","removeAttr","as"),C.select(".dbg-success input","checked").forEach((e=>{e.setAttribute("as",1)})),C.select(".dbg-success input","checked").forEach((e=>{e.setAttribute("as",0)})),C.select(".dbg-success input","checked").forEach((e=>{C.siblings(e,".label_choice").forEach((e=>{e.setAttribute("title","is marked as correct")}))})),C.select(".dbg-danger input","checked").forEach((e=>{C.siblings(e,".label_choice").forEach((e=>{e.setAttribute("title","is marked as incorrect")}))}))}return F((()=>{var e;a!=u.xml&&(l(2,u.xml=a,u),e=s,function(e,t){l(2,u.theme=e.smxml._theme,u),l(2,u.font=e.smxml._font,u),l(2,u.maxWidth=e.smxml._maxwidth?e.smxml._maxwidth:800,u);let c=q.parseCSVFormat(e.smxml.__cdata),o=[];o=JSON.parse(JSON.stringify(c)),l(2,u.cdata=o,u),l(2,u.stem=o.stem,u),l(1,d.cdata=o,d);let r=d.cdata.term.length;if(l(2,u.totalcorrectans=r,u),b(),t)try{t=JSON.parse(t);let e=[];e=JSON.parse(JSON.stringify(t)),setTimeout((function(){e.ans.map((function(e,t){C.selectAll(".test_area #"+e.userAns,"attr",{"data-userans":e.userAns})})),W()}),100)}catch(e){}else{let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].checked=!1,e[t].setAttribute("data-userans","")}}(D(a),e))})),v((()=>{x(i),m||T(),i&&setTimeout((function(){A()}),300)})),y((()=>{AI.listen("body","keydown",".label_choice",(function(e,t){13===t.which&&e.click()}))})),e.$$set=e=>{"showAns"in e&&l(11,o=e.showAns),"editorState"in e&&l(12,r=e.editorState),"xml"in e&&l(13,a=e.xml),"uxml"in e&&l(14,s=e.uxml),"isReview"in e&&l(0,m=e.isReview),"CM"in e&&l(15,n=e.CM)},e.$$.update=()=>{200705&e.$$.dirty[0]&&h!=m&&(m?(p(),r&&0==_&&(l(17,_=1),g())):(l(17,_=0),W(),b()),l(16,h=m))},[m,d,u,i,undefined,{theme1:"#5B9BD5",theme2:"#3B67BC",theme3:"#F6C3A2",theme4:"#70AD47",theme5:"#745998"},{theme1:"#DEEAF6",theme2:"#D4DEF1",theme3:"#FAE0CF",theme4:"#E2EFD9",theme5:"#E1DAE9"},function(){p()},function(){W(),b()},function(e){let t=e.target.id,l=e.target.name,o=document.querySelectorAll(" .test_area input[name="+l+"]");for(let e=0;e<o.length;e++)o[e].setAttribute("data-userans","");C.selectAll(" .test_area #"+t,"attr",{"data-userans":t});let r={type:"34",ans:[]},a=document.getElementsByClassName("test_radio");for(let e=0;e<a.length;e++)1==a[e].checked&&r.ans.push({id:a[e].getAttribute("data-termid"),userAns:a[e].getAttribute("id")});c=JSON.stringify(r),g()},function(e,t){"c"==e?L():f()},o,r,a,s,n,h,_]}export default class extends e{constructor(e){var c;super(),N.getElementById("svelte-1tugc6q-style")||((c=o("style")).id="svelte-1tugc6q-style",c.textContent=".fa-close{margin-left:20px;font-size:18px;position:absolute;top:10px;color:#A80000}.fa-check{margin-left:20px;font-size:18px;position:absolute;top:10px;color:#46A546}.fa-close,.fa-check.svelte-1tugc6q,.middle_align.svelte-1tugc6q{vertical-align:middle!important}.middle_align{width:164px;min-width:164px}.topic_input{min-width:257px}.preview_header{font-size:16pt;font-weight:bold;vertical-align:middle}.adjust_width{width:10%;text-align:center}.theme_color_theme1.svelte-1tugc6q{background-color:#5B9BD5!important}.theme_color_theme2.svelte-1tugc6q{background-color:#3B67BC!important}.theme_color_theme3.svelte-1tugc6q{background-color:#F6C3A2!important}.theme_color_theme4.svelte-1tugc6q{background-color:#70AD47!important}.theme_color_theme5.svelte-1tugc6q{background-color:#745998!important}.theme_color_terms_theme1.svelte-1tugc6q{background-color:#DEEAF6}.theme_color_terms_theme2.svelte-1tugc6q{background-color:#D4DEF1}.theme_color_terms_theme3.svelte-1tugc6q{background-color:#FAE0CF}.theme_color_terms_theme4.svelte-1tugc6q{background-color:#E2EFD9}.theme_color_terms_theme5.svelte-1tugc6q{background-color:#E1DAE9}",r(N.head,c)),t(this,e,V,I,l,{showAns:11,editorState:12,xml:13,uxml:14,isReview:0,CM:15},[-1,-1])}}
//# sourceMappingURL=ChoiceMatrixPreview-b0bb0334.js.map
