import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { addLaundry } from '../firebase/laundryApi';

const AddLaundry = ({ navigation, dispatch }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const pricePerKg = 10000; // Harga per kilogram yang di-hardcode

  const handleAddLaundry = async () => {
    if (!name || !status) {
      alert('Mohon isi semua kolom');
      return;
    }

    const totalPrice = parseFloat(status) * pricePerKg;

    try {
      const newLaundry = {
        name,
        status,
        pricePerKg,
        totalPrice,
      };
      const docId = await addLaundry(newLaundry);
      dispatch({ type: 'ADD_LAUNDRY', payload: { id: docId, ...newLaundry } });
      navigation.goBack();
    } catch (error) {
      console.error('Error adding laundry: ', error);
      alert('Gagal menambahkan laundry. Silakan coba lagi.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nama Customer</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Customer"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text>Jumlah (Kg) *Harga Perkilo 10000</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Harga Perkilo 10000"
        value={status}
        onChangeText={text => setStatus(text)}

      />


      <TouchableOpacity style={styles.addButton} onPress={handleAddLaundry}>
        <Text style={styles.addButtonText}>Tambah Laundry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default connect()(AddLaundry);
