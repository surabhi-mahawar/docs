(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(203)),s={id:"PSQLReplication",title:"PSQL Replication",sidebar_label:"PSQL Replication"},i={id:"PSQLReplication",title:"PSQL Replication",description:"# Setting up Master Slave Replication in PostgreSQL (upto version 11) using Dockers and external volumes:",source:"@site/docs/PSQL Replication.md",permalink:"/docs/docs/PSQLReplication",editUrl:"https://github.com/Samagra-Development/docs/edit/master/docs/PSQL Replication.md",sidebar_label:"PSQL Replication",sidebar:"someSidebar",previous:{title:"Application Logging",permalink:"/docs/docs/COApplicationLogging"},next:{title:"PSQL Strategy",permalink:"/docs/docs/PSQLStrategy"}},l=[{value:"Understanding replication in PostgreSQL (upto version 11)",id:"understanding-replication-in-postgresql-upto-version-11",children:[]},{value:"Firewall -",id:"firewall--",children:[]},{value:"Setting up Docker using external volume",id:"setting-up-docker-using-external-volume",children:[{value:"Install docker",id:"install-docker",children:[]},{value:"Setup Docker engine",id:"setup-docker-engine",children:[]},{value:"Check for running dockers",id:"check-for-running-dockers",children:[]},{value:"View all available dockers",id:"view-all-available-dockers",children:[]},{value:"Enter into Docker shel",id:"enter-into-docker-shel",children:[]}]},{value:"Master -",id:"master--",children:[{value:"Edit postgresql.conf -",id:"edit-postgresqlconf--",children:[]},{value:"Edit pg_hba.conf -",id:"edit-pg_hbaconf--",children:[]}]},{value:"Slave -",id:"slave--",children:[{value:"su - postgres",id:"su---postgres",children:[]}]},{value:"Storing the archive files -",id:"storing-the-archive-files--",children:[]},{value:"References -",id:"references--",children:[]},{value:"Required Modifications",id:"required-modifications",children:[]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"setting-up-master-slave-replication-in-postgresql-upto-version-11-using-dockers-and-external-volumes"},"Setting up Master Slave Replication in PostgreSQL (upto version 11) using Dockers and external volumes:"),Object(o.b)("h2",{id:"understanding-replication-in-postgresql-upto-version-11"},"Understanding replication in PostgreSQL (upto version 11)"),Object(o.b)("p",null,"Streaming replication in PostgreSQL works on log shipping. Every transaction in postgres is written to a transaction log called WAL (write-ahead log) to achieve durability. A slave uses these WAL segments to continuously replicate changes from its master."),Object(o.b)("p",null,"There exists three mandatory processes \u2013 wal sender\xa0, wal receiver\xa0and startup\xa0process, these play a major role in achieving streaming replication in postgres."),Object(o.b)("p",null,"A wal sender\xa0process runs on a master, whereas the wal receiver\xa0and startup\xa0processes runs on its slave. When you start the replication, a wal receiver\xa0process sends the LSN (Log Sequence Number) up until when the WAL data has been replayed on a slave, to the master. And then the wal sender\xa0process on master sends the WAL data until the latest LSN starting from the LSN sent by the wal receiver, to the slave. Wal receiver\xa0writes the WAL data sent by wal sender\xa0to WAL segments. It is the startup\xa0process on slave that replays the data written to WAL segment. And then the streaming replication begins."),Object(o.b)("p",null,"Note: Log Sequence Number, or LSN, is a pointer to a location in the WAL."),Object(o.b)("h2",{id:"firewall--"},"Firewall -"),Object(o.b)("p",null,"UFW or Uncomplicated Firewall is an application to manage the iptables based firewall on Ubuntu. UFW is the default firewall configuration tool for Ubuntu Linux and provides a user-friendly way to configure the firewall."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"apt-get install -y ufw\n")),Object(o.b)("p",null,"Add new services to the UFW firewall: add SSH and PostgreSQL services with commands below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ufw allow ssh\nufw allow postgresql\n")),Object(o.b)("p",null,"Enable the UFW firewall and check the status."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ufw enable\nufw status\n")),Object(o.b)("p",null,"UFW firewall has been installed and the PostgreSQL service has been added."),Object(o.b)("h2",{id:"setting-up-docker-using-external-volume"},"Setting up Docker using external volume"),Object(o.b)("h3",{id:"install-docker"},"Install docker"),Object(o.b)("p",null,"You can install docker from your default package manager or using some other service like ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://snapcraft.io/"}),Object(o.b)("strong",{parentName:"a"},"Snapcraft"))," e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"snap install docker")),Object(o.b)("h3",{id:"setup-docker-engine"},"Setup Docker engine"),Object(o.b)("h4",{id:"pull-postgress-in-docker"},"Pull postgress in docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker pull postgres\n")),Object(o.b)("h4",{id:"create-docker"},"Create docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker run --name DOCKER_NAME -e POSTGRES_PASSWORD=PASSWORD -d -p 0.0.0.0:5432:5432 -v /mnt/EXTERNAL_VOLUME_NAME/postgres:/var/lib/postgresql/data  postgres\n")),Object(o.b)("h3",{id:"check-for-running-dockers"},"Check for running dockers"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker ps\n")),Object(o.b)("h3",{id:"view-all-available-dockers"},"View all available dockers"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker ps -a\n")),Object(o.b)("h3",{id:"enter-into-docker-shel"},"Enter into Docker shel"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"docker exec -it DOCKER_NAME /bin/bash\n")),Object(o.b)("h2",{id:"master--"},"Master -"),Object(o.b)("p",null,"Create a role dedicated to the replication - Create the user in master using whichever slave should connect for streaming the WALs. This user must have REPLICATION ROLE."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"CREATE USER replica REPLICATION LOGIN ENCRYPTED PASSWORD 'aqwe123@';\n")),Object(o.b)("p",null,"Now check the new user with 'du' query below, and you will see the replica user with replication privileges."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\\du\n")),Object(o.b)("h3",{id:"edit-postgresqlconf--"},"Edit postgresql.conf -"),Object(o.b)("p",null,"Note - the postgresql.conf would be present in the following location in case of external volume ",Object(o.b)("inlineCode",{parentName:"p"},"/mnt/EXTERNAL_VOLUME_NAME/postgres/postgresql.conf")),Object(o.b)("p",null,"The following parameters on the master are considered as mandatory when setting up streaming replication."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"archive_mode")," : Must be set to ON to enable archiving of WALs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"wal_level")," : Must be at least set to hot_standby\xa0 until version 9.5 or replica\xa0 in the later versions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"max_wal_senders")," : Must be set to 3 if you are starting with one slave. For every slave, you may add 2 wal senders."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"wal_keep_segments")," : Set the WAL retention in pg_xlog (until PostgreSQL 9.x) and pg_wal (from PostgreSQL 10). Every WAL requires 16MB of space unless you have explicitly modified the WAL segment size. You may start with 100 or more depending on the space and the amount of WAL that could be generated during a backup."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"archive_command")," : This parameter takes a shell command or external programs. It can be a simple copy command to copy the WAL segments to another location or a script that has the logic to archive the WALs to S3 or a remote backup server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"listen_addresses")," : Set it to ","*"," or the range of IP Addresses that need to be whitelisted to connect to your master PostgreSQL server. Your slave IP should be whitelisted too, else, the slave cannot connect to the master to replicate/replay WALs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"hot_standby")," : Must be set to ON on standby/replica and has no effect on the master. However, when you setup your replication, parameters set on the master are automatically copied. This parameter is important to enable READS on slave. Otherwise, you cannot run your SELECT queries against slave.")),Object(o.b)("p",null,"The above parameters can be set on the master using these commands followed by a restart:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"wal_level = replica\nmax_wal_senders = 3 # max number of walsender processes\nwal_keep_segments = 64 # in logfile segments, 16MB each; 0 disables\nlisten_addresses = '*'\n# or listen_address = \u2018IP_OF_SERVER\u2019\narchive_mode = on\narchive_command = 'cp %p /var/lib/postgresql/9.6/main/archive/%f'\nsynchronous_commit = local\nsynchronous_standby_names = 'pgslave001'\n")),Object(o.b)("p",null,"In the postgresql.conf file, the archive mode is enabled, so we need to create a new directory for the archive. Create a new archive directory, change the permission and change the owner to the postgres user."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"mkdir -p /var/lib/postgresql/9.6/main/archive/\nchmod 700 /var/lib/postgresql/9.6/main/archive/\nchown -R postgres:postgres /var/lib/postgresql/9.6/main/archive/\n")),Object(o.b)("p",null,"Create the archive dir in the external storage - Mount the location on docker configuration file (Docker has permission to read write and execute everything, we are running it through root)"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/mnt/external_volume:/var/lib/postgresql/9.6/main/archive/\n")),Object(o.b)("h3",{id:"edit-pg_hbaconf--"},"Edit pg_hba.conf -"),Object(o.b)("p",null,"Add an entry to pg_hba.conf\xa0of the master to allow replication connections from the slave. The default location of pg_hba.conf\xa0is the data directory. However, you may modify the location of this file in the file\xa0 postgresql.conf. In Ubuntu/Debian, pg_hba.conf may be located in the same directory as the postgresql.conf file by default. You can get the location of postgresql.conf in Ubuntu/Debian by calling an OS command => pg_lsclusters."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"# Localhost\nhost\xa0\xa0\xa0 replication\xa0\xa0\xa0\xa0 replica\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 127.0.0.1/32\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0 md5\n# PostgreSQL Master IP address\nhost\xa0\xa0\xa0 replication\xa0\xa0\xa0\xa0 replica\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 10.0.15.10/32\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 md5\n# PostgreSQL SLave IP address\nhost\xa0\xa0\xa0 replication\xa0\xa0\xa0\xa0 replica\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 10.0.15.11/32\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 md5\n")),Object(o.b)("p",null,"Save and exit, then restart PostgreSQL."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"systemctl restart postgresql\n")),Object(o.b)("p",null,"PostgreSQL is running under the IP address 10.0.15.10, check it with netstat command."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"netstat -plntu\n")),Object(o.b)("h2",{id:"slave--"},"Slave -"),Object(o.b)("p",null,"Now that your master is ready, it\u2019s time to configure the slave."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stop postgresql on the slave"),Object(o.b)("li",{parentName:"ul"},"Edit your postgresql.conf and pg_hba.conf and report the changes you made on the master (like this, your slave will have the same configuration and could act as a master) Edit your postgresql.conf and change this line :",Object(o.b)("inlineCode",{parentName:"li"},"hot_standby = on")),Object(o.b)("li",{parentName:"ul"},"Go to your PGDATA directory and delete all the files. WARNING : if the files postgresql.conf and pg_hba.conf are in this directory, you must backup them (same for the certificate files)"),Object(o.b)("li",{parentName:"ul"},"Now we will copy all the data from the master with the pg_basebackup command. You must run this command as the postgresql user (postgres on Debian, ","_","postgresql on OpenBSD for example)")),Object(o.b)("h3",{id:"su---postgres"},"su - postgres"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ pg_basebackup -h 172.17.0.2 -D /var/lib/postgresql/10/main/ -P -U replicate --wal-method=stream\nPassword:\n23908/23908 kB (100%), 1/1 tablespace\n")),Object(o.b)("p",null,"Now, all your master\u2019s data are copied on the slave. Now create a file recovery.conf in your PGDATA directory. Note - the recovery.conf is removed in version 12 onwards, for information see ","[this]","(",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.postgresql.org/docs/12/release-12.html"}),"https://www.postgresql.org/docs/12/release-12.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"standby_mode          = 'on'\nprimary_conninfo      = 'host=172.17.0.2 port=5432 user=replicate password=MySuperPassword'\ntrigger_file = '/tmp/MasterNow'\n")),Object(o.b)("p",null,"Here is an explanation for each line :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"standby_mode=on")," : specifies that the server must start as a standby server"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"primary_conninfo")," : the parameters to use to connect to the master"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"trigger_file")," : if this file exists, the server will stop the replication and act as a master"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"restore_command")," : this command is only needed if you have used the archive_command on the master")),Object(o.b)("p",null,"Start the postgresql server"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'2018-03-11 19:08:55.777 UTC [8789] LOG:  listening on IPv4 address "127.0.0.1", port 5432\n2018-03-11 19:08:55.777 UTC [8789] LOG:  could not bind IPv6 address "::1": Cannot assign requested address\n2018-03-11 19:08:55.777 UTC [8789] HINT:  Is another postmaster already running on port 5432? If not, wait a few seconds and retry.\n2018-03-11 19:08:55.786 UTC [8789] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"\n2018-03-11 19:08:55.820 UTC [8790] LOG:  database system was interrupted; last known up at 2018-03-11 18:58:20 UTC\n2018-03-11 19:08:56.023 UTC [8790] LOG:  entering standby mode\n2018-03-11 19:08:56.034 UTC [8790] LOG:  redo starts at 0/4000028\n2018-03-11 19:08:56.039 UTC [8790] LOG:  consistent recovery state reached at 0/40000F8\n2018-03-11 19:08:56.040 UTC [8789] LOG:  database system is ready to accept read only connections\n2018-03-11 19:08:56.071 UTC [8794] LOG:  started streaming WAL from primary at 0/5000000 on timeline 1\n')),Object(o.b)("p",null,"You can see the replicate user on the master server :"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"postgres=# select * from pg_stat_activity  where usename = 'replicate' ;\n-[ RECORD 1 ]----+------------------------------\ndatid            |\ndatname          |\npid              | 9134\nusesysid         | 16384\nusename          | replicate\napplication_name | walreceiver\nclient_addr      | 172.17.0.3\nclient_hostname  |\nclient_port      | 45234\nbackend_start    | 2018-03-11 19:08:56.049113+00\nxact_start       |\nquery_start      |\nstate_change     | 2018-03-11 19:08:56.071363+00\nwait_event_type  | Activity\nwait_event       | WalSenderMain\nstate            | active\nbackend_xid      |\nbackend_xmin     |\nquery            |\nbackend_type     | walsender\n")),Object(o.b)("h2",{id:"storing-the-archive-files--"},"Storing the archive files -"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How to recreate database from the archive files?")),Object(o.b)("h2",{id:"references--"},"References -"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.percona.com/blog/2018/09/07/setting-up-streaming-replication-postgresql/"}),"Setting up Streaming Replication Postgresql")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://blog.raveland.org/post/postgresql_sr/"}),"Postgresql Raveland blog")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.howtoforge.com/tutorial/how-to-set-up-master-slave-replication-for-postgresql-96-on-ubuntu-1604/"}),"How to set up master slave replication for postgresql"))),Object(o.b)("h2",{id:"required-modifications"},"Required Modifications"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Edit postgresql.conf section"),Object(o.b)("li",{parentName:"ol"},"Add the process for docker configuration"),Object(o.b)("li",{parentName:"ol"},"Take master and slave sample IP"),Object(o.b)("li",{parentName:"ol"},"Grammatical corrections.")))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,h=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(h,i({ref:t},c,{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);