(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{1008:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[s._v("#")]),s._v(" API")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("By default, Swagger UI is enabled and can be accessed at "),a("code",[s._v("http://localhost:8080/api/docs/")])])]),s._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[s._v("#")]),s._v(" Authentication")]),s._v(" "),a("p",[s._v("A session must be active in order for you to be able to access collection and document endpoints.")]),s._v(" "),a("h3",{attrs:{id:"open-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-session"}},[s._v("#")]),s._v(" Open session")]),s._v(" "),a("p",[s._v("In the following script, the default credentials are used to open a session in the defaultdb database.")]),s._v(" "),a("p",[s._v("A sessionID is assigned by immudb, and this value must be included in all subsequent requests.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sessionid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/authorization/session/open'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "username": "immudb", \n  "password":"immudb", \n  "database":"defaultdb"\n}\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -r .sessionID"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])])]),a("h3",{attrs:{id:"close-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close-session"}},[s._v("#")]),s._v(" Close session")]),s._v(" "),a("p",[s._v("Although immudb automatically closes inactive sessions, it is a good practice to explicitly close sessions when they are not needed anymore in order to free up resources immediately.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/authorization/session/close'")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v("\n")])])])]),s._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[s._v("#")]),s._v(" Collections")]),s._v(" "),a("p",[s._v("Collections allow you to store and manage related documents together, making it easier to search and retrieve relevant data.")]),s._v(" "),a("h3",{attrs:{id:"create-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-collection"}},[s._v("#")]),s._v(" Create collection")]),s._v(" "),a("p",[s._v("Any json object can be stored in a collection, but declared fields enable indexes to be created.")]),s._v(" "),a("p",[s._v("Here is the script that creates a collection with two fields of type "),a("code",[s._v("STRING")]),s._v(" and a non-unique index over one of them.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "fields": [\n    {"name": "name", "type": "STRING"},\n    {"name": "surname", "type": "STRING"}\n  ],\n  "indexes": [\n    {"fields": ["name"], "unique": "false"}\n  ]\n}\'')]),s._v("\n")])])]),a("p",[s._v("The available types of fields are:")]),s._v(" "),a("ul",[a("li",[s._v("STRING")]),s._v(" "),a("li",[s._v("INTEGER")]),s._v(" "),a("li",[s._v("BOOLEAN")]),s._v(" "),a("li",[s._v("DOUBLE")]),s._v(" "),a("li",[s._v("UUID")])]),s._v(" "),a("h3",{attrs:{id:"add-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-field"}},[s._v("#")]),s._v(" Add field")]),s._v(" "),a("p",[s._v("A new field can be added to an existing collection.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/field'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "field": {\n    "name": "active",\n    "type": "BOOLEAN"\n  }\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"remove-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-field"}},[s._v("#")]),s._v(" Remove field")]),s._v(" "),a("p",[s._v("An existing field can be deleted. Prior to removing the field, it is necessary to remove any associated indexes.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DELETE'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/field/active'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v("\n")])])]),a("h3",{attrs:{id:"delete-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-collection"}},[s._v("#")]),s._v(" Delete collection")]),s._v(" "),a("p",[s._v("It is possible to delete collections, and the physical removal of any declared index will be carried out. The raw data in the transaction commit log have not been altered, but this operation cannot be reversed.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DELETE'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v("\n")])])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("If you create lots of indexes, you may want to adjust default settings to reduce your memory footprint.")]),s._v(" "),a("p",[s._v("Indexing parameters, including cache-size, flush-thresholds, and max-active-snapshots, can be lowered as needed, but take into account more IO reads and writes, which may lead to poor indexing performance.")])]),s._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"indexes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexes"}},[s._v("#")]),s._v(" Indexes")]),s._v(" "),a("p",[s._v("Collections allow you to store and manage related documents together, making it easier to search and retrieve relevant data.")]),s._v(" "),a("h3",{attrs:{id:"create-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-index"}},[s._v("#")]),s._v(" Create index")]),s._v(" "),a("p",[s._v("It is possible to create indexes over the declared fields in the collection.")]),s._v(" "),a("p",[s._v("Creating non-unique indexes is possible at any time, while creating unique ones is only possible when no documents have been stored.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/index'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "fields": [\n    "surname"\n  ]\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"delete-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-index"}},[s._v("#")]),s._v(" Delete index")]),s._v(" "),a("p",[s._v("It is possible to delete collections, and the physical removal of any declared index will be carried out. The raw data in the transaction commit log have not been altered, but this operation cannot be reversed.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DELETE'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/index?fields=surname'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v("\n")])])])]),s._v(" "),a("WrappedSection",[a("h2",{attrs:{id:"documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documents"}},[s._v("#")]),s._v(" Documents")]),s._v(" "),a("p",[s._v("Collections allow you to store and manage related documents together, making it easier to search and retrieve relevant data.")]),s._v(" "),a("h3",{attrs:{id:"insert-document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-document"}},[s._v("#")]),s._v(" Insert document")]),s._v(" "),a("p",[s._v("Single or multiple documents can be inserted in a single request")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/documents'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "documents": [\n    {"name":"John", "surname":"Doe"},\n    {"name":"Jane", "surname":"Smith"}\n  ]\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"search-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-documents"}},[s._v("#")]),s._v(" Search documents")]),s._v(" "),a("p",[s._v("It is possible to delete collections, and the physical removal of any declared index will be carried out. The raw data in the transaction commit log have not been altered, but this operation cannot be reversed.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/documents/search'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "query": {\n    "expressions": [\n      {\n        "fieldComparisons": [\n          {\n            "field": "name",\n            "operator": "EQ",\n            "value": "John"\n          }\n        ]\n      }\n    ]\n  },\n  "page": 1,\n  "pageSize": 10\n}\'')]),s._v("\n")])])]),a("p",[s._v("The supported operators are:")]),s._v(" "),a("ul",[a("li",[s._v("EQ: equals to")]),s._v(" "),a("li",[s._v("NE: not equals to")]),s._v(" "),a("li",[s._v("LT: less than")]),s._v(" "),a("li",[s._v("LE: less than or equal to")]),s._v(" "),a("li",[s._v("GT: greater than")]),s._v(" "),a("li",[s._v("GE: greater than or equal to")]),s._v(" "),a("li",[s._v('LIKE: search using regular expressions, for example "value":"(doc)|(flick)" would allow searching for either values containing "doc" or "flick". The syntax of golang regexp is described in '),a("a",{attrs:{href:"https://github.com/google/re2/wiki/Syntax",target:"_blank",rel:"noopener noreferrer"}},[s._v("this GitHub repo"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h3",{attrs:{id:"replace-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-documents"}},[s._v("#")]),s._v(" Replace documents")]),s._v(" "),a("p",[s._v("A single or multiple documents can be atomically replaced.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PUT'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/documents/replace'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "query": {\n    "expressions": [\n      {\n        "fieldComparisons": [\n          {\n            "field": "_id",\n            "operator": "EQ",\n            "value": "6530f0fa000000000000001f86853b05"\n          }\n        ]\n      }\n    ],\n    "limit": 1\n  },\n  "document": {\n      "first_name": "John",\n      "last_name": "Doe",\n      "age": 40\n  }\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"delete-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-documents"}},[s._v("#")]),s._v(" Delete documents")]),s._v(" "),a("p",[s._v("Documents can be deleted. A document audit preserves document history and allows for retrieval of all revisions, even deleted ones.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/documents/delete'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "query": {\n    "expressions": [\n      {\n        "fieldComparisons": [\n          {\n            "field": "first_name",\n            "operator": "EQ",\n            "value": "John"\n          },\n          {\n            "field": "last_name",\n            "operator": "EQ",\n            "value": "Doe"\n          }\n        ]\n      }\n    ],\n    "limit": 1\n  }\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"count-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#count-documents"}},[s._v("#")]),s._v(" Count documents")]),s._v(" "),a("p",[s._v("It is possible to retrieve the number of documents meeting a given criteria by using the document count endpoint.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/documents/count'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "query": {\n    "expressions": [\n      {\n        "fieldComparisons": [\n          {\n            "field": "first_name",\n            "operator": "EQ",\n            "value": "Jane"\n          }\n        ]\n      }\n    ]\n  }\n}\'')]),s._v("\n")])])]),a("h3",{attrs:{id:"audit-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#audit-documents"}},[s._v("#")]),s._v(" Audit documents")]),s._v(" "),a("p",[s._v("Document revisions can be retrieved through a document audit. In auditing, all revisions are tracked and retrievable, even those that have been deleted.")]),s._v(" "),a("p",[s._v("In order to audit a document, it is necessary to know its unique identifier, which can be obtained by inserting or querying the document.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:8080/api/v2/collection/mycollection/document/6530f0fa000000000000001f86853b05/audit'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'accept: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sessionID: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sessionid")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Content-Type: application/json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{\n  "page": 1,\n  "pageSize": 10\n}\'')]),s._v("\n")])])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);