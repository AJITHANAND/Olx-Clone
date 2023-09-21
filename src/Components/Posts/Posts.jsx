import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Heart from "../../assets/Heart";
import "./Post.css";
import { PostDetailsContext } from "../../Contexts/PostContext";
import { SearchContext } from "../../Contexts/SearchContext";
import { getAllProducts, toggleLikeProduct,fetchSearchResults } from "../../firebase/db_functions";
import { AuthContext } from "../../Contexts/User";

function Posts() {
  const [loadingDefault, setLoadingDefault] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const { search, setSearch } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostDetailsContext);
  const navigate = useNavigate();
  const [searchProduct, setSearchProduct] = useState([]);
  const {user} = useContext(AuthContext)
  useEffect(() => {
    getAllProducts(user)
      .then(
        (items) =>{
          setProducts(items);
          setLoadingDefault(false);
          console.log(items);
        })
      .catch(err=>console.log(err));
  }, [user]);

  useEffect(()=>{
  },[user])

  useEffect(() => {
    if (search) {
      setLoadingSearch(true);
      fetchSearchResults(search,user)
      .then((items) => {
        setSearchProduct(items);
        setLoadingSearch(false);
      })
      .catch((err) => console.log(err));
    }
  }, [search,user]);
  const like  = (id)=>{
    if (!user){
      alert('Please login first');
      return;
    }
    toggleLikeProduct(user.uid,id);
    setProducts(products.map((product)=>{ 
      if (product.id === id){
        product.liked = !product.liked;
      }
      return product;
    }))
    setSearchProduct(searchProduct.map((product)=>{
      if (product.id === id){
        product.liked = !product.liked;
      }
      return product;
    }))
  }
  
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
                    key={index}
                  >
                    <div className="favorite" onClick={()=>like(product.id)}>
                      <Heart {...product.liked && { filled: true }}></Heart>
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
                       src={product.image}
                       alt=""
                       />
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
                      style={{
                        aspectRatio: "auto",
                        width: "100%",
                        height: "10em",
                      }}
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
                  key={index}
                >
                  <div className="favorite" onClick={()=>like(product.id)}>
                    <Heart {...product.liked && { filled: true }}></Heart>
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
                       src={product.image}
                       alt=""
                       />
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
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
