import logoImg from './../../img/logo1.svg';
import './header.css';

function Header () {
    return(
        <header className = "header">
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logoImg} alt="LOGO" />
                        <span>musON</span>
                    </div>
                    <div className="header_nav">NAVIGATION</div>
                </div>
            </div>

        </header>
    )
}

export default Header;