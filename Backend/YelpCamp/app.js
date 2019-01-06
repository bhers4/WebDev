var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get("/",function(req,res){
    console.log("Main Page");
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    var campgrounds = [
        { name: "Golden Ears",image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        { name: "Seymour",image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        { name: "Cypress",image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80"}
    ];
    console.log("Campgrounds");
    res.render("campgrounds",{campgrounds: campgrounds});
});

app.listen(8000,function(){
   console.log("Server has started");
});