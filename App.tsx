import React, {useEffect, useRef} from 'react';

import {BackHandler, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  const webviewRef = useRef<any>(null);

  function handleBackButtonsPress() {
    webviewRef.current.goBack();
    return true;
  }

  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
  })();`;
 
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonsPress);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#111"}}>
      <StatusBar
        backgroundColor="#111"
      />

        <WebView
        style={{margin: 10}}
        sharedCookiesEnabled={true}
        thirdPartyCookiesEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        scalesPageToFit={false}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        ref={webviewRef}
        source={{
          uri: 'https://moviecat.eagle.dev.stack.fvds.ru',
        }}></WebView>
      </SafeAreaView>

  );
}

export default App;
