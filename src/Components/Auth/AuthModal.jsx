import { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
function AuthModal({ handleCloseModal, login }) {
  const [LoginWindow, setLoginWindow] = useState(login ? login : true);
  return (
    <>
      {LoginWindow ? (
        <Login
          handleCloseModal={handleCloseModal}
          setLoginWindow={setLoginWindow}
        />
      ) : (
        <Signup
          handleCloseModal={handleCloseModal}
          setLoginWindow={setLoginWindow}
        />
      )}
    </>
  );
}

export default AuthModal;
