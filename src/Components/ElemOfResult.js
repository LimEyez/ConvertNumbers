const ElemOfResult = (props) => {
    const { title, className, result } = props;

    if (result === '' || result-0 === 0) {
        return (<></>)
    }
    else if (result !== '' && title === 'text'){
        return (
            <div className={className || 'elemResult'}>
                <p>
                    {result}
                </p>
            </div>
        )
    }

    else {
        return (
            <div className={className || 'elemResult'}>
                <h3>{title}</h3>
                <p>
                    {result}
                </p>
            </div>
        )
    }
}
export default ElemOfResult