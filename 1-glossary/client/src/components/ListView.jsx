import React from 'react';

const ListView = (props) => {
  //takes in props.wordObj
  const [wordObj, setWordObj] = React.useState(props.wordObj)
  console.log(wordObj);


  return (
    <li>
      hi
    </li>
  )
}

export default ListView;