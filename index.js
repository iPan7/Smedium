const React = require('react');
const ReactDOM = require('react-dom');

const Test = () => {
  return <div>Testing</div>
};

ReactDOM.render(
 <Test />,
 
);

require('dotenv')
  .config();
const express = require('express');
const routes = require('./routes');

require('./services/passport');

const app = express();

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});