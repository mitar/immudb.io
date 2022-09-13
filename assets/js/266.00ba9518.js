(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{624:function(e,t,i){"use strict";i.r(t);var o=i(2),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),i("p",[e._v("This page describes how to set different settings in immudb.")]),e._v(" "),i("p",[e._v("Some of the most important settings that ones are:")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Parameter")]),e._v(" "),i("th",[e._v("Default")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("code",[e._v("dir")])]),e._v(" "),i("td",[i("code",[e._v("./data")])]),e._v(" "),i("td",[e._v("System and user databases are stored here")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("network")])]),e._v(" "),i("td",[i("code",[e._v("tcp")])]),e._v(" "),i("td")]),e._v(" "),i("tr",[i("td",[i("code",[e._v("address")])]),e._v(" "),i("td",[i("code",[e._v("0.0.0.0")])]),e._v(" "),i("td",[e._v("Listening address")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("port")])]),e._v(" "),i("td",[i("code",[e._v("3322")])]),e._v(" "),i("td",[e._v("Listing port")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("mtls")])]),e._v(" "),i("td",[i("code",[e._v("false")])]),e._v(" "),i("td",[e._v("Whether to enable "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Mutual_authentication#mTLS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mutual TLS"),i("OutboundLink")],1)])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("pkey")])]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("If specified, the server can sign the state the clients use to verify immutability")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("auth")])]),e._v(" "),i("td",[i("code",[e._v("true")])]),e._v(" "),i("td",[e._v("If enabled, immudb will require user and password from the client")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("clientcas")])]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("Client certificate authority")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("maintenance")])]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("Maintenance mode. Override the authentication flag")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("sync")])]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("Runs in sync mode. Prevents data loss but affects performance")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("token-expiry-time")])]),e._v(" "),i("td",[i("code",[e._v("1440")])]),e._v(" "),i("td",[e._v("Client token expiry time, in minutes")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("web-server")])]),e._v(" "),i("td",[i("code",[e._v("true")])]),e._v(" "),i("td",[e._v("Embedded web console server")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("web-server-port")])]),e._v(" "),i("td",[i("code",[e._v("8080")])]),e._v(" "),i("td",[e._v("Embeded web console port server")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("pgsql-server")])]),e._v(" "),i("td",[i("code",[e._v("true")])]),e._v(" "),i("td",[e._v("pqsql protocol compatibility server (allows to connect from pgsql compatible clients)")])]),e._v(" "),i("tr",[i("td",[i("code",[e._v("pgsql-server-port")])]),e._v(" "),i("td",[i("code",[e._v("5432")])]),e._v(" "),i("td",[e._v("pqsql protocol compatibility server port")])])])]),e._v(" "),i("p",[e._v("Settings can be specified as command line options to immudb (see "),i("code",[e._v("immudb -h")]),e._v("), in a configuration file, or as environment variables.")]),e._v(" "),i("WrappedSection",[i("h2",{attrs:{id:"configuration-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[e._v("#")]),e._v(" Configuration file")]),e._v(" "),i("p",[e._v("Settings can be specified in a "),i("a",{attrs:{href:"https://raw.githubusercontent.com/codenotary/immudb/master/configs/immudb.toml",target:"_blank",rel:"noopener noreferrer"}},[e._v("immudb.toml configuration file"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("Which configuration file to use is set with the "),i("code",[e._v("--config")]),e._v(" option. By default, immudb looks into the "),i("code",[e._v("configs")]),e._v(" subfolder in the current directory.")]),e._v(" "),i("p",[e._v("When running immudb as a service, "),i("code",[e._v("immudb service install")]),e._v(" allows to specify the configuration file to use with the "),i("code",[e._v("--config")]),e._v(" option.")])]),e._v(" "),i("WrappedSection",[i("h2",{attrs:{id:"environment-variables"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment variables")]),e._v(" "),i("p",[e._v("Settings specified via environment variables take override the configuration file. They are specified in the form of "),i("code",[e._v("IMMUDB_")]),e._v(", for example "),i("code",[e._v("IMMUDB_DIR")]),e._v(" specifies the "),i("code",[e._v("dir")]),e._v(" variable.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);