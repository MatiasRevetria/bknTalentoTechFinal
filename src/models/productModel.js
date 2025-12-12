import db from "../config/firebase.js";
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from "firebase/firestore";

const collectionName = "products";

const getAll = async () => {
    const productsSnapshot = await getDocs(collection(db, collectionName));
    return productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getById = async (id) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

const create = async (data) => {
    const docRef = await addDoc(collection(db, collectionName), data);
    return { id: docRef.id, ...data };
};

const remove = async (id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { id };
};

export default {
    getAll,
    getById,
    create,
    remove
};
