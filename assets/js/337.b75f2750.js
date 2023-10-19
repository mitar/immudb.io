(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{696:function(t,e,s){"use strict";s.r(e);var a=s(2),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"immuclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuclient"}},[t._v("#")]),t._v(" immuclient")]),t._v(" "),s("p",[t._v("work in progress")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#latest-binaries"}},[t._v("Latest binaries")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#build"}},[t._v("Build")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#docker"}},[t._v("Docker")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#use-immuclient"}},[t._v("Use immuclient")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#examples"}},[t._v("Examples")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#auditor"}},[t._v("Auditor")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#license"}},[t._v("License")])])]),t._v(" "),s("h2",{attrs:{id:"latest-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latest-binaries"}},[t._v("#")]),t._v(" Latest binaries")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[t._v("Get the latest builds"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[t._v("#")]),t._v(" Build")]),t._v(" "),s("p",[t._v("clone the immudb repository locally")]),t._v(" "),s("p",[s("code",[t._v("git clone https://github.com/codenotary/immudb.git")])]),t._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static\n")])])]),s("h3",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" MacOS")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("darwin "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static\n")])])]),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" immuclient-static\n")])])]),s("h2",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("h3",{attrs:{id:"build-your-own-docker-container-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-docker-container-image"}},[t._v("#")]),t._v(" build your own Docker container image")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build -t myown/immuclient:latest -f Dockerfile.immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("h3",{attrs:{id:"run-immuclient-in-a-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-immuclient-in-a-container"}},[t._v("#")]),t._v(" run immuclient in a container")]),t._v(" "),s("p",[t._v("As immuclient has a direct command and interactive, you can simply add the immuclient command after docker run.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -it --rm -name immuclient codenotary/immuclient:latest -a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("immudb host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("You can now use the interactive mode of immuclient and type commands until you type exit. Use help to get a command reference.")]),t._v(" "),s("h2",{attrs:{id:"use-immuclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-immuclient"}},[t._v("#")]),t._v(" Use immuclient")]),t._v(" "),s("p",[s("code",[t._v("immuclient help")]),t._v(" is a good starting point")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("CLI client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" immudb - the lightweight, high-speed immutable database "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" systems and applications.\nEnvironment variables:\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_IMMUDB_ADDRESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_IMMUDB_PORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_AUTH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_MTLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_SERVERNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_PKEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/4_client/private/localhost.key.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_CERTIFICATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/4_client/certs/localhost.cert.pem\n  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("IMMUCLIENT_CLIENTCAS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./tools/mtls/2_intermediate/certs/ca-chain.cert.pem\n\nUsage:\n  immuclient "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nAvailable Commands:\n  audit-mode        Starts immuclient as daemon "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" auditor mode. Run "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immuclient audit-mode help'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details\n  check-consistency Check consistency "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the specified index and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("hash")]),t._v("\n  count             Count keys having the specified prefix\n  current           Return the last merkle tree root and index stored locally\n  get               Get item having the specified key\n  getByIndex        Return an element by index\n  getRawBySafeIndex Return an element by index\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v("              Help about any "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v("           Fetch "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the item having the specified key\n  inclusion         Check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" specified index is included "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the current tree\n  iscan             Iterate over all elements by insertion order\n  login             Login using the specified username and password\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("logout")]),t._v("\n  rawsafeget        Get item having the specified key, without parsing structured values\n  rawsafeset        Set a value "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the item having the specified key, without setup structured values\n  reference         Add new reference to an existing key\n  safeget           Get and verify item having the specified key\n  safereference     Add and verify new reference to an existing key\n  safeset           Add and verify new item having the specified key and value\n  safezadd          Add and verify new key with score to a new or existing sorted "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n  scan              Iterate over keys having the specified prefix\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("               Add new item having the specified key and value\n  status            Ping to check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" server connection is alive\n  version           Show the immuclient version\n  zadd              Add new key with score to a new or existing sorted "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n  zscan             Iterate over a sorted "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n\nFlags:\n      --audit-password string    immudb password used to login during audit\n      --audit-username string    immudb username used to login during audit\n      --certificate string       server certificate "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tools/mtls/4_client/certs/localhost.cert.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --clientcas string         clients certificates list. Aka certificate authority "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tools/mtls/2_intermediate/certs/ca-chain.cert.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --config string            config "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default path are configs or "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" Default filename is immuclient.toml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --dir string               Main directory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" audit process tool to initialize "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -h, --help                     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" immuclient\n  -a, --immudb-address string    immudb "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" address "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -p, --immudb-port int          immudb port number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3322")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -m, --mtls                     "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" mutual tls\n      --pkey string              server private key path "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./tools/mtls/4_client/private/localhost.key.pem"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --prometheus-host string   Launch "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" of the Prometheus server. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --prometheus-port string   Launch port of the Prometheus server. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9477"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --roots-filepath string    Filepath "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" storing root hashes after every successful audit loop. Default is tempdir of every OS. "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --servername string        used to verify the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" on the returned certificates "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --tokenfile string         authentication token "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default path is "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v(" or binary location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" default filename is token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      --value-only               returning only values "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" get operations\n\nUse "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"immuclient [command] --help"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information about a command.\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h2",{attrs:{id:"auditor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auditor"}},[t._v("#")]),t._v(" Auditor")]),t._v(" "),s("p",[t._v("Start interactive:\n"),s("code",[t._v("immuclient audit-mode")])]),t._v(" "),s("p",[t._v("Install service:\n"),s("code",[t._v("immuclient audit-mode install")])]),t._v(" "),s("p",[t._v("When installing audit-mode as a service, all parameters are written into the "),s("code",[t._v("immuclient")]),t._v(" configuration file:")]),t._v(" "),s("ul",[s("li",[t._v("Linux: "),s("code",[t._v("/etc/immudb/immuclient.toml")])]),t._v(" "),s("li",[t._v("Windows: "),s("code",[t._v("C:\\ProgramData\\ImmuClient\\config\\immuclient.toml")])])]),t._v(" "),s("p",[t._v("**immuclient Port: 9477 - http://immuclient-auditor:9477/metrics **")]),t._v(" "),s("p",[t._v("example output:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_curr_root_per_server Current root index used for the latest audit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_curr_root_per_server gauge")]),t._v("\nimmuclient_audit_curr_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_prev_root_per_server Previous root index used for the latest audit.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_prev_root_per_server gauge")]),t._v("\nimmuclient_audit_prev_root_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_result_per_server Latest audit result (1 = ok, 0 = tampered).")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_result_per_server gauge")]),t._v("\nimmuclient_audit_result_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HELP immuclient_audit_run_at_per_server Timestamp in unix seconds at which latest audit run.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TYPE immuclient_audit_run_at_per_server gauge")]),t._v("\nimmuclient_audit_run_at_per_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("server_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:3322"')]),t._v(",server_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br8eugq036tfln0ct6o0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".5907565337454605e+09\n")])])]),s("p",[t._v("It's possible to provide the public key to verify the signature of immudb.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("./immuclient audit-mode --audit-databases defaultdb --audit-password immudb --audit-username immudb  --server-signing-pub-key ./test/signer/ec1.pub\n")])])]),s("p",[t._v("If the server public signing key is being provided to the auditor each not signed state will trigger an error.")]),t._v(" "),s("p",[t._v("Check "),s("RouterLink",{attrs:{to:"/0.9.0/immudb/#state-signature"}},[t._v("state signature")]),t._v(" and "),s("RouterLink",{attrs:{to:"/0.9.0/sdks-api.html#verify-state-signature"}},[t._v("verify state signature")]),t._v(" paragraphs for additional details.")],1),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[t._v("immuclient is "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache v2.0 License"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);