import{S as e,i as t,s as l,e as s,u as a,b as o,f as i,h as r,j as n,x as c,r as d,o as u,$ as g,ab as m,c as h,m as b,l as p,t as _,a as v,d as f,a1 as x,p as A,A as C,a0 as y,X as w,J as S,w as k}from"./main-daecf310.js";import{D as L}from"./Draggable-5e176899.js";import{R as M}from"./Resizable-191e4862.js";function N(e){let t,l,g,m,h,b,p,_,v,f,x,A,C,y,w,S,k,L,M,N,T,P,I,z,D,F,W,E,B,X,H,$,Y,j,O,R,Z,G,J,q,K,Q,U,V,ee,te,le,se,ae,oe,ie,re,ne,ce,de,ue,ge,me,he,be,pe,_e,ve,fe,xe,Ae,Ce,ye,we,Se,ke,Le,Me,Ne,Te,Pe,Ie,ze,De,Fe,We,Ee,Be,Xe,He,$e,Ye,je,Oe,Re,Ze,Ge,Je,qe,Ke,Qe,Ue,Ve,et,tt,lt,st,at,ot,it,rt=e[0].configuration+"",nt=e[0].background_image+"",ct=e[0].upload_media_text+"",dt=e[0].alt_txt_image+"",ut=e[0].width_of_image+"",gt=e[0].draw_color+"",mt=e[0].red+"",ht=e[0].green+"",bt=e[0].light_blue+"",pt=e[0].blue+"",_t=e[0].markPointColor+"",vt=e[0].lightGreen+"",ft=e[0].black+"",xt=e[0].orange+"",At=e[0].tools+"",Ct=e[0].scribble+"",yt=e[0].line+"",wt=e[0].compass+"",St=e[0].cancel+"",kt=e[0].submit+"";return{c(){t=s("div"),l=s("div"),g=s("div"),m=s("div"),h=s("h4"),b=a(rt),p=o(),_=s("button"),_.textContent="×",v=o(),f=s("div"),x=s("div"),A=s("div"),C=s("div"),y=s("div"),w=s("label"),S=a(nt),k=o(),L=s("input"),M=o(),N=s("div"),T=s("button"),P=a(ct),z=o(),D=s("div"),F=s("div"),W=s("div"),E=s("label"),B=s("span"),X=a(dt),H=o(),$=s("input"),Y=o(),j=s("div"),O=s("div"),R=s("div"),Z=s("label"),G=s("span"),J=a(ut),q=o(),K=s("input"),Q=o(),U=s("div"),V=s("span"),ee=s("label"),te=a(gt),le=o(),se=s("select"),ae=s("option"),oe=a(mt),re=s("option"),ne=a(ht),de=s("option"),ue=a(bt),ge=s("option"),me=a(pt),be=o(),pe=s("div"),_e=s("div"),ve=s("span"),fe=s("label"),xe=a(_t),Ae=o(),Ce=s("select"),ye=s("option"),we=a(vt),Se=s("option"),ke=a(ft),Le=s("option"),Me=a(xt),Ne=o(),Te=s("div"),Pe=s("span"),Ie=s("label"),ze=s("span"),De=a(At),Fe=o(),We=s("div"),Ee=s("div"),Be=s("input"),Xe=o(),He=s("label"),$e=a(Ct),Ye=o(),je=s("div"),Oe=s("input"),Re=o(),Ze=s("label"),Ge=a(yt),Je=o(),qe=s("div"),Ke=s("input"),Qe=o(),Ue=s("label"),Ve=a(wt),et=o(),tt=s("div"),lt=s("button"),st=a(St),at=o(),ot=s("button"),it=a(kt),i(h,"class","modal-title"),i(_,"type","button"),i(_,"class","close"),i(_,"data-bs-dismiss","modal"),i(m,"class","modal-header"),i(w,"class","control-label font-weight-normal d-inline-flex"),i(w,"for","backgroundImage"),i(L,"type","text"),L.disabled="disabled",L.readOnly="readonly",i(L,"class","form-control drawing_bgimg"),i(L,"id","backgroundImage"),i(L,"name","backgroundImage"),i(y,"class","form-group text-left"),i(C,"class","col-6"),i(T,"id","upload_media"),i(T,"type","button"),T.value=I=e[0].upload_media_text,i(T,"margin","normal"),i(T,"class","btn btn-primary w-100"),i(N,"class","col-6 margin-top-2"),i(A,"class","row"),i(B,"class","mendatory_label float-left"),i(E,"class","control-label font-weight-normal d-inline-flex"),i(E,"for","imgAlt"),i($,"type","text"),i($,"class","form-control"),i($,"id","imgAlt"),$.value="",i($,"name","imgAlt"),i(W,"class","form-group text-left"),i(F,"class","col-12"),i(D,"class","row"),i(G,"class","mendatory_label float-left"),i(Z,"class","control-label font-weight-normal d-inline-flex"),i(Z,"for","imgWidth"),i(K,"type","number"),i(K,"class"," form-control num"),i(K,"id","imgWidth"),K.value="",i(K,"name","imgWidth"),i(R,"class","form-group text-left"),i(O,"class","col-6"),i(ee,"for","lineColor"),i(ee,"class","text-dark"),ae.__value=ie=e[0].red,ae.value=ae.__value,re.__value=ce=e[0].green,re.value=re.__value,de.__value="#00BCD4",de.value=de.__value,de.selected="selected",ge.__value=he=e[0].blue,ge.value=ge.__value,i(se,"id","lineColor"),i(se,"class","form-control form-select"),i(U,"class","col-6"),i(j,"class","row"),i(fe,"for","markPointColor"),i(fe,"class","text-dark"),ye.__value="#00FF00",ye.value=ye.__value,ye.selected="selected",Se.__value="#000",Se.value=Se.__value,Le.__value="#ff8c00",Le.value=Le.__value,i(Ce,"id","markPointColor"),i(Ce,"class","form-control form-select"),i(_e,"class","col-6"),i(pe,"class","row mb-3"),i(ze,"class","mendatory_label float-left"),i(Ie,"class","mt-2 text-dark relative"),i(Be,"type","checkbox"),Be.value="_scribble",i(Be,"class","checkbox-inline toolCheckbox form-check-input"),i(Be,"name","scribble_checkbox"),i(Be,"id","scribble_checkbox"),i(He,"for","scribble_checkbox"),i(He,"class","text-dark form-check-label"),i(Ee,"class","form-check form-check-inline"),i(Oe,"type","checkbox"),Oe.value="_line",i(Oe,"class","checkbox-inline toolCheckbox form-check-input"),i(Oe,"name","line_checkbox"),i(Oe,"id","line_checkbox"),i(Ze,"for","line_checkbox"),i(Ze,"class","text-dark form-check-label"),i(je,"class","form-check form-check-inline"),i(Ke,"type","checkbox"),Ke.value="_compass",i(Ke,"class","checkbox-inline toolCheckbox form-check-input"),i(Ke,"name","compass_checkbox"),i(Ke,"id","compass_checkbox"),i(Ue,"for","compass_checkbox"),i(Ue,"class","text-dark form-check-label"),i(qe,"class","form-check form-check-inline"),i(We,"class","d-block toolsCheckbox"),i(x,"class","authoring-modal"),i(f,"class","modal-body overflow-y"),i(lt,"type","button"),i(lt,"class","btn btn-light"),i(lt,"data-bs-dismiss","modal"),i(ot,"type","button"),i(ot,"class","btn btn-secondary drawing_modal_submit"),i(tt,"class","modal-footer"),i(g,"class","modal-content"),i(l,"class","modal-dialog modal-dialog-centered"),i(t,"id","drawing-modal"),i(t,"class","modal fade"),i(t,"tabindex","-1")},m(e,s){r(e,t,s),n(t,l),n(l,g),n(g,m),n(m,h),n(h,b),n(m,p),n(m,_),n(g,v),n(g,f),n(f,x),n(x,A),n(A,C),n(C,y),n(y,w),n(w,S),n(y,k),n(y,L),n(A,M),n(A,N),n(N,T),n(T,P),n(x,z),n(x,D),n(D,F),n(F,W),n(W,E),n(E,B),n(B,X),n(W,H),n(W,$),n(x,Y),n(x,j),n(j,O),n(O,R),n(R,Z),n(Z,G),n(G,J),n(R,q),n(R,K),n(j,Q),n(j,U),n(U,V),n(V,ee),n(ee,te),n(U,le),n(U,se),n(se,ae),n(ae,oe),n(se,re),n(re,ne),n(se,de),n(de,ue),n(se,ge),n(ge,me),n(x,be),n(x,pe),n(pe,_e),n(_e,ve),n(ve,fe),n(fe,xe),n(_e,Ae),n(_e,Ce),n(Ce,ye),n(ye,we),n(Ce,Se),n(Se,ke),n(Ce,Le),n(Le,Me),n(x,Ne),n(x,Te),n(Te,Pe),n(Pe,Ie),n(Ie,ze),n(ze,De),n(x,Fe),n(x,We),n(We,Ee),n(Ee,Be),n(Ee,Xe),n(Ee,He),n(He,$e),n(We,Ye),n(We,je),n(je,Oe),n(je,Re),n(je,Ze),n(Ze,Ge),n(We,Je),n(We,qe),n(qe,Ke),n(qe,Qe),n(qe,Ue),n(Ue,Ve),n(g,et),n(g,tt),n(tt,lt),n(lt,st),n(tt,at),n(tt,ot),n(ot,it)},p(e,[t]){1&t&&rt!==(rt=e[0].configuration+"")&&c(b,rt),1&t&&nt!==(nt=e[0].background_image+"")&&c(S,nt),1&t&&ct!==(ct=e[0].upload_media_text+"")&&c(P,ct),1&t&&I!==(I=e[0].upload_media_text)&&(T.value=I),1&t&&dt!==(dt=e[0].alt_txt_image+"")&&c(X,dt),1&t&&ut!==(ut=e[0].width_of_image+"")&&c(J,ut),1&t&&gt!==(gt=e[0].draw_color+"")&&c(te,gt),1&t&&mt!==(mt=e[0].red+"")&&c(oe,mt),1&t&&ie!==(ie=e[0].red)&&(ae.__value=ie,ae.value=ae.__value),1&t&&ht!==(ht=e[0].green+"")&&c(ne,ht),1&t&&ce!==(ce=e[0].green)&&(re.__value=ce,re.value=re.__value),1&t&&bt!==(bt=e[0].light_blue+"")&&c(ue,bt),1&t&&pt!==(pt=e[0].blue+"")&&c(me,pt),1&t&&he!==(he=e[0].blue)&&(ge.__value=he,ge.value=ge.__value),1&t&&_t!==(_t=e[0].markPointColor+"")&&c(xe,_t),1&t&&vt!==(vt=e[0].lightGreen+"")&&c(we,vt),1&t&&ft!==(ft=e[0].black+"")&&c(ke,ft),1&t&&xt!==(xt=e[0].orange+"")&&c(Me,xt),1&t&&At!==(At=e[0].tools+"")&&c(De,At),1&t&&Ct!==(Ct=e[0].scribble+"")&&c($e,Ct),1&t&&yt!==(yt=e[0].line+"")&&c(Ge,yt),1&t&&wt!==(wt=e[0].compass+"")&&c(Ve,wt),1&t&&St!==(St=e[0].cancel+"")&&c(st,St),1&t&&kt!==(kt=e[0].submit+"")&&c(it,kt)},i:d,o:d,d(e){e&&u(t)}}}function T(e,t,l){let{l:s}=t;return e.$$set=e=>{"l"in e&&l(0,s=e.l)},[s]}class P extends e{constructor(e){super(),t(this,e,T,N,l,{l:0})}}function I(e){let t,l,d,x,A,C,y,w,S,k,L,M,N,T,I,D,F,W,E,B,X,H,$,Y,j,O,R,Z,G,J,q,K,Q,U,V,ee,te,le,se,ae,oe,ie,re,ne,ce,de,ue,ge,me,he,be,pe,_e,ve,fe,xe,Ae,Ce,ye,we,Se,ke,Le,Me,Ne,Te,Pe,Ie,ze,De,Fe,We,Ee,Be,Xe,He,$e,Ye,je,Oe,Re,Ze,Ge,Je,qe,Ke,Qe,Ue,Ve,et,tt,lt,st,at,ot,it,rt,nt,ct,dt,ut,gt,mt,ht,bt,pt,_t,vt,ft,xt,At,Ct,yt,wt,St,kt,Lt,Mt,Nt,Tt,Pt,It,zt,Dt,Ft,Wt,Et,Bt,Xt,Ht=g.add_point+"",$t=g.add_focus_pnt+"",Yt=e[0].alt+"";return Wt=new P({props:{l:g}}),{c(){t=s("main"),l=s("div"),d=s("center"),x=s("div"),A=s("div"),C=s("div"),y=s("button"),w=s("i"),k=o(),L=s("button"),M=a("/"),T=o(),I=s("button"),D=s("i"),E=o(),B=s("div"),X=s("button"),H=s("i"),Y=o(),j=s("button"),O=s("i"),Z=o(),G=s("button"),J=s("i"),K=o(),Q=s("button"),U=s("i"),te=o(),le=s("div"),se=s("button"),ae=a(Ht),re=o(),ne=s("div"),ce=s("button"),de=a($t),me=o(),he=s("div"),be=s("button"),pe=s("i"),xe=o(),Ae=s("div"),Ae.textContent=""+g.delete_point_msg,Ce=o(),ye=s("div"),we=s("div"),Se=s("div"),ke=s("button"),ke.innerHTML='<i class="icomoon-24px-settings-1"></i>',Le=o(),Me=s("img"),Pe=o(),Ie=m("svg"),ze=m("title"),De=a(Yt),Fe=m("g"),We=m("g"),Ee=m("g"),Be=m("svg"),Xe=m("svg"),He=m("g"),$e=m("circle"),Ye=m("g"),je=m("line"),Oe=m("g"),Re=m("circle"),Ze=m("defs"),Ge=m("pattern"),Je=m("svg"),qe=m("path"),Ke=m("path"),Qe=m("path"),Ue=m("path"),Ve=m("circle"),et=m("g"),tt=m("circle"),lt=m("defs"),st=m("pattern"),at=m("svg"),ot=m("g"),it=m("g"),rt=m("rect"),nt=m("g"),ct=m("rect"),dt=m("g"),ut=m("g"),gt=m("path"),mt=m("g"),ht=m("path"),bt=m("g"),pt=m("circle"),_t=m("defs"),vt=m("pattern"),ft=m("svg"),xt=m("path"),At=m("g"),Ct=m("circle"),wt=m("circle"),St=m("g"),kt=m("circle"),Lt=m("defs"),Mt=m("pattern"),Nt=m("svg"),Tt=m("g"),Pt=m("g"),It=m("g"),zt=m("g"),Dt=m("path"),Ft=o(),h(Wt.$$.fragment),i(w,"class","icomoon-pencil"),i(y,"type","button"),i(y,"tabindex","0"),i(y,"data-title","scribble"),i(y,"title",S=g.scribble),i(y,"name","authoring_scribble"),i(y,"id","authoring_scribble"),i(y,"class","btn btn-light auth_toolbar geometryTool tooltip_btn authoring_btn active"),i(L,"type","button"),i(L,"tabindex","0"),i(L,"data-title","line"),i(L,"title",N=g.line),i(L,"name","authoring_line"),i(L,"id","authoring_line"),i(L,"class","btn btn-light auth_toolbar geometryTool tooltip_btn authoring_btn"),i(D,"class","icomoon-compass1"),i(I,"type","button"),i(I,"tabindex","0"),i(I,"data-title","compass"),i(I,"title",F=g.compass),i(I,"name","compass"),i(I,"id","authoring_compass"),i(I,"class","btn btn-light auth_toolbar geometryTool tooltip_btn authoring_btn"),i(C,"tabindex","0"),i(C,"class","btn-group mr-2"),i(C,"role","group"),i(C,"aria-label",W=g.draw_tools),i(H,"class","icomoon-delete-sm"),i(X,"type","button"),i(X,"tabindex","0"),i(X,"data-title","eraser"),i(X,"title",$=g.delete_tool),i(X,"name","eraser"),i(X,"id","authoring_eraser"),i(X,"class","btn btn-light auth_toolbar authoring_btn tooltip_btn"),i(O,"class","icomoon-close-2"),i(j,"type","button"),i(j,"title",R=g.clear_screen),i(j,"tabindex","0"),i(j,"name","clearScreen"),i(j,"id","authoring_clearScreen"),j.disabled="disabled",i(j,"class","btn btn-light tooltip_btn"),i(J,"class","icomoon-redo-2"),i(G,"type","button"),i(G,"tabindex","0"),i(G,"title",q=g.redo),i(G,"name","redo"),i(G,"id","authoring_redo"),G.disabled="disabled",i(G,"class","btn btn-light tooltip_btn"),i(U,"class","icomoon-undo-2"),i(Q,"type","button"),i(Q,"tabindex","0"),i(Q,"title",V=g.undo),i(Q,"name","undo"),i(Q,"id","authoring_undo"),Q.disabled="disabled",i(Q,"class","btn btn-light tooltip_btn"),i(B,"tabindex","0"),i(B,"class","btn-group mr-2"),i(B,"role","group"),i(B,"aria-label",ee=g.removing_tools),i(se,"type","button"),i(se,"tabindex","0"),i(se,"data-title","authoring_point"),i(se,"title",oe=g.add_show_point),i(se,"name","authoring_point"),i(se,"id","authoring_point"),i(se,"class","btn btn-light tooltip_btn"),i(le,"class","btn-group mr-2"),i(le,"role","group"),i(le,"aria-label",ie=g.answer_point),i(ce,"type","button"),i(ce,"tabindex","0"),i(ce,"title",ue=g.add_finish_point),i(ce,"name","focus_point"),i(ce,"id","focus_point"),i(ce,"class","btn btn-light tooltip_btn"),i(ne,"class","btn-group mr-2"),i(ne,"role","group"),i(ne,"aria-label",ge=g.access_mode),i(pe,"class","icomoon-new-24px-reset-1"),i(be,"type","button"),i(be,"tabindex","0"),i(be,"title",_e=g.reset),i(be,"name","default_button"),i(be,"id","reset_btn"),i(be,"class","btn btn-light tooltip_btn"),i(he,"class","btn-group mr-2"),i(he,"role","group"),i(he,"aria-label",ve=g.def_mode),i(A,"class","btn-toolbar auth_drawing_toolbar"),i(A,"role","toolbar"),i(A,"aria-label",fe=g.drawing_tools),i(Ae,"id","add_point_msg"),i(Ae,"class","text-danger my-1"),i(x,"class","mt-2 mb-2"),i(ke,"type","button"),i(ke,"tabindex","0"),i(ke,"title","Configuration"),i(ke,"class","btn tooltip_btn btn-light p-1"),i(Se,"class","btn-group position-absolute setting_btn"),i(Me,"class","border"),Me.src!==(Ne=z+e[0].bgImg)&&i(Me,"src",Ne),i(Me,"id","svgImg"),i(Me,"alt",Te=e[0].alt),i(ze,"id","authoringSvgTitle"),i(Fe,"class","backgroundFocusPath"),i(We,"class","drawing_paths"),i(Ee,"class","backgroundFocusPoint"),i($e,"class","drawing-compass-route compass_route"),i($e,"cx","267.984375"),i($e,"cy","173"),i($e,"r","80"),i(je,"class","compass_rotationBar compass_radius"),i(je,"x1","267.984375"),i(je,"y1","173"),i(je,"x2","267.984375"),i(je,"y2","253"),i(Re,"class","drawing_compass_center compass_center"),i(Re,"cx","267.984375"),i(Re,"cy","173"),i(Re,"r","17"),i(Re,"focusable","true"),i(Re,"fill","url(#drawingCenter)"),i(qe,"fill","#808080"),i(qe,"class","st0"),i(qe,"d","M3.22,15.1L1,12l2.22-3.1C3.22,10.97,3.22,13.03,3.22,15.1z"),i(Ke,"fill","#808080"),i(Ke,"class","st0"),i(Ke,"d","M8.9,3.22L12,1l3.1,2.22C13.03,3.22,10.97,3.22,8.9,3.22z"),i(Qe,"fill","#808080"),i(Qe,"class","st0"),i(Qe,"d","M15.1,20.78L12,23l-3.1-2.22C10.97,20.78,13.03,20.78,15.1,20.78z"),i(Ue,"fill","#808080"),i(Ue,"class","st0"),i(Ue,"d","M20.78,8.9L23,12l-2.22,3.1C20.78,13.03,20.78,10.97,20.78,8.9z"),i(Ve,"cx","12"),i(Ve,"cy","12"),i(Ve,"r","2"),i(Ve,"fill","#333333"),i(Je,"x","0px"),i(Je,"y","0px"),i(Je,"viewBox","1 -3 21 35"),i(Je,"width","33"),i(Je,"height","41"),i(Ge,"id","drawingCenter"),i(Ge,"width","20"),i(Ge,"height","20"),i(tt,"class","compass_radius_icon mid_circle"),i(tt,"cx","267.984375"),i(tt,"cy","213"),i(tt,"r","17"),i(tt,"fill","url(#drawingRadius)"),i(tt,"transform","rotate(90,160,168)"),i(tt,"focusable","true"),i(rt,"x","8.53"),i(rt,"y","1.11"),i(rt,"width","1.5"),i(rt,"height","21.79"),i(ct,"x","13.97"),i(ct,"y","1.11"),i(ct,"width","1.5"),i(ct,"height","21.79"),i(gt,"d","M5.87,16.87L1,12l4.87-4.87C5.87,10.38,5.87,13.62,5.87,16.87z"),i(ht,"d","M18.13,16.87L23,12l-4.87-4.87C18.13,10.38,18.13,13.62,18.13,16.87z"),i(at,"x","0px"),i(at,"y","0px"),i(at,"viewBox","1 -5 21 34"),i(at,"width","33"),i(at,"height","33"),i(st,"id","drawingRadius"),i(st,"width","20"),i(st,"height","20"),i(pt,"class","compass_rotation midSmallCircle"),i(pt,"cx","267.984375"),i(pt,"cy","233"),i(pt,"r","8"),i(pt,"fill","url(#midSmallCircle_icon)"),i(pt,"focusable","true"),i(pt,"transform","rotate(90,160,193)"),i(xt,"fill","#000"),i(xt,"opacity","0.8"),i(xt,"d","M7,14 C3.13400675,14 0,10.8659932 0,7 C0,3.13400675 3.13400675,0 7, 0 C10.8659932,0 14,3.13400675 14,7 C14,10.8659932 10.8659932,14 7, 14 Z M4.66666667,8.16666667 L7,11.6666667 L9.33333333,8.16666667 L4.66666667,8.16666667 Z M4.66666667,5.83333333 L9.33333333,5.83333333 L7,2.33333333 L4.66666667,5.83333333 Z"),i(ft,"width","16px"),i(ft,"height","16px"),i(ft,"viewBox","0 0 14 14"),i(ft,"version","1.1"),i(vt,"id","midSmallCircle_icon"),i(vt,"width","20"),i(vt,"height","20"),i(Ct,"class","drawing-compass-pointer lastCircle"),i(Ct,"cx","267.984375"),i(Ct,"cy","253"),i(Ct,"r","3"),i(Ct,"fill",yt=e[0].lineColor),i(wt,"class","drawing-compass-pointer-border lastCircle last_big_circle"),i(wt,"cx","267.984375"),i(wt,"cy","253"),i(wt,"r","17"),i(wt,"focusable","true"),i(kt,"class","lastCircleMid"),i(kt,"fill","url(#lastCircleMid_icon)"),i(kt,"cx","267.984375"),i(kt,"cy","293"),i(kt,"r","12"),i(kt,"opacity","0"),i(Dt,"d","M3.76491276,22.4309727 C5.88207272,19.902578 7.10843487, 16.447736 7.10843487,12.7446281 C7.10843487,9.90533039 6.38974128, 7.20188959 5.07542401,4.93464319 L1.71316547,5.67221801 L4.9100909, 0.48305188 L10.1719173,3.81663137 L7.11351005,4.48755064 C8.4088902, 6.93966677 9.10843487,9.78181395 9.10843487,12.7446281 C9.10843487, 16.6677555 7.87827881,20.3638018 5.71250857,23.1972812 L8.63385425, 24.3467251 L2.93165771,26.8255625 L0.595287046,21.1838396 L3.76491276, 22.4309727 Z"),i(Dt,"class",""),i(zt,"transform","translate(313.742737, 140.576561) rotate(-2.000000) translate(-313.742737, -140.576561) translate(308.242737, 127.076561)"),i(It,"transform","translate(207.000000, 318.000000)"),i(Pt,"transform","translate(-516.000000, -445.000000)"),i(Pt,"fill","#333333"),i(Pt,"fillrule","nonzero"),i(Tt,"stroke","none"),i(Tt,"strokewidth","1"),i(Tt,"fill","none"),i(Tt,"fillrule","evenodd"),i(Tt,"opacity","0.5"),i(Nt,"width","24"),i(Nt,"height","23"),i(Nt,"viewBox","0 0 11 27"),i(Nt,"version","1.1"),i(Nt,"enablebackground","new 0 0 8 24"),i(Mt,"id","lastCircleMid_icon"),i(Mt,"width","20"),i(Mt,"height","20"),i(Xe,"class","drawing-compass-wrapper"),i(Be,"class","drawing_compass_svg h"),i(Be,"focusable","false"),i(Ie,"width","100%"),i(Ie,"height","100%"),i(Ie,"id","authoringSvg"),i(Ie,"tabindex","0"),i(Ie,"aria-labelledby","authoringSvgTitle"),i(we,"id","centerImg"),i(we,"class","centerImg authCenterImg my-auto relative ml-0"),i(l,"class","drawing_module_container")},m(s,a){r(s,t,a),n(t,l),n(l,d),n(d,x),n(x,A),n(A,C),n(C,y),n(y,w),n(C,k),n(C,L),n(L,M),n(C,T),n(C,I),n(I,D),n(A,E),n(A,B),n(B,X),n(X,H),n(B,Y),n(B,j),n(j,O),n(B,Z),n(B,G),n(G,J),n(B,K),n(B,Q),n(Q,U),n(A,te),n(A,le),n(le,se),n(se,ae),n(A,re),n(A,ne),n(ne,ce),n(ce,de),n(A,me),n(A,he),n(he,be),n(be,pe),n(x,xe),n(x,Ae),n(d,Ce),n(d,ye),n(ye,we),n(we,Se),n(Se,ke),n(we,Le),n(we,Me),n(we,Pe),n(we,Ie),n(Ie,ze),n(ze,De),n(Ie,Fe),n(Ie,We),n(Ie,Ee),n(Ie,Be),n(Be,Xe),n(Xe,He),n(He,$e),n(He,Ye),n(Ye,je),n(He,Oe),n(Oe,Re),n(Oe,Ze),n(Ze,Ge),n(Ge,Je),n(Je,qe),n(Je,Ke),n(Je,Qe),n(Je,Ue),n(Je,Ve),n(He,et),n(et,tt),n(et,lt),n(lt,st),n(st,at),n(at,ot),n(ot,it),n(it,rt),n(ot,nt),n(nt,ct),n(at,dt),n(dt,ut),n(ut,gt),n(dt,mt),n(mt,ht),n(He,bt),n(bt,pt),n(bt,_t),n(_t,vt),n(vt,ft),n(ft,xt),n(He,At),n(At,Ct),n(At,wt),n(He,St),n(St,kt),n(St,Lt),n(Lt,Mt),n(Mt,Nt),n(Nt,Tt),n(Tt,Pt),n(Pt,It),n(It,zt),n(zt,Dt),n(l,Ft),b(Wt,l,null),Et=!0,Bt||(Xt=p(ke,"click",e[1]),Bt=!0)},p(e,t){(!Et||1&t[0]&&Me.src!==(Ne=z+e[0].bgImg))&&i(Me,"src",Ne),(!Et||1&t[0]&&Te!==(Te=e[0].alt))&&i(Me,"alt",Te),(!Et||1&t[0])&&Yt!==(Yt=e[0].alt+"")&&c(De,Yt),(!Et||1&t[0]&&yt!==(yt=e[0].lineColor))&&i(Ct,"fill",yt)},i(e){Et||(_(Wt.$$.fragment,e),Et=!0)},o(e){v(Wt.$$.fragment,e),Et=!1},d(e){e&&u(t),f(Wt),Bt=!1,Xt()}}}let z="https://s3.amazonaws.com/jigyaasa_content_static/",D="http://www.w3.org/2000/svg";function F(e,t,l){let s,a,o,i,r,n,c,d,u,m,h,b,p,_,v,f,N,{xml:T}=t,{getChildXml:P}=t,I=!1,F="scribble",W="#00BCD4",E=[],B=0,X=0,H=[],$=[],Y=!0,j=!1,O=90,R=0,Z={x:null,y:null},G={x:null,y:null},J=0,q="",K=0,Q=[],U="",V=["_scribble","_line","_compass"],ee=1,te=[],le=[],se=1,ae=k({xml:"",bgImg:"useraccount_000ANv.png",snackback:!1,cDATA:"",focusDATA:"",imgWidth:"600",alt:"Triangle image",message:"",selectedTools:V,lineColor:"#00BCD4",markPointColor:"#00FF00"}),oe={};ae.subscribe((e=>{l(0,oe=e)}));function ie(e){var t;Y=!0,""==e.value.trim()?(Y=!1,C.insert(e.parentElement,'<span class="error text-danger">'+g.fill_warning+"</span>","beforeend")):e.classList.contains("num")&&Number(e.value)<600?(Y=!1,C.insert(e.parentElement,'<span class="error text-danger">'+g.val_gt_limit+"</span>","beforeend")):(t=e.value,!isNaN(parseFloat(t))&&isFinite(t)||!e.classList.contains("num")?0==C.selectAll(".checkbox-inline:checked").length&&e.classList.contains("checkbox-inline")&&(Y=!1,C.insert(e.closest(".toolsCheckbox").parentElement,'<span class="error text-danger">'+g.select_one_tool+"</span>","beforeend")):(Y=!1,C.insert(e.parentElement,'<span class="error text-danger">'+g.enter_number+"</span>","beforeend"))),Y?e.classList.contains("checkbox-inline")?C.select("#backgroundImage").classList.remove("showError"):(e.classList.remove("showError"),C.setCss(e,{border:"",background:""})):e.classList.contains("checkbox-inline")?C.select("#backgroundImage").classList.add("showError"):(e.classList.add("showError"),C.setCss(e,{border:"1px solid red",background:"#FFCECE"}))}function re(e){switch(F){case"line":case"scribble":I&&(he(e),r==a&&n==o?E.pop():(s.setAttributeNS(null,"d",E[B].d+" L"+a+" "+o),E[B].d=E[B].d+" L"+a+" "+o,i.prepend(s),B++,X++,H=[],C.select("#authoring_undo").disabled=!1,C.select("#authoring_clearScreen").disabled=!1,C.select("#authoring_redo").disabled=!0)),I=!1;break;case"compass":R=0,J=0,j&&(he(e),c=a,d=o,N=C.select(".drawing-compass-route").getAttribute("r"),ne(c,d,N,O),j=!1),I&&(r==p&&n==_?E.pop():(s.setAttributeNS(null,"d",E[B].d+" L"+p+" "+_),E[B].d=E[B].d+" L"+p+" "+_,i.prepend(s),B++,X++,H=[],C.select("#authoring_undo").disabled=!1,C.select("#authoring_clearScreen").disabled=!1,C.select("#authoring_redo").disabled=!0),I=!1),C.selectAll("#authoringSvg .lastCircle","css",{cursor:"grab"})}}function ne(e,t,l,s){u=e+l/2*Math.cos(s*(Math.PI/180)),m=t+l/2*Math.sin(s*(Math.PI/180)),h=e+3*l/4*Math.cos(s*(Math.PI/180)),b=t+3*l/4*Math.sin(s*(Math.PI/180)),p=e+l*Math.cos(s*(Math.PI/180)),_=t+l*Math.sin(s*(Math.PI/180)),v=e+5*l/4*Math.cos(s*(Math.PI/180)),f=t+5*l/4*Math.sin(s*(Math.PI/180)),C.selectAll(".drawing-compass-route, .drawing_compass_center","attr",{cx:e,cy:t}),C.select(".drawing-compass-route").setAttribute("r",l),C.setAttr("#authoringSvg .compass_rotationBar",{x1:e,y1:t,x2:p,y2:_}),C.setAttr("#authoringSvg .lastCircleMid",{cx:v,cy:f}),C.selectAll("#authoringSvg .lastCircle","attr",{cx:p,cy:_}),C.setAttr("#authoringSvg .midSmallCircle",{cx:h,cy:b}),C.setAttr("#authoringSvg .mid_circle",{cx:u,cy:m})}function ce(){U="";for(let e=0;e<Q.length;e++)null!=Q[e].Center_X||null!=Q[e].Center_Y||null!=Q[e].radius?U+='{"x":"'+Q[e].Center_X+'","y":"'+Q[e].Center_Y+'","r":"'+Q[e].radius+'"}!':Q=Q.filter((function(e){return null!=e.Center_X}));let e=C.selectAll(".resize");if(e.length>0)for(let t=0;t<Q.length;t++)C.setAttr(e[t],{"data-point":t+1});else C.select("#add_point_msg").classList.add("h"),K=0,F=oe.selectedTools[0].substr(-(oe.selectedTools[0].length-1)),C.setCss("#authoringSvg",{cursor:"crosshair"}),"compass"==F?C.selectAll(".drawing_compass_svg","removeClass","h"):C.selectAll(".drawing_compass_svg","addClass","h"),C.selectAll(".authoring_btn,#authoring_point,#focus_point","removeClass","active"),C.selectAll('[data-title="'+F+'"]',"addClass","active");U=U.substr(0,U.length-1),de(U)}function de(e){q=w(T),q.smxml.div.__cdata=e,q=S(q),q=q.replace(/<!\[CDATA\[/g,"\x3c!--[CDATA["),q=q.replace(/\]\]>/g,"]]--\x3e"),P(q),l(0,oe.xml=q,oe)}function ue(){Z.x=Number(C.select(".compass_rotationBar").getAttribute("x1")),Z.y=Number(C.select(".compass_rotationBar").getAttribute("y1")),G.x=Number(C.select(".compass_rotationBar").getAttribute("x2")),G.y=Number(C.select(".compass_rotationBar").getAttribute("y2")),N=Number(C.select(".drawing-compass-route").getAttribute("r")),O=180*Math.atan2(G.y-Z.y,G.x-Z.x)/Math.PI}function ge(){le.length>0&&te.push(le),q=w(T);var e="";for(let t=0;t<te.length;t++){e+='{"'+t+'":[';for(let l=0;l<te[t].length;l++)e+='{"x":"'+te[t][l].x+'","y":"'+te[t][l].y+'"}!';e=e.substr(0,e.length-1)+"]}!"}e=e.substr(0,e.length-1),q.smxml.backgroundPoint.__cdata=e,q=S(q),q=q.replace(/<!\[CDATA\[/g,"\x3c!--[CDATA["),q=q.replace(/\]\]>/g,"]]--\x3e"),P(q),l(0,oe.xml=q,oe),C.select("#focus_point").innerText="Add Focus Point",C.select("#focus_point").classList.remove("active"),F=oe.selectedTools[0].substr(-(oe.selectedTools[0].length-1)),C.setCss("#authoringSvg",{cursor:"crosshair"}),C.select("#authoring"+oe.selectedTools[0]).classList.add("active"),"compass"==F?C.selectAll(".drawing_compass_svg","removeClass","h"):C.selectAll(".drawing_compass_svg","addClass","h"),ee=1,me(le)}function me(e){if(0==e.length)return;s=document.createElementNS(D,"path");let t="M "+e[0].x+" "+e[0].y,l="";for(let t=1;t<e.length;t++)l+=" L "+e[t].x+" "+e[t].y;s.setAttributeNS(null,"d",t+""+l),be("rgb(128, 128, 128)",5),C.select(".backgroundFocusPath").prepend(s),le=[]}function he(e){let t=document.getElementById("authoringSvg").getBoundingClientRect();a=e.clientX-t.left,o=e.clientY-t.top}function be(e,t){s.style.stroke=e,s.style.strokeWidth=t,s.style.fill="none"}function pe(){C.select("#authoring_point").innerText="Add Point",C.select("#add_point_msg").classList.add("h"),C.selectAll(".resize","remove"),C.select(".drawing_paths").innerHTML="",C.select("#authoring_redo").disabled=!0,C.select("#authoring_undo").disabled=!0,C.select("#authoring_clearScreen").disabled=!0,C.setCss("#authoringSvg",{cursor:"crosshair"}),F=oe.selectedTools[0].substr(-(oe.selectedTools[0].length-1)),_e(),de(""),C.selectAll(".authoring_btn,#authoring_point,#focus_point","removeClass","active"),ge(),X=0,K=0,B=0,E=[],Q=[]}function _e(){C.selectAll(".geometryTool","addClass","h");for(let e=0;e<oe.selectedTools.length;e++)C.selectAll("#authoring"+oe.selectedTools[e],"removeClass","h");C.selectAll(".backgroundFocusPoint circle,.backgroundFocusPath path","remove"),W=oe.lineColor,C.selectAll(".authCenterImg,.auth_drawing_toolbar","attr",{style:"width:"+(Number(oe.imgWidth)+2)+"px"}),C.setAttr(".centerImg #svgImg",{src:z+""+oe.bgImg,alt:oe.alt,width:oe.imgWidth}),C.selectAll(".drawing_compass_svg","addClass","h"),te=[],le=[]}return x((async()=>{oe.xml!=T&&(!function(){q=w(T),ae.update((e=>(e.bgImg=q.smxml._bgimg,e.alt=q.smxml._imgAlt,e.imgWidth=q.smxml._width,e.selectedTools=q.smxml.div._selectedDrawingType.split(","),e.cDATA=q.smxml.div.__cdata,e.focusDATA=q.smxml.backgroundPoint.__cdata,e.markPointColor=q.smxml._markPointColor,e.lineColor=q.smxml._color,e)));try{C.select("#authoring_point").innerText="Add Point",_e(),K=0,C.select(".drawing_paths").innerHTML="",C.select("#authoring_redo").disabled=!0,C.select("#authoring_undo").disabled=!0,C.select("#authoring_clearScreen").disabled=!0,X=0,B=0,se=1,E=[];let e=oe.cDATA;e="["+e.replace(/!/g,",")+"]",e=JSON.parse(e),C.selectAll(".resize","remove");let t=Q.length;if(e.length>t)for(let l=0;l<e.length-t;l++)Q.push({Center_X:90,Center_Y:68,radius:33});else for(let l=e.length;l<t;l++)Q.pop();for(let t=0;t<e.length;t++)K++,Q[K-1].Center_X=e[t].x,Q[K-1].Center_Y=e[t].y,Q[K-1].radius=e[t].r,C.insert("#centerImg",'<div class="resize" data-point="'+K+'" style="z-index: 10; left: '+(e[t].x-e[t].r)+"px; top: "+(e[t].y-e[t].r)+"px;width: "+2*e[t].r+"px; height: "+2*e[t].r+'px;"><div class="resizer icomoon-resize"></div></div>',"beforeend"),ce();let l=oe.focusDATA;l="["+l.replace(/!/g,",")+"]",l=JSON.parse(l),C.selectAll(".backgroundFocusPoint circle,.backgroundFocusPath path","remove"),te=[];for(let e=0;e<l.length;e++)te.push(l[e][e]);for(let e=0;e<l.length;e++){for(let t=0;t<l[e][e].length;t++)te[e][t].x=l[e][e][t].x,te[e][t].y=l[e][e][t].y,s=document.createElementNS(D,"circle"),be("#808080",5),s.setAttributeNS(null,"id","focusPoint"+se),s.setAttributeNS(null,"cx",te[e][t].x),s.setAttributeNS(null,"cy",te[e][t].y),s.setAttributeNS(null,"r","2px"),C.select(".backgroundFocusPoint").prepend(s),se++;me(te[e])}0==K?C.select("#add_point_msg").classList.add("h"):C.select("#add_point_msg").classList.remove("h"),C.selectAll(".resize").length>0?(F="authoring_point",C.setCss("#authoringSvg",{cursor:"auto"})):(F=oe.selectedTools[0].substr(-(oe.selectedTools[0].length-1)),C.setCss("#authoringSvg",{cursor:"crosshair"}),"compass"==F?C.selectAll(".drawing_compass_svg","removeClass","h"):C.selectAll(".drawing_compass_svg","addClass","h")),C.selectAll(".authoring_btn,#authoring_point,#focus_point","removeClass","active"),C.selectAll('[data-title="'+F+'"]',"addClass","active")}catch(e){console.warn({e:e,func:"parseXMLForGettingData"})}}(),l(0,oe.xml=T,oe))})),A((async()=>{i=C.select(".drawing_paths"),C.setAttr(".centerImg #svgImg",{src:z+""+oe.bgImg,alt:oe.alt,width:oe.imgWidth}),C.setAttr(".auth_drawing_toolbar",{style:"width:"+(Number(oe.imgWidth)+2)+"px"}),C.setAttr(".authCenterImg",{style:"width:"+(Number(oe.imgWidth)+2)+"px"}),ne(160,118,100,90),C.listen("body","mousedown","#authoringSvg .mid_circle",(function(){"compass"==F&&(R=1)})),C.listen("body","mousedown","#authoringSvg .midSmallCircle",(function(){"compass"==F&&(J=1)})),C.listen("body","mousedown","#authoringSvg .drawing_compass_center",(function(e,t){"compass"==F&&(he(t),c=a,d=o,N=C.select(".drawing-compass-route").getAttribute("r"),ne(c,d,N,O),C.selectAll("#authoringSvg .midSmallCircle","attr",{transform:"rotate("+O+","+C.select("#authoringSvg .midSmallCircle").getAttribute("cx")+","+C.select("#authoringSvg .midSmallCircle").getAttribute("cy")+")"}),C.selectAll("#authoringSvg .mid_circle","attr",{transform:"rotate("+O+","+C.select("#authoringSvg .mid_circle").getAttribute("cx")+","+C.select("#authoringSvg .mid_circle").getAttribute("cy")+")"}),C.selectAll("#authoringSvg .lastCircleMid","attr",{transform:"rotate("+O+","+C.select("#authoringSvg .lastCircleMid").getAttribute("cx")+","+C.select("#authoringSvg .lastCircleMid").getAttribute("cy")+")"}),j=!0)})),C.listen("body","mousemove","#authoringSvg .lastCircle",(function(e){e.classList.add("lastCircle_hover"),C.selectAll("#authoringSvg .lastCircleMid","attr",{opacity:1})})),C.listen("body","mouseout","#authoringSvg .lastCircle",(function(e){e.classList.remove("lastCircle_hover"),C.selectAll("#authoringSvg .lastCircleMid","attr",{opacity:0})})),C.listen("body","mousedown","#authoringSvg .lastCircle",(function(e){"compass"==F&&(I=!0,J=1,C.selectAll("#authoringSvg .lastCircle","css",{cursor:"grabbing"}),s=document.createElementNS(D,"path"),be(W,5),s.setAttributeNS(null,"data-type",F+"_"+B),s.setAttributeNS(null,"data-order",B),s.setAttributeNS(null,"d","M"+p+" "+_),r=p,n=_,E.push({mode:"add",order:B,type:F+"_"+B,index:B,d:"M"+p+" "+_}))})),C.listen("body","mousedown","#authoringSvg",(function(e,t){!function(e){switch(F){case"line":case"scribble":I=!0,he(e),s=document.createElementNS(D,"path"),be(W,5),s.setAttributeNS(null,"data-type",F+"_"+B),s.setAttributeNS(null,"data-order",B),s.setAttributeNS(null,"d","M"+a+" "+o),r=a,n=o,E.push({mode:"add",order:B,type:F+"_"+B,index:B,d:"M"+a+" "+o});break;case"eraser":if(C.select(".currentSvg").nodeName&&null!=C.select(".currentSvg").getAttribute("data-order")){H=[];let e="",t=E.indexOf(E[C.select(".currentSvg").getAttribute("data-order")]);e=Object.assign({},E[t]),e.mode="remove",E.push(e),B++,X++,C.select("#authoring_redo").disabled=!0,C.selectAll(".currentSvg","remove"),0==C.selectAll(".drawing_paths path").length&&(C.select("#authoring_clearScreen").disabled=!0)}break;case"markAccessibilityPoint":ee||(he(e),s=document.createElementNS(D,"circle"),be("#808080",5),s.setAttributeNS(null,"id","focusPoint"+se),s.setAttributeNS(null,"cx",a),s.setAttributeNS(null,"cy",o),s.setAttributeNS(null,"r","2px"),le.push({x:a,y:o}),se++,C.select(".backgroundFocusPoint").prepend(s))}}(t)})),C.listen("body","click","#authoring_point",(function(e){ge(),C.selectAll(".authoring_btn, #focus_point","removeClass","active"),e.classList.add("active"),F="authoring_point",C.selectAll("#authoringSvg path","removeClass","eraserHover"),C.selectAll("#authoringSvg","css",{cursor:"unset"}),C.selectAll(".drawing_compass_svg","addClass","h"),"Add Point"==C.select("#authoring_point").innerText&&(K++,Q.push({Center_X:90,Center_Y:68,radius:33}),C.insert("#centerImg",'<div class="resize" data-point="'+K+'"><div class="resizer icomoon-resize"></div></div>',"beforeend"),ce()),C.select(".resize").nodeName&&C.select(".resize").offsetHeight&&0!=K||(C.selectAll(".resize","removeClass","h"),C.selectAll(".drawing_compass_svg","addClass","h"),C.select("#authoring_point").innerText="Add Point"),C.select("#add_point_msg").classList.remove("h")})),C.listen("body","mousemove","#authoringSvg",(function(e,t){switch(he(t),F){case"line":I&&(s.setAttributeNS(null,"d",E[B].d+" L"+a+" "+o),i.prepend(s));break;case"scribble":I&&(s.setAttributeNS(null,"d",E[B].d+" L"+a+" "+o),E[B].d=E[B].d+" L"+a+" "+o,i.prepend(s));break;case"compass":j&&(c=a,d=o,N=C.select(".drawing-compass-route").getAttribute("r"),ne(c,d,N,O)),R&&(ue(),O=Math.round(O),N=2*Math.sqrt(Math.pow(a-Z.x,2)+Math.pow(o-Z.y,2)),N<80&&(N=80),N>360&&(N=360),ne(Z.x,Z.y,N,O)),J&&(he(t),ue(),O=180*Math.atan2(o-Z.y,a-Z.x)/Math.PI,O<0&&(O=360+O),ne(Z.x,Z.y,N,O)),I&&(C.select("#authoringSvg .last_big_circle").classList.contains("lastCircle_hover")?(s.setAttributeNS(null,"d",E[B].d+" L"+p+" "+_),E[B].d=E[B].d+" L"+p+" "+_,i.prepend(s)):re(t)),C.selectAll("#authoringSvg .midSmallCircle","attr",{transform:"rotate("+O+","+C.select("#authoringSvg .midSmallCircle").getAttribute("cx")+","+C.select("#authoringSvg .midSmallCircle").getAttribute("cy")+")"}),C.selectAll("#authoringSvg .mid_circle","attr",{transform:"rotate("+O+","+C.select("#authoringSvg .mid_circle").getAttribute("cx")+","+C.select("#authoringSvg .mid_circle").getAttribute("cy")+")"}),C.selectAll("#authoringSvg .lastCircleMid","attr",{transform:"rotate("+O+","+C.select("#authoringSvg .lastCircleMid").getAttribute("cx")+","+C.select("#authoringSvg .lastCircleMid").getAttribute("cy")+")"})}})),C.listen("body","mouseup","#authoringSvg",(function(e,t){re(t)})),C.bind("#authoringSvg","mouseleave",(function(e){re(e)})),C.listen("body","click","#authoring_clearScreen",(function(e){C.select(".drawing_paths").innerHTML="",X=0,B=0,E=[],C.select("#authoring_undo").disabled=!0,C.select("#authoring_redo").disabled=!0,C.select("#authoring_clearScreen").disabled=!0})),C.listen("body","click",".auth_toolbar",(function(e){C.selectAll(".resize","addClass","h"),ge(),C.selectAction("#authoringSvg","css",{cursor:"crosshair"}),F=e.getAttribute("data-title"),C.selectAll(".authoring_btn,#authoring_point,#focus_point","removeClass","active"),e.classList.add("active"),"eraser"==F?C.selectAll(".drawing_paths path","addClass","eraserHover"):C.selectAll(".drawing_paths path","removeClass","eraserHover"),"compass"==F?C.selectAll(".drawing_compass_svg","removeClass","h"):C.selectAll(".drawing_compass_svg","addClass","h"),0!=K&&(C.select("#authoring_point").innerText="Show Point",C.select("#add_point_msg").classList.add("h"))})),C.listen("body","mouseover",".drawing_paths path",(function(e){"eraser"==F&&(C.selectAll(".drawing_paths path","removeClass","currentSvg"),e.classList.add("currentSvg"))})),C.listen("body","mouseout",".drawing_paths path",(function(e){"eraser"==F&&e.classList.remove("currentSvg")})),C.listen("body","click","#authoring_undo",(function(e){1==X?(e.disabled=!0,C.select("#authoring_redo").disabled=!1):C.select("#authoring_redo").disabled=!1,"add"==E[E.length-1].mode?C.select('#authoringSvg [data-order="'+(E.length-1)+'"]',"remove"):"remove"==E[E.length-1].mode&&(s=document.createElementNS(D,"path"),be(W,5),s.setAttributeNS(null,"data-type",E[E.length-1].type),s.setAttributeNS(null,"data-order",E[E.length-1].order),s.setAttributeNS(null,"d",E[E.length-1].d),"eraser"==F&&s.setAttributeNS(null,"class","eraserHover"),i.prepend(s)),H.push(E.pop()),B--,X--,0==C.selectAll(".drawing_paths path").length?C.select("#authoring_clearScreen").disabled=!0:C.select("#authoring_clearScreen").disabled=!1,0==E.length&&(e.disabled=!0)})),C.listen("body","click","#authoring_redo",(function(e){B++,H.length>0&&$.push(H.pop()),"add"==$[$.length-1].mode?(s=document.createElementNS(D,"path"),be(W,5),s.setAttributeNS(null,"data-type",$[$.length-1].type),s.setAttributeNS(null,"data-order",$[$.length-1].order),s.setAttributeNS(null,"d",$[$.length-1].d),"eraser"==F&&s.setAttributeNS(null,"class","eraserHover"),i.prepend(s)):"remove"==$[$.length-1].mode&&C.select('#authoringSvg [data-order="'+$[$.length-1].order+'"]',"remove"),X++,E.push($.pop()),0==C.selectAll(".drawing_paths path").length?C.select("#authoring_clearScreen").disabled=!0:C.select("#authoring_clearScreen").disabled=!1,0==H.length?(e.disabled=!0,C.select("#authoring_undo").disabled=!1):C.select("#authoring_undo").disabled=!1})),C.listen("body","click","#reset_btn",(function(){y({text:g.reset_module,icon:"warning",buttons:!0}).then((e=>{e&&pe()}))})),C.listen("body","click","#focus_point",(function(){C.selectAll(".drawing_compass_svg","addClass","h"),C.selectAll("#authoringSvg path","removeClass","eraserHover"),C.select("#authoringSvg","css",{cursor:"crosshair"}),C.selectAll(".resize","addClass","h"),0!=K&&(C.select("#authoring_point").innerText="Show Point",C.select("#add_point_msg").classList.add("h")),ee?(C.selectAll(".authoring_btn,#authoring_point","removeClass","active"),C.select("#focus_point").innerText="Finish Marking",C.select("#focus_point","addClass","active"),ee=0,F="markAccessibilityPoint"):ge()})),AI.listen("body","contextmenu",".resize",(function(e,t){t.preventDefault(),y({text:g.delete_points,icon:"warning",buttons:!0}).then((t=>{if(t){let t=e.getAttribute("data-point");Q[t-1].Center_X=null,Q[t-1].Center_Y=null,Q[t-1].radius=null,e.remove(),ce()}}))})),AI.listen("body","keyup",".authoring-modal input",(function(e,t){t.stopPropagation(),C.selectAll(".error","remove"),ie(e)})),AI.listen("body","change",".authoring-modal input",(function(e,t){t.stopPropagation(),C.selectAll(".error","remove"),ie(e)})),AI.listen("body","click",".drawing_modal_submit",(function(e,t){if(Y&&0==C.selectAll(".showError").length){V=[];let e=C.selectAll(".checkbox-inline:checked");for(let t=0;t<e.length;t++)V.push(e[t].value);ae.update((e=>(e.bgImg=C.select("#backgroundImage").value,e.alt=C.select("#imgAlt").value.trim(),e.imgWidth=C.select("#imgWidth").value,e.lineColor=C.select("#lineColor").value,e.markPointColor=C.select("#markPointColor").value,e.selectedTools=V,e))),pe(),q=w(T),q.smxml._bgimg=oe.bgImg,q.smxml._imgAlt=oe.alt,q.smxml._width=oe.imgWidth,q.smxml._color=oe.lineColor,q.smxml._markPointColor=oe.markPointColor,q.smxml.div._selectedDrawingType=V.join(","),q.smxml.div.__cdata="",q.smxml.backgroundPoint.__cdata="",q=S(q),q=q.replace("<![CDATA[]]>","\x3c!--[CDATA[]]--\x3e"),P(q),l(0,oe.xml=q,oe),C.getBS("#drawing-modal","Modal").hide()}else y({text:"Please solve all the errors!",icon:"warning"})})),C.listen("body","click","#upload_media",(function(){C.getBS("#modal-media-upload","Modal").show()})),new L({containment:"#authoringSvg",classes:".resize",ignore:[".tools",".resizer"]}).onDragStop=function(e,t,l){let s=l.getAttribute("data-point");C.setCss(l,{height:l.offsetWidth+"px",width:l.offsetWidth+"px"});let a=l.offsetHeight/2,o=t.left+a,i=t.top+a;Q[s-1].Center_X=o,Q[s-1].Center_Y=i,Q[s-1].radius=a,ce()},new M("#authoringSvg",".resize").onStop=function(e,t){let l=t.getAttribute("data-point"),s=Number(t.offsetWidth)>66?66:t.offsetWidth;C.setCss(t,{height:s+"px",width:s+"px"});let a=t.offsetHeight/2,o=t.offsetLeft+a,i=t.offsetTop+a;Q[l-1].Center_X=o,Q[l-1].Center_Y=i,Q[l-1].radius=a,ce()}})),e.$$set=e=>{"xml"in e&&l(2,T=e.xml),"getChildXml"in e&&l(3,P=e.getChildXml)},[oe,function(){if(C.getBS("#drawing-modal","Modal").show(),C.select("#backgroundImage").value=oe.bgImg,""!=oe.lineColor&&(C.select('#lineColor option[value="'+oe.lineColor+'"]').selected=!0),""!=oe.markPointColor&&(C.select('#markPointColor option[value="'+oe.markPointColor+'"]').selected=!0),oe.selectedTools.length>0){C.selectAll(".toolCheckbox","checked",!1);for(var e=0;e<oe.selectedTools.length;e++)C.select('[value="'+oe.selectedTools[e]+'"]').checked=!0}C.select("#imgWidth").value=oe.imgWidth,C.select("#imgAlt").value=oe.alt;let t=C.selectAll(".authoring-modal input");C.selectAll(".error","remove");for(let e=0;e<t.length;e++)ie(t[e])},T,P]}export default class extends e{constructor(e){super(),t(this,e,F,I,l,{xml:2,getChildXml:3},[-1,-1,-1])}}
//# sourceMappingURL=Drawing-b1d73e5c.js.map
