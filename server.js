const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");


// app.use((req, res, next) => {
//     res.render("maintenance.hbs");
    
// });

app.use(express.static(__dirname + "/public"));

//console.log(new Date().toString());
hbs.registerHelper("getCurrentYear", () => {
   return new Date().getFullYear(); 
});


app.get("/", (req, res) => {
    res.render("home.hbs", {
        pageTitle: "Home",
        welcomeMessage: "Hey there! am using Nodejs."
    });
});

app.get("/about", (req, res) => {
    res.render("about.hbs", {
        pageTitle: "About Page" 
    });
});

app.get("/bad", (req, res) => {
    res.send({
        errorMessage: "bad message"
    });
});

app.listen(3000,() =>{
    console.log(`App is running on port ${port}`);
});

