import React, { useEffect, useState, useContext } from "react";
import "./View.css";
import { PostDetailsContext } from "../../Contexts/PostContext";
import { getDocs, query, where, doc } from "firebase/firestore";
import { userCollection } from "../../firebase/constants";
import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function View() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const { postDetails, setPostDetails } = useContext(PostDetailsContext);
  const [open,setOpen] = useState(false);
  useEffect(() => {
    if (!postDetails || Object.keys(postDetails).length === 0) {
      navigate(-1);
    } else {
      const uid = postDetails.userId;
      const q = query(userCollection, where("uid", "==", uid));
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
    }
  }, [postDetails]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <Lightbox
          open ={open}
          close={()=>setOpen(false)}
          slides={[
            {
              src: postDetails.image,
              alt: "image",
            },
          ]}
        />
        <img src={postDetails.image} alt="" onClick={()=>setOpen(true)} />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.description}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails && userDetails.username}</p>
          <p>{userDetails && userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
