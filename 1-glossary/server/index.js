require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
//__dirname = /Users/toast/Desktop/HR_Sprints/rfp2401-practice-apps/1-glossary/server
//join ../client/dist
// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
//can now use Word and its methods
const {getAll, saveOne} = require("./db.js");
//get a post request with word and definition
app.post('/glossary', (req, res) => {
  var objToPost = req.body;
  saveOne(req.body)
  .then(() => {
    res.status(200).send('succesffully posted new word')
  })
  .catch((error) => {
    console.log(error,'create catch')
    res.status(500).send('create catch')
  })
})

app.get('/glossary', (req, res) => {
  getAll()
  .then((results) => {
    res.status(200).send(results)
  })
  .catch((error) => {
    console.log(error, 'gets find catch');
    res.status(500).send('couldnt find')
  })
})

app.patch('/glossary/',(req, res) => {

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
