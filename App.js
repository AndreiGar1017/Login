import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default App = () => {
  const [expediente, setExpediente] = useState(null);
  const [password, setPassword] = useState(null);
  const [passError, setPassError] = useState(null);

const handleSubmit = () => {
  !expediente === null && !password === null ? Alert.alert('Usuario autenticado'): Alert.alert('Usuario no autenticado');
}

const changePassword = (password) =>{
  password.length <= 8 ? setPassword(password): setPassError("Debes tener al menos 8 caracteres en la contraseña")
}

  return[
    <View style ={styles.container}>
      <Text style ={styles.title}>Login</Text>
      <View style ={styles.inputContainer}>
        <TextInput
          style = {styles.textInput}
          placeholder = 'Expediente'
          maxLenght = {6}
          keyboardType = 'numeric'
          onChangeText = {(expediente) =>{
            setExpediente(expediente)
          }}
          value = {expediente}
        />
        <TextInput
          style = {styles.textInput}
          placeholder = 'Password'
          maxLenght = {16}
          secureTextEntry = {true}
          onChangeText = {changePassword}
          value = {password}
        />
        {passError && <Text style={styles.title}>{passError}</Text>}
      </View>
      <View style = {styles.buttonContainer}>
        <Button title="Iniciar Sesion" onPress={handleSubmit} style = {styles.button}>
          <Text style = {styles.title}>Iniciar Sesión</Text>
        </Button>
      </View>
    </View>
  ]
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black'
  },
  title:{
    fontSize: 20,
    fontWeight:'bold',
    color:'white',
    marginBottom:5
  },
  inputContainer:{
    width:'80%',
    borderBlockColor:'white',
    borderRadius: 5,
    color:'white'
  },
  buttonContainer:{
    justifyContent:'center',
    alignContent:'center'
  },
  button:{
    backgroundColor:'blue',
    color: 'white'
  },
  textInput:{
    width:'100%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5
  }
})