import React from 'react';
import { Header } from './components/Header/Header'
import { ListofPosts } from './components/Home/ListofPosts/ListofPosts'
import { Route, Switch } from 'react-router-dom'
import { SinglePost } from './components/Home/ListofPosts/SinglePost/SinglePost'
import { Author } from './components/ListofAuthor/ListofAuthor'
import { SingleAuthor } from "./components/ListofAuthor/SIngleAuthor/SingleAuthor";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ListofPosts} />
        <Route path='/posts/:id' component={SinglePost} />
        <Route exact path='/author' component={Author} />
        <Route path='/author/:id' component={SingleAuthor} />
      </Switch>
    </div>
  );
}

export default App;
