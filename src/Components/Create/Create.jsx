import React, { useState, useEffect,useRef } from "react";
import "./Create.css";
import { categoriesContent } from "../../Constants/categories";
import BackArrow from "../../assets/BackArrow";
const Create = () => {
  const [category, SetCategory] = useState(categoriesContent[0]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log(category);
  }, [category]);
  const [err,setErr] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(file && !file.type.match(/image\/(png|jpeg|jpg)/)){
      e.target.value = null;
      setErr("Please select an image file");
    }else{
      setErr(null);
    }
  }
  

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
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" autoComplete="true" />

                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                ></textarea>

                {category.brand && (
                  <>
                    <label htmlFor="brand">Brand</label>
                    <select name="brand" id="brand">
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
                    <select name="brand" id="brand">
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
                />

                <label className="form-label" htmlFor="productImage">
                  Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  name="productImage"
                  id="productImage"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {err && <p className="text-danger">{err}</p>}

                <input
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
