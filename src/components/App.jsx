import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import MuiThemeProvider from 'material-ui/styles/muithemeprovider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/appbar';

class App extends React.Component {
  constructor() {
    super();

    this.muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100,
        accent1Color: pink400
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <AppBar title="Awesome Chat App" />
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            //maxWidth: 1200,
            width: '95%',
            margin: '30px auto 30px'
          }}>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;