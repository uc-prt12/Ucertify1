import{S as e,i as t,s as l,F as n,$ as o,I as a,K as s,H as i,e as c,a0 as r,b as d,c as p,f as u,g as m,h as f,j as h,m as v,l as g,N as x,t as b,a as _,o as $,d as w,p as C,A as y,X as k,w as H,Q as S,u as A,r as T,q as X,Y as I}from"./main-a536cf38.js";for(var L=["database-icon","table-icon","file-icon","user-group-icon","tools-icon","document-icon","key-icon","pencil-icon","circle-icon","square-icon"],z='<div class="table-responsive"><table class="table editor_table table-hover icons_table w-100"><thead><tr><th>Preview</th><th>Icon Name</th></tr></thead><tbody>',D=0;D<L.length;D++)z+=`<tr><td><span class="${L[D]}"></span></td><td class="search">${L[D]}</td></tr>`;var M=z+="</tbody></table></div>";function q(e){n(e,"svelte-5mvb8j",".btnColor{background-color:#dee2e6!important;box-shadow:2px 2px 5px #000}")}function O(e){let t;return{c(){t=c("span"),t.textContent="Sort Options"},m(e,l){f(e,t,l)},d(e){e&&$(t)}}}function j(e){let t;return{c(){t=c("div"),t.textContent=""+r.loading_icons,u(t,"class","alert alert-info my-2")},m(e,l){f(e,t,l)},p:T,d(e){e&&$(t)}}}function E(e){let t,l;return{c(){t=new I,l=X(),t.a=l},m(n,o){t.m(e[1],n,o),f(n,l,o)},p:T,d(e){e&&$(l),e&&t.d()}}}function N(e){let t,l,n,o,a,s,i,p;let m=function(e,t){return e[1]?E:j}(e)(e);return{c(){t=c("div"),l=c("input"),n=d(),o=c("div"),o.textContent=""+r.no_icons,a=d(),s=c("div"),m.c(),u(l,"type","text"),u(l,"id","tableSearch"),u(l,"placeholder","Search Icons"),u(l,"class","form-control"),u(o,"class","alert alert-danger treeview_record my-2 h"),u(s,"class","treemodule_table"),u(t,"class","text-center")},m(c,r){f(c,t,r),h(t,l),h(t,n),h(t,o),h(t,a),h(t,s),m.m(s,null),i||(p=g(l,"keyup",e[9]),i=!0)},p(e,t){m.p(e,t)},d(e){e&&$(t),m.d(),i=!1,p()}}}function F(e){let t;return{c(){t=c("div"),t.textContent="Icon List",u(t,"slot","title")},m(e,l){f(e,t,l)},d(e){e&&$(t)}}}function K(e){let t,l=r.close+"";return{c(){t=A(l)},m(e,l){f(e,t,l)},p:T,d(e){e&&$(t)}}}function P(e){let t,l,n;return l=new S({props:{class:"btnColor",$$slots:{default:[K]},$$scope:{ctx:e}}}),l.$on("click",e[3]),{c(){t=c("div"),p(l.$$.fragment),u(t,"slot","footer"),u(t,"class","svelteFooter")},m(e,o){f(e,t,o),v(l,t,null),n=!0},p(e,t){const n={};65536&t&&(n.$$scope={dirty:t,ctx:e}),l.$set(n)},i(e){n||(b(l.$$.fragment,e),n=!0)},o(e){_(l.$$.fragment,e),n=!1},d(e){e&&$(t),w(l)}}}function Q(e){let t,l,n,C,y,k,H,S,A,T,X,I,L,z,D,M,q,j,E,K,Q,R,Y,B,G,J,U,V,W,Z,ee,te,le,ne,oe,ae,se,ie,ce,re,de,pe,ue,me,fe,he,ve,ge,xe,be,_e,$e;function we(t){e[8](t)}let Ce={id:"sort",value:"Sort Options",name:"sort",title:"Sort Options",$$slots:{default:[O]},$$scope:{ctx:e}};function ye(t){e[10](t)}void 0!==e[0].sort&&(Ce.checked=e[0].sort),ee=new o({props:Ce}),a.push((()=>s(ee,"checked",we)));let ke={width:"400",$$slots:{footer:[P],title:[F],default:[N]},$$scope:{ctx:e}};return void 0!==e[0].openHelp&&(ke.visible=e[0].openHelp),ge=new i({props:ke}),a.push((()=>s(ge,"visible",ye))),{c(){t=c("main"),l=c("div"),n=c("center"),C=c("div"),y=c("div"),k=c("div"),H=c("div"),S=c("div"),A=c("div"),T=c("label"),T.textContent=""+r.heading_correct,X=d(),I=c("input"),L=d(),z=c("div"),D=c("div"),M=c("label"),M.textContent=""+r.heading_all,q=d(),j=c("input"),E=d(),K=c("div"),Q=c("div"),Q.innerHTML='<div class="text-left"><label for="parent_icon" class="text-dark"># icon</label></div> \n                                <input type="text" id="parent_icon" class="form-control"/>',R=d(),Y=c("div"),Y.innerHTML='<div class="text-left"><label for="subparent_icon" class="text-dark">## icon</label></div> \n                                <input type="text" id="subparent_icon" class="form-control"/>',B=d(),G=c("div"),G.innerHTML='<div class="text-left"><label for="default_icon" class="text-dark">### icon</label></div> \n                                <input type="text" id="default_icon" class="form-control"/>',J=d(),U=c("div"),V=c("button"),V.textContent="Icons List",W=d(),Z=c("div"),p(ee.$$.fragment),le=d(),ne=c("textarea"),oe=d(),ae=c("textarea"),se=d(),ie=c("div"),ce=c("strong"),ce.textContent=""+r.note_text,re=d(),de=c("ol"),pe=c("li"),pe.textContent=""+r.select_icon,ue=d(),me=c("li"),me.textContent=""+r.heading_info,fe=d(),he=c("li"),he.textContent=""+r.key_info,ve=d(),p(ge.$$.fragment),u(T,"for","headingcorrect"),u(T,"class","text-dark"),u(A,"class","text-left"),u(I,"type","text"),u(I,"id","headingcorrect"),u(I,"defaultvalue"," "),u(I,"class","form-control"),u(S,"class","border-0 col-6 pr-1"),u(M,"for","headingall"),u(M,"class","text-dark"),u(D,"class","text-left"),u(j,"type","text"),u(j,"id","headingall"),u(j,"defaultvalue"," "),u(j,"class","form-control"),u(z,"class","border-0 col-6 pl-1"),u(H,"class","row my-2"),u(Q,"class","border-0 col-3 pr-1"),u(Y,"class","border-0 col-3 pl-1"),u(G,"class","border-0 col-3 pl-1"),u(V,"class","btn btn-outline-primary w-100"),u(V,"id","icons_info"),u(U,"class","border-0 col-3 pl-1"),m(U,"top","28px"),u(K,"class","row mt-2"),u(Z,"class","text-left"),u(ne,"id","tree"),u(ne,"wrap","off"),u(ne,"class","sm_input_textarea mb-0 resize_none"),m(ne,"height","150px"),u(ae,"id","options"),u(ae,"wrap","off"),m(ae,"height","100px"),u(ae,"class","sm_input_textarea mt-2 resize_none mb-0"),u(ae,"placeholder","Key|Option text|Icon (Put comma after each line)"),u(y,"class","border-0"),m(y,"width","95%"),u(ce,"class","ml-lg-3"),u(ie,"class","font13 mx-3 text-left text-danger"),u(C,"id","main"),u(C,"class","py-3 min_height_20 width98"),u(l,"id","authoringArea"),u(l,"class","border")},m(o,a){f(o,t,a),h(t,l),h(l,n),h(n,C),h(C,y),h(y,k),h(k,H),h(H,S),h(S,A),h(A,T),h(S,X),h(S,I),h(H,L),h(H,z),h(z,D),h(D,M),h(z,q),h(z,j),h(k,E),h(k,K),h(K,Q),h(K,R),h(K,Y),h(K,B),h(K,G),h(K,J),h(K,U),h(U,V),h(k,W),h(k,Z),v(ee,Z,null),h(k,le),h(k,ne),h(k,oe),h(k,ae),h(C,se),h(C,ie),h(ie,ce),h(ie,re),h(ie,de),h(de,pe),h(de,ue),h(de,me),h(de,fe),h(de,he),h(t,ve),v(ge,t,null),be=!0,_e||($e=g(V,"click",e[2]),_e=!0)},p(e,[t]){const l={};65536&t&&(l.$$scope={dirty:t,ctx:e}),!te&&1&t&&(te=!0,l.checked=e[0].sort,x((()=>te=!1))),ee.$set(l);const n={};65536&t&&(n.$$scope={dirty:t,ctx:e}),!xe&&1&t&&(xe=!0,n.visible=e[0].openHelp,x((()=>xe=!1))),ge.$set(n)},i(e){be||(b(ee.$$.fragment,e),b(ge.$$.fragment,e),be=!0)},o(e){_(ee.$$.fragment,e),_(ge.$$.fragment,e),be=!1},d(e){e&&$(t),w(ee),w(ge),_e=!1,$e()}}}function R(e,t,l){let{xml:n}=t,{getChildXml:o}=t,{visible:a=!1}=t,s=0,i=M,c={};H({xml:"",sort:!1,allowSort:1,openHelp:!1}).subscribe((e=>{l(0,c=e)}));function d(){let e=y.parseHtml(c.xml),t=y.findChild(e,"tree");s=y.select("#sort").checked?1:0,t||(t=y.findChild(e,"list")),""!=y.select("#headingcorrect").value&&""!=y.select("#headingall").value||y.showmsg("Heading should not be blank!");let n=y.select("#parent_icon").value,a=y.select("#subparent_icon").value,i=y.select("#default_icon").value,d="database-icon,table-icon,file-icon";""!=n.trim()&&""!=a.trim()&&""!=i.trim()?d=n+","+a+","+i:AI&&AI.showmsg(r.icon_not_blank),t&&(y.setAttr(t,{headingCorrect:y.select("#headingcorrect").value,headingAll:y.select("#headingall").value,options:y.select("#options").value.trim().replace(/\\n{2,}/g,"\\n").replace(/\\n/g,","),sort:s,allowSort:1,icons:d}),t.innerHTML="<![CDATA[\n"+y.select("#tree").value+"\n]]>"),l(0,c.xml=formatXml(e.xml?e.xml:(new XMLSerializer).serializeToString(e)),c),o(formatXml(e.xml?e.xml:(new XMLSerializer).serializeToString(e)))}function p(e,t){var l=y.select(t);y.toggleDom(l,"show"),""==e.trim()?(y.selectAll(".treeview_record","hide"),y.selectAll(t+" tr","show")):null!=l.nodeName&&(y.find(l,"tr","all").forEach(((t,l)=>{var n=y.find(t,".search","all");if(n.length>0){var o=!1;n.forEach(((t,l)=>{if(new RegExp(e,"i").test(t.textContent))return o=!0,!1})),1==o?y.select(t,"css",{display:""}):y.select(t,"css",{display:"none"})}})),y.find(l,".search","visible").length>0?(y.selectAll(".treeview_record","hide"),y.toggleDom(l,"show")):(y.toggleDom(".treeview_record","show"),y.toggleDom(l,"hide")))}C((()=>{l(0,c.xml=n,c),function(e){var t=k(e),n=t.smxml.tree?t.smxml.tree:t.smxml.list;if(n){n._options&&(y.select("#options").value=n._options),y.select("#tree").value=n.__cdata.replace(/\t/gim,""),"0"!=n._allowSort?l(0,c.allowSort=!0,c):"0"!=n._allowsort&&l(0,c.allowsort=!0,c),n._headingCorrect?y.select("#headingcorrect").value=n._headingCorrect:n._headingcorrect&&(y.select("#headingcorrect").value=n._headingcorrect),n._headingAll?y.select("#headingall").value=n._headingAll:n._headingall&&(y.select("#headingall").value=n._headingall),1==n._sort?l(0,c.sort=!0,c):l(0,c.sort=!1,c);let e=["database-icon","table-icon","file-icon"];if(n.icons){let t=n.icons.split(",");e=3==t.length?t:e}y.select("#parent_icon").value=e[0],y.select("#subparent_icon").value=e[1],y.select("#default_icon").value=e[2]}d()}(n),y.bind("#main","keyup",(()=>{var e=setTimeout(function(){d(),clearTimeout(e)}.bind(this),500)})),y.bind("#main","click",(()=>{d()})),y.listen(document,"click","#xmlDone",(()=>{window.xml_button_clicked=!0}))}));return e.$$set=e=>{"xml"in e&&l(6,n=e.xml),"getChildXml"in e&&l(7,o=e.getChildXml),"visible"in e&&l(5,a=e.visible)},[c,i,function(){l(0,c.openHelp=!0,c),l(5,a=!0)},function(){l(5,a=!1),l(0,c.openHelp=!1,c)},p,a,n,o,function(t){e.$$.not_equal(c.sort,t)&&(c.sort=t,l(0,c))},e=>{p(e.target.value,".icons_table")},function(t){e.$$.not_equal(c.openHelp,t)&&(c.openHelp=t,l(0,c))}]}export default class extends e{constructor(e){super(),t(this,e,R,Q,l,{xml:6,getChildXml:7,visible:5},q)}}
//# sourceMappingURL=TreeViewAuthoring-00f1b2ff.js.map
