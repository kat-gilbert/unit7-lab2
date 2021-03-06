import express from "express";
import BuildPizza from "../models/buildpizza";

const pizzaRoutes = express.Router();

pizzaRoutes.get("/", function(req, res){
    res.render('home'); 
});

pizzaRoutes.get("/specialtypizza", function(req, res) {
    let pizzaName:string = req.query.name as string;
    let pizzaPrice:number = parseFloat(req.query.price as string);

    res.render("specialtypizza", {pizzaName, pizzaPrice});
});

pizzaRoutes.get("/custompizza", function(req, res) {
    res.render("custompizza");
})

pizzaRoutes.get("/custompizzaconfirmation", function(req, res) {
    res.render("custompizzaconfirmation");
})

pizzaRoutes.post("/custompizzaconfirmation", function(req, res) {
    let newPizza: BuildPizza = {
        size: req.body.size as string,
        toppings: parseFloat(req.body.toppings),
        glutenFree: Boolean(req.body.glutenfree),
        specialInstructions: req.body.instructions as string
    }
    let freeDelivery: string = "";
    let pizzaPrice: number = 0;
    pizzaPrice.toFixed(2);

        if (newPizza.size === "large") {
            pizzaPrice = 12 + (1.25 * newPizza.toppings);
        }
        else if (newPizza.size === "medium") {
            pizzaPrice = 10 + (1 * newPizza.toppings);
        }
        else if (newPizza.size === "small") {
            pizzaPrice = 7 + (0.75 * newPizza.toppings);
        }

    if (newPizza.glutenFree === true ) {
        pizzaPrice = pizzaPrice += 2;

    }
    else {
        pizzaPrice = pizzaPrice;
    }
    let newGlutenFree = ""
    if (newPizza.glutenFree === true) {
        newGlutenFree = "Yes"
    } else {
        newGlutenFree = "No";
    }
    
    if (pizzaPrice >= 15) {
        freeDelivery = "Because your order meets the $15.00 minimum, you get FREE DELIVERY!";
    }

    res.render("custompizzaconfirmation", {newPizza, pizzaPrice, freeDelivery, newGlutenFree});
})

pizzaRoutes.get("/review", function(req, res) {
    res.render("review");
});

pizzaRoutes.post("/reviewconfirmation", function(req, res) {
    let name: string = req.body.name as string;
    let comment: string = req.body.comment as string;
    let rating: string = req.body.rating as string;

    res.render("reviewconfirmation", {name, comment, rating});
})

export default pizzaRoutes;