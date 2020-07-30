
//  major express import --------------------------------------------
    const express = require("express");
    //const cors = require('cors');
    const app = express();
    const fs = require('fs');
    const http = require('http');
    const https = require('https');
//app.use(express.json({limit:50000}));
    const MongoClient = require("mongodb").MongoClient;
    const ownersRouter = require('../api/routes/owners');
    const agentsRouter = require('../api/routes/agents');
    const objectsRouter = require('../api/routes/objects');
    const dogovorsRouter = require('../api/routes/dogovors');
    const sendPdf = require('../utils/nodemailerSample');
    let bodyParser = require('body-parser');
    const path = require('path');

    // Certificate
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/dodoc.site/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/dodoc.site/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/dodoc.site/chain.pem', 'utf8');

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };
    const httpsServer = https.createServer(credentials, app);
    //app.use((req,res) => res.send("Hello there!"));

    //express.static(path.join(__dirname, 'public'))
    //app.use(express.static('public'));
    app
      .use( express.static(path.join(__dirname,'./public')))
      .get("*", (req,res) => {
        res.sendFile((__dirname+"/public/sampleText.txt"));
    });
    //console.log("REAAAAD: ", read())
    

    //app.use(cors());
    const nodemailer = require('nodemailer');
    app.use((req,res,next)=>{
      res.header("Access-Control-Allow-Origin","*");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      next();
    });
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

    app.use(bodyParser.urlencoded({limit:"20mb",extended: true }));
    app.use(bodyParser.json({limit:"20mb",extended: true }));
    ///app.use(bodyParser.json());
    //app.use(bodyParser.raw());


      const text = "sampleText";
      fs.writeFile('anotherSampleText.txt', text, (err)=>{
        if(err) throw err;
        console.log("SAMPLE TEXT WRITTEN OK!");
      });

  //app.use('/public',express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/public', {dotfiles:"allow"}));

//  routing ---------------------------------------------------------
    // routers imports-----------------------------------------------
    //const ownersRouter = require('../api/routes/owners');
    // register the routes ------------------------------------------
    ownersRouter(app);
    agentsRouter(app);
    objectsRouter(app);
    dogovorsRouter(app);
    // use routes ---------------------------------------------------
    app.use('/owners', ownersRouter);
    app.use('/agents', agentsRouter);
    app.use('/objects', objectsRouter);
    app.use('/dogovors', dogovorsRouter);
    app.use('/testjson', (req,res) => {
      console.log("testjsxon req.body:", req.body);
      res.json(req.body);
    });
    app.get('/send',(req,res)=>{
      console.log('me happen');
      res.send("Hello from SEND!");
    });
    app.post('/send', async (req,res)=>{
      const dogovorPdf = await req.body.data;
      console.log("REQ.BODY: ", dogovorPdf);
      //const text = "sampleText";
      //fs.writeFile('anotherSampleText.txt', text, (err)=>{
      //  if(err) throw err;
      // console.log("SAMPLE TEXT WRITTEN OK!");
     // })
     // fs.writeFile('./sampleBase64.txt', dogovorPdf, (err)=>{
     //  2 if (err) throw err;
     //   console.log("pdf to string saved ok!");
     // })
      //res.send(req.body);
      sendPdf(dogovorPdf);
      res.end();
    })
 const httpServer = http.createServer(app); 

//  export ----------------------------------------------------------
    module.exports.app = app;
    module.exports.httpServer = httpServer;
    module.exports.httpsServer = httpsServer;
    
