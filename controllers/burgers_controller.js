const router= require("express").Router();
const model= require("../models/burgers.js");


router.get("/", (req,res) => {
    // model.getBurgers((err, data) => {
    //     if(err) throw err;
    //     const hbsObject = {
    //       burgers: data,
    //     };
        // console.log('hbsObject', hbsObject);
        res.render('index');
    // });

});

router.get("/burgers", (req, res) => {
    model.getBurgers((err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

// get back confirmation obj
router.post("/burger", (req, res) => {
    const burgerName= req.body.burger_name;
    model.addBurger(burgerName, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

router.post("/burger/devour", (req, res) => {
    const burgerID= req.body.id;
    model.devourBurger(burgerID, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

module.exports= router;


