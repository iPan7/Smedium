require('dotenv')
  .config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

require('./services/passport');

const app = express();

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // const path = require('path');
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
}

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});

