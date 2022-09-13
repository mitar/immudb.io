(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{869:function(e,t,s){"use strict";s.r(t);var a=s(2),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"data-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-types"}},[e._v("#")]),e._v(" Data types")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Length constraints")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("INTEGER")]),e._v(" "),s("td",[e._v("Signed 64-bit integer value. Usually referred to as "),s("code",[e._v("BIGINT")]),e._v(" in other databases.")]),e._v(" "),s("td",[e._v("-")])]),e._v(" "),s("tr",[s("td",[e._v("BOOLEAN")]),e._v(" "),s("td",[e._v("A boolean value, either "),s("code",[e._v("TRUE")]),e._v(" or "),s("code",[e._v("FALSE")])]),e._v(" "),s("td",[e._v("-")])]),e._v(" "),s("tr",[s("td",[e._v("VARCHAR")]),e._v(" "),s("td",[e._v("UTF8-encoded text")]),e._v(" "),s("td",[e._v("Maximum number of bytes in the UTF-8 encoded representation of the string")])]),e._v(" "),s("tr",[s("td",[e._v("BLOB")]),e._v(" "),s("td",[e._v("sequence of bytes")]),e._v(" "),s("td",[e._v("Maximum number of bytes in the sequence")])]),e._v(" "),s("tr",[s("td",[e._v("TIMESTAMP")]),e._v(" "),s("td",[e._v("datetime value with microsecond precision")]),e._v(" "),s("td",[e._v("-")])])])]),e._v(" "),s("p",[s("br"),s("br")]),e._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"size-constraints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size-constraints"}},[e._v("#")]),e._v(" Size constraints")]),e._v(" "),s("p",[e._v("Size constraint is specified with a "),s("code",[e._v("[MAX_SIZE]")]),e._v(" suffix on the type,\ne.g. "),s("code",[e._v("BLOB[16]")]),e._v(" represents a sequence of up to 16 bytes.")])]),e._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"null-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-values"}},[e._v("#")]),e._v(" NULL values")]),e._v(" "),s("p",[s("code",[e._v("NULL")]),e._v(" values in immudb are not unique - two "),s("code",[e._v("NULL")]),e._v(" values are considered equal on comparisons.")])]),e._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"timestamp-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-values"}},[e._v("#")]),e._v(" Timestamp values")]),e._v(" "),s("p",[e._v("Timestamp values are internally stored as a 64-bit signed integer being a number of microseconds since the epoch time.\nThose values are not associated with any timezone, whenever a conversion is needed, it is considered to be in UTC.")])])],1)}),[],!1,null,null,null);t.default=v.exports}}]);