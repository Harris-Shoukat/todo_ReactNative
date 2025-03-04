import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Hello from './src/component/Hello';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Hello />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
