const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));

app.listen( PORT , () => console.log(`Im live on http://localhost:${PORT} `))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get( '/random', (req,res) => 
  {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNum];
    res.json(quote);
  });
     



// console.log(quotes[0] , quotes[0].text);
