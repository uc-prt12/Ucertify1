import{S as e,i as t,s as a,c as r,m as s,t as i,a as n,d as o,q as c,h as p,k as d,n as w,o as m,p as l,E as u,A as f}from"./main-ac114c5e.js";import{O as v}from"./OptionContainer-9ec6cc49.js";function y(e){let t,a;return t=new v({props:{letters:e[1],correctAnswers:e[0].correctAnswers,reviewMode:e[0].reviewMode,data:e[0].optionData,previewMode:!0}}),{c(){r(t.$$.fragment)},m(e,r){s(t,e,r),a=!0},p(e,a){const r={};1&a&&(r.correctAnswers=e[0].correctAnswers),1&a&&(r.reviewMode=e[0].reviewMode),1&a&&(r.data=e[0].optionData),t.$set(r)},i(e){a||(i(t.$$.fragment,e),a=!0)},o(e){n(t.$$.fragment,e),a=!1},d(e){o(t,e)}}}function A(e){let t,a,r=e[0].optionData&&y(e);return{c(){r&&r.c(),t=c()},m(e,s){r&&r.m(e,s),p(e,t,s),a=!0},p(e,[a]){e[0].optionData?r?(r.p(e,a),1&a&&i(r,1)):(r=y(e),r.c(),i(r,1),r.m(t.parentNode,t)):r&&(d(),n(r,1,1,(()=>{r=null})),w())},i(e){a||(i(r),a=!0)},o(e){n(r),a=!1},d(e){r&&r.d(e),e&&m(t)}}}function S(e,t,a){let{isReview:r}=t,{editorState:s}=t,i="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n={};function o(){a(0,n.correctAnswers=s.mcqAjaxData.correct_answers,n),a(0,n.optionData=s.mcqAjaxData.answers,n),setTimeout((function(){f.addClass(f.find("#previewSection",".prettyprintReplica","all"),["prettyprint","linenums"]);try{JSON.stringify(s.mcqAjaxData.answers).match(/<uc:syntax/gm)&&prettyPrint()}catch(e){console.warn(e)}f.addClass(f.find("#previewSection",".prettyprint"),"prettyprintReplica"),f.addClass(f.find("#previewSection",".prettyprintReplica"),["prettyprint","linenums"])}),200)}return l((async()=>{o()})),u((async()=>{o(),r!=n.reviewMode&&a(0,n.reviewMode=r,n)})),e.$$set=e=>{"isReview"in e&&a(2,r=e.isReview),"editorState"in e&&a(3,s=e.editorState)},[n,i,r,s]}export default class extends e{constructor(e){super(),t(this,e,S,A,a,{isReview:2,editorState:3})}}
//# sourceMappingURL=MultipleChoicePreview-8191d0f8.js.map
