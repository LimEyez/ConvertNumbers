


const Button = (props) => {
    const { id, value, func, classname } = props;

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button
                className={classname}
                id={id}
                onClick={() => func()}
            >{value}</button>
        </div >
    )
}

export default Button