import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector dan useDispatch untuk menggunakan state Redux
import { addService, setServices } from './reducers/laundryReducer'; // Import action yang sudah didefinisikan
import { db } from './config/config'
import { addDoc, collection, doc, updateDoc } from'firebase/firestore/lite'
//import firebase from 'firebase/app';
//import 'firebase/firestore';

const LaundryServicesComponent = () => {
  const [service, setService] = useState('');
  const services = useSelector(state => state.laundry.services); // Mengambil services dari state Redux
  const dispatch = useDispatch();
  const [dialog, setDialog] = useState(false)


  const fireStoreCollection = collection(db, 'tugasakhir')

  // Ambil data layanan dari Firestore saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = firebase.firestore();
        const snapshot = await db.collection('tugasakhir').get();
        const fetchedServices = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch(setServices(fetchedServices)); // Simpan data dari Firestore ke state Redux
      } catch (error) {
        console.error('Gagal mengambil data dari Firestore:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddService = async () => {
    try {
      const dataAdd = {service: service}

      await addDoc(fireStoreCollection, dataAdd)
        setDialog(true)
        setTimeout(() => {
            setDialog(false)
        }, 1000)
//      const db = firebase.firestore();
//      await db.collection('tugasakhir').add({ name: service });
//      console.log('Layanan berhasil ditambahkan');
        dispatch(addService({ id: Math.random().toString(), name: service })); // Tambahkan layanan baru ke state Redux
        setService('');
    } catch (error) {
      console.error('Gagal menambahkan layanan:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tambahkan layanan baru"
        value={service}
        onChangeText={value => setService(value)}
      />
      <Button title="Tambahkan" onPress={handleAddService} />
      <FlatList
        style={{ marginTop: 20 }}
        data={services}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  item: {
    marginBottom: 10,
    fontSize: 18,
  },
});

export default LaundryServicesComponent;