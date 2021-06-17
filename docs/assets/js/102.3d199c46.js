(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{534:function(t,e,a){"use strict";a.r(e);var r=a(10),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),a("p",[t._v("Download "),a("a",{attrs:{href:"https://codenotary.com/technologies/immudb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immudb short research paper"),a("OutboundLink")],1),t._v(" to have a conceptual understanding of the technical foundations of immudb.")]),t._v(" "),a("p",[t._v("This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!")]),t._v(" "),a("h2",{attrs:{id:"adding-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-data"}},[t._v("#")]),t._v(" Adding data")]),t._v(" "),a("p",[t._v("This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!")]),t._v(" "),a("h2",{attrs:{id:"checking-data-consistency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-data-consistency"}},[t._v("#")]),t._v(" Checking data consistency")]),t._v(" "),a("p",[t._v("This section is not yet ready for immudb 0.9. We are working on it in order to improve it and we are close to deliver. Stay tuned!")]),t._v(" "),a("h2",{attrs:{id:"state-signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-signature"}},[t._v("#")]),t._v(" State signature")]),t._v(" "),a("p",[t._v("Providing "),a("code",[t._v("immudb")]),t._v(" with a signing key enables the cryptographic state signature.\nThat means that an auditor or a third party client, for instance, could verify the authenticity of the returned current state after calling the "),a("code",[t._v("currentState")]),t._v(" gRPC method.\nHere are the gRPC message definitions:")]),t._v(" "),a("div",{staticClass:"language-proto extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("message ImmutableState {\n\tuint64 txId = 3;\n\tbytes txHash = 4;\n\tSignature signature = 5;\n}\n\nmessage Signature {\n\tbytes signature = 1;\n\tbytes publicKey = 2;\n}\n")])])]),a("p",[t._v("Check "),a("RouterLink",{attrs:{to:"/0.9.1/immudb/#state-signature"}},[t._v("state signature")]),t._v(" and "),a("RouterLink",{attrs:{to:"/0.9.1/sdks-api.html#verify-state-signature"}},[t._v("verify state signature")]),t._v(" paragraphs for additional details.")],1),t._v(" "),a("p",[t._v("Immuclient and "),a("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("immugw"),a("OutboundLink")],1),t._v(" are shipped with auditor capabilities.\nTo get the signed state in combination with the auditor, launch...")]),t._v(" "),a("ul",[a("li",[t._v("...immuclient with auditor capabilities:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("immuclient audit-mode --audit-username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("immudb-username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" --audit-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("immudb-pw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" --audit-signature validate\n")])])]),a("ul",[a("li",[t._v("...with "),a("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("immugw"),a("OutboundLink")],1),t._v(" with auditor capabilities:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./immugw --audit --audit-username "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("immudb-username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" --audit-password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("immudb-pw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" --audit-signature validate\n")])])]),a("h2",{attrs:{id:"item-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#item-references"}},[t._v("#")]),t._v(" Item References")]),t._v(" "),a("p",[t._v("Enables the insertion of a special entry which references to another item.")]),t._v(" "),a("h2",{attrs:{id:"primary-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-index"}},[t._v("#")]),t._v(" Primary Index")]),t._v(" "),a("p",[t._v("Index enables queries and search based on the data key.")]),t._v(" "),a("h2",{attrs:{id:"secondary-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secondary-index"}},[t._v("#")]),t._v(" Secondary Index")]),t._v(" "),a("p",[t._v("Index enables queries and search based on the data value.")]),t._v(" "),a("h2",{attrs:{id:"cryptographic-signatures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cryptographic-signatures"}},[t._v("#")]),t._v(" Cryptographic signatures")]),t._v(" "),a("p",[t._v("A signature (PKI) provided by the client can be became part of the insertion process.")]),t._v(" "),a("h2",{attrs:{id:"authentication-transport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication-transport"}},[t._v("#")]),t._v(" Authentication (transport)")]),t._v(" "),a("p",[t._v("Integrated mTLS offers the best approach for machine-to-machine authentication, also providing communications security (entryption) over the transport channel.")]),t._v(" "),a("h1",{attrs:{id:"immugw-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#immugw-communication"}},[t._v("#")]),t._v(" immugw communication")]),t._v(" "),a("p",[t._v("immugw can be found in its "),a("a",{attrs:{href:"https://github.com/codenotary/immugw",target:"_blank",rel:"noopener noreferrer"}},[t._v("own repository"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("immugw proxies REST client communication and gRPC server interface. For security reasons, immugw should not run on the same server as immudb. The following diagram shows how the communication works:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/diagram-immugw.svg",alt:"immugw communication explained"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);