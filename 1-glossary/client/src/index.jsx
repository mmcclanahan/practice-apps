import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import ListView from './components/ListView.jsx'

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
    //forms them as an object { 'word': , 'definition: }
    //perform axios post with this body
    //then perform axios get
    //then setWordList with results.data
  };

  return (
    <div>
      <h1>GLOSSARY</h1>
      <div>
        add a word here
        <input className='addForm' placeholder='word'></input>
        <input className='addForm' placeholder='definition'></input>
        <button>Add</button>
      </div>
      <div>
        search for words
        <input className='searchForm' placeholder='search'></input>
        <button>Search</button>
      </div>
      <div>
        Word List
        <ul>
          {wordList.forEach((wordObj) => (
            <ListView wordObj={wordObj} />
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
