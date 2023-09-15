import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs, query, where } from "firebase/firestore";
import Heart from "../../assets/Heart";
import "./Post.css";
import { productCollection } from "../../firebase/constants";
import { PostDetailsContext } from "../../Contexts/PostContext";
import { SearchContext } from "../../Contexts/SearchContext";

function Posts() {
  const [loadingDefault, setLoadingDefault] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const { search, setSearch } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostDetailsContext);
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState([]);
  setSearch("Kannur");
  useEffect(() => {
    if (search) {
      setLoadingSearch(true);
      console.log(search);
      const fields = [
        "brand",
        "location",
        "name",
        "description",
        "price",
        "category",
      ];
      let promises = [];

      fields.forEach((field) => {
        const q = query(productCollection, where(field, "==", search));
        promises.push(getDocs(q));
      });

      Promise.all(promises)
        .then((snapshots) => {
          let results = [];
          snapshots.forEach((snapshot) => {
            snapshot.forEach((doc) => {
              if (!results.some((existingDoc) => existingDoc.id === doc.id)) {
                results.push(doc.data());
              }
            });
          });
          setSearchProduct(results);
          setLoadingSearch(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(searchProduct);
  }, [search]);

  useEffect(() => {
    getDocs(productCollection)
      .then((docs) => {
        const productsData = [];
        docs.forEach((doc) => {
          productsData.push(doc.data());
        });
        setProducts(productsData);
        setLoadingDefault(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="postParentDiv d-flex align-items-center justify-content-center flex-column">
      {search && (
        <div className="moreView ">
          <div className="heading">
            <span>{search} products</span>
            <span onClick={() => setSearch("")}>close</span>
          </div>
          <div className="cards grid">
            {loadingSearch
              ? [...Array(4)].map((_, index) => (
                  <div
                    className="card is-loading"
                    style={{
                      justifyContent: "start",
                      cursor: "not-allowed",
                    }}
                    key={index}
                  >
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img
                        // style={{
                        //   aspectRatio: "auto",
                        //   width: "100%",
                        //   height: "10em",
                        // }}
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p
                        style={{
                          height: "2em",
                          marginTop: "0.5em",
                        }}
                        className="rate"
                      ></p>
                      <span className="kilometer"></span>
                      <p
                        style={{
                          height: "2em",
                          marginTop: "0.5em",
                        }}
                        className="name"
                      ></p>
                    </div>
                    <div className="date">
                      <span></span>
                    </div>
                  </div>
                ))
              : searchProduct &&
                searchProduct.map((product, index) => (
                  <div
                    className="card"
                    onClick={() => {
                      setPostDetails(product);
                      navigate("/view");
                    }}
                    key={index}
                  >
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img
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
                ))}
          </div>
        </div>
      )}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards grid">
          {loadingDefault
            ? [...Array(4)].map((_, index) => (
                <div
                  className="card is-loading"
                  style={{
                    justifyContent: "start",
                    cursor: "not-allowed",
                  }}
                  key={index}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img
                      // style={{
                      //   aspectRatio: "auto",
                      //   width: "100%",
                      //   height: "10em",
                      // }}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <p
                      style={{
                        height: "2em",
                        marginTop: "0.5em",
                      }}
                      className="rate"
                    ></p>
                    <span className="kilometer"></span>
                    <p
                      style={{
                        height: "2em",
                        marginTop: "0.5em",
                      }}
                      className="name"
                    ></p>
                  </div>
                  <div className="date">
                    <span></span>
                  </div>
                </div>
              ))
            : products.map((product, index) => (
                <div
                  className="card p-2"
                  onClick={() => {
                    setPostDetails(product);
                    navigate("/view");
                  }}
                  key={index}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.name}</span>
                    <p className="name">{product.description}</p>
                  </div>
                  <div className="bottom d-flex flex-row justify-content-between">
                    <div className="date">
                      <span>{product.location}</span>
                    </div>
                    <div className="date">
                      <span>{product.createdAt}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
