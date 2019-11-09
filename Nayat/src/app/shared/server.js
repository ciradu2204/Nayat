//getting the dependencies
const express = require ('express');

//getting the API routes
const app = express();

app.get('*', (req, res) => {
    res.send('hello world');
  });

const port = process.env.PORT || '3000';
app.set('port', port)
app.listen(port, ()=> console.log(`API running on localhost:${port}`));