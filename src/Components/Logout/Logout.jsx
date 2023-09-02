import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FirebaseContext } from "../../Contexts/FirebaseContext";
import { AuthContext } from "../../Contexts/User";

function Logout() {
  const { Firebase } = useContext(FirebaseContext);
  const { user, setUser } = useContext(AuthContext);
  const auth = getAuth(Firebase);
  //   console.log('User from logout',user)
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  return (
    <div>
      <span onClick={logout}>Logout</span>
    </div>
  );
}

export default Logout;
