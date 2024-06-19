import { db } from '../firebase';
import { collection,addDoc,getDocs,updateDoc,doc,deleteDoc } from 'firebase/firestore/lite';

const laundriesCollection = collection(db, 'laundrytugas');

export const fetchLaundries = async () => {
  try {
    const querySnapshot = await getDocs(laundriesCollection);

    const laundries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return laundries;
  } catch (error) {
    console.error('Error fetching laundries: ', error);
    throw error;
  }
};

export const addLaundry = async (newLaundry) => {
  try {
    const docRef = await addDoc(laundriesCollection, newLaundry);

    return docRef.id;
  } catch (error) {
    console.error('Error adding laundry: ', error);
    throw error;
  }
};

export const updateLaundry = async (laundryId, updatedData) => {
  try {
    const laundryDocRef = doc(laundriesCollection, laundryId); // Mendapatkan referensi dokumen laundry berdasarkan ID
    await updateDoc(laundryDocRef, updatedData); // Melakukan update data dokumen

    console.log('Laundry successfully updated!');
  } catch (error) {
    console.error('Error updating laundry: ', error);
    throw error;
  }
};

export const deleteLaundry = async (laundryId) => {
  try {
    const laundryDocRef = doc(laundriesCollection, laundryId);
    await deleteDoc(laundryDocRef);

    console.log('Laundry successfully deleted!');
  } catch (error) {
    console.error('Error deleting laundry: ', error);
    throw error;
  }
};
