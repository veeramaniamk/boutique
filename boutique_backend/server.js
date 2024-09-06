const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');

const user              = require('./src/router/user');
const designer          = require('./src/router/designer');
const admin             = require('./src/router/admin');

const app               = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{res.send("BOUTIQUE")});

app.use('/asserts', express.static('C:\\Node Js\\SIMATS\\boutique\\src\\uploads\\profile\\'));
app.use('/images', express.static('C:\\Node Js\\SIMATS\\boutique\\src\\uploads\\product_images\\'));

app.use('/user', user);
app.use('/admin', admin);
app.use('/designer', designer);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{console.log(`http://localhost:${PORT}/`)});