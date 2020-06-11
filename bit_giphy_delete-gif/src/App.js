import React from 'react';
import './App.css';
import { Search } from "./Components/Search/Search"
import {Header} from './Components/Header/Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>
      < Header />
      < Search />
    </div>
  }


}

export default App;
