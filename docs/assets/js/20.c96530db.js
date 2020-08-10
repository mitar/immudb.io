(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{391:function(e,t,i){"use strict";i.r(t);var r=i(45),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"immudb-release-v0-7-0"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#immudb-release-v0-7-0"}},[e._v("#")]),e._v(" immudb release v0.7.0")]),e._v(" "),i("p",[e._v("Release v0.7.0 - multi-database support, more resilience, even better performance, improved documentation")]),e._v(" "),i("p",[e._v("immudb is getting faster and stronger! This release brings new features, even better performance and more resilience to immudb!")]),e._v(" "),i("p",[e._v("Summary of the most relevant points:")]),e._v(" "),i("ul",[i("li",[e._v("Multi-database support (you can run many databases with one immudb server to separate data or to provide multi-tenancy)")]),e._v(" "),i("li",[e._v("Enhanced user management (per database)")]),e._v(" "),i("li",[e._v("Automated service and data recovery in case of unexpected OS or container crashes")]),e._v(" "),i("li",[e._v("Improved service management for Microsoft Windows")]),e._v(" "),i("li",[e._v("100+ times faster cryptographic proofs (we completely revised and optimized the methods for entry validation; but don't worry, the API methods didn't change)")]),e._v(" "),i("li",[e._v("Improved documentation for gRPC and structured value")])]),e._v(" "),i("p",[e._v("Thanks for the amazing community feedback and contribution!")]),e._v(" "),i("h1",{attrs:{id:"changelog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),i("p",[i("a",{attrs:{name:"v0.7.0"}})]),e._v(" "),i("h2",{attrs:{id:"v0-7-0-2020-08-10"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-0-2020-08-10"}},[e._v("#")]),e._v(" [v0.7.0] - 2020-08-10")]),e._v(" "),i("h3",{attrs:{id:"bug-fixes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),i("ul",[i("li",[e._v("userlist returns wrong message when logged in as immudb with single database")]),e._v(" "),i("li",[e._v("use dedicated logger for store")]),e._v(" "),i("li",[e._v("fix compilation error in corruption checker test")]),e._v(" "),i("li",[e._v("race condition in token eviction")]),e._v(" "),i("li",[e._v("chose defaultdb on user create if not in multiple db mode")]),e._v(" "),i("li",[e._v("user list showing only the superadmin user even when other user exist")]),e._v(" "),i("li",[e._v("fix multiple services config uninstall")]),e._v(" "),i("li",[e._v("skip loading databases from disk when in memory is requested")]),e._v(" "),i("li",[e._v("if custom port is <= 0 use default port for both immudb and immugw")]),e._v(" "),i("li",[e._v("fix immugw failing to start with nil pointer dereference since gRPC dial options are inherited (bug was introduced in commit a4477e2e403ab35fc9392e0a3a2d8436a5806901)")]),e._v(" "),i("li",[e._v("remove os.Exit(0) from disconnect method")]),e._v(" "),i("li",[e._v("fix DefaultPasswordReader initialization. fixes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/404",target:"_blank",rel:"noopener noreferrer"}},[e._v("#404"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("fix travis build sleep time")]),e._v(" "),i("li",[e._v("use the correct server logger and use a dedicated logger with warning level for the db store")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" fix user list output to support multiple databases (with permissions) for the same user")]),e._v(" "),i("li",[i("strong",[e._v("pkg/auth:")]),e._v(" if new auth token is found in outgoing context it replaced the old one")]),e._v(" "),i("li",[i("strong",[e._v("pkg/client:")]),e._v(" use database set internally database name")]),e._v(" "),i("li",[i("strong",[e._v("pkg/client:")]),e._v(" inherit dial options that came from constructor")]),e._v(" "),i("li",[i("strong",[e._v("pkg/fs:")]),e._v(" don't overwrite copy error on Close malfunction. Sync seals the operation–not Close.")]),e._v(" "),i("li",[i("strong",[e._v("pkg/gw:")]),e._v(" fix client option construction with missing homedir")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" added os file separator and db root path")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" avoid recursion on never ending functionality. Further improvements can be done ("),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/427",target:"_blank",rel:"noopener noreferrer"}},[e._v("#427"),i("OutboundLink")],1),e._v(")")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server/server:")]),e._v(" change user pass , old password check")]),e._v(" "),i("li",[i("strong",[e._v("pkg/service:")]),e._v(" restore correct config path")]),e._v(" "),i("li",[i("strong",[e._v("pkg/store:")]),e._v(" fix count method using a proper NewKeyIterator")])]),e._v(" "),i("h3",{attrs:{id:"changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changes"}},[e._v("#")]),e._v(" Changes")]),e._v(" "),i("ul",[i("li",[e._v("refactor immuclient test")]),e._v(" "),i("li",[e._v("fix tokenService typos")]),e._v(" "),i("li",[e._v("add use database gw handler")]),e._v(" "),i("li",[e._v("spread token service usage")]),e._v(" "),i("li",[e._v("enhance immudb server messages during start")]),e._v(" "),i("li",[e._v("capitalize immudb stop log message for consistency reasons")]),e._v(" "),i("li",[e._v("remove permission leftovers and useless messages in client server protocol")]),e._v(" "),i("li",[e._v("log immudb user messages during start to file if a logfile is specified")]),e._v(" "),i("li",[e._v("use debug instead of info for some log messages that are not relevant to the user")]),e._v(" "),i("li",[e._v("versioning token filename")]),e._v(" "),i("li",[e._v("add auditor single run mode")]),e._v(" "),i("li",[e._v("fix conflicts while rebasing from master")]),e._v(" "),i("li",[e._v("remove user commands from immuclient")]),e._v(" "),i("li",[e._v("add unit tests for zip and tar")]),e._v(" "),i("li",[e._v("fix test")]),e._v(" "),i("li",[e._v("improve command ux and fix changepassword test. Closes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/370",target:"_blank",rel:"noopener noreferrer"}},[e._v("#370"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("change insert user to use safeset instead of set")]),e._v(" "),i("li",[e._v("remove useless quitToStdError and os.exit calls")]),e._v(" "),i("li",[e._v("remove sleep from tests")]),e._v(" "),i("li",[e._v("use 0.0.0.0 instead of 127.0.0.1 as default address for both immudb and immugw")]),e._v(" "),i("li",[e._v("using cobra command std out")]),e._v(" "),i("li",[e._v("move immuadmin and immuclient service managing to pkg")]),e._v(" "),i("li",[e._v("add homedir service")]),e._v(" "),i("li",[e._v("rewrite tests in order to use pkg/server/servertest")]),e._v(" "),i("li",[e._v("add codecov windows and freebsd ignore paths")]),e._v(" "),i("li",[e._v("fix typo in UninstallManPages function name")]),e._v(" "),i("li",[e._v("add coveralls.io stage")]),e._v(" "),i("li",[e._v("refactor immuadmin service to use immuos abstraction")]),e._v(" "),i("li",[e._v("add coverall badge")]),e._v(" "),i("li",[e._v("add filepath abstration, use it in immuadmin backup and enhance coverage for backup test")]),e._v(" "),i("li",[e._v("add os and filepath abstraction and use it in immuadmin backup command")]),e._v(" "),i("li",[e._v("fix codecov ignore paths")]),e._v(" "),i("li",[e._v("remove os wrapper from codecov.yml")]),e._v(" "),i("li",[e._v("fix go test cover coverall")]),e._v(" "),i("li",[e._v("fix immuclient tests")]),e._v(" "),i("li",[e._v("add empty clientTest constructor")]),e._v(" "),i("li",[e._v("user list client return a printable string")]),e._v(" "),i("li",[e._v("add unexpectedNotStructuredValue error. fixes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/402",target:"_blank",rel:"noopener noreferrer"}},[e._v("#402"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("add fail fast option in test command")]),e._v(" "),i("li",[e._v("fix contributing.md styling")]),e._v(" "),i("li",[e._v("remove tests from windows CI")]),e._v(" "),i("li",[e._v("add go-acc to calculate code coverage and fix go version to 1.13")]),e._v(" "),i("li",[e._v("refactor immuclient test, place duplicated code in one place")]),e._v(" "),i("li",[e._v("add an explicit data source on terminal reader")]),e._v(" "),i("li",[e._v("TestHealthCheckFails if grpc is no fully closed")]),e._v(" "),i("li",[e._v("add options to tuning corruption checking frequency, iteration and single iteration")]),e._v(" "),i("li",[i("strong",[e._v("cmd:")]),e._v(" immugw and immudb use process launcher for detach mode")]),e._v(" "),i("li",[i("strong",[e._v("cmd:")]),e._v(" token is managed as a string. fixes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/453",target:"_blank",rel:"noopener noreferrer"}},[e._v("#453"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("strong",[e._v("cmd:")]),e._v(" fix typo in command messages")]),e._v(" "),i("li",[i("strong",[e._v("cmd:")]),e._v(" enhance PrintTable function to support custom table captions and use such captions in immuadmin user and database list commands")]),e._v(" "),i("li",[i("strong",[e._v("cmd:")]),e._v(" restore error handling in main method")]),e._v(" "),i("li",[i("strong",[e._v("cmd/helper:")]),e._v(" add doc comment for the PrintTable function")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin:")]),e._v(" immuadmin user sub-commands use cobra, tests")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" remove useless auth check in print tree command")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" fix text alignment and case")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" move command line and his command helper method in a single file")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" automatically login the immuadmin user after forced password change is completed")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" remove silent errors in immuadmin")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" move options as dependency of commandline struct")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" user and database list use table printer")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuclient/command:")]),e._v(" remove useless comment")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuclient/immuc:")]),e._v(" inject homedir service as dependency")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immugw/command:")]),e._v(" use general viper.BindPFlags binding instead of a verbose bindFlags solution")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immutest/command:")]),e._v(" inject homedir service as dependency")]),e._v(" "),i("li",[i("strong",[e._v("pkg/client/options:")]),e._v(" add options fields and test")]),e._v(" "),i("li",[i("strong",[e._v("pkg/client/timestamp:")]),e._v(" removed unused ntp timestamp")]),e._v(" "),i("li",[i("strong",[e._v("pkg/fs:")]),e._v(" utilize filepath directory walk for copy")]),e._v(" "),i("li",[i("strong",[e._v("pkg/fs:")]),e._v(" traceable copy errors")]),e._v(" "),i("li",[i("strong",[e._v("pkg/fs:")]),e._v(" create file copy with flags from the start, in write-only mode")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" add corruption checker random indexes generator  missing dependency")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" improve tests")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" mtls test certificates system db as immuserver property improve tests")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" make DevMode default false and cleanup call to action message shown right after immudb start")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" immudb struct implements immudbIf interface, fixes previous tests")]),e._v(" "),i("li",[i("strong",[e._v("pkg/server:")]),e._v(" add corruption checker random indexes generator dependency")]),e._v(" "),i("li",[i("strong",[e._v("pkg/store/sysstore:")]),e._v(" remove useless method")])]),e._v(" "),i("h3",{attrs:{id:"code-refactoring"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-refactoring"}},[e._v("#")]),e._v(" Code Refactoring")]),e._v(" "),i("ul",[i("li",[e._v("add immuadmin services interfaces and terminal helper")]),e._v(" "),i("li",[e._v("remove custom errors inside useDatabase and createDatabase services. Fixes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/367",target:"_blank",rel:"noopener noreferrer"}},[e._v("#367"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("handle in idiomatic way errors in changePermission grpc service. Fixes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/368",target:"_blank",rel:"noopener noreferrer"}},[e._v("#368"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("decoupled client options from server gateway constructor")]),e._v(" "),i("li",[e._v("refactor detach() method in a process launcher service")]),e._v(" "),i("li",[e._v("decouple manpage methods in a dedicated service")]),e._v(" "),i("li",[i("strong",[e._v("cmd:")]),e._v(" move database management commands from immuclient to immuadmin. Fixes "),i("a",{attrs:{href:"https://github.com/vchain-us/immudb/issues/440",target:"_blank",rel:"noopener noreferrer"}},[e._v("#440"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" using c.PrintfColorW instead c.PrintfColor to increase cobra.cmd integration for tests")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" move checkLoggedInAndConnect, connect, disconnect from server to login file")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immuadmin/command:")]),e._v(" remove useless argument in Init and improve naming conventions")])]),e._v(" "),i("h3",{attrs:{id:"features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),i("ul",[i("li",[e._v("add multiple databases support")]),e._v(" "),i("li",[i("strong",[e._v("cmd/helper:")]),e._v(" add table printer")]),e._v(" "),i("li",[i("strong",[e._v("cmd/helper:")]),e._v(" add PrintfColorW to decouple writer capabilities")]),e._v(" "),i("li",[i("strong",[e._v("cmd/immutest:")]),e._v(" allow immutest to run on remote server")]),e._v(" "),i("li",[i("strong",[e._v("pkg/client:")]),e._v(" add token service")])]),e._v(" "),i("h1",{attrs:{id:"downloads"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#downloads"}},[e._v("#")]),e._v(" Downloads")]),e._v(" "),i("p",[i("strong",[e._v("Docker image")]),e._v(" "),i("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.7.0 Dockerhub"),i("OutboundLink")],1)]),e._v(" "),i("p",[i("strong",[e._v("Immudb Binaries")])]),e._v(" "),i("p",[i("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/tag/v0.7.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.7.0 download"),i("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);