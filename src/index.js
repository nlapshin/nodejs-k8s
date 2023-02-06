const express = require('express');
const app = express();

let count = 0;

app.get('/count', (req, res) => {
  return res.json({ count: ++count });
})

app.listen(4000);

console.log('Server started on 4000 port');
