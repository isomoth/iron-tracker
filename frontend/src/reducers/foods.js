import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/constants';
import { ui } from './ui';

export const foods = createSlice({
  name: 'foods',
  initialState: {
    foods: [],
    error: null
  },
  reducers: {
    setFoods: (store, action) => {
      store.foods = action.payload;
    },
    deleteFood: (store, action) => {
      store.foods = store.foods.filter((food) => food._id !== action.payload);
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});

export const displayFoods = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    const options = {
      method: 'GET'
    };
    fetch(API_URL('foods'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(foods.actions.setFoods(data.response));
          dispatch(foods.actions.setError(null));
        } else {
          dispatch(foods.actions.setError(data.response));
        }
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 400));
  };
};
