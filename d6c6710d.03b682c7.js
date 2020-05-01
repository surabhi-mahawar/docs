(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(1),s=a(9),i=(a(0),a(222)),r={id:"CODatabaseManagement",title:"Component Overview (Databases)",sidebar_label:"Component Overview"},o={id:"CODatabaseManagement",title:"Component Overview (Databases)",description:"## 1. Introduction",source:"@site/docs/Component Overview Databases.md",permalink:"/docs/docs/CODatabaseManagement",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/Component Overview Databases.md",sidebar_label:"Component Overview",sidebar:"someSidebar",previous:{title:"Architecture and Design",permalink:"/docs/docs/AdminArchitectureAndDesign"},next:{title:"Overview",permalink:"/docs/docs/PSQLOverview"}},l=[{value:"1. Introduction",id:"1-introduction",children:[{value:"1.1 Relational database management systems (PostgreSQL)",id:"11-relational-database-management-systems-postgresql",children:[]},{value:"1.2. Document store (MongoDB)",id:"12-document-store-mongodb",children:[]},{value:"1.3 Key-value store (Redis, Memcached)",id:"13-key-value-store-redis-memcached",children:[]},{value:"1.4. Wide-column store (Cassandra, HBase)",id:"14-wide-column-store-cassandra-hbase",children:[]},{value:"1.5. Search engine (Elasticsearch)",id:"15-search-engine-elasticsearch",children:[]},{value:"2.4 Wide-column store store - Cassandra",id:"24-wide-column-store-store---cassandra",children:[]},{value:"2.5 Search engine -Elasticsearch",id:"25-search-engine--elasticsearch",children:[]}]},{value:"3. FAQ",id:"3-faq",children:[]},{value:"4. Coming Soon",id:"4-coming-soon",children:[]},{value:"5. References",id:"5-references",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(i.b)("p",null,"All databases are not created equal. Each has specific strengths and weaknesses. While it\u2019s true that workarounds exist to make a favorite database work for most projects, using those tricks adds unnecessary complexity."),Object(i.b)("p",null,"Before considering a specific database, take some time to think about what type would best support the project at hand. The question goes deeper than \u201cSQL vs. NoSQL.\u201d Read on for a rundown of the most common database types, the relative merits of each, and how to tell which is the best fit."),Object(i.b)("p",null,"If you are well alware of the pro and cons of different database management systems, please skip to next section."),Object(i.b)("h3",{id:"11-relational-database-management-systems-postgresql"},"1.1 Relational database management systems (PostgreSQL)"),Object(i.b)("p",null,"Relational databases were developed in the 1970s to handle the increasing flood of data being produced. They have a solid foundational theory and have influenced nearly every database system in use today."),Object(i.b)("p",null,"Relational databases store data sets as \u201crelations\u201d: tables with rows and columns where all information is stored as a value of a specific cell. Data in an RDBMS is managed using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"%5Bhttps://en.wikipedia.org/wiki/SQL%5D(https://en.wikipedia.org/wiki/SQL)"}),"SQL"),". Though there are different implementations, SQL is standardized and provides a level of predictability and utility."),Object(i.b)("p",null,"After an early flood of vendors tried to take advantage of the system\u2019s popularity with not-quite-relational products, creator E.F. Codd outlined a set of rules that must be followed by all relational database management systems. Codd\u2019s 12 rules revolve around imposing strict internal structure protocols, making sure that searches reliably return requested data, and preventing structural alterations (at least by users). The framework ensured that relational databases are consistent and reliable to this day."),Object(i.b)("h4",{id:"111-strengths"},"1.1.1 Strengths"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Relational databases support a ",Object(i.b)("strong",{parentName:"li"},"simple data structure,")," namely tables."),Object(i.b)("li",{parentName:"ul"},"Relational databases ",Object(i.b)("strong",{parentName:"li"},"limit redundancy")," or duplication of data. As all the data pertaining to a particular object is stored together, and then linked to related objects, there is no need to store data about the original object in more than one place. In practice, not all redundancy is eliminated - as we shall see (in chapter 2), the process of normalisation will lead to some redundancy, although controlled."),Object(i.b)("li",{parentName:"ul"},"Data inconsistencies are avoided. By storing the data relating to an object in one place, it only needs to be kept up to date in that one place. This saves time at the data entry stage and reduces the likelihood of inconsistencies arising."),Object(i.b)("li",{parentName:"ul"},"Relational databases provide ",Object(i.b)("strong",{parentName:"li"},"physical data independence")," (to a large extent). Database users do not have to be aware of the underlying structure of the objects in the database. The specification of the structure (the tables, attributes and relationships), the constraints, the access methods etc are stored separately and are independent of the application programs that use the data. This makes programming and program maintenance easier."),Object(i.b)("li",{parentName:"ul"},"Relational databases offer ",Object(i.b)("strong",{parentName:"li"},"logical database independence,")," in that data can be viewed in different ways by different users. With relational databases this is achieved with the definition of the appropriate SQL view."),Object(i.b)("li",{parentName:"ul"},"Expandability is relatively easy to achieve - by adding new views of the data as they are required."),Object(i.b)("li",{parentName:"ul"},"Relational databases support ad hoc queries (one-off or tailor-made) using the SQL query language.")),Object(i.b)("h4",{id:"112-weakness"},"1.1.2 Weakness"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Poor representation of 'real world' entities and their relationships. When relational databases are designed, entities are fragmented into smaller relations through the process of normalisation (chapter 2). This fragmentation into many relations leads to relations which do not exist or correspond to entities in the real world. Such a design is inefficient, as many joins may be required to recover data about that entity."),Object(i.b)("li",{parentName:"ul"},"The model is said to suffer from ",Object(i.b)("strong",{parentName:"li"},"semantic overloading")," in that one construct (the relation) is used to represent two different things (entities and relationships): there is no mechanism for differentiation between entities and relationships. The normalised component, the relation, is not sufficient to represent both the data and data relationships. With relational databases, an entity is broken up into several relations, thus querying becomes cumbersome since project, select and join operations have to be used frequently to reconstruct the entities."),Object(i.b)("li",{parentName:"ul"},"Also it is ",Object(i.b)("strong",{parentName:"li"},"difficult to represent hierarchies")," of data. For example, both students and lectures share some of the same data (name, address etc). In a relational database we would have to define three relations: one for the 'super class' person as well as for student and lecturer, and to retrieve the information may well require a join"),Object(i.b)("li",{parentName:"ul"},"Difficulty in representing complex data types. As a simple example, consider an attribute 'address'. In a relational database, either we define an address attribute as one atomic value of type string or it could be defined as a number of attributes (one each for street, city, country and postcode). In the latter case, writing queries would be more complicated, as each field would have to be mentioned. A better solution to either case is to allow structured data types - such as the type address with subparts street, city, country and postcode. Now an instance of type address can either be viewed as a whole or as individual subparts. The limited data types in the relational model cannot represent 'real word' objects that have a complex structure, and this leads to unnatural joins, which are inefficient. Any item in the tuple, i.e. intersection of a row and column, must be an ",Object(i.b)("strong",{parentName:"li"},"atomic data type")," since it assumes both horizontal and vertical homogeneity. ",Object(i.b)("strong",{parentName:"li"},"Horizontal homogeneity")," means that each tuple of a relation must be composed of the same attributes. This can be a disadvantage in that it is not possible to store closely related objects in the same category if they differ slightly in the attributes they possess. For example, there may be adult and child aeroplane tickets, with children having the additional attribute 'guardian'. ",Object(i.b)("strong",{parentName:"li"},"Vertical homogeneity")," means that the values in a particular column of a relation must all come from the same domain."),Object(i.b)("li",{parentName:"ul"},"Relational databases support a small, ",Object(i.b)("strong",{parentName:"li"},"fixed collection of data types")," and do not permit users to define new types. In many applications the attributes' domains require far more complex data types. Many relational DBMSs allow the storage of binary large objects (BLOBs) - a data value that contains binary information representing images, digitised videos or audios, or any large and unstructured object. Typically, it is held as an attribute in a relational database which references to a file. Storing the data in external files is not a good way of manipulating this data: the DBMS has no knowledge of the structure of this data and cannot perform queries or operations on it. In addition, BLOBs cannot contain other BLOBs. As an example, a picture can be stored as a BLOB by an RDBMS. The complete picture can be displayed but not part of it, and the internal structure is not known to the RDBMS."),Object(i.b)("li",{parentName:"ul"},"Relational database systems are not well suited to support certain complex applications such as 'advanced database applications' including computer-\xadaided design (CAD). A clear illustration of the drawbacks of a homogeneous data structure is the so-called parts explosion. Here, some object (such as an aircraft) is composed of parts and composite parts; these latter items in turn are composed of other parts and composite parts, and so on. Data types exhibiting this arrangement cannot be stored in relational databases"),Object(i.b)("li",{parentName:"ul"},"Difficulty in implementing recursive queries. For example in the entity-relationship model example in figure 1.6 an example of a recursive query would be to find books which have the same book title as a book entitled ",Object(i.b)("em",{parentName:"li"},"Gardening for Beginners.")," This query involves searching the same table twice. We shall see in chapter 4 that recursive queries can be quite difficult to specify and implement"),Object(i.b)("li",{parentName:"ul"},"SQL is ",Object(i.b)("strong",{parentName:"li"},"not computationally complete:")," it supports only a limited number of operations and does not allow new operations to be defined.")),Object(i.b)("h4",{id:"113-use-cases"},"1.1.3 Use Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Situations where data integrity is absolutely paramount (i.e., for financial applications, defense and security, and private health information)"),Object(i.b)("li",{parentName:"ul"},"Highly structured data"),Object(i.b)("li",{parentName:"ul"},"Automation of internal processes")),Object(i.b)("h3",{id:"12-document-store-mongodb"},"1.2. Document store (MongoDB)"),Object(i.b)("p",null,"A document store is a nonrelational database that stores data in JSON, BSON, or XML documents. They feature a flexible schema. Unlike SQL databases, where users must declare a table\u2019s schema before inserting data, document stores don\u2019t enforce document structure. Documents can contain any data desired. They have key-value pairs but also embed attribute metadata to make querying easier."),Object(i.b)("h4",{id:"121-strengths"},"1.2.1. Strengths"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Large volumes of structured, semi-structured, and unstructured data"),Object(i.b)("li",{parentName:"ul"},"Agile sprints, quick iteration, and frequent code pushes"),Object(i.b)("li",{parentName:"ul"},"Object-oriented programming that is easy to use and flexible"),Object(i.b)("li",{parentName:"ul"},"Efficient, scale-out architecture instead of expensive, monolithic architecture")),Object(i.b)("h4",{id:"122-weaknesses"},"1.2.2. Weaknesses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Not ACID")," - However, these benefits come at the cost of relaxing ACID principles: instead of keeping all four parameters consistent throughout every transaction, NoSQL uses the principle of eventual consistency. This means that if there are no new updates for a particular data item for a certain period of time, eventually all accesses to it will return the last updated value. That\u2019s why such systems are usually described as providing BASE guarantees (Basically Available, Soft state, Eventual consistency) \u2014 as opposed to ACID."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Data Loss")," - While this approach greatly increases access time and scalability, it may lead to data loss \u2013 the severity of the problem depends on database server support and the quality of application code. In some cases, this issue might be very serious."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"No Uniformity")," - Another problem presented by NoSQL is the fact that there are many types of NoSQL systems, and there is little uniformity among them. Such characteristics as flexibility, performance, complexity, scalability and so on vary greatly among different systems, which makes choosing from among them difficult even for experienced specialists. Nevertheless, when properly chosen in concordance with the project\u2019s peculiarities, NoSQL can provide a much more efficient solution than an SQL system without a significant loss in stability.")),Object(i.b)("h4",{id:"123-use-cases"},"1.2.3. Use Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Unstructured or semistructured data"),Object(i.b)("li",{parentName:"ul"},"Content management"),Object(i.b)("li",{parentName:"ul"},"In-depth data analysis"),Object(i.b)("li",{parentName:"ul"},"Rapid prototyping")),Object(i.b)("h3",{id:"13-key-value-store-redis-memcached"},"1.3 Key-value store (Redis, Memcached)"),Object(i.b)("p",null,"A key-value store is a type of nonrelational database where each value is associated with a specific key. It\u2019s also known as an associative array."),Object(i.b)("p",null,"The \u201ckey\u201d is a unique identifier associated only with the value. Keys can be anything allowed by the DBMS. In Redis, for example, keys man be any binary sequence up to 512MB."),Object(i.b)("p",null,"\u201cValues\u201d are stored as blobs and don\u2019t need predefined schema. They can take nearly any form: numbers, strings, counters, JSON, XML, HTML, PHP, binaries, images, short videos, lists, and even another key-value pair encapsulated in an object. Some DBMSs allow for the data type to be specified, but it isn\u2019t mandatory."),Object(i.b)("h4",{id:"131-strengths"},"1.3.1. Strengths"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It\u2019s incredibly flexible, able to handle a very wide array of data types easily."),Object(i.b)("li",{parentName:"ul"},"Keys are used to go straight to the value with no index searching or joins, so performance is high."),Object(i.b)("li",{parentName:"ul"},"Portability is another benefit: key-value stores can be moved from one system to another without rewriting code."),Object(i.b)("li",{parentName:"ul"},"Finally, they\u2019re highly horizontally scalable.")),Object(i.b)("h4",{id:"132-weaknesses"},"1.3.2. Weaknesses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It\u2019s impossible to query values, because they\u2019re stored as a blob and can only be returned as such."),Object(i.b)("li",{parentName:"ul"},"This makes it hard to do reporting or edit parts of values."),Object(i.b)("li",{parentName:"ul"},"Not all objects are easy to model as key-value pairs, either.")),Object(i.b)("h4",{id:"133-use-cases"},"1.3.3. Use Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Recommendations"),Object(i.b)("li",{parentName:"ul"},"User profiles and settings"),Object(i.b)("li",{parentName:"ul"},"Unstructured data such as product reviews or blog comments"),Object(i.b)("li",{parentName:"ul"},"Session management at scale"),Object(i.b)("li",{parentName:"ul"},"Data that will be accessed frequently but not often updated")),Object(i.b)("h3",{id:"14-wide-column-store-cassandra-hbase"},"1.4. Wide-column store (Cassandra, HBase)"),Object(i.b)("p",null,"Wide-column stores, also called column stores or extensible record stores, are dynamic column-oriented nonrelational databases. They\u2019re sometimes seen as a type of key-value store but have attributes of traditional relational databases as well."),Object(i.b)("p",null,"Wide-column stores use the concept of a keyspace instead of schemas. A keyspace encompasses column families (similar to tables but more flexible in structure), each of which contains multiple rows with distinct columns. Each row doesn\u2019t need to have the same number or type of column. A timestamp determines the most recent version of data."),Object(i.b)("h4",{id:"141-strengths"},"1.4.1. Strengths"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It deals better with both structured and semistructured data than other nonrelational databases, and it\u2019s easier to update."),Object(i.b)("li",{parentName:"ul"},"Compared to relational databases, it\u2019s more horizontally scalable and faster at scale."),Object(i.b)("li",{parentName:"ul"},"Columnar databases compress better than row-based systems."),Object(i.b)("li",{parentName:"ul"},"Also, large data sets are simple to explore. Wide-column stores are particularly good at aggregation queries, for example.")),Object(i.b)("h4",{id:"142-weaknesses"},"1.4.2. Weaknesses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Writes are expensive in the small. While updating is easy to do in bulk, uploading and updating individual records is hard."),Object(i.b)("li",{parentName:"ul"},"Plus, wide-column stores are slower than relational databases when handling transactions.")),Object(i.b)("h4",{id:"143-use-cases"},"1.4.3. Use Cases"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Big data analytics where speed is important"),Object(i.b)("li",{parentName:"ul"},"Data warehousing on big data"),Object(i.b)("li",{parentName:"ul"},"Large scale projects (this database style is not a good tool for average transactional applications)")),Object(i.b)("h3",{id:"15-search-engine-elasticsearch"},"1.5. Search engine (Elasticsearch)"),Object(i.b)("p",null,"It may seem strange to include search engines in an article about database types. However, Elasticsearch has seen increased popularity in this sphere as developers look for innovative ways to cut down search lag. Elastisearch is a nonrelational, document-based data storage and retrieval solution specifically arranged and optimized for the storage and rapid retrieval of data."),Object(i.b)("h4",{id:"151-strengths"},"1.5.1. Strengths"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Elastisearch is very scalable."),Object(i.b)("li",{parentName:"ul"},"It features flexible schema and fast retrieval of records, with advanced search options including full text search, suggestions, and complex search expressions."),Object(i.b)("li",{parentName:"ul"},"One of the most interesting search features is ",Object(i.b)("strong",{parentName:"li"},"stemming"),". Stemming analyzes the root form of a word to find relevant records even when another form is used. For example, a user searching an employment database for \u201cpaying jobs\u201d would also find positions tagged as \u201cpaid\u201d and \u201cpay.\u201d")),Object(i.b)("h4",{id:"weaknesses"},"Weaknesses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Elastisearch is used more as an intermediary or supplementary store than a primary database."),Object(i.b)("li",{parentName:"ul"},"It has low durability and poor security."),Object(i.b)("li",{parentName:"ul"},"There\u2019s no innate authentication or access control."),Object(i.b)("li",{parentName:"ul"},"Also, Elastisearch doesn\u2019t support transactions.")),Object(i.b)("h4",{id:"use-a-search-engine-like-elastisearch-for"},"Use a search engine like Elastisearch for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Improving user experience with faster search results"),Object(i.b)("li",{parentName:"ul"},"Logging")),Object(i.b)("h3",{id:"24-wide-column-store-store---cassandra"},"2.4 Wide-column store store - Cassandra"),Object(i.b)("h4",{id:"241-self-hosted-cassandra"},"2.4.1 Self hosted Cassandra"),Object(i.b)("h4",{id:"242-managed-cassandra"},"2.4.2 Managed Cassandra"),Object(i.b)("h3",{id:"25-search-engine--elasticsearch"},"2.5 Search engine -Elasticsearch"),Object(i.b)("h4",{id:"251-self-hosted-elasticsearch"},"2.5.1 Self hosted Elasticsearch"),Object(i.b)("h4",{id:"252-managed-elasticsearch"},"2.5.2 Managed Elasticsearch"),Object(i.b)("h2",{id:"3-faq"},"3. FAQ"),Object(i.b)("h2",{id:"4-coming-soon"},"4. Coming Soon"),Object(i.b)("h2",{id:"5-references"},"5. References"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.cems.uwe.ac.uk/~pchatter/resources/html/rdb_strengths_weaknesses.html"}),"RDBMS Strengths and Weakneses"))))}d.isMDXComponent=!0},222:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=s.a.createContext({}),d=function(e){var t=s.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=d(e.components);return s.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,p=u["".concat(r,".").concat(h)]||u[h]||b[h]||i;return a?s.a.createElement(p,o({ref:t},c,{components:a})):s.a.createElement(p,o({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);