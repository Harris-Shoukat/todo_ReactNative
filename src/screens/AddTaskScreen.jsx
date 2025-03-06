import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const AddTaskScreen = ({navigation}) => {
  const [todo, setTodo] = useState('');
  // const [todoList, setTodoList] = useState([]);




  const handleAddTask = () => {

    if (todo === '') {
      Alert.alert('Alert', 'Please enter something to add');
    } else {
      const newTask = { id: Date.now().toString(), title: todo };
      navigation.navigate('Home', { newTask }); // Pass only the new task
    }
    
    // console.log(todoList);
    // navigation.navigate('home',{todoList})
  };
  // console.log(todo);

  return (
    <View style={{flex: 1, backgroundColor: '#EBEBF5', paddingHorizontal: 10}}>
      <TextInput
        placeholder="Add Task"
        placeholderTextColor="#8B8787"
        style={styles.addInput}
        value={todo}
        onChangeText={val => setTodo(val)}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.AddPageBtn}
        onPress={handleAddTask}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
          ADD
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
  AddPageBtn: {
    backgroundColor: '#9395D3',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 24,
  },
  addInput: {
    // backgroundColor:'#9395D3',
    marginVertical: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 2,
    fontSize: 18,
  },
});
