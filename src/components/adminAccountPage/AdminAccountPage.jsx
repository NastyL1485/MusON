import './adminAccountPage.css'
import Header from '../header/Header'
import FireFlame from '../personalAccountPage/imgPersonal/FireFlame'

function AdminAccountPage() {
    return(
        <div className='AdminAccountPage'>
            <Header />
            <div className='AdminPhoto'>
                <img id='AdminPhoto' src={require('../personalAccountPage/imgPersonal/Аватарка.png')} alt='UsersPhoto'></img>
            </div>
            <div className='AdminLogin'>
                <p id='AdminLogin'>razriv2001</p>
            </div>
            <div className='Add'>
                <button id='Add'>Добавить релиз/новость</button>
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

export default AdminAccountPage