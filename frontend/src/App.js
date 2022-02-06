import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useState, useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

import { foods } from './reducers/foods';
import { TopFoods } from './components/TopFoods';
import { AddFood } from './components/AddFood';
import { Home } from './components/Home';
import { Disclaimer } from 'components/Disclaimer';
import Navbar from 'components/Burger/Navbar';
import Burger from 'components/Burger/Burger';
import Theme from 'components/Burger/Theme';

const reducer = combineReducers({
  foods: foods.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Router ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/foods' element={<TopFoods />}></Route>
            <Route
              path='/tracker'
              element={<AddFood />}
              /* element={
              <>
                <AddFood />
                <FoodList />
              </> 
            } */
            ></Route>
            <Route path='/disclaimer' element={<Disclaimer />}></Route>
          </Routes>
        </Router>
        {/* <Footer /> */}
      </Provider>
    </ThemeProvider>
  );
};
