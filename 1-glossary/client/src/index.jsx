import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import ListView from './components/ListView.jsx'
import AddForm from './components/AddForm.jsx'
import SearchView from './components/SearchView.jsx'

const App = () => {
  const [wordList, setWordList] = React.useState([])
  const [searchList, setSearchList] = React.useState([]);
  const [search, setSearch] = React.useState(true);

  React.useEffect(()=>{
    axios.get('/glossary')
    .then((result) => {
      setWordList(result.data);
      setSearchList(result.data);
    })
  }, [])


  const addWord = () => {
    //takes in word and definition from inputs
    let w = document.getElementById('addWord').value;
    let d = document.getElementById('addDef').value;
    //perform axios post with this body
    axios.post('/glossary', {'word': w, 'definition': d})
    .then(() => {
      return axios.get('/glossary')
    })
    .then((result) => {
      setWordList(result.data)
      setSearchList(result.data)
    })
    document.getElementById('addWord').value = '';
    document.getElementById('addDef').value = '';
  }
  //fixed problem: last element on page was being removed from screen,
  //on refresh it reappered and correct one was gone
  //the problem was listview map needed unique keys
  const deleteWord = (wordObj) => {
    let word = wordObj.word;
    console.log(word);
    axios.delete(`/glossary/${word}`)
    .then(() => {
      return axios.get('/glossary')
    })
    .then((result) => {
      setWordList(result.data);
      setSearchList(result.data);
    });
  }

  const searchWord = () => {
    var word = document.getElementById('searchForm').value;
    //filter wordList store in variable
    if (word.length === 0) {
      setSearchList(wordList)
      setSearch(true);
    } else {
      var searchArray = wordList.filter((wordObj) => {
        //if word is included in wordObj.word
        return wordObj.word.toLowerCase().includes(word.toLowerCase());
      })
      //setSearchList to the array of filtered words
      setSearchList(searchArray);
      setSearch(false);
      document.getElementById('searchForm').value = '';
    }
  }


  return (
    <div>
      <h1>GLOSSARY</h1>
      <div>
        <AddForm addWord={addWord}/>
      </div>
        <SearchView searchWord={searchWord} search={search} searchList={searchList}/>
      <div>
        <h3>Word List</h3>
        <ul>
          {searchList.map((wordObj) => (
            <ListView key={wordObj.word} wordObj={wordObj} deleteWord={deleteWord} />
          ))}
        </ul>
      </div>
    </div>
  )
}
//
render(
  <App />,
  document.getElementById("root")
);
