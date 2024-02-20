const express = require("express");
const bodyParser = require('body-parser');
const pug = require("pug");
const app = express();
const PORT = 3000;
let factObj = {};
const fruitFacts = [
  {
    fruitName: "apple",
    f1: "Apple trees take 4-5 years to produce their first fruit. A standard size apple tree starts bearing fruit 8-10 years after it is planted. A dwarf tree starts bearing fruit in 3-5 years.",
    f2: "Apples will ripen six to ten times faster at room temperature than if they were refrigerated.",
    f3: "It takes about 36 apples to create one gallon of apple cider.",
    url: "/apple.jpg"
  },  {
    fruitName: "banana",
    f1: "In 2012, a resident of Illinois managed to break a world record by peeling and consuming 8 whole bananas in 60 seconds.",
    f2: "The banana fruit got its name after being sold wrapped in aluminum foil for 10 cents at the 1876 Philadelphia World Fair.",
    f3: "If a person is allergic to bananas, or even avocados and chestnuts, they have an increased risk of being allergic to latex. Some say half of those allergic to latex are often allergic to bananas. This is due to the proteins within the banana.",
    url: "/banana.jpg"
  },  {
    fruitName: "grape",
    f1: "It takes about 2.5 pounds of grapes to make one bottle of wine.",
    f2: "There are more than 8,000 grape varieties from about 60 species. The main types are American and European.",
    f3: "Grapes come in many colors, including green, red, black, yellow, pink, and purple. `White` grapes are actually green.",
    url: "/grape.jpg"
  }
];

app.set("views", "./views");
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('./images'));

app.get("/imagedownload", (req, res) => {
    res.download(`./images/${factObj.fruitName}.jpg`);
})

app.get("/", (req, res) => {
  res.render("index", { title: "Fruits Page" });
});


app.get("/:fruit", (req, res) => {
  let fruit = req.params.fruit;
  factObj = fruitFacts.find(fName => fName.fruitName == fruit);
  res.render("fruit", { title: `${fruit} Page`, fruit: `${fruit}`, fact1: factObj.f1, fact2: factObj.f2, fact3: factObj.f3, url: factObj.url});
})
.post('/emailsignup', function(req,res){
    console.log(req.body);
  })


app.listen(PORT, () => console.log("App is running on Port: " + PORT));
