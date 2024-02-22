import React from 'react'

const AddForm = (props) => {

//need an onClick function to take both inputs convert them to an object and post
//can use onChange set state take the states and do above
  //pass this function in from index.jsx



  return (
    <div>
        add a word and definition
        <input id='addWord' placeholder='word' type='text'></input>
        <input id='addDef' placeholder='definition' type='text'></input>
        <button onClick={(e) => {props.addWord()}}>Add</button>
    </div>
  )
}

export default AddForm;