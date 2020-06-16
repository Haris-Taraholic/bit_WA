import React from 'react';
import { Header } from './components/Header/Header'
import { ListofPosts } from './components/Home/ListofPosts/ListofPosts'
import { Route, Switch } from 'react-router-dom'
import { SinglePost } from './components/Home/ListofPosts/SinglePost/SinglePost'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ListofPosts} />
        <Route path='/posts/:id' component={SinglePost} />
      </Switch>
    </div>
  );
}

export default App;
