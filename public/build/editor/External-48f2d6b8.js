import{S as e,i as t,s as i,a9 as a,C as n,Z as l,H as r,I as o,K as s,L as c,e as m,c as u,b as d,f as g,g as f,h,j as p,m as v,P as $,l as x,M as w,t as b,a as y,o as _,d as A,p as T,E as k,A as S,Y as D,aa as C,u as M,r as q,w as F,O as H,a2 as E,x as L}from"./main-ac89e9fe.js";import{U as I}from"./UCLIB-c1fa4f77.js";function j(e){let t,i,a=n.multi_check+"";return{c(){t=M(a),i=M(" :")},m(e,a){h(e,t,a),h(e,i,a)},p:q,d(e){e&&_(t),e&&_(i)}}}function W(e){let t;return{c(){t=m("div"),t.innerHTML='<div style="">Review</div>',g(t,"slot","title"),f(t,"text-align","left")},m(e,i){h(e,t,i)},d(e){e&&_(t)}}}function z(e){let t,i=n.done+"";return{c(){t=M(i)},m(e,i){h(e,t,i)},p:q,d(e){e&&_(t)}}}function U(e){let t,i,a;return i=new H({props:{$$slots:{default:[z]},$$scope:{ctx:e}}}),i.$on("click",e[9]),{c(){t=m("div"),u(i.$$.fragment),g(t,"slot","footer"),g(t,"class","footer"),f(t,"border-top","1px solid var(--divider, rgba(0, 0, 0, 0.1))")},m(e,n){h(e,t,n),v(i,t,null),a=!0},p(e,t){const a={};134217728&t&&(a.$$scope={dirty:t,ctx:e}),i.$set(a)},i(e){a||(b(i.$$.fragment,e),a=!0)},o(e){y(i.$$.fragment,e),a=!1},d(e){e&&_(t),A(i)}}}function V(e){let t,i,a,l,r,o,s,c,f,$,x,w,T,k=n.calculate_answer+"",S=n.please_wait+"";return r=new E({props:{size:70}}),{c(){t=d(),i=m("div"),a=m("div"),l=m("center"),u(r.$$.fragment),o=d(),s=m("h4"),c=M(k),f=m("br"),$=d(),x=M(S),w=d(),g(a,"id","remediationModel")},m(e,n){h(e,t,n),h(e,i,n),p(i,a),p(a,l),v(r,l,null),p(l,o),p(l,s),p(s,c),p(s,f),p(s,$),p(s,x),h(e,w,n),T=!0},p:q,i(e){T||(b(r.$$.fragment,e),T=!0)},o(e){y(r.$$.fragment,e),T=!1},d(e){e&&_(t),e&&_(i),A(r),e&&_(w)}}}function Z(e){let t;return{c(){t=M(e[0])},m(e,i){h(e,t,i)},p(e,i){1&i&&L(t,e[0])},d(e){e&&_(t)}}}function B(e){let t,i,T,k,S,D,C,M,q,F,H,E,L,I,z,B,O,X,N,R,K,P,Y,G,J,Q,ee,te,ie,ae,ne,le,re,oe;function se(t){e[10].call(null,t)}D=new a({props:{id:"externalTitle",label:n.title,style:"padding-top:0;"}}),D.$on("change",e[3]),q=new a({props:{id:"defaultValues",label:n.default,multiline:!0,fullWidth:!0}}),q.$on("change",e[5]),L=new l({props:{$$slots:{default:[j]},$$scope:{ctx:e}}}),L.$on("click",e[4]);let ce={width:450,$$slots:{default:[V],footer:[U],title:[W]},$$scope:{ctx:e}};function me(t){e[11].call(null,t)}void 0!==e[1].remediationToggle&&(ce.visible=e[1].remediationToggle),ee=new r({props:ce}),o.push((()=>s(ee,"visible",se)));let ue={bg:"#f44336",bottom:!0,timeout:10,style:"position: absolute;z-index:9999",$$slots:{default:[Z]},$$scope:{ctx:e}};return void 0!==e[1].snackback&&(ue.visible=e[1].snackback),ae=new c({props:ue}),o.push((()=>s(ae,"visible",me))),{c(){t=m("div"),i=m("div"),T=m("div"),k=m("div"),S=m("div"),u(D.$$.fragment),C=d(),M=m("div"),u(q.$$.fragment),F=d(),H=m("div"),E=m("div"),u(L.$$.fragment),I=d(),z=m("div"),B=m("div"),B.textContent=n.sequence+" :",O=d(),X=m("div"),N=m("select"),R=m("option"),R.textContent="No match",K=m("option"),K.textContent="Loose match",P=m("option"),P.textContent="Exact match",G=d(),J=m("center"),J.innerHTML='<div id="frame"><iframe id="authoringFrame" title="External Module" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="550" width="94%" name="authoringFrame" data-authoring="1"></iframe></div>',Q=d(),u(ee.$$.fragment),ie=d(),u(ae.$$.fragment),g(S,"class","col-md-6"),g(M,"class","col-md-6"),g(k,"class","row mx-0"),g(E,"class","col-md-6 float-left"),g(B,"class","float-left"),f(B,"line-height","27px"),f(B,"font-family","'Roboto, sans-serif'"),R.__value="0",R.value=R.__value,K.__value="1",K.value=K.__value,P.__value="2",P.value=P.__value,f(N,"margin-left","10px"),g(z,"class","col-md-6"),g(H,"class","row mt-3 mx-0"),g(T,"class","col-md-12 float-left"),g(i,"id","externalInputs"),g(i,"class","mt-md"),g(t,"id","authoringArea")},m(a,n){h(a,t,n),p(t,i),p(i,T),p(T,k),p(k,S),v(D,S,null),p(k,C),p(k,M),v(q,M,null),p(T,F),p(T,H),p(H,E),v(L,E,null),p(H,I),p(H,z),p(z,B),p(z,O),p(z,X),p(X,N),p(N,R),p(N,K),p(N,P),$(N,e[1].sequence),p(t,G),p(t,J),h(a,Q,n),v(ee,a,n),h(a,ie,n),v(ae,a,n),le=!0,re||(oe=x(N,"blur",e[2]),re=!0)},p(e,[t]){const i={};134217728&t&&(i.$$scope={dirty:t,ctx:e}),L.$set(i),(!le||2&t&&Y!==(Y=e[1].sequence))&&$(N,e[1].sequence);const a={};134217730&t&&(a.$$scope={dirty:t,ctx:e}),!te&&2&t&&(te=!0,a.visible=e[1].remediationToggle,w((()=>te=!1))),ee.$set(a);const n={};134217729&t&&(n.$$scope={dirty:t,ctx:e}),!ne&&2&t&&(ne=!0,n.visible=e[1].snackback,w((()=>ne=!1))),ae.$set(n)},i(e){le||(b(D.$$.fragment,e),b(q.$$.fragment,e),b(L.$$.fragment,e),b(ee.$$.fragment,e),b(ae.$$.fragment,e),le=!0)},o(e){y(D.$$.fragment,e),y(q.$$.fragment,e),y(L.$$.fragment,e),y(ee.$$.fragment,e),y(ae.$$.fragment,e),le=!1},d(e){e&&_(t),A(D),A(q),A(L),e&&_(Q),A(ee,e),e&&_(ie),A(ae,e),re=!1,oe()}}}function O(e,t,i){let{setInlineEditor:a=(()=>{})}=t,{editorState:l}=t,{getChildXml:r=(()=>{})}=t,o="",s="",c="",m="",u="",d="",g={};F({xml:"",uxml:"",title:"",defaultValue:"",toggle:!1,snackback:!1,sequence:"0",multicheck:!1,remediationToggle:!1,titleData:"",stemData:"",remediationData:"",toggleMode:""}).subscribe((e=>{i(1,g=e)}));function f(e){try{let t=`<textarea class="h hidden" name="qxml" id="qxml">${e}</textarea>`,a=t.match(/<default>[\s\S]*?<\/default>/gim);a=a.toString()?a.toString().replace(/<!\[CDATA\[|\]\]>|<default>|<\/default>/gim,"").trim():"",S.select("#defaultValues").value=a,e=(e=e.match(/<smxml([\s\S]*?)<(.*?)>/gim)).toString().replace(/<smxml(.*?)>/gim,""),o=e.match(/<\w+/gim),o=o.toString().replace(/</gim,"");let n=S.parseHtml(e);S.select("#externalTitle").value=n.getAttribute("title");let l="true"==n.getAttribute("multicheck");return i(1,g.multicheck=l,g),i(1,g.sequence=n.getAttribute("sequence"),g),s=`<input type="hidden" name="type" value="${n.getAttribute("type")}">`,c=`<input type="hidden" name="version" value="${n.getAttribute("version")}">`,l=`<input type="hidden" name="multicheck" value="${g.multicheck}">`,`<form method="post" target="authoringFrame" action="${baseUrl}sim/?in_editor=1"><input type="hidden" name="module" value="${o}"><input type="hidden" name="title" value=""><input type="hidden" name="sequence" value="${g.sequence}">${s+c+l+t}<input type="hidden" name="autheringmode" value="1"></form>`}catch(e){console.log(e)}}function h(){S.empty("#authoringDiv player"),C(S.select("#authoringDiv")),S.find("#authoringDiv","player","addClass","hidecontent"),S.selectAll("#editor img").forEach((function(e){let t=e.getAttribute("src");e.getAttribute("header-logo")||-1!=t.indexOf("vimeocdn")||t.match(/\/\/s3.amazonaws.com\/jigyaasa_content_static/gm)||e.setAttribute("src","//s3.amazonaws.com/jigyaasa_content_static/"+t)}))}function p(){if(g.xml){let e=document.getElementById("authoringFrame").contentWindow.save_data(0,0,!0);e.match(/<!\[CDATA\[\s*html=dW5kZWZpbmVk\s*\]\]>/gim)&&""!=g.uxml?e=g.uxml:i(1,g.uxml=e,g),i(1,g.remediationToggle=!0,g),S.ajax({url:baseUrl+"editor/index.php",data:{ajax:"1",action:"external_reviewmode",get_message:g.xml,uxml:e,content_subtype:16},type:"post"}).then((e=>{let t=(e=e.replace(/\n/gim,"<br/>")).replace(/\s=\s/gim,"=").match(/ans="(.*?)"/gim);t=t?t.toString().replace(/ans=|"/gim,""):"",i(0,d=I.ucfirst(t)),i(1,g.snackback=!0,g),S.find(document,"#remediationModel").innerHTML=e}))}else window.is_review=1,h()}T((async()=>{!function(){window.inNative&&window.getHeight&&window.getHeight();setTimeout((function(){if(S.select("#preview","hide"),i(1,g.xml=l.xml,g),l.xml){var e=f(l.xml);S.insert("#authoringArea",e,"beforeend"),setTimeout((function(){S.find(document,'form[target="authoringFrame"]').submit(),i(6,l.activator=!0,l)}),200)}else S.select("#authoringArea","hide"),i(6,l.activator=!1,l)}),100),S.listen(document,"click","#your_ans_filter li",(function(e){""==m&&(m=S.select("#user_answer").innerHTML),function(e){let t=m.split("<br>"),i=S.select("#correct_answer").innerHTML;if("only_unique"==e){let e=[];t.forEach(((t,i)=>{-1===S.inArray(t,e)&&e.push(t)})),setTimeout((function(){S.select("#user_answer","html",e.join("<br>"))}),1e3)}else if("only_relevant"==e){let e=[];t.forEach((function(t,a){-1!=i.indexOf(t)&&-1===S.inArray(t,e)&&e.push(t)})),setTimeout((function(){S.select("#user_answer","html",e.join("<br>"))}),1e3)}else setTimeout((function(){S.select("#user_answer","html",m)}),1e3)}(e.textContent.trim().toLowerCase().replace(" ","_"))})),S.listen(document,"click","#answerCheck",p),setTimeout((function(){S.bind("#authoringFrame","load",(function(){i(6,l.activator=!1,l)}))}),200),setTimeout((function(){let e=window.innerHeight-60;1==in_frame&&(e=window.innerHeight),S.select("#authoringFrame","attr",{height:e})}),500)}()})),k((async()=>{if(g.toggleMode!=l.toggleMode)if(i(1,g.toggleMode=l.toggleMode,g),u=g.xml?document.getElementById("authoringFrame").contentWindow.save_data(1,0,!0):"",1==l.toggleMode){g.xml?(u=u.toString().replace(/'/gm,"\\x27"),u=u.toString().match(/<correct>[\s\S]*?<\/correct>/gim),u=u.toString().replace(/\$/g,"#dollar"),u=g.xml.toString().replace(/<correct>[\s\S]*?<\/correct>/gim,u.toString()),u=u.toString().replace(/#dollar/g,"$"),u.match(/<correct>\s*<!\[CDATA\[\s*\]\]>\s*<\/correct>/gim)&&!g.xml.match(/<correct>\s*<!\[CDATA\[\s*\]\]>\s*<\/correct>/gim)?u=g.xml:(i(1,g.xml=u,g),r(u))):window.is_review=0,S.select("#authoringFrame","attr",{"data-authoring":"0"}),S.select("#headerTitle").innerHTML=n.preview,S.find("#authoringArea","form",{action:"remove"}),h(),S.empty("#authoringFrame");let e='<form method="post" target="authoringFrame" action="'+baseUrl+'sim/?in_editor=1"><input type="hidden" name="first_time" value="1"/><input type="hidden" name="testmode" value="1"/><input type="hidden" name="qxml" value=\''+u+'\'/><input type="hidden" name="content_guid" value="0" /></form>';S.insert("#authoringArea",e,"beforeend"),i(1,g.titleData=S.select("#title").innerHTML,g),i(1,g.stemData=S.select("#stem").innerHTML,g),i(1,g.remediationData=S.select("#remediation").innerHTML,g),S.insert(S.select(S.empty("#title"),"hide"),`<div id="tilteShow">${g.titleData}</div>`,"afterend"),S.insert(S.select(S.empty("#stem"),"hide"),`<div id="stemShow">${g.stemData}</div>`,"afterend"),S.insert(S.select(S.empty("#remediation"),"hide"),`<div id="remediationShow">${g.remediationData}</div>`,"afterend"),S.select("#externalInputs","hide"),setTimeout((function(){S.find(document,'form[target="authoringFrame"]').submit(),i(6,l.activator=!0,l)}),200)}else{if(g.xml){let t=document.getElementById("authoringFrame").contentWindow.save_data(0,0,!0);t.match(/<!\[CDATA\[\s*html=dW5kZWZpbmVk\s*\]\]>/gim)||i(1,g.uxml=t,g),r(g.xml);var e=f(g.xml);S.empty("#authoringFrame"),S.find("#authoringArea","form",{action:"remove"}),S.insert("#authoringArea",e,"beforeend"),setTimeout((function(){S.find(document,'form[target="authoringFrame"]').submit(),i(6,l.activator=!0,l)}),200)}S.select("#headerTitle","html",n.authoring),S.select("#authoringFrame","attr",{"data-authoring":"1"}),S.find(document,"#tilteShow,#stemShow,#remediationShow",{action:"remove"}),S.select("#title","html",g.titleData),S.select("#stem","html",g.stemData),S.select("#remediation","html",g.remediationData),S.selectAll("#title,#stem,#remediation,#externalInputs","show"),S.empty("#authoringDiv player"),S.find("#authoringDiv","player",{action:"removeClass",actionData:"hidecontent"}),S.selectAll("#editor img").forEach((function(e){let t=e.getAttribute("src");-1!=t.indexOf("vimeocdn")||t.match(/\/\/s3.amazonaws.com\/jigyaasa_content_static/gm)||e.setAttribute("src",t)})),a("#stem"),a("#remediation")}})),D((()=>{S.select("#preview","show"),i(6,l.activator=!1,l)}));return e.$$set=e=>{"setInlineEditor"in e&&i(7,a=e.setInlineEditor),"editorState"in e&&i(6,l=e.editorState),"getChildXml"in e&&i(8,r=e.getChildXml)},[d,g,function(e){let t=e.target.value;i(1,g.sequence=t,g),i(1,g.xml=g.xml.toString().replace(/sequence="(.*?)"/,'sequence="'+t+'"'),g),r(g.xml)},function(e){i(1,g.xml=g.xml.toString().replace(/title="(.*?)"/gim,'title="'+e.target.value+'"'),g),r(g.xml)},function(e){i(1,g.multicheck=e.target.checked,g),i(1,g.xml=g.xml.toString().replace(/multicheck="(.*?)"/gim,'multicheck="'+e.target.checked+'"'),g),r(g.xml)},function(e){i(1,g.xml=g.xml.toString().replace(/<default>\s*<\!\[CDATA\[([\s\S]*?)\]\]>\s*<\/default>/gim,"<default><![CDATA["+e.target.value+"]]></default>"),g),r(g.xml)},l,a,r,()=>i(1,g.remediationToggle=!1,g),function(e){g.remediationToggle=e,i(1,g)},function(e){g.snackback=e,i(1,g)}]}export default class extends e{constructor(e){super(),t(this,e,O,B,i,{setInlineEditor:7,editorState:6,getChildXml:8})}}
//# sourceMappingURL=External-48f2d6b8.js.map