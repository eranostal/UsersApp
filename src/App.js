import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/layout/Header';
import Users from './components/users/Users';

class App extends Component {

  state = {
    users: [],
    selectedUser: null,
    loading: false
  }

  //Initial connection
  async componentDidMount(){
    const connect = await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({users: res.data}))
      .catch(err => console.log(err));
  }

  grabSelectedUser = async (myId) => {
    //We're using .find because we're not returning an array.
    await this.setState({selectedUser: this.state.users.find(user => user.id === myId)});
  }

  render(){
    //Destructure the data
    const {users, selectedUser, loading} = this.state;
    return (
      <div className="App">
        <Header/>
        <div className="app-body">
          <Users users={users} loading={loading} grabSelectedUser={this.grabSelectedUser} selectedUser={selectedUser}/>
        </div>
      </div>
    );
  }

}

export default App;
