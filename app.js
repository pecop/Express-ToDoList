// jshint esversion6

const express = require("express");
const bodyPerser = require("body-perser");

const app = express();

app.set("view engine", "ejs")
app.use(bodyPerser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("list", {kindOfDay: day});
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
});