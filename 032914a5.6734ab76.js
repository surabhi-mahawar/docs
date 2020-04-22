(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),l=(a(0),a(203)),i={id:"PSQLStrategy",title:"PSQL Strategy",sidebar_label:"PSQL Strategy"},b={id:"PSQLStrategy",title:"PSQL Strategy",description:"## Objective",source:"@site/docs/PSQL Strategy.md",permalink:"/docs/docs/PSQLStrategy",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/PSQL Strategy.md",sidebar_label:"PSQL Strategy",sidebar:"someSidebar",previous:{title:"PSQL Replication",permalink:"/docs/docs/PSQLReplication"},next:{title:"Samiksha - Functional Specifications",permalink:"/docs/docs/SamikshaFuncSpecs"}},c=[{value:"Objective",id:"objective",children:[{value:"Disclaimer",id:"disclaimer",children:[]}]},{value:"Use Cases",id:"use-cases",children:[]},{value:"Deployment strategies",id:"deployment-strategies",children:[{value:"v0.1 - Development Server with small data (1, 2)",id:"v01---development-server-with-small-data-1-2",children:[]},{value:"v0.2 - Development Server with substantial data (3)",id:"v02---development-server-with-substantial-data-3",children:[]},{value:"v1.0 - Small Production Server (4, 5)",id:"v10---small-production-server-4-5",children:[]},{value:"v2.0 - Medium Production Server (6, 7, 8)",id:"v20---medium-production-server-6-7-8",children:[]},{value:"v3.0 - Large Production Server (-)",id:"v30---large-production-server--",children:[]}]},{value:"Comparison chart",id:"comparison-chart",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Sharding",id:"sharding",children:[]},{value:"Backups",id:"backups",children:[]},{value:"Disaster Recovery",id:"disaster-recovery",children:[]}],o={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"objective"},"Objective"),Object(l.b)("p",null,"The objective of this doc to be a decision mechanism on what kind of deployment to use for PSQL for different use cases."),Object(l.b)("h3",{id:"disclaimer"},"Disclaimer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This is an opionated guide and a lot of systems can provide the same performance and maybe at a lesser cost."),Object(l.b)("li",{parentName:"ul"},"This is not meant to be a comprehensive guide on PSQL. There are plenty out there and we would recommend yo to read them if you are looking to understand how PSQL works."),Object(l.b)("li",{parentName:"ul"},"This is not the only way to do things and should be used as a guide more than anything else."),Object(l.b)("li",{parentName:"ul"},"This is an every evolving doc and is based on our current understanding of the system and is deemed to evolve over time."),Object(l.b)("li",{parentName:"ul"},"Feel free to send pull requests and evolve this doc further.")),Object(l.b)("h2",{id:"use-cases"},"Use Cases"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Development with local database."),Object(l.b)("li",{parentName:"ol"},"Development with database on the server with database size less than 5GB or table rows less than a million."),Object(l.b)("li",{parentName:"ol"},"Development with database on the server with database size > 5GB or table rows more than a million."),Object(l.b)("li",{parentName:"ol"},"Production database with single microservice depending on it. Size < 5GB and max rows < million."),Object(l.b)("li",{parentName:"ol"},"Production database with BI tool attached to it. Connection count < 50."),Object(l.b)("li",{parentName:"ol"},"Production database which needs to serve APIs through microservices and there is no limit to the amount of connections to it and has a BI tool attached to it."),Object(l.b)("li",{parentName:"ol"},"Production datababase with all the things on point 6 data size upto 2TB."),Object(l.b)("li",{parentName:"ol"},"Production database with all the things on point 6 and data size > 2TB.")),Object(l.b)("h2",{id:"deployment-strategies"},"Deployment strategies"),Object(l.b)("p",null,"The deployment strategies have a semantic versioning and anything >= 1 can be used for production. Any minor/major updated to the stregies will evolve that specific version to say 1.1, 1.2 for v1.0. You can see additional components getting added as soon we increase the size of production."),Object(l.b)("h3",{id:"v01---development-server-with-small-data-1-2"},"v0.1 - Development Server with small data (1, 2)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.ibb.co/JBLBJhh/PSQL-Type0-1.jpg",alt:"enter image description here"}))),Object(l.b)("h3",{id:"v02---development-server-with-substantial-data-3"},"v0.2 - Development Server with substantial data (3)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.ibb.co/Jjjzz2d/PSQL-Type0-2.jpg",alt:"enter image description here"}))),Object(l.b)("h3",{id:"v10---small-production-server-4-5"},"v1.0 - Small Production Server (4, 5)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.ibb.co/qjcsmvZ/PSQL-Type2.jpg",alt:"enter image description here"}))),Object(l.b)("h3",{id:"v20---medium-production-server-6-7-8"},"v2.0 - Medium Production Server (6, 7, 8)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.ibb.co/QrnyGtr/PSQL-Type3.jpg",alt:"enter image description here"}))),Object(l.b)("h3",{id:"v30---large-production-server--"},"v3.0 - Large Production Server (-)"),Object(l.b)("p",null,"Coming Soon..."),Object(l.b)("h4",{id:"features"},"Features"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"This is no practical limits on the size of data"),Object(l.b)("li",{parentName:"ol"},"No practical limits on computing power utilized.")),Object(l.b)("h2",{id:"comparison-chart"},"Comparison chart"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Indicator"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"v0.1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"v0.2"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"v1.0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"v2.0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"v3.0"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Database Size (GB)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2000"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No limits")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Connection Pooler"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Production Ready"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cost per GB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7x")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sharding Capability"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Archiving and PITR"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Backups"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disaster Recovery"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Setup Difficulty"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10x")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maintenance Cost (Dev hours)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2x"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3x")))),Object(l.b)("h2",{id:"indexing"},"Indexing"),Object(l.b)("p",null,"PSQL is meant to serve queries in less than a milli second and 2 ms should be the limit on all queries. Index things everytime you see anything greater than 2 ms and large number of calls. To monitor what is happening inside the database, intall this contrib PSQL ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/9.5/pgstatstatements.html"}),"extension"),","),Object(l.b)("h2",{id:"sharding"},"Sharding"),Object(l.b)("p",null,"We don't recommend sharding in PSQL and up until v2.0 there is no sharding of database. But it really have to, we recommend doing it though ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://citusdata.com/"}),"citus"),". v3.0 has sharding, and though a small decrease in speed, it works out of the box."),Object(l.b)("h2",{id:"backups"},"Backups"),Object(l.b)("p",null,"We recommend native ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/9.3/continuous-archiving.html"}),"PSQL archiving and PITR"),"."),Object(l.b)("h2",{id:"disaster-recovery"},"Disaster Recovery"),Object(l.b)("p",null,"We recommend ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.pgbarman.org/"}),"PgBarman")," for disaster recovery."))}d.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,u=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return a?r.a.createElement(u,b({ref:t},o,{components:a})):r.a.createElement(u,b({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);