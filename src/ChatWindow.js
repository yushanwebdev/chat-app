import PropTypes from "prop-types";
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

ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    updateChat: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
}

export default ChatWindow;