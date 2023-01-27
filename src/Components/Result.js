import { useEffect, useState } from "react";
import ElemOfResult from "./ElemOfResult";
import store from "../Stores/store";

const Result = (props) => {
    const [update, setUpdate] = useState(true);
    const Store = store.getState();
    const arrayOfStore = [];
    for (let key in Store) {
        if (key !== 'title') arrayOfStore.push({ title: key, result: Store[key] });
    }

    useEffect(() => {
        store.subscribe(() => { setUpdate(!update) })
    })

    return (
        <div className="results">
            {arrayOfStore.map((index) =>
                <ElemOfResult 
                    key={index.title}
                    title={index.title}
                    result={index.result}
                ></ElemOfResult>
            )}
        </div>
    )
}
export default Result