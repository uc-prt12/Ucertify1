import{G as e,S as t,i,s as a,H as s,I as l,K as n,L as o,e as r,b as c,C as d,c as h,f as m,g,h as u,j as p,m as v,l as f,M as x,t as b,a as w,o as y,d as _,y as $,p as k,A as I,X as C,N as S,w as A,O as T,P as D,u as N,Q as B,R as H,T as M,r as L,J as E}from"./main-5a2bbeeb.js";function z(e,t){return!0===isNaN(Number(e))?this.x=0:this.x=e,!0===isNaN(Number(t))?this.y=0:this.y=t,{X:this.x,Y:this.y}}const X=new e;class W{constructor(e){this.prevPoint=void 0,this.defaultOptions={target:"",penSize:1,width:e.width,height:e.height,cssClass:"",onClick:e=>{},onMove:e=>{},onPaint:e=>{},onRelease:e=>{}},this.penWidth=2,this.drawing=!1,this.cap="round",this.ID="dooScribCanvas"+Math.floor(100*Math.random()+1),this.drawingSurface="",e&&(this.Settings={...this.defaultOptions,...e}),!0===isNaN(this.Settings.height)&&(this.Settings.height=100),!0===isNaN(this.Settings.width)&&(this.Settings.width=100),this.init()}init(){let e=this.Settings.target;e?("hptmain0"==e.getAttribute("id")&&X.empty(e),X.insert(e,`<canvas id='${this.ID}' tabindex='0' class='relative ${this.Settings.cssClass}' type='${this.Settings.type}' correctans='${this.Settings.correctans}' userans=''  height='${this.Settings.height}' width='${this.Settings.width}'></canvas>`,"beforeend"),this.penSize(this.Settings.penSize),this.drawingSurface=document.getElementById(this.ID).getContext("2d"),this.drawingSurface.lineWidth=this.penSize(),this.drawingSurface.lineCap=this.cap,!1===this.hasTouch()?(document.getElementById(this.ID).addEventListener("mousedown",this.clickDown.bind(this),!0),document.getElementById(this.ID).addEventListener("mousemove",this.moved.bind(this),!0),document.getElementById(this.ID).addEventListener("mouseup",this.clickUp.bind(this),!0)):(document.getElementById(this.ID).addEventListener("touchstart",this.clickDown.bind(this),!0),document.getElementById(this.ID).addEventListener("touchmove",this.moved.bind(this),!0),document.getElementById(this.ID).addEventListener("touchend",this.clickUp.bind(this),!0))):console.error("Target not defined")}normalizeTouch(e){if(!0===this.hasTouch()){let t=window.scrollY;["touchstart","touchmove"].indexOf(e.type)>-1&&(e.clientX=e.targetTouches[0].pageX,e.clientY=e.targetTouches[0].pageY-t),["touchend"].indexOf(e.type)>-1&&(e.clientX=e.changedTouches[0].pageX,e.clientY=e.changedTouches[0].pageY-t)}return e}clickDown(e){if(!0===this.isDrawing())return;e||(e=window.event),!0===this.hasTouch()&&(e.preventDefault(),e=this.normalizeTouch(e));let t=X.offset(this.Settings.target),i=window.scrollY,a=new z(e.clientX-t.left,e.clientY-(t.top-i));return this.prevPoint=a,this.drawing=!0,this.Settings.onClick(a),!1}moved(e){e||(e=window.event),!0===this.hasTouch()&&(e.preventDefault(),e=this.normalizeTouch(e));var t=X.offset(this.Settings.target),i=window.scrollY,a=new z(e.clientX-t.left,e.clientY-(t.top-i));return!0===this.isDrawing()?(this.drawLine(this.prevPoint.X,this.prevPoint.Y,a.X,a.Y),this.prevPoint=a,this.Settings.onPaint(a)):this.Settings.onMove(a),!1}clickUp(e){if(!1===this.isDrawing())return;!0===this.hasTouch()&&(e.preventDefault(),e=this.normalizeTouch(e));let t=X.offset(this.Settings.target),i=window.scrollY,a=new z(e.clientX-t.left,e.clientY-(t.top-i));return this.Settings.onRelease(a),this.drawing=!1,!1}hasTouch(){return"ontouchstart"in window}penSize(e){return void 0!==e&&!1===isNaN(Number(e))&&(this.penWidth=e),this.penWidth}isDrawing(){if(this.Settings.editable)return this.drawing}lineCap(e){if(void 0!==e)switch(e){case"butt":case"round":case"square":this.cap=e}return this.cap}lineColor(e){if(void 0!==e){let t=X.parseHtml("<div id='stub' style='backgroundColor:white'></div>");t.style.backgroundColor=e;let i=t.style.backgroundColor;void 0!==i&&""!==i&&(window.color=e)}return window.color}context(){return this.drawingSurface}clearSurface(){let e=X.find(document,"canvas").getAttribute("width").replace("px",""),t=X.find(document,"canvas").getAttribute("height").replace("px","");this.drawingSurface.clearRect(0,0,e,t)}drawLine(e,t,i,a){void 0!==e&&void 0!==t&&void 0!==i&&void 0!==a&&!1===isNaN(Number(e))&&!1===isNaN(Number(t))&&!1===isNaN(Number(i))&&!1===isNaN(Number(a))&&(this.drawingSurface.lineCap=this.cap,this.drawingSurface.strokeStyle=window.color,this.drawingSurface.lineWidth=this.penWidth,this.drawingSurface.beginPath(),this.drawingSurface.moveTo(e,t),this.drawingSurface.lineTo(i,a),this.drawingSurface.stroke())}}const O=new e;class Y{constructor(){this.count=0,this.drawstr=""}updateElem(e,t,i,a,s){let l,n,o,r,c,d=O.serializeArray(O.find("#authoring-modal",".h","visible"),"input"),h="",m=[];if(void 0!==a){if(d=JSON.parse(O.select("#"+i).dataset.attributes),!d){let e=[];e[0]={name:"id",value:i},e[1]={name:"type",value:"hotspot"},e[2]={name:"top",value:parseInt(O.select("#"+i).style.top.split("px")[0])},e[3]={name:"left",value:parseInt(O.select("#"+i).style.left.split("px")[0])},e[4]={name:"width",value:parseInt(O.select("#"+i).style.width.split("px")[0])},e[5]={name:"height",value:parseInt(O.select("#"+i).style.height.split("px")[0])},d=e}d.forEach(((e,i,s)=>{switch(e.name){case"width":e.value=a.clientWidth;break;case"height":e.value=a.clientHeight;break;case"top":e.value=+e.value+t.offsetY-a.clientHeight/2,e.value<0&&(e.value=0);break;case"left":e.value=+e.value+t.offsetX-a.clientWidth/2,e.value<0&&(e.value=0)}s[i]=e})),console.log("after",d,t)}switch(d.forEach(((e,t)=>{"width"==e.name&&(l=e.value),"height"==e.name&&(n=e.value),"top"==e.name&&(o=e.value),"left"==e.name&&(r=e.value),"bgimg"==e.name&&""!=e.value.trim()&&(h=O.select("#hptmain").getAttribute("path")+e.value.trim()),m[e.name]=e.name})),e){case"div":c=`[id="${i}"]`,O.select(`[id="${i}"]`,"css",{width:l+"px",height:n+"px",top:o+"px",left:r+"px"}).dataset.attributes=JSON.stringify(d);break;case"base":c="hptmain",O.select("#hptmain").dataset.attributes=JSON.stringify(d)}if("base"==e){let e="hptmain"==i?"#hptmain":"#hptdraw";if(""!=h){let t=new Image;t.src=h;let a=t.src.substr(t.src.lastIndexOf(".")+1);setTimeout((()=>{t.width=t.width>0?t.width:"600",t.height=t.height>0?t.height:"250",O.select("#option-toolbar","css",{width:t.width}),"gif"!=a&&(O.selectAll(e+">img").length>0?(O.select(e,"css",{width:t.width,height:t.height}),O.selectAll(e+">img","attr",{src:h})):"hptdraw"==i?(O.find(e,"canvas",{action:"attr",actionData:{width:t.width,height:t.height}}),O.selectAll(O.siblings(e),"css",{width:t.width}),O.select(e,"css",{width:t.width,height:t.height,backgroundImage:"url("+h+")"})):O.insert(O.select(e,"css",{width:t.width,height:t.height}),'<img src="'+h+'" />',"beforebegin"))}),100)}else O.selectAll(e+">img").length>0&&(O.select(e,"css",{width:"600px",height:"250px"}),O.select(e+">img","remove"))}return"div"==e?this.updateXML(e,c,d,o,r,s):"gif"!=img_ext&&"undefined"!=typeof img?this.updateXML(e,c,d,img.width,img.height,s):void O.alert("Please Do not use Gif Image!!!")}drawOnCanvasAuth(e,t,i){let a=document.getElementById(e).getContext("2d"),s=Object.keys(t).length;if(""!=t)for(let e=1;e<=s;e++)for(let i=0;i<=t[e].x.length;i++)a.beginPath(),a.lineWidth="4",a.strokeStyle=window.color,a.moveTo(t[e].x[i],t[e].y[i]),a.lineTo(t[e].x[i+1],t[e].y[i+1]),a.stroke()}updateXML(e,t,i,a,s,l){let n,o=O.parseHtml(l);if(n="hptmain"==t?o:O.find(o,t),a>0&&s>0&&(n.setAttribute("width",a),n.setAttribute("height",s)),i)for(let e of i)""!==e.value?(n.setAttribute(e.name,e.value),"type"==e.name&&n.setAttribute(e.value,"hotspot")):n.removeAttribute(e.name);return formatXml(o.outerHTML)}}function q(e){let t,i=d.cancel+"";return{c(){t=N(i)},m(e,i){u(e,t,i)},p:L,d(e){e&&y(t)}}}function P(e){let t,i=d.submit+"";return{c(){t=N(i)},m(e,i){u(e,t,i)},p:L,d(e){e&&y(t)}}}function j(e){let t,i,a,s,l;return i=new D({props:{unelevated:!0,outlined:!0,class:"text-capitalize",color:"#ccc",$$slots:{default:[q]},$$scope:{ctx:e}}}),i.$on("click",e[9]),s=new D({props:{class:"bg-primary text-white",style:"text-transform: none",key:d.submit,$$slots:{default:[P]},$$scope:{ctx:e}}}),s.$on("click",e[8].bind(this,"img")),{c(){t=r("div"),h(i.$$.fragment),a=c(),h(s.$$.fragment),m(t,"slot","footer"),m(t,"class","svelteFooter")},m(e,n){u(e,t,n),v(i,t,null),p(t,a),v(s,t,null),l=!0},p(e,t){const a={};262144&t[1]&&(a.$$scope={dirty:t,ctx:e}),i.$set(a);const l={};262144&t[1]&&(l.$$scope={dirty:t,ctx:e}),s.$set(l)},i(e){l||(b(i.$$.fragment,e),b(s.$$.fragment,e),l=!0)},o(e){w(i.$$.fragment,e),w(s.$$.fragment,e),l=!1},d(e){e&&y(t),_(i),_(s)}}}function J(e){let t,i,a,s,l,n,o,d,h,v,x,b,w,_,k,I,C,S,A,T,D,E,z,X,W,O,Y,q,P,j,J,R,U,K,G,F,Q,V,Z,ee,te,ie,ae,se,le,ne,oe,re,ce,de,he,me,ge,ue,pe,ve,fe;return{c(){t=r("h4"),t.innerHTML='<div class="d-flex justify-content-between"><div>Image</div></div>',i=c(),a=r("div"),s=r("div"),l=r("input"),o=c(),d=r("button"),d.textContent="Upload image",h=c(),v=r("div"),x=r("img"),w=c(),_=r("span"),k=r("label"),I=N("Image Alt"),S=c(),A=r("input"),D=c(),E=r("div"),z=r("div"),X=r("span"),X.innerHTML='<label for="hotBorder" class="my-1 text-dark">Border width</label>',W=c(),O=r("select"),Y=r("option"),Y.textContent="None",q=r("option"),q.textContent="1",P=r("option"),P.textContent="2",j=r("option"),j.textContent="3",J=r("option"),J.textContent="4",R=r("option"),R.textContent="5",K=c(),G=r("div"),F=r("span"),F.innerHTML='<label for="hotBorderColor" class="my-1 text-dark">Border color</label>',Q=c(),V=r("select"),Z=r("option"),Z.textContent="None",ee=r("option"),ee.textContent="Black",te=r("option"),te.textContent="Grey",ae=c(),se=r("br"),le=c(),ne=r("div"),oe=r("span"),oe.innerHTML='<label for="setLineColor" class="mt-2 text-dark">Draw line color</label>',re=c(),ce=r("select"),de=r("option"),de.textContent="Please Select",he=r("option"),he.textContent="Red",me=r("option"),me.textContent="Black",ge=r("option"),ge.textContent="Blue",pe=c(),m(t,"class","mt-1 font21 mb-4"),m(l,"type","text"),m(l,"id","backgroundImage"),l.disabled="true",l.value=n=e[7].bgImg,m(l,"margin","normal"),g(l,"pointer-events","none"),g(l,"width","76%"),m(l,"class","form-control mr-2"),m(d,"id","upload_media"),m(d,"type","button"),d.value="Upload Media",m(d,"margin","normal"),m(d,"class","btn btn-outline-primary position-relative"),m(s,"class","d-flex"),x.src!==(b=e[7].image_url)&&m(x,"src",b),m(x,"alt","background"),m(x,"class","img img-responsive span7"),m(v,"class","mx-auto width8 p-2 border mt-2"),m(k,"for","imgAlt"),m(k,"class",C=4==e[7].valueMultiple?"my-1 text-dark":"hidden"),m(A,"type","text"),m(A,"id","imgAlt"),m(A,"placeholder","Alt text"),m(A,"class",T=4==e[7].valueMultiple?" form-control mt-0":"hidden form-control mt-0"),m(A,"margin","normal"),g(A,"width","-webkit-fill-available"),Y.__value="0",Y.value=Y.__value,q.__value="1",q.value=q.__value,P.__value="2",P.value=P.__value,j.__value="3",j.value=j.__value,J.__value="4",J.value=J.__value,R.__value="5",R.value=R.__value,m(O,"id","hotBorder"),m(O,"class","form-select"),void 0===e[7].hotBorder&&B((()=>e[17].call(O))),m(z,"class",U=4==e[7].valueMultiple?"d-inline-block pr-2 mt-2 w-sm":"hidden"),Z.__value="white",Z.value=Z.__value,ee.__value="black",ee.value=ee.__value,te.__value="grey",te.value=te.__value,m(V,"id","hotBorderColor"),m(V,"class","form-select"),void 0===e[7].hotBorderColor&&B((()=>e[18].call(V))),m(G,"class",ie=4==e[7].valueMultiple?"d-inline-block mt-2 w-sm":"hidden"),m(E,"class","d-flex"),de.__value="Please Select",de.value=de.__value,he.__value="red",he.value=he.__value,me.__value="black",me.value=me.__value,ge.__value="blue",ge.value=ge.__value,m(ce,"id","setLineColor"),m(ce,"class","form-select"),void 0===e[7].lineColor&&B((()=>e[19].call(ce))),m(ne,"class",ue=3==e[7].valueMultiple?"":"hidden"),g(a,"overflow-y","auto"),g(a,"padding-right","20px")},m(n,r){u(n,t,r),u(n,i,r),u(n,a,r),p(a,s),p(s,l),p(s,o),p(s,d),p(a,h),p(a,v),p(v,x),p(a,w),p(a,_),p(_,k),p(k,I),p(a,S),p(a,A),H(A,e[7].alt),p(a,D),p(a,E),p(E,z),p(z,X),p(z,W),p(z,O),p(O,Y),p(O,q),p(O,P),p(O,j),p(O,J),p(O,R),M(O,e[7].hotBorder),p(E,K),p(E,G),p(G,F),p(G,Q),p(G,V),p(V,Z),p(V,ee),p(V,te),M(V,e[7].hotBorderColor),p(a,ae),p(a,se),p(a,le),p(a,ne),p(ne,oe),p(ne,re),p(ne,ce),p(ce,de),p(ce,he),p(ce,me),p(ce,ge),M(ce,e[7].lineColor),u(n,pe,r),ve||(fe=[f(A,"input",e[16]),f(O,"change",e[17]),f(V,"change",e[18]),f(ce,"change",e[19]),f(ce,"blur",e[13].bind(this))],ve=!0)},p(e,t){l.value=n,m(x,"src",b),m(k,"class",C),m(A,"class",T),128&t[0]&&A.value!==e[7].alt&&H(A,e[7].alt),128&t[0]&&M(O,e[7].hotBorder),m(z,"class",U),128&t[0]&&M(V,e[7].hotBorderColor),m(G,"class",ie),128&t[0]&&M(ce,e[7].lineColor),m(ne,"class",ue)},i:L,o:L,d(e){e&&y(t),e&&y(i),e&&y(a),e&&y(pe),ve=!1,$(fe)}}}function R(e){let t,i=d.cancel+"";return{c(){t=N(i)},m(e,i){u(e,t,i)},p:L,d(e){e&&y(t)}}}function U(e){let t,i=d.done+"";return{c(){t=N(i)},m(e,i){u(e,t,i)},p:L,d(e){e&&y(t)}}}function K(e){let t,i,a,s,l;return i=new D({props:{unelevated:!0,outlined:!0,class:"text-capitalize",color:"#ccc",$$slots:{default:[R]},$$scope:{ctx:e}}}),i.$on("click",e[9]),s=new D({props:{class:"bg-primary text-white",style:"text-transform: none",key:d.done,$$slots:{default:[U]},$$scope:{ctx:e}}}),s.$on("click",e[8].bind(this,"drag")),{c(){t=r("div"),h(i.$$.fragment),a=c(),h(s.$$.fragment),m(t,"slot","footer"),m(t,"class","svelteFooter")},m(e,n){u(e,t,n),v(i,t,null),p(t,a),v(s,t,null),l=!0},p(e,t){const a={};262144&t[1]&&(a.$$scope={dirty:t,ctx:e}),i.$set(a);const l={};262144&t[1]&&(l.$$scope={dirty:t,ctx:e}),s.$set(l)},i(e){l||(b(i.$$.fragment,e),b(s.$$.fragment,e),l=!0)},o(e){w(i.$$.fragment,e),w(s.$$.fragment,e),l=!1},d(e){e&&y(t),_(i),_(s)}}}function G(e){let t,i,a,s;return{c(){t=r("h4"),t.innerHTML='<div class="d-flex justify-content-between"><div>Hotspot</div></div>',i=c(),a=r("div"),a.innerHTML='<div class="row"><div class="col-6 pr-1"><span><label for="dragHeight" class="my-1 text-dark">Height</label></span> \n                        <input type="number" id="dragHeight" placeholder="Height" defaultvalue=" " class="form-control"/></div> \n                    <div class="col-6 pl-1"><span><label for="dragWidth" class="my-1 text-dark">Width</label></span> \n                        <input type="number" id="dragWidth" placeholder="Width" defaultvalue=" " class="form-control"/></div></div> \n                <div class="row mt-2"><div class="col-6 pr-1"><span><label for="dragTop" class="my-1 text-dark">Top</label></span> \n                        <input type="number" id="dragTop" placeholder="Top" defaultvalue=" " class="form-control"/></div> \n                    <div class="col-6 pl-1"><span><label for="dragLeft" class="my-1 text-dark">Left</label></span> \n                        <input type="number" id="dragLeft" placeholder="Left" defaultvalue=" " class="form-control"/></div></div>',s=c(),m(t,"class","mt-1 font21 mb-4"),g(a,"overflow-y","auto"),g(a,"padding-right","20px")},m(e,l){u(e,t,l),u(e,i,l),u(e,a,l),u(e,s,l)},p:L,i:L,o:L,d(e){e&&y(t),e&&y(i),e&&y(a),e&&y(s)}}}function F(e){let t;return{c(){t=N("Close")},m(e,i){u(e,t,i)},d(e){e&&y(t)}}}function Q(e){let t,i,a;return i=new D({props:{color:"#ff0",$$slots:{default:[F]},$$scope:{ctx:e}}}),i.$on("click",e[22]),{c(){t=r("span"),h(i.$$.fragment),m(t,"slot","action")},m(e,s){u(e,t,s),v(i,t,null),a=!0},p(e,t){const a={};262144&t[1]&&(a.$$scope={dirty:t,ctx:e}),i.$set(a)},i(e){a||(b(i.$$.fragment,e),a=!0)},o(e){w(i.$$.fragment,e),a=!1},d(e){e&&y(t),_(i)}}}function V(e){let t,i;return{c(){t=N(te),i=c()},m(e,a){u(e,t,a),u(e,i,a)},p:L,i:L,o:L,d(e){e&&y(t),e&&y(i)}}}function Z(e){let t,i,a,k,I,C,S,A,T,D,N,B,H,M,L,E,z,X,W,O,Y,q,P,R,U,F,Z,te,ie,ae,se,le,ne,oe,re,ce,de,he,me,ge,ue,pe,ve;function fe(t){e[20](t)}let xe={class:"remove_right_margin",width:"600",style:"background: #fff; border-radius: 5px;",$$slots:{default:[J],footer:[j]},$$scope:{ctx:e}};function be(t){e[21](t)}void 0!==e[7].openImg&&(xe.visible=e[7].openImg),ne=new s({props:xe}),l.push((()=>n(ne,"visible",fe)));let we={class:"remove_right_margin",width:"600",style:"background: #fff; border-radius: 5px;",$$slots:{default:[G],footer:[K]},$$scope:{ctx:e}};function ye(t){e[23](t)}void 0!==e[7].openDrag&&(we.visible=e[7].openDrag),ce=new s({props:we}),l.push((()=>n(ce,"visible",be)));let _e={bg:"#f44336",bottom:!0,timeout:10,style:"position:fixed; bottom:50px",$$slots:{default:[V],action:[Q]},$$scope:{ctx:e}};return void 0!==e[7].snackback&&(_e.visible=e[7].snackback),me=new o({props:_e}),l.push((()=>n(me,"visible",ye))),{c(){t=r("div"),i=r("center"),a=r("div"),I=c(),C=r("div"),S=r("div"),A=r("div"),T=r("span"),D=c(),N=r("span"),N.textContent=""+d.reset,B=c(),H=r("div"),M=r("div"),L=r("button"),L.innerHTML='<i class="icomoon-24px-edit-1"></i>',E=c(),z=r("div"),X=r("div"),W=r("button"),W.innerHTML='<i class="icomoon-24px-edit-1"></i>',O=c(),Y=r("img"),R=c(),U=r("div"),F=r("div"),Z=r("button"),Z.innerHTML='<i class="icomoon-24px-edit-1"></i>',ie=c(),ae=r("textarea"),le=c(),h(ne.$$.fragment),re=c(),h(ce.$$.fragment),he=c(),h(me.$$.fragment),m(a,"class","tinymce-editor-response"),m(a,"id","text0"),m(a,"type",k=e[6][0]),g(a,"width",e[1]+", \n                    height: "+e[0]+", \n                    border: 1px solid #ccc"),g(a,"outline","none"),g(a,"padding","10px"),g(a,"textAlign","left"),g(a,"display","none"),g(a,"overflowY","scroll\n                "),m(a,"contenteditable","true"),m(T,"class","icomoon-new-24px-reset-1 s3"),g(T,"vertical-align","text-top"),m(N,"class","position-relative bottom1"),m(A,"id","resetAuth"),m(A,"class","reset btn btn-outline-primary btn-sm height27 mt-sm2 mr-sm2 float-right"),g(A,"width","90px"),g(S,"width",e[1]),g(S,"height","32px"),g(S,"background","#d9e7fd"),g(S,"border-top","2px solid #96bbf6\n                "),m(L,"name","change_image"),m(L,"type","button"),m(L,"class","btn btn-light px-1 pt-sm1 pb-sm1 mt"),m(M,"class","btn-group tools"),m(H,"id","hptdraw"),g(H,"width",e[1]),g(H,"height",e[0]),g(H,"background-image","url('"+(ee+e[7].bgImg)+"')"),g(H,"background-repeat","no-repeat"),g(H,"position","relative"),g(H,"border","1px solid #e0e0e0"),m(C,"class","drawImage d-none"),m(W,"type","button"),m(W,"class","btn btn-light px-1 pt-sm1 pb-sm1 mt"),m(X,"class","btn-group tools"),m(Y,"id","im"),m(Y,"class","hotSpotImg border"),Y.src!==(q=ee+e[7].bgImg)&&m(Y,"src",q),g(Y,"height",e[7].imgheight),g(Y,"width",e[7].imgwidth),g(Y,"border",e[7].hotBorder),g(Y,"border-color",e[7].hotBorderColor),m(Y,"alt",P=e[7].alt),m(Z,"type","button"),m(Z,"class","btn btn-light px-1 pt-sm1 pb-sm1"),m(F,"class","btn-group tools h"),m(U,"draggable",te=!0),m(U,"class","drag-resize position-absolute"),m(U,"id","ID0"),g(U,"left",e[5]),g(U,"top",e[2]),g(U,"height",e[3]),g(U,"width",e[4]),m(z,"id","hptmain"),m(z,"path",ee),m(z,"class","d-none"),g(z,"position","relative"),g(z,"width",e[1]),m(ae,"class","d-none"),m(ae,"id","special_module_xml"),m(ae,"name","special_module_xml"),ae.value=se=e[7].xml,m(i,"class","mt"),m(i,"id","mainContent")},m(s,l){u(s,t,l),p(t,i),p(i,a),p(i,I),p(i,C),p(C,S),p(S,A),p(A,T),p(A,D),p(A,N),p(C,B),p(C,H),p(H,M),p(M,L),p(i,E),p(i,z),p(z,X),p(X,W),p(z,O),p(z,Y),p(z,R),p(z,U),p(U,F),p(F,Z),p(i,ie),p(i,ae),p(t,le),v(ne,t,null),p(t,re),v(ce,t,null),p(t,he),v(me,t,null),ue=!0,pe||(ve=[f(a,"keyup",e[12]),f(L,"click",e[10].bind(this,"img")),f(W,"click",e[10].bind(this,"img")),f(Z,"click",e[11].bind(this,"drag"))],pe=!0)},p(e,t){(!ue||64&t[0]&&k!==(k=e[6][0]))&&m(a,"type",k),(!ue||3&t[0])&&g(a,"width",e[1]+", \n                    height: "+e[0]+", \n                    border: 1px solid #ccc"),(!ue||2&t[0])&&g(S,"width",e[1]),(!ue||2&t[0])&&g(H,"width",e[1]),(!ue||1&t[0])&&g(H,"height",e[0]),(!ue||128&t[0])&&g(H,"background-image","url('"+(ee+e[7].bgImg)+"')"),(!ue||128&t[0]&&Y.src!==(q=ee+e[7].bgImg))&&m(Y,"src",q),(!ue||128&t[0])&&g(Y,"height",e[7].imgheight),(!ue||128&t[0])&&g(Y,"width",e[7].imgwidth),(!ue||128&t[0])&&g(Y,"border",e[7].hotBorder),(!ue||128&t[0])&&g(Y,"border-color",e[7].hotBorderColor),(!ue||128&t[0]&&P!==(P=e[7].alt))&&m(Y,"alt",P),(!ue||32&t[0])&&g(U,"left",e[5]),(!ue||4&t[0])&&g(U,"top",e[2]),(!ue||8&t[0])&&g(U,"height",e[3]),(!ue||16&t[0])&&g(U,"width",e[4]),(!ue||2&t[0])&&g(z,"width",e[1]),(!ue||128&t[0]&&se!==(se=e[7].xml))&&(ae.value=se);const i={};128&t[0]|262144&t[1]&&(i.$$scope={dirty:t,ctx:e}),!oe&&128&t[0]&&(oe=!0,i.visible=e[7].openImg,x((()=>oe=!1))),ne.$set(i);const s={};262144&t[1]&&(s.$$scope={dirty:t,ctx:e}),!de&&128&t[0]&&(de=!0,s.visible=e[7].openDrag,x((()=>de=!1))),ce.$set(s);const l={};128&t[0]|262144&t[1]&&(l.$$scope={dirty:t,ctx:e}),!ge&&128&t[0]&&(ge=!0,l.visible=e[7].snackback,x((()=>ge=!1))),me.$set(l)},i(e){ue||(b(ne.$$.fragment,e),b(ce.$$.fragment,e),b(me.$$.fragment,e),ue=!0)},o(e){w(ne.$$.fragment,e),w(ce.$$.fragment,e),w(me.$$.fragment,e),ue=!1},d(e){e&&y(t),_(ne),_(ce),_(me),pe=!1,$(ve)}}}let ee="//s3.amazonaws.com/jigyaasa_content_static/",te="";function ie(e,t,i){let{xml:a}=t,{getChildXml:s}=t;const l=new Y;let n=0,o="",r="",c="",h="",m="",g="",u="",p={},v=[],f=[],x="",b="";v[1]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="" path="" width="600" height="250"><div id="ID0" type="textclick" top="10" left="20" width="30" height="50">\x3c!--[CDATA[Most cheetahs live in the wilds of Africa. %{There are also some in Iran and northwestern Afghanistan.}% The cheetahs head is smaller than the leopards, and its body is longer. %{This cat is built for speed.}% Its legs are much longer than the leopard, allowing it to run at speeds of up to 70 miles per hour! This incredible ability helps the cheetahs catch their dinner, which is usually an unfortunate antelope. A cheetah spots are simply black spots, not rosettes or circles.]]--\x3e</div></smxml>',v[2]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="" path="" width="600" height="250"><div id="ID0" type="textselect" top="10" left="20" width="30" height="50">\x3c!--[CDATA[Most cheetahs live in the wilds of Africa. %{There are also some in Iran and northwestern Afghanistan.}% The cheetahs head is smaller than the leopards, and its body is longer. %{This cat is built for speed.}% Its legs are much longer than the leopard, allowing it to run at speeds of up to 70 miles per hour! This incredible ability helps the cheetahs catch their dinner, which is usually an unfortunate antelope. A cheetah spots are simply black spots, not rosettes or circles.]]--\x3e</div></smxml>',v[3]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="star_topology_000dlj.jpg" path="" width="600" height="250"><div id="ID0" type="imagehighlight" top="10" left="20" width="30" height="50">\x3c!--[CDATA[]]--\x3e</div></smxml>',v[4]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="star_topology_000dlj.jpg" path="" width="600" height="250"><div id="ID0" type="hotspot" top="172" left="220" width="112" height="80">\x3c!--[CDATA[]]--\x3e</div></smxml>',f[1]="textclick",f[2]="textselect",f[3]="imagehighlight",f[4]="hotspot",f.textclick="1",f.textselect="2",f.imagehighlight="3",f.hotspot="4";let w={};A({xml:"",openImg:!1,openDrag:!1,bgImg:"",snackback:!1,valueMultiple:"1",cdata:"",bgImgWidth:"600px",bgImgHeight:"360px",alt:"",imgheight:"",imgwidth:"",hotBorder:"",hotBorderColor:"",lineColor:"",image_url:""}).subscribe((e=>{i(7,w=e)}));function y(){let e=tinyMCE.activeEditor.selection.getContent({format:"raw"});e=e.replace(e,'<span data-type="select" class="alert alert-info" cursor="pointer" style="padding: 5px;outline: none;line-height:40px;" contentEditable="true">'+e+"</span>"),tinyMCE.activeEditor.selection.setContent(e),H()}function _(e){let t=e.getAttribute("id"),i=[];"SMXML"==e.nodeName&&(t="imagehighlight"==e.children[0].getAttribute("type")?"hptdraw":"hptmain"),Array.prototype.forEach.call(e.attributes,((e,t)=>{i[t]={name:e.name,value:e.value}})),0==e.children.length&&""!=e.textContent.trim()&&(i[i.length]={name:"value",value:e.textContent.trim()}),void 0!==t&&(I.select("#"+t).dataset.attributes=JSON.stringify(i)),e.children.length>0&&Array.prototype.forEach.call(e.children,(e=>{_(e)}))}function $(){let e=[],t=[];_(I.parseHtml(w.xml));new S({onDragEnd:(e,t)=>{i(7,w.xml=l.updateElem("div",e,t.getAttribute("id"),t,w.xml),w),s(w.xml)}});I.listen("#hptmain","click",".drag-resize",(function(e){I.selectAll("#hptmain .elemActive","removeClass","elemActive"),I.select(e,"addClass","elemActive").focus()})),I.bind("#hptmain .drag-resize","mouseenter",(e=>{let t=e.target;I.find(t,".tools",{action:"show",actionData:"block"})})),I.bind("#hptmain .drag-resize","mouseleave",(e=>{let t=e.target;I.find(t,".tools",{action:"hide"})})),x=I.find("#mainContent","#hptdraw").clientWidth,b=I.find("#mainContent","#hptdraw").clientHeight;let r=new W({target:I.find("#mainContent","#hptdraw"),width:x,height:b,correctans:"",cssClass:"drawSurface",penSize:4,type:"imagehighlight",editable:!0,onMove(){},onClick(){},onPaint(i){e.push(i.X),t.push(i.Y)},onRelease(i){I.select("#special_module_user_xml").value="";let a=I.find("#mainContent","#hptdraw canvas").getAttribute("correctans");""!=a?(a=Object.keys(JSON.parse(a)).length,D(e,t,a)):D(e,t,n),e=[],t=[]}}),c=r.lineColor(window.color);if(I.siblings(I.find("#mainContent","#hptdraw")).find((e=>{let t=I.find(e,"div").getAttribute("id");return I.bind("#"+t,"click",(function(e){r.clearSurface(),o="{}",n=0,I.find("#mainContent","#hptdraw canvas",{action:"attr",actionData:{correctans:o}}),B()})),t})),"imagehighlight"==I.parseHtml(a).children[0].getAttribute("type")){var d=w.xml;""!=(d=d.substring(d.indexOf("{"),d.lastIndexOf("}")+1))&&(d=JSON.parse(d)),setTimeout((function(){l.drawOnCanvasAuth(I.find("#mainContent","#hptdraw canvas").getAttribute("id"),d,c)}),2e3)}window.surface=r}function D(e,t,i){0==i?o='{"'+ ++i+'":{"x":['+e+'],"y":['+t+"]}}":(o=I.find("#mainContent","#hptdraw canvas").getAttribute("correctans"),o=o.slice(0,-1),o+=',"'+ ++i+'":{"x":['+e+'],"y":['+t+"]}}"),I.find("#mainContent","#hptdraw canvas",{action:"attr",actionData:{correctans:o}}),B()}function N(e){if("img"==e){i(7,w.bgImg=I.select("#backgroundImage").value,w),i(7,w.alt=I.select("#imgAlt").value,w),i(7,w.imgheight=I.select("#imgHeight").value,w),i(7,w.imgwidth=I.select("#imgWidth").value,w),i(7,w.hotBorder=I.select("#hotBorder").value,w),i(7,w.hotBorderColor=I.select("#hotBorderColor").value,w),globalThis.sda=I.selectAll("#backgroundImage, #imgAlt, #imgHeight, #imgWidth, #hotBorder, #hotBorderColor"),i(7,w.xml=w.xml.replace(/alt="(.*?)"/gim,`alt="${w.alt.replace(/"/g,"&quot;")}"`),w),i(7,w.xml=w.xml.replace(/bgimg="(.*?)"/gim,`bgimg="${w.bgImg}"`),w),i(7,w.xml=w.xml.replace(/imgheight="(.*?)"/gim,`imgheight="${w.imgheight}"`),w),i(7,w.xml=w.xml.replace(/imgwidth="(.*?)"/gim,`imgwidth="${w.imgwidth}"`),w);let e=C(w.xml);e.smxml.div._border=w.hotBorder,e.smxml.div._bordercolor=w.hotBorderColor,e.smxml.div._linecolor=window.color;let t=new Image;t.onload=function(){i(0,r=this.height+"px"),i(1,c=this.width+"px"),I.select("#hptmain","css",{height:r,width:c}),"imagehighlight"==e.smxml.div._type&&(e.smxml._width=this.width,e.smxml._height=this.height,I.find("#hptdraw","canvas",{action:"attr",actionData:{height:this.height,width:this.width}}),I.selectAll("#previewSection .reset, #authoringLoadComponent .reset").forEach((e=>{e.click()}))),i(7,w.xml=E(e),w),s(w.xml)},t.src=ee+w.bgImg,i(7,w.openImg=!1,w)}else{if(function(){let e=I.select("#dragHeight").value,t=parseInt(e),i=I.select("#dragWidth").value,a=parseInt(i),s=I.select("#dragTop").value,l=parseInt(s),n=I.select("#dragLeft").value,o=parseInt(n),d=parseInt(r),h=parseInt(c);return isNaN(Number(e))||isNaN(t)?(I.showmsg("Only numeric value accepted."),I.select("#dragHeight").focus(),!1):t>parseInt(d/2)||t<32?(I.showmsg("Height must be greater than or equal to 32 and less than or equal to "+parseInt(d/2)),I.select("#dragHeight").focus(),!1):isNaN(Number(i))||isNaN(a)?(I.showmsg("Only numeric value accepted."),I.select("#dragWidth").focus(),!1):a>parseInt(h/2)||a<32?(I.showmsg("Width must be greater than or equal to 32 and less than or equal to "+parseInt(h/2)),I.select("#dragWidth").focus(),!1):isNaN(Number(s))||isNaN(l)?(I.showmsg("Only numeric value accepted."),I.select("#dragTop").focus(),!1):l>d-t||l<0?(I.showmsg("Top value must be greater than or equal to 0 and less than or equal to "+(d-t)),I.select("#dragTop").focus(),!1):isNaN(Number(n))||isNaN(o)?(I.showmsg("Only numeric value accepted."),I.select("#dragLeft").focus(),!1):!(o>h-a||o<0)||(I.showmsg("Left value must be greater than or equal to 0 and less than or equal to "+(h-a)),I.select("#dragLeft").focus(),!1)}()){var t=C(w.xml);i(3,m=t.smxml.div._height=parseInt(I.select("#dragHeight").value)),i(4,g=t.smxml.div._width=parseInt(I.select("#dragWidth").value)),i(2,h=t.smxml.div._top=parseInt(I.select("#dragTop").value)),i(5,u=t.smxml.div._left=parseInt(I.select("#dragLeft").value)),i(7,w.openDrag=!1,w),i(3,m+="px"),i(4,g+="px"),i(2,h+="px"),i(5,u+="px"),s(E(t)),i(7,w.xml=E(t),w)}}}function B(){var e=I.parseHtml(w.xml);"imagehighlight"==e.querySelector("div")?.getAttribute("type")&&(e.querySelector("div").innerHTML="<![CDATA["+I.find("#mainContent","#hptdraw canvas").getAttribute("correctans")+"]]>");var t=w.xml;if(t){var a=w.xml.replace(t,formatXml(e.xml?e.xml:(new XMLSerializer).serializeToString(e)));i(7,w.xml=a.toString(),w),s(w.xml)}}function H(){var e=[],t="",a=tinyMCE.activeEditor.getContent({format:"raw"});if(e=a.match(/<span data-type="select"(.*?)>(.*?)<\/span>/gi))for(var l=0;l<e.length;l++)t=e[l].replace(/<span data-type="select"(.*?)>|<\/span>/gm,""),a=a.replace(e[l],"%{"+t+"}%");var n=w.xml.match(/<!--\[CDATA\[(.*?)\]\]-->/gm);if(n){var o=n.toString().replace("\x3c!--[CDATA[","").replace("]]--\x3e","");o=w.xml.replace(n,"\x3c!--[CDATA["+a+"]]--\x3e"),i(7,w.xml=o.toString(),w),s(o.toString())}}function M(e,t,a,l,n){console.log("setps");let o=I.select("#ID0");if(o){let r=o.getBoundingClientRect(),c=o.getAttribute("id"),d=I.parseHtml(w.xml),h=d.querySelector('[id="'+c+'"]');if(void 0!==n&&n)confirm("Do you want to delete it?")&&(o.remove(),h.remove());else if(o.offsetWidth>0&&o.offsetHeight>0){e=o.clientWidth+e,t=o.clientHeight+t,a=r.top+a,l=r.left+l,I.select(o,"css",{width:e+"px",height:t+"px",top:a+"px",left:l+"px"});let i=I.select('[id="'+c+'"]').dataset.attributes;JSON.stringify(i).forEach(((e,t)=>{switch(e.name){case"width":e.value=parseInt(o.clientWidth),h.setAttribute("width",e.value);break;case"height":e.value=parseInt(o.clientHeight),h.setAttribute("height",e.value);break;case"top":e.value=parseInt(r.top),h.setAttribute("top",e.value);break;case"left":e.value=parseInt(r.left),h.setAttribute("left",e.value)}})),I.select('[id="'+c+'"]').dataset.attributes=i}I.select("#special_module_xml").value=d.xml?d.xml:(new XMLSerializer).serializeToString(d[0]),i(7,w.xml=d.xml?d.xml:(new XMLSerializer).serializeToString(d[0]),w),s(d.xml?d.xml:(new XMLSerializer).serializeToString(d[0]))}}k((()=>{I.createLink(window.itemUrl+"clsSMHotspot/css/hotspot.min.css",{preload:!0}),function(){i(7,w.xml=a,w);let e=C(a);if(e)switch(e.smxml.div._type=e.smxml.div._type?e.smxml.div._type:"hotspot",i(7,w.valueMultiple=f[e.smxml.div._type],w),f[e.smxml.div._type]){case"1":case"2":t=e,i(7,w.cdata=t.smxml.div.__cdata,w),i(0,r=t.smxml._height+"px"),i(1,c=t.smxml._width+"px"),I.select("#text0","show"),I.selectAll(".drawImage,#hptmain","hide"),I.find(document,"canvas").remove(),function(e){e=e.replace(/%{/gm,'<span data-type="select" class="alert alert-info" cursor="pointer" style="padding: 5px;outline: none;line-height:40px;" contentEditable="true">').replace(/}%/gm,"</span>"),I.find("#mainContent",".tinymce-editor-response").innerHTML=e}(t.smxml.div.__cdata);break;case"3":!function(e){i(7,w.bgImg=e.smxml._bgimg,w);let t=new Image;t.onload=function(){i(0,r=e.smxml._height>this.height?e.smxml._height+"px":this.height+"px"),i(1,c=e.smxml._width>this.width?e.smxml._width+"px":this.width+"px"),I.find("#previewSection",".reset").click(),I.find("#mainContent","#hptdraw canvas",{action:"attr",actionData:{height:r,width:c,correctans:e.smxml.div.__cdata}}),B()},t.src=ee+e.smxml._bgimg,i(7,w.bgImg=e.smxml._bgimg,w),I.selectAll(".drawImage","toggleClass","d-none"),I.selectAll("#text0,#hptmain","hide"),$()}(e);break;case"4":!function(e){i(7,w.hotBorder=e.smxml.div._border,w),i(7,w.hotBorderColor=e.smxml.div._bordercolor,w),i(7,w.bgImg=e.smxml._bgimg,w),i(0,r=e.smxml._height+"px"),i(7,w.alt=e.smxml._alt,w),i(1,c=e.smxml._width+"px"),i(4,g=e.smxml.div._width+"px"),i(3,m=e.smxml.div._height+"px"),i(5,u=e.smxml.div._left+"px"),i(2,h=e.smxml.div._top+"px");let t=new Image;t.src=ee+e.smxml._bgimg,t.onload=function(){i(0,r=this.height+"px"),i(1,c=this.width+"px"),b=e.smxml.div._imgheight?e.smxml.div._imgheight+"px":"auto !important",x=e.smxml.div._imgwidth?e.smxml.div._imgwidth+"px":"auto !important",i(7,w.imgwidth=x,w),i(7,w.imgheight=b,w),I.select("#hptmain","css",{height:r,width:c})},I.select("#hptmain","toggleClass","d-none"),I.selectAll(".drawImage,#text0","hide"),I.find(document,"canvas",{action:"remove"}),$()}(e),I.bind(document,"keydown",(e=>{if(e.ctrlKey&&e.shiftKey)switch(e.keyCode.toString()){case"37":M(-10,0,0,0);break;case"38":M(0,-10,0,0);break;case"39":M(10,0,0,0);break;case"40":M(0,10,0,0)}else if(e.shiftKey)switch(e.keyCode.toString()){case"37":M(-1,0,0,0);break;case"38":M(0,-1,0,0);break;case"39":M(1,0,0,0);break;case"40":M(0,1,0,0)}else if(e.ctrlKey)switch(e.keyCode.toString()){case"37":M(0,0,0,-10);break;case"38":M(0,0,-10,0);break;case"39":M(0,0,0,10);break;case"40":M(0,0,10,0)}else switch(e.keyCode.toString()){case"27":I.selectAll(".dragable-container .ui-draggable","removeClass","elemActive");break;case"38":e.preventDefault(),M(0,0,-1,0);break;case"40":e.preventDefault(),M(0,0,1,0)}}))}var t;tinyMCE.PluginManager.add("res",(function(e){e.addMenuItem("resp",{text:"Add Token",id:"addToken",onclick(){y()},context:"insert",prependToContext:!0})})),tinymce.init({selector:".tinymce-editor-response",inline:!0,theme:"modern",min_width:100,resize:!0,menubar:!1,toolbar:!1,elementpath:!1,statusbar:!1,force_br_newlines:!0,remove_trailing_brs:!0,forced_root_block:!1,paste_as_text:!0,extended_valid_elements:"span[onClick|contentEditable]",valid_elements:"*[*]",extended_valid_elements:"uc:syntax,uc:ref",custom_elements:"uc:syntax,~uc:ref",plugins:["res contextmenu paste"],contextmenu:"link resp"}),I.listen(document,"mousedown",".draggable",H),p={},I.listen(document,"touchstart",".tinymce-editor-response",(()=>{p.s=(new Date).getTime()})),I.listen(document,"touchend",".tinymce-editor-response",(()=>{p.e=(new Date).getTime()-p.s,p.e/1e3>1&&(y(),p={})})),I.listen(document,"click","#upload_media",(()=>{window.setImage("backgroundImage")})),I.bind(document,"click",(()=>{i(7,w.image_url=ee+""+I.select("#backgroundImage").value,w)}))}()}));return e.$$set=e=>{"xml"in e&&i(14,a=e.xml),"getChildXml"in e&&i(15,s=e.getChildXml)},[r,c,h,m,g,u,f,w,function(e){let t=C(w.xml),a=e,s=!0,l=!0,n=!1;if("imagehighlight"==t.smxml.div._type){let e=new Image;e.onload=function(){n?(i(0,r=t.smxml._height+"px"),i(1,c=t.smxml._width+"px")):(i(0,r=this.height+"px"),i(1,c=this.width+"px")),this.width>=100&&this.width<=1e3?(s=!0,this.height>=80&&this.height<=550?l=!0:(I.alert(d.height_warning),l=!1)):(I.alert(d.width_warning),s=!1),l&&s?n?i(7,w.openImg=!0,w):N(a):(console.log("Default Image set"),i(7,w.openImg=!0,w),e.src=ee+t.smxml._bgimg,I.selectAll("#backgroundImage").value=t.smxml._bgimg,n=!0)},e.src=ee+I.select("#backgroundImage").value}else N(a)},function(){i(7,w.openDrag=!1,w),i(7,w.openImg=!1,w)},function(){I.select("#backgroundImage").value=w.bgImg,i(7,w.image_url=ee+""+w.bgImg,w),I.select(I.select("#backgroundImage").previousElementSibling,"css",{transform:"scale(0.75) translate(0px, -28px)",color:"rgb(0, 188, 212)"}),w.hotBorder&&(I.select("#hotBorder").value=w.hotBorder,I.select(I.select("#hotBorder").previousElementSibling,"css",{transform:"scale(0.75) translate(0px, -28px)",color:"rgb(0, 188, 212)"})),w.hotBorderColor&&(I.select("#hotBorderColor").value=w.hotBorderColor,I.select(I.select("#hotBorderColor").previousElementSibling,"css",{transform:"scale(0.75) translate(0px, -28px)",color:"rgb(0, 188, 212)"})),i(7,w.openImg=!0,w)},function(){i(7,w.openDrag=!0,w);var e=setTimeout((function(){I.select("#dragHeight").value=parseInt(I.select("#ID0").style.height),I.select("#dragWidth").value=parseInt(I.select("#ID0").style.width),I.select("#dragTop").value=parseInt(I.select("#ID0").style.top),I.select("#dragLeft").value=parseInt(I.select("#ID0").style.left),clearTimeout(e)}),300)},H,function(e){i(7,w.lineColor=e.target.value,w),window.color=w.lineColor},a,s,function(){w.alt=this.value,i(7,w)},function(){w.hotBorder=T(this),i(7,w)},function(){w.hotBorderColor=T(this),i(7,w)},function(){w.lineColor=T(this),i(7,w)},function(t){e.$$.not_equal(w.openImg,t)&&(w.openImg=t,i(7,w))},function(t){e.$$.not_equal(w.openDrag,t)&&(w.openDrag=t,i(7,w))},()=>i(7,w.snackback=!1,w),function(t){e.$$.not_equal(w.snackback,t)&&(w.snackback=t,i(7,w))}]}export default class extends t{constructor(e){super(),i(this,e,ie,Z,a,{xml:14,getChildXml:15},[-1,-1])}}
//# sourceMappingURL=Hotspot-0c718435.js.map
