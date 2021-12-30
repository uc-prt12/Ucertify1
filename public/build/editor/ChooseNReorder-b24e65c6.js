import{E as e,B as t,S as l,i as a,s,D as o,a1 as r,e as i,b as n,f as c,g as d,h as m,j as u,l as h,v as p,o as v,y as f,F as g,G as x,H as _,c as $,m as S,N as b,t as w,a as y,d as k,z as C,C as A,X as q,J as E,u as T,r as O,w as D,A as L,U as P}from"./main-ac74766a.js";import"./style-inject.es-1f59c1d0.js";import"./choose.min-be4c2387.js";const X=new e;let M={err:{q9:t.max_error,q27:"You have exceeded the module limit. You can only create 6 statement nodes and 4 option nodes.",q6_advance:t.max_row_col_error},processError:function(e,t){return{error:e,message:t}},validate:function(e,t,l){if("q"==e||"u"==e)switch(t){case 9:return this.validate9(l);case 14:return this.validate14(l);case 6:return this.validate6(l);case 26:return this.validate26(l);case 27:return this.validate27(l)}},validate9:function(e){return X.selectAll("#fillmain [id^=elem]").length>6?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate6:function(e){let t=X.selectAll("#choose #sortable li").length;return console.log("len =>"+t),t>5?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate26:function(e){let t=X.selectAll("#mytable >tbody >tr").length,l=X.selectAll("#mytable >thead >tr >th").length;return t>5||l>6?this.processError(!0,this.err.q6_advance):this.processError(!1,"valid")},validate14:function(e){let t=X.selectAll("#matchListArea [class*='textarea_1']").length,l=selectAll("#matchListArea [class*='textarea_2']").length;return t>6||l>6?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate27:function(e){let t=X.selectAll("#choicemain .testmode_table tbody tr").length,l=X.selectAll("#choicemain .testmode_table thead tr th").length;return t>6||l>5?this.processError(!0,this.err.q27):this.processError(!1,"valid")}};function N(e){o(e,"svelte-1afsy3o",".colorgray{width:56px;background-color:lightgrey}.addbutton.svelte-1afsy3o{position:relative;left:32px;height:31px}.addbuttonplus.svelte-1afsy3o{font-size:24px}.height30.svelte-1afsy3o{height:30px !important}.top1.svelte-1afsy3o{top:1px}.top6{top:6px}")}function J(e,t,l){const a=e.slice();return a[25]=t[l],a[27]=l,a}function j(e){let l,a=t.allow_sort+"";return{c(){l=T(a)},m(e,t){m(e,l,t)},p:O,d(e){e&&v(l)}}}function H(e){let l,a=t.in_sentence+"";return{c(){l=T(a)},m(e,t){m(e,l,t)},p:O,d(e){e&&v(l)}}}function V(e){let l,a=t.in_paragraph+"";return{c(){l=T(a)},m(e,t){m(e,l,t)},p:O,d(e){e&&v(l)}}}function F(e){let t,l,a,s,o,r,g,x,_,$,S,b,w,y,k;function C(){return e[13](e[25])}return{c(){t=i("div"),l=i("div"),a=i("div"),s=i("input"),r=n(),g=i("div"),x=i("textarea"),$=n(),S=i("div"),b=i("span"),c(s,"type","checkbox"),c(s,"id","check_correct_ans"),c(s,"name","check_correct_ans"),c(s,"class","secure-icon float-end"),s.checked=o="*"==e[25].value.charAt(0),d(s,"position","relative"),d(s,"top","11px"),d(s,"right","15px"),c(a,"class","col-1"),c(x,"class","height32 outline0 mb-1 ms-0 "),x.value=_="*"==e[25].value.charAt(0)?e[25].value.slice(1):e[25].value,c(g,"class","col"),c(b,"class","remove-item icomoon-24px-delete-1 height30 top1 position-relative float-start svelte-1afsy3o"),c(b,"tabindex","0"),d(b,"right","39px"),c(l,"class","form-row mt-head"),c(t,"class","clearfix mt choose_options"),c(t,"key",w=e[27])},m(o,i){m(o,t,i),u(t,l),u(l,a),u(a,s),u(l,r),u(l,g),u(g,x),u(l,$),u(l,S),u(S,b),y||(k=[h(s,"click",(function(){p(e[5].bind(e[25].value,e[27]))&&e[5].bind(e[25].value,e[27]).apply(this,arguments)})),h(x,"change",(function(){p(e[6].bind(e[25].value,e[27],e[2][e[27]]))&&e[6].bind(e[25].value,e[27],e[2][e[27]]).apply(this,arguments)})),h(b,"click",C)],y=!0)},p(t,l){e=t,1&l&&o!==(o="*"==e[25].value.charAt(0))&&(s.checked=o),1&l&&_!==(_="*"==e[25].value.charAt(0)?e[25].value.slice(1):e[25].value)&&(x.value=_)},d(e){e&&v(t),y=!1,f(k)}}}function I(e){let t,l,a;return{c(){t=i("h4"),t.textContent="Confirmation",l=n(),a=i("div"),a.innerHTML='<span class="col-md-12 mt-4">Do you really want to delete?</span>',c(a,"class","row")},m(e,s){m(e,t,s),m(e,l,s),m(e,a,s)},d(e){e&&v(t),e&&v(l),e&&v(a)}}}function Y(e){let t;return{c(){t=T("Yes")},m(e,l){m(e,t,l)},d(e){e&&v(t)}}}function z(e){let t,l,a,s,o,r,d;return s=new P({props:{variant:"contained",class:"bg-primary text-white",$$slots:{default:[Y]},$$scope:{ctx:e}}}),s.$on("click",(function(){p(e[7].bind(this,e[1].data_value,e[1].data_id))&&e[7].bind(this,e[1].data_value,e[1].data_id).apply(this,arguments)})),{c(){t=i("div"),l=i("input"),a=n(),$(s.$$.fragment),c(l,"type","button"),c(l,"variant","contained"),c(l,"class","btn btn-light colorgray"),l.value="No",c(t,"slot","footer"),c(t,"class","svelteFooter")},m(i,n){m(i,t,n),u(t,l),u(t,a),S(s,t,null),o=!0,r||(d=h(l,"click",e[14]),r=!0)},p(t,l){e=t;const a={};268435456&l&&(a.$$scope={dirty:l,ctx:e}),s.$set(a)},i(e){o||(w(s.$$.fragment,e),o=!0)},o(e){y(s.$$.fragment,e),o=!1},d(e){e&&v(t),k(s),r=!1,d()}}}function B(e){let t,l,a,s,o,d,p,A,q,E,T,O,D,L,P,X,M,N,Y,B,G,R,U,K,Q,W,Z,ee,te,le,ae,se,oe,re,ie,ne,ce;L=new r({props:{id:"allowSort",color:"",style:"1"==e[1].isParagraph||"1"==e[1].isSentence?"cursor: not-allowed":"",checked:1==e[1].allowSort,$$slots:{default:[j]},$$scope:{ctx:e}}}),L.$on("click",e[4]),M=new r({props:{id:"isSentence",color:"primary",checked:1==e[1].isSentence,$$slots:{default:[H]},$$scope:{ctx:e}}}),M.$on("click",e[4]),B=new r({props:{id:"isParagraph",color:"primary",checked:1==e[1].isParagraph,$$slots:{default:[V]},$$scope:{ctx:e}}}),B.$on("click",e[4]);let de=e[0],me=[];for(let t=0;t<de.length;t+=1)me[t]=F(J(e,de,t));function ue(t){e[15](t)}let he={$$slots:{footer:[z],default:[I]},$$scope:{ctx:e}};return void 0!==e[1].open&&(he.visible=e[1].open),oe=new g({props:he}),x.push((()=>_(oe,"visible",ue))),oe.$on("close",e[16]),{c(){t=i("main"),l=i("div"),a=i("center"),s=i("div"),o=i("div"),d=i("div"),p=i("label"),p.textContent="Title",A=n(),q=i("input"),T=n(),O=i("div"),D=i("div"),$(L.$$.fragment),P=n(),X=i("div"),$(M.$$.fragment),N=n(),Y=i("div"),$(B.$$.fragment),G=n(),R=i("div");for(let e=0;e<me.length;e+=1)me[e].c();U=n(),K=i("div"),K.innerHTML='<p class="mb-md">Add a new item by clicking the <b>Add Item</b> button at the bottom-left corner.</p>',Q=n(),W=i("button"),W.innerHTML='<span class="addbuttonplus svelte-1afsy3o">+</span>   Add option',Z=n(),ee=i("input"),te=n(),le=i("input"),se=n(),$(oe.$$.fragment),c(p,"for","headingCorrect"),c(p,"class","mt-1 pt-1"),c(q,"id","headingCorrect"),c(q,"type","text"),c(q,"class","sm_input_text mt mb"),q.value=E=e[1].headingCorrect,c(d,"class","d-flex ms-2 ps-4"),c(D,"class","col-md-3 pd-0 float-left"),c(X,"class","col-md-3 pd-0 float-left"),c(Y,"class","col-md-3 pd-0 float-left"),c(O,"class","clearfix mt ps-4"),c(o,"class","choose_head_content px-3 pt-3 pb-0"),c(K,"class","alert alert-info message_content"),c(W,"type","button"),c(W,"id","add-item"),c(W,"class","btn btn-sm btn-outline-primary btn-sm float-left d-flex align-items-center mt-3 addbutton svelte-1afsy3o"),c(R,"class","choose_item_container mb ps-4"),c(ee,"id","check"),c(ee,"type","hidden"),c(ee,"class",""),ee.value="",c(le,"type","hidden"),c(le,"name","special_module_xml"),c(le,"id","special_module_xml"),c(le,"defaultvalue",ae=e[1].xml),c(s,"id","main"),c(s,"class","border")},m(r,i){m(r,t,i),u(t,l),u(l,a),u(a,s),u(s,o),u(o,d),u(d,p),u(d,A),u(d,q),u(o,T),u(o,O),u(O,D),S(L,D,null),u(O,P),u(O,X),S(M,X,null),u(O,N),u(O,Y),S(B,Y,null),u(s,G),u(s,R);for(let e=0;e<me.length;e+=1)me[e].m(R,null);u(R,U),u(R,K),u(R,Q),u(R,W),u(s,Z),u(s,ee),u(s,te),u(s,le),u(t,se),S(oe,t,null),ie=!0,ne||(ce=[h(q,"change",e[4]),h(W,"click",e[3])],ne=!0)},p(e,[t]){(!ie||2&t&&E!==(E=e[1].headingCorrect)&&q.value!==E)&&(q.value=E);const l={};2&t&&(l.style="1"==e[1].isParagraph||"1"==e[1].isSentence?"cursor: not-allowed":""),2&t&&(l.checked=1==e[1].allowSort),268435456&t&&(l.$$scope={dirty:t,ctx:e}),L.$set(l);const a={};2&t&&(a.checked=1==e[1].isSentence),268435456&t&&(a.$$scope={dirty:t,ctx:e}),M.$set(a);const s={};if(2&t&&(s.checked=1==e[1].isParagraph),268435456&t&&(s.$$scope={dirty:t,ctx:e}),B.$set(s),103&t){let l;for(de=e[0],l=0;l<de.length;l+=1){const a=J(e,de,l);me[l]?me[l].p(a,t):(me[l]=F(a),me[l].c(),me[l].m(R,U))}for(;l<me.length;l+=1)me[l].d(1);me.length=de.length}(!ie||2&t&&ae!==(ae=e[1].xml))&&c(le,"defaultvalue",ae);const o={};268435458&t&&(o.$$scope={dirty:t,ctx:e}),!re&&2&t&&(re=!0,o.visible=e[1].open,b((()=>re=!1))),oe.$set(o)},i(e){ie||(w(L.$$.fragment,e),w(M.$$.fragment,e),w(B.$$.fragment,e),w(oe.$$.fragment,e),ie=!0)},o(e){y(L.$$.fragment,e),y(M.$$.fragment,e),y(B.$$.fragment,e),y(oe.$$.fragment,e),ie=!1},d(e){e&&v(t),k(L),k(M),k(B),C(me,e),k(oe),ne=!1,f(ce)}}}function G(e,l,a){let s=[],o=[],r={},{xml:i}=l,{getChildXml:n}=l,{changed_advance_xml:c}=l,{editorState:d}=l,{smValidate:m}=l;D({xml:"",headingCorrect:"",allowSort:"",isSentence:"",isParagraph:"",isadvance:!1,CDATA:"",istoggled:!1,openImageDialog:!1,openErrorDialog:!1,row_value:"",col_value:"",err_message:t.min_row_col_value,tomaketable:"none",open:!1,data_id:"",data_value:"",stateXMLToJSON:""}).subscribe((e=>{a(1,r=e)}));let u=[];A((()=>{r.xml!=i&&(a(1,r.xml=i,r),a(1,r.stateXMLToJSON=q(i),r),function(e){let t,l;try{a(0,s=[]),o=[],e.smxml.list._oldCData&&(l=e.smxml.list._oldCData.split("###")),t=e.smxml.list.__cdata.split("\n"),e.smxml.list._row&&e.smxml.list._col&&(delete e.smxml.list._allowsort,delete e.smxml.list._headingAll,c(E(e),26)),t.forEach((function(e,l){""!=t[l].trim()&&s.push({value:t[l].replace(/^\s+/g,""),id:l})})),l&&l.forEach((function(e,t){""!=l[t].trim()&&o.push({value:l[t].replace(/^\s+/g,""),id:t})})),function(e){let t=e,l=!1;t.smxml.list._headingCorrect&&(t.smxml.list._headingcorrect=t.smxml.list._headingCorrect,delete t.smxml.list._headingCorrect,l=!0),t.smxml.list._allowSort&&(t.smxml.list._allowsort=t.smxml.list._allowSort,delete t.smxml.list._allowSort,l=!0),t.smxml.list._isParagraph&&(t.smxml.list._isparagraph=t.smxml.list._isParagraph,delete t.smxml.list._isParagraph,l=!0),t.smxml.list._isSentence&&(t.smxml.list._issentence=t.smxml.list._isSentence,delete t.smxml.list._isSentence,l=!0),1==l&&n(E(t))}(e),a(1,r.headingCorrect=e.smxml.list._headingcorrect,r),a(1,r.allowSort=e.smxml.list._allowsort,r),a(1,r.isSentence=e.smxml.list._issentence,r),a(1,r.isParagraph=e.smxml.list._isparagraph,r)}catch(e){console.warn({error:e,"function name":"parseXMLAuthoring","File name":"ChooseNReorder.js"})}}(r.stateXMLToJSON))}));return e.$$set=e=>{"xml"in e&&a(8,i=e.xml),"getChildXml"in e&&a(9,n=e.getChildXml),"changed_advance_xml"in e&&a(10,c=e.changed_advance_xml),"editorState"in e&&a(11,d=e.editorState),"smValidate"in e&&a(12,m=e.smValidate)},e.$$.update=()=>{1&e.$$.dirty&&s.forEach((function(e,t){a(2,u[t]="*"==e.value.charAt(0),u)}))},[s,r,u,function(){L.find("#choose","#sortable li","all").length<=9?function(){let e=r.stateXMLToJSON;e.smxml.list.__cdata=e.smxml.list.__cdata+"\n*Option value",e.smxml.list._oldCData&&(e.smxml.list._oldCData.lastIndexOf("###")==e.smxml.list._oldCData.length-3?e.smxml.list._oldCData+="*Option value":e.smxml.list._oldCData+="###*Option value");if(n(E(e)),!e.smxml.list._row&&!e.smxml.list._col){var t=M.validate(d.content_type,d.item,d.content_icon);m(t)}}():L&&L.alert("Maximum possible value of nodes are 10.")},function(e){let t=r.stateXMLToJSON;switch(e.target.id){case"allowSort":"1"!=r.isParagraph&&"1"!=r.isSentence||(document.querySelector("#allowSort").checked=!0),t.smxml.list._allowsort=1==e.target.checked?"1":"0";break;case"isSentence":1==e.target.checked?(0==document.querySelector("#allowSort").checked?(document.querySelector("#allowSort").click(),document.querySelector("#allowSort").disabled=!0):document.querySelector("#allowSort").disabled=!0,a(1,r.isSentence="1",r),a(1,r.allowSort="1",r),t.smxml.list._issentence="1",t.smxml.list._allowSort="1",t.smxml.list._isparagraph="0"):(document.querySelector("#allowSort").disabled=!1,document.querySelector("#allowSort").click(),a(1,r.isSentence="0",r),a(1,r.allowSort="1",r),t.smxml.list._issentence="0",t.smxml.list._allowSort="0");break;case"isParagraph":1==e.target.checked?(0==document.querySelector("#allowSort").getAttribute("checked")?(document.querySelector("#allowSort").click(),document.querySelector("#allowSort").disabled=!0):document.querySelector("#allowSort").disabled=!0,a(1,r.isParagraph="1",r),a(1,r.allowSort="1",r),t.smxml.list._isparagraph="1",t.smxml.list._allowSort="1",t.smxml.list._issentence="0"):(document.querySelector("#allowSort").disabled=!1,document.querySelector("#allowSort").click(),a(1,r.isParagraph="0",r),a(1,r.allowSort="1",r),t.smxml.list._isparagraph="0",t.smxml.list._allowSort="0");break;case"headingCorrect":a(1,r.headingCorrect=e.target.value,r),t.smxml.list._headingCorrect=e.target.value}n(E(t))},function(e,t){1==t.target.checked?a(0,s[e].value="*"+s[e].value.trim(),s):a(0,s[e].value=s[e].value.trim().slice(1),s);let l=r.stateXMLToJSON;var o=setTimeout(function(){let e="\n";s.forEach((function(t,l){e+=s[l].value+"\n"})),l.smxml.list.__cdata=e,n(E(l)),clearTimeout(o)}.bind(this),200)},function(e,t,l){a(0,s[e].value=l.target.value,s);try{o[e]&&(o[e].value.indexOf("##")>0?o[e].value=o[e].value.split("##")[0]+"##"+l.target.value:o[e].value.indexOf("##")<1&&0==o[e].value.indexOf("!")?o[e].value="!"+l.target.value:o[e].value=l.target.value)}catch(e){console.warn({error:e})}a(0,s[e].value=1==t?"*"+s[e].value:s[e].value,s);let i=r.stateXMLToJSON;setTimeout(function(){let e="\n",t="###";s.forEach((function(t,l){e+=s[l].value+"\n"})),o&&o.forEach((function(e,l){t+=""==t?o[l].value:"###"+o[l].value})),i.smxml.list.__cdata=e,i.smxml.list._oldCData=t,n(E(i))}.bind(this),200)},function(e,t){let l="",i="";s.forEach((function(e,a){s[a].id!=t&&(l+=s[a].value+"\n")})),o&&o.forEach((function(e,l){o[l].id!=t&&(i+=""==i?o[l].value:"###"+o[l].value)})),a(1,r.open=!1,r);let c=r.stateXMLToJSON;c.smxml.list.__cdata=l,c.smxml.list._oldCData=i,n(E(c))},i,n,c,d,m,e=>{a(1,r.open=!0,r),a(1,r.data_value=e.value,r),a(1,r.data_id=e.id,r)},()=>{a(1,r.open=!1,r)},function(t){e.$$.not_equal(r.open,t)&&(r.open=t,a(1,r))},()=>{a(1,r.open=!1,r)}]}export default class extends l{constructor(e){super(),a(this,e,G,B,s,{xml:8,getChildXml:9,changed_advance_xml:10,editorState:11,smValidate:12},N)}}
//# sourceMappingURL=ChooseNReorder-b24e65c6.js.map
