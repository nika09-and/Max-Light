import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active page detection
import logo from '../assets/home_page/logo-01.svg';
import messenger from '../assets/home_page/mesanger_icon.svg';
import phone from '../assets/home_page/phone_icon.svg';
import light from '../assets/home_page/light_icon.svg';
import menu from '../assets/home_page/short-menu.svg';

export default function Header() {
    const location = useLocation(); // Get the current route

    return (
        <div className="headerWrap">
            <a id="menu">
                <img src={menu} alt="menu" />
            </a>
            <a id="logo">
                <img src={logo} alt="logo" />
            </a>
            <div id="links">
                <div
                    className="linksWrap"
                    style={{
                        borderBottom: location.pathname === '/' ? '4px solid #FFD202' : 'none', // Yellow bottom border for active page
                    }}
                >
                    <Link to="/" className="linksTExt">Home</Link>
                </div>
                <div
                    className="linksWrap"
                    style={{
                        borderBottom: location.pathname === '/products' ? '4px solid #FFD202' : 'none', // Yellow bottom border for active page
                    }}
                >
                    <Link to="/products" className="linksTExt">Products</Link>
                </div>
                <div
                    className="linksWrap"
                    style={{
                        borderBottom: location.pathname === '/gallery' ? '4px solid #FFD202' : 'none', // Yellow bottom border for active page
                    }}
                >
                    <Link to="/gallery" className="linksTExt">Gallery</Link>
                </div>
                <div
                    className="linksWrap"
                    style={{
                        borderBottom: location.pathname === '/contacts' ? '4px solid #FFD202' : 'none', // Yellow bottom border for active page
                    }}
                >
                    <Link to="/contacts" className="linksTExt">Contacts</Link>
                </div>
            </div>
            <input type="text" id="search" placeholder="Search..." />
            <div id="propIcons">
                <button id="messenger">
                    <img src={messenger} alt="messenger" className="icons" />
                </button>
                <button id="phone">
                    <img src={phone} alt="phone" className="icons" />
                </button>
                <button id="light">
                    <img src={light} alt="light" className="icons" />
                </button>
            </div>
        </div>
    );
}