import{S as e,i as t,s as n,F as l,e as o,j as s,Z as c,u as a,b as r,C as d,f as p,h as m,l as u,k as f,a as x,n as g,t as h,o as b,y as $,O as v,H as _,I as k,K as y,c as w,m as C,M as z,d as A,D as S,p as T,X as q,A as I,E,r as M,w as B,T as U}from"./main-7eab066b.js";const{document:X}=l;function D(e,t,n){const l=e.slice();return l[38]=t[n],l[40]=n,l}function F(e){let t;return{c(){t=a("Go Next")},m(e,n){m(e,t,n)},p:M,d(e){e&&b(t)}}}function H(e){let t;return{c(){t=a("Fix Answer")},m(e,n){m(e,t,n)},p:M,d(e){e&&b(t)}}}function K(e){let t,n;return t=new c({props:{"data-seq":e[40],class:"inner_inputs option_checkbox",type:"checkbox",value:"mode",name:"mode_checkbox_",id:"mode_checkbox_"+e[40],checked:!1}}),t.$on("click",(function(...t){return e[23](e[40],...t)})),{c(){w(t.$$.fragment)},m(e,l){C(t,e,l),n=!0},p(t,n){e=t},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function N(e){let t,n;return t=new c({props:{"data-seq":e[40],class:"inner_inputs option_checkbox",type:"checkbox",value:"mode",name:"mode_checkbox_",id:"mode_checkbox_"+e[40],checked:!0}}),t.$on("click",(function(...t){return e[22](e[40],...t)})),{c(){w(t.$$.fragment)},m(e,l){C(t,e,l),n=!0},p(t,n){e=t},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function L(e){let t,n;return t=new c({props:{"data-seq":e[40],checked:!1,class:"inner_inputs option_checkbox",type:"checkbox",value:"sticky",name:"sticky_checkbox_",id:"sticky_checkbox_"+e[40]}}),t.$on("click",e[4].bind(this,e[40],"fillAuthor_"+e[40])),{c(){w(t.$$.fragment)},m(e,l){C(t,e,l),n=!0},p:M,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function O(e){let t,n;return t=new c({props:{"data-seq":e[40],checked:!0,class:"inner_inputs option_checkbox",type:"checkbox",value:"sticky",name:"sticky_checkbox_",id:"sticky_checkbox_"+e[40]}}),t.$on("click",e[4].bind(this,e[40],"fillAuthor_"+e[40])),{c(){w(t.$$.fragment)},m(e,l){C(t,e,l),n=!0},p:M,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function j(e){let t,n,l,i,c,v,_,k,y,w,C,z,A,S,T,q,I,E,M,B,U,X,D,F,H,j,R,P,G,J,Y,Z,Q,V,W,ee,te,ne,le,ie,oe,se,ce,ae,re,de,pe,me,ue,fe,xe,ge,he,be,$e=e[40]+1+"",ve=e[38].__cdata+"";function _e(...t){return e[20](e[40],...t)}function ke(...t){return e[21](e[40],...t)}const ye=[N,K],we=[];function Ce(e,t){return"1"==e[38]._mode?0:1}Z=Ce(e),Q=we[Z]=ye[Z](e);let ze=0==e[40]&&function(e){let t,n,l,i,c,a,u,$;const v=[O,L],_=[];function k(e,t){return"1"==e[38]._sticky?0:1}return l=k(e),i=_[l]=v[l](e),{c(){t=o("div"),n=o("span"),i.c(),c=r(),a=o("label"),a.textContent=""+d.sticky,p(n,"class","check_box d-inline-block svelte-smsdwz"),p(a,"class","font-weight-normal me-1 position-relative top2 right35 svelte-smsdwz"),p(a,"for",u="sticky_checkbox_"+e[40]),p(t,"class","stick_checkbox d-inline-block")},m(e,i){m(e,t,i),s(t,n),_[l].m(n,null),s(t,c),s(t,a),$=!0},p(e,t){let o=l;l=k(e),l===o?_[l].p(e,t):(f(),x(_[o],1,1,(()=>{_[o]=null})),g(),i=_[l],i||(i=_[l]=v[l](e),i.c()),h(i,1),i.m(n,null))},i(e){$||(h(i),$=!0)},o(e){x(i),$=!1},d(e){e&&b(t),_[l].d()}}}(e);function Ae(...t){return e[24](e[40],...t)}function Se(...t){return e[25](e[40],...t)}return{c(){t=o("fieldset"),n=o("legend"),l=a($e),c=r(),v=o("div"),_=o("div"),A=r(),S=o("div"),T=o("div"),q=o("span"),q.textContent=""+d.plain_text,E=r(),M=o("span"),B=o("span"),U=o("input"),F=r(),H=o("label"),H.textContent=""+d.interactive,P=r(),G=o("div"),J=o("div"),Y=o("span"),Q.c(),V=r(),W=o("label"),W.textContent=""+d.no_validation,te=r(),ze&&ze.c(),ne=r(),le=o("div"),ie=o("div"),oe=o("button"),oe.textContent=""+d.delete,ce=r(),ae=o("div"),re=o("button"),re.textContent=""+d.save,xe=r(),p(n,"class","font18 mb ms-2 pl-1 svelte-smsdwz"),p(n,"style",i="width:1em;float:none;"),p(_,"data-seq",k=e[40]),p(_,"class","tinymce-editor-res steps_edit p-1 border fillAuthor"),p(_,"id",y="fillAuthor_"+e[40]),p(_,"style",w="padding:0 8px;overflow:auto;outline:none"),p(_,"contenteditable",C=!0),p(_,"data-text","Enter text here"),p(v,"class","d-inline-block table_width ms-2 pl-1 pb-2 mb-1"),p(v,"style",z="width:97%;"),p(q,"class","pointer d-inline-block plain_text svelte-smsdwz"),p(q,"data-toggle","tooltip"),p(q,"title","Don't use any interactive item!"),p(q,"for",I="viewonly_radio_"+e[40]),p(U,"type","checkbox"),p(U,"class","form-check-input"),p(U,"id",X="switchElement"+e[40]),U.checked=D="1"!=e[38].toggle,p(U,"color","primary"),p(H,"for",j="switchElement"+e[40]),p(B,"class","form-check form-switch"),p(M,"class","stat-percent ms-4"),p(M,"style",R="display:inline-block;position:relative;"),p(T,"class","test d-inline-block"),p(Y,"class","check_box d-inline-block svelte-smsdwz"),p(W,"class","font-weight-normal me-1 position-relative top2 right35 svelte-smsdwz"),p(W,"for",ee="mode_checkbox_"+e[40]),p(J,"class","modes_checkbox d-inline-block ms-2"),p(G,"class","d-inline-block plain_text ms-3"),p(oe,"type","button"),p(oe,"class","btn btn-light font12"),p(ie,"class","d-inline-block mr"),p(ie,"style",se="display:inline-block;"),p(re,"id",de="save_step_"+e[40]),p(re,"type","button"),p(re,"class","btn btn-primary font12 save_button_steps"),p(ae,"class","d-inline-block"),p(ae,"style",pe="text-align:right;margin-top:6px;"),p(le,"style",me="display:inline-block;float:right;"),p(le,"class","buttons edit_steps"),p(S,"class","view_checkbox d-inline-block light-cyan-bg px-2 p-1 full-width fwidth svelte-smsdwz"),p(t,"key",ue=e[40]),p(t,"style",fe="border:1px solid grey"),p(t,"class","new_steps seq_inbox fw shadow-sm mb-2")},m(e,i){m(e,t,i),s(t,n),s(n,l),s(t,c),s(t,v),s(v,_),_.innerHTML=ve,s(t,A),s(t,S),s(S,T),s(T,q),s(T,E),s(T,M),s(M,B),s(B,U),s(B,F),s(B,H),s(S,P),s(S,G),s(G,J),s(J,Y),we[Z].m(Y,null),s(J,V),s(J,W),s(G,te),ze&&ze.m(G,null),s(S,ne),s(S,le),s(le,ie),s(ie,oe),s(le,ce),s(le,ae),s(ae,re),m(e,xe,i),ge=!0,he||(be=[u(_,"keyup",_e),u(U,"change",ke),u(ie,"click",Ae),u(re,"click",Se)],he=!0)},p(t,n){e=t,(!ge||2&n[0])&&ve!==(ve=e[38].__cdata+"")&&(_.innerHTML=ve),(!ge||2&n[0]&&D!==(D="1"!=e[38].toggle))&&(U.checked=D);let l=Z;Z=Ce(e),Z===l?we[Z].p(e,n):(f(),x(we[l],1,1,(()=>{we[l]=null})),g(),Q=we[Z],Q||(Q=we[Z]=ye[Z](e),Q.c()),h(Q,1),Q.m(Y,null)),0==e[40]&&ze.p(e,n)},i(e){ge||(h(Q),h(ze),ge=!0)},o(e){x(Q),x(ze),ge=!1},d(e){e&&b(t),we[Z].d(),ze&&ze.d(),e&&b(xe),he=!1,$(be)}}}function R(e){let t,n;return{c(){t=o("span"),t.textContent="+  ",n=a(" Add Step"),p(t,"class","font18 svelte-smsdwz")},m(e,l){m(e,t,l),m(e,n,l)},d(e){e&&b(t),e&&b(n)}}}function P(e){let t,n,l,i,c,f,x,g,h,v,_,k,y,w,C,z,A;return{c(){t=o("div"),n=o("div"),n.textContent=""+d.fill_header,i=r(),c=o("div"),f=o("div"),x=o("button"),g=a("Text"),_=r(),k=o("button"),y=a("Mathematical Equation"),p(n,"class","mr-lg float-left"),p(n,"style",l="padding-top:10px;padding-left:13px;font-size:18px;"),p(x,"type","button"),p(x,"class",h=U("btn btn-light col-3"+(1==e[0].fillInTheBlanksChoice?" active":""))+" svelte-smsdwz"),x.value=v=1,p(k,"type","button"),p(k,"class",w=U("btn btn-light col-9"+(2==e[0].fillInTheBlanksChoice?" active":""))+" svelte-smsdwz"),k.value=C=2,p(f,"class","btn-group mt-1 row ml-0"),p(c,"class","float-right mr-4"),p(t,"slot","title")},m(l,o){m(l,t,o),s(t,n),s(t,i),s(t,c),s(c,f),s(f,x),s(x,g),s(f,_),s(f,k),s(k,y),z||(A=[u(x,"click",e[11].bind(this,1)),u(k,"click",e[11].bind(this,2))],z=!0)},p(e,t){1&t[0]&&h!==(h=U("btn btn-light col-3"+(1==e[0].fillInTheBlanksChoice?" active":""))+" svelte-smsdwz")&&p(x,"class",h),1&t[0]&&w!==(w=U("btn btn-light col-9"+(2==e[0].fillInTheBlanksChoice?" active":""))+" svelte-smsdwz")&&p(k,"class",w)},d(e){e&&b(t),z=!1,$(A)}}}function G(e){let t,n,l,i,c,a,u,f,g,$,_,k,y,z,S,T,q,I,E,M;return f=new v({props:{variant:"contained",color:"primary",style:"border:1px solid #4285f4;color:#4285f4;text-transform:none;",class:"btn btn-outline-primary height30 bg-white shadow-sm mt-1 top1 ml-1",$$slots:{default:[Y]},$$scope:{ctx:e}}}),f.$on("click",ne),_=new v({props:{id:"latexEdit",variant:"contained",color:"primary",style:"margin:5px;display:none;",$$slots:{default:[Z]},$$scope:{ctx:e}}}),_.$on("click",e[12]),{c(){t=o("div"),n=o("div"),l=o("input"),u=r(),w(f.$$.fragment),g=r(),$=o("div"),w(_.$$.fragment),k=r(),y=o("div"),y.textContent="* Note:",z=r(),S=o("div"),S.textContent=""+d.fill_math_help1,q=r(),I=o("div"),I.textContent=""+d.fill_math_help2,p(l,"type","text"),p(l,"id",i="input"),p(l,"class","latexInp form-control"),p(l,"style",c="margin:5px;width:71%;"),p(l,"auto:focus",a=!0),p($,"class","latexEditButton d-inline-block"),p(n,"class","d-flex"),p(y,"class","text-danger font-weight-bold ml-1"),p(S,"class","text-danger ml-1"),p(S,"style",T="text-indent: 15px;"),p(I,"class","text-danger ml-1"),p(I,"style",E="text-indent: 15px;")},m(e,i){m(e,t,i),s(t,n),s(n,l),s(n,u),C(f,n,null),s(n,g),s(n,$),C(_,$,null),s(t,k),s(t,y),s(t,z),s(t,S),s(t,q),s(t,I),M=!0},p(e,t){const n={};1024&t[1]&&(n.$$scope={dirty:t,ctx:e}),f.$set(n);const l={};1024&t[1]&&(l.$$scope={dirty:t,ctx:e}),_.$set(l)},i(e){M||(h(f.$$.fragment,e),h(_.$$.fragment,e),M=!0)},o(e){x(f.$$.fragment,e),x(_.$$.fragment,e),M=!1},d(e){e&&b(t),A(f),A(_)}}}function J(e){let t,n,l,i,a,u,f,g,$,v,_,k,y,z,S,T,q,E,M;return i=new c({props:{id:"numeric",checked:e[0].numeric,$$slots:{default:[Q]},$$scope:{ctx:e}}}),{c(){t=o("div"),n=o("div"),l=o("div"),w(i.$$.fragment),a=r(),u=o("input"),_=r(),k=o("div"),k.textContent="* Note:",y=r(),z=o("div"),z.textContent=""+d.fill_text_help1,T=r(),q=o("div"),q.textContent="2. Please do not include space.",p(l,"class","width100 svelte-smsdwz"),p(u,"type","text"),p(u,"id","input1"),u.value=f=e[0].input_ans,p(u,"class","form-control mr-4 ml-3"),p(u,"style",g="margin:5px"),p(u,"auto:focus",$=!0),p(u,"placeholder",v=""!=I.select("#input1").innerHTML?d.fill_text_placeholder:""),p(n,"class","d-flex mr-2"),p(k,"class","text-danger font-weight-bold ml-2 mt-3"),p(z,"class","text-danger ml-2"),p(z,"style",S="text-indent:15px"),p(q,"class","text-danger ml-2"),p(q,"style",E="text-indent:15px")},m(e,o){m(e,t,o),s(t,n),s(n,l),C(i,l,null),s(n,a),s(n,u),s(t,_),s(t,k),s(t,y),s(t,z),s(t,T),s(t,q),M=!0},p(e,t){const n={};1&t[0]&&(n.checked=e[0].numeric),1024&t[1]&&(n.$$scope={dirty:t,ctx:e}),i.$set(n),(!M||1&t[0]&&f!==(f=e[0].input_ans)&&u.value!==f)&&(u.value=f)},i(e){M||(h(i.$$.fragment,e),M=!0)},o(e){x(i.$$.fragment,e),M=!1},d(e){e&&b(t),A(i)}}}function Y(e){let t;return{c(){t=a("Add Response")},m(e,n){m(e,t,n)},d(e){e&&b(t)}}}function Z(e){let t;return{c(){t=a("Edit")},m(e,n){m(e,t,n)},d(e){e&&b(t)}}}function Q(e){let t;return{c(){t=a("Numeric")},m(e,n){m(e,t,n)},p:M,d(e){e&&b(t)}}}function V(e){let t,n,l=d.cancel+"";return{c(){t=a(l),n=r()},m(e,l){m(e,t,l),m(e,n,l)},p:M,d(e){e&&b(t),e&&b(n)}}}function W(e){let t,n=d.done+"";return{c(){t=a(n)},m(e,n){m(e,t,n)},p:M,d(e){e&&b(t)}}}function ee(e){let t,n,l,i,c,d,u,$,_,k,y;const z=[J,G],S=[];function T(e,t){return 1==e[0].fillInTheBlanksChoice?0:1}return i=T(e),c=S[i]=z[i](e),$=new v({props:{variant:"contained",$$slots:{default:[V]},$$scope:{ctx:e}}}),$.$on("click",e[10]),k=new v({props:{variant:"contained",class:"bg-primary text-white",$$slots:{default:[W]},$$scope:{ctx:e}}}),k.$on("click",e[13]),{c(){t=r(),n=o("div"),l=o("div"),c.c(),d=r(),u=o("div"),w($.$$.fragment),_=a(",\r\n                        "),w(k.$$.fragment),p(l,"id","responseDialog"),p(u,"class","svelteFooter")},m(e,o){m(e,t,o),m(e,n,o),s(n,l),S[i].m(l,null),m(e,d,o),m(e,u,o),C($,u,null),s(u,_),C(k,u,null),y=!0},p(e,t){let n=i;i=T(e),i===n?S[i].p(e,t):(f(),x(S[n],1,1,(()=>{S[n]=null})),g(),c=S[i],c||(c=S[i]=z[i](e),c.c()),h(c,1),c.m(l,null));const o={};1024&t[1]&&(o.$$scope={dirty:t,ctx:e}),$.$set(o);const s={};1024&t[1]&&(s.$$scope={dirty:t,ctx:e}),k.$set(s)},i(e){y||(h(c),h($.$$.fragment,e),h(k.$$.fragment,e),y=!0)},o(e){x(c),x($.$$.fragment,e),x(k.$$.fragment,e),y=!1},d(e){e&&b(t),e&&b(n),S[i].d(),e&&b(d),e&&b(u),A($),A(k)}}}function te(e){let t,n,l,i,a,u,$,T,q,I,E,M,B,U,X,K,N,L,O,G,J,Y;q=new c({props:{id:"go_next",defaultChecked:!!e[0].gonext,$$slots:{default:[F]},$$scope:{ctx:e}}}),q.$on("click",e[18]),M=new c({props:{id:"fixedans_checkbox",defaultChecked:!!e[0].variable_button,$$slots:{default:[H]},$$scope:{ctx:e}}}),M.$on("click",e[19]);let Z=e[1],Q=[];for(let t=0;t<Z.length;t+=1)Q[t]=j(D(e,Z,t));const V=e=>x(Q[e],1,1,(()=>{Q[e]=null}));function W(t){e[26].call(null,t)}L=new v({props:{variant:"fab",color:"primary",mini:!0,"aria-label":"Add",class:"btn btn-outline-primary rounded position-relative bottom0 bg-white shadow-sm height30",style:"float:left;width:120px;height:30px;border:1px solid #4285f4;color:#4285f4;text-transform:none;",$$slots:{default:[R]},$$scope:{ctx:e}}}),L.$on("click",e[9].bind(this,"steps"));let te={overlayClass:"materialOverlay",disableEnforceFocus:!0,width:"650",class:"row",style:"background-color: #fff;",$$slots:{default:[ee],title:[P]},$$scope:{ctx:e}};return void 0!==e[0].open&&(te.visible=e[0].open),G=new _({props:te}),k.push((()=>y(G,"visible",W))),G.$on("close",e[10].bind(this)),{c(){t=o("main"),n=o("div"),l=o("div"),i=o("div"),i.textContent=""+d.create_steps,u=r(),$=o("div"),T=o("div"),w(q.$$.fragment),I=r(),E=o("div"),w(M.$$.fragment),U=r(),X=o("div");for(let e=0;e<Q.length;e+=1)Q[e].c();K=r(),N=o("div"),w(L.$$.fragment),O=r(),w(G.$$.fragment),p(i,"class","d-inline-block pt-1 float-start cr_step"),p(i,"style",a="font-size:20px;position:relative;"),p(T,"class","modes_checkbox d-inline-block top-checkbox_gonext position-relative top2 svelte-smsdwz"),p(E,"class","modes_checkbox d-inline-block m-l top-checkbox_fix position-relative top2 svelte-smsdwz"),p($,"style",B={}),p(l,"class","border-bottom d-flex justify-content-between px-2 pt-1"),p(X,"class","outer_steps mt-3 mx-3 clear-both"),p(N,"class","row mx-3 mt-3 pb-3"),p(n,"class","mt-imp border")},m(e,o){m(e,t,o),s(t,n),s(n,l),s(l,i),s(l,u),s(l,$),s($,T),C(q,T,null),s($,I),s($,E),C(M,E,null),s(n,U),s(n,X);for(let e=0;e<Q.length;e+=1)Q[e].m(X,null);s(n,K),s(n,N),C(L,N,null),s(n,O),C(G,n,null),Y=!0},p(e,t){const n={};1&t[0]&&(n.defaultChecked=!!e[0].gonext),1024&t[1]&&(n.$$scope={dirty:t,ctx:e}),q.$set(n);const l={};if(1&t[0]&&(l.defaultChecked=!!e[0].variable_button),1024&t[1]&&(l.$$scope={dirty:t,ctx:e}),M.$set(l),498&t[0]){let n;for(Z=e[1],n=0;n<Z.length;n+=1){const l=D(e,Z,n);Q[n]?(Q[n].p(l,t),h(Q[n],1)):(Q[n]=j(l),Q[n].c(),h(Q[n],1),Q[n].m(X,null))}for(f(),n=Z.length;n<Q.length;n+=1)V(n);g()}const i={};1024&t[1]&&(i.$$scope={dirty:t,ctx:e}),L.$set(i);const o={};1&t[0]|1024&t[1]&&(o.$$scope={dirty:t,ctx:e}),!J&&1&t[0]&&(J=!0,o.visible=e[0].open,z((()=>J=!1))),G.$set(o)},i(e){if(!Y){h(q.$$.fragment,e),h(M.$$.fragment,e);for(let e=0;e<Z.length;e+=1)h(Q[e]);h(L.$$.fragment,e),h(G.$$.fragment,e),Y=!0}},o(e){x(q.$$.fragment,e),x(M.$$.fragment,e),Q=Q.filter(Boolean);for(let e=0;e<Q.length;e+=1)x(Q[e]);x(L.$$.fragment,e),x(G.$$.fragment,e),Y=!1},d(e){e&&b(t),A(q),A(M),S(Q,e),A(L),A(G)}}}function ne(){let e=document.querySelector("#input"),t=e.selectionStart,n=e.value;e.value=n.substring(0,t)+"user Response"+n.substring(t)}function le(e,t,n){window.spanCounter=0;let l={},o={};var s=[];let{stopAuthoringUpdate:c}=t,{xml:a}=t,{editorState:r}=t,{getChildXml:d}=t;B({xml:"",fillInTheBlanksChoice:1,opened:!1,deleteIndex:"",remediationToggle:!1,snackback:!1,input_ans:"",spanCounter:0,currentId:"",currentInp:""}).subscribe((e=>{n(0,l=e)}));function p(e){let t=(e=(e=e.replace(/%{|}%/g,"")).split("|"))[0].trim(),i=e[1]?e[1].trim():"";if(n(0,l.numeric="n"==i,l),n(0,l.fillInTheBlanksChoice=1,l),n(0,l.open=!0,l),-1!=t.indexOf("#style#")){let e=t.split("#style#");I.select("#responseDialog #customStyleText").value=e[1],n(0,l.input_ans=e[0],l)}else n(0,l.input_ans=t,l)}function m(e){let t=(e=(e=e.replace(/%{|}%/g,"")).split("|"))[0].trim();e[1]&&e[1].trim();if(n(0,l.customStyle=-1!=t.indexOf("#style#"),l),n(0,l.fillInTheBlanksChoice=2,l),n(0,l.open=!0,l),-1!=t.indexOf("#style#")){let e=t.split("#style#");I.select("#responseDialog").value=e[1],I.select("#customStyleText").value=e[1],I.select("#input"+i).value=e[0]}else I.select("#input").value=t}function u(e){e=function(e){let t=[],n=e;return null==n.length&&""!=n?t.push(n):t=n,t.map((function(e,n){let l=e.__cdata,i=l.match(/<{[\s\S]*?}>/gm);i&&i.map((function(e){let t=e.match(/<\{(.*?)\}>/g);t=t.toString().replace(/<\{|\}>/g,""),t="var:"+t,t=t.trim(),l=l.replace(e,t)})),t[n].__cdata=l})),t}(e),n(1,s=e),function(e){e.map((function(e,t){1==e._viewonly?n(1,s[t].toggle=1,s):n(1,s[t].toggle=0,s)}))}(s),function(e){e.map((function(e,t){let i=e.__cdata,o=i.match(/%{[\s\S]*?}%/gm),c="";o&&o.forEach((function(e,t){let s=o[t],a="",r="";c=o[t].match(/\|(.*?)}%$/gm),c=c?c[0].replace(/\||}%/gm,""):"t";let d="",p="",m="";"t"==c?(m=c,d="Textbox",p="icomoon-insert-template"):"n"==c?(m="t",d="Numeric",p="icomoon-insert-template"):"e"==c&&(m=c,d="Math",a=s.replace(/\%\{|\|e\}\%/g,""),a='latex="'+a+'"',r="editMath",p="icomoon-insert-template");var u=new RegExp(RegExp.quote(s));i=i.replace(u,'<span id="latexSpan'+n(0,l.spanCounter=n(0,++l.spanCounter,l),l)+'" '+a+" type='"+m+"' class='alert alert-info editFill "+r+"' originalkey='"+s+"' style='padding: 5px;outline: none;line-height:40px;cursor:move;color:#000' contentEditable='false'><i style='padding-right:4px' class='"+p+"'></i>"+d+"</span>")})),n(1,s[t].__cdata=i,s)}))}(e)}function f(e){document.querySelector("#"+e).checked?(n(0,l.gonext=!0,l),o.smxml._gonext="1"):(n(0,l.gonext=!1,l),o.smxml._gonext="0"),_()}function x(e){document.querySelector("#"+e).checked?(n(0,l.variable_button=!0,l),o.smxml._fixed="1"):(n(0,l.variable_button=!1,l),o.smxml._fixed="0"),_()}function g(e,t,n){let l=n.target.name,i=document.querySelector("#"+l+e),s="_"+n.target.value,c=e;i.checked?o.smxml.step[c][s]="1":o.smxml.step[c][s]="0";document.querySelector("#"+t).innerHTML;_()}function h(e){console.log("handle click"),I.select("#save_step_"+e,"removeAttr","disabled")}function b(e,t,l){1==s[e].toggle?(n(1,s[e].toggle=0,s),o.smxml.step[e]._viewonly="0",o.smxml.step[e]._attempt="1"):(s[e].toggle,o.smxml.step[e]._viewonly="1",o.smxml.step[e]._attempt="0");document.querySelector("#"+t).innerHTML;_()}function $(e,t){let i;if("steps"==t){if(i=s,i.length>2){i.splice(e,1)}else I.alert("You have atleast 2 steps.");n(1,s=i),_()}else"algo"==t&&(n(0,l.opened=!0,l),n(0,l.deleteIndex=e,l))}function v(e,t){let l=document.querySelector("#"+t).innerHTML;l=l.replace(/&amp;/g,"&"),n(1,s[e].__cdata=l,s),I.select("#save_step_"+e,"attr",{disabled:"disabled"}),_()}function _(){let e='<smxml type="37" fixed="'+o.smxml._fixed+'" gonext="'+o.smxml._gonext+'">';s.map((function(t,n){let l=n+1,i=t._viewonly,o=t._mode,s=t._attempt,c=t._sticky,a=t.__cdata;a=function(e){let t=e.match(/&lt;(.*?)&gt;/gm),n="";if(t)for(var l=0;l<t.length;l++)n=t[l],t[l]=t[l].replace(/&lt;/g,"<").replace(/&gt;/g,">"),e=e.replace(n,t[l]);return e}(a),a=function(e){let t,n=e.match(/var:var\d+\s+\s+/g);return n&&n.map((function(n,l){t=n.trim(),e=e.replace(n,t)})),e}(a),a=a.replace(/&quot;/g,'"').replace(/&nbsp;/g," "),a=a.replace(/'/g,'"').replace(/\n/g,"");let r=a.match(/<span(.*?)>(.*?)<\/span>/gi);if(r)for(n=0;n<r.length;n++){let e=r[n].match(/originalkey="%(.*?)%"/g);e&&(e=e.toString().replace(/originalkey=/g,"").replace(/"%|%"/g,"%"),a=a.replace(r[n],e))}e=e+"<step seq='"+l+"'"+(null!=s?" attempt ='"+s+"'":" ")+(null!=i?" viewonly ='"+i+"'":" ")+(null!=o?" mode ='"+o+"'":" ")+(null!=c?" sticky ='"+c+"'":" ")+">\x3c!--[CDATA["+a+"]]--\x3e</step>"})),e+="</smxml>",d(e)}function k(){I.listen(document,"click",".editMath",(function(e,t){n(0,l.currentId=e.getAttribute("id"),l)})),I.listen(document,"click",".materialOverlay",(function(e){n(0,l.currentId=null,l),n(0,l.currentInp=null,l)})),tinyMCE.PluginManager.add("res",(function(e,t){e.addMenuItem("resp",{text:"Add response",id:"addToken",onclick(){n(0,l.open=!0,l),n(0,l.codetype=!1,l),n(0,l.numeric=!1,l)},context:"insert",prependToContext:!0})})),tinymce.PluginManager.load("equationeditor",themeUrl+"svelte_items/tinymce/plugins/equationeditor/plugin.min.js"),tinymce.init({selector:".tinymce-editor-res",inline:!0,theme:"modern",skin:"skin02",min_width:100,resize:!0,menubar:!1,toolbar:!0,elementpath:!1,statusbar:!1,force_br_newlines:!0,remove_trailing_brs:!0,forced_root_block:!1,extended_valid_elements:"span[onClick|contentEditable]",valid_elements:"*[*]",fixed_toolbar_container:"#toolbar_container",extended_valid_elements:"uc:syntax,uc:ref",custom_elements:"uc:syntax,~uc:ref",plugins:["lists link image charmap print preview anchor","searchreplace code fullscreen","insertdatetime media table contextmenu paste res equationeditor "],content_css:themeUrl+"svelte_items/src/libs/mathquill.css",toolbar:[" bold italic underline | equationeditor"],contextmenu:"resp",paste_as_text:!0})}function y(){2==l.fillInTheBlanksChoice&&n(0,l.currentInp=null,l),n(0,l.open=!1,l)}T((()=>{a&&(o=q(a),u(o.smxml.step),I.select("#sticky_checkbox_0").click(),I.select("#sticky_checkbox_0").click()),setTimeout((function(){I.selectAll(".save_button_steps","attr",{disabled:"disabled"}),k()}),500),I.listen(document,"click",".editFill",(function(e,t){"t"==e.getAttribute("type")?p(e.getAttribute("originalKey")):"e"==e.getAttribute("type")&&m(e.getAttribute("originalKey"))})),I.listen(document,"touchstart",".editFill",(function(e,t){"t"==e.getAttribute("type")?p(e.getAttribute("originalKey")):"e"==e.getAttribute("type")&&m(e.getAttribute("originalKey"))}))})),E((()=>{if(a!=l.xml){if(n(0,l.xml=a,l),!0===c)return;o=q(l.xml),u(o.smxml.step)}}));return e.$$set=e=>{"stopAuthoringUpdate"in e&&n(14,c=e.stopAuthoringUpdate),"xml"in e&&n(15,a=e.xml),"editorState"in e&&n(16,r=e.editorState),"getChildXml"in e&&n(17,d=e.getChildXml)},[l,s,f,x,g,h,b,$,v,function(e){let t={};t._seq=s.length+1,t._viewonly="1",t._attempt="0",t._mode="0",t.__cdata="New Step",s.push(t),_(),n(0,l.snackback=!0,l);var i=setTimeout((function(){k(),clearTimeout(i)}),500)},y,function(e){n(0,l.fillInTheBlanksChoice=e,l)},function(){n(0,l.open=!0,l)},function(){var e=0;if(1==l.fillInTheBlanksChoice){let t=document.querySelector("#input1").value,n=document.querySelector("#responseDialog #numeric").checked;1==n&&(t+=" |n"),""==t.trim()?(e=1)("All fields are required"):tinyMCE.activeEditor.insertContent("<span type='t' class='alert alert-info editFill' originalKey='%{"+t.trim()+"}%' style='padding: 5px;outline: none;line-height:40px;cursor:move;color:#000' contentEditable='false'><i style='padding-right:4px' class='icomoon-insert-template'></i>"+(1==n?"Numeric":"Textbox")+"</span>")}if(2==l.fillInTheBlanksChoice){let t=document.querySelector("#input").value;0==e?(document.querySelector("#"+l.currentId).setAttribute("latex",t),document.querySelector("#"+l.currentId).setAttribute("originalKey","%{"+t+"|e}%"),n(0,l.currentId=null,l),n(0,l.currentInp=null,l)):e("All fields are required")}0==e&&y()},c,a,r,d,e=>{f("go_next")},e=>{x("fixedans_checkbox")},(e,t)=>{h(e)},(e,t)=>{b(e,"fillAuthor_"+e)},(e,t)=>{g(e,"fillAuthor_"+e,t)},(e,t)=>{g(e,"fillAuthor_"+e,t)},(e,t)=>{$(e,"steps")},(e,t)=>{v(e,"fillAuthor_"+e)},function(e){l.open=e,n(0,l)}]}class ie extends e{constructor(e){var l;super(),X.getElementById("svelte-smsdwz-style")||((l=o("style")).id="svelte-smsdwz-style",l.textContent='.font18.svelte-smsdwz{font-size:16px}.fwidth.svelte-smsdwz{width:100%}.light-cyan-bg.svelte-smsdwz{background-color:#d4e4ff;color:#333}.top2.svelte-smsdwz{top:2px}.right5.svelte-smsdwz{right:5px}.right35.svelte-smsdwz{right:35px}.step_checkbox.svelte-smsdwz{width:22%;border:1px solid black;margin-left:10px;position:relative;bottom:1px;cursor:pointer;padding:3px 2px 0}.fixed_ans.svelte-smsdwz{top:10px;position:relative;float:right;border:1px solid #e0e0e0;background-color:#f5f5f5;border-radius:4px;padding:5px;font-size:15px;font-weight:700}.check_box.svelte-smsdwz{right:24px;position:relative;width:40px}.inner_inputs.svelte-smsdwz{margin:0 12px!important}.pointer.svelte-smsdwz{cursor:pointer !important}.width100.svelte-smsdwz{width:100px}[id^="fillmain"]{overflow:hidden;text-align:left}[id^="fillmain"] pre{background:none;border:none;font-size:14px!important}[id^="fillmain"] .string{min-height:50px;margin-top:10px;margin-right:10px}[id^="fillmain"] .footerstr{position:relative;margin-top:10px;background-color:#ccc;padding:15px;min-height:60px}[id^="fillmain"] .footerstr .arrow-up{position:absolute;top:-10px;right:50%;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #ccc}[id^="fillmain"] .fill-row{padding:6px}[id^="fillmain"] .fillelement, [id^="fillmain"] .drag-resize{height:30px;display:inline-block;position:relative;min-height:30px;margin:1px}[id^="fillmain"] input[type="text"], [id^="fillmain"] select{height:99%!important;resize:none;font-size:12px;color:#000;max-width:800px}[id^="fillmain"] .drag-resize{vertical-align:middle;border:1px solid #31B731;text-align:center;padding:3px;font-size:14px}[id^="fillmain"] .drag-resize.ui-draggable{cursor:move}[id^="fillmain"] .drop-hover{border:1px dashed red!important;box-shadow:0 0 0 2px yellow inset;outline:1px solid blue}[id^="fillmain"] .fillcheck ul{width:220px}[id^="fillmain"] .fillcheck li.selected{background-color:#E5E5E5}.fillcheck .selected .icomoon-checkmark-3:before{float:left;color:blue;padding:3px;position:relative;right:14px}.fillcheck .icomoon-close-2:before{float:left;color:blue;position:relative;right:14px;font-size:20px}.MathJax_Display{display:inline!important}[id^="fillmain"] .select{font-size:15px}[id^="fillmain"] .textarea{vertical-align:middle;border-radius:3px;background:#ffe;border:1px solid #ccc;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.ui-draggable-disabled{cursor:no-drop!important;opacity:0.5!important}',s(X.head,l)),t(this,e,le,te,n,{stopAuthoringUpdate:14,xml:15,editorState:16,getChildXml:17},[-1,-1])}}function oe(e){let t,n;return t=new ie({props:{xml:e[0],getChildXml:e[2],stopAuthoringUpdate:e[3],uxml:e[4]}}),{c(){w(t.$$.fragment)},m(e,l){C(t,e,l),n=!0},p(e,n){const l={};1&n&&(l.xml=e[0]),4&n&&(l.getChildXml=e[2]),8&n&&(l.stopAuthoringUpdate=e[3]),16&n&&(l.uxml=e[4]),t.$set(l)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function se(e){let t,n,l=2==parseInt(e[1].content_icon),i=l&&oe(e);return{c(){t=o("main"),i&&i.c()},m(e,l){m(e,t,l),i&&i.m(t,null),n=!0},p(e,[n]){2&n&&(l=2==parseInt(e[1].content_icon)),l?i?(i.p(e,n),2&n&&h(i,1)):(i=oe(e),i.c(),h(i,1),i.m(t,null)):i&&(f(),x(i,1,1,(()=>{i=null})),g())},i(e){n||(h(i),n=!0)},o(e){x(i),n=!1},d(e){e&&b(t),i&&i.d()}}}function ce(e,t,n){let{xml:l}=t,{editorState:i}=t,{getChildXml:o}=t,{stopAuthoringUpdate:s}=t,{uxml:c}=t;return e.$$set=e=>{"xml"in e&&n(0,l=e.xml),"editorState"in e&&n(1,i=e.editorState),"getChildXml"in e&&n(2,o=e.getChildXml),"stopAuthoringUpdate"in e&&n(3,s=e.stopAuthoringUpdate),"uxml"in e&&n(4,c=e.uxml)},[l,i,o,s,c]}export default class extends e{constructor(e){super(),t(this,e,ce,se,n,{xml:0,editorState:1,getChildXml:2,stopAuthoringUpdate:3,uxml:4})}}
//# sourceMappingURL=ItemPlugin-3560aaa9.js.map
