import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.OqUSgIjKbgldp_DxUldARueMRlnm5i5NSR-AO8lksH_ej-33hL_6csO0Zp22',
  },
});
