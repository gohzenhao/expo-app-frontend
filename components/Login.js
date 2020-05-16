import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { MyText } from './MyText';
import { MyTextInput } from './MyTextInput';
import { AsyncStorage } from 'react-native';

export const Login = ({navigation}) => {


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const login  = async () => {

    fetch('http://:5000/login', {
        method: 'POST',
        headers: {
             Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
    .then((response) => response.json())
    .then((res) => {
        if(res.success) {
          AsyncStorage.setItem('isLoggedIn', res.user);
          navigation.navigate('Member');
        } else {
            alert(res.message);
        }
    }).catch( (error) => console.log(error));
}
return (
  <View style={styles.container}>
    <MyText style={styles.header}>Welcome to My App</MyText>
    <TextInput style={styles.input} onChangeText={(username) => {setUsername(username)}} placeholder="Username" value={username}/>
    <TextInput style={styles.input} secureTextEntry={true} onChangeText={(password) => {setPassword(password)}} placeholder="Password" password={password}/>
    <TouchableOpacity style={styles.btn} onPress={login}>
      <MyText>Login</MyText>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={signup}>
      <MyText>Sign Up</MyText>
    </TouchableOpacity>
  </View>

);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
image: {
  width: 50,
  height: 50,
},
btn: {
  marginTop: 60,
  paddingLeft: 20,
  paddingRight: 20,
  alignItems: 'center',
  borderColor: '#888',
  borderWidth: 1,
},
header: {
  paddingBottom: 60,
  fontWeight: 'bold',
},
input: {
  borderColor: '#888',
  borderBottomWidth: 1,
}
});