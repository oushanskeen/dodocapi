const app = require('./server');

//  port ------------------------------------------------------------
    const port = process.env.PORT || 4001;
    app.listen(port, "142.93.173.95");
    console.log("dodoc RESTful API started on port: " + port);
