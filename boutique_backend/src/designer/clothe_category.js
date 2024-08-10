const mysql = require('../database/connection');

const addCategory = (req, res) => {

    const { category_name, category_for } = req.body;

    if(!category_name || !category_for) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `INSERT INTO clothe_category(cloth_name, category_for) VALUES (?,?)`;

    mysql.query(query, [category_name, category_for], (err, result) => {

        if(err) {
            console.log({ message:'Sql Error', error:err });
            return;
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

    const query = `UPDATE clothe_category SET cloth_name=?, category_for=?, updated_on=? WHERE id=?`;

    mysql.query(query, [category_name, category_for, updated_on, category_id], (err, result) => {

        if(err) {
            console.log({ message:'Sql Error', error:err });
            return;
        }

        return res.status(200).send({status: 200, message: 'Category Updated Successfully'});

    })
    
}

const deleteCategory = (req,res) => {

    const category_id = req.body.category_id;

    if(!category_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `DELETE FROM clothe_category WHERE id=?`;

    mysql.query(query, [category_id], (err, result) => {

        if(err) {
            console.log({ message:'Sql Error', error:err });
            return;
        }

        return res.status(200).send({status: 200, message: 'Category Deleted Successfully'});

    })

}

const getCategory = (req, res) => {

    const query = `select id, cloth_name, category_for from clothe_category`;

    mysql.query(query, (err, result) => {

        if(err) {
            console.log({ message:'Sql Error', error:err });
            return;
        }

        return res.status(200).send({status: 200, data:result});

    })

}


module.exports = { addCategory, updateCategory, deleteCategory, getCategory};