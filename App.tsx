import { View, Text, ImageBackground, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
const imgUrl= {uri: 'https://banghieuviet.org/wp-content/uploads/2024/01/background-dep-4k.jpg'};
const { width } = Dimensions.get('window');
const App = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const handleLogin= () => {
    Alert.alert(`Username: ${userName}${'\n'}Password: ${passWord}`);
  };
  return (
    <View style={{flex:1}}>
       <ImageBackground style={styles.container} source={imgUrl} resizeMode='cover'>
            <View style={{marginHorizontal:10}}>
              <Image source={{uri: 'https://genk.mediacdn.vn/2018/6/18/1-15293075280581597797159.jpg'}} resizeMode='cover' height={150}></Image>
              <Text style={[styles.text, {textAlign:'right'}]}>REGISTER</Text>
              <View>
                    <TextInput value={userName} onChangeText={setUserName} style={styles.input} placeholder='Username'></TextInput>
                    <TextInput secureTextEntry value={passWord} onChangeText={setPassWord} style={styles.input} placeholder='Password'></TextInput>
                  <TouchableOpacity onPress={()=>handleLogin()} style={styles.button}>
                      <Text style={{textAlign:'center'}}>LOGIN</Text>
                  </TouchableOpacity>
              </View>
            </View>
       </ImageBackground>
    </View>
  )
};
const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      flex:1,
    },
    text:{
      fontSize:23,
      fontStyle:'italic',
      fontWeight:'900',
    },
    button:{
      marginTop:10,
      backgroundColor:'red',
      padding:10,
      borderRadius:20
    },
    input:{
      backgroundColor:'gray',
      borderWidth:1,
      borderColor:'white'
    }

})

export default App