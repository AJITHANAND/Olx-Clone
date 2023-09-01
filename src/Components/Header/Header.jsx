import React from "react";
import { useState } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import CloseButton from "../../assets/CloseButton";

import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components
import Login from "../Login/Login";
function Header() {
  const [showModal, setShowModal] = React.useState(false);

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

        <div className="loginPage" onClick={handleShowModal}>
          <span>Login</span>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      {/* Bootstrap Modal */}
      <Modal style={{width:'30dvw',marginLeft:'38%'}} show={showModal} onHide={handleCloseModal}>
        <Modal.Body style={{padding:'0.5rem'}}>
          <div className="d-flex justify-content-end align-items-center closeBtnDiv">
            <span data-aut-id="btnClose" onClick={handleCloseModal}>
              <CloseButton/>
            </span>
          </div>
          <div className="w-100 text-center">
            <OlxLogo />
          </div>

          <Login />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
