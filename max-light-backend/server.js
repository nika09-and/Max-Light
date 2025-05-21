require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const productRoutes = require('./routes/productRoutes');
const { uploadFileToImgbb } = require('./services/imgbb'); // Import imgbb service
console.log('uploadFileToImgbb type:', typeof uploadFileToImgbb); // Debug: Check function import
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch((error) => {
    console.error("MongoDB connection error:", error.message);
});

// Middleware
app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  console.log("Test route hit");
  res.send("Test successful");
});

// File Upload Middleware (Multer) - use memory storage for imgbb
const upload = multer({ storage: multer.memoryStorage() });

// Routes
app.use('/api/products', productRoutes);

// ➡️ Image Upload Route
app.post('/api/upload', upload.single('image'), async (req, res) => {
    // Debug: Log file and API key status
    console.log('File received:', !!req.file);
    console.log('IMGBB API Key present:', !!process.env.IMGBB_API_KEY);

    // Check if file is present
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }
    // Check if imgbb API key is present
    if (!process.env.IMGBB_API_KEY) {
        return res.status(500).json({ error: 'IMGBB API key not configured.' });
    }
    // Check if uploadFileToImgbb is a function
    if (typeof uploadFileToImgbb !== 'function') {
        console.error('uploadFileToImgbb is not a function');
        return res.status(500).json({ error: 'Server misconfiguration: uploadFileToImgbb is not a function.' });
    }
    try {
        const imageUrl = await uploadFileToImgbb(req.file); // Upload to imgbb
        res.status(200).json({ imageUrl }); // Respond with the URL
    } catch (error) {
        console.error('Upload Error:', error.message, error);
        res.status(500).json({ error: 'Image upload failed.' });
    }
});

app.get('/', (req, res) => {
    res.send("Server is up and running!");
});

// Server Listen
app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});