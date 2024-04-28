import Main from './../main/Main'
import Releases from './../releases/Releases'
import News from './../news/News'
import React from 'react'

function MainPage() {
    return(
        <div className='MainPage'>
            <div className='Main'>
                <Main />
            </div>
            <div className='News'>
                <News />
            </div>
            <div className='Releases'>
                <Releases />
            </div>
        </div>
    )
}

export default MainPage;