import{S as t,i as e,s as o,c as n,m as r,t as a,a as i,d as s,e as c,b as l,f as p,g as d,h as u,j as m,l as g,k as w,n as f,o as D,p as y,A as C,w as x}from"./main-1f82e079.js";import{O as _}from"./OptionContainer-97ae492e.js";function h(t){let e,o;return e=new _({props:{toggleChecked:t[5],deleteOption:t[3],editOption:t[2],letters:t[1],correctAnswers:t[0].correctAnswers,reviewMode:t[0].reviewMode,data:t[0].optionData}}),{c(){n(e.$$.fragment)},m(t,n){r(e,t,n),o=!0},p(t,o){const n={};1&o&&(n.correctAnswers=t[0].correctAnswers),1&o&&(n.reviewMode=t[0].reviewMode),1&o&&(n.data=t[0].optionData),e.$set(n)},i(t){o||(a(e.$$.fragment,t),o=!0)},o(t){i(e.$$.fragment,t),o=!1},d(t){s(e,t)}}}function A(t){let e,o,n,r,s,y,C,x=t[0].optionData&&h(t);return{c(){e=c("div"),x&&x.c(),o=l(),n=c("div"),r=c("button"),r.innerHTML='<span class="icomoon-plus pr-1"></span>Add option',p(r,"variant","fab"),p(r,"color","primary"),p(r,"aria-label","Add"),p(r,"class","rounded d-flex align-items-center btn btn-sm btn-outline-primary pr-md"),d(r,"text-transform","none"),p(n,"class","mt-lg position-relative col-12 bottom20 pl-0"),d(n,"padding-top","8px")},m(a,i){u(a,e,i),x&&x.m(e,null),m(e,o),m(e,n),m(n,r),s=!0,y||(C=g(r,"click",t[4]),y=!0)},p(t,[n]){t[0].optionData?x?(x.p(t,n),1&n&&a(x,1)):(x=h(t),x.c(),a(x,1),x.m(e,o)):x&&(w(),i(x,1,1,(()=>{x=null})),f())},i(t){s||(a(x),s=!0)},o(t){i(x),s=!1},d(t){t&&D(e),x&&x.d(),y=!1,C()}}}function E(t,e,o){let{ucEditor:n}=e,{getChildXml:r}=e,{editorState:a}=e,{xml:i}=e,s={};x({correctAnswers:"",optionData:"",optionDataCopy:"",reviewMode:!1,xml:"",optionCounter:1}).subscribe((t=>{o(0,s=t)}));let c="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function l(t){o(6,a.ajaxData.correct_answers=t.correct_answers,a),o(6,a.ajaxData.answers=t.answers,a),r(a,"mcqType")}function p(t){let e=n.getContent("option"+t);o(0,s.optionDataCopy[t].answer=AI.ignoreEnity(e),s),l({correct_answers:s.correctAnswers,answers:s.optionDataCopy})}function d(t){t=JSON.stringify(t),t=JSON.parse(t),o(0,s.optionData=t,s)}return y((async()=>{!function(){var t=setTimeout((function(){o(0,s.correctAnswers=a.ajaxData.correct_answers,s),o(0,s.optionData=a.ajaxData.answers,s),o(0,s.optionDataCopy=a.ajaxData.answers,s),o(0,s.optionCounter=a.ajaxData.answers.length,s);var e=setTimeout((function(){try{document.querySelectorAll("[id^='option']").forEach(((t,e)=>{t.querySelectorAll(".pln").length>0&&(t.querySelectorAll(".pln").forEach((e=>{e.nextElementSibling.length>0&&t.previousElementSibling.length>0&&"BR"==e.nextElementSibling.nodeName&&"BR"==e.previousElementSibling.nodeName&&(t.nextElementSibling.remove(),e.remove())})),i&&p(e))}))}catch(t){console.log({err:"Removing PrettyPrint  BR from Authoring Error",func:"componentDidMount"})}n.initEditor(!1,"#authoringSection .ebook_item_text"),clearTimeout(e)}),3e3);clearTimeout(t)}),200);C.listen(document,"keydown",".answer_container .delete_element",(function(t,e){13!=e.keyCode&&13!=e.which||C.trigger(t,"click")})),a.ajaxData.parent_guid&&(preview_edit=1,AI&&AI.set("get_parent_guid",a.ajaxData.parent_guid))}()})),t.$$set=t=>{"ucEditor"in t&&o(7,n=t.ucEditor),"getChildXml"in t&&o(8,r=t.getChildXml),"editorState"in t&&o(6,a=t.editorState),"xml"in t&&o(9,i=t.xml)},[s,c,p,function(t){let e=[];s.optionDataCopy.map(((o,n)=>{n!=t&&e.push(o)})),console.log(e),o(0,s.optionDataCopy=e,s),l({correct_answers:s.correctAnswers,answers:e}),d(e)},function(t){let e=s.optionDataCopy;o(0,s.optionCounter=s.optionCounter+1,s),e.push({answer:"Option",id:"id"+s.optionCounter,is_correct:"0",seq_str:"",seq_tag:""}),o(0,s.optionDataCopy=e,s),l({correct_answers:s.correctAnswers,answers:e}),d(e),tinymce.EditorManager.editors=[],n.initEditor(),setTimeout((()=>{n.initEditor(!1,"#authoringSection .ebook_item_text")}),1e3)},function(t,e){let n=0;o(0,s.optionDataCopy[t].is_correct=e.target.checked?"1":"0",s);for(let t in s.optionDataCopy)"1"==s.optionDataCopy[t].is_correct&&n++;o(0,s.correctAnswers=n,s),d(s.optionDataCopy),l({correct_answers:n,answers:s.optionDataCopy})},a,n,r,i]}export default class extends t{constructor(t){super(),e(this,t,E,A,o,{ucEditor:7,getChildXml:8,editorState:6,xml:9})}}
//# sourceMappingURL=MultipleChoice-3e479b98.js.map
