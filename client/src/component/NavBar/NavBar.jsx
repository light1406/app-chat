import './NavBar.scss';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons';
import Contact from '../Contact';

const NavBar = () => {
    return (
        <div className='navbarVertical'>
            <div className='navbar-head'>
                <Alert.Heading>Chat</Alert.Heading>
                <div className='navbar-head__addBtn'>
                    <FontAwesomeIcon icon={faUserPlus}/>
                </div>
            </div>
            <div className='navbar-listContact'>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    )
}

export default NavBar;