import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import TodoPage from './src/components/TodoPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import TodoPage from './src/components/TodoPage';

const App = () => {

  const stack = createNativeStackNavigator();
  return (
    <>
      {/* <StatusBar barStyle={'dark-content'} /> */}
      {/* <TodoPage /> */}


      <NavigationContainer>
        <stack.Navigator initialRouteName='Login'>
          <stack.Screen name='Login' component={Login} options={{headerShown:false}} />
          <stack.Screen name='Home' component={TodoPage} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
