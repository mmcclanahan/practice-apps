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
const {getAll, saveOne, deleteIt, updateOne} = require("./db.js");

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
    console.log(results,'results get')
    res.status(200).send(results)
  })
  .catch((error) => {
    console.log(error, 'gets find catch');
    res.status(500).send('couldnt find')
  })
})
//
app.put('/glossary/:_id',(req, res) => {
  //either do body or params
  var original = req.params;
  var edit = req.body;
  updateOne(original, edit)
  .then(() => {
    console.log('put complete')
    res.status(200).send('definition edited')
  })
  .catch((error) => {
    console.log(error)
    res.status(500).send('error in put')
  })
})

//axios sends an endpoint i need to catch it here modularly
app.delete('/glossary/:_id', (req, res) => {
  console.log(req.params, 'app.delete')
  deleteIt(req.params)
  .then(() => {
    console.log('hit deleteit')
    res.status(200).send('deleted word')
  })
  .catch((error) => {
    console.log('delete error')
    res.status(500).send('problem deleting word')
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
