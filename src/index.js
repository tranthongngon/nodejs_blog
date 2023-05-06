const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, 'assets')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(morgan('combined'));

app.engine(
  'hbs',
          engine({
            extname: '.hbs',
          }),
);
app.set('view engine', 'hbs');
app.set('views', 
path.join(__dirname, 'views'));

// route
route(app);

app.listen(port, () => {console.log(`Example app listening on port ${port}`);
});
