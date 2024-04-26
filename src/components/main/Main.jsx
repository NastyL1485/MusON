import './main.css';
import Svghuman from '../svgHuman/SvgHuman';
import Svgmus from '../svgMus/SvgMus';
import Svgon from '../svgOn/SvgOn';
import Svgrock from '../svgRock/SvgRock';

function Main(){
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
                    <button className='input'>Войти</button>
                    <button className='registration'>Зарегистрироваться</button>
                </div>
            </div>
            <div className='rock'>
                <Svgrock />
            </div>
        </div>
    )
}

export default Main;