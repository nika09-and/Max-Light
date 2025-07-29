import home from '../assets/home_page/home-icon.svg';
import products from '../assets/home_page/products-icon.svg';
import gallery from '../assets/home_page/gallery-icon.svg';
import contacts from '../assets/home_page/contacts-icon.svg';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

export default function BottomLinks() {
    const location = useLocation(); // Get the current route

    return (
        <div id="bottomLinks">
            <div
                className="bottomLinksWrap"
                style={{
                    backgroundColor: location.pathname === '/' ? '#707070' : 'transparent',
                    height: location.pathname === '/' ? '100px' : '80px',
                    borderRadius: location.pathname === '/' ? ' 20px 20px 0 0' : '0',
                }}
            >
                <Link to="/" className="clickeableArea">
                    <img
                        src={home}
                        alt="home"
                        className="icons"
                        style={{
                            filter: location.pathname === '/' ? 'invert(1) brightness(1000%)' : 'grayscale(100%)',
                        }}
                    />
                </Link>
            </div>
            <div
                className="bottomLinksWrap"
                style={{
                    backgroundColor: location.pathname === '/products' ? '#707070' : 'transparent',
                    height: location.pathname === '/products' ? '100px' : '80px',
                    borderRadius: location.pathname === '/products' ? ' 20px 20px 0 0' : '0',
                }}
            >
                <Link to="/products" className="clickeableArea">
                    <img
                        src={products}
                        alt="products"
                        className="icons"
                        style={{
                            filter: location.pathname === '/products' ? 'invert(1) brightness(1000%)' : 'grayscale(100%)',
                        }}
                    />
                </Link>
            </div>
            <div
                className="bottomLinksWrap"
                style={{
                    backgroundColor: location.pathname === '/gallery' ? '#707070' : 'transparent',
                    height: location.pathname === '/gallery' ? '100px' : '80px',
                    borderRadius: location.pathname === '/gallery' ? ' 20px 20px 0 0' : '0',
                }}
            >
                <Link to="/gallery" className="clickeableArea">
                    <img
                        src={gallery}
                        alt="gallery"
                        className="icons"
                        style={{
                            filter: location.pathname === '/gallery' ? 'invert(1) brightness(1000%)' : 'grayscale(100%)',
                        }}
                    />
                </Link>
            </div>
            <div
                className="bottomLinksWrap"
                style={{
                    backgroundColor: location.pathname === '/contacts' ? '#707070' : 'transparent',
                    height: location.pathname === '/contacts' ? '100px' : '80px',
                    borderRadius: location.pathname === '/contacts' ? ' 20px 20px 0 0' : '0',
                }}
            >
                <Link to="/contacts" className="clickeableArea">
                    <img
                        src={contacts}
                        alt="contacts"
                        className="icons"
                        style={{
                            filter: location.pathname === '/contacts' ? 'invert(1) brightness(1000%)' : 'grayscale(100%)',
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}