const express           = require('express');
const router            = express.Router();

//First Call the file here 
const material_category = require('../designer/material_category');
// const dress_category    = require('../designer/dress_category');
// const product           = require('../designer/add_product');
const product           = require('../designer/add_product_test');
const gender            = require('../designer/gender');
const productAssortment = require('../designer/product_assortment');
const get_product       = require('../designer/get_product');

// Next Add the function here
//Material Category
router.post('/add_material_category', material_category.addCategory);
router.post('/update_material_category', material_category.updateCategory);
router.post('/delete_material_category', material_category.deleteCategory);
router.get('/get_material_category', material_category.getCategory);

//Dress Category
// router.post('/add_dress_category', dress_category.addCategory);
// router.post('/update_dress_category', dress_category.updateCategory);
// router.post('/delete_dress_category', dress_category.deleteCategory);
// router.get('/get_dress_category', dress_category.getCategory);

//Gender Category
router.post('/add_gender', gender.addGender);
router.post('/update_gender', gender.updateGender);
router.post('/delete_gender', gender.deleteGender);
router.post('/read_gender', gender.getGender);

//Product Assortment Category
router.post('/add_assortment', productAssortment.addAssortment);
router.post('/update_assortment', productAssortment.updateAssortment);
router.post('/delete_assortment', productAssortment.deleteAssortment);
router.post('/read_assortment', productAssortment.getAssortment);

//Add Product
router.post('/add_product', product.addProduct);
router.post('/get_product', get_product.get_product);
router.post('/get_single_pro', get_product.get_single_product);
// router.post('/get_product_images', get_product.get_product_images);
router.get('/test_get_product', product.getProduct);


module.exports = router;