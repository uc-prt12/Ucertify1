import{S as e,i as t,s as n,F as o,G as s,H as c,e as u,b as l,c as d,f as m,h as f,m as g,N as h,t as p,a as v,o as b,d as y,p as w,V as x,a0 as _,A,B as S,aa as k,w as T,a5 as C,u as j,g as I,j as F,r as M,U as $}from"./main-8f0f297b.js";var q={};function D(e){let t,r,n,a,i,o,s,c,h,w,x,_,A=S.calculate_answer+"",k=S.please_wait+"";return i=new C({props:{size:60}}),{c(){t=u("h4"),t.innerHTML='<div class="d-flex justify-content-between"><div>Review</div></div>',r=l(),n=u("div"),a=u("center"),d(i.$$.fragment),o=l(),s=u("h4"),c=j(A),h=u("br"),w=l(),x=j(k),m(t,"class","mt-1 font21 mb-4"),m(a,"class","mt-xl"),m(n,"id","remediationModel"),I(n,"overflow-y","auto"),I(n,"padding-right","20px")},m(e,u){f(e,t,u),f(e,r,u),f(e,n,u),F(n,a),g(i,a,null),F(a,o),F(a,s),F(s,c),F(s,h),F(s,w),F(s,x),_=!0},p:M,i(e){_||(p(i.$$.fragment,e),_=!0)},o(e){v(i.$$.fragment,e),_=!1},d(e){e&&b(t),e&&b(r),e&&b(n),y(i)}}}function O(e){let t,r=S.done+"";return{c(){t=j(r)},m(e,r){f(e,t,r)},p:M,d(e){e&&b(t)}}}function B(e){let t,r,n;return r=new $({props:{unelevated:!0,outlined:!0,color:"primary",$$slots:{default:[O]},$$scope:{ctx:e}}}),r.$on("Click",e[3]),{c(){t=u("div"),d(r.$$.fragment),m(t,"slot","footer"),m(t,"class","svelteFooter")},m(e,a){f(e,t,a),g(r,t,null),n=!0},p(e,t){const n={};4194304&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){n||(p(r.$$.fragment,e),n=!0)},o(e){v(r.$$.fragment,e),n=!1},d(e){e&&b(t),y(r)}}}function L(e){let t,r,n,a,i;function w(t){e[4](t)}let x={width:450,style:"background: #fff; border-radius: 5px;",class:"remove_right_margin",$$slots:{footer:[B],default:[D]},$$scope:{ctx:e}};return void 0!==e[0].remediationToggle&&(x.visible=e[0].remediationToggle),n=new o({props:x}),s.push((()=>c(n,"visible",w))),{c(){t=u("div"),t.innerHTML='<center><div id="frame"><iframe id="authoringFrame" title="Hardware Lab" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="650" width="94%" name="authoringFrame" data-authoring="1"></iframe></div></center> \n\t<input type="hidden" name="labAnswer" id="labAnswer" val="0"/> \n\t<input type="hidden" id="checkAnsStr" name="checkAnsStr" value=""/> \n\t<button id="clickRun" name="clickRun" style="display: none"></button>',r=l(),d(n.$$.fragment),m(t,"id","authoringArea")},m(e,a){f(e,t,a),f(e,r,a),g(n,e,a),i=!0},p(e,[t]){const r={};4194305&t&&(r.$$scope={dirty:t,ctx:e}),!a&&1&t&&(a=!0,r.visible=e[0].remediationToggle,h((()=>a=!1))),n.$set(r)},i(e){i||(p(n.$$.fragment,e),i=!0)},o(e){v(n.$$.fragment,e),i=!1},d(e){e&&b(t),e&&b(r),y(n,e)}}}function R(e){return(e=escape(e)).replace(/[*+\/@]|%20/g,(function(e){switch(e){case"*":e="%2A";break;case"+":e="%2B";break;case"/":e="%2F";break;case"@":e="%40";break;case"%20":e="+"}return e}))}function E(e,t,r){let{editorState:n}=t,{ucEditor:a}=t,i="",o="<smans></smans>",s="",c={};T({xml:"",uxml:"",module:"0",stepIndex:0,toggle:!1,testMode:"0",remediationToggle:!1,qxml:"",titleData:"",stemData:"",remediationData:"",remediationToggle:!1,webAutogradeNotCalled:!0,toggleMode:""}).subscribe((e=>{r(0,c=e)}));w((async()=>{r(0,c.xml=n.xml,c);let e=n.xml.match(/<smxml(.*?)>/gim).toString().match(/type="(.*?)"|type='(.*?)'/gim);e=e.toString().replace(/type=|"/gim,""),r(0,c.module=e,c),r(1,n={...n,activator:!0}),await x(),setTimeout((function(){s=m(n.xml,c.module.toString()),/Edge/i.test(navigator.userAgent)?A.select("#authoringFrame","attr",{height:window.innerHeight-31}):/Mac/i.test(navigator.userAgent)?A.select("#authoringFrame","attr",{height:window.innerHeight-60}):A.select("#authoringFrame","attr",{height:window.innerHeight+12}),A.select("#preview","hide"),A.find("#authoringArea","form",{action:"remove"}),A.insert("#authoringArea",s,"beforeend"),setTimeout((function(){A.find(document,'form[target="authoringFrame"]').submit(),r(1,n.activator=!0,n)}),100)}),200),A.listen(document,"click","#answerCheck",(()=>{u(),"17"!=c.module&&function(){A.select("#authoringFrame","attr",{"data-authoring":"0"});try{if("17"==c.module)o=A.select("#authoringFrame").contentWindow.getAnswerXMLLabsim(),o=JSON.parse(o.uxml);else if("18"==c.module)o=A.select("#authoringFrame").contentWindow.generateXML(),o=JSON.stringify(o.xml);else if("22"==c.module){let e=A.select("#authoringFrame").contentWindow.webAutoEvaluate();if(e){r(0,c.remediationToggle=!0,c),r(0,c.webAutogradeNotCalled=!1,c),A.select("#remediationModel","html",e);let t=e.replace(/\s=\s/gim,"=").match(/ans="(.*?)"/gim);t=t?t.toString().replace(/ans=|"/gim,""):"",u(q.ucfirst(t))}}else o=A.select("#authoringFrame").contentWindow.save_data()}catch(e){console.log(e)}c.webAutogradeNotCalled&&(A.find("#authoringArea","form"),s=function(e,t,r){switch(r){case"17":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/labsimulation/?in_editor=1"><input type="hidden" name="isReview" value="1"/><textarea class="h" name="qxml">'+R(e)+'</textarea><textarea class="h" name="uxml">'+R(t)+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"18":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/relationship/?in_editor=1"><input type="hidden" name="isReview" value="1"/><textarea class="h" name="qxml">'+R(e)+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"22":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/web/?in_editor=1"><input type="hidden" name="isReview" value="1"/><textarea class="h" name="qxml">'+e+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>'}}(c.qxml,o,c.module),A.insert("#authoringArea",s,"beforeend"),setTimeout((function(){A.select('form[target="authoringFrame"]').submit(),r(1,n={...n,activator:!0})}),100))}()})),A.listen(document,"click","#testMode",(function(){d(1),A.select("#testMode","attr",{id:"answerCheck"}).innerHTML=S.remediation})),setTimeout((function(){"17"==c.module&&A.bind("#authoringFrame","load",(()=>{A.select("#authoringFrame").contentDocument,r(1,n={...n,activator:!1})}))}),200),A.listen("#clickRun","click",(()=>{u(A.select("#checkAnsStr").value)})),l()})),_((()=>{A.select("#testMode","attr",{id:"answerCheck"}).innerHTML=S.remediation}));const u=()=>{"1"==c.testMode?(r(1,n={...n,message:"1"==A.select("#labAnswer").value?"Correct":"Incorrect"}),r(1,n={...n,snackback:!0})):r(1,n={...n,snackback:!1})};const l=async()=>{n.toggleMode!=c.toggleMode&&(1==n.toggleMode?(r(0,c.testMode=1,c),d(0)):(r(1,n.activator=!0,n),r(0,c.testMode=0,c),A.select("#headerTitle","html",S.authoring),A.select("#answerCheck","css",{visibility:"hidden",display:"none"}),A.select("#authoringFrame","attr",{"data-authoring":"1"}),A.find("#authoringArea","form",{action:"remove"}),s=m(c.qxml,c.module),A.insert("#authoringArea",s,"beforeend"),A.selectAll("#titleShow,#stemShow,#remediationShow","remove",{action:"remove"}),A.select("#title","html",c.titleData),A.select("#stem","html",c.stemData),A.select("#remediation","html",c.remediationData),A.selectAll("#title,#stem,#remediation","show"),A.empty("#authoringDiv player"),A.find("#authoringDiv","player",{action:"removeClass",actionData:"hidecontent"}),A.selectAll("#editor img").forEach((e=>{e.getAttribute("src").match(/\/\/s3.amazonaws.com\/jigyaasa_content_static/gm)||"editor-header-img"==e.getAttribute("id")||e.getAttribute("src",e.getAttribute("src"))})),setTimeout((function(){A.select('form[target="authoringFrame"]').submit(),a.initEditor(!1,"#authoringSection .ebook_item_text")}),100)),r(0,c.toggleMode=n.toggleMode,c))};async function d(e){r(1,n={...n,activator:!0}),A.empty("#authoringFrame"),A.find("#authoringArea","form",{action:"remove"}),i=await function(e){return new Promise(((t,r)=>{try{let r;setTimeout((function(){r="22"==c.module?"1"==e?c.qxml:A.select("#authoringFrame")?.contentWindow.save_data?.():"1"==e?c.qxml:A.select("#authoringFrame")?.contentWindow.generateXML?.(),t(r)}),50)}catch(e){r(e)}}))}(e),A.empty("#authoringDiv player"),k(A.select("#authoringDiv")),A.find("#authoringDiv","player",{action:"addClass",actionData:"hidecontent"}),A.selectAll("#editor img").forEach((e=>{e.getAttribute("src").match(/\/\/s3.amazonaws.com\/jigyaasa_content_static/gm)||"editor-header-img"==e.getAttribute("id")||e.getAttribute("src","//s3.amazonaws.com/jigyaasa_content_static/"+e.getAttribute("src"))})),A.select("#headerTitle","html",S.preview),A.select("#answerCheck","css",{visibility:"visible",display:"inline-block"}),A.select("#authoringFrame","attr",{"data-authoring":"0"});var t=function(e,t,r){switch(r){case"17":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/labsimulation/?in_editor=1"><textarea class="h" name="qxml" id="qxml">'+R(e)+'</textarea><textarea class="h" name="uxml" id="uxml">'+R(t)+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"18":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/relationship/?in_editor=1"><textarea class="h" name="qxml">'+R(e)+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>';case"22":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/web/?in_editor=1"><textarea class="h" name="qxml">'+e+'</textarea><textarea class="h" name="uxml">'+t+'</textarea><input type="hidden" name="content_guid" value="0"/></form>'}}(i,"<smans></smans>",c.module);A.insert("#authoringArea",t,"beforeend");let a=A.select("#title").innerHTML,o=A.select("#stem").innerHTML,s=A.select("#remediation").innerHTML;A.selectAll("#titleShow, #stemShow, #remediationShow","remove",{action:"remove"});const u=A.select("#title","hide",{action:"hide"}),l=A.select("#stem","hide",{action:"hide"}),d=A.select("#remediation","hide",{action:"hide"});A.insert(u,'<div id="titleShow">'+a+"</div>","afterend"),A.insert(l,'<div id="stemShow">'+o+"</div>","afterend"),A.insert(d,'<div id="remediationShow">'+s+"</div>","afterend"),A.select("#externalInputs","hide"),r(0,c={...c,qxml:i,titleData:a,stemData:o,remediationData:s}),setTimeout((function(){A.selectAll("#stemShow .ebook_item_text, #remediationShow .ebook_item_text","attr",{contenteditable:!1}),A.select('form[target="authoringFrame"]').submit()}),200)}function m(e,t){switch(t){case"17":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/labsimulation/?in_editor=1"><input type="hidden" name="authoringmode" value="1"/><textarea class="h" name="qxml">'+R(e)+'</textarea><textarea class="h" name="uxml">'+o+"</textarea></form>";case"18":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/relationship/?in_editor=1"><input type="hidden" name="authoringmode" value="1"/><textarea class="h" name="qxml">'+R(e)+'</textarea><textarea class="h" name="uxml">'+o+"</textarea></form>";case"22":return'<form method="post" target="authoringFrame" action="'+baseUrl+'sim/web/?in_editor=1"><input type="hidden" name="authoringmode" value="1"/><textarea class="h" name="qxml">'+e+'</textarea><textarea class="h" name="uxml">'+o+"</textarea></form>"}}return e.$$set=e=>{"editorState"in e&&r(1,n=e.editorState),"ucEditor"in e&&r(2,a=e.ucEditor)},e.$$.update=()=>{2&e.$$.dirty&&(n.editorView,l())},[c,n,a,()=>{r(0,c.remediationToggle=!1,c)},function(t){e.$$.not_equal(c.remediationToggle,t)&&(c.remediationToggle=t,r(0,c))}]}q.ucfirst=function(e){return(e+="").charAt(0).toUpperCase()+e.substr(1)},q.decbin=function(e){return e<0&&(e=4294967295+e+1),parseInt(e,10).toString(2)},q.bindec=function(e){return e=(e+"").replace(/[^01]/gi,""),parseInt(e,2)},q.strrev=function(e){e+="";var t=FACTS.uniChars,r=new RegExp("(.)(["+t.join("")+"]+)","g");return(e=e.replace(r,"$2$1")).split("").reverse().join("")},q.isDefined=e=>void 0!==e&&""!=e,q.isObject=e=>q.isDefined(e)&&"object"==typeof e,q.changeObjectKey=function(e,t){var r={};for(key in e){r[t+key]=e[key]}return r},q.replaceSpclInObjKey=function(e,t,r){var n={};for(key in e){let r=key;-1!==key.indexOf(t)&&(r=key.replace(".","-")),n[r]=e[key]}return n},q.ucwords=function(e){return(str+"").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g,(function(e){return e.toUpperCase()}))},q.chr=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10),56320+(1023&e))):String.fromCharCode(e)},q.rand=function(e,t){var r=arguments.length;if(0===r)e=0,t=2147483647;else if(1===r)throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(t-e+1))+e},q.isNumeric=function(e){return("number"==typeof e||"string"==typeof e&&-1===" \n\r\t\f\v            ​\u2028\u2029　".indexOf(e.slice(-1)))&&""!==e&&!isNaN(e)},q.is_int=function(e){return e===+e&&isFinite(e)&&!(e%1)},q.is_object=function(e){return"[object Array]"!==Object.prototype.toString.call(e)&&(null!==e&&"object"==typeof e)},q.in_array=function(e,t,r){var n="";if(!!r){for(n in t)if(t[n]===e)return!0}else for(n in t)if(t[n]==e)return!0;return!1},q.array_reverse=function(e,t){var r,n=t?{}:[];if("[object Array]"===Object.prototype.toString.call(e)&&!t)return e.slice(0).reverse();if(t){var a=[];for(r in e)a.push(r);for(var i=a.length;i--;)n[r=a[i]]=e[r]}else for(r in e)n.unshift(e[r]);return n},q.array_slice=function(e,t,r,n){var a="";if("[object Array]"!==Object.prototype.toString.call(e)||n&&0!==t){var i=0,o={};for(a in e)i+=1,o[a]=e[a];e=o,t=t<0?i+t:t,r=void 0===r?i:r<0?i+r-t:r;var s={},c=!1,u=-1,l=0,d=0;for(a in e){if(++u,l>=r)break;u==t&&(c=!0),c&&(++l,q.is_int(a)&&!n?s[d++]=e[a]:s[a]=e[a])}return s}return void 0===r?e.slice(t):r>=0?e.slice(t,t+r):e.slice(t,r)},q.strPad=function(e,t,r,n){var a,i="",o=function(e,t){for(var r="";r.length<t;)r+=e;return r=r.substr(0,t)};return r=void 0!==r?r:" ","STR_PAD_LEFT"!==n&&"STR_PAD_RIGHT"!==n&&"STR_PAD_BOTH"!==n&&(n="STR_PAD_RIGHT"),(a=t-(e+="").length)>0&&("STR_PAD_LEFT"===n?e=o(r,a)+e:"STR_PAD_RIGHT"===n?e+=o(r,a):"STR_PAD_BOTH"===n&&(e=(e=(i=o(r,Math.ceil(a/2)))+e+i).substr(0,t))),e},q.explode=function(e,t,r){if(arguments.length<2||void 0===e||void 0===t)return null;if(""===e||!1===e||null===e)return!1;if("function"==typeof e||"object"==typeof e||"function"==typeof t||"object"==typeof t)return{0:""};!0===e&&(e="1");var n=(t+="").split(e+="");return void 0===r?n:(0===r&&(r=1),r>0?r>=n.length?n:n.slice(0,r-1).concat([n.slice(r-1).join(e)]):-r>=n.length?[]:(n.splice(n.length+r),n))},q.implode=function(e,t){var r="",n="",a="";if(1===arguments.length&&(t=e,e=""),"object"==typeof t){if("[object Array]"===Object.prototype.toString.call(t))return t.join(e);for(r in t)n+=a+t[r],a=e;return n}return t},q.array_filter=function(e,t){var r,n={};for(r in t=t||function(e){return e},"[object Array]"===Object.prototype.toString.call(e)&&(n=[]),e)t(parseInt(e[r]))&&(n[r]=e[r]);return n},q.strpos=function(e,t,r){var n=(e+"").indexOf(t,r||0);return-1!==n&&n},q.stripos=function(e,t,r){var n,a=(e+"").toLowerCase(),i=(t+"").toLowerCase();return-1!==(n=a.indexOf(i,r))&&n},q.str_ireplace=function(e,t,r,n){var a,i,o,s,c=0,u=0,l="",d="",m=0,f="",g="",h="",p="",v=r,b="[object Array]"===Object.prototype.toString.call(v);if("object"==typeof e)for(l=e,e=[],c=0;c<l.length;c+=1)e[c]=l[c].toLowerCase();else e=e.toLowerCase();if("object"==typeof r)for(l=r,r=[],c=0;c<l.length;c+=1)r[c]=l[c].toLowerCase();else r=r.toLowerCase();if("object"==typeof e&&"string"==typeof t)for(l=t,t=[],c=0;c<e.length;c+=1)t[c]=l;for(l="",i=[].concat(e),o=[].concat(t),s="[object Array]"===Object.prototype.toString.call(o),f=[].concat(f=r),v=[].concat(v),n&&(n.value=0),c=0,a=f.length;c<a;c++)if(""!==f[c])for(u=0,m=i.length;u<m;u++)l=f[c]+"",d=s?void 0!==o[u]?o[u]:"":o[0],f[c]=l.split(i[u]).join(d),g=v[c]+"",h=l.indexOf(i[u]),p=i[u].length,h>=0&&(v[c]=g.split(g.substr(h,p)).join(d)),n&&(n.value+=l.split(i[u]).length-1);return b?v:v[0]},q.array_flip=function(e){var t,r={};if(e&&"object"==typeof e&&e.change_key_case)return e.flip();for(t in e)e.hasOwnProperty(t)&&(r[e[t]]=t);return r},q.array_unique=function(e){var t="",r={},n="",a=function(e,t){var r="";for(r in t)if(t.hasOwnProperty(r)&&t[r]+""==e+"")return r;return!1};for(t in e)e.hasOwnProperty(t)&&!1===a(n=e[t],r)&&(r[t]=n);return r},q.array_merge=function(e,t){var r={};for(let t in e)r[t]=e[t];for(let e in t)r[e]=t[e];return r},q.is_array=function(e){return e.constructor===Array},q.shuffle=function(e){for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e},q.count=function(e){return e.constructor===Array?e.length:0},q.ord=function(e){var t=e+"",r=t.charCodeAt(0);if(55296<=r&&r<=56319){var n=r;return 1===t.length?r:1024*(n-55296)+(t.charCodeAt(1)-56320)+65536}return r},q.array_values=function(e){var t=[],r="";if(e&&"object"==typeof e&&e.change_key_case)return e.values();for(r in e)t[t.length]=e[r];return t},q.extend=function(e,t){return Object.keys(t).forEach((function(r){e[r]==t[r]||(e[r]=t[r])})),e},q.utf8_encode=function(e){if(null==e)return"";var t,r,n,a=e+"",i="";t=r=0,n=a.length;for(var o=0;o<n;o++){var s=a.charCodeAt(o),c=null;if(s<128)r++;else if(s>127&&s<2048)c=String.fromCharCode(s>>6|192,63&s|128);else if(55296!=(63488&s))c=String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128);else{if(55296!=(64512&s))throw new RangeError("Unmatched trail surrogate at "+o);var u=a.charCodeAt(++o);if(56320!=(64512&u))throw new RangeError("Unmatched lead surrogate at "+(o-1));s=((1023&s)<<10)+(1023&u)+65536,c=String.fromCharCode(s>>18|240,s>>12&63|128,s>>6&63|128,63&s|128)}null!==c&&(r>t&&(i+=a.slice(t,r)),i+=c,t=r=o+1)}return r>t&&(i+=a.slice(t,n)),i},q.md5=function(e){var t,r,n,a,i,o,s,c,u,l,d,m=function(e,t){return e<<t|e>>>32-t},f=function(e,t){var r,n,a,i,o;return a=2147483648&e,i=2147483648&t,o=(1073741823&e)+(1073741823&t),(r=1073741824&e)&(n=1073741824&t)?2147483648^o^a^i:r|n?1073741824&o?3221225472^o^a^i:1073741824^o^a^i:o^a^i},g=function(e,t,r,n,a,i,o){return e=f(e,f(f(function(e,t,r){return e&t|~e&r}(t,r,n),a),o)),f(m(e,i),t)},h=function(e,t,r,n,a,i,o){return e=f(e,f(f(function(e,t,r){return e&r|t&~r}(t,r,n),a),o)),f(m(e,i),t)},p=function(e,t,r,n,a,i,o){return e=f(e,f(f(function(e,t,r){return e^t^r}(t,r,n),a),o)),f(m(e,i),t)},v=function(e,t,r,n,a,i,o){return e=f(e,f(f(function(e,t,r){return t^(e|~r)}(t,r,n),a),o)),f(m(e,i),t)},b=function(e){var t,r="",n="";for(t=0;t<=3;t++)r+=(n="0"+(e>>>8*t&255).toString(16)).substr(n.length-2,2);return r};for(c=1732584193,u=4023233417,l=2562383102,d=271733878,t=(r=function(e){for(var t,r=e.length,n=r+8,a=16*((n-n%64)/64+1),i=new Array(a-1),o=0,s=0;s<r;)o=s%4*8,i[t=(s-s%4)/4]=i[t]|e.charCodeAt(s)<<o,s++;return o=s%4*8,i[t=(s-s%4)/4]=i[t]|128<<o,i[a-2]=r<<3,i[a-1]=r>>>29,i}(e=q.utf8_encode(e))).length,n=0;n<t;n+=16)a=c,i=u,o=l,s=d,c=g(c,u,l,d,r[n+0],7,3614090360),d=g(d,c,u,l,r[n+1],12,3905402710),l=g(l,d,c,u,r[n+2],17,606105819),u=g(u,l,d,c,r[n+3],22,3250441966),c=g(c,u,l,d,r[n+4],7,4118548399),d=g(d,c,u,l,r[n+5],12,1200080426),l=g(l,d,c,u,r[n+6],17,2821735955),u=g(u,l,d,c,r[n+7],22,4249261313),c=g(c,u,l,d,r[n+8],7,1770035416),d=g(d,c,u,l,r[n+9],12,2336552879),l=g(l,d,c,u,r[n+10],17,4294925233),u=g(u,l,d,c,r[n+11],22,2304563134),c=g(c,u,l,d,r[n+12],7,1804603682),d=g(d,c,u,l,r[n+13],12,4254626195),l=g(l,d,c,u,r[n+14],17,2792965006),c=h(c,u=g(u,l,d,c,r[n+15],22,1236535329),l,d,r[n+1],5,4129170786),d=h(d,c,u,l,r[n+6],9,3225465664),l=h(l,d,c,u,r[n+11],14,643717713),u=h(u,l,d,c,r[n+0],20,3921069994),c=h(c,u,l,d,r[n+5],5,3593408605),d=h(d,c,u,l,r[n+10],9,38016083),l=h(l,d,c,u,r[n+15],14,3634488961),u=h(u,l,d,c,r[n+4],20,3889429448),c=h(c,u,l,d,r[n+9],5,568446438),d=h(d,c,u,l,r[n+14],9,3275163606),l=h(l,d,c,u,r[n+3],14,4107603335),u=h(u,l,d,c,r[n+8],20,1163531501),c=h(c,u,l,d,r[n+13],5,2850285829),d=h(d,c,u,l,r[n+2],9,4243563512),l=h(l,d,c,u,r[n+7],14,1735328473),c=p(c,u=h(u,l,d,c,r[n+12],20,2368359562),l,d,r[n+5],4,4294588738),d=p(d,c,u,l,r[n+8],11,2272392833),l=p(l,d,c,u,r[n+11],16,1839030562),u=p(u,l,d,c,r[n+14],23,4259657740),c=p(c,u,l,d,r[n+1],4,2763975236),d=p(d,c,u,l,r[n+4],11,1272893353),l=p(l,d,c,u,r[n+7],16,4139469664),u=p(u,l,d,c,r[n+10],23,3200236656),c=p(c,u,l,d,r[n+13],4,681279174),d=p(d,c,u,l,r[n+0],11,3936430074),l=p(l,d,c,u,r[n+3],16,3572445317),u=p(u,l,d,c,r[n+6],23,76029189),c=p(c,u,l,d,r[n+9],4,3654602809),d=p(d,c,u,l,r[n+12],11,3873151461),l=p(l,d,c,u,r[n+15],16,530742520),c=v(c,u=p(u,l,d,c,r[n+2],23,3299628645),l,d,r[n+0],6,4096336452),d=v(d,c,u,l,r[n+7],10,1126891415),l=v(l,d,c,u,r[n+14],15,2878612391),u=v(u,l,d,c,r[n+5],21,4237533241),c=v(c,u,l,d,r[n+12],6,1700485571),d=v(d,c,u,l,r[n+3],10,2399980690),l=v(l,d,c,u,r[n+10],15,4293915773),u=v(u,l,d,c,r[n+1],21,2240044497),c=v(c,u,l,d,r[n+8],6,1873313359),d=v(d,c,u,l,r[n+15],10,4264355552),l=v(l,d,c,u,r[n+6],15,2734768916),u=v(u,l,d,c,r[n+13],21,1309151649),c=v(c,u,l,d,r[n+4],6,4149444226),d=v(d,c,u,l,r[n+11],10,3174756917),l=v(l,d,c,u,r[n+2],15,718787259),u=v(u,l,d,c,r[n+9],21,3951481745),c=f(c,a),u=f(u,i),l=f(l,o),d=f(d,s);return(b(c)+b(u)+b(l)+b(d)).toLowerCase()},q.baseConvert=function(e,t,r){if("string"!=typeof e&&(e=e.toString()),64==t||64==r)var n="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz()";else n="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";for(var a=(n=n.split("")).slice(0,t),i=n.slice(0,r),o=e.split("").reverse().reduce((function(e,r,n){if(-1===a.indexOf(r))throw new Error("Invalid digit `"+r+"` for base "+t+".");return e+a.indexOf(r)*Math.pow(t,n)}),0),s="";o>0;)s=i[o%r]+s,o=(o-o%r)/r;return s||"0"},q.GUID64_decode=e=>q.baseConvert(e,64,10),q.GUID64_encode=(e,t=2)=>{let r=q.baseConvert(e,10,64);return q.strPad(r,t,"0","STR_PAD_LEFT")},q.shuffleArray=e=>{for(let t=e.length-1;t>0;t--){let r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e},q.range=(e,t)=>new Array(t-e).fill().map(((t,r)=>r+e)),q.getRange=(e,t,r,n)=>(e=e||n,e=Math.min(r,Math.max(t,e))),q.getDefault=(e,t)=>e||t,q.str2Pass=e=>q.md5("ucertify"+e),q.byte2array=function(e,t,r=1){var n=q.decbin(e),a=(n=q.strrev(q.strPad(n,8*r,"0","STR_PAD_LEFT"))).split(""),i=0,o={};for(let e in t)o[e]=parseInt(a[i]),i++;return o},q.getUserPoints=function(e,t){return e=q.clearBit(e,7),scorePercent=q.ord(e),userPoints=Math.round(parseInt(scorePercent)*parseInt(t)/100),userPoints},q.getUserQuestionStatus=function(e,t,r){return e<=0?status=-1:(status=1,r<=0?status=0:t==r&&(status=2)),status},q.apiInitializeRandomSeq=function(e,t,n){strdata=String(e);for(let e=0;e<n;e++)r=q.chr(0),1==t&&(r=q.chr(Math.random(0,7))),strdata+=r;return strdata},q.setUserAnswerStr=function(e,t=0){var r=["1","2","3","4","5","6","7","8"],n=["A","B","C","D","E","F","G","H"],a=q.chr(0);"object"!=typeof e&&(e=e.split(","));for(let o in e){var i=e[o];2==t&&(i=q.getAnswerSeqStr(i,t,!0)),r.indexOf(i)>-1?a=q.setBit(a,parseInt(i)-1):n.indexOf(i)>-1&&(a=q.setBit(a,q.ord(i.toLowerCase())-65))}return a},q.setBookmark=function(e,t){return e=t?q.setBit(e,7):q.clearBit(e,7)},q.setScore=function(e,t,r){bookmark=q.getBit(e,7),parseInt(r)<=0&&(r=1);var n=Math.round(100*t/r);return n=Math.min(n,100),e=q.chr(n),e=q.setBookmark(e,bookmark)},q.testBit=function(e,t){return(e=parseInt(e))&1<<t},q.getBit=function(e,t){let r=q.ord(e);return""!=q.testBit(r,t)?1:0},q.setBit=function(e,t){let r=q.ord(e),n=1<<t;return q.chr(r|n)},q.clearBit=function(e,t){let r=q.ord(e),n=~(1<<t);return q.chr(r&n)},q.getAnswerSeqStr=function(e,t=0,r=!1){var n={};return 1==t?e:2==t?(n[1]="I",n[2]="II",n[3]="III",n[4]="IV",n[5]="V",n[6]="VI",n[7]="VII",n[8]="VIII",n[9]="IX",n[10]="X",r?(rAnsSeq0={},rAnsSeq0=q.array_flip(n),rAnsSeq0[e]):n[e]):(n[1]="A",n[2]="B",n[3]="C",n[4]="D",n[5]="E",n[6]="F",n[7]="G",n[8]="H",n[9]="I",n[10]="J",n[e])},q.getTestTimeSpent=function(e,t){let r=2*t,n=e[2*t-1],a=e[r],i=parseInt(255*q.ord(n)+q.ord(a));return i>0?i:0},q.setTestTimeSpent=function(e,t,r){r=parseInt(r);let n=Math.floor(r/255),a=r%255,i=Math.min(n,255),o=Math.min(a,255),s=q.chr(i),c=q.chr(o),u=q.setByteInString(e,s,2*t-1);return u=q.setByteInString(u,c,2*t),u},q.setByteInString=function(e,t,r){if("object"==typeof e){var n=!0;e=e.join(",")}return r<=0?(r=0,e=t+e.substr(parseInt(r)+1,1)):e=e.substr(0,r).toString()+t.toString()+e.substr(parseInt(r)+1).toString(),n&&(e=e.split(",")),e},q.getBookmark=function(e){return q.getBit(e,7)},q.getScore=function(e,t=1){e=q.clearBit(e,7);let r=q.ord(e);return parseInt(r)},q.getUserAnswerStr=function(e,t=0){var r=[],n=0,a=q.range(0,7);for(let o in a)i=parseInt(a[o]),1==q.getBit(e,i)&&(r[n]=q.getAnswerSeqStr(i+1,t),n++);return r},q.getAnswerPoints=function(e){var t=q.ord(e);return parseInt(t)},q.cleanTest=function(e){var t={can_review:1,can_result:1,can_grade:0};return e.test_mode>2&&(t.can_review=0,t.can_result=0),2==e.test_mode&&(t.can_result=1,t.can_review=0),1==e.manual_grading&&1==e.is_test_over&&(t.can_result=0,t.can_review=0),t},q.api_setAnswerSeq=function(e,t=0,r=0,n=0){var i=0;for(let t in e){a=e[t],a.is_correct>=1&&0;var o=a.answer;e[t].seq_str=q.getAnswerSeqStr(i+1,n),aotpos=q.strpos(o,"<!"),!1===aotpos?(aotpos=q.strpos(o,"<seq no="),!1===aotpos?e[t].seq_tag='<seq no="'+q.chr(97+i)+'" />':(aotendpos=q.strpos(o,"/>"),e[t].seq_tag=o.substr(aotpos,aotendpos-aotpos+2))):e[t].seq_tag=o.substr(aotpos,5),i++}return e},q.replaceAnsSeq=function(e,t){if(!e.includes("<seq no="))return e;for(let r in t){let n=t[r];e=e.split(n.seq_tag).join(n.seq_str)}return e},q.addCorrectAnswerStr=function(e){var t=[];for(let r in e){let n=e[r];"1"==n.is_correct&&t.push(n.seq_str)}return t.join(",")};export default class extends e{constructor(e){super(),t(this,e,E,L,n,{editorState:1,ucEditor:2})}}
//# sourceMappingURL=Labsimulation-f5503926.js.map
