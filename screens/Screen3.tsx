import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// La base de datos
import { db } from '../config2/Config';
import { onValue, ref, remove, set, update } from "firebase/database";

export default function Screen3() {
  const [id, setId] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [lista, setlista] = useState([])

  function leer(){
    const starCountRef = ref(db, 'usuarios/');  //linea ruta para leer datos
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  
    
    const listaTemp:any =Object.keys(data).map((id)=>({
      key: id, ...data[id]
    }))
  
    console.log(listaTemp);
    setlista(listaTemp)
    
  });


  useEffect(() => {
    leer()
  }, [])


  function eliminar(id: string){
    remove(ref(db, 'usuarios/' + id))
    .then(() => {
      Alert.alert('Mensaje', 'Compra Eliminada');
      leer(); // Volver a leer los datos para actualizar la lista
    })
    .catch((error) => {
      console.log(error);
    });
    
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
  }
  
  }

  function editar2(item: any){
    setId(item.key);
    setMonto(item.monto);
    setCategoria(item.categoria);
    setDescripcion(item.descripcion);
  }



  
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>
    </View>
   );
  }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100, 
    alignItems:'center'
  },
})