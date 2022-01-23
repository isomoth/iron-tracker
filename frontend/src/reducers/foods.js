import { createSlice } from '@reduxjs/toolkit';

export const foods = createSlice({
  name: 'foods',
  initialState: {
    items: [],
    error: null
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});
