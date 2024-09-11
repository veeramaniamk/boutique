const multer = require('multer');
const mysql  = require('../database/connection');

let fileName="";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "..//boutique_backend//src//uploads//product_images//");
  },
  filename: (req, file, cb) => {
      fileName = Date.now() + '-' + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage }).array('product_images');

const addProduct = (req, res) => {


    upload(req, res, (err) => {

      const { designer_id, product_name,  product_description, material_id, product_assortment_id, gender_category, 
              embellishment, trim_border, sleeves, pattern, quantity, amount, colors, size } = req.body;

        if(!designer_id || !product_name || !product_description || !gender_category || !material_id || !product_assortment_id
           || !embellishment || !trim_border || !sleeves ||  !pattern || !quantity || !amount ) {
              return res.status(400).send({ status: 400, message: 'Fields cannot be empty!'});
        }

        if(!Array.isArray(colors) || !Array.isArray(size)) {
          return res.status(400).send({ status: 400, message: '!Color or Size Value Missing',size:size,color:colors });
        }
        
        if(size.length==0 || colors.length==0) {
          return res.status(400).send({ status: 400, message: 'Size or Color Empty' });
        }

        const checkSizeValue = size[0];

        if(!checkSizeValue.size || !checkSizeValue.quantity || !checkSizeValue.amount) {
          return res.status(400).send({ status: 400, message: 'Size value are empty' });
        }
        
        // for(let i=0;i<size.length;i++) {
        //   console.log(i+" "+size[i].quantity);
        //   console.log(i+" "+size[i].amount);
        //   console.log(i+" "+size[i].size);
        // }

        const file = req.files;

        if (err instanceof multer.MulterError) {
            return res.status(500).json({ status: 500, message: 'File upload error', error:err});
        } else if (err) {
            return res.status(500).json({ status: 500, message: 'An unknown error occurred', error:err.message});
        }
        if (!file || file.length === 0) {
            return res.status(400).json({ status: 400, message: 'Content or image(s) missing' });
        }

        // console.log("file");
        // console.log(file);
        // console.log("colors");
        // console.log(colors);
        // console.log("size");
        // console.log(size);

        let images  = [];
        let img_obj = {};

        for(let i=0;i<file.length;i++) {
           let img      = {};
           img.image_id = i + 1;
           img.image    = file[i].filename;
           images.push(img);
        }
        img_obj.images = images;

        console.log("images "+JSON.stringify(img_obj));

        let sizes = [];
        let size_obj = {};

        for(let i=0;i<size.length;i++) {

          let sizeValue      = {};
          sizeValue.size_id  = i + 1;
          sizeValue.size     = size[i].size;
          sizeValue.quantity = size[i].quantity;
          sizeValue.amount   = size[i].amount;

          sizes.push(sizeValue);

        }

        size_obj.size = sizes;

        console.log("size "+JSON.stringify(size_obj))

        let color_obj = {};
        color_obj.colors = colors;

        console.log("colors "+JSON.stringify(color_obj))

        // return res.status(200).json({ status: 200, message: 'Submitted successfully'});


        // return res.send({ok:'ok'});

        const addProductQuery = `INSERT INTO product(designer_id, product_name, product_description, gender_category, material_category, product_assortment, embellishment, trim, sleeves, pattern, images, colors, sizes, quantity, amount) VALUES (${designer_id}, '${product_name}', '${product_description}', ${gender_category}, ${material_id}, ${product_assortment_id}, '${embellishment}', '${trim_border}', '${sleeves}', '${pattern}', '${JSON.stringify(img_obj)}', '${JSON.stringify(color_obj)}', '${JSON.stringify(size_obj)}', ${quantity}, ${amount})`;
        
        mysql.query(addProductQuery, (err, result) => {
            
          if(err) return res.status(500).json({ status: 200, message: err.message, err:err});

          return res.status(200).json({ status: 200, message: 'Submitted successfully'});

          
          // const product_id = result[0].product_id;
          // if(product_id == 0) {
          //   return res.status(400).json({ status: 200, message: 'Prodect Not Add', size:result});
          // }

        //   let imageValue = ``;

        //   for(let i=0;i<file.length;i++) {
        //     imageValue += `(${product_id},'${file[i].filename}')`;
        //       if(file.length-1 != i) {
        //         imageValue +=`,`;
        //       }
        //   }

        //   let productImages = `INSERT INTO product_images(product_id, product_image) values `+ imageValue;
        //   // console.log(productImages);
        //   mysql.query(productImages, (err, result) => {
        //     if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
        //   })

        //   let colorValue = ``;

        //   for(let i=0;i<colors.length;i++) {
        //     colorValue += `(${product_id},'${colors[i]}')`;
        //       if(colors.length-1!=i) {
        //         colorValue +=`,`;
        //       }
        //   }

        //   let productColors = `INSERT INTO product_colors(product_id, color_name) VALUES ` + colorValue;
        //   mysql.query(productColors, (err, result) => {
        //     if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
        //   })

        //   let sizeValue = ``;

        //   for(let i=0;i<size.length;i++) {
        //     sizeValue += `(${product_id},'${size[i].size}', ${size[i].quantity}, ${size[i].amount})`;
        //       if(size.length-1!=i) {
        //         sizeValue +=`,`;
        //       }
        //   }

        //   let productSize = `INSERT INTO product_size( product_id, size, quantity, amount) VALUES ` + sizeValue;
        //   mysql.query(productSize, (err, result) => {
        //     if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});
        //   })

        })


      });
    
}

const getProduct = (req, res) => {

    const ip = req.connection.remoteAddress;
    // const ip = req.ip;
    // const ip = req.socket.remoteAddress;

    const add = req.headers['x-forwarded-for'];

    const query = `select * from product`;

    mysql.query(query, (err, result) => {
      if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});

      if(result.length==0) {
          return res.status(400).send({status:404, message: 'Assortment Not Found'});
      }
      
      const stringify = JSON.parse(result[0].images);

      // console.log(stringify.images.splice(1,1));

      stringify.images.forEach(element => {

        if(element.image_id == 1) {
            
        }
        
      });

      return res.status(200).send({data:stringify, ip:ip, add:add});


    });

}


module.exports = { addProduct, getProduct }