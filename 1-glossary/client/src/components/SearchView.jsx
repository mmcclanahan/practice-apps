import React from 'react';

const SearchView = (props) => {
  console.log(props.search)
  return (
    <div>
      <h6>search for words</h6>
      <input id='searchForm' placeholder='search'></input>
      <button onClick={ ()=> { props.searchWord() } }>{props.search ? 'search' : 'back'}</button>
    </div>
  )
}

export default SearchView;