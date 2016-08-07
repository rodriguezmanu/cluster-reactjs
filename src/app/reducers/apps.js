import {ADD_APP, DELETE_APP} from '../constants/ActionTypes';
import {initialStateApp} from '../constants/InitialStates';
import moment from 'moment';

export default function apps(state = initialStateApp, action) {
  switch (action.type) {
    case ADD_APP:
      for (let i = 0; i < action.servers.length; i++) {
        if (action.servers[i].used === false) {
          state[action.id].date = moment().fromNow();
          action.servers[i].used = state[action.id];
          break;
        }
      }

      return state.map(app =>
        app.id === action.id ?
          Object.assign({}, app, {count: app.count + 1}) :
          app
      );

    case DELETE_APP:
      for (let i = 0; i < action.servers.length; i++) {
        if (typeof action.servers[i].used === 'object' && action.servers[i].used.id === action.id) {
          action.servers[i].used = false;
          break;
        }
      }

      return state.map(app =>
      app.id === action.id ?
        Object.assign({}, app, {count: app.count - 1}) :
        app
    );

    default:
      return state;
  }
}
