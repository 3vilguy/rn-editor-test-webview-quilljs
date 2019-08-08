import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebViewQuillEditor, WebViewQuillViewer } from 'react-native-webview-quilljs'

export default function App() {
  return (
    <View style={styles.container}>
      <WebViewQuillEditor
        ref={component => (this.webViewQuillEditor = component)}
        // getDeltaCallback={this.getDeltaCallback}
        contentToDisplay={"contentToDisplay"}
      // onLoad={this.onLoadCallback}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
