import axios from 'axios';

const GENERIC_ROUTE = 'http://localhost:5000/';

// export const get = async (url, params) => axios.get(GENERIC_ROUTE + url, params, { headers: {}, timeout: 120000 });
export const get = async (url, params) => axios.get(GENERIC_ROUTE + url, params);

export const post = async (url, params) => axios.post(GENERIC_ROUTE + url, params, { headers: {}, timeout: 120000 });

export const put = async (url, params) => axios.put(GENERIC_ROUTE + url, params, { headers: {}, timeout: 120000 });

export const remove = async (url, params) =>
  axios.delete(GENERIC_ROUTE + url, params, { headers: {}, timeout: 120000 });
