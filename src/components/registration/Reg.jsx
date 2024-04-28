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
        const reLog = /^[a-zA-Z0-9]{1,12}$/
        if (!reLog.test(String(e.target.value).toLowerCase)){
            setLoginError('Логин должен содержать не более 12 символов')
        } else {setLoginError('')}
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const reEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!reEmail.test(String(e.target.value).toLowerCase)){
            setEmailError('Почта должна быть ликвидна')
        } else {setEmailError('')}
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        const rePass = /^(?=.*\d.*\d)[a-zA-Z0-9!@#$%^&*()-_=+;:,.<>/?]+$/;
        if (!rePass.test(String(e.target.value).toLowerCase)){
            setPasswordError('Пароль должен содержать минимум 2 цифры и быть не длиннее 10 символов')
        } else {setPasswordError('')}
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
                <h1>Регистрация</h1>
                {(loginDirty && loginError)} && <div className="Error">{loginError}</div>
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHadler(e)} name="login" type="login" placeholder="Логин"></input>
                {(emailDirty && emailError)} && <div className="Error">{emailError}</div>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHadler(e)} name="email" type="text" placeholder="Почта"></input>
                {(passwordDirty && passwordError)} && <div className="Error">{passwordError}</div>
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHadler(e)} name="password" type="password" placeholder="Пароль"></input>
                <button disabled={!formValid} type="submit">Создать аккаунт</button>
                <button>Уже есть аккаунт</button>
            </form>
        </div>
    )
}

export default Registration