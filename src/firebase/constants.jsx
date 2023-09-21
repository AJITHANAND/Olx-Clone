import {collection, getFirestore} from 'firebase/firestore';
import { Firebase } from './config';
import { getStorage } from 'firebase/storage';

export const db = getFirestore(Firebase);
export const userCollection = collection(db,'users');
export const productCollection = collection(db,'products');
export const locationsRef = collection(db, "locations");
export const storage = getStorage(Firebase);