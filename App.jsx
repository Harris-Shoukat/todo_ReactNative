import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TodoPage from './src/components/TodoPage';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <TodoPage />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
