const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app =express()
  
app.get('/', (req, res) => res.send('CSELL APP'));

app.get('/user/', (req, res) => res.send('Hello World Two!'));

app.listen(PORT, () => console.log(`CSELL Port running on ${PORT}!`));
