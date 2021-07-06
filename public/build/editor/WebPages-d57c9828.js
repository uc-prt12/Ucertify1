import{S as e,i as t,s as a,e as s,f as i,h as n,ac as o,r,o as l,p as d,E as c,A as g,ad as u,w as m,b as p,g as _,j as b,l as y,y as h,q as w,v as f,z as x,B as q,W as T}from"./main-daecf310.js";function v(e,t,a){const s=e.slice();return s[16]=t[a],s[18]=a,s}function M(e){let t,a,o,r,d,c,g,u,m,w,f,x,q,v,M,k=e[1]("Subject")+"",S=e[1]("Message")+"";return{c(){t=s("div"),o=p(),r=s("div"),c=p(),u=p(),m=s("br"),w=p(),f=s("textarea"),a=new T(o),i(r,"class","tinymce-editor auth-editor"),i(r,"contenteditable",d=!0),i(r,"id","subject"),i(r,"data-text","Subject"),_(r,"border-bottom","1px solid #e7e7e7"),_(r,"margin","10px 0 5px 0"),_(r,"min-height","80px"),g=new T(u),i(f,"id","message"),i(f,"rows",x=10),i(f,"cols",q=90),i(f,"placeholder","Message"),f.value="\t\r\n            "},m(s,i){n(s,t,i),a.m(k,t),b(t,o),b(t,r),b(t,c),g.m(S,t),b(t,u),b(t,m),b(t,w),b(t,f),v||(M=[y(r,"keyup",e[6].bind(this,"subject")),y(f,"Change",e[5])],v=!0)},p(e,t){2&t&&k!==(k=e[1]("Subject")+"")&&a.p(k),2&t&&S!==(S=e[1]("Message")+"")&&g.p(S)},d(e){e&&l(t),v=!1,h(M)}}}function k(e){let t,a=[],s=new Map,i=e[3];const o=e=>e[16].id;for(let t=0;t<i.length;t+=1){let n=v(e,i,t),r=o(n);s.set(r,a[t]=j(r,n))}return{c(){for(let e=0;e<a.length;e+=1)a[e].c();t=w()},m(e,s){for(let t=0;t<a.length;t+=1)a[t].m(e,s);n(e,t,s)},p(e,i){if(75&i){const n=e[3];a=x(a,i,o,1,e,n,s,t.parentNode,q,j,t,v)}},d(e){for(let t=0;t<a.length;t+=1)a[t].d(e);e&&l(t)}}}function S(e){let t,a,o,r,d,c,g,u,m,h=e[1](e[16].label)+"";return{c(){t=s("div"),o=p(),r=s("div"),c=p(),a=new T(o),i(r,"class","tinymce-editor auth-editor"),i(r,"contenteditable",d=!0),i(r,"id","subject"),i(r,"data-text","Subject"),_(r,"border-bottom","1px solid #e7e7e7"),_(r,"margin","10px 0 5px 0"),_(r,"min-height","125px"),i(t,"key",g=e[16].id)},m(s,i){n(s,t,i),a.m(h,t),b(t,o),b(t,r),b(t,c),u||(m=y(r,"keyup",(function(){f(e[6].bind(this,e[16].arg))&&e[6].bind(this,e[16].arg).apply(this,arguments)})),u=!0)},p(s,n){e=s,10&n&&h!==(h=e[1](e[16].label)+"")&&a.p(h),8&n&&g!==(g=e[16].id)&&i(t,"key",g)},d(e){e&&l(t),u=!1,m()}}}function j(e,t){let a,s,i=t[16].view.includes(t[0].item),o=i&&S(t);return{key:e,first:null,c(){a=w(),o&&o.c(),s=w(),this.first=a},m(e,t){n(e,a,t),o&&o.m(e,t),n(e,s,t)},p(e,t){9&t&&(i=e[16].view.includes(e[0].item)),i?o?o.p(e,t):(o=S(e),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},d(e){e&&l(a),o&&o.d(e),e&&l(s)}}}function A(e){let t,a,d,c;function g(e,t){return"p"==e[0].content_type?k:"e"==e[0].content_type?M:void 0}let u=g(e),m=u&&u(e);return{c(){t=s("div"),m&&m.c(),i(t,"id","webPagesAuthoring")},m(s,i){n(s,t,i),m&&m.m(t,null),d||(c=o(a=e[2].call(null,t,e[4])),d=!0)},p(e,[a]){u===(u=g(e))&&m?m.p(e,a):(m&&m.d(1),m=u&&u(e),m&&(m.c(),m.m(t,null)))},i:r,o:r,d(e){e&&l(t),m&&m.d(),d=!1,c()}}}function C(e){let t=[document.querySelectorAll("style"),document.querySelectorAll("link"),document.querySelectorAll("script")],a="";for(let e=0;e<3;e++)for(let s=0;s<t[e].length;s++)/bundle\.js/gm.test(t[e][s].outerHTML)||(a+=t[e][s].outerHTML);let s="<!DOCTYPE html><html><head>"+a+"</head><body>"+e+"</body></html>",i=document.querySelector("#layoutMode").firstElementChild;i.className="fwidth border-0",i.style.cssText="min-height: 600px;";let n=i.contentDocument;n.open(),n.write(s),n.close();let o=setInterval((function(){let e=n.querySelectorAll(".video_preview img");if(e.length>0){for(let t=0;t<e.length;t++)e[t].style.cssText="transform:unset";clearInterval(o)}}),300)}function L(e,t,a){let{editorState:s}=t,{content_guid:i}=t,{getLabel:n}=t,{didMount:o}=t,r=[],l={};m({content_type:"",content_subtype:"",exam:"",examdetails:"",subject:"",message:"",meta_title:"",meta_keywords:"",meta_description:"",meta_keywords:"",google_suggestion:"",exam_groups:"",requirements:"",about:"",about_more:"",header:"",footer:"",usefull_Links:"",content:"",details:"",Heading:""}).subscribe((e=>{l=e}));function p(e){a(0,s.webPageData=e,s)}function _(e){let t="object"==typeof e?e.target.id:e,a=tinyMCE.activeEditor.getContent({format:"raw"});document.querySelector("#"+t+"_show").innerHTML=get_ucsyntax(a),a.match(/<uc:syntax/gm)&&prettyPrint();let s=g.select("#webpageContentShow","html",tinyMCE.activeEditor.getContent());s=s.textContent,l[t]=seqTag(s,1),p(y(1))}function b(){activate(2),g.ajax({url:baseUrl+"editor/index.php",cache:!1,data:{ajax:"1",action:"get_web_page_data",content_guid:s.content_guid,content_text:s.currentWebPageData},type:"post"}).then((e=>{document.querySelector("#layoutMode").innerHTML="<iframe></iframe>",C(e),activate(0)}))}function y(e=0){let t={};if("p"==l.content_type)switch(parseInt(l.content_subtype)){case 0:t.exam=seqTag(l.exam),t.examdetails=seqTag(l.examdetails),t.meta_title=seqTag(l.meta_title),t.meta_description=seqTag(l.meta_description),t.meta_keywords=seqTag(l.meta_keywords),t.google_suggestion=seqTag(l.google_suggestion),t.exam_groups=seqTag(l.exam_groups),t.header=seqTag(l.header),t.about=seqTag(l.about);case 1:t.meta_title=seqTag(l.meta_title),t.meta_keywords=seqTag(l.meta_keywords),t.meta_description=seqTag(l.meta_description),t.google_suggestion=seqTag(l.google_suggestion),t.exam_groups=seqTag(l.exam_groups),t.requirements=seqTag(l.requirements),t.about=seqTag(l.about),t.about_more=seqTag(l.about_more);case 2:t.meta_title=seqTag(l.meta_title),t.meta_description=seqTag(l.meta_description),t.meta_keywords=seqTag(l.meta_keywords),t.about=seqTag(l.about),t.about_more=seqTag(l.about_more),t.google_suggestion=seqTag(l.google_suggestion),t.header=seqTag(l.header),t.footer=seqTag(l.footer);case 3:t.meta_title=seqTag(l.meta_title),t.meta_description=seqTag(l.meta_description),t.meta_keywords=seqTag(l.meta_keywords),t.heading=seqTag(l.heading),t.details=seqTag(l.details),t.header=seqTag(l.header),t.content=seqTag(l.content),t.usefull_links=seqTag(l.usefull_links);default:t.exam=seqTag(l.exam),t.examdetails=seqTag(l.examdetails)}else"e"==l.content_type&&(t.subject=br2nl(l.subject),t.message=br2nl(l.message));return e?(t.content_icon=0,t.course_code=editor.course,t.action="save"):(t.func="react_get_preview",t.ajax="1"),t.content_guid="p"==l.content_type?g.select("#show_guid").innerHTML:i,t.content_type=l.content_type,t.content_subtype=l.content_subtype,"p"==l.content_type&&(t.webpage=g.select("#show_guid").innerHTML),JSON.parse(JSON.stringify(t))}return d((async()=>{a(3,r=[{label:"Exam",id:"exam",arg:"exam",view:[0]},{label:"Exam Details",id:"examdetails",arg:"examdetails",view:[0]},{label:"Meta Title",id:"meta_title",arg:"meta_title",view:[0,1,2,3]},{label:"Meta Description",id:"meta_description",arg:"meta_description",view:[0,1,2,3]},{label:"Meta Keywords",id:"meta_keywords",arg:"meta_keywords",view:[0,1,2,3]},{label:"Google Suggestion",id:"google_suggestion",arg:"google_suggestion",view:[0,1,2]},{label:"Exam Groups",id:"exam_groups",arg:"exam_groups",view:[1]},{label:"Requirements",id:"requirements",arg:"requirements",view:[1]},{label:"Header",id:"header",arg:"header",view:[0,2,3]},{label:"Heading",id:"heading",arg:"heading",view:[3]},{label:"Details",id:"details",arg:"details",view:[3]},{label:"Content",id:"Content",arg:"Content",view:[3]},{label:"Usefull Links",id:"usefull_links",arg:"usefull_links",view:[3]},{label:"About",id:"about",arg:"about",view:[0,1,2]},{label:"About More",id:"about_more",arg:"about_more",view:[1,2]},{label:"Footer",id:"footer",arg:"footer",view:[2]}]),s.viewConfig.showRefresh&&AI.set(s.content_type+"_refresh",b),l.content_type=s.content_type,l.content_subtype=s.item,function(){"e"==s.content_type&&g.insert("#content_show",'<div id="subject_show" class="pt-md bold" style="whiteSpace:pre-line;wordWrap:break-word;"></div><div id="message_show" class="pt-md" style="whiteSpace:pre-line;wordWrap:break-word;"></div>',"afterend");setTimeout((function(){!function(e=s.propsAjaxData){if(e){for(let t in e)null!=l[t]&&(l[t]=e[t],AI.isValid(e[t])&&(g.selectAll(`#${t}, #${t}_show`,"html",e[t].replace(/\n/g,"<br />")),"message"==t&&g.select("#message","value",e[t].replace(/\n/g,"<br />"))));p(y(1)),e.page_data&&(g.select("#layoutMode","html","<iframe></iframe>"),C(e.page_data))}else g.select("#exam","html",u.getWebpageTags("exam")),g.select("#examdetails","html",u.getWebpageTags("examdetails"))}()}),200),g.listen("body","click","#showPreview",(e=>{let t=y();a(0,s.activator=!0,s),g.ajax({url:baseUrl+"editor/index.php",data:t,type:"post"}).then((e=>{e=JSON.parse(e),s.propsAjaxData.page_data&&(document.querySelector("#layoutMode").innerHTML="<iframe></iframe>",C(e.page_data)),a(0,s.activator=!1,s)}))})),tinyMCE.PluginManager.add("changeInModule",(function(e){e.on("change click ExecCommand keyup",(function(e){try{_(tinyMCE.activeEditor.id)}catch(e){}}))}))}()})),c((async()=>{if(s.webpageArray!=l.webpageArray){for(let e in s.webpageArray)l[e]=s.webpageArray[e];l.webpageArray=s.webpageArray,setTimeout((function(){p(y(1))}),200)}})),e.$$set=e=>{"editorState"in e&&a(0,s=e.editorState),"content_guid"in e&&a(7,i=e.content_guid),"getLabel"in e&&a(1,n=e.getLabel),"didMount"in e&&a(2,o=e.didMount)},[s,n,o,r,undefined,function(e){let t=e.target.value;document.querySelector("#message_show").innerHTML=get_ucsyntax(t),t.match(/<uc:syntax/gm)&&prettyPrint(),l.message=seqTag(t).replace(/&lsqb;/g,"["),p(y(1));let a=g.select("#save_xml");a.classList.contains("disabled")&&"disabled"==a.getAttribute("disabled")&&(1==editor.save?(g.select(a,"removeClass","disabled"),a.disabled=!1):(g.select(a,"addClass","disabled"),a.disabled=!0))},_,i]}export default class extends e{constructor(e){super(),t(this,e,L,A,a,{editorState:0,content_guid:7,getLabel:1,didMount:2})}}
//# sourceMappingURL=WebPages-d57c9828.js.map
