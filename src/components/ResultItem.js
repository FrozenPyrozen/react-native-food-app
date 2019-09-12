import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ResultItem = ({ result }) => {
  const { name, image_url: image, rating, review_count } = result;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.rating}>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  rating: {
    color: 'gray',
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultItem;
