import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FoodList } from './components/FoodList';
import { Home } from 'components/Home';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { foods } from 'reducers/foods';
import { Provider } from 'react-redux';
import { FoodTracker } from './components/FoodTracker';

const reducer = combineReducers({
  foods: foods.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/foods/' element={<FoodList />}></Route>
          <Route path='/tracker' element={<FoodTracker />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
};
