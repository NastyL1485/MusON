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
import ReleasePage from './components/releasePage/ReleasePage';


function App() {
  return ( 
  <BrowserRouter>  
    <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/reg" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/personalAccount" element={<PersonalAccountPage/>} />
        <Route path="/adminAccount" element={<AdminAccountPage/>} />
        <Route path='/createNews' element={<CreateNews/>}/>
        <Route path='/createRelease' element={<CreateRelease />} />
        <Route path="/newsPage" element={<NewsPage/>} />
        <Route path="/releasesPage" element={<ReleasesPage/>} />
        <Route path='/release' element={<ReleasePage/>} />
        <Route path='/release/:release_id' element={<ReleasePage/>} />
    </Routes>  
  </BrowserRouter>
  );
}

export default App;
