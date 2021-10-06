import{S as e,i as t,s as l,F as o,a3 as s,I as i,K as a,e as n,u as r,b as d,f as c,h as u,j as p,l as f,x as m,o as x,y as h,c as b,m as _,P as g,t as v,a as y,d as w,p as C,A,X as $}from"./main-ef6b7e84.js";import{s as j,p as k}from"./index-f82a010a.js";function T(e){o(e,"svelte-j2f4ig","a:hover{text-decoration:none}.hero-unit.svelte-j2f4ig.svelte-j2f4ig{border:1px solid #ccc;width:84%;padding:18px!important;font-size:15px!important;margin-bottom:30px;font-weight:200;line-height:30px;color:inherit;background-color:#eeeeee;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}#essay_editorAuth.svelte-j2f4ig.svelte-j2f4ig{max-height:250px;height:250px;background-color:white;border-collapse:separate;border:1px solid rgb(204, 204, 204);padding:4px;box-sizing:content-box;-webkit-box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px;overflow:scroll;outline:none}.essay-container .upload-area.svelte-j2f4ig #files_number.svelte-j2f4ig{width:115px}")}function H(e){let t;return{c(){t=n("span"),t.textContent="Upload"},m(e,l){u(e,t,l)},d(e){e&&x(t)}}}function L(e){let t,l,o,s,i,a,b,_,g,v,y,w,C,A,$,j,k,T,H,L,M,X,D,E,z,S,q,I,B=e[0].file_extension_text+"",F=e[0].number_of_files+"",K=e[0].you_can_upload+"";return{c(){t=n("div"),l=n("div"),o=n("div"),s=n("label"),i=r(B),a=d(),b=n("div"),_=n("select"),g=n("option"),g.textContent="All(*.*)",v=n("option"),v.textContent="*.txt",y=n("option"),y.textContent="*.pdf",w=n("option"),w.textContent="*.doc,*.docx",C=n("option"),C.textContent="*.doc,*.docx,*.pdf",A=n("option"),A.textContent="*.jpg,*.png,*.gif,*.bmp,*.jpeg",$=d(),j=n("div"),k=n("div"),T=n("label"),H=r(F),L=d(),M=n("div"),X=n("input"),E=d(),z=n("small"),S=r(K),c(s,"for","choose_ext"),c(s,"class","mb-0 pt-sm1 font14"),c(o,"class","col-sm-3"),g.__value="*.txt,*.doc,*.docx,*.pdf,*.jpg,*.png,*.gif,*.bmp,*.jpeg",g.value=g.__value,g.selected="selected",v.__value="*.txt",v.value=v.__value,y.__value="*.pdf",y.value=y.__value,w.__value="*.doc,*.docx",w.value=w.__value,C.__value="*.doc,*.docx,*.pdf",C.value=C.__value,A.__value="*.jpg,*.png,*.gif,*.bmp,*.jpeg",A.value=A.__value,c(_,"name","choose_ext"),c(_,"id","choose_ext"),c(_,"class","form-control form-control-md"),c(b,"class","col-sm-8"),c(l,"class","row"),c(T,"for","files_number"),c(T,"class","mb-0 font14 pt-1"),c(k,"class","col-sm-3"),c(X,"type","number"),c(X,"class","form-control form-control-md float-left filenumber svelte-j2f4ig"),c(X,"name","files_number"),c(X,"id","files_number"),X.value=D=e[2].files_number,c(X,"step","1"),c(X,"min","1"),c(X,"max","10"),X.required="required",c(z,"class","font11"),c(M,"class","col-sm-8"),c(j,"class","row mt-2"),c(t,"class","upload-area mt-3 text-left svelte-j2f4ig")},m(n,r){u(n,t,r),p(t,l),p(l,o),p(o,s),p(s,i),p(l,a),p(l,b),p(b,_),p(_,g),p(_,v),p(_,y),p(_,w),p(_,C),p(_,A),p(t,$),p(t,j),p(j,k),p(k,T),p(T,H),p(j,L),p(j,M),p(M,X),p(M,E),p(M,z),p(z,S),q||(I=[f(_,"blur",e[8]),f(X,"change",e[3])],q=!0)},p(e,t){1&t&&B!==(B=e[0].file_extension_text+"")&&m(i,B),1&t&&F!==(F=e[0].number_of_files+"")&&m(H,F),4&t&&D!==(D=e[2].files_number)&&(X.value=D),1&t&&K!==(K=e[0].you_can_upload+"")&&m(S,K)},d(e){e&&x(t),q=!1,h(I)}}}function M(e){let t,l,o,r,f,m,h,C,A,$;function j(t){e[7](t)}let k={id:"uploadChk",name:"uploadChk",color:"primary",$$slots:{default:[H]},$$scope:{ctx:e}};void 0!==e[1]&&(k.checked=e[1]),h=new s({props:k}),i.push((()=>a(h,"checked",j))),h.$on("click",e[4]);let T=e[1]&&L(e);return{c(){t=n("main"),l=n("div"),o=n("div"),r=d(),f=n("textarea"),m=d(),b(h.$$.fragment),A=d(),T&&T.c(),c(o,"id","essayToolbar"),c(o,"class","sun-editor"),c(f,"id","essay_editorAuth"),c(f,"class","text-left editor sun-editor-editable svelte-j2f4ig"),c(l,"class","hero-unit svelte-j2f4ig"),c(t,"id","SM_essay")},m(e,s){u(e,t,s),p(t,l),p(l,o),p(l,r),p(l,f),p(l,m),_(h,l,null),p(l,A),T&&T.m(l,null),$=!0},p(e,[t]){const o={};32768&t&&(o.$$scope={dirty:t,ctx:e}),!C&&2&t&&(C=!0,o.checked=e[1],g((()=>C=!1))),h.$set(o),e[1]?T?T.p(e,t):(T=L(e),T.c(),T.m(l,null)):T&&(T.d(1),T=null)},i(e){$||(v(h.$$.fragment,e),$=!0)},o(e){y(h.$$.fragment,e),$=!1},d(e){e&&x(t),w(h),T&&T.d()}}}function X(e,t,l){let o,s,{xml:i}=t,{getChildXml:a}=t,{l:n}=t,r=!1,d=null,c={files_number:1,cdata:!0};function u(e,t){d&&clearTimeout(d),d=setTimeout((function(){let e=t||s.getContents(),l=A.parseHtml(i),n=A.selectAll("#choose_ext option","selected")[0],r=l.querySelector("default");if(A.select("#uploadChk").checked)if(r)A.setAttr(r,{type:1,fileTypeExts:n?n.value:"",limit:A.select("#files_number").value});else{let e=A.parseHtml(`<default type="1" fileTypeExts="${n?n.value:""}" limit="${A.select("#files_number").value}"></default>`);l.appendChild(e)}else r&&(r.setAttribute("type",0),r.removeAttribute("fileTypeExts","limit"));if(r)r.innerHTML=`\x3c!--[CDATA[${e}]]--\x3e`;else{let t=A.parseHtml(`<default type="0">\x3c!--[CDATA[${e}]]--\x3e</default>`);l.appendChild(t)}o=formatXml(l.outerHTML),a(o)}),e)}C((()=>{s=j.create("essay_editorAuth",{width:"auto",toolbarContainer:"#essayToolbar",placeholder:"Write text here.",plugins:k,resizingBar:!1,showPathLabel:!1,buttonList:[["formatBlock"],["bold","italic","underline"],["link"],["list","outdent","indent","align"],["removeFormat"]]}),s.onChange=(e,t)=>{u(1e3,e)},s.onKeyDown=(e,t)=>{86!=e.keyCode&&67!=e.keyCode||u(1e3)};let e=A.find("#SM_essay","a,button,input,select");A.listenAll(e,"blur",(e=>{console.log(e.target),u(500)})),A.bind("#files_number","keydown",(e=>{if(8!=e.which&&0!=e.which&&(e.which<48||e.which>57))return A.select("#err_txt").innerHTML="Digits Only",A.selectAll("#err_txt","show"),!1}));let t=A.parseHtml(i);A.find(t,"default")&&1==A.find(t,"default").getAttribute("type")&&(A.selectAll(".upload-area","removeClass","h"),A.select("#uploadChk").checked=!0,console.log(A.find(t,"default").getAttribute("fileTypeExts")),A.select(`#choose_ext option[value="${A.find(t,"default").getAttribute("fileTypeExts")}"]`,"attr",{selected:"selected"}),A.select("#files_number").value=A.find(t,"default").getAttribute("limit")),function(e){if(c.cdata){l(2,c.cdata=!1,c);let t=$(e);AI.isValid(t)&&AI.isValid(t.smxml.default)&&s.setContents(t.smxml.default.__cdata)}}(i)}));return e.$$set=e=>{"xml"in e&&l(5,i=e.xml),"getChildXml"in e&&l(6,a=e.getChildXml),"l"in e&&l(0,n=e.l)},[n,r,c,function(e){if(8!=e.which&&0!=e.which&&(e.which<48||e.which>57))return A.select("#err_txt").innerHTML="Digits Only",A.selectAll("#err_txt","show"),!1;l(2,c.files_number=e.value,c),u(100)},u,i,a,function(e){r=e,l(1,r)},()=>u(500)]}export default class extends e{constructor(e){super(),t(this,e,X,M,l,{xml:5,getChildXml:6,l:0},T)}}
//# sourceMappingURL=Essay-b9a1c8f4.js.map
