const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//middleware
app.use(express.static("client/build"));
app.use(cookieParser());
app.use(bodyParser.json());
var uniqueID = () => "_" + Math.random().toString(36).substr(2, 9);

let names = [];
let getWinners = () => {
  var winner1 = names[Math.floor(Math.random() * names.length)];
  var winner2 = names[Math.floor(Math.random() * names.length)];
  return [winner1, winner2];
};

//routes
app.post("/add-names", (req, res) => {
  const { namesToAdd } = req.body;

  for (let i = 0; i < namesToAdd.length; i++) {
    names.push(namesToAdd[i]);
  }

  res.send({ success: true, addedNames: namesToAdd, allName: names });
});

app.get("/get-names", (req, res) => {
  res.send({ names });
});

app.get("/get-winners", (req, res) => {
  res.send({ names, winners: getWinners() });
});

const port = process.env.PORT || 3002;

app.listen(port, function () {
  console.log("listening", port);
});
