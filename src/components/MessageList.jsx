import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/card';
import List from 'material-ui/list';
import * as Firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: {}
    };


    // Set the configuration for your app
    // TODO: Replace with your project's config object
    let config = {
      apiKey: 'AIzaSyCV5CW4WFKRdrGrw9rUc8MvPmNglzkz0GY',
      authDomain: 'react-stack-test-21832.firebaseapp.com',
      databaseURL: 'https://react-stack-test-21832.firebaseio.com/',
      storageBucket: 'react-stack-test-21832.appspot.com'
    };

    Firebase.initializeApp(config);

    Firebase.database().ref('messages').on('child_added', (msg) => {
      if (this.state.messages[msg.key]) {
        return;
      }

       let msgVal = msg.val();
       msgVal.key = msg.key;
       this.state.messages[msgVal.key] = msgVal;

       this.setState({
         messages: this.state.messages
       });
    });

    Firebase.database().ref('messages').on('child_removed', (msg) => {
      let key = msg.key;
      delete this.state.messages[key];
      this.setState({
        messages: this.state.messages
      })
    });
  }

  render() {
    var messageNodes = _.values(this.state.messages).map((message) => {
      return (
        <Message message={message.message} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );

  }
}

export default MessageList;