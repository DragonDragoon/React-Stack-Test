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
        leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
      >{this.props.message}</ListItem>
    );
  }
}

export default Message;