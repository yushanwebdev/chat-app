const Chats = props => (
    <ul className="message-list">
        {props.messages.map((message, index) => (
            <li
                key={index}
                className={
                    message.username === props.username ? 'message sender' : 'message recipient'
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>
        ))}
    </ul>
);

export default Chats;