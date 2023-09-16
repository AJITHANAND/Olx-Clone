import { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [isOpenPopular, setIsOpenPopular] = useState(false);
  const [isOpenTrending, setIsOpenTrending] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenOLX, setIsOpenOLX] = useState(false);
  const date = new Date();

  // Function to toggle the dropdowns
  const togglePopular = () => setIsOpenPopular((prev) => !prev);
  const toggleTrending = () => setIsOpenTrending((prev) => !prev);
  const toggleAbout = () => setIsOpenAbout((prev) => !prev);
  const toggleOLX = () => setIsOpenOLX((prev) => !prev);

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (!isMobile) {
        setIsOpenPopular(true);
        setIsOpenTrending(true);
        setIsOpenAbout(true);
        setIsOpenOLX(true);
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpenPopular(false);
        setIsOpenTrending(false);
        setIsOpenAbout(false);
        setIsOpenOLX(false);
      }else{
        setIsOpenPopular(true);
        setIsOpenTrending(true);
        setIsOpenAbout(true);
        setIsOpenOLX(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footerParentDiv">
      <div className="content d-flex flex-row justify-content-around align-items-center">
        <div className="section">
          <div className="heading" onClick={isMobile ? togglePopular : undefined}>
            <p className="mb-1">POPULAR LOCATIONS</p>
          </div>
          {isOpenPopular && (
            <div className="list">
              <ul>
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          )}
        </div>
        <div className="section">
          <div className="heading" onClick={isMobile ? toggleTrending : undefined}>
            <p className="mb-1">TRENDING LOCATIONS</p>
          </div>
          {isOpenTrending && (
            <div className="list">
              <ul>
                <li>Bhubaneshwar</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
              </ul>
            </div>
          )}
        </div>
        <div className="section">
          <div className="heading" onClick={isMobile ? toggleAbout : undefined}>
            <p className="mb-1">ABOUT US</p>
          </div>
          {isOpenAbout && (
            <div className="list">
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
              </ul>
            </div>
          )}
        </div>
        <div className="section">
          <div className="heading" onClick={isMobile ? toggleOLX : undefined}>
            <p className="mb-1">OLX</p>
          </div>
          {isOpenOLX && (
            <div className="list">
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
                <li>Vulnerability Disclosure Program</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-{date.getUTCFullYear()} OLX</p>
      </div>
    </div>
  );
}

export default Footer;
