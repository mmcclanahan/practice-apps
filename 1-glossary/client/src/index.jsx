import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import ListView from './components/ListView.jsx'
import AddForm from './components/AddForm.jsx'
const App = () => {
  const [wordList, setWordList] = React.useState([])

  React.useEffect(()=>{
    axios.get('/glossary')
    .then((results) => {
      console.log(results.data);
      setWordList(results.data);
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
    })
  }

  const deleteWord = (wordObj) => {
    let word = wordObj.word;
    console.log(word);
    axios.delete('/glossary', wordObj)
  }

  return (
    <div>
      <h1>GLOSSARY</h1>
      <div>
        <AddForm addWord={addWord}/>
      </div>
      <div>
        search for words
        <input className='searchForm' placeholder='search'></input>
        <button>Search</button>
      </div>
      <div>
        <h3>Word List</h3>
        <ul>
          {wordList.map((wordObj) => (
            <ListView wordObj={wordObj} deleteWord={deleteWord} />
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
