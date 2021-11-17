import{S as e,i as t,s as a,e as o,c as i,b as s,C as n,u as r,f as l,h as c,m as d,j as p,l as u,t as m,a as g,o as b,d as w,y as v,p as f,A as h,X as _,Z as x}from"./main-ebbb55b4.js";import{I as k}from"./ItemHelper-9f2c0a03.js";import{s as C}from"./style-inject.es-1f59c1d0.js";function A(e){let t,a,i,d,m,g,w,f,h,_,x,k,C,A,y,S,T,B,E,I,O,$,L,P,D,j,G,M,N,z,H,U,X,Y,F,J,K=n.recording_warning+"",V=1==e[4].showTranscript&&R(e);return{c(){t=o("div"),a=o("div"),i=o("b"),i.textContent=""+n.note_label,d=s(),m=r(K),g=s(),V&&V.c(),w=s(),f=o("div"),h=o("div"),_=o("div"),x=o("b"),x.textContent=""+n.audio_recorder,k=s(),C=o("div"),A=o("span"),A.textContent=""+n.starting_message,y=s(),S=o("div"),S.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/6ba174bf48e9b6dc8d8bd19d13c9caa9_000Awg.gif" alt="recording is on" class="w-100 h-100 img_fit"/>',T=s(),B=o("div"),B.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/giphy_000AYi.gif" alt="audio is playing" class="w-100 h-100 img_fit"/>',E=s(),I=o("div"),O=o("button"),$=o("span"),D=s(),j=o("button"),G=o("span"),z=s(),H=o("button"),U=o("span"),l(i,"class","noteColor bolder"),l(a,"class",""),l(a,"tabindex","0"),l(a,"aria-label","Recording will end after 15 sec"),l(t,"class","col-12 pb-3"),l(_,"class","p-2 tokenfield bg-light mb-3"),l(_,"aria-label","Audio Recorder"),l(_,"tabindex","0"),l(A,"class","align-self-center mx-auto previewInitialState tokenfield"),l(A,"aria-label","Click on record to start recording"),l(A,"tabindex","0"),l(S,"class","h previewRecordingOn tokenfield"),l(S,"aria-label","recording is on"),l(S,"tabindex","0"),l(B,"class","h previewAudioPlaying tokenfield"),l(B,"aria-label","Audio is playing"),l(B,"tabindex","0"),l(C,"class","mx-auto text-danger recording_status initialState mb-3 d-flex mx-auto"),l($,"class","icomoon-circle-2 s2 text-danger position-relative top1"),l($,"data-bs-toggle","tooltip"),l($,"data-bs-placement","top"),l($,"title",L="recording"==e[4].status?"Stop Recording":"Start Recording"),l($,"id","recordButtonTooltip"),l($,"name","recordButtonTooltip"),l(O,"type","button"),l(O,"name","preview_recordButton"),l(O,"id","preview_recordButton"),l(O,"class","btn btn-light py-0"),l(O,"aria-label",P="Click for "+e[3]),l(G,"class","icomoon-24px-autoplay-4 position-relative top1"),l(G,"data-bs-toggle","tooltip"),l(G,"data-bs-placement","top"),l(G,"title","Play Audio"),l(G,"id","stopButtonTooltip"),l(G,"name","stopButtonTooltip"),l(j,"type","button"),l(j,"name","preview_stopButton"),l(j,"id","preview_stopButton"),j.disabled=M=e[4].disabled,l(j,"class","btn btn-light py-0"),l(j,"aria-label",N="Click for "+e[1]),l(U,"class","icomoon-new-24px-reset-1 position-relative top1"),l(U,"data-bs-toggle","tooltip"),l(U,"data-placement","top"),l(U,"title","Reset Data"),l(H,"type","button"),l(H,"name","resetButton"),l(H,"id","resetButton"),l(H,"class","btn btn-light py-0"),H.disabled=X=e[4].isReset,l(H,"data-bs-toggle","modal"),l(H,"data-toggle","modal"),l(H,"data-bs-target","#preview_confirm_modal"),l(H,"data-target","#preview_confirm_modal"),l(H,"aria-label","Click on this button for override the previous recording"),l(I,"id","controls_container"),l(I,"class",Y="bg-light text-center w-100 p-2 "+("none"==e[4].pointerEvents?"pointerEventOff":"pointerEventOn")),l(h,"class","border rounded shadow-sm"),l(f,"class","col-12 col-md-8 offset-md-2")},m(o,s){c(o,t,s),p(t,a),p(a,i),p(a,d),p(a,m),c(o,g,s),V&&V.m(o,s),c(o,w,s),c(o,f,s),p(f,h),p(h,_),p(_,x),p(h,k),p(h,C),p(C,A),p(C,y),p(C,S),p(C,T),p(C,B),p(h,E),p(h,I),p(I,O),p(O,$),p(I,D),p(I,j),p(j,G),p(I,z),p(I,H),p(H,U),F||(J=[u(O,"click",e[8]),u(j,"click",e[11]),u(H,"click",e[9])],F=!0)},p(e,t){1==e[4].showTranscript?V?V.p(e,t):(V=R(e),V.c(),V.m(w.parentNode,w)):V&&(V.d(1),V=null),16&t[0]&&L!==(L="recording"==e[4].status?"Stop Recording":"Start Recording")&&l($,"title",L),8&t[0]&&P!==(P="Click for "+e[3])&&l(O,"aria-label",P),16&t[0]&&M!==(M=e[4].disabled)&&(j.disabled=M),2&t[0]&&N!==(N="Click for "+e[1])&&l(j,"aria-label",N),16&t[0]&&X!==(X=e[4].isReset)&&(H.disabled=X),16&t[0]&&Y!==(Y="bg-light text-center w-100 p-2 "+("none"==e[4].pointerEvents?"pointerEventOff":"pointerEventOn"))&&l(I,"class",Y)},d(e){e&&b(t),e&&b(g),V&&V.d(e),e&&b(w),e&&b(f),F=!1,v(J)}}}function y(e){let t,a,i,d,u,m=n.insensitive_message+"";function g(e,t){return 1!=e[5]?T:S}let w=g(e),v=w(e);return{c(){v.c(),t=s(),a=o("div"),i=o("b"),i.textContent=""+n.note_label,d=s(),u=r(m),l(i,"class","noteColor bolder"),l(a,"class","col-12 pb-3"),l(a,"tabindex","0"),l(a,"aria-label","matching is case insensitive")},m(e,o){v.m(e,o),c(e,t,o),c(e,a,o),p(a,i),p(a,d),p(a,u)},p(e,a){w===(w=g(e))&&v?v.p(e,a):(v.d(1),v=w(e),v&&(v.c(),v.m(t.parentNode,t)))},d(e){v.d(e),e&&b(t),e&&b(a)}}}function R(e){let t,a,i,r,d,u,m,g;return{c(){t=o("div"),a=o("div"),i=o("label"),r=o("b"),r.textContent=""+n.spoken_label,d=s(),u=o("textarea"),l(i,"for","preview_show_transcript"),l(u,"id","preview_show_transcript"),l(u,"name","preview_show_transcript"),l(u,"class","w-100 form-control"),l(u,"rows","2"),u.value=m=e[4].cdata,u.readOnly="readonly",l(u,"tabindex","0"),l(u,"aria-label",g=n.spoken_label+" "+(""!=e[4].cdata.trim()?e[4].cdata.trim():"Nothing")),l(t,"class","col-12 pb-3")},m(e,o){c(e,t,o),p(t,a),p(a,i),p(i,r),p(t,d),p(t,u)},p(e,t){16&t[0]&&m!==(m=e[4].cdata)&&(u.value=m),16&t[0]&&g!==(g=n.spoken_label+" "+(""!=e[4].cdata.trim()?e[4].cdata.trim():"Nothing"))&&l(u,"aria-label",g)},d(e){e&&b(t)}}}function S(e){let t,a,i,s,n;return{c(){t=o("div"),a=o("textarea"),l(a,"id","preview_data_container"),l(a,"name","cdata"),l(a,"class",i="w-100 form-control "+(1==e[4].useransstatus?"border-success typeCorrect":"border-danger typeIncorrect")),l(a,"rows","2"),a.value=s=e[4].cdata,a.readOnly="readonly",l(a,"tabindex","0"),l(a,"aria-label",n="Your answer is "+e[4].cdata+" which is "+(e[4].cdata.toLowerCase().trim()==e[4].correctAns.toLowerCase().trim()?"Correct":"Incorrect")),l(t,"class","col-12 py-3")},m(e,o){c(e,t,o),p(t,a)},p(e,t){16&t[0]&&i!==(i="w-100 form-control "+(1==e[4].useransstatus?"border-success typeCorrect":"border-danger typeIncorrect"))&&l(a,"class",i),16&t[0]&&s!==(s=e[4].cdata)&&(a.value=s),16&t[0]&&n!==(n="Your answer is "+e[4].cdata+" which is "+(e[4].cdata.toLowerCase().trim()==e[4].correctAns.toLowerCase().trim()?"Correct":"Incorrect"))&&l(a,"aria-label",n)},d(e){e&&b(t)}}}function T(e){let t,a,i,s;return{c(){t=o("div"),a=o("textarea"),l(a,"id","preanswer_data_container"),l(a,"name","cdata"),l(a,"class","w-100 form-control border-success typeCorrect"),l(a,"rows","2"),a.value=i=e[4].correctAns,a.readOnly="readonly",l(a,"tabindex","0"),l(a,"aria-label",s="correct Answer is "+e[4].correctAns),l(t,"class","col-12 py-3")},m(e,o){c(e,t,o),p(t,a)},p(e,t){16&t[0]&&i!==(i=e[4].correctAns)&&(a.value=i),16&t[0]&&s!==(s="correct Answer is "+e[4].correctAns)&&l(a,"aria-label",s)},d(e){e&&b(t)}}}function B(e){let t,a,f,h,_,x,C,R,S,T,B,E,I,O,$,L,P,D,j,G,M,N,z,H,U=n.modal_data+"";function X(e,t){return e[0]?y:A}a=new k({props:{reviewMode:e[0],handleReviewClick:e[14],customReviewMode:e[6]}}),a.$on("setReview",e[12]),a.$on("unsetReview",e[13]);let Y=X(e),F=Y(e);return{c(){t=o("div"),i(a.$$.fragment),f=s(),h=o("div"),F.c(),_=s(),x=o("div"),C=o("div"),R=o("div"),S=o("div"),T=o("div"),B=o("h4"),B.textContent=""+n.confirm_label,E=s(),I=o("button"),I.textContent="×",O=s(),$=o("div"),L=r(U),P=s(),D=o("div"),j=o("button"),j.textContent=""+n.no_label,G=s(),M=o("button"),M.textContent=""+n.yes_label,l(h,"class","row"),l(t,"id","preview_container"),l(t,"class","container"),l(B,"class","modal-title tokenfield"),l(B,"aria-label","Confirmation Dialog box"),l(B,"tabindex","0"),l(I,"type","button"),l(I,"class","close"),l(I,"data-bs-dismiss","modal"),l(I,"data-dismiss","modal"),l(I,"tabindex","0"),l(I,"aria-label","Click on this button for close the confirmation dialog box"),l(T,"class","modal-header"),l($,"class","modal-body tokenfield"),l($,"tabindex","0"),l($,"aria-label",e[2]),l($,"id","previewDialogBody"),l($,"name","previewDialogBody"),l(j,"type","button"),l(j,"class","preview_dismiss_modal btn btn-light pr-2"),l(j,"data-bs-dismiss","modal"),l(j,"data-dismiss","modal"),l(j,"tabindex","0"),l(j,"aria-label","Click on this button for neglecte to override previous recording"),l(M,"type","button"),l(M,"class","preview_dismiss_done btn btn-primary"),l(M,"data-bs-dismiss","modal"),l(M,"data-dismiss","modal"),l(M,"tabindex","0"),l(M,"aria-label","Click on this button for override the previous recording"),l(D,"class","modal-footer"),l(S,"class","modal-content"),l(R,"class","modal-dialog modal-md modal-dialog-centered"),l(C,"class","modal fade"),l(C,"id","preview_confirm_modal"),l(x,"class","preview_modal_container container")},m(o,i){c(o,t,i),d(a,t,null),p(t,f),p(t,h),F.m(h,null),c(o,_,i),c(o,x,i),p(x,C),p(C,R),p(R,S),p(S,T),p(T,B),p(T,E),p(T,I),p(S,O),p(S,$),p($,L),p(S,P),p(S,D),p(D,j),p(D,G),p(D,M),N=!0,z||(H=[u(j,"click",e[10]),u(M,"click",e[7])],z=!0)},p(e,t){const o={};1&t[0]&&(o.reviewMode=e[0]),a.$set(o),Y===(Y=X(e))&&F?F.p(e,t):(F.d(1),F=Y(e),F&&(F.c(),F.m(h,null))),(!N||4&t[0])&&l($,"aria-label",e[2])},i(e){N||(m(a.$$.fragment,e),N=!0)},o(e){g(a.$$.fragment,e),N=!1},d(e){e&&b(t),w(a),F.d(),e&&b(_),e&&b(x),z=!1,v(H)}}}function E(e,t,a){let o,i,s,r,l,{xml:c}=t,{uxml:d}=t,{showAns:p}=t,{isReview:u}=t,{editorState:m}=t,g=u,b="no",w="Play Audio",v="Start Recording",k=15,C={disabled:!0,cdata:"",language:"",correctAns:"",xml:"",status:"",pointerEvents:"auto",isReset:!0,showTranscript:!1,counter:0};function A(e){!function(e){try{a(4,C.language=e.smxml._language,C),a(4,C.correctAns=e.smxml.__cdata,C),a(4,C.showTranscript="true"==e.smxml._showTranscript,C),d&&function(e){let t=_(e);a(4,C.language=t.smans._language,C),a(4,C.cdata=t.smans.__cdata,C),a(4,C.status=t.smans._status,C),a(4,C.disabled="recordingStopped"!=t.smans._status,C),a(4,C.isReset="true"==t.smans._isReset,C),a(4,C.showTranscript="true"==t.smans._showTranscript,C)}(d)}catch(e){console.warn({error:e.message,"function name":"parseXMLPreview","File name":"AudioPreview.svelte"})}}(_(e))}function y(){setTimeout((function(){let e='<smans type="43" name="AudioRecorder" disabled="'+C.disabled+'" status="'+C.status+'" language="'+C.language+'" isReset="'+C.isReset+'" showTranscript="'+C.showTranscript+'"><![CDATA['+C.cdata+"]]></smans>";h.select("#special_module_user_xml").value=e,ISSPECIALMODULEUSERXMLCHANGE=1,a(15,d=h.select("#special_module_user_xml").value),a(1,w=h.select("#stopButtonTooltip").getAttribute("title")),a(3,v=h.select("#recordButtonTooltip").getAttribute("title")),a(2,s=h.select("#previewDialogBody").innerText),""!=C.correctAns.trim()&&I()}),100)}function R(){B(),clearTimeout(r),a(4,C.status="recordingStopped",C),a(4,C.disabled=!1,C),y(),h.selectAll(".previewRecordingOn","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),o.stop()}function S(){k-=1,a(4,C.counter=C.counter+1,C),r=setTimeout((function(){k>0?S():R()}),1e3)}function T(){!function(){if(!window.webkitSpeechRecognition&&!window.SpeechRecognition)return void h.alert(n.browser_support_msg);window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,o=new SpeechRecognition,o.continuous=!0,o.interimResults=!0,o.lang=C.language,window.recognitionData=o,o.addEventListener("end",(function(){C.isReset||(clearTimeout(r),h.alert(n.recording_ended),B(),h.selectAll(".previewInitialState","removeClass","h"),a(4,C.status="recordingStopped",C),a(4,C.disabled=!1,C),y())}))}(),o.start(),h.select("#preview_container #resetButton").disabled=!1,h.selectAll(".previewAudioPlaying, .previewInitialState","addClass","h"),h.selectAll(".previewRecordingOn","removeClass","h"),o.onresult=e=>{let t="";for(let a=0;a<e.results.length;a+=1)t+=e.results[a][0].transcript;a(4,C.cdata=t.trim(),C),y()}}function B(){h.selectAll(".previewAudioPlaying, .previewRecordingOn","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),h.selectAll("#preview_recordButton span","removeClass","icomoon-24px-stop"),h.selectAll("#preview_recordButton span","addClass",["icomoon-circle-2","text-danger"])}function E(){switch(C.status){case"recording":R();break;case"recordingStopped":h.getBS("#preview_confirm_modal","Modal").show(),h.select(".modal-body").focus();break;default:T(),a(4,C.status="recording",C),a(4,C.isReset=!1,C),a(4,C.counter=0,C),k=15,S(),y(),h.selectAll("#preview_recordButton span","removeClass",["icomoon-circle-2","text-danger"]),h.selectAll("#preview_recordButton span","addClass","icomoon-24px-stop")}}function I(){let e="";""!=C.correctAns.trim()?(C.correctAns.toLowerCase()==C.cdata.toLowerCase()?(e=n.correct,h.select("#answer").checked=!0,a(4,C.useransstatus=!0,C)):(e=n.incorrect,h.select("#answer").checked=!1,a(4,C.useransstatus=!1,C)),m?p(e):(e="Correct"==e,x({uXml:d,ans:e}))):h.alert(n.matching_msg)}function O(){a(0,u=!0),a(4,C.pointerEvents="none",C),a(5,l=!0),I(),1==C.useransstatus?h.setCss("#preview_data_container",{color:"#50af50"}):h.setCss("#preview_data_container",{color:"#c30f0f"}),h.selectAll(h.parent(h.selectAll("#preanswer_data_container")),"addClass","h"),h.selectAll(h.parent(h.selectAll("#preview_data_container")),"removeClass","h")}function $(){a(0,u=!1),a(4,C.pointerEvents="auto",C),a(5,l=!1),h.selectAll(h.parent(h.selectAll("#preview_data_container")),"addClass","h")}return f((()=>{window.webkitSpeechRecognition||window.SpeechRecognition||h.alert(n.browser_support_msg),c!=C.xml&&(a(4,C.xml=c,C),a(4,C.disabled=!0,C),a(4,C.cdata="",C),a(4,C.xml="",C),a(4,C.status="",C),a(4,C.isReset=!0,C),A(c))})),e.$$set=e=>{"xml"in e&&a(16,c=e.xml),"uxml"in e&&a(15,d=e.uxml),"showAns"in e&&a(17,p=e.showAns),"isReview"in e&&a(0,u=e.isReview),"editorState"in e&&a(18,m=e.editorState)},e.$$.update=()=>{65537&e.$$.dirty[0]&&(A(c),u?O():$())},[u,w,s,v,C,l,g,function(){if("yes"==b)!function(){B(),"recording"==C.status&&o.stop();a(4,C.cdata="",C),a(4,C.disabled=!0,C),a(4,C.xml="",C),a(4,C.status="",C),a(4,C.isReset=!0,C),clearTimeout(r),y()}(),b="no";else{a(4,C.cdata="",C),a(4,C.disabled=!0,C),a(4,C.status="",C),a(4,C.pauseRecording="",C),y();let e=setTimeout((function(){E(),clearTimeout(e)}),120)}},E,function(){b="yes"},function(){b="no"},function(){window.speechSynthesis?(i=window.speechSynthesis,""!=C.cdata?(h.selectAll(".previewRecordingOn, .previewInitialState","addClass","h"),h.selectAll(".previewAudioPlaying","removeClass","h"),a(4,C.disabled=!0,C),y(),function(){let e=new SpeechSynthesisUtterance(C.cdata),t=i.getVoices(),o="de-DE"==C.language?"Google Deutsch":"fr-FR"==C.language?"Google français":"es-ES"==C.language?"Google español":"hi-IN"==C.language?"Google हिन्दी":"ja-JP"==C.language?"Google 日本語":"ko-KR"==C.language?"Google 한국의":"it-IT"==C.language?"Google italiano":"Google US English";e.addEventListener("end",(function(){h.selectAll(".previewAudioPlaying, .previewRecordingOn","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),a(4,C.disabled=!1,C),y(),i.cancel()}));for(let a=0;a<t.length;a+=1)if(t[a].name==o){e.voice=t[a],e.pitch=1,e.rate=1,e.lang=C.language,i.speak(e);break}}()):(h.selectAll(".previewRecordingOn, .previewAudioPlaying","addClass","h"),h.selectAll(".previewInitialState","removeClass","h"),h.alert(n.no_data_msg))):h.alert(n.browser_support_msg)},O,$,function(e){"c"==e?a(5,l=!1):"u"==e&&a(5,l=!0)},d,c,p,m]}C(".pointerEventOff{pointer-events:none}.pointerEventOn{pointer-events:auto}.noteColor{color:#c30f0f}.recording_status{height:185px;width:300px;background-color:#000}.img_fit{object-fit:contain}.disabledState,select:disabled{cursor:not-allowed!important}.disabledState{opacity:.5}.custom_checkbox_new{display:block;position:relative;width:20px;height:20px;margin-bottom:0;cursor:pointer;font-size:18px}.custom_checkbox_new input{position:absolute;z-index:-1;opacity:0}.check_mark_custom{width:17px;height:17px;position:absolute;text-align:center;top:2px;left:0;border:1px solid #d4cfcf}.custom_checkbox_new .check_mark_custom:after{content:'';color:#fff;transform:rotate(10deg);margin-top:-3px;width:13px;font-size:13px}.custom_checkbox_new input:checked~.check_mark_custom:after{display:block}.check_mark_custom:after{content:'';position:absolute}.custom_checkbox_new input:checked~.check_mark_custom{background:#4285f4;border:2px solid #a4dbfc}input:focus~.check_mark_custom{box-shadow:0 0 0 .13rem rgb(66 133 244 / 25%)}.btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}.typeCorrect{background:#d1f5cb!important}.typeIncorrect{background:#f3d2d7!important}.bg-light{background-color:#e4e1e1!important}.top1{top:1px}");export default class extends e{constructor(e){super(),t(this,e,E,B,a,{xml:16,uxml:15,showAns:17,isReview:0,editorState:18},null,[-1,-1])}}
//# sourceMappingURL=AudioPreview-3519654d.js.map
