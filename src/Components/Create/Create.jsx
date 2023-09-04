import React from "react";
import "./Create.css";
import { categoriesContent } from "../../Constants/categories";
const Create = () => {
  return (
    <>
      <div className="container centerDiv border-0">
        <h1 className="font-weight-bold">POST YOUR AD</h1>
        <div className="container">
          <table>
            <thead>
            <caption style={{width:'max-content'}}>CHOOSE A CATEGORY</caption>
            </thead>
            <tbody>
              {categoriesContent.map((item, index) => (
                <tr>
                  <td key={index} className="p-2">
                    <i className="ml-3 mr-3">{item.icon}</i>
                    <span>{item.name}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Create;
