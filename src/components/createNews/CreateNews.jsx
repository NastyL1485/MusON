import './createNews.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNews() {
  const [titleNews, setTitleNews] = useState('');
  const [contentNews, setContentNews] = useState('');

  const navigate = useNavigate();
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
    navigate('/createNews');
  };

  const handleSwitchOff = () => {
    navigate('/createRelease');
  };

  const UploadNewsForm = async (e) => {
    e.preventDefault();
    let formData = new FormData(document.getElementById("newsForm"));

    try {
        let response = await fetch("http://127.0.0.1:8000/upload_news/", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
          alert("Новость успешно загружена!")
          console.log("Форма успешно отправлена");
        } else {
            alert("Заполните все поля для отправки формы!")
            console.error("Ошибка при отправке формы:", response.status);
        }
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
    }
};

  return (
    <div className='CreateNews'> 
    <div className={`switch-btn ${isSwitchOn ? 'switch-on' : ''}`} onClick={handleSwitchClick}>
      <p id='TextOfSwitcherNews'>{isSwitchOn ? 'РЕЛИЗЫ' : 'НОВОСТИ'}</p>
    </div>
      <form id='newsForm'>
      <input id='NewsTitle' name='title' type="text" placeholder="Название новости" value={titleNews} onChange={(e) => setTitleNews(e.target.value)}/>
      <input id='NewsContent' name='content' placeholder="Описание новости" value={contentNews} onChange={(e) => setContentNews(e.target.value)}/>
      <input id='AddImgNews' name="image" type='file' accept="image/*"  />
      <button id='sendform' type='submit' onClick={UploadNewsForm}>Отправить форму</button>
      </form>
    </div>
  );
};

export default CreateNews;