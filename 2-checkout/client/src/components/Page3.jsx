import React from 'react'

const Page3 = (props) => {

    /*
"cc": null,
"exp": null,
"cvv": null,
"billZip": null
*/
  return (
    <div>
      <h1>Billing</h1>
      <input id='cc' placeholder='credit card number'></input>
      <input id='exp' placeholder='expiration date'></input>
      <input id='cvv' placeholder='cvv'></input>
      <input id='billZip' placeholder='billing zipcode'></input>
      <button onClick={()=>{props.toConfirmPage()}}>Next</button>
    </div>
  )
}

export default Page3;