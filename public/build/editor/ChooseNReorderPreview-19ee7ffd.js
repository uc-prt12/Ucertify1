import{E as e,S as t,i as s,s as n,e as o,f as r,h as i,o as l,c as a,b as c,u,j as d,m,l as f,v as h,x as p,t as b,a as g,d as _,z as A,y as v,p as w,A as S,a4 as x,X as y,w as k,W as q}from"./main-6d4c5752.js";import{I as L}from"./ItemHelper-20288ef0.js";import"./style-inject.es-1f59c1d0.js";import{h as E}from"./hotkeys.esm-37574aa9.js";import{S as C}from"./sortable.esm-143959dc.js";import"./choose.min-be4c2387.js";const I=new e;var M={};let P,T,j,D;function N(e,t,s){const n=e.slice();return n[27]=t[s],n[29]=s,n}function X(e){let t,s,n,a,c,u,d,m,f,h,p=e[10](e[27])+"";return{c(){t=o("li"),r(t,"key",s=e[29]),r(t,"class",n="1"==e[3].isSentence?"sentence_li":"1"==e[3].isParagraph?"paragraph_li":""),r(t,"is_correct",a=e[27].isCorrect),r(t,"optid",c=e[27].optid),r(t,"correct_seq",u=e[27].seq),r(t,"user_answer",d=e[27].user_answer),r(t,"u",m=e[27].user_answer),r(t,"user_seq",f=e[27].user_seq?e[27].user_seq:e[29]),r(t,"id",h="id"+e[29]),r(t,"tabindex","0")},m(e,s){i(e,t,s),t.innerHTML=p},p(e,s){4&s&&p!==(p=e[10](e[27])+"")&&(t.innerHTML=p),8&s&&n!==(n="1"==e[3].isSentence?"sentence_li":"1"==e[3].isParagraph?"paragraph_li":"")&&r(t,"class",n),4&s&&a!==(a=e[27].isCorrect)&&r(t,"is_correct",a),4&s&&c!==(c=e[27].optid)&&r(t,"optid",c),4&s&&u!==(u=e[27].seq)&&r(t,"correct_seq",u),4&s&&d!==(d=e[27].user_answer)&&r(t,"user_answer",d),4&s&&m!==(m=e[27].user_answer)&&r(t,"u",m),4&s&&f!==(f=e[27].user_seq?e[27].user_seq:e[29])&&r(t,"user_seq",f)},d(e){e&&l(t)}}}function R(e){let t;return{c(){t=u("Sequencing of the selected item is not required. Click to select items.")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function U(e){let t;return{c(){t=u("Click to select. Drag and Drop to set sequence.")},m(e,s){i(e,t,s)},d(e){e&&l(t)}}}function H(e){let t,s,n,w,S,x,y,k,q,E,C,I,M,P,T,j,D,H,$,B,O=e[3].headingCorrect+"";w=new L({props:{handleReviewClick:e[11],reviewMode:e[0],customReviewMode:e[4]}}),w.$on("setReview",e[5]),w.$on("unsetReview",e[6]);let G=e[2],K=[];for(let t=0;t<G.length;t+=1)K[t]=X(N(e,G,t));function F(e,t){return 1==e[3].allowSort||1==e[3].isSentence||1==e[3].isParagraph?U:R}let z=F(e),J=z(e);return{c(){t=o("main"),s=o("div"),n=o("center"),a(w.$$.fragment),S=c(),x=o("center"),y=o("div"),k=o("div"),q=u(O),E=c(),C=o("ul");for(let e=0;e<K.length;e+=1)K[e].c();T=c(),j=o("div"),J.c(),r(k,"class","choose_header font17 pl-4"),r(C,"id","sortable"),r(C,"totalcorrectans",I=e[3].totalcorrectans),r(C,"checkseq",M=e[3].allowSort),r(C,"class","ui-sortable w-auto mt-0 p-2"),r(C,"style",P="border-left:10px solid #d9e7fd;border-right: 10px solid #d9e7fd"),r(j,"class","choose_bottom pl-4"),r(j,"id","instruction"),r(y,"id",e[1]),r(y,"type",D="1"==e[3].isSentence?"sentence":"1"==e[3].isParagraph?"paragraph":"normal"),r(y,"class","bg-white")},m(o,r){i(o,t,r),d(t,s),d(s,n),m(w,n,null),d(s,S),d(s,x),d(x,y),d(y,k),d(k,q),d(y,E),d(y,C);for(let e=0;e<K.length;e+=1)K[e].m(C,null);d(y,T),d(y,j),J.m(j,null),H=!0,$||(B=[f(C,"mouseup",(function(){h(1!=e[0]?e[7].bind(this):"")&&(1!=e[0]?e[7].bind(this):"").apply(this,arguments)})),f(C,"mousemove",(function(){h(1!=e[0]?e[8].bind(this):"")&&(1!=e[0]?e[8].bind(this):"").apply(this,arguments)})),f(C,"mousedown",(function(){h(1!=e[0]?e[9].bind(this):"")&&(1!=e[0]?e[9].bind(this):"").apply(this,arguments)}))],$=!0)},p(t,[s]){e=t;const n={};if(1&s&&(n.reviewMode=e[0]),w.$set(n),(!H||8&s)&&O!==(O=e[3].headingCorrect+"")&&p(q,O),1036&s){let t;for(G=e[2],t=0;t<G.length;t+=1){const n=N(e,G,t);K[t]?K[t].p(n,s):(K[t]=X(n),K[t].c(),K[t].m(C,null))}for(;t<K.length;t+=1)K[t].d(1);K.length=G.length}(!H||8&s&&I!==(I=e[3].totalcorrectans))&&r(C,"totalcorrectans",I),(!H||8&s&&M!==(M=e[3].allowSort))&&r(C,"checkseq",M),z!==(z=F(e))&&(J.d(1),J=z(e),J&&(J.c(),J.m(j,null))),(!H||2&s)&&r(y,"id",e[1]),(!H||8&s&&D!==(D="1"==e[3].isSentence?"sentence":"1"==e[3].isParagraph?"paragraph":"normal"))&&r(y,"type",D)},i(e){H||(b(w.$$.fragment,e),H=!0)},o(e){g(w.$$.fragment,e),H=!1},d(e){e&&l(t),_(w),A(K,e),J.d(),$=!1,v(B)}}}function $(e,t,s){let{cmed:n}=t,{showAns:o}=t,{xml:r}=t,{stopPreviewUpdate:i}=t,{editorState:l}=t,{isReview:a}=t,{uxml:c}=t,u=a,d=n?"choose"+n:"choose";M.ajax_eId=n?"#choose"+n:"#choose";var m=[];let f={};k({xml:"",headingCorrect:"",allowSort:"",isSentence:"",isParagraph:"",chooseClass:"",totalcorrectans:"",stateXMLToJSON:""}).subscribe((e=>{s(3,f=e)}));function h(){var e="";e=("1"==f.isSentence||f.isParagraph,M.CheckResultchoose("#"+d)),q({uXml:e.u,ans:e.b}),l&&o(e.b?"Correct":"Incorrect")}function p(){g("none"),M.modeOn("on"),s(0,a=!0),M.review("#"+d,0),S.removeClass("#show_ans_group button","active"),S.removeClass("#show_ans_group .your-ans","active"),h()}function b(){g("auto"),s(0,a=!1),M.modeOn(),M.review("#"+d,0)}function g(e){S.selectAll("#sortable li").forEach((t=>{t.style.pointerEvents=e}))}return w((()=>{S.bind(document,"click",(function(){if(document.querySelector(".editorRender"))return document.querySelector(".editorRender").clientHeight})),S.listen(document,"click","#"+d,(function(){setTimeout((function(){h()}),100)})),S.listen(document,"click","#show_ans_group button",(e=>{S.removeClass("#show_ans_group button","active"),S.addClass(e,"active")}))})),x((()=>{if(r!=f.xml){if(1==i)return!1;n&&(s(1,d="choose"+n),M.ajax_eId="#choose"+n),s(3,f.xml=r,f),s(3,f.stateXMLToJSON=y(r),f),function(e){if(function(e){try{s(2,m=[]);let n=e.smxml.list.__cdata.split("\n"),o=1,r=0,i=0;n.forEach((function(e,t){""!=n[t].trim()&&("*"==n[t].trim().charAt(0)&&r++,m.push({value:n[t].trim(),isCorrect:"*"==n[t].trim().charAt(0)?"1":"0",seq:"*"==n[t].trim().charAt(0)?o:"0",user_answer:"0",optid:i}),"*"==n[t].trim().charAt(0)&&o++,i++)})),function(e){for(var t=e.length-1;t>0;t--){var s=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[s],e[s]=n}}(m),e=function(e){let t=e;return t.smxml.list._headingCorrect&&(t.smxml.list._headingcorrect=t.smxml.list._headingCorrect,delete t.smxml.list._headingCorrect),t.smxml.list._allowSort&&(t.smxml.list._allowsort=t.smxml.list._allowSort,delete t.smxml.list._allowSort),t.smxml.list._isParagraph&&(t.smxml.list._isparagraph=t.smxml.list._isParagraph,delete t.smxml.list._isParagraph),t.smxml.list._isSentence&&(t.smxml.list._issentence=t.smxml.list._isSentence,delete t.smxml.list._isSentence),t}(e),s(3,f.headingCorrect=e.smxml.list._headingcorrect,f),s(3,f.allowSort=e.smxml.list._allowsort?e.smxml.list._allowsort:"0",f),s(3,f.isSentence=e.smxml.list._issentence?e.smxml.list._issentence:"0",f),s(3,f.isParagraph=e.smxml.list._isparagraph?e.smxml.list._isparagraph:"0",f),s(3,f.totalcorrectans=r,f);var t=setTimeout(function(){S.find("#sortable",".sentence_li","all").forEach((function(e,t){e.setAttribute("user_seq",t+1)})),clearTimeout(t)}.bind(this),200)}catch(e){this.onError=e,console.warn({error:e.message,"function name":"parseXMLPreview","File name":"ChooseNReorderPreview.js"})}}(e),c){let e=y(c);if(e&&e.SMANS&&e.SMANS&&e.SMANS.list){let t=e.SMANS.list._useranswer.split(","),n=[];for(let e in t)if(t[e]){let o=t[e].split("|");for(let e in m)m[e].optid==o[0]&&(s(2,m[e].user_answer=o[2],m),s(2,m[e].user_seq=o[1],m),n.push(m[e]))}s(2,m=n)}}}(f.stateXMLToJSON);var e=setTimeout((function(){c||(S.selectAll("#sortable li").forEach((e=>{e.setAttribute("user_answer","0"),e.setAttribute("style","")})),S.selectAll("#sortable li .prefix").forEach((e=>{e.innerHTML=""}))),M.removeActive("#"+d),M.review("#"+d,0),M.init("#"+d),M.CheckResultchoose("#"+d);new C(S.find("#"+d,"#sortable"),{animation:150});"1"==f.allowSort&&"1"!=f.isSentence&&"1"!=f.isParagraph||new C(S.find("#"+d,"#sortable"),{onEnd(e){e.item;e.to,e.from,e.oldIndex,e.newIndex,e.oldDraggableIndex,e.newDraggableIndex,e.clone,e.pullMode}}),"1"!=f.isSentence&&"1"!=f.isParagraph||M.dragSenParItem("#"+d),clearTimeout(e)}),200)}})),e.$$set=e=>{"cmed"in e&&s(12,n=e.cmed),"showAns"in e&&s(13,o=e.showAns),"xml"in e&&s(14,r=e.xml),"stopPreviewUpdate"in e&&s(15,i=e.stopPreviewUpdate),"editorState"in e&&s(16,l=e.editorState),"isReview"in e&&s(0,a=e.isReview),"uxml"in e&&s(17,c=e.uxml)},e.$$.update=()=>{1&e.$$.dirty&&setTimeout((function(){a?p():b()}),200)},[a,d,m,f,u,p,b,function(e){"1"!=f.isSentence&&"1"!=f.isParagraph&&M.cmu("#"+d,e)},function(e,t){"1"!=f.isSentence&&"1"!=f.isParagraph&&M.cmm(e,t)},function(e,t){"1"!=f.isSentence&&"1"!=f.isParagraph&&(M.cmd(e,t),ISSPECIALMODULEUSERXMLCHANGE=1)},function(e){return'<div class="prefix pl-1 mr-2"'+("1"==f.isSentence?"nw":"")+'"></div>'+("1"==f.isParagraph?'<div class="pg_handle">&equiv;</div>':"")+("*"==e.value.charAt(0)?e.value.slice(1):e.value)},function(e,t){"c"==e?M.showAns("#"+d,t.currentTarget,"c"):M.showAns("#"+d,t.currentTarget,"u")},n,o,r,i,l,c]}M.ajax_eId="#choose",M.userAnsXML="",M.errorCatchFlag=1,I.listen("body","keyup",".sm_input_text",(function(){""==document.querySelector(".sm_input_text").value&&document.querySelector(".add-option")?document.querySelector(".add-option").disabled=!0:document.querySelector(".add-option")&&(document.querySelector(".add-option").disabled=!1)})),M.update_XMLValue=function(){var e=[];if(I.selectAll(".choose_item_container textarea").forEach((t=>{if(t.value.length>0){const s=t.value.replace(/\r?\n/g,"||");I.prevElm(t,"input")&&I.prevElm(t,"input").checked?e.push("*"+s):e.push(s)}})),document.querySelector("#special_module_xml")){var t=document.querySelector("#special_module_xml").value;I.find(t,"list").setAttribute("headingCorrect",document.querySelector("#headingCorrect").value),I.find(t,"list").setAttribute("allowSort",document.querySelector("#allowSort").getAttribute("value")),I.find(t,"list").setAttribute("isSentence",document.querySelector("#isSentence").getAttribute("value")),I.find(t,"list").setAttribute("isParagraph",document.querySelector("#isParagraph").getAttribute("value")),I.find(t,"list").innerHTML="\x3c!--[CDATA["+e.join("\n")+"]]--\x3e",document.querySelector("#special_module_xml").value=formatXml(t.xml?t.xml:(new XMLSerializer).serializeToString(t[0]),!0)}},M.showAns=function(e,t,s){"c"==s?(M.review(e,1),M.sortList(e,"correct_seq")):"u"==s&&(M.review(e,0),M.sortList(e,"user_seq"))},M.sortList=function(e,t){var s=I.selectAll(e+" #sortable > li"),n=Array.from(s);n.sort((function(e,s){var n=parseInt(e.getAttribute(t));0===n&&(n=Number.MAX_VALUE);var o=parseInt(s.getAttribute(t));return 0===o&&(o=Number.MAX_VALUE),n-o})),I.selectAll(e+" #sortable > li").forEach((e=>{e.remove()})),n.forEach((t=>{I.find(e,"#sortable").append(t)}))},M.togseq=function(e){var t=I.find(e,"#sortable").getAttribute("checkSeq");I.find(e,"#sortable").setAttribute("checkSeq","1"==t?"0":"1"),I.find(e,"#instruction").innerHTML="1"==t?"":"Sequence Important"},M.review=function(e,t){var s=document.querySelector(e)?.querySelector("#sortable")?.getAttribute("checkSeq"),n=1==t?"is_correct":"user_answer",o=1==t?"correct_seq":"user_seq";"normal"==I.select(e).getAttribute?.("type")?I.find(e,"#sortable li","all").forEach((e=>{if("1"==s){if(1==e.getAttribute(n))var r=e.getAttribute(o);else r=0;I.find(e,".prefix").innerHTML=r>0?r:"",I.find(e,".prefix",{action:"removeClass",actionData:"tick"})}else 1==e.getAttribute(n)?I.find(e,".prefix",{action:"addClass",actionData:"tick"}):I.find(e,".prefix",{action:"removeClass",actionData:"tick"});1==e.getAttribute("user_answer")&&0==t||1==e.getAttribute("is_correct")&&1==t?e.classList.add("choose_sel"):e.classList.remove("choose_sel")})):"sentence"!=I.select(e).getAttribute?.("type")&&"paragraph"!=I.select(e).getAttribute?.("type")||M.setActiveClass(e,t)},M.CheckResultchoose=function(e){let t={};var s=!0,n=0;let o=I.find(e,"#sortable");var r=Array.isArray(o)?"":o.getAttribute("checkSeq"),i="";return I.find(e,"#sortable li","all").forEach((e=>{var t=e.getAttribute("user_seq"),o=e.getAttribute("user_answer");"1"==r?(t!=e.getAttribute("correct_seq")&&(s=!1),"undefined"!=typeof calculatePoint&&e.getAttribute("correct_seq")>0&&t==e.getAttribute("correct_seq")&&n++):(o!=e.getAttribute("is_correct")&&(s=!1),"undefined"!=typeof calculatePoint&&e.getAttribute("is_correct")>0&&o==e.getAttribute("is_correct")&&n++),i+=e.getAttribute("optID")+"|"+t+"|"+o+","})),"undefined"!=typeof calculatePoint&&calculatePoint(I.find(e,"#sortable").getAttribute("totalCorrectAns"),n),M.userAnsXML='<SMANS type="6"><list useranswer="'+i+'" /></SMANS>',t.u=M.userAnsXML,t.b=s,t},M.touchHandler=function(e){var t=e.changedTouches[0],s="";switch(e.type){case"touchstart":s="mousedown";break;case"touchmove":s="mousemove";break;case"touchend":s="mouseup";break;default:return}var n=document.createEvent("MouseEvent");n.initMouseEvent(s,!0,!0,window,1,t.screenX,t.screenY,t.clientX,t.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(n)},M.init=function(e){document.addEventListener("touchstart",M.touchHandler,!0),document.addEventListener("touchmove",M.touchHandler,!0),document.addEventListener("touchend",M.touchHandler,!0),document.addEventListener("touchcancel",M.touchHandler,!0),I.bind(e,"touchstart",(function(e){e.preventDefault()})),I.bind(e,"touchmove",(function(e){e.preventDefault()}))},M.shouldselect=!1,M.readyThis=function(e){(null!=typeof isTouchable||isiPad)&&setTimeout((function(){I.find(e,"#sortable").removeAttribute("onmouseup"),I.listen(I.find("body",e),"click","#sortable",(function(){var t=window.event;M.ow=t.srcElement?t.srcElement:t.target,M.t=setTimeout((function(){M.setUserAns(e,M.ow,M.shouldselect)}),100)})),"0"!=document.querySelector("#sortable").getAttribute("checkseq")&&new C(I.find(e,"#sortable"),{onEnd:function(t){M.ow=t.srcElement?t.srcElement:t.target,M.t=setTimeout((function(){M.setUserAns(e,M.ow,M.shouldselect)}),100)}})}),200)},M.bindKeyup=function(e){var t=0;function s(e,t=1){if(e.id){let s=I.selectAll(".ks"),n=-1;for(let o=0;o<s.length;o++)if(e.id==s[o].id){n=t?o==s.length-1?0:o+1:0==o?s.length-1:o-1;break}-1!=n&&s[n].focus()}}function n(){var s,n;t=0,s=I.find(e,"#sortable .copied"),n=I.find(e,".ks").length,s.classList.contains("copied")&&(0==t?s.insertBefore(I.find(e,".ks:nth(0)")):s.insertAfter(I.find(e,".ks:nth("+t+")"))),I.find(e,".ks:nth("+t+")").focus(),t==n-1?t=0:t++}function o(){var e=!1;let t=I.selectAll("#sortable li"),s=I.select(":focus");if(s.nodeName){let n=s.getAttribute("id");for(let s=0;s<t.length;s++)if(n==t[s].getAttribute("id")){e=!0;break}}return e}E.unbind("down,up,enter,alt+down,delete,left,right,tab,shift+tab,esc","choose"+e),I.find(e,"#sortable li","all").forEach((e=>{e.classList.add("ks")})),I.bind(document,"click",(function(){o()||I.find(e,"#sortable .copied",{action:"removeClass",actionData:"copied"})})),I.listen(document,"keydown",e,(function(){E.setScope("choose"+e)})),I.listen(document,"keydown",".ks",(function(e,t){let n="#choose";if(13===t.which&&(t.preventDefault(),"0"==I.find(n,"#sortable").getAttribute("checkseq")?(M.ow=I.find(n,"#sortable li:focus","all")[0],M.t=setTimeout((function(){M.setUserAns(n,M.ow,!0)}),100)):"1"==I.find(n,"#sortable").getAttribute("checkseq")&&(I.find(n,"#sortable li:focus").classList.contains("copied")?(M.ow=I.find(n,"#sortable li:focus","all")[0],M.t=setTimeout((function(){M.setUserAns(n,M.ow,!I.find(n,"#sortable li:focus").classList.contains("choose_sel"))}),100),I.find(n,"#sortable li:focus",{action:"removeClass",actionData:"copied"})):(M.ow=I.find(n,"#sortable li:focus","all")[0],M.t=setTimeout((function(){M.setUserAns(n,M.ow,!I.find(n,"#sortable li:focus").classList.contains("choose_sel"))}),100),I.find(n,"#sortable li:focus",{action:"addClass",actionData:"copied"})))),39===t.which||40===t.which){var o=I.find(n,"#sortable .copied");I.selectAll(n+" .ks").length;let e=I.select(".ks:focus"),r=I.selectAll(".ks")[I.selectAll(".ks").length-1];e.id==r.id?o&&o.classList.contains("copied")?(o.parentNode.insertBefore(o,I.selectAll(".ks")[0]),o.focus()):I.selectAll(".ks")[0].focus():o&&o.classList.contains("copied")?(I.find(n,"#sortable .copied").nextSibling.insertAdjacentElement("afterend",I.find(n,"#sortable .copied")),o.focus()):s(e,1),t.preventDefault()}if(38===t.which||37===t.which){o=I.find(n,"#sortable .copied"),I.find(n,".ks").length;let e=I.select(".ks:focus"),r=I.selectAll(".ks")[0];if(e.id==r.id)o&&o.classList.contains("copied")?(I.selectAll(".ks")[I.selectAll(".ks").length-1].insertAdjacentElement("afterend",o),o.focus()):I.selectAll(".ks")[I.selectAll(".ks").length-1].focus();else{document.querySelector(n);o&&o.classList.contains("copied")?(o.parentNode.insertBefore(o,I.find(n,"#sortable .copied").previousElementSibling),o.focus()):s(e,0)}t.preventDefault()}})),E("down, up, enter, alt+down, delete, left, right, tab, shift+tab, esc","choose"+e,(function(t,s){switch(s.key){case"alt+down":n();break;case"delete":o()&&(M.ow=I.find(e,"#sortable li:focus","all")[0],M.t=setTimeout((function(){M.setUserAns(e,M.ow,!0)}),100));break;case"tab":o()&&I.find(e,"#sortable .copied",{action:"removeClass",actionData:"copied"});let s=I.selectAll(".ks:focus"),r=I.selectAll(".ks")[I.selectAll(".ks").length-1];s.id==r.id&&(t.preventDefault(),I.selectAll(".ks")[0].focus());break;case"shift+tab":o()&&I.find(e,"#sortable .copied",{action:"removeClass",actionData:"copied"}),s=I.selectAll(".ks:focus"),r=I.selectAll(".ks")[I.selectAll(".ks").length-1],s.id==r.id&&(t.preventDefault(),I.selectAll(".ks")[I.selectAll(".ks").length].focus());break;case"esc":o()&&(t.preventDefault(),I.find(e,"#sortable .copied",{action:"removeClass",actionData:"copied"}),I.selectAll(".ks")[I.selectAll(".ks").length-1].focus(),I.selectAll(".ks")[I.selectAll(".ks").length-1].blur())}})),E.setScope("choose"+e)},M.cmd=function(e,t){M.shouldselect=!0},M.cmm=function(e,t){t||(t=window.event);var s=t.srcElement?t.srcElement:t.target;if(s.classList.contains("prefix")&&(s=s.parentElement),s){var n=s.getAttribute("user_answer");M.shouldselect=!1,"0"==n&&(M.shouldselect=!0)}},M.cmu=function(e,t,s=!1){s?M.ow=t:(t||(t=window.event),M.ow=t.srcElement?t.srcElement:t.target),M.ow.classList.contains("prefix")&&(M.ow=M.ow.parentElement),M.t=setTimeout((function(){M.setUserAns(e,M.ow,M.shouldselect)}),100)},M.setUserAns=function(e,t,s){if("IMG"==t.tagName?(P=I.parent(t,"li").getAttribute("user_answer"),T=I.parent(t,"li").getAttribute("user_seq"),j=I.find(e,"#sortable").getAttribute("checkSeq")):(P=t.getAttribute("user_answer"),T=t.getAttribute("user_seq"),j=I.find(e,"#sortable").getAttribute("checkSeq")),"UL"!=t.tagName){if(s)if("1"==P)if("IMG"==t.tagName){let e=I.parent(t,"li");I.setAttr(e,{user_answer:0}),e.classList.remove("choose_sel"),"1"!=j&&I.find(e,".prefix","all").classList.remove("tick")}else I.setAttr(t,{user_answer:0}),t.classList.remove("choose_sel"),"1"!=j&&I.find(t,".prefix",{action:"removeClass",actionData:"tick"});else if("IMG"==t.tagName){if(I.find(document.querySelector(t).parentElement,"li","all").setAttribute("user_answer",1),I.select(t.parentElement).classList.add("choose_sel"),"1"!=j){let e=I.parent(t,"li");I.find(e,".prefix").classList.add("tick")}}else I.setAttr(t,{user_answer:1}),t.classList.add("choose_sel"),"1"!=j&&I.find(t,".prefix",{action:"addClass",actionData:"tick"});if("1"==j){var n=1;I.find(e,"#sortable li","all").forEach((e=>{1==e.getAttribute("user_answer")?(I.find(e,".prefix").innerHTML=n,I.setAttr(e,{user_seq:n}),n++):(I.find(e,".prefix").innerHTML="",I.setAttr(e,{user_seq:0}))}))}M.CheckResultchoose(e),M.shouldselect=!1}else M.shouldselect=!1},M.removeItem=function(){I.remove(e1.parentElement.parentElement),document.querySelectorAll(".choose_item_container").innerHTML.trim().length<=200?document.querySelector(".message_content").style.display="block":document.querySelector(".message_content").style.display="none"},M.addItem=function(){document.querySelector(".message_content").style.display="none",I.insert(".choose_item_container",'<div class="clearfix mt choose_options"><div class="col-md-12 mt-head"><input class="choose_compls" type="checkbox"><textarea></textarea><span class="remove-item icomoon-24px-delete-1"></span></div></div>',"afterbegin")},M.setDragSequence=function(e,t,s){var n=1;I.find(e,"#sortable li","all").forEach((e=>{I.setAttr(e,{user_seq:n}),n++})),0==s&&I.find(e,"#sortable li","all").forEach((e=>{e.classList.remove("choose_sel")})),M.CheckResultSentenceChoose(e)},M.CheckResultSentenceChoose=function(e){var t=!0;let s={};j=I.find("#choose","#sortable").getAttribute("checkSeq");var n="";return I.find(e,"#sortable li","all").forEach((e=>{T=e.getAttribute("user_seq"),D=e.getAttribute("correct_seq"),P=e.getAttribute("user_answer"),T!=D&&0!=e.getAttribute("correct_seq")&&(t=!1),n+=e.getAttribute("optID")+"|"+T+"|"+P+","})),M.userAnsXML='<SMANS type="6"><list useranswer="'+n+'" /></SMANS>',ISSPECIALMODULEUSERXMLCHANGE=1,document.querySelector("#special_module_user_xml")&&(document.querySelector("#special_module_user_xml").value=M.userAnsXML),document.querySelector("#answer")&&I.setAttr("#answer",{checked:t}),s.u=M.userAnsXML,s.ans=t,s},M.dragSenParItem=function(e){new C(I.find(e,"#sortable"),{onStart:function(e){},onEnd:function(t){console.log("end =>"+t),M.setDragSequence(e,t.item)}}),M.CheckResultchoose(e)},M.setActiveClass=function(e,t){I.find(e,"#sortable").getAttribute("checkSeq");I.find(e,"#sortable li","all").forEach((e=>{1==e.getAttribute("user_answer")&&0==t||1==e.getAttribute("is_correct")&&1==t?e.classList.add("choose_sel"):e.classList.remove("choose_sel")}))},M.removeActive=function(e){I.find(e,"#sortable li","all").forEach((e=>{e.classList.remove("choose_sel")}))},M.labBinded=!0,M.sortable=!1,M.modeOn=function(e){I.selectAll(".test","addClass","h"),I.selectAll(".review","addClass","h"),e?(I.selectAll(".review","removeClass","h"),M.unBindLab(),void 0!==E&&E.unbind("down,up,enter,alt+down,delete,left,right,tab,shift+tab,esc","choose"+M.ajax_eId),I.find(M.ajax_eId,".copied","all").forEach((e=>{e.classList.remove("copied")})),null!=document.querySelector("#show_ans_group button")&&document.querySelector("#show_ans_group button").forEach((e=>{e.classList.contains("correct-ans btn-primary")?M.showAns(M.ajax_eId,e,"c"):e.classList.contains("your-ans btn-primary")&&M.showAns(M.ajax_eId,e,"u")}))):(I.selectAll(".test","removeClass","h"),setTimeout((function(){M.callBindKey()}),100),M.review(M.ajax_eId,0),M.bindLab())},M.callBindKey=function(){void 0!==E?M.bindKeyup(M.ajax_eId):(M.errorCatchFlag<=50?setTimeout((function(){M.callBindKey()}),100):console.log("hotkeys not found"),M.errorCatchFlag++)},M.unBindLab=function(){M.labBinded=!1,"normal"==document.querySelector(M.ajax_eId).getAttribute("type")&&I.find(M.ajax_eId,"#sortable").removeAttribute("onmouseup onmousemove onmousedown"),I.find(M.ajax_eId,"#sortable").classList.contains("ui-sortable")&&(M.sortable=!0)},M.bindLab=function(){M.labBinded=!0,I.bind(document.querySelector("#sortable"),"mouseup",(function(e){M.cmu(M.ajax_eId,e)})),I.bind(document.querySelector("#sortable"),"mousemove",(function(e){M.cmm(M.ajax_eId,e)})),I.bind(document.querySelector("#sortable"),"mousedown",(function(e){M.cmd(M.ajax_eId,e)})),Array.isArray(I.find(M.ajax_eId,"#sortable"))||new C(I.find(M.ajax_eId,"#sortable"),{animation:150,onEnd:function(e){M.cmu(M.ajax_eId,e.item,!0),I.select(M.ajax_eId).click()}}),"sentence"!=document.querySelector(M.ajax_eId)?.getAttribute?.("type")&&"paragraph"!=document.querySelector(M.ajax_eId)?.getAttribute?.("type")||M.dragSenParItem(M.ajax_eId)};export default class extends t{constructor(e){super(),s(this,e,$,H,n,{cmed:12,showAns:13,xml:14,stopPreviewUpdate:15,editorState:16,isReview:0,uxml:17})}}
//# sourceMappingURL=ChooseNReorderPreview-19ee7ffd.js.map