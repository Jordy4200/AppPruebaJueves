import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
// La base de datos
import { db } from '../config2/Config';
import { ref, set } from "firebase/database";

export default function Screen1() {
  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  // Función para guardar datos en Firebase
  function guardarCompras(id:string, monto:string, categoria:string, descripcion:string) {
    try {
      set(ref(db, 'usuarios/' + id), {
        monto: monto,
        categoria: categoria,
        descripcion: descripcion
      });
      Alert.alert('Mensaje', 'Compra almacenada');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo almacenar la compra');
    }
  
    // Limpiar los estados después de guardar
    setId('');
    setMonto('');
    setCategoria('');
    setDescripcion('');
  }
  



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entre su compra</Text>
      <TextInput
        style={styles.containerimput}
        placeholder="Id"
        keyboardType='number-pad'
        onChangeText={setId}
        value={id}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Monto"
        keyboardType='numeric'
        onChangeText={setMonto}
        value={monto}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Categoria"
        onChangeText={setCategoria}
        value={categoria}
      />
      <TextInput
        style={styles.containerimput}
        placeholder="Descripcion"
        onChangeText={setDescripcion}
        value={descripcion}
      />
      <TouchableOpacity style={styles.Botones} onPress={() => guardarCompras(id, monto, categoria, descripcion)}>
        <Text style={styles.Botonestexto}>Registrar</Text>
      </TouchableOpacity>
    </View>
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
    height: 50,
    fontSize: 17,
    marginBottom: 15,
    width: 300,
    textAlign: 'center',
    color: '#333',
    fontWeight: '400',
    backgroundColor: 'rgba(255,255,255,.95)',
    borderRadius: 40,
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