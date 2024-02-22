require("dotenv").config();
const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
//the end of this path is your db name
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
// 2. Set up any schema and models needed by the app
const glossarySchema =  mongoose.Schema({
  word: { type: String, unique: true },
  definition: String
})
//model used to create new instances and save to glossary
//will create a words collection
var Word = mongoose.model('Word', glossarySchema);
// 3. Export the models
const getAll = () => {
  return Word.find({}).exec();
}
const saveOne = (obj) => {
  return Word.create(obj);
}
const deleteIt = (word) => {
  console.log(word,'in model')
  return Word.deleteOne(word);
}

module.exports.Word = Word;
module.exports.getAll = getAll;
module.exports.saveOne = saveOne;
module.exports.deleteIt = deleteIt;
// 4. Import the models into any modules that need them
