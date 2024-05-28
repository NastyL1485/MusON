import './reg.css';
import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom';


function Registration() {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState('Логин не может быть пустым!')
    const [emailError, setEmailError] = useState('Почта не может быть пустой!')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым!')
    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate();

    const handleAccount = (e) => {
        e.preventDefault()
        let username = document.getElementById('login-field').value;
        let email = document.getElementById('email-field').value;
        let password = document.getElementById('password-field').value;
        
        let xhr = new XMLHttpRequest();
        let url = "http://127.0.0.1:8000/auth/jwt/register";
                
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.onload = function () {
        if (xhr.status === 201) {
            alert("вы успешно зарегестрированы")
            // window.location.href = "/account"
        } else if (xhr.status === 400){
            alert("Пользователь уже зарегистрирован")
        } else {
            alert("Данные введены неверно или отсутствуют")
        }
                
        }
        
        var data = JSON.stringify({"email": email, "password": password, "is_active": true, "is_superuser": false, "is_verified": false, "username": username, "phone_number": "string", "birthdate": "string", "role_id": 2});
        
        xhr.send(data)
    }

    const handleLogin = () => {
        navigate('/login')
    }

    useEffect( () => {
        if (loginError || emailError || passwordError){
            setFormValid(false);
        } else{
            setFormValid(true);
        }
    }, [loginError, emailError, passwordError])

    const loginHandler = (e) => {
        setLogin(e.target.value)
        const reLog = /^[a-z0-9_-]{3,16}$/;
        if (!reLog.test(String(e.target.value).toLowerCase())){
            setLoginError('Логин некорректен!')
        } else {setLoginError("")}
    }



    const emailHandler = (e) => {
        setEmail(e.target.value)
        const reEmail = /^[a-zA-Z0-9_.+=]+@[a-zA-Z0-0-]+\.[a-zA-Z0-9]+$/;
        if (!reEmail.test(String(e.target.value).toLowerCase())){
            setEmailError('Почта некорректна')
        } else {setEmailError("")}
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль должен быть длинее 3 и короче 8 символов!')
            if(e.target.value){
                setPasswordError('Пароль должен быть длинее 3 и короче 8 символов!')
            }
        } else {
            setPasswordError("")
        }
    }

    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case 'login' :
                setLoginDirty(true)
                break
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }
    }

    // const handleAccount = () => {
    //     let PostLogin = document.getElementById('login-field').value;
    //     let PostEmail = document.getElementById('email-field').value;
    //     let PostPassword = document.getElementById('password-field').value;

    //     const data = {
    //         "email": PostEmail,
    //         "password": PostPassword,
    //         "is_active": true,
    //         "is_superuser": false,
    //         "is_verified": false,
    //         "username": PostLogin,
    //         "phone_number": "string",
    //         "birthdate": "string",
    //         "role_id": 0
    //       };
      
    //       axios.post("http://127.0.0.1:8000/auth/jwt/register", data).then((response) => {
    //           if (response.status === 201) {
    //             alert("Вы успешно зарегистрированы");
    //             navigate('/personalAccount');
    //           } else if (response.status === 400) {
    //             alert("Пользователь уже зарегистрирован");
    //           } else {
    //             alert("Данные введены неверно или отсутствуют");
    //           }
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //           alert("Произошла ошибка. Попробуйте позже.");
    //         });
    // }

    

    return (
        <div className="Registration">
            <form id='registrationForm'>
                {(loginDirty && loginError) && <div className="Error" id='LoginError'>{loginError}</div>}
                <input id='login-field' onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name="login" type="login" placeholder="Логин"></input>
                {(emailDirty && emailError) && <div className="Error" id='EmailError'>{emailError}</div>}
                <input id='email-field' onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Почта"></input>
                {(passwordDirty && passwordError) && <div className="Error" id='PasswordError'>{passwordError}</div>}
                <input id='password-field' onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Пароль"></input>
                <button onClick={handleAccount} disabled={!formValid} type="submit" id='CreateAccount'>Создать аккаунт</button>
                <button onClick={handleLogin} className='loginButton'>Уже есть аккаунт</button>
            </form>
        </div>
    )

}

export default Registration