import { get } from '../../utils/ApiWrapper';

export const PHONES_TYPES = {
  GET_ALL: 'PHONES_GET_ALL',
  LOADING: 'PHONES_LOADING',
  LOADING_END: 'PHONES_LOADING_END',
  SET_PHONE: 'PHONES_SET_PHONE',
};

const loading = { type: PHONES_TYPES.LOADING };
const loadingEnd = { type: PHONES_TYPES.LOADING_END };

/**
 * Gets all phones
 */
export const getAllPhones = () => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(loading);
    get('phones')
      .then((response) => {
        const { data: phones } = response;

        dispatch({ type: PHONES_TYPES.GET_ALL, phones });
        resolve(phones);
        dispatch(loadingEnd);
      })
      .catch((error) => {
        // Not connected
        if (!error.code || 'Network Error' === error.message) {
          console.error('Error loading phones. No connection with backend');
        } else {
          console.error(`Error loading phones. Code: ${error.code}`);
        }
        reject(error);
        dispatch(loadingEnd);
      });
  });

export const setPhone = (phone) => (dispatch) => {
  dispatch({ type: PHONES_TYPES.SET_PHONE, phone });
};

/**
 * Get a phone by it's id
 * @param {*} id
 */
export const getPhoneData = (id) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch(loading);
    if (id) {
      const { phones } = getState().phone;

      if (phones && 0 < phones.length) {
        const phone = phones.find((phn) => phn.id === id);

        if (phone) {
          dispatch({ type: PHONES_TYPES.SET_PHONE, phone });
          resolve(phone);
        } else {
          console.error('No phone found with this id');
          reject(new Error('No phone found with this id'));
        }
      } else {
        console.error('No phones found.');
        reject(new Error('No phones found.'));
      }
    } else {
      console.error('Wrong parameters');
      reject(new Error('Wrong parameters'));
    }
    dispatch(loadingEnd);
  });
