import React from 'react';
import Card from 'material-ui/card';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{
        width: '95%',
        margin: '30px auto',
        padding: '30px'
      }}>
        <textarea style={{
          width: '100%',
          borderColor: '#D0D0D0',
          resize: 'none',
          borderRadius: 3,
          minHeight: 50,
          color: '#555',
          fontSize: 14,
          outline: 'auto 0px'
        }} />
      </Card>
    );
  }
}

export default MessageBox;