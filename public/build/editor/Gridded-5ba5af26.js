import{S as e,i as t,s as l,D as a,q as n,h as o,o as i,c as s,b as c,m as r,t as d,a as m,d as u,e as p,f as g,j as f,z as _,B as x,g as b,l as v,k as h,n as k,y as w,C as y,p as N,A as $,a4 as F,X as C,J as A,w as S,r as z,u as E}from"./main-d9f6b858.js";import{G as q}from"./GriddedHelper-ace0f6e0.js";function I(e){a(e,"svelte-1wrfq8n",".custom_checkbox_new.svelte-1wrfq8n.svelte-1wrfq8n{display:block;position:relative;width:20px;height:20px;margin-bottom:0;cursor:pointer;font-size:18px}.layoutHeading{font-weight:bold;font-size:16px;color:#1877b1}.items_element:hover{border:1.2px solid #777}.moreOptions{-webkit-box-shadow:3px 4px 6px #c4c5c5;-moz-box-shadow:3px 4px 6px #c4c5c5;box-shadow:3px 4px 6px #c4c5c5;background-color:#f0f0f0;border-top:1px solid #1877b1;border-bottom:1px solid #1877b1}.moreOptionDetails{background-color:#f7f7f7}.input_col{position:relative;left:5px}.layoutheading{padding:5px;font-size:20px;font-weight:bold}.numbr_range{position:relative;left:130px}.numbr_range_txt{position:relative;left:200px}.plus_minus_fraction{position:relative;top:20px}.floating_fraction{position:relative;top:27px}.plus_minus_span{position:relative;left:5px}.floating_decimal{float:right;margin-right:45px}.fontStyle{width:100px;float:right;margin-right:60px}.fraction_slash{position:relative;left:177px}.minus_tab,\r\n.plus_tab,\r\n.slash_tab{text-align:center}.gridded_tab.svelte-1wrfq8n.svelte-1wrfq8n{background-color:#f0f0f0;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.font_size_label{position:relative;left:198px}.font_size{position:relative;left:225px}.decimal_col{position:relative;left:208px;width:90px}.correct_color{background-color:#E9FFE9}.fixed_decimal_check{position:relative;top:26px;left:13px}.correct_incorrect_icon_fill{position:relative;width:19px;height:19px;right:121px;top:-55px;background:white;border-radius:50%}.row_column_decimal{position:relative;top:30px;left:5px}.fixed_point_class{position:relative;left:7px}.row_column{position:relative;left:5px}.answer_icon{position:absolute;top:3px;right:34px}.col_range{width:205px}.posSize{position:relative;left:7px}.fontSmall{font-size:12px;text-align:center}.fontNormal{font-size:14px;text-align:center}.fontLarge{font-size:24px;text-align:center}.fontExtraLarge{font-size:26px;text-align:center}.grid{position:relative;top:10px;box-shadow:10px 5px 10px #000}.items_element{border:1px solid #8080807a;padding:6px 10px;border-radius:50%;background-color:white}.griddedModule .active{color:white;transition:1s;background:#696969;border:2px solid #fff}.sla_point{padding:6px 11px}.griddedModule.svelte-1wrfq8n table tr td.svelte-1wrfq8n:last-child{border-right:1px solid #ccc !important}.griddedModule.svelte-1wrfq8n .lastGrid tr:last-child td.svelte-1wrfq8n{border-bottom:1px solid #ccc !important}.griddedModule td{border:1px solid #f0f0f0 !important;border-left:1px solid #ccc !important}.token:hover{border:1px solid #000 !important}.bla .token:hover{border:1px solid #fff !important}.token_selected{background-color:#64bb63;color:#fff}.bla .token_highlight_heading{color:#000 !important}.griddedModule .expandIcon{font-size:27px;font-weight:bold;color:#1877b1}")}function L(e,t,l){const a=e.slice();return a[30]=t[l],a[32]=l,a}function T(e,t,l){const a=e.slice();return a[33]=t[l],a[35]=l,a}function M(e,t,l){const a=e.slice();return a[33]=t[l],a[35]=l,a}function B(e){let t,l,a,n,s,c,r,d;return{c(){t=p("input"),g(t,"type","text"),g(t,"id",l=e[33].id),g(t,"name",a=e[33].name),t.value=n=null==e[33].value?"":e[33].value,g(t,"data-tag",s=e[33].dataTag),g(t,"style",c="width:50px;text-align:center;"),g(t,"class","tdFont fo")},m(l,a){o(l,t,a),r||(d=[v(t,"change",e[13]),v(t,"input",R)],r=!0)},p(e,o){64&o[0]&&l!==(l=e[33].id)&&g(t,"id",l),64&o[0]&&a!==(a=e[33].name)&&g(t,"name",a),64&o[0]&&n!==(n=null==e[33].value?"":e[33].value)&&t.value!==n&&(t.value=n),64&o[0]&&s!==(s=e[33].dataTag)&&g(t,"data-tag",s)},d(e){e&&i(t),r=!1,w(d)}}}function D(e){let t;return{c(){t=p("input"),g(t,"type","text"),b(t,"width","50px"),b(t,"text-align","center"),t.value=".",g(t,"class","tdFont"),t.disabled="true"},m(e,l){o(e,t,l)},p:z,d(e){e&&i(t)}}}function G(e){let t;function l(e,t){return 1==e[33].decpoint?D:B}let a=l(e),s=a(e);return{c(){s.c(),t=n()},m(e,l){s.m(e,l),o(e,t,l)},p(e,n){a===(a=l(e))&&s?s.p(e,n):(s.d(1),s=a(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&i(t)}}}function H(e){let t,l,a,n;return t=new q({props:{loop:e[5],class1:"tdFont plus_tab points",className:"tdFont plus_tab items_element",tableId:"plus_minus_tab",tableClass:"plus_minus_tab gridded_tab mt-0 myP",value:"+"}}),t.$on("handleClickCombo",e[15]),a=new q({props:{loop:e[4],class1:"tdFont plus_tab",className:"tdFont minus_point text-center items_element",tableId:"plus_minus_tab",tableClass:"plus_minus_tab gridded_tab mt-0 myP",value:"-"}}),a.$on("handleClickCombo",e[15]),{c(){s(t.$$.fragment),l=c(),s(a.$$.fragment)},m(e,i){r(t,e,i),o(e,l,i),r(a,e,i),n=!0},p(e,l){const n={};32&l[0]&&(n.loop=e[5]),t.$set(n);const o={};16&l[0]&&(o.loop=e[4]),a.$set(o)},i(e){n||(d(t.$$.fragment,e),d(a.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),m(a.$$.fragment,e),n=!1},d(e){u(t,e),e&&i(l),u(a,e)}}}function O(e){let t,l;return t=new q({props:{loop:e[3],class1:"tdFont points",className:"tdFont text-center items_element sla_point",tableId:"slash_tab",tableClass:"slash_tab gridded_tab mt-0 myP",value:"/"}}),t.$on("handleClickCombo",e[15]),{c(){s(t.$$.fragment)},m(e,a){r(t,e,a),l=!0},p(e,l){const a={};8&l[0]&&(a.loop=e[3]),t.$set(a)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){u(t,e)}}}function P(e){let t,l;return t=new q({props:{loop:e[3],class1:"tdFont points",className:"tdFont text-center items_element decl_point",tableId:"slash_tab",tableClass:"slash_tab gridded_tab mt-0 myP",value:"."}}),t.$on("handleClickCombo",e[15]),{c(){s(t.$$.fragment)},m(e,a){r(t,e,a),l=!0},p(e,l){const a={};8&l[0]&&(a.loop=e[3]),t.$set(a)},i(e){l||(d(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){u(t,e)}}}function X(e){let t,l,a,n,s,c,r,d,m,u,_=+e[32]+"";return{c(){t=p("td"),l=p("span"),a=E(_),g(l,"tabindex",n=0),g(l,"key",s=e[33].key),g(l,"name",c=e[33].name),g(l,"data-tag",r=e[33].name),g(l,"class","tdFont td_data text-center items_element"),g(l,"id",d=e[33].id),g(t,"width","50"),g(t,"class","text-center svelte-1wrfq8n")},m(n,i){o(n,t,i),f(t,l),f(l,a),m||(u=v(l,"click",e[14]),m=!0)},p(e,t){4&t[0]&&s!==(s=e[33].key)&&g(l,"key",s),4&t[0]&&c!==(c=e[33].name)&&g(l,"name",c),4&t[0]&&r!==(r=e[33].name)&&g(l,"data-tag",r),4&t[0]&&d!==(d=e[33].id)&&g(l,"id",d)},d(e){e&&i(t),m=!1,u()}}}function j(e){let t,l;return{c(){t=p("td"),g(t,"key",l=e[33].key),g(t,"class","tdFont text-center points svelte-1wrfq8n"),g(t,"width","50"),g(t,"disabled","true")},m(e,l){o(e,t,l)},p(e,a){4&a[0]&&l!==(l=e[33].key)&&g(t,"key",l)},d(e){e&&i(t)}}}function J(e){let t;function l(e,t){return 1==e[33].decpoint?j:X}let a=l(e),s=a(e);return{c(){s.c(),t=n()},m(e,l){s.m(e,l),o(e,t,l)},p(e,n){a===(a=l(e))&&s?s.p(e,n):(s.d(1),s=a(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&i(t)}}}function K(e){let t,l,a,n=e[2],s=[];for(let t=0;t<n.length;t+=1)s[t]=J(T(e,n,t));return{c(){t=p("tr");for(let e=0;e<s.length;e+=1)s[e].c();l=c(),g(t,"key",a="row"+e[32])},m(e,a){o(e,t,a);for(let e=0;e<s.length;e+=1)s[e].m(t,null);f(t,l)},p(e,a){if(16388&a[0]){let o;for(n=e[2],o=0;o<n.length;o+=1){const i=T(e,n,o);s[o]?s[o].p(i,a):(s[o]=J(i),s[o].c(),s[o].m(t,l))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){e&&i(t),_(s,e)}}}function Q(e){let t,l,a,n,s,r,u,y,N,$,F,C,A,S,z,E,q,I,T,B,D,X,j,J,Q,R,U,V,W,Y,Z,ee,te,le,ae,ne,oe,ie,se,ce,re,de,me,ue,pe,ge,fe,_e,xe,be,ve,he,ke,we,ye,Ne,$e,Fe,Ce,Ae,Se,ze,Ee,qe,Ie,Le,Te,Me,Be,De=e[6],Ge=[];for(let t=0;t<De.length;t+=1)Ge[t]=G(M(e,De,t));let He=1==e[0].plus_minus&&H(e),Oe=1==e[0].slash_val&&O(e),Pe=1==e[0].decimal_val&&P(e),Xe=e[1],je=[];for(let t=0;t<Xe.length;t+=1)je[t]=K(L(e,Xe,t));return{c(){t=p("main"),l=p("div"),a=p("table"),n=p("tbody"),s=p("tr");for(let e=0;e<Ge.length;e+=1)Ge[e].c();u=c(),He&&He.c(),y=c(),Oe&&Oe.c(),N=c(),Pe&&Pe.c(),$=c(),F=p("table");for(let e=0;e<je.length;e+=1)je[e].c();C=c(),A=p("div"),S=p("div"),z=p("h2"),E=p("button"),E.textContent=""+x.layout_options,q=c(),I=p("div"),T=p("div"),B=p("div"),D=p("div"),X=p("div"),X.textContent=""+x.row_count,j=c(),J=p("div"),Q=p("input"),U=c(),V=p("div"),W=p("div"),W.textContent=""+x.col_count,Y=c(),Z=p("div"),ee=p("input"),le=c(),ae=p("div"),ne=p("div"),oe=p("div"),ie=p("input"),ce=p("label"),ce.textContent="Plus/Minus Column",re=c(),de=p("div"),me=p("div"),ue=p("input"),ge=p("label"),ge.textContent="Fraction/Slash",fe=c(),_e=p("div"),xe=p("div"),be=p("div"),ve=p("input"),ke=c(),we=p("label"),we.textContent="Fixed Decimal",ye=c(),Ne=p("div"),$e=p("div"),Fe=p("input"),Ae=p("label"),Ae.textContent="Floating Decimal",Se=c(),ze=p("div"),Ee=p("div"),qe=p("input"),g(a,"border","1"),g(a,"id","tab2"),g(a,"class","tab2"),g(a,"style",r="border-collapse: collapse;text-align: center;"),g(F,"id","gridded_sheet"),g(F,"class","gridded_tab lastGrid mt-0 myP svelte-1wrfq8n"),g(E,"class","accordion-button collapsed py-0"),g(E,"type","button"),g(E,"data-bs-toggle","collapse"),g(E,"data-bs-target","#collapseOne"),g(E,"aria-expanded","false"),g(E,"aria-controls","collapseOne"),g(z,"class","accordion-header mt-0"),g(z,"id","headingOne"),g(X,"class","font-weight-bold"),g(Q,"type","number"),g(Q,"min","1"),g(Q,"max","9"),Q.value=R=e[0].rowNum,g(Q,"name","col_range"),g(Q,"id","col_range"),g(Q,"class","form-control  inline-block"),g(Q,"data-label","Number of rows"),g(D,"class","col-sm-6"),g(W,"class","font-weight-bold"),g(ee,"type","number"),g(ee,"min","1"),g(ee,"max","6"),ee.value=te=e[0].colNum,g(ee,"name","col_nmbr"),g(ee,"id","col_range"),g(ee,"class","form-control  inline-block"),g(ee,"data-label","Number of rows"),g(V,"class","col-sm-6"),g(B,"class","row form-group"),g(ie,"type","checkbox"),g(ie,"class","custom_checkbox_new float-left svelte-1wrfq8n"),g(ie,"id","plus_minus_checkbox"),g(ie,"inputprops",se={"aria-label":"Plus/Minus Column"}),g(ce,"for","plus_minus_checkbox"),g(ce,"class","pl-1"),g(oe,"class","inline-block"),g(ne,"class","col-sm-6"),g(ue,"type","checkbox"),g(ue,"id","fraction_slash_checkbox"),g(ue,"class","custom_checkbox_new float-left svelte-1wrfq8n"),g(ue,"inputprops",pe={"aria-label":"Fraction/Slash"}),g(ge,"for","fraction_slash_checkbox"),g(ge,"class","pl-1"),g(me,"class","inline-block"),g(de,"class","col-sm-6"),g(ae,"class","row form-group"),g(ve,"type","checkbox"),g(ve,"id","fixed_decimal_checkbox"),g(ve,"class","custom_checkbox_new float-left svelte-1wrfq8n"),g(ve,"inputprops",he={"aria-label":"Fixed Decimal"}),g(we,"for","fixed_decimal_checkbox"),g(we,"class","pl-1"),g(be,"class","inline-block"),g(xe,"class","col-sm-6"),g(Fe,"type","checkbox"),g(Fe,"id","floating_decimal_checkbox"),g(Fe,"class","custom_checkbox_new float-left svelte-1wrfq8n"),g(Fe,"inputprops",Ce={"aria-label":"Floating Decimal"}),g(Ae,"for","floating_decimal_checkbox"),g(Ae,"class","pl-1"),g($e,"class","inline-block"),g(Ne,"class","col-sm-6"),g(_e,"class","row form-group"),g(qe,"type","number"),g(qe,"min","1"),g(qe,"max","7"),g(qe,"name","Fixed_decimal_column"),g(qe,"id","Fixed_decimal_column"),qe.value=Ie=e[0].fixed_point,g(qe,"class","form-control  inline-block"),g(qe,"placeholder","Fixed decimal column"),g(qe,"style",Le="display: none"),g(qe,"data-label","Fixed decimal column"),qe.disabled="true",g(ze,"class","col-sm-6 inline-block pl-0"),g(T,"class","accordion-body"),g(I,"id","collapseOne"),g(I,"class","accordion-collapse collapse"),g(I,"aria-labelledby","headingOne"),g(I,"data-bs-parent","#accordionExample"),g(I,"style",""),g(S,"class","accordion-item"),g(A,"class","accordion mt-5"),g(A,"id","accordionExample"),b(A,"background-color","#F0F0F0"),g(l,"class","griddedModule svelte-1wrfq8n")},m(i,c){o(i,t,c),f(t,l),f(l,a),f(a,n),f(n,s);for(let e=0;e<Ge.length;e+=1)Ge[e].m(s,null);f(l,u),He&&He.m(l,null),f(l,y),Oe&&Oe.m(l,null),f(l,N),Pe&&Pe.m(l,null),f(l,$),f(l,F);for(let e=0;e<je.length;e+=1)je[e].m(F,null);f(l,C),f(l,A),f(A,S),f(S,z),f(z,E),f(S,q),f(S,I),f(I,T),f(T,B),f(B,D),f(D,X),f(D,j),f(D,J),f(J,Q),f(B,U),f(B,V),f(V,W),f(V,Y),f(V,Z),f(Z,ee),f(T,le),f(T,ae),f(ae,ne),f(ne,oe),f(oe,ie),f(oe,ce),f(ae,re),f(ae,de),f(de,me),f(me,ue),f(me,ge),f(T,fe),f(T,_e),f(_e,xe),f(xe,be),f(be,ve),f(be,ke),f(be,we),f(_e,ye),f(_e,Ne),f(Ne,$e),f($e,Fe),f($e,Ae),f(T,Se),f(T,ze),f(ze,Ee),f(Ee,qe),Te=!0,Me||(Be=[v(Q,"keyup",e[11]),v(Q,"change",e[11]),v(ee,"keyup",e[11]),v(ee,"change",e[11]),v(ie,"click",e[7]),v(ue,"click",e[8]),v(ve,"click",e[9]),v(Fe,"click",e[10]),v(qe,"change",e[12])],Me=!0)},p(e,t){if(8256&t[0]){let l;for(De=e[6],l=0;l<De.length;l+=1){const a=M(e,De,l);Ge[l]?Ge[l].p(a,t):(Ge[l]=G(a),Ge[l].c(),Ge[l].m(s,null))}for(;l<Ge.length;l+=1)Ge[l].d(1);Ge.length=De.length}if(1==e[0].plus_minus?He?(He.p(e,t),1&t[0]&&d(He,1)):(He=H(e),He.c(),d(He,1),He.m(l,y)):He&&(h(),m(He,1,1,(()=>{He=null})),k()),1==e[0].slash_val?Oe?(Oe.p(e,t),1&t[0]&&d(Oe,1)):(Oe=O(e),Oe.c(),d(Oe,1),Oe.m(l,N)):Oe&&(h(),m(Oe,1,1,(()=>{Oe=null})),k()),1==e[0].decimal_val?Pe?(Pe.p(e,t),1&t[0]&&d(Pe,1)):(Pe=P(e),Pe.c(),d(Pe,1),Pe.m(l,$)):Pe&&(h(),m(Pe,1,1,(()=>{Pe=null})),k()),16390&t[0]){let l;for(Xe=e[1],l=0;l<Xe.length;l+=1){const a=L(e,Xe,l);je[l]?je[l].p(a,t):(je[l]=K(a),je[l].c(),je[l].m(F,null))}for(;l<je.length;l+=1)je[l].d(1);je.length=Xe.length}(!Te||1&t[0]&&R!==(R=e[0].rowNum))&&(Q.value=R),(!Te||1&t[0]&&te!==(te=e[0].colNum))&&(ee.value=te),(!Te||1&t[0]&&Ie!==(Ie=e[0].fixed_point))&&(qe.value=Ie)},i(e){Te||(d(He),d(Oe),d(Pe),Te=!0)},o(e){m(He),m(Oe),m(Pe),Te=!1},d(e){e&&i(t),_(Ge,e),He&&He.d(),Oe&&Oe.d(),Pe&&Pe.d(),_(je,e),Me=!1,w(Be)}}}function R(e){let t=e.target.getAttribute("name"),l=document.getElementsByName(t);for(let t=1;t<l.length;t++)l[t].classList.contains("active")&&l[t].classList.remove("active"),l[t].innerHTML==e.target.value&&l[t].classList.add("active")}function U(e,t,l){let a={},{getChildXml:n}=t,o=[],{xml:i}=t;S({rowNum:4,colNum:4,tableName:"Gridded System",plus_minus:0,slash_val:0,decimal_val:0,xml:"",textSize:14,resAns:"",correctAns:[],correctAnsSplit:[],listAns:[],res:"",fixed_decimal_val:0,decimal_point:0}).subscribe((e=>{l(0,a=e)}));function s(){let e='<smxml type="56" name="Gridded" plusminus="'+a.plus_minus+'" slash="'+a.slash_val+'" decimal="'+a.decimal_val+'" fixed_point="'+a.decimal_point+'" font="'+a.textSize+'" row="'+a.rowNum+'" col="'+a.colNum+'" correctAns="'+a.res+'" >\x3c!--[CDATA[]]--\x3e</smxml>';n(e)}y((()=>{AI.selectAll(".tdFont","css",{fontSize:"14px"})})),N((()=>{$.listen("body","keydown",".td_data",((e,t)=>{console.log("Evnts => ",t),13===t.which&&e.click()})),setTimeout((function(){const e=new Event("change");document.querySelector("#Fixed_decimal_column").dispatchEvent(e)}),300)})),F((()=>{i!=a.xml&&(l(0,a.xml=i,a),function(e){try{l(0,a.rowNum=e.smxml._row,a),l(0,a.colNum=e.smxml._col,a),l(0,a.slash_val=e.smxml._slash,a),l(0,a.plus_minus=e.smxml._plusminus,a),l(0,a.decimal_val=e.smxml._decimal,a),l(0,a.textSize=e.smxml._font,a),l(0,a.correctAns=e.smxml._correctAns,a),l(0,a.correctAnsSplit=e.smxml._correctAns.split(","),a),l(0,a.fixed_point=e.smxml._fixed_point,a),n(A(e)),1==e.smxml._plusminus&&(document.getElementById("plus_minus_checkbox").checked=!0),1==e.smxml._slash&&(document.getElementById("fraction_slash_checkbox").checked=!0),1==e.smxml._decimal&&(document.getElementById("floating_decimal_checkbox").checked=!0),e.smxml._fixed_point>0&&1!=document.getElementById("fixed_decimal_checkbox").checked&&document.getElementById("fixed_decimal_checkbox").click()}catch(e){console.warn({error:e.message,"function name":"parseXMLAuthoring","File name":"Gridded.js"})}}(C(i))),function(){l(6,g=[]);let e=a.decimal_point;for(let t=0;t<a.colNum;t++)t===e-1&&0!=e?l(6,g=[...g,{decpoint:!0}]):g.length<a.colNum&&l(6,g=[...g,{id:"td"+t,value:"%blank%"==a.correctAnsSplit[t]?"":a.correctAnsSplit[t],name:t,dataTag:t,decpoint:!1}])}(),function(e){l(3,c=[]);let t=a.decimal_point;for(let e=0;e<a.colNum;e++)e==t-1&&0!=t?l(3,c=[...c,{key:"col"+e,decpoint:!0}]):c.length<a.colNum&&l(3,c=[...c,{id:"td"+e,name:e,dataTag:e,decpoint:!1}])}(),function(e){r=[];let t=a.decimal_point;for(let e=0;e<a.colNum;e++)e==t-1&&0!=t?r=[...r,{key:"col"+e,decpoint:!0}]:r.length<a.colNum&&r.push(r=[...r,{id:"td"+e,name:e,dataTag:e,decpoint:!1}])}(),function(e){l(5,p=[]),l(4,u=[]);let t=a.decimal_point;for(let e=0;e<a.colNum;e++)e==t-1&&0!=t?l(5,p=[...p,{id:"td"+e,dataTag:e,name:e,decpoint:!0}]):p.length<a.colNum&&l(5,p=[...p,{id:"td"+e,dataTag:e,name:e,decpoint:!1}]),e==t-1&&0!=t?l(4,u=[...u,{id:"td"+e,dataTag:e,name:e,decpoint:!0}]):u.length<a.colNum&&l(4,u=[...u,{id:"td"+e,name:e,dataTag:e,decpoint:!1}])}(),function(){$.select(".tdFont","css",{fontSize:a.textSize}),l(1,d=[]);let e=a.decimal_point;for(let t=0;t<a.rowNum;t++){l(2,m=[]);for(let n=0;n<a.colNum;n++)n==e-1&&0!=e?l(2,m=[...m,{key:"col"+t+n,decpoint:!0}]):m.length<a.colNum&&l(2,m=[...m,{key:"col"+t+n,name:n,id:"td"+n+"-"+t+n,decpoint:!1}]);l(1,d=[...d,{key:"row"+t}])}}()}));let c,r,d=[],m=[];let u=[],p=[];let g=[];return e.$$set=e=>{"getChildXml"in e&&l(16,n=e.getChildXml),"xml"in e&&l(17,i=e.xml)},[a,d,m,c,u,p,g,function(){l(0,a.plus_minus=0==a.plus_minus?1:0,a),s()},function(e){l(0,a.slash_val=0==a.slash_val?1:0,a),s()},function(e){if(0==a.fixed_decimal_val){l(0,a.fixed_decimal_val=1,a);let e=document.getElementById("Fixed_decimal_column");e.disabled=!1,e.style.display="inline-block"}else{l(0,a.fixed_decimal_val=0,a),l(0,a.decimal_point=0,a);let e=document.getElementById("Fixed_decimal_column");e.value=" ",e.disabled=!0,e.style.display="none",s()}},function(e){l(0,a.decimal_val=0==a.decimal_val?1:0,a),s()},function(e){if(e.target.value.length>1)return $.alert("accept only single value"),e.target.value=4,!1;let t=e.target.value;if(!(t>0&&t<=10))return $.alert(x.grid_one_to_ten),e.target.value=4,!1;if("col_nmbr"==e.target.name){if(e.target.value<1)return $.alert(x.col_less_one),e.target.value=1,!1;if(e.target.value>6)return $.alert(x.type_one_to_seven),e.target.value=4,l(0,a.colNum=4,a),s(),!1;l(0,a.colNum=e.target.value,a)}else{if(e.target.value<1)return $.alert(x.row_less_one),e.target.value=1,!1;if(e.target.value>10)return $.alert(x.type_one_to_ten),e.target.value=4,l(0,a.rowNum=4,a),s(),!1;l(0,a.rowNum=e.target.value,a)}s()},function(e){let t=e.target.value;if(e.target.value.length>1)return $.alert("accept only single value"),e.target.value="",!1;""==e.target.value&&(t=""),(e.target.value.length>1||e.target.value<1||a.colNum<=e.target.value)&&(t=1,e.target.value=1,$.alert(x.decimal_position+(a.colNum-1)+"."),$.select(".sa-info","css",{display:"block"})),l(0,a.decimal_point=t,a),s()},function(e){console.log("number"+a.plus_minus);let t=a.rowNum-1;if(e.target.value.length>1)return $.alert(x.double_digit),e.target.value="",!1;if(e.target.value<0)return $.alert(x.less_one),e.target.value="",!1;if(t<e.target.value)return $.alert(x.number_from+t),e.target.value="",!1;if(0==a.plus_minus&&"+"==e.target.value||"-"==e.target.value)return $.alert(x.plus_minus_option),e.target.value="",!1;if(0==a.slash_val&&"/"==e.target.value)return $.alert(x.slash_option),e.target.value="",!1;if(0==a.decimal_val&&"."==e.target.value)return $.alert(x.decimal_option),e.target.value="",!1;let n=e.target.attributes.getNamedItem("data-tag").value;o[n]=e.target.value;for(let e=0;e<o.length;e++)void 0!==o[e]&&""!=o[e]||(o[e]="%blank%");"%blank%"==o[o.length-1]&&o.pop(),l(0,a.listAns=o,a),l(0,a.res=a.listAns.toString(),a),s()},function(e){let t=e.target.getAttribute("name"),n=document.getElementsByName(t);for(let e=0;e<n.length;e++)n[e].classList.contains("active")&&n[e].classList.remove("active");e.target.classList.add("active");let i=e.target.id.split("-");document.getElementById(i[0]).value=e.target.innerHTML;let c=e.target.attributes.getNamedItem("data-tag").value;o[c]=e.target.innerHTML;for(let e=0;e<o.length;e++)void 0===o[e]&&(o[e]="%blank%");l(0,a.listAns=o,a),l(0,a.res=a.listAns.toString(),a),s()},function(e){let t=e.detail.target.getAttribute("name"),n=document.getElementsByName(t);for(let e=0;e<n.length;e++)n[e].classList.contains("active")&&n[e].classList.remove("active");e.detail.target.classList.add("active");let i=e.detail.target.id.split("-");document.getElementById(i[0]).value=e.detail.target.innerHTML;let c=e.detail.target.attributes.getNamedItem("data-tag").value;o[c]=e.detail.target.innerHTML;for(let e=0;e<o.length;e++)void 0===o[e]&&(o[e]="%blank%");l(0,a.listAns=o,a),l(0,a.res=a.listAns.toString(),a),s()},n,i]}export default class extends e{constructor(e){super(),t(this,e,U,Q,l,{getChildXml:16,xml:17},I,[-1,-1])}}
//# sourceMappingURL=Gridded-5ba5af26.js.map