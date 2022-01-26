import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { foods } from 'reducers/foods';
import { FoodList } from './components/FoodList';
import { FoodInput } from './components/FoodInput';
/* import { TrackFood } from './components/TrackFood'; */
import { Home } from './components/Home';
import { Footer } from './components/Footer';

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
          <Route path='/foods' element={<FoodList />}></Route>
          <Route path='/user-input' element={<FoodInput />}></Route>
          {/* <Route path='/tracker' element={<TrackFood />}></Route> */}
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
};
