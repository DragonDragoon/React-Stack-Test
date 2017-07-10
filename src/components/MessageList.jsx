import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/card';
import List from 'material-ui/list';

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
      <Card>
        <List>
          {messageNodes}
        </List>
      </Card>
    );

  }
}

export default MessageList;