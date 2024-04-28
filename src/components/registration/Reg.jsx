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
        const reLog = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        if (!reLog.test(String(e.target.value).toLowerCase)){
            setLoginError('Логин должен содержать не более 12 символов')
        } else {setLoginError("")}
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reEmail.test(String(e.target.value).toLowerCase)){
            setEmailError('Почта некорректна')
        } else {setEmailError("")}
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const rePass = /^[@#][A-Za-z0-9]{7,13}$/;
        if (!rePass.test(String(e.target.value).toLowerCase)){
            setPasswordError('Пароль должен содержать от 7 до 12 символов')
        } else {setPasswordError("")}
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
                {(loginDirty && loginError) && <div className="Error">{loginError}</div>}
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHadler(e)} name="login" type="login" placeholder="Логин"></input>
                {(emailDirty && emailError) && <div className="Error">{emailError}</div>}
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHadler(e)} name="email" type="text" placeholder="Почта"></input>
                {(passwordDirty && passwordError) && <div className="Error">{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHadler(e)} name="password" type="password" placeholder="Пароль"></input>
                <button disabled={!formValid} type="submit">Создать аккаунт</button>
                <button>Уже есть аккаунт</button>
            </form>
        </div>
    )
}

export default Registration