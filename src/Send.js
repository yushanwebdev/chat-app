import { Component } from "react";
import PropTypes from "prop-types";

class Send extends Component {
  state = {
    message: ''
  }

  isDisabled = () => (
    this.state.message === ''
  )

  updateField = e => {
    const input = e.target.value;
    this.setState(prevState => ({
      message: input
    }))
  }

  chatSubmit = e => {
    e.preventDefault();
    this.props.updateChat(
      {
        username: this.props.username, 
        text: this.state.message
      }
    );
    this.setState(prevState => ({
      message: ''
    }));
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.chatSubmit}>
          <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.updateField} value={this.state.message} />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

Send.propTypes = {
  updateChat: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default Send;