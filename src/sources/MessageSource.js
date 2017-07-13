import Actions from '../actions';
import Firebase from 'firebase';

let FirebaseRef = null;

let MessageSource = {
  sendMessage: {
    remote(state) {
      return new Promise((resolve, reject) => {
        if (!FirebaseRef) {
          return resolve();
        }

        FirebaseRef.push({
          'message': state.message,
          'date': new Date().toUTCString(),
          'author': state.user.displayName,
          'userId': state.user.uid,
          'profilePic': state.user.photoURL
        });

        resolve();
      });
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
  getMessages: {
    remote(state) {
      if (FirebaseRef) {
        FirebaseRef.off();
      }

      return new Promise((resolve, reject) => {
        FirebaseRef = Firebase.database().ref(`/messages/${state.selectedChannel.key}`);

        FirebaseRef.once('value', (snapshot) => {
          let messages = snapshot.val();

          resolve(messages);

          FirebaseRef.on('child_added', (message) => {
            let messageVal = message.val();
            messageVal.key = message.key;
            Actions.messageReceived(messageVal);
          });
        });
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  }
}

export default MessageSource;