import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class Chat extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          display: 'flex',
          flexFlow: 'row wrap',
          width: '95%',
          margin: '30px auto 30px'
        }}>
          <ChannelList {...this.props} />
          <MessageList />
        </div>
        <MessageBox />
      </div>
    );
  }
}

export default Chat;