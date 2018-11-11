// =======================================================
//Dependencies
const htmlRoutes = require("./app/routing/htmlRoutes")
const apiRoutes = require("./app/routing/apiRoutes")
const express = require("express");

// =======================================================
// Express Setup
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// =======================================================
//Routes
app.use("/", htmlRoutes); 
app.use("/api", apiRoutes);
app.get("*", (req, res)=>res.redirect("/"))
// =======================================================
//Listener
app.listen(PORT, () =>
console.log("App listening on PORT " + PORT)
)


