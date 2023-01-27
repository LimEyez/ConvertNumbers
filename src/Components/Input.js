import { useEffect, useState } from "react";
import BtnSys from "./BtnOfSystem";
import store2 from "../Stores/store2";

const Input = (props) => {
    const { id_number, start} = props;
    const sys = store2.getState().sys;
    const [state, setState] = useState(false);

    useEffect(() => {
        store2.subscribe(() => {setState(!state)});
        let input = document.getElementById(id_number);
        input.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {
                start();
            }
        });
        input.focus();
    })

    const setSys = (num) => {
        store2.dispatch({type: 'sys', value: num});
    }

    return (
        <>
            <h6 className="nameTitle">Введите число</h6>
            <div className="system">
                <p>Система счисления:</p>
                <BtnSys setSys ={(num)=> {setSys(num)}} sys={sys} name='2'></BtnSys>
                <BtnSys setSys ={(num)=> {setSys(num)}} sys={sys} name='8'></BtnSys>
                <BtnSys setSys ={(num)=> {setSys(num)}} sys={sys} name='16'></BtnSys>
            </div>
            <input id={id_number} spellCheck="false"></input>
        </>
    )
}

export default Input