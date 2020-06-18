(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var o=a(1),n=a(9),i=(a(0),a(232)),s={id:"evolutionsamiksha",title:"Evolution of Samiksha",author:"Sukhpreet Sekhon",author_title:"Technology @Samagra",author_url:"https://www.linkedin.com/in/sukhpreetsekhon/",author_image_url:"https://samagra-development.github.io/docs/img/blogss.jpg",tags:["bureaucrats","govt engineers","govOS"]},r={permalink:"/docs/blog/evolutionsamiksha",source:"@site/blog/2020-05-14-samiksha.md",description:"[Samiksha](https://tech.samagragovernance.in/index.php/home/ed-samiksha/) is an OpenSource product designed to improve school quality control [activities](https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#21-governance-use-cases) conducted by state education department officials in government schools. This typically includes mentoring to support teachers based on observations of their in-class teaching practices and monitoring to inspect the status of infrastructure and quality of school processes such as classroom teaching, availability of teaching learning materials, functional toilets, completion of civil works projects in the school and so on.",date:"2020-05-14T00:00:00.000Z",tags:[{label:"bureaucrats",permalink:"/docs/blog/tags/bureaucrats"},{label:"govt engineers",permalink:"/docs/blog/tags/govt-engineers"},{label:"govOS",permalink:"/docs/blog/tags/gov-os"}],title:"Evolution of Samiksha",truncated:!0,prevItem:{title:"Using WhatsApp, SMS, IVRS, direct calls, emails for communication by Governments",permalink:"/docs/blog/communication"},nextItem:{title:"Democratizing Technology Product Development for Governments",permalink:"/docs/blog/ourjourney"}},c=[{value:"Inquiry as an art",id:"inquiry-as-an-art",children:[]},{value:"School mentoring and monitoring as a process of inquiry",id:"school-mentoring-and-monitoring-as-a-process-of-inquiry",children:[]},{value:"Designing school observations processes on Samiksha application control console",id:"designing-school-observations-processes-on-samiksha-application-control-console",children:[]},{value:"Conducting school observation visits",id:"conducting-school-observation-visits",children:[]},{value:"Reviewing school observation data to take informed decisions",id:"reviewing-school-observation-data-to-take-informed-decisions",children:[]},{value:"Future of Samiksha",id:"future-of-samiksha",children:[]}],l={rightToc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://tech.samagragovernance.in/index.php/home/ed-samiksha/"}),"Samiksha")," is an OpenSource product designed to improve school quality control ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#21-governance-use-cases"}),"activities")," conducted by state education department officials in government schools. This typically includes mentoring to support teachers based on observations of their in-class teaching practices and monitoring to inspect the status of infrastructure and quality of school processes such as classroom teaching, availability of teaching learning materials, functional toilets, completion of civil works projects in the school and so on."),Object(i.b)("p",null,"Samiksha consists of a mobile application, an application control console and a set of review dashboards. Since July 2019, Samiksha has been used by state education departments of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#22-usage-status-across-india"}),"two states")," (Haryana and Himachal Pradesh), nearly 30,000 government schools with over 14,000 active government users."),Object(i.b)("p",null,"This post is about how we factored in user-centricity into the design of ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs"}),"Samiksha"),"."),Object(i.b)("h2",{id:"inquiry-as-an-art"},"Inquiry as an art"),Object(i.b)("p",null,"Curiosity drives inquiry. Passion for curiosity and the method of inquiry can lead to discovery of insightful and actionable information. When a teacher sparks the curiosity of a student to understand addition of numbers using a bunch of straws, the teacher is unleashing the student on a path of inquiry to discover information about how addition works. Consider the alternative. If the teacher says, \u201cLet\u2019s do addition. Now write 5+5=10 in your notebooks and remember it\u201d. In this case, students would mindlessly and often grudgingly copy paste information without inquiring further."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://samagra-development.github.io/docs/img/samikshavisit.png",alt:null}))),Object(i.b)("p",null,"Our principle for designing Samiksha was to build a product that makes the process of inquiry into the quality of school processes as interesting for government officials as the inquiry into addition of numbers using a bunch of straws for students."),Object(i.b)("h2",{id:"school-mentoring-and-monitoring-as-a-process-of-inquiry"},"School mentoring and monitoring as a process of inquiry"),Object(i.b)("p",null,"To start with, there are three types of government users who are responsible for the success of mentoring and monitoring during  school visits. These stakeholders include:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Administrators ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"(state level officials responsible for designing school quality control process)")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Mentors & Monitors ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"(District Education Officers, Block Education Officers, Cluster Education Officers and coordinators for different initiatives at the state level who are responsible for conducting these visits and collecting information)")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Reviewers ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"(State, District and Block leaders who are responsible for periodically reviewing information and taking decisions for improving quality of education in their respective state)"))))),Object(i.b)("p",null,"For each of these users, our governance consulting teams understood what users were expected to do and identified challenges they faced. On the basis of this information, our technology team created a user-centric process of inquiry for all the three users listed above. "),Object(i.b)("h2",{id:"designing-school-observations-processes-on-samiksha-application-control-console"},"Designing school observations processes on Samiksha application control console"),Object(i.b)("p",null,"Administrators are state level officials who are responsible for designing the school observation process. Some of the aspects that administrators have to plan for, are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Designing school observation forms"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"What questions should be asked in the school observation forms?"),Object(i.b)("li",{parentName:"ul"},"How to update questions on an ongoing basis?"),Object(i.b)("li",{parentName:"ul"},"How to provide access to different school observation forms to different officials?"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Managing base data in the school observation application database"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"How to update user information in the database?"),Object(i.b)("li",{parentName:"ul"},"How to update school lists in the database in case of mergers or closures of schools?"),Object(i.b)("li",{parentName:"ul"},"How to update the total number of visits to be conducted by each official in a month?")))),Object(i.b)("p",null,"In Haryana and Himachal Pradesh, the state education department administrators were facing two challenges with respect to their technology solutions for school quality monitoring. Challenges were:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"High dependency on engineering teams from vendor agencies to update basic information such as data collection forms and user profile data in the application. This would lead to loss of time. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Limited feature extensibility of the technology product thereby making it difficult to implement new features such as designation-based access to school observation forms. This would lead to loss in user experience as the users would have to view all observation forms even if they were not relevant to the user. "))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Let\u2019s say you have to write an essay using Microsoft Word and every time you need to change the font of the document you need to speak with a Microsoft engineer. Sounds tedious doesn\u2019t it?"))),Object(i.b)("p",null,"Our primary objective while building Samiksha was to ensure that administrators, who are typically non-engineers, can have the ability to manage basic aspects through the application control console independently. Today, while using Samiksha, administrators can:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#41-configure-school-visit-forms"}),"create their own data collection forms")," using excel sheets"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs/#42-manage-application-metadata"}),"manage the base data")," of users and school lists"),Object(i.b)("li",{parentName:"ul"},"define role-based access to school observation forms")),Object(i.b)("p",null,"These are examples of how transferring control of managing basic aspects of the technology to administrators can make them more independent in managing school quality control processes and more engaged in using technology to fulfill their responsibilities. Adding role-based access to observation forms was possible in Samiksha as it is built as a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://samagra-development.github.io/docs/blog/ourjourney/"}),"reusable, scalable, extensible and deployable")," product."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://media.giphy.com/media/XDY6JYECXBXyOnGZMe/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Screenshots from the Samiksha application control panel being used by administrators in the state education department in Himachal Pradesh and Haryana"))),Object(i.b)("h2",{id:"conducting-school-observation-visits"},"Conducting school observation visits"),Object(i.b)("p",null,"Mentors and monitors are responsible for visiting schools to collect information regarding the quality of school processes. Some of the aspects that mentors and monitors look at while conducting the visit are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Preparation required for the school observation visits"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"What to physically bring for the visit (printed formats, cell phone with internet)?"),Object(i.b)("li",{parentName:"ul"},"What is the past observation visit information for schools to be visited?"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Implementing the school observation process"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"What are the questions to be covered during the school observation visit such as classroom infrastructure, classroom teaching observation, teaching-learning material availability, head teacher discussion? "),Object(i.b)("li",{parentName:"ul"},"How should the observation visit be conducted in terms of what data needs to be collected first, second, and so on? ")))),Object(i.b)("p",null,"While designing the questions it is important to consider the user scenarios for mentors and monitors who conduct these observation visits. Our consulting teams in both Haryana and Himachal Pradesh had joint discussions with mentors and monitors to understand their perspective. Key challenges they faced with their existing observation mechanisms were:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Questions in data collection forms seemed like an endless checklist"),Object(i.b)("li",{parentName:"ol"},"Feedback collected was fairly detailed but not visual, thereby often missing quality nuances "),Object(i.b)("li",{parentName:"ol"},"Flow of questions did not take into account how mentors and monitors physically moved within the school to collect the process quality feedback")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Let\u2019s say you were still working on that essay on Microsoft Word and you just updated the table of contents. To your surprise the headings in the table of contents are not correctly ordered. Your \u2018conclusion\u2019 is above the \u2018abstract\u2019! That will introduce an unnecessary challenge for your readers to navigate when they try to read your essay."))),Object(i.b)("p",null,"Here our objective was to enable mentors and monitors to focus more on quality engagement with school teachers while conducting observation visits as opposed to making the data collection exercise an end in itself. Some of the points that our consulting teams, in collaboration with the administrators, instituted into the design of the data collection forms were: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Decreased the number of questions in observation forms with a brutal focus on understanding quality of school functioning"),Object(i.b)("li",{parentName:"ul"},"Clustered questions into sections to create a flow of questions mirroring potential on-ground movement of mentors and monitors"),Object(i.b)("li",{parentName:"ul"},"Made conditional questions visible only when required, thereby avoiding extra information in the observation visit forms"),Object(i.b)("li",{parentName:"ul"},"Included the ability to upload images to get a visual perspective of school functioning "),Object(i.b)("li",{parentName:"ul"},"Also, made available past school observation data on the Samiksha mobile app and the dashboards to view the trend of school performance across indicators ")),Object(i.b)("p",null,"These are examples of how minor process changes can improve the experience of mentors and monitors who have to conduct anywhere close to 5-10 school visits every month of the academic year."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://media.giphy.com/media/PhBI1fhl0tPxqcWOul/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Screenshots from the Samiksha mobile applications being used Himachal Pradesh and Haryana"))),Object(i.b)("p",null,"Vijay Kumar, Additional Block Resource Coordinator, Sirsa, Haryana says, ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"\u201cSamiksha is easy to use. The mentoring form is designed well as it is thorough. I also like how it allows us to capture discussions with teachers and HMs, along with any classroom best practices being followed in the school.\u201d"))),Object(i.b)("h2",{id:"reviewing-school-observation-data-to-take-informed-decisions"},"Reviewing school observation data to take informed decisions"),Object(i.b)("p",null,"So administrators design the process, mentors implement the process, and reviewers who are typically at the state, district, block and cluster levels are responsible for reviewing the data collected through the school observation process. To ensure these reviews are effective some questions that reviewers look at includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data authenticity and quality "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Is the observation feedback complete and conducted as per guidelines?"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data inferences "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"What is the trend of observation visit feedback from these visits?"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Data visualization"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"How can the school observation data be visualized to understand basic trends?")))),Object(i.b)("p",null,"While reviews are highly dependent on the person who is leading it and how s/he evaluates information to inform decisions, there are common challenges that we have observed across these reviews. These challenges are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"School visit feedback data is not summarized and available for reviews on time "),Object(i.b)("li",{parentName:"ol"},"Any unexplained deviation in data leads to it being disregarded as incorrect and useless as no one monitored and inquired about the deviation earlier when it occurred"),Object(i.b)("li",{parentName:"ol"},"Visualizations of the observation feedback on the dashboard do not inspire any further inquiry into the data")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Let\u2019s say your professor asks for a printout of your essay to review. Your heartbeat is racing as you had worked so hard and now it is time to get a decision on your grades. Unfortunately, the printer you used had low ink and certain sections of your essay are not legible on the printout! However, your supervisor continues to review the essay. You would be quite frightened to learn what decision she took to grade your essay, after reading the barely legible text on the printout!"))),Object(i.b)("p",null,"When we were designing Samiksha from the perspective of the reviewers, we wanted to ensure that they had maximum visibility of data for driving an effective review. Some of the things we solved for, included:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enabled reviewers (any non-technical person) to ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs#43-create-visualizations-of-submission-data"}),"configure their own visualizations")," in a few clicks as opposed to waiting for days for engineering teams to create these visualizations "),Object(i.b)("li",{parentName:"ul"},"Created basic compliance dashboards for reviewers to track completeness and compliance of school visits on a real-time basis (e.g. number of visits conducted by officials, by schools, by observation type)"),Object(i.b)("li",{parentName:"ul"},"Created configurable dashboards to visualize school observation data and facilitate inquiry for bringing out macro trends for decision making")),Object(i.b)("p",null,"These are examples of how enabling reviewers and their internal teams to create basic dashboards independently can lead to higher engagement to understand, explore and leverage school visit data to make informed decisions."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://media.giphy.com/media/Wp0eqM753Js4OtcW6U/giphy.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Samiksha dashboards used by the state education departments in Himachal Pradesh and Haryana to drive reviews based on data from  the Samiksha app."))),Object(i.b)("h2",{id:"future-of-samiksha"},"Future of Samiksha"),Object(i.b)("p",null,"In the coming months, we hope different states will deploy the OpenSource Samiksha product to streamline and conduct school visit exercises. Our objective is to make this process of inquiry into school process performance an engaging and insightful data exercise for all stakeholders."),Object(i.b)("p",null,"We continue to observe and understand this process across the states that we are working in and identify further use cases that can be enabled through Samiksha. Here are a few more things we are thinking about: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enabling configurable prompts for monitors while they conduct the school visit (if teaching learning material is not present then a prompt can indicate a teaching method to be shared with the teacher for teaching a topic in the absence of that material but making it as interactive for the students)"),Object(i.b)("li",{parentName:"ul"},"Enabling configurable SMS/WhatsApp notifications to share school visit summary with reviewers"),Object(i.b)("li",{parentName:"ul"},"Using machine learning to auto analyse image data to manage image verification at scale")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Read more about the Samiksha ",Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://samagra-development.github.io/docs/docs/SamikshaFuncSpecs"}),"specifications")," and ",Object(i.b)("a",Object(o.a)({parentName:"em"},{href:"https://samagra-development.github.io/docs/docs/deploysamiksha"}),"how to deploy")," it for your own state."))))}b.isMDXComponent=!0},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return p}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},h=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=b(a),u=o,p=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return a?n.a.createElement(p,r({ref:t},l,{components:a})):n.a.createElement(p,r({ref:t},l))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=a[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);