import{S as e,i as a,s}from"./main-ac89e9fe.js";const t={getXml:(e,a,s)=>e.generateXml(),onOpenSave:(e,a)=>!e.db_changed,checkDataOnSave(e,a,s,t){let l=s.state.xml,c=XMLToJSON(l);if(c&&"sql"==c.smxml._language){let e=l.match(/<case>[\s\S]*?<\/case>/g).join("").split("<case>");for(let a=0;a<e.length;a++)e[a]=e[a].substring(e[a].indexOf("|")+1);e=e.join("<case>|"),l=l.replace(/<testcases>[\s\S]*?<\/testcases>/g,"<testcases>"+e+"</testcases>"),t({xml:l})}return e.special_module_xml=l,e},verticalView:!0,doNotformatXml:!0,helpVideo:"//player.vimeo.com/external/287909057.hd.mp4?s=294a3cad46aec8d3cd8620b56ad7fa7e4aca731b"};export default class extends e{constructor(e){super(),a(this,e,null,null,s,{})}}export{t as itemHelper};
//# sourceMappingURL=evalHelper-3f6fa065.js.map
