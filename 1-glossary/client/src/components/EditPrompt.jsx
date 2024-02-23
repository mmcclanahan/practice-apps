import React from 'react';

const EditPrompt = (props) => {


  return (
    <div>
      <input id='wordEdit' placeholder={props.wordObj.word}>{}</input>
      <input id='defEdit' placeholder={props.wordObj.definition}></input>
      <button onClick={(event) => { props.editing(true); props.editEntry(props.wordObj)}}>confirm edit</button>
    </div>
  )
}

export default EditPrompt;