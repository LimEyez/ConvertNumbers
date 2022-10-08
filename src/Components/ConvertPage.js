import Input from "./Input"
import Button from "./Button"
import Result from "./Result"
export default function ConvertPage(props) {
    const {id_number, id_convert, start} = props
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
            </div>
            <Result></Result>
        </div>
    )
}