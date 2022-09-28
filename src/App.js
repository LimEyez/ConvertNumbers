
import Input from './Components/Input';
import Button from './Components/Button';
import Result from './Components/Result';
import Start from './Scripts/Start';
import './App.css';
import './Styles/style_components.css'

function App() {
  const id_number = 'number';
  const id_convert = 'convert';
  // const [sys, setSys] = useState('default');
  const start = () => Start({ id_convert, id_number});

  return (
    <div className="App">
      <div className='Head_Input'>
        <Input
          id_number={id_number}
          // setSys={(num) => { setSys(num) }}
          start={(system) => start(system)}
        ></Input>
      </div>
      <div className='Head_Button'>
        <Button
          id_convert={id_convert}
          value='press ENTER'
          start={() => start()}
        ></Button>
      </div>
      <Result></Result>
    </div>
  );
}

export default App;
