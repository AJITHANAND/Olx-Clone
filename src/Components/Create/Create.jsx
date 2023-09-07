import React, { useState,  useContext, useRef, } from "react";
import "./Create.css";
import { categoriesContent } from "../../Constants/categories";
import BackArrow from "../../assets/BackArrow";
import { FirebaseContext } from "../../Contexts/FirebaseContext";
import { AuthContext } from "../../Contexts/User";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { productCollection } from "../../firebase/constants";
import { addDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom"
const Create = () => {
  const [category, SetCategory] = useState({});
  const { Firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const product = {
    name: useRef(""),
    description: useRef(""),
    brand: useRef(""),
    type: useRef(""),
    price: useRef(""),
    image: useRef(null),
  };
  const [err, setErr] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.match(/image\/(png|jpeg|jpg)/)) {
      e.target.value = null;
      setErr("Please select an image file");
    } else {
      setErr(null);
    }
  };

  const handleSubmit = (e) => {
    if (!user) {
      alert("Please login to your account");
      return;
    }
    console.log(product.image.current.value);
    const file = product.image.current.files[0];
    if (!file) {
      setErr("Please select an image file");
      return;
    }
    const storage = getStorage(Firebase);
    const metadata = {
      contentType: file.type,
    };
    const imageRef = ref(storage, `Product_images/${file.name}`);
    uploadBytes(imageRef, file, metadata)
      .then((response) => {
        // console.log("upload resp : " );
        // console.log(response);
        getDownloadURL(response.ref).then((downloadURL) => {
          const productData = {
            userId : user.uid,
            name: product.name.current.value,
            category: category.name,
            description: product.description.current.value,
            price: product.price.current.value,
            image: downloadURL,
            createdAt : new Date().toDateString()
          };
          if (product.brand.current.value) {
            productData.brand = product.brand.current.value;
          }
          if (product.type.current.value) {
            productData.type = product.type.current.value;
          }
          console.log(productData);
          
          addDoc(productCollection, productData)
            .then(() => {
              alert("Product successfully uploaded");
              navigate("/");
            })
            .catch((error) => {
              alert(error.message);
              console.log(error);
            });
        });
        // console.log("file uploaded successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container centerDiv border-0">
        <h1 className="font-weight-bold">POST YOUR AD</h1>
        {Object.keys(category).length === 0 && (
          <section>
            <div className="container">
              <table>
                <caption style={{ width: "max-content", captionSide: "top" }}>
                  CHOOSE A CATEGORY
                </caption>
                <tbody>
                  {categoriesContent.map((item, index) => (
                    <tr key={index} onClick={() => SetCategory(item)}>
                      <td className="p-2">
                        <i className="ml-3 mr-3">{item.icon}</i>
                        <span>{item.name}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
        {Object.keys(category).length !== 0 && (
          <section className="addProduct">
            <div className="container p-4">
              <div className="d-flex flex-row">
                <i className="mr-3" onClick={() => SetCategory({})}>
                  <BackArrow />
                </i>
                <h4>
                  <span>{category.name}</span>
                </h4>
              </div>
              <div className="form d-flex flex-column">
                <h5>INCLUDE SOME DETAILS</h5>
                {!user && (
                  <label className="text-danger">
                    Please Login to post your ad
                  </label>
                )}
                <label htmlFor="name">Name</label>
                <input
                  ref={product.name}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="true"
                  required={true}
                />

                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  placeholder="description of your product"
                  ref={product.description}
                ></textarea>

                {category.brand && (
                  <>
                    <label htmlFor="brand">Brand</label>
                    <select name="brand" id="brand" ref={product.brand}>
                      <option value="none">Other</option>
                      {category.brand.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </>
                )}
                {category.type && (
                  <>
                    <label htmlFor="brand">Type</label>
                    <select name="brand" id="brand" ref={product.type}>
                      <option value="none">Other</option>
                      {category.type.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </>
                )}
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  min="0"
                  placeholder="0.00"
                  className="price"
                  id="price"
                  name="price"
                  ref={product.price}
                />

                <label className="form-label" htmlFor="productImage">
                  Image
                </label>
                <input
                  ref={product.image}
                  className="form-control"
                  type="file"
                  name="productImage"
                  id="productImage"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {err && <p className="text-danger">{err}</p>}

                <input
                  onClick={handleSubmit}
                  type="submit"
                  value="POST"
                  className="btn btn-primary mt-2"
                  id="postAdBtn"
                  name="postAdBtn"
                />
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Create;
