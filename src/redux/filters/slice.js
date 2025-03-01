import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    query: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
