import{S as t,i as e,s as n,F as o,e as s,j as i,b as r,f as a,h as l,l as c,r as d,o as b,y as u,Y as m}from"./main-5a2bbeeb.js";const{document:p}=o;function v(t){let e,n,o,m,p,v;return{c(){e=s("div"),n=s("button"),n.textContent="Correct Answer",o=r(),m=s("button"),m.textContent="Your Answer",a(n,"tabindex","0"),a(n,"type","button"),a(n,"mode","c"),a(n,"class","btn btn-light correct-ans"),a(m,"tabindex","0"),a(m,"type","button"),a(m,"mode","u"),a(m,"class","btn btn-light your-ans active"),a(e,"class","smControlerBtn btn-group mb-3"),a(e,"role","group"),a(e,"aria-label","Answer buttons")},m(s,r){l(s,e,r),i(e,n),i(e,o),i(e,m),p||(v=[c(n,"click",t[2]),c(m,"click",t[2])],p=!0)},p:d,d(t){t&&b(e),p=!1,u(v)}}}function w(t){let e,n,o,m,p,w,h,f=t[0]&&v(t);return{c(){e=s("center"),n=s("button"),o=r(),m=s("button"),p=r(),f&&f.c(),a(n,"tabindex","0"),a(n,"type","button"),a(n,"class","h h-imp"),a(n,"id","set-review"),a(m,"tabindex","0"),a(m,"type","button"),a(m,"class","h h-imp"),a(m,"id","unset-review")},m(s,r){l(s,e,r),i(e,n),i(e,o),i(e,m),i(e,p),f&&f.m(e,null),w||(h=[c(n,"click",t[4]),c(m,"click",t[5])],w=!0)},p(t,[n]){t[0]?f?f.p(t,n):(f=v(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:d,o:d,d(t){t&&b(e),f&&f.d(),w=!1,u(h)}}}function h(t,e,n){let{reviewMode:o=!1}=e,{handleReviewClick:s}=e;const i=m();return t.$$set=t=>{"reviewMode"in t&&n(0,o=t.reviewMode),"handleReviewClick"in t&&n(3,s=t.handleReviewClick)},[o,i,function(t){document.querySelectorAll(".smControlerBtn button").forEach((t=>t.classList.remove("active"))),t.target.classList.add("active"),s&&s(t.target.getAttribute("mode"),t)},s,()=>i("setReview"),()=>i("unsetReview")]}class f extends t{constructor(t){var o;super(),p.getElementById("svelte-ri6gyf-style")||((o=s("style")).id="svelte-ri6gyf-style",o.textContent=".smControlerBtn .btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}",i(p.head,o)),e(this,t,h,w,n,{reviewMode:0,handleReviewClick:3})}}export{f as I};
//# sourceMappingURL=ItemHelper-8a464338.js.map
