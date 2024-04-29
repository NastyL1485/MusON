import './reg.css';
import { useEffect, useState } from "react"


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
        // const rePass = /^[@#][A-Za-z0-9]{7,13}$/;
        // if (!rePass.test(String(e.target.value).toLowerCase())){
        //     setPasswordError('Пароль должен содержать от 7 до 12 символов')
        // } else {setPasswordError('')}
        if (e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('Пароль должен быть длинее 3 и короче 8 символов!')
            if(e.target.value){
                setPasswordError('Пароль должен быть длинее 3 и короче 8 символов!')
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
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }
    }

    

    return (
        <div className="Registration">
            <form>
                {(loginDirty && loginError) && <div className="Error" id='LoginError'>{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHadler(e)} name="login" type="login" placeholder="Логин" id='Login'></input>
                {(emailDirty && emailError) && <div className="Error" id='EmailError'>{emailError}</div>}
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHadler(e)} name="email" type="text" placeholder="Почта" id='Email'></input>
                {(passwordDirty && passwordError) && <div className="Error" id='PasswordError'>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHadler(e)} name="password" type="password" placeholder="Пароль" id='Password'></input>
                <button disabled={!formValid} type="submit" id='CreateAccount'>Создать аккаунт</button>
                <button className='login'>Уже есть аккаунт</button>
            </form>
        </div>
    )
}

export default Registration