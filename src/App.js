import { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

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
