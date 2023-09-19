import  { useState,useEffect } from "react";
import { getAllProducts } from "../../firebase/db_functions";
import "./Account.css";
import BackArrow from "../../assets/BackArrow";


function Account({isMobile,setIsMobile}) {
  const [loadingDefault, setLoadingDefault] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoadingDefault(true);
    getAllProducts().then(products =>setProducts(products));
    setLoadingDefault(false);
    console.log(isMobile)
  }, [isMobile]);


  return (
    <>
    {isMobile && (
      <div className="myAds-mobile-header">
          <BackArrow />
          <p>My ADS</p>
      </div>
    )}
    <div className="container ">
      <div className="myAds mobile-top">
        <div className="option-tab">
         <p>ADS</p>
        </div>
        <div >
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Account;
