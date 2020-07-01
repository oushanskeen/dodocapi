
//  major express import --------------------------------------------
    const express = require("express");
    const app = express();
    app.use(express.json());
    const MongoClient = require("mongodb").MongoClient;
    const ownersRouter = require('../api/routes/owners');
    let bodyParser = require('body-parser');

//  db connection ---------------------------------------------------
    let mongoose = require('mongoose');
    const url = 'mongodb://localhost:27017/dodoctest';
    mongoose.connect(
      url,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = mongoose.connection;
    db.once("open", _ => console.log("Dodoctest connected: ", url));
    db.on("error", err => {
      console.error("connection error: ", err);
    })
    /*
    const ownersCollection = db.collection("owners");
    ownersCollection.insertOne({"id":165})
    .then(res => console.log(res))
    .catch(err => console.error(err))
    */

//  cors & parse ---------------------------------------------------
    let cors = require('cors')
    app.use(cors())

    // //app.use(bodyParser.urlencoded({ extended: true }));
    // //app.use(bodyParser.json());
    //app.use(bodyParser.raw());

//  routing ---------------------------------------------------------
    // routers imports-----------------------------------------------
    //const ownersRouter = require('../api/routes/owners');
    // register the routes ------------------------------------------
    ownersRouter(app);
    // use routes ---------------------------------------------------
    app.use('/owners',ownersRouter);
    app.use('/testjson', (req,res) => {
      console.log("testjsxon req.body:", req.body);
      res.json(req.body);
    })
   
//  export ----------------------------------------------------------
    module.exports = app;
