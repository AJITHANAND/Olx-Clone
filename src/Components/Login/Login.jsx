import { useEffect, useState,useContext } from "react";
import React from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  {FirebaseContext} from "../../Contexts/FirebaseContext"
function Login({handleCloseModal}) {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [login,setLogin] = useState(false);
  const mailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const {Firebase} = useContext(FirebaseContext)
  const auth = getAuth(Firebase);
  

  const handleForm = (e)=>{
    setCred({...cred,[e.target.name]:e.target.value})
  }
  useEffect(() => {
    if (cred.email.match(mailRegEx)) {
      setLogin(true);
    }else{
      setLogin(false);
    }
  }
  ,[cred])
  const signIn = ()=>{
    signInWithEmailAndPassword(auth,cred.email,cred.password)
    .then((userCredential)=>{
        handleCloseModal();
    })
  };


  return (
    <div>
      <div className="centerDiv">
        <h3 className="log-Mail">
          <span>Enter your email to login</span>
        </h3>
        <input onChange={(e)=>handleForm(e)} name="email" className="w-100" type="text" placeholder="Email" />
        {login &&  <input onChange={(e)=>handleForm(e)} name="password" className="w-100 mt-1" type="text" placeholder="password" />} 

        <div className="info mt-2">
          <p>
            If you are a new user please select any other login option from
            previous page.
          </p>
        </div>

        <button onClick={signIn}   className= {`nextBtn  w-100 mt-2 ${!login? "nextDisabled":"nextEnabled"}` } disabled={!login} >Login</button>
        <div className="disclaimer  mt-1">
          <p>
            Your email is never shared with external parties nor do we use it to
            spam you in any way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
