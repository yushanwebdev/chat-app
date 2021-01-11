import Chats from "./Chats";
import Send from "./Send";
import Title from "./Title";

const ChatWindow = props => {
    const {user: { username }, updateChat, messages} = props;
    return(
        <div className="chat-window">
            <Title title={username} />
            <Chats messages={messages} username={username} />
            <Send updateChat={updateChat} username={username} />
        </div>
    )
}

export default ChatWindow;