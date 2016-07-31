import {ADD_APP, DELETE_APP} from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    used: false,
    count: 0,
    title: 'Hadoop',
    short: 'Hd'
  },
  {
    id: 1,
    used: false,
    count: 0,
    title: 'Rails',
    short: 'Rls'
  },
  {
    id: 2,
    used: false,
    count: 0,
    title: 'Chronos',
    short: 'Ch'
  },
  {
    id: 3,
    used: false,
    count: 0,
    title: 'Storm',
    short: 'St'
  },
  {
    id: 4,
    used: false,
    count: 0,
    title: 'spark',
    short: 'Sp'
  }
];

export default function apps(state = initialState, action) {
  switch (action.type) {
    case ADD_APP:
     for (let i = 0; i < action.servers.length; i++) {
        if (action.servers[i].used === false) {
          console.log(state[action.id]);
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
