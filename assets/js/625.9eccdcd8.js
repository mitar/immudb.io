(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{984:function(a,t,e){"use strict";e.r(t);var i=e(2),o=Object(i.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"backwards-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[a._v("#")]),a._v(" Backwards compatibility")]),a._v(" "),e("WrappedSection",[e("h3",{attrs:{id:"immudb-1-1-proof-compatibility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#immudb-1-1-proof-compatibility"}},[a._v("#")]),a._v(" immudb 1.1 proof compatibility")]),a._v(" "),e("p",[a._v("immudb 1.2 introduced KV metadata to support new features such as logical deletion or data expiration.\nThis change required updates to the way a transaction hash is calculated.\nThe downside of such change is that immudb clients using immudb 1.2+\nneeded an updated method of proof calculation in order to verify newly added data.")]),a._v(" "),e("p",[a._v("In some cases it is very hard or impossible to update the verification code on the client side.\nIf this is the case, immudb offers a way to disable metadata to maintain compatibility with older clients.")])]),a._v(" "),e("WrappedSection",[e("h4",{attrs:{id:"enabling-the-1-1-proof-compatibility-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enabling-the-1-1-proof-compatibility-mode"}},[a._v("#")]),a._v(" Enabling the 1.1 proof compatibility mode")]),a._v(" "),e("p",[e("em",[a._v("Note: backwards compatibility mode is currently not available for the "),e("code",[a._v("detaultdb")]),a._v(" database.")])]),a._v(" "),e("p",[a._v("When creating new database, the mode can be specified with:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ./immuadmin database create "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("db-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --write-tx-header-version "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),e("p",[a._v("Enabling compatibility mode for existing databases can be done by:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ ./immuadmin database update "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("db-name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --write-tx-header-version "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),e("p",[e("em",[a._v("Note: immudb restart is needed to make this change effective.")])]),a._v(" "),e("p",[a._v("In order to re-enable metadata-enhanced proofs,\nupdate database settings with "),e("code",[a._v("--write-tx-header-version 1")]),a._v(" option.")])]),a._v(" "),e("WrappedSection",[e("h4",{attrs:{id:"limitations-of-1-1-compatibility-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-1-1-compatibility-mode"}},[a._v("#")]),a._v(" Limitations of 1.1 compatibility mode")]),a._v(" "),e("p",[a._v("Switching to 1.1-compatible proof mode will disable metadata support and thus will make the following operations unavailable:")]),a._v(" "),e("ul",[e("li",[a._v("For KV interface:\n"),e("ul",[e("li",[a._v("Logical deletion")]),a._v(" "),e("li",[a._v("Data expiration")]),a._v(" "),e("li",[a._v("Non-indexable entries")])])]),a._v(" "),e("li",[a._v("For SQL interface:\n"),e("ul",[e("li",[a._v("Logical deletion")]),a._v(" "),e("li",[a._v("Updates to indexed columns")])])])]),a._v(" "),e("p",[a._v("Make sure to test your application before enabling the 1.1 compatibility mode.")]),a._v(" "),e("h4",{attrs:{id:"working-with-database-that-already-contains-metadata-enhanced-entries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#working-with-database-that-already-contains-metadata-enhanced-entries"}},[a._v("#")]),a._v(" Working with database that already contains metadata-enhanced entries")]),a._v(" "),e("p",[a._v("Even though old clients can not validate proofs for metadata-enhanced records,\nthose can still read the data without proofs as long as those don't use metadata.\nOperations such as "),e("code",[a._v("Get")]),a._v(", "),e("code",[a._v("Scan")]),a._v(" or "),e("code",[a._v("History")]),a._v(" will not cause errors in such workloads.")]),a._v(" "),e("p",[a._v("If proofs are needed, KV entries that were previously added with metadata should\nbe re-added to the database after enabling immudb 1.1 compatibility mode.")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);