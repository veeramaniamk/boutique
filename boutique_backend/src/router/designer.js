const express           = require('express');
const router            = express.Router();
const material_category = require('../designer/material_category');
const dress_category    = require('../designer/dress_category');
const product           = require('../designer/add_product');
const gender           = require('../designer/gender');

//Material Category
router.post('/add_material_category', material_category.addCategory);
router.post('/update_material_category', material_category.updateCategory);
router.post('/delete_material_category', material_category.deleteCategory);
router.get('/get_material_category', material_category.getCategory);

//Dress Category
router.post('/add_dress_category', dress_category.addCategory);
router.post('/update_dress_category', dress_category.updateCategory);
router.post('/delete_dress_category', dress_category.deleteCategory);
router.get('/get_dress_category', dress_category.getCategory);

//Gender Category
router.post('/add_gender', gender.addGender);
router.post('/update_gender', gender.updateGender);


//Add Product
router.post('/add_product', product.addProduct);

module.exports = router;