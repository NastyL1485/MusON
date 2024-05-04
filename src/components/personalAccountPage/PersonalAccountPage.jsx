import './personalAccountPage.css'
import FireFlame from './imgPersonal/FireFlame'
import Header from '../header/Header'

function PersonalAccountPage() {
    return(
        <div className='PersonalAccountPage'>
            <Header />
            <div className='UsersPhoto'>
                <img id='UsersPhoto' src={require('./imgPersonal/Аватарка.png')} alt='UsersPhoto'></img>
            </div>
            <div className='UsersLogin'>
                <p id='UsersLogin'>razriv2001</p>
            </div>
            <div className='BeginAdmin'>
                <button id='BeginAdmin'>Стать администратором</button>
            </div>
            <div className='BestReleases'>
                <div className="scrolling">
                <h2 id='BestReleases'>Лучшие релизы</h2>
                    <div className="last">
                        <div className="card">
                            <img src={require('../../components/releases/cardsImg/card1.png')} alt='card1'></img>
                            </div>
                        <div className="card">
                            <img src={require('../../components/releases/cardsImg/card2.png')} alt='card2'></img>
                            </div>
                        <div className="card">
                            <img src={require('../../components/releases/cardsImg/card3.png')} alt='card3'></img>
                            </div>
                        <div className="card">
                            <img src={require('../../components/releases/cardsImg/card4.png')} alt='card4'></img>
                            </div>
                        <div className="card">
                            <img src={require('../../components/releases/cardsImg/cardMore.png')} alt='cardMore'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='FireFlame'>
                <FireFlame />
            </div>
        </div>
    )
}

export default PersonalAccountPage