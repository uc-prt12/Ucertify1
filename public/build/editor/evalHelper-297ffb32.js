import{X as e,S as a,i as s,s as t}from"./main-5a2bbeeb.js";const l={getXml:(e,a,s)=>e.generateXml(),onOpenSave:(e,a)=>!e.db_changed,checkDataOnSave(a,s,t,l){let c=t.xml,n=e(c);if(n&&"sql"==n.smxml._language){let e=c.match(/<case>[\s\S]*?<\/case>/g).join("").split("<case>");for(let a=0;a<e.length;a++)e[a]=e[a].substring(e[a].indexOf("|")+1);e=e.join("<case>|"),c=c.replace(/<testcases>[\s\S]*?<\/testcases>/g,"<testcases>"+e+"</testcases>"),l({xml:c})}return a.special_module_xml=c,a},verticalView:!0,doNotformatXml:!0,helpVideo:"//player.vimeo.com/external/287909057.hd.mp4?s=294a3cad46aec8d3cd8620b56ad7fa7e4aca731b"};export default class extends a{constructor(e){super(),s(this,e,null,null,t,{})}}export{l as itemHelper};
//# sourceMappingURL=evalHelper-297ffb32.js.map
