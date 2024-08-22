const mysql = require('../database/connection');

const addproduct = (req ,res) =>{
    const [
        designer_id,
        product_name,
        product_description,
        material_category_name,
        dress_category_name,
        product_for,
        product_price,
        quantity,

     ] = req.body
     try {

        if (!designer_id || !product_name || !product_description || !material_category_name || !dress_category_name || !product_for || !product_price || !quantity) {
            res.send("field cannod be empty")
         }
    console.log("fedf");
    
     } catch (error) {
        res.send(error)
     }
      
    
}

module.exports = addproduct;