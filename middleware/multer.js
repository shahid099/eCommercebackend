import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Specify the destination folder for uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now + file.originalname); // Use the original filename for the uploaded file
  },
});
// upload parameter for multer
const upload = multer({ 
    storage: storage,
    limits: {
        fieldSize: 5 * 1024 * 1024,
    },
 });

// module.exports = upload;
export default upload;
// CRUDWITHCLOUDINARY