import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './catalog/slice';
import { filtersReducer } from './filters/slice';
import { favoriteReducer } from './favorite/slice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favoriteCars: favoriteReducer,
  },
});
