const app = require('./server').app;
const core = require('cors');
const httpServer = require('./server').httpServer;
const httpsServer = require('./server').httpsServer;
const fs = require('fs');
const http = require('http');
const https = require('https');

app.use(cors());

// Certificate
//const privateKey = fs.readFileSync('/etc/letsencrypt/live/dodoc.site/privkey.pem', 'utf8');
//const certificate = fs.readFileSync('/etc/letsencrypt/live/dodoc.site/cert.pem', 'utf8');
//const ca = fs.readFileSync('/etc/letsencrypt/live/dodoc.site/chain.pem', 'utf8');

//const credentials = {
//	key: privateKey,
//	cert: certificate,
//	ca: ca
//};

//app.use((req, res) => {
//	res.send('Hello there !');
//});
//app.get('/', (req,res) => res.send("Check is ok!"))

// Starting both http & https servers
//const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);

//httpServer.listen(80, () => {
//	console.log('HTTP Server running on port 80');
//});
//https.createServer({
//  key: fs.readFileSync('/etc/letsencrypt/live/dodoc.site/privkey.pem'),
//  cert: fs.readFileSync('/etc/letsencrypt/live/dodoc.site/cert.pem'),
//  ca: fs.readFileSync('/etc/letsencrypt/live/dodoc.site/chain.pem')
//}, app).listen(443, () => {
//  console.log('Listening 443...')
//})
//httpsServer.listen(8443, () => {
//	console.log('HTTPS Server running on port 443');
//});
//  port ------------------------------------------------------------
    const port = process.env.PORT || 80/*4001*/;
    //app.listen(port/*, "142.93.173.95"*/);
    httpsServer.listen(443);
    httpServer.listen(port);
   // app.listen(port, "127.0.0.1");
    console.log("dodoc RESTful API started on port: " + port);
