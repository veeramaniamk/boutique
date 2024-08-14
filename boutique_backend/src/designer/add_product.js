const multer = require('multer');
const mysql  = require('../database/connection');

let fileName="";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:\\Node Js\\SIMATS\\boutique\\boutique_backend\\src\\uploads\\product_images\\");
  },
  filename: (req, file, cb) => {
      fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage }).array('product_images');

const addProduct = (req, res) => {
    upload(req, res, (err) => {

        const designer_id               = req.body.designer_id;
        const product_name              = req.body.product_name;
        const product_details           = req.body.product_details;
        const dress_category_name       = req.body.dress_category_name;
        const material_category_name    = req.body.material_category_name;
        const gender                    = req.body.gender;
        const price                     = req.body.price;

        if (err instanceof multer.MulterError) {
            return res.status(500).json({ status: 500, message: 'File upload error', error:err});
        } else if (err) {
            return res.status(500).json({ status: 500, message: 'An unknown error occurred', error:err.message});
        }

        if (!designer_id || !req.files || req.files.length === 0) {
            return res.status(400).json({ status: 400, message: 'Content or image(s) missing' });
        }
    
        // const content   = req.body.content;
        const fileNames = req.files.map(file => file.filename).join(',');
        // const sql = 'INSERT INTO image_upload (image_name, message) VALUES (?, ?)';
        //   pool.query(sql, [fileNames, content], (err, result) => {
        //     if (err) {
        //       return res.status(500).json({ error: 'Error inserting data into database' });
        //     }
        //   });
        // Save to database or perform any other required action
        // For demonstration, we are simply logging the content and file names
        console.log('Content:', designer_id);
        console.log('Image filenames:', fileNames);
    
        res.status(200).json({ status: 200, message: 'Submitted successfully'});
      });
}


module.exports = { addProduct }