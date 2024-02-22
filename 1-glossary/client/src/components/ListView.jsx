import React from 'react';

const ListView = (props) => {
  //takes in props.wordObj
  const [wordObj, setWordObj] = React.useState(props.wordObj)
  //when click on delete
    //onClick deleteWord function
  //it takes the word
    //
  //sends a delete request to server


  return (
    <li>
      <span className='listWords'>{wordObj.word}</span>: {wordObj.definition}
      <button>edit</button><button onClick={(event)=>{props.deleteWord(wordObj)}}>delete</button>
    </li>
  )
}

export default ListView;