import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
