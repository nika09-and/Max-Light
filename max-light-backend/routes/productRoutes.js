const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const multer = require('multer');
const { uploadFileToImgbb } = require('../services/imgbb');

// 🔹 Configure multer for memory storage (storing in RAM temporarily)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @route   GET /api/products
 * @desc    Get all products
 */
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error("❌ Error fetching products:", err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

/**
 * @route   GET /api/products/:id
 * @desc    Get product by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        console.error("❌ Error fetching product by ID:", err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

/**
 * @route   POST /api/products
 * @desc    Create a new product
 */
router.post('/', async (req, res) => {
    try {
        const { name, price, description, imageUrl } = req.body;

        if (!name || !price) {
            return res.status(400).json({ msg: 'Please provide name and price' });
        }

        const newProduct = new Product({ name, price, description, imageUrl });
        await newProduct.save();
        
        console.log(`✅ Product Created: ${name}`);
        res.json(newProduct);

    } catch (err) {
        console.error("❌ Error creating product:", err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

/**
 * @route   PUT /api/products/:id
 * @desc    Update a product
 */
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        console.error("❌ Error updating product:", err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product
 */
router.delete('/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ msg: 'Product not found' });
        }
        console.log(`🗑️ Product Deleted: ${deletedProduct.name}`);
        res.json({ msg: 'Product removed' });
    } catch (err) {
        console.error("❌ Error deleting product:", err.message);
        res.status(500).json({ msg: 'Server Error' });
    }
});

/**
 * @route   POST /api/products/upload
 * @desc    Upload image to imgbb and get URL
 */
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        console.log("🔄 Upload route triggered.");

        if (!req.file) {
            console.error("❌ No file received.");
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        console.log("📂 File received. Uploading to imgbb...");

        const url = await uploadFileToImgbb(req.file);

        if (!url) {
            console.error("❌ imgbb upload failed.");
            return res.status(500).json({ error: 'Image upload failed.' });
        }

        console.log("✅ File uploaded successfully. URL:", url);

        // ✅ Return the imgbb URL
        res.json({ url });

    } catch (error) {
        console.error('❌ Upload error:', error.message);
        res.status(500).json({ error: 'Image upload failed.' });
    }
});

/**
 * @route   GET /api/products/test
 * @desc    Test Route
 */
router.get('/test', (req, res) => {
  try {
    console.log("✅ Test route hit");
    res.send("Test successful");
  } catch (error) {
    console.error("❌ Error in /test route:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;