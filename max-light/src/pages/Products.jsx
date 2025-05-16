import { useState, useEffect } from 'react';
import display1 from '../assets/products_page/display-1.png';
import display2 from '../assets/products_page/display-2.png';
import display3 from '../assets/products_page/display-3.png';
import arrow from '../assets/products_page/arrow icon-02.svg';
import PopularProducts from '../components/PopularProducts';
import BigProducts from '../components/BigProducts';
import homeBanner from '../assets/home_page/home_banner.png';
import { getProducts } from '../services/productService'; // Import our service

export default function Products() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [products, setProducts] = useState([]); // Store products here
    const images = [display1, display2, display3];

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
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
                    src={images[currentImageIndex]}
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
                    {products.map((product) => (
                        <BigProducts
                            key={product._id}
                            picture={product.imageUrl}
                            name={product.name}
                            price={`₾${product.price}`}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
