const mysql = require('../database/connection');

const addCategory = (req, res) => {

    const { category_name, category_for } = req.body;

    if(!category_name || !category_for) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `INSERT INTO dress_category(category_name, category_for) VALUES (?,?)`;

    mysql.query(query, [category_name, category_for], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        }

        return res.status(201).send({status: 201, message: 'Category Added Successfully'});
        
    })

}

const updateCategory = (req, res) => {

    const { category_id, category_name, category_for } = req.body;

    if(!category_name || !category_for || !category_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const updated_on = new Date();

    const query = `UPDATE dress_category SET category_name=?, category_for=?, updated_on=? WHERE id=?`;

    mysql.query(query, [category_name, category_for, updated_on, category_id], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        if(result.affectedRows!=0) {
            return res.status(200).send({status: 200, message: 'Category Updated Successfully'});
        }else {
            return res.status(401).send({status:401, message:'Category Not Found'});
        }

    })
    
}

const deleteCategory = (req, res) => {

    const category_id = req.body.category_id;

    if(!category_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `DELETE FROM dress_category WHERE id=?`;

    mysql.query(query, [category_id], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        if(result.affectedRows!=0) {
            return res.status(200).send({status: 200, message: 'Category Deleted Successfully'});
        }else {
            return res.status(401).send({status:401, message:'Category Not Found'});
        }

    })

}

const getCategory = (req, res) => {

    const query = `select id, category_name, category_for from dress_category`;

    mysql.query(query, (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        return res.status(200).send({status: 200, data:result});

    })

}


module.exports = { addCategory, updateCategory, deleteCategory, getCategory};