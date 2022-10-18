import { useState } from 'react';
import LoginPage from './Components/LoginPage';
import ConvertPage from './Components/ConvertPage';
import Start from './Scripts/Start';
import store2 from './Stores/store2';
import './App.css';
import './Styles/style_components.css'

function App() {
  const server = store2.getState().server;
  const [user_token, setUser_token] = useState(null);
  const id_number = 'number';
  const id_convert = 'convert';
  const start = () => Start({ id_convert, id_number }, server);

  const convertPage = () => {
    return (
      <ConvertPage
        id_number={id_number}
        id_convert={id_convert}
        start={(system) => start(system)}
        setUser_token={(token) => setUser_token(token)}
        server={server}
      />
    )
  }

  const loginPage = () => {
    return (
      <LoginPage
        setUser_token={(token) => setUser_token(token)}
        server={server}
      />
    )
  }

  return user_token ? convertPage() : loginPage();
}

export default App;
