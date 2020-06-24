const app = require('./server');

//  port ------------------------------------------------------------
    const port = process.env.PORT || 4001;
    app.listen(port);
    console.log("dodoc RESTful API started on port: " + port);
