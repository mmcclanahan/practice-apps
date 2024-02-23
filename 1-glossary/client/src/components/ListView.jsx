import React from 'react';
import EditPrompt from './EditPrompt.jsx'
const ListView = (props) => {
  //takes in props.wordObj
  const [wordObj, setWordObj] = React.useState(props.wordObj)
  const [edit, setEdit] = React.useState(false);
  console.log(edit)
  const editing = (state) => {
    if (state) {
      setEdit(false)
    } else {
      setEdit(true)
    }
  }


  return (
    <li>
      <span className='listWords'>{wordObj.word}</span>: {wordObj.definition}
      <button onClick={(event)=> {editing(edit)}}>edit</button>
      <button onClick={(event)=>{props.deleteWord(wordObj)}}>delete</button>
      <div>
        { edit ? <EditPrompt key={props.wordObj.definition} wordObj={wordObj} editing={editing} editEntry={props.editEntry} /> : null}
      </div>
    </li>
  )
}

export default ListView;