import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';

import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';

import {
  UserSingleView,
} from './pages/Eban/eban';


function App() {
  return (
    <Router>
      <Navbar/>
      <Route path='/signup' component={WrappedSignUp}/>
      <Route path='/signin' component={WrappedSignIn}/>
      <Route exact path="/">
        <h1>Welcome to the about</h1>
      </Route>
      <Route exact path="/eban" component={UserSingleView}/>
    </Router>
  );
}

export default App;
