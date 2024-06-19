import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { updateLaundry, deleteLaundry } from '../firebase/laundryApi';
import db from '../firebase';

const EditLaundryScreen = ({ navigation, route, dispatch }) => {
  const { laundryId,nameparam,statusparam } = route.params;
  const [name, setName] = useState(nameparam);
  const [status, setStatus] = useState(statusparam);
  const pricePerKg = 10000; // Harga per kilogram yang di-hardcode

  const handleUpdateLaundry = async () => {
    // Perform update operation to update laundry details in Firestore
  const totalPrice = parseFloat(status) * pricePerKg;
    try {
      const updatedLaundry = {
        name,
        status,
        pricePerKg,
        totalPrice,
      };
      await updateLaundry(laundryId, updatedLaundry); // Update laundry details in Firestore
      dispatch({ type: 'UPDATE_LAUNDRY', payload: { id: laundryId, ...updatedLaundry } });
      navigation.goBack(); // Navigate back after successful update
    } catch (error) {
      console.error('Error updating laundry: ', error);
      alert('Gagal memperbarui laundry. Silakan coba lagi.');
    }
  };

  const handleDeleteLaundry = async () => {
    // Perform delete operation to delete laundry from Firestore
    try {
      await deleteLaundry(laundryId); // Delete laundry from Firestore
      dispatch({ type: 'DELETE_LAUNDRY', payload: laundryId });
      navigation.goBack(); // Navigate back after successful delete
    } catch (error) {
      console.error('Error deleting laundry: ', error);
      // Handle error deleting laundry
      alert('Gagal menghapus laundry. Silakan coba lagi.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nama Customer</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama Customer"
        value={name}
        onChangeText={value => setName(value)}
      />
      <Text>Jumlah (Kg) *Harga Perkilo 10000</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Jumlah (Kg)"
        value={status}
        onChangeText={value => setStatus(value)}
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateLaundry}>
        <Text style={styles.buttonText}>Perbarui Laundry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteLaundry}>
        <Text style={styles.buttonText}>Hapus Laundry</Text>
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
  updateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default connect()(EditLaundryScreen);


