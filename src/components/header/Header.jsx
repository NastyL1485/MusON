import '../header/header.css';
import {useNavigate} from 'react-router-dom';

function Header () {

    const navigate = useNavigate();


    const handleAccount = () => {
        navigate('/personalAccount')
    }

    const handleNewsPage = () => {
        navigate('/newsPage')
    }

    const handleReleasesPage = () => {
        navigate('/releasesPage')
    }

    return(
        <header className = "header">
            
                    <div><button id='ReleasesPage' onClick={handleReleasesPage}>Релизы</button></div>
                    <div id='PersonalAccountPageButton'><button onClick={handleAccount} id='PersonalAccountPage'>АККАУНТ</button></div>
                    <div><button onClick={handleNewsPage} id='NewsPage'>Новости</button></div>
            
        </header>
    )
}

export default Header;