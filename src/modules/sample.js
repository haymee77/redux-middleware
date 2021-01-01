import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
const LOADING_POST = 'sample/LOADING_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const LOADING_USERS = 'sample/LOADING_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

const initialState = {
  loading: {
    post: false,
    users: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [LOADING_POST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        post: true,
      },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        post: false,
      },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        post: false,
      },
    }),
    [LOADING_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        users: true,
      },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        users: false,
      },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        users: false,
      },
    }),
  },
  initialState
);

export const getPost = (id) => async (dispatch) => {
  dispatch({ type: LOADING_POST });
  try {
    const response = await api.getPost(1);
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE, payload: e, error: true });
    throw e;
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOADING_USERS });
  try {
    const response = await api.getUsers();
    dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_USERS_FAILURE, payload: e, error: true });
  }
};

export default sample;
