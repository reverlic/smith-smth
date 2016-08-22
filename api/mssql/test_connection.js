    var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'sqluser',  
        password: 'Mycos0027',  
        server: 'localhost',  
        // If you are on Microsoft Azure, you need this:  
        //options: {encrypt: true, database: 'AdventureWorks'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
    });  
