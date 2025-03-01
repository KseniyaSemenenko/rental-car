import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchBrands, fetchCarProfile } from './operations';

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
    carProfile: null,
    brands: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cars = action.payload.cars;
      })
      .addCase(fetchAllCars.rejected, handleRejected)
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

export const carsReducer = carsSlice.reducer;
