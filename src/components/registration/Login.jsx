import { useEffect, useState } from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';


function Login() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState('Логин не может быть пустым!')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!')
    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate();


    const handleRegistration = () => {
        navigate('reg')
    }

    const handleAccount = () => {
        navigate('personalAccount')
    }

    useEffect( () => {
        if (loginError || passwordError){
            setFormValid(false);
        } else{
            setFormValid(true);
        }
    }, [loginError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value)
        const reLog = /^[a-z0-9_-]{3,16}$/;
        if (!reLog.test(String(e.target.value).toLowerCase())){
            setLoginError('Логин некорректен!')
        } else {setLoginError("")}
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        // const rePass = /^[@#][A-Za-z0-9]{7,13}$/;
        // if (!rePass.test(String(e.target.value).toLowerCase())){
        //     setPasswordError('Пароль должен содержать от 7 до 12 символов')
        // } else {setPasswordError('')}
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль должен быть длинее 3 и короче 8 символов!')
            if(e.target.value){
                setPasswordError('Пароль не может быть пустым!')
            }
        } else {
            setPasswordError("")
        }
    }

    const blurHadler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'login' :
                setLoginDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }
    }

    return (
        <div className="Login">
            <form>
                {(loginDirty && loginError) && <div className="Error" id='LoginErrorMessange'>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHadler(e)} name="login" type="login" placeholder="Логин" id='Login'></input>
                {(passwordDirty && passwordError) && <div className="Error" id='PasswordErrorMessange'>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHadler(e)} name="password" type="password" placeholder="Пароль" id='Password'></input>
                <button onClick={handleAccount} disabled={!formValid} type="submit" id='login'>Войти</button>
                <button onClick={handleRegistration} className='registration'>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Login