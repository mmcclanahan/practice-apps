require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();


// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());


//want a get route to get a users data (based on s_id put it in body on front end)
app.get('/responses/:id', (req, res) => {
  //req.body.session_id
  console.log(req.params.id)
  //select db method
  db.getData(req.params.id)
  .then((results)=>{
    res.send(results[0][0]).status(200);
  })
})
//want a post for first page info name,password, email and session id put it in body on front end s_id)
app.post('/responses', (req, res) => {
  //req.body contains object with session_id, name, password, email keys
  //insert db method
  console.log(req.body)
  db.insertData(req.body)
  .then(() => {
    res.send('complete insert').status(200);
  })
  .catch((error) => {
    console.log(error);
    res.send('error post').status(500);
  })
})
//want a modulated put for second and third page for rest of info
app.put('/responses/:id', (req, res) => {
  //req.body contains update values(makesure keys match table)
  console.log(req.body,'app.put body')
  db.updateContacts(req.body, req.params.id)
  .then(() => {
    res.send('updated info').status(200)
  })
  .catch((error) => {
    console.log(error)
  })
})
app.put('/responses/billing/:id', (req, res) => {
  console.log(req.body, req.params.id, 'server put')
  db.updateBilling(req.body, req.params.id)
  .then(() => {
    res.status(200).send('updated billing')
  })
  .catch((error) => {
    console.log(error)
    res.status(500).send('error')
  })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
