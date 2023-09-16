/* eslint-disable no-unused-vars */
import "./Banner.css";
import Arrow from "../../assets/Arrow";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
import { categoriesContent } from "../../Constants/categories";
function Banner() {
  const { setSearch } = useContext(SearchContext);

  const [isMobile,setIsMobile] = useState(window.innerWidth < 768);
  useEffect(()=>{
    const handleResize = () =>{
      if(window.innerWidth < 768){
        setIsMobile(true);
      }else{
        setIsMobile(false);
      }
    }
    window.addEventListener("resize",handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        {isMobile ? (
          <div className="menuBar">
            <div className="mobileBanner">
              <div className="mobileBannerHeading">
                <p>Browse Categories</p>
              </div>
              <div className="mobileBannerItems">
                {categoriesContent.map((category, index) => (
                  <div 
                  className="itemBox" 
                  key={index}
                  onClick={() => setSearch(category.name)}
                  >
                    <a >
                      <picture>
                        <img src={category.mobileIcon} alt="icon" />
                      </picture>
                    </a>
                    <p>{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="menuBar d-flex align-items-center justify-content-center">
              <div className="categoryMenu">
                <span>ALL CATEGORIES</span>
                {/* <Arrow></Arrow>  */}
              </div>
              <div className="otherQuickOptions">
                <span onClick={(e) => setSearch(e.target.innerText)}>Cars</span>
                <span onClick={(e) => setSearch("Bikes")}>Motorcycles</span>
                <span onClick={(e) => setSearch("Mobiles")}>Mobile Phones</span>
                <span
                  onClick={(e) => setSearch("For Sale: Houses & Apartments")}
                >
                  For Sale: Houses & Apartments
                </span>
                <span onClick={(e) => setSearch("Bikes")}>Scooters</span>
                <span onClick={(e) => setSearch("Commercial & Other Vehicles")}>
                  Commercial & Other Vehicles
                </span>
                <span
                  onClick={(e) => setSearch("For Rent: Houses & Apartments")}
                >
                  For Rent: Houses & Apartments
                </span>
              </div>
            </div>
            <div className="banner">
              <img
                // src="../../../Images/banner copy.png"
                src="https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/images/banner.jpg"
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Banner;
