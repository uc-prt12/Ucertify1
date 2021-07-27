import{G as e,$ as t,S as l,i as a,s as n,F as s,e as o,b as r,f as i,h as c,j as d,r as m,o as u,c as h,g as p,m as x,l as v,t as g,a as b,d as f,y,E as _,A as w,p as C,a1 as A,X as I,w as k}from"./main-b1387daf.js";const E=new e;let T={};function L(e){s(e,"svelte-1v1w5xb","input[type=number].svelte-1v1w5xb::-webkit-inner-spin-button,input[type=number].svelte-1v1w5xb::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.modal_height.svelte-1v1w5xb{max-height:350px}")}function M(e){let l,a,n,s,h,p,x,v,g,b,f,y,_,w,C,A,I,k,E,T,L,M,S,N,D,P,O,X,$,z,H,B,W,F,V,j,G,R,Y,J,q,U,K,Q,Z,ee,te,le,ae,ne,se,oe,re,ie,ce,de,me,ue,he,pe,xe,ve,ge,be,fe,ye,_e,we,Ce,Ae,Ie,ke,Ee,Te,Le,Me,Se,Ne,De,Pe,Oe,Xe,$e,ze,He,Be,We,Fe,Ve,je,Ge,Re,Ye,Je,qe,Ue,Ke,Qe,Ze,et,tt,lt,at,nt,st,ot,rt,it,ct,dt,mt,ut,ht,pt,xt,vt,gt,bt,ft,yt,_t,wt,Ct,At,It,kt;return{c(){l=o("div"),a=o("div"),n=o("div"),s=o("div"),h=o("h4"),h.textContent=""+t.chart_label,p=r(),x=o("button"),x.textContent="×",v=r(),g=o("div"),b=o("div"),f=o("div"),y=o("div"),_=o("div"),w=o("label"),C=o("div"),C.textContent=""+t.width_label,A=o("div"),I=r(),k=o("input"),E=r(),T=o("div"),L=o("div"),M=o("label"),S=o("div"),S.textContent=""+t.height_label,N=o("div"),D=r(),P=o("input"),O=r(),X=o("div"),$=o("div"),z=o("label"),H=o("div"),H.textContent=""+t.type,B=o("div"),W=r(),F=o("select"),V=o("option"),V.textContent=""+t.column_label,j=o("option"),j.textContent=""+t.line_label,G=o("option"),G.textContent=""+t.histogram_label,R=r(),Y=o("div"),J=o("label"),J.textContent=""+t.chart_title,q=r(),U=o("input"),K=r(),Q=o("div"),Z=o("div"),ee=o("label"),ee.textContent=""+t.xaxis_title,te=r(),le=o("input"),ae=r(),ne=o("div"),se=o("label"),se.textContent=""+t.yaxis_title,oe=r(),re=o("input"),ie=r(),ce=o("div"),de=o("div"),me=o("label"),ue=o("div"),ue.textContent=""+t.default_answer,he=o("div"),pe=r(),xe=o("input"),ve=r(),ge=o("small"),ge.textContent=""+t.default_representation,be=r(),fe=o("div"),ye=o("label"),ye.textContent=""+t.set_color,_e=r(),we=o("select"),Ce=o("option"),Ce.textContent=""+t.default,Ae=o("option"),Ae.textContent=""+t.primary_color,Ie=o("option"),Ie.textContent=""+t.warning_color,ke=o("option"),ke.textContent=""+t.danger_color,Ee=r(),Te=o("div"),Le=o("div"),Me=o("label"),Me.textContent=""+t.xinterval_val,Se=r(),Ne=o("div"),De=o("label"),De.textContent=""+t.min,Pe=r(),Oe=o("input"),Xe=r(),$e=o("div"),ze=o("label"),ze.textContent=""+t.max,He=r(),Be=o("input"),We=r(),Fe=o("div"),Ve=o("label"),Ve.textContent=""+t.interval_txt,je=r(),Ge=o("input"),Re=r(),Ye=o("div"),Je=o("label"),Je.textContent=""+t.yinterval_val,qe=r(),Ue=o("div"),Ke=o("label"),Ke.textContent=""+t.min,Qe=r(),Ze=o("input"),et=r(),tt=o("div"),lt=o("label"),lt.textContent=""+t.max,at=r(),nt=o("input"),st=r(),ot=o("div"),rt=o("label"),rt.textContent=""+t.interval_txt,it=r(),ct=o("input"),dt=r(),mt=o("div"),ut=o("div"),ht=o("label"),pt=o("div"),pt.textContent=""+t.snap_to,xt=o("div"),vt=r(),gt=o("input"),bt=r(),ft=o("input"),yt=r(),_t=o("div"),wt=o("button"),wt.textContent=""+t.reset,Ct=r(),At=o("button"),At.textContent=""+t.ok_btn,It=r(),kt=o("button"),kt.textContent=""+t.cancel,i(h,"class","modal-title"),i(x,"type","button"),i(x,"class","close"),i(x,"data-bs-dismiss","modal"),i(s,"class","modal-header"),i(C,"class","mendatory_label float-left"),i(A,"class","mendatory_field"),i(w,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(w,"for","chart-width"),i(k,"type","text"),i(k,"class","num validate form-control form-control-md"),i(k,"id","chart-width"),i(k,"name","width"),i(k,"placeholder","Width of chart"),i(k,"defaultvalue","500"),i(k,"data-dwidth","550"),i(_,"class","form-group"),i(y,"class","col-sm-6 col-12 px-1"),i(S,"class","mendatory_label float-left"),i(N,"class","mendatory_field"),i(M,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(M,"for","chart-height"),i(P,"type","text"),i(P,"class","num validate form-control form-control-md"),i(P,"id","chart-height"),i(P,"name","height"),i(P,"placeholder","Height of chart"),i(P,"defaultvalue","500"),i(P,"data-dheight","500"),i(L,"class","form-group"),i(T,"class","col-sm-6 col-12 px-1"),i(f,"class","row mx-0"),i(H,"class","mendatory_label float-left"),i(B,"class","mendatory_field"),i(z,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(z,"for","chart-type"),V.__value="column",V.value=V.__value,j.__value="line",j.value=j.__value,G.__value="histogram",G.value=G.__value,i(F,"class","form-select"),i(F,"id","chart-type"),i(F,"name","type"),i($,"class","form-group col-sm-6 col-12 px-1"),i(J,"class","control-label font-weight-normal mb-0"),i(J,"for","chart_title"),i(U,"type","text"),i(U,"class","form-control form-control-md"),i(U,"id","chart_title"),i(U,"name","title"),i(U,"placeholder","Enter Chart Title"),i(Y,"class","form-group col-sm-6 col-12 px-1"),i(X,"class","row mx-0"),i(ee,"class","control-label font-weight-normal mb-0"),i(ee,"for","xlabel"),i(le,"type","text"),i(le,"class","form-control form-control-md"),i(le,"id","xlabel"),i(le,"name","xlabel"),i(le,"placeholder","Enter Text"),i(le,"data-dxtitle","Set Frequency"),i(Z,"class","form-group col-sm-6 col-12 px-1"),i(se,"class","control-label font-weight-normal mb-0"),i(se,"for","ylabel"),i(re,"type","text"),i(re,"class","form-control form-control-md"),i(re,"id","ylabel"),i(re,"name","ylabel"),i(re,"placeholder","Enter Text"),i(re,"data-dytitle",""),i(ne,"class","form-group col-sm-6 col-12 px-1"),i(Q,"class","row mx-0"),i(ue,"class","mendatory_label float-left"),i(he,"class","mendatory_field"),i(me,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(me,"for","defaultans"),i(xe,"type","text"),i(xe,"class","validate form-control form-control-md"),i(xe,"id","defaultans"),i(xe,"name","defaultans"),i(xe,"placeholder","Enter answer"),i(xe,"data-dans","2,3,3"),xe.readOnly="readonly",i(xe,"aria-describedby","defaultAnsHelpBlock"),i(ge,"id","defaultAnsHelpBlock"),i(ge,"class","text-danger font-weight-bold"),i(de,"class","form-group col-sm-6 col-12 px-1"),i(ye,"class","control-label font-weight-normal mb-0"),i(ye,"for","color"),Ce.__value="#7cb5ec",Ce.value=Ce.__value,Ce.selected="selected",Ae.__value="#c5d0fa",Ae.value=Ae.__value,Ie.__value="#ffa354",Ie.value=Ie.__value,ke.__value="#f5785d",ke.value=ke.__value,i(we,"class","form-select"),i(we,"id","color"),i(we,"name","color"),i(fe,"class","col-sm-6 col-12 form-group px-1"),i(ce,"class","row mx-0"),i(Me,"class","control-label font-weight-normal mb-0 w-100 px-1"),i(Me,"for","xaxisValues"),i(De,"class","control-label font-weight-normal mb-0"),i(De,"for","xmin"),i(Oe,"type","number"),i(Oe,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Oe,"id","xmin"),i(Oe,"name","xmin"),i(Oe,"placeholder","No."),i(Oe,"data-dxmin","1"),i(Ne,"class","col-md-4 px-1 d-inline-block float-start"),i(ze,"class","control-label font-weight-normal mb-0"),i(ze,"for","xmax"),i(Be,"type","number"),i(Be,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Be,"id","xmax"),i(Be,"name","xmax"),i(Be,"placeholder","No."),i(Be,"data-dxmax","3"),i($e,"class","col-md-4 px-1 d-inline-block float-start"),i(Ve,"class","control-label font-weight-normal mb-0"),i(Ve,"for","xinterval"),i(Ge,"type","number"),i(Ge,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Ge,"id","xinterval"),i(Ge,"name","xinterval"),i(Ge,"placeholder","No."),i(Ge,"data-dxinterval","1"),i(Fe,"class","col-md-4 px-1 d-inline-block float-start"),i(Le,"class","form-group col-sm-6 col-12 px-0 xmultiple"),i(Je,"class","control-label font-weight-normal mb-0 w-100 px-1"),i(Ke,"class","control-label font-weight-normal mb-0"),i(Ke,"for","ymin"),i(Ze,"type","number"),i(Ze,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Ze,"id","ymin"),i(Ze,"name","ymin"),i(Ze,"placeholder","No."),i(Ze,"data-dymin","1"),i(Ue,"class","col-md-4 px-1 d-inline-block float-start"),i(lt,"class","control-label font-weight-normal mb-0"),i(lt,"for","ymax"),i(nt,"type","number"),i(nt,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(nt,"id","ymax"),i(nt,"name","ymax"),i(nt,"placeholder","No."),i(nt,"data-dymax","50"),i(tt,"class","col-md-4 px-1 d-inline-block float-start"),i(rt,"class","control-label font-weight-normal mb-0"),i(rt,"for","yinterval"),i(ct,"type","number"),i(ct,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(ct,"id","yinterval"),i(ct,"name","yinterval"),i(ct,"placeholder","No."),i(ct,"data-dyinterval","5"),i(ot,"class","col-md-4 px-1 d-inline-block float-start"),i(Ye,"class","form-group col-sm-6 col-12 px-1 ymultiple details"),i(Te,"class","row mx-0 show_values"),i(pt,"class","mendatory_label float-left"),i(xt,"class","mendatory_field"),i(ht,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(ht,"for","snapto"),i(gt,"type","text"),i(gt,"class","num validate form-control form-control-md"),i(gt,"id","snapto"),i(gt,"name","snapto"),i(gt,"placeholder","Enter Number Only"),i(gt,"data-dsnapto","10"),i(ut,"class","col-sm-6 col-12 px-1 form-group"),i(mt,"class","row mx-0 show_values d-none"),i(ft,"type","hidden"),i(ft,"id","chart-anskey"),i(ft,"name","chart-anskey"),i(ft,"placeholder","anskey"),i(b,"class","plotchart h"),i(g,"class","modal-body modal_height overflow-y svelte-1v1w5xb"),i(wt,"type","button"),i(wt,"class","btn btn-secondary resetElement"),i(At,"type","button"),i(At,"class","btn btn-secondary addElement"),i(kt,"type","button"),i(kt,"class","btn btn-light"),i(kt,"data-bs-dismiss","modal"),i(_t,"class","modal-footer"),i(n,"class","modal-content"),i(a,"class","modal-dialog"),i(l,"id","authoring-modal"),i(l,"class","modal fade"),i(l,"tabindex","-1")},m(e,t){c(e,l,t),d(l,a),d(a,n),d(n,s),d(s,h),d(s,p),d(s,x),d(n,v),d(n,g),d(g,b),d(b,f),d(f,y),d(y,_),d(_,w),d(w,C),d(w,A),d(_,I),d(_,k),d(f,E),d(f,T),d(T,L),d(L,M),d(M,S),d(M,N),d(L,D),d(L,P),d(b,O),d(b,X),d(X,$),d($,z),d(z,H),d(z,B),d($,W),d($,F),d(F,V),d(F,j),d(F,G),d(X,R),d(X,Y),d(Y,J),d(Y,q),d(Y,U),d(b,K),d(b,Q),d(Q,Z),d(Z,ee),d(Z,te),d(Z,le),d(Q,ae),d(Q,ne),d(ne,se),d(ne,oe),d(ne,re),d(b,ie),d(b,ce),d(ce,de),d(de,me),d(me,ue),d(me,he),d(de,pe),d(de,xe),d(de,ve),d(de,ge),d(ce,be),d(ce,fe),d(fe,ye),d(fe,_e),d(fe,we),d(we,Ce),d(we,Ae),d(we,Ie),d(we,ke),d(b,Ee),d(b,Te),d(Te,Le),d(Le,Me),d(Le,Se),d(Le,Ne),d(Ne,De),d(Ne,Pe),d(Ne,Oe),d(Le,Xe),d(Le,$e),d($e,ze),d($e,He),d($e,Be),d(Le,We),d(Le,Fe),d(Fe,Ve),d(Fe,je),d(Fe,Ge),d(Te,Re),d(Te,Ye),d(Ye,Je),d(Ye,qe),d(Ye,Ue),d(Ue,Ke),d(Ue,Qe),d(Ue,Ze),d(Ye,et),d(Ye,tt),d(tt,lt),d(tt,at),d(tt,nt),d(Ye,st),d(Ye,ot),d(ot,rt),d(ot,it),d(ot,ct),d(b,dt),d(b,mt),d(mt,ut),d(ut,ht),d(ht,pt),d(ht,xt),d(ut,vt),d(ut,gt),d(b,bt),d(b,ft),d(n,yt),d(n,_t),d(_t,wt),d(_t,Ct),d(_t,At),d(_t,It),d(_t,kt)},p:m,i:m,o:m,d(e){e&&u(l)}}}T.isValid=!0,T.visible_class="",T.storage={store:function(e,t,l){if(!e)return this.state;if(!t)return e in this.state?this.state[e]:{};if(arguments.length<3){if(!(e in this.state))return;return this.state[e][t]}e in this.state||(this.state[e]={}),this.state[e][t]=l},remove:function(e){this.state[e]&&delete this.state[e]},state:{}},T.initChart=function(){E.select("#special_module_xml").value&&""!=E.select("#special_module_xml").value.trim()&&T.bind_data(E.parseHtml(E.select("#special_module_xml").value));let e=E.selectAll("#chartmain [type]");for(let t=0;t<e.length;t++){let l=T.setInAssoc(T.storage.store("#"+e[t].id,"attributes"));T.drawChart(l)}},T.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},T.checkAndRemove=function(){let e=0,t=E.selectAll("#authoring-modal .validate");for(let l=0;l<t.length;l+=1)(""==t[l].value||t[l].classList.contains("num")&&t[l].value<1||!T.isNumeric(t[l].value)&&t[l].classList.contains("num"))&&(e+=1);(parseInt(E.select("#xinterval").value)>=parseInt(E.select("#xmax").value)||parseInt(E.select("#yinterval").value)>=parseInt(E.select("#ymax").value)||parseInt(E.select("#xmin").value)>=parseInt(E.select("#xmax").value)||parseInt(E.select("#ymin").value)>=parseInt(E.select("#ymax").value))&&(e+=1),0==e&&E.selectAll(".showError","removeClass","showError")},T.setInAssoc=function(e){let t={};if(e)for(let l=0;l<e.length;l++)t[e[l].name]=e[l].value;return t},T.bind_data=function(e){let t='[type="'+e.getAttribute("type")+'"]',l=[];if(e){"SMXML"==e.nodeName&&(t="#chartmain");for(let t=0;t<e.attributes.length;t++)l[t]={name:e.attributes[t].name,value:e.attributes[t].value};if(void 0!==t&&T.storage.store("#"+E.select(t).id,"attributes",l),e.children.length>0)for(let t=0;t<e.children.length;t++)T.bind_data(e.children[t])}},T.resetModal=function(){T.isValid=!0,E.selectAll("input","removeAttr","style"),E.selectAll(".error","remove"),E.selectAll(".showError","removeClass","showError")},T.elemModal=function(e,t){T.resetModal(),E.selectAll("#authoring-modal .modal-body>.h","addClass","h"),E.listen("body","click",".addElement",(function(){1==T.isValid&&0==E.selectAll("#authoring-modal .showError").length?(E.getBS("#authoring-modal","Modal").hide(),"dotplot"==E.select("#authoring-modal #chart-type").value?E.selectAll("#chartmain .setData","addClass","h"):E.selectAll("#chartmain .setData","removeClass","h"),T.updateElem(e,t)):E.select("#authoring-modal .showError").nodeName&&(E.select("#authoring-modal .showError").focus(),T.validate(E.select("#authoring-modal .showError")))})),"plotchart"==e&&(E.select("#authoring-modal .title").innerText="Plot Chart",E.selectAll("#authoring-modal .plotchart","removeClass","h")),T.visible_class=e,E.getBS("#authoring-modal","Modal").show(),t&&T.setData(T.storage.store("#"+t,"attributes")),T.changeType(E.select("#authoring-modal #chart-type"))},T.updateElem=function(e,t){let l,a,n,s,o,r,i,c,d,m,u,h,p,x,v,g,b,f,y,_=E.find(E.select("#authoring-modal ."+T.visible_class),"select, textarea, input","all"),w=T.serialize(_),C="",A=[],I=[];for(let e=0;e<w.length;e++){let t=w[e];"width"==t.name&&(g=t.value),"height"==t.name&&(b=t.value),"type"==t.name&&(l=t.value),"color"==t.name&&(p=t.value),"snapto"==t.name&&(x=t.value),"title"==t.name&&(a=t.value),"xlabel"==t.name&&(n=t.value),"ylabel"==t.name&&(s=t.value),"xval"==t.name&&(C=t.value),"yval"==t.name&&(o=t.value),"xmin"==t.name&&(r=t.value),"xmax"==t.name&&(i=t.value,f=e),"xinterval"==t.name&&(c=t.value),"ymin"==t.name&&(d=t.value),"ymax"==t.name&&(m=t.value),"yinterval"==t.name&&(u=t.value),"defaultans"==t.name&&(h=t.value,y=e),A[t.name]=t.name}d=parseInt(d),u=parseInt(u);let k=parseInt(c);for(let e=parseInt(r);e<=parseInt(i);e+=k)I.push(e);if(I.length<=h.split(",").length&&(i=parseInt(i)+k,i%k!=0&&(i=i-i%k+k),w[f].value=i.toString()),w[y].value=(Math.ceil(d+u/5)+","+Math.ceil(d+u/4)+","+Math.ceil(d+u/3)).toString(),""==C){for(let e=parseInt(r);e<=parseInt(i);e+=parseInt(c))C=""==C?e:C+","+e;C="["+C+"]"}t&&"plotchart"==e&&(v='[id="'+t+'"]',E.setAttr(v,{type:l,class:l,color:p,title:a,xlabel:n,ylabel:s,xval:C,yval:o,xmin:r,xmax:i,xinterval:c,ymin:d,ymax:m,yinterval:u,snapTo:x,defaultans:h}),T.storage.store("#"+t,"attributes",w),T.storage.store("#chartmain","attributes",w),E.setCss("#chartmain",{width:g+"px",height:parseInt(b)+41+"px"}),E.selectAll('#chartmain [id^="ID"]',"css",{width:g+"px",height:b+"px"}),A=T.setInAssoc(T.storage.store("#chartmain","attributes")),A.id=t,A.xval=C,T.drawChart(A)),T.updateXML(v,w)},T.serialize=function(e){let t=[];for(let l=0;l<e.length;l++)"radio"==e[l].getAttribute("type")||"checkbox"==e[l].getAttribute("type")?e[l].checked&&(t[t.length]={name:e[l].name,value:1}):e[l].name&&!e[l].disabled&&(t[t.length]={name:e[l].name,value:e[l].value});return t},T.setData=function(e){for(let t=0;t<e.length;t+=1){E.select("#authoring-modal ."+T.visible_class+' [name="'+e[t].name+'"]').value=e[t].value}},T.updateXML=function(e,t){if(E.select("#special_module_xml").value&&""!=E.select("#special_module_xml").value.trim()){let l,a=E.parseHtml(E.select("#special_module_xml").value);if(l="#chartmain"==e?a:E.find(a,e),l.nodeName){for(let e=0;e<t.length;e+=1)""!==t[e].value?(l.setAttribute(t[e].name,t[e].value),"xaxis_radio"==t[e].name&&l.removeAttribute(t[e].name)):l.removeAttribute(t[e].name);l.setAttribute("correctans",T.resetCorrectans(l.getAttribute("type"),l.getAttribute("defaultans")))}E.select("#special_module_xml").value=T.formatXml(a.xml?a.xml:(new XMLSerializer).serializeToString(a))}},T.resetCorrectans=function(e,t){t=JSON.parse("["+t+"]");let l="|";for(let a=0;a<t.length;a++)l="dotplot"==e?l+a+","+10*t[a]+"|":l+a+","+t[a]+"|";return l},T.drawChart=function(e){let t,l=[],a=e.id,n=e.type,s=e.color,o="",r=.2,i=e.snapto,c=JSON.parse("["+e.defaultans+"]"),d=[],m=!1,u=!0;if(e.correctans&&e.correctans.length>0){e.correctans.split("|").map((function(e){(e=e.split(","))[1]&&d.push(+e[1])}))}let h=parseInt(e.xmin),p=parseInt(e.xmax),x=parseInt(e.xinterval);for(let e=h;e<=p;e+=x)l.push(e);if("histogram"==n&&(m=!0,n="column",r=0,s="transparent"),"dotplot"==n){u=!1,n="column",e.ylabel="",t=40;for(let e=0;e<c.length;e+=1)c[e]=10*parseInt(c[e])}let v=new Highcharts.Chart({chart:{renderTo:a,animation:!1,width:e.width-2,height:e.height-2,spacingRight:40,spacingLeft:t},credits:{enabled:!1},legend:{enabled:!1},title:{text:e.title},tooltip:{enabled:!0,valueDecimals:0,formatter:function(){return Math.round(this.y)}},xAxis:{categories:l,gridLineWidth:u,lineColor:"black",tickmarkPlacement:"on",min:0,title:{text:e.xlabel}},yAxis:[{gridLineWidth:u,lineWidth:u,lineColor:"black",allowDecimals:!1,floor:parseInt(e.ymin),max:parseInt(e.ymax),min:parseInt(e.ymin),tickInterval:parseInt(e.yinterval),minTickInterval:0,title:{text:e.ylabel},labels:{enabled:u}},{lineWidth:u,lineColor:"#C0C0C0",opposite:!0,title:{text:""}}],series:[{data:d.length>0?d:c,draggableY:!0,color:s,dragMinY:parseInt(e.ymin),snapgrid:i,dragMaxY:parseInt(e.ymax),type:n,minPointLength:1}],plotOptions:{series:{enableMouseTracking:!0,colorByPoint:m,cursor:"ns-resize",borderColor:s,pointPadding:0,groupPadding:r,borderWidth:u,point:{events:{drop:function(){o=this.x+","+Math.round(this.y),T.setAnswerkey(a,o)},drag:function(){if(!u){let e=100*i/this.y+"%";v.series[0].data[this.x].update({color:{pattern:" ",width:"100%",height:e,dotClr:s,cxWdth:cxWdth}})}}}}}}});if(!u){let e=E.select(".highcharts-series-group rect").getAttribute("width");for(let t=0;t<c.length;t++){let l=100*i/c[t]+"%";v.series[0].data[t].update({y:parseInt(c[t]),color:{pattern:" ",width:"100%",height:l,dotClr:s,cxWdth:e}})}}},T.updatePoint=function(e,t){if(E.select("#special_module_xml").value&&""!=E.select("#special_module_xml").value.trim()){let l;if(Highcharts.charts.forEach((function(e){e&&e.renderTo.id===t&&(l=e)})),"object"==typeof l){let a=E.parseHtml(E.select("#special_module_xml").value),n=E.find(a,"#"+t),s=l.series[0],o=n.getAttribute("correctans"),r=parseInt(n.getAttribute("xmax")),i=parseInt(n.getAttribute("xinterval")),c=[],d=parseInt(n.getAttribute("ymin")),m=parseInt(n.getAttribute("xmin")),u=parseInt(n.getAttribute("yinterval")),h=s.data.length;if("addPoint"==e){let e=d<u/10?u/10:d+u/10;e=Math.ceil(e),s.addPoint([h,e]),n.setAttribute("correctans",o+(s.data.length-1)+","+e+"|");for(let e=m;e<=r;e+=i)c.push(e.toString());if(h>=c.length){let e=(parseInt(c[c.length-1])+i).toString();c.push(e),n.setAttribute("xmax",e),l.xAxis[0].setCategories(c)}}if("removePoint"==e){let e,t,a;if(h>1){let r=l.series[0].data[h-1].id;l.series[0].data[h-1].remove(),r&&E.select('[point-id = "'+r+'"]',"remove"),e="|"+s.data.length,t=o.indexOf(e),t>=0&&(a=o.slice(t,o.indexOf("|",t+1)),o=o.replace(a,""),o=o.substring(1,o.length-1)),n.setAttribute("correctans","|"+o+"|")}else E.showmsg("Default Item(s) can not be Deleted",3e3)}E.select("#special_module_xml").value=T.formatXml(a.xml?a.xml:(new XMLSerializer).serializeToString(a))}}},T.setAnswerkey=function(e,t){if(E.select("#special_module_xml").value&&""!=E.select("#special_module_xml").value.trim()){let l,a=E.parseHtml(E.select("#special_module_xml").value),n=E.find(a,"#"+e),s=t.split(",")[0],o=n.getAttribute("correctans");if(s="|"+s+",",null==o||""==o)n.setAttribute("correctans","|"+t+"|");else if(l=o.indexOf(s),l>=0){let e=o.slice(l,o.indexOf("|",l+1));o=o.replace(e,"|"+t),t=o.substring(1,o.length-1)}else t=o.substring(1,o.length-1)+"|"+t;let r=T.storage.store("#"+e,"attributes");for(let e=0;e<r.length;e++)""!==r[e].value&&n.setAttribute(r[e].name,r[e].value);n.setAttribute("correctans","|"+t+"|"),E.select("#special_module_xml").value=T.formatXml(a.xml?a.xml:(new XMLSerializer).serializeToString(a))}},T.formatXml=function(e){let t="",l=(e=(e=e.replace(/\t/g,"")).replace(/(>)(<)(\/*)/g,"$1\n$2$3").replace(/ *(.*) +\n/g,"$1\n").replace(/(<.+>)(.+\n)/g,"$1\n$2")).split("\n"),a=0,n="other",s={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0};for(let e=0;e<l.length;e++){let o=l[e];if(""!=o){let e=Boolean(o.match(/<.+\/>/)),l=Boolean(o.match(/<\/.+>/)),r=Boolean(o.match(/<[^!].*>/)),i=e?"single":l?"closing":r?"opening":"other",c=n+"->"+i;n=i;let d="";a+=s[c];for(let e=0;e<a;e++)d+="\t";"opening->closing"==c?t=t.substr(0,t.length-1)+o+"\n":t+=d+o+"\n"}}return t},T.validate=function(e){e.nodeName&&(T.isValid=!1,E.selectAll(".error","remove"),E.setCss(e,{border:"1px solid red",background:"#FFCECE"}),""==e.value?(e.classList.add("showError"),E.insert(e.parentElement,'<span class="error text-danger">'+t.fill_field+"</span>","beforeend")):e.classList.contains("num")&&e.value<1?(e.classList.add("showError"),E.insert(e.parentElement,'<span class="error text-danger">'+t.value_gt_one+"</span>","beforeend")):parseInt(E.select("#xinterval").value)>=parseInt(E.select("#xmax").value)?(E.insert(E.select("#xmax").parentElement,'<span class="error text-danger">'+t.value_gt_interval+"</span>","beforeend"),E.select("#xmax").classList.add("showError")):parseInt(E.select("#yinterval").value)>=parseInt(E.select("#ymax").value)?(E.insert(E.select("#ymax").parentElement,'<span class="error text-danger">'+t.value_gt_interval+"</span>","beforeend"),E.select("#ymax").classList.add("showError")):parseInt(E.select("#xmin").value)>=parseInt(E.select("#xmax").value)?(E.insert(E.select("#xmax").parentElement,'<span class="error text-danger">'+t.value_gt_min+"</span>","beforeend"),E.select("#xmax").classList.add("showError")):parseInt(E.select("#ymin").value)>=parseInt(E.select("#ymax").value)?(E.insert(E.select("#ymax").parentElement,'<span class="error text-danger">'+t.value_gt_min+"</span>","beforeend"),E.select("#ymax").classList.add("showError")):!T.isNumeric(e.value)&&e.classList.contains("num")?(E.insert(e.parentElement,'<span class="error text-danger">'+t.enter_number+"</span>","beforeend"),e.classList.add("showError")):(T.isValid=!0,e.classList.remove("showError"),E.setCss(e,{border:"1px solid #ced4da",background:"none"}),E.selectAll(".showError").length>0&&T.checkAndRemove()))},T.changeType=function(e){if(e.nodeName){let t=e.value;E.select("#snapto").readOnly="dotplot"==t,E.select("#ylabel").readOnly="dotplot"==t,E.select("#ymin").readOnly="dotplot"==t,E.select("#ymax").readOnly="dotplot"==t,E.select("#yinterval").readOnly="dotplot"==t,"dotplot"==t?E.select("#color").readOnly=!1:(E.select(".details").style.display="block",E.select("#color").disabled="histogram"==t),E.select("#chart_title").value="histogram"==t?"Histogram":"line"==t?"Line Chart":"Bar Chart"}};class S extends l{constructor(e){super(),a(this,e,null,M,n,{},L)}}function N(e){let l,a,n,s,m,_,w,C,A,I,k,E,T,L,M,N,P,O,X,$,z,H,B,W,F,V,j,G,R,Y,J,q,U,K,Q,Z,ee,te,le,ae,ne,se,oe,re,ie,ce,de,me,ue;return n=new S({}),{c(){l=o("main"),a=o("div"),h(n.$$.fragment),s=r(),m=o("center"),_=o("div"),w=o("div"),C=o("div"),A=o("span"),I=o("button"),k=o("span"),L=r(),M=o("button"),N=o("span"),X=r(),$=o("span"),z=o("span"),H=o("button"),B=o("i"),V=r(),j=o("div"),re=r(),ie=o("textarea"),i(k,"class","icomoon-plus s2 updateGraph"),i(I,"aria-label",E=t.add),i(I,"class","setdata btn-light btn m-0 w-auto h-auto p-1 bg-white border ml"),i(I,"data-toggle","tooltip"),i(I,"data-original-title",T=t.add),i(N,"class","icomoon-new-24px-delete-1 s2 updateGraph"),i(M,"aria-label",P=t.delete),i(M,"tabindex","0"),i(M,"class","setdata btn btn-light m-0 w-auto h-auto p-1 bg-white border ml"),i(M,"data-toggle","tooltip"),i(M,"data-original-title",O=t.delete),i(B,"class","icomoon-24px-edit-1"),i(H,"aria-label",W=t.edit_chart),i(H,"tabindex","0"),i(H,"data-toggle","tooltip"),i(H,"data-original-title",F=t.edit_chart),i(H,"class","bg-white btn btn-light p-1"),i(z,"class","btn-group model-icon tools"),i(z,"data-t","plotchart"),i($,"id","option-toolbar"),i(C,"class","float-end mr-2 pt-1"),p(w,"height","41px"),i(w,"class","position-relative w-100"),i(j,"id","ID0"),i(j,"type",G=e[0].moduleType),i(j,"width",R=e[0].width),i(j,"height",Y=e[0].height),i(j,"class",J="drag-resize "+e[0].moduleType),i(j,"snapto",q=e[0].snapTo),i(j,"xval",U=e[0].xval),i(j,"yval",K=e[0].yval),i(j,"yinterval",Q=e[0].yinterval),i(j,"ymin",Z=e[0].ymin),i(j,"ymax",ee=e[0].ymax),i(j,"defaultans",te=e[0].defaultans),i(j,"correctans",le=e[0].correctans),i(j,"xlabel",ae=e[0].xlabel),i(j,"ylabel",ne=e[0].ylabel),i(j,"title",se=e[0].title),i(j,"color",oe=e[0].color),p(j,"width",D),p(j,"border","1px solid #ccc"),i(_,"id","chartmain"),p(_,"width",D),p(_,"background","#e8e8e8"),i(_,"class","position-relative"),i(ie,"class","h"),i(ie,"id","special_module_xml"),i(ie,"name","special_module_xml"),ie.value=ce=e[0].xml,i(ie,"data-xml",""),i(a,"id","authoringDiv")},m(t,o){c(t,l,o),d(l,a),x(n,a,null),d(a,s),d(a,m),d(m,_),d(_,w),d(w,C),d(C,A),d(A,I),d(I,k),d(A,L),d(A,M),d(M,N),d(C,X),d(C,$),d($,z),d(z,H),d(H,B),d(_,V),d(_,j),d(a,re),d(a,ie),de=!0,me||(ue=[v(I,"click",e[4]),v(M,"click",e[5]),v(z,"click",e[6])],me=!0)},p(e,[t]){(!de||1&t&&G!==(G=e[0].moduleType))&&i(j,"type",G),(!de||1&t&&R!==(R=e[0].width))&&i(j,"width",R),(!de||1&t&&Y!==(Y=e[0].height))&&i(j,"height",Y),(!de||1&t&&J!==(J="drag-resize "+e[0].moduleType))&&i(j,"class",J),(!de||1&t&&q!==(q=e[0].snapTo))&&i(j,"snapto",q),(!de||1&t&&U!==(U=e[0].xval))&&i(j,"xval",U),(!de||1&t&&K!==(K=e[0].yval))&&i(j,"yval",K),(!de||1&t&&Q!==(Q=e[0].yinterval))&&i(j,"yinterval",Q),(!de||1&t&&Z!==(Z=e[0].ymin))&&i(j,"ymin",Z),(!de||1&t&&ee!==(ee=e[0].ymax))&&i(j,"ymax",ee),(!de||1&t&&te!==(te=e[0].defaultans))&&i(j,"defaultans",te),(!de||1&t&&le!==(le=e[0].correctans))&&i(j,"correctans",le),(!de||1&t&&ae!==(ae=e[0].xlabel))&&i(j,"xlabel",ae),(!de||1&t&&ne!==(ne=e[0].ylabel))&&i(j,"ylabel",ne),(!de||1&t&&se!==(se=e[0].title))&&i(j,"title",se),(!de||1&t&&oe!==(oe=e[0].color))&&i(j,"color",oe),(!de||1&t&&ce!==(ce=e[0].xml))&&(ie.value=ce)},i(e){de||(g(n.$$.fragment,e),de=!0)},o(e){b(n.$$.fragment,e),de=!1},d(e){e&&u(l),f(n),me=!1,y(ue)}}}let D="600px";function P(e,t,l){let{xml:a}=t,{editorState:n}=t,{getChildXml:s}=t,o={},r=!1,i=k({xml:"",moduleType:"",height:"500",width:"550",xval:"",yinterval:"",ymax:"500",ymin:"",xmax:"",xmin:"",xinterval:"",defaultans:"",snapTo:"",correctans:"",xlabel:"",ylabel:"",title:"",color:""});i.subscribe((e=>{l(0,o=e)}));function c(){o.xml!=w.select("#special_module_xml").value&&s(w.select("#special_module_xml").value)}_((async()=>{o.xml!=a&&(w.select("#special_module_xml").value=a,function(e){let t=I(e);l=t,void i.update((e=>(e.color=l.smxml.chart._color,e.correctans=l.smxml.chart._correctans,e.defaultans=l.smxml.chart._defaultans,e.height=l.smxml.chart._height,e.snapTo=l.smxml.chart._snapTo,e.title=l.smxml.chart._title,e.width=l.smxml.chart._width,e.xinterval=l.smxml.chart._xinterval,e.xlabel=l.smxml.chart._xlabel,e.xmax=l.smxml.chart._xmax,e.xmin=l.smxml.chart._xmin,e.xval=l.smxml.chart._xval,e.yinterval=l.smxml.chart._yinterval,e.ylabel=l.smxml.chart._ylabel,e.ymax=l.smxml.chart._ymax,e.ymin=l.smxml.chart._ymin,e))),i.update((l=>(l.xml=e,l.moduleType=t.smxml.chart._type,l))),"dotplot"==t.smxml.chart._type&&w.selectAll("#chartmain .setdata","css",{display:"none"});var l}(a))})),C((async()=>{w.listen("body","keyup","#authoring-modal .validate",(function(e,t){t.preventDefault(),t.stopPropagation(),13==t.keyCode&&(0==w.selectAll("#authoring-modal .showError").length?w.select("#authoring-modal .addElement").click():w.select("#authoring-modal .showError").focus()),T.validate(e)})),w.listen("body","change","select",(function(e){T.changeType(e)})),w.listen("body","click",".resetElement",(function(){T.resetModal(),w.select("#chart-width").value=w.select("#chart-width").getAttribute("data-dwidth"),w.select("#chart-height").value=w.select("#chart-height").getAttribute("data-dheight"),w.select("#xlabel").value=w.select("#xlabel").getAttribute("data-dxtitle"),w.select("#ylabel").value=w.select("#ylabel").getAttribute("data-dylabel"),w.select("#defaultans").value=w.select("#defaultans").getAttribute("data-dans"),w.select("#color").selectedIndex=0,w.select("#snapto").value=w.select("#snapto").getAttribute("data-dsnapto"),w.select("#ymin").value=w.select("#ymin").getAttribute("data-dymin"),w.select("#ymax").value=w.select("#ymax").getAttribute("data-dymax"),w.select("#yinterval").value=w.select("#yinterval").getAttribute("data-dyinterval"),w.select("#xmin").value=w.select("#xmin").getAttribute("data-dxmin"),w.select("#xmax").value=w.select("#xmax").getAttribute("data-dxmax"),w.select("#xinterval").value=w.select("#xinterval").getAttribute("data-dxinterval"),"dotplot"==w.select("#chart-type").value?w.select("#authoring-modal #chart_title").value="Dot Plot":"column"==w.select("#chart-type").value?w.select("#authoring-modal #chart_title").value="Column":"line"==w.select("#chart-type").value?w.select("#authoring-modal #chart_title").value="Line":"histogram"==w.select("#chart-type").value&&(w.select("#authoring-modal #chart_title").value="Histogram")})),w.listen("body","mousemove","#chartmain",(function(){c()})),w.listen("body","click","#chartmain, .addElement, .updateGraph",(function(){c()})),w.listen("body","click","#xmlDone",(function(){T.initChart()}))})),A((async()=>{!r&&a&&(w.addScript("",itemUrl+"clsSMChart/lib/highchart_draggable.js",{callback(){T.initChart(),l(1,n.links=!0,n)}}),r=!0)}));return e.$$set=e=>{"xml"in e&&l(2,a=e.xml),"editorState"in e&&l(1,n=e.editorState),"getChildXml"in e&&l(3,s=e.getChildXml)},[o,n,a,s,()=>{T.updatePoint("addPoint","ID0")},()=>{T.updatePoint("removePoint","ID0")},()=>{T.elemModal("plotchart","ID0")}]}export default class extends l{constructor(e){super(),a(this,e,P,N,n,{xml:2,editorState:1,getChildXml:3})}}
//# sourceMappingURL=ChartAuthoring-a278339f.js.map
