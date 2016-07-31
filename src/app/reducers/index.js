import {combineReducers} from 'redux';
import todos from './todos';
import servers from './servers';
import apps from './apps';

const rootReducer = combineReducers({
  todos,
  servers,
  apps
});

export default rootReducer;
