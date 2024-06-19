import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchLaundries } from '../firebase/laundryApi';

const HomeScreen = ({ navigation, laundryList, dispatch }) => {

  useEffect(() => {
    fetchLaundriesFromFirebase();
  }, []);

  const fetchLaundriesFromFirebase = async () => {
    try {
      const laundries = await fetchLaundries(); // Panggil fungsi fetchLaundries dari Firebase
      dispatch({ type: 'SET_LAUNDRIES', payload: laundries }); // Dispatch aksi untuk menetapkan daftar laundry ke Redux store
    } catch (error) {
      console.error('Error fetching laundries: ', error);
    }
  };

   const formatRupiah = (number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(number);
    };

  const renderItem = ({ item }) => (
  <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('EditLaundry', {
            laundryId: item.id,
            nameparam: item.name,
            statusparam: item.status
        })}
      >
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.status}Kg</Text>
      <Text style={styles.itemText}>{formatRupiah(item.totalPrice)}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Laundry DEYO</Text>
      <Image
        source={{
          uri: 'https://amartha.com/_next/image/?url=https%3A%2F%2Faccess.amartha.com%2Fuploads%2Flaundry_kiloan_usaha_rumahan_yang_menguntungkan_fa3b6f8780.jpeg&w=1920&q=75.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Daftar Laundry</Text>
      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Nama</Text>
        <Text style={styles.listHeaderText}>Kilo</Text>
        <Text style={styles.listHeaderText}>Harga</Text>
      </View>
      <FlatList
        data={laundryList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddLaundry')}
      >
        <Text style={styles.addButtonText}>Tambah Laundry Baru</Text>
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#f8f8f8',
  },
  listHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
});

const mapStateToProps = (state) => ({
  laundryList: state.laundry.laundries, // Mengambil daftar laundry dari state Redux
});

export default connect(mapStateToProps)(HomeScreen);
