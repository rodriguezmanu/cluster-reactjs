import {ADD_SERVER, DELETE_SERVER} from '../constants/ActionTypes';
import {initialStateServer} from '../constants/InitialStates';

export default function servers(state = initialStateServer, action) {
  switch (action.type) {
    case ADD_SERVER:
      return [
        ...state,
        {
          id: state.reduce((maxId, server) => Math.max(server.id, maxId), -1) + 1,
          used: false
        },
      ];

    case DELETE_SERVER:
      var last = state.pop();

      return state.map(server =>
        server.id === last.id ?
          Object.assign({}, server, {used: !server.used}) :
          server
      );
    default:
      return state;
  }
}
