import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = localStorage.getItem('favoriteCars');
const initialState = {
  favoriteCars: savedFavorites ? JSON.parse(savedFavorites) : [],
};

const favoriteSlice = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const carId = action.payload;
      if (!state.favoriteCars.includes(carId)) {
        state.favoriteCars = [...state.favoriteCars, carId];
      }
      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
    removeFromFavorite: (state, action) => {
      const carId = action.payload;
      state.favoriteCars = state.favoriteCars.filter(id => id !== carId);
      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
