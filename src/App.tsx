import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {Provider} from 'react-redux';
import store from '../src/redux/store';

import AppNavigator from './navigation/AppNavigator';
interface Props {};

const App: React.FC<Props> = (props) => {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
