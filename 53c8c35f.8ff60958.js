(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(9),i=(a(0),a(229)),r={id:"reusingtech",title:"Reusing Governance Technology Products",author:"Sukhpreet Sekhon",author_title:"Technology @Samagra",author_url:"https://www.linkedin.com/in/sukhpreetsekhon/",author_image_url:"https://samagra-development.github.io/docs/img/blogss.jpg",tags:["bureaucrats","govt engineers","govOS"]},s={permalink:"/docs/blog/reusingtech",source:"@site/blog/2020-06-10-reusingtech.md",description:"In the past few blogs we shared how we are [Democratizing Technology Product Development for Governments](https://samagra-development.github.io/docs/blog/ourjourney) and the [Evolution of Samiksha](https://samagra-development.github.io/docs/blog/evolutionsamiksha/), an OpenSource product designed to improve school quality control [activities](https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#21-governance-use-cases) conducted by education department officials in government schools.",date:"2020-06-10T00:00:00.000Z",tags:[{label:"bureaucrats",permalink:"/docs/blog/tags/bureaucrats"},{label:"govt engineers",permalink:"/docs/blog/tags/govt-engineers"},{label:"govOS",permalink:"/docs/blog/tags/gov-os"}],title:"Reusing Governance Technology Products",truncated:!0,nextItem:{title:"Samiksha - Behind the Scenes",permalink:"/docs/blog/samikhaBehindTheScenes"}},c=[{value:"Getting the Basics Right",id:"getting-the-basics-right",children:[]},{value:"Product Type 1 - With existing Open Source technology components and existing wiring",id:"product-type-1---with-existing-open-source-technology-components-and-existing-wiring",children:[]},{value:"Product Type 2 - With existing Open Source technology components and updated wiring",id:"product-type-2---with-existing-open-source-technology-components-and-updated-wiring",children:[]},{value:"Product Type 3 - With existing and new Open Source components and updated wiring",id:"product-type-3---with-existing-and-new-open-source-components-and-updated-wiring",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the past few blogs we shared how we are ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/blog/ourjourney"}),"Democratizing Technology Product Development for Governments")," and the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/blog/evolutionsamiksha/"}),"Evolution of Samiksha"),", an OpenSource product designed to improve school quality control ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#21-governance-use-cases"}),"activities")," conducted by education department officials in government schools."),Object(i.b)("p",null,"This blog post is about how we are reusing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/ComponentsOverview/"}),"technology components")," to deploy multiple technology products. We will highlight how the technology architecture behind ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs"}),"Samiksha")," has been reused for creating a variety of products for the Department of Agriculture and Farmers\u2019 Welfare (DA&FE), Odisha and the Department of Basic Shiksha, in Uttar Pradesh and Department of Education, Himachal Pradesh. Reusing technology for governments avoids wasteful public expenditure and decreases the go-to-market time."),Object(i.b)("h2",{id:"getting-the-basics-right"},"Getting the Basics Right"),Object(i.b)("p",null,"The following diagram provides an overview of the architecture of Samiksha. Samiksha has been put together by using five technology components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/COMobileApplication"}),"Mobile Application")," (all mobile interfaces with data collection feature from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://opendatakit.org/"}),"ODK")," and user authentication from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://fusionauth.io/"}),"FusionAuth"),"),"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/COAppControl"}),"Application Control")," (to manage all metadata on FusionAuth and product configurations),"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/CODataAnalytics"}),"Data Analytics")," (for visualizing data collected through the application on ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.metabase.com/"}),"Metabase"),"),"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/CODatabaseManagement"}),"Database Management")," (to manage databases, auto deployments, load testing and scaling),"),Object(i.b)("li",{parentName:"ul"},"Application Logging (to manage and review performance logs from the mobile application using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.elastic.co/"}),"Elastic")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://sentry.io/welcome/"}),"Sentry"),").")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/SamikshaArchitecture.png",alt:null}))),Object(i.b)("p",null,"Since July 2019, Samiksha has been used by education department officials of Haryana and Himachal Pradesh, covering nearly 30,000 government schools with over 14,000 active government users.\nNow this architecture can be reused to create three types of product. "),Object(i.b)("h2",{id:"product-type-1---with-existing-open-source-technology-components-and-existing-wiring"},"Product Type 1 - With existing Open Source technology components and existing wiring"),Object(i.b)("p",null,"The Agriculture Development Associates application was launched for DA&FE,  Odisha in August 2019 to capture information from field assessments conducted by Agriculture Development Associates. These field assessments were conducted to primarily identify on-ground issues related pest incidence and input quality (seeds, fertilizers, pesticides) at local distribution centres. It was used by more than 450 department Agriculture Development Associates who captured more than 90,000 field assessments through this application."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/associatesprogram.png",alt:null}))),Object(i.b)("p",null,"The following diagram illustrates how the Agriculture Development Associates application was launched with the same technology components as Samiksha and the existing wiring. There were minimal changes in the application UI screens followed by changes in the metadata. Data collection forms were configured based on the use cases of the department."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/aparchitecture.png",alt:null}))),Object(i.b)("h2",{id:"product-type-2---with-existing-open-source-technology-components-and-updated-wiring"},"Product Type 2 - With existing Open Source technology components and updated wiring"),Object(i.b)("p",null,"The Prerna Ghoshna Assessment application will be launched for the Department of Basic Shiksha, Uttar Pradesh later this year to conduct verbal and non-verbal assessments of children in grades 1-5 across government schools, as part of the Prerna Ghoshna programme. The application is likely to be used for an estimated 10,00,000 student assessments annually. "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/prernaghoshna.png",alt:null}))),Object(i.b)("p",null,"The following diagram illustrates how the Prerna Ghoshna Assessment application was constructed with the same technology components as Samiksha but with a slight enhancement to the wiring of the Mobile Application component. In the Mobile Application component, while non-verbal students assessments are seamlessly managed by ODK, for verbal assessments we partnered with Google to allow seamless transition between the Prerna Ghoshna Assessment application and Google Bolo to conduct the verbal student assessments. The modular architecture of the Mobile Application component enables such seamless transitions for adding other functionalities with third-party apps."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/prernaarchitecture.png",alt:null}))),Object(i.b)("h2",{id:"product-type-3---with-existing-and-new-open-source-components-and-updated-wiring"},"Product Type 3 - With existing and new Open Source components and updated wiring"),Object(i.b)("p",null,"E-Samwad was launched for the State Education Department in Himachal Pradesh to facilitate personalized SMS-based communication between parents and teachers. These SMS ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.linkedin.com/posts/samagra-transforming-governance_himachalpradesh-workstreaminfographics-samarth-activity-6669224579640258560-COhj"}),"can be sent")," in a decentralized manner by government school teachers for sharing daily attendance, homework status, exam results, notifications for holidays with the parents. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/SamwadFuncSpecs"}),"e-Samwad")," has been used by 7,828 schools in the state to reach out to 80,636 parents, sending out 1.3 lakh messages. Once schools reopen, all 15,000+ schools in HP are expected to start using e-Samwad."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/esamwad.png",alt:null}))),Object(i.b)("p",null,"The following diagram illustrates how E-Samwad was constructed by incorporating an additional technology component - Communication. The Communication component enables the management of the SMS pipeline and can be configured to send SMS through any public or private SMS gateway. The Communication component will also be available for review and reuse on our technology component documentation ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/ComponentsOverview/"}),"page")," later this June."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/esamwadarchitecture.png",alt:null}))),Object(i.b)("p",null,"These are examples of how we follow our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/blog/ourjourney#principle-1---build-reusable-scalable-extensible--deployable-technology-products-using-opensource-tools"}),"Principle #1")," (To build reusable, scalable, extensible and deployable technology products using OpenSource tools) in practice to build technology products for governments."),Object(i.b)("p",null,"Can you think of any governance use cases that can be enabled using these ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/ComponentsOverview"}),"technology components"),"? If yes, please use the documentation of the technology components on our technology documentation section and set up your own products. If you need any additional support, write to us at tech@samagragovernance.in."))}p.isMDXComponent=!0},229:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},h=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(a),d=n,m=h["".concat(r,".").concat(d)]||h[d]||u[d]||i;return a?o.a.createElement(m,s({ref:t},l,{components:a})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);