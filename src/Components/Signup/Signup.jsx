import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {

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
    console.log(user);
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
        <a>Login</a>
      </div>
    </div>
  );
}
