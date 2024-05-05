import './styles/App.css';
import '../src/components/header/Header';
import React from 'react';
import MainPage from '../src/components/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Registration from './components/registration/Reg';
import Login from './components/registration/Login'
import PersonalAccountPage from './components/personalAccountPage/PersonalAccountPage';
import AdminAccountPage from './components/adminAccountPage/AdminAccountPage';
import CreateNews from './components/createNews/CreateNews';
import CreateRelease from './components/createRelease/CreateRelease';
import NewsPage from './components/newsPage/NewsPage';
import ReleasesPage from './components/releasesPage/ReleasesPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/reg" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/reg/login" element={<Login/>} />
            <Route path="/login/reg" element={<Registration/>} />
            <Route path="/login/personalAccount" element={<PersonalAccountPage/>} />
            <Route path="/reg/personalAccount" element={<PersonalAccountPage/>} />
            <Route path='/reg/adminAccount' element={<AdminAccountPage/>} />
            <Route path='/login/adminAccount' element={<AdminAccountPage/>} />
            <Route path='/reg/adminAccount/createNews' element={<CreateNews/>}/>
            <Route path='/reg/adminAccount/createRelease' element={<CreateRelease />} />
            <Route path='/reg/adminAccount/createNews/createRelease' element={<CreateRelease />} />
            <Route path='/reg/adminAccount/createNews/createRelease/createNews' element={<CreateNews />} />
            <Route path='/newsPage' element={<NewsPage/>} />
            <Route path='/releasesPage' element={<ReleasesPage/>} />
        </Routes>
    </BrowserRouter>                                                              
  );
}

export default App;
