import Input from "./Input"
import Button from "./Button"
import Result from "./Result"
import store from "../Stores/store"
export default function ConvertPage(props) {
    const { id_number, id_convert, start, server, setUser_token } = props

    const logout = () => {
        const data = server.logout();
        data.then((data) => {
            setUser_token(data.token);
        })
        store.dispatch({ type: 'clear'});
    }

    return (
        <div className="App">
            <div className='Head_Input'>
                <Input
                    id_number={id_number}
                    start={() => start()}
                ></Input>
            </div>
            <div className='Head_Button'>
                <Button
                    id={id_convert}
                    value='press ENTER'
                    func={() => start()}
                ></Button>
                <Button
                    value={'Logout'}
                    id={'btn_logout'}
                    func={() => logout()}
                ></Button>
            </div>
            <Result></Result>
        </div>
    )
}