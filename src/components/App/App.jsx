import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/pages';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;