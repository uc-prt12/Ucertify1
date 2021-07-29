import{S as e,i as t,s as a,F as l,q as c,h as n,e as s,u as r,f as i,U as o,g as d,j as m,x as u,o as h,D as g,b as f,l as p,c as b,m as x,t as v,a as y,d as A,E as w,a1 as k,p as _,X as E,A as C,w as F,T as N}from"./main-61075ca2.js";import{I as S}from"./ItemHelper-945dcc73.js";import{l as $}from"./parseCSV-929be628.js";function B(e){l(e,"svelte-ugc9ab",".fa-check{color:#46A546;position:relative;left:50px}.fa-close{color:#A80000;left:50px}.fa-close{margin-left:-26px;font-size:18px;position:relative;bottom:10px}.fa-check{margin-left:-26px;font-size:18px;position:relative;bottom:10px}.fa-close,.fa-check.svelte-ugc9ab,.middle_align.svelte-ugc9ab{vertical-align:middle!important}.middle_align{width:164px;min-width:164px}.topic_input{min-width:257px}.preview_header{font-size:16pt;font-weight:bold;vertical-align:middle}.adjust_width{width:10%;text-align:center}")}function R(e,t,a){const l=e.slice();return l[25]=t[a],l[27]=a,l}function D(e,t,a){const l=e.slice();return l[28]=t[a],l[30]=a,l}function j(e,t,a){const l=e.slice();return l[25]=t[a],l[27]=a,l}function J(e){let t,a=e[2].cdata.option,l=[];for(let t=0;t<a.length;t+=1)l[t]=M(j(e,a,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=c()},m(e,a){for(let t=0;t<l.length;t+=1)l[t].m(e,a);n(e,t,a)},p(e,c){if(20&c[0]){let n;for(a=e[2].cdata.option,n=0;n<a.length;n+=1){const s=j(e,a,n);l[n]?l[n].p(s,c):(l[n]=M(s),l[n].c(),l[n].m(t.parentNode,t))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},d(e){g(l,e),e&&h(t)}}}function M(e){let t,a,l,c,g,f=e[25].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"";return{c(){t=s("th"),a=r(f),i(t,"key",l=e[27]),i(t,"class",c=o("preview_header adjust_width "+("theme3"!==e[2].theme?e[25].id+"text-center text-white":e[25].id+"text-center"))+" svelte-ugc9ab"),i(t,"tabindex",g=0),d(t,"background-color",e[4][e[2].theme],1)},m(e,l){n(e,t,l),m(t,a)},p(e,l){4&l[0]&&f!==(f=e[25].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&u(a,f),4&l[0]&&c!==(c=o("preview_header adjust_width "+("theme3"!==e[2].theme?e[25].id+"text-center text-white":e[25].id+"text-center"))+" svelte-ugc9ab")&&i(t,"class",c),4&l[0]&&d(t,"background-color",e[4][e[2].theme],1)},d(e){e&&h(t)}}}function O(e){let t,a=e[1].cdata.term,l=[];for(let t=0;t<a.length;t+=1)l[t]=I(R(e,a,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=c()},m(e,a){for(let t=0;t<l.length;t+=1)l[t].m(e,a);n(e,t,a)},p(e,c){if(302&c[0]){let n;for(a=e[1].cdata.term,n=0;n<a.length;n+=1){const s=R(e,a,n);l[n]?l[n].p(s,c):(l[n]=I(s),l[n].c(),l[n].m(t.parentNode,t))}for(;n<l.length;n+=1)l[n].d(1);l.length=a.length}},d(e){g(l,e),e&&h(t)}}}function z(e){let t,a,l,c,r,u,g,b,x,v,y,A,w,k,_,E,C,F,N,S,$,B,R,D,j;return{c(){t=s("td"),a=s("i"),c=f(),r=s("i"),g=f(),b=s("input"),E=f(),C=s("label"),i(a,"class","fa fa-check svelte-ugc9ab"),i(a,"aria-hidden","true"),i(a,"style",l=P(e[3])),i(r,"class","fa fa-close"),i(r,"aria-hidden","true"),i(r,"style",u=P(e[3])),i(b,"type","radio"),i(b,"class","test_radio CMRad"),i(b,"style",x="vertical-align:middle;"),b.value=v=e[28].id,i(b,"name",y="tm"+(e[27]+1)),i(b,"id",A="t"+e[27]+e[30]),i(b,"data-termid",w=e[25].id),i(b,"data-correct",k=e[25].correct),i(b,"data-userans",""),i(b,"data-role","none"),i(b,"tabindex",_=-1),i(C,"tabindex",F=0),i(C,"class",N="label_choice customRadCM "+(e[30]%2==0?"tureitemColorCM":"falseitemColorCM")),i(C,"for",S="t"+e[27]+e[30]),i(t,"key",$=e[30]),i(t,"id",B="tb"+e[27]+e[30]),i(t,"class",R=o("text-center test_area "+(e[28].id==e[25].correct?"dbg-success":"dbg-danger"))+" svelte-ugc9ab"),d(t,"background-color",e[27]%2==0?e[5][e[2].theme]:"#FFF")},m(l,s){n(l,t,s),m(t,a),m(t,c),m(t,r),m(t,g),m(t,b),m(t,E),m(t,C),D||(j=p(b,"click",e[8]),D=!0)},p(e,a){2&a[0]&&v!==(v=e[28].id)&&(b.value=v),2&a[0]&&w!==(w=e[25].id)&&i(b,"data-termid",w),2&a[0]&&k!==(k=e[25].correct)&&i(b,"data-correct",k),2&a[0]&&R!==(R=o("text-center test_area "+(e[28].id==e[25].correct?"dbg-success":"dbg-danger"))+" svelte-ugc9ab")&&i(t,"class",R),4&a[0]&&d(t,"background-color",e[27]%2==0?e[5][e[2].theme]:"#FFF")},d(e){e&&h(t),D=!1,j()}}}function I(e){let t,a,l,c,p,b,x,v,y=e[25].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"",A=e[1].cdata.option,w=[];for(let t=0;t<A.length;t+=1)w[t]=z(D(e,A,t));return{c(){t=s("tr"),a=s("td"),l=r(y),b=f();for(let e=0;e<w.length;e+=1)w[e].c();x=f(),i(a,"class",c=o(e[25].id)+" svelte-ugc9ab"),i(a,"tabindex",p=0),d(a,"background-color",e[27]%2==0?e[5][e[2].theme]:"#FFF",1),d(a,"font-size","14pt"),d(a,"vertical-align","middle"),d(a,"font-family",e[2].font),i(t,"key",v=e[27])},m(e,c){n(e,t,c),m(t,a),m(a,l),m(t,b);for(let e=0;e<w.length;e+=1)w[e].m(t,null);m(t,x)},p(e,n){if(2&n[0]&&y!==(y=e[25].text.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&u(l,y),2&n[0]&&c!==(c=o(e[25].id)+" svelte-ugc9ab")&&i(a,"class",c),4&n[0]&&d(a,"background-color",e[27]%2==0?e[5][e[2].theme]:"#FFF",1),4&n[0]&&d(a,"font-family",e[2].font),302&n[0]){let a;for(A=e[1].cdata.option,a=0;a<A.length;a+=1){const l=D(e,A,a);w[a]?w[a].p(l,n):(w[a]=z(l),w[a].c(),w[a].m(t,x))}for(;a<w.length;a+=1)w[a].d(1);w.length=A.length}},d(e){e&&h(t),g(w,e)}}}function W(e){let t,a,l,c,g,p,w,k,_,E,C,F,N,$,B,R,D,j,M,z=e[2].stem.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"";l=new S({props:{handleReviewClick:e[9],reviewMode:e[0]}}),l.$on("setReview",e[6]),l.$on("unsetReview",e[7]);let I=e[2].cdata&&J(e),W=e[1].cdata&&O(e);return{c(){t=s("main"),a=s("div"),b(l.$$.fragment),c=f(),g=s("center"),p=s("table"),w=s("thead"),k=s("tr"),_=s("th"),E=r(z),N=f(),I&&I.c(),$=f(),B=s("tbody"),W&&W.c(),i(_,"class",C=o("preview_header "+("theme3"!==e[2].theme?"text-center text-white":"text-center"))+" svelte-ugc9ab"),i(_,"tabindex",F=0),d(_,"background-color",e[4][e[2].theme],1),i(k,"class","table-head"),i(p,"class",R="table table-bordered testmode_table "),i(p,"id","test_table"),i(p,"style",D="position:relative; margin-top:20px;width:"+e[2].maxWidth+"px;font-family: Georgia;"),i(a,"id","choicemain"),i(a,"style",j="margin-bottom:20px")},m(e,s){n(e,t,s),m(t,a),x(l,a,null),m(a,c),m(a,g),m(g,p),m(p,w),m(w,k),m(k,_),m(_,E),m(k,N),I&&I.m(k,null),m(p,$),m(p,B),W&&W.m(B,null),M=!0},p(e,t){const a={};1&t[0]&&(a.reviewMode=e[0]),l.$set(a),(!M||4&t[0])&&z!==(z=e[2].stem.replace(/\n/gm,"</br>").replace(/#cm/gm,",")+"")&&u(E,z),(!M||4&t[0]&&C!==(C=o("preview_header "+("theme3"!==e[2].theme?"text-center text-white":"text-center"))+" svelte-ugc9ab"))&&i(_,"class",C),(!M||4&t[0])&&d(_,"background-color",e[4][e[2].theme],1),e[2].cdata?I?I.p(e,t):(I=J(e),I.c(),I.m(k,null)):I&&(I.d(1),I=null),e[1].cdata?W?W.p(e,t):(W=O(e),W.c(),W.m(B,null)):W&&(W.d(1),W=null),(!M||4&t[0]&&D!==(D="position:relative; margin-top:20px;width:"+e[2].maxWidth+"px;font-family: Georgia;"))&&i(p,"style",D)},i(e){M||(v(l.$$.fragment,e),M=!0)},o(e){y(l.$$.fragment,e),M=!1},d(e){e&&h(t),A(l),I&&I.d(),W&&W.d()}}}function q(){let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].getAttribute("id")==e[t].getAttribute("data-userans")?e[t].checked=!0:e[t].checked=!1}function G(){!function(){let e=document.querySelectorAll(" .test_radio");for(let t=0;t<e.length;t++)e[t].getAttribute("value")==e[t].getAttribute("data-correct")?e[t].checked=!0:e[t].checked=!1}(),L()}function L(){let e=document.getElementsByClassName("fa-check"),t=document.getElementsByClassName("fa-close");for(let a=0;a<e.length;a++)e[a].style.display="none",t[a].style.display="none"}function P(e){return 1==e?{paddingLeft:"14px",display:"inline-flex",position:"absolute"}:{paddingLeft:"15px",display:"none",position:"absolute"}}function T(e,t,a){let l,{showAns:c}=t,{editorState:n}=t,{xml:s}=t,{uxml:r}=t,{isReview:i}=t,o={cdata:""},d={};F({cdata:"",stem:"",xml:"",theme:"",font:"",maxWidth:"",totalcorrectans:""}).subscribe((e=>{a(2,d=e)}));function m(){q(),C.select(".dbg-success input","checked").forEach((e=>{C.siblings(e,".fa-check").forEach((e=>{e.style.display="inline-flex"}))})),C.select(".dbg-danger input","checked").forEach((e=>{C.siblings(e,".fa-close").forEach((e=>{e.style.display="inline-flex"}))})),C.selectAll(".dbg-success input, .dbg-danger input","removeAttr","as"),C.select(".dbg-success input","checked").forEach((e=>{e.setAttribute("as",1)})),C.select(".dbg-success input","checked").forEach((e=>{e.setAttribute("as",0)})),C.select(".dbg-success input","checked").forEach((e=>{C.siblings(e,".label_choice").forEach((e=>{e.setAttribute("title","is marked as correct")}))})),C.select(".dbg-danger input","checked").forEach((e=>{C.siblings(e,".label_choice").forEach((e=>{e.setAttribute("title","is marked as incorrect")}))}))}function u(){a(0,i=!0);let e=C.selectAll(" .test_radio");for(let t=0;t<e.length;t++)e[t].disabled=!0;m()}function h(){a(0,i=!1);let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].disabled=!1;L()}return w((()=>{var e;s!=d.xml&&(a(2,d.xml=s,d),e=r,function(e,t){a(2,d.theme=e.smxml._theme,d),a(2,d.font=e.smxml._font,d),a(2,d.maxWidth=e.smxml._maxwidth?e.smxml._maxwidth:800,d);let l=$.parseCSVFormat(e.smxml.__cdata),c=[];c=JSON.parse(JSON.stringify(l)),a(2,d.cdata=c,d),a(2,d.stem=c.stem,d),a(1,o.cdata=c,o);let n=o.cdata.term.length;if(a(2,d.totalcorrectans=n,d),h(),t)try{t=JSON.parse(t);let e=[];e=JSON.parse(JSON.stringify(t)),setTimeout((function(){e.ans.map((function(e,t){C.selectAll(".test_area #"+e.userAns,"attr",{"data-userans":e.userAns})})),q()}),100)}catch(e){}else{let e=document.getElementsByClassName("test_radio");for(let t=0;t<e.length;t++)e[t].checked=!1,e[t].setAttribute("data-userans","")}}(E(s),e))})),k((()=>{i||L()})),_((()=>{AI.listen("body","keydown",".label_choice",(function(e,t){13===t.which&&e.click()}))})),e.$$set=e=>{"showAns"in e&&a(10,c=e.showAns),"editorState"in e&&a(11,n=e.editorState),"xml"in e&&a(12,s=e.xml),"uxml"in e&&a(13,r=e.uxml),"isReview"in e&&a(0,i=e.isReview)},e.$$.update=()=>{1&e.$$.dirty[0]&&(i?u():(q(),h()))},[i,o,d,undefined,{theme1:"#5B9BD5",theme2:"#3B67BC",theme3:"#F6C3A2",theme4:"#70AD47",theme5:"#745998"},{theme1:"#DEEAF6",theme2:"#D4DEF1",theme3:"#FAE0CF",theme4:"#E2EFD9",theme5:"#E1DAE9"},function(){u()},function(){q(),h()},function(e){let t=e.target.id,a=e.target.name,s=document.querySelectorAll(" .test_area input[name="+a+"]");for(let e=0;e<s.length;e++)s[e].setAttribute("data-userans","");C.selectAll(" .test_area #"+t,"attr",{"data-userans":t});let i={type:"34",ans:[]},o=document.getElementsByClassName("test_radio");for(let e=0;e<o.length;e++)1==o[e].checked&&i.ans.push({id:o[e].getAttribute("data-termid"),userAns:o[e].getAttribute("id")});l=JSON.stringify(i),function(){let e=function(){let e=0,t=0,a=document.getElementsByClassName("test_radio");for(let t=0;t<a.length;t++)if(a[t].getAttribute("value")==a[t].getAttribute("data-correct")){if(1!=a[t].checked)return e=0,a[t].setAttribute("as",0),!1;a[t].setAttribute("as",1),e=1}for(let e=0;e<a.length;e++)a[e].getAttribute("value")==a[e].getAttribute("data-correct")&&1==a[e].checked&&t++,"undefined"!=typeof calculatePoint&&calculatePoint(d.totalcorrectans,t);return e}();e=1==e,r?C.select("#answer").checked=e:n&&c(e?"Correct":"Incorrect");N({uXml:l,ans:e})}()},function(e,t){"c"==e?G():m()},c,n,s,r]}export default class extends e{constructor(e){super(),t(this,e,T,W,a,{showAns:10,editorState:11,xml:12,uxml:13,isReview:0},B,[-1,-1])}}
//# sourceMappingURL=ChoiceMatrixPreview-3168765a.js.map
