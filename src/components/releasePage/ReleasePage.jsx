import './releasePage.css'
import Header from '../header/Header'
import { useState } from 'react';

function ReleasePage() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
            setIsLiked(!isLiked);
        };

    return(
        <div className='ReleasePage'>
            <Header/>
            <div className='contentOfRelease'>
                <div className='top'>
                    <div className='ReleaseImgPlace'><img src='' alt='ФОТО' id='release-img'></img></div>
                    <div className='ReleaseInfo'>
                        <div className='ReleaseTitle'>Название</div>
                        <div className='ReleaseAuthor'>Исполнитель</div>
                    </div>
                    <div className='Download'><button className='DownloadButton' id='download'>Скачать</button></div>
                    <div className='Comment'><button className='CommentButton' id='comment'>Написать рецензию</button></div>
                    <div className='Favourites'><button className='like-button' onClick={handleLikeClick} id='like'>
                        {isLiked ? <img src={require('./heartOff.png')} alt='HeartOff'></img> : <img src={require('./heartOn.png')} alt='HeartOn'></img>}
                    </button></div>
                </div>
            </div>
            <div className='FreshComments'>
                <div className='title-of-frame'>
                    <h2 id='fresh-Comments'>Свежие рецензии</h2>
                </div>
                <div className='freshCommentsBlock'>
                    <div className='CommentField'>
                        <div className='User'>
                            <div className='user-photo' id='user1-photo'></div>
                            <div className='username' id='user1-name'>Имя</div>
                        </div>
                        <div className='comment-text'>
                            <p className='comment-content' id='user1-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. </p>
                        </div>
                    </div>
                    <div className='CommentField'>
                        <div className='User'>
                            <div className='user-photo' id='user2-photo'></div>
                            <div className='username' id='user2-name'>Имя</div>
                        </div>
                        <div className='comment-text'>
                            <p className='comment-content' id='user2-comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque. Sed suscipit, arcu volutpat feugiat posuere, eros nisi tristique nibh, mollis vehicula lectus tortor eu purus. Donec ut tortor blandit, sagittis diam eget, suscipit eros. Quisque at magna neque. Nulla faucibus mi at nunc mattis placerat. Pellentesque quis augue quis elit tristique auctor. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MyComment'>
                <div className='title-my-comment'>
                    <h2 id='title-my-comment'>Моя рецензия</h2>
                </div>
                <div className='my-comment-field'>
                    <textarea id='my-comment-content'></textarea>
                </div>
                <div className='sendButton'>
                    <button className='send-button'>Отправить</button>
                </div>
            </div>
            <div className='space'></div>
        </div>
    )
}

export default ReleasePage