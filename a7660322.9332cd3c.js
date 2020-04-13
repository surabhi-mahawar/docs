(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{176:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return b}));var a=i(1),n=i(9),o=(i(0),i(192)),r={id:"SamikshaFuncSpecs",title:"Functional Specifications (Samiksha)",sidebar_label:"Functional Specifications (Samiksha)"},s={id:"SamikshaFuncSpecs",title:"Functional Specifications (Samiksha)",description:"## 1. Introduction",source:"@site/docs/Functional Specs Samiksha.md",permalink:"/docs/docs/SamikshaFuncSpecs",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Functional Specs Samiksha.md",sidebar_label:"Functional Specifications (Samiksha)",sidebar:"someSidebar",previous:{title:"Products Overview",permalink:"/docs/docs/ProductsOverview"},next:{title:"Application Architecture (Samiksha)",permalink:"/docs/docs/ArchitectureSamiksha"}},c=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Samiksha Overview",id:"2-samiksha-overview",children:[{value:"2.1 Governance Use Cases",id:"21-governance-use-cases",children:[]},{value:"2.2 Usage Status Across India",id:"22-usage-status-across-india",children:[]},{value:"2.3 Key Benefits",id:"23-key-benefits",children:[]},{value:"2.4 Alternatives",id:"24-alternatives",children:[]},{value:"2.5 Core Features",id:"25-core-features",children:[]},{value:"2.6 Technical Architecture",id:"26-technical-architecture",children:[]}]},{value:"3. High Level Specifications",id:"3-high-level-specifications",children:[{value:"3.1 Configurable Data Collection Forms",id:"31-configurable-data-collection-forms",children:[]},{value:"3.2 Configurable Mobile Application",id:"32-configurable-mobile-application",children:[]},{value:"3.3 User Authentication &amp; Management",id:"33-user-authentication--management",children:[]},{value:"3.4 Visualize Form Information",id:"34-visualize-form-information",children:[]},{value:"3.5 Monitor Application Performance",id:"35-monitor-application-performance",children:[]}]},{value:"4. For Administrators",id:"4-for-administrators",children:[{value:"4.1 Configure School Visit Forms",id:"41-configure-school-visit-forms",children:[]},{value:"4.2 Manage Application Users",id:"42-manage-application-users",children:[]},{value:"4.3 Update User Designation to Form Mapping",id:"43-update-user-designation-to-form-mapping",children:[]},{value:"4.4 Create Visualizations of Submissio Data",id:"44-create-visualizations-of-submissio-data",children:[]},{value:"4.5 View Application Performance Data",id:"45-view-application-performance-data",children:[]}]},{value:"5. Frequently Asked Questions",id:"5-frequently-asked-questions",children:[]}],l={rightToc:c};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(o.b)("p",null,"State Education Departments across India have been driving reforms in school monitoring processes. Over the years, the different State Education Departments have introduced technology to collect data for assessment, for monitoring visits and also for visualizing data on online dashboards for conducting effective department reviews. The focus of these reforms has been to improve the quality of data collection exercises conducted by different levels of officials within the department and to enable precise decision making at the state level. "),Object(o.b)("p",null,"The objective of Samiksha is to transform school monitoring by providing an application with a highly configurable set of features for data collection and visualization. Samiksha is designed for this specific governance use case and is built on OpenSource in a modular, reusable and scalable manner. The application design is created with the assumption that the engineering team of the State National Informatics Centre or from a private technology firm working with the State Education Departments will be able to deploy and maintain this product with the documentation provided."),Object(o.b)("p",null,"Through Samiksha the State Education Department can have a mobile application with configurable monitoring and mentoring forms. This application can be used by the department officials while conducting school visits. Management of users of this application, configuration of forms, visualization of the data collected and tracking of the application performance can all be managed within this application by non-technical functional owners within the State Education Department. "),Object(o.b)("h2",{id:"2-samiksha-overview"},"2. Samiksha Overview"),Object(o.b)("h3",{id:"21-governance-use-cases"},"2.1 Governance Use Cases"),Object(o.b)("p",null,"The Samiksha product can be used for managing the following activities of the State Education Department:\n1. Primary School Monitoring by DEO, BEOs\n2. Secondary School Monitoring by DEO, BEOs\n3. Mentoring Visits by BRCCs\n4. State Initiative Tracking Visits (such as SAT visits) by any State Department Officials"),Object(o.b)("h3",{id:"22-usage-status-across-india"},"2.2 Usage Status Across India"),Object(o.b)("p",null,"Samiksha is being used by the State Education Departments of the following states:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Himachal Pradesh"),Object(o.b)("li",{parentName:"ol"},"Haryana")),Object(o.b)("p",null,"Total usage of the Samiksha product as on 12 April 2020 is summarized below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Total active users >35,000"),Object(o.b)("li",{parentName:"ol"},"Total visit data submissions > 1,10,000 ")),Object(o.b)("h3",{id:"23-key-benefits"},"2.3 Key Benefits"),Object(o.b)("p",null,"We have observed the following key benefits that the states using Samiksha have experienced."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.3.1 Improved compliance")," - Compliance of school visits has increased significantly with structured processes for data collection, reporting and reviews."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.3.2 Structured reviews")," - Problem solving and decision making in reviews conducted at a state, district and block levels have been increasingly supported by the timely and structured data collected through these monitoring and mentoring visits."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.3.3 Increased monitoring coverage")," - In Haryana mentoring and monitoring exercises were limited to primary schools and after continued use of Samiksha for primary school monitoring, the State Education Department expanded these visits for secondary schools as well."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.3.4 Improved teacher feedback quality")," - With consistent feedback being provided by mentors through the class observation visits teachers have been able to receive timely and regular feedback from mentors."),Object(o.b)("h3",{id:"24-alternatives"},"2.4 Alternatives"),Object(o.b)("p",null,"There are existing alternative processes that can be used for conducting these monitoring visits. These have been summarized below:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.4.1 Pen & Paper based data collection")," - Pros cons to be added"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.4.2 OMR based data collection")," - Pros cons to be added"),Object(o.b)("h3",{id:"25-core-features"},"2.5 Core Features"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.5.1 For State Department Monitoring & Mentoring Staff")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ability to view forms based on their designation"),Object(o.b)("li",{parentName:"ul"},"Ability to fill and submit school visit forms"),Object(o.b)("li",{parentName:"ul"},"Ability to view past school visit submission data"),Object(o.b)("li",{parentName:"ul"},"Ability to update profile information")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.5.2 For State Department Reviewers")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ability to view, in real time, complete details of the school visit submissions"),Object(o.b)("li",{parentName:"ul"},"Ability to view, in real time, summarized views of the school visit submissions"),Object(o.b)("li",{parentName:"ul"},"Ability to download dashboard views as PDFs")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.5.3 For Process Administrators")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ability to create and manage school visit forms"),Object(o.b)("li",{parentName:"ul"},"Ability to create and manage user profiles"),Object(o.b)("li",{parentName:"ul"},"Ability to update designation to form mapping (for designation based access to forms)"),Object(o.b)("li",{parentName:"ul"},"Ability to create visualizations of the visit submissions"),Object(o.b)("li",{parentName:"ul"},"Ability to view application performane statistics")),Object(o.b)("h3",{id:"26-technical-architecture"},"2.6 Technical Architecture"),Object(o.b)("p",null,"Technical architecture diagram to be added (ongoing)"),Object(o.b)("h2",{id:"3-high-level-specifications"},"3. High Level Specifications"),Object(o.b)("h3",{id:"31-configurable-data-collection-forms"},"3.1 Configurable Data Collection Forms"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.1.1 Simple Configuration Interface"),"\t- Configure highly complex data collection forms in a few minutes though a simple Google Form like interface or by using an excel sheet. The forms have an extensive set of capabilities to enable different types of data points to be collected."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.1.2 Geo Location Capture"),"\t- Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.1.3 Offline Enabled"),"\t- Update jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.1.4 Bilingual Forms"),"\tDefine and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activity"),Object(o.b)("h3",{id:"32-configurable-mobile-application"},"3.2 Configurable Mobile Application"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.2.1 Whitelabel UI")," - Whitelabel the mobile application by adding the theme colors, splash screens, login screens, logos, about us information based on your department branding."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.2.2 Add / Remove Pages"),"\t- Add custom pages within the application to share information with the users about the purpose of the application, tutorial videos, helpline numbers, and instructions."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.2.3 Jurisdiction Data")," - Update\tUpdate jurisdiction data consisting of districts, blocks, cluster, GPs, schools and more live from the backend. If a new school, GP or cluster is added it can be made live immediately."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.2.4 Notifications")," -\tDefine and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activityDefine and serve in-app trigger based notifications to users to guide them through the user flow of the monitoring or mentoring activity."),Object(o.b)("h3",{id:"33-user-authentication--management"},"3.3 User Authentication & Management"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.3.1 User Mangement"),"\t- Create and manage users through a pre-designed admin panel and add variables for each user such as role (Teacher, BEO, DEO, Mentors), jurisdiction (District, Block, School)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.3.2 Role Based Form Access")," -\tEnable or disable access to data collection forms on the application based on the role of the application users"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.3.3 View Profile Details (in App)")," -\tAllow users to view or edit specific variables of their profile information through the mobile application itself "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.3.4 OTP Based Password Reset"),"\t- Users can reset their passwords though an SMS based password reset functionality in the application "),Object(o.b)("h3",{id:"34-visualize-form-information"},"3.4 Visualize Form Information"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.4.1 Easy to Configure Graphs"),"\t- Create visualizations with a few clicks using Metabase, a configurable visualization tool with detailed documentation"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.4.2 Filtered Views"),"\t- Add filters to graphs to show data grouped by any variable in your dataset. Typically used for grouping by school, cluster, block, district, academic year."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.4.3 Add Images & Logos"),"\t- Insert government state education department logos and local on-ground images across dashboards to make them look consistent to the state department branding."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.4.4 Generate PDF Views"),"\t- Configure PDFs for dashboard views to enable users to download and print different views of the dashboard. This is typically used by block officers to put up monthly dashboard based report on notice boards in their offices or by teachers in schools."),Object(o.b)("h3",{id:"35-monitor-application-performance"},"3.5 Monitor Application Performance"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.5.1 Track User Engagement"),"\t- Track user engagement at a per minute, per 30 minutes, per 24 hours to understand peak engagement period of the application"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.5.2 Track Crash Events")," -\tTrack any crash events with a detailed log of the user activity to debug any issue that the user is facing on the ground"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.5.3 Setup Monitoring Alerts")," - Setup email alerts for different monitoring objectives such as new type of crash event observed, CPU usage >75%, disk space >80% and more"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"3.5.4 Visualize Monitoring Data")," - Visualize all application events to understand trends of usage behaviour of your application through a single view"),Object(o.b)("h2",{id:"4-for-administrators"},"4. For Administrators"),Object(o.b)("h3",{id:"41-configure-school-visit-forms"},"4.1 Configure School Visit Forms"),Object(o.b)("h3",{id:"42-manage-application-users"},"4.2 Manage Application Users"),Object(o.b)("h3",{id:"43-update-user-designation-to-form-mapping"},"4.3 Update User Designation to Form Mapping"),Object(o.b)("h3",{id:"44-create-visualizations-of-submissio-data"},"4.4 Create Visualizations of Submissio Data"),Object(o.b)("h3",{id:"45-view-application-performance-data"},"4.5 View Application Performance Data"),Object(o.b)("h2",{id:"5-frequently-asked-questions"},"5. Frequently Asked Questions"),Object(o.b)("p",null,"To be added based on comments recieved"))}b.isMDXComponent=!0},192:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return m}));var a=i(0),n=i.n(a);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s({},t,{},e)),i},d=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(i),u=a,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||o;return i?n.a.createElement(m,s({ref:t},l,{components:i})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);