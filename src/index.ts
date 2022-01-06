import express from "express";
import cors from "cors";
import pizzaRoutes from "./routes/pizza-routes";
import path from "path";
import appRoutes from "./routes/app.routes";
import reviewRoute from "./routes/app.routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/", appRoutes);
app.use("/", pizzaRoutes);


app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, function() {
    console.log(`Listening on ${port}`);
})