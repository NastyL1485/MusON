import './createRelease.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRelease() {

    const [titleRelease, setTitleRelease] = useState('');
    const [ArtistName, setArtistName] = useState('');
    const [Content, setContent] = useState('');
    const navigate = useNavigate()

    const [isSwitchOn, setSwitchOn] = useState(true);

    const handleSwitchClick = () => {
        setSwitchOn(prevState => !prevState);
        if (!isSwitchOn) {
            handleSwitchOff();
        } else {
            handleSwitchOn();
        }
    };
      
    const handleSwitchOn = () => {
        navigate('/createRelease');
    };
      
    const handleSwitchOff = () => {
        navigate('/createNews');
    };

    const UploadForm = async (e) => {
        e.preventDefault();
        let formData = new FormData(document.getElementById("releaseForm"));
    
        try {
            let response = await fetch("http://127.0.0.1:8000/upload_release/", {
                method: "POST",
                body: formData
            });
    
            if (response.ok) {
                // Успешно отправлено, можно выполнить какие-то действия
                console.log("Форма успешно отправлена");
                alert("Релиз успешно загружен!")
            } else {
                alert("Заполните все поля для отправки формы!")
                console.error("Ошибка при отправке формы:", response.status);
            }
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }
    };

    return (
        <div className='CreateRelease'>
            <div className={`switch-btn ${isSwitchOn ? 'switch-on' : ''}`} onClick={handleSwitchClick}>
                <p id='TextOfSwitcherRelease'>{isSwitchOn ? 'РЕЛИЗЫ' : 'НОВОСТИ'}</p>
            </div>
            <form id='releaseForm' >
                <input id='TitleOfRelease' type="text" name='title' placeholder="Название релиза" value={titleRelease} onChange={(e) => setTitleRelease(e.target.value)} /> 
                <input id='NameOfArtist' type='text' name='artist' placeholder="Исполнитель" value={ArtistName} onChange={(e) => setArtistName(e.target.value)} />
                <input id='Content' type='text' name='content' placeholder="Описание" value={Content} onChange={(e) => setContent(e.target.value)} />
                <input id='AddImgRelease' type="file" name="image" accept="image/*" placeholder='Добавить картинку' />
                <input id='AddAudio' type="file" name="archive" accept=".zip,.rar,.7z" placeholder='Добавить архив'  />
                <button id='SendForm' type='submit' onClick={UploadForm}>Отправить форму</button> 
            </form>
        </div>
    )
}

export default CreateRelease;
