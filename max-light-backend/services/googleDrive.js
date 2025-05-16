// services/googleDrive.js
const { google } = require('googleapis');
const stream = require('stream');
const path = require('path');

// Your folder ID where files should be uploaded
const FOLDER_ID = '1Kp2Fz8eUFIGAwaocdoc0fiAvLkXlKhel';

// Path to your service account JSON key file
const KEYFILEPATH = path.join(__dirname, '../config/max-light-products-images-df4a3b09e293.json');

// Scopes needed to access Google Drive
const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const drive = google.drive({ version: 'v3', auth });

async function uploadFileToGoogleDrive(file) {
  // file: { buffer, originalname, mimetype }
  const bufferStream = new stream.PassThrough();
  bufferStream.end(file.buffer);

  const response = await drive.files.create({
    requestBody: {
      name: file.originalname,
      mimeType: file.mimetype,
      parents: [FOLDER_ID],  // Upload file into this folder
    },
    media: {
      mimeType: file.mimetype,
      body: bufferStream,
    },
    fields: 'id',
  });

  // Make the file public so anyone can view it
  await drive.permissions.create({
    fileId: response.data.id,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });
  console.log('Google Drive file permissions set to public');

  // Construct the public URL to access the file
  const fileUrl = `https://drive.google.com/uc?id=${response.data.id}`;
  return fileUrl;
}

module.exports = { uploadFileToGoogleDrive };
