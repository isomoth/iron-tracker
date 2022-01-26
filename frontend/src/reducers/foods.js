import { createSlice } from '@reduxjs/toolkit';
/* import { API_URL } from 'utils/constants'; */

export const foods = createSlice({
  name: 'foods',
  initialState: {
    foods: [],
    iron: 0,
    vitamin_c: 0,
    error: null
  },
  reducers: {
    setFoods: (store, action) => {
      store.foods = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});

/* export const getFoods = () => {
  return (dispatch, getState) => {
    dispatch(foods.actions.setLoading(true));
    fetch(API_URL('foods'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ food: getState().foods.food })
    })
      .then((res) => res.json())
      .then((data) => dispatch(foods.actions.setFoods(data)))
      .finally(() => dispatch(foods.actions.setLoading(false)));
  };
}; */
