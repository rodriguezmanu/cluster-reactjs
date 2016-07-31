import {combineReducers} from 'redux';
import servers from './servers';
import apps from './apps';

const rootReducer = combineReducers({
  servers,
  apps
});

export default rootReducer;
