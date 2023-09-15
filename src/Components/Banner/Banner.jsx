import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar d-flex align-items-center justify-content-center">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: Houses & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img
            // src="../../../Images/banner copy.png"
            src="../../../Images/banner.jpg"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
