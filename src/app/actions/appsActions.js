import * as types from '../constants/ActionTypes';

export function addApp(id) {
  return {type: types.ADD_APP, id};
}

export function deleteApp(id) {
  return {type: types.DELETE_APP, id};
}