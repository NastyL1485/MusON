import './styles/App.css';
import './components/header/Header';
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Registration from './components/registration/Reg';
import Login from './components/registration/Login'
// import Releases from './components/releases/Releases';
// import News from './components/news/News';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/reg" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Route path="/releases" element={<Releases/>} />
            <Route path="/news" element={<News/>} /> */}
        </Routes>
    </BrowserRouter>                                                              
  );
}

export default App;
