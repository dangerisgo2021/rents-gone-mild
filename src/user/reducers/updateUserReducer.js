export const updateUserReducer = (state, action) => {
  if (action?.payload?.user) {
    state.user = action.payload?.user;
  }
};
