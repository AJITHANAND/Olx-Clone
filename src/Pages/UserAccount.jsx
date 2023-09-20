import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Account from "../Components/Account/Account"
import { useState,useEffect, useContext } from "react"
import { AuthContext } from "../Contexts/User";
function UserAccount() {
  const [isMobile ,setIsMobile] = useState(window.innerWidth <768);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    {isMobile? "": < Header />}
    < Account user={user} isMobile={isMobile} setIsMobile={setIsMobile}/>
    < Footer/>
    </>
  )
}

export default UserAccount