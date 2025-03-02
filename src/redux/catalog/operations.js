import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const carsCatalogApi = axios.create({
  baseURL: 'https://car-rental-api.goit.global/',
});

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const response = await carsCatalogApi.get('/cars', {
        params: { page, limit },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loadMoreCars = createAsyncThunk(
  'cars/LoadMore',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await carsCatalogApi.get('/cars', {
        params: {
          page,
          limit,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setCurrentPage = page => ({
  type: 'cars/setCurrentPage',
  payload: page,
});

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
export const fetchBrands = createAsyncThunk(
  'brands/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await carsCatalogApi.get('/brands');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
