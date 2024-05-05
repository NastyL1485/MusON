import './newsPage.css'
import Header from '../header/Header'

function NewsPage() {
    return(
        <div className='NewsPage'>
            <Header/>
            <div className='NewsGrid'>
                <div className='NewsCard' id='NewsCard1'>
                    <div className='NewsCardButtonArea'>
                        <div className='NewsImgPlace' id='Img1'></div>
                        <button className='NewsCardButton' id='NewsCard1'>Название</button>
                    </div>
                </div>
                <div className='NewsCard' id='NewsCard2'>
                    <div className='NewsCardButtonArea'>
                        <div className='NewsImgPlace' id='Img2'></div>
                        <button className='NewsCardButton' id='NewsCard1'>Название</button>
                    </div>
                </div>
                <div className='NewsCard' id='NewsCard3'>
                    <div className='NewsCardButtonArea'>
                        <div className='NewsImgPlace' id='Img3'></div>
                        <button className='NewsCardButton' id='NewsCard1'>Название</button>
                    </div>
                </div>
                <div className='NewsCard' id='NewsCard4'>
                    <div className='NewsCardButtonArea'>
                        <div className='NewsImgPlace' id='Img4'></div>
                        <button className='NewsCardButton' id='NewsCard1'>Название</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage