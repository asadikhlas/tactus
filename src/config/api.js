import axios from 'axios';
import Path from './path';

const login = async (data) => {
  if (!data) throw new Error('please input data');
  const response = await axios.get(Path.LOGIN);

  return response;
};

export default {
  login
};
