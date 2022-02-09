/* import { createSlice } from '@reduxjs/toolkit';
import { API_URL } from 'utils/constants';
import { ui } from './ui';

export const foods = createSlice({
  name: 'foods',
  initialState: {
    selectedFoods: [],
    error: null
  },
  reducers: {
    addSelectedFood: (store, action) => {
      store.selectedFoods = [...store.selectedFoods, action.payload];
    },
    removeSelectedFood: (store, action) => {
      store.selectedFoods = store.selectedFoods.filter(
        (food) => food._id !== action.payload._id
      );
    }
  }
});

export const handleSuggestion = (suggestion) => {
  setFoodName(suggestion.food);
  addSelectedFood(suggestion);
  setSuggestions([]);
};

export const calculateTotalIron = () => {
  const sumIron = selectedFoods
    .map((item) => item.iron)
    .reduce((prev, curr) => prev + curr, 0);
  // Round to two decimals
  return sumIron.toFixed(2);
};

export const calculateTotalVitC = () => {
  const sumVitC = selectedFoods
    .map((item) => item.vitamin_c)
    .reduce((prev, curr) => prev + curr, 0);
  return sumVitC.toFixed(2);
};

export const onShowTotalValues = () => {
  setShowTotalValues(!showTotalValues);
};
 */
