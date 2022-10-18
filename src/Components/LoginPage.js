import { useState, useEffect } from "react"
import Button from "./Button"
export default function LoginPage({ setUser_token, server }) {
    const [typePassword, setTypePassword] = useState('password')
    const login = () => {
        const login = document.getElementById('id_login').value;
        const password = document.getElementById('id_password').value;
        const data = server.login(login, password);
        data.then((data) => {
            setUser_token(data.token);
        })
    }
    useEffect(() => {
        let inputLogin = document.getElementById('id_login');
        let inputPassword = document.getElementById('id_password');
        inputLogin.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                inputPassword.focus();
            }
        });
        inputPassword.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                login();
            }
        });
        inputLogin.focus();
    })
    return (
        <div className="App, title_login">
            <h3 >Login</h3>
            <input id='id_login' className="input_login" autoComplete="off"></input>
            <h3>Password</h3>
            <input type={typePassword} id='id_password'
                className="input_login"></input>
            <div className="seePassword">
                <input type='checkbox' style={{ margin: '0 15px 0 0' }}
                    autoComplete="off"
                    onClick={() => {
                        if (typePassword === 'password') {
                            setTypePassword('text')
                        }
                        else {
                            setTypePassword('password')
                        }
                    }}
                ></input>
                <h6>Показать пароль</h6>
            </div>
            <Button
                id_convert={'login'}
                value='press ENTER'
                classname='btn_login'
                func={() => login()}
            ></Button>
        </div >
    )
}