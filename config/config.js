require("dotenv").config("");

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "caffiend",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  },
};

// const db = require('db')
// db.connect({
//   // host: process.env.DB_HOST,
//   // username: process.env.DB_USER,
//   password: process.env.DB_PASS

// })


// // set up mysql connection
// var mysql = require("mysql");
// require("dotenv").config();

// var connection;
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASS,
//         database: process.env.DB_DATABASE
//     });
// }

// // make the connection
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// // export the connection for our orm to use
// module.exports = connection;