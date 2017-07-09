import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        'hi, how are you?',
        'i am fine, and you?'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return (
        <Message message={message} />
      );
    });

    return (
      <div>{messageNodes}</div>
    );

  }
}

export default MessageList;