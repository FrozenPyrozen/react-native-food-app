import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Searchbar from '../components/Searchbar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const [results, error, searchApi] = useResults();

  const filterResultsByPrice = price =>
    results.filter(result => result.price === price);

  return (
    <View>
      <Searchbar
        {...text}
        onTextChange={setText}
        onTextSubmit={() => searchApi(text)}
      />
      {error ? <Text style={styles.apiError}>{error}</Text> : null}
      <Text>We have found: {results.length} results.</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  apiError: {
    color: 'red',
  },
});

export default SearchScreen;
