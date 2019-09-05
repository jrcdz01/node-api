const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;//porta padrão
const mysql = require('mysql');

//configuração do body parser para receber POSTS
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

//definindo rotas
const router = express.Router();
router.get('/',(req,res)=>res.json({message: 'Funcionando'}));
app.use('/',router);

app.listen(port);
console.log('API funcionando');

router.get('/jogos',(req, res)=>{
    execSQL('SELECT * FROM jogo',res);
})

// Função que execulta consultas ao BD
function execSQL(sqlQry, res){
    const connection = mysql.createConnection({
        host: 'localhost',
        port:3306,
        user:'jrcdz',
        password:'root',
        database:'compgpu'
    });

    connection.query(sqlQry, function(error, results, fields){
        if(error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}