import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/muithemeprovider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/appbar';
import * as Firebase from 'firebase';
import { Route, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx'
import Chat from './Chat.jsx';
import Login from './Login.jsx';

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

  render() {
    return (
      <MuiThemeProvider muiTheme={this.muiTheme}>
        <div>
          <AppBar title="Awesome Chat App" />
          <ProtectedRoute exact path="/" component={Chat} />
          <ProtectedRoute exact path="/chat" component={Chat} />
          <Route exact path="/login" component={Login} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;