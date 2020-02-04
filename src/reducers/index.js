import { combineReducers } from 'redux';

import phone from './phone/phone';

const rootReducer = combineReducers({
  phone,
});

export default rootReducer;
