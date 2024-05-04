import '../header/header.css';
import {useNavigate} from 'react-router-dom';

function Header () {

    const navigate = useNavigate();


    const handleAccount = () => {
        navigate('personalAccount')
    }

    return(
        <header className = "header">
            <div className="container">
                <div className="header_row">
                    <div className='ReleasesPage'><button id='ReleasesPage'>Релизы</button></div>
                    <div className='PersonalAccountPage'><button onClick={handleAccount} id='PersonalAccountPage'>АККАУНТ</button></div>
                    <div className='NewsPage'><button id='NewsPage'>Новости</button></div>
                </div>
            </div>
        </header>
    )
}

export default Header;