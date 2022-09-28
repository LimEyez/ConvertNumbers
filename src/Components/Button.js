


const Button = (props) => {
    const { id_convert, value, start } = props;

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button
                id={id_convert}
                onClick={() => start()}
            >{value}</button>
        </div >
    )
}

export default Button