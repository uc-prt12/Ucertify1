import{S as e,i as t,s as l,e as i,j as s,a2 as o,I as a,K as n,u as r,b as d,f as u,T as c,h as f,V as p,U as m,l as x,x as _,a7 as b,o as h,y as g,c as v,m as y,O as C,t as w,a as j,d as A,p as $,A as k,X as T,Q as H}from"./main-ce4abdd6.js";import{s as L,p as M}from"./index-f8efd60f.js";function X(e){let t;return{c(){t=i("span"),t.textContent="Upload"},m(e,l){f(e,t,l)},d(e){e&&h(t)}}}function D(e){let t,l,o,a,n,v,y,C,w,j,A,$,k,T,H,L,M,X,D,E,z,I,S,q,B,O,V,K=e[0].file_extension_text+"",U=e[0].number_of_files+"",F=e[0].you_can_upload+"";return{c(){t=i("div"),l=i("div"),o=i("div"),a=i("label"),n=r(K),v=d(),y=i("div"),C=i("select"),w=i("option"),w.textContent="All(*.*)",j=i("option"),j.textContent="*.txt",A=i("option"),A.textContent="*.pdf",$=i("option"),$.textContent="*.doc,*.docx",k=i("option"),k.textContent="*.doc,*.docx,*.pdf",T=i("option"),T.textContent="*.jpg,*.png,*.gif,*.bmp,*.jpeg",H=d(),L=i("div"),M=i("div"),X=i("label"),D=r(U),E=d(),z=i("div"),I=i("input"),S=d(),q=i("small"),B=r(F),u(a,"for","choose_ext"),u(a,"class","mb-0 pt-sm1 font14"),u(o,"class","col-sm-3"),w.__value="*.txt,*.doc,*.docx,*.pdf,*.jpg,*.png,*.gif,*.bmp,*.jpeg",w.value=w.__value,w.selected="selected",j.__value="*.txt",j.value=j.__value,A.__value="*.pdf",A.value=A.__value,$.__value="*.doc,*.docx",$.value=$.__value,k.__value="*.doc,*.docx,*.pdf",k.value=k.__value,T.__value="*.jpg,*.png,*.gif,*.bmp,*.jpeg",T.value=T.__value,u(C,"name","choose_ext"),u(C,"id","choose_ext"),u(C,"class","form-control form-control-md"),void 0===e[2].file_ext&&c((()=>e[8].call(C))),u(y,"class","col-sm-8"),u(l,"class","row"),u(X,"for","files_number"),u(X,"class","mb-0 font14 pt-1"),u(M,"class","col-sm-3"),u(I,"type","number"),u(I,"class","form-control form-control-md float-left filenumber svelte-j2f4ig"),u(I,"name","files_number"),u(I,"id","files_number"),u(I,"step","1"),u(I,"min","1"),u(I,"max","10"),I.required="required",u(q,"class","font11"),u(z,"class","col-sm-8"),u(L,"class","row mt-2"),u(t,"class","upload-area mt-3 text-left svelte-j2f4ig")},m(i,r){f(i,t,r),s(t,l),s(l,o),s(o,a),s(a,n),s(l,v),s(l,y),s(y,C),s(C,w),s(C,j),s(C,A),s(C,$),s(C,k),s(C,T),p(C,e[2].file_ext),s(t,H),s(t,L),s(L,M),s(M,X),s(X,D),s(L,E),s(L,z),s(z,I),m(I,e[2].files_number),s(z,S),s(z,q),s(q,B),O||(V=[x(C,"change",e[8]),x(C,"blur",e[9]),x(I,"input",e[10]),x(I,"change",e[3])],O=!0)},p(e,t){1&t&&K!==(K=e[0].file_extension_text+"")&&_(n,K),4&t&&p(C,e[2].file_ext),1&t&&U!==(U=e[0].number_of_files+"")&&_(D,U),4&t&&b(I.value)!==e[2].files_number&&m(I,e[2].files_number),1&t&&F!==(F=e[0].you_can_upload+"")&&_(B,F)},d(e){e&&h(t),O=!1,g(V)}}}function E(e){let t,l,r,c,p,m,x,_,b,g;function $(t){e[7](t)}let k={id:"uploadChk",name:"uploadChk",color:"primary",$$slots:{default:[X]},$$scope:{ctx:e}};void 0!==e[1]&&(k.checked=e[1]),x=new o({props:k}),a.push((()=>n(x,"checked",$))),x.$on("click",e[4]);let T=e[1]&&D(e);return{c(){t=i("main"),l=i("div"),r=i("div"),c=d(),p=i("textarea"),m=d(),v(x.$$.fragment),b=d(),T&&T.c(),u(r,"id","essayToolbar"),u(r,"class","sun-editor"),u(p,"id","essay_editorAuth"),u(p,"class","text-left editor sun-editor-editable svelte-j2f4ig"),u(l,"class","hero-unit svelte-j2f4ig"),u(t,"id","SM_essay")},m(e,i){f(e,t,i),s(t,l),s(l,r),s(l,c),s(l,p),s(l,m),y(x,l,null),s(l,b),T&&T.m(l,null),g=!0},p(e,[t]){const i={};131072&t&&(i.$$scope={dirty:t,ctx:e}),!_&&2&t&&(_=!0,i.checked=e[1],C((()=>_=!1))),x.$set(i),e[1]?T?T.p(e,t):(T=D(e),T.c(),T.m(l,null)):T&&(T.d(1),T=null)},i(e){g||(w(x.$$.fragment,e),g=!0)},o(e){j(x.$$.fragment,e),g=!1},d(e){e&&h(t),A(x),T&&T.d()}}}function z(e,t,l){let i,s,{xml:o}=t,{getChildXml:a}=t,{l:n}=t,r=!1,d=null,u={files_number:0,cdata:!0,file_ext:""};function c(e,t){d&&clearTimeout(d),d=setTimeout((function(){let e=t||s.getContents(),n=k.parseHtml(o),d=n.querySelector("default");if(k.select("#uploadChk").checked)if(l(1,r=!0),d)k.setAttr(d,{type:1,fileTypeExts:u.file_ext||d.getAttribute("filetypeexts")||"*.txt,*.doc,*.docx,*.pdf,*.jpg,*.png,*.gif,*.bmp,*.jpeg",limit:u.files_number||d.getAttribute("limit")||1}),l(2,u.files_number=u.files_number||d.getAttribute("limit"),u),l(2,u.file_ext=u.file_ext||d.getAttribute("filetypeexts"),u);else{let e=k.parseHtml(`<default type="1" fileTypeExts="${u.file_ext||"*.txt,*.doc,*.docx,*.pdf,*.jpg,*.png,*.gif,*.bmp,*.jpeg"}" limit="${u.files_number||1}"></default>`);n.appendChild(e)}else d&&(d.setAttribute("type",0),d.removeAttribute("fileTypeExts","limit"));if(d)d.innerHTML=`\x3c!--[CDATA[${e}]]--\x3e`;else{let t=k.parseHtml(`<default type="0">\x3c!--[CDATA[${e}]]--\x3e</default>`);n.appendChild(t)}i=formatXml(n.outerHTML),a(i)}),e)}$((()=>{s=L.create("essay_editorAuth",{width:"auto",toolbarContainer:"#essayToolbar",placeholder:"Write text here.",plugins:M,resizingBar:!1,showPathLabel:!1,buttonList:[["formatBlock"],["bold","italic","underline"],["link"],["list","outdent","indent","align"],["removeFormat"]]}),s.onChange=(e,t)=>{c(1e3,e)},s.onKeyDown=(e,t)=>{86!=e.keyCode&&67!=e.keyCode||c(1e3)};let e=k.find("#SM_essay","a,button,input,select");k.listenAll(e,"blur",(e=>{c(500)})),k.bind("#files_number","keydown",(e=>{if(8!=e.which&&0!=e.which&&(e.which<48||e.which>57))return k.select("#err_txt").innerHTML="Digits Only",k.selectAll("#err_txt","show"),!1}));let t=k.parseHtml(o);k.find(t,"default")&&1==k.find(t,"default").getAttribute("type")&&(k.selectAll(".upload-area","removeClass","h"),k.select("#uploadChk").checked=!0,k.select(`#choose_ext option[value="${k.find(t,"default").getAttribute("fileTypeExts")}"]`,"attr",{selected:"selected"}),k.select("#files_number").value=k.find(t,"default").getAttribute("limit")),function(e){if(u.cdata){l(2,u.cdata=!1,u);let t=T(e);AI.isValid(t)&&AI.isValid(t.smxml.default)&&s.setContents(t.smxml.default.__cdata)}}(o)}));return e.$$set=e=>{"xml"in e&&l(5,o=e.xml),"getChildXml"in e&&l(6,a=e.getChildXml),"l"in e&&l(0,n=e.l)},[n,r,u,function(e){if(8!=e.which&&0!=e.which&&(e.which<48||e.which>57))return k.select("#err_txt").innerHTML="Digits Only",k.selectAll("#err_txt","show"),!1;c(100)},c,o,a,function(e){r=e,l(1,r)},function(){u.file_ext=H(this),l(2,u)},()=>c(100),function(){u.files_number=b(this.value),l(2,u)}]}export default class extends e{constructor(e){var o;super(),document.getElementById("svelte-j2f4ig-style")||((o=i("style")).id="svelte-j2f4ig-style",o.textContent="a:hover{text-decoration:none}.hero-unit.svelte-j2f4ig.svelte-j2f4ig{border:1px solid #ccc;width:84%;padding:18px!important;font-size:15px!important;margin-bottom:30px;font-weight:200;line-height:30px;color:inherit;background-color:#eeeeee;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}#essay_editorAuth.svelte-j2f4ig.svelte-j2f4ig{max-height:250px;height:250px;background-color:white;border-collapse:separate;border:1px solid rgb(204, 204, 204);padding:4px;box-sizing:content-box;-webkit-box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;box-shadow:rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;border-top-right-radius:3px;border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-top-left-radius:3px;overflow:scroll;outline:none}.essay-container .upload-area.svelte-j2f4ig #files_number.svelte-j2f4ig{width:115px}",s(document.head,o)),t(this,e,z,E,l,{xml:5,getChildXml:6,l:0})}}
//# sourceMappingURL=Essay-f0cbb803.js.map