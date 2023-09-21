import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const[passwordConfirm, setPasswordConfirm] = useState('')


  
function handleSignIn(){ 
  const data = {
    username,
    password, 
    passwordConfirm,
  }
  console.log(data);
  }

return(
  <View style={styles.container}>

      <Text style={styles.title}>Cadastrar</Text>
  <View style={styles.alinhar}>
      <TextInput
      style={styles.input}
      onChangeText={setUsername}
      value={username}
      placeholderTextColor={'#038FDE'}
      placeholder="   Nome de usuario"/>

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholderTextColor={'#038FDE'}
        placeholder="   Digite uma senha"
        secureTextEntry={true}/>

      <TextInput
        style={styles.input}
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
        placeholderTextColor={'#038FDE'}
        placeholder="   Confirme sua senha"
        secureTextEntry={true}/>
    </View>
    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
      <Text style={styles.buttonText}>CADASTRAR</Text>
    </TouchableOpacity>
  </View>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8743',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  alinhar:{
      height: 224,
      width: 250,
      marginRight:100,
      marginBottom: 100
  },
  input:{
    width: 350,
    height: 54,
    fontSize:15,
    backgroundColor: '#FFFFFF',
    color: '#038FDE',
    padding:0,
    marginTop: 18,
    borderWidth: 2,
    borderColor: '#038FDE'
 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    marginBottom: 10,
    marginRight: 200,
    fontFamily: 'Quicksand-Regular'

  },
  button:{
    width:350,
    height: 54,
    backgroundColor: '#038FDE',
    color: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginBottom: 160
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    marginTop: 13,
    color: '#FFFFFF'
  }
});
