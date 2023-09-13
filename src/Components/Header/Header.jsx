import { useContext, useEffect, useState } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../Contexts/User";
import Logout from "../Logout/Logout";
import Login from "../Login/Login";
import HeaderModal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Contexts/SearchContext";
import { categoriesContent } from "../../Constants/categories";
import CloseButton from "../../assets/CloseButton";
import { getLocations } from "../../firebase/db_functions";
import Select from "react-select";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const { setSearch } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState(false);
  const [terms, setTerms] = useState([]);
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const temp = categoriesContent.flatMap((category) => [
      category.name,
      ...(category.brand || []),
      ...(category.type || []),
    ]);
    setTerms(temp);
    getLocations().then((locations) =>setPlaces(locations));
  }, []);
  useEffect(() => {
    setSuggestions(searchInput.length > 0);
  }, [searchInput]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const submitSearch = () => {
    setSearch(searchInput);
  };
  const handlePlaceChange = (selected)=>{
    setSearch(selected.value);
  }
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
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <i onClick={() => navigate("/")}>
            <OlxLogo></OlxLogo>
          </i>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <div className="w-100">
            <Select styles={customReactSelectStyle} onChange={handlePlaceChange} placeholder="Search Places" options={places} />
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
          <div className="searchAction" onClick={submitSearch} role="button">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>

        <div className="loginPage">
          {user ? (
            `Welcome ${user.displayName}`
          ) : (
            <span onClick={handleShowModal}>Login</span>
          )}
          <hr />
        </div>
        {user && (
          <div className="loginPage">
            <Logout />
          </div>
        )}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={() => navigate("/post")}>
            <i>
              <SellButtonPlus></SellButtonPlus>
            </i>
            <span>SELL</span>
          </div>
        </div>
      </div>
      <HeaderModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        contentComponent={(handleCloseModal) => (
          <Login handleCloseModal={handleCloseModal} />
        )}
      />
    </div>
  );
}

export default Header;
