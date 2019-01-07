var express = require('express');
var app = express();
var bodyparser = require("body-parser");

var campgrounds = [
    { name: "Golden Ears",image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    { name: "Seymour",image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    { name: "Cypress",image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80"},
    { name: "Golden Ears",image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    { name: "Seymour",image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
    { name: "Cypress",image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80"}
];

app.use(express.static("public")); // Tells Express to use the CSS files in public
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    // console.log("Main Page");
    res.render("landing");
});

app.post("/campgrounds",function(req,res){
    var name = req.body.name;
    var img = req.body.image;
    var newCampground = {
      name: name,
      image: img
    };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
   res.render("new");
});

app.get("/campgrounds",function(req,res){
    // console.log("Campgrounds");
    res.render("campgrounds",{campgrounds: campgrounds});
});

app.listen(8000,function(){
   console.log("Server has started");
});