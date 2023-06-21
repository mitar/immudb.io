(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{993:function(e,a,t){"use strict";t.r(a);var s=t(2),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"synchronous-replication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-replication"}},[e._v("#")]),e._v(" Synchronous Replication")]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"synchronous-replication-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronous-replication-2"}},[e._v("#")]),e._v(" Synchronous Replication")]),e._v(" "),t("p",[e._v("Replication is a common technique used in distributed databases to achieve scalable data distribution for better fault tolerance. Multiple replicas of a primary database server are created for higher durability. One of the replication methods is to update each replica as part of a single atomic transaction, also known as synchronous replication. Consensus algorithms apply this approach to achieve strong consistency on a replicated data set. immudb now supports the option for synchronous replication.")]),e._v(" "),t("h3",{attrs:{id:"architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),t("p",[e._v("In synchronous replication, each commit of a write transaction will wait until there is a confirmation that the commit has been committed to both the primary and quorum of replica server(s). This method minimizes the possibility of data loss.")]),e._v(" "),t("p",[e._v("immudb uses a quorum-based technique to enforce consistent operation in a distributed cluster. A quorum of replicas is used to ensure that synchronous replication is achieved even when replication is not completed across all replica servers. A quorum is a majority of the number of replicas in a cluster setup. The quorum can be set when creating or updating the database on the primary node.")]),e._v(" "),t("p",[e._v("The primary server will wait for acknowledgment from a quorum of replica server(s) that each transaction is durably stored before proceeding. The drawback is that if enough replica server(s) go down or can’t commit a transaction, and the quorum is not reached, the primary server goes into a hung state.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/immudb/replication-sync.png",alt:"synchronous replication"}})]),e._v(" "),t("p",[e._v("Comparing this to the asynchronous replication mode, the primary server does not need to wait for transaction-completion acknowledgment from the replica server. The replication transactions queue up on the replica server, and the two servers can remain out-of-sync for a specified time until the processing completes.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/immudb/replication-async.png",alt:"asynchronous replication"}})]),e._v(" "),t("p",[e._v("immudb provides support for synchronous replication by means of a follower approach. There are two grpc endpoint used for replication:")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("ExportTx")]),e._v(": Used by replicas to fetch precommitted transactions from the primary database server, and also to send the current database state to update the primary server.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("ReplicateTx")]),e._v(": Used by replicas to commit precommitted transactions (fetched from the primary) on the replica server.")])])]),e._v(" "),t("p",[e._v("The primary server keeps a record of the current state of each replica. The current state of each replica is updated through the "),t("code",[e._v("ExportTx")]),e._v(" grpc call from the replica server. So when a new transaction request comes to the primary server, it precommits the transaction, and checks if a quorum (on the transaction) has been reached by the replica server(s) by checking their state continuously. If the quorum was reached, the transaction is marked as successful.")]),e._v(" "),t("div",{staticClass:"wrapped-picture"},[t("p",[t("img",{attrs:{src:"/immudb/replication-state.png",alt:"how synchronous replication works"}})])])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"deciding-on-number-of-servers-in-a-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deciding-on-number-of-servers-in-a-cluster"}},[e._v("#")]),e._v(" Deciding on number of servers in a cluster")]),e._v(" "),t("p",[e._v("Synchronous replication in a cluster can function only if the majority of servers are up and running. In systems with enabled data replication, it is important to consider the throughput of write operations. Every time data is written to the cluster, it needs to be copied to multiple replicas. Every additional server adds some overhead to complete this write. The latency of data write is directly proportional to the number of servers forming the quorum.")])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[e._v("#")]),e._v(" Settings")]),e._v(" "),t("p",[e._v("Synchronous replication is enabled per database. The following flags in the "),t("code",[e._v("immuadmin")]),e._v(" tool will help in setting up synchronous replication for your database.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Flags:\n      --replication-allow-tx-discarding              allow precommitted transactions to be discarded "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" the replica diverges from the primary\n      --replication-commit-concurrency uint32        number of concurrent replications "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --replication-is-replica                       "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" database as a replica\n      --replication-prefetch-tx-buffer-size uint32   maximum number of prefeched transactions "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("default "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n      --replication-primary-database string          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" primary database to be replicated\n      --replication-primary-host string              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" primary database "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("\n      --replication-primary-password string          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" password used "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" replication to connect to the primary database\n      --replication-primary-port uint32              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" primary database port\n      --replication-primary-username string          "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" username used "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" replication to connect to the primary database\n      --replication-sync-acks uint32                 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" a minimum number of replica acknowledgements required before transactions can be committed\n      --replication-sync-enabled                     "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" synchronous replication\n\n")])])])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),t("p",[e._v("This setup guides you through a simple demonstration of how synchronous replication works in immudb. Starting with a 2-node local cluster, you'll write some data and verify that it replicates in sync.")]),e._v(" "),t("h4",{attrs:{id:"before-you-begin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#before-you-begin"}},[e._v("#")]),e._v(" Before you begin")]),e._v(" "),t("p",[e._v("Make sure you already have "),t("RouterLink",{attrs:{to:"/1.5.0/running/download.html"}},[e._v("immudb installed")]),e._v(".")],1),e._v(" "),t("blockquote",[t("p",[e._v("Since you're running a local cluster, all nodes use the same hostname ("),t("code",[e._v("localhost")]),e._v(").")])]),e._v(" "),t("h4",{attrs:{id:"step-1-start-the-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-start-the-cluster"}},[e._v("#")]),e._v(" Step 1. Start the cluster")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Run the primary server:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ immudb --dir data_primary\n")])])])]),e._v(" "),t("li",[t("p",[e._v("In a new terminal, start replica server:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ immudb --dir data_replica "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --pgsql-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --metrics-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\n")])])])]),e._v(" "),t("li",[t("p",[e._v("In a new terminal, use the "),t("RouterLink",{attrs:{to:"/1.5.0/connecting/clitools.html"}},[t("code",[e._v("immuadmin")])]),e._v(" command to create a database on the primary server:")],1),e._v(" "),t("p",[e._v("Login to immudb")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin login immudb\n")])])]),t("p",[e._v("Create a database "),t("code",[e._v("db")]),e._v(" that requires 1 confirmation from the synchronous replicas to do the commit.")]),e._v(" "),t("blockquote",[t("p",[e._v("Note that the number of confirmations needed ("),t("code",[e._v("--replication-sync-acks")]),e._v(" option) should be set to "),t("code",[e._v("ceil(number of replicas/2)")]),e._v("\nto achieve majority-based quorum.")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database create primarydb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-acks "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-enabled\n")])])]),t("p",[e._v("At this point, the "),t("code",[e._v("primarydb")]),e._v(" has been created on the primary server.")])]),e._v(" "),t("li",[t("p",[e._v("Use the "),t("RouterLink",{attrs:{to:"/1.5.0/connecting/clitools.html"}},[t("code",[e._v("immuadmin")])]),e._v(" command to create a database on the replica server:")],1),e._v(" "),t("p",[e._v("Login to immudb")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin login immudb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v("\n")])])]),t("p",[e._v("Create a database "),t("code",[e._v("replicadb")]),e._v(" which will sync from the primary server's database "),t("code",[e._v("primarydb")])]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database create replicadb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-is-replica "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3322")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-database primarydb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-username immudb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-password immudb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-enabled "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-prefetch-tx-buffer-size "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-commit-concurrency "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])])]),t("p",[e._v("At this point, the "),t("code",[e._v("replicadb")]),e._v(" has been created on the replica server to sync with the "),t("code",[e._v("primarydb")]),e._v(" on primary server.")])])]),e._v(" "),t("h4",{attrs:{id:"step-2-send-a-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-send-a-request"}},[e._v("#")]),e._v(" Step 2. Send a request")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Use the "),t("RouterLink",{attrs:{to:"/1.5.0/connecting/clitools.html"}},[t("code",[e._v("immuclient")])]),e._v(" command to commit a transaction on the primary server:")],1),e._v(" "),t("p",[e._v("Login to immudb")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient login immudb\n")])])]),t("p",[e._v("Select database")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient use primarydb\n")])])]),t("p",[e._v("Set a value")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient safeset foo bar\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Verify the transaction on the replica server using the "),t("RouterLink",{attrs:{to:"/1.5.0/connecting/clitools.html"}},[t("code",[e._v("immuclient")])]),e._v(" command:")],1),e._v(" "),t("p",[e._v("Login to immudb")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient login immudb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v("\n")])])]),t("p",[e._v("Select database")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient use primarydb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v("\n")])])]),t("p",[e._v("Verify the key")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient safeget foo -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v("\n")])])])])]),e._v(" "),t("h4",{attrs:{id:"step-3-stop-the-replica-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-stop-the-replica-server"}},[e._v("#")]),e._v(" Step 3. Stop the replica server")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Stop the replica server running on port 3325")])]),e._v(" "),t("li",[t("p",[e._v("Send a transaction to the primary server:")]),e._v(" "),t("p",[e._v("Login to immudb")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient login immudb\n")])])]),t("p",[e._v("Select database")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient use primarydb\n")])])]),t("p",[e._v("Set a value")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient safeset foo bar\n")])])]),t("p",[e._v("The client will block. This is because the primarydb requires 1 sync replica, and since the replica server is down, there is no ack from the replica server, hence synchronous transaction is blocked.")])])])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"recovering-from-a-replica-loss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovering-from-a-replica-loss"}},[e._v("#")]),e._v(" Recovering from a replica loss")]),e._v(" "),t("p",[e._v("The primary node will continue read and write operations as long as the required quorum of replicas can send write confirmation to the primary node.\nIf there are not enough confirmations, write operations will be queued and will wait for enough replicas to synchronize with the cluster.\nRead operations in such cases will continue to work.")]),e._v(" "),t("p",[e._v("The simplest way to recover the replica is to simply add a new replica into the cluster and setup replication in the same way as during\nthe initial cluster setup, e.g.:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database create replicadb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-is-replica "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3322")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-database primarydb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-username immudb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-password immudb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-enabled "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-prefetch-tx-buffer-size "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-commit-concurrency "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n")])])]),t("p",[e._v("The new replica will start fetching transactions from the primary node and as soon as it synchronizes all transactions\nit will become a valid member of the quorum for transaction confirmation.")]),e._v(" "),t("h3",{attrs:{id:"speeding-up-initial-replica-synchronization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#speeding-up-initial-replica-synchronization"}},[e._v("#")]),e._v(" Speeding up initial replica synchronization")]),e._v(" "),t("p",[e._v("The synchronization process of a new replica may take a lot of time if the database is large or has to handle a lot of normal traffic.\nSuch replica will fetch all transactions performing additional checksum calculations and validations.\nThat way the security of the whole cluster is further hardened revealing tampering attempts in any transaction\nin the database including those transactions that were not accessed for a very long time.")]),e._v(" "),t("p",[e._v("There are situations however when the speed of recovery is crucial.\nIn such a situations the data of the database may be copied from another cluster node.\nThis should be done while the database is unloaded:")]),e._v(" "),t("h4",{attrs:{id:"step-1-create-replica-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-replica-database"}},[e._v("#")]),e._v(" Step 1. Create replica database")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database create replicadb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-is-replica "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3322")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-database primarydb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-username immudb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-password immudb "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-enabled "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-prefetch-tx-buffer-size "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-commit-concurrency "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\ndatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'replicadb'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("replica: true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" successfully created\n")])])]),t("h4",{attrs:{id:"step-2-unload-replica-from-the-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-unload-replica-from-the-database"}},[e._v("#")]),e._v(" Step 2. Unload replica from the database")]),e._v(" "),t("p",[e._v("Once database is unloaded, we can safely work on the files of that database.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database unload replicadb\ndatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'replicadb'")]),e._v(" successfully unloaded\n")])])]),t("h4",{attrs:{id:"step-3-copy-files-from-other-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-copy-files-from-other-node"}},[e._v("#")]),e._v(" Step 3. Copy files from other node")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rsync")]),e._v(" -ave --delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HEALTHY_REPLICA_HOST"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HEALTHYREPLICA_DATA_DIR"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/replicadb/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NEW_REPLICA_HOST"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("NEW_REPLICA_DATA_DIR"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/replicadb/\nsending incremental "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" list\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n\nsent "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("590,357")]),e._v(",187 bytes  received "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("230")]),e._v(" bytes  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("168,673")]),e._v(",547.71 bytes/sec\ntotal size is "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("590,212")]),e._v(",158  speedup is "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.00")]),e._v("\n")])])]),t("blockquote",[t("p",[e._v("Note: if there are writes on the database happening during the sync, it is necessary to\nunload the source replica before copying files to avoid inconsistencies between database files.")])]),e._v(" "),t("h4",{attrs:{id:"step-4-load-database-on-new-replica"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-load-database-on-new-replica"}},[e._v("#")]),e._v(" Step 4. Load database on new replica")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database load replicadb\ndatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'replicadb'")]),e._v(" successfully unloaded\n")])])])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"recovering-from-a-primary-loss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovering-from-a-primary-loss"}},[e._v("#")]),e._v(" Recovering from a primary loss")]),e._v(" "),t("p",[e._v("Current immudb cluster setup requires the primary node to be always predefined.\nThis means that in case of a primary node loss,\nit is necessary to manually promote a replica to become the primary node.\nGenerally, electing the new primary depends on the number of available instances,\ntheir precommit state, and the replication-sync-acks setting on the primary.")]),e._v(" "),t("h4",{attrs:{id:"step-1-inspect-states-of-all-replicas-in-the-cluster-and-choose-the-new-primary-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-inspect-states-of-all-replicas-in-the-cluster-and-choose-the-new-primary-node"}},[e._v("#")]),e._v(" Step 1. Inspect states of all replicas in the cluster and choose the new primary node")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuclient login immudb\nPassword:\nSuccessfully logged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v("\n\n$ immuclient use replicadb\nNow using replicadb\n\n$ immuclient status\ndatabase:         replicadb\ntxID:             "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("734931")]),e._v("\nhash:             5e2f2feec159bc19c952a7a93832338a178936c5b258d0c906b7c145faf3a4b5\nprecommittedTxID: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("734931")]),e._v("\nprecommittedHash: 5e2f2feec159bc19c952a7a93832338a178936c5b258d0c906b7c145faf3a4b5\n")])])]),t("p",[e._v("It's important to carefully choose the new primary node in order to avoid losing committed transactions.\nIt is generally a good idea to promote some instance as a primary that has already precommitted the largest\ntransaction contained in at least "),t("code",[e._v("replication-sync-acks")]),e._v(" instances.")]),e._v(" "),t("p",[e._v("In the following scenario, we consider a three-node cluster with an unreachable primary:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# state in replica1")]),e._v("\nprecommittedTxID: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("734931")]),e._v("\nprecommittedHash: 5e2f2feec159bc19c952a7a93832338a178936c5b258d0c906b7c145faf3a4b5\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# state in replica2")]),e._v("\nprecommittedTxID: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("734920")]),e._v("\nprecommittedHash: 2a4f41c3d5b03ff014ca30b53d23ee3a098936c3b2a8a0d6e9b3b540cac166a1\n")])])]),t("p",[e._v("In the event that the primary node becomes unavailable, a replica with a higher precommittedTxID should be chosen as the primary.\nIf "),t("code",[e._v("replication-sync-acks")]),e._v(" is 2, both replicas must acknowledge precommit before the primary can commit.\nIn the scenario above, this would mean 734920 was the most recent committed transaction. Therefore, replica2 could also be selected as the new primary.")]),e._v(" "),t("h4",{attrs:{id:"step-2-switch-the-selected-replica-to-become-new-primary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-switch-the-selected-replica-to-become-new-primary"}},[e._v("#")]),e._v(" Step 2. Switch the selected replica to become new primary")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database update replicadb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-enabled "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-sync-acks "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-is-replica"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\ndatabase "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'replicadb'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("replica: false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" successfully updated\n")])])]),t("blockquote",[t("p",[e._v("Note that the number of required sync replicas may be temporarily lowered due to the loss of the primary node.")])]),e._v(" "),t("h4",{attrs:{id:"step-3-switch-other-replicas-to-follow-new-primary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-switch-other-replicas-to-follow-new-primary"}},[e._v("#")]),e._v(" Step 3. Switch other replicas to follow new primary")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database update replicadb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3325")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-host "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-port "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3324")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n   --replication-primary-database replicadb\n")])])]),t("h4",{attrs:{id:"step-4-truncate-precommitted-transactions-on-other-replicas-if-needed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-truncate-precommitted-transactions-on-other-replicas-if-needed"}},[e._v("#")]),e._v(" Step 4. Truncate precommitted transactions on other replicas if needed")]),e._v(" "),t("p",[e._v("It may happen that the new replica will reject synchronizing with the new primary.\nIn such case immudb will report an error in logs:")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("immudb 2022/10/11 15:57:42 ERROR: replica precommit state at 'replicadb' diverged from primary's\n")])])]),t("p",[e._v("To fix this issue the replica may need to discard precommited transactions.\nThis can be easily instructed with the flag "),t("code",[e._v("replication-allow-tx-discarding")]),e._v(" as follows:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ immuadmin database update replicadb -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3325")]),e._v(" --replication-allow-tx-discarding\n")])])]),t("p",[e._v("In the case immudb instance itself is run a replica, to fix that issue please restart immudb with the "),t("code",[e._v("--replication-allow-tx-discarding")]),e._v(" flag that will discard any transaction on the replica that has not yet been fully committed.")]),e._v(" "),t("h4",{attrs:{id:"step-5-start-a-new-replica-to-restore-original-cluster-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-5-start-a-new-replica-to-restore-original-cluster-size"}},[e._v("#")]),e._v(" Step 5. Start a new replica to restore original cluster size")]),e._v(" "),t("p",[e._v("Because the primary node was irrecoverably lost, a new replica should be spawned in its place.\nPlease refer to the previous section dealing with the loss of replica for more details\non how to add a replacement replica node.")]),e._v(" "),t("h4",{attrs:{id:"step-6-point-immudb-clients-to-the-new-primary-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-6-point-immudb-clients-to-the-new-primary-node"}},[e._v("#")]),e._v(" Step 6. Point immudb clients to the new primary node")]),e._v(" "),t("p",[e._v("Clients performing write operations should now be switched to the new primary node.")])]),e._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"changing-configuration-of-a-locked-primary-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changing-configuration-of-a-locked-primary-database"}},[e._v("#")]),e._v(" Changing configuration of a locked primary database")]),e._v(" "),t("p",[e._v("In most cases the primary database can be easily updated and the change will be applied without the need for a restart.\nThat way the primary node can change the number of required confirmations,\nenable/disable synchronous replication and even be converted to a replica.")]),e._v(" "),t("p",[e._v("There can be a situation though where the database is already blocked with writes waiting for confirmations from replicas.\nThis could happen if replicas became unavailable\nor as a result of misconfiguration where the replicas quorum value was set to some large value.")]),e._v(" "),t("p",[e._v("In this situation trying to change the configuration of the database will block as well and will be unblocked once\nthe database itself continues committing transactions.")]),e._v(" "),t("p",[e._v("If the database can not be fixed to restore commits (e.g. if it is impossible to add enough synced replicas quickly enough),\nthe following workaround can be used (please note that it requires immudb restart):")]),e._v(" "),t("ol",[t("li",[e._v("Update database settings, e.g. run "),t("code",[e._v("immuadmin database update")]),e._v(" command - that operation will block indefinitely but will\nalready persist new database settings")]),e._v(" "),t("li",[e._v("Restart the immudb database instance - upon restart, the configuration of the database is read and applied from persistent settings\nthus it will apply the configuration set in the previous step.")])]),e._v(" "),t("p",[e._v("With this approach, the number of required confirmations can be lowered down to the correct value\nor disabled to switch to asynchronous replication.")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);