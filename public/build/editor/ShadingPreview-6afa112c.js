import{S as e,i as t,s as r,q as n,h as o,e as s,b as l,j as c,f as i,g as a,l as d,o as u,y as p,z as m,c as h,u as f,m as g,x as b,t as x,a as w,d as C,p as A,X as k,A as v,B as _,W as y}from"./main-6002838f.js";import{I as $}from"./ItemHelper-ff928c40.js";import{s as P}from"./style-inject.es-1f59c1d0.js";function S(e,t,r){const n=e.slice();return n[37]=t[r],n[39]=r,n}function V(e,t,r){const n=e.slice();return n[40]=t[r],n}function I(e){let t,r=e[2],s=[];for(let t=0;t<r.length;t+=1)s[t]=G(S(e,r,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=n()},m(e,r){for(let t=0;t<s.length;t+=1)s[t].m(e,r);o(e,t,r)},p(e,n){if(1183&n[0]){let o;for(r=e[2],o=0;o<r.length;o+=1){const l=S(e,r,o);s[o]?s[o].p(l,n):(s[o]=G(l),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(e){m(s,e),e&&u(t)}}}function j(e){let t,r=e[1],s=[];for(let t=0;t<r.length;t+=1)s[t]=H(V(e,r,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=n()},m(e,r){for(let t=0;t<s.length;t+=1)s[t].m(e,r);o(e,t,r)},p(e,n){if(1179&n[0]){let o;for(r=e[1],o=0;o<r.length;o+=1){const l=V(e,r,o);s[o]?s[o].p(l,n):(s[o]=H(l),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(e){m(s,e),e&&u(t)}}}function E(e){let t,r,n,m,h,f,g,b,x,w=e[0]&&R(e);return{c(){t=s("td"),w&&w.c(),r=l(),i(t,"id",n=e[40].id),i(t,"tabindex",m=e[40].tabindex),i(t,"aria-label",h=e[40].arialabel),i(t,"data-grid","no"),i(t,"pevdata-id",f=e[40].pevdata),i(t,"class",g=`${e[0]&&0==e[4]?"":e[40].class} ${e[40].classDetails} ${e[0]&&0==e[4]?"icomoon-24px-correct"==e[40].spanclass?"gridCorrect":"":e[40].correctAnswerColor} gridColor pointer border-dark text-center`),a(t,"width",e[40].width),a(t,"height",e[40].height),a(t,"pointerEvents","pointerEvents")},m(n,s){o(n,t,s),w&&w.m(t,null),c(t,r),b||(x=[d(t,"click",e[7]),d(t,"keyup",e[10])],b=!0)},p(e,o){e[0]?w?w.p(e,o):(w=R(e),w.c(),w.m(t,r)):w&&(w.d(1),w=null),2&o[0]&&n!==(n=e[40].id)&&i(t,"id",n),2&o[0]&&m!==(m=e[40].tabindex)&&i(t,"tabindex",m),2&o[0]&&h!==(h=e[40].arialabel)&&i(t,"aria-label",h),2&o[0]&&f!==(f=e[40].pevdata)&&i(t,"pevdata-id",f),19&o[0]&&g!==(g=`${e[0]&&0==e[4]?"":e[40].class} ${e[40].classDetails} ${e[0]&&0==e[4]?"icomoon-24px-correct"==e[40].spanclass?"gridCorrect":"":e[40].correctAnswerColor} gridColor pointer border-dark text-center`)&&i(t,"class",g),2&o[0]&&a(t,"width",e[40].width),2&o[0]&&a(t,"height",e[40].height)},d(e){e&&u(t),w&&w.d(),b=!1,p(x)}}}function R(e){let t;function r(e,t){return 1==e[4]?L:T}let s=r(e),l=s(e);return{c(){l.c(),t=n()},m(e,r){l.m(e,r),o(e,t,r)},p(e,n){s===(s=r(e))&&l?l.p(e,n):(l.d(1),l=s(e),l&&(l.c(),l.m(t.parentNode,t)))},d(e){l.d(e),e&&u(t)}}}function T(e){let t,r,n,l;return{c(){t=s("span"),r=s("span"),i(r,"class",n=e[40].corrspanclass),i(r,"aria-label",l=e[40].spanarialabel),a(r,"color",e[40].corrspanstyle)},m(e,n){o(e,t,n),c(t,r)},p(e,t){2&t[0]&&n!==(n=e[40].corrspanclass)&&i(r,"class",n),2&t[0]&&l!==(l=e[40].spanarialabel)&&i(r,"aria-label",l),2&t[0]&&a(r,"color",e[40].corrspanstyle)},d(e){e&&u(t)}}}function L(e){let t,r,n,l,d;return{c(){t=s("span"),r=s("span"),i(r,"class",n=e[40].spanclass),i(r,"aria-label",l=e[40].spanarialabel),a(r,"color",e[40].spanstyle),i(t,"class",d=e[3].iconVisible),a(t,"display",e[40].spandisplay)},m(e,n){o(e,t,n),c(t,r)},p(e,o){2&o[0]&&n!==(n=e[40].spanclass)&&i(r,"class",n),2&o[0]&&l!==(l=e[40].spanarialabel)&&i(r,"aria-label",l),2&o[0]&&a(r,"color",e[40].spanstyle),8&o[0]&&d!==(d=e[3].iconVisible)&&i(t,"class",d),2&o[0]&&a(t,"display",e[40].spandisplay)},d(e){e&&u(t)}}}function H(e){let t,r=e[39]==e[40].rowno&&E(e);return{c(){r&&r.c(),t=n()},m(e,n){r&&r.m(e,n),o(e,t,n)},p(e,n){e[39]==e[40].rowno?r?r.p(e,n):(r=E(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(e){r&&r.d(e),e&&u(t)}}}function G(e){let t,r,n=e[1]&&e[1].length>0&&j(e);return{c(){t=s("tr"),n&&n.c(),r=l()},m(e,s){o(e,t,s),n&&n.m(t,null),c(t,r)},p(e,o){e[1]&&e[1].length>0?n?n.p(e,o):(n=j(e),n.c(),n.m(t,r)):n&&(n.d(1),n=null)},d(e){e&&u(t),n&&n.d()}}}function N(e){let t,r,n,d,p,m,A,k,v,y,P,S,V,j=_.you_were_req_to_select+"",E=e[3].correctCount+"",R=_.grid_mark_ans_correct+"";r=new $({props:{reviewMode:e[0],handleReviewClick:e[11],customReviewMode:e[6]}}),r.$on("setReview",e[9]),r.$on("unsetReview",e[8]);let T=e[2]&&e[2].length>0&&I(e);return{c(){t=s("div"),h(r.$$.fragment),n=l(),d=s("table"),p=s("tbody"),T&&T.c(),m=l(),A=s("div"),k=f(j),v=l(),y=f(E),P=l(),S=f(R),i(d,"id","table"),i(d,"class","table-bordered shadingTable"),a(d,"pointer-events",e[0]?"none":""),i(A,"class","h mt-5 text-center"),i(A,"id","correctCountStatus"),a(A,"color",e[5]),i(t,"class","shadingPreview")},m(e,s){o(e,t,s),g(r,t,null),c(t,n),c(t,d),c(d,p),T&&T.m(p,null),c(t,m),c(t,A),c(A,k),c(A,v),c(A,y),c(A,P),c(A,S),V=!0},p(e,t){const n={};1&t[0]&&(n.reviewMode=e[0]),r.$set(n),e[2]&&e[2].length>0?T?T.p(e,t):(T=I(e),T.c(),T.m(p,null)):T&&(T.d(1),T=null),(!V||1&t[0])&&a(d,"pointer-events",e[0]?"none":""),(!V||8&t[0])&&E!==(E=e[3].correctCount+"")&&b(y,E),(!V||32&t[0])&&a(A,"color",e[5])},i(e){V||(x(r.$$.fragment,e),V=!0)},o(e){w(r.$$.fragment,e),V=!1},d(e){e&&u(t),C(r),T&&T.d()}}}P(".gridColor{width:80px;height:80px;background:#e6f2fd;border:1.5px solid #2379b2!important}.gridColor:hover{background:#fff;border:2px solid #000!important}.gridColor:focus{box-shadow:none;border:2px dotted #000!important}.gridSelected{background:#2c97de!important}.lockedGrid{pointer-events:none!important}.gridDisabled{background:#98b8cc!important;cursor:not-allowed!important}.gridDisabled:hover{background:#98b8cc!important;border:1px solid #609fc9!important}.gridCorrect{border:2px solid green!important;background:#e9ffe9!important}.gridIncorrect{border:2px solid #c85050!important;background:#ffe8e8!important}.gridNotPerformed{background:#92929294!important;border:2px solid #5d5b5b!important}.unitMarginLeft{margin-left:10px}.shadingTable{margin:10px auto;width:auto}.gridHidden{width:80px;height:80px;background:#fff;border:0 solid #fff!important;cursor:default!important}.gridHidden:hover{background:#fff;border:1px solid #fff!important;cursor:default!important}.width-authoring{width:250px}table.shadingTable{border:0!important}.width100{width:100px}.custom_checkbox_new{display:block;position:relative;width:20px;height:20px;margin-bottom:0;cursor:pointer;font-size:18px}.custom_checkbox_new input{position:absolute;z-index:-1;opacity:0}.check_mark_custom{width:17px;height:17px;position:absolute;text-align:center;top:2px;left:0;border:1px solid #d4cfcf}.custom_checkbox_new .check_mark_custom:after{content:'\\2713';color:#fff;transform:rotate(10deg);margin-top:-3px;width:13px;font-size:13px}.custom_checkbox_new input:checked~.check_mark_custom:after{display:block}.check_mark_custom:after{content:'';position:absolute}.custom_checkbox_new input:checked~.check_mark_custom{background:#4285f4;border:2px solid #a4dbfc}input:focus~.check_mark_custom{box-shadow:0 0 0 .13rem rgb(66 133 244 / 25%)}.btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}");function D(e,t,r){let n,o,s,l,c,i,a,d,{xml:u}=t,{uxml:p}=t,{isReview:m}=t,{showAns:h}=t,{editorState:f}=t,g=m,b="",x=[],w=!0,C="",$="",P=1,S={rowCount:1,colCount:4,gridWidth:80,gridHeight:80,correctAns:[],correctCount:"",userAns:[],shadedCell:[],cellLocked:!1,hiddenCell:[],smController:"h",itemLayout:[],iconVisible:"h",pointerEvents:"auto",checkLockCell:"",lockedCellValue:""};function V(e){!function(e){try{r(3,S.rowCount=e.smxml._rowCount,S),r(3,S.colCount=e.smxml._colCount,S),r(3,S.gridWidth=40*parseInt(e.smxml._cellWidth),S),r(3,S.gridHeight=40*parseInt(e.smxml._cellHeight),S),r(3,S.correctAns=e.smxml._correctAns.split(","),S),r(3,S.correctCount=e.smxml._correctCount,S),r(3,S.cellLocked=e.smxml._lockedCell,S),r(3,S.hiddenCell=e.smxml._hiddenCell,S),r(3,S.shadedCell=e.smxml._shadedCell,S),r(3,S.lockedCellValue=e.smxml._lockedCellValue,S),function(){let e=""!=S.shadedCell?"#p"+S.shadedCell.split(",").join(",#p"):"";v.selectAll(".shadingPreview .shadingTable td","removeClass",["gridSelected","lockedGrid"]),v.selectAll(".shadingPreview .shadingTable td").forEach((function(e){e.dataset.grid="no"})),""!=e&&(v.selectAll(e,"addClass","gridSelected"),v.selectAll(e).forEach((function(e){e.dataset.grid="selected"})));let t=null!=S.lockedCellValue&&""!=S.lockedCellValue?"#p"+S.lockedCellValue.split(",").join(",#p"):"";""!=t&&(v.selectAll(t,"addClass","lockedGrid"),v.selectAll(t).forEach((function(e){e.dataset.grid="selected"})))}(),p&&function(e){let t=k(e);if(r(3,S.userAns=t.smans._userAns.split(","),S),t.smans._userAns){let e="#p"+t.smans._userAns.split(",").join(",#p");v.selectAll(".shadingPreview .shadingTable td","removeClass","gridSelected"),v.selectAll(".shadingPreview .shadingTable td").forEach((function(e){e.dataset.grid="no"})),v.selectAll(e,"addClass","gridSelected"),v.selectAll(e).forEach((function(e){e.dataset.grid="selected"}))}}(p)}catch(e){console.warn({error:e.message,"function name":"parseXMLPreview","File name":"ShadingPreview.js"})}}(e=k(e))}function I(e){return 0!=S.correctAns?!!S.correctAns.includes(e):S.userAns.length==S.correctCount?(r(5,C="#136d13"),!0):(r(5,C="#c30f0f"),!1)}function j(e){let t;return 0!=S.correctAns&&(t=!(!S.correctAns.includes(e)||S.userAns.includes(e))),t}function E(e,t,r){let n="";return-1!=t.indexOf(e)&&(n+="lockedGrid "),-1!=r.indexOf(e)&&1==P&&(n+="gridSelected"),n}function R(e){let t=e.target.id;P--,v.select(".shadingPreview [id='"+t+"']").classList.contains("lockedGrid")||(v.select(".shadingPreview [id='"+t+"']").classList.contains("gridSelected")?(v.select(".shadingPreview [id='"+t+"']").setAttribute("data-grid","no"),v.selectAll(".shadingPreview [id='"+t+"']","removeClass","gridSelected")):(v.select(".shadingPreview [id='"+t+"']").setAttribute("data-grid","selected"),v.selectAll(".shadingPreview [id='"+t+"']","addClass","gridSelected")));let r=L();f||y({uXml:S.userxml,ans:r})}function T(e,t){r(3,S.iconVisible="showIcon"==t?"":"h",S),"cans"==e?r(17,x=S.correctAns):"yans"==e&&r(17,x=S.userAns)}function L(){const e=S.correctAns.length;let t=0,n=0,o="",s="";return r(3,S.userAns=[],S),v.selectAll(".shadingPreview .shadingTable .gridSelected").forEach((function(e){S.userAns.push(e.getAttribute("pevdata-id"))})),v.select("#special_module_user_xml").innerText="<smans userAns='"+S.userAns.join()+"'></smans>",r(3,S.userxml="<smans userAns='"+S.userAns.join()+"'></smans>",S),""!=S.correctAns&&(S.correctAns.map((function(e,r){S.userAns.map((function(r,n){e==r&&(t+=1)}))})),o=e==t&&t==S.userAns.length?_.correct:_.incorrect,"undefined"!=typeof calculatePoint&&calculatePoint(S.correctAns.length,t),s="Incorrect"!=o,f&&h(o)),""!=S.correctCount&&""==S.correctAns&&(S.userAns.length==S.correctCount?($=_.correct,n=S.correctCount):$=_.incorrect,"undefined"!=typeof calculatePoint&&calculatePoint(S.correctCount,n),f&&h($)),f||y({uXml:S.userxml,ans:s}),s}function H(){T("yans","hideIcon"),r(0,m=!1),""!=S.correctCount&&""==S.correctAns&&v.selectAll("#correctCountStatus","addClass","h")}function G(){T("yans","showIcon"),r(0,m=!0),L(),""!=S.correctCount&&""==S.correctAns&&v.selectAll("#correctCountStatus","removeClass","h")}return A((()=>{r(3,S.xml=u,S),r(3,S.correctAns=[],S),r(3,S.correctCount=[],S),r(3,S.shadedCell=[],S),p||r(3,S.userAns=[],S),V(u)})),e.$$set=e=>{"xml"in e&&r(12,u=e.xml),"uxml"in e&&r(13,p=e.uxml),"isReview"in e&&r(0,m=e.isReview),"showAns"in e&&r(14,h=e.showAns),"editorState"in e&&r(15,f=e.editorState)},e.$$.update=()=>{if(4132879&e.$$.dirty[0]){m?G():H(),u!=S.xml&&(r(3,S.xml=u,S),V(u)),r(2,d=[]),r(1,a=[]),r(20,c=null!=S.lockedCellValue&&""!=S.lockedCellValue?S.lockedCellValue.split(","):""),r(21,i=""!=S.shadedCell?S.shadedCell.split(","):"");for(let e=0;e<S.rowCount;e++){r(2,d=[...d,{id:"gridRow_"+e}]);for(let d=0;d<S.colCount;d++)r(18,s=e+"_"+d),""!=x?(r(19,l=x.indexOf(s)),r(16,b=-1!=l?"gridSelected":"")):r(16,b=""),r(1,a=[...a,{id:"p"+s,tabindex:"auto"==S.pointerEvents?"0":"",arialabel:"Grids row "+(e+1)+" and column "+(d+1)+" is selected",pevdata:s,class:b,width:parseInt(S.gridWidth)+"px",height:parseInt(S.gridHeight)+"px",classDetails:E(s,c,i),correctAnswerColor:(t=s,n=""==S.iconVisible&&S.userAns.includes(t)?I(t)?" gridCorrect":" gridIncorrect":"",o=""!=S.iconVisible||S.userAns.includes(t)?"":j(t)?" gridNotPerformed":"",n+=o,n),spanclass:I(s)?"icomoon-24px-correct":"icomoon-24px-close",spanarialabel:I(s)?j(s)?"marked as unattempted":"marked as correct":"marked as incorrect",spanstyle:S.userAns.includes(s)?I(s)?"#136d13":"#c30f0f":j(s)?"#222":"",spandisplay:""==S.iconVisible&&S.userAns.includes(s)||""==S.iconVisible&&!S.userAns.includes(s)&&j(s)?"block":"none",rowno:e,corrspanclass:I(s)?"icomoon-24px-correct":"",corrspanstyle:I(s)?"#136d13":""}])}}var t},[m,a,d,S,w,C,g,R,H,G,function(e){13==e.keyCode&&R(e)},function(e){"c"==e?r(4,w=!1):"u"==e&&r(4,w=!0)},u,p,h,f,b,x,s,l,c,i]}export default class extends e{constructor(e){super(),t(this,e,D,N,r,{xml:12,uxml:13,isReview:0,showAns:14,editorState:15},null,[-1,-1])}}
//# sourceMappingURL=ShadingPreview-6afa112c.js.map
