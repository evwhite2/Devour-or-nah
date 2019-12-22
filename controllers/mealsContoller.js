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
        , (result=>{
            res.json({id: result.ID})
        })
    );
        console.log(`new data inserted: ${req.body.txt}`)
        
});

router.put("/api/all/:id", (req, res)=>{
    
    var condition = "id = " + req.params.id;

    console.log("id: "+ condition);

    meal.update({
        devoured: req.body.devoured
        }, condition, result=>{
            if (result.changedRows == 0) {
                return res.status(404).end();
              } else {
                res.status(200).end();
              }
    })
    
});

router.delete("/api/all/:id", (req, res)=>{

    var condition = "id = " + req.params.id;

    meal.delete(condition, result=>{
        if (result.affectedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        });
});

module.exports = router;