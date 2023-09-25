import { useEffect, useState, useContext } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseContext } from "../../Contexts/FirebaseContext";
function Login({ handleCloseModal ,setLoginWindow}) {
  const [cred, setCred] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);
  const mailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const { Firebase } = useContext(FirebaseContext);
  const auth = getAuth(Firebase);
  const [err, stateErr] = useState({
    status: false,
    message: "",
  });
  const handleForm = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
    stateErr({ ...err, status: false });
  };
  useEffect(() => {
    if (cred.email.match(mailRegEx)) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [cred]);
  const signIn = () => {
    console.log(cred);
    signInWithEmailAndPassword(auth, cred.email, cred.password)
      .then(
        ()=>{
        // (userCredential) => {
        // console.log(userCredential);
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/user-not-found") {
          stateErr({ status: true, message: "User not registered" });
        } else if (error.code === "auth/wrong-password") {
          stateErr({ status: true, message: "Invalid password" });
        } else if (error.code === "auth/too-many-requests") {
          stateErr({
            status: true,
            message:
              "Too many login attempts.This account is temporarily suspended, please try again",
          });
        }
      });
  };

  return (
    <div>
      <div className="login-centerDiv">
        <h3 className="log-Mail">
          <span>Enter your email to login</span>
        </h3>
        <input
          onChange={(e) => handleForm(e)}
          name="email"
          className="w-100"
          type="text"
          placeholder="Email"
        />
        {login && (
          <input
            onChange={(e) => handleForm(e)}
            name="password"
            className="w-100 mt-1"
            type="password"
            placeholder="password"
          />
        )}

        <div className="info mt-2">
          <p>
            If you are a new user please select any other login option or 
            <span 
            style={{color:"blue", cursor:"pointer"}} 
            onClick={()=>setLoginWindow(false)}
            > click here</span>.
          </p>
        </div>
        {err.status && <div className="error">{err.message}</div>}
        <button
          onClick={signIn}
          className={`nextBtn  w-100 mt-2 ${
            !login ? "nextDisabled" : "nextEnabled"
          }`}
          disabled={!login}
        >
          Login
        </button>
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
