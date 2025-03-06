import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import AddPlus from '../components/AddPlus';

const Home = ({ navigation, route }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (route.params?.newTask) {
      setTodoList(prevList => [...prevList, route.params.newTask]); 
    }
  }, [route.params?.newTask]);

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <View style={styles.iconView}>
              <Icon
                name={'pencil'}
                color={'#9395D3'}
                size={20}
                onPress={() => navigation.navigate('EditTask', { task: item })}
              />
              <Icon name={'trash'} color={'#9395D3'} size={20} />
            </View>
          </View>
        )}
      />
      <AddPlus navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D7EF',
    padding: 20,
  },
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 22,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 1 },
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconView: {
    flexDirection: 'row',
    paddingRight: 5,
    gap: 25,
  },
});
