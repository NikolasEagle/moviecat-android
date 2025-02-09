import React, {useEffect, useRef} from 'react';

import {BackHandler, SafeAreaView} from 'react-native';

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
    <SafeAreaView style={{flex: 1}}>
      <WebView
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
        ref={webviewRef}
        allowsFullscreenVideo={true}
        setBuiltInZoomControls={false}
        source={{
          uri: 'https://moviecat.online',
        }}></WebView>
    </SafeAreaView>
  );
}

export default App;
