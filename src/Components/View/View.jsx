import  { useEffect, useState, useContext } from "react";
import "./View.css";
import { PostDetailsContext } from "../../Contexts/PostContext";
import { getDocs, query, where } from "firebase/firestore";
import { userCollection } from "../../firebase/constants";
import { useNavigate } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import UserIcon from "../../assets/icons/UserIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import LocationIcon from "../../assets/icons/LocationIcon"
function View() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostDetailsContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!postDetails || Object.keys(postDetails).length === 0) {
      navigate("/");
    } else {
      const uid = postDetails.userId;
      const q = query(userCollection, where("uid", "==", uid));
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
    }
  }, [postDetails,navigate]);
  return (
    <div className="viewParentDiv d-flex row m-auto">
      <div className="imageShowDiv col-12 col-md-7 m-auto">
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: postDetails.image,
              alt: "image",
            },
          ]}
        />
        <img loading="lazy" src={postDetails.image} alt="" onClick={() => setOpen(true)} />
      </div>
      <div className="rightSection col-12 col-md-4 m-auto">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span style={{fontWeight:"bold"}}>{postDetails.name}</span>
          <p>{postDetails.description}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p className="m-0" ><i><UserIcon width="30px" /></i> {postDetails.seller_name}</p>
          <p className="m-0" ><i> <PhoneIcon width="30px" /> </i> {userDetails && userDetails.phone}</p>
          <p className="m-0"><i> <LocationIcon width="30px"/></i>{postDetails.location}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
