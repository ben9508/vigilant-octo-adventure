var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

//Route
app.get("/", function(req,res){
    res.render("search");
});

app.get("/results", function(req,res){
	var movie = req.query.search;
	var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + movie;
    request(url, function(error,response,body){
      if(!error && response.statusCode == 200){
   	    //res.send(body);
   		var data = JSON.parse(body)
   		//res.send(result["Search"][0]["Title"]);
   		res.render("results", {data: data});
   }
 });
});


//Server
 app.listen(3000, function(req,res){
 	console.log("SERVER IS LISTENING!!!");
 });


