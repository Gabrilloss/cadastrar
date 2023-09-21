import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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

      <text style={styles.title}>Cadastrar</text>

      <TextInput
      style={style.input}
      onChangeText={setUsername}
      value={username}
      placeholder="Nome de usuario"/>

      <TextInput
        style={style.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite uma senha"
        secureTextEntry={true}/>

      <TextInput
        style={style.input}
        onChangeText={setPasswordConfirm}
        value={passwordConfirm}
        placeholder="Confirme sua senha"
        secureTextEntry={true}/>











  </View>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
