import{G as e,S as t,i as l,s as a,F as s,$ as o,e as i,b as r,f as n,g as c,h as d,j as m,l as u,v as h,o as p,y as v,H as f,I as g,K as x,c as _,m as $,N as b,t as S,a as y,d as w,D as k,E as C,X as A,J as q,u as E,r as T,w as M,C as O,A as D,Q as L}from"./main-cddbb274.js";import"./style-inject.es-1f59c1d0.js";import"./choose.min-a2cea529.js";var X="More than 6 options may cause this item to not render properly on a smartphone.",N="More than five rows and five columns may not render properly on a smartphone.";const P=new e;let J={err:{q9:X,q27:"You have exceeded the module limit. You can only create 6 statement nodes and 4 option nodes.",q6_advance:N},processError:function(e,t){return{error:e,message:t}},validate:function(e,t,l){if("q"==e||"u"==e)switch(t){case 9:return this.validate9(l);case 14:return this.validate14(l);case 6:return this.validate6(l);case 26:return this.validate26(l);case 27:return this.validate27(l)}},validate9:function(e){return P.selectAll("#fillmain [id^=elem]").length>6?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate6:function(e){let t=P.selectAll("#choose #sortable li").length;return console.log("len =>"+t),t>5?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate26:function(e){let t=P.selectAll("#mytable >tbody >tr").length,l=P.selectAll("#mytable >thead >tr >th").length;return t>5||l>6?this.processError(!0,this.err.q6_advance):this.processError(!1,"valid")},validate14:function(e){let t=P.selectAll("#matchListArea [class*='textarea_1']").length,l=selectAll("#matchListArea [class*='textarea_2']").length;return t>6||l>6?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate27:function(e){let t=P.selectAll("#choicemain .testmode_table tbody tr").length,l=P.selectAll("#choicemain .testmode_table thead tr th").length;return t>6||l>5?this.processError(!0,this.err.q27):this.processError(!1,"valid")}};function j(e){s(e,"svelte-1afsy3o",".colorgray{width:56px;background-color:lightgrey}.addbutton.svelte-1afsy3o{position:relative;left:32px;height:31px}.addbuttonplus.svelte-1afsy3o{font-size:24px}.height30.svelte-1afsy3o{height:30px !important}.top1.svelte-1afsy3o{top:1px}.top6{top:6px}")}function H(e,t,l){const a=e.slice();return a[25]=t[l],a[27]=l,a}function I(e){let t,l=O.allow_sort+"";return{c(){t=E(l)},m(e,l){d(e,t,l)},p:T,d(e){e&&p(t)}}}function V(e){let t,l=O.in_sentence+"";return{c(){t=E(l)},m(e,l){d(e,t,l)},p:T,d(e){e&&p(t)}}}function F(e){let t,l=O.in_paragraph+"";return{c(){t=E(l)},m(e,l){d(e,t,l)},p:T,d(e){e&&p(t)}}}function Y(e){let t,l,a,s,o,f,g,x,_,$,b,S,y,w,k;function C(){return e[13](e[25])}return{c(){t=i("div"),l=i("div"),a=i("div"),s=i("input"),f=r(),g=i("div"),x=i("textarea"),$=r(),b=i("div"),S=i("span"),n(s,"type","checkbox"),n(s,"id","check_correct_ans"),n(s,"name","check_correct_ans"),n(s,"class","secure-icon float-end"),s.checked=o="*"==e[25].value.charAt(0),c(s,"position","relative"),c(s,"top","11px"),c(s,"right","15px"),n(a,"class","col-1"),n(x,"class","height32 outline0 mb-1 ms-0 "),x.value=_="*"==e[25].value.charAt(0)?e[25].value.slice(1):e[25].value,n(g,"class","col"),n(S,"class","remove-item icomoon-24px-delete-1 height30 top1 position-relative float-start svelte-1afsy3o"),n(S,"tabindex","0"),c(S,"right","39px"),n(l,"class","form-row mt-head"),n(t,"class","clearfix mt choose_options"),n(t,"key",y=e[27])},m(o,i){d(o,t,i),m(t,l),m(l,a),m(a,s),m(l,f),m(l,g),m(g,x),m(l,$),m(l,b),m(b,S),w||(k=[u(s,"click",(function(){h(e[5].bind(e[25].value,e[27]))&&e[5].bind(e[25].value,e[27]).apply(this,arguments)})),u(x,"change",(function(){h(e[6].bind(e[25].value,e[27],e[2][e[27]]))&&e[6].bind(e[25].value,e[27],e[2][e[27]]).apply(this,arguments)})),u(S,"click",C)],w=!0)},p(t,l){e=t,1&l&&o!==(o="*"==e[25].value.charAt(0))&&(s.checked=o),1&l&&_!==(_="*"==e[25].value.charAt(0)?e[25].value.slice(1):e[25].value)&&(x.value=_)},d(e){e&&p(t),w=!1,v(k)}}}function z(e){let t,l,a;return{c(){t=i("h4"),t.textContent="Confirmation",l=r(),a=i("div"),a.innerHTML='<span class="col-md-12 mt-4">Do you really want to delete?</span>',n(a,"class","row")},m(e,s){d(e,t,s),d(e,l,s),d(e,a,s)},d(e){e&&p(t),e&&p(l),e&&p(a)}}}function G(e){let t;return{c(){t=E("Yes")},m(e,l){d(e,t,l)},d(e){e&&p(t)}}}function K(e){let t,l,a,s,o,c,v;return s=new L({props:{variant:"contained",class:"bg-primary text-white",$$slots:{default:[G]},$$scope:{ctx:e}}}),s.$on("click",(function(){h(e[7].bind(this,e[1].data_value,e[1].data_id))&&e[7].bind(this,e[1].data_value,e[1].data_id).apply(this,arguments)})),{c(){t=i("div"),l=i("input"),a=r(),_(s.$$.fragment),n(l,"type","button"),n(l,"variant","contained"),n(l,"class","btn btn-light colorgray"),l.value="No",n(t,"slot","footer"),n(t,"class","svelteFooter")},m(i,r){d(i,t,r),m(t,l),m(t,a),$(s,t,null),o=!0,c||(v=u(l,"click",e[14]),c=!0)},p(t,l){e=t;const a={};268435456&l&&(a.$$scope={dirty:l,ctx:e}),s.$set(a)},i(e){o||(S(s.$$.fragment,e),o=!0)},o(e){y(s.$$.fragment,e),o=!1},d(e){e&&p(t),w(s),c=!1,v()}}}function Q(e){let t,l,a,s,c,h,C,A,q,E,T,M,O,D,L,X,N,P,J,j,G,Q,R,B,U,W,Z,ee,te,le,ae,se,oe,ie,re,ne,ce;D=new o({props:{id:"allowSort",color:"",checked:1==e[1].allowSort,$$slots:{default:[I]},$$scope:{ctx:e}}}),D.$on("click",e[4]),N=new o({props:{id:"isSentence",color:"primary",checked:1==e[1].isSentence,$$slots:{default:[V]},$$scope:{ctx:e}}}),N.$on("click",e[4]),j=new o({props:{id:"isParagraph",color:"primary",checked:1==e[1].isParagraph,$$slots:{default:[F]},$$scope:{ctx:e}}}),j.$on("click",e[4]);let de=e[0],me=[];for(let t=0;t<de.length;t+=1)me[t]=Y(H(e,de,t));function ue(t){e[15](t)}let he={$$slots:{footer:[K],default:[z]},$$scope:{ctx:e}};return void 0!==e[1].open&&(he.visible=e[1].open),oe=new f({props:he}),g.push((()=>x(oe,"visible",ue))),oe.$on("close",e[16]),{c(){t=i("main"),l=i("div"),a=i("center"),s=i("div"),c=i("div"),h=i("div"),C=i("label"),C.textContent="Title",A=r(),q=i("input"),T=r(),M=i("div"),O=i("div"),_(D.$$.fragment),L=r(),X=i("div"),_(N.$$.fragment),P=r(),J=i("div"),_(j.$$.fragment),G=r(),Q=i("div");for(let e=0;e<me.length;e+=1)me[e].c();R=r(),B=i("div"),B.innerHTML='<p class="mb-md">Add a new item by clicking the <b>Add Item</b> button at the bottom-left corner.</p>',U=r(),W=i("button"),W.innerHTML='<span class="addbuttonplus svelte-1afsy3o">+</span>   Add option',Z=r(),ee=i("input"),te=r(),le=i("input"),se=r(),_(oe.$$.fragment),n(C,"for","headingCorrect"),n(C,"class","mt-1 pt-1"),n(q,"id","headingCorrect"),n(q,"type","text"),n(q,"class","sm_input_text mt mb"),q.value=E=e[1].headingCorrect,n(h,"class","d-flex ms-2 ps-4"),n(O,"class","col-md-3 pd-0 float-left"),n(X,"class","col-md-3 pd-0 float-left"),n(J,"class","col-md-3 pd-0 float-left"),n(M,"class","clearfix mt ps-4"),n(c,"class","choose_head_content px-3 pt-3 pb-0"),n(B,"class","alert alert-info message_content"),n(W,"type","button"),n(W,"id","add-item"),n(W,"class","btn btn-sm btn-outline-primary btn-sm float-left d-flex align-items-center mt-3 addbutton svelte-1afsy3o"),n(Q,"class","choose_item_container mb ps-4"),n(ee,"id","check"),n(ee,"type","hidden"),n(ee,"class",""),ee.value="",n(le,"type","hidden"),n(le,"name","special_module_xml"),n(le,"id","special_module_xml"),n(le,"defaultvalue",ae=e[1].xml),n(s,"id","main"),n(s,"class","border")},m(o,i){d(o,t,i),m(t,l),m(l,a),m(a,s),m(s,c),m(c,h),m(h,C),m(h,A),m(h,q),m(c,T),m(c,M),m(M,O),$(D,O,null),m(M,L),m(M,X),$(N,X,null),m(M,P),m(M,J),$(j,J,null),m(s,G),m(s,Q);for(let e=0;e<me.length;e+=1)me[e].m(Q,null);m(Q,R),m(Q,B),m(Q,U),m(Q,W),m(s,Z),m(s,ee),m(s,te),m(s,le),m(t,se),$(oe,t,null),re=!0,ne||(ce=[u(q,"change",e[4]),u(W,"click",e[3])],ne=!0)},p(e,[t]){(!re||2&t&&E!==(E=e[1].headingCorrect)&&q.value!==E)&&(q.value=E);const l={};2&t&&(l.checked=1==e[1].allowSort),268435456&t&&(l.$$scope={dirty:t,ctx:e}),D.$set(l);const a={};2&t&&(a.checked=1==e[1].isSentence),268435456&t&&(a.$$scope={dirty:t,ctx:e}),N.$set(a);const s={};if(2&t&&(s.checked=1==e[1].isParagraph),268435456&t&&(s.$$scope={dirty:t,ctx:e}),j.$set(s),103&t){let l;for(de=e[0],l=0;l<de.length;l+=1){const a=H(e,de,l);me[l]?me[l].p(a,t):(me[l]=Y(a),me[l].c(),me[l].m(Q,R))}for(;l<me.length;l+=1)me[l].d(1);me.length=de.length}(!re||2&t&&ae!==(ae=e[1].xml))&&n(le,"defaultvalue",ae);const o={};268435458&t&&(o.$$scope={dirty:t,ctx:e}),!ie&&2&t&&(ie=!0,o.visible=e[1].open,b((()=>ie=!1))),oe.$set(o)},i(e){re||(S(D.$$.fragment,e),S(N.$$.fragment,e),S(j.$$.fragment,e),S(oe.$$.fragment,e),re=!0)},o(e){y(D.$$.fragment,e),y(N.$$.fragment,e),y(j.$$.fragment,e),y(oe.$$.fragment,e),re=!1},d(e){e&&p(t),w(D),w(N),w(j),k(me,e),w(oe),ne=!1,v(ce)}}}function R(e,t,l){let a=[],s=[],o={},{xml:i}=t,{getChildXml:r}=t,{changed_advance_xml:n}=t,{editorState:c}=t,{smValidate:d}=t;M({xml:"",headingCorrect:"",allowSort:"",isSentence:"",isParagraph:"",isadvance:!1,CDATA:"",istoggled:!1,openImageDialog:!1,openErrorDialog:!1,row_value:"",col_value:"",err_message:O.min_row_col_value,tomaketable:"none",open:!1,data_id:"",data_value:"",stateXMLToJSON:""}).subscribe((e=>{l(1,o=e)}));let m=[];C((()=>{o.xml!=i&&(l(1,o.xml=i,o),l(1,o.stateXMLToJSON=A(i),o),function(e){let t,i;try{l(0,a=[]),s=[],e.smxml.list._oldCData&&(i=e.smxml.list._oldCData.split("###")),t=e.smxml.list.__cdata.split("\n"),e.smxml.list._row&&e.smxml.list._col&&(delete e.smxml.list._allowsort,delete e.smxml.list._headingAll,n(q(e),26)),t.forEach((function(e,l){""!=t[l].trim()&&a.push({value:t[l].replace(/^\s+/g,""),id:l})})),i&&i.forEach((function(e,t){""!=i[t].trim()&&s.push({value:i[t].replace(/^\s+/g,""),id:t})})),function(e){let t=e,l=!1;t.smxml.list._headingCorrect&&(t.smxml.list._headingcorrect=t.smxml.list._headingCorrect,delete t.smxml.list._headingCorrect,l=!0),t.smxml.list._allowSort&&(t.smxml.list._allowsort=t.smxml.list._allowSort,delete t.smxml.list._allowSort,l=!0),t.smxml.list._isParagraph&&(t.smxml.list._isparagraph=t.smxml.list._isParagraph,delete t.smxml.list._isParagraph,l=!0),t.smxml.list._isSentence&&(t.smxml.list._issentence=t.smxml.list._isSentence,delete t.smxml.list._isSentence,l=!0),1==l&&r(q(t))}(e),l(1,o.headingCorrect=e.smxml.list._headingcorrect,o),l(1,o.allowSort=e.smxml.list._allowsort,o),l(1,o.isSentence=e.smxml.list._issentence,o),l(1,o.isParagraph=e.smxml.list._isparagraph,o)}catch(e){console.warn({error:e,"function name":"parseXMLAuthoring","File name":"ChooseNReorder.js"})}}(o.stateXMLToJSON))}));return e.$$set=e=>{"xml"in e&&l(8,i=e.xml),"getChildXml"in e&&l(9,r=e.getChildXml),"changed_advance_xml"in e&&l(10,n=e.changed_advance_xml),"editorState"in e&&l(11,c=e.editorState),"smValidate"in e&&l(12,d=e.smValidate)},e.$$.update=()=>{1&e.$$.dirty&&a.forEach((function(e,t){l(2,m[t]="*"==e.value.charAt(0),m)}))},[a,o,m,function(){D.find("#choose","#sortable li","all").length<=9?function(){let e=o.stateXMLToJSON;e.smxml.list.__cdata=e.smxml.list.__cdata+"\n*Option value",e.smxml.list._oldCData&&(e.smxml.list._oldCData.lastIndexOf("###")==e.smxml.list._oldCData.length-3?e.smxml.list._oldCData+="*Option value":e.smxml.list._oldCData+="###*Option value");if(r(q(e)),!e.smxml.list._row&&!e.smxml.list._col){var t=J.validate(c.content_type,c.item,c.content_icon);d(t)}}():D&&D.alert("Maximum possible value of nodes are 10.")},function(e){let t=o.stateXMLToJSON;switch(e.target.id){case"allowSort":t.smxml.list._allowsort=1==e.target.checked?"1":"0";break;case"isSentence":1==e.target.checked?(0==document.querySelector("#allowSort").checked?(document.querySelector("#allowSort").click(),document.querySelector("#allowSort").disabled=!0):document.querySelector("#allowSort").disabled=!0,l(1,o.isSentence="1",o),l(1,o.allowSort="1",o),t.smxml.list._issentence="1",t.smxml.list._allowSort="1",t.smxml.list._isparagraph="0"):(document.querySelector("#allowSort").disabled=!1,document.querySelector("#allowSort").click(),l(1,o.isSentence="0",o),l(1,o.allowSort="1",o),t.smxml.list._issentence="0",t.smxml.list._allowSort="0");break;case"isParagraph":1==e.target.checked?(0==document.querySelector("#allowSort").getAttribute("checked")?(document.querySelector("#allowSort").click(),document.querySelector("#allowSort").disabled=!0):document.querySelector("#allowSort").disabled=!0,l(1,o.isParagraph="1",o),l(1,o.allowSort="1",o),t.smxml.list._isparagraph="1",t.smxml.list._allowSort="1",t.smxml.list._issentence="0"):(document.querySelector("#allowSort").disabled=!1,document.querySelector("#allowSort").click(),l(1,o.isParagraph="0",o),l(1,o.allowSort="1",o),t.smxml.list._isparagraph="0",t.smxml.list._allowSort="0");break;case"headingCorrect":l(1,o.headingCorrect=e.target.value,o),t.smxml.list._headingCorrect=e.target.value}r(q(t))},function(e,t){1==t.target.checked?l(0,a[e].value="*"+a[e].value.trim(),a):l(0,a[e].value=a[e].value.trim().slice(1),a);let s=o.stateXMLToJSON;var i=setTimeout(function(){let e="\n";a.forEach((function(t,l){e+=a[l].value+"\n"})),s.smxml.list.__cdata=e,r(q(s)),clearTimeout(i)}.bind(this),200)},function(e,t,i){l(0,a[e].value=i.target.value,a);try{s[e]&&(s[e].value.indexOf("##")>0?s[e].value=s[e].value.split("##")[0]+"##"+i.target.value:s[e].value.indexOf("##")<1&&0==s[e].value.indexOf("!")?s[e].value="!"+i.target.value:s[e].value=i.target.value)}catch(e){console.warn({error:e})}l(0,a[e].value=1==t?"*"+a[e].value:a[e].value,a);let n=o.stateXMLToJSON;setTimeout(function(){let e="\n",t="###";a.forEach((function(t,l){e+=a[l].value+"\n"})),s&&s.forEach((function(e,l){t+=""==t?s[l].value:"###"+s[l].value})),n.smxml.list.__cdata=e,n.smxml.list._oldCData=t,r(q(n))}.bind(this),200)},function(e,t){let i="",n="";a.forEach((function(e,l){a[l].id!=t&&(i+=a[l].value+"\n")})),s&&s.forEach((function(e,l){s[l].id!=t&&(n+=""==n?s[l].value:"###"+s[l].value)})),l(1,o.open=!1,o);let c=o.stateXMLToJSON;c.smxml.list.__cdata=i,c.smxml.list._oldCData=n,r(q(c))},i,r,n,c,d,e=>{l(1,o.open=!0,o),l(1,o.data_value=e.value,o),l(1,o.data_id=e.id,o)},()=>{l(1,o.open=!1,o)},function(t){e.$$.not_equal(o.open,t)&&(o.open=t,l(1,o))},()=>{l(1,o.open=!1,o)}]}export default class extends t{constructor(e){super(),l(this,e,R,Q,a,{xml:8,getChildXml:9,changed_advance_xml:10,editorState:11,smValidate:12},j)}}
//# sourceMappingURL=ChooseNReorder-cf0dfa1d.js.map
