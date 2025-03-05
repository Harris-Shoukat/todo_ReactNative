import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackImg from './BackImg';
// import {constant} from '../constants/constant';

const TodoPage = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // console.log(todoList);

  const handleAddTodo = () => {

    if (todoList.find(item => item.title === todo)) {
      Alert.alert('warning', 'Item already exist');
      return;
    }

    if (todo === '') {
      Alert.alert('Alert', 'Input field is empty');
    } else {
      setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
      setTodo('');
    }
  };

  const handleDelete = id => {
    const updatedList = todoList.filter(ele => ele.id != id);
    setTodoList(updatedList);
  };

  const handleEdit = item => {
    setEditTodo(item);
    setTodo(item.title);
  };

  const handleUpdateTodo = () => {
    const update = todoList.map(item => {
      if (item.id === editTodo.id) {
        return {...item, title: todo};
      }
      return item;
    });
    setTodoList(update);
    setEditTodo(null);
    setTodo('');
  };

  const renderTodo = ({item}) => (
    <View
      style={{
        backgroundColor: '#34495e',
        marginVertical: 6,
        paddingHorizontal: 10,
        paddingVertical: 18,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 10,
      }}>
      <Text
        style={{
          color: '#fff',
          fontWeight: 500,
          fontSize: 18,
          flex: 1,
        }}>
        {item.title}
      </Text>
      <View style={{flexDirection: 'row', gap: 25, paddingRight: 10}}>
        <Icon
          name="pencil-alt"
          size={18}
          color="skyblue"
          onPress={() => handleEdit(item)}
        />
        <Icon
          name="trash"
          size={18}
          color="red"
          onPress={() => handleDelete(item.id)}
        />
      </View>
    </View>
  );

  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
      <View style={{paddingHorizontal: 16, flex: 1, backgroundColor:'#2A3439'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}></Text>
        <TextInput
          style={{
            color:'#FFE4E1',
            borderWidth: 2,
            borderColor:'#FF7E6B',
            borderRadius: 6,
            paddingHorizontal: 16,
            fontSize: 18,
            marginVertical: 10,
          }}
          value={todo}
          onChangeText={val => setTodo(val)}
          placeholder="Add a todo"
          placeholderTextColor={'#FFE4E1'}
        />
        {editTodo ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleUpdateTodo}
            style={{
              backgroundColor: '#FF7E6B',
              borderRadius: 6,
              paddingVertical: 10,
              alignItems: 'center',
              marginVertical: 24,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Save
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleAddTodo}
            style={{
              backgroundColor: '#FF7E6B',
              borderRadius: 6,
              paddingVertical: 10,
              alignItems: 'center',
              marginVertical: 24,
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Add
            </Text>
          </TouchableOpacity>
        )}

        {todoList.length <= 0 ? (
          <BackImg />
        ) : (
          <FlatList data={todoList} renderItem={renderTodo} />
        )}
      </View>
    </>
  );
};

export default TodoPage;

const styles = StyleSheet.create({});
