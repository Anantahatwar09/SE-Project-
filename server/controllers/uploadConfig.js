const multer = require('multer');
const fs = require('fs'); // Import the file system module
const path = require('path');

const uploadDirectory = path.join(__dirname, '..', 'uploads'); // Adjust the path as necessary

// Check if the directory exists, and create it if it doesn't
if (!fs.existsSync(uploadDirectory)){
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage }).array('photos', 4);

module.exports = upload;
