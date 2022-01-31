(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{576:function(t,e,n){"use strict";n.r(e);var r=n(14),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("immudb, world’s fastest immutable database.")]),t._v(" "),n("p",[t._v("With immudb you can track changes in sensitive data in your transactional databases and then record those changes permanently in a\ntamperproof immudb database. This allows you to keep an indelible history of sensitive data, for example debit/credit card transactions.\n"),n("img",{attrs:{align:"right",src:"https://raw.githubusercontent.com/codenotary/immudb/master/img/immudb-mascot-small.png",width:"256px"}})]),t._v(" "),n("p",[t._v("Traditional transaction logs are hard to scale and are mutable. So there is no way to know for sure if your data has been compromised.")]),t._v(" "),n("p",[t._v("As such, immudb provides "),n("strong",[t._v("unparalleled insights")]),t._v(" "),n("strong",[t._v("retroactively")]),t._v(" of changes to your sensitive data, even\nif your perimeter has been compromised. immudb guarantees immutability by using a "),n("strong",[t._v("Merkle tree structure")]),t._v(" internally.")]),t._v(" "),n("p",[t._v("immudb gives you the same "),n("strong",[t._v("cryptographic verification")]),t._v(" of the integrity of data written with "),n("strong",[t._v("SHA-256")]),t._v(" as a classic blockchain without the cost and complexity associated with blockchains today.")]),t._v(" "),n("h2",{attrs:{id:"why-immudb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-immudb"}},[t._v("#")]),t._v(" Why immudb?")]),t._v(" "),n("p",[t._v("immudb has 4 main benefits:")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("immudb is immutable")]),t._v(". You can add records, but "),n("strong",[t._v("never change or delete records")]),t._v(".")]),t._v(" "),n("li",[t._v("Data stored in immudb is "),n("strong",[t._v("cryptographically coherent and verifiable")]),t._v(", like blockchains, just without all the complexity and at high speed.")]),t._v(" "),n("li",[t._v("Anyone can get "),n("strong",[t._v("started with immudb in minutes")]),t._v(". Whether you're using node.js, Java, Python, Golang, .Net, or any other language. It's very easy to use and you can have your immutable database running in just a few minutes.")]),t._v(" "),n("li",[t._v("Finally, immudb is  "),n("strong",[t._v("Open Source")]),t._v(". You can run it "),n("strong",[t._v("on premise")]),t._v(", or in the "),n("strong",[t._v("cloud")]),t._v(". It's completely free. immudb is governed by the Apache 2.0 License.")])]),t._v(" "),n("p",[t._v("immudb can be ran on "),n("strong",[t._v("Linux")]),t._v(", "),n("strong",[t._v("FreeBSD")]),t._v(", "),n("strong",[t._v("Windows")]),t._v(", and "),n("strong",[t._v("MacOS")]),t._v(", along with\nother systems derived from them, such as "),n("strong",[t._v("Kubernetes")]),t._v(" and "),n("strong",[t._v("Docker")]),t._v(".")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://twitter.com/intent/tweet?text=immudb:%20lightweight,%20high-speed%20immutable%20database!&url=https://github.com/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Tweet%20about%20immudb",alt:"Tweet about\nimmudb!"}}),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[t._v("#")]),t._v(" Components")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("immudb")]),t._v(" is the server binary that listens on port 3322 and provides a gRPC interface")]),t._v(" "),n("li",[n("strong",[t._v("immugw")]),t._v(" is the intelligent REST proxy that connects to immudb and provides a RESTful interface for applications. We recommend to run immudb and immugw on separate machines to enhance security. immugw can be found in a different "),n("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("repository"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("strong",[t._v("immuadmin")]),t._v(" is the admin CLI for immudb and immugw. You can install and manage the service installation for both components and get statistics as well as runtime information.")]),t._v(" "),n("li",[n("strong",[t._v("immuclient")]),t._v(" is the CLI client for immudb. You can read, write data into immudb from the commandline using direct or interactive mode.")])]),t._v(" "),n("p",[n("img",{attrs:{src:"todo",alt:"immudb component overview"}})]),t._v(" "),n("p",[t._v("The latest release binaries can be found "),n("a",{attrs:{href:"https://github.com/codenotary/immudb/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"further-readings"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-readings"}},[t._v("#")]),t._v(" Further readings")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/0.9.0/how-it-works.html"}},[t._v("How it works")]),t._v(" - How does immudb work internally?")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/0.9.0/quickstart.html"}},[t._v("Quickstart")]),t._v(" - How to try it now on your systems, get a Docker container running in seconds")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/0.9.0/command-reference.html"}},[t._v("Command reference")]),t._v(" - Command reference of the components")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/0.9.0/sdks-api.html"}},[t._v("SDKs")]),t._v(" - API reference and code examples")],1)]),t._v(" "),n("h2",{attrs:{id:"license"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),n("p",[t._v("immudb is "),n("a",{attrs:{href:"https://github.com/codenotary/immudb/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache v2.0 License"),n("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=a.exports}}]);