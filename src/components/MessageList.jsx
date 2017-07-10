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
      messages: []
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

    // Get a reference to the database service
    let database = Firebase.database();

    database.ref('/messages/').once('value').then((snapshot) => {
      let messages = snapshot.val();
      this.setState({
        messages: messages
      });
    });
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
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