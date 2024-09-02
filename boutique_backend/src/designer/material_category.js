const mysql = require('../database/connection');

const addCategory = (req, res) => {

    const { category_name, gender_id } = req.body;

    if(!category_name || !gender_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `INSERT INTO material_category(cloth_name, gender_category) VALUES (?, ?)`;

    mysql.query(query, [category_name, gender_id], (err, result) => {

        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).send({ status: 409, message: 'Duplicate entry: This category and gender combination already exists.' });
            }
            const error = { message: 'Error', error: err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        }

        return res.status(201).send({status: 201, message: 'Category Added Successfully'});
        
    })

}

const updateCategory = (req, res) => {

    const { category_id, category_name, gender_id, updater_id } = req.body;

    if(!category_name || !gender_id || !category_id || !updater_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const updated_on = new Date();

    const query = `UPDATE material_category SET cloth_name=?, gender_category=?, updated_on=?, updater_id=? WHERE id=? and product_active=true`;

    mysql.query(query, [category_name, gender_id, updated_on, category_id, updater_id], (err, result) => {

        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).send({ status: 409, message: 'Duplicate entry: This category and gender combination already exists.' });
            }
            const error = { message: 'Error', error: err };
            console.log(error);
            return res.status(500).send({ status: 500, error: error.message });
        } 

        if(result.affectedRows!=0) {
            return res.status(200).send({status: 200, message: 'Category Updated Successfully'});
        }else {
            return res.status(401).send({status:401, message:'Category Not Found'});
        }

    })
    
}

const deleteCategory = (req, res) => {

    const { category_id, updater_id } = req.body;

    if(!category_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const updated_on = new Date();

    const query = `UPDATE material_category SET product_active=false, updated_on=?, updater_id=?  WHERE id=? and product_active=true`;

    mysql.query(query, [updated_on, updater_id, category_id], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, message:error.message});
        } 

        if(result.affectedRows!=0) {
            return res.status(200).send({status: 200, message: 'Category Deleted Successfully'});
        }else {
            return res.status(401).send({status:401, message:'Category Not Found'});
        }

    })

}

const getCategory = (req, res) => {

    const gender_id = req.query.gender_id;

    let query = ``;

    if(!gender_id) {
        query = `select id, cloth_name, gender_category from material_category where product_active=true`;
    } else {

        if(Number.isInteger(gender_id)) {
            return res.status(400).send({ status: 400, message: 'ID Must Be Number' });
        }

        query = `select id, cloth_name, gender_category from material_category where product_active=true and gender_category=${gender_id}`;

    }

    mysql.query(query, (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, message:error.message});
        }

        return res.status(200).send({status: 200, message: 'Success', data:result});

    })

}


module.exports = { addCategory, updateCategory, deleteCategory, getCategory};