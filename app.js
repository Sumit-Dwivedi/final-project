const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

const router=require('./routes/route')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use(router);

app.listen(3000);
