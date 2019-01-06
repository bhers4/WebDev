var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(express.static("public")); // Tells Express to use the CSS files in public
app.set("view engine", "ejs"); // lets us say just home instead of home.ejs in response.render()
app.use(bodyParser.urlencoded({extended: true})); // Makes req.body work

var friends = ["Paige","Ben"];

// // Request demo
// request("http://www.google.com",function(error,response,body){
//     if(!error && response.statusCode==200)
//     {
//         var parsedData = JSON.parse(body);
//         console.log(parsedData);
//     }
//     else
//     {
//         console.log("Something went wrong");
//         console.log(error);
//     }
// });

app.get("/",function(request, response){ // Can shorten request and response to req, res
    response.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("animals",{
        thingVar: thing
    });
});

app.get("/friends",function(req, res) {
    res.render("friends",{friends:friends});
});

app.post("/addfriend",function(req,res){
    var newFriend = req.body.newfriend;
    // console.log(req.body.newfriend);
    friends.push(newFriend);
    res.redirect("/friends");
});


app.get("/posts",function(req, res) {
    var posts = [ // Showing we can pass objects
        { title: "Post1", author: "Susy"},
        { title: "Post2", author: "Bob"},
        { title: "Post3", author: "Gus"}];

    res.render("posts",{posts:posts});
});


// Tell Express to listen for Requests
app.listen(8000, function(){
    console.log("Server has started");
});
