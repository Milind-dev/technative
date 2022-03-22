const express = require("express");
const app = express();

const formvalidated = require('./routes/formvalidate');
app.use("/api/formvalidate", formvalidated);

const port = 5000;
app.listen(port, () => console.log(`server is working started nodemon  $port`));


