import axios from 'axios';
import logger from './logService';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, err => {
  const expectedErr =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedErr) {
    logger.log(err);
    toast('An unexpected errorr occurred');
  }

  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
