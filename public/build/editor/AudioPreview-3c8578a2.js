import{S as e,i as t,s as o,e as a,c as i,b as n,B as s,u as r,f as l,h as c,m as d,j as p,l as u,t as m,a as w,o as g,d as b,y as _,p as v,A as f,X as h,W as x}from"./main-b3616693.js";import{I as k}from"./ItemHelper-124d7561.js";import{s as y}from"./style-inject.es-1f59c1d0.js";function A(e){let t,o,i,d,m,w,b,v,f,h,x,k,y,A,C,S,B,T,I,E,O,$,L,P,D,j,G,M,N,z,H,U,X,Y,F,J,K=s.recording_warning+"",V=1==e[4].showTranscript&&R(e);return{c(){t=a("div"),o=a("div"),i=a("b"),i.textContent=""+s.note_label,d=n(),m=r(K),w=n(),V&&V.c(),b=n(),v=a("div"),f=a("div"),h=a("div"),x=a("b"),x.textContent=""+s.audio_recorder,k=n(),y=a("div"),A=a("span"),A.textContent=""+s.starting_message,C=n(),S=a("div"),S.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/6ba174bf48e9b6dc8d8bd19d13c9caa9_000Awg.gif" alt="recording is on" class="w-100 h-100 img_fit"/>',B=n(),T=a("div"),T.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/giphy_000AYi.gif" alt="audio is playing" class="w-100 h-100 img_fit"/>',I=n(),E=a("div"),O=a("button"),$=a("span"),D=n(),j=a("button"),G=a("span"),z=n(),H=a("button"),U=a("span"),l(i,"class","noteColor bolder"),l(o,"class",""),l(o,"tabindex","0"),l(o,"aria-label","Recording will end after 15 sec"),l(t,"class","col-12 pb-3"),l(h,"class","p-2 tokenfield bg-light mb-3"),l(h,"aria-label","Audio Recorder"),l(h,"tabindex","0"),l(A,"class","align-self-center mx-auto previewInitialState tokenfield"),l(A,"aria-label","Click on record to start recording"),l(A,"tabindex","0"),l(S,"class","h previewRecordingOn tokenfield"),l(S,"aria-label","recording is on"),l(S,"tabindex","0"),l(T,"class","h previewAudioPlaying tokenfield"),l(T,"aria-label","Audio is playing"),l(T,"tabindex","0"),l(y,"class","mx-auto text-danger recording_status initialState mb-3 d-flex mx-auto"),l($,"class","icomoon-circle-2 s2 text-danger position-relative top1"),l($,"data-bs-toggle","tooltip"),l($,"data-toggle","tooltip"),l($,"data-bs-placement","top"),l($,"data-placement","top"),l($,"title",L="recording"==e[4].status?"Stop Recording":"Start Recording"),l($,"id","recordButtonTooltip"),l($,"name","recordButtonTooltip"),l(O,"type","button"),l(O,"name","preview_recordButton"),l(O,"id","preview_recordButton"),l(O,"class","btn btn-light py-0"),l(O,"aria-label",P="Click for "+e[3]),l(G,"class","icomoon-24px-autoplay-4 position-relative top1"),l(G,"data-bs-toggle","tooltip"),l(G,"data-bs-placement","top"),l(G,"title","Play Audio"),l(G,"id","stopButtonTooltip"),l(G,"name","stopButtonTooltip"),l(j,"type","button"),l(j,"name","preview_stopButton"),l(j,"id","preview_stopButton"),j.disabled=M=e[4].disabled,l(j,"class","btn btn-light py-0"),l(j,"aria-label",N="Click for "+e[1]),l(U,"class","icomoon-new-24px-reset-1 position-relative top1"),l(U,"data-bs-toggle","tooltip"),l(U,"data-placement","top"),l(U,"title","Reset Data"),l(H,"type","button"),l(H,"name","resetButton"),l(H,"id","resetButton"),l(H,"class","btn btn-light py-0"),H.disabled=X=e[4].isReset,l(H,"data-bs-toggle","modal"),l(H,"data-toggle","modal"),l(H,"data-bs-target","#preview_confirm_modal"),l(H,"data-target","#preview_confirm_modal"),l(H,"aria-label","Click on this button for override the previous recording"),l(E,"id","controls_container"),l(E,"class",Y="bg-light text-center w-100 p-2 "+("none"==e[4].pointerEvents?"pointerEventOff":"pointerEventOn")),l(f,"class","border rounded shadow-sm"),l(v,"class","col-12 col-md-8 offset-md-2")},m(a,n){c(a,t,n),p(t,o),p(o,i),p(o,d),p(o,m),c(a,w,n),V&&V.m(a,n),c(a,b,n),c(a,v,n),p(v,f),p(f,h),p(h,x),p(f,k),p(f,y),p(y,A),p(y,C),p(y,S),p(y,B),p(y,T),p(f,I),p(f,E),p(E,O),p(O,$),p(E,D),p(E,j),p(j,G),p(E,z),p(E,H),p(H,U),F||(J=[u(O,"click",e[8]),u(j,"click",e[11]),u(H,"click",e[9])],F=!0)},p(e,t){1==e[4].showTranscript?V?V.p(e,t):(V=R(e),V.c(),V.m(b.parentNode,b)):V&&(V.d(1),V=null),16&t[0]&&L!==(L="recording"==e[4].status?"Stop Recording":"Start Recording")&&l($,"title",L),8&t[0]&&P!==(P="Click for "+e[3])&&l(O,"aria-label",P),16&t[0]&&M!==(M=e[4].disabled)&&(j.disabled=M),2&t[0]&&N!==(N="Click for "+e[1])&&l(j,"aria-label",N),16&t[0]&&X!==(X=e[4].isReset)&&(H.disabled=X),16&t[0]&&Y!==(Y="bg-light text-center w-100 p-2 "+("none"==e[4].pointerEvents?"pointerEventOff":"pointerEventOn"))&&l(E,"class",Y)},d(e){e&&g(t),e&&g(w),V&&V.d(e),e&&g(b),e&&g(v),F=!1,_(J)}}}function C(e){let t,o,i,d,u,m=s.insensitive_message+"";function w(e,t){return 1!=e[5]?B:S}let b=w(e),_=b(e);return{c(){_.c(),t=n(),o=a("div"),i=a("b"),i.textContent=""+s.note_label,d=n(),u=r(m),l(i,"class","noteColor bolder"),l(o,"class","col-12 pb-3"),l(o,"tabindex","0"),l(o,"aria-label","matching is case insensitive")},m(e,a){_.m(e,a),c(e,t,a),c(e,o,a),p(o,i),p(o,d),p(o,u)},p(e,o){b===(b=w(e))&&_?_.p(e,o):(_.d(1),_=b(e),_&&(_.c(),_.m(t.parentNode,t)))},d(e){_.d(e),e&&g(t),e&&g(o)}}}function R(e){let t,o,i,r,d,u,m,w;return{c(){t=a("div"),o=a("div"),i=a("label"),r=a("b"),r.textContent=""+s.spoken_label,d=n(),u=a("textarea"),l(i,"for","preview_show_transcript"),l(u,"id","preview_show_transcript"),l(u,"name","preview_show_transcript"),l(u,"class","w-100 form-control"),l(u,"rows","2"),u.value=m=e[4].cdata,u.readOnly="readonly",l(u,"tabindex","0"),l(u,"aria-label",w=s.spoken_label+" "+(""!=e[4].cdata.trim()?e[4].cdata.trim():"Nothing")),l(t,"class","col-12 pb-3")},m(e,a){c(e,t,a),p(t,o),p(o,i),p(i,r),p(t,d),p(t,u)},p(e,t){16&t[0]&&m!==(m=e[4].cdata)&&(u.value=m),16&t[0]&&w!==(w=s.spoken_label+" "+(""!=e[4].cdata.trim()?e[4].cdata.trim():"Nothing"))&&l(u,"aria-label",w)},d(e){e&&g(t)}}}function S(e){let t,o,i,n,s;return{c(){t=a("div"),o=a("textarea"),l(o,"id","preview_data_container"),l(o,"name","cdata"),l(o,"class",i="w-100 form-control "+(1==e[4].useransstatus?"border-success typeCorrect":"border-danger typeIncorrect")),l(o,"rows","2"),o.value=n=""==e[4].cdata?"No record found":e[4].cdata,o.readOnly="readonly",l(o,"tabindex","0"),l(o,"aria-label",s="Your answer is "+e[4].cdata+" which is "+(e[4].cdata.toLowerCase().trim()==e[4].correctAns.toLowerCase().trim()?"Correct":"Incorrect")),l(t,"class","col-12 py-3")},m(e,a){c(e,t,a),p(t,o)},p(e,t){16&t[0]&&i!==(i="w-100 form-control "+(1==e[4].useransstatus?"border-success typeCorrect":"border-danger typeIncorrect"))&&l(o,"class",i),16&t[0]&&n!==(n=""==e[4].cdata?"No record found":e[4].cdata)&&(o.value=n),16&t[0]&&s!==(s="Your answer is "+e[4].cdata+" which is "+(e[4].cdata.toLowerCase().trim()==e[4].correctAns.toLowerCase().trim()?"Correct":"Incorrect"))&&l(o,"aria-label",s)},d(e){e&&g(t)}}}function B(e){let t,o,i,n;return{c(){t=a("div"),o=a("textarea"),l(o,"id","preanswer_data_container"),l(o,"name","cdata"),l(o,"class","w-100 form-control border-success typeCorrect"),l(o,"rows","2"),o.value=i=e[4].correctAns,o.readOnly="readonly",l(o,"tabindex","0"),l(o,"aria-label",n="correct Answer is "+e[4].correctAns),l(t,"class","col-12 py-3")},m(e,a){c(e,t,a),p(t,o)},p(e,t){16&t[0]&&i!==(i=e[4].correctAns)&&(o.value=i),16&t[0]&&n!==(n="correct Answer is "+e[4].correctAns)&&l(o,"aria-label",n)},d(e){e&&g(t)}}}function T(e){let t,o,v,f,h,x,y,R,S,B,T,I,E,O,$,L,P,D,j,G,M,N,z,H,U=s.modal_data+"";function X(e,t){return e[0]?C:A}o=new k({props:{reviewMode:e[0],handleReviewClick:e[14],customReviewMode:e[6]}}),o.$on("setReview",e[12]),o.$on("unsetReview",e[13]);let Y=X(e),F=Y(e);return{c(){t=a("div"),i(o.$$.fragment),v=n(),f=a("div"),F.c(),h=n(),x=a("div"),y=a("div"),R=a("div"),S=a("div"),B=a("div"),T=a("h4"),T.textContent=""+s.confirm_label,I=n(),E=a("button"),E.textContent="×",O=n(),$=a("div"),L=r(U),P=n(),D=a("div"),j=a("button"),j.textContent=""+s.no_label,G=n(),M=a("button"),M.textContent=""+s.yes_label,l(f,"class","row"),l(t,"id","preview_container"),l(t,"class","container"),l(T,"class","modal-title tokenfield"),l(T,"aria-label","Confirmation Dialog box"),l(T,"tabindex","0"),l(E,"type","button"),l(E,"class","close"),l(E,"data-bs-dismiss","modal"),l(E,"data-dismiss","modal"),l(E,"tabindex","0"),l(E,"aria-label","Click on this button for close the confirmation dialog box"),l(B,"class","modal-header"),l($,"class","modal-body tokenfield"),l($,"tabindex","0"),l($,"aria-label",e[2]),l($,"id","previewDialogBody"),l($,"name","previewDialogBody"),l(j,"type","button"),l(j,"class","preview_dismiss_modal btn btn-light pr-2"),l(j,"data-bs-dismiss","modal"),l(j,"data-dismiss","modal"),l(j,"tabindex","0"),l(j,"aria-label","Click on this button for neglecte to override previous recording"),l(M,"type","button"),l(M,"id","StopRecord"),l(M,"class","preview_dismiss_done btn btn-primary"),l(M,"data-bs-dismiss","modal"),l(M,"data-dismiss","modal"),l(M,"tabindex","0"),l(M,"aria-label","Click on this button for override the previous recording"),l(D,"class","modal-footer"),l(S,"class","modal-content"),l(R,"class","modal-dialog modal-md modal-dialog-centered"),l(y,"class","modal fade"),l(y,"id","preview_confirm_modal"),l(x,"class","preview_modal_container container")},m(a,i){c(a,t,i),d(o,t,null),p(t,v),p(t,f),F.m(f,null),c(a,h,i),c(a,x,i),p(x,y),p(y,R),p(R,S),p(S,B),p(B,T),p(B,I),p(B,E),p(S,O),p(S,$),p($,L),p(S,P),p(S,D),p(D,j),p(D,G),p(D,M),N=!0,z||(H=[u(j,"click",e[10]),u(M,"click",e[7])],z=!0)},p(e,t){const a={};1&t[0]&&(a.reviewMode=e[0]),o.$set(a),Y===(Y=X(e))&&F?F.p(e,t):(F.d(1),F=Y(e),F&&(F.c(),F.m(f,null))),(!N||4&t[0])&&l($,"aria-label",e[2])},i(e){N||(m(o.$$.fragment,e),N=!0)},o(e){w(o.$$.fragment,e),N=!1},d(e){e&&g(t),b(o),F.d(),e&&g(h),e&&g(x),z=!1,_(H)}}}function I(e,t,o){let a,i,n,r,l,{xml:c}=t,{uxml:d}=t,{showAns:p}=t,{isReview:u}=t,{editorState:m}=t,w=u,g="no",b="Play Audio",_="Start Recording",k=15,y={disabled:!0,cdata:"",language:"",correctAns:"",xml:"",status:"",pointerEvents:"auto",isReset:!0,showTranscript:!1,counter:0};function A(e){!function(e){try{o(4,y.language=e.smxml._language,y),o(4,y.correctAns=e.smxml.__cdata,y),o(4,y.showTranscript="true"==e.smxml._showTranscript,y),d&&function(e){let t=h(e);o(4,y.language=t.smans._language,y),o(4,y.cdata=t.smans.__cdata,y),o(4,y.status=t.smans._status,y),o(4,y.disabled="recordingStopped"!=t.smans._status,y),o(4,y.isReset="true"==t.smans._isReset,y),o(4,y.showTranscript="true"==t.smans._showTranscript,y)}(d)}catch(e){console.warn({error:e.message,"function name":"parseXMLPreview","File name":"AudioPreview.svelte"})}}(h(e))}function C(){setTimeout((function(){let e='<smans type="43" name="AudioRecorder" disabled="'+y.disabled+'" status="'+y.status+'" language="'+y.language+'" isReset="'+y.isReset+'" showTranscript="'+y.showTranscript+'"><![CDATA['+y.cdata+"]]></smans>";f.select("#special_module_user_xml").value=e,ISSPECIALMODULEUSERXMLCHANGE=1,o(15,d=f.select("#special_module_user_xml").value),o(1,b=f.select("#stopButtonTooltip").getAttribute("title")),o(3,_=f.select("#recordButtonTooltip").getAttribute("title")),o(2,n=f.select("#previewDialogBody").innerText),""!=y.correctAns.trim()&&O()}),100)}function R(){T(),clearTimeout(r),o(4,y.status="recordingStopped",y),o(4,y.disabled=!1,y),C(),f.selectAll(".previewRecordingOn","addClass","h"),f.selectAll(".previewInitialState","removeClass","h"),a.stop()}function S(){k-=1,o(4,y.counter=y.counter+1,y),r=setTimeout((function(){k>0?S():R()}),1e3)}function B(){!function(){if(!window.webkitSpeechRecognition&&!window.SpeechRecognition)return void f.alert(s.browser_support_msg);window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,a=new SpeechRecognition,a.continuous=!0,a.interimResults=!0,a.lang=y.language,window.recognitionData=a,a.addEventListener("end",(function(){y.isReset||(clearTimeout(r),f.showmsg(s.recording_ended,3e3),T(),f.selectAll(".previewInitialState","removeClass","h"),o(4,y.status="recordingStopped",y),o(4,y.disabled=!1,y),C())}))}(),a.start(),f.select("#preview_container #resetButton").disabled=!1,f.selectAll(".previewAudioPlaying, .previewInitialState","addClass","h"),f.selectAll(".previewRecordingOn","removeClass","h"),a.onresult=e=>{let t="";for(let o=0;o<e.results.length;o+=1)t+=e.results[o][0].transcript;o(4,y.cdata=t.trim(),y),C()}}function T(){f.selectAll(".previewAudioPlaying, .previewRecordingOn","addClass","h"),f.selectAll(".previewInitialState","removeClass","h"),f.selectAll("#preview_recordButton span","removeClass","icomoon-24px-stop"),f.selectAll("#preview_recordButton span","addClass",["icomoon-circle-2","text-danger"])}function I(){switch(y.status){case"recording":R();break;case"recordingStopped":f.getBS("#preview_confirm_modal","Modal").show(),f.select(".modal-body").focus();break;default:B(),o(4,y.status="recording",y),o(4,y.isReset=!1,y),o(4,y.counter=0,y),k=15,S(),C(),f.selectAll("#preview_recordButton span","removeClass",["icomoon-circle-2","text-danger"]),f.selectAll("#preview_recordButton span","addClass","icomoon-24px-stop")}}function E(){window.speechSynthesis?(i=window.speechSynthesis,""!=y.cdata?(f.selectAll(".previewRecordingOn, .previewInitialState","addClass","h"),f.selectAll(".previewAudioPlaying","removeClass","h"),o(4,y.disabled=!0,y),C(),function(){let e=new SpeechSynthesisUtterance(y.cdata),t=i.getVoices(),a="de-DE"==y.language?"Google Deutsch":"fr-FR"==y.language?"Google français":"es-ES"==y.language?"Google español":"hi-IN"==y.language?"Google हिन्दी":"ja-JP"==y.language?"Google 日本語":"ko-KR"==y.language?"Google 한국의":"it-IT"==y.language?"Google italiano":"Google US English";e.addEventListener("end",(function(){f.selectAll(".previewAudioPlaying, .previewRecordingOn","addClass","h"),f.selectAll(".previewInitialState","removeClass","h"),o(4,y.disabled=!1,y),C(),i.cancel()}));for(let o=0;o<t.length;o+=1)if(t[o].name==a){e.voice=t[o],e.pitch=1,e.rate=1,e.lang=y.language,i.speak(e);break}}()):(f.selectAll(".previewRecordingOn, .previewAudioPlaying","addClass","h"),f.selectAll(".previewInitialState","removeClass","h"),f.alert(s.no_data_msg))):f.alert(s.browser_support_msg)}function O(){let e="";""!=y.correctAns.trim()?(y.correctAns.toLowerCase()==y.cdata.toLowerCase()?(e=s.correct,f.select("#answer").checked=!0,o(4,y.useransstatus=!0,y)):(e=s.incorrect,f.select("#answer").checked=!1,o(4,y.useransstatus=!1,y)),m?p(e):(e="Correct"==e,x({uXml:d,ans:e}))):f.alert(s.matching_msg)}function $(){o(0,u=!0),o(4,y.pointerEvents="none",y),o(5,l=!0),O(),1==y.useransstatus?f.setCss("#preview_data_container",{color:"#50af50"}):f.setCss("#preview_data_container",{color:"#c30f0f"}),f.selectAll(f.parent(f.selectAll("#preanswer_data_container")),"addClass","h"),f.selectAll(f.parent(f.selectAll("#preview_data_container")),"removeClass","h")}function L(){o(0,u=!1),o(4,y.pointerEvents="auto",y),o(5,l=!1),f.selectAll(f.parent(f.selectAll("#preview_data_container")),"addClass","h")}return v((()=>{f.listen("#controls_container","keydown","#preview_recordButton",(function(e,t){13===t.which&&f.select("#preview_recordButton").click()})),f.listen(".preview_modal_container #preview_confirm_modal","keydown",".close",(function(e,t){13===t.which&&AI.find(".preview_modal_container #preview_confirm_modal",".close").click()})),f.listen(".preview_modal_container #preview_confirm_modal","keydown",".preview_dismiss_modal",(function(e,t){13===t.which&&AI.find(".preview_modal_container #preview_confirm_modal",".preview_dismiss_modal").click()})),f.listen(".preview_modal_container #preview_confirm_modal","keydown","#StopRecord",(function(e,t){13===t.which&&f.select("#StopRecord").click()})),f.listen("#controls_container","keydown","#preview_stopButton",(function(e,t){13===t.which&&(E(),f.find("#controls_container","#preview_stopButton").style.disabled=y.disabled)})),f.listen("#controls_container","keydown","#resetButton",(function(e,t){13===t.which&&AI.select("#resetButton").click()})),window.webkitSpeechRecognition||window.SpeechRecognition||f.alert(s.browser_support_msg),c!=y.xml&&(o(4,y.xml=c,y),o(4,y.disabled=!0,y),o(4,y.cdata="",y),o(4,y.xml="",y),o(4,y.status="",y),o(4,y.isReset=!0,y),A(c))})),e.$$set=e=>{"xml"in e&&o(16,c=e.xml),"uxml"in e&&o(15,d=e.uxml),"showAns"in e&&o(17,p=e.showAns),"isReview"in e&&o(0,u=e.isReview),"editorState"in e&&o(18,m=e.editorState)},e.$$.update=()=>{65537&e.$$.dirty[0]&&(A(c),u?$():L())},[u,b,n,_,y,l,w,function(){if("yes"==g)!function(){T(),"recording"==y.status&&a.stop();o(4,y.cdata="",y),o(4,y.disabled=!0,y),o(4,y.xml="",y),o(4,y.status="",y),o(4,y.isReset=!0,y),clearTimeout(r),C()}(),g="no";else{o(4,y.cdata="",y),o(4,y.disabled=!0,y),o(4,y.status="",y),o(4,y.pauseRecording="",y),C();let e=setTimeout((function(){I(),clearTimeout(e)}),120)}},I,function(){g="yes"},function(){g="no"},E,$,L,function(e){"c"==e?o(5,l=!1):"u"==e&&o(5,l=!0)},d,c,p,m]}y(".pointerEventOff{pointer-events:none}.pointerEventOn{pointer-events:auto}.noteColor{color:#c30f0f}.recording_status{height:185px;width:300px;background-color:#000}.img_fit{object-fit:contain}.disabledState,select:disabled{cursor:not-allowed!important}.disabledState{opacity:.5}.custom_checkbox_new{display:block;position:relative;width:20px;height:20px;margin-bottom:0;cursor:pointer;font-size:18px}.custom_checkbox_new input{position:absolute;z-index:-1;opacity:0}.check_mark_custom{width:17px;height:17px;position:absolute;text-align:center;top:2px;left:0;border:1px solid #d4cfcf}.custom_checkbox_new .check_mark_custom:after{content:'';color:#fff;transform:rotate(10deg);margin-top:-3px;width:13px;font-size:13px}.custom_checkbox_new input:checked~.check_mark_custom:after{display:block}.check_mark_custom:after{content:'';position:absolute}.custom_checkbox_new input:checked~.check_mark_custom{background:#4285f4;border:2px solid #a4dbfc}input:focus~.check_mark_custom{box-shadow:0 0 0 .13rem rgb(66 133 244 / 25%)}.btn-light:not([disabled]):not(.disabled).active{color:#fff!important;-webkit-box-shadow:inset 0 2px 0 #1266f1!important;box-shadow:inset 0 2px 0 #1266f1!important;background-color:#2572f2!important;border-color:#2572f2!important;border-top-color:#0c57d3!important}.typeCorrect{background:#d1f5cb!important}.typeIncorrect{background:#f3d2d7!important}.bg-light{background-color:#e4e1e1!important}.top1{top:1px}");export default class extends e{constructor(e){super(),t(this,e,I,T,o,{xml:16,uxml:15,showAns:17,isReview:0,editorState:18},null,[-1,-1])}}
//# sourceMappingURL=AudioPreview-3c8578a2.js.map
