import * as types from '../constants/ActionTypes';

export function addApp(id, servers) {
  return {type: types.ADD_APP, id, servers};
}

export function deleteApp(id, servers) {
  return {type: types.DELETE_APP, id, servers};
}

export function moveApp(id, servers) {
  return {type: types.MOVE_APP, id, servers};
}
