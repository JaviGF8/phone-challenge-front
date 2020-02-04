import { PHONES_TYPES } from '../../actions/phones/phones';

const initialState = {
  loading: true,
  phone: {},
  phones: [],
};

const phones = (state = initialState, action) => {
  switch (action.type) {
    case PHONES_TYPES.SET_PHONE:
      return { ...state, phone: action.phone };
    case PHONES_TYPES.GET_ALL:
      return { ...state, phones: action.phones };
    case PHONES_TYPES.LOADING:
      return { ...state, loading: true };
    case PHONES_TYPES.LOADING_END:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default phones;
