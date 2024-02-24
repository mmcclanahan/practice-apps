import React from 'react'

const ConfirmPage = (props) => {
  const [purchase, setPurchase] = React.useState(false);
  console.log(props.userInfo)
  var obj = props.userInfo[0];
  const {fullName, email, password, addyLine1, addyLine2, city, state, zip, phone, cc, exp, cvv, billZip} = obj;


  return (
    <div>
      <div>{purchase ? <div> Thanks for your purchase </div> :
        <div>
          <div>Is This Information Correct?</div>
          <div>{`${obj.fullName} email ${obj.email} password ${obj.password} phone number ${obj.phone}`}</div>
          <div>{`address ${obj.addyLine1}\n ${obj.addyLine2}\n ${obj.city}, ${obj.state} ${obj.zip}`}</div>
          <div>{`Card Info ${obj.cc} \n ${obj.exp} ${obj.cvv}\n ${obj.billZip}`}</div>
          <button onClick={()=>{setPurchase(true)}}>Purchase</button>
        </div>
      }</div>
    </div>
  )
}

export default ConfirmPage;