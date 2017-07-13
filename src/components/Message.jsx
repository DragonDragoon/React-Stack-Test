import React from 'react';
import Avatar from 'material-ui/avatar';
import { ListItem } from 'material-ui/list';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic} />}
      >{this.props.message.message}</ListItem>
    );
  }
}

export default Message;