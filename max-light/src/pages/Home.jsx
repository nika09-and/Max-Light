import homeBanner from '../assets/home_page/home_banner.png';
import { useNavigate, Link } from 'react-router-dom'; // Import Link



export default function Home() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleProductsClick = () => {
        navigate('/products'); // Navigate to the Products page
    };

    return (
        <div id="home">
            <div id="homeText">
                <div id="mainHomeText">   
                    <h1><span id='yellowCollor'>MAX-LIGHT</span> SEE</h1>
                    <h1>BEYOND THE HORIZON</h1>
                </div>
                <button id='productsBtn' onClick={handleProductsClick}>Products</button>
            </div>
            <div id="homePhoto">
                <img src={homeBanner} alt="homeBanner" id="homeBanner" />
            </div>
        </div>
    );
}