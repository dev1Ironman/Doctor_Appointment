const express = require("express");
const bodyParser = require("body-parser");
const patientController = require("./controllers/patientController");

// db instance connection
require("./config/db");

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
      res.send(200);
    }
    else {
      next();
    }
 });


// app
//   .route("/patients")
//   .get(patientController.listAllPatients)
//   .post(patientController.createNewPatients);

const port = process.env.PORT || 8001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('', require('./controllers/index'))
// app.use(app.router);
// routes.initialize(app);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});