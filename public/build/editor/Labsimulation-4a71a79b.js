import{S as e,i as t,s as a,L as i,I as n,K as r,H as o,e as s,b as l,c as m,f as c,h as d,m as u,M as h,t as g,a as f,o as p,d as x,p as w,Q as b,Y as v,A as y,C as $,E as A,aa as k,w as F,u as _,x as M,g as S,O as T,a2 as q,j as D,r as C}from"./main-ac89e9fe.js";import{U as L}from"./UCLIB-c1fa4f77.js";function H(e){let t;return{c(){t=_(e[0])},m(e,a){d(e,t,a)},p(e,a){1&a&&M(t,e[0])},d(e){e&&p(t)}}}function U(e){let t;return{c(){t=s("div"),t.innerHTML='<div style="">Review</div>',c(t,"slot","title"),S(t,"text-align","left")},m(e,a){d(e,t,a)},d(e){e&&p(t)}}}function E(e){let t,a=$.done+"";return{c(){t=_(a)},m(e,a){d(e,t,a)},p:C,d(e){e&&p(t)}}}function R(e){let t,a,i;return a=new T({props:{unelevated:!0,outlined:!0,color:"primary",$$slots:{default:[E]},$$scope:{ctx:e}}}),a.$on("Click",e[6]),{c(){t=s("div"),m(a.$$.fragment),c(t,"slot","footer"),c(t,"class","svelteFooter")},m(e,n){d(e,t,n),u(a,t,null),i=!0},p(e,t){const i={};8388608&t&&(i.$$scope={dirty:t,ctx:e}),a.$set(i)},i(e){i||(g(a.$$.fragment,e),i=!0)},o(e){f(a.$$.fragment,e),i=!1},d(e){e&&p(t),x(a)}}}function j(e){let t,a,i,n,r,o,h,w,b,v,y,A,k=$.calculate_answer+"",F=$.please_wait+"";return n=new q({props:{size:60}}),{c(){t=l(),a=s("div"),i=s("center"),m(n.$$.fragment),r=l(),o=s("h4"),h=_(k),w=s("br"),b=l(),v=_(F),y=l(),c(i,"class","mt-xl"),c(a,"id","remediationModel")},m(e,s){d(e,t,s),d(e,a,s),D(a,i),u(n,i,null),D(i,r),D(i,o),D(o,h),D(o,w),D(o,b),D(o,v),d(e,y,s),A=!0},p:C,i(e){A||(g(n.$$.fragment,e),A=!0)},o(e){f(n.$$.fragment,e),A=!1},d(e){e&&p(t),e&&p(a),x(n),e&&p(y)}}}function I(e){let t,a,w,b,v,y,$,A;function k(t){e[5].call(null,t)}let F={timeout:10,$$slots:{default:[H]},$$scope:{ctx:e}};function _(t){e[7].call(null,t)}void 0!==e[1].snackback&&(F.visible=e[1].snackback),w=new i({props:F}),n.push((()=>r(w,"visible",k)));let M={width:450,$$slots:{default:[j],footer:[R],title:[U]},$$scope:{ctx:e}};return void 0!==e[1].remediationToggle&&(M.visible=e[1].remediationToggle),y=new o({props:M}),n.push((()=>r(y,"visible",_))),{c(){t=s("div"),t.innerHTML='<center><div id="frame"><iframe id="authoringFrame" title="Hardware Lab" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="650" width="94%" name="authoringFrame" data-authoring="1"></iframe></div></center> \n\t<input type="hidden" name="labAnswer" id="labAnswer" val="0"/> \n\t<input type="hidden" id="checkAnsStr" name="checkAnsStr" value=""/> \n\t<button id="clickRun" name="clickRun" style="display: none"></button>',a=l(),m(w.$$.fragment),v=l(),m(y.$$.fragment),c(t,"id","authoringArea")},m(e,i){d(e,t,i),d(e,a,i),u(w,e,i),d(e,v,i),u(y,e,i),A=!0},p(e,[t]){const a={};8388609&t&&(a.$$scope={dirty:t,ctx:e}),!b&&2&t&&(b=!0,a.visible=e[1].snackback,h((()=>b=!1))),w.$set(a);const i={};8388610&t&&(i.$$scope={dirty:t,ctx:e}),!$&&2&t&&($=!0,i.visible=e[1].remediationToggle,h((()=>$=!1))),y.$set(i)},i(e){A||(g(w.$$.fragment,e),g(y.$$.fragment,e),A=!0)},o(e){f(w.$$.fragment,e),f(y.$$.fragment,e),A=!1},d(e){e&&p(t),e&&p(a),x(w,e),e&&p(v),x(y,e)}}}function W(e){return(e=escape(e)).replace(/[*+\/@]|%20/g,(function(e){switch(e){case"*":e="%2A";break;case"+":e="%2B";break;case"/":e="%2F";break;case"@":e="%40";break;case"%20":e="+"}return e}))}function z(e,t,a){let{editorState:i}=t,{ucEditor:n}=t,{showAns:r}=t,o="",s="<smans></smans>",l="",m="",c={};F({xml:"",uxml:"",module:"0",stepIndex:0,toggle:!1,snackback:!1,testMode:"0",remediationToggle:!1,qxml:"",titleData:"",stemData:"",remediationData:"",remediationToggle:!1,webAutogradeNotCalled:!0,toggleMode:""}).subscribe((e=>{a(1,c=e)}));async function d(e){a(2,i.activator=!0,i),y.empty("#authoringFrame"),y.find("#authoringArea","form",{action:"remove"}),o=await function(e){return new Promise(((t,a)=>{try{let a;setTimeout((function(){a="22"==c.module?"1"==e?c.qxml:y.select("#authoringFrame")?.contentWindow.save_data?.():"1"==e?c.qxml:y.select("#authoringFrame")?.contentWindow.generateXML?.(),t(a)}),50)}catch(e){a(e)}}))}(e),console.log("qxml Fetched"),y.empty("#authoringDiv player"),k(y.select("#authoringDiv")),y.find("#authoringDiv","player",{action:"addClass",actionData:"hidecontent"}),y.selectAll("#editor img").forEach((e=>{e.getAttribute("src").match(/\/\/s3.amazonaws.com\/jigyaasa_content_static/gm)||"editor-header-img"==e.getAttribute("id")||e.getAttribute("src","//s3.amazonaws.com/jigyaasa_content_static/"+e.getAttribute("src"))})),y.select("#headerTitle","html",$.preview),y.select("#answerCheck","css",{visibility:"visible",display:"inline-block"}),y.select("#authoringFrame","attr",{"data-authoring":"0"});var t=function(e,t,a){switch(a){case"17":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/labsimulation/?in_editor=1"><textarea class="h" name="qxml" id="qxml">'+W(e)+'</textarea><textarea class="h" name="uxml" id="uxml">'+W(t)+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"18":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/relationship/?in_editor=1"><textarea class="h" name="qxml">'+W(e)+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"22":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/web/?in_editor=1"><textarea class="h" name="qxml">'+e+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>'}}(o,"<smans></smans>",c.module);y.insert("#authoringArea",t,"beforeend"),y.selectAll("#tilteShow, #stemShow, #remediationShow","remove");let n=y.select("#title").innerHTML,r=y.select("#stem").innerHTML,s=y.select("#remediation").innerHTML;y.insert(y.select(y.empty("#title"),"hide"),'<div id="tilteShow">'+n+"</div>","afterend"),y.insert(y.select(y.empty("#stem"),"hide"),'<div id="stemShow">'+r+"</div>","afterend"),y.insert(y.select(y.empty("#remediation"),"hide"),'<div id="remediationShow">'+s+"</div>","afterend"),y.select("#externalInputs","hide"),a(1,c.qxml=o,c),a(1,c.titleData=n,c),a(1,c.stemData=r,c),a(1,c.remediationData=s,c),setTimeout((function(){y.selectAll("#stemShow .ebook_item_text, #remediationShow .ebook_item_text","attr",{contenteditable:!1}),y.select('form[target="authoringFrame"]').submit()}),200)}function u(e,t){switch(t){case"17":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/labsimulation/?in_editor=1"><input type="hidden" name="authoringmode" value="1"/><textarea class="h" name="qxml">'+W(e)+'</textarea><textarea class="h" name="uxml">'+s+"</textarea></form>";case"18":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/relationship/?in_editor=1"><input type="hidden" name="authoringmode" value="1"/><textarea class="h" name="qxml">'+W(e)+'</textarea><textarea class="h" name="uxml">'+s+"</textarea></form>";case"22":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/web/?in_editor=1"><input type="hidden" name="authoringmode" value="1"/><textarea class="h" name="qxml">'+e+'</textarea><textarea class="h" name="uxml">'+s+"</textarea></form>"}}w((async()=>{a(1,c.xml=i.xml,c);let e=i.xml.match(/<smxml(.*?)>/gim).toString().match(/type="(.*?)"|type='(.*?)'/gim);e=e.toString().replace(/type=|"/gim,""),a(1,c.module=e,c),a(2,i.activator=!0,i),await b(),setTimeout((function(){l=u(i.xml,c.module.toString()),/Edge/i.test(navigator.userAgent)?y.select("#authoringFrame","attr",{height:window.innerHeight-31}):/Mac/i.test(navigator.userAgent)?y.select("#authoringFrame","attr",{height:window.innerHeight-60}):y.select("#authoringFrame","attr",{height:window.innerHeight+12}),y.select("#preview","hide"),y.find("#authoringArea","form",{action:"remove"}),y.insert("#authoringArea",l,"beforeend"),setTimeout((function(){y.find(document,'form[target="authoringFrame"]').submit(),a(2,i.activator=!0,i)}),100)}),200),y.listen(document,"click","#answerCheck",(()=>{!function(){y.select("#authoringFrame","attr",{"data-authoring":"0"});try{if("17"==c.module)s=y.select("#authoringFrame").contentWindow.getAnswerXMLLabsim(),s=s.uxml;else if("18"==c.module)s=y.select("#authoringFrame").contentWindow.generateXML(),s=JSON.stringify(s.xml);else if("22"==c.module){let e=y.select("#authoringFrame").contentWindow.webAutoEvaluate();if(e){a(1,c.remediationToggle=!0,c),a(1,c.webAutogradeNotCalled=!1,c),y.select("#remediationModel","html",e);let t=e.replace(/\s=\s/gim,"=").match(/ans="(.*?)"/gim);t=t?t.toString().replace(/ans=|"/gim,""):"",r(L.ucfirst(t))}}else s=y.select("#authoringFrame").contentWindow.save_data()}catch(e){console.log(e)}c.webAutogradeNotCalled&&(y.find("#authoringArea","form"),l=function(e,t,a){switch(a){case"17":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/labsimulation/?in_editor=1"><input type="hidden" name="isReview" value="1"/><textarea class="h" name="qxml">'+W(e)+'</textarea><textarea class="h" name="uxml">'+W(t)+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"18":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/relationship/?in_editor=1"><input type="hidden" name="isReview" value="1"/><textarea class="h" name="qxml">'+W(e)+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"22":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/web/?in_editor=1"><input type="hidden" name="isReview" value="1"/><textarea class="h" name="qxml">'+e+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>'}}(c.qxml,s,c.module),y.insert("#authoringArea",l,"beforeend"),setTimeout((function(){y.select('form[target="authoringFrame"]').submit(),a(2,i.activator=!0,i)}),100))}()})),y.listen(document,"click","#testMode",(function(){d(1),y.select("#testMode","attr",{id:"answerCheck"}).innerHTML=$.remediation})),setTimeout((function(){"17"==c.module&&y.bind("#authoringFrame","load",(()=>{let e=y.select("#authoringFrame").contentDocument;y.listen(e,"click","body",(function(e){"1"==c.testMode&&(a(0,m="1"==y.select("#labAnswer").value?"Correct":"Incorrect"),a(1,c.snackback=!0,c))})),a(2,i.activator=!1,i)}))}),200),y.listen("#clickRun","click",(()=>{r(y.select("#checkAnsStr").value)}))})),v((()=>{y.select("#testMode","attr",{id:"answerCheck"}).innerHTML=$.remediation})),A((async()=>{i.toggleMode!=c.toggleMode&&(1==i.toggleMode?(a(1,c.testMode=1,c),d(0)):(a(2,i.activator=!0,i),a(1,c.testMode=0,c),y.select("#headerTitle","html",$.authoring),y.select("#answerCheck","css",{visibility:"hidden",display:"none"}),y.select("#authoringFrame","attr",{"data-authoring":"1"}),y.find("#authoringArea","form",{action:"remove"}),l=u(c.qxml,c.module),y.insert("#authoringArea",l,"beforeend"),y.selectAll("#tilteShow,#stemShow,#remediationShow","remove"),y.select("#title","html",c.titleData),y.select("#stem","html",c.stemData),y.select("#remediation","html",c.remediationData),y.selectAll("#title,#stem,#remediation,#externalInputs","show"),y.empty("#authoringDiv player"),y.find("#authoringDiv","player",{action:"removeClass",actionData:"hidecontent"}),y.selectAll("#editor img").forEach((e=>{e.getAttribute("src").match(/\/\/s3.amazonaws.com\/jigyaasa_content_static/gm)||"editor-header-img"==e.getAttribute("id")||e.getAttribute("src",e.getAttribute("src"))})),setTimeout((function(){y.select('form[target="authoringFrame"]').submit(),n.initEditor(!1,"#authoringSection .ebook_item_text")}),100)),a(1,c.toggleMode=i.toggleMode,c))}));return e.$$set=e=>{"editorState"in e&&a(2,i=e.editorState),"ucEditor"in e&&a(3,n=e.ucEditor),"showAns"in e&&a(4,r=e.showAns)},[m,c,i,n,r,function(e){c.snackback=e,a(1,c)},()=>{a(1,c.remediationToggle=!1,c)},function(e){c.remediationToggle=e,a(1,c)}]}export default class extends e{constructor(e){super(),t(this,e,z,I,a,{editorState:2,ucEditor:3,showAns:4})}}
//# sourceMappingURL=Labsimulation-4a71a79b.js.map
