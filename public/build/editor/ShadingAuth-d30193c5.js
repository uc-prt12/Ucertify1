import{S as e,i as t,s as l,q as a,h as n,r as o,o as d,V as c,e as s,b as i,u as r,f as u,j as h,x as m,l as g,y as C,C as b,g as f,D as _,c as p,m as v,P as $,t as x,a as w,d as A,p as k,X as y,A as M,J as H}from"./main-b1387daf.js";function S(e){let t,l,a,o,c,b,f,_,p,v=1==e[7]&&W(e);return{c(){t=s("div"),l=s("div"),a=r(e[0]),o=i(),c=s("div"),b=s("input"),f=i(),v&&v.c(),u(l,"class","font-weight-bold mb-2"),u(b,"type","number"),u(b,"min","1"),u(b,"max",e[4]),u(b,"name",e[2]),u(b,"id",e[3]),u(b,"class","form-control width100 inline-block inputChange"),u(b,"data-label",e[1]),b.value=e[5],u(t,"class","col-sm-6 inline-block")},m(d,s){n(d,t,s),h(t,l),h(l,a),h(t,o),h(t,c),h(c,b),h(t,f),v&&v.m(t,null),_||(p=[g(b,"change",e[12]),g(b,"blur",e[13])],_=!0)},p(e,l){1&l&&m(a,e[0]),16&l&&u(b,"max",e[4]),4&l&&u(b,"name",e[2]),8&l&&u(b,"id",e[3]),2&l&&u(b,"data-label",e[1]),32&l&&(b.value=e[5]),1==e[7]?v?v.p(e,l):(v=W(e),v.c(),v.m(t,null)):v&&(v.d(1),v=null)},d(e){e&&d(t),v&&v.d(),_=!1,C(p)}}}function L(e){let t,l,a;return{c(){t=s("input"),u(t,"type","number"),u(t,"min","1"),u(t,"max",e[4]),u(t,"class","form-control inputChange"),u(t,"id","methodCount"),u(t,"name","methodCount"),u(t,"data-label","Number of correct"),t.value=e[5]},m(o,d){n(o,t,d),l||(a=[g(t,"change",e[10]),g(t,"blur",e[11])],l=!0)},p(e,l){16&l&&u(t,"max",e[4]),32&l&&(t.value=e[5])},d(e){e&&d(t),l=!1,C(a)}}}function W(e){let t,l,a,o,c,g,C,f,_=b.multiple_of+"";return{c(){t=s("div"),l=s("span"),a=s("span"),o=i(),c=r(_),g=i(),C=r(e[6]),f=r("px"),u(a,"class","icomoon-24px-info-5 pr-1"),u(l,"class","font13 text-danger"),u(t,"class","mt-1")},m(e,d){n(e,t,d),h(t,l),h(l,a),h(l,o),h(l,c),h(l,g),h(l,C),h(l,f)},p(e,t){64&t&&m(C,e[6])},d(e){e&&d(t)}}}function T(e){let t;function l(e,t){return 1==e[8]?L:S}let c=l(e),s=c(e);return{c(){s.c(),t=a()},m(e,l){s.m(e,l),n(e,t,l)},p(e,[a]){c===(c=l(e))&&s?s.p(e,a):(s.d(1),s=c(e),s&&(s.c(),s.m(t.parentNode,t)))},i:o,o:o,d(e){s.d(e),e&&d(t)}}}function I(e,t,l){let{labelname:a}=t,{datalabel:n}=t,{name:o}=t,{id:d}=t,{max:s}=t,{value:i}=t,{msgdetail:r}=t,{shwmsg:u}=t,{set_corr_ans:h}=t;const m=c();return e.$$set=e=>{"labelname"in e&&l(0,a=e.labelname),"datalabel"in e&&l(1,n=e.datalabel),"name"in e&&l(2,o=e.name),"id"in e&&l(3,d=e.id),"max"in e&&l(4,s=e.max),"value"in e&&l(5,i=e.value),"msgdetail"in e&&l(6,r=e.msgdetail),"shwmsg"in e&&l(7,u=e.shwmsg),"set_corr_ans"in e&&l(8,h=e.set_corr_ans)},[a,n,o,d,s,i,r,u,h,m,e=>m("handleChange",{value:e}),e=>m("inputChangeBlur",{value:e}),e=>m("handleChange",{value:e}),e=>m("inputChangeBlur",{value:e})]}class V extends e{constructor(e){super(),t(this,e,I,T,l,{labelname:0,datalabel:1,name:2,id:3,max:4,value:5,msgdetail:6,shwmsg:7,set_corr_ans:8})}}function B(e,t,l){const a=e.slice();return a[7]=t[l],a[9]=l,a}function N(e,t,l){const a=e.slice();return a[10]=t[l],a}function X(e){let t,l=e[2],o=[];for(let t=0;t<l.length;t+=1)o[t]=O(B(e,l,t));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=a()},m(e,l){for(let t=0;t<o.length;t+=1)o[t].m(e,l);n(e,t,l)},p(e,a){if(28&a){let n;for(l=e[2],n=0;n<l.length;n+=1){const d=B(e,l,n);o[n]?o[n].p(d,a):(o[n]=O(d),o[n].c(),o[n].m(t.parentNode,t))}for(;n<o.length;n+=1)o[n].d(1);o.length=l.length}},d(e){_(o,e),e&&d(t)}}}function G(e){let t,l=e[3],o=[];for(let t=0;t<l.length;t+=1)o[t]=D(N(e,l,t));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=a()},m(e,l){for(let t=0;t<o.length;t+=1)o[t].m(e,l);n(e,t,l)},p(e,a){if(24&a){let n;for(l=e[3],n=0;n<l.length;n+=1){const d=N(e,l,n);o[n]?o[n].p(d,a):(o[n]=D(d),o[n].c(),o[n].m(t.parentNode,t))}for(;n<o.length;n+=1)o[n].d(1);o.length=l.length}},d(e){_(o,e),e&&d(t)}}}function j(e){let t,l,a,o,c,i;return{c(){t=s("td"),u(t,"id",l=e[10].id),u(t,"data-hidden","no"),u(t,"tabindex","0"),u(t,"data-grid","no"),u(t,"data-id",a=e[10].dataid),u(t,"class",o=e[10].class+" gridColor pointer"),f(t,"width",e[10].width),f(t,"height",e[10].height)},m(l,a){n(l,t,a),c||(i=[g(t,"click",e[5]),g(t,"keyup",e[6])],c=!0)},p(e,n){8&n&&l!==(l=e[10].id)&&u(t,"id",l),8&n&&a!==(a=e[10].dataid)&&u(t,"data-id",a),8&n&&o!==(o=e[10].class+" gridColor pointer")&&u(t,"class",o),8&n&&f(t,"width",e[10].width),8&n&&f(t,"height",e[10].height)},d(e){e&&d(t),c=!1,C(i)}}}function D(e){let t,l=e[9]==e[10].rowno&&j(e);return{c(){l&&l.c(),t=a()},m(e,a){l&&l.m(e,a),n(e,t,a)},p(e,a){e[9]==e[10].rowno?l?l.p(e,a):(l=j(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(e){l&&l.d(e),e&&d(t)}}}function O(e){let t,l,a,o=e[3]&&e[3].length>0&&G(e);return{c(){t=s("tr"),o&&o.c(),l=i(),u(t,"id",a=e[7].id)},m(e,a){n(e,t,a),o&&o.m(t,null),h(t,l)},p(e,n){e[3]&&e[3].length>0?o?o.p(e,n):(o=G(e),o.c(),o.m(t,l)):o&&(o.d(1),o=null),4&n&&a!==(a=e[7].id)&&u(t,"id",a)},d(e){e&&d(t),o&&o.d()}}}function K(e){let t,l,a=e[2]&&e[2].length>0&&X(e);return{c(){t=s("table"),l=s("tbody"),a&&a.c(),u(t,"id",e[0]),u(t,"class",e[1])},m(e,o){n(e,t,o),h(t,l),a&&a.m(l,null)},p(e,[n]){e[2]&&e[2].length>0?a?a.p(e,n):(a=X(e),a.c(),a.m(l,null)):a&&(a.d(1),a=null),1&n&&u(t,"id",e[0]),2&n&&u(t,"class",e[1])},i:o,o:o,d(e){e&&d(t),a&&a.d()}}}function E(e,t,l){let{table_id:a}=t,{table_class:n}=t,{total_row_count:o}=t,{table_value:d}=t;const s=c();return e.$$set=e=>{"table_id"in e&&l(0,a=e.table_id),"table_class"in e&&l(1,n=e.table_class),"total_row_count"in e&&l(2,o=e.total_row_count),"table_value"in e&&l(3,d=e.table_value)},[a,n,o,d,s,e=>s("gridClick",{value:e}),e=>s("adaKeyupClick",{value:e})]}class P extends e{constructor(e){super(),t(this,e,E,K,l,{table_id:0,table_class:1,total_row_count:2,table_value:3})}}function q(e){let t,l,a,o,c,r,m,f,_,k,y,M,H,S,L,W,T,I,B,N,X,G,j,D,O,K,E,q,J,R,z,Q,U,Y,Z,ee,te,le,ae,ne,oe,de,ce,se,ie,re,ue,he,me;return r=new V({props:{labelname:b.row_count,max:"10",name:"rowCount",id:"rowCount",datalabel:"Number of rows",value:e[0].rowCount}}),r.$on("handleChange",e[6]),r.$on("inputChangeBlur",e[7]),f=new V({props:{labelname:b.col_count,max:"10",name:"colCount",id:"colCount",datalabel:"Number of column",value:e[0].colCount}}),f.$on("handleChange",e[6]),f.$on("inputChangeBlur",e[7]),y=new V({props:{labelname:b.cell_width,max:"5",name:"cellWidth",id:"cellWidth",datalabel:"Width Value",value:e[0].cellWidth,shwmsg:"1",msgdetail:F}}),y.$on("handleChange",e[6]),y.$on("inputChangeBlur",e[7]),H=new V({props:{labelname:b.cell_height,max:"5",name:"cellHeight",id:"cellHeight",datalabel:"Height Value",value:e[0].cellHeight,shwmsg:"1",msgdetail:F}}),H.$on("handleChange",e[6]),H.$on("inputChangeBlur",e[7]),I=new P({props:{table_id:"shadingtable",table_class:"shadingTable authShadeTable",total_row_count:e[2],table_value:e[1]}}),I.$on("gridClick",e[4]),I.$on("adaKeyupClick",e[12]),ce=new V({props:{max:e[0].rowCount*e[0].colCount,value:e[0].methodCount,set_corr_ans:"1"}}),ce.$on("handleChange",e[6]),ce.$on("inputChangeBlur",e[7]),re=new P({props:{table_id:"authoringMethod_table",table_class:"shadingTable authMethodTable",total_row_count:e[2],table_value:e[3]}}),re.$on("gridClick",e[5]),re.$on("adaKeyupClick",e[11]),{c(){t=s("div"),l=s("div"),l.textContent=""+b.canvas_options,a=i(),o=s("div"),c=s("div"),p(r.$$.fragment),m=i(),p(f.$$.fragment),_=i(),k=s("div"),p(y.$$.fragment),M=i(),p(H.$$.fragment),S=i(),L=s("div"),L.textContent=""+b.author_shaded,W=i(),T=s("div"),p(I.$$.fragment),B=i(),N=s("div"),X=s("div"),G=s("label"),j=s("input"),O=i(),K=s("div"),E=i(),q=s("label"),q.textContent=""+b.lock_shaded_cells,J=i(),R=s("hr"),z=i(),Q=s("div"),Q.textContent=""+b.set_corr_ans,U=i(),Y=s("div"),Y.textContent=""+b.method,Z=i(),ee=s("div"),te=s("select"),le=s("option"),le.textContent=""+b.set_corr_loc,ae=s("option"),ae.textContent=""+b.set_corr_count,oe=i(),de=s("div"),p(ce.$$.fragment),se=i(),ie=s("div"),p(re.$$.fragment),u(l,"class","col-sm-12 mb-4 font-weight-bold font15"),u(c,"class","row mx-0 px-3 mb-4"),u(k,"class","row mx-0 px-3"),u(o,"class","row form-group"),u(L,"class","col-sm-12 mb-4 font-weight-bold font15"),u(T,"class","col-sm-12 mb-4"),u(j,"type","checkbox"),u(j,"id","lock_author_cell"),j.value=D=e[0].cellLocked,u(j,"aria-label","Lock Author checkbox"),u(K,"class","check_mark_custom pt-sm1"),u(G,"for","lock_author_cell"),u(G,"class","custom_checkbox_new float-left mr-1"),u(q,"for","lock_author_cell"),u(X,"class","input-check"),u(N,"class","col-sm-12 mb-5"),u(R,"class","border-dashed-top"),u(Q,"class","col-sm-12 mb-4 font-weight-bold font15"),u(Y,"class","col-sm-12 mb-4 font-weight-bold font15"),le.__value="byLocation",le.value=le.__value,u(le,"id","byLoc_sel"),u(le,"data-show","locationMethod"),u(le,"data-hide","countMethod"),le.selected="selected",ae.__value="byCount",ae.value=ae.__value,u(ae,"id","bycount_sel"),u(ae,"data-show","countMethod"),u(ae,"data-hide","locationMethod"),u(te,"name","authorMethod"),u(te,"class","bg-gray-hover form-select width-authoring d-inline-block"),u(de,"class","mb-4 ml-3 width-authoring countMethod h"),u(ee,"class","col-sm-12 mb-4 font-weight-bold font15"),u(ie,"class","col-sm-12 mb-4 locationMethod h d-inline-block"),u(t,"class","shadingAuth")},m(d,s){n(d,t,s),h(t,l),h(t,a),h(t,o),h(o,c),v(r,c,null),h(c,m),v(f,c,null),h(o,_),h(o,k),v(y,k,null),h(k,M),v(H,k,null),h(t,S),h(t,L),h(t,W),h(t,T),v(I,T,null),h(t,B),h(t,N),h(N,X),h(X,G),h(G,j),h(G,O),h(G,K),h(X,E),h(X,q),h(t,J),h(t,R),h(t,z),h(t,Q),h(t,U),h(t,Y),h(t,Z),h(t,ee),h(ee,te),h(te,le),h(te,ae),$(te,e[0].authorMethod),h(ee,oe),h(ee,de),v(ce,de,null),h(t,se),h(t,ie),v(re,ie,null),ue=!0,he||(me=[g(j,"click",e[8]),g(j,"keyup",e[10]),g(te,"change",e[9])],he=!0)},p(e,[t]){const l={};1&t&&(l.value=e[0].rowCount),r.$set(l);const a={};1&t&&(a.value=e[0].colCount),f.$set(a);const n={};1&t&&(n.value=e[0].cellWidth),y.$set(n);const o={};1&t&&(o.value=e[0].cellHeight),H.$set(o);const d={};4&t&&(d.total_row_count=e[2]),2&t&&(d.table_value=e[1]),I.$set(d),(!ue||1&t&&D!==(D=e[0].cellLocked))&&(j.value=D),(!ue||1&t&&ne!==(ne=e[0].authorMethod))&&$(te,e[0].authorMethod);const c={};1&t&&(c.max=e[0].rowCount*e[0].colCount),1&t&&(c.value=e[0].methodCount),ce.$set(c);const s={};4&t&&(s.total_row_count=e[2]),8&t&&(s.table_value=e[3]),re.$set(s)},i(e){ue||(x(r.$$.fragment,e),x(f.$$.fragment,e),x(y.$$.fragment,e),x(H.$$.fragment,e),x(I.$$.fragment,e),x(ce.$$.fragment,e),x(re.$$.fragment,e),ue=!0)},o(e){w(r.$$.fragment,e),w(f.$$.fragment,e),w(y.$$.fragment,e),w(H.$$.fragment,e),w(I.$$.fragment,e),w(ce.$$.fragment,e),w(re.$$.fragment,e),ue=!1},d(e){e&&d(t),A(r),A(f),A(y),A(H),A(I),A(ce),A(re),he=!1,C(me)}}}let F=40;function J(e,t,l){let a,n,o,d,{getChildXml:c}=t,{xml:s}=t,i={xml:"",gridWidth:"",gridHeight:"",rowCount:"1",colCount:"4",cellWidth:"2",cellHeight:"2",correctAns:[],correctCount:1,shadedCell:[],cellLocked:"false",hiddenCell:[],authorMethod:"byLocation",methodCount:"",lockedCellValue:""},r="";function u(e){!function(e){try{l(0,i.correctAns=e.smxml._correctAns.trim()?e.smxml._correctAns.split(","):[],i),l(0,i.shadedCell=e.smxml._shadedCell.trim()?e.smxml._shadedCell.split(","):[],i),l(0,i.rowCount=e.smxml._rowCount,i),l(0,i.colCount=e.smxml._colCount,i),l(0,i.gridWidth=parseInt(e.smxml._cellWidth)*F,i),l(0,i.gridHeight=parseInt(e.smxml._cellHeight)*F,i),l(0,i.cellWidth=e.smxml._cellWidth,i),l(0,i.cellHeight=e.smxml._cellHeight,i),l(0,i.cellLocked=e.smxml._lockedCell,i),"true"==i.cellLocked?M.select("#lock_author_cell").checked=!0:M.select("#lock_author_cell").checked=!1,c(H(e))}catch(e){console.warn({error:e.message,"function name":"parseXMLAuthoring","File name":"ShadingAuth.svelte"})}}(e=y(e))}function h(e){let t,l,a=e.detail.value.target.id;t=M.select(".shadingAuth #"+a).getAttribute("data-id"),M.select(".shadingAuth #"+a).classList.contains("lockedGrid")||("no"==M.select(".shadingAuth #"+a).getAttribute("data-grid")?(M.selectAll(".shadingAuth #"+a,"addClass","gridSelected"),M.select(".shadingAuth #"+a).setAttribute("data-grid","selected"),i.shadedCell.includes(t)||i.shadedCell.push(t)):(l=i.shadedCell.indexOf(t),i.shadedCell.splice(l,1),M.selectAll(".shadingAuth #"+a,"removeClass","gridSelected"),M.select(".shadingAuth #"+a).setAttribute("data-grid","no"))),g()}function m(e){let t,l,a=e.detail.value.target.id;t=M.select(".shadingAuth #"+a).getAttribute("data-id"),M.select(".shadingAuth #"+a).classList.contains("lockedGrid")||("no"==M.select(".shadingAuth #"+a).getAttribute("data-grid")?(M.select(".shadingAuth #"+a).setAttribute("data-grid","selected"),M.selectAll(".shadingAuth #"+a,"addClass","gridSelected"),i.correctAns.includes(t)||i.correctAns.push(t)):(l=i.correctAns.indexOf(t),i.correctAns.splice(l,1),M.selectAll(".shadingAuth #"+a,"removeClass","gridSelected"),M.select(".shadingAuth #"+a).setAttribute("data-grid","no"))),g()}function g(){setTimeout((function(){let e='<smxml type="44" name="Shading" rowCount="'+i.rowCount+'" colCount="'+i.colCount+'" cellWidth="'+i.cellWidth+'" cellHeight="'+i.cellHeight+'" correctAns="'+i.correctAns+'" correctCount="'+i.methodCount+'" shadedCell="'+i.shadedCell+'" lockedCell="'+i.cellLocked+'" HiddenCell="'+i.hiddenCell+'" lockedCellValue="'+i.lockedCellValue+'">\x3c!--[CDATA[]]--\x3e</smxml>';c(e)}),100)}function C(){M.selectAll("#authoringMethod_table .gridColor,.authShadeTable .gridColor","removeClass","lockedGrid"),M.selectAll("#authoringMethod_table .gridColor,.authShadeTable .gridColor").forEach((e=>{e.setAttribute("data-grid","no")})),l(0,i.correctAns=[],i),l(0,i.shadedCell=[],i),l(0,i.cellLocked="false",i),l(0,i.lockedCellValue="",i)}function f(e){let t=0;if(i.shadedCell.map((function(e,l){i.correctAns.map((function(l,a){e==l&&(t+=1)}))})),0==i.shadedCell.length)M.alert("Please shade the cells"),e.preventDefault();else if(t==i.shadedCell.length||""!=i.methodCount){l(0,i.cellLocked="true"==i.cellLocked?"false":"true",i);let e="";M.selectAll(".authShadeTable td.gridSelected").forEach((t=>{e+=t.getAttribute("data-id")+","})),e=e.substr(e,e.length-1),"true"==i.cellLocked?(M.selectAll(".authShadeTable td.gridSelected, .authMethodTable #grid_a"+e.split(",").join(",.authMethodTable #grid_a"),"addClass","lockedGrid"),l(0,i.lockedCellValue=e,i)):(M.selectAll(".authShadeTable td.gridSelected, .authMethodTable #grid_a"+e.split(",").join(",.authMethodTable #grid_a"),"removeClass","lockedGrid"),l(0,i.lockedCellValue="",i)),g()}else M.alert(b.lock_author_cell),e.preventDefault()}return k((()=>{l(0,i.xml=s,i),u(s)})),e.$$set=e=>{"getChildXml"in e&&l(13,c=e.getChildXml),"xml"in e&&l(14,s=e.xml)},e.$$.update=()=>{if(114703&e.$$.dirty){let e,t;l(1,n=[]),l(2,o=[]),l(3,d=[]);for(let c=0;c<i.rowCount;c++){l(2,o=[...o,{id:"gridRow_"+c}]);for(let o=0;o<i.colCount;o++)e=i.shadedCell.indexOf(c+"_"+o),l(15,a=-1!=e?"gridSelected":""),t=i.correctAns.indexOf(c+"_"+o),""!=i.correctAns?l(16,r=-1!=t?"gridSelected":""):l(16,r=""),l(1,n=[...n,{id:"grid"+c+"_"+o,dataid:c+"_"+o,class:a,width:parseInt(i.gridWidth)+"px",height:parseInt(i.gridHeight)+"px",rowno:c}]),l(3,d=[...d,{id:"grid_a"+c+"_"+o,dataid:c+"_"+o,class:r,width:parseInt(i.gridWidth)+"px",height:parseInt(i.gridHeight)+"px",rowno:c}])}s!=i.xml&&(l(0,i.xml=s,i),u(s))}},[i,n,o,d,h,m,function(e){let t=e.detail.value.target,a=M.select("#cellWidth").value,n=M.select("#cellHeight").value,o=M.select("#rowCount").value,d=M.select("#colCount").value,c=M.select("#methodCount").value,s=t.value,r=t.min,u=t.id,h=t.max;if(l(0,i[t.name]=t.value,i),l(0,i.gridWidth=parseInt(a)*F,i),l(0,i.gridHeight=n*F,i),l(0,i.rowCount=o,i),l(0,i.colCount=d,i),l(0,i.methodCount=c,i),"methodCount"!=u&&""!=M.select("#methodCount").value&&l(0,i.methodCount=M.select("#methodCount").getAttribute("min"),i),""!=s){let e=M.select("#"+t.id).getAttribute("data-label");parseInt(s)<parseInt(r)?(M.alert(e+" can be between \n"+r+" to "+h),l(0,i[t.name]=r,i)):parseInt(s)>parseInt(h)&&(M.alert(e+" can be between \n"+r+" to "+h),l(0,i[t.name]=h,i))}C(),g()},function(e){let t=e.detail.value.target;""==t.value&&(M.alert(b.empty_field),l(0,i[t.name]=t.min,i),C(),g())},f,function(e){l(0,i.authorMethod=e.target.value,i);let t=M.select("[name="+e.target.name+"]");M.selectAll("."+t.options[t.selectedIndex].getAttribute("data-show"),"addClass","d-inline-block"),M.selectAll("."+t.options[t.selectedIndex].getAttribute("data-hide"),"removeClass","d-inline-block"),"byCount"==M.select("[name='"+e.target.name+"']").value?(l(0,i.correctAns="",i),l(0,i.methodCount=1,i)):l(0,i.methodCount="",i),C(),g()},function(e){13==e.keyCode&&f(e)},function(e){13==e.detail.value.keyCode&&m(e)},function(e){13==e.detail.value.keyCode&&h(e)},c,s,a,r]}export default class extends e{constructor(e){super(),t(this,e,J,q,l,{getChildXml:13,xml:14})}}
//# sourceMappingURL=ShadingAuth-d30193c5.js.map
