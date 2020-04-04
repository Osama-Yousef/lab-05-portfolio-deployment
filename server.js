'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT||3000;
// http:localhost:3000/index.html
app.use(express.static('./public'));

app.use('*',(request,response) =>
response.status(404).send('404 page not found')
);

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));