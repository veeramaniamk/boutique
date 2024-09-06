const mysql = require('../database/connection');


const get_product = (req, res) => {

    const query = `
    select p.product_id, p.designer_id, p.product_name, p.product_description, p.embellishment, p.trim, p.sleeves, p.pattern, p.quantity, p.amount as price, gender.category_id as gender_id, gender.category_name as gender, material.id as material_id , material.cloth_name as material_name, assort.id as assortment_id, assort.category_name as assortment_name from product p inner join gender_category gender on p.gender_category = gender.category_id inner join material_category material on material.id = p.material_category inner join product_assortment assort on assort.id = p.product_assortment 
    `;

    mysql.query(query, (err, result) => {
        if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});

        if(result.length==0) {
            return res.status(40).send({status:404, message: 'Assortment Not Found'});
        }

        const data = [];

         result.forEach(e => {

            const info                  = {};
                info.product_id             = e.product_id;
                info.designer_id            = e.designer_id;
                info.product_name           = e.product_name;
                info.product_description    = e.product_description;
                info.embellishment          = e.embellishment;
                info.trim                   = e.trim;
                info.sleeves                = e.sleeves;
                info.pattern                = e.pattern;
                info.quantity               = e.quantity;
                info.price                  = e.price;
                info.gender_id              = e.gender_id;
                info.gender                 = e.gender;
                info.material_id            = e.material_id;
                info.material_name          = e.material_name;
                info.assortment_id          = e.assortment_id;
                info.assortment_name        = e.assortment_name;
    
                const img                   = [];

                const query = `SELECT image_id, product_id, product_image FROM product_images WHERE product_id = ${e.product_id}`;
            
                mysql.query(query, (err, result) => {
                    if(err) console.log(err);
                    
                })
                    
                img.push(result);
                info.images                 = img;   
                data.push(info);

            
        });

        return res.send({result:data});
    })

}

const test = (req, res) => {
    const query = `SELECT image_id, product_id, product_image FROM product_images WHERE product_id = 19`;

    fun(query, (err, result) => {
        if (err) {
           return res.status(500).json({ status: 200, message: err.message});
        }


       
    });
}

const fun = (query, callback) => {
    mysql.query(query, (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
}

 const get_product_images = async (req, res) => {

    function fetchData() {
        return new Promise((resolve, reject) => {
          const query = 'SELECT * FROM product_images';
          mysql.query(query, (error, results) => {
            if (error) return reject(error);
            resolve(results);
          });
        });
      }
      let data;
      async function getData() {
        try {
          data = await fetchData();
          return data;
        } catch (err) {
          console.error('Error:', err);
        }
      }
    //   getData();

    let a ;

       getData().then((data)=>{a=data });
      await console.log(a) // Use the data here

      


    const query = `SELECT image_id, product_id, product_image FROM product_images WHERE product_id = 19`;

    // console.log(fetchData())

    return res.send({d:fetchData()});

    mysql.query(query, (err, result) => {
        if(err) return res.status(500).json({ status: 200, message: 'Sql Error', err:err});

        if(result.length==0) {
            return res.status(404).send({status:404, message: 'Assortment Not Found'});
        }

        return res.status(404).send({status:404, message: 'Success', data:result});

        
    })


}

module.exports = { get_product, get_product_images }