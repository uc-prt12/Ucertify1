import{S as e,i as t,s as n,q as s,h as i,r as a,o as r,e as l,u as o,b as c,f as p,g as d,j as u,l as f,v,x as g,y as h,z as w,B as m,C as b,D as x}from"./main-1f82e079.js";function _(e,t,n){const s=e.slice();return s[13]=t[n],s[10]=n,s}function k(e,t,n){const s=e.slice();return s[11]=t[n],s[10]=n,s}function y(e,t,n){const s=e.slice();return s[8]=t[n],s[10]=n,s}function M(e){let t,n=[],s=new Map,a=e[1];const o=e=>e[13].id;for(let t=0;t<a.length;t+=1){let i=_(e,a,t),r=o(i);s.set(r,n[t]=O(r,i))}return{c(){t=l("div");for(let e=0;e<n.length;e+=1)n[e].c();p(t,"class","mb-xl clear-both ml-lg overflow"),p(t,"id","user_answer")},m(e,s){i(e,t,s);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,i){63&i&&(a=e[1],n=w(n,i,o,1,e,a,s,t,m,O,null,_))},d(e){e&&r(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function U(e){let t;let n=(1==preview_edit&&AI.get("get_parent_guid")?A:C)(e);return{c(){n.c(),t=s()},m(e,s){n.m(e,s),i(e,t,s)},p(e,t){n.p(e,t)},d(e){n.d(e),e&&r(t)}}}function O(e,t){let n,s,a,w,m,b,x,_,k,y,M,U,O,C,A,H,L,T,j,I,$,q,z,B,D,N,S,E,F,G=t[0][t[10]]+"",J=t[13].answer+"";return{key:e,first:null,c(){n=l("span"),s=l("section"),a=l("div"),w=l("div"),m=l("div"),b=l("label"),x=l("div"),_=o(G),y=c(),M=l("div"),U=l("input"),j=c(),I=l("div"),$=l("div"),q=l("div"),B=c(),D=l("div"),D.innerHTML='<i class="icomoon-new-24px-delete-1 s3"></i>',N=c(),p(x,"class","ansoptlabel form-control ansopt"),p(x,"value",k=t[0][t[10]]),p(U,"tabindex","0"),p(U,"type",O=t[3]<1?"radio":"checkbox"),U.checked=C=1==t[13].is_correct,p(U,"class","answer_radio"),p(U,"id",A="userans-"+t[0][t[10]]),p(U,"name","userans[]"),U.value=H=t[0][t[10]],p(M,"class","ansoptinput input-group-text"),p(M,"tabindex","0"),p(b,"access-key",L=t[0][t[10]]),p(b,"class","d-flex"),p(b,"for",T="userans-"+t[0][t[10]]),p(m,"class","input-group"),p(w,"class","span1 float-left"),p(q,"id",z="option"+t[10]),p(q,"class","ebook_item_text auth-editor pt-2"),p($,"class","answer"),p(I,"class","printer"),p(D,"class","float-right delete_element mr-1 position-relative"),d(D,"bottom","32px"),p(D,"tabindex","0"),d(a,"min-height","46px"),p(a,"class","option"),p(s,"class","answer_container"),p(n,"key",S=t[13].id),p(n,"anscounter","0"),this.first=n},m(e,r){i(e,n,r),u(n,s),u(s,a),u(a,w),u(w,m),u(m,b),u(b,x),u(x,_),u(b,y),u(b,M),u(M,U),u(a,j),u(a,I),u(I,$),u($,q),q.innerHTML=J,u(a,B),u(a,D),u(n,N),E||(F=[f(U,"click",(function(){v(t[4].bind(this,t[10]))&&t[4].bind(this,t[10]).apply(this,arguments)})),f(q,"blur",(function(){v(t[2].bind(this,t[10]))&&t[2].bind(this,t[10]).apply(this,arguments)})),f(D,"click",(function(){v(t[5].bind(this,t[10]))&&t[5].bind(this,t[10]).apply(this,arguments)}))],E=!0)},p(e,s){t=e,3&s&&G!==(G=t[0][t[10]]+"")&&g(_,G),3&s&&k!==(k=t[0][t[10]])&&p(x,"value",k),8&s&&O!==(O=t[3]<1?"radio":"checkbox")&&p(U,"type",O),2&s&&C!==(C=1==t[13].is_correct)&&(U.checked=C),3&s&&A!==(A="userans-"+t[0][t[10]])&&p(U,"id",A),3&s&&H!==(H=t[0][t[10]])&&U.value!==H&&(U.value=H),3&s&&L!==(L=t[0][t[10]])&&p(b,"access-key",L),3&s&&T!==(T="userans-"+t[0][t[10]])&&p(b,"for",T),2&s&&J!==(J=t[13].answer+"")&&(q.innerHTML=J),2&s&&z!==(z="option"+t[10])&&p(q,"id",z),2&s&&S!==(S=t[13].id)&&p(n,"key",S)},d(e){e&&r(n),E=!1,h(F)}}}function C(e){let t,n=[],s=new Map,a=e[1];const o=e=>e[11].id;for(let t=0;t<a.length;t+=1){let i=k(e,a,t),r=o(i);s.set(r,n[t]=H(r,i))}return{c(){t=l("div");for(let e=0;e<n.length;e+=1)n[e].c();p(t,"class","mb-xl ml-lg overflow"),p(t,"id","user_answer")},m(e,s){i(e,t,s);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,i){75&i&&(a=e[1],n=w(n,i,o,1,e,a,s,t,m,H,null,k))},d(e){e&&r(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function A(e){let t,n,s,a,o,d,v,g,h,w,m,_,k,M=e[1],U=[];for(let t=0;t<M.length;t+=1)U[t]=L(y(e,M,t));return{c(){t=l("div"),n=l("section"),s=l("div"),a=l("div"),o=l("div"),d=l("b"),d.textContent=""+b.parent_guid_found,v=c(),g=l("div"),h=l("button"),h.textContent=""+b.yes_label,w=c(),m=l("div");for(let e=0;e<U.length;e+=1)U[e].c();p(o,"class","float-left mt"),p(h,"tabindex","0"),p(h,"id","show_parent_guid"),p(h,"name","show_parent_guid"),p(h,"class","btn btn-primary width90"),p(g,"class","float-right ml-lg-auto"),p(a,"class","row mx-0"),p(s,"tabindex","0"),p(s,"class","alert alert-primary mb-lg "),p(s,"id","open_test_session"),p(s,"role","alert"),p(n,"id","warning_label_container"),p(n,"class","w-100"),p(m,"class","mb-xl ml-lg overflow"),p(m,"id","user_answer")},m(e,r){i(e,t,r),u(t,n),u(n,s),u(s,a),u(a,o),u(o,d),u(a,v),u(a,g),u(g,h),u(t,w),u(t,m);for(let e=0;e<U.length;e+=1)U[e].m(m,null);_||(k=f(h,"click",j),_=!0)},p(e,t){if(75&t){let n;for(M=e[1],n=0;n<M.length;n+=1){const s=y(e,M,n);U[n]?U[n].p(s,t):(U[n]=L(s),U[n].c(),U[n].m(m,null))}for(;n<U.length;n+=1)U[n].d(1);U.length=M.length}},d(e){e&&r(t),x(U,e),_=!1,k()}}}function H(e,t){let n,s,a,f,v,h,w,m,b,x,_,k,y,M,U,O,C,A,H,L,T,j,I,$,q=t[0][t[10]]+"",z=t[11].answer+"";return{key:e,first:null,c(){n=l("span"),s=l("section"),a=l("label"),f=l("div"),v=l("div"),h=l("label"),w=l("div"),m=o(q),x=c(),_=l("div"),k=l("input"),H=c(),L=l("div"),T=l("div"),I=c(),p(w,"class","ansoptlabel form-control ansopt"),p(w,"value",b=t[0][t[10]]),p(k,"type",y=t[3]<=1?"radio":"checkbox"),p(k,"class","answer_radio"),p(k,"id",M="pUserans-"+t[0][t[10]]),p(k,"name","userans[]"),k.value=U=t[0][t[10]],p(_,"tabindex","0"),p(_,"class",O=1==t[6]&&1==t[11].is_correct?"ansoptinput input-group-text active":"ansoptinput input-group-text"),p(h,"for",C="pUserans-"+t[0][t[10]]),p(h,"access-key",A=t[0][t[10]]),p(h,"class","d-flex"),p(v,"class","input-group"),p(f,"class","span1 float-left"),p(T,"class","answer"),d(T,"min-height","21px"),p(L,"class","printer"),p(a,"for",j="pUserans-"+t[0][t[10]]),p(a,"class","option glow"),p(s,"class","answer_container"),p(n,"key",$=t[11].id),p(n,"anscounter","0"),this.first=n},m(e,t){i(e,n,t),u(n,s),u(s,a),u(a,f),u(f,v),u(v,h),u(h,w),u(w,m),u(h,x),u(h,_),u(_,k),u(a,H),u(a,L),u(L,T),T.innerHTML=z,u(n,I)},p(e,s){t=e,3&s&&q!==(q=t[0][t[10]]+"")&&g(m,q),3&s&&b!==(b=t[0][t[10]])&&p(w,"value",b),8&s&&y!==(y=t[3]<=1?"radio":"checkbox")&&p(k,"type",y),3&s&&M!==(M="pUserans-"+t[0][t[10]])&&p(k,"id",M),3&s&&U!==(U=t[0][t[10]])&&k.value!==U&&(k.value=U),66&s&&O!==(O=1==t[6]&&1==t[11].is_correct?"ansoptinput input-group-text active":"ansoptinput input-group-text")&&p(_,"class",O),3&s&&C!==(C="pUserans-"+t[0][t[10]])&&p(h,"for",C),3&s&&A!==(A=t[0][t[10]])&&p(h,"access-key",A),2&s&&z!==(z=t[11].answer+"")&&(T.innerHTML=z),3&s&&j!==(j="pUserans-"+t[0][t[10]])&&p(a,"for",j),2&s&&$!==($=t[11].id)&&p(n,"key",$)},d(e){e&&r(n)}}}function L(e){let t,n,s,a,f,v,h,w,m,b,x,_,k,y,M,U,O,C,A,H,L,T,j,I,$=e[0][e[10]]+"",q=e[8].answer+"";return{c(){t=l("span"),n=l("section"),s=l("label"),a=l("div"),f=l("div"),v=l("label"),h=l("div"),w=o($),b=c(),x=l("div"),_=l("input"),A=c(),H=l("div"),L=l("div"),T=o(q),I=c(),p(h,"class","ansoptlabel form-control ansopt"),p(h,"value",m=e[0][e[10]]),p(_,"type",k=e[3]<=1?"radio":"checkbox"),p(_,"class","answer_radio"),p(_,"id",y="pUserans-"+e[0][e[10]]),p(_,"name","userans[]"),_.value=M=e[0][e[10]],p(x,"tabindex","0"),p(x,"class",U=1==e[6]&&1==e[8].is_correct?"ansoptinput input-group-text active":"ansoptinput input-group-text"),p(v,"for",O="pUserans-"+e[0][e[10]]),p(v,"access-key",C=e[0][e[10]]),p(v,"class","d-flex"),p(f,"class","input-group"),p(a,"class","span1 float-left"),p(L,"class","answer"),d(L,"min-height","21px"),p(H,"class","printer"),p(s,"for",j="pUserans-"+e[0][e[10]]),p(s,"class","option glow"),p(n,"class","answer_container"),p(t,"anscounter","0")},m(e,r){i(e,t,r),u(t,n),u(n,s),u(s,a),u(a,f),u(f,v),u(v,h),u(h,w),u(v,b),u(v,x),u(x,_),u(s,A),u(s,H),u(H,L),u(L,T),u(t,I)},p(e,t){1&t&&$!==($=e[0][e[10]]+"")&&g(w,$),1&t&&m!==(m=e[0][e[10]])&&p(h,"value",m),8&t&&k!==(k=e[3]<=1?"radio":"checkbox")&&p(_,"type",k),1&t&&y!==(y="pUserans-"+e[0][e[10]])&&p(_,"id",y),1&t&&M!==(M=e[0][e[10]])&&_.value!==M&&(_.value=M),66&t&&U!==(U=1==e[6]&&1==e[8].is_correct?"ansoptinput input-group-text active":"ansoptinput input-group-text")&&p(x,"class",U),1&t&&O!==(O="pUserans-"+e[0][e[10]])&&p(v,"for",O),1&t&&C!==(C=e[0][e[10]])&&p(v,"access-key",C),2&t&&q!==(q=e[8].answer+"")&&g(T,q),1&t&&j!==(j="pUserans-"+e[0][e[10]])&&p(s,"for",j)},d(e){e&&r(t)}}}function T(e){let t;function n(e,t){return e[7]?U:M}let l=n(e),o=l(e);return{c(){o.c(),t=s()},m(e,n){o.m(e,n),i(e,t,n)},p(e,[s]){l===(l=n(e))&&o?o.p(e,s):(o.d(1),o=l(e),o&&(o.c(),o.m(t.parentNode,t)))},i:a,o:a,d(e){o.d(e),e&&r(t)}}}function j(){let e=baseUrl+"editor/?action=edit&content_guid="+AI.get("get_parent_guid")+"&no_header=1&react_content=1&no_domain=1";window.open(e,"_blank")}function I(e,t,n){let{letters:s}=t,{data:i}=t,{editOption:a}=t,{correctAnswers:r}=t,{toggleChecked:l}=t,{deleteOption:o}=t,{reviewMode:c=!1}=t,{previewMode:p=!1}=t;return e.$$set=e=>{"letters"in e&&n(0,s=e.letters),"data"in e&&n(1,i=e.data),"editOption"in e&&n(2,a=e.editOption),"correctAnswers"in e&&n(3,r=e.correctAnswers),"toggleChecked"in e&&n(4,l=e.toggleChecked),"deleteOption"in e&&n(5,o=e.deleteOption),"reviewMode"in e&&n(6,c=e.reviewMode),"previewMode"in e&&n(7,p=e.previewMode)},[s,i,a,r,l,o,c,p]}class $ extends e{constructor(e){super(),t(this,e,I,T,n,{letters:0,data:1,editOption:2,correctAnswers:3,toggleChecked:4,deleteOption:5,reviewMode:6,previewMode:7})}}export{$ as O};
//# sourceMappingURL=OptionContainer-97ae492e.js.map
