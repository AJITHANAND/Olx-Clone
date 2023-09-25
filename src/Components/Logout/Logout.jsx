import  { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FirebaseContext } from "../../Contexts/FirebaseContext";
import { AuthContext } from "../../Contexts/User";

function Logout() {
  const { Firebase } = useContext(FirebaseContext);
  const { setUser } = useContext(AuthContext);
  const auth = getAuth(Firebase);
  //   console.log('User from logout',user)
  const logout = () => {
    signOut(auth).then(() => {
      setUser(null);
    })
    .catch(
      // (err)=>console.log(err)
    );
  };
  return (
    <div>
      <span onClick={logout}>Logout</span>
    </div>
  );
}

export default Logout;
