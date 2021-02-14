import { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import ChatWindow from './ChatWindow';

const users = [{ username: 'Rock' }, { username: 'Hart' }];

class App extends Component {
  state = {
    messages: []
  }

  updateChat = val => {
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        val
      ]
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {
            users.map(user => (
              <ChatWindow key={user.username} user={user} updateChat={this.updateChat} messages={this.state.messages} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
