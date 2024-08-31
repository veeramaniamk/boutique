const mysql = require('../database/connection');

const addAssortment = (req, res) => {

    const { category_name, gender_category } = req.body;

    if(!category_name) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `INSERT INTO product_assortment (category_name, gender_category) VALUES (?, ?)`;

    mysql.query(query, [category_name, gender_category], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        }

        return res.status(201).send({status: 201, message: 'Assortment Added Successfully'});
        
    })

}

const updateAssortment = (req, res) => {

    const { id, category_name, gender_category, updater_id } = req.body;

    if(!category_name || !id || !updater_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const updated_on = new Date();

    const query = `UPDATE product_assortment SET category_name=?, gender_category=?, updated_on=?, updater_id=? WHERE id=? AND category_active=True `;

    mysql.query(query, [category_name, gender_category, updated_on, updater_id,  id], (err, result) => {

        if(err) {
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        if(result.affectedRows!=0) {
            return res.status(200).send({status: 200, message: 'Assortment Updated Successfully'});
        }else {
            return res.status(401).send({status:401, message:'Assortment Not Found'});
        }

    })
    
}

const deleteAssortment = (req, res) => {

    const { id, updater_id } = req.body;

    if(!category_id) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const updated_on = new Date();

    const query = `UPDATE product_assortment SET category_active=false, updated_on=?, updater_id=?  WHERE id=? AND category_active=True`;

    mysql.query(query, [updated_on, updater_id, id], (err, result) => {

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

const getGender = (req, res) => {

    const query = `select category_id, category_name from gender_category`;

    mysql.query(query, (err, result)=>{

        if(err){
            const error = { message:'Error', error:err };
            console.log(error);
            return res.status(500).send({status:500, error:error.message});
        } 

        return res.status(200).send({status: 200, data:result});

    })

}

module.exports = {addAssortment, updateAssortment, deleteAssortment, getGender};