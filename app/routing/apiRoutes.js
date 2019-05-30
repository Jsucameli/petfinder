// Global Variables
var pets = require("../data/pets");

module.exports = function(app){
    app.get("/api/pets",function(req,res){
        res.json(pets);
    });
    app.post("/api/pets",function(req,res){
        pets.push(req.body);
        res.json(req.body);
    });
};
