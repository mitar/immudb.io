(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{783:function(t,e,a){"use strict";a.r(e);var s=a(17),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"use-immuclient-as-auditor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-immuclient-as-auditor"}},[t._v("#")]),t._v(" Use immuclient as Auditor")]),t._v(" "),a("p",[t._v("The Auditor is a component for checking if immudb was tampered, it's a good practice to run the auditor as a separate and indipendent compontent. immuclient can act as Auditor by running the following command:")]),t._v(" "),a("p",[t._v("Start interactive:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("immuclient audit-mode\n")])])]),a("p",[t._v("immuclient is now running on the following address:\n**immuclient Port: 9477 - http://immuclient-auditor:9477/metrics **")]),t._v(" "),a("p",[t._v("example output:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_curr_root_per_server Current root index used for the latest audit.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_curr_root_per_server gauge")]),t._v("\nimmuclient_audit_curr_root_per_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_prev_root_per_server Previous root index used for the latest audit.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_prev_root_per_server gauge")]),t._v("\nimmuclient_audit_prev_root_per_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_result_per_server Latest audit result (1 = ok, 0 = tampered).")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_result_per_server gauge")]),t._v("\nimmuclient_audit_result_per_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_run_at_per_server Timestamp in unix seconds at which latest audit run.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_run_at_per_server gauge")]),t._v("\nimmuclient_audit_run_at_per_server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".5907565337454605e+09\n")])])]),a("p",[t._v("immuclient looks for immudb at 127.0.0.1:3322 by deault with the default username and password. Nevertheless a number of parameters can be defined:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('immuclient audit-mode            -  Run a foreground auditor\nimmuclient audit-mode install    -  Install and runs daemon\nimmuclient audit-mode stop       -  Stops the daemon\nimmuclient audit-mode start      -  Starts initialized daemon\nimmuclient audit-mode restart    -  Restarts daemon\nimmuclient audit-mode uninstall  -  Removes daemon and its setup\n\n\nFlags:\n  -h, --help   help for audit-mode\n\nGlobal Flags:\n      --audit-databases string               Optional comma-separated list of databases (names) to be audited. Can be full name(s) or just name prefix(es).\n      --audit-monitoring-host string         Host for the monitoring HTTP server when running in audit mode (serves endpoints like metrics, health and version). (default "0.0.0.0")\n      --audit-monitoring-port int            Port for the monitoring HTTP server when running in audit mode (serves endpoints like metrics, health and version). (default 9477)\n      --audit-notification-password string   Password used to authenticate when publishing audit result to \'audit-notification-url\'.\n      --audit-notification-url string        If set, auditor will send a POST request at this URL with audit result details.\n      --audit-notification-username string   Username used to authenticate when publishing audit result to \'audit-notification-url\'.\n      --audit-password string                immudb password used to login during audit; can be plain-text or base64 encoded (must be prefixed with \'enc:\' if it is encoded)\n      --audit-username string                immudb username used to login during audit\n      --certificate string                   server certificate file path (default "./tools/mtls/4_client/certs/localhost.cert.pem")\n      --clientcas string                     clients certificates list. Aka certificate authority (default "./tools/mtls/2_intermediate/certs/ca-chain.cert.pem")\n      --config string                        config file (default path are configs or $HOME. Default filename is immuclient.toml)\n      --database string                      immudb database to be used\n      --dir string                           Main directory for audit process tool to initialize (default "/var/folders/0z/wk6v4sjd31qbvt7l75t_z_v00000gn/T/")\n  -a, --immudb-address string                immudb host address (default "127.0.0.1")\n  -p, --immudb-port int                      immudb port number (default 3322)\n      --max-recv-msg-size int                max message size in bytes the client can receive (default 4194304)\n  -m, --mtls                                 enable mutual tls\n      --password string                      immudb password used to login; can be plain-text or base64 encoded (must be prefixed with \'enc:\' if it is encoded)\n      --pkey string                          server private key path (default "./tools/mtls/4_client/private/localhost.key.pem")\n      --roots-filepath string                Filepath for storing root hashes after every successful audit loop. Default is tempdir of every OS. (default "/tmp/")\n      --server-signing-pub-key string        Path to the public key to verify signatures when presents\n      --servername string                    used to verify the hostname on the returned certificates (default "localhost")\n      --tokenfile string                     authentication token file (default path is $HOME or binary location; default filename is )\n      --username string                      immudb username used to login\n      --value-only                           returning only values for get operations\n')])])]),a("h2",{attrs:{id:"running-immuclient-auditor-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-immuclient-auditor-as-a-service"}},[t._v("#")]),t._v(" Running immuclient Auditor as a service")]),t._v(" "),a("p",[t._v("immuclient as Auditor can be installed in the system with the following command:")]),t._v(" "),a("p",[t._v("Install service:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("immuclient audit-mode "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("In this case, all parameters are written into the "),a("code",[t._v("immuclient")]),t._v(" configuration file:")]),t._v(" "),a("ul",[a("li",[t._v("Linux: "),a("code",[t._v("/etc/immudb/immuclient.toml")])]),t._v(" "),a("li",[t._v("Windows: "),a("code",[t._v("C:\\ProgramData\\ImmuClient\\config\\immuclient.toml")])])]),t._v(" "),a("h2",{attrs:{id:"running-immuclient-auditor-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-immuclient-auditor-with-docker"}},[t._v("#")]),t._v(" Running immuclient Auditor with docker")]),t._v(" "),a("p",[t._v("We also provide a docker image starting immuclient as Auditor:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker pull codenotary/auditor\n")])])]),a("p",[t._v("Then it's possible to run the command with:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -it -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_IMMUDB_ADDRESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ip"')]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_AUDIT_USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"immudb"')]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_AUDIT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"immudb"')]),t._v(" codenotary/auditor\n")])])]),a("h2",{attrs:{id:"auditor-best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auditor-best-practices"}},[t._v("#")]),t._v(" Auditor best practices")]),t._v(" "),a("h3",{attrs:{id:"how-can-i-be-notified-if-my-immudb-istance-was-tampered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-be-notified-if-my-immudb-istance-was-tampered"}},[t._v("#")]),t._v(" How can I be notified if my immudb istance was tampered?")]),t._v(" "),a("p",[t._v("It's possible to provide an external url that will be triggered in case a tamper is detected.\nBy configuring "),a("code",[t._v("IMMUCLIENT_AUDIT_NOTIFICATION_URL")]),t._v(", a POST request will be sent with the following body:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "current_state": {\n    "hash": "string",\n    "signature": {\n      "public_key": "string",\n      "signature": "string"\n    },\n    "tx": 0\n  },\n  "db": "string",\n  "password": "string",\n  "previous_state": {\n    "hash": "string",\n    "signature": {\n      "public_key": "string",\n      "signature": "string"\n    },\n    "tx": 0\n  },\n  "run_at": "2020-11-13T00:53:42+01:00",\n  "tampered": true,\n  "username": "string"\n}\n')])])]),a("p",[t._v("NOTE: it's not possible to know at which transaction the database was tampered. The Auditor checks every second if the data was tampered - so it's only possible to know at which time frame the tampering was detected.")]),t._v(" "),a("h3",{attrs:{id:"how-many-auditors-should-i-run-to-secure-my-immudb-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-many-auditors-should-i-run-to-secure-my-immudb-instance"}},[t._v("#")]),t._v(" How many Auditors should I run to secure my immudb instance?")]),t._v(" "),a("p",[t._v("A proper setup of one immuclient instance can fit most of cases, but there are ways to increase the security on detecting tampering. A single instance can go offline for any reason: network problems, hardware failures or attacks. Therefore a good practice can be to have multiple Auditor instances running in different zones")]),t._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[t._v("immuclient is "),a("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache v2.0 License"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);