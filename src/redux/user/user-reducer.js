import * as UserTypes from "./user-types";

export const UserInitialState = {
  isLoggingIn: false,
  loginError: null,
  isAuthenticated: false,
  isSigningUp: false,
  signUpError: null,
  isSigningOut: false,
  signOutError: null,
  currentUser: {
    name: null,
    lastname: null,
    email: null,
    token: null,
  },
};

const UserReducer = (state = UserInitialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default UserReducer;
