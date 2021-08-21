// Root file of node project

const express = require("express");
require('./services/passport');
const app = express();



require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
// applicaition link https://rocky-oasis-53450.herokuapp.com/
app.listen(PORT);
// testd