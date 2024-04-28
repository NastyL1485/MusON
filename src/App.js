import './styles/App.css';
import './components/header/Header';
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from './components/registration/Reg';


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" exact component={MainPage}></Route>
                <Route path="/registration" component={Registration} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;