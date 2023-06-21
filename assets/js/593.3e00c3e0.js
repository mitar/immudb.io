(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{953:function(a,e,s){"use strict";s.r(e);var t=s(2),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"cli-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-tools"}},[a._v("#")]),a._v(" CLI tools")]),a._v(" "),s("WrappedSection",[s("p",[a._v("Before any operations can be run by immuadmin or immuclient, it is necessary to authenticate against the running immudb server.")]),a._v(" "),s("p",[a._v("When immudb is first run, it is ready to use immediately with the default database and credentials:")]),a._v(" "),s("ul",[s("li",[a._v("Database name: defaultdb")]),a._v(" "),s("li",[a._v("User: immudb")]),a._v(" "),s("li",[a._v("Password: immudb")]),a._v(" "),s("li",[a._v("Address: 127.0.0.1")]),a._v(" "),s("li",[a._v("Port: 3322")])])]),a._v(" "),s("WrappedSection",[s("h2",{attrs:{id:"immuadmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuadmin"}},[a._v("#")]),a._v(" immuadmin")]),a._v(" "),s("p",[a._v("immuadmin is the admin client for immudb. It is used for a variety of tasks such as creating and updating databases and users. Creating backups, restoring from backups etc.")]),a._v(" "),s("p",[a._v("You may download the immuadmin binary from "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("the latest releases on Github"),s("OutboundLink")],1),a._v(". Once you have downloaded immuadmin, rename it to "),s("code",[a._v("immuadmin")]),a._v(", make sure to mark it as executable, then run it. The following example shows how to obtain v1.3.0 for Linux amd64:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/vchain-us/immudb/releases/download/v1.3.0/immuadmin-v1.3.0-linux-amd64\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" immuadmin-v1.3.0-linux-amd64 immuadmin\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x immuadmin\n")])])]),s("p",[a._v("Alternatively, you may "),s("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immuadmin",target:"_blank",rel:"noopener noreferrer"}},[a._v("pull immuadmin docker image from DockerHub"),s("OutboundLink")],1),a._v(" and run it in a ready-to-use container:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm --name immuadmin codenotary/immuadmin:latest status\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[a._v("#")]),a._v(" Basic operations")]),a._v(" "),s("p",[a._v("To get started we need to login to "),s("code",[a._v("immuadmin")]),a._v(" first. The "),s("code",[a._v("admin")]),a._v(" user is the similar to the "),s("code",[a._v("root")]),a._v(" user in MySQL etc.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuadmin login immudb\nPassword: immudb\n")])])]),s("p",[a._v("Once logged in we can create a new database using")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuadmin database create mydatabase\ndatabase "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'mydatabase'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("replica: false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" successfully created\n")])])]),s("p",[a._v("To switch to our newly created database")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient use mydatabase\nNow using mydatabase\n")])])]),s("p",[a._v("To create new user with read/write access to just created database")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuadmin user create user1 readwrite mydatabase\nChoose a password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" user1:\nConfirm password:\n")])])]),s("p",[a._v("For detailed description of immuadmin command arguments use help")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuadmin "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])])]),a._v(" "),s("WrappedSection",[s("h2",{attrs:{id:"immuclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#immuclient"}},[a._v("#")]),a._v(" immuclient")]),a._v(" "),s("p",[a._v("immuclient is used for interacting with databases, like reading, writing and querying for data or invoking SQL.")]),a._v(" "),s("p",[a._v("You may download the immuclient binary from "),s("a",{attrs:{href:"https://github.com/codenotary/immudb/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("the latest releases on Github"),s("OutboundLink")],1),a._v(". Once you have downloaded immuclient, rename it to "),s("code",[a._v("immuclient")]),a._v(", make sure to mark it as executable, then run it. The following example shows how to obtain v1.3.0 for Linux amd64:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/vchain-us/immudb/releases/download/v1.3.0/immuclient-v1.3.0-linux-amd64\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" immuclient-v1.3.0-linux-amd64 immuclient\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x immuclient\n")])])]),s("p",[a._v("Alternatively, you may "),s("a",{attrs:{href:"https://hub.docker.com/r/codenotary/immuclient",target:"_blank",rel:"noopener noreferrer"}},[a._v("pull immuclient docker image from DockerHub"),s("OutboundLink")],1),a._v(" and run it in a ready-to-use container:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run -it --rm --net "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" --name immuclient codenotary/immuclient:latest\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"basic-operations-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations-2"}},[a._v("#")]),a._v(" Basic operations")]),a._v(" "),s("p",[a._v("To display all available options and their description run:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("help")]),a._v("\n")])])]),s("p",[a._v("Running "),s("code",[a._v("login immudb")]),a._v(" from within immuclient will use the default database name and port. All you need to supply is the user and password:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient login immudb\nPassword: immudb\n")])])]),s("p",[a._v("While immudb supports "),s("code",[a._v("set")]),a._v(" and "),s("code",[a._v("get")]),a._v(" for key-value storing and retrieving, its immutability means that we can verify the integrity of the underlying Merkle tree. To do this, we use the "),s("code",[a._v("safeset")]),a._v(" and "),s("code",[a._v("safeget")]),a._v(" commands. Let's try setting a value of "),s("code",[a._v("100")]),a._v(" for the key "),s("code",[a._v("balance")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient safeset balance "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\ntx:             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nkey:            balance\nvalue:          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\nverified:       "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])])]),s("p",[a._v("Then, we can immediately overwrite the key "),s("code",[a._v("balance")]),a._v(" with a value of "),s("code",[a._v("9001")]),a._v(" instead:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient safeset balance "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v("\ntx:             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nkey:            balance\nvalue:          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v("\nverified:       "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])])]),s("p",[a._v("If we try to retrieve the current value of key "),s("code",[a._v("balance")]),a._v(", we should get "),s("code",[a._v("9001")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient safeget balance\ntx:             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nkey:            balance\nvalue:          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v("\nverified:       "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" \n")])])]),s("p",[a._v("Note that at each step so far, the "),s("code",[a._v("verified")]),a._v(" flag is set to true. This ensures that the Merkle tree remains consistent for each transaction.")]),a._v(" "),s("p",[a._v("We can show the history of transactions for key "),s("code",[a._v("balance")]),a._v(" using the "),s("code",[a._v("history")]),a._v(" command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" balance\ntx:             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nkey:            balance\nvalue:          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n\ntx:             "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nkey:            balance\nvalue:          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9001")]),a._v("\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"sql-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-operations"}},[a._v("#")]),a._v(" SQL operations")]),a._v(" "),s("p",[a._v("In addition to a key-value store, immudb supports the relational model (SQL). For example, to create a table:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CREATE TABLE people(id INTEGER, name VARCHAR, salary INTEGER, PRIMARY KEY id);"')]),a._v("\nUpdated rows: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),s("p",[a._v("To insert data, use "),s("code",[a._v("UPSERT")]),a._v(" (insert or update), which will add an entry, or overwrite it if already exists (based on the primary key):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"UPSERT INTO people(id, name, salary) VALUES (1, 'Joe', 10000);\"")]),a._v("\nUpdated rows: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"UPSERT INTO people(id, name, salary) VALUES (2, 'Bob', 30000);\"")]),a._v("\nUpdated rows: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("To query the data you can use the traditional "),s("code",[a._v("SELECT")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"SELECT id, name, salary FROM people;"')]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Joe"')]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Bob"')]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n")])])]),s("p",[a._v('If we upsert again on the primary key "1", the value for "Joe" will be overwritten:')]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"UPSERT INTO people(id, name, salary) VALUES (1, 'Joe', 20000);\"")]),a._v("\nUpdated rows: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n\n$ ./immuclient query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"SELECT id, name, salary FROM people;"')]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Joe"')]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Bob"')]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"time-travel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#time-travel"}},[a._v("#")]),a._v(" Time travel")]),a._v(" "),s("p",[a._v("immudb is a immutable database. History is always preserved. With immudb you can travel in time!")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"SELECT id, name, salary FROM people WHERE name='Joe';\"")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Joe"')]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n")])])]),s("p",[a._v("We can see the current transaction id using 'current':")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient current\ndatabase:       mydatabase\ntxID:           "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\nhash:           2986dfeb2d15e55d8189f08c2508318addabe9e773e0b6e329cf23b654cc22e7\n")])])]),s("p",[a._v("This is the transaction id we will be using for the subsequent queries.")]),a._v(" "),s("p",[a._v("Eg. before the update:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"SELECT id, name, salary FROM people BEFORE TX 5 WHERE name='Joe';\"")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Joe"')]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n")])])]),s("p",[a._v("or even before the first time insert (guess what, it is empty!):")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"SELECT id, name, salary FROM people BEFORE TX 1 WHERE name='Joe';\"")]),a._v("\n+------------------------+--------------------------+----------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLE SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+------------------------+--------------------------+----------------------------+\n+------------------------+--------------------------+----------------------------+\n")])])]),s("p",[a._v("You can even "),s("code",[a._v("TABLE")]),a._v(" a table with itself in the past. Imagine you want to see how people salary changed between two points in time:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient query "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"SELECT peoplenow.id, peoplenow.name, peoplethen.salary, peoplenow.salary FROM people BEFORE TX 5 AS peoplethen INNER JOIN people AS peoplenow ON peoplenow.id=peoplethen.id;"')]),a._v("\n+---------------------------+-----------------------------+--------------------------------+-------------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLENOW ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLENOW NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLETHEN SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("MYDATABASE PEOPLENOW SALARY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+---------------------------+-----------------------------+--------------------------------+-------------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Joe"')]),a._v("                       "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Bob"')]),a._v("                       "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                          "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+---------------------------+-----------------------------+--------------------------------+-------------------------------+\n")])])])]),a._v(" "),s("WrappedSection",[s("h3",{attrs:{id:"kv-data-revisions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kv-data-revisions"}},[a._v("#")]),a._v(" KV Data revisions")]),a._v(" "),s("p",[a._v("Whenever a new value is stored under given key, immudb saves a new revision of that data.\nRevision numbers start with 1 - the first value ever written to the database will have\na revision number 1, the second will have 2 and so on.")]),a._v(" "),s("p",[a._v("When reading a value from immudb, an explicit revision number can be specified.\nIf the provided number is greater than 0, a value for given revision is retrieved.\nIf the provided number is less than 0, the nth previous value is retrieved.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" key value1\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nkey:      key\nvalue:    value1\n\n$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" key value2\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nkey:      key\nvalue:    value2\n\n$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" key value3\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nkey:      key\nvalue:    value3\n\n$ ./immuclient get key@1  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Get the key at the first revision")]),a._v("\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nkey:      key\nvalue:    value1\n\n$ ./immuclient get key@-1  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Get the key at the previous revision")]),a._v("\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nkey:      key\nvalue:    value2\n")])])]),s("p",[a._v("The immuclient tool has also the possibility to restore a previous revision for given key.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient restore key@-2\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v("\nkey:      key\nvalue:    value1\n")])])]),s("h3",{attrs:{id:"querying-for-keys-containing-revision-separator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#querying-for-keys-containing-revision-separator"}},[a._v("#")]),a._v(" Querying for keys containing revision separator")]),a._v(" "),s("p",[a._v("In some cases, the key can already contain the "),s("code",[a._v("@")]),a._v(" character reserved for key separator.\nIn such case there are few options to read such key. The revision separator can be changed\nto any other string that is not part of the key. Also because immuclient will only scan\nthe last occurrence of the revision separator, an explicit 0th revision can be set to read\nthe current value behind such key.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./immuclient "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" some@email.address active\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nkey:      some@email.address\nvalue:    active\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Change the revision separator with environment variable")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("IMMUCLIENT_REVISION_SEPARATOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"###"')]),a._v(" ./immuclient get some@email.address\ntx:     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nkey:    some@email.address\nvalue:  active\nhash:   138033b5a89438758fdb3481ba0dc44816d550749f799223587cb30cd7eadf5a\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Disable / change the revision separator through command-line argument")]),a._v("\n$ ./immuclient get --revision-separator"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" some@email.address\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nkey:      some@email.address\nvalue:    active\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Always use the revision number, use 0 for the current value")]),a._v("\n$ ./immuclient get some@email.address@0\ntx:       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\nrev:      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nkey:      some@email.address\nvalue:    active\n")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);