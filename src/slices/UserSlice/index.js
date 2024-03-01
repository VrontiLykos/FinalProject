import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    isFetching: false,
    failure: false,
    errorMessage: undefined,
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: state => {
      state.data = {};
    },
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;

      if (action.payload.userId && action.payload.ttl && action.payload.id) {
        state.data.accessToken = action.payload.id;
      }

      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout, request, success, failure} = userSlice.actions;

export default userSlice.reducer;
