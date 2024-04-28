import './styles/App.css';
import './components/header/Header';
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Registration from './components/registration/Reg';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/reg" element={<Registration/>} />
        </Routes>
    </BrowserRouter>                                                              
  );
}

export default App;
