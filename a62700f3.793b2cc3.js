(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),r=(n(0),n(201)),i={id:"Grove",title:"App Logging",sidebar_label:"App Logging"},l={id:"Grove",title:"App Logging",description:"# App Logging and Crash Reporting Module\r",source:"@site/docs/App Logging.md",permalink:"/docs/docs/Grove",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/App Logging.md",sidebar_label:"App Logging",sidebar:"someSidebar",previous:{title:"Offline Handling Module",permalink:"/docs/docs/OfflineHandlingModule"},next:{title:"Communicating Among Modules",permalink:"/docs/docs/CommunicatingAmongModules"}},c=[{value:"Integrating the Module into the Application",id:"integrating-the-module-into-the-application",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Pushing the App logs to the Remote Server",id:"pushing-the-app-logs-to-the-remote-server",children:[]},{value:"Configuring Remote Error/Crash Reporting Functionality",id:"configuring-remote-errorcrash-reporting-functionality",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"app-logging-and-crash-reporting-module"},"App Logging and Crash Reporting Module"),Object(r.b)("p",null,"For any app developer, being able to monitor the deplyed app's statibility is of paramount importnace. There is nothing important than keepng the app crash count to its bare minimum. As app crashes not only end up creating a bad user experience but also contribute in a colossal way to a bad app reputation, implying that enough attention isn't being paid to what is being rolled out in production environment. Other than that, for a product based app development, it is always helpful to have access to user's app activities to debug certain issues being faced by the end users."),Object(r.b)("p",null,"As, Mobile developers we are usually familiar with tools such as Google Analytics or Fabric.io but they are analytics or crashlytics systems, and not full-fledged logging solutions. Remote logging debugging a much simpler and smoother process."),Object(r.b)("p",null,"Fortunately, for this particular scenario, we have built on a app logging and app crash reporting functionality, which has been built on widely available open-soruce tools and libraries and can be easily integerated into your android app, with minimal developer effort. This will help you as developers identify and respond to common crashes in a timely manner. The module also would include the option to retrieve the app logs and also then further segregate them ad push them to back-end server. Also, included in this, are certain more modifications which are listed ahead in the document."),Object(r.b)("p",null,"Think of this tool as alert guard dog, always ready to let you know if something goes wrong so you can identify the culprit and contain it. It also offers critical data about the crashes, including which devices were affected most, the stack trace, ways to debug them and so on."),Object(r.b)("h1",{id:"overview"},"Overview"),Object(r.b)("p",null,"The module developed is a dual faceted feature. First, facet is essentially a ",Object(r.b)("strong",{parentName:"p"},"Logger Library")," which has been written on top of Android's native ",Object(r.b)("strong",{parentName:"p"},"Log")," for debugging purpose. Android-Logger and Timber which are natively provided print logs message on logcat in Android Studio that doesn't help to get the behavior of app in production, which means that these logs message aren't accessible to the developers. Remote logging is the solution that helps debug the problem. Hence our module allows the users to store the logs into the database, which can be pulled anytime whenever you want to. As a developer, you can also push the fetched app logs to your remote server for debugging purposes as a file."),Object(r.b)("p",null,"The second facet of the feature is ",Object(r.b)("strong",{parentName:"p"},"remote crash/error reporting"),", which has been written on the top of ",Object(r.b)("strong",{parentName:"p"},"[Sentry]"),"(",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://sentry.io/"}),"https://sentry.io/"),"). Once the app encounters any Uncaught exception or any un-considered scenarios leading to sudden closing of application, then the corresponding stack-trace at the point of time, would be shared to Sentry Server. The feature also includes an option for the user to configure sending the reported crash to email as well. So whenever the app encounters a crash, the corresponding error related data will be sent both to the Sentry Server as well as to the email configured."),Object(r.b)("h2",{id:"integrating-the-module-into-the-application"},"Integrating the Module into the Application"),Object(r.b)("p",null,"Download the latest version or grab via Gradle."),Object(r.b)("p",null,"The library is available on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dl.bintray.com/piyushgupta27/maven/com/hypertrack/hyperlog/"}),Object(r.b)("inlineCode",{parentName:"a"},"mavenCentral()"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://jcenter.bintray.com/com/hypertrack/hyperlog/"}),Object(r.b)("inlineCode",{parentName:"a"},"jcenter()")),". In your module's ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle"),", add the following code snippet and run the ",Object(r.b)("inlineCode",{parentName:"p"},"gradle-sync"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"dependencies {\n    ...\n    compile 'com.hypertrack:hyperlog:0.0.10'\n    ...\n}\n")),Object(r.b)("h2",{id:"initialization"},"Initialization"),Object(r.b)("p",null,"Inside ",Object(r.b)("inlineCode",{parentName:"p"},"onCreate")," of Application class or Launcher Activity, in the manner as follows"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"IGroveLoggingComponent initializer = ComponentManager.iGroveLoggingComponent;\nif(initializer != null) {\n    initializer.initializeLoggingComponent(this, this, getApplicationContext(), (context, s, s1, s2, s3) -> {\n    }, true, true);\n}\n")),Object(r.b)("p",null,"The method signature of the initialisation invocation is as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"public void initializeLoggingComponent(\n        Application application,\n        LoggableApplication applicationInstance, Context context,\n        ErrorActivityHandler errorActivityHandler,\n        boolean isUCEHEnabled,\n        boolean isHyperlogEnabled,\n        String domainID,\n        String senderEmailID,\n        String receiverEmailID\n)\n")),Object(r.b)("p",null,"Specified by:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"initializeLoggingComponent")," in interface ",Object(r.b)("inlineCode",{parentName:"p"},"com.samagra.grove.contracts.IGroveLoggingComponent")),Object(r.b)("p",null,"Parameters:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"application")," - App Instance - ",Object(r.b)("inlineCode",{parentName:"p"},"Application")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"applicationInstance")," - Loggable Application Interface object - ",Object(r.b)("inlineCode",{parentName:"p"},"LoggableApplication")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"context")," - Context Instance - ",Object(r.b)("inlineCode",{parentName:"p"},"Context")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"errorActivityHandler")," - Interface/Callback object to communicate back to main app ",Object(r.b)("inlineCode",{parentName:"p"},"ErrorActivityHandler")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isUCEHEnabled")," - Flag to control the initialisation of UncaughtExceptionHandler Object - ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html?is-external=true",title:"class or interface in java.lang"}),Object(r.b)("inlineCode",{parentName:"a"},"Boolean"))," You can enable or disable it as per your wish. This flag will allow the user to receive email on the address configured, whenever app will crash."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"isHyperlogEnabled")," - Flag to control the initialisation of Hyperlog to store App logs in local device - ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html?is-external=true",title:"class or interface in java.lang"}),Object(r.b)("inlineCode",{parentName:"a"},"Boolean"))," You can enable or disable it as per your wish. This flag will allow the user to store the app logs in the local database as a file, and also push them to remote server whenever triggered."),Object(r.b)("h2",{id:"pushing-the-app-logs-to-the-remote-server"},"Pushing the App logs to the Remote Server"),Object(r.b)("p",null,"As mentioned ahead, you would be able to do so, if you would have enabled that feature. If that is the case. Whenever you would want to push the logs to the server, invoke the following method in the way mentioned ahead."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'IGroveLoggingComponent initializer = ComponentManager.iGroveLoggingComponent;\nif(initializer != null) {\n    initializer.uploadLogFile("API_ENDPOINT_URL", this, "AUTHORIZATION_TOKEN");\n}\n')),Object(r.b)("p",null,"Set the API Endpoint URL in place of ",Object(r.b)("inlineCode",{parentName:"p"},"API_ENDPOINT_URL")," and send the API's authorisation token in place of ",Object(r.b)("inlineCode",{parentName:"p"},"AUTHORIZATION_TOKEN"),"."),Object(r.b)("h2",{id:"configuring-remote-errorcrash-reporting-functionality"},"Configuring Remote Error/Crash Reporting Functionality"),Object(r.b)("p",null,"Follow the steps mentioned ahead to configure the Error reporting within your app project."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create an Account on ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://sentry.io/signup/"}),"Sentry"),". Fill in all your details as required. This link redirects you the free developer version of Sentry. As per your increased demand and load, you can also buy premium plans for the same."),Object(r.b)("li",{parentName:"ol"},"After you successfully create an user account, Select the platform for which you need error reporting. In this case, please select ",Object(r.b)("strong",{parentName:"li"},"Android"),". Your project will be created after selecting the ",Object(r.b)("strong",{parentName:"li"},"Create Project")," button."),Object(r.b)("li",{parentName:"ol"},"Update your build.gradle files as below")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// ADD JCENTER REPOSITORY\nrepositories {\n    jcenter()\n}\n\n// ADD COMPATIBILITY OPTIONS TO BE COMPATIBLE WITH JAVA 1.8\nandroid {\n    compileOptions {\n        sourceCompatibility = JavaVersion.VERSION_1_8\n        targetCompatibility = JavaVersion.VERSION_1_8\n    }\n}\n\n// ADD SENTRY ANDROID AS A DEPENDENCY\ndependencies {\n    implementation 'io.sentry:sentry-android:{version}'\n}\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"After this step, Go to your User Profile on Sentry, using this ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://sentry.io/organizations"}),"link"),". Within the profile section, Search for Client Keys(DSN) in the Search tab or Directl go to Client Keys(DSN) Section (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://sentry.io/settings/nbujnn/projects/nbujnn/keys/"}),"https://sentry.io/settings/[PROJECT_NAME]/projects/[PROJECT_NAME]/keys/"),". Copy the DSN value from there. Include this in your build.gradle")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'android {\n\n...\nbuildTypes {\n    release {\n    ...\n  buildConfigField \'String\', "dsn", "\\"DSN_VALUE\\""\n  }\n    debug {\n        buildConfigField \'String\', "dsn", "\\"DSN_VALUE\\""\n  }\n}\n...\n...\n')),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Integrating Proguard")),": To use ProGuard with Sentry, please follow the following steps:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Gradle Integration")),": Using Gradle (Android Studio) in your ",Object(r.b)("inlineCode",{parentName:"li"},"app/build.gradle")," add:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"apply plugin: 'io.sentry.android.gradle'\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"And declare a dependency in your top-level ",Object(r.b)("inlineCode",{parentName:"li"},"build.gradle"),":")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"buildscript {\n    repositories {\n        mavenCentral()\n    }\n\n    dependencies {\n        classpath 'io.sentry:sentry-android-gradle-plugin:1.7.31'\n    }\n}\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the root level of your project, add a file ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Sentry.properties"))," with contents as follows:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"defaults.project=your-project\ndefaults.org=your-org\nauth.token=YOUR_AUTH_TOKEN\n\n")),Object(r.b)("p",null,"You can find your authentication token ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://sentry.io/api/"}),"on the Sentry API page"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Gradle Configuration")),": Additionally, you can expose a few configuration values directly in Gradle:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"sentry {\n    // Disable or enable the automatic configuration of ProGuard\n    // for Sentry.  This injects a default config for ProGuard so\n    // you don't need to do it manually.\n    autoProguardConfig true\n\n    // Enables or disables the automatic upload of mapping files\n    // during a build.  If you disable this, you'll need to manually\n    // upload the mapping files with sentry-cli when you do a release.\n    autoUpload true\n\n    // Disables or enables the automatic configuration of Native Symbols\n    // for Sentry. This executes sentry-cli automatically so\n    // you don't need to do it manually.\n    // Default is disabled.\n    uploadNativeSymbols false\n\n    // Does or doesn't include the source code of native code for Sentry.\n    // This executes sentry-cli with the --include-sources param. automatically so\n    // you don't need to do it manually.\n    // Default is disabled.\n    includeNativeSources false\n}\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can also check other Proguard related functionalities provided by Sentry in the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.sentry.io/platforms/android/#proguard"}),"documentation"))),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Add file ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"logging.properties"))," in the root level of your project.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"#Enable the Console and Sentry handlers\nhandlers=java.util.logging.ConsoleHandler,io.sentry.jul.SentryHandler\n\n#Set the default log level to INFO\n.level=INFO\n\n#Override the Sentry handler log level to WARNING\nio.sentry.jul.SentryHandler.level=WARNING\n")),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"When initialising the component, replace the domainID variable with, ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"BuildConfig.dsn")),"."),Object(r.b)("li",{parentName:"ol"},"You are now set to go, build the project and manually trigger a crash, could it be a NullPointerException for example, you should be able to see the App logs on the Sentry Panel.")))}s.isMDXComponent=!0},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,g=b["".concat(i,".").concat(u)]||b[u]||d[u]||r;return n?o.a.createElement(g,l({ref:t},p,{components:n})):o.a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);