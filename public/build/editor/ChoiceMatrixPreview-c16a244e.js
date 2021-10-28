import{S as e,i as t,s as l,F as r,e as o,j as m,q as a,h as c,u as s,f as i,Z as n,x as h,o as d,D as _,b as u,g as f,l as p,c as g,m as b,t as x,a as E,d as A,E as F,a5 as v,p as y,X as D,A as k,w,Y as C}from"./main-3b53728c.js";import{I as B}from"./ItemHelper-87575141.js";import{l as z}from"./parseCSV-929be628.js";const{document:N}=r;function S(e,t,l){const r=e.slice();return r[26]=t[l],r[28]=l,r}function $(e,t,l){const r=e.slice();return r[29]=t[l],r[31]=l,r}function R(e,t,l){const r=e.slice();return r[26]=t[l],r[28]=l,r}function j(e){let t,l=e[2].cdata.option,r=[];for(let t=0;t<l.length;t+=1)r[t]=J(R(e,l,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=a()},m(e,l){for(let t=0;t<r.length;t+=1)r[t].m(e,l);c(e,t,l)},p(e,o){if(20&o[0]){let m;for(l=e[2].cdata.option,m=0;m<l.length;m+=1){const a=R(e,l,m);r[m]?r[m].p(a,o):(r[m]=J(a),r[m].c(),r[m].m(t.parentNode,t))}for(;m<r.length;m+=1)r[m].d(1);r.length=l.length}},d(e){_(r,e),e&&d(t)}}}function J(e){let t,l,r,a,_,u=e[26].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"";return{c(){t=o("th"),l=s(u),i(t,"key",r=e[28]),i(t,"class",a=n(("#5B9BD5"==e[4][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[4][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[4][e[2].theme]?"theme_color_theme3":"#70AD47"==e[4][e[2].theme]?"theme_color_theme4":"#745998"==e[4][e[2].theme]?"theme_color_theme5":"")+" preview_header adjust_width "+("theme3"!==e[2].theme?e[26].id+"text-center text-white":e[26].id+"text-center"))+" svelte-izmpft"),i(t,"tabindex",_=0)},m(e,r){c(e,t,r),m(t,l)},p(e,r){4&r[0]&&u!==(u=e[26].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&h(l,u),4&r[0]&&a!==(a=n(("#5B9BD5"==e[4][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[4][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[4][e[2].theme]?"theme_color_theme3":"#70AD47"==e[4][e[2].theme]?"theme_color_theme4":"#745998"==e[4][e[2].theme]?"theme_color_theme5":"")+" preview_header adjust_width "+("theme3"!==e[2].theme?e[26].id+"text-center text-white":e[26].id+"text-center"))+" svelte-izmpft")&&i(t,"class",a)},d(e){e&&d(t)}}}function M(e){let t,l=e[1].cdata.term,r=[];for(let t=0;t<l.length;t+=1)r[t]=I(S(e,l,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=a()},m(e,l){for(let t=0;t<r.length;t+=1)r[t].m(e,l);c(e,t,l)},p(e,o){if(302&o[0]){let m;for(l=e[1].cdata.term,m=0;m<l.length;m+=1){const a=S(e,l,m);r[m]?r[m].p(a,o):(r[m]=I(a),r[m].c(),r[m].m(t.parentNode,t))}for(;m<r.length;m+=1)r[m].d(1);r.length=l.length}},d(e){_(r,e),e&&d(t)}}}function O(e){let t,l,r,a,s,h,_,f,g,b,x,E,A,F,v,y,D,k,w,C,B,z,N,S,$;return{c(){t=o("td"),l=o("i"),a=u(),s=o("i"),_=u(),f=o("input"),y=u(),D=o("label"),i(l,"class","fa fa-check svelte-izmpft"),i(l,"aria-hidden","true"),i(l,"style",r=P(e[3])),i(s,"class","fa fa-close"),i(s,"aria-hidden","true"),i(s,"style",h=P(e[3])),i(f,"type","radio"),i(f,"class","test_radio CMRad"),i(f,"style",g="vertical-align:middle;"),f.value=b=e[29].id,i(f,"name",x="tm"+(e[28]+1)),i(f,"id",E="t"+e[28]+e[31]),i(f,"data-termid",A=e[26].id),i(f,"data-correct",F=e[26].correct),i(f,"data-userans",""),i(f,"data-role","none"),i(f,"tabindex",v=-1),i(D,"tabindex",k=0),i(D,"class",w="label_choice customRadCM "+(e[31]%2==0?"tureitemColorCM":"falseitemColorCM")),i(D,"for",C="t"+e[28]+e[31]),i(t,"key",B=e[31]),i(t,"id",z="tb"+e[28]+e[31]),i(t,"class",N=n((e[28]%2==0?"#DEEAF6"==e[5][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[5][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[5][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[5][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[5][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" text-center test_area"+(e[29].id==e[26].correct?" dbg-success":" dbg-danger")+" position-relative")+" svelte-izmpft")},m(r,o){c(r,t,o),m(t,l),m(t,a),m(t,s),m(t,_),m(t,f),m(t,y),m(t,D),S||($=p(f,"click",e[8]),S=!0)},p(e,l){2&l[0]&&b!==(b=e[29].id)&&(f.value=b),2&l[0]&&A!==(A=e[26].id)&&i(f,"data-termid",A),2&l[0]&&F!==(F=e[26].correct)&&i(f,"data-correct",F),6&l[0]&&N!==(N=n((e[28]%2==0?"#DEEAF6"==e[5][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[5][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[5][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[5][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[5][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" text-center test_area"+(e[29].id==e[26].correct?" dbg-success":" dbg-danger")+" position-relative")+" svelte-izmpft")&&i(t,"class",N)},d(e){e&&d(t),S=!1,$()}}}function I(e){let t,l,r,a,p,g,b,x,E=e[26].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"",A=e[1].cdata.option,F=[];for(let t=0;t<A.length;t+=1)F[t]=O($(e,A,t));return{c(){t=o("tr"),l=o("td"),r=s(E),g=u();for(let e=0;e<F.length;e+=1)F[e].c();b=u(),i(l,"class",a=n((e[28]%2==0?"#DEEAF6"==e[5][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[5][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[5][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[5][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[5][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" "+e[26].id+" position-relative")+" svelte-izmpft"),i(l,"tabindex",p=0),f(l,"font-size","14pt"),f(l,"vertical-align","middle"),f(l,"font-family",e[2].font),i(t,"key",x=e[28])},m(e,o){c(e,t,o),m(t,l),m(l,r),m(t,g);for(let e=0;e<F.length;e+=1)F[e].m(t,null);m(t,b)},p(e,o){if(2&o[0]&&E!==(E=e[26].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&h(r,E),6&o[0]&&a!==(a=n((e[28]%2==0?"#DEEAF6"==e[5][e[2].theme]?"theme_color_terms_theme1":"#D4DEF1"==e[5][e[2].theme]?"theme_color_terms_theme2":"#FAE0CF"==e[5][e[2].theme]?"theme_color_terms_theme3":"#E2EFD9"==e[5][e[2].theme]?"theme_color_terms_theme4":"#E1DAE9"==e[5][e[2].theme]?"theme_color_terms_theme5":"#FFF":"#FFF")+" "+e[26].id+" position-relative")+" svelte-izmpft")&&i(l,"class",a),4&o[0]&&f(l,"font-family",e[2].font),302&o[0]){let l;for(A=e[1].cdata.option,l=0;l<A.length;l+=1){const r=$(e,A,l);F[l]?F[l].p(r,o):(F[l]=O(r),F[l].c(),F[l].m(t,b))}for(;l<F.length;l+=1)F[l].d(1);F.length=A.length}},d(e){e&&d(t),_(F,e)}}}function W(e){let t,l,r,a,_,f,p,F,v,y,D,k,w,C,z,N,S,$,R,J=e[2].stem.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"";r=new B({props:{handleReviewClick:e[9],reviewMode:e[0]}}),r.$on("setReview",e[6]),r.$on("unsetReview",e[7]);let O=e[2].cdata&&j(e),I=e[1].cdata&&M(e);return{c(){t=o("main"),l=o("div"),g(r.$$.fragment),a=u(),_=o("center"),f=o("table"),p=o("thead"),F=o("tr"),v=o("th"),y=s(J),w=u(),O&&O.c(),C=u(),z=o("tbody"),I&&I.c(),i(v,"class",D=n(("#5B9BD5"==e[4][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[4][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[4][e[2].theme]?"theme_color_theme3":"#70AD47"==e[4][e[2].theme]?"theme_color_theme4":"#745998"==e[4][e[2].theme]?"theme_color_theme5":"")+" preview_header "+("theme3"!==e[2].theme?"text-center text-white":" text-center"))+" svelte-izmpft"),i(v,"tabindex",k=0),i(F,"class","table-head"),i(f,"class",N="table testmode_table "),i(f,"id","test_table"),i(f,"style",S="position:relative; margin-top:20px;width:"+e[2].maxWidth+"px;font-family: Georgia;"),i(l,"id","choicemain"),i(l,"style",$="margin-bottom:20px")},m(e,o){c(e,t,o),m(t,l),b(r,l,null),m(l,a),m(l,_),m(_,f),m(f,p),m(p,F),m(F,v),m(v,y),m(F,w),O&&O.m(F,null),m(f,C),m(f,z),I&&I.m(z,null),R=!0},p(e,t){const l={};1&t[0]&&(l.reviewMode=e[0]),r.$set(l),(!R||4&t[0])&&J!==(J=e[2].stem.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&h(y,J),(!R||4&t[0]&&D!==(D=n(("#5B9BD5"==e[4][e[2].theme]?"theme_color_theme1":"#3B67BC"==e[4][e[2].theme]?"theme_color_theme2":"#F6C3A2"==e[4][e[2].theme]?"theme_color_theme3":"#70AD47"==e[4][e[2].theme]?"theme_color_theme4":"#745998"==e[4][e[2].theme]?"theme_color_theme5":"")+" preview_header "+("theme3"!==e[2].theme?"text-center text-white":" text-center"))+" svelte-izmpft"))&&i(v,"class",D),e[2].cdata?O?O.p(e,t):(O=j(e),O.c(),O.m(F,null)):O&&(O.d(1),O=null),e[1].cdata?I?I.p(e,t):(I=M(e),I.c(),I.m(z,null)):I&&(I.d(1),I=null),(!R||4&t[0]&&S!==(S="position:relative; margin-top:20px;width:"+e[2].maxWidth+"px;font-family: Georgia;"))&&i(f,"style",S)},i(e){R||(x(r.$$.fragment,e),R=!0)},o(e){E(r.$$.fragment,e),R=!1},d(e){e&&d(t),A(r),O&&O.d(),I&&I.d()}}}function q(){let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].getAttribute("id")==e[t].getAttribute("data-userans")?e[t].checked=!0:e[t].checked=!1}function G(){!function(){let e=document.querySelectorAll(" .test_radio");for(let t=0;t<e.length;t++)e[t].getAttribute("value")==e[t].getAttribute("data-correct")?e[t].checked=!0:e[t].checked=!1}(),L()}function L(){let e=document.getElementsByClassName("fa-check"),t=document.getElementsByClassName("fa-close");for(let l=0;l<e.length;l++)e[l].style.display="none",t[l].style.display="none"}function P(e){return 1==e?{paddingLeft:"14px",display:"inline-flex",position:"absolute"}:{paddingLeft:"15px",display:"none",position:"absolute"}}function V(e,t,l){let r,{showAns:o}=t,{editorState:m}=t,{xml:a}=t,{uxml:c}=t,{isReview:s}=t,i={cdata:""},n={},h=0;w({cdata:"",stem:"",xml:"",theme:"",font:"",maxWidth:"",totalcorrectans:""}).subscribe((e=>{l(2,n=e)}));function d(){let e=function(){let e=0,t=0,l=document.getElementsByClassName("test_radio");for(let t=0;t<l.length;t++)if(l[t].getAttribute("value")==l[t].getAttribute("data-correct")){if(1!=l[t].checked)return e=0,l[t].setAttribute("as",0),!1;l[t].setAttribute("as",1),e=1}for(let e=0;e<l.length;e++)l[e].getAttribute("value")==l[e].getAttribute("data-correct")&&1==l[e].checked&&t++,"undefined"!=typeof calculatePoint&&calculatePoint(n.totalcorrectans,t);return e}();e=1==e,c?k.select("#answer").checked=e:m&&o(e?"Correct":"Incorrect"),C({uXml:r,ans:e})}function _(){q(),k.select(".dbg-success input","checked").forEach((e=>{k.siblings(e,".fa-check").forEach((e=>{e.style.display="inline-flex"}))})),k.select(".dbg-danger input","checked").forEach((e=>{k.siblings(e,".fa-close").forEach((e=>{e.style.display="inline-flex"}))})),k.selectAll(".dbg-success input, .dbg-danger input","removeAttr","as"),k.select(".dbg-success input","checked").forEach((e=>{e.setAttribute("as",1)})),k.select(".dbg-success input","checked").forEach((e=>{e.setAttribute("as",0)})),k.select(".dbg-success input","checked").forEach((e=>{k.siblings(e,".label_choice").forEach((e=>{e.setAttribute("title","is marked as correct")}))})),k.select(".dbg-danger input","checked").forEach((e=>{k.siblings(e,".label_choice").forEach((e=>{e.setAttribute("title","is marked as incorrect")}))}))}function u(){l(0,s=!0);let e=k.selectAll(" .test_radio");for(let t=0;t<e.length;t++)e[t].disabled=!0;_()}function f(){l(0,s=!1);let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].disabled=!1;L()}return F((()=>{var e;a!=n.xml&&(l(2,n.xml=a,n),e=c,function(e,t){l(2,n.theme=e.smxml._theme,n),l(2,n.font=e.smxml._font,n),l(2,n.maxWidth=e.smxml._maxwidth?e.smxml._maxwidth:800,n);let r=z.parseCSVFormat(e.smxml.__cdata),o=[];o=JSON.parse(JSON.stringify(r)),l(2,n.cdata=o,n),l(2,n.stem=o.stem,n),l(1,i.cdata=o,i);let m=i.cdata.term.length;if(l(2,n.totalcorrectans=m,n),f(),t)try{t=JSON.parse(t);let e=[];e=JSON.parse(JSON.stringify(t)),setTimeout((function(){e.ans.map((function(e,t){k.selectAll(".test_area #"+e.userAns,"attr",{"data-userans":e.userAns})})),q()}),100)}catch(e){}else{let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].checked=!1,e[t].setAttribute("data-userans","")}}(D(a),e))})),v((()=>{s||L()})),y((()=>{AI.listen("body","keydown",".label_choice",(function(e,t){13===t.which&&e.click()}))})),e.$$set=e=>{"showAns"in e&&l(10,o=e.showAns),"editorState"in e&&l(11,m=e.editorState),"xml"in e&&l(12,a=e.xml),"uxml"in e&&l(13,c=e.uxml),"isReview"in e&&l(0,s=e.isReview)},e.$$.update=()=>{18433&e.$$.dirty[0]&&(s?(u(),m&&0==h&&(l(14,h=1),d())):(l(14,h=0),q(),f()))},[s,i,n,undefined,{theme1:"#5B9BD5",theme2:"#3B67BC",theme3:"#F6C3A2",theme4:"#70AD47",theme5:"#745998"},{theme1:"#DEEAF6",theme2:"#D4DEF1",theme3:"#FAE0CF",theme4:"#E2EFD9",theme5:"#E1DAE9"},function(){u()},function(){q(),f()},function(e){let t=e.target.id,l=e.target.name,o=document.querySelectorAll(" .test_area input[name="+l+"]");for(let e=0;e<o.length;e++)o[e].setAttribute("data-userans","");k.selectAll(" .test_area #"+t,"attr",{"data-userans":t});let m={type:"34",ans:[]},a=document.getElementsByClassName("test_radio");for(let e=0;e<a.length;e++)1==a[e].checked&&m.ans.push({id:a[e].getAttribute("data-termid"),userAns:a[e].getAttribute("id")});r=JSON.stringify(m),d()},function(e,t){"c"==e?G():_()},o,m,a,c,h]}export default class extends e{constructor(e){var r;super(),N.getElementById("svelte-izmpft-style")||((r=o("style")).id="svelte-izmpft-style",r.textContent=".fa-close{margin-left:20px;font-size:18px;position:absolute;top:10px;color:#A80000}.fa-check{margin-left:20px;font-size:18px;position:absolute;top:10px;color:#46A546}.fa-close,.fa-check.svelte-izmpft,.middle_align.svelte-izmpft{vertical-align:middle!important}.middle_align{width:164px;min-width:164px}.topic_input{min-width:257px}.preview_header{font-size:16pt;font-weight:bold;vertical-align:middle}.adjust_width{width:10%;text-align:center}.theme_color_theme1.svelte-izmpft{background-color:#5B9BD5!important}.theme_color_theme2.svelte-izmpft{background-color:#3B67BC!important}.theme_color_theme3.svelte-izmpft{background-color:#F6C3A2!important}.theme_color_theme4.svelte-izmpft{background-color:#70AD47!important}.theme_color_theme5.svelte-izmpft{background-color:#745998!important}.theme_color_terms_theme1.svelte-izmpft{background-color:#DEEAF6}.theme_color_terms_theme2.svelte-izmpft{background-color:#D4DEF1}.theme_color_terms_theme3.svelte-izmpft{background-color:#FAE0CF}.theme_color_terms_theme4.svelte-izmpft{background-color:#E2EFD9}.theme_color_terms_theme5.svelte-izmpft{background-color:#E1DAE9}",m(N.head,r)),t(this,e,V,W,l,{showAns:10,editorState:11,xml:12,uxml:13,isReview:0},[-1,-1])}}
//# sourceMappingURL=ChoiceMatrixPreview-c16a244e.js.map
