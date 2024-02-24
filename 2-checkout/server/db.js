const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT AUTO_INCREMENT, session_id VARCHAR(60) NULL, fullName VARCHAR(60) NULL, email VARCHAR(40) NULL, password VARCHAR(20) NULL, addyLine1 VARCHAR(200) NULL, addyLine2 VARCHAR(200) NULL, city VARCHAR(60) NULL, state VARCHAR(40) NULL, zip VARCHAR(10) NULL, phone VARCHAR(25) NULL, cc VARCHAR(30) NULL, exp VARCHAR(10) NULL, cvv VARCHAR(10) NULL, billZip VARCHAR(15) NULL, PRIMARY KEY(id))"
      )
  )
  .catch((err) => console.log(err));

//query to select all data for a user id
db.getData = (sessionId) => {
  console.log('get hit', sessionId)
  return db.queryAsync('SELECT * FROM responses WHERE session_id = ?', [sessionId])
}

//query to insert data for a user id
db.insertData = ({session_id, fullName, email, password}) => {
  console.log('hit insert db')
  return db.queryAsync('INSERT INTO responses (session_id, fullName, email, password) VALUES (?, ?, ?, ?)',[session_id, fullName, email, password])
}

//query to update data for a user id
db.updateContacts = ({addyLine1, addyLine2, city, state, zip, phone}, id) => {
  //want each key to be in set and each value to be in array
  return db.queryAsync(`UPDATE responses SET addyLine1 = ?, addyLine2 = ?, city = ?, state = ?, zip = ?, phone = ? WHERE session_id = '${id}'`, [addyLine1, addyLine2, city, state, zip, phone])
}
  /*
"cc": null,
"exp": null,
"cvv": null,
"billZip": null
*/
db.updateBilling = ({cc, exp, cvv, billZip}, id) => {
  return db.queryAsync(`UPDATE responses SET cc = ?, exp = ?, cvv = ?, billZip = ? WHERE session_id = '${id}'`, [cc, exp, cvv, billZip])
}

module.exports = db;
