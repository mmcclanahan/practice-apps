import React from 'react'
import EditPrompt from './EditPrompt.jsx'
const ListView = (props) => {

  const [edit, setEdit] = React.useState(false)

  const editing = (state) => {
    setEdit(!state);
  };


  return (
    <li>
      <span className='listWords'>{props.wordObj.word}</span>: {props.wordObj.definition}
      <button onClick={(event)=> {editing(edit)}}>edit</button>
      <button onClick={(event)=>{props.deleteWord(props.wordObj)}}>delete</button>
      <div>
        { edit ? <EditPrompt key={props.wordObj._id} wordObj={props.wordObj} editing={editing} editEntry={props.editEntry} /> : null}
      </div>
    </li>
  );
};


export default ListView;