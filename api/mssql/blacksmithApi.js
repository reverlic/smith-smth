
module.exports = {
    getAllCharacter:getAllCharacter,
    stamp:stamp,
    createBlackSmith:createBlackSmith,
    getCharacter:getCharacter,
    updateBlackSmith:updateBlackSmith,
    createMap:createMap,
    getAllMap:getAllMap,
    getMap:getMap,
    updateMap:updateMap

}

//var DbContext = function(){
    var Connection = require('tedious').Connection;  
    var isDbWorks = false;
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
        isDbWorks = true;
    });  

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
      
    function getAllCharacter(callback) {
        var result = [];  
        request = new Request("SELECT * FROM dbo.Character", function(err) {  
        if (err) {  
            console.log(err);
        }  
        else{
            callback(result)
        }
        });  

        request.on('row', function(rowObject) {  
            var row = {}
            rowObject.forEach(function(column){
                row[column.metadata.colName] = column.value
            })
            result.push(row)
        });  

        request.on('done', function(rowCount, more,rows) {  
            console.log('request event done');      
        });  

        connection.execSql(request);  
    }

    function getCharacter(smith,callback) {
        var result = [];  
        request = new Request("SELECT * FROM dbo.Character WHERE ID='"+ smith.Id +"'", function(err) {  
        if (err) {  
            console.log(err);
        }  
        else{
            callback(result)
        }
        });  

        request.on('row', function(rowObject) {  
            var row = {}
            rowObject.forEach(function(column){
                row[column.metadata.colName] = column.value
            })
            result.push(row)
        });  

        request.on('done', function(rowCount, more,rows) {  
            console.log('request event done');      
        });  

        connection.execSql(request);  
    }

    function stamp(callback) {
        var result;  
        request = new Request("INSERT INTO (UId,Timestamp) VALUES('"+ UId +"','"+ Date.now() +"')", function(err) {  
        if (err) {  
            console.log(err);
        }  
        else{
            callback(result)
        }
        });  

        request.on('row', function(response) {  
            result = response
        });  

        connection.execSql(request);  
    }

    function updateBlackSmith(smithModel,callback){
        var result;
        request = new Request("UPDATE CHARACTER SET NAME='"+ smithModel.Name +"',MONEY='"+ smithModel.Money +"',RANK='"+ smithModel.Rank +"' WHERE Id='"+ smithModel.Id +"';" ,function(err){
            if(err){
                err.isError = true;
                callback(err);
            }else{
                callback({Id:smithModel.Id});
            }
        })

        request.on('row',function(response){
            result = response;
        })

        connection.execSql(request);
    }

    function createBlackSmith(smithModel,callback){
        var result;
        request = new Request("insert into dbo.Character (Name,Money,Rank) VALUES('"+ smithModel.Name +"','"+ smithModel.Money +"','"+ smithModel.Rank +"'); select @@identity" ,function(err){
            if(err){
                err.isError = true;
                callback(err);
            }else{
                callback({Id: result[0].value});
            }
        })

        request.on('row',function(response){
            result = response;
        })

        connection.execSql(request);
    }

    function createMap(MapData,callback){
        var result;
        request = new Request("insert into dbo.Map_db (name,layout) VALUES('"+ MapData.name +"','"+ MapData.layout +"'); select @@identity" ,function(err){
            if(err){
                err.isError = true;
                callback(err);
            }else{
                callback({id: result[0].value});
            }
        })

        request.on('row',function(response){
            result = response;
        })

        connection.execSql(request);
    }


    function getAllMap(callback) {
        var result = [];  
        request = new Request("SELECT id,name FROM dbo.Map_db", function(err) {  
        if (err) {  
            console.log(err);
        }  
        else{
            callback(result)
        }
        });  

        request.on('row', function(rowObject) {  
            var row = {}
            rowObject.forEach(function(column){
                row[column.metadata.colName] = column.value
            })
            result.push(row)
        });  

        request.on('done', function(rowCount, more,rows) {  
            console.log('request event done');      
        });  

        connection.execSql(request);  
    }

    
    function getMap(payload,callback) {
        var result = [];  
        request = new Request("SELECT * FROM dbo.Map_db WHERE id='"+ payload.id +"'", function(err) {  
        if (err) {  
            console.log(err);
        }  
        else{
            callback(result[0])
        }
        });  

        request.on('row', function(rowObject) {  
            var row = {}
            rowObject.forEach(function(column){
                row[column.metadata.colName] = column.value
            })
            row.layout = JSON.parse(row.layout);
            result.push(row)
        });  

        request.on('done', function(rowCount, more,rows) {  
            console.log('request event done');      
        });  

        connection.execSql(request);  
    }

    function updateMap(payload,callback){
        var result;
        request = new Request("UPDATE dbo.Map_db SET NAME='"+ payload.name +"',layout='"+ payload.layout +"' WHERE Id='"+ payload.id +"';" ,function(err){
            if(err){
                err.isError = true;
                callback(err);
            }else{
                callback({id:payload.id});
            }
        })

        request.on('row',function(response){
            result = response;
        })

        connection.execSql(request);
    }
//};
