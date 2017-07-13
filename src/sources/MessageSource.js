import Actions from '../actions';
import Firebase from 'firebase';

let MessageSource = {
  getMessages: {
    remote(state) {
      return new Promise((resolve, reject) => {
        Firebase.database().ref(`/messages/${state.selectedChannel.key}`).once('value', (snapshot) => {
          let messages = snapshot.val();

          resolve(messages);
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessageSource;