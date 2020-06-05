import React from 'react';
import './App.css';
import { Header } from "./Header/Header.js"
import "./Header/Header.css"
import { UserList } from "./UserList/UserList.js"
import "./UserList/UserList.css"
import "./User/User.css"

function App() {
  return <div>
    <Header />
    <UserList />
  </div>
}

export default App;
