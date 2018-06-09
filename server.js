let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", function(req, res){
  res.sendFile("/index.html" );
});

// //set up body parser
// let urlencodedParser = bodyParser.urlencoded({extended: false});
//
// app.use(express.static("./"));
// //app.use(bodyParser.urlencoded({extended: false}));
//
// app.get("/", function(req, res){
//   res.sendFile("index.html");
// });

app.listen(3000, () => {
  console.log("running on port 3000");
});
