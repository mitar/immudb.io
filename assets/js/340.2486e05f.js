(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{699:function(a,e,t){"use strict";t.r(e);var s=t(2),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"hot-backup-and-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hot-backup-and-restore"}},[a._v("#")]),a._v(" Hot backup and restore")]),a._v(" "),t("WrappedSection",[t("p",[a._v("Hot backup/restore feature allows to backup and restore immudb database without stopping immudb engine. Database remains accessible during backup process. It is possibly to perform full or incremental/differential backup and restore.")]),a._v(" "),t("p",[a._v("Both backup and restore functions can use streams or files as a source/destination.")]),a._v(" "),t("p",[a._v("Backup file is not compressed, assuming user may use any suitable method (see examples for bzip2 compression).")])]),a._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup"}},[a._v("#")]),a._v(" Backup")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-backup <database> [-o <file> [--append]] [--start-tx]\n")])])]),t("h3",{attrs:{id:"full-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-backup"}},[a._v("#")]),a._v(" Full backup")]),a._v(" "),t("p",[a._v("To run full database backup, execute "),t("code",[a._v("immuadmin hot-backup <database>")]),a._v(" command, specifying the optional backup file name with "),t("code",[a._v("-o")]),a._v(" options. If "),t("code",[a._v("-o")]),a._v(" option is not specified, output is sent to "),t("code",[a._v("stdout")]),a._v(".")]),a._v(" "),t("p",[a._v("If backup file is specified with "),t("code",[a._v("-o")]),a._v(" option, the file is created. If file already exists, backup process fails.")]),a._v(" "),t("h3",{attrs:{id:"incremental-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#incremental-backup"}},[a._v("#")]),a._v(" Incremental backup")]),a._v(" "),t("p",[a._v("When backup database up to the existing file, "),t("code",[a._v("immuadmin")]),a._v(" tools finds the last backed up database transaction in file, verifies its checksum and appends only database changes, made after this transaction. "),t("code",[a._v("immuadmin")]),a._v(" requires user to specify "),t("code",[a._v("--append")]),a._v(" command line option to append to existing file.")]),a._v(" "),t("p",[a._v("When backup up to the stream, "),t("code",[a._v("immuadmin")]),a._v(" doesn't have information about last backup up transaction, however user can specify the ID of the transaction to start from with "),t("code",[a._v("--start-tx")]),a._v(" command line option. It allows user to implement incremental/differential backup strategy, using streams.")])]),a._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restore"}},[a._v("#")]),a._v(" Restore")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-restore <database> [-i <file>] [--append] [--force] [--force-replica]\n")])])]),t("h3",{attrs:{id:"full-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-restore"}},[a._v("#")]),a._v(" Full restore")]),a._v(" "),t("p",[a._v("To run full restore, execute "),t("code",[a._v("immuadmin hot-restore <database>")]),a._v(" command, specifying the optional backup file name with "),t("code",[a._v("-o")]),a._v(" options. If "),t("code",[a._v("-o")]),a._v(" option is not specified, input data is read from "),t("code",[a._v("stdin")]),a._v(".")]),a._v(" "),t("p",[a._v("If database already exists, restore process fails.")]),a._v(" "),t("h3",{attrs:{id:"incremental-restore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#incremental-restore"}},[a._v("#")]),a._v(" Incremental restore")]),a._v(" "),t("p",[a._v("If database already exists, it is possible to append new data from backup file to the database. In this case user has to specify "),t("code",[a._v("--append")]),a._v(" flag.")]),a._v(" "),t("h4",{attrs:{id:"transaction-overlap-gap-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-overlap-gap-handling"}},[a._v("#")]),a._v(" Transaction overlap/gap handling")]),a._v(" "),t("p",[t("code",[a._v("immuadmin")]),a._v(" tries to verify that backup file and database where data are being restored to have the same origin. To do this "),t("code",[a._v("immuadmin")]),a._v(" finds the last transaction in source database and the same transaction in the backup file, and check transaction signatures. If transactions don't match, restore isn't possible.")]),a._v(" "),t("p",[a._v("When there is no overlap between transactions in database and file, transaction verification is not possible. However, if there is no gap between transactions, "),t("code",[a._v("immuadmin")]),a._v(" allows to bypass verification with "),t("code",[a._v("--force")]),a._v(" command line option. If there is a gap between last transaction in database and first transaction in file, restore isn't possible.")]),a._v(" "),t("h3",{attrs:{id:"transaction-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transaction-verification"}},[a._v("#")]),a._v(" Transaction verification")]),a._v(" "),t("p",[a._v("During restore process "),t("code",[a._v("immuadmin")]),a._v(" checks if checksum, reported by database after restoration of the transaction, matches the one stored in the file during backup process. It allows to detect backup file accidental or malicious corruption.")]),a._v(" "),t("h3",{attrs:{id:"replica-flag-handling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#replica-flag-handling"}},[a._v("#")]),a._v(" Replica flag handling")]),a._v(" "),t("p",[a._v("It is possible to restore data only to the replica database. During full restore database automatically created as replica (replica flag is switched off after restore), but for incremental restore "),t("code",[a._v("immuadmin")]),a._v(" assumes database is already in replica mode (user can use "),t("code",[a._v("immuadmin database update <database> --replication-enabled")]),a._v(" command to switch on replica mode).")]),a._v(" "),t("p",[a._v("However, it is possible to automatically switch on and off replica mode for incremental backup using "),t("code",[a._v("--force-replica")]),a._v(" command line option.")])]),a._v(" "),t("WrappedSection",[t("h3",{attrs:{id:"verifying-backup-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verifying-backup-file"}},[a._v("#")]),a._v(" Verifying backup file")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-restore --verify [-i <file>]\n")])])]),t("p",[a._v("It is possible to verify backup file/stream using "),t("code",[a._v("immuadmin hot-restore --verify")]),a._v(" command. It only checks the correctness of database file, e.g. file format and correct sequence of transactions in file. The only way to detect data corruption is to restore data.")])]),a._v(" "),t("WrappedSection",[t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("Full backup to file:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-backup foo -o foo.backup\nimmuadmin hot-backup foo > foo.backup\n")])])]),t("p",[a._v("Incremental backup to file:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-backup foo -o foo.backup --append\n")])])]),t("p",[a._v("Incremental backup with "),t("code",[a._v("bzip2")]),a._v(" compression:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-backup foo --start-tx 123 | bzip2 > foo.bz2\n")])])]),t("p",[a._v("Full restore")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-restore bar -i foo.backup\nimmuadmin hot-restore bar < foo.backup\n")])])]),t("p",[a._v("Full restore from "),t("code",[a._v("bzip2")]),a._v("-compressed file")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("bunzip2 foo.bz2 -c | immuadmin hot-restore bar\n")])])]),t("p",[a._v("Incremental restore with automatic switching of replica mode")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-restore bar -i foo.backup --append --force-replica\n")])])]),t("p",[a._v("Copy database:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("immuadmin hot-backup foo | immuadmin hot-restore bar\n")])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);