import express from "express";
import cors from "cors";
import path from "path";
import pizzaRoutes from "./routes/pizza-routes";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/", pizzaRoutes);

app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, function() {
    console.log(`Listening on ${port}`);
})