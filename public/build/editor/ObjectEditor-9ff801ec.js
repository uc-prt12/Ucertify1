import{S as t,i as e,s as n,e as i,u as a,b as o,f as s,h as c,j as l,l as r,v as u,x as d,o as f,y as p,g as h,af as x,r as b,D as g,p as m}from"./main-ebbb55b4.js";function v(t,e,n){const i=t.slice();return i[7]=e[n],i[9]=n,i}function _(t){let e,n,h,x,b,g,m,v,_,y,j,T,D,M,S=t[7]+"";return{c(){e=i("div"),n=i("div"),h=i("label"),x=a(S),g=o(),m=i("div"),v=i("input"),T=o(),s(h,"for",b=t[7]),s(n,"class","col-sm-2"),s(v,"type","text"),s(v,"id",_=t[7]),s(v,"class",y="inputBox form-control"),v.value=j=t[1].cText[t[7]],s(m,"class","col-sm-10"),s(e,"class","row form-group")},m(i,a){c(i,e,a),l(e,n),l(n,h),l(h,x),l(e,g),l(e,m),l(m,v),l(e,T),D||(M=[r(v,"change",(function(){u(t[3].bind(this,t[7]))&&t[3].bind(this,t[7]).apply(this,arguments)})),r(v,"blur",(function(){u(t[4].bind(this,t[7]))&&t[4].bind(this,t[7]).apply(this,arguments)}))],D=!0)},p(e,n){t=e,2&n&&S!==(S=t[7]+"")&&d(x,S),2&n&&b!==(b=t[7])&&s(h,"for",b),2&n&&_!==(_=t[7])&&s(v,"id",_),2&n&&j!==(j=t[1].cText[t[7]])&&v.value!==j&&(v.value=j)},d(t){t&&f(e),D=!1,p(M)}}}function y(t){let e,n,a,r,u,d,p=Object.keys(t[1].cText),m=[];for(let e=0;e<p.length;e+=1)m[e]=_(v(t,p,e));return{c(){e=i("div"),n=i("h1"),n.textContent="3D Object",a=o();for(let t=0;t<m.length;t+=1)m[t].c();s(e,"key","3d_object"),h(e,"width","98%")},m(i,o){c(i,e,o),l(e,n),l(e,a);for(let t=0;t<m.length;t+=1)m[t].m(e,null);u||(d=x(r=t[0].call(null,e,t[2])),u=!0)},p(t,[n]){if(26&n){let i;for(p=Object.keys(t[1].cText),i=0;i<p.length;i+=1){const a=v(t,p,i);m[i]?m[i].p(a,n):(m[i]=_(a),m[i].c(),m[i].m(e,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=p.length}},i:b,o:b,d(t){t&&f(e),g(m,t),u=!1,d()}}}function j(t,e,n){let{editorState:i}=e,{didMount:a}=e,o={},s={error:!1,cText:{}};return m((()=>{o=i.ajaxData?i.ajaxData:{content_type:"f",content_subtype:52,content_icon:0,content_text:{name:"",display_image:"",zipfile:"",preview_image:"",about:"",light:!0,rotationX:"0",rotationY:"Math.PI / -2",positionX:"0",positionY:"0",positionZ:"0",scale:"45",point_light:"2"}},n(1,s.cText=o.content_text,s)})),t.$$set=t=>{"editorState"in t&&n(5,i=t.editorState),"didMount"in t&&n(0,a=t.didMount)},[a,s,undefined,function(t,e){n(1,s.cText[t]=e.target.value,s)},function(t,e){o.content_text=s.cText,AI.get("save_item")||AI.set("save_item",!0),n(5,i.ajaxData=o,i)},i]}export default class extends t{constructor(t){super(),e(this,t,j,y,n,{editorState:5,didMount:0})}}
//# sourceMappingURL=ObjectEditor-9ff801ec.js.map