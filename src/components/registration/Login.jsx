import { useEffect, useState } from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

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
        navigate('/reg')
    }

    // const handleAccount = () => {
    //     navigate('/personalAccount')
    // }

    useEffect( () => {
        if (loginError || passwordError){
            setFormValid(false);
        } else{
            setFormValid(true);
        }
    }, [loginError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value)
        const reLog = /^[a-zA-Z0-9_.+=]+@[a-zA-Z0-0-]+\.[a-zA-Z0-9]+$/;
        if (!reLog.test(String(e.target.value).toLowerCase())){
            setLoginError('Логин некорректен!')
        } else {setLoginError("")}
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
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

    const loginUser = (event) => {
        event.preventDefault();
        const PostEmail = document.getElementById('Login').value;
        const PostPassword = document.getElementById('Password').value;

        let xhr = new XMLHttpRequest();
        
        xhr.withCredentials = true
        let url = "http://127.0.0.1:8000/auth/login";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = function () {
        if (xhr.status === 204) {
            navigate('/personalAccount');
        } else {
            alert("Неверные логин или пароль")
        }
        }
        
        var data = 'username=' + encodeURIComponent(PostEmail) + '&password=' + encodeURIComponent(PostPassword);
        console.log(data)
        xhr.send(data);

        // axios.post("http://127.0.0.1:8000/auth/login", data).then((response) => {
        //       if (response.status === 201) {
        //         alert("Вы успешно зарегистрированы");
        //         navigate('/personalAccount');
        //       } else if (response.status === 400) {
        //         alert("Пользователь уже зарегистрирован");
        //       } else {
        //         alert("Данные введены неверно или отсутствуют");
        //       }
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //       alert("Произошла ошибка. Попробуйте позже.");
        //     });
    }


    return (
        <div className="Login">
            <form>
                {(loginDirty && loginError) && <div className="Error" id='LoginErrorMessange'>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHadler(e)} name="login" type="login" placeholder="Логин" id='Login'></input>
                {(passwordDirty && passwordError) && <div className="Error" id='PasswordErrorMessange'>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHadler(e)} name="password" type="password" placeholder="Пароль" id='Password'></input>
                <button onClick={loginUser} disabled={!formValid} type="submit" id='login'>Войти</button>
                <button onClick={handleRegistration} className='registration'>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Login