const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '192.168.',
    port:3306, //especificar a porta causa erro de conexão time out
    //socketPath: ' "/var/run/mysqld/mysqld.sock"',
    user:'',
    password:'',
    database:''
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('conectou');
    //createTable(connection);
});
/*
function createTable(conn){

    const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                "ID int NOT NULL AUTO_INCREMENT,\n"+
                "Nome varchar(150) NOT NULL,\n"+
                "CPF char(11) NOT NULL,\n"+
                "PRIMARY KEY (ID)\n"+
                ");";
    
    conn.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');
    });
}*/