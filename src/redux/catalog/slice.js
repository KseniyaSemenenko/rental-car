import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCars,
  fetchBrands,
  fetchCarProfile,
  loadMoreCars,
} from './operations';

const handlePending = state => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    totalCars: 0,
    carProfile: null,
    brands: [],
    loading: false,
    error: null,
    currentPage: 1,
    currentCards: 12,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload.cars;
        state.totalCars = action.payload.totalCars;
        state.currentPage = 1;
      })
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = [...state.cars, ...action.payload.cars];
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCarProfile.pending, handlePending)
      .addCase(fetchCarProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.carProfile = action.payload;
      })
      .addCase(fetchCarProfile.rejected, handleRejected)
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, handleRejected);
  },
});

export const { setCurrentPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
