(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{783:function(e,t,a){"use strict";a.r(t);var n=a(2),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"altering-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#altering-tables"}},[e._v("#")]),e._v(" Altering tables")]),e._v(" "),a("WrappedSection",[a("p",[e._v("immudb supports limited table altering.\nThe supported operations are lightweight.\nThey do not require any changes to already written row data\nand there is no performance penalty on read/write operations\nin such altered tables.")])]),e._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"add-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-column"}},[e._v("#")]),e._v(" ADD COLUMN")]),e._v(" "),a("p",[e._v("A new column can be added to an existing table.\nSuch column must be nullable.\nFor rows that already existed in the table before the alter operation,\nthe value of the newly added column will be read as "),a("code",[e._v("NULL")]),e._v(".\nNew column can not be set as "),a("code",[e._v("AUTO_INCREMENT")]),e._v(" which is only allowed for the primary key.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" customers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ADD")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COLUMN")]),e._v(" created_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" customer_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" created_time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"rename-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rename-column"}},[e._v("#")]),e._v(" RENAME COLUMN")]),e._v(" "),a("p",[e._v("An existing column can be renamed.\nThe column with the new name must not exist in the table\nwhen performing the alter operation.\nIf the column was previously part of an index,\nsuch index will continue working with the new column name.\nRenaming a column does not change column's type.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TABLE")]),e._v(" customers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RENAME")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COLUMN")]),e._v(" created_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" customer_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" created_at\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);