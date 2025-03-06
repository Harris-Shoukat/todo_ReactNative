import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const EditTask = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#EBEBF5', paddingHorizontal: 10}}>
        {/* <View> */}
          <TextInput
            placeholder="edit"
            placeholderTextColor="#8B8787"
            style={styles.addInput}
          />
          <TouchableOpacity style={styles.AddPageBtn}>
            <Text>Update</Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
    );
  };
  
  export default EditTask;
  
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
  