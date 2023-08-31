import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Contexts/FirebaseContext';
import { createUserWithEmailAndPassword, getAuth,updateProfile } from 'firebase/auth';
import { userCollection } from '../../firebase/constants';
import { addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';




export default function Signup() {
  const {Firebase} = useContext(FirebaseContext);
  const auth = getAuth(Firebase);
  const navigate = useNavigate();

  const [user,setUser] = useState({
    'username':'',
    'email':'',
    'phone':'',
    'password':''
  });

  const handleForm = (e)=>{
    setUser(
      {
        ...user,
        [e.target.name]:e.target.value
      }
    )
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,user.email,user.password)
      .then((userCredential)=>{
        const userData =  {
          uid : userCredential.user.uid,
          username : user.username,
          phone : user.phone
        }
        console.log(userData);
        addDoc(userCollection,userData).then(
          ()=>{
            navigate('/login')
          }
        ).catch((error)=>{
          alert(error.message);
          console.log(error);
        });
      })
      .catch((error)=>{
        if (error.code === 'auth/email-already-in-use') {
          alert('Email Already in Use');
        }
        else if (error.code === 'auth/invalid-email') {
          alert('Invalid Email');
        }
        else if (error.code === 'auth/weak-password') {
          alert('Weak Password');
        }
        else{
          console.log(error)
        }
      })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={(e)=>formSubmit(e)}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            placeholder="John"
            onChange={(e)=>handleForm(e)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="john@mail.com"
            onChange={(e)=>handleForm(e)}

          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            placeholder="98 76 45 32 10"
            onChange={(e)=>handleForm(e)}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="Tough Password"
            onChange={(e)=>handleForm(e)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>navigate('/login')}>Already have an account?</a>
      </div>
    </div>
  );
}
