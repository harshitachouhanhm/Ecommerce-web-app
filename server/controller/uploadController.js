const multer = require("multer");
const path = require("path");

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage }).single('product');

// Upload image handler
exports.uploadImage = (req, res) => {
  res.json({
    success: 1,
    image_url: `/images/${req.file.filename}`
  });
};
