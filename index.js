const express = require('express');

const api = require('./routes/api.js')
const path = require('path');

const app = express();
const port = 3000;


// set view engine
app.set('view engine', 'ejs')

// load static files
app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// load api routes
app.use('/api', api)

app.get('/', function(req, res) {
  res.render(path.join(__dirname, './views/index'))
})

app.get('/suwit', function(req, res) {
  res.render(path.join(__dirname, './views/suwit'))
})

app.listen(3000, () => {
  console.log(`Server aman jaya`);
});


