const express = require('express');
const app = express();


app.get('/g', (req, res) => {
    res.send({ 'hi': 'there!' });
})

const PORT = process.env.PORT || 5000
app.listen(PORT)

// http://localhost:5000/