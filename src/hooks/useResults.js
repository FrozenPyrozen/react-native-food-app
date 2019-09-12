import { useState, useEffect } from 'react';
import api from '../services/api';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async term => {
    try {
      const res = await api.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      setResults(res.data.businesses);
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return [results, error, searchApi];
};
