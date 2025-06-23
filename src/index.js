const os = require('os');

const express = require('express');
const app = express();

let count = 0;

app.get('/count', (req, res) => {
  return res.json({ count: ++count, hostname: os.hostname() });
})

// app.get('/slow', (req, res) => {
//   console.log('long CPU task'); 
//   // Заблокируем наш цикл событий и будут проблемы у всех роутов
// });

app.listen(4000);

console.log('Server started on 4000 port');
console.log('Server hostname:', os.hostname())
