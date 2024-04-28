import Main from './../main/Main'
import Releases from './../releases/Releases'
import News from './../news/News'
import React from 'react'

function MainPage() {
    return(
        <div className='MainPage'>
            <Main />
            <News />
            <Releases />
        </div>
    )
}

export default MainPage;