
//  major express import --------------------------------------------
    const express = require("express");
    const app = express();
    const MongoClient = require("mongodb").MongoClient;
//  const bodyParser = require("body-parser");

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

    let bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

//  routing ---------------------------------------------------------
    // routers imports-----------------------------------------------
    let ownersRouter = require('../api/routes/owners');
    // register the routes ------------------------------------------
    ownersRouter(app);
    // use routes ---------------------------------------------------
    app.use('/owners',ownersRouter);
   
//  export ----------------------------------------------------------
    module.exports = app;
