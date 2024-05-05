import './createRelease.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRelease() {

    const [titleRelease, setTitleRelease] = useState('');
    const [showImageUploaderRelease, setShowImageUploaderRelease] = useState(false);
    const [showAudioUploaderRelease, setShowAudioUploaderRelease] = useState(false);

    const navigate = useNavigate()

    const handleAddImage = () => {
        setShowImageUploaderRelease(true);
      };
    
    const handleImageDrop = (e) => {
        e.preventDefault();
        // Обработка загрузки изображения
        };

    const handleAddAudio = () => {
        setShowAudioUploaderRelease(true);
    }; 

    const handleAudioDrop = (e) => {
        e.preventDefault();
        // Обработка загрузки изображения
        };

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
        navigate('createRelease');
    };
      
    const handleSwitchOff = () => {
        navigate('createNews');
    };
    
    return (
        <div className='CreateRelease'>
            <div className={`switch-btn ${isSwitchOn ? 'switch-on' : ''}`} onClick={handleSwitchClick}>
            <p id='TextOfSwitcherRelease'>{isSwitchOn ? 'РЕЛИЗЫ' : 'НОВОСТИ'}</p>
            </div>
            <input id='TitleOfRelease' type="text" placeholder="Название релиза" value={titleRelease} onChange={(e) => setTitleRelease(e.target.value)} /> 
            <button id='AddImgRelease' onClick={handleAddImage}><p id='TextAddImg'>Добавить картинку</p></button>
            {showImageUploaderRelease && (
                <div id='AddImgField' onDrop={handleImageDrop} onDragOver={(e) => e.preventDefault()}>Drop image here to upload
                </div>
            )}
                <button id='AddAudio' onClick={handleAddAudio}><p id='TextAddImg'>Добавить аудио файл</p></button>
            {showAudioUploaderRelease && (
                <div id='AddAudioField' onDrop={handleAudioDrop} onDragOver={(e) => e.preventDefault()}>Drop audio here to upload
                </div>
      )}    
        </div>
    )
}

export default CreateRelease