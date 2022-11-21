(window.webpackJsonp=window.webpackJsonp||[]).push([[636],{994:function(a,e,s){"use strict";s.r(e);var t=s(2),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"building-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[a._v("#")]),a._v(" Building from source")]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"build-the-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-the-binaries"}},[a._v("#")]),a._v(" Build the binaries")]),a._v(" "),s("p",[a._v("Building binaries requires a Linux operating system.")]),a._v(" "),s("p",[a._v("To build the binaries yourself, simply clone "),s("a",{attrs:{href:"https://github.com/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[a._v("immudb repository"),s("OutboundLink")],1),a._v(" and run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" all\n")])])]),s("p",[a._v("immudb can be cross compiled for different systems and architectures by setting "),s("code",[a._v("GOOS")]),a._v(" and "),s("code",[a._v("GOARCH")]),a._v(" variables, i.e.:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("windows "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" all\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"macos-specific"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-specific"}},[a._v("#")]),a._v(" macOS specific")]),a._v(" "),s("p",[a._v("The community already added immudb to "),s("a",{attrs:{href:"https://formulae.brew.sh/formula/immudb",target:"_blank",rel:"noopener noreferrer"}},[a._v("HomeBrew"),s("OutboundLink")],1),a._v(", therefore you can simply run")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" immudb\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"build-the-docker-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-the-docker-images"}},[a._v("#")]),a._v(" Build the Docker images")]),a._v(" "),s("p",[a._v("If you want to build the container images yourself, simply clone "),s("a",{attrs:{href:"https://github.com/codenotary/immudb",target:"_blank",rel:"noopener noreferrer"}},[a._v("immudb repository"),s("OutboundLink")],1),a._v(" and run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build -t myown/immudb:latest -f Dockerfile "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build -t myown/immuadmin:latest -f Dockerfile.immuadmin "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build -t myown/immuclient:latest -f Dockerfile.immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);