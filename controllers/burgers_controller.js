const router= require("express").Router();
const model= require("../models/burgers.js");


router.get("/", (req,res) => {
    res.render('index');

});

router.get("/burgers", (req, res) => {
    model.getBurgers((err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

// get back confirmation obj. this function is the request to add to the undevoured list
router.post("/burger", (req, res) => {
    const burgerName= req.body.burger_name;
    model.addBurger(burgerName, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

//This sends the request the devoured burger list
router.post("/burger/devour", (req, res) => {
    const burgerID= req.body.id;
    model.devourBurger(burgerID, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

module.exports= router;


