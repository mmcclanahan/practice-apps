import React from 'react'

const Page1 = (props) => {

  return (
    <div>
      <h1>Account Setup</h1>
      <input id='fullName' placeholder='First and Last Name'></input>
      <input id='email' placeholder='yourEmail@example.com'></input>
      <input id='password' placeholder='password'></input>
      <button onClick={()=>{props.toPage2()}}>NEXT</button>
    </div>
  )
}

export default Page1;