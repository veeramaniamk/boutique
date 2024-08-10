const express    = require('express');
const router     = express.Router();
const { addCategory, updateCategory, deleteCategory, getCategory } = require('../designer/clothe_category')

router.post('/add_clothe_category', addCategory);
router.post('/update_clothe_category', updateCategory);
router.post('/delete_clothe_category', deleteCategory);
router.post('/get_clothe_category', getCategory);

module.exports = router;