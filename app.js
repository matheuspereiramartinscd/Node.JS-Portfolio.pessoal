const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
  
app.get("/", function (req, res) {
    res.render("home", {

    })
})

app.get("/about", function (req, res) {
    res.render("about", {

    })
})

app.get("/portfolio", function (req, res) {
    res.render("portfolio", {

    })
})

app.get("/contato", function (req, res) {
    res.render("contato", {

    })
})

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})

