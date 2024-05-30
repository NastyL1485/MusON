import './releasePage.css'
import Header from '../header/Header'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


          
    
        // let [userdata, setUserdata] = useState();
        // let [status, setStatus] = useState();

        // useEffect(() => {
        //     thisUser();
        // }, []);
    
        // function thisUser() {
        //     fetch("http://127.0.0.1:8000/users/me", {
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
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
        // }          Все выше раскомментить!!

        // const thisUser = () => {
        //     fetch("http://127.0.0.1:8000/users/me", {
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         method: 'GET',
        //         credentials: 'include',
        //     })
        //     .then(response => response.json())
        //     .then(userData => {
        //         if (userData.detail === 'Unauthorized'){
        //             navigate('/personalAccount');
        //         }
        //         else{
        //             const userId = userData.id;

        //             return fetch(`http://127.0.0.1:8000/cart_items/${userId}`, {
        //                 headers: {
        //                     'Content-type': 'application/json',
        //                 },
        //                 method: 'GET',
        //                 credentials: 'include',
        //             });
        //         }
                
        //     })
        //     .then(cartItemsResponse => cartItemsResponse.json())
        //     .then(cartItemsData => {
                
        //         cartItemsData.products.forEach(productName => {
        //             fetch(`http://127.0.0.1:8000/product_get/${productName}`)
        //                 .then(response => response.json())
        //                 .then(productData => {
        //                     const totalSumElement = document.getElementById("TotalSum");
        //                     if (totalSumElement) {
        //                         totalSumElement.textContent = `Итого: ${cartItemsData.total_sum}`;
        //                     }
        //                     const container = document.getElementById('cartContainer');
        //                     const cardElement = document.createElement('div');
        //                     cardElement.className = 'item item_cart';

        //                     cardElement.innerHTML = `
        //                         <div class="item_cart__row">
        //                             <a class="item__link item_cart__link" >
        //                                 <img class="item__img item_cart__img img-noselect" src="{{ url_for('static', path='${productData.image_path}')}}" alt="Product Image">
        //                             </a>
        //                             <a class="item__link item_cart__link" href="item-page.html">
        //                                 <span class="item__name-label item_cart__name-label">${productData.name}</span>
        //                             </a>
        //                         </div>
        //                         <div class="item_cart__row">
        //                             <span class="item__price-label item_cart__price-label">${productData.price}</span>
        //                         </div>
        //                         <div class="item_cart__row">
        //                             <button class="item_cart__delete-button" type="button" onclick="deleteProductFromCart('${productData.name}')">
        //                                 <img class="delete-button__img" src="{{ url_for('static', path='images/main/category/item/item_cart__delete-button/delete-button__img.svg')}}" alt="delete-icon">
        //                             </button>
        //                         </div>
        //                     `;

        //                     container.appendChild(cardElement);
        //                 })
        //                 .catch(error => {
        //                     console.error(`Error fetching product data for ${productName}:`, error);
        //                 });
        //         });
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
        // }



function ReleasePage() {

            const { release_id } = useParams();
            const releaseId = parseInt(release_id, 10);
            const [release, setRelease] = useState(null);
          
            console.log('Release ID:', releaseId);

            useEffect(() => {
              const fetchRelease = async () => {
                try {
                  const response = await fetch(`http://127.0.0.1:8000/get_release/${releaseId}`);
                  if (response.ok) {
                    const data = await response.json();
                    setRelease(data);
                  } else {
                    console.error('Error fetching release:', response.status);
                  }
                } catch (error) {
                  console.error('Error fetching release:', error);
                }
              };
          
              fetchRelease();
            }, [releaseId]);
          
            // if (!release) {
            //   return <div>Loading...</div>;
            // }

            const handleDownloadArchive = async () => {
                try {
                  const response = await fetch(`http://127.0.0.1:8000/download_archive/${releaseId}`, {
                    method: 'GET',
                    credentials: 'include' // Если используются куки для авторизации
                  });
            
                  if (response.ok) {
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${release.title}_archive.zip`; // Имя файла
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    window.URL.revokeObjectURL(url);
                  } else {
                    console.error('Error downloading archive:', response.status);
                  }
                } catch (error) {
                  console.error('Error downloading archive:', error);
                }
              };
  
    return(
        <div className='ReleasePage'>
            <Header/>
            <div className='contentOfRelease'>
            {release && (
                <div className='top'>
                    <div className='ReleaseImgPlace'></div>
                    <div className='ReleaseInfo'>
                        <div className='ReleaseTitle'>{release.title}</div>
                        <div className='ReleaseAuthor'>{release.artist}</div>
                    </div>
                    <div className='Download'><button className='DownloadButton' id='download' onClick={handleDownloadArchive}>Скачать</button></div>
                    <div className='Comment'><button className='CommentButton' id='comment'>Написать рецензию</button></div>
                </div>
            )}

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