import './news.css';
import Headphones from '../Headphones/Headphones';


function News() {
    return(
        <div className='NewsBlock'>
            <div className='News'>
                <div className='Title'>
                    <div className='Text'><p>Горячие новости</p></div>
                    <button className='MoreNews'>ещё новости</button>
                </div>
                <div className='NewsBlock'>
                    <div className='BigNews'>
                        <div className='ImageOfNews1'></div>
                        <div className='NameOfNews'></div>
                        <button className='ButtonOfNews1'><div className='TitleOfButton'>Название</div></button>
                    </div>
                    <div className='LittleNews'>
                        <div className='UpNews'>
                            <div className='ImageOfNews2'></div>
                            <button className='ButtonOfNews2'><div className='TitleOfButton'>Название</div></button>
                        </div>
                        <div className='DownNews'>
                            <div className='ImageOfNews2'></div>
                            <button className='ButtonOfNews2'><div className='TitleOfButton'>Название</div></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Headphones'>
                    <Headphones />
            </div>
        </div>
    )
}

export default News;