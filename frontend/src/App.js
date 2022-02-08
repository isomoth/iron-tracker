import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useState, useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

import { foods } from './reducers/foods';
import { TopFoods } from './components/TopFoods';
import { TrackFood } from './components/TrackFood/TrackFood';
import { Home } from './components/Home';
import { Disclaimer } from 'components/Disclaimer';
import Menu from 'components/Burger/Menu';
import Burger from 'components/Burger/Burger';
import Theme from 'components/Burger/Theme';
import { food } from 'reducers/food';

const reducer = combineReducers({
  foods: foods.reducer,
  food: food.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Router>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/foods' element={<TopFoods />}></Route>
            <Route
              path='/tracker'
              element={<TrackFood />}
              /* element={
              <>
                <TrackFood />
                <FoodList />
              </> 
            } */
            ></Route>
            <Route path='/disclaimer' element={<Disclaimer />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
