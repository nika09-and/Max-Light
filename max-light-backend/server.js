require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const productRoutes = require('./routes/productRoutes');
const { uploadFile } = require('./services/googleDrive'); // Import Google Drive service
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

// File Upload Middleware (Multer)
const upload = multer({ dest: 'uploads/' });

// Routes
app.use('/api/products', productRoutes);

// ➡️ Image Upload Route
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        const imageUrl = await uploadFile(req.file.path); // Upload to Google Drive
        res.status(200).json({ imageUrl }); // Respond with the URL
    } catch (error) {
        console.error('Upload Error:', error.message);
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
