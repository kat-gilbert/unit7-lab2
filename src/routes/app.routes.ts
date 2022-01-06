import express from "express";

const appRoutes = express.Router();

appRoutes.get("/", function(req, res){
    res.render('home'); 
});

appRoutes.get("/review", function(req, res) {
    res.render("review");
});

appRoutes.get("/reviewconfirmation", function(req, res) {
    res.render("reviewconfirmation");
});

appRoutes.post("/review", function(req, res) {
    let name = req.body.name;
    let comment = req.body.comment;
    let rating = req.body.rating;

    res.render("reviewconfirmation", {name, comment, rating});
})


export default appRoutes;