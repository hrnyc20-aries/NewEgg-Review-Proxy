const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3060;
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/loaderio-e166c2e8a5ed4a932112abd7cf1f8cce.txt', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './loaderio-e166c2e8a5ed4a932112abd7cf1f8cce.txt')
  );
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
