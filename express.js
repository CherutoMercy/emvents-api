const express = require('express');
const app     = express();
const model	  = require('/src/models');

app.get('/', (req, res) => {
    res.send('GET Hello World!');
});

app.post('/post', (res, req) => {
    res.send('POST Hello World!')
})

app.listen(8080, () => {
    console.log('Awesome example app running on port 8080');
});