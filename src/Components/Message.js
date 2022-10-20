export default function Message({ userName, message, date }) {
    const time = date.split(' ');
    return (
        <div className="message">
            <div className="message_title">
                <div style={{ width: '70%', textAlign: "left" }}>
                    <p style={{ color: '#66d41e', position: 'relative' }}>
                        {userName}
                    </p>
                </div>
                <div style={{ width: '30%', color: '#ffffff73' }}>
                    <p>{time[1]}</p>
                </div>
            </div>
            <div className="message_text">
                <p style={{ margin: '0 0 3px 0', color: 'white', wordBreak: 'break-word' }}>
                    {message}
                </p>
            </div>
        </div>
    )
}