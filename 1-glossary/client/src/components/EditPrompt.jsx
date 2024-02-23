import React from 'react';

const EditPrompt = (props) => {
  const [wordObj, setWordObj] = React.useState(props.wordObj)
  const [edit, setEdit] = React.useState(false);


  return (
    <div>
      <input id='wordEdit' placeholder={wordObj.word}>{}</input>
      <input id='defEdit' placeholder={wordObj.definition}></input>
      <button onClick={(event) => {props.editEntry(wordObj); props.editing(true)}}>confirm edit</button>
    </div>
  )
}

export default EditPrompt;