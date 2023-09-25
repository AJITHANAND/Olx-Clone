import { useState, useEffect, useContext } from "react";
import {
  delProduct,
  getProductsByUserID,
  getUserLikedProducts,
  toggleLikeProduct,
} from "../../firebase/db_functions";
import "./Account.css";
import BackArrow from "../../assets/BackArrow";
import { useNavigate } from "react-router-dom";
import { account_ads, account_fav } from "../../Constants/hosted_links";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import Heart from "../../assets/Heart";
import { PostDetailsContext } from "../../Contexts/PostContext";

function Account({ isMobile, user }) {
  const { setPostDetails } = useContext(PostDetailsContext);
  const [toggleWindow, setToggleWindow] = useState(true);
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const navigate = useNavigate();
  console.log(toggleWindow);

  useEffect(() => {
    if (user) {
      getUserLikedProducts(user.uid)
        .then((products) => setLikedProducts(products))
        .catch(() => {});
      getProductsByUserID(user.uid)
        .then((products) => setProducts(products))
        .catch(() => {
          setProducts([]);
        });
    }
  }, [user]);
  const deleteAds = (product) => {
    const status = window.confirm(
      "Are you sure you want to delete :" + product.name
    );
    if (status) {
      delProduct(product).then(() => {
        setProducts(products.filter((item) => item.id !== product.id));
      });
    }
  };

  const like = (id) => {
    if (!user) {
      alert("Please login first");
      return;
    }
    toggleLikeProduct(user.uid, id);
    setLikedProducts(likedProducts.filter((product) => product.id !== id));
  };

  return (
    <>
      {isMobile && (
        <div className="myAds-mobile-header">
          <section onClick={() => navigate("/")}>
            <BackArrow />
          </section>
          <p>My ADS</p>
        </div>
      )}

      <div>
        <div
          style={{ display: "block !important" }}
          className="container p-0 myPosts"
        >
          <div className="mobile-top">
            <div className="option-tab">
              <p
                role="button"
                style={{ cursor: "pointer" }}
                onClick={() => setToggleWindow(true)}
              >
                ADS
              </p>
              <p
                role="button"
                style={{ cursor: "pointer" }}
                onClick={() => setToggleWindow(false)}
              >
                FAVORITES
              </p>
            </div>
          </div>
          <div className="container myPosts-content">
            <div
              className={`cards ${
                products.length > 0 ? "" : "singleGrid"
              } grid`}
            >
              {user ? (
                toggleWindow === true ? (
                  <>
                    {products.length > 0 ? (
                      products.map((product, index) => (
                        <div className="card" key={index}>
                          <div
                            className="favorite"
                            onClick={() => deleteAds(product)}
                          >
                            {<DeleteIcon width={20} height={20} />}
                          </div>
                          <div
                            onClick={() => {
                              setPostDetails(product);
                              navigate("/view");
                            }}
                          >
                            <div className="image">
                              <img
                                loading="lazy"
                                style={{ aspectRatio: "auto" }}
                                src={product.image}
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p className="rate">&#x20B9; {product.price}</p>
                              <span className="kilometer">{product.name}</span>
                              <p className="name"> {product.description}</p>
                            </div>
                            <div className="date">
                              <span>{product.createdAt}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="row">
                          <div className="col-12">
                            <img
                              className="d-flex justify-content-center align-items-center"
                              src={account_ads}
                              alt="img"
                            />
                          </div>
                          <div className="col-12">
                            <p>You haven&apos;t listed anything yet</p>
                          </div>
                          <div className="col-12 ">
                            <button
                              className="btn"
                              onClick={() => navigate("/")}
                            >
                              Home
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {likedProducts.length > 0 ? (
                      likedProducts.map((product, index) => (
                        <div className="card" key={index}>
                          <div
                            className="favorite"
                            onClick={() => like(product.id)}
                          >
                            <Heart filled={true} />
                          </div>

                          <div
                            onClick={() => {
                              setPostDetails(product);
                              navigate("/view");
                            }}
                          >
                            <div className="image">
                              <img
                                loading="lazy"
                                style={{ aspectRatio: "auto" }}
                                src={product.image}
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p className="rate">&#x20B9; {product.price}</p>
                              <span className="kilometer">{product.name}</span>
                              <p className="name"> {product.description}</p>
                            </div>
                            <div className="date">
                              <span>{product.createdAt}</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="row">
                          <div className="col-12">
                            <img
                              className="d-flex justify-content-center align-items-center"
                              src={account_fav}
                              alt="img"
                            />
                          </div>
                          <div className="col-12">
                            <p>You haven&apos;t liked any ads yet</p>
                          </div>
                          <div className="col-12 ">
                            <button
                              className="btn"
                              onClick={() => navigate("/")}
                            >
                              Discover
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )
              ) : toggleWindow ? (
                <div className="row">
                  <div className="col-12">
                    <img
                      className="d-flex justify-content-center align-items-center"
                      src={account_ads}
                      alt="img"
                    />
                  </div>
                  <div className="col-12">
                    <p>Please login to see your ads.</p>
                  </div>
                  <div className="col-12 ">
                    <button className="btn" onClick={() => navigate("/")}>
                      Home
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-12">
                    <img
                      className="d-flex justify-content-center align-items-center"
                      src={account_fav}
                      alt="img"
                    />
                  </div>
                  <div className="col-12">
                    <p>You haven&apos;t liked any ads yet</p>
                  </div>
                  <div className="col-12 ">
                    <button className="btn" onClick={() => navigate("/")}>
                      Discover
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
