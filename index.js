const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.status(200).json({ ok: 'ok' });
});

app.listen(3000, () => {
  console.log('CONENCT 3000');
});
