import{G as t,S as e,i,s,F as n,e as a,j as r,c as l,b as o,f as c,h as d,m as h,t as p,a as m,o as g,d as u,p as w,X as f,A as x,R as v,q as b,g as y,u as A,V as _,l as S,W as C}from"./main-55a8fd68.js";import{I}from"./ItemHelper-1ab13857.js";const k=new t;class N{constructor(){this.userAnsXML="<SMANS></SMANS>",this.xaxis=[],this.yaxis=[],this.count=0,this.drawstr="",this.elemId="#hptmain0",this.labBinded=!0,this.result=!1,this.temp=0}readyThis(t,e,i,s){if(t="#"+t,!e){this.labBinded=!0;const e=function(e){if(this.labBinded){let i=e,s="";i.classList.contains("selected")?(i.getAttribute("data-userans",0),i.classList.remove("selected")):(i.getAttribute("data-userans",1),i.classList.add("selected")),k.find(t,"[type] .textClick.selected","all").forEach((function(t,e){s=0==e?t.textContent:s+"|"+t.textContent})),k.find(t,"[type]",{action:"attr",actionData:{"data-userans":s}})}},i=function(e){if(this.labBinded){let i="";"SPAN"==e.target?.nodeName?(k.select(e.target,"removeClass",["selecttext","selected"]),this.removespan(e.target,t,0)):this.highlightText(t),k.find(t,"[type] .selecttext.selected","all").forEach((function(t,e){i=0==e?t.textContent:i+"|"+t.textContent}));let s=k.find(t,"[type]");k.select(s,"attr",{"data-userhtml":s.innerHTML,"data-userans":i})}};k.listen(t,"touchstart",".textClick",e.bind(this)),k.listen(t,"touchend",".textClick",e.bind(this)),k.listen(t,"click",".textClick",e.bind(this)),k.listen(t,"touchstart",'[type="textselect"]',i.bind(this)),k.listen(t,"touchend",'[type="textselect"]',i.bind(this)),k.listen(t,"click",'[type="textselect"]',i.bind(this))}}check_Ans(t){let e={inNativeIsCorrect:!1,userAnswers:""};this.userAnsXML="<smans type='4'>\\n",this.result=!0,this.temp=0;let i=k.select(t).children;for(let e=0;e<i.length;e++)this.userAnsXML=this.checkChildAnswer(t,i[e],this.userAnsXML);return this.userAnsXML+="</smans>",window.ISSPECIALMODULEUSERXMLCHANGE=1,e.userAnswers=k.select("#special_module_user_xml").value,"undefined"!=typeof calculatePoint&&calculatePoint(k.select(t).getAttribute("totalcorrectans"),temp),window.inNative&&(window.getHeight?.(),e.inNativeIsCorrect=this.result,window.postMessage(JSON.stringify(e),"*")),{uXml:this.userAnsXML,status:this.result}}checkChildAnswer(t,e,i){let s=e.getAttribute("type");switch(s){case"textclick":case"textselect":var n=e.getAttribute("data-correctans").split("|").sort().join("|"),a=e.getAttribute("data-userans").split("|").sort();n!=(a=(a=a.filter((function(t){return t}))).join("|"))&&(this.result=!1),"undefined"!=typeof calculatePoint&&e.children.forEach((t=>{t.classList.contains("selected")&&t.getAttribute("data-userans")==t.getAttribute("data-correctans")&&this.temp++})),this.userAnsXML+="textselect"==s?`<div id="${e.getAttribute("id")}" data-userHtml="${escape(e.getAttribute("data-userhtml"))}" data-userAns="${escape(e.getAttribute("data-userans"))}"></div>\\n`:`<div id="${e.getAttribute("id")}" data-userAns="${escape(e.getAttribute("data-userans"))}"></div>\\n`}return this.userAnsXML}showansdrag(t,e,i){void 0===i&&(i=0);let s=k.select(t).children;if(s)for(let n=0;n<s.length;n++)this.showchilddragans(t,s[n],e,i)}showchilddragans(t,e,i,s){let n=k.select(e);switch(n.getAttribute("type")){case"textclick":if("c"==i){k.find(n,".show_correct,.show_incorrect","all").length>0&&(k.find(n,".show_correct,.show_incorrect",{action:"removeClass",actionData:["show_correct","show_incorrect"]}),k.find(n,".correct_incorrect_icon",{action:"remove"}),k.find(n,".correct_incorrect_icon",{action:"removeAttr",actionData:"style"}));let s=e.getAttribute("data-correctans").split("|");e.getAttribute("type");s.forEach((e=>{this.selectText(t,e,i,"selected")}))}else if("u"==i){e.getAttribute("type");try{var a=decodeURIComponent(e.getAttribute("data-userans"))}catch(t){a=decodeURIComponent(unescape(e.getAttribute("data-userans")))}if(a=(a=a.split("|")).filter((function(t){return t})),void 0!==s&&1==s){k.find(t,".selected",{action:"removeClass",actionData:"selected"});var r=e.getAttribute("data-correctans").split("|");a.forEach((e=>{let s="show_incorrect";k.findInArray(e,r)?(s="show_correct",this.selectText(t,e,i,s)):this.selectText(t,e,i,s)}))}else a.forEach((e=>{this.selectText(t,e,"c","selected"),k.select(t+" p span").length&&k.select(t+" p span").remove(),k.select(".textClick","removeClass",["show_incorrect","show_correct"])}))}break;case"textselect":if("c"==i){k.find(n,".show_correct,.show_incorrect").length>0&&(k.find(n,".show_correct,.show_incorrect",{action:"removeClass",actionData:["show_correct","show_incorrect"]}),k.find(n,".correct_incorrect_icon",{action:"removeAttr",actionData:"style"}));r=e.getAttribute("data-correctans").split("|"),e.getAttribute("type");k.select(e,"html",e.getAttribute("data-correcthtml").replace(/<span>/g,"</span>"))}else if("u"==i){e.getAttribute("type");try{a=decodeURIComponent(e.getAttribute("data-userans"))}catch(t){a=decodeURIComponent(unescape(e.getAttribute("data-userans")))}if(a=(a=a.split("|")).filter((function(t){return t})),""!=e.getAttribute("data-userhtml")||"undefined"==e.getAttribute("data-userhtml")){var l=e.getAttribute("data-userhtml");try{l=decodeURIComponent(l);var o=decodeURIComponent(l)}catch(t){console.log(t)}k.select(e,"html",o)}if(void 0!==s&&1==s){let t='<span class="icomoon-new-24px-checkmark-circle-1 font-weight-bold" style="color:green;vertical-align:super;">',i='<span class="icomoon-new-24px-cancel-circle-1 font-weight-bold red" style="vertical-align: super;">';k.insert(e.querySelector('span[userans="1"]span[correctans="1"]'),'<span class="correct_incorrect_icon" style="position:absolute;z-index:100;width:18px;height:18px;bottom:17px;background:white;border-radius:12px;font-size: 18px;"> '+t+"</span></span>","beforeend"),k.insert(e.querySelector('span[userans="1"]span[correctans="0"]'),'<span class="correct_incorrect_icon" style="position:absolute;z-index:100;width:18px;height:18px;bottom:17px;background:white;border-radius:12px;font-size: 18px;"> '+i+"</span></span>","beforeend")}}break;case"imagehighlight":{let e=k.find(t,"canvas"),s=k.select("#special_module_parse").value,n=s.substring(s.indexOf("{"),s.lastIndexOf("}")+1);if(""!=n&&(n=JSON.parse(n)),this.drawOnCanvas(e,n,window.color),"c"==i){let t=e.getAttribute("correctans");""!=t&&(t=JSON.parse(t)),this.drawOnCanvas(e,t,"green")}break}}}calculateArea(t,e,i){return{top:Math.min.apply(Math,i),left:Math.min.apply(Math,e),width:Math.max.apply(Math,e)-Math.min.apply(Math,e),height:Math.max.apply(Math,i)-Math.min.apply(Math,i)}}getCoordinate(t,e,i,s){return 0==s?this.drawstr='{"'+ ++s+'":{"x":['+e+'],"y":['+i+"]}}":(this.drawstr=k.select("#special_module_parse").value,this.drawstr=drawstr.substring(drawstr.indexOf("{"),drawstr.lastIndexOf("}")+1),this.drawstr=drawstr.slice(0,-1),this.drawstr+=',"'+ ++s+'":{"x":['+e+'],"y":['+i+"]}}"),k.selectAll(k.select(t).children,"attr",{userans:this.drawstr}),this.createUserAnsXMLDraw(this.drawstr),this.userAnsXML}update_HTMLValue(){let t=k.parseHtml(k.select("#special_module_xml").value),e="",i="";if(t)for(let s of t.attributes)switch(na_attr.nameme){case"bgimg":e=s.value;break;case"path":i=s.value}let s=k.children(t,"div"),n=s.getAttribute("top"),a=s.getAttribute("left"),r=s.getAttribute("width"),l=s.getAttribute("height");k.select("#area","css",{height:l,top:n,width:r,left:a}),e&&i&&k.select("#im","attr",{src:i+"/"+e})}movetarget(t,e,i){let s;t.style.display="",!window.event&&i.layerX?(t.style.top=i.layerY-t.height/2+"px",t.style.left=i.layerX-t.width/2+"px"):(t.style.top=i.offsetY-t.height/2+"px",t.style.left=i.offsetX-t.width/2+"px"),s=this.checkmodule(t,e),this.createUserAnsXML(t.style.top,t.style.left);let n=document.getElementById("special_module_user_xml");n.value=this.userAnsXML,n=document.getElementById("answer"),n.checked=s>0,"undefined"!=typeof calculatePoint&&(this.temp=1==s,calculatePoint(1,s))}createUserAnsXMLDraw(t){this.userAnsXML='<SMANS type="4"><div userans="'+t+'"></div></SMANS>'}createUserAnsXML(t,e){this.userAnsXML='<SMANS type="4"><div targetTop="'+parseInt(t)+'" targetLeft="'+parseInt(e)+'" /></SMANS>'}checkmodule(t,e){let i=0;return parseInt(t.style.top)+t.height/2>=parseInt(e.style.top)&&parseInt(t.style.top)+t.height/2<=parseInt(e.style.top)+parseInt(e.style.height)&&parseInt(t.style.left)+t.width/2>=parseInt(e.style.left)&&parseInt(t.style.left)+t.width/2<=parseInt(e.style.left)+parseInt(e.style.width)&&(i=1),i}drawOnCanvas(t,e,i){if(t){let s=0!=t.toString().indexOf("d")?document.getElementById(t.getAttribute("id")):document.getElementById(t),n=null!=s?s.getContext("2d"):"",a=Object.keys(e).length;if(""!=e&&""!=n)for(let t=1;t<=a;t++)for(let s=0;s<=e[t].x.length;s++)n.beginPath(),n.lineWidth="4",n.strokeStyle=i,n.moveTo(e[t].x[s],e[t].y[s]),n.lineTo(e[t].x[s+1],e[t].y[s+1]),n.stroke()}}compareDrawing(t,e,i){let s=0,n=this.getAreaVal(t),a=this.getAreaVal(e),r=0,l=0,o=Object.keys(a).length,c=Object.keys(n).length;for(let t=1;t<=o;t++){for(let e=1;e<=c;e++)if(n[e].height<=a[t].height&&n[e].width<=a[t].width&&n[e].top>=a[t].top&&a[t].left+a[t].width-(n[e].left+n[e].width)>=0&&n[e].left>=a[t].left&&a[t].top+a[t].height-(n[e].top+n[e].height)>=0){r++;break}"undefined"!=typeof calculatePoint&&(t==r&&l++,calculatePoint(k.select(i).getAttribute("totalcorrectans"),l))}return o==r&&o==c&&(s=1),s}getAreaVal(t){let e=Object.keys(t).length;if(""!=t){let i=[];for(let s=1;s<=e;s++)i[s]=this.calculateArea("",t[s].x,t[s].y);return i}}selectText(t,e,i,s){let n=k.selectAll(t+" p");for(var a=0;a<n.length;a++){let t=n[a];if(t.textContent.trim()==e&&(t.classList.add(s),"u"==i)){let e;e="show_correct"==s?'<span class="icomoon-new-24px-checkmark-circle-1 font-weight-bold" style="color:green;vertical-align:7px">':'<span class="icomoon-new-24px-cancel-circle-1 font-weight-bold red" style="vertical-align:7px">',k.insert(t,'<span class="correct_incorrect_icon" style="position:absolute;z-index:100;width:18px;height:18px;bottom:16px;background:white;border-radius:12px;font-size: 18px;"> '+e+"</span></span>")}}}highlightText(t){if(0!=this.getSelected().getRangeAt(0).endOffset){this.snapSelectionToWord();let i=this.getSelected().getRangeAt(0),s=(i.startOffset,k.find(t,"[type]").getAttribute("data-correctans").split("|"));var e=i.toString();if(e=e.trim()){let t=k.findInArray(e,s)?1:0;this.pasteHtmlAtCaret("<span class='selecttext selected' correctans="+t+" userans='1'>"+e+"</span> ")}}}snapSelectionToWord(){let t;if(window.getSelection&&(t==window.getSelection()).modify){if(t=window.getSelection(),""!=t&&!t.isCollapsed){var e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);var i=e.collapsed;e.detach();var s=t.focusNode,n=t.focusOffset;t.collapse(t.anchorNode,t.anchorOffset),i?(k.findInArray(t.anchorNode.textContent.charAt(t.anchorOffset-1),[",",".","!","?",";",")","}"])&&(t.modify("move","backward","character"),t.modify("move","forward","word")),t.extend(s,n),t.modify("extend","forward","character"),t.modify("extend","backward","word")):(t.modify("move","forward","character"),t.modify("move","backward","word"),t.extend(s,n),k.findInArray(t.anchorNode.textContent.charAt(n-1),[",",".","!","?",";",")","}"])&&(t.modify("extend","backward","character"),t.modify("extend","forward","word")))}}else if(t==document.selection&&"Control"!=t.type){let e=t.createRange();if(e.text){for(e.expand("word");/\s$/.test(e.text);)e.moveEnd("character",-1);e.select()}}}pasteHtmlAtCaret(t){let e,i;if(window.getSelection){if(e=window.getSelection(),e.getRangeAt&&e.rangeCount){i=e.getRangeAt(0),i.deleteContents();var s=document.createElement("div");s.innerHTML=t;for(var n,a,r=document.createDocumentFragment();n=s.firstChild;)a=r.appendChild(n);i.insertNode(r),a&&(i=i.cloneRange(),i.setStartAfter(a),i.collapse(!0),e.removeAllRanges(),e.addRange(i))}}else document.selection&&"Control"!=document.selection.type&&document.selection.createRange().pasteHTML(t)}getSelected(){if(window.getSelection)return window.getSelection();if(document.getSelection)return document.getSelection();var t=document.selection&&document.selection.createRange();return!!t.text&&t.text}removespan(t,e,i){let s=t.innerHTML,n=new RegExp("<\\/?span[^>]*>","g");s=s.replace(n,""),t.parentNode.replaceChild(document.createTextNode(s),t),i||k.find(e,"[type]",{action:"html",actionData:k.find(e,"[type]").innerHTML})}modeOnHot(t){k.selectAll(".test, .review","addClass","h"),t?(k.selectAll(".review","removeClass","h"),this.unBindLab(),this.showansdrag(this.elemId,"u",1)):(k.selectAll(".test","removeClass","h"),k.selectAll(".review","addClass","h"),this.bindLab(),this.showansdrag(this.elemId,"u",0))}unBindLab(){this.labBinded=!1,k.find(this.elemId,".hotArea0.hotArea",{action:"css",actionData:{display:"block"}}),k.find(this.elemId,".hotSpotImg",{action:"css",actionData:{pointerEvents:"none"}})}bindLab(){this.labBinded=!0,k.find(this.elemId,".hotArea0.hotArea","css",{display:"none"}),k.find(this.elemId,".hotSpotImg","css",{pointerEvents:"auto"})}}function M(t,e){return!0===isNaN(Number(t))?this.x=0:this.x=t,!0===isNaN(Number(e))?this.y=0:this.y=e,{X:this.x,Y:this.y}}const $=new t;class T{constructor(t){this.prevPoint=void 0,this.defaultOptions={target:"",penSize:1,width:t.width,height:t.height,cssClass:"",onClick:t=>{},onMove:t=>{},onPaint:t=>{},onRelease:t=>{}},this.penWidth=2,this.drawing=!1,this.cap="round",this.ID="dooScribCanvas"+Math.floor(100*Math.random()+1),this.drawingSurface="",t&&(this.Settings={...this.defaultOptions,...t}),console.log(this.Settings),!0===isNaN(this.Settings.height)&&(this.Settings.height=100),!0===isNaN(this.Settings.width)&&(this.Settings.width=100),this.init()}init(){let t=this.Settings.target;t?("hptmain0"==t.getAttribute("id")&&$.empty(t),$.insert(t,`<canvas id='${this.ID}' tabindex='0' class='relative ${this.Settings.cssClass}' type='${this.Settings.type}' correctans='${this.Settings.correctans}' userans=''  height='${this.Settings.height}' width='${this.Settings.width}'></canvas>`,"beforeend"),this.penSize(this.Settings.penSize),this.drawingSurface=document.getElementById(this.ID).getContext("2d"),this.drawingSurface.lineWidth=this.penSize(),this.drawingSurface.lineCap=this.cap,!1===this.hasTouch()?(document.getElementById(this.ID).addEventListener("mousedown",this.clickDown.bind(this),!0),document.getElementById(this.ID).addEventListener("mousemove",this.moved.bind(this),!0),document.getElementById(this.ID).addEventListener("mouseup",this.clickUp.bind(this),!0)):(document.getElementById(this.ID).addEventListener("touchstart",this.clickDown.bind(this),!0),document.getElementById(this.ID).addEventListener("touchmove",this.moved.bind(this),!0),document.getElementById(this.ID).addEventListener("touchend",this.clickUp.bind(this),!0))):console.error("Target not defined")}normalizeTouch(t){if(!0===this.hasTouch()){let e=window.scrollY;["touchstart","touchmove"].indexOf(t.type)>-1&&(t.clientX=t.targetTouches[0].pageX,t.clientY=t.targetTouches[0].pageY-e),["touchend"].indexOf(t.type)>-1&&(t.clientX=t.changedTouches[0].pageX,t.clientY=t.changedTouches[0].pageY-e)}return t}clickDown(t){if(!0===this.isDrawing())return;t||(t=window.event),!0===this.hasTouch()&&(t.preventDefault(),t=this.normalizeTouch(t));let e=$.offset(this.Settings.target),i=window.scrollY,s=new M(t.clientX-e.left,t.clientY-(e.top-i));return this.prevPoint=s,this.drawing=!0,this.Settings.onClick(s),!1}moved(t){t||(t=window.event),!0===this.hasTouch()&&(t.preventDefault(),t=this.normalizeTouch(t));var e=$.offset(this.Settings.target),i=window.scrollY,s=new M(t.clientX-e.left,t.clientY-(e.top-i));return!0===this.isDrawing()?(this.drawLine(this.prevPoint.X,this.prevPoint.Y,s.X,s.Y),this.prevPoint=s,this.Settings.onPaint(s)):this.Settings.onMove(s),!1}clickUp(t){if(!1===this.isDrawing())return;!0===this.hasTouch()&&(t.preventDefault(),t=this.normalizeTouch(t));let e=$.offset(this.Settings.target),i=window.scrollY,s=new M(t.clientX-e.left,t.clientY-(e.top-i));return this.Settings.onRelease(s),this.drawing=!1,!1}hasTouch(){return"ontouchstart"in window}penSize(t){return void 0!==t&&!1===isNaN(Number(t))&&(this.penWidth=t),this.penWidth}isDrawing(){if(this.Settings.editable)return this.drawing}lineCap(t){if(void 0!==t)switch(t){case"butt":case"round":case"square":this.cap=t}return this.cap}lineColor(t){if(void 0!==t){let e=$.parseHtml("<div id='stub' style='backgroundColor:white'></div>");e.style.backgroundColor=t;let i=e.style.backgroundColor;void 0!==i&&""!==i&&(window.color=t)}return window.color}context(){return this.drawingSurface}clearSurface(){let t=$.find(document,"canvas").getAttribute("width").replace("px",""),e=$.find(document,"canvas").getAttribute("height").replace("px","");this.drawingSurface.clearRect(0,0,t,e)}drawLine(t,e,i,s){void 0!==t&&void 0!==e&&void 0!==i&&void 0!==s&&!1===isNaN(Number(t))&&!1===isNaN(Number(e))&&!1===isNaN(Number(i))&&!1===isNaN(Number(s))&&(this.drawingSurface.lineCap=this.cap,this.drawingSurface.strokeStyle=window.color,this.drawingSurface.lineWidth=this.penWidth,this.drawingSurface.beginPath(),this.drawingSurface.moveTo(t,e),this.drawingSurface.lineTo(i,s),this.drawingSurface.stroke())}}function L(t,e,i,s,n){let a,r={x:t.layerX,y:t.layerY,top:0,left:0,uXml:"",ans:!1,ans_h:e,ans_w:i,ans_left:s,ans_top:n};var l,o;return t.layerX&&t.layerY?(r.top=t.layerY-13,r.left=t.layerX-13):(r.top=t.offsetY-13,r.left=t.offsetX-13),a=function(t){let e=0,i=t.ans_top+t.ans_h,s=t.ans_left+t.ans_w;return t.top>t.ans_top&&t.top<i&&t.left>t.ans_left&&t.left<s&&(e=1),e}(r),r.uXml=(l=r.top,o=r.left,'<SMANS type="4"><div targetTop="'+parseInt(l)+'" targetLeft="'+parseInt(o)+'" /></SMANS>'),"undefined"!=typeof calculatePoint&&(temp=1==a?1:0,calculatePoint(1,temp)),r.ans=a>0,r}const{document:D}=n;function O(t){let e,i,s=t[21](t[17][t[13]])+"";return{c(){i=b(),e=new C(i)},m(t,n){e.m(s,t,n),d(t,i,n)},p(t,i){8192&i[0]&&s!==(s=t[21](t[17][t[13]])+"")&&e.p(s)},d(t){t&&g(i),t&&e.d()}}}function E(t){let e,i,s,n,l,h,p,m=t[16]&&R();return{c(){e=a("center"),i=a("div"),s=a("div"),s.innerHTML='<span class="icomoon-new-24px-reset-1 s3" style="vertical-align: text-top"></span>  \n\t\t\t\t\t\t\t<span class="position-relative bottom1">Reset</span>',n=o(),l=a("div"),p=o(),m&&m.c(),c(s,"id","reset"),y(s,"height","27px"),y(s,"width","90px"),c(s,"class","reset btn btn-outline-primary btn-sm mt-sm2 mr-sm2 float-end"),y(i,"height","32px"),y(i,"width",window.inNative?window.innerWidth:t[1].imgwidth),y(i,"background","#d9e7fd"),y(i,"border-top","2px solid #96bbf6"),c(l,"id","hptmain0"),c(l,"totalcorrectans",t[15]),c(l,"dd",h=t[1].imgwidth),y(l,"width",t[1].imgwidth||"250px"),y(l,"height",t[1].imgheight||"600px"),y(l,"background-image","url('"+(P+t[12])+"')"),y(l,"background-repeat","no-repeat"),y(l,"position","relative"),y(l,"border","2px solid #d9e7fd"),c(e,"key","imageHeight_3")},m(t,a){d(t,e,a),r(e,i),r(i,s),r(e,n),r(e,l),r(e,p),m&&m.m(e,null)},p(t,s){2&s[0]&&y(i,"width",window.inNative?window.innerWidth:t[1].imgwidth),32768&s[0]&&c(l,"totalcorrectans",t[15]),2&s[0]&&h!==(h=t[1].imgwidth)&&c(l,"dd",h),2&s[0]&&y(l,"width",t[1].imgwidth||"250px"),2&s[0]&&y(l,"height",t[1].imgheight||"600px"),4096&s[0]&&y(l,"background-image","url('"+(P+t[12])+"')"),t[16]?m||(m=R(),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},d(t){t&&g(e),m&&m.d()}}}function X(t){let e,i,s,n,l,h,p,m,u,w,f,x,v,b,C,I,k,N;return{c(){e=a("table"),i=a("tbody"),s=a("tr"),n=a("td"),l=a("div"),h=a("div"),p=a("img"),u=o(),w=a("div"),f=A(" "),v=o(),b=a("span"),c(p,"id","im0"),c(p,"tabindex","0"),y(p,"max-width","none"),y(p,"width",t[1].imgwidth),y(p,"height",t[1].imgheight),c(p,"class","hotSpotImg"),p.src!==(m=P+t[12])&&c(p,"src",m),c(p,"alt",t[0]),c(w,"id","hotArea"),c(w,"class","hotArea hotArea hotAreaPreview"),c(w,"style",x=`\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: ${t[9]};\n\t\t\t\t\t\t\t\t\t\t\t\tleft:${t[8]};\n\t\t\t\t\t\t\t\t\t\t\t\ttop:${t[5]};\n\t\t\t\t\t\t\t\t\t\t\t\theight:${t[6]};\n\t\t\t\t\t\t\t\t\t\t\t\twidth:${t[7]};\n\t\t\t\t\t\t\t\t\t\t\t`),c(b,"id","target"),c(b,"class","target targetImg icomoon-plus-circle-2 svelte-1m52s8g"),c(b,"style",C=`\n\t\t\t\t\t\t\t\t\t\t\t\tleft:${t[10]}px;\n\t\t\t\t\t\t\t\t\t\t\t\ttop:${t[11]}px;\n\t\t\t\t\t\t\t\t\t\t\t`),_(b,"showBlock",t[4]),c(h,"id","SM0"),c(h,"class","SM position-relative m-0 p-0"),c(h,"style",I=`\n\t\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\t\tmargin: 0px;\n\t\t\t\t\t\t\t\t\t\t\tpadding: 0px;\n\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\t\t\t\t\tborder: ${t[2]?t[2]+"px solid":""};\n\t\t\t\t\t\t\t\t\t\t\tborderColor: ${t[3]};\n\t\t\t\t\t\t\t\t\t\t`),c(l,"id","SM0"),c(l,"class","relative"),c(n,"class","border"),c(e,"id","hptmain0"),c(e,"class","smbase smhotspot border-0 h-auto w-auto")},m(a,o){d(a,e,o),r(e,i),r(i,s),r(s,n),r(n,l),r(l,h),r(h,p),r(h,u),r(h,w),r(w,f),r(h,v),r(h,b),k||(N=S(p,"click",t[18]),k=!0)},p(t,e){2&e[0]&&y(p,"width",t[1].imgwidth),2&e[0]&&y(p,"height",t[1].imgheight),4096&e[0]&&p.src!==(m=P+t[12])&&c(p,"src",m),1&e[0]&&c(p,"alt",t[0]),992&e[0]&&x!==(x=`\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: ${t[9]};\n\t\t\t\t\t\t\t\t\t\t\t\tleft:${t[8]};\n\t\t\t\t\t\t\t\t\t\t\t\ttop:${t[5]};\n\t\t\t\t\t\t\t\t\t\t\t\theight:${t[6]};\n\t\t\t\t\t\t\t\t\t\t\t\twidth:${t[7]};\n\t\t\t\t\t\t\t\t\t\t\t`)&&c(w,"style",x),3072&e[0]&&C!==(C=`\n\t\t\t\t\t\t\t\t\t\t\t\tleft:${t[10]}px;\n\t\t\t\t\t\t\t\t\t\t\t\ttop:${t[11]}px;\n\t\t\t\t\t\t\t\t\t\t\t`)&&c(b,"style",C),16&e[0]&&_(b,"showBlock",t[4]),12&e[0]&&I!==(I=`\n\t\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\t\tmargin: 0px;\n\t\t\t\t\t\t\t\t\t\t\tpadding: 0px;\n\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\t\t\t\t\tborder: ${t[2]?t[2]+"px solid":""};\n\t\t\t\t\t\t\t\t\t\t\tborderColor: ${t[3]};\n\t\t\t\t\t\t\t\t\t\t`)&&c(h,"style",I)},d(t){t&&g(e),k=!1,N()}}}function R(t){let e;return{c(){e=a("div"),c(e,"class","position-fixed index0"),y(e,"right","0"),y(e,"top","0"),y(e,"left","0"),y(e,"bottom","0"),y(e,"background","rgba(0,0,0,0.4)")},m(t,i){d(t,e,i)},d(t){t&&g(e)}}}function H(t){let e,i,s,n,w,f,x,v,b,y;function A(t,e){return"4"==t[17][t[13]]?X:"3"==t[17][t[13]]?E:O}s=new I({}),s.$on("setReview",t[19]),s.$on("unsetReview",t[20]);let _=A(t),S=_(t);return{c(){e=a("main"),i=a("center"),l(s.$$.fragment),n=o(),w=a("div"),S.c(),f=o(),x=a("input"),v=o(),b=a("textarea"),c(w,"id","previewArea"),c(w,"class","relative"),c(x,"type","hidden"),c(x,"id","special_module_parse"),c(x,"name","special_module_parse"),c(x,"userans",""),x.value=t[14],c(b,"class","h"),c(b,"id","special_module_user_xml"),c(e,"class","svelte-1m52s8g")},m(t,a){d(t,e,a),r(e,i),h(s,i,null),r(i,n),r(i,w),S.m(w,null),r(e,f),r(e,x),r(e,v),r(e,b),y=!0},p(t,e){_===(_=A(t))&&S?S.p(t,e):(S.d(1),S=_(t),S&&(S.c(),S.m(w,null))),(!y||16384&e[0])&&(x.value=t[14])},i(t){y||(p(s.$$.fragment,t),y=!0)},o(t){m(s.$$.fragment,t),y=!1},d(t){t&&g(e),u(s),S.d()}}}let P="//s3.amazonaws.com/jigyaasa_content_static/";function B(t,e,i){let{xml:s}=e,{uxml:n}=e,{ansStatus:a}=e,{isReview:r}=e,{showAns:l}=e,{editorState:o}=e;const c=new N;let d,h="",p="",m={textclick:"1",textselect:"2",imagehighlight:"3",hotspot:"4"},g={},u=0,b="gray",y=!1,A="",_="",S="",C="",I="none",k=0,M=0,$=0,D=0,O="",E="",X="",R=0,H=0,B="",Y="",z="black",U="",W=0,j=[],J=[],q=0,F=0;var V="textclick",G="",K="";function Q(){switch(i(13,X=h.smxml.div._type),R=h.smxml._height,H=h.smxml._width,null!=X&&""!=X||i(13,X=h.smxml._name.toLowerCase()),V=X,i(12,E=h.smxml._bgimg),m[X]){case"1":q=h.smxml._height+"px",F=h.smxml._width+"px",function(t){var e="",s=t.match(/%{(.*?)}%/gm);if(s){i(15,d=s.length);for(var n=0;n<s.length;n++)G=s[n].replace(/\s+/gm,"<uc:space>"),t=t.replace(s[n],G)}G="",t=t.split(" ");for(n=0;n<t.length;n++)t[n].match(/%{|%}/gm)?(t[n]=t[n].replace(/<uc:space>/gm," ").replace(/%{|}%/gm,""),e+='<p class="textClick" data-index="'+n+'" data-userans="0" data-correctans="1">'+t[n]+"</p>",G+=t[n]+"|"):e+='<p class="textClick" data-index="'+n+'" data-userans="0" data-correctans="0">'+t[n]+"</p>";G=G.replace(/\|$/gm,""),x.select(" #previewArea  #textID0").innerHTML=e}(h.smxml.div.__cdata),x.select(x.parent("#textID0"),"show","block"),x.selectAll('#drawPreview,table[id="hptmain2"]',"hide");break;case"2":isNaN(h.smxml._height)||(h.smxml._height=h.smxml._height+"px"),q=h.smxml._height,F=h.smxml._width+"px",function(t){G="";var e=t.match(/%{(.*?)}%/gm);if(e){for(var s=0;s<e.length;s+=1)G+=e[s].replace(/%{|}%/gm,"")+"|";K=t.replace(/%{/gm,'<span class="selecttext selected">').replace(/}%/gm,"<span>"),i(15,d=e.length),G=G.replace(/\|$/gm,"")}var n=t.replace(/%{|}%/gm,""),a=setTimeout(function(){x.select(" #previewArea  #textID0").innerHTML=n,clearTimeout(a)}.bind(self),100)}(h.smxml.div.__cdata),x.select(x.parent("#textID0"),"show","block"),x.selectAll('#drawPreview,table[id="hptmain2"]',"hide");break;case"3":{let t=new Image;t.addEventListener("load",(function(t){i(1,g.imgheight=h.smxml._height>this.height?h.smxml._height+"px":this.height+"px",g),i(1,g.imgwidth=h.smxml._width>this.width?h.smxml._width+"px":this.width+"px",g),x.find("#hptdraw0","canvas",{action:"attr",actionData:{height:g.imgheight,width:g.imgwidth}}),x.empty("#textID0"),it()}),!1),t.setAttribute("src",P+h.smxml._bgimg)}break;case"4":{i(12,E=h.smxml._bgimg),i(0,p=h.smxml._alt),i(11,M=parseFloat(h.smxml.div._top)),i(10,k=parseFloat(h.smxml.div._left)+13),$=parseFloat(h.smxml.div._height),D=parseFloat(h.smxml.div._width),i(0,p=h.smxml.div._alt),O=h.smxml.div.type,i(2,u=h.smxml.div._border),i(3,b=h.smxml.div._bordercolor),i(7,S=h.smxml.div._width+"px"),i(6,_=h.smxml.div._height+"px"),i(8,C=h.smxml.div._left+"px"),i(5,A=h.smxml.div._top+"px");let t=new Image;t.onload=function(){let t=this.height+"px",e=this.width+"px";i(1,g.imgheight=h.smxml.div._imgheight?h.smxml.div._imgheight+"px":"auto !important",g),i(1,g.imgwidth=h.smxml.div._imgwidth?h.smxml.div._imgwidth+"px":"auto !important",g),x.select("#hptmain0","css",{height:t,width:e})},t.src=P+h.smxml._bgimg}}}function Z(){r&&i(9,I="block");var t=new Image;if(t.onload=function(){"3"==m[X]?(i(1,g.imgheight=h.smxml._height>this.height?h.smxml._height+"px":this.height+"px",g),i(1,g.imgwidth=h.smxml._width>this.width?h.smxml._width+"px":this.width+"px",g)):(i(1,g.imgheight=h.smxml.div._imgheight?h.smxml.div._imgheight+"px":"auto !important",g),i(1,g.imgwidth=h.smxml.div._imgwidth?h.smxml.div._imgwidth+"px":"auto !important",g))},t.src=P+E,n){i(14,B=n);let t=f(n);t.SMANS&&t.SMANS.div&&(i(4,y=!0),i(10,k=t.SMANS.div._targetLeft),i(11,M=t.SMANS.div._targetTop))}}function tt(t){let e={};"textclick"==V||"textselect"==V?e=c.check_Ans("#previewArea #hptmain0"):(e=L(t,$,D,parseInt(C),parseInt(A)),i(4,y=!0),i(10,k=e.left),i(11,M=e.top),i(22,a=e.ans),o&&l(a?"Correct":"Incorrect")),v(e)}function et(){if(i(9,I="block"),"3"==m[X]){let t=x.find("#previewArea","canvas"),e=t.getAttribute("correctans");""!=e&&(e=JSON.parse(e)),c.drawOnCanvas(t,e,"green")}c.modeOnHot(1),x.select("#hptmain0","css",{pointerEvents:"none"})}function it(){if(i(9,I="none"),"3"==m[X]){x.find("#previewArea","canvas",{action:"remove"}),function(t,e){let n=x.find(t,"#hptmain0");t=n;let a=new T({target:n,width:+g.imgwidth.replace("px",""),height:+g.imgheight.replace("px",""),correctans:Y,cssClass:"drawSurface",penSize:4,type:"imagehighlight",editable:!e,onMove(){},onClick(){},onPaint(t){j.push(t.X),J.push(t.Y)},onRelease(s){!function(t,e,s){let n="",a=!1;if(!s){U="";var r=document.querySelector("#special_module_parse").value;""!=(r=r.substring(r.indexOf("{"),r.lastIndexOf("}")+1))?(r=Object.keys(JSON.parse(r)).length,U=c.getCoordinate(e,j,J,r)):U=c.getCoordinate(e,j,J,W),window.inNative&&window.getHeight&&window.getHeight(),window.ISSPECIALMODULEUSERXMLCHANGE=1,x.select("#special_module_user_xml","val",U),i(14,B=U),j=[],J=[];let t=x.find(e,"canvas").getAttribute("correctans"),s=x.find(e,"canvas").getAttribute("userans");""!=s&&(s=JSON.parse(s)),""!=t&&(t=JSON.parse(t));let d=c.compareDrawing(s,t,e),h="Incorrect";d>0?(a=!0,h="Correct",i(1,g.answerType3=!0,g),o&&l("Correct")):(a=!1,h="Incorrect",i(1,g.answerType3=!1,g)),o&&l(h),n=x.select("#special_module_user_xml").value,x.select("#answer").checked=d>0,window.inNative&&window.postMessage(JSON.stringify({inNativeIsCorrect:a,userAnswers:n}),"*")}}(0,t,e)}});z=String(s.match(/linecolor=\"([^\"]+)\"/gm)),z=z.substring("11",z.length-1),e||x.listen("#previewArea","click","#reset",(()=>{a.clearSurface(),U="",W=0,i(14,B=""),x.selectAll(x.select(t).children,"attr",{userans:""})}));window.surface=a}("#previewArea",0);var t=setTimeout((function(){let e=x.find("#previewArea","canvas"),i=x.select("#special_module_parse").value,s=i.substring(i.indexOf("{"),i.lastIndexOf("}")+1);""!=s&&(s=JSON.parse(s)),c.drawOnCanvas(e,s,z),clearTimeout(t)}),500)}c.modeOnHot(),x.select("#hptmain0","css",{pointerEvents:"auto"})}return w((async()=>{h=f(s),Q(),Z(),c.readyThis("hptmain0",r),r?c.modeOnHot(1):c.modeOnHot(),x.listen("#previewArea","click",".textClick",(function(){tt()})),x.listen("#previewArea","click",'[type="textselect"]',(function(){tt()}))})),t.$$set=t=>{"xml"in t&&i(23,s=t.xml),"uxml"in t&&i(24,n=t.uxml),"ansStatus"in t&&i(22,a=t.ansStatus),"isReview"in t&&i(25,r=t.isReview),"showAns"in t&&i(26,l=t.showAns),"editorState"in t&&i(27,o=t.editorState)},t.$$.update=()=>{if(33554432&t.$$.dirty[0]&&(r?et():it()),8421376&t.$$.dirty[0]|8&t.$$.dirty[1]&&s){let t=s.replace("\x3c!--[CDATA[","<![CDATA[").replace("]]--\x3e","]]>");t.match(/<\!\[CDATA\[{|<\!--\[CDATA\[{/gm)&&(i(34,Y=t.toString().match(/{(.*)}/gim)),i(15,d=Y.toString().match(/},"\d+"/gm)),i(15,d=d?d.pop():null),i(15,d=d?d.replace(/"|}|,/gm,""):1),t=t.replace(Y,""),i(34,Y=Y[0])),h=f(s),Q(),Z()}},[p,g,u,b,y,A,_,S,C,I,k,M,E,X,B,d,!1,m,tt,et,it,function(t){switch(t){case"1":case"2":{let t="",e="";if(n){let i=f(n);window.test=n,i?.smans?.div&&(t=i.smans.div["_data-userAns"],e=i.smans.div["_data-userHtml"])}return`\n\t\t\t\t\t\t<div is id="hptmain0" totalCorrectAns=${d}>\n\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\tid="textID0" \n\t\t\t\t\t\t\t\ttype="${V}" \n\t\t\t\t\t\t\t\tdata-correcthtml="${K}" \n\t\t\t\t\t\t\t\tdata-correctans="${G}"\n\t\t\t\t\t\t\t\tdata-userans="${t}" \n\t\t\t\t\t\t\t\tdata-userhtml="${e}" \n\t\t\t\t\t\t\t\tclass="drag-resize hotspotTxt" \n\t\t\t\t\t\t\t\tstyle="max-width:${F}; height:${q}; line-height: 1.4;"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`}default:return"<div>Incorrect question type</div>"}},a,s,n,r,l,o]}export default class extends e{constructor(t){var e;super(),D.getElementById("svelte-1m52s8g-style")||((e=a("style")).id="svelte-1m52s8g-style",e.textContent="main.svelte-1m52s8g{text-align:center !important;padding:1em;max-width:240px;margin:0 auto;font-size:26px}.targetImg.svelte-1m52s8g{display:none;position:absolute;z-index:10;width:26px;height:26px;border-radius:50%;background:#fff;color:#1c3ad4}.showBlock.svelte-1m52s8g{display:block}@media(min-width: 640px){main.svelte-1m52s8g{max-width:none}}",r(D.head,e)),i(this,t,B,H,s,{xml:23,uxml:24,ansStatus:22,isReview:25,showAns:26,editorState:27},[-1,-1])}}
//# sourceMappingURL=HotspotPreview-c34e1a8a.js.map
