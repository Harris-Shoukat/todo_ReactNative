import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import TodoPage from './src/components/TodoPage';
import Profile from './src/screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import AddTaskScreen from './src/screens/AddTaskScreen';
import EditTask from './src/screens/EditTask';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;
  if (route === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route.name, focused, color, size),
        tabBarStyle: {
          height: 80,
          paddingBottom: 25,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 26,
          fontWeight: '700',
          fontFamily: 'san-serif',
        },
        headerStyle: {
          backgroundColor: '#9395D3',
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Todo App',
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 26,
              fontWeight: '700',
              fontFamily: 'san-serif',
            },
            headerStyle: {
              backgroundColor: '#9395D3',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddTaskScreen"
            component={AddTaskScreen}
            options={{
              headerTitle: 'Add Task',
            }}
          />
          <Stack.Screen
            name="EditTask"
            component={EditTask}
            options={{
              headerTitle: 'Edit Task',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
