import{S as t,i as e,s as n,e as a,b as l,f as i,h as r,j as o,u as s,x as c,o as m,q as d,D as u,r as g,M as p,A as f,T as h,l as b,O as x,g as y,y as _,c as w,m as v,t as A,a as k,d as C,k as E,n as T,p as $,a6 as j,X as S,Z as M,ac as N,C as z}from"./main-664a6022.js";import{I as H}from"./ItemHelper-47d3c05f.js";import{s as L}from"./style-inject.es-1f59c1d0.js";function O(t,e,n){const a=t.slice();return a[6]=e[n],a[8]=n,a}function V(t,e,n){const a=t.slice();return a[9]=e[n],a[11]=n,a}function R(t,e,n){const a=t.slice();return a[12]=e[n],a}function q(t){let e,n,s,c,d=t[0].categories,g=[];for(let e=0;e<d.length;e+=1)g[e]=I(R(t,d,e));let p=t[1],f=[];for(let e=0;e<p.length;e+=1)f[e]=B(O(t,p,e));return{c(){e=a("table"),n=a("tbody"),s=a("tr");for(let t=0;t<g.length;t+=1)g[t].c();c=l();for(let t=0;t<f.length;t+=1)f[t].c();i(s,"class","remedcolumn height50"),i(e,"class","table"),i(e,"id","alignmatch-table")},m(t,a){r(t,e,a),o(e,n),o(n,s);for(let t=0;t<g.length;t+=1)g[t].m(s,null);o(n,c);for(let t=0;t<f.length;t+=1)f[t].m(n,null)},p(t,e){if(1&e){let n;for(d=t[0].categories,n=0;n<d.length;n+=1){const a=R(t,d,n);g[n]?g[n].p(a,e):(g[n]=I(a),g[n].c(),g[n].m(s,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=d.length}if(62&e){let a;for(p=t[1],a=0;a<p.length;a+=1){const l=O(t,p,a);f[a]?f[a].p(l,e):(f[a]=B(l),f[a].c(),f[a].m(n,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=p.length}},d(t){t&&m(e),u(g,t),u(f,t)}}}function I(t){let e,n,d,u,g,p=t[12].text+"";return{c(){e=a("td"),n=a("h3"),d=s(p),u=l(),i(n,"tabindex","0"),i(n,"class","m-0 font-italic"),i(e,"key",g=t[12].text+"_"+t[12].id),i(e,"class","steel-bg")},m(t,a){r(t,e,a),o(e,n),o(n,d),o(e,u)},p(t,n){1&n&&p!==(p=t[12].text+"")&&c(d,p),1&n&&g!==(g=t[12].text+"_"+t[12].id)&&i(e,"key",g)},d(t){t&&m(e)}}}function U(t){let e,n=t[6],a=[];for(let e=0;e<n.length;e+=1)a[e]=X(V(t,n,e));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=d()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);r(t,e,n)},p(t,l){if(54&l){let i;for(n=t[6],i=0;i<n.length;i+=1){const r=V(t,n,i);a[i]?a[i].p(r,l):(a[i]=X(r),a[i].c(),a[i].m(e.parentNode,e))}for(;i<a.length;i+=1)a[i].d(1);a.length=n.length}},d(t){u(a,t),t&&m(e)}}}function D(t){let e,n,l=t[9].label+"";return{c(){e=a("div"),i(e,"class","elementText"),i(e,"tabindex","0"),i(e,"title",n=t[9].label)},m(t,n){r(t,e,n),e.innerHTML=l},p(t,a){2&a&&l!==(l=t[9].label+"")&&(e.innerHTML=l),2&a&&n!==(n=t[9].label)&&i(e,"title",n)},d(t){t&&m(e)}}}function G(t){let e,n,l,s,c;return{c(){e=a("div"),n=a("img"),i(n,"class","imagData"),p(n.src,l="//s3.amazonaws.com/jigyaasa_content_static//"+t[9].imageurl)||i(n,"src",l),i(n,"tabindex","0"),i(n,"alt",s=t[9].imagealt),i(n,"title",c=t[9].imagealt)},m(t,a){r(t,e,a),o(e,n)},p(t,e){2&e&&!p(n.src,l="//s3.amazonaws.com/jigyaasa_content_static//"+t[9].imageurl)&&i(n,"src",l),2&e&&s!==(s=t[9].imagealt)&&i(n,"alt",s),2&e&&c!==(c=t[9].imagealt)&&i(n,"title",c)},d(t){t&&m(e)}}}function P(t){let e;function n(t,e){return t[9].imagealt&&t[9].imageurl&&""!=t[2].userAnswerArr[t[9].tags][t[11]].imageurl?J:""!=t[9].label?W:void 0}let a=n(t),l=a&&a(t);return{c(){l&&l.c(),e=d()},m(t,n){l&&l.m(t,n),r(t,e,n)},p(t,i){a===(a=n(t))&&l?l.p(t,i):(l&&l.d(1),l=a&&a(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l&&l.d(t),t&&m(e)}}}function W(t){let e,n,l=t[2].userAnswerArr[t[9].tags][t[11]].label+"";return{c(){e=a("div"),i(e,"class","elementText"),i(e,"tabindex","0"),i(e,"title",n=t[9].label)},m(t,n){r(t,e,n),e.innerHTML=l},p(t,a){6&a&&l!==(l=t[2].userAnswerArr[t[9].tags][t[11]].label+"")&&(e.innerHTML=l),2&a&&n!==(n=t[9].label)&&i(e,"title",n)},d(t){t&&m(e)}}}function J(t){let e,n,l,o;return{c(){e=a("img"),i(e,"class","imagData"),p(e.src,n="//s3.amazonaws.com/jigyaasa_content_static//"+t[2].userAnswerArr[t[9].tags][t[11]].imageurl)||i(e,"src",n),i(e,"tabindex","0"),i(e,"alt",l=t[9].imagealt),i(e,"title",o=t[9].imagealt)},m(t,n){r(t,e,n)},p(t,a){6&a&&!p(e.src,n="//s3.amazonaws.com/jigyaasa_content_static//"+t[2].userAnswerArr[t[9].tags][t[11]].imageurl)&&i(e,"src",n),2&a&&l!==(l=t[9].imagealt)&&i(e,"alt",l),2&a&&o!==(o=t[9].imagealt)&&i(e,"title",o)},d(t){t&&m(e)}}}function X(t){let e,n,s,c,d;function u(t,e){return 1==t[5]?P:t[9].imagealt&&t[9].imageurl&&""!=t[9].imageurl?G:""!=t[9].label?D:void 0}let g=u(t),p=g&&g(t);return{c(){e=a("td"),p&&p.c(),n=l(),i(e,"key",s=t[11]),i(e,"col",c=t[9].id),i(e,"class",d="position-relative "+t[4]+" align-middle column_"+(t[11]+1))},m(t,a){r(t,e,a),p&&p.m(e,null),o(e,n)},p(t,a){g===(g=u(t))&&p?p.p(t,a):(p&&p.d(1),p=g&&g(t),p&&(p.c(),p.m(e,n))),2&a&&c!==(c=t[9].id)&&i(e,"col",c),16&a&&d!==(d="position-relative "+t[4]+" align-middle column_"+(t[11]+1))&&i(e,"class",d)},d(t){t&&m(e),p&&p.d()}}}function B(t){let e,n,s,c,d=t[6]&&U(t);return{c(){e=a("tr"),d&&d.c(),n=l(),i(e,"key",s=t[8]),i(e,"class",c=t[3]+" remedcolumn row_"+(t[8]+1))},m(t,a){r(t,e,a),d&&d.m(e,null),o(e,n)},p(t,a){t[6]?d?d.p(t,a):(d=U(t),d.c(),d.m(e,n)):d&&(d.d(1),d=null),8&a&&c!==(c=t[3]+" remedcolumn row_"+(t[8]+1))&&i(e,"class",c)},d(t){t&&m(e),d&&d.d()}}}function Z(t){let e,n=t[0]&&q(t);return{c(){n&&n.c(),e=d()},m(t,a){n&&n.m(t,a),r(t,e,a)},p(t,[a]){t[0]?n?n.p(t,a):(n=q(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:g,o:g,d(t){n&&n.d(t),t&&m(e)}}}function F(t,e,n){let{jsondataCategory:a}=e,{objValues:l}=e,{state:i}=e,{correct_ans_bg:r=""}=e,{your_ans_class:o=""}=e,{user_ans_table:s}=e;return t.$$set=t=>{"jsondataCategory"in t&&n(0,a=t.jsondataCategory),"objValues"in t&&n(1,l=t.objValues),"state"in t&&n(2,i=t.state),"correct_ans_bg"in t&&n(3,r=t.correct_ans_bg),"your_ans_class"in t&&n(4,o=t.your_ans_class),"user_ans_table"in t&&n(5,s=t.user_ans_table)},[a,l,i,r,o,s]}class K extends t{constructor(t){super(),e(this,t,F,Z,n,{jsondataCategory:0,objValues:1,state:2,correct_ans_bg:3,your_ans_class:4,user_ans_table:5})}}L(".alignTestarea{user-select:none}.alignTestarea p{margin:2rem 0;font-size:1.6rem;line-height:1.5;font-weight:400;font-family:Roboto,sans-serif}.alignTestarea p:first-of-type{margin-top:3rem}.categoryinnercontainer{border:2px solid #4182b9;display:block}.card_border{background:#eee;padding-top:3px;border-radius:10px 10px 0 0;border-bottom:2px solid #ccc;width:99.5%;height:auto;margin:0 auto}.categoryitemcontainer{width:100%;position:relative}.nextbutton,.prevbutton{display:block;opacity:.8;position:relative;cursor:pointer;height:94px;color:#4182b9;text-align:center}.nextbutton:hover,.prevbutton:hover{opacity:1}.btnGrp{position:relative;top:50%}.categoryiteminnercontainer img{display:block;margin:0 auto}.matchbutton,.reset_btn{font-size:19px;padding-left:70px;padding-right:70px}.element{width:100%;height:100%;display:table-cell;vertical-align:middle}.overlay{background-color:transparent;position:relative;top:0;left:0;right:0;bottom:0;width:100%;height:100%;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in;z-index:20}.item.left{float:left}.item.clear{clear:both}.typeCorrect{background:#d1f5cb}.typeIncorrect{background:#f0cbd1}.remedcolumn{border:1px solid #000;position:relative;width:100px;height:100px;text-align:center}.categoryAuthorcontainer table{font-family:arial,sans-serif;border-collapse:unset;width:100%}.categoryAuthorcontainer table td{border:1px solid #ddd;text-align:left;padding:8px}.categoryAuthorcontainer table tr:nth-child(even){background-color:#ddd}.fileUpload{width:19px;height:24px;position:relative;left:-26px;bottom:20px}.categoryAuthorcontainer table tr td button{width:29px;height:22px}.fileUpload span{top:-5px;left:-7px}.categoryAuthorcontainer table tr td button span{left:-1px}.btn_category{width:20px;height:30px;position:relative;right:-1px;margin:6px 0 0 10px;padding:3px 0 0 7px}.btn_category span{left:-6px;top:-6px;font-size:13px}.tableContainer{overflow-x:auto}.rowContainer{width:100%;margin-bottom:8px;min-height:70px;display:inline-flex}.columnContainer{width:180px;padding:5px 8px 5px 0;min-height:70px;display:inline-flex;border:1px solid #747477;margin:0 0 6px 10px}.nextbutton img,.prevbutton img{position:relative;top:36%;width:57%}.remedcolumn td{border:1px solid #000!important;text-align:center}.elementText{padding:17px 0;font-weight:700;font-size:18px}td .elementText{line-height:normal;font-weight:700;font-size:14px;overflow:hidden;text-overflow:ellipsis;margin:0 auto}.remedcolumn .elementText.other{font-weight:400;font-size:14px}.heightmin{height:0%}.glyCorrect{color:green}.glyIncorrect{color:red}.yourAnswer table{width:100%!important;border-collapse:unset}.correctAnswer table{width:100%!important;border-collapse:unset}.text_alignmatch{min-height:56px;max-height:150px;cursor:pointer}.r-lg{-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.span9{width:700px}.wrong_ans{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translate3d(0,0,0);backface-visibility:hidden;perspective:1000px}.steel-bg{background-color:#7aa8ce;color:#fff!important}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(2px,0,0)}30%,50%,70%{transform:translate3d(-4px,0,0)}40%,60%{transform:translate3d(4px,0,0)}}.light-cyan-bg{background-color:#d4e4ff;color:#333}.add_cat_btn{transform:rotate(270deg);width:109px}.scoreDiv{overflow:auto}.height50{height:50px}.btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}");const{window:Q}=N;function Y(t,e,n){const a=t.slice();return a[36]=e[n],a[38]=n,a}function tt(t,e,n){const a=t.slice();return a[39]=e[n],a}function et(t){let e,n=t[2].xml.category.categories,a=[];for(let e=0;e<n.length;e+=1)a[e]=ot(Y(t,n,e));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=d()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);r(t,e,n)},p(t,l){if(964&l[0]){let i;for(n=t[2].xml.category.categories,i=0;i<n.length;i+=1){const r=Y(t,n,i);a[i]?a[i].p(r,l):(a[i]=ot(r),a[i].c(),a[i].m(e.parentNode,e))}for(;i<a.length;i+=1)a[i].d(1);a.length=n.length}},d(t){u(a,t),t&&m(e)}}}function nt(t){let e,n=0==t[2].correct_match["category_"+t[39].sequence]&&at(t);return{c(){n&&n.c(),e=d()},m(t,a){n&&n.m(t,a),r(t,e,a)},p(t,a){0==t[2].correct_match["category_"+t[39].sequence]?n?n.p(t,a):(n=at(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&m(e)}}}function at(t){let e,n,s,c,d;function u(t,e){return""!=t[39].imageurl?it:""!=t[39].label?lt:void 0}let g=u(t),p=g&&g(t);return{c(){e=a("div"),p&&p.c(),n=l(),i(e,"class","element bg-white m-0"),i(e,"seq_no",s="category_"+t[39].sequence),i(e,"key",c=t[39].id),i(e,"data-tags",d=t[39].tags),y(e,"display","none")},m(t,a){r(t,e,a),p&&p.m(e,null),o(e,n)},p(t,a){g===(g=u(t))&&p?p.p(t,a):(p&&p.d(1),p=g&&g(t),p&&(p.c(),p.m(e,n))),4&a[0]&&s!==(s="category_"+t[39].sequence)&&i(e,"seq_no",s),4&a[0]&&c!==(c=t[39].id)&&i(e,"key",c),4&a[0]&&d!==(d=t[39].tags)&&i(e,"data-tags",d)},d(t){t&&m(e),p&&p.d()}}}function lt(t){let e,n,l,o=t[39].label+"";return{c(){e=a("div"),i(e,"class","elementText"),i(e,"tabindex",n=0),i(e,"title",l=t[39].label)},m(t,n){r(t,e,n),e.innerHTML=o},p(t,n){4&n[0]&&o!==(o=t[39].label+"")&&(e.innerHTML=o),4&n[0]&&l!==(l=t[39].label)&&i(e,"title",l)},d(t){t&&m(e)}}}function it(t){let e,n,l,o,s,c,d,u;return{c(){e=a("img"),i(e,"data-check",n=t[38]),p(e.src,l="//s3.amazonaws.com/jigyaasa_content_static//"+t[39].imageurl)||i(e,"src",l),i(e,"class","img-fluid"),i(e,"tabindex",o=0),i(e,"alt",s=t[39].imagealt?t[39].imagealt:"No alt of image"),i(e,"title",c=t[39].imagealt?t[39].imagealt:"No alt of image")},m(n,a){r(n,e,a),d||(u=b(e,"load",t[7]),d=!0)},p(t,n){4&n[0]&&!p(e.src,l="//s3.amazonaws.com/jigyaasa_content_static//"+t[39].imageurl)&&i(e,"src",l),4&n[0]&&s!==(s=t[39].imagealt?t[39].imagealt:"No alt of image")&&i(e,"alt",s),4&n[0]&&c!==(c=t[39].imagealt?t[39].imagealt:"No alt of image")&&i(e,"title",c)},d(t){t&&m(e),d=!1,u()}}}function rt(t){let e,n=t[36].id==t[39].category&&-1==t[6].indexOf(t[39].id),a=n&&nt(t);return{c(){a&&a.c(),e=d()},m(t,n){a&&a.m(t,n),r(t,e,n)},p(t,l){4&l[0]&&(n=t[36].id==t[39].category&&-1==t[6].indexOf(t[39].id)),n?a?a.p(t,l):(a=nt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&m(e)}}}function ot(t){let e,n,s,c,d,g,p,f,h,y,w,v,A,k,C,E,T,$,j,S,M,N,z,H=t[36].text+"",L=t[2].xml.item.items,O=[];for(let e=0;e<L.length;e+=1)O[e]=rt(tt(t,L,e));return{c(){e=a("div"),n=a("div"),n.innerHTML='<span class="icomoon-arrow-left font26 btnGrp"></span>',d=l(),g=a("div"),p=a("div"),f=a("div"),w=l(),v=a("div"),A=a("div"),k=a("div");for(let t=0;t<O.length;t+=1)O[t].c();E=l(),T=a("div"),T.innerHTML='<span class="icomoon-arrow-right-2 font26 btnGrp"></span>',S=l(),i(n,"class",s="prevbutton col-lg-1 col-md-1 col-sm-2 col-2 px-sm-3 px-0 prevbutton_"+t[38]),i(n,"tabindex",c=0),i(n,"title","previous"),i(f,"class","font20 text-center text-dark"),i(f,"tabindex",h=0),i(f,"title",y=t[36].text),i(p,"class","categorytitle card_border"),i(k,"class","elementContainer w-100 h-100 d-table"),i(A,"class","categoryiteminnercontainer w-100 h-100 text-center"),i(v,"class",C="categoryitemcontainer p-1 categoryitemcontainer_"+t[38]),i(g,"class","categoryinnercontainer p-0 r-lg col-lg-10 col-md-10 col-sm-8 col-8"),i(T,"class",$="nextbutton col-md-1 col-lg-1 col-sm-2 col-2 px-sm-3 px-0 nextbutton_"+t[38]),i(T,"tabindex",j=0),i(T,"title","next"),i(e,"class","row np mb-3"),i(e,"key",M=t[38])},m(a,l){r(a,e,l),o(e,n),o(e,d),o(e,g),o(g,p),o(p,f),f.innerHTML=H,o(g,w),o(g,v),o(v,A),o(A,k);for(let t=0;t<O.length;t+=1)O[t].m(k,null);o(e,E),o(e,T),o(e,S),N||(z=[b(n,"click",x(t[8])),b(n,"keydown",ut),b(T,"click",t[9]),b(T,"keydown",ut)],N=!0)},p(t,e){if(4&e[0]&&H!==(H=t[36].text+"")&&(f.innerHTML=H),4&e[0]&&y!==(y=t[36].text)&&i(f,"title",y),196&e[0]){let n;for(L=t[2].xml.item.items,n=0;n<L.length;n+=1){const a=tt(t,L,n);O[n]?O[n].p(a,e):(O[n]=rt(a),O[n].c(),O[n].m(k,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=L.length}},d(t){t&&m(e),u(O,t),N=!1,_(z)}}}function st(t){let e,n,l,d,u=t[2].xml.settings.matchButtonText+"";return{c(){e=a("button"),n=s(u),i(e,"type","button"),i(e,"class","matchbutton btn btn-primary mb-2")},m(a,i){r(a,e,i),o(e,n),l||(d=b(e,"click",t[12]),l=!0)},p(t,e){4&e[0]&&u!==(u=t[2].xml.settings.matchButtonText+"")&&c(n,u)},d(t){t&&m(e),l=!1,d()}}}function ct(t){let e,n,s,c,d,u,g,p;return c=new K({props:{jsondataCategory:t[1].category,objValues:dt(t[5]),state:t[2],correct_ans_bg:"typeCorrect"}}),g=new K({props:{user_ans_table:"1",jsondataCategory:t[1].category,objValues:dt(t[5]),state:t[2],your_ans_class:"your_ans_td"}}),{c(){e=a("div"),n=a("div"),s=a("div"),w(c.$$.fragment),d=l(),u=a("div"),w(g.$$.fragment),i(s,"class","correctAnswer h"),i(u,"class","yourAnswer"),i(n,"class","scoreDiv"),i(e,"class","finalResult")},m(t,a){r(t,e,a),o(e,n),o(n,s),v(c,s,null),o(n,d),o(n,u),v(g,u,null),p=!0},p(t,e){const n={};2&e[0]&&(n.jsondataCategory=t[1].category),32&e[0]&&(n.objValues=dt(t[5])),4&e[0]&&(n.state=t[2]),c.$set(n);const a={};2&e[0]&&(a.jsondataCategory=t[1].category),32&e[0]&&(a.objValues=dt(t[5])),4&e[0]&&(a.state=t[2]),g.$set(a)},i(t){p||(A(c.$$.fragment,t),A(g.$$.fragment,t),p=!0)},o(t){k(c.$$.fragment,t),k(g.$$.fragment,t),p=!1},d(t){t&&m(e),C(c),C(g)}}}function mt(t){let e,n,s,c,d,u,p,x,_,$,j,S,M,N,L,O=1==f.get("alignMatchReset");h(t[20]),s=new H({props:{reviewMode:t[0],handleReviewClick:t[14]}}),s.$on("setReview",t[10]),s.$on("unsetReview",t[11]);let V=t[2].xml&&et(t),R=O&&function(t){let e,n,l;return{c(){e=a("button"),e.textContent=""+z.reset,i(e,"type","button"),i(e,"id","reset_btn"),i(e,"class","btn btn-primary me-sm-2 me-0 mb-2 reset_btn"),e.disabled="disabled"},m(a,i){r(a,e,i),n||(l=b(e,"click",t[13]),n=!0)},p:g,d(t){t&&m(e),n=!1,l()}}}(t),q=t[2].xml&&st(t),I="block"==t[4]&&ct(t);return{c(){e=a("div"),n=a("div"),w(s.$$.fragment),c=l(),d=a("div"),u=a("div"),V&&V.c(),x=l(),_=a("div"),R&&R.c(),$=l(),q&&q.c(),S=l(),I&&I.c(),i(n,"class","switchbutton"),i(u,"class",p="categorycontainer center-block "+(t[3]>1200?"span9":"")),i(_,"class","text-center"),i(d,"class",j="alignTestarea px-3 mx-auto mt-3 "+("block"==t[4]?"h":"")),y(d,"max-width",t[2].maxWidth)},m(a,l){r(a,e,l),o(e,n),v(s,n,null),o(e,c),o(e,d),o(d,u),V&&V.m(u,null),o(d,x),o(d,_),R&&R.m(_,null),o(_,$),q&&q.m(_,null),o(e,S),I&&I.m(e,null),M=!0,N||(L=b(Q,"resize",t[20]),N=!0)},p(t,n){const a={};1&n[0]&&(a.reviewMode=t[0]),s.$set(a),t[2].xml?V?V.p(t,n):(V=et(t),V.c(),V.m(u,null)):V&&(V.d(1),V=null),(!M||8&n[0]&&p!==(p="categorycontainer center-block "+(t[3]>1200?"span9":"")))&&i(u,"class",p),O&&R.p(t,n),t[2].xml?q?q.p(t,n):(q=st(t),q.c(),q.m(_,null)):q&&(q.d(1),q=null),(!M||16&n[0]&&j!==(j="alignTestarea px-3 mx-auto mt-3 "+("block"==t[4]?"h":"")))&&i(d,"class",j),(!M||4&n[0])&&y(d,"max-width",t[2].maxWidth),"block"==t[4]?I?(I.p(t,n),16&n[0]&&A(I,1)):(I=ct(t),I.c(),A(I,1),I.m(e,null)):I&&(E(),k(I,1,1,(()=>{I=null})),T())},i(t){M||(A(s.$$.fragment,t),A(I),M=!0)},o(t){k(s.$$.fragment,t),k(I),M=!1},d(t){t&&m(e),C(s),V&&V.d(),R&&R.d(),q&&q.d(),I&&I.d(),N=!1,L()}}}function dt(t){let e=[];for(let n in t)t.hasOwnProperty(n)&&e.push(t[n]);return window.prettifyContent&&prettifyContent({imgAltText:1,container:["#alignmatch-table"]}),e}function ut(t){13===t.which&&this.click()}function gt(t,e,n){let a,l,{xml:i}=e,{uxml:r}=e,{showAns:o}=e,{isReview:s}=e,{updateCSV:c}=e,{editorState:m}=e,d={},u={xml:"",content:"",settings:"",remediationState:!1,gameStatus:!1,maxWidth:"",userAnswerArr:[],imgHeight:"",idCheck:0,correct_match:[]},g={},p="none",h=[],b=!1,x=[],y=[],_=[],w=[],v=[];function A(t){n(2,u.gameStatus=!1,u),function(t){n(2,u.maxWidth=t.smxml._maxwidth?t.smxml._maxwidth:800,u),n(1,d=JSON.parse(t.smxml.__cdata)),d.item.items.forEach((function(t){y[t.id]=t})),l=d.item.items.length/d.category.categories.length,n(5,x=[]),n(2,u.correct_match=[],u),d.item.items.forEach((function(t,e){null==x[t.tags]&&(n(5,x[t.tags]=[],x),_[t.tags]=[]),x[t.tags].push(t),_[t.tags].push(t),n(2,u.correct_match["category_"+e]=!1,u),t.sequence=e}));let e=!1;if(null!=i&&""!=u.uxml&&null!=u.uxml){g=JSON.parse(u.uxml),k(),Object.keys(g.items).forEach((t=>{2==g.items[t].slice(-1)[0]&&(h[t]=!0)})),b=g.correct_attempt.length===l,b&&(f.selectAll(".alignTestarea","addClass","complete"),f.setCss(".categorycontainer",{opacity:"0.7",cursor:"not-allowed"}),f.select(".matchbutton").disabled=!0);let t,n=Object.keys(g.items);for(let e in _)for(let a in _[e])if(0==a)t=n.indexOf(_[e][a].id)>-1;else if(t){if(t){let t=_[e][0].id,n=g.items[t][a-1];_[e][a]=y[n]}}else _[e][a]={imageurl:"",label:"Unattempted"};e=!0}if(!e)for(let t in _)for(let e in _[t])e>0&&(_[t][e]={imageurl:"",imagealt:"",label:"Unattempted"});n(2,u.userAnswerArr=_,u),n(2,u.xml=d,u),T()}(t=S(t)),f.selectAll(".elementContainer").forEach((function(){let t=this;f.find(t,"img","all").forEach((function(t,e){let n=f.select(e).getAttribute("data-check");f.select(".categoryitemcontainer_"+n).height="",f.select(".prevbutton_"+n).height="",f.select(".nextbutton_"+n).height="",f.select(e).trigger("load")}))}))}function k(){let t=g.answer&&2==g.answer;if(m)o(t?"Correct":"Incorrect");else if(f.select("#answer").checked=t,!m&&u.uxml&&""!=u.uxml){let e=!!t;M({uXml:u.uxml,ans:e})}}function C(t,e){f.select(".categoryitemcontainer_"+e).style.height=t+11+"px",f.select(".prevbutton_"+e).style.height=t+50+"px",f.select(".nextbutton_"+e).style.height=t+50+"px"}function E(t){setTimeout((function(){f.selectAll(".categoryinnercontainer ","all").forEach((function(t,e){f.find(t,".element","all").forEach((function(t,e){t.setAttribute("id","element_"+(e+1)),t.style.display="none"}));let n=f.find(t,".element","all").length,a=Math.floor(Math.random()*n)+1;f.select(".categoryitemcontainer_"+e+" #element_"+a).style.display=""}))}),200),"csv"==t&&setTimeout((function(){c("csv",!1),console.log("csv Updated")}),1200)}function T(){setTimeout((function(){b||n(2,u.gameStatus=!0,u)}),200)}function N(){n(0,s=!0),n(4,p="block"),setTimeout((function(){f.selectAll(".your_ans_td:first-child").forEach((t=>{let e=t.getAttribute("col");h[e]?f.parent(t).classList.add("typeCorrect"):f.parent(t).classList.add("typeIncorrect")}),100)})),k()}function z(){n(4,p="none"),n(0,s=!1)}return $((()=>{if(n(2,u.xml=i,u),n(2,u.uxml=r,u),'<smans type="35"></smans>'!=u.uxml&&"<SMANS></SMANS>"!=u.uxml||n(2,u.uxml="",u),u.uxml&&u.uxml.includes("&useransxml=")){let t=u.uxml.replace("&useransxml=","");n(2,u.uxml=t,u)}A(i),m&&m.isCSV&&E("csv")})),j((()=>{w.length>0&&(b||w.forEach(((t,e)=>{let n=y[e].tags;x[n].slice(1).forEach(((t,e)=>{v.push(e.id)}))})))})),t.$$set=t=>{"xml"in t&&n(15,i=t.xml),"uxml"in t&&n(16,r=t.uxml),"showAns"in t&&n(17,o=t.showAns),"isReview"in t&&n(0,s=t.isReview),"updateCSV"in t&&n(18,c=t.updateCSV),"editorState"in t&&n(19,m=t.editorState)},t.$$.update=()=>{32769&t.$$.dirty[0]&&(A(i),s?(n(4,p="block"),N()):(n(4,p="none"),z(),E()))},[s,d,u,a,p,x,v,function(t){let e=t.target.getAttribute("data-check"),a=f.select(".categoryitemcontainer_"+e).style.height,l=a.substr(0,a.indexOf("p"))-11,i=t.target.naturalHeight;(""==l||null==l||isNaN(l)||l<=i)&&(n(2,u.imgHeight=i,u),C(u.imgHeight,e))},function(){if(!b){let t,e=f.nextElm(this,".categoryinnercontainer");return f.find(e,".categoryitemcontainer .categoryiteminnercontainer .element","all").forEach((function(e){"table-cell"==getComputedStyle(e,null).display&&(t=e)})),t&&f.prevElm(t)?(f.prevElm(t).style.display="",f.nextElm(f.prevElm(t)).style.display="none"):(t&&(t.style.display="none"),f.find(e,".categoryitemcontainer .categoryiteminnercontainer .element").style.display="none",f.find(e,".categoryitemcontainer .categoryiteminnercontainer .element:last-child").style.display=""),!1}},function(){if(!b){let t,e=f.prevElm(this,".categoryinnercontainer");return f.find(e,".categoryitemcontainer .categoryiteminnercontainer .element","all").forEach((function(e){"table-cell"==getComputedStyle(e,null).display&&(t=e)})),t&&f.nextElm(t)?(f.nextElm(t).style.display="",f.prevElm(f.nextElm(t)).style.display="none"):(t&&(t.style.display="none"),f.find(e,".categoryitemcontainer .categoryiteminnercontainer .element").style.display="none",f.find(e,".categoryitemcontainer .categoryiteminnercontainer .element:first-child").style.display=""),!1}},N,z,function(){if(!b){let t,e,a=this.closest(".alignTestarea"),i=[];f.find(a,".categorycontainer .categoryinnercontainer .categoryitemcontainer .categoryiteminnercontainer .element","all").forEach((function(t){"table-cell"==getComputedStyle(t,null).display&&(i=[...i,t])}));let r=null,o=null,s=null;i.forEach((function(a,l){let i;t=a.getAttribute("data-tags"),0==l&&(e=t),f.find(a,"img")?i=f.find(a,"img").getAttribute("src"):(i="",null!=f.find(a,"div")&&(i=f.find(a,"div").textContent));let c=u.xml.item.items;for(let e in c){let n=c[e];if(n.tags==t){if((n.imageurl?"//s3.amazonaws.com/jigyaasa_content_static//"+n.imageurl:n.label)==i){o=n;break}}}null==g.items&&(g.items={}),0==l?(r=t,s=o.id,g.items[s]=[]):(t!=r&&(r=null),g.items[s].push(o.id),n(2,u.userAnswerArr[e][l]={imageurl:o.imageurl,label:o.label},u))}));let c=null==r;g.items[s].push(c?0:2),g.correct_attempt=g.correct_attempt||[],c||-1!=g.correct_attempt.indexOf(s)||g.correct_attempt.push(s),h[s]=!c,n(2,u);let m=0;for(let t in g.items){2===g.items[t].slice(-1)[0]&&(m+=1)}let d=f.selectAll(".categoryiteminnercontainer:first-child .elementContainer .element").length;"undefined"!=typeof calculatePoint&&calculatePoint(d,m),g.answer=0,l===m&&(g.answer=2),b=g.correct_attempt.length===l,c?(f.select(".categorycontainer ").classList.contains("wrong_ans")&&f.selectAll(".categorycontainer","removeClass","wrong_ans"),setTimeout((function(){f.selectAll(".categorycontainer","addClass","wrong_ans")}),100),f.showmsg("Please match all the items correctly.",3e3)):(f.select("#reset_btn").disabled=!1,f.selectAll(".categoryinnercontainer ","all").forEach((function(t,e){f.find(t,".element","all").length>1?(f.find(t,".element","all").forEach((function(t){"table-cell"==getComputedStyle(t,null).display&&0!=e&&n(2,u.correct_match[t.getAttribute("seq_no")]=!0,u)})),setTimeout((function(){f.find(t,".element","all").forEach((function(t,e){t.setAttribute("id","element_"+(e+1)),t.style.display="none"}));let n=f.find(t,".element","all").length,a=Math.floor(Math.random()*n)+1;f.select(".categoryitemcontainer_"+e+" #element_"+a).style.display=""}),100)):(f.setCss(".categorycontainer",{opacity:"0.7",cursor:"not-allowed"}),f.selectAll(".categorycontainer","addClass","complete"),f.setCss(".nextbutton",{"pointer-events":"none"}),f.setCss(".prevbutton",{"pointer-events":"none"}),f.select(".matchbutton").disabled=!0,f.alert("Game Completed!!"),k())}))),T(),ISSPECIALMODULEUSERXMLCHANGE=1,n(2,u.uxml=JSON.stringify(g),u),f.select("#special_module_user_xml").value=JSON.stringify(g)}},function(){g={},h=[],b=!1,n(5,x=[]),f.selectAll(".categorycontainer","removeClass","complete"),f.setCss(".categorycontainer",{opacity:"1",cursor:"pointer"}),f.setCss(".nextbutton",{"pointer-events":"auto"}),f.setCss(".prevbutton",{"pointer-events":"auto"}),f.select(".matchbutton").disabled=!1,n(2,u.uxml="",u),n(2,u.xml="",u),n(2,u.correct_match=[],u),A(i);const t=f.selectAll(".categoryitemcontainer .categoryiteminnercontainer .elementContainer");t&&t.length&&t.forEach((t=>{const e=f.findChild(t,".element","all");if(e&&t.length){e.forEach((t=>t.style.display="none"));e[Math.round(Math.random()*e.length)-1].style.display=""}})),f.select("#reset_btn").disabled=!0},function(t){"c"==t?(f.select(".correctAnswer","removeClass","h"),f.select(".yourAnswer","css",{display:"none"})):"u"==t&&(f.select(".yourAnswer","css",{display:"block"}),f.select(".correctAnswer","addClass","h"))},i,r,o,c,m,function(){n(3,a=Q.innerWidth)}]}export default class extends t{constructor(t){super(),e(this,t,gt,mt,n,{xml:15,uxml:16,showAns:17,isReview:0,updateCSV:18,editorState:19},null,[-1,-1])}}
//# sourceMappingURL=AlignMatchPreview-2dbb064d.js.map
