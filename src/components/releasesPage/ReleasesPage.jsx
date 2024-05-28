import './releases.css'
import Header from './../header/Header'
import { useNavigate } from 'react-router-dom'

function ReleasesPage() {

    const navigate = useNavigate()

    const handleReleasePage = () => {
        navigate('/release')
    }

    return(
        <div className='ReleasesPage'>
            <Header/>
            <div className='content'>
                <div className='release'><button onClick={handleReleasePage} className='releaseButton' id='release1Img'><p className='releasesTitle' id='release1Title'>Название1</p></button></div>
                <div className='release'><button onClick={handleReleasePage} className='releaseButton' id='release2Img'><p className='releasesTitle' id='release2Title'>Название2</p></button></div>
                <div className='release'><button onClick={handleReleasePage} className='releaseButton' id='release3Img'><p className='releasesTitle' id='release3Title'>Название3</p></button></div>
                <div className='release'><button onClick={handleReleasePage} className='releaseButton' id='release4Img'><p className='releasesTitle' id='release4Title'>Название4</p></button></div>
                <div className='release'><button onClick={handleReleasePage} className='releaseButton' id='release5Img'><p className='releasesTitle' id='release5Title'>Название5</p></button></div>
                <div className='release'><button onClick={handleReleasePage} className='releaseButton' id='release6Img'><p className='releasesTitle' id='release6Title'>Название6</p></button></div>
            </div>
        </div>
    )
}

export default ReleasesPage