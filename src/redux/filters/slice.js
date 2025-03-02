import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
