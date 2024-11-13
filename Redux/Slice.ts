import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const matricesSlice = createSlice({
  name: 'matrices',
  initialState,
  reducers: {
    setMatrices: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMatrices } = matricesSlice.actions;

export default matricesSlice;
