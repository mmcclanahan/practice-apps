import React from 'react'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'
import ConfirmPage from './ConfirmPage.jsx'
import axios from 'axios'

const Home = () => {
  const [homeView, setHomeView] = React.useState(true);
  const [Page1View, setPage1View] = React.useState(false);
  const [Page2View, setPage2View] = React.useState(false);
  const [Page3View, setPage3View] = React.useState(false);
  const [confirmView, setConfirmView] = React.useState(false);
  const [id, setid] = React.useState(JSON.stringify(document.cookie).slice(6, JSON.stringify(document.cookie).length - 1));
  const [done, setDone] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState([]);

  //const [sessionid, setSessionId] = React.useState(JSON.stringify(document.cookie, undefined, "\t"))

//could have different pages render base on state status
//when click next it makes every state false except the next one
//after clicking the last next itll mkae all false and make homeview true
//use effect watches done state to then axios get and then render it.
/*
  React.useEffect(()=> {
    axios.get('/responses', {session_id: id})
    .then((result) => {
      console.log(result.data)
      setUserInfo(result.data)
    })
  }, [])
*/
  var properId = JSON.stringify(document.cookie).slice(6, JSON.stringify(document.cookie).length - 1);

  const checkout = () => {
    setHomeView(false);
    setPage1View(true);
  }

  const toPage2 = () => {
    var name = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;;
    var pass = document.getElementById('password').value;;
    console.log(name,email,pass,id, 'logs')
    //give input form to this request
    axios.post('/responses', {session_id: `${id}`, fullName: `${name}`, email: `${email}`, password: `${pass}`})
    .then(()=> {
      setPage1View(false);
      setPage2View(true);
    })
  }
/*

"addyLine1": null, aOne
"addyLine2": null, aTwo
"city": null,
"state": null,
"zip": null,
"phone": null,
*/
  const toPage3 = () => {
    var aOne = document.getElementById('aOne').value;
    var aTwo = document.getElementById('aTwo').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var phone = document.getElementById('phone').value;
    axios.put(`/responses/${id}`, {
      "addyLine1": `${aOne}`,
      "addyLine2": `${aTwo}`,
      "city": `${city}`,
      "state": `${state}`,
      "zip": `${zip}`,
      "phone": `${phone}`
    })
    .then(()=>{
      setPage2View(false);
      setPage3View(true);
    })
  }
  /*
"cc": null,
"exp": null,
"cvv": null,
"billZip": null
*/
  const toConfirmPage = () => {
    var cc = document.getElementById('cc').value;
    var exp = document.getElementById('exp').value;
    var cvv = document.getElementById('cvv').value;
    var billZip = document.getElementById('billZip').value;
    axios.put(`/responses/billing/${id}`, {
      'cc': `${cc}`,
      'exp': `${exp}`,
      'cvv': `${cvv}`,
      'billZip': `${billZip}`,
    })
    .then (() => {
      console.log('front end axios get')
      console.log(id, `${id}`, 'id then block')
      return axios.get(`/responses/${id}`, {session_id: `${id}`})
    })
    .then((result) => {
      console.log(result.data, 'then block data');
      setUserInfo([result.data]);
    })
    .then(()=> {
      setPage3View(false);
      setConfirmView(true);
    })
  }



  return (
    <div>
      {homeView ? <button onClick={() => {checkout()}}>Checkout</button> : null}
      {done ? <div>{userInfo}</div> : null}
    <div> {Page1View ? <Page1 toPage2={toPage2}/>: null} </div>
    <div>{Page2View ? <Page2 toPage3={toPage3}/>: null}</div>
    <div>{Page3View ? <Page3 toConfirmPage={toConfirmPage}/>: null}</div>
    <div>{confirmView ? <ConfirmPage userInfo={userInfo}/>: null}</div>
    </div>
  )
}

export default Home;
///<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>