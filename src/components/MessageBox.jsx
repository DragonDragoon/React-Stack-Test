import React from 'react';
import Card from 'material-ui/card';
import trim from 'trim';
import Actions from '../actions';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  onChange(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  onKeyUp(evt) {
    if (evt.keyCode === 13 && trim(evt.target.value) != '') {
      evt.preventDefault();

      Actions.sendMessage(this.state.message);

      this.setState({
        message: ''
      });

      console.log('Sent a new message: ', evt.target.value);
    }
  }

  render() {
    return (
      <Card style={{
        width: '95%',
        margin: '30px auto',
        padding: '30px'
      }}>
        <textarea
          value={this.state.message}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          style={{
            width: '100%',
            resize: 'none',
            borderRadius: 3,
            minHeight: 50,
            color: '#555',
            fontSize: 14,
            outline: 'auto 0px',
            border: '1px solid rgb(208, 208, 208)'
          }} />
      </Card>
    );
  }
}

export default MessageBox;