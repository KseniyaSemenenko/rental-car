import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarProfile } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload.cars;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCarProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carProfile = action.payload;
      })
      .addCase(fetchCarProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
