import React from 'react'

const Page2 = (props) => {

  /*

"addyLine1": null, aOne
"addyLine2": null, aTwo
"city": null,
"state": null,
"zip": null,
"phone": null,
*/
  return (
    <div>
      <h1>Shipping Info</h1>
      <input id='aOne' placeholder='Address line 1'></input>
      <input id='aTwo' placeholder='Address line 2'></input>
      <input id='city' placeholder='City'></input>
      <input id='state' placeholder='State'></input>
      <input id='zip' placeholder='Zip Code'></input>
      <input id='phone' placeholder='Phone Number'></input>
      <button onClick={()=>{props.toPage3()}}>NEXT</button>
    </div>
  )
}

export default Page2;