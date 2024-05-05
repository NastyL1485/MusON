import './createNews.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNews() {
  const [titleNews, setTitleNews] = useState('');
  const [contentNews, setContentNews] = useState('');
  const [showImageUploaderNews, setShowImageUploaderNews] = useState(false);

  const navigate = useNavigate();
    

  const handleAddImage = () => {
    setShowImageUploaderNews(true);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    // Обработка загрузки изображения
  };

  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchClick = () => {
    setSwitchOn(prevState => !prevState);
    if (!isSwitchOn) {
      handleSwitchOff();
    } else {
      handleSwitchOn();
    }
  };

  const handleSwitchOn = () => {
    navigate('createNews');
  };

  const handleSwitchOff = () => {
    navigate('createRelease');
  };

  return (
    <div className='CreateNews'> 
    <div className={`switch-btn ${isSwitchOn ? 'switch-on' : ''}`} onClick={handleSwitchClick}>
      <p id='TextOfSwitcherNews'>{isSwitchOn ? 'РЕЛИЗЫ' : 'НОВОСТИ'}</p>
    </div>
      <input id='NewsTitle' type="text" placeholder="Название новости" value={titleNews} onChange={(e) => setTitleNews(e.target.value)}/>
      <input id='NewsContent' placeholder="Описание новости" value={contentNews} onChange={(e) => setContentNews(e.target.value)}/>
      <button id='AddImg' onClick={handleAddImage}><p id='TextAddImg'>Добавить картинку</p></button>
      {showImageUploaderNews && (
        <div id='AddImgField' onDrop={handleImageDrop} onDragOver={(e) => e.preventDefault()}>Drop image here to upload
        </div>
      )}
    </div>
  );
};

export default CreateNews;