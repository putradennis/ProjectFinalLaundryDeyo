// components/LaundryForm.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addOrder } from '../actions/laundryActions';

const LaundryForm = () => {
  const dispatch = useDispatch();
  const [weight, setWeight] = useState('');
  const [serviceType, setServiceType] = useState('regular');

  const handleAddOrder = () => {
    const orderData = {
      weight: parseFloat(weight),
      serviceType,
      createdAt: new Date(),
    };

    dispatch(addOrder(orderData));
    setWeight('');
    setServiceType('regular');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Berat cucian (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={text => setWeight(text)}
      />
      <Button title="Tambah Pesanan" onPress={handleAddOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LaundryForm;
