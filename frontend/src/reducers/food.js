import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/constants';
import { foods } from './foods';
import { ui } from './ui';

export const food = createSlice({
  name: 'food',
  initialState: {
    food: '',
    vitamin_c: 0,
    iron: 0
  },
  reducers: {
    setFood: (store, action) => {
      store.food = action.payload;
    },
    setVitaminC: (store, action) => {
      store.vitamin_c = action.payload;
    },
    setIron: (store, action) => {
      store.iron = action.payload;
    }
  }
});

export const onAddNewFood = (input, setInput) => {
  return (dispatch) => {
    if (input.trim() !== '') {
      dispatch(ui.actions.setLoading(true));
      const options = {
        method: 'POST',
        body: JSON.stringify({ ...foods.food }),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      fetch(API_URL('foods'), options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            dispatch(foods.actions.setError(null));
          } else {
            dispatch(foods.actions.setError(data.response));
          }
        });
    }
    // setInput('');
  };
};
