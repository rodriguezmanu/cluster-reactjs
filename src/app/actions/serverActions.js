import * as types from '../constants/ActionTypes';

export function addServer() {
  return {type: types.ADD_SERVER};
}

export function deleteServer(id) {
  return {type: types.DELETE_SERVER};
}

export function completeServer(id) {
  return {type: types.COMPLETE_SERVER, id};
}