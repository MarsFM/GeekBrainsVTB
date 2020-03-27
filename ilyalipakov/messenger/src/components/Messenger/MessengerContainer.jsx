import React, {Component, useState} from 'react';
import { connect } from 'react-redux';

import Messenger from "./Messenger.jsx";

import {sendMessage} from "../../actions/chatActions";

class MessengerContainer extends Component {

  state = {
    message: '',
    author: ''
  };

  handleChange = () => (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  };

  handleSendMessage = (message, author) => () => {
    const {chatId, sendMessage} = this.props;

    if (message === '' || author === '') {
      return
    }

    sendMessage({chatId, author, message, isClick: false});

    this.setState({
      author: '',
      message: '',
    });
  };


  render() {
    const {message, author} = this.state;
    const {messages} = this.props;

    return <Messenger
      messages={messages}
      message={message}
      author={author}
      handleSendMessage={this.handleSendMessage}
      handleChange={this.handleChange} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (payload) => dispatch(sendMessage(payload)),
  }
};

export default connect(null, mapDispatchToProps)(MessengerContainer);