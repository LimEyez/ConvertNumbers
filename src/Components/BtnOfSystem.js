import { useRef, useEffect } from "react";

export default function BtnSys(props) {
    const { name, sys, setSys } = props;
    const ref = useRef(null);

    useEffect(() => {
        let className = 'btnSystem'
        if (sys === name) {
            className = 'btnSystem_active';
        }
        ref.current.className = className;
    })

    const on_Off_Sys = () => {
        if (sys === name) {
            setSys('clean')
        }
        else {
            setSys(name)
        }
    }

    return (
        <button
            ref={ref}
            onClick={() => on_Off_Sys()}
        >{name}</button>
    )
}