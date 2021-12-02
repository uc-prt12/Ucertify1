import{S as e,i as t,s as a,e as o,c as i,b as n,B as s,u as r,f as l,h as c,m as d,j as p,l as u,t as m,a as g,o as b,d as w,y as v,p as f,A as h,X as _,W as x}from"./main-6d1a08f5.js";import{I as k}from"./ItemHelper-708f57ec.js";import{s as y}from"./style-inject.es-1f59c1d0.js";function A(e){let t,a,i,d,m,g,w,f,h,_,x,k,y,A,C,S,T,B,E,I,O,$,L,P,D,j,G,M,N,z,H,U,X,Y,F,J,K=s.recording_warning+"",V=1==e[4].showTranscript&&R(e);return{c(){t=o("div"),a=o("div"),i=o("b"),i.textContent=""+s.note_label,d=n(),m=r(K),g=n(),V&&V.c(),w=n(),f=o("div"),h=o("div"),_=o("div"),x=o("b"),x.textContent=""+s.audio_recorder,k=n(),y=o("div"),A=o("span"),A.textContent=""+s.starting_message,C=n(),S=o("div"),S.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/6ba174bf48e9b6dc8d8bd19d13c9caa9_000Awg.gif" alt="recording is on" class="w-100 h-100 img_fit"/>',T=n(),B=o("div"),B.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/giphy_000AYi.gif" alt="audio is playing" class="w-100 h-100 img_fit"/>',E=n(),I=o("div"),O=o("button"),$=o("span"),D=n(),j=o("button"),G=o("span"),z=n(),H=o("button"),U=o("span"),l(i,"class","noteColor bolder"),l(a,"class",""),l(a,"tabindex","0"),l(a,"aria-label","Recording will end after 15 sec"),l(t,"class","col-12 pb-3"),l(_,"class","p-2 tokenfield bg-light mb-3"),l(_,"aria-label","Audio Recorder"),l(_,"tabindex","0"),l(A,"class","align-self-center mx-auto previewInitialState tokenfield"),l(A,"aria-label","Click on record to start recording"),l(A,"tabindex","0"),l(S,"class","h previewRecordingOn tokenfield"),l(S,"aria-label","recording is on"),l(S,"tabindex","0"),l(B,"class","h previewAudioPlaying tokenfield"),l(B,"aria-label","Audio is playing"),l(B,"tabindex","0"),l(y,"class","mx-auto text-danger recording_status initialState mb-3 d-flex mx-auto"),l($,"class","icomoon-circle-2 s2 text-danger position-relative top1"),l($,"data-bs-toggle","tooltip"),l($,"data-bs-placement","top"),l($,"title",L="recording"==e[4].status?"Stop Recording":"Start Recording"),l($,"id","recordButtonTooltip"),l($,"name","recordButtonTooltip"),l(O,"type","button"),l(O,"name","preview_recordButton"),l(O,"id","preview_recordButton"),l(O,"class","btn btn-light py-0"),l(O,"aria-label",P="Click for "+e[3]),l(G,"class","icomoon-24px-autoplay-4 position-relative top1"),l(G,"data-bs-toggle","tooltip"),l(G,"data-bs-placement","top"),l(G,"title","Play Audio"),l(G,"id","stopButtonTooltip"),l(G,"name","stopButtonTooltip"),l(j,"type","button"),l(j,"name","preview_stopButton"),l(j,"id","preview_stopButton"),j.disabled=M=e[4].disabled,l(j,"class","btn btn-light py-0"),l(j,"aria-label",N="Click for "+e[1]),l(U,"class","icomoon-new-24px-reset-1 position-relative top1"),l(U,"data-bs-toggle","tooltip"),l(U,"data-placement","top"),l(U,"title","Reset Data"),l(H,"type","button"),l(H,"name","resetButton"),l(H,"id","resetButton"),l(H,"class","btn btn-light py-0"),H.disabled=X=e[4].isReset,l(H,"data-bs-toggle","modal"),l(H,"data-toggle","modal"),l(H,"data-bs-target","#preview_confirm_modal"),l(H,"data-target","#preview_confirm_modal"),l(H,"aria-label","Click on this button for override the previous recording"),l(I,"id","controls_container"),l(I,"class",Y="bg-light text-center w-100 p-2 "+("none"==e[4].pointerEvents?"pointerEventOff":"pointerEventOn")),l(h,"class","border rounded shadow-sm"),l(f,"class","col-12 col-md-8 offset-md-2")},m(o,n){c(o,t,n),p(t,a),p(a,i),p(a,d),p(a,m),c(o,g,n),V&&V.m(o,n),c(o,w,n),c(o,f,n),p(f,h),p(h,_),p(_,x),p(h,k),p(h,y),p(y,A),p(y,C),p(y,S),p(y,T),p(y,B),p(h,E),p(h,I),p(I,O),p(O,$),p(I,D),p(I,j),p(j,G),p(I,z),p(I,H),p(H,U),F||(J=[u(O,"click",e[8]),u(j,"click",e[11]),u(H,"click",e[9])],F=!0)},p(e,t){1==e[4].showTranscript?V?V.p(e,t):(V=R(e),V.c(),V.m(w.parentNode,w)):V&&(V.d(1),V=null),16&t[0]&&L!==(L="recording"==e[4].status?"Stop Recording":"Start Recording")&&l($,"title",L),8&t[0]&&P!==(P="Click for "+e[3])&&l(O,"aria-label",P),16&t[0]&&M!==(M=e[4].disabled)&&(j.disabled=M),2&t[0]&&N!==(N="Click for "+e[1])&&l(j,"aria-label",N),16&t[0]&&X!==(X=e[4].isReset)&&(H.disabled=X),16&t[0]&&Y!==(Y="bg-light text-center w-100 p-2 "+("none"==e[4].pointerEvents?"pointerEventOff":"pointerEventOn"))&&l(I,"class",Y)},d(e){e&&b(t),e&&b(g),V&&V.d(e),e&&b(w),e&&b(f),F=!1,v(J)}}}function C(e){let t,a,i,d,u,m=s.insensitive_message+"";function g(e,t){return 1!=e[5]?T:S}let w=g(e),v=w(e);return{c(){v.c(),t=n(),a=o("div"),i=o("b"),i.textContent=""+s.note_label,d=n(),u=r(m),l(i,"class","noteColor bolder"),l(a,"class","col-12 pb-3"),l(a,"tabindex","0"),l(a,"aria-label","matching is case insensitive")},m(e,o){v.m(e,o),c(e,t,o),c(e,a,o),p(a,i),p(a,d),p(a,u)},p(e,a){w===(w=g(e))&&v?v.p(e,a):(v.d(1),v=w(e),v&&(v.c(),v.m(t.parentNode,t)))},d(e){v.d(e),e&&b(t),e&&b(a)}}}function R(e){let t,a,i,r,d,u,m,g;return{c(){t=o("div"),a=o("div"),i=o("label"),r=o("b"),r.textContent=""+s.spoken_label,d=n(),u=o("textarea"),l(i,"for","preview_show_transcript"),l(u,"id","preview_show_transcript"),l(u,"name","preview_show_transcript"),l(u,"class","w-100 form-control"),l(u,"rows","2"),u.value=m=e[4].cdata,u.readOnly="readonly",l(u,"tabindex","0"),l(u,"aria-label",g=s.spoken_label+" "+(""!=e[4].cdata.trim()?e[4].cdata.trim():"Nothing")),l(t,"class","col-12 pb-3")},m(e,o){c(e,t,o),p(t,a),p(a,i),p(i,r),p(t,d),p(t,u)},p(e,t){16&t[0]&&m!==(m=e[4].cdata)&&(u.value=m),16&t[0]&&g!==(g=s.spoken_label+" "+(""!=e[4].cdata.trim()?e[4].cdata.trim():"Nothing"))&&l(u,"aria-label",g)},d(e){e&&b(t)}}}function S(e){let t,a,i,n,s;return{c(){t=o("div"),a=o("textarea"),l(a,"id","preview_data_container"),l(a,"name","cdata"),l(a,"class",i="w-100 form-control "+(1==e[4].useransstatus?"border-success typeCorrect":"border-danger typeIncorrect")),l(a,"rows","2"),a.value=n=e[4].cdata,a.readOnly="readonly",l(a,"tabindex","0"),l(a,"aria-label",s="Your answer is "+e[4].cdata+" which is "+(e[4].cdata.toLowerCase().trim()==e[4].correctAns.toLowerCase().trim()?"Correct":"Incorrect")),l(t,"class","col-12 py-3")},m(e,o){c(e,t,o),p(t,a)},p(e,t){16&t[0]&&i!==(i="w-100 form-control "+(1==e[4].useransstatus?"border-success typeCorrect":"border-danger typeIncorrect"))&&l(a,"class",i),16&t[0]&&n!==(n=e[4].cdata)&&(a.value=n),16&t[0]&&s!==(s="Your answer is "+e[4].cdata+" which is "+(e[4].cdata.toLowerCase().trim()==e[4].correctAns.toLowerCase().trim()?"Correct":"Incorrect"))&&l(a,"aria-label",s)},d(e){e&&b(t)}}}function T(e){let t,a,i,n;return{c(){t=o("div"),a=o("textarea"),l(a,"id","preanswer_data_container"),l(a,"name","cdata"),l(a,"class","w-100 form-control border-success typeCorrect"),l(a,"rows","2"),a.value=i=e[4].correctAns,a.readOnly="readonly",l(a,"tabindex","0"),l(a,"aria-label",n="correct Answer is "+e[4].correctAns),l(t,"class","col-12 py-3")},m(e,o){c(e,t,o),p(t,a)},p(e,t){16&t[0]&&i!==(i=e[4].correctAns)&&(a.value=i),16&t[0]&&n!==(n="correct Answer is "+e[4].correctAns)&&l(a,"aria-label",n)},d(e){e&&b(t)}}}function B(e){let t,a,f,h,_,x,y,R,S,T,B,E,I,O,$,L,P,D,j,G,M,N,z,H,U=s.modal_data+"";function X(e,t){return e[0]?C:A}a=new k({props:{reviewMode:e[0],handleReviewClick:e[14],customReviewMode:e[6]}}),a.$on("setReview",e[12]),a.$on("unsetReview",e[13]);let Y=X(e),F=Y(e);return{c(){t=o("div"),i(a.$$.fragment),f=n(),h=o("div"),F.c(),_=n(),x=o("div"),y=o("div"),R=o("div"),S=o("div"),T=o("div"),B=o("h4"),B.textContent=""+s.confirm_label,E=n(),I=o("button"),I.textContent="×",O=n(),$=o("div"),L=r(U),P=n(),D=o("div"),j=o("button"),j.textContent=""+s.no_label,G=n(),M=o("button"),M.textContent=""+s.yes_label,l(h,"class","row"),l(t,"id","preview_container"),l(t,"class","container"),l(B,"class","modal-title tokenfield"),l(B,"aria-label","Confirmation Dialog box"),l(B,"tabindex","0"),l(I,"type","button"),l(I,"class","close"),l(I,"data-bs-dismiss","modal"),l(I,"data-dismiss","modal"),l(I,"tabindex","0"),l(I,"aria-label","Click on this button for close the confirmation dialog box"),l(T,"class","modal-header"),l($,"class","modal-body tokenfield"),l($,"tabindex","0"),l($,"aria-label",e[2]),l($,"id","previewDialogBody"),l($,"name","previewDialogBody"),l(j,"type","button"),l(j,"class","preview_dismiss_modal btn btn-light pr-2"),l(j,"data-bs-dismiss","modal"),l(j,"data-dismiss","modal"),l(j,"tabindex","0"),l(j,"aria-label","Click on this button for neglecte to override previous recording"),l(M,"type","button"),l(M,"class","preview_dismiss_done btn btn-primary"),l(M,"data-bs-dismiss","modal"),l(M,"data-dismiss","modal"),l(M,"tabindex","0"),l(M,"aria-label","Click on this button for override the previous recording"),l(D,"class","modal-footer"),l(S,"class","modal-content"),l(R,"class","modal-dialog modal-md modal-dialog-centered"),l(y,"class","modal fade"),l(y,"id","preview_confirm_modal"),l(x,"class","preview_modal_container container")},m(o,i){c(o,t,i),d(a,t,null),p(t,f),p(t,h),F.m(h,null),c(o,_,i),c(o,x,i),p(x,y),p(y,R),p(R,S),p(S,T),p(T,B),p(T,E),p(T,I),p(S,O),p(S,$),p($,L),p(S,P),p(S,D),p(D,j),p(D,G),p(D,M),N=!0,z||(H=[u(j,"click",e[10]),u(M,"click",e[7])],z=!0)},p(e,t){const o={};1&t[0]&&(o.reviewMode=e[0]),a.$set(o),Y===(Y=X(e))&&F?F.p(e,t):(F.d(1),F=Y(e),F&&(F.c(),F.m(h,null))),(!N||4&t[0])&&l($,"aria-label",e[2])},i(e){N||(m(a.$$.fragment,e),N=!0)},o(e){g(a.$$.fragment,e),N=!1},d(e){e&&b(t),w(a),F.d(),e&&b(_),e&&b(x),z=!1,v(H)}}}function E(e,t,a){let o,i,n,r,l,{xml:c}=t,{uxml:d}=t,{showAns:p}=t,{isReview:u}=t,{editorState:m}=t,g=u,b="no",w="Play Audio",v="Start Recording",k=15,y={disabled:!0,cdata:"",language:"",correctAns:"",xml:"",status:"",pointerEvents:"auto",isReset:!0,showTranscript:!1,counter:0};function A(e){!function(e){try{a(4,y.language=e.smxml._language,y),a(4,y.correctAns=e.smxml.__cdata,y),a(4,y.showTranscript="true"==e.smxml._showTranscript,y),d&&function(e){let t=_(e);a(4,y.language=t.smans._language,y),a(4,y.cdata=t.smans.__cdata,y),a(4,y.status=t.smans._status,y),a(4,y.disabled="recordingStopped"!=t.smans._status,y),a(4,y.isReset="true"==t.smans._isReset,y),a(4,y.showTranscript="true"==t.smans._showTranscript,y)}(d)}catch(e){console.warn({error:e.message,"function name":"parseXMLPreview","File name":"AudioPreview.svelte"})}}(_(e))}function C(){setTimeout((function(){let e='<smans type="43" name="AudioRecorder" disabled="'+y.disabled+'" status="'+y.status+'" language="'+y.language+'" isReset="'+y.isReset+'" showTranscript="'+y.showTranscript+'"><![CDATA['+y.cdata+"]]></smans>";h.select("#special_module_user_xml").value=e,ISSPECIALMODULEUSERXMLCHANGE=1,a(15,d=h.select("#special_module_user_xml").value),a(1,w=h.select("#stopButtonTooltip").getAttribute("title")),a(3,v=h.select("#recordButtonTooltip").getAttribute("title")),a(2,n=h.select("#previewDialogBody").innerText),""!=y.correctAns.trim()&&$()}),100)}function R(){B(),clearTimeout(r),a(4,y.status="recordingStopped",y),a(4,y.disabled=!1,y),C(),h.selectAll(".previewRecordingOn","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),o.stop()}function S(){k-=1,a(4,y.counter=y.counter+1,y),r=setTimeout((function(){k>0?S():R()}),1e3)}function T(){!function(){if(!window.webkitSpeechRecognition&&!window.SpeechRecognition)return void h.alert(s.browser_support_msg);window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,o=new SpeechRecognition,o.continuous=!0,o.interimResults=!0,o.lang=y.language,window.recognitionData=o,o.addEventListener("end",(function(){y.isReset||(clearTimeout(r),h.showmsg(s.recording_ended,3e3),B(),h.selectAll(".previewInitialState","removeClass","h"),a(4,y.status="recordingStopped",y),a(4,y.disabled=!1,y),C())}))}(),o.start(),h.select("#preview_container #resetButton").disabled=!1,h.selectAll(".previewAudioPlaying, .previewInitialState","addClass","h"),h.selectAll(".previewRecordingOn","removeClass","h"),o.onresult=e=>{let t="";for(let a=0;a<e.results.length;a+=1)t+=e.results[a][0].transcript;a(4,y.cdata=t.trim(),y),C()}}function B(){h.selectAll(".previewAudioPlaying, .previewRecordingOn","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),h.selectAll("#preview_recordButton span","removeClass","icomoon-24px-stop"),h.selectAll("#preview_recordButton span","addClass",["icomoon-circle-2","text-danger"])}function E(){switch(y.status){case"recording":R();break;case"recordingStopped":h.getBS("#preview_confirm_modal","Modal").show(),h.select(".modal-body").focus();break;default:T(),a(4,y.status="recording",y),a(4,y.isReset=!1,y),a(4,y.counter=0,y),k=15,S(),C(),h.selectAll("#preview_recordButton span","removeClass",["icomoon-circle-2","text-danger"]),h.selectAll("#preview_recordButton span","addClass","icomoon-24px-stop")}}function I(){b="yes"}function O(){window.speechSynthesis?(i=window.speechSynthesis,""!=y.cdata?(h.selectAll(".previewRecordingOn, .previewInitialState","addClass","h"),h.selectAll(".previewAudioPlaying","removeClass","h"),a(4,y.disabled=!0,y),C(),function(){let e=new SpeechSynthesisUtterance(y.cdata),t=i.getVoices(),o="de-DE"==y.language?"Google Deutsch":"fr-FR"==y.language?"Google français":"es-ES"==y.language?"Google español":"hi-IN"==y.language?"Google हिन्दी":"ja-JP"==y.language?"Google 日本語":"ko-KR"==y.language?"Google 한국의":"it-IT"==y.language?"Google italiano":"Google US English";e.addEventListener("end",(function(){h.selectAll(".previewAudioPlaying, .previewRecordingOn","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),a(4,y.disabled=!1,y),C(),i.cancel()}));for(let a=0;a<t.length;a+=1)if(t[a].name==o){e.voice=t[a],e.pitch=1,e.rate=1,e.lang=y.language,i.speak(e);break}}()):(h.selectAll(".previewRecordingOn, .previewAudioPlaying","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),h.alert(s.no_data_msg))):h.alert(s.browser_support_msg)}function $(){let e="";""!=y.correctAns.trim()?(y.correctAns.toLowerCase()==y.cdata.toLowerCase()?(e=s.correct,h.select("#answer").checked=!0,a(4,y.useransstatus=!0,y)):(e=s.incorrect,h.select("#answer").checked=!1,a(4,y.useransstatus=!1,y)),m?p(e):(e="Correct"==e,x({uXml:d,ans:e}))):h.alert(s.matching_msg)}function L(){a(0,u=!0),a(4,y.pointerEvents="none",y),a(5,l=!0),$(),1==y.useransstatus?h.setCss("#preview_data_container",{color:"#50af50"}):h.setCss("#preview_data_container",{color:"#c30f0f"}),h.selectAll(h.parent(h.selectAll("#preanswer_data_container")),"addClass","h"),h.selectAll(h.parent(h.selectAll("#preview_data_container")),"removeClass","h")}function P(){a(0,u=!1),a(4,y.pointerEvents="auto",y),a(5,l=!1),h.selectAll(h.parent(h.selectAll("#preview_data_container")),"addClass","h")}return f((()=>{h.listen("#controls_container","keydown","#preview_recordButton",(function(e,t){13===t.which&&E()})),h.listen("#controls_container","keydown","#preview_stopButton",(function(e,t){13===t.which&&(console.log("checking...."),O(),h.find("#controls_container","#preview_stopButton").style.disabled=y.disabled)})),h.listen("#controls_container","keydown","#resetButton",(function(e,t){13===t.which&&I()})),window.webkitSpeechRecognition||window.SpeechRecognition||h.alert(s.browser_support_msg),c!=y.xml&&(a(4,y.xml=c,y),a(4,y.disabled=!0,y),a(4,y.cdata="",y),a(4,y.xml="",y),a(4,y.status="",y),a(4,y.isReset=!0,y),A(c))})),e.$$set=e=>{"xml"in e&&a(16,c=e.xml),"uxml"in e&&a(15,d=e.uxml),"showAns"in e&&a(17,p=e.showAns),"isReview"in e&&a(0,u=e.isReview),"editorState"in e&&a(18,m=e.editorState)},e.$$.update=()=>{65537&e.$$.dirty[0]&&(A(c),u?L():P())},[u,w,n,v,y,l,g,function(){if("yes"==b)!function(){B(),"recording"==y.status&&o.stop();a(4,y.cdata="",y),a(4,y.disabled=!0,y),a(4,y.xml="",y),a(4,y.status="",y),a(4,y.isReset=!0,y),clearTimeout(r),C()}(),b="no";else{a(4,y.cdata="",y),a(4,y.disabled=!0,y),a(4,y.status="",y),a(4,y.pauseRecording="",y),C();let e=setTimeout((function(){E(),clearTimeout(e)}),120)}},E,I,function(){b="no"},O,L,P,function(e){"c"==e?a(5,l=!1):"u"==e&&a(5,l=!0)},d,c,p,m]}y(".pointerEventOff{pointer-events:none}.pointerEventOn{pointer-events:auto}.noteColor{color:#c30f0f}.recording_status{height:185px;width:300px;background-color:#000}.img_fit{object-fit:contain}.disabledState,select:disabled{cursor:not-allowed!important}.disabledState{opacity:.5}.custom_checkbox_new{display:block;position:relative;width:20px;height:20px;margin-bottom:0;cursor:pointer;font-size:18px}.custom_checkbox_new input{position:absolute;z-index:-1;opacity:0}.check_mark_custom{width:17px;height:17px;position:absolute;text-align:center;top:2px;left:0;border:1px solid #d4cfcf}.custom_checkbox_new .check_mark_custom:after{content:'';color:#fff;transform:rotate(10deg);margin-top:-3px;width:13px;font-size:13px}.custom_checkbox_new input:checked~.check_mark_custom:after{display:block}.check_mark_custom:after{content:'';position:absolute}.custom_checkbox_new input:checked~.check_mark_custom{background:#4285f4;border:2px solid #a4dbfc}input:focus~.check_mark_custom{box-shadow:0 0 0 .13rem rgb(66 133 244 / 25%)}.btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}.typeCorrect{background:#d1f5cb!important}.typeIncorrect{background:#f3d2d7!important}.bg-light{background-color:#e4e1e1!important}.top1{top:1px}");export default class extends e{constructor(e){super(),t(this,e,E,B,a,{xml:16,uxml:15,showAns:17,isReview:0,editorState:18},null,[-1,-1])}}
//# sourceMappingURL=AudioPreview-0206734b.js.map