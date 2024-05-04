import '../main/main.css';
import Svghuman from '../svgHuman/SvgHuman';
import Svgmus from '../svgMus/SvgMus';
import Svgon from '../svgOn/SvgOn';
import Svgrock from '../svgRock/SvgRock';
import {useNavigate} from 'react-router-dom';


function Main(){

    const navigate = useNavigate();


    const handleRegistration = () => {
        navigate('reg')
    }

    const handleLogin = () => {
        navigate('login')
    }

    

    return(
        <div className='main'>
            <div className='human'>
                <Svghuman />
            </div>
            <div className='centralPart'>
                <div className='title'>
                    <div className='Mus'>
                      <Svgmus />
                    </div>
                    <div className='On'>
                      <Svgon />
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={handleLogin} className='input'>Войти</button>
                    <button onClick={handleRegistration} className='registr'>Зарегистрироваться</button>
                </div>
            </div>
            <div className='rock'>
                <Svgrock />
            </div>
        </div>
    )
}

export default Main;