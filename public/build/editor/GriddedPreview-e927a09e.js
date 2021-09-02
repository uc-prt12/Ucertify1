import{S as t,i as e,s as n,F as l,q as o,h as a,o as i,c as s,b as r,m as c,t as d,a as m,d as p,e as u,f as g,j as f,D as x,g as h,k as b,n as _,p as v,A as w,E as k,C as y,w as $,X as N,W as L,Y as A,l as C,y as T,r as I,u as F}from"./main-bd2b9cd0.js";import{I as M}from"./ItemHelper-cc314921.js";import{G as P}from"./GriddedHelper-6129eea1.js";function z(t){l(t,"svelte-u3ss6a",".layoutHeading{font-weight:bold;font-size:16px;color:#1877b1}.items_element:hover{border:1.2px solid #777}.moreOptions{-webkit-box-shadow:3px 4px 6px #c4c5c5;-moz-box-shadow:3px 4px 6px #c4c5c5;box-shadow:3px 4px 6px #c4c5c5;background-color:#f0f0f0;border-top:1px solid #1877b1;border-bottom:1px solid #1877b1}.moreOptionDetails{background-color:#f7f7f7}.input_col{position:relative;left:5px}.layoutheading{padding:5px;font-size:20px;font-weight:bold}.numbr_range{position:relative;left:130px}.numbr_range_txt{position:relative;left:200px}.plus_minus_fraction{position:relative;top:20px}.floating_fraction{position:relative;top:27px}.plus_minus_span{position:relative;left:5px}.floating_decimal{float:right;margin-right:45px}.fontStyle{width:100px;float:right;margin-right:60px}.fraction_slash{position:relative;left:177px}.minus_tab,.plus_tab.svelte-u3ss6a,.slash_tab.svelte-u3ss6a{text-align:center}.gridded_tab{background-color:#f0f0f0!important;user-select:none!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.font_size_label{position:relative;left:198px}.font_size{position:relative;left:225px}.decimal_col{position:relative;left:208px;width:90px}.correct_color{background-color:#E9FFE9}.fixed_decimal_check{position:relative;top:26px;left:13px}.correct_incorrect_icon_fill{position:relative;width:19px;height:19px;right:121px;top:-55px;background:white;border-radius:50%}.row_column_decimal{position:relative;top:30px;left:5px}.fixed_point_class{position:relative;left:7px}.row_column{position:relative;left:5px}.answer_icon{position:absolute;top:7px;right:34px}.myP tbody{cursor:pointer}.col_range{width:205px}.posSize{position:relative;left:7px}.fontSmall{font-size:12px;text-align:center}.fontNormal{font-size:14px;text-align:center}.fontLarge{font-size:24px;text-align:center}.fontExtraLarge{font-size:26px;text-align:center}.grid{position:relative;top:10px;box-shadow:10px 5px 10px #000}.items_element{border:1px solid #8080807a;padding:6px 10px;border-radius:50%;background-color:white}.griddedModule .active{color:white;transition:1s;background:#696969;border:2px solid #fff}.minus_point,.decl_point.svelte-u3ss6a{padding:6px 12px}.sla_point{padding:6px 11px}.griddedModule table tr td:last-child{border-right:1px solid #ccc !important}.griddedModule .lastGrid tr:last-child td{border-bottom:1px solid #ccc !important}.griddedModule td{border:1px solid #f0f0f0 !important;border-left:1px solid #ccc !important}.token:hover{border:1px solid #000 !important}.bla .token:hover{border:1px solid #fff !important}.token_selected{background-color:#64bb63;color:#fff}.bla .token_highlight_heading{color:#000 !important}.griddedModule .expandIcon{font-size:27px;font-weight:bold;color:#1877b1}table td{padding:.5rem .5rem!important;vertical-align:top!important;border-top:1px solid #dee2e6!important}table th{padding:.5rem .5rem!important;vertical-align:top!important;border-top:1px solid #dee2e6!important}")}function E(t,e,n){const l=t.slice();return l[42]=e[n],l[44]=n,l}function H(t,e,n){const l=t.slice();return l[45]=e[n],l[47]=n,l}function S(t,e,n){const l=t.slice();return l[45]=e[n],l[47]=n,l}function B(t){let e,n,l,o,s,c,d,m,p,x,h,b,_,v;return{c(){e=u("input"),d=r(),m=u("span"),p=u("span"),h=r(),g(e,"type","text"),g(e,"id",n=t[45].id),g(e,"data-tag",l=t[45].dataTag),g(e,"name",o=t[45].name),g(e,"style",s="width:50px;text-align:center;"),e.value=c=void 0===t[1][t[47]]?" ":t[1][t[47]],g(e,"class","tdFont"),g(p,"id",x=t[45].spanid),g(p,"class","answer_icon"),g(m,"class",b=A(t[2].iconVisible+" relative")+" svelte-u3ss6a")},m(n,l){a(n,e,l),a(n,d,l),a(n,m,l),f(m,p),f(m,h),_||(v=[C(e,"change",t[12]),C(e,"input",J)],_=!0)},p(t,a){8&a[0]&&n!==(n=t[45].id)&&g(e,"id",n),8&a[0]&&l!==(l=t[45].dataTag)&&g(e,"data-tag",l),8&a[0]&&o!==(o=t[45].name)&&g(e,"name",o),2&a[0]&&c!==(c=void 0===t[1][t[47]]?" ":t[1][t[47]])&&e.value!==c&&(e.value=c),8&a[0]&&x!==(x=t[45].spanid)&&g(p,"id",x),4&a[0]&&b!==(b=A(t[2].iconVisible+" relative")+" svelte-u3ss6a")&&g(m,"class",b)},d(t){t&&i(e),t&&i(d),t&&i(m),_=!1,T(v)}}}function j(t){let e,n;return{c(){e=u("input"),g(e,"type","text"),g(e,"style",n="width:50px;text-align:center;"),e.value=".",e.disabled="true",g(e,"class","tdFont")},m(t,n){a(t,e,n)},p:I,d(t){t&&i(e)}}}function G(t){let e;function n(t,e){return 1==t[45].decpoint?j:B}let l=n(t),s=l(t);return{c(){s.c(),e=o()},m(t,n){s.m(t,n),a(t,e,n)},p(t,o){l===(l=n(t))&&s?s.p(t,o):(s.d(1),s=l(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&i(e)}}}function R(t){let e,n,l,o;return e=new P({props:{loop:t[8],class1:"tdFont plus_tab",className:"tdFontP plus_tab items_element",tableId:"plus_minus_tab",tableClass:"plus_minus_tab gridded_tab mt-0 myP",value:"+"}}),e.$on("handleClickCombo",t[11]),l=new P({props:{loop:t[9],class1:"tdFont plus_tab",className:"tdFontP plus_tab items_element minus_point",tableId:"plus_minus_tab",tableClass:"plus_minus_tab gridded_tab mt-0 myP",value:"-"}}),l.$on("handleClickCombo",t[11]),{c(){s(e.$$.fragment),n=r(),s(l.$$.fragment)},m(t,i){c(e,t,i),a(t,n,i),c(l,t,i),o=!0},p(t,n){const o={};256&n[0]&&(o.loop=t[8]),e.$set(o);const a={};512&n[0]&&(a.loop=t[9]),l.$set(a)},i(t){o||(d(e.$$.fragment,t),d(l.$$.fragment,t),o=!0)},o(t){m(e.$$.fragment,t),m(l.$$.fragment,t),o=!1},d(t){p(e,t),t&&i(n),p(l,t)}}}function V(t){let e,n;return e=new P({props:{loop:t[6],class1:"tdFont points",className:"tdFontP text-center items_element sla_point",tableId:"tdFontP slash_tab",tableClass:"slash_tab gridded_tab mt-0",value:"/"}}),e.$on("handleClickCombo",t[11]),{c(){s(e.$$.fragment)},m(t,l){c(e,t,l),n=!0},p(t,n){const l={};64&n[0]&&(l.loop=t[6]),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function q(t){let e,n;return e=new P({props:{loop:t[7],class1:"tdFont points",className:"tdFontP text-center items_element decl_point",tableId:"slash_tab",tableClass:"slash_tab gridded_tab mt-0 mb-0 myP",value:"."}}),e.$on("handleClickCombo",t[11]),{c(){s(e.$$.fragment)},m(t,l){c(e,t,l),n=!0},p(t,n){const l={};128&n[0]&&(l.loop=t[7]),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function D(t){let e,n,l,o,s,r,c,d,m,p,x=+t[44]+"";return{c(){e=u("td"),n=u("span"),l=F(x),g(n,"tabindex",o=t[45].tabIndex),g(n,"key",s=t[45].key),g(n,"name",r=t[45].name),g(n,"data-tag",c=t[45].dataTag),g(n,"class","tdFontP text-center td_data algn items_element"),g(n,"id",d=t[45].id),g(e,"width","50"),g(e,"class","text-center")},m(o,i){a(o,e,i),f(e,n),f(n,l),m||(p=C(n,"click",t[10]),m=!0)},p(t,e){32&e[0]&&o!==(o=t[45].tabIndex)&&g(n,"tabindex",o),32&e[0]&&s!==(s=t[45].key)&&g(n,"key",s),32&e[0]&&r!==(r=t[45].name)&&g(n,"name",r),32&e[0]&&c!==(c=t[45].dataTag)&&g(n,"data-tag",c),32&e[0]&&d!==(d=t[45].id)&&g(n,"id",d)},d(t){t&&i(e),m=!1,p()}}}function X(t){let e,n;return{c(){e=u("td"),g(e,"key",n=t[45].key),g(e,"class","tdFont text-center"),g(e,"width","50"),g(e,"disabled","true")},m(t,n){a(t,e,n)},p(t,l){32&l[0]&&n!==(n=t[45].key)&&g(e,"key",n)},d(t){t&&i(e)}}}function O(t){let e;function n(t,e){return t[45].decpoint?X:D}let l=n(t),s=l(t);return{c(){s.c(),e=o()},m(t,n){s.m(t,n),a(t,e,n)},p(t,o){l===(l=n(t))&&s?s.p(t,o):(s.d(1),s=l(t),s&&(s.c(),s.m(e.parentNode,e)))},d(t){s.d(t),t&&i(e)}}}function W(t){let e,n,l,o=t[5],s=[];for(let e=0;e<o.length;e+=1)s[e]=O(H(t,o,e));return{c(){e=u("tr");for(let t=0;t<s.length;t+=1)s[t].c();n=r(),g(e,"key",l=t[42].key)},m(t,l){a(t,e,l);for(let t=0;t<s.length;t+=1)s[t].m(e,null);f(e,n)},p(t,a){if(1056&a[0]){let l;for(o=t[5],l=0;l<o.length;l+=1){const i=H(t,o,l);s[l]?s[l].p(i,a):(s[l]=O(i),s[l].c(),s[l].m(e,n))}for(;l<s.length;l+=1)s[l].d(1);s.length=o.length}16&a[0]&&l!==(l=t[42].key)&&g(e,"key",l)},d(t){t&&i(e),x(s,t)}}}function Y(t){let e,n,l,o,v,w,k,y,$,N,L,A,C,T,I,F;v=new M({props:{handleReviewClick:t[13],reviewMode:t[0]}});let P=t[3],z=[];for(let e=0;e<P.length;e+=1)z[e]=G(S(t,P,e));let H=1==t[2].plus_minus&&R(t),B=1==t[2].slash_val&&V(t),j=1==t[2].decimal_val&&q(t),D=t[4],X=[];for(let e=0;e<D.length;e+=1)X[e]=W(E(t,D,e));return{c(){e=u("main"),n=u("center"),l=u("div"),o=u("center"),s(v.$$.fragment),w=r(),k=u("table"),y=u("tr");for(let t=0;t<z.length;t+=1)z[t].c();N=r(),H&&H.c(),L=r(),B&&B.c(),A=r(),j&&j.c(),C=r(),T=u("table"),I=u("tbody");for(let t=0;t<X.length;t+=1)X[t].c();h(y,"display","flex"),g(k,"border","1"),g(k,"id","tab2"),g(k,"style",$="border-collapse:collapse;text-align:center"),g(T,"id","gridded_sheet"),g(T,"class","gridded_tab mt-0 lastGrid create_tab myP"),g(l,"class","griddedModule")},m(t,i){a(t,e,i),f(e,n),f(n,l),f(l,o),c(v,o,null),f(l,w),f(l,k),f(k,y);for(let t=0;t<z.length;t+=1)z[t].m(y,null);f(l,N),H&&H.m(l,null),f(l,L),B&&B.m(l,null),f(l,A),j&&j.m(l,null),f(l,C),f(l,T),f(T,I);for(let t=0;t<X.length;t+=1)X[t].m(I,null);F=!0},p(t,e){const n={};if(1&e[0]&&(n.reviewMode=t[0]),v.$set(n),4110&e[0]){let n;for(P=t[3],n=0;n<P.length;n+=1){const l=S(t,P,n);z[n]?z[n].p(l,e):(z[n]=G(l),z[n].c(),z[n].m(y,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=P.length}if(1==t[2].plus_minus?H?(H.p(t,e),4&e[0]&&d(H,1)):(H=R(t),H.c(),d(H,1),H.m(l,L)):H&&(b(),m(H,1,1,(()=>{H=null})),_()),1==t[2].slash_val?B?(B.p(t,e),4&e[0]&&d(B,1)):(B=V(t),B.c(),d(B,1),B.m(l,A)):B&&(b(),m(B,1,1,(()=>{B=null})),_()),1==t[2].decimal_val?j?(j.p(t,e),4&e[0]&&d(j,1)):(j=q(t),j.c(),d(j,1),j.m(l,C)):j&&(b(),m(j,1,1,(()=>{j=null})),_()),1072&e[0]){let n;for(D=t[4],n=0;n<D.length;n+=1){const l=E(t,D,n);X[n]?X[n].p(l,e):(X[n]=W(l),X[n].c(),X[n].m(I,null))}for(;n<X.length;n+=1)X[n].d(1);X.length=D.length}},i(t){F||(d(v.$$.fragment,t),d(H),d(B),d(j),F=!0)},o(t){m(v.$$.fragment,t),m(H),m(B),m(j),F=!1},d(t){t&&i(e),p(v),x(z,t),H&&H.d(),B&&B.d(),j&&j.d(),x(X,t)}}}function J(t){let e=t.target.getAttribute("name"),n=document.getElementsByName(e);for(let e=1;e<n.length;e++)n[e].classList.contains("active")&&n[e].classList.remove("active"),n[e].innerHTML==t.target.value&&n[e].classList.add("active")}function K(t,e,n){let l,o,{isReview:a}=e,{xml:i}=e,{showAns:s}=e,{uxml:r}=e,{editorState:c}=e,d=" ",m=[],p=[],u=[],g=0,f="",x=$({rowNum:4,colNum:4,item:1,plus_minus:0,slash_val:0,decimal_val:0,xml:"",textSizeP:0,correctAns:[],userList:[],isMathquill:!1,smController:"h",pointerEvents:"auto",decimal_point:0,iconVisible:"h"}),h={};x.subscribe((t=>{n(2,h=t)}));function b(t){!function(t){try{n(2,h.rowNum=t.smxml._row,h),n(2,h.colNum=t.smxml._col,h),n(2,h.slash_val=t.smxml._slash,h),n(2,h.plus_minus=t.smxml._plusminus,h),n(2,h.decimal_val=t.smxml._decimal,h),n(2,h.textSizeP=t.smxml._font,h),n(2,h.correctAns=t.smxml._correctAns.split(","),h),n(2,h.decimal_point=t.smxml._fixed_point,h),r&&function(t){let e=N(t);e.smans&&e.smans.div&&e.smans.div._userAns&&(m=e.smans.div._userAns.split(","),d=e.smans.div._correct,p=m)}(r)}catch(t){onError=t,console.log({error:t.message,"function name":"parseXMLPreview","File name":"GriddedPreview.js"})}}(t=N(t))}function _(t){let e,a,i,p=t.target.attributes.getNamedItem("data-tag").value;""===t.target.innerHTML?m[p]=t.target.value:m[p]=t.target.innerHTML;for(let t=0;t<m.length;t++)void 0!==m[t]&&""!=m[t]||(m[t]="%blank%");"%blank%"==m[m.length-1]&&m.pop(),n(2,h.userList=m,h),l=h.correctAns;let u=h.userList;if(u.length==l.length){for(let t=0;t<l.length;t++)u[t]==l[t]&&g++;g==u.length?(e=y.correct,f=!0,g=0):(e=y.incorrect,f=!1,g=0)}else e=y.incorrect;c&&s(e),i="correct"==e,o="<smans><div type='56' correct='"+f+"' userAns='"+h.userList+"'></div></smans>",a="<smans><div type='56' correct='"+f+"' userAns='"+h.userList+"'></div></smans>"," "!=d&&g==u.length?w.select("#answer","attr",{checked:d}):w.select("#answer","attr",{checked:f}),n(14,r=o),L({uXml:a,ans:i})}v((()=>{w.listen(document,"keydown",".td_data",((t,e)=>{13===e.which&&t.click()})),w.listen(document,"click","#sm_controller button",(t=>{w.selectAll("#sm_controller button","removeClass",["active,btn-secondary,text-white,bg-secondary"]),w.selectAll(t,"addClass",["active,btn-secondary,text-white,bg-secondary"])})),w.listen(document,"click","#set-review",(function(){M()})),w.listen(document,"click","#unset-review",(function(){P()}))})),k((()=>{i!=h.xml&&(n(2,h.xml=i,h),b(i)),i&&console.log("qxml"),function(){n(3,A=[]);let t=h.decimal_point;for(let e=0;e<h.colNum;e++)"%blank%"===p[e]?n(1,u[e]=" ",u):n(1,u[e]=p[e],u),e==t-1&&0!=t?n(3,A=[...A,{decpoint:!0}]):A.length<h.colNum&&n(3,A=[...A,{id:"t"+e,dataTag:e,name:"p"+e,value:u[e],spanid:"t_"+e,decpoint:!1}])}(),function(t){n(7,F=[]);let e=h.decimal_point;for(let t=0;t<h.colNum;t++)t==e-1&&0!=e?n(7,F=[...F,{key:"col"+t,decpoint:!0}]):F.length<h.colNum&&n(7,F=[...F,{id:"t"+t,name:"p"+t,dataTag:t,decpoint:!1}])}(),function(t){n(6,I=[]);let e=h.decimal_point;for(let t=0;t<h.colNum;t++)t==e-1&&0!=e?n(6,I=[...I,{key:"col"+t,decpoint:!0}]):I.length<h.colNum&&n(6,I=[...I,{id:"t"+t,name:"p"+t,dataTag:t,decpoint:!1}])}(),function(t){n(8,E=[]),n(9,H=[]);let e=h.decimal_point;for(let t=0;t<h.colNum;t++)t==e-1&&0!=e?n(8,E=[...E,{dataTag:t,name:t,decpoint:!0}]):E.length<h.colNum&&n(8,E=[...E,{id:"t"+t,name:"p"+t,dataTag:t,decpoint:!1}]),t==e-1&&0!=e?n(9,H=[...H,{dataTag:t,name:t,decpoint:!0}]):H.length<h.colNum&&n(9,H=[...H,{id:"t"+t,name:"p"+t,dataTag:t,decpoint:!1}])}(),function(){n(4,C=[]);let t=h.decimal_point;for(let e=0;e<h.rowNum;e++){n(5,T=[]);for(let l=0;l<h.colNum;l++)l==t-1&&0!=t?n(5,T=[...T,{key:"col"+e+l,decpoint:!0}]):T.length<h.colNum&&n(5,T=[...T,{tabIndex:0,key:"col"+e+l,name:"p"+l,dataTag:l,id:"t"+l+"-"+e+l,decpoint:!1}]);n(4,C=[...C,{key:"row"+e}])}}()}));let A=[];let C=[],T=[];let I=[];let F=[];function M(){console.trace(),n(2,h.smController="",h),n(2,h.pointerEvents="none",h),n(0,a=!0),z("yans","showIcon"),w.selectAll("#sm_controller .your-ans","addClass",["btn-light","active"]),w.selectAll(".tokenHeader","attr",{tabindex:0}),setTimeout(function(){for(let t=0;t<h.correctAns.length;t++)h.correctAns[t]==h.userList[t]?(w.select("#t_"+t,"removeClass","icomoon-new-24px-cancel-circle-1"),w.select("#t_"+t,"addClass","icomoon-new-24px-checkmark-circle-1")):(w.select("#t_"+t,"removeClass","icomoon-new-24px-checkmark-circle-1"),w.select("#t_"+t,"addClass","icomoon-new-24px-cancel-circle-1"))}(),200),c&&s(f?y.correct:y.incorrect)}function P(){n(2,h.smController="h",h),n(2,h.pointerEvents="auto",h),n(0,a=!1),z("yans","hideIcon"),w.selectAll(".tokenHeader","removeAttr","tabindex")}function z(t,e){if(n(2,h.iconVisible="showIcon"==e?"":"h",h),"cans"==t){document.getElementsByClassName("gridded_tab").disabled=!0,p=h.correctAns}else"yans"==t&&(p=m)}let E=[],H=[];return t.$$set=t=>{"isReview"in t&&n(0,a=t.isReview),"xml"in t&&n(15,i=t.xml),"showAns"in t&&n(16,s=t.showAns),"uxml"in t&&n(14,r=t.uxml),"editorState"in t&&n(17,c=t.editorState)},t.$$.update=()=>{1&t.$$.dirty[0]&&(a?M():P())},[a,u,h,A,C,T,I,F,E,H,function(t){let e=t.target.getAttribute("name"),n=document.getElementsByName(e);for(let t=0;t<n.length;t++)n[t].classList.contains("active")&&n[t].classList.remove("active");t.target.classList.add("active");let l=t.target.id.split("-");document.getElementById(l[0]).value=t.target.innerHTML,_(t)},function(t){let e=t.detail.target.getAttribute("name"),o=document.getElementsByName(e);for(let t=0;t<o.length;t++)o[t].classList.contains("active")&&o[t].classList.remove("active");t.detail.target.classList.add("active");let a=t.detail.target.id.split("-");document.getElementById(a[0]).value=t.detail.target.innerHTML,function(t){let e,o=t.detail.target.attributes.getNamedItem("data-tag").value;""===t.detail.target.innerHTML?m[o]=t.detail.target.value:m[o]=t.detail.target.innerHTML;for(let t=0;t<m.length;t++)void 0!==m[t]&&""!=m[t]||(m[t]="%blank%");"%blank%"==m[m.length-1]&&m.pop();n(2,h.userList=m,h),l=h.correctAns;let a=h.userList;if(a.length==l.length){for(let t=0;t<l.length;t++)a[t]==l[t]&&g++;g==a.length?(e=y.correct,f=!0,g=0):(e=y.incorrect,f=!1,g=0)}else e=y.incorrect;c&&s(e);w.select("#special_module_user_xml").value="<smans><div type='56' correct='"+f+"' userAns='"+h.userList+"'></div></smans>"," "!=d&&g==a.length?w.select("#answer","attr",{checked:d}):w.select("#answer","attr",{checked:f})}(t)},function(t){let e=h.rowNum-1;return t.target.value.length>1?(w.alert("Double digit not accepted"),t.target.value="",!1):t.target.value<0?(w.alert("Less then 1 not accepted"),t.target.value="",!1):e<t.target.value?(w.alert("Number insert only 0 to "+h.rowNum),t.target.value="",!1):void _(t)},function(t){"c"==t?z("cans","hideIcon"):z("yans","showIcon")},r,i,s,c]}export default class extends t{constructor(t){super(),e(this,t,K,Y,n,{isReview:0,xml:15,showAns:16,uxml:14,editorState:17},z,[-1,-1])}}
//# sourceMappingURL=GriddedPreview-e927a09e.js.map
