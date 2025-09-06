import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer Mg.u6BmljHFv1G8zU16fWmGDQj5rhzklJQFJ5qoNPQqJB7W5hju29IO16YW3uaR',
  },
});
