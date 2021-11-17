import{G as e,S as t,i,s as n,F as s,H as a,I as l,K as o,L as r,e as c,b as d,C as h,c as m,f as u,g,M as p,h as v,j as f,m as x,l as b,N as w,O as y,P as _,t as $,a as k,o as I,d as C,y as S,p as A,A as T,X as L,Q as D,w as N,R as E,u as B,T as M,U as H,V as z,W as X,r as W,J as O}from"./main-410076aa.js";function Y(e,t){return!0===isNaN(Number(e))?this.x=0:this.x=e,!0===isNaN(Number(t))?this.y=0:this.y=t,{X:this.x,Y:this.y}}const q=new e;class P{constructor(e){this.prevPoint=void 0,this.defaultOptions={target:"",penSize:1,width:e.width,height:e.height,cssClass:"",onClick:e=>{},onMove:e=>{},onPaint:e=>{},onRelease:e=>{}},this.penWidth=2,this.drawing=!1,this.cap="round",this.ID="dooScribCanvas"+Math.floor(100*Math.random()+1),this.drawingSurface="",e&&(this.Settings={...this.defaultOptions,...e}),!0===isNaN(this.Settings.height)&&(this.Settings.height=100),!0===isNaN(this.Settings.width)&&(this.Settings.width=100),this.init()}init(){let e=this.Settings.target;e?("hptmain0"==e.getAttribute("id")&&q.empty(e),q.insert(e,`<canvas id='${this.ID}' tabindex='0' class='relative ${this.Settings.cssClass}' type='${this.Settings.type}' correctans='${this.Settings.correctans}' userans=''  height='${this.Settings.height}' width='${this.Settings.width}'></canvas>`,"beforeend"),this.penSize(this.Settings.penSize),this.drawingSurface=document.getElementById(this.ID).getContext("2d"),this.drawingSurface.lineWidth=this.penSize(),this.drawingSurface.lineCap=this.cap,!1===this.hasTouch()?(document.getElementById(this.ID).addEventListener("mousedown",this.clickDown.bind(this),!0),document.getElementById(this.ID).addEventListener("mousemove",this.moved.bind(this),!0),document.getElementById(this.ID).addEventListener("mouseup",this.clickUp.bind(this),!0)):(document.getElementById(this.ID).addEventListener("touchstart",this.clickDown.bind(this),!0),document.getElementById(this.ID).addEventListener("touchmove",this.moved.bind(this),!0),document.getElementById(this.ID).addEventListener("touchend",this.clickUp.bind(this),!0))):console.error("Target not defined")}normalizeTouch(e){if(!0===this.hasTouch()){let t=window.scrollY;["touchstart","touchmove"].indexOf(e.type)>-1&&(e.clientX=e.targetTouches[0].pageX,e.clientY=e.targetTouches[0].pageY-t),["touchend"].indexOf(e.type)>-1&&(e.clientX=e.changedTouches[0].pageX,e.clientY=e.changedTouches[0].pageY-t)}return e}clickDown(e){if(!0===this.isDrawing())return;e||(e=window.event),!0===this.hasTouch()&&(e.preventDefault(),e=this.normalizeTouch(e));let t=q.offset(this.Settings.target),i=window.scrollY,n=new Y(e.clientX-t.left,e.clientY-(t.top-i));return this.prevPoint=n,this.drawing=!0,this.Settings.onClick(n),!1}moved(e){e||(e=window.event),!0===this.hasTouch()&&(e.preventDefault(),e=this.normalizeTouch(e));var t=q.offset(this.Settings.target),i=window.scrollY,n=new Y(e.clientX-t.left,e.clientY-(t.top-i));return!0===this.isDrawing()?(this.drawLine(this.prevPoint.X,this.prevPoint.Y,n.X,n.Y),this.prevPoint=n,this.Settings.onPaint(n)):this.Settings.onMove(n),!1}clickUp(e){if(!1===this.isDrawing())return;!0===this.hasTouch()&&(e.preventDefault(),e=this.normalizeTouch(e));let t=q.offset(this.Settings.target),i=window.scrollY,n=new Y(e.clientX-t.left,e.clientY-(t.top-i));return this.Settings.onRelease(n),this.drawing=!1,!1}hasTouch(){return"ontouchstart"in window}penSize(e){return void 0!==e&&!1===isNaN(Number(e))&&(this.penWidth=e),this.penWidth}isDrawing(){if(this.Settings.editable)return this.drawing}lineCap(e){if(void 0!==e)switch(e){case"butt":case"round":case"square":this.cap=e}return this.cap}lineColor(e){if(void 0!==e){let t=q.parseHtml("<div id='stub' style='backgroundColor:white'></div>");t.style.backgroundColor=e;let i=t.style.backgroundColor;void 0!==i&&""!==i&&(window.color=e)}return window.color}context(){return this.drawingSurface}clearSurface(){let e=q.find(document,"canvas").getAttribute("width").replace("px",""),t=q.find(document,"canvas").getAttribute("height").replace("px","");this.drawingSurface.clearRect(0,0,e,t)}drawLine(e,t,i,n){void 0!==e&&void 0!==t&&void 0!==i&&void 0!==n&&!1===isNaN(Number(e))&&!1===isNaN(Number(t))&&!1===isNaN(Number(i))&&!1===isNaN(Number(n))&&(this.drawingSurface.lineCap=this.cap,this.drawingSurface.strokeStyle=window.color,this.drawingSurface.lineWidth=this.penWidth,this.drawingSurface.beginPath(),this.drawingSurface.moveTo(e,t),this.drawingSurface.lineTo(i,n),this.drawingSurface.stroke())}}const j=new e;class J{constructor(){this.count=0,this.drawstr=""}updateElem(e,t,i,n,s){let a,l,o,r,c,d=j.serializeArray(j.find("#authoring-modal",".h","visible"),"input"),h="",m=[],u=j.select("#im").getBoundingClientRect();if(void 0!==n){if(d=j.select("#"+i).dataset.attributes,d&&(d=JSON.parse(d)),!d){let e=[];e[0]={name:"id",value:i},e[1]={name:"type",value:"hotspot"},e[2]={name:"top",value:parseInt(j.select("#"+i).style.top.split("px")[0])},e[3]={name:"left",value:parseInt(j.select("#"+i).style.left.split("px")[0])},e[4]={name:"width",value:parseInt(j.select("#"+i).style.width.split("px")[0])},e[5]={name:"height",value:parseInt(j.select("#"+i).style.height.split("px")[0])},d=e}d.forEach(((e,i,s)=>{switch(e.name){case"width":e.value=n.clientWidth;break;case"height":e.value=n.clientHeight;break;case"top":e.value=+e.value+t.offsetY-n.clientHeight/2,e.value<0&&(e.value=0),e.value+n.clientHeight>u.height&&(e.value=u.height-n.clientHeight);break;case"left":e.value=+e.value+t.offsetX-n.clientWidth/2,e.value<0&&(e.value=0),e.value+n.clientWidth>u.width&&(e.value=u.width-n.clientWidth)}s[i]=e}))}switch(d.forEach(((e,t)=>{"width"==e.name&&(a=e.value),"height"==e.name&&(l=e.value),"top"==e.name&&(o=e.value),"left"==e.name&&(r=e.value),"bgimg"==e.name&&""!=e.value.trim()&&(h=j.select("#hptmain").getAttribute("path")+e.value.trim()),m[e.name]=e.name})),e){case"div":c=`[id="${i}"]`,j.select(`[id="${i}"]`,"css",{width:a+"px",height:l+"px",top:o+"px",left:r+"px"}).dataset.attributes=JSON.stringify(d);break;case"base":c="hptmain",j.select("#hptmain").dataset.attributes=JSON.stringify(d)}if("base"==e){let e="hptmain"==i?"#hptmain":"#hptdraw";if(""!=h){let t=new Image;t.src=h;let n=t.src.substr(t.src.lastIndexOf(".")+1);setTimeout((()=>{t.width=t.width>0?t.width:"600",t.height=t.height>0?t.height:"250",j.select("#option-toolbar","css",{width:t.width}),"gif"!=n&&(j.selectAll(e+">img").length>0?(j.select(e,"css",{width:t.width,height:t.height}),j.selectAll(e+">img","attr",{src:h})):"hptdraw"==i?(j.find(e,"canvas",{action:"attr",actionData:{width:t.width,height:t.height}}),j.selectAll(j.siblings(e),"css",{width:t.width}),j.select(e,"css",{width:t.width,height:t.height,backgroundImage:"url("+h+")"})):j.insert(j.select(e,"css",{width:t.width,height:t.height}),'<img src="'+h+'" />',"beforebegin"))}),100)}else j.selectAll(e+">img").length>0&&(j.select(e,"css",{width:"600px",height:"250px"}),j.select(e+">img","remove"))}return"div"==e?this.updateXML(e,c,d,o,r,s):"gif"!=img_ext&&"undefined"!=typeof img?this.updateXML(e,c,d,img.width,img.height,s):void j.alert("Please Do not use Gif Image!!!")}drawOnCanvasAuth(e,t,i){let n=document.getElementById(e).getContext("2d"),s=Object.keys(t).length;if(""!=t)for(let e=1;e<=s;e++)for(let i=0;i<=t[e].x.length;i++)n.beginPath(),n.lineWidth="4",n.strokeStyle=window.color,n.moveTo(t[e].x[i],t[e].y[i]),n.lineTo(t[e].x[i+1],t[e].y[i+1]),n.stroke()}updateXML(e,t,i,n,s,a){let l,o=j.parseHtml(a);if(l="hptmain"==t?o:j.find(o,t),l&&n>0&&s>0&&(l.setAttribute("width",n),l.setAttribute("height",s)),i)for(let e of i)""!==e.value?(l&&l.setAttribute(e.name,e.value),"type"==e.name&&l&&l.setAttribute(e.value,"hotspot")):l.removeAttribute(e.name);return formatXml(o.outerHTML)}}function R(e){s(e,"svelte-dl6gty","#resizeX.svelte-dl6gty{position:absolute;right:0;width:3px;opacity:0;height:100%;cursor:w-resize}#resizeY.svelte-dl6gty{position:absolute;bottom:0;width:100%;height:3px;opacity:0;cursor:s-resize}#resizeXY.svelte-dl6gty{position:absolute;bottom:0;right:0;width:3px;height:3px;opacity:0;cursor:se-resize}")}function U(e){let t,i,n,s,a,l,o,r,h,m,x,w,y,_,$,k,C,A,T,L,D,N,E,X,W,O,Y,q,P,j,J,R,U,K,F,G,Q,V,Z,ee,te,ie,ne,se,ae,le,oe,re,ce,de,he,me,ue,ge,pe,ve;return{c(){t=c("h4"),t.innerHTML='<div class="d-flex justify-content-between"><div>Image</div></div>',i=d(),n=c("div"),s=c("div"),a=c("input"),o=d(),r=c("button"),r.textContent="Upload image",h=d(),m=c("div"),x=c("img"),y=d(),_=c("span"),$=c("label"),k=B("Image Alt"),A=d(),T=c("input"),D=d(),N=c("div"),E=c("div"),X=c("span"),X.innerHTML='<label for="hotBorder" class="my-1 text-dark">Border width</label>',W=d(),O=c("select"),Y=c("option"),Y.textContent="None",q=c("option"),q.textContent="1",P=c("option"),P.textContent="2",j=c("option"),j.textContent="3",J=c("option"),J.textContent="4",R=c("option"),R.textContent="5",K=d(),F=c("div"),G=c("span"),G.innerHTML='<label for="hotBorderColor" class="my-1 text-dark">Border color</label>',Q=d(),V=c("select"),Z=c("option"),Z.textContent="None",ee=c("option"),ee.textContent="Black",te=c("option"),te.textContent="Grey",ne=d(),se=c("br"),ae=d(),le=c("div"),oe=c("span"),oe.innerHTML='<label for="setLineColor" class="mt-2 text-dark">Draw line color</label>',re=d(),ce=c("select"),de=c("option"),de.textContent="Please Select",he=c("option"),he.textContent="Red",me=c("option"),me.textContent="Black",ue=c("option"),ue.textContent="Blue",u(t,"class","mt-1 font21 mb-4"),u(a,"type","text"),u(a,"id","backgroundImage"),a.disabled="true",a.value=l=e[7].bgImg,u(a,"margin","normal"),g(a,"pointer-events","none"),g(a,"width","76%"),u(a,"class","form-control mr-2"),u(r,"id","upload_media"),u(r,"type","button"),r.value="Upload Media",u(r,"margin","normal"),u(r,"class","btn btn-outline-primary position-relative"),u(s,"class","d-flex"),p(x.src,w=e[7].image_url)||u(x,"src",w),u(x,"alt","background"),u(x,"class","img img-responsive span7"),u(m,"class","mx-auto width8 p-2 border mt-2"),u($,"for","imgAlt"),u($,"class",C=4==e[7].valueMultiple?"my-1 text-dark":"hidden"),u(T,"type","text"),u(T,"id","imgAlt"),u(T,"placeholder","Alt text"),u(T,"class",L=4==e[7].valueMultiple?" form-control mt-0":"hidden form-control mt-0"),u(T,"margin","normal"),g(T,"width","-webkit-fill-available"),Y.__value="0",Y.value=Y.__value,q.__value="1",q.value=q.__value,P.__value="2",P.value=P.__value,j.__value="3",j.value=j.__value,J.__value="4",J.value=J.__value,R.__value="5",R.value=R.__value,u(O,"id","hotBorder"),u(O,"class","form-select"),void 0===e[7].hotBorder&&M((()=>e[28].call(O))),u(E,"class",U=4==e[7].valueMultiple?"d-inline-block pr-2 mt-2 w-sm":"hidden"),Z.__value="white",Z.value=Z.__value,ee.__value="black",ee.value=ee.__value,te.__value="grey",te.value=te.__value,u(V,"id","hotBorderColor"),u(V,"class","form-select"),void 0===e[7].hotBorderColor&&M((()=>e[29].call(V))),u(F,"class",ie=4==e[7].valueMultiple?"d-inline-block mt-2 w-sm":"hidden"),u(N,"class","d-flex"),de.__value="Please Select",de.value=de.__value,he.__value="red",he.value=he.__value,me.__value="black",me.value=me.__value,ue.__value="blue",ue.value=ue.__value,u(ce,"id","setLineColor"),u(ce,"class","form-select"),void 0===e[7].lineColor&&M((()=>e[30].call(ce))),u(le,"class",ge=3==e[7].valueMultiple?"":"hidden"),g(n,"overflow-y","auto"),g(n,"padding-right","20px")},m(l,c){v(l,t,c),v(l,i,c),v(l,n,c),f(n,s),f(s,a),f(s,o),f(s,r),f(n,h),f(n,m),f(m,x),f(n,y),f(n,_),f(_,$),f($,k),f(n,A),f(n,T),H(T,e[7].alt),f(n,D),f(n,N),f(N,E),f(E,X),f(E,W),f(E,O),f(O,Y),f(O,q),f(O,P),f(O,j),f(O,J),f(O,R),z(O,e[7].hotBorder),f(N,K),f(N,F),f(F,G),f(F,Q),f(F,V),f(V,Z),f(V,ee),f(V,te),z(V,e[7].hotBorderColor),f(n,ne),f(n,se),f(n,ae),f(n,le),f(le,oe),f(le,re),f(le,ce),f(ce,de),f(ce,he),f(ce,me),f(ce,ue),z(ce,e[7].lineColor),pe||(ve=[b(T,"input",e[27]),b(O,"change",e[28]),b(V,"change",e[29]),b(ce,"change",e[30]),b(ce,"blur",e[16].bind(this))],pe=!0)},p(e,t){128&t[0]&&l!==(l=e[7].bgImg)&&a.value!==l&&(a.value=l),128&t[0]&&!p(x.src,w=e[7].image_url)&&u(x,"src",w),128&t[0]&&C!==(C=4==e[7].valueMultiple?"my-1 text-dark":"hidden")&&u($,"class",C),128&t[0]&&L!==(L=4==e[7].valueMultiple?" form-control mt-0":"hidden form-control mt-0")&&u(T,"class",L),128&t[0]&&T.value!==e[7].alt&&H(T,e[7].alt),128&t[0]&&z(O,e[7].hotBorder),128&t[0]&&U!==(U=4==e[7].valueMultiple?"d-inline-block pr-2 mt-2 w-sm":"hidden")&&u(E,"class",U),128&t[0]&&z(V,e[7].hotBorderColor),128&t[0]&&ie!==(ie=4==e[7].valueMultiple?"d-inline-block mt-2 w-sm":"hidden")&&u(F,"class",ie),128&t[0]&&z(ce,e[7].lineColor),128&t[0]&&ge!==(ge=3==e[7].valueMultiple?"":"hidden")&&u(le,"class",ge)},d(e){e&&I(t),e&&I(i),e&&I(n),pe=!1,S(ve)}}}function K(e){let t,i=h.cancel+"";return{c(){t=B(i)},m(e,i){v(e,t,i)},p:W,d(e){e&&I(t)}}}function F(e){let t,i=h.submit+"";return{c(){t=B(i)},m(e,i){v(e,t,i)},p:W,d(e){e&&I(t)}}}function G(e){let t,i,n,s,a;return i=new X({props:{unelevated:!0,outlined:!0,class:"text-capitalize",color:"#ccc",$$slots:{default:[K]},$$scope:{ctx:e}}}),i.$on("click",e[12]),s=new X({props:{class:"bg-primary text-white",style:"text-transform: none",key:h.submit,$$slots:{default:[F]},$$scope:{ctx:e}}}),s.$on("click",e[11].bind(this,"img")),{c(){t=c("div"),m(i.$$.fragment),n=d(),m(s.$$.fragment),u(t,"slot","footer"),u(t,"class","svelteFooter")},m(e,l){v(e,t,l),x(i,t,null),f(t,n),x(s,t,null),a=!0},p(e,t){const n={};2&t[2]&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const a={};2&t[2]&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||($(i.$$.fragment,e),$(s.$$.fragment,e),a=!0)},o(e){k(i.$$.fragment,e),k(s.$$.fragment,e),a=!1},d(e){e&&I(t),C(i),C(s)}}}function Q(e){let t,i,n;return{c(){t=c("h4"),t.innerHTML='<div class="d-flex justify-content-between"><div>Hotspot</div></div>',i=d(),n=c("div"),n.innerHTML='<div class="row"><div class="col-6 pr-1"><span><label for="dragHeight" class="my-1 text-dark">Height</label></span> \n                    <input type="number" id="dragHeight" placeholder="Height" defaultvalue=" " class="form-control"/></div> \n                <div class="col-6 pl-1"><span><label for="dragWidth" class="my-1 text-dark">Width</label></span> \n                    <input type="number" id="dragWidth" placeholder="Width" defaultvalue=" " class="form-control"/></div></div> \n            <div class="row mt-2"><div class="col-6 pr-1"><span><label for="dragTop" class="my-1 text-dark">Top</label></span> \n                    <input type="number" id="dragTop" placeholder="Top" defaultvalue=" " class="form-control"/></div> \n                <div class="col-6 pl-1"><span><label for="dragLeft" class="my-1 text-dark">Left</label></span> \n                    <input type="number" id="dragLeft" placeholder="Left" defaultvalue=" " class="form-control"/></div></div>',u(t,"class","mt-1 font21 mb-4"),g(n,"overflow-y","auto"),g(n,"padding-right","20px")},m(e,s){v(e,t,s),v(e,i,s),v(e,n,s)},d(e){e&&I(t),e&&I(i),e&&I(n)}}}function V(e){let t,i=h.cancel+"";return{c(){t=B(i)},m(e,i){v(e,t,i)},p:W,d(e){e&&I(t)}}}function Z(e){let t,i=h.done+"";return{c(){t=B(i)},m(e,i){v(e,t,i)},p:W,d(e){e&&I(t)}}}function ee(e){let t,i,n,s,a;return i=new X({props:{unelevated:!0,outlined:!0,class:"text-capitalize",color:"#ccc",$$slots:{default:[V]},$$scope:{ctx:e}}}),i.$on("click",e[12]),s=new X({props:{class:"bg-primary text-white",style:"text-transform: none",key:h.done,$$slots:{default:[Z]},$$scope:{ctx:e}}}),s.$on("click",e[11].bind(this,"drag")),{c(){t=c("div"),m(i.$$.fragment),n=d(),m(s.$$.fragment),u(t,"slot","footer"),u(t,"class","svelteFooter")},m(e,l){v(e,t,l),x(i,t,null),f(t,n),x(s,t,null),a=!0},p(e,t){const n={};2&t[2]&&(n.$$scope={dirty:t,ctx:e}),i.$set(n);const a={};2&t[2]&&(a.$$scope={dirty:t,ctx:e}),s.$set(a)},i(e){a||($(i.$$.fragment,e),$(s.$$.fragment,e),a=!0)},o(e){k(i.$$.fragment,e),k(s.$$.fragment,e),a=!1},d(e){e&&I(t),C(i),C(s)}}}function te(e){let t;return{c(){t=B(le)},m(e,i){v(e,t,i)},p:W,d(e){e&&I(t)}}}function ie(e){let t;return{c(){t=B("Close")},m(e,i){v(e,t,i)},d(e){e&&I(t)}}}function ne(e){let t,i,n;return i=new X({props:{color:"#ff0",$$slots:{default:[ie]},$$scope:{ctx:e}}}),i.$on("click",e[33]),{c(){t=c("span"),m(i.$$.fragment),u(t,"slot","action")},m(e,s){v(e,t,s),x(i,t,null),n=!0},p(e,t){const n={};2&t[2]&&(n.$$scope={dirty:t,ctx:e}),i.$set(n)},i(e){n||($(i.$$.fragment,e),n=!0)},o(e){k(i.$$.fragment,e),n=!1},d(e){e&&I(t),C(i)}}}function se(e){let t,i,n,s,A,T,L,D,N,E,B,M,H,z,X,W,O,Y,q,P,j,J,R,K,F,V,Z,ie,se,le,oe,re,ce,de,he,me,ue,ge,pe,ve,fe,xe,be,we,ye,_e,$e,ke,Ie;function Ce(t){e[31](t)}let Se={class:"remove_right_margin",width:"600",style:"background: #fff; border-radius: 5px;",$$slots:{footer:[G],default:[U]},$$scope:{ctx:e}};function Ae(t){e[32](t)}void 0!==e[7].openImg&&(Se.visible=e[7].openImg),pe=new a({props:Se}),l.push((()=>o(pe,"visible",Ce)));let Te={class:"remove_right_margin",width:"600",style:"background: #fff; border-radius: 5px;",$$slots:{footer:[ee],default:[Q]},$$scope:{ctx:e}};function Le(t){e[34](t)}void 0!==e[7].openDrag&&(Te.visible=e[7].openDrag),xe=new a({props:Te}),l.push((()=>o(xe,"visible",Ae)));let De={bg:"#f44336",bottom:!0,timeout:10,style:"position:fixed; bottom:50px",$$slots:{action:[ne],default:[te]},$$scope:{ctx:e}};return void 0!==e[7].snackback&&(De.visible=e[7].snackback),ye=new r({props:De}),l.push((()=>o(ye,"visible",Le))),{c(){t=c("div"),i=c("center"),n=c("div"),A=d(),T=c("div"),L=c("div"),D=c("div"),N=c("span"),E=d(),B=c("span"),B.textContent=""+h.reset,M=d(),H=c("div"),z=c("div"),X=c("button"),X.innerHTML='<i class="icomoon-24px-edit-1"></i>',W=d(),O=c("div"),Y=c("div"),q=c("button"),q.innerHTML='<i class="icomoon-24px-edit-1"></i>',P=d(),j=c("img"),K=d(),F=c("div"),V=c("div"),Z=c("button"),Z.innerHTML='<i class="icomoon-24px-edit-1"></i>',ie=d(),se=c("div"),le=d(),oe=c("div"),re=d(),ce=c("div"),he=d(),me=c("textarea"),ge=d(),m(pe.$$.fragment),fe=d(),m(xe.$$.fragment),we=d(),m(ye.$$.fragment),u(n,"class","tinymce-editor-response"),u(n,"id","text0"),u(n,"type",s=e[6][0]),g(n,"width",e[1]+", \r\n                height: "+e[0]+", \r\n                border: 1px solid #ccc"),g(n,"outline","none"),g(n,"padding","10px"),g(n,"textAlign","left"),g(n,"display","none"),g(n,"overflowY","scroll\r\n            "),u(n,"contenteditable","true"),u(N,"class","icomoon-new-24px-reset-1 s3"),g(N,"vertical-align","text-top"),u(B,"class","position-relative bottom1"),u(D,"id","resetAuth"),u(D,"class","reset btn btn-outline-primary btn-sm height27 mt-sm2 mr-sm2 float-right"),g(D,"width","90px"),g(L,"width",e[1]),g(L,"height","32px"),g(L,"background","#d9e7fd"),g(L,"border-top","2px solid #96bbf6\r\n            "),u(X,"name","change_image"),u(X,"type","button"),u(X,"class","btn btn-light px-1 pt-sm1 pb-sm1 mt"),u(z,"class","btn-group tools"),u(H,"id","hptdraw"),g(H,"width",e[1]),g(H,"height",e[0]),g(H,"background-image","url('"+(ae+e[7].bgImg)+"')"),g(H,"background-repeat","no-repeat"),g(H,"position","relative"),g(H,"border","1px solid #e0e0e0"),u(T,"class","drawImage d-none"),u(q,"type","button"),u(q,"class","btn btn-light px-1 pt-sm1 pb-sm1 mt"),u(Y,"class","btn-group tools"),u(j,"id","im"),u(j,"class","hotSpotImg border"),p(j.src,J=ae+e[7].bgImg)||u(j,"src",J),g(j,"height",e[7].imgheight),g(j,"width",e[7].imgwidth),g(j,"border",e[7].hotBorder),g(j,"border-color",e[7].hotBorderColor),u(j,"alt",R=e[7].alt),u(Z,"type","button"),u(Z,"class","btn btn-light px-1 pt-sm1 pb-sm1"),u(V,"class","btn-group tools h"),u(se,"id","resizeX"),u(se,"class","svelte-dl6gty"),u(oe,"id","resizeY"),u(oe,"class","svelte-dl6gty"),u(ce,"id","resizeXY"),u(ce,"class","svelte-dl6gty"),u(F,"draggable",de=!0),u(F,"class","drag-resize position-absolute"),u(F,"id","ID0"),g(F,"left",e[5]),g(F,"top",e[2]),g(F,"height",e[3]),g(F,"width",e[4]),u(O,"id","hptmain"),u(O,"path",ae),u(O,"class","d-none"),g(O,"position","relative"),g(O,"width",e[1]),u(me,"class","d-none"),u(me,"id","special_module_xml"),u(me,"name","special_module_xml"),me.value=ue=e[7].xml,u(i,"class","mt"),u(i,"id","mainContent")},m(s,a){v(s,t,a),f(t,i),f(i,n),f(i,A),f(i,T),f(T,L),f(L,D),f(D,N),f(D,E),f(D,B),f(T,M),f(T,H),f(H,z),f(z,X),f(i,W),f(i,O),f(O,Y),f(Y,q),f(O,P),f(O,j),f(O,K),f(O,F),f(F,V),f(V,Z),f(F,ie),f(F,se),e[24](se),f(F,le),f(F,oe),e[25](oe),f(F,re),f(F,ce),e[26](ce),f(i,he),f(i,me),f(t,ge),x(pe,t,null),f(t,fe),x(xe,t,null),f(t,we),x(ye,t,null),$e=!0,ke||(Ie=[b(n,"keyup",e[15]),b(X,"click",e[13].bind(this,"img")),b(q,"click",e[13].bind(this,"img")),b(Z,"click",e[14].bind(this,"drag")),b(se,"mousedown",w(y(e[17]))),b(oe,"mousedown",w(y(e[18]))),b(ce,"mousedown",w(y(e[19])))],ke=!0)},p(e,t){(!$e||64&t[0]&&s!==(s=e[6][0]))&&u(n,"type",s),(!$e||3&t[0])&&g(n,"width",e[1]+", \r\n                height: "+e[0]+", \r\n                border: 1px solid #ccc"),(!$e||2&t[0])&&g(L,"width",e[1]),(!$e||2&t[0])&&g(H,"width",e[1]),(!$e||1&t[0])&&g(H,"height",e[0]),(!$e||128&t[0])&&g(H,"background-image","url('"+(ae+e[7].bgImg)+"')"),(!$e||128&t[0]&&!p(j.src,J=ae+e[7].bgImg))&&u(j,"src",J),(!$e||128&t[0])&&g(j,"height",e[7].imgheight),(!$e||128&t[0])&&g(j,"width",e[7].imgwidth),(!$e||128&t[0])&&g(j,"border",e[7].hotBorder),(!$e||128&t[0])&&g(j,"border-color",e[7].hotBorderColor),(!$e||128&t[0]&&R!==(R=e[7].alt))&&u(j,"alt",R),(!$e||32&t[0])&&g(F,"left",e[5]),(!$e||4&t[0])&&g(F,"top",e[2]),(!$e||8&t[0])&&g(F,"height",e[3]),(!$e||16&t[0])&&g(F,"width",e[4]),(!$e||2&t[0])&&g(O,"width",e[1]),(!$e||128&t[0]&&ue!==(ue=e[7].xml))&&(me.value=ue);const i={};128&t[0]|2&t[2]&&(i.$$scope={dirty:t,ctx:e}),!ve&&128&t[0]&&(ve=!0,i.visible=e[7].openImg,_((()=>ve=!1))),pe.$set(i);const a={};2&t[2]&&(a.$$scope={dirty:t,ctx:e}),!be&&128&t[0]&&(be=!0,a.visible=e[7].openDrag,_((()=>be=!1))),xe.$set(a);const l={};128&t[0]|2&t[2]&&(l.$$scope={dirty:t,ctx:e}),!_e&&128&t[0]&&(_e=!0,l.visible=e[7].snackback,_((()=>_e=!1))),ye.$set(l)},i(e){$e||($(pe.$$.fragment,e),$(xe.$$.fragment,e),$(ye.$$.fragment,e),$e=!0)},o(e){k(pe.$$.fragment,e),k(xe.$$.fragment,e),k(ye.$$.fragment,e),$e=!1},d(i){i&&I(t),e[24](null),e[25](null),e[26](null),C(pe),C(xe),C(ye),ke=!1,S(Ie)}}}let ae="//s3.amazonaws.com/jigyaasa_content_static/",le="";function oe(e,t,i){let{xml:n}=t,{getChildXml:s}=t;const a=new J;let o=0,r="",c="",d="",m="",u="",g="",p="",v={},f=[],x=[],b="",w="";f[1]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="" path="" width="600" height="250"><div id="ID0" type="textclick" top="10" left="20" width="30" height="50">\x3c!--[CDATA[Most cheetahs live in the wilds of Africa. %{There are also some in Iran and northwestern Afghanistan.}% The cheetahs head is smaller than the leopards, and its body is longer. %{This cat is built for speed.}% Its legs are much longer than the leopard, allowing it to run at speeds of up to 70 miles per hour! This incredible ability helps the cheetahs catch their dinner, which is usually an unfortunate antelope. A cheetah spots are simply black spots, not rosettes or circles.]]--\x3e</div></smxml>',f[2]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="" path="" width="600" height="250"><div id="ID0" type="textselect" top="10" left="20" width="30" height="50">\x3c!--[CDATA[Most cheetahs live in the wilds of Africa. %{There are also some in Iran and northwestern Afghanistan.}% The cheetahs head is smaller than the leopards, and its body is longer. %{This cat is built for speed.}% Its legs are much longer than the leopard, allowing it to run at speeds of up to 70 miles per hour! This incredible ability helps the cheetahs catch their dinner, which is usually an unfortunate antelope. A cheetah spots are simply black spots, not rosettes or circles.]]--\x3e</div></smxml>',f[3]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="star_topology_000dlj.jpg" path="" width="600" height="250"><div id="ID0" type="imagehighlight" top="10" left="20" width="30" height="50">\x3c!--[CDATA[]]--\x3e</div></smxml>',f[4]='<smxml xmlns="http://www.w3.org/1999/xhtml" type="4" name="HotSpot" bgimg="star_topology_000dlj.jpg" path="" width="600" height="250"><div id="ID0" type="hotspot" top="172" left="220" width="112" height="80">\x3c!--[CDATA[]]--\x3e</div></smxml>',x[1]="textclick",x[2]="textselect",x[3]="imagehighlight",x[4]="hotspot",x.textclick="1",x.textselect="2",x.imagehighlight="3",x.hotspot="4";let y={};N({xml:"",openImg:!1,openDrag:!1,bgImg:"",snackback:!1,valueMultiple:"1",cdata:"",bgImgWidth:"600px",bgImgHeight:"360px",alt:"",imgheight:"",imgwidth:"",hotBorder:"",hotBorderColor:"",lineColor:"",image_url:""}).subscribe((e=>{i(7,y=e)}));function _(){let e=tinyMCE.activeEditor.selection.getContent({format:"raw"});e=e.replace(e,'<span data-type="select" class="alert alert-info" cursor="pointer" style="padding: 5px;outline: none;line-height:40px;" contentEditable="true">'+e+"</span>"),tinyMCE.activeEditor.selection.setContent(e),B()}function $(e){let t=e.getAttribute("id"),i=[];"SMXML"==e.nodeName&&(t="imagehighlight"==e.children[0].getAttribute("type")?"hptdraw":"hptmain"),Array.prototype.forEach.call(e.attributes,((e,t)=>{i[t]={name:e.name,value:e.value}})),0==e.children.length&&""!=e.textContent.trim()&&(i[i.length]={name:"value",value:e.textContent.trim()}),void 0!==t&&t&&(T.select("#"+t).dataset.attributes=JSON.stringify(i)),e.children.length>0&&Array.prototype.forEach.call(e.children,(e=>{$(e)}))}function k(){let e=[],t=[];$(T.parseHtml(y.xml));new D({onDragEnd:(e,t)=>{i(7,y.xml=a.updateElem("div",e,t.getAttribute("id"),t,y.xml),y),s(y.xml)}});T.listen("#hptmain","click",".drag-resize",(function(e){T.selectAll("#hptmain .elemActive","removeClass","elemActive"),T.select(e,"addClass","elemActive").focus()})),T.bind("#hptmain .drag-resize","mouseenter",(e=>{let t=e.target;T.find(t,".tools",{action:"show",actionData:"block"})})),T.bind("#hptmain .drag-resize","mouseleave",(e=>{let t=e.target;T.find(t,".tools",{action:"hide"})})),b=T.find("#mainContent","#hptdraw").clientWidth,w=T.find("#mainContent","#hptdraw").clientHeight;let l=new P({target:T.find("#mainContent","#hptdraw"),width:b,height:w,correctans:"",cssClass:"drawSurface",penSize:4,type:"imagehighlight",editable:!0,onMove(){},onClick(){},onPaint(i){e.push(i.X),t.push(i.Y)},onRelease(i){T.select("#special_module_user_xml").value="";let n=T.find("#mainContent","#hptdraw canvas").getAttribute("correctans");""!=n?(n=Object.keys(JSON.parse(n)).length,I(e,t,n)):I(e,t,o),e=[],t=[]}}),c=l.lineColor(y.lineColor);if(T.siblings(T.find("#mainContent","#hptdraw")).find((e=>{let t=T.find(e,"div").getAttribute("id");return T.bind("#"+t,"click",(function(e){l.clearSurface(),r="{}",o=0,T.find("#mainContent","#hptdraw canvas",{action:"attr",actionData:{correctans:r}}),S()})),t})),"imagehighlight"==T.parseHtml(n).children[0].getAttribute("type")){var d=y.xml;""!=(d=d.substring(d.indexOf("{"),d.lastIndexOf("}")+1))&&(d=JSON.parse(d)),setTimeout((function(){a.drawOnCanvasAuth(T.find("#mainContent","#hptdraw canvas").getAttribute("id"),d,c)}),2e3)}window.surface=l}function I(e,t,i){0==i?r='{"'+ ++i+'":{"x":['+e+'],"y":['+t+"]}}":(r=T.find("#mainContent","#hptdraw canvas").getAttribute("correctans"),r=r.slice(0,-1),r+=',"'+ ++i+'":{"x":['+e+'],"y":['+t+"]}}"),T.find("#mainContent","#hptdraw canvas",{action:"attr",actionData:{correctans:r}}),S()}function C(e){if("img"==e){i(7,y.bgImg=T.select("#backgroundImage").value,y),i(7,y.alt=T.select("#imgAlt").value,y),i(7,y.imgheight=T.select("#imgHeight").value,y),i(7,y.imgwidth=T.select("#imgWidth").value,y),i(7,y.hotBorder=T.select("#hotBorder").value,y),i(7,y.hotBorderColor=T.select("#hotBorderColor").value,y),globalThis.sda=T.selectAll("#backgroundImage, #imgAlt, #imgHeight, #imgWidth, #hotBorder, #hotBorderColor"),i(7,y.xml=y.xml.replace(/alt="(.*?)"/gim,`alt="${y.alt.replace(/"/g,"&quot;")}"`),y),i(7,y.xml=y.xml.replace(/bgimg="(.*?)"/gim,`bgimg="${y.bgImg}"`),y),i(7,y.xml=y.xml.replace(/imgheight="(.*?)"/gim,`imgheight="${y.imgheight}"`),y),i(7,y.xml=y.xml.replace(/imgwidth="(.*?)"/gim,`imgwidth="${y.imgwidth}"`),y);let e=L(y.xml);e.smxml.div._border=y.hotBorder,e.smxml.div._bordercolor=y.hotBorderColor,e.smxml.div._linecolor=window.color;let t=new Image;t.onload=function(){i(0,c=this.height+"px"),i(1,d=this.width+"px"),T.select("#hptmain","css",{height:c,width:d}),"imagehighlight"==e.smxml.div._type&&(e.smxml._width=this.width,e.smxml._height=this.height,T.find("#hptdraw","canvas",{action:"attr",actionData:{height:this.height,width:this.width}}),T.selectAll("#previewSection .reset, #authoringLoadComponent .reset").forEach((e=>{e.click()}))),i(7,y.xml=O(e),y),s(y.xml)},t.src=ae+y.bgImg,i(7,y.openImg=!1,y)}else{if(function(){let e=T.select("#dragHeight").value,t=parseInt(e),i=T.select("#dragWidth").value,n=parseInt(i),s=T.select("#dragTop").value,a=parseInt(s),l=T.select("#dragLeft").value,o=parseInt(l),r=parseInt(c),h=parseInt(d);return isNaN(Number(e))||isNaN(t)?(T.showmsg("Only numeric value accepted."),T.select("#dragHeight").focus(),!1):t>parseInt(r/2)||t<32?(T.showmsg("Height must be greater than or equal to 32 and less than or equal to "+parseInt(r/2)),T.select("#dragHeight").focus(),!1):isNaN(Number(i))||isNaN(n)?(T.showmsg("Only numeric value accepted."),T.select("#dragWidth").focus(),!1):n>parseInt(h/2)||n<32?(T.showmsg("Width must be greater than or equal to 32 and less than or equal to "+parseInt(h/2)),T.select("#dragWidth").focus(),!1):isNaN(Number(s))||isNaN(a)?(T.showmsg("Only numeric value accepted."),T.select("#dragTop").focus(),!1):a>r-t||a<0?(T.showmsg("Top value must be greater than or equal to 0 and less than or equal to "+(r-t)),T.select("#dragTop").focus(),!1):isNaN(Number(l))||isNaN(o)?(T.showmsg("Only numeric value accepted."),T.select("#dragLeft").focus(),!1):!(o>h-n||o<0)||(T.showmsg("Left value must be greater than or equal to 0 and less than or equal to "+(h-n)),T.select("#dragLeft").focus(),!1)}()){var t=L(y.xml);i(3,u=t.smxml.div._height=parseInt(T.select("#dragHeight").value)),i(4,g=t.smxml.div._width=parseInt(T.select("#dragWidth").value)),i(2,m=t.smxml.div._top=parseInt(T.select("#dragTop").value)),i(5,p=t.smxml.div._left=parseInt(T.select("#dragLeft").value)),i(7,y.openDrag=!1,y),i(3,u+="px"),i(4,g+="px"),i(2,m+="px"),i(5,p+="px"),s(O(t)),i(7,y.xml=O(t),y)}}}function S(){var e=T.parseHtml(y.xml);"imagehighlight"==e.querySelector("div")?.getAttribute("type")&&(e.querySelector("div").innerHTML="<![CDATA["+T.find("#mainContent","#hptdraw canvas").getAttribute("correctans")+"]]>");var t=y.xml;if(t){var n=y.xml.replace(t,formatXml(e.xml?e.xml:(new XMLSerializer).serializeToString(e)));i(7,y.xml=n.toString(),y),s(y.xml)}}function B(){var e=[],t="",n=tinyMCE.activeEditor.getContent({format:"raw"});if(e=n.match(/<span data-type="select"(.*?)>(.*?)<\/span>/gi))for(var a=0;a<e.length;a++)t=e[a].replace(/<span data-type="select"(.*?)>|<\/span>/gm,""),n=n.replace(e[a],"%{"+t+"}%");var l=y.xml.match(/<!--\[CDATA\[(.*?)\]\]-->/gm);if(l){var o=l.toString().replace("\x3c!--[CDATA[","").replace("]]--\x3e","");o=y.xml.replace(l,"\x3c!--[CDATA["+n+"]]--\x3e"),i(7,y.xml=o.toString(),y),s(o.toString())}}function M(e,t,n,a,l){let o=T.select("#ID0");if(o){let r=o.getBoundingClientRect(),c=o.getAttribute("id"),d=T.parseHtml(y.xml),h=d.querySelector('[id="'+c+'"]');if(void 0!==l&&l)confirm("Do you want to delete it?")&&(o.remove(),h.remove());else if(o.offsetWidth>0&&o.offsetHeight>0){e=o.clientWidth+e,t=o.clientHeight+t,n=r.top+n,a=r.left+a,T.select(o,"css",{width:e+"px",height:t+"px",top:n+"px",left:a+"px"});let i=T.select('[id="'+c+'"]').dataset.attributes;JSON.stringify(i).forEach(((e,t)=>{switch(e.name){case"width":e.value=parseInt(o.clientWidth),h.setAttribute("width",e.value);break;case"height":e.value=parseInt(o.clientHeight),h.setAttribute("height",e.value);break;case"top":e.value=parseInt(r.top),h.setAttribute("top",e.value);break;case"left":e.value=parseInt(r.left),h.setAttribute("left",e.value)}})),T.select('[id="'+c+'"]').dataset.attributes=i}T.select("#special_module_xml").value=d.xml?d.xml:(new XMLSerializer).serializeToString(d[0]),i(7,y.xml=d.xml?d.xml:(new XMLSerializer).serializeToString(d[0]),y),s(d.xml?d.xml:(new XMLSerializer).serializeToString(d[0]))}}let H,z,X,W,Y;function q(e){let t=X.parentNode,n=H-e.x;i(22,H=e.x),t.style.width=parseInt(getComputedStyle(t,"").width)-n+"px"}function j(e){let t=W.parentNode,n=z-e.y;i(23,z=e.y),t.style.height=parseInt(getComputedStyle(t,"").height)-n+"px"}function R(e){let t=W.parentNode,n=H-e.x,s=z-e.y;i(22,H=e.x),i(23,z=e.y),t.style.width=parseInt(getComputedStyle(t,"").width)-n+"px",t.style.height=parseInt(getComputedStyle(t,"").height)-s+"px"}A((()=>{T.createLink(window.itemUrl+"clsSMHotspot/css/hotspot.min.css",{preload:!0}),function(){i(7,y.xml=n,y);let e=L(n);if(e)switch(e.smxml.div._type=e.smxml.div._type?e.smxml.div._type:"hotspot",i(7,y.valueMultiple=x[e.smxml.div._type],y),x[e.smxml.div._type]){case"1":case"2":!function(e){i(7,y.cdata=e.smxml.div.__cdata,y),i(0,c=e.smxml._height+"px"),i(1,d=e.smxml._width+"px"),T.select("#text0","show"),T.selectAll(".drawImage,#hptmain","hide"),T.find(document,"canvas")&&T.find(document,"canvas").remove();!function(e){e=e.replace(/%{/gm,'<span data-type="select" class="alert alert-info" cursor="pointer" style="padding: 5px;outline: none;line-height:40px;" contentEditable="true">').replace(/}%/gm,"</span>"),T.find("#mainContent",".tinymce-editor-response").innerHTML=e}(e.smxml.div.__cdata)}(e);break;case"3":!function(e){i(7,y.bgImg=e.smxml._bgimg,y),i(7,y.lineColor=e.smxml.div._linecolor,y);let t=new Image;t.onload=function(){i(0,c=e.smxml._height>this.height?e.smxml._height+"px":this.height+"px"),i(1,d=e.smxml._width>this.width?e.smxml._width+"px":this.width+"px"),T.find("#previewSection",".reset").click(),T.find("#mainContent","#hptdraw canvas",{action:"attr",actionData:{height:c,width:d,correctans:e.smxml.div.__cdata}}),S()},t.src=ae+e.smxml._bgimg,i(7,y.bgImg=e.smxml._bgimg,y),T.selectAll(".drawImage","toggleClass","d-none"),T.selectAll("#text0,#hptmain","hide"),k()}(e);break;case"4":!function(e){i(7,y.hotBorder=e.smxml.div._border,y),i(7,y.hotBorderColor=e.smxml.div._bordercolor,y),i(7,y.bgImg=e.smxml._bgimg,y),i(0,c=e.smxml._height+"px"),i(7,y.alt=e.smxml._alt,y),i(1,d=e.smxml._width+"px"),i(4,g=e.smxml.div._width+"px"),i(3,u=e.smxml.div._height+"px"),i(5,p=parseInt(e.smxml.div._left)+4+"px"),i(2,m=parseInt(e.smxml.div._top)+2+"px");let t=new Image;t.src=ae+e.smxml._bgimg,t.onload=function(){i(0,c=this.height+"px"),i(1,d=this.width+"px"),w=e.smxml.div._imgheight?e.smxml.div._imgheight+"px":"auto !important",b=e.smxml.div._imgwidth?e.smxml.div._imgwidth+"px":"auto !important",i(7,y.imgwidth=b,y),i(7,y.imgheight=w,y),T.select("#hptmain","css",{height:c,width:d})},T.select("#hptmain","toggleClass","d-none"),T.selectAll(".drawImage,#text0","hide"),T.find(document,"canvas",{action:"remove"}),k()}(e),T.bind(document,"keydown",(e=>{if(e.ctrlKey&&e.shiftKey)switch(e.keyCode.toString()){case"37":M(-10,0,0,0);break;case"38":M(0,-10,0,0);break;case"39":M(10,0,0,0);break;case"40":M(0,10,0,0)}else if(e.shiftKey)switch(e.keyCode.toString()){case"37":M(-1,0,0,0);break;case"38":M(0,-1,0,0);break;case"39":M(1,0,0,0);break;case"40":M(0,1,0,0)}else if(e.ctrlKey)switch(e.keyCode.toString()){case"37":M(0,0,0,-10);break;case"38":M(0,0,-10,0);break;case"39":M(0,0,0,10);break;case"40":M(0,0,10,0)}else switch(e.keyCode.toString()){case"27":T.selectAll(".dragable-container .ui-draggable","removeClass","elemActive");break;case"38":e.preventDefault(),M(0,0,-1,0);break;case"40":e.preventDefault(),M(0,0,1,0)}}))}tinyMCE.PluginManager.add("res",(function(e){e.addMenuItem("resp",{text:"Add Token",id:"addToken",onclick(){_()},context:"insert",prependToContext:!0})})),tinymce.init({selector:".tinymce-editor-response",inline:!0,theme:"modern",min_width:100,resize:!0,menubar:!1,toolbar:!1,elementpath:!1,statusbar:!1,force_br_newlines:!0,remove_trailing_brs:!0,forced_root_block:!1,paste_as_text:!0,extended_valid_elements:"span[onClick|contentEditable]",valid_elements:"*[*]",extended_valid_elements:"uc:syntax,uc:ref",custom_elements:"uc:syntax,~uc:ref",plugins:["res contextmenu paste"],contextmenu:"link resp"}),T.listen(document,"mousedown",".draggable",B),v={},T.listen(document,"touchstart",".tinymce-editor-response",(()=>{v.s=(new Date).getTime()})),T.listen(document,"touchend",".tinymce-editor-response",(()=>{v.e=(new Date).getTime()-v.s,v.e/1e3>1&&(_(),v={})})),T.listen(document,"click","#upload_media",(()=>{window.setImage("backgroundImage")})),T.bind(document,"click",(()=>{i(7,y.image_url=ae+""+T.select("#backgroundImage").value,y)}))}()}));return e.$$set=e=>{"xml"in e&&i(20,n=e.xml),"getChildXml"in e&&i(21,s=e.getChildXml)},e.$$.update=()=>{e.$$.dirty[0],e.$$.dirty[0]},[c,d,m,u,g,p,x,y,X,W,Y,function(e){let t=L(y.xml),n=e,s=!0,a=!0,l=!1;if("imagehighlight"==t.smxml.div._type){let e=new Image;e.onload=function(){l?(i(0,c=t.smxml._height+"px"),i(1,d=t.smxml._width+"px")):(i(0,c=this.height+"px"),i(1,d=this.width+"px")),this.width>=100&&this.width<=1e3?(s=!0,this.height>=80&&this.height<=550?a=!0:(T.alert(h.height_warning),a=!1)):(T.alert(h.width_warning),s=!1),a&&s?l?i(7,y.openImg=!0,y):C(n):(i(7,y.openImg=!0,y),e.src=ae+t.smxml._bgimg,T.selectAll("#backgroundImage").value=t.smxml._bgimg,l=!0)},e.src=ae+T.select("#backgroundImage").value}else C(n)},function(){i(7,y.openDrag=!1,y),i(7,y.openImg=!1,y)},function(){T.select("#backgroundImage").value=y.bgImg,i(7,y.image_url=ae+""+y.bgImg,y),T.select(T.select("#backgroundImage").previousElementSibling,"css",{transform:"scale(0.75) translate(0px, -28px)",color:"rgb(0, 188, 212)"}),y.hotBorder&&(T.select("#hotBorder").value=y.hotBorder,T.select(T.select("#hotBorder").previousElementSibling,"css",{transform:"scale(0.75) translate(0px, -28px)",color:"rgb(0, 188, 212)"})),y.hotBorderColor&&(T.select("#hotBorderColor").value=y.hotBorderColor,T.select(T.select("#hotBorderColor").previousElementSibling,"css",{transform:"scale(0.75) translate(0px, -28px)",color:"rgb(0, 188, 212)"})),i(7,y.openImg=!0,y)},function(){i(7,y.openDrag=!0,y);var e=setTimeout((function(){T.select("#dragHeight").value=parseInt(T.select("#ID0").style.height),T.select("#dragWidth").value=parseInt(T.select("#ID0").style.width),T.select("#dragTop").value=parseInt(T.select("#ID0").style.top),T.select("#dragLeft").value=parseInt(T.select("#ID0").style.left),clearTimeout(e)}),300)},B,function(e){i(7,y.lineColor=e.target.value,y),window.color=y.lineColor},function(e){i(22,H=e.x),document.removeEventListener("mousemove",j,!1),document.addEventListener("mousemove",q,!1),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",q,!1),document.removeEventListener("mousemove",j,!1),document.removeEventListener("mousemove",R,!1)}),!1)},function(e){i(23,z=e.y),document.removeEventListener("mousemove",q,!1),document.addEventListener("mousemove",j,!1),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",q,!1),document.removeEventListener("mousemove",j,!1)}),!1)},function(e){i(22,H=e.x),i(23,z=e.y),document.removeEventListener("mousemove",q,!1),document.removeEventListener("mousemove",j,!1),document.addEventListener("mousemove",R,!1),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",q,!1),document.removeEventListener("mousemove",j,!1),document.removeEventListener("mousemove",R,!1)}),!1)},n,s,H,z,function(e){l[e?"unshift":"push"]((()=>{X=e,i(8,X)}))},function(e){l[e?"unshift":"push"]((()=>{W=e,i(9,W)}))},function(e){l[e?"unshift":"push"]((()=>{Y=e,i(10,Y)}))},function(){y.alt=this.value,i(7,y)},function(){y.hotBorder=E(this),i(7,y)},function(){y.hotBorderColor=E(this),i(7,y)},function(){y.lineColor=E(this),i(7,y)},function(t){e.$$.not_equal(y.openImg,t)&&(y.openImg=t,i(7,y))},function(t){e.$$.not_equal(y.openDrag,t)&&(y.openDrag=t,i(7,y))},()=>i(7,y.snackback=!1,y),function(t){e.$$.not_equal(y.snackback,t)&&(y.snackback=t,i(7,y))}]}export default class extends t{constructor(e){super(),i(this,e,oe,se,n,{xml:20,getChildXml:21},R,[-1,-1,-1])}}
//# sourceMappingURL=Hotspot-809ec307.js.map