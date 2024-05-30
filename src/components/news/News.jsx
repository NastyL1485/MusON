import { useNavigate } from 'react-router-dom';
import '../../styles/news.css';
import Headphones from './Headphones/Headphones';
import { useEffect, useState } from 'react';


function News() {
    const navigate = useNavigate();

    const handleNewsPage = () => {
        navigate('newsPage')
    }

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

    // const [news, setNews] = useState([])
    // useEffect(() => {
    //     async function fetchNews() {
    //         try {
    //             const response = await fetch('http://127.0.0.1:8000/get_news');
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch news');
    //             }
    //             const data = await response.json();
    //             setNews(data.news);
    //         } catch (error) {
    //             console.error('Error fetching news:', error);
    //         }
    //     }

    //     fetchNews();
    // }, []);

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

    return(
        <div className='NewsBlock'>
            <div className='News'>
                
                <div className='contentBack1'>
                <div className='Title'>
                    <div className='Text'><p>Последняя новость!</p></div>
                    <button className='MoreNews' onClick={handleNewsPage}>ещё новости</button>
                </div>
                {news.length > 0 && (
                <div className='news1'> 

                    <img id='newsImg' src={require('D:/MusON/muson/src/components/releasesPage/uploads/png.png')} alt={`News 1`} /> 
                    <p className='newsTitle'>{news[0].title}</p>
                    <textarea id='newsContent' className='newsContent' readOnly>{news[0].content}</textarea>
                </div>
            )}
        </div>
            </div>
            <div className='Headphones'>
                    <Headphones />
            </div>
        </div>
    )
}

export default News;