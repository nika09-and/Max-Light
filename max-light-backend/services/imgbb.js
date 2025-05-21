const axios = require('axios');

/**
 * Uploads an image file to imgbb and returns the direct image URL.
 * @param {Object} file - The file object { buffer, originalname, mimetype }
 * @returns {Promise<string>} - The direct URL to the uploaded image
 */
async function uploadFileToImgbb(file) {
  const IMGBB_API_KEY = process.env.IMGBB_API_KEY;
  if (!IMGBB_API_KEY) {
    throw new Error('IMGBB API key not configured.');
  }
  const imageBase64 = file.buffer.toString('base64');

  const formData = new URLSearchParams();
  formData.append('key', IMGBB_API_KEY);
  formData.append('image', imageBase64);
  formData.append('name', file.originalname);

  const response = await axios.post(
    'https://api.imgbb.com/1/upload',
    formData
  );

  // The direct image URL
  const fileUrl = response.data.data.url;
  return fileUrl;
}

module.exports = { uploadFileToImgbb };