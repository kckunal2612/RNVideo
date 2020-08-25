/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Video
        source={{
          uri:
            'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
        }} // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        controls={true}
        disableFocus={true}
        resizeMode={'contain'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
