import {combineReducers} from 'redux';
import todos from './todos';
import servers from './servers';

const rootReducer = combineReducers({
  todos,
  servers
});

export default rootReducer;
