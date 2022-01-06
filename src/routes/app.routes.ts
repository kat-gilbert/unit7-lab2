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

appRoutes.get("/review", function(req, res) {
    let name = req.query.name;
    let comment = req.query.comment;
    let rating = req.query.rating;

    res.render("reviewconfirmation", {name, comment, rating});
})




export default appRoutes;