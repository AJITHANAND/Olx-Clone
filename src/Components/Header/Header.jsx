import React, { useContext, useRef } from "react";
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

function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useContext(AuthContext);
  const {setSearch} = useContext(SearchContext);
  const searchTerm = useRef();
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navigate = useNavigate();
  const submitSearch =() =>{
    setSearch(searchTerm.current.value);
  }

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
          <input id="search" name="search" type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              name="productSearch"
              id="productSearch"
              placeholder="Find car,mobile phone and more..."
              ref={searchTerm}
            />
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
