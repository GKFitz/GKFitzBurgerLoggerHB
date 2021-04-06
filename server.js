const express = require("express");
// Set Handlebars.
const exphbs = require('express-handlebars');
// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller.js');

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse request body as JSON
//can extract data from a post request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
