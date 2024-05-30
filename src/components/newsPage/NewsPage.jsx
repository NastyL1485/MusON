import './newsPage.css'
import { useEffect, useState } from 'react';

function NewsPage() {

    const [news, setNews] = useState([])
    // let [userdata, setUserdata] = useState();
    // let [status, setStatus] = useState();

    // useEffect(() => {
    //     thisUser();
    // }, []);
    
    // function thisUser() {
    //     fetch("http://127.0.0.1:8000/users/me", {
    //         headers: {
    //             'Content-type': 'application/json',
    //           },
    //         method: 'GET',
    //         credentials: 'include',
    //     })
    //         .then(data => data.json())

    //         .then(data => {
    //             setUserdata(data);
    //             console.log(data)
    //             if (data.detail == 'Unauthorized'){
    //                 window.location.href = '/login';
    //             }
    //         })
    // }

    // const nav = useNavigate();

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('http://127.0.0.1:8000/get_news');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                setNews(data.news);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        }

        fetchNews();
    }, []);

    return (
        <div className='contentBack'>
            {news.map((news, index) => (
                <div key={index} className='news'> 
                    <img id='newsImg' src={require('D:/MusON/muson/src/components/releasesPage/uploads/png.png')} alt={`News ${index + 1}`} /> 
                    <p className='newsTitle'>{news.title}</p>
                    <textarea id='newsContent' className='newsContent'>{news.content}</textarea>
                </div>
            ))}
        </div>
    );

    // return(
    //     <div className='NewsPage'>
    //         <Header/>
    //         <div className='NewsGrid'>
    //             <div className='NewsCard' id='NewsCard1'>
    //                 <div className='NewsCardButtonArea'>
    //                     <div className='NewsImgPlace' id='Img1'></div>
    //                     <img className='NewsCardButton' id='NewsCard1' alt='NewsCard'></img>
    //                 </div>
    //             </div>
    //             <div className='NewsCard' id='NewsCard2'>
    //                 <div className='NewsCardButtonArea'>
    //                     <div className='NewsImgPlace' id='Img2'></div>
    //                     <img className='NewsCardButton' id='NewsCard1' alt='NewsCard' >Название</img>
    //                 </div>
    //             </div>
    //             <div className='NewsCard' id='NewsCard3'>
    //                 <div className='NewsCardButtonArea'>
    //                     <div className='NewsImgPlace' id='Img3'></div>
    //                     <img className='NewsCardButton' id='NewsCard1' alt='NewsCard' >Название</img>
    //                 </div>
    //             </div>
    //             <div className='NewsCard' id='NewsCard4'>
    //                 <div className='NewsCardButtonArea'>
    //                     <div className='NewsImgPlace' id='Img4'></div>
    //                     <button className='NewsCardButton' id='NewsCard1' alt='NewsCard' >Название</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default NewsPage