import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import loginconstant from '../constants/loginconstant';
  import React, {useState} from 'react';
  
  const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleform = () => {
      const user = loginconstant.find(
        val => val.email === email && val.password === password,
      );
  
      // console.log(user);
  
      if (user) {
        navigation.navigate('Home', {
          email: email,
        });
      } else {
        alert('Invalid Email or Password');
      }
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textview}>
          <Text style={styles.text}>Login</Text>
          {/* <KeyboardAvoidingView> */}
  
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={val => setEmail(val)}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.field}
          />
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={val => setPassword(val)}
            placeholder="password"
            style={styles.field}
          />
          {/* </KeyboardAvoidingView> */}
  
          <TouchableOpacity
            onPress={handleform}
            activeOpacity={0.5}
            style={styles.loginbtn}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: '400'}}>
              Login
            </Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() => navigation.navigate('signup')}
            style={styles.signupBtn}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#191923',
    },
    textview: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#FF7E6B',
      marginBottom: 20,
    },
    field: {
      width: '85%',
      height: 50,
      borderRadius: 20,
      backgroundColor: 'white',
      marginTop: 20,
      paddingLeft: 20,
      fontSize: 18,
    },
    loginbtn: {
      width: '85%',
      height: 45,
      borderRadius: 20,
      backgroundColor: '#FF7E6B',
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowRadius: 100,
      elevation: 10,
    },
    signupBtn: {
      marginTop: 15,
      width: '85%',
      alignSelf: 'flex-end',
    },
    signupText: {
      color: '#FFA69E',
      fontSize: 16,
      fontWeight: '400',
      textDecorationLine: 'underline',
    },
  });
  