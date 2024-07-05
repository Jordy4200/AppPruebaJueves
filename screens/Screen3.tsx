import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// La base de datos
import { db } from '../config2/Config';
import { onValue, ref, remove, set, update } from "firebase/database";
import Informacion from '../components/Informacion';

export default function Screen3() {
  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setlista] = useState([])
  const [visible, setvisible] = useState(false)

  
  function leer(){
    const starCountRef = ref(db, 'usuarios/');  //linea ruta para leer datos
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  
    //CAMBIO DE FORMATO DE LOS DATOS
    const listaTemp:any =Object.keys(data).map((id)=>({
      key: id, ...data[id]
    }))
  
    console.log(listaTemp);
    setlista(listaTemp)
    
  });
  }

  useEffect(() => {
    leer()
  }, [])


  function eliminar(id: string){
    Alert.alert(
      "Confirmación",
      "¿Estás seguro de que quieres eliminar este usuario?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Eliminación cancelada"),
          style: "cancel"
        },
        { 
          text: "Eliminar", 
          onPress: () => {
            remove(ref(db, 'usuarios/' + id))
            .then(() => {
              Alert.alert('Mensaje', 'Usuario Eliminado');
              leer(); 
            })
            .catch((error) => {
              console.log(error);
            });
          } 
        }
      ],
      { cancelable: false }
    );
  }



  function editar(id: string){
    update(ref(db, 'usuarios/' + id), {
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    })
    .then(() => {
      Alert.alert('Mensaje', 'Datos actualizados con éxito');
      leer(); 
    })
    .catch((error) => {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar la información');
    });
  
    setId('');
    setMonto('');
    setCategoria('');
    setDescripcion('');
    leer();
    setvisible(false);
  }
  

  function editar2(item: any){
    setId(item.key);
    setMonto(item.monto);
    setCategoria(item.categoria);
    setDescripcion(item.descripcion);
    setvisible(true);
  }

  


  type Usuario = {
    id: string,
    monto: string,
    categoria: string,
    descripcion: string
    key:string
  };

  
  return (
    <View style={styles.container}>
      <Text>-Compras-</Text>
      <TextInput
        placeholder='Ingrese Cédula'
        style={styles.txt}
        keyboardType='numeric'
        onChangeText={(texto)=>setId(texto)}
        value={id}
      />
      <TextInput
        placeholder='Ingrese Monto'
        style={styles.txt}
        onChangeText={(texto)=>setMonto(texto)}
        value={monto}
      />
      <TextInput
        placeholder='Ingrese Categoria'
        style={styles.txt}
        onChangeText={(texto)=>setCategoria(texto)}
        value={categoria}
      />
      <TextInput
        placeholder='Ingrese Descripcion'
        style={styles.txt}
        onChangeText={(texto)=>setDescripcion(texto)}
        value={descripcion}
      />
      <View style={styles.buttonContainer}>
      <Button title='EDITAR' onPress={() => editar(id)} />
      </View>
      <FlatList
        data={lista}
        renderItem={({item}:{item:Usuario})=>
          <View style={styles.item}>
            <Informacion data={item} />
            <View style={styles.buttonContainer}>
            <Button title='Editar' color={'#3fbcd5'} onPress={() => editar2(item)} />
            <Button title='Eliminar' color={'#ff6347'} onPress={() => eliminar(item.key)} />
            </View>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    paddingTop: 50, 
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#ffffff', 
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5, 
    padding: 20, 
    marginVertical: 8, 
    marginHorizontal: 16, 
    flexDirection: 'column',
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 3,
    elevation: 3, 
  },
  
  buttonEditar: {
    backgroundColor: '#3fbcd5', 
    padding: 10,
    borderRadius: 5,
  },
  buttonEliminar: {
    backgroundColor: '#ff6347', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff', 
    fontWeight: 'bold', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginTop: 10, 
    paddingHorizontal: 10, 
  },
  txt: {
    backgroundColor: '#E0F7FA',
    height: 35,
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});