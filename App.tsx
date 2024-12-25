import React, {useEffect, useRef, useState} from 'react';

import {View, BackHandler} from 'react-native';

import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const webviewRef = useRef<any>(null);

  function handleBackButtonsPress() {
    webviewRef.current.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonsPress);
  }, []);

  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webviewRef}
        allowsFullscreenVideo={true}
        source={{uri: 'https://moviecat.online'}}></WebView>
    </View>
  );
}

export default App;
