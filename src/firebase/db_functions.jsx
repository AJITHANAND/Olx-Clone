import { arrayRemove, arrayUnion } from 'firebase/firestore';
import {  doc, setDoc, getDoc,getDocs, query, where, deleteDoc, updateDoc } from "firebase/firestore";
import { db, locationsRef, productCollection, storage, userCollection } from "./constants";
import { v4 as uuidv4 } from 'uuid';
import { ref } from "firebase/storage";
import { deleteObject } from "firebase/storage";

export async function addLocation(location) {
  const docRef = doc(locationsRef, location);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, { name: location ,id:uuidv4() });
    console.log("Location added!");
  } else {
    console.log("Location already exists!");
  }
}

export async function getLocations() {
  const locations = [];
  const querySnapshot = await getDocs(locationsRef);
  querySnapshot.forEach((doc) => {
    locations.push( { value: doc.data().name, label: doc.data().name});
  });
  console.log(locations)
  return locations;
}

// export async function getAllProducts(){
//   const products = [];
//   const querySnapshot = await getDocs(productCollection);
//   querySnapshot.forEach((doc) => {
//     products.push({id: doc.id,...doc.data()})
//   })
//   // console.log(products);
//   return products;
// }

export async function getAllProducts(user){
  const products = [];
  let likedProducts = [];
  // If a user is logged in, fetch all liked products
  if (user) {
    likedProducts = await getLikedProducts(user.uid);
  }
  const querySnapshot = await getDocs(productCollection);
  querySnapshot.forEach((doc) => {
    let product = {id: doc.id,...doc.data()};
    // If a user is logged in, add the 'liked' field to the product
    if (user) {
      product.liked = likedProducts.includes(product.id);
    }
    products.push(product);
  })
  return products;
}


export async function getProductsByUserID(userID) {
  const products = [];
  const Query  = query(productCollection, where("userId", "==", userID));

  const querySnapshot = await getDocs(Query);
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id,...doc.data()})
  });
  console.log(products);
  return products;
}


export async function delProduct(product){
  console.log(product);
  const docRef = doc(db, productCollection.path, product.id);
  const imageRef = ref(storage,product.image);
  deleteObject(imageRef).then(() => {
    // console.log("Image successfully deleted!");
  }).catch(() => {
    // console.error("Error deleting image:", error);
    return false;
  });

  deleteDoc(docRef).then(() => { 
  //  console.log("Document successfully deleted!");
   return true;
 } ).catch(()=> {return false});
}


// export async function likeProduct(uid, productId) {
//   const userQuery = query(userCollection, where('uid', '==', uid));
//   const userSnap = await getDocs(userQuery);
//   const userDoc = userSnap.docs[0];

//   // Atomically add a new product to the "liked" array field.
//   await updateDoc(userDoc.ref, {
//     liked: arrayUnion(productId)
//   });
// }

// export async function unlikeProduct(uid, productId) {
//   const userQuery = query(userCollection, where('uid', '==', uid));
//   const userSnap = await getDocs(userQuery);
//   const userDoc = userSnap.docs[0];

//   // Atomically remove a product from the "liked" array field.
//   await updateDoc(userDoc.ref, {
//     liked: arrayRemove(productId)
//   });
// }


export async function toggleLikeProduct(uid, productId) {
  const userQuery = query(userCollection, where('uid', '==', uid));
  const userSnap = await getDocs(userQuery);
  const userDoc = userSnap.docs[0];

  if (userDoc.exists()) {
    const userData = userDoc.data();
    console.log(userData.liked);
    if (userData.liked.includes(productId)) {
      // If the product is already liked, unlike it
      console.log("Product already liked")
      await updateDoc(userDoc.ref, {
        liked: arrayRemove(productId)
      });
    } else {
      // If the product is not liked, like it
      await updateDoc(userDoc.ref, {
        liked: arrayUnion(productId)
      });
    }
  } else {
    console.log("No such user!");
  }
}



export async function getLikedProducts(uid) {
  const userQuery = query(userCollection, where('uid', '==', uid));
  const userSnap = await getDocs(userQuery);
  const userDoc = userSnap.docs[0];

  if (userDoc.exists()) {
    const userData = userDoc.data();
    return userData.liked;
  } else {
    console.log("No such user!");
    return [];
  }
}


export async function fetchSearchResults(search,user) {
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

  const snapshots = await Promise.all(promises);
  let results = [];
  let likedProducts = [];
  
  // If a user is logged in, fetch all liked products
  if (user) {
    likedProducts = await getLikedProducts(user.uid);
  }

  snapshots.forEach((snapshot) => {
    snapshot.forEach((doc) => {
      let product = {id: doc.id,...doc.data()};
      
      // If a user is logged in, add the 'liked' field to the product
      if (user) {
        product.liked = likedProducts.includes(product.id);
      }
      
      if (!results.some((existingDoc) => existingDoc.id === doc.id)) {
        results.push(product);
      }
    });
  });
  // console.log(results);
  return results;
}

export async function getUserLikedProducts(uid) {
  let promises = [];
  const likedProducts = await getLikedProducts(uid);
  likedProducts.forEach((productId) => {
    promises.push(getDoc(doc(productCollection, productId)));
  })
  const snapshots = await Promise.all(promises);

  let results = [];
  
  snapshots.forEach((snapshot) => {
    if (snapshot.exists()) {
      results.push({id: snapshot.id,...snapshot.data()});
    }
  })
  // console.log(results)
  return results;
}