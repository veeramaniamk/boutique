const mysql = require('../database/connection');

function updateDesignerInformation(req, res) {

    const { user_id, name, phone, email, gender, speciality, activity_status, designer_role, experience, salary } = req.body;

    if(!user_id || !name || !phone || !email || !gender || !speciality || !activity_status || !designer_role || !experience || !salary) {
        return res.status(400).send({ status: 400, message: 'Fields cannot be empty!' });
    }

    const query = `UPDATE signup SET name=?, phone=?, email=?, gender=?, speciality=?, update_on=?, activty_status=?, designer_role=?, experience=?, salary=? WHERE  id =?`;
    try {

        const updated_on = new Date();

        mysql.query(query, [name, phone, email, gender, speciality, updated_on, activity_status, designer_role, experience, salary, user_id], (err, result) => {
    
            if(err) {
                console.log({ message:'Sql Error', error:err });
                return;
            }
    
            return res.status(200).send({nstatus:200, message:'Updated successfully' });
    
        });

    } catch(error) {
        res.status(500).send({status:500, error:error.message});
    }

}

module.exports = { updateDesignerInformation };