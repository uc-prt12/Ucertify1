import{S as SvelteComponent,i as init,s as safe_not_equal,F as append_styles,e as element,c as create_component,b as space,C as l,f as attr,A as AH,h as insert,m as mount_component,j as append,l as listen,o as detach,t as transition_in,a as transition_out,d as destroy_component,k as group_outros,n as check_outros,D as destroy_each,E as beforeUpdate,X as XMLToJSON,p as onMount,w as writable,T as onUserAnsChange}from"./main-61075ca2.js";import{I as ItemHelper}from"./ItemHelper-945dcc73.js";import{F as FillInTheBlanksToolbar}from"./mathquill-b3560179.js";import"./style-inject.es-1f59c1d0.js";var ALGO=ALGO||{mathtype:""};function add_css(e){append_styles(e,"svelte-akpovd",'.darkgrey_border{border:1px solid #ccc!important}.p-lg{padding:15px}.true-hover{outline:0;border:2px solid #14ca14!important}.false-hover{outline:0;border:2px solid #e45252!important}.default-hover{border-color:transparent!important;-webkit-box-shadow:inset 0 1px 0px 0px rgba(0,0,0,.075), 0 0 1px rgba(2, 2, 2, 0.9)!important;-moz-box-shadow:inset 0 1px 0px 0px rgba(0,0,0,.075), 0 0 1px rgba(2, 2, 2, 0.9)!important;box-shadow:inset 0 1px 0px 0px rgba(0,0,0,.075), 0 0 1px rgba(2, 2, 2, 0.9)!important}.blocked{display:block !important}.border_green{border:3px solid green!important}.border_red{border:3px solid red!important}.sticky{z-index:800;position:sticky;top:0\r\n\t}.corr_div{position:absolute!important;width:60px;line-height:30px;background-color:#21a81d;color:#ffffff;z-index:1;display:inline-block;vertical-align:middle;cursor:default}[id^="fillmain"]{overflow:hidden;text-align:left}[id^="fillmain"] pre{background:none;border:none;font-size:14px!important}[id^="fillmain"] .string{min-height:50px;margin-top:10px;margin-right:10px}[id^="fillmain"] .footerstr{position:relative;margin-top:10px;background-color:#ccc;padding:15px;min-height:60px}[id^="fillmain"] .footerstr .arrow-up{position:absolute;top:-10px;right:50%;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #ccc}[id^="fillmain"] .fill-row{padding:6px}#fillmain .fillelement{height:30px;display:inline-block;position:relative;min-height:30px;margin:1px}#fillmain .drag-resize{height:30px;display:inline-block;position:relative;min-height:30px;margin:1px}[id^="fillmain"] input[type="text"]{height:99%!important;resize:none;font-size:12px;color:#000;max-width:800px}[id^="fillmain"] select{height:99%!important;resize:none;font-size:12px;color:#000;max-width:800px}[id^="fillmain"] .drag-resize{vertical-align:middle;border:1px solid #31B731;text-align:center;padding:3px;font-size:14px}[id^="fillmain"] .drag-resize.ui-draggable{cursor:move}[id^="fillmain"] .drop-hover{border:1px dashed red!important;box-shadow:0 0 0 2px yellow inset;outline:1px solid blue}[id^="fillmain"] .fillcheck ul{width:220px}[id^="fillmain"] .fillcheck li.selected{background-color:#E5E5E5}.fillcheck .selected .icomoon-checkmark-3:before{float:left;color:blue;padding:3px;position:relative;right:14px}.fillcheck .icomoon-close-2:before{float:left;color:blue;position:relative;right:14px;font-size:20px}.MathJax_Display{display:inline!important}[id^="fillmain"] .select{font-size:15px}[id^="fillmain"] .textarea{vertical-align:middle;border-radius:3px;background:#ffe;border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.ui-draggable-disabled{cursor:no-drop!important;opacity:0.5!important}')}function get_each_context(e,t,n){const i=e.slice();return i[67]=t[n],i[69]=n,i}function get_each_context_1(e,t,n){const i=e.slice();return i[67]=t[n],i[69]=n,i}function create_if_block(e){let t,n,i,a,s,r,o,c,d,m,p,u,f,h,_,g,v,x,b;n=new ItemHelper({props:{handleReviewClick:e[11],reviewMode:e[0]}}),n.$on("setReview",e[9]),n.$on("unsetReview",e[10]);let w=e[5].itemArray,A=[];for(let t=0;t<w.length;t+=1)A[t]=create_each_block_1(get_each_context_1(e,w,t));let y=e[2],k=[];for(let t=0;t<y.length;t+=1)k[t]=create_each_block(get_each_context(e,y,t));let H=e[5].showToolbar&&create_if_block_1(e);return{c(){t=element("center"),create_component(n.$$.fragment),i=space(),a=element("div");for(let e=0;e<A.length;e+=1)A[e].c();o=space(),c=element("div");for(let e=0;e<k.length;e+=1)k[e].c();p=space(),H&&H.c(),u=space(),f=element("div"),h=element("button"),h.textContent=""+l.next,attr(a,"class",s=e[5].main_steps?"h-imp":"inNativeStyle"),attr(a,"style",r="width:"+(AH.isValid(window.inNative)?"100%":"700px")),attr(c,"class",d=e[5].correct_answer?"h-imp":""),attr(c,"style",m="width:"+(AH.isValid(window.inNative)?"100%":"700px")),attr(h,"type","button"),attr(h,"style",_="width:auto;font-size:15px;margin:15px 0;"),attr(h,"class","btn btn-sm btn-outline-primary imgcenter next_step px-md-5 px-sm-3"),attr(f,"class",g=e[5].hideNext?"h-imp":null)},m(s,l){insert(s,t,l),mount_component(n,t,null),append(t,i),append(t,a);for(let e=0;e<A.length;e+=1)A[e].m(a,null);append(t,o),append(t,c);for(let e=0;e<k.length;e+=1)k[e].m(c,null);append(t,p),H&&H.m(t,null),append(t,u),append(t,f),append(f,h),v=!0,x||(b=listen(h,"click",e[16]),x=!0)},p(e,i){const l={};if(1&i[0]&&(l.reviewMode=e[0]),n.$set(l),104&i[0]){let t;for(w=e[5].itemArray,t=0;t<w.length;t+=1){const n=get_each_context_1(e,w,t);A[t]?A[t].p(n,i):(A[t]=create_each_block_1(n),A[t].c(),A[t].m(a,null))}for(;t<A.length;t+=1)A[t].d(1);A.length=w.length}if((!v||32&i[0]&&s!==(s=e[5].main_steps?"h-imp":"inNativeStyle"))&&attr(a,"class",s),108&i[0]){let t;for(y=e[2],t=0;t<y.length;t+=1){const n=get_each_context(e,y,t);k[t]?k[t].p(n,i):(k[t]=create_each_block(n),k[t].c(),k[t].m(c,null))}for(;t<k.length;t+=1)k[t].d(1);k.length=y.length}(!v||32&i[0]&&d!==(d=e[5].correct_answer?"h-imp":""))&&attr(c,"class",d),e[5].showToolbar?H?(H.p(e,i),32&i[0]&&transition_in(H,1)):(H=create_if_block_1(e),H.c(),transition_in(H,1),H.m(t,u)):H&&(group_outros(),transition_out(H,1,1,(()=>{H=null})),check_outros()),(!v||32&i[0]&&g!==(g=e[5].hideNext?"h-imp":null))&&attr(f,"class",g)},i(e){v||(transition_in(n.$$.fragment,e),transition_in(H),v=!0)},o(e){transition_out(n.$$.fragment,e),transition_out(H),v=!1},d(e){e&&detach(t),destroy_component(n),destroy_each(A,e),destroy_each(k,e),H&&H.d(),x=!1,b()}}}function create_each_block_1(e){let t,n,i,a,s,l,r,o,c,d,m,p,u,f=e[67].cdata+"";return{c(){t=element("div"),n=element("div"),i=element("div"),a=element("div"),m=space(),attr(a,"seq",s="s"+e[69]),attr(i,"id",l="data-block_"+e[69]),attr(i,"class",r="main_item darkgrey_border secure-icon p-lg jqsfield spanlink_nav "+(e[69]==e[5].classChange?e[5].isColor?"border_green":"border_red":"")),attr(i,"key",o=e[69]),attr(n,"id",c="s"+e[69]),attr(n,"class",d="bg-white "+(1==e[5].display&&null!=e[3].smans&&null!=e[3].smans["s"+e[69]]?1==e[3].smans["s"+e[69]].overall?"border_green":"border_red":"")),attr(t,"data-sticky",p=e[6](e[69])),attr(t,"class","bt-pd bg-white mt-3"),attr(t,"tabindex",u=0)},m(e,s){insert(e,t,s),append(t,n),append(n,i),append(i,a),a.innerHTML=f,append(t,m)},p(e,t){32&t[0]&&f!==(f=e[67].cdata+"")&&(a.innerHTML=f),32&t[0]&&r!==(r="main_item darkgrey_border secure-icon p-lg jqsfield spanlink_nav "+(e[69]==e[5].classChange?e[5].isColor?"border_green":"border_red":""))&&attr(i,"class",r),40&t[0]&&d!==(d="bg-white "+(1==e[5].display&&null!=e[3].smans&&null!=e[3].smans["s"+e[69]]?1==e[3].smans["s"+e[69]].overall?"border_green":"border_red":""))&&attr(n,"class",d)},d(e){e&&detach(t)}}}function create_each_block(e){let t,n,i,a,s,l,r,o,c,d,m,p,u,f=e[67].__cdata+"";return{c(){t=element("div"),n=element("div"),i=element("div"),a=element("div"),m=space(),attr(a,"seq",s="s"+e[69]),attr(i,"id",l="data-block_"+e[69]),attr(i,"class",r="main_item darkgrey_border secure-icon p-lg jqsfield spanlink_nav "+(e[69]==e[5].classChange?e[5].isColor?"border_green":"border_red":"")),attr(i,"key",o=e[69]),attr(n,"id",c="s"+e[69]),attr(n,"class",d="bg-white "+(1==e[5].display&&null!=e[3].smans&&null!=e[3].smans["s"+e[69]]?1==e[3].smans["s"+e[69]].overall?"border_green":"border_red":"")),attr(t,"data-sticky",p=e[6](e[69])),attr(t,"class","bt-pd bg-white mt-3"),attr(t,"tabindex",u=0)},m(e,s){insert(e,t,s),append(t,n),append(n,i),append(i,a),a.innerHTML=f,append(t,m)},p(e,t){4&t[0]&&f!==(f=e[67].__cdata+"")&&(a.innerHTML=f),32&t[0]&&r!==(r="main_item darkgrey_border secure-icon p-lg jqsfield spanlink_nav "+(e[69]==e[5].classChange?e[5].isColor?"border_green":"border_red":""))&&attr(i,"class",r),40&t[0]&&d!==(d="bg-white "+(1==e[5].display&&null!=e[3].smans&&null!=e[3].smans["s"+e[69]]?1==e[3].smans["s"+e[69]].overall?"border_green":"border_red":""))&&attr(n,"class",d)},d(e){e&&detach(t)}}}function create_if_block_1(e){let t,n;return t=new FillInTheBlanksToolbar({props:{spanId:e[5].spanId,divId:e[5].divId,action:e[1][e[4]],show:e[15]}}),{c(){create_component(t.$$.fragment)},m(e,i){mount_component(t,e,i),n=!0},p(e,n){const i={};32&n[0]&&(i.spanId=e[5].spanId),32&n[0]&&(i.divId=e[5].divId),18&n[0]&&(i.action=e[1][e[4]]),t.$set(i)},i(e){n||(transition_in(t.$$.fragment,e),n=!0)},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let t,n,i=0==e[5].blank&&create_if_block(e);return{c(){t=element("main"),i&&i.c()},m(e,a){insert(e,t,a),i&&i.m(t,null),n=!0},p(e,n){0==e[5].blank?i?(i.p(e,n),32&n[0]&&transition_in(i,1)):(i=create_if_block(e),i.c(),transition_in(i,1),i.m(t,null)):i&&(group_outros(),transition_out(i,1,1,(()=>{i=null})),check_outros())},i(e){n||(transition_in(i),n=!0)},o(e){transition_out(i),n=!1},d(e){e&&detach(t),i&&i.d()}}}function createAns(e,t,n,i){return void 0!==e[n]&&void 0!==e[n][t]||(void 0===e[n]&&(e[n]={}),e[n][t]={}),e[n][t].value=i,e}function instance(e,t,n){let i,a,s={},l={},r="",o="",c=[];var d=[];let m,p={},u="",f={},h="",_="",g=0,v=0,x=0,b=!1,w={},{xml:A}=t,{stopPreviewUpdate:y}=t,{isReview:k}=t,{uxml:H}=t;writable({blank:!0,hideNext:!1,itemArray:[],classChange:-1,isColor:!0,smController:"h",display:-1,showToolbar:!0,isMathquill:!1,correct_answer:!0,main_steps:!1,your_answer:[]}).subscribe((e=>{n(5,w=e)}));function N(e){if(e.nodeName)if(e.classList.contains("mathquill"))X(e,!1);else{let t=e.getAttribute("id"),n=e.closest("div").getAttribute("seq"),i=e.value;l=createAns(l,t,n,i),L(l)}}function S(){if(l)for(let e in l)for(let t in l[e]){let n=l[e][t].value;if(""!=n){let e=n.match(/MathQuillMathField\{(.*?)\}/g);e?e.map((function(e){""==e.toString().replace(/MathQuillMathField\{|\}/g,"")?AH.select("#"+t,"removeClass","answer_input"):AH.select("#"+t,"addClass","answer_input")})):AH.select("#"+t,"addClass","answer_input")}else AH.select("#"+t,"removeClass","answer_input")}}function M(e){b&&n(3,f.var_list=u,f),n(3,f.cuurentStep=g,f),x=0;const t=w.itemArray;var a,s;if(a=i,(s=e)<=_?(o=a.smxml.step[s].__cdata,O(s,o)):null!=a.smxml.step[g]&&(o=a.smxml.step[g].__cdata,O(s,o)),t.push({cdata:o}),n(5,w.itemArray=t,w),e<=_)var l=e;else l=g;var r=setTimeout((function(){null==i.smxml.step[l+1]&&"1"==i.smxml.step[l]._attempt||null==i.smxml.step[l+1]&&i.smxml.step[l]._viewonly,clearTimeout(r)}),500)}function O(e,t,i){let a=t.match(/%{[\s\S]*?}%/gm),s="";if(!a)return"";a.forEach((function(t,l){if(null!=i)var r=d[i].__cdata;let o=a[l];s=a[l].match(/\|(.*?)}%$/gm),s=s?s[0].replace(/\||}%/gm,""):"",s=s.trim(),""==s||"c"==s||"n"==s?null!=i?j(o,l,e,i,r):j(o,l,e):"e"==s&&(n(5,w.isMathquill=!0,w),null!=i?U(o,l,e,i,r):U(o,l,e))}))}function C(e){n(5,w.showToolbar=e,w)}function I(){if("undefined"!=typeof QUIZPLAYERID)var e=setTimeout((function(){window.parentElement.autoResize(QUIZPLAYERID),clearTimeout(e)}),0);null!=i.smxml.step[g+1]||"1"==i.smxml.step[g]._attempt?(1==i.smxml._gonext?function(){let e="s"+g;AH.find("#"+e,".edit_step","all").forEach((function(t,n){if(t.classList.contains("mathquill"))X(t,!1);else{let n=t.getAttribute("id"),i=t.value;l=createAns(l,n,e,i)}})),1==i.smxml.step[g]._attempt?F():(q(),$())}():1==i.smxml.step[g]._attempt?AH.selectAll(".edit_step").length==AH.selectAll(".answer_input").length?F():AH.selectAll(".edit_step").forEach((e=>{if(!e.classList.contains("answer_input")){e.style.border="2px solid #ff0000";var t=setTimeout((function(){e.style.border="1px solid #ccc",clearTimeout(t)}),500)}})):(q(),$()),i.smxml.step.length<=i.smxml.step[g]._seq&&1!=i.smxml.step[g]._attempt&&n(5,w.hideNext=!0,w)):n(5,w.hideNext=!0,w)}function q(){if(AH.selectAll(".edit_step").forEach((e=>{e.classList.contains("mathquill")?e.previousElementSibling.classList.contains("disable_div")&&AH.select(e.previousElementSibling,"removeClass","h"):e.disabled=!0,e.classList.add("data-check")})),x=0,null==i.smxml.step[g+1]&&"1"==i.smxml.step[g]._attempt)return n(5,w.hideNext=!0,w),L(l),void T();g!=i.smxml.step.length-1?(g+=1,M(),L(l),T()):console.log("All steps are attempted")}function L(e){window.inNative&&window.getHeight&&window.getHeight();var t=b?"lists="+JSON.stringify(f.var_list):" ";p.special="<smans><div "+t+" currStep='"+g+"' userAns='"+JSON.stringify(e)+"'></div></smans>"}function T(){let e=!1,t=null,n=!1;if(i.smxml.step.length==w.itemArray.length){let t=!0;for(let i in s)null!=s[i].overall&&(e=1==s[i].overall,t=t&&e),0==t?(AH.select("#answer").checked=!1,p.answer=!1,n=!1):(AH.select("#answer").checked=!0,p.answer=!0,n=!0)}t=p.special,window.inNative&&(window.postMessage("height___"+document.getElementsByClassName("inNativeStyle")[0].offsetHeight,"*"),window.postMessage(JSON.stringify({userAnswers:t,inNativeIsCorrect:n}),"*")),onUserAnsChange({uXml:p.special,ans:p.answer})}function $(){AH.select("[data-sticky]","addClass","sticky")}function j(e,t,n,i,a){let s=e,l=((e=(e=e.replace(/%{|}%/g,"")).split("|"))[1]&&e[1].trim(),e[0].trim()),r="";if(-1!=l.indexOf("#style#")){let e=l.split("#style#");l=e[0],r=e[1]}let o=[],c=l.split(",");c.forEach((function(e,t){o[t]=10*c[t].length+30})),null!=i?E(e,o,r,s,n,l,t,i,a):E(e,o,r,s,n,l,t)}function E(e,t,i,l,c,m,p,u,h){if(null!=u){a="s"+u+"_t"+p,r="s"+u;let s='<input type="text" id="'+a+'" class="fillintheblank ks nmb text-center span0 edit_st" defaultans="" haskeywords=""  hasnotkeywords="" keywordtype="" autocomplete="off" data-role="none" style="width:'+(Math.max(...t)+20)+"px;"+i+'" />',o='<span id="'+r+'" class="text-center filter fillelement inline-block"><span class="remed_disable fh fwidth absolute h"></span><span id="text" class="corr_div">'+e[0]+"</span>"+s+"</span>",c=h.replace(l,o);n(2,d[u].__cdata=c,d)}else{if(c<=_)var v=c;else v=g;a="s"+v+"_t"+p,r="s"+v;let t='<input type="text" id="'+a+'" class="fillintheblank ks nmb text-center span0 edit_step" defaultans="" haskeywords=""  hasnotkeywords="" keywordtype="" autocomplete="off" data-role="none"  style="width:38px;'+i+'" />',d='<span id="'+r+'" class="text-center filter fillelement inline-block"><span class="remed_disable fh fwidth absolute h"></span><span id="" class="corr_div h-imp">'+e[0]+"</span>"+t+"</span>";o=o.replace(l,d),s=createAns(s,a,r,m),n(3,f.smans=s,f)}}function F(e){v=0,x+=1;for(let n in s)for(let i in s[n]){if(e<_)var t=e;else t=g;if(l["s"+t]&&null!=l["s"+t][i])if(s["s"+t][i].value==l["s"+t][i].value)R("correct",i);else if(/\,/g.test(s["s"+t][i].value)){let e=s["s"+t][i].value.split(","),n=l["s"+t][i].value;e.indexOf(n)>-1?R("correct",i):(v=1,R("wrong",i))}else v=1,R("wrong",i)}1==i.smxml.step[g]._mode?function(e,t){var n=0;v>0?(n=0,e<=_?s[t].overall=n:s[r].overall=n):(n=1,e<=_?s[t].overall=n:s[r].overall=n);q()}(e,"s"+e):function(e,t){var i=0;v>0?(n(5,w.classChange=w.itemArray.length-1,w),n(5,w.isColor=!1,w),i=0,e<=_?s[t].overall=i:(s[r].overall=i,T())):(n(5,w.classChange=w.itemArray.length-1,w),n(5,w.isColor=!0,w),i=1,e<=_?s[t].overall=i:(s[r].overall=i,q()));x>1&&q();l[r]&&null!=l[a]&&(l[r].optry=x);var o=setTimeout((function(){n(5,w.classChange=-1,w),clearTimeout(o)}),2500)}(e,"s"+e)}function R(e,t){if(1!=i.smxml.step[g]._mode&&("correct"==e?(AH.select("#"+t,"removeClass","false-hover"),AH.select("#"+t,"addClass","true-hover")):"wrong"==e&&(AH.select("#"+t,"removeClass","true-hover"),AH.select("#"+t,"addClass","false-hover")),x>1&&AH.select(AI.select("#"+t).previousElementSibling,"removeClass","h-imp"),1!=i.smxml._fixed))var n=setTimeout((function(){AH.select(AI.select("#"+t).previousElementSibling,"addClass","h-imp"),clearTimeout(n)}),2e3);H&&AH.selectAll(".edit_step").forEach((function(e,n){e.classList.contains("mathquill")?AH.select("#"+t).previousElementSibling.classList.contains("disable_div")&&AH.select(AH.select("#"+t).previousElementSibling,"removeClass","h"):e.classList.contains("answer_input")&&(e.disabled=!0),e.classList.add("data-check")}))}function P(){n(0,k=!0),T(),G(),document.querySelectorAll(".fillintheblank").disabled=!0}function Q(){n(0,k=!1),n(5,w.display=-1,w),n(5,w.smController=" h",w),AH.selectAll(".fillintheblank","removeClass","default-hover"),AH.selectAll(".fillintheblank").disabled=!1,n(5,w.main_steps=!1,w),n(5,w.correct_answer=!0,w),AH.selectAll(".remed_disable","css",{display:"none"}),(null==i.smxml.step[g+1]&&"1"==i.smxml.step[g]._attempt||null==i.smxml.step[g+1]&&"1"==i.smxml.step[g]._viewonly)&&AH.selectAll(".edit_step").length==AH.selectAll(".data-check").length?n(5,w.hideNext=!0,w):n(5,w.hideNext=!1,w),window.inNative&&window.getHeight&&window.getHeight()}function z(){n(5,w.display=-1,w),AH.selectAll(".fillintheblank","addClass","default-hover"),i.smxml.step.map((function(e,t){O("corr_ans",e.__cdata,t)})),n(5,w.main_steps=!0,w),n(5,w.correct_answer=!1,w),window.inNative&&window.getHeight&&window.getHeight()}function G(){n(5,w.display=1,w),n(5,w.hideNext=!0,w),n(5,w.smController="",w),AH.selectAll(".fillintheblank","removeClass","default-hover"),n(5,w.main_steps=!1,w),n(5,w.correct_answer=!0,w),AH.selectAll(".remed_disable","css",{display:"block"}),window.inNative&&window.getHeight&&window.getHeight()}function U(e,t,n,i,a){let s=e;(e=(e=e.replace(/%{|}%/g,"")).split("|"))[0]=e[0].replace(/user Response/g,"\\MathQuillMathField");let l=e[0].split("##"),r=Math.floor(Math.random()*l.length),o=l[r],c=o.replace(/MathQuillMathField{(.*?)}/g,"MathQuillMathField{}"),d=0,m=o,p=m.replace(/\\MathQuillMathField/g,"");o.indexOf("MathQuillMathField")>-1&&(m=o,d=1),null!=i?J(c,e,s,n,t,r,d,m,p,i,a):J(c,e,s,n,t,r,d,m,p)}function J(e,t,i,l,m,p,u,h,v,x,b){let w=t[0].trim();if(l<=_)var A=l;else A=g;if(null!=x){a="s0"+x+"_t"+m,r="s0"+x;let t='<span id="'+r+'" class="text-center filter fillelement inline-block"><span class="disable_div fh fwidth absolute h"></span><span class="remed_disable fh fwidth absolute h"></span><span  id="'+("m0"+x+"_t"+m)+'" class="corr_div fillmathelement mathquill mq'+A+'" userAnsSeq="'+p+'" anskey="'+h+'" defaultans="'+u+'" mathtype="1">'+v+"</span>"+('<span  id="'+a+'" class="auto_height edit_st fillmathelement mathquill mq'+A+'" userAnsSeq="'+p+'" userans="'+e+'" anskey="'+h+'" defaultans="'+u+'" mathtype="1">s</span>')+"</span>",s=b.replace(i,t);n(2,d[x].__cdata=s,d)}else{a="s"+A+"_t"+m,r="s"+A;let t='<span id="'+r+'" class="text-center filter fillelement inline-block"><span class="disable_div fh fwidth absolute h"></span><span class="remed_disable fh fwidth absolute h"></span><span  id="'+("m"+A+"_t"+m)+'" class="corr_div h-imp fillmathelement mathquill mq'+A+'" userAnsSeq="'+p+'" anskey="'+h+'" defaultans="'+u+'" mathtype="1">'+v+"</span>"+('<span  id="'+a+'" class="auto_height edit_step fillmathelement mathquill mq'+A+'" userAnsSeq="'+p+'" userans="'+e+'" anskey="'+h+'" defaultans="'+u+'" mathtype="1">s</span>')+"</span>";o=o.replace(i,t),s=createAns(s,a,r,w),n(3,f.smans=s,f)}let y=setInterval(function(){if("function"==typeof MathQuill){clearInterval(y);let e=MathQuill.getInterface(2);AH.selectAll(".mathquill.mq"+A).forEach((t=>{let i=t.getAttribute("id");if(1==t.getAttribute("defaultans")){let e=t.getAttribute("userans");AH.select("#"+i).innerText=e}else AH.select("#"+i).innerText=t.getAttribute("userans");try{n(1,c[i]=e.StaticMath(document.getElementById(i)),c)}catch(e){console.log(e)}}))}}.bind(this),100)}function X(e,t){let n,i=[],a=jQuery(e).closest("div").find("span.fillelement").attr("id"),s=jQuery(e).attr("id"),r=jQuery(e).attr("userans").trim();if("math_user"==t)n=r;else{let e=MathQuill.getInterface(2).StaticMath(document.getElementById(s));for(let t=0;t<=e.innerFields.length-1;t++)i[t]=e.innerFields[t].latex();let t=r,a=r.match(/\\MathQuillMathField{(.*?)\}/g);for(let e in a){const n="\\MathQuillMathField{"+i[e]+"}",s=a[e].replace(/\\MathQuillMathField{(.*?)\}/g,n);let l=a[e];t=t.replace(l,s)}r=t,n=r}l=createAns(l,s,a,n),L(l)}beforeUpdate((()=>{if(w.isMathquill&&loadLibs(),H){let e=XMLToJSON(H);e.smans&&e.smans.div&&e.smans.div._userAns&&function(e){let t=XMLToJSON(e);b&&(h=JSON.parse(t.smans.div._lists));_=JSON.parse(t.smans.div._currStep)}(H)}if(A!=w.xml){if(n(5,w.xml=A,w),1==y)return!1;H||(g=0,n(5,w.itemArray=[],w),l={},n(5,w.hideNext=!1,w),AH.find(document,".sticky",{action:"removeClass",actionData:"sticky"}),AH.selectAll(".edit_step","removeAttr","disabled"),AH.selectAll(".edit_step").value=""),n(5,w.blank=!1,w),function(e){b=!1,"undefined"!=e.smxml.algo&&e.smxml.algo&&(b=!0);b&&(u=ALGO.init(e.smxml.algo));let t=JSON.stringify(e);if(b){if(H){let e=XMLToJSON(H);e.smans&&e.smans.div&&e.smans.div._lists&&(u=h)}i=ALGO.init.replaceVariables(t,u),i=JSON.parse(i)}else i=e;let a=i.smxml.step;n(2,d=a.slice()),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e});if(a.map((function(e,t){n(2,d[t]=Object.assign({},e),d)})),""!=_){g=_;for(let e=0;e<=_;e++)M(e)}else M();if(H){let e=XMLToJSON(H);if(e.smans&&e.smans.div&&e.smans.div._userAns)var s=setTimeout((function(){!function(e){let t=XMLToJSON(e);if(t.smans&&t.smans.div&&t.smans.div._userAns){t=JSON.parse(t.smans.div._userAns);for(let e in t)for(let n in t[e]){let i=e.split("")[1],a=t[e][n].value;AH.select("#"+n).classList.contains("mathquill")?(AH.select("#"+n,"userans",a),X("#"+n,"math_user")):(AH.select("#"+n).value=a,N(AH.select("#"+n))),x=0,S(),F(i)}}}(H),clearTimeout(s)}),50)}}(XMLToJSON(w.xml))}})),onMount((()=>{AH.listen(document,"keydown",".edit_step",(function(e,t){let n=10*e.value.split("").length+45+"px";e.style.width=n})),AI.set("stepAlgo",this),AH.addScript("","https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"),AH.addScript("",itemUrl+"src/libs/mathQuill_new.js"),window.inNative&&window.getHeight&&window.getHeight(),setTimeout((function(){AH.selectAll(".toolbar_container_one","addClass","h-imp")}),100),AH.listen(document,"click",".edit_step",(e=>{N(e)})),AH.listen(document,"keyup",".edit_step",(e=>{N(e)})),AH.listen(document,"change",".edit_step",(e=>{N(e)})),AH.listen(document,"click","span.mq-editable-field.mq-focused",(e=>{let t,i=e,a=!0;for(;a;)i=i.parentElement,i.getAttribute("id")&&(a=!1,t=i.getAttribute("id"),n(4,m=t));let s=[];AH.selectAll("#"+t+" span.mq-editable-field").forEach((e=>{let t=e.getAttribute("mathquill-command-id");s.push(t)}));let l=e.getAttribute("mathquill-command-id"),r=s.indexOf(l);n(5,w.spanId=r,w),n(5,w.divId=t,w),AH.selectAll(".toolbar_container_one","removeClass","h-imp"),n(5,w.showToolbar=!0,w)})),AH.listen(document,"click",".next_step",(function(e,t){"undefined"!=typeof QUIZPLAYERID&&window.parentElement.autoResize(QUIZPLAYERID),t.preventDefault(),S()})),setTimeout((function(){AH.listen(document,"click","#set-review",(function(){P()})),AH.listen(document,"click","#unset-review",(function(){Q()}))}),1e3),window.inNative&&setTimeout((function(){window.postMessage("height___"+document.getElementsByClassName("inNativeStyle")[0].offsetHeight,"*")}),200),window.inNative&&(window.checkReview=e=>e?self.setReview():self.unsetReview())}));return e.$$set=e=>{"xml"in e&&n(12,A=e.xml),"stopPreviewUpdate"in e&&n(13,y=e.stopPreviewUpdate),"isReview"in e&&n(0,k=e.isReview),"uxml"in e&&n(14,H=e.uxml)},e.$$.update=()=>{if(1&e.$$.dirty[0])if(k)var t=setTimeout((function(){P(),clearTimeout(t)}),500);else var n=setTimeout((function(){Q(),clearTimeout(n)}),200)},[k,c,d,f,m,w,function(e){if(null!=i.smxml.step[e]&&1==i.smxml.step[e]._sticky)return"sticky"},C,I,P,Q,function(e,t){"c"==e?z():G()},A,y,H,e=>{C(e)},()=>setTimeout((function(){I()}),100)]}ALGO.init=function(e,t){let n="";try{n=ALGO.util.generateVariables(e,t)}catch(e){swal({html:!0,title:"",text:"<b>"+e+"<br/><br/>Variables are not correctly defined!</b>",type:"error"})}return console.log("var llist",n),n},ALGO.util={generateVariables:function(algostr,genereted_str){const regex_mathtype=/is_advance[\s]*=([\s"'\d]*)/;let fnName="",var_list={};var xml=algostr.split("\n");try{ALGO.mathtype=+xml[0].match(regex_mathtype)[1].match(/[\d]+/)}catch(e){ALGO.mathtype=""}for(let i=0;i<xml.length;i++){let xml_id=xml[i],xml_arr=xml_id.split("=");switch(fnName=xml_arr[1].substr(0,xml_arr[1].indexOf("(")).trim(),fnName){case"rand_int":fnName="randInt";break;case"rand_float":fnName="randFloat";break;case"uc_sqrt":fnName="ucSqrt";break;case"rand_obj":fnName="randObj"}if("object"!=typeof ALGO.math[fnName]&&(fnName=""),""!=fnName){const e=/\(([^)]+)\)/;let t=[],n=e.exec(xml_arr[1]),i,a,s;switch(fnName.trim()){case"randInt":t=n[1].split(","),i=parseInt(t[0]),a=parseInt(t[1]),s=parseInt(t[2]),var_list[xml_arr[0].trim()]=ALGO.math[fnName].f(i,a,s);break;case"randFloat":t=n[1].split(","),i=parseFloat(t[0]),a=parseFloat(t[1]),s=parseInt(t[2]),var_list[xml_arr[0].trim()]=ALGO.math[fnName].f(i,a,s);break;case"ucSqrt":t=n[1].split(","),i=parseInt(t[0]),a=parseInt(t[1]),var_list[xml_arr[0].trim()]=ALGO.math[fnName].f(i,a);break;case"ucPow":t=n[1].split(","),i=parseInt(t[0]),a=parseInt(t[1]),s=parseInt(t[2]),var_list[xml_arr[0].trim()]=ALGO.math[fnName].f(i,a,s);break;default:let e=JSON.stringify(n[1]);e=e.trim().replace(/"|\\/g,""),var_list[xml_arr[0].trim()]=ALGO.math[fnName].f(e)}}if(""==fnName){const regExp_arth=/(\*|\+|\-|\/|\^|\%|\(|\)|\,|\[|\]|\#)/g,regExp_semicolon=/;|\\/g;let test=xml_arr[1].split(regExp_arth),expression="";var iscartesian=!1;for(let e=0;e<test.length;e++)if(test[e]=test[e].trim(),";"!=test[e]&&""!=test[e]){test[e]=test[e].replace(regExp_semicolon,""),"#"==test[e]?test[e]="'":test[e]=var_list.hasOwnProperty(test[e])?var_list[test[e]]:isNaN(+test[e])?test[e]:+test[e];let t=test[e];t="string"==typeof t?t.trim():t,"math.setCartesian"==t&&(iscartesian=!0),expression+=test[e]}if(2==ALGO.mathtype){if(1==iscartesian){for(var testing=eval(expression),str="",k=0;k<testing.length;k++)testing[k]="("+testing[k]+") ",str+=testing[k];var_list[xml_arr[0].trim()]=str}iscartesian||(var_list[xml_arr[0].trim()]=eval(expression).toString()),""==var_list[xml_arr[0].trim()]&&(var_list[xml_arr[0].trim()]="None of these")}""==ALGO.mathtype&&(var_list[xml_arr[0].trim()]=eval(expression.trim()))}}return var_list}},ALGO.init.replaceVariables=function(e,t){for(let i in t){var n=new RegExp("<{"+i+"}>","g");e=e.replace(n,t[i])}return e},ALGO.math={randObj:{text:"Randomize Object",description:"Find the random string or character",param:"(javascript,java,C,react,php)",use:"randObj(javascript,php,java,c)",f:function(e){let t=e.split(",");return t[ALGO.math.randInt.f(0,t.length-1)]}},randInt:{text:"Randomize Integer",description:"Find the random integer value (min-value, max-value, no. of values after decimal)",param:"minimunvalue,maximumvalue",agrlength:2,use:"randInt(1,4,2)",f:function(e,t,n){return(Math.floor(Math.random()*(t-e+1))+e).toFixed(n)}},randFloat:{text:"Randomize Float",description:"Find the random float/decimal value (min-value, max-value, no. of values after decimal)",param:"minimunvalue,maximumvalue",agrlength:2,use:"randFloat(1,4,2)",f:function(e,t,n){return(Math.random()*(t-e)+e).toFixed(n)}},ucSqrt:{text:"Square root",description:"Find the square root (value, no. of values after decimal)",param:"minimunvalue,maximumvalue",agrlength:2,use:"ucSqrt(9,2)",f:function(e,t){return Math.sqrt(e).toFixed(t)}},ucPow:{text:"Power",description:"Return the value of the number 4 to the power of 3(value, power, no. of values after decimal)",param:"minimunvalue,maximumvalue",agrlength:2,use:"ucPow(4,3,2)",f:function(e,t,n){return Math.pow(e,t).toFixed(n)}}};class StepAlgoPreview extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{xml:12,stopPreviewUpdate:13,isReview:0,uxml:14},add_css,[-1,-1,-1])}}function create_if_block$1(e){let t,n;return t=new StepAlgoPreview({props:{xml:e[0],remedStatus:e[1],showAns:e[2],stopPreviewUpdate:e[3],isReview:e[6],uxml:e[7]}}),{c(){create_component(t.$$.fragment)},m(e,i){mount_component(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.xml=e[0]),2&n&&(i.remedStatus=e[1]),4&n&&(i.showAns=e[2]),8&n&&(i.stopPreviewUpdate=e[3]),64&n&&(i.isReview=e[6]),128&n&&(i.uxml=e[7]),t.$set(i)},i(e){n||(transition_in(t.$$.fragment,e),n=!0)},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment$1(e){let t,n,i=(2==e[4]?.content_icon||2==e[5])&&create_if_block$1(e);return{c(){t=element("main"),i&&i.c()},m(e,a){insert(e,t,a),i&&i.m(t,null),n=!0},p(e,[n]){2==e[4]?.content_icon||2==e[5]?i?(i.p(e,n),48&n&&transition_in(i,1)):(i=create_if_block$1(e),i.c(),transition_in(i,1),i.m(t,null)):i&&(group_outros(),transition_out(i,1,1,(()=>{i=null})),check_outros())},i(e){n||(transition_in(i),n=!0)},o(e){transition_out(i),n=!1},d(e){e&&detach(t),i&&i.d()}}}function instance$1(e,t,n){let{xml:i}=t,{remedStatus:a}=t,{showAns:s}=t,{stopPreviewUpdate:l}=t,{editorState:r}=t,{content_icon:o}=t,{isReview:c}=t,{uxml:d}=t;return e.$$set=e=>{"xml"in e&&n(0,i=e.xml),"remedStatus"in e&&n(1,a=e.remedStatus),"showAns"in e&&n(2,s=e.showAns),"stopPreviewUpdate"in e&&n(3,l=e.stopPreviewUpdate),"editorState"in e&&n(4,r=e.editorState),"content_icon"in e&&n(5,o=e.content_icon),"isReview"in e&&n(6,c=e.isReview),"uxml"in e&&n(7,d=e.uxml)},[i,a,s,l,r,o,c,d]}class ItemPluginPreview extends SvelteComponent{constructor(e){super(),init(this,e,instance$1,create_fragment$1,safe_not_equal,{xml:0,remedStatus:1,showAns:2,stopPreviewUpdate:3,editorState:4,content_icon:5,isReview:6,uxml:7})}}export default ItemPluginPreview;
//# sourceMappingURL=ItemPluginPreview-dec6c244.js.map
