import{S as t,i as e,s as o,F as s,e as n,b as i,f as r,h as a,j as c,l,r as d,o as u,y as b,$ as m}from"./main-ebbb55b4.js";function v(t){s(t,"svelte-ri6gyf",".smControlerBtn .btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}")}function p(t){let e,o,s,m,v,p;return{c(){e=n("div"),o=n("button"),o.textContent="Correct Answer",s=i(),m=n("button"),m.textContent="Your Answer",r(o,"tabindex","0"),r(o,"type","button"),r(o,"mode","c"),r(o,"class","btn btn-light correct-ans svelte_items_test"),r(m,"tabindex","0"),r(m,"type","button"),r(m,"mode","u"),r(m,"class","btn btn-light your-ans active svelte_items_test"),r(e,"class","smControlerBtn btn-group mb-3"),r(e,"role","group"),r(e,"aria-label","Answer buttons")},m(n,i){a(n,e,i),c(e,o),c(e,s),c(e,m),v||(p=[l(o,"click",t[3]),l(m,"click",t[3])],v=!0)},p:d,d(t){t&&u(e),v=!1,b(p)}}}function w(t){let e,o,s,m,v,w,f,h=(t[0]||t[1])&&p(t);return{c(){e=n("center"),o=n("button"),s=i(),m=n("button"),v=i(),h&&h.c(),r(o,"tabindex","0"),r(o,"type","button"),r(o,"class","h h-imp svelte_items_test"),r(o,"id","set-review"),r(m,"tabindex","0"),r(m,"type","button"),r(m,"class","h h-imp svelte_items_test"),r(m,"id","unset-review")},m(n,i){a(n,e,i),c(e,o),c(e,s),c(e,m),c(e,v),h&&h.m(e,null),w||(f=[l(o,"click",t[5]),l(m,"click",t[6])],w=!0)},p(t,[o]){t[0]||t[1]?h?h.p(t,o):(h=p(t),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},i:d,o:d,d(t){t&&u(e),h&&h.d(),w=!1,b(f)}}}function f(t,e,o){let{reviewMode:s=!1}=e,{handleReviewClick:n}=e,{customReviewMode:i}=e;console.log("customReviewMode",i);const r=m();return t.$$set=t=>{"reviewMode"in t&&o(0,s=t.reviewMode),"handleReviewClick"in t&&o(4,n=t.handleReviewClick),"customReviewMode"in t&&o(1,i=t.customReviewMode)},[s,i,r,function(t){document.querySelectorAll(".smControlerBtn button").forEach((t=>t.classList.remove("active"))),t.target.classList.add("active"),n&&n(t.target.getAttribute("mode"),t)},n,()=>r("setReview"),()=>r("unsetReview")]}class h extends t{constructor(t){super(),e(this,t,f,w,o,{reviewMode:0,handleReviewClick:4,customReviewMode:1},v)}}export{h as I};
//# sourceMappingURL=ItemHelper-9f2c0a03.js.map
