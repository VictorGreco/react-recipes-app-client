import * as UserTypes from "./user-types";

export const resetStoreAndLogOut = () => ({});

export const loginRequest = () => ({});

export const loginError = (message) => ({
  type: UserTypes.LOGIN_ERROR,
  payload: "...",
});

export const loginSuccess = ({ name, lastname, email, token }) => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: {
    name: name,
    // ...
  },
});

export const signUpRequest = () => ({});

export const signUpError = (message) => ({});

export const signUpSuccess = ({ name, lastname, email, token }) => ({});

export const signOutRequest = () => ({});

export const signOutError = (message) => ({
  type: UserTypes.SIGNOUT_REQUEST,
  payload: "...",
});

export const signOutSuccess = () => ({});

export function signUp({ name, lastname, email, password }) {
  return async function signUpThunk(dispatch) {
    dispatch(signUpRequest());
  };
}

export function login({ email, password }) {
  // return async thunk...
}

/**
 * @hint
 * const token = getState().user.currentUser.token;
 */
export function signOut() {
  // return async thunk
}
