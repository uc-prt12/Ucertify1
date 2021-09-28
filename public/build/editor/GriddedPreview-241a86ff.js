import{S as e,i as t,s as n,F as l,q as o,h as a,o as i,c as s,b as r,m as c,t as d,a as m,d as p,e as u,f as g,j as f,D as x,g as h,k as b,n as _,p as v,A as w,E as k,C as y,w as $,X as N,W as L,Y as A,l as C,y as T,r as I,u as F}from"./main-5e43927e.js";import{I as M}from"./ItemHelper-b54ad9eb.js";import{G as P}from"./GriddedHelper-5e7d5124.js";function z(e){l(e,"svelte-u3ss6a",".layoutHeading{font-weight:bold;font-size:16px;color:#1877b1}.items_element:hover{border:1.2px solid #777}.moreOptions{-webkit-box-shadow:3px 4px 6px #c4c5c5;-moz-box-shadow:3px 4px 6px #c4c5c5;box-shadow:3px 4px 6px #c4c5c5;background-color:#f0f0f0;border-top:1px solid #1877b1;border-bottom:1px solid #1877b1}.moreOptionDetails{background-color:#f7f7f7}.input_col{position:relative;left:5px}.layoutheading{padding:5px;font-size:20px;font-weight:bold}.numbr_range{position:relative;left:130px}.numbr_range_txt{position:relative;left:200px}.plus_minus_fraction{position:relative;top:20px}.floating_fraction{position:relative;top:27px}.plus_minus_span{position:relative;left:5px}.floating_decimal{float:right;margin-right:45px}.fontStyle{width:100px;float:right;margin-right:60px}.fraction_slash{position:relative;left:177px}.minus_tab,.plus_tab.svelte-u3ss6a,.slash_tab.svelte-u3ss6a{text-align:center}.gridded_tab{background-color:#f0f0f0!important;user-select:none!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.font_size_label{position:relative;left:198px}.font_size{position:relative;left:225px}.decimal_col{position:relative;left:208px;width:90px}.correct_color{background-color:#E9FFE9}.fixed_decimal_check{position:relative;top:26px;left:13px}.correct_incorrect_icon_fill{position:relative;width:19px;height:19px;right:121px;top:-55px;background:white;border-radius:50%}.row_column_decimal{position:relative;top:30px;left:5px}.fixed_point_class{position:relative;left:7px}.row_column{position:relative;left:5px}.answer_icon{position:absolute;top:7px;right:34px}.myP tbody{cursor:pointer}.col_range{width:205px}.posSize{position:relative;left:7px}.fontSmall{font-size:12px;text-align:center}.fontNormal{font-size:14px;text-align:center}.fontLarge{font-size:24px;text-align:center}.fontExtraLarge{font-size:26px;text-align:center}.grid{position:relative;top:10px;box-shadow:10px 5px 10px #000}.items_element{border:1px solid #8080807a;padding:6px 10px;border-radius:50%;background-color:white}.griddedModule .active{color:white;transition:1s;background:#696969;border:2px solid #fff}.minus_point,.decl_point.svelte-u3ss6a{padding:6px 12px}.sla_point{padding:6px 11px}.griddedModule table tr td:last-child{border-right:1px solid #ccc !important}.griddedModule .lastGrid tr:last-child td{border-bottom:1px solid #ccc !important}.griddedModule td{border:1px solid #f0f0f0 !important;border-left:1px solid #ccc !important}.token:hover{border:1px solid #000 !important}.bla .token:hover{border:1px solid #fff !important}.token_selected{background-color:#64bb63;color:#fff}.bla .token_highlight_heading{color:#000 !important}.griddedModule .expandIcon{font-size:27px;font-weight:bold;color:#1877b1}table td{padding:.5rem .5rem!important;vertical-align:top!important;border-top:1px solid #dee2e6!important}table th{padding:.5rem .5rem!important;vertical-align:top!important;border-top:1px solid #dee2e6!important}")}function E(e,t,n){const l=e.slice();return l[42]=t[n],l[44]=n,l}function H(e,t,n){const l=e.slice();return l[45]=t[n],l[47]=n,l}function S(e,t,n){const l=e.slice();return l[45]=t[n],l[47]=n,l}function B(e){let t,n,l,o,s,c,d,m,p,x,h,b,_,v;return{c(){t=u("input"),d=r(),m=u("span"),p=u("span"),h=r(),g(t,"type","text"),g(t,"id",n=e[45].id),g(t,"data-tag",l=e[45].dataTag),g(t,"name",o=e[45].name),g(t,"style",s="width:50px;text-align:center;"),t.value=c=void 0===e[1][e[47]]?" ":e[1][e[47]],g(t,"class","tdFont"),g(p,"id",x=e[45].spanid),g(p,"class","answer_icon"),g(m,"class",b=A(e[2].iconVisible+" relative")+" svelte-u3ss6a")},m(n,l){a(n,t,l),a(n,d,l),a(n,m,l),f(m,p),f(m,h),_||(v=[C(t,"change",e[12]),C(t,"input",J)],_=!0)},p(e,a){8&a[0]&&n!==(n=e[45].id)&&g(t,"id",n),8&a[0]&&l!==(l=e[45].dataTag)&&g(t,"data-tag",l),8&a[0]&&o!==(o=e[45].name)&&g(t,"name",o),2&a[0]&&c!==(c=void 0===e[1][e[47]]?" ":e[1][e[47]])&&t.value!==c&&(t.value=c),8&a[0]&&x!==(x=e[45].spanid)&&g(p,"id",x),4&a[0]&&b!==(b=A(e[2].iconVisible+" relative")+" svelte-u3ss6a")&&g(m,"class",b)},d(e){e&&i(t),e&&i(d),e&&i(m),_=!1,T(v)}}}function j(e){let t,n;return{c(){t=u("input"),g(t,"type","text"),g(t,"style",n="width:50px;text-align:center;"),t.value=".",t.disabled="true",g(t,"class","tdFont")},m(e,n){a(e,t,n)},p:I,d(e){e&&i(t)}}}function G(e){let t;function n(e,t){return 1==e[45].decpoint?j:B}let l=n(e),s=l(e);return{c(){s.c(),t=o()},m(e,n){s.m(e,n),a(e,t,n)},p(e,o){l===(l=n(e))&&s?s.p(e,o):(s.d(1),s=l(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&i(t)}}}function R(e){let t,n,l,o;return t=new P({props:{loop:e[8],class1:"tdFont plus_tab",className:"tdFontP plus_tab items_element",tableId:"plus_minus_tab",tableClass:"plus_minus_tab gridded_tab mt-0 myP",value:"+"}}),t.$on("handleClickCombo",e[11]),l=new P({props:{loop:e[9],class1:"tdFont plus_tab",className:"tdFontP plus_tab items_element minus_point",tableId:"plus_minus_tab",tableClass:"plus_minus_tab gridded_tab mt-0 myP",value:"-"}}),l.$on("handleClickCombo",e[11]),{c(){s(t.$$.fragment),n=r(),s(l.$$.fragment)},m(e,i){c(t,e,i),a(e,n,i),c(l,e,i),o=!0},p(e,n){const o={};256&n[0]&&(o.loop=e[8]),t.$set(o);const a={};512&n[0]&&(a.loop=e[9]),l.$set(a)},i(e){o||(d(t.$$.fragment,e),d(l.$$.fragment,e),o=!0)},o(e){m(t.$$.fragment,e),m(l.$$.fragment,e),o=!1},d(e){p(t,e),e&&i(n),p(l,e)}}}function V(e){let t,n;return t=new P({props:{loop:e[6],class1:"tdFont points",className:"tdFontP text-center items_element sla_point",tableId:"tdFontP slash_tab",tableClass:"slash_tab gridded_tab mt-0",value:"/"}}),t.$on("handleClickCombo",e[11]),{c(){s(t.$$.fragment)},m(e,l){c(t,e,l),n=!0},p(e,n){const l={};64&n[0]&&(l.loop=e[6]),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function q(e){let t,n;return t=new P({props:{loop:e[7],class1:"tdFont points",className:"tdFontP text-center items_element decl_point",tableId:"slash_tab",tableClass:"slash_tab gridded_tab mt-0 mb-0 myP",value:"."}}),t.$on("handleClickCombo",e[11]),{c(){s(t.$$.fragment)},m(e,l){c(t,e,l),n=!0},p(e,n){const l={};128&n[0]&&(l.loop=e[7]),t.$set(l)},i(e){n||(d(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function D(e){let t,n,l,o,s,r,c,d,m,p,x=+e[44]+"";return{c(){t=u("td"),n=u("span"),l=F(x),g(n,"tabindex",o=e[45].tabIndex),g(n,"key",s=e[45].key),g(n,"name",r=e[45].name),g(n,"data-tag",c=e[45].dataTag),g(n,"class","tdFontP text-center td_data algn items_element"),g(n,"id",d=e[45].id),g(t,"width","50"),g(t,"class","text-center")},m(o,i){a(o,t,i),f(t,n),f(n,l),m||(p=C(n,"click",e[10]),m=!0)},p(e,t){32&t[0]&&o!==(o=e[45].tabIndex)&&g(n,"tabindex",o),32&t[0]&&s!==(s=e[45].key)&&g(n,"key",s),32&t[0]&&r!==(r=e[45].name)&&g(n,"name",r),32&t[0]&&c!==(c=e[45].dataTag)&&g(n,"data-tag",c),32&t[0]&&d!==(d=e[45].id)&&g(n,"id",d)},d(e){e&&i(t),m=!1,p()}}}function X(e){let t,n;return{c(){t=u("td"),g(t,"key",n=e[45].key),g(t,"class","tdFont text-center"),g(t,"width","50"),g(t,"disabled","true")},m(e,n){a(e,t,n)},p(e,l){32&l[0]&&n!==(n=e[45].key)&&g(t,"key",n)},d(e){e&&i(t)}}}function O(e){let t;function n(e,t){return e[45].decpoint?X:D}let l=n(e),s=l(e);return{c(){s.c(),t=o()},m(e,n){s.m(e,n),a(e,t,n)},p(e,o){l===(l=n(e))&&s?s.p(e,o):(s.d(1),s=l(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&i(t)}}}function W(e){let t,n,l,o=e[5],s=[];for(let t=0;t<o.length;t+=1)s[t]=O(H(e,o,t));return{c(){t=u("tr");for(let e=0;e<s.length;e+=1)s[e].c();n=r(),g(t,"key",l=e[42].key)},m(e,l){a(e,t,l);for(let e=0;e<s.length;e+=1)s[e].m(t,null);f(t,n)},p(e,a){if(1056&a[0]){let l;for(o=e[5],l=0;l<o.length;l+=1){const i=H(e,o,l);s[l]?s[l].p(i,a):(s[l]=O(i),s[l].c(),s[l].m(t,n))}for(;l<s.length;l+=1)s[l].d(1);s.length=o.length}16&a[0]&&l!==(l=e[42].key)&&g(t,"key",l)},d(e){e&&i(t),x(s,e)}}}function Y(e){let t,n,l,o,v,w,k,y,$,N,L,A,C,T,I,F;v=new M({props:{handleReviewClick:e[13],reviewMode:e[0]}});let P=e[3],z=[];for(let t=0;t<P.length;t+=1)z[t]=G(S(e,P,t));let H=1==e[2].plus_minus&&R(e),B=1==e[2].slash_val&&V(e),j=1==e[2].decimal_val&&q(e),D=e[4],X=[];for(let t=0;t<D.length;t+=1)X[t]=W(E(e,D,t));return{c(){t=u("main"),n=u("center"),l=u("div"),o=u("center"),s(v.$$.fragment),w=r(),k=u("table"),y=u("tr");for(let e=0;e<z.length;e+=1)z[e].c();N=r(),H&&H.c(),L=r(),B&&B.c(),A=r(),j&&j.c(),C=r(),T=u("table"),I=u("tbody");for(let e=0;e<X.length;e+=1)X[e].c();h(y,"display","flex"),g(k,"border","1"),g(k,"id","tab2"),g(k,"style",$="border-collapse:collapse;text-align:center"),g(T,"id","gridded_sheet"),g(T,"class","gridded_tab mt-0 lastGrid create_tab myP"),g(l,"class","griddedModule")},m(e,i){a(e,t,i),f(t,n),f(n,l),f(l,o),c(v,o,null),f(l,w),f(l,k),f(k,y);for(let e=0;e<z.length;e+=1)z[e].m(y,null);f(l,N),H&&H.m(l,null),f(l,L),B&&B.m(l,null),f(l,A),j&&j.m(l,null),f(l,C),f(l,T),f(T,I);for(let e=0;e<X.length;e+=1)X[e].m(I,null);F=!0},p(e,t){const n={};if(1&t[0]&&(n.reviewMode=e[0]),v.$set(n),4110&t[0]){let n;for(P=e[3],n=0;n<P.length;n+=1){const l=S(e,P,n);z[n]?z[n].p(l,t):(z[n]=G(l),z[n].c(),z[n].m(y,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=P.length}if(1==e[2].plus_minus?H?(H.p(e,t),4&t[0]&&d(H,1)):(H=R(e),H.c(),d(H,1),H.m(l,L)):H&&(b(),m(H,1,1,(()=>{H=null})),_()),1==e[2].slash_val?B?(B.p(e,t),4&t[0]&&d(B,1)):(B=V(e),B.c(),d(B,1),B.m(l,A)):B&&(b(),m(B,1,1,(()=>{B=null})),_()),1==e[2].decimal_val?j?(j.p(e,t),4&t[0]&&d(j,1)):(j=q(e),j.c(),d(j,1),j.m(l,C)):j&&(b(),m(j,1,1,(()=>{j=null})),_()),1072&t[0]){let n;for(D=e[4],n=0;n<D.length;n+=1){const l=E(e,D,n);X[n]?X[n].p(l,t):(X[n]=W(l),X[n].c(),X[n].m(I,null))}for(;n<X.length;n+=1)X[n].d(1);X.length=D.length}},i(e){F||(d(v.$$.fragment,e),d(H),d(B),d(j),F=!0)},o(e){m(v.$$.fragment,e),m(H),m(B),m(j),F=!1},d(e){e&&i(t),p(v),x(z,e),H&&H.d(),B&&B.d(),j&&j.d(),x(X,e)}}}function J(e){let t=e.target.getAttribute("name"),n=document.getElementsByName(t);for(let t=1;t<n.length;t++)n[t].classList.contains("active")&&n[t].classList.remove("active"),n[t].innerHTML==e.target.value&&n[t].classList.add("active")}function K(e,t,n){let l,o,{isReview:a}=t,{xml:i}=t,{showAns:s}=t,{uxml:r}=t,{editorState:c}=t,d=" ",m=[],p=[],u=[],g=0,f="",x=$({rowNum:4,colNum:4,item:1,plus_minus:0,slash_val:0,decimal_val:0,xml:"",textSizeP:0,correctAns:[],userList:[],isMathquill:!1,smController:"h",pointerEvents:"auto",decimal_point:0,iconVisible:"h"}),h={};x.subscribe((e=>{n(2,h=e)}));function b(e){!function(e){try{n(2,h.rowNum=e.smxml._row,h),n(2,h.colNum=e.smxml._col,h),n(2,h.slash_val=e.smxml._slash,h),n(2,h.plus_minus=e.smxml._plusminus,h),n(2,h.decimal_val=e.smxml._decimal,h),n(2,h.textSizeP=e.smxml._font,h),n(2,h.correctAns=e.smxml._correctAns.split(","),h),n(2,h.decimal_point=e.smxml._fixed_point,h),r&&function(e){let t=N(e);t.smans&&t.smans.div&&t.smans.div._userAns&&(m=t.smans.div._userAns.split(","),d=t.smans.div._correct,p=m)}(r)}catch(e){onError=e,console.log({error:e.message,"function name":"parseXMLPreview","File name":"GriddedPreview.js"})}}(e=N(e))}function _(e){let t,a,i,p=e.target.attributes.getNamedItem("data-tag").value;""===e.target.innerHTML?m[p]=e.target.value:m[p]=e.target.innerHTML;for(let e=0;e<m.length;e++)void 0!==m[e]&&""!=m[e]||(m[e]="%blank%");"%blank%"==m[m.length-1]&&m.pop(),n(2,h.userList=m,h),l=h.correctAns;let u=h.userList;if(u.length==l.length){for(let e=0;e<l.length;e++)u[e]==l[e]&&g++;g==u.length?(t=y.correct,f=!0,g=0):(t=y.incorrect,f=!1,g=0)}else t=y.incorrect;c&&s(t),i="correct"==t,o="<smans><div type='56' correct='"+f+"' userAns='"+h.userList+"'></div></smans>",a="<smans><div type='56' correct='"+f+"' userAns='"+h.userList+"'></div></smans>"," "!=d&&g==u.length?w.select("#answer","attr",{checked:d}):w.select("#answer","attr",{checked:f}),n(14,r=o),L({uXml:a,ans:i})}v((()=>{w.listen(document,"keydown",".td_data",((e,t)=>{13===t.which&&e.click()})),w.listen(document,"click","#sm_controller button",(e=>{w.selectAll("#sm_controller button","removeClass",["active,btn-secondary,text-white,bg-secondary"]),w.selectAll(e,"addClass",["active,btn-secondary,text-white,bg-secondary"])})),w.listen(document,"click","#set-review",(function(){M()})),w.listen(document,"click","#unset-review",(function(){P()}))})),k((()=>{i!=h.xml&&(n(2,h.xml=i,h),b(i)),i&&console.log("qxml"),function(){n(3,A=[]);let e=h.decimal_point;for(let t=0;t<h.colNum;t++)"%blank%"===p[t]?n(1,u[t]=" ",u):n(1,u[t]=p[t],u),t==e-1&&0!=e?n(3,A=[...A,{decpoint:!0}]):A.length<h.colNum&&n(3,A=[...A,{id:"t"+t,dataTag:t,name:"p"+t,value:u[t],spanid:"t_"+t,decpoint:!1}])}(),function(e){n(7,F=[]);let t=h.decimal_point;for(let e=0;e<h.colNum;e++)e==t-1&&0!=t?n(7,F=[...F,{key:"col"+e,decpoint:!0}]):F.length<h.colNum&&n(7,F=[...F,{id:"t"+e,name:"p"+e,dataTag:e,decpoint:!1}])}(),function(e){n(6,I=[]);let t=h.decimal_point;for(let e=0;e<h.colNum;e++)e==t-1&&0!=t?n(6,I=[...I,{key:"col"+e,decpoint:!0}]):I.length<h.colNum&&n(6,I=[...I,{id:"t"+e,name:"p"+e,dataTag:e,decpoint:!1}])}(),function(e){n(8,E=[]),n(9,H=[]);let t=h.decimal_point;for(let e=0;e<h.colNum;e++)e==t-1&&0!=t?n(8,E=[...E,{dataTag:e,name:e,decpoint:!0}]):E.length<h.colNum&&n(8,E=[...E,{id:"t"+e,name:"p"+e,dataTag:e,decpoint:!1}]),e==t-1&&0!=t?n(9,H=[...H,{dataTag:e,name:e,decpoint:!0}]):H.length<h.colNum&&n(9,H=[...H,{id:"t"+e,name:"p"+e,dataTag:e,decpoint:!1}])}(),function(){n(4,C=[]);let e=h.decimal_point;for(let t=0;t<h.rowNum;t++){n(5,T=[]);for(let l=0;l<h.colNum;l++)l==e-1&&0!=e?n(5,T=[...T,{key:"col"+t+l,decpoint:!0}]):T.length<h.colNum&&n(5,T=[...T,{tabIndex:0,key:"col"+t+l,name:"p"+l,dataTag:l,id:"t"+l+"-"+t+l,decpoint:!1}]);n(4,C=[...C,{key:"row"+t}])}}()}));let A=[];let C=[],T=[];let I=[];let F=[];function M(){console.trace(),n(2,h.smController="",h),n(2,h.pointerEvents="none",h),n(0,a=!0),z("yans","showIcon"),w.selectAll("#sm_controller .your-ans","addClass",["btn-light","active"]),w.selectAll(".tokenHeader","attr",{tabindex:0}),setTimeout(function(){for(let e=0;e<h.correctAns.length;e++)h.correctAns[e]==h.userList[e]?(w.select("#t_"+e,"removeClass","icomoon-new-24px-cancel-circle-1"),w.select("#t_"+e,"addClass","icomoon-new-24px-checkmark-circle-1")):(w.select("#t_"+e,"removeClass","icomoon-new-24px-checkmark-circle-1"),w.select("#t_"+e,"addClass","icomoon-new-24px-cancel-circle-1"))}(),200),c&&s(f?y.correct:y.incorrect)}function P(){n(2,h.smController="h",h),n(2,h.pointerEvents="auto",h),n(0,a=!1),z("yans","hideIcon"),w.selectAll(".tokenHeader","removeAttr","tabindex")}function z(e,t){if(n(2,h.iconVisible="showIcon"==t?"":"h",h),"cans"==e){document.getElementsByClassName("gridded_tab").disabled=!0,p=h.correctAns}else"yans"==e&&(p=m)}let E=[],H=[];return e.$$set=e=>{"isReview"in e&&n(0,a=e.isReview),"xml"in e&&n(15,i=e.xml),"showAns"in e&&n(16,s=e.showAns),"uxml"in e&&n(14,r=e.uxml),"editorState"in e&&n(17,c=e.editorState)},e.$$.update=()=>{1&e.$$.dirty[0]&&(a?M():P())},[a,u,h,A,C,T,I,F,E,H,function(e){let t=e.target.getAttribute("name"),n=document.getElementsByName(t);for(let e=0;e<n.length;e++)n[e].classList.contains("active")&&n[e].classList.remove("active");e.target.classList.add("active");let l=e.target.id.split("-");document.getElementById(l[0]).value=e.target.innerHTML,_(e)},function(e){let t=e.detail.target.getAttribute("name"),o=document.getElementsByName(t);for(let e=0;e<o.length;e++)o[e].classList.contains("active")&&o[e].classList.remove("active");e.detail.target.classList.add("active");let a=e.detail.target.id.split("-");document.getElementById(a[0]).value=e.detail.target.innerHTML,function(e){let t,o=e.detail.target.attributes.getNamedItem("data-tag").value;""===e.detail.target.innerHTML?m[o]=e.detail.target.value:m[o]=e.detail.target.innerHTML;for(let e=0;e<m.length;e++)void 0!==m[e]&&""!=m[e]||(m[e]="%blank%");"%blank%"==m[m.length-1]&&m.pop();n(2,h.userList=m,h),l=h.correctAns;let a=h.userList;if(a.length==l.length){for(let e=0;e<l.length;e++)a[e]==l[e]&&g++;g==a.length?(t=y.correct,f=!0,g=0):(t=y.incorrect,f=!1,g=0)}else t=y.incorrect;c&&s(t);w.select("#special_module_user_xml").value="<smans><div type='56' correct='"+f+"' userAns='"+h.userList+"'></div></smans>"," "!=d&&g==a.length?w.select("#answer","attr",{checked:d}):w.select("#answer","attr",{checked:f})}(e)},function(e){let t=h.rowNum-1;return e.target.value.length>1?(w.alert("Double digit not accepted"),e.target.value="",!1):e.target.value<0?(w.alert("Less then 1 not accepted"),e.target.value="",!1):t<e.target.value?(w.alert("Number insert only 0 to "+h.rowNum),e.target.value="",!1):void _(e)},function(e){"c"==e?z("cans","hideIcon"):z("yans","showIcon")},r,i,s,c]}export default class extends e{constructor(e){super(),t(this,e,K,Y,n,{isReview:0,xml:15,showAns:16,uxml:14,editorState:17},z,[-1,-1])}}
//# sourceMappingURL=GriddedPreview-241a86ff.js.map
