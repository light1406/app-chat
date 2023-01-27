import "./Contact.scss";
import react from "../../assets/react.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <div className="contact-left__avt">
          <img src={react} />
        </div>
      </div>
      <div className="contact-right">
        <div className="contact-right__top">
            <div className="contact-right__top--name">
                <span>Nguyen Minh Chau</span>
            </div>
            <div className="contact-right__top--time">
                <span>vài giây</span>
            </div>
        </div>
        <div className="contact-right__bottom">
            <div className="contact-right__bottom--lastMsg">
                <span>hello</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
