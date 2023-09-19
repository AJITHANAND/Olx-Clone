import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Account from "../Components/Account/Account"
import { useState,useEffect } from "react"
function UserAccount() {
  const [isMobile ,setIsMobile] = useState(window.innerWidth <768);
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
    < Account isMobile={isMobile} setIsMobile={setIsMobile}/>
    < Footer/>
    </>
  )
}

export default UserAccount