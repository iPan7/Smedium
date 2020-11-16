import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';
import MainPage from './pages/common/components/MainPage';
import CreatePost from './pages/common/components/CreatePost';
import SinglePost from "./pages/common/components/SinglePost";
import {
  WrappedSignUp,
  WrappedSignIn,
} from './pages/Viewer';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/signup' component={WrappedSignUp} />
      <Route path='/signin' component={WrappedSignIn} />
      <Route exact path='/createpost' component={CreatePost} />
      <Route exact path='/posts/:postId' component={SinglePost} />
      <Route exact path='/posts/mine' component={SinglePost} />
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}

export default App;
