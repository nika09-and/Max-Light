import { Link } from 'react-router-dom';
import logo from '../assets/home_page/logo-01.svg';
import messenger from '../assets/home_page/mesanger_icon.svg';
import phone from '../assets/home_page/phone_icon.svg';
import light from '../assets/home_page/light_icon.svg';

export default function Header() {
    return (
        <div className="headerWrap">
            <a id='logo'>
                <img src={logo} alt="logo"/>
            </a>
            <div id='links'>
                <div className='linksWrap'>
                    <Link to="/" className='linksTExt'>Home</Link>
                </div>      
                <div className='linksWrap'>
                    <Link to="/products" className='linksTExt'>Products</Link>
                </div>    
                <div className='linksWrap'>
                    <Link to="/gallery" className='linksTExt'>Gallery</Link>
                </div>    
                <div className='linksWrap'>
                    <Link to="/contacts" className='linksTExt'>Contacts</Link>
                </div>                  
            </div>
            <input type="text" id="search" placeholder="Search..."/>
            <div id='propIcons'>
                <button id='messenger'>
                    <img src={messenger} alt="messenger" className='icons'/>
                </button>
                <button id='phone'>
                    <img src={phone} alt="phone" className='icons'/>
                </button>
                <button id='light'>
                    <img src={light} alt="light" className='icons'/>
                </button>
            </div>
        </div>
    );
}