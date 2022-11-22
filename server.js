var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
const cors = require('cors');
const routeAppareil = require("./backend/routes/appareils.route");

const app = express();
app.use(express.json());
app.use(cors());
//qfsixCb436zrnjA8

mongoose.connect("mongodb+srv://khouloud:qfsixCb436zrnjA8@cluster0.4voiiho.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
  console.log("Database Connected !")
})
  .catch(() => {
  console.log("Error ...")
})


app.use("/appareilsAPI", routeAppareil);

// chargement d'un site web static
app.use(express.static(path.join(__dirname, "backend/www")));

// lancer le server sur le port 3000
app.listen(3000, () => {
  console.log("server is running on port 3000...");
});
