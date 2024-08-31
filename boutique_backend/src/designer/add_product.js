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

      const { 
        designer_id, product_name,  product_description, material_id, product_assortment_id, gender_category, 
        embellishment, trim_border, sleeves, pattern, quantity, amount, colors, size } = req.body;

        if(!designer_id || !product_name || !product_description || !gender_category || !material_id || !product_assortment_id || !embellishment
            || !trim_border || !sleeves ||  !pattern || !quantity || !amount ) {
              return res.status(400).send({ status: 400, message: 'Fields cannot be empty!'});
        }
    
        if(!Array.isArray(colors) || !Array.isArray(size)) {
          return res.status(400).send({ status: 400, message: '!Color or Size Value Missing' });
        }
        
        if(size.length==0 || colors.length==0) {
          return res.status(400).send({ status: 400, message: 'Size or Color Empty' });
        }

        const checkSizeValue = size[0];

        if(!checkSizeValue.size || !checkSizeValue.quantity || !checkSizeValue.amount) {
          return res.status(400).send({ status: 400, message: 'Size value are empty' });
        }
        
        for(let i=0;i<size.length;i++) {
          console.log(i+" "+size[i].quantity);
          console.log(i+" "+size[i].amount);
          console.log(i+" "+size[i].size);
        }

        const file = req.files;

        if (err instanceof multer.MulterError) {
            return res.status(500).json({ status: 500, message: 'File upload error', error:err});
        } else if (err) {
            return res.status(500).json({ status: 500, message: 'An unknown error occurred', error:err.message});
        }
        if (!file || file.length === 0) {
            return res.status(400).json({ status: 400, message: 'Content or image(s) missing' });
        }

        const addProductQuery = `select add_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) as product_id`;
        
        mysql.query(addProductQuery, [designer_id, product_name, product_description, gender_category, material_id,
           product_assortment_id, embellishment, trim_border, sleeves, pattern, quantity, amount], (err, result) => {
          if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
          
          const product_id = result[0].product_id;
          if(product_id == 0) {
            return res.status(400).json({ status: 200, message: 'Prodect Not Add', size:result});
          }

          let imageValue = ``;

          for(let i=0;i<file.length;i++) {
            imageValue += `(${product_id},'${file[i].filename}')`;
              if(file.length-1 != i) {
                imageValue +=`,`;
              }
          }

          let productImages = `INSERT INTO product_images(product_id, product_image) values `+ imageValue;
          // console.log(productImages);
          mysql.query(productImages, (err, result) => {
            if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
          })

          let colorValue = ``;

          for(let i=0;i<colors.length;i++) {
            colorValue += `(${product_id},'${colors[i]}')`;
              if(colors.length-1!=i) {
                colorValue +=`,`;
              }
          }

          let productColors = `INSERT INTO product_colors(product_id, color_name) VALUES ` + colorValue;
          mysql.query(productColors, (err, result) => {
            if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
          })

          let sizeValue = ``;

          for(let i=0;i<size.length;i++) {
            sizeValue += `(${product_id},'${size[i].size}', ${size[i].quantity}, ${size[i].amount})`;
              if(size.length-1!=i) {
                sizeValue +=`,`;
              }
          }
          console.log(sizeValue);

          let productSize = `INSERT INTO product_size( product_id, size, quantity, amount) VALUES ` + sizeValue;
          mysql.query(productSize, (err, result) => {
            if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
          })

        return res.status(200).json({ status: 200, message: 'Submitted successfully'});

        })

      });
}


module.exports = { addProduct }