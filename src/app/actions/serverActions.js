import * as types from '../constants/ActionTypes';

export function addServer() {
  return {type: types.ADD_SERVER};
}

export function deleteServer(actions) {
  return {type: types.DELETE_SERVER, actions};
}
