import React from 'react';
import './App.css';
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { View } from './Components/View'
import { Search } from './Components/Search/Search'
import { Counter } from "./Components/Counter"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isListView: JSON.parse(localStorage.getItem('isListView')),
      search: "",
      isLoading: false,
      isUserFound: true
    }
    this.changeView = this.changeView.bind(this)
    this.loadUsers = this.loadUsers.bind(this)
    this.searchField = this.searchField.bind(this)

  }
  searchField = (event) => {
    const $input = event.target
    this.setState({ search: $input.value })
    const $filteredUsers = this.state.users.filter(item =>
      item.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ||
      item.name.last.toLowerCase().includes(this.state.search.toLowerCase())
    )

    if ($filteredUsers.length === 0) {
      console.log($filteredUsers.length);
      this.setState({ isUserFound: false })
    }

    if ($input.value === "") {
      this.setState({ users: JSON.parse(localStorage.getItem('users')), isUserFound: true })

    } else {
      this.setState({ users: $filteredUsers })
    }
  }

  changeView = () => {
    this.setState({ isListView: !this.state.isListView }, () => {
      localStorage.setItem('isListView', this.state.isListView)
    })
  }

  loadUsers = () => {
    this.setState({ isLoading: true })
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => this.setState({ users: data.results }, () => { localStorage.setItem('users', JSON.stringify(data.results)) }))
      .finally(() => this.setState({ isLoading: false }))
  }

  render() {
    return (
      <div>
        < Header isListView={this.state.isListView} refresh={this.loadUsers} changeView={this.changeView} />
        < Search value={this.state.search} searchFunction={this.searchField} isUserFound={this.state.isUserFound} />
        <Counter users={this.state.users} />
        <View isListView={this.state.isListView} users={this.state.users} isLoading={this.state.isLoading} />
        < Footer />
      </div >
    )
  }
  componentDidMount() {
    if (localStorage.getItem('users') === null) {
      this.loadUsers();
    } else { this.setState({ users: JSON.parse(localStorage.getItem('users')) }) }

  }
}
export default App;
