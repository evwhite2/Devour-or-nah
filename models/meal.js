orm = require("../controllers/orm");

var meal = {
    all: function(cb) {
        orm.all("meals", res=>{
            cb(res);
        });
    },

    create: function(col, val, cb){
        orm.create("meals", col, val, res=>{
            cb(res);
        });
    },

    update: function(colVals, condition, cb) {
        orm.update("meals", colVals, condition, res=>{
            cb(res);
        });
    },

    delete: function(condition, cb){
        orm.delete("meals", condition, res=>{
            cb(res);
        });
    }
};

module.exports = meal;