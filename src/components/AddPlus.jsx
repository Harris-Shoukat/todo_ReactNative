import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AddTaskScreen from '../screens/AddTaskScreen';

const AddPlus = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate(AddTaskScreen)}>
        <Text style={styles.Plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPlus;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  addBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9395D3',
    borderRadius: 100,
    elevation: 4,
  },
  Plus: {
    color: '#fff',
    fontSize: 27,
  },
});
