import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active page detection
import { useEffect, useState } from 'react'; // Import useState and useEffect for theme management
import logo from '../assets/home_page/logo-01.svg';
import messenger from '../assets/home_page/mesanger_icon.svg';
import phone from '../assets/home_page/phone_icon.svg';
import light from '../assets/home_page/light_icon.svg';
import dark from '../assets/home_page/dark_icon.svg';
import menu from '../assets/home_page/short-menu.svg';

export default function Header() {
    const location = useLocation(); // Get the current route
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); // Initialize theme state
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark'); // Toggle dark theme class on body
        localStorage.setItem('theme', theme); // Persist theme in localStorage
    }, [theme]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) setMenuOpen(false); // Reset menu on desktop
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light')); // Toggle theme state
    };

    const openMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className="headerWrap">
            <a id="menu" style={{ display: isMobile ? 'block' : 'none' }}>
                <img src={menu} alt="menu" onClick={openMenu}/>
            </a>
            <a
                id="logo"
                className={isMobile ? `slide-anim ${menuOpen ? 'slide-out' : 'slide-in'}` : ''}
            >
                <img src={logo} alt="logo" />
            </a>
            <div id="links" style={{ display: !isMobile ? 'flex' : 'none' }}>
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
            <input
                type="text"
                id="search"
                placeholder="Search..."
                className={isMobile ? `slide-anim ${menuOpen ? 'slide-out' : 'slide-in'}` : ''}
            />
            <div
                id="propIcons"
                className={isMobile ? `slide-anim ${menuOpen ? 'slide-in' : 'slide-out'}` : ''}
                style={{
                    display: !isMobile ? 'flex' : undefined,
                    width: menuOpen && isMobile ? '70%' : '10%'
                }}
            >
                <button id="messenger">
                    <img src={messenger} alt="messenger" className="icons" />
                </button>
                <button id="phone">
                    <img src={phone} alt="phone" className="icons" />
                </button>
                <button id="light" onClick={toggleTheme}>
                    <img
                        src={theme === 'light' ? light : dark}
                        alt={theme === 'light' ? 'dark mode' : 'light mode'}
                        className="icons"
                    />
                </button>
            </div>
        </div>
    );
}