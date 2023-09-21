import {  doc, setDoc, getDoc,getDocs, query, where, deleteDoc } from "firebase/firestore";
import { db, locationsRef, productCollection, storage } from "./constants";
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

export async function getAllProducts(){
  const products = [];
  const querySnapshot = await getDocs(productCollection);
  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  })
  // console.log(products);
  return products;
}

export async function getProductsByUserID(userID) {
  const products = [];
  const Query  = query(productCollection, where("userId", "==", userID));

  const querySnapshot = await getDocs(Query);
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id,...doc.data()})
  });
  // console.log(products);
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
