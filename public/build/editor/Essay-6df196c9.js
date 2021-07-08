import{S as e,i as t,s as l,e as s,j as o,Z as i,I as a,K as n,u as r,b as d,f as u,h as c,l as p,x as f,o as m,y as x,c as h,m as b,M as _,t as v,a as g,d as y,p as C,A as w,X as A}from"./main-3116fa14.js";import{s as $,p as k}from"./index-14e2ae05.js";function z(e){let t;return{c(){t=s("span"),t.textContent="Upload"},m(e,l){c(e,t,l)},d(e){e&&m(t)}}}function T(e){let t,l,i,a,n,h,b,_,v,g,y,C,w,A,$,k,z,T,j,H,M,E,L,X,D,I,S,q,B=e[0].file_extension_text+"",K=e[0].number_of_files+"",O=e[0].you_can_upload+"";return{c(){t=s("div"),l=s("div"),i=s("div"),a=s("label"),n=r(B),h=d(),b=s("div"),_=s("select"),v=s("option"),v.textContent="All(*.*)",g=s("option"),g.textContent="*.txt",y=s("option"),y.textContent="*.pdf",C=s("option"),C.textContent="*.doc,*.docx",w=s("option"),w.textContent="*.doc,*.docx,*.pdf",A=s("option"),A.textContent="*.jpg,*.png,*.gif,*.bmp,*.jpeg",$=d(),k=s("div"),z=s("div"),T=s("label"),j=r(K),H=d(),M=s("div"),E=s("input"),X=d(),D=s("small"),I=r(O),u(a,"for","choose_ext"),u(a,"class","mb-0 pt-sm1 font14"),u(i,"class","col-sm-3"),v.__value="*.txt,*.doc,*.docx,*.pdf,*.jpg,*.png,*.gif,*.bmp,*.jpeg",v.value=v.__value,v.selected="selected",g.__value="*.txt",g.value=g.__value,y.__value="*.pdf",y.value=y.__value,C.__value="*.doc,*.docx",C.value=C.__value,w.__value="*.doc,*.docx,*.pdf",w.value=w.__value,A.__value="*.jpg,*.png,*.gif,*.bmp,*.jpeg",A.value=A.__value,u(_,"name","choose_ext"),u(_,"id","choose_ext"),u(_,"class","form-control form-control-md"),u(b,"class","col-sm-8"),u(l,"class","row"),u(T,"for","files_number"),u(T,"class","mb-0 font14 pt-1"),u(z,"class","col-sm-3"),u(E,"type","number"),u(E,"class","form-control form-control-md float-left filenumber svelte-fldz30"),u(E,"name","files_number"),u(E,"id","files_number"),E.value=L=e[2].files_number,u(E,"step","1"),u(E,"min","1"),u(E,"max","10"),E.required="required",u(D,"class","font11"),u(M,"class","col-sm-8"),u(k,"class","row mt-2"),u(t,"class","upload-area mt-3 text-left svelte-fldz30")},m(s,r){c(s,t,r),o(t,l),o(l,i),o(i,a),o(a,n),o(l,h),o(l,b),o(b,_),o(_,v),o(_,g),o(_,y),o(_,C),o(_,w),o(_,A),o(t,$),o(t,k),o(k,z),o(z,T),o(T,j),o(k,H),o(k,M),o(M,E),o(M,X),o(M,D),o(D,I),S||(q=[p(_,"blur",e[8]),p(E,"change",e[3].bind(this,2))],S=!0)},p(e,t){1&t&&B!==(B=e[0].file_extension_text+"")&&f(n,B),1&t&&K!==(K=e[0].number_of_files+"")&&f(j,K),4&t&&L!==(L=e[2].files_number)&&(E.value=L),1&t&&O!==(O=e[0].you_can_upload+"")&&f(I,O)},d(e){e&&m(t),S=!1,x(q)}}}function j(e){let t,l,r,p,f,x,C,w,A,$;function k(t){e[7].call(null,t)}let j={id:"uploadChk",name:"uploadChk",color:"primary",$$slots:{default:[z]},$$scope:{ctx:e}};void 0!==e[1]&&(j.checked=e[1]),C=new i({props:j}),a.push((()=>n(C,"checked",k))),C.$on("click",e[4]);let H=e[1]&&T(e);return{c(){t=s("main"),l=s("div"),r=s("div"),p=d(),f=s("textarea"),x=d(),h(C.$$.fragment),A=d(),H&&H.c(),u(r,"id","essayToolbar"),u(r,"class","sun-editor"),u(f,"id","essay_editorAuth"),u(f,"class","text-left editor sun-editor-editable svelte-fldz30"),u(l,"class","hero-unit svelte-fldz30"),u(t,"id","SM_essay")},m(e,s){c(e,t,s),o(t,l),o(l,r),o(l,p),o(l,f),o(l,x),b(C,l,null),o(l,A),H&&H.m(l,null),$=!0},p(e,[t]){const s={};32768&t&&(s.$$scope={dirty:t,ctx:e}),!w&&2&t&&(w=!0,s.checked=e[1],_((()=>w=!1))),C.$set(s),e[1]?H?H.p(e,t):(H=T(e),H.c(),H.m(l,null)):H&&(H.d(1),H=null)},i(e){$||(v(C.$$.fragment,e),$=!0)},o(e){g(C.$$.fragment,e),$=!1},d(e){e&&m(t),y(C),H&&H.d()}}}function H(e,t,l){let s,o,{xml:i}=t,{getChildXml:a}=t,{l:n}=t,r=!1,d=null,u={files_number:1,cdata:!0};function c(e,t){d&&clearTimeout(d),d=setTimeout((function(){let e=t||o.getContents(),l=w.parseHtml(i),n=w.selectAll("#choose_ext option","selected")[0],r=l.querySelector("default");if(w.select("#uploadChk").checked)if(r)w.setAttr(r,{type:1,fileTypeExts:n?n.value:"",limit:w.select("#files_number").value});else{let e=w.parseHtml(`<default type="1" fileTypeExts="${n?n.value:""}" limit="${w.select("#files_number").value}"></default>`);l.appendChild(e)}else r&&(r.setAttribute("type",0),r.removeAttribute("fileTypeExts","limit"));if(r)r.innerHTML=`\x3c!--[CDATA[${e}]]--\x3e`;else{let t=w.parseHtml(`<default type="0">\x3c!--[CDATA[${e}]]--\x3e</default>`);l.appendChild(t)}s=formatXml(l.outerHTML),a(s)}),e)}C((()=>{o=$.create("essay_editorAuth",{width:"auto",toolbarContainer:"#essayToolbar",placeholder:"Write text here.",plugins:k,resizingBar:!1,showPathLabel:!1,buttonList:[["formatBlock"],["bold","italic","underline"],["link"],["list","outdent","indent","align"],["removeFormat"]]}),o.onChange=(e,t)=>{c(1e3,e)},o.onKeyDown=(e,t)=>{86!=e.keyCode&&67!=e.keyCode||c(1e3)};let e=w.find("#SM_essay","a,button,input,select");w.listenAll(e,"blur",(e=>{console.log(e.target),c(500)})),w.bind("#files_number","keydown",(e=>{if(8!=e.which&&0!=e.which&&(e.which<48||e.which>57))return w.select("#err_txt").innerHTML="Digits Only",w.selectAll("#err_txt","show"),!1}));let t=w.parseHtml(i);w.find(t,"default")&&1==w.find(t,"default").getAttribute("type")&&(w.selectAll(".upload-area","removeClass","h"),w.select("#uploadChk").checked=!0,console.log(w.find(t,"default").getAttribute("fileTypeExts")),w.select(`#choose_ext option[value="${w.find(t,"default").getAttribute("fileTypeExts")}"]`,"attr",{selected:"selected"}),w.select("#files_number").value=w.find(t,"default").getAttribute("limit")),function(e){if(u.cdata){l(2,u.cdata=!1,u);let t=A(e);AI.isValid(t)&&AI.isValid(t.smxml.default)&&o.setContents(t.smxml.default.__cdata)}}(i)}));return e.$$set=e=>{"xml"in e&&l(5,i=e.xml),"getChildXml"in e&&l(6,a=e.getChildXml),"l"in e&&l(0,n=e.l)},[n,r,u,function(e,t){if(l(2,u.files_number=e.value,u),8!=e.which&&0!=e.which&&(e.which<48||e.which>57))return w.select("#err_txt").innerHTML="Digits Only",w.selectAll("#err_txt","show"),!1},c,i,a,function(e){r=e,l(1,r)},()=>c(500)]}export default class extends e{constructor(e){var i;super(),document.getElementById("svelte-fldz30-style")||((i=s("style")).id="svelte-fldz30-style",i.textContent=".hero-unit.svelte-fldz30.svelte-fldz30{border:1px solid #ccc;width:84%;padding:18px!important;font-size:15px!important;margin-bottom:30px;font-weight:200;line-height:30px;color:inherit;background-color:#eeeeee;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}#essay_editorAuth.svelte-fldz30.svelte-fldz30{max-height:250px;height:250px;background-color:white;border-collapse:separate;border:1px solid rgb(204, 204, 204);padding:4px;box-sizing:content-box;-webkit-box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px;overflow:scroll;outline:none}.essay-container .upload-area.svelte-fldz30 #files_number.svelte-fldz30{width:115px}",o(document.head,i)),t(this,e,H,j,l,{xml:5,getChildXml:6,l:0})}}
//# sourceMappingURL=Essay-6df196c9.js.map
