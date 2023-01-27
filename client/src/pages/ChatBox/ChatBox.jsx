import Conversation from '../../component/Conversation';
import NavBar from '../../component/NavBar';
import './ChatBox.scss';

const ChatBox = () => {
    return (
        <div className='chat'>
            <NavBar/>
            <Conversation/>
        </div>
    )
}

export default ChatBox;