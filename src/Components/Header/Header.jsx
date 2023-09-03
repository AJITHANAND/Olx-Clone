import React, { useContext } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext } from "../../Contexts/User";
import Logout from "../Logout/Logout"
import Login from "../Login/Login";
import HeaderModal from "../Modal/Modal";

function Header() {
  const [showModal, setShowModal] = React.useState(false);
  const { user } = useContext(AuthContext);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
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
            <Logout/>
          </div>
        )}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      <HeaderModal showModal={showModal} handleCloseModal={handleCloseModal} contentComponent={<Login />} />
    </div>
  );
}

export default Header;
