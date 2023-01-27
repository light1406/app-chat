import "./Conversation.scss";
import react from "../../assets/react.svg";
import { faSearch, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Message from "../Message";

const Conversation = () => {
  return (
    <div className="conversation">
      <div className="conversation-head">
        <div className="conversation-head__user">
          <div className="conversation-head__user--logo">
            <img src={react} />
          </div>
          <div className="conversation-head__user__right">
            <div className="conversation-head__user__right--name">
              <span>Other</span>
            </div>
            <div className="conversation-head__user__right--status">
              <span>vừa truy cập</span>
            </div>
          </div>
        </div>
        <div className="conversation-head__btns">
          <div className="conversation-head__btns__item">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="conversation-content">
        <div className="conversation-content__other">
          <div className="conversation-content__other__avt">
            <img src={react} />
          </div>
          <div className="conversation-content__other__messages">
            <Message />
          </div>
        </div>
        <div className="conversation-content__me">
          <div className="conversation-content__me__avt">
            <img src={react} />
          </div>
          <div className="conversation-content__me__messages">
            <Message />
          </div>
        </div>
      </div>
      <div className="conversation-input">
        <div className="conversation-input__message">
          <input type="text" placeholder="Nhập tin nhắn..." />
        </div>
        <div className="conversation-input__btns">
          <div className="conversation-input__btns__item">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
