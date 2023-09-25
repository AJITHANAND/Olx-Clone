import { useState, useContext } from "react";
import "./Signup.css";
import { FirebaseContext } from "../../Contexts/FirebaseContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { userCollection } from "../../firebase/constants";
import { addDoc } from "firebase/firestore";

export default function Signup({ handleCloseModal ,setLoginWindow}) {
  const { Firebase } = useContext(FirebaseContext);
  const auth = getAuth(Firebase);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleForm = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: user.username,
        });
        // .then(()=>alert('username added'))
        // .catch((error)=>console.log(error.message));

        const userData = {
          uid: userCredential.user.uid,
          username: user.username,
          phone: user.phone,
          liked: [],
        };
        addDoc(userCollection, userData)
          .then(() => {
            handleCloseModal();
          })
          .catch((error) => {
            alert(error.message);
            console.log(error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("Email Already in Use , Please login");
          setLoginWindow(true);
        } else if (error.code === "auth/invalid-email") {
          alert("Invalid Email");
        } else if (error.code === "auth/weak-password") {
          alert("Weak Password");
        } else {
          console.log(error);
        }
      });
  };
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <div className="login-centerDiv">
          <h3 className="log-Mail">
            <span>Enter your details to create Account</span>
          </h3>
          <input
            onChange={(e) => handleForm(e)}
            name="username"
            className="w-100"
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => handleForm(e)}
            name="phone"
            className="w-100 mt-1"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
          />
          <input
            onChange={(e) => handleForm(e)}
            name="email"
            className="w-100 mt-1"
            type="text"
            placeholder="Email"
          />

          <input
            onChange={(e) => handleForm(e)}
            name="password"
            className="w-100 mt-1"
            type="password"
            placeholder="password"
          />

          <button className="nextBtn  w-100 mt-2 nextEnabled">Signup</button>
          <div className="disclaimer  mt-1">
            <p>
              Your email is never shared with external parties nor do we use it
              to spam you in any way.<br/>
              Already have an account ? 
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setLoginWindow(true)}> click here</span>
                
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
