import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="message_content">
        <p>Hello</p>
      </div>
      <div className="message__infor">
        <div className="message__infor__time">
            <span>Vừa xong</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
