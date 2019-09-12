import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import api from '../services/api';

const ItemScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const [result, setResult] = useState(null);

  const getResult = async id => {
    try {
      const res = await api.get(`/${id}`);
      setResult(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.name}>{result.name}</Text>
      <ScrollView>
        <FlatList
          data={result.photos}
          keyExtractor={photo => photo}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item }} />
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default ItemScreen;
