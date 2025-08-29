import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.vJ6iXNjpZ1JctX6PdBPThWtTcsMqhDl4dIgYXfaYChHr8Ui8FlmcPOkccCjJ',
  },
});
