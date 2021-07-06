const express = require('express');
const hbs = require('hbs')
const app = express();
const path = require('path');

// initializing server port
const port = process.env.PORT || 3000;

// view location declaration
const virePath = path.join(__dirname, "../templates/views")

//variable declarations
const staticPath= path.join(__dirname, "../public");

// partials path declarations
const partialPath = path.join(__dirname,"../templates/partials")

// setting the view engine hbs
app.set('view engine','hbs');

// setting path for view directory
app.set('views',virePath);

// registering partials
hbs.registerPartials(partialPath);

// using static website
app.use(express.static(staticPath));

// home route
app.get("/", (req, res)=>{
    res.render("index")
})

// about route
app.get("/about", (req, res)=>{
    res.render("about")
})

// weather route
app.get("/weather", (req, res)=>{
    res.render("weather");
})

// 404 route
app.get("*", (req, res)=>{
    res.render("404",{
        errorcode:404
    })
})

// listening to the server
app.listen(port, ()=>{
console.log(`server running at port ${port}`)
})