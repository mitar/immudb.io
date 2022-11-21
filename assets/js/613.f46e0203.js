(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{971:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-tables"}},[t._v("#")]),t._v(" Creating tables")]),t._v(" "),a("WrappedSection",[a("p",[t._v("Common examples of "),a("code",[t._v("CREATE TABLE")]),t._v(" statements are presented below.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" customers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customer_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    email         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    address       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    city          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ip            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    country       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    active        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOLEAN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" products "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    product     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    price       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    created_at  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" orders "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    customerid  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    productid   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    created_at  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" id\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" customer_review"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    customerid  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    productid   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    review      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    created_at  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIMESTAMP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customerid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" productid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"if-not-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-not-exists"}},[t._v("#")]),t._v(" IF NOT EXISTS")]),t._v(" "),a("p",[t._v("With this clause the "),a("code",[t._v("CREATE TABLE")]),t._v(" statement will not fail if a table with same name already exists.")]),t._v(" "),a("p",[t._v("Note: If the table already exists, it is not compared against the provided table definition neither it is\nupdated to match it.")])]),t._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"not-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-null"}},[t._v("#")]),t._v(" NOT NULL")]),t._v(" "),a("p",[t._v("Columns marked as not null can not have a null value assigned.")])]),t._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"primary-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#primary-key"}},[t._v("#")]),t._v(" PRIMARY KEY")]),t._v(" "),a("p",[t._v("Every table in immudb must have a primary key.\nPrimary key can use at least 1 and up to 8 columns.")]),t._v(" "),a("p",[t._v("Columns used in a primary key can not have "),a("code",[t._v("NULL")]),t._v(" values assigned,\neven if those columns are not explicitly marked as "),a("code",[t._v("NOT NULL")]),t._v(".")]),t._v(" "),a("p",[t._v("Primary key creates an implicit unique index on all contained columns.")])]),t._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"auto-increment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-increment"}},[t._v("#")]),t._v(" AUTO_INCREMENT")]),t._v(" "),a("p",[t._v("A single-column "),a("code",[t._v("PRIMARY KEY")]),t._v(" can be marked as "),a("code",[t._v("AUTO_INCREMENT")]),t._v(".\nimmudb will automatically set a unique value of this column for new rows.")]),t._v(" "),a("p",[t._v("When inserting data into a table with an "),a("code",[t._v("INSERT")]),t._v(" statement,\nthe value for such primary key must be omitted.\nWhen updating data in such table with "),a("code",[t._v("UPSERT")]),t._v(" statement,\nthe value for such primary key is obligatory\nand the "),a("code",[t._v("UPSERT")]),t._v(" statement can only update existing rows.")]),t._v(" "),a("p",[t._v("The type of an "),a("code",[t._v("AUTO_INCREMENT")]),t._v(" column must be "),a("code",[t._v("INTEGER")]),t._v(".\nInternally immudb will assign sequentially increasing values for new rows\nensuring this value is unique within a single table.")])]),t._v(" "),a("WrappedSection",[a("h3",{attrs:{id:"foreign-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreign-keys"}},[t._v("#")]),t._v(" Foreign keys")]),t._v(" "),a("p",[t._v("Explicit support for relations to foreign tables is not currently supported in immudb.\nIt is possible however to create ordinary columns containing foreign key values that can be used in "),a("code",[t._v("JOIN")]),t._v(" statements.\nApplication logic is responsible for ensuring data consistency and foreign key constraints.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" orders\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" customers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" customers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customerid\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" products "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("productid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);