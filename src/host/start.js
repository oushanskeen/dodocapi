const app = require('./server');

//  port ------------------------------------------------------------
    const port = process.env.PORT || /*80*/4001;
    app.listen(port/*, "142.93.173.95"*/);
   // app.listen(port, "127.0.0.1");
    console.log("dodoc RESTful API started on port: " + port);
