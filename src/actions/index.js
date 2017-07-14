import alt from '../alt';
import * as Firebase from 'firebase';
import {Redirect} from 'react-router-dom';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  };

  login(component) {
    return (dispatch) => {
      let provider = new Firebase.auth.GoogleAuthProvider();

      provider.addScope('https://www.googleapis.com/auth/plus.login');

      Firebase.auth().signInWithPopup(provider).then((auth_data) => {
        let user = auth_data.user;
        dispatch(user);

        component.setState({
          redirect: true
        });
      }).catch((error) => {
        return;
      });
    }
  }

}

export default alt.createActions(Actions);