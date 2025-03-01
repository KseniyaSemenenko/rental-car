import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteCars: JSON.parse(localStorage.getItem('favoriteCars')) || [],
};

const favoriteSlice = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const carId = action.payload;
      console.log('Adding to favorites, current state: ', state.favoriteCars);
      if (!state.favoriteCars.includes(carId)) {
        state.favoriteCars.push(carId);
        localStorage.setItem(
          'favoriteCars',
          JSON.stringify(state.favoriteCars)
        );
      }
    },
    removeFromFavorite: (state, action) => {
      const carId = action.payload;
      console.log(
        'Removing from favorites, current state: ',
        state.favoriteCars
      );
      state.favoriteCars = state.favoriteCars.filter(id => id !== carId);
      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
