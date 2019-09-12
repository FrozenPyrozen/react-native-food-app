import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Searchbar = ({ text, onTextChange, onTextSubmit }) => {
  return (
    <View style={styles.searchBackground}>
      <MaterialIcons name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={onTextChange}
        onEndEditing={onTextSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBackground: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: 'row',
  },

  searchInput: {
    flex: 1,
    fontSize: 18,
  },

  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});

export default Searchbar;
