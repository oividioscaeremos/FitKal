import { combineReducers } from 'redux';

import auth from './auth/auth.reducer';
import depot from './depot/depot.reducer';
import ui from './ui/ui.reducer';

const rootReducer = combineReducers({
  auth,
  depot,
  ui,
});

export default rootReducer;
