import {ADD_SERVER, DELETE_SERVER} from '../constants/ActionTypes';
import {initialStateServer} from '../constants/InitialStates';

export default function servers(state = initialStateServer, action) {
  switch (action.type) {
    case ADD_SERVER:
      return [
        {
          id: state.reduce((maxId, server) => Math.max(server.id, maxId), -1) + 1,
          used: false
        },
        ...state
      ];

    case DELETE_SERVER:
      state.shift();

      return state.map(server =>
        server.id === action.id ?
          Object.assign({}, server, {used: !server.used}) :
          server
      );
    default:
      return state;
  }
}
