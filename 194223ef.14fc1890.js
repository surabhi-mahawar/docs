(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),i=(n(0),n(192)),r={id:"GettingStarted",title:"Build Your Own App Using Samagra Components",sidebar_label:"Build Your App"},c={id:"GettingStarted",title:"Build Your Own App Using Samagra Components",description:"# Intro into the Samagra Android App",source:"@site/docs/Getting Started With Android.md",permalink:"/docs/docs/GettingStarted",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Getting Started With Android.md",sidebar_label:"Build Your App",sidebar:"someSidebar",previous:{title:"Deploy Your Own Pariksha",permalink:"/docs/docs/deploypariksha"},next:{title:"Components Overview",permalink:"/docs/docs/ComponentsOverview"}},l=[{value:"Before We Start the Tutorial",id:"before-we-start-the-tutorial",children:[]},{value:"Tip",id:"tip",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"What to expect from the tutorial",id:"what-to-expect-from-the-tutorial",children:[]},{value:"Getting familiar with the basics",id:"getting-familiar-with-the-basics",children:[]},{value:"Setting up Samagra Android starter App",id:"setting-up-samagra-android-starter-app",children:[]},{value:"Configuring Home Screen",id:"configuring-home-screen",children:[]},{value:"Event Configuring",id:"event-configuring",children:[]},{value:"Form Downloading and Management Module",id:"form-downloading-and-management-module",children:[{value:"What is ODK? How to use ODK? Creating a Form in ODK?",id:"what-is-odk-how-to-use-odk-creating-a-form-in-odk",children:[]},{value:"Setting up Form Downloading and Management Module in your Application",id:"setting-up-form-downloading-and-management-module-in-your-application",children:[]},{value:"Filling up a particular form",id:"filling-up-a-particular-form",children:[]},{value:"Seeing results",id:"seeing-results",children:[]},{value:"Choosing a form, rather than opening specific form",id:"choosing-a-form-rather-than-opening-specific-form",children:[]},{value:"Offline viewing of data and sending them again",id:"offline-viewing-of-data-and-sending-them-again",children:[]},{value:"Prefilling form",id:"prefilling-form",children:[]}]},{value:"Ancillary Screen Module",id:"ancillary-screen-module",children:[{value:"Screens Included in the Ancillary Screens Module",id:"screens-included-in-the-ancillary-screens-module",children:[]},{value:"Integrating Module into your Project",id:"integrating-module-into-your-project",children:[]},{value:"Initialization and Usage of Ancillary Screens Module",id:"initialization-and-usage-of-ancillary-screens-module",children:[]},{value:"Using this module",id:"using-this-module",children:[]}]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"intro-into-the-samagra-android-app"},"Intro into the Samagra Android App"),Object(i.b)("h2",{id:"before-we-start-the-tutorial"},"Before We Start the Tutorial"),Object(i.b)("p",null,"We at Samagra aim at solving complex governance problems leveraging the wide use of open source technologies. Among all our initiatives in different states, we have developed different mobile applications defined over various different problem statements spread across a number of domains - including Education, Agriculture, Digital Literacy. Our experiences have helped us to learn certain pointers which, we believe are useful for any developer, particularly trying to solve the complex governance problems."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open source technologies are usually the best approach for going around any problem, given the support you can achieve in terms of roadblocks you might encounter while development, augmented by the inputs that you could further disseminate from your app development journey. Hence, Collaborative Learning is a key to a better plan of software development.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"We realised that even if different problem statements come into picture, the approach towards the development of technological solutions follow certain basic similar features, for instance - access and authentication of users, remote configurations, data collection and sending them to backend for aggregation, remote app monitoring etc.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This brings to one of the most crucial conclusions, it is always pragmatic to develop the app, as a conglomerate of different separate and independent modules, pointing to different features, which can be attached together with the main app module to develop a modular app with the least amount of effort. These modules are developed to be completely independent functionality packages."))),Object(i.b)("h2",{id:"tip"},"Tip"),Object(i.b)("p",null,"This document is based on the summation of these learnings. We have developed this documentation with a desired objective to help any fellow developer with/without sufficient Android App development knowledge, to couple together these smaller together these packages to develop a full fledged deployable app, particularly pertaining to governance related domains. Though we have tried to remain as generic as possible to give support for any developer to follow these mini tutorials to develop a runnable app."),Object(i.b)("p",null,"The techniques you\u2019ll learn in the document are fundamental to building any Android app, and mastering it will give you a deep understanding of Android App development."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"We\u2019ll assume that you have some familiarity with Android App development, but you should be able to follow along even if you\u2019re coming from a different programming language. We\u2019ll also assume that you\u2019re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes, and basic OOP concepts and principles."),Object(i.b)("h2",{id:"what-to-expect-from-the-tutorial"},"What to expect from the tutorial"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Attached video link for full-fledged application.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Link to executable file for the same.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Link to the code repository containing (codes for different modules, a coupled together app and a starter app)."))),Object(i.b)("h2",{id:"getting-familiar-with-the-basics"},"Getting familiar with the basics"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The Android app to be developed along the lines of this document is a modular app, developed with different modules, with a main module and different child modules attached to it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In order to start up with the development, we would like to recommend giving a read through the basic tutorial on how to build and run a basic android app via this ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.android.com/training/basics/firstapp"}),"link"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Note: In all the modules, you would come across a commons module. This module contains common functionalities that can be used by all the modules rather than duplicating the code along the modules."))),Object(i.b)("h2",{id:"setting-up-samagra-android-starter-app"},"Setting up Samagra Android starter App"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Launch Android Studio. Go to File -> New -> Import Project.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose the specific project you want to import and then click Next->Finish. It will build the Gradle automatically and'll be ready for you to use.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The starter app, basically provides a skeleton app to integrate with modules mentioned ahead. The skeleton app UI looks like the screenshot attached on the right side. ",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://lh3.googleusercontent.com/xOtDvkRhN5DlhkBK8lW8QkIk5mc0vMMtcBCcre7as6pLhO8Af2mZFqf2UKH-plbCjUp-yU5YDRPCuinuZi8Oj8wrAoypMrIdSc6S4LPN9jPAu8KbI1fKdSoBqCsp_6yiijcMKaQM",alt:null}))," '"))),Object(i.b)("h2",{id:"configuring-home-screen"},"Configuring Home Screen"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"As you will install and run the app, you will see that the home screen icons, when clicked just show a snackbar.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This is intended to just show the functionality of MVP design pattern, where click action is listened to by the View and then the action is handled by the presenter.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can configure the home screen to redirect the user to the modules which will be discussed ahead. The steps would also be discussed in the further part of the document."))),Object(i.b)("h2",{id:"event-configuring"},"Event Configuring"),Object(i.b)("p",null,"As mentioned above, the app would consist of multiple modules, hence, in order to communicate back and forth with the main module, we have used RxBus, for the purpose of communication among modules/components."),Object(i.b)("p",null,"Since this is a common functionality for all the components, we have added its base contracts and classes in the Commons package."),Object(i.b)("p",null,"In order to send an event, use the following syntax:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"\nExchangeObject.SignalExchangeObject signalExchangeObject = new ExchangeObject.SignalExchangeObject(Modules.MAIN_APP, Modules.ANCILLARY_SCREENS, intent);\n\nAncillaryScreensDriver.mainApplication.getEventBus().send(signalExchangeObject);\n\n")),Object(i.b)("p",null,"The above code will trigger an indication to redirect an event from MAIN_APP module to ANCILLARY_SCREENS module, with an intent object, needed for redirection."),Object(i.b)("p",null,"This will ensure that the activities communicate with one another via Main module only, helping in maintaining the activity stack."),Object(i.b)("p",null,"For any activity to receive the event triggered, this class would have to add a code as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'compositeDisposable.add(this.getEventBus()\n\n.toObservable().subscribeOn(Schedulers.io())\n\n.observeOn(AndroidSchedulers.mainThread())\n\n.subscribe(exchangeObject -> {\n\nif (exchangeObject instanceof ExchangeObject) {\n\nif (((ExchangeObject) exchangeObject).to == Modules.MAIN_APP\n\n&& ((ExchangeObject) exchangeObject).from == Modules.ANCILLARY_SCREENS\n\n&& ((ExchangeObject) exchangeObject).type == ExchangeObject.ExchangeObjectTypes.SIGNAL) {\n\nExchangeObject.SignalExchangeObject signalExchangeObject = (ExchangeObject.SignalExchangeObject) exchangeObject;\n\nif (signalExchangeObject.shouldStartAsNewTask ){\n\nif(currentActivity != null){\n\nCommonUtilities.startActivityAsNewTask(signalExchangeObject.intentToLaunch, currentActivity);\n\n}}\n\nelse\n\nstartActivity(signalExchangeObject.intentToLaunch);\n\n} else if (exchangeObject instanceof ExchangeObject.EventExchangeObject) {  ExchangeObject.EventExchangeObject eventExchangeObject = (ExchangeObject.EventExchangeObject) exchangeObject;\n\nTimber.d("Event Received %s ", eventExchangeObject.customEvents);\n\nif (eventExchangeObject.to == Modules.MAIN_APP || eventExchangeObject.to == Modules.PROJECT) {\n\nTimber.d("Event Received %s ", eventExchangeObject.customEvents);\n\n}\n\n} else if(exchangeObject instanceof ExchangeObject.NotificationExchangeObject){\n\nPendingIntent pendingIntent = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getIntent();\n\nint notificationID = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getNotificationID();\n\nint title = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getTitle();\n\nString body = ((ExchangeObject.NotificationExchangeObject) exchangeObject).data.getBody();\n\nTimber.d("Event Received for Push Notification %s ", title);\n\n}else {\n\nTimber.d("Received but not intended");\n\n}\n\n}\n\n}, Timber::e));\n\n')),Object(i.b)("p",null,"Please refer to the RxBus and EventObject class of the commons module for more clarity on the same. Please note that the further sections will discuss the different modules developed for the application."),Object(i.b)("h2",{id:"form-downloading-and-management-module"},"Form Downloading and Management Module"),Object(i.b)("p",null,"While working in the Government frame, one of the most prominent use cases needed for various tech products is a better surveying technique that should be easily integrated, both at client and back end, in terms of retrieval and further processing of data. For that, we pinned to use ODK Collect. ODK Collect is an open-source Android app that replaces paper forms used in survey-based data gathering. It supports a wide range of question and answer types, and is designed to work well without network connectivity. If you are new to the ODK or not very sure how to use ODK, please refer the link mentioned below"),Object(i.b)("h3",{id:"what-is-odk-how-to-use-odk-creating-a-form-in-odk"},"What is ODK? How to use ODK? Creating a Form in ODK?"),Object(i.b)("p",null,"Please refer to this document to find basics for ODK, and how to set a form on ODK Aggregate. ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.google.com/document/d/12d6S12J3uTN9B3_WZQh3f9iXwOv1Yri106hXXfoMAg4/edit"}),"Documentation of ODK.")),Object(i.b)("h3",{id:"setting-up-form-downloading-and-management-module-in-your-application"},"Setting up Form Downloading and Management Module in your Application"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Please refer to the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://samagra-development.github.io/docs/docs/FormManagementPackage#setting-up-odk"}),"link")," to set up ODK into your mobile Application."),Object(i.b)("li",{parentName:"ol"},"You will have to pass the form names and form IDs for the forms you would want to download in your application, to be viewable to the user. Setting these variable values, will download your ODK forms directly when you launch Home Screen of your app, provided you have followed the above steps.")),Object(i.b)("h3",{id:"filling-up-a-particular-form"},"Filling up a particular form"),Object(i.b)("p",null,"If you want to fill a particular form, out of the forms downloaded above, in the click action of the view, please invoke the following method of the module."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().launchSpecificDataForm(String formIdentifier);\n")),Object(i.b)("p",null,"Here, getIFormManagementContract() returns the value of the contract object for the Form Module. formIdentifier is to be replaced by the name of the specific form you want to be filled by the user."),Object(i.b)("h3",{id:"seeing-results"},"Seeing results"),Object(i.b)("p",null,"If you want to view the forms that the user has submitted already, use the following method invocation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'HashMap<String, Object> toolbarModificationObject = UtilityFunctions.generateToolbarModificationObject(true,\n        R.drawable.ic_arrow_back_white_24dp, "View Submitted Forms", true);\ngetIFormManagementContract().launchViewSubmittedFormsView(context,toolbarModificationObject)\n')),Object(i.b)("p",null,"Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action."),Object(i.b)("h3",{id:"choosing-a-form-rather-than-opening-specific-form"},"Choosing a form, rather than opening specific form"),Object(i.b)("p",null,"If you want the user at his own prerogative select which form to open, use the following invocation"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'HashMap<String, Object> toolbarModificationObject = UtilityFunctions.generateToolbarModificationObject(true,\n        R.drawable.ic_arrow_back_white_24dp, "View Submitted Forms", true);\ngetIFormManagementContract().launchFormChooserView(context, toolbarModificationObject);\n')),Object(i.b)("p",null,"Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action."),Object(i.b)("h3",{id:"offline-viewing-of-data-and-sending-them-again"},"Offline viewing of data and sending them again"),Object(i.b)("p",null,"Since ODK provides a functionality to fill forms offline, you can sync these forms when online again. You can view all such forms via below method invocation."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"geIFormManagementContract().launchViewUnsubmittedFormView(context, className);\n")),Object(i.b)("p",null,"Here, getIFormManagementContract() returns the value of the contract object for the Form Module. context is the Context object of the view(activity) from where you have triggered this click action. className is the lexographic name of the given class, the name by which you have saved the class in the project."),Object(i.b)("h3",{id:"prefilling-form"},"Prefilling form"),Object(i.b)("p",null,"You can prefill certain details into a form if you know the tag to be prefilled and the form\u2019s name, in the manner mentioned ahead."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"getIFormManagementContract().updateFormBasedOnIdentifier(String formIdentifier, String tag,\nString tagValue);\n\n")),Object(i.b)("p",null,"Here, getIFormManagementContract() returns the value of the contract object for the Form Module. formIdentifier is to be replaced by the name of the specific form you want to be filled by the user. tag refers to the tag whose value you want to override/pre-fill and the tagValue is the desired value"),Object(i.b)("h2",{id:"ancillary-screen-module"},"Ancillary Screen Module"),Object(i.b)("p",null,"For any android app, it becomes imperative, as the usage increases and the features enhance, it is needed to provide an access control to the app. Hence, we developed a module, with certain UI modules which can be easily integrated with your app, to provide basic features which are to be generally present in almost every android application, which are Splash scree, Login Screen, Forgot Password and Reset password via OTP."),Object(i.b)("h3",{id:"screens-included-in-the-ancillary-screens-module"},"Screens Included in the Ancillary Screens Module"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Splash Screen  - User sees this activity in the fist time when app is launched."),Object(i.b)("li",{parentName:"ol"},"Login Screen - User can login via user id and password, we are using FusionAuth for the management and authentication of users."),Object(i.b)("li",{parentName:"ol"},"About Us Screen - Ability to confiure the title, icon and the description text of the About Us Screen"),Object(i.b)("li",{parentName:"ol"},"Reset Password - User can reset the app password from the Login screen via OTP sent to his registered Mobile number"),Object(i.b)("li",{parentName:"ol"},"Tutorials Screen - In order to guide the app user about the flow of app via Youtube video, you can configure those videos inside these screens by passing in  your Youtube API Key and Video ID. You can also remotely configure the video IDs.")),Object(i.b)("h3",{id:"integrating-module-into-your-project"},"Integrating Module into your Project"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Unzip the github project to a folder. You can find the github repository at this link. (Insert repo. link here). Download it as zip locally and then unzip the root directory."),Object(i.b)("li",{parentName:"ol"},"Launch Android Studio. Open the main project where you are to integrate these modules. "),Object(i.b)("li",{parentName:"ol"},"If you have not customworkmanager/commons module in the project, you would need to integrate these first sequentially, to integrate the ancillaryscreens module later, using the following steps."),Object(i.b)("li",{parentName:"ol"},"Click on your app module. Select New Module Option -> Select Import Gradle Project -> Go to the downloaded project directory -> Select the module, sync your gradle. In case you face dependency resolution errors, please see the downloaded project's main app and project gradle to see what dependencies you are missing."),Object(i.b)("li",{parentName:"ol"},"Please follow the same steps for the integration of ancillaryscreens module."),Object(i.b)("li",{parentName:"ol"},"In the settings.gradle, Add ",Object(i.b)("strong",{parentName:"li"},"':ancillaryscreens'")," to the end of already added modules.")),Object(i.b)("h3",{id:"initialization-and-usage-of-ancillary-screens-module"},"Initialization and Usage of Ancillary Screens Module"),Object(i.b)("p",null,"Inside  ",Object(i.b)("inlineCode",{parentName:"p"},"onCreate"),"  of Application class or Launcher Activity, in the manner as follows"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"AncillaryScreensDriver.init(this,\n                BASE_API_URL,\n                SEND_OTP_API_ENDPOINT,\n                RESET_PASSWORD_API_ENDPOINT,\n                APPLICATIO_ID);\n        \n")),Object(i.b)("p",null,"The method signature of the initialisation invocation is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"/**\n* \n* @param mainApplication - Instance of Application Class (Main Application, as you will see is an Interface implemented by\nApplication class)\n* @param BASE_API_URL - String (Base API URL for the Fusion Auth, to be later used for user authentication and user data related tasks.)\n* @param SEND_OTP_API_ENDPOINT - String (API Endpoint to send OTP to the mobile number for resetting app password.)\n* @param RESET_PASSWORD_API_ENDPOINT - String (API Endpoint to post user data to reset App Password.)\n* @param APPLICATION_ID - String (Application ID sent for this app in Fusion Auth Backend.)\n*/\npublic static void init(@NonNull MainApplication mainApplication, \n@NonNull String BASE_API_URL, \n@NonNull String SEND_OTP_API_ENDPOINT, \n@NonNull String RESET_PASSWORD_API_ENDPOINT,\n@NonNull String APPLICATION_ID);\n\n")),Object(i.b)("h3",{id:"using-this-module"},"Using this module"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In order to make Splash Screen the launcher activity for your application, please add the following statement in the AndroidManifest.xml file of this module, if not present")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'<activity\nandroid:name="com.samagra.ancillaryscreens.screens.splash.SplashActivity"\n        android:theme="@style/Theme.AppCompat.Light.NoActionBar">\n          <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n                </intent-filter>\n                </activity>\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"The module comes in such a way that you won't need to do any config changes with respect to Login flow for the user. Same goes for the Change Password flow of the user."),Object(i.b)("li",{parentName:"ol"},"To launch the About Us Screen from the module, use the following code:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"AncillaryScreensDriver.launchAboutActivity(context, aboutBundle);\n")),Object(i.b)("p",null,"Here, context is the Context Instance used to launch the About Us screen, AboutBundle is bundle object containing the information transferred to the Activity to render the UI.\n4. To launch the About Us Screen from the module, use the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"AncillaryScreensDriver.launchTutorialsActivity(context, tutorialBundle);\n")),Object(i.b)("p",null,"Here, context is the Context Instance used to launch the Tutorials screen, tutorialBundle is bundle object containing the information transferred to the Activity to render the UI. It contains the video id and Youtube API Key\n5. We are using RxBus to communicate back and forth with the main app module. Please refer to the SplashPresenter class of the downloaded project where we communicate back with the main app module to notify Login success and launching of home screen."))}d.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,b=u["".concat(r,".").concat(p)]||u[p]||h[p]||i;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);