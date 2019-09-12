import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer bBpZJpr-udN3eAM85rGvX3QE-IlAQoVsZsis0VvhoIzoBW1bAjr_ZHTRgAc3gNbiQLX4d5uPxG5S_Jb1HGKApZcWVuUF67UdzLX9k4OXDOBEOtVsHr_nCg6jRoV4XXYx',
  },
});
