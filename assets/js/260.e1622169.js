(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{854:function(e,a,t){"use strict";t.r(a);var i=t(18),r=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"replication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[e._v("#")]),e._v(" Replication")]),e._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"replication-strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication-strategy"}},[e._v("#")]),e._v(" Replication strategy")]),e._v(" "),t("p",[e._v("immudb includes support for replication by means of a follower approach. A database can be created or configured either to be a master or a replica of another database.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-servers.jpg",alt:"replication using grpc clients"}})])]),e._v(" "),t("p",[e._v("During replication, master databases have a passive role. The grpc endpoint "),t("code",[e._v("ExportTx")]),e._v(" is used by replicas to fetch unseen committed transactions from the master.")]),e._v(" "),t("p",[e._v("Replicas are readonly and any direct write operation will be rejected. But queries are supported. Providing the possibility to distribute query loads.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-comm.jpg",alt:"replicator fetches committed txs via grpc calls and replicate them using in-process method invocations"}})])]),e._v(" "),t("h3",{attrs:{id:"replication-and-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replication-and-users"}},[e._v("#")]),e._v(" Replication and users")]),e._v(" "),t("p",[e._v("As shown in the diagram above, the replicator fetches committed transaction from the master via grpc calls. Internally, the replicator instantiates an immudb client (using the official golang sdk) and fetches unseen committed transactions from the master. In order to do so, the replicator requires valid user credentials, otherwise the master will reject any request.")]),e._v(" "),t("p",[e._v("Note: currently only users with admin permissions are allowed to call "),t("code",[e._v("ExportTx")]),e._v(" endpoint.")]),e._v(" "),t("h3",{attrs:{id:"creating-a-replica"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-replica"}},[e._v("#")]),e._v(" Creating a replica")]),e._v(" "),t("p",[e._v("Creating a replica of an existent database using immuadmin is super easy, replication flags should be provided when the database is created or updated as follow:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Login "),t("code",[e._v("./immuadmin login immudb")])])]),e._v(" "),t("li",[t("p",[e._v("Create a database as a replica of an existent database")])])]),e._v(" "),t("p",[t("code",[e._v("./immuadmin database create --replication-enabled=true --replication-follower-username=immudb --replication-follower-password=immudb --replication-master-database=defaultdb replicadb")])]),e._v(" "),t("p",[e._v("Note: Display all database creation flags "),t("code",[e._v("./immuadmin database create --help")])]),e._v(" "),t("h3",{attrs:{id:"creating-a-second-immudb-instance-to-replicate-systemdb-and-defaultdb-behaves-similarly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-second-immudb-instance-to-replicate-systemdb-and-defaultdb-behaves-similarly"}},[e._v("#")]),e._v(" Creating a second immudb instance to replicate systemdb and defaultdb behaves similarly")]),e._v(" "),t("ol",[t("li",[e._v("Start immudb binary specifying replication flags "),t("code",[e._v("./immudb --replication-enabled=true --replication-follower-password=immudb --replication-follower-username=immudb --replication-master-address=127.0.0.1")])])]),e._v(" "),t("p",[e._v("Note: Display all replication flags "),t("code",[e._v("./immudb --help")])]),e._v(" "),t("h3",{attrs:{id:"multiple-replicas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-replicas"}},[e._v("#")]),e._v(" Multiple replicas")]),e._v(" "),t("p",[e._v("It's possible to create multiple replicas of a database. Each replica works independently from the others.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-multiple.jpg",alt:"multiple replicas of the same master database"}})])]),e._v(" "),t("p",[e._v("Given the master database acts in passive mode, there is not special steps needed in order to create more replicas. Thus, by repeating the same steps to create the first replica it's possible to configure new ones.")]),e._v(" "),t("h3",{attrs:{id:"replica-of-a-replica"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replica-of-a-replica"}},[e._v("#")]),e._v(" Replica of a replica")]),e._v(" "),t("p",[e._v("In case many replicas are needed or the master database is under heavy load, it's possible to delegate the creation of replicas to an existent replica. This way, the master database is not affected by the total number of replicas being created.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-chain.jpg",alt:"a replica indirectly following the master"}})])]),e._v(" "),t("h3",{attrs:{id:"external-replicator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#external-replicator"}},[e._v("#")]),e._v(" External replicator")]),e._v(" "),t("p",[e._v("By creating a database as a replica but with disabled replication, no replicator is created for the database and an external process could be used to replicate committed transactions from the master. The grpc endpoint "),t("code",[e._v("ReplicateTx")]),e._v(" may be used to externally replicate a transaction.")]),e._v(" "),t("h3",{attrs:{id:"heterogeneous-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heterogeneous-settings"}},[e._v("#")]),e._v(" Heterogeneous settings")]),e._v(" "),t("p",[e._v("Replication is configured per database. Thus, the same immudb server may hold several master and replica databases at the same time.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("img",{attrs:{src:"/immudb/replication-server.jpg",width:"300",alt:"a single immudb server can hold multiple master and replica databases"}})])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);