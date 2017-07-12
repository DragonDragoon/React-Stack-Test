import Actions from '../actions';
import Firebase from 'firebase';

let ChannelSource = {
  getChannels: {
    remote(state) {
      return new Promise((resolve, reject) => {
        Firebase.database().ref('channels').once('value', (snapshot) => {
          let channels = snapshot.val();

          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;