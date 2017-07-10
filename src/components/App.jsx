import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.jsx';
//import mui from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/muithemeprovider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue700, blue100, pink400 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/appbar';

//let ThemeManager = new mui.Styles.ThemeManager();
//let Colors = mui.Styles.Colors;
//let AppBar = mui.AppBar;

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
          <MessageList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;