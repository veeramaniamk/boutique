const mysql = require('../database/connection');

const addGender = (req, res) => {

    const { category_name } = req.body;

    if(!category_name) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `INSERT INTO gender_category (category_name) VALUES (?)`;

    mysql.query(query, [category_name], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        }

        return res.status(201).send({status: 201, message: 'Category Added Successfully'});
        
    })

}

const updateGender = (req, res) => {

    const { category_id, category_name, updater_id } = req.body;

    if(!category_name || !category_id || !updater_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const updated_on = new Date();

    const query = `UPDATE gender_category SET category_name=?, updated_on=?, updater_id=? WHERE category_id=?`;

    mysql.query(query, [category_name, updated_on, updater_id, category_id], (err, result) => {

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

const deleteGender = (req, res) => {

    const category_id = req.body.category_id;

    if(!category_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `DELETE FROM gender_category WHERE category_id=?`;

    mysql.query(query, [category_id], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        if(result.affectedRows!=0) {
            return res.status(200).send({status: 200, message: 'Gender Deleted Successfully'});
        }else {
            return res.status(401).send({status:401, message:'Gender Not Found'});
        }

    })

}

const getGender = (req, res) => {

    const query = `select category_id, category_name from gender_category`;

    mysql.query(query, (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        return res.status(200).send({status: 200, data:result});

    })

}


module.exports = { addGender, updateGender, deleteGender, getGender};