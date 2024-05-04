import Svghands from '../releases/hands/SvgHands';
import '../../styles/releases.css';

function Releases() {
    return(
        <div className="releases">
            <div className="scrolling">
            <h2>Свежие релизы</h2>
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
            <div className='hands'>
                <Svghands/>
            </div>
        </div>
    )
}

export default Releases;