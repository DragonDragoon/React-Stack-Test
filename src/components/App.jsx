import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import MuiThemeProvider from 'material-ui/styles/muithemeprovider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/appbar';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore.js';
import * as Firebase from 'firebase';

@connectToStores
class App extends React.Component {
  constructor() {
    super();

    // Set the configuration for your app
    // TODO: Replace with your project's config object
    let config = {
      apiKey: 'AIzaSyCV5CW4WFKRdrGrw9rUc8MvPmNglzkz0GY',
      authDomain: 'react-stack-test-21832.firebaseapp.com',
      databaseURL: 'https://react-stack-test-21832.firebaseio.com/',
      storageBucket: 'react-stack-test-21832.appspot.com'
    };

    Firebase.initializeApp(config);

    this.muiTheme = getMuiTheme({
      palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: blue100,
        accent1Color: pink400
      }
    });
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    let view = <Login />;

    if (this.props.user) {
      view = (
        <div>
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            width: '95%',
            margin: '30px auto 30px'
          }}>
            <ChannelList />
            <MessageList />
          </div>
          <MessageBox />
        </div>
      );
    }

    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <AppBar title="Awesome Chat App" />
          {view}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;