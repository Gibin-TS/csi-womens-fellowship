import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";


async function getAllDocuments(collectionName) {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return documents;
  }
  
  // Get a document by ID
  async function getDocumentById(collectionName, documentId) {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  }
  
  // Create a new document
  async function createDocument(collectionName, data) {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    return { id: docRef.id, ...data };
  }
  
  // Update a document
  async function updateDocument(collectionName, documentId, data) {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, data);
    return { id: documentId, ...data };
  }
  
  // Delete a document
  async function deleteDocument(collectionName, documentId) {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    return true;
  }
  
  // Example usage:
  
  // Get all users
  getAllDocuments('users').then(users => {
    console.log('All users:', users);
  });
  
  // Get a user by ID
  getDocumentById('users', 'user123').then(user => {
    console.log('User:', user);
  });
  
  // Create a new user
  createDocument('users', { name: 'John Doe', email: 'john.doe@example.com' }).then(user => {
    console.log('New user:', user);
  });
  
  // Update a user
  updateDocument('users', 'user123', { name: 'Jane Doe' }).then(user => {
    console.log('Updated user:', user);
  });
  
  // Delete a user
  deleteDocument('users', 'user123').then(success => {
    console.log('User deleted:', success);
  });