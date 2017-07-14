import Actions from '../actions';
import Firebase from 'firebase';

let ChannelSource = {
  getChannels: {
    remote(state, selectedChannelKey) {
      return new Promise((resolve, reject) => {
        Firebase.database().ref('channels').once('value', (snapshot) => {
          let channels = snapshot.val();
          selectedChannelKey = selectedChannelKey || _.keys(channels)[0];
          let selectedChannel = channels[selectedChannelKey];
          if (selectedChannel) {
            selectedChannel.selected = true;
          }

          resolve(channels);
        });
      });
    },
    success: Actions.channelsReceived,
    error: Actions.channelsFailed
  }
}

export default ChannelSource;