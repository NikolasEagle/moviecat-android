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
    webviewRef.current.requestFocus();
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonsPress);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        userAgent="Mozilla/5.0 (SMART-TV; Linux; Tizen 2.3) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.0 TV Safari/538.1"
        domStorageEnabled={true}
        ref={webviewRef}
        onNavigationStateChange={() => webviewRef.current.requestFocus()}
        allowsFullscreenVideo={true}
        javaScriptEnabled={true}
        source={{
          uri: 'http://192.168.0.32:3000',
        }}></WebView>
    </SafeAreaView>
  );
}

export default App;
