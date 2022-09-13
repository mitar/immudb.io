(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{814:function(t,e,r){"use strict";r.r(e);var o=r(2),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"sdks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sdks"}},[t._v("#")]),t._v(" SDKs")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Examples used in this documentation can be found in "),r("a",{attrs:{href:"https://github.com/codenotary/immudb-client-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("immudb examples repository"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("WrappedSection",[r("p",[t._v("In the most common scenario, you would perform write and read operations on the database talking to the server. In this case your application will be a client to immudb.")]),t._v(" "),r("p",[t._v("SDKs make it comfortable to talk to the server from your favorite language, without having to deal with details about how to talk to it.")]),t._v(" "),r("p",[t._v("The most well-known and recommended immudb SDK is written in "),r("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Golang"),r("OutboundLink")],1),t._v(", but there are other SDKs available, both maintained by the internal team and by the community.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Language")]),t._v(" "),r("th",[t._v("Maintainer")]),t._v(" "),r("th",[t._v("Latest immdb version")]),t._v(" "),r("th",[t._v("link")]),t._v(" "),r("th",[t._v("Notes")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("go")])]),t._v(" "),r("td",[t._v("immudb team")]),t._v(" "),r("td",[t._v("1.3.2")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://pkg.go.dev/github.com/codenotary/immudb/pkg/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("code",[t._v("python")])]),t._v(" "),r("td",[t._v("immudb team")]),t._v(" "),r("td",[t._v("1.3.1")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/codenotary/immudb-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("code",[t._v("JAVA")])]),t._v(" "),r("td",[t._v("immudb team")]),t._v(" "),r("td",[t._v("1.3.2")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/codenotary/immudb4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),r("OutboundLink")],1)]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("code",[t._v("NODE")])]),t._v(" "),r("td",[t._v("immudb team")]),t._v(" "),r("td",[t._v("1.2.1")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/codenotary/immudb-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Verification is not working")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("ruby")])]),t._v(" "),r("td",[t._v("Community ("),r("a",{attrs:{href:"https://github.com/ankane",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ankane"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("td",[t._v("1.3.0")]),t._v(" "),r("td",[r("a",{attrs:{href:"https://github.com/ankane/immudb-ruby",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),r("OutboundLink")],1)]),t._v(" "),r("td")])])]),t._v(" "),r("p",[t._v("The immudb server manages the requests from the outside world to the store. In order to insert or retrieve data, you need to talk with the server.")]),t._v(" "),r("div",{staticClass:"wrapped-picture"},[r("p",[r("img",{attrs:{src:"/immudb/immudb-server.svg",alt:"SDK Architecture"}})])])]),t._v(" "),r("WrappedSection",[r("h3",{attrs:{id:"immugw-communication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#immugw-communication"}},[t._v("#")]),t._v(" immugw communication")]),t._v(" "),r("p",[t._v("For other unsupported programming languages, "),r("RouterLink",{attrs:{to:"/1.3.2/connecting/immugw.html"}},[t._v("immugw")]),t._v(" provides a REST gateway that can be used to talk to the server via generic HTTP.")],1),t._v(" "),r("p",[t._v("immugw can be found in its "),r("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("own repository"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("immugw proxies REST client communication and gRPC server interface. For security reasons, immugw should not run on the same server as immudb. The following diagram shows how the communication works:")]),t._v(" "),r("p",[r("img",{attrs:{src:"/diagram-immugw.svg",alt:"immugw communication explained"}})])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);