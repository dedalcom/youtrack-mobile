import * as types from '../actions/action-types';
import {createReducer} from 'redux-create-reducer';
import IssuePermissions from '../components/issue-permissions/issue-permissions';
import type Auth from '../components/auth/auth';

type RootState = {
  auth: ?Auth,
  showMenu: boolean,
  showDebugView: boolean
};

const initialState: RootState = {
  auth: null,
  showMenu: false,
  showDebugView: false
};

export default createReducer(initialState, {
  [types.INITIALIZE_AUTH](state: RootState, action: {auth: Auth}) {
    const {auth} = action;
    return {...state, auth};
  },
  [types.SET_PERMISSIONS](state: RootState, action: {auth: Auth}) {
    const {auth} = action;
    return {
      ...state,
      issuePermissions: new IssuePermissions(auth.permissions, auth.currentUser)
    };
  },
  [types.LOG_OUT](state: RootState, action: Object = {}) {
    return {...state, auth: null};
  },
  [types.OPEN_MENU](state: RootState) {
    return {
      ...state,
      showMenu: true
    };
  },
  [types.CLOSE_MENU](state: RootState) {
    return {
      ...state,
      showMenu: false
    };
  },
  [types.OPEN_DEBUG_VIEW](state: RootState) {
    return {
      ...state,
      showDebugView: true
    };
  },
  [types.CLOSE_DEBUG_VIEW](state: RootState) {
    return {
      ...state,
      showDebugView: false
    };
  }
});
