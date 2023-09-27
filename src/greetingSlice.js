import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const greetingSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    getMessage: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});
export const { getMessage } = greetingSlice.actions;

export default greetingSlice.reducer;
