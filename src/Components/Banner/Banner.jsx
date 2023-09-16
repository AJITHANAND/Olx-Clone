/* eslint-disable no-unused-vars */
import "./Banner.css";
import Arrow from "../../assets/Arrow";
import { useContext } from "react";
import { SearchContext } from "../../Contexts/SearchContext";
function Banner() {
  const { setSearch } = useContext(SearchContext);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar d-flex align-items-center justify-content-center">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            {/* <Arrow></Arrow>  */}
          </div>
          <div className="otherQuickOptions">
            <span onClick={(e) => setSearch(e.target.innerText)}>Cars</span>
            <span onClick={(e) => setSearch("Bikes")}>Motorcycles</span>
            <span onClick={(e) => setSearch("Mobiles")}>Mobile Phones</span>
            <span onClick={(e) => setSearch("For Sale: Houses & Apartments")}>
              For Sale: Houses & Apartments
            </span>
            <span onClick={(e) => setSearch("Bikes")}>Scooters</span>
            <span onClick={(e) => setSearch("Commercial & Other Vehicles")}>
              Commercial & Other Vehicles
            </span>
            <span onClick={(e) => setSearch("For Rent: Houses & Apartments")}>
              For Rent: Houses & Apartments
            </span>
          </div>
        </div>
        {!isMobile && (
          <div className="banner">
            <img
              // src="../../../Images/banner copy.png"
              src="https://raw.githubusercontent.com/AJITHANAND/Olx-Clone/deploy/static/images/banner.jpg"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Banner;
