import{S as e,i as s,s as a,e as n,C as t,f as l,h as i,j as r,r as d,o,u as c,b as u,l as m,x as p,q as f,c as v,m as x,t as _,a as w,d as k,D as h,p as y,X as g,R as b}from"./main-ac89e9fe.js";import{I as $}from"./ItemHelper-6d042fa0.js";function I(e,s,a){const n=e.slice();return n[20]=s[a],n[22]=a,n}function A(e){let s,a;return{c(){s=n("div"),a=n("span"),a.textContent=""+t.oops_msg,l(s,"class","alert alert-danger font-weight-bold")},m(e,n){i(e,s,n),r(s,a)},p:d,d(e){e&&o(s)}}}function S(e){let s;function a(e,s){return e[20].anskey==e[3].datauserans[e[20].sliderid]?M:R}let n=a(e),t=n(e);return{c(){t.c(),s=f()},m(e,a){t.m(e,a),i(e,s,a)},p(e,l){n!==(n=a(e))&&(t.d(1),t=n(e),t&&(t.c(),t.m(s.parentNode,s)))},d(e){t.d(e),e&&o(s)}}}function R(e){let s;return{c(){s=n("span"),s.innerHTML='<span class="icomoon-new-24px-cancel-circle-1 font-weight-bold text-danger"></span>',l(s,"class","correct_incorrect_icon_fill position-absolute")},m(e,a){i(e,s,a)},d(e){e&&o(s)}}}function M(e){let s;return{c(){s=n("span"),s.innerHTML='<span class="icomoon-new-24px-checkmark-circle-1 font-weight-bold text-success"></span>',l(s,"class","correct_incorrect_icon_fill position-absolute")},m(e,a){i(e,s,a)},d(e){e&&o(s)}}}function C(e){let s,a,l,d,u=t.correct_val+"",m=e[20].anskey+"";return{c(){s=n("span"),a=c(u),l=c(": "),d=c(m)},m(e,n){i(e,s,n),r(s,a),r(s,l),r(s,d)},p(e,s){2&s&&m!==(m=e[20].anskey+"")&&p(d,m)},d(e){e&&o(s)}}}function H(e){let s,a,l,d,u=t.current_val+"",m=(0==e[3].datauserans[e[20].sliderid]||null==e[3].datauserans[e[20].sliderid]?e[20].defaultans:e[3].datauserans[e[20].sliderid])+"";return{c(){s=n("span"),a=c(u),l=c(": "),d=c(m)},m(e,n){i(e,s,n),r(s,a),r(s,l),r(s,d)},p(e,s){10&s&&m!==(m=(0==e[3].datauserans[e[20].sliderid]||null==e[3].datauserans[e[20].sliderid]?e[20].defaultans:e[3].datauserans[e[20].sliderid])+"")&&p(d,m)},d(e){e&&o(s)}}}function L(e){let s,a,d,f,v,x,_,w,k,h,y,g,b,$,I,A,R,M,L,j,E,N,X,P,T,U,D,q,F,G,O,z,B,J,K=e[20].title_val+"",Q=t.min_val+"",V=e[20].minval+"",W=t.max_val+"",Y=e[20].maxval+"",Z="block"==e[4]&&1==e[2]&&S(e);function ee(e,s){return"block"!=e[4]||0!=e[2]?H:C}let se=ee(e),ae=se(e);return{c(){s=n("div"),a=n("div"),d=n("span"),f=c(K),v=u(),x=n("div"),_=n("input"),$=u(),Z&&Z.c(),I=u(),A=n("div"),R=n("div"),M=n("span"),L=c(Q),j=c(": "),E=c(V),N=u(),X=n("div"),P=n("div"),ae.c(),T=u(),U=n("div"),D=n("span"),q=c(W),F=c(": "),G=c(Y),O=u(),l(a,"class","slider_heading_test text-start text-white bg-primary"),l(a,"tabindex","0"),l(_,"id",w=e[20].sliderid),l(_,"type","range"),l(_,"name","sliderrange"),l(_,"min",k=e[20].minval),l(_,"max",h=e[20].maxval),l(_,"step",y=e[20].step_val),l(_,"class","slideritem"),_.value=g="block"==e[4]&&0==e[2]?parseInt(e[20].anskey):0==e[3].datauserans[e[20].sliderid]||null==e[3].datauserans[e[20].sliderid]?parseInt(e[20].defaultans):parseInt(e[3].datauserans[e[20].sliderid]),_.disabled=b="block"==e[4],l(_,"tabindex","0"),l(R,"class","minRange float-start col px-0 text-start"),l(R,"tabindex","0"),l(P,"class","current_val"),l(X,"class","rangevalue col px-0"),l(X,"tabindex","0"),l(U,"class","max_val float-end col px-0 text-end"),l(U,"tabindex","0"),l(A,"class","range_details mt-2 row mx-0"),l(x,"class","col-md-12 select_slider_test w-100 pt-3 px-3 pb-2"),l(s,"key",z=e[22]),l(s,"class","clearfix slider_container my-3 rounded w-100")},m(n,t){i(n,s,t),r(s,a),r(a,d),r(d,f),r(s,v),r(s,x),r(x,_),r(x,$),Z&&Z.m(x,null),r(x,I),r(x,A),r(A,R),r(R,M),r(M,L),r(M,j),r(M,E),r(A,N),r(A,X),r(X,P),ae.m(P,null),r(A,T),r(A,U),r(U,D),r(D,q),r(D,F),r(D,G),r(s,O),B||(J=m(_,"input",e[6]),B=!0)},p(e,s){2&s&&K!==(K=e[20].title_val+"")&&p(f,K),2&s&&w!==(w=e[20].sliderid)&&l(_,"id",w),2&s&&k!==(k=e[20].minval)&&l(_,"min",k),2&s&&h!==(h=e[20].maxval)&&l(_,"max",h),2&s&&y!==(y=e[20].step_val)&&l(_,"step",y),30&s&&g!==(g="block"==e[4]&&0==e[2]?parseInt(e[20].anskey):0==e[3].datauserans[e[20].sliderid]||null==e[3].datauserans[e[20].sliderid]?parseInt(e[20].defaultans):parseInt(e[3].datauserans[e[20].sliderid]))&&(_.value=g),16&s&&b!==(b="block"==e[4])&&(_.disabled=b),"block"==e[4]&&1==e[2]?Z?Z.p(e,s):(Z=S(e),Z.c(),Z.m(x,I)):Z&&(Z.d(1),Z=null),2&s&&V!==(V=e[20].minval+"")&&p(E,V),se===(se=ee(e))&&ae?ae.p(e,s):(ae.d(1),ae=se(e),ae&&(ae.c(),ae.m(P,null))),2&s&&Y!==(Y=e[20].maxval+"")&&p(G,Y)},d(e){e&&o(s),Z&&Z.d(),ae.d(),B=!1,J()}}}function j(e){let s,a,t,d,c,m,p,f,y,g,b=""!=e[5]&&A();m=new $({props:{reviewMode:e[0],handleReviewClick:e[9]}}),m.$on("setReview",e[7]),m.$on("unsetReview",e[8]);let S=e[1],R=[];for(let s=0;s<S.length;s+=1)R[s]=L(I(e,S,s));return{c(){s=n("link"),t=u(),b&&b.c(),d=u(),c=n("div"),v(m.$$.fragment),p=u(),f=n("div"),y=n("div");for(let e=0;e<R.length;e+=1)R[e].c();l(s,"onload","this.rel='stylesheet'"),l(s,"rel","preload"),l(s,"as","style"),l(s,"href",a=window.baseUrlTheme+"clsSMSlider/css/slider.min.css"),l(y,"class","slider_item_container"),l(f,"id","slidermain"),l(c,"class","text-center")},m(e,a){i(e,s,a),i(e,t,a),b&&b.m(e,a),i(e,d,a),i(e,c,a),x(m,c,null),r(c,p),r(c,f),r(f,y);for(let e=0;e<R.length;e+=1)R[e].m(y,null);g=!0},p(e,[s]){""!=e[5]?b?b.p(e,s):(b=A(),b.c(),b.m(d.parentNode,d)):b&&(b.d(1),b=null);const a={};if(1&s&&(a.reviewMode=e[0]),m.$set(a),94&s){let a;for(S=e[1],a=0;a<S.length;a+=1){const n=I(e,S,a);R[a]?R[a].p(n,s):(R[a]=L(n),R[a].c(),R[a].m(y,null))}for(;a<R.length;a+=1)R[a].d(1);R.length=S.length}},i(e){g||(_(m.$$.fragment,e),g=!0)},o(e){w(m.$$.fragment,e),g=!1},d(e){e&&o(s),e&&o(t),b&&b.d(e),e&&o(d),e&&o(c),k(m),h(R,e)}}}function E(e){if(0==Array.isArray(e)){let s=e;(e=[])[0]=s}return e}function N(e,s,a){let n,t,{xml:l}=s,{uxml:i}=s,{showAns:r}=s,{isReview:d}=s,{editorState:o}=s,c=[],u=!0,m={datauserans:{}},p="none",f="";function v(e){!function(e){try{let s=e.smxml.slider;a(1,c=[]),s&&0==Array.isArray(s)&&(s=[],s[0]=e.smxml.slider);for(let e=0;e<s.length;e++)c.push({sliderid:s[e]._key,anskey:s[e]._anskey,title_val:s[e]._title,step_val:s[e]._step,defaultans:s[e]._defaultans,defaultans_id:"defaultans"+s[e]._key,title_id:"title"+s[e]._key,step_id:"step"+s[e]._key,sliderans:"slider"+s[e]._key,remove_item:"remove_item"+s[e]._key,minid:"min"+s[e]._key,maxid:"max"+s[e]._key,sliderop:"sliderop"+s[e]._key,minval:s[e]._minmax.split(",")[0],maxval:s[e]._minmax.split(",")[1]})}catch(e){a(5,f=e),console.log({error:e,function:"parseXMLPreview",File:"SliderItemPreview.js"})}}(e=g(e))}function x(){let e=function(){ISSPECIALMODULEUSERXMLCHANGE=1,n="<smans type='30'>",t=!0,c.map((function(e){a(3,m.datauserans[e.sliderid]=void 0===m.datauserans[e.sliderid]?e.defaultans:m.datauserans[e.sliderid],m),parseInt(e.anskey)!=parseInt(m.datauserans[e.sliderid])&&(t=!1),n+="<slider id='"+e.sliderid+"' userAns='"+m.datauserans[e.sliderid]+"'></slider>"})),n+="</smans>",o||b({uXml:n,ans:t});return t?"Correct":"Incorrect"}();o&&r(e)}function _(){a(4,p="block"),a(0,d=!0)}return y((()=>{v(l),window.inNative&&window.getHeight&&window.getHeight()})),e.$$set=e=>{"xml"in e&&a(10,l=e.xml),"uxml"in e&&a(11,i=e.uxml),"showAns"in e&&a(12,r=e.showAns),"isReview"in e&&a(0,d=e.isReview),"editorState"in e&&a(13,o=e.editorState)},e.$$.update=()=>{if(3083&e.$$.dirty&&(d?(a(4,p="block"),x(),_()):a(4,p="none"),l!=m.xml)){let e,s;a(3,m.xml=l,m),v(l),e=g(""==l?m.xml:l),s=g(m.xml);let n=E(e.smxml.slider),t=E(s.smxml.slider);if(n.map((function(e,s){null!=t[s]&&e._defaultans!=t[s]._defaultans&&a(3,m.datauserans[e._key]=t[s]._defaultans,m)})),i){let e;e=g(i),void 0!==e.smans.slider&&c.map((function(s,n){a(3,m.datauserans[s.sliderid]=e.smans.slider[n]._userAns,m)}))}}},[d,c,u,m,p,f,function(){a(3,m.datauserans[this.id]=this.value,m),a(3,m),a(0,d),a(10,l),a(11,i),a(1,c),x()},_,function(){a(4,p="none"),a(0,d=!1)},function(e){"c"==e?a(2,u=!1):"u"==e&&a(2,u=!0)},l,i,r,o]}export default class extends e{constructor(e){super(),s(this,e,N,j,a,{xml:10,uxml:11,showAns:12,isReview:0,editorState:13})}}
//# sourceMappingURL=SliderItemPreview-ad80813c.js.map