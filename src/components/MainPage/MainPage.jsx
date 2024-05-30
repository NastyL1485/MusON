import Main from '../main/Main'
import Releases from '../releases/Releases'
import News from '../news/News'
import Header from '../header/Header'
import '../../styles/mainPage.css'
import React from 'react'

function MainPage() {

    return(
        <div id='MainPage'> 
            <Header/>
            <div id='Main'>
                <Main />
            </div>
            <div id='News'>
                <News />
            </div>
            <div id='Releases'>
                <Releases />
            </div>
        </div>
    )
}

export default MainPage;