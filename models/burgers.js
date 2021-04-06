const orm = require("../config/orm.js");

function getBurgers(callback){
    orm.selectAll(callback)
}

function addBurger(burger_name, callback){
    orm.insertOne(burger_name, callback);
}

function devourBurger(id, callback){
    orm.updateOne(id, callback);
}

module.exports= {getBurgers, addBurger, devourBurger};
