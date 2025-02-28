import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const carsCatalogApi = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await carsCatalogApi.get('/cars');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCarProfile = createAsyncThunk(
  'cars/fetchCar',
  async (id, thunkAPI) => {
    try {
      const response = await carsCatalogApi.get(`/cars/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
