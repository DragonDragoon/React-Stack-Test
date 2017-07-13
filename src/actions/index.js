import alt from '../alt';
import * as Firebase from 'firebase';

class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened'
    );
  };

  login(args) {
    return (dispatch) => {
      var provider = new Firebase.auth.GoogleAuthProvider();

      provider.addScope('https://www.googleapis.com/auth/plus.login');

      Firebase.auth().signInWithPopup(provider).then((auth_data) => {
        let user = auth_data.user;
        dispatch(user);
      }).catch((error) => {
        return;
      });
    }
  }

}

export default alt.createActions(Actions);