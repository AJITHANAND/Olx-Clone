import { useState, useEffect } from "react";
import { getProductsByUserID } from "../../firebase/db_functions";
import "./Account.css";
import BackArrow from "../../assets/BackArrow";
import { useNavigate } from "react-router-dom";
import { account_ads } from "../../Constants/hosted_links";
import DeleteIcon from "../../assets/icons/DeleteIcon";

function Account({ isMobile, user }) {
  const [loadingDefault, setLoadingDefault] = useState(true);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const haveProduct = products.length > 0;
  console.log(user);

  useEffect(() => {
    if (user) {
      getProductsByUserID(user.uid).then((products) => setProducts(products));
    }
    setLoadingDefault(false);
  }, [user, setLoadingDefault]);

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

      <div className="container p-0 myAds">
        <div className="mobile-top">
          <div className="option-tab">
            <p>ADS</p>
            <p>Favourite</p>
          </div>
        </div>
        <div className="container ads-content">
          <div className="cards grid">
            {user ? (
              <>
                {Object.keys(products).length > 1000? (
                  products.map((product, index) => (
                    <div className="card" key={index}>
                      <div className="favorite">
                        {<DeleteIcon width={20} height={20} />}
                      </div>
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
                        <p>You haven't listed anything yet</p>
                      </div>
                      <div className="col-12 ">
                        <button className="btn" onClick={() => navigate("/")}>
                          Home
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
