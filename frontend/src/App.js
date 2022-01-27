import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { foods } from './reducers/foods';
import { TopFoods } from './components/TopFoods';
import { AddFood } from './components/AddFood';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { FoodList } from 'components/FoodList';

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
          <Route path='/foods' element={<TopFoods />}></Route>
          <Route
            path='/tracker'
            /* element={<AddFood />} */
            element={
              <>
                <AddFood />
                <FoodList />
              </>
            }
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </Provider>
  );
};
