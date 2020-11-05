import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';

import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  } from "@material-ui/core";

import App from './App';

import rootReducer from './redux';

const logger = createLogger({
  predicate: (getState, action) => (
    (action.type !== '@@redux-form/CHANGE') &&
    (action.type !== '@@redux-form/BLUR') &&
    (action.type !== '@@redux-form/FOCUS') &&
    (action.type !== '@@redux-form/UPDATE_SYNC_ERRORS') &&
    (action.type !== '@@redux-form/TOUCH')
  ),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root'));

// Test Code Below

// const Test = () => {
//   return (
//   <div>
//       <label for="username">Username:</label>
//       <input id="username" type="text"/>
//       <button>Submit</button>
//       <br></br>
//       <label for="password">Password:</label>
//       <input id="password" type="text"/>
//       <button>Submit</button>
//   </div>
//   );
// };

class Login extends React.Component {
constructor(props) {
super(props);
this.state = { username: "", password:"", authflag:1 };
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
this.setState({ username: event.state.username, password: event.state.password });
}
handleSubmit(event) {
event.preventDefault();
if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
this.props.history.push("/home");
} else {
alert('Incorrect Credentials!');
}
}
render() {
return (
<div>
<AppBar position="static" alignitems="center" color="primary">
<Toolbar>
<Grid container justify="center" wrap="wrap">
<Grid item>
<Typography variant="h6">{"SMEDIUM"}</Typography>
</Grid>
</Grid>
</Toolbar>
</AppBar>
<Grid container spacing={0} justify="center" direction="row">
<Grid item>
<Grid
container
direction="column"
justify="center"
spacing={2}
className="login-form"
>
<Paper
variant="elevation"
elevation={2}
className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5">
Sign in
</Typography>
</Grid>
<Grid item>
<form onSubmit={this.handleSubmit}>
<Grid container direction="column" spacing={2}>
<Grid item>
<TextField
type="email"
placeholder="Email"
fullWidth
name="username"
variant="outlined"
value={this.state.username}
onChange={(event) =>
this.setState({
[event.target.name]: event.target.value,
})
}
required
autoFocus
/>
</Grid>
<Grid item>
<TextField
type="password"
placeholder="Password"
fullWidth
name="password"
variant="outlined"
value={this.state.password}
onChange={(event) =>
this.setState({
[event.target.name]: event.target.value,
})
}
required
/>
</Grid>
<Grid item>
<Button
variant="contained"
color="primary"
type="submit"
className="button-block"
>
Submit
</Button>
</Grid>
</Grid>
</form>
</Grid>
<Grid item>
<Link href="#" variant="body2">
Forgot Password?
</Link>
</Grid>
</Paper>
</Grid>
</Grid>
</Grid>
</div>
);
}
}
export default Login;

ReactDOM.render(
 <Login />,
 document.querySelector('#root')
);