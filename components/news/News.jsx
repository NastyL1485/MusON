import './news.css';


function News() {
    return(
        <div className='News'>
            <div className='NewsTitle'>Горячие новости</div>
            <button className='MoreNews'>ещё новости</button>
            <div className='NewsBlock'>
                <div className='MainNews'>
                    <button className='NameOfNews'></button>
                </div>
                <div className='SecondNews'>
                    <button className='NameOfNews'></button>
                </div>
                <div className='ThirdNews'>
                    <button className='NameOfNews'></button>
                </div>
            </div>
        </div>
    )
}

export default News;