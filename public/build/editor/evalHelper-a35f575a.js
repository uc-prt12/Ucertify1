import{X as e,S as s,i as a,s as t}from"./main-162960ff.js";const l={getXml:(e,s,a)=>e.generateXml(),onOpenSave:(e,s)=>!e.db_changed,checkDataOnSave(s,a,t,l){let c=t.xml,n=e(c);if(n&&"sql"==n.smxml._language){let e=c.match(/<case>[\s\S]*?<\/case>/g).join("").split("<case>");for(let s=0;s<e.length;s++)e[s]=e[s].substring(e[s].indexOf("|")+1);e=e.join("<case>|"),c=c.replace(/<testcases>[\s\S]*?<\/testcases>/g,"<testcases>"+e+"</testcases>"),l({xml:c})}return s.special_module_xml=c,s},verticalView:!0,doNotformatXml:!0,helpVideo:"//player.vimeo.com/external/287909057.hd.mp4?s=294a3cad46aec8d3cd8620b56ad7fa7e4aca731b"};export default class extends s{constructor(e){super(),a(this,e,null,null,t,{})}}export{l as itemHelper};
//# sourceMappingURL=evalHelper-a35f575a.js.map
