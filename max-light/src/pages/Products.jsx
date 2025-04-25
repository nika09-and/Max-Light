import { useState, useEffect } from 'react';
import display1 from '../assets/products_page/display-1.png'; // Import your display images
import display2 from '../assets/products_page/display-2.png';
import display3 from '../assets/products_page/display-3.png';
import arrow from '../assets/products_page/arrow icon-02.svg'; // Import your arrow image
import PopularProducts from '../components/PopularProducts'; // Import your PopularProducts component
import BigProducts from '../components/BigProducts'; // Import your PopularProducts component
import homeBanner from '../assets/home_page/home_banner.png';

export default function Products() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image index
    const images = [display1, display2, display3]; // Array of images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
        }, 10000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div id="products">
            <div id="sortWrap">
                <p className="productsHeader">Sort</p>
                <div id="sortOptions">
                    <div className="sorts">
                        <p className="sortSecondaryHeader">Categories</p>
                        <select className="dropdown">
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home</option>
                            <option value="sports">Sports</option>
                        </select>
                    </div>

                    <div className="sorts">
                        <p className="sortSecondaryHeader">Brands</p>
                        <select className="dropdown">
                            <option value="all">All Brands</option>
                            <option value="brand1">Brand 1</option>
                            <option value="brand2">Brand 2</option>
                            <option value="brand3">Brand 3</option>
                        </select>
                    </div>

                    <div className="sorts">
                        <p className="sortSecondaryHeader">Vehicle</p>
                        <select className="dropdown">
                            <option value="all">All Vehicles</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="truck">Truck</option>
                        </select>
                    </div>

                    <div className="priceWrap">
                        <p className="sortSecondaryHeader">Price</p>
                        <div className="priceRangeWrap">
                            <input type="text" className="priceInput" placeholder="Min" />
                            <input type="text" className="priceInput" placeholder="Max" />
                        </div>
                    </div>

                    <button className="sortButton">
                        <p id='view'>Sort</p>
                        <img src={arrow} alt="Arrow" className="arrowIcon" />
                    </button>
                </div>
            </div>

            <div id="displayWrap">
                <img
                    src={images[currentImageIndex]} // Dynamically set the current image
                    alt="Display"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50px',
                    }}
                />
            </div>

            <div id="popularProdWrap">
                <p className="productsHeader">Popular Products</p>
                <div id="smallProductsWrap">
                    <PopularProducts picture={homeBanner}/>
                    <PopularProducts />
                    <PopularProducts />
                    <PopularProducts />
                </div>
            </div>
            <div id="productsWrap">
                <p className="productsHeader">Products</p>
                <div id="bigProductsWrap">
                    <BigProducts 
                        picture={homeBanner}
                        name="Xenon H11"
                        price="₾100"
                        description="Xenon H11 is a high-performance headlight bulb designed for superior visibility and safety on the road. With its advanced technology, it provides a bright, white light that enhances your driving experience."
                    />
                    <BigProducts />
                    <BigProducts />
                    <BigProducts />
                    <BigProducts />
                    <BigProducts />
                    <BigProducts />
                </div>
            </div>
        </div>
    );
}