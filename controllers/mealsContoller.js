var express = require("express");

var router = express.Router();

var meal = require("../models/meal");

router.get("/", (req, res)=>{
    meal.all(data =>{
      var dataObj = 
        {
            meals: data
        };
    console.log(dataObj)
    res.render("index", dataObj);
    });
});

//API routes
router.get("/api/all", (req, res)=>{
    meal.all(data=>{
    res.json(data);
    });
});

router.post("/api/all", (req, res)=>{

    meal.create(
        ["txt", "devoured"],
        [req.body.txt, req.body.devoured] 
        ), (result=>{
            res.json({id: result.ID})
        });
        console.log(`new data inserted: ${req.body.txt}`)
        
});

module.exports = router;