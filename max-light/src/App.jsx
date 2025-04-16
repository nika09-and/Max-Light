import './App.css';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Import the Home page
import Products from './pages/Products.jsx'; // Example: Another page
import Gallery from './pages/Gallery.jsx'; // Example: Another page
import Contacts from './pages/Contacts.jsx'; // Example: Another page

function App() {
  return (
    <Router>
      <Header /> {/* Always visible on every page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/products" element={<Products />} /> {/* Products page */}
        <Route path="/gallery" element={<Gallery />} /> {/* Gallery page */}
        <Route path="/contacts" element={<Contacts />} /> {/* Contacts page */}
      </Routes>
    </Router>
  );
}

export default App;