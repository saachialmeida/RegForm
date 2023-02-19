const express = require('express');
const { Client } = require('pg');
const cors=require('cors');
const fs=require('fs')
const bodyparser=require('body-parser')

const connectionString = 'postgres://postgres:Finserv@2023@localhost:5432/shdb';
//"postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new Client({
    connectionString: connectionString
});
client.connect();
var app = express();
app.use(cors({
    origin:['http://localhost:4200','https://www.google.com/']
}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('port', process.env.PORT || 3000);



app.get('/', function (req, res, next) {
    fs.readFile(__dirname+'/'+'shexpress.html',(err,data)=> {
        res.end(data);
    });
});
app.post('/insert', function (req, res) {
    var name=req.body.name;
    var email=req.body.email;
   
    // var password=req.body.password;

    client.query(`insert into custab values('${name}','${email}')`, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send({"message":"Data Received"});
    });
    
});



app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});