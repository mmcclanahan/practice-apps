import React from 'react'

const AddForm = (props) => {


  return (
    <div>
        <h6>add a word and definition</h6>
        <input id='addWord' placeholder='word' type='text'></input>
        <input id='addDef' placeholder='definition' type='text'></input>
        <button onClick={(e) => {props.addWord()}}>Add</button>
    </div>
  )
}

export default AddForm;