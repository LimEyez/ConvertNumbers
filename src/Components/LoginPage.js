import { useState, useEffect } from "react"
import Button from "./Button"
export default function LoginPage({ setUser_token, server }) {
    const [typePassword, setTypePassword] = useState('password');
    const [showUI, setShowUI] = useState(false);
    const login = () => {
        const login = document.getElementById('id_login').value;
        const password = document.getElementById('id_password').value;
        const data = server.login(login, password);
        data.then((data) => {
            setUser_token(data.token);
        })
    };
    const addUser = () => {
        let login = document.getElementById('newLogin').value;
        let password1 = document.getElementById('newPassword1').value;
        let password2 = document.getElementById('newPassword2').value;
        let name = document.getElementById('newName').value;
        const params = { name, login, password1, password2 };
        const data = server.registration(params);
        data.then((data) => {
            if (data.status === false) {
                login = '';
                password1 = '';
                password2 = '';
                name = '';
                setShowUI(false);
            };
            alert(data.message);
        });
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

    const UI = () => {
        return (
            <div className="registrationUI">
                <button id="closeUiReg" onClick={() => setShowUI(false)}>×</button>
                <h2>You Name</h2>
                <input placeholder="Name" id="newName"></input>
                <h2>You Login</h2>
                <input placeholder="Login" id="newLogin"></input>
                <h2>You Password</h2>
                <input placeholder="Password" id="newPassword1"></input>
                <h2>You Password</h2>
                <input placeholder="Password again" id="newPassword2"></input>
                <Button id_convert={'login'}
                    value='Registrarion'
                    func={() => addUser()}></Button>
            </div>)
    };

    return (
        <div className="App, title_login">
            {showUI ? UI() : <></>}
            <button className="btn_registration" onClick={() => setShowUI(true)}>Registration</button>
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