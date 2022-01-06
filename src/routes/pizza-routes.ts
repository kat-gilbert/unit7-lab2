import express from "express";
import BuildPizza from "../models/buildpizza";
import SpecialtyPizza from "../models/specialtypizza";

const pizzaRoutes = express.Router();

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
        size: req.body.size,
        toppings: parseFloat(req.body.toppings),
        glutenFree: req.body.glutenfree,
        specialInstructions: req.body.instructions
    }

    let pizzaPrice: number = 0;
    let freeDeliveryIsTrue: boolean = false;

        if (newPizza.size === "large") {
            pizzaPrice = 12 + (1.25 * newPizza.toppings);
        }
        else if (newPizza.size === "medium") {
            pizzaPrice = 10 + (1 * newPizza.toppings);
        }
        else if (newPizza.size === "small") {
            pizzaPrice = 7 + (0.75 * newPizza.toppings);
        }

    if (req.body.glutenfree === true ) {
        pizzaPrice = pizzaPrice += 2;
    }
    else {
        pizzaPrice = pizzaPrice;
    }

    if (pizzaPrice >= 15) {
        freeDeliveryIsTrue = true;
    }

    res.render("custompizzaconfirmation", {newPizza});
})


export default pizzaRoutes;