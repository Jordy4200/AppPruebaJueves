import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LoginScreen({ navigation }: any) {
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
      <Text style={styles.titulo}>JORDY VELASCO</Text>
      <TouchableOpacity style={styles.Botones} onPress={()=> navigation.navigate("BottomTap")}>
        <Text style={styles.Botonestexto}>INGRESAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#587e63',
        alignItems: 'center',
        justifyContent: 'center',
      },
      titulo: {
        fontSize: 40,
        color: 'white',
        marginBottom: 20,
      },
      containerimput: {
        backgroundColor: 'white',
        height: 50,
        width: '80%',
        borderRadius: 20,
        margin: 10,
        paddingHorizontal: 10,
      },
      Botones: {
        backgroundColor: 'red',
        width: '70%',
        height: 70,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      Botones2: {
        width: '70%',
        height: 70,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      Botonestexto: {
        color: 'black',
        fontSize: 20,
      }


})