import {ADD_SERVER, DELETE_SERVER, COMPLETE_SERVER} from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    used: false
  },
  {
    id: 1,
    used: false
  },
  {
    id: 2,
    used: false
  },
  {
    id: 3,
    used: false
  }
];

export default function servers(state = initialState, action) {
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
      state.shift();//si esta used hay que borrar el siguiente

    case COMPLETE_SERVER:
      return state.map(server =>
        server.id === action.id ?
          Object.assign({}, server, {used: !server.used}) :
          server
      );
    default:
      return state;
  }
}
