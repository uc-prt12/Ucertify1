import{E as e,B as t,S as l,i as a,s,D as o,e as r,j as i,a0 as n,b as c,f as d,g as m,h as u,l as h,v as p,o as v,y as f,F as g,G as x,H as _,c as $,m as S,M as b,t as y,a as w,d as k,z as C,C as A,X as q,J as E,u as T,r as O,w as P,A as D,P as L}from"./main-df37ef64.js";import"./style-inject.es-1f59c1d0.js";import"./choose.min-be4c2387.js";const M=new e;let X={err:{q9:t.max_error,q27:"You have exceeded the module limit. You can only create 6 statement nodes and 4 option nodes.",q6_advance:t.max_row_col_error},processError:function(e,t){return{error:e,message:t}},validate:function(e,t,l){if("q"==e||"u"==e)switch(t){case 9:return this.validate9(l);case 14:return this.validate14(l);case 6:return this.validate6(l);case 26:return this.validate26(l);case 27:return this.validate27(l)}},validate9:function(e){return M.selectAll("#fillmain [id^=elem]").length>6?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate6:function(e){let t=M.selectAll("#choose #sortable li").length;return console.log("len =>"+t),t>5?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate26:function(e){let t=M.selectAll("#mytable >tbody >tr").length,l=M.selectAll("#mytable >thead >tr >th").length;return t>5||l>6?this.processError(!0,this.err.q6_advance):this.processError(!1,"valid")},validate14:function(e){let t=M.selectAll("#matchListArea [class*='textarea_1']").length,l=selectAll("#matchListArea [class*='textarea_2']").length;return t>6||l>6?this.processError(!0,this.err.q9):this.processError(!1,"valid")},validate27:function(e){let t=M.selectAll("#choicemain .testmode_table tbody tr").length,l=M.selectAll("#choicemain .testmode_table thead tr th").length;return t>6||l>5?this.processError(!0,this.err.q27):this.processError(!1,"valid")}};const{document:N}=o;function J(e,t,l){const a=e.slice();return a[25]=t[l],a[27]=l,a}function j(e){let l,a=t.allow_sort+"";return{c(){l=T(a)},m(e,t){u(e,l,t)},p:O,d(e){e&&v(l)}}}function H(e){let l,a=t.in_sentence+"";return{c(){l=T(a)},m(e,t){u(e,l,t)},p:O,d(e){e&&v(l)}}}function I(e){let l,a=t.in_paragraph+"";return{c(){l=T(a)},m(e,t){u(e,l,t)},p:O,d(e){e&&v(l)}}}function V(e){let t,l,a,s,o,n,g,x,_,$,S,b,y,w,k;function C(){return e[13](e[25])}return{c(){t=r("div"),l=r("div"),a=r("div"),s=r("input"),n=c(),g=r("div"),x=r("textarea"),$=c(),S=r("div"),b=r("span"),d(s,"type","checkbox"),d(s,"id","check_correct_ans"),d(s,"name","check_correct_ans"),d(s,"class","secure-icon float-end"),s.checked=o="*"==e[25].value.charAt(0),m(s,"position","relative"),m(s,"top","11px"),m(s,"right","15px"),d(a,"class","col-1"),d(x,"class","height32 outline0 mb-1 ms-0 "),x.value=_="*"==e[25].value.charAt(0)?e[25].value.slice(1):e[25].value,d(g,"class","col"),d(b,"class","remove-item icomoon-24px-delete-1 height30 top1 position-relative float-start svelte-1afsy3o"),d(b,"tabindex","0"),m(b,"right","39px"),d(l,"class","form-row mt-head"),d(t,"class","clearfix mt choose_options"),d(t,"key",y=e[27])},m(o,r){u(o,t,r),i(t,l),i(l,a),i(a,s),i(l,n),i(l,g),i(g,x),i(l,$),i(l,S),i(S,b),w||(k=[h(s,"click",(function(){p(e[5].bind(e[25].value,e[27]))&&e[5].bind(e[25].value,e[27]).apply(this,arguments)})),h(x,"change",(function(){p(e[6].bind(e[25].value,e[27],e[2][e[27]]))&&e[6].bind(e[25].value,e[27],e[2][e[27]]).apply(this,arguments)})),h(b,"click",C)],w=!0)},p(t,l){e=t,1&l&&o!==(o="*"==e[25].value.charAt(0))&&(s.checked=o),1&l&&_!==(_="*"==e[25].value.charAt(0)?e[25].value.slice(1):e[25].value)&&(x.value=_)},d(e){e&&v(t),w=!1,f(k)}}}function F(e){let t;return{c(){t=T("Yes")},m(e,l){u(e,t,l)},d(e){e&&v(t)}}}function Y(e){let t,l,a,s,o,n,m;return s=new L({props:{variant:"contained",class:"bg-primary text-white",$$slots:{default:[F]},$$scope:{ctx:e}}}),s.$on("click",(function(){p(e[7].bind(this,e[1].data_value,e[1].data_id))&&e[7].bind(this,e[1].data_value,e[1].data_id).apply(this,arguments)})),{c(){t=r("div"),l=r("input"),a=c(),$(s.$$.fragment),d(l,"type","button"),d(l,"variant","contained"),d(l,"class","btn btn-light colorgray"),l.value="No",d(t,"slot","footer"),d(t,"class","svelteFooter")},m(r,c){u(r,t,c),i(t,l),i(t,a),S(s,t,null),o=!0,n||(m=h(l,"click",e[14]),n=!0)},p(t,l){e=t;const a={};268435456&l&&(a.$$scope={dirty:l,ctx:e}),s.$set(a)},i(e){o||(y(s.$$.fragment,e),o=!0)},o(e){w(s.$$.fragment,e),o=!1},d(e){e&&v(t),k(s),n=!1,m()}}}function z(e){let t,l,a,s;return{c(){t=r("h4"),t.textContent="Confirmation",l=c(),a=r("div"),a.innerHTML='<span class="col-md-12 mt-4">Do you really want to delete?</span>',s=c(),d(a,"class","row")},m(e,o){u(e,t,o),u(e,l,o),u(e,a,o),u(e,s,o)},p:O,i:O,o:O,d(e){e&&v(t),e&&v(l),e&&v(a),e&&v(s)}}}function B(e){let t,l,a,s,o,m,p,A,q,E,T,O,P,D,L,M,X,N,F,B,G,R,K,Q,U,W,Z,ee,te,le,ae,se,oe,re,ie,ne,ce;D=new n({props:{id:"allowSort",color:"",style:"1"==e[1].isParagraph||"1"==e[1].isSentence?"cursor: not-allowed":"",checked:1==e[1].allowSort,$$slots:{default:[j]},$$scope:{ctx:e}}}),D.$on("click",e[4]),X=new n({props:{id:"isSentence",color:"primary",checked:1==e[1].isSentence,$$slots:{default:[H]},$$scope:{ctx:e}}}),X.$on("click",e[4]),B=new n({props:{id:"isParagraph",color:"primary",checked:1==e[1].isParagraph,$$slots:{default:[I]},$$scope:{ctx:e}}}),B.$on("click",e[4]);let de=e[0],me=[];for(let t=0;t<de.length;t+=1)me[t]=V(J(e,de,t));function ue(t){e[15](t)}let he={$$slots:{default:[z],footer:[Y]},$$scope:{ctx:e}};return void 0!==e[1].open&&(he.visible=e[1].open),oe=new g({props:he}),x.push((()=>_(oe,"visible",ue))),oe.$on("close",e[16]),{c(){t=r("main"),l=r("div"),a=r("center"),s=r("div"),o=r("div"),m=r("div"),p=r("label"),p.textContent="Title",A=c(),q=r("input"),T=c(),O=r("div"),P=r("div"),$(D.$$.fragment),L=c(),M=r("div"),$(X.$$.fragment),N=c(),F=r("div"),$(B.$$.fragment),G=c(),R=r("div");for(let e=0;e<me.length;e+=1)me[e].c();K=c(),Q=r("div"),Q.innerHTML='<p class="mb-md">Add a new item by clicking the <b>Add Item</b> button at the bottom-left corner.</p>',U=c(),W=r("button"),W.innerHTML='<span class="addbuttonplus svelte-1afsy3o">+</span>   Add option',Z=c(),ee=r("input"),te=c(),le=r("input"),se=c(),$(oe.$$.fragment),d(p,"for","headingCorrect"),d(p,"class","mt-1 pt-1"),d(q,"id","headingCorrect"),d(q,"type","text"),d(q,"class","sm_input_text mt mb"),q.value=E=e[1].headingCorrect,d(m,"class","d-flex ms-2 ps-4"),d(P,"class","col-md-3 pd-0 float-left"),d(M,"class","col-md-3 pd-0 float-left"),d(F,"class","col-md-3 pd-0 float-left"),d(O,"class","clearfix mt ps-4"),d(o,"class","choose_head_content px-3 pt-3 pb-0"),d(Q,"class","alert alert-info message_content"),d(W,"type","button"),d(W,"id","add-item"),d(W,"class","btn btn-sm btn-outline-primary btn-sm float-left d-flex align-items-center mt-3 addbutton svelte-1afsy3o"),d(R,"class","choose_item_container mb ps-4"),d(ee,"id","check"),d(ee,"type","hidden"),d(ee,"class",""),ee.value="",d(le,"type","hidden"),d(le,"name","special_module_xml"),d(le,"id","special_module_xml"),d(le,"defaultvalue",ae=e[1].xml),d(s,"id","main"),d(s,"class","border")},m(r,n){u(r,t,n),i(t,l),i(l,a),i(a,s),i(s,o),i(o,m),i(m,p),i(m,A),i(m,q),i(o,T),i(o,O),i(O,P),S(D,P,null),i(O,L),i(O,M),S(X,M,null),i(O,N),i(O,F),S(B,F,null),i(s,G),i(s,R);for(let e=0;e<me.length;e+=1)me[e].m(R,null);i(R,K),i(R,Q),i(R,U),i(R,W),i(s,Z),i(s,ee),i(s,te),i(s,le),i(t,se),S(oe,t,null),ie=!0,ne||(ce=[h(q,"change",e[4]),h(W,"click",e[3])],ne=!0)},p(e,[t]){(!ie||2&t&&E!==(E=e[1].headingCorrect)&&q.value!==E)&&(q.value=E);const l={};2&t&&(l.style="1"==e[1].isParagraph||"1"==e[1].isSentence?"cursor: not-allowed":""),2&t&&(l.checked=1==e[1].allowSort),268435456&t&&(l.$$scope={dirty:t,ctx:e}),D.$set(l);const a={};2&t&&(a.checked=1==e[1].isSentence),268435456&t&&(a.$$scope={dirty:t,ctx:e}),X.$set(a);const s={};if(2&t&&(s.checked=1==e[1].isParagraph),268435456&t&&(s.$$scope={dirty:t,ctx:e}),B.$set(s),103&t){let l;for(de=e[0],l=0;l<de.length;l+=1){const a=J(e,de,l);me[l]?me[l].p(a,t):(me[l]=V(a),me[l].c(),me[l].m(R,K))}for(;l<me.length;l+=1)me[l].d(1);me.length=de.length}(!ie||2&t&&ae!==(ae=e[1].xml))&&d(le,"defaultvalue",ae);const o={};268435458&t&&(o.$$scope={dirty:t,ctx:e}),!re&&2&t&&(re=!0,o.visible=e[1].open,b((()=>re=!1))),oe.$set(o)},i(e){ie||(y(D.$$.fragment,e),y(X.$$.fragment,e),y(B.$$.fragment,e),y(oe.$$.fragment,e),ie=!0)},o(e){w(D.$$.fragment,e),w(X.$$.fragment,e),w(B.$$.fragment,e),w(oe.$$.fragment,e),ie=!1},d(e){e&&v(t),k(D),k(X),k(B),C(me,e),k(oe),ne=!1,f(ce)}}}function G(e,l,a){let s=[],o=[],r={},{xml:i}=l,{getChildXml:n}=l,{changed_advance_xml:c}=l,{editorState:d}=l,{smValidate:m}=l;P({xml:"",headingCorrect:"",allowSort:"",isSentence:"",isParagraph:"",isadvance:!1,CDATA:"",istoggled:!1,openImageDialog:!1,openErrorDialog:!1,row_value:"",col_value:"",err_message:t.min_row_col_value,tomaketable:"none",open:!1,data_id:"",data_value:"",stateXMLToJSON:""}).subscribe((e=>{a(1,r=e)}));let u=[];A((()=>{r.xml!=i&&(a(1,r.xml=i,r),a(1,r.stateXMLToJSON=q(i),r),function(e){let t,l;try{a(0,s=[]),o=[],e.smxml.list._oldCData&&(l=e.smxml.list._oldCData.split("###")),t=e.smxml.list.__cdata.split("\n"),e.smxml.list._row&&e.smxml.list._col&&(delete e.smxml.list._allowsort,delete e.smxml.list._headingAll,c(E(e),26)),t.forEach((function(e,l){""!=t[l].trim()&&s.push({value:t[l].replace(/^\s+/g,""),id:l})})),l&&l.forEach((function(e,t){""!=l[t].trim()&&o.push({value:l[t].replace(/^\s+/g,""),id:t})})),function(e){let t=e,l=!1;t.smxml.list._headingCorrect&&(t.smxml.list._headingcorrect=t.smxml.list._headingCorrect,delete t.smxml.list._headingCorrect,l=!0),t.smxml.list._allowSort&&(t.smxml.list._allowsort=t.smxml.list._allowSort,delete t.smxml.list._allowSort,l=!0),t.smxml.list._isParagraph&&(t.smxml.list._isparagraph=t.smxml.list._isParagraph,delete t.smxml.list._isParagraph,l=!0),t.smxml.list._isSentence&&(t.smxml.list._issentence=t.smxml.list._isSentence,delete t.smxml.list._isSentence,l=!0),1==l&&n(E(t))}(e),a(1,r.headingCorrect=e.smxml.list._headingcorrect,r),a(1,r.allowSort=e.smxml.list._allowsort,r),a(1,r.isSentence=e.smxml.list._issentence,r),a(1,r.isParagraph=e.smxml.list._isparagraph,r)}catch(e){console.warn({error:e,"function name":"parseXMLAuthoring","File name":"ChooseNReorder.js"})}}(r.stateXMLToJSON))}));return e.$$set=e=>{"xml"in e&&a(8,i=e.xml),"getChildXml"in e&&a(9,n=e.getChildXml),"changed_advance_xml"in e&&a(10,c=e.changed_advance_xml),"editorState"in e&&a(11,d=e.editorState),"smValidate"in e&&a(12,m=e.smValidate)},e.$$.update=()=>{1&e.$$.dirty&&s.forEach((function(e,t){a(2,u[t]="*"==e.value.charAt(0),u)}))},[s,r,u,function(){D.find("#choose","#sortable li","all").length<=9?function(){let e=r.stateXMLToJSON;e.smxml.list.__cdata=e.smxml.list.__cdata+"\n*Option value",e.smxml.list._oldCData&&(e.smxml.list._oldCData.lastIndexOf("###")==e.smxml.list._oldCData.length-3?e.smxml.list._oldCData+="*Option value":e.smxml.list._oldCData+="###*Option value");if(n(E(e)),!e.smxml.list._row&&!e.smxml.list._col){var t=X.validate(d.content_type,d.item,d.content_icon);m(t)}}():D&&D.alert("Maximum possible value of nodes are 10.")},function(e){let t=r.stateXMLToJSON;switch(e.target.id){case"allowSort":"1"!=r.isParagraph&&"1"!=r.isSentence||(document.querySelector("#allowSort").checked=!0),t.smxml.list._allowsort=1==e.target.checked?"1":"0";break;case"isSentence":1==e.target.checked?(0==document.querySelector("#allowSort").checked?(document.querySelector("#allowSort").click(),document.querySelector("#allowSort").disabled=!0):document.querySelector("#allowSort").disabled=!0,a(1,r.isSentence="1",r),a(1,r.allowSort="1",r),t.smxml.list._issentence="1",t.smxml.list._allowSort="1",t.smxml.list._isparagraph="0"):(document.querySelector("#allowSort").disabled=!1,document.querySelector("#allowSort").click(),a(1,r.isSentence="0",r),a(1,r.allowSort="1",r),t.smxml.list._issentence="0",t.smxml.list._allowSort="0");break;case"isParagraph":1==e.target.checked?(0==document.querySelector("#allowSort").getAttribute("checked")?(document.querySelector("#allowSort").click(),document.querySelector("#allowSort").disabled=!0):document.querySelector("#allowSort").disabled=!0,a(1,r.isParagraph="1",r),a(1,r.allowSort="1",r),t.smxml.list._isparagraph="1",t.smxml.list._allowSort="1",t.smxml.list._issentence="0"):(document.querySelector("#allowSort").disabled=!1,document.querySelector("#allowSort").click(),a(1,r.isParagraph="0",r),a(1,r.allowSort="1",r),t.smxml.list._isparagraph="0",t.smxml.list._allowSort="0");break;case"headingCorrect":a(1,r.headingCorrect=e.target.value,r),t.smxml.list._headingCorrect=e.target.value}n(E(t))},function(e,t){1==t.target.checked?a(0,s[e].value="*"+s[e].value.trim(),s):a(0,s[e].value=s[e].value.trim().slice(1),s);let l=r.stateXMLToJSON;var o=setTimeout(function(){let e="\n";s.forEach((function(t,l){e+=s[l].value+"\n"})),l.smxml.list.__cdata=e,n(E(l)),clearTimeout(o)}.bind(this),200)},function(e,t,l){a(0,s[e].value=l.target.value,s);try{o[e]&&(o[e].value.indexOf("##")>0?o[e].value=o[e].value.split("##")[0]+"##"+l.target.value:o[e].value.indexOf("##")<1&&0==o[e].value.indexOf("!")?o[e].value="!"+l.target.value:o[e].value=l.target.value)}catch(e){console.warn({error:e})}a(0,s[e].value=1==t?"*"+s[e].value:s[e].value,s);let i=r.stateXMLToJSON;setTimeout(function(){let e="\n",t="###";s.forEach((function(t,l){e+=s[l].value+"\n"})),o&&o.forEach((function(e,l){t+=""==t?o[l].value:"###"+o[l].value})),i.smxml.list.__cdata=e,i.smxml.list._oldCData=t,n(E(i))}.bind(this),200)},function(e,t){let l="",i="";s.forEach((function(e,a){s[a].id!=t&&(l+=s[a].value+"\n")})),o&&o.forEach((function(e,l){o[l].id!=t&&(i+=""==i?o[l].value:"###"+o[l].value)})),a(1,r.open=!1,r);let c=r.stateXMLToJSON;c.smxml.list.__cdata=l,c.smxml.list._oldCData=i,n(E(c))},i,n,c,d,m,e=>{a(1,r.open=!0,r),a(1,r.data_value=e.value,r),a(1,r.data_id=e.id,r)},()=>{a(1,r.open=!1,r)},function(t){e.$$.not_equal(r.open,t)&&(r.open=t,a(1,r))},()=>{a(1,r.open=!1,r)}]}export default class extends l{constructor(e){var t;super(),N.getElementById("svelte-1afsy3o-style")||((t=r("style")).id="svelte-1afsy3o-style",t.textContent=".colorgray{width:56px;background-color:lightgrey}.addbutton.svelte-1afsy3o{position:relative;left:32px;height:31px}.addbuttonplus.svelte-1afsy3o{font-size:24px}.height30.svelte-1afsy3o{height:30px !important}.top1.svelte-1afsy3o{top:1px}.top6{top:6px}",i(N.head,t)),a(this,e,G,B,s,{xml:8,getChildXml:9,changed_advance_xml:10,editorState:11,smValidate:12})}}
//# sourceMappingURL=ChooseNReorder-943e9568.js.map
