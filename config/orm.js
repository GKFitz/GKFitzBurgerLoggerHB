const db = require ("./connection.js");



function selectAll(callback){
    db.query("Select * FROM burgers", callback)
}




function insertOne(burger_name, callback){
    db.query(`Insert into burgers (burger_name, devoured) Values("${burger_name}", 0)`, callback);
    

}


function updateOne(id, callback){
    db.query(`Update burgers set devoured = 1 Where id = ${id}`, callback);
}

module.exports= { selectAll, insertOne, updateOne };