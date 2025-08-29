import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.uVaQ-55JtqCdVIqma4LvQrWYXNcSVthmiwZvvc3H48NaLGpdjJK3A0IJ63bu',
  },
});
