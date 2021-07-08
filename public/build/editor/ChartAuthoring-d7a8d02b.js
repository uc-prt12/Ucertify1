import{G as e,a1 as t,S as l,i as a,s as n,e as s,j as o,b as r,f as i,h as c,r as d,o as m,c as u,g as h,m as p,l as x,t as v,a as g,d as b,y as f,E as y,A as _,p as w,a3 as C,X as A,w as I}from"./main-3116fa14.js";const k=new e;let E={};function T(e){let l,a,n,u,h,p,x,v,g,b,f,y,_,w,C,A,I,k,E,T,L,M,S,N,D,P,O,X,$,z,H,B,W,V,F,j,G,R,Y,J,q,U,K,Q,Z,ee,te,le,ae,ne,se,oe,re,ie,ce,de,me,ue,he,pe,xe,ve,ge,be,fe,ye,_e,we,Ce,Ae,Ie,ke,Ee,Te,Le,Me,Se,Ne,De,Pe,Oe,Xe,$e,ze,He,Be,We,Ve,Fe,je,Ge,Re,Ye,Je,qe,Ue,Ke,Qe,Ze,et,tt,lt,at,nt,st,ot,rt,it,ct,dt,mt,ut,ht,pt,xt,vt,gt,bt,ft,yt,_t,wt,Ct,At,It,kt;return{c(){l=s("div"),a=s("div"),n=s("div"),u=s("div"),h=s("h4"),h.textContent=""+t.chart_label,p=r(),x=s("button"),x.textContent="×",v=r(),g=s("div"),b=s("div"),f=s("div"),y=s("div"),_=s("div"),w=s("label"),C=s("div"),C.textContent=""+t.width_label,A=s("div"),I=r(),k=s("input"),E=r(),T=s("div"),L=s("div"),M=s("label"),S=s("div"),S.textContent=""+t.height_label,N=s("div"),D=r(),P=s("input"),O=r(),X=s("div"),$=s("div"),z=s("label"),H=s("div"),H.textContent=""+t.type,B=s("div"),W=r(),V=s("select"),F=s("option"),F.textContent=""+t.column_label,j=s("option"),j.textContent=""+t.line_label,G=s("option"),G.textContent=""+t.histogram_label,R=r(),Y=s("div"),J=s("label"),J.textContent=""+t.chart_title,q=r(),U=s("input"),K=r(),Q=s("div"),Z=s("div"),ee=s("label"),ee.textContent=""+t.xaxis_title,te=r(),le=s("input"),ae=r(),ne=s("div"),se=s("label"),se.textContent=""+t.yaxis_title,oe=r(),re=s("input"),ie=r(),ce=s("div"),de=s("div"),me=s("label"),ue=s("div"),ue.textContent=""+t.default_answer,he=s("div"),pe=r(),xe=s("input"),ve=r(),ge=s("small"),ge.textContent=""+t.default_representation,be=r(),fe=s("div"),ye=s("label"),ye.textContent=""+t.set_color,_e=r(),we=s("select"),Ce=s("option"),Ce.textContent=""+t.default,Ae=s("option"),Ae.textContent=""+t.primary_color,Ie=s("option"),Ie.textContent=""+t.warning_color,ke=s("option"),ke.textContent=""+t.danger_color,Ee=r(),Te=s("div"),Le=s("div"),Me=s("label"),Me.textContent=""+t.xinterval_val,Se=r(),Ne=s("div"),De=s("label"),De.textContent=""+t.min,Pe=r(),Oe=s("input"),Xe=r(),$e=s("div"),ze=s("label"),ze.textContent=""+t.max,He=r(),Be=s("input"),We=r(),Ve=s("div"),Fe=s("label"),Fe.textContent=""+t.interval_txt,je=r(),Ge=s("input"),Re=r(),Ye=s("div"),Je=s("label"),Je.textContent=""+t.yinterval_val,qe=r(),Ue=s("div"),Ke=s("label"),Ke.textContent=""+t.min,Qe=r(),Ze=s("input"),et=r(),tt=s("div"),lt=s("label"),lt.textContent=""+t.max,at=r(),nt=s("input"),st=r(),ot=s("div"),rt=s("label"),rt.textContent=""+t.interval_txt,it=r(),ct=s("input"),dt=r(),mt=s("div"),ut=s("div"),ht=s("label"),pt=s("div"),pt.textContent=""+t.snap_to,xt=s("div"),vt=r(),gt=s("input"),bt=r(),ft=s("input"),yt=r(),_t=s("div"),wt=s("button"),wt.textContent=""+t.reset,Ct=r(),At=s("button"),At.textContent=""+t.ok_btn,It=r(),kt=s("button"),kt.textContent=""+t.cancel,i(h,"class","modal-title"),i(x,"type","button"),i(x,"class","close"),i(x,"data-bs-dismiss","modal"),i(u,"class","modal-header"),i(C,"class","mendatory_label float-left"),i(A,"class","mendatory_field"),i(w,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(w,"for","chart-width"),i(k,"type","text"),i(k,"class","num validate form-control form-control-md"),i(k,"id","chart-width"),i(k,"name","width"),i(k,"placeholder","Width of chart"),i(k,"defaultvalue","500"),i(k,"data-dwidth","550"),i(_,"class","form-group"),i(y,"class","col-sm-6 col-12 px-1"),i(S,"class","mendatory_label float-left"),i(N,"class","mendatory_field"),i(M,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(M,"for","chart-height"),i(P,"type","text"),i(P,"class","num validate form-control form-control-md"),i(P,"id","chart-height"),i(P,"name","height"),i(P,"placeholder","Height of chart"),i(P,"defaultvalue","500"),i(P,"data-dheight","500"),i(L,"class","form-group"),i(T,"class","col-sm-6 col-12 px-1"),i(f,"class","row mx-0"),i(H,"class","mendatory_label float-left"),i(B,"class","mendatory_field"),i(z,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(z,"for","chart-type"),F.__value="column",F.value=F.__value,j.__value="line",j.value=j.__value,G.__value="histogram",G.value=G.__value,i(V,"class","form-select"),i(V,"id","chart-type"),i(V,"name","type"),i($,"class","form-group col-sm-6 col-12 px-1"),i(J,"class","control-label font-weight-normal mb-0"),i(J,"for","chart_title"),i(U,"type","text"),i(U,"class","form-control form-control-md"),i(U,"id","chart_title"),i(U,"name","title"),i(U,"placeholder","Enter Chart Title"),i(Y,"class","form-group col-sm-6 col-12 px-1"),i(X,"class","row mx-0"),i(ee,"class","control-label font-weight-normal mb-0"),i(ee,"for","xlabel"),i(le,"type","text"),i(le,"class","form-control form-control-md"),i(le,"id","xlabel"),i(le,"name","xlabel"),i(le,"placeholder","Enter Text"),i(le,"data-dxtitle","Set Frequency"),i(Z,"class","form-group col-sm-6 col-12 px-1"),i(se,"class","control-label font-weight-normal mb-0"),i(se,"for","ylabel"),i(re,"type","text"),i(re,"class","form-control form-control-md"),i(re,"id","ylabel"),i(re,"name","ylabel"),i(re,"placeholder","Enter Text"),i(re,"data-dytitle",""),i(ne,"class","form-group col-sm-6 col-12 px-1"),i(Q,"class","row mx-0"),i(ue,"class","mendatory_label float-left"),i(he,"class","mendatory_field"),i(me,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(me,"for","defaultans"),i(xe,"type","text"),i(xe,"class","validate form-control form-control-md"),i(xe,"id","defaultans"),i(xe,"name","defaultans"),i(xe,"placeholder","Enter answer"),i(xe,"data-dans","2,3,3"),xe.readOnly="readonly",i(xe,"aria-describedby","defaultAnsHelpBlock"),i(ge,"id","defaultAnsHelpBlock"),i(ge,"class","text-danger font-weight-bold"),i(de,"class","form-group col-sm-6 col-12 px-1"),i(ye,"class","control-label font-weight-normal mb-0"),i(ye,"for","color"),Ce.__value="#7cb5ec",Ce.value=Ce.__value,Ce.selected="selected",Ae.__value="#c5d0fa",Ae.value=Ae.__value,Ie.__value="#ffa354",Ie.value=Ie.__value,ke.__value="#f5785d",ke.value=ke.__value,i(we,"class","form-select"),i(we,"id","color"),i(we,"name","color"),i(fe,"class","col-sm-6 col-12 form-group px-1"),i(ce,"class","row mx-0"),i(Me,"class","control-label font-weight-normal mb-0 w-100 px-1"),i(Me,"for","xaxisValues"),i(De,"class","control-label font-weight-normal mb-0"),i(De,"for","xmin"),i(Oe,"type","number"),i(Oe,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Oe,"id","xmin"),i(Oe,"name","xmin"),i(Oe,"placeholder","No."),i(Oe,"data-dxmin","1"),i(Ne,"class","col-md-4 px-1 d-inline-block float-start"),i(ze,"class","control-label font-weight-normal mb-0"),i(ze,"for","xmax"),i(Be,"type","number"),i(Be,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Be,"id","xmax"),i(Be,"name","xmax"),i(Be,"placeholder","No."),i(Be,"data-dxmax","3"),i($e,"class","col-md-4 px-1 d-inline-block float-start"),i(Fe,"class","control-label font-weight-normal mb-0"),i(Fe,"for","xinterval"),i(Ge,"type","number"),i(Ge,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Ge,"id","xinterval"),i(Ge,"name","xinterval"),i(Ge,"placeholder","No."),i(Ge,"data-dxinterval","1"),i(Ve,"class","col-md-4 px-1 d-inline-block float-start"),i(Le,"class","form-group col-sm-6 col-12 px-0 xmultiple"),i(Je,"class","control-label font-weight-normal mb-0 w-100 px-1"),i(Ke,"class","control-label font-weight-normal mb-0"),i(Ke,"for","ymin"),i(Ze,"type","number"),i(Ze,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(Ze,"id","ymin"),i(Ze,"name","ymin"),i(Ze,"placeholder","No."),i(Ze,"data-dymin","1"),i(Ue,"class","col-md-4 px-1 d-inline-block float-start"),i(lt,"class","control-label font-weight-normal mb-0"),i(lt,"for","ymax"),i(nt,"type","number"),i(nt,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(nt,"id","ymax"),i(nt,"name","ymax"),i(nt,"placeholder","No."),i(nt,"data-dymax","50"),i(tt,"class","col-md-4 px-1 d-inline-block float-start"),i(rt,"class","control-label font-weight-normal mb-0"),i(rt,"for","yinterval"),i(ct,"type","number"),i(ct,"class","num validate form-control form-control-md svelte-1v1w5xb"),i(ct,"id","yinterval"),i(ct,"name","yinterval"),i(ct,"placeholder","No."),i(ct,"data-dyinterval","5"),i(ot,"class","col-md-4 px-1 d-inline-block float-start"),i(Ye,"class","form-group col-sm-6 col-12 px-1 ymultiple details"),i(Te,"class","row mx-0 show_values"),i(pt,"class","mendatory_label float-left"),i(xt,"class","mendatory_field"),i(ht,"class","control-label font-weight-normal mb-0 d-inline-flex"),i(ht,"for","snapto"),i(gt,"type","text"),i(gt,"class","num validate form-control form-control-md"),i(gt,"id","snapto"),i(gt,"name","snapto"),i(gt,"placeholder","Enter Number Only"),i(gt,"data-dsnapto","10"),i(ut,"class","col-sm-6 col-12 px-1 form-group"),i(mt,"class","row mx-0 show_values d-none"),i(ft,"type","hidden"),i(ft,"id","chart-anskey"),i(ft,"name","chart-anskey"),i(ft,"placeholder","anskey"),i(b,"class","plotchart h"),i(g,"class","modal-body modal_height overflow-y svelte-1v1w5xb"),i(wt,"type","button"),i(wt,"class","btn btn-secondary resetElement"),i(At,"type","button"),i(At,"class","btn btn-secondary addElement"),i(kt,"type","button"),i(kt,"class","btn btn-light"),i(kt,"data-bs-dismiss","modal"),i(_t,"class","modal-footer"),i(n,"class","modal-content"),i(a,"class","modal-dialog"),i(l,"id","authoring-modal"),i(l,"class","modal fade"),i(l,"tabindex","-1")},m(e,t){c(e,l,t),o(l,a),o(a,n),o(n,u),o(u,h),o(u,p),o(u,x),o(n,v),o(n,g),o(g,b),o(b,f),o(f,y),o(y,_),o(_,w),o(w,C),o(w,A),o(_,I),o(_,k),o(f,E),o(f,T),o(T,L),o(L,M),o(M,S),o(M,N),o(L,D),o(L,P),o(b,O),o(b,X),o(X,$),o($,z),o(z,H),o(z,B),o($,W),o($,V),o(V,F),o(V,j),o(V,G),o(X,R),o(X,Y),o(Y,J),o(Y,q),o(Y,U),o(b,K),o(b,Q),o(Q,Z),o(Z,ee),o(Z,te),o(Z,le),o(Q,ae),o(Q,ne),o(ne,se),o(ne,oe),o(ne,re),o(b,ie),o(b,ce),o(ce,de),o(de,me),o(me,ue),o(me,he),o(de,pe),o(de,xe),o(de,ve),o(de,ge),o(ce,be),o(ce,fe),o(fe,ye),o(fe,_e),o(fe,we),o(we,Ce),o(we,Ae),o(we,Ie),o(we,ke),o(b,Ee),o(b,Te),o(Te,Le),o(Le,Me),o(Le,Se),o(Le,Ne),o(Ne,De),o(Ne,Pe),o(Ne,Oe),o(Le,Xe),o(Le,$e),o($e,ze),o($e,He),o($e,Be),o(Le,We),o(Le,Ve),o(Ve,Fe),o(Ve,je),o(Ve,Ge),o(Te,Re),o(Te,Ye),o(Ye,Je),o(Ye,qe),o(Ye,Ue),o(Ue,Ke),o(Ue,Qe),o(Ue,Ze),o(Ye,et),o(Ye,tt),o(tt,lt),o(tt,at),o(tt,nt),o(Ye,st),o(Ye,ot),o(ot,rt),o(ot,it),o(ot,ct),o(b,dt),o(b,mt),o(mt,ut),o(ut,ht),o(ht,pt),o(ht,xt),o(ut,vt),o(ut,gt),o(b,bt),o(b,ft),o(n,yt),o(n,_t),o(_t,wt),o(_t,Ct),o(_t,At),o(_t,It),o(_t,kt)},p:d,i:d,o:d,d(e){e&&m(l)}}}E.isValid=!0,E.visible_class="",E.storage={store:function(e,t,l){if(!e)return this.state;if(!t)return e in this.state?this.state[e]:{};if(arguments.length<3){if(!(e in this.state))return;return this.state[e][t]}e in this.state||(this.state[e]={}),this.state[e][t]=l},remove:function(e){this.state[e]&&delete this.state[e]},state:{}},E.initChart=function(){k.select("#special_module_xml").value&&""!=k.select("#special_module_xml").value.trim()&&E.bind_data(k.parseHtml(k.select("#special_module_xml").value));let e=k.selectAll("#chartmain [type]");for(let t=0;t<e.length;t++){let l=E.setInAssoc(E.storage.store("#"+e[t].id,"attributes"));E.drawChart(l)}},E.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},E.checkAndRemove=function(){let e=0,t=k.selectAll("#authoring-modal .validate");for(let l=0;l<t.length;l+=1)(""==t[l].value||t[l].classList.contains("num")&&t[l].value<1||!E.isNumeric(t[l].value)&&t[l].classList.contains("num"))&&(e+=1);(parseInt(k.select("#xinterval").value)>=parseInt(k.select("#xmax").value)||parseInt(k.select("#yinterval").value)>=parseInt(k.select("#ymax").value)||parseInt(k.select("#xmin").value)>=parseInt(k.select("#xmax").value)||parseInt(k.select("#ymin").value)>=parseInt(k.select("#ymax").value))&&(e+=1),0==e&&k.selectAll(".showError","removeClass","showError")},E.setInAssoc=function(e){let t={};if(e)for(let l=0;l<e.length;l++)t[e[l].name]=e[l].value;return t},E.bind_data=function(e){let t='[type="'+e.getAttribute("type")+'"]',l=[];if(e){"SMXML"==e.nodeName&&(t="#chartmain");for(let t=0;t<e.attributes.length;t++)l[t]={name:e.attributes[t].name,value:e.attributes[t].value};if(void 0!==t&&E.storage.store("#"+k.select(t).id,"attributes",l),e.children.length>0)for(let t=0;t<e.children.length;t++)E.bind_data(e.children[t])}},E.resetModal=function(){E.isValid=!0,k.selectAll("input","removeAttr","style"),k.selectAll(".error","remove"),k.selectAll(".showError","removeClass","showError")},E.elemModal=function(e,t){E.resetModal(),k.selectAll("#authoring-modal .modal-body>.h","addClass","h"),k.listen("body","click",".addElement",(function(){1==E.isValid&&0==k.selectAll("#authoring-modal .showError").length?(k.getBS("#authoring-modal","Modal").hide(),"dotplot"==k.select("#authoring-modal #chart-type").value?k.selectAll("#chartmain .setData","addClass","h"):k.selectAll("#chartmain .setData","removeClass","h"),E.updateElem(e,t)):k.select("#authoring-modal .showError").nodeName&&(k.select("#authoring-modal .showError").focus(),E.validate(k.select("#authoring-modal .showError")))})),"plotchart"==e&&(k.select("#authoring-modal .title").innerText="Plot Chart",k.selectAll("#authoring-modal .plotchart","removeClass","h")),E.visible_class=e,k.getBS("#authoring-modal","Modal").show(),t&&E.setData(E.storage.store("#"+t,"attributes")),E.changeType(k.select("#authoring-modal #chart-type"))},E.updateElem=function(e,t){let l,a,n,s,o,r,i,c,d,m,u,h,p,x,v,g,b,f,y,_=k.find(k.select("#authoring-modal ."+E.visible_class),"select, textarea, input","all"),w=E.serialize(_),C="",A=[],I=[];for(let e=0;e<w.length;e++){let t=w[e];"width"==t.name&&(g=t.value),"height"==t.name&&(b=t.value),"type"==t.name&&(l=t.value),"color"==t.name&&(p=t.value),"snapto"==t.name&&(x=t.value),"title"==t.name&&(a=t.value),"xlabel"==t.name&&(n=t.value),"ylabel"==t.name&&(s=t.value),"xval"==t.name&&(C=t.value),"yval"==t.name&&(o=t.value),"xmin"==t.name&&(r=t.value),"xmax"==t.name&&(i=t.value,f=e),"xinterval"==t.name&&(c=t.value),"ymin"==t.name&&(d=t.value),"ymax"==t.name&&(m=t.value),"yinterval"==t.name&&(u=t.value),"defaultans"==t.name&&(h=t.value,y=e),A[t.name]=t.name}d=parseInt(d),u=parseInt(u);let T=parseInt(c);for(let e=parseInt(r);e<=parseInt(i);e+=T)I.push(e);if(I.length<=h.split(",").length&&(i=parseInt(i)+T,i%T!=0&&(i=i-i%T+T),w[f].value=i.toString()),w[y].value=(Math.ceil(d+u/5)+","+Math.ceil(d+u/4)+","+Math.ceil(d+u/3)).toString(),""==C){for(let e=parseInt(r);e<=parseInt(i);e+=parseInt(c))C=""==C?e:C+","+e;C="["+C+"]"}t&&"plotchart"==e&&(v='[id="'+t+'"]',k.setAttr(v,{type:l,class:l,color:p,title:a,xlabel:n,ylabel:s,xval:C,yval:o,xmin:r,xmax:i,xinterval:c,ymin:d,ymax:m,yinterval:u,snapTo:x,defaultans:h}),E.storage.store("#"+t,"attributes",w),E.storage.store("#chartmain","attributes",w),k.setCss("#chartmain",{width:g+"px",height:parseInt(b)+41+"px"}),k.selectAll('#chartmain [id^="ID"]',"css",{width:g+"px",height:b+"px"}),A=E.setInAssoc(E.storage.store("#chartmain","attributes")),A.id=t,A.xval=C,E.drawChart(A)),E.updateXML(v,w)},E.serialize=function(e){let t=[];for(let l=0;l<e.length;l++)"radio"==e[l].getAttribute("type")||"checkbox"==e[l].getAttribute("type")?e[l].checked&&(t[t.length]={name:e[l].name,value:1}):e[l].name&&!e[l].disabled&&(t[t.length]={name:e[l].name,value:e[l].value});return t},E.setData=function(e){for(let t=0;t<e.length;t+=1){k.select("#authoring-modal ."+E.visible_class+' [name="'+e[t].name+'"]').value=e[t].value}},E.updateXML=function(e,t){if(k.select("#special_module_xml").value&&""!=k.select("#special_module_xml").value.trim()){let l,a=k.parseHtml(k.select("#special_module_xml").value);if(l="#chartmain"==e?a:k.find(a,e),l.nodeName){for(let e=0;e<t.length;e+=1)""!==t[e].value?(l.setAttribute(t[e].name,t[e].value),"xaxis_radio"==t[e].name&&l.removeAttribute(t[e].name)):l.removeAttribute(t[e].name);l.setAttribute("correctans",E.resetCorrectans(l.getAttribute("type"),l.getAttribute("defaultans")))}k.select("#special_module_xml").value=E.formatXml(a.xml?a.xml:(new XMLSerializer).serializeToString(a))}},E.resetCorrectans=function(e,t){t=JSON.parse("["+t+"]");let l="|";for(let a=0;a<t.length;a++)l="dotplot"==e?l+a+","+10*t[a]+"|":l+a+","+t[a]+"|";return l},E.drawChart=function(e){let t,l=[],a=e.id,n=e.type,s=e.color,o="",r=.2,i=e.snapto,c=JSON.parse("["+e.defaultans+"]"),d=[],m=!1,u=!0;if(e.correctans&&e.correctans.length>0){e.correctans.split("|").map((function(e){(e=e.split(","))[1]&&d.push(+e[1])}))}let h=parseInt(e.xmin),p=parseInt(e.xmax),x=parseInt(e.xinterval);for(let e=h;e<=p;e+=x)l.push(e);if("histogram"==n&&(m=!0,n="column",r=0,s="transparent"),"dotplot"==n){u=!1,n="column",e.ylabel="",t=40;for(let e=0;e<c.length;e+=1)c[e]=10*parseInt(c[e])}let v=new Highcharts.Chart({chart:{renderTo:a,animation:!1,width:e.width-2,height:e.height-2,spacingRight:40,spacingLeft:t},credits:{enabled:!1},legend:{enabled:!1},title:{text:e.title},tooltip:{enabled:!0,valueDecimals:0,formatter:function(){return Math.round(this.y)}},xAxis:{categories:l,gridLineWidth:u,lineColor:"black",tickmarkPlacement:"on",min:0,title:{text:e.xlabel}},yAxis:[{gridLineWidth:u,lineWidth:u,lineColor:"black",allowDecimals:!1,floor:parseInt(e.ymin),max:parseInt(e.ymax),min:parseInt(e.ymin),tickInterval:parseInt(e.yinterval),minTickInterval:0,title:{text:e.ylabel},labels:{enabled:u}},{lineWidth:u,lineColor:"#C0C0C0",opposite:!0,title:{text:""}}],series:[{data:d.length>0?d:c,draggableY:!0,color:s,dragMinY:parseInt(e.ymin),snapgrid:i,dragMaxY:parseInt(e.ymax),type:n,minPointLength:1}],plotOptions:{series:{enableMouseTracking:!0,colorByPoint:m,cursor:"ns-resize",borderColor:s,pointPadding:0,groupPadding:r,borderWidth:u,point:{events:{drop:function(){o=this.x+","+Math.round(this.y),E.setAnswerkey(a,o)},drag:function(){if(!u){let e=100*i/this.y+"%";v.series[0].data[this.x].update({color:{pattern:" ",width:"100%",height:e,dotClr:s,cxWdth:cxWdth}})}}}}}}});if(!u){let e=k.select(".highcharts-series-group rect").getAttribute("width");for(let t=0;t<c.length;t++){let l=100*i/c[t]+"%";v.series[0].data[t].update({y:parseInt(c[t]),color:{pattern:" ",width:"100%",height:l,dotClr:s,cxWdth:e}})}}},E.updatePoint=function(e,t){if(k.select("#special_module_xml").value&&""!=k.select("#special_module_xml").value.trim()){let l;if(Highcharts.charts.forEach((function(e){e&&e.renderTo.id===t&&(l=e)})),"object"==typeof l){let a=k.parseHtml(k.select("#special_module_xml").value),n=k.find(a,"#"+t),s=l.series[0],o=n.getAttribute("correctans"),r=parseInt(n.getAttribute("xmax")),i=parseInt(n.getAttribute("xinterval")),c=[],d=parseInt(n.getAttribute("ymin")),m=parseInt(n.getAttribute("xmin")),u=parseInt(n.getAttribute("yinterval")),h=s.data.length;if("addPoint"==e){let e=d<u/10?u/10:d+u/10;e=Math.ceil(e),s.addPoint([h,e]),n.setAttribute("correctans",o+(s.data.length-1)+","+e+"|");for(let e=m;e<=r;e+=i)c.push(e.toString());if(h>=c.length){let e=(parseInt(c[c.length-1])+i).toString();c.push(e),n.setAttribute("xmax",e),l.xAxis[0].setCategories(c)}}if("removePoint"==e){let e,t,a;if(h>1){let r=l.series[0].data[h-1].id;l.series[0].data[h-1].remove(),r&&k.select('[point-id = "'+r+'"]',"remove"),e="|"+s.data.length,t=o.indexOf(e),t>=0&&(a=o.slice(t,o.indexOf("|",t+1)),o=o.replace(a,""),o=o.substring(1,o.length-1)),n.setAttribute("correctans","|"+o+"|")}else k.showmsg("Default Item(s) can not be Deleted",3e3)}k.select("#special_module_xml").value=E.formatXml(a.xml?a.xml:(new XMLSerializer).serializeToString(a))}}},E.setAnswerkey=function(e,t){if(k.select("#special_module_xml").value&&""!=k.select("#special_module_xml").value.trim()){let l,a=k.parseHtml(k.select("#special_module_xml").value),n=k.find(a,"#"+e),s=t.split(",")[0],o=n.getAttribute("correctans");if(s="|"+s+",",null==o||""==o)n.setAttribute("correctans","|"+t+"|");else if(l=o.indexOf(s),l>=0){let e=o.slice(l,o.indexOf("|",l+1));o=o.replace(e,"|"+t),t=o.substring(1,o.length-1)}else t=o.substring(1,o.length-1)+"|"+t;let r=E.storage.store("#"+e,"attributes");for(let e=0;e<r.length;e++)""!==r[e].value&&n.setAttribute(r[e].name,r[e].value);n.setAttribute("correctans","|"+t+"|"),k.select("#special_module_xml").value=E.formatXml(a.xml?a.xml:(new XMLSerializer).serializeToString(a))}},E.formatXml=function(e){let t="",l=(e=(e=e.replace(/\t/g,"")).replace(/(>)(<)(\/*)/g,"$1\n$2$3").replace(/ *(.*) +\n/g,"$1\n").replace(/(<.+>)(.+\n)/g,"$1\n$2")).split("\n"),a=0,n="other",s={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0};for(let e=0;e<l.length;e++){let o=l[e];if(""!=o){let e=Boolean(o.match(/<.+\/>/)),l=Boolean(o.match(/<\/.+>/)),r=Boolean(o.match(/<[^!].*>/)),i=e?"single":l?"closing":r?"opening":"other",c=n+"->"+i;n=i;let d="";a+=s[c];for(let e=0;e<a;e++)d+="\t";"opening->closing"==c?t=t.substr(0,t.length-1)+o+"\n":t+=d+o+"\n"}}return t},E.validate=function(e){e.nodeName&&(E.isValid=!1,k.selectAll(".error","remove"),k.setCss(e,{border:"1px solid red",background:"#FFCECE"}),""==e.value?(e.classList.add("showError"),k.insert(e.parentElement,'<span class="error text-danger">'+t.fill_field+"</span>","beforeend")):e.classList.contains("num")&&e.value<1?(e.classList.add("showError"),k.insert(e.parentElement,'<span class="error text-danger">'+t.value_gt_one+"</span>","beforeend")):parseInt(k.select("#xinterval").value)>=parseInt(k.select("#xmax").value)?(k.insert(k.select("#xmax").parentElement,'<span class="error text-danger">'+t.value_gt_interval+"</span>","beforeend"),k.select("#xmax").classList.add("showError")):parseInt(k.select("#yinterval").value)>=parseInt(k.select("#ymax").value)?(k.insert(k.select("#ymax").parentElement,'<span class="error text-danger">'+t.value_gt_interval+"</span>","beforeend"),k.select("#ymax").classList.add("showError")):parseInt(k.select("#xmin").value)>=parseInt(k.select("#xmax").value)?(k.insert(k.select("#xmax").parentElement,'<span class="error text-danger">'+t.value_gt_min+"</span>","beforeend"),k.select("#xmax").classList.add("showError")):parseInt(k.select("#ymin").value)>=parseInt(k.select("#ymax").value)?(k.insert(k.select("#ymax").parentElement,'<span class="error text-danger">'+t.value_gt_min+"</span>","beforeend"),k.select("#ymax").classList.add("showError")):!E.isNumeric(e.value)&&e.classList.contains("num")?(k.insert(e.parentElement,'<span class="error text-danger">'+t.enter_number+"</span>","beforeend"),e.classList.add("showError")):(E.isValid=!0,e.classList.remove("showError"),k.setCss(e,{border:"1px solid #ced4da",background:"none"}),k.selectAll(".showError").length>0&&E.checkAndRemove()))},E.changeType=function(e){if(e.nodeName){let t=e.value;k.select("#snapto").readOnly="dotplot"==t,k.select("#ylabel").readOnly="dotplot"==t,k.select("#ymin").readOnly="dotplot"==t,k.select("#ymax").readOnly="dotplot"==t,k.select("#yinterval").readOnly="dotplot"==t,"dotplot"==t?k.select("#color").readOnly=!1:(k.select(".details").style.display="block",k.select("#color").disabled="histogram"==t),k.select("#chart_title").value="histogram"==t?"Histogram":"line"==t?"Line Chart":"Bar Chart"}};class L extends l{constructor(e){var t;super(),document.getElementById("svelte-1v1w5xb-style")||((t=s("style")).id="svelte-1v1w5xb-style",t.textContent="input[type=number].svelte-1v1w5xb::-webkit-inner-spin-button,input[type=number].svelte-1v1w5xb::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none}.modal_height.svelte-1v1w5xb{max-height:350px}",o(document.head,t)),a(this,e,null,T,n,{})}}function M(e){let l,a,n,d,y,_,w,C,A,I,k,E,T,M,N,D,P,O,X,$,z,H,B,W,V,F,j,G,R,Y,J,q,U,K,Q,Z,ee,te,le,ae,ne,se,oe,re,ie,ce,de,me,ue;return n=new L({}),{c(){l=s("main"),a=s("div"),u(n.$$.fragment),d=r(),y=s("center"),_=s("div"),w=s("div"),C=s("div"),A=s("span"),I=s("button"),k=s("span"),M=r(),N=s("button"),D=s("span"),X=r(),$=s("span"),z=s("span"),H=s("button"),B=s("i"),F=r(),j=s("div"),re=r(),ie=s("textarea"),i(k,"class","icomoon-plus s2 updateGraph"),i(I,"aria-label",E=t.add),i(I,"class","setdata btn-light btn m-0 w-auto h-auto p-1 bg-white border ml"),i(I,"data-toggle","tooltip"),i(I,"data-original-title",T=t.add),i(D,"class","icomoon-new-24px-delete-1 s2 updateGraph"),i(N,"aria-label",P=t.delete),i(N,"tabindex","0"),i(N,"class","setdata btn btn-light m-0 w-auto h-auto p-1 bg-white border ml"),i(N,"data-toggle","tooltip"),i(N,"data-original-title",O=t.delete),i(B,"class","icomoon-24px-edit-1"),i(H,"aria-label",W=t.edit_chart),i(H,"tabindex","0"),i(H,"data-toggle","tooltip"),i(H,"data-original-title",V=t.edit_chart),i(H,"class","bg-white btn btn-light p-1"),i(z,"class","btn-group model-icon tools"),i(z,"data-t","plotchart"),i($,"id","option-toolbar"),i(C,"class","float-end mr-2 pt-1"),h(w,"height","41px"),i(w,"class","position-relative w-100"),i(j,"id","ID0"),i(j,"type",G=e[0].moduleType),i(j,"width",R=e[0].width),i(j,"height",Y=e[0].height),i(j,"class",J="drag-resize "+e[0].moduleType),i(j,"snapto",q=e[0].snapTo),i(j,"xval",U=e[0].xval),i(j,"yval",K=e[0].yval),i(j,"yinterval",Q=e[0].yinterval),i(j,"ymin",Z=e[0].ymin),i(j,"ymax",ee=e[0].ymax),i(j,"defaultans",te=e[0].defaultans),i(j,"correctans",le=e[0].correctans),i(j,"xlabel",ae=e[0].xlabel),i(j,"ylabel",ne=e[0].ylabel),i(j,"title",se=e[0].title),i(j,"color",oe=e[0].color),h(j,"width",S),h(j,"border","1px solid #ccc"),i(_,"id","chartmain"),h(_,"width",S),h(_,"background","#e8e8e8"),i(_,"class","position-relative"),i(ie,"class","h"),i(ie,"id","special_module_xml"),i(ie,"name","special_module_xml"),ie.value=ce=e[0].xml,i(ie,"data-xml",""),i(a,"id","authoringDiv")},m(t,s){c(t,l,s),o(l,a),p(n,a,null),o(a,d),o(a,y),o(y,_),o(_,w),o(w,C),o(C,A),o(A,I),o(I,k),o(A,M),o(A,N),o(N,D),o(C,X),o(C,$),o($,z),o(z,H),o(H,B),o(_,F),o(_,j),o(a,re),o(a,ie),de=!0,me||(ue=[x(I,"click",e[4]),x(N,"click",e[5]),x(z,"click",e[6])],me=!0)},p(e,[t]){(!de||1&t&&G!==(G=e[0].moduleType))&&i(j,"type",G),(!de||1&t&&R!==(R=e[0].width))&&i(j,"width",R),(!de||1&t&&Y!==(Y=e[0].height))&&i(j,"height",Y),(!de||1&t&&J!==(J="drag-resize "+e[0].moduleType))&&i(j,"class",J),(!de||1&t&&q!==(q=e[0].snapTo))&&i(j,"snapto",q),(!de||1&t&&U!==(U=e[0].xval))&&i(j,"xval",U),(!de||1&t&&K!==(K=e[0].yval))&&i(j,"yval",K),(!de||1&t&&Q!==(Q=e[0].yinterval))&&i(j,"yinterval",Q),(!de||1&t&&Z!==(Z=e[0].ymin))&&i(j,"ymin",Z),(!de||1&t&&ee!==(ee=e[0].ymax))&&i(j,"ymax",ee),(!de||1&t&&te!==(te=e[0].defaultans))&&i(j,"defaultans",te),(!de||1&t&&le!==(le=e[0].correctans))&&i(j,"correctans",le),(!de||1&t&&ae!==(ae=e[0].xlabel))&&i(j,"xlabel",ae),(!de||1&t&&ne!==(ne=e[0].ylabel))&&i(j,"ylabel",ne),(!de||1&t&&se!==(se=e[0].title))&&i(j,"title",se),(!de||1&t&&oe!==(oe=e[0].color))&&i(j,"color",oe),(!de||1&t&&ce!==(ce=e[0].xml))&&(ie.value=ce)},i(e){de||(v(n.$$.fragment,e),de=!0)},o(e){g(n.$$.fragment,e),de=!1},d(e){e&&m(l),b(n),me=!1,f(ue)}}}let S="600px";function N(e,t,l){let{xml:a}=t,{editorState:n}=t,{getChildXml:s}=t,o={},r=!1,i=I({xml:"",moduleType:"",height:"500",width:"550",xval:"",yinterval:"",ymax:"500",ymin:"",xmax:"",xmin:"",xinterval:"",defaultans:"",snapTo:"",correctans:"",xlabel:"",ylabel:"",title:"",color:""});i.subscribe((e=>{l(0,o=e)}));function c(){o.xml!=_.select("#special_module_xml").value&&s(_.select("#special_module_xml").value)}y((async()=>{o.xml!=a&&(_.select("#special_module_xml").value=a,function(e){let t=A(e);l=t,void i.update((e=>(e.color=l.smxml.chart._color,e.correctans=l.smxml.chart._correctans,e.defaultans=l.smxml.chart._defaultans,e.height=l.smxml.chart._height,e.snapTo=l.smxml.chart._snapTo,e.title=l.smxml.chart._title,e.width=l.smxml.chart._width,e.xinterval=l.smxml.chart._xinterval,e.xlabel=l.smxml.chart._xlabel,e.xmax=l.smxml.chart._xmax,e.xmin=l.smxml.chart._xmin,e.xval=l.smxml.chart._xval,e.yinterval=l.smxml.chart._yinterval,e.ylabel=l.smxml.chart._ylabel,e.ymax=l.smxml.chart._ymax,e.ymin=l.smxml.chart._ymin,e))),i.update((l=>(l.xml=e,l.moduleType=t.smxml.chart._type,l))),"dotplot"==t.smxml.chart._type&&_.selectAll("#chartmain .setdata","css",{display:"none"});var l}(a))})),w((async()=>{_.listen("body","keyup","#authoring-modal .validate",(function(e,t){t.preventDefault(),t.stopPropagation(),13==t.keyCode&&(0==_.selectAll("#authoring-modal .showError").length?_.select("#authoring-modal .addElement").click():_.select("#authoring-modal .showError").focus()),E.validate(e)})),_.listen("body","change","select",(function(e){E.changeType(e)})),_.listen("body","click",".resetElement",(function(){E.resetModal(),_.select("#chart-width").value=_.select("#chart-width").getAttribute("data-dwidth"),_.select("#chart-height").value=_.select("#chart-height").getAttribute("data-dheight"),_.select("#xlabel").value=_.select("#xlabel").getAttribute("data-dxtitle"),_.select("#ylabel").value=_.select("#ylabel").getAttribute("data-dylabel"),_.select("#defaultans").value=_.select("#defaultans").getAttribute("data-dans"),_.select("#color").selectedIndex=0,_.select("#snapto").value=_.select("#snapto").getAttribute("data-dsnapto"),_.select("#ymin").value=_.select("#ymin").getAttribute("data-dymin"),_.select("#ymax").value=_.select("#ymax").getAttribute("data-dymax"),_.select("#yinterval").value=_.select("#yinterval").getAttribute("data-dyinterval"),_.select("#xmin").value=_.select("#xmin").getAttribute("data-dxmin"),_.select("#xmax").value=_.select("#xmax").getAttribute("data-dxmax"),_.select("#xinterval").value=_.select("#xinterval").getAttribute("data-dxinterval"),"dotplot"==_.select("#chart-type").value?_.select("#authoring-modal #chart_title").value="Dot Plot":"column"==_.select("#chart-type").value?_.select("#authoring-modal #chart_title").value="Column":"line"==_.select("#chart-type").value?_.select("#authoring-modal #chart_title").value="Line":"histogram"==_.select("#chart-type").value&&(_.select("#authoring-modal #chart_title").value="Histogram")})),_.listen("body","mousemove","#chartmain",(function(){c()})),_.listen("body","click","#chartmain, .addElement, .updateGraph",(function(){c()})),_.listen("body","click","#xmlDone",(function(){E.initChart()}))})),C((async()=>{!r&&a&&(_.addScript("",itemUrl+"clsSMChart/lib/highchart_draggable.js",{callback(){E.initChart(),l(1,n.links=!0,n)}}),r=!0)}));return e.$$set=e=>{"xml"in e&&l(2,a=e.xml),"editorState"in e&&l(1,n=e.editorState),"getChildXml"in e&&l(3,s=e.getChildXml)},[o,n,a,s,()=>{E.updatePoint("addPoint","ID0")},()=>{E.updatePoint("removePoint","ID0")},()=>{E.elemModal("plotchart","ID0")}]}export default class extends l{constructor(e){super(),a(this,e,N,M,n,{xml:2,editorState:1,getChildXml:3})}}
//# sourceMappingURL=ChartAuthoring-d7a8d02b.js.map
