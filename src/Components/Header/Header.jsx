import { useContext, useEffect, useState } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../Contexts/User";
import Logout from "../Logout/Logout";
import HeaderModal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Contexts/SearchContext";
import { categoriesContent } from "../../Constants/categories";
import CloseButton from "../../assets/CloseButton";
import { getLocations } from "../../firebase/db_functions";
import Select from "react-select";
import {
  hindi_param,
  url_base_path,
  url_host_path,
  url_main,
} from "../../Constants/translate";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";
import { avatar_icon } from "../../Constants/hosted_links";
import CameraIcon from "../../assets/icons/CameraIcon";
import Heart from "../../assets/Heart";
import QuestionIcon from "../../assets/icons/QuestionIcon";
import GlobeIcon from "../../assets/icons/GlobeIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import axios from "axios";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import AuthModal from "../Auth/AuthModal";
function Header() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const { setSearch } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState(false);
  const [terms, setTerms] = useState([]);
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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
  console.log(isMobile);
  useEffect(() => {
    const temp = categoriesContent.flatMap((category) => [
      category.name,
      ...(category.brand || []),
      ...(category.type || []),
    ]);
    setTerms(temp);
    getLocations()
      .then((locations) => setPlaces(locations))
      .catch(
        // (err)=>console.log(err)
      );
  }, []);
  useEffect(() => {
    setSuggestions(searchInput.length > 0);
  }, [searchInput]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const submitSearch = () => {
    setSearch(searchInput);
  };
  const handlePlaceChange = (selected) => {
    setSearch(selected.value);
  };
  const clearInput = () => {
    setSearchInput("");
    setSuggestions(false);
  };
  const customReactSelectStyle = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        console.log(response.data);
        setLocation(response.data.city);
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchLocation();
  }, []);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        {isMobile ? (
          <div className="d-flex w-100 flex-column">
            <div className="brandName  d-flex flex-row justify-content-between">
              <div className="header-left d-flex flex-row ">
                <div className="hamburger mr-2">
                  <button onClick={toggleMenu}>
                    {!menuOpen ? (
                      <HamburgerIcon width="30px" height="48px" />
                    ) : (
                      <CloseButton default_width="30px" default_height="48px" />
                    )}
                  </button>
                </div>

                <i onClick={() => navigate("/")}>
                  <OlxLogo></OlxLogo>
                </i>
              </div>

              <div className="location ">
                <p>{location}</p>
                <LocationIcon width="24px" />
              </div>
              {menuOpen && (
                <div className="mobile-menu">
                  <div className="welcome-user pt-1 pl-2">
                    <picture>
                      <img src={avatar_icon} alt="" />
                    </picture>
                    <div className="flex-column userText">
                      <p>Welcome {user ? user.displayName : "To OLX!"}</p>
                      <p className="fade-text">
                        Take charge of your buying and selling journey.
                      </p>
                    </div>
                  </div>
                  <div className="pl-3 pt-2 pb-1">
                    <div
                      className="sellMenuContent"
                      onClick={() => navigate("/post")}
                    >
                      <i className="pr-2">
                        <CameraIcon />
                      </i>
                      <span>Start selling</span>
                    </div>
                  </div>
                  <div className="pl-3 pt-2 pb-1">
                    <div
                      className="sellMenuContent"
                      onClick={() => navigate("/manage")}
                    >
                      <i className="pr-2">
                        <Heart />
                      </i>
                      <span>My Ads</span>
                    </div>
                  </div>
                  <div className="pl-3 pt-2 pb-1">
                    <div
                      className="sellMenuContent"
                      onClick={() =>
                        (window.location = "https://help.olx.in/hc/en-us")
                      }
                    >
                      <i className="pr-2">
                        <QuestionIcon />
                      </i>
                      <span>Help</span>
                    </div>
                  </div>
                  <div className="dropdown pl-3 pt-2 pb-1">
                    <i>
                      <GlobeIcon />
                    </i>
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Select language
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href={url_main}>
                        English
                      </a>
                      <a
                        className="dropdown-item"
                        href={`${
                          url_host_path +
                          ".translate.goog/" +
                          url_base_path +
                          "/?_x_tr_sl=auto&_x_tr_tl=" +
                          hindi_param +
                          "&_x_tr_hl=en-US&_x_tr_pto=wapp"
                        }`}
                      >
                        Hindi
                      </a>
                    </div>
                  </div>

                  <div className="loginButton">
                    {user ? (
                      <>
                        <Logout />
                      </>
                    ) : (
                      <span onClick={handleShowModal}>Login</span>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="w-100">
              <div
                className="w-100"
                style={{
                  background: "white",
                  width: "99%",
                  border: "2px solid var(--blackText)",
                  height: "40px",
                  borderRadius: "5px",
                }}
              >
                <i className="pl-1 pt-2" style={{ paddingTop: "5px" }}>
                  <Search width="8%" height="30px" color="rgba(0,47,52,1)" />
                </i>
                <input
                  style={{
                    border: "none",
                    height: "98%",
                    width: "89%",
                    marginTop: "1px",
                  }}
                  type="text"
                  name="productSearch"
                  id="productSearch"
                  placeholder="Find car, mobile phone and more..."
                  list="terms"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {suggestions && (
                  <datalist id="terms">
                    {terms.map((term) => (
                      <option key={term} value={term}></option>
                    ))}
                  </datalist>
                )}
                {searchInput.length > 0 && (
                  <button style={{ all: "unset" }} onClick={clearInput}>
                    <CloseButton default_width="15px" default_height="15px" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="brandName">
              <i onClick={() => navigate("/")}>
                <OlxLogo></OlxLogo>
              </i>
            </div>
            <div className="placeSearch">
              <Search></Search>
              <div className="w-100">
                <Select
                  styles={customReactSelectStyle}
                  onChange={handlePlaceChange}
                  placeholder="Search Places"
                  options={places}
                />
              </div>
            </div>
            <div className="productSearch">
              <div className="input">
                <input
                  type="text"
                  name="productSearch"
                  id="productSearch"
                  placeholder="Find car, mobile phone and more..."
                  list="terms"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                {suggestions && (
                  <datalist id="terms">
                    {terms.map((term) => (
                      <option key={term} value={term}></option>
                    ))}
                  </datalist>
                )}
                {searchInput.length > 0 && (
                  <button style={{ all: "unset" }} onClick={clearInput}>
                    <CloseButton default_width="15px" default_height="15px" />
                  </button>
                )}
              </div>
              <div
                className="searchAction"
                onClick={submitSearch}
                role="button"
              >
                <Search color="#ffffff"></Search>
              </div>
            </div>
            <div className="language">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  English
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href={url_main}>
                    English
                  </a>
                  <a
                    className="dropdown-item"
                    href={`${
                      url_host_path +
                      ".translate.goog/" +
                      url_base_path +
                      "/?_x_tr_sl=auto&_x_tr_tl=" +
                      hindi_param +
                      "&_x_tr_hl=en-US&_x_tr_pto=wapp"
                    }`}
                  >
                    Hindi
                  </a>
                </div>
              </div>
            </div>

            <div className="language">
              {user ? (
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Welcome {user.displayName}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" onClick={()=>navigate("/manage")}>
                     <i style={{marginRight:"5px"}}><Heart width="17px" /></i>My Ads
                    </a>
                    <a className="dropdown-item d-flex flex-row">
                      <i style={{marginRight:"5px"}}><LogoutIcon /> </i><Logout />
                    </a>
                  </div>
                </div>
              ) : (
                <span onClick={handleShowModal}>Login</span>
              )}
              <hr />
            </div>

            <div className="sellMenu">
              <SellButton></SellButton>
              <div
                className="sellMenuContent"
                onClick={() => navigate("/post")}
              >
                <i>
                  <SellButtonPlus></SellButtonPlus>
                </i>
                <span>SELL</span>
              </div>
            </div>
          </>
        )}
      </div>
      <HeaderModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        contentComponent={(handleCloseModal) => (
          <AuthModal handleCloseModal={handleCloseModal} login={true} />
          // <Login handleCloseModal={handleCloseModal} />
          // < Signup handleCloseModal={handleCloseModal} />
        )}
      />
    </div>
  );
}

export default Header;
