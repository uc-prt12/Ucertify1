import{S as t,i as e,s as a,e as l,C as i,b as n,u as o,f as s,h as c,j as r,V as d,l as u,r as g,o as b,y as m,p,A as h,a6 as _,X as f}from"./main-ef6b7e84.js";function v(t){let e,a,p,h,_,f,v,x,w,C,y,k,A,S,R,T,B,I,E,G,P,D,O,X,j,L,N,U,F,M,H,z,K,V,$,J,Y,q,Q,W,Z,tt,et,at,lt,it,nt,ot,st,ct,rt,dt,ut,gt,bt,mt,pt,ht,_t,ft,vt,xt,wt,Ct,yt,kt,At,St,Rt,Tt,Bt,It,Et,Gt,Pt,Dt,Ot,Xt,jt,Lt,Nt=i.recording_warning+"",Ut=i.modal_data+"";return{c(){e=l("div"),a=l("div"),p=l("div"),h=l("b"),h.textContent=""+i.note_label,_=n(),f=o(Nt),v=n(),x=l("div"),w=l("div"),C=l("b"),C.textContent=""+i.spoken_label,y=n(),k=l("textarea"),R=n(),T=l("div"),B=l("div"),I=l("label"),E=l("b"),E.textContent=""+i.select_lang,G=n(),P=l("select"),D=l("option"),D.textContent=""+i.english_us,O=l("option"),O.textContent=""+i.hindi_lang,X=l("option"),X.textContent=""+i.svenska,j=l("option"),j.textContent=""+i.suomi,L=l("option"),L.textContent=""+i.italiano,N=l("option"),N.textContent=""+i.english_in,F=n(),M=l("div"),H=l("input"),K=n(),V=l("label"),V.textContent=""+i.show_transcript,$=n(),J=l("div"),Y=l("div"),q=l("div"),Q=l("b"),Q.textContent=""+i.audio_recorder,W=n(),Z=l("div"),tt=l("span"),tt.textContent=""+i.starting_message,et=n(),at=l("div"),at.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/6ba174bf48e9b6dc8d8bd19d13c9caa9_000Awg.gif" alt="recording is on" class="w-100 h-100 img_fit"/>',lt=n(),it=l("div"),it.innerHTML='<img src="//s3.amazonaws.com/jigyaasa_content_static/giphy_000AYi.gif" alt="audio is playing" class="w-100 h-100 img_fit"/>',nt=n(),ot=l("div"),st=l("button"),ct=l("span"),ut=n(),gt=l("button"),bt=l("span"),ht=n(),_t=l("button"),ft=l("span"),xt=n(),wt=l("div"),Ct=l("div"),yt=l("div"),kt=l("div"),At=l("div"),St=l("h4"),St.textContent=""+i.confirm_label,Rt=n(),Tt=l("button"),Tt.textContent="×",Bt=n(),It=l("div"),Et=o(Ut),Gt=n(),Pt=l("div"),Dt=l("button"),Dt.textContent=""+i.no_label,Ot=n(),Xt=l("button"),Xt.textContent=""+i.yes_label,s(h,"class","noteColor bolder"),s(p,"class","col-12"),s(p,"tabindex","0"),s(p,"aria-label","Recording will end after 15 sec"),s(w,"class","pb-2"),s(k,"id","data_container"),k.disabled="disabled",s(k,"name","cdata"),s(k,"class","form-control"),s(k,"rows","3"),s(k,"cols","75"),k.value=A=t[3].cdata,s(k,"aria-label",S=i.spoken_label+" "+(""!=t[3].cdata?t[3].cdata:"Nothing")),s(x,"class","col-6 py-2 mb-1"),s(I,"for","language_select"),s(B,"class","select_label_container"),D.__value="en-US",D.value=D.__value,s(D,"aria-label","English United States"),O.__value="hi-IN",O.value=O.__value,s(O,"aria-label","Hindi"),X.__value="sv-SE",X.value=X.__value,s(X,"aria-label","Swedish"),j.__value="fi-FI",j.value=j.__value,s(j,"aria-label","Finnish"),L.__value="it-IT",L.value=L.__value,s(L,"aria-label","Italian"),N.__value="en-IN",N.value=N.__value,s(N,"aria-label","English UK"),s(P,"id","language_select"),s(P,"name","language"),s(P,"class","disability_apply form-select form-control-sm"),s(P,"aria-label","Select the language for Recording"),s(H,"type","checkbox"),s(H,"name","showTranscript"),s(H,"id","showTranscript"),s(H,"tabindex","0"),s(H,"class","form-check-input"),H.checked=z=t[3].showTranscript,s(V,"for","showTranscript"),s(V,"class","form-check-label"),s(M,"class","form-check form-check-inline transcript_container mt-3"),s(T,"class","col-6 py-2 mb-1"),s(q,"class","p-2 tokenfield bg-light mb-3"),s(q,"aria-label","Audio Recorder"),s(q,"tabindex","0"),s(tt,"class","align-self-center mx-auto authInitialState tokenfield"),s(tt,"aria-label","Click on record to start recording"),s(tt,"tabindex","0"),s(at,"class","h authRecordingOn w-100 h-100 tokenfield"),s(at,"aria-label","recording is on"),s(at,"tabindex","0"),s(it,"class","h authAudioPlaying w-100 h-100 tokenfield"),s(it,"aria-label","Audio is playing"),s(it,"tabindex","0"),s(Z,"class","mx-auto text-danger recording_status initialState mb-3 d-flex mx-auto"),s(ct,"class","icomoon-circle-2 s2 text-danger position-relative top1"),s(ct,"data-bs-toggle","tooltip"),s(ct,"data-bs-placement","top"),s(ct,"title",rt="recording"==t[3].status?"Stop Recording":"Start Recording"),s(st,"type","button"),s(st,"name","recordButton"),s(st,"id","recordButton"),s(st,"class","btn btn-light py-0"),s(st,"aria-label",dt="Click for "+t[2]),s(bt,"class","icomoon-24px-autoplay-4 position-relative top1"),s(bt,"data-bs-toggle","tooltip"),s(bt,"data-bs-placement","top"),s(bt,"title","Play Audio"),s(gt,"type","button"),s(gt,"name","stopButton"),s(gt,"id","stopButton"),gt.disabled=mt=t[3].disabled,s(gt,"class","btn btn-light py-0"),s(gt,"aria-label",pt="Click for "+t[0]),s(ft,"class","icomoon-new-24px-reset-1 position-relative top1"),s(ft,"data-bs-toggle","tooltip"),s(ft,"data-bs-placement","top"),s(ft,"title","Reset Data"),s(_t,"type","button"),s(_t,"name","resetButton"),s(_t,"id","resetButton"),s(_t,"class","btn btn-light py-0"),_t.disabled=vt=t[3].isReset,s(_t,"data-bs-toggle","modal"),s(_t,"data-bs-target","#authoring_confirm_modal"),s(_t,"aria-label","Click on this button for override the previous recording"),s(ot,"id","controls_container"),s(ot,"class","bg-light text-center w-100 p-2"),s(Y,"class","border rounded shadow-sm"),s(J,"class","col-12 col-md-8 offset-md-2"),s(a,"class","row"),s(e,"id","authoring_container"),s(e,"class","container"),s(St,"class","modal-title tokenfield"),s(St,"aria-label","Confirmation Dialog box"),s(St,"tabindex","0"),s(Tt,"type","button"),s(Tt,"class","close"),s(Tt,"data-bs-dismiss","modal"),s(Tt,"tabindex","0"),s(Tt,"aria-label","Click on this button for close the confirmation dialog box"),s(At,"class","modal-header"),s(It,"class","modal-body tokenfield"),s(It,"tabindex","0"),s(It,"aria-label",t[1]),s(It,"id","dialogBody"),s(It,"name","dialogBody"),s(Dt,"type","button"),s(Dt,"class","authoring_dismiss_modal btn btn-light pr-2"),s(Dt,"data-bs-dismiss","modal"),s(Dt,"tabindex","0"),s(Dt,"aria-label","Click on this button for neglecte to override previous recording"),s(Xt,"type","button"),s(Xt,"class","authoring_dismiss_done btn btn-primary"),s(Xt,"data-bs-dismiss","modal"),s(Xt,"tabindex","0"),s(Xt,"aria-label","Click on this button for override the previous recording"),s(Pt,"class","modal-footer"),s(kt,"class","modal-content"),s(yt,"class","modal-dialog modal-md modal-dialog-centered"),s(Ct,"class","modal fade"),s(Ct,"id","authoring_confirm_modal"),s(wt,"class","authoring_modal_container container")},m(l,i){c(l,e,i),r(e,a),r(a,p),r(p,h),r(p,_),r(p,f),r(a,v),r(a,x),r(x,w),r(w,C),r(x,y),r(x,k),r(a,R),r(a,T),r(T,B),r(B,I),r(I,E),r(T,G),r(T,P),r(P,D),r(P,O),r(P,X),r(P,j),r(P,L),r(P,N),d(P,t[3].language),r(T,F),r(T,M),r(M,H),r(M,K),r(M,V),r(a,$),r(a,J),r(J,Y),r(Y,q),r(q,Q),r(Y,W),r(Y,Z),r(Z,tt),r(Z,et),r(Z,at),r(Z,lt),r(Z,it),r(Y,nt),r(Y,ot),r(ot,st),r(st,ct),r(ot,ut),r(ot,gt),r(gt,bt),r(ot,ht),r(ot,_t),r(_t,ft),c(l,xt,i),c(l,wt,i),r(wt,Ct),r(Ct,yt),r(yt,kt),r(kt,At),r(At,St),r(At,Rt),r(At,Tt),r(kt,Bt),r(kt,It),r(It,Et),r(kt,Gt),r(kt,Pt),r(Pt,Dt),r(Pt,Ot),r(Pt,Xt),jt||(Lt=[u(k,"change",t[5]),u(P,"change",t[5]),u(P,"blur",t[5]),u(H,"click",t[4]),u(H,"keyup",t[11]),u(st,"click",t[6]),u(gt,"click",t[8]),u(_t,"click",t[7]),u(Dt,"click",t[10]),u(Xt,"click",t[9])],jt=!0)},p(t,[e]){8&e&&A!==(A=t[3].cdata)&&(k.value=A),8&e&&S!==(S=i.spoken_label+" "+(""!=t[3].cdata?t[3].cdata:"Nothing"))&&s(k,"aria-label",S),8&e&&U!==(U=t[3].language)&&d(P,t[3].language),8&e&&z!==(z=t[3].showTranscript)&&(H.checked=z),8&e&&rt!==(rt="recording"==t[3].status?"Stop Recording":"Start Recording")&&s(ct,"title",rt),4&e&&dt!==(dt="Click for "+t[2])&&s(st,"aria-label",dt),8&e&&mt!==(mt=t[3].disabled)&&(gt.disabled=mt),1&e&&pt!==(pt="Click for "+t[0])&&s(gt,"aria-label",pt),8&e&&vt!==(vt=t[3].isReset)&&(_t.disabled=vt),2&e&&s(It,"aria-label",t[1])},i:g,o:g,d(t){t&&b(e),t&&b(xt),t&&b(wt),jt=!1,m(Lt)}}}function x(t,e,a){let l,n,o,s,c,r,d,{getChildXml:u}=e,{xml:g}=e,b="no",m=15,v={language:"",cdata:"",disabled:!0,xml:"",status:"",isReset:!0,showTranscript:!1,counter:0};function x(t){!function(t){try{a(3,v.language=t.smxml._language,v),a(3,v.cdata=t.smxml.__cdata,v),a(3,v.status=t.smxml._status,v),a(3,v.disabled="recordingStopped"!=t.smxml._status,v),a(3,v.isReset="true"==t.smxml._isReset,v),a(3,v.showTranscript="true"==t.smxml._showTranscript,v),C()}catch(t){console.warn({error:t.message,"function name":"parseXMLAuthoring","File name":"AudioRecorder.svelte"})}}(f(t))}function w(t){a(3,v.showTranscript=t.target.checked,v),C()}function C(){!function(t){u(t)}('<smxml type="43" name="AudioRecorder" status="'+v.status+'" language="'+v.language+'" isReset="'+v.isReset+'" showTranscript="'+v.showTranscript+'">\x3c!--[CDATA['+v.cdata+"]]--\x3e</smxml>"),""!=v.status?(h.select(".disability_apply, #showTranscript").disabled="disabled",h.selectAll(".transcript_container, .select_label_container label","addClass","disabledState"),h.selectAll(".transcript_container,#showTranscript")[1].disabled=!0):(h.select(".disability_apply, #showTranscript").disabled="",h.selectAll(".transcript_container, .select_label_container label","removeClass","disabledState"),h.selectAll(".transcript_container,#showTranscript")[1].disabled=!1),a(0,o=h.select("#authoring_container #stopButton span").getAttribute("data-original-title")),a(2,c=h.select("#authoring_container #recordButton span").getAttribute("data-original-title")),a(1,s=h.select("#dialogBody").innerText)}function y(){switch(v.status){case"recording":k();break;case"recordingStopped":h.getBS("#authoring_confirm_modal","Modal").show(),h.select(".modal-body").focus();break;default:window.webkitSpeechRecognition||window.SpeechRecognition?(window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition,l=new SpeechRecognition,l.continuous=!0,l.interimResults=!0,l.lang=v.language,window.recognitionData=l,l.addEventListener("end",(function(){v.isReset||(clearTimeout(r),h.alert(i.recording_ended),A(),h.selectAll(".authInitialState","removeClass","h"),a(3,v.status="recordingStopped",v),a(3,v.disabled=!1,v),C())}))):h.alert(i.browser_support_msg),l.start(),h.select("#resetButton").disabled="",h.selectAll(".authAudioPlaying, .authInitialState","addClass","h"),h.selectAll(".authRecordingOn","removeClass","h"),l.onresult=t=>{let e="";for(let a=0;a<t.results.length;a+=1)e+=t.results[a][0].transcript;a(3,v.cdata=e.trim(),v),C()},a(3,v.status="recording",v),a(3,v.isReset=!1,v),a(3,v.counter=0,v),m=15,S(),C(),h.selectAll("#recordButton span","removeClass",["icomoon-circle-2","s2","text-danger"]),h.selectAll("#recordButton span","addClass","icomoon-24px-stop")}}function k(){A(),clearTimeout(r),a(3,v.status="recordingStopped",v),a(3,v.disabled=!1,v),C(),h.select(".authInitialState","removeClass","h"),l.stop()}function A(){h.selectAll(".authAudioPlaying, .authRecordingOn","addClass","h"),h.selectAll(".authInitialState","removeClass","h"),h.selectAll("#recordButton span","removeClass","icomoon-24px-stop"),h.selectAll("#recordButton span","addClass",["icomoon-circle-2","s2","text-danger"])}function S(){m-=1,a(3,v.counter=v.counter+1,v),r=setTimeout((function(){m>0?S():k()}),1e3)}return p((()=>{h.enableBsAll("[data-bs-toggle='tooltip']","Tooltip",{container:"body"}),a(3,v.xml=g,v),x(g)})),_((()=>{g!=v.xml&&(a(3,v.xml=g,v),x(g))})),t.$$set=t=>{"getChildXml"in t&&a(12,u=t.getChildXml),"xml"in t&&a(13,g=t.xml)},[o,s,c,v,w,function(t){a(3,v[t.target.name]=t.target.value,v),C()},y,function(){b="yes"},function(){window.speechSynthesis?(n=window.speechSynthesis,""!=v.cdata?(h.selectAll(".authRecordingOn, .authInitialState","addClass","h"),h.selectAll(".authAudioPlaying","removeClass","h"),a(3,v.disabled=!0,v),C(),function(){let t=new SpeechSynthesisUtterance(v.cdata),e="de-DE"==v.language?"Google Deutsch":"fr-FR"==v.language?"Google français":"es-ES"==v.language?"Google español":"hi-IN"==v.language?"Google हिन्दी":"ja-JP"==v.language?"Google 日本語":"ko-KR"==v.language?"Google 한국의":"it-IT"==v.language?"Google italiano":"Google US English";t.addEventListener("end",(function(){h.selectAll(".authAudioPlaying, .authRecordingOn","addClass","h"),h.selectAll(".authInitialState","removeClass","h"),a(3,v.disabled=!1,v),C(),n.cancel()})),setTimeout((function(){d=n.getVoices();for(let a=0;a<d.length;a++)d[a].name==e&&(t.voice=d[a],t.pitch=1,t.rate=1,t.lang=v.language,n.speak(t))}),10)}()):(h.selectAll(".authRecordingOn, .authAudioPaused","addClass","h"),h.selectAll(".authInitialState","removeClass","h"),h.alert(i.no_data_msg))):h.alert(i.browser_support_msg)},function(){if("yes"==b)!function(){A(),"recording"==v.status&&l.stop();a(3,v.language="",v),a(3,v.cdata="",v),a(3,v.disabled=!0,v),a(3,v.xml="",v),a(3,v.status="",v),a(3,v.isReset=!0,v),clearTimeout(r),C()}(),b="no";else{a(3,v.cdata="",v),a(3,v.disabled=!0,v),a(3,v.status="",v),C();let t=setTimeout((function(){y(),clearTimeout(t)}),120)}},function(){b="no"},function(t){13==t.keyCode&&w(t)},u,g]}export default class extends t{constructor(t){super(),e(this,t,x,v,a,{getChildXml:12,xml:13})}}
//# sourceMappingURL=AudioRecorder-f3da0f96.js.map
