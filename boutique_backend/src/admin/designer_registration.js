const mysql = require('../database/connection');

const { hash, genSalt } = require('bcryptjs');

async function designerRegisteration(req, res) {

    const { name, phone, email, gender, speciality, activity_status, designer_role, experience, salary, password } = req.body;

    try {

        const salt         = await genSalt(10);
        const password1    = await hash(password, salt);

        const user_type    = 110;

        const query =`INSERT INTO signup(name, phone, email, gender, speciality, user_type, password, activty_status, designer_role, experience, salary) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
       
        mysql.query(query, [ name, phone, email, gender, speciality, user_type, password1, activity_status, designer_role, experience, salary], (err, result) => {
            
            if(err) {
                const error = { message:'Error', error:err };
                console.log(error);
                return res.status(500).send({status:500, error:error.message});
            } 

            return res.status(201).send({status: 201, message: 'User Registered Successfully' });

        });

    } catch (error) {
        res.status(500).send({status:500, error:error.message});
    }

}


function registeration(req, res) {

    const { name, phone, email, gender, speciality, activity_status, designer_role, experience, salary, password } = req.body;

    if(!name || !phone || !email || !gender || !speciality || !activity_status || !designer_role || !experience || !salary || !password) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    try {

        const checkQuery = `SELECT * FROM signup WHERE email = '${email}'`;

        mysql.query(checkQuery, (err, result) => {
            if(err) {
                const error = { message:'Error', error:err };
                console.log(error);
                return res.status(500).send({status:500, error:error.message});
            } 

            if(result.length > 0) {
                return res.status(409).send({status:409, message:'User already exists'});
            } 

            designerRegisteration(req, res);

        });

    } catch (error) {
        res.status(500).send({status:500, error:error.message});
    }

}

module.exports = { registeration };