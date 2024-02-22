import React from 'react';

const ListView = (props) => {
  //takes in props.wordObj
  const [wordObj, setWordObj] = React.useState(props.wordObj)

  return (
    <li>
      <span className='listWords'>{wordObj.word}</span>: {wordObj.definition}
      <button>edit</button><button>delete</button>
    </li>
  )
}

export default ListView;