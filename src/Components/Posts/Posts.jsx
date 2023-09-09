import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import Heart from "../../assets/Heart";
import "./Post.css";
import { productCollection } from "../../firebase/constants";
import { PostDetailsContext } from "../../Contexts/PostContext";
function Posts() {
  const [products, setProducts] = useState([]);
  const { postDetails, setPostDetails } = useContext(PostDetailsContext);
  const navigate = useNavigate();
  useEffect(() => {
    getDocs(productCollection)
      .then((docs) => {
        const productsData = [];
        docs.forEach((doc) => {
          productsData.push(doc.data());
        });
        setProducts(productsData);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product, index) => (
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
                <img style={{aspectRatio:'auto'}} src={product.image} alt="" />
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
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
