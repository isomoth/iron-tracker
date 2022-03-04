import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { MainMenu } from 'components/MainMenu';
import { foods } from './reducers/foods';
import { TopFoods } from './components/TopFoods';
import { TrackFood } from './components/TrackFood/TrackFood';
import { Home } from './components/Home';
import { Disclaimer } from 'components/Disclaimer';
import Theme from 'components/Burger/Theme';
import { food } from 'reducers/food';

const reducer = combineReducers({
  foods: foods.reducer,
  food: food.reducer
});

// const node = useRef();
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <Router>
          <MainMenu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/foods' element={<TopFoods />} />
            <Route path='/tracker' element={<TrackFood isChanged={[]} />} />
            <Route path='/disclaimer' element={<Disclaimer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
