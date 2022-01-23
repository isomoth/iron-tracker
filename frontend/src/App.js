import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodList from './components/FoodList';
import { Home } from 'components/Home';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/foods' element={<FoodList />}></Route>
          {/* <Route path='/foods' render={() => <FoodList />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
};
