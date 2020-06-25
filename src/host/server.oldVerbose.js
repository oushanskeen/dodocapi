//  major express import --------------------------------------------
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
/*
const Owner = require("../service/storage/models/owner.model");

//  db connection ---------------------------------------------------
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/dodoc";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.once("open", _ => console.log("Database connected", url));
db.on("error", err => {
  console.error("connection error", err);
});
async function saveOwner() {
  await Owner.deleteMany({});
  const first = new Owner({
    name: "Daemon",
    role: "composer"
  });
  const second = new Owner({
    name: "Foguard",
    role: "dedicator"
  });
  second.save();
  const doc = await first.save();
  console.log('doc in save: ', doc);
}
//saveOwner().catch(error => {
//  console.log(error);
//});

async function findOwner(name) {
  const found = await Owner.findOne({ name: name });
  console.log('found: ', found);
  return found;
}
//findOwner("Daemon").catch(error => {
//  console.log(error);
//})
async function updateOwner() {
  const ownerToUpdate = await Owner.findOne({name:"Daemon"})
  ownerToUpdate.tel = [
    "1-1-1-1",
    "2-2-2-2",
    "3-3-3-3"
  ]
  const doc = ownerToUpdate.save()
  console.log("doc after update: ", doc);
}
//updateOwner().catch(error => {
//  console.log(error)
//})
async function deleteOwner() {
  const ownerToDelete = await Owner.findOne({name: "Daemon"})
  const deletedOwner = await ownerToDelete.remove();
  console.log(deletedOwner);
}

//deleteOwner().catch(error => console.log(error))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/", (req, res) => {
 // console.log(req.body);
 // res.send(req.body);
  console.log("Hello world from dodoc-backend");
  res.send("Hello world from dodoc-backend");
  res.end();
});
/*
MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then(client => {
    console.log("Connetcted to dodoc");
    const db = client.db("dodoc");
    const ownersCollection = db.collection("owners");
    app.get("/owners", (req, res) => {
      ownersCollection
        .find()
        .toArray()
        .then(results => {
          console.log("book to array results :", results);
        })
        .catch(error => console.error(error));
      res.end();
    });
    app.post("/owners", (req, res) => {
      console.log("req.body: ", req.body);
      ownersCollection
        .insertOne(req.body)
        .then(result => {
          console.log(result);
        })
        .catch(error => console.error(error));
      res.end();
    });
    app.put("/owners", (req, res) => {
      ownersCollection
        .findOneAndUpdate(
          { nameOne: "valueOne" },
          {
            $set: {
              nameOne: req.body.nameOne,
              role: req.body.role
            }
          },
          { upsert: true }
        )
        .then(result => {
          console.log(result);
        })
        .catch(error => console.error(error));
      res.json("Success");
    });
    app.delete("/owners", (req, res) => {
      ownersCollection
        .remove({ nameOne: req.body.nameOne })
        .then(result => {
          if (result.deleteCount === 0) {
            return res.json("No names to delete");
          }
          res.json("Deleted after name");
        })
        .catch(error => console.error(error));
    });
  })
  .catch(error => console.error(error));
*/

//  corse & parse ---------------------------------------------------
//  const cors = require('cors')
//  app.use(cors())
//    const bodyParser = require('body-parser')
//    app.use(bodyParser.urlencoded({extended: true}))
//    app.use(bodyParser.json())

//  routing ---------------------------------------------------------
//    const helloRouter = require('../api/routes/hello')
//    const ownersRouter = require('../api/routes/owners')
//    const agentsRouter = require('../api/routes/agents')
//    const objectsRouter = require('../api/routes/objects')
//    const dogovorsRouter = require('../api/routes/dogovors')
//  const secondRouter = require('../api/routes/second')
//  // register the routes
//    helloRouter(app);
//    ownersRouter(app);
//    agentsRouter(app);
//    objectsRouter(app);
//    dogovorsRouter(app);
//  secondRouter(app);
app.get('/', (req,res) => {
    console.log("change on :", Date.now());
    res.send(`${Date.now()}, Hello!`);
})
/*
      app.get('/owners', async (req, res) => {
        console.log('get request body: ', req.body);
        const response = await Owner.find({})
          .select({"_id":0, "__v":0});
        res.send(response);
      })
*/
//    app.use('/hello', helloRouter);
//    app.use('/owners', ownersRouter);
//    app.use('/agents', agentsRouter);
//    app.use('/objects', objectsRouter);
//    app.use('/dogovors', dogovorsRouter);
//    const Owner = require('../service/storage/models/owner.model');
//    app.post('/owners', async (req,res) => {
//      const {name, role} = req.body;
//      const owner = new Owner({name,role});
//      const ret = await owner.save();
//      res.json(ret);
//    })
//  app.use('/second', secondRouter);

module.exports = app;
